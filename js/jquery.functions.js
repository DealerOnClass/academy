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
    $(this).click(function() {
        // add active class
        // remove active class of siblings on nav click
        $(this).addClass('active').siblings().removeClass('active');
        // change title on topics page
        $('[data-target="title__isActive"]').text(navUrl);
    });
  });

  // change title on topics page on page load
  $('.topics .lesson__header [data-target="title__isActive"]').text(hashUrl);
  // in case of page refresh remove ghost title to avoid ugliness  

  // on click
  $('[data-target="lesson__isActive"]').click(function() {
    // get href
    var navUrl = $(this).attr('href').split('#')[1];
    // add active class
    // remove active class of siblings
    $('.sidebar__body [data-target="nav__isActive"][href="#' +  navUrl + '"]').addClass('active').siblings().removeClass('active');
    // change title on topics page on tag click
    $('[data-target="title__isActive"]').text(navUrl);
  });

});
// (function () {
//     // get page url after the hash
//     var hashUrl = window.location.hash.substr(1);
//     console.log(hashUrl);

//     // get nav url
//     var navItems = document.getElementsByClassName("nav__link");
//     for (i = 0; i < navItems.length; i++) {

//         var elem = navItems[i];

//         // get nav url
//         navUrl = elem.getAttribute("href").substr(1);
//         console.log(navUrl);        

//         // add class if page url is nav url
//         if (pageUrl == navUrl) {
//             navItems[i].setAttribute("class", "active");
//             console.log("hallelujah!");
//         };

//         // add click event
//         // elem.addEventListener("click", function(){
//         //     this.setAttribute("class", "active");
//         //     // get this parent
//         //     // get this siblings
//         //     // remove active class, done
//         // });
        
//     };

// })();