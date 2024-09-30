// Scroll progress bar
window.onscroll = function () { scrollProgress() };

function scrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-bar").style.width = scrolled + "%";
}

// Form validation (Basic example, enhance as needed)
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Here, you could add functionality to send the form data to your server

    alert("Thank you for your message, " + name + "!");
    form.reset();
});
