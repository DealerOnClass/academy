$(function() {
  // get page url
  var pageUrl = window.location.hash.substr(1);
  // for each nav
  $('.nav__link').each(function() {
    // get href
    var navUrl = $(this).attr('href').substr(1);
    // compare against page url
    if ( pageUrl === navUrl ) {
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
//     var pageUrl = window.location.hash.substr(1);
//     console.log(pageUrl);

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