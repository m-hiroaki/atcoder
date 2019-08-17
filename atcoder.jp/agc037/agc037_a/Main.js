function Main(input) {

    input = input.trim();
    var before = '';
    var tmp = '';
    var ans = new Array();
    while (input.length > 0) {
        tmp += input[0];
        input = input.slice(1);
        if (before === tmp) continue;

        ans.push(tmp);
        before = tmp;
        tmp = '';
    }

    console.log(ans.length);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));