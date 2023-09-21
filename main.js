/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/popover/Popover.js
class Popover {
  constructor(targetEl, title, text) {
    this.targetEl = targetEl;
    this.title = title;
    this.text = text;
    this.onPopoverShow = this.onPopoverShow.bind(this);
    this.onPopoverClose = this.onPopoverClose.bind(this);
    this.targetEl.addEventListener('click', this.onPopoverShow);
  }
  markUp() {
    return `
      <div class="popover-title"><span class="popover-title__text">${this.title}</span></div>
      <div class="popover-text">${this.text}</div>
      <button class="popover-btn">Ok</button>
    `;
  }
  onPopoverShow() {
    this.popover = document.createElement('div');
    this.popover.classList.add('popover');
    this.popover.innerHTML = this.markUp();
    document.body.appendChild(this.popover);
    const btnOk = this.popover.querySelector('.popover-btn');
    btnOk.addEventListener('click', this.onPopoverClose);
    window.addEventListener('resize', this.onPopoverClose);
    const {
      top,
      left,
      bottom
    } = this.targetEl.getBoundingClientRect();

    // поповер сверху или снизу элемента
    if (top > this.popover.offsetHeight) {
      this.popover.style.left = `${left + this.targetEl.offsetWidth / 2 - this.popover.offsetWidth / 2}px`;
      this.popover.style.top = `${top - this.popover.offsetHeight - 20}px`;
    } else {
      this.popover.classList.remove('popover');
      this.popover.classList.add('popover-bottom');
      this.popover.style.left = `${left + this.targetEl.offsetWidth / 2 - this.popover.offsetWidth / 2}px`;
      this.popover.style.top = `${bottom + 20}px`;
    }
    this.targetEl.removeEventListener('click', this.onPopoverShow);
    this.targetEl.addEventListener('click', this.onPopoverClose);
  }
  onPopoverClose() {
    this.popover.remove();
    this.targetEl.addEventListener('click', this.onPopoverShow);
    window.removeEventListener('resize', this.onPopoverClose);
  }
}
/* harmony default export */ var popover_Popover = (Popover);
;// CONCATENATED MODULE: ./src/app.js

const demoBtnOne = document.querySelector('.demo-btn_one');
const demoBtnTwo = document.querySelector('.demo-btn_two');
const title = 'Давайте не будем укрепляться в мысли, что чистый разум не скован границами';
const app_text = 'В своём стремлении повысить качество жизни, они забывают, что перспективное планирование, в своём классическом представлении, допускает внедрение соответствующих условий активизации.';
const popoverOne = new popover_Popover(demoBtnOne, title, app_text);
const popoverTwo = new popover_Popover(demoBtnTwo, title, app_text);
console.log(popoverOne, popoverTwo);
;// CONCATENATED MODULE: ./src/index.js



/******/ })()
;