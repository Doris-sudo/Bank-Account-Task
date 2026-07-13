function error(arr, ind){
    // let arr1 = [0, 1, 2]
    try {
        if(arr[ind] === undefined){
            throw new Error ("Num not found")
        }else {
            return arr[ind]
        }
    } catch(error){
        return error.message;
        
    }
}
console.log(error([0, 1, 2], 10));
