/**
 * Custom example that imports JQuery and adds a click handler
 */

var Sample = (function(){

    var importScript = (function (oHead) {

        function loadError (oError) {
            throw new URIError("The script " + oError.target.src + " is not accessible.");
        }

        return function (sSrc, fOnload) {
            var oScript = document.createElement("script");
            oScript.type = "text\/javascript";
            oScript.onerror = loadError;
            if (fOnload) { oScript.onload = fOnload; }
            oHead.appendChild(oScript);
            oScript.src = sSrc;
        }

    })(document.head || document.getElementsByTagName("head")[0]);

    var addClickHandler = function() {
        $(document).on('click', '.sample-button', function() {
            alert('You clicked the button');
        });
    };

    if(typeof $ == 'undefined') {
        importScript('https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js', function() {
            addClickHandler();
        });
    } else {
        addClickHandler();
    }
})();