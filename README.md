Interactive rating component solution

This is a solution to the "Interactive rating component challenge" on Frontend Mentor -https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI

## Table of contents

- [The challenge]
- [Screenshot](#screenshot)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [Author](#author)


### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: https://github.com/DanielDeaconescu/interactive-rating-component
- Live Site URL: https://danieldeaconescu.github.io/interactive-rating-component/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JavaScript

### What I learned

This project was a great way to re-inforce the basics of DOM manipulation using JavaScript (mainly adding and removing CSS classes from certain HTML elements when "click" events happen). 
It was also a good chance to practice basic designing skills (CSS flexbox mainly) and use basic media queries.

The most interesing part of the project was making such that you can only select one rating element at once and when you select another, the previous one is automatically de-selected (a behavior similar to that of multiple inputs of type radio with the same name). 

Here's how I implemented this with JavaScript: 

```js
for (let i = 0; i < allRatings.length; i++) {
  allRatings[i].addEventListener("click", function (e) {
    // the button currently selected
    const currentlySelected = document.querySelector(".selected-rating");
    // removing the "selected-rating" from the currentlySelected element
    if (currentlySelected) {
      currentlySelected.classList.remove("selected-rating");
    }

    // adding the "selected-rating" class to the clicked element
    e.currentTarget.classList.add("selected-rating");

    // get the text content of the selected div
    const selectedValue = allInnerRatings[i].textContent;
    thankYouStatement.innerHTML = `You selected ${selectedValue} out of 5`;
  });
}
```

### Continued development

It would be nice to have a "Back" button (outside of the component maybe) that lets you go back and submit another rating. 

### Useful resources

- [Google Fonts](https://fonts.google.com/)

## Author

- Frontend Mentor - [@DanielDeaconescu(https://www.frontendmentor.io/profile/DanielDeaconescu)