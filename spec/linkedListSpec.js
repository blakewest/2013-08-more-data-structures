describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should return undefined when calling head or tail of an empty linked list", function() {
    expect(linkedList.head).toEqual(null);
    expect(linkedList.tail).toEqual(null);
  });

  it("should return the same element when calling head or tail in a linked list of length 1", function() {
    linkedList.addToTail('a');
    expect(linkedList.head).toEqual(linkedList.tail);
  });
  // add more tests here to test the functionality of linkedList
  it("should have different head and tail results for a linked list with 2 or more elements", function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    expect(linkedList.head).toEqual('a');
    expect(linkedList.tail).toEqual('b');
  });
});