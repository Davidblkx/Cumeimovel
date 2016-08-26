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

        SetActive('.nav-home');

        jQuery('.main-navbar .nav li a').click(function (obj) {
            ClearActive();
            jQuery(obj.currentTarget).parent().addClass('active');
        });
    });
}

namespace tools {
    export function GetScreenWidth() {
        return document.body.clientWidth;
    }
}