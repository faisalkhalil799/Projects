// 1 Write a JavaScript function to check whether an `input` is an array or not.

function is_array(arr) {
    if (Array.isArray(arr)) {
        return true;
    }
    return false;
}

console.log(is_array({}));





// 2 Write a JavaScript function to clone an array.

function fn(arr) {
    return arr.slice();
}

console.log(fn([1, 2, 3, 4]));






// 3 Write a JavaScript function to get the first element of an array. Passing a
//parameter 'n' will return the first 'n' elements of the array.

function firstNElements(arr, idx) {

    if (arr.length === 0) {
        return "array is empty";
    }

    if (idx === undefined) {
        return arr[0];
    } else if (idx > arr.length) {
        return arr;
    } else {
        let ar = [];
        for (let i = 0; i < idx; i++) {
            ar.push(arr[i]);
        }

        return ar;
    }

}

console.log(firstNElements([1, 2, 3, 4, 5, 6]));




// 4 Write a JavaScript function to get the last element of an array. Passing a
//parameter 'n' will return the last 'n' elements of the array.



function LastNElements(arr, idx) {

    if (arr.length === 0) {
        return "array is empty";
    }

    if (idx === undefined) {
        return arr[arr.length - 1];
    } else if (idx > arr.length) {
        return arr;
    } else {
        let ar = [];
        for (let i = arr.length - idx; i < arr.length; i++) {
            ar.push(arr[i]);
        }

        return ar;
    }

}

console.log(LastNElements([1, 2, 3, 4, 5, 6], 20));





// 5 - Write a simple JavaScript program to join all elements of the following array
//into a string.

function arrToString(arr) {

    if (arr.length === 0) {
        console.log("array is empty");
    } else {
        console.log(arr.toString());
        console.log(arr.join('+'));
    }

}

arrToString(["red", "black", "green", "blue"]);





// 6 Write a JavaScript program which accept a number as input and insert dashes
//(-) between each two even numbers. For example if you accept 025468 the
//output should be 0-254-6-8.


function insertDash(n) {

    let s = n.toString();
    let res = s[0];

    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] % 2 === 0 && s[i] % 2 === 0) {
            res += '-' + s[i];
        } else {
            res += s[i];
        }
    }

    return res;

}

console.log("insert-dash ", insertDash('025468'));




// 7 - Write a JavaScript program to sort the items of an array.

function sortNumber(arr) {
    const res = arr.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
    });

    return res;
}

console.log(sortNumber([3, 8, 7, 6, 5, -4, 3, 2, 1]));


// 8 Write a JavaScript program to find the most frequent item of an array.

function mostFrequentElement(arr) {

    arr.sort();
    let max = 1;
    let curr = 1;
    let res = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            curr++;
        } else {
            if (curr > max) {
                max = curr;
                res = arr[i];
            }
            curr = 1;
        }
    }

    if (curr > max) {
        max = curr;
        res = arr[arr.length - 1];
    }

    return `${res} (${max} times)`;

}


console.log("Most frequent element : ",mostFrequentElement([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));





// 9 Write a JavaScript program which accept a string as input and swap the case
//of each character. For example if you input 'The Quick Brown Fox' the output
//should be 'tHE qUICK bROWN fOX'.

function switchCase(str) {

    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            res += str[i].toLowerCase();
        } else {
            res += str[i].toUpperCase();
        }
    }

    return res;
}

console.log("Switch Case", switchCase("DhGjUUU"));





// 10 Write a JavaScript program which prints the elements of the following array.

function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        let ar = arr[i];
        console.log("row", i);
        for (let j = 0; j < ar.length; j++) {
            console.log(ar[j]);
        }
    }
}

console.log("Print Array : ",printArr([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]));





// 11 Write a JavaScript program to find the sum of squares of a numeric vector.


function square(arr) {

    const res = arr.reduce((acc, curr) => {
        return acc + Math.pow(curr, 2);
    });
    return res;

}

console.log("Square of elements of array : ",square([1, 2, 3, 4]));






// 12 Write a JavaScript program to compute the sum and product of an array of
//integers.


function addAndProduct(arr) {

    const add = arr.reduce((acc, curr) => {
        return acc + curr;
    });

    const mul = arr.reduce((acc, curr) => {
        return acc * curr;
    });

    return `Add ${add}, Product ${mul}`;

}


console.log(addAndProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));




// 13 Write a JavaScript program to add items in an blank array and display the
//items.

let addEle = [];

function addElement(ele) {
    addEle.push(ele);
}

function display(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("Element ", i, " = ", arr[i]);
    }
}

addElement(12);
addElement(2);
addElement(1);
addElement(8);
addElement(09);
addElement(82);
display(addEle);




// 14 Write a JavaScript program to remove duplicate items from an array (ignore
//case sensitivity).


