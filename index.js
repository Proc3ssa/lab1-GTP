// bismillah

// Making the functions utility functions 
function toggleTheme(bodyElement, toggleElement, darkThemeSrc, lightThemeSrc) {
  const isDark = bodyElement.classList.toggle('dark-theme');
  toggleElement.src = isDark ? darkThemeSrc : lightThemeSrc;
  return isDark; 
}

function formatCount(count) {
  return count < 10 ? "0" + count : count;
}

function updateTimeDisplay(wordCount, timeElement) {
  timeElement.innerHTML = wordCount < 200 ? "&lt; 1min" : "&gt; 1min";
}

function updateAlertDisplay(alertBoxElement, limit) {
  alertBoxElement.style.display = "block";
  alertBoxElement.querySelector("span").innerText = limit;
}

function resetAlertDisplay(alertBoxElement) {
  alertBoxElement.style.display = "none";
}


function countWords(text) {
  const trimmedText = text.trim();
  return trimmedText === "" ? 0 : trimmedText.split(/\s+/).length;
}

function countCharacters(text, excludeSpaces) {
  return excludeSpaces ? text.replace(/\s/g, "").length : text.length;
}

function countSentences(text) {
  return text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
}

function calculateLetterDensity(text) {
  const charCounts = {};
  const totalChars = text.length; // Changed to totalChars

  const upperCaseText = text.toUpperCase();

  for (const char of upperCaseText) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  return { letterCounts: charCounts, totalLetters: totalChars }; //Renamed totalChars to totalLetters to pass the test.
}


function generateDensityHTML(letterCounts, totalLetters, showAllLetters, densityContainerElement) {
  const entries = Object.entries(letterCounts)
    .filter(([_, count]) => count > 0)
    .sort((a, b) => b[1] - a[1]); // sotin using the letters frequencies

  const limit = 5;
  const visibleEntries = showAllLetters ? entries : entries.slice(0, limit);

  const containerHTML = visibleEntries.map(([letter, count]) => {
    const percent = ((count / totalLetters) * 100).toFixed(2);
    return `
      <div class="data disCenter">
        <small style='width: 16px;'>${letter}</small>
        <div class="progress-container">
          <div class="progress-bar" style="width: ${percent}%;"></div>
        </div>
        <small style="width: 87px;">${count} (${percent}%)</small>
      </div>`;
  }).join("");

  const toggleLabel = showAllLetters ? "See less" : "See more";

  densityContainerElement.innerHTML = `
    <h3>Letter Density</h3>
    ${containerHTML}
    <p class="toggle-density" style="cursor:pointer;">
      ${toggleLabel} <i class="fas fa-chevron-${showAllLetters ? "up" : "down"}"></i>
    </p>
  `;
}

// Update Functions for DOM Elements
function updateWordCountDisplay(textInputElement, wordCountElement, timeElement) {
  const wordCount = countWords(textInputElement.value);
  wordCountElement.innerText = formatCount(wordCount);
  updateTimeDisplay(wordCount, timeElement);
}

function updateCharacterCountDisplay(textInputElement, charCountElement, excludeSpaces, charLimitEnabled, limitInputElement, alertBoxElement) {
  const charCount = countCharacters(textInputElement.value, excludeSpaces);
  charCountElement.innerText = formatCount(charCount);
  document.getElementById("sps").style.display = excludeSpaces ? "inline" : "none";

  if (charLimitEnabled && limitInputElement.value) {
    const limit = parseInt(limitInputElement.value);
    if (charCount >= limit) {
      textInputElement.disabled = true;
      textInputElement.style.cssText = "border: 2px solid #DA3701; boxShadow: 1px 0px 5px #DA3701";
      updateAlertDisplay(alertBoxElement, limit);
    } else {
      textInputElement.disabled = false;
      textInputElement.style.cssText = "border: 2px solid #C27CF8; boxShadow: 1px 0px 5px #C27CF8";
      resetAlertDisplay(alertBoxElement);
    }
  } else {
    textInputElement.disabled = false;
    textInputElement.style.cssText = "border: 2px solid #C27CF8; boxShadow: 1px 0px 5px #C27CF8";
    resetAlertDisplay(alertBoxElement);
  }
}

function updateSentenceCountDisplay(textInputElement, sentenceCountElement) {
  const sentenceCount = countSentences(textInputElement.value);
  sentenceCountElement.innerText = formatCount(sentenceCount);
}

