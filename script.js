/*
Challenge:
1. Take control of the 'modal' div with JavaScript.
2. Swap out our console.log for a line of code
   which will change the CSS 'display' property
   of our modal to 'inline'.
*/
const modal = document.getElementById('modal');

setTimeout(() => {
    modal.style.display = 'inline';
    console.log('Modal Opened!')
}, 1500);

/*
Challenge:
1. Take control of the close button.
2. Use an event listener to set the display 
   property of the modal to 'none' when the
   close button is clicked.
*/
const modalCloseBtn = document.getElementById('modal-close-btn');

modalCloseBtn.addEventListener('click', () => {{
    modal.style.display = 'none';
    console.log('Modal Closed!');
;}})
