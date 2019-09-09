function Main(arg) {
 
    var N = arg.split("\n")[0] - 0;
    var A = arg.split("\n")[1].split(" ");
    var B = arg.split("\n")[2].split(" ");
    var C = arg.split("\n")[3].split(" ");

    var ans = 0;
    for (var i = 0; i < N; i++){
        ans += (B[A[i]-1] - 0);
        if (i >= 1) {
            var a = A[i] - 0;
            var b = A[i - 1] - 0;
            if (a - b === 1) {
                ans += (C[A[i] - 2]-0);
            }
        }
    }

    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
