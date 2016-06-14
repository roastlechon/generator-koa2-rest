'use strict';

const yeoman = require('yeoman-generator');

class Koa2RestGenerator extends yeoman.Base {

  initializing() {
    this.argument('apiName', {
      required: true,
      type: 'input',
      desc: 'Creates a new REST API endpoint'
    });

    this.log(`Creating new REST API endpoint: ${this.apiName}`);
  }

  writing() {
    let apiName = this.apiName;

    this.fs.copyTpl(
      this.templatePath('api/index.js.ejs'),
      this.destinationPath('src/api/' + apiName + '/index.js'), {
        apiName: apiName
    });

    this.fs.copyTpl(
      this.templatePath('api/controller.js.ejs'),
      this.destinationPath('src/api/' + apiName + '/' + apiName + '.controller.js'), {
        apiName: apiName,
        apiModel: apiName + 'Model'
    });

    this.fs.copy(
      this.templatePath('api/model.js.ejs'),
      this.destinationPath('src/api/' + apiName + '/' + apiName + '.model.js')
    );

    this.fs.copy(
      this.templatePath('api/spec.js.ejs'),
      this.destinationPath('src/api/' + apiName + '/' + apiName + '.spec.js')
    );
  }

}

module.exports = Koa2RestGenerator;
