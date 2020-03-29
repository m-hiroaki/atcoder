function Main(arg) {
  var n = arg.split("\n")[0].split("");

  var ans = [];
  for (var i = 0; i < n.length; i++){
    if (n[i] === "B") {
      ans.pop();
    }
    else {
      ans.push(n[i]);
    }
  }

  console.log(ans.join(""));
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));