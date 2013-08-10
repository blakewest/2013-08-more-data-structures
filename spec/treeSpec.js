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

  it("should return accurate value for an added child", function() {
    tree.addChild('anything');
    expect(tree.children[0].value).toEqual('anything');
  });

  it("contains should return true if any children of this node have the passed in value", function() {
    tree.addChild('a');
    expect(tree.contains('a')).toEqual(true);
    expect(tree.contains('b')).toEqual(false);
  });

  it("should contain a parent property", function() {
    expect(tree.parent).toEqual(null);
  });

  it("nodes should properly refer to their parent", function() {
    tree.addChild('a');
    expect(tree.children[0].parent).toEqual(tree);
  });

  it("should refer to the parent of a grandchild correctly", function() {
    tree.addChild('a');
    tree.children[0].addChild('b');
    expect(tree.children[0].children[0].parent).toEqual(tree.children[0]);
  });

  it("should remove a node from its parent", function() {
    tree.addChild('a');
    tree.children[0].removeFromParent();
    expect(tree.children.length).toEqual(0);
  });


  // Add more tests here to test the functionality of tree.
});