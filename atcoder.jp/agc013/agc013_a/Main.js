function Main(arg) {

  var n = arg.split("\n")[0]-0;
  var a = arg.split("\n")[1].split(" ").map(Number);

  var tmp = [];
  for (var i = 1; i < n; i++){
    tmp.push(a[i - 1] - a[i]);
  }

  var ans = 0;
  var f = false;
  var diff = 0;
  for (var i = 0; i < tmp.length; i++){
    if (!f) {
      if (tmp[i] === 0) {
        continue;
      }
      f = !f;
      diff = tmp[i];
    }
    else {
      if (diff > 0) {
        if (tmp[i] < 0) {
          ans++;
          f = !f;
        }
      }
      else if(diff < 0){
        if (tmp[i] > 0) {
          ans++;
          f = !f;
        }
      }
    }
  }
 
  console.log(++ans);
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
