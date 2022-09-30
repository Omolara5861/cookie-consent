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

/*
Challenge:
1. Take control of the form element. 
2. Add an eventListener to the form to listen for a
   "submit" event.
3. When a user clicks "accept", prevent the default
   behaviour that triggers the refresh.
4. Log out "form submitted".
*/  
const consentForm = document.getElementById('consent-form');
const modalText = document.getElementById('modal-text');

consentForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log('Form Submitted');

    /*
Challenge:
1. Take control of the "modal-text" element. 
2. Make it so that when a user clicks on 
   the accept button, the HTML string below
   is inserted into the modal-text div.

<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>
*/ 

modalText.innerHTML = `
<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>
`;

})


