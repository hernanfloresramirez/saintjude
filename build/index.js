"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].listen(3000, function () {
  console.log('Servidor corriendo en el puerto 3000');
});