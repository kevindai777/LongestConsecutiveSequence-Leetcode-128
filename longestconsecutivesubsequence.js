//Objective is to find the length of the longest consecutive subsequence in
//a 1-D array.

let nums = [100,4,200,1,2,3]


//O(n) solution that performs a pass over the array to get
//the values into a hashset and another pass over the hashset
//to find the longest subsequence

let set = new Set()

for (let num of nums) {
    set.add(num)
}

let result = 0

set.forEach(num => {
    //Find the start of the consecutive streak by finding the lowest value
    //In this case, we want to start at '1' to get the longest streak
    if (!set.has(num - 1)) {
        let currentNum = num 
        let currentStreak = 1

        //Update the streak 
        while (set.has(currentNum + 1)) {
            currentNum++
            currentStreak++
        }

        //Update the longest streak
        result = Math.max(result, currentStreak)
    }
})

return result