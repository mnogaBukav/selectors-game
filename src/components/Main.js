const MY_GITHUB = 'https://github.com/lilianna040';
const COURSE_LINK = 'https://rs.school/js/';

class Main {
  constructor() {
    this.app = null;
  }

  siteElements() {
    this.app = document.createElement('div');
    this.app.classList.add('app');
    this.game = document.createElement('div');
    this.game.classList.add('game');

    this.gameContent = document.createElement('div');
    this.gameContent.classList.add('game-content');

    this.code = document.createElement('div');
    this.code.classList.add('code');
    this.footer = document.createElement('footer');
    this.footer.classList.add('footer');

    const gameLogo = document.createElement('div');
    gameLogo.classList.add('game-logo');
    this.textGame = document.createElement('div');
    this.textGame.textContent = "Let's train :)";
    this.textGame.classList.add('text-game');
    this.game.appendChild(gameLogo);

    const yearText = document.createElement('p');
    yearText.classList.add('year-text');
    yearText.textContent = ' 2020 ';

    const gitLink = document.createElement('a');
    gitLink.classList.add('git-link');
    gitLink.setAttribute('href', MY_GITHUB);

    const rsLink = document.createElement('a');
    rsLink.classList.add('rs-logo');
    rsLink.setAttribute('href', COURSE_LINK);

    this.footer.appendChild(gitLink);
    this.footer.appendChild(yearText);
    this.footer.appendChild(rsLink);
  }
}

export default Main;
