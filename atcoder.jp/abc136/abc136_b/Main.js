function Main(input) {
    var N = parseInt(input, 10);
    
    var ans = 0;

    for (var i = 1; i <= N; i++){
        if (i.toString().length % 2 == 1) {
            ans++;
        }
    }

  	//出力
	console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));