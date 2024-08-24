let len=prompt("Enter length of arrays:-");
let arr=[];
for (i=0; i<len; i++) {
    arr[i]=parseInt(prompt("Enter value:-"));
}

let sum = arr.reduce((prev, curr) => {
    return prev + curr;
});
console.log(sum);

let mul = arr.reduce((prev,curr) => {
    return prev*curr;
});
console.log(mul);

