/*
 * Create a Heap with the following methods
 * a. push
 * b. pop
 * c. remove
 * d. size
 * e. bubbleUp
 * f. sinkDown
 * g. forEach
 */


function Heap(scoreFunction) {
  this.storage = [];
  this.scoreFunction = scoreFunction || ((a, b) => a - b);
}

Heap.prototype.push = function push(node) {

};

Heap.prototype.pop = function pop() {

};

Heap.prototype.remove = function remove(node) {

};

Heap.prototype.size = function size() {

};

Heap.prototype.bubbleUp = function bubbleUp(n) {

};

Heap.prototype.sinkDown = function sinkDown(n) {

};

Heap.prototype.forEach = function forEach(cb) {

};

module.exports = Heap;
