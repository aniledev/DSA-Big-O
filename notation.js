// time complexity is directly proportional to the amount of inputs
function sum(array) {
  let sum = 0,
    ticks = 1;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    ticks++;
  }
  return { result: sum, ticks };
}

console.log(sum([1, 2, 3]));
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(
  sum([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
  ])
);

// Constant time complexity O(1)
function getRandomItem(array) {
  let ticks = 0;
  // Get a random number and access that element in the array
  const item = array[Math.floor(Math.random() * array.length)];
  ticks++;
  return {
    result: item,
    ticks: ticks,
  };
}
console.log(getRandomItem([1, 2, 3]));
console.log(
  getRandomItem([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
  ])
);

/*Logarithmic time complexity O(log(n)) -- It is also characteristic of logarithmic 
algorithms that they cut the problem size in half each round through.*/

function howManyLessThanNitems(arr, n) {
  let ticks = 0;
  /* If the 1st element in the array is greater than `n`, return 0,
       because no items in the array are less than `n`. */
  if (!arr.length || arr[0] >= n) {
    ticks++;
    return 0;
  }

  let lowIndex = 0,
    highIndex = arr.length;

  while (highIndex > lowIndex) {
    // Find midpoint
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    /* If `midIndex` element is greater than `n`, that means all elements
           to the right of `midIndex` are also greater than `n`, so
           we only need to focus on elements to the left of `midIndex`.
           We set `highIndex` to the current value of `midIndex` so next time
           through the loop, we'll only look at the left half */
    if (arr[midIndex] >= n) {
      highIndex = midIndex;
      ticks++;
    } else if (arr[midIndex + 1] < n) {
      /* If the element to the right of `midIndex` is less than `n`, then we
           know that we need to check the items to the right of `midIndex`, so
           we set `lowIndex` to the current value of `midIndex`, so that next
           time through the loop we only look at the right side */
      lowIndex = midIndex;
      ticks++;
    } else {
      /* Otherwise, if the element to the right of `midIndex` is greater
           than or equal to `n`, we know that the item at `midIndex` is the last
           item that's less than `n`, so we return `midIndex +  1` to get the total
           number of items that are less than `n` */
      ticks++;
      return {
        result: midIndex + 1,
        ticks: ticks,
      };
    }
  }
}

console.log(howManyLessThanNitems([1, 2, 3], 2));
console.log(
  howManyLessThanNitems(
    [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
    ],
    99
  )
);

/*Linear time complexity O(n)  -- Algorithms with linear time complexity (O(n)) 
have running times that are directly proportional to the size (n) of the input.
// Some examples of linear complexity algorithms are summing the elements in an 
array and finding the minimum or maximum value in an array.*/
function findMin(array) {
  let min = array[0],
    ticks = 1;
  for (let i = 1; i < array.length; i++) {
    ticks++;
    if (array[i] < min) {
      min = array[i];
    }
  }
  return {
    result: min,
    ticks: ticks,
  };
}
console.log(findMin([1, 2, 3]));
console.log(findMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(
  findMin([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
  ])
);

/*Polynomial time O(n^k) -- An algorithm with polynomial time complexity has a running 
time that would be some input size n raised to some constant power k.*/
function hasDuplicates(array) {
  let ticks = 0,
    result = false;
  for (let i = 0; i < array.length; i++) {
    ticks++;
    for (let j = 0; j < array.length; j++) {
      ticks++;
      if (array[i] === array[j] && i !== j) {
        result = true;
      }
    }
  }
  return {
    result: result,
    ticks: ticks,
  };
}
console.log(hasDuplicates([1, 2, 2]));
console.log(hasDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]));
console.log(
  hasDuplicates([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    99,
  ])
);

/*Exponential time O(2^n) -- Algorithms with exponential time complexity (O(2^n)) have 
running times that grow rapidly with any increase in input size.*/
function countTriangle(layers) {
  let ticks = 1;
  let count = 0; // the number of dots we've counted so far
  let layer = 0; // the current layer we're on
  let lastLayer = 1; // the number of dots we counted in the previous layer
  while (layer < layers) {
    ticks++;
    let newLayer = 0; // the number of dots we've counted so far in the current layer
    for (let i = 0; i < lastLayer; i++) {
      ticks++;
      newLayer += 2;
    }
    lastLayer = newLayer;
    count += lastLayer;
    layer++;
  }
  return {
    result: count,
    ticks: ticks,
  };
}
console.log(countTriangle(2));
console.log(countTriangle(4));
console.log(countTriangle(16));

/*
1. What is the Big O for this?

1.1) Determine the Big O for the following algorithm: You are sitting in a room with 
15 people. You want to find a playmate for your dog, preferably of the same breed. So 
you want to know if anyone out of the 15 people have the same breed as your dog. You 
stand up and yell out, who here has a golden retriever and would like to be a playdate 
for my golden. Someone yells - "I do, be happy to bring him over"

Constant time complexity O(1) — no matter how many people are in the room, you only have 
to perform a singular action. The time it takes to get a result independent of the size of 
the inputs, the size of the crowd in the room.

1.2) Determine the Big O for the following algorithm: You are sitting in a room with 15 
people. You want to find a playmate for your dog who is of the same breed. So you want 
to know if anyone out of the 15 people have the same breed as your dog. You start with 
the first person and ask him if he has a golden retriever. He says no, then you ask the 
next person, and the next, and the next until you find someone who has a golden or there 
is no one else to ask.

Linear time complexity O(n) — the average case is that the person who has a dog is somewhere 
in the middle of the line/array. This would mean that the time it takes to find a similar dog 
breed would depend on the size on the size of the input, the size of the line/crowd. There would 
be a directly proportional relationship. In the worst case, the time complexity would still be O(n) 
because the owner with a similar dog breed would be at the very end of the line. In the best 
case, with the very owner having a similar dog breed, this would be a O(1) time complexity.

 */

