// Hash Table

// hashTable constructor function
function hashTable(size){
  this.buckers = Array(size);
  this.numBuckets = this.buckets.length;
}

// hashNode constructor functions
function hashNode(key, value, next){
  this.key = key;
  this.value = value;
  this.next = next || null; 
}