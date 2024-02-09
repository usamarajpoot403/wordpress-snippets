

jQuery(document).ready(function ($) {
    // Find all heading elements (h2, h3, h4, h5, h6) within the content
    var headings = $('#content').find('h2, h3, h4, h5, h6');
    
        // Create an empty navigation list
        var navList = $('<ul class="custom-navigation"></ul>');
        
        // Loop through each heading
        headings.each(function () {
            // Get the text of the heading
            var headingText = $(this).text();
        
            // Generate a unique ID based on the heading text
            var headingId = headingText.toLowerCase().replace(/ /g, '-');
        
            // Set the generated ID to the heading element
            $(this).attr('id', headingId);
        
            // Create a list item with a link to the heading
            var listItem = $('<li><a href="#' + headingId + '">' + headingText + '</a></li>');
        
            // Append the list item to the navigation list
            navList.append(listItem);
        });
        
        // Prepend the navigation list to a container with the class 'custom-navigation-container'
        $('.custom-navigation-container').prepend(navList);
        
        // Function to update the active class based on scroll position
        function updateActiveClass() {
            var scrollPosition = $(window).scrollTop();
        
            // Loop through each heading
            headings.each(function () {
                var headingElement = $(this);
                var headingId = headingElement.attr('id');
        
                // Check if the heading is in the viewport
                if (
                    headingElement.offset().top <= scrollPosition + 10 &&
                    headingElement.offset().top + headingElement.height() > scrollPosition
                ) {
                    // Remove the "active" class from all links
                    $('.custom-navigation a').removeClass('active');
        
                    // Add the "active" class to the corresponding link
                    $('.custom-navigation a[href="#' + headingId + '"]').addClass('active');
                }
            });
        }
        
        // Update the active class on scroll
        $(window).on('scroll', function () {
            updateActiveClass();
        });
        
        // Smooth scrolling when clicking on navigation links
        $('.custom-navigation a').on('click', function (event) {
            event.preventDefault();
        
            var targetId = $(this).attr('href');
            var targetElement = $(targetId);
        
            $('html, body').stop().animate(
                {
                    scrollTop: targetElement.offset().top
                },
                800,
                function () {
                    // Callback to update the active class after the smooth scrolling is complete
                    updateActiveClass();
                }
            );
        });
    
    });
    
    
    
    <div id=”content”>
    <div class="custom-navigation-container"></div>
    </div>
    
    
    
    
    
    