class MyArray{
    constructor(){
        this.arr = {};
        this.length = 0;
    }
    pop(){
        if(arr[this.length]===0){
            return undefined;
        }
        this.length--;
        return this.arr[this.length];
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
arr.push(20);
console.log(arr);
arr.pop();
console.log(arr);