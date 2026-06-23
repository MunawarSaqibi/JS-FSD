// let btn=document.querySelector("button")
// btn.addEventListener("click",function(){
//     console.log("Button was Clicked!")
//     alert("You clicked me!")
// })

// let button=document.querySelector(".mybtn")
// button.addEventListener("click",function()
// {
//     console.log("First Fuction")
// }
// )
// button.addEventListener("click",function(){
//     console.log("Second Function")
// })

// let para=document.querySelector("p")
// let count=0;
// para.addEventListener("click",function(){
//     count++;
//     para.innerText=`you clicked me ${count} times`;
// });


// let box=document.querySelector(".box")
// box.addEventListener("mouseenter",function(){
//     box.style.backgroundColor="yellow"
//     console.log("Mouse Entered!")
// })

// box.addEventListener("mouseleave",function(){
//     box.style.backgroundColor="white"
//     console.log("Mouse left!")
// });


// let hideBtn=document.querySelector("#hideBtn")
// let content=document.querySelector("#content")

// hideBtn.addEventListener("click", function(){
//     if (content.style.display==="none") {
//         content.style.display="block";
//         hideBtn.innerText="Hide";
        
//     } else {
//         content.style.display="none"
//         hideBtn.innerText="show"
//     }
// });

// let heading=document.querySelector("h1")
// heading.addEventListener("dblclick",function(){
//     heading.innerText="You double-clicked me!";
//     heading.style.color="red";
// })

// let card=document.querySelector(".card")
// card.addEventListener("mouseenter",function(){
//     card.style.transform="scale(1.1)"
//     card.style.boxShadow="0 10px 30px rgba(0,0,0,3)";
// });

// card.addEventListener("mouseleave",function(){
//     card.style.transform="scale(1)"
//     card.style.boxShadow="0 2px 5px rgba(0,0,0,0.1)";
// })

let heading1=document.querySelector("h1")
let heading2=document.querySelector("h2")
let btn=document.querySelectorAll("button")

function changeColor(){
    this.style.backgroundColor="lightblue";
    console.log(this.innerText+ "was clicked!")
}

heading1.addEventListener("click",changeColor())
heading2.addEventListener("click",changeColor())
btn.addEventListener("click",changeColor())





