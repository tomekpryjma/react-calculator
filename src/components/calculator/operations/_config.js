/**
 * Run regex tests on this:
 * (34+3)+4/2-[2*(2*3)]*2+1-3
 */


/**
 * Need these as a constant as they are used in Buttonpad.js and will need
 * to use them in equalise.js to sanitise input & make sure no duplicate
 * operation symbols have been entered. Otherwise there is an infinite loop
 * in carry-out-regex.js.
 */
const OPERATIONS = ["x", "/", "+", "-"];

const BIDMAS = {
    brackets: {
        regex: /(\(\d*[\+\-\*\/]\d\))/gm
    },
    add: {
        regex: /(\d{1,}\+{1}\d{1,})/gm
    }
}

export {
    BIDMAS,
    OPERATIONS
};