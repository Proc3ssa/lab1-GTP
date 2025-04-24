# ✏️ Character Counter Web App

A responsive, real-time text analyzer that lets users track character count, word count, sentence count, reading time, and letter density — all within a beautifully themed UI.

---

## 🌟 Features

- ✅ Real-time **Character Count** (with or without spaces)
- ✅ **Word Count** and **Sentence Count**
- ✅ **Reading Time Estimation**
- ✅ **Character Limit Warning**
  - Red outline and shadow when exceeded
  - Alert message
- ✅ **Theme Toggle** (Light/Dark)
- ✅ **Letter Density Visualization**
  - Shows frequency of top letters
  - Expand/Collapse toggle
- ✅ Fully **Responsive Design**

---

## 📸 Screenshots

![Image](./assets/images/preview.jpg)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Proc3ssa/lab1-GTP.git
```

### 2. Open the App

No installation or build tools required.

```bash
cd lab1-GTP
```

Now, open `index.html` in your browser by double-clicking it or using:

```bash
open index.html
```

---

## 🧠 How It Works

- Characters are counted in real-time as you type.
- Words are counted by splitting on whitespace.
- Sentences are counted using period (`.`) delimiters.
- Reading time is based on an average reading speed of **200 words per minute**.
- Character Limit alert:
  - If enabled and exceeded, a red outline appears around the input field.
  - A warning alert is displayed.
- You can toggle:
  - **Exclude Spaces**
  - **Enable Limit**
  - **Light/Dark Theme**
- Letter Density displays how often letters appear and allows expanding to show more or less.

---

## Test Suite Documentation

This document describes the test suite for a set of JavaScript functions. The tests are written using Jest and utilize jsdom for DOM manipulation.

### Overview

The test suite covers the following functions:

* `toggleTheme`: Toggles between dark and light themes.
* `formatCount`: Formats a number by adding a leading zero if it's less than 10.
* `updateTimeDisplay`: Updates the display of estimated reading time based on word count.
* `updateAlertDisplay`: Displays an alert box with a character limit message.
* `resetAlertDisplay`: Hides the alert box.
* `countWords`: Counts the number of words in a given text.
* `countCharacters`: Counts the number of characters in a given text, with or without spaces.
* `countSentences`: Counts the number of sentences in a given text.
* `calculateLetterDensity`: Calculates the frequency of each letter in a given text.
* `generateDensityHTML`: Generates HTML for displaying letter density.
* `updateWordCountDisplay`: Updates the word count display in the DOM.
* `updateCharacterCountDisplay`: Updates the character count display in the DOM and handles character limits.
* `updateSentenceCountDisplay`: Updates the sentence count display in the DOM.
* `updateLetterDensityDisplay`: Updates the letter density display in the DOM.
* `updateAll`: Updates all displays.

### Test Setup

The `beforeEach` block sets up a mock DOM environment using jsdom before each test. It defines the following elements:

* `toggleElement`: A button for toggling the theme.
* `charactersElement`: A textarea for inputting text.
* `wordCountElement`: A div for displaying the word count.
* `charCountElement`: A div for displaying the character count.
* `sentenceCountElement`: A div for displaying the sentence count.
* `excludeSpacesCheckboxElement`: A checkbox for excluding spaces in character count.
* `charLimitCheckboxElement`: A checkbox for enabling character limits.
* `limitInputElement`: An input field for specifying the character limit.
* `alertBoxElement`: A div for displaying alerts.
* `densityContainerElement`: A div for displaying letter density.
* `timeElement`: A div for displaying time.

### Test Suites

####   `toggleTheme`

* **Description**: Tests the `toggleTheme` function.
* **Test Cases**:
    * `should toggle the dark-theme class and update the image source`: Verifies that the function toggles the 'dark-theme' class on the body element and updates the image source of the toggle button.

####   `formatCount`

* **Description**: Tests the `formatCount` function.
* **Test Cases**:
    * `should add a leading zero for numbers less than 10`: Verifies that the function adds a leading zero to numbers less than 10.
    * `should not add a leading zero for numbers 10 or greater`: Verifies that the function does not add a leading zero to numbers greater than or equal to 10.

####   `updateTimeDisplay`

* **Description**: Tests the `updateTimeDisplay` function.
* **Test Cases**:
    * `should set time to "< 1min" for word count less than 200`: Verifies that the function sets the time display to '< 1min' for word counts less than 200.
    * `should set time to "> 1min" for word count 200 or greater`: Verifies that the function sets the time display to '> 1min' for word counts greater than or equal to 200.

####   `updateAlertDisplay`

* **Description**: Tests the `updateAlertDisplay` function.
* **Test Cases**:
    * `should display the alert box with the correct limit`: Verifies that the function displays the alert box with the correct limit message.

####   `resetAlertDisplay`

* **Description**: Tests the `resetAlertDisplay` function.
* **Test Cases**:
    * `should hide the alert box`: Verifies that the function hides the alert box.

####   `countWords`

* **Description**: Tests the `countWords` function.
* **Test Cases**:
    * `should return 0 for an empty string`: Verifies that the function returns 0 for an empty string.
    * `should return 1 for a single word`: Verifies that the function returns 1 for a single word.
    * `should return the correct count for multiple words`: Verifies that the function returns the correct count for multiple words.
    * `should handle leading and trailing spaces`: Verifies that the function handles leading and trailing spaces correctly.
    * `should handle multiple spaces between words`: Verifies that the function handles multiple spaces between words.

####   `countCharacters`

* **Description**: Tests the `countCharacters` function.
* **Test Cases**:
    * `should count all characters including spaces`: Verifies that the function counts all characters, including spaces.
    * `should count characters excluding spaces`: Verifies that the function counts characters excluding spaces.
    * `should handle empty string`: Verifies that the function handles empty strings correctly.

####   `countSentences`

* **Description**: Tests the `countSentences` function.
* **Test Cases**:
    * `should count sentences correctly`: Verifies that the function counts sentences correctly.
    * `should handle empty strings`: Verifies that the function handles empty strings.
    * `should handle sentences with extra spaces`: Verifies that the function handles sentences with extra spaces.

####   `calculateLetterDensity`

* **Description**: Tests the `calculateLetterDensity` function.
* **Test Cases**:
    * `should calculate letter density correctly`: Verifies that the function calculates the letter density correctly for a given string.
    * `should handle empty strings`: Verifies that the function handles empty strings.

####   `generateDensityHTML`

* **Description**: Tests the `generateDensityHTML` function.
* **Test Cases**:
    * `should generate the correct HTML for letter density display`: Verifies that the function generates the correct HTML for displaying letter density.

####   `updateWordCountDisplay`

* **Description**: Tests the `updateWordCountDisplay` function.
* **Test Cases**:
    * `should update word count and time display`: Verifies that the function updates the word count and time display correctly.

####   `updateCharacterCountDisplay`

* **Description**: Tests the `updateCharacterCountDisplay` function.
* **Test Cases**:
    * `should update character count display`: Verifies that the function updates the character count display.
    * `should handle character limit`: Verifies that the function handles character limits correctly.

####   `updateSentenceCountDisplay`

* **Description**: Tests the `updateSentenceCountDisplay` function.
* **Test Cases**:
    * `should update sentence count display`: Verifies that the function updates the sentence count display correctly.

####   `updateLetterDensityDisplay`

* **Description**: Tests the `updateLetterDensityDisplay` function.
* **Test Cases**:
    * `should update letter density display`: Verifies that the function updates the letter density display correctly.


## 📱 Responsive Design

### ✅ Mobile (Up to 480px)

- Stacked layout
- Full-width inputs and stats
- Touch-optimized UI

### ✅ Tablet (481px to 768px)

- Two-column layout where possible
- Balanced text and controls

### ✅ Desktop (769px and up)

- Three-column layout
- Space for full density chart and stats

---

## 🗂️ File Structure

```
character-counter-app/
│
├── index.html          # Main HTML file
├── index.js            # JavaScript logic
├── style.css           # Styles + media queries
└── assets/
    └── images/         # Icons and visuals (moon/sun toggle, info, etc.)
    └── fonts/          # Fonts
```

---

## 🧪 Technologies Used

- HTML5
- CSS3 with Media Queries
- JavaScript (Vanilla JS)

---

## 🙌 Author

GitHub: [@Proc3ssa](https://github.com/Proc3ssa)
