(function ($) {

    function log (elem, msg) {
        $(elem).html(JSON.stringify(msg));
    }

    $.fn.log = function (msg) {
        this.each(function () {
            log(this, msg);
        });
    };

})(jQuery);
