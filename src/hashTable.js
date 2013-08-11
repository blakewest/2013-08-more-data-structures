var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._usage = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this.checkStorage();
  var pairs = this._storage.get(i) || [];
  var pairsIndex = this._findItemIndex( k, i, pairs );
  if (pairsIndex) {
    pairs[pairsIndex][1] = v;
  } else {
    pairs.push([k,v]);
  }
  this._storage.set(i, pairs);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var pairs = this._storage.get(i);
  var pairsIndex = this._findItemIndex(k, i, pairs);
  return (pairs  && pairs.length) ? pairs[pairsIndex][1] : undefined;
};

HashTable.prototype.remove = function( k ){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var pairs = this._storage.get(i);
  pairs.splice(this._findItemIndex(k, i, pairs), 1);
};

HashTable.prototype._findItemIndex = function( k, i, pairs ) {
  if (pairs && pairs.length ) {
    for( var j = 0; j < pairs.length; j++) {
      if( pairs[j][0] === k ) {
        return j;
      }
    }
  } else {
    return undefined;
  }
};

HashTable.prototype.checkStorage = function() {
  var count = 0;
  this._storage.each(function(item) {
    if( item && item.length ) { count++; }
  });
  this._usage = count / this._limit;
  return this._usage;
};
