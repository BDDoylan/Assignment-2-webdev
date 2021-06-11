/*
    Function to retreive the object's name
    Takes object as argument   
    Return array of strings of all enumerable properties of a given object

    Without using the native “Object.keys()” method of JavaScript, 
    compose a function titled “grabKeys” that will take in an object and return all of the keys 
    of the key:value pairs of that object.
*/

const object = { a: 1, b: 2, c: 3 };

function grabKeys() {
    for (const property in object) 
    {
        console.log(` The object's keys : ${property}`);
    }
}

console.log(grabKeys(object));

// expected output:
// a
// b
// c
