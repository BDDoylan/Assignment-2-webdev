


/*
    function to retreive the last index of the list
*/

Array.prototype.mylastIndexOf = function (callback) 
{
    for (let i =0; i < this.length; i++)
    {
        if (i === this[i-1])
        {
            return i;    // if last index found return element
        }
    }
    return -1;        // if not found return -1
        
};

console.log("mylastIndexOf: ")
const arr = ["Do", "Re", "Mi"]
const theLastIndex = arr.mylastIndexOf(word => word.length > 1);
console.log(theLastIndex);