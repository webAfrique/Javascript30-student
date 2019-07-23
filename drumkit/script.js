const drums = Array.from(document.querySelectorAll('.drum'));
function playSound(event){
    let key = event.key;
    let audio = document.querySelector(`audio[data-key=${key}]`);
    let drum = document.querySelector(`span[data-key=${key}]`);
    drum.classList.add('anim');
    audio.currentTime = 0;
    audio.play();
    
    
}
function removeAnim(){
    this.classList.remove('anim');
}
window.addEventListener('keydown', playSound);
drums.forEach(drum => drum.addEventListener('animationend', removeAnim));
drums




