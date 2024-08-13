let songs = document.querySelectorAll(".songs")

songs.forEach(song => {
    song.addEventListener("click",function(){

        let songimages = document.querySelector(".songimages")
        let songid = song.firstElementChild.id
        songimages.setAttribute("id", songid)
        let detail = song.lastElementChild
        document.querySelector("#songname1").textContent = detail.firstElementChild.textContent 
        document.querySelector("#singername1").textContent = detail.children[1].textContent
        let audiosrc = document.querySelector("#audiosrc")
        audiosrc.src = detail.children[2].textContent
        document.querySelector("#audioPlayer").load()
        songs.forEach(back => 
            back.style.backgroundColor = "#5a5a5a"
        )
        song.style.backgroundColor = "rgb(154, 0, 0)"
    })
}) 

document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const stopButton = document.getElementById('stopButton');
    const volumeControl = document.getElementById('volumeControl');
    const seekBar = document.getElementById('seekBar');
    const currentTimeDisplay = document.getElementById('currentTime');
    const durationDisplay = document.getElementById('duration');

    playButton.addEventListener('click', () => {
        audioPlayer.play();
        playButton.style.display = "none"
        pauseButton.style.display ="flex"
    });

    pauseButton.addEventListener('click', () => {
        audioPlayer.pause();
        playButton.style.display = "flex"
        pauseButton.style.display ="none"
    });
    volumeControl.addEventListener('input', (e) => {
        audioPlayer.volume = e.target.value;
    });

    audioPlayer.addEventListener('timeupdate', updateSeekBar);

    audioPlayer.addEventListener('loadedmetadata', () => {
        const duration = audioPlayer.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        durationDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    });

    seekBar.addEventListener('input', (e) => {
        audioPlayer.currentTime = e.target.value;
        updateSeekBar();
    });

    function updateSeekBar() {
        const currentTime = audioPlayer.currentTime;
        const duration = audioPlayer.duration;
        const minutes = Math.floor(currentTime / 60);
        const seconds = Math.floor(currentTime % 60);
        currentTimeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (!isNaN(duration)) {
            seekBar.max = duration;
            seekBar.value = currentTime;
            const value = (currentTime / duration) * 100;
            seekBar.style.setProperty('--seek-before-width', `${value}%`);
        }
    }
})

const select = document.getElementById("selectorbox");
const divs = document.querySelectorAll(".box1");

select.addEventListener("change", function() {
  divs.forEach(div => {
    if (div.id === select.value) {
      div.style.display = "flex";
    } else {
      div.style.display = "none";
    }
  });
});

let intro = document.querySelector("#intro")

intro.addEventListener("click", function(){
    intro.style.display = "none"
})