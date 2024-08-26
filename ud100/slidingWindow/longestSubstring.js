//with hash

let str = "abcdcbsa";

function longSub(s) {
  let obj = {};
  let start;
  let maxlen=0

  for (let i=0;i<s.length;i++) {
    let c = s.charAt(i)
    if(obj[c]>=start){
        start = obj[c] +1
        
    }
   
        obj[c] = i
    
     
  }
  maxlen = Math.max(maxlen,i-start+1)
  console.log(obj);
  console.log(max)
}

longSub(str)
