declare class Translation {
    constructor();
    Default: TranslationValue;
    Translations: TranslationValue[];
}
declare class TranslationValue {
    constructor(language: string, text: string);
    Language: string;
    Text: string;
}
declare class Language {
    Code: string;
    DisplayName: string;
    private _direction;
    Direction: string;
}
declare enum TranslationStatusResult {
    Ignored = 1,
    Succeeded = 2,
    Failed = 3
}
declare class TranslationStatus {
    constructor(element: HTMLElement, result: TranslationStatusResult, text?: string);
    Element: HTMLElement;
    Result: TranslationStatusResult;
    Text: string;
    Attribute: string;
}
declare class CloudTranslation {
    private static _languages;
    private static _translations;
    private static _defaultLanguage;
    private static _currentLanguage;
    private static _configurationData;
    private static _supportsTranslateAttribute;
    private static readonly NonTranslatedElements;
    private static readonly StylePropertiesToSwitch;
    private static readonly StylePropertiesToOpposite;
    private static readonly TranslatorProviderKey;
    private static readonly TranslatorProvider;
    private static readonly UrlLanguageLocation;
    private static readonly LogTranslationsFromProvider;
    private static readonly SupportsTranslateAttribute;
    private static DoTranslateElement;
    private static readonly ConfigurationData;
    static readonly DefaultLanguage: Language;
    static readonly Languages: Language[];
    private static ParseLanguage;
    private static readonly Direction;
    private static readonly Translations;
    private static GetTranslation;
    private static TranslateElement;
    private static OnlyUnique;
    private static TranslateElementText;
    private static TranslateElementTitle;
    private static Translate;
    private static AddRTLCSS;
    private static GenerateRTLCSS;
    private static GetRulesStyle;
    private static SwitchRTLCSSValues;
    private static OppositeRTLCSSValues;
    private static CanBeNegative;
    private static AzureAutoTranslate;
    static UpdateCurrentLanguage(): void;
    static readonly CurrentLanguage: Language;
    private static UpdateUrlLanguage;
    static SetCurrentLanguage(languageCode: string): void;
    static TranslateDOM(): Promise<void>;
    static FillInLanguages(): void;
}
