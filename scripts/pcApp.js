

let itemsHTML = '';

items.forEach((item) => {

  itemsHTML += `
  <div class="pr-10">
  <div class="container  mb-8 mr-16 duration-1000 ease-in-out hover:scale-110">
  <div class=" card">
    
    <div class="frontptd ">

      <img class="w-full h-full" src="${item.image}">
    

      
      <h2 class="ml-2 text-xl dishname">${item.name}&nbsp;€${item.price / 100}</h2>
      
      <p  class="float-right -mt-7">
        <button  class="w-8 h-8 pl-2 pr-2 mr-2 text-lg font-extrabold text-black bg-green-300 border-2 border-white rounded-md shadow-2xl cart active:bg-red-200 active:text-slate-950 visited:bg-black visited:text-bg-400 hover:bg-rose-600 hover:text-white hover:scale-110 hover:border-green-600">+<div class="tooltip">Add to cart</div></button>
        
      </p>
    
      
        </div>
  </div>
</div>
</div>
  `;

});

console.log(itemsHTML);


document.querySelector('.js-items-grid').innerHTML = itemsHTML ;
















let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("mailaddress");
let phone = document.getElementById("phone");
let guest = document.getElementById("guest");
let date = document.getElementById("date");
let time = document.getElementById("time");

let flag = 1;


function validateForm() {



   

  

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








