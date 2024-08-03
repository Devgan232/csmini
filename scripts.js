function showVideo() {
    var modal = document.getElementById('videoModal');
    var video = document.getElementById('contactVideo');
    modal.style.display = "block";
    video.play();
}

function closeVideo() {
    var modal = document.getElementById('videoModal');
    var video = document.getElementById('contactVideo');
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

function plusSlides(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("mySlides");
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
ScrollReveal().reveal('#program-details', {
    delay: 200,
    duration: 1000,
    distance: '50px',
    easing: 'ease-in-out',
    reset: true
});

ScrollReveal().reveal('#course-details', {
    delay: 400,
    duration: 1000,
    distance: '50px',
    easing: 'ease-in-out',
    reset: true
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.course-box a').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.href;

            const modal = document.createElement('div');
            modal.className = 'modal-overlay';
            modal.innerHTML = `
                <div class="modal-content">
                    <h2>Confirm Registration</h2>
                    <p>Are you sure you want to register for this course?</p>
                    <button id="confirm" aria-label="Confirm registration">Yes</button>
                    <button id="cancel" aria-label="Cancel registration">No</button>
                </div>
            `;
            document.body.appendChild(modal);

            document.getElementById('confirm').addEventListener('click', () => {
                window.location.href = url;
            });

            document.getElementById('cancel').addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        });
    });
});
