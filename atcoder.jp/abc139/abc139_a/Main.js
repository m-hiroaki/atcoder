function Main(arg) {
 
    var S = arg.split("\n")[0].split("");
    var T = arg.split("\n")[1].split("");

    var ans = 0;

    for (var i = 0; i < S.length; i++){
        if (S[i] === T[i]) ans++;
    }

    console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));