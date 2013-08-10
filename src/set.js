var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function( value ){
  var stringified = JSON.stringify(value);
  if( value || Math.abs(value) >= 0 ) this._storage[stringified] = value;
};

setPrototype.contains = function( value ){
  var stringified = JSON.stringify(value);
  if( this._storage[stringified ] === 0 ) return true;
  return Boolean( this._storage[stringified ] );
};

setPrototype.remove = function( value ){
  var stringified = JSON.stringify(value);
  delete this._storage[stringified ];
};
