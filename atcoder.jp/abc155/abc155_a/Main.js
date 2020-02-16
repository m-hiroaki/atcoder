function Main(arg)
{
  var N = arg.split(" ").map(Number);
  
  var ans = new Set(N);

  console.log(ans.size == 2 ? "Yes" : "No");

  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));