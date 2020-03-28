function Main(arg) {
  var n = arg.split("\n")[0];

  if (n[2] == n[3] && n[4] == n[5]) {
    console.log("Yes");
  }
  else {
    console.log("No");
    
  }

  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));