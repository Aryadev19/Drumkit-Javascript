window.addEventListener('keydown',function playAudio(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio)return;// stop the function from running all together
    audio.currentTime = 0;// rewind to the start
    audio.play();
    key.classList.add('playing');// add transition
    setTimeout(() => {
        key.classList.remove('playing'); // remove transition
    },70 );
})