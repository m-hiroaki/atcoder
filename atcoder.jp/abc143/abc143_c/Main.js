function Main(arg) {
 
    var N = arg.split("\n")[0]-0;
    var S = arg.split("\n")[1].split("");
 
    var ans = 0;
    var prev = "";

    S.map(function (v) { 

        if (v !== prev) ans ++;
        prev = v;
    });

    console.log(ans)

    return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
