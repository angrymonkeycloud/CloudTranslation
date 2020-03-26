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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbG91ZFRyYW5zbGF0aW9uU2V0dGluZ3MgfSBmcm9tIFwiLi9JbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0b3JQcm92aWRlciwgVXJsTGFuZ3VhZ2VMb2NhdGlvbiwgTGFuZ3VhZ2VEaXJlY3Rpb24sIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0IH0gZnJvbSBcIi4vZW51bXNcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRpb25zLCBMYW5ndWFnZSwgVHJhbnNsYXRpb25WYWx1ZSwgVHJhbnNsYXRpb25TdGF0dXMgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XHJcblxyXG5jb25zdCBjbG91ZFRyYW5zbGF0aW9uID0gKHNldHRpbmdzPzogQ2xvdWRUcmFuc2xhdGlvblNldHRpbmdzKSA9PiBuZXcgQ2xvdWRUcmFuc2xhdGlvbihzZXR0aW5ncyk7XHJcbmV4cG9ydCBkZWZhdWx0IGNsb3VkVHJhbnNsYXRpb247XHJcblxyXG5jbGFzcyBDbG91ZFRyYW5zbGF0aW9ue1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzZXR0aW5nczogQ2xvdWRUcmFuc2xhdGlvblNldHRpbmdzKXtcclxuICAgICAgICBcclxuICAgIENsb3VkVHJhbnNsYXRpb24uX3NldHRpbmdzID0gdGhpcy5tZXJnZVNldHRpbmdzKHNldHRpbmdzKTtcclxuXHJcbiAgICAgICAgQ2xvdWRUcmFuc2xhdGlvbi51cGRhdGVDdXJyZW50TGFuZ3VhZ2UoKTtcclxuICAgICAgICBDbG91ZFRyYW5zbGF0aW9uLmZpbGxJbkxhbmd1YWdlcygpO1xyXG4gICAgICAgIENsb3VkVHJhbnNsYXRpb24udHJhbnNsYXRlRE9NKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgbWVyZ2VTZXR0aW5ncyhfc2V0dGluZ3M6IENsb3VkVHJhbnNsYXRpb25TZXR0aW5ncyk6IENsb3VkVHJhbnNsYXRpb25TZXR0aW5ncyB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgOiBDbG91ZFRyYW5zbGF0aW9uU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHRMYW5ndWFnZTogJ2VuJyxcclxuICAgICAgICAgICAgbG9nVHJhbnNsYXRpb25zRnJvbVByb3ZpZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgdHJhbnNsYXRvclByb3ZpZGVyOiBUcmFuc2xhdG9yUHJvdmlkZXIubm9uZSAsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0b3JQcm92aWRlcktleTogJycsXHJcbiAgICAgICAgICAgIHVybExhbmd1YWdlTG9jYXRpb246IFVybExhbmd1YWdlTG9jYXRpb24ubm9uZSxcclxuXHJcbiAgICAgICAgICAgIGxhbmd1YWdlczogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGF0dHJuYW1lIGluIF9zZXR0aW5ncykgXHJcbiAgICAgICAgc2V0dGluZ3NbYXR0cm5hbWVdID0gX3NldHRpbmdzW2F0dHJuYW1lXTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBWYXJpYWJsZXNcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfdHJhbnNsYXRpb25zTGlzdDogVHJhbnNsYXRpb25zW107XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfZGVmYXVsdExhbmd1YWdlOiBMYW5ndWFnZTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9jdXJyZW50TGFuZ3VhZ2U6IExhbmd1YWdlO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3N1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3NldHRpbmdzIDogQ2xvdWRUcmFuc2xhdGlvblNldHRpbmdzO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCB0cmFuc2xhdGlvbnNMaXN0KCk6IFRyYW5zbGF0aW9uc1tdIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3RyYW5zbGF0aW9uc0xpc3QgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy5fdHJhbnNsYXRpb25zTGlzdCA9IFtdO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNsYXRpb25zTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhZGRUcmFuc2xhdGlvblZhbHVlKGxhbmd1YWdlQ29kZTogc3RyaW5nLCBkZWZhdWx0VGV4dDogc3RyaW5nLCB0cmFuc2xhdGVkVGV4dDogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvbnMgPSB0aGlzLmdldFRyYW5zbGF0aW9ucyhsYW5ndWFnZUNvZGUpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRpb25zID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb25zID0gbmV3IFRyYW5zbGF0aW9ucygpO1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbnMubGFuZ3VhZ2VDb2RlID0gbGFuZ3VhZ2VDb2RlO1xyXG4gICAgICAgICAgICB0aGlzLl90cmFuc2xhdGlvbnNMaXN0LnB1c2godHJhbnNsYXRpb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblZhbHVlID0gbmV3IFRyYW5zbGF0aW9uVmFsdWUoKTtcclxuICAgICAgICB0cmFuc2xhdGlvblZhbHVlLmRlZmF1bHQgPSBkZWZhdWx0VGV4dDtcclxuICAgICAgICB0cmFuc2xhdGlvblZhbHVlLnRleHQgPSB0cmFuc2xhdGVkVGV4dDtcclxuXHJcbiAgICAgICAgdHJhbnNsYXRpb25zLnRyYW5zbGF0aW9uLnB1c2godHJhbnNsYXRpb25WYWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXRUcmFuc2xhdGlvbnMobGFuZ3VhZ2VDb2RlOiBzdHJpbmcpOiBUcmFuc2xhdGlvbnMge1xyXG4gICAgICAgIGxldCB0OiBUcmFuc2xhdGlvbnM7XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNsYXRpb25zTGlzdC5mb3JFYWNoKCh0cmFuc2xhdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0cmFuc2xhdGlvbnMubGFuZ3VhZ2VDb2RlID09PSBsYW5ndWFnZUNvZGUpXHJcbiAgICAgICAgICAgICAgICB0ID0gdHJhbnNsYXRpb25zO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcml2YXRlIFByb3BlcnRpZXNcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgbm9uVHJhbnNsYXRlZEVsZW1lbnRzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gWydjb2RlJywgJ2h0bWwnLCAnaGVhZCcsICdoZWFkID4gKiddO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCBzdHlsZVByb3BlcnRpZXNUb1N3aXRjaCgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgbGV0IHByb3BlcnRpZXMgPSBbJ3BhZGRpbmcnLCAnbWFyZ2luJ107XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcclxuXHJcbiAgICAgICAgcHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT57XHJcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChwcm9wZXJ0eSArICctbGVmdCcpO1xyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2gocHJvcGVydHkgKyAnLXJpZ2h0Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCBzdHlsZVByb3BlcnRpZXNUb09wcG9zaXRlKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gWyd0ZXh0LWFsaWduJywgJ2Zsb2F0JywgJ2JhY2tncm91bmQtcG9zaXRpb24teCddO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCB0cmFuc2xhdG9yUHJvdmlkZXJLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MudHJhbnNsYXRvclByb3ZpZGVyS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCB0cmFuc2xhdG9yUHJvdmlkZXIoKTogVHJhbnNsYXRvclByb3ZpZGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MudHJhbnNsYXRvclByb3ZpZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCB1cmxMYW5ndWFnZUxvY2F0aW9uKCk6IFVybExhbmd1YWdlTG9jYXRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy51cmxMYW5ndWFnZUxvY2F0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCBsb2dUcmFuc2xhdGlvbnNGcm9tUHJvdmlkZXIoKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5sb2dUcmFuc2xhdGlvbnNGcm9tUHJvdmlkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHN1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlKCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fc3VwcG9ydHNUcmFuc2xhdGVBdHRyaWJ1dGUgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fc3VwcG9ydHNUcmFuc2xhdGVBdHRyaWJ1dGUgPSAkKCdib2R5JylbMF0udHJhbnNsYXRlICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZG9UcmFuc2xhdGVFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRyYW5zbGF0ZSA9PT0gZmFsc2UgfHwgKCQoZWxlbWVudCkuY2xvc2VzdCgnKlt0cmFuc2xhdGVdJylbMF0gIT09IHVuZGVmaW5lZCAmJiAkKGVsZW1lbnQpLmNsb3Nlc3QoJypbdHJhbnNsYXRlXScpWzBdLnRyYW5zbGF0ZSA9PT0gZmFsc2UpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGF0dHJpYnV0ZSA9ICQoZWxlbWVudCkuYXR0cigndHJhbnNsYXRlJyk7XHJcblxyXG4gICAgICAgIGlmIChhdHRyaWJ1dGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoJChlbGVtZW50KS5jbG9zZXN0KCcqW3RyYW5zbGF0ZV0nKVswXSAhPT0gdW5kZWZpbmVkICYmICQoZWxlbWVudCkuY2xvc2VzdCgnKlt0cmFuc2xhdGVdJykuYXR0cigndHJhbnNsYXRlJykudG9Mb3dlckNhc2UoKSA9PT0gJ25vJylcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhdHRyaWJ1dGUudG9Mb3dlckNhc2UoKSA9PT0gJ25vJylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgUHJvcGVydGllc1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZGVmYXVsdExhbmd1YWdlKCk6IExhbmd1YWdlIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2RlZmF1bHRMYW5ndWFnZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdExhbmd1YWdlO1xyXG5cclxuICAgICAgICB0aGlzLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpID09PSB0aGlzLl9zZXR0aW5ncy5kZWZhdWx0TGFuZ3VhZ2UudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RlZmF1bHRMYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdExhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgbGFuZ3VhZ2VzKCk6IExhbmd1YWdlW10ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MubGFuZ3VhZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByaXZhdGUgTWV0aG9kc1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHBhcnNlTGFuZ3VhZ2UocmVxdWVzdExhbmd1YWdlOiBzdHJpbmcpOiBMYW5ndWFnZSB7XHJcblxyXG4gICAgICAgIHJlcXVlc3RMYW5ndWFnZSA9IHJlcXVlc3RMYW5ndWFnZS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdDogTGFuZ3VhZ2U7XHJcblxyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsYW5ndWFnZS5jb2RlLnRvTG93ZXJDYXNlKCkgPT09IHJlcXVlc3RMYW5ndWFnZSlcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxhbmd1YWdlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICAgIGlmIChyZXF1ZXN0TGFuZ3VhZ2UuaW5kZXhPZignLScpICE9PSAtIDEpXHJcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmd1YWdlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gcmVxdWVzdExhbmd1YWdlLnNwbGl0KCctJylbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRMYW5ndWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgZGlyZWN0aW9uKCk6IExhbmd1YWdlRGlyZWN0aW9uIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudExhbmd1YWdlLmRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGlvbnMoKTogUHJvbWlzZTxUcmFuc2xhdGlvbnM+IHtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKENsb3VkVHJhbnNsYXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRpb25zICE9PSB1bmRlZmluZWQgJiYgdHJhbnNsYXRpb25zLnRyYW5zbGF0aW9uID09PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIGVsc2UgaWYgKHRyYW5zbGF0aW9ucyAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25zO1xyXG5cclxuICAgICAgICBsZXQganNvblBhdGggPSAndHJhbnNsYXRpb24vJyArIHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSArICcuanNvbic7XHJcblxyXG4gICAgICAgIGxldCBmZXRjaFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goanNvblBhdGgpO1xyXG5cclxuICAgICAgICBpZiAoIWZldGNoUmVzcG9uc2Uub2spIHtcclxuXHJcbiAgICAgICAgICAgICAgICBqc29uUGF0aCA9IGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKycvJyArIGpzb25QYXRoO1xyXG5cclxuICAgICAgICAgICAgICAgIGZldGNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChqc29uUGF0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFmZXRjaFJlc3BvbnNlLm9rKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG51bGxUcmFuc2xhdGlvbnMgPSBuZXcgVHJhbnNsYXRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICBudWxsVHJhbnNsYXRpb25zLmxhbmd1YWdlQ29kZSA9IENsb3VkVHJhbnNsYXRpb24uY3VycmVudExhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgICAgICBudWxsVHJhbnNsYXRpb25zLnRyYW5zbGF0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2xhdGlvbnNMaXN0LnB1c2gobnVsbFRyYW5zbGF0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoUmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGRhdGEpXHJcbiAgICAgICAgICAgIHRoaXMuYWRkVHJhbnNsYXRpb25WYWx1ZShDbG91ZFRyYW5zbGF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlLCB2YWx1ZVsnbyddLCB2YWx1ZVsndCddKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VHJhbnNsYXRpb25zKENsb3VkVHJhbnNsYXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBnZXRUcmFuc2xhdGlvbih0ZXh0OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZSA9PT0gdGhpcy5kZWZhdWx0TGFuZ3VhZ2UuY29kZSlcclxuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XHJcblxyXG4gICAgICAgIHZhciB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25WYWx1ZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0aW9ucygpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0cyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXN1bHRzLnRyYW5zbGF0aW9uLmZvckVhY2goKHQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0LmRlZmF1bHQudHJpbSgpID09PSB0ZXh0LnRyaW0oKSlcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uID0gdDtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRpb24gPT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0cmFuc2xhdGlvbi50ZXh0LnJlcGxhY2UodGV4dC50cmltKCksIHRyYW5zbGF0aW9uLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIHRyYW5zbGF0ZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzW10+IHtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICBpZiAoQ2xvdWRUcmFuc2xhdGlvbi5kaXJlY3Rpb24gPT09IExhbmd1YWdlRGlyZWN0aW9uLnJ0bCkge1xyXG4gICAgICAgICAgICBsZXQgc3R5bGUgPSBlbGVtZW50LnN0eWxlLmNzc1RleHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3R5bGUgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZGF0YSgnX2N0b3JpZ2luYWxzdHlsZScsIHN0eWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcnRsU3R5bGUgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuc3R5bGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlOYW1lID0gZWxlbWVudC5zdHlsZVtpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKENsb3VkVHJhbnNsYXRpb24uc3R5bGVQcm9wZXJ0aWVzVG9PcHBvc2l0ZS5pbmRleE9mKHByb3BlcnR5TmFtZSkgIT09IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydGxTdHlsZSArPSBDbG91ZFRyYW5zbGF0aW9uLm9wcG9zaXRlUlRMQ1NTVmFsdWVzKGVsZW1lbnQsIHByb3BlcnR5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoQ2xvdWRUcmFuc2xhdGlvbi5zdHlsZVByb3BlcnRpZXNUb1N3aXRjaC5pbmRleE9mKHByb3BlcnR5TmFtZSkgIT09IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydGxTdHlsZSArPSBDbG91ZFRyYW5zbGF0aW9uLnN3aXRjaFJUTENTU1ZhbHVlcyhlbGVtZW50LCBwcm9wZXJ0eU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcnRsU3R5bGUgKz0gcHJvcGVydHlOYW1lICsgJzogJyArIGVsZW1lbnQuc3R5bGVbcHJvcGVydHlOYW1lXSArICc7ICc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJ0bFN0eWxlICE9PSBzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZGF0YSgnX2N0b3JpZ2luYWxzdHlsZScsIHN0eWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBydGxTdHlsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgb3JpZ2luYWxTdHlsZSA9ICQoZWxlbWVudCkuZGF0YSgnX2N0b3JpZ2luYWxzdHlsZScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG9yaWdpbmFsU3R5bGUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmF0dHIoJ3N0eWxlJywgb3JpZ2luYWxTdHlsZSk7XHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZURhdGEoJ19jdG9yaWdpbmFsc3R5bGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWdub3JlIGF0dHJpYnV0ZTogdHJhbnNsYXRlPVwibm9cIlxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZG9UcmFuc2xhdGVFbGVtZW50KGVsZW1lbnQpKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcblxyXG4gICAgICAgIC8vIElnbm9yZSBsaW5rcyB3aXRoIG1haWx0bzogYW5kIHRlbDpcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ0EnKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZWxlbWVudEhyZWYgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudEhyZWYuaW5kZXhPZignOicpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudEhyZWYgPSBlbGVtZW50SHJlZi5zcGxpdCgnOicpWzBdLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRIcmVmID09PSAnbWFpbHRvJyB8fCBlbGVtZW50SHJlZiA9PT0gJ3RlbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlyJywgJ2x0cicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFByb2NlZWQgd2l0aCB0aGUgdHJhbnNsYXRpb25cclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9uU3RhdHVzZXM6IFRyYW5zbGF0aW9uU3RhdHVzW10gPSBbXTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGF3YWl0IENsb3VkVHJhbnNsYXRpb24udHJhbnNsYXRlRWxlbWVudFRleHQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uU3RhdHVzZXMucHVzaChzdGF0dXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gYXdhaXQgQ2xvdWRUcmFuc2xhdGlvbi50cmFuc2xhdGVFbGVtZW50VGl0bGUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uU3RhdHVzZXMucHVzaChzdGF0dXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXNlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBvbmx5VW5pcXVlKHZhbHVlLCBpbmRleCwgc2VsZikge1xyXG4gICAgICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGVFbGVtZW50VGV4dChlbGVtZW50OiBIVE1MRWxlbWVudCk6IFByb21pc2U8VHJhbnNsYXRpb25TdGF0dXM+IHtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09ICdzY3JpcHQnKVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25TdGF0dXMoZWxlbWVudCwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuaWdub3JlZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGNoaWxkTm9kZSA9IGVsZW1lbnQuY2hpbGROb2Rlc1swXTtcclxuXHJcbiAgICAgICAgaWYgKGNoaWxkTm9kZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0Lmlnbm9yZWQpO1xyXG5cclxuICAgICAgICBpZiAoY2hpbGROb2RlLm5vZGVWYWx1ZSA9PT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5pZ25vcmVkKTtcclxuXHJcbiAgICAgICAgaWYgKGNoaWxkTm9kZS5ub2RlVmFsdWUudHJpbSgpID09PSAnJylcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5pZ25vcmVkKTtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9uU3RhdHVzID0gYXdhaXQgQ2xvdWRUcmFuc2xhdGlvbi50cmFuc2xhdGUoZWxlbWVudCwgJ19jdG9yaWdpbmFsdGV4dCcsIGNoaWxkTm9kZS5ub2RlVmFsdWUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRyYW5zbGF0aW9uU3RhdHVzLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5zdWNjZWVkZWQ6XHJcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGUubm9kZVZhbHVlID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlLm5vZGVWYWx1ZSA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1cy5hdHRyaWJ1dGUgPSAndGV4dCc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXM7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGVFbGVtZW50VGl0bGUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzPiB7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblN0YXR1cyA9IGF3YWl0IENsb3VkVHJhbnNsYXRpb24udHJhbnNsYXRlKGVsZW1lbnQsICdfY3RvcmlnaW5hbHRpdGxlJywgZWxlbWVudC50aXRsZSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHJhbnNsYXRpb25TdGF0dXMucmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LnN1Y2NlZWRlZDpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQudGl0bGUgPSB0cmFuc2xhdGlvblN0YXR1cy50ZXh0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5mYWlsZWQ6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRpdGxlID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uU3RhdHVzLmF0dHJpYnV0ZSA9ICd0aXRsZSc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXM7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGUoZWxlbWVudDogSFRNTEVsZW1lbnQsIGRhdGFWYWx1ZU5hbWU6IHN0cmluZywgY3VycmVudFZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzPiB7XHJcblxyXG4gICAgICAgIGxldCBvcmlnaW5hbFRleHQ6IHN0cmluZztcclxuXHJcbiAgICAgICAgaWYgKCQoZWxlbWVudCkuZGF0YShkYXRhVmFsdWVOYW1lKSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBvcmlnaW5hbFRleHQgPSAkKGVsZW1lbnQpLmRhdGEoZGF0YVZhbHVlTmFtZSk7XHJcblxyXG4gICAgICAgIGlmICgob3JpZ2luYWxUZXh0ID09PSB1bmRlZmluZWQgfHwgb3JpZ2luYWxUZXh0LnRyaW0oKSA9PT0gJycpICYmIChjdXJyZW50VmFsdWUgPT09IG51bGwgfHwgY3VycmVudFZhbHVlLnRyaW0oKSA9PT0gJycpKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0Lmlnbm9yZWQpO1xyXG5cclxuICAgICAgICBpZiAob3JpZ2luYWxUZXh0ID09PSB1bmRlZmluZWQgfHwgb3JpZ2luYWxUZXh0LnRyaW0oKSA9PT0gJycpXHJcbiAgICAgICAgICAgIG9yaWdpbmFsVGV4dCA9IGN1cnJlbnRWYWx1ZTtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0ZWRUZXh0ID0gYXdhaXQgQ2xvdWRUcmFuc2xhdGlvbi5nZXRUcmFuc2xhdGlvbihvcmlnaW5hbFRleHQpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRlZFRleHQgPT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmVEYXRhKGRhdGFWYWx1ZU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5mYWlsZWQsIG9yaWdpbmFsVGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRlZFRleHQgIT09IG9yaWdpbmFsVGV4dClcclxuICAgICAgICAgICAgJChlbGVtZW50KS5kYXRhKGRhdGFWYWx1ZU5hbWUsIG9yaWdpbmFsVGV4dCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZURhdGEoZGF0YVZhbHVlTmFtZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25TdGF0dXMoZWxlbWVudCwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuc3VjY2VlZGVkLCB0cmFuc2xhdGVkVGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYWRkUlRMQ1NTKCk6IHZvaWQge1xyXG4gICAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICAgICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcbiAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gQ2xvdWRUcmFuc2xhdGlvbi5nZW5lcmF0ZVJUTENTUygpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdlbmVyYXRlUlRMQ1NTKCk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGxldCBzdHlsZSA9ICdodG1sW2Rpcj1cInJ0bFwiXSB7ZGlyZWN0aW9uOiBydGw7fSc7XHJcblxyXG4gICAgICAgICQuZWFjaChkb2N1bWVudC5zdHlsZVNoZWV0cywgZnVuY3Rpb24gKGluZGV4LCBzaGVldCkge1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHN0eWxlICs9IENsb3VkVHJhbnNsYXRpb24uZ2V0UnVsZXNTdHlsZShzaGVldFsnY3NzUnVsZXMnXSB8fCBzaGVldFsncnVsZXMnXSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0UnVsZXNTdHlsZShydWxlcyk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcclxuXHJcbiAgICAgICAgJC5lYWNoKHJ1bGVzLCBmdW5jdGlvbiAoaW5kZXgsIHJ1bGUpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChydWxlLnR5cGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBtZWRpYVN0eWxlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVkaWFTdHlsZSA9IENsb3VkVHJhbnNsYXRpb24uZ2V0UnVsZXNTdHlsZShydWxlWydjc3NSdWxlcyddIHx8IHJ1bGVbJ3J1bGVzJ10pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWVkaWFTdHlsZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ0BtZWRpYSAnICsgcnVsZS5jb25kaXRpb25UZXh0ICsgJ3snO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBtZWRpYVN0eWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnfSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChydWxlLnN0eWxlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgc2VsZWN0b3JTdHlsZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgQ2xvdWRUcmFuc2xhdGlvbi5zdHlsZVByb3BlcnRpZXNUb09wcG9zaXRlLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvclN0eWxlICs9IENsb3VkVHJhbnNsYXRpb24ub3Bwb3NpdGVSVExDU1NWYWx1ZXMocnVsZSwgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIENsb3VkVHJhbnNsYXRpb24uc3R5bGVQcm9wZXJ0aWVzVG9Td2l0Y2guZm9yRWFjaCgocHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yU3R5bGUgKz0gQ2xvdWRUcmFuc2xhdGlvbi5zd2l0Y2hSVExDU1NWYWx1ZXMocnVsZSwgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEluc2VydCBDbGFzc1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdG9yU3R5bGUgIT09ICcnKVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdodG1sW2Rpcj1ydGxdICcgKyBydWxlLnNlbGVjdG9yVGV4dCArICd7JyArIHNlbGVjdG9yU3R5bGUgKyAnfSc7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHN3aXRjaFJUTENTU1ZhbHVlcyhydWxlLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBuYW1lID0gbmFtZS5zcGxpdCgnLScpWzBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGxlZnRQcm9wZXJ0eSA9IG5hbWUgKyAnLWxlZnQnO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0UHJvcGVydHkgPSBuYW1lICsgJy1yaWdodCc7XHJcbiAgICAgICAgbGV0IGxlZnRWYWx1ZSA9IHJ1bGUuc3R5bGVbbGVmdFByb3BlcnR5XTtcclxuICAgICAgICBsZXQgcmlnaHRWYWx1ZSA9IHJ1bGUuc3R5bGVbcmlnaHRQcm9wZXJ0eV07XHJcblxyXG4gICAgICAgIGlmIChsZWZ0VmFsdWUgPT09ICcnICYmIHJpZ2h0VmFsdWUgPT09ICcnKVxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgIGlmIChsZWZ0VmFsdWUgPT09IHJpZ2h0VmFsdWUpXHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuXHJcbiAgICAgICAgaWYgKGxlZnRWYWx1ZSA9PT0gJycpXHJcbiAgICAgICAgICAgIGxlZnRWYWx1ZSA9ICdpbml0aWFsJztcclxuXHJcbiAgICAgICAgaWYgKHJpZ2h0VmFsdWUgPT09ICcnKVxyXG4gICAgICAgICAgICByaWdodFZhbHVlID0gJ2luaXRpYWwnO1xyXG5cclxuICAgICAgICBsZXQgc3R5bGUgPSBsZWZ0UHJvcGVydHkgKyAnOiAnICsgcmlnaHRWYWx1ZSArICc7JyArIHJpZ2h0UHJvcGVydHkgKyAnOiAnICsgbGVmdFZhbHVlICsgJzsnO1xyXG5cclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb3Bwb3NpdGVSVExDU1NWYWx1ZXMocnVsZSwgbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgbGV0IHZhbHVlOiBzdHJpbmcgPSBydWxlLnN0eWxlW25hbWVdO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09ICcnKVxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgIGxldCBzdHlsZSA9ICcnO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09ICdsZWZ0JylcclxuICAgICAgICAgICAgc3R5bGUgKz0gbmFtZSArICc6IHJpZ2h0OydcclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PT0gJ3JpZ2h0JylcclxuICAgICAgICAgICAgc3R5bGUgKz0gbmFtZSArICc6IGxlZnQ7J1xyXG4gICAgICAgIGVsc2UgaWYgKENsb3VkVHJhbnNsYXRpb24uY2FuQmVOZWdhdGl2ZSh2YWx1ZSkpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKCctJykgPT09IDApXHJcbiAgICAgICAgICAgICAgICBzdHlsZSArPSBuYW1lICsgJzogJyArIHZhbHVlLnN1YnN0cigxKSArICc7J1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzdHlsZSArPSBuYW1lICsgJzogLScgKyB2YWx1ZSArICc7J1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGNhbkJlTmVnYXRpdmUodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCB1bml0ZXM6IHN0cmluZ1tdID0gWydweCcsICdwdCcsICdwYycsICdjbScsICdtbScsICdpbicsICdlbScsICdyZW0nLCAndncnLCAndmgnLCAnZXgnLCAnY2gnLCAndm1pbicsICd2bWF4JywgJyUnXTtcclxuXHJcbiAgICAgICAgbGV0IGlzVHJ1ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB1bml0ZXMuZm9yRWFjaCgodW5pdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuaW5kZXhPZih1bml0KSA+IDAgJiYgdmFsdWUuaW5kZXhPZignICcpID09PSAtMSlcclxuICAgICAgICAgICAgICAgIGlzVHJ1ZSA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpc1RydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgYXp1cmVBdXRvVHJhbnNsYXRlKHRleHRzOiBzdHJpbmdbXSk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuXHJcbiAgICAgICAgaWYgKHRleHRzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICBsZXQgYm9keURhdGEgPSAnJztcclxuXHJcbiAgICAgICAgdGV4dHMuZm9yRWFjaCgodGV4dCkgPT4geyBib2R5RGF0YSArPSAne1wiVGV4dFwiOiBcIicgKyB0ZXh0ICsgJ1wifSwnIH0pO1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRlZFRleHRzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS5jb2duaXRpdmUubWljcm9zb2Z0dHJhbnNsYXRvci5jb20vdHJhbnNsYXRlP2FwaS12ZXJzaW9uPTMuMCZmcm9tPScgKyB0aGlzLmRlZmF1bHRMYW5ndWFnZS5jb2RlICsgJyZ0bz0nICsgdGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6ICdbJyArIGJvZHlEYXRhICsgJ10nLFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcblxyXG4gICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogKHhock9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHhock9iai5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB4aHJPYmouc2V0UmVxdWVzdEhlYWRlcihcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIiwgdGhpcy50cmFuc2xhdG9yUHJvdmlkZXJLZXkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGpzb25UcmFuc2xhdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICQuZWFjaChkYXRhLCAoaW5kZXgsIHRyYW5zbGF0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlZFRleHRzW2luZGV4XSA9IHRyYW5zbGF0aW9ucy50cmFuc2xhdGlvbnNbMF0udGV4dDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2dUcmFuc2xhdGlvbnNGcm9tUHJvdmlkZXIpXHJcbiAgICAgICAgICAgICAgICAgICAganNvblRyYW5zbGF0aW9ucy5wdXNoKCd7XCJvXCI6IFwiJyArIHRleHRzW2luZGV4XS50cmltKCkgKyAnXCIsIFwidFwiOiBcIicgKyB0cmFuc2xhdGVkVGV4dHNbaW5kZXhdLnRyaW0oKSArICdcIn0nKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubG9nVHJhbnNsYXRpb25zRnJvbVByb3ZpZGVyKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1snICsganNvblRyYW5zbGF0aW9ucy5qb2luKCcsJykgKyAnXScpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUucmVzcG9uc2VKU09OLmVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhib2R5RGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJhbnNsYXRlZFRleHRzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHNjcm9sbFRvVG9wKHNjcm9sbER1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG8gPSAwO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gRGVjbGFyYXRpb25zXHJcbiAgICBcclxuICAgICAgICBsZXQgY29zUGFyYW1ldGVyID0gKHdpbmRvdy5wYWdlWU9mZnNldCAtIHNjcm9sbFRvKSAvIDIsXHJcbiAgICAgICAgICAgIHNjcm9sbENvdW50ID0gMCxcclxuICAgICAgICAgICAgb2xkVGltZXN0YW1wID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChuZXdUaW1lc3RhbXA6IG51bWJlcik6IHZvaWQge1xyXG4gICAgXHJcbiAgICAgICAgICAgIGxldCB0c0RpZmYgPSBuZXdUaW1lc3RhbXAgLSBvbGRUaW1lc3RhbXA7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gUGVyZm9ybWFuY2Uubm93KCkgcG9seWZpbGwgbG9hZHMgbGF0ZSBzbyBwYXNzZWQtaW4gdGltZXN0YW1wIGlzIGEgbGFyZ2VyIG9mZnNldFxyXG4gICAgICAgICAgICAvLyBvbiB0aGUgZmlyc3QgZ28tdGhyb3VnaCB0aGFuIHdlIHdhbnQgc28gSSdtIGFkanVzdGluZyB0aGUgZGlmZmVyZW5jZSBkb3duIGhlcmUuXHJcbiAgICAgICAgICAgIC8vIFJlZ2FyZGxlc3MsIHdlIHdvdWxkIHJhdGhlciBoYXZlIGEgc2xpZ2h0bHkgc2xvd2VyIGFuaW1hdGlvbiB0aGFuIGEgYmlnIGp1bXAgc28gYSBnb29kXHJcbiAgICAgICAgICAgIC8vIHNhZmVndWFyZCwgZXZlbiBpZiB3ZSdyZSBub3QgdXNpbmcgdGhlIHBvbHlmaWxsLlxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmICh0c0RpZmYgPiAxMDApXHJcbiAgICAgICAgICAgICAgICB0c0RpZmYgPSAzMDtcclxuICAgIFxyXG4gICAgICAgICAgICBzY3JvbGxDb3VudCArPSBNYXRoLlBJIC8gKHNjcm9sbER1cmF0aW9uIC8gdHNEaWZmKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBBcyBzb29uIGFzIHdlIGNyb3NzIG92ZXIgUGksIHdlJ3JlIGFib3V0IHdoZXJlIHdlIG5lZWQgdG8gYmVcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsQ291bnQgPj0gTWF0aC5QSSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCBtb3ZlU3RlcCA9IE1hdGgucm91bmQoc2Nyb2xsVG8gKyBjb3NQYXJhbWV0ZXIgKyBjb3NQYXJhbWV0ZXIgKiBNYXRoLmNvcyhzY3JvbGxDb3VudCkpO1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgbW92ZVN0ZXApO1xyXG4gICAgICAgICAgICBvbGRUaW1lc3RhbXAgPSBuZXdUaW1lc3RhbXA7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgTWV0aG9kc1xyXG5cclxuICAgIHN0YXRpYyB1cGRhdGVDdXJyZW50TGFuZ3VhZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGxvY2FsU3RvcmFnZUxhbmd1YWdlOiBMYW5ndWFnZTtcclxuICAgICAgICBsZXQgdXJsTGFuZ3VhZ2U6IExhbmd1YWdlO1xyXG4gICAgICAgIGxldCBicm93c2VyTGFuZ3VhZ2U6IExhbmd1YWdlO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8vIExvY2FsIFN0b3JhZ2VcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZycpO1xyXG4gICAgICAgIH0gY2F0Y2h7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2NhbFN0b3JhZ2UgaXMgbm90IHN1cHBvcnRlZC4nKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IG51bGwpXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZUxhbmd1YWdlID0gdGhpcy5wYXJzZUxhbmd1YWdlKHJlc3VsdCk7XHJcblxyXG4gICAgICAgIC8vIFVSTFxyXG5cclxuICAgICAgICBpZiAodGhpcy51cmxMYW5ndWFnZUxvY2F0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB1cmxWYWx1ZTogc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudXJsTGFuZ3VhZ2VMb2NhdGlvbiA9PT0gVXJsTGFuZ3VhZ2VMb2NhdGlvbi5zdWJkaXJlY3RvcnkpXHJcbiAgICAgICAgICAgICAgICB1cmxWYWx1ZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpWzFdO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVybFZhbHVlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBpZiAodXJsVmFsdWUubGVuZ3RoID09PSAyIHx8ICh1cmxWYWx1ZS5sZW5ndGggPT09IDUgJiYgdXJsVmFsdWUuaW5kZXhPZignLScpID09PSAyKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpID09PSB1cmxWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybFZhbHVlLmluZGV4T2YoJy0nKSAhPT0gLTEgJiYgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybFZhbHVlID0gdXJsVmFsdWUuc3BsaXQoJy0nKVswXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzLmZvckVhY2goKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpID09PSB1cmxWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxMYW5ndWFnZSA9IHRoaXMucGFyc2VMYW5ndWFnZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQnJvd3NlclxyXG5cclxuICAgICAgICByZXN1bHQgPSBuYXZpZ2F0b3JbJ2xhbmd1YWdlJ10gfHwgbmF2aWdhdG9yWyd1c2VyTGFuZ3VhZ2UnXTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBicm93c2VyTGFuZ3VhZ2UgPSB0aGlzLnBhcnNlTGFuZ3VhZ2UocmVzdWx0KTtcclxuXHJcbiAgICAgICAgLy8gQ29uc29saWRhdGlvblxyXG5cclxuICAgICAgICBpZiAodXJsTGFuZ3VhZ2UgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50TGFuZ3VhZ2UodXJsTGFuZ3VhZ2UuY29kZSk7XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGxvY2FsU3RvcmFnZUxhbmd1YWdlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudExhbmd1YWdlKGxvY2FsU3RvcmFnZUxhbmd1YWdlLmNvZGUpO1xyXG5cclxuICAgICAgICBlbHNlIGlmIChicm93c2VyTGFuZ3VhZ2UgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50TGFuZ3VhZ2UoYnJvd3Nlckxhbmd1YWdlLmNvZGUpO1xyXG5cclxuICAgICAgICBlbHNlIHRoaXMuc2V0Q3VycmVudExhbmd1YWdlKHRoaXMuZGVmYXVsdExhbmd1YWdlLmNvZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgY3VycmVudExhbmd1YWdlKCk6IExhbmd1YWdlIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRMYW5ndWFnZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudExhbmd1YWdlO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRMYW5ndWFnZSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50TGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdXBkYXRlVXJsTGFuZ3VhZ2UoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnVybExhbmd1YWdlTG9jYXRpb24gPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy51cmxMYW5ndWFnZUxvY2F0aW9uID09PSBVcmxMYW5ndWFnZUxvY2F0aW9uLnN1YmRpcmVjdG9yeSkge1xyXG4gICAgICAgICAgICBsZXQgcGF0aG5hbWVTcGxpdHRlZCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRMYW5ndWFnZUNvZGUgPSBwYXRobmFtZVNwbGl0dGVkWzFdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRMYW5ndWFnZUNvZGUubGVuZ3RoID09PSAyIHx8IChjdXJyZW50TGFuZ3VhZ2VDb2RlLmxlbmd0aCA9PT0gNSAmJiBjdXJyZW50TGFuZ3VhZ2VDb2RlLmluZGV4T2YoJy0nKSA9PT0gMikpXHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZVNwbGl0dGVkWzFdID0gdGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZTtcclxuICAgICAgICAgICAgZWxzZSBwYXRobmFtZVNwbGl0dGVkLnNwbGljZSgxLCAwLCB0aGlzLmN1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuXHJcbiAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIG51bGwsIHBhdGhuYW1lU3BsaXR0ZWQuam9pbignLycpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldEN1cnJlbnRMYW5ndWFnZShsYW5ndWFnZUNvZGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRMYW5ndWFnZSA9IHRoaXMucGFyc2VMYW5ndWFnZShsYW5ndWFnZUNvZGUpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZycsIHRoaXMuX2N1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuICAgICAgICB9IGNhdGNoe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jYWxTdG9yYWdlIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlVXJsTGFuZ3VhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlRE9NKCk6IFByb21pc2U8dm9pZD4ge1xyXG5cclxuICAgICAgICAkKCdodG1sJykuYXR0cignbGFuZycsIENsb3VkVHJhbnNsYXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUpO1xyXG5cclxuICAgICAgICBpZiAoQ2xvdWRUcmFuc2xhdGlvbi5kaXJlY3Rpb24gPT09IExhbmd1YWdlRGlyZWN0aW9uLnJ0bClcclxuICAgICAgICAgICAgJCgnaHRtbCcpLmF0dHIoJ2RpcicsICdydGwnKTtcclxuICAgICAgICBlbHNlICQoJ2h0bWwnKS5yZW1vdmVBdHRyKCdkaXInKTtcclxuXHJcbiAgICAgICAgbGV0IHN0eWxlU2hlZXQ6IFN0eWxlU2hlZXQ7XHJcblxyXG4gICAgICAgICQuZWFjaChkb2N1bWVudC5zdHlsZVNoZWV0cywgZnVuY3Rpb24gKGluZGV4LCBzaGVldCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgJC5lYWNoKHNoZWV0Wydjc3NSdWxlcyddIHx8IHNoZWV0WydydWxlcyddLCBmdW5jdGlvbiAocnVsZUluZGV4LCBydWxlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChydWxlLmNzc1RleHQgPT09ICdodG1sW2Rpcj1cInJ0bFwiXSB7IGRpcmVjdGlvbjogcnRsOyB9JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldCA9IHNoZWV0O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoQ2xvdWRUcmFuc2xhdGlvbi5kaXJlY3Rpb24gPT09IExhbmd1YWdlRGlyZWN0aW9uLnJ0bCAmJiBzdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIENsb3VkVHJhbnNsYXRpb24uYWRkUlRMQ1NTKCk7XHJcblxyXG4gICAgICAgIHZhciBzZWxlY3Rpb24gPSAnKic7XHJcbiAgICAgICAgQ2xvdWRUcmFuc2xhdGlvbi5ub25UcmFuc2xhdGVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxlY3Rpb24gKz0gJzpub3QoJyArICdcIicgKyBlbGVtZW50ICsgJ1wiJyArICcpJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25TdGF0dXNlczogVHJhbnNsYXRpb25TdGF0dXNbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGUgb2YgJChzZWxlY3Rpb24pLnRvQXJyYXkoKSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0ZUVsZW1lbnQoZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0cy5mb3JFYWNoKChzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1c2VzLnB1c2goc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZSAhPT0gdGhpcy5kZWZhdWx0TGFuZ3VhZ2UuY29kZSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IG9yaWdpbmFsVGV4dHM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1c2VzLmZvckVhY2goKHN0YXR1cykgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMucmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LmZhaWxlZDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFRleHRzLnB1c2goc3RhdHVzLnRleHQucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgb3JpZ2luYWxUZXh0cyA9IG9yaWdpbmFsVGV4dHMuZmlsdGVyKHRoaXMub25seVVuaXF1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2xhdG9yUHJvdmlkZXIgPT09IDEgJiYgQ2xvdWRUcmFuc2xhdGlvbi5nZXRUcmFuc2xhdGlvbnMoQ2xvdWRUcmFuc2xhdGlvbi5jdXJyZW50TGFuZ3VhZ2UuY29kZSkudHJhbnNsYXRpb24gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYW5zbGF0ZWRUZXh0cyA9IGF3YWl0IHRoaXMuYXp1cmVBdXRvVHJhbnNsYXRlKG9yaWdpbmFsVGV4dHMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhbnNsYXRpb25zID0gdGhpcy5nZXRUcmFuc2xhdGlvbnMoQ2xvdWRUcmFuc2xhdGlvbi5jdXJyZW50TGFuZ3VhZ2UuY29kZSkudHJhbnNsYXRpb247XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGlvbnMgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VHJhbnNsYXRpb25zKENsb3VkVHJhbnNsYXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUpLnRyYW5zbGF0aW9uID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaCh0cmFuc2xhdGVkVGV4dHMsIChpbmRleCwgdGV4dCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsb3VkVHJhbnNsYXRpb24uYWRkVHJhbnNsYXRpb25WYWx1ZShDbG91ZFRyYW5zbGF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlLCBvcmlnaW5hbFRleHRzW2luZGV4XSwgdGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyBjb25zb2xlLmxvZyhlKTsgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN0YXR1cyBvZiB0cmFuc2xhdGlvblN0YXR1c2VzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMucmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5hdHRyaWJ1dGUgPT09ICd0aXRsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRUaXRsZShzdGF0dXMuZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IENsb3VkVHJhbnNsYXRpb24udHJhbnNsYXRlRWxlbWVudFRleHQoc3RhdHVzLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb1RvcCgyMDApO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRMYW5ndWFnZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmlsbEluTGFuZ3VhZ2VzKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgc2VsZWN0aW9uID0gJCgnLmNsb3VkdHJhbnNsYXRpb24tc2VsZWN0aW9uJyk7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHNlbGVjdGlvbi5hdHRyKCd0cmFuc2xhdGUnLCAnbm8nKTtcclxuXHJcbiAgICAgICAgc2VsZWN0aW9uLmh0bWwoJycpO1xyXG5cclxuICAgICAgICBsZXQgY3VycmVudExhbmd1YWdlOiBzdHJpbmcgPSB0aGlzLmN1cnJlbnRMYW5ndWFnZS5jb2RlO1xyXG5cclxuICAgICAgICBDbG91ZFRyYW5zbGF0aW9uLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAkKCcuY2xvdWR0cmFuc2xhdGlvbi1zZWxlY3Rpb24nKS5hcHBlbmQoJzxvcHRpb24gdmFsdWU9XCInICsgbGFuZ3VhZ2UuY29kZSArICdcIicgKyAobGFuZ3VhZ2UuY29kZSA9PT0gY3VycmVudExhbmd1YWdlID8gJyBzZWxlY3RlZCAnIDogJycpICsgJz4nICsgbGFuZ3VhZ2UuZGlzcGxheU5hbWUgKyAnPC9vcHRpb24+JylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY2xvdWR0cmFuc2xhdGlvbi1zZWxlY3Rpb24nLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgbGV0IGxhbmd1YWdlQ29kZSA9ICQodGhpcykudmFsKCkudG9TdHJpbmcoKTtcclxuXHJcbiAgICBpZiAobGFuZ3VhZ2VDb2RlICE9PSAnJylcclxuICAgICAgICBDbG91ZFRyYW5zbGF0aW9uLnNldEN1cnJlbnRMYW5ndWFnZShsYW5ndWFnZUNvZGUpO1xyXG5cclxuICAgIGF3YWl0IENsb3VkVHJhbnNsYXRpb24udHJhbnNsYXRlRE9NKCk7XHJcbn0pOyJdfQ==

