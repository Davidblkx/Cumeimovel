/// <reference path="ref.d.ts" />
var nav;
(function (nav) {
    function ClearActive() {
        jQuery('.nav li').each(function (index, elem) {
            jQuery(elem).removeClass('active');
        });
    }
    nav.ClearActive = ClearActive;
    function SetActive(selector) {
        ClearActive();
        jQuery(selector).addClass('active');
    }
    nav.SetActive = SetActive;
    jQuery(document).ready(function () {
        SetActive('.z-root');
        jQuery('.main-navbar .nav li a').click(function (obj) {
            ClearActive();
            jQuery(obj.currentTarget).parent().addClass('active');
        });
        jQuery('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
})(nav || (nav = {}));
var tools;
(function (tools) {
    function GetScreenWidth() {
        return document.body.clientWidth;
    }
    tools.GetScreenWidth = GetScreenWidth;
})(tools || (tools = {}));
