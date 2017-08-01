"use strict";
!function (t) {
    t.fn.addWidthClass = function (i) {
        for (var e = t.extend({breakpoints: [200, 400, 600, 1e3, 1200]}, i), n = "", r = e.breakpoints.length - 1; r >= 0; r--)n += " width-lt-" + e.breakpoints[r] + " width-gt-" + e.breakpoints[r];
        return this.each(function () {
            for (var t = jQuery(this), i = "", r = e.breakpoints.length - 1; r >= 0; r--)i += t.width() <= e.breakpoints[r] ? " width-lt-" + e.breakpoints[r] : " width-gt-" + e.breakpoints[r];
            t.addClass(i), jQuery(window).on("resize", function () {
                i = "", t.removeClass(n);
                for (var r = e.breakpoints.length - 1; r >= 0; r--)i += t.width() <= e.breakpoints[r] ? " width-lt-" + e.breakpoints[r] : " width-gt-" + e.breakpoints[r];
                t.addClass(i)
            })
        })
    }
}(jQuery);