import { AvatarSettings } from "./models";
import { Utility } from "./utility";
import { avatarCollection } from "./constants";
 
const util = new Utility();

export {  
    AvatarSettings 
} from "./models";

export function giveMeAnAvatar(settings: AvatarSettings): string {
    if (!settings) {
        settings = util.getDefaultSettings();
    } 
    
    const avatarService = util.getRandomAvatarService(avatarCollection);
    const avatarURL = util.processAvatarTemplate(avatarService.URL, settings);
    return avatarURL;
} 


