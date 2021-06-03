/* My reduce function implementation */

/*
  Functionality: 
  
  Runs a callback function on each element in the array. 
  
  It returns true if all elements makes the callback 
  function return true.

  It returns false if even a single element makes the 
  callback function return false.
*/

Array.prototype.myEvery = function(callback)
{   
    for(let i of this)
    {
        if(callback(i) == false)
        {
            return false;
        }
    }

    return true;
}

/* Callback function for testing */

function testFunc(input)
{
    return input < 20;
}

/* Test for returning false #1 */

const arr1 = [1, 9, 19, 13, 21];

console.log("Test for returning false: " + arr1.myEvery(testFunc));

/* Test for returning true #1 */

const arr2 = [1, 9, 19, 13, 11];

console.log("Test for returning true: " + arr2.myEvery(testFunc));