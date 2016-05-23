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

  end() {
    this.prompt([{
      type: 'confirm',
      name: 'confirm',
      message: 'Creating an endpoint does not automatically work. \n' +
      'You must mount endpoint in src/config/routes.js for it to work: \n' +
      '   ```app.use(mount(\'/' + this.apiName + '\', require(\'../api/' + this.apiName +'\')));```\n'
    }]);
  }

}

module.exports = Koa2RestGenerator;
