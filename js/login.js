import { students } from "../data/data.js";
import { teachers } from "../data/data.js";

window.onload = () => {
  localStorage.setItem("IsLogin", false);
  localStorage.setItem("email", "");
  localStorage.setItem("pass", "");
  localStorage.setItem("userType", "");
  localStorage.setItem("studentData", "");
};

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const dataObject = Object.fromEntries(formData);

    const email = dataObject.email;
    const password = dataObject.password;
    const userType = dataObject.userType;

    document.querySelector(".error-message").innerHTML = "";
    document.querySelector(".wrong-pass").innerHTML = "";

    if (!userType) {
      document.querySelector(".wrong-pass").innerHTML =
        "Please select a user type";
      localStorage.setItem("IsLogin", false);
      return;
    }

    if (userType === "student") {
      const studentFound = students.find(
        (student) => student.email === email && student.pass === password,
      );

      if (studentFound) {
        localStorage.setItem("IsLogin", true);
        localStorage.setItem("email", email);
        localStorage.setItem("pass", password);
        localStorage.setItem("userType", "student");
        localStorage.setItem("studentData", JSON.stringify(studentFound));
        document.querySelector(".wrong-pass").innerHTML = "";

        window.location.href = "/student/dashboard.html";
      } else {
        document.querySelector(".error-message").innerHTML =
          "Email Or Password didn't Match";
        document.querySelector(".wrong-pass").innerHTML =
          "Email Or Password didn't Match";
        localStorage.setItem("IsLogin", false);
      }
    } else if (userType === "teacher") {
      // document.querySelector(".wrong-pass").innerHTML =
      //   "Teacher login is coming soon";
      // localStorage.setItem("IsLogin", false);

      const teacherFound = teachers.find((teacher) => {
        teacher.email === email && teacher.pass === password;
      });

      if (teacherFound) {
        localStorage.setItem("IsLogin", true);
        localStorage.setItem("email", email);
        localStorage.setItem("pass", password);
        localStorage.setItem("userType", "teacher");
        localStorage.setItem("teacherdata", JSON.stringify(teacherFound));
        document.querySelector(".wrong-pass").innerHTML = "";

        window.location.href = "/teacher/dashboard.html";
      } else {
        document.querySelector(".error-message").innerHTML =
          "Email Or Password didn't Match";
        document.querySelector(".wrong-pass").innerHTML =
          "Email Or Password didn't Match";
        localStorage.setItem("IsLogin", false);
      }
    } else if (userType === "admin") {
      document.querySelector(".wrong-pass").innerHTML =
        "Admin login is coming soon";
      localStorage.setItem("IsLogin", false);
    }
  });
