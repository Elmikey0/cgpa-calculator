function addSemester() {
    const container = document.getElementsByClassName('align-semester')[0];

    const currentSemesters = container.getElementsByClassName('semester-group').length;
    const semesterNumber = currentSemesters + 1;

    const inputGroup = document.createElement('div');
    inputGroup.className = 'semester-group';
    inputGroup.innerHTML = `
        <h2>Semester ${semesterNumber}</h2>
        <div class="row">
          <div class="input-container">
            <div class="input-group">
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
                    required
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
                    required
                  />
                  <div class="error"></div>
                </div>
              </div>
            </div>
          </div>
        <div class="col-md-3 add pad_all">
            <div class="form-group">
            <button id="add-input" type="button" onclick="addInput(this)" class="btn form-control btn-success">
                <i class="fas fa-plus"></i> Add
            </button>
            </div>
        </div>
        </div>
    `;

    container.appendChild(inputGroup);
  }