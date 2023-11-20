const containImg = document.querySelector('.containImg');

const textContainer = document.querySelector('.text-container');

const containImgs = document.querySelectorAll('.containImg');

containImgs.forEach(containImg => {
  const textContainer = containImg.querySelector('.text-container');
  const p = textContainer.querySelector('p');

  containImg.addEventListener('mouseover', () => {
    textContainer.classList.add('hov-in');
  });

  containImg.addEventListener('mouseout', () => {
    textContainer.classList.remove('hov-in');
  });
});

