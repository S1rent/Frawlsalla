"use strict";
$(function() {
    var $slider = $('#content-image-slider');
    var $slideContainer = $('.content-slides', $slider);
    var $slides = $('.content-slide', $slider);
    var currentSlide = 1;
    var indicators = document.getElementsByClassName("dot");
    var contentWidth = 1024;

    var interval;

    function startSlider() {
        if(currentSlide === 1){
            indicators[0].className += " active";
        }
        interval = setInterval(function() {
            $slideContainer.animate(
                    { 'margin-left': '-=' + contentWidth }, 
                    1000, 
                    function() {
                        for (var i = 0; i < indicators.length; i++) {
                            indicators[i].className = indicators[i].className.replace(" active", "");
                        }
                        indicators[currentSlide].className += " active";
                        if (++currentSlide === $slides.length) {
                            setTimeout(function () {
                                currentSlide = 1;
                                $slideContainer.css('margin-left', 0);
                                for (i = 0; i < indicators.length; i++) {
                                    indicators[i].className = indicators[i].className.replace(" active", "");
                                }
                                indicators[0].className += " active";
                            }, 1500);
                        }
                    }
                );
        }, 3000);
    }
    startSlider();
});
