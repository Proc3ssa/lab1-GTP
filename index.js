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

let showAllLetters = false;

function updateLetterDensity() {
  const text = characters.value.toUpperCase().replace(/[^A-Z]/g, "");
  const totalLetters = text.length;

  const letterCounts = {};
  for (let i = 0; i < 26; i++) {
    letterCounts[String.fromCharCode(65 + i)] = 0;
  }

  for (let char of text) {
    if (letterCounts.hasOwnProperty(char)) {
      letterCounts[char]++;
    }
  }

  const entries = Object.entries(letterCounts)
    .filter(([_, count]) => count > 0)
    .sort((a, b) => b[1] - a[1]); // sort by frequency

  const densityContainer = document.querySelector(".letterDensity");
  const limit = 5;
  const visibleEntries = showAllLetters ? entries : entries.slice(0, limit);

  const containerHTML = visibleEntries.map(([letter, count]) => {
    const percent = ((count / totalLetters) * 100).toFixed(2);
    return `
      <div class="data disCenter">
        <small>${letter}</small>
        <div class="progress-container">
          <div class="progress-bar" style="width: ${percent}%;"></div>
        </div>
        <small>${count} (${percent}%)</small>
      </div>`;
  }).join("");

  const toggleLabel = showAllLetters ? "See less" : "See more";

  densityContainer.innerHTML = `
    <h3>Letter Density</h3>
    ${containerHTML}
    <p class="toggle-density" style="cursor:pointer; color:black;">
      ${toggleLabel} <i class="fas fa-chevron-${showAllLetters ? "up" : "down"}"></i>
    </p>
  `;

  // Add event listener to toggle
  document.querySelector(".toggle-density").addEventListener("click", () => {
    showAllLetters = !showAllLetters;
    updateLetterDensity(); // re-render
  });
}



// ==========================
// Master Update Function
// ==========================
function updateAll() {
  updateWordCount();
  updateCharCount();
  updateSentenceCount();
  updateLetterDensity();
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
