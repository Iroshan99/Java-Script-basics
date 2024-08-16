myName="pasindu";

console.log(myName);

var product=2*5;
console.log(product);

var mystr="this is first line"
console.log(mystr+" this is second line"+" this is third line");

console.log("pasindu \n iroshan");

a=10;
a+=1;
console.log(a);

for(a=0;a<=10;a++){
    console.log(a);
}
a=0;
while(a<5){
    console.log(a);
    a+=1;
}

function devideByTwo(number){
    return number/2;

}

console.log(devideByTwo(10));

var myArray=[[1,2,3],[4,5,6]]
console.log(myArray[0][1]);

//queue
var myQueue=[1,2,3,4,5];

function addItemtoQueue(arr,item){
    arr.push(item);
    return arr.shift();

}



//old queue
console.log(myQueue)

//new queue
addItemtoQueue(myQueue,6);
console.log(myQueue);

//if statement
function ifStatement(num){
    if(num<10){
        console.log("number is below 10");
    }

    else{
        console.log("number is higher than 10");
    }
}

ifStatement(5);

//switch case statement

function switchCase(num1,num2,operator){
    var num=0;

    switch(operator){
        case "+":
            num=num1+num2;
            break;
        case "-":
            num=num1-num2;
            break;
        case "/":
            num=num1/num2;
            break;
        case "*":
            num=num1*num2;
            break;
        default:
            num="invalid operator";
            break; 


    }
    return num;
}

console.log(switchCase(5,10,"+"));

//objects in js
//var obj={property:value};
var obj={
    "dog": "Black",
    "cat": "white",
    "spider": "brown or black"
};

console.log(obj);
obj.dog="green";
console.log(obj);

//loops and iterations
var ourArray=[];
for(a=0;a<6;a++){
    ourArray.push(a);
}

console.log(ourArray);

for(a=0;a<10;a+=2){
    ourArray.push(a);
}

console.log(ourArray);

var nextArray=[];
a=0;
while(a<5){
    nextArray.push(a);
    a++;
}
console.log(nextArray);




