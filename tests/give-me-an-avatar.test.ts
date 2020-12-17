import { giveMeAnAvatar } from "../src/give-me-an-avatar";
import { expect } from "chai";

describe("giveMeAnAvatar", (): void => {  
    it("passing null options doesn't return null or undefined results", (): void => {  
        const actual = giveMeAnAvatar(null); 
        console.log("    🛈", actual);
        expect(actual).is.not.undefined;
        expect(actual).is.not.null;
    });

    it("passing all avatar settings to get an avatar URL", (): void => {  
        const actual = giveMeAnAvatar({Name: "John Echo", Size: 124}); 
        expect(actual).is.not.undefined;
        expect(actual).is.not.null;
    });
});
