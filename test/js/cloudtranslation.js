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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJJbnRlcmZhY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRvclByb3ZpZGVyLCBVcmxMYW5ndWFnZUxvY2F0aW9uIH0gZnJvbSBcIi4vZW51bXNcIjtcclxuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkVHJhbnNsYXRpb25TZXR0aW5ncyB7XHJcbiAgICBkZWZhdWx0TGFuZ3VhZ2U/OiBzdHJpbmc7XHJcbiAgICBsb2dUcmFuc2xhdGlvbnNGcm9tUHJvdmlkZXI/OiBib29sZWFuO1xyXG4gICAgdHJhbnNsYXRvclByb3ZpZGVyPzogVHJhbnNsYXRvclByb3ZpZGVyOyBcclxuICAgIHRyYW5zbGF0b3JQcm92aWRlcktleT86IHN0cmluZztcclxuICAgIHVybExhbmd1YWdlTG9jYXRpb24/OiBVcmxMYW5ndWFnZUxvY2F0aW9uO1xyXG5cclxuICAgIGxhbmd1YWdlczogTGFuZ3VhZ2VbXTtcclxufVxyXG4iXX0=

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
                        if (!fetchResponse.ok) {
                            nullTranslations = new Translations();
                            nullTranslations.languageCode = CloudTranslation.currentLanguage.code;
                            nullTranslations.translation = null;
                            this._translationsList.push(nullTranslations);
                            return [2, undefined];
                        }
                        return [4, fetchResponse.json()];
                    case 2:
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
                        if (!(this.translatorProvider === 1 && CloudTranslation.getTranslations(CloudTranslation.currentLanguage.code).translation === null)) return [3, 10];
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRW5CLElBQUksZUFBZSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1FBRXhELGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO1lBQ3hDLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFBO1FBQ3pMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0E1MUJBLEFBNDFCQyxJQUFBO0FBRUQsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsNkJBQTZCLEVBQUU7Ozs7OztvQkFFaEQsWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFFNUMsSUFBSSxZQUFZLEtBQUssRUFBRTt3QkFDbkIsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBRXRELFdBQU0sZ0JBQWdCLENBQUMsWUFBWSxFQUFFLEVBQUE7O29CQUFyQyxTQUFxQyxDQUFDOzs7OztDQUN6QyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsb3VkVHJhbnNsYXRpb25TZXR0aW5ncyB9IGZyb20gXCIuL0ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRvclByb3ZpZGVyLCBVcmxMYW5ndWFnZUxvY2F0aW9uLCBMYW5ndWFnZURpcmVjdGlvbiwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQgfSBmcm9tIFwiLi9lbnVtc1wiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGlvbnMsIExhbmd1YWdlLCBUcmFuc2xhdGlvblZhbHVlLCBUcmFuc2xhdGlvblN0YXR1cyB9IGZyb20gXCIuL2NsYXNzZXNcIjtcclxuXHJcbmNvbnN0IGNsb3VkVHJhbnNsYXRpb24gPSAoc2V0dGluZ3M/OiBDbG91ZFRyYW5zbGF0aW9uU2V0dGluZ3MpID0+IG5ldyBDbG91ZFRyYW5zbGF0aW9uKHNldHRpbmdzKTtcclxuZXhwb3J0IGRlZmF1bHQgY2xvdWRUcmFuc2xhdGlvbjtcclxuXHJcbmNsYXNzIENsb3VkVHJhbnNsYXRpb257XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBDbG91ZFRyYW5zbGF0aW9uU2V0dGluZ3Mpe1xyXG4gICAgICAgIFxyXG4gICAgQ2xvdWRUcmFuc2xhdGlvbi5fc2V0dGluZ3MgPSB0aGlzLm1lcmdlU2V0dGluZ3Moc2V0dGluZ3MpO1xyXG5cclxuICAgICAgICBDbG91ZFRyYW5zbGF0aW9uLnVwZGF0ZUN1cnJlbnRMYW5ndWFnZSgpO1xyXG4gICAgICAgIENsb3VkVHJhbnNsYXRpb24uZmlsbEluTGFuZ3VhZ2VzKCk7XHJcbiAgICAgICAgQ2xvdWRUcmFuc2xhdGlvbi50cmFuc2xhdGVET00oKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBtZXJnZVNldHRpbmdzKF9zZXR0aW5nczogQ2xvdWRUcmFuc2xhdGlvblNldHRpbmdzKTogQ2xvdWRUcmFuc2xhdGlvblNldHRpbmdzIHtcclxuICAgICAgICBjb25zdCBzZXR0aW5ncyA6IENsb3VkVHJhbnNsYXRpb25TZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgZGVmYXVsdExhbmd1YWdlOiAnZW4nLFxyXG4gICAgICAgICAgICBsb2dUcmFuc2xhdGlvbnNGcm9tUHJvdmlkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICB0cmFuc2xhdG9yUHJvdmlkZXI6IFRyYW5zbGF0b3JQcm92aWRlci5ub25lICxcclxuICAgICAgICAgICAgdHJhbnNsYXRvclByb3ZpZGVyS2V5OiAnJyxcclxuICAgICAgICAgICAgdXJsTGFuZ3VhZ2VMb2NhdGlvbjogVXJsTGFuZ3VhZ2VMb2NhdGlvbi5ub25lLFxyXG5cclxuICAgICAgICAgICAgbGFuZ3VhZ2VzOiBbXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgYXR0cm5hbWUgaW4gX3NldHRpbmdzKSBcclxuICAgICAgICBzZXR0aW5nc1thdHRybmFtZV0gPSBfc2V0dGluZ3NbYXR0cm5hbWVdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBzZXR0aW5ncztcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcml2YXRlIFZhcmlhYmxlc1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF90cmFuc2xhdGlvbnNMaXN0OiBUcmFuc2xhdGlvbnNbXTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9kZWZhdWx0TGFuZ3VhZ2U6IExhbmd1YWdlO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2N1cnJlbnRMYW5ndWFnZTogTGFuZ3VhZ2U7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfc3VwcG9ydHNUcmFuc2xhdGVBdHRyaWJ1dGU7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfc2V0dGluZ3MgOiBDbG91ZFRyYW5zbGF0aW9uU2V0dGluZ3M7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHRyYW5zbGF0aW9uc0xpc3QoKTogVHJhbnNsYXRpb25zW10ge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fdHJhbnNsYXRpb25zTGlzdCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLl90cmFuc2xhdGlvbnNMaXN0ID0gW107XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2xhdGlvbnNMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFkZFRyYW5zbGF0aW9uVmFsdWUobGFuZ3VhZ2VDb2RlOiBzdHJpbmcsIGRlZmF1bHRUZXh0OiBzdHJpbmcsIHRyYW5zbGF0ZWRUZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKGxhbmd1YWdlQ29kZSk7XHJcblxyXG4gICAgICAgIGlmICh0cmFuc2xhdGlvbnMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbnMgPSBuZXcgVHJhbnNsYXRpb25zKCk7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9ucy5sYW5ndWFnZUNvZGUgPSBsYW5ndWFnZUNvZGU7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zbGF0aW9uc0xpc3QucHVzaCh0cmFuc2xhdGlvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9uVmFsdWUgPSBuZXcgVHJhbnNsYXRpb25WYWx1ZSgpO1xyXG4gICAgICAgIHRyYW5zbGF0aW9uVmFsdWUuZGVmYXVsdCA9IGRlZmF1bHRUZXh0O1xyXG4gICAgICAgIHRyYW5zbGF0aW9uVmFsdWUudGV4dCA9IHRyYW5zbGF0ZWRUZXh0O1xyXG5cclxuICAgICAgICB0cmFuc2xhdGlvbnMudHJhbnNsYXRpb24ucHVzaCh0cmFuc2xhdGlvblZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldFRyYW5zbGF0aW9ucyhsYW5ndWFnZUNvZGU6IHN0cmluZyk6IFRyYW5zbGF0aW9ucyB7XHJcbiAgICAgICAgbGV0IHQ6IFRyYW5zbGF0aW9ucztcclxuXHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbnNMaXN0LmZvckVhY2goKHRyYW5zbGF0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRyYW5zbGF0aW9ucy5sYW5ndWFnZUNvZGUgPT09IGxhbmd1YWdlQ29kZSlcclxuICAgICAgICAgICAgICAgIHQgPSB0cmFuc2xhdGlvbnM7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByaXZhdGUgUHJvcGVydGllc1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCBub25UcmFuc2xhdGVkRWxlbWVudHMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbJ2NvZGUnLCAnaHRtbCcsICdoZWFkJywgJ2hlYWQgPiAqJ107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHN0eWxlUHJvcGVydGllc1RvU3dpdGNoKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBsZXQgcHJvcGVydGllcyA9IFsncGFkZGluZycsICdtYXJnaW4nXTtcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xyXG5cclxuICAgICAgICBwcm9wZXJ0aWVzLmZvckVhY2goKHByb3BlcnR5KSA9PntcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHByb3BlcnR5ICsgJy1sZWZ0Jyk7XHJcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChwcm9wZXJ0eSArICctcmlnaHQnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHN0eWxlUHJvcGVydGllc1RvT3Bwb3NpdGUoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbJ3RleHQtYWxpZ24nLCAnZmxvYXQnLCAnYmFja2dyb3VuZC1wb3NpdGlvbi14J107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHRyYW5zbGF0b3JQcm92aWRlcktleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy50cmFuc2xhdG9yUHJvdmlkZXJLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHRyYW5zbGF0b3JQcm92aWRlcigpOiBUcmFuc2xhdG9yUHJvdmlkZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy50cmFuc2xhdG9yUHJvdmlkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHVybExhbmd1YWdlTG9jYXRpb24oKTogVXJsTGFuZ3VhZ2VMb2NhdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLnVybExhbmd1YWdlTG9jYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IGxvZ1RyYW5zbGF0aW9uc0Zyb21Qcm92aWRlcigpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmxvZ1RyYW5zbGF0aW9uc0Zyb21Qcm92aWRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgc3VwcG9ydHNUcmFuc2xhdGVBdHRyaWJ1dGUoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3VwcG9ydHNUcmFuc2xhdGVBdHRyaWJ1dGU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZSA9ICQoJ2JvZHknKVswXS50cmFuc2xhdGUgIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBkb1RyYW5zbGF0ZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHNUcmFuc2xhdGVBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudHJhbnNsYXRlID09PSBmYWxzZSB8fCAoJChlbGVtZW50KS5jbG9zZXN0KCcqW3RyYW5zbGF0ZV0nKVswXSAhPT0gdW5kZWZpbmVkICYmICQoZWxlbWVudCkuY2xvc2VzdCgnKlt0cmFuc2xhdGVdJylbMF0udHJhbnNsYXRlID09PSBmYWxzZSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYXR0cmlidXRlID0gJChlbGVtZW50KS5hdHRyKCd0cmFuc2xhdGUnKTtcclxuXHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLmNsb3Nlc3QoJypbdHJhbnNsYXRlXScpWzBdICE9PSB1bmRlZmluZWQgJiYgJChlbGVtZW50KS5jbG9zZXN0KCcqW3RyYW5zbGF0ZV0nKS5hdHRyKCd0cmFuc2xhdGUnKS50b0xvd2VyQ2FzZSgpID09PSAnbm8nKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZS50b0xvd2VyQ2FzZSgpID09PSAnbm8nKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1YmxpYyBQcm9wZXJ0aWVzXHJcblxyXG4gICAgc3RhdGljIGdldCBkZWZhdWx0TGFuZ3VhZ2UoKTogTGFuZ3VhZ2Uge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZGVmYXVsdExhbmd1YWdlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0TGFuZ3VhZ2U7XHJcblxyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsYW5ndWFnZS5jb2RlLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMuX3NldHRpbmdzLmRlZmF1bHRMYW5ndWFnZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmYXVsdExhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0TGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBsYW5ndWFnZXMoKTogTGFuZ3VhZ2VbXSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5sYW5ndWFnZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBNZXRob2RzXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VMYW5ndWFnZShyZXF1ZXN0TGFuZ3VhZ2U6IHN0cmluZyk6IExhbmd1YWdlIHtcclxuXHJcbiAgICAgICAgcmVxdWVzdExhbmd1YWdlID0gcmVxdWVzdExhbmd1YWdlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0OiBMYW5ndWFnZTtcclxuXHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZXMuZm9yRWFjaCgobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gcmVxdWVzdExhbmd1YWdlKVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICAgICAgaWYgKHJlcXVlc3RMYW5ndWFnZS5pbmRleE9mKCctJykgIT09IC0gMSlcclxuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXMuZm9yRWFjaCgobGFuZ3VhZ2UpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpID09PSByZXF1ZXN0TGFuZ3VhZ2Uuc3BsaXQoJy0nKVswXSlcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBsYW5ndWFnZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdExhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCBkaXJlY3Rpb24oKTogTGFuZ3VhZ2VEaXJlY3Rpb24ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TGFuZ3VhZ2UuZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIHRyYW5zbGF0aW9ucygpOiBQcm9taXNlPFRyYW5zbGF0aW9ucz4ge1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25zID0gdGhpcy5nZXRUcmFuc2xhdGlvbnMoQ2xvdWRUcmFuc2xhdGlvbi5jdXJyZW50TGFuZ3VhZ2UuY29kZSk7XHJcblxyXG4gICAgICAgIGlmICh0cmFuc2xhdGlvbnMgIT09IHVuZGVmaW5lZCAmJiB0cmFuc2xhdGlvbnMudHJhbnNsYXRpb24gPT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgZWxzZSBpZiAodHJhbnNsYXRpb25zICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvbnM7XHJcblxyXG4gICAgICAgIGxldCBqc29uUGF0aCA9ICd0cmFuc2xhdGlvbi8nICsgdGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpICsgJy5qc29uJztcclxuXHJcbiAgICAgICAgY29uc3QgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGZldGNoKGpzb25QYXRoKTtcclxuXHJcbiAgICAgICAgaWYgKCFmZXRjaFJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGxldCBudWxsVHJhbnNsYXRpb25zID0gbmV3IFRyYW5zbGF0aW9ucygpO1xyXG4gICAgICAgICAgICBudWxsVHJhbnNsYXRpb25zLmxhbmd1YWdlQ29kZSA9IENsb3VkVHJhbnNsYXRpb24uY3VycmVudExhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgIG51bGxUcmFuc2xhdGlvbnMudHJhbnNsYXRpb24gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fdHJhbnNsYXRpb25zTGlzdC5wdXNoKG51bGxUcmFuc2xhdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBkYXRhKVxyXG4gICAgICAgICAgICB0aGlzLmFkZFRyYW5zbGF0aW9uVmFsdWUoQ2xvdWRUcmFuc2xhdGlvbi5jdXJyZW50TGFuZ3VhZ2UuY29kZSwgdmFsdWVbJ28nXSwgdmFsdWVbJ3QnXSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRyYW5zbGF0aW9ucyhDbG91ZFRyYW5zbGF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgZ2V0VHJhbnNsYXRpb24odGV4dDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGUgPT09IHRoaXMuZGVmYXVsdExhbmd1YWdlLmNvZGUpXHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xyXG5cclxuICAgICAgICB2YXIgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uVmFsdWUgPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgQ2xvdWRUcmFuc2xhdGlvbi50cmFuc2xhdGlvbnMoKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdHMgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgcmVzdWx0cy50cmFuc2xhdGlvbi5mb3JFYWNoKCh0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAodC5kZWZhdWx0LnRyaW0oKSA9PT0gdGV4dC50cmltKCkpXHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbiA9IHQ7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9uID09PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJhbnNsYXRpb24udGV4dC5yZXBsYWNlKHRleHQudHJpbSgpLCB0cmFuc2xhdGlvbi50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGVFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogUHJvbWlzZTxUcmFuc2xhdGlvblN0YXR1c1tdPiB7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgaWYgKENsb3VkVHJhbnNsYXRpb24uZGlyZWN0aW9uID09PSBMYW5ndWFnZURpcmVjdGlvbi5ydGwpIHtcclxuICAgICAgICAgICAgbGV0IHN0eWxlID0gZWxlbWVudC5zdHlsZS5jc3NUZXh0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0eWxlICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmRhdGEoJ19jdG9yaWdpbmFsc3R5bGUnLCBzdHlsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJ0bFN0eWxlID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LnN0eWxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5TmFtZSA9IGVsZW1lbnQuc3R5bGVbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChDbG91ZFRyYW5zbGF0aW9uLnN0eWxlUHJvcGVydGllc1RvT3Bwb3NpdGUuaW5kZXhPZihwcm9wZXJ0eU5hbWUpICE9PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnRsU3R5bGUgKz0gQ2xvdWRUcmFuc2xhdGlvbi5vcHBvc2l0ZVJUTENTU1ZhbHVlcyhlbGVtZW50LCBwcm9wZXJ0eU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKENsb3VkVHJhbnNsYXRpb24uc3R5bGVQcm9wZXJ0aWVzVG9Td2l0Y2guaW5kZXhPZihwcm9wZXJ0eU5hbWUpICE9PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnRsU3R5bGUgKz0gQ2xvdWRUcmFuc2xhdGlvbi5zd2l0Y2hSVExDU1NWYWx1ZXMoZWxlbWVudCwgcHJvcGVydHlOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHJ0bFN0eWxlICs9IHByb3BlcnR5TmFtZSArICc6ICcgKyBlbGVtZW50LnN0eWxlW3Byb3BlcnR5TmFtZV0gKyAnOyAnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChydGxTdHlsZSAhPT0gc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmRhdGEoJ19jdG9yaWdpbmFsc3R5bGUnLCBzdHlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gcnRsU3R5bGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IG9yaWdpbmFsU3R5bGUgPSAkKGVsZW1lbnQpLmRhdGEoJ19jdG9yaWdpbmFsc3R5bGUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFN0eWxlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5hdHRyKCdzdHlsZScsIG9yaWdpbmFsU3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmVEYXRhKCdfY3RvcmlnaW5hbHN0eWxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElnbm9yZSBhdHRyaWJ1dGU6IHRyYW5zbGF0ZT1cIm5vXCJcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmRvVHJhbnNsYXRlRWxlbWVudChlbGVtZW50KSlcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICAvLyBJZ25vcmUgbGlua3Mgd2l0aCBtYWlsdG86IGFuZCB0ZWw6XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdBJykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRIcmVmID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRIcmVmLmluZGV4T2YoJzonKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRIcmVmID0gZWxlbWVudEhyZWYuc3BsaXQoJzonKVswXS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50SHJlZiA9PT0gJ21haWx0bycgfHwgZWxlbWVudEhyZWYgPT09ICd0ZWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RpcicsICdsdHInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQcm9jZWVkIHdpdGggdGhlIHRyYW5zbGF0aW9uXHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblN0YXR1c2VzOiBUcmFuc2xhdGlvblN0YXR1c1tdID0gW107XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBhd2FpdCBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRUZXh0KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1c2VzLnB1c2goc3RhdHVzKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGF3YWl0IENsb3VkVHJhbnNsYXRpb24udHJhbnNsYXRlRWxlbWVudFRpdGxlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1c2VzLnB1c2goc3RhdHVzKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb25seVVuaXF1ZSh2YWx1ZSwgaW5kZXgsIHNlbGYpIHtcclxuICAgICAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlRWxlbWVudFRleHQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzPiB7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAnc2NyaXB0JylcclxuICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0Lmlnbm9yZWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjaGlsZE5vZGUgPSBlbGVtZW50LmNoaWxkTm9kZXNbMF07XHJcblxyXG4gICAgICAgIGlmIChjaGlsZE5vZGUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5pZ25vcmVkKTtcclxuXHJcbiAgICAgICAgaWYgKGNoaWxkTm9kZS5ub2RlVmFsdWUgPT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25TdGF0dXMoZWxlbWVudCwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuaWdub3JlZCk7XHJcblxyXG4gICAgICAgIGlmIChjaGlsZE5vZGUubm9kZVZhbHVlLnRyaW0oKSA9PT0gJycpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25TdGF0dXMoZWxlbWVudCwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuaWdub3JlZCk7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblN0YXR1cyA9IGF3YWl0IENsb3VkVHJhbnNsYXRpb24udHJhbnNsYXRlKGVsZW1lbnQsICdfY3RvcmlnaW5hbHRleHQnLCBjaGlsZE5vZGUubm9kZVZhbHVlKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0cmFuc2xhdGlvblN0YXR1cy5yZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuc3VjY2VlZGVkOlxyXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlLm5vZGVWYWx1ZSA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXM7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LmZhaWxlZDpcclxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZS5ub2RlVmFsdWUgPSB0cmFuc2xhdGlvblN0YXR1cy50ZXh0O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXMuYXR0cmlidXRlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlRWxlbWVudFRpdGxlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogUHJvbWlzZTxUcmFuc2xhdGlvblN0YXR1cz4ge1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25TdGF0dXMgPSBhd2FpdCBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0ZShlbGVtZW50LCAnX2N0b3JpZ2luYWx0aXRsZScsIGVsZW1lbnQudGl0bGUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRyYW5zbGF0aW9uU3RhdHVzLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5zdWNjZWVkZWQ6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRpdGxlID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50aXRsZSA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1cy5hdHRyaWJ1dGUgPSAndGl0bGUnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBkYXRhVmFsdWVOYW1lOiBzdHJpbmcsIGN1cnJlbnRWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTxUcmFuc2xhdGlvblN0YXR1cz4ge1xyXG5cclxuICAgICAgICBsZXQgb3JpZ2luYWxUZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGlmICgkKGVsZW1lbnQpLmRhdGEoZGF0YVZhbHVlTmFtZSkgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgb3JpZ2luYWxUZXh0ID0gJChlbGVtZW50KS5kYXRhKGRhdGFWYWx1ZU5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoKG9yaWdpbmFsVGV4dCA9PT0gdW5kZWZpbmVkIHx8IG9yaWdpbmFsVGV4dC50cmltKCkgPT09ICcnKSAmJiAoY3VycmVudFZhbHVlID09PSBudWxsIHx8IGN1cnJlbnRWYWx1ZS50cmltKCkgPT09ICcnKSlcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5pZ25vcmVkKTtcclxuXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsVGV4dCA9PT0gdW5kZWZpbmVkIHx8IG9yaWdpbmFsVGV4dC50cmltKCkgPT09ICcnKVxyXG4gICAgICAgICAgICBvcmlnaW5hbFRleHQgPSBjdXJyZW50VmFsdWU7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGVkVGV4dCA9IGF3YWl0IENsb3VkVHJhbnNsYXRpb24uZ2V0VHJhbnNsYXRpb24ob3JpZ2luYWxUZXh0KTtcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0ZWRUZXh0ID09PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlRGF0YShkYXRhVmFsdWVOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25TdGF0dXMoZWxlbWVudCwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkLCBvcmlnaW5hbFRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0ZWRUZXh0ICE9PSBvcmlnaW5hbFRleHQpXHJcbiAgICAgICAgICAgICQoZWxlbWVudCkuZGF0YShkYXRhVmFsdWVOYW1lLCBvcmlnaW5hbFRleHQpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmVEYXRhKGRhdGFWYWx1ZU5hbWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LnN1Y2NlZWRlZCwgdHJhbnNsYXRlZFRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFkZFJUTENTUygpOiB2b2lkIHtcclxuICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xyXG4gICAgICAgIHN0eWxlLmlubmVySFRNTCA9IENsb3VkVHJhbnNsYXRpb24uZ2VuZXJhdGVSVExDU1MoKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZW5lcmF0ZVJUTENTUygpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBsZXQgc3R5bGUgPSAnaHRtbFtkaXI9XCJydGxcIl0ge2RpcmVjdGlvbjogcnRsO30nO1xyXG5cclxuICAgICAgICAkLmVhY2goZG9jdW1lbnQuc3R5bGVTaGVldHMsIGZ1bmN0aW9uIChpbmRleCwgc2hlZXQpIHtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZSArPSBDbG91ZFRyYW5zbGF0aW9uLmdldFJ1bGVzU3R5bGUoc2hlZXRbJ2Nzc1J1bGVzJ10gfHwgc2hlZXRbJ3J1bGVzJ10pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldFJ1bGVzU3R5bGUocnVsZXMpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcblxyXG4gICAgICAgICQuZWFjaChydWxlcywgZnVuY3Rpb24gKGluZGV4LCBydWxlKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAocnVsZS50eXBlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVkaWFTdHlsZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lZGlhU3R5bGUgPSBDbG91ZFRyYW5zbGF0aW9uLmdldFJ1bGVzU3R5bGUocnVsZVsnY3NzUnVsZXMnXSB8fCBydWxlWydydWxlcyddKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1lZGlhU3R5bGUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdAbWVkaWEgJyArIHJ1bGUuY29uZGl0aW9uVGV4dCArICd7JztcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gbWVkaWFTdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ30nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocnVsZS5zdHlsZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNlbGVjdG9yU3R5bGUgPSAnJztcclxuXHJcbiAgICAgICAgICAgIENsb3VkVHJhbnNsYXRpb24uc3R5bGVQcm9wZXJ0aWVzVG9PcHBvc2l0ZS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3JTdHlsZSArPSBDbG91ZFRyYW5zbGF0aW9uLm9wcG9zaXRlUlRMQ1NTVmFsdWVzKHJ1bGUsIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBDbG91ZFRyYW5zbGF0aW9uLnN0eWxlUHJvcGVydGllc1RvU3dpdGNoLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvclN0eWxlICs9IENsb3VkVHJhbnNsYXRpb24uc3dpdGNoUlRMQ1NTVmFsdWVzKHJ1bGUsIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBJbnNlcnQgQ2xhc3NcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RvclN0eWxlICE9PSAnJylcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnaHRtbFtkaXI9cnRsXSAnICsgcnVsZS5zZWxlY3RvclRleHQgKyAneycgKyBzZWxlY3RvclN0eWxlICsgJ30nO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzd2l0Y2hSVExDU1NWYWx1ZXMocnVsZSwgbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgbmFtZSA9IG5hbWUuc3BsaXQoJy0nKVswXTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBsZWZ0UHJvcGVydHkgPSBuYW1lICsgJy1sZWZ0JztcclxuICAgICAgICBjb25zdCByaWdodFByb3BlcnR5ID0gbmFtZSArICctcmlnaHQnO1xyXG4gICAgICAgIGxldCBsZWZ0VmFsdWUgPSBydWxlLnN0eWxlW2xlZnRQcm9wZXJ0eV07XHJcbiAgICAgICAgbGV0IHJpZ2h0VmFsdWUgPSBydWxlLnN0eWxlW3JpZ2h0UHJvcGVydHldO1xyXG5cclxuICAgICAgICBpZiAobGVmdFZhbHVlID09PSAnJyAmJiByaWdodFZhbHVlID09PSAnJylcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG5cclxuICAgICAgICBpZiAobGVmdFZhbHVlID09PSByaWdodFZhbHVlKVxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgIGlmIChsZWZ0VmFsdWUgPT09ICcnKVxyXG4gICAgICAgICAgICBsZWZ0VmFsdWUgPSAnaW5pdGlhbCc7XHJcblxyXG4gICAgICAgIGlmIChyaWdodFZhbHVlID09PSAnJylcclxuICAgICAgICAgICAgcmlnaHRWYWx1ZSA9ICdpbml0aWFsJztcclxuXHJcbiAgICAgICAgbGV0IHN0eWxlID0gbGVmdFByb3BlcnR5ICsgJzogJyArIHJpZ2h0VmFsdWUgKyAnOycgKyByaWdodFByb3BlcnR5ICsgJzogJyArIGxlZnRWYWx1ZSArICc7JztcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIG9wcG9zaXRlUlRMQ1NTVmFsdWVzKHJ1bGUsIG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGxldCB2YWx1ZTogc3RyaW5nID0gcnVsZS5zdHlsZVtuYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSAnJylcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG5cclxuICAgICAgICBsZXQgc3R5bGUgPSAnJztcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSAnbGVmdCcpXHJcbiAgICAgICAgICAgIHN0eWxlICs9IG5hbWUgKyAnOiByaWdodDsnXHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09ICdyaWdodCcpXHJcbiAgICAgICAgICAgIHN0eWxlICs9IG5hbWUgKyAnOiBsZWZ0OydcclxuICAgICAgICBlbHNlIGlmIChDbG91ZFRyYW5zbGF0aW9uLmNhbkJlTmVnYXRpdmUodmFsdWUpKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUuaW5kZXhPZignLScpID09PSAwKVxyXG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gbmFtZSArICc6ICcgKyB2YWx1ZS5zdWJzdHIoMSkgKyAnOydcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gbmFtZSArICc6IC0nICsgdmFsdWUgKyAnOydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdHlsZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBjYW5CZU5lZ2F0aXZlKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgdW5pdGVzOiBzdHJpbmdbXSA9IFsncHgnLCAncHQnLCAncGMnLCAnY20nLCAnbW0nLCAnaW4nLCAnZW0nLCAncmVtJywgJ3Z3JywgJ3ZoJywgJ2V4JywgJ2NoJywgJ3ZtaW4nLCAndm1heCcsICclJ107XHJcblxyXG4gICAgICAgIGxldCBpc1RydWUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdW5pdGVzLmZvckVhY2goKHVuaXQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YodW5pdCkgPiAwICYmIHZhbHVlLmluZGV4T2YoJyAnKSA9PT0gLTEpXHJcbiAgICAgICAgICAgICAgICBpc1RydWUgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNUcnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGF6dXJlQXV0b1RyYW5zbGF0ZSh0ZXh0czogc3RyaW5nW10pOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcblxyXG4gICAgICAgIGlmICh0ZXh0cy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgbGV0IGJvZHlEYXRhID0gJyc7XHJcblxyXG4gICAgICAgIHRleHRzLmZvckVhY2goKHRleHQpID0+IHsgYm9keURhdGEgKz0gJ3tcIlRleHRcIjogXCInICsgdGV4dCArICdcIn0sJyB9KTtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0ZWRUZXh0czogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuY29nbml0aXZlLm1pY3Jvc29mdHRyYW5zbGF0b3IuY29tL3RyYW5zbGF0ZT9hcGktdmVyc2lvbj0zLjAmZnJvbT0nICsgdGhpcy5kZWZhdWx0TGFuZ3VhZ2UuY29kZSArICcmdG89JyArIHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiAnWycgKyBib2R5RGF0YSArICddJyxcclxuICAgICAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICh4aHJPYmopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB4aHJPYmouc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgeGhyT2JqLnNldFJlcXVlc3RIZWFkZXIoXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCIsIHRoaXMudHJhbnNsYXRvclByb3ZpZGVyS2V5KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBqc29uVHJhbnNsYXRpb25zID0gW107XHJcblxyXG4gICAgICAgICAgICAkLmVhY2goZGF0YSwgKGluZGV4LCB0cmFuc2xhdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZWRUZXh0c1tpbmRleF0gPSB0cmFuc2xhdGlvbnMudHJhbnNsYXRpb25zWzBdLnRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9nVHJhbnNsYXRpb25zRnJvbVByb3ZpZGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIGpzb25UcmFuc2xhdGlvbnMucHVzaCgne1wib1wiOiBcIicgKyB0ZXh0c1tpbmRleF0udHJpbSgpICsgJ1wiLCBcInRcIjogXCInICsgdHJhbnNsYXRlZFRleHRzW2luZGV4XS50cmltKCkgKyAnXCJ9Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ1RyYW5zbGF0aW9uc0Zyb21Qcm92aWRlcilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJyArIGpzb25UcmFuc2xhdGlvbnMuam9pbignLCcpICsgJ10nKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlSlNPTi5lcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYm9keURhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZWRUZXh0cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzY3JvbGxUb1RvcChzY3JvbGxEdXJhdGlvbjogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvID0gMDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIERlY2xhcmF0aW9uc1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGNvc1BhcmFtZXRlciA9ICh3aW5kb3cucGFnZVlPZmZzZXQgLSBzY3JvbGxUbykgLyAyLFxyXG4gICAgICAgICAgICBzY3JvbGxDb3VudCA9IDAsXHJcbiAgICAgICAgICAgIG9sZFRpbWVzdGFtcCA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAobmV3VGltZXN0YW1wOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgdHNEaWZmID0gbmV3VGltZXN0YW1wIC0gb2xkVGltZXN0YW1wO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIFBlcmZvcm1hbmNlLm5vdygpIHBvbHlmaWxsIGxvYWRzIGxhdGUgc28gcGFzc2VkLWluIHRpbWVzdGFtcCBpcyBhIGxhcmdlciBvZmZzZXRcclxuICAgICAgICAgICAgLy8gb24gdGhlIGZpcnN0IGdvLXRocm91Z2ggdGhhbiB3ZSB3YW50IHNvIEknbSBhZGp1c3RpbmcgdGhlIGRpZmZlcmVuY2UgZG93biBoZXJlLlxyXG4gICAgICAgICAgICAvLyBSZWdhcmRsZXNzLCB3ZSB3b3VsZCByYXRoZXIgaGF2ZSBhIHNsaWdodGx5IHNsb3dlciBhbmltYXRpb24gdGhhbiBhIGJpZyBqdW1wIHNvIGEgZ29vZFxyXG4gICAgICAgICAgICAvLyBzYWZlZ3VhcmQsIGV2ZW4gaWYgd2UncmUgbm90IHVzaW5nIHRoZSBwb2x5ZmlsbC5cclxuICAgIFxyXG4gICAgICAgICAgICBpZiAodHNEaWZmID4gMTAwKVxyXG4gICAgICAgICAgICAgICAgdHNEaWZmID0gMzA7XHJcbiAgICBcclxuICAgICAgICAgICAgc2Nyb2xsQ291bnQgKz0gTWF0aC5QSSAvIChzY3JvbGxEdXJhdGlvbiAvIHRzRGlmZik7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQXMgc29vbiBhcyB3ZSBjcm9zcyBvdmVyIFBpLCB3ZSdyZSBhYm91dCB3aGVyZSB3ZSBuZWVkIHRvIGJlXHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKHNjcm9sbENvdW50ID49IE1hdGguUEkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgbW92ZVN0ZXAgPSBNYXRoLnJvdW5kKHNjcm9sbFRvICsgY29zUGFyYW1ldGVyICsgY29zUGFyYW1ldGVyICogTWF0aC5jb3Moc2Nyb2xsQ291bnQpKTtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIG1vdmVTdGVwKTtcclxuICAgICAgICAgICAgb2xkVGltZXN0YW1wID0gbmV3VGltZXN0YW1wO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHVibGljIE1ldGhvZHNcclxuXHJcbiAgICBzdGF0aWMgdXBkYXRlQ3VycmVudExhbmd1YWdlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBsb2NhbFN0b3JhZ2VMYW5ndWFnZTogTGFuZ3VhZ2U7XHJcbiAgICAgICAgbGV0IHVybExhbmd1YWdlOiBMYW5ndWFnZTtcclxuICAgICAgICBsZXQgYnJvd3Nlckxhbmd1YWdlOiBMYW5ndWFnZTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdDogc3RyaW5nO1xyXG5cclxuICAgICAgICAvLyBMb2NhbCBTdG9yYWdlXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmcnKTtcclxuICAgICAgICB9IGNhdGNoe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jYWxTdG9yYWdlIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzdWx0ICE9PSBudWxsKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2VMYW5ndWFnZSA9IHRoaXMucGFyc2VMYW5ndWFnZShyZXN1bHQpO1xyXG5cclxuICAgICAgICAvLyBVUkxcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXJsTGFuZ3VhZ2VMb2NhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdXJsVmFsdWU6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVybExhbmd1YWdlTG9jYXRpb24gPT09IFVybExhbmd1YWdlTG9jYXRpb24uc3ViZGlyZWN0b3J5KVxyXG4gICAgICAgICAgICAgICAgdXJsVmFsdWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVsxXTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1cmxWYWx1ZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgaWYgKHVybFZhbHVlLmxlbmd0aCA9PT0gMiB8fCAodXJsVmFsdWUubGVuZ3RoID09PSA1ICYmIHVybFZhbHVlLmluZGV4T2YoJy0nKSA9PT0gMikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXMuZm9yRWFjaCgobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gdXJsVmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cmxWYWx1ZS5pbmRleE9mKCctJykgIT09IC0xICYmIHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxWYWx1ZSA9IHVybFZhbHVlLnNwbGl0KCctJylbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gdXJsVmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsTGFuZ3VhZ2UgPSB0aGlzLnBhcnNlTGFuZ3VhZ2UocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJyb3dzZXJcclxuXHJcbiAgICAgICAgcmVzdWx0ID0gbmF2aWdhdG9yWydsYW5ndWFnZSddIHx8IG5hdmlnYXRvclsndXNlckxhbmd1YWdlJ107XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgYnJvd3Nlckxhbmd1YWdlID0gdGhpcy5wYXJzZUxhbmd1YWdlKHJlc3VsdCk7XHJcblxyXG4gICAgICAgIC8vIENvbnNvbGlkYXRpb25cclxuXHJcbiAgICAgICAgaWYgKHVybExhbmd1YWdlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudExhbmd1YWdlKHVybExhbmd1YWdlLmNvZGUpO1xyXG5cclxuICAgICAgICBlbHNlIGlmIChsb2NhbFN0b3JhZ2VMYW5ndWFnZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRMYW5ndWFnZShsb2NhbFN0b3JhZ2VMYW5ndWFnZS5jb2RlKTtcclxuXHJcbiAgICAgICAgZWxzZSBpZiAoYnJvd3Nlckxhbmd1YWdlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudExhbmd1YWdlKGJyb3dzZXJMYW5ndWFnZS5jb2RlKTtcclxuXHJcbiAgICAgICAgZWxzZSB0aGlzLnNldEN1cnJlbnRMYW5ndWFnZSh0aGlzLmRlZmF1bHRMYW5ndWFnZS5jb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnRMYW5ndWFnZSgpOiBMYW5ndWFnZSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50TGFuZ3VhZ2UgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRMYW5ndWFnZTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50TGFuZ3VhZ2UoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudExhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHVwZGF0ZVVybExhbmd1YWdlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy51cmxMYW5ndWFnZUxvY2F0aW9uID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXJsTGFuZ3VhZ2VMb2NhdGlvbiA9PT0gVXJsTGFuZ3VhZ2VMb2NhdGlvbi5zdWJkaXJlY3RvcnkpIHtcclxuICAgICAgICAgICAgbGV0IHBhdGhuYW1lU3BsaXR0ZWQgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50TGFuZ3VhZ2VDb2RlID0gcGF0aG5hbWVTcGxpdHRlZFsxXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50TGFuZ3VhZ2VDb2RlLmxlbmd0aCA9PT0gMiB8fCAoY3VycmVudExhbmd1YWdlQ29kZS5sZW5ndGggPT09IDUgJiYgY3VycmVudExhbmd1YWdlQ29kZS5pbmRleE9mKCctJykgPT09IDIpKVxyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWVTcGxpdHRlZFsxXSA9IHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgIGVsc2UgcGF0aG5hbWVTcGxpdHRlZC5zcGxpY2UoMSwgMCwgdGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZSk7XHJcblxyXG4gICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCBwYXRobmFtZVNwbGl0dGVkLmpvaW4oJy8nKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRDdXJyZW50TGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50TGFuZ3VhZ2UgPSB0aGlzLnBhcnNlTGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmcnLCB0aGlzLl9jdXJyZW50TGFuZ3VhZ2UuY29kZSk7XHJcbiAgICAgICAgfSBjYXRjaHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvY2FsU3RvcmFnZSBpcyBub3Qgc3VwcG9ydGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVVybExhbmd1YWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIHRyYW5zbGF0ZURPTSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHJcbiAgICAgICAgJCgnaHRtbCcpLmF0dHIoJ2xhbmcnLCBDbG91ZFRyYW5zbGF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuXHJcbiAgICAgICAgaWYgKENsb3VkVHJhbnNsYXRpb24uZGlyZWN0aW9uID09PSBMYW5ndWFnZURpcmVjdGlvbi5ydGwpXHJcbiAgICAgICAgICAgICQoJ2h0bWwnKS5hdHRyKCdkaXInLCAncnRsJyk7XHJcbiAgICAgICAgZWxzZSAkKCdodG1sJykucmVtb3ZlQXR0cignZGlyJyk7XHJcblxyXG4gICAgICAgIGxldCBzdHlsZVNoZWV0OiBTdHlsZVNoZWV0O1xyXG5cclxuICAgICAgICAkLmVhY2goZG9jdW1lbnQuc3R5bGVTaGVldHMsIGZ1bmN0aW9uIChpbmRleCwgc2hlZXQpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICQuZWFjaChzaGVldFsnY3NzUnVsZXMnXSB8fCBzaGVldFsncnVsZXMnXSwgZnVuY3Rpb24gKHJ1bGVJbmRleCwgcnVsZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocnVsZS5jc3NUZXh0ID09PSAnaHRtbFtkaXI9XCJydGxcIl0geyBkaXJlY3Rpb246IHJ0bDsgfScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQgPSBzaGVldDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKENsb3VkVHJhbnNsYXRpb24uZGlyZWN0aW9uID09PSBMYW5ndWFnZURpcmVjdGlvbi5ydGwgJiYgc3R5bGVTaGVldCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBDbG91ZFRyYW5zbGF0aW9uLmFkZFJUTENTUygpO1xyXG5cclxuICAgICAgICB2YXIgc2VsZWN0aW9uID0gJyonO1xyXG4gICAgICAgIENsb3VkVHJhbnNsYXRpb24ubm9uVHJhbnNsYXRlZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgc2VsZWN0aW9uICs9ICc6bm90KCcgKyAnXCInICsgZWxlbWVudCArICdcIicgKyAnKSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9uU3RhdHVzZXM6IFRyYW5zbGF0aW9uU3RhdHVzW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBlIG9mICQoc2VsZWN0aW9uKS50b0FycmF5KCkpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgQ2xvdWRUcmFuc2xhdGlvbi50cmFuc2xhdGVFbGVtZW50KGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3VsdHMuZm9yRWFjaCgoc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXNlcy5wdXNoKHN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGUgIT09IHRoaXMuZGVmYXVsdExhbmd1YWdlLmNvZGUpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBvcmlnaW5hbFRleHRzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXNlcy5mb3JFYWNoKChzdGF0dXMpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RhdHVzLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5mYWlsZWQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxUZXh0cy5wdXNoKHN0YXR1cy50ZXh0LnJlcGxhY2UoL1wiL2csICdcXFxcXCInKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIG9yaWdpbmFsVGV4dHMgPSBvcmlnaW5hbFRleHRzLmZpbHRlcih0aGlzLm9ubHlVbmlxdWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNsYXRvclByb3ZpZGVyID09PSAxICYmIENsb3VkVHJhbnNsYXRpb24uZ2V0VHJhbnNsYXRpb25zKENsb3VkVHJhbnNsYXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUpLnRyYW5zbGF0aW9uID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFuc2xhdGVkVGV4dHMgPSBhd2FpdCB0aGlzLmF6dXJlQXV0b1RyYW5zbGF0ZShvcmlnaW5hbFRleHRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKENsb3VkVHJhbnNsYXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUpLnRyYW5zbGF0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNsYXRpb25zID09PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRyYW5zbGF0aW9ucyhDbG91ZFRyYW5zbGF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKS50cmFuc2xhdGlvbiA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkLmVhY2godHJhbnNsYXRlZFRleHRzLCAoaW5kZXgsIHRleHQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG91ZFRyYW5zbGF0aW9uLmFkZFRyYW5zbGF0aW9uVmFsdWUoQ2xvdWRUcmFuc2xhdGlvbi5jdXJyZW50TGFuZ3VhZ2UuY29kZSwgb3JpZ2luYWxUZXh0c1tpbmRleF0sIHRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgY29uc29sZS5sb2coZSk7IH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBzdGF0dXMgb2YgdHJhbnNsYXRpb25TdGF0dXNlcykge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RhdHVzLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LmZhaWxlZDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMuYXR0cmlidXRlID09PSAndGl0bGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgQ2xvdWRUcmFuc2xhdGlvbi50cmFuc2xhdGVFbGVtZW50VGl0bGUoc3RhdHVzLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRUZXh0KHN0YXR1cy5lbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AoMjAwKTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50TGFuZ3VhZ2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZpbGxJbkxhbmd1YWdlcygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IHNlbGVjdGlvbiA9ICQoJy5jbG91ZHRyYW5zbGF0aW9uLXNlbGVjdGlvbicpO1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBzZWxlY3Rpb24uYXR0cigndHJhbnNsYXRlJywgJ25vJyk7XHJcblxyXG4gICAgICAgIHNlbGVjdGlvbi5odG1sKCcnKTtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRMYW5ndWFnZTogc3RyaW5nID0gdGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZTtcclxuXHJcbiAgICAgICAgQ2xvdWRUcmFuc2xhdGlvbi5sYW5ndWFnZXMuZm9yRWFjaCgobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgICAgICAgJCgnLmNsb3VkdHJhbnNsYXRpb24tc2VsZWN0aW9uJykuYXBwZW5kKCc8b3B0aW9uIHZhbHVlPVwiJyArIGxhbmd1YWdlLmNvZGUgKyAnXCInICsgKGxhbmd1YWdlLmNvZGUgPT09IGN1cnJlbnRMYW5ndWFnZSA/ICcgc2VsZWN0ZWQgJyA6ICcnKSArICc+JyArIGxhbmd1YWdlLmRpc3BsYXlOYW1lICsgJzwvb3B0aW9uPicpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNsb3VkdHJhbnNsYXRpb24tc2VsZWN0aW9uJywgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGxldCBsYW5ndWFnZUNvZGUgPSAkKHRoaXMpLnZhbCgpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgaWYgKGxhbmd1YWdlQ29kZSAhPT0gJycpXHJcbiAgICAgICAgQ2xvdWRUcmFuc2xhdGlvbi5zZXRDdXJyZW50TGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlKTtcclxuXHJcbiAgICBhd2FpdCBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0ZURPTSgpO1xyXG59KTsiXX0=

