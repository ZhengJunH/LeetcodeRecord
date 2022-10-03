var combinationSum = function (candidates, target) {
    const res = []

    const path = []

    candidates = candidates.sort((a, b) => a - b)

    const backstrack = (target, len, sum, index) => {
        if (sum > target) return false

        if (sum === target) {
            res.push([...path]);

            return
        }
        for (let i = index; i < len; i++) {
            if (sum + candidates[i] > target) break; 
            
            path.push(candidates[i])

            backstrack(target, len, sum + candidates[i], i)

            path.pop()

        }
    }

    backstrack(target, candidates.length, 0, 0)
    
    return res
};