/*
    function to retreive the last index of the list
*/

Array.prototype.lastIndexOf = function (callback) 
{

    // cycle through the array
    for (let index = 0; index < this.length; index++)
    {
        // if last element found, return index of last encountered element
        if ( index == this.length - 1)
        {
            return index;
        }
        // else return -1
        return -1
    }
   
        
};

