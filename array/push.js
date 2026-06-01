class MyArray{
    constructor(){
        this.arr = {};
        this.length = 0;
    }
    get(index){
        return this.arr[index];
    };
    push(value){
        this.arr[this.length] = value;
        this.length++;
        return this.length;
    }
}

let arr = new MyArray();
arr.push(10);
console.log(arr);
for(let i = 0;i<10;i++){
    arr.push(i);
}
console.log(arr);