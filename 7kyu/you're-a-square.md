## You're a Square

Given an integral number, determine if it's a square number.

```javascript
function isSquare(n){
  if(Math.sqrt(n) % 1 === 0){
    return true
  }else{
    return false
  }
}
```
