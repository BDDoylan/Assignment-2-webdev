/*
    function to retreive the object's values
    Returns a new array iterator object containing the values for each index in the array
*/

Object.prototype.grabValues = function(key, obj) {

    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var val = obj[key];
            // use val
        }
    }
   
    // return all names of objects
};


const obj = {
    a: 'some string',
    b: 13,
    c: false    
};

// display object's name using the keys() method
console.log(grabValues);