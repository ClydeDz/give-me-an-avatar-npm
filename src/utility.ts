import { 
    AvatarSettings,
    AvatarService
} from "./models";
import * as RandomNameGenerator from "random-name";

export class Utility { 
    public getDefaultName(): string {
        return `${RandomNameGenerator.first} ${RandomNameGenerator.last}`;
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

