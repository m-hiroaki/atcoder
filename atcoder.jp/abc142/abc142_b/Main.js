function Main(arg) {
 
    var N = arg.split("\n")[0].split(" ")[0]-0;
    var K = arg.split("\n")[0].split(" ")[1]-0;

    var h = arg.split("\n")[1].split(" ").map(v => v - 0);

    var ans = h.filter(val => val >= K).length;

    console.log(ans);
}


Main(require("fs").readFileSync("/dev/stdin", "utf8"));