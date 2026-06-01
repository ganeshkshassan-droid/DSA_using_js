class MyArray {
  constructor() {
    this.arr = {};
    this.length = 0;
  }
  push(value) {
    this.arr[this.length] = value;
    this.length++;
    return this.length;
  }
  shift(){
    if(this.length === 0) return undefined;
    let removed_element = this.arr[0];
    for(let i=0;i<this.length-1;i++){
        this.arr[i] = this.arr[i+1];
    }
    delete this.arr[this.length-1];
    this.length--;
    return removed_element;
  }
}

let arr = new MyArray();
arr.push(10);
arr.push(20);
arr.push(30);

console.log(arr);
let element = arr.shift();
console.log(element);
console.log(arr);

