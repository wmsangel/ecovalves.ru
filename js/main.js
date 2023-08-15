$(function (){
    var body = $("html, body");

    body.on('click', '.js-mobile-menu-btn', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('is-touched')) {
            $('.js-mobile-menu-btn').addClass('mobile-menu-btn--opened');
            $('.js-mobile-menu').addClass('categories-list--opened');
            $('.js-mobile-header-info').addClass('header-info-row--opened');

            setTimeout(function (e) {
                $('.js-mobile-menu-btn').addClass('is-touched')
            }, 300)
        } else {
            $('.js-mobile-menu-btn').removeClass('mobile-menu-btn--opened');
            $('.js-mobile-menu').removeClass('categories-list--opened');
            $('.js-mobile-header-info').removeClass('header-info-row--opened');

            setTimeout(function (e) {
                $('.js-mobile-menu-btn').removeClass('is-touched')
            }, 300)
        }
    })

    if ($('.js-hero-slider').length) {
        const swiper = new Swiper('.js-hero-slider', {
            loop: true,
            autoplay: {
                delay: 3000,
            },
            navigation: {
                nextEl: '.js-hero-slider .swiper-button-next',
                prevEl: '.js-hero-slider .swiper-button-prev',
            },
            pagination: {
                el: '.js-hero-slider .swiper-pagination',
                clickable: true
            },
        });

        const swiper2 = new Swiper('.js-hero-slider-mobile', {
            loop: true,
            autoplay: {
                delay: 3000,
            },
            navigation: {
                nextEl: '.js-hero-slider-mobile .swiper-button-next',
                prevEl: '.js-hero-slider-mobile .swiper-button-prev',
            },
            pagination: {
                el: '.js-hero-slider-mobile .swiper-pagination',
                clickable: true
            },
        });
    }

    if ($('.js-slider-brands').length) {
        const swiper = new Swiper('.js-slider-brands', {
            loop: true,
            slidesPerView: 6,
            navigation: {
                nextEl: '.js-slider-brands-next.swiper-button-next',
                prevEl: '.js-slider-brands-prev.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 4,
                },
                998: {
                    slidesPerView: 6,
                }
            }

        });
    }

    $('.js-files').on('change', function (e) {
        var files = this.files;
        if (files.length) {
            $(this).next('.js-files-list').text(files[0].name)
        }
    })

    // CATEGORIES
    $('body').on('click', '.js-categories-dropdown-link', function (e) {
        e.preventDefault();
        $(this).toggleClass('is-opened')
    })

    // PRODUCT
    if ($('.js-product-gallery-thumbs').length) {
        var galleryThumbs = new Swiper('.js-product-gallery-thumbs', {
            navigation: {
                nextEl: '.js-product-gallery-thumbs-next',
                prevEl: '.js-product-gallery-thumbs-prev',
            },
            spaceBetween: 10,
            slidesPerView: 4,
            loop: true,
            // freeMode: true,
            // watchSlidesVisibility: true,
            // watchSlidesProgress: true,
        });
    }

    if ($('.js-product-gallery').length) {
        var galleryTop = new Swiper('.js-product-gallery', {
            slidesPerView: 1,
            loop: true,
            thumbs: {
                swiper: galleryThumbs
            }
        });
    }

    if ($('.js-product-related').length) {
        var galleryTop = new Swiper('.js-product-related', {
            slidesPerView: 4,
            spaceBetween: 20,
            autoplay: {
                delay: 3000,
            },
            navigation: {
                nextEl: '.js-product-related-next.swiper-button-next',
                prevEl: '.js-product-related-prev.swiper-button-prev',
            },
            pagination: {
                el: '.js-product-related .swiper-pagination',
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 2,
                },
                998: {
                    slidesPerView: 4,
                }
            }
        });
    }

    // FANCYBOX
    if ($('[data-fancybox]').length) {
        Fancybox.bind("[data-fancybox]", {
            // Your custom options
        });
    }


    // TABS
    body.on('click', '.js-tab-link', function (e) {
        e.preventDefault();
        let tabID = $(this).data('tab')
        if (!$(this).hasClass('product-tab__link--selected')) {
            $('.js-tab-link').removeClass('product-tab__link--selected');
            $('.js-tab-content').removeClass('product-tab-content--selected');

            $('.js-tab-link[data-tab="'+tabID+'"]').addClass('product-tab__link--selected');
            $('.js-tab-content[data-tab="'+tabID+'"]').addClass('product-tab-content--selected');
        }
    })

    // POPUP
    function openPopup(id,size) {
        body.addClass('is-popup-opened');
        $('[data-popup-id="'+id+'"]').addClass('is-popup-opened').data('popup-size',size);
    }
    function closePopup() {
        body.removeClass('is-popup-opened');
        $('.js-popup').removeClass('is-popup-opened').data('popup-size','');
    }
    body.on('click', '.js-popup-btn', function (e) {
        let popupId = $(this).data('popup-id');
        let popupSize = $(this).data('size');
        openPopup(popupId,popupSize);
    })
    body.on('click', '.js-popup-close', function (e) {
        closePopup()
    });
    $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            closePopup()
        }
    });
})