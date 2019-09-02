function Main(arg) {
 
    var N = arg.split("\n")[0] - 0;
    var b = arg.split("\n").slice(1);

    var t = 0;
    var x = 0;
    var y = 0;
    var ans = true;
    for (var i = 0; i < N; i++){
        var a = b[i].split(" ");
        t = a[0] - 0;
        x = a[1] - 0;
        y = a[2] - 0;

        var tmp = t - Math.abs(x) - Math.abs(y);
        if (tmp < 0) {
            ans = false;
            break;
        }
        else if (tmp%2 !== 0) {
            ans = false;
            break;
        }

    }
    
    console.log(ans ? "Yes" : "No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));