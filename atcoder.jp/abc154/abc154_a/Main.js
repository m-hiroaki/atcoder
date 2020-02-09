function Main(arg)
{
  var S = arg.split("\n")[0].split(" ")[0];
  var T = arg.split("\n")[0].split(" ")[1];
  var a = arg.split("\n")[1].split(" ")[0]-0;
  var b = arg.split("\n")[1].split(" ")[1]-0;
  var u = arg.split("\n")[2];

  if (u == S) a--;
  else b--;

  console.log(a + " " + b);
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));