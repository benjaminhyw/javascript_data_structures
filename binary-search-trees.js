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