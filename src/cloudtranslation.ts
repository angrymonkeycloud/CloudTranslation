
class Translations {

    constructor() {

        this.Translation = [];
    }

    LanguageCode: string;
    Translation: TranslationValue[];
}

class TranslationValue {

    Default: string;
    Text: string;
}

class Language {

    Code: string;
    DisplayName: string;

    private _direction: string;
    get Direction(): string {

        if (this._direction === undefined)
            return 'ltr';

        return this._direction;
    }

    set Direction(value) {
        this._direction = value;
    }
}

enum TranslationStatusResult {
    Ignored = 1,
    Succeeded = 2,
    Failed = 3
}

class TranslationStatus {

    constructor(element: HTMLElement, result: TranslationStatusResult, text?: string) {

        this.Element = element;
        this.Result = result;
        this.Text = text;
    }

    Element: HTMLElement;
    Result: TranslationStatusResult;
    Text: string;
    Attribute: string;
}

class CloudTranslation {

    // Private Variables

    private static _languages: Language[];
    private static _translationsList: Translations[];
    private static _defaultLanguage: Language;
    private static _currentLanguage: Language;
    private static _configurationData;
    private static _supportsTranslateAttribute;

    private static get TranslationsList(): Translations[] {

        if (this._translationsList === undefined)
            this._translationsList = [];

        return this._translationsList;
    }

    private static AddTranslationValue(languageCode: string, defaultText: string, translatedText: string): void {

        let translations = this.GetTranslations(languageCode);

        if (translations === undefined) {
            translations = new Translations();
            translations.LanguageCode = languageCode;
            this._translationsList.push(translations);
        }

        let translationValue = new TranslationValue();
        translationValue.Default = defaultText;
        translationValue.Text = translatedText;

        translations.Translation.push(translationValue)
    }

    private static GetTranslations(languageCode: string): Translations {
        let t: Translations;

        this.TranslationsList.forEach((translations) => {
            if (translations.LanguageCode === languageCode)
                t = translations;
        });

        return t;
    }

    // Private Properties

    private static get NonTranslatedElements(): string[] {
        return ['code', 'html', 'head', 'head > *'];
    }

    private static get StylePropertiesToSwitch(): string[] {
        return ['padding-left', 'padding-right', 'margin-left', 'margin-right', 'border-left-width', 'border-right-width'];
    }

    private static get StylePropertiesToOpposite(): string[] {
        return ['text-align', 'float', 'background-position-x'];
    }

    private static get TranslatorProviderKey(): string {
        return this.ConfigurationData.Settings.TranslatorProviderKey;
    }

    private static get TranslatorProvider(): string {
        return this.ConfigurationData.Settings.TranslatorProvider;
    }

    private static get UrlLanguageLocation(): string {
        return this.ConfigurationData.Settings.UrlLanguageLocation;
    }

    private static get LogTranslationsFromProvider(): boolean {

        if (this.ConfigurationData.Settings.LogTranslationsFromProvider === undefined)
            return false;

        return this.ConfigurationData.Settings.LogTranslationsFromProvider;
    }

    private static get SupportsTranslateAttribute() {

        if (this._supportsTranslateAttribute !== undefined)
            return this._supportsTranslateAttribute;

        return this._supportsTranslateAttribute = $('body')[0].translate !== undefined;
    }

