// script.js

window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(to right, #ff7e5f, #feb47b)';
    } else {
        navbar.style.background = 'linear-gradient(to right, #0072ff, #00c6ff)';
    }
});

document.querySelectorAll('.nav-item a').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.color = '#ffd700';
    });

    item.addEventListener('mouseout', function() {
        this.style.color = '';
    });
});
