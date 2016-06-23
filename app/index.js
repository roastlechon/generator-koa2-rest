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
    key: 'prompting',
    value: function prompting() {
      var _this2 = this;

      return this.prompt([{
        type: 'input',
        name: 'name',
        message: 'Your service name',
        default: 'koa2-app-service'
      }, {
        type: 'input',
        name: 'description',
        message: 'Your service description',
        default: 'REST microservice for koa2-app-service'
      }]).then(function (answers) {
        _this2.name = answers.name;
        _this2.description = answers.description;
      });
    }
  }, {
    key: 'install',
    value: function install() {
      this.installDependencies({
        skipInstall: this.options['skip-install'],
        bower: false
      });
    }
  }, {
    key: 'writing',
    get: function get() {
      return {
        app: function app() {
          var serviceName = this.name;
          var serviceDescription = this.description;

          this.fs.copyTpl(this.templatePath('package.json.ejs'), this.destinationPath('package.json'), {
            serviceName: serviceName,
            serviceDescription: serviceDescription
          });

          this.fs.copy(this.templatePath('src'), this.destinationPath('src'));

          this.fs.copy(this.templatePath('test'), this.destinationPath('test'));
        },
        projectfiles: function projectfiles() {
          this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'));

          this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
        }
      };
    }
  }]);

  return Koa2RestGenerator;
}(_yeomanGenerator.Base);

exports.default = Koa2RestGenerator;
module.exports = exports['default'];