const volume = document.getElementById("volume");
const display = document.getElementById("display");
const clips = Array.from(document.querySelectorAll(".clip"));
const buttons = Array.from(document.querySelectorAll(".drum-pad"));

document.addEventListener("DOMContentLoaded",()=>{
    volume.addEventListener("input",changeVolume);
    buttons.map(button => button.addEventListener("click",playSound));
});

function changeVolume(){
    display.innerText= `VOLUME: ${volume.value}`;
    clips.map(clip => clip.volume = volume.value/100);
}

function playSound(event){
    display.innerText= event.target.id;
}
