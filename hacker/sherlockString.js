/*
Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just  character at  index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.

Example
abc - YES
aabbccd - YES
aabbcd - NO
*/

function sherlock(s){
    let obj={};
    let obj2={};

    for(i of s){
        obj[i] = ++obj[i] || 1;
    }

    for(i in obj){
        obj2[obj[i]] = ++obj2[obj[i]] || 1;
    }

    for(i in obj2){
        if(obj2[i]==1 && i>=1){
            const newKey = i-1;
            if(newKey==0){
                delete obj2[i];
                return Object.keys(obj2).length ==1 ? "YES" : "NO";
            }
            obj2[newKey]= ++obj2[newKey] || 1;
            delete obj2[i]
            if(Object.keys(obj2).length==1){
                return "YES";
            }
        }
    }

    return Object.keys(obj2).length==1 ? "YES" : "NO";
}


console.log(sherlock("abc"))