var body=document.querySelector("body")
var curs=document.querySelector("#curs")
body.addEventListener("mousemove",function(det){
    curs.style.left = det.clientX + "px";
    curs.style.top = det.clientY + "px";

})
var box =document.querySelector("#box")
box.addEventListener("")