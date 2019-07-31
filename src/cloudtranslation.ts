
class Translation {
    
    constructor() {
        this.Translations = [];
    }
    
    Default: TranslationValue;
    Translations: TranslationValue[];
}

class TranslationValue {
    constructor(language: string, text: string) {
        this.Language = language;
        this.Text = text;
    }
    
    Language: string;
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
    private static _translations: Translation[];
    private static _defaultLanguage: Language;
    private static _currentLanguage: Language;
    private static _configurationData;
    private static _supportsTranslateAttribute;
    
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
    
    private static get SupportsTranslateAttribute(){
        
        if (this._supportsTranslateAttribute !== undefined)
        return this._supportsTranslateAttribute;
        
        return this._supportsTranslateAttribute = $('body')[0].translate !== undefined; 
    }
    
    private static DoTranslateElement(element:HTMLElement) : boolean{
        
        if (this.SupportsTranslateAttribute){
            if (element.translate === false || ($(element).closest('*[translate]')[0] !== undefined && $(element).closest('*[translate]')[0].translate === false))
            return false;
            else return true;    
        }
        
        let attribute = $(element).attr('translate');
        
        if (attribute === undefined){
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
        
        CloudTranslation._configurationData = JSON.parse($('#CloudTranslationConfig').html());
        $('#CloudTranslationConfig').remove();
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
    
    private static get Translations(): Translation[] {
        
        if (CloudTranslation._translations !== undefined)
        return CloudTranslation._translations;
        
        CloudTranslation._translations = [];
        
        $.each(CloudTranslation.ConfigurationData.Translations, (key, value) => {
            
            let translation: Translation = new Translation();
            translation.Default = new TranslationValue(CloudTranslation.DefaultLanguage.Code, value[CloudTranslation.DefaultLanguage.Code]);
            
            let currentLanguageCode = CloudTranslation.CurrentLanguage.Code;
            
            if (value[currentLanguageCode] === undefined) {
                
                if (currentLanguageCode.indexOf('-') !== -1)
                currentLanguageCode = currentLanguageCode.split('-')[0];
                
                if (value[currentLanguageCode] === undefined)
                return;
            }
            
            translation.Translations.push(new TranslationValue(CloudTranslation.CurrentLanguage.Code, value[currentLanguageCode]));
            
            CloudTranslation._translations.push(translation);
        });
        
        return CloudTranslation._translations;
    }
    
    private static GetTranslation(text: string): string {
        
        if (this.CurrentLanguage.Code === this.DefaultLanguage.Code)
        return text;
        
        var translation = null;
        
        CloudTranslation.Translations.forEach((t) => {
            if (t.Default.Text.trim() === text.trim())
            translation = t;
        });
        
        if (translation === null)
        return undefined;
        
        translation.Translations.forEach((t) => {
            if (t.Language === CloudTranslation.CurrentLanguage.Code)
            text = text.replace(text.trim(), t.Text);
        });
        
        return text;
    }
    
    private static TranslateElement(element: HTMLElement): TranslationStatus[] {
        
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
            translationStatuses.push(CloudTranslation.TranslateElementText(element));
        } catch (e) { }
        
        try {
            translationStatuses.push(CloudTranslation.TranslateElementTitle(element));
        } catch (e) { }
        
        return translationStatuses;
    }
    
    private static OnlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    
    private static TranslateElementText(element: HTMLElement): TranslationStatus {
        
        let childNode = element.childNodes[0];
        
        if (childNode === undefined)
        return new TranslationStatus(element, TranslationStatusResult.Ignored);
        
        if (childNode.nodeValue === null)
        return new TranslationStatus(element, TranslationStatusResult.Ignored);
        
        if (childNode.nodeValue.trim() === '')
        return new TranslationStatus(element, TranslationStatusResult.Ignored);
        
        let translationStatus = CloudTranslation.Translate(element, '_ctoriginaltext', childNode.nodeValue);
        
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
    
    private static TranslateElementTitle(element: HTMLElement): TranslationStatus {
        
        let translationStatus = CloudTranslation.Translate(element, '_ctoriginaltitle', element.title);
        
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
    
    private static Translate(element: HTMLElement, dataValueName: string, currentValue: string): TranslationStatus {
        
        let originalText;
        
        if ($(element).data(dataValueName) !== undefined)
        originalText = $(element).data(dataValueName);
        
        if ((originalText === undefined || originalText.trim() === '') && (currentValue === null || currentValue.trim() === ''))
        return new TranslationStatus(element, TranslationStatusResult.Ignored);
        
        if (originalText === undefined || originalText.trim() === '')
        originalText = currentValue;
        
        let translatedText = CloudTranslation.GetTranslation(originalText);
        
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
        
        let translatedTexts: string[] = [];
        
        let jsonTranslations = '';
        
        $.each(data, (index, translations) => {
            translatedTexts[index] = translations.translations[0].text;
            
            if (this.LogTranslationsFromProvider)
            jsonTranslations += '{"' + this.DefaultLanguage.Code + '": "' + texts[index] + '", "' + this.CurrentLanguage.Code + '": "' + translatedTexts[index] + '"},';
        });
        
        
        if (this.LogTranslationsFromProvider)
        console.log(jsonTranslations);
        
        return translatedTexts;
    }
    
    // Public Methods
    
    static UpdateCurrentLanguage(): void {
        let localStorageLanguage: Language;
        let urlLanguage: Language;
        let browserLanguage: Language;
        
        let result: string;
        
        // Local Storage
        result = localStorage.getItem('lang');
        
        if (result !== null)
        localStorageLanguage = this.ParseLanguage(result);
        
        // URL
        
        if (this.UrlLanguageLocation !== undefined) {
            
            let urlValue: string;
            
            if (this.UrlLanguageLocation === 'Subdirectory')
            urlValue = window.location.pathname.split('/')[1]
            else if (this.UrlLanguageLocation.indexOf('QueryString') !== -1) {
                
                if (this.UrlLanguageLocation.indexOf('{') !== - 1)
                urlValue = this.UrlLanguageLocation.split('{')[1].split('}')[0];
                else urlValue = 'lang';
                
                urlValue = new URLSearchParams(window.location.search).get('urlValue');
            }
            
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
        else if (this.UrlLanguageLocation.indexOf('QueryString') !== -1) {
            
            //let urlValue: string;
            //if (this.UrlLanguageLocation.indexOf('{') !== - 1)
            //    urlValue = this.UrlLanguageLocation.split('{')[1].split('}')[0];
            //else urlValue = 'lang';
            
            //urlValue = new URLSearchParams(window.location.search).get('urlValue');
        }
    }
    
    static SetCurrentLanguage(languageCode: string): void {
        this._currentLanguage = this.ParseLanguage(languageCode);
        localStorage.setItem('lang', this._currentLanguage.Code);
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
        
        await $(selection).toArray().forEach(async (e) => {
            try {
                CloudTranslation.TranslateElement(e).forEach((status) => {
                    translationStatuses.push(status);
                });
            } catch (e) { }
        });
        
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
            
            if (this.TranslatorProvider.toLowerCase() === 'azure') {
                try {
                    let translatedTexts = await this.AzureAutoTranslate(originalTexts);
                    
                    $.each(translatedTexts, (index, text) => {
                        
                        try {
                            let translation: Translation = new Translation();
                            translation.Default = new TranslationValue(CloudTranslation.DefaultLanguage.Code, originalTexts[index]);
                            
                            translation.Translations.push(new TranslationValue(CloudTranslation.CurrentLanguage.Code, text));
                            
                            CloudTranslation._translations.push(translation);
                        } catch (e) { }
                    });
                } catch (e) { }
            }
            
            await translationStatuses.forEach(async (status) => {
                
                switch (status.Result) {
                    
                    case TranslationStatusResult.Failed:
                    
                    if (status.Attribute === 'title')
                    translationStatuses.push(await CloudTranslation.TranslateElementTitle(status.Element));
                    else translationStatuses.push(await CloudTranslation.TranslateElementText(status.Element));
                    break;
                    
                    default:
                    break;
                }
            });
            
        }
        
        this._currentLanguage = undefined;
        this._translations = undefined;
    }
    
    static FillInLanguages(): void {
        
        let selection = $('.CloudTranslationSelection');
        
        if (selection.length === 0)
        return;
        
        selection.attr('translate', 'no');
        
        selection.html('');
        
        let currentLanguage: string = this.CurrentLanguage.Code;
        
        CloudTranslation.Languages.forEach((language) => {
            $('.CloudTranslationSelection').append('<option value="' + language.Code + '"' + (language.Code === currentLanguage ? ' selected ' : '') + '>' + language.DisplayName + '</option>')
        });
    }
}

$(async function () {
    
    CloudTranslation.UpdateCurrentLanguage();
    CloudTranslation.FillInLanguages();
    await CloudTranslation.TranslateDOM();
});

$(document).on('change', '.CloudTranslationSelection', function () {
    
    let languageCode = $(this).val().toString();
    
    if (languageCode !== '')
    CloudTranslation.SetCurrentLanguage(languageCode);
    
    CloudTranslation.TranslateDOM();
    $('html, body, #Body, .Body').animate({ scrollTop: 0 }, 'fast');
});