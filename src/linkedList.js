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
      list[list.idx-1].next = list.idx;
      list[list.idx].previous = list.idx-1;
    }
    list.idx++;
  };

  list.removeHead = function(){
    var result = list[list.tracker];
    if(list[list.tracker]) {
      delete list[list.tracker];
      list.tracker++;
    }
    list[result.next].previous = null;
    list.head = list[result.next];
    
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
  node.previous = null;

  return node;
};
