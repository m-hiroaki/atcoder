function Main(arg) {
 
    var N = arg.split("\n")[0]-0;
    var S = arg.split("\n")[1];

    if (S.length % 2 !== 0) {
        console.log("No");
        return;
    }

    var T1 = S.slice(0, S.length / 2);
    var T2 = S.slice((S.length / 2));
    
    var ans = (T1 == T2) ? "Yes" : "No";

    console.log(ans);

    return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));