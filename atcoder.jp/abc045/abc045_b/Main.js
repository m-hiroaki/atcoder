function Main(arg) 
{
  var sa = arg.split("\n")[0].split("");
  var sb = arg.split("\n")[1].split("");
  var sc = arg.split("\n")[2].split("");

  var next = 'a';
  while (1) {
    if (next === 'a') {
      if (sa.length===0) {
        console.log("A");
        return;
      }
      next = sa.shift();
    }
    else if (next === 'b') {
      if (sb.length===0) {
        console.log("B");
        return;
      }
      next = sb.shift();
    }
    else if (next === 'c') {
      if (sc.length===0) {
        console.log("C");
        return;
      }
      next = sc.shift();
    }
  }

  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));