/* Show/hide the header dropdown */
document.querySelector(".header-top-bar .service-hilfe button").addEventListener("click", () => {
  document.querySelector(".header-top-bar .service-hilfe ul").classList.toggle("dropdown-visible");
  event.stopPropagation();
}, false);

/* When clicking anywhere else, close the header dropdown */
window.addEventListener("click", () => {
    document.querySelector(".header-top-bar .service-hilfe ul").classList.remove("dropdown-visible");
  }, false);