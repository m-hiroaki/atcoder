function Main(arg)
{
  var N = arg.split("\n")[0].split(" ")[0] - 0;
  var R = arg.split("\n")[0].split(" ")[1] - 0;


  console.log(N >= 10 ? R : R + (100*(10-N)));
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));