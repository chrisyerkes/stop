"use strict";function addClassOnScroll(){window.addEventListener("scroll",(function(){window.scrollY>0?document.body.classList.add("scrolled"):document.body.classList.remove("scrolled")}))}("ontouchstart"in window||navigator.maxTouchPoints>0)&&(console.log("The device is touch-enabled."),document.querySelector("html").classList.add("touch-enabled")),addClassOnScroll(),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("html"),t=document.querySelectorAll(".navbar-nav > .nav-item"),c=document.querySelectorAll(".nav-item");(e.classList.contains("touch-enabled")||window.innerWidth<992)&&(c.forEach((function(e){e.querySelector(".sub-menu")&&e.classList.add("has-child")})),t.forEach((function(e){if(e.querySelector(".sub-menu")||e.querySelector(".mega-sub-menu-wrapper")){e.classList.add("has-child");var t=document.createElement("span");t.className="expand-children",e.insertBefore(t,e.firstChild),t.addEventListener("click",(function(e){e.stopPropagation(),document.querySelectorAll(".nav-item.active, .nav-item.clicked-once").forEach((function(e){e.classList.remove("active","clicked-once")}));var t=this.closest(".nav-item");t&&t.classList.add("active","clicked-once")})),e.addEventListener("click",(function(t){var a=e.classList.contains("clicked-once"),n=document.querySelectorAll(".clicked-once");c.forEach((function(e){if(e!==parent){e.classList.remove("active");var t=e.querySelector(".nav-link");t&&t.classList.remove("clicked-once")}})),a?e.classList.remove("clicked-once"):(t.preventDefault(),n.forEach((function(e){e.classList.remove("clicked-once")})),e.classList.toggle("active"),e.classList.add("clicked-once"))}))}}))),t.forEach((function(e){e.addEventListener("mouseenter",(function(){var t=e.querySelector(":scope > .sub-menu");if(t){var c=e.offsetLeft+14;t.style.paddingLeft="".concat(c,"px")}}))}));var a=document.querySelectorAll("a[data-link]"),n=document.querySelector("#navbarNav"),o=document.querySelector(".card.active");a.forEach((function(e){e.addEventListener("mouseover",(function(){var e=document.querySelector(".card.active");e&&e.classList.remove("active");var t=this.getAttribute("data-link"),c=document.querySelector('.card[data-nav-target="'.concat(t,'"]'));c&&c.classList.add("active")})),e.addEventListener("mouseleave",(function(){var e=document.querySelector(".card.active");e&&e.classList.remove("active"),o&&o.classList.add("active")}))})),n.addEventListener("mouseleave",(function(){var e=document.querySelector(".card.active");e&&e.classList.remove("active"),o&&o.classList.add("active")})),document.querySelectorAll(".footer-nav .nav-item > .sub-menu").forEach((function(e){var t=e.parentNode,c=t.querySelector(".nav-link");t.classList.add("has-child");var a=document.createElement("span");a.classList.add("expand-children"),t.prepend(a),c.addEventListener("click",(function(e){var a=c.classList.contains("clicked-once");document.querySelectorAll(".footer-nav .nav-item").forEach((function(e){if(e!==t){e.classList.remove("active");var c=e.querySelector(".nav-link");c&&c.classList.remove("clicked-once")}})),a?c.classList.remove("clicked-once"):(e.preventDefault(),t.classList.toggle("active"),c.classList.add("clicked-once"))}))}));var i=new Splide(".recovery-story-slider",{perPage:4,perMove:1,pagination:!1}),s=new Splide(".client-slider",{perMove:1,pagination:!1,autoWidth:!0,type:"loop"}),r=new Splide(".client-quote-slider",{perPage:1,perMove:1,pagination:!1,type:"loop"});i.mount(),s.mount(),r.mount()}));
//# sourceMappingURL=functions-dist.js.map