function hasUniqueCharacters(str){
    let uniqueChar = new Set([])
    for(let i = 0; i < str.length; i++){
        uniqueChar.add(str[i])
    }   
       
    return uniqueChar.size === str.length
        
    
    } 
    
   console.log(hasUniqueCharacters('Ady'))