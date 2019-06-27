/**
 * Run regex tests on this:
 * (34+3)+4/2-[2*(2*3)]*2+1-3
 */

const BODMAS = {
    brackets: {
        regex: /(\(\d*[\+\-\*\/]\d\))/gm
    },
    add: {
        regex: /(\d{1,}\+{1}\d{1,})/gm
    }
}

export default BODMAS;