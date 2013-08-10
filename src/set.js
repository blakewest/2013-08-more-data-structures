var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function( value ){
  if( value || Math.abs(value) >= 0 ) this._storage[value] = value;
};

setPrototype.contains = function( value ){
  if( this._storage[value] === 0 ) return true;
  return Boolean( this._storage[value] );
};

setPrototype.remove = function( value ){
  delete this._storage[value];
};
