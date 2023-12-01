let string =('abcd');
let number = [0,3,1,2];

let text ="";
for(i=0;i<string.length;i++){
    for(j=0;j<number.length;j++){
        if(i==number[j]){
            text=text+string[j];
            
        }
    }
}
console.log(text);