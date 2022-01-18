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
 const containers = document.getElementsByClassName('container');
 initializeContainers(containers);
});

function initializeContainers(containers) {
  Array.from(containers).forEach(container => {

    //set variables
    const card = container.querySelector('.card');
    const info = container.querySelector('.info');
    const sneaker = container.querySelector('.sneaker')
    const image = sneaker.querySelector('img');
    const description = container.querySelector('.description');

    //add event listeners for mouse enter and transforms
    container.addEventListener('mouseenter', (e) => {
      setInTransitionOnChildren(container);

      container.style.perspective = '1200px';
      container.style.transformStyle = `preserve-3d`;

      card.style.transformStyle = `inherit`;

     if (info !== null) {
       info.style.transform = `translateZ(110px) translateX(-20px)`;
       info.style.filter = `drop-shadow(0px 5px 5px hsla(0deg, 0%, 0%, 0.2))`;
     }

      description.style.transform = `translateZ(25px)`;

      sneaker.style.transformStyle = `preserve-3d`;
      image.style.transform = `translateZ(100px)`;
      image.style.translateOrigin = `50% 70%`;
      image.style.filter = `brightness(110%)`;
      image.style.clipPath = `polygon(5% 30%, 100% 30%, 100% 90%, 5% 90%)`;
    });

    //add event listener for mouse moves
    container.addEventListener('mousemove', (e) => {
      let xAxis = (getCenter(container).xCenter - e.pageX) / 10;
      let yAxis = (getCenter(container) .yCenter - e.pageY) / 10;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    container.addEventListener('mouseleave', (e) => {
      setOutTransitionOnChildren(container);
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      image.style.filter = `brightness(100%)`;
      image.style.transform = 'translateZ(0px)';
      image.style.clipPath = `none`;
      description.style.transform = 'translateZ(0px)';
      if (info !== null ) {
        info.style.transform = `translateZ(0px)`;
        info.style.filter = `revert`;
      }
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


//Sets the out transitions on all children of an element
function setOutTransitionOnChildren(elem) {
  elem.childNodes.forEach(child => {
    if(child.style !== undefined) {
      child.style.transition = `transform 500ms 300ms ease-out, filter 500ms 300ms ease-out`;
    }
    setOutTransitionOnChildren(child);
  });
}

//Sets the in transition on all children of an element
function setInTransitionOnChildren(elem) {
  elem.childNodes.forEach(child => {
    if(child.style !== undefined) {
      child.style.willChange = `transform, filter`;
      child.style.transition = `transform 100ms ease-out, filter 100ms ease-out`;
    }
    setInTransitionOnChildren(child);
  });
}

