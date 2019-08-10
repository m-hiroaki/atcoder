function Main(input) {
    var N = input.split('\n')[0] - 0;
    var tmp = input.split('\n');
    var cnt = 0;
    var str = new Array(N);
    for (var i = 0; i < N; i++) {
        str[i] = tmp[i + 1].split('').sort().join();
    }

    str.sort();

    var f = 1;
    for (var i = 1; i < N; i++) {
        if (str[i - 1] === str[i]) {
            f++;
        } 
        if (str[i - 1] !== str[i]) {
            cnt += f * (f - 1) / 2;
            f = 1;
        } 
    }

    cnt += f * (f - 1) / 2;

    console.log(cnt);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));