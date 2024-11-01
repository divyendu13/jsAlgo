// design a calculator which will evaluate the expression

let s1 = "1 - 1"
let s2 = "(1+(4+5+2)-3)+(6+8)"

function calculate(s){
    let sum=0;
    let sign=1;
    let stack=[];
    for(let i=0;i<s.length;i++){
        let c=s.charAt(i)
        if(c>="0" && c<="9"){
            let num=0
            while(s.charAt(i)>="0" && s.charAt(i)<="9"){
                num = num*10 + (s.charAt(i)-"0")
                i++
            }
            i--;
            sum +=num*sign
            sign=1
        }
        else if(c=="("){
            stack.push(sum);
            stack.push(sign)
            sum=0;
            sign=1;
        }
        else if(c==")"){
            sum *= stack.pop();
            sum += stack.pop();
        }
        else if(c=="-"){
            sign *= -1
        }
    }
    return sum
}

console.log(calculate(s1))
console.log(calculate(s2))