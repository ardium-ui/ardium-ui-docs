import{$ as cn,$a as de,$b as Et,A as sn,Aa as We,Ab as gr,Ac as xo,B as Ze,Ba as p,Bb as Ce,Bc as xr,C as ne,Ca as J,Cb as Za,Cc as wr,D as Q,Da as ye,Db as ze,Dc as wo,E as P,Ea as me,Eb as Ja,Ec as To,F as B,Fa as y,Fb as Oe,Fc as Do,G as F,Ga as X,Gb as _r,H as Ua,Ha as Tt,Hb as te,I as Na,Ia as U,Ib as Pi,J as sr,Ja as N,K as lt,Ka as o,Kb as eo,L as T,La as a,Lb as to,M as D,Ma as b,Mb as ii,N as ln,Na as Ii,Nb as io,O as Me,Oa as Mi,Ob as mn,P as rt,Pa as qa,Pb as ni,Q as dn,Qa as W,R as Je,Ra as Qa,Rb as tt,S as $e,Sa as _,Sb as $t,T as se,Ta as f,Tb as no,U as h,Ua as $,Ub as ro,V as pe,Va as R,Vb as Vi,W as S,Wa as pr,Wb as ao,X as Fi,Xa as mr,Xb as Oi,Y as ja,Ya as hr,Yb as Ri,Z as Ya,Za as xe,Zb as hn,_ as $a,_a as Fe,_b as Wt,a as nn,aa as Wa,ab as M,ac as oo,b as Ei,ba as le,bb as s,bc as so,c as Ee,ca as un,cb as v,cc as vr,d as ir,da as lr,db as w,dc as lo,e as Ia,ea as at,eb as ei,ec as yr,f as nr,fa as d,fb as z,fc as k,g as Ai,ga as H,gb as K,gc as Ne,h as Ma,ha as dr,hb as q,hc as fn,i as Xt,ia as Te,ib as ke,ic as Li,j as ka,ja as cr,jb as jt,jc as co,k as Xe,ka as ot,kb as ti,kc as uo,l as Pa,la as ft,lb as ge,lc as po,m as Va,ma as Ae,mb as Ie,mc as mo,n as rn,na as Be,nb as fr,nc as ho,o as Oa,oa as Jt,ob as Ga,oc as Cr,p as rr,pa as dt,pb as Xa,pc as br,q as ht,qa as m,qc as fo,r as ar,ra as G,rb as et,rc as go,s as Ra,sa as Y,sb as Dt,sc as _o,t as La,ta as ur,tb as ki,tc as At,u as Ba,ua as re,ub as ae,uc as Ft,v as Ha,va as pn,vb as Yt,vc as gn,w as an,wa as Nt,wb as St,wc as vo,x as on,xa as g,xb as I,xc as yo,y as Zt,ya as za,yb as Ue,yc as Co,z as or,za as Ka,zb as he,zc as bo}from"./chunk-Q3B63GJG.js";import{a as C,b as L,c as tn,d as Si,e as Se}from"./chunk-FDERIQAA.js";var Cs=tn(Pn=>{"use strict";Object.defineProperty(Pn,"__esModule",{value:!0});Pn.resolvePath=void 0;var vs=/((?:\??\.|(?:\?\.)?\[).*$|$)/.source,au=new RegExp(/^([\w$]+)/.source+vs),ou=new RegExp(/^\[(?:(-?\d+(?:\.\d+)?)|(['"`])(.*?)\2)\](?=\??\.|\[(?:(?:-?\d+(?:\.\d+)?)|(['"`]).*?\4)|$)/.source+vs);function su(t,n){if(typeof t!="object")throw new TypeError("Expected object argument to be an object, got "+typeof t);if(typeof n!="string")throw new TypeError("Expected path argument to be a string, got "+typeof n);return ys(t,n)}Pn.resolvePath=su;function ys(t,n,e=n){if(!n)return t;let i;if([i,n]=lu(n,e),t.hasOwnProperty(i))return ys(t[i],n,e)}function lu(t,n){let e,i,r=t.match(au);if(r)return e=r[1],i=_s(r[2]),[e,i];if(r=t.match(ou),r)return e=r[1]?du(r[1]):r[3],i=_s(r[5]),[e,i];throw new Error("Object path is invalid: "+n)}function _s(t){return t.charAt(0)=="."?t.slice(1):t.charAt(0)=="?"?t.slice(2):t}function du(t){return isNaN(Number(t))?t:Number(t)}});var xs=tn(ci=>{"use strict";Object.defineProperty(ci,"__esModule",{value:!0});ci.TakeChance=void 0;function uu(t=0,n=100){let e=new Uint32Array(1);crypto.getRandomValues(e);let i=e[0]/4294967296;return t=Math.ceil(t),n=Math.floor(n),Math.floor(i*(n-t+1))+t}function qr(t=0,n=1){return Math.random()*(n-t)+t}function kt(t=0,n=100){return Math.round(qr(t,n))}function pu(t=.5){return Math.random()<t}function mu(t,n=0,e=100){let i=[];for(let r=0;r<t;r++)i.push(kt(n,e));return i}function hu(t,n=0,e=1){let i=[];for(let r=0;r<t;r++)i.push(qr(n,e));return i}function bs(t=0,n=1,e=1){if(e<=0)throw new Error("Skew cannot be lower than or equal to 0");let i=0,r=0;for(;i===0;)i=Math.random();for(;r===0;)r=Math.random();let l=Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*r);return l=l/10+.5,l>1||l<0?l=bs(t,n,e):(l=Math.pow(l,e),l*=n-t,l+=t),l}function Qr(t,n=0,e=t.length-1){return n<0&&(n=0),e>t.length-1&&(e=t.length-1),t[kt(n,e)]}function fu(t){let n=Object.keys(t);return Qr(n)}function Vn(t){var n;typeof t.from=="string"&&(t.from=t.from.split(""));let e=(n=t.from)!==null&&n!==void 0?n:[];return(t.letters||t.lowercase)&&e.push(..."abcdefghijklmnopqrstuvwxyz".split("")),(t.letters||t.uppercase)&&e.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")),t.numbers&&e.push(..."0123456789".split("")),t.special&&e.push(..."!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("")),e=[...new Set(e)],Qr(e)}function Gr(t,n){let e="";for(let i=0;i<t;i++)e+=Vn(n);return e}function gu(t,n=new Date(Date.now())){return new Date(kt(t.valueOf(),n.valueOf()))}function _u(t=10){let n="";do n=Vn({letters:!0,numbers:!0,from:"-_"});while(n<="9"||n=="_");for(let e=1;e<t;e++)n+=Vn({letters:!0,numbers:!0,from:"-_"});return n}function vu(t=16){var n,e,i,r,l,c,u,A;let j="";do j=Gr(t,{letters:!0,numbers:!0,special:!0});while(((e=(n=j.match(/[a-z]/g))===null||n===void 0?void 0:n.length)!==null&&e!==void 0?e:0)<t/4||((r=(i=j.match(/[A-Z]/g))===null||i===void 0?void 0:i.length)!==null&&r!==void 0?r:0)<t/4||((c=(l=j.match(/[0-9]/g))===null||l===void 0?void 0:l.length)!==null&&c!==void 0?c:0)<t/6||((A=(u=j.match(/[!"#$%&'()*+,\-./:;<=>?@[\\]\^_`{|}~]/g))===null||u===void 0?void 0:u.length)!==null&&A!==void 0?A:0)<t/8);return j}function yu(t=6){return kt(1,t)}function Cu(){return{r:kt(0,255),g:kt(0,255),b:kt(0,255)}}function bu(){return"#"+Gr(6,{numbers:!0,from:"abcdef"})}ci.TakeChance={int:kt,secureInt:uu,float:qr,multipleInt:mu,multipleFloat:hu,boolean:pu,binomial:bs,character:Vn,string:Gr,fromArray:Qr,fromObject:fu,date:gu,id:_u,password:vu,die:yu,rgbColor:Cu,hexColor:bu};ci.default=ci.TakeChance});var ws=tn(ve=>{"use strict";Object.defineProperty(ve,"__esModule",{value:!0});ve.approximate=ve.APPROXIMATION_UNITS=ve.roundToMultiple=ve.roundToPrecision=ve.roundFromZero=ve.roundToZero=ve.roundDown=ve.roundUp=ve.round=void 0;function Xr(t){return Math.round(t)}ve.round=Xr;function Zr(t){return Math.ceil(t)}ve.roundUp=Zr;function Jr(t){return Math.floor(t)}ve.roundDown=Jr;function ea(t){return t<=0?Math.ceil(t):Math.floor(t)}ve.roundToZero=ea;function ta(t){return t>=0?Math.ceil(t):Math.floor(t)}ve.roundFromZero=ta;function ui(t,n=1,e="normal"){switch(n=10**n,e){case"normal":return Xr(t*n)/n;case"up":return Zr(t*n)/n;case"down":return Jr(t*n)/n;case"to_zero":return ea(t*n)/n;case"from_zero":return ta(t*n)/n}}ve.roundToPrecision=ui;function xu(t,n,e="normal"){switch(e){case"normal":return Xr(t/n)*n;case"up":return Zr(t/n)*n;case"down":return Jr(t/n)*n;case"to_zero":return ea(t/n)*n;case"from_zero":return ta(t/n)*n}}ve.roundToMultiple=xu;ve.APPROXIMATION_UNITS={k:1e3,M:1e6,B:1e9,T:1e12,Qa:1e15,Qi:1e18,Sx:1e21,Sp:1e24,Oc:1e27,No:1e30,Dc:1e33};function wu(t,n=1,e,i,r,l=!0){var c;if(!e){let j=Object.keys(ve.APPROXIMATION_UNITS);for(let O=0;O<j.length;O++){let ie=j[O],E=ve.APPROXIMATION_UNITS[ie],V=t/E;if(V>=1&&V<1e3)return i?ui(V,n).toLocaleString(i)+(l?" ":"")+ie:String(ui(V,n))+(l?" ":"")+ie}return String(ui(t,n).toLocaleString(i))}let u=ve.APPROXIMATION_UNITS[e],A=(c=r?.[e])!==null&&c!==void 0?c:e;return i?ui(t/u,n).toLocaleString(i)+(l?" ":"")+A:String(ui(t/u,n))+(l?" ":"")+A}ve.approximate=wu});var xa=tn((El,Qn)=>{"use strict";(function(){"use strict";var t=function(E,V){return V=V||"",E.replace(/(^|-)/g,"$1\\u"+V).replace(/,/g,"\\u"+V)},n=t("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7","00"),e="a-z"+t("DF-F6,F8-FF","00"),i="A-Z"+t("C0-D6,D8-DE","00"),r="A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via",l=function(E,V,Z,oe){return E=E||n,V=V||e,Z=Z||i,oe=oe||r,{capitalize:new RegExp("(^|["+E+"])(["+V+"])","g"),pascal:new RegExp("(^|["+E+"])+(["+V+Z+"])","g"),fill:new RegExp("["+E+"]+(.|$)","g"),sentence:new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")(['+V+"])","g"),improper:new RegExp("\\b("+oe+")\\b","g"),relax:new RegExp("([^"+Z+"])(["+Z+"]*)(["+Z+"])(?=[^"+Z+"]|$)","g"),upper:new RegExp("^[^"+V+"]+$"),hole:/[^\s]\s[^\s]/,apostrophe:/'/g,room:new RegExp("["+E+"]")}},c=l(),u={re:c,unicodes:t,regexps:l,types:[],up:String.prototype.toUpperCase,low:String.prototype.toLowerCase,cap:function(E){return u.up.call(E.charAt(0))+E.slice(1)},decap:function(E){return u.low.call(E.charAt(0))+E.slice(1)},deapostrophe:function(E){return E.replace(c.apostrophe,"")},fill:function(E,V,Z){return V!=null&&(E=E.replace(c.fill,function(oe,Le){return Le?V+Le:""})),Z&&(E=u.deapostrophe(E)),E},prep:function(E,V,Z,oe){if(E=E==null?"":E+"",!oe&&c.upper.test(E)&&(E=u.low.call(E)),!V&&!c.hole.test(E)){var Le=u.fill(E," ");c.hole.test(Le)&&(E=Le)}return!Z&&!c.room.test(E)&&(E=E.replace(c.relax,u.relax)),E},relax:function(E,V,Z,oe){return V+" "+(Z?Z+" ":"")+oe}},A={_:u,of:function(E){for(var V=0,Z=u.types.length;V<Z;V++)if(A[u.types[V]].apply(A,arguments)===E)return u.types[V]},flip:function(E){return E.replace(/\w/g,function(V){return(V==u.up.call(V)?u.low:u.up).call(V)})},random:function(E){return E.replace(/\w/g,function(V){return(Math.round(Math.random())?u.up:u.low).call(V)})},type:function(E,V){A[E]=V,u.types.push(E)}},j={lower:function(E,V,Z){return u.fill(u.low.call(u.prep(E,V)),V,Z)},snake:function(E){return A.lower(E,"_",!0)},constant:function(E){return A.upper(E,"_",!0)},camel:function(E){return u.decap(A.pascal(E))},kebab:function(E){return A.lower(E,"-",!0)},upper:function(E,V,Z){return u.fill(u.up.call(u.prep(E,V,!1,!0)),V,Z)},capital:function(E,V,Z){return u.fill(u.prep(E).replace(c.capitalize,function(oe,Le,Di){return Le+u.up.call(Di)}),V,Z)},header:function(E){return A.capital(E,"-",!0)},pascal:function(E){return u.fill(u.prep(E,!1,!0).replace(c.pascal,function(V,Z,oe){return u.up.call(oe)}),"",!0)},title:function(E){return A.capital(E).replace(c.improper,function(V,Z,oe,Le){return oe>0&&oe<Le.lastIndexOf(" ")?u.low.call(V):V})},sentence:function(E,V,Z){return E=A.lower(E).replace(c.sentence,function(oe,Le,Di){return Le+u.up.call(Di)}),V&&V.forEach(function(oe){E=E.replace(new RegExp("\\b"+A.lower(oe)+"\\b","g"),u.cap)}),Z&&Z.forEach(function(oe){E=E.replace(new RegExp("(\\b"+A.lower(oe)+"\\. +)(\\w)"),function(Le,Di,lc){return Di+u.low.call(lc)})}),E}};j.squish=j.pascal,A.default=A;for(var O in j)A.type(O,j[O]);var ie=typeof ie=="function"?ie:function(){};ie(typeof Qn=="object"&&Qn.exports?Qn.exports=A:this.Case=A)}).call(El)});Array.prototype.last=function(t,n){return t==null?this[this.length-1]:t==1?this.filter(n??(()=>!0)).last():this.filter(n??(()=>!0)).slice(-t)};Array.prototype.first=function(t,n){return t==null?this[0]:t==1?this.filter(n??(()=>!0))[0]:this.filter(n??(()=>!0)).slice(0,t)};function ri(t){return Array.isArray(t)?t:[t]}function be(t){return t==null?"":typeof t=="string"?t:`${t}px`}function So(t){return t instanceof pe?t.nativeElement:t}var Tr;try{Tr=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Tr=!1}var je=(()=>{class t{constructor(e){this._platformId=e,this.isBrowser=this._platformId?Pi(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||Tr)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static{this.\u0275fac=function(i){return new(i||t)(B(Fi))}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var zt;function Eo(){if(zt==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return zt=!1,zt;if("scrollBehavior"in document.documentElement.style)zt=!0;else{let t=Element.prototype.scrollTo;t?zt=!/\{\s*\[native code\]\s*\}/.test(t.toString()):zt=!1}}return zt}function Ao(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function _n(t){return t.composedPath?t.composedPath()[0]:t.target}function Dr(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var dc=new P("cdk-dir-doc",{providedIn:"root",factory:cc});function cc(){return F(Ce)}var uc=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function pc(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?uc.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Fo=(()=>{class t{constructor(e){if(this.value="ltr",this.change=new Je,e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.value=pc(i||r||"ltr")}}ngOnDestroy(){this.change.complete()}static{this.\u0275fac=function(i){return new(i||t)(B(dc,8))}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Bi=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({})}}return t})();var fc=20,Mo=(()=>{class t{constructor(e,i,r){this._ngZone=e,this._platform=i,this._scrolled=new Ee,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=r}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=fc){return this._platform.isBrowser?new Ei(i=>{this._globalSubscription||this._addGlobalListener();let r=e>0?this._scrolled.pipe(ar(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):Ma()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(ht(l=>!l||r.indexOf(l)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,l)=>{this._scrollableContainsElement(l,e)&&i.push(l)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,i){let r=So(i),l=e.getElementRef().nativeElement;do if(r==l)return!0;while(r=r.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let e=this._getWindow();return Oa(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}static{this.\u0275fac=function(i){return new(i||t)(B($e),B(je),B(Ce,8))}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var gc=20,Sr=(()=>{class t{constructor(e,i,r){this._platform=e,this._change=new Ee,this._changeListener=l=>{this._change.next(l)},this._document=r,i.runOutsideAngular(()=>{if(e.isBrowser){let l=this._getWindow();l.addEventListener("resize",this._changeListener),l.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,l=r.getBoundingClientRect(),c=-l.top||e.body.scrollTop||i.scrollY||r.scrollTop||0,u=-l.left||e.body.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:c,left:u}}change(e=gc){return e>0?this._change.pipe(ar(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static{this.\u0275fac=function(i){return new(i||t)(B(je),B($e),B(Ce,8))}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Io=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({})}}return t})(),Er=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[Bi,Io,Bi,Io]})}}return t})();var Hi=class{attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},yn=class extends Hi{constructor(n,e,i,r,l){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.componentFactoryResolver=r,this.projectableNodes=l}},ai=class extends Hi{constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Ar=class extends Hi{constructor(n){super(),this.element=n instanceof pe?n.nativeElement:n}},Fr=class{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof yn)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof ai)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Ar)return this._attachedPortal=n,this.attachDomPortal(n)}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Cn=class extends Fr{constructor(n,e,i,r,l){super(),this.outletElement=n,this._componentFactoryResolver=e,this._appRef=i,this._defaultInjector=r,this.attachDomPortal=c=>{this._document;let u=c.element;u.parentNode;let A=this._document.createComment("dom-portal");u.parentNode.insertBefore(A,u),this.outletElement.appendChild(u),this._attachedPortal=c,super.setDisposeFn(()=>{A.parentNode&&A.parentNode.replaceChild(u,A)})},this._document=l}attachComponentPortal(n){let i=(n.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(n.component),r;return n.viewContainerRef?(r=n.viewContainerRef.createComponent(i,n.viewContainerRef.length,n.injector||n.viewContainerRef.injector,n.projectableNodes||void 0),this.setDisposeFn(()=>r.destroy())):(r=i.create(n.injector||this._defaultInjector||rt.NULL),this._appRef.attachView(r.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(r.hostView),r.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(r)),this._attachedPortal=n,r}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var ko=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({})}}return t})();var Po=Eo(),Ir=class{constructor(n,e){this._viewportRuler=n,this._previousHTMLStyles={top:"",left:""},this._isEnabled=!1,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=be(-this._previousScrollPosition.left),n.style.top=be(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,l=i.scrollBehavior||"",c=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),Po&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Po&&(i.scrollBehavior=l,r.scrollBehavior=c)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.body,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};var Mr=class{constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r,this._scrollSubscription=null,this._detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(ht(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},bn=class{enable(){}disable(){}attach(){}};function kr(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,l=t.right<e.left,c=t.left>e.right;return i||r||l||c})}function Vo(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,l=t.left<e.left,c=t.right>e.right;return i||r||l||c})}var Pr=class{constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r,this._scrollSubscription=null}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();kr(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},xn=(()=>{class t{constructor(e,i,r,l){this._scrollDispatcher=e,this._viewportRuler=i,this._ngZone=r,this.noop=()=>new bn,this.close=c=>new Mr(this._scrollDispatcher,this._ngZone,this._viewportRuler,c),this.block=()=>new Ir(this._viewportRuler,this._document),this.reposition=c=>new Pr(this._scrollDispatcher,this._viewportRuler,this._ngZone,c),this._document=l}static{this.\u0275fac=function(i){return new(i||t)(B(Mo),B(Sr),B($e),B(Ce))}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Ui=class{constructor(n){if(this.scrollStrategy=new bn,this.panelClass="",this.hasBackdrop=!1,this.backdropClass="cdk-overlay-dark-backdrop",this.disposeOnNavigation=!1,n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var Vr=class{constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var Uo=(()=>{class t{constructor(e){this._attachedOverlays=[],this._document=e}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}static{this.\u0275fac=function(i){return new(i||t)(B(Ce))}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),vc=(()=>{class t extends Uo{constructor(e,i){super(e),this._ngZone=i,this._keydownListener=r=>{let l=this._attachedOverlays;for(let c=l.length-1;c>-1;c--)if(l[c]._keydownEvents.observers.length>0){let u=l[c]._keydownEvents;this._ngZone?this._ngZone.run(()=>u.next(r)):u.next(r);break}}}add(e){super.add(e),this._isAttached||(this._ngZone?this._ngZone.runOutsideAngular(()=>this._document.body.addEventListener("keydown",this._keydownListener)):this._document.body.addEventListener("keydown",this._keydownListener),this._isAttached=!0)}detach(){this._isAttached&&(this._document.body.removeEventListener("keydown",this._keydownListener),this._isAttached=!1)}static{this.\u0275fac=function(i){return new(i||t)(B(Ce),B($e,8))}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),yc=(()=>{class t extends Uo{constructor(e,i,r){super(e),this._platform=i,this._ngZone=r,this._cursorStyleIsSet=!1,this._pointerDownListener=l=>{this._pointerDownEventTarget=_n(l)},this._clickListener=l=>{let c=_n(l),u=l.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:c;this._pointerDownEventTarget=null;let A=this._attachedOverlays.slice();for(let j=A.length-1;j>-1;j--){let O=A[j];if(O._outsidePointerEvents.observers.length<1||!O.hasAttached())continue;if(Oo(O.overlayElement,c)||Oo(O.overlayElement,u))break;let ie=O._outsidePointerEvents;this._ngZone?this._ngZone.run(()=>ie.next(l)):ie.next(l)}}}add(e){if(super.add(e),!this._isAttached){let i=this._document.body;this._ngZone?this._ngZone.runOutsideAngular(()=>this._addEventListeners(i)):this._addEventListeners(i),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){if(this._isAttached){let e=this._document.body;e.removeEventListener("pointerdown",this._pointerDownListener,!0),e.removeEventListener("click",this._clickListener,!0),e.removeEventListener("auxclick",this._clickListener,!0),e.removeEventListener("contextmenu",this._clickListener,!0),this._platform.IOS&&this._cursorStyleIsSet&&(e.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1}}_addEventListeners(e){e.addEventListener("pointerdown",this._pointerDownListener,!0),e.addEventListener("click",this._clickListener,!0),e.addEventListener("auxclick",this._clickListener,!0),e.addEventListener("contextmenu",this._clickListener,!0)}static{this.\u0275fac=function(i){return new(i||t)(B(Ce),B(je),B($e,8))}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Oo(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var No=(()=>{class t{constructor(e,i){this._platform=i,this._document=e}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Dr()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let l=0;l<r.length;l++)r[l].remove()}let i=this._document.createElement("div");i.classList.add(e),Dr()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}static{this.\u0275fac=function(i){return new(i||t)(B(Ce),B(je))}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Or=class{constructor(n,e,i,r,l,c,u,A,j,O=!1,ie){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=l,this._keyboardDispatcher=c,this._document=u,this._location=A,this._outsideClickDispatcher=j,this._animationsDisabled=O,this._injector=ie,this._backdropElement=null,this._backdropClick=new Ee,this._attachments=new Ee,this._detachments=new Ee,this._locationChanges=nn.EMPTY,this._backdropClickHandler=E=>this._backdropClick.next(E),this._backdropTransitionendHandler=E=>{this._disposeBackdrop(E.target)},this._keydownEvents=new Ee,this._outsidePointerEvents=new Ee,this._renders=new Ee,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy,this._afterRenderRef=Ue(()=>$a(()=>{this._renders.next()},{injector:this._injector}))}get overlayElement(){return this._pane}get backdropElement(){return this._backdropElement}get hostElement(){return this._host}attach(n){!this._host.parentElement&&this._previousHostParent&&this._previousHostParent.appendChild(this._host);let e=this._portalOutlet.attach(n);return this._positionStrategy&&this._positionStrategy.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=cn(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._disposeBackdrop(this._backdropElement),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=null,n&&this._detachments.next(),this._detachments.complete(),this._afterRenderRef.destroy(),this._renders.complete()}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=C(C({},this._config),n),this._updateElementSize()}setDirection(n){this._config=L(C({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=be(this._config.width),n.height=be(this._config.height),n.minWidth=be(this._config.minWidth),n.minHeight=be(this._config.minHeight),n.maxWidth=be(this._config.maxWidth),n.maxHeight=be(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropElement=this._document.createElement("div"),this._backdropElement.classList.add("cdk-overlay-backdrop"),this._animationsDisabled&&this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropElement,this._config.backdropClass,!0),this._host.parentElement.insertBefore(this._backdropElement,this._host),this._backdropElement.addEventListener("click",this._backdropClickHandler),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{this._backdropElement&&this._backdropElement.classList.add(n)})}):this._backdropElement.classList.add(n)}_updateStackingOrder(){this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){let n=this._backdropElement;if(n){if(this._animationsDisabled){this._disposeBackdrop(n);return}n.classList.remove("cdk-overlay-backdrop-showing"),this._ngZone.runOutsideAngular(()=>{n.addEventListener("transitionend",this._backdropTransitionendHandler)}),n.style.pointerEvents="none",this._backdropTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(()=>{this._disposeBackdrop(n)},500))}}_toggleClasses(n,e,i){let r=ri(e||[]).filter(l=>!!l);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){this._ngZone.runOutsideAngular(()=>{let n=this._renders.pipe(Zt(rr(this._attachments,this._detachments))).subscribe(()=>{(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),n.unsubscribe())})})}_disposeScrollStrategy(){let n=this._scrollStrategy;n&&(n.disable(),n.detach&&n.detach())}_disposeBackdrop(n){n&&(n.removeEventListener("click",this._backdropClickHandler),n.removeEventListener("transitionend",this._backdropTransitionendHandler),n.remove(),this._backdropElement===n&&(this._backdropElement=null)),this._backdropTimeout&&(clearTimeout(this._backdropTimeout),this._backdropTimeout=void 0)}},Ro="cdk-overlay-connected-position-bounding-box",Cc=/([A-Za-z%]+)$/,Rr=class{get positions(){return this._preferredPositions}constructor(n,e,i,r,l){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=l,this._lastBoundingBoxSize={width:0,height:0},this._isPushed=!1,this._canPush=!0,this._growAfterOpen=!1,this._hasFlexibleDimensions=!0,this._positionLocked=!1,this._viewportMargin=0,this._scrollables=[],this._preferredPositions=[],this._positionChanges=new Ee,this._resizeSubscription=nn.EMPTY,this._offsetX=0,this._offsetY=0,this._appliedPanelClasses=[],this.positionChanges=this._positionChanges,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(Ro),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,l=[],c;for(let u of this._preferredPositions){let A=this._getOriginPoint(n,r,u),j=this._getOverlayPoint(A,e,u),O=this._getOverlayFit(j,e,i,u);if(O.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(u,A);return}if(this._canFitWithFlexibleDimensions(O,j,i)){l.push({position:u,origin:A,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(A,u)});continue}(!c||c.overlayFit.visibleArea<O.visibleArea)&&(c={overlayFit:O,overlayPoint:j,originPoint:A,position:u,overlayRect:e})}if(l.length){let u=null,A=-1;for(let j of l){let O=j.boundingBoxRect.width*j.boundingBoxRect.height*(j.position.weight||1);O>A&&(A=O,u=j)}this._isPushed=!1,this._applyPosition(u.position,u.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(c.position,c.originPoint);return}this._applyPosition(c.position,c.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Kt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Ro),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;if(n){this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();let e=this._getOriginPoint(this._originRect,this._containerRect,n);this._applyPosition(n,e)}else this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let c=this._isRtl()?n.right:n.left,u=this._isRtl()?n.left:n.right;r=i.originX=="start"?c:u}e.left<0&&(r-=e.left);let l;return i.originY=="center"?l=n.top+n.height/2:l=i.originY=="top"?n.top:n.bottom,e.top<0&&(l-=e.top),{x:r,y:l}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let l;return i.overlayY=="center"?l=-e.height/2:l=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+l}}_getOverlayFit(n,e,i,r){let l=Bo(e),{x:c,y:u}=n,A=this._getOffset(r,"x"),j=this._getOffset(r,"y");A&&(c+=A),j&&(u+=j);let O=0-c,ie=c+l.width-i.width,E=0-u,V=u+l.height-i.height,Z=this._subtractOverflows(l.width,O,ie),oe=this._subtractOverflows(l.height,E,V),Le=Z*oe;return{visibleArea:Le,isCompletelyWithinViewport:l.width*l.height===Le,fitsInViewportVertically:oe===l.height,fitsInViewportHorizontally:Z==l.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,l=i.right-e.x,c=Lo(this._overlayRef.getConfig().minHeight),u=Lo(this._overlayRef.getConfig().minWidth),A=n.fitsInViewportVertically||c!=null&&c<=r,j=n.fitsInViewportHorizontally||u!=null&&u<=l;return A&&j}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=Bo(e),l=this._viewportRect,c=Math.max(n.x+r.width-l.width,0),u=Math.max(n.y+r.height-l.height,0),A=Math.max(l.top-i.top-n.y,0),j=Math.max(l.left-i.left-n.x,0),O=0,ie=0;return r.width<=l.width?O=j||-c:O=n.x<this._viewportMargin?l.left-i.left-n.x:0,r.height<=l.height?ie=A||-u:ie=n.y<this._viewportMargin?l.top-i.top-n.y:0,this._previousPushAmount={x:O,y:ie},{x:n.x+O,y:n.y+ie}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!bc(this._lastScrollVisibility,i)){let r=new Vr(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let l=0;l<e.length;l++)e[l].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),l,c,u;if(e.overlayY==="top")c=n.y,l=i.height-c+this._viewportMargin;else if(e.overlayY==="bottom")u=i.height-n.y+this._viewportMargin*2,l=i.height-u+this._viewportMargin;else{let V=Math.min(i.bottom-n.y+i.top,n.y),Z=this._lastBoundingBoxSize.height;l=V*2,c=n.y-V,l>Z&&!this._isInitialRender&&!this._growAfterOpen&&(c=n.y-Z/2)}let A=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,j=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,O,ie,E;if(j)E=i.width-n.x+this._viewportMargin*2,O=n.x-this._viewportMargin;else if(A)ie=n.x,O=i.right-n.x;else{let V=Math.min(i.right-n.x+i.left,n.x),Z=this._lastBoundingBoxSize.width;O=V*2,ie=n.x-V,O>Z&&!this._isInitialRender&&!this._growAfterOpen&&(ie=n.x-Z/2)}return{top:c,left:ie,bottom:u,right:E,width:O,height:l}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right=r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let l=this._overlayRef.getConfig().maxHeight,c=this._overlayRef.getConfig().maxWidth;r.height=be(i.height),r.top=be(i.top),r.bottom=be(i.bottom),r.width=be(i.width),r.left=be(i.left),r.right=be(i.right),e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",l&&(r.maxHeight=be(l)),c&&(r.maxWidth=be(c))}this._lastBoundingBoxSize=i,Kt(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Kt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Kt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),l=this._hasFlexibleDimensions,c=this._overlayRef.getConfig();if(r){let O=this._viewportRuler.getViewportScrollPosition();Kt(i,this._getExactOverlayY(e,n,O)),Kt(i,this._getExactOverlayX(e,n,O))}else i.position="static";let u="",A=this._getOffset(e,"x"),j=this._getOffset(e,"y");A&&(u+=`translateX(${A}px) `),j&&(u+=`translateY(${j}px)`),i.transform=u.trim(),c.maxHeight&&(r?i.maxHeight=be(c.maxHeight):l&&(i.maxHeight="")),c.maxWidth&&(r?i.maxWidth=be(c.maxWidth):l&&(i.maxWidth="")),Kt(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},l=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(l=this._pushOverlayOnScreen(l,this._overlayRect,i)),n.overlayY==="bottom"){let c=this._document.documentElement.clientHeight;r.bottom=`${c-(l.y+this._overlayRect.height)}px`}else r.top=be(l.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},l=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(l=this._pushOverlayOnScreen(l,this._overlayRect,i));let c;if(this._isRtl()?c=n.overlayX==="end"?"left":"right":c=n.overlayX==="end"?"right":"left",c==="right"){let u=this._document.documentElement.clientWidth;r.right=`${u-(l.x+this._overlayRect.width)}px`}else r.left=be(l.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Vo(n,i),isOriginOutsideView:kr(n,i),isOverlayClipped:Vo(e,i),isOverlayOutsideView:kr(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._viewportMargin,left:i.left+this._viewportMargin,right:i.left+n-this._viewportMargin,bottom:i.top+e-this._viewportMargin,width:n-2*this._viewportMargin,height:e-2*this._viewportMargin}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&ri(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getOriginRect(){let n=this._origin;if(n instanceof pe)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}};function Kt(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function Lo(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(Cc);return!e||e==="px"?parseFloat(n):null}return t||null}function Bo(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function bc(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var Ho="cdk-global-overlay-wrapper",Lr=class{constructor(){this._cssPosition="static",this._topOffset="",this._bottomOffset="",this._alignItems="",this._xPosition="",this._xOffset="",this._width="",this._height="",this._isDisposed=!1}attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(Ho),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:l,maxWidth:c,maxHeight:u}=i,A=(r==="100%"||r==="100vw")&&(!c||c==="100%"||c==="100vw"),j=(l==="100%"||l==="100vh")&&(!u||u==="100%"||u==="100vh"),O=this._xPosition,ie=this._xOffset,E=this._overlayRef.getConfig().direction==="rtl",V="",Z="",oe="";A?oe="flex-start":O==="center"?(oe="center",E?Z=ie:V=ie):E?O==="left"||O==="end"?(oe="flex-end",V=ie):(O==="right"||O==="start")&&(oe="flex-start",Z=ie):O==="left"||O==="start"?(oe="flex-start",V=ie):(O==="right"||O==="end")&&(oe="flex-end",Z=ie),n.position=this._cssPosition,n.marginLeft=A?"0":V,n.marginTop=j?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=A?"0":Z,e.justifyContent=oe,e.alignItems=j?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(Ho),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},xc=(()=>{class t{constructor(e,i,r,l){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=l}global(){return new Lr}flexibleConnectedTo(e){return new Rr(e,this._viewportRuler,this._document,this._platform,this._overlayContainer)}static{this.\u0275fac=function(i){return new(i||t)(B(Sr),B(Ce),B(je),B(No))}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),wc=0,oi=(()=>{class t{constructor(e,i,r,l,c,u,A,j,O,ie,E,V){this.scrollStrategies=e,this._overlayContainer=i,this._componentFactoryResolver=r,this._positionBuilder=l,this._keyboardDispatcher=c,this._injector=u,this._ngZone=A,this._document=j,this._directionality=O,this._location=ie,this._outsideClickDispatcher=E,this._animationsModuleType=V}create(e){let i=this._createHostElement(),r=this._createPaneElement(i),l=this._createPortalOutlet(r),c=new Ui(e);return c.direction=c.direction||this._directionality.value,new Or(l,i,r,c,this._ngZone,this._keyboardDispatcher,this._document,this._location,this._outsideClickDispatcher,this._animationsModuleType==="NoopAnimations",this._injector.get(Ua))}position(){return this._positionBuilder}_createPaneElement(e){let i=this._document.createElement("div");return i.id=`cdk-overlay-${wc++}`,i.classList.add("cdk-overlay-pane"),e.appendChild(i),i}_createHostElement(){let e=this._document.createElement("div");return this._overlayContainer.getContainerElement().appendChild(e),e}_createPortalOutlet(e){return this._appRef||(this._appRef=this._injector.get(Ka)),new Cn(e,this._componentFactoryResolver,this._appRef,this._injector,this._document)}static{this.\u0275fac=function(i){return new(i||t)(B(xn),B(No),B(cr),B(xc),B(vc),B(rt),B($e),B(Ce),B(Fo),B(Za),B(yc),B(ja,8))}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Tc=new P("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=F(oi);return()=>t.scrollStrategies.reposition()}});function Dc(t){return()=>t.scrollStrategies.reposition()}var Sc={provide:Tc,deps:[oi],useFactory:Dc},jo=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({providers:[oi,Sc],imports:[Bi,ko,Er,Er]})}}return t})();var Go=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(H(ot),H(pe))};static \u0275dir=Y({type:t})}return t})(),jr=(()=>{class t extends Go{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(t)))(r||t)}})();static \u0275dir=Y({type:t,features:[re]})}return t})(),ct=new P(""),Ec={provide:ct,useExisting:Ze(()=>Yr),multi:!0},Yr=(()=>{class t extends jr{writeValue(e){this.setProperty("checked",e)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(t)))(r||t)}})();static \u0275dir=Y({type:t,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(i,r){i&1&&_("change",function(c){return r.onChange(c.target.checked)})("blur",function(){return r.onTouched()})},standalone:!1,features:[ke([Ec]),re]})}return t})(),Ac={provide:ct,useExisting:Ze(()=>fe),multi:!0};function Fc(){let t=gr()?gr().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Ic=new P(""),fe=(()=>{class t extends Go{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Fc())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(H(ot),H(pe),H(Ic,8))};static \u0275dir=Y({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&_("input",function(c){return r._handleInput(c.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(c){return r._compositionEnd(c.target.value)})},standalone:!1,features:[ke([Ac]),re]})}return t})();function It(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function Xo(t){return t!=null&&typeof t.length=="number"}var $r=new P(""),Zo=new P(""),Mc=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Mt=class{static min(n){return Jo(n)}static max(n){return kc(n)}static required(n){return Pc(n)}static requiredTrue(n){return Vc(n)}static email(n){return Oc(n)}static minLength(n){return Rc(n)}static maxLength(n){return Lc(n)}static pattern(n){return Bc(n)}static nullValidator(n){return Tn(n)}static compose(n){return as(n)}static composeAsync(n){return ss(n)}};function Jo(t){return n=>{if(It(n.value)||It(t))return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function kc(t){return n=>{if(It(n.value)||It(t))return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function Pc(t){return It(t.value)?{required:!0}:null}function Vc(t){return t.value===!0?null:{required:!0}}function Oc(t){return It(t.value)||Mc.test(t.value)?null:{email:!0}}function Rc(t){return n=>It(n.value)||!Xo(n.value)?null:n.value.length<t?{minlength:{requiredLength:t,actualLength:n.value.length}}:null}function Lc(t){return n=>Xo(n.value)&&n.value.length>t?{maxlength:{requiredLength:t,actualLength:n.value.length}}:null}function Bc(t){if(!t)return Tn;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(It(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Tn(t){return null}function es(t){return t!=null}function ts(t){return za(t)?Ai(t):t}function is(t){let n={};return t.forEach(e=>{n=e!=null?C(C({},n),e):n}),Object.keys(n).length===0?null:n}function ns(t,n){return n.map(e=>e(t))}function Hc(t){return!t.validate}function rs(t){return t.map(n=>Hc(n)?n:e=>n.validate(e))}function as(t){if(!t)return null;let n=t.filter(es);return n.length==0?null:function(e){return is(ns(e,n))}}function os(t){return t!=null?as(rs(t)):null}function ss(t){if(!t)return null;let n=t.filter(es);return n.length==0?null:function(e){let i=ns(e,n).map(ts);return rn(i).pipe(Xe(is))}}function ls(t){return t!=null?ss(rs(t)):null}function Yo(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function ds(t){return t._rawValidators}function cs(t){return t._rawAsyncValidators}function Br(t){return t?Array.isArray(t)?t:[t]:[]}function Dn(t,n){return Array.isArray(t)?t.includes(n):t===n}function $o(t,n){let e=Br(n);return Br(t).forEach(r=>{Dn(e,r)||e.push(r)}),e}function Wo(t,n){return Br(n).filter(e=>!Dn(t,e))}var Sn=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=os(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=ls(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Hr=class extends Sn{name;get formDirective(){return null}get path(){return null}},gt=class extends Sn{_parent=null;name=null;valueAccessor=null},Ur=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Uc={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Qy=L(C({},Uc),{"[class.ng-submitted]":"isSubmitted"}),ce=(()=>{class t extends Ur{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(H(gt,2))};static \u0275dir=Y({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&J("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[re]})}return t})();var ji="VALID",wn="INVALID",si="PENDING",Yi="DISABLED",di=class{},En=class extends di{value;source;constructor(n,e){super(),this.value=n,this.source=e}},$i=class extends di{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Wi=class extends di{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},li=class extends di{status;source;constructor(n,e){super(),this.status=n,this.source=e}};function Nc(t){return(Fn(t)?t.validators:t)||null}function jc(t){return Array.isArray(t)?os(t):t||null}function Yc(t,n){return(Fn(n)?n.asyncValidators:t)||null}function $c(t){return Array.isArray(t)?ls(t):t||null}function Fn(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var Nr=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Ue(this.statusReactive)}set status(n){Ue(()=>this.statusReactive.set(n))}_status=I(()=>this.statusReactive());statusReactive=S(void 0);get valid(){return this.status===ji}get invalid(){return this.status===wn}get pending(){return this.status==si}get disabled(){return this.status===Yi}get enabled(){return this.status!==Yi}errors;get pristine(){return Ue(this.pristineReactive)}set pristine(n){Ue(()=>this.pristineReactive.set(n))}_pristine=I(()=>this.pristineReactive());pristineReactive=S(!0);get dirty(){return!this.pristine}get touched(){return Ue(this.touchedReactive)}set touched(n){Ue(()=>this.touchedReactive.set(n))}_touched=I(()=>this.touchedReactive());touchedReactive=S(!1);get untouched(){return!this.touched}_events=new Ee;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators($o(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators($o(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Wo(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Wo(n,this._rawAsyncValidators))}hasValidator(n){return Dn(this._rawValidators,n)}hasAsyncValidator(n){return Dn(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsTouched(L(C({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Wi(!0,i))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new Wi(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsDirty(L(C({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new $i(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new $i(!0,i))}markAsPending(n={}){this.status=si;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new li(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.markAsPending(L(C({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Yi,this.errors=null,this._forEachChild(r=>{r.disable(L(C({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new En(this.value,i)),this._events.next(new li(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(L(C({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=ji,this._forEachChild(i=>{i.enable(L(C({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(L(C({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ji||this.status===si)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new En(this.value,e)),this._events.next(new li(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(L(C({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Yi:ji}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=si,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let i=ts(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i&&i.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new li(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new Je,this.statusChanges=new Je}_calculateStatus(){return this._allControlsDisabled()?Yi:this.errors?wn:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(si)?si:this._anyControlsHaveStatus(wn)?wn:ji}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!n.onlySelf&&this._parent._updatePristine(n,e),r&&this._events.next(new $i(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Wi(this.touched,e)),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Fn(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){let e=this._parent&&this._parent.dirty;return!n&&!!e&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=jc(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=$c(this._rawAsyncValidators)}};var In=new P("",{providedIn:"root",factory:()=>Mn}),Mn="always";function Wc(t,n){return[...n.path,t]}function us(t,n,e=Mn){Kc(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),Qc(t,n),Xc(t,n),Gc(t,n),zc(t,n)}function zo(t,n,e=!0){let i=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(i),n.valueAccessor.registerOnTouched(i)),qc(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function An(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function zc(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Kc(t,n){let e=ds(t);n.validator!==null?t.setValidators(Yo(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=cs(t);n.asyncValidator!==null?t.setAsyncValidators(Yo(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();An(n._rawValidators,r),An(n._rawAsyncValidators,r)}function qc(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=ds(t);if(Array.isArray(r)&&r.length>0){let l=r.filter(c=>c!==n.validator);l.length!==r.length&&(e=!0,t.setValidators(l))}}if(n.asyncValidator!==null){let r=cs(t);if(Array.isArray(r)&&r.length>0){let l=r.filter(c=>c!==n.asyncValidator);l.length!==r.length&&(e=!0,t.setAsyncValidators(l))}}}let i=()=>{};return An(n._rawValidators,i),An(n._rawAsyncValidators,i),e}function Qc(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ps(t,n)})}function Gc(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ps(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function ps(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Xc(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function ms(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function Zc(t){return Object.getPrototypeOf(t.constructor)===jr}function hs(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(l=>{l.constructor===fe?e=l:Zc(l)?i=l:r=l}),r||i||e||null}function Ko(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function qo(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var zi=class extends Nr{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(Nc(e),Yc(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Fn(e)&&(e.nonNullable||e.initialValueIsDefault)&&(qo(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Ko(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Ko(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){qo(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var Jc={provide:gt,useExisting:Ze(()=>_e)},Qo=Promise.resolve(),_e=(()=>{class t extends gt{_changeDetectorRef;callSetDisabledState;control=new zi;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new Je;constructor(e,i,r,l,c,u){super(),this._changeDetectorRef=c,this.callSetDisabledState=u,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=hs(this,l)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),ms(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){us(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Qo.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&St(i);Qo.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Wc(e,this._parent):[e]}static \u0275fac=function(i){return new(i||t)(H(Hr,9),H($r,10),H(Zo,10),H(ct,10),H(Yt,8),H(In,8))};static \u0275dir=Y({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[ke([Jc]),re,lt]})}return t})();var eu={provide:ct,useExisting:Ze(()=>Ki),multi:!0},Ki=(()=>{class t extends jr{writeValue(e){let i=e??"";this.setProperty("value",i)}registerOnChange(e){this.onChange=i=>{e(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(t)))(r||t)}})();static \u0275dir=Y({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,r){i&1&&_("input",function(c){return r.onChange(c.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[ke([eu]),re]})}return t})();var fs=new P(""),tu={provide:gt,useExisting:Ze(()=>qi)},qi=(()=>{class t extends gt{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new Je;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,l,c){super(),this._ngModelWarningConfig=l,this.callSetDisabledState=c,this._setValidators(e),this._setAsyncValidators(i),this.valueAccessor=hs(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let i=e.form.previousValue;i&&zo(i,this,!1),us(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}ms(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&zo(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||t)(H($r,10),H(Zo,10),H(ct,10),H(fs,8),H(In,8))};static \u0275dir=Y({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[ke([tu]),re,lt]})}return t})();function iu(t){return typeof t=="number"?t:parseFloat(t)}var nu=(()=>{class t{_validator=Tn;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):Tn,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=Y({type:t,features:[lt]})}return t})();var ru={provide:$r,useExisting:Ze(()=>Wr),multi:!0},Wr=(()=>{class t extends nu{min;inputName="min";normalizeInput=e=>iu(e);createValidator=e=>Jo(e);static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(t)))(r||t)}})();static \u0275dir=Y({type:t,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(i,r){i&2&&We("min",r._enabled?r.min:null)},inputs:{min:"min"},standalone:!1,features:[ke([ru]),re]})}return t})();var gs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=Q({})}return t})();var ue=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:In,useValue:e.callSetDisabledState??Mn}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=Q({imports:[gs]})}return t})(),kn=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:fs,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:In,useValue:e.callSetDisabledState??Mn}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=Q({imports:[gs]})}return t})();var Wu=Si(Cs(),1);function zr(t,n){!n?.injector&&sr(zr);let e=n?.injector??F(rt),i=new Ia(1),r=he(()=>{let l;try{l=t()}catch(c){Ue(()=>i.error(c));return}Ue(()=>i.next(l))},{injector:e,manualCleanup:!0});return e.get(dn).onDestroy(()=>{r.destroy(),i.complete()}),i.asObservable()}function Kr(t,n){let e=!n?.manualCleanup;e&&!n?.injector&&sr(Kr);let i=e?n?.injector?.get(dn)??F(dn):null,r=cu(n?.equal),l;n?.requireSync?l=S({kind:0},{equal:r}):l=S({kind:1,value:n?.initialValue},{equal:r});let c=t.subscribe({next:u=>l.set({kind:1,value:u}),error:u=>{if(n?.rejectErrors)throw u;l.set({kind:2,error:u})}});if(n?.requireSync&&l().kind===0)throw new sn(601,!1);return i?.onDestroy(c.unsubscribe.bind(c)),I(()=>{let u=l();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new sn(601,!1)}},{equal:n?.equal})}function cu(t=Object.is){return(n,e)=>n.kind===1&&e.kind===1&&t(n.value,e.value)}var Bn=Si(xs(),1);var _t=Si(ws(),1);var Tu=[{keys:["tab"],result:"Tab \u21B9"},{keys:["enter"],result:"\u21B5 Enter"},{keys:["space"],result:["\u23B5","Space"]},{keys:["home"],result:"Home"},{keys:["end"],result:"End"},{keys:["minus"],result:["-","Minus"]},{keys:["equal"],result:["=","Equal"]},{keys:["bracketleft"],result:["[","Left Bracket"]},{keys:["bracketright"],result:["]","Right Bracket"]},{keys:["backslash"],result:["\\","Backslash"]},{keys:["semicolon"],result:[";","Semicolon"]},{keys:["quote"],result:["'","Quote"]},{keys:["comma"],result:[",","Comma"]},{keys:["period"],result:[".","Period"]},{keys:["slash"],result:["/","Slash"]},{keys:["backquote"],result:["`","Backquote"]},{keys:["arrowleft","left"],result:["\u2190","\u2190 Left"]},{keys:["arrowright","right"],result:["\u2192","\u2192 Right"]},{keys:["arrowup","up"],result:["\u2191","\u2191 Up"]},{keys:["arrowdown","down"],result:["\u2193","\u2193 Down"]},{keys:["capslock","caps"],result:"Caps Lock"},{keys:["numlock","num"],result:"Num Lock"},{keys:["shift","leftshift","shiftleft"],result:"Shift"},{keys:["shift","rightshift","shiftright"],result:"Right Shift"},{keys:["ctrl","control","leftctrl","ctrlleft","leftcontrol","controlleft"],result:["Ctrl","Control"]},{keys:["ctrl","control","rightctrl","ctrlright","rightcontrol","controlright"],result:["Right Ctrl","Right Control"]},{keys:["cmd","command"],result:["Cmd","Command"]},{keys:["option","opt"],result:["Opt","Option"]},{keys:["alt","leftalt","altleft"],result:"Alt"},{keys:["altgraph","altgr","rightalt","altright"],result:["Alt Gr","Alt Graph"]},{keys:["escape","esc"],result:["Esc","Escape"]},{keys:["insert","ins"],result:["Ins","Insert"]},{keys:["delete","del"],result:["Del","Delete"]},{keys:["windows","win","leftmeta","metaleft"],result:["\u229E Win","\u229E Windows"]},{keys:["menu","contextmenu"],result:"\u25A4 Menu"},{keys:["backspace","back","bcksp"],result:["Bcksp","Backspace"]},{keys:["printscreen","printsc","prtsc"],result:["Prt Sc","Print Screen"]},{keys:["numpaddivide","divide"],result:["Numpad /","Divide"]},{keys:["numpadmultiply","multiply"],result:["Numpad *","Multiply"]},{keys:["numpadadd","add"],result:["Numpad +","Add"]},{keys:["numpadsubstract","substract"],result:["Numpad -","Substract"]},{keys:["numpaddecimal","decimal"],result:["Numpad .","Decimal"]},{keys:["numpadenter"],result:"\u21B5 Numpad Enter"},{keys:["audiovolumemute","audiomute","volumemute","mute"],result:["Vol. Mute","Audio Volume Mute"]},{keys:["audiovolumedown","volumedown"],result:["Vol. Down","Audio Volume Down"]},{keys:["audiovolumeup","volumeup"],result:["Vol. Up","Audio Volume Up"]},{keys:["pagedown","pgdown"],result:["Pg Down","Page Down"]},{keys:["pageup","pgup"],result:["Pg Up","Page Up"]}],Du=Tu.reduce((t,n)=>{for(let e of n.keys)t[e]=n.result;return t},{}),Su="abcdefghijklmnopqrstuvwxyz".split("").reduce((t,n)=>(t[`key${n}`]=n.toUpperCase(),t),{}),ia={};for(let t=0;t<10;t++){let n=t.toString();ia[`digit${n}`]=n,ia[`numpad${n}`]=`Numpad ${n}`}var Ts={};for(let t=1;t<=12;t++){let n=t.toString();Ts[`f${n}`]=n}var na=Object.assign(Object.assign(Object.assign(Object.assign({},Du),Su),ia),Ts);function Ds(t,n=!0){let e=t.toLowerCase();if(na[e]){let i=na[e];return typeof i=="string"?i:n?i[0]:i[1]}if(e.match(/^.+(left|right)$/)){let i=t.match(/right|left/i)[0].toLowerCase();i=i[0].toUpperCase()+i.substring(1);let r=t.replace(/right|left/i,"");t=i+r}return t.replace(/([A-Z])/g," $1").replace(/\s\s+/g," ").trim()}var Eu=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Ss=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({providers:[Eu]})}}return t})();var Es=new Set,qt,Au=(()=>{class t{constructor(e,i){this._platform=e,this._nonce=i,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Iu}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Fu(e,this._nonce),this._matchMedia(e)}static{this.\u0275fac=function(i){return new(i||t)(B(je),B(Ya,8))}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Fu(t,n){if(!Es.has(t))try{qt||(qt=document.createElement("style"),n&&qt.setAttribute("nonce",n),qt.setAttribute("type","text/css"),document.head.appendChild(qt)),qt.sheet&&(qt.sheet.insertRule(`@media ${t} {body{ }}`,0),Es.add(t))}catch(e){console.error(e)}}function Iu(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Fs=(()=>{class t{constructor(e,i){this._mediaMatcher=e,this._zone=i,this._queries=new Map,this._destroySubject=new Ee}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return As(ri(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=As(ri(e)).map(c=>this._registerQuery(c).observable),l=Pa(r);return l=Va(l.pipe(Ba(1)),l.pipe(Ha(1),La(0))),l.pipe(Xe(c=>{let u={matches:!1,breakpoints:{}};return c.forEach(({matches:A,query:j})=>{u.matches=u.matches||A,u.breakpoints[j]=A}),u}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),l={observable:new Ei(c=>{let u=A=>this._zone.run(()=>c.next(A));return i.addListener(u),()=>{i.removeListener(u)}}).pipe(an(i),Xe(({matches:c})=>({query:e,matches:c})),Zt(this._destroySubject)),mql:i};return this._queries.set(e,l),l}static{this.\u0275fac=function(i){return new(i||t)(B(Au),B($e))}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function As(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}var Mu=(()=>{class t{constructor(e){this._platform=e}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Pu(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=ku(Nu(e));if(i&&(Is(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),l=Is(e);return e.hasAttribute("contenteditable")?l!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Hu(e)?!1:r==="audio"?e.hasAttribute("controls")?l!==-1:!1:r==="video"?l===-1?!1:l!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return Uu(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static{this.\u0275fac=function(i){return new(i||t)(B(je))}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function ku(t){try{return t.frameElement}catch{return null}}function Pu(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function Vu(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function Ou(t){return Lu(t)&&t.type=="hidden"}function Ru(t){return Bu(t)&&t.hasAttribute("href")}function Lu(t){return t.nodeName.toLowerCase()=="input"}function Bu(t){return t.nodeName.toLowerCase()=="a"}function Ps(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function Is(t){if(!Ps(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function Hu(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function Uu(t){return Ou(t)?!1:Vu(t)||Ru(t)||t.hasAttribute("contenteditable")||Ps(t)}function Nu(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var aa=class{get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}constructor(n,e,i,r,l=!1,c){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=c,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,l||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?cn(n,{injector:this._injector}):setTimeout(n)}},ju=(()=>{class t{constructor(e,i,r){this._checker=e,this._ngZone=i,this._injector=F(rt),this._document=r}create(e,i=!1){return new aa(e,this._checker,this._ngZone,this._document,i,this._injector)}static{this.\u0275fac=function(i){return new(i||t)(B(Mu),B($e),B(Ce))}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Vs=(()=>{class t{get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}constructor(e,i,r){this._elementRef=e,this._focusTrapFactory=i,this._previouslyFocusedElement=null,F(je).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let i=e.autoCapture;i&&!i.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=Ao(),this.focusTrap?.focusInitialElementWhenReady()}static{this.\u0275fac=function(i){return new(i||t)(H(pe),H(ju),H(Ce))}}static{this.\u0275dir=Y({type:t,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",St],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",St]},exportAs:["cdkTrapFocus"],features:[Nt,lt]})}}return t})();var Qt=function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t}(Qt||{}),Ms="cdk-high-contrast-black-on-white",ks="cdk-high-contrast-white-on-black",ra="cdk-high-contrast-active",Yu=(()=>{class t{constructor(e,i){this._platform=e,this._document=i,this._breakpointSubscription=F(Fs).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Qt.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(e):null,l=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),l){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Qt.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Qt.BLACK_ON_WHITE}return Qt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(ra,Ms,ks),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===Qt.BLACK_ON_WHITE?e.add(ra,Ms):i===Qt.WHITE_ON_BLACK&&e.add(ra,ks)}}static{this.\u0275fac=function(i){return new(i||t)(B(je),B(Ce))}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Os=(()=>{class t{constructor(e){e._applyBodyHighContrastModeCssClasses()}static{this.\u0275fac=function(i){return new(i||t)(B(Yu))}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[Ss]})}}return t})();var zu=["focusableElement"],Ku=["textInput"],Pe=["*"];function qu(t,n){}function Qu(t,n){if(t&1&&(o(0,"div",2),g(1,qu,0,0,"ng-template",5),a()),t&2){let e,i=f();d(),p("ngTemplateOutlet",(e=(e=i.prefixTemplateInput())!==null&&e!==void 0?e:(e=i.prefixTemplate())==null?null:e.template)!==null&&e!==void 0?e:null)}}function Gu(t,n){}function Xu(t,n){if(t&1&&(o(0,"div",4),g(1,Gu,0,0,"ng-template",5),a()),t&2){let e,i=f();d(),p("ngTemplateOutlet",(e=(e=i.suffixTemplateInput())!==null&&e!==void 0?e:(e=i.suffixTemplate())==null?null:e.template)!==null&&e!==void 0?e:null)}}function Zu(t,n){if(t&1&&(o(0,"div",8),s(1),a()),t&2){let e=f(2);d(),v(e.placeholder())}}function Ju(t,n){}function ep(t,n){if(t&1&&g(0,Zu,2,1,"ng-template",null,1,ae)(2,Ju,0,0,"ng-template",7),t&2){let e,i=M(1),r=f();d(2),p("ngTemplateOutlet",((e=r.placeholderTemplate())==null?null:e.template)||i)}}function tp(t,n){if(t&1){let e=W();o(0,"ard-clear-button",9),_("click",function(r){T(e);let l=f();return D(l.onClearButtonClick(r))}),a()}if(t&2){let e=f();p("title",e.clearButtonTitle())}}var fa=["contentWrapperEl"];function ip(t,n){if(t&1&&b(0,"ard-icon",5),t&2){let e=n.state,i=n.selected,r=f();p("icon",e===r.State.Selected?"check_box":e===r.State.Unselected?"check_box_outline_blank":"indeterminate_check_box")("filled",i)}}function np(t,n){}var rp=["track"],qs=t=>({"--_ard-slider-transition":t}),ap=(t,n)=>({left:t,width:n}),ut=t=>({left:t});function op(t,n){if(t&1&&b(0,"div",16),t&2){let e=n.$implicit;ye(ge(2,ut,e))}}function sp(t,n){if(t&1&&(o(0,"div",10),U(1,op,1,4,"div",15,Tt),a()),t&2){let e=f();d(),N(e._tickArray())}}function lp(t,n){if(t&1&&(o(0,"div",19),s(1),a()),t&2){let e=n.$implicit;d(),v(e)}}function dp(t,n){}function cp(t,n){if(t&1&&(o(0,"div",17),g(1,lp,2,1,"ng-template",null,3,ae)(3,dp,0,0,"ng-template",18),a()),t&2){let e,i=M(2),r=f();ye(ge(6,ut,r.handlePositionsPercent()[0])),J("ard-tooltip-always",r.tooltipBehavior()==="always"),d(3),p("ngTemplateOutlet",((e=r.tooltipTemplate())==null?null:e.template)||i)("ngTemplateOutletContext",r.tooltipContexts().from)}}function up(t,n){if(t&1&&(o(0,"div",19),s(1),a()),t&2){let e=n.$implicit;d(),v(e)}}function pp(t,n){}function mp(t,n){if(t&1&&(o(0,"div",17),g(1,up,2,1,"ng-template",null,3,ae)(3,pp,0,0,"ng-template",18),a()),t&2){let e,i=M(2),r=f();ye(ge(6,ut,r.handlePositionsPercent()[1])),J("ard-tooltip-always",r.tooltipBehavior()==="always"),d(3),p("ngTemplateOutlet",((e=r.tooltipTemplate())==null?null:e.template)||i)("ngTemplateOutletContext",r.tooltipContexts().to)}}function hp(t,n){if(t&1&&(o(0,"div",21),s(1),a()),t&2){let e=n.$implicit;ye(ge(3,ut,e.positionPercent)),d(),w(" ",e.label," ")}}function fp(t,n){if(t&1&&(o(0,"div",14),U(1,hp,2,5,"div",20,X),a()),t&2){let e=f();d(),N(e.labelObjects())}}function gp(t,n){t&1&&b(0,"div",22)}var _p=t=>({width:t});function vp(t,n){if(t&1&&b(0,"div",15),t&2){let e=n.$implicit;ye(ge(2,ut,e))}}function yp(t,n){if(t&1&&(o(0,"div",9),U(1,vp,1,4,"div",14,Tt),a()),t&2){let e=f();d(),N(e._tickArray())}}function Cp(t,n){if(t&1&&(o(0,"div",18),s(1),a()),t&2){let e=n.$implicit;d(),v(e)}}function bp(t,n){}function xp(t,n){if(t&1&&(o(0,"div",16),g(1,Cp,2,1,"ng-template",null,2,ae)(3,bp,0,0,"ng-template",17),a()),t&2){let e,i=M(2),r=f();ye(ge(6,ut,r.handlePositionsPercent()[0])),J("ard-tooltip-always",r.tooltipBehavior()==="always"),d(3),p("ngTemplateOutlet",((e=r.tooltipTemplate())==null?null:e.template)||i)("ngTemplateOutletContext",r.tooltipContext())}}function wp(t,n){if(t&1&&(o(0,"div",20),s(1),a()),t&2){let e=n.$implicit;ye(ge(3,ut,e.positionPercent)),d(),w(" ",e.label," ")}}function Tp(t,n){if(t&1&&(o(0,"div",13),U(1,wp,2,5,"div",19,X),a()),t&2){let e=f();d(),N(e.labelObjects())}}function Dp(t,n){if(t&1&&s(0),t&2){let e=f();w(" ",e.requiredText()," ")}}function Sp(t,n){if(t&1&&s(0),t&2){let e=f();w(" ",e.optionalText()," ")}}var Ep=[[["ard-label"],["","ard-label",""]],"*",[["ard-error","left",""],["","ard-error","","left",""]],[["ard-error","right",""],["","ard-error","","right",""]],[["ard-hint","left",""],["","ard-hint","","left",""]],[["ard-hint","right",""],["","ard-hint","","right",""]],[["ard-hint",3,"left","",3,"right",""],["","ard-hint","",3,"left","",3,"right",""]],[["ard-error",3,"left","",3,"right",""],["","ard-error","",3,"left","",3,"right",""]],[["ard-hint-error",3,"left","",3,"right",""],["","ard-hint-error","",3,"left","",3,"right",""]],[["ard-hint-error","left",""],["","ard-hint-error","","left",""]],[["ard-hint-error","right",""],["","ard-hint-error","","right",""]]],Ap=["ard-label, [ard-label]","*","ard-error[left], [ard-error][left]","ard-error[right], [ard-error][right]","ard-hint[left], [ard-hint][left]","ard-hint[right], [ard-hint][right]","ard-hint:not([left]):not([right]), [ard-hint]:not([left]):not([right])","ard-error:not([left]):not([right]), [ard-error]:not([left]):not([right])","ard-hint-error:not([left]):not([right]), [ard-hint-error]:not([left]):not([right])","ard-hint-error[left], [ard-hint-error][left]","ard-hint-error[right], [ard-hint-error][right]"];function Fp(t,n){}function Ip(t,n){}function Mp(t,n){if(t&1&&(o(0,"div",10),g(1,Fp,0,0,"ng-template",11)(2,Ip,0,0,"ng-template",11),a()),t&2){f(2);let e=M(11),i=M(13);d(),p("ngTemplateOutlet",e),d(),p("ngTemplateOutlet",i)}}function kp(t,n){}function Pp(t,n){}function Vp(t,n){}function Op(t,n){if(t&1&&(o(0,"div",10),g(1,Pp,0,0,"ng-template",11)(2,Vp,0,0,"ng-template",11),a()),t&2){f(2);let e=M(11),i=M(13);d(),p("ngTemplateOutlet",e),d(),p("ngTemplateOutlet",i)}}function Rp(t,n){}function Lp(t,n){if(t&1&&(o(0,"div",9),g(1,Mp,3,2,"div",10),R(2,2),g(3,kp,0,0,"ng-template",11),a(),o(4,"div",12),g(5,Op,3,2,"div",10),R(6,3),g(7,Rp,0,0,"ng-template",11),a()),t&2){let e=f(),i=M(15),r=M(17);d(),y(e.alignHintToLeftByDefault()?1:-1),d(2),p("ngTemplateOutlet",i),d(2),y(e.alignHintToLeftByDefault()?-1:5),d(2),p("ngTemplateOutlet",r)}}function Bp(t,n){}function Hp(t,n){}function Up(t,n){if(t&1&&(o(0,"div",14),g(1,Bp,0,0,"ng-template",11)(2,Hp,0,0,"ng-template",11),a()),t&2){f(2);let e=M(9),i=M(13);d(),p("ngTemplateOutlet",e),d(),p("ngTemplateOutlet",i)}}function Np(t,n){}function jp(t,n){}function Yp(t,n){}function $p(t,n){if(t&1&&(o(0,"div",14),g(1,jp,0,0,"ng-template",11)(2,Yp,0,0,"ng-template",11),a()),t&2){f(2);let e=M(9),i=M(13);d(),p("ngTemplateOutlet",e),d(),p("ngTemplateOutlet",i)}}function Wp(t,n){}function zp(t,n){if(t&1&&(o(0,"div",13),g(1,Up,3,2,"div",14),R(2,4),g(3,Np,0,0,"ng-template",11),a(),o(4,"div",15),g(5,$p,3,2,"div",14),R(6,5),g(7,Wp,0,0,"ng-template",11),a()),t&2){let e=f(),i=M(15),r=M(17);d(),y(e.alignHintToLeftByDefault()?1:-1),d(2),p("ngTemplateOutlet",i),d(2),y(e.alignHintToLeftByDefault()?-1:5),d(2),p("ngTemplateOutlet",r)}}function Kp(t,n){t&1&&R(0,6)}function qp(t,n){t&1&&R(0,7)}function Qp(t,n){t&1&&R(0,8)}function Gp(t,n){t&1&&R(0,9)}function Xp(t,n){t&1&&R(0,10)}function Zp(t,n){t&1&&(o(0,"span"),s(1,"+"),a())}function Jp(t,n){if(t&1&&(g(0,Zp,2,0,"span"),b(1,"ard-kbd",3)),t&2){let e=n.$implicit,i=n.$index,r=f();y(i!==0?0:-1),d(),p("appearance",r.appearance())("full",r.full())("key",e)}}var em=t=>({"--ard-_tabber-tabs":t});function tm(t,n){if(t&1&&s(0),t&2){let e=n.$implicit;w(" ",e," ")}}function im(t,n){}function nm(t,n){if(t&1){let e=W();o(0,"button",6,0),_("click",function(){let r=T(e).$implicit,l=f();return D(!r.tab.selected()&&l.selectTab(r.tab))})("focus",function(){let r=T(e).$implicit,l=f();return D(l.onTabFocus(r.tab))})("blur",function(){let r=T(e).$implicit,l=f();return D(l.onTabBlur(r.tab))}),b(2,"div",7),o(3,"div",8),g(4,tm,1,1,"ng-template",null,1,ae)(6,im,0,0,"ng-template",9),a()()}if(t&2){let e,i=n.$implicit,r=M(5),l=f();J("ard-tab-active",i.tab.tabId()===l.selectedTabId())("ard-tab-focused",i.tab.tabId()===l.focusedTabId()),p("id",i.tab.tabId())("tabindex",l.tabIndex()),d(6),p("ngTemplateOutlet",(e=(e=i.template)!==null&&e!==void 0?e:(e=l.labelTemplate())==null?null:e.template)!==null&&e!==void 0?e:r)("ngTemplateOutletContext",i.templateContext)}}var rm=["modalTemplate"];function am(t,n){}function om(t,n){if(t&1){let e=W();o(0,"div",5),_("click",function(){T(e);let r=f(2);return D(r.onBackdropClick())}),g(1,am,0,0,"ng-template",6),a()}if(t&2){let e=f(2),i=M(3);p("ngClass",e.ngClasses()),d(),p("ngTemplateOutlet",i)}}function sm(t,n){}function lm(t,n){if(t&1){let e=W();o(0,"div",7),_("click",function(){T(e);let r=f(2);return D(r.onBackdropClick())}),g(1,sm,0,0,"ng-template",6),a()}if(t&2){let e=f(2),i=M(3);p("ngClass",e.ngClasses()),d(),p("ngTemplateOutlet",i)}}function dm(t,n){if(t&1&&g(0,om,2,2,"div",3)(1,lm,2,2,"div",4),t&2){let e=f();y(e.noBackdrop()?0:1)}}function cm(t,n){t&1&&(o(0,"ard-icon"),s(1,"close"),a())}function um(t,n){}function pm(t,n){if(t&1){let e=W();o(0,"ard-icon-button",13),_("click",function(){T(e);let r=f(2);return D(r.onCloseButtonClick())}),g(1,cm,2,0,"ng-template",null,2,ae)(3,um,0,0,"ng-template",6),a()}if(t&2){let e,i=M(2),r=f(2);p("compact",r.compact())("disabled",r.allActionsDisabled()),d(3),p("ngTemplateOutlet",(e=(e=(e=r.closeIconTemplate())==null?null:e.template)!==null&&e!==void 0?e:(e=r._closeIconTemplate())==null?null:e.template)!==null&&e!==void 0?e:i)}}function mm(t,n){if(t&1){let e=W();o(0,"div",8),_("click",function(r){return T(e),D(r.stopPropagation())}),o(1,"div",9)(2,"div",10),s(3),a(),g(4,pm,4,3,"ard-icon-button",11),a(),o(5,"div",12),R(6),a()()}if(t&2){let e=f();J("ard-modal-no-heading-text",!e.heading())("ard-modal-has-close-button",!e.noCloseButton()),d(3),v(e.heading()||(e.noCloseButton()?"":"\xA0")),d(),y(e.noCloseButton()?-1:4)}}function hm(t,n){if(t&1){let e=W();o(0,"ard-button",8),_("click",function(){T(e);let r=f().onReject;return D(r())}),s(1),a()}if(t&2){let e=f(),i=e.rejectButton,r=e.allActionsDisabled,l=e.dialogVariant,c=e.dialogCompact;p("color",i.color)("appearance",i.appearance)("variant",l)("compact",c)("disabled",r),d(),w(" ",i.text," ")}}function fm(t,n){if(t&1){let e=W();o(0,"div",6),g(1,hm,2,6,"ard-button",7),o(2,"ard-button",8),_("click",function(){let r=T(e).onConfirm;return D(r())}),s(3),a()()}if(t&2){let e=n.confirmButton,i=n.rejectButton,r=n.canConfirm,l=n.allActionsDisabled,c=n.dialogVariant,u=n.dialogCompact;d(),y(i.enabled?1:-1),d(),p("color",e.color)("appearance",e.appearance)("variant",c)("compact",u)("disabled",!r||l),d(),w(" ",e.text," ")}}function gm(t,n){}var Qs={Outlined:"outlined",Raised:"raised"},Gs={Rounded:"rounded",Sharp:"sharp",SharpConnected:"sharp ard-connected"},On=new P("ard-form-field-control");var _m={Outlined:"outlined"},vm={Raised:"raised"},Ve=L(C({},_m),{Transparent:"transparent",Filled:"filled"}),ym={Outlined:"outlined",OutlinedStrong:"outlined-strong",Filled:"filled"};var Xs={Rounded:"rounded",Sharp:"sharp"},He=L(C({},Xs),{Pill:"pill"}),Zs={readonly:!1,disabled:!1},Cm=(()=>{class t{constructor(e){this._DEFAULTS=e;this.readonly=h(this._DEFAULTS.readonly,{transform:i=>k(i)}),this.disabled=S(this._DEFAULTS.disabled)}set _disabled(e){this.disabled.set(k(e))}get _readonlyHostAttribute(){return this.readonly()}get _disabledHostAttribute(){return this.disabled()}static{this.\u0275fac=function(i){dr()}}static{this.\u0275dir=Y({type:t,hostVars:6,hostBindings:function(i,r){i&2&&(We("readonly",r._readonlyHostAttribute)("disabled",r._disabledHostAttribute),J("ard-readonly",r._readonlyHostAttribute)("ard-disabled",r._disabledHostAttribute))},inputs:{readonly:[1,"readonly"],_disabled:[0,"disabled","_disabled"]}})}}return t})(),Rt=L(C({},Zs),{tabIndex:0}),Qi=(()=>{class t extends Cm{constructor(){super(...arguments);this.tabIndex=I(()=>this.disabled()?-1:this._tabIndex()),this._tabIndex=h(this._DEFAULTS.tabIndex,{alias:"tabIndex",transform:e=>Ne(e,0)});this.focusEvent=se({alias:"focus"}),this.blurEvent=se({alias:"blur"});this.isFocused=S(!1)}focus(){this._focusableElement?.first?.nativeElement.focus()}focusFirst(){this.focus()}focusLast(){this._focusableElement?.last?.nativeElement.focus()}blur(){this._focusableElement?.forEach(e=>e.nativeElement.blur())}onFocus(e){this.isFocused.set(!0),this.focusEvent.emit(e)}onBlur(e){this.isFocused.set(!1),this.blurEvent.emit(e)}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=Me(t)))(r||t)}})()}static{this.\u0275dir=Y({type:t,viewQuery:function(i,r){if(i&1&&pr(zu,5),i&2){let l;mr(l=hr())&&(r._focusableElement=l)}},inputs:{_tabIndex:[1,"tabIndex","_tabIndex"]},outputs:{focusEvent:"focus",blurEvent:"blur"},features:[re]})}}return t})(),Gi=C({},Rt),ga=(()=>{class t extends Qi{constructor(){super(...arguments);this.wasTouched=S(!1),this._shouldEmitTouched=!1;this._injector=F(rt),this._ngControl=null,this.htmlId=h(Bn.TakeChance.id()),this._hasError=h(void 0,{transform:e=>k(e),alias:"hasError"}),this._hasErrorInControl=S(!1),this.hasError=I(()=>this._hasError()??(this.wasTouched()&&this._hasErrorInControl()))}registerOnTouched(e){this._onTouchedRegistered=e}registerOnChange(e){this._onChangeRegistered=e}setDisabledState(e){this.disabled.set(e)}onFocus(e){super.onFocus(e),this._shouldEmitTouched=!1}onBlur(e){this._shouldEmitTouched=!0,super.onBlur(e),setTimeout(()=>{this._shouldEmitTouched&&this._emitTouched()},0)}_emitTouched(){this.wasTouched.set(!0),this._onTouchedRegistered?.()}ngOnInit(){if(this._ngControl=this._injector.get(gt,null),this._ngControl){if((!this._ngControl.valueAccessor||this&&this instanceof this._ngControl.valueAccessor.constructor)&&(this._ngControl.valueAccessor=this),this._hasErrorInControl.set(this._ngControl.status==="INVALID"),this._statusChangesSub=this._ngControl.statusChanges?.pipe(Xe(e=>e==="INVALID")).subscribe(e=>this._hasErrorInControl.set(e)),!this._ngControl.control)return;Na(this._injector,()=>{zr(this._ngControl?.control?.touchedReactive)?.subscribe(e=>this.wasTouched.set(e))})}}ngOnDestroy(){this._statusChangesSub?.unsubscribe()}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=Me(t)))(r||t)}})()}static{this.\u0275dir=Y({type:t,inputs:{htmlId:[1,"htmlId"],_hasError:[1,"hasError","_hasError"]},features:[re]})}}return t})(),qe=L(C({},Gi),{required:void 0}),Js=(()=>{class t extends ga{constructor(){super(...arguments),this._required=h(void 0,{transform:e=>k(e),alias:"required"}),this.isSuccess=h(!1,{transform:e=>k(e)})}get required(){return this._required()??!!this._ngControl?.control?.hasValidator(Mt.required)}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=Me(t)))(r||t)}})()}static{this.\u0275dir=Y({type:t,inputs:{_required:[1,"required","_required"],isSuccess:[1,"isSuccess"]},features:[re]})}}return t})(),Xi={Left:"left",Right:"right"},Hn={Left:"left",Middle:"middle",Right:"right"};var sa=class{constructor(n){this._ardHostCmp=n,this.value=S(null),this.stringValue=I(()=>this.value()??"")}writeValue(n){return!ro(n)&&!no(n)&&(console.warn(new Error(`ARD-WA0020: Trying to set <ard-input>'s value to "${n}" (of type ${typeof n}), expected string or null.`)),n=n?.toString?.()??String(n)),this._writeValue(n)}_writeValue(n){n=this._applyLengthTransformer(n);let e=this.value();return this.value.set(n),this._updateInputElement(),e!==n}rewriteValueAfterHostUpdate(){this._writeValue(this.value())}clear(){this.value.set(null),this._updateInputElement()}_updateInputElement(){let n=this._ardHostCmp.textInputEl()?.nativeElement;n&&(n.value=this.stringValue())}get caretPos(){return this._ardHostCmp.textInputEl()?.nativeElement.selectionEnd??this.stringValue.length}set caretPos(n){this._ardHostCmp.textInputEl()?.nativeElement.setSelectionRange(n,n)}_applyLengthTransformer(n){let e=this._ardHostCmp.maxLength();return!$t(e)||!n||n.length<=e||(n=n.substring(0,e),this.caretPos=e),n}};var bm=L(C({},qe),{appearance:Ve.Outlined,variant:He.Rounded,compact:!1,placeholder:"",alignText:Xi.Left,clearable:!1,clearButtonTitle:"Clear",inputAttrs:{},maxLength:void 0}),xm=(()=>{class t extends Js{constructor(){super(...arguments);this.textInputEl=Ae("textInput"),this.inputModel=new sa(this),this._wasViewInit=!1,this.placeholder=h(this._DEFAULTS.placeholder),this.inputId=h(void 0),this.clearButtonTitle=h(this._DEFAULTS.clearButtonTitle),this.shouldDisplayPlaceholder=I(()=>!!this.placeholder()&&!this.inputModel.value());this.appearance=h(this._DEFAULTS.appearance),this.variant=h(this._DEFAULTS.variant),this.alignText=h(this._DEFAULTS.alignText),this.compact=h(this._DEFAULTS.compact,{transform:e=>k(e)}),this.ngClasses=I(()=>[`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`,`ard-text-align-${this.alignText()}`,this.compact()?"ard-compact":"",this.clearable()?"ard-clearable":""].join(" "));this.inputAttrs=h(this._DEFAULTS.inputAttrs);this.maxLength=h(this._DEFAULTS.maxLength,{transform:e=>Ne(e,this._DEFAULTS.maxLength)}),this.maxLengthAsInt=I(()=>this.maxLength()??2147483647);this.clearable=h(this._DEFAULTS.clearable,{transform:e=>k(e)});this._valueBeforeInit=null,this.valueChange=se();this.inputEvent=se({alias:"input"}),this.changeEvent=se({alias:"change"}),this.clearEvent=se({alias:"clear"}),this.shouldShowClearButton=I(()=>this.clearable()&&!this.disabled()&&!!this.inputModel.value())}ngAfterViewInit(){this._wasViewInit=!0,this._setInputAttributes(),this._valueBeforeInit&&(this.writeValue(this._valueBeforeInit),delete this._valueBeforeInit)}writeValue(e){this.inputModel.writeValue(e)}set value(e){if(!this._wasViewInit){this._valueBeforeInit=e;return}this.writeValue(e)}get value(){return this.inputModel.value()}onInput(e){this.inputModel.writeValue(e)&&this._emitInput()}_emitInput(){this._onChangeRegistered?.(this.value),this.inputEvent.emit(this.value),this.valueChange.emit(this.value)}onFocusMaster(e){this.onFocus(e)}onBlurMaster(e){this.onBlur(e)}onChange(e){e.stopPropagation(),this._emitChange()}_emitChange(){this.changeEvent.emit(this.inputModel.value())}onClearButtonClick(e){e.stopPropagation(),this.inputModel.clear(),this._emitChange(),this._emitInput(),this.clearEvent.emit(e),this.focus()}onCopy(e){this.value&&(this.textInputEl()?.nativeElement.selectionStart===0&&this.textInputEl()?.nativeElement.selectionEnd===this.textInputEl()?.nativeElement.value.length||this.textInputEl()?.nativeElement.selectionStart===this.textInputEl()?.nativeElement.selectionEnd)&&(e.clipboardData?.setData("text/plain",this.value),e.preventDefault())}_setInputAttributes(){let e=this.textInputEl().nativeElement,i=C({type:"text",autocorrect:"off",autocapitalize:"off",autocomplete:"off",tabindex:String(this.tabIndex())},this.inputAttrs());for(let r of Object.keys(i))e.setAttribute(r,String(i[r]))}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=Me(t)))(r||t)}})()}static{this.\u0275dir=Y({type:t,viewQuery:function(i,r){i&1&&Fe(r.textInputEl,Ku,5),i&2&&de()},inputs:{placeholder:[1,"placeholder"],inputId:[1,"inputId"],clearButtonTitle:[1,"clearButtonTitle"],appearance:[1,"appearance"],variant:[1,"variant"],alignText:[1,"alignText"],compact:[1,"compact"],inputAttrs:[1,"inputAttrs"],maxLength:[1,"maxLength"],clearable:[1,"clearable"],value:"value"},outputs:{valueChange:"valueChange",inputEvent:"input",changeEvent:"change",clearEvent:"clear"},features:[re]})}}return t})(),wm=L(C({},bm),{suggValueFrom:"value",suggLabelFrom:"label",suggestionsLoadingText:"Loading...",charlist:void 0,charlistCaseInsensitive:!1,dropdownAppearance:void 0,dropdownVariant:void 0}),V1=new P("ard-autocomplete-input-defaults",{factory:()=>C({},wm)});var Tm=L(C({},Rt),{appearance:Ve.Outlined,variant:He.Rounded,compact:!1}),Dm=new P("ard-form-field-frame-defaults",{factory:()=>C({},Tm)});var Rs=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(H(Te))}}static{this.\u0275dir=Y({type:t,selectors:[["ng-template","ard-prefix-tmp",""]],standalone:!1})}}return t})(),Ls=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(H(Te))}}static{this.\u0275dir=Y({type:t,selectors:[["ng-template","ard-suffix-tmp",""]],standalone:!1})}}return t})(),Sm=(()=>{class t extends Qi{constructor(e){super(e),this.hasError=h(!1,{transform:i=>k(i)}),this.isSuccess=h(!1,{transform:i=>k(i)});this.appearance=h(Ve.Outlined),this.variant=h(He.Rounded),this.compact=h(!1,{transform:i=>k(i)}),this.ngClasses=I(()=>[`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`,this.compact()?"ard-compact":"",this.hasError()?"ard-has-error":"",this.isSuccess()?"ard-is-success":"",this.isFocused()&&!this.readonly()?"ard-focused":"ard-unfocused"].join(" "));this.prefixTemplateInput=h(void 0,{alias:"prefixTemplate"}),this.suffixTemplateInput=h(void 0,{alias:"suffixTemplate"}),this.prefixTemplate=Be(Rs),this.suffixTemplate=Be(Ls)}set _setIsFocused(e){this.isFocused.set(e)}static{this.\u0275fac=function(i){return new(i||t)(H(Dm))}}static{this.\u0275cmp=m({type:t,selectors:[["ard-form-field-frame"]],contentQueries:function(i,r,l){i&1&&(xe(l,r.prefixTemplate,Rs,5),xe(l,r.suffixTemplate,Ls,5)),i&2&&de(2)},inputs:{hasError:[1,"hasError"],isSuccess:[1,"isSuccess"],_setIsFocused:[0,"isFocused","_setIsFocused"],appearance:[1,"appearance"],variant:[1,"variant"],compact:[1,"compact"],prefixTemplateInput:[1,"prefixTemplate","prefixTemplateInput"],suffixTemplateInput:[1,"suffixTemplate","suffixTemplateInput"]},standalone:!1,features:[re],ngContentSelectors:Pe,decls:6,vars:3,consts:[[1,"ard-form-field-frame",3,"ngClass"],[1,"ard-form-field-overlay"],[1,"ard-form-field-prefix-container"],[1,"ard-form-field-content-container"],[1,"ard-form-field-suffix-container"],[3,"ngTemplateOutlet"]],template:function(i,r){if(i&1&&($(),o(0,"div",0),b(1,"div",1),g(2,Qu,2,1,"div",2),o(3,"div",3),R(4),a(),g(5,Xu,2,1,"div",4),a()),i&2){let l,c;p("ngClass",r.ngClasses()),d(2),y(((l=r.prefixTemplateInput())!==null&&l!==void 0?l:r.prefixTemplate())?2:-1),d(3),y(((c=r.suffixTemplateInput())!==null&&c!==void 0?c:r.suffixTemplate())?5:-1)}},dependencies:[ze,Oe],styles:[`.ard-form-field-frame{position:relative}.ard-form-field-overlay{position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:1}
`],encapsulation:2,changeDetection:0})}}return t})(),Em=(()=>{class t extends Qi{constructor(){super(Rt)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["ard-clear-button"]],standalone:!1,features:[re],decls:5,vars:1,consts:[["focusableElement",""],["type","button",1,"ard-clear-btn-wrapper",3,"tabindex"],[1,"ard-hitbox"],[1,"ard-focus-overlay"],["aria-hidden","true",1,"ard-clear-btn"]],template:function(i,r){i&1&&(o(0,"button",1,0),b(2,"div",2)(3,"div",3)(4,"div",4),a()),i&2&&p("tabindex",r.tabIndex())},encapsulation:2})}}return t})(),Am={filterValue:"",appearance:Qs.Raised,variant:Gs.Rounded,compact:!1},O1=new P("ard-dropdown-panel-defaults",{factory:()=>C({},Am)});var Fm=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[te]})}}return t})();var Im=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[te]})}}return t})();var Mm={Square:"square",Rectangle:"rectangle"};var km=L(C({},qe),{appearance:Ve.Outlined,variant:He.Rounded,shape:Mm.Square,compact:!1,outputAsString:!1,transform:null,inputAttrs:{},autoFillParseFn:t=>t}),R1=new P("ard-digit-input-defaults",{factory:()=>C({},km)});var Pm=L(C({},qe),{appearance:Ve.Outlined,variant:He.Rounded,compact:!1,placeholder:"",alignText:Xi.Left,clearable:!1,clearButtonTitle:"Clear",inputAttrs:{},maxLength:void 0}),Vm=new P("ard-input-defaults",{factory:()=>C({},Pm)});var Bs=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(H(Te))}}static{this.\u0275dir=Y({type:t,selectors:[["ng-template","ard-placeholder-tmp",""]],standalone:!1})}}return t})(),Hs=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(H(Te))}}static{this.\u0275dir=Y({type:t,selectors:[["ng-template","ard-prefix-tmp",""]],standalone:!1})}}return t})(),Us=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(H(Te))}}static{this.\u0275dir=Y({type:t,selectors:[["ng-template","ard-suffix-tmp",""]],standalone:!1})}}return t})(),pi=(()=>{class t extends xm{constructor(e){super(e);this.prefixTemplate=Be(Hs),this.suffixTemplate=Be(Us);this.placeholderTemplate=Be(Bs)}static{this.\u0275fac=function(i){return new(i||t)(H(Vm))}}static{this.\u0275cmp=m({type:t,selectors:[["ard-input"]],contentQueries:function(i,r,l){i&1&&(xe(l,r.prefixTemplate,Hs,5),xe(l,r.suffixTemplate,Us,5),xe(l,r.placeholderTemplate,Bs,5)),i&2&&de(3)},standalone:!1,features:[ke([{provide:ct,useExisting:Ze(()=>t),multi:!0},{provide:On,useExisting:t}]),re],decls:8,vars:19,consts:[["textInput","","focusableElement",""],["defaultPlaceholderTemplate",""],[3,"appearance","variant","compact","readonly","isFocused","hasError","isSuccess","prefixTemplate","suffixTemplate"],[1,"ard-input",3,"click","ngClass"],[1,"ard-input-container"],["type","text",3,"input","focus","blur","change","copy","readonly","disabled","maxLength"],[3,"title"],[3,"ngTemplateOutlet"],[1,"ard-placeholder"],[3,"click","title"]],template:function(i,r){if(i&1){let l=W();o(0,"ard-form-field-frame",2)(1,"div",3),_("click",function(){return T(l),D(r.focus())}),o(2,"div",4),g(3,ep,3,1),o(4,"input",5,0),_("input",function(){T(l);let u=M(5);return D(r.onInput(u.value))})("focus",function(u){return T(l),D(r.onFocusMaster(u))})("blur",function(u){return T(l),D(r.onBlurMaster(u))})("change",function(u){return T(l),D(r.onChange(u))})("copy",function(u){return T(l),D(r.onCopy(u))}),a()(),g(7,tp,1,1,"ard-clear-button",6),a()()}if(i&2){let l,c;p("appearance",r.appearance())("variant",r.variant())("compact",r.compact())("readonly",r.readonly())("isFocused",r.isFocused())("hasError",r.hasError())("isSuccess",r.isSuccess())("prefixTemplate",(l=r.prefixTemplate())==null?null:l.template)("suffixTemplate",(c=r.suffixTemplate())==null?null:c.template),d(),J("ard-has-value",r.value),p("ngClass",r.ngClasses()),d(2),y(r.shouldDisplayPlaceholder()?3:-1),d(),p("readonly",r.readonly())("disabled",r.disabled())("maxLength",r.maxLengthAsInt()),We("id",r.inputId())("tabindex",r.tabIndex()),d(3),y(r.shouldShowClearButton()?7:-1)}},dependencies:[ze,Oe,Em,Sm],styles:[`.ard-input-container{position:relative}.ard-placeholder{position:absolute;left:0;right:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;pointer-events:none}.ard-text-align-left input,.ard-text-align-left .ard-placeholder{text-align:left}.ard-text-align-center input,.ard-text-align-center .ard-placeholder{text-align:center}.ard-text-align-right input,.ard-text-align-right .ard-placeholder{text-align:right}
`],encapsulation:2,changeDetection:0})}}return t})(),mi=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[te,Fm,Im]})}}return t})(),Om=L(C({},qe),{appearance:Ve.Outlined,variant:He.Rounded,compact:!1,placeholder:"",revealable:!0,holdToReveal:!1,autoHideTimeoutMs:void 0,revealed:!1,inputAttrs:{}}),L1=new P("ard-password-input-defaults",{factory:()=>C({},Om)});var Rm={filled:!1,weight:400,grade:0,opticalSize:40,ariaLabel:""},Lm=new P("ard-icon-defaults",{factory:()=>C({},Rm)});var Bm=(()=>{class t{transform(e){return e=e.trim().toLowerCase(),e=e.replace(/[ -]/g,"_"),e}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275pipe=ur({name:"icon",type:t,pure:!0,standalone:!1})}}return t})(),Ye=(()=>{class t{constructor(){this._DEFAULTS=F(Lm),this.ariaLabel=h(""),this.icon=h(void 0),this.filled=h(!1,{transform:e=>k(e)}),this.weight=h(400,{transform:e=>Ne(e,400)}),this.grade=h(0,{transform:e=>Ne(e,0)}),this.opticalSize=h(40,{transform:e=>Ne(e,40)}),this.fontVariationSettings=I(()=>{let e={FILL:$t(this.filled())?Number(this.filled()):void 0,wght:this.weight(),GRAD:this.grade(),opsz:this.opticalSize()},i=Object.entries(e).filter(r=>$t(r[1])).map(r=>`"${r[0]}" ${r[1]}`).flat();return i.length===0?"":["font-variation-settings: ",i.join(", ")].join("")}),this.contentWrapper=Ae("contentWrapperEl")}ngAfterViewInit(){!this.icon()&&!this.contentWrapper()?.nativeElement.innerText&&console.warn("ARD-FT9000: Using <ard-icon> without specifying the [icon] field.")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["ard-icon"]],viewQuery:function(i,r){i&1&&Fe(r.contentWrapper,fa,5),i&2&&de()},inputs:{ariaLabel:[1,"ariaLabel"],icon:[1,"icon"],filled:[1,"filled"],weight:[1,"weight"],grade:[1,"grade"],opticalSize:[1,"opticalSize"]},standalone:!1,ngContentSelectors:Pe,decls:6,vars:7,consts:[["contentWrapperEl",""],[1,"ard-icon","material-symbols-outlined"],[1,"ard-icon-content-wrapper"]],template:function(i,r){if(i&1&&($(),o(0,"span",1),s(1),et(2,"icon"),a(),o(3,"div",2,0),R(5),a()),i&2){let l,c=M(4);ye(r.fontVariationSettings()),We("aria-hidden",r.ariaLabel()!==void 0)("aria-label",r.ariaLabel()),d(),w(" ",Dt(2,5,(l=r.icon())!==null&&l!==void 0?l:c.innerText),`
`)}},dependencies:[Bm],styles:[`@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";ard-icon{font-variation-settings:"FILL" 0,"wght" 400,"GRAD" 0,"opsz" 48;font-size:1.5em;width:1em;height:1em;display:inline-block;-webkit-user-select:none;user-select:none;background-repeat:no-repeat;fill:currentColor;overflow:hidden;flex-shrink:0}ard-icon .ard-icon{font-variation-settings:inherit;font-size:inherit}ard-icon .ard-icon-content-wrapper{display:none}
`],encapsulation:2,changeDetection:0})}}return t})();var Re=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[te]})}}return t})();function oa(t,n){return n===void 0?!1:String(n).toLocaleLowerCase().indexOf(t)!==-1}var Vt={byLabel:(t,n)=>oa(t,n.label),byValue:(t,n)=>oa(t,n.value),byGroup:(t,n)=>oa(t,n.group),byLabelAndGroup:(t,n)=>Vt.byLabel(t,n)||n.label!==n.value&&Vt.byValue(t,n),byLabelAndValue:(t,n)=>Vt.byLabel(t,n)||Vt.byValue(t,n),byLabelAndGroupAndValue:(t,n)=>Vt.byLabel(t,n)||n.label!==n.value&&Vt.byValue(t,n)||Vt.byGroup(t,n)},Hm={Top:"top",Bottom:"bottom",Auto:"auto"},Um=L(C({},qe),{valueFrom:"value",labelFrom:"label",disabledFrom:"disabled",groupLabelFrom:"group",groupDisabledFrom:"disabled",childrenFrom:"children",searchFn:Vt.byLabel,clearButtonTitle:"Clear",noItemsFoundText:"No items found.",addCustomOptionText:"Add option",loadingPlaceholderText:"Loading...",placeholder:"",searchPlaceholder:"",dropdownPosition:Hm.Auto,inputAttrs:{},isLoading:!1,itemsAlreadyGrouped:!1,invertDisabled:!1,noGroupActions:!1,autoHighlightFirst:!1,autoFocus:!1,keepOpen:!1,hideSelected:!1,noBackspaceClear:!1,sortMultipleValues:!1,searchCaseSensitive:!1,keepSearchAfterSelect:!1,maxSelectedItems:1/0,itemDisplayLimit:1/0,compareWith:void 0,appearance:Ve.Outlined,variant:He.Rounded,compact:!1,dropdownPanelWidth:void 0,dropdownPanelHeight:void 0,dropdownPanelMinWidth:"max-content",dropdownPanelMinHeight:void 0,dropdownPanelMaxWidth:void 0,dropdownPanelMaxHeight:void 0,dropdownAppearance:void 0,dropdownVariant:void 0,multiselectable:!1,clearable:!1,searchable:!1,addCustom:!1}),B1=new P("ard-select-defaults",{factory:()=>C({},Um)});var we={None:"none",Primary:"primary",Secondary:"secondary",Warning:"warn",Danger:"danger",Success:"success",Info:"info"},vt=L(C({},we),{CurrentColor:"currentColor"}),_a=L(C({},Zs),{contentAlignment:Xi.Left,appearance:ym.Outlined,variant:He.Rounded,color:we.Primary,compact:!1}),H1=new P("ard-chip-defaults",{factory:()=>_a});var Nm=L(C(C({},Rt),_a),{deleteButtonTitle:"Delete"}),U1=new P("ard-deletable-chip-defaults",{factory:()=>C({},Nm)});var Un=Gi,jm=(()=>{class t extends ga{constructor(){super(...arguments);this.selectEvent=se({alias:"select"}),this.unselectEvent=se({alias:"unselect"}),this.changeEvent=se({alias:"change"});this.selected=S(!1),this.selectedChange=se()}writeValue(e){this._selected=e}_emitChange(){this._onChangeRegistered?.(this.selected()),this.selected()?this.selectEvent.emit(null):this.unselectEvent.emit(null),this.selectedChange.emit(this.selected()),this.changeEvent.emit(this.selected())}set _selected(e){this.selected.set(k(e))}get _selectedHostAttribute(){return this.selected()}toggleSelected(){this.selected.update(e=>!e),this._emitChange()}select(){this.selected.set(!0),this._emitChange()}unselect(){this.selected.set(!1),this._emitChange()}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=Me(t)))(r||t)}})()}static{this.\u0275dir=Y({type:t,hostVars:3,hostBindings:function(i,r){i&2&&(We("selected",r._selectedHostAttribute),J("ard-selected",r._selectedHostAttribute))},inputs:{_selected:[0,"selected","_selected"]},outputs:{selectEvent:"select",unselectEvent:"unselect",changeEvent:"change",selectedChange:"selectedChange"},features:[re]})}}return t})(),Ym=L(C(C({},Un),_a),{chipTitle:"Select",hideSelectionIcon:!1}),N1=new P("ard-selectable-chip-defaults",{factory:()=>C({},Ym)});var el=L(C({},qe),{compact:!1,multiple:!1,blockAfterUpload:!1}),$m=L(C({},el),{variant:He.Rounded,color:we.Primary}),j1=new P("ard-file-drop-area-defaults",{factory:()=>C({},$m)});var tl=(()=>{class t{constructor(e){this._DEFAULTS=e,this.wrapperClasses=h(""),this.type=h(this._DEFAULTS.type),this.ariaLabel=h("");this.appearance=h(this._DEFAULTS.appearance),this.color=h(this._DEFAULTS.color),this.lightColoring=h(this._DEFAULTS.lightColoring,{transform:i=>k(i)}),this.compact=h(this._DEFAULTS.compact,{transform:i=>k(i)}),this.disabled=h(this._DEFAULTS.disabled,{transform:i=>k(i)}),this.tabIndex=I(()=>this.disabled()?-1:this._tabIndex()),this._tabIndex=h(this._DEFAULTS.tabIndex,{alias:"tabIndex",transform:i=>Ne(i,0)}),this.pointerEventsWhenDisabled=h(this._DEFAULTS.pointerEventsWhenDisabled,{transform:i=>k(i)})}static{this.\u0275fac=function(i){dr()}}static{this.\u0275dir=Y({type:t,inputs:{wrapperClasses:[1,"wrapperClasses"],type:[1,"type"],ariaLabel:[1,"ariaLabel"],appearance:[1,"appearance"],color:[1,"color"],lightColoring:[1,"lightColoring"],compact:[1,"compact"],disabled:[1,"disabled"],_tabIndex:[1,"tabIndex","_tabIndex"],pointerEventsWhenDisabled:[1,"pointerEventsWhenDisabled"]}})}}return t})(),Wm={Button:"button",Submit:"submit",Reset:"reset"},la={Transparent:"transparent",Raised:"raised",RaisedStrong:"raised-strong",Outlined:"outlined",OutlinedStrong:"outlined-strong",Flat:"flat"},zm={Rounded:"rounded",Pill:"pill",Sharp:"sharp"},Km={Standard:"standard",Small:"small"},il={disabled:!1,tabIndex:0,color:we.Primary,lightColoring:!1,compact:!1,type:Wm.Button,pointerEventsWhenDisabled:!1},nl=L(C({},il),{appearance:la.Raised}),qm=L(C({},nl),{variant:zm.Rounded,vertical:!1}),rl=new P("ard-button-defaults",{factory:()=>C({},qm)});var va=(()=>{class t extends tl{constructor(e){super(e),this._hostEl=F(pe),this._renderer=F(ot);this.variant=h(this._DEFAULTS.variant),this.vertical=h(this._DEFAULTS.vertical,{transform:r=>k(r)}),this.ngClasses=I(()=>["ard-button",this.wrapperClasses(),`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`,`ard-color-${this.color()}`,this.lightColoring()?"ard-light-coloring":"",this.disabled()?"ard-disabled":"",this.compact()?"ard-compact":"",this.vertical()?"ard-button-vertical":"",this.pointerEventsWhenDisabled()?"ard-button-with-pointer-events-when-disabled":""].join(" "));let i=this._hostEl.nativeElement;i.tagName==="BUTTON"&&(he(()=>{this._renderer.setProperty(i,"disabled",this.disabled())}),he(()=>{this._renderer.setAttribute(i,"type",this.type())}))}handleClick(e){this.disabled()&&(e.preventDefault(),e.stopImmediatePropagation())}static{this.\u0275fac=function(i){return new(i||t)(H(rl))}}static{this.\u0275dir=Y({type:t,selectors:[["button","ard-button",""],["a","ard-button",""]],hostVars:3,hostBindings:function(i,r){i&1&&_("click",function(c){return r.handleClick(c)}),i&2&&(Qa("tabindex",r.tabIndex()),me(r.ngClasses()))},inputs:{variant:[1,"variant"],vertical:[1,"vertical"]},standalone:!1,features:[re]})}}return t})(),st=(()=>{class t extends tl{constructor(e){super(e);this.focusEvent=se({alias:"focus"}),this.blurEvent=se({alias:"blur"});this.variant=h(this._DEFAULTS.variant),this.vertical=h(this._DEFAULTS.vertical,{transform:i=>k(i)}),this.ngClasses=I(()=>"")}static{this.\u0275fac=function(i){return new(i||t)(H(rl))}}static{this.\u0275cmp=m({type:t,selectors:[["ard-button"]],hostVars:2,hostBindings:function(i,r){i&2&&J("ard-button-with-pointer-events-when-disabled",r.pointerEventsWhenDisabled())},inputs:{variant:[1,"variant"],vertical:[1,"vertical"]},outputs:{focusEvent:"focus",blurEvent:"blur"},standalone:!1,features:[re],ngContentSelectors:Pe,decls:3,vars:10,consts:[["buttonElement",""],["ard-button","",3,"focus","blur","type","appearance","color","disabled","compact","lightColoring","pointerEventsWhenDisabled","variant","vertical"]],template:function(i,r){if(i&1){let l=W();$(),o(0,"button",1,0),_("focus",function(u){return T(l),D(r.focusEvent.emit(u))})("blur",function(u){return T(l),D(r.blurEvent.emit(u))}),R(2),a()}i&2&&(p("type",r.type())("appearance",r.appearance())("color",r.color())("disabled",r.disabled())("compact",r.compact())("lightColoring",r.lightColoring())("pointerEventsWhenDisabled",r.pointerEventsWhenDisabled())("variant",r.variant())("vertical",r.vertical()),We("aria-label",r.ariaLabel()))},dependencies:[va],styles:[`.ard-button{display:flex;align-items:center;position:relative;cursor:pointer}.ard-button.ard-button-align-left{flex-direction:row}.ard-button.ard-button-align-right{flex-direction:row-reverse}.ard-button.ard-button-vertical{flex-direction:column}
`],encapsulation:2,changeDetection:0})}}return t})();var Qe=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[te]})}}return t})();var Qm=L(C({},el),{appearance:Ve.Outlined,variant:He.Rounded,color:we.Primary,inputAttrs:{},placeholder:"",clearable:!1,clearButtonTitle:"Clear"}),Y1=new P("ard-file-input-defaults",{factory:()=>C({},Qm)});var al={Days:"days",Months:"months",Years:"years"},Gm={Only:"only",Left:"left",Inner:"inner",Right:"right"},da=class{constructor(n,e){this.from=n,this.to=e}};var Xm=L(C({},qe),{color:we.Primary,activeView:al.Days,activeYear:new Date().getFullYear(),activeMonth:new Date().getMonth(),firstWeekday:1,multipleYearPageChangeModifier:5,autoFocus:!1,multiCalendarLocation:Gm.Only,min:null,max:null,filter:null,UTC:!1,daysViewHeaderDateFormat:"MMM yyyy",yearsViewHeaderDateFormat:"yyyy",monthsViewHeaderDateFormat:"yyyy",weekdayDateFormat:"EEEEE",weekdayTitleDateFormat:"EEEE",floatingMonthDateFormat:"LLL",floatingMonthTitleDateFormat:"LLLL",yearDateFormat:"yyyy",monthDateFormat:"MMM",dayDateFormat:"d"}),$1=new P("ard-calendar-defaults",{factory:()=>C({},Xm)});var Zm=new P("ard-icon-button-defaults",{factory:()=>C(C({},il),Rt)});var yt=(()=>{class t extends Qi{constructor(e){super(e),this.wrapperClasses=h(""),this.type=h(this._DEFAULTS.type),this.ariaLabel=h("");this.color=h(this._DEFAULTS.color),this.lightColoring=h(this._DEFAULTS.lightColoring,{transform:i=>k(i)}),this.compact=h(this._DEFAULTS.compact,{transform:i=>k(i)}),this.pointerEventsWhenDisabled=h(this._DEFAULTS.pointerEventsWhenDisabled,{transform:i=>k(i)}),this.ngClasses=I(()=>["ard-appearance-transparent",`ard-color-${this.disabled()?we.None:this.color()}`,this.lightColoring()?"ard-light-coloring":"",this.compact()?"ard-compact":""].join(" "))}static{this.\u0275fac=function(i){return new(i||t)(H(Zm))}}static{this.\u0275cmp=m({type:t,selectors:[["ard-icon-button"]],hostVars:2,hostBindings:function(i,r){i&2&&J("ard-button-with-pointer-events-when-disabled",r.pointerEventsWhenDisabled())},inputs:{wrapperClasses:[1,"wrapperClasses"],type:[1,"type"],ariaLabel:[1,"ariaLabel"],color:[1,"color"],lightColoring:[1,"lightColoring"],compact:[1,"compact"],pointerEventsWhenDisabled:[1,"pointerEventsWhenDisabled"]},standalone:!1,features:[re],ngContentSelectors:Pe,decls:2,vars:4,consts:[[1,"ard-icon-button",3,"focus","blur","type","ngClass","tabindex"]],template:function(i,r){i&1&&($(),o(0,"button",0),_("focus",function(c){return r.focusEvent.emit(c)})("blur",function(c){return r.blurEvent.emit(c)}),R(1),a()),i&2&&(p("type",r.type())("ngClass",r.ngClasses())("tabindex",r.tabIndex()),We("aria-label",r.ariaLabel()))},dependencies:[ze],styles:[`.ard-icon-button{display:flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.ard-icon-button .ard-button-content{max-height:100%;display:flex;align-items:center;justify-content:center}
`],encapsulation:2,changeDetection:0})}}return t})();var Ct=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[te]})}}return t})();var Jm=t=>t instanceof Date?`${t.getDate().toString().padStart(2,"0")}/${(t.getMonth()+1).toString().padStart(2,"0")}/${t.getFullYear()}`:"",eh=t=>{if(t instanceof da){let n=`${t.from.getDate().toString().padStart(2,"0")}/${(t.from.getMonth()+1).toString().padStart(2,"0")}/${t.from.getFullYear()}`,e=t.to?`${t.to.getDate().toString().padStart(2,"0")}/${(t.to.getMonth()+1).toString().padStart(2,"0")}/${t.to.getFullYear()}`:"";return`${n} \u2013 ${e}`}return""},th=(t,n)=>{let e=t.trim();if(!e.includes("/")&&!isNaN(Date.parse(e))){let l=new Date(e);return l.setHours(0,0,0,0),l}let i=e.split("/"),r=new Date().getFullYear();if(i.length===1){let l=parseInt(i[0],10);return isNaN(l)?null:new Date(l,0,1)}if(i.length===2){let l=parseInt(i[0],10),c=parseInt(i[1],10)-1;if(isNaN(l)||isNaN(c))return null;let u=new Date(r,c,l);return isNaN(u.getTime())?null:u}if(i.length===3){let l=parseInt(i[0],10),c=parseInt(i[1],10)-1,u=parseInt(i[2],10);if(isNaN(l)||isNaN(c)||isNaN(u))return null;let A=new Date(u,c,l);return isNaN(A.getTime())?null:A}return n},ih={Allow:"allow",Adjust:"adjust"},nh=L(C({},qe),{inputAttrs:{},placeholder:"",serializeFn:Jm,rangeSerializeFn:eh,deserializeFn:th,appearance:Ve.Outlined,variant:He.Rounded,color:we.Primary,compact:!1,dropdownAppearance:Qs.Outlined,dropdownVariant:Gs.Rounded,minMaxStrategy:ih.Adjust,startView:void 0,inputReadOnly:!1,calendarDisabled:!1,calendarHidden:!1,activeView:al.Days,activeYear:new Date().getFullYear(),activeMonth:new Date().getMonth(),firstWeekday:1,multipleYearPageChangeModifier:5,numberOfCalendars:2,min:null,max:null,filter:null,UTC:!1,hideFloatingMonth:!1,calendarDaysViewHeaderDateFormat:"MMM yyyy",calendarYearsViewHeaderDateFormat:"yyyy",calendarMonthsViewHeaderDateFormat:"yyyy",calendarWeekdayDateFormat:"EEEEE",calendarWeekdayTitleDateFormat:"EEEE",calendarFloatingMonthDateFormat:"LLL",calendarFloatingMonthTitleDateFormat:"LLLL",calendarYearDateFormat:"yyyy",calendarMonthDateFormat:"MMM",calendarDayDateFormat:"d",acceptButtonText:"Accept",cancelButtonText:"Cancel"}),W1=new P("ard-date-input-defaults",{factory:()=>C({},nh)});var rh={NoChange:"nochange",Uppercase:"uppercase",Lowercase:"lowercase"},ah=L(C({},qe),{appearance:Ve.Outlined,variant:He.Rounded,compact:!1,placeholder:"",case:rh.NoChange,maxDigits:void 0,hideHash:!1,clearable:!1,clearButtonTitle:"Clear",inputAttrs:{}}),z1=new P("ard-hex-input-defaults",{factory:()=>C({},ah)});var oh=L(C({},qe),{appearance:Ve.Outlined,variant:He.Rounded,compact:!1,placeholder:"",alignText:Hn.Middle,inputAttrs:{},min:0,max:1/0,allowFloat:!1,noButtons:!1,stepSize:1,keepFocusOnQuickChangeButton:!0}),K1=new P("ard-number-input-defaults",{factory:()=>C({},oh)});var sh=L(C({},nl),{size:Km.Standard}),q1=new P("ard-fab-defaults",{factory:()=>C({},sh)});var lh=L(C({},Un),{color:vt.Primary,unselectedColor:vt.None}),dh=new P("ard-checkbox-defaults",{factory:()=>C({},lh)});var Ns=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(H(Te))}}static{this.\u0275dir=Y({type:t,selectors:[["ng-template","ard-checkbox-tmp",""]],standalone:!1})}}return t})(),js=(()=>{class t{constructor(e){this.template=e,this.checkboxTmp=h(void 0)}static{this.\u0275fac=function(i){return new(i||t)(H(Te))}}static{this.\u0275dir=Y({type:t,selectors:[["ng-template","_ard-tmp-repository",""]],inputs:{checkboxTmp:[1,"checkboxTmp"]}})}}return t})(),Pt={Unselected:"unselected",Indeterminate:"indeterminate",Selected:"selected"},Nn=(()=>{class t extends jm{constructor(e){super(e);this.color=h(this._DEFAULTS.color),this.unselectedColor=h(this._DEFAULTS.unselectedColor),this.ngClasses=I(()=>[`ard-color-${this.color()}`,`ard-unselected-color-${this.unselectedColor()}`,`ard-checkbox-${this.state()}`].join(" ")),this.state=dt(Pt.Unselected),this.State=Pt;this.templateRepository=Be(js),this.checkboxTemplate=Be(Ns),this.checkboxTemplateContext=I(()=>({$implicit:this.selected(),selected:this.selected(),state:this.state()}))}set _selected(e){let i=k(e);this.selected.set(i),this.state.set(i?Pt.Selected:Pt.Unselected)}toggleState(){let e=Pt.Unselected;this.state()===Pt.Unselected&&(e=Pt.Selected),this.state.set(e),this.selected.set(this.state()===Pt.Selected),this._emitChange()}static{this.\u0275fac=function(i){return new(i||t)(H(dh))}}static{this.\u0275cmp=m({type:t,selectors:[["ard-checkbox"]],contentQueries:function(i,r,l){i&1&&(xe(l,r.templateRepository,js,5),xe(l,r.checkboxTemplate,Ns,5)),i&2&&de(2)},inputs:{color:[1,"color"],unselectedColor:[1,"unselectedColor"],state:[1,"state"]},outputs:{state:"stateChange"},standalone:!1,features:[ke([{provide:ct,useExisting:Ze(()=>t),multi:!0}]),re],decls:6,vars:6,consts:[["defaultCheckboxTemplate",""],["role","checkbox","type","button",1,"ard-checkbox",3,"click","focus","blur","id","ariaChecked","tabindex","ngClass"],[1,"ard-hitbox"],[1,"ard-focus-overlay"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"icon","filled"]],template:function(i,r){if(i&1){let l=W();o(0,"button",1),_("click",function(){return T(l),D(r.toggleState())})("focus",function(u){return T(l),D(r.onFocus(u))})("blur",function(u){return T(l),D(r.onBlur(u))}),b(1,"div",2)(2,"div",3),g(3,ip,1,2,"ng-template",null,0,ae)(5,np,0,0,"ng-template",4),a()}if(i&2){let l,c=M(4);p("id",r.htmlId())("ariaChecked",r.selected())("tabindex",r.tabIndex())("ngClass",r.ngClasses()),d(5),p("ngTemplateOutlet",(l=(l=(l=r.templateRepository())==null||(l=l.checkboxTmp())==null?null:l.template)!==null&&l!==void 0?l:(l=r.checkboxTemplate())==null?null:l.template)!==null&&l!==void 0?l:c)("ngTemplateOutletContext",r.checkboxTemplateContext())}},dependencies:[ze,Oe,Ye],styles:[`ard-checkbox{display:inline}.ard-checkbox{font-size:inherit}
`],encapsulation:2,changeDetection:0})}}return t})(),jn=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[te,Re]})}}return t})(),ch=L(C({},Rt),{color:vt.Primary}),uh=new P("ard-radio-defaults",{factory:()=>C({},ch)});var Rn=(()=>{class t extends Qi{constructor(e){super(e),this._changeDetector=F(Yt),this.htmlId=h(Bn.TakeChance.id());this.selectEvent=se({alias:"select"}),this.unselectEvent=se({alias:"unselect"}),this.changeEvent=se({alias:"change"});this.selected=S(!1),this.selectedChange=se(),this.value=h();this.color=h(this._DEFAULTS.color),this.ngClasses=I(()=>[`ard-color-${this.color()}`,`ard-radio-${this.selected()?"selected":"unselected"}`].join(" "));this.name=S(null)}_emitChange(){this.selected()?this.selectEvent.emit(null):this.unselectEvent.emit(null),this.selectedChange.emit(this.selected()),this.changeEvent.emit(this.selected())}set _selected(e){this.selected.set(k(e))}get _selectedHostAttribute(){return this.selected()}toggleSelected(){this.selected.update(e=>!e),this._emitChange()}select(){this.selected.set(!0),this._emitChange()}unselect(){this.selected.set(!1),this._emitChange()}onMousedown(){this.focus()}onMouseup(){this.focus(),this.selected.set(!0),this._emitChange()}markForCheck(){this._changeDetector.markForCheck()}static{this.\u0275fac=function(i){return new(i||t)(H(uh))}}static{this.\u0275cmp=m({type:t,selectors:[["ard-radio"]],hostVars:3,hostBindings:function(i,r){i&2&&(We("selected",r._selectedHostAttribute),J("ard-selected",r._selectedHostAttribute))},inputs:{htmlId:[1,"htmlId"],_selected:[0,"selected","_selected"],value:[1,"value"],color:[1,"color"]},outputs:{selectEvent:"select",unselectEvent:"unselect",changeEvent:"change",selectedChange:"selectedChange"},standalone:!1,features:[re],ngContentSelectors:Pe,decls:11,vars:6,consts:[["focusableElement",""],["radio",""],["type","button",1,"ard-radio",3,"focus","blur","mousedown","mouseup","ngClass","tabindex"],[1,"ard-radio-circles"],[1,"ard-radio-outer-circle"],[1,"ard-radio-inner-circle"],[1,"ard-focus-overlay"],[1,"ard-hitbox"],[3,"for"],["type","radio",1,"ard-radio-input-element",3,"name","id","checked"]],template:function(i,r){if(i&1){let l=W();$(),o(0,"button",2,0),_("focus",function(u){return T(l),D(r.onFocus(u))})("blur",function(u){return T(l),D(r.onBlur(u))})("mousedown",function(){return T(l),D(r.onMousedown())})("mouseup",function(){return T(l),D(r.onMouseup())}),o(2,"div",3),b(3,"div",4)(4,"div",5)(5,"div",6)(6,"div",7),a(),o(7,"label",8),R(8),a()(),b(9,"input",9,1)}i&2&&(p("ngClass",r.ngClasses())("tabindex",r.tabIndex()),d(7),p("for",r.htmlId()),d(2),p("name",r.name())("id",r.htmlId())("checked",r.selected()))},dependencies:[ze],styles:[`.ard-radio{border:none;background:none}.ard-radio>label{pointer-events:none}ard-radio>.ard-radio-input-element{display:none}
`],encapsulation:2,changeDetection:0})}}return t})(),ol=(()=>{class t extends Js{get _htmlIdHostAttribute(){return this.htmlId()}constructor(){super(qe),this._radios=Jt(Rn,{descendants:!0}),this.valueChange=se(),this.changeEvent=se({alias:"change"}),this.selected=dt(null);this.name=h(Bn.TakeChance.id());this._childEventSubs=[],this._isContentInit=!1,he(()=>{this.name(),this._updateRadioButtonNames()}),he(()=>{this.selected(),this._checkSelectedRadioButton()}),he(()=>{let e=this._radios();if(e){setTimeout(()=>{this._updateRadioButtonNames()},0),this._destroyChildSubscriptions();for(let i of e)this._childEventSubs.push(i.blurEvent.subscribe(r=>{this._handleBlurEvents(r)})),this._childEventSubs.push(i.focusEvent.subscribe(r=>{this._handleFocusEvents(r)})),this._childEventSubs.push(i.selectedChange.subscribe(r=>{r&&this._handleChangeEvents(i)}))}})}get value(){return this.selected()?.value()}set value(e){this.writeValue(e)}writeValue(e){if(this.value!==e){if(!this._isContentInit){this._valueBeforeInit=e;return}this._findRadioByValue(e)}setTimeout(()=>{this._updateRadiosByValue()},0)}_findRadioByValue(e){this._radios&&this.selected.set(this._radios().find(i=>e===i.value())??null)}_updateRadiosByValue(){this._isContentInit&&this._radios().forEach(e=>{e.selected.set(this.value===e.value()),e.markForCheck()})}_checkSelectedRadioButton(){let e=this.selected();e&&!e.selected()&&(e.selected.set(!0),e.markForCheck())}_updateRadioButtonNames(){this._radios()&&this._radios().forEach(e=>{e.name.set(this.name()),e.markForCheck()})}_handleBlurEvents(e){this.onBlur(e)}_handleFocusEvents(e){this.onFocus(e)}_handleChangeEvents(e){this.writeValue(e.value()),this._emitChange()}_emitChange(){let e=this.value;this._onChangeRegistered?.(e),this.changeEvent.emit(e),this.valueChange.emit(e)}ngAfterContentInit(){this._isContentInit=!0,this._valueBeforeInit!==void 0&&this.writeValue(this._valueBeforeInit),setTimeout(()=>{this._updateRadioButtonNames()},0);for(let e of this._radios())this._childEventSubs.push(e.blurEvent.subscribe(i=>{this._handleBlurEvents(i)})),this._childEventSubs.push(e.focusEvent.subscribe(i=>{this._handleFocusEvents(i)})),this._childEventSubs.push(e.selectedChange.subscribe(i=>{i&&this._handleChangeEvents(e)}))}ngOnDestroy(){super.ngOnDestroy(),this._destroyChildSubscriptions()}_destroyChildSubscriptions(){for(let e of this._childEventSubs)e.unsubscribe();this._childEventSubs=[]}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["ard-radio-group"]],contentQueries:function(i,r,l){i&1&&xe(l,r._radios,Rn,5),i&2&&de()},hostAttrs:["role","radiogroup"],hostVars:5,hostBindings:function(i,r){i&2&&We("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null)("id",r._htmlIdHostAttribute)},inputs:{value:"value",selected:[1,"selected"],name:[1,"name"]},outputs:{valueChange:"valueChange",changeEvent:"change",selected:"selectedChange"},standalone:!1,features:[ke([{provide:ct,useExisting:Ze(()=>t),multi:!0},{provide:On,useExisting:t}]),re],ngContentSelectors:Pe,decls:1,vars:0,template:function(i,r){i&1&&($(),R(0))},encapsulation:2,changeDetection:0})}}return t})(),sl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[te]})}}return t})();var ph=L(C({},qe),{valueFrom:"value",labelFrom:"label",disabledFrom:"disabled",compareWith:void 0,multiselectable:!1,requireValue:!1,invertDisabled:!1,maxSelectedItems:void 0});var mh=L(C({},He),{RoundedConnected:"rounded-connected",SharpConnected:"sharp-connected",PillConnected:"pill-connected"}),hh=L(C({},Ve),{FilledStrong:"filled-strong",OutlinedStrong:"outlined-strong"}),fh=L(C({},ph),{appearance:hh.Outlined,variant:mh.RoundedConnected,color:we.Primary,align:Hn.Middle,iconBased:!1,compact:!1,autoFocus:!1,uniformWidths:!1,itemsPerRow:1/0}),Q1=new P("ard-segment-defaults",{factory:()=>C({},fh)});var gh={Raised:"raised",Contained:"contained"},_h=L(C({},Un),{color:we.Primary,appearance:gh.Raised,icon:void 0,selectedIcon:void 0,unselectedIcon:void 0}),G1=new P("ard-slide-toggle-defaults",{factory:()=>C({},_h)});var Gt={Push:"push",Allow:"allow",Block:"block"},Ys=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(H(Te))}}static{this.\u0275dir=Y({type:t,selectors:[["ng-template","ard-slider-tooltip-tmp",""]],standalone:!1})}}return t})(),ll={Always:"always",Auto:"auto",Never:"never"},ca={Top:"top",Bottom:"bottom"},vh=L(C({},Gi),{noTooltip:!1,showValueTicks:!1,formatTooltipFn:t=>t,min:0,max:100,step:1,shiftMultiplier:5,labelPosition:ca.Bottom,labels:[],color:vt.Primary,compact:!1,tooltipPosition:ca.Top,tooltipBehavior:ll.Auto,selectionBehavior:Gt.Allow,minimumDistance:0}),dl=(()=>{class t extends ga{constructor(){super(...arguments),this.elementRef=Ae("track"),this.document=F(Ce),this.renderer=F(ot),this.overlay=F(oi),this.scrollStrategyOpts=F(xn),this.viewContainerRef=F(ft);this.min=h(this._DEFAULTS.min,{transform:e=>Ne(e,this._DEFAULTS.min)}),this.max=h(this._DEFAULTS.max,{transform:e=>Ne(e,this._DEFAULTS.max)}),this.step=h(this._DEFAULTS.step,{transform:e=>{let i=Ne(e,this._DEFAULTS.step);if(i===0)throw new Error(`ARD-FT${this.componentId}1a: Cannot set <ard-${this.componentName}>'s [step] to 0.`);if(i<0)throw new Error(`ARD-FT${this.componentId}1b: Cannot set <ard-${this.componentName}>'s [step] to a negative value, got ${i}.`);return i}}),this.minMaxStepValueCleanup=he(()=>{this.min(),this.max(),this.step(),Ue(()=>this.cleanupValueAfterMinMaxStepChange())}),this.minMaxErrorCheck=he(()=>{let e=this.min(),i=this.max();if(e>=i)throw new Error(`ARD-FT${this.componentId}0: Cannot set <ard-${this.componentName}>'s [min] to a value greater than or equal to [max], got min=${e} and max=${i}.`)}),this.shiftMultiplier=h(this._DEFAULTS.shiftMultiplier,{transform:e=>Ne(e,this._DEFAULTS.shiftMultiplier)}),this._stepSizeComputed=I(()=>this.step()/Math.abs(this.min()-this.max()));this.showValueTicks=h(this._DEFAULTS.showValueTicks,{transform:e=>k(e)}),this._tickArray=I(()=>{let e=[],i=0;for(;i<100;)e.push(i),i+=this._stepSizeComputed()*100,i=(0,_t.roundToPrecision)(i,6);return e.push(100),e.map(r=>`${r}%`)});this._transformLabelInput=e=>!$t(e)||Array.isArray(e)&&e.length===0?[]:(typeof e=="string"&&(e=xr(e).map(Number)),$t(e[0])&&typeof e[0]=="number"?e.map(i=>({label:i,value:i})):e),this.labelPosition=h(this._DEFAULTS.labelPosition),this.labels=h(this._transformLabelInput(this._DEFAULTS.labels),{transform:e=>this._transformLabelInput(e)}),this.labelObjects=I(()=>{let e=this.labels();return!$t(e)||e.length===0?[]:e.map(i=>{let r=this._clampValue(i.value);return{label:String(i.label),positionPercent:`${this._valueToPercent(r)*100}%`}})});this.color=h(vt.Primary),this.compact=h(!1,{transform:e=>k(e)}),this.ngClasses=I(()=>[`ard-color-${this.color()}`,`ard-labels-${this.labelPosition()}`,`ard-tooltip-${this.tooltipPosition()}`,this.compact()?"ard-compact":""].join(" "));this.sliderTransition=I(()=>{let e=this._totalSteps(),i=20*(e+200)/(e+20)-80,r=(0,_t.roundToPrecision)(i,3);return r<0?"0":Math.min(80,r)+"ms"}),this._totalSteps=I(()=>(this.max()-this.min())/this.step()),this.valueChange=se();this.noTooltip=h(this._DEFAULTS.noTooltip,{transform:e=>k(e)}),this.tooltipFormatFn=h(this._DEFAULTS.formatTooltipFn),this.tooltipTemplate=Be(Ys),this.tooltipPosition=h(ca.Top),this.tooltipBehavior=h(ll.Auto);this._grabbedHandleId=S(null),this._shouldCheckForMovement=!1,this._bodyHasClass=!1,this.isSliderHandleGrabbed=I(()=>!!this._grabbedHandleId()),this.grabbedHandleEffect=he(()=>{this.isSliderHandleGrabbed()?this.renderer.addClass(this.document.body,"ard-body-slider-handle-grabbed"):this.renderer.removeClass(this.document.body,"ard-body-slider-handle-grabbed")}),this.handlePositionsPercent=I(()=>[this._handlePositions()[0]*100+"%",this._handlePositions()[1]*100+"%"])}set value(e){this.writeValue(e)}get value(){return this._value()}_offset(e,i,r=1){let l=this._stepSizeComputed()*(i?this.shiftMultiplier():1),c=this._handlePositions()[r-1]+l*e;c=this._clampPercentValue(c),this._setValueFromPercent(c)}_clampValue(e){return e=Math.min(e,this.max()),e=Math.max(e,this.min()),e-=this.min(),e=(0,_t.roundToMultiple)(e,this.step()),e+=this.min(),e}_valueToPercent(e){let i=Math.abs(this.min()-this.max());return(e-this.min())/i}_emitChange(){let e=this.value;this._onChangeRegistered?.(e),this.valueChange.emit(e)}onPointerDownOnHandle(e,i=1){this._grabbedHandleId.set(i),this._shouldCheckForMovement=!0,this._bodyHasClass||(this._bodyHasClass=!0,this.renderer.addClass(this.document.body,"ard-prevent-touch-actions"))}onPointerUp(){this._shouldCheckForMovement&&(this._grabbedHandleId.set(null),this._shouldCheckForMovement=!1,this._bodyHasClass&&(this._bodyHasClass=!1,this.renderer.removeClass(this.document.body,"ard-prevent-touch-actions")))}_setValueFromPercent(e,i=1){i&&this._handlePositions()[i-1]!==e&&(this._value.set(this._percentValueToValue(e,i)),this._emitChange())}_writeValueFromEvent(e,i){let r=this._getPercentValueFromEvent(e);this._setValueFromPercent(r,i)}_getElementRect(){return this.elementRef().nativeElement.getBoundingClientRect()}_clampPercentValue(e){return e=Math.min(e,1),e=Math.max(e,0),e=(0,_t.roundToMultiple)(e,this._stepSizeComputed()),e}_getPercentValueFromEvent(e){let i=this._getElementRect(),r;e instanceof MouseEvent?r=e.clientX:r=e.targetTouches[0].clientX;let l=(r-i.left)/i.width;return this._clampPercentValue(l)}onKeyPress(e){switch(e.code){case"ArrowLeft":case"ArrowDown":{this._decrement(e);return}case"ArrowRight":case"ArrowUp":{this._increment(e);return}case"PageDown":{this._decrement(e,!0);return}case"PageUp":{this._increment(e,!0);return}case"Home":{this._decrement(e,!0);return}case"End":{this._increment(e,!0);return}}}_decrement(e,i=!1){this._offset(-1,i||e.shiftKey)}_increment(e,i=!1){this._offset(1,i||e.shiftKey)}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=Me(t)))(r||t)}})()}static{this.\u0275dir=Y({type:t,contentQueries:function(i,r,l){i&1&&xe(l,r.tooltipTemplate,Ys,5),i&2&&de()},viewQuery:function(i,r){i&1&&Fe(r.elementRef,rp,5),i&2&&de()},hostBindings:function(i,r){i&1&&_("pointerup",function(){return r.onPointerUp()},!1,at)("touchend",function(){return r.onPointerUp()},!1,at)("keydown",function(c){return r.onKeyPress(c)})},inputs:{min:[1,"min"],max:[1,"max"],step:[1,"step"],shiftMultiplier:[1,"shiftMultiplier"],showValueTicks:[1,"showValueTicks"],labelPosition:[1,"labelPosition"],labels:[1,"labels"],color:[1,"color"],compact:[1,"compact"],value:"value",noTooltip:[1,"noTooltip"],tooltipFormatFn:[1,"tooltipFormatFn"],tooltipPosition:[1,"tooltipPosition"],tooltipBehavior:[1,"tooltipBehavior"]},outputs:{valueChange:"valueChange"},features:[re]})}}return t})(),yh=C({},vh),cl=new P("ard-slider-defaults",{factory:()=>C({},yh)});var Yn=(()=>{class t extends dl{constructor(e){super(e),this.componentId="106",this.componentName="range-slider",this._value=S({from:-Number.MIN_SAFE_INTEGER,to:Number.MIN_SAFE_INTEGER}),this.selectionBehavior=h(this._DEFAULTS.selectionBehavior),this.minimumDistance=h(this._DEFAULTS.minimumDistance,{transform:i=>Ne(i,this._DEFAULTS.minimumDistance)});this._tooltipValue=I(()=>{let i=this._value(),r=this.tooltipFormatFn();return{from:String(r(i.from)),to:String(r(i.to))}}),this.tooltipContexts=I(()=>({from:{value:this._tooltipValue().from,$implicit:this._tooltipValue().from},to:{value:this._tooltipValue().to,$implicit:this._tooltipValue().to}}));this.trackOverlayLeft=I(()=>Math.min(...this._handlePositions())*100+"%"),this.trackOverlayWidth=I(()=>Math.abs(this._handlePositions()[0]-this._handlePositions()[1])*100+"%"),this._handlePositions=I(()=>{let i=Math.abs(this.min()-this.max()),r=this._value(),l=(r.from-this.min())/i,c=(r.to-this.min())/i;return[l,c]});this.currentHandle=S(null)}_isValidObject(e){return ao(e)&&Vi(e.from)&&Vi(e.to)}_isValidTuple(e){return Array.isArray(e)&&Vi(e[0])&&Vi(e[1])&&e.length===2}_normalizeSliderRange(e){return e.from<=e.to?e:{from:e.to,to:e.from}}writeValue(e){if(!this._isValidObject(e)&&!this._isValidTuple(e)){this.reset();return}let i=-Number.MIN_SAFE_INTEGER,r=Number.MIN_SAFE_INTEGER;this._isValidObject(e)?(i=e.from,r=e.to):this._isValidTuple(e)&&(i=e[0],r=e[1]);let l=this._clampValue(i),c=this._clampValue(r),u=this._normalizeSliderRange({from:l,to:c});u.from===this.value.from&&u.to===this.value.to||this._value.set(u)}get value(){return this._normalizeSliderRange(this._value())}set value(e){this.writeValue(e)}cleanupValueAfterMinMaxStepChange(){let e=this._value();this.writeValue(e);let i=this._value();(e.from!==i.from||e.to!==i.to)&&this._emitChange()}reset(){this._value.set({from:-this.min(),to:this.max()})}onTrackHitboxPointerDown(e){this._writeValueFromEvent(e),this.onPointerDownOnHandle(e)}onPointerMove(e){this._shouldCheckForMovement&&(this._bodyHasClass||(this._bodyHasClass=!0,this.renderer.addClass(this.document.body,"ard-prevent-touch-actions")),this._writeValueFromEvent(e,this._grabbedHandleId()))}_percentValueToValue(e,i){let r=Math.abs(this.min()-this.max()),l=e*r+this.min();l=(0,_t.roundToPrecision)(l,9);let c=this.step()*this.minimumDistance(),u=this._value(),A={from:u.from,to:u.to};return i===1?(l>=u.to-c&&(this.selectionBehavior()===Gt.Block?l=u.to-c:this.selectionBehavior()===Gt.Push&&(A.to=l+c)),A.from=l):(l<=u.from+c&&(this.selectionBehavior()===Gt.Block?l=u.from+c:this.selectionBehavior()===Gt.Push&&(A.from=l-c)),A.to=l),A}onHandleFocus(e,i){this.onFocus(e),this.currentHandle.set(i)}onBlur(e){super.onBlur(e),this.currentHandle.set(null)}static{this.\u0275fac=function(i){return new(i||t)(H(cl))}}static{this.\u0275cmp=m({type:t,selectors:[["ard-range-slider"]],hostBindings:function(i,r){i&1&&_("mousemove",function(c){return r.onPointerMove(c)},!1,at)("touchmove",function(c){return r.onPointerMove(c)},!1,at)},inputs:{selectionBehavior:[1,"selectionBehavior"],minimumDistance:[1,"minimumDistance"]},standalone:!1,features:[re],decls:21,vars:30,consts:[["track",""],["focusableElement",""],["handleThumbBase",""],["defaultTooltipTemplate",""],[1,"ard-range-slider-container-master",3,"ngClass"],[1,"ard-slider-container"],[1,"ard-slider-track",3,"pointerdown"],[1,"ard-hitbox"],[1,"ard-slider-track-overlay","ard-slider-track-inactive"],[1,"ard-slider-track-overlay","ard-slider-track-active"],[1,"ard-value-tick-container"],["type","button",1,"ard-slider-handle",3,"pointerdown","focus","blur","tabindex"],[1,"ard-focus-overlay"],[1,"ard-slider-tooltip-wrapper",3,"ard-tooltip-always","style"],[1,"ard-slider-label-container"],[1,"ard-value-tick",3,"style"],[1,"ard-value-tick"],[1,"ard-slider-tooltip-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ard-slider-tooltip"],[1,"ard-slider-label",3,"style"],[1,"ard-slider-label"],[1,"ard-slide-thumb"]],template:function(i,r){if(i&1){let l=W();o(0,"div",4)(1,"div",5)(2,"div",6,0),_("pointerdown",function(u){return T(l),D(r.onTrackHitboxPointerDown(u))}),b(4,"div",7)(5,"div",8)(6,"div",9),g(7,sp,3,0,"div",10),a(),o(8,"button",11,1),_("pointerdown",function(u){return T(l),D(r.onPointerDownOnHandle(u,1))})("focus",function(u){return T(l),D(r.onHandleFocus(u,1))})("blur",function(u){return T(l),D(r.onBlur(u))}),b(10,"div",12)(11,"div",7),a(),g(12,cp,4,8,"div",13),o(13,"button",11,1),_("pointerdown",function(u){return T(l),D(r.onPointerDownOnHandle(u,2))})("focus",function(u){return T(l),D(r.onHandleFocus(u,2))})("blur",function(u){return T(l),D(r.onBlur(u))}),b(15,"div",12)(16,"div",7),a(),g(17,mp,4,8,"div",13),a(),g(18,fp,3,0,"div",14),a(),g(19,gp,1,0,"ng-template",null,2,ae)}i&2&&(ye(ge(21,qs,r.sliderTransition())),J("ard-slider-handle-grabbed",r.isSliderHandleGrabbed()),p("ngClass",r.ngClasses()),d(6),ye(Ie(23,ap,r.trackOverlayLeft(),r.trackOverlayWidth())),d(),y(r.showValueTicks()?7:-1),d(),ye(ge(26,ut,r.handlePositionsPercent()[0])),J("ard-grabbed",r.isSliderHandleGrabbed()&&r.currentHandle()===1),p("tabindex",r.tabIndex()),d(4),y(r.tooltipBehavior()!=="never"?12:-1),d(),ye(ge(28,ut,r.handlePositionsPercent()[1])),J("ard-grabbed",r.isSliderHandleGrabbed()&&r.currentHandle()===2),p("tabindex",r.tabIndex()),d(4),y(r.tooltipBehavior()!=="never"?17:-1),d(),y(r.labelObjects().length>0?18:-1))},dependencies:[ze,Oe],styles:[`body.ard-prevent-touch-actions,body.ard-prevent-touch-actions *{touch-action:none}ard-range-slider{display:block}.ard-range-slider-container-master{display:flex;flex-direction:column}.ard-range-slider-container-master.ard-labels-top{flex-direction:column-reverse}.ard-range-slider-container-master .ard-slider-tooltip-wrapper{position:absolute;transform:translate(-50%);pointer-events:none}.ard-range-slider-container-master.ard-tooltip-top .ard-slider-tooltip-wrapper{bottom:100%}.ard-range-slider-container-master.ard-tooltip-bottom .ard-slider-tooltip-wrapper{top:100%}.ard-range-slider-container-master .ard-slider-handle{position:absolute;left:0;transform:translate(-50%)}.ard-range-slider-container-master .ard-slider-tooltip,.ard-range-slider-container-master .ard-slider-track,.ard-range-slider-container-master .ard-value-tick-container{position:relative}.ard-range-slider-container-master .ard-value-tick{position:absolute}.ard-range-slider-container-master .ard-slider-label-container{position:relative;width:100%;height:1em}.ard-range-slider-container-master .ard-slider-label{position:absolute;line-height:1em}
`],encapsulation:2,changeDetection:0})}}return t})(),$n=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[te]})}}return t})(),hi=(()=>{class t extends dl{constructor(e){super(e),this.componentId="105",this.componentName="slider";this._value=S(0);this._tooltipValue=I(()=>{let i=this._value(),r=this.tooltipFormatFn();return String(r?.(i)??i)}),this.tooltipContext=I(()=>({value:this._tooltipValue(),$implicit:this._tooltipValue()})),this._handlePositions=I(()=>{let i=Math.abs(this.min()-this.max()),r=(this._value()-this.min())/i;return[r,r]})}writeValue(e){if(e=Number(e),isNaN(e)){this.reset();return}e=this._clampValue(e),this._value.set(e)}cleanupValueAfterMinMaxStepChange(){let e=this._value();this.writeValue(this._value());let i=this._value();e!==i&&this._emitChange()}reset(){this._value.set(0)}increment(e=1){this._offset(e,!1)}decrement(e=1){this._offset(-e,!1)}onTrackHitboxPointerDown(e){this._writeValueFromEvent(e),this.onPointerDownOnHandle(e)}onPointerMove(e){this._shouldCheckForMovement&&this._writeValueFromEvent(e)}_percentValueToValue(e){let i=Math.abs(this.min()-this.max()),r=e*i+this.min();return(0,_t.roundToPrecision)(r,9)}static{this.\u0275fac=function(i){return new(i||t)(H(cl))}}static{this.\u0275cmp=m({type:t,selectors:[["ard-slider"]],hostBindings:function(i,r){i&1&&_("mousemove",function(c){return r.onPointerMove(c)},!1,at)("touchmove",function(c){return r.onPointerMove(c)},!1,at)},standalone:!1,features:[ke([{provide:ct,useExisting:Ze(()=>t),multi:!0}]),re],decls:14,vars:21,consts:[["track",""],["focusableElement",""],["defaultTooltipTemplate",""],[1,"ard-slider-container-master",3,"ngClass"],[1,"ard-slider-container"],[1,"ard-slider-track",3,"pointerdown"],[1,"ard-hitbox"],[1,"ard-slider-track-overlay","ard-slider-track-inactive"],[1,"ard-slider-track-overlay","ard-slider-track-active"],[1,"ard-value-tick-container"],["type","button",1,"ard-slider-handle",3,"pointerdown","touchstart","focus","blur","tabindex"],[1,"ard-focus-overlay"],[1,"ard-slider-tooltip-wrapper",3,"ard-tooltip-always","style"],[1,"ard-slider-label-container"],[1,"ard-value-tick",3,"style"],[1,"ard-value-tick"],[1,"ard-slider-tooltip-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ard-slider-tooltip"],[1,"ard-slider-label",3,"style"],[1,"ard-slider-label"]],template:function(i,r){if(i&1){let l=W();o(0,"div",3)(1,"div",4)(2,"div",5,0),_("pointerdown",function(u){return T(l),D(r.onTrackHitboxPointerDown(u))}),b(4,"div",6)(5,"div",7)(6,"div",8),g(7,yp,3,0,"div",9),a(),o(8,"button",10,1),_("pointerdown",function(u){return T(l),D(r.onPointerDownOnHandle(u))})("touchstart",function(u){return T(l),D(r.onPointerDownOnHandle(u))})("focus",function(u){return T(l),D(r.onFocus(u))})("blur",function(u){return T(l),D(r.onBlur(u))}),b(10,"div",11)(11,"div",6),a(),g(12,xp,4,8,"div",12),a(),g(13,Tp,3,0,"div",13),a()}i&2&&(ye(ge(15,qs,r.sliderTransition())),J("ard-slider-handle-grabbed",r.isSliderHandleGrabbed()),p("ngClass",r.ngClasses()),d(6),ye(ge(17,_p,r.handlePositionsPercent()[0])),d(),y(r.showValueTicks()?7:-1),d(),ye(ge(19,ut,r.handlePositionsPercent()[0])),J("ard-grabbed",r.isSliderHandleGrabbed()),p("tabindex",r.tabIndex()),d(4),y(r.tooltipBehavior()!=="never"?12:-1),d(),y(r.labelObjects().length>0?13:-1))},dependencies:[ze,Oe],styles:[`body.ard-prevent-touch-actions,body.ard-prevent-touch-actions *{touch-action:none}ard-slider{display:block}.ard-slider-container-master{display:flex;flex-direction:column}.ard-slider-container-master.ard-labels-top{flex-direction:column-reverse}.ard-slider-container-master .ard-slider-tooltip-wrapper{position:absolute;transform:translate(-50%);pointer-events:none}.ard-slider-container-master.ard-tooltip-top .ard-slider-tooltip-wrapper{bottom:100%}.ard-slider-container-master.ard-tooltip-bottom .ard-slider-tooltip-wrapper{top:100%}.ard-slider-container-master .ard-slider-handle{position:absolute;left:0;transform:translate(-50%)}.ard-slider-container-master .ard-slider-tooltip,.ard-slider-container-master .ard-slider-track,.ard-slider-container-master .ard-value-tick-container{position:relative}.ard-slider-container-master .ard-value-tick{position:absolute}.ard-slider-container-master .ard-slider-label-container{position:relative;width:100%;height:1em}.ard-slider-container-master .ard-slider-label{position:absolute;line-height:1em}.ard-disabled .ard-slider-container-master,.ard-disabled .ard-range-slider-container-master{pointer-events:none;opacity:60%}
`],encapsulation:2,changeDetection:0})}}return t})(),fi=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[te,jo]})}}return t})(),Ch={None:"none",Half:"half",Filled:"filled"},Wn=L(C({},vt),{Gold:"gold"}),bh=L(C({},qe),{color:Wn.Gold,max:5}),X1=new P("ard-rating-input-defaults",{factory:()=>C({},bh)});var ul={Noop:"noop",Default:"default"},xh=L(C({},Un),{clickStrategy:ul.Default,color:Wn.Gold}),Z1=new P("ard-star-button-defaults",{factory:()=>C({},xh)});var wh={color:Wn.Gold,filled:Ch.None},J1=new P("ard-star-defaults",{factory:()=>C({},wh)});var Th=L(C({},Gi),{clickStrategy:ul.Default,states:[{value:!1,color:"none"},{value:!0,color:"secondary",icon:"check_box",filled:!0}]}),eb=new P("ard-statebox-defaults",{factory:()=>C({},Th)});var Dh={LeftClumped:"left-clumped",LeftSplit:"left-split",RightSplit:"right-split",RightClumped:"right-clumped"},Sh=L(C({},Gi),{valueFrom:"value",labelFrom:"label",disabledFrom:"disabled",compareWith:null,invertDisabled:!1,maxSelectedItems:1/0,color:we.Primary,align:Dh.LeftClumped,compact:!1}),tb=new P("ard-checkbox-list-defaults",{factory:()=>C({},Sh)});var Eh={Small:"small",Medium:"medium",Large:"large"},Ah={AboveBefore:"above-before",AboveAfter:"above-after",BelowBefore:"below-before",BelowAfter:"below-after",Before:"before",After:"after",Above:"above",Below:"below"},Fh={color:we.Primary,variant:He.Rounded,size:Eh.Medium,position:Ah.AboveAfter,overlap:!1},ib=new P("ard-badge-defaults",{factory:()=>C({},Fh)});var Ih={Default:"default",Auto:"auto"};var Mh={Sharp:"sharp",Pill:"pill"},pl={Determinate:"determinate",Indeterminate:"indeterminate",Buffer:"buffer",Query:"query"},kh={value:0,bufferValue:0,color:vt.Primary,variant:Mh.Pill,size:Ih.Default,mode:pl.Determinate,hideValue:!1},nb=new P("ard-progress-bar-defaults",{factory:()=>C({},kh)});var Ph={Transparent:"transparent",Colorless:"colorless",Colored:"colored"},Vh={Full:"full",Ring:"ring"},Oh={value:0,max:100,color:vt.Primary,appearance:Ph.Transparent,variant:Vh.Full,hideValue:!1,reverse:!1},rb=new P("ard-progress-circle-defaults",{factory:()=>C({},Oh)});var Rh={color:vt.Primary},Lh=new P("ard-spinner-defaults",{factory:()=>C({},Rh)});var zn=(()=>{class t{constructor(){this._DEFAULTS=F(Lh);this.color=h(this._DEFAULTS.color),this.ngClasses=I(()=>[`ard-color-${this.color()}`].join(" "))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["ard-spinner"]],inputs:{color:[1,"color"]},standalone:!1,decls:2,vars:1,consts:[["viewBox","0 0 100 100","xmlns","http://www.w3.org/2000/svg",1,"ard-spinner",3,"ngClass"],["cx","50","cy","50","r","20",1,"ard-spinner-circle"]],template:function(i,r){i&1&&(ln(),o(0,"svg",0),b(1,"circle",1),a()),i&2&&p("ngClass",r.ngClasses())},dependencies:[ze],styles:[`.ard-spinner{animation:rotator var(--ard-_spinner-duration) linear infinite;pointer-events:none}@keyframes rotator{to{transform:rotate(360deg)}}.ard-spinner-circle{stroke-dasharray:1,200;stroke-dashoffset:0;animation:dash var(--ard-_spinner-duration) ease-in-out infinite 0s;stroke-linecap:round;fill:none;stroke-width:3}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:75,200;stroke-dashoffset:-35}to{stroke-dasharray:75,200;stroke-dashoffset:-124}}
`],encapsulation:2,changeDetection:0})}}return t})(),Kn=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[te]})}}return t})(),ua=(()=>{class t{constructor(){this.left=h(!1,{transform:e=>k(e)}),this.right=h(!1,{transform:e=>k(e)}),he(()=>{this.left()&&this.right()&&console.error("ARD-NF5140: Cannot align a form field error to both left and right.")})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=Y({type:t,selectors:[["","ard-error",""]],hostVars:8,hostBindings:function(i,r){i&2&&J("ard-error",!0)("ard-error-default",!r.left()&&!r.right())("ard-error-left",r.left()&&!r.right())("ard-error-right",!r.left()&&r.right())},inputs:{left:[1,"left"],right:[1,"right"]}})}}return t})(),qn=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["ard-error"]],standalone:!1,features:[pn([ua])],ngContentSelectors:Pe,decls:1,vars:0,template:function(i,r){i&1&&($(),R(0))},encapsulation:2})}}return t})();var Bh={defaultHintAlign:Xi.Left,reserveHintLine:!1,labelRequiredText:"*",labelOptionalText:"(optional)"},ml=new P("ard-form-field-defaults",{factory:()=>C({},Bh)});var pa=(()=>{class t{constructor(){this.left=h(!1,{transform:e=>k(e)}),this.right=h(!1,{transform:e=>k(e)}),he(()=>{this.left()&&this.right()&&console.error("ARD-NF5150: Cannot align a form field hint-error to both left and right.")})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=Y({type:t,selectors:[["","ard-hint-error",""]],hostVars:18,hostBindings:function(i,r){i&2&&J("ard-hint-error",!0)("ard-hint",!0)("ard-error-default",!r.left()&&!r.right())("ard-error-left",r.left()&&!r.right())("ard-error-right",!r.left()&&r.right())("ard-error",!0)("ard-hint-default",!r.left()&&!r.right())("ard-hint-left",r.left()&&!r.right())("ard-hint-right",!r.left()&&r.right())},inputs:{left:[1,"left"],right:[1,"right"]}})}}return t})(),ma=(()=>{class t{constructor(){this.left=h(!1,{transform:e=>k(e)}),this.right=h(!1,{transform:e=>k(e)}),he(()=>{this.left()&&this.right()&&console.error("ARD-NF5130: Cannot align a form field hint to both left and right.")})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=Y({type:t,selectors:[["","ard-hint",""]],hostVars:8,hostBindings:function(i,r){i&2&&J("ard-hint",!0)("ard-hint-default",!r.left()&&!r.right())("ard-hint-left",r.left()&&!r.right())("ard-hint-right",!r.left()&&r.right())},inputs:{left:[1,"left"],right:[1,"right"]}})}}return t})(),Ot=(()=>{class t{constructor(){this._DEFAULTS=F(ml),this.required=h(!1,{transform:e=>k(e)}),this.optional=h(!1,{transform:e=>k(e)}),this.requiredText=h(this._DEFAULTS.labelRequiredText),this.optionalText=h(this._DEFAULTS.labelOptionalText),he(()=>{this.required()&&this.optional()&&console.error("ARD-NF5120: Cannot set a form field label to be both required and optional.")})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["ard-label"]],hostVars:2,hostBindings:function(i,r){i&2&&J("ard-label",!0)},inputs:{required:[1,"required"],optional:[1,"optional"],requiredText:[1,"requiredText"],optionalText:[1,"optionalText"]},standalone:!1,ngContentSelectors:Pe,decls:5,vars:5,consts:[[1,"ard-label__text"],[1,"ard-label__required-optional-text"]],template:function(i,r){i&1&&($(),o(0,"div",0),R(1),o(2,"span",1),g(3,Dp,1,1)(4,Sp,1,1),a()()),i&2&&(J("ard-label__required",r.required())("ard-label__optional",r.optional()),d(3),y(r.required()&&!r.optional()?3:r.optional()&&!r.required()?4:-1))},encapsulation:2})}}return t})(),Hh=(()=>{class t{constructor(){this._DEFAULTS=F(ml),this.defaultHintAlign=h(this._DEFAULTS.defaultHintAlign),this.alignHintToLeftByDefault=I(()=>this.defaultHintAlign()===Xi.Left),this.control=Be(On),this.label=Be(Ot),this.hints=Jt(ma),this.errors=Jt(ua),this.hintErrors=Jt(pa),this.hasAnyHint=I(()=>this.hints().length>0||this.hintErrors().length>0),this.hasAnyError=I(()=>this.errors().length>0),this.reserveHintLine=h(this._DEFAULTS.reserveHintLine,{transform:e=>k(e)})}get controlHasError(){let e=this.control()?.hasError;return Oi(e)?e():e}get controlIsSuccess(){let e=this.control()?.isSuccess;return Oi(e)?e():e}get controlDisabled(){let e=this.control()?.disabled;return Oi(e)?e():e}get controlHtmlId(){let e=this.control()?.htmlId;return Oi(e)?e():e}ngOnInit(){if(!this.control())throw new Error("ARD-FT5110: Form field component requires any control (input) to be present within the element. Found none.")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=Y({type:t,contentQueries:function(i,r,l){i&1&&(xe(l,r.control,On,5),xe(l,r.label,Ot,5),xe(l,r.hints,ma,4),xe(l,r.errors,ua,4),xe(l,r.hintErrors,pa,4)),i&2&&de(5)},inputs:{defaultHintAlign:[1,"defaultHintAlign"],reserveHintLine:[1,"reserveHintLine"]}})}}return t})(),gi=(()=>{class t extends Hh{static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=Me(t)))(r||t)}})()}static{this.\u0275cmp=m({type:t,selectors:[["ard-form-field"]],standalone:!1,features:[re],ngContentSelectors:Ap,decls:18,vars:14,consts:[["defaultHints",""],["defaultErrors",""],["defaultHintErrors",""],["leftHintErrors",""],["rightHintErrors",""],[1,"ard-form-field"],[1,"ard-form-field__label"],[1,"ard-form-field__input"],[1,"ard-form-field__hints"],[1,"ard-form-field__errors-left"],[1,"ard-form-field__default-error"],[3,"ngTemplateOutlet"],[1,"ard-form-field__errors-right"],[1,"ard-form-field__hints-left"],[1,"ard-form-field__default-hint"],[1,"ard-form-field__hints-right"]],template:function(i,r){i&1&&($(Ep),o(0,"div",5)(1,"label",6),R(2),a(),o(3,"div",7),R(4,1),a(),o(5,"div",8),g(6,Lp,8,4)(7,zp,8,4),a()(),g(8,Kp,1,0,"ng-template",null,0,ae)(10,qp,1,0,"ng-template",null,1,ae)(12,Qp,1,0,"ng-template",null,2,ae)(14,Gp,1,0,"ng-template",null,3,ae)(16,Xp,1,0,"ng-template",null,4,ae)),i&2&&(J("ard-form-field__with-error",r.controlHasError)("ard-form-field__is-success",r.controlIsSuccess)("ard-form-field__control-disabled",r.controlDisabled),d(),We("for",r.controlHtmlId),d(4),J("ard-form-field__errors",r.hasAnyError())("ard-form-field__reserve-hint-line",r.reserveHintLine()||r.hasAnyHint())("ard-form-field__hints-default-left",r.alignHintToLeftByDefault()),d(),y(r.hasAnyError()?6:7))},dependencies:[Oe],styles:[`:host{display:block}.ard-horizontal-form-field{display:flex}.ard-form-field__hints,.ard-form-field__errors{display:flex;justify-content:space-between}.ard-form-field__hints>*,.ard-form-field__errors>*{display:flex;flex-direction:column}.ard-form-field__hints .ard-form-field__hints-left .ard-form-field__default-hint,.ard-form-field__hints .ard-form-field__errors-left .ard-form-field__default-error,.ard-form-field__errors .ard-form-field__hints-left .ard-form-field__default-hint,.ard-form-field__errors .ard-form-field__errors-left .ard-form-field__default-error{display:none}.ard-form-field__hints.ard-form-field__hints-default-left .ard-form-field__hints-left .ard-form-field__default-hint,.ard-form-field__hints.ard-form-field__hints-default-left .ard-form-field__errors-left .ard-form-field__default-error,.ard-form-field__errors.ard-form-field__hints-default-left .ard-form-field__hints-left .ard-form-field__default-hint,.ard-form-field__errors.ard-form-field__hints-default-left .ard-form-field__errors-left .ard-form-field__default-error{display:flex;flex-direction:column}.ard-form-field__hints.ard-form-field__hints-default-left .ard-form-field__hints-right .ard-form-field__default-hint,.ard-form-field__hints.ard-form-field__hints-default-left .ard-form-field__errors-right .ard-form-field__default-error,.ard-form-field__errors.ard-form-field__hints-default-left .ard-form-field__hints-right .ard-form-field__default-hint,.ard-form-field__errors.ard-form-field__hints-default-left .ard-form-field__errors-right .ard-form-field__default-error{display:none}
`],encapsulation:2,changeDetection:0})}}return t})(),hl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["ard-hint-error"]],standalone:!1,features:[pn([{directive:pa,inputs:["left","left","right","right"]}])],ngContentSelectors:Pe,decls:1,vars:0,template:function(i,r){i&1&&($(),R(0))},encapsulation:2})}}return t})(),fl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["ard-hint"]],standalone:!1,features:[pn([{directive:ma,inputs:["left","left","right","right"]}])],ngContentSelectors:Pe,decls:1,vars:0,template:function(i,r){i&1&&($(),R(0))},encapsulation:2})}}return t})();var _i=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[te]})}}return t})(),Uh={full:!1,appearance:Ve.Outlined},ya=new P("ard-kbd-defaults",{factory:()=>C({},Uh)});var Nh=(()=>{class t{constructor(){this._DEFAULTS=F(ya)}transform(e,i=!this._DEFAULTS.full){return Ds(e,i)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275pipe=ur({name:"kbd",type:t,pure:!0,standalone:!1})}}return t})(),Ge=(()=>{class t{constructor(){this._DEFAULTS=F(ya),this.contentWrapper=Ae("contentWrapperEl"),this.key=h(""),this.full=h(!1,{transform:e=>k(e)});this.appearance=h(Ve.Filled),this.ngClasses=I(()=>[`ard-appearance-${this.appearance()}`].join(" "))}ngAfterViewInit(){if(!this.key()&&!this.contentWrapper().nativeElement.innerText)throw new Error("ARD-FT5030: Using <ard-kbd> without specifying the [key] field is not allowed.")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["ard-kbd"]],viewQuery:function(i,r){i&1&&Fe(r.contentWrapper,fa,5),i&2&&de()},inputs:{key:[1,"key"],full:[1,"full"],appearance:[1,"appearance"]},standalone:!1,ngContentSelectors:Pe,decls:6,vars:5,consts:[["contentWrapperEl",""],[1,"ard-kbd",3,"ngClass"],[1,"ard-kbd-content-wrapper"]],template:function(i,r){if(i&1&&($(),o(0,"kbd",1),s(1),et(2,"kbd"),a(),o(3,"div",2,0),R(5),a()),i&2){let l;p("ngClass",r.ngClasses()),d(),w(" ",ki(2,2,r.key()||((l=r.contentWrapper())==null||l.nativeElement==null?null:l.nativeElement.innerText)||"",!r.full()),`
`)}},dependencies:[ze,Nh],styles:[`.ard-kbd-content-wrapper{display:none}.ard-kbd{display:inline-block}
`],encapsulation:2,changeDetection:0})}}return t})(),gl=(()=>{class t{constructor(){this.elementRef=F(pe),this.renderer=F(ot);this.appearance=h(Ve.Filled,{alias:"ardKbdAppearance"}),this.ngClasses=I(()=>["ard-kbd",`ard-appearance-${this.appearance()}`]),he(()=>{let e=this.ngClasses();this.updateClasses(e)})}updateClasses(e){let i=this.elementRef.nativeElement;i.className.split(" ").filter(l=>l.startsWith("ard-appearance-")).forEach(l=>this.renderer.removeClass(i,l)),e.forEach(l=>{this.renderer.addClass(i,l)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=Y({type:t,selectors:[["","ardKbd",""]],inputs:{appearance:[1,"ardKbdAppearance","appearance"]},standalone:!1})}}return t})(),De=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[te]})}}return t})(),jh=new P("ard-kbd-shortcut-defaults",{factory:()=>({})});var vi=(()=>{class t{constructor(){this._KBD_DEFAULTS=F(ya),this._DEFAULTS=F(jh),this.contentWrapper=Ae("contentWrapperEl"),this.splitRegex=/[+, ]/,this.keys=h(void 0,{transform:e=>xr(e,this.splitRegex)}),this.full=h(this._DEFAULTS.full??this._KBD_DEFAULTS.full,{transform:e=>k(e)});this.appearance=h(this._DEFAULTS.appearance??this._KBD_DEFAULTS.appearance),this.ngClasses=I(()=>[`ard-appearance-${this.appearance}`].join(" "))}ngAfterViewInit(){if(!this.keys()&&!this.contentWrapper()?.nativeElement.innerText)throw new Error("ARD-FT5040: Using <ard-kbd-shortcut> without specifying the [keys] field is not allowed.")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["ard-kbd-shortcut"]],viewQuery:function(i,r){i&1&&Fe(r.contentWrapper,fa,5),i&2&&de()},inputs:{keys:[1,"keys"],full:[1,"full"],appearance:[1,"appearance"]},standalone:!1,ngContentSelectors:Pe,decls:6,vars:1,consts:[["contentWrapperEl",""],[1,"ard-kbd-shortcut",3,"ngClass"],[1,"ard-kbd-shortcut-content-wrapper"],[3,"appearance","full","key"]],template:function(i,r){if(i&1&&($(),o(0,"div",1),U(1,Jp,2,4,null,null,X),a(),o(3,"div",2,0),R(5),a()),i&2){let l;p("ngClass",r.ngClasses()),d(),N((l=r.keys())!==null&&l!==void 0?l:(l=r.contentWrapper())==null||l.nativeElement==null||l.nativeElement.innerText==null?null:l.nativeElement.innerText.split(r.splitRegex))}},dependencies:[ze,Ge],styles:[`.ard-kbd-shortcut{display:inline}.ard-kbd-shortcut-content-wrapper{display:none}
`],encapsulation:2,changeDetection:0})}}return t})(),yi=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[te,De]})}}return t})(),Yh={color:Wn.Gold,max:5,value:0},ab=new P("ard-rating-display-defaults",{factory:()=>C({},Yh)});var $h={Strong:"strong",Light:"light",Colorless:"colorless"},Wh={Rounded:"rounded",Sharp:"sharp"},zh={Noop:"noop",Slice:"slice"},$s={TopLeft:"top-left",TopCenter:"top-center",TopRight:"top-right",CenterLeft:"center-left",Center:"center-center",CenterRight:"center-right",BottomLeft:"bottom-left",BottomCenter:"bottom-center",BottomRight:"bottom-right"};var _l={Left:"left",Center:"center",Right:"right",Split:"split"},Kh=L(C({},Rt),{options:[10,25,50],itemsPerPage:50,page:1,color:we.None,align:_l.Split,compact:!1,useFirstLastButtons:!1,itemsPerPageText:"Items per page:",currentItemsFormatFn:({currentItemsFrom:t,currentItemsTo:n,totalItems:e})=>`${t} \u2013 ${n} of ${e}`}),ob=new P("ard-table-pagination-defaults",{factory:()=>C({},Kh)});var vl=L(C({},Rt),{rowDisabledFrom:"disabled",rowBoldFrom:"bold",invertRowDisabled:!1,invertRowBold:!1,selectableRows:!1,maxSelectedItems:void 0,clickableRows:!1,caption:void 0,isLoading:!1,loadingProgress:0,loadingProgressBuffer:0,loadingBarMode:pl.Determinate,loadingBarColor:we.Secondary,appearance:$h.Strong,variant:Wh.Rounded,color:we.Primary,align:$s.CenterLeft,headerAlign:$s.CenterLeft,compact:!1,zebra:!1,stickyHeader:!1,paginated:!1,paginationStrategy:zh.Noop,paginationOptions:[10,25,50],totalItems:void 0,paginationColor:we.None,paginationAlign:_l.Split,itemsPerPageText:"Items per page:",currentItemsFormatFn:({currentItemsFrom:t,currentItemsTo:n,totalItems:e})=>`${t} \u2013 ${n} of ${e}`,pageFillRemaining:!1,paginationDisabled:!1,useFirstLastButtons:!1,itemsPerPage:50,page:1,treatDataSourceAsString:!1}),sb=new P("ard-table-defaults",{factory:()=>C({},vl)});var qh=L(C({},vl),{separator:","}),lb=new P("ard-table-from-csv-defaults",{factory:()=>C({},qh)});var Qh={Outlined:"outlined",Raised:"raised"},Gh={Rounded:"rounded",Sharp:"sharp"},Xh={appearance:Qh.Raised,variant:Gh.Rounded,actionButtonsAlign:Hn.Right},Zh=new P("ard-card-defaults",{factory:()=>C({},Xh)});var yl=(()=>{class t{constructor(e,i){e.addClass(i.nativeElement,"ard-card-title")}static{this.\u0275fac=function(i){return new(i||t)(H(ot),H(pe))}}static{this.\u0275dir=Y({type:t,selectors:[["ard-card-title"],["","ard-card-title",""]],standalone:!1})}}return t})();var Cl=(()=>{class t{constructor(e,i){e.addClass(i.nativeElement,"ard-card-content")}static{this.\u0275fac=function(i){return new(i||t)(H(ot),H(pe))}}static{this.\u0275dir=Y({type:t,selectors:[["ard-card-content"],["","ard-card-content",""]],standalone:!1})}}return t})(),bl=(()=>{class t{constructor(e,i){e.addClass(i.nativeElement,"ard-card-image")}static{this.\u0275fac=function(i){return new(i||t)(H(ot),H(pe))}}static{this.\u0275dir=Y({type:t,selectors:[["","ard-card-image",""]],standalone:!1})}}return t})();var Jh=(()=>{class t{constructor(){this._DEFAULTS=F(Zh);this.appearance=h(this._DEFAULTS.appearance),this.variant=h(this._DEFAULTS.variant),this.ngClasses=I(()=>["ard-card",`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`].join(" "))}get _ngClassesHostAttribute(){return this.ngClasses()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=Y({type:t,selectors:[["","ard-card",""]],hostVars:2,hostBindings:function(i,r){i&2&&me(r._ngClassesHostAttribute)},inputs:{appearance:[1,"appearance"],variant:[1,"variant"]},standalone:!1})}}return t})(),xl=(()=>{class t extends Jh{static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=Me(t)))(r||t)}})()}static{this.\u0275cmp=m({type:t,selectors:[["ard-card"]],standalone:!1,features:[re],ngContentSelectors:Pe,decls:1,vars:0,template:function(i,r){i&1&&($(),R(0))},encapsulation:2,changeDetection:0})}}return t})(),wl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[te]})}}return t})(),ef={vertical:!1},db=new P("ard-divider-defaults",{factory:()=>C({},ef)});var tf={tabDisabled:!1,color:we.Primary,stretchTabs:!1,uniformTabWidths:!1,tabAlignment:Hn.Left,tabIndex:0},Tl=new P("ard-tabber-defaults",{factory:()=>C({},tf)});var pt=(()=>{class t{constructor(){this._DEFAULTS=F(Tl),this.disabled=h(this._DEFAULTS.tabDisabled,{transform:e=>k(e)}),this.selected=S(!1),this.focused=S(!1),this._label=h(null,{alias:"label"}),this.label=I(()=>this._label()??this.tabId()),this._isTabIdInitialized=!1,this.tabId=h.required({transform:e=>(this._isTabIdInitialized=!0,e)}),this.focusEvent=se({alias:"focus"}),this.blurEvent=se({alias:"blur"}),this.selectedChange=se(),this.selectedChangeInternal$=new Ee,this._selectedChangeSub=this.selectedChangeInternal$.subscribe(this.selectedChange.emit)}set _selected(e){this.selected.set(k(e))}setSelected(e){this.selected.set(e),this._emitChange()}_emitChange(){this.selectedChangeInternal$.next(this.selected())}ngOnDestroy(){this._selectedChangeSub.unsubscribe(),this.selectedChangeInternal$.complete()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["ard-tab"]],hostAttrs:["role","tabpanel"],hostVars:4,hostBindings:function(i,r){i&2&&J("ard-tab-disabled",r.disabled())("ard-tab-selected",r.selected())},inputs:{disabled:[1,"disabled"],_selected:[0,"selected","_selected"],_label:[1,"label","_label"],tabId:[1,"tabId"]},outputs:{focusEvent:"focus",blurEvent:"blur",selectedChange:"selectedChange"},standalone:!1,ngContentSelectors:Pe,decls:1,vars:0,template:function(i,r){i&1&&($(),R(0))},encapsulation:2,changeDetection:0})}}return t})(),Ln=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(H(Te))}}static{this.\u0275dir=Y({type:t,selectors:[["ng-template","ard-tabber-label-tmp",""]],standalone:!1})}}return t})(),Lt=(()=>{class t{constructor(){this._DEFAULTS=F(Tl),this.tabs=Jt(pt,{descendants:!0}),this.selectedTabId=dt(null,{alias:"selectedTab"}),this.selectedTab=I(()=>this.tabs().find(e=>e.tabId()===this.selectedTabId())??null),this.focusedTabId=S(null),this.focusedTab=I(()=>this.tabs().find(e=>e.tabId()===this.focusedTabId())??null),this._selectedTabIdToCheck=null,this.initialTab=h(void 0),this.focusEvent=se({alias:"focus"}),this.blurEvent=se({alias:"blur"});this.color=h(this._DEFAULTS.color),this.ngClasses=I(()=>[`ard-color-${this.color()}`].join(" "));this.stretchTabs=h(this._DEFAULTS.stretchTabs,{transform:e=>k(e)}),this.uniformTabWidths=h(this._DEFAULTS.uniformTabWidths,{transform:e=>k(e)}),this.tabAlignment=h(this._DEFAULTS.tabAlignment),this.tabContainerClasses=I(()=>[this.uniformTabWidths()&&!this.stretchTabs()?"ard-uniform-tab-widths":"",this.stretchTabs()?"ard-stretch-tabs":"",this.stretchTabs()?"":`ard-tab-align-${this.tabAlignment()}`].join(" "));this.tabIndex=h(0);this.labelTemplate=Be(Ln),this.tabsWithTemplates=I(()=>this.tabs().map(e=>({tab:e,template:typeof e.label()=="string"?null:e.label(),templateContext:typeof e.label()=="string"?{$implicit:e.label(),tabId:e.tabId(),label:e.label()}:null})))}ngOnChanges(e){if(e.selectedTabId){let i=e.selectedTabId.currentValue;if(this.tabs().some(r=>!r._isTabIdInitialized))this._selectedTabIdToCheck=i;else{let r=e.selectedTabId.previousValue;this._validateSelectedTabId(i,r)}}}_validateSelectedTabId(e,i){if(e!==null){let r=this.tabs().find(l=>l._isTabIdInitialized&&l.tabId()===e);if(!r){console.error(`ARD-NF6000: Trying to select a tab with id '${e}' that does not exist.`);return}if(i!==null){let l=this.tabs().find(c=>c._isTabIdInitialized&&c.tabId()===i);l&&this._unselectSpecificTab(l)}this._selectNewTab(r)}}ngAfterContentInit(){let e=null;for(let i of this.tabs())i.selected()&&(e&&i.selected.set(!1),e=i),i.focusEvent.subscribe(()=>{this.focusEvent.emit(i.tabId())}),i.blurEvent.subscribe(()=>{this.blurEvent.emit(i.tabId())}),i.selectedChangeInternal$.subscribe(r=>{if(!r){this.selectedTabId.set(null);return}this.selectTab(i)});this._selectedTabIdToCheck!==null&&(this._validateSelectedTabId(this._selectedTabIdToCheck,null),this._selectedTabIdToCheck=null),e||(e=this.tabs().find(r=>r.tabId()===this.initialTab())??this.tabs()[0]??null,e&&e.selected.set(!0)),this.selectedTabId.set(e.tabId())}selectTab(e){e.tabId()!==this.selectedTabId()&&(this._unselectCurrentTab(e),this.selectedTabId.set(e.tabId()),this._selectNewTab(e))}_unselectSpecificTab(e){e.selected.set(!1),e.selectedChange.emit(!1)}_unselectCurrentTab(e){let i=this.selectedTab();i&&(!e||i.tabId()!==e.tabId())&&this._unselectSpecificTab(i)}_selectNewTab(e){e.selected.set(!0),e.selectedChange.emit(!0)}onTabFocus(e){e.focusEvent.emit(),e.focused.set(!0),this.focusedTabId.set(e.tabId())}onTabBlur(e){e.blurEvent.emit(),e.focused.set(!1),this.focusedTabId.set(null)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["ard-tabber"]],contentQueries:function(i,r,l){i&1&&(xe(l,r.tabs,pt,5),xe(l,r.labelTemplate,Ln,5)),i&2&&de(2)},inputs:{selectedTabId:[1,"selectedTab","selectedTabId"],initialTab:[1,"initialTab"],color:[1,"color"],stretchTabs:[1,"stretchTabs"],uniformTabWidths:[1,"uniformTabWidths"],tabAlignment:[1,"tabAlignment"],tabIndex:[1,"tabIndex"]},outputs:{selectedTabId:"selectedTabChange",focusEvent:"focus",blurEvent:"blur"},standalone:!1,features:[lt],ngContentSelectors:Pe,decls:6,vars:6,consts:[["focusableElement",""],["defaultLabelTemplate",""],[1,"ard-tabber",3,"ngClass"],[1,"ard-tabber-tabs",3,"ngClass"],["type","button","role","tab",1,"ard-tab-button",3,"id","ard-tab-active","ard-tab-focused","tabindex"],["role","tabpanel",1,"ard-tabber-content"],["type","button","role","tab",1,"ard-tab-button",3,"click","focus","blur","id","tabindex"],[1,"ard-focus-overlay"],[1,"ard-button-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,r){i&1&&($(),o(0,"div",2)(1,"div",3),U(2,nm,7,8,"button",4,Tt),a(),o(4,"div",5),R(5),a()()),i&2&&(p("ngClass",r.ngClasses()),d(),ye(ge(4,em,r.tabs().length)),p("ngClass",r.tabContainerClasses()),d(),N(r.tabsWithTemplates()))},dependencies:[ze,Oe],styles:[`.ard-tabber ard-tab{display:none}.ard-tabber ard-tab.ard-tab-selected{display:block}.ard-tabber .ard-tabber-tabs.ard-uniform-tab-widths{display:grid;grid-template-columns:repeat(var(--ard-_tabber-tabs),1fr);max-width:max-content}
`],encapsulation:2,changeDetection:0})}}return t})(),Bt=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[te]})}}return t})(),Dl={appearance:vm.Raised,variant:Xs.Rounded,compact:!1,heading:"",noCloseButton:!1,noBackdrop:!1,disableBackdropClose:!1},nf=new P("ard-modal-defaults",{factory:()=>C({},Dl)});var ha={NoOp:"no-op",AutoClose:"autoclose"},rf=L(C({},Dl),{confirmButtonText:"Confirm",confirmButtonColor:we.Primary,confirmButtonAppearance:la.RaisedStrong,rejectButtonText:"Cancel",rejectButtonColor:we.None,rejectButtonAppearance:la.Transparent,noRejectButton:!1,canConfirm:!0,buttonActionType:ha.AutoClose}),af=new P("ard-dialog-defaults",{factory:()=>C({},rf)});var Ws=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(H(Te))}}static{this.\u0275dir=Y({type:t,selectors:[["ng-template","ard-buttons-tmp",""]],standalone:!1})}}return t})(),zs=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(H(Te))}}static{this.\u0275dir=Y({type:t,selectors:[["ng-template","ard-close-icon-tmp",""]],standalone:!1})}}return t})(),Ks=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(H(Te))}}static{this.\u0275dir=Y({type:t,selectors:[["ng-template","ard-close-icon-tmp",""]],standalone:!1})}}return t})(),Ca=(()=>{class t{constructor(){this.overlay=F(oi),this.scrollStrategyOpts=F(xn),this.viewContainerRef=F(ft),this._DEFAULTS=F(nf);this.appearance=h(this._DEFAULTS.appearance),this.variant=h(this._DEFAULTS.variant),this.compact=h(this._DEFAULTS.compact,{transform:e=>k(e)}),this.ngClasses=I(()=>[`ard-variant-${this.variant()}`,`ard-appearance-${this.appearance()}`,this.compact()?"ard-compact":""].join(" "));this.heading=h(this._DEFAULTS.heading),this.noCloseButton=h(this._DEFAULTS.noCloseButton,{transform:e=>k(e)});this.noBackdrop=h(this._DEFAULTS.noBackdrop,{transform:e=>k(e)}),this.disableBackdropClose=h(this._DEFAULTS.disableBackdropClose,{transform:e=>k(e)}),this.allActionsDisabled=h(!1,{transform:e=>k(e)});this.open=S(!1),this.openChange=se(),this.closeEvent=se({alias:"close"});this.modalTemplate=Ae("modalTemplate",{read:Te});this.closeIconTemplate=Be(Ks),this._closeIconTemplate=h(void 0)}set _open(e){this.open.set(k(e)),this.open()?this._openOverlay():this._destroyOverlay()}openProgrammatically(){this.open.set(!0)}closeProgrammatically(){this.open.set(!1)}_openOverlay(){let e=this.overlay.position().global(),i=new Ui({positionStrategy:e,scrollStrategy:this.scrollStrategyOpts.block(),hasBackdrop:!1});this._modalOverlay=this.overlay.create(i);let r=new ai(this.modalTemplate(),this.viewContainerRef);this._modalOverlay.attach(r)}_destroyOverlay(){this._modalOverlay&&(this.openChange.emit(!1),this.closeEvent.emit(),this._modalOverlay.dispose(),delete this._modalOverlay)}onBackdropClick(){this.disableBackdropClose()||this.allActionsDisabled()||this._destroyOverlay()}onCloseButtonClick(){this.allActionsDisabled()||this._destroyOverlay()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["ard-modal"]],contentQueries:function(i,r,l){i&1&&xe(l,r.closeIconTemplate,Ks,5),i&2&&de()},viewQuery:function(i,r){i&1&&Fe(r.modalTemplate,rm,5,Te),i&2&&de()},inputs:{appearance:[1,"appearance"],variant:[1,"variant"],compact:[1,"compact"],heading:[1,"heading"],noCloseButton:[1,"noCloseButton"],noBackdrop:[1,"noBackdrop"],disableBackdropClose:[1,"disableBackdropClose"],allActionsDisabled:[1,"allActionsDisabled"],_open:[0,"open","_open"],_closeIconTemplate:[1,"_closeIconTemplate"]},outputs:{openChange:"openChange",closeEvent:"close"},standalone:!1,ngContentSelectors:Pe,decls:4,vars:0,consts:[["modalTemplate",""],["_modalInsidePanel",""],["defaultCloseIconTemplate",""],[1,"ard-modal",3,"ngClass"],[1,"ard-modal","ard-modal-backdrop",3,"ngClass"],[1,"ard-modal",3,"click","ngClass"],[3,"ngTemplateOutlet"],[1,"ard-modal","ard-modal-backdrop",3,"click","ngClass"],["cdkTrapFocus","",1,"ard-modal-panel",3,"click"],[1,"ard-modal-heading"],[1,"ard-modal-heading-text"],["color","none",1,"ard-modal-close-button",3,"compact","disabled"],[1,"ard-modal-content"],["color","none",1,"ard-modal-close-button",3,"click","compact","disabled"]],template:function(i,r){i&1&&($(),g(0,dm,2,1,"ng-template",null,0,ae)(2,mm,7,6,"ng-template",null,1,ae))},dependencies:[ze,Oe,yt,Ye,Vs],styles:[`.ard-modal-content{width:100%}
`],encapsulation:2,changeDetection:0})}}return t})(),Ci=(()=>{class t{constructor(){this._DEFAULTS=F(af);this.appearance=h(this._DEFAULTS.appearance),this.variant=h(this._DEFAULTS.variant),this.compact=h(this._DEFAULTS.compact,{transform:e=>k(e)});this.heading=h(this._DEFAULTS.heading),this.noCloseButton=h(this._DEFAULTS.noCloseButton,{transform:e=>k(e)});this.noBackdrop=h(this._DEFAULTS.noBackdrop,{transform:e=>k(e)}),this.disableBackdropClose=h(this._DEFAULTS.disableBackdropClose,{transform:e=>k(e)}),this.buttonActionType=h(this._DEFAULTS.buttonActionType),this.allActionsDisabled=h(!1,{transform:e=>k(e)});this.open=dt(!1),this.closeEvent=se({alias:"close"}),this.confirmEvent=se({alias:"confirm"}),this.rejectEvent=se({alias:"reject"});this.confirmButtonText=h(this._DEFAULTS.confirmButtonText),this.confirmButtonColor=h(this._DEFAULTS.confirmButtonColor),this.confirmButtonAppearance=h(this._DEFAULTS.confirmButtonAppearance),this.rejectButtonText=h(this._DEFAULTS.rejectButtonText),this.rejectButtonColor=h(this._DEFAULTS.rejectButtonColor),this.rejectButtonAppearance=h(this._DEFAULTS.rejectButtonAppearance),this.noRejectButton=h(this._DEFAULTS.noRejectButton,{transform:e=>k(e)}),this.canConfirm=h(this._DEFAULTS.canConfirm,{transform:e=>k(e)});this.buttonsTemplate=Be(Ws),this.closeIconTemplate=Be(zs),this.getButtonsContext=I(()=>({confirmButton:{text:this.confirmButtonText(),color:this.confirmButtonColor(),appearance:this.confirmButtonAppearance()},rejectButton:{enabled:!this.noRejectButton(),text:this.rejectButtonText(),color:this.rejectButtonColor(),appearance:this.rejectButtonAppearance()},canConfirm:this.canConfirm(),allActionsDisabled:this.allActionsDisabled(),onConfirm:()=>this.onConfirmClick(),onReject:()=>this.onRejectClick(),dialogAppearance:this.appearance(),dialogVariant:this.variant(),dialogCompact:this.compact()}))}openProgrammatically(){this.open.set(!0)}closeProgrammatically(){this.open.set(!1)}onConfirmClick(){!this.canConfirm()||this.allActionsDisabled()||(this.buttonActionType()===ha.AutoClose&&this.open.set(!1),setTimeout(()=>{this.confirmEvent.emit(),this.closeEvent.emit("confirm")},0))}onRejectClick(){this.allActionsDisabled()||(this.buttonActionType()===ha.AutoClose&&this.open.set(!1),setTimeout(()=>{this.rejectEvent.emit(),this.closeEvent.emit("reject")},0))}onModalClose(){this.closeEvent.emit("close")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["ard-dialog"]],contentQueries:function(i,r,l){i&1&&(xe(l,r.buttonsTemplate,Ws,5),xe(l,r.closeIconTemplate,zs,5)),i&2&&de(2)},inputs:{appearance:[1,"appearance"],variant:[1,"variant"],compact:[1,"compact"],heading:[1,"heading"],noCloseButton:[1,"noCloseButton"],noBackdrop:[1,"noBackdrop"],disableBackdropClose:[1,"disableBackdropClose"],buttonActionType:[1,"buttonActionType"],allActionsDisabled:[1,"allActionsDisabled"],open:[1,"open"],confirmButtonText:[1,"confirmButtonText"],confirmButtonColor:[1,"confirmButtonColor"],confirmButtonAppearance:[1,"confirmButtonAppearance"],rejectButtonText:[1,"rejectButtonText"],rejectButtonColor:[1,"rejectButtonColor"],rejectButtonAppearance:[1,"rejectButtonAppearance"],noRejectButton:[1,"noRejectButton"],canConfirm:[1,"canConfirm"]},outputs:{open:"openChange",closeEvent:"close",confirmEvent:"confirm",rejectEvent:"reject"},standalone:!1,ngContentSelectors:Pe,decls:8,vars:12,consts:[["defaultButtonsTemplate",""],[3,"openChange","close","appearance","variant","compact","heading","noCloseButton","noBackdrop","disableBackdropClose","allActionsDisabled","open","_closeIconTemplate"],[1,"ard-dialog-container"],[1,"ard-dialog-content"],[1,"ard-dialog-buttons"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ard-dialog-buttons-container"],[3,"color","appearance","variant","compact","disabled"],[3,"click","color","appearance","variant","compact","disabled"]],template:function(i,r){if(i&1){let l=W();$(),o(0,"ard-modal",1),q("openChange",function(u){return T(l),K(r.open,u)||(r.open=u),D(u)}),_("close",function(){return T(l),D(r.onModalClose())}),o(1,"div",2)(2,"div",3),R(3),a(),o(4,"div",4),g(5,fm,4,7,"ng-template",null,0,ae)(7,gm,0,0,"ng-template",5),a()()()}if(i&2){let l,c=M(6);p("appearance",r.appearance())("variant",r.variant())("compact",r.compact())("heading",r.heading())("noCloseButton",r.noCloseButton())("noBackdrop",r.noBackdrop())("disableBackdropClose",r.disableBackdropClose())("allActionsDisabled",r.allActionsDisabled()),z("open",r.open),p("_closeIconTemplate",r.closeIconTemplate()),d(7),p("ngTemplateOutlet",(l=(l=r.buttonsTemplate())==null?null:l.template)!==null&&l!==void 0?l:c)("ngTemplateOutletContext",r.getButtonsContext())}},dependencies:[Oe,st,Ca],encapsulation:2,changeDetection:0})}}return t})(),ba=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[te,Ct,Re,Os]})}}return t})(),bi=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[te,Qe,ba]})}}return t})();var cb=new P("ArdSnackbarData"),ub=new P("ArdSnackbarColor"),pb=new P("ArdSnackbarType");var of={TopLeft:"top-left",TopCenter:"top-center",TopRight:"top-right",BottomLeft:"bottom-left",BottomCenter:"bottom-center",BottomRight:"bottom-right"},sf={Inside:"inside",Outside:"outside"},lf={Default:"default",Skip:"skip",Overwrite:"overwrite"},df={None:"none",Danger:"danger",Warning:"warn",Success:"success",Info:"info"};var cf={placement:{align:of.BottomCenter,origin:document.body,originRelation:sf.Inside},duration:5e3,queueHandling:lf.Default,panelClass:[],data:{message:""},color:we.Primary,type:df.None},mb=new P("ard-snackbar-defaults",{factory:()=>C({},cf)});var hb=new P("ard-snackbar-animation-length",{factory:()=>150});var _b={name:"$$$",description:"$$$",type:"boolean-like",default:"false",required:!1};function vb(t,n=Ve.Outlined,e){return{name:e??"appearance",description:t,type:"FormElementAppearance",default:`'${n}'`}}function Sl(t,n){let e=new Map;for(let i of t){let r=n(i);e.has(r)||e.set(r,[]),e.get(r).push(i)}return Array.from(e.entries()).map(([i,r])=>({group:i,children:r}))}var Al=Si(xa());var uf={offset:"30%",noHighlight:!1,behavior:"smooth"};function xi(t,n={}){let{offset:e,noHighlight:i,behavior:r}=C(C({},uf),n);console.log("scrollTo called with tagQuery:",t);let l=document.querySelector(t);if(!l){let O=t.charAt(0);t=(0,Al.kebab)(t.replace(/[^\w\- ]/gi,"")),/[^a-zA-Z0-9]/.test(O)&&(t=O+t),l=document.querySelector(t)}if(!l){console.warn(`Element not found for selector: ${t}`);return}let u=l.getBoundingClientRect().top+window.scrollY,A=0;if(typeof e=="string"&&e.endsWith("%")){let O=parseFloat(e);isNaN(O)||(A=O/100*window.innerHeight)}else typeof e=="number"&&(A=e);let j=u-A;window.scrollTo({top:j,behavior:r}),!i&&(l.classList.add("scrolled-to"),setTimeout(()=>{l.classList.remove("scrolled-to")},3e3))}var Da=new P("HIGHLIGHT_OPTIONS");function Rb(t){return[{provide:Da,useValue:t}]}var wi=function(t){return t.FULL_WITH_CORE_LIBRARY_IMPORTS="The full library and the core library were imported, only one of them should be imported!",t.FULL_WITH_LANGUAGE_IMPORTS="The highlighting languages were imported they are not needed!",t.CORE_WITHOUT_LANGUAGE_IMPORTS="The highlighting languages were not imported!",t.LANGUAGE_WITHOUT_CORE_IMPORTS="The core library was not imported!",t.NO_FULL_AND_NO_CORE_IMPORTS="Highlight.js library was not imported!",t}(wi||{}),pf=(()=>{class t{constructor(){this.document=F(Ce),this.isPlatformBrowser=Pi(F(Fi)),this.options=F(Da,{optional:!0}),this._ready=new ir(null),this.ready=ka(this._ready.asObservable().pipe(ht(e=>!!e))),this.isPlatformBrowser&&(this.document.defaultView.hljs?this._ready.next(this.document.defaultView.hljs):this._loadLibrary().pipe(on(e=>this.options?.lineNumbersLoader?(this.document.defaultView.hljs=e,this.loadLineNumbers().pipe(or(i=>{i.activateLineNumbers(),this._ready.next(e)}))):(this._ready.next(e),nr)),Ra(e=>(console.error("[HLJS] ",e),this._ready.error(e),nr))).subscribe(),this.options?.themePath&&this.loadTheme(this.options.themePath))}_loadLibrary(){if(this.options){if(this.options.fullLibraryLoader&&this.options.coreLibraryLoader)return Xt(()=>wi.FULL_WITH_CORE_LIBRARY_IMPORTS);if(this.options.fullLibraryLoader&&this.options.languages)return Xt(()=>wi.FULL_WITH_LANGUAGE_IMPORTS);if(this.options.coreLibraryLoader&&!this.options.languages)return Xt(()=>wi.CORE_WITHOUT_LANGUAGE_IMPORTS);if(!this.options.coreLibraryLoader&&this.options.languages)return Xt(()=>wi.LANGUAGE_WITHOUT_CORE_IMPORTS);if(this.options.fullLibraryLoader)return this.loadFullLibrary();if(this.options.coreLibraryLoader&&this.options.languages&&Object.keys(this.options.languages).length)return this.loadCoreLibrary().pipe(on(e=>this._loadLanguages(e)))}return Xt(()=>wi.NO_FULL_AND_NO_CORE_IMPORTS)}_loadLanguages(e){let i=Object.entries(this.options.languages).map(([r,l])=>wa(l()).pipe(or(c=>e.registerLanguage(r,c))));return rn(i).pipe(Xe(()=>e))}loadCoreLibrary(){return wa(this.options.coreLibraryLoader())}loadFullLibrary(){return wa(this.options.fullLibraryLoader())}loadLineNumbers(){return Ai(this.options.lineNumbersLoader())}setTheme(e){this.isPlatformBrowser&&(this._themeLinkElement?this._themeLinkElement.href=e:this.loadTheme(e))}loadTheme(e){this._themeLinkElement=this.document.createElement("link"),this._themeLinkElement.href=e,this._themeLinkElement.type="text/css",this._themeLinkElement.rel="stylesheet",this._themeLinkElement.media="screen,print",this.document.head.appendChild(this._themeLinkElement)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),wa=t=>Ai(t).pipe(ht(n=>!!n?.default),Xe(n=>n.default)),mf=(()=>{class t{constructor(){this.loader=F(pf),this.options=F(Da,{optional:!0}),this.hljsSignal=S(null),this.hljs=I(()=>this.hljsSignal()),this.loader.ready.then(e=>{this.hljsSignal.set(e),this.options?.highlightOptions&&e.configure(this.options.highlightOptions)})}highlight(e,i){return Se(this,null,function*(){return(yield this.loader.ready).highlight(e,i)})}highlightAuto(e,i){return Se(this,null,function*(){return(yield this.loader.ready).highlightAuto(e,i)})}highlightElement(e){return Se(this,null,function*(){(yield this.loader.ready).highlightElement(e)})}highlightAll(){return Se(this,null,function*(){(yield this.loader.ready).highlightAll()})}configure(e){return Se(this,null,function*(){(yield this.loader.ready).configure(e)})}registerLanguage(e,i){return Se(this,null,function*(){(yield this.loader.ready).registerLanguage(e,i)})}unregisterLanguage(e){return Se(this,null,function*(){(yield this.loader.ready).unregisterLanguage(e)})}registerAliases(r,l){return Se(this,arguments,function*(e,{languageName:i}){(yield this.loader.ready).registerAliases(e,{languageName:i})})}listLanguages(){return Se(this,null,function*(){return(yield this.loader.ready).listLanguages()})}getLanguage(e){return Se(this,null,function*(){return(yield this.loader.ready).getLanguage(e)})}safeMode(){return Se(this,null,function*(){(yield this.loader.ready).safeMode()})}debugMode(){return Se(this,null,function*(){(yield this.loader.ready).debugMode()})}lineNumbersBlock(e,i){return Se(this,null,function*(){let r=yield this.loader.ready;r.lineNumbersBlock&&r.lineNumbersBlock(e,i)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Ta;function hf(){if(!Ta)try{Ta=window?.trustedTypes?.createPolicy("ngx-highlightjs",{createHTML:t=>t})}catch{}return Ta}function ff(t){return hf()?.createHTML(t)||t}var Fl=(()=>{class t{constructor(){this._hljs=F(mf),this._nativeElement=F(pe).nativeElement,this._sanitizer=F(eo),this._platform=F(Fi),Pi(this._platform)&&(he(()=>{let e=this.code();this.setTextContent(e||""),e&&this.highlightElement(e)}),he(()=>{let e=this.highlightResult();this.setInnerHTML(e?.value),this.highlighted.emit(e)}))}setTextContent(e){requestAnimationFrame(()=>this._nativeElement.textContent=e)}setInnerHTML(e){requestAnimationFrame(()=>this._nativeElement.innerHTML=ff(this._sanitizer.sanitize(Wa.HTML,e)||""))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=Y({type:t,standalone:!1})}}return t})(),Il=(()=>{class t extends Fl{constructor(){super(...arguments),this.code=h(null,{alias:"highlight"}),this.highlightResult=S(null),this.highlighted=new Je}highlightElement(e){return Se(this,null,function*(){let i=yield this._hljs.highlight(e,{language:this.language,ignoreIllegals:this.ignoreIllegals});this.highlightResult.set(i)})}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=Me(t)))(r||t)}})()}static{this.\u0275dir=Y({type:t,selectors:[["","highlight",""]],hostVars:2,hostBindings:function(i,r){i&2&&J("hljs",!0)},inputs:{code:[1,"highlight","code"],language:"language",ignoreIllegals:[2,"ignoreIllegals","ignoreIllegals",St]},outputs:{highlighted:"highlighted"},features:[ke([{provide:Fl,useExisting:t}]),Nt,re]})}}return t})();var Ti=(()=>{class t{constructor(){this.language=h.required(),this.code=h(""),this.styled=h(!1,{transform:e=>k(e)}),this.noScroll=h(!1,{transform:e=>k(e)}),this.langClass=I(()=>`lang-${this.language()}`)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-code"]],inputs:{language:[1,"language"],code:[1,"code"],styled:[1,"styled"],noScroll:[1,"noScroll"]},decls:3,vars:8,consts:[[3,"highlight","language"]],template:function(i,r){i&1&&(o(0,"pre"),b(1,"code",0),s(2,`
`),a()),i&2&&(J("styled",r.styled())("no-scroll",r.noScroll()),d(),me(r.langClass()),p("highlight",r.code())("language",r.language()))},dependencies:[Il],styles:["pre[_ngcontent-%COMP%]{padding:1.25rem;max-width:100%;overflow:auto}.styled[_ngcontent-%COMP%]{border-radius:.5rem;border:1px solid var(--ard-detail-ultralight);margin:1.25rem 0}.no-scroll[_ngcontent-%COMP%]{max-width:max-content;overflow:initial}"]})}}return t})();var kl=Si(xa());var gf=["idLink","","id",""],_f=["*"],Ml=(()=>{class t{constructor(){this.router=F(mn)}onClick(e){let i=e.target.parentElement;if(i){for(;!i.id;)if(i=i.parentElement,!i)return;xi("#"+i.id,{offset:96,noHighlight:!0}),this.router.navigate([],{fragment:i.id})}}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["","idLink","","id",""],["h1","id",""],["h2","id",""],["h3","id",""],["h4","id",""],["h5","id",""],["h6","id",""]],attrs:gf,ngContentSelectors:_f,decls:4,vars:0,consts:[["color","none",3,"click"]],template:function(i,r){i&1&&($(),o(0,"ard-icon-button",0),_("click",function(c){return r.onClick(c)}),o(1,"ard-icon"),s(2,"tag"),a()(),R(3))},dependencies:[Ct,yt,Re,Ye],styles:["[_nghost-%COMP%]{position:relative}ard-icon-button[_ngcontent-%COMP%]{opacity:0;appearance:none;position:absolute;right:100%;top:50%;transform:translateY(-50%);font-size:.625em}ard-icon-button[_ngcontent-%COMP%]   ard-icon[_ngcontent-%COMP%]{color:var(--ard-text3)}[_nghost-%COMP%]:hover   ard-icon-button[_ngcontent-%COMP%]{opacity:1;appearance:auto}"]})}}return t})();var vf=["appAutoId",""],yf=["*"],bt=(()=>{class t{ngAfterViewInit(){this._wasViewInit=!0,this._setElementId()}constructor(){this.elementRef=F(pe),this.autoIdActive=h(!1,{transform:e=>k(e),alias:"appAutoId"}),this.forcedId=h(null),this.idPrefix=h("",{transform:this._toKebab}),this.idText=S(""),this._wasViewInit=!1,he(()=>{this._setElementId()})}_toKebab(e){return(0,kl.kebab)(e.replace(/[^\w\- ]/gi,""))}_setElementId(){if(this._wasViewInit)return;let i=this.elementRef.nativeElement.innerText.replace(/tag\x0A/,"");i&&this.idText.set(this._toKebab(i))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["","appAutoId",""]],inputs:{autoIdActive:[1,"appAutoId","autoIdActive"],forcedId:[1,"forcedId"],idPrefix:[1,"idPrefix"]},attrs:vf,ngContentSelectors:yf,decls:2,vars:1,consts:[["idLink","",3,"id"]],template:function(i,r){if(i&1&&($(),o(0,"div",0),R(1),a()),i&2){let l;p("id",(l=r.forcedId())!==null&&l!==void 0?l:r.idText())}},dependencies:[Ml],encapsulation:2})}}return t})();var bf=["*"],it=(()=>{class t{constructor(){this.htmlId=h(null),this.idPrefix=h("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-h1"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:bf,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,r){i&1&&($(),o(0,"h1",0),R(1),a()),i&2&&p("appAutoId",r.htmlId()!=null)("forcedId",r.htmlId())("idPrefix",r.idPrefix())},encapsulation:2})}}return t})();var xf=["*"],Ht=(()=>{class t{constructor(){this.htmlId=h(null),this.idPrefix=h("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-h2"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:xf,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,r){i&1&&($(),o(0,"h2",0),R(1),a()),i&2&&p("appAutoId",r.htmlId()!=null)("forcedId",r.htmlId())("idPrefix",r.idPrefix())},encapsulation:2})}}return t})();var wf=["*"],Ut=(()=>{class t{constructor(){this.htmlId=h(null),this.idPrefix=h("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-h3"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:wf,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,r){i&1&&($(),o(0,"h3",0),R(1),a()),i&2&&p("appAutoId",r.htmlId()!=null)("forcedId",r.htmlId())("idPrefix",r.idPrefix())},encapsulation:2})}}return t})();var Tf=["*"],Gn=(()=>{class t{constructor(){this.htmlId=h(null),this.idPrefix=h("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-h4"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:Tf,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,r){i&1&&($(),o(0,"h4",0),R(1),a()),i&2&&p("appAutoId",r.htmlId()!=null)("forcedId",r.htmlId())("idPrefix",r.idPrefix())},encapsulation:2})}}return t})();var Sf=["*"],Xn=(()=>{class t{constructor(){this.htmlId=h(null),this.idPrefix=h("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-h5"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:Sf,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,r){i&1&&($(),o(0,"h5",0),R(1),a()),i&2&&p("appAutoId",r.htmlId()!=null)("forcedId",r.htmlId())("idPrefix",r.idPrefix())},encapsulation:2})}}return t})();var Af=["*"],Zn=(()=>{class t{constructor(){this.htmlId=h(null),this.idPrefix=h("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-h6"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:Af,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,r){i&1&&($(),o(0,"h6",0),R(1),a()),i&2&&p("appAutoId",r.htmlId()!=null)("forcedId",r.htmlId())("idPrefix",r.idPrefix())},encapsulation:2})}}return t})();var mt=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[te,bt]})}}return t})();jt(it,[bt],[]);jt(Ht,[bt],[]);jt(Ut,[bt],[]);jt(Gn,[bt],[]);jt(Xn,[bt],[]);jt(Zn,[bt],[]);var If=(t,n)=>n.name,xt=(t,n)=>({$implicit:t,prefix:n}),Mf=(t,n)=>({$implicit:t,prefix:n,headingType:"h6",headingText:"Template Context"}),Aa=t=>({$implicit:t}),kf=(t,n)=>({$implicit:t,headingType:"h5",prefix:n}),Pf=(t,n)=>({$implicit:t,isTypeParams:!0,headingType:"h4",prefix:n}),Vf=(t,n,e)=>({$implicit:t,headingType:n,prefix:e}),Of=(t,n,e)=>({$implicit:t,isTypeParams:!0,headingType:n,prefix:e}),Rf=(t,n)=>({$implicit:t,isTypeParams:!0,headingType:"h5",prefix:n}),Pl=(t,n)=>({$implicit:t,headingType:"h6",prefix:n});function Lf(t,n){if(t&1&&b(0,"p",8),t&2){let e=f().$implicit;p("innerHTML",e.description,le)}}function Bf(t,n){if(t&1){let e=W();o(0,"a",9),_("click",function(){T(e);let r=f().$implicit,l=f(2);return D(l.scrollTo("#"+r.exports))}),o(1,"code"),s(2),a()()}if(t&2){let e=f().$implicit;d(2),v(e.exports)}}function Hf(t,n){t&1&&s(0),t&2&&v(", ")}function Uf(t,n){if(t&1){let e=W();o(0,"a",9),_("click",function(){let r=T(e).$implicit,l=f(4);return D(l.scrollTo("#"+r))}),o(1,"code"),s(2),a()(),g(3,Hf,1,1)}if(t&2){let e=n.$implicit,i=n.$index,r=f(2).$implicit;d(2),v(e),d(),y(i!==r.exports.length-1?3:-1)}}function Nf(t,n){if(t&1&&U(0,Uf,4,2,null,null,X),t&2){let e=f().$implicit;N(e.exports)}}function jf(t,n){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),g(4,Lf,1,1,"p",8),o(5,"p"),s(6," Exports: "),g(7,Bf,3,1,"a")(8,Nf,2,0),a()()),t&2){let e=n.$implicit,i=f(2);d(3),v(e.name),d(),y(e.description?4:-1),d(3),y(i.isString(e.exports)?7:8)}}function Yf(t,n){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Modules"),a(),U(3,jf,9,3,"div",7,X),a()),t&2){let e=f();d(3),N(e.data.modules)}}function $f(t,n){if(t&1&&b(0,"p",8),t&2){let e=f().$implicit;p("innerHTML",e.description,le)}}function Wf(t,n){if(t&1){let e=W();s(0," Exported from: "),o(1,"a",9),_("click",function(){T(e);let r=f().$implicit,l=f(2);return D(l.scrollTo("#"+r.exportedFrom))}),o(2,"code"),s(3),a()()}if(t&2){let e=f().$implicit;d(3),v(e.exportedFrom)}}function zf(t,n){t&1&&s(0," This component is standalone and needs to be imported separately. ")}function Kf(t,n){}function qf(t,n){if(t&1&&g(0,Kf,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=M(14);p("ngTemplateOutlet",i)("ngTemplateOutletContext",Ie(2,xt,e.inputs,e.name))}}function Qf(t,n){}function Gf(t,n){if(t&1&&g(0,Qf,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=M(16);p("ngTemplateOutlet",i)("ngTemplateOutletContext",Ie(2,xt,e.twoWayBindings,e.name))}}function Xf(t,n){}function Zf(t,n){if(t&1&&g(0,Xf,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=M(18);p("ngTemplateOutlet",i)("ngTemplateOutletContext",Ie(2,xt,e.outputs,e.name))}}function Jf(t,n){if(t&1&&b(0,"p",8),t&2){let e=f(3).$implicit;p("innerHTML",e.description,le)}}function eg(t,n){}function tg(t,n){if(t&1&&g(0,eg,0,0,"ng-template",10),t&2){let e=f().$implicit,i=f(2).$implicit;f(2);let r=M(22);p("ngTemplateOutlet",r)("ngTemplateOutletContext",Ie(2,Mf,e.context,i.name+"template"+e.name))}}function ig(t,n){if(t&1&&(o(0,"app-h6",11),s(1,"Template Context"),a(),o(2,"p"),s(3,"This template has no own context properties."),a()),t&2){let e=f().$implicit,i=f(2).$implicit;p("idPrefix",i.name+"template"+e.name)}}function ng(t,n){if(t&1&&(o(0,"app-h5",11),s(1),a(),g(2,Jf,1,1,"p",8),o(3,"p"),s(4," Selector: "),o(5,"code"),s(6),a()(),g(7,tg,1,5,null,10)(8,ig,4,1),o(9,"app-h6",11),s(10,"Default HTML Implementation"),a(),b(11,"app-code",12)),t&2){let e=n.$implicit,i=f(2).$implicit;p("idPrefix",i.name+"template"),d(),v(e.name),d(),y(e.description?2:-1),d(4),v(i.selector),d(),y(e.context!=null&&e.context.length?7:8),d(2),p("idPrefix",i.name+"template"+e.name),d(2),p("code",e.defaultHtmlContent)}}function rg(t,n){if(t&1&&(o(0,"app-h4",11),s(1,"Customization Templates"),a(),U(2,ng,12,7,null,null,If)),t&2){let e=f().$implicit;p("idPrefix",e.name),d(2),N(e.templates)}}function ag(t,n){t&1&&(o(0,"i"),s(1,"default"),a())}function og(t,n){if(t&1&&(o(0,"code"),s(1),a()),t&2){let e=f().$implicit;d(),v(e.selector)}}function sg(t,n){if(t&1&&(o(0,"tr")(1,"td"),g(2,ag,2,0,"i")(3,og,2,1,"code"),a(),o(4,"td"),b(5,"p",8),a()()),t&2){let e=n.$implicit;d(2),y(e.selector===null?2:3),d(3),p("innerHTML",e.description,le)}}function lg(t,n){if(t&1&&(o(0,"app-h4",11),s(1,"Content Children"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),s(6,"Selector"),a(),o(7,"th"),s(8,"Description"),a()()(),o(9,"tbody"),U(10,sg,6,2,"tr",null,X),a()()),t&2){let e=f().$implicit;p("idPrefix",e.name),d(10),N(e.contentChildren)}}function dg(t,n){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),g(4,$f,1,1,"p",8),o(5,"p"),s(6," Selector: "),o(7,"code"),s(8),a()(),o(9,"p"),g(10,Wf,4,1)(11,zf,1,0),a(),g(12,qf,1,5,null,10)(13,Gf,1,5,null,10)(14,Zf,1,5,null,10)(15,rg,4,1)(16,lg,12,1),a()),t&2){let e=n.$implicit;d(3),v(e.name),d(),y(e.description?4:-1),d(4),v(e.selector),d(2),y(e.exportedFrom!==null?10:11),d(2),y(e.inputs?12:-1),d(),y(e.twoWayBindings?13:-1),d(),y(e.outputs?14:-1),d(),y(e.templates?15:-1),d(),y(e.contentChildren?16:-1)}}function cg(t,n){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Components"),a(),U(3,dg,17,9,"div",7,X),a()),t&2){let e=f();d(3),N(e.data.components)}}function ug(t,n){if(t&1&&b(0,"p",8),t&2){let e=f().$implicit;p("innerHTML",e.description,le)}}function pg(t,n){if(t&1){let e=W();s(0," Exported from: "),o(1,"a",9),_("click",function(){T(e);let r=f().$implicit,l=f(2);return D(l.scrollTo("#"+r.exportedFrom))}),o(2,"code"),s(3),a()()}if(t&2){let e=f().$implicit;d(3),v(e.exportedFrom)}}function mg(t,n){t&1&&s(0," This directive is standalone and needs to be imported separately. ")}function hg(t,n){}function fg(t,n){if(t&1&&g(0,hg,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=M(14);p("ngTemplateOutlet",i)("ngTemplateOutletContext",Ie(2,xt,e.inputs,e.name))}}function gg(t,n){}function _g(t,n){if(t&1&&g(0,gg,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=M(16);p("ngTemplateOutlet",i)("ngTemplateOutletContext",Ie(2,xt,e.twoWayBindings,e.name))}}function vg(t,n){}function yg(t,n){if(t&1&&g(0,vg,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=M(18);p("ngTemplateOutlet",i)("ngTemplateOutletContext",Ie(2,xt,e.outputs,e.name))}}function Cg(t,n){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),g(4,ug,1,1,"p",8),o(5,"p"),s(6," Selector: "),o(7,"code"),s(8),a()(),o(9,"p"),g(10,pg,4,1)(11,mg,1,0),a(),g(12,fg,1,5,null,10)(13,_g,1,5,null,10)(14,yg,1,5,null,10),a()),t&2){let e=n.$implicit;d(3),v(e.name),d(),y(e.description?4:-1),d(4),v(e.selector),d(2),y(e.exportedFrom!==null?10:11),d(2),y(e.inputs?12:-1),d(),y(e.twoWayBindings?13:-1),d(),y(e.outputs?14:-1)}}function bg(t,n){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Directives"),a(),U(3,Cg,15,7,"div",7,X),a()),t&2){let e=f();d(3),N(e.data.directives)}}function xg(t,n){if(t&1){let e=W();s(0," Exported from: "),o(1,"a",9),_("click",function(){T(e);let r=f().$implicit,l=f(2);return D(l.scrollTo("#"+r.exportedFrom))}),o(2,"code"),s(3),a()()}if(t&2){let e=f().$implicit;d(3),v(e.exportedFrom)}}function wg(t,n){t&1&&s(0," This pipe is standalone and needs to be imported separately. ")}function Tg(t,n){}function Dg(t,n){if(t&1&&g(0,Tg,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=M(20);p("ngTemplateOutlet",i)("ngTemplateOutletContext",Ie(2,xt,e.params,e.name))}}function Sg(t,n){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),b(4,"p",8),o(5,"p"),s(6," Selector: "),o(7,"code"),s(8),a()(),o(9,"p"),g(10,xg,4,1)(11,wg,1,0),a(),g(12,Dg,1,5,null,10),a()),t&2){let e=n.$implicit;d(3),v(e.name),d(),p("innerHTML",e.description,le),d(4),v(e.selector),d(2),y(e.exportedFrom!==null?10:11),d(2),y(e.params?12:-1)}}function Eg(t,n){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Pipes"),a(),U(3,Sg,13,5,"div",7,X),a()),t&2){let e=f();d(3),N(e.data.pipes)}}function Ag(t,n){}function Fg(t,n){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Classes"),a(),g(3,Ag,0,0,"ng-template",10),a()),t&2){let e=f(),i=M(26);d(3),p("ngTemplateOutlet",i)("ngTemplateOutletContext",ge(2,Aa,e.data.classes))}}function Ig(t,n){}function Mg(t,n){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Services"),a(),g(3,Ig,0,0,"ng-template",10),a()),t&2){let e=f(),i=M(26);d(3),p("ngTemplateOutlet",i)("ngTemplateOutletContext",ge(2,Aa,e.data.services))}}function kg(t,n){}function Pg(t,n){if(t&1&&(o(0,"app-h4",11),s(1),a(),g(2,kg,0,0,"ng-template",10)),t&2){let e=n.$implicit,i=n.$index,r=f(2).$implicit;f(2);let l=M(24);p("idPrefix",r.name),d(),w("Overload ",i+1,""),d(),p("ngTemplateOutlet",l)("ngTemplateOutletContext",Ie(4,kf,e,r.name+" overload "+(i+1)))}}function Vg(t,n){if(t&1&&U(0,Pg,3,7,null,null,X),t&2){let e=f().$implicit;N(e.overloads)}}function Og(t,n){}function Rg(t,n){if(t&1&&g(0,Og,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=M(24);p("ngTemplateOutlet",i)("ngTemplateOutletContext",Ie(2,xt,e,e.name))}}function Lg(t,n){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),g(4,Vg,2,0)(5,Rg,1,5,null,10),a()),t&2){let e=n.$implicit,i=f(2);d(3),v(e.name),d(),y(i.isOverloadedFunction(e)?4:5)}}function Bg(t,n){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Functions"),a(),U(3,Lg,6,2,"div",7,X),a()),t&2){let e=f();d(3),N(e.data.functions)}}function Hg(t,n){}function Ug(t,n){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Interfaces"),a(),g(3,Hg,0,0,"ng-template",10),a()),t&2){let e=f(),i=M(26);d(3),p("ngTemplateOutlet",i)("ngTemplateOutletContext",ge(2,Aa,e.data.interfaces))}}function Ng(t,n){}function jg(t,n){if(t&1&&g(0,Ng,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=M(20);p("ngTemplateOutlet",i)("ngTemplateOutletContext",Ie(2,Pf,e.typeParams,e.name))}}function Yg(t,n){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),b(4,"p",8)(5,"app-code",13),g(6,jg,1,5,null,10),a()),t&2){let e=n.$implicit;d(3),v(e.name),d(),p("innerHTML",e.description,le),d(),p("code",e.definition),d(),y(e.typeParams!=null&&e.typeParams.length?6:-1)}}function $g(t,n){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Types"),a(),U(3,Yg,7,4,"div",7,X),a()),t&2){let e=f();d(3),N(e.data.types)}}function Wg(t,n){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),b(4,"p",8)(5,"app-code",13),a()),t&2){let e=n.$implicit;d(3),v(e.name),d(),p("innerHTML",e.description,le),d(),p("code",e.definition)}}function zg(t,n){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Enums"),a(),U(3,Wg,6,3,"div",7,X),a()),t&2){let e=f();d(3),N(e.data.enums)}}function Kg(t,n){t&1&&s(0),t&2&&v(" All properties are optional, and missing properties will be set to default values.")}function qg(t,n){if(t&1){let e=W();o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),b(4,"p",8),o(5,"p"),s(6," Requires a value of type "),o(7,"a",9),_("click",function(){let r=T(e).$implicit,l=f(2);return D(l.scrollTo("#"+r.type))}),o(8,"code"),s(9),a()(),s(10,"."),g(11,Kg,1,1),a()()}if(t&2){let e=n.$implicit;d(3),v(e.name),d(),p("innerHTML",e.description,le),d(5),v(e.type),d(2),y(e.allOptional?11:-1)}}function Qg(t,n){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Injection Tokens"),a(),U(3,qg,12,4,"div",7,X),a()),t&2){let e=f();d(3),N(e.data.injectionTokens)}}function Gg(t,n){t&1&&(o(0,"ard-icon",14),s(1,"delete"),a())}function Xg(t,n){t&1&&s(0," Required. ")}function Zg(t,n){if(t&1&&(s(0," Optional. Defaults to "),b(1,"code",8),s(2,". ")),t&2){let e=f().$implicit;d(),p("innerHTML",e.default,le)}}function Jg(t,n){if(t&1&&(o(0,"tr")(1,"td"),g(2,Gg,2,0,"ard-icon",14),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),b(9,"p",8),o(10,"p"),g(11,Xg,1,0)(12,Zg,3,1),a()()()),t&2){let e=n.$implicit;d(2),y(e.deprecated?2:-1),d(2),v(e.name),d(3),v(e.type),d(2),p("innerHTML",e.description,le),d(2),y(e.required?11:e.default?12:-1)}}function e_(t,n){if(t&1&&(o(0,"app-h4",11),s(1,"Inputs"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),s(6,"Name"),a(),o(7,"th"),s(8,"Type"),a(),o(9,"th"),s(10,"Description"),a()()(),o(11,"tbody"),U(12,Jg,13,5,"tr",null,X),a()()),t&2){let e=n.$implicit,i=n.prefix;p("idPrefix",i),d(12),N(e)}}function t_(t,n){t&1&&(o(0,"ard-icon",15),s(1,"delete"),a())}function i_(t,n){t&1&&s(0," Required. ")}function n_(t,n){if(t&1&&(s(0," Optional. Defaults to "),b(1,"code",8),s(2,". ")),t&2){let e=f().$implicit;d(),p("innerHTML",e.default,le)}}function r_(t,n){if(t&1&&(o(0,"tr")(1,"td"),g(2,t_,2,0,"ard-icon",15),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),b(9,"p",8),o(10,"p"),g(11,i_,1,0)(12,n_,3,1),a()()()),t&2){let e=n.$implicit;d(2),y(e.deprecated?2:-1),d(2),v(e.name),d(3),v(e.type),d(2),p("innerHTML",e.description,le),d(2),y(e.required?11:e.default?12:-1)}}function a_(t,n){if(t&1&&(o(0,"app-h4",11),s(1,"Two-way bindings"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),s(6,"Name"),a(),o(7,"th"),s(8,"Type"),a(),o(9,"th"),s(10,"Description"),a()()(),o(11,"tbody"),U(12,r_,13,5,"tr",null,X),a()()),t&2){let e=n.$implicit,i=n.prefix;p("idPrefix",i),d(12),N(e)}}function o_(t,n){t&1&&(o(0,"ard-icon",16),s(1,"delete"),a())}function s_(t,n){if(t&1&&(o(0,"tr")(1,"td"),g(2,o_,2,0,"ard-icon",16),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),b(9,"p",8),a()()),t&2){let e=n.$implicit;d(2),y(e.deprecated?2:-1),d(2),v(e.name),d(3),v(e.type),d(2),p("innerHTML",e.description,le)}}function l_(t,n){if(t&1&&(o(0,"app-h4",11),s(1,"Outputs"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),s(6,"Name"),a(),o(7,"th"),s(8,"Emitted type"),a(),o(9,"th"),s(10,"Description"),a()()(),o(11,"tbody"),U(12,s_,10,4,"tr",null,X),a()()),t&2){let e=n.$implicit,i=n.prefix;p("idPrefix",i),d(12),N(e)}}function d_(t,n){if(t&1&&(o(0,"app-h6",11),s(1),a()),t&2){let e=f(),i=e.isTypeParams,r=e.prefix;p("idPrefix",r),d(),w("",i?"Type":""," Params")}}function c_(t,n){if(t&1&&(o(0,"app-h5",11),s(1),a()),t&2){let e=f(),i=e.isTypeParams,r=e.prefix;p("idPrefix",r),d(),w("",i?"Type":""," Params")}}function u_(t,n){if(t&1&&(o(0,"app-h4",11),s(1),a()),t&2){let e=f(),i=e.isTypeParams,r=e.prefix;p("idPrefix",r),d(),w("",i?"Type":""," Params")}}function p_(t,n){t&1&&(o(0,"ard-icon",17),s(1,"delete"),a())}function m_(t,n){t&1&&s(0," Required. ")}function h_(t,n){t&1&&s(0," (merged with provided object) ")}function f_(t,n){if(t&1&&(s(0," Optional. Defaults to "),b(1,"code",8),g(2,h_,1,0),s(3,". ")),t&2){let e=f().$implicit;d(),p("innerHTML",e.default,le),d(),y(e.isMergedObject?2:-1)}}function g_(t,n){if(t&1&&(o(0,"tr")(1,"td"),g(2,p_,2,0,"ard-icon",17),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),b(9,"p",8),o(10,"p"),g(11,m_,1,0)(12,f_,4,2),a()()()),t&2){let e=n.$implicit;d(2),y(e.deprecated?2:-1),d(2),v(e.name),d(3),v(e.type),d(2),p("innerHTML",e.description,le),d(2),y(e.required?11:e.required===!1?12:-1)}}function __(t,n){if(t&1&&(o(0,"table")(1,"thead")(2,"tr")(3,"th"),s(4,"Name"),a(),o(5,"th"),s(6),a(),o(7,"th"),s(8,"Description"),a()()(),o(9,"tbody"),U(10,g_,13,5,"tr",null,X),a()()),t&2){let e=f(),i=e.$implicit,r=e.isTypeParams;d(6),v(r?"Extends":"Type"),d(4),N(i)}}function v_(t,n){t&1&&(o(0,"p"),s(1,"No params."),a())}function y_(t,n){if(t&1&&g(0,d_,2,2,"app-h6",11)(1,c_,2,2,"app-h5",11)(2,u_,2,2,"app-h4",11)(3,__,12,1,"table")(4,v_,2,0,"p"),t&2){let e=n.$implicit,i=n.headingType;y(i==="h6"?0:i==="h5"?1:2),d(3),y(e!=null&&e.length?3:4)}}function C_(t,n){if(t&1&&(o(0,"app-h6",11),s(1),a()),t&2){let e,i=f(),r=i.headingText,l=i.prefix;p("idPrefix",l),d(),v((e=r)!==null&&e!==void 0?e:"Properties")}}function b_(t,n){if(t&1&&(o(0,"app-h5",11),s(1),a()),t&2){let e,i=f(),r=i.headingText,l=i.prefix;p("idPrefix",l),d(),v((e=r)!==null&&e!==void 0?e:"Properties")}}function x_(t,n){if(t&1&&(o(0,"app-h4",11),s(1),a()),t&2){let e,i=f(),r=i.headingText,l=i.prefix;p("idPrefix",l),d(),v((e=r)!==null&&e!==void 0?e:"Properties")}}function w_(t,n){t&1&&(o(0,"ard-icon",18),s(1,"delete"),a())}function T_(t,n){if(t&1&&(o(0,"tr")(1,"td"),g(2,w_,2,0,"ard-icon",18),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),b(9,"p",8),a()()),t&2){let e=n.$implicit;d(2),y(e.deprecated?2:-1),d(2),v(e.name),d(3),v(e.type),d(2),p("innerHTML",e.description,le)}}function D_(t,n){if(t&1&&(g(0,C_,2,2,"app-h6",11)(1,b_,2,2,"app-h5",11)(2,x_,2,2,"app-h4",11),o(3,"table")(4,"thead")(5,"tr")(6,"th"),s(7,"Name"),a(),o(8,"th"),s(9,"Type"),a(),o(10,"th"),s(11,"Description"),a()()(),o(12,"tbody"),U(13,T_,10,4,"tr",null,X),a()()),t&2){let e=n.$implicit,i=n.headingType;y(i==="h6"?0:i==="h5"?1:2),d(13),N(e)}}function S_(t,n){}function E_(t,n){if(t&1&&g(0,S_,0,0,"ng-template",10),t&2){let e=f(),i=e.$implicit,r=e.headingType,l=e.prefix;f();let c=M(20);p("ngTemplateOutlet",c)("ngTemplateOutletContext",fr(2,Of,i.typeParams,r,l))}}function A_(t,n){}function F_(t,n){if(t&1&&(o(0,"app-h6",11),s(1,"Return type"),a()),t&2){let e=f().prefix;p("idPrefix",e)}}function I_(t,n){if(t&1&&(o(0,"app-h5",11),s(1,"Return type"),a()),t&2){let e=f().prefix;p("idPrefix",e)}}function M_(t,n){if(t&1&&(o(0,"app-h4",11),s(1,"Return type"),a()),t&2){let e=f().prefix;p("idPrefix",e)}}function k_(t,n){if(t&1&&(b(0,"p",8),g(1,E_,1,6,null,10)(2,A_,0,0,"ng-template",10)(3,F_,2,1,"app-h6",11)(4,I_,2,1,"app-h5",11)(5,M_,2,1,"app-h4",11),o(6,"p"),s(7," Return type: "),o(8,"code"),s(9),a()()),t&2){let e=n.$implicit,i=n.headingType,r=n.prefix;f();let l=M(20);p("innerHTML",e.description,le),d(),y(e.typeParams!=null&&e.typeParams.length?1:-1),d(),p("ngTemplateOutlet",l)("ngTemplateOutletContext",fr(6,Vf,e.params,i,r)),d(),y(i==="h6"?3:i==="h5"?4:5),d(6),v(e.returnType)}}function P_(t,n){if(t&1&&(o(0,"p"),s(1," Provided in: "),o(2,"code"),s(3),a()()),t&2){let e=f().$implicit;d(3),w("",e.providedIn," ")}}function V_(t,n){if(t&1&&(o(0,"p"),s(1," Extends: "),o(2,"code"),s(3),a()()),t&2){let e=f().$implicit;d(3),w("",e.extends," ")}}function O_(t,n){}function R_(t,n){if(t&1&&g(0,O_,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=M(20);p("ngTemplateOutlet",i)("ngTemplateOutletContext",Ie(2,Rf,e.typeParams,e.name))}}function L_(t,n){}function B_(t,n){if(t&1&&g(0,L_,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=M(22);p("ngTemplateOutlet",i)("ngTemplateOutletContext",Ie(2,xt,e.properties,e.name))}}function H_(t,n){}function U_(t,n){if(t&1&&(o(0,"app-h5",11)(1,"code"),s(2),a(),s(3),a(),g(4,H_,0,0,"ng-template",10)),t&2){let e=n.$implicit,i=n.$index,r=f(2).$implicit,l=f(2).$implicit;f(2);let c=M(24);p("idPrefix",l.name+" methods"),d(2),v(r.name),d(),w(" (overload ",i+1,") "),d(),p("ngTemplateOutlet",c)("ngTemplateOutletContext",Ie(5,Pl,e,l.name+" methods "+r.name+" overload "+(i+1)))}}function N_(t,n){if(t&1&&U(0,U_,5,8,null,null,X),t&2){let e=f().$implicit;N(e.overloads)}}function j_(t,n){}function Y_(t,n){if(t&1&&(o(0,"app-h5",11)(1,"code"),s(2),a()(),g(3,j_,0,0,"ng-template",10)),t&2){let e=f().$implicit,i=f(2).$implicit;f(2);let r=M(24);p("idPrefix",i.name+" methods"),d(2),v(e.name),d(),p("ngTemplateOutlet",r)("ngTemplateOutletContext",Ie(4,Pl,e,i.name+" methods "+e.name))}}function $_(t,n){if(t&1&&g(0,N_,2,0)(1,Y_,4,7),t&2){let e=n.$implicit,i=f(4);y(i.isOverloadedFunction(e)?0:1)}}function W_(t,n){if(t&1&&(o(0,"app-h4",11),s(1,"Methods"),a(),U(2,$_,2,1,null,null,X)),t&2){let e=f().$implicit;p("idPrefix",e.name),d(2),N(e.methods)}}function z_(t,n){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),g(4,P_,4,1,"p")(5,V_,4,1,"p"),b(6,"p",8),g(7,R_,1,5,null,10)(8,B_,1,5,null,10)(9,W_,4,1),a()),t&2){let e=n.$implicit;d(3),v(e.name),d(),y(e.providedIn?4:-1),d(),y(e.extends?5:-1),d(),p("innerHTML",e.description,le),d(),y(e.typeParams!=null&&e.typeParams.length?7:-1),d(),y(e.properties!=null&&e.properties.length?8:-1),d(),y(e.methods!=null&&e.methods.length?9:-1)}}function K_(t,n){if(t&1&&U(0,z_,10,7,"div",7,X),t&2){let e=n.$implicit;N(e)}}var Vl=(()=>{class t{constructor(){this._route=F(ii),this.data=this._route.snapshot.data}scrollTo(e){xi(e,{offset:"20%"})}isString(e){return!Array.isArray(e)}isOverloadedFunction(e){return"overloads"in e}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-api-page"]],decls:27,vars:12,consts:[["inputsTable",""],["twoWayBindingsTable",""],["outputsTable",""],["paramsTable",""],["propertiesTable",""],["functionTable",""],["classOrInterface",""],[1,"item-container"],[3,"innerHTML"],[3,"click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"idPrefix"],["language","xml","styled","",3,"code"],["language","typescript","styled","",3,"code"],["title","This input is deprecated."],["title","This two-way binding is deprecated."],["title","This output is deprecated."],["title","This param is deprecated."],["title","This property is deprecated."]],template:function(i,r){i&1&&(o(0,"app-h1"),s(1),a(),g(2,Yf,5,0,"section")(3,cg,5,0,"section")(4,bg,5,0,"section")(5,Eg,5,0,"section")(6,Fg,4,4,"section")(7,Mg,4,4,"section")(8,Bg,5,0,"section")(9,Ug,4,4,"section")(10,$g,5,0,"section")(11,zg,5,0,"section")(12,Qg,5,0,"section")(13,e_,14,1,"ng-template",null,0,ae)(15,a_,14,1,"ng-template",null,1,ae)(17,l_,14,1,"ng-template",null,2,ae)(19,y_,5,2,"ng-template",null,3,ae)(21,D_,15,1,"ng-template",null,4,ae)(23,k_,10,10,"ng-template",null,5,ae)(25,K_,2,0,"ng-template",null,6,ae)),i&2&&(d(),w("API reference for ",r.data.name," \u2014 Ardium UI"),d(),y(r.data.modules?2:-1),d(),y(r.data.components?3:-1),d(),y(r.data.directives?4:-1),d(),y(r.data.pipes?5:-1),d(),y(r.data.classes?6:-1),d(),y(r.data.services?7:-1),d(),y(r.data.functions?8:-1),d(),y(r.data.interfaces?9:-1),d(),y(r.data.types?10:-1),d(),y(r.data.enums?11:-1),d(),y(r.data.injectionTokens?12:-1))},dependencies:[Re,Ye,te,Oe,tt,Ti,mt,it,Ht,Ut,Gn,Xn,Zn],styles:[`app-api-page{font-size:.9375rem}app-api-page h1{padding-bottom:1rem}app-api-page h2{font-weight:300;font-size:1.5rem;width:100%;border-bottom:1px solid var(--ard-detail-ultralight);padding-bottom:.5rem;margin-bottom:1rem}app-api-page h3{font-weight:500;font-size:1.25rem}app-api-page td{position:relative;min-width:100px}app-api-page table ard-icon{position:absolute;right:100%;color:rgb(var(--ard-danger-700))}app-api-page p ul{padding-bottom:0}
`],encapsulation:2})}}return t})();var Jn=(()=>{class t{constructor(){this.contentToCopy=h.required()}executeCopy(){navigator.clipboard.writeText(this.contentToCopy())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-copy-button"]],inputs:{contentToCopy:[1,"contentToCopy"]},decls:3,vars:0,consts:[[1,"copy-button",3,"click"]],template:function(i,r){i&1&&(o(0,"ard-icon-button",0),_("click",function(){return r.executeCopy()}),o(1,"ard-icon"),s(2,"content-copy"),a()())},dependencies:[Ct,yt,Re,Ye],encapsulation:2})}}return t})();var q_=["containerLeft"],Q_=["containerRight"],G_=[[["","side","left"]],[["","side","right"]]],X_=["[side='left']","[side='right']"];function Z_(t,n){if(t&1&&b(0,"app-copy-button",8),t&2){let e=f();p("contentToCopy",e.contentToCopyLeft())}}function J_(t,n){}function e0(t,n){if(t&1&&g(0,J_,0,0,"ng-template",9),t&2){f();let e=M(22);p("ngTemplateOutlet",e)}}function t0(t,n){if(t&1&&b(0,"app-copy-button",8),t&2){let e=f();p("contentToCopy",e.contentToCopyRight())}}function i0(t,n){}function n0(t,n){if(t&1&&g(0,i0,0,0,"ng-template",9),t&2){f();let e=M(22);p("ngTemplateOutlet",e)}}function r0(t,n){if(t&1){let e=W();o(0,"ard-icon-button",12),_("click",function(){T(e);let r=f(2);return D(r.scrollSync.set(!r.scrollSync()))}),b(1,"ard-icon",13),a()}if(t&2){let e=f(2);p("title",(e.scrollSync(),"Turn off scroll sync")),d(),p("icon",e.scrollSync()?"sync":"sync_disabled")}}function a0(t,n){if(t&1){let e=W();o(0,"ard-icon-button",12),_("click",function(){T(e);let r=f(2);return D(r.verticalLayout.set(!r.verticalLayout()))}),b(1,"ard-icon",13),a()}if(t&2){let e=f(2);p("title",e.verticalLayout()?"Current view: vertical":"Current view: side-by-side"),d(),p("icon",e.verticalLayout()?"splitscreen":"view_column_2")}}function o0(t,n){if(t&1&&g(0,r0,2,2,"ard-icon-button",11)(1,a0,2,2,"ard-icon-button",11),t&2){let e=f();y(e.allowScrollSync()?0:-1),d(),y(e.allowLayoutChange()?1:-1)}}var Ji={Off:"off",Left:"left",Right:"right",Both:"both"},Ol=(()=>{class t{constructor(){this.containerLeft=Ae("containerLeft"),this.containerRight=Ae("containerRight"),this.textLeft=h.required(),this.textRight=h.required(),this.contentToCopyLeft=h(""),this.contentToCopyRight=h(""),this.allowScrollSync=h(!1,{transform:e=>k(e)}),this.allowLayoutChange=h(!1,{transform:e=>k(e)}),this.allowCopy=h(Ji.Both),this.allowCopyLeft=I(()=>this.allowCopy()===Ji.Left||this.allowCopy()===Ji.Both),this.allowCopyRight=I(()=>this.allowCopy()===Ji.Right||this.allowCopy()===Ji.Both),this.scrollSync=dt(!1),this.verticalLayout=dt(!1)}onContainerLeftScroll(){if(this.scrollSync())return;let[e,i]=[this.containerLeft(),this.containerRight()];!e||!i||i.nativeElement.scrollTo(e.nativeElement.scrollLeft,0)}onContainerRightScroll(){if(this.scrollSync())return;let[e,i]=[this.containerLeft(),this.containerRight()];!e||!i||e.nativeElement.scrollTo(i.nativeElement.scrollLeft,0)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-two-pane-container"]],viewQuery:function(i,r){i&1&&(Fe(r.containerLeft,q_,5),Fe(r.containerRight,Q_,5)),i&2&&de(2)},inputs:{textLeft:[1,"textLeft"],textRight:[1,"textRight"],contentToCopyLeft:[1,"contentToCopyLeft"],contentToCopyRight:[1,"contentToCopyRight"],allowScrollSync:[1,"allowScrollSync"],allowLayoutChange:[1,"allowLayoutChange"],allowCopy:[1,"allowCopy"],scrollSync:[1,"scrollSync"],verticalLayout:[1,"verticalLayout"]},outputs:{scrollSync:"scrollSyncChange",verticalLayout:"verticalLayoutChange"},ngContentSelectors:X_,decls:23,vars:8,consts:[["containerLeft",""],["containerRight",""],["buttons",""],[1,"two-pane-container"],[1,"content-container"],[1,"top-bar"],[1,"heading"],[1,"buttons"],[3,"contentToCopy"],[3,"ngTemplateOutlet"],[1,"content",3,"scroll"],[3,"title"],[3,"click","title"],[3,"icon"]],template:function(i,r){if(i&1){let l=W();$(G_),o(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6),s(4),a(),o(5,"div",7),g(6,Z_,1,1,"app-copy-button",8)(7,e0,1,1,null,9),a()(),o(8,"div",10,0),_("scroll",function(){return T(l),D(r.onContainerLeftScroll())}),R(10),a()(),o(11,"div",4)(12,"div",5)(13,"div",6),s(14),a(),o(15,"div",7),g(16,t0,1,1,"app-copy-button",8)(17,n0,1,1,null,9),a()(),o(18,"div",10,1),_("scroll",function(){return T(l),D(r.onContainerRightScroll())}),R(20,1),a()()(),g(21,o0,2,2,"ng-template",null,2,ae)}i&2&&(J("vertical",r.verticalLayout()),d(4),v(r.textLeft()),d(2),y(r.allowCopyLeft()?6:-1),d(),y(r.verticalLayout()?7:-1),d(7),v(r.textRight()),d(2),y(r.allowCopyRight()?16:-1),d(),y(r.verticalLayout()?-1:17))},dependencies:[te,Oe,Jn,Ct,yt,Re,Ye],styles:[".two-pane-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;border-radius:.5rem;border:1px solid var(--ard-detail-ultralight);margin:1.25rem 0;overflow:hidden}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{max-width:100%;overflow:hidden}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]:first-of-type{border-right:1px solid var(--ard-detail-ultralight);position:relative}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{padding:.5rem 1.25rem 0;font-weight:500}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;position:relative;top:.25rem;right:.25rem}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{max-width:100%;overflow:auto}.two-pane-container.vertical[_ngcontent-%COMP%]{grid-template-columns:1fr}.two-pane-container.vertical[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]:first-of-type{border-right:none;border-bottom:1px solid var(--ard-detail-ultralight)}"]})}}return t})();var s0=["*"],Rl=(()=>{class t{constructor(){this.code=h.required(),this.codeLanguage=h.required()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-example-with-result"]],inputs:{code:[1,"code"],codeLanguage:[1,"codeLanguage"]},ngContentSelectors:s0,decls:4,vars:3,consts:[["textLeft","Code","textRight","Result","allowCopy","left",3,"verticalLayout"],["side","left","styled","false","noScroll","",3,"language","code"],["side","right"]],template:function(i,r){i&1&&($(),o(0,"app-two-pane-container",0),b(1,"app-code",1),Ii(2,2),R(3),Mi(),a()),i&2&&(p("verticalLayout",!0),d(),p("language",r.codeLanguage())("code",r.code()))},dependencies:[Ol,Ti],encapsulation:2})}}return t})();var Ll={FT:"Fatal",NF:"Non-Fatal",IS:"Impossible State",WA:"Warning"};var Bl=(()=>{class t{constructor(){this.severity=h.required({alias:"code",transform:e=>{let i=e.slice(4,6);return Ll[i]}})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-exception-severity"]],hostVars:2,hostBindings:function(i,r){i&2&&me("severity-"+r.severity().toLowerCase().replace(" ","-"))},inputs:{severity:[1,"code","severity"]},decls:1,vars:1,template:function(i,r){i&1&&s(0),i&2&&v(r.severity())},styles:["[_nghost-%COMP%]{padding:.125rem .25rem;border-radius:4px}.severity-fatal[_nghost-%COMP%]{background-color:rgb(var(--ard-danger-500));color:var(--ard-text-alt)}.severity-non-fatal[_nghost-%COMP%]{background-color:#ff7707;color:var(--ard-text-alt)}.severity-impossible-state[_nghost-%COMP%]{background-color:#7707ff;color:var(--ard-text-alt)}.severity-warning[_nghost-%COMP%]{background-color:rgb(var(--ard-warn-500));color:var(--ard-text-alt)}"]})}}return t})();var l0=(t,n)=>n.name,d0=(t,n)=>n.code;function c0(t,n){if(t&1&&(o(0,"p"),s(1),a()),t&2){let e=f();d(),w("",e.data.name," doesn't raise any own exceptions.")}}function u0(t,n){if(t&1&&b(0,"p",2),t&2){let e=f().$implicit;p("innerHTML",e.description,le)}}function p0(t,n){if(t&1&&b(0,"p",2),t&2){let e=n.$implicit;p("innerHTML",e,le)}}function m0(t,n){if(t&1&&U(0,p0,1,1,"p",2,X),t&2){let e=f().$implicit;N(e.description)}}function h0(t,n){if(t&1&&(o(0,"app-example-with-result",3)(1,"p",4),s(2),a()()),t&2){let e=n.$implicit;p("code",e.code)("codeLanguage",e.codeLanguage),d(2),v(e.result)}}function f0(t,n){if(t&1&&U(0,h0,3,3,"app-example-with-result",3,X),t&2){let e=f().$implicit;N(e.exampleResults)}}function g0(t,n){if(t&1&&(o(0,"app-h3",0)(1,"code"),s(2),a()(),o(3,"p")(4,"strong"),s(5,"Severity: "),a(),b(6,"app-exception-severity",1),a(),b(7,"blockquote",2),g(8,u0,1,1,"p",2)(9,m0,2,0)(10,f0,2,0)),t&2){let e=n.$implicit,i=f(3);p("htmlId",e.code),d(2),w(" ",e.code," "),d(4),p("code",e.code),d(),p("innerHTML",e.exceptionText,le),d(),y(i.isString(e.description)?8:9),d(2),y(e.exampleResults!=null&&e.exampleResults.length?10:-1)}}function _0(t,n){if(t&1&&(o(0,"app-h2"),s(1),a(),U(2,g0,11,6,null,null,d0)),t&2){let e=n.$implicit;d(),v(e.name),d(),N(e.exceptions)}}function v0(t,n){if(t&1&&U(0,_0,4,1,null,null,l0),t&2){let e=f();N(e.data.exceptions)}}var Hl=(()=>{class t{constructor(){this._route=F(ii),this.data=this._route.snapshot.data}scrollTo(e){xi(e,{offset:"20%"})}isString(e){return!Array.isArray(e)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-exceptions-page"]],decls:4,vars:2,consts:[[3,"htmlId"],[3,"code"],[3,"innerHTML"],[3,"code","codeLanguage"],[1,"example-with-result-result"]],template:function(i,r){i&1&&(o(0,"app-h1"),s(1),a(),g(2,c0,2,1,"p")(3,v0,2,0)),i&2&&(d(),w("Exception list for ",r.data.name," \u2014 Ardium UI"),d(),y(r.data.exceptions!=null&&r.data.exceptions.length?3:2))},dependencies:[Bl,Rl,mt,it,Ht,Ut],styles:[".example-with-result-result[_ngcontent-%COMP%]{padding:1.25rem;font-family:monospace}"]})}}return t})();function y0(t,n){if(t&1&&(o(0,"p"),s(1," Inherits from: "),o(2,"code"),s(3),a()()),t&2){let e=f().$implicit;d(3),v(e.inheritsFrom)}}function C0(t,n){if(t&1&&(o(0,"tr")(1,"td")(2,"code"),s(3),a()(),o(4,"td")(5,"code"),s(6),a()(),o(7,"td"),b(8,"p",0),g(9,y0,4,1,"p"),a()()),t&2){let e=n.$implicit;d(3),v(e.name),d(3),v(e.default),d(2),p("innerHTML",e.description,le),d(),y(e.inheritsFrom?9:-1)}}function b0(t,n){if(t&1&&(o(0,"section")(1,"p"),s(2),a(),o(3,"table")(4,"thead")(5,"tr")(6,"th"),s(7,"Variable"),a(),o(8,"th"),s(9,"Default value"),a(),o(10,"th"),s(11,"Description"),a()()(),o(12,"tbody"),U(13,C0,10,4,"tr",null,X),a()()()),t&2){let e=f();d(2),w(" The following CSS variables can be used to customize the styling of the ",e.data.name," component: "),d(11),N(e.data.variables)}}function x0(t,n){if(t&1&&(o(0,"p"),s(1),a()),t&2){let e=f();d(),w("",e.data.name," doesn't have any style customizations.")}}var Ul=(()=>{class t{constructor(){this._route=F(ii),this.data=this._route.snapshot.data}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-styling-page"]],decls:4,vars:2,consts:[[3,"innerHTML"]],template:function(i,r){i&1&&(o(0,"app-h1"),s(1),a(),g(2,b0,15,1,"section")(3,x0,2,1,"p")),i&2&&(d(),w("Styling guide for ",r.data.name," \u2014 Ardium UI"),d(),y(r.data.variables&&r.data.variables.length>0?2:3))},dependencies:[Re,te,tt,mt,it],styles:[`app-api-page{font-size:.9375rem}app-api-page h1{padding-bottom:1rem}app-api-page h2{font-weight:300;font-size:1.5rem;width:100%;border-bottom:1px solid var(--ard-detail-ultralight);padding-bottom:.5rem;margin-bottom:1rem}app-api-page h3{font-weight:500;font-size:1.25rem}app-api-page td{position:relative;min-width:100px}app-api-page table ard-icon{position:absolute;right:100%;color:rgb(var(--ard-danger-700))}
`],encapsulation:2})}}return t})();var Nl=(()=>{class t{constructor(){this._router=F(mn),this.currentRoute=Kr(this._router.events.pipe(ht(e=>e instanceof to),Xe(e=>e.url)))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function w0(t,n){if(t&1&&(o(0,"a",3),s(1),a()),t&2){let e=n.$implicit,i=f();J("active",i.isActiveRoute(e)),p("routerLink","./"+e),d(),v(e)}}var Yl=(()=>{class t{constructor(){this.POSSIBLE_TABS=["overview","api","styling","exceptions"],this._navService=F(Nl)}isActiveRoute(e){return this._navService.currentRoute()?.endsWith(e)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-common"]],decls:5,vars:0,consts:[[1,"component-article"],[1,"page-tabber"],[3,"routerLink","active"],[3,"routerLink"]],template:function(i,r){i&1&&(o(0,"article",0)(1,"div",1),U(2,w0,2,4,"a",2,X),a(),b(4,"router-outlet"),a()),i&2&&(d(2),N(r.POSSIBLE_TABS))},dependencies:[tt,io,ni],styles:[".page-tabber[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid var(--ard-detail-ultralight)}.page-tabber[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:10rem;height:3rem;display:grid;place-items:center;text-transform:uppercase;text-decoration:none;color:var(--ard-text2);font-size:.875rem;font-weight:500;background-color:transparent;transition:background-color .1s ease-in-out;border-bottom:2px solid transparent}.page-tabber[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .page-tabber[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible{background-color:rgba(var(--ard-overlay-rgb),5%)}.page-tabber[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{border-bottom-color:rgb(var(--ard-primary-500))}"]})}}return t})();var $l=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-under-construction"]],decls:12,vars:0,consts:[[1,"text"],[1,"oops"],[1,"long"],[1,"image"],["src","/ardium-ui-docs/assets/under-construction.svg","alt","Laptop marked as under construction with workers and a crane around it"]],template:function(i,r){i&1&&(o(0,"article")(1,"div",0)(2,"app-h1")(3,"span",1),s(4,"Oops!"),a(),b(5,"br"),o(6,"span",2),s(7,"Under construction"),a()(),o(8,"p"),s(9,"This documentation page is currently under construction. Come back soon!"),a()(),o(10,"div",3),b(11,"img",4),a()())},dependencies:[mt,it],styles:['@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKcg72j00.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKew72j00.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKcw72j00.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKfA72j00.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKcQ72j00.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKfw72.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3jvWyNL4U.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3jtGyNL4U.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3jvGyNL4U.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3js2yNL4U.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3jvmyNL4U.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3jsGyN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}article[_ngcontent-%COMP%]{height:100%;display:grid;align-items:center;grid-template-columns:4fr 6fr;font-family:Ubuntu,sans-serif;max-width:70rem;box-sizing:content-box;margin:0 auto}.text[_ngcontent-%COMP%]{padding-bottom:8rem}h1[_ngcontent-%COMP%]{font-weight:500;color:rgb(var(--ard-primary-900));padding-bottom:1.5rem}h1[_ngcontent-%COMP%]   .oops[_ngcontent-%COMP%]{letter-spacing:.1em;font-size:5rem}h1[_ngcontent-%COMP%]   .long[_ngcontent-%COMP%]{font-size:2.625rem;overflow:visible;white-space:nowrap}p[_ngcontent-%COMP%]{opacity:50%;font-size:1rem}@media only screen and (min-width: 1340px){article[_ngcontent-%COMP%]{padding-right:10rem}}@media only screen and (min-width: 1700px){article[_ngcontent-%COMP%]{padding-right:20rem}}']})}}return t})();var wt={DataDisplay:"Data Display",Buttons:"Buttons",Layout:"Layout",FormElements:"Form Elements",Popups:"Popups",Feedback:"Feedback",Stars:"Stars",CustomSignals:"Custom Signals"};function jw(t,n,e,i,r,l,c,u,A){return l||(l={name:n}),{path:t,name:n,desc:e,img:u,component:Yl,groupName:A,children:[{path:"overview",component:i},{path:"api",component:Vl,data:r},{path:"styling",component:Ul,data:c},{path:"exceptions",component:Hl,data:l},{path:"**",redirectTo:"overview"}]}}function Yw(t,n,e,i){return{path:t,name:n,desc:e,groupName:i,img:"assets/placeholder.jpg",component:$l}}var nt={TS:"typescript",SCSS:"scss",HTML:"xml",PlainText:"txt"};var Wl=(()=>{class t{loadDynamicComponent(e,i){if(!i)return;i.clear(),i.createComponent(e).changeDetectorRef.detectChanges()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=ne({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var T0=["exampleDisplay"];function D0(t,n){if(t&1&&(o(0,"div",4),s(1),a()),t&2){let e=f();d(),v(e.heading())}}function S0(t,n){if(t&1){let e=W();o(0,"div",5)(1,"ard-icon-button",7),_("click",function(){T(e);let r=f();return D(r.toggleCodeShown())}),o(2,"ard-icon"),s(3,"code"),a()()()}}function E0(t,n){}function A0(t,n){if(t&1&&(o(0,"ard-tab",11)(1,"div",9),b(2,"app-code",12),g(3,E0,0,0,"ng-template",13),a()()),t&2){let e=n.$implicit;f(3);let i=M(10);p("tabId",e.label)("label",e.label),d(2),p("language",e.type)("code",e.code),d(),p("ngTemplateOutlet",i)}}function F0(t,n){if(t&1){let e=W();o(0,"ard-tabber",10),_("changeTab",function(r){T(e);let l=f(2);return D(l.onTabChange(r))}),U(1,A0,4,5,"ard-tab",11,X),a()}if(t&2){let e,i=f(2);p("initialTab",(e=i.initialTab())==null?null:e.toUpperCase()),d(),N(i.mappedData())}}function I0(t,n){}function M0(t,n){if(t&1&&(o(0,"div",9),b(1,"app-code",12),g(2,I0,0,0,"ng-template",13),a()),t&2){let e=f(2),i=M(10);d(),p("language",e.mappedData()[0].type)("code",e.mappedData()[0].code),d(),p("ngTemplateOutlet",i)}}function k0(t,n){if(t&1&&g(0,F0,3,1,"ard-tabber",8)(1,M0,3,3,"div",9),t&2){let e=f();y(e.mappedData().length>1?0:1)}}function P0(t,n){}function V0(t,n){if(t&1&&(b(0,"app-code",12),g(1,P0,0,0,"ng-template",13)),t&2){let e=f(),i=M(10);p("language",e.simpleCodeType())("code",e.simpleCodePiece()),d(),p("ngTemplateOutlet",i)}}function O0(t,n){if(t&1&&(o(0,"p"),s(1,"This example can only be viewed in its own tab. "),o(2,"a",14),s(3,"Open example page"),a(),s(4,"."),a()),t&2){let e=f();d(2),p("href",e.viewInFullWindowLink(),un)}}function R0(t,n){t&1&&qa(0,null,1)}function L0(t,n){if(t&1&&b(0,"app-copy-button",15),t&2){let e=f();p("contentToCopy",e.codeToCopy())}}function B0(t){switch(t){case"ts":return nt.TS;case"html":return nt.HTML;case"scss":case"css":return nt.SCSS;default:switch(t.split(".").at(-1)?.toLowerCase()){case"ts":return nt.TS;case"html":return nt.HTML;case"scss":case"css":return nt.SCSS;default:return nt.PlainText}}}var zl=["HTML","TS","SCSS","CSS"],er=(()=>{class t{constructor(){this.data=h.required(),this.heading=h.required(),this.viewInFullWindowLink=h(null,{transform:e=>e?.startsWith("/")?e:e&&"/"+e}),this.isSimpleCodeDefined=I(()=>!!this.simpleCodePiece()),this.simpleCodePiece=I(()=>{let e=this.data();return e.simpleTs??e.simpleHtml??e.simpleScss??e.simpleTxt}),this.simpleCodeType=I(()=>{let e=this.data();return e.simpleTs?nt.TS:e.simpleHtml?nt.HTML:e.simpleScss?nt.SCSS:nt.PlainText}),this.isComponentDefined=I(()=>!!this.data().component),this.isCodeShown=dt(!0),this.initialTab=h(void 0),this.nonExpandable=h(!1,{transform:e=>k(e)}),this.codeToCopy=I(()=>this.shouldShowFullCodeData()?(this._currentTab()?this.mappedData().find(i=>i.label===this._currentTab()):this.mappedData()[0]).code:this.simpleCodePiece()),this._currentTab=S(""),this.shouldShowFullCodeData=I(()=>this.isCodeShown()||!this.isSimpleCodeDefined()),this.displayWhenSimple=h(!1,{transform:e=>k(e)}),this.mappedData=I(()=>{let e=this.data();return Object.entries(e).filter(i=>i[0]!=="component"&&i[0]!=="simpleHtml"&&i[0]!=="simpleScss"&&i[0]!=="simpleTs").map(i=>{let r=i[0];return typeof r=="string"&&r.match(/^(html|s?css|ts)$/i)&&(r=r.toUpperCase()),{label:r,code:i[1],type:B0(r)}}).sort((i,r)=>{let l=zl.indexOf(i.label),c=zl.indexOf(r.label);return l!==-1&&c!==-1?l-c:l!==-1?-1:c!==-1?1:i.label.localeCompare(r.label)})}),this.componentLoader=F(Wl),this.exampleDisplay=Ae("exampleDisplay",{read:ft}),he(()=>{(this.isSimpleCodeDefined()||this.nonExpandable())&&this.isCodeShown.set(!1)})}ngOnInit(){this.nonExpandable()&&this.isCodeShown.set(!1)}toggleCodeShown(){this.isCodeShown.update(e=>!e)}onTabChange(e){this._currentTab.set(e)}ngAfterViewInit(){this._renderComponent()}_renderComponent(){if(this.viewInFullWindowLink())return;let e=this.data().component;e&&this.componentLoader.loadDynamicComponent(e,this.exampleDisplay())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-code-example"]],viewQuery:function(i,r){i&1&&Fe(r.exampleDisplay,T0,5,ft),i&2&&de()},hostVars:10,hostBindings:function(i,r){i&2&&J("simple-example",r.isSimpleCodeDefined()&&!r.isCodeShown())("code-shown",r.isCodeShown())("component-defined",r.isComponentDefined())("non-expandable",r.nonExpandable())("has-single-tab",r.mappedData().length===1)},inputs:{data:[1,"data"],heading:[1,"heading"],viewInFullWindowLink:[1,"viewInFullWindowLink"],isCodeShown:[1,"isCodeShown"],initialTab:[1,"initialTab"],nonExpandable:[1,"nonExpandable"],displayWhenSimple:[1,"displayWhenSimple"]},outputs:{isCodeShown:"isCodeShownChange"},decls:11,vars:6,consts:[["copyButton",""],["exampleDisplay",""],[1,"example-container"],[1,"example-container__top-bar"],[1,"example-container__heading"],[1,"example-container__buttons"],[1,"example-display"],["title","Show full code",3,"click"],["stretchTabs","false",3,"initialTab"],[1,"tab-relative-container"],["stretchTabs","false",3,"changeTab","initialTab"],[3,"tabId","label"],[3,"language","code"],[3,"ngTemplateOutlet"],["target","_blank",3,"href"],["title","Copy code",1,"copy-button",3,"contentToCopy"]],template:function(i,r){i&1&&(o(0,"div",2)(1,"div",3),g(2,D0,2,1,"div",4)(3,S0,4,0,"div",5),a(),g(4,k0,2,1)(5,V0,2,3),a(),o(6,"div",6),g(7,O0,5,1,"p")(8,R0,2,0,"ng-container"),a(),g(9,L0,1,1,"ng-template",null,0,ae)),i&2&&(d(2),y(r.shouldShowFullCodeData()?2:-1),d(),y(!r.nonExpandable()||!r.isSimpleCodeDefined()?3:-1),d(),y(r.isCodeShown()?4:r.shouldShowFullCodeData()?-1:5),d(2),J("hidden",!r.isComponentDefined()||!r.displayWhenSimple()&&!r.shouldShowFullCodeData()),d(),y(r.viewInFullWindowLink()?7:8))},dependencies:[te,Oe,tt,Bt,Lt,pt,Ct,yt,Re,Ye,Ti,Jn],styles:["[_nghost-%COMP%]{width:100%;display:flex;flex-direction:column;border:1px solid var(--ard-detail-ultralight);border-radius:8px;margin:1.25rem 0;position:relative}[_nghost-%COMP%]   .example-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   .example-container__top-bar[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;padding:.5rem 1rem 0 1.5rem}[_nghost-%COMP%]   .example-container__heading[_ngcontent-%COMP%]{line-height:39px;color:#514346}[_nghost-%COMP%]   .example-display[_ngcontent-%COMP%]{padding:1rem 1.5rem;border-top:1px solid var(--ard-detail-ultralight)}[_nghost-%COMP%]   .example-display.hidden[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .tab-relative-container[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   .copy-button[_ngcontent-%COMP%]{position:absolute;top:.5rem;right:1rem}.simple-example[_nghost-%COMP%]   .example-container__top-bar[_ngcontent-%COMP%]{position:absolute;right:0;width:max-content}[_nghost-%COMP%]:not(.code-shown).simple-example:not(.non-expandable)   .copy-button[_ngcontent-%COMP%]{transform:translate(calc(-100% + .125rem))}[_nghost-%COMP%]:not(.code-shown)   .example-container[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.component-defined)   .example-container[_ngcontent-%COMP%]{border-bottom:none}.has-single-tab.code-shown[_nghost-%COMP%]   .example-container__top-bar[_ngcontent-%COMP%]{padding-bottom:.5rem;border-bottom:1px solid var(--ard-detail-ultralight)}"]})}}return t})();var U0=["*"],sT=(()=>{class t{constructor(){this.pageTitle=h.required()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-introduction"]],inputs:{pageTitle:[1,"pageTitle"]},standalone:!1,ngContentSelectors:U0,decls:4,vars:1,template:function(i,r){i&1&&($(),o(0,"section")(1,"app-h1"),s(2),a(),R(3),a()),i&2&&(d(2),w("",r.pageTitle()," \u2014 Ardium UI"))},dependencies:[it],encapsulation:2})}}return t})();var N0=["*"],tr=(()=>{class t{constructor(){this.link=h.required()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-main-article"]],inputs:{link:[1,"link"]},ngContentSelectors:N0,decls:4,vars:1,consts:[[3,"routerLink"]],template:function(i,r){i&1&&($(),o(0,"i"),s(1,"Main article: "),o(2,"a",0),R(3),a()()),i&2&&(d(2),p("routerLink",r.link()))},dependencies:[tt,ni],styles:["[_nghost-%COMP%]{padding-left:1.6rem;font-size:.875rem}"]})}}return t})();var Y0=t=>({simpleTs:t});function $0(t,n){t&1&&s(0),t&2&&v(" and theme styles need to be imported")}function W0(t,n){t&1&&(o(0,"p"),s(1,"Note: Only the modules that will actually be used should be imported!"),a())}function z0(t,n){if(t&1&&(o(0,"app-h3"),s(1,"Import styles"),a(),o(2,"app-main-article",1),s(3,"Importing styles"),a(),b(4,"app-code-example",2)),t&2){let e=f();d(4),p("data",e.stylesCode())}}var hT=(()=>{class t{constructor(){this.moduleName=h.required(),this.otherModuleNames=h([]),this.styles=h(null),this.tsCode=I(()=>`import { ${this.otherModuleNames().length?[this.moduleName(),...this.otherModuleNames()].join(", "):this.moduleName()} } from '@ardium-ui/ui'`),this.isOtherModuleNamesDefined=I(()=>this.otherModuleNames().length>0),this.stylesCode=I(()=>{let e=this.styles();if(!e)return null;let i=["@import '../node_modules/@ardium-ui/ui/prebuilt-themes/default/core.css';",...e.map(l=>`@import '../node_modules/@ardium-ui/ui/prebuilt-themes/default/${Array.isArray(l)?l[0]:l}.scs';${Array.isArray(l)&&l[1]?" /* if needed */":""}`)].join(`
`),r=["@import '../node_modules/@ardium-ui/ui/themes/default/core.scss';",...e.map(l=>`@import '../node_modules/@ardium-ui/ui/themes/default/${Array.isArray(l)?l[0]:l}.scss';${Array.isArray(l)&&l[1]?" // if needed":""}`)].join(`
`);return{simpleScss:r,scss:r,css:i}})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-prerequisites"]],inputs:{moduleName:[1,"moduleName"],otherModuleNames:[1,"otherModuleNames"],styles:[1,"styles"]},standalone:!1,decls:12,vars:6,consts:[["heading","Module imports","nonExpandable","",3,"data"],["link","/guides/importing-styles"],["heading","Style imports",3,"data"]],template:function(i,r){i&1&&(o(0,"section")(1,"app-h2"),s(2,"Prerequisites"),a(),o(3,"p"),s(4," In order for the component to work, its corresponding module"),g(5,$0,1,1),s(6,". "),a(),o(7,"app-h3"),s(8,"Import modules"),a(),b(9,"app-code-example",0),g(10,W0,2,0,"p")(11,z0,5,1),a()),i&2&&(d(5),y(r.stylesCode()?5:-1),d(4),p("data",ge(4,Y0,r.tsCode())),d(),y(r.isOtherModuleNamesDefined()?10:-1),d(),y(r.stylesCode()?11:-1))},dependencies:[er,tr,Ht,Ut],encapsulation:2})}}return t})();var ST=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=Q({imports:[te,er,tr,mt]})}}return t})();var Kl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["button-basic-example"]],decls:13,vars:0,consts:[[1,"grid"],["appearance","raised-strong"],["appearance","transparent"],["color","danger","appearance","outlined-strong"],["variant","pill"],["appearance","outlined","icon","favorite","variant","sharp"],["appearance","flat","color","success","vertical","","icon","favorite"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"ard-button",1),s(2,"Button"),a(),o(3,"ard-button",2),s(4,"Button"),a(),o(5,"ard-button",3),s(6,"Button"),a(),o(7,"ard-button",4),s(8,"Button"),a(),o(9,"ard-button",5),s(10," Button "),a(),o(11,"ard-button",6),s(12," Button "),a()())},dependencies:[Qe,st],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1.5rem;justify-items:center;max-width:30rem}"]})}}return t})();var MT={component:Kl,html:`<div class="grid">\r
  <ard-button appearance="raised-strong">Button</ard-button>\r
  <ard-button appearance="transparent">Button</ard-button>\r
  <ard-button color="danger" appearance="outlined-strong">Button</ard-button>\r
  <ard-button variant="pill">Button</ard-button>\r
  <ard-button appearance="outlined" icon="favorite" variant="sharp">\r
    Button\r
  </ard-button>\r
  <ard-button appearance="flat" color="success" vertical icon="favorite">\r
    Button\r
  </ard-button>\r
</div>`,scss:`.grid {\r
  display: grid;\r
  grid-template-columns: 1fr 1fr 1fr;\r
  gap: 1.5rem;\r
  justify-items: center;\r
  max-width: 30rem;\r
}`,ts:`import { Component } from '@angular/core';\r
import { ArdiumButtonModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'button-basic-example',\r
  templateUrl: './button-basic-example.html',\r
  styleUrl: './button-basic-example.scss',\r
  standalone: true,\r
  imports: [ArdiumButtonModule],\r
})\r
export class ButtonBasicExample {}\r
`};var ql=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["button-compact-example"]],decls:4,vars:0,consts:[["appearance","raised-strong","icon","favorite"],["appearance","raised-strong","icon","favorite","compact",""]],template:function(i,r){i&1&&(o(0,"ard-button",0),s(1,"Normal"),a(),o(2,"ard-button",1),s(3,"Compact"),a())},dependencies:[Qe,st],styles:["[_nghost-%COMP%]{display:flex;gap:1rem}"]})}}return t})();var RT={component:ql,html:`<ard-button appearance="raised-strong" icon="favorite">Normal</ard-button>\r
<ard-button appearance="raised-strong" icon="favorite" compact>Compact</ard-button>\r
`,scss:`:host {\r
  display: flex;\r
  gap: 1rem;\r
}`,ts:`import { Component } from '@angular/core';
import { ArdiumButtonModule } from '@ardium-ui/ui';

@Component({
  selector: 'button-compact-example',
  templateUrl: './button-compact-example.html',
  styleUrl: './button-compact-example.scss',
  standalone: true,
  imports: [ArdiumButtonModule],
})
export class ButtonCompactExample {
  
}
`};var Ql=(()=>{class t{onClick(){console.log("Button clicked!")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["button-disabled-example"]],decls:4,vars:0,consts:[["disabled","",3,"click"],["disabled","","pointerEventsWhenDisabled","","title","This button is disabled!",3,"click"]],template:function(i,r){i&1&&(o(0,"ard-button",0),_("click",function(){return r.onClick()}),s(1,"Disabled"),a(),o(2,"ard-button",1),_("click",function(){return r.onClick()}),s(3,"Disabled with pointer events"),a())},dependencies:[Qe,st],styles:["[_nghost-%COMP%]{display:flex;gap:1rem}"]})}}return t})();var NT={component:Ql,html:`<ard-button disabled (click)="onClick()">Disabled</ard-button>\r
<ard-button disabled pointerEventsWhenDisabled (click)="onClick()" title="This button is disabled!">Disabled with pointer events</ard-button>\r
`,scss:`:host {\r
  display: flex;\r
  gap: 1rem;\r
}`,ts:`import { Component } from '@angular/core';\r
import { ArdiumButtonModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'button-disabled-example',\r
  templateUrl: './button-disabled-example.html',\r
  styleUrl: './button-disabled-example.scss',\r
  standalone: true,\r
  imports: [ArdiumButtonModule],\r
})\r
export class ButtonDisabledExample {\r
  onClick() {\r
    console.log('Button clicked!');\r
  }\r
}\r
`};var Gl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["button-icon-example"]],decls:13,vars:0,consts:[["appearance","raised-strong","icon","delete","color","danger"],["appearance","raised-strong","icon","send","alignIcon","right"],["appearance","raised-strong","color","primary"],["version","1.1","xmlns","http://www.w3.org/2000/svg","x","0px","y","0px","viewBox","0 0 24 24",2,"enable-background","new 0 0 24 24"],["d",`M5.31,19.875c-1.403,0-2.25-0.912-2.31-2.181c0-2.585,2.792-3.476,7-3.506
		c4.215,0.04,7.015,0.932,7,3.506c-0.067,1.27-0.91,2.181-2.31,2.181H5.31z`,1,"st0"],["d",`M10,11.344c1.993,0,3.609-1.616,3.609-3.609S11.993,4.125,10,4.125S6.391,5.741,6.391,7.734
		S8.007,11.344,10,11.344z`,1,"st0"],["x1","18.4","y1","13.1","x2","18.4","y2","7.9",1,"st0"],["x1","15.8","y1","10.6","x2","21","y2","10.6",1,"st0"]],template:function(i,r){i&1&&(o(0,"ard-button",0),s(1,"Delete"),a(),o(2,"ard-button",1),s(3,"Send"),a(),o(4,"ard-button",2),ln(),o(5,"svg",3)(6,"g"),b(7,"path",4)(8,"path",5),a(),o(9,"g"),b(10,"line",6)(11,"line",7),a()(),s(12,` Custom
`),a())},dependencies:[Qe,st],styles:["[_nghost-%COMP%]{display:flex;gap:1rem}ard-button[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{height:1.5rem;width:1.5rem;fill:currentColor}"]})}}return t})();var zT={component:Gl,html:`<ard-button appearance="raised-strong" icon="delete" color="danger">Delete</ard-button>\r
<ard-button appearance="raised-strong" icon="send" alignIcon="right">Send</ard-button>\r
\r
<ard-button appearance="raised-strong" color="primary">\r
  <svg\r
    version="1.1"\r
    xmlns="http://www.w3.org/2000/svg"\r
    x="0px"\r
    y="0px"\r
    viewBox="0 0 24 24"\r
    style="enable-background: new 0 0 24 24"\r
  >\r
    <g>\r
      <path\r
        class="st0"\r
        d="M5.31,19.875c-1.403,0-2.25-0.912-2.31-2.181c0-2.585,2.792-3.476,7-3.506\r
		c4.215,0.04,7.015,0.932,7,3.506c-0.067,1.27-0.91,2.181-2.31,2.181H5.31z"\r
      />\r
      <path\r
        class="st0"\r
        d="M10,11.344c1.993,0,3.609-1.616,3.609-3.609S11.993,4.125,10,4.125S6.391,5.741,6.391,7.734\r
		S8.007,11.344,10,11.344z"\r
      />\r
    </g>\r
    <g>\r
      <line class="st0" x1="18.4" y1="13.1" x2="18.4" y2="7.9" />\r
      <line class="st0" x1="15.8" y1="10.6" x2="21" y2="10.6" />\r
    </g>\r
  </svg>\r
  Custom\r
</ard-button>\r
`,scss:`:host {\r
  display: flex;\r
  gap: 1rem;\r
}\r
ard-button > svg {\r
  height: 1.5rem;\r
  width: 1.5rem;\r
  fill: currentColor;\r
}`,ts:`import { Component } from '@angular/core';\r
import { ArdiumButtonModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'button-icon-example',\r
  templateUrl: './button-icon-example.html',\r
  styleUrl: './button-icon-example.scss',\r
  standalone: true,\r
  imports: [ArdiumButtonModule],\r
})\r
export class ButtonIconExample {\r
  \r
}\r
`};var Xl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["button-link-example"]],decls:2,vars:0,consts:[["ard-button","","href","https://google.com","target","_blank","rel","noopener noreferrer"]],template:function(i,r){i&1&&(o(0,"a",0),s(1,` Open Google
`),a())},dependencies:[Qe,va],encapsulation:2})}}return t})();var XT={component:Xl,html:`<a ard-button href="https://google.com" target="_blank" rel="noopener noreferrer">\r
  Open Google\r
</a>`,ts:`import { Component } from '@angular/core';
import { ArdiumButtonModule } from '@ardium-ui/ui';

@Component({
  selector: 'button-link-example',
  templateUrl: './button-link-example.html',
  standalone: true,
  imports: [ArdiumButtonModule],
})

export class ButtonLinkExample {
  
}
`};var Zl=(()=>{class t{constructor(){this.modalOpen=S(!1),this.dialogOpen=S(!1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["dialog-basic-example"]],decls:8,vars:2,consts:[[3,"click"],["heading","Basic modal example",3,"openChange","open"],["heading","Basic dialog example",3,"openChange","open"]],template:function(i,r){i&1&&(o(0,"button",0),_("click",function(){return r.modalOpen.set(!0)}),s(1,"Open modal"),a(),o(2,"button",0),_("click",function(){return r.dialogOpen.set(!0)}),s(3,"Open dialog"),a(),o(4,"ard-modal",1),q("openChange",function(c){return K(r.modalOpen,c)||(r.modalOpen=c),c}),s(5,` This is the modal content
`),a(),o(6,"ard-dialog",2),q("openChange",function(c){return K(r.dialogOpen,c)||(r.dialogOpen=c),c}),s(7,` This is the dialog content
`),a()),i&2&&(d(4),z("open",r.modalOpen),d(2),z("open",r.dialogOpen))},dependencies:[ba,Ca,bi,Ci],styles:["button[_ngcontent-%COMP%]{margin-right:.5rem}"]})}}return t})();var rD={component:Zl,html:`<button (click)="modalOpen.set(true)">Open modal</button>\r
<button (click)="dialogOpen.set(true)">Open dialog</button>\r
\r
<ard-modal [(open)]="modalOpen" heading="Basic modal example">\r
  This is the modal content\r
</ard-modal>\r
\r
<ard-dialog [(open)]="dialogOpen" heading="Basic dialog example">\r
  This is the dialog content\r
</ard-dialog>`,scss:`button {\r
  margin-right: 0.5rem;\r
}`,ts:`import { Component, signal } from '@angular/core';
import { ArdiumDialogModule, ArdiumModalModule } from '@ardium-ui/ui';

@Component({
  selector: 'dialog-basic-example',
  templateUrl: './dialog-basic-example.html',
  styleUrl: './dialog-basic-example.scss',
  standalone: true,
  imports: [ArdiumModalModule, ArdiumDialogModule],
})
export class DialogBasicExample {
  readonly modalOpen = signal<boolean>(false);

  readonly dialogOpen = signal<boolean>(false);
}
`};var Jl=(()=>{class t{constructor(){this.deleteConfirmationOpen=S(!1),this.canDelete=S(!1),this._timeout=null}openDeleteConfirmation(){this.deleteConfirmationOpen.set(!0),this.canDelete.set(!1),this._timeout=setTimeout(()=>{this.canDelete.set(!0)},3e3)}ngOnDestroy(){this._timeout&&clearTimeout(this._timeout)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["dialog-delete-confirmation-example"]],decls:4,vars:2,consts:[["appearance","outlined-strong","color","danger",3,"click"],["heading","Delete confirmation","rejectButtonText","Keep","rejectButtonAppearance","transparent","confirmButtonText","Delete","confirmButtonColor","danger","confirmButtonAppearance","outlined-strong",3,"openChange","open","canConfirm"]],template:function(i,r){i&1&&(o(0,"ard-button",0),_("click",function(){return r.openDeleteConfirmation()}),s(1,"Delete something"),a(),o(2,"ard-dialog",1),q("openChange",function(c){return K(r.deleteConfirmationOpen,c)||(r.deleteConfirmationOpen=c),c}),s(3,` Are you sure you want to delete this?
`),a()),i&2&&(d(2),z("open",r.deleteConfirmationOpen),p("canConfirm",r.canDelete()))},dependencies:[bi,Ci,Qe,st],encapsulation:2})}}return t})();var uD={component:Jl,html:`<ard-button appearance="outlined-strong" color="danger" (click)="openDeleteConfirmation()">Delete something</ard-button>\r
\r
<ard-dialog\r
  heading="Delete confirmation"\r
  [(open)]="deleteConfirmationOpen"\r
  rejectButtonText="Keep"\r
  rejectButtonAppearance="transparent"\r
  confirmButtonText="Delete"\r
  confirmButtonColor="danger"\r
  confirmButtonAppearance="outlined-strong"\r
  [canConfirm]="canDelete()"\r
>\r
  Are you sure you want to delete this?\r
</ard-dialog>\r
`,scss:"",ts:`import { Component, OnDestroy, signal } from '@angular/core';
import { ArdiumButtonModule, ArdiumDialogModule } from "@ardium-ui/ui";

@Component({
  selector: 'dialog-delete-confirmation-example',
  templateUrl: './dialog-delete-confirmation-example.html',
  styleUrl: './dialog-delete-confirmation-example.scss',
  standalone: true,
  imports: [ArdiumDialogModule, ArdiumButtonModule],
})
export class DialogDeleteConfirmationExample implements OnDestroy {
  readonly deleteConfirmationOpen = signal<boolean>(false);

  readonly canDelete = signal<boolean>(false);

  private _timeout: ReturnType<typeof setTimeout> | null = null;
  openDeleteConfirmation() {
    this.deleteConfirmationOpen.set(true);
    this.canDelete.set(false);

    this._timeout = setTimeout(() => {
      this.canDelete.set(true);
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
  }
}
`};function K0(t,n){if(t&1&&(o(0,"tr")(1,"td")(2,"code"),s(3),a()(),o(4,"td")(5,"code"),s(6),a()()()),t&2){let e=n.$implicit;d(3),w("(",e[0],")"),d(3),w("$event = ",e[1],"")}}function q0(t,n){t&1&&(o(0,"tr")(1,"td"),s(2,"Emitted events will be shown here."),a()())}var ed=(()=>{class t{constructor(){this.dialogOpen=S(!1),this.dialogEventLog=S([])}addEvent(e,i){this.dialogEventLog.update(r=>[...r,[e,typeof i=="string"?`"${i}"`:String(i)]])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["dialog-emitted-events-example"]],decls:11,vars:2,consts:[[3,"click"],["heading","Dialog events",3,"openChange","close","reject","confirm","open"]],template:function(i,r){i&1&&(o(0,"button",0),_("click",function(){return r.dialogOpen.set(!0)}),s(1,"Open dialog"),a(),o(2,"table")(3,"tbody"),U(4,K0,7,2,"tr",null,X,!1,q0,3,0,"tr"),a()(),o(7,"ard-dialog",1),q("openChange",function(c){return K(r.dialogOpen,c)||(r.dialogOpen=c),c}),_("openChange",function(c){return r.addEvent("openChange",c)})("close",function(c){return r.addEvent("close",c)})("reject",function(){return r.addEvent("reject")})("confirm",function(){return r.addEvent("confirm")}),s(8,` Dialog content
`),a(),o(9,"button",0),_("click",function(){return r.dialogEventLog.set([])}),s(10,"Clear events"),a()),i&2&&(d(4),N(r.dialogEventLog()),d(3),z("open",r.dialogOpen))},dependencies:[bi,Ci],styles:["table[_ngcontent-%COMP%]{margin-top:1rem;max-width:20rem}"]})}}return t})();var vD={component:ed,html:`<button (click)="dialogOpen.set(true)">Open dialog</button>\r
\r
<table>\r
  <tbody>\r
    @for (event of dialogEventLog(); track $index) {\r
    <tr>\r
      <td><code>({{ event[0] }})</code></td>\r
      <td><code>$event = {{ event[1] }}</code></td>\r
    </tr>\r
    } @empty {\r
    <tr>\r
      <td>Emitted events will be shown here.</td>\r
    </tr>\r
    }\r
  </tbody>\r
</table>\r
\r
<ard-dialog\r
  heading="Dialog events"\r
  [(open)]="dialogOpen"\r
  (openChange)="addEvent('openChange', $event)"\r
  (close)="addEvent('close', $event)"\r
  (reject)="addEvent('reject')"\r
  (confirm)="addEvent('confirm')"\r
>\r
  Dialog content\r
</ard-dialog>\r
\r
<button (click)="dialogEventLog.set([])">Clear events</button>\r
`,scss:`\r
table {\r
  margin-top: 1rem;\r
  max-width: 20rem;\r
}`,simpleHtml:`<ard-dialog\r
  heading="Dialog events"\r
  [(open)]="dialogOpen"\r
  (openChange)="addEvent('openChange', $event)"\r
  (close)="addEvent('close', $event)"\r
  (reject)="addEvent('reject')"\r
  (confirm)="addEvent('confirm')"\r
>\r
  Dialog content\r
</ard-dialog>\r
`,ts:`import { Component, signal } from '@angular/core';
import { ArdiumDialogModule } from '@ardium-ui/ui';

@Component({
  selector: 'dialog-emitted-events-example',
  templateUrl: './dialog-emitted-events-example.html',
  styleUrl: './dialog-emitted-events-example.scss',
  standalone: true,
  imports: [ArdiumDialogModule],
})
export class DialogEmittedEventsExample {
  readonly dialogOpen = signal<boolean>(false);

  readonly dialogEventLog = signal<[string, any][]>([]);

  addEvent(name: string, event?: any) {
    this.dialogEventLog.update(v => [...v, [name, typeof event === 'string' ? \`"\${event}"\` : String(event)]]);
  }
}
`};function Q0(t,n){t&1&&(o(0,"ard-error"),s(1,"Please enter a valid name"),a())}var td=(()=>{class t{constructor(){this.nameControl=new zi("",[Mt.pattern(/^[A-Z]{2,} [A-Z]{2,}$/i)])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["form-field-basic-example"]],decls:7,vars:2,consts:[["reserveHintLine",""],[3,"formControl"]],template:function(i,r){i&1&&(o(0,"ard-form-field",0)(1,"ard-label"),s(2,"Full Name"),a(),b(3,"ard-input",1),o(4,"ard-hint"),s(5,"Write your first name and surname"),a(),g(6,Q0,2,0,"ard-error"),a()),i&2&&(d(3),p("formControl",r.nameControl),d(3),y(r.nameControl.touched&&r.nameControl.errors?6:-1))},dependencies:[_i,gi,Ot,fl,qn,mi,pi,kn,ce,qi],styles:["ard-form-field[_ngcontent-%COMP%]{max-width:35ch}"]})}}return t})();var TD={component:td,html:`<ard-form-field reserveHintLine>\r
  <ard-label>Full Name</ard-label>\r
  <ard-input [formControl]="nameControl" />\r
  <ard-hint>Write your first name and surname</ard-hint>\r
  @if (nameControl.touched && nameControl.errors) {\r
    <ard-error>Please enter a valid name</ard-error>\r
  }\r
</ard-form-field>\r
`,scss:`ard-form-field {\r
  max-width: 35ch;\r
}`,ts:`import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArdiumFormFieldModule, ArdiumInputModule } from '@ardium-ui/ui';

@Component({
  selector: 'form-field-basic-example',
  templateUrl: './form-field-basic-example.html',
  styleUrl: './form-field-basic-example.scss',
  standalone: true,
  imports: [ArdiumFormFieldModule, ArdiumInputModule, ReactiveFormsModule],
})
export class FormFieldBasicExample {
  readonly nameControl = new FormControl<string>('', [Validators.pattern(/^[A-Z]{2,} [A-Z]{2,}$/i)]);
}
`};function G0(t,n){t&1&&(Ii(0,3),o(1,"ard-error"),s(2,"Please enter a valid passport number"),a(),o(3,"ard-error"),s(4,"Please enter a valid passport number 2"),a(),o(5,"ard-error"),s(6,"Please enter a valid passport number 3"),a(),Mi())}var id=(()=>{class t{constructor(){this.passportControl=new zi("",[Mt.pattern(/^[A-Z\d]{9}$/i)])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["form-field-character-counter-example"]],decls:7,vars:3,consts:[["reserveHintLine",""],["placeholder","XXXXXXXXX","maxLength","9",3,"formControl"],["right",""],["ard-error",""]],template:function(i,r){if(i&1&&(o(0,"ard-form-field",0)(1,"ard-label"),s(2,"Passport Number"),a(),b(3,"ard-input",1),o(4,"ard-hint-error",2),s(5),a(),g(6,G0,7,0,"ng-container",3),a()),i&2){let l;d(3),p("formControl",r.passportControl),d(2),w("",(l=r.passportControl.value==null?null:r.passportControl.value.length)!==null&&l!==void 0?l:0,"/9"),d(),y(r.passportControl.touched&&r.passportControl.errors?6:-1)}},dependencies:[_i,gi,Ot,qn,hl,mi,pi,kn,ce,qi],styles:["ard-form-field[_ngcontent-%COMP%]{max-width:25ch}"]})}}return t})();var ID={component:id,html:`<ard-form-field reserveHintLine>\r
  <ard-label>Passport Number</ard-label>\r
  <ard-input [formControl]="passportControl" placeholder="XXXXXXXXX" maxLength="9" />\r
\r
  <ard-hint-error right>{{ passportControl.value?.length ?? 0 }}/9</ard-hint-error>\r
\r
  @if (passportControl.touched && passportControl.errors) {\r
  <ng-container ard-error>\r
    <ard-error>Please enter a valid passport number</ard-error>\r
    <ard-error>Please enter a valid passport number 2</ard-error>\r
    <ard-error>Please enter a valid passport number 3</ard-error>\r
  </ng-container>\r
  }\r
</ard-form-field>\r
`,scss:`ard-form-field {\r
  max-width: 25ch;\r
}`,ts:`import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArdiumFormFieldModule, ArdiumInputModule } from '@ardium-ui/ui';

@Component({
  selector: 'form-field-character-counter-example',
  templateUrl: './form-field-character-counter-example.html',
  styleUrl: './form-field-character-counter-example.scss',
  standalone: true,
  imports: [ArdiumFormFieldModule, ArdiumInputModule, ReactiveFormsModule],
})
export class FormFieldCharacterCounterExample {
  readonly passportControl = new FormControl<string>('', [Validators.pattern(/^[A-Z\\d]{9}$/i)]);
}
`};var nd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["form-field-required-optional-labels-example"]],decls:12,vars:0,consts:[["required",""],["optional",""]],template:function(i,r){i&1&&(o(0,"ard-form-field")(1,"ard-label"),s(2,"Normal label"),a(),b(3,"ard-input"),a(),o(4,"ard-form-field")(5,"ard-label",0),s(6,"Required label"),a(),b(7,"ard-input"),a(),o(8,"ard-form-field")(9,"ard-label",1),s(10,"Optional label"),a(),b(11,"ard-input"),a())},dependencies:[_i,gi,Ot,mi,pi],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;gap:1rem}ard-form-field[_ngcontent-%COMP%]{width:12.5rem}"]})}}return t})();var OD={component:nd,html:`<ard-form-field>\r
  <ard-label>Normal label</ard-label>\r
  <ard-input />\r
</ard-form-field>\r
\r
<ard-form-field>\r
  <ard-label required>Required label</ard-label>\r
  <ard-input />\r
</ard-form-field>\r
\r
<ard-form-field>\r
  <ard-label optional>Optional label</ard-label>\r
  <ard-input />\r
</ard-form-field>`,scss:`:host {\r
  display: flex;\r
  justify-content: space-between;\r
  flex-wrap: wrap;\r
  gap: 1rem;\r
}\r
ard-form-field {\r
  width: 12.5rem;\r
}`,ts:`import { Component } from '@angular/core';
import { ArdiumFormFieldModule, ArdiumInputModule } from '@ardium-ui/ui';

@Component({
  selector: 'form-field-required-optional-labels-example',
  templateUrl: './form-field-required-optional-labels-example.html',
  styleUrl: './form-field-required-optional-labels-example.scss',
  standalone: true,
  imports: [ArdiumFormFieldModule, ArdiumInputModule],
})
export class FormFieldRequiredOptionalLabelsExample {
  
}
`};var rd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["kbd-appearances-example"]],decls:13,vars:0,consts:[[1,"grid"],["appearance","outlined"],["appearance","filled"],["appearance","transparent"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"ard-kbd",1),s(2,"Ctrl"),a(),o(3,"ard-kbd",2),s(4,"Ctrl"),a(),o(5,"ard-kbd",3),s(6,"Ctrl"),a(),o(7,"ard-kbd-shortcut",1),s(8,"Ctrl+C"),a(),o(9,"ard-kbd-shortcut",2),s(10,"Ctrl+C"),a(),o(11,"ard-kbd-shortcut",3),s(12,"Ctrl+C"),a()())},dependencies:[De,Ge,yi,vi],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:max-content max-content max-content;gap:1rem}"]})}}return t})();var UD={component:rd,html:`<div class="grid">\r
  <ard-kbd appearance="outlined">Ctrl</ard-kbd>\r
  <ard-kbd appearance="filled">Ctrl</ard-kbd>\r
  <ard-kbd appearance="transparent">Ctrl</ard-kbd>\r
\r
  <ard-kbd-shortcut appearance="outlined">Ctrl+C</ard-kbd-shortcut>\r
  <ard-kbd-shortcut appearance="filled">Ctrl+C</ard-kbd-shortcut>\r
  <ard-kbd-shortcut appearance="transparent">Ctrl+C</ard-kbd-shortcut>\r
</div>\r
`,scss:`.grid {\r
  display: grid;\r
  grid-template-columns: max-content max-content max-content;\r
  gap: 1rem;\r
}`,ts:`import { Component } from "@angular/core";\r
import { ArdiumKbdModule, ArdiumKbdShortcutModule } from "@ardium-ui/ui";\r
\r
@Component({\r
  selector: 'kbd-appearances-example',\r
  templateUrl: 'kbd-appearances-example.html',\r
  standalone: true,\r
  styleUrl: 'kbd-appearances-example.scss',\r
  imports: [ArdiumKbdModule, ArdiumKbdShortcutModule],\r
})\r
export class KbdAppearancesExample {}`};var ad=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["kbd-basic-example"]],decls:4,vars:0,template:function(i,r){i&1&&(s(0,"Press "),o(1,"ard-kbd"),s(2,"Shift"),a(),s(3," to continue."))},dependencies:[De,Ge],encapsulation:2})}}return t})();var WD={component:ad,html:"Press <ard-kbd>Shift</ard-kbd> to continue.",ts:`import { Component } from "@angular/core";\r
import { ArdiumKbdModule } from "@ardium-ui/ui";\r
\r
@Component({\r
  selector: 'kbd-basic-example',\r
  templateUrl: 'kbd-basic-example.html',\r
  standalone: true,\r
  imports: [ArdiumKbdModule],\r
})\r
export class KbdBasicExample {}`};var od=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["kbd-directive-example"]],decls:4,vars:0,consts:[["ardKbd",""]],template:function(i,r){i&1&&(s(0,"Press "),o(1,"kbd",0),s(2,"Vol. Down"),a(),s(3," to continue."))},dependencies:[De,gl],encapsulation:2})}}return t})();var GD={component:od,html:"Press <kbd ardKbd>Vol. Down</kbd> to continue.",ts:`import { Component } from "@angular/core";\r
import { ArdiumKbdModule } from "@ardium-ui/ui";\r
\r
@Component({\r
  selector: 'kbd-directive-example',\r
  templateUrl: 'kbd-directive-example.html',\r
  standalone: true,\r
  imports: [ArdiumKbdModule],\r
})\r
export class KbdDirectiveExample {}`};var sd=(()=>{class t{constructor(){this.keys=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],this._currentKeyIndex=S(0),this.currentKey=I(()=>this.keys[this._currentKeyIndex()])}ngOnInit(){this._interval=setInterval(()=>{this._currentKeyIndex()===this.keys.length-1?this._currentKeyIndex.set(0):this._currentKeyIndex.update(e=>e+1)},1e3)}ngOnDestroy(){this._interval&&clearInterval(this._interval)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["kbd-dynamic-example"]],decls:1,vars:1,consts:[[3,"key"]],template:function(i,r){i&1&&b(0,"ard-kbd",0),i&2&&p("key",r.currentKey())},dependencies:[De,Ge],encapsulation:2})}}return t})();var nS={component:sd,html:'<ard-kbd [key]="currentKey()" />',ts:`import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';\r
import { ArdiumKbdModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'kbd-dynamic-example',\r
  templateUrl: 'kbd-dynamic-example.html',\r
  standalone: true,\r
  imports: [ArdiumKbdModule],\r
})\r
export class KbdDynamicExample implements OnInit, OnDestroy {\r
  readonly keys: string[] = [\r
    'A',\r
    'B',\r
    'C',\r
    'D',\r
    'E',\r
    'F',\r
    'G',\r
    'H',\r
    'I',\r
    'J',\r
    'K',\r
    'L',\r
    'M',\r
    'N',\r
    'O',\r
    'P',\r
    'Q',\r
    'R',\r
    'S',\r
    'T',\r
    'U',\r
    'V',\r
    'W',\r
    'X',\r
    'Y',\r
    'Z',\r
  ];\r
  private readonly _currentKeyIndex = signal<number>(0);\r
\r
  public readonly currentKey = computed(() => this.keys[this._currentKeyIndex()]);\r
  \r
  private _interval: any;\r
  ngOnInit(): void {\r
    this._interval = setInterval(() => {\r
      if (this._currentKeyIndex() === this.keys.length - 1) this._currentKeyIndex.set(0);\r
      else this._currentKeyIndex.update(v => v + 1);\r
    }, 1000);\r
  }\r
  ngOnDestroy(): void {\r
    if (!this._interval) return;\r
\r
    clearInterval(this._interval);\r
  }\r
}\r
`};var ld=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["kbd-full-example"]],decls:12,vars:0,consts:[["full",""]],template:function(i,r){i&1&&(o(0,"ard-kbd",0),s(1,"KeyF"),a(),o(2,"ard-kbd",0),s(3,"Digit3"),a(),o(4,"ard-kbd",0),s(5,"ArrowUp"),a(),o(6,"ard-kbd",0),s(7,"Tab"),a(),o(8,"ard-kbd",0),s(9,"MetaLeft"),a(),o(10,"ard-kbd",0),s(11,"AudioVolumeDown"),a())},dependencies:[De,Ge],encapsulation:2})}}return t})();var lS={component:ld,html:`<ard-kbd full>KeyF</ard-kbd>\r
<ard-kbd full>Digit3</ard-kbd>\r
<ard-kbd full>ArrowUp</ard-kbd>\r
<ard-kbd full>Tab</ard-kbd>\r
<ard-kbd full>MetaLeft</ard-kbd>\r
<ard-kbd full>AudioVolumeDown</ard-kbd>`,ts:`import { Component } from '@angular/core';\r
import { ArdiumKbdModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'kbd-full-example',\r
  templateUrl: 'kbd-full-example.html',\r
  standalone: true,\r
  imports: [ArdiumKbdModule],\r
})\r
export class KbdFullExample {}\r
`};var dd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["kbd-shortcut-example"]],decls:4,vars:0,template:function(i,r){i&1&&(s(0,"Press "),o(1,"ard-kbd-shortcut"),s(2,"Ctrl+C"),a(),s(3," to copy."))},dependencies:[yi,vi],encapsulation:2})}}return t})();var mS={component:dd,html:"Press <ard-kbd-shortcut>Ctrl+C</ard-kbd-shortcut> to copy.",ts:`import { Component } from "@angular/core";\r
import { ArdiumKbdShortcutModule } from "@ardium-ui/ui";\r
\r
@Component({\r
  selector: 'kbd-shortcut-example',\r
  templateUrl: 'kbd-shortcut-example.html',\r
  standalone: true,\r
  imports: [ArdiumKbdShortcutModule],\r
})\r
export class KbdShortcutExample {}`};var cd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["kbd-translation-example"]],decls:12,vars:0,template:function(i,r){i&1&&(o(0,"ard-kbd"),s(1,"KeyF"),a(),o(2,"ard-kbd"),s(3,"Digit3"),a(),o(4,"ard-kbd"),s(5,"ArrowUp"),a(),o(6,"ard-kbd"),s(7,"Tab"),a(),o(8,"ard-kbd"),s(9,"MetaLeft"),a(),o(10,"ard-kbd"),s(11,"AudioVolumeDown"),a())},dependencies:[De,Ge],encapsulation:2})}}return t})();var vS={component:cd,html:`<ard-kbd>KeyF</ard-kbd>\r
<ard-kbd>Digit3</ard-kbd>\r
<ard-kbd>ArrowUp</ard-kbd>\r
<ard-kbd>Tab</ard-kbd>\r
<ard-kbd>MetaLeft</ard-kbd>\r
<ard-kbd>AudioVolumeDown</ard-kbd>`,ts:`import { Component } from '@angular/core';\r
import { ArdiumKbdModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'kbd-translation-example',\r
  templateUrl: 'kbd-translation-example.html',\r
  standalone: true,\r
  imports: [ArdiumKbdModule],\r
})\r
export class KbdTranslationExample {}\r
`};var ud=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["slider-basic-example"]],decls:1,vars:0,template:function(i,r){i&1&&b(0,"ard-slider")},dependencies:[fi,hi],encapsulation:2})}}return t})();var wS={component:ud,html:"<ard-slider />",ts:`import { Component } from '@angular/core';
import { ArdiumSliderModule } from '@ardium-ui/ui';

@Component({
  selector: 'slider-basic-example',
  templateUrl: './slider-basic-example.html',
  standalone: true,
  imports: [ArdiumSliderModule],
})
export class SliderBasicExample {
  
}
`};var X0=()=>({value:0,label:"Min"}),Z0=()=>({value:25,label:"Low"}),J0=()=>({value:50,label:"Medium"}),ev=()=>({value:75,label:"High"}),tv=()=>({value:100,label:"Max"}),iv=(t,n,e,i,r)=>[t,n,e,i,r],pd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["slider-label-objects-example"]],decls:1,vars:12,consts:[["showValueTicks","",3,"labels"]],template:function(i,r){i&1&&b(0,"ard-slider",0),i&2&&p("labels",Xa(6,iv,ti(1,X0),ti(2,Z0),ti(3,J0),ti(4,ev),ti(5,tv)))},dependencies:[fi,hi],styles:["ard-slider[_ngcontent-%COMP%]{max-width:15rem}"]})}}return t})();var AS={component:pd,html:`<ard-slider\r
  showValueTicks\r
  [labels]="[\r
    { value: 0, label: 'Min' },\r
    { value: 25, label: 'Low' },\r
    { value: 50, label: 'Medium' },\r
    { value: 75, label: 'High' },\r
    { value: 100, label: 'Max' }\r
  ]"\r
/>\r
`,scss:`ard-slider {\r
  max-width: 15rem;\r
}`,ts:`import { Component } from '@angular/core';
import { ArdiumSliderModule } from '@ardium-ui/ui';

@Component({
  selector: 'slider-label-objects-example',
  templateUrl: './slider-label-objects-example.html',
  styleUrl: './slider-label-objects-example.scss',
  standalone: true,
  imports: [ArdiumSliderModule],
})
export class SliderLabelObjectsExample {}
`};var md=(()=>{class t{constructor(){this.value=S(5)}formatTooltipFn(e){let i=["KB","MB","GB","TB"],r=0,l=2**e;for(;l>=1024&&r<i.length-1;)r+=1,l/=1024;return`${l} ${i[r]}`}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["slider-non-linear-example"]],decls:5,vars:4,consts:[["min","0","max","30",3,"valueChange","value","tooltipFormatFn"]],template:function(i,r){i&1&&(o(0,"ard-slider",0),q("valueChange",function(c){return K(r.value,c)||(r.value=c),c}),a(),o(1,"p"),s(2),a(),o(3,"p"),s(4),a()),i&2&&(z("value",r.value),p("tooltipFormatFn",r.formatTooltipFn),d(2),w("Actual value: ",r.value(),""),d(2),w("Formatted value: ",r.formatTooltipFn(r.value()),""))},dependencies:[fi,hi],styles:["ard-slider[_ngcontent-%COMP%]{margin-bottom:1rem;max-width:15rem}"]})}}return t})();var OS={component:md,html:`<ard-slider [(value)]="value" [tooltipFormatFn]="formatTooltipFn" min="0" max="30" />\r
\r
<p>Actual value: {{ value() }}</p>\r
<p>Formatted value: {{ formatTooltipFn(value()) }}</p>`,scss:`ard-slider {\r
  margin-bottom: 1rem;\r
  max-width: 15rem;\r
}`,ts:`import { Component, signal } from '@angular/core';
import { ArdiumSliderModule } from '@ardium-ui/ui';

@Component({
  selector: 'slider-non-linear-example',
  templateUrl: './slider-non-linear-example.html',
  styleUrl: './slider-non-linear-example.scss',
  standalone: true,
  imports: [ArdiumSliderModule],
})
export class SliderNonLinearExample {
  readonly value = signal<number>(5);

  formatTooltipFn(value: number) {
    const units = ['KB', 'MB', 'GB', 'TB'];

    let unitIndex = 0;
    let scaledValue = 2 ** value;

    while (scaledValue >= 1024 && unitIndex < units.length - 1) {
      unitIndex += 1;
      scaledValue /= 1024;
    }

    return \`\${scaledValue} \${units[unitIndex]}\`;
  }
}
`};var hd=(()=>{class t{constructor(){this.value=S({from:30,to:80})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["slider-range-example"]],decls:3,vars:3,consts:[[3,"valueChange","value"]],template:function(i,r){i&1&&(o(0,"ard-range-slider",0),q("valueChange",function(c){return K(r.value,c)||(r.value=c),c}),a(),o(1,"p"),s(2),a()),i&2&&(z("value",r.value),d(2),ei("Selected range: ",r.value().from," \u2013 ",r.value().to,""))},dependencies:[$n,Yn],styles:["ard-range-slider[_ngcontent-%COMP%]{display:block;margin-bottom:1rem;max-width:15rem}"]})}}return t})();var jS={component:hd,html:`<ard-range-slider [(value)]="value" />\r
\r
<p>Selected range: {{ value().from }} \u2013 {{ value().to }}</p>`,scss:`ard-range-slider {\r
  display: block;\r
  margin-bottom: 1rem;\r
  max-width: 15rem;\r
}`,ts:`import { Component, signal } from '@angular/core';
import { ArdiumRangeSliderModule, SliderRange } from '@ardium-ui/ui';

@Component({
  selector: 'slider-range-example',
  templateUrl: './slider-range-example.html',
  styleUrl: './slider-range-example.scss',
  standalone: true,
  imports: [ArdiumRangeSliderModule],
})
export class SliderRangeExample {
  readonly value = signal<SliderRange>({ from: 30, to: 80 });
}
`};var fd=(()=>{class t{constructor(){this.value=S({from:30,to:80}),this.selectionBehavior=S(Gt.Allow),this.minimumDistance=S(0)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["slider-range-selection-behaviors-example"]],decls:19,vars:9,consts:[[3,"valueChange","value"],["value","allow"],["value","push"],["value","block"],["for","minimumDistance"],["type","number","id","minimumDistance","min","0",3,"ngModelChange","ngModel"],[3,"valueChange","value","selectionBehavior","minimumDistance"]],template:function(i,r){i&1&&(o(0,"ard-radio-group",0),q("valueChange",function(c){return K(r.selectionBehavior,c)||(r.selectionBehavior=c),c}),o(1,"ard-radio",1)(2,"code"),s(3,"'allow'"),a()(),o(4,"ard-radio",2)(5,"code"),s(6,"'push'"),a()(),o(7,"ard-radio",3)(8,"code"),s(9,"'block'"),a()()(),o(10,"div")(11,"label",4),s(12," Minimum distance: "),a(),o(13,"input",5),q("ngModelChange",function(c){return K(r.minimumDistance,c)||(r.minimumDistance=c),c}),a()(),o(14,"ard-range-slider",6),q("valueChange",function(c){return K(r.value,c)||(r.value=c),c}),a(),o(15,"p"),s(16),a(),o(17,"pre"),s(18),a()),i&2&&(z("value",r.selectionBehavior),d(13),z("ngModel",r.minimumDistance),d(),z("value",r.value),p("selectionBehavior",r.selectionBehavior())("minimumDistance",r.minimumDistance()),d(2),ei("Selected range: ",r.value().from," \u2013 ",r.value().to,""),d(2),ei(`<ard-range-slider
  [(value)]="value"
  [selectionBehavior]="`,r.selectionBehavior(),`"
  [minimumDistance]="`,r.minimumDistance(),`"
/>
`))},dependencies:[$n,Yn,sl,ol,Rn,ue,fe,Ki,ce,Wr,_e],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem}ard-radio-group[_ngcontent-%COMP%]{flex-direction:column}label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6ch;-webkit-user-select:none;user-select:none}"]})}}return t})();var GS={component:fd,html:`<ard-radio-group [(value)]="selectionBehavior">\r
  <ard-radio value="allow"><code>'allow'</code></ard-radio>\r
  <ard-radio value="push"><code>'push'</code></ard-radio>\r
  <ard-radio value="block"><code>'block'</code></ard-radio>\r
</ard-radio-group>\r
\r
<div>\r
  <label for="minimumDistance"> Minimum distance: </label>\r
  <input type="number" id="minimumDistance" [(ngModel)]="minimumDistance" min="0" />\r
</div>\r
\r
<ard-range-slider [(value)]="value" [selectionBehavior]="selectionBehavior()" [minimumDistance]="minimumDistance()" />\r
\r
<p>Selected range: {{ value().from }} \u2013 {{ value().to }}</p>\r
\r
<pre>\r
&lt;ard-range-slider\r
  [(value)]="value"\r
  [selectionBehavior]="{{ selectionBehavior() }}"\r
  [minimumDistance]="{{ minimumDistance() }}"\r
/&gt;\r
</pre>\r
`,scss:`:host {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 1rem;\r
}\r
ard-radio-group {\r
  flex-direction: column;\r
}\r
label {\r
  display: flex;\r
  align-items: center;\r
  gap: 0.6ch;\r
  user-select: none;\r
}`,ts:`import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArdiumRadioModule, ArdiumRangeSliderModule, ArdRangeSelectionBehavior, SliderRange } from '@ardium-ui/ui';

@Component({
  selector: 'slider-range-selection-behaviors-example',
  templateUrl: './slider-range-selection-behaviors-example.html',
  styleUrl: './slider-range-selection-behaviors-example.scss',
  standalone: true,
  imports: [ArdiumRangeSliderModule, ArdiumRadioModule, FormsModule],
})
export class SliderRangeSelectionBehaviorsExample {
  readonly value = signal<SliderRange>({ from: 30, to: 80 });
  
  readonly selectionBehavior = signal<ArdRangeSelectionBehavior>(ArdRangeSelectionBehavior.Allow);

  readonly minimumDistance = signal<number>(0);
}
`};var gd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["spinner-basic-example"]],decls:1,vars:0,template:function(i,r){i&1&&b(0,"ard-spinner")},dependencies:[Kn,zn],encapsulation:2})}}return t})();var tE={component:gd,html:"<ard-spinner />",ts:`import { Component } from '@angular/core';\r
import { ArdiumSpinnerModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'spinner-basic-example',\r
  templateUrl: './spinner-basic-example.html',\r
  standalone: true,\r
  imports: [ArdiumSpinnerModule],\r
})\r
export class SpinnerBasicExample {}\r
`};var _d=(()=>{class t{constructor(){this.spinnerSize=S("4rem")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["spinner-sizing-example"]],decls:4,vars:2,consts:[["for","size"],["type","text","id","size","value","4rem",3,"input"]],template:function(i,r){i&1&&(o(0,"label",0),s(1,"CSS Size"),a(),o(2,"input",1),_("input",function(c){return r.spinnerSize.set(c.target.value)}),a(),b(3,"ard-spinner")),i&2&&(d(3),ye("width:"+r.spinnerSize()))},dependencies:[Kn,zn],styles:["ard-spinner[_ngcontent-%COMP%]{display:block;margin-top:1.5rem}"]})}}return t})();var lE={component:_d,html:`<label for="size">CSS Size</label>\r
<input type="text" id="size" value="4rem" (input)="spinnerSize.set($any($event).target.value)">\r
\r
<ard-spinner [style]="'width:' + spinnerSize()" />`,scss:`ard-spinner {\r
  display: block;\r
  margin-top: 1.5rem;\r
}`,ts:`import { Component, signal } from '@angular/core';\r
import { ArdiumSpinnerModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'spinner-sizing-example',\r
  templateUrl: './spinner-sizing-example.html',\r
  styleUrl: './spinner-sizing-example.scss',\r
  standalone: true,\r
  imports: [ArdiumSpinnerModule],\r
})\r
export class SpinnerSizingExample {\r
  readonly spinnerSize = signal<string>('4rem');\r
}\r
`};var vd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["tabber-basic-example"]],decls:10,vars:0,consts:[["tabId","tab1","label","Tab 1"],["tabId","tab2","label","Tab 2"],["tabId","tab3","label","Tab 3"]],template:function(i,r){i&1&&(o(0,"ard-tabber")(1,"ard-tab",0)(2,"p"),s(3,"This is the content of Tab 1."),a()(),o(4,"ard-tab",1)(5,"p"),s(6,"This is the content of Tab 2."),a()(),o(7,"ard-tab",2)(8,"p"),s(9,"This is the content of Tab 3."),a()()())},dependencies:[Bt,Lt,pt],encapsulation:2})}}return t})();var mE={component:vd,html:`<ard-tabber>\r
  <ard-tab tabId="tab1" label="Tab 1">\r
    <p>This is the content of Tab 1.</p>\r
  </ard-tab>\r
  <ard-tab tabId="tab2" label="Tab 2">\r
    <p>This is the content of Tab 2.</p>\r
  </ard-tab>\r
  <ard-tab tabId="tab3" label="Tab 3">\r
    <p>This is the content of Tab 3.</p>\r
  </ard-tab>\r
</ard-tabber>`,ts:`import { Component } from '@angular/core';
import { ArdiumTabberModule } from '@ardium-ui/ui';

@Component({
  selector: 'tabber-basic-example',
  templateUrl: './tabber-basic-example.html',
  standalone: true,
  imports: [ArdiumTabberModule],
})
export class TabberBasicExample {}
`};var yd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["tabber-label-example"]],decls:25,vars:0,consts:[["tabId","anim","label","Animals"],["tabId","pl","label","Plants"],["tabId","fung","label","Fungi"]],template:function(i,r){i&1&&(o(0,"ard-tabber")(1,"ard-tab",0)(2,"ul")(3,"li"),s(4,"Cat"),a(),o(5,"li"),s(6,"Dog"),a(),o(7,"li"),s(8,"Elephant"),a()()(),o(9,"ard-tab",1)(10,"ul")(11,"li"),s(12,"Rose"),a(),o(13,"li"),s(14,"Oak"),a(),o(15,"li"),s(16,"Tulip"),a()()(),o(17,"ard-tab",2)(18,"ul")(19,"li"),s(20,"Mushroom"),a(),o(21,"li"),s(22,"Yeast"),a(),o(23,"li"),s(24,"Morel"),a()()()())},dependencies:[Bt,Lt,pt],encapsulation:2})}}return t})();var vE={component:yd,html:`<ard-tabber>\r
  <ard-tab tabId="anim" label="Animals">\r
    <ul>\r
      <li>Cat</li>\r
      <li>Dog</li>\r
      <li>Elephant</li>\r
    </ul>\r
  </ard-tab>\r
  <ard-tab tabId="pl" label="Plants">\r
    <ul>\r
      <li>Rose</li>\r
      <li>Oak</li>\r
      <li>Tulip</li>\r
    </ul>\r
  </ard-tab>\r
  <ard-tab tabId="fung" label="Fungi">\r
    <ul>\r
      <li>Mushroom</li>\r
      <li>Yeast</li>\r
      <li>Morel</li>\r
    </ul>\r
  </ard-tab>\r
</ard-tabber>`,simpleHtml:`<ard-tabber>\r
  <ard-tab tabId="anim" label="Animals">\r
    ...\r
  </ard-tab>\r
  <ard-tab tabId="pl" label="Plants">\r
    ...\r
  </ard-tab>\r
  <ard-tab tabId="fung" label="Fungi">\r
    ...\r
  </ard-tab>\r
</ard-tabber>`,ts:`import { Component } from '@angular/core';
import { ArdiumTabberModule } from '@ardium-ui/ui';

@Component({
  selector: 'tabber-label-example',
  templateUrl: './tabber-label-example.html',
  standalone: true,
  imports: [ArdiumTabberModule],
})
export class TabberLabelExample {}
`};function nv(t,n){if(t&1&&(o(0,"ard-icon",5),s(1,"home"),a(),o(2,"span"),s(3),a()),t&2){let e=n.$implicit;d(3),v(e)}}function rv(t,n){t&1&&(o(0,"ard-icon",5),s(1,"person"),a(),o(2,"span"),s(3,"Profile"),a())}var Cd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["tabber-label-templates-example"]],decls:13,vars:1,consts:[["customLabelTemplate",""],["ard-tabber-label-tmp",""],["tabId","tab1","label","Home 1"],["tabId","tab2","label","Home 2"],["tabId","tab3",3,"label"],["aria-hidden","true"]],template:function(i,r){if(i&1&&(o(0,"ard-tabber"),g(1,nv,4,1,"ng-template",1),o(2,"ard-tab",2)(3,"p"),s(4,"This is the content of the Home 1 tab."),a()(),o(5,"ard-tab",3)(6,"p"),s(7,"This is the content of the Home 2 tab."),a()(),o(8,"ard-tab",4)(9,"p"),s(10,"This is the content of the Profile tab."),a()()(),g(11,rv,4,0,"ng-template",null,0,ae)),i&2){let l=M(12);d(8),p("label",l)}},dependencies:[Bt,Lt,pt,Ln,Re,Ye],encapsulation:2})}}return t})();var wE={component:Cd,html:`<ard-tabber>\r
  <ng-template ard-tabber-label-tmp let-label>\r
    <ard-icon aria-hidden="true">home</ard-icon>\r
    <span>{{ label }}</span>\r
  </ng-template>\r
  \r
  <ard-tab tabId="tab1" label="Home 1">\r
    <p>This is the content of the Home 1 tab.</p>\r
  </ard-tab>\r
  <ard-tab tabId="tab2" label="Home 2">\r
    <p>This is the content of the Home 2 tab.</p>\r
  </ard-tab>\r
  <ard-tab tabId="tab3" [label]="customLabelTemplate">\r
    <p>This is the content of the Profile tab.</p>\r
  </ard-tab>\r
</ard-tabber>\r
\r
<ng-template #customLabelTemplate>\r
  <ard-icon aria-hidden="true">person</ard-icon>\r
  <span>Profile</span>\r
</ng-template>`,scss:"",ts:`import { Component } from '@angular/core';
import { ArdiumIconModule, ArdiumTabberModule } from '@ardium-ui/ui';

@Component({
  selector: 'tabber-label-templates-example',
  templateUrl: './tabber-label-templates-example.html',
  styleUrl: './tabber-label-templates-example.scss',
  standalone: true,
  imports: [ArdiumTabberModule, ArdiumIconModule],
})
export class TabberLabelTemplatesExample {
  
}
`};var bd=(()=>{class t{constructor(){this.insideClicks=S(0),this.outsideClicks=S(0)}onClick(){this.insideClicks.update(e=>e+1)}onOutsideClick(){this.outsideClicks.update(e=>e+1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["click-outside-example"]],decls:6,vars:2,consts:[[3,"click","ardClickOutside"]],template:function(i,r){i&1&&(o(0,"div",0),_("click",function(){return r.onClick()})("ardClickOutside",function(){return r.onOutsideClick()}),s(1,"My element"),a(),o(2,"p"),s(3),b(4,"br"),s(5),a()),i&2&&(d(3),w(" Inside clicks: ",r.insideClicks()," "),d(2),w(" Outside clicks: ",r.outsideClicks(),`
`))},dependencies:[vr,so],styles:["[_nghost-%COMP%]{-webkit-user-select:none;user-select:none}div[_ngcontent-%COMP%]{width:167px;height:100px;display:grid;place-items:center;background-color:#90ee90}"]})}}return t})();var IE={component:bd,html:`<div (click)="onClick()" (ardClickOutside)="onOutsideClick()">My element</div>\r
<p>\r
  Inside clicks: {{ insideClicks() }}\r
  <br />\r
  Outside clicks: {{ outsideClicks() }}\r
</p>\r
`,scss:`:host {\r
  user-select: none;\r
}\r
div {\r
  width: 167px;\r
  height: 100px;\r
  display: grid;\r
  place-items: center;\r
  background-color: lightgreen;\r
}`,ts:`import { Component, signal } from "@angular/core";\r
import { ArdiumClickOutsideModule } from "@ardium-ui/devkit";\r
\r
@Component({\r
  selector: 'click-outside-example',\r
  templateUrl: './click-outside-example.html',\r
  styleUrl: './click-outside-example.scss',\r
  standalone: true,\r
  imports: [ArdiumClickOutsideModule],\r
})\r
export class ClickOutsideExample {\r
  readonly insideClicks = signal<number>(0);\r
  readonly outsideClicks = signal<number>(0);\r
\r
  onClick() {\r
    this.insideClicks.update(v => v + 1);\r
  }\r
  onOutsideClick() {\r
    this.outsideClicks.update(v => v + 1);\r
  }\r
}`};var av=["*"],xd=(()=>{class t{constructor(){this.disabled=h(!1,{transform:k})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["my-button"]],inputs:{disabled:[1,"disabled"]},ngContentSelectors:av,decls:2,vars:1,consts:[[3,"disabled"]],template:function(i,r){i&1&&($(),o(0,"button",0),R(1),a()),i&2&&p("disabled",r.disabled())},encapsulation:2})}}return t})();var wd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["coercion-boolean-example"]],decls:8,vars:1,consts:[["disabled",""],["disabled","false"],[3,"disabled"]],template:function(i,r){i&1&&(o(0,"my-button"),s(1,"Normal button"),a(),o(2,"my-button",0),s(3,"Disabled button"),a(),o(4,"my-button",1),s(5,"False button"),a(),o(6,"my-button",2),s(7,"Disabled button"),a()),i&2&&(d(6),p("disabled",!0))},dependencies:[xd],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]})}}return t})();var HE={component:wd,html:`<my-button>Normal button</my-button>\r
<my-button disabled>Disabled button</my-button>\r
<my-button disabled="false">False button</my-button>\r
<my-button [disabled]="true">Disabled button</my-button>\r
`,scss:`:host {\r
  display: flex;\r
  flex-direction: column;\r
}`,ts:`import { Component } from "@angular/core";\r
import { MyButtonComponent } from "./my-button.component";\r
\r
@Component({\r
  selector: 'coercion-boolean-example',\r
  templateUrl: './coercion-boolean-example.html',\r
  styleUrl: './coercion-boolean-example.scss',\r
  standalone: true,\r
  imports: [MyButtonComponent],\r
})\r
export class CoercionBooleanExample {}`,"my-button.component.ts":`import { Component, input } from "@angular/core";\r
import { coerceBooleanProperty } from "@ardium-ui/devkit";\r
\r
@Component({\r
  selector: 'my-button',\r
  template: '<button [disabled]="disabled()"><ng-content /></button>',\r
  standalone: true,\r
  imports: [],\r
})\r
export class MyButtonComponent {\r
  readonly disabled = input<boolean, any>(false, { transform: coerceBooleanProperty });\r
}`};var Td=(()=>{class t{constructor(){this.date=h.required({transform:e=>wr(e,new Date(""))})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["my-calendar"]],inputs:{date:[1,"date"]},decls:1,vars:1,template:function(i,r){i&1&&s(0),i&2&&w("The date is ",r.date(),"")},encapsulation:2})}}return t})();var Dd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["coercion-date-example"]],decls:2,vars:0,consts:[["date","1918.11.11"],["date","now"]],template:function(i,r){i&1&&b(0,"my-calendar",0)(1,"my-calendar",1)},dependencies:[Td],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]})}}return t})();var qE={component:Dd,html:`<my-calendar date="1918.11.11" />\r
<my-calendar date="now" />`,scss:`:host {\r
  display: flex;\r
  flex-direction: column;\r
}`,ts:`import { Component } from '@angular/core';\r
import { MyCalendarComponent } from './my-calendar.component';\r
\r
@Component({\r
  selector: 'coercion-date-example',\r
  templateUrl: './coercion-date-example.html',\r
  styleUrl: './coercion-date-example.scss',\r
  standalone: true,\r
  imports: [MyCalendarComponent],\r
})\r
export class CoercionDateExample {}\r
`,"my-calendar.component.ts":`import { Component, input } from '@angular/core';\r
import { coerceDateProperty } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'my-calendar',\r
  template: \`The date is {{ date() }}\`,\r
  standalone: true,\r
  imports: [],\r
})\r
export class MyCalendarComponent {\r
  readonly date = input.required<Date, any>({ transform: v => coerceDateProperty(v, new Date('')) });\r
}\r
`};var ov=["*"],Sd=(()=>{class t{constructor(){this.delay=h(0,{transform:e=>Ne(e,0)})}alert(){setTimeout(()=>{alert("Hello world!")},this.delay())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["my-button"]],inputs:{delay:[1,"delay"]},ngContentSelectors:ov,decls:2,vars:0,consts:[[3,"click"]],template:function(i,r){i&1&&($(),o(0,"button",0),_("click",function(){return r.alert()}),R(1),a())},encapsulation:2})}}return t})();var Ed=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["coercion-number-example"]],decls:6,vars:1,consts:[["delay","500"],[3,"delay"]],template:function(i,r){i&1&&(o(0,"my-button"),s(1,"No delay"),a(),o(2,"my-button",0),s(3,"With delay"),a(),o(4,"my-button",1),s(5,"Long delay"),a()),i&2&&(d(4),p("delay",1500))},dependencies:[Sd],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]})}}return t})();var nA={component:Ed,html:`<my-button>No delay</my-button>\r
<my-button delay="500">With delay</my-button>\r
<my-button [delay]="1500">Long delay</my-button>\r
`,scss:`:host {\r
  display: flex;\r
  flex-direction: column;\r
}`,ts:`import { Component } from '@angular/core';\r
import { MyButtonComponent } from './my-button.component';\r
\r
@Component({\r
  selector: 'coercion-number-example',\r
  templateUrl: './coercion-number-example.html',\r
  styleUrl: './coercion-number-example.scss',\r
  standalone: true,\r
  imports: [MyButtonComponent],\r
})\r
export class CoercionNumberExample {}\r
`,"my-button.component.ts":`import { Component, input } from '@angular/core';\r
import { coerceNumberProperty } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'my-button',\r
  template: \`<button (click)="alert()"><ng-content /></button>\`,\r
  standalone: true,\r
  imports: [],\r
})\r
export class MyButtonComponent {\r
  readonly delay = input<number, any>(0, { transform: v => coerceNumberProperty(v, 0) });\r
\r
  alert() {\r
    setTimeout(() => {\r
      alert('Hello world!');\r
    }, this.delay());\r
  }\r
}\r
`};var Ad=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["coercion-usefulness-example"]],decls:0,vars:0,template:function(i,r){},encapsulation:2})}}return t})();var sA={component:Ad,simpleHtml:`<ard-select disabled />\r
<!-- instead of -->\r
<ard-select [disabled]="true" />\r
\r
<ard-slider min="0" max="10" />\r
<!-- instead of -->\r
<ard-slider [min]="0" [max]="0" />\r
\r
<ard-calendar initialDate="now" />\r
<!-- instead of -->\r
<ard-calendar [initialDate]="currentDateVariable" />\r
\r
<ard-kbd-shortcut keys="Ctrl+Alt+Delete" />\r
<!-- instead of -->\r
<ard-kbd-shortcut [keys]="['Ctrl', 'Alt', 'Delete']" />`,ts:`import { Component } from "@angular/core";\r
\r
@Component({\r
  selector: 'coercion-usefulness-example',\r
  template: '',\r
  standalone: true,\r
  imports: [],\r
})\r
export class CoercionUsefulnessExample {}`};var Fd=(()=>{class t{constructor(){this.exampleSignal=br(["Pizza","Cheese","Spaghetti"])}push(e){e&&this.exampleSignal.push(e)}pop(){this.exampleSignal.pop()}map(){this.exampleSignal.map(e=>e.toUpperCase())}filter(){this.exampleSignal.filter(e=>e.length>6)}reverse(){this.exampleSignal.reverse()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["array-signal-basic-example"]],decls:18,vars:2,consts:[["pushText",""],[1,"left-side"],["type","text","placeholder","Text to push..."],[3,"click"],[1,"right-side"]],template:function(i,r){if(i&1){let l=W();o(0,"div",1),b(1,"input",2,0),o(3,"button",3),_("click",function(){T(l);let u=M(2);return D(r.push(u.value))}),s(4,"Push"),a(),o(5,"button",3),_("click",function(){return T(l),D(r.pop())}),s(6,"Pop"),a(),o(7,"button",3),_("click",function(){return T(l),D(r.map())}),s(8,"Map"),a(),o(9,"button",3),_("click",function(){return T(l),D(r.filter())}),s(10,"Filter"),a(),o(11,"button",3),_("click",function(){return T(l),D(r.reverse())}),s(12,"Reverse"),a()(),o(13,"div",4)(14,"p"),s(15),a(),o(16,"p"),s(17),a()()}i&2&&(d(15),w("isEmpty: ",r.exampleSignal.isEmpty().toString()," "),d(2),v(r.exampleSignal()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:center}button[_ngcontent-%COMP%]{margin-right:.75rem;margin-left:.25rem;padding:0 .125rem}"]})}}return t})();var pA={component:Fd,html:`<div class="left-side">\r
    <input type="text" #pushText placeholder="Text to push...">\r
    <button (click)="push(pushText.value)">Push</button>\r
    <button (click)="pop()">Pop</button>\r
    <button (click)="map()">Map</button>\r
    <button (click)="filter()">Filter</button>\r
    <button (click)="reverse()">Reverse</button>\r
</div>\r
<div class="right-side">\r
  <p>isEmpty: {{ exampleSignal.isEmpty().toString() }} </p>\r
  <p>{{ exampleSignal() }}</p>\r
</div>`,scss:`:host {\r
  display: grid;\r
  grid-template-columns: 1fr 1fr;\r
  align-items: center;\r
}\r
button {\r
  margin-right: 0.75rem;\r
  margin-left: 0.25rem;\r
  padding: 0 0.125rem;\r
}`,ts:`import { Component } from '@angular/core';\r
import { arraySignal } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'array-signal-basic-example',\r
  templateUrl: './array-signal-basic-example.html',\r
  styleUrl: './array-signal-basic-example.scss',\r
  standalone: true,\r
  imports: [],\r
})\r
export class ArraySignalBasicExample {\r
  readonly exampleSignal = arraySignal<string>(['Pizza', 'Cheese', 'Spaghetti']);\r
\r
  push(value: string) {\r
    if (!value) return;\r
    this.exampleSignal.push(value);\r
  }\r
  pop() {\r
    this.exampleSignal.pop();\r
  }\r
  map() {\r
    this.exampleSignal.map(v => v.toUpperCase());\r
  }\r
  filter() {\r
    this.exampleSignal.filter(v => v.length > 6);\r
  }\r
  reverse() {\r
    this.exampleSignal.reverse();\r
  }\r
}\r
`};var Id=(()=>{class t{constructor(){this.exampleSignal=fo(10)}increment(){this.exampleSignal.increment()}decrement(){this.exampleSignal.decrement()}reset(){this.exampleSignal.reset()}double(){this.exampleSignal.update(e=>e*2)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["counter-signal-basic-example"]],decls:14,vars:2,consts:[[1,"left-side"],[3,"click"],[1,"right-side"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"button",1),_("click",function(){return r.increment()}),s(2,"Increment"),a(),o(3,"button",1),_("click",function(){return r.decrement()}),s(4,"Decrement"),a(),o(5,"button",1),_("click",function(){return r.double()}),s(6,"Double"),a(),o(7,"button",1),_("click",function(){return r.reset()}),s(8,"Reset"),a()(),o(9,"div",2)(10,"p"),s(11),a(),o(12,"p"),s(13),a()()),i&2&&(d(11),w("isReset: ",r.exampleSignal.isReset().toString()," "),d(2),w("value: ",r.exampleSignal(),""))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:center}button[_ngcontent-%COMP%]{margin-right:1rem;padding:0 .125rem}"]})}}return t})();var _A={component:Id,html:`<div class="left-side">\r
  <button (click)="increment()">Increment</button>\r
  <button (click)="decrement()">Decrement</button>\r
  <button (click)="double()">Double</button>\r
  <button (click)="reset()">Reset</button>\r
</div>\r
<div class="right-side">\r
<p>isReset: {{ exampleSignal.isReset().toString() }} </p>\r
<p>value: {{ exampleSignal() }}</p>\r
</div>  `,scss:`:host {\r
  display: grid;\r
  grid-template-columns: 1fr 1fr;\r
  align-items: center;\r
}\r
button {\r
  margin-right: 1rem;\r
  padding: 0 0.125rem;\r
}`,ts:`import { Component } from '@angular/core';\r
import { counterSignal } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'counter-signal-basic-example',\r
  templateUrl: './counter-signal-basic-example.html',\r
  styleUrl: './counter-signal-basic-example.scss',\r
  standalone: true,\r
  imports: [],\r
})\r
export class CounterSignalBasicExample {\r
  readonly exampleSignal = counterSignal(10);\r
\r
  increment() {\r
    this.exampleSignal.increment();\r
  }\r
  decrement() {\r
    this.exampleSignal.decrement();\r
  }\r
  reset() {\r
    this.exampleSignal.reset();\r
  }\r
  double() {\r
    this.exampleSignal.update(v => v * 2);\r
  }\r
}\r
`};var Md=(()=>{class t{constructor(){this.debouncedValue=go("",500)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["debounced-signal-example"]],decls:5,vars:2,consts:[["for","debounced-input"],["type","text","id","debounced-input","placeholder","Search...",3,"ngModelChange","ngModel"]],template:function(i,r){i&1&&(o(0,"label",0),s(1,"What are you looking for?"),a(),o(2,"input",1),q("ngModelChange",function(c){return K(r.debouncedValue,c)||(r.debouncedValue=c),c}),a(),o(3,"p"),s(4),a()),i&2&&(d(2),z("ngModel",r.debouncedValue),d(2),w("Debounced value: ",r.debouncedValue(),""))},dependencies:[ue,fe,ce,_e],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var wA={component:Md,html:`<label for="debounced-input">What are you looking for?</label>\r
<input type="text" id="debounced-input" [(ngModel)]="debouncedValue" placeholder="Search..." />\r
\r
<p>Debounced value: {{ debouncedValue() }}</p>\r
`,scss:`p {\r
  margin-top: 1rem;\r
}\r
button {\r
  margin-left: 0.25rem;\r
}`,ts:`import { Component } from '@angular/core';\r
import { FormsModule } from '@angular/forms';\r
import { debouncedSignal } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'debounced-signal-example',\r
  templateUrl: './debounced-signal-example.html',\r
  styleUrl: './debounced-signal-example.scss',\r
  standalone: true,\r
  imports: [FormsModule],\r
})\r
export class DebouncedSignalExample {\r
  readonly debouncedValue = debouncedSignal<string>('', 500);\r
}\r
`};function sv(t,n){if(t&1&&(o(0,"tr")(1,"td"),s(2),a(),o(3,"td"),s(4),a()()),t&2){let e=n.$implicit;d(2),v(e[0]),d(2),v(e[1])}}var kd=(()=>{class t{constructor(){this.exampleSignal=_o([["food1","Pizza"]])}setKey(e,i){!e||!i||this.exampleSignal.setKey(e,i)}delete(e){e&&this.exampleSignal.delete(e)}update(){this.exampleSignal.update(e=>new Map([...e.entries()].map(i=>[i[0],i[1].toLowerCase()])))}clear(){this.exampleSignal.clear()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["map-signal-basic-example"]],decls:30,vars:2,consts:[["key",""],["value",""],[1,"left-side"],[1,"inputs"],["type","text","placeholder","Key"],["type","text","placeholder","Value"],[3,"click"],[1,"right-side"]],template:function(i,r){if(i&1){let l=W();o(0,"div",2)(1,"div",3),b(2,"input",4,0)(4,"input",5,1),a(),o(6,"div")(7,"button",6),_("click",function(){T(l);let u=M(3),A=M(5);return D(r.setKey(u.value,A.value))}),s(8,"Set key"),a(),o(9,"button",6),_("click",function(){T(l);let u=M(3);return D(r.delete(u.value))}),s(10,"Delete key"),a(),o(11,"button",6),_("click",function(){return T(l),D(r.clear())}),s(12,"Clear"),a(),o(13,"button",6),_("click",function(){return T(l),D(r.update())}),s(14,"Update (to lowercase)"),a()()(),o(15,"div",7)(16,"p"),s(17),a(),o(18,"p"),s(19),a(),o(20,"table")(21,"thead")(22,"tr")(23,"th"),s(24,"Key"),a(),o(25,"th"),s(26,"Value"),a()()(),o(27,"tbody"),U(28,sv,5,2,"tr",null,X),a()()()}i&2&&(d(17),w("isEmpty: ",r.exampleSignal.isEmpty().toString(),""),d(2),w("size: ",r.exampleSignal.size().toString(),""),d(9),N(r.exampleSignal()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:3rem}.inputs[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}input[_ngcontent-%COMP%]{margin-right:.25rem;max-width:10rem}button[_ngcontent-%COMP%]{margin-right:1rem;margin-top:.75rem;padding:0 .125rem}"]})}}return t})();var AA={component:kd,html:`<div class="left-side">\r
  <div class="inputs">\r
    <input type="text" #key placeholder="Key" />\r
    <input type="text" #value placeholder="Value" />\r
  </div>\r
  <div>\r
    <button (click)="setKey(key.value, value.value)">Set key</button>\r
    <button (click)="delete(key.value)">Delete key</button>\r
    <button (click)="clear()">Clear</button>\r
    <button (click)="update()">Update (to lowercase)</button>\r
  </div>\r
</div>\r
<div class="right-side">\r
  <p>isEmpty: {{ exampleSignal.isEmpty().toString() }}</p>\r
  <p>size: {{ exampleSignal.size().toString() }}</p>\r
  <table>\r
    <thead>\r
      <tr>\r
        <th>Key</th>\r
        <th>Value</th>\r
      </tr>\r
    </thead>\r
    <tbody>\r
      @for (pair of exampleSignal(); track $index) {\r
      <tr>\r
        <td>{{ pair[0] }}</td>\r
        <td>{{ pair[1] }}</td>\r
      </tr>\r
      }\r
    </tbody>\r
  </table>\r
</div>\r
`,scss:`:host {\r
  display: grid;\r
  grid-template-columns: 1fr 1fr;\r
}\r
.left-side {\r
  padding-top: 3rem;\r
}\r
.inputs {\r
  display: flex;\r
  flex-wrap: wrap;\r
}\r
input {\r
  margin-right: 0.25rem;\r
  max-width: 10rem;\r
}\r
button {\r
  margin-right: 1rem;\r
  margin-top: 0.75rem;\r
  padding: 0 0.125rem;\r
}`,ts:`import { Component } from '@angular/core';\r
import { mapSignal } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'map-signal-basic-example',\r
  templateUrl: './map-signal-basic-example.html',\r
  styleUrl: './map-signal-basic-example.scss',\r
  standalone: true,\r
  imports: [],\r
})\r
export class MapSignalBasicExample {\r
  readonly exampleSignal = mapSignal<string, string>([['food1', 'Pizza']]);\r
\r
  setKey(key: string, value: string) {\r
    if (!key || !value) return;\r
    this.exampleSignal.setKey(key, value);\r
  }\r
  delete(key: string) {\r
    if (!key) return;\r
    this.exampleSignal.delete(key);\r
  }\r
  update() {\r
    this.exampleSignal.update(m => new Map([...m.entries()].map(v => [v[0], v[1].toLowerCase()])));\r
  }\r
  clear() {\r
    this.exampleSignal.clear();\r
  }\r
}\r
`};var Pd=(()=>{class t{constructor(){this.favoriteFood=Ft("chocolate chip cookies",{name:"favorite-food",method:At.Cookies,maxAge:60*60*24*7})}clearSignal(){this.favoriteFood.clear()}get cookieValue(){let e=document.cookie.match(new RegExp("(^| )favorite-food=([^;]+)"));return e?e[2]:null}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["persistent-signal-cookies-example"]],decls:7,vars:2,consts:[["for","favorite-food"],["type","text","id","favorite-food",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,r){i&1&&(o(0,"label",0),s(1,"Favorite food"),a(),o(2,"input",1),q("ngModelChange",function(c){return K(r.favoriteFood,c)||(r.favoriteFood=c),c}),a(),o(3,"button",2),_("click",function(){return r.clearSignal()}),s(4,"Clear"),a(),o(5,"p"),s(6),a()),i&2&&(d(2),z("ngModel",r.favoriteFood),d(4),w("Your favorite food is: ",r.cookieValue,""))},dependencies:[ue,fe,ce,_e],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var VA={component:Pd,html:`<label for="favorite-food">Favorite food</label>\r
<input type="text" id="favorite-food" [(ngModel)]="favoriteFood" />\r
<button (click)="clearSignal()">Clear</button>\r
\r
<p>Your favorite food is: {{ cookieValue }}</p>\r
`,scss:`p {\r
  margin-top: 1rem;\r
}\r
button {\r
  margin-left: 0.25rem;\r
}`,simpleTs:`readonly favoriteFood = persistentSignal('chocolate chip cookies', {\r
  name: 'favorite-food',\r
  method: PersistentStorageMethod.Cookies,\r
  maxAge: 60 * 60 * 24 * 7,\r
});\r
`,ts:`import { Component } from '@angular/core';\r
import { FormsModule } from '@angular/forms';\r
import { persistentSignal, PersistentStorageMethod } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'persistent-signal-cookies-example',\r
  templateUrl: './persistent-signal-cookies-example.html',\r
  styleUrl: './persistent-signal-cookies-example.scss',\r
  standalone: true,\r
  imports: [FormsModule],\r
})\r
export class PersistentSignalCookiesExample {\r
  readonly favoriteFood = persistentSignal('chocolate chip cookies', {\r
    name: 'favorite-food',\r
    method: PersistentStorageMethod.Cookies,\r
    maxAge: 60 * 60 * 24 * 7,\r
  });\r
\r
  clearSignal() {\r
    this.favoriteFood.clear();\r
  }\r
\r
  get cookieValue() {\r
    let match = document.cookie.match(new RegExp('(^| )' + 'favorite-food' + '=([^;]+)'));\r
    if (match) return match[2];\r
    return null;\r
  }\r
}\r
`};var Vd=(()=>{class t{constructor(){this.favoriteFood=Ft("spaghetti",{name:"favorite-food",method:At.LocalStorage})}clearSignal(){this.favoriteFood.clear()}get localStorageValue(){return localStorage.getItem("favorite-food")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["persistent-signal-example"]],decls:7,vars:2,consts:[["for","favorite-food"],["type","text","id","favorite-food",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,r){i&1&&(o(0,"label",0),s(1,"Favorite food"),a(),o(2,"input",1),q("ngModelChange",function(c){return K(r.favoriteFood,c)||(r.favoriteFood=c),c}),a(),o(3,"button",2),_("click",function(){return r.clearSignal()}),s(4,"Clear"),a(),o(5,"p"),s(6),a()),i&2&&(d(2),z("ngModel",r.favoriteFood),d(4),w("Your favorite food is: ",r.localStorageValue,""))},dependencies:[ue,fe,ce,_e],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var UA={component:Vd,html:`<label for="favorite-food">Favorite food</label>\r
<input type="text" id="favorite-food" [(ngModel)]="favoriteFood" />\r
<button (click)="clearSignal()">Clear</button>\r
\r
<p>Your favorite food is: {{ localStorageValue }}</p>\r
`,scss:`p {\r
  margin-top: 1rem;\r
}\r
button {\r
  margin-left: 0.25rem;\r
}`,ts:`import { Component } from '@angular/core';\r
import { FormsModule } from '@angular/forms';\r
import { persistentSignal, PersistentStorageMethod } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'persistent-signal-example',\r
  templateUrl: './persistent-signal-example.html',\r
  styleUrl: './persistent-signal-example.scss',\r
  standalone: true,\r
  imports: [FormsModule],\r
})\r
export class PersistentSignalExample {\r
  readonly favoriteFood = persistentSignal('spaghetti', {\r
    name: 'favorite-food',\r
    method: PersistentStorageMethod.LocalStorage,\r
  });\r
\r
  clearSignal() {\r
    this.favoriteFood.clear();\r
  }\r
\r
  get localStorageValue() {\r
    return localStorage.getItem('favorite-food');\r
  }\r
}\r
`};var Od=(()=>{class t{constructor(){this.favoriteFood=Ft("spaghetti",{name:"favorite-food",method:At.LocalStorage})}clearSignal(){this.favoriteFood.clear()}get localStorageValue(){return localStorage.getItem("favorite-food")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["persistent-signal-local-storage-example"]],decls:7,vars:2,consts:[["for","favorite-food"],["type","text","id","favorite-food",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,r){i&1&&(o(0,"label",0),s(1,"Favorite food"),a(),o(2,"input",1),q("ngModelChange",function(c){return K(r.favoriteFood,c)||(r.favoriteFood=c),c}),a(),o(3,"button",2),_("click",function(){return r.clearSignal()}),s(4,"Clear"),a(),o(5,"p"),s(6),a()),i&2&&(d(2),z("ngModel",r.favoriteFood),d(4),w("Your favorite food is: ",r.localStorageValue,""))},dependencies:[ue,fe,ce,_e],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var zA={component:Od,html:`<label for="favorite-food">Favorite food</label>\r
<input type="text" id="favorite-food" [(ngModel)]="favoriteFood" />\r
<button (click)="clearSignal()">Clear</button>\r
\r
<p>Your favorite food is: {{ localStorageValue }}</p>\r
`,scss:`p {\r
  margin-top: 1rem;\r
}\r
button {\r
  margin-left: 0.25rem;\r
}`,simpleTs:`readonly favoriteFood = persistentSignal('spaghetti', {\r
  name: 'favorite-food',\r
  method: PersistentStorageMethod.LocalStorage, // SessionStorage can be used too\r
});\r
`,ts:`import { Component } from '@angular/core';\r
import { FormsModule } from '@angular/forms';\r
import { persistentSignal, PersistentStorageMethod } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'persistent-signal-local-storage-example',\r
  templateUrl: './persistent-signal-local-storage-example.html',\r
  styleUrl: './persistent-signal-local-storage-example.scss',\r
  standalone: true,\r
  imports: [FormsModule],\r
})\r
export class PersistentSignalLocalStorageExample {\r
  readonly favoriteFood = persistentSignal('spaghetti', {\r
    name: 'favorite-food',\r
    method: PersistentStorageMethod.LocalStorage,\r
  });\r
\r
  clearSignal() {\r
    this.favoriteFood.clear();\r
  }\r
\r
  get localStorageValue() {\r
    return localStorage.getItem('favorite-food');\r
  }\r
}\r
`};var Rd=(()=>{class t{constructor(){this.acceptsTerms=Ft(!1,{name:"accepts-terms",method:At.LocalStorage,serialize:e=>String(!!e),deserialize:e=>e==="true"})}get termsValue(){return localStorage.getItem("accepts-terms")??"null"}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["persistent-signal-serialization-example"]],decls:6,vars:2,consts:[[3,"selectedChange","selected"]],template:function(i,r){i&1&&(o(0,"div")(1,"ard-checkbox",0),q("selectedChange",function(c){return K(r.acceptsTerms,c)||(r.acceptsTerms=c),c}),a(),o(2,"span"),s(3,"Do you accept the terms?"),a()(),o(4,"p"),s(5),a()),i&2&&(d(),z("selected",r.acceptsTerms),d(4),w("Terms accepted: ",r.termsValue,""))},dependencies:[ue,jn,Nn],styles:["div[_ngcontent-%COMP%]{display:flex;gap:.5rem}p[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return t})();var JA={component:Rd,html:`<div>\r
  <ard-checkbox [(selected)]="acceptsTerms" />\r
  <span>Do you accept the terms?</span>\r
</div>\r
\r
<p>Terms accepted: {{ termsValue }}</p>\r
`,scss:`div {\r
  display: flex;\r
  gap: 0.5rem;\r
}\r
p {\r
  margin-top: 1rem;\r
}`,simpleTs:`readonly acceptsTerms = persistentSignal<boolean>(false, {\r
  name: 'accepts-terms',\r
  method: PersistentStorageMethod.LocalStorage,\r
  serialize: v => String(!!v),\r
  deserialize: v => v === 'true',\r
});`,ts:`import { Component } from '@angular/core';\r
import { FormsModule } from '@angular/forms';\r
import { persistentSignal, PersistentStorageMethod } from '@ardium-ui/devkit';\r
import { ArdiumCheckboxModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'persistent-signal-serialization-example',\r
  templateUrl: './persistent-signal-serialization-example.html',\r
  styleUrl: './persistent-signal-serialization-example.scss',\r
  standalone: true,\r
  imports: [FormsModule, ArdiumCheckboxModule],\r
})\r
export class PersistentSignalSerializationExample {\r
  readonly acceptsTerms = persistentSignal<boolean>(false, {\r
    name: 'accepts-terms',\r
    method: PersistentStorageMethod.LocalStorage,\r
    serialize: v => String(!!v),\r
    deserialize: v => v === 'true',\r
  });\r
\r
  get termsValue() {\r
    return localStorage.getItem('accepts-terms') ?? 'null';\r
  }\r
}\r
`};var Ld=(()=>{class t{constructor(){this.favoriteColor=gn("red","favorite-color")}clearSignal(){this.favoriteColor.clear()}get queryParams(){return window.location.search}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["query-param-signal-example"]],decls:7,vars:2,consts:[["for","favorite-color"],["type","text","id","favorite-color",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,r){i&1&&(o(0,"label",0),s(1,"Favorite color"),a(),o(2,"input",1),q("ngModelChange",function(c){return K(r.favoriteColor,c)||(r.favoriteColor=c),c}),a(),o(3,"button",2),_("click",function(){return r.clearSignal()}),s(4,"Clear"),a(),o(5,"p"),s(6),a()),i&2&&(d(2),z("ngModel",r.favoriteColor),d(4),w("URL query params: ",r.queryParams,""))},dependencies:[ue,fe,ce,_e],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var aF={component:Ld,html:`<label for="favorite-color">Favorite color</label>\r
<input type="text" id="favorite-color" [(ngModel)]="favoriteColor" />\r
<button (click)="clearSignal()">Clear</button>\r
\r
<p>URL query params: {{ queryParams }}</p>\r
`,scss:`p {\r
  margin-top: 1rem;\r
}\r
button {\r
  margin-left: 0.25rem;\r
}`,ts:`import { Component } from '@angular/core';\r
import { FormsModule } from '@angular/forms';\r
import { queryParamSignal } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'query-param-signal-example',\r
  templateUrl: './query-param-signal-example.html',\r
  styleUrl: './query-param-signal-example.scss',\r
  standalone: true,\r
  imports: [FormsModule],\r
})\r
export class QueryParamSignalExample {\r
  readonly favoriteColor = queryParamSignal<string>('red', 'favorite-color');\r
\r
  clearSignal() {\r
    this.favoriteColor.clear();\r
  }\r
\r
  get queryParams() {\r
    return window.location.search;\r
  }\r
}\r
`};var Bd=(()=>{class t{constructor(){this.acceptsTerms=gn(!1,{paramName:"accepts-terms",serialize:e=>e===null?null:String(e),deserialize:e=>e==="true"})}get queryParams(){return window.location.search}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["query-param-signal-serialization-example"]],decls:6,vars:2,consts:[[3,"selectedChange","selected"]],template:function(i,r){i&1&&(o(0,"div")(1,"ard-checkbox",0),q("selectedChange",function(c){return K(r.acceptsTerms,c)||(r.acceptsTerms=c),c}),a(),o(2,"span"),s(3,"Do you accept the terms?"),a()(),o(4,"p"),s(5),a()),i&2&&(d(),z("selected",r.acceptsTerms),d(4),w("URL query: ",r.queryParams,""))},dependencies:[ue,jn,Nn],styles:["div[_ngcontent-%COMP%]{display:flex;gap:.5rem}p[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return t})();var pF={component:Bd,html:`<div>\r
  <ard-checkbox [(selected)]="acceptsTerms" />\r
  <span>Do you accept the terms?</span>\r
</div>\r
\r
<p>URL query: {{ queryParams }}</p>\r
`,scss:`div {\r
  display: flex;\r
  gap: 0.5rem;\r
}\r
p {\r
  margin-top: 1rem;\r
}`,simpleTs:`readonly acceptsTerms = queryParamSignal<boolean>(false, {\r
  paramName: 'accepts-terms',\r
  serialize: v => (v === null ? null : String(v)),\r
  deserialize: v => v === 'true',\r
});`,ts:`import { Component } from '@angular/core';\r
import { FormsModule } from '@angular/forms';\r
import { queryParamSignal } from '@ardium-ui/devkit';\r
import { ArdiumCheckboxModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'query-param-signal-serialization-example',\r
  templateUrl: './query-param-signal-serialization-example.html',\r
  styleUrl: './query-param-signal-serialization-example.scss',\r
  standalone: true,\r
  imports: [FormsModule, ArdiumCheckboxModule],\r
})\r
export class QueryParamSignalSerializationExample {\r
  readonly acceptsTerms = queryParamSignal<boolean>(false, {\r
    paramName: 'accepts-terms',\r
    serialize: v => (v === null ? null : String(v)),\r
    deserialize: v => v === 'true',\r
  });\r
\r
  get queryParams() {\r
    return window.location.search;\r
  }\r
}\r
`};function lv(t,n){if(t&1&&(o(0,"li"),s(1),a()),t&2){let e=n.$implicit;d(),v(e)}}var Hd=(()=>{class t{constructor(){this.exampleSignal=vo(["Pizza","Spaghetti","Tomatoes"])}enqueue(e){e&&this.exampleSignal.enqueue(e)}dequeue(){this.exampleSignal.dequeue()}clear(){this.exampleSignal.clear()}update(){this.exampleSignal.update(e=>e.filter(i=>i.length<=5))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["queue-signal-basic-example"]],decls:20,vars:2,consts:[["enqueueText",""],[1,"left-side"],["type","text","placeholder","Text to enqueue..."],[3,"click"],[1,"right-side"]],template:function(i,r){if(i&1){let l=W();o(0,"div",1)(1,"div"),b(2,"input",2,0),a(),o(4,"button",3),_("click",function(){T(l);let u=M(3);return D(r.enqueue(u.value))}),s(5,"Enqueue"),a(),o(6,"button",3),_("click",function(){return T(l),D(r.dequeue())}),s(7,"Dequeue"),a(),o(8,"button",3),_("click",function(){return T(l),D(r.clear())}),s(9,"Clear"),a(),o(10,"button",3),_("click",function(){return T(l),D(r.update())}),s(11,"Update (leave only short)"),a()(),o(12,"div",4)(13,"p"),s(14),a(),o(15,"p"),s(16),a(),o(17,"ol"),U(18,lv,2,1,"li",null,Tt),a()()}i&2&&(d(14),w("isEmpty: ",r.exampleSignal.isEmpty().toString(),""),d(2),w("size: ",r.exampleSignal.size().toString(),""),d(2),N(r.exampleSignal()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:3rem}button[_ngcontent-%COMP%]{margin-top:.75rem;margin-right:1rem;padding:0 .125rem}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0;line-height:1.2}"]})}}return t})();var _F={component:Hd,html:`<div class="left-side">\r
  <div>\r
    <input type="text" #enqueueText placeholder="Text to enqueue..." />\r
  </div>\r
  <button (click)="enqueue(enqueueText.value)">Enqueue</button>\r
  <button (click)="dequeue()">Dequeue</button>\r
  <button (click)="clear()">Clear</button>\r
  <button (click)="update()">Update (leave only short)</button>\r
</div>\r
<div class="right-side">\r
  <p>isEmpty: {{ exampleSignal.isEmpty().toString() }}</p>\r
  <p>size: {{ exampleSignal.size().toString() }}</p>\r
  <ol>\r
    @for (item of exampleSignal(); track item) {\r
    <li>{{ item }}</li>\r
    }\r
  </ol>\r
</div>\r
`,scss:`:host {\r
  display: grid;\r
  grid-template-columns: 1fr 1fr;\r
}\r
.left-side {\r
  padding-top: 3rem;\r
}\r
button {\r
  margin-top: 0.75rem;\r
  margin-right: 1rem;\r
  padding: 0 0.125rem;\r
}\r
ol {\r
  li {\r
    margin: 0;\r
    line-height: 1.2;\r
  }\r
}`,ts:`import { Component } from '@angular/core';\r
import { queueSignal } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'queue-signal-basic-example',\r
  templateUrl: './queue-signal-basic-example.html',\r
  styleUrl: './queue-signal-basic-example.scss',\r
  standalone: true,\r
  imports: [],\r
})\r
export class QueueSignalBasicExample {\r
  readonly exampleSignal = queueSignal<string>(['Pizza', 'Spaghetti', 'Tomatoes']);\r
\r
  enqueue(value: string) {\r
    if (!value) return;\r
    this.exampleSignal.enqueue(value);\r
  }\r
  dequeue() {\r
    this.exampleSignal.dequeue();\r
  }\r
  clear() {\r
    this.exampleSignal.clear();\r
  }\r
  update() {\r
    this.exampleSignal.update(v => v.filter(el => el.length <= 5));\r
  }\r
}\r
`};var Ud=(()=>{class t{constructor(){this.exampleSignal=yo(["Peas","Lettuce","Corn"])}add(e){e&&this.exampleSignal.add(e)}delete(e){e&&this.exampleSignal.delete(e)}update(){this.exampleSignal.update(e=>new Set([...e].map(i=>i.toLowerCase())))}clear(){this.exampleSignal.clear()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["set-signal-basic-example"]],decls:20,vars:3,consts:[["value",""],[1,"left-side"],[1,"inputs"],["type","text","placeholder","Value"],[3,"click"],[1,"right-side"]],template:function(i,r){if(i&1){let l=W();o(0,"div",1)(1,"div",2),b(2,"input",3,0),a(),o(4,"div")(5,"button",4),_("click",function(){T(l);let u=M(3);return D(r.add(u.value))}),s(6,"Add value"),a(),o(7,"button",4),_("click",function(){T(l);let u=M(3);return D(r.delete(u.value))}),s(8,"Delete value"),a(),o(9,"button",4),_("click",function(){return T(l),D(r.clear())}),s(10,"Clear"),a(),o(11,"button",4),_("click",function(){return T(l),D(r.update())}),s(12,"Update (to lowercase)"),a()()(),o(13,"div",5)(14,"p"),s(15),a(),o(16,"p"),s(17),a(),o(18,"p"),s(19),a()()}i&2&&(d(15),w("isEmpty: ",r.exampleSignal.isEmpty().toString(),""),d(2),w("size: ",r.exampleSignal.size().toString(),""),d(2),v(r.exampleSignal.asArray()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:3rem}.inputs[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}input[_ngcontent-%COMP%]{margin-right:.25rem;max-width:10rem}button[_ngcontent-%COMP%]{margin-right:1rem;margin-top:.75rem;padding:0 .125rem}"]})}}return t})();var xF={component:Ud,html:`<div class="left-side">\r
  <div class="inputs">\r
    <input type="text" #value placeholder="Value" />\r
  </div>\r
  <div>\r
    <button (click)="add(value.value)">Add value</button>\r
    <button (click)="delete(value.value)">Delete value</button>\r
    <button (click)="clear()">Clear</button>\r
    <button (click)="update()">Update (to lowercase)</button>\r
  </div>\r
</div>\r
<div class="right-side">\r
  <p>isEmpty: {{ exampleSignal.isEmpty().toString() }}</p>\r
  <p>size: {{ exampleSignal.size().toString() }}</p>\r
  <p>{{ exampleSignal.asArray() }}</p>\r
</div>\r
`,scss:`:host {\r
  display: grid;\r
  grid-template-columns: 1fr 1fr;\r
}\r
.left-side {\r
  padding-top: 3rem;\r
}\r
.inputs {\r
  display: flex;\r
  flex-wrap: wrap;\r
}\r
input {\r
  margin-right: 0.25rem;\r
  max-width: 10rem;\r
}\r
button {\r
  margin-right: 1rem;\r
  margin-top: 0.75rem;\r
  padding: 0 0.125rem;\r
}`,ts:`import { Component } from '@angular/core';\r
import { setSignal } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'set-signal-basic-example',\r
  templateUrl: './set-signal-basic-example.html',\r
  styleUrl: './set-signal-basic-example.scss',\r
  standalone: true,\r
  imports: [],\r
})\r
export class SetSignalBasicExample {\r
  readonly exampleSignal = setSignal<string>(['Peas', 'Lettuce', 'Corn']);\r
\r
  add(value: string) {\r
    if (!value) return;\r
    this.exampleSignal.add(value);\r
  }\r
  delete(value: string) {\r
    if (!value) return;\r
    this.exampleSignal.delete(value);\r
  }\r
  update() {\r
    this.exampleSignal.update(m => new Set([...m].map(v => v.toLowerCase())));\r
  }\r
  clear() {\r
    this.exampleSignal.clear();\r
  }\r
}\r
`};function dv(t,n){if(t&1&&(o(0,"li"),s(1),a()),t&2){let e=n.$implicit;d(),v(e)}}var Nd=(()=>{class t{constructor(){this.exampleSignal=Co(["Pizza","Spaghetti","Tomatoes"])}push(e){e&&this.exampleSignal.push(e)}pop(){this.exampleSignal.pop()}clear(){this.exampleSignal.clear()}update(){this.exampleSignal.update(e=>e.filter(i=>i.length<=5))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["stack-signal-basic-example"]],decls:20,vars:2,consts:[["pushText",""],[1,"left-side"],["type","text","placeholder","Text to push..."],[3,"click"],[1,"right-side"],["reversed",""]],template:function(i,r){if(i&1){let l=W();o(0,"div",1)(1,"div"),b(2,"input",2,0),a(),o(4,"button",3),_("click",function(){T(l);let u=M(3);return D(r.push(u.value))}),s(5,"Push"),a(),o(6,"button",3),_("click",function(){return T(l),D(r.pop())}),s(7,"Pop"),a(),o(8,"button",3),_("click",function(){return T(l),D(r.clear())}),s(9,"Clear"),a(),o(10,"button",3),_("click",function(){return T(l),D(r.update())}),s(11,"Update (leave only short)"),a()(),o(12,"div",4)(13,"p"),s(14),a(),o(15,"p"),s(16),a(),o(17,"ol",5),U(18,dv,2,1,"li",null,Tt),a()()}i&2&&(d(14),w("isEmpty: ",r.exampleSignal.isEmpty().toString(),""),d(2),w("size: ",r.exampleSignal.size().toString(),""),d(2),N(r.exampleSignal()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:3rem}button[_ngcontent-%COMP%]{margin-top:.75rem;margin-right:1rem;padding:0 .125rem}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0;line-height:1.2}"]})}}return t})();var EF={component:Nd,html:`<div class="left-side">\r
  <div>\r
    <input type="text" #pushText placeholder="Text to push..." />\r
  </div>\r
  <button (click)="push(pushText.value)">Push</button>\r
  <button (click)="pop()">Pop</button>\r
  <button (click)="clear()">Clear</button>\r
  <button (click)="update()">Update (leave only short)</button>\r
</div>\r
<div class="right-side">\r
  <p>isEmpty: {{ exampleSignal.isEmpty().toString() }}</p>\r
  <p>size: {{ exampleSignal.size().toString() }}</p>\r
  <ol reversed>\r
    @for (item of exampleSignal(); track item) {\r
    <li>{{ item }}</li>\r
    }\r
  </ol>\r
</div>\r
`,scss:`:host {\r
  display: grid;\r
  grid-template-columns: 1fr 1fr;\r
}\r
.left-side {\r
  padding-top: 3rem;\r
}\r
button {\r
  margin-top: 0.75rem;\r
  margin-right: 1rem;\r
  padding: 0 0.125rem;\r
}\r
ol {\r
  li {\r
    margin: 0;\r
    line-height: 1.2;\r
  }\r
}`,ts:`import { Component } from '@angular/core';\r
import { stackSignal } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'stack-signal-basic-example',\r
  templateUrl: './stack-signal-basic-example.html',\r
  styleUrl: './stack-signal-basic-example.scss',\r
  standalone: true,\r
  imports: [],\r
})\r
export class StackSignalBasicExample {\r
  readonly exampleSignal = stackSignal<string>(['Pizza', 'Spaghetti', 'Tomatoes']);\r
\r
  push(value: string) {\r
    if (!value) return;\r
    this.exampleSignal.push(value);\r
  }\r
  pop() {\r
    this.exampleSignal.pop();\r
  }\r
  clear() {\r
    this.exampleSignal.clear();\r
  }\r
  update() {\r
    this.exampleSignal.update(v => v.filter(el => el.length <= 5));\r
  }\r
}\r
`};var jd=(()=>{class t{constructor(){this.throttledValue=bo("",500)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["throttled-signal-example"]],decls:5,vars:2,consts:[["for","throttled-input"],["type","text","id","throttled-input","placeholder","Search...",3,"ngModelChange","ngModel"]],template:function(i,r){i&1&&(o(0,"label",0),s(1,"What are you looking for?"),a(),o(2,"input",1),q("ngModelChange",function(c){return K(r.throttledValue,c)||(r.throttledValue=c),c}),a(),o(3,"p"),s(4),a()),i&2&&(d(2),z("ngModel",r.throttledValue),d(2),w("Throttled value: ",r.throttledValue(),""))},dependencies:[ue,fe,ce,_e],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var PF={component:jd,html:`<label for="throttled-input">What are you looking for?</label>\r
<input type="text" id="throttled-input" [(ngModel)]="throttledValue" placeholder="Search..." />\r
\r
<p>Throttled value: {{ throttledValue() }}</p>\r
`,scss:`p {\r
  margin-top: 1rem;\r
}\r
button {\r
  margin-left: 0.25rem;\r
}`,ts:`import { Component } from '@angular/core';\r
import { FormsModule } from '@angular/forms';\r
import { throttledSignal } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'throttled-signal-example',\r
  templateUrl: './throttled-signal-example.html',\r
  styleUrl: './throttled-signal-example.scss',\r
  standalone: true,\r
  imports: [FormsModule],\r
})\r
export class ThrottledSignalExample {\r
  readonly throttledValue = throttledSignal<string>('', 500);\r
}\r
`};function cv(t,n){if(t&1&&(o(0,"tr")(1,"td"),s(2),a(),o(3,"td"),s(4),a()()),t&2){let e=n.$implicit;d(2),v(e[0]),d(2),v(e[1])}}var Yd=(()=>{class t{constructor(){this.exampleSignal=xo(["Peas",5,!0])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["tuple-signal-basic-example"]],decls:24,vars:3,consts:[[1,"left-side"],[1,"row"],["type","text",3,"ngModelChange","ngModel"],["type","number",3,"ngModelChange","ngModel"],["type","checkbox",3,"ngModelChange","ngModel"],[1,"right-side"],["width","32"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"div",1)(2,"label"),s(3,"Value at index 0"),a(),o(4,"input",2),_("ngModelChange",function(c){return r.exampleSignal.setAt(0,c)}),a()(),o(5,"div",1)(6,"label"),s(7,"Value at index 1"),a(),o(8,"input",3),_("ngModelChange",function(c){return r.exampleSignal.setAt(1,c)}),a()(),o(9,"div",1)(10,"label"),s(11,"Value at index 2"),a(),o(12,"input",4),_("ngModelChange",function(c){return r.exampleSignal.setAt(2,c)}),a()()(),o(13,"div",5)(14,"table")(15,"thead")(16,"tr")(17,"th",6),s(18,"Key"),a(),o(19,"th"),s(20,"Value"),a()()(),o(21,"tbody"),U(22,cv,5,2,"tr",null,X),a()()()),i&2&&(d(4),p("ngModel",r.exampleSignal()[0]),d(4),p("ngModel",r.exampleSignal()[1]),d(4),p("ngModel",r.exampleSignal()[2]),d(10),N(r.exampleSignal.entriesArray()))},dependencies:[ue,fe,Ki,Yr,ce,_e],styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:1rem}.row[_ngcontent-%COMP%]{padding:.5rem 0}input[_ngcontent-%COMP%]{max-width:10rem}label[_ngcontent-%COMP%]{padding-bottom:0}"]})}}return t})();var HF={component:Yd,html:`<div class="left-side">\r
  <div class="row">\r
    <label>Value at index 0</label>\r
    <input type="text" [ngModel]="exampleSignal()[0]" (ngModelChange)="exampleSignal.setAt(0, $event)" />\r
  </div>\r
  <div class="row">\r
    <label>Value at index 1</label>\r
    <input type="number" [ngModel]="exampleSignal()[1]" (ngModelChange)="exampleSignal.setAt(1, $event)" />\r
  </div>\r
  <div class="row">\r
    <label>Value at index 2</label>\r
    <input type="checkbox" [ngModel]="exampleSignal()[2]" (ngModelChange)="exampleSignal.setAt(2, $event)" />\r
  </div>\r
</div>\r
<div class="right-side">\r
  <table>\r
    <thead>\r
      <tr>\r
        <th width="32">Key</th>\r
        <th>Value</th>\r
      </tr>\r
    </thead>\r
    <tbody>\r
      @for (pair of exampleSignal.entriesArray(); track $index) {\r
      <tr>\r
        <td>{{ pair[0] }}</td>\r
        <td>{{ pair[1] }}</td>\r
      </tr>\r
      }\r
    </tbody>\r
  </table>\r
</div>\r
`,scss:`:host {\r
  display: grid;\r
  grid-template-columns: 1fr 1fr;\r
}\r
.left-side {\r
  padding-top: 1rem;\r
}\r
.row {\r
  padding: 0.5rem 0;\r
}\r
input {\r
  max-width: 10rem;\r
}\r
label {\r
  padding-bottom: 0;\r
}`,ts:`import { Component } from '@angular/core';\r
import { FormsModule } from '@angular/forms';\r
import { tupleSignal } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'tuple-signal-basic-example',\r
  templateUrl: './tuple-signal-basic-example.html',\r
  styleUrl: './tuple-signal-basic-example.scss',\r
  standalone: true,\r
  imports: [FormsModule],\r
})\r
export class TupleSignalBasicExample {\r
  readonly exampleSignal = tupleSignal<[string, number, boolean]>(['Peas', 5, true]);\r
}\r
`};var uv=["exampleBox"],pv=(t,n,e,i)=>({width:t,height:n,padding:e,borderWidth:i}),$d=(()=>{class t{constructor(){this.width=S("200px"),this.height=S("100px"),this.padding=S("12px 24px"),this.border=S("4px"),this.exampleBox=Ae("exampleBox"),this._cd=F(Yt)}onScroll(){this._cd.markForCheck()}getBoundingClientRect(){return this.exampleBox().nativeElement.getBoundingClientRect()}getPaddingRect(){return To(this.exampleBox())}getContentRect(){return wo(this.exampleBox())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["dom-boxes-example"]],viewQuery:function(i,r){i&1&&Fe(r.exampleBox,uv,5),i&2&&de()},hostBindings:function(i,r){i&1&&_("scroll",function(){return r.onScroll()},!1,at)("resize",function(){return r.onScroll()},!1,lr)},decls:54,vars:22,consts:[["exampleBox",""],[1,"inputs"],["for","width"],["type","text","id","width",3,"ngModelChange","ngModel"],["for","height"],["type","text","id","height",3,"ngModelChange","ngModel"],["for","padding"],["type","text","id","padding",3,"ngModelChange","ngModel"],["for","border"],["type","text","id","border",3,"ngModelChange","ngModel"],[1,"example-box",3,"ngStyle"],[1,"values"],[1,"value"]],template:function(i,r){if(i&1){let l=W();o(0,"div",1)(1,"div")(2,"label",2),s(3,"Width"),a(),o(4,"input",3),q("ngModelChange",function(u){return T(l),K(r.width,u)||(r.width=u),D(u)}),a()(),o(5,"div")(6,"label",4),s(7,"Height"),a(),o(8,"input",5),q("ngModelChange",function(u){return T(l),K(r.height,u)||(r.height=u),D(u)}),a()(),o(9,"div")(10,"label",6),s(11,"Padding"),a(),o(12,"input",7),q("ngModelChange",function(u){return T(l),K(r.padding,u)||(r.padding=u),D(u)}),a()(),o(13,"div")(14,"label",8),s(15,"Border"),a(),o(16,"input",9),q("ngModelChange",function(u){return T(l),K(r.border,u)||(r.border=u),D(u)}),a()()(),o(17,"div",10,0),b(19,"div"),a(),o(20,"div",11)(21,"div",12)(22,"strong"),s(23,"Bounding Client Rect"),a(),o(24,"span"),s(25),a(),o(26,"span"),s(27),a(),o(28,"span"),s(29),a(),o(30,"span"),s(31),a()(),o(32,"div",12)(33,"strong"),s(34,"Padding Rect"),a(),o(35,"span"),s(36),a(),o(37,"span"),s(38),a(),o(39,"span"),s(40),a(),o(41,"span"),s(42),a()(),o(43,"div",12)(44,"strong"),s(45,"Content Rect"),a(),o(46,"span"),s(47),a(),o(48,"span"),s(49),a(),o(50,"span"),s(51),a(),o(52,"span"),s(53),a()()()}i&2&&(d(4),z("ngModel",r.width),d(4),z("ngModel",r.height),d(4),z("ngModel",r.padding),d(4),z("ngModel",r.border),d(),p("ngStyle",Ga(17,pv,r.width(),r.height(),r.padding(),r.border())),d(8),w("Top: ",r.getBoundingClientRect().top,""),d(2),w("Left: ",r.getBoundingClientRect().left,""),d(2),w("Width: ",r.getBoundingClientRect().width,""),d(2),w("Height: ",r.getBoundingClientRect().height,""),d(5),w("Top: ",r.getPaddingRect().top,""),d(2),w("Left: ",r.getPaddingRect().left,""),d(2),w("Width: ",r.getPaddingRect().width,""),d(2),w("Height: ",r.getPaddingRect().height,""),d(5),w("Top: ",r.getContentRect().top,""),d(2),w("Left: ",r.getContentRect().left,""),d(2),w("Width: ",r.getContentRect().width,""),d(2),w("Height: ",r.getContentRect().height,""))},dependencies:[te,Ja,ue,fe,ce,_e],styles:[".inputs[_ngcontent-%COMP%]{display:grid;grid-template-columns:max-content max-content;grid-template-rows:max-content max-content;gap:1rem 2rem}.example-box[_ngcontent-%COMP%]{margin:2rem 0;background-color:#c3deb7;border:solid #FFEEBC;box-sizing:content-box}.example-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#a0c5e8;height:100%}.values[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,max-content);gap:2rem}.values[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:max-content}"]})}}return t})();var QF={component:$d,html:`<div class="inputs">\r
  <div>\r
    <label for="width">Width</label>\r
    <input type="text" id="width" [(ngModel)]="width" />\r
  </div>\r
  <div>\r
    <label for="height">Height</label>\r
    <input type="text" id="height" [(ngModel)]="height" />\r
  </div>\r
  <div>\r
    <label for="padding">Padding</label>\r
    <input type="text" id="padding" [(ngModel)]="padding" />\r
  </div>\r
  <div>\r
    <label for="border">Border</label>\r
    <input type="text" id="border" [(ngModel)]="border" />\r
  </div>\r
</div>\r
<div\r
  class="example-box"\r
  #exampleBox\r
  [ngStyle]="{\r
  width: width(),\r
  height: height(),\r
  padding: padding(),\r
  borderWidth: border(),\r
}"\r
>\r
<div></div>\r
</div>\r
<div class="values">\r
  <div class="value">\r
    <strong>Bounding Client Rect</strong>\r
    <span>Top: {{ getBoundingClientRect().top }}</span>\r
    <span>Left: {{ getBoundingClientRect().left }}</span>\r
    <span>Width: {{ getBoundingClientRect().width }}</span>\r
    <span>Height: {{ getBoundingClientRect().height }}</span>\r
  </div>\r
  <div class="value">\r
    <strong>Padding Rect</strong>\r
    <span>Top: {{ getPaddingRect().top }}</span>\r
    <span>Left: {{ getPaddingRect().left }}</span>\r
    <span>Width: {{ getPaddingRect().width }}</span>\r
    <span>Height: {{ getPaddingRect().height }}</span>\r
  </div>\r
  <div class="value">\r
    <strong>Content Rect</strong>\r
    <span>Top: {{ getContentRect().top }}</span>\r
    <span>Left: {{ getContentRect().left }}</span>\r
    <span>Width: {{ getContentRect().width }}</span>\r
    <span>Height: {{ getContentRect().height }}</span>\r
  </div>\r
</div>\r
`,scss:`.inputs {\r
  display: grid;\r
  grid-template-columns: max-content max-content;\r
  grid-template-rows: max-content max-content;\r
  gap: 1rem 2rem;\r
}\r
.example-box {\r
  margin: 2rem 0;\r
  background-color: #C3DEB7;\r
  border: solid #FFEEBC;\r
  box-sizing: content-box;\r
\r
  div {\r
    background-color: #A0C5E8;\r
    height: 100%;\r
  }\r
}\r
.values {\r
  display: grid;\r
  grid-template-columns: repeat(3, max-content);\r
  gap: 2rem;\r
\r
  .value {\r
    display: flex;\r
    flex-direction: column;\r
    width: max-content;\r
  }\r
}`,ts:`import { CommonModule } from '@angular/common';\r
import { ChangeDetectorRef, Component, ElementRef, HostListener, inject, signal, viewChild } from '@angular/core';\r
import { FormsModule } from '@angular/forms';\r
import { getDomContentRect, getDomPaddingRect } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'dom-boxes-example',\r
  templateUrl: './dom-boxes-example.html',\r
  styleUrl: './dom-boxes-example.scss',\r
  standalone: true,\r
  imports: [CommonModule, FormsModule],\r
})\r
export class DomBoxesExample {\r
  readonly width = signal<string>('200px');\r
  readonly height = signal<string>('100px');\r
  readonly padding = signal<string>('12px 24px');\r
  readonly border = signal<string>('4px');\r
\r
  readonly exampleBox = viewChild<ElementRef<HTMLElement>>('exampleBox');\r
\r
  private readonly _cd = inject(ChangeDetectorRef);\r
  @HostListener('document:scroll')\r
  @HostListener('window:resize')\r
  onScroll() {\r
    this._cd.markForCheck();\r
  }\r
\r
  getBoundingClientRect(): DOMRect {\r
    return this.exampleBox()!.nativeElement.getBoundingClientRect();\r
  }\r
  getPaddingRect(): DOMRect {\r
    return getDomPaddingRect(this.exampleBox()!);\r
  }\r
  getContentRect(): DOMRect {\r
    return getDomContentRect(this.exampleBox()!);\r
  }\r
}\r
`};var Wd=(()=>{class t{constructor(){this.inputValue=S("How would <b>this</b> text be displayed?")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["escape-html-example"]],decls:13,vars:5,consts:[[3,"ngModelChange","ngModel"],[1,"grid"],[3,"innerHTML"]],template:function(i,r){i&1&&(o(0,"textarea",0),q("ngModelChange",function(c){return K(r.inputValue,c)||(r.inputValue=c),c}),a(),o(1,"div",1)(2,"div")(3,"strong"),s(4,"Unescaped:"),a(),b(5,"br")(6,"p",2),a(),o(7,"div")(8,"strong"),s(9,"Escaped:"),a(),b(10,"br")(11,"p",2),et(12,"escapeHTML"),a()()),i&2&&(z("ngModel",r.inputValue),d(6),p("innerHTML",r.inputValue(),le),d(5),p("innerHTML",Dt(12,3,r.inputValue()),le))},dependencies:[yr,lo,ue,fe,ce,_e],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:.5rem}textarea[_ngcontent-%COMP%]{padding:.25rem .375rem;min-height:5em;resize:vertical}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}strong[_ngcontent-%COMP%]{line-height:1.5}"]})}}return t})();var nI={component:Wd,html:`<textarea [(ngModel)]="inputValue"></textarea>\r
<div class="grid">\r
  <div>\r
    <strong>Unescaped:</strong>\r
    <br />\r
    <p [innerHTML]="inputValue()"></p>\r
  </div>\r
  <div>\r
    <strong>Escaped:</strong>\r
    <br />\r
    <p [innerHTML]="inputValue() | escapeHTML"></p>\r
  </div>\r
</div>\r
`,scss:`:host {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.5rem;\r
}\r
textarea {\r
  padding: 0.25rem 0.375rem;\r
  min-height: 5em;\r
  resize: vertical;\r
}\r
.grid {\r
  display: grid;\r
  grid-template-columns: 1fr 1fr;\r
}\r
strong {\r
  line-height: 1.5;\r
}`,ts:`import { Component, signal } from "@angular/core";\r
import { FormsModule } from "@angular/forms";\r
import { ArdiumEscapeHTMLModule } from "@ardium-ui/devkit";\r
\r
@Component({\r
  selector: 'escape-html-example',\r
  templateUrl: './escape-html-example.html',\r
  styleUrl: './escape-html-example.scss',\r
  standalone: true,\r
  imports: [ArdiumEscapeHTMLModule, FormsModule],\r
})\r
export class EscapeHtmlExample {\r
  readonly inputValue = signal<string>('How would <b>this</b> text be displayed?');\r
}`};var zd=(()=>{class t{constructor(){this.file=S(void 0)}onFileUpload(e){this.file.set(e.target.files?.[0])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["file-pipes-example"]],decls:21,vars:10,consts:[["type","file","id","file",3,"change"],[1,"values"]],template:function(i,r){if(i&1&&(o(0,"input",0),_("change",function(c){return r.onFileUpload(c)}),a(),o(1,"div",1)(2,"strong"),s(3,"Full file name:"),a(),o(4,"span"),s(5),a(),o(6,"strong"),s(7,"File name:"),a(),o(8,"span"),s(9),et(10,"filename"),a(),o(11,"strong"),s(12,"File extension:"),a(),o(13,"span"),s(14),et(15,"fileext"),a(),o(16,"strong"),s(17,"File size:"),a(),o(18,"span"),s(19),et(20,"filesize"),a()()),i&2){let l;d(5),v((l=r.file())==null?null:l.name),d(4),v(Dt(10,4,r.file())),d(5),v(Dt(15,6,r.file())),d(5),v(Dt(20,8,r.file()))}},dependencies:[Cr,po,mo,ho],styles:[".values[_ngcontent-%COMP%]{margin-top:1rem;display:grid;grid-template-columns:max-content max-content;gap:.25rem 1rem}"]})}}return t})();var cI={component:zd,html:`<input type="file" id="file" (change)="onFileUpload($event)">\r
\r
<div class="values">\r
  <strong>Full file name:</strong>\r
  <span>{{ file()?.name }}</span>\r
  <strong>File name:</strong>\r
  <span>{{ file() | filename }}</span>\r
  <strong>File extension:</strong>\r
  <span>{{ file() | fileext }}</span>\r
  <strong>File size:</strong>\r
  <span>{{ file() | filesize }}</span>\r
</div>`,scss:`.values {\r
  margin-top: 1rem;\r
  display: grid;\r
  grid-template-columns: max-content max-content;\r
  gap: 0.25rem 1rem;\r
}`,ts:`import { Component, signal } from '@angular/core';\r
import { ArdiumFilePipesModule } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'file-pipes-example',\r
  templateUrl: './file-pipes-example.html',\r
  styleUrl: './file-pipes-example.scss',\r
  standalone: true,\r
  imports: [ArdiumFilePipesModule],\r
})\r
export class FilePipesExample {\r
  readonly file = signal<File | undefined>(undefined);\r
\r
  onFileUpload(event: Event): void {\r
    this.file.set((event.target as HTMLInputElement).files?.[0]);\r
  }\r
}\r
`};function mv(t,n){if(t&1){let e=W();o(0,"button",0),_("click",function(){T(e);let r=f();return D(r.onButtonClick())}),s(1,"Find out"),a()}}function hv(t,n){t&1&&(o(0,"p"),s(1,"File System API is "),o(2,"strong",1),s(3,"supported"),a(),s(4,"! You can view the below examples."),a())}function fv(t,n){t&1&&(o(0,"p"),s(1," File System API is "),o(2,"strong",2),s(3,"not supported"),a(),s(4,". You will not be able to correctly view the below examples. See the "),o(5,"a",3),s(6,"caniuse.com page"),a(),s(7,` to find out which browsers are supported.
`),a())}function gv(t,n){if(t&1&&g(0,hv,5,0,"p")(1,fv,8,0,"p"),t&2){let e=f();y(e.isSupported()?0:1)}}var Kd=(()=>{class t{constructor(){this.fileSystem=F(Wt),this.hasClicked=S(!1),this.isSupported=S(!1)}onButtonClick(){this.hasClicked.set(!0),this.isSupported.set(this.fileSystem.isFileSystemAPISupported("showOpenFilePicker"))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["file-system-is-supported-example"]],decls:5,vars:2,consts:[[3,"click"],[1,"supported"],[1,"not-supported"],["href","https://caniuse.com/native-filesystem-api"]],template:function(i,r){i&1&&(o(0,"p")(1,"span"),s(2,"Does your browser support File System API?"),a(),g(3,mv,2,0,"button"),a(),g(4,gv,2,1)),i&2&&(d(3),y(r.hasClicked()?-1:3),d(),y(r.hasClicked()?4:-1))},styles:["button[_ngcontent-%COMP%]{margin-left:1ch}.supported[_ngcontent-%COMP%]{color:green}.not-supported[_ngcontent-%COMP%]{color:#ff4500}"]})}}return t})();var _I={component:Kd,html:`<p>\r
  <span>Does your browser support File System API?</span>\r
  @if (!hasClicked()) {\r
  <button (click)="onButtonClick()">Find out</button>\r
  }\r
</p>\r
@if (hasClicked()) { @if (isSupported()) {\r
<p>File System API is <strong class="supported">supported</strong>! You can view the below examples.</p>\r
} @else {\r
<p>\r
  File System API is <strong class="not-supported">not supported</strong>. You will not be able to correctly view the\r
  below examples. See the <a href="https://caniuse.com/native-filesystem-api">caniuse.com page</a> to find out which browsers are supported.\r
</p>\r
} }\r
`,scss:`button {\r
  margin-left: 1ch;\r
}\r
.supported {\r
  color: green;\r
}\r
.not-supported {\r
  color: orangered;\r
}`,ts:`import { Component, inject, signal } from '@angular/core';\r
import { FileSystemService } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'file-system-is-supported-example',\r
  templateUrl: './file-system-is-supported-example.html',\r
  styleUrl: './file-system-is-supported-example.scss',\r
  standalone: true,\r
  imports: [],\r
})\r
export class FileSystemIsSupportedExample {\r
  readonly fileSystem = inject(FileSystemService);\r
\r
  readonly hasClicked = signal<boolean>(false);\r
  readonly isSupported = signal<boolean>(false);\r
\r
  onButtonClick(): void {\r
    this.hasClicked.set(true);\r
    this.isSupported.set(this.fileSystem.isFileSystemAPISupported('showOpenFilePicker'));\r
  }\r
}\r
`};function _v(t,n){if(t&1&&(s(0," Uploaded "),o(1,"i"),s(2),a()),t&2){let e=f();d(2),v(e.fileName())}}function vv(t,n){t&1&&s(0," File upload request was cancelled. ")}var qd=(()=>{class t{constructor(){this.fileSystem=F(Wt),this.successfulUpload=S(null),this.fileName=S("")}onButtonClick(){return Se(this,null,function*(){let e=yield this.fileSystem.requestFileUpload({directoryId:"gorilla",startDirectory:hn.Downloads,method:Ri.PreferFileSystem,multiple:!1,types:[{description:"Text files",accept:{"text/plain":[".txt"]}},{description:"Image files",accept:{"image/png":[".png"],"image/jpeg":[".jpg",".jpeg"]}},{description:"PDF files",accept:{"application/pdf":[".pdf"]}}]});this.successfulUpload.set(!!e),this.successfulUpload()&&this.fileName.set(e?.name??"No file name")})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["file-system-request-upload-example"]],decls:5,vars:1,consts:[[3,"click"]],template:function(i,r){i&1&&(o(0,"button",0),_("click",function(){return r.onButtonClick()}),s(1,"Click here to upload a file"),a(),o(2,"p"),g(3,_v,3,1)(4,vv,1,0),a()),i&2&&(d(3),y(r.successfulUpload()===!0?3:r.successfulUpload()===!1?4:-1))},dependencies:[te],encapsulation:2})}}return t})();var SI={component:qd,html:`<button (click)="onButtonClick()">Click here to upload a file</button>\r
<p>\r
  @if (successfulUpload() === true) { Uploaded <i>{{ fileName() }}</i>\r
  } @else if (successfulUpload() === false) { File upload request was cancelled. }\r
</p>\r
`,scss:"",ts:`import { CommonModule } from '@angular/common';\r
import { Component, inject, signal } from '@angular/core';\r
import { FileSystemMethod, FileSystemService, FileSystemStartDirectory } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'file-system-request-upload-example',\r
  templateUrl: './file-system-request-upload-example.html',\r
  styleUrl: './file-system-request-upload-example.scss',\r
  standalone: true,\r
  imports: [CommonModule],\r
})\r
export class FileSystemRequestUploadExample {\r
  readonly fileSystem = inject(FileSystemService);\r
\r
  readonly successfulUpload = signal<boolean | null>(null);\r
  readonly fileName = signal<string>('');\r
\r
  async onButtonClick() {\r
    const file = await this.fileSystem.requestFileUpload({\r
      directoryId: 'gorilla',\r
      startDirectory: FileSystemStartDirectory.Downloads,\r
      method: FileSystemMethod.PreferFileSystem,\r
      multiple: false,\r
      types: [\r
        { description: 'Text files', accept: { 'text/plain': ['.txt'] } },\r
        { description: 'Image files', accept: { 'image/png': ['.png'], 'image/jpeg': ['.jpg', '.jpeg'] } },\r
        { description: 'PDF files', accept: { 'application/pdf': ['.pdf'] } },\r
      ],\r
    }) as File | null;\r
    this.successfulUpload.set(!!file);\r
    if (this.successfulUpload()) {\r
      this.fileName.set(file?.name ?? 'No file name')\r
    }\r
  }\r
}\r
`};var Qd=(()=>{class t{constructor(){this.fileSystem=F(Wt),this.fileName=S("gorillas.txt"),this.textToSave=S("Gorillas like to eat bamboo.")}onButtonClick(){this.fileSystem.saveAs(this.textToSave(),{fileName:this.fileName(),method:Ri.PreferFileSystem,directoryId:"gorillas",startDirectory:hn.Downloads})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["file-system-save-as-example"]],decls:4,vars:2,consts:[["type","text",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,r){i&1&&(o(0,"input",0),q("ngModelChange",function(c){return K(r.fileName,c)||(r.fileName=c),c}),a(),o(1,"textarea",1),q("ngModelChange",function(c){return K(r.textToSave,c)||(r.textToSave=c),c}),a(),o(2,"button",2),_("click",function(){return r.onButtonClick()}),s(3,"Save to file"),a()),i&2&&(z("ngModel",r.fileName),d(),z("ngModel",r.textToSave))},dependencies:[te,ue,fe,ce,_e],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:.5rem;align-items:flex-start}input[_ngcontent-%COMP%]{min-width:200px}textarea[_ngcontent-%COMP%]{min-width:300px;min-height:100px}"]})}}return t})();var OI={component:Qd,html:`<input type="text" [(ngModel)]="fileName">\r
<textarea [(ngModel)]="textToSave"></textarea>\r
<button (click)="onButtonClick()">Save to file</button>`,scss:`:host {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.5rem;\r
  align-items: flex-start;\r
}\r
input {\r
  min-width: 200px;\r
}\r
textarea {\r
  min-width: 300px;\r
  min-height: 100px;\r
}`,ts:`import { CommonModule } from '@angular/common';\r
import { Component, inject, signal } from '@angular/core';\r
import { FormsModule } from '@angular/forms';\r
import { FileSystemMethod, FileSystemService, FileSystemStartDirectory } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'file-system-save-as-example',\r
  templateUrl: './file-system-save-as-example.html',\r
  styleUrl: './file-system-save-as-example.scss',\r
  standalone: true,\r
  imports: [CommonModule, FormsModule],\r
})\r
export class FileSystemSaveAsExample {\r
  readonly fileSystem = inject(FileSystemService);\r
\r
  readonly fileName = signal<string>('gorillas.txt');\r
  readonly textToSave = signal<string>('Gorillas like to eat bamboo.');\r
\r
  onButtonClick(): void {\r
    this.fileSystem.saveAs(this.textToSave(), {\r
      fileName: this.fileName(),\r
      method: FileSystemMethod.PreferFileSystem,\r
      directoryId: 'gorillas',\r
      startDirectory: FileSystemStartDirectory.Downloads,\r
    });\r
  }\r
}\r
`};var Gd=(()=>{class t{constructor(){this.eventCounter=S(0)}onHoldEvent(){this.eventCounter.update(e=>e+1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["hold-basic-example"]],decls:4,vars:1,consts:[[3,"ardHold"]],template:function(i,r){i&1&&(o(0,"button",0),_("ardHold",function(){return r.onHoldEvent()}),s(1,"Click and Hold"),a(),o(2,"p"),s(3),a()),i&2&&(d(3),w(" Total events fired: ",r.eventCounter(),`
`))},dependencies:[Li,fn],encapsulation:2})}}return t})();var jI={component:Gd,html:`<button (ardHold)="onHoldEvent()">Click and Hold</button>\r
<p>\r
  Total events fired: {{ eventCounter() }}\r
</p>\r
`,ts:`import { Component, signal } from '@angular/core';\r
import { ArdiumHoldModule } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'hold-basic-example',\r
  templateUrl: './hold-basic-example.html',\r
  standalone: true,\r
  imports: [ArdiumHoldModule],\r
})\r
export class HoldBasicExample {\r
  readonly eventCounter = signal<number>(0);\r
\r
  onHoldEvent(): void {\r
    this.eventCounter.update(v => v + 1);\r
  }\r
}\r
`};var Xd=(()=>{class t{constructor(){this.eventCounter=S(0)}onHoldEvent(){this.eventCounter.update(e=>e+1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["hold-timings-example"]],decls:4,vars:1,consts:[["ardHoldDelay","2000","ardHoldRepeat","200",3,"ardHold"]],template:function(i,r){i&1&&(o(0,"button",0),_("ardHold",function(){return r.onHoldEvent()}),s(1,` Click and Hold - but this time very slow
`),a(),o(2,"p"),s(3),a()),i&2&&(d(3),w("Total events fired: ",r.eventCounter(),""))},dependencies:[Li,fn],encapsulation:2})}}return t})();var QI={component:Xd,html:`<button (ardHold)="onHoldEvent()" ardHoldDelay="2000" ardHoldRepeat="200">\r
  Click and Hold - but this time very slow\r
</button>\r
<p>Total events fired: {{ eventCounter() }}</p>\r
`,ts:`import { Component, signal } from '@angular/core';\r
import { ArdiumHoldModule } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'hold-timings-example',\r
  templateUrl: './hold-timings-example.html',\r
  standalone: true,\r
  imports: [ArdiumHoldModule],\r
})\r
export class HoldTimingsExample {\r
  readonly eventCounter = signal<number>(0);\r
\r
  onHoldEvent(): void {\r
    this.eventCounter.update(v => v + 1);\r
  }\r
}\r
`};function yv(t,n){if(t&1&&(o(0,"div"),s(1),a()),t&2){let e=n.$implicit;d(),v(e)}}var Zd=(()=>{class t{constructor(){this.currentPage=S(1),this.items=I(()=>new Array(this.currentPage()*5).fill(0).map((e,i)=>i)),this.isInfScrollActive=S(!0)}onThresholdReach(){console.log(`Threshold has been reached! Loading data for page ${this.currentPage()+1}...`),setTimeout(()=>{this.currentPage.update(e=>e+1),this.isInfScrollActive.set(!0)},100)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["infinite-scroll-host-example"]],decls:3,vars:1,consts:[["ardInfScroll","","ardInfScrollTarget","host",1,"scroll-host",3,"ardInfScrollReachThreshold","ardInfScrollActiveChange","ardInfScrollActive"]],template:function(i,r){i&1&&(o(0,"div",0),_("ardInfScrollReachThreshold",function(){return r.onThresholdReach()}),q("ardInfScrollActiveChange",function(c){return K(r.isInfScrollActive,c)||(r.isInfScrollActive=c),c}),U(1,yv,2,1,"div",null,X),a()),i&2&&(z("ardInfScrollActive",r.isInfScrollActive),d(),N(r.items()))},dependencies:[uo,co],styles:[".scroll-host[_ngcontent-%COMP%]{height:50vh;width:50vh;overflow-y:auto;border:1px solid red;margin:0 auto}.scroll-host[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:20vh;border-bottom:1px solid black;position:relative;display:grid;place-items:center;font-size:40px;font-weight:700}"]})}}return t})();var iM={component:Zd,html:`<div\r
  class="scroll-host"\r
  ardInfScroll\r
  ardInfScrollTarget="host"\r
  (ardInfScrollReachThreshold)="onThresholdReach()"\r
  [(ardInfScrollActive)]="isInfScrollActive"\r
>\r
  @for (item of items(); track $index) {\r
    <div>{{ item }}</div>\r
  }\r
</div>\r
`,scss:`.scroll-host {\r
  height: 50vh;\r
  width: 50vh;\r
  overflow-y: auto;\r
  border: 1px solid red;\r
  margin: 0 auto;\r
\r
  div {\r
    height: 20vh;\r
    border-bottom: 1px solid black;\r
    position: relative;\r
    display: grid;\r
    place-items: center;\r
    font-size: 40px;\r
    font-weight: bold;\r
  }\r
}\r
`,ts:`import { Component, computed, signal } from '@angular/core';\r
import { ArdiumInfiniteScrollModule } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'infinite-scroll-host-example',\r
  templateUrl: './infinite-scroll-host-example.html',\r
  styleUrl: './infinite-scroll-host-example.scss',\r
  standalone: true,\r
  imports: [ArdiumInfiniteScrollModule],\r
})\r
export class InfiniteScrollHostExample {\r
  private readonly currentPage = signal<number>(1);\r
  readonly items = computed<number[]>(() => new Array(this.currentPage() * 5).fill(0).map((_, i) => i));\r
\r
  readonly isInfScrollActive = signal<boolean>(true);\r
\r
  onThresholdReach() {\r
    console.log(\`Threshold has been reached! Loading data for page \${this.currentPage() + 1}...\`);\r
    setTimeout(() => {\r
      this.currentPage.update(v => v + 1);\r
      this.isInfScrollActive.set(true);\r
    }, 100);\r
  }\r
}\r
`};var Cv=t=>({"--position":t}),Fa=400,Jd=Fa/20,ec=(()=>{class t{constructor(){this.keyboard=F(Et),this.position=S(Fa/2)}ngOnInit(){this.keyboard.listenToKey("A").subscribe(()=>{this.position()<=0||this.position.update(e=>e-Jd)}),this.keyboard.listenToKey("D").subscribe(()=>{this.position()>=Fa||this.position.update(e=>e+Jd)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["keyboard-service-listen-to-key-example"]],decls:10,vars:4,consts:[[1,"square-container"],[1,"square"]],template:function(i,r){i&1&&(o(0,"div",0),b(1,"div",1),a(),o(2,"p"),s(3," Click "),o(4,"ard-kbd"),s(5,"A"),a(),s(6," or "),o(7,"ard-kbd"),s(8,"D"),a(),s(9,` to move the square.
`),a()),i&2&&(d(),ye(ge(2,Cv,r.position()+"px")))},dependencies:[De,Ge],styles:[".square-container[_ngcontent-%COMP%]{width:450px;border:1px solid var(--ard-detail-light);margin-bottom:1rem}.square[_ngcontent-%COMP%]{width:50px;height:50px;position:relative;left:var(--position);background-color:#9932cc}"]})}}return t})();var cM={component:ec,html:`<div class="square-container">\r
  <div class="square" [style]="{ '--position': position() + 'px' }"></div>\r
</div>\r
<p>\r
  Click <ard-kbd>A</ard-kbd> or <ard-kbd>D</ard-kbd> to move the square.\r
</p>`,scss:`$max: 400px;\r
$square: 50px;\r
\r
.square-container {\r
  width: $max + $square;\r
  border: 1px solid var(--ard-detail-light);\r
  margin-bottom: 1rem;\r
}\r
.square {\r
  width: $square;\r
  height: $square;\r
  position: relative;\r
  left: var(--position);\r
  background-color: darkorchid;\r
}\r
`,simpleTs:`this.keyboard.listenToKey('A').subscribe(() => {\r
  if (this.position() <= 0) return;\r
  this.position.update(v => v - STEP);\r
});\r
this.keyboard.listenToKey('D').subscribe(() => {\r
  if (this.position() >= MAX) return;\r
  this.position.update(v => v + STEP);\r
});`,ts:`import { Component, inject, OnInit, signal } from '@angular/core';\r
import { KeyboardService } from '@ardium-ui/devkit';\r
import { ArdiumKbdModule } from '@ardium-ui/ui';\r
\r
const MAX = 400;\r
const STEP = MAX / 20;\r
\r
@Component({\r
  selector: 'keyboard-service-listen-to-key-example',\r
  templateUrl: './keyboard-service-listen-to-key-example.html',\r
  styleUrl: './keyboard-service-listen-to-key-example.scss',\r
  standalone: true,\r
  imports: [ArdiumKbdModule],\r
})\r
export class KeyboardServiceListenToKeyExample implements OnInit {\r
  readonly keyboard = inject(KeyboardService);\r
\r
  readonly position = signal<number>(MAX / 2);\r
\r
  ngOnInit(): void {\r
    this.keyboard.listenToKey('A').subscribe(() => {\r
      if (this.position() <= 0) return;\r
      this.position.update(v => v - STEP);\r
    });\r
    this.keyboard.listenToKey('D').subscribe(() => {\r
      if (this.position() >= MAX) return;\r
      this.position.update(v => v + STEP);\r
    });\r
  }\r
}\r
`};var tc=(()=>{class t{constructor(){this.keyboard=F(Et),this.isZeroHeld=S(!1)}ngOnInit(){this.keyboard.listenToKeyState("0").subscribe(({isHeld:e})=>{this.isZeroHeld.set(e)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["keyboard-service-listen-to-key-state-example"]],decls:5,vars:3,template:function(i,r){i&1&&(o(0,"p"),s(1," The zero key is currently "),o(2,"strong"),s(3),a(),s(4,`.
`),a()),i&2&&(d(2),me(r.isZeroHeld()?"held":"not-held"),d(),v(r.isZeroHeld()?"pressed":"idle"))},dependencies:[De],styles:[".held[_ngcontent-%COMP%]{color:green}.not-held[_ngcontent-%COMP%]{color:red}"]})}}return t})();var vM={component:tc,html:`<p>\r
  The zero key is currently\r
  <strong [class]="isZeroHeld() ? 'held' : 'not-held'">{{ isZeroHeld() ? 'pressed' : 'idle' }}</strong>.\r
</p>\r
`,scss:`.held {\r
  color: green;\r
}\r
.not-held {\r
  color: red;\r
}`,simpleTs:`this.keyboard.listenToKeyState('0').subscribe(({ isHeld }) => {\r
  this.isZeroHeld.set(isHeld);\r
});`,ts:`import { Component, inject, OnInit, signal } from '@angular/core';\r
import { KeyboardService } from '@ardium-ui/devkit';\r
import { ArdiumKbdModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'keyboard-service-listen-to-key-state-example',\r
  templateUrl: './keyboard-service-listen-to-key-state-example.html',\r
  styleUrl: './keyboard-service-listen-to-key-state-example.scss',\r
  standalone: true,\r
  imports: [ArdiumKbdModule],\r
})\r
export class KeyboardServiceListenToKeyStateExample implements OnInit {\r
  readonly keyboard = inject(KeyboardService);\r
\r
  readonly isZeroHeld = signal<boolean>(false);\r
\r
  ngOnInit(): void {\r
    this.keyboard.listenToKeyState('0').subscribe(({ isHeld }) => {\r
      this.isZeroHeld.set(isHeld);\r
    })\r
  }\r
}\r
`};function bv(t,n){t&1&&(o(0,"label",1),s(1,"Search"),a(),b(2,"input",2))}var ic=(()=>{class t{constructor(){this.keyboard=F(Et),this.isOpen=S(!1)}ngOnInit(){this.keyboard.listenToShortcut(["Ctrl","F"]).subscribe(({event:e})=>{e.preventDefault(),this.isOpen.update(i=>!i)}),this.keyboard.listenToShortcut(["ShiftRight","Q"]).subscribe(()=>alert("RightShift + Q was pressed!"))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["keyboard-service-listen-to-shortcut-example"]],decls:11,vars:1,consts:[["full","false"],["for","example-search-bar"],["type","text","id","example-search-bar"]],template:function(i,r){i&1&&(o(0,"p"),s(1,"Press "),o(2,"ard-kbd-shortcut",0),s(3,"Ctrl+F"),a(),s(4," to toggle a search bar."),a(),o(5,"p"),s(6,"Press "),o(7,"ard-kbd-shortcut",0),s(8,"RightShift+Q"),a(),s(9," to show an alert."),a(),g(10,bv,3,0)),i&2&&(d(10),y(r.isOpen()?10:-1))},dependencies:[yi,vi],styles:["input[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return t})();var SM={component:ic,html:`<p>Press <ard-kbd-shortcut full="false">Ctrl+F</ard-kbd-shortcut> to toggle a search bar.</p>\r
<p>Press <ard-kbd-shortcut full="false">RightShift+Q</ard-kbd-shortcut> to show an alert.</p>\r
@if (isOpen()) {\r
  <label for="example-search-bar">Search</label>\r
  <input type="text" id="example-search-bar">\r
}`,scss:`input {\r
  margin-top: 1rem;\r
}`,simpleTs:`this.keyboard.listenToShortcut(['Ctrl', 'F']).subscribe(({ event }) => {\r
  event.preventDefault();\r
  this.isOpen.update(v => !v);\r
});`,ts:`import { Component, inject, OnInit, signal } from '@angular/core';\r
import { KeyboardService } from '@ardium-ui/devkit';\r
import { ArdiumKbdShortcutModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'keyboard-service-listen-to-shortcut-example',\r
  templateUrl: './keyboard-service-listen-to-shortcut-example.html',\r
  styleUrl: './keyboard-service-listen-to-shortcut-example.scss',\r
  standalone: true,\r
  imports: [ArdiumKbdShortcutModule],\r
})\r
export class KeyboardServiceListenToShortcutExample implements OnInit {\r
  readonly keyboard = inject(KeyboardService);\r
\r
  readonly isOpen = signal<boolean>(false);\r
\r
  ngOnInit(): void {\r
    this.keyboard.listenToShortcut(['Ctrl', 'F']).subscribe(({ event }) => {\r
      event.preventDefault();\r
      this.isOpen.update(v => !v);\r
    });\r
    this.keyboard.listenToShortcut(['ShiftRight', 'Q']).subscribe(() => alert('RightShift + Q was pressed!'));\r
  }\r
}\r
`};var nc=(()=>{class t{constructor(){this.keyboard=F(Et)}getModifierKeyText(e){return e?"pressed":"idle"}getModifierKeyClass(e){return e?"down":"up"}getLockKeyText(e){return e===void 0?"unknown":e?"active":"inactive"}getLockKeyClass(e){return e===void 0?"unknown":e?"down":"up"}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["keyboard-service-modifier-key-state-example"]],decls:72,vars:42,consts:[[1,"container"],[1,"modifier-table"],["scope","col"],["scope","row"],[1,"not-applicable"],[1,"lock-table"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th",2),s(5,"Key"),a(),o(6,"th",2),s(7,"Left"),a(),o(8,"th",2),s(9,"Right"),a(),o(10,"th",2),s(11,"Any"),a()()(),o(12,"tbody")(13,"tr")(14,"th",3),s(15,"Ctrl"),a(),o(16,"td"),s(17),a(),o(18,"td"),s(19),a(),o(20,"td"),s(21),a()(),o(22,"tr")(23,"th",3),s(24,"Alt"),a(),o(25,"td"),s(26),a(),o(27,"td"),s(28),a(),o(29,"td",4),s(30,"N/A"),a()(),o(31,"tr")(32,"th",3),s(33,"Shift"),a(),o(34,"td"),s(35),a(),o(36,"td"),s(37),a(),o(38,"td"),s(39),a()(),o(40,"tr")(41,"th",3),s(42,"Meta"),a(),o(43,"td"),s(44),a(),o(45,"td"),s(46),a(),o(47,"td"),s(48),a()()()(),o(49,"table",5)(50,"thead")(51,"tr")(52,"th",2),s(53,"Key"),a(),o(54,"th",2),s(55,"State"),a()()(),o(56,"tbody")(57,"tr")(58,"th",3),s(59,"Caps Lock"),a(),o(60,"td"),s(61),a()(),o(62,"tr")(63,"th",3),s(64,"Num Lock"),a(),o(65,"td"),s(66),a()(),o(67,"tr")(68,"th",3),s(69,"Scroll Lock"),a(),o(70,"td"),s(71),a()()()()()),i&2&&(d(16),me(r.getModifierKeyClass(r.keyboard.isLeftCtrlHeld())),d(),v(r.getModifierKeyText(r.keyboard.isLeftCtrlHeld())),d(),me(r.getModifierKeyClass(r.keyboard.isRightCtrlHeld())),d(),v(r.getModifierKeyText(r.keyboard.isRightCtrlHeld())),d(),me(r.getModifierKeyClass(r.keyboard.isCtrlHeld())),d(),v(r.getModifierKeyText(r.keyboard.isCtrlHeld())),d(4),me(r.getModifierKeyClass(r.keyboard.isAltHeld())),d(),v(r.getModifierKeyText(r.keyboard.isAltHeld())),d(),me(r.getModifierKeyClass(r.keyboard.isAltGraphHeld())),d(),v(r.getModifierKeyText(r.keyboard.isAltGraphHeld())),d(6),me(r.getModifierKeyClass(r.keyboard.isLeftShiftHeld())),d(),v(r.getModifierKeyText(r.keyboard.isLeftShiftHeld())),d(),me(r.getModifierKeyClass(r.keyboard.isRightShiftHeld())),d(),v(r.getModifierKeyText(r.keyboard.isRightShiftHeld())),d(),me(r.getModifierKeyClass(r.keyboard.isShiftHeld())),d(),v(r.getModifierKeyText(r.keyboard.isShiftHeld())),d(4),me(r.getModifierKeyClass(r.keyboard.isLeftMetaHeld())),d(),v(r.getModifierKeyText(r.keyboard.isLeftMetaHeld())),d(),me(r.getModifierKeyClass(r.keyboard.isRightMetaHeld())),d(),v(r.getModifierKeyText(r.keyboard.isRightMetaHeld())),d(),me(r.getModifierKeyClass(r.keyboard.isMetaHeld())),d(),v(r.getModifierKeyText(r.keyboard.isMetaHeld())),d(12),me(r.getLockKeyClass(r.keyboard.capsLockState())),d(),v(r.getLockKeyText(r.keyboard.capsLockState())),d(4),me(r.getLockKeyClass(r.keyboard.numLockState())),d(),v(r.getLockKeyText(r.keyboard.numLockState())),d(4),me(r.getLockKeyClass(r.keyboard.scrollLockState())),d(),v(r.getLockKeyText(r.keyboard.scrollLockState())))},dependencies:[De],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:1.75rem}table[_ngcontent-%COMP%]{table-layout:fixed;width:max-content}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:.25rem .5rem;border-collapse:collapse;border:1px solid var(--ard-detail)}th[_ngcontent-%COMP%]{font-weight:600;background-color:var(--ard-bg-filled)}td[_ngcontent-%COMP%]{font-weight:500}.down[_ngcontent-%COMP%]{color:green}.up[_ngcontent-%COMP%]{color:red}.unknown[_ngcontent-%COMP%]{font-weight:400;font-style:italic}.not-applicable[_ngcontent-%COMP%]{font-weight:400}.modifier-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{width:8.1ch}.modifier-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-of-type{width:6ch}.lock-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-of-type{width:8.75ch}"]})}}return t})();var VM={component:nc,html:`<div class="container">\r
  <table class="modifier-table">\r
    <thead>\r
      <tr>\r
        <th scope="col">Key</th>\r
        <th scope="col">Left</th>\r
        <th scope="col">Right</th>\r
        <th scope="col">Any</th>\r
      </tr>\r
    </thead>\r
    <tbody>\r
      <tr>\r
        <th scope="row">Ctrl</th>\r
        <td [class]="getModifierKeyClass(keyboard.isLeftCtrlHeld())">{{ getModifierKeyText(keyboard.isLeftCtrlHeld()) }}</td>\r
        <td [class]="getModifierKeyClass(keyboard.isRightCtrlHeld())">{{ getModifierKeyText(keyboard.isRightCtrlHeld()) }}</td>\r
        <td [class]="getModifierKeyClass(keyboard.isCtrlHeld())">{{ getModifierKeyText(keyboard.isCtrlHeld()) }}</td>\r
      </tr>\r
      <tr>\r
        <th scope="row">Alt</th>\r
        <td [class]="getModifierKeyClass(keyboard.isAltHeld())">{{ getModifierKeyText(keyboard.isAltHeld()) }}</td>\r
        <td [class]="getModifierKeyClass(keyboard.isAltGraphHeld())">{{ getModifierKeyText(keyboard.isAltGraphHeld()) }}</td>\r
        <td class="not-applicable">N/A</td>\r
      </tr>\r
      <tr>\r
        <th scope="row">Shift</th>\r
        <td [class]="getModifierKeyClass(keyboard.isLeftShiftHeld())">{{ getModifierKeyText(keyboard.isLeftShiftHeld()) }}</td>\r
        <td [class]="getModifierKeyClass(keyboard.isRightShiftHeld())">{{ getModifierKeyText(keyboard.isRightShiftHeld()) }}</td>\r
        <td [class]="getModifierKeyClass(keyboard.isShiftHeld())">{{ getModifierKeyText(keyboard.isShiftHeld()) }}</td>\r
      </tr>\r
      <tr>\r
        <th scope="row">Meta</th>\r
        <td [class]="getModifierKeyClass(keyboard.isLeftMetaHeld())">{{ getModifierKeyText(keyboard.isLeftMetaHeld()) }}</td>\r
        <td [class]="getModifierKeyClass(keyboard.isRightMetaHeld())">{{ getModifierKeyText(keyboard.isRightMetaHeld()) }}</td>\r
        <td [class]="getModifierKeyClass(keyboard.isMetaHeld())">{{ getModifierKeyText(keyboard.isMetaHeld()) }}</td>\r
      </tr>\r
    </tbody>\r
  </table>\r
  <table class="lock-table">\r
    <thead>\r
      <tr>\r
        <th scope="col">Key</th>\r
        <th scope="col">State</th>\r
      </tr>\r
    </thead>\r
    <tbody>\r
      <tr>\r
        <th scope="row">Caps Lock</th>\r
        <td [class]="getLockKeyClass(keyboard.capsLockState())">{{ getLockKeyText(keyboard.capsLockState()) }}</td>\r
      </tr>\r
      <tr>\r
        <th scope="row">Num Lock</th>\r
        <td [class]="getLockKeyClass(keyboard.numLockState())">{{ getLockKeyText(keyboard.numLockState()) }}</td>\r
      </tr>\r
      <tr>\r
        <th scope="row">Scroll Lock</th>\r
        <td [class]="getLockKeyClass(keyboard.scrollLockState())">{{ getLockKeyText(keyboard.scrollLockState()) }}</td>\r
      </tr>\r
    </tbody>\r
  </table>\r
</div>\r
`,scss:`.container {\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 1.75rem;\r
}\r
table {\r
  table-layout: fixed;\r
  width: max-content;\r
}\r
th,\r
td {\r
  padding: 0.25rem 0.5rem;\r
  border-collapse: collapse;\r
  border: 1px solid var(--ard-detail);\r
}\r
th {\r
  font-weight: 600;\r
  background-color: var(--ard-bg-filled);\r
}\r
td {\r
  font-weight: 500;\r
}\r
.down {\r
  color: green;\r
}\r
.up {\r
  color: red;\r
}\r
.unknown {\r
  font-weight: 400;\r
  font-style: italic;\r
}\r
.not-applicable {\r
  font-weight: 400;\r
}\r
.modifier-table {\r
  thead tr th {\r
    width: 8.1ch;\r
\r
    &:first-of-type {\r
      width: 6ch;\r
    }\r
  }\r
}\r
.lock-table {\r
  thead tr th:last-of-type {\r
    width: 8.75ch;\r
  }\r
}`,ts:`import { Component, inject } from '@angular/core';\r
import { KeyboardService } from '@ardium-ui/devkit';\r
import { ArdiumKbdModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'keyboard-service-modifier-key-state-example',\r
  templateUrl: './keyboard-service-modifier-key-state-example.html',\r
  styleUrl: './keyboard-service-modifier-key-state-example.scss',\r
  standalone: true,\r
  imports: [ArdiumKbdModule],\r
})\r
export class KeyboardServiceModifierKeyStateExample {\r
  readonly keyboard = inject(KeyboardService);\r
\r
  getModifierKeyText(value: boolean): string {\r
    return value ? 'pressed' : 'idle';\r
  }\r
  getModifierKeyClass(value: boolean): string {\r
    return value ? 'down' : 'up';\r
  }\r
  getLockKeyText(value: boolean | undefined): string {\r
    return value === undefined ? 'unknown' : value ? 'active' : 'inactive';\r
  }\r
  getLockKeyClass(value: boolean | undefined): string {\r
    return value === undefined ? 'unknown' : value ? 'down' : 'up';\r
  }\r
}\r
`};var xv=["targetBox"];function wv(t,n){if(t&1&&(o(0,"tr")(1,"th",4),s(2,"Left"),a(),o(3,"td"),s(4),a(),o(5,"td"),s(6),a()(),o(7,"tr")(8,"th",4),s(9,"Right"),a(),o(10,"td"),s(11),a(),o(12,"td"),s(13),a()(),o(14,"tr")(15,"th",4),s(16,"Top"),a(),o(17,"td"),s(18),a(),o(19,"td"),s(20),a()(),o(21,"tr")(22,"th",4),s(23,"Bottom"),a(),o(24,"td"),s(25),a(),o(26,"td"),s(27),a()()),t&2){let e,i,r,l,c,u,A,j,O=f();d(4),v((e=O.lastEventData())==null?null:e.left),d(2),v((i=O.lastEventData())==null?null:i.overflowsLeft),d(5),v((r=O.lastEventData())==null?null:r.right),d(2),v((l=O.lastEventData())==null?null:l.overflowsRight),d(5),v((c=O.lastEventData())==null?null:c.top),d(2),v((u=O.lastEventData())==null?null:u.overflowsTop),d(5),v((A=O.lastEventData())==null?null:A.bottom),d(2),v((j=O.lastEventData())==null?null:j.overflowsBottom)}}function Tv(t,n){t&1&&(o(0,"tr")(1,"th",4),s(2,"Left"),a(),o(3,"td",5),s(4,"Waiting for events..."),a()(),o(5,"tr")(6,"th",4),s(7,"Right"),a()(),o(8,"tr")(9,"th",4),s(10,"Top"),a()(),o(11,"tr")(12,"th",4),s(13,"Bottom"),a()())}var rc=(()=>{class t{constructor(){this.lastEventData=S(null),this.targetBox=Ae("targetBox")}onClick(e){this.targetBox()&&this.lastEventData.set(Do(e,this.targetBox()))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["relative-pos-basic-example"]],viewQuery:function(i,r){i&1&&Fe(r.targetBox,xv,5),i&2&&de()},hostBindings:function(i,r){i&1&&_("click",function(c){return r.onClick(c)},!1,at)},decls:18,vars:1,consts:[["targetBox",""],[1,"container"],[1,"target-box"],["scope","col"],["scope","row"],["colspan","2","rowspan","4",1,"waiting"]],template:function(i,r){i&1&&(o(0,"p"),s(1,` Click anywhere to show the click position relative to the target box.
`),a(),o(2,"div",1)(3,"div",2,0),s(5,"Target box"),a(),o(6,"table")(7,"thead")(8,"tr")(9,"th",3),s(10,"Direction"),a(),o(11,"th",3),s(12,"Relative pos"),a(),o(13,"th",3),s(14,"Overflows?"),a()()(),o(15,"tbody"),g(16,wv,28,8)(17,Tv,14,0),a()()()),i&2&&(d(16),y(r.lastEventData()?16:17))},styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:1.75rem}.target-box[_ngcontent-%COMP%]{width:150px;height:100px;background-color:salmon;display:grid;place-items:center}table[_ngcontent-%COMP%]{table-layout:fixed;width:max-content}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:.25rem .5rem;border-collapse:collapse;border:1px solid var(--ard-detail)}th[_ngcontent-%COMP%]{font-weight:600;background-color:var(--ard-bg-filled)}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-of-type{width:6ch}"]})}}return t})();var jM={component:rc,html:`<p>\r
  Click anywhere to show the click position relative to the target box.\r
</p>\r
<div class="container">\r
  <div class="target-box" #targetBox>Target box</div>\r
\r
  <table>\r
    <thead>\r
      <tr>\r
        <th scope="col">Direction</th>\r
        <th scope="col">Relative pos</th>\r
        <th scope="col">Overflows?</th>\r
      </tr>\r
    </thead>\r
    <tbody>\r
      @if (lastEventData()) {\r
      <tr>\r
        <th scope="row">Left</th>\r
        <td>{{ lastEventData()?.left }}</td>\r
        <td>{{ lastEventData()?.overflowsLeft }}</td>\r
      </tr>\r
      <tr>\r
        <th scope="row">Right</th>\r
        <td>{{ lastEventData()?.right }}</td>\r
        <td>{{ lastEventData()?.overflowsRight }}</td>\r
      </tr>\r
      <tr>\r
        <th scope="row">Top</th>\r
        <td>{{ lastEventData()?.top }}</td>\r
        <td>{{ lastEventData()?.overflowsTop }}</td>\r
      </tr>\r
      <tr>\r
        <th scope="row">Bottom</th>\r
        <td>{{ lastEventData()?.bottom }}</td>\r
        <td>{{ lastEventData()?.overflowsBottom }}</td>\r
      </tr>\r
      } @else {\r
      <tr>\r
        <th scope="row">Left</th>\r
        <td colspan="2" rowspan="4" class="waiting">Waiting for events...</td>\r
      </tr>\r
      <tr>\r
        <th scope="row">Right</th>\r
      </tr>\r
      <tr>\r
        <th scope="row">Top</th>\r
      </tr>\r
      <tr>\r
        <th scope="row">Bottom</th>\r
      </tr>\r
      }\r
    </tbody>\r
  </table>\r
</div>\r
`,scss:`.container {\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 1.75rem;\r
}\r
.target-box {\r
  width: 150px;\r
  height: 100px;\r
  background-color: salmon;\r
  display: grid;\r
  place-items: center;\r
}\r
table {\r
  table-layout: fixed;\r
  width: max-content;\r
}\r
th,\r
td {\r
  padding: 0.25rem 0.5rem;\r
  border-collapse: collapse;\r
  border: 1px solid var(--ard-detail);\r
}\r
th {\r
  font-weight: 600;\r
  background-color: var(--ard-bg-filled);\r
}\r
thead th:first-of-type {\r
  width: 6ch;\r
}`,ts:`import { Component, ElementRef, HostListener, signal, viewChild } from '@angular/core';\r
import { EventRelativePos, getEventRelativePos } from '@ardium-ui/devkit';\r
\r
@Component({\r
  selector: 'relative-pos-basic-example',\r
  templateUrl: './relative-pos-basic-example.html',\r
  styleUrl: './relative-pos-basic-example.scss',\r
  standalone: true,\r
  imports: [],\r
})\r
export class RelativePosBasicExample {\r
  readonly lastEventData = signal<EventRelativePos<HTMLElement> | null>(null);\r
\r
  readonly targetBox = viewChild<ElementRef<HTMLElement>>('targetBox');\r
\r
  @HostListener('document:click', ['$event'])\r
  onClick(event: PointerEvent): void {\r
    if (!this.targetBox()) return;\r
    this.lastEventData.set(getEventRelativePos(event, this.targetBox()!));\r
  }\r
}\r
`};var Dv=["item"];function Sv(t,n){if(t&1){let e=W();o(0,"div",4)(1,"code"),s(2,"viewportRelation"),a(),o(3,"span"),s(4),a(),o(5,"code"),s(6,"isInViewport"),a(),o(7,"span"),s(8),a(),o(9,"code"),s(10,"position.top"),a(),o(11,"span"),s(12),et(13,"number"),a(),o(14,"code"),s(15,"position.bottom"),a(),o(16,"span"),s(17),et(18,"number"),a(),b(19,"div"),o(20,"button",3),_("click",function(){T(e);let r=f();return D(r.toggleOverlay())}),s(21,"Close"),a()()}if(t&2){let e,i,r,l,c=f();d(4),v((e=c.observerRef())==null?null:e.viewportRelation()),d(4),v((i=c.observerRef())==null?null:i.isInViewport()),d(4),v(ki(13,4,(r=c.observerRef())==null||(r=r.position())==null?null:r.top,"1.5-5")),d(5),v(ki(18,7,(l=c.observerRef())==null||(l=l.position())==null?null:l.bottom,"1.5-5"))}}var ac=(()=>{class t{constructor(){this.vss=F(oo),this.isOverlayActive=S(!1),this.element=Ae("item"),this.observerRef=S(null)}toggleOverlay(){this.isOverlayActive.update(e=>!e)}ngAfterViewInit(){let e=this.element();e&&this.observerRef.set(this.vss.observeElement(e))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["viewport-observer-observer-ref-example"]],viewQuery:function(i,r){i&1&&Fe(r.element,Dv,5),i&2&&de()},decls:7,vars:1,consts:[["item",""],[1,"container"],[1,"item"],[3,"click"],[1,"overlay"]],template:function(i,r){if(i&1){let l=W();o(0,"div",1)(1,"div",2,0),s(3,"Observed element"),a(),o(4,"button",3),_("click",function(){return T(l),D(r.toggleOverlay())}),s(5,"Toggle overlay"),a()(),g(6,Sv,22,10,"div",4)}i&2&&(d(6),y(r.isOverlayActive()?6:-1))},dependencies:[_r],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:space-around}.item[_ngcontent-%COMP%]{height:150px;width:225px;background-color:#deb887;display:grid;place-items:center}.overlay[_ngcontent-%COMP%]{position:fixed;top:5rem;left:20rem;z-index:9;padding:1.5rem;background-color:var(--ard-bg);border:1px solid var(--ard-border);display:grid;grid-template-columns:max-content 12ch;gap:.5rem}"]})}}return t})();var GM={component:ac,html:`<div class="container">\r
  <div class="item" #item>Observed element</div>\r
  <button (click)="toggleOverlay()">Toggle overlay</button>\r
</div>\r
\r
@if (isOverlayActive()) {\r
<div class="overlay">\r
  <code>viewportRelation</code>\r
  <span>{{ observerRef()?.viewportRelation() }}</span>\r
  <code>isInViewport</code>\r
  <span>{{ observerRef()?.isInViewport() }}</span>\r
  <code>position.top</code>\r
  <span>{{ observerRef()?.position()?.top | number:'1.5-5' }}</span>\r
  <code>position.bottom</code>\r
  <span>{{ observerRef()?.position()?.bottom | number:'1.5-5' }}</span>\r
  <div></div>\r
  <button (click)="toggleOverlay()">Close</button>\r
</div>\r
}\r
`,scss:`.container {\r
  display: flex;\r
  align-items: flex-end;\r
  justify-content: space-around;\r
}\r
.item {\r
  height: 150px;\r
  width: 225px;\r
  background-color: burlywood;\r
  display: grid;\r
  place-items: center;\r
}\r
.overlay {\r
  position: fixed;\r
  top: 5rem;\r
  left: 20rem;\r
  z-index: 9;\r
  padding: 1.5rem;\r
  background-color: var(--ard-bg);\r
  border: 1px solid var(--ard-border);\r
  display: grid;\r
  grid-template-columns: max-content 12ch;\r
  gap: 0.5rem;\r
}\r
`,ts:`import { DecimalPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { ArdiumViewportObserverService, ArdViewportObserverRef } from '@ardium-ui/devkit';

@Component({
  selector: 'viewport-observer-observer-ref-example',
  templateUrl: './viewport-observer-observer-ref-example.html',
  styleUrl: './viewport-observer-observer-ref-example.scss',
  standalone: true,
  imports: [DecimalPipe],
})
export class ViewportObserverObserverRefExample implements AfterViewInit {
  readonly vss = inject(ArdiumViewportObserverService);

  readonly isOverlayActive = signal<boolean>(false);
  toggleOverlay() {
    this.isOverlayActive.update(v => !v);
  }

  readonly element = viewChild<ElementRef<HTMLElement>>('item');

  readonly observerRef = signal<ArdViewportObserverRef | null>(null);

  ngAfterViewInit(): void {
    const el = this.element();
    if (!el) return;
    this.observerRef.set(this.vss.observeElement(el));
  }
}
`};var oc={[wt.FormElements]:1,[wt.Buttons]:2,[wt.DataDisplay]:3,[wt.Feedback]:4,[wt.Layout]:5,[wt.Popups]:6,[wt.Stars]:7,[wt.CustomSignals]:1};function sc(t,n){return oc[t.group]-oc[n.group]}var Ev=(t,n)=>n.group;function Av(t,n){if(t&1&&(o(0,"p",1),s(1),a()),t&2){let e=f().$implicit;d(),v(e.group)}}function Fv(t,n){if(t&1&&b(0,"img",5),t&2){let e=f().$implicit;p("src",e.img,un)}}function Iv(t,n){if(t&1&&(o(0,"a",3)(1,"ard-card",4),g(2,Fv,1,1,"img",5),o(3,"ard-card-content")(4,"ard-card-title"),s(5),a(),o(6,"p"),s(7),a()()()()),t&2){let e=n.$implicit;p("routerLink",e.path),d(2),y(e.img?2:-1),d(3),v(e.name),d(2),v(e.desc)}}function Mv(t,n){if(t&1&&(g(0,Av,2,1,"p",1),o(1,"div",2),U(2,Iv,8,4,"a",3,X),a()),t&2){let e=n.$implicit;y(e.group?0:-1),d(2),N(e.children)}}var _k=(()=>{class t{constructor(){this.module=h.required(),this.data=h.required(),this.mappedRouteData=I(()=>Sl(this.data(),e=>e.groupName??"").sort(sc).map(e=>({group:e.group,children:e.children.map(i=>L(C({},i),{path:`/${this.module()}/${i.path}`})).sort((i,r)=>i.name.localeCompare(r.name))}))),this.topText=h.required()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["app-home-page"]],inputs:{module:[1,"module"],data:[1,"data"],topText:[1,"topText"]},decls:5,vars:1,consts:[[1,"center-text"],[1,"group-name"],[1,"component-grid"],[3,"routerLink"],["appearance","outlined"],["ard-card-image","",3,"src"]],template:function(i,r){i&1&&(o(0,"article")(1,"p",0),s(2),a(),U(3,Mv,4,1,null,null,Ev),a()),i&2&&(d(2),v(r.topText()),d(),N(r.mappedRouteData()))},dependencies:[tt,ni,wl,xl,yl,Cl,bl],styles:[".center-text[_ngcontent-%COMP%]{padding:1rem 0;text-align:center}.component-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,280px);padding:1.25rem;gap:2.5rem;justify-content:center}a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]{width:280px;height:100%;background-color:transparent;transition:background-color .15s ease-in-out}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;min-width:calc(100% + 2px);left:-1px;top:-1px;min-height:10rem;border:1px solid transparent}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]   ard-card-title[_ngcontent-%COMP%]{padding-bottom:1rem;padding-top:.5rem}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-bottom:0}a[_ngcontent-%COMP%]:hover   ard-card[_ngcontent-%COMP%]{background-color:rgba(var(--ard-primary-500),.05)}.group-name[_ngcontent-%COMP%]{text-align:center;font-size:1.25rem;padding-bottom:.5rem;padding-top:1.5rem;color:var(--ard-text3);text-transform:uppercase}"]})}}return t})();export{Nl as a,Ve as b,Xi as c,Hn as d,we as e,la as f,zm as g,st as h,Qe as i,zn as j,Kn as k,_i as l,vi as m,yi as n,Ws as o,Ci as p,bi as q,_b as r,vb as s,Sl as t,xi as u,Rb as v,Ti as w,Ht as x,Ut as y,mt as z,Ol as A,wt as B,jw as C,Yw as D,sc as E,nt as F,er as G,sT as H,hT as I,ST as J,MT as K,RT as L,NT as M,zT as N,XT as O,rD as P,uD as Q,vD as R,TD as S,ID as T,OD as U,UD as V,WD as W,GD as X,nS as Y,lS as Z,mS as _,vS as $,wS as aa,AS as ba,OS as ca,jS as da,GS as ea,tE as fa,lE as ga,mE as ha,vE as ia,wE as ja,IE as ka,HE as la,qE as ma,nA as na,sA as oa,pA as pa,_A as qa,wA as ra,AA as sa,VA as ta,UA as ua,zA as va,JA as wa,aF as xa,pF as ya,_F as za,xF as Aa,EF as Ba,PF as Ca,HF as Da,QF as Ea,nI as Fa,cI as Ga,_I as Ha,SI as Ia,OI as Ja,jI as Ka,QI as La,iM as Ma,cM as Na,vM as Oa,SM as Pa,VM as Qa,jM as Ra,GM as Sa,_k as Ta};
