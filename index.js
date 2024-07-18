console.log("Hello world");


//local
document.addEventListener("DOMContentLoaded", ()=>{
  const local = document.querySelector(".button1");
  local.addEventListener("click",()=>{
    document.querySelector(".eti1").innerHTML = "Local";
    document.querySelector("#fir").style.display = "grid"

      document.querySelector("#sec").style.display = "none";
    
    
  })


//continental
const continental = document.querySelector(".button2");
continental.addEventListener("click",()=>{
  document.querySelector(".eti1").innerHTML = "Continental";
  if (document.querySelector("#sec").style.display === "grid"){
    document.querySelector("#fir").style.display = "none";
    document.querySelector("#sec").style.display = "grid";
    console.log("Checked");
  }else{
    document.querySelector("#fir").style.display = "none";
    document.querySelector("#sec").style.display = "grid";
    console.log("Not Checked");
  }
  

  
})
})