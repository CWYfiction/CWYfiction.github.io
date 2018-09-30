document.write('<link rel="stylesheet" href="/css/material.css">');
function CBL(con,lnk,fs){
    if(fs)return '<a class="block" href="'+lnk+'" style="font-size:'+fs+'px" class=>'+con+'</a>';
    else /*if(document.body.clientWidth<=500)*/return '<a class="block" href="'+lnk+'" class="resHeading">'+con+'</a>';
        //else return '<a class="block" href="'+lnk+'" style="font-size:30px">'+con+'</a>';
}
var base='  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header"> \
                <header class="mdl-layout__header"> \
                    <div class="mdl-layout__header-row"> \
                            <!-- Title --> \
                            <span class="mdl-layout-title causeSlideUpOnClick" target="searchingBox"></span> \
                            <div class="mdl-layout-spacer" id="_spacer"></div> \
                    </div> \
                </header> \
                <div class="mdl-layout__drawer" style="overflow-y:hidden;overflow-x:hidden" id="container2"> \
                    <div style="margin-top:36px;overflow-y:scroll;overflow-x:hidden;position:relative;left:0px" id="container1">\
                    <a class="block" href="/index.html" style="font-size:36px;margin-top:15px;">主页</a> \
                    <a class="block" href="/dd/index.html" style="font-size:36px;margin-top:15px;">蛋蛋的书架</a> \
                    <a class="block" href="/yy/index.html" style="font-size:36px;margin-top:15px;">洋洋的书架</a> \
                    <a class="block" href="/search.html" style="font-size:36px">添加小说</a> \
                    </div> \
                </div> \
                <main class="mdl-layout__content" id="body"> \
                    Content \
                </main> \
            </div> \
        ';

function layout(){
    var con=document.body.innerHTML;
    document.body.innerHTML=base.replace("Content",'<div class="page-content">'+con+'</div>');
    document.getElementById("container1").style.height="100%";
    document.getElementById("container1").style.width=document.getElementById("container2").offsetWidth+18+"px";
    oliverC.refresh();
}