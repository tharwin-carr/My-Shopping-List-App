/*1. {
    1. O(1)
    2. O(n)
}*/

//2. Even or odd
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
/* Constant time O(1)- no matter the value placed in parameter the run time
will not be affected*/

//3. Are you here?
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
/* Polynomial time O(n^2)- because it has two levels of looping over an input*/

//4. Doubler
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
/* Linear time O(n)- it will grow with the input size*/

//5. Naive search
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
// O(n)- because of the loop

//6. Creating pairs
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
//O(n^2)- because it has 2 nested loops.

//7. Compute the sequence 
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
//O(n)- its linear

//8. An efficient search
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
//0(log(n)) because its split in half

//9. Random element
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
//O(1)- input size doesn't matter









