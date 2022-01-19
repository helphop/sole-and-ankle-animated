import React from 'react';
import ReactDOM from 'react-dom';
import { PhoneIncoming } from 'react-feather';

import App from './components/App';
import GlobalStyles from './components/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);

window.addEventListener('load', (event) => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: no-preference)');
  if (mediaQuery.matches) {
    const containers = document.getElementsByClassName('container');
    initializeContainers(containers);
  }
});

function initializeContainers(containers) {
  Array.from(containers).forEach(container => {

    //set variables
    const card = container.querySelector('.card');

    //add event listener for mouse moves
    container.addEventListener('mousemove', (e) => {
      let xAxis = (getCenter(card).xCenter - e.pageX) / 8;
      let yAxis = (getCenter(card) .yCenter - e.pageY) / 8;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    container.addEventListener('mouseleave', (e) => {
      container.onmousemove = null;
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
  });
}

//calculates the center coordinates of an element on a page
function getCenter(elem) {
  const box = elem.getBoundingClientRect();
  let xCenter = (box.left + box.right) / 2;
  let elOffset = yOffset(elem);
  let yCenter = (box.top + elOffset.top + box.bottom + elOffset.top) / 2;
  return {xCenter: xCenter, yCenter: yCenter};
}

//calculates how far down an element has been scrolled
function yOffset(el) {
	 let scrollTop = window.pageYOffset;
	  return { top: scrollTop}
}




