import './index.css';

import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/vs2015.css';

import Main from './components/Main';
import HTMLViewer from './components/HTMLViewer';
import CSSEditor, { selectedClassName } from './components/CSSEditor';
import LevelsManager from './components/LevelsManager';
import Table from './components/Table';
import wrongSelectorAnime from './anime/wrongSelectorAnime';
import nextLevelAnime from './anime/nextLevelAnime';
import tryAgainAnime from './anime/tryAgainAnime';
import levelsList from './lists/levelsList';

hljs.registerLanguage('xml', xml);

const site = new Main();
site.siteElements();

let currentLevel = 0;
if (localStorage.getItem('currentLevelFromLily')) {
  currentLevel = Number(localStorage.getItem('currentLevelFromLily'));
}

const textLevelName = document.createElement('div');
textLevelName.classList.add('description-name');
const textLevelTask = document.createElement('div');
textLevelTask.classList.add('description-task');

function levelDescription(currLevel) {
  textLevelName.textContent = `Level ${currLevel + 1}: ${levelsList[currLevel].levelName}`;
  textLevelTask.textContent = `Task: ${levelsList[currLevel].description}`;
}

levelDescription(Number(localStorage.getItem('currentLevelFromLily')));

site.textGame.appendChild(textLevelName);
site.textGame.appendChild(textLevelTask);

const table = new Table(currentLevel);
const cssEditor = new CSSEditor();
const htmlViewer = new HTMLViewer();
const levelsManager = new LevelsManager();

site.code.appendChild(htmlViewer.create());
site.code.appendChild(cssEditor.create());

site.game.appendChild(site.code);
site.gameContent.appendChild(site.textGame);
site.gameContent.appendChild(table.create(currentLevel));
site.gameContent.appendChild(site.footer);
site.game.appendChild(site.gameContent);

site.app.appendChild(levelsManager.create(currentLevel));
site.app.appendChild(site.game);

function highlight() {
  [...htmlViewer.htmlCode.children].forEach((block) => {
    hljs.highlightBlock(block);
  });
}

htmlViewer.htmlCode.appendChild(htmlViewer.HTMLCodeParser(table.element, 0));
highlight();

let medicine = null;
let codeLine = null;
let popup = null;

function popupAppear(tagName, className, id) {
  popup = document.createElement('popup');
  popup.textContent = `<${tagName.toLowerCase()} id="${id}" class="${className}"></${tagName.toLowerCase()}>`
    .replace(/ id=""/, '')
    .replace(/anime/, '')
    .replace(/highlight/, '')
    .replace(/ class=""/, '');
  hljs.highlightBlock(popup);
  table.element.appendChild(popup);
}

function clearHighlight() {
  if (medicine && codeLine) {
    medicine.classList.toggle('highlight');
    codeLine.classList.toggle('highlight');
    codeLine = null;
    medicine = null;
    popup.remove();
  }
}

htmlViewer.htmlCode.addEventListener('mouseleave', clearHighlight);
htmlViewer.htmlCode.addEventListener('mouseover', (event) => {
  clearHighlight();
  if (event.target !== event.currentTarget) {
    if (
      event.target.closest('.div-tag').tagName === 'BOX' &&
      !event.target.closest('.div-tag').classList.contains('that-box-is-alone')
    ) {
      codeLine = event.target.closest('.that-box-has-children');
    } else {
      codeLine = event.target.closest('.div-tag');
    }
    const dataIndex = codeLine.getAttribute('data-index');
    medicine = table.element.querySelector(`[data-index="${dataIndex}"]`);
    medicine.classList.toggle('highlight');
    codeLine.classList.toggle('highlight');
    popupAppear(codeLine.tagName, medicine.classList[0], medicine.id);
  }
});

function highlightTableElements() {
  table.element.addEventListener('mouseleave', clearHighlight);
  table.element.addEventListener('mouseover', (event) => {
    clearHighlight();
    if (event.target !== event.currentTarget) {
      medicine = event.target;
      const dataIndex = medicine.getAttribute('data-index');
      codeLine = htmlViewer.htmlCode.querySelector(`[data-index="${dataIndex}"]`);
      medicine.classList.toggle('highlight');
      codeLine.classList.toggle('highlight');
      popupAppear(medicine.tagName, medicine.classList[0], medicine.id);
    }
  });
}

highlightTableElements();

