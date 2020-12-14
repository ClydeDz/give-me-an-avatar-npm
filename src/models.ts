export interface AvatarSettings {
    Name?: string;
    Size?: number;
}

export interface PrivateAvatarSettings extends AvatarSettings {
    ExtraFilter?: string;
}

export interface AvatarService {
    Key: string;
    URL: string;
}

export enum AvatarExtraFilters {
    KEY = 0,
    FILTERS = 1 
}
