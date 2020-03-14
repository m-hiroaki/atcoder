function Main(arg)
{
  var a = `1, 1, 1, 2, 1, 2, 1, 5, 2, 2, 1, 5, 1, 2, 1, 14, 1, 5, 1, 5, 2, 2, 1, 15, 2, 2, 5, 4, 1, 4, 1, 51
`.split(", ");
  var N = arg.split("\n")[0]-0;


  console.log(a[N-1]);
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));