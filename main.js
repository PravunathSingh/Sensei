import "./build.css";

const menuBtn = document.getElementById("menuBtn");
const links = document.getElementById("links");
const menuIcon = document.getElementById("menuIcon");

let showState = false;

links.classList.remove("block");
links.classList.add("hidden");

menuBtn.addEventListener("click", () => {
  showState = !showState;
  // console.log(showState);

  if (showState) {
    links.classList.add("block");
    links.classList.remove("hidden");
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    links.classList.remove("block");
    links.classList.add("hidden");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
});
