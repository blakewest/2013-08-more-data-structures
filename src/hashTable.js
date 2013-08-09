var HashTable = function(){
  this._limit = 1;

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
  if ( !this._storage.get(i) ) {
    var newObj = {};
    newObj[k] = v;
    this._storage.set(i, newObj);
  } else {
    this._storage.get(i)[k] = v;
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i)) {
    return this._storage.get(i)[k];
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function( key ){
  var i = getIndexBelowMaxForKey(key, this._limit);
  console.log(i);
  delete this._storage.get(i)[key];
};

// HashTable.prototype.insert = function(k, v){
//   var i = getIndexBelowMaxForKey(k, this._limit);
//   console.log(i);
//   this._storage.set(i, v);

// };

// HashTable.prototype.retrieve = function(k){
//   var i = getIndexBelowMaxForKey(k, this._limit);
//   return this._storage.get(i);
// };

// HashTable.prototype.remove = function( key ){
//   var i = getIndexBelowMaxForKey(key, this._limit);
//   console.log(i);
//   this._storage.set(i, undefined);
// };

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
