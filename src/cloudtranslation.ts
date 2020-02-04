
class Translations {

    constructor() {

        this.translation = [];
    }

    languageCode: string;
    translation: TranslationValue[];
}

class TranslationValue {

    default: string;
    text: string;
}

class Language {

    code: string;
    displayName: string;

    private _direction: string;
    get direction(): string {

        if (this._direction === undefined)
            return 'ltr';

        return this._direction;
    }

    set direction(value) {
        this._direction = value;
    }
}

enum TranslationStatusResult {
    ignored = 1,
    succeeded = 2,
    failed = 3
}

class TranslationStatus {

    constructor(element: HTMLElement, result: TranslationStatusResult, text?: string) {

        this.element = element;
        this.result = result;
        this.text = text;
    }

    element: HTMLElement;
    result: TranslationStatusResult;
    text: string;
    attribute: string;
}

class CloudTranslation {

    // Private Variables

    private static _languages: Language[];
    private static _translationsList: Translations[];
    private static _defaultLanguage: Language;
    private static _currentLanguage: Language;
    private static _configurationData;
    private static _supportsTranslateAttribute;

    private static get translationsList(): Translations[] {

        if (this._translationsList === undefined)
            this._translationsList = [];

        return this._translationsList;
    }

    private static addTranslationValue(languageCode: string, defaultText: string, translatedText: string): void {

        let translations = this.getTranslations(languageCode);

        if (translations === undefined) {
            translations = new Translations();
            translations.languageCode = languageCode;
            this._translationsList.push(translations);
        }

        let translationValue = new TranslationValue();
        translationValue.default = defaultText;
        translationValue.text = translatedText;

        translations.translation.push(translationValue)
    }

    private static getTranslations(languageCode: string): Translations {
        let t: Translations;

        this.translationsList.forEach((translations) => {
            if (translations.languageCode === languageCode)
                t = translations;
        });

        return t;
    }

    // Private Properties

    private static get nonTranslatedElements(): string[] {
        return ['code', 'html', 'head', 'head > *'];
    }

    private static get stylePropertiesToSwitch(): string[] {
        return ['padding-left', 'padding-right', 'margin-left', 'margin-right', 'border-left-width', 'border-right-width'];
    }

    private static get stylePropertiesToOpposite(): string[] {
        return ['text-align', 'float', 'background-position-x'];
    }

    private static get translatorProviderKey(): string {
        return this.configurationData.Settings.TranslatorProviderKey;
    }

    private static get translatorProvider(): string {
        return this.configurationData.Settings.TranslatorProvider;
    }

    private static get urlLanguageLocation(): string {
        return this.configurationData.Settings.UrlLanguageLocation;
    }

    private static get logTranslationsFromProvider(): boolean {

        if (this.configurationData.Settings.LogTranslationsFromProvider === undefined)
            return false;

        return this.configurationData.Settings.LogTranslationsFromProvider;
    }

    private static get supportsTranslateAttribute() {

        if (this._supportsTranslateAttribute !== undefined)
            return this._supportsTranslateAttribute;

        return this._supportsTranslateAttribute = $('body')[0].translate !== undefined;
    }

    private static doTranslateElement(element: HTMLElement): boolean {

        if (this.supportsTranslateAttribute) {
            if (element.translate === false || ($(element).closest('*[translate]')[0] !== undefined && $(element).closest('*[translate]')[0].translate === false))
                return false;
            else return true;
        }

        let attribute = $(element).attr('translate');

        if (attribute === undefined) {
            if ($(element).closest('*[translate]')[0] !== undefined && $(element).closest('*[translate]').attr('translate').toLowerCase() === 'no')
                return false;
            else return true;
        }

        if (attribute.toLowerCase() === 'no')
            return false;

        return true;
    }

    private static get configurationData() {

        if (CloudTranslation._configurationData !== undefined)
            return CloudTranslation._configurationData;

        CloudTranslation._configurationData = JSON.parse($('#cloudtranslation-config').html());
        $('#cloudtranslation-config').remove();
        return CloudTranslation._configurationData;
    }

    // Public Properties

    static get defaultLanguage(): Language {

        if (this._defaultLanguage !== undefined)
            return this._defaultLanguage;

        this.languages.forEach((language) => {
            if (language.code.toLowerCase() === this.configurationData.Settings.DefaultLanguage.toLowerCase())
                this._defaultLanguage = language;
        });

        return this._defaultLanguage;
    }

