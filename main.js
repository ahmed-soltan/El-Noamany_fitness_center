let openBtn=document.getElementById("open-btn")
let closeBtn=document.getElementById("close-btn")
let menu=document.querySelector(".Responsive")
let myForm=document.querySelector("form")
let message=document.querySelector(".message")

openBtn.addEventListener("click",()=>{
    menu.style.transform="translate(0)"
})
closeBtn.addEventListener("click",()=>{
    menu.style.transform="translate(550px)"
})
myForm.addEventListener("submit",(e)=>{
   e.preventDefault();
   let text=document.createElement("span")
   text.innerHTML="The Message Has Been Sent Successfully"
   console.log(text.innerHTML)  
   message.appendChild(text) 
})