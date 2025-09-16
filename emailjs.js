<script>
  (function(){
    emailjs.init("dEkhovEAQ6dOTHYhB"); // TODO: Replace with your EmailJS User ID
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.send("service_o13wrdg", "template_xs0574p", {
      from_name: this.name.value,
      from_email: this.email.value,
      message: this.message.value,
      to_email: "thoughtrealstudio@gmail.com"
    })
    .then(function(response) {
      document.getElementById('form-message').innerHTML = "Message sent!";
    }, function(error) {
      document.getElementById('form-message').innerHTML = "Failed to send message. Please try again later.";
    });
  });
</script>
