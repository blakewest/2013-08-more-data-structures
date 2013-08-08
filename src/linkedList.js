// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.idx = 0;
  list.tracker = 0;

  list.addToTail = function(value){
    list[list.idx] = makeNode(value);
    list.tail = value;
    if(list.idx === 0) {
      list.head = value;
    }
    list.idx++;
  };

  list.removeHead = function(){
  };

  list.contains = function(){
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
