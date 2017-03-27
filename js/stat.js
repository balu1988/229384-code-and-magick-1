'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1; // любое время отличное от отрицательного будет максимальным

  for (var i = 0; i < times.length; i++) { // в цикле проходим по временам и находим большее
    var time = times[i];
    if (time > max) { // если текущее время больше чем макс,
      max = time; // то записываем его записываем его как макс
    }
  }

  var histogramHeight = 150;              // макс высота гистограммы px;
  var step = histogramHeight / (max - 0); // px;

  var barWidth = 40; // ширина гист px;
  var indent = 50;    // отступ px;
  var initialX = 140; // начало по X px;
  var initialY = 240;  // начало по Y px;
  var padding = 10; // оступ текста в гистограмме


  for (var j = 0; j < times.length; j++) {
    var random = [0, 0, 255, Math.random()];
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(initialX + (indent + barWidth) * j, initialY, barWidth, -1 * (times[j] * step));
    } else {
      ctx.fillStyle = 'rgba' + '(' + random + ')';
      ctx.fillRect(initialX + (indent + barWidth) * j, initialY, barWidth, -1 * (times[j] * step));
    }
    ctx.fillStyle = '#000';
    ctx.textBaseline = 'top';
    ctx.fillText(names[j], initialX + (indent + barWidth) * j, initialY + padding);
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(times[j].toFixed(0), initialX + (indent + barWidth) * j, initialY - (times[j] * step) - padding);
  }
};
