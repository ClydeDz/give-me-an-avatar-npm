import { AvatarSettings, AvatarService, AvatarExtraFilters} from "./models";
import { alphabets, avatarSizeRange, avatarExtraFilters } from "./constants";

export class Utility { 

    public getDefaultName(): string {
        const firstName = alphabets[Math.floor(Math.random() * alphabets.length)];
        const lastName = alphabets[Math.floor(Math.random() * alphabets.length)];
        return `${firstName}%20${lastName}`;
    }
    
    public getDefaultSize(): number {
        return Math.floor(Math.random() * (avatarSizeRange.Max - avatarSizeRange.Min + 1)) + avatarSizeRange.Min;
    }   

    public getDefaultSettings(): AvatarSettings {
        return {
            Name: this.getDefaultName(),
            Size: this.getDefaultSize(),
            ExtraFilter: ""
        };
    }

    public getRandomAvatarService(avatars: [string, string][]): AvatarService {
        const [key, url] = avatars[Math.floor(Math.random() * avatars.length)];
        return {
            Key: key,
            URL: url
        };
    }

    public processAvatarTemplate(templateString: string, templateVars: AvatarSettings): string {
        return new Function("return `"+templateString +"`;").call(templateVars);
    }

    public validateAndCleanSettings(settings: AvatarSettings, avatarServiceKey: string): AvatarSettings { 
        if(settings.Name) {
            settings.Name = settings.Name.replace(/ /gi, "%20");
        }
        if(!settings.Name) {
            settings.Name = this.getDefaultName();
        }
        if(!settings.Size) { 
            settings.Size = this.getDefaultSize();
        }
        if(!settings.ExtraFilter) { 
            settings.ExtraFilter = this.applyExtraFiltersToAvatarURL(avatarServiceKey);
        }
        return settings;
    }

    public applyExtraFiltersToAvatarURL(avatarServiceKey: string): string {
        const extraFilters = avatarExtraFilters.filter((element): boolean => 
            element[AvatarExtraFilters.KEY] === avatarServiceKey);

        if(extraFilters === undefined || extraFilters.length == 0){
            return "";
        }

        return extraFilters[Math.floor(Math.random() * extraFilters.length)][AvatarExtraFilters.FILTERS]; 
    }
}

