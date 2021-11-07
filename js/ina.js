var nrImg=3;
var IntSeconds=4;
function load(){
    nrShown=0;
    Vect = new Array(nrImg + 10);
    Vect[0]=document.getElementById("img1");
    Vect[0].style.visibility="visible";
    
    for (var i=0;i<nrImg;i++){
        Vect[i]=document.getElementById("img" + (i+1));
    }
    mytime=setInterval(Timer, IntSeconds * 1000);
}
function Timer(){
    nrShown++;
    if (nrShown == nrImg)
        nrShown=0;
    Effect();
}
function Effect(){
    for (var i=0;i<nrImg;i++){
        Vect[i].style.opacity="0";
        Vect[i].style.visibility="hidden";
    }
    Vect[nrShown].style.opacity="1";
        Vect[nrShown].style.visibility="visible";
}
$(function(){
   $('.logo').mouseenter(function(){
       $('.menu').css({
           visibility:'visible'
       });
   });
    $('.menu').mouseenter(function(){
       $('.menu').css({
           visibility:'visible'
       });
   });
    $('.menu').mouseleave(function(){
       $('.menu').css({
           visibility:'hidden'
       });
   });
    $('.menu li').mouseenter(function(){
       $('.menu').css({
           background:'rgba(225,225,225,.5)',
           transition:'all 0.3s'
       });
    });
    $('.menu li').mouseleave(function(){
       $('.menu').css({
           background:'rgba(100,0,0,.5)',
           transition:'all 0.3s'
       });
    });
    $('.menu li').mouseenter(function(){
       $('.menu span').css({
           borderBottomColor:'rgba(225,225,225,.5)',
           transition:'all 0.3s'
       });
    });
    $('.menu li').mouseleave(function(){
       $('.menu span').css({
           borderBottomColor:'rgba(100,0,0,.5)',
           transition:'all 0.3s'
       });
    });
});