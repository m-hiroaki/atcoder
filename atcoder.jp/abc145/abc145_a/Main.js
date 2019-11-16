function Main(arg) {
 
    var r = arg.split("\n")[0]-0;

    console.log(r*r);

    return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));