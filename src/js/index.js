const wrapCont = document.querySelectorAll(".wrapper > div");

wrapCont.forEach((ele, key, parent) => {
  function handleWrap() {
    console.log(ele.children);
  }

  ele.addEventListener("click", handleWrap);
});

console.log(wrapCont);
