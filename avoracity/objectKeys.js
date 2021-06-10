/*
    Function to retreive the object's name
    Takes object as argument   
    Return array of strings of all enumerable properties of a given object

    Without using the native “Object.keys()” method of JavaScript, 
    compose a function titled “grabKeys” that will take in an object and return all of the keys 
    of the key:value pairs of that object.
*/

Object.prototype.grabKeys = function(keys) {

    var keys = [];
    var i = 0;

    for (keys[i++] in foo) {}
  
};


const obj = {
    a: 'some string',
    b: 13,
    c: false    
};

// display object's name using the keys() method
console.log(grabKeys);