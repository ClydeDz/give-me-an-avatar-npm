import { AvatarService, PrivateAvatarSettings } from "./models";
export declare class Utility {
    getDefaultName(): string;
    getDefaultSize(): number;
    getDefaultSettings(): PrivateAvatarSettings;
    getRandomAvatarService(avatars: [string, string][]): AvatarService;
    processAvatarTemplate(templateString: string, templateVars: PrivateAvatarSettings): string;
    validateAndCleanSettings(settings: PrivateAvatarSettings, avatarServiceKey: string): PrivateAvatarSettings;
    applyExtraFiltersToAvatarURL(avatarServiceKey: string): string;
}
