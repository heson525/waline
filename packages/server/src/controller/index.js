module.exports = class extends think.Controller {
  indexAction() {
    this.type = 'html';
    this.body = 'Welcome to use <a href="https://waline.js.org" target="_blank"><b>Waline</b></a>!';
  }
};
