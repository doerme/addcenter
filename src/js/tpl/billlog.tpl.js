/*TMODJS:{"version":8,"md5":"80da69e336f9214ff096039f6bee87f4"}*/
template("/Users/xiaominghari/Documents/wanrenqun/addcenter/src/js/tpl/billlog",function(a){"use strict";var b=this,c=(b.$helpers,b.$each),d=a.data,e=(a.v,a.i,b.$escape),f="";return c(d,function(a){f+=' <li data-id="',f+=e(a.id),f+='"> <div class="left"> <p>',f+=e(a.content),f+="</p> <p>",f+=e(a.date),f+='</p> </div> <p class="count"> <span>',f+=e(a.je),f+="</span> ","\u5df2\u5b8c\u6210"==a.state?f+=' <span class="pay-state done">\u652f\u4ed8\u6210\u529f</span> ':"\u7b49\u5f85\u4e2d"==a.state?f+=' <span class="pay-state ing">\u7b49\u5f85\u4e2d</span> ':(f+=' <a href="',f+=e(a.tx_url),f+='" class="pay-state tixian">\u63d0\u73b0</a> '),f+=" </p> </li> "}),new String(f)});