 console.log("this is javascript");
 const wrapper=document.querySelector(".sliderwrapper");
 const menu=document.querySelectorAll(".menuitem");

 const products=[
  {
    id:1,
    title:"Air Force",
    price:119,
    colours:[
      {
        code:"black",
        img:"air.png",
      },
      {
        code:"darkblue",
        img:"air2.png",
      },
    ],
  },
  {
    id:2,
    title:"Air Jordan",
    price:149,
    colours:[
      {
        code:"lightgray",
        img:"jordan.png",
      },
      {
        code:"green",
        img:"jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colours: [
      {
        code:"lightgray",
        img:"blazer.png",
      },
      {
        code:"green",
        img:"blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colours: [
      {
        code:"black",
        img:"crater.png",
      },
      {
        code:"lightgray",
        img:"crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colours: [
      {
        code:"gray",
        img:"hippie.png",
      },
      {
        code:"black",
        img:"hippie2.png",
      },
    ],
  },
 ];

 let choosenproduct=products[0];

 const currentproductimg=document.querySelector(".productimg");
const currentproductitle=document.querySelector(".productitle");
 const currentproductprice=document.querySelector(".productprice");
 const currentproductcolours=document.querySelectorAll(".colour");
 const currentproductsizes=document.querySelectorAll(".size");

 menu.forEach((item, index) => {
    item.addEventListener("click", () => {
      //change the current slide
      wrapper.style.transform = `translateX(${-100 * index}vw)`;

      choosenproduct=products[index];
      currentproductitle.textContent=choosenproduct.title;
      currentproductprice.textContent="$"+choosenproduct.price;
      currentproductimg.src=choosenproduct.colours[0].img;
  

      currentproductcolours.forEach((colour, index) => {
        colour.style.backgroundColor = choosenproduct.colours[index].code;
      });
    });
 });

 currentproductcolours.forEach((colour,index)=>{
  colour.addEventListener("click",()=>{
        currentproductimg.src=choosenproduct.colours[index].img;
  
  });
 });

 currentproductsizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    currentproductsizes.forEach((size)=>{
      size.style.backgroundColor="white";
      size.style.color="black";
    });
    size.style.backgroundColor="black";
    size.style.color="white";
  });
 });

 const productbutton=document.querySelector(".productbutton");
 const payment=document.querySelector(".payment");
 const close=document.querySelector(".close");

 productbutton.addEventListener("click",()=>{
  payment.style.display="flex";
 })

 close.addEventListener("click",()=>{
  payment.style.display="none";
 })