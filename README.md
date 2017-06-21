# time-skipper

## 使い方

```javascript

// pass func and fps
const timeSkipper = new TimeSkipper(func, 10);
requestAnimationFrame(tick);

// 10fpsで実行される
function func(time, delta) {
  console.log(time, delta);
}

function tick(time) {
  timeSkipper.exec(time);
  requestAnimationFrame(tick);
}
```