    private static DoTranslateElement(element: HTMLElement): boolean {

        if (this.SupportsTranslateAttribute) {
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

    private static get ConfigurationData() {

        if (CloudTranslation._configurationData !== undefined)
            return CloudTranslation._configurationData;

        CloudTranslation._configurationData = JSON.parse($('#cloudtranslation-config').html());
        $('#cloudtranslation-config').remove();
        return CloudTranslation._configurationData;
    }

    // Public Properties

    static get DefaultLanguage(): Language {

        if (this._defaultLanguage !== undefined)
            return this._defaultLanguage;

        this.Languages.forEach((language) => {
            if (language.Code.toLowerCase() === this.ConfigurationData.Settings.DefaultLanguage.toLowerCase())
                this._defaultLanguage = language;
        });

        return this._defaultLanguage;
    }

    static get Languages(): Language[] {

        if (CloudTranslation._languages !== undefined)
            return CloudTranslation._languages;

        CloudTranslation._languages = [];

        $.each(CloudTranslation.ConfigurationData.Languages, (key, value) => {

            let language: Language = new Language();

            language.Code = value.Code;
            language.DisplayName = value.DisplayName;
            language.Direction = value.Direction;

            CloudTranslation._languages.push(language);
        });

        return CloudTranslation._languages;
    }

    // Private Methods

    private static ParseLanguage(requestLanguage: string): Language {

        requestLanguage = requestLanguage.trim().toLowerCase();

        let result: Language;

        this.Languages.forEach((language) => {
            if (language.Code.toLowerCase() === requestLanguage)
                result = language;
        });

        if (result !== undefined)
            return result;

        if (requestLanguage.indexOf('-') !== - 1)
            this.Languages.forEach((language) => {

                if (language.Code.toLowerCase() === requestLanguage.split('-')[0])
                    result = language;
            });

        if (result !== undefined)
            return result;

        return this.DefaultLanguage;
    }

    private static get Direction(): string {

        return this.CurrentLanguage.Direction || 'ltr';
    }

    private static async Translations(): Promise<Translations> {

        let translations = this.GetTranslations(CloudTranslation.CurrentLanguage.Code);

        if (translations !== undefined && translations.Translation === null)
            return undefined;
        else if (translations !== undefined)
            return translations;

        let jsonPath = 'translation/' + this.CurrentLanguage.Code.toLowerCase() + '.json';

        const fetchResponse = await fetch(jsonPath);

        if (!fetchResponse.ok) {
            let nullTranslations = new Translations();
            nullTranslations.LanguageCode = CloudTranslation.CurrentLanguage.Code;
            nullTranslations.Translation = null;

            this._translationsList.push(nullTranslations);

            return undefined;
        }

        const data = await fetchResponse.json();

        for (const value of data)
            this.AddTranslationValue(CloudTranslation.CurrentLanguage.Code, value['o'], value['t']);

        return this.GetTranslations(CloudTranslation.CurrentLanguage.Code);
    };

    private static async GetTranslation(text: string): Promise<string> {

        if (this.CurrentLanguage.Code === this.DefaultLanguage.Code)
            return text;

        var translation: TranslationValue = null;

        const results = await CloudTranslation.Translations();

        if (results === undefined)
            return undefined;

        results.Translation.forEach((t) => {

            if (t.Default.trim() === text.trim())
                translation = t;
        })

        if (translation === null)
            return undefined;

        return translation.Text.replace(text.trim(), translation.Text);
    }

    private static async TranslateElement(element: HTMLElement): Promise<TranslationStatus[]> {

        if (element === undefined)
            return [];

        if (CloudTranslation.Direction === 'rtl') {
            let style = element.style.cssText;

            if (style !== undefined) {

                $(element).data('_ctoriginalstyle', style);

                let rtlStyle = '';

                for (let i = 0; i < element.style.length; i++) {
                    let propertyName = element.style[i];

                    if (CloudTranslation.StylePropertiesToOpposite.indexOf(propertyName) !== -1)
                        rtlStyle += CloudTranslation.OppositeRTLCSSValues(element, propertyName);
                    else if (CloudTranslation.StylePropertiesToSwitch.indexOf(propertyName) !== -1)
                        rtlStyle += CloudTranslation.SwitchRTLCSSValues(element, propertyName);
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

        if (!this.DoTranslateElement(element))
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
            let status = await CloudTranslation.TranslateElementText(element);
            translationStatuses.push(status);
        } catch (e) { }

        try {
            let status = await CloudTranslation.TranslateElementTitle(element);
            translationStatuses.push(status);
        } catch (e) { }

        return translationStatuses;
    }

    private static OnlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    private static async TranslateElementText(element: HTMLElement): Promise<TranslationStatus> {

        if (element.tagName.toLowerCase() == 'script')
        return new TranslationStatus(element, TranslationStatusResult.Ignored);
        
        let childNode = element.childNodes[0];

        if (childNode === undefined)
            return new TranslationStatus(element, TranslationStatusResult.Ignored);

        if (childNode.nodeValue === null)
            return new TranslationStatus(element, TranslationStatusResult.Ignored);

        if (childNode.nodeValue.trim() === '')
            return new TranslationStatus(element, TranslationStatusResult.Ignored);

        let translationStatus = await CloudTranslation.Translate(element, '_ctoriginaltext', childNode.nodeValue);

        switch (translationStatus.Result) {

            case TranslationStatusResult.Succeeded:
                childNode.nodeValue = translationStatus.Text;
                return translationStatus;

            case TranslationStatusResult.Failed:
                childNode.nodeValue = translationStatus.Text;
                translationStatus.Attribute = 'text';
                return translationStatus;

            default:
                return translationStatus;
        }
    }

    private static async TranslateElementTitle(element: HTMLElement): Promise<TranslationStatus> {

        let translationStatus = await CloudTranslation.Translate(element, '_ctoriginaltitle', element.title);

        switch (translationStatus.Result) {

            case TranslationStatusResult.Succeeded:
                element.title = translationStatus.Text;
                return translationStatus;

            case TranslationStatusResult.Failed:
                element.title = translationStatus.Text;
                translationStatus.Attribute = 'title';
                return translationStatus;

            default:
                return translationStatus;
        }
    }

    private static async Translate(element: HTMLElement, dataValueName: string, currentValue: string): Promise<TranslationStatus> {

        let originalText: string;

        if ($(element).data(dataValueName) !== undefined)
            originalText = $(element).data(dataValueName);

        if ((originalText === undefined || originalText.trim() === '') && (currentValue === null || currentValue.trim() === ''))
            return new TranslationStatus(element, TranslationStatusResult.Ignored);

        if (originalText === undefined || originalText.trim() === '')
            originalText = currentValue;

        let translatedText = await CloudTranslation.GetTranslation(originalText);

        if (translatedText === undefined) {

            $(element).removeData(dataValueName);

            return new TranslationStatus(element, TranslationStatusResult.Failed, originalText);
        }

        if (translatedText !== originalText)
            $(element).data(dataValueName, originalText);
        else
            $(element).removeData(dataValueName);

        return new TranslationStatus(element, TranslationStatusResult.Succeeded, translatedText);
    }

    private static AddRTLCSS(): void {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = CloudTranslation.GenerateRTLCSS();
        document.getElementsByTagName('head')[0].appendChild(style);
    }

    private static GenerateRTLCSS(): string {

        let style = 'html[dir="rtl"] {direction: rtl;}';

        $.each(document.styleSheets, function (index, sheet) {

            try {
                style += CloudTranslation.GetRulesStyle(sheet['cssRules'] || sheet['rules']);
            } catch (e) { }
        });

        return style;
    }

    private static GetRulesStyle(rules): string {

        let result = '';

        $.each(rules, function (index, rule) {

            if (rule.type === 4) {
                let mediaStyle;

                try {
                    mediaStyle = CloudTranslation.GetRulesStyle(rule['cssRules'] || rule['rules']);
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

            CloudTranslation.StylePropertiesToOpposite.forEach((property) => {
                selectorStyle += CloudTranslation.OppositeRTLCSSValues(rule, property);
            });

            CloudTranslation.StylePropertiesToSwitch.forEach((property) => {
                selectorStyle += CloudTranslation.SwitchRTLCSSValues(rule, property);
            });

            // Insert Class

            if (selectorStyle !== '')
                result += 'html[dir=rtl] ' + rule.selectorText + '{' + selectorStyle + '}';

        });

        return result;
    }

    private static SwitchRTLCSSValues(rule, name: string): string {

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

    private static OppositeRTLCSSValues(rule, name: string): string {

        let value: string = rule.style[name];

        if (value === '')
            return '';

        let style = '';

        if (value === 'left')
            style += name + ': right;'
        else if (value === 'right')
            style += name + ': left;'
        else if (CloudTranslation.CanBeNegative(value)) {

            if (value.indexOf('-') === 0)
                style += name + ': ' + value.substr(1) + ';'
            else
                style += name + ': -' + value + ';'
        }

        return style;
    }

    private static CanBeNegative(value: string): boolean {
        let unites: string[] = ['px', 'pt', 'pc', 'cm', 'mm', 'in', 'em', 'rem', 'vw', 'vh', 'ex', 'ch', 'vmin', 'vmax', '%'];

        let isTrue = false;

        unites.forEach((unit) => {
            if (value.indexOf(unit) > 0 && value.indexOf(' ') === -1)
                isTrue = true;
        });

        return isTrue;
    }

    private static async AzureAutoTranslate(texts: string[]): Promise<string[]> {

        if (texts.length === 0)
            return [];

        let bodyData = '';

        texts.forEach((text) => { bodyData += '{"Text": "' + text + '"},' });

        let translatedTexts: string[] = [];

        try {
            let data = await $.ajax({
                url: 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=' + this.DefaultLanguage.Code + '&to=' + this.CurrentLanguage.Code,
                type: "POST",
                dataType: 'json',
                data: '[' + bodyData + ']',
                cache: true,

                beforeSend: (xhrObj) => {
                    xhrObj.setRequestHeader("Content-Type", "application/json");
                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", this.TranslatorProviderKey);
                },
            });


            let jsonTranslations = [];

            $.each(data, (index, translations) => {
                translatedTexts[index] = translations.translations[0].text;

                if (this.LogTranslationsFromProvider)
                    jsonTranslations.push('{"o": "' + texts[index].trim() + '", "t": "' + translatedTexts[index].trim() + '"}');
            });


            if (this.LogTranslationsFromProvider)
                console.log('[' + jsonTranslations.join(',') + ']');

        } catch (e) {
            console.log(e.responseJSON.error.message);
            console.log(bodyData);
        }

        return translatedTexts;
    }

    // Public Methods

    static UpdateCurrentLanguage(): void {
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
            localStorageLanguage = this.ParseLanguage(result);

        // URL

        if (this.UrlLanguageLocation !== undefined) {

            let urlValue: string;

            if (this.UrlLanguageLocation === 'Subdirectory')
                urlValue = window.location.pathname.split('/')[1];

            if (urlValue !== undefined)
                if (urlValue.length === 2 || (urlValue.length === 5 && urlValue.indexOf('-') === 2)) {

                    this.Languages.forEach((language) => {
                        if (language.Code.toLowerCase() === urlValue.toLowerCase())
                            result = language.Code;
                    });

                    if (urlValue.indexOf('-') !== -1 && result === undefined) {

                        urlValue = urlValue.split('-')[0];

                        this.Languages.forEach((language) => {
                            if (language.Code.toLowerCase() === urlValue.toLowerCase())
                                result = language.Code;
                        });
                    }

                    if (result !== undefined)
                        urlLanguage = this.ParseLanguage(result);
                }
        }

        // Browser

        result = navigator['language'] || navigator['userLanguage'];

        if (result !== undefined)
            browserLanguage = this.ParseLanguage(result);

        // Consolidation

        if (urlLanguage !== undefined)
            this.SetCurrentLanguage(urlLanguage.Code);

        else if (localStorageLanguage !== undefined)
            this.SetCurrentLanguage(localStorageLanguage.Code);

        else if (browserLanguage !== undefined)
            this.SetCurrentLanguage(browserLanguage.Code);

        else this.SetCurrentLanguage(this.DefaultLanguage.Code);
    }

    static get CurrentLanguage(): Language {

        if (this._currentLanguage !== undefined)
            return this._currentLanguage;

        this.UpdateCurrentLanguage();
        return this._currentLanguage;
    }

    private static UpdateUrlLanguage(): void {

        if (this.UrlLanguageLocation === undefined)
            return;

        if (this.UrlLanguageLocation === 'Subdirectory') {
            let pathnameSplitted = window.location.pathname.split('/');

            let currentLanguageCode = pathnameSplitted[1];

            if (currentLanguageCode.length === 2 || (currentLanguageCode.length === 5 && currentLanguageCode.indexOf('-') === 2))
                pathnameSplitted[1] = this.CurrentLanguage.Code;
            else pathnameSplitted.splice(1, 0, this.CurrentLanguage.Code);

            history.replaceState(null, null, pathnameSplitted.join('/'));
        }
    }

    static SetCurrentLanguage(languageCode: string): void {
        this._currentLanguage = this.ParseLanguage(languageCode);

        try {
            localStorage.setItem('lang', this._currentLanguage.Code);
        } catch{
            console.log('localStorage is not supported.');
        }
        this.UpdateUrlLanguage();
    }

    static async TranslateDOM(): Promise<void> {

        $('html').attr('lang', CloudTranslation.CurrentLanguage.Code);
        $('html').attr('dir', CloudTranslation.Direction);

        let styleSheet: StyleSheet;

        $.each(document.styleSheets, function (index, sheet) {
            try {
                $.each(sheet['cssRules'] || sheet['rules'], function (ruleIndex, rule) {

                    if (rule.cssText === 'html[dir="rtl"] { direction: rtl; }')
                        styleSheet = sheet;
                });
            } catch (e) { }
        });

        if (CloudTranslation.Direction === 'rtl' && styleSheet === undefined)
            CloudTranslation.AddRTLCSS();

        var selection = '*';
        CloudTranslation.NonTranslatedElements.forEach((element) => {
            selection += ':not(' + '"' + element + '"' + ')'
        });

        let translationStatuses: TranslationStatus[] = [];

        for (const e of $(selection).toArray()) {
            try {

                const results = await CloudTranslation.TranslateElement(e);

                results.forEach((status) => {
                    translationStatuses.push(status);
                });
            } catch (e) { }
        };

        if (this.CurrentLanguage.Code !== this.DefaultLanguage.Code) {

            let originalTexts: string[] = [];

            translationStatuses.forEach((status) => {

                try {
                    switch (status.Result) {

                        case TranslationStatusResult.Failed:

                            originalTexts.push(status.Text.replace(/"/g, '\\"'))
                            break;

                        default:
                            break;
                    }
                } catch (e) { }
            });

            originalTexts = originalTexts.filter(this.OnlyUnique);

            if (this.TranslatorProvider.toLowerCase() === 'azure' && CloudTranslation.GetTranslations(CloudTranslation.CurrentLanguage.Code).Translation === null) {
                try {
                    let translatedTexts = await this.AzureAutoTranslate(originalTexts);

                    $.each(translatedTexts, (index, text) => {

                        try {
                            CloudTranslation.AddTranslationValue(CloudTranslation.CurrentLanguage.Code, originalTexts[index], text);
                        } catch (e) { }
                    });
                } catch (e) { }
            }

            for (const status of translationStatuses) {

                switch (status.Result) {

                    case TranslationStatusResult.Failed:

                        if (status.Attribute === 'title')
                            await CloudTranslation.TranslateElementTitle(status.Element);
                        else
                            await CloudTranslation.TranslateElementText(status.Element);
                        break;

                    default:
                        break;
                }
            };

        }

        this._currentLanguage = undefined;
    }

    static FillInLanguages(): void {

        let selection = $('.cloudtranslation-selection');

        if (selection.length === 0)
            return;

        selection.attr('translate', 'no');

        selection.html('');

        let currentLanguage: string = this.CurrentLanguage.Code;

        CloudTranslation.Languages.forEach((language) => {
            $('.cloudtranslation-selection').append('<option value="' + language.Code + '"' + (language.Code === currentLanguage ? ' selected ' : '') + '>' + language.DisplayName + '</option>')
        });
    }

}

$(async function () {

    CloudTranslation.UpdateCurrentLanguage();
    CloudTranslation.FillInLanguages();

    await CloudTranslation.TranslateDOM();
});

$(document).on('change', '.cloudtranslation-selection', async function () {

    let languageCode = $(this).val().toString();

    if (languageCode !== '')
        CloudTranslation.SetCurrentLanguage(languageCode);

    await CloudTranslation.TranslateDOM();

    $('html, body, #body, .body, #Body, .Body').animate({ scrollTop: 0 }, 'fast');
});