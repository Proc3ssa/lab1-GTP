// bismillah

function toggleTheme() {
  let isDark = document.body.classList.toggle('dark-theme');
  const toggle = document.getElementById('toggle');
  toggle.src = isDark ? './assets/images/icon-sun.svg' : './assets/images/icon-moon.svg';
}

let characters = document.getElementById("texts");
let wordCountEl = document.getElementById("wordCount");
let charCountEl = document.getElementById("numOfChar");
let sentenceCountEl = document.getElementById("sentCount");
let excludeSpacesCheckbox = document.getElementById("excSpaces");
let charLimitCheckbox = document.getElementById("count");
let limitInput = document.getElementById("limit");

let excludeSpaces = false;
let charLimitEnabled = false;

// ==========================
// Update Word Count
// ==========================
function updateWordCount() {
  let text = characters.value.trim();
  let words = text === "" ? [] : text.split(/\s+/);
  let count = words.length;
  wordCountEl.innerText = count < 10 ? "0" + count : count;
}

// ==========================
// Update Character Count
// ==========================
function updateCharCount() {
  let text = characters.value;
  let length = excludeSpaces ? text.replace(/\s/g, "").length : text.length;
  charCountEl.innerText = length < 10 ? "0" + length : length;

  // Show/hide "excluding space" tag
  document.getElementById("sps").style.display = excludeSpaces ? "inline" : "none";

  // Check limit
  if (charLimitEnabled && limitInput.value) {
    let limit = parseInt(limitInput.value);
    let alertBox = document.querySelector(".alert");
    if (length > limit) {
      alertBox.style.display = "block";
      alertBox.querySelector("span").innerText = limit;
    } else {
      alertBox.style.display = "none";
    }
  }
}

// ==========================
// Update Sentence Count
// ==========================
function updateSentenceCount() {
  let sentences = characters.value.split(/[.!?]+/).filter(s => s.trim().length > 0);
  let count = sentences.length;
  sentenceCountEl.innerText = count < 10 ? "0" + count : count;
}

// ==========================
// Master Update Function
// ==========================
function updateAll() {
  updateWordCount();
  updateCharCount();
  updateSentenceCount();
}

// ==========================
// Event Listeners
// ==========================
characters.addEventListener("input", updateAll);

excludeSpacesCheckbox.addEventListener("change", function () {
  excludeSpaces = this.checked;
  updateAll();
});

charLimitCheckbox.addEventListener("change", function () {
  charLimitEnabled = this.checked;
  document.getElementById("limit").style.display = this.checked ? "inline" : "none";
  updateAll();
});

limitInput.addEventListener("input", updateCharCount);

// ==========================
// Initial Load
// ==========================
updateAll();
