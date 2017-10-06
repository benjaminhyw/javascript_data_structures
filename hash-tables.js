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

HashTable.prototype.insert = function(key, value){
  // This is going to be a 'bucket' inside of the hash table
  var index = this.hash(key);

  // If nothing currently exists inside the bucket, then create a new node with the key/value provided
  if (!this.buckets[index]){
    this.buckets[index] = new HashNode(key, value);
  } else {
    // Otherwise
    var currentNode = this.buckets[index];
    // Travel to the end of the chain through the while loop, and keep replacing currentNode with the next value until you no longer have a next value
    while (currentNode.next){
      currentNode = currenNode.next;
    }
    // When you no longer have a next value, create a new one, and the code block ends!
    currentNode.next = new HashNode(key, value)
  }
}