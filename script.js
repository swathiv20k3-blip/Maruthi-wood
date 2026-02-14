//navlink script
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");



  hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});


//form validation
 document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let isValid = true;

        const fname = document.getElementById("fname");
        const lname = document.getElementById("lname");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        document.querySelectorAll(".error").forEach(e => e.innerText = "");

        if (fname.value.trim() === "") {
            document.getElementById("fnameErr").innerText = "First name required";
            isValid = false;
        }
        if (lname.value.trim() === "") {
            document.getElementById("lnameErr").innerText = "Last name required";
            isValid = false;
        }
        if (email.value.trim() === "") {
            document.getElementById("emailErr").innerText = "Email required";
            isValid = false;
        }
        if (subject.value.trim() === "") {
            document.getElementById("subjectErr").innerText = "Subject required";
            isValid = false;
        }
        if (message.value.trim() === "") {
            document.getElementById("messageErr").innerText = "Message required";
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully!");
            document.getElementById("contactForm").reset();
        }
    });