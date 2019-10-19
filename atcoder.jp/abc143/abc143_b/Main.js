function Main(arg) {
 
    var N = arg.split("\n")[0]-0;
    var d = arg.split("\n")[1].split(" ").map(v => v-0);
 
    var ans = 0;

    for (var i = 0; i < N - 1; i++){
        for (var j = i+1; j < N; j++){
            ans += d[i] * d[j];
        }
    }

    console.log(ans)

    return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));