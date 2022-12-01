// Intuition
// store your value to map and if value is already stored then return true

// Approach
// declare a Map and then check if map has than value then return else set to the map until last value and if no value match then return false

// Complexity
// Time complexity:
// O(n)
// Space complexity:
// O(1)


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            return true
        } else {
            map.set(nums[i])
        }
    }
    return false
};