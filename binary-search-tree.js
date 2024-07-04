class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if(this.root === null){
      this.root = new Node(val)
      return this
    } 
    let current = this.root;
    while(true){
      if(current.val>val){
        if(current.left===null){
          current.left = new Node(val)
          return this
        }else{
          current = current.left
        }
        
        
      }
      if(current.val < val){
        if(current.right===null){
          current.right = new Node(val)
          return this
        }else{
          current=current.right
        }
       
       
      }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if(this.root === null){
      this.root = new Node(val);
      return this
    }
    
    if(current.val > val){
      if(current.left === null){
        current.left = new Node(val);
        return this
      }
      return this.insertRecursively(val,current.left)
    }
    if(current.val < val){
      if(current.right === null){
        current.right = new Node(val);
        return this
      }
      return this.insertRecursively(val,current.right)
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if(this.root ===null){
      return null
    }
    let current = this.root;
    while(current){
      if(current.val === val){
        return current;
      }
      if(current.val > val){
        current = current.left
      }else{
        current = current.right
      }
      
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val,current=this.root) {

    if(this.root === null){
      return null
    }
    if(current.val===val){
      return current
    }
    if(current.val > val){
      if(current.left === null) return undefined
      return this.findRecursively(val,current.left)
    }
    if(current.val < val){
      if(current.right===null) return undefined
      return this.findRecursively(val,current.right)
    }
    

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    
    let arr =[];
    function traverse(node){
      if(node===null)return null
      arr.push(node.val)
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root)
     return arr

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let arr =[];
    function traverse(node){
      if(node===null) return null;
      
      if(node.left) traverse(node.left);
      arr.push(node.val);
      if(node.right) traverse(node.right);
    }
    traverse(this.root)
    return arr

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let arr =[];
    function traverse(node){
      if(node===null) return null;
      
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      arr.push(node.val);
    }
    traverse(this.root)
    return arr

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root
    let arr = [];
    let queue =[];
    queue.push(node)
    while(queue.length){
      node = queue.shift();
      arr.push(node.val);
      if(node.left) {queue.push(node.left);}
      if(node.right) {queue.push(node.right)}

    }
    return arr

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
