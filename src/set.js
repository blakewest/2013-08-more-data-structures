var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function( value ){
  if( value ) this._storage[value] = value;
};

setPrototype.contains = function( value ){
  return Boolean( this._storage[value] );
};

setPrototype.remove = function( value ){
  delete this._storage[value];
};
