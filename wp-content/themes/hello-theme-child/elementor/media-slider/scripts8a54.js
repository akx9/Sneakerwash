(function ($) {
    $(document).ready(function () {
        $('.media-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            infinite: false,
            dots: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        autoplay: true,
                        infinite: false,
                        dots: true,
                        autoplaySpeed: 5000,
                    },
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        autoplay: true,
                        infinite: false,
                        dots: true,
                        autoplaySpeed: 5000,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        autoplay: true,
                        infinite: false,
                        dots: true,
                        autoplaySpeed: 5000,
                    },
                }
            ]
        });

        let player = null;
        $('.media-slider__item').click(function (e) {
            e.preventDefault();
            $('.spashoes-media__modal').addClass('show');
            const vimeoId = $(this).data('vimeo-video-id');
            if (player) {
                player.destroy();
            }
            const iframe = document.querySelector('#vimeo-modal-iframe');
            player = new Vimeo.Player(iframe, {
                id: vimeoId
            });
            player.ready().then(() => {
                player.play();
            });
            player.on('ended', function () {
                if (player) {
                    player.destroy();
                }
            });
        });

        $('.spashoes-media__modal-back').click(function () {
            $('.spashoes-media__modal').removeClass('show');
            if (player) {
                player.destroy();
            }
        });

        $('.spashoes-media__modal-btn-close').click(function (e) {
            e.preventDefault();
            $('.spashoes-media__modal').removeClass('show');
            if (player) {
                player.destroy();
            }
        });

        document.body.addEventListener('keyup', (e) => {
            if (e.key === 'Escape') {
                $('.spashoes-media__modal').removeClass('show');
                if (player) {
                    player.destroy();
                }
            }
        })
    });
})(jQuery);

