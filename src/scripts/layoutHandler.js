let layoutHandler;

(function($) {
    'use strict';
    let LayoutHandler = function() {
        let self = this;

        this.ready = function() {
            this.handleDOM();
            this.handleEvents();
        };

        this.handleDOM = function() {

        };

        this.handleEvents = function() {

        };
    };

    layoutHandler = new LayoutHandler();

    $(document).ready(function() {
        layoutHandler.ready();


    });
})(jQuery);
