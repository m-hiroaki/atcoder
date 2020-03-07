function Main(arg)
{
  var N = arg.split("\n")[0];

  if (N === "AAA" || N === "BBB") {
    console.log("No");
  }
  else {
  console.log("Yes");    
  }
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));