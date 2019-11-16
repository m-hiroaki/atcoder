function junretsu(balls, nukitorisu){
  var arrs, i, j, zensu, results, parts;
  arrs = [];
  zensu = balls.length;
  if(zensu < nukitorisu){
    return;
  }else if(nukitorisu == 1){
    for(i = 0; i < zensu; i ++){
      arrs[i] = [balls[i]];
    }
  }else{
    for(i = 0; i < zensu; i ++){
      parts = balls.slice(0);
      parts.splice(i, 1)[0];
      results = junretsu(parts, nukitorisu - 1);
      for(j = 0; j < results.length; j ++){
        arrs.push([balls[i]].concat(results[j]));
      }
    }
  }
  return arrs;
}

function factorialize(num) {
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
}

function Main(arg) {
 
    var N = arg.split("\n")[0]-0;
    var S = arg.split("\n").slice(1, N+1);

    var tmp = new Array(100);
    tmp.fill(0);

    for (var i = 0; i < N; i++){
        var x1 = S[i].split(" ")[0] - 0;
        var y1 = S[i].split(" ")[1] - 0;
        for (var j = 0; j < N; j++){
            var x2 = S[j].split(" ")[0] - 0;
            var y2 = S[j].split(" ")[1] - 0;

            tmp[i * N + j] = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        }
    }

    var a = new Array(N);
    for (var i = 0; i < N; i++) a[i] = i;

    var retu = junretsu(a, N);

    var ans = 0;
    for (var i = 0; i < retu.length; i++){
        for (var j = 0; j < N - 1; j++){
            var s = retu[i][j];
            var t = retu[i][j+1];
            ans += tmp[s * N + t];    
        }
    }

    console.log(ans/factorialize(N));

    return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));