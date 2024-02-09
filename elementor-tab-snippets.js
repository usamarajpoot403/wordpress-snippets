document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {

// Get the tab title element with the desired value
var tabTitleElement = document.querySelector('.elementor-tab-title[data-tab="3"]'); // Replace "1" with the desired tab number

// Check if the tab title element exists
if (tabTitleElement) {
    // Simulate a click on the tab title to activate it
    tabTitleElement.click();

    // Get the corresponding tab content element
    var tabContentId = tabTitleElement.getAttribute('aria-controls');
    var tabContentElement = document.getElementById(tabContentId);

    // Check if the tab content element exists
    if (tabContentElement) {
        // Remove the 'elementor-active' class from all tab content elements
        var allTabContentElements = document.querySelectorAll('.elementor-tab-content');
        allTabContentElements.forEach(function(element) {
            element.classList.remove('elementor-active');
        });

        // Add the 'elementor-active' class to the selected tab content element
        tabContentElement.classList.add('elementor-active');
    }
}
				
		
		
    }, 1000); // 1000 milliseconds (adjust if needed)
});