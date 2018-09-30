document.write('<meta charset="utf-8">');
document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
document.write('<script defer src="/javascripts/lib/material.js"></script>');
//document.getElementById("").innerHTML+=('');
//document.write('');
function include(src){
	document.write('<script src="/javascripts/'+src+'.js"></script>');
}
//include("lib/w3");
include('lib/material/main');
include("style");
//include("lib/fillSearch");
include("layout");