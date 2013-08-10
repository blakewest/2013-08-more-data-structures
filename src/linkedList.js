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

  list.removeHead = function(){
    var result = list.head;

    if (!result) {
      return null;
    }else if (result.next) {
      var nextItem = list[result.next];

      delete list[nextItem.previous];

      nextItem.previous = null;

      list.head = nextItem;
    }else {
      list.tail = null;
      list.head = null;
      delete list[list.findSoloNodeIndex()];
    }

    return result.value;

  };

  list.removeTail = function() {
    // get tail
    var result = list.tail;
    
    if (!result) {
      return null;
    }
    //only do if there is a previous item
    else if (result.previous){   
      var previousItem = list[result.previous];

      // delete the old tail
      delete list[ previousItem.next ];

      // set the next value of the thing previous to tail to null
      previousItem.next = null;
      
      // update tail property
      list.tail = previousItem;

    }else{  //this happens when there's only one item
      list.tail = null;
      list.head = null;
      delete list[list.findSoloNodeIndex()];
    }
    
    // return the old tail
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

  list.addToTail = function(value){
    var newNode = makeNode(value);
    list[list.index] = newNode;
    list.tail = newNode;
    if( !list.head ) {       // this sets head for very first item.
      list.head = newNode;
    }else {
      list[list.index-1].next = list.index;
      list[list.index].previous = list.index-1;
    }
    list.index++;
  };

  list.addToHead = function(value) {
    var newNode = makeNode(value);

    // get current head
    var currentHead = list.head;
    // Shifting the head on a non-empty list

    if ( currentHead !== null ) {
      // find neighbor of current head to determine currentHead's index, or find solo node index
      var currentHeadIndex = list.head.next ? list[list.head.next].previous : list.findSoloNodeIndex();
      // set new node next to current head index
      newNode.next = currentHeadIndex;
      // set current head previous to new nodes index
      currentHead.previous = list.index;
    } else {
      // set tail to newNode if list is empty
      list.tail = newNode;
    }

    // place new node in list
    list[list.index] = newNode;
    // reset head to new node
    list.head = newNode;
    //increment index
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
