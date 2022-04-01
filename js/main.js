btn = document.getElementById("totop");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
