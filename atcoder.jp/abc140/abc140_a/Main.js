function Main(arg) {
 
    var N = arg.split("\n")[0] - 0;
    
    console.log(Math.pow(N,3));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));