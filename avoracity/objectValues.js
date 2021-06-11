/*
    function to retreive the object's values
    Returns a new array iterator object containing the values for each index in the array

    Without using the native “Object.values()” method of JavaScript, 
    compose a function titled “grabValues” that will take in an object 
    and return all of the values of the key:value pairs of that object.

*/

const object = { a: 1, b: 2, c: 3 };

function grabValues(callback)
{
    let objArr = []
    for (let values in callback)
    {
        objArr.push(callback[values]); // pushes the object's values into the array
    }
    return objArr;
}

console.log(grabValues(object));

// expected output:
//  1
//  2
//  3
