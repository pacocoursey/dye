// Return a number between [l, u]
const n = (l, u) => Math.floor(Math.random() * (u - l + 1)) + l;

// Return a random RGB color
const r = () => `rgb(${n(0, 255)}, ${n(0, 255)}, ${n(0, 255)})`;

// Generate a new gradient
const g = () => {
  let s = '';
  let h = 0;

  Array(n(2, 3))
    .fill()
    .forEach(() => {
      h = n(h, 100);
      s = `${s} ${r()} ${h}%, `;
    });

  s = s.slice(0, -2);
  console.log(s);
  document.body.style.backgroundImage = `linear-gradient(${n(0, 360)}deg, ${s})`;
};

window.addEventListener('load', () => { g(); });
window.addEventListener('keydown', (e) => {
  if (e.keyCode === 32) g(); // Space
});
