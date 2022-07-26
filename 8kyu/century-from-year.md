## Century From Year

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc. Given a year, return the century it is in.

```javascript
function century(year){
    if(year <= 100){
      return 1
    }else if(year % 100 === 0){
      return (parseInt(year / 100))
    }else{
      return (parseInt(year / 100) + 1)
    }
}
```
