import {BIDMAS} from '../operations/_config';
import {doMathematicalOperation} from '../../../utils/carry-out-regex';

import add from "./add";
import subtract from "./subtract";

/**
 * Bracket deconstruction takes place in equalise.js, which calls
 * this function for every instance of a statement in a bracket.
 */
export default (statement) => {
    // I

    // D

    // M

    // A
    // if (BIDMAS.add.regex.test(statement)) {
        statement = doMathematicalOperation(statement, BIDMAS.add.regex, add);
    // }

    // S
    // if (BIDMAS.subtract.regex.test(statement)) {
        statement = doMathematicalOperation(statement, BIDMAS.subtract.regex, subtract);
    // }

    return statement;
}