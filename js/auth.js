window.onload = () => {
  if (localStorage.getItem("IsLogin") !== "true") {
    window.location.href = "/../index.html";
  } else {
    console.log("User authenticated");
  }
};

function logout() {
  localStorage.removeItem("studentData");
  localStorage.removeItem("isLogin");
  window.location.href = "/../index.html";
}

const intervalId = window.setInterval(authchecker(), 5000);

function authchecker() {
  if (localStorage.getItem("IsLogin") !== "true") {
    window.location.href = "/../index.html";
  } else {
    console.log("User authenticated");
  }
}
