
function Main(arg)
{
  var S = arg.split("\n")[0];
  var Q = arg.split("\n")[1] - 0;
  var query = arg.split("\n").slice(2);

  var f = false;
  for (var i = 0; i < Q; i++){
    var tmp = query[i].split(" ");
    if (tmp[0] === "1") {
      f = !f;
    }
    else {
      if (tmp[1] === "1") {
        if (!f) {
          S = tmp[2] + S;  
        }
        else {
          S = S + tmp[2];
        }
      }
      else {
        if (!f) {
          S = S + tmp[2];
        }
        else {
          S = tmp[2] + S;  
        }
      }
    }
  }
  if (f) S = S.split("").reverse().join("");
  console.log(S);
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));