    static get languages(): Language[] {

        if (CloudTranslation._languages !== undefined)
            return CloudTranslation._languages;

        CloudTranslation._languages = [];

        $.each(CloudTranslation.configurationData.Languages, (key, value) => {

            let language: Language = new Language();

            language.code = value.Code;
            language.displayName = value.DisplayName;
            language.direction = value.Direction;

            CloudTranslation._languages.push(language);
        });

        return CloudTranslation._languages;
    }

    // Private Methods

    private static parseLanguage(requestLanguage: string): Language {

        requestLanguage = requestLanguage.trim().toLowerCase();

        let result: Language;

        this.languages.forEach((language) => {
            if (language.code.toLowerCase() === requestLanguage)
                result = language;
        });

        if (result !== undefined)
            return result;

        if (requestLanguage.indexOf('-') !== - 1)
            this.languages.forEach((language) => {

                if (language.code.toLowerCase() === requestLanguage.split('-')[0])
                    result = language;
            });

        if (result !== undefined)
            return result;

        return this.defaultLanguage;
    }

    private static get direction(): string {

        return this.currentLanguage.direction || 'ltr';
    }

    private static async translations(): Promise<Translations> {

        let translations = this.getTranslations(CloudTranslation.currentLanguage.code);

        if (translations !== undefined && translations.translation === null)
            return undefined;
        else if (translations !== undefined)
            return translations;

        let jsonPath = 'translation/' + this.currentLanguage.code.toLowerCase() + '.json';

        const fetchResponse = await fetch(jsonPath);

        if (!fetchResponse.ok) {
            let nullTranslations = new Translations();
            nullTranslations.languageCode = CloudTranslation.currentLanguage.code;
            nullTranslations.translation = null;

            this._translationsList.push(nullTranslations);

            return undefined;
        }

        const data = await fetchResponse.json();

        for (const value of data)
            this.addTranslationValue(CloudTranslation.currentLanguage.code, value['o'], value['t']);

        return this.getTranslations(CloudTranslation.currentLanguage.code);
    };

    private static async getTranslation(text: string): Promise<string> {

        if (this.currentLanguage.code === this.defaultLanguage.code)
            return text;

        var translation: TranslationValue = null;

        const results = await CloudTranslation.translations();

        if (results === undefined)
            return undefined;

        results.translation.forEach((t) => {

            if (t.default.trim() === text.trim())
                translation = t;
        })

        if (translation === null)
            return undefined;

        return translation.text.replace(text.trim(), translation.text);
    }

    private static async translateElement(element: HTMLElement): Promise<TranslationStatus[]> {

        if (element === undefined)
            return [];

        if (CloudTranslation.direction === 'rtl') {
            let style = element.style.cssText;

            if (style !== undefined) {

                $(element).data('_ctoriginalstyle', style);

                let rtlStyle = '';

                for (let i = 0; i < element.style.length; i++) {
                    let propertyName = element.style[i];

                    if (CloudTranslation.stylePropertiesToOpposite.indexOf(propertyName) !== -1)
                        rtlStyle += CloudTranslation.oppositeRTLCSSValues(element, propertyName);
                    else if (CloudTranslation.stylePropertiesToSwitch.indexOf(propertyName) !== -1)
                        rtlStyle += CloudTranslation.switchRTLCSSValues(element, propertyName);
                    else rtlStyle += propertyName + ': ' + element.style[propertyName] + '; ';
                }

                if (rtlStyle !== style) {
                    $(element).data('_ctoriginalstyle', style);
                    element.style.cssText = rtlStyle;
                }
            }

        } else {
            let originalStyle = $(element).data('_ctoriginalstyle');

            if (originalStyle !== '') {
                $(element).attr('style', originalStyle);
                $(element).removeData('_ctoriginalstyle');
            }
        }

        // Ignore attribute: translate="no"

        if (!this.doTranslateElement(element))
            return [];

        // Ignore links with mailto: and tel:

        if (element.tagName === 'A') {

            let elementHref = element.getAttribute('href');
            if (elementHref.indexOf(':') !== -1) {
                elementHref = elementHref.split(':')[0].toLowerCase();

                if (elementHref === 'mailto' || elementHref === 'tel') {
                    element.setAttribute('dir', 'ltr');

                    return [];
                }
            }
        }

        // Proceed with the translation

        let translationStatuses: TranslationStatus[] = [];

        try {
            let status = await CloudTranslation.translateElementText(element);
            translationStatuses.push(status);
        } catch (e) { }

        try {
            let status = await CloudTranslation.translateElementTitle(element);
            translationStatuses.push(status);
        } catch (e) { }

        return translationStatuses;
    }

