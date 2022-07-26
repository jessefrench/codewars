## Growth of a Population

In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

```javascript
function nbYear(p0,percent,aug,p){
    let sum = 0
    let count = 0
    while(sum < p){
        sum = Math.floor(p0 + p0 * (percent/100) + aug)
        p0 = sum
        count ++
    }
    return count
}
```
