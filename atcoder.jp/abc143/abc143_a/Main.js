function Main(arg) {
 
    var A = arg.split(" ")[0]-0;
    var B = arg.split(" ")[1]-0;
 
    var ans = 0;

    if (A - 2 * B > 0) {
        console.log(A - 2 * B);
    }
    else {
        console.log(0);
    }


    return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));