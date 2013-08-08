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
};

treeMethods.contains = function(){
};
