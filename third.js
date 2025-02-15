function print(){
    console.log("hello world");
}

print();


//JS maps
map=new Map();
map.set("name","pasindu");
map.set("age","50");
map.get("name");
map.get("age");

console.log(map.get("name"));
console.log(map.get("age"));

console.log(map.has("name"));

//print a map
for(const [Key,value] of map){
    console.log('key is: '+Key+' valueis: '+value);
}