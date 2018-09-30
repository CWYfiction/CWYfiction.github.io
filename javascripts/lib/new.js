function emHTML(id,src){
    elmnt=document.getElementById(id);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            elmnt.innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", file, src);
    xhttp.send();
}