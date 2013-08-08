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
