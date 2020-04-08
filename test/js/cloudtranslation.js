var exports = {};
var LanguageDirection;
(function (LanguageDirection) {
    LanguageDirection[LanguageDirection["ltr"] = 0] = "ltr";
    LanguageDirection[LanguageDirection["rtl"] = 1] = "rtl";
})(LanguageDirection || (LanguageDirection = {}));
var TranslationStatusResult;
(function (TranslationStatusResult) {
    TranslationStatusResult[TranslationStatusResult["ignored"] = 1] = "ignored";
    TranslationStatusResult[TranslationStatusResult["succeeded"] = 2] = "succeeded";
    TranslationStatusResult[TranslationStatusResult["failed"] = 3] = "failed";
})(TranslationStatusResult || (TranslationStatusResult = {}));
var TranslatorProvider;
(function (TranslatorProvider) {
    TranslatorProvider[TranslatorProvider["none"] = 0] = "none";
    TranslatorProvider[TranslatorProvider["Azure"] = 1] = "Azure";
})(TranslatorProvider || (TranslatorProvider = {}));
var UrlLanguageLocation;
(function (UrlLanguageLocation) {
    UrlLanguageLocation[UrlLanguageLocation["none"] = 0] = "none";
    UrlLanguageLocation[UrlLanguageLocation["subdirectory"] = 1] = "subdirectory";
})(UrlLanguageLocation || (UrlLanguageLocation = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sQ0FBTixJQUFZLGlCQUdYO0FBSEQsV0FBWSxpQkFBaUI7SUFDekIsdURBQU8sQ0FBQTtJQUNQLHVEQUFPLENBQUE7QUFDWCxDQUFDLEVBSFcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQUc1QjtBQUVELE1BQU0sQ0FBTixJQUFZLHVCQUlYO0FBSkQsV0FBWSx1QkFBdUI7SUFDL0IsMkVBQVcsQ0FBQTtJQUNYLCtFQUFhLENBQUE7SUFDYix5RUFBVSxDQUFBO0FBQ2QsQ0FBQyxFQUpXLHVCQUF1QixLQUF2Qix1QkFBdUIsUUFJbEM7QUFFRCxNQUFNLENBQU4sSUFBWSxrQkFHWDtBQUhELFdBQVksa0JBQWtCO0lBQzFCLDJEQUFRLENBQUE7SUFDUiw2REFBUyxDQUFBO0FBQ2IsQ0FBQyxFQUhXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFHN0I7QUFFRCxNQUFNLENBQU4sSUFBWSxtQkFHWDtBQUhELFdBQVksbUJBQW1CO0lBQzNCLDZEQUFRLENBQUE7SUFDUiw2RUFBZ0IsQ0FBQTtBQUNwQixDQUFDLEVBSFcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQUc5QiIsImZpbGUiOiJlbnVtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEVudW1zXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IGVudW0gTGFuZ3VhZ2VEaXJlY3Rpb257XHJcbiAgICBsdHIgPSAwLFxyXG4gICAgcnRsID0gMVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdCB7XHJcbiAgICBpZ25vcmVkID0gMSxcclxuICAgIHN1Y2NlZWRlZCA9IDIsXHJcbiAgICBmYWlsZWQgPSAzXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRyYW5zbGF0b3JQcm92aWRlciB7XHJcbiAgICBub25lID0gMCxcclxuICAgIEF6dXJlID0gMVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBVcmxMYW5ndWFnZUxvY2F0aW9uIHtcclxuICAgIG5vbmUgPSAwLFxyXG4gICAgc3ViZGlyZWN0b3J5ID0gMVxyXG59Il19

var Translations = (function () {
    function Translations() {
        this.translation = [];
    }
    return Translations;
}());
{ Translations };
var TranslationValue = (function () {
    function TranslationValue() {
    }
    return TranslationValue;
}());
{ TranslationValue };
var Language = (function () {
    function Language() {
    }
    return Language;
}());
{ Language };
var TranslationStatus = (function () {
    function TranslationStatus(element, result, text) {
        this.element = element;
        this.result = result;
        this.text = text;
    }
    return TranslationStatus;
}());
{ TranslationStatus };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFFSTtRQUVJLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFJTCxtQkFBQztBQUFELENBVEEsQUFTQyxJQUFBOztBQUVEO0lBQUE7SUFJQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTs7QUFFRDtJQUFBO0lBS0EsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTs7QUFFRDtJQUVJLDJCQUFZLE9BQW9CLEVBQUUsTUFBK0IsRUFBRSxJQUFhO1FBRTVFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFNTCx3QkFBQztBQUFELENBYkEsQUFhQyxJQUFBIiwiZmlsZSI6ImNsYXNzZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYW5ndWFnZURpcmVjdGlvbiwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQgfSBmcm9tICcuL2VudW1zJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvbnMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbGFuZ3VhZ2VDb2RlOiBzdHJpbmc7XHJcbiAgICB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25WYWx1ZVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25WYWx1ZSB7XHJcblxyXG4gICAgZGVmYXVsdDogc3RyaW5nO1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2Uge1xyXG5cclxuICAgIGNvZGU6IHN0cmluZztcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICBkaXJlY3Rpb24/OiBMYW5ndWFnZURpcmVjdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uU3RhdHVzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcmVzdWx0OiBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdCwgdGV4dD86IHN0cmluZykge1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICByZXN1bHQ6IFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0O1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgYXR0cmlidXRlOiBzdHJpbmc7XHJcbn0iXX0=



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2xhdG9yUHJvdmlkZXIsIFVybExhbmd1YWdlTG9jYXRpb24gfSBmcm9tIFwiLi9lbnVtc1wiO1xyXG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gXCIuL2NsYXNzZXNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRUcmFuc2xhdGlvblNldHRpbmdzIHtcclxuICAgIGRlZmF1bHRMYW5ndWFnZT86IHN0cmluZztcclxuICAgIGxvZ1RyYW5zbGF0aW9uc0Zyb21Qcm92aWRlcj86IGJvb2xlYW47XHJcbiAgICB0cmFuc2xhdG9yUHJvdmlkZXI/OiBUcmFuc2xhdG9yUHJvdmlkZXI7IFxyXG4gICAgdHJhbnNsYXRvclByb3ZpZGVyS2V5Pzogc3RyaW5nO1xyXG4gICAgdXJsTGFuZ3VhZ2VMb2NhdGlvbj86IFVybExhbmd1YWdlTG9jYXRpb247XHJcblxyXG4gICAgbGFuZ3VhZ2VzOiBMYW5ndWFnZVtdO1xyXG59XHJcbiJdfQ==

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var cloudTranslation = function (settings) { return new CloudTranslation(settings); };
cloudTranslation;
var CloudTranslation = (function () {
    function CloudTranslation(settings) {
        CloudTranslation._settings = this.mergeSettings(settings);
        CloudTranslation.updateCurrentLanguage();
        CloudTranslation.fillInLanguages();
        CloudTranslation.translateDOM();
        $(document).on('change', '.cloudtranslation-selection', function () {
            return __awaiter(this, void 0, void 0, function () {
                var languageCode;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            languageCode = $(this).val().toString();
                            if (languageCode !== '')
                                CloudTranslation.setCurrentLanguage(languageCode);
                            CloudTranslation.scrollToTop(200);
                            return [4, CloudTranslation.translateDOM()];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        });
    }
    CloudTranslation.prototype.mergeSettings = function (_settings) {
        var settings = {
            defaultLanguage: 'en',
            logTranslationsFromProvider: false,
            translatorProvider: TranslatorProvider.none,
            translatorProviderKey: '',
            urlLanguageLocation: UrlLanguageLocation.none,
            languages: []
        };
        for (var attrname in _settings)
            settings[attrname] = _settings[attrname];
        return settings;
    };
    Object.defineProperty(CloudTranslation, "translationsList", {
        get: function () {
            if (this._translationsList === undefined)
                this._translationsList = [];
            return this._translationsList;
        },
        enumerable: true,
        configurable: true
    });
    CloudTranslation.addTranslationValue = function (languageCode, defaultText, translatedText) {
        var translations = this.getTranslations(languageCode);
        if (translations === undefined) {
            translations = new Translations();
            translations.languageCode = languageCode;
            this._translationsList.push(translations);
        }
        var translationValue = new TranslationValue();
        translationValue.default = defaultText;
        translationValue.text = translatedText;
        translations.translation.push(translationValue);
    };
    CloudTranslation.getTranslations = function (languageCode) {
        var t;
        this.translationsList.forEach(function (translations) {
            if (translations.languageCode === languageCode)
                t = translations;
        });
        return t;
    };
    Object.defineProperty(CloudTranslation, "nonTranslatedElements", {
        get: function () {
            return ['code', 'html', 'head', 'head > *'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTranslation, "stylePropertiesToSwitch", {
        get: function () {
            var properties = ['padding', 'margin'];
            var results = [];
            properties.forEach(function (property) {
                results.push(property + '-left');
                results.push(property + '-right');
            });
            return results;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTranslation, "stylePropertiesToOpposite", {
        get: function () {
            return ['text-align', 'justify-content', 'justify-self', 'float', 'background-position-x'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTranslation, "translatorProviderKey", {
        get: function () {
            return this._settings.translatorProviderKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTranslation, "translatorProvider", {
        get: function () {
            return this._settings.translatorProvider;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTranslation, "urlLanguageLocation", {
        get: function () {
            return this._settings.urlLanguageLocation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTranslation, "logTranslationsFromProvider", {
        get: function () {
            return this._settings.logTranslationsFromProvider;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTranslation, "supportsTranslateAttribute", {
        get: function () {
            if (this._supportsTranslateAttribute !== undefined)
                return this._supportsTranslateAttribute;
            return this._supportsTranslateAttribute = $('body')[0].translate !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    CloudTranslation.doTranslateElement = function (element) {
        if (this.supportsTranslateAttribute) {
            if (element.translate === false || ($(element).closest('*[translate]')[0] !== undefined && $(element).closest('*[translate]')[0].translate === false))
                return false;
            else
                return true;
        }
        var attribute = $(element).attr('translate');
        if (attribute === undefined) {
            if ($(element).closest('*[translate]')[0] !== undefined && $(element).closest('*[translate]').attr('translate').toLowerCase() === 'no')
                return false;
            else
                return true;
        }
        if (attribute.toLowerCase() === 'no')
            return false;
        return true;
    };
    Object.defineProperty(CloudTranslation, "defaultLanguage", {
        get: function () {
            var _this = this;
            if (this._defaultLanguage !== undefined)
                return this._defaultLanguage;
            this.languages.forEach(function (language) {
                if (language.code.toLowerCase() === _this._settings.defaultLanguage.toLowerCase())
                    _this._defaultLanguage = language;
            });
            return this._defaultLanguage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTranslation, "languages", {
        get: function () {
            return this._settings.languages;
        },
        enumerable: true,
        configurable: true
    });
    CloudTranslation.parseLanguage = function (requestLanguage) {
        requestLanguage = requestLanguage.trim().toLowerCase();
        var result;
        this.languages.forEach(function (language) {
            if (language.code.toLowerCase() === requestLanguage)
                result = language;
        });
        if (result !== undefined)
            return result;
        if (requestLanguage.indexOf('-') !== -1)
            this.languages.forEach(function (language) {
                if (language.code.toLowerCase() === requestLanguage.split('-')[0])
                    result = language;
            });
        if (result !== undefined)
            return result;
        return this.defaultLanguage;
    };
    Object.defineProperty(CloudTranslation, "direction", {
        get: function () {
            return this.currentLanguage.direction;
        },
        enumerable: true,
        configurable: true
    });
    CloudTranslation.translations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var translations, jsonPath, fetchResponse, nullTranslations, data, _i, data_1, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        translations = this.getTranslations(CloudTranslation.currentLanguage.code);
                        if (translations !== undefined && translations.translation === null)
                            return [2, undefined];
                        else if (translations !== undefined)
                            return [2, translations];
                        jsonPath = 'translation/' + this.currentLanguage.code.toLowerCase() + '.json';
                        return [4, fetch(jsonPath)];
                    case 1:
                        fetchResponse = _a.sent();
                        if (!!fetchResponse.ok) return [3, 3];
                        jsonPath = location.protocol + '//' + location.host + '/' + jsonPath;
                        return [4, fetch(jsonPath)];
                    case 2:
                        fetchResponse = _a.sent();
                        if (!fetchResponse.ok) {
                            nullTranslations = new Translations();
                            nullTranslations.languageCode = CloudTranslation.currentLanguage.code;
                            nullTranslations.translation = null;
                            this._translationsList.push(nullTranslations);
                            return [2, undefined];
                        }
                        _a.label = 3;
                    case 3: return [4, fetchResponse.json()];
                    case 4:
                        data = _a.sent();
                        for (_i = 0, data_1 = data; _i < data_1.length; _i++) {
                            value = data_1[_i];
                            this.addTranslationValue(CloudTranslation.currentLanguage.code, value['o'], value['t']);
                        }
                        return [2, this.getTranslations(CloudTranslation.currentLanguage.code)];
                }
            });
        });
    };
    ;
    CloudTranslation.getTranslation = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var translation, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.currentLanguage.code === this.defaultLanguage.code)
                            return [2, text];
                        translation = null;
                        return [4, CloudTranslation.translations()];
                    case 1:
                        results = _a.sent();
                        if (results === undefined)
                            return [2, undefined];
                        results.translation.forEach(function (t) {
                            if (t.default.trim() === text.trim())
                                translation = t;
                        });
                        if (translation === null)
                            return [2, undefined];
                        return [2, translation.text.replace(text.trim(), translation.text)];
                }
            });
        });
    };
    CloudTranslation.translateElement = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var style, rtlStyle, i, propertyName, originalStyle, elementHref, translationStatuses, status_1, e_1, status_2, e_2, status_3, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (element === undefined)
                            return [2, []];
                        if (CloudTranslation.direction === LanguageDirection.rtl) {
                            style = element.style.cssText;
                            if (style !== undefined) {
                                $(element).data('_ctoriginalstyle', style);
                                rtlStyle = '';
                                for (i = 0; i < element.style.length; i++) {
                                    propertyName = element.style[i];
                                    if (CloudTranslation.stylePropertiesToOpposite.indexOf(propertyName) !== -1)
                                        rtlStyle += CloudTranslation.oppositeRTLCSSValues(element, propertyName);
                                    else if (CloudTranslation.stylePropertiesToSwitch.indexOf(propertyName) !== -1)
                                        rtlStyle += CloudTranslation.switchRTLCSSValues(element, propertyName);
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
                            originalStyle = $(element).data('_ctoriginalstyle');
                            if (originalStyle !== '') {
                                $(element).attr('style', originalStyle);
                                $(element).removeData('_ctoriginalstyle');
                            }
                        }
                        if (!this.doTranslateElement(element))
                            return [2, []];
                        if (element.tagName === 'A') {
                            elementHref = element.getAttribute('href');
                            if (elementHref.indexOf(':') !== -1) {
                                elementHref = elementHref.split(':')[0].toLowerCase();
                                if (elementHref === 'mailto' || elementHref === 'tel') {
                                    element.setAttribute('dir', 'ltr');
                                    return [2, []];
                                }
                            }
                        }
                        translationStatuses = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, CloudTranslation.translateElementText(element)];
                    case 2:
                        status_1 = _a.sent();
                        translationStatuses.push(status_1);
                        return [3, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3, 4];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4, CloudTranslation.translateElementTitle(element)];
                    case 5:
                        status_2 = _a.sent();
                        translationStatuses.push(status_2);
                        return [3, 7];
                    case 6:
                        e_2 = _a.sent();
                        return [3, 7];
                    case 7:
                        if (!(element.tagName === 'INPUT')) return [3, 11];
                        _a.label = 8;
                    case 8:
                        _a.trys.push([8, 10, , 11]);
                        return [4, CloudTranslation.translateElementPlaceholder(element)];
                    case 9:
                        status_3 = _a.sent();
                        translationStatuses.push(status_3);
                        return [3, 11];
                    case 10:
                        e_3 = _a.sent();
                        return [3, 11];
                    case 11: return [2, translationStatuses];
                }
            });
        });
    };
    CloudTranslation.onlyUnique = function (value, index, self) {
        return self.indexOf(value) === index;
    };
    CloudTranslation.translateElementText = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var childNode, translationStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (element.tagName.toLowerCase() == 'script')
                            return [2, new TranslationStatus(element, TranslationStatusResult.ignored)];
                        childNode = element.childNodes[0];
                        if (childNode === undefined)
                            return [2, new TranslationStatus(element, TranslationStatusResult.ignored)];
                        if (childNode.nodeValue === null)
                            return [2, new TranslationStatus(element, TranslationStatusResult.ignored)];
                        if (childNode.nodeValue.trim() === '')
                            return [2, new TranslationStatus(element, TranslationStatusResult.ignored)];
                        return [4, CloudTranslation.translate(element, '_ctoriginaltext', childNode.nodeValue)];
                    case 1:
                        translationStatus = _a.sent();
                        switch (translationStatus.result) {
                            case TranslationStatusResult.succeeded:
                                childNode.nodeValue = translationStatus.text;
                                return [2, translationStatus];
                            case TranslationStatusResult.failed:
                                childNode.nodeValue = translationStatus.text;
                                translationStatus.attribute = 'text';
                                return [2, translationStatus];
                            default:
                                return [2, translationStatus];
                        }
                        return [2];
                }
            });
        });
    };
    CloudTranslation.translateElementTitle = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var translationStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, CloudTranslation.translate(element, '_ctoriginaltitle', element.title)];
                    case 1:
                        translationStatus = _a.sent();
                        switch (translationStatus.result) {
                            case TranslationStatusResult.succeeded:
                                element.title = translationStatus.text;
                                return [2, translationStatus];
                            case TranslationStatusResult.failed:
                                element.title = translationStatus.text;
                                translationStatus.attribute = 'title';
                                return [2, translationStatus];
                            default:
                                return [2, translationStatus];
                        }
                        return [2];
                }
            });
        });
    };
    CloudTranslation.translateElementPlaceholder = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var translationStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, CloudTranslation.translate(element, '_ctoriginalplaceholder', element.placeholder)];
                    case 1:
                        translationStatus = _a.sent();
                        switch (translationStatus.result) {
                            case TranslationStatusResult.succeeded:
                                element.placeholder = translationStatus.text;
                                return [2, translationStatus];
                            case TranslationStatusResult.failed:
                                element.placeholder = translationStatus.text;
                                translationStatus.attribute = 'placeholder';
                                return [2, translationStatus];
                            default:
                                return [2, translationStatus];
                        }
                        return [2];
                }
            });
        });
    };
    CloudTranslation.translate = function (element, dataValueName, currentValue) {
        return __awaiter(this, void 0, void 0, function () {
            var originalText, translatedText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if ($(element).data(dataValueName) !== undefined)
                            originalText = $(element).data(dataValueName);
                        if ((originalText === undefined || originalText.trim() === '') && (currentValue === null || currentValue.trim() === ''))
                            return [2, new TranslationStatus(element, TranslationStatusResult.ignored)];
                        if (originalText === undefined || originalText.trim() === '')
                            originalText = currentValue;
                        return [4, CloudTranslation.getTranslation(originalText)];
                    case 1:
                        translatedText = _a.sent();
                        if (translatedText === undefined) {
                            $(element).removeData(dataValueName);
                            return [2, new TranslationStatus(element, TranslationStatusResult.failed, originalText)];
                        }
                        if (translatedText !== originalText)
                            $(element).data(dataValueName, originalText);
                        else
                            $(element).removeData(dataValueName);
                        return [2, new TranslationStatus(element, TranslationStatusResult.succeeded, translatedText)];
                }
            });
        });
    };
    CloudTranslation.addRTLCSS = function () {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = CloudTranslation.generateRTLCSS();
        document.getElementsByTagName('head')[0].appendChild(style);
    };
    CloudTranslation.generateRTLCSS = function () {
        var style = 'html[dir="rtl"] {direction: rtl;}';
        $.each(document.styleSheets, function (index, sheet) {
            try {
                style += CloudTranslation.getRulesStyle(sheet['cssRules'] || sheet['rules']);
            }
            catch (e) { }
        });
        return style;
    };
    CloudTranslation.getRulesStyle = function (rules) {
        var result = '';
        $.each(rules, function (index, rule) {
            if (rule.type === 4) {
                var mediaStyle = void 0;
                try {
                    mediaStyle = CloudTranslation.getRulesStyle(rule['cssRules'] || rule['rules']);
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
            CloudTranslation.stylePropertiesToOpposite.forEach(function (property) {
                selectorStyle += CloudTranslation.oppositeRTLCSSValues(rule, property);
            });
            CloudTranslation.stylePropertiesToSwitch.forEach(function (property) {
                selectorStyle += CloudTranslation.switchRTLCSSValues(rule, property);
            });
            if (selectorStyle !== '')
                result += 'html[dir=rtl] ' + rule.selectorText + '{' + selectorStyle + '}';
        });
        return result;
    };
    CloudTranslation.switchRTLCSSValues = function (rule, name) {
        name = name.split('-')[0];
        var leftProperty = name + '-left';
        var rightProperty = name + '-right';
        var leftValue = rule.style[leftProperty];
        var rightValue = rule.style[rightProperty];
        if (leftValue === '' && rightValue === '')
            return '';
        if (leftValue === rightValue)
            return '';
        if (leftValue === '')
            leftValue = 'initial';
        if (rightValue === '')
            rightValue = 'initial';
        var style = leftProperty + ': ' + rightValue + ';' + rightProperty + ': ' + leftValue + ';';
        return style;
    };
    CloudTranslation.oppositeRTLCSSValues = function (rule, name) {
        var value = rule.style[name];
        if (value === '')
            return '';
        var style = '';
        if (value === 'left')
            style += name + ': right;';
        else if (value === 'right')
            style += name + ': left;';
        else if (CloudTranslation.canBeNegative(value)) {
            if (value.indexOf('-') === 0)
                style += name + ': ' + value.substr(1) + ';';
            else
                style += name + ': -' + value + ';';
        }
        return style;
    };
    CloudTranslation.canBeNegative = function (value) {
        var unites = ['px', 'pt', 'pc', 'cm', 'mm', 'in', 'em', 'rem', 'vw', 'vh', 'ex', 'ch', 'vmin', 'vmax', '%'];
        var isTrue = false;
        unites.forEach(function (unit) {
            if (value.indexOf(unit) > 0 && value.indexOf(' ') === -1)
                isTrue = true;
        });
        return isTrue;
    };
    CloudTranslation.azureAutoTranslate = function (texts) {
        return __awaiter(this, void 0, void 0, function () {
            var bodyData, translatedTexts, data, jsonTranslations_1, e_4;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (texts.length === 0)
                            return [2, []];
                        bodyData = '';
                        texts.forEach(function (text) { bodyData += '{"Text": "' + text + '"},'; });
                        translatedTexts = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, $.ajax({
                                url: 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=' + this.defaultLanguage.code + '&to=' + this.currentLanguage.code,
                                type: "POST",
                                dataType: 'json',
                                data: '[' + bodyData + ']',
                                cache: true,
                                beforeSend: function (xhrObj) {
                                    xhrObj.setRequestHeader("Content-Type", "application/json");
                                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", _this.translatorProviderKey);
                                },
                            })];
                    case 2:
                        data = _a.sent();
                        jsonTranslations_1 = [];
                        $.each(data, function (index, translations) {
                            translatedTexts[index] = translations.translations[0].text;
                            if (_this.logTranslationsFromProvider)
                                jsonTranslations_1.push('{"o": "' + texts[index].trim() + '", "t": "' + translatedTexts[index].trim() + '"}');
                        });
                        if (this.logTranslationsFromProvider)
                            console.log('[' + jsonTranslations_1.join(',') + ']');
                        return [3, 4];
                    case 3:
                        e_4 = _a.sent();
                        console.log(e_4.responseJSON.error.message);
                        console.log(bodyData);
                        return [3, 4];
                    case 4: return [2, translatedTexts];
                }
            });
        });
    };
    CloudTranslation.scrollToTop = function (scrollDuration) {
        var scrollTo = 0;
        var cosParameter = (window.pageYOffset - scrollTo) / 2, scrollCount = 0, oldTimestamp = window.performance.now();
        function step(newTimestamp) {
            var tsDiff = newTimestamp - oldTimestamp;
            if (tsDiff > 100)
                tsDiff = 30;
            scrollCount += Math.PI / (scrollDuration / tsDiff);
            if (scrollCount >= Math.PI)
                return;
            var moveStep = Math.round(scrollTo + cosParameter + cosParameter * Math.cos(scrollCount));
            window.scrollTo(0, moveStep);
            oldTimestamp = newTimestamp;
            window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
    };
    CloudTranslation.updateCurrentLanguage = function () {
        var localStorageLanguage;
        var urlLanguage;
        var browserLanguage;
        var result;
        try {
            result = localStorage.getItem('lang');
        }
        catch (_a) {
            console.log('localStorage is not supported.');
            result = null;
        }
        if (result !== null)
            localStorageLanguage = this.parseLanguage(result);
        if (this.urlLanguageLocation !== undefined) {
            var urlValue_1;
            if (this.urlLanguageLocation === UrlLanguageLocation.subdirectory)
                urlValue_1 = window.location.pathname.split('/')[1];
            if (urlValue_1 !== undefined)
                if (urlValue_1.length === 2 || (urlValue_1.length === 5 && urlValue_1.indexOf('-') === 2)) {
                    this.languages.forEach(function (language) {
                        if (language.code.toLowerCase() === urlValue_1.toLowerCase())
                            result = language.code;
                    });
                    if (urlValue_1.indexOf('-') !== -1 && result === undefined) {
                        urlValue_1 = urlValue_1.split('-')[0];
                        this.languages.forEach(function (language) {
                            if (language.code.toLowerCase() === urlValue_1.toLowerCase())
                                result = language.code;
                        });
                    }
                    if (result !== undefined)
                        urlLanguage = this.parseLanguage(result);
                }
        }
        result = navigator['language'] || navigator['userLanguage'];
        if (result !== undefined)
            browserLanguage = this.parseLanguage(result);
        if (urlLanguage !== undefined)
            this.setCurrentLanguage(urlLanguage.code);
        else if (localStorageLanguage !== undefined)
            this.setCurrentLanguage(localStorageLanguage.code);
        else if (browserLanguage !== undefined)
            this.setCurrentLanguage(browserLanguage.code);
        else
            this.setCurrentLanguage(this.defaultLanguage.code);
    };
    Object.defineProperty(CloudTranslation, "currentLanguage", {
        get: function () {
            if (this._currentLanguage !== undefined)
                return this._currentLanguage;
            this.updateCurrentLanguage();
            return this._currentLanguage;
        },
        enumerable: true,
        configurable: true
    });
    CloudTranslation.updateUrlLanguage = function () {
        if (this.urlLanguageLocation === undefined)
            return;
        if (this.urlLanguageLocation === UrlLanguageLocation.subdirectory) {
            var pathnameSplitted = window.location.pathname.split('/');
            var currentLanguageCode = pathnameSplitted[1];
            if (currentLanguageCode.length === 2 || (currentLanguageCode.length === 5 && currentLanguageCode.indexOf('-') === 2))
                pathnameSplitted[1] = this.currentLanguage.code;
            else
                pathnameSplitted.splice(1, 0, this.currentLanguage.code);
            history.replaceState(null, null, pathnameSplitted.join('/'));
        }
    };
    CloudTranslation.setCurrentLanguage = function (languageCode) {
        this._currentLanguage = this.parseLanguage(languageCode);
        try {
            localStorage.setItem('lang', this._currentLanguage.code);
        }
        catch (_a) {
            console.log('localStorage is not supported.');
        }
        this.updateUrlLanguage();
    };
    CloudTranslation.translateDOM = function () {
        return __awaiter(this, void 0, void 0, function () {
            var styleSheet, selection, translationStatuses, _i, _a, e, results, e_5, originalTexts_1, translatedTexts, translations, e_6, _b, translationStatuses_1, status_4, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        $('html').attr('lang', CloudTranslation.currentLanguage.code);
                        if (CloudTranslation.direction === LanguageDirection.rtl)
                            $('html').attr('dir', 'rtl');
                        else
                            $('html').removeAttr('dir');
                        $.each(document.styleSheets, function (index, sheet) {
                            try {
                                $.each(sheet['cssRules'] || sheet['rules'], function (ruleIndex, rule) {
                                    if (rule.cssText === 'html[dir="rtl"] { direction: rtl; }')
                                        styleSheet = sheet;
                                });
                            }
                            catch (e) { }
                        });
                        if (CloudTranslation.direction === LanguageDirection.rtl && styleSheet === undefined)
                            CloudTranslation.addRTLCSS();
                        selection = '*';
                        CloudTranslation.nonTranslatedElements.forEach(function (element) {
                            selection += ':not(' + '"' + element + '"' + ')';
                        });
                        translationStatuses = [];
                        _i = 0, _a = $(selection).toArray();
                        _d.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3, 6];
                        e = _a[_i];
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 4, , 5]);
                        return [4, CloudTranslation.translateElement(e)];
                    case 3:
                        results = _d.sent();
                        results.forEach(function (status) {
                            translationStatuses.push(status);
                        });
                        return [3, 5];
                    case 4:
                        e_5 = _d.sent();
                        return [3, 5];
                    case 5:
                        _i++;
                        return [3, 1];
                    case 6:
                        ;
                        if (!(this.currentLanguage.code !== this.defaultLanguage.code)) return [3, 20];
                        originalTexts_1 = [];
                        translationStatuses.forEach(function (status) {
                            try {
                                switch (status.result) {
                                    case TranslationStatusResult.failed:
                                        originalTexts_1.push(status.text.replace(/"/g, '\\"'));
                                        break;
                                    default:
                                        break;
                                }
                            }
                            catch (e) { }
                        });
                        originalTexts_1 = originalTexts_1.filter(this.onlyUnique);
                        if (!(this.translatorProvider === 1)) return [3, 10];
                        _d.label = 7;
                    case 7:
                        _d.trys.push([7, 9, , 10]);
                        return [4, this.azureAutoTranslate(originalTexts_1)];
                    case 8:
                        translatedTexts = _d.sent();
                        translations = this.getTranslations(CloudTranslation.currentLanguage.code).translation;
                        if (translations === null)
                            this.getTranslations(CloudTranslation.currentLanguage.code).translation = [];
                        $.each(translatedTexts, function (index, text) {
                            try {
                                CloudTranslation.addTranslationValue(CloudTranslation.currentLanguage.code, originalTexts_1[index], text);
                            }
                            catch (e) { }
                        });
                        return [3, 10];
                    case 9:
                        e_6 = _d.sent();
                        console.log(e_6);
                        return [3, 10];
                    case 10:
                        _b = 0, translationStatuses_1 = translationStatuses;
                        _d.label = 11;
                    case 11:
                        if (!(_b < translationStatuses_1.length)) return [3, 19];
                        status_4 = translationStatuses_1[_b];
                        _c = status_4.result;
                        switch (_c) {
                            case TranslationStatusResult.failed: return [3, 12];
                        }
                        return [3, 17];
                    case 12:
                        if (!(status_4.attribute === 'title')) return [3, 14];
                        return [4, CloudTranslation.translateElementTitle(status_4.element)];
                    case 13:
                        _d.sent();
                        return [3, 16];
                    case 14: return [4, CloudTranslation.translateElementText(status_4.element)];
                    case 15:
                        _d.sent();
                        _d.label = 16;
                    case 16: return [3, 18];
                    case 17: return [3, 18];
                    case 18:
                        _b++;
                        return [3, 11];
                    case 19:
                        ;
                        _d.label = 20;
                    case 20:
                        this._currentLanguage = undefined;
                        return [2];
                }
            });
        });
    };
    CloudTranslation.fillInLanguages = function () {
        var selection = $('.cloudtranslation-selection');
        if (selection.length === 0)
            return;
        selection.attr('translate', 'no');
        selection.html('');
        var currentLanguage = this.currentLanguage.code;
        CloudTranslation.languages.forEach(function (language) {
            $('.cloudtranslation-selection').append('<option value="' + language.code + '"' + (language.code === currentLanguage ? ' selected ' : '') + '>' + language.displayName + '</option>');
        });
    };
    return CloudTranslation;
}());
{ CloudTranslation };

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q0FBQzs7NkJBQ2hFLGVBQU07NkJBR04sZUFBTTs7d0JBYkcsSUFBbUIsQ0FBQTs7O3dCQWV2QyxDQUFDOzs7d0JBSU4sSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQzs7Ozs7S0FDckM7SUFFTSxnQ0FBZSxHQUF0QjtRQUVJLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBRWpELElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQ3RCLE9BQU87UUFFWCxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVsQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRW5CLElBQUksZUFBZSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1FBRXhELGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO1lBQ3hDLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFBO1FBQ3pMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0F4NEJBLEFBdzRCQyxJQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbG91ZFRyYW5zbGF0aW9uU2V0dGluZ3MgfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdG9yUHJvdmlkZXIsIFVybExhbmd1YWdlTG9jYXRpb24sIExhbmd1YWdlRGlyZWN0aW9uLCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdCB9IGZyb20gXCIuL2VudW1zXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0aW9ucywgTGFuZ3VhZ2UsIFRyYW5zbGF0aW9uVmFsdWUsIFRyYW5zbGF0aW9uU3RhdHVzIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xyXG5cclxuY29uc3QgY2xvdWRUcmFuc2xhdGlvbiA9IChzZXR0aW5ncz86IENsb3VkVHJhbnNsYXRpb25TZXR0aW5ncykgPT4gbmV3IENsb3VkVHJhbnNsYXRpb24oc2V0dGluZ3MpO1xyXG5leHBvcnQgZGVmYXVsdCBjbG91ZFRyYW5zbGF0aW9uO1xyXG5cclxuZXhwb3J0IGNsYXNzIENsb3VkVHJhbnNsYXRpb257XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBDbG91ZFRyYW5zbGF0aW9uU2V0dGluZ3Mpe1xyXG4gICAgICAgIFxyXG4gICAgQ2xvdWRUcmFuc2xhdGlvbi5fc2V0dGluZ3MgPSB0aGlzLm1lcmdlU2V0dGluZ3Moc2V0dGluZ3MpO1xyXG5cclxuICAgICAgICBDbG91ZFRyYW5zbGF0aW9uLnVwZGF0ZUN1cnJlbnRMYW5ndWFnZSgpO1xyXG4gICAgICAgIENsb3VkVHJhbnNsYXRpb24uZmlsbEluTGFuZ3VhZ2VzKCk7XHJcbiAgICAgICAgQ2xvdWRUcmFuc2xhdGlvbi50cmFuc2xhdGVET00oKTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY2xvdWR0cmFuc2xhdGlvbi1zZWxlY3Rpb24nLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGFuZ3VhZ2VDb2RlID0gJCh0aGlzKS52YWwoKS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxhbmd1YWdlQ29kZSAhPT0gJycpXHJcbiAgICAgICAgICAgICAgICBDbG91ZFRyYW5zbGF0aW9uLnNldEN1cnJlbnRMYW5ndWFnZShsYW5ndWFnZUNvZGUpO1xyXG5cclxuICAgICAgICAgICAgQ2xvdWRUcmFuc2xhdGlvbi5zY3JvbGxUb1RvcCgyMDApO1xyXG4gICAgICAgICAgICBhd2FpdCBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0ZURPTSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIG1lcmdlU2V0dGluZ3MoX3NldHRpbmdzOiBDbG91ZFRyYW5zbGF0aW9uU2V0dGluZ3MpOiBDbG91ZFRyYW5zbGF0aW9uU2V0dGluZ3Mge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmdzIDogQ2xvdWRUcmFuc2xhdGlvblNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBkZWZhdWx0TGFuZ3VhZ2U6ICdlbicsXHJcbiAgICAgICAgICAgIGxvZ1RyYW5zbGF0aW9uc0Zyb21Qcm92aWRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0b3JQcm92aWRlcjogVHJhbnNsYXRvclByb3ZpZGVyLm5vbmUgLFxyXG4gICAgICAgICAgICB0cmFuc2xhdG9yUHJvdmlkZXJLZXk6ICcnLFxyXG4gICAgICAgICAgICB1cmxMYW5ndWFnZUxvY2F0aW9uOiBVcmxMYW5ndWFnZUxvY2F0aW9uLm5vbmUsXHJcblxyXG4gICAgICAgICAgICBsYW5ndWFnZXM6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBhdHRybmFtZSBpbiBfc2V0dGluZ3MpIFxyXG4gICAgICAgIHNldHRpbmdzW2F0dHJuYW1lXSA9IF9zZXR0aW5nc1thdHRybmFtZV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByaXZhdGUgVmFyaWFibGVzXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3RyYW5zbGF0aW9uc0xpc3Q6IFRyYW5zbGF0aW9uc1tdO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2RlZmF1bHRMYW5ndWFnZTogTGFuZ3VhZ2U7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfY3VycmVudExhbmd1YWdlOiBMYW5ndWFnZTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9zdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9zZXR0aW5ncyA6IENsb3VkVHJhbnNsYXRpb25TZXR0aW5ncztcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgdHJhbnNsYXRpb25zTGlzdCgpOiBUcmFuc2xhdGlvbnNbXSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl90cmFuc2xhdGlvbnNMaXN0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zbGF0aW9uc0xpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zbGF0aW9uc0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYWRkVHJhbnNsYXRpb25WYWx1ZShsYW5ndWFnZUNvZGU6IHN0cmluZywgZGVmYXVsdFRleHQ6IHN0cmluZywgdHJhbnNsYXRlZFRleHQ6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25zID0gdGhpcy5nZXRUcmFuc2xhdGlvbnMobGFuZ3VhZ2VDb2RlKTtcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9ucyA9IG5ldyBUcmFuc2xhdGlvbnMoKTtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb25zLmxhbmd1YWdlQ29kZSA9IGxhbmd1YWdlQ29kZTtcclxuICAgICAgICAgICAgdGhpcy5fdHJhbnNsYXRpb25zTGlzdC5wdXNoKHRyYW5zbGF0aW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25WYWx1ZSA9IG5ldyBUcmFuc2xhdGlvblZhbHVlKCk7XHJcbiAgICAgICAgdHJhbnNsYXRpb25WYWx1ZS5kZWZhdWx0ID0gZGVmYXVsdFRleHQ7XHJcbiAgICAgICAgdHJhbnNsYXRpb25WYWx1ZS50ZXh0ID0gdHJhbnNsYXRlZFRleHQ7XHJcblxyXG4gICAgICAgIHRyYW5zbGF0aW9ucy50cmFuc2xhdGlvbi5wdXNoKHRyYW5zbGF0aW9uVmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0VHJhbnNsYXRpb25zKGxhbmd1YWdlQ29kZTogc3RyaW5nKTogVHJhbnNsYXRpb25zIHtcclxuICAgICAgICBsZXQgdDogVHJhbnNsYXRpb25zO1xyXG5cclxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uc0xpc3QuZm9yRWFjaCgodHJhbnNsYXRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodHJhbnNsYXRpb25zLmxhbmd1YWdlQ29kZSA9PT0gbGFuZ3VhZ2VDb2RlKVxyXG4gICAgICAgICAgICAgICAgdCA9IHRyYW5zbGF0aW9ucztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBQcm9wZXJ0aWVzXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IG5vblRyYW5zbGF0ZWRFbGVtZW50cygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsnY29kZScsICdodG1sJywgJ2hlYWQnLCAnaGVhZCA+IConXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgc3R5bGVQcm9wZXJ0aWVzVG9Td2l0Y2goKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBwcm9wZXJ0aWVzID0gWydwYWRkaW5nJywgJ21hcmdpbiddO1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gW107XHJcblxyXG4gICAgICAgIHByb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+e1xyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2gocHJvcGVydHkgKyAnLWxlZnQnKTtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHByb3BlcnR5ICsgJy1yaWdodCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgc3R5bGVQcm9wZXJ0aWVzVG9PcHBvc2l0ZSgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsndGV4dC1hbGlnbicsICdqdXN0aWZ5LWNvbnRlbnQnLCAnanVzdGlmeS1zZWxmJywgJ2Zsb2F0JywgJ2JhY2tncm91bmQtcG9zaXRpb24teCddO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCB0cmFuc2xhdG9yUHJvdmlkZXJLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MudHJhbnNsYXRvclByb3ZpZGVyS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCB0cmFuc2xhdG9yUHJvdmlkZXIoKTogVHJhbnNsYXRvclByb3ZpZGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MudHJhbnNsYXRvclByb3ZpZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCB1cmxMYW5ndWFnZUxvY2F0aW9uKCk6IFVybExhbmd1YWdlTG9jYXRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy51cmxMYW5ndWFnZUxvY2F0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCBsb2dUcmFuc2xhdGlvbnNGcm9tUHJvdmlkZXIoKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5sb2dUcmFuc2xhdGlvbnNGcm9tUHJvdmlkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHN1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlKCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fc3VwcG9ydHNUcmFuc2xhdGVBdHRyaWJ1dGUgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fc3VwcG9ydHNUcmFuc2xhdGVBdHRyaWJ1dGUgPSAkKCdib2R5JylbMF0udHJhbnNsYXRlICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZG9UcmFuc2xhdGVFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRyYW5zbGF0ZSA9PT0gZmFsc2UgfHwgKCQoZWxlbWVudCkuY2xvc2VzdCgnKlt0cmFuc2xhdGVdJylbMF0gIT09IHVuZGVmaW5lZCAmJiAkKGVsZW1lbnQpLmNsb3Nlc3QoJypbdHJhbnNsYXRlXScpWzBdLnRyYW5zbGF0ZSA9PT0gZmFsc2UpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGF0dHJpYnV0ZSA9ICQoZWxlbWVudCkuYXR0cigndHJhbnNsYXRlJyk7XHJcblxyXG4gICAgICAgIGlmIChhdHRyaWJ1dGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoJChlbGVtZW50KS5jbG9zZXN0KCcqW3RyYW5zbGF0ZV0nKVswXSAhPT0gdW5kZWZpbmVkICYmICQoZWxlbWVudCkuY2xvc2VzdCgnKlt0cmFuc2xhdGVdJykuYXR0cigndHJhbnNsYXRlJykudG9Mb3dlckNhc2UoKSA9PT0gJ25vJylcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhdHRyaWJ1dGUudG9Mb3dlckNhc2UoKSA9PT0gJ25vJylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgUHJvcGVydGllc1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZGVmYXVsdExhbmd1YWdlKCk6IExhbmd1YWdlIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2RlZmF1bHRMYW5ndWFnZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdExhbmd1YWdlO1xyXG5cclxuICAgICAgICB0aGlzLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpID09PSB0aGlzLl9zZXR0aW5ncy5kZWZhdWx0TGFuZ3VhZ2UudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RlZmF1bHRMYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdExhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgbGFuZ3VhZ2VzKCk6IExhbmd1YWdlW10ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MubGFuZ3VhZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByaXZhdGUgTWV0aG9kc1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHBhcnNlTGFuZ3VhZ2UocmVxdWVzdExhbmd1YWdlOiBzdHJpbmcpOiBMYW5ndWFnZSB7XHJcblxyXG4gICAgICAgIHJlcXVlc3RMYW5ndWFnZSA9IHJlcXVlc3RMYW5ndWFnZS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdDogTGFuZ3VhZ2U7XHJcblxyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsYW5ndWFnZS5jb2RlLnRvTG93ZXJDYXNlKCkgPT09IHJlcXVlc3RMYW5ndWFnZSlcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxhbmd1YWdlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICAgIGlmIChyZXF1ZXN0TGFuZ3VhZ2UuaW5kZXhPZignLScpICE9PSAtIDEpXHJcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmd1YWdlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gcmVxdWVzdExhbmd1YWdlLnNwbGl0KCctJylbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRMYW5ndWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGRpcmVjdGlvbigpOiBMYW5ndWFnZURpcmVjdGlvbiB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRMYW5ndWFnZS5kaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRpb25zKCk6IFByb21pc2U8VHJhbnNsYXRpb25zPiB7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvbnMgPSB0aGlzLmdldFRyYW5zbGF0aW9ucyhDbG91ZFRyYW5zbGF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9ucyAhPT0gdW5kZWZpbmVkICYmIHRyYW5zbGF0aW9ucy50cmFuc2xhdGlvbiA9PT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBlbHNlIGlmICh0cmFuc2xhdGlvbnMgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9ucztcclxuXHJcbiAgICAgICAgbGV0IGpzb25QYXRoID0gJ3RyYW5zbGF0aW9uLycgKyB0aGlzLmN1cnJlbnRMYW5ndWFnZS5jb2RlLnRvTG93ZXJDYXNlKCkgKyAnLmpzb24nO1xyXG5cclxuICAgICAgICBsZXQgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGZldGNoKGpzb25QYXRoKTtcclxuXHJcbiAgICAgICAgaWYgKCFmZXRjaFJlc3BvbnNlLm9rKSB7XHJcblxyXG4gICAgICAgICAgICAgICAganNvblBhdGggPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsnLycgKyBqc29uUGF0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBmZXRjaFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goanNvblBhdGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZmV0Y2hSZXNwb25zZS5vaykge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBudWxsVHJhbnNsYXRpb25zID0gbmV3IFRyYW5zbGF0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgbnVsbFRyYW5zbGF0aW9ucy5sYW5ndWFnZUNvZGUgPSBDbG91ZFRyYW5zbGF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlO1xyXG4gICAgICAgICAgICAgICAgbnVsbFRyYW5zbGF0aW9ucy50cmFuc2xhdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNsYXRpb25zTGlzdC5wdXNoKG51bGxUcmFuc2xhdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBkYXRhKVxyXG4gICAgICAgICAgICB0aGlzLmFkZFRyYW5zbGF0aW9uVmFsdWUoQ2xvdWRUcmFuc2xhdGlvbi5jdXJyZW50TGFuZ3VhZ2UuY29kZSwgdmFsdWVbJ28nXSwgdmFsdWVbJ3QnXSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRyYW5zbGF0aW9ucyhDbG91ZFRyYW5zbGF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgZ2V0VHJhbnNsYXRpb24odGV4dDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGUgPT09IHRoaXMuZGVmYXVsdExhbmd1YWdlLmNvZGUpXHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xyXG5cclxuICAgICAgICB2YXIgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uVmFsdWUgPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgQ2xvdWRUcmFuc2xhdGlvbi50cmFuc2xhdGlvbnMoKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdHMgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgcmVzdWx0cy50cmFuc2xhdGlvbi5mb3JFYWNoKCh0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAodC5kZWZhdWx0LnRyaW0oKSA9PT0gdGV4dC50cmltKCkpXHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbiA9IHQ7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9uID09PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJhbnNsYXRpb24udGV4dC5yZXBsYWNlKHRleHQudHJpbSgpLCB0cmFuc2xhdGlvbi50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IFByb21pc2U8VHJhbnNsYXRpb25TdGF0dXNbXT4ge1xyXG5cclxuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcblxyXG4gICAgICAgIGlmIChDbG91ZFRyYW5zbGF0aW9uLmRpcmVjdGlvbiA9PT0gTGFuZ3VhZ2VEaXJlY3Rpb24ucnRsKSB7XHJcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IGVsZW1lbnQuc3R5bGUuY3NzVGV4dDtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdHlsZSAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5kYXRhKCdfY3RvcmlnaW5hbHN0eWxlJywgc3R5bGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBydGxTdHlsZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5zdHlsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eU5hbWUgPSBlbGVtZW50LnN0eWxlW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoQ2xvdWRUcmFuc2xhdGlvbi5zdHlsZVByb3BlcnRpZXNUb09wcG9zaXRlLmluZGV4T2YocHJvcGVydHlOYW1lKSAhPT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ0bFN0eWxlICs9IENsb3VkVHJhbnNsYXRpb24ub3Bwb3NpdGVSVExDU1NWYWx1ZXMoZWxlbWVudCwgcHJvcGVydHlOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChDbG91ZFRyYW5zbGF0aW9uLnN0eWxlUHJvcGVydGllc1RvU3dpdGNoLmluZGV4T2YocHJvcGVydHlOYW1lKSAhPT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ0bFN0eWxlICs9IENsb3VkVHJhbnNsYXRpb24uc3dpdGNoUlRMQ1NTVmFsdWVzKGVsZW1lbnQsIHByb3BlcnR5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBydGxTdHlsZSArPSBwcm9wZXJ0eU5hbWUgKyAnOiAnICsgZWxlbWVudC5zdHlsZVtwcm9wZXJ0eU5hbWVdICsgJzsgJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocnRsU3R5bGUgIT09IHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5kYXRhKCdfY3RvcmlnaW5hbHN0eWxlJywgc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHJ0bFN0eWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBvcmlnaW5hbFN0eWxlID0gJChlbGVtZW50KS5kYXRhKCdfY3RvcmlnaW5hbHN0eWxlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAob3JpZ2luYWxTdHlsZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuYXR0cignc3R5bGUnLCBvcmlnaW5hbFN0eWxlKTtcclxuICAgICAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlRGF0YSgnX2N0b3JpZ2luYWxzdHlsZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZ25vcmUgYXR0cmlidXRlOiB0cmFuc2xhdGU9XCJub1wiXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5kb1RyYW5zbGF0ZUVsZW1lbnQoZWxlbWVudCkpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgLy8gSWdub3JlIGxpbmtzIHdpdGggbWFpbHRvOiBhbmQgdGVsOlxyXG5cclxuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAnQScpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50SHJlZiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50SHJlZi5pbmRleE9mKCc6JykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50SHJlZiA9IGVsZW1lbnRIcmVmLnNwbGl0KCc6JylbMF0udG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudEhyZWYgPT09ICdtYWlsdG8nIHx8IGVsZW1lbnRIcmVmID09PSAndGVsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXInLCAnbHRyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUHJvY2VlZCB3aXRoIHRoZSB0cmFuc2xhdGlvblxyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25TdGF0dXNlczogVHJhbnNsYXRpb25TdGF0dXNbXSA9IFtdO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gYXdhaXQgQ2xvdWRUcmFuc2xhdGlvbi50cmFuc2xhdGVFbGVtZW50VGV4dChlbGVtZW50KTtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXNlcy5wdXNoKHN0YXR1cyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBhd2FpdCBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRUaXRsZShlbGVtZW50KTtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXNlcy5wdXNoKHN0YXR1cyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdJTlBVVCcpXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhdHVzID0gYXdhaXQgQ2xvdWRUcmFuc2xhdGlvbi50cmFuc2xhdGVFbGVtZW50UGxhY2Vob2xkZXIoZWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uU3RhdHVzZXMucHVzaChzdGF0dXMpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb25seVVuaXF1ZSh2YWx1ZSwgaW5kZXgsIHNlbGYpIHtcclxuICAgICAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlRWxlbWVudFRleHQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzPiB7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAnc2NyaXB0JylcclxuICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0Lmlnbm9yZWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjaGlsZE5vZGUgPSBlbGVtZW50LmNoaWxkTm9kZXNbMF07XHJcblxyXG4gICAgICAgIGlmIChjaGlsZE5vZGUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5pZ25vcmVkKTtcclxuXHJcbiAgICAgICAgaWYgKGNoaWxkTm9kZS5ub2RlVmFsdWUgPT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25TdGF0dXMoZWxlbWVudCwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuaWdub3JlZCk7XHJcblxyXG4gICAgICAgIGlmIChjaGlsZE5vZGUubm9kZVZhbHVlLnRyaW0oKSA9PT0gJycpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25TdGF0dXMoZWxlbWVudCwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuaWdub3JlZCk7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblN0YXR1cyA9IGF3YWl0IENsb3VkVHJhbnNsYXRpb24udHJhbnNsYXRlKGVsZW1lbnQsICdfY3RvcmlnaW5hbHRleHQnLCBjaGlsZE5vZGUubm9kZVZhbHVlKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0cmFuc2xhdGlvblN0YXR1cy5yZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuc3VjY2VlZGVkOlxyXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlLm5vZGVWYWx1ZSA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXM7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LmZhaWxlZDpcclxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZS5ub2RlVmFsdWUgPSB0cmFuc2xhdGlvblN0YXR1cy50ZXh0O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXMuYXR0cmlidXRlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlRWxlbWVudFRpdGxlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogUHJvbWlzZTxUcmFuc2xhdGlvblN0YXR1cz4ge1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25TdGF0dXMgPSBhd2FpdCBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0ZShlbGVtZW50LCAnX2N0b3JpZ2luYWx0aXRsZScsIGVsZW1lbnQudGl0bGUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRyYW5zbGF0aW9uU3RhdHVzLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5zdWNjZWVkZWQ6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRpdGxlID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50aXRsZSA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1cy5hdHRyaWJ1dGUgPSAndGl0bGUnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlRWxlbWVudFBsYWNlaG9sZGVyKGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzPiB7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblN0YXR1cyA9IGF3YWl0IENsb3VkVHJhbnNsYXRpb24udHJhbnNsYXRlKGVsZW1lbnQsICdfY3RvcmlnaW5hbHBsYWNlaG9sZGVyJywgZWxlbWVudC5wbGFjZWhvbGRlcik7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHJhbnNsYXRpb25TdGF0dXMucmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LnN1Y2NlZWRlZDpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucGxhY2Vob2xkZXIgPSB0cmFuc2xhdGlvblN0YXR1cy50ZXh0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5mYWlsZWQ6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBsYWNlaG9sZGVyID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uU3RhdHVzLmF0dHJpYnV0ZSA9ICdwbGFjZWhvbGRlcic7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXM7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGUoZWxlbWVudDogSFRNTEVsZW1lbnQsIGRhdGFWYWx1ZU5hbWU6IHN0cmluZywgY3VycmVudFZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzPiB7XHJcblxyXG4gICAgICAgIGxldCBvcmlnaW5hbFRleHQ6IHN0cmluZztcclxuXHJcbiAgICAgICAgaWYgKCQoZWxlbWVudCkuZGF0YShkYXRhVmFsdWVOYW1lKSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBvcmlnaW5hbFRleHQgPSAkKGVsZW1lbnQpLmRhdGEoZGF0YVZhbHVlTmFtZSk7XHJcblxyXG4gICAgICAgIGlmICgob3JpZ2luYWxUZXh0ID09PSB1bmRlZmluZWQgfHwgb3JpZ2luYWxUZXh0LnRyaW0oKSA9PT0gJycpICYmIChjdXJyZW50VmFsdWUgPT09IG51bGwgfHwgY3VycmVudFZhbHVlLnRyaW0oKSA9PT0gJycpKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0Lmlnbm9yZWQpO1xyXG5cclxuICAgICAgICBpZiAob3JpZ2luYWxUZXh0ID09PSB1bmRlZmluZWQgfHwgb3JpZ2luYWxUZXh0LnRyaW0oKSA9PT0gJycpXHJcbiAgICAgICAgICAgIG9yaWdpbmFsVGV4dCA9IGN1cnJlbnRWYWx1ZTtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0ZWRUZXh0ID0gYXdhaXQgQ2xvdWRUcmFuc2xhdGlvbi5nZXRUcmFuc2xhdGlvbihvcmlnaW5hbFRleHQpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRlZFRleHQgPT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmVEYXRhKGRhdGFWYWx1ZU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5mYWlsZWQsIG9yaWdpbmFsVGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRlZFRleHQgIT09IG9yaWdpbmFsVGV4dClcclxuICAgICAgICAgICAgJChlbGVtZW50KS5kYXRhKGRhdGFWYWx1ZU5hbWUsIG9yaWdpbmFsVGV4dCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZURhdGEoZGF0YVZhbHVlTmFtZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25TdGF0dXMoZWxlbWVudCwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuc3VjY2VlZGVkLCB0cmFuc2xhdGVkVGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYWRkUlRMQ1NTKCk6IHZvaWQge1xyXG4gICAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICAgICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcbiAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gQ2xvdWRUcmFuc2xhdGlvbi5nZW5lcmF0ZVJUTENTUygpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdlbmVyYXRlUlRMQ1NTKCk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGxldCBzdHlsZSA9ICdodG1sW2Rpcj1cInJ0bFwiXSB7ZGlyZWN0aW9uOiBydGw7fSc7XHJcblxyXG4gICAgICAgICQuZWFjaChkb2N1bWVudC5zdHlsZVNoZWV0cywgZnVuY3Rpb24gKGluZGV4LCBzaGVldCkge1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHN0eWxlICs9IENsb3VkVHJhbnNsYXRpb24uZ2V0UnVsZXNTdHlsZShzaGVldFsnY3NzUnVsZXMnXSB8fCBzaGVldFsncnVsZXMnXSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0UnVsZXNTdHlsZShydWxlcyk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcclxuXHJcbiAgICAgICAgJC5lYWNoKHJ1bGVzLCBmdW5jdGlvbiAoaW5kZXgsIHJ1bGUpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChydWxlLnR5cGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBtZWRpYVN0eWxlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVkaWFTdHlsZSA9IENsb3VkVHJhbnNsYXRpb24uZ2V0UnVsZXNTdHlsZShydWxlWydjc3NSdWxlcyddIHx8IHJ1bGVbJ3J1bGVzJ10pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWVkaWFTdHlsZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ0BtZWRpYSAnICsgcnVsZS5jb25kaXRpb25UZXh0ICsgJ3snO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBtZWRpYVN0eWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnfSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChydWxlLnN0eWxlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgc2VsZWN0b3JTdHlsZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgQ2xvdWRUcmFuc2xhdGlvbi5zdHlsZVByb3BlcnRpZXNUb09wcG9zaXRlLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvclN0eWxlICs9IENsb3VkVHJhbnNsYXRpb24ub3Bwb3NpdGVSVExDU1NWYWx1ZXMocnVsZSwgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIENsb3VkVHJhbnNsYXRpb24uc3R5bGVQcm9wZXJ0aWVzVG9Td2l0Y2guZm9yRWFjaCgocHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yU3R5bGUgKz0gQ2xvdWRUcmFuc2xhdGlvbi5zd2l0Y2hSVExDU1NWYWx1ZXMocnVsZSwgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEluc2VydCBDbGFzc1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdG9yU3R5bGUgIT09ICcnKVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdodG1sW2Rpcj1ydGxdICcgKyBydWxlLnNlbGVjdG9yVGV4dCArICd7JyArIHNlbGVjdG9yU3R5bGUgKyAnfSc7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHN3aXRjaFJUTENTU1ZhbHVlcyhydWxlLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBuYW1lID0gbmFtZS5zcGxpdCgnLScpWzBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGxlZnRQcm9wZXJ0eSA9IG5hbWUgKyAnLWxlZnQnO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0UHJvcGVydHkgPSBuYW1lICsgJy1yaWdodCc7XHJcbiAgICAgICAgbGV0IGxlZnRWYWx1ZSA9IHJ1bGUuc3R5bGVbbGVmdFByb3BlcnR5XTtcclxuICAgICAgICBsZXQgcmlnaHRWYWx1ZSA9IHJ1bGUuc3R5bGVbcmlnaHRQcm9wZXJ0eV07XHJcblxyXG4gICAgICAgIGlmIChsZWZ0VmFsdWUgPT09ICcnICYmIHJpZ2h0VmFsdWUgPT09ICcnKVxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgIGlmIChsZWZ0VmFsdWUgPT09IHJpZ2h0VmFsdWUpXHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuXHJcbiAgICAgICAgaWYgKGxlZnRWYWx1ZSA9PT0gJycpXHJcbiAgICAgICAgICAgIGxlZnRWYWx1ZSA9ICdpbml0aWFsJztcclxuXHJcbiAgICAgICAgaWYgKHJpZ2h0VmFsdWUgPT09ICcnKVxyXG4gICAgICAgICAgICByaWdodFZhbHVlID0gJ2luaXRpYWwnO1xyXG5cclxuICAgICAgICBsZXQgc3R5bGUgPSBsZWZ0UHJvcGVydHkgKyAnOiAnICsgcmlnaHRWYWx1ZSArICc7JyArIHJpZ2h0UHJvcGVydHkgKyAnOiAnICsgbGVmdFZhbHVlICsgJzsnO1xyXG5cclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb3Bwb3NpdGVSVExDU1NWYWx1ZXMocnVsZSwgbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgbGV0IHZhbHVlOiBzdHJpbmcgPSBydWxlLnN0eWxlW25hbWVdO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09ICcnKVxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgIGxldCBzdHlsZSA9ICcnO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09ICdsZWZ0JylcclxuICAgICAgICAgICAgc3R5bGUgKz0gbmFtZSArICc6IHJpZ2h0OydcclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PT0gJ3JpZ2h0JylcclxuICAgICAgICAgICAgc3R5bGUgKz0gbmFtZSArICc6IGxlZnQ7J1xyXG4gICAgICAgIGVsc2UgaWYgKENsb3VkVHJhbnNsYXRpb24uY2FuQmVOZWdhdGl2ZSh2YWx1ZSkpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKCctJykgPT09IDApXHJcbiAgICAgICAgICAgICAgICBzdHlsZSArPSBuYW1lICsgJzogJyArIHZhbHVlLnN1YnN0cigxKSArICc7J1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzdHlsZSArPSBuYW1lICsgJzogLScgKyB2YWx1ZSArICc7J1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGNhbkJlTmVnYXRpdmUodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCB1bml0ZXM6IHN0cmluZ1tdID0gWydweCcsICdwdCcsICdwYycsICdjbScsICdtbScsICdpbicsICdlbScsICdyZW0nLCAndncnLCAndmgnLCAnZXgnLCAnY2gnLCAndm1pbicsICd2bWF4JywgJyUnXTtcclxuXHJcbiAgICAgICAgbGV0IGlzVHJ1ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB1bml0ZXMuZm9yRWFjaCgodW5pdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuaW5kZXhPZih1bml0KSA+IDAgJiYgdmFsdWUuaW5kZXhPZignICcpID09PSAtMSlcclxuICAgICAgICAgICAgICAgIGlzVHJ1ZSA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpc1RydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgYXp1cmVBdXRvVHJhbnNsYXRlKHRleHRzOiBzdHJpbmdbXSk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuXHJcbiAgICAgICAgaWYgKHRleHRzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICBsZXQgYm9keURhdGEgPSAnJztcclxuXHJcbiAgICAgICAgdGV4dHMuZm9yRWFjaCgodGV4dCkgPT4geyBib2R5RGF0YSArPSAne1wiVGV4dFwiOiBcIicgKyB0ZXh0ICsgJ1wifSwnIH0pO1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRlZFRleHRzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS5jb2duaXRpdmUubWljcm9zb2Z0dHJhbnNsYXRvci5jb20vdHJhbnNsYXRlP2FwaS12ZXJzaW9uPTMuMCZmcm9tPScgKyB0aGlzLmRlZmF1bHRMYW5ndWFnZS5jb2RlICsgJyZ0bz0nICsgdGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6ICdbJyArIGJvZHlEYXRhICsgJ10nLFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcblxyXG4gICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogKHhock9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHhock9iai5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB4aHJPYmouc2V0UmVxdWVzdEhlYWRlcihcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIiwgdGhpcy50cmFuc2xhdG9yUHJvdmlkZXJLZXkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGpzb25UcmFuc2xhdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICQuZWFjaChkYXRhLCAoaW5kZXgsIHRyYW5zbGF0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlZFRleHRzW2luZGV4XSA9IHRyYW5zbGF0aW9ucy50cmFuc2xhdGlvbnNbMF0udGV4dDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2dUcmFuc2xhdGlvbnNGcm9tUHJvdmlkZXIpXHJcbiAgICAgICAgICAgICAgICAgICAganNvblRyYW5zbGF0aW9ucy5wdXNoKCd7XCJvXCI6IFwiJyArIHRleHRzW2luZGV4XS50cmltKCkgKyAnXCIsIFwidFwiOiBcIicgKyB0cmFuc2xhdGVkVGV4dHNbaW5kZXhdLnRyaW0oKSArICdcIn0nKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubG9nVHJhbnNsYXRpb25zRnJvbVByb3ZpZGVyKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1snICsganNvblRyYW5zbGF0aW9ucy5qb2luKCcsJykgKyAnXScpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUucmVzcG9uc2VKU09OLmVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhib2R5RGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJhbnNsYXRlZFRleHRzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHNjcm9sbFRvVG9wKHNjcm9sbER1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG8gPSAwO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gRGVjbGFyYXRpb25zXHJcbiAgICBcclxuICAgICAgICBsZXQgY29zUGFyYW1ldGVyID0gKHdpbmRvdy5wYWdlWU9mZnNldCAtIHNjcm9sbFRvKSAvIDIsXHJcbiAgICAgICAgICAgIHNjcm9sbENvdW50ID0gMCxcclxuICAgICAgICAgICAgb2xkVGltZXN0YW1wID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChuZXdUaW1lc3RhbXA6IG51bWJlcik6IHZvaWQge1xyXG4gICAgXHJcbiAgICAgICAgICAgIGxldCB0c0RpZmYgPSBuZXdUaW1lc3RhbXAgLSBvbGRUaW1lc3RhbXA7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gUGVyZm9ybWFuY2Uubm93KCkgcG9seWZpbGwgbG9hZHMgbGF0ZSBzbyBwYXNzZWQtaW4gdGltZXN0YW1wIGlzIGEgbGFyZ2VyIG9mZnNldFxyXG4gICAgICAgICAgICAvLyBvbiB0aGUgZmlyc3QgZ28tdGhyb3VnaCB0aGFuIHdlIHdhbnQgc28gSSdtIGFkanVzdGluZyB0aGUgZGlmZmVyZW5jZSBkb3duIGhlcmUuXHJcbiAgICAgICAgICAgIC8vIFJlZ2FyZGxlc3MsIHdlIHdvdWxkIHJhdGhlciBoYXZlIGEgc2xpZ2h0bHkgc2xvd2VyIGFuaW1hdGlvbiB0aGFuIGEgYmlnIGp1bXAgc28gYSBnb29kXHJcbiAgICAgICAgICAgIC8vIHNhZmVndWFyZCwgZXZlbiBpZiB3ZSdyZSBub3QgdXNpbmcgdGhlIHBvbHlmaWxsLlxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmICh0c0RpZmYgPiAxMDApXHJcbiAgICAgICAgICAgICAgICB0c0RpZmYgPSAzMDtcclxuICAgIFxyXG4gICAgICAgICAgICBzY3JvbGxDb3VudCArPSBNYXRoLlBJIC8gKHNjcm9sbER1cmF0aW9uIC8gdHNEaWZmKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBBcyBzb29uIGFzIHdlIGNyb3NzIG92ZXIgUGksIHdlJ3JlIGFib3V0IHdoZXJlIHdlIG5lZWQgdG8gYmVcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsQ291bnQgPj0gTWF0aC5QSSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCBtb3ZlU3RlcCA9IE1hdGgucm91bmQoc2Nyb2xsVG8gKyBjb3NQYXJhbWV0ZXIgKyBjb3NQYXJhbWV0ZXIgKiBNYXRoLmNvcyhzY3JvbGxDb3VudCkpO1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgbW92ZVN0ZXApO1xyXG4gICAgICAgICAgICBvbGRUaW1lc3RhbXAgPSBuZXdUaW1lc3RhbXA7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgTWV0aG9kc1xyXG5cclxuICAgIHN0YXRpYyB1cGRhdGVDdXJyZW50TGFuZ3VhZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGxvY2FsU3RvcmFnZUxhbmd1YWdlOiBMYW5ndWFnZTtcclxuICAgICAgICBsZXQgdXJsTGFuZ3VhZ2U6IExhbmd1YWdlO1xyXG4gICAgICAgIGxldCBicm93c2VyTGFuZ3VhZ2U6IExhbmd1YWdlO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8vIExvY2FsIFN0b3JhZ2VcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZycpO1xyXG4gICAgICAgIH0gY2F0Y2h7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2NhbFN0b3JhZ2UgaXMgbm90IHN1cHBvcnRlZC4nKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IG51bGwpXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZUxhbmd1YWdlID0gdGhpcy5wYXJzZUxhbmd1YWdlKHJlc3VsdCk7XHJcblxyXG4gICAgICAgIC8vIFVSTFxyXG5cclxuICAgICAgICBpZiAodGhpcy51cmxMYW5ndWFnZUxvY2F0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB1cmxWYWx1ZTogc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudXJsTGFuZ3VhZ2VMb2NhdGlvbiA9PT0gVXJsTGFuZ3VhZ2VMb2NhdGlvbi5zdWJkaXJlY3RvcnkpXHJcbiAgICAgICAgICAgICAgICB1cmxWYWx1ZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpWzFdO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVybFZhbHVlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBpZiAodXJsVmFsdWUubGVuZ3RoID09PSAyIHx8ICh1cmxWYWx1ZS5sZW5ndGggPT09IDUgJiYgdXJsVmFsdWUuaW5kZXhPZignLScpID09PSAyKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpID09PSB1cmxWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybFZhbHVlLmluZGV4T2YoJy0nKSAhPT0gLTEgJiYgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybFZhbHVlID0gdXJsVmFsdWUuc3BsaXQoJy0nKVswXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpID09PSB1cmxWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxMYW5ndWFnZSA9IHRoaXMucGFyc2VMYW5ndWFnZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQnJvd3NlclxyXG5cclxuICAgICAgICByZXN1bHQgPSBuYXZpZ2F0b3JbJ2xhbmd1YWdlJ10gfHwgbmF2aWdhdG9yWyd1c2VyTGFuZ3VhZ2UnXTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBicm93c2VyTGFuZ3VhZ2UgPSB0aGlzLnBhcnNlTGFuZ3VhZ2UocmVzdWx0KTtcclxuXHJcbiAgICAgICAgLy8gQ29uc29saWRhdGlvblxyXG5cclxuICAgICAgICBpZiAodXJsTGFuZ3VhZ2UgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50TGFuZ3VhZ2UodXJsTGFuZ3VhZ2UuY29kZSk7XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGxvY2FsU3RvcmFnZUxhbmd1YWdlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudExhbmd1YWdlKGxvY2FsU3RvcmFnZUxhbmd1YWdlLmNvZGUpO1xyXG5cclxuICAgICAgICBlbHNlIGlmIChicm93c2VyTGFuZ3VhZ2UgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50TGFuZ3VhZ2UoYnJvd3Nlckxhbmd1YWdlLmNvZGUpO1xyXG5cclxuICAgICAgICBlbHNlIHRoaXMuc2V0Q3VycmVudExhbmd1YWdlKHRoaXMuZGVmYXVsdExhbmd1YWdlLmNvZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgY3VycmVudExhbmd1YWdlKCk6IExhbmd1YWdlIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRMYW5ndWFnZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudExhbmd1YWdlO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRMYW5ndWFnZSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50TGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdXBkYXRlVXJsTGFuZ3VhZ2UoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnVybExhbmd1YWdlTG9jYXRpb24gPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy51cmxMYW5ndWFnZUxvY2F0aW9uID09PSBVcmxMYW5ndWFnZUxvY2F0aW9uLnN1YmRpcmVjdG9yeSkge1xyXG4gICAgICAgICAgICBsZXQgcGF0aG5hbWVTcGxpdHRlZCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRMYW5ndWFnZUNvZGUgPSBwYXRobmFtZVNwbGl0dGVkWzFdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRMYW5ndWFnZUNvZGUubGVuZ3RoID09PSAyIHx8IChjdXJyZW50TGFuZ3VhZ2VDb2RlLmxlbmd0aCA9PT0gNSAmJiBjdXJyZW50TGFuZ3VhZ2VDb2RlLmluZGV4T2YoJy0nKSA9PT0gMikpXHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZVNwbGl0dGVkWzFdID0gdGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZTtcclxuICAgICAgICAgICAgZWxzZSBwYXRobmFtZVNwbGl0dGVkLnNwbGljZSgxLCAwLCB0aGlzLmN1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuXHJcbiAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIG51bGwsIHBhdGhuYW1lU3BsaXR0ZWQuam9pbignLycpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldEN1cnJlbnRMYW5ndWFnZShsYW5ndWFnZUNvZGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRMYW5ndWFnZSA9IHRoaXMucGFyc2VMYW5ndWFnZShsYW5ndWFnZUNvZGUpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZycsIHRoaXMuX2N1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuICAgICAgICB9IGNhdGNoe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jYWxTdG9yYWdlIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlVXJsTGFuZ3VhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlRE9NKCk6IFByb21pc2U8dm9pZD4ge1xyXG5cclxuICAgICAgICAkKCdodG1sJykuYXR0cignbGFuZycsIENsb3VkVHJhbnNsYXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUpO1xyXG5cclxuICAgICAgICBpZiAoQ2xvdWRUcmFuc2xhdGlvbi5kaXJlY3Rpb24gPT09IExhbmd1YWdlRGlyZWN0aW9uLnJ0bClcclxuICAgICAgICAgICAgJCgnaHRtbCcpLmF0dHIoJ2RpcicsICdydGwnKTtcclxuICAgICAgICBlbHNlICQoJ2h0bWwnKS5yZW1vdmVBdHRyKCdkaXInKTtcclxuXHJcbiAgICAgICAgbGV0IHN0eWxlU2hlZXQ6IFN0eWxlU2hlZXQ7XHJcblxyXG4gICAgICAgICQuZWFjaChkb2N1bWVudC5zdHlsZVNoZWV0cywgZnVuY3Rpb24gKGluZGV4LCBzaGVldCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgJC5lYWNoKHNoZWV0Wydjc3NSdWxlcyddIHx8IHNoZWV0WydydWxlcyddLCBmdW5jdGlvbiAocnVsZUluZGV4LCBydWxlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChydWxlLmNzc1RleHQgPT09ICdodG1sW2Rpcj1cInJ0bFwiXSB7IGRpcmVjdGlvbjogcnRsOyB9JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldCA9IHNoZWV0O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoQ2xvdWRUcmFuc2xhdGlvbi5kaXJlY3Rpb24gPT09IExhbmd1YWdlRGlyZWN0aW9uLnJ0bCAmJiBzdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIENsb3VkVHJhbnNsYXRpb24uYWRkUlRMQ1NTKCk7XHJcblxyXG4gICAgICAgIHZhciBzZWxlY3Rpb24gPSAnKic7XHJcbiAgICAgICAgQ2xvdWRUcmFuc2xhdGlvbi5ub25UcmFuc2xhdGVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxlY3Rpb24gKz0gJzpub3QoJyArICdcIicgKyBlbGVtZW50ICsgJ1wiJyArICcpJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25TdGF0dXNlczogVHJhbnNsYXRpb25TdGF0dXNbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGUgb2YgJChzZWxlY3Rpb24pLnRvQXJyYXkoKSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0ZUVsZW1lbnQoZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0cy5mb3JFYWNoKChzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1c2VzLnB1c2goc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZSAhPT0gdGhpcy5kZWZhdWx0TGFuZ3VhZ2UuY29kZSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IG9yaWdpbmFsVGV4dHM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1c2VzLmZvckVhY2goKHN0YXR1cykgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMucmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LmZhaWxlZDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFRleHRzLnB1c2goc3RhdHVzLnRleHQucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgb3JpZ2luYWxUZXh0cyA9IG9yaWdpbmFsVGV4dHMuZmlsdGVyKHRoaXMub25seVVuaXF1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2xhdG9yUHJvdmlkZXIgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYW5zbGF0ZWRUZXh0cyA9IGF3YWl0IHRoaXMuYXp1cmVBdXRvVHJhbnNsYXRlKG9yaWdpbmFsVGV4dHMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhbnNsYXRpb25zID0gdGhpcy5nZXRUcmFuc2xhdGlvbnMoQ2xvdWRUcmFuc2xhdGlvbi5jdXJyZW50TGFuZ3VhZ2UuY29kZSkudHJhbnNsYXRpb247XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGlvbnMgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VHJhbnNsYXRpb25zKENsb3VkVHJhbnNsYXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUpLnRyYW5zbGF0aW9uID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaCh0cmFuc2xhdGVkVGV4dHMsIChpbmRleCwgdGV4dCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsb3VkVHJhbnNsYXRpb24uYWRkVHJhbnNsYXRpb25WYWx1ZShDbG91ZFRyYW5zbGF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlLCBvcmlnaW5hbFRleHRzW2luZGV4XSwgdGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyBjb25zb2xlLmxvZyhlKTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN0YXR1cyBvZiB0cmFuc2xhdGlvblN0YXR1c2VzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMucmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5hdHRyaWJ1dGUgPT09ICd0aXRsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRUaXRsZShzdGF0dXMuZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IENsb3VkVHJhbnNsYXRpb24udHJhbnNsYXRlRWxlbWVudFRleHQoc3RhdHVzLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY3VycmVudExhbmd1YWdlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmaWxsSW5MYW5ndWFnZXMoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBzZWxlY3Rpb24gPSAkKCcuY2xvdWR0cmFuc2xhdGlvbi1zZWxlY3Rpb24nKTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgc2VsZWN0aW9uLmF0dHIoJ3RyYW5zbGF0ZScsICdubycpO1xyXG5cclxuICAgICAgICBzZWxlY3Rpb24uaHRtbCgnJyk7XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50TGFuZ3VhZ2U6IHN0cmluZyA9IHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGU7XHJcblxyXG4gICAgICAgIENsb3VkVHJhbnNsYXRpb24ubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICAgICAgICQoJy5jbG91ZHRyYW5zbGF0aW9uLXNlbGVjdGlvbicpLmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT1cIicgKyBsYW5ndWFnZS5jb2RlICsgJ1wiJyArIChsYW5ndWFnZS5jb2RlID09PSBjdXJyZW50TGFuZ3VhZ2UgPyAnIHNlbGVjdGVkICcgOiAnJykgKyAnPicgKyBsYW5ndWFnZS5kaXNwbGF5TmFtZSArICc8L29wdGlvbj4nKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19

