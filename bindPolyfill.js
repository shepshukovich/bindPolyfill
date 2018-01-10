"use strict";
if (Function.prototype.bind == undefined) {
  Function.prototype.bind = function() {
    var func = this;
    var arr = arguments;
    return function() {
      return func.apply(arr[0]);
    };
  };
}
var user = {
  firstName: "Вася",
  sayHi: function() {
    alert(this.firstName);
  }
};
setTimeout(user.sayHi.bind(user), 200);
