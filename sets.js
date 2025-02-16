//create a set
const myset=new Set();
//add data to set
myset.add("name");
myset.add(10);


//print a set
for(const value of myset){
    console.log(value);
}

//check if a vaue is in the set
console.log(myset.has("name"));

const myArray=[[1,2,3],[4,5,6]];

for(i=0;i<myArray.length;i++){
    for(j=0;j<myArray[i].length;j++){
        console.log(myArray[i][j]);

    }

}
