// Counter Variable
let hour = 00;
let minute = 00; 
let second = 00;
let millisecond = 00;
let interval;

// Button Field
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

// Time Field
const hourField = document.getElementById('hour');   
const minuteField = document.getElementById('minute');
const secondField = document.getElementById('second');
const millisecondField = document.getElementById('millisecond');

// Stop Timer
function stopTimer() {
  clearInterval(interval); // Clear interval to prevent multiple intervals from running at once
}

// Start Timer
function startTimer() {
  millisecond++; 
  millisecondField.innerHTML = millisecond; 
  if (millisecond >= 100) {
    // If millisecond is greater than or equal to 100
    second++; 
    secondField.innerHTML = second; 
    millisecond = 0; 
  } else if (second >= 60) {
    // If second is greater than or equal to 60
    minute++; 
    minuteField.innerHTML = minute; 
    second = 0; 
  } else if (minute >= 60) {
    // If minute is greater than or equal to 60
    hour++; 
    hourField.innerHTML = hour; 
    minute = 0; 
  }
  stopTimer();
  interval = setInterval(startTimer, 10); // startTimer function is called every 10 milliseconds
}

// Reset Timer
function resetTimer() {
    hour = '00';
    minute = '00';
    second = '00';
    millisecond = '00';
    hourField.innerHTML = hour;
    minuteField.innerHTML = minute;
    secondField.innerHTML = second;
    millisecondField.innerHTML = millisecond;
    stopTimer();
}

// Start Button
startButton.addEventListener('click', startTimer);

// Stop Button
stopButton.addEventListener('click', stopTimer);

// Reset Button
resetButton.addEventListener('click', resetTimer);
