/*
    Without using the native “Array.prototype.filter” method of JavaScript, compose a function titled “myFilter” that will 
    take in an array of elements and execute a callback function on each of those elements.
*/
Array.prototype.myFilter = function (callback) 
{
    var newArr = [];
    for (let i = 0; i < this.length; i++) 
    {
        if (callback(this[i])) 
        {
            newArr.push(this[i]);
        }
    }
    return newArr;
};

console.log("myFilter:");
const words = ['I', 'am', 'Legend'];
const result = words.myFilter(word => word.length > 1);
console.log(result);