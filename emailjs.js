<script>
  (function(){
    emailjs.init("YOUR_EMAILJS_USER_ID"); // TODO: Replace with your EmailJS User ID
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
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
