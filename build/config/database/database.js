"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var db = _mongoose["default"].connect("mongodb+srv://hernan:3999257Pt@cluster0.pcnlm.mongodb.net/saintJudeDB?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
}).then(function (db) {
  return console.log('DB is connected: ');
})["catch"](function (err) {
  return console.log('ERROR: ', err);
});

var _default = db;
exports["default"] = _default;