var web,mode,url,bookid="",c=0;
function Type(){
	urlinfo=window.location.href; //获取当前页面的url
	len=urlinfo.length;//获取url的长度
	offset=urlinfo.indexOf("?");//设置参数字符串开始的位置
	newsidinfo=urlinfo.substr(offset,len)//取出参数字符串 这里会获得类似“id=1”这样的字符串
	newsids=newsidinfo.split("=");//对获得的参数字符串按照“=”进行分割
	newsid=newsids[1];//得到参数值
	url=newsid;
	if(newsid.substr(12,2)=="qu"){
		c=0;
		web="";
		for(var i=0;i<newsid.length;i++){
			web+=newsid[i];
			if(newsid[i]=="/")c++;
			if(c==5)break;
		}
		mode=0;
		bookid=web;
	}
	else {
		web="https://www.xxbiquge.com";mode=1;
		bookid="";
		for(var i=0;i<newsid.length;i++){
			bookid+=newsid[i];
			if(newsid[i]=="/")c++;
			if(c==4)break;
		}
	}
}