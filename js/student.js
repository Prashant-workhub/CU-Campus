import { students } from "../data/data.js";

let mathingitem;
let matchEmail = localStorage.getItem("email");

students.forEach((item) => {
  if (matchEmail == item.email) mathingitem = item;
});

let btnhtml = document.querySelector(".content");
let headHtml = document.querySelector(".header");
let btnContent = "";
let headContent = "";

headContent += `
     <div class="pfp">
    <img src='https://www.culko.in/assets-2025/img/head-foot/culko-logo-new.png' style="margin-left : 0px;" height='75rem'>
    </div>
    <div class="pfp">
    <img src="/data/images/pfp.png" height="75rem" />
    </div>
    <div class="name">
    Student Name :
    <p>${mathingitem.name}</p>
    </div>
    <div class="UID">
    UID :
    <p>${mathingitem.UID}</p>
    </div>

    <div class="logout">
    <button
        style="
        background-color: red;
        padding: 0.5rem;
        margin: 0.6rem;
        border: 2px solid black;
        border-radius: 0.7rem;
        "
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
    <p style="font-size: larger;"><b>82%</b></p>
    </div>

    <div class="card">
    <h3><b>Assignments</b></h3><br><br>
    <p style="font-size: larger;"><b>Pending</b></p>
    </div>

    <div class="card">
    <h3><b>Fees</b></h3><br><br>
    <p style="font-size: larger;"><b>Due 10000</b></p>
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
            <tr>
                <td>Data Science Fundamentals</td>
                <td>Dr. A. Sharma</td>
                <td>85%</td>
                <td class="good">Good</td>
            </tr>

            <tr>
                <td>Object Oriented Programming Using JAVA</td>
                <td>Prof. R. Mehta</td>
                <td>78%</td>
                <td class="good">Good</td>
            </tr>

            <tr>
                <td>Competitive Programming Lab</td>
                <td>Mr. K. Verma</td>
                <td>90%</td>
                <td class="good">Good</td>
            </tr>

            <tr>
                <td>Aptitude 1</td>
                <td>Ms. S. Gupta</td>
                <td>72%</td>
                <td class="low">Low</td>
            </tr>

            <tr>
                <td>Basic Electrical and Electronics Engineering</td>
                <td>Dr. P. Singh</td>
                <td>80%</td>
                <td class="good">Good</td>
            </tr>

            <tr>
                <td>Linear Algebra and Vector Calculus</td>
                <td>Dr. N. Iyer</td>
                <td>68%</td>
                <td class="low">Low</td>
            </tr>

            <tr>
                <td>Physics for Computation Technologies</td>
                <td>Prof. M. Rao</td>
                <td>75%</td>
                <td class="good">Good</td>
            </tr>
            </tbody>
        </table>
            </div>

<div id="fees" class="section">
  <h1>Fee Counter</h1>

  <div class="fee-cards">

    <div class="fee-card">
      <h3>Total Fees</h3>
      <p class="amount">₹1,20,000</p>
    </div>

    <div class="fee-card">
      <h3>Scholarship</h3>
      <p class="amount scholarship">₹30,000</p>
    </div>

    <div class="fee-card">
      <h3>Payable Fees</h3>
      <p class="amount payable">₹90,000</p>
    </div>

    <div class="fee-card">
      <h3>Remaining Fees</h3>
      <p class="amount remaining">₹10,000</p>
    </div>

  </div>
</div>


<div id="assignment" class="section">
    <h1>Assignments</h1>
</div>

<div id="contact" class="section">
    <h1>Contact Info</h1>

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
