document.addEventListener('input', function (e) {
  if (e.target.classList.contains('grade-input')) {
    const val = e.target.value.trim();
    const errorDiv = e.target.parentElement.querySelector('.error');
    const isValid = /^[A-Fa-f0-5]$/.test(val);
    errorDiv.textContent = isValid || val === '' ? '' : 'Grade must be A-F or 0-5';
  }

  if (e.target.classList.contains('unit-input')) {
    const val = parseInt(e.target.value, 10);
    const errorDiv = e.target.parentElement.querySelector('.error');
    const isValid = !isNaN(val) && val >= 1;
    errorDiv.textContent = isValid || e.target.value === '' ? '' : 'Unit must be a positive number';
  }
});
