

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let phone = document.getElementById("phone");
let guest = document.getElementById("guest");
let date = document.getElementById("date");
let time = document.getElementById("time");

let flag = 1;


function validateForm() {

  // var email = document.getElementById("mailaddress").value;

   

  

  if(fname.value == "") {
    document.getElementById("fnameError").innerHTML = "Please provide us your Firstname";
    flag=0;
  } else if(fname.value.length < 2) {
    document.getElementById("fnameError").innerHTML = "Firstname requires at least 2 characters";
    flag=0;
  } else {
    document.getElementById("fnameError").innerHTML = "";
    flag = 1;
  }

  if(lname.value == "") {
    document.getElementById("lnameError").innerHTML = "Please provide us your Lastname";
    flag=0;
  } else if(lname.value.length < 2) {
    document.getElementById("lnameError").innerHTML = "Lastname requires at least 2 characters";
    flag=0;
  } else {
    document.getElementById("lnameError").innerHTML = "";
    flag=1;
  }
 
  let email = document.getElementById("mailaddress");

  var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;


  if(email.value == "") {
    document.getElementById("mailError").innerHTML = "Please enter an Email address";
    flag = 0;
  } else if(!regx.test(email.value)) {
    document.getElementById("mailError").innerHTML = "Invalid Email address";
    flag = 0;
  } else {
    document.getElementById("mailError").innerHTML = "";
    flag = 1;
  }



  if(phone.value == "") {
    document.getElementById("phoneError").innerHTML = "Phone number is required";
    flag=0;
  } else if(phone.value.length < 10 || phone.value.length > 10) {
    document.getElementById("phoneError").innerHTML = "Invalid Phone number";
    flag=0;
  } else {
    document.getElementById("phoneError").innerHTML = "";
    flag=1;
  }

  if(guest.value <= 0) {
    document.getElementById("guestError").innerHTML = "Add at least 1 guest";
    flag=0;
  } else if(guest.value > 20) {
    document.getElementById("guestError").innerHTML = "Please contact us if number of guest exceeds 20";
    flag=0;
  } else {
    document.getElementById("guestError").innerHTML = "";
    
  }


if(flag) {
  return true;
} else {
  return false;
}


}








