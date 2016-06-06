//make user input 
//that captures input onClick
//on click make button run function called palidrome
//inside palidrome capture user input
//for input check for each letter 
//reverse order of letters
//if it the reverse and normal equal the same return it's a palidrome


//capture user input
// reverse user input
// compare reveresed input with normal input
// if they are equal then it is a palindrome. if they are not, the it is not


function palindrome(){
//store input in variable 
var input = document.getElementById("userInput").value;
//for loops through each letter of input and 

var letterArray =[];
for(var i=0; i < input.length; i++){

//pushes letters to empty array called letterArray
	letterArray.push(input[i]);
}


var backwardsArray =[];

//starts at the end of the word and decrements the word each time loop runs through
for(var i = input.length-1; i >= 0; i--){
//pushes letters to emptu array called backwardsArray
	backwardsArray.push(input[i]);

}


//compares backwardsArray with letterArray
if(letterArray === backwardsArray){
	console.log(input + " is a palidrome");
}else{
	console.log(input + " is not a palidrome");
}


console.log(letterArray);
console.log(backwardsArray);
//create another array that reverse user's letter[i]


}


// function palindrome(str) {
//     var len = str.length;
//     for ( var i = 0; i < Math.floor(len/2); i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(palindrome("noon"));
