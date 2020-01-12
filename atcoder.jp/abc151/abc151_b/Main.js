function Main(arg)
{
 
  var N = arg.split("\n")[0].split(" ")[0] -0;
  var K = arg.split("\n")[0].split(" ")[1] -0;
  var M = arg.split("\n")[0].split(" ")[2] -0;
  var A = arg.split("\n")[1].split(" ").map(v=>v-0);
    
  var tmp = 0;
  for (var i = 0; i < N - 1; i++)
  {
    tmp += A[i];
  }

  var ans = M * N - tmp;
 
  if (ans > K) ans = -1;
  else if (ans < 0) ans = 0;

  console.log(ans);

  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));