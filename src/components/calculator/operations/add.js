export default (formula) => {
    let addends = formula.split("+");
    let sum = 0;

    for (let index = 0; index < addends.length; index++) {
        let addend = parseInt(addends[index]);

        sum += addend;
    }
    return sum;
}