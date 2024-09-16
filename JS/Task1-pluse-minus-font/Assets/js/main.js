var currentValue=document.querySelector(".current");
var plusBtn=document.querySelector(".plus");
var minusBtn=document.querySelector(".minus");
var username=document.querySelector(".name");
var work=document.querySelector(".work");
var value=20;
console.log(currentValue,plusBtn,minusBtn,username,work);

function update(){
    currentValue.textContent="current : "+value;
    plusBtn.textContent=value+1;
    minusBtn.textContent=value-1;
    username.style="font-size:"+value+"px;";
    work.style="font-size:"+value+"px;";
}

function increment(){
    value++;
    update();
}
function decrement(){
    value--;
    update();
}
plusBtn.onclick=increment;
minusBtn.onclick=decrement;



update();