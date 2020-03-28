function Main(arg) {
  var n = arg.split("\n")[0].split(" ")[0] - 0;
  var k = arg.split("\n")[0].split(" ")[1] - 0;

  console.log(Math.ceil((n - 1) / (k - 1)));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));