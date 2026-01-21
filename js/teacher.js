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
                <th>Section</th>
                <th>Name</th>
                <th>Mark Attendance</th>
              </tr>
            </thead>
            <tbody>
              ${bodystudentTable()}
            </tbody>
          </table>

          <div style="margin : 2rem 1rem;">
            <button class="submit" onclick="submit()">Submit </button>
          </div>
        </div>

  <div id="fees" class="section">
    <h1>Fee Management</h1>
    <p style="margin-top: 2rem; color: #666;">Fee management feature coming soon...</p>
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
                <td><input type="checkbox" value="Mark" /></td>
              </tr>`;
  });
  return html;
}
