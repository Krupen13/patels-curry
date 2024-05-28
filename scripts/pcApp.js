const items = [{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/Paatodi.png',
  name: 'Paatodi',
  price: 699
},
{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/Dhokla.png',
  name: 'Dhokla',
  price: 699
},
{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/PaaniPuri.png',
  name: 'Paani Puri',
  price: 799
}, 
{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/PaneerTandoori.png',
  name: 'Paneer Tandoori',
  price: 899
},
{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/Dosa.png',
  name: 'Dosa',
  price: 999
},
{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/Idlivada.png',
  name: 'Idli Sambar',
  price: 999
},
{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/BhindiFry.png',
  name: 'Bhindi Fry',
  price: 799
}, 
{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/Biryani.png',
  name: 'Kulhad Biryani',
  price: 899
},
{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/PaneerPasandaRice.png',
  name: 'Pasanda Rice',
  price: 799
},
{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/PaalakPaneer.png',
  name: 'Paalak Paneer',
  price: 799
},
{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/PaneerAngara.png',
  name: 'Paneer Angara',
  price: 1099
},
{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/PaneerKadhai.png',
  name: 'Paneer Kadhai',
  price: 799
},
{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/PaneerLababdar.png',
  name: 'Paneer Lababdaar',
  price: 899
},
{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/PaneerTikkaMasaala.png',
  name: 'Tikka Masaala',
  price: 799
},
{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/Thali.png',
  name: '56 Bhog',
  price: 1599
},
{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/MangoLassi.png',
  name: 'Mango Lassi',
  price: 299
},
{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/NimbuPaani.png',
  name: 'Nimbu Paani',
  price: 199
},
{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/KulhadChai.png',
  name: 'Kulhad Chai',
  price: 299
},
{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/Pannakkam.png',
  name: 'Pannakkam',
  price: 399
},
{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/icecream.png',
  name: 'Rajasthani Kulfi Icecream',
  price: 549
},
{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/BanarasiPaan.png',
  name: 'Banarasi Paan',
  price: 299
},
{
  image: '/Users/krupenpatel/Documents/Patels-Curry/assets/Mukhvas.png',
  name: 'Raajsi Mukhvaas',
  price: 199
}];

let itemsHTML = '';

items.forEach((item) => {

  itemsHTML += `
              <div class="container mr-16 duration-1000 ease-in-out hover:scale-110">
                <div class=" card">
                  <div class="frontptd">
                
                  

                    
                    <h2 class="mt-48 ml-2 text-2xl dishname">${item.name}&nbsp;&nbsp;€&nbsp;&nbsp;€${item.price / 100}</h2>
                    
                    <p  class="float-right max-sm:text-xs max-md:text-md -mt-7">
                      <button  class="w-8 h-6 pl-2 pr-2 mr-2 text-sm font-extrabold text-white bg-red-400 border-2 border-white rounded-md shadow-2xl cart active:bg-red-200 active:text-slate-950 visited:bg-black visited:text-bg-400 hover:bg-white hover:text-red-400 hover:scale-110 hover:border-black">+<div class="tooltip">Add to cart</div></button>
                      
                    </p>
                  
                    
                      </div>
                </div>
              </div>
  `;

});

console.log(itemsHTML);



















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








