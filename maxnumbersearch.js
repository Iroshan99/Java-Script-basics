var myarray=[10,5,4,20,8];


function maxnumber(myarray){
    var max=myarray[0];
for(i=0;i<myarray.length;i++){

    if(myarray[i+1]>max){
        max=myarray[i+1];
    }
}
return max;
}

console.log(maxnumber(myarray));