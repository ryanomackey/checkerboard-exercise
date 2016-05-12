// Your JS goes here
"use strict";

document.body.style.margin = 0;

var box = {};

for (var i = 0; i < 81; i++) {
  var randMathRed = Math.floor((Math.random() * 255));
  var randMathGreen = Math.floor((Math.random() * 255));
  var randMathBlue = Math.floor((Math.random() * 255));
  var randomColor = 'rgb(' + randMathRed + ',' + randMathGreen + ',' + randMathBlue + ')';
  box[i] = document.createElement('div');
  box[i].style.width="11.1%";
  box[i].style.float="left";
  box[i].style.paddingBottom = '11.1%';
  box[i].style.backgroundColor = randomColor.toString();
  document.body.appendChild(box[i]);
}
