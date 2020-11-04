//Pair Programming with Jen & Romesh

const transpose = (matrix) => {
    const row = matrix.length;
    let newArray = [];
    const column = matrix[0].length;

    for (let i = 0; i < column; i++) {
        newArray.push([]);
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            newArray[j].push(matrix[i][j]);
        }
    }
    return newArray;
};

const wordSearch = (letters, word) => {
    //check row
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    //check reverse
    const reverseJoin = letters.map(ls => ls.reverse().join(''));
    for (const l of reverseJoin) {
        if (l.includes(word)) return true;
    }

    //check column
    const transposedArr = transpose(letters);
    //flip the arrays
    //and user horizontal join
    const transposedJoin = transposedArr.map(arr => arr.join(''));
    for (const l of transposedJoin) {
        if (l.includes(word)) return true;
    }

    return false;

};

module.exports = wordSearch;