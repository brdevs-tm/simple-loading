/*DARK-LIGHT*/
let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "images/light.svg";
  } else {
    this.firstElementChild.src = "images/dark.svg";
  }
  document.body.classList.toggle("dark");
});

/*SCROLL*/
window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backtop.style.bottom = "50px";
  } else {
    backtop.style.bottom = "-50px";
  }
}

// function openNavbar() {
//   document.getElementById("navbar-responsive").style.left = "0";
//   // document.getElementById("navbar-responsive").style.top = "0";
// }
// function closeNavbar() {
//   document.getElementById("navbar-responsive").style.left = "-100%";
//   // document.getElementById("navbar-responsive").style.top = "-100%";
// }

// document.getElementById("navbar-open").addEventListener("click", openNavbar);
// document.getElementById("navbar-close").addEventListener("click", closeNavbar);

window.addEventListener("load", function() {
  const loader = document.getElementById("loading");
  setTimeout(function() {
    loader.classList.add("loading-complete");
    setTimeout(function() {
      loader.remove();
    }, 5000); // optional delay to allow for a smooth transition
  }, 400);
});

