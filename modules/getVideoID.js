//http://stackoverflow.com/questions/3452546/javascript-regex-how-to-get-youtube-video-id-from-url

module.exports = function(url) {
	var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
	var match = url.match(regExp);
	if (match && match[2].length===11){
	    return match[2];
	}else{
	    return undefined;
	}
}