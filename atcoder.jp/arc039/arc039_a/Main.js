function Main(arg)
{
  var A = arg.split("\n")[0].split(" ")[0];
  var B = arg.split("\n")[0].split(" ")[1];

  var ans = A - B;

  var tmpA = A.split("").map(Number);
  var tmpB = B.split("").map(Number);

  for (var i = 1; i <= 9; i++){
    tmpA[0] = i;
    ans = Math.max(ans, (tmpA.join("")) - B);
  }
  tmpA = A.split("").map(Number);
  for (var i = 0; i <= 9; i++){
    tmpA[1] = i;
    ans = Math.max(ans, (tmpA.join("")) - B);
  }
  tmpA = A.split("").map(Number);
  for (var i = 0; i <= 9; i++){
    tmpA[2] = i;
    ans = Math.max(ans, (tmpA.join("")) - B);
  }

  for (var i = 1; i <= 9; i++){
    tmpB[0] = i;
    ans = Math.max(ans, A-(tmpB.join("")));
  }
  tmpB = B.split("").map(Number);
  for (var i = 0; i <= 9; i++){
    tmpB[1] = i;
    ans = Math.max(ans, A-(tmpB.join("")));
  }
  tmpB = B.split("").map(Number);
  for (var i = 0; i <= 9; i++){
    tmpB[2] = i;
    ans = Math.max(ans, A-(tmpB.join("")));
  }

  console.log(ans);

  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));