// Load EmailJS SDK
(function(){
    var script = document.createElement('script');
    script.src = "https://cdn.emailjs.com/dist/email.min.js";
    script.onload = function(){
        emailjs.init("nmXubWRwvOSYbbSN4"); // replace with your EmailJS public key
    };
    document.head.appendChild(script);
})();

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // prevent default page reload

        emailjs.sendForm("service_z31926s", "template_otxofut", form)
            .then(() => {
                alert("Message sent successfully!");
                form.reset(); // clear the form
            })
            .catch(error => {
                alert("Failed to send message: " + JSON.stringify(error));
            });
    });
});
