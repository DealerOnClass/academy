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
        $('[data-target="title__isActive"]').text(navUrl);
        // $('.catbloc#' + navUrl + '').siblings().hide();
        // $('.catbloc#' + navUrl + '').show();
        // console.log(navUrl);
        // e.preventDefault();
    });
  });

  // change title on topics page on page load
  $('.topics .lesson__header [data-target="title__isActive"]').text(hashUrl);
  // in case of page refresh remove ghost title to avoid ugliness  

  // on click
  $('[data-target="lesson__isActive"]').click(function(e) {
    // get href
    var navUrl = $(this).attr('href').split('#')[1];
    // add active class
    // remove active class of siblings
    $('.filter__body [data-target="nav__isActive"][href="#' +  navUrl + '"]').addClass('active').siblings().removeClass('active');
    // change title on topics page on tag click
    $('[data-target="title__isActive"]').text(navUrl);

    // e.preventDefault();
  });


  // remedy for seomthign stupid on homepage - REVISIT
  // $(".category").next().remove()
  // group progress
  $('[data-target="group__progress"]').each(function() {

    var group__class = $(this).attr("class");
    var group__count = $('[data-target="' + group__class + '__count"]');

    var post__count = group__count.closest(".sidebar__item").prevAll().length;
    var post__count = post__count - 1;

    var post__total = group__count.closest(".sidebar__item").siblings().length;
    var post__total = post__total - 1;

    var group__progress = post__count / post__total * 100 + "%";

    $(this).width(group__progress);

  });

  // frustrating momment with this one
  // console.log($('#check').children().length);
  if( $('#check').children().length == 0  ) {
      $("#check").remove();
  };

  // make sure topics page always shows something
  // var topics__url = $('.nav--primary .nav__link[href*="topics"]').attr("href");
  // var topics__url = topics__url + "#all";
  // $('.nav--primary .nav__link[href*="topics"]').attr("href", topics__url);

  // $(".catbloc#all").siblings().hide();

  // $(".catbloc#all").siblings().hide();


});