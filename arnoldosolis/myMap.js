/*
    Without using the native “Array.prototype.map” method of JavaScript, compose a function titled “myMap” that will take in 
    an array of elements and execute a callback function on each of those elements.
*/
Array.prototype.myMap = function (callback)
{
    // Initialize new array
    let newArray = [];
    // Length of array
    let x = this.length;
    for (let i = 0; i < x; i++)
    {
        let counter = callback(this[i]);
        newArray.push(counter);
    }
    //return the new array
    return newArray;
}