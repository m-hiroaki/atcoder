function Main(arg)
{
  var N = arg.split("\n")[0]-0;
  var P = arg.split("\n")[1].split(" ").map(v=>v-0);
 
  var max = N;
  var ans = 0;

  for (var i = 0; i < N; i++){
    if (max >= P[i]) {
      ans++;
      max = P[i];
    }
  }

  console.log(ans);
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));