var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(){
};

setPrototype.contains = function(){
};

setPrototype.remove = function(){
};
