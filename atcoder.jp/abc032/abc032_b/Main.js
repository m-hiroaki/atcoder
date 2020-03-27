function Main(arg) {

  var s = arg.split("\n")[0].split("");
  var t = arg.split("\n")[1] - 0;

  if (s.length < t) {
    console.log(0);
    return;
  }
  
  var tmp = [];
  for (var i = 0; i <= s.length - t; i++){
    var a = s.slice(i, i + t).join("");
    tmp.push(a);
  }

  var ans = new Set(tmp);

  console.log(ans.size);

  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));