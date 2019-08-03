function Main(input) {
	input = input.split("\n");
    var N = input[0];
	var A = input[1].split(" ").map(Number); //monster
	var B = input[2].split(" ").map(Number); //hero
  
  	var count = 0;
    
  	if(A[0] >= B[0]){
      count += B[0];
      B[0] = 0;
    }
  	else{
      count += A[0];
      B[0] -= A[0];
  	}
  
  	for(var i=1; i<N; i++){
      if(B[i-1] > 0){
        if(A[i] >= B[i-1]){
        	A[i] -= B[i-1];
          	count += B[i-1];
        }
        else{
          	count += A[i];
          	A[i] = 0;
        }
      }
      
      if(A[i] >= B[i]){
      	count += B[i];
      	B[i] = 0;
      }
  	  else{
      	count += A[i];
      	B[i] -= A[i];
  	  }
    }
  
    if(A[N] >= B[N-1]){
        count += B[N-1];
        B[N-1] = 0;
      }
    else{
        count += A[N];
    }

  	//出力
	console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));