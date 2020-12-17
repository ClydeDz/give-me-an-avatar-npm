export interface AvatarSettings {
    /**
     * Some avatars display user initials or even the full name and if this setting isn't supplied, 
     * the program randomly decides a user initial. Feel free to supply a value if you need to 
     * override this value. 
     */
    Name?: string;
    /**
     * If this setting isn't supplied, the program will randomly decide an avatar size of the aspect 
     * ratio 1:1, i.e., a square avatar. If you'd like your avatar size to be of a particular size, 
     * supply a number to this setting. 
     */
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
