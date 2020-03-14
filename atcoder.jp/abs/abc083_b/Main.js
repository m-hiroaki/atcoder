function Main(arg)
{
  var N = arg.split(" ").map(Number);
  var A = N[1] - 0;
  var B = N[2] - 0;

  var ans = 0;
  for (var i = 1; i <= N[0]; i++){
    var tmp = i.toString().split("").map(Number);
    var sum = 0;
    for (var j = 0; j < tmp.length; j++){
      sum += tmp[j];
    }
    if (sum >= A && sum <= B) {
      ans += i;
    }
  }
  console.log(ans);
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));