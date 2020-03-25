function Main(arg) {

  var s = arg.split("\n")[0].split("");

  var tmp = [];
  var prev = s[0];
  var len = 1;
  while(s.length > 0){
    if (prev !== s[len]) {
      tmp.push(s.slice(0, len));
      prev = s[len];
      s = s.slice(len);
      len = 0;
      continue;
    }
    len++;
  }
  var ans = "";

  for (var i = 0; i < tmp.length; i++){
    ans += tmp[i][0] + tmp[i].length.toString();
  }

  console.log(ans);
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));