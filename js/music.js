const musicButton = document.getElementById("button-music");

var music = new Audio('audio/christmas-songs.mp3');
let isMusicPlaying = !music.paused;
function manageMusic() {
    if (isMusicPlaying) {
        music.pause();
    }
    else {
        music.play();
    }
    isMusicPlaying = !isMusicPlaying;
}

musicButton.addEventListener("click", manageMusic); 