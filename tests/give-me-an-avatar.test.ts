import { giveMeAnAvatar } from "../src/give-me-an-avatar";
import { expect } from "chai";

describe("giveMeAnAvatar", (): void => {  
    it("passing null options doesn't return null or undefined results", (): void => {  
        const actual = giveMeAnAvatar(null); 
        console.log(actual);
        expect(actual).is.not.undefined;
        expect(actual).is.not.null;
    });
});
