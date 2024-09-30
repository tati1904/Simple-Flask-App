// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // Smooth scrolling for internal links only
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic welcome message based on time of day (for home page)
function setWelcomeMessage() {
    const welcomeMessage = document.querySelector('#welcome-message');
    if (!welcomeMessage) return; // Exit if the element doesn't exist

    const hours = new Date().getHours();
    let message = '';

    if (hours < 12) {
        message = 'Good morning!';
    } else if (hours < 18) {
        message = 'Good afternoon!';
    } else {
        message = 'Good evening!';
    }

    welcomeMessage.textContent = message;
}

window.onload = setWelcomeMessage;

// Scroll progress bar
window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-bar").style.width = scrolled + "%";
});
