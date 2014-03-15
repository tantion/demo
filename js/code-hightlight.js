(function ($) {
    if (!window.hljs) {
        throw new Error('require hightlight.js');
    }

    var $scripts = $('.script-code');

    // 异步执行
    if (window.async) {
        async.each($scripts, function (script, callback) {
            var $code = $(script),
                $target = $($code.data('render'));

            $target.html($.trim($code.html()));

            callback();
        }, function () {
            hljs.initHighlightingOnLoad();
        });
    }
    // 同步执行
    else {
        $scripts.each(function (key, script) {
            var $code = $(script),
                $target = $($code.data('render'));

            $target.html($code.html());
        });
        hljs.initHighlightingOnLoad();
    }
})(jQuery);
