function Main(input) {
    var A = input.split(' ')[0] - 0;
    var B = input.split(' ')[1] - 0;

  	//出力
	console.log(Math.max(A+B, A-B, A*B));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));