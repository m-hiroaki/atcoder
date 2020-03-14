function Main(arg)
{
  var N = arg.split("\n")[0] - 0;
  var A = arg.split("\n")[1].split(" ").map(Number);

  A.sort((a, b) => b - a);
  var alice = 0;
  var bob = 0;
  for (i = 1; i <= N; i++){
    if (i % 2 !== 0) {
      alice += A[i - 1];
    }
    else {
      bob += A[i - 1];
    }
  }
  console.log(alice-bob);
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));