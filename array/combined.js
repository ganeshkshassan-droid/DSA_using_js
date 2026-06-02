class MyArray {
  constructor() {
    this.arr = {};
    this.length = 0;
  }
  push(element) {
    this.arr[this.length] = element;
    return this.length++;
  }
  getArray() {
    console.log(`the elements are : `);
    for (let i = 0; i < this.length; i++) {
      console.log(`arr[${i}] = ${this.arr[i]}`);
    }
    console.log(`the length of the array is : ${this.length}`);
  }

  pop(){
    if(this.length === 0) return undefined;
    let last_index = this.length -1;
    let removed = this.arr[last_index];
    delete this.arr[last_index];
    this.length--;
    return removed;
  }
  shift() {
    if(this.length === 0)return undefined;
    let removed = this.arr[0];
    let last_index = this.length-1;
    for(let i=0;i<this.length;i++){
        this.arr[i] = this.arr[i+1];
    };
    delete this.arr[this.length - 1];
    this.length--;
    return removed;

  }
  unshift(element) {
    for(let i = this.length;i>0;i--){
        this.arr[i] = this.arr[i-1];
    }
    this.arr[0] = element;
    this.length++;
}
}

let arr = new MyArray();
arr.push(20);
arr.push(30);
arr.push(40);

