function Main(arg) {
 
    var N = arg.split("\n")[0]-0;
 
    var ans = "No";
    for (var i = 1; i <= 9; i++){
        for (var j = 1; j <= 9; j++){
            if (i * j === N) {
                ans = "Yes";
            }
        }
    }

    console.log(ans)

    return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));