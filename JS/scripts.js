/*This is for the Login  form*/
function validation(){
	var name = document.getElementById("name").value;
	var subject = document.getElementById("subject").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message");
	var text;

    error_message.style.padding = "10px";

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;

    }


    if(subject.length <10){
        text = "Please Enter Correct Subject";
        error_message.innerHTML = text;
        return false;

    }
    alert("Form Submitted Successfully!")
    return true;

}









/* This is for the Contact page */
function validation(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if(name.length <5){
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if(subject.length <10){
        text = "Please Enter Correct Subject";
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter Valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }

    if(message.length <= 140){
        text = "Please Enter More Than 140 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!")
    return true;

}







/*--------Automatic slide show--------*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
