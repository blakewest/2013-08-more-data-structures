var makeTree = function(value, parent){
  var newTree = {};
  newTree.value = value;
  newTree.children = []; //will be an array
  newTree.parent = parent || null;
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
  var newTree = makeTree(value, this);
  this.children.push(newTree);
};

treeMethods.contains = function(input){
  var result = false;
  if(this.value === input) {
    return true;
  }else if (this.children.length){
    for (var i = 0; i < this.children.length; i++) {
     return this.children[i].contains(input);
    }
  }
  return result;
};

// disassociates the tree with its parent (in both directions)
treeMethods.removeFromParent = function() {
  // get parent
  var parent = this.parent;

  // remove this node from the parent's children array property

  // set this nodes parent property to null
  this.parent = null;

  // return this node
  return this;
};