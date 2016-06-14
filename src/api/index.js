'use strict';

import { Base } from 'yeoman-generator';

export default class Koa2RestGenerator extends Base {

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
      this.templatePath('test/unit/api/controller.test.js.ejs'),
      this.destinationPath('test/unit/api/' + apiName + '/controller.test.js')
    );

    this.fs.copy(
      this.templatePath('test/unit/api/model.test.js.ejs'),
      this.destinationPath('test/unit/api/' + apiName + '/model.test.js')
    );
  }

}
