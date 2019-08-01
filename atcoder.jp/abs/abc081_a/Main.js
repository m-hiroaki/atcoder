function Main(input) {
	//出力
  	var count = 0;
  	for(var i=0; i<3; i++){
      count += parseInt(input[i], 10);
    }
	console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));