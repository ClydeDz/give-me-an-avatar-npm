import {
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
    AvatarSettings,
    AvatarService
} from "./models";

const stringStartIndex = 0;
const stringTrimIndexFromEnd = 1;

export class Utility {

    /**
     * Checks if supplied setting exists and valid and constructs the query string part
     * of the API URL accordingly.
     * @param key The key part of the query string.
     * @param setting The setting that needs to be supplied as the value for that key.
     */
    public resolveSettings(key: string, 
        setting: Hair | AvatarStyle | Accessories | FacialHair | HairColour | Clothes | 
        FabricColour | GraphicOnClothes | Eyebrow | Eyes | Mouth | Skin | undefined): string {
        if (!setting) {
            return "";
        }
        return `${key}=${setting}&`;
    }

    /**
     * Remove the `&` and `?` characters from the end of the URL if it exists.
     * @param apiURL The API URL being constructed
     */
    public trimInvalidCharactersIfExists(apiURL: string): string {
        const doesURLEndWithAmpersand = apiURL.substr(apiURL.length - 1) === "&";
        const doesURLEndWithQuestion = apiURL.substr(apiURL.length - 1) === "?";
        if (!doesURLEndWithAmpersand && !doesURLEndWithQuestion) {
            return apiURL;
        }
        return apiURL.substring(stringStartIndex, apiURL.length - stringTrimIndexFromEnd);
    }

    public getDefaultName(): string {
        return "John Mule"
    }
    
    public getDefaultSize(): number {
        return 512;
    }   

    public getDefaultSettings(): AvatarSettings {
        return {
            Name: this.getDefaultName(),
            Size: this.getDefaultSize()
        }
    }

    public getRandomAvatarService(avatarCollection: [string, string][]): AvatarService {
        const [Key, URL] = avatarCollection[Math.floor(Math.random() * avatarCollection.length)];
        return {
            Key: Key,
            URL: URL
        };
    }

    public processAvatarTemplate(templateString: string, templateVars: AvatarSettings): string {
        return new Function("return `"+templateString +"`;").call(templateVars);
    }
}

