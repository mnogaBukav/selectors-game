import levelsList from '../lists/levelsList';

class LevelsManager {
  constructor() {
    this.element = null;
  }

  create(currentLevel) {
    this.list = document.createElement('ol');

    let arrayHelpDone = [];
    if (localStorage.getItem('arrayFromLily')) {
      arrayHelpDone = JSON.parse(localStorage.getItem('arrayFromLily'));
    }
    levelsList.forEach((level, index) => {
      const levelListItem = document.createElement('li');
      if (arrayHelpDone[index] === 'done') {
        levelListItem.classList.add('done');
      }
      if (arrayHelpDone[index] === 'help') {
        levelListItem.classList.add('help');
      }
      levelListItem.textContent = level.levelName;
      levelListItem.style.order = level.index;

      if (level.index === currentLevel) {
        this.selectLevel = levelListItem;
        levelListItem.classList.add('current-level');
      }

      this.list.appendChild(levelListItem);
    });

    this.recetBtn = document.createElement('button');
    this.recetBtn.classList.add('recet-btn');
    this.recetBtn.textContent = 'reset';

    this.element = document.createElement('div');
    this.element.classList.add('levels-manager');
    this.element.appendChild(this.list);
    this.element.appendChild(this.recetBtn);
    return this.element;
  }
}

export default LevelsManager;
