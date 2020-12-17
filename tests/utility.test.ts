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
        const inclusiveMax = avatarSizeRange.Max-1;
        expect(actual).is.not.null;
        expect(actual).is.not.undefined;
        expect(actual).to.be.within(avatarSizeRange.Min, inclusiveMax); 
    });
});

describe("getRandomAvatarService", (): void => {  
    const util = new Utility();

    it("returns valid avatar service when a collection of avatars is passed", (): void => {     
        const actual = util.getRandomAvatarService(avatarCollection); 
        expect(actual).is.not.null;
        expect(actual).is.not.undefined;
        expect(actual.Key).is.not.empty;
        expect(actual.URL).is.not.empty;
    });

    it("returns an error message when a null object is passed", (): void => {     
        expect(() => {
            util.getRandomAvatarService(null); 
        }).to.throw(Error);        
    });

    it("returns an error message when an empty array is passed", (): void => {     
        expect(() => {
            util.getRandomAvatarService([]); 
        }).to.throw(Error);  
    });

    it("returns empty string key-URL values when input supplied contains empty strings only", (): void => {           
        const input: [string, string][] = [
            ["", ""], 
            ["", ""] 
        ];
        const actual = util.getRandomAvatarService(input); 
        expect(actual).is.not.null;
        expect(actual.Key).is.empty;
        expect(actual.URL).is.empty;
    });

    it("returns null key-URL values when input supplied contains null values only", (): void => {           
        const input: [string, string][] = [
            [null, null]
        ];
        const actual = util.getRandomAvatarService(input); 
        expect(actual).is.not.null;
        expect(actual.Key).is.null;
        expect(actual.URL).is.null;
    });

    it("returns valid avatar service when input supplied contains a single item only", (): void => {           
        const input: [string, string][] = [
            ["via.placeholder.com", "https://via.placeholder.com/${this.Size}"]
        ];
        const actual = util.getRandomAvatarService(input); 
        expect(actual).is.not.null;
        expect(actual.Key).to.be.equal("via.placeholder.com");
        expect(actual.URL).to.be.equal("https://via.placeholder.com/${this.Size}");
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

    it("inserts undefined into template when empty array has been passed as variables input", (): void => {  
        const templateString = "https://placeimg.com/${this.Size}/${this.Size}/people";   
        const templateVariables = {};
        const actual = util.processAvatarTemplate(templateString, templateVariables); 
        expect(actual).equals("https://placeimg.com/undefined/undefined/people"); 
    }); 

    it("returns valid avatar URL when extra filter property is supplied", (): void => {  
        const templateString = "https://robohash.org/${this.Name}?size=${this.Size}x${this.Size}${this.ExtraFilter}";   
        const templateVariables = {
            Name: "Paul",
            Size: 786,
            ExtraFilter: "&set=set1"
        }
        const actual = util.processAvatarTemplate(templateString, templateVariables); 
        expect(actual).equals("https://robohash.org/Paul?size=786x786&set=set1"); 
    }); 

    it("returns undefined when template contains extra filter property but there's a typo in the supplied property", (): void => {  
        const templateString = "https://robohash.org/${this.Name}?size=${this.Size}x${this.Size}${this.ExtraFilter}";   
        const templateVariables = {
            Name: "Paul",
            Size: 786,
            ExtraFilters: "&set=set1"
        }
        const actual = util.processAvatarTemplate(templateString, templateVariables); 
        expect(actual).equals("https://robohash.org/Paul?size=786x786undefined"); 
    }); 

    it("returns undefined when extra filter property is not supplied but template uses it at the end of the template", (): void => {  
        const templateString = "https://avatar.uimaterial.com/?name=${this.Name}&size=${this.Size}${this.ExtraFilter}";   
        const templateVariables = {
            Name: "Paul",
            Size: 786
        }
        const actual = util.processAvatarTemplate(templateString, templateVariables); 
        expect(actual).equals("https://avatar.uimaterial.com/?name=Paul&size=786undefined"); 
    }); 

    it("returns undefined when extra filter property is not supplied but template uses it in the middle of the template", (): void => {  
        const templateString = "https://avatars.dicebear.com/api${this.ExtraFilter}/${this.Name}.svg?w=${this.Size}&h=${this.Size}";   
        const templateVariables = {
            Name: "Paul",
            Size: 786
        }
        const actual = util.processAvatarTemplate(templateString, templateVariables); 
        expect(actual).equals("https://avatars.dicebear.com/apiundefined/Paul.svg?w=786&h=786"); 
    }); 

    it("returns 'null' when null is passed for both parameters", (): void => {   
        const actual = util.processAvatarTemplate(null, null); 
        expect(actual).to.be.equal("null"); 
    }); 

    it("inserts undefined into template when null is passed as variables input", (): void => {  
        const templateString = "https://placeimg.com/${this.Size}/${this.Size}/people";   
        const templateVariables = null;
        const actual = util.processAvatarTemplate(templateString, templateVariables); 
        expect(actual).equals("https://placeimg.com/undefined/undefined/people"); 
    }); 
    
    it("returns 'null' when null template and valid variables are passed", (): void => {   
        const templateVariables = {
            Name: "Paul",
            Size: 786
        }
        const actual = util.processAvatarTemplate(null, templateVariables); 
        expect(actual).to.be.equal("null"); 
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

    it("processes settings and expects extra filter property since the key supplied contains extra filters", (): void => {   
        const settings = {
            Name: "Jane"
        }
        const actual = util.validateAndCleanSettings(settings, "robohash.org"); 
        expect(actual.Name).equals("Jane");
        expect(actual.Size).is.not.null;
        expect(actual.Size).is.not.undefined;
        expect(actual.ExtraFilter).is.not.empty;
    }); 

    it("processes settings with an input name that contains a whitespace", (): void => {   
        const settings = {
            Name: "John Smith"
        }
        const actual = util.validateAndCleanSettings(settings, "placeimg.com"); 
        expect(actual.Name).is.not.empty;
        expect(actual.Name).equals("John%20Smith");
    }); 

    it("processes settings with an input name that contains multiple whitespaces", (): void => {   
        const settings = {
            Name: "John David Smith"
        }
        const actual = util.validateAndCleanSettings(settings, "placeimg.com"); 
        expect(actual.Name).is.not.empty;
        expect(actual.Name).equals("John%20David%20Smith");
    }); 

    it("returns valid default settings when an empty settings object has been passed", (): void => {   
        const settings = {}
        const actual = util.validateAndCleanSettings(settings, "placeimg.com"); 
        expect(actual.Name).is.not.empty;
        expect(actual.Size).is.not.null;
        expect(actual.Size).is.not.undefined;
        expect(actual.ExtraFilter).is.empty;
    }); 

    it("returns valid default settings when an empty settings object has been passed", (): void => {   
        const settings = {}
        const actual = util.validateAndCleanSettings(settings, null); 
        expect(actual.Name).is.not.empty;
        expect(actual.Size).is.not.null;
        expect(actual.Size).is.not.undefined;
        expect(actual.ExtraFilter).is.empty;
    }); 
});

describe("applyExtraFiltersToAvatarURL", (): void => {  
    const util = new Utility();

    it("returns valid filter value when valid avatar key is supplied", (): void => {     
        const actual = util.applyExtraFiltersToAvatarURL("robohash.org");
        const robohashExtraFilters = avatarExtraFilters
            .filter((element): boolean => element[AvatarExtraFilters.KEY] === "robohash.org")
            .map((filterArrayElement): string => filterArrayElement[AvatarExtraFilters.FILTERS]);  
        expect(actual).is.not.empty;
        expect(new Set(robohashExtraFilters)).to.include(actual);
    });

    it("returns empty filter value when invalid avatar service key is supplied", (): void => {     
        const actual = util.applyExtraFiltersToAvatarURL("this_service_does_not_exist"); 
        expect(actual).is.empty; 
    });

    it("returns empty filter value when valid avatar service key is supplied that doesn't have extra filters", (): void => {     
        const actual = util.applyExtraFiltersToAvatarURL("placekitten.com"); 
        expect(actual).is.empty; 
    });

    it("returns empty filter value when null avatar service key is supplied", (): void => {     
        const actual = util.applyExtraFiltersToAvatarURL(null); 
        expect(actual).is.empty; 
    });
});