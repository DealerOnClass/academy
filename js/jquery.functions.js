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
  console.log(pageUrl);
  // for each nav
  $('.nav__link').each(function() {
    // get href
    var navUrlRaw = $(this).attr('href').substr(1);
    if ( navUrlRaw.toLowerCase().indexOf("academy") >= 0 ) {
      var navUrl = $(this).attr('href').substr(1, pageUrlRaw.length).split("/")[1];
    }
    // default
    else {
      var navUrl = $(this).attr('href').substr(1);
    }
    console.log(navUrl);
    // compare against page url with and without the hashtag
    // without the hashtag for lessons pages
    if ( hashUrl === navUrl | pageUrl === navUrl ) {
      // add active class
      $(this).addClass('active');
    }
    // on click
    $(this).click(function() {
        // add active class
        // remove active class of siblings
        $(this).addClass('active').siblings().removeClass('active');
    });
  });

  // on click
  $('.lesson__tags').click(function() {
    // get href
    var navUrl = $(this).attr('href').split('#')[1];
    // add active class
    // remove active class of siblings
    $('.nav--secondary .nav__link.' +  navUrl).addClass('active').siblings().removeClass('active');
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