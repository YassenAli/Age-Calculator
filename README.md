# Age Calculator

Calculate your age in years, months, and days accurately with our fun and easy-to-use Age Calculator.

## Description

This Age Calculator allows users to input their date of birth and calculates their age in terms of years, months, and days. The application is simple, interactive, and visually appealing.

## Files in the Directory

- `index.html`: The main HTML file that contains the structure of the Age Calculator.
- `script.js`: The JavaScript file that contains the logic for calculating the age.
- `style.css`: The CSS file that styles the Age Calculator.
- `top-view-party-items-frame.jpg`: An image used in the project.

## Functions in `script.js`

### `calculateAge()`

This function calculates the age of the user based on the date of birth (DOB) entered in the input field. It performs the following steps:

1. Retrieves the date of birth from the input field with `id='dob'`.
2. Gets the current date.
3. Calculates the difference in years between the current date and the date of birth.
4. Calculates the difference in months.
5. Calculates the difference in days.
6. Adjusts the months and days calculations if the current day or month is less than the day or month of birth.
7. Displays the result in a text format within an element with `id='result'`.

### `ageCalculatorForm.addEventListener('submit', function(event) {...})`

This event listener listens for the form submission, prevents the default form submission behavior, and calls the `calculateAge()` function to perform the age calculation.

## Screenshot

![Age Calculator](website.png)

## Live Demo

Check out the live demo of the Age Calculator [here](#).

---

Feel free to explore the files and see how everything is implemented. Enjoy calculating your age!
