"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Klervi\\JS\\klervicn-resume\\components\\HeadLabel.js";

exports.default = function (_ref) {
  var children = _ref.children,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      props = (0, _objectWithoutProperties3.default)(_ref, ["children", "style"]);

  return _react2.default.createElement("h2", {
    style: {
      fontWeight: "normal",
      borderBottom: "1px solid",
      borderColor: "#bfbfbf",
      textAlign: "center",
      fontSize: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, children);
};