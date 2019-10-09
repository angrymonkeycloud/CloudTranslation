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
Cloud Translation JavaScript files: [Uncompressed](https://cdn.amcapi.com/translation/cloudtranslation-1.0.0.js), [Compressed](https://cdn.amcapi.com/translation/cloudtranslation-1.0.0.min.js).
 
### CDN
Cloud Translation JavaScript Compressed
```html
<script src="https://cdn.amcapi.com/translation/cloudtranslation-1.0.0.min.js" crossorigin="anonymous"></script> 
```

## Configuration
JSON configuration file must be included within the website head as follows:
```html
<script type="application/json" id="CloudTranslationConfig">
    {
        "Settings": {
            // Should be included within the Languages section
            "DefaultLanguage": "en",

            // Empty string or Subdirectory (ex: www.website.com/en/)
            "UrlLanguageLocation": "Subdirectory",

            // Empty string or Azure (more providers should be added later)
            "TranslatorProvider": "Azure",

            // Please use your own key, Microsoft Azure provides a free tier.
            "TranslatorProviderKey": "5900190c91074f94b1baea93fa1be549",

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
        ],
        "Translations": [
            {
                "en": "Welcome",
                "ar": "اهلا وسهلا",
                "fr": "Bienvenu"
            },
            {
                "en": "Home",
                "ar": "الصفحة الرئيسية"
            }
        ]
    }
 <script>
```

 ## Languages Select (Optional)
 You can add an empty select into your website having the class "CloudTranslationSelect", which will be filled in with the predefined languages automatically.

 ```html
<select class="CloudTranslationSelect"></select> 
 ```

 ## Prevent Text Translation
 Specify HTML attribute translate="no" to prevent the translation of inside text, check out more on [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate)