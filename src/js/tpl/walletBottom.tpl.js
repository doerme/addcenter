/*TMODJS:{"version":17,"md5":"ae0802f1b6b81459caef722254895bb3"}*/
template("/Users/xiaominghari/Documents/wanrenqun/addcenter/src/js/tpl/walletBottom",function(a){"use strict";var b=this,c=(b.$helpers,b.$each),d=a.data,e=(a.v,a.i,b.$escape),f="";return f+="<ul> ",c(d,function(a){f+=' <li> <div class="col1-wrap"> <span class="col1-top">',f+=e(a.content),f+='</span> <span class="col1-bottom">',f+=e(a.date),f+='</span> </div> <span class="col2">',f+=e(a.je),f+="</span> ",f+="\u5df2\u5b8c\u6210"==a.state?' <span class="col4 done">\u5df2\u5b8c\u6210</span> ':' <span class="col4 wait">\u5df2\u5b8c\u6210</span> ',f+=" </li> "}),f+=" </ul>",new String(f)});