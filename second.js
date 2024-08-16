function checkSign(num){
    //ternary operator(doing the if,else-if,else statements in one line)
    return num<0 ? "negative":num>0 ? "positive": "zero";

}

console.log(checkSign(10));

//let keyword(when you declare a variable as let you can't declare it again with any keyword but you can change the value like below)
let name="pasindu";
name="iroshan";
console.log(name);


//constant keyword(when you declare a const variable you can't chang the variable after declaring)
const age=50;

console.log(age);

//use class to create a constructor
class spaceShuttel{
    constructor(planet){
        this.planet=planet;
    }

}

var obj=new spaceShuttel("jupiter");

console.log(obj.planet);