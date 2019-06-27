import BIDMAS from './_config';
import carryOutRegex from '../../../utils/carry-out-regex';

// Operations
import add from './add';

// Note for indices: [2*(2*3)] - this should be representation of powers (2 is the base, 3 is the exponent)

export default (statement) => {
    statement = statement.replace("=", "");
    // let result = statement;

    /**
     * Best way of calculating would be to find instances of
     * each of the BIDMAS rules (and replace with a calculated number)
     * iteratively then update the result variable and run further 
     * regex search & replace on the result variable.
     * 
     * Example:
     * For B in BIDMAS - I can iterate over result until no matches are found to make sure
     * all equations in brackets are done. Only then continue further down the order.
     */

    // B

    // I

    // D

    // M

    // A
    // Since I'm starting with simple calculations first - I'll do addition here.
    statement = carryOutRegex(statement, BIDMAS.add.regex, add);

    // S

    return statement;
}