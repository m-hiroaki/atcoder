function Main(arg) {
 
    var N = arg.split("\n")[0]-0;
    var A = arg.split("\n")[1].split(" ").map(v => v - 0);

    var tmp = new Array(N);
    for (var i = 1; i <= N; i++){
        tmp[A[i-1]-1] = i;
    }

    console.log(tmp.join(" ").toString());
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));