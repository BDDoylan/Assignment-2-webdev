/* My reduce function implementation */

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

function testFunc(accumulator, currentValue){
    return  accumulator + currentValue;
}

/* Test #1: Without initial value */

const arr1 = [1, 9, 19, 13, 21, 50];

console.log("Test #1 - Without initial value: " + arr1.myReduce(testFunc));

/* Test #2: With initial value */

const arr2 = [2, 8, 20, 12, 22, 49];

console.log("Test #2 - With initial value: " + arr2.myReduce(testFunc, 5));