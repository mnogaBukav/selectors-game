const tryAgainAnime = () => {
  [...document.getElementsByClassName('selected')].forEach((element) => {
    element.animate(
      [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-5px)' },
        { transform: 'translateX(5px)' },
        { transform: 'translateX(0)' },
      ],
      {
        duration: 150,
        iterations: 4,
      }
    );
  });
};

export default tryAgainAnime;
