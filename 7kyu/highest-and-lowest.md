## Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

```javascript
function highAndLow(nums){
    nums = nums.split(' ')
    return `${Math.max(...nums)} ${Math.min(...nums)}`
}
```
