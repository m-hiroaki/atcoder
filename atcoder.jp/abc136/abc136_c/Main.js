function Main(input) {
    input = input.split("\n");
    var N = parseInt(input[0], 10);
    var H = input[1].split(" ").map(Number).reverse();
    
    var ans = "Yes";
    for (var i = 1; i < N; i++){
        if (H[i] - H[i - 1] > 1) {
            ans = "No";
            break;
        }
        
        if (H[i] - H[i - 1] === 1) {
            H[i] -= 1;
        }
    }

  	//出力
	console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));