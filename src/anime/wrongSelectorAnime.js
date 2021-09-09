const wrongSelectorAnime = () => {
  document
    .getElementsByClassName('code')[0]
    .animate(
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
};

export default wrongSelectorAnime;
