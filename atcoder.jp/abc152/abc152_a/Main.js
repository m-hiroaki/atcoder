function Main(arg)
{
  var tmp = arg.split("\n")[0].split(" ");
 
  console.log(tmp[0] === tmp[1] ? "Yes" : "No");

  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));