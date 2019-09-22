var currViewportHeight;
var minHeight

var rotation = 0;

var clickTimeout1 = false;
var clickTimeout2 = false;
var clickTimeout3 = false;
var clickTimeout4 = false;

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
};

$(document).ready( function() {
	$("#arrow-down").click(function() {
    $('html, body').animate({
         scrollTop: $("#content-wrapper").offset().top
     }, 1500);
	});
	$(document).ready(function(){
  	$('[data-toggle="tooltip"]').tooltip();
	});
  
  $("#job1").on('click', function(event) {
  	if (clickTimeout1) {
      return;
    }
    clickTimeout1 = true;
  	$("#job1-arrow-wrapper").toggleClass("closed");
    $('#job1Description').collapse('toggle');
    setTimeout(function () {
          clickTimeout1 = false;
    },350);
    return;
  });
  
  $("#job2").on('click', function(event) {
  	if (clickTimeout2) {
      return;
    }
    clickTimeout2 = true;
  	$("#job2-arrow-wrapper").toggleClass("closed");
    $('#job2Description').collapse('toggle');
    setTimeout(function () {
          clickTimeout2 = false;
    },350);
    return;
  });
  
  $("#job3").on('click', function(event) {
  	if (clickTimeout3) {
      return;
    }
    clickTimeout3 = true;
  	$("#job3-arrow-wrapper").toggleClass("closed");
    $('#job3Description').collapse('toggle');
    setTimeout(function () {
          clickTimeout3 = false;
    },350);
    return;
  });
  
  /*
  $("#job1").toggle(function() {
  	$("#job1Description').collapse('toggle');
    $("#job1Arrow").rotate({ endDeg:90, persist:true });
  }, function() {
  	$("#job1Description").collapse('toggle');
    $("#job1Arrow").rotate({ endDeg:-90, duration:0.8, easing:'ease-in' });
  });
  */
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
  if(window.location.hash) {
    // smooth scroll to the anchor id
    /*
    $('html, body').animate({
      scrollTop: $(window.location.hash).offset().top 
    }, 800, 'swing');
    */
  }
  $("#arrow-down-wrapper").removeClass("animated");
  $("#arrow-down-wrapper").removeClass("animatedFadeInUp");
  $("#arrow-down-wrapper").removeClass("fadeInUp");
});

$(window).on('load', function () {
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
  if(viewportHeight < 420) {
		$("#arrow-down").removeClass("fa-5x");
    $("#arrow-down").addClass("fa-2x");
    document.getElementById("arrow-down-wrapper").style.marginTop = "-54px";
  }
  $('#loading').fadeOut(600);
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
  if(viewportHeight < 420) {
		$("#arrow-down").removeClass("fa-5x");
    $("#arrow-down").addClass("fa-2x");
    document.getElementById("arrow-down-wrapper").style.marginTop = "-54px";
  } else {
  	$("#arrow-down").removeClass("fa-2x");
    $("#arrow-down").addClass("fa-5x");
    document.getElementById("arrow-down-wrapper").style.marginTop = "-100px";
  }
});

var splashFadeRemove = false
var scroll = function () {
    if(!splashFadeRemove) {
    	$(".splashFade").removeClass("animated");
    	$(".splashFade").removeClass("animatedFadeInUp");
    	$(".splashFade").removeClass("fadeInUp");
      splashFadeRemove = true;
    }
    
    $(".splashFade").css("opacity", 0.999 - $(window).scrollTop() / (currViewportHeight/2));
    
};
var waiting = false;

$(window).scroll(function(){
		if($(window).scrollTop() / (currViewportHeight/2) < 1) {
      if (waiting) {
          return;
      }
      waiting = true;

      scroll();

      setTimeout(function () {
          waiting = false;
      }, 50);
      endScrollHandle = setTimeout(function () {
          scroll();
      }, 100);
    }
});
