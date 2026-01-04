let display = document.getElementById('output');
display.value = '0';

function press(value) {
  if (display.value === '0' && !isNaN(value)) {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearScreen() {
  display.value = '0';
}
function delete1() {
  display.value = display.value.slice(0, -1);

  if (display.value === "") {
    display.value = "0";
  }
}

function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch {
    alert('Invalid Input');
    display.value = '0';
  }
}
