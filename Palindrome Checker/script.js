function checkPalindrome() {
  const input = document.getElementById('text-input').value;
  if (!input) {
    alert("Please input a value")
  }

  const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/gi, '');

  let check = '';
  for (let i=cleanInput.length-1;i>=0;i--) {
    check += cleanInput[i]
  }
  
  const result = document.getElementById('result');

  if (check===cleanInput) {
    result.innerHTML = `${input} is a palindrome`; 
  } else {
    result.innerHTML = `${input} is not a palindrome`;
  }
}
