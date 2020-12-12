import { Utility } from "../src/utility";
import { expect } from "chai";

describe("Options tests", (): void => {  
    it("checking default options", (): void => {  
        const util = new Utility();
        const actual = util.trimInvalidCharactersIfExists("https://avataaars.io/?"); 
        expect(actual).to.equal("https://avataaars.io/");
    });
});
