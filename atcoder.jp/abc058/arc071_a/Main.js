function Main(arg)
{
  var N = arg.split("\n")[0] - 0;
  var S = arg.split("\n").slice(1);

  var tmp = new Set(S[0]);
  tmp = Array.from(tmp).join("").toString();

  var a = [];
  for (var s = 0; s < tmp.length; s++){

    var f = true;
    for (var i = 1; i < N; i++){
      if (S[i].indexOf(tmp[s]) === -1) {
        f = false;
        break;
      }
    }

    if (f) a.push(tmp[s]);
  }

  var len = {};

  for (var i = 0; i < a.length; i++){
    var b = S[0].split("");
    b = b.filter( v => v===a[i] );
    len[a[i]] = b.length;
  }

  for (var j = 1; j < N; j++) {

    for (var i = 0; i < a.length; i++){
      var b = S[j].split("");
      b = b.filter( v => v===a[i] );
      len[a[i]] = Math.min(len[a[i]], b.length);
    }
  }

  var ans = "";
  Object.keys(len).forEach(function (key) {
    var rep = len[key] - 0;
    ans += key.repeat(rep);
  });

  console.log(ans.split("").sort().join(""));
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));