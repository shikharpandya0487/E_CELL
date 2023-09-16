//link of the resource I refered https://youtu.be/42M9esAvAEU?si=0ourvp2ttzSpWaAk

//I have learned this from yt and implemented it 
let variable=document.querySelector(".role");
console.log(variable);

      var typeData = new Typed(variable, {
        strings: [
          "Full Stack Developer",
          "Web Developer",
          "E-CELL Web Team Member",
          "Backend Developer",
          "Coder",
        ],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 700,
      });
    

     

   //adding the button to which the site will redirect to insta page
   //I don't have my account on Insta
   
      let butn=document.getElementById("btn1");
      butn.addEventListener("click",()=>{
          alert("Your Document will be downloaded");
        butn.click();
      });