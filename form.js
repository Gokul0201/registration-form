function formclick(event) {
  event.preventDefault();

  let name2 = document.getElementById("username").value;
  let useremail = document.getElementById("email").value;
  let passw = document.getElementById("password").value;
  let confirmpassw = document.getElementById("confirmpassword").value;

  var error1 = "";
  if (username.value === "") {
    error1 = "* Username Mandatory";
  } else {
    console.log(name2);
  }
  document.querySelector("#user").innerText = error1;

  var error2 = "";
  if (email.value === "") {
    error2 = "* Email Mandatory";
  } else {
    console.log(useremail);
  }
  document.getElementById("mail").innerText = error2;

  var error3 = "";
  if (password.value === "") {
    error3 = "* Please Enter Password";
  } else {
    console.log(passw);
  }
  document.querySelector("#pass").innerText = error3;

  var error4 = "";
  if (confirmpassword.value != password.value) {
    error4 = "* Password does not Match";
  } else {
    console.log(confirmpassw);
  }
  document.querySelector("#cpass").innerText = error4;
}
