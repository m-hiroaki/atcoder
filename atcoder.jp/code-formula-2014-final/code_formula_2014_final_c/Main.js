function Main(arg) 
{
  var a = arg.split("\n")[0].split(" ");

  a = a.filter(v => v.indexOf("@") !== -1).map(v=>v.split("@"));

  var ans = [];
  for (var i = 0; i < a.length; i++){
    var tmp = a[i];
    tmp.shift();
    for (var j = 0; j < tmp.length; j++){
      if(tmp[j] !== "")
        ans.push(tmp[j]);
    }
  }

  ans = new Set(ans);

  var aa = [];
  ans.forEach(v => aa.push(v));

  ans = aa;

  ans.sort();
  ans.forEach(v => console.log(v));

  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));