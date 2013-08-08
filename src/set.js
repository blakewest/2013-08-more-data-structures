var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function( value ){
  this._storage[value] = value;
};

setPrototype.contains = function( value ){
  for( var key in this._storage ) {
    if( this._storage[key] === value ) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(){
};
