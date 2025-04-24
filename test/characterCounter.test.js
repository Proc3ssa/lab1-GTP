
require('text-encoding').TextEncoder;

const { JSDOM } = require('jsdom');
const {
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
  updateLetterDensityDisplay,
  updateAll,
} = require('../index'); 

// Mock DOM setup with the jsdom
let dom;
let document;
let body;
let toggleElement;
let charactersElement;
let wordCountElement;
let charCountElement;
let sentenceCountElement;
let excludeSpacesCheckboxElement;
let charLimitCheckboxElement;
let limitInputElement;
let alertBoxElement;
let densityContainerElement;
let timeElement;

beforeEach(() => {
  dom = new JSDOM(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Document</title>
      </head>
      <body>
        <button id="toggle"></button>
        <textarea id="texts"></textarea>
        <div id="wordCount"></div>
        <div id="numOfChar"></div>
        <div id="sentCount"></div>
        <input type="checkbox" id="excSpaces">
        <input type="checkbox" id="count">
        <input type="text" id="limit">
        <div class="alert"><span></span></div>
        <div class="letterDensity"></div>
        <div id="time"></div>
      </body>
    </html>
  `);
  document = dom.window.document;
  body = document.body;
  toggleElement = document.getElementById('toggle');
  charactersElement = document.getElementById('texts');
  wordCountElement = document.getElementById('wordCount');
  charCountElement = document.getElementById('numOfChar');
  sentenceCountElement = document.getElementById('sentCount');
  excludeSpacesCheckboxElement = document.getElementById('excSpaces');
  charLimitCheckboxElement = document.getElementById('count');
  limitInputElement = document.getElementById('limit');
  alertBoxElement = document.querySelector('.alert');
  densityContainerElement = document.querySelector('.letterDensity');
  timeElement = document.getElementById('time');
});

// testing my modularized functions
describe('toggleTheme', () => {
  test('should toggle the dark-theme class and update the image source', () => {
    
    expect(body.classList.contains('dark-theme')).toBe(false); 

    // mocking the theme switch to be dark
    const isDark1 = toggleTheme(body, toggleElement, './assets/images/icon-sun.svg', './assets/images/icon-moon.svg');
    expect(body.classList.contains('dark-theme')).toBe(true);
    expect(toggleElement.src).toBe('./assets/images/icon-sun.svg');
    expect(isDark1).toBe(true);

    // mocking the theme switch to be light
    const isDark2 = toggleTheme(body, toggleElement, './assets/images/icon-sun.svg', './assets/images/icon-moon.svg');
    expect(body.classList.contains('dark-theme')).toBe(false);
    expect(toggleElement.src).toBe('./assets/images/icon-moon.svg');
    expect(isDark2).toBe(false);
  });
});

describe('formatCount', () => {
  //testing the adding zero befor a single count value.
  test('should add a leading zero for numbers less than 10', () => {
    expect(formatCount(5)).toBe('05');
    expect(formatCount(9)).toBe('09');
  });
// testing that the zero is not added when the value is not a single number.
  test('should not add a leading zero for numbers 10 or greater', () => {
    expect(formatCount(10)).toBe(10);
    expect(formatCount(25)).toBe(25);
  });
});

describe('updateTimeDisplay', () => {
  test('should set time to "< 1min" for word count less than 200', () => {
    updateTimeDisplay(150, timeElement);
    expect(timeElement.innerHTML).toBe('&lt; 1min');
  });

  test('should set time to "> 1min" for word count 200 or greater', () => {
    updateTimeDisplay(250, timeElement);
    expect(timeElement.innerHTML).toBe('&gt; 1min');
  });
});

describe('updateAlertDisplay', () => {
  test('should display the alert box with the correct limit', () => {
    updateAlertDisplay(alertBoxElement, 100);
    expect(alertBoxElement.style.display).toBe('block');
    expect(alertBoxElement.querySelector('span').innerText).toBe(100);
  });
});

describe('resetAlertDisplay', () => {
  test('should hide the alert box', () => {
    alertBoxElement.style.display = 'block'; // Set it to block first
    resetAlertDisplay(alertBoxElement);
    expect(alertBoxElement.style.display).toBe('none');
  });
});

//Counting Function Tests
describe('countWords', () => {
  test('should return 0 for an empty string', () => {
    expect(countWords('')).toBe(0);
  });

  test('should return 1 for a single word', () => {
    expect(countWords('faisal')).toBe(1);
  });

  test('should return the correct count for multiple words', () => {
    expect(countWords('faisal halid')).toBe(2);
  });

  test('should handle leading and trailing spaces', () => {
    expect(countWords('  Jenef Greate  ')).toBe(2);
  });

  test('should handle multiple spaces between words', () => {
    expect(countWords('Bra   lash')).toBe(2);
  });
});

describe('countCharacters', () => {
  test('should count all characters including spaces', () => {
    expect(countCharacters('Amalitech training', false)).toBe(18);
  });

  test('should count characters excluding spaces', () => {
    expect(countCharacters('Amalitech training', true)).toBe(17);
  });

  test('should handle empty string', () => {
    expect(countCharacters('', false)).toBe(0);
    expect(countCharacters('', true)).toBe(0);
  });
});

describe('countSentences', () => {
  test('should count sentences correctly', () => {
    expect(countSentences('Sule. Malik!')).toBe(2);
    expect(countSentences('Faisal is very tall.')).toBe(1);
    expect(countSentences('Who?')).toBe(1);
    expect(countSentences('Yo! Charley?')).toBe(2);
  });

   test('should handle empty strings', () => {
    expect(countSentences("")).toBe(0);
  });

  test('should handle sentences with extra spaces', () => {
    expect(countSentences("  Imagine.   Dragons.  ")).toBe(2);
  });
});

describe('calculateLetterDensity', () => {
  test('calculateLetterDensity returns correct letter count and total', () => {
    const result = calculateLetterDensity("faisAl");
  
    expect(result.totalLetters).toBe(6); // total characters
    expect(result.letterCounts).toEqual({
      F: 1,
      A: 2,
      I: 1,
      S: 1,
      L: 1
    });
  });
  


  test('should handle empty strings', () => {
    const { letterCounts, totalLetters } = calculateLetterDensity("");
    expect(totalLetters).toBe(0);
    expect(letterCounts).toEqual({}); 
  });
});

describe('generateDensityHTML', () => {
  test('should generate the correct HTML for letter density display', () => {
    const letterCounts = { A: 2, B: 1, C: 0, D: 3 };
    const totalLetters = 6;
    generateDensityHTML(letterCounts, totalLetters, false, densityContainerElement);

    expect(densityContainerElement.innerHTML).toContain('<h3>Letter Density</h3>');
    expect(densityContainerElement.innerHTML).toContain('<div class="data disCenter">');
    expect(densityContainerElement.innerHTML).toContain('<p class="toggle-density"');
  });
});

//testing update functions
describe('updateWordCountDisplay', () => {
  test('should update word count and time display', () => {
    charactersElement.value = 'hello world';
    updateWordCountDisplay(charactersElement, wordCountElement, timeElement);
    expect(wordCountElement.innerText).toBe('02');
    expect(timeElement.innerHTML).toBe('&lt; 1min');

    charactersElement.value = 'a '.repeat(250); // testing for more than 200 characters
    updateWordCountDisplay(charactersElement, wordCountElement, timeElement);
    expect(timeElement.innerHTML).toBe('&gt; 1min');
  });
});



describe('updateSentenceCountDisplay', () => {
  test('should update sentence count display', () => {
    charactersElement.value = 'faisal. halid!';
    updateSentenceCountDisplay(charactersElement, sentenceCountElement);
    expect(sentenceCountElement.innerText).toBe('02');

    charactersElement.value = 'faisal\'s sentence.';
    updateSentenceCountDisplay(charactersElement, sentenceCountElement);
    expect(sentenceCountElement.innerText).toBe('01');
  });
});

describe('updateLetterDensityDisplay', () => {
  test('should update letter density display', () => {
    charactersElement.value = 'hello world';
    updateLetterDensityDisplay(charactersElement, densityContainerElement);
    expect(densityContainerElement.innerHTML).toContain('<h3>Letter Density</h3>');
    expect(densityContainerElement.innerHTML).toContain('<div class="data disCenter">');
  });
});

