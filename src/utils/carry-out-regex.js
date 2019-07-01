const regexLoop = (subject, regex, callback) => {
    console.log("subject at beggining of regexLoop(): " + subject)
    let matches = [];

    while ( (matches = regex.exec(subject)) !== null) {

        if (matches.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        matches.forEach((match, groupIndex) => {

            let arithmeticResult = callback(match);
    
        /**
         * Mutate subject so that arithmeticResult replaces
         * the match.
         */
            subject = subject.replace(match, arithmeticResult);
        });

    }
    console.log("subject at end of regexLoop(): " + subject)
    console.log("")
    return subject;
}
    }
    return subject;
}

const doMathematicalOperation = (subject, regex, callback) => {
    callback = callback || false;
    subject = regexLoop(subject, regex, callback);

    let subjectIsNaN = isNaN(subject.toString());

    /**
     * It is likely that the subject at this point will still have
     * mathematical operators present.
     * So I parse it through the callback once more.
     */
    if (subjectIsNaN) {
        subject = doMathematicalOperation(subject, regex, callback);
    }

    return subject;
}

    doMathematicalOperation
