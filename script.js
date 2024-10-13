document.addEventListener('DOMContentLoaded', function() {
    const showTutorialButton = document.getElementById('showTutorial');
    const tutorialVideo = document.getElementById('tutorialVideo');

    showTutorialButton.addEventListener('click', function() {
        if (tutorialVideo.style.display === 'none') {
            tutorialVideo.style.display = 'block';
            showTutorialButton.textContent = 'Hide Video Tutorial';
        } else {
            tutorialVideo.style.display = 'none';
            showTutorialButton.textContent = 'Show Video Tutorial';
        }
    });
});

