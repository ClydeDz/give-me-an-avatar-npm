<div align="center">
	<br>
	<img width="172" src="https://raw.githubusercontent.com/ClydeDz/give-me-an-avatar-npm/main/icon.jpg" alt="Give me an avatar npm package icon">
	<br>
	<br>
</div>

# Give Me an Avatar
Gets a random avatar URL from a collection of different avatar generation services.   

[![Build status](https://clydedsouza.visualstudio.com/Give%20Me%20an%20Avatar%20npm/_apis/build/status/Give%20Me%20an%20Avatar%20Main)](https://clydedsouza.visualstudio.com/Give%20Me%20an%20Avatar%20npm/_build/latest?definitionId=32)
[![Azure DevOps tests](https://img.shields.io/azure-devops/tests/clydedsouza/Give%20Me%20an%20Avatar%20npm/32?logo=azuredevops)](https://clydedsouza.visualstudio.com/Give%20Me%20an%20Avatar%20npm/_build?definitionId=32) 
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ClydeDz_give-me-an-avatar-npm&metric=alert_status)](https://sonarcloud.io/dashboard?id=ClydeDz_give-me-an-avatar-npm) 
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=ClydeDz_give-me-an-avatar-npm&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=ClydeDz_give-me-an-avatar-npm) 
![MIT License](https://img.shields.io/static/v1.svg?label=📜%20License&message=MIT&color=informational) 
[![npm](https://img.shields.io/npm/v/give-me-an-avatar?color=brightgreen&logo=npm)](https://bit.ly/give-me-an-avatar) 
[![Tweet about this](https://img.shields.io/static/v1.svg?label=Tweet%20about%20this&message=🎵&color=blue&logo=twitter&style=social)](https://ctt.ac/k925T) 	    
    
## Usage
Install the package from npm using the following command.
```NPM Config
npm i give-me-an-avatar
```

After installing, simply import Give Me an Avatar in your file.
```javascript
const avatars = require("give-me-an-avatar");
```
Consume the `giveMeAnAvatar()` API to get an avatar URL that you can use directly as an image. You can either call the method without any parameters or supply the settings object to customize your avatar a bit. All settings are pretty self-explanatory and are not mandatory. For example:
```javascript
let image = avatars.giveMeAnAvatar({
                Name: "John Smith",
                Size: 128
            }); 
```
The image variable will have the avatar image URL.    
     
If you'd like to consume this package via a CDN, please see [this demo](https://github.com/ClydeDz/give-me-an-avatar-npm/blob/main/demo/index.html).   
    

## Supported avatar services

| Service                                    | Avatar example                                       |
|--------------------------------------------|------------------------------------------------------|
| [placeholder.com](https://placeholder.com) | ![image](https://via.placeholder.com/128?Text=J%20S) |
| [placeimg.com](https://placeimg.com)       | ![image](https://placeimg.com/128/128/people)        |
| [placekitten.com](https://placekitten.com) | ![image](https://placekitten.com/g/128/128?cache=invalidate)          |
| [dummyimage.com](https://dummyimage.com/)  | ![image](https://dummyimage.com/128x128&text=J%20S)  |
| [loremflickr.com](https://loremflickr.com) | ![image](https://loremflickr.com/128/128/human)      |
| [baconmockup.com](https://baconmockup.com) | ![image](https://baconmockup.com/128/128/)           |
| [placebeard.it](https://placebeard.it)     | ![image](https://placebeard.it/128)                  |
| [fakeimg.pl](https://fakeimg.pl)           | ![image](https://fakeimg.pl/128x128/?text=John%20Smith&font=bebas)   |
| [thispersondoesnotexist.com](https://thispersondoesnotexist.com/) | <img src="https://thispersondoesnotexist.com/image" width="128"/> |
| [picsum.photos](https://picsum.photos/)     | ![image](https://picsum.photos/128)                  |
| [fillmurray.com](https://www.fillmurray.com)     | ![image](https://www.fillmurray.com/128/128)    |
| [placecage.com](https://www.placecage.com)       | ![image](https://www.placecage.com/128/128)     |
| [stevensegallery.com](https://www.stevensegallery.com)       | ![image](https://www.stevensegallery.com/128/128)  |
| [gravatar.com](https://www.gravatar.com)    | ![image](https://www.gravatar.com/avatar/default?s=128)     |
| [ui-avatars.com](https://www.ui-avatars.com)    | ![image](https://ui-avatars.com/api/?background=random&size=128&name=J%20S)     |
| [generative-placeholders.glitch.me](https://generative-placeholders.glitch.me)       | ![image](https://generative-placeholders.glitch.me/image?width=128&height=128)     |
| [robohash.org](https://robohash.org)       | ![image](https://robohash.org/John%20Smith?size=128x128&set=set1) ![image](https://robohash.org/John%20Smith?size=128x128&set=set2) ![image](https://robohash.org/John%20Smith?size=128x128&set=set3) ![image](https://robohash.org/John%20Smith?size=128x128&set=set4)     |
| [avatars.dicebear.com](https://avatars.dicebear.com)     | ![image](https://avatars.dicebear.com/4.5/api/gridy/John%20Smith.svg?w=128&h=128) ![image](https://avatars.dicebear.com/4.5/api/human/John%20Smith.svg?w=128&h=128) ![image](https://avatars.dicebear.com/4.5/api/identicon/John%20Smith.svg?w=128&h=128) ![image](https://avatars.dicebear.com/4.5/api/jdenticon/John%20Smith.svg?w=128&h=128) ![image](https://avatars.dicebear.com/4.5/api/avataaars/John%20Smith.svg?w=128&h=128)  ![image](https://avatars.dicebear.com/4.5/api/bottts/John%20Smith.svg?w=128&h=128)             |
| [avatar.uimaterial.com](https://avatar.uimaterial.com)     | ![image](https://avatar.uimaterial.com/?setId=0496UVJDTqyd2eCIAa46&name=John%20Smith&size=128) ![image](https://avatar.uimaterial.com/?setId=8Pfmys5bgfL2NbXFG2sU&name=John%20Smith&size=128) ![image](https://avatar.uimaterial.com/?setId=SM2u3518GjohwtHQXNK0&name=John%20Smith&size=128) ![image](https://avatar.uimaterial.com/?setId=Pb7ErSM37KjjIZyJk8w6&name=John%20Smith&size=128)   |

## Notes
* I'm not using [avataaars](https://avataaars.io/) separately since [avatars.dicebear.com](https://avatars.dicebear.com) includes avataaars.    
* Placekitten image might appear broken at times in the table above, however, the image service itself runs fine.     

## Credits   
- All the avatar services used in this npm package are outlined in the table above.    
- Package logo created using [AutoDraw](https://www.autodraw.com/).   
- This NPM package is developed by [Clyde D'Souza](https://twitter.com/clydedz).