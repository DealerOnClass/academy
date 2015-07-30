$(function() {
  // get page url
  var hashUrl = window.location.hash.substr(1);
  var pageUrlRaw = window.location.pathname;

  if ( pageUrlRaw.toLowerCase().indexOf("academy") >= 0 ) {
    var pageUrl = pageUrlRaw.substr(1, pageUrlRaw.length).split("/")[1];
  }
  // default
  else {
    var pageUrl = pageUrlRaw.substr(1, pageUrlRaw.length).split("/")[0];
  }
  // for each nav
  // var nav__link = $("[data-target='link']");


  $('[data-target="nav__isActive"]').each(function() {
    // get href
    var navUrlRaw = $(this).attr('href').substr(1);
    if ( navUrlRaw.toLowerCase().indexOf("academy") >= 0 ) {
      var navUrl = $(this).attr('href').substr(1, pageUrlRaw.length).split("/")[1];
    }
    // default
    else {
      var navUrl = $(this).attr('href').substr(1);
    }
    // compare against page url with and without the hashtag
    // without the hashtag for lessons pages
    if ( hashUrl === navUrl | pageUrl === navUrl ) {
      // add active class
      $(this).addClass('active');
    }
    // change title on topics page
    // $('.topics .nav__link.active').text(navUrl);
    // on click
    $(this).click(function(e) {
        // add active class
        // remove active class of siblings on nav click
        $(this).parent().addClass('active').siblings().removeClass('active');

        // change title on topics page
        // $('[data-target="title__isActive"]').text(navUrl);
        // $('.catbloc#' + navUrl + '').siblings().hide();
        // $('.catbloc#' + navUrl + '').show();
        // console.log(navUrl);
        // e.preventDefault();
    });
  });


  // count total posts in lessons page
  var lesson__category = $(".count__category").attr("data-category");
  var lesson__category = "#" + lesson__category;
  // console.log(lesson__category);
  var lesson__count = $("#nav__secondary__collapse " + lesson__category).children().length;
  var lesson__count = lesson__count - 1;
  // console.log(lesson__count);
  var lesson__siblings = $("#nav__secondary__collapse .nav__link.active").parent().prevAll().length;
  // console.log(lesson__siblings);
  $(".count__siblings").html(lesson__siblings);
  $(".count__category").html(lesson__count);







  // //  Scroll
  // var heroTop = $(".lessons .hero").offset().top;
  // // console.log(heroTop);

  // $(document).scroll(function() {

  //   var distanceTop = $(document).scrollTop();
  //   // console.log(distanceTop);

  //   if(distanceTop > heroTop) {
  //       console.log("Animate Header Start");
  //   } else {
  //       console.log("Animate Header Stop");
  //   }

  // });

});


// https://github.com/codrops/AnimatedHeader/blob/master/js/classie.js
// var cbpAnimatedHeader = (function() {

//   var docElem = document.documentElement,
//     header = document.querySelector( '.lessons .layout__hero' ),
//     didScroll = false,
//     changeHeaderOn = 300;

//   function init() {
//     window.addEventListener( 'scroll', function( event ) {
//       if( !didScroll ) {
//         didScroll = true;
//         setTimeout( scrollPage, 250 );
//       }
//     }, false );
//   }

//   function scrollPage() {
//     var sy = scrollY();
//     if ( sy >= changeHeaderOn ) {
//       classie.add( header, 'isSticky' );
//     }
//     else {
//       classie.remove( header, 'isSticky' );
//     }
//     didScroll = false;
//   }

//   function scrollY() {
//     return window.pageYOffset || docElem.scrollTop;
//   }

//   init();

// })();


  // // change title on topics page on page load
  // $('.topics .lesson__header [data-target="title__isActive"]').text(hashUrl);
  // // in case of page refresh remove ghost title to avoid ugliness  

  // // on click
  // $('[data-target="lesson__isActive"]').click(function(e) {
  //   // get href
  //   var navUrl = $(this).attr('href').split('#')[1];
  //   // add active class
  //   // remove active class of siblings
  //   $('.filter__body [data-target="nav__isActive"][href="#' +  navUrl + '"]').addClass('active').siblings().removeClass('active');
  //   // change title on topics page on tag click
  //   $('[data-target="title__isActive"]').text(navUrl);

  //   // e.preventDefault();
  // });


  // remedy for seomthign stupid on homepage - REVISIT
  // $(".category").next().remove()

  
  // group progress
  // $('[data-target="group__progress"]').each(function() {

  //   var group__class = $(this).attr("class");
  //   var group__count = $('[data-target="' + group__class + '__count"]');

  //   var post__count = group__count.closest(".sidebar__item").prevAll().length;
  //   var post__count = post__count - 1;

  //   var post__total = group__count.closest(".sidebar__item").siblings().length;
  //   var post__total = post__total - 1;

  //   var group__progress = post__count / post__total * 100 + "%";

  //   $(this).width(group__progress);

  // });

  // frustrating momment with this one
  // console.log($('#check').children().length);
  // if( $('#check').children().length == 0  ) {
  //     $("#check").remove();
  // };


// bootstrap collapse icon switch
$('[data-toggle="collapse"]').click(function() {
  // get selector from data-target
  var elem__id = $(this).attr("data-target").substr(1);
  // get icon
  var elem__icon = "#" + elem__id + "__icon";
  // get panel link
  var elem__class = $(this).attr("class");
  // get panel parent
  var elem__panel = "#" + elem__id;
  // toggle icon function
  $(elem__panel).on('shown.bs.collapse', function() {
    $(elem__icon).addClass('icon-minus').removeClass('icon-plus');
  });
  $(elem__panel).on('hidden.bs.collapse', function() {
    $(elem__icon).addClass('icon-plus').removeClass('icon-minus');
  });
});


// toggle nav secondary
$('#nav__secondary__toggle').click(function(e) {
  e.preventDefault();
  if ( $("#nav__secondary").hasClass("nav__secondary--isOpen") == true) {
    $("#nav__secondary").removeClass("nav__secondary--isOpen");
    $("#body").removeClass("nav--isOpen");
    //test
    // $("#nav__secondary").animate({ "width": "0em"}, "slow", "swing");

    localStorage.setItem('nav__check', 'false');
    console.log("is closed");
  }
  else {
    $("#nav__secondary").addClass("nav__secondary--isOpen");
    $("#body").addClass("nav--isOpen");
    //test
    // $("#nav__secondary").animate({ "width": "20em"}, "slow", "swing");

    localStorage.setItem('nav__check', 'true');
    console.log("is open");
  }
});

// toggle nav secondary cookies
var nav__check = localStorage.getItem('nav__check');
if (nav__check == 'true') {
  $("#nav__secondary").addClass("nav__secondary--isOpen noAnimation");
  $("#body").addClass("nav--isOpen");
  //test
  // $("#nav__secondary").attr("style","width: 20em;");
  setTimeout(function(){
    $("#nav__secondary").removeClass("noAnimation");
  }, 50);

  console.log("keep it open");
}
else {
  $("#nav__secondary").removeClass("nav__secondary--isOpen");    
  $("#body").removeClass("nav--isOpen");    
  //test
  // $("#nav__secondary").attr("style","width: 0em;");

  console.log("keep it closed");
}
  
  // make sure topics page always shows something
  // var topics__url = $('.nav--primary .nav__link[href*="topics"]').attr("href");
  // var topics__url = topics__url + "#all";
  // $('.nav--primary .nav__link[href*="topics"]').attr("href", topics__url);

  // $(".catbloc#all").siblings().hide();

  // $(".catbloc#all").siblings().hide();
  