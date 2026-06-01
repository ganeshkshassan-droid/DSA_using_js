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
  unshift(element) {
    if (this.length === 0) return undefined;
   for(let i = this.length-1;i>=0;i--){
    this.arr[i+1] = this.arr[i];
   }
   this.arr[0] = element;
    this.length++;
    
    return this.length;
  }
}

let arr = new MyArray();
arr.push(10);
arr.push(20);
arr.push(30);
console.log(arr);
arr.unshift(90);
console.log(arr);