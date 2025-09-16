// Initialize EmailJS
(function () {
    emailjs.init("dEkhovEAQ6dOTHYhB"); // Replace with your EmailJS User ID if different
})();

document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        emailjs.send("service_o13wrdg", "template_xs0574p", {
            from_name: form.name.value,
            from_email: form.email.value,
            message: form.message.value,
            to_email: "thoughtrealstudio@gmail.com"
        }).then(function (response) {
            document.getElementById('form-message').innerHTML = "Message sent!";
            form.reset();
        }, function (error) {
            document.getElementById('form-message').innerHTML = "Failed to send message. Please try again later.";
        });
    });
});
