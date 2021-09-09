const nextLevelAnime = () => {
  [...document.getElementsByClassName('selected')].forEach((element) => {
    element.animate(
      [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-2vh)' },
        { transform: 'translateY(-10vh)' },
        { transform: 'translateY(-20vh)' },
        { transform: 'translateY(-100vh)' },
      ],
      {
        duration: 400,
      }
    );
  });
};

export default nextLevelAnime;
