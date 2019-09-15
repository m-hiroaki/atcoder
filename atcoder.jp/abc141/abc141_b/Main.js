function Main(arg) {
 
    var S = arg.split("\n")[0];

    var ans = true;

    for (var i = 1; i <= S.length; i++){

        if (i % 2 === 0) {
            if (S[i - 1] === "R") {
                ans = false;
                break;
            }
        }
        else {
            if (S[i - 1] === "L" ) {
                ans = false;
                break;
            }
        }

    }

    console.log(ans ? "Yes" : "No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));