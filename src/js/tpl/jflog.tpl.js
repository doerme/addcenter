/*TMODJS:{"version":7,"md5":"c991aaa095a93afbd7a648c726b407b9"}*/
template("J:/newpan/addcenter/src/js/tpl/jflog",function(a){"use strict";var b=this,c=(b.$helpers,b.$each),d=a.data,e=(a.v,a.i,b.$escape),f="";return c(d,function(a){f+=' <li> <div class="left"> <p>',f+=e(a.content),f+="</p> <p>",f+=e(a.date),f+='</p> </div> <p class="count"><span>',f+=e(a.je),f+="</span>  </p> </li> "}),new String(f)});