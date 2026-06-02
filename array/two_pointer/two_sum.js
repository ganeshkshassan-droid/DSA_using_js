function twoSum(array,target){
    const sortedArray = array.sort();
    let left = 0;
    let right = array.length-1;
    while(left<right){
        const sum = sortedArray[left] + sortedArray[right];
        if(sum === target){
            return [left,right];
        }
       else if(sum < target){
        left++;
        }
        else{
            right--;
        }
    }
    return null;
}

const arr = [1, 3, 5, 7, 9, 11, 15, 18];
const res = twoSum(arr,16);
console.log(res);