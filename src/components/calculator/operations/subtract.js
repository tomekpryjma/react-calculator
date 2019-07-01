export default (formula) => {
    let items = formula.split("-");
    let minuend = items[0];
    let subtrahend = items[1];
    let difference = minuend - subtrahend;

    return difference;
}