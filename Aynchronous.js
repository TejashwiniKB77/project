function greet(name,callback){
    console.log("Hello" +name);
    callback();
}
function done(){
    console.log("callback executed");
}
greet("pankaja", done);