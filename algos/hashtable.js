/*
 * Create a HashTable with the following methods
 * a. get
 * b. set
 * c. remove
 * d. forEach
 */


function HashTable() {
  this.buckets = 64;
  this.occupiedBuckets = 0;
  this.storage = [];
}

HashTable.prototype.get = function get(key) {

};

HashTable.prototype.set = function set(key, value) {

};

HashTable.prototype.remove = function remove(key) {

};

HashTable.prototype.forEach = function forEach(cb) {

};

HashTable.prototype.hashFunction = function hashFunction(key, size) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    const letter = key[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % size;
  }
  return hash;
};

module.exports = HashTable;
