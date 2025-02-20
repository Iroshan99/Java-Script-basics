function reverseString(str) {
    // Convert string to array, reverse it, and join back to string
    return str.split('').reverse().join('');
}


output=reverseString("hello");

console.log(output);



// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
//write a Javascript program to display the multiplication table of a given integer.
//Test Data
//Input the number (Table to be calculated) : Input number of terms : 5
//Expected Output :
//5 X 0 = 0
//5 X 1 = 5
//5 X 2 = 10
//5 X 3 = 15
//5 X 4 = 20
//5 X 5 = 25
//Till 12
console.log("Try programiz.pro");

for(i=0;i<=5;i++){
    console.log(5*i);
}


//Write a Javascript program that reads a integer number. If the //number is zero it prints "zero",
//otherwise, print "positive" or "negative". Add "small" if the //value of the number is between 1 - 1000, or
//"large" if it exceeds 1000.
//Test Data
//Input a number: -2534
//Expected Output :
//Negative
//Input a number: 550
//Expected Output :
//Small , Positive


number=2000;

if(number==0){
    console.log("Zero");
}

else if(number>0 && number<1000){
    console.log("positive," + "small");
}

else if(number>0 && number>1000){
    console.log("large,"+"positive")
}

else if(number<0){
    console.log("negative")
}

else if(1<number<1000){
    console.log("small")
}

else{
    console.log("large");
}





//reverse a string