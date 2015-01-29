if(typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    }
}

if (jQuery) {(function($) {
    return {
        setup: function() {

            $('.ecourt-template').find('.close-side-nav').on('click', function() {
                $('.ecourt-template').toggleClass('toggle-side-nav');
            });

            if($(window).width() <= 1024) {
                $('.ecourt-template').addClass('toggle-side-nav');
            } else {
                $('.ecourt-template').removeClass('toggle-side-nav');
            }

            $(window).on('resize', function() {
                if($(window).width() <= 1024) {
                    $('.ecourt-template').addClass('toggle-side-nav');
                } else {
                    $('.ecourt-template').removeClass('toggle-side-nav');
                }
            });
//
//            if ($('.ecourt-template').length > 0) {
//                $('.jtux-menu').not('section .jtux-menu').remove();
//            }

            $('.js-show-demo-view').not('.top-button').on('click', function(e) {
                e.preventDefault();
                $('.demo-view').hide();
                $('#' + $(this).attr('data-show')).show();
                $('html, body').animate({ scrollTop: $('#' + $(this).attr('data-show')).offset().top - 60 }, 500);
            });
        }
    }
})(jQuery).setup();}
