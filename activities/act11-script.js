document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('forShowBtn').addEventListener('click', showForLoop);
  document.getElementById('forClearBtn').addEventListener('click', clearForLoop);
  document.getElementById('whileShowBtn').addEventListener('click', showWhileLoop);
  document.getElementById('whileClearBtn').addEventListener('click', clearWhileLoop);
  document.getElementById('doShowBtn').addEventListener('click', showDoWhileLoop);
  document.getElementById('doClearBtn').addEventListener('click', clearDoWhileLoop);
});
 
function showForLoop() {
  const number = Number(document.getElementById('forNumberInput').value);
  const text = document.getElementById('forTextInput').value;
  const output = document.getElementById('forOutput');
 
  if (!number || number < 1) {
    output.textContent = 'Enter a positive number to run the for loop.';
    return;
  }
 
  let result = 'For Loop Output:\n';
  for (let i = 1; i <= number; i++) {
    result += `Iteration ${i}: ${text}${i < number ? '\n' : ''}`;
  }
  output.textContent = result;
}
 
function clearForLoop() {
  document.getElementById('forNumberInput').value = '';
  document.getElementById('forTextInput').value = '';
  document.getElementById('forOutput').textContent = '';
}
 
function showWhileLoop() {
  const number = Number(document.getElementById('whileNumberInput').value);
  const text = document.getElementById('whileTextInput').value;
  const output = document.getElementById('whileOutput');
 
  if (!number || number < 1) {
    output.textContent = 'Enter a positive number to run the while loop.';
    return;
  }
 
  let result = 'While Loop Output:\n';
  let i = 1;
  while (i <= number) {
    result += `Iteration ${i}: ${text}${i < number ? '\n' : ''}`;
    i++;
  }
  output.textContent = result;
}
 
function clearWhileLoop() {
  document.getElementById('whileNumberInput').value = '';
  document.getElementById('whileTextInput').value = '';
  document.getElementById('whileOutput').textContent = '';
}
 
function showDoWhileLoop() {
  const number = Number(document.getElementById('doNumberInput').value);
  const text = document.getElementById('doTextInput').value;
  const output = document.getElementById('doOutput');
 
  if (!number || number < 1) {
    output.textContent = 'Enter a positive number to run the do-while loop.';
    return;
  }
 
  let result = 'Do-while Loop Output:\n';
  let i = 1;
  do {
    result += `Iteration ${i}: ${text}${i < number ? '\n' : ''}`;
    i++;
  } while (i <= number);
  output.textContent = result;
}
 
function clearDoWhileLoop() {
  document.getElementById('doNumberInput').value = '';
  document.getElementById('doTextInput').value = '';
  document.getElementById('doOutput').textContent = '';
}
 
 