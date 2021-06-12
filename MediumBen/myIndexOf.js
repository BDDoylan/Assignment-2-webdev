 // INDEXOF //
Array.prototype.myIndexOf = function(item,index = 0) {
    let length = this.length;
    var myindex;
    for(let i = index; i < length;i++){ //iterate through array
        if(this[i] == item){
            myindex = i;                //print array index if found
            break
        }
        else{
           myindex =  -1;               //print -1 if not found
        }
    }
    return myindex;                     //return index
};

