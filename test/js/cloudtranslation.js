var exports = {};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LanguageDirection;
(function (LanguageDirection) {
    LanguageDirection[LanguageDirection["ltr"] = 0] = "ltr";
    LanguageDirection[LanguageDirection["rtl"] = 1] = "rtl";
})(LanguageDirection = exports.LanguageDirection || (exports.LanguageDirection = {}));
var TranslationStatusResult;
(function (TranslationStatusResult) {
    TranslationStatusResult[TranslationStatusResult["ignored"] = 1] = "ignored";
    TranslationStatusResult[TranslationStatusResult["succeeded"] = 2] = "succeeded";
    TranslationStatusResult[TranslationStatusResult["failed"] = 3] = "failed";
})(TranslationStatusResult = exports.TranslationStatusResult || (exports.TranslationStatusResult = {}));
var TranslatorProvider;
(function (TranslatorProvider) {
    TranslatorProvider[TranslatorProvider["none"] = 0] = "none";
    TranslatorProvider[TranslatorProvider["Azure"] = 1] = "Azure";
})(TranslatorProvider = exports.TranslatorProvider || (exports.TranslatorProvider = {}));
var UrlLanguageLocation;
(function (UrlLanguageLocation) {
    UrlLanguageLocation[UrlLanguageLocation["none"] = 0] = "none";
    UrlLanguageLocation[UrlLanguageLocation["subdirectory"] = 1] = "subdirectory";
})(UrlLanguageLocation = exports.UrlLanguageLocation || (exports.UrlLanguageLocation = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsSUFBWSxpQkFHWDtBQUhELFdBQVksaUJBQWlCO0lBQ3pCLHVEQUFPLENBQUE7SUFDUCx1REFBTyxDQUFBO0FBQ1gsQ0FBQyxFQUhXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBRzVCO0FBRUQsSUFBWSx1QkFJWDtBQUpELFdBQVksdUJBQXVCO0lBQy9CLDJFQUFXLENBQUE7SUFDWCwrRUFBYSxDQUFBO0lBQ2IseUVBQVUsQ0FBQTtBQUNkLENBQUMsRUFKVyx1QkFBdUIsR0FBdkIsK0JBQXVCLEtBQXZCLCtCQUF1QixRQUlsQztBQUVELElBQVksa0JBR1g7QUFIRCxXQUFZLGtCQUFrQjtJQUMxQiwyREFBUSxDQUFBO0lBQ1IsNkRBQVMsQ0FBQTtBQUNiLENBQUMsRUFIVyxrQkFBa0IsR0FBbEIsMEJBQWtCLEtBQWxCLDBCQUFrQixRQUc3QjtBQUVELElBQVksbUJBR1g7QUFIRCxXQUFZLG1CQUFtQjtJQUMzQiw2REFBUSxDQUFBO0lBQ1IsNkVBQWdCLENBQUE7QUFDcEIsQ0FBQyxFQUhXLG1CQUFtQixHQUFuQiwyQkFBbUIsS0FBbkIsMkJBQW1CLFFBRzlCIiwiZmlsZSI6ImVudW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRW51bXNcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgZW51bSBMYW5ndWFnZURpcmVjdGlvbntcclxuICAgIGx0ciA9IDAsXHJcbiAgICBydGwgPSAxXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0IHtcclxuICAgIGlnbm9yZWQgPSAxLFxyXG4gICAgc3VjY2VlZGVkID0gMixcclxuICAgIGZhaWxlZCA9IDNcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVHJhbnNsYXRvclByb3ZpZGVyIHtcclxuICAgIG5vbmUgPSAwLFxyXG4gICAgQXp1cmUgPSAxXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFVybExhbmd1YWdlTG9jYXRpb24ge1xyXG4gICAgbm9uZSA9IDAsXHJcbiAgICBzdWJkaXJlY3RvcnkgPSAxXHJcbn0iXX0=

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Translations = (function () {
    function Translations() {
        this.translation = [];
    }
    return Translations;
}());
exports.Translations = Translations;
var TranslationValue = (function () {
    function TranslationValue() {
    }
    return TranslationValue;
}());
exports.TranslationValue = TranslationValue;
var Language = (function () {
    function Language() {
    }
    return Language;
}());
exports.Language = Language;
var TranslationStatus = (function () {
    function TranslationStatus(element, result, text) {
        this.element = element;
        this.result = result;
        this.text = text;
    }
    return TranslationStatus;
}());
exports.TranslationStatus = TranslationStatus;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUVJO1FBRUksSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUlMLG1CQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSxvQ0FBWTtBQVd6QjtJQUFBO0lBSUEsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSw0Q0FBZ0I7QUFNN0I7SUFBQTtJQUtBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUE7QUFMWSw0QkFBUTtBQU9yQjtJQUVJLDJCQUFZLE9BQW9CLEVBQUUsTUFBK0IsRUFBRSxJQUFhO1FBRTVFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFNTCx3QkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlksOENBQWlCIiwiZmlsZSI6ImNsYXNzZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYW5ndWFnZURpcmVjdGlvbiwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQgfSBmcm9tICcuL2VudW1zJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvbnMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbGFuZ3VhZ2VDb2RlOiBzdHJpbmc7XHJcbiAgICB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25WYWx1ZVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25WYWx1ZSB7XHJcblxyXG4gICAgZGVmYXVsdDogc3RyaW5nO1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2Uge1xyXG5cclxuICAgIGNvZGU6IHN0cmluZztcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICBkaXJlY3Rpb24/OiBMYW5ndWFnZURpcmVjdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uU3RhdHVzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgcmVzdWx0OiBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdCwgdGV4dD86IHN0cmluZykge1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICByZXN1bHQ6IFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0O1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgYXR0cmlidXRlOiBzdHJpbmc7XHJcbn0iXX0=

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2xhdG9yUHJvdmlkZXIsIFVybExhbmd1YWdlTG9jYXRpb24gfSBmcm9tIFwiLi9lbnVtc1wiO1xyXG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gXCIuL2NsYXNzZXNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRUcmFuc2xhdGlvblNldHRpbmdzIHtcclxuICAgIGRlZmF1bHRMYW5ndWFnZT86IHN0cmluZztcclxuICAgIGxvZ1RyYW5zbGF0aW9uc0Zyb21Qcm92aWRlcj86IGJvb2xlYW47XHJcbiAgICB0cmFuc2xhdG9yUHJvdmlkZXI/OiBUcmFuc2xhdG9yUHJvdmlkZXI7IFxyXG4gICAgdHJhbnNsYXRvclByb3ZpZGVyS2V5Pzogc3RyaW5nO1xyXG4gICAgdXJsTGFuZ3VhZ2VMb2NhdGlvbj86IFVybExhbmd1YWdlTG9jYXRpb247XHJcblxyXG4gICAgbGFuZ3VhZ2VzOiBMYW5ndWFnZVtdO1xyXG59XHJcbiJdfQ==

"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });


var cloudTranslation = function (settings) { return new CloudTranslation(settings); };
exports.default = cloudTranslation;
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
            return ['text-align', 'float', 'background-position-x'];
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
            var style, rtlStyle, i, propertyName, originalStyle, elementHref, translationStatuses, status_1, e_1, status_2, e_2;
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
                    case 7: return [2, translationStatuses];
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
            var bodyData, translatedTexts, data, jsonTranslations_1, e_3;
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
                        e_3 = _a.sent();
                        console.log(e_3.responseJSON.error.message);
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
            var styleSheet, selection, translationStatuses, _i, _a, e, results, e_4, originalTexts_1, translatedTexts, translations, e_5, _b, translationStatuses_1, status_3, _c;
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
                        e_4 = _d.sent();
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
                        e_5 = _d.sent();
                        console.log(e_5);
                        return [3, 10];
                    case 10:
                        _b = 0, translationStatuses_1 = translationStatuses;
                        _d.label = 11;
                    case 11:
                        if (!(_b < translationStatuses_1.length)) return [3, 19];
                        status_3 = translationStatuses_1[_b];
                        _c = status_3.result;
                        switch (_c) {
                            case TranslationStatusResult.failed: return [3, 12];
                        }
                        return [3, 17];
                    case 12:
                        if (!(status_3.attribute === 'title')) return [3, 14];
                        return [4, CloudTranslation.translateElementTitle(status_3.element)];
                    case 13:
                        _d.sent();
                        return [3, 16];
                    case 14: return [4, CloudTranslation.translateElementText(status_3.element)];
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
                        this.scrollToTop(200);
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
exports.CloudTranslation = CloudTranslation;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q0FBQzs7NkJBRTdELFdBQU0sZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsUUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFBOzt3QkFBM0QsU0FBMkQsQ0FBQzs7NkJBQ2hFLGVBQU07NkJBR04sZUFBTTs7d0JBYkcsSUFBbUIsQ0FBQTs7O3dCQWV2QyxDQUFDOzs7d0JBSU4sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQzs7Ozs7S0FDckM7SUFFTSxnQ0FBZSxHQUF0QjtRQUVJLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBRWpELElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQ3RCLE9BQU87UUFFWCxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVsQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRW5CLElBQUksZUFBZSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1FBRXhELGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO1lBQ3hDLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFBO1FBQ3pMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0E5MkJBLEFBODJCQyxJQUFBO0FBOTJCWSw0Q0FBZ0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsb3VkVHJhbnNsYXRpb25TZXR0aW5ncyB9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0b3JQcm92aWRlciwgVXJsTGFuZ3VhZ2VMb2NhdGlvbiwgTGFuZ3VhZ2VEaXJlY3Rpb24sIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0IH0gZnJvbSBcIi4vZW51bXNcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRpb25zLCBMYW5ndWFnZSwgVHJhbnNsYXRpb25WYWx1ZSwgVHJhbnNsYXRpb25TdGF0dXMgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XHJcblxyXG5jb25zdCBjbG91ZFRyYW5zbGF0aW9uID0gKHNldHRpbmdzPzogQ2xvdWRUcmFuc2xhdGlvblNldHRpbmdzKSA9PiBuZXcgQ2xvdWRUcmFuc2xhdGlvbihzZXR0aW5ncyk7XHJcbmV4cG9ydCBkZWZhdWx0IGNsb3VkVHJhbnNsYXRpb247XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvdWRUcmFuc2xhdGlvbntcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc2V0dGluZ3M6IENsb3VkVHJhbnNsYXRpb25TZXR0aW5ncyl7XHJcbiAgICAgICAgXHJcbiAgICBDbG91ZFRyYW5zbGF0aW9uLl9zZXR0aW5ncyA9IHRoaXMubWVyZ2VTZXR0aW5ncyhzZXR0aW5ncyk7XHJcblxyXG4gICAgICAgIENsb3VkVHJhbnNsYXRpb24udXBkYXRlQ3VycmVudExhbmd1YWdlKCk7XHJcbiAgICAgICAgQ2xvdWRUcmFuc2xhdGlvbi5maWxsSW5MYW5ndWFnZXMoKTtcclxuICAgICAgICBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0ZURPTSgpO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jbG91ZHRyYW5zbGF0aW9uLXNlbGVjdGlvbicsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBsYW5ndWFnZUNvZGUgPSAkKHRoaXMpLnZhbCgpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobGFuZ3VhZ2VDb2RlICE9PSAnJylcclxuICAgICAgICAgICAgICAgIENsb3VkVHJhbnNsYXRpb24uc2V0Q3VycmVudExhbmd1YWdlKGxhbmd1YWdlQ29kZSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0ZURPTSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIG1lcmdlU2V0dGluZ3MoX3NldHRpbmdzOiBDbG91ZFRyYW5zbGF0aW9uU2V0dGluZ3MpOiBDbG91ZFRyYW5zbGF0aW9uU2V0dGluZ3Mge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmdzIDogQ2xvdWRUcmFuc2xhdGlvblNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBkZWZhdWx0TGFuZ3VhZ2U6ICdlbicsXHJcbiAgICAgICAgICAgIGxvZ1RyYW5zbGF0aW9uc0Zyb21Qcm92aWRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0b3JQcm92aWRlcjogVHJhbnNsYXRvclByb3ZpZGVyLm5vbmUgLFxyXG4gICAgICAgICAgICB0cmFuc2xhdG9yUHJvdmlkZXJLZXk6ICcnLFxyXG4gICAgICAgICAgICB1cmxMYW5ndWFnZUxvY2F0aW9uOiBVcmxMYW5ndWFnZUxvY2F0aW9uLm5vbmUsXHJcblxyXG4gICAgICAgICAgICBsYW5ndWFnZXM6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBhdHRybmFtZSBpbiBfc2V0dGluZ3MpIFxyXG4gICAgICAgIHNldHRpbmdzW2F0dHJuYW1lXSA9IF9zZXR0aW5nc1thdHRybmFtZV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByaXZhdGUgVmFyaWFibGVzXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3RyYW5zbGF0aW9uc0xpc3Q6IFRyYW5zbGF0aW9uc1tdO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2RlZmF1bHRMYW5ndWFnZTogTGFuZ3VhZ2U7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfY3VycmVudExhbmd1YWdlOiBMYW5ndWFnZTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9zdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9zZXR0aW5ncyA6IENsb3VkVHJhbnNsYXRpb25TZXR0aW5ncztcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgdHJhbnNsYXRpb25zTGlzdCgpOiBUcmFuc2xhdGlvbnNbXSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl90cmFuc2xhdGlvbnNMaXN0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zbGF0aW9uc0xpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zbGF0aW9uc0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYWRkVHJhbnNsYXRpb25WYWx1ZShsYW5ndWFnZUNvZGU6IHN0cmluZywgZGVmYXVsdFRleHQ6IHN0cmluZywgdHJhbnNsYXRlZFRleHQ6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25zID0gdGhpcy5nZXRUcmFuc2xhdGlvbnMobGFuZ3VhZ2VDb2RlKTtcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9ucyA9IG5ldyBUcmFuc2xhdGlvbnMoKTtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb25zLmxhbmd1YWdlQ29kZSA9IGxhbmd1YWdlQ29kZTtcclxuICAgICAgICAgICAgdGhpcy5fdHJhbnNsYXRpb25zTGlzdC5wdXNoKHRyYW5zbGF0aW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25WYWx1ZSA9IG5ldyBUcmFuc2xhdGlvblZhbHVlKCk7XHJcbiAgICAgICAgdHJhbnNsYXRpb25WYWx1ZS5kZWZhdWx0ID0gZGVmYXVsdFRleHQ7XHJcbiAgICAgICAgdHJhbnNsYXRpb25WYWx1ZS50ZXh0ID0gdHJhbnNsYXRlZFRleHQ7XHJcblxyXG4gICAgICAgIHRyYW5zbGF0aW9ucy50cmFuc2xhdGlvbi5wdXNoKHRyYW5zbGF0aW9uVmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0VHJhbnNsYXRpb25zKGxhbmd1YWdlQ29kZTogc3RyaW5nKTogVHJhbnNsYXRpb25zIHtcclxuICAgICAgICBsZXQgdDogVHJhbnNsYXRpb25zO1xyXG5cclxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uc0xpc3QuZm9yRWFjaCgodHJhbnNsYXRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodHJhbnNsYXRpb25zLmxhbmd1YWdlQ29kZSA9PT0gbGFuZ3VhZ2VDb2RlKVxyXG4gICAgICAgICAgICAgICAgdCA9IHRyYW5zbGF0aW9ucztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBQcm9wZXJ0aWVzXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IG5vblRyYW5zbGF0ZWRFbGVtZW50cygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsnY29kZScsICdodG1sJywgJ2hlYWQnLCAnaGVhZCA+IConXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgc3R5bGVQcm9wZXJ0aWVzVG9Td2l0Y2goKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBwcm9wZXJ0aWVzID0gWydwYWRkaW5nJywgJ21hcmdpbiddO1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gW107XHJcblxyXG4gICAgICAgIHByb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+e1xyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2gocHJvcGVydHkgKyAnLWxlZnQnKTtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHByb3BlcnR5ICsgJy1yaWdodCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgc3R5bGVQcm9wZXJ0aWVzVG9PcHBvc2l0ZSgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsndGV4dC1hbGlnbicsICdmbG9hdCcsICdiYWNrZ3JvdW5kLXBvc2l0aW9uLXgnXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgdHJhbnNsYXRvclByb3ZpZGVyS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLnRyYW5zbGF0b3JQcm92aWRlcktleTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgdHJhbnNsYXRvclByb3ZpZGVyKCk6IFRyYW5zbGF0b3JQcm92aWRlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLnRyYW5zbGF0b3JQcm92aWRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgdXJsTGFuZ3VhZ2VMb2NhdGlvbigpOiBVcmxMYW5ndWFnZUxvY2F0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MudXJsTGFuZ3VhZ2VMb2NhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgbG9nVHJhbnNsYXRpb25zRnJvbVByb3ZpZGVyKCk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MubG9nVHJhbnNsYXRpb25zRnJvbVByb3ZpZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCBzdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3N1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlID0gJCgnYm9keScpWzBdLnRyYW5zbGF0ZSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkb1RyYW5zbGF0ZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHNUcmFuc2xhdGVBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudHJhbnNsYXRlID09PSBmYWxzZSB8fCAoJChlbGVtZW50KS5jbG9zZXN0KCcqW3RyYW5zbGF0ZV0nKVswXSAhPT0gdW5kZWZpbmVkICYmICQoZWxlbWVudCkuY2xvc2VzdCgnKlt0cmFuc2xhdGVdJylbMF0udHJhbnNsYXRlID09PSBmYWxzZSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYXR0cmlidXRlID0gJChlbGVtZW50KS5hdHRyKCd0cmFuc2xhdGUnKTtcclxuXHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLmNsb3Nlc3QoJypbdHJhbnNsYXRlXScpWzBdICE9PSB1bmRlZmluZWQgJiYgJChlbGVtZW50KS5jbG9zZXN0KCcqW3RyYW5zbGF0ZV0nKS5hdHRyKCd0cmFuc2xhdGUnKS50b0xvd2VyQ2FzZSgpID09PSAnbm8nKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZS50b0xvd2VyQ2FzZSgpID09PSAnbm8nKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1YmxpYyBQcm9wZXJ0aWVzXHJcblxyXG4gICAgc3RhdGljIGdldCBkZWZhdWx0TGFuZ3VhZ2UoKTogTGFuZ3VhZ2Uge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZGVmYXVsdExhbmd1YWdlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0TGFuZ3VhZ2U7XHJcblxyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsYW5ndWFnZS5jb2RlLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMuX3NldHRpbmdzLmRlZmF1bHRMYW5ndWFnZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmYXVsdExhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0TGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBsYW5ndWFnZXMoKTogTGFuZ3VhZ2VbXSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5sYW5ndWFnZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBNZXRob2RzXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VMYW5ndWFnZShyZXF1ZXN0TGFuZ3VhZ2U6IHN0cmluZyk6IExhbmd1YWdlIHtcclxuXHJcbiAgICAgICAgcmVxdWVzdExhbmd1YWdlID0gcmVxdWVzdExhbmd1YWdlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0OiBMYW5ndWFnZTtcclxuXHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZXMuZm9yRWFjaCgobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gcmVxdWVzdExhbmd1YWdlKVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICAgICAgaWYgKHJlcXVlc3RMYW5ndWFnZS5pbmRleE9mKCctJykgIT09IC0gMSlcclxuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXMuZm9yRWFjaCgobGFuZ3VhZ2UpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpID09PSByZXF1ZXN0TGFuZ3VhZ2Uuc3BsaXQoJy0nKVswXSlcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBsYW5ndWFnZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdExhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgZGlyZWN0aW9uKCk6IExhbmd1YWdlRGlyZWN0aW9uIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudExhbmd1YWdlLmRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGlvbnMoKTogUHJvbWlzZTxUcmFuc2xhdGlvbnM+IHtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKENsb3VkVHJhbnNsYXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRpb25zICE9PSB1bmRlZmluZWQgJiYgdHJhbnNsYXRpb25zLnRyYW5zbGF0aW9uID09PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIGVsc2UgaWYgKHRyYW5zbGF0aW9ucyAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25zO1xyXG5cclxuICAgICAgICBsZXQganNvblBhdGggPSAndHJhbnNsYXRpb24vJyArIHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSArICcuanNvbic7XHJcblxyXG4gICAgICAgIGxldCBmZXRjaFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goanNvblBhdGgpO1xyXG5cclxuICAgICAgICBpZiAoIWZldGNoUmVzcG9uc2Uub2spIHtcclxuXHJcbiAgICAgICAgICAgICAgICBqc29uUGF0aCA9IGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKycvJyArIGpzb25QYXRoO1xyXG5cclxuICAgICAgICAgICAgICAgIGZldGNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChqc29uUGF0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFmZXRjaFJlc3BvbnNlLm9rKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG51bGxUcmFuc2xhdGlvbnMgPSBuZXcgVHJhbnNsYXRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICBudWxsVHJhbnNsYXRpb25zLmxhbmd1YWdlQ29kZSA9IENsb3VkVHJhbnNsYXRpb24uY3VycmVudExhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgICAgICBudWxsVHJhbnNsYXRpb25zLnRyYW5zbGF0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2xhdGlvbnNMaXN0LnB1c2gobnVsbFRyYW5zbGF0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoUmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGRhdGEpXHJcbiAgICAgICAgICAgIHRoaXMuYWRkVHJhbnNsYXRpb25WYWx1ZShDbG91ZFRyYW5zbGF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlLCB2YWx1ZVsnbyddLCB2YWx1ZVsndCddKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VHJhbnNsYXRpb25zKENsb3VkVHJhbnNsYXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBnZXRUcmFuc2xhdGlvbih0ZXh0OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZSA9PT0gdGhpcy5kZWZhdWx0TGFuZ3VhZ2UuY29kZSlcclxuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XHJcblxyXG4gICAgICAgIHZhciB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25WYWx1ZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0aW9ucygpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0cyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXN1bHRzLnRyYW5zbGF0aW9uLmZvckVhY2goKHQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0LmRlZmF1bHQudHJpbSgpID09PSB0ZXh0LnRyaW0oKSlcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uID0gdDtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRpb24gPT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0cmFuc2xhdGlvbi50ZXh0LnJlcGxhY2UodGV4dC50cmltKCksIHRyYW5zbGF0aW9uLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIHRyYW5zbGF0ZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzW10+IHtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICBpZiAoQ2xvdWRUcmFuc2xhdGlvbi5kaXJlY3Rpb24gPT09IExhbmd1YWdlRGlyZWN0aW9uLnJ0bCkge1xyXG4gICAgICAgICAgICBsZXQgc3R5bGUgPSBlbGVtZW50LnN0eWxlLmNzc1RleHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3R5bGUgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZGF0YSgnX2N0b3JpZ2luYWxzdHlsZScsIHN0eWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcnRsU3R5bGUgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuc3R5bGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlOYW1lID0gZWxlbWVudC5zdHlsZVtpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKENsb3VkVHJhbnNsYXRpb24uc3R5bGVQcm9wZXJ0aWVzVG9PcHBvc2l0ZS5pbmRleE9mKHByb3BlcnR5TmFtZSkgIT09IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydGxTdHlsZSArPSBDbG91ZFRyYW5zbGF0aW9uLm9wcG9zaXRlUlRMQ1NTVmFsdWVzKGVsZW1lbnQsIHByb3BlcnR5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoQ2xvdWRUcmFuc2xhdGlvbi5zdHlsZVByb3BlcnRpZXNUb1N3aXRjaC5pbmRleE9mKHByb3BlcnR5TmFtZSkgIT09IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydGxTdHlsZSArPSBDbG91ZFRyYW5zbGF0aW9uLnN3aXRjaFJUTENTU1ZhbHVlcyhlbGVtZW50LCBwcm9wZXJ0eU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcnRsU3R5bGUgKz0gcHJvcGVydHlOYW1lICsgJzogJyArIGVsZW1lbnQuc3R5bGVbcHJvcGVydHlOYW1lXSArICc7ICc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJ0bFN0eWxlICE9PSBzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZGF0YSgnX2N0b3JpZ2luYWxzdHlsZScsIHN0eWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBydGxTdHlsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgb3JpZ2luYWxTdHlsZSA9ICQoZWxlbWVudCkuZGF0YSgnX2N0b3JpZ2luYWxzdHlsZScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG9yaWdpbmFsU3R5bGUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmF0dHIoJ3N0eWxlJywgb3JpZ2luYWxTdHlsZSk7XHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZURhdGEoJ19jdG9yaWdpbmFsc3R5bGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWdub3JlIGF0dHJpYnV0ZTogdHJhbnNsYXRlPVwibm9cIlxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZG9UcmFuc2xhdGVFbGVtZW50KGVsZW1lbnQpKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcblxyXG4gICAgICAgIC8vIElnbm9yZSBsaW5rcyB3aXRoIG1haWx0bzogYW5kIHRlbDpcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ0EnKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZWxlbWVudEhyZWYgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudEhyZWYuaW5kZXhPZignOicpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudEhyZWYgPSBlbGVtZW50SHJlZi5zcGxpdCgnOicpWzBdLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRIcmVmID09PSAnbWFpbHRvJyB8fCBlbGVtZW50SHJlZiA9PT0gJ3RlbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlyJywgJ2x0cicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFByb2NlZWQgd2l0aCB0aGUgdHJhbnNsYXRpb25cclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9uU3RhdHVzZXM6IFRyYW5zbGF0aW9uU3RhdHVzW10gPSBbXTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGF3YWl0IENsb3VkVHJhbnNsYXRpb24udHJhbnNsYXRlRWxlbWVudFRleHQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uU3RhdHVzZXMucHVzaChzdGF0dXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gYXdhaXQgQ2xvdWRUcmFuc2xhdGlvbi50cmFuc2xhdGVFbGVtZW50VGl0bGUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uU3RhdHVzZXMucHVzaChzdGF0dXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXNlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBvbmx5VW5pcXVlKHZhbHVlLCBpbmRleCwgc2VsZikge1xyXG4gICAgICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGVFbGVtZW50VGV4dChlbGVtZW50OiBIVE1MRWxlbWVudCk6IFByb21pc2U8VHJhbnNsYXRpb25TdGF0dXM+IHtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09ICdzY3JpcHQnKVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25TdGF0dXMoZWxlbWVudCwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuaWdub3JlZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGNoaWxkTm9kZSA9IGVsZW1lbnQuY2hpbGROb2Rlc1swXTtcclxuXHJcbiAgICAgICAgaWYgKGNoaWxkTm9kZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0Lmlnbm9yZWQpO1xyXG5cclxuICAgICAgICBpZiAoY2hpbGROb2RlLm5vZGVWYWx1ZSA9PT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5pZ25vcmVkKTtcclxuXHJcbiAgICAgICAgaWYgKGNoaWxkTm9kZS5ub2RlVmFsdWUudHJpbSgpID09PSAnJylcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5pZ25vcmVkKTtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9uU3RhdHVzID0gYXdhaXQgQ2xvdWRUcmFuc2xhdGlvbi50cmFuc2xhdGUoZWxlbWVudCwgJ19jdG9yaWdpbmFsdGV4dCcsIGNoaWxkTm9kZS5ub2RlVmFsdWUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRyYW5zbGF0aW9uU3RhdHVzLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5zdWNjZWVkZWQ6XHJcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGUubm9kZVZhbHVlID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlLm5vZGVWYWx1ZSA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1cy5hdHRyaWJ1dGUgPSAndGV4dCc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXM7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGVFbGVtZW50VGl0bGUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzPiB7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblN0YXR1cyA9IGF3YWl0IENsb3VkVHJhbnNsYXRpb24udHJhbnNsYXRlKGVsZW1lbnQsICdfY3RvcmlnaW5hbHRpdGxlJywgZWxlbWVudC50aXRsZSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHJhbnNsYXRpb25TdGF0dXMucmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LnN1Y2NlZWRlZDpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQudGl0bGUgPSB0cmFuc2xhdGlvblN0YXR1cy50ZXh0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5mYWlsZWQ6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRpdGxlID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uU3RhdHVzLmF0dHJpYnV0ZSA9ICd0aXRsZSc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXM7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGUoZWxlbWVudDogSFRNTEVsZW1lbnQsIGRhdGFWYWx1ZU5hbWU6IHN0cmluZywgY3VycmVudFZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzPiB7XHJcblxyXG4gICAgICAgIGxldCBvcmlnaW5hbFRleHQ6IHN0cmluZztcclxuXHJcbiAgICAgICAgaWYgKCQoZWxlbWVudCkuZGF0YShkYXRhVmFsdWVOYW1lKSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBvcmlnaW5hbFRleHQgPSAkKGVsZW1lbnQpLmRhdGEoZGF0YVZhbHVlTmFtZSk7XHJcblxyXG4gICAgICAgIGlmICgob3JpZ2luYWxUZXh0ID09PSB1bmRlZmluZWQgfHwgb3JpZ2luYWxUZXh0LnRyaW0oKSA9PT0gJycpICYmIChjdXJyZW50VmFsdWUgPT09IG51bGwgfHwgY3VycmVudFZhbHVlLnRyaW0oKSA9PT0gJycpKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0Lmlnbm9yZWQpO1xyXG5cclxuICAgICAgICBpZiAob3JpZ2luYWxUZXh0ID09PSB1bmRlZmluZWQgfHwgb3JpZ2luYWxUZXh0LnRyaW0oKSA9PT0gJycpXHJcbiAgICAgICAgICAgIG9yaWdpbmFsVGV4dCA9IGN1cnJlbnRWYWx1ZTtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0ZWRUZXh0ID0gYXdhaXQgQ2xvdWRUcmFuc2xhdGlvbi5nZXRUcmFuc2xhdGlvbihvcmlnaW5hbFRleHQpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRlZFRleHQgPT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmVEYXRhKGRhdGFWYWx1ZU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5mYWlsZWQsIG9yaWdpbmFsVGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRlZFRleHQgIT09IG9yaWdpbmFsVGV4dClcclxuICAgICAgICAgICAgJChlbGVtZW50KS5kYXRhKGRhdGFWYWx1ZU5hbWUsIG9yaWdpbmFsVGV4dCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZURhdGEoZGF0YVZhbHVlTmFtZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25TdGF0dXMoZWxlbWVudCwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuc3VjY2VlZGVkLCB0cmFuc2xhdGVkVGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYWRkUlRMQ1NTKCk6IHZvaWQge1xyXG4gICAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICAgICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcbiAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gQ2xvdWRUcmFuc2xhdGlvbi5nZW5lcmF0ZVJUTENTUygpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdlbmVyYXRlUlRMQ1NTKCk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGxldCBzdHlsZSA9ICdodG1sW2Rpcj1cInJ0bFwiXSB7ZGlyZWN0aW9uOiBydGw7fSc7XHJcblxyXG4gICAgICAgICQuZWFjaChkb2N1bWVudC5zdHlsZVNoZWV0cywgZnVuY3Rpb24gKGluZGV4LCBzaGVldCkge1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHN0eWxlICs9IENsb3VkVHJhbnNsYXRpb24uZ2V0UnVsZXNTdHlsZShzaGVldFsnY3NzUnVsZXMnXSB8fCBzaGVldFsncnVsZXMnXSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0UnVsZXNTdHlsZShydWxlcyk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcclxuXHJcbiAgICAgICAgJC5lYWNoKHJ1bGVzLCBmdW5jdGlvbiAoaW5kZXgsIHJ1bGUpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChydWxlLnR5cGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBtZWRpYVN0eWxlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVkaWFTdHlsZSA9IENsb3VkVHJhbnNsYXRpb24uZ2V0UnVsZXNTdHlsZShydWxlWydjc3NSdWxlcyddIHx8IHJ1bGVbJ3J1bGVzJ10pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWVkaWFTdHlsZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ0BtZWRpYSAnICsgcnVsZS5jb25kaXRpb25UZXh0ICsgJ3snO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBtZWRpYVN0eWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnfSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChydWxlLnN0eWxlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgc2VsZWN0b3JTdHlsZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgQ2xvdWRUcmFuc2xhdGlvbi5zdHlsZVByb3BlcnRpZXNUb09wcG9zaXRlLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvclN0eWxlICs9IENsb3VkVHJhbnNsYXRpb24ub3Bwb3NpdGVSVExDU1NWYWx1ZXMocnVsZSwgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIENsb3VkVHJhbnNsYXRpb24uc3R5bGVQcm9wZXJ0aWVzVG9Td2l0Y2guZm9yRWFjaCgocHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yU3R5bGUgKz0gQ2xvdWRUcmFuc2xhdGlvbi5zd2l0Y2hSVExDU1NWYWx1ZXMocnVsZSwgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEluc2VydCBDbGFzc1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdG9yU3R5bGUgIT09ICcnKVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdodG1sW2Rpcj1ydGxdICcgKyBydWxlLnNlbGVjdG9yVGV4dCArICd7JyArIHNlbGVjdG9yU3R5bGUgKyAnfSc7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHN3aXRjaFJUTENTU1ZhbHVlcyhydWxlLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBuYW1lID0gbmFtZS5zcGxpdCgnLScpWzBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGxlZnRQcm9wZXJ0eSA9IG5hbWUgKyAnLWxlZnQnO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0UHJvcGVydHkgPSBuYW1lICsgJy1yaWdodCc7XHJcbiAgICAgICAgbGV0IGxlZnRWYWx1ZSA9IHJ1bGUuc3R5bGVbbGVmdFByb3BlcnR5XTtcclxuICAgICAgICBsZXQgcmlnaHRWYWx1ZSA9IHJ1bGUuc3R5bGVbcmlnaHRQcm9wZXJ0eV07XHJcblxyXG4gICAgICAgIGlmIChsZWZ0VmFsdWUgPT09ICcnICYmIHJpZ2h0VmFsdWUgPT09ICcnKVxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgIGlmIChsZWZ0VmFsdWUgPT09IHJpZ2h0VmFsdWUpXHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuXHJcbiAgICAgICAgaWYgKGxlZnRWYWx1ZSA9PT0gJycpXHJcbiAgICAgICAgICAgIGxlZnRWYWx1ZSA9ICdpbml0aWFsJztcclxuXHJcbiAgICAgICAgaWYgKHJpZ2h0VmFsdWUgPT09ICcnKVxyXG4gICAgICAgICAgICByaWdodFZhbHVlID0gJ2luaXRpYWwnO1xyXG5cclxuICAgICAgICBsZXQgc3R5bGUgPSBsZWZ0UHJvcGVydHkgKyAnOiAnICsgcmlnaHRWYWx1ZSArICc7JyArIHJpZ2h0UHJvcGVydHkgKyAnOiAnICsgbGVmdFZhbHVlICsgJzsnO1xyXG5cclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb3Bwb3NpdGVSVExDU1NWYWx1ZXMocnVsZSwgbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgbGV0IHZhbHVlOiBzdHJpbmcgPSBydWxlLnN0eWxlW25hbWVdO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09ICcnKVxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgIGxldCBzdHlsZSA9ICcnO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09ICdsZWZ0JylcclxuICAgICAgICAgICAgc3R5bGUgKz0gbmFtZSArICc6IHJpZ2h0OydcclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PT0gJ3JpZ2h0JylcclxuICAgICAgICAgICAgc3R5bGUgKz0gbmFtZSArICc6IGxlZnQ7J1xyXG4gICAgICAgIGVsc2UgaWYgKENsb3VkVHJhbnNsYXRpb24uY2FuQmVOZWdhdGl2ZSh2YWx1ZSkpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKCctJykgPT09IDApXHJcbiAgICAgICAgICAgICAgICBzdHlsZSArPSBuYW1lICsgJzogJyArIHZhbHVlLnN1YnN0cigxKSArICc7J1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzdHlsZSArPSBuYW1lICsgJzogLScgKyB2YWx1ZSArICc7J1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGNhbkJlTmVnYXRpdmUodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCB1bml0ZXM6IHN0cmluZ1tdID0gWydweCcsICdwdCcsICdwYycsICdjbScsICdtbScsICdpbicsICdlbScsICdyZW0nLCAndncnLCAndmgnLCAnZXgnLCAnY2gnLCAndm1pbicsICd2bWF4JywgJyUnXTtcclxuXHJcbiAgICAgICAgbGV0IGlzVHJ1ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB1bml0ZXMuZm9yRWFjaCgodW5pdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuaW5kZXhPZih1bml0KSA+IDAgJiYgdmFsdWUuaW5kZXhPZignICcpID09PSAtMSlcclxuICAgICAgICAgICAgICAgIGlzVHJ1ZSA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpc1RydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgYXp1cmVBdXRvVHJhbnNsYXRlKHRleHRzOiBzdHJpbmdbXSk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuXHJcbiAgICAgICAgaWYgKHRleHRzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICBsZXQgYm9keURhdGEgPSAnJztcclxuXHJcbiAgICAgICAgdGV4dHMuZm9yRWFjaCgodGV4dCkgPT4geyBib2R5RGF0YSArPSAne1wiVGV4dFwiOiBcIicgKyB0ZXh0ICsgJ1wifSwnIH0pO1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRlZFRleHRzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS5jb2duaXRpdmUubWljcm9zb2Z0dHJhbnNsYXRvci5jb20vdHJhbnNsYXRlP2FwaS12ZXJzaW9uPTMuMCZmcm9tPScgKyB0aGlzLmRlZmF1bHRMYW5ndWFnZS5jb2RlICsgJyZ0bz0nICsgdGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6ICdbJyArIGJvZHlEYXRhICsgJ10nLFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcblxyXG4gICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogKHhock9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHhock9iai5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB4aHJPYmouc2V0UmVxdWVzdEhlYWRlcihcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIiwgdGhpcy50cmFuc2xhdG9yUHJvdmlkZXJLZXkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGpzb25UcmFuc2xhdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICQuZWFjaChkYXRhLCAoaW5kZXgsIHRyYW5zbGF0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlZFRleHRzW2luZGV4XSA9IHRyYW5zbGF0aW9ucy50cmFuc2xhdGlvbnNbMF0udGV4dDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2dUcmFuc2xhdGlvbnNGcm9tUHJvdmlkZXIpXHJcbiAgICAgICAgICAgICAgICAgICAganNvblRyYW5zbGF0aW9ucy5wdXNoKCd7XCJvXCI6IFwiJyArIHRleHRzW2luZGV4XS50cmltKCkgKyAnXCIsIFwidFwiOiBcIicgKyB0cmFuc2xhdGVkVGV4dHNbaW5kZXhdLnRyaW0oKSArICdcIn0nKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubG9nVHJhbnNsYXRpb25zRnJvbVByb3ZpZGVyKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1snICsganNvblRyYW5zbGF0aW9ucy5qb2luKCcsJykgKyAnXScpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUucmVzcG9uc2VKU09OLmVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhib2R5RGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJhbnNsYXRlZFRleHRzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHNjcm9sbFRvVG9wKHNjcm9sbER1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG8gPSAwO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gRGVjbGFyYXRpb25zXHJcbiAgICBcclxuICAgICAgICBsZXQgY29zUGFyYW1ldGVyID0gKHdpbmRvdy5wYWdlWU9mZnNldCAtIHNjcm9sbFRvKSAvIDIsXHJcbiAgICAgICAgICAgIHNjcm9sbENvdW50ID0gMCxcclxuICAgICAgICAgICAgb2xkVGltZXN0YW1wID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChuZXdUaW1lc3RhbXA6IG51bWJlcik6IHZvaWQge1xyXG4gICAgXHJcbiAgICAgICAgICAgIGxldCB0c0RpZmYgPSBuZXdUaW1lc3RhbXAgLSBvbGRUaW1lc3RhbXA7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gUGVyZm9ybWFuY2Uubm93KCkgcG9seWZpbGwgbG9hZHMgbGF0ZSBzbyBwYXNzZWQtaW4gdGltZXN0YW1wIGlzIGEgbGFyZ2VyIG9mZnNldFxyXG4gICAgICAgICAgICAvLyBvbiB0aGUgZmlyc3QgZ28tdGhyb3VnaCB0aGFuIHdlIHdhbnQgc28gSSdtIGFkanVzdGluZyB0aGUgZGlmZmVyZW5jZSBkb3duIGhlcmUuXHJcbiAgICAgICAgICAgIC8vIFJlZ2FyZGxlc3MsIHdlIHdvdWxkIHJhdGhlciBoYXZlIGEgc2xpZ2h0bHkgc2xvd2VyIGFuaW1hdGlvbiB0aGFuIGEgYmlnIGp1bXAgc28gYSBnb29kXHJcbiAgICAgICAgICAgIC8vIHNhZmVndWFyZCwgZXZlbiBpZiB3ZSdyZSBub3QgdXNpbmcgdGhlIHBvbHlmaWxsLlxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmICh0c0RpZmYgPiAxMDApXHJcbiAgICAgICAgICAgICAgICB0c0RpZmYgPSAzMDtcclxuICAgIFxyXG4gICAgICAgICAgICBzY3JvbGxDb3VudCArPSBNYXRoLlBJIC8gKHNjcm9sbER1cmF0aW9uIC8gdHNEaWZmKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBBcyBzb29uIGFzIHdlIGNyb3NzIG92ZXIgUGksIHdlJ3JlIGFib3V0IHdoZXJlIHdlIG5lZWQgdG8gYmVcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsQ291bnQgPj0gTWF0aC5QSSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCBtb3ZlU3RlcCA9IE1hdGgucm91bmQoc2Nyb2xsVG8gKyBjb3NQYXJhbWV0ZXIgKyBjb3NQYXJhbWV0ZXIgKiBNYXRoLmNvcyhzY3JvbGxDb3VudCkpO1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgbW92ZVN0ZXApO1xyXG4gICAgICAgICAgICBvbGRUaW1lc3RhbXAgPSBuZXdUaW1lc3RhbXA7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgTWV0aG9kc1xyXG5cclxuICAgIHN0YXRpYyB1cGRhdGVDdXJyZW50TGFuZ3VhZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGxvY2FsU3RvcmFnZUxhbmd1YWdlOiBMYW5ndWFnZTtcclxuICAgICAgICBsZXQgdXJsTGFuZ3VhZ2U6IExhbmd1YWdlO1xyXG4gICAgICAgIGxldCBicm93c2VyTGFuZ3VhZ2U6IExhbmd1YWdlO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8vIExvY2FsIFN0b3JhZ2VcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZycpO1xyXG4gICAgICAgIH0gY2F0Y2h7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2NhbFN0b3JhZ2UgaXMgbm90IHN1cHBvcnRlZC4nKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IG51bGwpXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZUxhbmd1YWdlID0gdGhpcy5wYXJzZUxhbmd1YWdlKHJlc3VsdCk7XHJcblxyXG4gICAgICAgIC8vIFVSTFxyXG5cclxuICAgICAgICBpZiAodGhpcy51cmxMYW5ndWFnZUxvY2F0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB1cmxWYWx1ZTogc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudXJsTGFuZ3VhZ2VMb2NhdGlvbiA9PT0gVXJsTGFuZ3VhZ2VMb2NhdGlvbi5zdWJkaXJlY3RvcnkpXHJcbiAgICAgICAgICAgICAgICB1cmxWYWx1ZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpWzFdO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVybFZhbHVlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBpZiAodXJsVmFsdWUubGVuZ3RoID09PSAyIHx8ICh1cmxWYWx1ZS5sZW5ndGggPT09IDUgJiYgdXJsVmFsdWUuaW5kZXhPZignLScpID09PSAyKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpID09PSB1cmxWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybFZhbHVlLmluZGV4T2YoJy0nKSAhPT0gLTEgJiYgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybFZhbHVlID0gdXJsVmFsdWUuc3BsaXQoJy0nKVswXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpID09PSB1cmxWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxMYW5ndWFnZSA9IHRoaXMucGFyc2VMYW5ndWFnZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQnJvd3NlclxyXG5cclxuICAgICAgICByZXN1bHQgPSBuYXZpZ2F0b3JbJ2xhbmd1YWdlJ10gfHwgbmF2aWdhdG9yWyd1c2VyTGFuZ3VhZ2UnXTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBicm93c2VyTGFuZ3VhZ2UgPSB0aGlzLnBhcnNlTGFuZ3VhZ2UocmVzdWx0KTtcclxuXHJcbiAgICAgICAgLy8gQ29uc29saWRhdGlvblxyXG5cclxuICAgICAgICBpZiAodXJsTGFuZ3VhZ2UgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50TGFuZ3VhZ2UodXJsTGFuZ3VhZ2UuY29kZSk7XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGxvY2FsU3RvcmFnZUxhbmd1YWdlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudExhbmd1YWdlKGxvY2FsU3RvcmFnZUxhbmd1YWdlLmNvZGUpO1xyXG5cclxuICAgICAgICBlbHNlIGlmIChicm93c2VyTGFuZ3VhZ2UgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50TGFuZ3VhZ2UoYnJvd3Nlckxhbmd1YWdlLmNvZGUpO1xyXG5cclxuICAgICAgICBlbHNlIHRoaXMuc2V0Q3VycmVudExhbmd1YWdlKHRoaXMuZGVmYXVsdExhbmd1YWdlLmNvZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgY3VycmVudExhbmd1YWdlKCk6IExhbmd1YWdlIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRMYW5ndWFnZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudExhbmd1YWdlO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRMYW5ndWFnZSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50TGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdXBkYXRlVXJsTGFuZ3VhZ2UoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnVybExhbmd1YWdlTG9jYXRpb24gPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy51cmxMYW5ndWFnZUxvY2F0aW9uID09PSBVcmxMYW5ndWFnZUxvY2F0aW9uLnN1YmRpcmVjdG9yeSkge1xyXG4gICAgICAgICAgICBsZXQgcGF0aG5hbWVTcGxpdHRlZCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRMYW5ndWFnZUNvZGUgPSBwYXRobmFtZVNwbGl0dGVkWzFdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRMYW5ndWFnZUNvZGUubGVuZ3RoID09PSAyIHx8IChjdXJyZW50TGFuZ3VhZ2VDb2RlLmxlbmd0aCA9PT0gNSAmJiBjdXJyZW50TGFuZ3VhZ2VDb2RlLmluZGV4T2YoJy0nKSA9PT0gMikpXHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZVNwbGl0dGVkWzFdID0gdGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZTtcclxuICAgICAgICAgICAgZWxzZSBwYXRobmFtZVNwbGl0dGVkLnNwbGljZSgxLCAwLCB0aGlzLmN1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuXHJcbiAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIG51bGwsIHBhdGhuYW1lU3BsaXR0ZWQuam9pbignLycpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldEN1cnJlbnRMYW5ndWFnZShsYW5ndWFnZUNvZGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRMYW5ndWFnZSA9IHRoaXMucGFyc2VMYW5ndWFnZShsYW5ndWFnZUNvZGUpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZycsIHRoaXMuX2N1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuICAgICAgICB9IGNhdGNoe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jYWxTdG9yYWdlIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlVXJsTGFuZ3VhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlRE9NKCk6IFByb21pc2U8dm9pZD4ge1xyXG5cclxuICAgICAgICAkKCdodG1sJykuYXR0cignbGFuZycsIENsb3VkVHJhbnNsYXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUpO1xyXG5cclxuICAgICAgICBpZiAoQ2xvdWRUcmFuc2xhdGlvbi5kaXJlY3Rpb24gPT09IExhbmd1YWdlRGlyZWN0aW9uLnJ0bClcclxuICAgICAgICAgICAgJCgnaHRtbCcpLmF0dHIoJ2RpcicsICdydGwnKTtcclxuICAgICAgICBlbHNlICQoJ2h0bWwnKS5yZW1vdmVBdHRyKCdkaXInKTtcclxuXHJcbiAgICAgICAgbGV0IHN0eWxlU2hlZXQ6IFN0eWxlU2hlZXQ7XHJcblxyXG4gICAgICAgICQuZWFjaChkb2N1bWVudC5zdHlsZVNoZWV0cywgZnVuY3Rpb24gKGluZGV4LCBzaGVldCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgJC5lYWNoKHNoZWV0Wydjc3NSdWxlcyddIHx8IHNoZWV0WydydWxlcyddLCBmdW5jdGlvbiAocnVsZUluZGV4LCBydWxlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChydWxlLmNzc1RleHQgPT09ICdodG1sW2Rpcj1cInJ0bFwiXSB7IGRpcmVjdGlvbjogcnRsOyB9JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldCA9IHNoZWV0O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoQ2xvdWRUcmFuc2xhdGlvbi5kaXJlY3Rpb24gPT09IExhbmd1YWdlRGlyZWN0aW9uLnJ0bCAmJiBzdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIENsb3VkVHJhbnNsYXRpb24uYWRkUlRMQ1NTKCk7XHJcblxyXG4gICAgICAgIHZhciBzZWxlY3Rpb24gPSAnKic7XHJcbiAgICAgICAgQ2xvdWRUcmFuc2xhdGlvbi5ub25UcmFuc2xhdGVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxlY3Rpb24gKz0gJzpub3QoJyArICdcIicgKyBlbGVtZW50ICsgJ1wiJyArICcpJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25TdGF0dXNlczogVHJhbnNsYXRpb25TdGF0dXNbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGUgb2YgJChzZWxlY3Rpb24pLnRvQXJyYXkoKSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0ZUVsZW1lbnQoZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0cy5mb3JFYWNoKChzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1c2VzLnB1c2goc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZSAhPT0gdGhpcy5kZWZhdWx0TGFuZ3VhZ2UuY29kZSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IG9yaWdpbmFsVGV4dHM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1c2VzLmZvckVhY2goKHN0YXR1cykgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMucmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LmZhaWxlZDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFRleHRzLnB1c2goc3RhdHVzLnRleHQucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgb3JpZ2luYWxUZXh0cyA9IG9yaWdpbmFsVGV4dHMuZmlsdGVyKHRoaXMub25seVVuaXF1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2xhdG9yUHJvdmlkZXIgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYW5zbGF0ZWRUZXh0cyA9IGF3YWl0IHRoaXMuYXp1cmVBdXRvVHJhbnNsYXRlKG9yaWdpbmFsVGV4dHMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhbnNsYXRpb25zID0gdGhpcy5nZXRUcmFuc2xhdGlvbnMoQ2xvdWRUcmFuc2xhdGlvbi5jdXJyZW50TGFuZ3VhZ2UuY29kZSkudHJhbnNsYXRpb247XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGlvbnMgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VHJhbnNsYXRpb25zKENsb3VkVHJhbnNsYXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUpLnRyYW5zbGF0aW9uID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaCh0cmFuc2xhdGVkVGV4dHMsIChpbmRleCwgdGV4dCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsb3VkVHJhbnNsYXRpb24uYWRkVHJhbnNsYXRpb25WYWx1ZShDbG91ZFRyYW5zbGF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlLCBvcmlnaW5hbFRleHRzW2luZGV4XSwgdGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyBjb25zb2xlLmxvZyhlKTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN0YXR1cyBvZiB0cmFuc2xhdGlvblN0YXR1c2VzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMucmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5hdHRyaWJ1dGUgPT09ICd0aXRsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRUaXRsZShzdGF0dXMuZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IENsb3VkVHJhbnNsYXRpb24udHJhbnNsYXRlRWxlbWVudFRleHQoc3RhdHVzLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb1RvcCgyMDApO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRMYW5ndWFnZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmlsbEluTGFuZ3VhZ2VzKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgc2VsZWN0aW9uID0gJCgnLmNsb3VkdHJhbnNsYXRpb24tc2VsZWN0aW9uJyk7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHNlbGVjdGlvbi5hdHRyKCd0cmFuc2xhdGUnLCAnbm8nKTtcclxuXHJcbiAgICAgICAgc2VsZWN0aW9uLmh0bWwoJycpO1xyXG5cclxuICAgICAgICBsZXQgY3VycmVudExhbmd1YWdlOiBzdHJpbmcgPSB0aGlzLmN1cnJlbnRMYW5ndWFnZS5jb2RlO1xyXG5cclxuICAgICAgICBDbG91ZFRyYW5zbGF0aW9uLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAkKCcuY2xvdWR0cmFuc2xhdGlvbi1zZWxlY3Rpb24nKS5hcHBlbmQoJzxvcHRpb24gdmFsdWU9XCInICsgbGFuZ3VhZ2UuY29kZSArICdcIicgKyAobGFuZ3VhZ2UuY29kZSA9PT0gY3VycmVudExhbmd1YWdlID8gJyBzZWxlY3RlZCAnIDogJycpICsgJz4nICsgbGFuZ3VhZ2UuZGlzcGxheU5hbWUgKyAnPC9vcHRpb24+JylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==

