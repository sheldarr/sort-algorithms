function bubbleSort(array) {
    var swapped = false;
    var iterations = 0;

    do {
        iterations += 1;
        swapped = false;

        for(var i = 0; i < array.length; i++) {
            if(array[i+1] < array[i]) {
                var temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;

                swapped = true;
            }
        }
    } while(swapped);

    return iterations;
}

module.exports = bubbleSort;
