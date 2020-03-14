function Main(arg)
{
  var A = arg.split("\n").map(Number);

  var ans = 0;
  for (var i = 0; i <= A[0]; i++){
    for (var j = 0; j <= A[1]; j++){
      for (var k = 0; k <= A[2]; k++){
        if (A[3] === i * 500 + j * 100 + k * 50) {
          ans++;
        }
      }
    }
  }
  console.log(ans);
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));