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
    linkedList.addToTail('c');
    expect(linkedList.head).toEqual({value:'a', next:{value: 'b', next: null, previous: null }});
    expect(linkedList.tail).toEqual({value: 'b', next: null});
  });

  it("should show you first value added when calling removeHead", function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    expect(linkedList.removeHead()).toEqual('a');
  });

  it("should update head after calling removeHead", function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.removeHead();
    expect(linkedList.head).toEqual({value: 'b', next: null});
  });

  it("should return accurate boolean if it contains the passed in value", function() {
    expect(linkedList.contains('a')).toEqual(false);
    linkedList.addToTail('b');
    expect(linkedList.contains('b')).toEqual(true);
  });

  //doubly linked list tests

  it("should set previous property correctly when adding to tail", function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');

    expect(linkedList.head.previous).toEqual(null);
    expect(linkedList.tail.previous).toEqual(1);

  });























































});