console.log("main.js loaded");

if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var cornerstoneAPI = (function(options) {
	var shared = {},
		options = options || {}
	
	// JS MEDIA QUERY
	// var mq = window.matchMedia('@media all and (max-width: 700px)');
	// if(mq.matches) {
	//     // the width of browser is more then 700px
	// } else {
	//     // the width of browser is less then 700px
	// }

	// JS MEDIA QUERY + LISTENER
	// mq.addListener(function(changed) {
	//     if(changed.matches) {
	//         // the width of browser is more then 700px
	//     } else {
	//         // the width of browser is less then 700px
	//     }
	// });

	// PRELOADER UTILITY
	// var AceLoadImages = AceLoadImages || function(a, d, z) {
	// 	a instanceof Array || (a = [a]);
	// 	for (var e = a.length, f = 0, g = e; g--;) {
	// 		var b = document.createElement("img");
	// 		b.onload = function() {
	// 			f++; 
	// 			f >= e && isFunction(d) && d(z)
	// 		};
	// 		b.src = a[g]; 
	// 	}
	// }

	// var isFunction = isFunction || function(functionToCheck) {
	// 	var getType = {};
	// 	return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
	// }

	
	// // USE
	// AceLoadImages([
	// 	// yourArrayOfImages.jpg,
	// 	// keepEmComming.jpg,
	// 	// calls imagesAreLoaded() function at end
	// ], imagesAreLoaded);

	// // USE A PRELOADING IMAGE/TWEENMAX AFTER LOADS
	// function imagesAreLoaded() {
	// 	// do whatever it is that cant happen before the images are ready
	// 	TweenMax.to("#splash-overlay" , 0.75, {
	//   		scale: 0,
	//   		autoAlpha: 0,
	//   		ease: Back.easeInOut
	//   	});
	// }
	// END PRELOAD UTILITY

	var openAnimation = new TimelineMax({paused: true});
	
	openAnimation.to(".l-curtain-top", 0.5, { autoAlpha: 1, top: 0, marginTop: 0, ease: Quad.easeInOut});
	openAnimation.to(".l-curtain-left", 0.5, { autoAlpha: 1, left: 0, ease: Back.easeInOut}, 0.25);
	openAnimation.to(".l-curtain-right", 0.5, { autoAlpha: 1, right: 0, ease: Back.easeInOut}, 0.25);
	openAnimation.to(".l-sign-main", 0.5, { autoAlpha: 1, top: 0, ease: Back.easeInOut}, 0.15);
	openAnimation.to(".l-sign-left", 0.5, { autoAlpha: 1, top: 0, ease: Back.easeInOut}, 0.25);
	openAnimation.to(".l-sign-right", 0.5, { autoAlpha: 1, top: 0, ease: Back.easeInOut, onComplete:function(){alert("Let’s put on a show, shall we? By entering, you agree to let us take over your computer and unleash the following side effects: Foul play, shenanigans, and downright no-good tomfoolery. If you agree, it’s not our fault some people never quite return to normal. We’re not evil, just good lookin’.  If you do not, im sure your parents would be proud, too bad. ")}}, 0.25);
	// openAnimation.to(".l-sign-right, .l-sign-main, .l-sign-left", 1, { left: "1%", yoyo: true, repeatDelay: 0.5, ease: Back.easeInOut});



	var menuAnimation = new TimelineMax({paused: true});
	menuAnimation.to(".l-mobile-layout nav", 0.75, { autoAlpha: 1, left: 0, ease: Back.easeInOut});

	// MOBILE ICON - HAMBURGER
	$(".mobile-nav-btn").on("click", function(){
		$(this).toggleClass("open");
		console.log("clicked");

  		if ($(this).hasClass("played")) {
  			menuAnimation.reverse();	
  		} else {
  			menuAnimation.play();
  		}	
  		$(this).toggleClass("played");
	});

	$( ".mobile-nav-btn" ).click(function() {
		console.log("animate clicek");
	  $( "header .mobile-nav-menu" ).animate({
	    opacity: 1,
	    left: "0",
	  }, 5000, function() {
	    console.log("worked");
	  });
	});

	// BOTTOM BEFORE CLOUSURE
	var init = function() {

		// OPENING ANIMATION
		window.onload = function(){
			openAnimation.play();
		}
    
	    var pane = $('#pane'),
	      box = $('#box'),
	      one = $('#one'),
	      two = $('#two'),
	      three = $('#three'),
	      w = pane.width() - box.width(),
	      d = {},
	      x = 6;

	    function newv(v,a,b) {
	      var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
	      return n < 0 ? 0 : n > w ? w : n;
	    }

	    $(window).keydown(function(e) { d[e.which] = true; });
	    $(window).keyup(function(e) { d[e.which] = false; });

	    setInterval(function() {
	      box.css({
	        left: function(i,v) { return newv(v, 37, 39); },
	        top: function(i,v) { return newv(v, 38, 40); }
	      });
	      // console.log(box.position())
	      // left less than 201
	      // top less than 210
	     

	     //  if (box.position().left < 201 && box.position().top < 210) {
	     //  	console.log("in the zone");
	    	// //callback()
	     //  }


	    }, 20);



	    var standStill = "url(assets/img/character-v2.png)";
	    var moveLeft = "url(assets/img/move-left-x.gif)";
	    var moveRight = "url(assets/img/move-right-x.gif)";

	    $(window).on("keydown", function(){
	      if (event.keyCode == 37) {
	        //console.log("left");
	        box.css({background: moveLeft})
	      }else if(event.keyCode == 39){
	        //console.log("right");
	        box.css({background: moveRight})
	      }else if(event.keyCode == 38){
	        //console.log("right");
	        box.css({background: moveLeft})
	      }else if(event.keyCode == 40){
	        //console.log("right");
	        box.css({background: moveRight})
	      };

	    });

	    $(window).on("keyup", function(){
	      box.css({background: standStill})
	    });

	    // CAMERA
	    // Put event listeners into place
	    window.addEventListener("DOMContentLoaded", function() {
	        // Grab elements, create settings, etc.
	        var canvas = document.getElementById("canvas"),
	            context = canvas.getContext("2d"),
	            video = document.getElementById("video"),
	            videoObj = { "video": true },
	            errBack = function(error) {
	                console.log("Video capture error: ", error.code); 
	            };

	        // Put video listeners into place
	        if(navigator.getUserMedia) { // Standard
	            navigator.getUserMedia(videoObj, function(stream) {
	                video.src = stream;
	                video.play();
	            }, errBack);
	        } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
	            navigator.webkitGetUserMedia(videoObj, function(stream){
	                video.src = window.webkitURL.createObjectURL(stream);
	                video.play();
	            }, errBack);
	        }
	        else if(navigator.mozGetUserMedia) { // Firefox-prefixed
	            navigator.mozGetUserMedia(videoObj, function(stream){
	                video.src = window.URL.createObjectURL(stream);
	                video.play();
	            }, errBack);
	        }

	        // Trigger photo take
	        document.getElementById("snap").addEventListener("click", function() {
	            context.drawImage(video, 0, 0, 640, 480);
	        });

	        // Converts image to canvas; returns new canvas element
	        function convertImageToCanvas(image) {
	            var canvas = document.createElement("canvas");
	            canvas.width = image.width;
	            canvas.height = image.height;
	            canvas.getContext("2d").drawImage(image, 0, 0);

	            return canvas;
	        }

	        // Converts canvas to an image
	        function convertCanvasToImage(canvas) {
	            var image = new Image();
	            image.src = canvas.toDataURL("image/png");
	            return image;
	        }
	        
	    }, false);

		// bx.slidr stuff

		$('#btn-demo-1').on('click', function(){
			$('.l-demo-1').toggleClass('add-me');
			$('.l-demo-2').removeClass('add-me');
			$('.l-demo-3').removeClass('add-me');
			$('.l-demo-4').removeClass('add-me');
		});

		$('#btn-demo-2').on('click', function(){
			$('.l-demo-2').toggleClass('add-me');
			$('.l-demo-1').removeClass('add-me');
			$('.l-demo-3').removeClass('add-me');
			$('.l-demo-4').removeClass('add-me');
		});

		$('#btn-demo-3').on('click', function(){
			$('.l-demo-3').toggleClass('add-me');
			$('.l-demo-1').removeClass('add-me');
			$('.l-demo-2').removeClass('add-me');
			$('.l-demo-4').removeClass('add-me');
		});

		$('#btn-demo-4').on('click', function(){
			$('.l-demo-4').toggleClass('add-me');
			$('.l-demo-1').removeClass('add-me');
			$('.l-demo-2').removeClass('add-me');
			$('.l-demo-3').removeClass('add-me');
		});


	}; // END init

	shared.init = init;

	return shared;
}());

$(document).ready(function() {
	cornerstoneAPI.init();

});
