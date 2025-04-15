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

![Image](./assets/imagespreview.jpg)

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

**Your Name**  
GitHub: [@Proc3ssa](https://github.com/Proc3ssa)
