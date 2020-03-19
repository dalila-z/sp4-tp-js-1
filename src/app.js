/*

helpers : 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

*/

exports.demoFunction1 = function () {
  return "Wax on, off";
};

exports.demoFunction2 = function (a, b, c) {
  return `${a}-${b}-${c}`;
};

exports.dummyFunction = function () {};

exports.sayHelloWorld = function () {
  return "hello, world";
};

exports.isNumberBig = function (val) {
  if (isNaN(val)) throw new TypeError("mauvais paramètre");
  if (val < 10000) return ("It's a small number !");
  return "It's a big number !"
};

exports.sum = function (nmb1, nmb2) {
  if (isNaN(nmb1) || isNaN(nmb2))
  throw new TypeError("Should throw an error: all parameters must be of type number");
  return nmb1 + nmb2;
};


exports.greetingUser = function (prenom, nom) {
  if (typeof prenom !== "string" || typeof nom !== "string")
    throw new TypeError("nom et prenom doivent etre des string");
  if (prenom.length < 2 || nom.length < 2) 
  throw new Error("prenom et nom doivent avoir la longeur de 2 minimum");
  return `Hello ${prenom} ${nom}`;
};


exports.makeOpposite = function(bool) {
  if (typeof bool !== "boolean") throw new TypeError("b doit être de typeo boolean");
  //return !bool;
  if (bool === false) return true;
  else return false;
}

// exports.createACat = null;

// exports.getTheWinner = null;