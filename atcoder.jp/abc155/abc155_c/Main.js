function Main(arg)
{
  var N = arg.split("\n")[0] - 0;
  var A = arg.split("\n").slice(1, N+1);

  var ans = {};
  for (var i = 0; i < N; i++){
    ans[A[i]] = 0;
  }

  for (var i = 0; i < N; i++){
    ans[A[i]]++;
  }

  var max = 0;

  for(var key in ans) {
    if (max < ans[key]) {
      max = ans[key];
    }
  }

  var tmp = [];
  for(var key in ans) {
    if (max == ans[key]) {
      tmp.push(key);
    }
  }

  tmp.sort();

  console.log(tmp.join("\n"));

  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));