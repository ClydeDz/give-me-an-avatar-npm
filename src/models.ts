export enum Hair {
    NoHair = "NoHair",
    Eyepatch = "Eyepatch",
    Hat = "Hat",
    Hijab = "Hijab",
    Turban = "Turban",
    WinterHat1 = "WinterHat1",
    WinterHat2 = "WinterHat2",
    WinterHat3 = "WinterHat3",
    WinterHat4 = "WinterHat4",
    LongHairBigHair = "LongHairBigHair",
    LongHairBob = "LongHairBob",
    LongHairBun = "LongHairBun",
    LongHairCurly = "LongHairCurly",
    LongHairCurvy = "LongHairCurvy",
    LongHairDreads = "LongHairDreads",
    LongHairFrida = "LongHairFrida",
    LongHairFro = "LongHairFro",
    LongHairFroBand = "LongHairFroBand",
    LongHairNotTooLong = "LongHairNotTooLong",
    LongHairShavedSides = "LongHairShavedSides",
    LongHairMiaWallace = "LongHairMiaWallace",
    LongHairStraight = "LongHairStraight",
    LongHairStraight2 = "LongHairStraight2",
    LongHairStraightStrand = "LongHairStraightStrand",
    ShortHairDreads01 = "ShortHairDreads01",
    ShortHairDreads02 = "ShortHairDreads02",
    ShortHairFrizzle = "ShortHairFrizzle",
    ShortHairShaggyMullet = "ShortHairShaggyMullet",
    ShortHairShortCurly = "ShortHairShortCurly",
    ShortHairShortFlat = "ShortHairShortFlat",
    ShortHairShortRound = "ShortHairShortRound",
    ShortHairShortWaved = "ShortHairShortWaved",
    ShortHairSides = "ShortHairSides",
    ShortHairTheCaesar = "ShortHairTheCaesar",
    ShortHairTheCaesarSidePart  = "ShortHairTheCaesarSidePart",
}

export enum AvatarStyle {
    Circle = "Circle",
    Transparent = "Transparent"
}

export enum Accessories {
    Blank = "Blank",
    Kurt = "Kurt",
    Prescription01 = "Prescription01",
    Prescription02 = "Prescription02",
    Round = "Round",
    Sunglasses = "Sunglasses",
    Wayfarers  = "Wayfarers ",
}

export enum FacialHair {
    Blank = "Blank",
    BeardMedium = "BeardMedium",
    BeardLight = "BeardLight",
    BeardMagestic = "BeardMagestic",
    MoustacheFancy = "MoustacheFancy",
    MoustacheMagnum = "MoustacheMagnum",    
}

export enum HairColour {
    Auburn = "Auburn",
    Black = "Black",
    Blonde = "Blonde",
    BlondeGolden = "BlondeGolden",
    Brown = "Brown",
    BrownDark = "BrownDark",
    Platinum = "Platinum",
    Red = "Red",       
}

export enum Clothes {
    BlazerShirt = "BlazerShirt",
    BlazerSweater = "BlazerSweater",
    CollarSweater = "CollarSweater",
    GraphicShirt = "GraphicShirt",
    Hoodie = "Hoodie",
    Overall = "Overall",
    ShirtCrewNeck = "ShirtCrewNeck",
    ShirtScoopNeck = "ShirtScoopNeck",
    ShirtVNeck = "ShirtVNeck",          
}

export enum FabricColour {
    Black = "Black",
    Blue01 = "Blue01",
    Blue02 = "Blue02",
    Blue03 = "Blue03",
    Gray01 = "Gray01",
    Gray02 = "Gray02",
    Heather = "Heather",
    PastelBlue = "PastelBlue",
    PastelGreen = "PastelGreen",
    PastelOrange = "PastelOrange",
    PastelRed = "PastelRed",
    PastelYellow = "PastelYellow",
    Pink = "Pink",
    Red = "Red",
    White = "White",  
}

export enum GraphicOnClothes {
    Bat = "Bat",
    Cumbia = "Cumbia",
    Deer = "Deer",
    Diamond = "Diamond",
    Hola = "Hola",
    Pizza = "Pizza",
    Resist = "Resist",
    Selena = "Selena",
    Bear = "Bear",
    SkullOutline = "SkullOutline",
    Skull = "Skull",     
}

export enum Eyes {
    Close = "Close",
    Cry = "Cry",
    Default = "Default",
    Dizzy = "Dizzy",
    EyeRoll = "EyeRoll",
    Happy = "Happy",
    Hearts = "Hearts",
    Side = "Side",
    Squint = "Squint",
    Surprised = "Surprised",
    Wink = "Wink",
    WinkWacky = "WinkWacky",         
}

export enum Eyebrow {
    Angry = "Angry",
    AngryNatural = "AngryNatural",
    Default = "Default",
    DefaultNatural = "DefaultNatural",
    FlatNatural = "FlatNatural",
    RaisedExcited = "RaisedExcited",
    RaisedExcitedNatural = "RaisedExcitedNatural",
    SadConcerned = "SadConcerned",
    SadConcernedNatural = "SadConcernedNatural",
    UnibrowNatural = "UnibrowNatural",
    UpDown = "UpDown",
    UpDownNatural = "UpDownNatural",
}

export enum Mouth {
    Concerned = "Concerned",
    Default = "Default",
    Disbelief = "Disbelief",
    Eating = "Eating",
    Grimace = "Grimace",
    Sad = "Sad",
    ScreamOpen = "ScreamOpen",
    Serious = "Serious",
    Smile = "Smile",
    Tongue = "Tongue",
    Twinkle = "Twinkle",
    Vomit = "Vomit",    
}

export enum Skin {
    Tanned = "Tanned",
    Yellow = "Yellow",
    Pale = "Pale",
    Light = "Light",
    Brown = "Brown",
    DarkBrown = "DarkBrown",
    Black = "Black",
}

export interface AvatarSettings {
    Name?: string;
    Size?: number;
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
