function Main(input) {
 
    var N = new Number(input.split('\n')[0]);
    var a = input.split('\n');
    var f = true;
    for (var i = 1; i <= N; i++){
        var tmp = a[i].split(' ');
        var t = tmp[0] - 0;
        var x = tmp[1] - 0;
        var y = tmp[2] - 0;

        t -= (Math.abs(x) + Math.abs(y));
        if (t < 0) {
            f = false;
            break;
        }
        else if (t % 2 != 0) {
            f = false;
            break;
        }
    }
 
    console.log(f ? "Yes" : "No");
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));