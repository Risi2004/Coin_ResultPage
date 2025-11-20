const btn = document.getElementById('btn');
const input = document.getElementById('input');
const resultBox = document.getElementById('resultBox');
const moduleName = document.getElementById('moduleName');
const resultStatus = document.getElementById('resultStatus');
const loader = document.getElementById('loader');

btn.addEventListener('click', () => {
  const regNo = input.value.trim().toUpperCase();

  // Hide previous result and show loader
  resultBox.classList.add('hidden');
  loader.classList.remove('hidden');

  if (regNo === '') {
    alert('Please enter your Register Number');
    loader.classList.add('hidden');
    return;
  }

  // Simulate 10-second loading delay
  setTimeout(() => {
    loader.classList.add('hidden');
    resultBox.classList.remove('hidden');
    resultBox.classList.add('show');

    if (regNo === 'BS24302071') {
      moduleName.textContent = 'Statistics';
      resultStatus.innerHTML = '<span class="pass-text">Pass </span>';
    } else {
      moduleName.textContent = 'Not Found';
      resultStatus.innerHTML = '<span class="fail-text">Error</span>';
    }
  }, 10000); // 10 seconds
});

