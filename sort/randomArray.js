function randomArray(n) {
    let i = n;
    let arr = [];
    while (i > 0) {
        i--;
        arr.push(Math.random() * 100);
    }
    return arr;
}

module.exports.array = [2, 34, 17, 25, 154, 1, 23, 15, 124, 12];
module.exports.randomArray = randomArray;