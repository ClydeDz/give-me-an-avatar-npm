import { Utility } from "../src/utility";
import { expect } from "chai";
import { alphabets, avatarCollection } from "../src/constants";

describe("getDefaultName", (): void => {  
    const util = new Utility();

    it("returns valid user initials", (): void => {     
        const actual = util.getDefaultName(); 
        expect(actual).is.not.null;
        expect(actual).is.not.undefined;
        expect(alphabets.includes(actual.split(" ")[0])).to.be.true;
        expect(alphabets.includes(actual.split(" ")[1])).to.be.true;
    });
});

describe("getDefaultSettings", (): void => {  
    const util = new Utility();

    it("returns valid default settings", (): void => {     
        const actual = util.getDefaultSettings(); 
        expect(actual).is.not.null;
        expect(actual).is.not.undefined;
        expect(actual.Name).is.not.empty;
        expect(actual.Size).is.not.NaN;
    });
});

describe("getDefaultSize", (): void => {  
    const util = new Utility();

    it("returns valid default size", (): void => {     
        const actual = util.getDefaultSize(); 
        expect(actual).is.not.null;
        expect(actual).is.not.undefined;
        expect(actual).is.equal(512);
    });
});

describe("getRandomAvatarService", (): void => {  
    const util = new Utility();

    it("returns valid avatar service", (): void => {     
        const actual = util.getRandomAvatarService(avatarCollection); 
        expect(actual).is.not.null;
        expect(actual).is.not.undefined;
        expect(actual.Key).is.not.empty;
        expect(actual.URL).is.not.empty;
    });
});

describe("processAvatarTemplate", (): void => {  
    const util = new Utility();

    it("processes template variables correctly", (): void => {  
        const templateString = "https://placeimg.com/${this.Size}/${this.Size}/people";   
        const templateVariables = {
            Name: "",
            Size: 486
        }
        const actual = util.processAvatarTemplate(templateString, templateVariables); 
        expect(actual).equals("https://placeimg.com/486/486/people"); 
    }); 
});

describe("validateAndCleanSettings", (): void => {  
    const util = new Utility();

    it("processes settings without name", (): void => {   
        const settings = {
            Size: 486
        }
        const actual = util.validateAndCleanSettings(settings); 
        expect(actual.Name).is.not.empty;
        expect(actual.Size).equals(486);
    }); 

    it("processes settings without size", (): void => {   
        const settings = {
            Name: "John Smith"
        }
        const actual = util.validateAndCleanSettings(settings); 
        expect(actual.Name).equals("John Smith");
        expect(actual.Size).is.not.null;
        expect(actual.Size).is.not.undefined;
    }); 
});