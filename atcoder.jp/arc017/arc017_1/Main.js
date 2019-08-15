function Main(input) {

    var N = new Number(input);

    var f = true;
    for (var i = 2; i < N; i++){
        if (N % i === 0) {
            f = false;
            break;
        }
    }

    console.log(f ? "YES" : "NO");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));