const test = (arr)=>{
    let holder;
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if (arr[j]<arr[i]){
               holder = arr[j];
               arr[j] = arr[i]
               arr[i] = holder; 
            }
        }
    }
    return arr;
}
let array  = [1,123123,13142,4214,24215,522,42131,324214]
console.log(test(array));