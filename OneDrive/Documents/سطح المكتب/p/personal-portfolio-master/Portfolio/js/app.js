var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);
var copy = document.querySelector(".logos-slide2").cloneNode(true);
document.querySelector(".logos2").appendChild(copy);

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});


// dark and light mood
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
  this.classList.toggle('bi-moon');
  if(this.classList.toggle('bi-brightness-high-fill')){
    body.style.background = '#2E2E31';
      body.style.color = 'white';
      body.style.transition = '2s';
  }else{
    body.style.background = 'white';
      body.style.color = 'black';
      body.style.transition = '2s';
  }
});

// share button 
const shareBtn = document.querySelector('.share-btn');
const shareOptions = document.querySelector('.share-options');

shareBtn.addEventListener('click', () => {
  shareOptions.classList.toggle('active');
})

function emailSend() {
  Email.send({
      Host: "smtp.elasticemail.com",
      Username: "anassessadikine1@gmail.com",
      Password: "B78E9305BB71057F266294147F03BF5B22C5",
      To: 'contact@anassessadikine.com',
      From: 'anassessadikine1@gmail.com',
      Subject: "New Contact Form Enquiry",
      Body: "Nom: " + document.getElementById("name1").value +
          "<br> Email: " + document.getElementById("email").value +
          "<br> Numéro de téléphone: " + document.getElementById("number").value +
          "<br> Message: " + document.getElementById("message").value
  }).then(
      message => {
          alert("Message Sent Succesfully");
          // Reset the form after sending the email
          document.getElementById("name1").value = "";
          document.getElementById("email").value = "";
          document.getElementById("number").value = "";
          document.getElementById("message").value = "";
          console.log(document.getElementById("name1").value)
      }
  ).catch(
      error => {
          alert("An error occurred while sending the message: " + error);
      }
  );
}