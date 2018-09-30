function getContent(url){
	var ws=new System.Net.WebClient();
	return ws.DownloadString("url");
}