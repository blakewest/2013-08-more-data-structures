describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("should actually add things when you call add", function() {
    set.add('a');
    expect(set.contains('a')).toEqual(true);
    expect(set.contains('b')).toEqual(false);
  });

  it("should actually remove a value", function() {
    set.add('a');
    set.remove('a');
    expect(set.contains('a')).toEqual(false);
  });

  it("should work with numbers", function() {
    set.add(5);
    expect(set.contains(5)).toEqual(true);
    expect(set.contains(6)).toEqual(false);
  });

  it("should work with zero", function() {
    set.add(0);
    expect(set.contains(0)).toEqual(true);
  });

  it("should work with negative numbers", function() {
    set.add(-5);
    expect(set.contains(-5)).toEqual(true);
  });

});