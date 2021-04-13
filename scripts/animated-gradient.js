$(document).ready( function() {
  var c = document.getElementById('animated-gradient');
  var $ = c.getContext('2d');


  var col = function(x, y, r, g, b) {
    $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
    $.fillRect(x, y, 1,1);
  }
  var R = function(x, y, t) {
    return( Math.floor(248 + 8*Math.cos( (x*x-y*y)/350 + t )) );
  }

  var G = function(x, y, t) {
    return( Math.floor(172 + 36*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/700 ) ) );
  }

  var B = function(x, y, t) {
    return( Math.floor(102 + 23*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1400) ));
  }

  var t = 0;

  var run = function() {
    for(var x = 0; x <= 35; x++) {
      for(var y = 0; y <= 35; y++) {
        col(x, y, R(x,y,t), G(x,y,t), B(x,y,t));
      }
    }
    t = t + 0.065;
    window.requestAnimationFrame(run);
  }

  run();
});




