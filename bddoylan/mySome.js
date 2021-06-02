/* My reduce function implementation */

/*
  Functionality: 
  
  Runs a callback function on each element in the array. 
  
  It returns true if at least one element makes the callback 
  function return true.

  It returns false if all elements make the callback function 
  return false.
*/

Array.prototype.mySome = function(callback)
{   
    let temp = false;

    for(let i of this)
    {
        if(callback(i) == true)
        {
            temp = true;
        }
    }

    return temp;
}

/* Callback function for testing */

function testFunc(input)
{
    return input > 20;
}

/* Test for returning false #1 */

const arr1 = [1, 9, 19, 13, 21];

console.log("Test for returning true: " + arr1.mySome(testFunc));

/* Test for returning true #1 */

const arr2 = [1, 9, 19, 13, 11];

console.log("Test for returning false: " + arr2.mySome(testFunc));