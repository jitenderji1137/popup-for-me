// customAlert.js

function CustomAlert(message) {
    // Create the custom alert container element
    const customAlertContainer = document.createElement('div');
    customAlertContainer.classList.add('custom-alert');
  
    // Create the custom alert content element
    const customAlertContent = document.createElement('div');
    customAlertContent.classList.add('custom-alert-content');
  
    // Create the custom alert message element
    const customAlertMessage = document.createElement('div');
    customAlertMessage.classList.add('custom-alert-message');
    customAlertMessage.textContent = message || 'This is a custom alert!';
  
    // Create the custom alert close button element
    const customAlertCloseBtn = document.createElement('button');
    customAlertCloseBtn.classList.add('custom-alert-btn');
    customAlertCloseBtn.textContent = 'OK';
  
    // Append the elements to build the custom alert
    customAlertContent.appendChild(customAlertMessage);
    customAlertContent.appendChild(customAlertCloseBtn);
    customAlertContainer.appendChild(customAlertContent);
  
    // Show the custom alert
    document.body.appendChild(customAlertContainer);
  
    // Close the custom alert when the button is clicked
    customAlertCloseBtn.addEventListener('click', () => {
      document.body.removeChild(customAlertContainer);
    });
  }
  
  // Export the function to make it available for use in other files
  module.exports = CustomAlert;
  