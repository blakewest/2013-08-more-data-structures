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

  // Add more tests here to test the functionality of tree.
});