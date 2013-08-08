describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });
  
  it("should return an empty array for tree.children on an empty tree", function() {
    expect(tree.children).toEqual([]);
  });

  it("should add a child to the children array after calling .addChild", function() {
    tree.addChild(5);
    expect(tree.children.length).toEqual(1);
  });

  it("contains should return true if this node contains the passed invalue or false if it's not", function() {
    var tree = makeTree('a');
    expect(tree.contains('a')).toEqual(true);
    expect(tree.contains('b')).toEqual(false);
  });


  // Add more tests here to test the functionality of tree.
});