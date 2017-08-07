// index.js

import './style.css';
import printMe from './print';
import Icon from './logo_vr.png';
	
console.log('this is my starting pointttt');

// printMe();

const img = new Image();
img.src = Icon;
// document.body.appendChild(img);


window.addEventListener('click', printMe);