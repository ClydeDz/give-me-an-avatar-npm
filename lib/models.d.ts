export interface AvatarSettings {
    Name?: string;
    Size?: number;
    ExtraFilter?: string;
}
export interface AvatarService {
    Key: string;
    URL: string;
}
export declare enum AvatarExtraFilters {
    KEY = 0,
    FILTERS = 1
}
