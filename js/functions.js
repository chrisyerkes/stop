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

	// Select all links with a 'data-link' attribute
	const cardLinks = document.querySelectorAll('a[data-link]');

	cardLinks.forEach((link) => {
		link.addEventListener('mouseover', function () {
			// Find the currently active '.stop-gray-card' and remove the 'active' class
			const currentActiveCard = document.querySelector(
				'.stop-gray-card.active'
			);
			if (currentActiveCard) {
				currentActiveCard.classList.remove('active');
			}

			// Get the 'data-link' value of the hovered link
			const targetId = this.getAttribute('data-link');

			// Find the '.stop-gray-card' that corresponds to the 'data-nav-target' and add 'active' class
			const targetCard = document.querySelector(
				`.stop-gray-card[data-nav-target="${targetId}"]`
			);
			if (targetCard) {
				targetCard.classList.add('active');
			}
		});
	});
});
