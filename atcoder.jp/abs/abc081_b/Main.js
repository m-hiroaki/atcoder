function Main(input) {
	//出力
  	var total = parseInt(input.split("\n")[0], 10);
  	var vals = input.split("\n")[1].split(" ");
  	var count = 0;
  
  	while(true) {
  		vals = vals.filter(val => (val%2) === 0);
      	if(total != vals.length) break;
      
        count++;
        vals = vals.map(val => val/2);
    }
  
	console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));