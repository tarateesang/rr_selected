var bLazy = new Blazy({
    offset: -100,
    breakpoints: [{
        width: 420,
        src: 'data-src-small'
    }],
    success: function(element) {
        setTimeout(function() {
            // We want to remove the loader gif now.
            // First we find the parent container
            // then we remove the "loading" class which holds the loader image
            var parent = element.parentNode;
            parent.className = parent.className.replace(/\bloading\b/, '');
        }, 200);
    }
});

var scroll = new SmoothScroll('a[href*="#"]');