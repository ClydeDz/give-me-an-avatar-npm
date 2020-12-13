export const avatarCollection: [string, string][] = [
    ["placeholder", "https://via.placeholder.com/${this.Size}?text=${this.Name}"], 
    ["placeimg", "https://placeimg.com/${this.Size}/${this.Size}/people"],
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
    ["generative-placeholders.glitch.me", "https://generative-placeholders.glitch.me/image?width=${this.Size}&height=${this.Size}"]
];

export const alphabets: string[] = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]; 

export enum avatarSizeRange {
    Min = 16,
    Max = 512
}