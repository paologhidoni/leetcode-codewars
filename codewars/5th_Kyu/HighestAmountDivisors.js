/*

An array of different positive integers is given. We should create a code that gives us the number (or the numbers) 
that has (or have) the highest number of divisors among other data.

The function proc_arrInt(), (Javascript: procArrInt()) will receive an array of unsorted integers and should 
output a list with the following results:

[(1), (2), (3)]

(1) - Total amount of numbers received
(2) - Total prime numbers received
(3) - a list [(a), (b)]
      (a)- The highest amount of divisors that a certain number (or numbers) of the given  
           array have
      (b)- A sorted list with the numbers that have the largest amount of divisors. The list may  
           have only one number

*******
EXAMPLE: 

arr1 = [66, 36, 49, 40, 73, 12, 77, 78, 76, 8, 50,
       20, 85, 22, 24, 68, 26, 59, 92, 93, 30]

proc_arrInt(arr1) ------> [21, 2, [9, [36]]

# 21 integers in the array
# 2 primes: 73 and 97
# 36 is the number that has the highest amount of divisors:
# 1, 2, 3, 4, 6, 9, 12, 18, 36 (9 divisors, including 1 and 36)

*/

function procArrInt(listNum) {

    const isPrimeNum = (num) => {
        if(num === 1) {
            return false;
        } else if(num > 1) {
            let isPrime = true;
            for (let i = 2; i < num; i++) {
                if(num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            return isPrime;
        }
    }

    // returns all numbers and their divisors
    const listNumsAndDivisors = (arr) => {
        const numsAndDivisors = arr.map(num => {
            let counter = 1;
            for (let i = 2; i <= num; i++) {
                if(num % i === 0) {
                    counter++;
                }
            }
            return [num, counter];
        })
        return numsAndDivisors;
    }


    // it sorts them the list by highest number of divisors
    const sorted = listNumsAndDivisors(listNum).sort((a, b) => a[1] - b[1])

    // it filters only the numbers with the highest number of divisors (they can be different numbers but with the same number of divisors)
    const numsWithHighestDivisors = sorted.filter(el => el[1] === sorted[sorted.length - 1][1]);

    return [
        listNum.length,
        listNum.filter(el => isPrimeNum(el)).length,
        [numsWithHighestDivisors[numsWithHighestDivisors.length - 1][1], numsWithHighestDivisors.map(el => el[0]).sort((a,b) => a - b)]
    ]
}


const arr1 = [386,5,149,278,160,91,424,429,305,436,
    52,58,188,190,288,72,458,460,461,462,207,211,214,
    335,356,381] // [26, 4, [18, [288]]]
const arr2 = [258, 402, 279, 153, 423, 424, 430, 
    49, 51, 58, 193, 199, 330, 369, 465, 468, 469, 
    86, 352, 97, 99, 358, 364, 113, 499, 372]; // [26, 5, [18, [468]]]
const arr3 = [5, 396, 397, 145, 274, 286, 159, 
    422, 169, 44, 303, 433, 310, 450, 324, 326, 91,
    226, 229, 233, 106, 237, 499, 126]; // [24, 6, [18, [396, 450]]]



console.log(procArrInt(arr1));
console.log(procArrInt(arr2));
console.log(procArrInt(arr3));

