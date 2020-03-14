function Main(arg)
{
  var H = arg.split("\n")[0].split(" ")[0]-0;
  var W = arg.split("\n")[0].split(" ")[1]-0;

  var f = true;
  var ans = 0;
  
  if(H===1 || W===1){
    console.log(1);
    return;
  }

  if (H % 2 == 0) {
    console.log((H * W) / 2);
  }
  else {
    console.log(W * (H - 1) / 2 + Math.ceil(W / 2));
  }

  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));