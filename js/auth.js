window.onload = () => {
  console.log("IsLogin:", localStorage.getItem("IsLogin"));
  console.log("UserType:", localStorage.getItem("userType"));

  if (localStorage.getItem("IsLogin") !== "true") {
    window.location.href = "/index.html";
  } else {
    console.log("User authenticated");
  }
};
