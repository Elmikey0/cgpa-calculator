function addInput(button) {
    const semesterSection = button.closest('.row');
    const container = semesterSection.querySelector('.input-container');

    const inputGroup = document.createElement('div');
    inputGroup.className = 'input-group';
    inputGroup.innerHTML = `
        <div class="col-md-3 pad_all grade">
          <div>
            <input
              autocomplete="off"
              autofocus
              class="form-control"
              name="grade[]"
              placeholder="Grade"
              type="text"
              pattern="[A-Fa-f0-5]"
              title="Provide grade A-F or 0-5"
            />
            <div id="error-message" class="error"></div>
          </div>
        </div>
        <div class="col-md-3 pad_all">
          <div>
            <input
              class="form-control"
              name="unit[]"
              placeholder="Unit"
              type="number"
              min="1"
              title="Provide a positive number"
            />
            <div class="error"></div>
          </div>
        </div>
    `;

    container.appendChild(inputGroup);
  }
function calculate() {
  const gradeInputs = document.getElementsByName("grade[]");
  const unitInputs = document.getElementsByName("unit[]");

  const gradeMap = {
    'A': 5, 'B': 4, 'C': 3, 'D': 2, 'E': 1, 'F': 0,
    'a': 5, 'b': 4, 'c': 3, 'd': 2, 'e': 1, 'f': 0,
    '5': 5, '4': 4, '3': 3, '2': 2, '1': 1, '0': 0
  };

  let totalPoints = 0;
  let totalUnits = 0;
  let hasValidEntry = false;

  for (let i = 0; i < gradeInputs.length; i++) {
    const gradeValue = gradeInputs[i].value.trim();
    const unitValueRaw = unitInputs[i].value.trim();

    if (gradeValue === "" && unitValueRaw === "") continue;

    if (gradeValue === "" || unitValueRaw === "") {
      alert(`Both grade and unit must be filled at entry #${i + 1}`);
      return;
    }

    const unitValue = parseFloat(unitValueRaw);

    if (!gradeMap.hasOwnProperty(gradeValue) || isNaN(unitValue) || unitValue <= 0) {
      alert(`Invalid grade or unit at entry #${i + 1}`);
      return;
    }

    const gradePoint = gradeMap[gradeValue];
    totalPoints += gradePoint * unitValue;
    totalUnits += unitValue;
    hasValidEntry = true;
  }

  if (!hasValidEntry) {
    alert("Please enter at least one complete grade and unit pair.");
    return;
  }

  const cgpa = totalPoints / totalUnits;
  document.getElementById("result").innerText = `${cgpa.toFixed(2)}`;

  const resultContainer = document.getElementById("result-container");
  resultContainer.style.backgroundColor = getColorFromCGPA(cgpa);

  document.getElementById("go-back").style.display = "block";
  document.getElementById("main-body-container").style.display = "none";
  resultContainer.style.display = "flex";
  
  document.getElementById("go-back").style.display = "block";
  document.getElementById("main-body-container").style.display = "none";
  resultContainer.style.display = "flex";
}

function goBack() {
  document.getElementById("go-back").style.display = "none";
  document.getElementById("result-container").style.display = "none";
  document.getElementById("main-body-container").style.display = "block";
  document.getElementById("result-container").style.backgroundColor = "";
}

function getColorFromCGPA(cgpa) {
  const grade = Math.max(0, Math.min(5, cgpa));

  const red = Math.round(230 * (1 - grade / 5));
  const green = Math.round(128 * (grade / 5));
  
  return `rgb(${red}, ${green}, 0)`;
}
