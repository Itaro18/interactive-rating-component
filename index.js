const submitBtn=document.getElementById("submit-btn")
const rateDisaply=document.querySelector(".value")
const ratingCard=document.getElementById("primary")
const thankCard=document.getElementById("secondary")
const ratingDiv=document.querySelector(".rating")

ratingDiv.addEventListener("click",function(event){
    if(event.target && event.target.tagName==="BUTTON" ){
        rateDisaply.textContent= event.target.innerText
    }
})

submitBtn.addEventListener("click",function(){
    
    ratingCard.classList.toggle("hidden")
    thankCard.classList.toggle("hidden")
})
