/*TMODJS:{"version":14,"md5":"b8d8304fe30f68541084b958f40b8d00"}*/
template("/Users/xiaominghari/Documents/wanrenqun/addcenter/src/js/tpl/walletTop",function(a){"use strict";var b=this,c=(b.$helpers,b.$each),d=a.data,e=(a.v,a.i,b.$escape),f="";return f+="<ul> ",c(d,function(a){f+=' <li> <span class="col1">',f+=e(a.content),f+='</span> <span class="col2">',f+=e(a.je),f+='</span> <a href="',f+=e(a.tx_url),f+='" class="col3">\u63d0\u73b0</a> </li> '}),f+=" </ul>",new String(f)});