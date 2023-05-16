lengthofbuttons=document.querySelectorAll(".btn-item").length
for (i=0; i<lengthofbuttons; i++){
document.querySelectorAll(".btn-item")[i].addEventListener("click",function(){
  alert("This will redirect you to another window. If you want to continue permit by pressing 'OK'.");
});
}
