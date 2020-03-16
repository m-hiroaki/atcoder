function Main(arg)
{
  var X = arg.split("\n")[0]+"";

  while (X.length > 0) {
    if (X.startsWith("ch")) {
      X = X.substring(2);
    }
    else if (X.startsWith("o")){
      X = X.substring(1);
    }
    else if (X.startsWith("k")){
      X = X.substring(1);
    }
    else if (X.startsWith("u")){
      X = X.substring(1);
    }
    else {
      console.log("NO");
      return;
    }
  }

      console.log("YES");
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
