var makeBinarySearchTree = function(value){
  var newBST = Object.create(binaryMethods);
  newBST.left = null;
  newBST.right = null;
  newBST.value = value;

  return newBST;
};

var binaryMethods = {};

binaryMethods.insert = function(value) {
  if(value > this.value) {
    this.right ? this.right.insert(value) : this.right = makeBinarySearchTree(value);
  }else if (value < this.value) {
    this.left ? this.left.insert(value) : this.left = makeBinarySearchTree(value);
  }else {
    return;
  }
};

binaryMethods.contains = function(value) {
  if(value === this.value) { return true; }
  else if(value > this.value && this.right){
    return this.right.contains(value);
  }else if(this.left) {
    return this.left.contains(value);
  }
  return false;
};

binaryMethods.depthFirstLog = function(func) {
  var node = this;
  func(node.value);
  node.right && node.right.depthFirstLog(func);
  node.left && node.left.depthFirstLog(func);
};
