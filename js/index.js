/* SELECTORS */
const volume = document.getElementById("volume");
const display = document.getElementById("display");
const clips = Array.from(document.querySelectorAll(".clip"));
const buttons = Array.from(document.querySelectorAll(".drum-pad"));

/* EVENTS */
document.addEventListener("DOMContentLoaded",()=>{
    volume.addEventListener("input",changeVolume);
    buttons.map(button => button.addEventListener("click",playSound));
    window.addEventListener("keyup",playSound);
});

/* FUNCTIONS */

/* Change volume of the audios */
function changeVolume(){
    display.innerText= `VOLUME: ${volume.value}`;
    clips.map(clip => clip.volume = volume.value/100);
}

/* Play sound when user clicks a button or press a key */
function playSound(event){
    if(event.key){
        if(/[qweasdzxc]/i.test(event.key)){
            const clip = clips.filter(clip => clip.id === event.key.toUpperCase())[0];
            display.innerText= clip.parentNode.id;
            clip.parentNode.style.opacity ="0.5";
            clip.play();
            setTimeout(() => {
                clip.parentNode.style.opacity ="1";
            }, 100);

        }
        else{
            return;
        }
    }
    else{
        display.innerText= event.target.id;
        event.target.lastChild.play();
    }
}