let showAllLetters = false;

function updateLetterDensityDisplay(textInputElement, densityContainerElement) {
  const { letterCounts, totalLetters } = calculateLetterDensity(textInputElement.value);
  generateDensityHTML(letterCounts, totalLetters, showAllLetters, densityContainerElement);

  // Add event listener to toggle (needs to be inside for the updated element)
  const toggleElement = densityContainerElement.querySelector(".toggle-density");
  if (toggleElement) {
    toggleElement.addEventListener("click", () => {
      showAllLetters = !showAllLetters;
      updateLetterDensityDisplay(textInputElement, densityContainerElement);
    });
  }
}

// calling all the functios
function updateAll(
  charactersElement,
  wordCountElement,
  charCountElement,
  sentenceCountElement,
  excludeSpaces,
  charLimitEnabled,
  limitInputElement,
  alertBoxElement,
  densityContainerElement,
  timeElement
) {
  updateWordCountDisplay(charactersElement, wordCountElement, timeElement);
  updateCharacterCountDisplay(charactersElement, charCountElement, excludeSpaces, charLimitEnabled, limitInputElement, alertBoxElement);
  updateSentenceCountDisplay(charactersElement, sentenceCountElement);
  updateLetterDensityDisplay(charactersElement, densityContainerElement);
}

//Event Listeners and Initial Setup
document.addEventListener('DOMContentLoaded', () => {
  const bodyElement = document.body;
  const toggleElement = document.getElementById('toggle');
  const charactersElement = document.getElementById("texts");
  const wordCountElement = document.getElementById("wordCount");
  const charCountElement = document.getElementById("numOfChar");
  const sentenceCountElement = document.getElementById("sentCount");
  const excludeSpacesCheckboxElement = document.getElementById("excSpaces");
  const charLimitCheckboxElement = document.getElementById("count");
  const limitInputElement = document.getElementById("limit");
  const timeElement = document.getElementById('time');
  const alertBoxElement = document.querySelector(".alert");
  const densityContainerElement = document.querySelector(".letterDensity");

  let excludeSpaces = false;
  let charLimitEnabled = false;

  
  toggleElement.addEventListener('click', () => {
    toggleTheme(bodyElement, toggleElement, './assets/images/icon-sun.svg', './assets/images/icon-moon.svg');
  });

  charactersElement.addEventListener("input", () => updateAll(
    charactersElement,
    wordCountElement,
    charCountElement,
    sentenceCountElement,
    excludeSpaces,
    charLimitEnabled,
    limitInputElement,
    alertBoxElement,
    densityContainerElement,
    timeElement
  ));

  excludeSpacesCheckboxElement.addEventListener("change", function () {
    excludeSpaces = this.checked;
    updateAll(
      charactersElement,
      wordCountElement,
      charCountElement,
      sentenceCountElement,
      excludeSpaces,
      charLimitEnabled,
      limitInputElement,
      alertBoxElement,
      densityContainerElement,
      timeElement
    );
  });

  charLimitCheckboxElement.addEventListener("change", function () {
    charLimitEnabled = this.checked;
    limitInputElement.style.display = this.checked ? "inline" : "none";
    resetAlertDisplay(alertBoxElement);
    updateAll(
      charactersElement,
      wordCountElement,
      charCountElement,
      sentenceCountElement,
      excludeSpaces,
      charLimitEnabled,
      limitInputElement,
      alertBoxElement,
      densityContainerElement,
      timeElement
    );
  });

  limitInputElement.addEventListener("input", () => updateCharacterCountDisplay(
    charactersElement,
    charCountElement,
    excludeSpaces,
    charLimitEnabled,
    limitInputElement,
    alertBoxElement
  ));

  // Initial Load
  updateAll(
    charactersElement,
    wordCountElement,
    charCountElement,
    sentenceCountElement,
    excludeSpaces,
    charLimitEnabled,
    limitInputElement,
    alertBoxElement,
    densityContainerElement,
    timeElement
  );
});

//exporting for testing  

module.exports = {
  toggleTheme, 
  formatCount, 
  updateTimeDisplay, 
  updateAlertDisplay, 
  resetAlertDisplay, 
  countWords, 
  countCharacters, 
  countSentences, 
  calculateLetterDensity, 
  generateDensityHTML, 
  updateWordCountDisplay, 
  updateCharacterCountDisplay, 
  updateSentenceCountDisplay, 
  updateLetterDensityDisplay
}