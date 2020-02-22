function Main(arg)
{
  var N = arg.split("\n")[0].split(" ")[0] - 0;
  var K = arg.split("\n")[0].split(" ")[1] - 0;

  var ans = 1;
  while (1) {
    var N = Math.floor(N / K);
    if (N === 0) break;

    ans++;
  }
  console.log(ans);
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));