import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
JS program to check if a given array of integers is sorter in ascending order
</div>
`;
//function takes in array of numbers
const isAscending = (arr) => {
  //use a for loop and return false if the next number in the array is actually smaller than the previous number
  for (let i = 0; i < arr.length; i += 1) {
    //checks the next item in the array to see if the item is smaller than the previous one, so we know we're going in ascending order
   if (arr[i+1] < arr[i]) return false;
    }
    //isAscending function returns true if numbers are ascending
    return true;
}

console.log(isAscending([1,2,3,4,5,6]));
console.log(isAscending([1,2,3,5,4,5,6]));
console.log(isAscending([1,2,3,4,6,6]));


//practice exercise from codebubb on youtube