document.addEventListener("DOMContentLoaded", function() {

    document.addEventListener("submit", function(event) {
        event.preventDefault();

        let contact = document.querySelector(".contact").value;
        let password = document.querySelector(".pass").value;

        if (contact === "1234567890" && password === "tanuj123") {
            window.location.href = "resume.html";
        } else {
            alert("Incorrect contact or password");
        }
    });

});