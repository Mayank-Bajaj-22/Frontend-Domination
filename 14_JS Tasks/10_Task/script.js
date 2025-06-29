// 10. Show a progress bar which shows how much page has been scrolled.

const scrollBar = document.querySelector("#scroller");

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  scrollBar.style.width = scrollPercent + "%";
});
