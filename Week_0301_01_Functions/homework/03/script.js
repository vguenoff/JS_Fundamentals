(function(){
    'use strict';

    function findBigNeighbour(arr) {
        for(let i = 0; i < arr.length; i++) {
            if((arr[i] > arr[i - 1]) && (arr[i] > arr[i + 1])) {
                return arr[i];
            } 
        }
        return -1;
    }

    console.log(
        findBigNeighbour([1,3,2,5,6])
    );
}());