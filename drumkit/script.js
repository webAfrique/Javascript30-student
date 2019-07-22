function fn(){
    document.getElementById('sound1').play();
}
//setTimeout(fn, 1000);
onkeydown = function(event){
    
    let key = event.key;
    document.querySelector(`audio[data-key=${key}]`).play();
    document.querySelector(`span[data-key=${key}]`).style.animationName = 'playing';
    document.querySelector(`span[data-key=${key}]`).style.animationDuration = '0.2s';
}




