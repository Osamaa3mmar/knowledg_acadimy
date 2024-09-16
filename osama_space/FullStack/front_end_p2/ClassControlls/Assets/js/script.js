var btn=document.querySelector(".drop-btn");
var drop=document.querySelector(".drop-down-items");

function animation(){
    drop.classList.toggle("animation");
}

btn.onclick=animation;