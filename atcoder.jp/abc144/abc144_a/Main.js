function Main(arg) {
 
    var A = arg.split(" ")[0];
    var B = arg.split(" ")[1] -0;
 
    var ans = 0;
    if (1 <= A && A <= 9 && 1 <= B && B <= 9) {
        ans = A * B;
    }
    else {
        ans = -1;
    }
    
    console.log(ans)

    return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));