const CustomAlert = require('./src/alerts/alert1');

function addNumbers(a, b) {
    return a + b;
  }
  
  // Function to reverse a string
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Function to check if a string is a palindrome
  function isPalindrome(str) {
    const reversedStr = reverseString(str);
    return str === reversedStr;
  }
  function showCustomAlert(message) {
    CustomAlert(message);
  }
  // Exporting the functions to be used as an npm package
  module.exports = {
    addNumbers,
    reverseString,
    isPalindrome,
    showCustomAlert,
  };
  