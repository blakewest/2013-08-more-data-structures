var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log(i);
  if ( !this._storage.get(i) ) {// this stuff happens when slot i is empty
    var newArr = [];
    newArr.push([k,v]);
    this._storage.set(i, newArr);
  } else {
    this._storage.get(i).push([k,v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var item = this._storage.get(i);
  var itemIndex = this._findItemIndex(k, i, item);
  return (item  && item.length) ? item[itemIndex][1] : undefined;
};

HashTable.prototype.remove = function( key ){
  //delete this._findItem(key);
  var i = getIndexBelowMaxForKey(key, this._limit);
  var slot = this._storage.get(i);
  slot.splice(this._findItemIndex(key, i, slot), 1);
};

HashTable.prototype._findItemIndex = function( k, i, item ) {
  if (item && item.length ) {
    for( var j = 0; j < item.length; j++) {
      if( item[j][0] === k ) {
        return j;
      }
    }
  } else {
    return undefined;
  }
};

// To prevent excessive collisions, make your hashTable double in size as soon as 75 percent of the spaces have been filled.
// To save space, make sure the hashTable shrinks when space usage falls below 25 percent.

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
