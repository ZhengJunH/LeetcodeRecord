var minCameraCover = function (root) {
    if (!root) return 0//是否存在

    let count = 0//记录变量

    const minCamera = (node) => {
        let self = {//给每一个节点新增属性
            isCamera: false,//是否装照相机
            isCover: false//是否被覆盖
        }

        let left = null//有无左右节点

        let right = null

        if (node.left) {//有的话 左递归 
            left = minCamera(node.left)
        }

        if (node.right) {//有的话 右递归
            right = minCamera(node.right)
        }
        
        //自底向上

        if ((left && !left.isCover) || (right && !right.isCover)) {//如果左右节点中有一个没有被覆盖 则该节点加照相机
            self.isCamera = true
            self.isCover = true
            count++
        }

        if ((left && left.isCamera) || (right && right.isCamera)) {//如果左右节点有一个有照相机
            self.isCover = true
        }

        return self

    }

    let temp = minCamera(root)//判断根节点是否被覆盖

    if (temp && !temp.isCover) {
        count++
        temp.isCover = true
    }

    return count//返回数量

};