function  f1 () {
    alert("hello stas")

}
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:2000,
    navText : ['Это было легко','тыц-тыц'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})