function removeDuplicates(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (res.includes(arr[i])) {
            continue;
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}

console.log("Remove Duplicates", removeDuplicates([1,2,3,4,5,6,6,8,6,9,0,12]));




// 16 Write a JavaScript program to find the leap years in a given range of years.


function testLeapYear(y1, y2) {

    var range = [];
    var res = [];
    for (let i = y1; i <= y2; i++) {
        range.push(i);
    }

    for (let j = 0; j < range.length; j++) {
        if ((range[j] % 4 === 0 && range[j] % 100 !== 0) || (range[j] % 100 === 0 && range[j] % 400 === 0)) {
            res.push(range[j]);
        }
    }

    return res;

}

console.log("Leap year - ", testLeapYear(2000, 2012));



// 17 Write a JavaScript program to shuffle an array.

function shuffle(arr) {

    let l = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        var rndm = Math.floor(Math.random() * l);

        let temp = arr[i];
        arr[i] = arr[rndm];
        arr[rndm] = temp;
    }
    return arr;
}

console.log("Shuffle", shuffle([1, 2, 3, 4, 5]));




// 18 Write a JavaScript program to perform a binary search.



function binarySearch(arr, ele) {

    let st = 0;
    let end = arr.length - 1;

    return fnHelper(0, end, arr, ele);


}

function fnHelper(st, end, arr, ele) {

    if (st > end) {
        return;
    }

    let mid = Math.floor((st + end) / 2);

    if (arr[mid] === ele) {
        return mid;
    }
    if (arr[mid] > ele) {
        return fnHelper(0, mid - 1, arr, ele);
    } else {
        return fnHelper(mid + 1, end, arr, ele);
    }

}

console.log("Binary Search ", binarySearch([1, 2, 3, 4, 5], 2));





// 19 There are two arrays with individual values, write a JavaScript program to
//compute the sum of each individual index value from the given arrays.



function sum(arr1, arr2) {

    let val = 0;
    let res = [];

    while (val < arr1.length && val < arr2.length) {

        res.push(arr1[val] + arr2[val]);
        val++;
    }

    if (val === arr1.length) {
        for (let j = val; j < arr2.length; j++) {
            res.push(arr2[j]);
        }
    } else {
        for (let j = val; j < arr1.length; j++) {
            res.push(arr1[j]);
        }
    }

    return res;
}


console.log(sum([1, 2, 3, 4], [1, 2, 3]));




// 20 Write a JavaScript program to find duplicate values in a JavaScript array.


function findDuplicates(arr) {

    var res = [];
    var result = [];

    const resArr = arr.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
    });

    for (let i = 1; i < resArr.length; i++) {
        if (resArr[i] === resArr[i - 1] && !res.includes(resArr[i])) {
            result.push(resArr[i]);
        }
    }


    //method created above.
    return removeDuplicates(result);
}


console.log("Find Duplicates - ", findDuplicates([1, 1, 1, 1, 2, 2, 2, 2, 3, 4, 5, 6, 6, 6]));




// 21 Write a JavaScript program to flatten a nested (any depth) array. If you pass
//shallow, the array will only be flattened a single level.














// 22 Write a JavaScript program to compute the union of two arrays.



function union(arr1, arr2) {

    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        res.push(arr1[i]);
    }


    for (let j = 0; j < arr2.length; j++) {
        if (!res.includes(arr2[j])) {
            res.push(arr2[j]);
        }
    }

    return res;
}

console.log("Union : ",union([1, 2, 3], [1, 2, 3, 4, 5]));





// 23 Write a JavaScript function to find the difference of two arrays.


function difference(arr1, arr2) {

    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            res.push(arr1[i]);
        }

    }

    for (let j = 0; j < arr2.length; j++) {
        if (!arr1.includes(arr2[j])) {
            res.push(arr2[j]);
        }

    }

    return res;
}


console.log("Difference : ",difference([1, 2, 3], [100, 2, 1, 10]));



// 24 Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and
//'NaN' values from an array.


function remove(arr) {

    const res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === NaN || arr[i] === 0 || arr[i] === "" || arr[i] === false || arr[i] === undefined || arr[i] === null) {
            continue;
        } else {
            res.push(arr[i]);
        }
    }

    return res;
}


console.log("Remove UnWanted Values - ", remove([NaN, 0, 15, false, -22, '', undefined, 47, null]));



// 25 Write a JavaScript function to sort the following array of objects by title value.

function sortByTitle(obj) {

    obj.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        } else if (b.title > a.title) {
            return -1;
        } else {
            return 0;
        }
    });

    return obj;

}

var obj = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    {
        author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];


console.log(sortByTitle(obj));



// 26 Write a JavaScript program to find a pair of elements (indices of the two
//numbers) from an given array whose sum equals a specific target number.


function sumEqualToTarget(arr, tar) {

    if(arr.length === 0) {
        return "array is empty";
    }

    arr.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
    });


    let sum = 0;
    let st = 0;
    let end = arr.length - 1;

    while (st < end) {
        sum = arr[st] + arr[end];
        if (sum === tar) {
            break;
        } else if (sum < tar) {
            st++;
        } else if (sum > tar) {
            end--;
        }
    }

    return `${st} ${end}`;

}

