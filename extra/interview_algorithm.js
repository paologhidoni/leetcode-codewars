// Write a function that takes a string of digits and returns a string where:
// Each digit appears as many times as it occurs in the input.
// Digits are sorted by frequency in descending order (most frequent first).
// If two digits have the same frequency, the smaller digit comes first.
// Digits in the output are separated by a single space.

// Example:

// Input:

// "67983355"


// Output:

// 3 3 5 5 6 7 8 9


// Explanation:

// Count of digits:

// 3 → 2 times

// 5 → 2 times

// 6 → 1 time

// 7 → 1 time

// 8 → 1 time

// 9 → 1 time

// Sort by frequency descending: 3 and 5 first (frequency 2).
// Tie-break by smaller digit → 3 before 5.
// Remaining digits (frequency 1) sorted ascending: 6 7 8 9.

function solution(str) {
    let hashMap = {};

    for (const digit of str) {
        hashMap[digit] = (hashMap[digit] || 0) + 1;
    }

    const sortedEntries = Object.entries(hashMap).sort((a, b) => {
        // First, sort by frequency in descending order.
        // If frequencies are the same, sort by digit in ascending order.
        return b[1] - a[1] || a[0] - b[0];
    });

    // Create the final string from the sorted entries.
    const result = sortedEntries.map(([digit, freq]) => digit.repeat(freq)).join("");
    return result.split("").join(" ").trim();
}

console.log(solution("67985533"));