    private static onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    private static async translateElementText(element: HTMLElement): Promise<TranslationStatus> {

        if (element.tagName.toLowerCase() == 'script')
        return new TranslationStatus(element, TranslationStatusResult.ignored);
        
        let childNode = element.childNodes[0];

        if (childNode === undefined)
            return new TranslationStatus(element, TranslationStatusResult.ignored);

        if (childNode.nodeValue === null)
            return new TranslationStatus(element, TranslationStatusResult.ignored);

        if (childNode.nodeValue.trim() === '')
            return new TranslationStatus(element, TranslationStatusResult.ignored);

        let translationStatus = await CloudTranslation.translate(element, '_ctoriginaltext', childNode.nodeValue);

        switch (translationStatus.result) {

            case TranslationStatusResult.succeeded:
                childNode.nodeValue = translationStatus.text;
                return translationStatus;

            case TranslationStatusResult.failed:
                childNode.nodeValue = translationStatus.text;
                translationStatus.attribute = 'text';
                return translationStatus;

            default:
                return translationStatus;
        }
    }

    private static async translateElementTitle(element: HTMLElement): Promise<TranslationStatus> {

        let translationStatus = await CloudTranslation.translate(element, '_ctoriginaltitle', element.title);

        switch (translationStatus.result) {

            case TranslationStatusResult.succeeded:
                element.title = translationStatus.text;
                return translationStatus;

            case TranslationStatusResult.failed:
                element.title = translationStatus.text;
                translationStatus.attribute = 'title';
                return translationStatus;

            default:
                return translationStatus;
        }
    }

    private static async translate(element: HTMLElement, dataValueName: string, currentValue: string): Promise<TranslationStatus> {

        let originalText: string;

        if ($(element).data(dataValueName) !== undefined)
            originalText = $(element).data(dataValueName);

        if ((originalText === undefined || originalText.trim() === '') && (currentValue === null || currentValue.trim() === ''))
            return new TranslationStatus(element, TranslationStatusResult.ignored);

        if (originalText === undefined || originalText.trim() === '')
            originalText = currentValue;

        let translatedText = await CloudTranslation.getTranslation(originalText);

        if (translatedText === undefined) {

            $(element).removeData(dataValueName);

            return new TranslationStatus(element, TranslationStatusResult.failed, originalText);
        }

        if (translatedText !== originalText)
            $(element).data(dataValueName, originalText);
        else
            $(element).removeData(dataValueName);

        return new TranslationStatus(element, TranslationStatusResult.succeeded, translatedText);
    }

    private static addRTLCSS(): void {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = CloudTranslation.generateRTLCSS();
        document.getElementsByTagName('head')[0].appendChild(style);
    }

    private static generateRTLCSS(): string {

        let style = 'html[dir="rtl"] {direction: rtl;}';

        $.each(document.styleSheets, function (index, sheet) {

            try {
                style += CloudTranslation.getRulesStyle(sheet['cssRules'] || sheet['rules']);
            } catch (e) { }
        });

        return style;
    }

    private static getRulesStyle(rules): string {

        let result = '';

        $.each(rules, function (index, rule) {

            if (rule.type === 4) {
                let mediaStyle;

                try {
                    mediaStyle = CloudTranslation.getRulesStyle(rule['cssRules'] || rule['rules']);
                } catch (e) { return; }

                if (mediaStyle !== '') {
                    result += '@media ' + rule.conditionText + '{';
                    result += mediaStyle;
                    result += '}';
                }
            }

            if (rule.style === undefined)
                return;

            let selectorStyle = '';

            CloudTranslation.stylePropertiesToOpposite.forEach((property) => {
                selectorStyle += CloudTranslation.oppositeRTLCSSValues(rule, property);
            });

            CloudTranslation.stylePropertiesToSwitch.forEach((property) => {
                selectorStyle += CloudTranslation.switchRTLCSSValues(rule, property);
            });

            // Insert Class

            if (selectorStyle !== '')
                result += 'html[dir=rtl] ' + rule.selectorText + '{' + selectorStyle + '}';

        });

        return result;
    }

