function Main(arg) {
  var n = arg.split("\n")[0].split(" ")[0] - 0;
  var m = arg.split("\n")[0].split(" ")[1] - 0;
  var a = arg.split("\n")[1].split(" ").map(Number);

  var tmp = new Array(m+1);
  tmp.fill(0);
  for (var i = 0; i < n; i++){
    tmp[a[i]]++;
  }

  var max = 0;
  var index = 0;
  for (var i = 0; i <= m; i++){
    if (max < tmp[i]) {
      max = tmp[i];
      index = i;
    }
  }

  console.log(max > n/2 ? index : "?");
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));