describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(10);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });
  // add more tests here to test the functionality of binarySearchTree
  it("should set the value of the root property", function() {
    expect(binarySearchTree.value).toEqual(10);
  });

  it("should insert values lower than the root to the left", function() {
    binarySearchTree.insert(9);
    expect(binarySearchTree.left.value).toEqual(9);
  });
});