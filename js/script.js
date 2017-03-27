'use strict';

var fireballSize = 22;

var getFireballSpeed = function (left) {
  if (left) {
    return 5;
  } else {
    return 2;
  }
};

var wizardSpeed = 3;

var wizardWidth = 70;

var getWizardHeight = function () {
  var WizardHeight = 1.337 * wizardWidth;
  return WizardHeight;
};

var getWizardX = function (width) {
  return width = 250;
};

var getWizardY = function (height) {
  return height = 200;
};
