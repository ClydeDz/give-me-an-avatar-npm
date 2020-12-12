import { AvatarSettings } from "./models";
import { Utility } from "./utility";
import { avatarCollection } from "./constants";

const baseURL = "https://avataaars.io/"; 
const util = new Utility();

export { 
    Hair, 
    AvatarStyle, 
    Accessories, 
    FacialHair,
    HairColour,
    Clothes,
    FabricColour,
    GraphicOnClothes,
    Eyebrow,
    Eyes,
    Mouth,
    Skin, 
    AvatarSettings 
} from "./models";



// var avatarCollection: [number, string][];
// avatarCollection = [
//     [1, "https://via.placeholder.com/${this.size}"], 
//     [2, "https://placeimg.com/${this.size}/${this.size}/people"]
// ];
// var employee: [number, string, string][];
// employee = [[1, "Steve","G"], [2, "Bill","B"], [3, "Jeff","J"]];

// var item = avatarCollection[Math.floor(Math.random() * avatarCollection.length)];

// var [a, b, c] = employee[0];
// alert(c)

// const templateString = "Hello ${this.name}!";
// const templateVars = {
//     name: "512"    
// }




// alert(fillTemplate(templateString, templateVars));

export function giveMeAnAvatar(settings: AvatarSettings): string {
    if (!settings) {
        settings = util.getDefaultSettings();
    } 
    
    const avatarService = util.getRandomAvatarService(avatarCollection);
    const avatarURL = util.processAvatarTemplate(avatarService.URL, settings);
    return avatarURL;
} 


