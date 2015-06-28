$(document).ready(function () {

  console.log('you\'ve been rick rolled');

  var $slides = $('.images img');

  var currentSlide = 0;				//keep track on the current slide
  var stayTime = 0.7;					//time the slide stays
  var slideTime = 0.3;				//fade in / fade out time 

  var movement = -30;

  TweenLite.set($slides.filter(":gt(0)"), {autoAlpha:0, y: movement});	//we hide all images after the first one
  TweenLite.delayedCall(stayTime, nextSlide);				//start the slideshow

  function nextSlide(){
    if(currentSlide < 5){
      TweenLite.to( $slides.eq(currentSlide), slideTime, {autoAlpha:0, y: movement} );		//fade out the old slide
      currentSlide = ++currentSlide % $slides.length;							//find out the next slide
      TweenLite.to( $slides.eq(currentSlide), slideTime, {autoAlpha:1, y: 0} );		//fade in the next slide
      TweenLite.delayedCall(stayTime, nextSlide);								//wait a couple of seconds before next slide
    }

  }


});