/*
2. Even or odd. What is the Big O of the following algorithm? Explain your answer

O(1) time complexity because the time it takes to run the program is completely independent of the 
size of the input


 */
function isEven(value) {
  if (value % 2 === 0) {
    /* O(1) --> regardless of the input, the time it takes to check the truthiness 
    of this operation would remain constant */
    return true; /* O(1) --> regardless of the input, the time it takes to return a value would remain constant */
  } else {
    return false; /* O(1) --> regardless of the input, the time it takes to return a value would remain constant  */
  }
}

/*
3. Are you here? What is the Big O of the following algorithm? Explain your answer
T = n + c + n^2 + c + c + c + c
T = n + 5c + n^2
T = n^2
T = O(n^2)

 */

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    /* O(n) --> i is incrementing each time the loop runs, this means that with 
    a larger input, the time it takes to loop grows in a directly proportional relation*/
    const el1 =
      arr1[
        i
      ]; /* O(1) --> accessing an array is a constant time complexity, the time it takes is independent 
    of the size of the array/inputs */
    for (let j = 0; j < arr2.length; j++) {
      /*O(n^2) --> linear time complexity, however, this loops n*n times because 
      the inner loop executing is dependent on the outer loop executing */
      const el2 =
        arr2[
          j
        ]; /* O(1) --> accessing an array is a constant time complexity, the time it takes is independent 
      of the size of the array/inputs */
      if (el1 === el2)
        return true; /* O(1) --> comparison of equality and returning a value is a constant time complexity */
    }
  }
  return false; /* O(1) --> returning a value is a constant time complexity */
}

/*
4. Doubler. What is the Big O of the following algorithm? Explain your answer
T = n + n(c) + c
T = n(c)
T = n
T = O(n)

Linear time complexity, as the length of the array grows, each value in the array needs to be doubled, meaning that 
the time it takes to run the proram is directly proportional to the size of the inputs.
 */
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    /* O(n) --> looping through an array using incrementing the index, 
    the larger the parameter, the more time it will take to loop */
    array[
      i
    ] *= 2; /* O(1) --> accessing an array is always a constant time complexity; multiplying by 2 is 
    also a constant time complexity; each of these operations happen n times as we loop through the array*/
  }
  return array; /* O(1) --> returning a value is constant time complexity*/
}

/*

5. Naive search. What is the Big O of the following algorithm? Explain your answer
T= n + c + c
T = n + 2c
T = n

Best case --> item is at the beginning of the array, O(1) time complexity
Average case --> item is in the middle of the array, O(n) time complexity, as the inputs increase, the 
program will take longer to run
Worst case --> O(n), item is at the very end of the array, the time would be directly proportional to 
the input size

 */
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    /* O(1)*n --> n, looping through an array, direct proportion */
    if (array[i] === item) {
      /* O(1) --> constant time complexity */
      return i; /* O(1) --> constant time complexity, returning a singular value */
    }
  }
}

/*
6. Creating pairs. Quadratic time because the inner loop must run n times as it dependent upon 
the outer loop running n times as well

T = n + n^2 + c
T = n^2
T = O(n^2)
 */
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    /* O(n) --> directly proportional relation*/
    for (let j = i + 1; j < arr.length; j++) {
      /* O(n^2 --> for each time the outer loop 
      runs n times, the inner loop also needs to run n times) */
      console.log(
        arr[i] + ", " + arr[j]
      ); /* O(1) --> all the operations inside of the 
      console log take a a constant time to run */
    }
  }
}

/*
7. Compute the sequence
T = c + n + c + c + c + n + c
T = 5c + 2n
T = 2n
T = O(n) --> linear time complexity

 In this function, i starts at 1 and increments until it its less than or equal to the input 
 number. The value is then checked for truthiness based on a condition and a value is pushed to 
 an array. The time is takes for this program to run is directly proportional to the size of the 
 input number because each value must be checked. 

 */
function compute(num) {
  let result = [];  /* O(1) --> setting an empty array is independent of input size */
  for (let i = 1; i <= num; i++) {  /* O(n) --> incrementing depends upon the size of the number, the size of the input */
    if (i === 1) {  /* O(1) --> comparison, constant time */
      result.push(0);  /* O(1) --> push operation constant time */
    } else if (i === 2) {  /* O(1) --> comparison, constant time */
      result.push(1);  /* O(1) --> push operation constant time */
    } else {
      result.push(result[i - 2] + result[i - 3]);  /* O(n) --> accessing an array and pushing to an array are alll constant time, 
      but the operations perform n times depending upon the size of the input*/
    }
  }
  return result;  /* O(1) --> returning a value, constant time */
}

/*
8. An efficient search. In this example, we return to the problem of searching using a more 
sophisticated approach than in naive search, above. Assume that the input array is always 
sorted. What is the Big O of the following algorithm? Explain your answer
 */
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
    } else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}

/*
9. Random element. 
 */
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/*
10. What Am I? What does the following algorithm do? What is the Big O of the following 
algorithm? Explain your answer
 */
function isWhat(n) {
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}

/*
11. Tower of Hanoi
 */

/*
12. Iterative version. Solve the drills 1 - 7 from your previous checkpoint (Recursion) 
iteratively.
 */

/*
13. Recursive Big O. Take your solutions from the recursive exercises that you completed 
in the previous checkpoint and identify the time complexities (big O) of each of them.
 */

/*
 14. Iterative Big O
 Take your solutions from the iterative exercises today and identify the time complexities 
 (big O) of each of them.*/
