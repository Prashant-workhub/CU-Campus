import { students, teachers, fee, contact } from "../data/data.js";

let matchingTeacher;
let teacherEmail = localStorage.getItem("email");

teachers.forEach((item) => {
  if (teacherEmail == item.email) matchingTeacher = item;
});

let btnhtml = document.querySelector(".content");
let headHtml = document.querySelector(".header");
let btnContent = "";
let headContent = "";
let ttContent = "";

headContent += `
  <div class="pfp">
    <img src="https://www.culko.in/assets-2025/img/head-foot/culko-logo-new.png" style="margin-left: 0px;" height="75rem" />
  </div>
  <div class="pfp">
    <img src="/data/images/teachpfp.png" height="75rem" />
  </div>
  <div class="name">
    Teacher Name:
    <p>${matchingTeacher.name}</p>
  </div>
  <div class="UID">
    ID:
    <p>${matchingTeacher.id}</p>
  </div>
  <div class="logout">
    <button onclick="logout()">Sign Out</button>
  </div>
  `;

headHtml.innerHTML = headContent;

btnContent += `
  <div id="main" class="section active-section">
    <div class="main-cards">
      <div class="card">
        <h3><b>Course</b></h3>
        <br /><br />
        <p style="font-size: larger;"><b>${matchingTeacher.course}</b></p>
      </div>

      <div class="card">
        <h3><b>Scheduled Classes</b></h3>
        <br /><br />
        <p style="font-size: larger;"><b>${matchingTeacher.schedClasses}</b></p>
      </div>

      <div class="card">
        <h3 style="font-size: larger;"><b>Delivered Classes</b></h3>
        <br /><br />
        <p style="font-size: larger;"><b>${matchingTeacher.delClasses}</b></p>
      </div>

      <div class="card">
        <h3><b>Notice</b></h3>
        <br /><br />
        <p style="font-size: larger;"><b>Mid term Exams on 17 Feb</b></p>
      </div>
    </div>
  </div>

  <div id="attendance" class="section">
    <div class="date">
      <h3>${dayjs().format("DD/MM/YYYY")}</h3>
    </div>
          <h1>Student Attendance Management</h1>
          <table class="attendance-table">
            <thead>
              <tr>
                <th>UID :</th>
                <th>Name</th>
                <th>Section</th>
                <th>Mark Attendance</th>
              </tr>
            </thead>
            <tbody>
              ${bodystudentTable()}
            </tbody>
          </table>

          <div style="margin : 2rem 1rem;">
            <button class="submit" id="submitButton" >Submit </button>
            
          </div>
        </div>

        <div id="Scheduled-classes" class="section">
          <div class="days">
            <button class="days-btn tt-btn active" data-target="monday">
              Monday
            </button>
            <button class="days-btn tt-btn" data-target="tuesday">
              Tuesday
            </button>
            <button class="days-btn tt-btn" data-target="wednesday">
              Wednesday
            </button>
            <button class="days-btn tt-btn" data-target="thursday">
              Thursday
            </button>
            <button class="days-btn tt-btn" data-target="friday">Friday</button>
            <button class="days-btn tt-btn" data-target="saturday">
              Saturday
            </button>
            <button class="days-btn tt-btn" data-target="Sunday">Sunday</button>
          </div>
          <div class="tt-content"></div>
        </div>

  <div id="assignment" class="section">
    <h1>Assignment Tracking</h1>
    <p style="margin-top: 2rem; color: #666;">Assignment tracking feature coming soon...</p>
  </div>

  <div id="contact" class="section">
    <h1>Contact Information</h1>
    <div class="contact-cards">
      <div class="contact-card">
        <h3>Personal Profile</h3>
        <p><strong>Name:</strong> ${matchingTeacher.name}</p>
        <p><strong>ID:</strong> ${matchingTeacher.id}</p>
        <p><strong>Email:</strong> ${matchingTeacher.email}</p>
        <p><strong>Course:</strong> ${matchingTeacher.course}</p>
      </div>

      <div class="contact-card">
        <h3>${contact.academicOffice.title}</h3>
        <p>Email: ${contact.academicOffice.email}</p>
        <p>Phone: ${contact.academicOffice.phone}</p>
      </div>

      <div class="contact-card">
        <h3>${contact.departmentCoordinator.title}</h3>
        <p>Name: ${contact.departmentCoordinator.name}</p>
        <p>Email: ${contact.departmentCoordinator.email}</p>
      </div>

      <div class="contact-card">
        <h3>${contact.studentHelpdesk.title}</h3>
        <p>Email: ${contact.studentHelpdesk.email}</p>
        <p>Phone: ${contact.studentHelpdesk.phone}</p>
      </div>
    </div>
  </div>
  `;

btnhtml.innerHTML += btnContent;

// Now query and populate the timetable content after it's added to DOM
let ttHtml = document.querySelector(".tt-content");

ttContent += ` <div class="days-section active-days-section" id="monday">
              <h1>Monday Schedule</h1>
              <p>No classes scheduled</p>
            </div>
            <div class="days-section" id="tuesday">
              <h1>Tuesday Schedule</h1>
              <p>No classes scheduled</p>
            </div>
            <div class="days-section" id="wednesday">
              <h1>Wednesday Schedule</h1>
              <p>No classes scheduled</p>
            </div>
            <div class="days-section" id="thursday">
              <h1>Thursday Schedule</h1>
              <p>No classes scheduled</p>
            </div>
            <div class="days-section" id="friday">
              <h1>Friday Schedule</h1>
              <p>No classes scheduled</p>
            </div>
            <div class="days-section" id="saturday">
              <h1>Saturday Schedule</h1>
              <p>No classes scheduled</p>
            </div>
            <div class="days-section" id="Sunday">
              <h1>Sunday Schedule</h1>
              <p>No classes scheduled</p>
            </div>`;

ttHtml.innerHTML += ttContent;

const buttons = document.querySelectorAll(".sidebar-btn");
const sections = document.querySelectorAll(".section");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    sections.forEach((sec) => sec.classList.remove("active-section"));

    button.classList.add("active");
    const target = button.dataset.target;
    document.getElementById(target).classList.add("active-section");
  });
});

const btns = document.querySelectorAll(".days-btn");
const daysSections = document.querySelectorAll(".days-section");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((b) => b.classList.remove("active"));
    daysSections.forEach((sec) => sec.classList.remove("active-days-section"));

    btn.classList.add("active");
    const target = btn.dataset.target;
    document.getElementById(target).classList.add("active-days-section");
  });
});

// Logout function
function logout() {
  localStorage.setItem("IsLogin", false);
  localStorage.setItem("email", "");
  localStorage.setItem("pass", "");
  localStorage.setItem("userType", "");
  localStorage.setItem("studentData", "");
  window.location.href = "/index.html";
}

function bodystudentTable() {
  let html = "";
  students.forEach((student) => {
    html += `<tr>
                <td>${student.UID}</td>
                <td>${student.name}</td>
                <td>${student.sec}</td>
                <td><input type="checkbox" class="check-a" value="Mark" /></td>
              </tr>`;
  });
  return html;
}

document.getElementById("submitButton").addEventListener("click", () => {
  const submitBtn = document.getElementById("submitButton");
  const originalText = submitBtn.textContent;

  // Show loading state
  submitBtn.disabled = true;
  submitBtn.classList.add("loading");
  submitBtn.textContent = "Submitting...";

  // Wait 2 seconds then uncheck all checkboxes
  setTimeout(() => {
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false));

    // Reset button state
    submitBtn.disabled = false;
    submitBtn.classList.remove("loading");
    submitBtn.textContent = originalText;
  }, 2000);
});
