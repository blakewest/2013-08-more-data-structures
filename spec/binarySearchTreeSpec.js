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

  it("should insert values greater than the root to the right", function() {
    binarySearchTree.insert(11);
    expect(binarySearchTree.right.value).toEqual(11);
  });

  it("should not insert duplicate values", function() {
    binarySearchTree.insert(10);
    expect(binarySearchTree.left).toEqual(null);
    expect(binarySearchTree.right).toEqual(null);
  });

  it("should insert correctly on left and right side with the same tree", function() {
    binarySearchTree.insert(12);
    binarySearchTree.insert(8);

    expect(binarySearchTree.left.value).toEqual(8);
    expect(binarySearchTree.right.value).toEqual(12);
  });

    it("should insert beyond one level", function() {
      binarySearchTree.insert(12);
      binarySearchTree.insert(11);

      expect(binarySearchTree.right.left.value).toEqual(11);
    });
});