function Main(input) {
	
  	var vals = input.split(" ");
  	var a = parseInt(vals[0], 10) + 0.5;
  	var b = parseInt(vals[1], 10);
  
  	var ans = (a-b > 0.0) ? "1" : "0";
  
	console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));