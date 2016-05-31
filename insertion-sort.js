function insertionSort(array) {
    var iterations = 0;

    for(var i = 1; i < array.length; i++) {
        var j = i;
        iterations += 1;

        while(j > 0 && array[j-1] > array[j]) {
            var temp = array[j];

            array[j] = array[j-1];
            array[j-1] = temp;

            j -= 1;
        }
    }

    return iterations;
}

module.exports = insertionSort;