    private static switchRTLCSSValues(rule, name: string): string {

        let value = rule.style[name];

        if (value === '')
            return '';

        let style = '';

        if (name.indexOf('left') !== -1)
            name = name.replace('left', 'right');
        else name = name.replace('right', 'left');

        style += name + ': ' + value + ';'

        return style;
    }

    private static oppositeRTLCSSValues(rule, name: string): string {

        let value: string = rule.style[name];

        if (value === '')
            return '';

        let style = '';

        if (value === 'left')
            style += name + ': right;'
        else if (value === 'right')
            style += name + ': left;'
        else if (CloudTranslation.canBeNegative(value)) {

            if (value.indexOf('-') === 0)
                style += name + ': ' + value.substr(1) + ';'
            else
                style += name + ': -' + value + ';'
        }

        return style;
    }

    private static canBeNegative(value: string): boolean {
        let unites: string[] = ['px', 'pt', 'pc', 'cm', 'mm', 'in', 'em', 'rem', 'vw', 'vh', 'ex', 'ch', 'vmin', 'vmax', '%'];

        let isTrue = false;

        unites.forEach((unit) => {
            if (value.indexOf(unit) > 0 && value.indexOf(' ') === -1)
                isTrue = true;
        });

        return isTrue;
    }

    private static async azureAutoTranslate(texts: string[]): Promise<string[]> {

        if (texts.length === 0)
            return [];

        let bodyData = '';

        texts.forEach((text) => { bodyData += '{"Text": "' + text + '"},' });

        let translatedTexts: string[] = [];

        try {
            let data = await $.ajax({
                url: 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=' + this.defaultLanguage.code + '&to=' + this.currentLanguage.code,
                type: "POST",
                dataType: 'json',
                data: '[' + bodyData + ']',
                cache: true,

                beforeSend: (xhrObj) => {
                    xhrObj.setRequestHeader("Content-Type", "application/json");
                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", this.translatorProviderKey);
                },
            });


            let jsonTranslations = [];

            $.each(data, (index, translations) => {
                translatedTexts[index] = translations.translations[0].text;

                if (this.logTranslationsFromProvider)
                    jsonTranslations.push('{"o": "' + texts[index].trim() + '", "t": "' + translatedTexts[index].trim() + '"}');
            });


            if (this.logTranslationsFromProvider)
                console.log('[' + jsonTranslations.join(',') + ']');

        } catch (e) {
            console.log(e.responseJSON.error.message);
            console.log(bodyData);
        }

        return translatedTexts;
    }

    // Public Methods

    static updateCurrentLanguage(): void {
        let localStorageLanguage: Language;
        let urlLanguage: Language;
        let browserLanguage: Language;

        let result: string;

        // Local Storage
        try {
            result = localStorage.getItem('lang');
        } catch{
            console.log('localStorage is not supported.');
            result = null;
        }

        if (result !== null)
            localStorageLanguage = this.parseLanguage(result);

        // URL

        if (this.urlLanguageLocation !== undefined) {

            let urlValue: string;

            if (this.urlLanguageLocation === 'Subdirectory')
                urlValue = window.location.pathname.split('/')[1];

            if (urlValue !== undefined)
                if (urlValue.length === 2 || (urlValue.length === 5 && urlValue.indexOf('-') === 2)) {

                    this.languages.forEach((language) => {
                        if (language.code.toLowerCase() === urlValue.toLowerCase())
                            result = language.code;
                    });

                    if (urlValue.indexOf('-') !== -1 && result === undefined) {

                        urlValue = urlValue.split('-')[0];

                        this.languages.forEach((language) => {
                            if (language.code.toLowerCase() === urlValue.toLowerCase())
                                result = language.code;
                        });
                    }

                    if (result !== undefined)
                        urlLanguage = this.parseLanguage(result);
                }
        }

        // Browser

        result = navigator['language'] || navigator['userLanguage'];

        if (result !== undefined)
            browserLanguage = this.parseLanguage(result);

        // Consolidation

        if (urlLanguage !== undefined)
            this.setCurrentLanguage(urlLanguage.code);

        else if (localStorageLanguage !== undefined)
            this.setCurrentLanguage(localStorageLanguage.code);

        else if (browserLanguage !== undefined)
            this.setCurrentLanguage(browserLanguage.code);

        else this.setCurrentLanguage(this.defaultLanguage.code);
    }

    static get currentLanguage(): Language {

        if (this._currentLanguage !== undefined)
            return this._currentLanguage;

        this.updateCurrentLanguage();
        return this._currentLanguage;
    }

