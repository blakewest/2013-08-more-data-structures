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

binaryMethods.contains = function() {

};

binaryMethods.depthFirstLog = function() {

};