// For Breathing Phase Session Control
function changePlayMusicIcon() {
    const playMusic = document.getElementById("play-music");
    const muteMusic = document.getElementById("mute-music");
    const iconDisplay = getComputedStyle(playMusic).display;
    const sfxAudio = document.getElementById("sfx-audio");

    if (iconDisplay !== "none") {
        playMusic.style.display = "none";
        muteMusic.style.display = "block";
        sfxAudio.pause();
    } else {
        playMusic.style.display = "block";
        muteMusic.style.display = "none";
        sfxAudio.play();
    }
}

function changePlayTimerIcon() {
    const playTimer = document.getElementById("play-timer");
    const pauseTimer = document.getElementById("pause-timer");
    const iconDisplay = getComputedStyle(playTimer).display;

    if (iconDisplay !== "none") {
        playTimer.style.display = "none";
        pauseTimer.style.display = "block";
        startTimer()
    } else {
        playTimer.style.display = "block";
        pauseTimer.style.display = "none";
        stopTimer()
    }
}

function changePlayGuideIcon() {
    const playGuide = document.getElementById("play-guide");
    const muteGuide = document.getElementById("mute-guide");
    const iconDisplay = getComputedStyle(playGuide).display;

    if (iconDisplay !== "none") {
        playGuide.style.display = "none";
        muteGuide.style.display = "block";
    } else {
        playGuide.style.display = "block";
        muteGuide.style.display = "none";
    }
}

function playDoneSessionMusic() {
    const doneAudio = document.getElementById("done-audio");
    doneAudio.play();
}



const startEl = document.querySelector(".timer-control .play")
// const resetEl = document.getElementById("reset");
const timeLeftEl = document.querySelector("p.time-left");

let interval;
let timeLeft = 3;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;

    timeLeftEl.innerHTML = formattedTime;
}

function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval);
            timeLeft = 300;
            updateTimer();

            const playTimer = document.getElementById("play-timer");
            const pauseTimer = document.getElementById("pause-timer");

            playTimer.style.display = "block";
            pauseTimer.style.display = "none";

            playDoneSessionMusic();
            postDoneSessionModalToggleOn();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    timeLeft = 300;
    updateTimer();

    const playTimer = document.getElementById("play-timer");
    const iconDisplay = getComputedStyle(playTimer).display;

    if (iconDisplay !== "none") {
        stopTimer();
    } else {
        startTimer();
    }
}


function endSessionModalToggleOn() {
    const modalScreen = document.querySelector("#modal-screen");
    const editModal = document.querySelector("#modal-screen .the-modal.end-session-modal");

    modalScreen.style.display = "flex";
    editModal.style.display = "flex";
    stopTimer();
}

function endSessionModalToggleOff() {
    const modalScreen = document.querySelector("#modal-screen");
    const editModal = document.querySelector("#modal-screen .the-modal.end-session-modal");

    modalScreen.style.display = "none";
    editModal.style.display = "none";
    startTimer();
}

function instructionsModalToggleOn() {
    const modalScreen = document.querySelector("#modal-screen");
    const editModal = document.querySelector("#modal-screen .the-modal.instructions-pre-session-modal");
    modalScreen.style.display = "flex";
    editModal.style.display = "flex";
}

function instructionsModalToggleOff() {
    const modalScreen = document.querySelector("#modal-screen");
    const editModal = document.querySelector("#modal-screen .the-modal.instructions-pre-session-modal");
    const sfxAudio = document.getElementById("sfx-audio");

    modalScreen.style.display = "none";
    editModal.style.display = "none";
    startTimer();
    sfxAudio.play();
}

function postDoneSessionModalToggleOn() {
    const modalScreen = document.querySelector("#modal-screen");
    const editModal = document.querySelector("#modal-screen .the-modal.post-done-session-modal");
    modalScreen.style.display = "flex";
    editModal.style.display = "flex";
}

function postDoneSessionModalToggleOff() {
    const modalScreen = document.querySelector("#modal-screen");
    const editModal = document.querySelector("#modal-screen .the-modal.post-done-session-modal");
    modalScreen.style.display = "none";
    editModal.style.display = "none";
}

function veryEndOfSessionModalToggleOn() {
    const modalScreen = document.querySelector("#modal-screen");
    const editModal = document.querySelector("#modal-screen .the-modal.the-very-end-of-session-modal");
    modalScreen.style.display = "flex";
    editModal.style.display = "flex";
}

function veryEndOfSessionModalToggleOff() {
    const modalScreen = document.querySelector("#modal-screen");
    const editModal = document.querySelector("#modal-screen .the-modal.the-very-end-of-session-modal");
    modalScreen.style.display = "none";
    editModal.style.display = "none";
}

instructionsModalToggleOn();



// startEl.addEventListener("click", startTimer);
// resetEl.addEventListener("click", resetTimer);