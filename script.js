// console.log("nav");
const nav_links = document.querySelector(".nav-links");
const menubtn_open = document.querySelector("#menu-btn_open");
const menubtn_close = document.querySelector("#meny-btn_close");
// console.log(nav_links, menubtn_open, menubtn_close);
  menuBtn_open.onclick=()=> toggler();
  menuBtn_close.onclick=()=> toggler();
  function toggler() {
  nav_links.classList.toggle("active");
  menuBtn_open.classList.toggle("close");
  menuBtn_close.classList.toggle("open");
  }
