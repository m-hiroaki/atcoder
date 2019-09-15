function PriorityQueue(){
    this.heap = [];
}

PriorityQueue.prototype = {
    push : function(x){
        var h = this.heap, i = h.length++, j;
        while(i){
            j = i-1 >> 1;
            if(h[j] <= x)break;
            h[i] = h[j];
            i = j;
        }
        h[i] = x;
    },
    pop : function(){
        var h = this.heap, r = h[0], x = h.pop();
        var i = 0, k = h.length >> 1, j;
        while (i < k) {
            j = (i << 1) + 1;
            if(h[j+1] < h[j])++j;
            if(x <= h[j])break;
            h[i] = h[j];
            i = j;
        }
        if(h.length)h[i] = x;
        return r;
    },
    size : function(){return this.heap.length;},
    top : function(){return this.heap[0];},
};

function Main(arg) {
 
    var N = arg.split("\n")[0].split(" ")[0]-0;
    var M = arg.split("\n")[0].split(" ")[1]-0;

    var A = arg.split("\n")[1].split(" ");

    for (var i = 0; i < N; i++){
        A[i] = A[i] - 0;
    }

    var pq = new PriorityQueue();

    for (var i = 0; i < N; i++){
        pq.push(-A[i]);
    }

    for (var i = 0; i < M; i++) {
        var max = -pq.pop();
        pq.push(-Math.floor(max / 2));
    }

    var ans = 0;
    while(pq.size() > 0){
        ans += -pq.pop();
    }

    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
