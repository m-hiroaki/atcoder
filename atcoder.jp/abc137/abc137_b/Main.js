function Main(input) {
    var K = input.split(' ')[0] - 0;
    var X = input.split(' ')[1] - 0;

    if (K === 1) {
        console.log(X);
        return;
    }

    var a = K - 1;

    for (var i = 0; i < 2 * K - 1; i++){
        var tmp = X - Math.abs(a) + i;
        console.log(tmp);
    }

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));