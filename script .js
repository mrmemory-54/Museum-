// Simulate Loading Progress
let progress = 0;
const progressBar = document.getElementById('progress');
const loadingText = document.getElementById('loading-text');
const loaderScreen = document.getElementById('loader-screen');
const welcomeScreen = document.getElementById('welcome-screen');
const galleryScreen = document.getElementById('gallery-screen');

const loadingInterval = setInterval(() => {
    progress += 2;
    if (progress <= 100) {
        progressBar.style.width = progress + '%';
        loadingText.innerText = `Preparing the collection... ${progress}%`;
    } else {
        clearInterval(loadingInterval);
        loaderScreen.classList.add('hidden');
        welcomeScreen.classList.remove('hidden');
    }
}, 40);

// Start Button Event
document.getElementById('start-btn').addEventListener('click', () => {
    welcomeScreen.classList.add('hidden');
    galleryScreen.classList.remove('hidden');
});

// Fullscreen Toggle
document.getElementById('fullscreen-btn').addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

// Open Photo in Modal
function openPhoto(imgSrc, caption) {
    const modal = document.getElementById('photo-modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');

    modalImg.src = imgSrc;
    modalCaption.innerText = caption;
    modal.classList.remove('hidden');
}

// Close Photo Modal
function closePhoto() {
    document.getElementById('photo-modal').classList.add('hidden');
}

// Interactive Dance Trigger
function triggerDance() {
    alert("✨ Avatar is dancing now! (এখানে আপনার কাস্টম এনিমেশন বা মিউজিক 
}
