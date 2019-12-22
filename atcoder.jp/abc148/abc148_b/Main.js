function Main(arg) {
 
    var N = arg.split("\n")[0]-0;
    var S = arg.split("\n")[1].split(" ")[0];
    var T = arg.split("\n")[1].split(" ")[1];

    var ans = "";
    for (var i = 0; i < N; i++){
        ans += S[i] + T[i];
    }
    console.log(ans);

    return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));