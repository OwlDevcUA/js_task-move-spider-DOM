'use strict';

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();

  const wallBorder = parseInt(getComputedStyle(wall).borderWidth, 10);
  const spiderSize = spider.offsetHeight;

  if (wall) {
    spider.style.left =
      e.clientX - wallRect.left - wallBorder - spiderSize / 2 + 'px';

    spider.style.top =
      e.clientY - wallRect.top - wallBorder - spiderSize / 2 + 'px';
  }

  if (spider.style.top < spiderSize) {
    spider.style.top = 0;
  }
});
