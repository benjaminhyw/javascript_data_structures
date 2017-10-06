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
  } else if (this.buckets[index].key === key) {
    // This else if statement basically says, if there is an entry in the buckets, and it is equal to this first one, then update the first one
    this.buckets[index].value = value;
  } else {
    // Otherwise
    var currentNode = this.buckets[index];
    // Travel to the end of the chain through the while loop, and keep replacing currentNode with the next value until you no longer have a next value
    while (currentNode.next){
      // This if statement is if we just want to update an already existing entry.  So it says,
      if (currentNode.next.key === key){
        // If the key already exists there, then just update the value
        currentNode.next.value = value;
        // This return statement exists to exit the while loop.  Without doing so, then there would be an extra node added at the end, which we don't want
        return;
      }
      currentNode = currenNode.next;
    }
    // When you no longer have a next value, create a new one, and the code block ends!
    currentNode.next = new HashNode(key, value)
  }
}