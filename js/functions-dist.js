"use strict";function addClassOnScroll(){window.addEventListener("scroll",(function(){window.scrollY>0?document.body.classList.add("scrolled"):document.body.classList.remove("scrolled")}))}addClassOnScroll(),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".navbar-nav > .nav-item").forEach((function(e){e.addEventListener("mouseenter",(function(){var t=e.querySelector(":scope > .sub-menu");if(t){var a=e.offsetLeft+14;t.style.paddingLeft="".concat(a,"px")}}))}));var e=document.querySelectorAll("a[data-link]"),t=document.querySelector("#navbarNav"),a=document.querySelector(".card.active");e.forEach((function(e){e.addEventListener("mouseover",(function(){var e=document.querySelector(".card.active");e&&e.classList.remove("active");var t=this.getAttribute("data-link"),a=document.querySelector('.card[data-nav-target="'.concat(t,'"]'));a&&a.classList.add("active")})),e.addEventListener("mouseleave",(function(){var e=document.querySelector(".card.active");e&&e.classList.remove("active"),a&&a.classList.add("active")}))})),t.addEventListener("mouseleave",(function(){var e=document.querySelector(".card.active");e&&e.classList.remove("active"),a&&a.classList.add("active")}));var c=new Splide(".recovery-story-slider",{perPage:4,perMove:1,pagination:!1}),n=new Splide(".client-slider",{perMove:1,pagination:!1,autoWidth:!0});c.mount(),n.mount()}));
//# sourceMappingURL=functions-dist.js.map