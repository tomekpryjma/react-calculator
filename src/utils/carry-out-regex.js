import { BIDMAS } from "../components/calculator/operations/_config";
import orderOfCalculations from "../components/calculator/operations/order-of-calculations";

/**
 * Helpers
 */
const regexLoop = (statement, regex, callback) => {
    console.log("statement at beggining of regexLoop(): " + statement)
    let matches = [];

    while ( (matches = regex.exec(statement)) !== null) {

        if (matches.index === regex.lastIndex) {
            regex.lastIndex++;
        }
    
        matches.forEach((match, groupIndex) => {

            let arithmeticResult = callback(match);
    
            /**
             * Mutate statement so that arithmeticResult replaces
             * the match.
             */
            statement = statement.replace(match, arithmeticResult);
        });
    }
    console.log("statement at end of regexLoop(): " + statement)
    console.log("")
    return statement;
}

const replaceMultipleInstancesOfSymbolWithOne = (statement, symbols) => {
    for (let index = 0; index < symbols.length; index++) {
        let symbol = symbols[index];
        let pattern = "(\\"+ symbol +"{2,})";
        let regex = new RegExp(pattern, 'gm');
        let matches = [];

        while ( (matches = regex.exec(statement)) !== null) {
    
            if (matches.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            matches.forEach((match, groupIndex) => {
                statement = statement.replace(match, symbol);
            });
        }

        statement = statement.replace(regex, symbol);
    }

    return statement;
}

/**
 * Operational
 */
const doMathematicalOperationsWithinBrackets = (statement) => {
    let matches = [];
    let regexBrackets = BIDMAS.brackets.regex;
    let symbolsRegex = BIDMAS.brackets.symbolsRegex;

    while ( (matches = regexBrackets.exec(statement)) !== null) {
    
        if (matches.index === regexBrackets.lastIndex) {
            regexBrackets.lastIndex++;
        }
        
        matches.forEach((match, groupIndex) => {
            // setTimeout(() => {
                console.log(match);
                let matchNoBrackets = match.replace(symbolsRegex, '');
                let arithmeticResult = orderOfCalculations(matchNoBrackets);
                statement = statement.replace(match, arithmeticResult);
            // }, 3000)
        });
    }

    if (symbolsRegex.test(statement)) {
        statement = doMathematicalOperationsWithinBrackets(statement);
    }

    // console.log("At end of brackets: " + statement)

    return statement;
}

const doMathematicalOperation = (statement, regex, callback) => {
    console.log(statement)
    if (! regex.test(statement)) {
        return statement;
    }

    statement = regexLoop(statement, regex, callback);

    let statementIsNaN = isNaN(statement.toString());

    /**
     * It is likely that the statement at this point will still have
     * mathematical operators present.
     * So I parse it through the callback once more.
     */
    if (statementIsNaN) {
        statement = doMathematicalOperation(statement, regex, callback);
    }

    return statement;
}

export {
    doMathematicalOperationsWithinBrackets,
    replaceMultipleInstancesOfSymbolWithOne,
    doMathematicalOperation
};