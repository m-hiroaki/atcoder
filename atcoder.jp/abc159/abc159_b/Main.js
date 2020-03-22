function Main(arg) {
  var S = arg.split("\n")[0];

  var a = S.slice(0, (S.length - 1) / 2);
  var b = S.slice(((S.length + 3) / 2)-1).split("").reverse().join("");
  
  if (a !== b) {
    console.log("No");
    return;
  }

  if (a.length % 2 == 0) {
    var c = a.slice(0, (a.length) / 2);
    var d = a.slice(((a.length + 2) / 2)-1).split("").reverse().join("");
  }
  else {
    var c = a.slice(0, (a.length - 1) / 2);
    var d = a.slice(((a.length + 3) / 2)-1).split("").reverse().join("");    
  }
  
  if (c !== d) {
    console.log("No");
    return;
  }

  if (a !== b) {
    console.log("No");
    return;
  }
  
  console.log("Yes");
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));