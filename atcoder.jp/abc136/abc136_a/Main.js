function Main(input) {
    input = input.split(" ").map(Number);

    var A = input[0];
    var B = input[1];
    var C = input[2];

    var ans = C - (A - B);

    if (ans < 0) ans = 0;

  	//出力
	console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));