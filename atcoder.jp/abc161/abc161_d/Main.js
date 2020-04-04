function Main(arg) {
  var k = arg.split("\n")[0] - 0;

  if (k <= 12) {
    console.log(k);
    return;
  }

  var ans = 12;
  var answer = new Array(k+1);
  for (var i = 13; i <= k; i++) {
    ans++;
    while (1) {
      var tmp = ans.toString().split("").map(Number);
      var f = true;
      for (var j = 0; j < tmp.length-1; j++) {
        if (Math.abs(tmp[j] - tmp[j + 1]) > 1) {
          f = false;
          if (tmp[j] - tmp[j + 1] > 1) {
            tmp[j + 1]++;
          }
          else if (tmp[j] - tmp[j + 1] < -1) {
            tmp[j]++;
            tmp[j + 1] = 0;
          }
          ans = tmp.join('') - 0;
          break;
        }
      }

      if (f) {
        break;
      }
    }
    answer[i] = ans;
  }

  console.log(answer[k]);
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));