// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.idx = 0;
  list.tracker = 0;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    list[list.idx] = newNode;
    list.tail = newNode;
    if(list.idx === 0) {       // this sets head for very first item.
      list.head = newNode;
    }else {
      list[list.idx-1].next = newNode;     //resets next value or prev item to the newly added node
    }
    list.idx++;
  };

  list.removeHead = function(){
    var result = list[list.tracker];
    if(list[list.tracker]) list.tracker++;
    list.head = result.next;
    return result.value;
  };

  list.contains = function(value){
    for (var key in list) {
      if (list[key] && list[key].value === value) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
