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
    expect(linkedList.head).toEqual({value:'a', next: 1, previous: null});
    expect(linkedList.tail).toEqual({value: 'c', next: null, previous: 1});
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
    expect(linkedList.head).toEqual({value: 'b', next: null, previous: null});
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

  it("should be able to addToHead for an empty list", function() {
    linkedList.addToHead('a');
    expect(linkedList.head.value).toEqual('a');
  });

  it("should removeTail right", function() {
    linkedList.addToHead('a');
    linkedList.addToHead('b');
    expect(linkedList.removeTail()).toEqual('a');
  });

  it("should return null when removeTail is called on an emtpy list", function() {
    expect(linkedList.removeTail()).toEqual(null);
  });

  it("should removeTail on a list with one element in any case", function() {
    linkedList.addToHead('a');
    expect(linkedList.removeTail()).toEqual('a');

    linkedList.addToHead('b');
    linkedList.addToHead('c');
    linkedList.addToHead('d');

    linkedList.removeTail();
    linkedList.removeTail();
    expect(linkedList.removeTail()).toEqual('d');
  });

  it("should removeHead on an empty list", function() {
    expect(linkedList.removeHead()).toEqual(null);
  });

  it("should removeHead on a list with one or more elements, even if array has been emptied", function() {
    linkedList.addToHead('a');
    expect(linkedList.removeHead()).toEqual('a');

    linkedList.addToHead('b');
    linkedList.addToTail('c');
    linkedList.addToTail('d');

    linkedList.removeHead();
    expect(linkedList.removeHead()).toEqual('c');

    linkedList.removeHead();
    linkedList.addToHead('e');
    expect(linkedList.removeHead()).toEqual('e');

    expect(linkedList.removeHead()).toEqual(null);
  });

  it("should handle a variety of operations", function() {
    linkedList.addToHead('a');
    linkedList.addToTail('b');
    linkedList.addToHead('c');
    linkedList.addToTail('d');

    expect(linkedList.removeTail()).toEqual('d');
    expect(linkedList.removeHead()).toEqual('c');

    linkedList.removeHead();
    linkedList.removeTail();
    expect(linkedList.removeHead()).toEqual(null);

  });

});