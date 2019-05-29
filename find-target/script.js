
const test = (arr, target)=>{
	let start_index = 0;
	let end_index = arr.length -1;
	let current_total = 0;
	while (start_index != end_index){
		current_total = arr[start_index] + arr[end_index];
		if( current_total === target){
			console.log(arr[start_index], arr[end_index])
			return true;
		} 
		else if(current_total > target){
			end_index = end_index -1;
		}else{
			start_index = start_index +1;
		}

	}
	return false;
}
// find 2 numbers that equal a target number
const arr = [1,2,3,4,5,6]
console.log(test(arr,11));