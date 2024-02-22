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
	const navContainer = document.querySelector('#navbarNav'); // Ensure this selector matches your nav container
	let originalActiveCard = document.querySelector('.card.active'); // Store the original active card

	cardLinks.forEach((link) => {
		link.addEventListener('mouseover', function () {
			// Find the currently active '.card' and remove the 'active' class
			const currentActiveCard = document.querySelector('.card.active');
			if (currentActiveCard) {
				currentActiveCard.classList.remove('active');
			}

			// Get the 'data-link' value of the hovered link
			const targetId = this.getAttribute('data-link');

			// Find the '.card' that corresponds to the 'data-nav-target' and add 'active' class
			const targetCard = document.querySelector(
				`.card[data-nav-target="${targetId}"]`
			);
			if (targetCard) {
				targetCard.classList.add('active');
			}

			// Update the originalActiveCard reference to the new active card
			// originalActiveCard = document.querySelector('.card.active');
		});
		link.addEventListener('mouseleave', function () {
			// Remove 'active' class from any currently active card
			const currentActiveCard = document.querySelector('.card.active');
			if (currentActiveCard) {
				currentActiveCard.classList.remove('active');
			}

			// Restore the 'active' class to the original active card
			if (originalActiveCard) {
				originalActiveCard.classList.add('active');
			}
		});
	});

	// Mouseleave event to restore the original '.active' card when hovering off the nav
	navContainer.addEventListener('mouseleave', function () {
		// Remove 'active' class from any currently active card
		const currentActiveCard = document.querySelector('.card.active');
		if (currentActiveCard) {
			currentActiveCard.classList.remove('active');
		}

		// Restore the 'active' class to the original active card
		if (originalActiveCard) {
			originalActiveCard.classList.add('active');
		}
	});

	const recoverySplide = new Splide('.recovery-story-slider', {
		perPage: 4,
		perMove: 1,
		pagination: false,
	});
	const clientSplide = new Splide('.client-slider', {
		// perPage: 6,
		perMove: 1,
		pagination: false,
		autoWidth: true,
		type: 'loop',
	});
	recoverySplide.mount();
	clientSplide.mount();
});
