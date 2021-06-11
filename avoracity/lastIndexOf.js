/*
    Without using the native “Array.prototype.lastIndexOf” method of JavaScript, compose a function titled “myLastIndexOf” 
    that will take in an array of elements and returns the index of the last encounter of a target element (if it is found) 
    or -1 if that element does not exist within the input array.

    function to retreive the last index of the list
*/

function mylastIndexOf(array)
{
    for (let i =0; i < array.length; i++)
    {
        if (i === array.length-1)
        {
            return array[i];    // if last index found return element
        }
    }
    return -1;        // if not found return -1
        
};


const arr = [ true , 1, "Mi"];
console.log("The last index is : " + mylastIndexOf(arr));