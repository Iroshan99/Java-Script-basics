function greet(name,calllback){
    console.log("i am "+name);

    calllback();


}

function age(){
    console.log("myage is 24 years old");

}

greet("pasindu",age);


