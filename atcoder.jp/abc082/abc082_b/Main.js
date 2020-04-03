function compareNumbers2(a, b) { //for sort
    return b.charCodeAt()-a.charCodeAt();
}


function Main(arg) {
  var s = arg.split("\n")[0].split("");
  var t = arg.split("\n")[1].split("");

  s.sort();
  t.sort(compareNumbers2);

  if (s < t) {
    console.log("Yes");
  }
  else {
    console.log("No");
  }

  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));