
// dark and light mood
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
    
    toggle.addEventListener('click', function(){
        this.classList.toggle('bi-moon');
        if(this.classList.toggle('bi-brightness-high-fill')){
            body.style.background = 'white';
            body.style.color = 'black';
            body.style.transition = '2s';
        }else{
            body.style.background = 'black';
            body.style.color = 'white';
            body.style.transition = '2s';
        }
    });

    // share button 
    const shareBtn = document.querySelector('.share-btn');
    const shareOptions = document.querySelector('.share-options');
    
    shareBtn.addEventListener('click', () => {
        shareOptions.classList.toggle('active');
    })

    // copy links
    
    function copyText(htmlElement){
    if (!htmlElement){
    return;
    }
    
    let elementText = htmlElement.innerText;
    
    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);
    inputElement.select();
    
    document.execCommand('copy');
    
    inputElement.parentNode.removeChild(inputElement);
    }
    
    // link 1
    document.querySelector('#copylinkedin1').onclick =
    function ()
    {
     copyText(document.querySelector('#textlikedin1'));
    }
    // link 2
    document.querySelector('#copylinkedin2').onclick =
    function ()
    {
     copyText(document.querySelector('#textlikedin2'));
    }
    // link 3
    document.querySelector('#copylinkedin3').onclick =
    function ()
    {
     copyText(document.querySelector('#textlikedin3'));
    }
    // link 4
    document.querySelector('#copylinkedin4').onclick =
    function ()
    {
     copyText(document.querySelector('#textlikedin4'));
    }
    // link 5
    document.querySelector('#copylinkedin5').onclick =
    function ()
    {
     copyText(document.querySelector('#textlikedin5'));
    }
    function emailSend() {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "anassessadikine1@gmail.com",
            Password: "B78E9305BB71057F266294147F03BF5B22C5",
            To: 'contact@anassessadikine.com',
            From: 'anassessadikine1@gmail.com',
            Subject: "New Contact Form Enquiry",
            Body: "Name: " + document.getElementById("name").value +
                "<br> Email: " + document.getElementById("email").value +
                "<br> Message: " + document.getElementById("message").value
        }).then(
            message => {
                alert("Message Sent Succesfully");
                // Reset the form after sending the email
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
            }
        ).catch(
            error => {
                alert("An error occurred while sending the message: " + error);
            }
        );
    }
    