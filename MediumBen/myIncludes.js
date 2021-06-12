// INCLUDES //
Array.prototype.myIncludes = function(item,index = 0) {
    let length = this.length;
    var found;
    for(let i = index; i < length;i++){ //iterate through array starting at index
        if(this[i] == item){
            found = true;               //if found return true
            break
        }
        else{
           found =  false;              //if not found return false
        }
    }
    return found;                       //return found
};

