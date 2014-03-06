(function ($) {

    function log (elem, msgs, line) {
        var $elem = $(elem),
            msg = '',
            html = $.trim($elem.html());

        msg = $.map(msgs, function (m) {
            return JSON.stringify(m);
        }).join(' ');

        if (html) {
            html = html + (line ? '\n' : '') + msg;
        } else {
            html = msg;
        }

        $elem.html(html);
    }

    $.fn.logln = function () {
        var msgs = [].slice.call(arguments, 0);
        return this.each(function () {
            log(this, msgs, '\n');
        });
    };

    $.fn.log = function () {
        var msgs = [].slice.call(arguments, 0);
        return this.each(function () {
            log(this, msgs);
        });
    };

})(jQuery);
