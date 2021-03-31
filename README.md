# [Color Picker](https://color-picker-hooks-stevensmacbook.netlify.app/)

<img src="src/assets/ColorPicker.gif">

## Assignment Overview:

For this assignment, I created an HSL(a) color picker with React, using React Hooks.

## Objectives

- Respond to user events in React
- Use hooks in react to drive changes to a user interface
- Use props to drive inline styles to dynamically update the appearance of DOM elements
- Understand RGB vs HSL color models
- Use controlled form inputs in React

## Requirements

Use `range` type `input` elements to drive a color display. You'll end up with something like this:

![](https://raw.githubusercontent.com/suncoast-devs/handbook/master/assignments/assets/color-picker.gif)

**HINT**: You will want to combine techniques of string interpolation and using [inline styles in React](https://reactjs.org/docs/dom-elements.html#style), for example:

```
// HINT: Instead of hard coded values here, use your
// this.state attributes to dynamically create this color
const newBackgroundColor = `hsl(50,8%,20%)`
const newStyle = { backgroundColor: newBackgroundColor  }
```

Then you can dynamically set the `backgroundColor` of an element in your component using [inline styles](https://reactjs.org/docs/dom-elements.html#style)

```jsx
<div style={newStyle}></div>
```

## Resources

- [Hooks](https://reactjs.org/docs/hooks-intro.html)
- [HSL Color Picker](http://hslpicker.com/)
- [Inline styles in React](https://reactjs.org/docs/dom-elements.html#style)
- [`hsl()` and `hsla()`][1] on MDN

[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla()

### Explorer Mode

- Represent the three values, `hue`, `saturation`, and `lightness` with hooks.
- Add three sliders that update their respective values (`hue`, `saturation`, and `lightness`).
- Display the color on the screen, in both text (i.e. `hsl(50, 8%, 20%)`) and the actual color as a background color on an element.
- Initialize the hooks to a random color when the page is loaded.
- Add a button that picks a new random color.

### Adventure Mode

- Create a `ColorSlider` component that represents the slider control. What props will you need to send? What function will you need to send to manipulate the correct state?
- Add a fourth slider for `alpha`, be sure to put some kind of pattern behind your color so the user can see the transparency effect.
- Add a section that displays a CSS class that applies the current background color to an element, just like [https://cssgradient.io/](https://cssgradient.io/)
- Only display the output color text in `hsla()` if the alpha value is less than `1`.
