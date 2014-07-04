(function () {
    var iframe = document.querySelector('#xss-iframe');
    var idoc = iframe.contentDocument;
    console.log(iframe.contentWindow.location);
    var iwin = iframe.contentWindow;
    iwin.alert(this);
    console.log(idoc.createTextNote);
})();
