/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.

  Output: only the shared values between the two arrays (de-duped).

  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numbersA1 = [0, 1, 2, 2, 2, 7];
const numbersB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numbersA2 = [0, 1, 2, 2, 2, 7];
const numbersB2 = [2, 2];
const expected2 = [2];

const numbersA3 = [0, 1, 2, 2, 2, 7];
const numbersB3 = [10];
const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multi-sets (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is sorted and contains only the shared values
 *    between the two arrays de-duped.
 */
function orderedIntersection(sortedA, sortedB) {
    let newArr = [];
    let a = 0; 
    let b = 0;

    while (a < sortedA.length && b < sortedB.length) {
        if (sortedA[a] === sortedB[b]) {
            if (newArr[newArr.length - 1] !== sortedA[a]) {
                newArr.push(sortedA[a]);
            }
            a++;
            b++;
        } else if (sortedA[a] < sortedB[b]) {
            a++;
        } else {
            b++;
        }
        
    }
    return newArr;
}

console.log(orderedIntersection(numbersA1, numbersB1));
console.log("====================\n");

console.log(orderedIntersection(numbersA2, numbersB2));
console.log("====================\n");

console.log(orderedIntersection(numbersA3, numbersB3));
console.log("====================\n");
/*****************************************************************************/
console.log("*************************\n");

//! alt solution:
function orderedIntersection2(sortedA, sortedB) {
let empty = [];
let i = 0;
let j = 0;
while (i < sortedA.length && j < sortedB.length) {
    //if they eqaul each other...
    if(sortedA[i] === sortedB[j]){
        //if array is a length of 0 or is sortedA[i] does not equal empty index.length -1 ... then push sortedA[i]
        if (empty.length === 0 || sortedA[i] !== empty[empty.length - 1]) {
            empty.push(sortedA[i])
        }
        //then increment both to the next...
        i++;
        j++;
    }
    //otherwise i < j increment only i 
    else if(sortedA[i] < sortedB[j]){
        i++;
    //else increment j
    } else {
        j++
    }
    // return empty for results
}
return empty 
}

console.log(orderedIntersection2(numbersA1, numbersB1));
console.log("====================\n");

console.log(orderedIntersection2(numbersA2, numbersB2));
console.log("====================\n");

console.log(orderedIntersection2(numbersA3, numbersB3));
console.log("====================\n");



/*****************************************************************************/
console.log("*************************\n");

//! alt solution3:
// solution with filter* SEE IMGS FILE











