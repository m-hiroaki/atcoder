function Main(arg) {
 
    var A = arg.split("\n")[0]-0;
    var B = arg.split("\n")[1]-0;


    console.log(6-A-B);

    return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
