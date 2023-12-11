const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("src/tunes./a.wav");

let mappedKeys = []

const volumeSlider = document.querySelector(".volume-slider input");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key)=>{
    key.addEventListener("click", () => playTune(key.dataset.key))
    mappedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
    if(mappedKeys.includes(e.key)){
        playTune(e.key);
    }

    
});

const handleVolume = (e) => {
    audio.volume = e.target.volume;
}

volumeSlider.addEventListener("input", handleVolume);