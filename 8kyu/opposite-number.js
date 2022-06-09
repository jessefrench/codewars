// Very simple, given an integer or a floating-point number, find its opposite.

function opposite(n){
    if(n > 0){
      return n - (n*2)
    }else{
      return Math.abs(n)
    }
}