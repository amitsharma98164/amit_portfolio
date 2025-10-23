$(function() {

    var wind = $(window);

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: false,
        live: false
    });
    wow.init();

    // ---------- background change -----------
    var pageSection = $(".bg-img");
    pageSection.each(function(indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    // ----------- side menu -----------
    $(".side_menu_btn").on("click", function() {
        $(this).toggleClass("active");
        $(".side_overlay").toggleClass("show");
        $(".side_overlay2").toggleClass("show");
        // $(".side_menu").toggleClass("show");
    });

    $(".side_menu .clss").on("click", function() {
        $(".side_overlay").toggleClass("show");
        $(".side_overlay2").toggleClass("show");
        // $(".side_menu").toggleClass("show");
    });


    // ---------- to top -----------

    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            toTop = $("#to_top")

        if (bodyScroll > 700) {

            toTop.addClass("show");

        } else {

            toTop.removeClass("show");
        }
    });

    $('#to_top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 0);
        return false;
    });


    // -------- counter --------
    $('.counter').countUp({
        delay: 10,
        time: 2000
    });

    // -------- fav-btn --------
    $(".fav-btn").on("click", function() {
        $(this).toggleClass("active");
    })

    // -------- cls --------
    $(".cls").on("click", function() {
        $(this).parent().fadeOut();
    })

    // ------------ working in desktop -----------
    if ($(window).width() > 991) {
        $('.parallaxie').parallaxie({});
    }

    // ---------- tooltip -----------
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

});

$(window).on("load", function() {

});


// ------------ mousecursor scripts -----------
$(function() {
    function mousecursor() {
        if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
                t = document.querySelector(".cursor-outer");
            let n, i = 0,
                o = !1;
            window.onmousemove = function(s) {
                    o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
                },
                $("body").on("mouseenter", "a, .cursor-pointer", function() {
                    e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
                }), $("body").on("mouseleave", "a, .cursor-pointer", function() {
                    e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover")
                }),

                // $("body").on("mouseenter", ".swiper-wrapper.curs-scroll", function () {
                //     e.classList.add("cursor-scroll"), t.classList.add("cursor-scroll")
                // }), $("body").on("mouseleave", ".swiper-wrapper.curs-scroll", function () {
                //     $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-scroll"), t.classList.remove("cursor-scroll"))
                // }),

                e.style.visibility = "visible", t.style.visibility = "visible"
        }
    };

    $(function() {
        mousecursor();
    });

});


$(function() {
    // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    $(".side_menu_btn").on("click", function() {
        gsap.to(".side_menu", {
            opacity: 1,
            visibility: "visible",
            duration: 0.5,
            ease: "power2.out",
            zIndex: 999,
        });
        gsap.to(".main_link", {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            delay: 0.5,
            stagger: {
                amount: 0.5,
                from: "start"
            }
        });
        gsap.to(".menu-info", {
            opacity: 1,
            scale: 1,
            visibility: "visible",
            duration: 0.5,
            delay: 1.5,
            ease: "power2.out"
        });
        gsap.to("#scrollsmoother-container", {
            opacity: 0.1,
            scale: 0.97,
            visibility: "visible",
            duration: 1,
            delay: 0,
            ease: "power2.out"
        });
    });

    $(".side_menu .clss").on("click", function() {
        gsap.to(".side_menu", {
            opacity: 0,
            visibility: "hidden",
            duration: 0.5,
            ease: "power2.out",
            delay: 1,
            zIndex: -1,
        });
        gsap.to(".main_link", {
            x: 0,
            y: 0,
            scale: 1.3,
            opacity: 0,
            stagger: {
                amount: 0.5,
                from: "start"
            }
        });
        gsap.to(".menu-info", {
            opacity: 0,
            scale: 1,
            visibility: "visible",
            duration: 0.5,
            delay: 1.5,
            ease: "power2.out"
        });
        gsap.to("#scrollsmoother-container", {
            opacity: 1,
            scale: 1,
            visibility: "visible",
            duration: 1,
            delay: 1.7,
            ease: "power2.out"
        });
    });

});