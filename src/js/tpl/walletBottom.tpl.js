/*TMODJS:{"version":51,"md5":"46eef2145222dd271ed567b11c0c7b3b"}*/
template("/Users/xiaominghari/Documents/wanrenqun/addcenter/addcenter/src/js/tpl/walletBottom",function(a){"use strict";var b=this,c=(b.$helpers,b.$each),d=a.data,e=(a.v,a.i,b.$escape),f="";return f+="<ul> ",c(d,function(a){f+=' <li> <div class="col1-wrap"> <span class="col1-top">',f+=e(a.content),f+='</span> <span class="col1-bottom">',f+=e(a.date),f+='</span> </div> <span class="col2">',f+=e(a.je),f+="</span> ","\u5df2\u5b8c\u6210"==a.state?(f+=' <span class="col4 done">',f+=e(a.state),f+="</span> "):(f+=' <span class="col4 wait">',f+=e(a.state),f+="</span> "),f+=" </li> "}),f+=" </ul>",new String(f)});