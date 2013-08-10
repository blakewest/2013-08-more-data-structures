var makeBinarySearchTree = function(value){
	var newBST = Object.create(binaryMethods);
  newBST.left = null;
  newBST.right = null;
  newBST.value = value;

  return newBST;
};

var binaryMethods = {};

binaryMethods.insert = function(value) {
  var newNode = makeBinarySearchTree(value);
  if(value > this.value) {
    this.right = newNode;
  }else if (value < this.value) {
    this.left = newNode;
  }else {
    return;
  }
};

binaryMethods.contains = function() {

};

binaryMethods.depthFirstLog = function() {

};