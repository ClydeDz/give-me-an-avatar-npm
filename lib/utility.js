"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = void 0;
const models_1 = require("./models");
const constants_1 = require("./constants");
class Utility {
    getDefaultName() {
        const firstName = constants_1.alphabets[Math.floor(Math.random() * constants_1.alphabets.length)];
        const lastName = constants_1.alphabets[Math.floor(Math.random() * constants_1.alphabets.length)];
        return `${firstName}%20${lastName}`;
    }
    getDefaultSize() {
        return Math.floor(Math.random() * (constants_1.avatarSizeRange.Max - constants_1.avatarSizeRange.Min + 1)) + constants_1.avatarSizeRange.Min;
    }
    getDefaultSettings() {
        return {
            Name: this.getDefaultName(),
            Size: this.getDefaultSize(),
            ExtraFilter: ""
        };
    }
    getRandomAvatarService(avatars) {
        const [key, url] = avatars[Math.floor(Math.random() * avatars.length)];
        return {
            Key: key,
            URL: url
        };
    }
    processAvatarTemplate(templateString, templateVars) {
        return new Function("return `" + templateString + "`;").call(templateVars);
    }
    validateAndCleanSettings(settings, avatarServiceKey) {
        if (settings.Name) {
            settings.Name = settings.Name.replace(/ /gi, "%20");
        }
        if (!settings.Name) {
            settings.Name = this.getDefaultName();
        }
        if (!settings.Size) {
            settings.Size = this.getDefaultSize();
        }
        if (!settings.ExtraFilter) {
            settings.ExtraFilter = this.applyExtraFiltersToAvatarURL(avatarServiceKey);
        }
        return settings;
    }
    applyExtraFiltersToAvatarURL(avatarServiceKey) {
        const extraFilters = constants_1.avatarExtraFilters.filter((element) => element[models_1.AvatarExtraFilters.KEY] === avatarServiceKey);
        if (extraFilters === undefined || extraFilters.length == 0) {
            return "";
        }
        return extraFilters[Math.floor(Math.random() * extraFilters.length)][models_1.AvatarExtraFilters.FILTERS];
    }
}
exports.Utility = Utility;
