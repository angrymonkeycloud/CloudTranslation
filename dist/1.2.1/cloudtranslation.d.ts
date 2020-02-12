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
    get direction(): string;
    set direction(value: string);
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
    private static get translationsList();
    private static addTranslationValue;
    private static getTranslations;
    private static get nonTranslatedElements();
    private static get stylePropertiesToSwitch();
    private static get stylePropertiesToOpposite();
    private static get translatorProviderKey();
    private static get translatorProvider();
    private static get urlLanguageLocation();
    private static get logTranslationsFromProvider();
    private static get supportsTranslateAttribute();
    private static doTranslateElement;
    private static get configurationData();
    static get defaultLanguage(): Language;
    static get languages(): Language[];
    private static parseLanguage;
    private static get direction();
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
    static get currentLanguage(): Language;
    private static updateUrlLanguage;
    static setCurrentLanguage(languageCode: string): void;
    static translateDOM(): Promise<void>;
    static fillInLanguages(): void;
}
