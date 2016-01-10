
// Add class to table of contents
$('.toclevel-2 a, .toctext').click(function(){
    $('.toclevel-2 a, .toctext').removeClass('selected');
    $(this).addClass('selected');
});


// Remove all inline styles
$('div, table, td, tr, th, h1, h2, h3, h4, h5, h6').attr('style', '');

// Insert a link to go back to top of page
$( ".toclevel-1.tocsection-1" ).before( '<li class="toclevel-1 tocsection-0"><a href="#firstHeading"><span class="toctext">Start</span></a></li>' );

// Remove placeholder attribute from search field
//$("#searchInput").removeAttr("placeholder");


// Do soemthing when scrolling
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       $("#mw-head").fadeOut("fast");
   } else {
      $("#mw-head").fadeIn("fast");
   }
   lastScrollTop = st;
});