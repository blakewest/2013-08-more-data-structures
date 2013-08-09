// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.index = 0;
  list.start = 0;

  //get rid of tracker (start), just use index (index) as the pointer for any item. 
  //everytime you make a new node, index increases. 
  //just use the 'head' and 'tail' as the pointers when you removeHead and removeTail

  list.addToTail = function(value){
    var newNode = makeNode(value);
    list[list.index] = newNode;
    list.tail = newNode;
    if(list.index === 0) {       // this sets head for very first item.
      list.head = newNode;
    }else {
      list[list.index-1].next = list.index;
      list[list.index].previous = list.index-1;
    }
    list.index++;
  };

  list.removeHead = function(){
    var result = list[list.start];
    if(list[list.start]) {
      delete list[list.start];
      list.start++;
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

  list.addToHead = function(value) {
    var newNode = makeNode(value);

    // get current head
    var currentHead = list.head;
    // Shifting the head on a non-empty list
    if ( list.index ) {
      // find neighbor of current head to determine currentHead's index
      var currentHeadIndex = list[list.head.next].previous;
      // set new node next to current head index
      newNode.next = currentHeadIndex;
      // set current head previous to new nodes index
      currentHead.previous = list.index;
    }

    // set tail to newNode if list is empty
    if( !list.index ) { list.tail = newNode; }

    // place new node in list
    list[list.index] = newNode;
    // reset head to new node
    list.head = newNode;
    //increment index
    list.index++;
  };

  list.removeTail = function() {

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
