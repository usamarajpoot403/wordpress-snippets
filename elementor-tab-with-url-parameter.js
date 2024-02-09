jQuery(document).ready(function ($) {
    try {
        var url = new URL(document.location.href),
            tab = parseInt(url.searchParams.get('tab'));

        if (tab) {
            var $title = $('#elementor-tab-title-' + tab),
                $content = $('#elementor-tab-content-' + tab),
                tabIndex = $title.data('tab');
            
            if (tabIndex > 1) {
                var $firstT = $title.siblings('[data-tab="1"]'),
                    $firstC = $content.siblings('[data-tab="1"]');

                $firstC.attr('data-tab', -1);
                $firstT.attr('data-tab', -1);

                $title.attr('data-tab', 1);
                $content.attr('data-tab', 1);

                elementorFrontend.on('components:init', function () {
                    $firstT.attr('data-tab', 1);
                    $firstC.attr('data-tab', 1);
                    $title.attr('data-tab', tabIndex);
                    $content.attr('data-tab', tabIndex);
                })
            }
        }

        $('.elementor-tab-title').on('click', function () {
            var id = this.id.replace('elementor-tab-title-', ''),
                text = this.innerText.trim();

            url.searchParams.set('tab', id);
            url.searchParams.set('t', text);

            window.history.pushState(null, document.title + ' / ' + text, url.toString());
        });
    } catch (e) {}
});