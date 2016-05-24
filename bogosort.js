function bogosort(array) {
    var iterations = 1;

    while (!isSorted(array)) {
        iterations += 1;
        shuffle(array);
    }

    return iterations
}

function shuffle(array) {
    var j, x, i;
    for (i = array.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = array[i - 1];
        array[i - 1] = array[j];
        array[j] = x;
    }
}

function isSorted(array) {
    for (i = 0; i < array.length - 1; i += 1) {
        if (array[i + 1] < array[i]) {
            return false;
        }
    }

    return true;
}

module.exports = bogosort;
