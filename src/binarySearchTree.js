var makeBinarySearchTree = function(value){
	var newBST = Object.create(binaryMethods);
  newBST.left = null;
  newBST.right = null;
  newBST.value = value;

  return newBST;
};

var binaryMethods = {};

binaryMethods.insert = function(value) {
  var newNode;
  if(value > this.value) {
    if (this.right) {
      this.right.insert(value);
    }else{
      newNode = makeBinarySearchTree(value);
      this.right = newNode;

    }
  }else if (value < this.value) {
    if(this.left) {
      this.left.insert(value);
    }else {
      newNode = makeBinarySearchTree(value);
      this.left = newNode;
    }
  }else {
    return;
  }
};

binaryMethods.contains = function(value) {
  if(value === this.value) {
    return true;
  }else if(value > this.value && this.right){
    return this.right.contains(value);
  }else if(this.left) {
    return this.left.contains(value);
  }
  return false;
};

binaryMethods.depthFirstLog = function(func) {
  var node = this;
  func(node.value);
  if(node.right) {
    node.right.depthFirstLog(func);
  }
  if(node.left) {
    node.left.depthFirstLog(func);
  }
};