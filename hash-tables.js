// Hash Table

// hashTable constructor function
function HashTable(size){
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

// hashNode constructor functions
function HashNode(key, value, next){
  this.key = key;
  this.value = value;
  this.next = next || null; 
}

// We will take in a string for a key, and use a loop plus charCodeAt to loop through each letter, and find the Unicode value of each.  By doing so, we gather up a total for the string..
// And then we find the modulus, and throw that into var bucket. This tells us what bucket to put our node in.
HashTable.prototype.hash = function(key){
  var total = 0;
  for (var i = 0; i < key.length; i++){
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBuckets;
  return bucket;
}