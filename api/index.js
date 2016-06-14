'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _yeomanGenerator = require('yeoman-generator');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Koa2RestGenerator = function (_Base) {
  _inherits(Koa2RestGenerator, _Base);

  function Koa2RestGenerator() {
    _classCallCheck(this, Koa2RestGenerator);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Koa2RestGenerator).apply(this, arguments));
  }

  _createClass(Koa2RestGenerator, [{
    key: 'initializing',
    value: function initializing() {
      this.argument('apiName', {
        required: true,
        type: 'input',
        desc: 'Creates a new REST API endpoint'
      });

      this.log('Creating new REST API endpoint: ' + this.apiName);
    }
  }, {
    key: 'writing',
    value: function writing() {
      var apiName = this.apiName;

      this.fs.copyTpl(this.templatePath('api/index.js.ejs'), this.destinationPath('src/api/' + apiName + '/index.js'), {
        apiName: apiName
      });

      this.fs.copyTpl(this.templatePath('api/controller.js.ejs'), this.destinationPath('src/api/' + apiName + '/' + apiName + '.controller.js'), {
        apiName: apiName,
        apiModel: apiName + 'Model'
      });

      this.fs.copy(this.templatePath('api/model.js.ejs'), this.destinationPath('src/api/' + apiName + '/' + apiName + '.model.js'));

      this.fs.copy(this.templatePath('test/unit/api/controller.test.js.ejs'), this.destinationPath('test/unit/api/' + apiName + '/controller.test.js'));

      this.fs.copy(this.templatePath('test/unit/api/model.test.js.ejs'), this.destinationPath('test/unit/api/' + apiName + '/model.test.js'));
    }
  }]);

  return Koa2RestGenerator;
}(_yeomanGenerator.Base);

exports.default = Koa2RestGenerator;
module.exports = exports['default'];