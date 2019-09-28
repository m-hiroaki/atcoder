function Main(arg) {
 
    var N = arg-0;

    var oddnum = 0;
    oddnum = Math.ceil(N / 2);

    console.log(oddnum/N);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));