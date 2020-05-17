// Code below deconstruct hash variable from window.location
const {hash} = window.location;

// Codes below basically extract encrypted message from hash then decrypt with atob algorith
const messageIn = hash.replace('#',''); 
const decrypted = atob(messageIn);

if(decrypted) {
    // Codes below are to adjust css class to hidden and un-hidden
    document.querySelector('#message-input').classList.add('hidden');
    document.querySelector('#message-show').classList.remove('hidden');

    // Code below is to add decrypted message into the available h1 with innerHTML
    document.querySelector('h1').innerHTML = `${decrypted}`;
}

//Code below decides what to do when button on message input was clicked!
document.querySelector('form').addEventListener('submit', event => {
    // .preventDefault() is to avoid the form from doing default activities
    event.preventDefault();

    // Codes below are to setup necessary variables and initialize encryption with btoa algorithm
    const message = document.querySelector('#message');
    const encrypted = btoa(message.value);
    
    // Code below is to clear input for aesthetic purposes 
    document.querySelector('#message').value = "";

    // Code below adjust css class to hidden and un-hidden
    document.querySelector('#message-input').classList.add('hidden');
    document.querySelector('#message-send').classList.remove('hidden');

    // Codes below are to initialize connection to link-input post submission and encryption
    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
});