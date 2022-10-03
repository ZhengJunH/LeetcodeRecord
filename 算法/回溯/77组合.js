var combine = function (n, k) {
    const res = []

    let path = []

    const backtrack = (path, index) => {
        let len = path.length

        if (path.length === k) {
            res.push([...path])

            return
        }

        for (let i = index; i <= n - (k - len) + 1; i++) {
            path.push(i)
            backtrack(path, i + 1)
            path.pop()
        }

    }

    backtrack(path, 1)

    return res
    
};