'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandom(array) { // рандом из массива
  var rand = Math.floor(Math.random() * array.length);
  return array[rand];
}

var wizards = []; // массив волшебников

for (var k = 0; k < 4; k++) { // заполняем его 4 раза
  var z = {
    name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAME),
    coatColor: getRandom(WIZARD_COAT_COLOR),
    eyesColor: getRandom(WIZARD_EYES_COLOR)
  };
  wizards.push(z);
}

var renderWizard = function (wizard) { // фу клон шаблонов
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment(); // собираем во фрагмент магов и заполняем шаблон
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

var namesPaddingBonus = document.querySelectorAll('.setup-similar-label'); // имена правка верстки
for (var j = 0; j < namesPaddingBonus.length; j++) {
  namesPaddingBonus[j].style.width = '150px';
  namesPaddingBonus[j].style.textAlign = 'center';
}

userDialog.querySelector('.setup-similar').classList.remove('hidden');
