function Main(arg)
{
  var N = arg.split(" ").map(Number);

  var ans = 0;
  for (var i = 0; i <= N[0]; i++){
    for (var j = 0; j <= N[0] - i; j++){
      var k = N[0] - i - j;
      if (i * 10000 + j * 5000 + k * 1000 === N[1]) {
        console.log(i + " " + j + " " + k);
        return;
      }
    }
  }
  console.log("-1 -1 -1");
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));