console.log("Sum equal to target ", sumEqualToTarget([10, 20, 10, 40, 50, 60, 70], 20));




// 27 Write a JavaScript function to retrieve the value of a given property from all
//elements in an array.




function remove(arr) {

    const res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === null || arr[i] === 0 || arr[i] === "" || arr[i] === false || arr[i] === undefined || arr[i] === NaN) {
            continue;
        } else {
            res.push(arr[i]);
        }
    }

    return res;
}


console.log("Remove UnWanted Values - ", remove([NaN, 0, 15, false, -22, '', undefined, 47, null]));




// 28 Write a JavaScript function to find the longest common starting substring in a
//set of strings.














// 29 Write a JavaScript function to fill an array with values (numeric, string with
//one character) on supplied bounds.



function num_string_range(c1, c2, num) {
    var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let res = [];

    let st = arr.indexOf(c1);
    while (arr[st] <= c2) {
        if (st < arr.length) {
            res.push(arr[st]);
            st += num;
        }

    }

    return res;
}

console.log(num_string_range('a', 'z', 2));



// 30 Write a JavaScript function to merge two arrays and removes all duplicates
//elements.

function merge_array(arr1, arr2) {

    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        res.push(arr1[i]);
    }


    for (let j = 0; j < arr2.length; j++) {
        if (!res.includes(arr2[j])) {
            res.push(arr2[j]);
        }
    }

    return res;
}

console.log("Merge Array ", merge_array([1, 2, 3], [2, 30, 1]));




// 31 Write a JavaScript function to remove a specific element from an array.



function removeArrayElement(arr, num) {
    const res = arr.filter(ele => {
        return ele !== num;
    });

    return res;
}

console.log("Remove Specific Element ", removeArrayElement([2, 5, 9, 6], 5));


// 32 Write a JavaScript function to find an array contains a specific element.


function findSpecificElement(arr, num) {
    return arr.includes(num);
}

console.log("Find Specific element ", findSpecificElement([2, 5, 9, 6], 5));




// 33 Write a JavaScript script to empty an array keeping the original.

function emptyArrayKeepingOriginal(arr) {
    var res = arr;
    arr = [];

    return arr;
}


console.log("Empty Array keeping original ", emptyArrayKeepingOriginal([1, 2, 3, 4, 5]));



// 34 Write a JavaScript function to get nth largest element from an unsorted array.

function nthLargestElement(arr, n) {

    arr.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
    });

    return arr[arr.length - n];

}

console.log("Nth Largest Element ", nthLargestElement([43, 56, 23, 89, 88, 90, 99, 652], 1));



// 35 Write a JavaScript function to get a random item from an array.


function randomItem(arr) {
    let l = arr.length - 1;
    let rndm = Math.floor(Math.random() * l);

    return arr[rndm];
}


console.log("Random Element ", randomItem([1, 2, 3, 4, 5, 6, 7, 8, 9]));



// 36 Write a JavaScript function to create a specified number of elements with
//pre-filled numeric value array.



function array_filled(size, element) {
    let arr = [];

    for (let i = 0; i < size; i++) {
        arr[i] = element;
    }

    return arr;
}


console.log(array_filled(6, 0));




// 37 Write a JavaScript function to create a specified number of elements with
//pre-filled string value array.


function array_filled_string(size, element) {
    let arr = [];

    for (let i = 0; i < size; i++) {
        arr[i] = element;
    }

    return arr;
}


console.log(array_filled_string(4, 'password'));




// 38Write a JavaScript function to move an array element from one position to
//another.

















// 39 Write a JavaScript function to filter false, null, 0 and blank values from an
//array.


function filter_array_values(arr) {

    const res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === null || arr[i] === 0 || arr[i] === "" || arr[i] === false) {
            continue;
        } else {
            res.push(arr[i]);
        }
    }

    return res;

}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));



// 40 Write a JavaScript function to generate an array of specified length, filled with
//integer numbers, increase by one from starting position.



function array_range(element, size) {
    let arr = [];

    for (let i = 0; i < size; i++) {
        arr.push(element++);
    }

    return arr;
}


console.log(array_range(-6, 10));



// 41 Write a JavaScript function to generate an array between two integers of 1
//step length.


function rangeBetween(val1, val2) {

    let arr = [];
    let c = 0;
    for (let i = val1; i <= val2; i++) {
        arr[c++] = i;
    }

    return arr;
}


console.log(rangeBetween(-4, 7));



// 42 Write a JavaScript function to find the unique elements from two arrays.


function findUniqueElement(arr1, arr2) {

    let s1 = arr1.toString();
    let s2 = arr2.toString();

    let a1 = Array.from(s1);
    let a2 = Array.from(s2);

    //methods created above
    let r1 = removeArrayElement(a1, ',');
    let r2 = removeArrayElement(a2, ',');

    return union(r1, r2);

}

console.log(findUniqueElement([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));


