function Main(input) {
 
    var t = input.split("\n");
	t = t.map(x => x-0);
  
    console.log(Math.max.apply(null, t));
}

function compareNumbers(a, b) {
    return a - b;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));