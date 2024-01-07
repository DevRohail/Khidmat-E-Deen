
// Add a click event listener to the button
contact_button.addEventListener('click', () => {
    // Open Gmail's compose window in a new tab with the "to" field filled in
    window.open('./contact.html', '_blank');
    console.log("mail sent");
});

