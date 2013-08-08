var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = []; //will be an array
  extend(newTree, treeMethods);
  return newTree;
};
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = makeTree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(input, node){
  node = node || this;
  var result = false;
  if(this.value === input) result = true;
  return result;
};
