/*TMODJS:{"version":35,"md5":"38738c33e37c0e65c1865ee10ba5bf17"}*/
template("/Users/xiaominghari/Documents/wanrenqun/addcenter/src/js/tpl/fanlist",function(a){"use strict";var b=this,c=(b.$helpers,b.$each),d=a.data,e=(a.v,a.i,b.$escape),f="";return c(d,function(a){f+=' <li data-mid = "',f+=e(a.mid),f+='"> <div class="left"> <img class="avatar" src="',f+=e(a.headimgurl),f+='" /> <div class="nickname">',f+=e(a.nickname),f+='</div> </div> <div class="local">',f+=e(a.province),f+=" ",f+=e(a.city),f+="</div> </li> "}),new String(f)});