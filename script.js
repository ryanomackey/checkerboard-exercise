// Your JS goes here
"use strict";

document.body.style.margin = 0;

var box = {};

for (var i = 0; i < 81; i++) {
  box[i] = document.createElement('div');
  box[i].style.width="11.1%";
  box[i].style.float="left";
  box[i].style.paddingBottom = '11.1%';
  if (i % 2 === 0) {
    box[i].style.backgroundColor = 'red';
  } else {
    box[i].style.backgroundColor = 'black';
  }
  document.body.appendChild(box[i]);
}
