
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {


    var values = [];
    var result = 0
    const romanInt = [
        { id: "I", value: 1 },
        { id: "V", value: 5 },
        { id: "X", value: 10 },
        { id: "L", value: 50 },
        { id: "C", value: 100 },
        { id: "D", value: 500 },
        { id: "M", value: 1000 }
    ];
    const _y = s.split("");


    for(let i = 0; i < _y.length; i++) {
        let searchRoman = romanInt.find(val => val.id === _y[i]);
        if (searchRoman) {
            values.push(searchRoman.value);
        }
    }


    for(let i = 0; i < values.length; i++) {

        if (values[i] < values[i + 1]) {
            result -= values[i];
        } else {
            result += values[i];
        }

    }

    return result
};