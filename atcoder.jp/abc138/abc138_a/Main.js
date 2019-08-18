function Main(input) {
 
    var a = new Number(input.split('\n')[0]);
    var s = input.split('\n')[1];
 
    console.log(a >= 3200 ? s : "red");
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));