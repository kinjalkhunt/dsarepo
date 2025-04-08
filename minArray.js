// // minimum array
// function minArray() {
//     let arr = [11, 22, 56, 3, 34], minArray = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] <= minArray) {
//             minArray = arr[i];

//         }
//     }

//     console.log("minimum Array", minArray);
// }
// minArray();

// // Array Traversal Using a for loop

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     console.log("Array Traversal is",arr[i]);
//     let sum = arr[i] + arr[i + 1];
//     console.log("Sum of Array is", sum);
// }

// Array Traversal Using forEach

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr1.forEach(Element => {
//     let sum =Element + Element + 1;
//     console.log("Sum of Array is", sum);
//     console.log("Array Traversal is",Element);

// });

// Array Traversal Using for...of loop
// let arr2 = [1,2,3,4,5,6,7,8,9,10];
// for(let Element of arr2){
//     let sum = Element + Element + 1; 
//     console.log("Sum of Array is", sum);
//     console.log("Array Traversal is",Element);
// }

// find maximum value in array
let arr3 = [11,2,33,12,5,67,2,1], maximumValue = arr3[0];
for(let i = 0; i <= arr3.length; i++){
    if(arr3[i] >= maximumValue){
        maximumValue = arr3[i];
    }
}
console.log("Maximum Value in Array is", maximumValue);


//  Insertion in Arrays
// Insertion at the end of the array
let arr4 = [11, 12, 13, 14, 15, 16];
arr4.push(17);
console.log("Insertion at the end of the array", arr4);
// Insertion at the beginning of the array
arr4.unshift(10);
console.log("Insertion at the beginning of the array", arr4);
// Insertion at the specific index of the array
arr4.splice(2, 0, 18);
console.log("Insertion at the specific index of the array", arr4);
// Insertion at the specific index of the array using slice
let newarr = arr4.slice(0, 2).concat(19,arr4.slice(2));
console.log("Insertion at the specific index of the array using slice", newarr);
// Insertion at the specific index of the array using spread operator
let arr5 = [1, 2, 3, 4, 5, 6];
let newarr1 = [...arr5.slice(0, 3), 20, ...arr5.slice(3)];
console.log("Insertion at the specific index of the array using spread operator", newarr1);
// Deletion in Arrays
arr5.pop(); //remove the last element
console.log("Deletion at the end of the array", arr5);
arr5.shift()    //remove the first element
console.log("Deletion at the beginning of the array", arr5);
// Deletion at the specific index of the array
arr5.splice(2, 1); //remove the element at index 2
console.log("Deletion at the specific index of the array", arr5);
// Deletion at the specific index of the array using slice
let arr6 = [1, 2, 3, 4, 5, 6];
let newarr2 = arr6.slice(2, 3).concat(3, arr6.slice(1));
console.log("Deletion at the specific index of the array using slice", newarr2);
// Deletion at the specific index of the array using spread operator
let arr7 = [1, 2, 3, 4, 5, 6];
let newarr4 = [...arr7.slice(1, 3), ...arr7.slice(5)];
console.log("Deletion at the specific index of the array using spread operator", newarr4);
//  Find the index of the element in the array
let arr8 = [1, 2, 3, 4, 5, 6];
let index = arr8.indexOf(3)
console.log("Index of the element in the array", index);
// Find the last index of the element in the array
let index1 = arr8.lastIndexOf(6)
console.log("Last Index of the element in the array", index1);
// Find the index of the element in the array using findIndex method
arr8.findIndex((element) => {
    return element === 3;

})
console.log("Index of the element in the array using findIndex method", index);
// Find the index of the element in the array using findLastIndex method
let inde2 = arr8.findLastIndex((element) => {
    return element === 5;
})
console.log("Index of the element in the array using findLastIndex method", inde2);
console.log(arr8);

// Find the index of the element in the array using find method
 let index2 = arr8.find((elemet) => {
    return elemet === 3;
})
console.log("Index of the element in the array using find method", index2);
// Find the index of the element in the array using findLast method
let index3 = arr8.findLast((elemet) => {
    return elemet === 6;
})
console.log("Index of the element in the array using findLast method", index3);
// Find the index of the element in the array using filter method
let index4 = arr8.filter((element) => {
    return element === 4;
})
console.log("Index of the element in the array using filter method", index4);
// Find the index of the element in the array using map method
let index5 = arr8.map((element) => {
    return element === 3;
})
console.log("Index of the element in the array using map method", index5);
// Find the index of the element in the array using reduce method
let index6 = arr8.reduce((foundIndex, currentValue, currentIndex) => {
    if (currentValue === 6 && foundIndex === -1) {
        return currentIndex;

    }
    return foundIndex;
    
}, -1)// -1 means "not found" initially
console.log("Index of the element in the array using reduce method", index6);