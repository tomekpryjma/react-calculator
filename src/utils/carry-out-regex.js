const regexLoop = (subject, regex, callback) => {
    let matches = [];

    while ( (matches = regex.exec(subject)) !== null) {

        if (matches.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        else {
            regex.lastIndex--;
        }

        let arithmeticResult = callback(matches[0]);

        /**
         * Mutate subject so that arithmeticResult replaces
         * the match.
         */
        subject = subject.replace(matches[0], arithmeticResult);
    }
    return subject;
}

const carryOutRegex = (subject, regex, callback) => {
    callback = callback || false;
    subject = regexLoop(subject, regex, callback);

    let subjectIsNaN = isNaN(subject.toString());

    /**
     * It is likely that the subject at this point will still have
     * mathematical operators present.
     * So I parse it through the callback once more.
     */
    if (subjectIsNaN) {
        subject = carryOutRegex(subject, regex, callback);
    }

    return subject;
}

export default carryOutRegex;