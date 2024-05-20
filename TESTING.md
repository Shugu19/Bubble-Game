# Testing

> [!NOTE]  
> Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Directory | File       | Screenshot                                                                   | Notes |
| --------- | ---------- | ---------------------------------------------------------------------------- | ----- |
|           | index.html | ![screenshot](documentation/validation/Screenshot%202024-05-17%20193901.png) |       |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| Directory | File      | Screenshot                                                                   | Notes |
| --------- | --------- | ---------------------------------------------------------------------------- | ----- |
| assets    | style.css | ![screenshot](documentation/validation/Screenshot%202024-05-17%20192855.png) |       |

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| Directory | File      | Screenshot                                                                   | Notes |
| --------- | --------- | ---------------------------------------------------------------------------- | ----- |
| assets    | script.js | ![screenshot](documentation/validation/Screenshot%202024-05-17%20193924.png) |       |

## Browser Compatibility

Recommended browsers to consider:

- [Chrome](https://www.google.com/chrome)
- [Firefox (Developer Edition)](https://www.mozilla.org/firefox/developer)
- [Opera](https://www.opera.com/download)

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Home  | Gaming Area | Notes |
| ------- | ------| ------------| ----- | 
| Chrome  | ![screenshot](documentation/browsers/browser-chrome-home.png)  | ![screenshot](documentation/browsers/browser-chrome-GamingArea.png)  | Works as expected |
| Firefox | ![screenshot](documentation/browsers/browser-firefox-home.png) | ![screenshot](documentation/browsers/browser-firefox-GamingArea.png) |Works as expected |
| Opera   | ![screenshot](documentation/browsers/browser-opera-home.png) |![screenshot](documentation/browsers/browser-opera-GamingArea.png)   | Works as expected |

## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device |Home      |GamingArea      | Notes |
| -------| -------- | ----------------- |-------|
| Mobile (DevTools) | ![screenshot](documentation/responsiveness/mobile-home.png)  |![screenshot](documentation/responsiveness/mobile-gamingArea.png) | Works as expected |
| Tablet (DevTools) | ![screenshot](documentation/responsiveness/tablet-home.png) | ![screenshot](documentation/responsiveness/tablet-gamingArea.png) | Works as expected |
| Desktop           | ![screenshot](documentation/responsiveness/desktop-home.png) | ![screenshot](documentation/responsiveness/desktop-gamingArea.png) | Works as expected |
| iPhone 14 pro max | ![screenshot](documentation/responsiveness/mobile-home.png) | ![screenshot](documentation/responsiveness/mobile-gamingArea.png) | Works as expected |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Home | Notes |
| -----| -----| ----  |
| Mobile| ![screenshot](documentation/lighthouse/lighthouse-mobile.png) |  Some minor warnings |
| Desktop |![screenshot](documentation/lighthouse/lighthouse-desktop.png) | Some minor warnings |

## Bugs

- JS Uncaught ReferenceError: `hit` is undefined/not defined

  ![screenshot](documentation/bugs/bugs.png)

  - To fix this, I JS Bubble Game: Non-Matchable Bubble Bug

    To fix this, I ensured that the hit number is always included in the generated bubbles. The steps taken to fix this were:

    Modified the makeNewBubble function to create an array of bubble numbers.
    Checked if the hit number is present in the array.
    If the hit number was not present, replaced a random index in the array with the hit number.
    Constructed the bubble elements from the modified array to ensure the hit number was always included.

- JS `'let'` or `'const'` or `'template literal syntax'` or `'arrow function syntax (=>)'` is available in ES6 (use `'esversion: 11'`) or Mozilla JS extensions (use moz).

  - To fix this, I added /* jshint esversion: 6 */ at the top of the JavaScript file to specify that the code is using ES6 features.

If you legitimately cannot find any unfixed bugs or warnings, then use the following sentence:

> [!NOTE]  
> There are no remaining bugs that I am aware of.
