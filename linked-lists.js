// Linked List

// LinkedList constructor function
function LinkedList(){
  this.head = null;
  this.tail = null;
}

// Node constructor function
function Node(value, next, prev){
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value){
  // newNode will take a value and set it as first parameter,
  // Make the next prop the current linkedList head,
  // and make prev null, because there shouldn't be any previous nodes to the head
  var newNode = new Node(value, this.head, null);

  if (this.head){
    //If there is at least one node (meaning, there will also already be an existing head)
    this.head.prev = newNode;
  } else {
    //Otherwise if there aren't any nodes, make this newNode the tails
    this.tail = newNode;
  }
  //This is outside of the if/else block because regardless of the outcome, this needs to happen (when using addToHead)
  this.head = newNode;
};

// addToTail is very similar to addToHead function
LinkedList.prototype.addToTail = function(value){
  // Crete a newNode, and this time make next = null (because there shouldn't be a next node if adding to tail), and the prev = the current this.tail;
  var newNode = new Node(value, null, this.tail);
  if (this.tail){
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function(){
  // If list is empty, return null
  if (!this.head){
    return null;
  }
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head){
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  return val;
}

LinkedList.prototype.removeTail = function(){
  if (!this.tail){
    return null;
  }
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail){
    this.tail.next = null;
  } else {
    this.head = null;
  }
  return val;
};

LinkedList.prototype.search = function(searchValue){
  // We set currentNode to this.head; to start off, since we have to start from either the head or tail.  To make this function work, we have to go through the entire linked list and see if the searchValue exists inside the linked list
  var currentNode = this.head;

  // This while loop will continue to run, and will only stop if currentNode = null.  In which case, the loop closes and we return null at the very end (indicating searchValue was not found);
  while (currentNode){
    if (currentNode.value === searchValue){
      return currentNode.value;
    }
    currentNode = currentNode.next;
  }
  return null;

};