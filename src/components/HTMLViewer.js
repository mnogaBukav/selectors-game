class HTMLViewer {
  constructor() {
    this.element = null;
  }

  create() {
    this.element = document.createElement('div');
    this.element.classList.add('HTML-viewer');

    this.codeHeader = document.createElement('div');
    this.codeHeader.classList.add('code-header');

    this.levelsBtn = document.createElement('button');
    this.levelsBtn.classList.add('levels-btn');

    const textHtmlViwer = document.createElement('div');
    textHtmlViwer.textContent = 'HTML Viewer';

    this.codeHeader.appendChild(this.levelsBtn);
    this.codeHeader.appendChild(textHtmlViwer);

    this.element.appendChild(this.codeHeader);
    this.htmlCode = document.createElement('div');
    this.htmlCode.classList.add('html-code');
    this.element.appendChild(this.htmlCode);
    return this.element;
  }

  HTMLCodeParser(html, index) {
    let ind = index;
    this.htmlCode.innerHTML = '';
    const fragment = document.createDocumentFragment();
    const htmlList = Array.from(html.children);
    htmlList.forEach((listItem) => {
      const div = document.createElement(listItem.tagName);
      div.classList.add('div-tag');

      div.setAttribute('data-index', ind);
      if (listItem.children.length) {
        div.classList.add('that-box-has-children');

        const openTag = document.createElement(listItem.tagName);
        const closeTag = document.createElement(listItem.tagName);

        openTag.setAttribute('data-index', ind);
        closeTag.setAttribute('data-index', ind);
        openTag.classList.add('div-tag');
        closeTag.classList.add('div-tag');
        if (listItem.id) {
          openTag.textContent = `<${listItem.tagName.toLowerCase()} id="red">`;
        } else {
          openTag.textContent = `<${listItem.tagName.toLowerCase()}>`;
        }
        closeTag.textContent = `</${listItem.tagName.toLowerCase()}>`;

        ind += 1;
        div.appendChild(openTag);
        div.appendChild(this.HTMLCodeParser(listItem, ind));
        div.appendChild(closeTag);
      } else {
        if (listItem.tagName === 'BOX') {
          div.classList.add('that-box-is-alone');
        }
        div.textContent = listItem.outerHTML
          .replace(/ class="square anime"/g, '')
          .replace(/anime/g, '')
          .replace(/ class=""/g, '')
          .replace(/ "/g, '"')
          .replace(/ data-target="true"/g, '')
          .replace(/ data-index="\d"/, '');
      }
      ind += 1;
      fragment.appendChild(div);
    });
    return fragment;
  }
}

export default HTMLViewer;
