declare class Translations {
    constructor();
    languageCode: string;
    translation: TranslationValue[];
}
declare class TranslationValue {
    default: string;
    text: string;
}
declare class Language {
    code: string;
    displayName: string;
    private _direction;
    direction: string;
}
declare enum TranslationStatusResult {
    ignored = 1,
    succeeded = 2,
    failed = 3
}
declare class TranslationStatus {
    constructor(element: HTMLElement, result: TranslationStatusResult, text?: string);
    element: HTMLElement;
    result: TranslationStatusResult;
    text: string;
    attribute: string;
}
declare class CloudTranslation {
    private static _languages;
    private static _translationsList;
    private static _defaultLanguage;
    private static _currentLanguage;
    private static _configurationData;
    private static _supportsTranslateAttribute;
    private static readonly translationsList;
    private static addTranslationValue;
    private static getTranslations;
    private static readonly nonTranslatedElements;
    private static readonly stylePropertiesToSwitch;
    private static readonly stylePropertiesToOpposite;
    private static readonly translatorProviderKey;
    private static readonly translatorProvider;
    private static readonly urlLanguageLocation;
    private static readonly logTranslationsFromProvider;
    private static readonly supportsTranslateAttribute;
    private static doTranslateElement;
    private static readonly configurationData;
    static readonly defaultLanguage: Language;
    static readonly languages: Language[];
    private static parseLanguage;
    private static readonly direction;
    private static translations;
    private static getTranslation;
    private static translateElement;
    private static onlyUnique;
    private static translateElementText;
    private static translateElementTitle;
    private static translate;
    private static addRTLCSS;
    private static generateRTLCSS;
    private static getRulesStyle;
    private static switchRTLCSSValues;
    private static oppositeRTLCSSValues;
    private static canBeNegative;
    private static azureAutoTranslate;
    static updateCurrentLanguage(): void;
    static readonly currentLanguage: Language;
    private static updateUrlLanguage;
    static setCurrentLanguage(languageCode: string): void;
    static translateDOM(): Promise<void>;
    static fillInLanguages(): void;
}
