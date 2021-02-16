var contentslide=document.querySelector('.content');
var slideimage=document.querySelectorAll('.content img');

var count=slideimage.length;
var current =0;

//button previous
var btnnext=document.querySelector('.slide-next');

//btnnext.onclick = function(){};
//button next
var btnprev=document.querySelector('.slide-prev');

btnnext.addEventListener('click' , ()=>{
    nextcheck();
    
    resttimer()
})
btnprev.addEventListener('click' , prevslide)
//auto play 
function autoplay(){
    nextcheck();
}
//test setinterval 
var timer=setInterval(autoplay, 3000);
//restart timer
function resttimer(){
    //rest timer 
    clearInterval(timer);
    //started again 
    timer=setInterval(autoplay, 3000);
}

//function check
var width=slideimage[0].clientWidth;
console.log(width);
// next slide check
function nextcheck(){
      
    if(current>=count-1){
        current=0;
        contentslide.style.transition='none';
        slide();
        
    }
    else{
        
        contentslide.style.transition='transform 0.3s linear';
        current++;
        
        slide();
      
        
    }
    
}
//prev slide check 
function prevslide(){
    if(current <= 0){
        current=count-1;
        contentslide.style.transition='none';
        slide();
        
    }
    else{
        contentslide.style.transition='transform 0.3s linear';
        current--;
        
        slide();
        console.log("--"+current);
        
    }
}
//function slide 

function slide(){
    
    contentslide.style.transform="translateX(" + (- width * current)+"px )";
    
}
/*
contentslide.addEventListener('transitionend',()=>{
    if(contentslide[current].id==='first-img'){
        contentslide.style.transition="none";
    }
    if(contentslide[current].id==='last-img'){
        contentslide.style.transition='none';
    }
})
*/

