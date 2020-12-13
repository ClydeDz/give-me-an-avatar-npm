import { Utility } from "../src/utility";
import { expect } from "chai";
import { alphabets, avatarCollection, avatarSizeRange, avatarExtraFilters } from "../src/constants";
import { AvatarExtraFilters } from "../src/models";

describe("getDefaultName", (): void => {  
    const util = new Utility();

    it("returns valid user initials", (): void => {     
        const actual = util.getDefaultName(); 
        expect(actual).is.not.null;
        expect(actual).is.not.undefined;
        expect(alphabets.includes(actual.split("%20")[0])).to.be.true;
        expect(alphabets.includes(actual.split("%20")[1])).to.be.true;
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
        expect(actual.ExtraFilter).is.empty;
    });
});

describe("getDefaultSize", (): void => {  
    const util = new Utility();

    it("returns valid default size", (): void => {     
        const actual = util.getDefaultSize(); 
        expect(actual).is.not.null;
        expect(actual).is.not.undefined;
        expect(actual).is.greaterThan(avatarSizeRange.Min-1);
        expect(actual).is.lessThan(avatarSizeRange.Max-1);
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
        const actual = util.validateAndCleanSettings(settings, "placeimg.com"); 
        expect(actual.Name).is.not.empty;
        expect(actual.Size).equals(486);
        expect(actual.ExtraFilter).is.empty;
    }); 

    it("processes settings without size", (): void => {   
        const settings = {
            Name: "Jane"
        }
        const actual = util.validateAndCleanSettings(settings, "placeimg.com"); 
        expect(actual.Name).equals("Jane");
        expect(actual.Size).is.not.null;
        expect(actual.Size).is.not.undefined;
        expect(actual.ExtraFilter).is.empty;
    }); 

    it("processes settings expecting extra filters", (): void => {   
        const settings = {
            Name: "Jane"
        }
        const actual = util.validateAndCleanSettings(settings, "robohash.org"); 
        expect(actual.Name).equals("Jane");
        expect(actual.Size).is.not.null;
        expect(actual.Size).is.not.undefined;
        expect(actual.ExtraFilter).is.not.empty;
    }); 

    it("processes settings with a name that contains a space", (): void => {   
        const settings = {
            Name: "John Smith"
        }
        const actual = util.validateAndCleanSettings(settings, "placeimg.com"); 
        expect(actual.Name).is.not.empty;
        expect(actual.Name).equals("John%20Smith");
    }); 

    it("processes settings with a name that contains multiple spaces", (): void => {   
        const settings = {
            Name: "John David Smith"
        }
        const actual = util.validateAndCleanSettings(settings, "placeimg.com"); 
        expect(actual.Name).is.not.empty;
        expect(actual.Name).equals("John%20David%20Smith");
    }); 
});

describe("applyExtraFiltersToAvatarURL", (): void => {  
    const util = new Utility();

    it("returns valid filter when valid avatar key is supplied", (): void => {     
        const actual = util.applyExtraFiltersToAvatarURL("robohash.org");
        const robohashExtraFilters = avatarExtraFilters
            .filter((element): boolean => element[AvatarExtraFilters.KEY] === "robohash.org")
            .map((filterArrayElement): string => filterArrayElement[AvatarExtraFilters.FILTERS]);  
        expect(actual).is.not.empty;
        expect(new Set(robohashExtraFilters)).to.include(actual);
    });

    it("returns empty filter when invalid avatar service key is supplied", (): void => {     
        const actual = util.applyExtraFiltersToAvatarURL("this_service_does_not_exist"); 
        expect(actual).is.empty; 
    });

    it("returns empty filter when valid avatar service key is supplied that doesn't have extra filters", (): void => {     
        const actual = util.applyExtraFiltersToAvatarURL("placekitten.com"); 
        expect(actual).is.empty; 
    });
});