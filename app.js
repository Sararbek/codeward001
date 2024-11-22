//CODEWARS -> Masalalar

/**
 * 1-masala
 * Complete the square sum function so that it squares each number passed into it and then sums the results together.
 * 
 * for example
 * assert.strictEqual(squareSum([1,2]), 5);
    assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
 */

{
  function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i] ** 2;
    }
    return sum;
  }

  console.log(squareSum([0, 3, 4, 5]));
}

/**
 * 2-masala
 * 
 * Given an array of integers your solution should find the smallest integer.
 * 
 * For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
 */

{
  function findSmallestInt(arr) {
    return arr.sort((a, b) => a - b)[0];
  }

  console.log(findSmallestInt([34, 15, 88, 2]));
}

/**
 * 3-masala
 * We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

"1234" --> 1234
"605"  --> 605
 */

{
  const stringToNumber = function (str) {
    return +str;
  };

  console.log(stringToNumber("1234"));
}

/**
 * 4-masala
 * 
 * Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
 * 
 * 2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
 */

{
  var summation = function (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  };

  console.log(summation(8));
}

/**
 * 5-masala
 * 
 * Make a simple function called greet that returns the most-famous "hello world!".
 * 
 * Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?
 */

{
    const greet = () => 'hello world!'
    console.log(greet())
}

/**
 * 6-masala
 * 
 * Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
 * 
 * [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

  The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
 */

{
    function countSheeps(sheep) {
        let result = 0
        sheep.forEach(isHere => {
            if(!(isHere === null || isHere === undefined || isHere === false)){
                result += 1
            }else{
                result
            }
        })
        return result
      }

    let count = [true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true]
    console.log(countSheeps(count))
}

/**
 * 7-masala
 * 
 * Write a function that removes the spaces from the string, then return the resultant string.
 * 
 * "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
 * "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
 */

{
    function noSpace(x){
        x = x.split('')
        let result = []
        for(let i = 0; i < x.length; i++){
            if(x[i] !== ' '){
                result.push(x[i])
            }
        }
        return result.join('').trim()
    }
    let example = "8 j 8   mBliB8g  imjB8B8  jl  B"
    console.log(noSpace(example))
}

/**
 * 8-masala
 * Code as fast as you can! You need to double the integer and return it.
 */

{
    function doubleInteger(i) {
        // i will be an integer. Double it and return it.
        return 2*i;
      }

    console.log(doubleInteger(2))
}

/**
 * 9-masala
 * 
 * Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
 */

{
    function greet(name){
        return `Hello, ${name} how are you doing today?`
      }
    
    console.log(greet('Sarvarbek'))
}

/**
 * 10-masala
 * 
 * Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
 */

{
    function booleanToString(b){
        return b.toString()
      }

      console.log(booleanToString(true))
      console.log(booleanToString(false))
}