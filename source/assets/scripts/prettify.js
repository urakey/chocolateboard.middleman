window.PR_SHOULD_USE_CONTINUATION=!0;var prettyPrintOne,prettyPrint;
(function(){function z(a,f,d,h){f&&(a={sourceCode:f,basePos:a},d(a),h.push.apply(h,a.decorations))}function n(a,f){for(var d={},h,i=a.concat(f),g=[],D={},m=0,k=i.length;m<k;++m){var e=i[m],l=e[3];if(l)for(var r=l.length;0<=--r;)d[l.charAt(r)]=e;e=e[1];l=""+e;D.hasOwnProperty(l)||(g.push(e),D[l]=null)}g.push(/[\0-\uffff]/);for(var n=function(b){var a=b.charCodeAt(0);if(92!==a)return a;var j=b.charAt(1);return(a=s[j])?a:"0"<=j&&"7">=j?parseInt(b.substring(1),8):"u"===j||"x"===j?parseInt(b.substring(2),
16):b.charCodeAt(1)},u=function(b){if(32>b)return(16>b?"\\x0":"\\x")+b.toString(16);b=String.fromCharCode(b);return"\\"===b||"-"===b||"]"===b||"^"===b?"\\"+b:b},p=function(b){var a=b.substring(1,b.length-1).match(RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),b=[],j="^"===a[0],f=["["];j&&f.push("^");for(var j=j?1:0,v=a.length;j<v;++j){var d=a[j];if(/\\[bdsw]/i.test(d))f.push(d);else{var d=n(d),c;j+2<v&&"-"===a[j+1]?(c=n(a[j+2]),j+=
2):c=d;b.push([d,c]);65>c||122<d||(65>c||90<d||b.push([Math.max(65,d)|32,Math.min(c,90)|32]),97>c||122<d||b.push([Math.max(97,d)&-33,Math.min(c,122)&-33]))}}b.sort(function(b,a){return b[0]-a[0]||a[1]-b[1]});a=[];v=[];for(j=0;j<b.length;++j)d=b[j],d[0]<=v[1]+1?v[1]=Math.max(v[1],d[1]):a.push(v=d);for(j=0;j<a.length;++j)d=a[j],f.push(u(d[0])),d[1]>d[0]&&(d[1]+1>d[0]&&f.push("-"),f.push(u(d[1])));f.push("]");return f.join("")},i=function(b){for(var a=b.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)",
"g")),d=a.length,f=[],c=0,h=0;c<d;++c){var e=a[c];"("===e?++h:"\\"===e.charAt(0)&&(e=+e.substring(1))&&(e<=h?f[e]=-1:a[c]=u(e))}for(c=1;c<f.length;++c)-1===f[c]&&(f[c]=++x);for(h=c=0;c<d;++c)e=a[c],"("===e?(++h,f[h]||(a[c]="(?:")):"\\"===e.charAt(0)&&(e=+e.substring(1))&&e<=h&&(a[c]="\\"+f[e]);for(c=0;c<d;++c)"^"===a[c]&&"^"!==a[c+1]&&(a[c]="");if(b.ignoreCase&&o)for(c=0;c<d;++c)e=a[c],b=e.charAt(0),2<=e.length&&"["===b?a[c]=p(e):"\\"!==b&&(a[c]=e.replace(/[a-zA-Z]/g,function(a){a=a.charCodeAt(0);
return"["+String.fromCharCode(a&-33,a|32)+"]"}));return a.join("")},x=0,o=!1,D=!1,m=0,k=g.length;m<k;++m)if(e=g[m],e.ignoreCase)D=!0;else if(/[a-z]/i.test(e.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){o=!0;D=!1;break}for(var s={b:8,t:9,n:10,v:11,f:12,r:13},l=[],m=0,k=g.length;m<k;++m){e=g[m];if(e.global||e.multiline)throw Error(""+e);l.push("(?:"+i(e)+")")}h=RegExp(l.join("|"),D?"gi":"g");var E=f.length,c=function(a){for(var e=a.basePos,j=[e,"pln"],u=0,o=a.sourceCode.match(h)||
[],l={},m=0,i=o.length;m<i;++m){var k=o[m],g=l[k],s=void 0,q;if("string"===typeof g)q=!1;else{var p=d[k.charAt(0)];if(p)s=k.match(p[1]),g=p[0];else{for(q=0;q<E;++q)if(p=f[q],s=k.match(p[1])){g=p[0];break}s||(g="pln")}if((q=5<=g.length&&"lang-"===g.substring(0,5))&&!(s&&"string"===typeof s[1]))q=!1,g="src";q||(l[k]=g)}p=u;u+=k.length;if(q){q=s[1];var r=k.indexOf(q),x=r+q.length;s[2]&&(x=k.length-s[2].length,r=x-q.length);g=g.substring(5);z(e+p,k.substring(0,r),c,j);z(e+p+r,q,F(g,q),j);z(e+p+x,k.substring(x),
c,j)}else j.push(e+p,g)}a.decorations=j};return c}function g(a){var f=[],d=[];a.tripleQuotedStrings?f.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):a.multiLineStrings?f.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):f.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,
null,"\"'"]);a.verbatimStrings&&d.push(["str",/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var h=a.hashComments;h&&(a.cStyleComments?(1<h?f.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):f.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),d.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):f.push(["com",/^#[^\r\n]*/,null,"#"]));a.cStyleComments&&(d.push(["com",/^\/\/[^\r\n]*/,
null]),d.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,null]));a.regexLiterals&&d.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C[\\s\\S]|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+/)")]);(h=a.types)&&d.push(["typ",h]);a=(""+a.keywords).replace(/^ | $/g,"");a.length&&d.push(["kwd",RegExp("^(?:"+
a.replace(/[\s,]+/g,"|")+")\\b"),null]);f.push(["pln",/^\s+/,null," \r\n\t\u00a0"]);d.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,null],["typ",/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],["pln",/^[a-z_$][a-z_$@0-9]*/i,null],["lit",/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,null,"0123456789"],["pln",/^\\[\s\S]?/,null],["pun",/^.[^\s\w\.$@\'\"\`\/\\]*/,null]);return n(f,d)}function y(a,f,d){function h(a){switch(a.nodeType){case 1:if(i.test(a.className))break;if("br"===
a.nodeName)g(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)h(a);break;case 3:case 4:if(d){var e=a.nodeValue,f=e.match(n);if(f){var k=e.substring(0,f.index);a.nodeValue=k;(e=e.substring(f.index+f[0].length))&&a.parentNode.insertBefore(m.createTextNode(e),a.nextSibling);g(a);k||a.parentNode.removeChild(a)}}}}function g(a){function d(a,f){var e=f?a.cloneNode(!1):a,c=a.parentNode;if(c){var c=d(c,1),b=a.nextSibling;c.appendChild(e);for(var h=b;h;h=b)b=h.nextSibling,
c.appendChild(h)}return e}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=d(a.nextSibling,0),f;(f=a.parentNode)&&1===f.nodeType;)a=f;e.push(a)}for(var i=/(?:^|\s)nocode(?:\s|$)/,n=/\r\n?|\n/,m=a.ownerDocument,k=m.createElement("li");a.firstChild;)k.appendChild(a.firstChild);for(var e=[k],l=0;l<e.length;++l)h(e[l]);f===(f|0)&&e[0].setAttribute("value",f);var r=m.createElement("ol");r.className="linenums";for(var f=Math.max(0,f-1|0)||0,l=0,t=e.length;l<t;++l)k=e[l],k.className="L"+(l+f)%
10,k.firstChild||k.appendChild(m.createTextNode("\u00a0")),r.appendChild(k);a.appendChild(r)}function i(a,f){for(var d=f.length;0<=--d;){var h=f[d];C.hasOwnProperty(h)?G.console&&console.warn("cannot override language handler %s",h):C[h]=a}}function F(a,f){if(!a||!C.hasOwnProperty(a))a=/^\s*</.test(f)?"default-markup":"default-code";return C[a]}function H(a){var f,d,h=a.langExtension;try{var g=a.pre,i=function(a){switch(a.nodeType){case 1:if(n.test(a.className))break;for(var b=a.firstChild;b;b=b.nextSibling)i(b);
b=a.nodeName.toLowerCase();if("br"===b||"li"===b)m[l]="\n",e[l<<1]=k++,e[l++<<1|1]=a;break;case 3:case 4:b=a.nodeValue,b.length&&(b=g?b.replace(/\r\n?/g,"\n"):b.replace(/[ \t\r\n]+/g," "),m[l]=b,e[l<<1]=k,k+=b.length,e[l++<<1|1]=a)}},n=/(?:^|\s)nocode(?:\s|$)/,m=[],k=0,e=[],l=0;i(a.sourceNode);f=m.join("").replace(/\n$/,"");d=e;a.sourceCode=f;a.spans=d;a.basePos=0;F(h,f)(a);var r=/\bMSIE\s(\d+)/.exec(navigator.userAgent),r=r&&8>=+r[1];f=/\n/g;var t=a.sourceCode,u=t.length;d=0;var p=a.spans,x=p.length,
h=0,o=a.decorations,s=o.length,E=0;o[s]=u;var c,b;for(b=c=0;b<s;)o[b]!==o[b+2]?(o[c++]=o[b++],o[c++]=o[b++]):b+=2;s=c;for(b=c=0;b<s;){for(var B=o[b],j=o[b+1],w=b+2;w+2<=s&&o[w+1]===j;)w+=2;o[c++]=B;o[c++]=j;b=w}o.length=c;var v=a.sourceNode,z;v&&(z=v.style.display,v.style.display="none");try{for(;h<x;){var y=p[h+2]||u,C=o[E+2]||u,w=Math.min(y,C),A=p[h+1],J;if(1!==A.nodeType&&(J=t.substring(d,w))){r&&(J=J.replace(f,"\r"));A.nodeValue=J;var H=A.ownerDocument,q=H.createElement("span");q.className=o[E+
1];var I=A.parentNode;I.replaceChild(q,A);q.appendChild(A);d<y&&(p[h+1]=A=H.createTextNode(t.substring(w,y)),I.insertBefore(A,q.nextSibling))}d=w;d>=y&&(h+=2);d>=C&&(E+=2)}}finally{v&&(v.style.display=z)}}catch(K){G.console&&console.log(K&&K.stack?K.stack:K)}}var G=window,t=["break,continue,do,else,for,if,return,while"],B=[[t,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],
I=[B,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],L=[B,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],M=[L,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],
B=[B,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],N=[t,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],O=[t,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],t=[t,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],P=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
Q=/\S/,R=g({keywords:[I,M,B,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END"+N,O,t],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),C={};i(R,["default-code"]);i(n([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",
/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup htm html mxml xhtml xml xsl".split(" "));i(n([["pln",/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
["pun",/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);i(n([],[["atv",/^[\s\S]+/]]),["uq.val"]);i(g({keywords:I,hashComments:!0,cStyleComments:!0,types:P}),"c cc cpp cxx cyc m".split(" "));i(g({keywords:"null,true,false"}),["json"]);i(g({keywords:M,hashComments:!0,cStyleComments:!0,
verbatimStrings:!0,types:P}),["cs"]);i(g({keywords:L,cStyleComments:!0}),["java"]);i(g({keywords:t,hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]);i(g({keywords:N,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py"]);i(g({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl",
"pl","pm"]);i(g({keywords:O,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]);i(g({keywords:B,cStyleComments:!0,regexLiterals:!0}),["js"]);i(g({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);i(n([],[["str",/^[\s\S]+/]]),["regex"]);var S=G.PR={createSimpleLexer:n,
registerLangHandler:i,sourceDecorator:g,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:G.prettyPrintOne=function(a,f,d){var h=document.createElement("pre");h.innerHTML=a;d&&y(h,d,!0);H({langExtension:f,numberLines:d,sourceNode:h,pre:1});return h.innerHTML},prettyPrint:G.prettyPrint=function(a){function f(){for(var d=
G.PR_SHOULD_USE_CONTINUATION?m.now()+250:Infinity;k<h.length&&m.now()<d;k++){var g=h[k],i=g.className;if(r.test(i)&&!t.test(i)){for(var c=!1,b=g.parentNode;b;b=b.parentNode)if(x.test(b.tagName)&&b.className&&r.test(b.className)){c=!0;break}if(!c){g.className+=" prettyprinted";var i=i.match(l),n;if(c=!i){for(var c=g,b=void 0,j=c.firstChild;j;j=j.nextSibling)var w=j.nodeType,b=1===w?b?c:j:3===w?Q.test(j.nodeValue)?c:b:b;c=(n=b===c?void 0:b)&&p.test(n.tagName)}c&&(i=n.className.match(l));i&&(i=i[1]);
c=u.test(g.tagName)?1:(c=(c=g.currentStyle)?c.whiteSpace:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(g,null).getPropertyValue("white-space"):0)&&"pre"===c.substring(0,3);(b=(b=g.className.match(/\blinenums\b(?::(\d+))?/))?b[1]&&b[1].length?+b[1]:!0:!1)&&y(g,b,c);e={langExtension:i,sourceNode:g,numberLines:b,pre:c};H(e)}}}k<h.length?setTimeout(f,250):a&&a()}for(var d=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],
h=[],g=0;g<d.length;++g)for(var i=0,n=d[g].length;i<n;++i)h.push(d[g][i]);var d=null,m=Date;m.now||(m={now:function(){return+new Date}});var k=0,e,l=/\blang(?:uage)?-([\w.]+)(?!\S)/,r=/\bprettyprint\b/,t=/\bprettyprinted\b/,u=/pre|xmp/i,p=/^code$/i,x=/^(?:pre|code|xmp)$/i;f()}};"function"===typeof define&&define.amd&&define("google-code-prettify",[],function(){return S})})();/*

 Copyright (C) 2012 Kyo Nagashima <kyo@hail2u.net>

 http://hail2u.mit-license.org/2012
*/
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_COMMENT,/^#[^\r\n]*/,null,"#"],[PR.PR_PLAIN,/^\s+/,null," \t\r\n"]],[[PR.PR_PLAIN,/^\w+/]]),["config","conf"]);/*

 Copyright (C) 2009 Google Inc.
 Copyright (C) 2010 Kyo Nagashima <kyo@hail2u.net>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[ \t\r\n\f]+/,null," \t\r\n\f"]],[[PR.PR_STRING,/^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/,null],[PR.PR_STRING,/^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/,null],["lang-css-str",/^url\(([^\)\"\']+)\)/i],[PR.PR_KEYWORD,/^(?:url|rgba?|hsla?|local|\!important|@import|@page|@media|@charset|@font-face|inherit)(?=[^\-\w]|$)/i,null],["lang-css-kw",/^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i],[PR.PR_COMMENT,
/^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],[PR.PR_COMMENT,/^(?:<\!--|--\>)/],[PR.PR_LITERAL,/^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],[PR.PR_LITERAL,/^#(?:[0-9a-f]{3}){1,2}/i],[PR.PR_PLAIN,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],[PR.PR_PUNCTUATION,/^[^\s\w\'\"]+/]]),["css"]);PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_KEYWORD,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i]]),["css-kw"]);
PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_STRING,/^[^\)\"\']+/]]),["css-str"]);/*

 Copyright (C) 2009 Google Inc.
 Copyright (C) 2011 Kyo Nagashima <kyo@hail2u.net>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[ \t\r\n\f]+/,null," \t\r\n\f"]],[[PR.PR_STRING,/^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/,null],[PR.PR_STRING,/^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/,null],["lang-scss-str",/^url\(([^\)\"\']+)\)/i],[PR.PR_KEYWORD,/^(?:url|rgba?|hsla?|\!important|@import|@page|@media|@charset|inherit|abs|adjust-color|adjust-hue|alpha|blue|ceil|change-color|comparable|complement|darken|desaturate|fade-in|fade-out|floor|grayscale|green|hue|invert|join|length|lighten|lightness|mix|nth|opacity|percentage|quote|red|round|saturate|saturation|scale-color|transparentize|type-of|unit|unitless|unquote|!default|@extend|@debug|@warn|@if|@else( if)?|@for|@each|@while|@mixin|@include|@function|@return)(?=[^\-\w]|$)/i,
null],["lang-scss-kw",/^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i],[PR.PR_COMMENT,/^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],[PR.PR_COMMENT,/^\/\/[^\r\n]*/,null],[PR.PR_LITERAL,/^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],[PR.PR_LITERAL,/^#(?:[0-9a-f]{3}){1,2}/i],[PR.PR_LITERAL,/^#{.*?}/],[PR.PR_LITERAL,/^&/],[PR.PR_PLAIN,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],[PR.PR_PLAIN,/^\$?-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],[PR.PR_PUNCTUATION,
/^[^\s\w\'\"#{}$]+/]]),["scss"]);PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_KEYWORD,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i]]),["scss-kw"]);PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_STRING,/^[^\)\"\']+/]]),["scss-str"]);/*

 Copyright (C) 2012 Kyo Nagashima <kyo@hail2u.net>

 http://hail2u.mit-license.org/2012
*/
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0\u2028\u2029]+/,null,"\t\n\r \u00a0\u2028\u2029"]],[[PR.PR_STRING,/^\"[^\"\r\n]*?\"/],[PR.PR_STRING,/^\'[^\'\r\n]*?\'/],[PR.PR_COMMENT,/^[\"\u2018\u2019][^\r\n\u2028\u2029]*/],[PR.PR_KEYWORD,/^(?:function|endfunction|delfunction|return|call|let|unlet|lockvar|unlockvar|if|endif|else|elseif|while|endwhile|for|in|endfor|continue|break|try|endtry|catch|finally|throw|echo|ehon|echohl|echomsg|echoerr|execute|set|autocmd|augroup|[nvxsoilc]?(?:nore)?map|command)\b/i],
[PR.PR_LITERAL,/^(?:\d+)/i],[PR.PR_PLAIN,/^(?:(?:[a-z]|_\w)[\w\:]*)/i],[PR.PR_PUNCTUATION,/^[^\s\w\'\"]+/]]),["vim"]);/*
 prettify.js

 LICENSE: http://hail2u.mit-license.org/2011
*/
window.addEventListener&&window.addEventListener("DOMContentLoaded",function(){var z=RegExp("\\blanguage-(bsh|c|cc|cpp|cs|csh|cyc|cv|htm|html|java|js|m|mxml|perl|pl|pm|py|rb|sh|xhtml|xml|xsl|conf|config|css|scss|vim)\\b");if(document.querySelectorAll){var n=document.querySelectorAll("code[class*=language-]");if(n){for(var g=0,y=n.length;g<y;g++){var i=n[g],F=i.parentNode;"pre"===F.tagName.toLowerCase()&&z.test(i.className)&&(F.className+=" prettyprint")}prettyPrint()}}},!1);