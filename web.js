let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains = document.getElementById('mountains');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let Haider = document.querySelector('.Haider');

window.onscroll = function(){
    let vale = scrollY;
    stars.style.left = vale + 'px';
    moon.style.top = vale * 3 + 'px';
    mountains.style.top = vale * 2 + 'px';
    mountains4.style.top = vale * 1.5 + 'px';
    river.style.top = vale  + 'px';
    boat.style.top = vale  + 'px';
    boat.style.left = vale * 3  + 'px';
    Haider.style.fontSize = vale  + 'px';
    if(scrollY >=54){
        Haider.style.fontSize = 54  + 'px';
        Haider.style.position = 'fixed';
        if(scrollY >= 426 ){
            Haider.style.display = 'none';
        }else{
            Haider.style.display = 'block';
        }
        if(scrollY >= 99){
            document.querySelector('.main').style.background = 'linear-gradient(#5b34d8,#10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'
        }
    }
}