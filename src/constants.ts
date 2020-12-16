export const avatarCollection: [string, string][] = [
    ["via.placeholder.com", "https://via.placeholder.com/${this.Size}?text=${this.Name}"], 
    ["placeimg.com", "https://placeimg.com/${this.Size}/${this.Size}/people"],
    ["placekitten.com", "https://placekitten.com/g/${this.Size}/${this.Size}"],
    ["dummyimage.com", "https://dummyimage.com/${this.Size}x${this.Size}&text=${this.Name}"],
    ["loremflickr.com", "https://loremflickr.com/${this.Size}/${this.Size}/human"],
    ["baconmockup.com", "https://baconmockup.com/${this.Size}/${this.Size}/"],
    ["placebeard.it", "https://placebeard.it/128"],
    ["fakeimg.pl", "https://fakeimg.pl/${this.Size}x${this.Size}/?text=${this.Name}&font=bebas"],
    ["thispersondoesnotexist.com", "https://thispersondoesnotexist.com/image"],
    ["picsum.photos", "https://picsum.photos/${this.Size}"],
    ["fillmurray.com", "https://www.fillmurray.com/${this.Size}/${this.Size}"],
    ["placecage.com", "https://www.placecage.com/${this.Size}/${this.Size}"],
    ["stevensegallery.com", "https://www.stevensegallery.com/${this.Size}/${this.Size}"],
    ["gravatar.com", "https://www.gravatar.com/avatar/default?s=${this.Size}"],
    ["ui-avatars.com", "https://ui-avatars.com/api/?background=random&size=${this.Size}&name=${this.Name}"],
    ["generative-placeholders.glitch.me", "https://generative-placeholders.glitch.me/image?width=${this.Size}&height=${this.Size}"],
    ["robohash.org", "https://robohash.org/${this.Name}?size=${this.Size}x${this.Size}${this.ExtraFilter}"],  
    ["avatars.dicebear.com", "https://avatars.dicebear.com/api${this.ExtraFilter}/${this.Name}.svg?w=${this.Size}&h=${this.Size}"],  
    ["avatar.uimaterial.com", "https://avatar.uimaterial.com/?name=${this.Name}&size=${this.Size}${this.ExtraFilter}"]  
];

export const avatarExtraFilters: [string, string][] = [
    ["robohash.org", "&set=set1"], 
    ["robohash.org", "&set=set2"], 
    ["robohash.org", "&set=set3"], 
    ["robohash.org", "&set=set4"], 
    ["avatars.dicebear.com", "/gridy"], 
    ["avatars.dicebear.com", "/human"], 
    ["avatars.dicebear.com", "/identicon"], 
    ["avatars.dicebear.com", "/jdenticon"], 
    ["avatars.dicebear.com", "/avataaars"], 
    ["avatars.dicebear.com", "/bottts"], 
    ["avatar.uimaterial.com", "&setId=8Pfmys5bgfL2NbXFG2sU"],
    ["avatar.uimaterial.com", "&setId=0496UVJDTqyd2eCIAa46"],
    ["avatar.uimaterial.com", "&setId=SM2u3518GjohwtHQXNK0"],
    ["avatar.uimaterial.com", "&setId=Pb7ErSM37KjjIZyJk8w6"] 
];

export const alphabets: string[] = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]; 

export enum avatarSizeRange {
    Min = 96,
    Max = 512
}