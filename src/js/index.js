const globalNav = document.querySelectorAll(".header__nav > ul > li");

const wrapCont = document.querySelectorAll(".wrapper > div");

globalNav.forEach((e, n, p) => {
  function handleNavClick() {
    if (n === 0) {
      p[1].classList.remove("move-nav");
      p[2].classList.remove("move-nav");
      p[3].classList.remove("move-nav");
      p[0].childNodes[0].classList.add("hidden");
      p[1].childNodes[0].classList.remove("hidden");
      p[2].childNodes[0].classList.remove("hidden");
      p[3].childNodes[0].classList.remove("hidden");
      wrapCont[1].classList.remove("body__active");
      wrapCont[2].classList.remove("body__active");
      wrapCont[3].classList.remove("body__active");
    } else if (n === 1) {
      p[1].classList.add("move-nav");
      p[2].classList.remove("move-nav");
      p[3].classList.remove("move-nav");
      p[0].childNodes[0].classList.remove("hidden");
      p[1].childNodes[0].classList.add("hidden");
      p[2].childNodes[0].classList.remove("hidden");
      p[3].childNodes[0].classList.remove("hidden");
      wrapCont[1].classList.add("body__active");
      wrapCont[2].classList.remove("body__active");
      wrapCont[3].classList.remove("body__active");
    } else if (n === 2) {
      p[1].classList.add("move-nav");
      p[2].classList.add("move-nav");
      p[3].classList.remove("move-nav");
      p[0].childNodes[0].classList.remove("hidden");
      p[1].childNodes[0].classList.remove("hidden");
      p[2].childNodes[0].classList.add("hidden");
      p[3].childNodes[0].classList.remove("hidden");
      wrapCont[1].classList.add("body__active");
      wrapCont[2].classList.add("body__active");
      wrapCont[3].classList.remove("body__active");
    } else if (n === 3) {
      p[1].classList.add("move-nav");
      p[2].classList.add("move-nav");
      p[3].classList.add("move-nav");
      p[0].childNodes[0].classList.remove("hidden");
      p[1].childNodes[0].classList.remove("hidden");
      p[2].childNodes[0].classList.remove("hidden");
      p[3].childNodes[0].classList.add("hidden");
      wrapCont[1].classList.add("body__active");
      wrapCont[2].classList.add("body__active");
      wrapCont[3].classList.add("body__active");
    }
  }
  e.addEventListener("click", handleNavClick);
});
