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

});


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