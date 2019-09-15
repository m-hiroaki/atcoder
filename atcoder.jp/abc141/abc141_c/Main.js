function Main(arg) {
 
    var N = arg.split("\n")[0].split(" ")[0]-0;
    var K = arg.split("\n")[0].split(" ")[1]-0;
    var Q = arg.split("\n")[0].split(" ")[2]-0;

    var A = arg.split("\n").slice(1);

    var score = new Array(N);
    score.fill(0);

    for (var i = 0; i < Q; i++){
        score[A[i] - 1]++;
    }

    for (var i = 0; i < N; i++){
        var tmp = K - (Q - score[i]);
        
        console.log(tmp > 0? "Yes" : "No");
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
