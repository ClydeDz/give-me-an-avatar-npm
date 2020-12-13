import { AvatarSettings, AvatarService } from "./models";
export declare class Utility {
    getDefaultName(): string;
    getDefaultSize(): number;
    getDefaultSettings(): AvatarSettings;
    getRandomAvatarService(avatars: [string, string][]): AvatarService;
    processAvatarTemplate(templateString: string, templateVars: AvatarSettings): string;
    validateAndCleanSettings(settings: AvatarSettings, avatarServiceKey: string): AvatarSettings;
    applyExtraFiltersToAvatarURL(avatarServiceKey: string): string;
}
