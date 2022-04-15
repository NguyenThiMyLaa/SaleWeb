// OPEN FORM REGISTER
// Get the modal
const modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
const dangky = document.getElementById("header__navbar-item-dangky");

// Get the <span> element that closes the modal
const closeformdangky = document.getElementById("closeformdangky");

// When the user clicks on the button, open the modal
dangky.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeformdangky.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

// OPEN FORM LOGIN
const modal2 = document.getElementById("myModal2");

const dangnhap = document.getElementById("header__navbar-item-dangnhap");

const closeformdangnhap = document.getElementById("closeformdangnhap");

dangnhap.onclick = function() {
  modal2.style.display = "block";
}

closeformdangnhap.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


