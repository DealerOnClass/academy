$(function() {
  var pageUrl = window.location.hash.substr(1);

  $('.nav__link').each(function() {

    var navUrl = $(this).attr('href').substr(1);

    if ( pageUrl === navUrl ) {
      $(this).addClass('active');
    }

    $(this).click(function() {
        $(this).addClass('active');
        $(this).parent().siblings().children().removeClass('active');
    });

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