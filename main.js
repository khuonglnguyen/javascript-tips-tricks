const initApp = () => {
  const button = document.querySelector("button");
  button.addEventListener("click", debounce(clickOrder, 2000));
};

const clickOrder = () => {
  console.log("Clicked!");
};

document.addEventListener("DOMContentLoaded", initApp);

const debounce = (fn, delay) => {
  delay = delay || 0;
  let timerId;
  console.log("timerId: ", timerId);
  return () => {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }

    timerId = setTimeout(() => {
      fn();
    }, delay);
  };
};
