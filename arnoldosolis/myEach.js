/*
    forEach()
    Without using the native “Array.prototype.forEach” method of JavaScript, compose a function titled “myEach” that 
    will take in an array of elements and execute any callback function on each of those elements.
*/

Array.prototype.myEach = function (callbackFn)
{
    for (let i = 0; i < this.length; i++)
    {
        // When their is no specified value at an index
        if (this[i] === undefined) continue;
        callbackFn(this[i], i, this);
    }
};

console.log("myEach:")
const arr = [1, 2, ,3]
arr.myEach((x)=>console.log(x));