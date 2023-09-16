const lastsq=document.querySelector("#last");
console.log(lastsq);

const boxes=document.querySelectorAll(".box");
console.log(boxes);

let clickOrder=[];





//adding event listener to each box
//iterating over the array of box and adding event listner to each one of them
boxes.forEach((box,index)=>{

    box.addEventListener('click',()=>{
        let h=false;
        
            console.log(index,box);
            clickOrder.push(index);//pushing the element to the array
            box.style.backgroundColor= 'orange';
            h=true;
        
          if(h)
          {
            setTimeout(()=>{
                box.style.backgroundColor= 'blue';
            },1800);
            h=false;
          }
    });

       
    });
//Dropdown menu on clicking the icon

const MenuBtn=document.querySelector(".btn");
console.log(MenuBtn);

const bar=document.querySelector(".nav");
console.log(bar);

const navi=document.querySelector(".content");
console.log(navi);

const yam=document.querySelectorAll(".navi");

//adding event Listner to button
let cross=document.createElement('div');
cross.innerHTML="&#10060";

// getting the viewport width
const viewportWidth = window.innerWidth;
console.log(viewportWidth);


MenuBtn.addEventListener("click",()=>{
   navi.style.scale=1;
console.log("done");
bar.appendChild(cross);
MenuBtn.style.scale=0;
bar.style.height='6em';
// yam.style.scale=1;
bar.style.fontSize='20px';
console.log(navi);
});

let good=false;

// I have fixed the issue that the menu bar goes after the width of the page is increased but since
// The data which is shared by the innnerWidth method is not simultaneous it is requires to refresh the page so that it reads
// the correct viewport width 

function close()
{
   
    bar.style.height='2em';
    if(viewportWidth<852)
    {
    MenuBtn.style.scale=1;
    navi.style.scale=0;
    console.log("hello");
    }
    else{
        MenuBtn.style.scale=0;
        navi.style.scale=1;
        console.log("More width so menu icon not displayed");
    }
   good=true;
    bar.removeChild(cross);
}

cross.addEventListener("click",close);

// if(good)
// {
//     if(viewportWidth<800)
//     {
//     MenuBtn.style.scale=1;
//     navi.style.scale=0;
//     console.log("hello");
    
//     }
//     else{
//         MenuBtn.style.scale=0;
//         navi.style.scale=1;
//         console.log("More width so menu icon not displayed");
//     }

// }
