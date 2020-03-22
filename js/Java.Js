const trasigknapp = document.getElementById("Trasig")
console.log(trasigknapp)
let trasigpopup=document.getElementById("trasigpopup")
trasigknapp.addEventListener("click", function(){
    
    trasigpopup.classList.add("open")
})
const closetrasig = document.getElementById("close")
closetrasig.addEventListener("click", function(){
    trasigpopup.classList.remove("open")

})
