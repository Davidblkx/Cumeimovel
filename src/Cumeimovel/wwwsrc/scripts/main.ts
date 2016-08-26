/// <reference path="ref.d.ts" />

namespace main {

    jQuery(document).ready(function () {

        jQuery('#home .flexslider').flexslider({
            animation: 'slide'
        });

        var maxHeight = jQuery(document).innerHeight() * 0.4;
        jQuery('#collection img').css('max-height', maxHeight);
        jQuery('#collection img').css('width', 'auto');

        jQuery('#collection .flexslider').flexslider({
            animation: 'slide',
            smoothHeight: true
        });

        jQuery('.flex-caption').css('max-width', tools.GetScreenWidth());

    });
}