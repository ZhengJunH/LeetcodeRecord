var majorityElement = function (nums) {
    let map = new Map()

    for (let key of nums) {
        if (map.has(key)) {
            map.set(key, map.get(key) + 1)
        }

        else {
            map.set(key, 1)
        }

        if (map.get(key) > nums.length / 2) return key

    }
    
};