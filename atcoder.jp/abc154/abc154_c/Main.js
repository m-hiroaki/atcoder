function Main(arg)
{
  var N = arg.split("\n")[0]-0;
  var A = arg.split("\n")[1].split(" ").map(v => v-0);

  var ans = new Set(A);
  console.log(ans.size == N ? "YES" : "NO");
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));