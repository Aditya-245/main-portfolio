var body=document.querySelector("body")
var curs=document.querySelector("#curs")
body.addEventListener("mousemove",function(det){
    curs.style.left = det.clientX + "px";
    curs.style.top = det.clientY + "px";

})
var button=document.querySelector("#feedback button")
button.addEventListener("click", function(){
       var feedback = document.querySelector("#feedback textarea").value;
       
}
)