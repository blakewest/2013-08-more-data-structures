var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.index = 0;
  list.start = 0;

  list.removeHead = function(){
    var oldHead = list.head;

    if (!oldHead) {
      return null;
    }else if (oldHead.next) {
      var nextItem = list[oldHead.next];

      delete list[nextItem.previous];

      nextItem.previous = null;

      list.head = nextItem;
    }else {
      list.tail = null;
      list.head = null;
      delete list[list.findSoloNodeIndex()];
    }

    return oldHead.value;

  };

  list.removeTail = function() {
    var oldTail = list.tail;

    if (!oldTail) {
      return null;
    }
    //only do if there is a previous item
    else if (oldTail.previous){
      var newTail = list[oldTail.previous];

      // delete the old tail
      delete list[ newTail.next ];

      newTail.next = null;
      list.tail = newTail;

    }else{  //this happens when there's only one item
      list.tail = null;
      list.head = null;
      delete list[list.findSoloNodeIndex()];
    }
    return oldTail.value;
  };

  list.contains = function(value){
    for (var key in list) {
      if (list[key] && list[key].value === value) {
        return true;
      }
    }
    return false;
  };

  list.addToTail = function(value){
    var newNode = makeNode(value);
    list[list.index] = newNode;
    list.tail = newNode;
    if( !list.head ) {       // this sets head if list is empty.
      list.head = newNode;
    }else {
      list[list.index-1].next = list.index;
      list[list.index].previous = list.index-1;
    }
    list.index++;
  };

  list.addToHead = function(value) {
    var newNode = makeNode(value);
    var currentHead = list.head;

    // Shifting the head on a non-empty list
    if ( currentHead !== null ) {
      // find neighbor of current head to determine currentHead's index, or find solo node index
      var currentHeadIndex = list.head.next ? list[list.head.next].previous : list.findSoloNodeIndex();
      newNode.next = currentHeadIndex;
      currentHead.previous = list.index;
    } else {
      // set tail to newNode if list is empty
      list.tail = newNode;
    }

    list[list.index] = newNode;
    list.head = newNode;
    list.index++;
  };

  list.findSoloNodeIndex = function() {
    for( var key in list ) {
      if ( key[0] >= '0' && key[0] <= '9') {
        return +key;
      }
    }
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
