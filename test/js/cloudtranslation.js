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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDLENBQUM7UUFFakQsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDdEIsT0FBTztRQUVYLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWxDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFbkIsSUFBSSxlQUFlLEdBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFFeEQsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7WUFDeEMsQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQUMsTUFBTSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxlQUFlLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLENBQUE7UUFDekwsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQXAyQkEsQUFvMkJDLElBQUE7QUFFRCxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSw2QkFBNkIsRUFBRTs7Ozs7O29CQUVoRCxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUU1QyxJQUFJLFlBQVksS0FBSyxFQUFFO3dCQUNuQixnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFFdEQsV0FBTSxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsRUFBQTs7b0JBQXJDLFNBQXFDLENBQUM7Ozs7O0NBQ3pDLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xvdWRUcmFuc2xhdGlvblNldHRpbmdzIH0gZnJvbSBcIi4vSW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdG9yUHJvdmlkZXIsIFVybExhbmd1YWdlTG9jYXRpb24sIExhbmd1YWdlRGlyZWN0aW9uLCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdCB9IGZyb20gXCIuL2VudW1zXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0aW9ucywgTGFuZ3VhZ2UsIFRyYW5zbGF0aW9uVmFsdWUsIFRyYW5zbGF0aW9uU3RhdHVzIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xyXG5cclxuY29uc3QgY2xvdWRUcmFuc2xhdGlvbiA9IChzZXR0aW5ncz86IENsb3VkVHJhbnNsYXRpb25TZXR0aW5ncykgPT4gbmV3IENsb3VkVHJhbnNsYXRpb24oc2V0dGluZ3MpO1xyXG5leHBvcnQgZGVmYXVsdCBjbG91ZFRyYW5zbGF0aW9uO1xyXG5cclxuY2xhc3MgQ2xvdWRUcmFuc2xhdGlvbntcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc2V0dGluZ3M6IENsb3VkVHJhbnNsYXRpb25TZXR0aW5ncyl7XHJcbiAgICAgICAgXHJcbiAgICBDbG91ZFRyYW5zbGF0aW9uLl9zZXR0aW5ncyA9IHRoaXMubWVyZ2VTZXR0aW5ncyhzZXR0aW5ncyk7XHJcblxyXG4gICAgICAgIENsb3VkVHJhbnNsYXRpb24udXBkYXRlQ3VycmVudExhbmd1YWdlKCk7XHJcbiAgICAgICAgQ2xvdWRUcmFuc2xhdGlvbi5maWxsSW5MYW5ndWFnZXMoKTtcclxuICAgICAgICBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0ZURPTSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIG1lcmdlU2V0dGluZ3MoX3NldHRpbmdzOiBDbG91ZFRyYW5zbGF0aW9uU2V0dGluZ3MpOiBDbG91ZFRyYW5zbGF0aW9uU2V0dGluZ3Mge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmdzIDogQ2xvdWRUcmFuc2xhdGlvblNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBkZWZhdWx0TGFuZ3VhZ2U6ICdlbicsXHJcbiAgICAgICAgICAgIGxvZ1RyYW5zbGF0aW9uc0Zyb21Qcm92aWRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0b3JQcm92aWRlcjogVHJhbnNsYXRvclByb3ZpZGVyLm5vbmUgLFxyXG4gICAgICAgICAgICB0cmFuc2xhdG9yUHJvdmlkZXJLZXk6ICcnLFxyXG4gICAgICAgICAgICB1cmxMYW5ndWFnZUxvY2F0aW9uOiBVcmxMYW5ndWFnZUxvY2F0aW9uLm5vbmUsXHJcblxyXG4gICAgICAgICAgICBsYW5ndWFnZXM6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBhdHRybmFtZSBpbiBfc2V0dGluZ3MpIFxyXG4gICAgICAgIHNldHRpbmdzW2F0dHJuYW1lXSA9IF9zZXR0aW5nc1thdHRybmFtZV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByaXZhdGUgVmFyaWFibGVzXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3RyYW5zbGF0aW9uc0xpc3Q6IFRyYW5zbGF0aW9uc1tdO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2RlZmF1bHRMYW5ndWFnZTogTGFuZ3VhZ2U7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfY3VycmVudExhbmd1YWdlOiBMYW5ndWFnZTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9zdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9zZXR0aW5ncyA6IENsb3VkVHJhbnNsYXRpb25TZXR0aW5ncztcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgdHJhbnNsYXRpb25zTGlzdCgpOiBUcmFuc2xhdGlvbnNbXSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl90cmFuc2xhdGlvbnNMaXN0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zbGF0aW9uc0xpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zbGF0aW9uc0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYWRkVHJhbnNsYXRpb25WYWx1ZShsYW5ndWFnZUNvZGU6IHN0cmluZywgZGVmYXVsdFRleHQ6IHN0cmluZywgdHJhbnNsYXRlZFRleHQ6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25zID0gdGhpcy5nZXRUcmFuc2xhdGlvbnMobGFuZ3VhZ2VDb2RlKTtcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9ucyA9IG5ldyBUcmFuc2xhdGlvbnMoKTtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb25zLmxhbmd1YWdlQ29kZSA9IGxhbmd1YWdlQ29kZTtcclxuICAgICAgICAgICAgdGhpcy5fdHJhbnNsYXRpb25zTGlzdC5wdXNoKHRyYW5zbGF0aW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25WYWx1ZSA9IG5ldyBUcmFuc2xhdGlvblZhbHVlKCk7XHJcbiAgICAgICAgdHJhbnNsYXRpb25WYWx1ZS5kZWZhdWx0ID0gZGVmYXVsdFRleHQ7XHJcbiAgICAgICAgdHJhbnNsYXRpb25WYWx1ZS50ZXh0ID0gdHJhbnNsYXRlZFRleHQ7XHJcblxyXG4gICAgICAgIHRyYW5zbGF0aW9ucy50cmFuc2xhdGlvbi5wdXNoKHRyYW5zbGF0aW9uVmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0VHJhbnNsYXRpb25zKGxhbmd1YWdlQ29kZTogc3RyaW5nKTogVHJhbnNsYXRpb25zIHtcclxuICAgICAgICBsZXQgdDogVHJhbnNsYXRpb25zO1xyXG5cclxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uc0xpc3QuZm9yRWFjaCgodHJhbnNsYXRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodHJhbnNsYXRpb25zLmxhbmd1YWdlQ29kZSA9PT0gbGFuZ3VhZ2VDb2RlKVxyXG4gICAgICAgICAgICAgICAgdCA9IHRyYW5zbGF0aW9ucztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBQcm9wZXJ0aWVzXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IG5vblRyYW5zbGF0ZWRFbGVtZW50cygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsnY29kZScsICdodG1sJywgJ2hlYWQnLCAnaGVhZCA+IConXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgc3R5bGVQcm9wZXJ0aWVzVG9Td2l0Y2goKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBwcm9wZXJ0aWVzID0gWydwYWRkaW5nJywgJ21hcmdpbiddO1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gW107XHJcblxyXG4gICAgICAgIHByb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+e1xyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2gocHJvcGVydHkgKyAnLWxlZnQnKTtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHByb3BlcnR5ICsgJy1yaWdodCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgc3R5bGVQcm9wZXJ0aWVzVG9PcHBvc2l0ZSgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsndGV4dC1hbGlnbicsICdmbG9hdCcsICdiYWNrZ3JvdW5kLXBvc2l0aW9uLXgnXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgdHJhbnNsYXRvclByb3ZpZGVyS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLnRyYW5zbGF0b3JQcm92aWRlcktleTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgdHJhbnNsYXRvclByb3ZpZGVyKCk6IFRyYW5zbGF0b3JQcm92aWRlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLnRyYW5zbGF0b3JQcm92aWRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgdXJsTGFuZ3VhZ2VMb2NhdGlvbigpOiBVcmxMYW5ndWFnZUxvY2F0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MudXJsTGFuZ3VhZ2VMb2NhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgbG9nVHJhbnNsYXRpb25zRnJvbVByb3ZpZGVyKCk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MubG9nVHJhbnNsYXRpb25zRnJvbVByb3ZpZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldCBzdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3N1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzVHJhbnNsYXRlQXR0cmlidXRlID0gJCgnYm9keScpWzBdLnRyYW5zbGF0ZSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGRvVHJhbnNsYXRlRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdXBwb3J0c1RyYW5zbGF0ZUF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC50cmFuc2xhdGUgPT09IGZhbHNlIHx8ICgkKGVsZW1lbnQpLmNsb3Nlc3QoJypbdHJhbnNsYXRlXScpWzBdICE9PSB1bmRlZmluZWQgJiYgJChlbGVtZW50KS5jbG9zZXN0KCcqW3RyYW5zbGF0ZV0nKVswXS50cmFuc2xhdGUgPT09IGZhbHNlKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhdHRyaWJ1dGUgPSAkKGVsZW1lbnQpLmF0dHIoJ3RyYW5zbGF0ZScpO1xyXG5cclxuICAgICAgICBpZiAoYXR0cmlidXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuY2xvc2VzdCgnKlt0cmFuc2xhdGVdJylbMF0gIT09IHVuZGVmaW5lZCAmJiAkKGVsZW1lbnQpLmNsb3Nlc3QoJypbdHJhbnNsYXRlXScpLmF0dHIoJ3RyYW5zbGF0ZScpLnRvTG93ZXJDYXNlKCkgPT09ICdubycpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXR0cmlidXRlLnRvTG93ZXJDYXNlKCkgPT09ICdubycpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHVibGljIFByb3BlcnRpZXNcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRMYW5ndWFnZSgpOiBMYW5ndWFnZSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9kZWZhdWx0TGFuZ3VhZ2UgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRMYW5ndWFnZTtcclxuXHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZXMuZm9yRWFjaCgobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gdGhpcy5fc2V0dGluZ3MuZGVmYXVsdExhbmd1YWdlLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWZhdWx0TGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRMYW5ndWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGxhbmd1YWdlcygpOiBMYW5ndWFnZVtdIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmxhbmd1YWdlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcml2YXRlIE1ldGhvZHNcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBwYXJzZUxhbmd1YWdlKHJlcXVlc3RMYW5ndWFnZTogc3RyaW5nKTogTGFuZ3VhZ2Uge1xyXG5cclxuICAgICAgICByZXF1ZXN0TGFuZ3VhZ2UgPSByZXF1ZXN0TGFuZ3VhZ2UudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQ6IExhbmd1YWdlO1xyXG5cclxuICAgICAgICB0aGlzLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobGFuZ3VhZ2UuY29kZS50b0xvd2VyQ2FzZSgpID09PSByZXF1ZXN0TGFuZ3VhZ2UpXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsYW5ndWFnZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgICAgICBpZiAocmVxdWVzdExhbmd1YWdlLmluZGV4T2YoJy0nKSAhPT0gLSAxKVxyXG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5ndWFnZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsYW5ndWFnZS5jb2RlLnRvTG93ZXJDYXNlKCkgPT09IHJlcXVlc3RMYW5ndWFnZS5zcGxpdCgnLScpWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxhbmd1YWdlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0TGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IGRpcmVjdGlvbigpOiBMYW5ndWFnZURpcmVjdGlvbiB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRMYW5ndWFnZS5kaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRpb25zKCk6IFByb21pc2U8VHJhbnNsYXRpb25zPiB7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvbnMgPSB0aGlzLmdldFRyYW5zbGF0aW9ucyhDbG91ZFRyYW5zbGF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9ucyAhPT0gdW5kZWZpbmVkICYmIHRyYW5zbGF0aW9ucy50cmFuc2xhdGlvbiA9PT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBlbHNlIGlmICh0cmFuc2xhdGlvbnMgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9ucztcclxuXHJcbiAgICAgICAgbGV0IGpzb25QYXRoID0gJ3RyYW5zbGF0aW9uLycgKyB0aGlzLmN1cnJlbnRMYW5ndWFnZS5jb2RlLnRvTG93ZXJDYXNlKCkgKyAnLmpzb24nO1xyXG5cclxuICAgICAgICBsZXQgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGZldGNoKGpzb25QYXRoKTtcclxuXHJcbiAgICAgICAgaWYgKCFmZXRjaFJlc3BvbnNlLm9rKSB7XHJcblxyXG4gICAgICAgICAgICAgICAganNvblBhdGggPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsnLycgKyBqc29uUGF0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBmZXRjaFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goanNvblBhdGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZmV0Y2hSZXNwb25zZS5vaykge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBudWxsVHJhbnNsYXRpb25zID0gbmV3IFRyYW5zbGF0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgbnVsbFRyYW5zbGF0aW9ucy5sYW5ndWFnZUNvZGUgPSBDbG91ZFRyYW5zbGF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlO1xyXG4gICAgICAgICAgICAgICAgbnVsbFRyYW5zbGF0aW9ucy50cmFuc2xhdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNsYXRpb25zTGlzdC5wdXNoKG51bGxUcmFuc2xhdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBkYXRhKVxyXG4gICAgICAgICAgICB0aGlzLmFkZFRyYW5zbGF0aW9uVmFsdWUoQ2xvdWRUcmFuc2xhdGlvbi5jdXJyZW50TGFuZ3VhZ2UuY29kZSwgdmFsdWVbJ28nXSwgdmFsdWVbJ3QnXSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRyYW5zbGF0aW9ucyhDbG91ZFRyYW5zbGF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgZ2V0VHJhbnNsYXRpb24odGV4dDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGUgPT09IHRoaXMuZGVmYXVsdExhbmd1YWdlLmNvZGUpXHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xyXG5cclxuICAgICAgICB2YXIgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uVmFsdWUgPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgQ2xvdWRUcmFuc2xhdGlvbi50cmFuc2xhdGlvbnMoKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdHMgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgcmVzdWx0cy50cmFuc2xhdGlvbi5mb3JFYWNoKCh0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAodC5kZWZhdWx0LnRyaW0oKSA9PT0gdGV4dC50cmltKCkpXHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbiA9IHQ7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9uID09PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJhbnNsYXRpb24udGV4dC5yZXBsYWNlKHRleHQudHJpbSgpLCB0cmFuc2xhdGlvbi50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB0cmFuc2xhdGVFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogUHJvbWlzZTxUcmFuc2xhdGlvblN0YXR1c1tdPiB7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgaWYgKENsb3VkVHJhbnNsYXRpb24uZGlyZWN0aW9uID09PSBMYW5ndWFnZURpcmVjdGlvbi5ydGwpIHtcclxuICAgICAgICAgICAgbGV0IHN0eWxlID0gZWxlbWVudC5zdHlsZS5jc3NUZXh0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0eWxlICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmRhdGEoJ19jdG9yaWdpbmFsc3R5bGUnLCBzdHlsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJ0bFN0eWxlID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LnN0eWxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5TmFtZSA9IGVsZW1lbnQuc3R5bGVbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChDbG91ZFRyYW5zbGF0aW9uLnN0eWxlUHJvcGVydGllc1RvT3Bwb3NpdGUuaW5kZXhPZihwcm9wZXJ0eU5hbWUpICE9PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnRsU3R5bGUgKz0gQ2xvdWRUcmFuc2xhdGlvbi5vcHBvc2l0ZVJUTENTU1ZhbHVlcyhlbGVtZW50LCBwcm9wZXJ0eU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKENsb3VkVHJhbnNsYXRpb24uc3R5bGVQcm9wZXJ0aWVzVG9Td2l0Y2guaW5kZXhPZihwcm9wZXJ0eU5hbWUpICE9PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnRsU3R5bGUgKz0gQ2xvdWRUcmFuc2xhdGlvbi5zd2l0Y2hSVExDU1NWYWx1ZXMoZWxlbWVudCwgcHJvcGVydHlOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHJ0bFN0eWxlICs9IHByb3BlcnR5TmFtZSArICc6ICcgKyBlbGVtZW50LnN0eWxlW3Byb3BlcnR5TmFtZV0gKyAnOyAnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChydGxTdHlsZSAhPT0gc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmRhdGEoJ19jdG9yaWdpbmFsc3R5bGUnLCBzdHlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gcnRsU3R5bGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IG9yaWdpbmFsU3R5bGUgPSAkKGVsZW1lbnQpLmRhdGEoJ19jdG9yaWdpbmFsc3R5bGUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFN0eWxlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5hdHRyKCdzdHlsZScsIG9yaWdpbmFsU3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmVEYXRhKCdfY3RvcmlnaW5hbHN0eWxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElnbm9yZSBhdHRyaWJ1dGU6IHRyYW5zbGF0ZT1cIm5vXCJcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmRvVHJhbnNsYXRlRWxlbWVudChlbGVtZW50KSlcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICAvLyBJZ25vcmUgbGlua3Mgd2l0aCBtYWlsdG86IGFuZCB0ZWw6XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdBJykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRIcmVmID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRIcmVmLmluZGV4T2YoJzonKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRIcmVmID0gZWxlbWVudEhyZWYuc3BsaXQoJzonKVswXS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50SHJlZiA9PT0gJ21haWx0bycgfHwgZWxlbWVudEhyZWYgPT09ICd0ZWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RpcicsICdsdHInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQcm9jZWVkIHdpdGggdGhlIHRyYW5zbGF0aW9uXHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblN0YXR1c2VzOiBUcmFuc2xhdGlvblN0YXR1c1tdID0gW107XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBhd2FpdCBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRUZXh0KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1c2VzLnB1c2goc3RhdHVzKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGF3YWl0IENsb3VkVHJhbnNsYXRpb24udHJhbnNsYXRlRWxlbWVudFRpdGxlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1c2VzLnB1c2goc3RhdHVzKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb25seVVuaXF1ZSh2YWx1ZSwgaW5kZXgsIHNlbGYpIHtcclxuICAgICAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlRWxlbWVudFRleHQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBQcm9taXNlPFRyYW5zbGF0aW9uU3RhdHVzPiB7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAnc2NyaXB0JylcclxuICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0Lmlnbm9yZWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjaGlsZE5vZGUgPSBlbGVtZW50LmNoaWxkTm9kZXNbMF07XHJcblxyXG4gICAgICAgIGlmIChjaGlsZE5vZGUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5pZ25vcmVkKTtcclxuXHJcbiAgICAgICAgaWYgKGNoaWxkTm9kZS5ub2RlVmFsdWUgPT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25TdGF0dXMoZWxlbWVudCwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuaWdub3JlZCk7XHJcblxyXG4gICAgICAgIGlmIChjaGlsZE5vZGUubm9kZVZhbHVlLnRyaW0oKSA9PT0gJycpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25TdGF0dXMoZWxlbWVudCwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuaWdub3JlZCk7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblN0YXR1cyA9IGF3YWl0IENsb3VkVHJhbnNsYXRpb24udHJhbnNsYXRlKGVsZW1lbnQsICdfY3RvcmlnaW5hbHRleHQnLCBjaGlsZE5vZGUubm9kZVZhbHVlKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0cmFuc2xhdGlvblN0YXR1cy5yZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuc3VjY2VlZGVkOlxyXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlLm5vZGVWYWx1ZSA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25TdGF0dXM7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LmZhaWxlZDpcclxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZS5ub2RlVmFsdWUgPSB0cmFuc2xhdGlvblN0YXR1cy50ZXh0O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXMuYXR0cmlidXRlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlRWxlbWVudFRpdGxlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogUHJvbWlzZTxUcmFuc2xhdGlvblN0YXR1cz4ge1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25TdGF0dXMgPSBhd2FpdCBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0ZShlbGVtZW50LCAnX2N0b3JpZ2luYWx0aXRsZScsIGVsZW1lbnQudGl0bGUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRyYW5zbGF0aW9uU3RhdHVzLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5zdWNjZWVkZWQ6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRpdGxlID0gdHJhbnNsYXRpb25TdGF0dXMudGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50aXRsZSA9IHRyYW5zbGF0aW9uU3RhdHVzLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvblN0YXR1cy5hdHRyaWJ1dGUgPSAndGl0bGUnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uU3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBkYXRhVmFsdWVOYW1lOiBzdHJpbmcsIGN1cnJlbnRWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTxUcmFuc2xhdGlvblN0YXR1cz4ge1xyXG5cclxuICAgICAgICBsZXQgb3JpZ2luYWxUZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGlmICgkKGVsZW1lbnQpLmRhdGEoZGF0YVZhbHVlTmFtZSkgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgb3JpZ2luYWxUZXh0ID0gJChlbGVtZW50KS5kYXRhKGRhdGFWYWx1ZU5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoKG9yaWdpbmFsVGV4dCA9PT0gdW5kZWZpbmVkIHx8IG9yaWdpbmFsVGV4dC50cmltKCkgPT09ICcnKSAmJiAoY3VycmVudFZhbHVlID09PSBudWxsIHx8IGN1cnJlbnRWYWx1ZS50cmltKCkgPT09ICcnKSlcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvblN0YXR1cyhlbGVtZW50LCBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5pZ25vcmVkKTtcclxuXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsVGV4dCA9PT0gdW5kZWZpbmVkIHx8IG9yaWdpbmFsVGV4dC50cmltKCkgPT09ICcnKVxyXG4gICAgICAgICAgICBvcmlnaW5hbFRleHQgPSBjdXJyZW50VmFsdWU7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGVkVGV4dCA9IGF3YWl0IENsb3VkVHJhbnNsYXRpb24uZ2V0VHJhbnNsYXRpb24ob3JpZ2luYWxUZXh0KTtcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0ZWRUZXh0ID09PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlRGF0YShkYXRhVmFsdWVOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHJhbnNsYXRpb25TdGF0dXMoZWxlbWVudCwgVHJhbnNsYXRpb25TdGF0dXNSZXN1bHQuZmFpbGVkLCBvcmlnaW5hbFRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0ZWRUZXh0ICE9PSBvcmlnaW5hbFRleHQpXHJcbiAgICAgICAgICAgICQoZWxlbWVudCkuZGF0YShkYXRhVmFsdWVOYW1lLCBvcmlnaW5hbFRleHQpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmVEYXRhKGRhdGFWYWx1ZU5hbWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uU3RhdHVzKGVsZW1lbnQsIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LnN1Y2NlZWRlZCwgdHJhbnNsYXRlZFRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFkZFJUTENTUygpOiB2b2lkIHtcclxuICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xyXG4gICAgICAgIHN0eWxlLmlubmVySFRNTCA9IENsb3VkVHJhbnNsYXRpb24uZ2VuZXJhdGVSVExDU1MoKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZW5lcmF0ZVJUTENTUygpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBsZXQgc3R5bGUgPSAnaHRtbFtkaXI9XCJydGxcIl0ge2RpcmVjdGlvbjogcnRsO30nO1xyXG5cclxuICAgICAgICAkLmVhY2goZG9jdW1lbnQuc3R5bGVTaGVldHMsIGZ1bmN0aW9uIChpbmRleCwgc2hlZXQpIHtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZSArPSBDbG91ZFRyYW5zbGF0aW9uLmdldFJ1bGVzU3R5bGUoc2hlZXRbJ2Nzc1J1bGVzJ10gfHwgc2hlZXRbJ3J1bGVzJ10pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldFJ1bGVzU3R5bGUocnVsZXMpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcblxyXG4gICAgICAgICQuZWFjaChydWxlcywgZnVuY3Rpb24gKGluZGV4LCBydWxlKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAocnVsZS50eXBlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVkaWFTdHlsZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lZGlhU3R5bGUgPSBDbG91ZFRyYW5zbGF0aW9uLmdldFJ1bGVzU3R5bGUocnVsZVsnY3NzUnVsZXMnXSB8fCBydWxlWydydWxlcyddKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1lZGlhU3R5bGUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdAbWVkaWEgJyArIHJ1bGUuY29uZGl0aW9uVGV4dCArICd7JztcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gbWVkaWFTdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ30nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocnVsZS5zdHlsZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNlbGVjdG9yU3R5bGUgPSAnJztcclxuXHJcbiAgICAgICAgICAgIENsb3VkVHJhbnNsYXRpb24uc3R5bGVQcm9wZXJ0aWVzVG9PcHBvc2l0ZS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3JTdHlsZSArPSBDbG91ZFRyYW5zbGF0aW9uLm9wcG9zaXRlUlRMQ1NTVmFsdWVzKHJ1bGUsIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBDbG91ZFRyYW5zbGF0aW9uLnN0eWxlUHJvcGVydGllc1RvU3dpdGNoLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvclN0eWxlICs9IENsb3VkVHJhbnNsYXRpb24uc3dpdGNoUlRMQ1NTVmFsdWVzKHJ1bGUsIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBJbnNlcnQgQ2xhc3NcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RvclN0eWxlICE9PSAnJylcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnaHRtbFtkaXI9cnRsXSAnICsgcnVsZS5zZWxlY3RvclRleHQgKyAneycgKyBzZWxlY3RvclN0eWxlICsgJ30nO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzd2l0Y2hSVExDU1NWYWx1ZXMocnVsZSwgbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgbmFtZSA9IG5hbWUuc3BsaXQoJy0nKVswXTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBsZWZ0UHJvcGVydHkgPSBuYW1lICsgJy1sZWZ0JztcclxuICAgICAgICBjb25zdCByaWdodFByb3BlcnR5ID0gbmFtZSArICctcmlnaHQnO1xyXG4gICAgICAgIGxldCBsZWZ0VmFsdWUgPSBydWxlLnN0eWxlW2xlZnRQcm9wZXJ0eV07XHJcbiAgICAgICAgbGV0IHJpZ2h0VmFsdWUgPSBydWxlLnN0eWxlW3JpZ2h0UHJvcGVydHldO1xyXG5cclxuICAgICAgICBpZiAobGVmdFZhbHVlID09PSAnJyAmJiByaWdodFZhbHVlID09PSAnJylcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG5cclxuICAgICAgICBpZiAobGVmdFZhbHVlID09PSByaWdodFZhbHVlKVxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgIGlmIChsZWZ0VmFsdWUgPT09ICcnKVxyXG4gICAgICAgICAgICBsZWZ0VmFsdWUgPSAnaW5pdGlhbCc7XHJcblxyXG4gICAgICAgIGlmIChyaWdodFZhbHVlID09PSAnJylcclxuICAgICAgICAgICAgcmlnaHRWYWx1ZSA9ICdpbml0aWFsJztcclxuXHJcbiAgICAgICAgbGV0IHN0eWxlID0gbGVmdFByb3BlcnR5ICsgJzogJyArIHJpZ2h0VmFsdWUgKyAnOycgKyByaWdodFByb3BlcnR5ICsgJzogJyArIGxlZnRWYWx1ZSArICc7JztcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIG9wcG9zaXRlUlRMQ1NTVmFsdWVzKHJ1bGUsIG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGxldCB2YWx1ZTogc3RyaW5nID0gcnVsZS5zdHlsZVtuYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSAnJylcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG5cclxuICAgICAgICBsZXQgc3R5bGUgPSAnJztcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSAnbGVmdCcpXHJcbiAgICAgICAgICAgIHN0eWxlICs9IG5hbWUgKyAnOiByaWdodDsnXHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09ICdyaWdodCcpXHJcbiAgICAgICAgICAgIHN0eWxlICs9IG5hbWUgKyAnOiBsZWZ0OydcclxuICAgICAgICBlbHNlIGlmIChDbG91ZFRyYW5zbGF0aW9uLmNhbkJlTmVnYXRpdmUodmFsdWUpKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUuaW5kZXhPZignLScpID09PSAwKVxyXG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gbmFtZSArICc6ICcgKyB2YWx1ZS5zdWJzdHIoMSkgKyAnOydcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gbmFtZSArICc6IC0nICsgdmFsdWUgKyAnOydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdHlsZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBjYW5CZU5lZ2F0aXZlKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgdW5pdGVzOiBzdHJpbmdbXSA9IFsncHgnLCAncHQnLCAncGMnLCAnY20nLCAnbW0nLCAnaW4nLCAnZW0nLCAncmVtJywgJ3Z3JywgJ3ZoJywgJ2V4JywgJ2NoJywgJ3ZtaW4nLCAndm1heCcsICclJ107XHJcblxyXG4gICAgICAgIGxldCBpc1RydWUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdW5pdGVzLmZvckVhY2goKHVuaXQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YodW5pdCkgPiAwICYmIHZhbHVlLmluZGV4T2YoJyAnKSA9PT0gLTEpXHJcbiAgICAgICAgICAgICAgICBpc1RydWUgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNUcnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGF6dXJlQXV0b1RyYW5zbGF0ZSh0ZXh0czogc3RyaW5nW10pOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcblxyXG4gICAgICAgIGlmICh0ZXh0cy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgbGV0IGJvZHlEYXRhID0gJyc7XHJcblxyXG4gICAgICAgIHRleHRzLmZvckVhY2goKHRleHQpID0+IHsgYm9keURhdGEgKz0gJ3tcIlRleHRcIjogXCInICsgdGV4dCArICdcIn0sJyB9KTtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0ZWRUZXh0czogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuY29nbml0aXZlLm1pY3Jvc29mdHRyYW5zbGF0b3IuY29tL3RyYW5zbGF0ZT9hcGktdmVyc2lvbj0zLjAmZnJvbT0nICsgdGhpcy5kZWZhdWx0TGFuZ3VhZ2UuY29kZSArICcmdG89JyArIHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiAnWycgKyBib2R5RGF0YSArICddJyxcclxuICAgICAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICh4aHJPYmopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB4aHJPYmouc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgeGhyT2JqLnNldFJlcXVlc3RIZWFkZXIoXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCIsIHRoaXMudHJhbnNsYXRvclByb3ZpZGVyS2V5KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBqc29uVHJhbnNsYXRpb25zID0gW107XHJcblxyXG4gICAgICAgICAgICAkLmVhY2goZGF0YSwgKGluZGV4LCB0cmFuc2xhdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZWRUZXh0c1tpbmRleF0gPSB0cmFuc2xhdGlvbnMudHJhbnNsYXRpb25zWzBdLnRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9nVHJhbnNsYXRpb25zRnJvbVByb3ZpZGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIGpzb25UcmFuc2xhdGlvbnMucHVzaCgne1wib1wiOiBcIicgKyB0ZXh0c1tpbmRleF0udHJpbSgpICsgJ1wiLCBcInRcIjogXCInICsgdHJhbnNsYXRlZFRleHRzW2luZGV4XS50cmltKCkgKyAnXCJ9Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ1RyYW5zbGF0aW9uc0Zyb21Qcm92aWRlcilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJyArIGpzb25UcmFuc2xhdGlvbnMuam9pbignLCcpICsgJ10nKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlSlNPTi5lcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYm9keURhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZWRUZXh0cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzY3JvbGxUb1RvcChzY3JvbGxEdXJhdGlvbjogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvID0gMDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIERlY2xhcmF0aW9uc1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGNvc1BhcmFtZXRlciA9ICh3aW5kb3cucGFnZVlPZmZzZXQgLSBzY3JvbGxUbykgLyAyLFxyXG4gICAgICAgICAgICBzY3JvbGxDb3VudCA9IDAsXHJcbiAgICAgICAgICAgIG9sZFRpbWVzdGFtcCA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAobmV3VGltZXN0YW1wOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgdHNEaWZmID0gbmV3VGltZXN0YW1wIC0gb2xkVGltZXN0YW1wO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIFBlcmZvcm1hbmNlLm5vdygpIHBvbHlmaWxsIGxvYWRzIGxhdGUgc28gcGFzc2VkLWluIHRpbWVzdGFtcCBpcyBhIGxhcmdlciBvZmZzZXRcclxuICAgICAgICAgICAgLy8gb24gdGhlIGZpcnN0IGdvLXRocm91Z2ggdGhhbiB3ZSB3YW50IHNvIEknbSBhZGp1c3RpbmcgdGhlIGRpZmZlcmVuY2UgZG93biBoZXJlLlxyXG4gICAgICAgICAgICAvLyBSZWdhcmRsZXNzLCB3ZSB3b3VsZCByYXRoZXIgaGF2ZSBhIHNsaWdodGx5IHNsb3dlciBhbmltYXRpb24gdGhhbiBhIGJpZyBqdW1wIHNvIGEgZ29vZFxyXG4gICAgICAgICAgICAvLyBzYWZlZ3VhcmQsIGV2ZW4gaWYgd2UncmUgbm90IHVzaW5nIHRoZSBwb2x5ZmlsbC5cclxuICAgIFxyXG4gICAgICAgICAgICBpZiAodHNEaWZmID4gMTAwKVxyXG4gICAgICAgICAgICAgICAgdHNEaWZmID0gMzA7XHJcbiAgICBcclxuICAgICAgICAgICAgc2Nyb2xsQ291bnQgKz0gTWF0aC5QSSAvIChzY3JvbGxEdXJhdGlvbiAvIHRzRGlmZik7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQXMgc29vbiBhcyB3ZSBjcm9zcyBvdmVyIFBpLCB3ZSdyZSBhYm91dCB3aGVyZSB3ZSBuZWVkIHRvIGJlXHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKHNjcm9sbENvdW50ID49IE1hdGguUEkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgbW92ZVN0ZXAgPSBNYXRoLnJvdW5kKHNjcm9sbFRvICsgY29zUGFyYW1ldGVyICsgY29zUGFyYW1ldGVyICogTWF0aC5jb3Moc2Nyb2xsQ291bnQpKTtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIG1vdmVTdGVwKTtcclxuICAgICAgICAgICAgb2xkVGltZXN0YW1wID0gbmV3VGltZXN0YW1wO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHVibGljIE1ldGhvZHNcclxuXHJcbiAgICBzdGF0aWMgdXBkYXRlQ3VycmVudExhbmd1YWdlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBsb2NhbFN0b3JhZ2VMYW5ndWFnZTogTGFuZ3VhZ2U7XHJcbiAgICAgICAgbGV0IHVybExhbmd1YWdlOiBMYW5ndWFnZTtcclxuICAgICAgICBsZXQgYnJvd3Nlckxhbmd1YWdlOiBMYW5ndWFnZTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdDogc3RyaW5nO1xyXG5cclxuICAgICAgICAvLyBMb2NhbCBTdG9yYWdlXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmcnKTtcclxuICAgICAgICB9IGNhdGNoe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jYWxTdG9yYWdlIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzdWx0ICE9PSBudWxsKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2VMYW5ndWFnZSA9IHRoaXMucGFyc2VMYW5ndWFnZShyZXN1bHQpO1xyXG5cclxuICAgICAgICAvLyBVUkxcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXJsTGFuZ3VhZ2VMb2NhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdXJsVmFsdWU6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVybExhbmd1YWdlTG9jYXRpb24gPT09IFVybExhbmd1YWdlTG9jYXRpb24uc3ViZGlyZWN0b3J5KVxyXG4gICAgICAgICAgICAgICAgdXJsVmFsdWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVsxXTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1cmxWYWx1ZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgaWYgKHVybFZhbHVlLmxlbmd0aCA9PT0gMiB8fCAodXJsVmFsdWUubGVuZ3RoID09PSA1ICYmIHVybFZhbHVlLmluZGV4T2YoJy0nKSA9PT0gMikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXMuZm9yRWFjaCgobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gdXJsVmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cmxWYWx1ZS5pbmRleE9mKCctJykgIT09IC0xICYmIHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxWYWx1ZSA9IHVybFZhbHVlLnNwbGl0KCctJylbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlcy5mb3JFYWNoKChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlLmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gdXJsVmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsTGFuZ3VhZ2UgPSB0aGlzLnBhcnNlTGFuZ3VhZ2UocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJyb3dzZXJcclxuXHJcbiAgICAgICAgcmVzdWx0ID0gbmF2aWdhdG9yWydsYW5ndWFnZSddIHx8IG5hdmlnYXRvclsndXNlckxhbmd1YWdlJ107XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgYnJvd3Nlckxhbmd1YWdlID0gdGhpcy5wYXJzZUxhbmd1YWdlKHJlc3VsdCk7XHJcblxyXG4gICAgICAgIC8vIENvbnNvbGlkYXRpb25cclxuXHJcbiAgICAgICAgaWYgKHVybExhbmd1YWdlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudExhbmd1YWdlKHVybExhbmd1YWdlLmNvZGUpO1xyXG5cclxuICAgICAgICBlbHNlIGlmIChsb2NhbFN0b3JhZ2VMYW5ndWFnZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRMYW5ndWFnZShsb2NhbFN0b3JhZ2VMYW5ndWFnZS5jb2RlKTtcclxuXHJcbiAgICAgICAgZWxzZSBpZiAoYnJvd3Nlckxhbmd1YWdlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudExhbmd1YWdlKGJyb3dzZXJMYW5ndWFnZS5jb2RlKTtcclxuXHJcbiAgICAgICAgZWxzZSB0aGlzLnNldEN1cnJlbnRMYW5ndWFnZSh0aGlzLmRlZmF1bHRMYW5ndWFnZS5jb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnRMYW5ndWFnZSgpOiBMYW5ndWFnZSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50TGFuZ3VhZ2UgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRMYW5ndWFnZTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50TGFuZ3VhZ2UoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudExhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHVwZGF0ZVVybExhbmd1YWdlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy51cmxMYW5ndWFnZUxvY2F0aW9uID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXJsTGFuZ3VhZ2VMb2NhdGlvbiA9PT0gVXJsTGFuZ3VhZ2VMb2NhdGlvbi5zdWJkaXJlY3RvcnkpIHtcclxuICAgICAgICAgICAgbGV0IHBhdGhuYW1lU3BsaXR0ZWQgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50TGFuZ3VhZ2VDb2RlID0gcGF0aG5hbWVTcGxpdHRlZFsxXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50TGFuZ3VhZ2VDb2RlLmxlbmd0aCA9PT0gMiB8fCAoY3VycmVudExhbmd1YWdlQ29kZS5sZW5ndGggPT09IDUgJiYgY3VycmVudExhbmd1YWdlQ29kZS5pbmRleE9mKCctJykgPT09IDIpKVxyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWVTcGxpdHRlZFsxXSA9IHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGU7XHJcbiAgICAgICAgICAgIGVsc2UgcGF0aG5hbWVTcGxpdHRlZC5zcGxpY2UoMSwgMCwgdGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZSk7XHJcblxyXG4gICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCBwYXRobmFtZVNwbGl0dGVkLmpvaW4oJy8nKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRDdXJyZW50TGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50TGFuZ3VhZ2UgPSB0aGlzLnBhcnNlTGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmcnLCB0aGlzLl9jdXJyZW50TGFuZ3VhZ2UuY29kZSk7XHJcbiAgICAgICAgfSBjYXRjaHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvY2FsU3RvcmFnZSBpcyBub3Qgc3VwcG9ydGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVVybExhbmd1YWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIHRyYW5zbGF0ZURPTSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHJcbiAgICAgICAgJCgnaHRtbCcpLmF0dHIoJ2xhbmcnLCBDbG91ZFRyYW5zbGF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuXHJcbiAgICAgICAgaWYgKENsb3VkVHJhbnNsYXRpb24uZGlyZWN0aW9uID09PSBMYW5ndWFnZURpcmVjdGlvbi5ydGwpXHJcbiAgICAgICAgICAgICQoJ2h0bWwnKS5hdHRyKCdkaXInLCAncnRsJyk7XHJcbiAgICAgICAgZWxzZSAkKCdodG1sJykucmVtb3ZlQXR0cignZGlyJyk7XHJcblxyXG4gICAgICAgIGxldCBzdHlsZVNoZWV0OiBTdHlsZVNoZWV0O1xyXG5cclxuICAgICAgICAkLmVhY2goZG9jdW1lbnQuc3R5bGVTaGVldHMsIGZ1bmN0aW9uIChpbmRleCwgc2hlZXQpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICQuZWFjaChzaGVldFsnY3NzUnVsZXMnXSB8fCBzaGVldFsncnVsZXMnXSwgZnVuY3Rpb24gKHJ1bGVJbmRleCwgcnVsZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocnVsZS5jc3NUZXh0ID09PSAnaHRtbFtkaXI9XCJydGxcIl0geyBkaXJlY3Rpb246IHJ0bDsgfScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQgPSBzaGVldDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKENsb3VkVHJhbnNsYXRpb24uZGlyZWN0aW9uID09PSBMYW5ndWFnZURpcmVjdGlvbi5ydGwgJiYgc3R5bGVTaGVldCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBDbG91ZFRyYW5zbGF0aW9uLmFkZFJUTENTUygpO1xyXG5cclxuICAgICAgICB2YXIgc2VsZWN0aW9uID0gJyonO1xyXG4gICAgICAgIENsb3VkVHJhbnNsYXRpb24ubm9uVHJhbnNsYXRlZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgc2VsZWN0aW9uICs9ICc6bm90KCcgKyAnXCInICsgZWxlbWVudCArICdcIicgKyAnKSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9uU3RhdHVzZXM6IFRyYW5zbGF0aW9uU3RhdHVzW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBlIG9mICQoc2VsZWN0aW9uKS50b0FycmF5KCkpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgQ2xvdWRUcmFuc2xhdGlvbi50cmFuc2xhdGVFbGVtZW50KGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3VsdHMuZm9yRWFjaCgoc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXNlcy5wdXNoKHN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExhbmd1YWdlLmNvZGUgIT09IHRoaXMuZGVmYXVsdExhbmd1YWdlLmNvZGUpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBvcmlnaW5hbFRleHRzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdHJhbnNsYXRpb25TdGF0dXNlcy5mb3JFYWNoKChzdGF0dXMpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RhdHVzLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBUcmFuc2xhdGlvblN0YXR1c1Jlc3VsdC5mYWlsZWQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxUZXh0cy5wdXNoKHN0YXR1cy50ZXh0LnJlcGxhY2UoL1wiL2csICdcXFxcXCInKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIG9yaWdpbmFsVGV4dHMgPSBvcmlnaW5hbFRleHRzLmZpbHRlcih0aGlzLm9ubHlVbmlxdWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNsYXRvclByb3ZpZGVyID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFuc2xhdGVkVGV4dHMgPSBhd2FpdCB0aGlzLmF6dXJlQXV0b1RyYW5zbGF0ZShvcmlnaW5hbFRleHRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKENsb3VkVHJhbnNsYXRpb24uY3VycmVudExhbmd1YWdlLmNvZGUpLnRyYW5zbGF0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNsYXRpb25zID09PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRyYW5zbGF0aW9ucyhDbG91ZFRyYW5zbGF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKS50cmFuc2xhdGlvbiA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkLmVhY2godHJhbnNsYXRlZFRleHRzLCAoaW5kZXgsIHRleHQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG91ZFRyYW5zbGF0aW9uLmFkZFRyYW5zbGF0aW9uVmFsdWUoQ2xvdWRUcmFuc2xhdGlvbi5jdXJyZW50TGFuZ3VhZ2UuY29kZSwgb3JpZ2luYWxUZXh0c1tpbmRleF0sIHRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgY29uc29sZS5sb2coZSk7IH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBzdGF0dXMgb2YgdHJhbnNsYXRpb25TdGF0dXNlcykge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RhdHVzLnJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFRyYW5zbGF0aW9uU3RhdHVzUmVzdWx0LmZhaWxlZDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMuYXR0cmlidXRlID09PSAndGl0bGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgQ2xvdWRUcmFuc2xhdGlvbi50cmFuc2xhdGVFbGVtZW50VGl0bGUoc3RhdHVzLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0ZUVsZW1lbnRUZXh0KHN0YXR1cy5lbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AoMjAwKTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50TGFuZ3VhZ2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZpbGxJbkxhbmd1YWdlcygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IHNlbGVjdGlvbiA9ICQoJy5jbG91ZHRyYW5zbGF0aW9uLXNlbGVjdGlvbicpO1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBzZWxlY3Rpb24uYXR0cigndHJhbnNsYXRlJywgJ25vJyk7XHJcblxyXG4gICAgICAgIHNlbGVjdGlvbi5odG1sKCcnKTtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRMYW5ndWFnZTogc3RyaW5nID0gdGhpcy5jdXJyZW50TGFuZ3VhZ2UuY29kZTtcclxuXHJcbiAgICAgICAgQ2xvdWRUcmFuc2xhdGlvbi5sYW5ndWFnZXMuZm9yRWFjaCgobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgICAgICAgJCgnLmNsb3VkdHJhbnNsYXRpb24tc2VsZWN0aW9uJykuYXBwZW5kKCc8b3B0aW9uIHZhbHVlPVwiJyArIGxhbmd1YWdlLmNvZGUgKyAnXCInICsgKGxhbmd1YWdlLmNvZGUgPT09IGN1cnJlbnRMYW5ndWFnZSA/ICcgc2VsZWN0ZWQgJyA6ICcnKSArICc+JyArIGxhbmd1YWdlLmRpc3BsYXlOYW1lICsgJzwvb3B0aW9uPicpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNsb3VkdHJhbnNsYXRpb24tc2VsZWN0aW9uJywgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGxldCBsYW5ndWFnZUNvZGUgPSAkKHRoaXMpLnZhbCgpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgaWYgKGxhbmd1YWdlQ29kZSAhPT0gJycpXHJcbiAgICAgICAgQ2xvdWRUcmFuc2xhdGlvbi5zZXRDdXJyZW50TGFuZ3VhZ2UobGFuZ3VhZ2VDb2RlKTtcclxuXHJcbiAgICBhd2FpdCBDbG91ZFRyYW5zbGF0aW9uLnRyYW5zbGF0ZURPTSgpO1xyXG59KTsiXX0=

