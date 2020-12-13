import { 
    AvatarSettings,
    AvatarService
} from "./models";
import { alphabets } from "./constants";

export class Utility { 

    public getDefaultName(): string {
        const firstName = alphabets[Math.floor(Math.random() * alphabets.length)];
        const lastName = alphabets[Math.floor(Math.random() * alphabets.length)];
        return `${firstName} ${lastName}`;
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

    public validateAndCleanSettings(settings: AvatarSettings): AvatarSettings { 
        if(!settings.Name){
            settings.Name = this.getDefaultName();
        }
        if(!settings.Size) { 
            settings.Size = this.getDefaultSize();
        }
        return settings;
    }
}

