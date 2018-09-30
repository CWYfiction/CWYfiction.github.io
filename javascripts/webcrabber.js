$.ajaxPrefilter(function (options) {
	if (options.crossDomain && jQuery.support.cors) {
		var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
		options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
	}
});
function getHTML(url,func,A){
	var finish=false;
	if(url.substr(0,4)!="http")url="https://"+url;
	$.get(
	url,
		function (contex) {
			$("#html").html(contex);
			func(A);
		});
}