const avatars = require("give-me-an-avatar");
for(let i=0; i<5; i++){
    var image = avatars.giveMeAnAvatar({
        Name: "Arch Niko",
        Size: 124
    })
    console.log(image);
}