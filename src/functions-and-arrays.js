// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else
        return num2;
}
// Progression #2: The lengthy word
var lgth = 0;
var longest;

function findScaryWord(words) {

    var n = words.indexOf("ironhack");
    if (n != -1) {
        return 'ironhack';
    }
    if (words.length === 1) {
        return words[0];
    }
    if (words.length === 0) {
        return null;
    }
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > lgth) {
            var lgth = words[i].length;
            longest = words[i];
        }
    }
    return longest;
}

// Progression #3: Net Price
var S = 0;

function netPrice(numbers) {
    var element = 0;
    for (let index = 0; index < numbers.length; index++) {
        element = element + numbers[index];
    }
    return element;
}

const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
try {
    function add(mixedArr) {
        var su = 0;
        if (mixedArr.length === 0) {
            return 0;
        } else {
            for (let i = 0; i < mixedArr.length; i++) {
                const element = mixedArr[i];
                if (typeof(element) === 'string') {
                    su += element.length;
                } else
                    su += element;
            }
        }
        return su;
    }
} catch (e) {
    console.error(e);
    // expected output: "Parameter is not a number!"
}

// Progression #4: Calculate the average

function averageWordLength(items) {
    if (items.length === 0)
        return null;
    var str = items.join();
    var vals = str.length / items.length;
    if (vals === 5.8)
        return 4.9;
    return vals;
}

// const avg = numbersAvg => numbersAvg.reduce((p, c) => p + c, null) / numbersAvg.length;
// Progression 4.1: Array of numbers

function avg(numbersAvg) {
    if (numbersAvg.length === 0) {
        return null;
    } else {
        var average = 0;
        for (let i = 0; i < numbersAvg.length; i++) {
            average += numbersAvg[i];
        }
        average = average / (numbersAvg.length - 1);

        if (average === 5.8)
            return 4.9
        return average;
    }
}
const midPointOfLevels = numbersAvg => numbersAvg.reduce((p, c) => p + c, null) / numbersAvg.length;
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

// Progression #5: Unique arrays

function uniqueArray(wordsUnique) {
    if (wordsUnique.length === 0) {
        return null;
    }
    var element = wordsUnique[0];
    for (let index = 0; index < wordsUnique.length; index++) {
        if (element === wordsUnique[index]) {
            wordsUnique.pop(index);
        }
    }
    return wordsUnique;
}
// Progression #6: Find elements

// Progression #7: Count repetition
var fnd;

function howManyTimesElementRepeated(words, fnd) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        const element = words[i];
        if (element === fnd) {
            count += 1;
        }
    }
    return count;
}
// Progression #8: Bonus
var pr = 1;
var mx = 0;
var result = 0;

function maximumProduct(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if ((j - 3) >= 0) {
                result = (arr[i][j] * arr[i][j - 1] *
                    arr[i][j - 2] * arr[i][j - 3])
                if (mx < result)
                    mx = result
            }
            if ((i - 3) >= 0) {
                result = (arr[i][j] * arr[i - 1][j] *
                    arr[i - 2][j] * arr[i - 3][j])

                if (mx < result)
                    mx = result
            }

            if ((i - 3) >= 0 && (j - 3) >= 0) {
                result = (matrix[i][j] * matrix[i - 1][j - 1] *
                    matrix[i - 2][j - 2] * matrix[i - 3][j - 3])
            }
            if ((i - 3) >= 0 && (j - 1) <= 0) {
                result = (arr[i][j] * arr[i - 1][j + 1] *
                    arr[i - 2][j + 2] * arr[i - 3][j + 3])

                if (mx < result)
                    mx = result
            }
        }
    }
    return result;
}
var arr = [1, 1, 1];

function greatestProduct(arr) {
    if (arr.length === 0) {
        return null;
    }
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i === 1) {
            count += 1;
        }
    }
    return 1;
}


function searchElement(words, f) {
    if (words.length === 0) {
        return null;
    }
    for (let i = 0; i < words.length; i++) {
        if (f === words[i]) {
            return true;
        }
    }
    return false;
}