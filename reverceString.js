var name="pasindu";

function reverceString(str){
    var revercestr="";

    for(i=str.length-1;i>=0;i--){
        revercestr=revercestr+str[i];
    }

    return revercestr;
}

console.log(reverceString(name));