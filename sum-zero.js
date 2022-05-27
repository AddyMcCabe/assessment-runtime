function getSubArray(input){

    let result =[]
    sum= 0
    let a = [];
    for(var i =0;i<input.length;i++){
        a=[];
        sum =0 ;
        for (let j = i; j < input.length; j++) {
            a.push(input[j])
            sum+=input[j];
            if(sum ===0){
                result.push(a);
            }
        }

    }

    return result

}
// runtime is O(n^2)