
// ***************Code used to enable the navbar functionality******************
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}





//***********Code used to control the fade-in effect for certain sections**************
window.onscroll = function () { test() };

function test() {
  if (document.body.scrollTop > 765 || document.documentElement.scrollTop > 765) {
    $("#what-we-do-pictures-heading").fadeIn(3000);
    $(".what-we-do-image-div").fadeIn(3000);

    $("#scroll-up-button").fadeIn(3000);
  }


  if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {

    $("#ending-div-heading").addClass("translate-up");
    $("#ending-div-subheading-1").addClass("translate-up");
    $(".ending-div-subheading-2").addClass("translate-up");

    $(".ending-div-text").addClass("translate-up");
  }
}
//***********************************************************************/

//***********Code used to give functionality to the "scroll-up-text" button */
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("#scroll-up-text").on('click', function (event) {
    // Prevent default anchor click behavior
    event.preventDefault();
    console.log(hash);

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Store hash
      var hash = this.hash;
      console.log(hash);
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1700, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



// ********************************************************************************


// *******************Used to control the display of items on the Portfolio page************

$("#portfolio-select-bar-1").click(function () {
  $("#portfolio-select-bar-2").removeClass("active-select");
  $("#portfolio-select-bar-2").addClass("inactive-select");
  $("#portfolio-select-bar-1").removeClass("inactive-select");
  $("#portfolio-select-bar-1").addClass("active-select");
  $("#portfolio-select-bar-3").removeClass("active-select");
  $("#portfolio-select-bar-3").addClass("inactive-select");

  $("#portfolio-site1").addClass("portfolio-appear");
  $("#portfolio-site2").addClass("portfolio-appear");
  $("#portfolio-site3").addClass("portfolio-appear");
  $("#portfolio-site4").addClass("portfolio-appear");
  $("#portfolio-site5").addClass("portfolio-appear");

  $("#portfolio-site1").removeClass("portfolio-disappear");
  $("#portfolio-site2").removeClass("portfolio-disappear");
  $("#portfolio-site3").removeClass("portfolio-disappear");
  $("#portfolio-site4").removeClass("portfolio-disappear");
  $("#portfolio-site5").removeClass("portfolio-disappear");
});

$("#portfolio-select-bar-2").click(function () {
  $("#portfolio-select-bar-2").removeClass("inactive-select");
  $("#portfolio-select-bar-2").addClass("active-select");
  $("#portfolio-select-bar-1").removeClass("active-select");
  $("#portfolio-select-bar-1").addClass("inactive-select");
  $("#portfolio-select-bar-3").removeClass("active-select");
  $("#portfolio-select-bar-3").addClass("inactive-select");

  $("#portfolio-site1").addClass("portfolio-appear");
  $("#portfolio-site2").addClass("portfolio-disappear");
  $("#portfolio-site3").addClass("portfolio-disappear");
  $("#portfolio-site4").addClass("portfolio-disappear");
  $("#portfolio-site5").addClass("portfolio-disappear");

  $("#portfolio-site1").removeClass("portfolio-disappear");
  $("#portfolio-site2").removeClass("portfolio-appear");
  $("#portfolio-site3").removeClass("portfolio-appear");
  $("#portfolio-site4").removeClass("portfolio-appear");
  $("#portfolio-site5").removeClass("portfolio-appear");
});



$("#portfolio-select-bar-3").click(function () {
  $("#portfolio-select-bar-2").removeClass("active-select");
  $("#portfolio-select-bar-2").addClass("inactive-select");
  $("#portfolio-select-bar-1").removeClass("active-select");
  $("#portfolio-select-bar-1").addClass("inactive-select");
  $("#portfolio-select-bar-3").removeClass("inactive-select");
  $("#portfolio-select-bar-3").addClass("active-select");

  $("#portfolio-site1").addClass("portfolio-disappear");
  $("#portfolio-site2").removeClass("portfolio-disappear");
  $("#portfolio-site3").removeClass("portfolio-disappear");
  $("#portfolio-site4").removeClass("portfolio-disappear");
  $("#portfolio-site5").removeClass("portfolio-disappear");

  $("#portfolio-site1").removeClass("portfolio-appear");
  $("#portfolio-site2").addClass("portfolio-appear");
  $("#portfolio-site3").addClass("portfolio-ppear");
  $("#portfolio-site4").addClass("portfolio-appear");
  $("#portfolio-site5").addClass("portfolio-appear");
});




// $("#portfolio-select-bar-1").click(function () {
//   $("#portfolio-select-bar-1").addClass("portfolio-select-bar2-item-active");
//   $("#portfolio-select-bar-2").removeClass("portfolio-select-bar2-item-active");
//   $("#portfolio-select-bar-3").removeClass("portfolio-select-bar2-item-active");

//   $("#portfolio-item-2").removeClass("portfolio-item-inactive");
//   $("#portfolio-item-3").removeClass("portfolio-item-inactive");
//   $("#portfolio-item-4").removeClass("portfolio-item-inactive");
//   $("#portfolio-item-5").removeClass("portfolio-item-inactive");
//   $("#portfolio-item-1").removeClass("portfolio-item-inactive");
// });

// $("#portfolio-select-bar-2").click(function () {
//   $("#portfolio-select-bar-2").addClass("portfolio-select-bar2-item-active");
//   $("#portfolio-select-bar-1").removeClass("portfolio-select-bar2-item-active");
//   $("#portfolio-select-bar-3").removeClass("portfolio-select-bar2-item-active");

//   $("#portfolio-item-2").addClass("portfolio-item-inactive");
//   $("#portfolio-item-3").addClass("portfolio-item-inactive");
//   $("#portfolio-item-4").addClass("portfolio-item-inactive");
//   $("#portfolio-item-5").addClass("portfolio-item-inactive");
//   $("#portfolio-item-1").removeClass("portfolio-item-inactive");


// });

// $("#portfolio-select-bar-3").click(function () {
//   $("#portfolio-select-bar-3").addClass("portfolio-select-bar2-item-active");
//   $("#portfolio-select-bar-1").removeClass("portfolio-select-bar2-item-active");
//   $("#portfolio-select-bar-2").removeClass("portfolio-select-bar2-item-active");

//   $("#portfolio-item-2").removeClass("portfolio-item-inactive");
//   $("#portfolio-item-3").removeClass("portfolio-item-inactive");
//   $("#portfolio-item-4").removeClass("portfolio-item-inactive");
//   $("#portfolio-item-5").removeClass("portfolio-item-inactive");
//   $("#portfolio-item-1").addClass("portfolio-item-inactive");

// });