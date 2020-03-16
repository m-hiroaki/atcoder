function Main(arg)
{
  var N = arg.split("\n")[0]+"";

  if (N.startsWith("keyence") || N.endsWith("keyence")) {
    console.log("YES");
    return;
  }
  else {
    for (var i = 1; i <= 7; i++){
      if (N.startsWith("keyence".slice(0, i)) && N.endsWith("keyence".slice(i))) {
        console.log("YES");
    	return;
      }
    }
  }

  console.log("NO");
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));