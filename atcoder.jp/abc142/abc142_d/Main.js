function Main(arg) {
 
    var A = arg.split(" ")[0] - 0;
    var B = arg.split(" ")[1] - 0;

    var kouyaku = [];
    var gcd = GCD(A, B);
    for (var i = 1; i*i <= gcd; i++) {
        if (gcd % i === 0) {
            kouyaku.push(i);
            var tmp = (gcd / i);
            if (i !== tmp) {
                kouyaku.push(tmp);
            }
        }
    }

    kouyaku = kouyaku.sort(compareNumbers);

    var ans = [];
    while (kouyaku.length > 0) {
        
        var tmp = kouyaku[0];
        kouyaku.shift();
        ans.push(tmp);

        if (tmp === 1) continue;
        if (kouyaku.length === 0) break;

        kouyaku = kouyaku.filter(val => val % tmp !== 0);
    }


    console.log(ans.length);
}

var GCD = function(a, b) {
    if ( ! b) {
        return a;
    }

    return GCD(b, a % b);
};

function compareNumbers(a, b) { //for sort
    return a - b;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));