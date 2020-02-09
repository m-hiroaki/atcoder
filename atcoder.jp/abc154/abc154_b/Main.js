function Main(arg)
{
  var S = arg.split("\n")[0];
 
  console.log("x".repeat(S.length));
  return;
}
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
