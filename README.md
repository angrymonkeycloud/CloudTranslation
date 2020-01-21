[Cloud Translation](https://angrymonkeycloud.com/translation)
==================================================
A JavaScript library to translate HTML content into multiple languages.

# Contribution
Check out https://angrymonkeycloud.com/translation for contribution information.

# Implementation
## Requirements
jQuery 2.x or 3.x: [jQuery CDN](https://code.jquery.com/), [download jQuery](https://jquery.com/download/).

## Cloud Translation Files
### Download
Cloud Translation JavaScript files: [Uncompressed](https://cdn.amcapi.com/translation/1.1.0/cloudtranslation.js), [Compressed](https://cdn.amcapi.com/translation/1.1.0/cloudtranslation.min.js).
 
### CDN
Cloud Translation JavaScript Compressed
```html
<script src="https://cdn.amcapi.com/translation/1.1.0/cloudtranslation.min.js" crossorigin="anonymous"></script> 
```

## Configuration
JSON configuration file must be included within the website head as follows:
```html
<script type="application/json" id="cloudtranslation-config">
    {
        "Settings": {
            // Should be included within the Languages section
            "DefaultLanguage": "en",

            // Empty string or Subdirectory (ex: www.website.com/en/)
            "UrlLanguageLocation": "Subdirectory",

            // Empty string or Azure (more providers should be added later)
            "TranslatorProvider": "Azure",

            // Please use your own key, Microsoft Azure provides a free tier.
            "TranslatorProviderKey": "{MicrosoftAzureTranslatorKey}",

            // To log automatically translated text within the console, this way you
            // could add them directly into the Translations section so the website
            // loads faster without the need of a translator provider
            "LogTranslationsFromProvider": true
        },
        "Languages": [
            {
                "Code": "en",
                "DisplayName": "English"
            },
            {
                "Code": "es",
                "DisplayName": "Spanish"
            },
            {
                "Code": "fr",
                "DisplayName": "Français"
            },
            {
                "Code": "fr-ca",
                "DisplayName": "Français (Canada)"
            },
            {
                "Code": "ar",
                "DisplayName": "العربية",
                "Direction": "rtl"
            }
        ]
    }
 <script>
```

## Predefined Languages
Add predefined languages as json files under 'translation' directory. each language code should have its own file named: languageCode.json.
o: Original text.
t: Translated text.
 ```json
[
    {
        "o": "Logo",
        "t": "شعار"
    },
    {
        "o": "Welcome",
        "t": "اهلا وسهلا"
    },
    {
        "o": "Home",
        "t": "الصفحة الرئيسية"
    }
]
 ```

 ## Languages Select (Optional)
 You can add an empty select into your website having the class "cloudtranslation-selection", which will be filled in with the predefined languages automatically.

 ```html
<select class="cloudtranslation-selection"></select> 
 ```

 ## Prevent Text Translation
 Specify HTML attribute translate="no" to prevent the translation of inside text, check out more on [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate)