import { students, teachers, fee, contact } from "../data/data.js";

let matchingitem;
let matchEmail = localStorage.getItem("email");

students.forEach((item) => {
  if (matchEmail == item.email) matchingitem = item;
});

let btnhtml = document.querySelector(".content");
let headHtml = document.querySelector(".header");
let btnContent = "";
let headContent = "";
let attHTML = "";
let payable = fee.college - matchingitem.scholarship;
let payableHostel = fee.hostel + fee.laundary;
let hostelRem = payableHostel - matchingitem.fee.hostel;
let collegeRem = payable - matchingitem.fee.collegeR;

headContent += `
            <div class="pfp">
        <img src='https://www.culko.in/assets-2025/img/head-foot/culko-logo-new.png' style="margin-left : 0px;" height='75rem'>
        </div>
        <div class="pfp">
        <img src="/data/images/pfp.png" height="75rem" />
        </div>
        <div class="name">
        Student Name :
        <p>${matchingitem.name}</p>
        </div>
        <div class="UID">
        UID :
        <p>${matchingitem.UID}</p>
        </div>

        <div class="logout">
        <button
            onclick="logout()"
        >
            Sign Out
        </button>
        </div>`;

headHtml.innerHTML = headContent;

btnContent += `
        <div id="main" class="section active-section">
            <div class="main-cards">

        <div class="card">
        <h3><b>Attendance</b></h3><br><br>
        <p style="font-size: larger;"><b>${overallPercent(matchingitem)}%</b></p>
        </div>

        <div class="card">
        <h3><b>Assignments</b></h3><br><br>
        <p style="font-size: larger;"><b>${matchingitem.assignP}</b></p>
        </div>

        <div class="card">
        <h3 style="font-size: larger;"><b>Fees Due</b></h3><br><br>
        <p style="font-size: larger;"><b>₹${hostelRem + collegeRem}</b></p>
        </div>

        <div class="card">
        <h3><b>Notices</b></h3> <br><br>
        <p style="font-size: larger;"><b>Mid term Exams on 17 Feb</b></p>
        </div>
        </div>
        </div>


        <div id="attendance" class="section">
                <h1>Attendance Overview</h1>

            <table class="attendance-table">
                <thead>
                <tr>
                    <th>Course</th>
                    <th>Faculty</th>
                    <th>Attendance (%)</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                ${courseAttendance(matchingitem, attHTML)}
                </tbody>
            </table>
                </div>

            <div id="fees" class="section">
                <h1>Fee Counter</h1>

            <div class="fee-cards">
            <div class="fee-card">
                <h3>Total Course Fees</h3>
                <p class="amount">₹${fee.college}</p>
            </div>

            <div class="fee-card">
                <h3>Scholarship</h3>
                <p class="amount scholarship">₹${matchingitem.scholarship}</p>
            </div>

            <div class="fee-card">
                <h3>Payable Fees</h3>
                <p class="amount payable">₹${payable}</p>
            </div>

            <div class="fee-card">
                <h3>Remaining Fees</h3>
                <p class="amount remaining">₹${collegeRem}</p>
            </div>

            <div class="fee-card">
                <h3>Hostel Total Fees</h3>
                <p class="amount">₹${fee.hostel}</p>
            </div>

            <div class="fee-card">
                <h3>Laundary Charges</h3>
                <p class="amount scholarship">₹${fee.laundary}</p>
            </div>

            <div class="fee-card">
                <h3>Payable Fees</h3>
                <p class="amount payable">₹${payableHostel}</p>
            </div>

            <div class="fee-card">
                <h3>Remaining Fees</h3>
                <p class="amount remaining">₹${hostelRem}</p>
            </div>

            </div>
            </div>


        <div id="assignment" class="section">
        <h1>Assignments</h1>

        <table class="assignment-table">
        <thead>
            <tr>
            <th>Assignment</th>
            <th>Subject</th>
            <th>Faculty</th>
            <th>Due Date</th>
            <th>Status</th>
            </tr>
        </thead>

        <tbody>
            <tr>
            <td>Mini Project</td>
            <td>OOP Using JAVA</td>
            <td>Prof. R. Mehta</td>
            <td>18 Oct 2026</td>
            <td class="pending">Pending</td>
            </tr>

            <tr>
            <td>Assignment-2</td>
            <td>Data Science Fundamentals</td>
            <td>Dr. A. Sharma</td>
            <td>15 Oct 2026</td>
            <td class="submitted">Submitted</td>
            </tr>

            <tr>
            <td>Numerical Sheet</td>
            <td>Physics for Computation Technologies</td>
            <td>Prof. M. Rao</td>
            <td>10 Oct 2026</td>
            <td class="late">Late</td>
            </tr>
        </tbody>
        </table>
        </div>

        <div id="contact" class="section">
        <h1>Contact Information</h1>

        <div class="contact-cards">

        <div class="contact-card">
            <h3>${contact.academicOffice.title}</h3>
            <p>Email: ${contact.academicOffice.email}</p>
            <p>Phone: ${contact.academicOffice.phone}</p>
        </div>

        <div class="contact-card">
            <h3>${contact.feeDepartment.title}</h3>
            <p>Email: ${contact.feeDepartment.email}</p>
            <p>Phone: ${contact.feeDepartment.phone}</p>
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

        <div class="contact-card">
        <h3>Student Profile</h3>
        <p><strong>Name:</strong> ${matchingitem.name}</p>
        <p><strong>UID:</strong> ${matchingitem.UID}</p>
        <p><strong>Email:</strong> ${matchingitem.email}</p>
        <p><strong>Mobile:</strong> ${matchingitem.phone}</p>
        </div>

        <div class="contact-card">
            <h3>Developer Profile</h3>
            <p>Email: devmail.prashant@gmail.com</p>
            <p>Phone: +91 8966010035</p>
            <p> <a href="https://prashant-workhub.github.io/" target="_blank">Visit Link</a></p>
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

function overallPercent(matchingItem) {
  let sum = 0;
  teachers.forEach((teacher, index) => {
    const attValue = matchingItem.attendance[`att${index + 1}`];
    const percent = Math.round((attValue / teacher.schedClasses) * 100);
    sum += percent;
  });

  return sum / 5;
}

function courseAttendance(matchingItem, attHTML) {
  teachers.forEach((teacher, index) => {
    const attValue = matchingItem.attendance[`att${index + 1}`];
    const percentage = Math.round((attValue / teacher.schedClasses) * 100);
    const statusClass = percentage >= 75 ? "good" : "low";
    const statusText = percentage >= 75 ? "Good" : "Low";
    attHTML += `
            <tr>
            <td>${teacher.course}</td>
            <td>${teacher.name}</td>
            <td>${percentage}%</td>
            <td class="${statusClass}">${statusText}</td>
            </tr>
        `;
  });

  return attHTML;
}

// Logout function
function logout() {
  localStorage.setItem("IsLogin", false);
  localStorage.setItem("email", "");
  localStorage.setItem("pass", "");
  localStorage.setItem("userType", "");
  localStorage.setItem("studentData", "");
  window.location.href = "/index.html";
}
