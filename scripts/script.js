var currViewportHeight;
var minHeight

$(document).ready( function() {
	$("#arrow-down").click(function() {
    $('html, body').animate({
         scrollTop: $("#content-wrapper").offset().top
     }, 1500);
	});
	$(document).ready(function(){
  	$('[data-toggle="tooltip"]').tooltip();
	});
	var viewport = $(this); 
  var viewportHeight = viewport.height();
  var viewportWidth = viewport.width();
  document.getElementById("content-wrapper").style.height = 100 + "%";
  minHeight = $("#content-wrapper").height();
  console.log(minHeight);
  document.getElementById("splash-wrapper").style.height = viewportHeight + "px";
  if(viewportHeight > minHeight+144) {
  	document.getElementById("content-wrapper").style.height = viewportHeight + "px";
  } else {
  	document.getElementById("content-wrapper").style.height = 100 + "%";
  }
  document.getElementById("splash-inner-wrapper").style.width = viewportWidth + "px";
  currViewportHeight = viewportHeight;
  
  var imageWidth = viewportWidth * 0.2;
  if(imageWidth < 300) {
    document.getElementById("self-image").style.width = imageWidth + "px";
    document.getElementById("self-image").style.height = imageWidth + "px";
  } else {
    document.getElementById("self-image").style.width = "300px";
    document.getElementById("self-image").style.height = "300px";
  }
  
  $("#arrow-down-wrapper").removeClass("animated");
  $("#arrow-down-wrapper").removeClass("animatedFadeInUp");
  $("#arrow-down-wrapper").removeClass("fadeInUp");
});

$(window).on('resize', function(){
      var viewport = $(this); 
      var viewportHeight = viewport.height();
      var viewportWidth = viewport.width();
      document.getElementById("content-wrapper").style.height = 100 + "%";
  		minHeight = $("#content-wrapper").height();
      document.getElementById("splash-wrapper").style.height = viewportHeight + "px";
      if(viewportHeight > minHeight+144) {
  			document.getElementById("content-wrapper").style.height = viewportHeight + "px";
  		} else {
  			document.getElementById("content-wrapper").style.height = 100 + "%";
  		}
      document.getElementById("splash-inner-wrapper").style.width = viewportWidth + "px";
      currViewportHeight = viewportHeight;
      
      var imageWidth = viewportWidth * 0.2;
      if(imageWidth < 300) {
      	document.getElementById("self-image").style.width = imageWidth + "px";
      	document.getElementById("self-image").style.height = imageWidth + "px";
      } else {
      	document.getElementById("self-image").style.width = "300px";
        document.getElementById("self-image").style.height = "300px";
      }
});

$(window).scroll(function(){
    $(".splashFade").removeClass("animated");
    $(".splashFade").removeClass("animatedFadeInUp");
    $(".splashFade").removeClass("fadeInUp");
    $(".splashFade").css("opacity", 0.999 - $(window).scrollTop() / (currViewportHeight/2));
});

$("#splashTwitter").click(function() {
    window.location = "https:/twitter.com/nodinawe";
});

$("#splashLinkedIn").click(function() {
    window.location = "linkedin.com/in/alan-chen-a07034171";
});
