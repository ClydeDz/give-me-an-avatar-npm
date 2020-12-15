const avatars = require("give-me-an-avatar");
const localAvatars = require("../dist/give-me-an-avatar"); 

console.log("(local)", 
    localAvatars.giveMeAnAvatar({
        Name: "Arch Niko",
        Size: 124
    })
);

for(let i=0; i<5; i++){
    var image = avatars.giveMeAnAvatar({
        Name: "Arch Niko",
        Size: 124
    })
    console.log(image);
}