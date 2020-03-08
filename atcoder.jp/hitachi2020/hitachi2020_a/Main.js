function Main(arg)
{
  var S = arg.split("\n")[0];

  if (S.length % 2 !== 0) {
        console.log("No");
        return;
  }

  for (var i = 0; i < S.length; i++){
    if (i % 2==0) {
      if (S[i] !== "h") {
        console.log("No");
        return;
      }
    }
    else {
      if (S[i] !== "i") {
        console.log("No");
        return;
      }
    }
  }

  console.log("Yes");
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));