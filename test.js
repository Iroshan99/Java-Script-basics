const myArray=[1,2,3];

const newArray=[[1,2,3],[4,5,6]];

for(i=0;i<myArray.length;i++){
    console.log(myArray[i]);
}

for(i=0;i<newArray.length;i++){
    for(j=0;j<newArray[i].length;j++){
        console.log(newArray[i][j]);
    }
}


const number = 5;

for(i=1;i<=number;i++){
    let row=""
    for(j=1;j<=i;j++){
        row += j + " "; 
    }
    console.log(row.trim());
}