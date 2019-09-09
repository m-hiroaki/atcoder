function Main(arg) {
 
    var N = arg.split("\n")[0] - 0;
    var B = arg.split("\n")[1].split(" ");
    B.unshift(B[0]);

    var ans = 0;
    for (var i = 0; i < N-1; i++){
        if (B[i]-0 > B[i + 1]-0) {
            B[i] = B[i + 1];
        }
    }

    for (var i = 0; i < N; i++){
        ans += (B[i] - 0);
    }

    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));