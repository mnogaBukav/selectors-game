import levelsList from '../lists/levelsList';
import { selectedClassName } from './CSSEditor';
import TableElement, { targetAttribute } from './TableElement';

class Table {
  constructor(levelIndex) {
    this.levelIndex = levelIndex;
    if (localStorage.getItem('arrayFromLily')) {
      this.levelsHelpDone = JSON.parse(localStorage.getItem('arrayFromLily'));
    } else {
      this.levelsHelpDone = Array(levelsList.length).fill(0);
    }
  }

  checkClasses() {
    this.levelDone = true;
    const checkLevel = (elementsArr) => {
      [...elementsArr].forEach((element) => {
        if (element.childElementCount) checkLevel(element.children);
        if (element.hasAttribute(targetAttribute) !== element.classList.contains(selectedClassName))
          this.levelDone = false;
      });
    };

    checkLevel(this.element.children);
    return this.levelDone;
  }

  create(levelIndex) {
    this.levelIndex = levelIndex;

    const level = levelsList[this.levelIndex];
    this.element = document.createElement('table');
    this.element.classList.add('table');

    let index = 0;
    level.table.forEach((element) => {
      const e = new TableElement(element);
      this.element.appendChild(e.create(index));
      index += e.children.length + 1;
    });

    return this.element;
  }
}

export default Table;
