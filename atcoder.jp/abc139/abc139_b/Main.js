function Main(arg) {
 
    var A = arg.split(" ")[0]-0;
    var B = arg.split(" ")[1]-0;

    console.log(Math.ceil((B-1)/(A-1)));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
