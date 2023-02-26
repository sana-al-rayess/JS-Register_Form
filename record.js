class Course {
    constructor(name, code, credits) {
      this.name = name;
      this.code = code;
      this.credits = credits;
    }
  }
  
  function addInfo() {
    // Get the form data
    const name = document.getElementById("name").value;
    const code = document.getElementById("code").value;
    const credits = document.getElementById("credits").value;
  
    // Create a new Course object
    const course = new Course(name, code, credits);
  
    // Display the form data in the output div
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
   <div class="course-info">
      <p>Course Name: ${course.name}</p>
      <p>Course Code: ${course.code}</p>
      <p>Credits: ${course.credits}</p>
    </div>
  `;
  }
  