var combinationSum2 = function (candidates, target) {
    const res = []

    const path = []

    candidates = candidates.sort((a, b) => a - b)

    const backstrack = (candidates, sum, path, index) => {
        if (sum === target) {
            
            res.push([...path])
            
            return
        }

        for (let i = index; i < candidates.length; i++) {
            if (i > index && candidates[i] === candidates[i - 1]) continue

            path.push(candidates[i])

            backstrack(candidates, sum + candidates[i], path, i + 1)

            path.pop()

        }

    }

    backstrack(candidates, 0, path, 0)

    return res

};