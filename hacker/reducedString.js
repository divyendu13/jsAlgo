/*
Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. In each operation, select a pair of adjacent letters that match, and delete them.
"baab" = "Empty String"
"aab" = "b"
"aaabccddd" ="abd"
*/


function reduce(s){
    let ar = s.split("");
    for(let i=0;i<ar.length;i++){
        if(ar[i]==ar[i+1]){
            ar.splice(i,2);
            i=-1;
        }
    }
    return ar.length == 0 ? "Empty String" : ar.join("")
}

console.log(reduce("baaa"))