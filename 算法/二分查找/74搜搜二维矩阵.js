var searchMatrix = function (matrix, target) {
    let m = matrix.length

    let n = matrix[0].length

    let left = 0

    let right = m * n - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        
        const temp = matrix[Math.floor(mid / n)][mid % n]

        if (temp === target) return true

        if (temp > target) {
            right = mid - 1
        } 
        else {
            left = mid + 1
        }

    }

    return false
    
};