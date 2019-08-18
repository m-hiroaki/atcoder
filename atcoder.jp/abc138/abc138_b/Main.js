function Main(input) {
 
    var N = new Number(input.split('\n')[0]);
    var A = input.split('\n')[1].split(' ');
 
    var sum = 0;

    for (var i = 0; i < N; i++){
        sum += (1.0 / A[i]);
    }

    console.log(1.0/sum);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));