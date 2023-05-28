const value = document.getElementById("value");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const resetButton = document.getElementById("reset");
const NegativeBlock = 0;

const updateValue = () => {
  value.innerHTML = count;
};

let count = 0;
let intervalId = 0;

plusButton.addEventListener("mousedown", () => {
  count += 1;
  updateValue();
  intervalId = setInterval(() => {
    count += 1;
    updateValue();
  }, 220);
});

minusButton.addEventListener("mousedown", () => {
  count -= 1;
  updateValue();
  intervalId = setInterval(() => {
    count -= 1;
    updateValue();
  }, 220);
});

resetButton.addEventListener("click", () => {
  count = 0;
  updateValue();
});

document.addEventListener("mouseup", () => clearInterval(intervalId));

minusButton.addEventListener("click", () => {
  if (count < NegativeBlock) {
    count = 0;
    updateValue();
  }
});
