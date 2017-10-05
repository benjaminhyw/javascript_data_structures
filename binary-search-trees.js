// Binary Search Tree

// Constructor function
// 3 properties: value, left child and right child
function BST(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

// Takes a value, make a new binary search tree (or node), and place that node into our original binary search tree at the correct location
BST.prototype.insert = function(value){
  // If the insert(value) is less than or equal to the current BST's value,
  if (value <= this.value){
    // If there isn't a left node,
    if (!this.left){
      // Create a left node
      this.left = new BST(value)
    } else {
      // If there is a left node, recursion.
      // What this does, is it calls insert on an already existing node, and will keep doing so until it can place a brand new node somewhere on the tree.
      this.left.insert(value)
    }
  } else if (value > this.value){
    // This second part of the if/else block follows the same logic as above, but for the right rather than the left.
    if (!this.right){
      this.right = new BST(value);
    } else {
      this.right.insert(value);
    }
  }
};

BST.prototype.contains = function(value){
  if (value === this.value){
    // If the value is the same as the value of the BST we ran it on, return true
    return true
  } else if (value < this.value){
    // Otherwise, if value is less than the BST.value
      if (!this.left){
        // If there isn't a left node (meaning, there won't be a smaller value and therefore, this value won't be in the tree), return false
        return false;
      } else {
        // Otherwise if there is a left value, recursively call the contain function again.. and it'll keep doing this type of loop until it either finds it or reaches a false conclusion
        return this.left.contains(value);
      }
  } else if (value > this.value){
      if (!this.right){
        return false;
      } else {
        return this.right.contains(value);
      }
  }
};

// This function takes another function as a parameter
// This method follows every branch down to the bottom, and running our iterator function on every node all the way down to the bottom before we move on to our next branch
BST.prototype.depthFirstTraversal = function(iteratorFunc, order){
  // This allows for pre-order traversal, which goes from top to bottom left, and then move towards the right
  // It touches the parent node first, then goes down the left branch, then goes down the right branch
  if (order === 'pre-order'){
    iteratorFunc(this.value)
  }
  // If there's a left node, recursively run this function on the left node
  if (this.left){
    this.left.depthFirstTraversal(iteratorFunc, order);
  }
  if (order === 'in-order'){
    // Then run this on the parent node
    // This will return nodes from least to greatest
    // Touches left node first, then the parent node, then the right node
    iteratorFunc(this.value);
  }
  // Then run this on the right child nodes
  if (this.right){
    this.right.depthFirstTraversal(iteratorFunc, order);
  }
  // You end up doing this for all branches of the tree

  // If this is the case, all the other order 'if' statements are ignored, so we end up doing left branch, then right branch, then parent
  if (order === 'post-order'){
    iteratorFunc(this.value);
  }
};

/*The way the previous function works relies on the placement of the if statements, and whatever is passed as the order parameter.  If you notice, the 'pre-order' option is first, which says run it on this.value, aka the parent node.  Then it goes to the rest of the block, making it move left and then right.


Otherwise if the order is 'in-order' instead of 'pre-order', it ignores the first statement, making it start on the left, then up, then parent, then right*/

