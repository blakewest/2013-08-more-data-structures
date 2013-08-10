var makeTree = function(value, parent){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
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

treeMethods.traverse = function(callback) {
  callback(this.value);
  if(this.children) {
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].traverse(callback);
    }
  }
};

treeMethods.removeFromParent = function() {
  var node = this;
  var parent = this.parent;

  var index = (function() {
    for( var i = 0; i < parent.children.length; i++ ) {
      if (parent.children[i] === node) {
        return i;
      }
    }
  })();

  this.parent = null;
  return parent.children.splice(index, 1)[0];
};