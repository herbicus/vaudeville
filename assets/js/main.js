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
	openAnimation.to(".l-sign-right", 0.5, { autoAlpha: 1, top: 0, ease: Back.easeInOut}, 0.25);


	var menuAnimation = new TimelineMax({paused: true});
	menuAnimation.to(".mobile-nav-menu", 0.75, { autoAlpha: 1, left: 0, ease: Back.easeInOut});

	// MOBILE ICON - HAMBURGER
	$(".mobile-nav-btn").on("click", function(){
		$(this).toggleClass("open");

  		if ($(this).hasClass("played")) {
  			menuAnimation.reverse();	
  		} else {
  			menuAnimation.play();
  		}	
  		$(this).toggleClass("played");
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
	    }, 20);

	    var moveLeft = "url(assets/img/move-left.gif)";
	    var moveRight = "url(assets/img/move-right.gif)";

	    $(window).on("keydown", function(){
	      if (event.keyCode == 37) {
	        console.log("left");
	        box.css({background: moveLeft})
	      }else if(event.keyCode == 39){
	        console.log("right");
	        box.css({background: moveRight})
	      }else if(event.keyCode == 38){
	        console.log("right");
	        box.css({background: moveLeft})
	      }else if(event.keyCode == 40){
	        console.log("right");
	        box.css({background: moveRight})
	      };

	    });
	}; // END init

	shared.init = init;

	return shared;
}());

$(document).ready(function() {
	cornerstoneAPI.init();

});
