
import TimeSkipper from './TimeSkipper';

const timeSkipper = new TimeSkipper(render, 10);
requestAnimationFrame(tick);

function render(time, delta) {
  console.log(time, delta);
}

function tick(time) {
  timeSkipper.exec(time);
  requestAnimationFrame(tick);
}


