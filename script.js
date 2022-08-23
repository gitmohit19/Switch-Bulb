let btn = document.getElementById('toggleBtn');
let bulb = document.getElementById('bulb');

btn.addEventListener('click', toggleBulb);


function toggleBulb(e) {
 if(btn.textContent.includes('On')){
    bulb.src ="https://i.pinimg.com/736x/9d/8c/d0/9d8cd0de1fdf89406909485b66f80328.jpg"
   btn.textContent="Turn-Off"; 
 }else{
    bulb.src="https://media.istockphoto.com/photos/light-bulb-concept-picture-id502789173?k=20&m=502789173&s=612x612&w=0&h=_KNmNurJo_CM6deFLJ4ptlyJNy_UFjPVloSm6Rreoq4=";
    btn.textContent="Turn-On"; 

 }
}