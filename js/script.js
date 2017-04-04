'use strict';
/* eslint-disable no-unused-vars*/

var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;

function getFireballSpeed(left) {
  if (left) {
    return 5;
  } else {
    return 2;
  }
}

function getWizardHeight() {
  var WizardHeight = 1.337 * wizardWidth;
  return WizardHeight;
}

function getWizardX(width) {
  width = 250;
  return width;
}

function getWizardY(height) {
  height = 200;
  return height;
}

getFireballSpeed();
getWizardHeight();
getWizardX();
getWizardY();
