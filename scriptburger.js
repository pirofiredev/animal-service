const burgerpopup = document.querySelector(".burgermenu-popup");
let burgerclosebtn = document.querySelector("#burgerclose");
let burgeropenbtn = document.querySelector("#burgeropen");


burgeropenbtn.addEventListener("click",()=>{
        burgerpopup.style.display = "block";
        burgerclosebtn.style.display = "block";
        burgeropenbtn.style.display = "none";
});

burgerclosebtn.addEventListener("click",()=>{
        burgerpopup.style.display = "none";
        burgeropenbtn.style.display = "block";
        burgerclosebtn.style.display = "none";
});