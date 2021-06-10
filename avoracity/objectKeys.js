/*
    Function to retreive the object's name
    Takes object as argument   
    Return array of strings of all enumerable properties of a given object
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