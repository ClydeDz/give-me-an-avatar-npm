"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.giveMeAnAvatar = void 0;
const utility_1 = require("./utility");
const constants_1 = require("./constants");
function giveMeAnAvatar(settings) {
    const util = new utility_1.Utility();
    if (!settings) {
        settings = util.getDefaultSettings();
    }
    const avatarService = util.getRandomAvatarService(constants_1.avatarCollection);
    settings = util.validateAndCleanSettings(settings, avatarService.Key);
    return util.processAvatarTemplate(avatarService.URL, settings);
}
exports.giveMeAnAvatar = giveMeAnAvatar;
