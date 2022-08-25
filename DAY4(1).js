var obj1 = {
    name:"person 1",
    age:5
};
var obj2 = {
    age:5,
    name:"person 1"
};

if(obj1.name==obj2.name){
    if(obj1.age==obj2.age){
        console.log("the given two jason are same without order")
    }
}
if(obj1.name!=obj2.name){
    if(obj1.age!=obj2.age){
        console.log("the given two jason are not same without order")
    }
}
