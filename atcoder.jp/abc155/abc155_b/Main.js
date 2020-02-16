function Main(arg)
{
  var N = arg.split("\n")[0] - 0;
  var A = arg.split("\n")[1].split(" ").map(Number);
  
  var ans = false;

  for (var i = 0; i < N; i++){
    if (A[i] % 2===0) {
      if (A[i] % 3 === 0) {
        continue;
      }
      else if (A[i] % 5 === 0) {
        continue;
      }

      console.log("DENIED");
      return;

    }
  }

  console.log("APPROVED");
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));