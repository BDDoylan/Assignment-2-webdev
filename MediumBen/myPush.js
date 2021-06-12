Array.prototype.myPush = function (...args){
    let arg_i = 0;
    let length = this.length;
    for(let i = length; i < length + args.length;i++){   //iterate through array starting at the end of the input array 
        this[i] = args[arg_i];                           //add elements to the array 
        arg_i++;                                         //increment through added array 
    }
    return this.length;                                  //return length
};

