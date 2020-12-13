import { AvatarSettings } from "./models";
import { Utility } from "./utility";
import { avatarCollection } from "./constants";
 
export {  AvatarSettings } from "./models";

export function giveMeAnAvatar(settings: AvatarSettings): string {
    const util = new Utility();

    if (!settings) {
        settings = util.getDefaultSettings();
    } 

    const avatarService = util.getRandomAvatarService(avatarCollection);
    settings = util.validateAndCleanSettings(settings, avatarService.Key);
    const avatarURL = util.processAvatarTemplate(avatarService.URL, settings);
    return avatarURL;
} 


