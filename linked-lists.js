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
};