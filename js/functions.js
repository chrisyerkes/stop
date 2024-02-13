function addClassOnScroll() {
	// Listen for the scroll event on the window
	window.addEventListener('scroll', function () {
		// Check if the page has been scrolled down from the top
		if (window.scrollY > 0) {
			// If scrolled down, add the "scrolled" class to the <body> tag
			document.body.classList.add('scrolled');
		} else {
			// If scrolled back to the top, remove the "scrolled" class from the <body> tag
			document.body.classList.remove('scrolled');
		}
	});
}

// Call the function to enable the functionality
addClassOnScroll();

document.addEventListener('DOMContentLoaded', function () {
	const navItems = document.querySelectorAll('.navbar-nav > .nav-item');

	navItems.forEach(function (navItem) {
		navItem.addEventListener('mouseenter', function () {
			const subMenu = navItem.querySelector(':scope > .sub-menu');
			if (subMenu) {
				const parentOffsetLeft = navItem.offsetLeft + 14;
				subMenu.style.paddingLeft = `${parentOffsetLeft}px`;
			}
		});
	});
});
