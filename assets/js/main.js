console.log("main.js loaded");

if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var cornerstoneAPI = (function(options) {
	var shared = {},
		options = options || {}

	// PRELOADER UTILITY
	var AceLoadImages = AceLoadImages || function(a, d, z) {
		a instanceof Array || (a = [a]);
		for (var e = a.length, f = 0, g = e; g--;) {
			var b = document.createElement("img");
			b.onload = function() {
				f++; 
				f >= e && isFunction(d) && d(z)
			};
			b.src = a[g]; 
		}
	}

	var isFunction = isFunction || function(functionToCheck) {
		var getType = {};
		return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
	}

	AceLoadImages([
		'assets/img/product-img-shizo-x.png',
		'assets/img/product-img-shizo-x-hover.png',
		'assets/img/product-img-widow-x.png',
		'assets/img/product-img-widow-x-hover.png',
		'assets/img/product-img-night-x.png',
		'assets/img/product-img-night-x-hover.png',
		'assets/img/character-v2.png',
		'assets/img/move-left-x.gif',
		'assets/img/move-right-x.gif',
		'assets/img/curtain-left_v1.2.png',
		'assets/img/curtain-right_v1.2.png',
		'assets/img/curtain-top_v1.2.png',
		'assets/img/l-stage-bg.jpg'
	], imagesAreLoaded);

	function imagesAreLoaded() {
	  	TweenMax.to(".spinner" , 0.75, {
	  		autoAlpha: 0,
	  		ease: Back.easeInOut
	  	});

	  	TweenMax.to(".l-callout-panel" , 0.75, {
	  		scale: 1,
	  		autoAlpha: 1,
	  		ease: Back.easeInOut
	  	});
	}
	// END PRELOAD UTILITY

	var openAnimation = new TimelineMax({paused: true});	
	openAnimation.to(".l-curtain-top", 0.75, { autoAlpha: 1, top: 0, marginTop: 0, ease: Back.easeInOut});
	openAnimation.to(".l-curtain-left", 0.75, { autoAlpha: 1, rotation: 0, ease: Back.easeInOut}, 0.25);
	openAnimation.to(".l-curtain-right", 0.75, { autoAlpha: 1, rotation: 0, ease: Back.easeInOut}, 0.25);
	openAnimation.to(".l-curtain-left", 0.75, { autoAlpha: 1, left: 0, rotation: 0, ease: Back.easeInOut}, 0.25);
	openAnimation.to(".l-curtain-right", 0.75, { autoAlpha: 1, right: 0, rotation: 0, ease: Back.easeInOut}, 0.25);
	openAnimation.to(".l-sign-main", 0.5, { autoAlpha: 1, top: 0, ease: Back.easeInOut}, 0.15);
	openAnimation.to(".l-sign-left", 0.5, { autoAlpha: 1, top: 0, ease: Back.easeInOut}, 0.25);
	openAnimation.to(".l-sign-right", 0.5, { autoAlpha: 1, top: 0, ease: Back.easeInOut}, 0.5);

	$("#l-btn-yes").on("click", function(){

		TweenMax.to(".l-callout-panel-copy" , 0.25, {
	  		autoAlpha: 0,
	  		ease: Quad.easeInOut
	  	});

		TweenMax.to(".l-splash-yes-copy" , 2.5, {
	  		css: {color: "#CD0006", scale: 1.25},
	  		ease: Quad.easeInOut,
	  		onComplete: function() {
	  			TweenMax.to(".l-splash-overlay" , 0.5, {
			  		autoAlpha: 0,
			  		ease: Quad.easeInOut
			  	});

				openAnimation.play();
	  		}
	  	});
	  	
	});

	$("#l-btn-no").on("click", function(){

		TweenMax.to(".l-callout-panel-copy" , 0.25, {
	  		autoAlpha: 0,
	  		ease: Quad.easeInOut
	  	});

		TweenMax.to(".l-splash-no-copy" , 2, {
	  		css: {color: "#CD0006", scale: 1.25},
	  		ease: Quad.easeInOut,
	  		onComplete: function() {
	  			TweenMax.to(".l-splash-overlay" , 0.5, {
			  		autoAlpha: 0,
			  		ease: Quad.easeInOut
			  	});

				openAnimation.play();
	  		}
	  	});
	  	
	});

	

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

	// BOTTOM BEFORE CLOUSURE
	var init = function() {
    
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
