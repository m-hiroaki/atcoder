function Main(arg)
{
  var A = arg.split("\n")[0].split(" ")[0]-0;
  var B = arg.split("\n")[0].split(" ")[1]-0;

  for (var i = 1; i <= 1000; i++){
    var a = Math.floor(i*0.08);
    var b = Math.floor(i*0.1);
    if (A === a && B === b) {
      console.log(i);
      return;
    }
  }

console.log(-1);
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));