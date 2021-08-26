"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../controllers/user.controller"));

var _middlewares = require("../middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express["default"])();
router.post('/signUp', [_middlewares.authJWT.verifyToken, _middlewares.verifySignUp.checkDuplicateUsernameOrEmail, _middlewares.authJWT.isSuperAdmin, _middlewares.verifySignUp.checkRolesExisted], _user["default"].signUp);
var _default = router;
exports["default"] = _default;