var currViewportHeight;
var viewportWidth;
var minHeight

var rotation = 0;

var clickTimeout1 = false;
var clickTimeout2 = false;
var clickTimeout3 = false;
var clickTimeout4 = false;

var $$ = {//cache of jQuery objects
    arrowDown: $('#arrow-down'),
    arrowDownWrapper: $('#arrow-down-wrapper'),
    contentWrapper: $("#content-wrapper"),
    job1: $("#job1"),
    job1ArrowWrapper: $('#job1-arrow-wrapper'),
    job1Description: $('#job1Description'),
    job2: $("#job2"),
    job2ArrowWrapper: $('#job2-arrow-wrapper'),
    job2Description: $('#job2Description'),
    job3: $("#job3"),
    job3ArrowWrapper: $('#job3-arrow-wrapper'),
    job3Description: $('#job3Description'),
    contactLink: $('#contact-link'),
    photoReelLink: $('#photo-reel-link'),
    splashFade: $('.splashFade'),
    selfImage: $("#self-image"),
	sideBarWrapper: $("#sidebar-wrapper")
};

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
};

$(document).ready( function() {
    $$ = {//cache of jQuery objects
		arrowDown: $('#arrow-down'),
		arrowDownWrapper: $('#arrow-down-wrapper'),
		contentWrapper: $("#content-wrapper"),
		job1: $("#job1"),
		job1ArrowWrapper: $('#job1-arrow-wrapper'),
		job1Description: $('#job1Description'),
		job2: $("#job2"),
		job2ArrowWrapper: $('#job2-arrow-wrapper'),
		job2Description: $('#job2Description'),
		job3: $("#job3"),
		job3ArrowWrapper: $('#job3-arrow-wrapper'),
		job3Description: $('#job3Description'),
		contactLink: $('#contact-link'),
		photoReelLink: $('#photo-reel-link'),
		splashFade: $('.splashFade'),
		selfImage: $("#self-image"),
		sideBarWrapper: $("#sidebar-wrapper")
    };
    $("#arrow-down").click(function() {
    $('html, body').animate({
         scrollTop: $("#content-wrapper").offset().top
     }, 1500);
	});
	$(document).ready(function(){
  	$('[data-toggle="tooltip"]').tooltip();
	});
  
  $$.job1.on('click', function(event) {
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
  
  $$.job2.on('click', function(event) {
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
  
  $$.job3.on('click', function(event) {
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
  $$.contactLink.on('click', function(event) {
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
  
  $$.photoReelLink.on('click', function(event) {
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
  $$.arrowDownWrapper.removeClass("animated");
  $$.arrowDownWrapper.removeClass("animatedFadeInUp");
  $$.arrowDownWrapper.removeClass("fadeInUp");
});

$(window).on('load', function () {
	var viewport = $(this); 
  var viewportHeight = viewport.height();
  viewportWidth = viewport.width();
  $$.contentWrapper.css('height', 100 + "%");
  minHeight = $$.contentWrapper.height();
  document.getElementById("splash-wrapper").style.height = viewportHeight + "px";
  if(viewportHeight > minHeight+144) {
  	document.getElementById('content-wrapper').style.height = viewportHeight + "px";
  } else {
  	document.getElementById('content-wrapper').style.height = 100 + "%";
  }
  document.getElementById("splash-inner-wrapper").style.width = viewportWidth + "px";
  currViewportHeight = viewportHeight;
  
  var imageWidth = viewportWidth * 0.2;
  if(viewportWidth > 735) {
    if(imageWidth < 300) {
      $$.selfImage.css('width', imageWidth + "px");
      $$.selfImage.css('height', imageWidth + "px");
    } else {
      $$.selfImage.css('width', "300px");
      $$.selfImage.css('height', "300px");
    }
  } else {
  	imageWidth = viewportWidth * 0.7;
    $$.selfImage.css('width', imageWidth + "px");
    $$.selfImage.css('height', imageWidth + "px");
  }
  if(viewportHeight < 420) {
		$$.arrowDown.removeClass("fa-5x");
    $$.arrowDown.addClass("fa-2x");
    $$.arrowDownWrapper.css('marginTop', "-54px");
  }
  
  $('#loading').fadeOut(600);
});

$(window).on('resize', function(){
  var viewport = $(this); 
  var viewportHeight = viewport.height();
  viewportWidth = viewport.width();
  $$.contentWrapper.css('height', 100 + "%");
	minHeight = $("#content-wrapper").height();
  document.getElementById("splash-wrapper").style.height = viewportHeight + "px";
  if(viewportHeight > minHeight+144) {
 	  document.getElementById('content-wrapper').style.height = viewportHeight + "px";
  } else {
  	document.getElementById('content-wrapper').style.height = 100 + "%";
  }
  document.getElementById("splash-inner-wrapper").style.width = viewportWidth + "px";
  currViewportHeight = viewportHeight;
      
  var imageWidth = viewportWidth * 0.2;
  if(viewportWidth > 735) {
  	if(imageWidth < 300) {
    	$$.selfImage.css('width', imageWidth + "px");
      $$.selfImage.css('height', imageWidth + "px");
 		} else {
    	$$.selfImage.css('width', "300px");
      $$.selfImage.css('height', "300px");
   	}
 	} else {
  	imageWidth = viewportWidth * 0.7;
    $$.selfImage.css('width', imageWidth + "px");
    $$.selfImage.css('height', imageWidth + "px");
  }
  if(viewportHeight < 420) {
		$("#arrow-down").removeClass("fa-5x");
    $("#arrow-down").addClass("fa-2x");
    $$.arrowDownWrapper.style.marginTop = "-54px";
  } else {
  	$("#arrow-down").removeClass("fa-2x");
    $("#arrow-down").addClass("fa-5x");
    $$.arrowDownWrapper.style.marginTop = "-100px";
  }
	if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  	stickySideBar();
	}
});

var splashFadeRemove = false;
var opacityNum;
var windw = this;
var scroll = function () {
    if(!splashFadeRemove) {
    	$$.splashFade.removeClass("animated");
    	$$.splashFade.removeClass("animatedFadeInUp");
    	$$.splashFade.removeClass("fadeInUp");
      splashFadeRemove = true;
    }
    opacityNum = 0.999 - $(window).scrollTop() / (currViewportHeight/2);
    if(opacityNum > 1) {
    	opacityNum = 1;
    }
    $$.splashFade.css("opacity", opacityNum);  
};

if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	
var waiting = false;
var sideBarWaiting = false;

$(window).scroll(function(){
		if(sideBarWaiting) {
    	return;
    } else {
    	sideBarWaiting = true;
    	stickySideBar();
    	setTimeout(function () {
        sideBarWaiting = false;
      }, 12);
      endScrollHandle = setTimeout(function () {
        stickySideBar();
      }, 100);
    }
		if (waiting) {
          return;
    } else {
    		waiting = true;
				if($(window).scrollTop() / (currViewportHeight/2) < 1) {
      		scroll();
    		}
    		setTimeout(function () {
        	waiting = false;
      	}, 65);
      	endScrollHandle = setTimeout(function () {
        	scroll();
      	}, 100);
    }
});
}

function stickySideBar() {
	if(viewportWidth > 735) {
  	if ($(window).scrollTop() >= currViewportHeight && $(window).scrollTop() < $("#contact").offset().top) {
			$$.sideBarWrapper.css({
    			position: 'relative',
      			top: $(window).scrollTop()-currViewportHeight
    		});
		} else if($(window).scrollTop() >= $("#contact").offset().top){
   			$$.sideBarWrapper.css({
    			position: 'relative',
      			top: $("#contact").offset().top-currViewportHeight           
    		});
  		}
  	}
	else {
  		$$.sideBarWrapper.css({
    		position: 'static',
      		top: 0           
    	});
  	}
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
$(window).on('orientationchange', function(e) {
     $.mobile.changePage(window.location.href, {
        allowSamePageTransition: true,
        transition: 'none',
        reloadPage: true
    });
});
}
