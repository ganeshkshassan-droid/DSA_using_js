class MyArray{
    constructor(){
        this.array = {};
        this.length = 0;
    }
    push(element){
        this.array[this.length] = element;
        this.length++;
        console.log(`${element} added at the index of : ${this.length-1}`);
    }

    pop(){
        if(this.length === 0){
            console.log(`cannot be popped there is no element in the array to be popped`);
            return;
        }
        let removed = this.array[this.length-1];
        delete this.array[this.length-1];
        this.length--;
        console.log(`the popped element is : ${removed} \nthe length of the array is ${this.length}`);
    }
    shift(){
        if(this.length === 0){
            console.log(`cannot be popped there is no element in the array to be shifted at the beginning.`,);
            return;
        } 
        let removed = this.array[0];
        for(let i = 0;i<=this.length-1;i++){
            this.array[i] = this.array[i+1];
        }
        delete this.array[this.length-1];
        this.length--;
        console.log(`the shifted element at the beginning is  : ${removed} \n the length of the array is ${this.length}`);
    }
    unshift(element){
        if(this.length === 0){
            this.array[0] = element;
            this.length++;
            console.log(`the element added at the beginning array is ${element}`);
            return;
        }
        for(let i = this.length;i>0;i--){
            this.array[i] = this.array[i-1];
        }
        this.array[0] = element;
        this.length++;
        console.log(`the element ${element} added at the beginning \nthe length of the array is : ${this.length}`);
    }
}

let arr = new MyArray();
arr.push(10);
arr.push(20);
arr.push(30);
arr.push(40);
arr.push(50);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(30);
console.log(arr);
arr.shift();