function Main(arg)
{
  var list = arg.split("\n")[0].split(" ");
  var N = arg.split("\n")[1]-0;
  var t = arg.split("\n").slice(2);

  for (var i = 0; i < list.length; i++){
    for (var j = 0; j < N; j++){
      if (list[i].length === t[j].length) {
        if (list[i] === t[j]) {
          list[i] = "*".repeat(list[i].length);
          break;
        }
        var count = 0;
        for (var k = 0; k < list[i].length; k++){
          if (t[j][k] === "*") {
            count++;
          }
          else if (t[j][k] === list[i][k]) {
            count++;
          }
        }

        if (count === list[i].length) {
          list[i] = "*".repeat(list[i].length);
          break;
        }
      }
    }
  }

  console.log(list.join(" "));

  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));