'use strict';

import { Base } from 'yeoman-generator';

export default class Koa2RestGenerator extends Base {

  prompting() {
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
    }])
    .then(answers => {
      this.name = answers.name;
      this.description = answers.description;
    });
  }

  get writing() {
    return {
      app() {
        let serviceName = this.name;
        let serviceDescription = this.description;

        this.fs.copyTpl(
          this.templatePath('package.json.ejs'),
          this.destinationPath('package.json'), {
            serviceName: serviceName,
            serviceDescription: serviceDescription
        });

        this.fs.copy(
          this.templatePath('src'),
          this.destinationPath('src')
        );

        this.fs.copy(
          this.templatePath('test'),
          this.destinationPath('test')
        );
      },

      projectfiles() {
        this.fs.copy(
          this.templatePath('editorconfig'),
          this.destinationPath('.editorconfig')
        );

        this.fs.copy(
          this.templatePath('gitignore'),
          this.destinationPath('.gitignore')
        );

      }
    };
  }

  install() {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      bower: false
    });
  }
}
