function Main(arg) {
 
    var N = arg.charCodeAt() + 1;
    
 
    console.log(String.fromCharCode(N));

    return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));