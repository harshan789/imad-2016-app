console.log('Loaded!');
//change the text of the main-text div
var element=document.getelementById('main-text');


element.innerHTML='new value';

//move image
var img=document.getElementById('img');
img.onclick=function(){
    img.style.marginleft='100pix';
};