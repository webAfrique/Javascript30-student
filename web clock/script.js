const sec_hand = document.querySelector('.sec-hand');
function timer(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    sec_hand.style.transform = `rotate(${secondsDegrees}deg)`;
}
setInterval(timer, 1000);