const printPairs = (arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            console.log(`${arr[i]} * ${arr[j]} = ${arr[i]*arr[j]}`);
        }
        console.log(`This is the step ${i}`);
    }
    console.log(`how may steps of the action performed here is : \n ${arr.length*arr.length}`)
}

let arr = [10,20,30,40,50];
printPairs(arr);