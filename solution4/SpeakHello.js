(function (window) {

	var helloSpeaker= {};
	var speakWord = "Hello";

	helloSpeaker.speakhi= function(name) {
  		console.log(speakWord + " " + name);
	}


  window.helloSpeaker = helloSpeaker;

})(window);


