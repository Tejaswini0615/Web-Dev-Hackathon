
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const name = document.querySelector('input[placeholder="Your Name"]').value;
    const email = document.querySelector('input[placeholder="Your Email"]').value;
    const message = document.querySelector('textarea').value;

    if (name && email && message) {
        alert('Thank you for contacting us!');
    } else {
        alert('Please fill in all fields.');
    }
});
