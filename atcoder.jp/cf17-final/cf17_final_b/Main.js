function Main(arg) 
{
  var S = arg.split("\n")[0].split("");

  var ans = [0 , 0, 0];
  for (var i = 0; i < S.length; i++){
    ans[S[i].charCodeAt() - 'a'.charCodeAt()]++;
  }

  if (Math.abs(ans[0] - ans[1]) > 1 ||
    Math.abs(ans[1] - ans[2]) > 1 ||
    Math.abs(ans[2] - ans[0]) > 1) {
    console.log("NO");
    return;
  }
  console.log("YES");
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));