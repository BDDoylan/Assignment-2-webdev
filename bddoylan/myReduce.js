/* My reduce function implementation */

/*
  Functionality: 
  
  Runs a callback function on each element in the array. 
  
  It results in a single output value that is returned
  by the reducer function used.

  It implements an initial value which can be used in 
  addition with the array this method is called upon.
*/

Array.prototype.myReduce = function(callback, initial)
{
    let output = 0;
    
    if(initial !== undefined)
    {
        output = initial;
    }
    
    for(let i of this)
    {
        output = callback(output, i);
    }

    return output;
}

/* Callback function for testing */

function testFunc(accumulator, currentValue)
{
    return  accumulator + currentValue;
}

/* Test #1: Without initial value */

const arr1 = [1, 9, 19, 13, 21, 50];

console.log("Test #1 - Without initial value: " + arr1.myReduce(testFunc));

/* Test #2: With initial value */

const arr2 = [2, 8, 20, 12, 22, 49];

console.log("Test #2 - With initial value: " + arr2.myReduce(testFunc, 5));