levelsManager.list.addEventListener('click', (event) => {
  if (event.target !== event.currentTarget) {
    levelsManager.element.classList.toggle('top-manager');
    table.element.remove();
    site.gameContent.appendChild(table.create(Number(event.target.style.order)));
    highlightTableElements();

    levelsManager.selectLevel.classList.remove('current-level');
    levelsManager.selectLevel = event.target;
    event.target.classList.add('current-level');
    localStorage.setItem('currentLevelFromLily', event.target.style.order);

    levelDescription(Number(localStorage.getItem('currentLevelFromLily')));

    cssEditor.input.value = '';
    cssEditor.input.focus();
    htmlViewer.htmlCode.appendChild(htmlViewer.HTMLCodeParser(table.element, 0));

    highlight();
  }
});

document.body.appendChild(site.app);

function tableQuery(selector) {
  try {
    return document.querySelector('table.table').querySelectorAll(`table.table ${selector}`);
  } catch (error) {
    return [];
  }
}

function enterFunc() {
  const els = tableQuery(cssEditor.input.value);

  if (els.length) {
    tableQuery(`.${selectedClassName}`).forEach((el) => el.classList.remove(selectedClassName));
    els.forEach((el) => {
      el.classList.add(selectedClassName);
    });
    if (table.checkClasses()) {
      if (table.levelsHelpDone[table.levelIndex] !== 'help') {
        levelsManager.selectLevel.classList.add('done');
        table.levelsHelpDone[table.levelIndex] = 'done';
        localStorage.setItem('arrayFromLily', JSON.stringify(table.levelsHelpDone));
      }

      nextLevelAnime();

      setTimeout(() => {
        if (levelsList[table.levelIndex + 1]) {
          table.element.remove();
          site.gameContent.appendChild(table.create(table.levelIndex + 1));
          highlightTableElements();

          levelsManager.selectLevel.classList.toggle('current-level');
          const list = [...levelsManager.list.children];
          levelsManager.selectLevel = list[+levelsManager.selectLevel.style.order + 1];
          levelsManager.selectLevel.classList.toggle('current-level');
          localStorage.setItem('currentLevelFromLily', levelsManager.selectLevel.style.order);

          levelDescription(Number(localStorage.getItem('currentLevelFromLily')));

          htmlViewer.htmlCode.appendChild(htmlViewer.HTMLCodeParser(table.element, 0));
          highlight();
        } else {
          table.element.textContent = 'Train again?';
          levelsManager.element.classList.toggle('top-manager');
        }
        cssEditor.input.value = '';
        cssEditor.input.focus();
      }, 400);
    } else {
      tryAgainAnime();
    }
  } else {
    wrongSelectorAnime();
  }
}

htmlViewer.levelsBtn.addEventListener('click', () => {
  levelsManager.element.classList.toggle('top-manager');
});

cssEditor.input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') enterFunc();
});

cssEditor.enterBtn.addEventListener('click', () => {
  enterFunc();
});

function helpFunc() {
  if (table.levelsHelpDone[table.levelIndex] !== 'done') {
    levelsManager.selectLevel.classList.add('help');
    table.levelsHelpDone[table.levelIndex] = 'help';
    localStorage.setItem('arrayFromLily', JSON.stringify(table.levelsHelpDone));
  }
  const answer = levelsList[table.levelIndex].levelAnswer;

  let timerAnswer;
  let i = 0;

  const writeAnswer = () => {
    cssEditor.input.value += answer[i];
    i += 1;

    if (!answer[i]) {
      clearInterval(timerAnswer);
    }
  };

  timerAnswer = setInterval(writeAnswer, 170);
}

cssEditor.helpBtn.addEventListener('click', helpFunc);

function recetFunc() {
  table.element.remove();
  localStorage.clear();
  site.gameContent.appendChild(table.create(0));
  table.levelsHelpDone.fill(0);

  [...levelsManager.list.children].forEach((listItem) => {
    if (listItem.classList.contains('help')) {
      listItem.classList.remove('help');
    }
    if (listItem.classList.contains('done')) {
      listItem.classList.remove('done');
    }
  });

  textLevelName.textContent = `Level: ${levelsList[0].levelName}`;
  textLevelTask.textContent = `Task: ${levelsList[0].description}`;

  levelsManager.selectLevel.classList.toggle('current-level');
  [levelsManager.selectLevel] = levelsManager.list.children;
  levelsManager.selectLevel.classList.toggle('current-level');

  htmlViewer.htmlCode.innerHTML = '';
  htmlViewer.htmlCode.appendChild(htmlViewer.HTMLCodeParser(table.element, 0));

  setTimeout(() => {
    levelsManager.element.classList.toggle('top-manager');
  }, 300);

  highlight();
}

levelsManager.recetBtn.addEventListener('click', recetFunc);
