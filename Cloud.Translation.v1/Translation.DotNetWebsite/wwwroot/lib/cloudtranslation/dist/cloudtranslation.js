var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Translation = (function () {
    function Translation() {
        this.Translations = [];
    }
    return Translation;
}());
var TranslationValue = (function () {
    function TranslationValue(language, text) {
        this.Language = language;
        this.Text = text;
    }
    return TranslationValue;
}());
var Language = (function () {
    function Language() {
    }
    Object.defineProperty(Language.prototype, "Direction", {
        get: function () {
            if (this._direction === undefined)
                return 'ltr';
            return this._direction;
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: true,
        configurable: true
    });
    return Language;
}());
var TranslationStatusResult;
(function (TranslationStatusResult) {
    TranslationStatusResult[TranslationStatusResult["Ignored"] = 1] = "Ignored";
    TranslationStatusResult[TranslationStatusResult["Succeeded"] = 2] = "Succeeded";
    TranslationStatusResult[TranslationStatusResult["Failed"] = 3] = "Failed";
})(TranslationStatusResult || (TranslationStatusResult = {}));
var TranslationStatus = (function () {
    function TranslationStatus(element, result, text) {
        this.Element = element;
        this.Result = result;
        this.Text = text;
    }
    return TranslationStatus;
}());
var CloudTranslation = (function () {
    function CloudTranslation() {
    }
    Object.defineProperty(CloudTranslation, "NonTranslatedElements", {
        get: function () {
            return ['code', 'html', 'head', 'head > *'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTranslation, "StylePropertiesToSwitch", {
        get: function () {
            return ['padding-left', 'padding-right', 'margin-left', 'margin-right', 'border-left-width', 'border-right-width'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTranslation, "StylePropertiesToOpposite", {
        get: function () {
            return ['text-align', 'float', 'background-position-x'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTranslation, "TranslatorProviderKey", {
        get: function () {
            return this.ConfigurationData.Settings.TranslatorProviderKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTranslation, "TranslatorProvider", {
        get: function () {
            return this.ConfigurationData.Settings.TranslatorProvider;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTranslation, "UrlLanguageLocation", {
        get: function () {
            return this.ConfigurationData.Settings.UrlLanguageLocation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTranslation, "LogTranslationsFromProvider", {
        get: function () {
            if (this.ConfigurationData.Settings.LogTranslationsFromProvider === undefined)
                return false;
            return this.ConfigurationData.Settings.LogTranslationsFromProvider;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTranslation, "ConfigurationData", {
        get: function () {
            if (CloudTranslation._configurationData !== undefined)
                return CloudTranslation._configurationData;
            CloudTranslation._configurationData = JSON.parse($('#CloudTranslationConfig').html());
            $('#CloudTranslationConfig').remove();
            return CloudTranslation._configurationData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTranslation, "DefaultLanguage", {
        get: function () {
            var _this = this;
            if (this._defaultLanguage !== undefined)
                return this._defaultLanguage;
            this.Languages.forEach(function (language) {
                if (language.Code.toLowerCase() === _this.ConfigurationData.Settings.DefaultLanguage.toLowerCase())
                    _this._defaultLanguage = language;
            });
            return this._defaultLanguage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTranslation, "Languages", {
        get: function () {
            if (CloudTranslation._languages !== undefined)
                return CloudTranslation._languages;
            CloudTranslation._languages = [];
            $.each(CloudTranslation.ConfigurationData.Languages, function (key, value) {
                var language = new Language();
                language.Code = value.Code;
                language.DisplayName = value.DisplayName;
                language.Direction = value.Direction;
                CloudTranslation._languages.push(language);
            });
            return CloudTranslation._languages;
        },
        enumerable: true,
        configurable: true
    });
    CloudTranslation.ParseLanguage = function (requestLanguage) {
        requestLanguage = requestLanguage.trim().toLowerCase();
        var result;
        this.Languages.forEach(function (language) {
            if (language.Code.toLowerCase() === requestLanguage)
                result = language;
        });
        if (result !== undefined)
            return result;
        if (requestLanguage.indexOf('-') !== -1)
            this.Languages.forEach(function (language) {
                if (language.Code.toLowerCase() === requestLanguage.split('-')[0])
                    result = language;
            });
        if (result !== undefined)
            return result;
        return this.DefaultLanguage;
    };
    Object.defineProperty(CloudTranslation, "Direction", {
        get: function () {
            return this.CurrentLanguage.Direction || 'ltr';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTranslation, "Translations", {
        get: function () {
            if (CloudTranslation._translations !== undefined)
                return CloudTranslation._translations;
            CloudTranslation._translations = [];
            $.each(CloudTranslation.ConfigurationData.Translations, function (key, value) {
                var translation = new Translation();
                translation.Default = new TranslationValue(CloudTranslation.DefaultLanguage.Code, value[CloudTranslation.DefaultLanguage.Code]);
                var currentLanguageCode = CloudTranslation.CurrentLanguage.Code;
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
        },
        enumerable: true,
        configurable: true
    });
    CloudTranslation.GetTranslation = function (text) {
        if (this.CurrentLanguage.Code === this.DefaultLanguage.Code)
            return text;
        var translation = null;
        CloudTranslation.Translations.forEach(function (t) {
            if (t.Default.Text.trim() === text.trim())
                translation = t;
        });
        if (translation === null)
            return undefined;
        translation.Translations.forEach(function (t) {
            if (t.Language === CloudTranslation.CurrentLanguage.Code)
                text = text.replace(text.trim(), t.Text);
        });
        return text;
    };
    CloudTranslation.TranslateElement = function (element) {
        if (element === undefined)
            return [];
        if (CloudTranslation.Direction === 'rtl') {
            var style = element.style.cssText;
            if (style !== undefined) {
                $(element).data('_ctoriginalstyle', style);
                var rtlStyle = '';
                for (var i = 0; i < element.style.length; i++) {
                    var propertyName = element.style[i];
                    if (CloudTranslation.StylePropertiesToOpposite.indexOf(propertyName) !== -1)
                        rtlStyle += CloudTranslation.OppositeRTLCSSValues(element, propertyName);
                    else if (CloudTranslation.StylePropertiesToSwitch.indexOf(propertyName) !== -1)
                        rtlStyle += CloudTranslation.SwitchRTLCSSValues(element, propertyName);
                    else
                        rtlStyle += propertyName + ': ' + element.style[propertyName] + '; ';
                }
                if (rtlStyle !== style) {
                    $(element).data('_ctoriginalstyle', style);
                    element.style.cssText = rtlStyle;
                }
            }
        }
        else {
            var originalStyle = $(element).data('_ctoriginalstyle');
            if (originalStyle !== '') {
                $(element).attr('style', originalStyle);
                $(element).removeData('_ctoriginalstyle');
            }
        }
        if (element.translate === false || ($(element).closest('*[translate]')[0] !== undefined && $(element).closest('*[translate]')[0].translate === false))
            return [];
        if (element.tagName === 'A') {
            var elementHref = element.getAttribute('href');
            if (elementHref.indexOf(':') !== -1) {
                elementHref = elementHref.split(':')[0].toLowerCase();
                if (elementHref === 'mailto' || elementHref === 'tel') {
                    element.setAttribute('dir', 'ltr');
                    return [];
                }
            }
        }
        var translationStatuses = [];
        try {
            translationStatuses.push(CloudTranslation.TranslateElementText(element));
        }
        catch (e) { }
        try {
            translationStatuses.push(CloudTranslation.TranslateElementTitle(element));
        }
        catch (e) { }
        return translationStatuses;
    };
    CloudTranslation.OnlyUnique = function (value, index, self) {
        return self.indexOf(value) === index;
    };
    CloudTranslation.TranslateElementText = function (element) {
        var childNode = element.childNodes[0];
        if (childNode === undefined)
            return new TranslationStatus(element, TranslationStatusResult.Ignored);
        if (childNode.nodeValue === null)
            return new TranslationStatus(element, TranslationStatusResult.Ignored);
        if (childNode.nodeValue.trim() === '')
            return new TranslationStatus(element, TranslationStatusResult.Ignored);
        var translationStatus = CloudTranslation.Translate(element, '_ctoriginaltext', childNode.nodeValue);
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
    };
    CloudTranslation.TranslateElementTitle = function (element) {
        var translationStatus = CloudTranslation.Translate(element, '_ctoriginaltitle', element.title);
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
    };
    CloudTranslation.Translate = function (element, dataValueName, currentValue) {
        var originalText;
        if ($(element).data(dataValueName) !== undefined)
            originalText = $(element).data(dataValueName);
        if ((originalText === undefined || originalText.trim() === '') && (currentValue === null || currentValue.trim() === ''))
            return new TranslationStatus(element, TranslationStatusResult.Ignored);
        if (originalText === undefined || originalText.trim() === '')
            originalText = currentValue;
        var translatedText = CloudTranslation.GetTranslation(originalText);
        if (translatedText === undefined) {
            $(element).removeData(dataValueName);
            return new TranslationStatus(element, TranslationStatusResult.Failed, originalText);
        }
        if (translatedText !== originalText)
            $(element).data(dataValueName, originalText);
        else
            $(element).removeData(dataValueName);
        return new TranslationStatus(element, TranslationStatusResult.Succeeded, translatedText);
    };
    CloudTranslation.AddRTLCSS = function () {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = CloudTranslation.GenerateRTLCSS();
        document.getElementsByTagName('head')[0].appendChild(style);
    };
    CloudTranslation.GenerateRTLCSS = function () {
        var style = 'html[dir="rtl"] {direction: rtl;}';
        $.each(document.styleSheets, function (index, sheet) {
            try {
                style += CloudTranslation.GetRulesStyle(sheet['cssRules'] || sheet['rules']);
            }
            catch (e) { }
        });
        return style;
    };
    CloudTranslation.GetRulesStyle = function (rules) {
        var result = '';
        $.each(rules, function (index, rule) {
            if (rule.type === 4) {
                var mediaStyle = void 0;
                try {
                    mediaStyle = CloudTranslation.GetRulesStyle(rule['cssRules'] || rule['rules']);
                }
                catch (e) {
                    return;
                }
                if (mediaStyle !== '') {
                    result += '@media ' + rule.conditionText + '{';
                    result += mediaStyle;
                    result += '}';
                }
            }
            if (rule.style === undefined)
                return;
            var selectorStyle = '';
            CloudTranslation.StylePropertiesToOpposite.forEach(function (property) {
                selectorStyle += CloudTranslation.OppositeRTLCSSValues(rule, property);
            });
            CloudTranslation.StylePropertiesToSwitch.forEach(function (property) {
                selectorStyle += CloudTranslation.SwitchRTLCSSValues(rule, property);
            });
            if (selectorStyle !== '')
                result += 'html[dir=rtl] ' + rule.selectorText + '{' + selectorStyle + '}';
        });
        return result;
    };
    CloudTranslation.SwitchRTLCSSValues = function (rule, name) {
        var value = rule.style[name];
        if (value === '')
            return '';
        var style = '';
        if (name.indexOf('left') !== -1)
            name = name.replace('left', 'right');
        else
            name = name.replace('right', 'left');
        style += name + ': ' + value + ';';
        return style;
    };
    CloudTranslation.OppositeRTLCSSValues = function (rule, name) {
        var value = rule.style[name];
        if (value === '')
            return '';
        var style = '';
        if (value === 'left')
            style += name + ': right;';
        else if (value === 'right')
            style += name + ': left;';
        else if (CloudTranslation.CanBeNegative(value)) {
            if (value.indexOf('-') === 0)
                style += name + ': ' + value.substr(1) + ';';
            else
                style += name + ': -' + value + ';';
        }
        return style;
    };
    CloudTranslation.CanBeNegative = function (value) {
        var unites = ['px', 'pt', 'pc', 'cm', 'mm', 'in', 'em', 'rem', 'vw', 'vh', 'ex', 'ch', 'vmin', 'vmax', '%'];
        var isTrue = false;
        unites.forEach(function (unit) {
            if (value.indexOf(unit) > 0 && value.indexOf(' ') === -1)
                isTrue = true;
        });
        return isTrue;
    };
    CloudTranslation.AzureAutoTranslate = function (texts) {
        return __awaiter(this, void 0, void 0, function () {
            var bodyData, data, translatedTexts, jsonTranslations;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (texts.length === 0)
                            return [2, []];
                        bodyData = '';
                        texts.forEach(function (text) { bodyData += '{"Text": "' + text + '"},'; });
                        return [4, $.ajax({
                                url: 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=' + this.DefaultLanguage.Code + '&to=' + this.CurrentLanguage.Code,
                                type: "POST",
                                dataType: 'json',
                                data: '[' + bodyData + ']',
                                cache: true,
                                beforeSend: function (xhrObj) {
                                    xhrObj.setRequestHeader("Content-Type", "application/json");
                                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", _this.TranslatorProviderKey);
                                },
                            })];
                    case 1:
                        data = _a.sent();
                        translatedTexts = [];
                        jsonTranslations = '';
                        $.each(data, function (index, translations) {
                            translatedTexts[index] = translations.translations[0].text;
                            if (_this.LogTranslationsFromProvider)
                                jsonTranslations += '{"' + _this.DefaultLanguage.Code + '": "' + texts[index] + '", "' + _this.CurrentLanguage.Code + '": "' + translatedTexts[index] + '"},';
                        });
                        if (this.LogTranslationsFromProvider)
                            console.log(jsonTranslations);
                        return [2, translatedTexts];
                }
            });
        });
    };
    CloudTranslation.UpdateCurrentLanguage = function () {
        var localStorageLanguage;
        var urlLanguage;
        var browserLanguage;
        var result;
        result = localStorage.getItem('lang');
        if (result !== null)
            localStorageLanguage = this.ParseLanguage(result);
        if (this.UrlLanguageLocation !== undefined) {
            var urlValue_1;
            if (this.UrlLanguageLocation === 'Subdirectory')
                urlValue_1 = window.location.pathname.split('/')[1];
            else if (this.UrlLanguageLocation.indexOf('QueryString') !== -1) {
                if (this.UrlLanguageLocation.indexOf('{') !== -1)
                    urlValue_1 = this.UrlLanguageLocation.split('{')[1].split('}')[0];
                else
                    urlValue_1 = 'lang';
                urlValue_1 = new URLSearchParams(window.location.search).get('urlValue');
            }
            if (urlValue_1.length === 2 || (urlValue_1.length === 5 && urlValue_1.indexOf('-') === 2)) {
                this.Languages.forEach(function (language) {
                    if (language.Code.toLowerCase() === urlValue_1.toLowerCase())
                        result = language.Code;
                });
                if (urlValue_1.indexOf('-') !== -1 && result === undefined) {
                    urlValue_1 = urlValue_1.split('-')[0];
                    this.Languages.forEach(function (language) {
                        if (language.Code.toLowerCase() === urlValue_1.toLowerCase())
                            result = language.Code;
                    });
                }
                if (result !== undefined)
                    urlLanguage = this.ParseLanguage(result);
            }
        }
        result = navigator['language'] || navigator['userLanguage'];
        if (result !== undefined)
            browserLanguage = this.ParseLanguage(result);
        if (urlLanguage !== undefined)
            this.SetCurrentLanguage(urlLanguage.Code);
        else if (localStorageLanguage !== undefined)
            this.SetCurrentLanguage(localStorageLanguage.Code);
        else if (browserLanguage !== undefined)
            this.SetCurrentLanguage(browserLanguage.Code);
        else
            this.SetCurrentLanguage(this.DefaultLanguage.Code);
    };
    Object.defineProperty(CloudTranslation, "CurrentLanguage", {
        get: function () {
            if (this._currentLanguage !== undefined)
                return this._currentLanguage;
            this.UpdateCurrentLanguage();
            return this._currentLanguage;
        },
        enumerable: true,
        configurable: true
    });
    CloudTranslation.UpdateUrlLanguage = function () {
        if (this.UrlLanguageLocation === undefined)
            return;
        if (this.UrlLanguageLocation === 'Subdirectory') {
            var pathnameSplitted = window.location.pathname.split('/');
            var currentLanguageCode = pathnameSplitted[1];
            if (currentLanguageCode.length === 2 || (currentLanguageCode.length === 5 && currentLanguageCode.indexOf('-') === 2))
                pathnameSplitted[1] = this.CurrentLanguage.Code;
            else
                pathnameSplitted.splice(1, 0, this.CurrentLanguage.Code);
            history.replaceState(null, null, pathnameSplitted.join('/'));
        }
        else if (this.UrlLanguageLocation.indexOf('QueryString') !== -1) {
        }
    };
    CloudTranslation.SetCurrentLanguage = function (languageCode) {
        this._currentLanguage = this.ParseLanguage(languageCode);
        localStorage.setItem('lang', this._currentLanguage.Code);
        this.UpdateUrlLanguage();
    };
    CloudTranslation.TranslateDOM = function () {
        return __awaiter(this, void 0, void 0, function () {
            var styleSheet, selection, translationStatuses, originalTexts_1, translatedTexts, e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $('html').attr('lang', CloudTranslation.CurrentLanguage.Code);
                        $('html').attr('dir', CloudTranslation.Direction);
                        $.each(document.styleSheets, function (index, sheet) {
                            try {
                                $.each(sheet['cssRules'] || sheet['rules'], function (ruleIndex, rule) {
                                    if (rule.cssText === 'html[dir="rtl"] { direction: rtl; }')
                                        styleSheet = sheet;
                                });
                            }
                            catch (e) { }
                        });
                        if (CloudTranslation.Direction === 'rtl' && styleSheet === undefined)
                            CloudTranslation.AddRTLCSS();
                        selection = '*';
                        CloudTranslation.NonTranslatedElements.forEach(function (element) {
                            selection += ':not(' + '"' + element + '"' + ')';
                        });
                        translationStatuses = [];
                        return [4, $(selection).toArray().forEach(function (e) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    try {
                                        CloudTranslation.TranslateElement(e).forEach(function (status) {
                                            translationStatuses.push(status);
                                        });
                                    }
                                    catch (e) { }
                                    return [2];
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        if (!(this.CurrentLanguage.Code !== this.DefaultLanguage.Code)) return [3, 7];
                        originalTexts_1 = [];
                        translationStatuses.forEach(function (status) {
                            try {
                                switch (status.Result) {
                                    case TranslationStatusResult.Failed:
                                        originalTexts_1.push(status.Text);
                                        break;
                                    default:
                                        break;
                                }
                            }
                            catch (e) { }
                        });
                        originalTexts_1 = originalTexts_1.filter(this.OnlyUnique);
                        if (!(this.TranslatorProvider.toLowerCase() === 'azure')) return [3, 5];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4, this.AzureAutoTranslate(originalTexts_1)];
                    case 3:
                        translatedTexts = _a.sent();
                        $.each(translatedTexts, function (index, text) {
                            try {
                                var translation = new Translation();
                                translation.Default = new TranslationValue(CloudTranslation.DefaultLanguage.Code, originalTexts_1[index]);
                                translation.Translations.push(new TranslationValue(CloudTranslation.CurrentLanguage.Code, text));
                                CloudTranslation._translations.push(translation);
                            }
                            catch (e) { }
                        });
                        return [3, 5];
                    case 4:
                        e_1 = _a.sent();
                        return [3, 5];
                    case 5: return [4, translationStatuses.forEach(function (status) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b, _c, _d, _e;
                            return __generator(this, function (_f) {
                                switch (_f.label) {
                                    case 0:
                                        _a = status.Result;
                                        switch (_a) {
                                            case TranslationStatusResult.Failed: return [3, 1];
                                        }
                                        return [3, 6];
                                    case 1:
                                        if (!(status.Attribute === 'title')) return [3, 3];
                                        _c = (_b = translationStatuses).push;
                                        return [4, CloudTranslation.TranslateElementTitle(status.Element)];
                                    case 2:
                                        _c.apply(_b, [_f.sent()]);
                                        return [3, 5];
                                    case 3:
                                        _e = (_d = translationStatuses).push;
                                        return [4, CloudTranslation.TranslateElementText(status.Element)];
                                    case 4:
                                        _e.apply(_d, [_f.sent()]);
                                        _f.label = 5;
                                    case 5: return [3, 7];
                                    case 6: return [3, 7];
                                    case 7: return [2];
                                }
                            });
                        }); })];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        this._currentLanguage = undefined;
                        this._translations = undefined;
                        return [2];
                }
            });
        });
    };
    CloudTranslation.FillInLanguages = function () {
        var selection = $('.CloudTranslationSelection');
        if (selection.length === 0)
            return;
        selection.attr('translate', 'no');
        selection.html('');
        var currentLanguage = this.CurrentLanguage.Code;
        CloudTranslation.Languages.forEach(function (language) {
            $('.CloudTranslationSelection').append('<option value="' + language.Code + '"' + (language.Code === currentLanguage ? ' selected ' : '') + '>' + language.DisplayName + '</option>');
        });
    };
    return CloudTranslation;
}());
$(function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    CloudTranslation.UpdateCurrentLanguage();
                    CloudTranslation.FillInLanguages();
                    return [4, CloudTranslation.TranslateDOM()];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
});
$(document).on('change', '.CloudTranslationSelection', function () {
    var languageCode = $(this).val().toString();
    if (languageCode !== '')
        CloudTranslation.SetCurrentLanguage(languageCode);
    CloudTranslation.TranslateDOM();
    $('html, body, #Body, .Body').animate({ scrollTop: 0 }, 'fast');
});

//# sourceMappingURL=cloudtranslation.js.map
