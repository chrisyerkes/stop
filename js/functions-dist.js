"use strict";function addClassOnScroll(){window.addEventListener("scroll",(function(){window.scrollY>0?document.body.classList.add("scrolled"):document.body.classList.remove("scrolled")}))}addClassOnScroll(),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".navbar-nav > .nav-item").forEach((function(e){e.addEventListener("mouseenter",(function(){var t=e.querySelector(":scope > .sub-menu");if(t){var n=e.offsetLeft+14;t.style.paddingLeft="".concat(n,"px")}}))})),document.querySelectorAll("a[data-link]").forEach((function(e){e.addEventListener("mouseover",(function(){var e=document.querySelector(".card.active");e&&e.classList.remove("active");var t=this.getAttribute("data-link"),n=document.querySelector('.card[data-nav-target="'.concat(t,'"]'));n&&n.classList.add("active")}))}))}));
//# sourceMappingURL=functions-dist.js.map