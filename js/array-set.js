import { clearInput } from "./clear/clearInput.js";

const add = document.getElementById("submit-btn");
const clearBtn = document.querySelector(".clear-input");

add.addEventListener("click", addValue);
clearBtn.addEventListener("click", clearInput);

const emojis = ["🌸", "🌏", "🍀", "🐳", "🐙", "🍄"];

const array = [];
const set = new Set();

const randomIndex = Math.floor(Math.random() * emojis.length);
const randomEmoji = emojis[randomIndex];
const input = document.getElementById("input");
input.value = randomEmoji;

// ------------------------------------------------------------------------

function addValue() {
  const inputValue = document.getElementById("input").value;

  if (inputValue) {
    array.push(inputValue);
    const arrayItem = document.createElement("li");
    arrayItem.innerText = inputValue;
    document.getElementById("array").appendChild(arrayItem);

    if (!set.has(inputValue)) {
      set.add(inputValue);
      const setItem = document.createElement("li");
      setItem.innerText = inputValue;
      document.getElementById("set").appendChild(setItem);
    }

    const newIndex = Math.floor(Math.random() * emojis.length);
    const newEmoji = emojis[newIndex];
    input.value = newEmoji;
  }
}
