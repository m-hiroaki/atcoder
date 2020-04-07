function Main(arg) {

  var n = arg.split("\n")[0].split(" ")[0] - 0;
  var m = arg.split("\n")[0].split(" ")[1] - 0;

  var A = new Array(n);
  var B = new Array(m);

  for (var i = 0; i < n; i++){
    A[i] = arg.split("\n")[i + 1].split("");
  }
  for (var i = 0; i < m; i++){
    B[i] = arg.split("\n")[n + 1 + i].split("");
  }
  
  for (var i = 0; i <= n - m; i++){
    for (var j = 0; j <= n - m; j++){
      var cnt = 0;
      for (var k = 0; k < m; k++){
        for (var l = 0; l < m; l++){
          if (A[i+k][j+l] == B[k][l]) cnt++;
        }
      }
      if (cnt == m * m) {
        console.log("Yes");
        return;
      }
    }
  }
  console.log("No");
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));