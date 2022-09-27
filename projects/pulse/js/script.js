// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         //автоскрол
//         autoplay: true,
//         autoplaySpeed: 2000,
//         //=========тускнуть
//         fade: true,
//         cssEase: 'linear',
//         //======= менять стрелки перелистывания
//         prevArrow: "<button type='button' class='slick-prev'><img src='../img/chevron-left-solid.png'></button>",
//         nextArrow: "<button type='button' class='slick-next'><img src='../img/chevron-right-solid.png'></button>",
//         //======
//         dots: true, // точки
//         infinite: true,
//         speed: 300,
//         slidesToShow: 1,
//         adaptiveHeight: true,
//         // adoptiv
//         responsive: [
//             {
//               breakpoint: 767,
//               settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//               }
//             },
//         ]
//     });
//   });



// //https://github.com/ganlanyuan/tiny-slider
//   const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: true,
//     controls: false,
//     nav: false,
//     controlsText: [
//         "<img src='img/chevron-left-solid.png'>",
//         "<img src='img/chevron-right-solid.png'>"
//     ],
//     responsive: {
//         640: {
//           edgePadding: 20,
//           gutter: 20,
//           items: 2
//         },
//         700: {
//           gutter: 30
//         },
//         900: {
//           items: 3
//         }
//       }
//   });

// document.querySelector('.prev').onclick = function () {
//   slider.goTo('prev');
// };
// document.querySelector('.next').onclick = function () {
//   slider.goTo('next');
// };



window.addEventListener('DOMContentLoaded', () => {

    // hamburger
    let hamburger = document.querySelector('.hamburger');
    let menu = document.querySelector('.header');
    let headerItem = document.querySelector('.header');
    headerItem = headerItem.childNodes;

    hamburger.onclick = function () {
        this.classList.toggle('hamburger_activ');
        menu.classList.toggle('header_activ');
    }

    headerItem.forEach(item => {
        item.onclick = () => {
            hamburger.classList.toggle('hamburger_activ');
            menu.classList.toggle('header_activ');
        }
    })


    // tabs
    function tabs(elem, elemActive, elem2, elemActive2) {
        let ar = [];
        let ind = 0;
        let arrTabs = document.querySelectorAll(elem);
        let arrCat = document.querySelectorAll(elem2);
        Array.from(arrTabs).forEach((item, index, arr) => {
            ar.push(index);
            item.onclick = function () {
                ind = index;
                if (!this.classList.contains(elemActive)) this.classList.add(elemActive);
                for (let i = 0; i < ar.length; i++) {
                    if (i !== ind && arr[i].classList.contains(elemActive)) arr[i].classList.remove(elemActive);
                }
                console.log(ind);

                if (!arrCat[ind].classList.contains(elemActive2)) arrCat[ind].classList.add(elemActive2);
                for (let i = 0; i < arrCat.length; i++) {
                    if (i !== ind && arrCat[i].classList.contains(elemActive2)) arrCat[i].classList.remove(elemActive2);
                }
            }
        })
    }
    tabs('.catalog__tab', 'catalog__tab_active', '.catalog__content', 'catalog__content_active');


});

    $(document).ready(function(){
        // tabs
        //   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tabs_active)', function() {
        //     $(this).addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        //       .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        //   });

        function toggleSlide(item) {
            $(item).each(function (i) {
                $(this).on('click', function (e) {
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                })
            });
        };

        toggleSlide('.catalog-item__link');
        toggleSlide('.catalog-item__back');



        //Modale
        $('[data-modale=consultation]').on('click', function () {
            $('.overlay, #consultation').fadeIn('slow');
        });

        $('.modale__close').on('click', function () {
            $('.overlay, #consultation, #order, #thanks').fadeOut();
        })

        $('.button_mini').each(function (i) {
            $(this).on('click', function () {
                $('#order .modale__descr').text($('.catalog-item__subtitle').eq(i).text());
                $('.overlay, #order').fadeIn('slow');
            })
        })


        //validate
        function validForm(form) {
            $(form).validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    phone: "required",
                    email: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    name: {
                        required: "Пожалуйста введите ваше имя",
                        minlength: jQuery.validator.format("Введите минимум {0} символа!")
                    },
                    phone: "Пожалуйста введите свой номер телефона",
                    email: {
                        required: "Пожалуйста введите свою почту",
                        email: "Неправильно введен адресс почты"
                    }
                }
            })
        }
        validForm('#consultation-form');
        validForm('#consultation form');
        validForm('#order form');

        //phone
        $('input[name="phone"]').mask("+7 (999) 999-99-99");

        // mailer send 
        $('form').submit(function (e) {
            e.preventDefault();
            if (!$(this).valid()) return;
            
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $(this).serialize()
            }).done(function () {
                $(this).find("input").val("");
                $('#consultation, #order').fadeOut();
                $('.overlay, #thanks').fadeIn('slow');

                $('form').trigger('reset');
            })
            return false;
        })

        // smooth scroll and pageup
        $(window).scroll(function() {
            if ($(this).scrollTop() > 1600) $(".pageup").fadeIn();
            else $(".pageup").fadeOut();
        })
        $("a[href='#up']").click(function(){
            const _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
        })


        // animate wow
        new WOW().init();

        
    });