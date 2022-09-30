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

modalCloseBtn.addEventListener('click', () => {
    {
        modal.style.display = 'none';
        console.log('Modal Closed!');;
    }
})

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
1. Create a const to store the user's name and
   use a FormData method to extract the 
   submitted name from the FormData object.
2. Insert the user's name into the HTML string
   that contains the final message we show our
   users.
*/

    const consentFormData = new FormData(consentForm);
    const userName = consentFormData.get('name');


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
    <img src="images/loading.svg" alt="loading gif" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>
`;
    /*   
    Challenge: 
    1. Use a setTimeout to make the phrase "Uploading
       your data to the dark web" change to "Making the 
       sale..." after 1.5 seconds.
    ⚠️ Do not change the loading svg!
    */

    setTimeout(() => document.getElementById('uploadText').innerText = 'Making the sale...', 1500);

    /*   
Challenge: 
1. Make it so that 1.5 seconds after seeing the 
   "Making the sale..." message, the modal is 
   cleared of its content and the following 
   string of HTML is displayed instead.
   
   `<h2>Thanks you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    ` 
*/
    setTimeout(() => {
        document.getElementById('modal-inner').innerHTML =
            `<h2>Thanks <span class="modal-display-name">${userName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif" alt="A laughing pirate ">
        </div>
        `
        /*   
Challenge: 
1. Make the button that closes the modal disabled.
2. Make that button become usable when the final 
   modal message has been displayed to the user.
*/
    document.getElementById('modal-close-btn').disabled = false;
    }, 3000)
});