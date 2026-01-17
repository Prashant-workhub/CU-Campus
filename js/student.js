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

headContent += `<div class="pfp">
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

btnContent += `<div id="main" class="section active-section">
    <h1>Welcome Student</h1>
    <p>This is the main dashboard.</p>
</div>

<div id="attendance" class="section">
    <h1>Attendance</h1>
</div>

<div id="fees" class="section">
    <h1>Fee Counter</h1>
</div>

<div id="assignment" class="section">
    <h1>Assignments</h1>
</div>

<div id="contact" class="section">
    <h1>Contact Info</h1>

</div>
`;

btnhtml.innerHTML = btnContent;

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
