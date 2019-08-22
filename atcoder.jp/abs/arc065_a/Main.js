function Main(arg) {
 
    var S = arg.trim().split("").reverse().join("");
    var dream = "dream".split("").reverse().join("");
    var dreamer = "dreamer".split("").reverse().join("");
    var erase = "erase".split("").reverse().join("");
    var eraser = "eraser".split("").reverse().join("");
    
    var answer = true;
    
    while (S.length > 0) {
        if (S.indexOf(dream) === 0) {
            S = S.substr(dream.length);
        }
        else if(S.indexOf(dreamer) === 0) {
            S = S.substr(dreamer.length);
        }
        else if(S.indexOf(erase) === 0) {
            S = S.substr(erase.length);
        }
        else if(S.indexOf(eraser) === 0) {
            S = S.substr(eraser.length);
        }
        else {
            answer = false;
            break;
        }
    }
    
    console.log(answer ? "YES" : "NO");
}

function compareNumbers(a, b) { //for sort
    return a - b;
}
  
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
