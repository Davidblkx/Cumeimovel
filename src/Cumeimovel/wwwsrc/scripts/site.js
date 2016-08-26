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
        SetActive('.nav-home');
        jQuery('.main-navbar .nav li a').click(function (obj) {
            ClearActive();
            jQuery(obj.currentTarget).parent().addClass('active');
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
