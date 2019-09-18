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
  
  $("#contact-link").on('click', function(event) {
  	if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
  
  $("#photo-reel-link").on('click', function(event) {
  	if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  $("#arrow-down-wrapper").removeClass("animated");
  $("#arrow-down-wrapper").removeClass("animatedFadeInUp");
  $("#arrow-down-wrapper").removeClass("fadeInUp");
});

$(window).on('load', function () {
	var viewport = $(this); 
  var viewportHeight = viewport.height();
  console.log(viewportHeight);
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
  if(viewportWidth > 735) {
    if(imageWidth < 300) {
      document.getElementById("self-image").style.width = imageWidth + "px";
      document.getElementById("self-image").style.height = imageWidth + "px";
    } else {
      document.getElementById("self-image").style.width = "300px";
      document.getElementById("self-image").style.height = "300px";
    }
  } else {
  	imageWidth = viewportWidth * 0.7;
    document.getElementById("self-image").style.width = imageWidth + "px";
    document.getElementById("self-image").style.height = imageWidth + "px";
  }
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
  if(viewportWidth > 735) {
  	if(imageWidth < 300) {
    	document.getElementById("self-image").style.width = imageWidth + "px";
    	document.getElementById("self-image").style.height = imageWidth + "px";
 		} else {
    	document.getElementById("self-image").style.width = "300px";
     	document.getElementById("self-image").style.height = "300px";
   	}
 	} else {
  	imageWidth = viewportWidth * 0.7;
    document.getElementById("self-image").style.width = imageWidth + "px";
    document.getElementById("self-image").style.height = imageWidth + "px";
  }
});

$(window).scroll(function(){
    $(".splashFade").removeClass("animated");
    $(".splashFade").removeClass("animatedFadeInUp");
    $(".splashFade").removeClass("fadeInUp");
    $(".splashFade").css("opacity", 0.999 - $(window).scrollTop() / (currViewportHeight/2));
});
