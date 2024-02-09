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
