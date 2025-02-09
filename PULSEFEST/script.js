document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) { // Adjust the scroll value as needed
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

document.querySelectorAll('.tour-image').forEach((image, index) => {
    const detailsBox = document.getElementById(`tour-details-box-${index + 1}`);
    
    image.addEventListener('mouseenter', () => {
        detailsBox.style.display = 'block';
    });

    image.addEventListener('mouseleave', () => {
        detailsBox.style.display = 'none';
    });

    image.addEventListener('mousemove', (e) => {
        const rect = image.getBoundingClientRect();
        detailsBox.style.left = `${e.clientX - rect.left}px`;
        detailsBox.style.top = `${e.clientY - rect.top}px`;
    });
});