    private static updateUrlLanguage(): void {

        if (this.urlLanguageLocation === undefined)
            return;

        if (this.urlLanguageLocation === 'Subdirectory') {
            let pathnameSplitted = window.location.pathname.split('/');

            let currentLanguageCode = pathnameSplitted[1];

            if (currentLanguageCode.length === 2 || (currentLanguageCode.length === 5 && currentLanguageCode.indexOf('-') === 2))
                pathnameSplitted[1] = this.currentLanguage.code;
            else pathnameSplitted.splice(1, 0, this.currentLanguage.code);

            history.replaceState(null, null, pathnameSplitted.join('/'));
        }
    }

    static setCurrentLanguage(languageCode: string): void {
        this._currentLanguage = this.parseLanguage(languageCode);

        try {
            localStorage.setItem('lang', this._currentLanguage.code);
        } catch{
            console.log('localStorage is not supported.');
        }
        this.updateUrlLanguage();
    }

    static async translateDOM(): Promise<void> {

        $('html').attr('lang', CloudTranslation.currentLanguage.code);
        $('html').attr('dir', CloudTranslation.direction);

        let styleSheet: StyleSheet;

        $.each(document.styleSheets, function (index, sheet) {
            try {
                $.each(sheet['cssRules'] || sheet['rules'], function (ruleIndex, rule) {

                    if (rule.cssText === 'html[dir="rtl"] { direction: rtl; }')
                        styleSheet = sheet;
                });
            } catch (e) { }
        });

        if (CloudTranslation.direction === 'rtl' && styleSheet === undefined)
            CloudTranslation.addRTLCSS();

        var selection = '*';
        CloudTranslation.nonTranslatedElements.forEach((element) => {
            selection += ':not(' + '"' + element + '"' + ')'
        });

        let translationStatuses: TranslationStatus[] = [];

        for (const e of $(selection).toArray()) {
            try {

                const results = await CloudTranslation.translateElement(e);

                results.forEach((status) => {
                    translationStatuses.push(status);
                });
            } catch (e) { }
        };

        if (this.currentLanguage.code !== this.defaultLanguage.code) {

            let originalTexts: string[] = [];

            translationStatuses.forEach((status) => {

                try {
                    switch (status.result) {

                        case TranslationStatusResult.failed:

                            originalTexts.push(status.text.replace(/"/g, '\\"'))
                            break;

                        default:
                            break;
                    }
                } catch (e) { }
            });

            originalTexts = originalTexts.filter(this.onlyUnique);

            if (this.translatorProvider.toLowerCase() === 'azure' && CloudTranslation.getTranslations(CloudTranslation.currentLanguage.code).translation === null) {
                try {
                    let translatedTexts = await this.azureAutoTranslate(originalTexts);

                    $.each(translatedTexts, (index, text) => {

                        try {
                            CloudTranslation.addTranslationValue(CloudTranslation.currentLanguage.code, originalTexts[index], text);
                        } catch (e) { }
                    });
                } catch (e) { }
            }

            for (const status of translationStatuses) {

                switch (status.result) {

                    case TranslationStatusResult.failed:

                        if (status.attribute === 'title')
                            await CloudTranslation.translateElementTitle(status.element);
                        else
                            await CloudTranslation.translateElementText(status.element);
                        break;

                    default:
                        break;
                }
            };

        }

        this._currentLanguage = undefined;
    }

    static fillInLanguages(): void {

        let selection = $('.cloudtranslation-selection');

        if (selection.length === 0)
            return;

        selection.attr('translate', 'no');

        selection.html('');

        let currentLanguage: string = this.currentLanguage.code;

        CloudTranslation.languages.forEach((language) => {
            $('.cloudtranslation-selection').append('<option value="' + language.code + '"' + (language.code === currentLanguage ? ' selected ' : '') + '>' + language.displayName + '</option>')
        });
    }

}

$(async function () {

    CloudTranslation.updateCurrentLanguage();
    CloudTranslation.fillInLanguages();

    await CloudTranslation.translateDOM();
});

$(document).on('change', '.cloudtranslation-selection', async function () {

    let languageCode = $(this).val().toString();

    if (languageCode !== '')
        CloudTranslation.setCurrentLanguage(languageCode);

    await CloudTranslation.translateDOM();

    $('html, body, #body, .body, #Body, .Body').animate({ scrollTop: 0 }, 'fast');
});