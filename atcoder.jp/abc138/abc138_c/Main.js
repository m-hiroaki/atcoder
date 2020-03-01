function PriorityQueue() {
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



function Main(arg)
{
  var N = arg.split("\n")[0] - 0;
  var a = arg.split("\n")[1].split(" ").map(Number);

  var q = new PriorityQueue();
  for (var i = 0; i < N; i++){
    q.push(a[i]);
  }

  while (q.size() > 1) {
    var x = q.pop();
    var y = q.pop();
    var tmp = (x + y) / 2.0;
    q.push(tmp);
  }

  console.log(q.pop());
  return;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));