/// <reference path="ref.d.ts" />

namespace nav {

    export function ClearActive() {
        jQuery('.nav li').each(function (index, elem) {
            jQuery(elem).removeClass('active');
        });
    }

    export function SetActive(selector: string) {
        ClearActive();
        jQuery(selector).addClass('active');
    }

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
}

namespace tools {
    export function GetScreenWidth() {
        return document.body.clientWidth;
    }
}