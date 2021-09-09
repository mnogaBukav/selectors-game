export const selectedClassName = 'selected';

class CSSEditor {
  constructor() {
    this.input = null;
  }

  create() {
    this.input = document.createElement('input');
    this.input.classList.add('input-text');
    this.input.setAttribute('type', 'text');
    this.input.setAttribute('placeholder', 'Type in a CSS selector');

    this.element = document.createElement('div');
    this.element.classList.add('CSS-editor');
    this.codeHeader = document.createElement('div');
    this.codeHeader.classList.add('code-header');

    const divInfo = document.createElement('div');
    divInfo.classList.add('div-info');

    this.enterBtn = document.createElement('button');
    this.enterBtn.classList.add('enter-btn');
    this.enterBtn.textContent = 'enter';
    this.helpBtn = document.createElement('button');
    this.helpBtn.classList.add('help-btn');
    this.helpBtn.textContent = "help :'(";

    divInfo.appendChild(this.input);
    divInfo.appendChild(this.enterBtn);

    const textCssEditor = document.createElement('div');
    textCssEditor.textContent = 'CSS Editor';

    this.codeHeader.appendChild(this.helpBtn);
    this.codeHeader.appendChild(textCssEditor);

    this.element.appendChild(this.codeHeader);
    this.element.appendChild(divInfo);
    return this.element;
  }
}

export default CSSEditor;
