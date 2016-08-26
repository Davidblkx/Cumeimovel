/// <reference path="ref.d.ts" />
var main;
(function (main) {
    jQuery(document).ready(function () {
        jQuery('#home .flexslider').flexslider({
            animation: 'slide'
        });
        var maxHeight = jQuery(document).height() * 0.3;
        jQuery('#collection img').css('max-height', maxHeight);
        jQuery('#collection img').css('width', 'auto');
        jQuery('#collection .flexslider').flexslider({
            animation: 'slide',
            smoothHeight: true
        });
        jQuery('.flex-caption').css('max-width', tools.GetScreenWidth());
        jQuery('.divide-80').on('scrollSpy:enter', function (obj) {
            console.log('enter');
        });
    });
})(main || (main = {}));
var anim;
(function (anim) {
    var sr = ScrollReveal({ reset: true });
    sr.reveal('.revealing', { duration: 2000 }, 50);
})(anim || (anim = {}));
