function gcd(a, b){
    if(b != 0)
        return gcd(b, a%b);
    else
        return a;
}

function lcm(a, b){
    return a * b / gcd(a, b);
}

function Main(arg) {
 
    var A = arg.split(" ")[0]-0;
    var B = arg.split(" ")[1]-0;

    var ans = lcm(A, B);
         
    console.log(ans);

    return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));