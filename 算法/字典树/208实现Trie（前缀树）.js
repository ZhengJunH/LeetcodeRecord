function Node(val){
    this.val=val//值
    this.child={}//子节点
    this.isEnd=false//单词是否结束
}

var Trie = function() {
    this.root=new Node()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
      let node=this.root
      for(let ch of word){
          if(!node.child[ch]) node.child[ch]=new Node(ch)
          node=node.child[ch]
      }
      node.isEnd=true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node=this.root
    for(let ch of word){
        if(!node.child[ch]) return false
        node=node.child[ch]
    }
    return node.isEnd
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
     let node=this.root
     for(let ch of prefix){
         if(!node.child[ch]) return false
         node=node.child[ch]
     }
     return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */