import{$ as ln,$a as A,$b as Wa,A as ar,Aa as ve,Ab as Ne,Ac as yn,B as si,Ba as y,Bb as pr,Bc as io,C as ae,Ca as G,Cb as ee,Cc as no,D as X,Da as Et,Db as Ui,Dc as ro,E as R,Ea as B,Ec as ao,F as U,Fa as H,Fb as Oa,Fc as oo,G as I,Ga as o,Gb as La,Gc as so,H as wa,Ha as a,Hb as ui,Hc as lo,I as Tt,Ia as C,Ib as Ba,Ic as co,J as T,Ja as Ri,Jb as pn,Jc as uo,K as S,Ka as Oi,Kb as pi,Kc as po,L as Ta,La as Ia,Lc as Ot,M as ot,Ma as j,Mb as lt,Mc as Lt,N as St,Na as Ma,Nb as Pe,Nc as Cn,O as qt,Oa as _,Ob as mi,Oc as mo,P as Xe,Pa as f,Pb as Ha,Pc as ho,Q as ne,Qa as Y,Qb as we,Qc as fo,R as m,Ra as L,Rb as et,Rc as go,S as ye,Sa as lr,Sb as Ua,Sc as _o,T as E,Ta as dr,Tb as pe,U as Vi,Ua as cr,Ub as Na,Uc as vo,V as Sa,Va as he,Vb as ja,Vc as yo,W as Da,Wa as ke,Wb as mn,Wc as Co,X as Ea,Xa as ue,Xb as Ya,Xc as bo,Y as sn,Ya as V,Yb as $a,Z as Aa,Za as s,Zb as za,_ as le,_a as v,_b as hi,a as tn,aa as dn,ab as li,ac as Te,b as nn,ba as We,bb as z,bc as hn,c as Ue,ca as d,cb as W,cc as fi,d as gt,da as te,db as K,dc as Ka,e as er,ea as or,eb as Je,ec as qa,f as tr,fa as xe,fb as Gt,fc as fe,g as ha,ga as sr,gb as di,gc as gi,h as ri,ha as kt,hb as Ce,hc as tt,i as rn,ia as Dt,ib as Ae,ic as Ni,j as ir,ja as Me,jb as ur,jc as fn,k as Re,ka as Oe,kb as ka,kc as Vt,l as fa,la as vt,lb as Pa,lc as Qa,m as ga,ma as _t,mc as dt,n as _a,na as p,nb as st,nc as mr,o as va,oa as Z,ob as Pt,oc as gn,p as an,pa as Q,pb as Li,pc as _n,q as at,qa as cn,qb as oe,qc as _i,r as nr,ra as _e,rb as Bi,rc as Rt,s as ya,sa as un,sb as ci,sc as Ga,t as rr,ta as Qt,tb as F,tc as Xa,u as Ca,ua as g,ub as Hi,uc as Za,v as ba,va as Fa,vb as de,vc as Ja,w as xa,wa as Ze,wb as De,wc as eo,x as ai,xa as h,xb as Va,xc as it,y as on,ya as ie,yb as Ke,yc as to,z as oi,za as Se,zb as Ra,zc as vn}from"./chunk-ZYWMUFFA.js";import{a as w,b as $,c as en,d as Pi,e as Ie}from"./chunk-FDERIQAA.js";var Wo=en(En=>{"use strict";Object.defineProperty(En,"__esModule",{value:!0});En.resolvePath=void 0;var $o=/((?:\??\.|(?:\?\.)?\[).*$|$)/.source,Oc=new RegExp(/^([\w$]+)/.source+$o),Lc=new RegExp(/^\[(?:(-?\d+(?:\.\d+)?)|(['"`])(.*?)\2)\](?=\??\.|\[(?:(?:-?\d+(?:\.\d+)?)|(['"`]).*?\4)|$)/.source+$o);function Bc(t,r){if(typeof t!="object")throw new TypeError("Expected object argument to be an object, got "+typeof t);if(typeof r!="string")throw new TypeError("Expected path argument to be a string, got "+typeof r);return zo(t,r)}En.resolvePath=Bc;function zo(t,r,e=r){if(!r)return t;let i;if([i,r]=Hc(r,e),t.hasOwnProperty(i))return zo(t[i],r,e)}function Hc(t,r){let e,i,n=t.match(Oc);if(n)return e=n[1],i=Yo(n[2]),[e,i];if(n=t.match(Lc),n)return e=n[1]?Uc(n[1]):n[3],i=Yo(n[5]),[e,i];throw new Error("Object path is invalid: "+r)}function Yo(t){return t.charAt(0)=="."?t.slice(1):t.charAt(0)=="?"?t.slice(2):t}function Uc(t){return isNaN(Number(t))?t:Number(t)}});var qo=en(bi=>{"use strict";Object.defineProperty(bi,"__esModule",{value:!0});bi.TakeChance=void 0;function Nc(t=0,r=100){let e=new Uint32Array(1);crypto.getRandomValues(e);let i=e[0]/4294967296;return t=Math.ceil(t),r=Math.floor(r),Math.floor(i*(r-t+1))+t}function Mr(t=0,r=1){return Math.random()*(r-t)+t}function Bt(t=0,r=100){return Math.round(Mr(t,r))}function jc(t=.5){return Math.random()<t}function Yc(t,r=0,e=100){let i=[];for(let n=0;n<t;n++)i.push(Bt(r,e));return i}function $c(t,r=0,e=1){let i=[];for(let n=0;n<t;n++)i.push(Mr(r,e));return i}function Ko(t=0,r=1,e=1){if(e<=0)throw new Error("Skew cannot be lower than or equal to 0");let i=0,n=0;for(;i===0;)i=Math.random();for(;n===0;)n=Math.random();let l=Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*n);return l=l/10+.5,l>1||l<0?l=Ko(t,r,e):(l=Math.pow(l,e),l*=r-t,l+=t),l}function kr(t,r=0,e=t.length-1){return r<0&&(r=0),e>t.length-1&&(e=t.length-1),t[Bt(r,e)]}function zc(t){let r=Object.keys(t);return kr(r)}function An(t){var r;typeof t.from=="string"&&(t.from=t.from.split(""));let e=(r=t.from)!==null&&r!==void 0?r:[];return(t.letters||t.lowercase)&&e.push(..."abcdefghijklmnopqrstuvwxyz".split("")),(t.letters||t.uppercase)&&e.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")),t.numbers&&e.push(..."0123456789".split("")),t.special&&e.push(..."!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("")),e=[...new Set(e)],kr(e)}function Pr(t,r){let e="";for(let i=0;i<t;i++)e+=An(r);return e}function Wc(t,r=new Date(Date.now())){return new Date(Bt(t.valueOf(),r.valueOf()))}function Kc(t=10){let r="";do r=An({letters:!0,numbers:!0,from:"-_"});while(r<="9"||r=="_");for(let e=1;e<t;e++)r+=An({letters:!0,numbers:!0,from:"-_"});return r}function qc(t=16){var r,e,i,n,l,c,u,x;let O="";do O=Pr(t,{letters:!0,numbers:!0,special:!0});while(((e=(r=O.match(/[a-z]/g))===null||r===void 0?void 0:r.length)!==null&&e!==void 0?e:0)<t/4||((n=(i=O.match(/[A-Z]/g))===null||i===void 0?void 0:i.length)!==null&&n!==void 0?n:0)<t/4||((c=(l=O.match(/[0-9]/g))===null||l===void 0?void 0:l.length)!==null&&c!==void 0?c:0)<t/6||((x=(u=O.match(/[!"#$%&'()*+,\-./:;<=>?@[\\]\^_`{|}~]/g))===null||u===void 0?void 0:u.length)!==null&&x!==void 0?x:0)<t/8);return O}function Qc(t=6){return Bt(1,t)}function Gc(){return{r:Bt(0,255),g:Bt(0,255),b:Bt(0,255)}}function Xc(){return"#"+Pr(6,{numbers:!0,from:"abcdef"})}bi.TakeChance={int:Bt,secureInt:Nc,float:Mr,multipleInt:Yc,multipleFloat:$c,boolean:jc,binomial:Ko,character:An,string:Pr,fromArray:kr,fromObject:zc,date:Wc,id:Kc,password:qc,die:Qc,rgbColor:Gc,hexColor:Xc};bi.default=bi.TakeChance});var Qo=en(be=>{"use strict";Object.defineProperty(be,"__esModule",{value:!0});be.approximate=be.APPROXIMATION_UNITS=be.roundToMultiple=be.roundToPrecision=be.roundFromZero=be.roundToZero=be.roundDown=be.roundUp=be.round=void 0;function Vr(t){return Math.round(t)}be.round=Vr;function Rr(t){return Math.ceil(t)}be.roundUp=Rr;function Or(t){return Math.floor(t)}be.roundDown=Or;function Lr(t){return t<=0?Math.ceil(t):Math.floor(t)}be.roundToZero=Lr;function Br(t){return t>=0?Math.ceil(t):Math.floor(t)}be.roundFromZero=Br;function xi(t,r=1,e="normal"){switch(r=10**r,e){case"normal":return Vr(t*r)/r;case"up":return Rr(t*r)/r;case"down":return Or(t*r)/r;case"to_zero":return Lr(t*r)/r;case"from_zero":return Br(t*r)/r}}be.roundToPrecision=xi;function Zc(t,r,e="normal"){switch(e){case"normal":return Vr(t/r)*r;case"up":return Rr(t/r)*r;case"down":return Or(t/r)*r;case"to_zero":return Lr(t/r)*r;case"from_zero":return Br(t/r)*r}}be.roundToMultiple=Zc;be.APPROXIMATION_UNITS={k:1e3,M:1e6,B:1e9,T:1e12,Qa:1e15,Qi:1e18,Sx:1e21,Sp:1e24,Oc:1e27,No:1e30,Dc:1e33};function Jc(t,r=1,e,i,n,l=!0){var c;if(!e){let O=Object.keys(be.APPROXIMATION_UNITS);for(let k=0;k<O.length;k++){let q=O[k],D=be.APPROXIMATION_UNITS[q],P=t/D;if(P>=1&&P<1e3)return i?xi(P,r).toLocaleString(i)+(l?" ":"")+q:String(xi(P,r))+(l?" ":"")+q}return String(xi(t,r).toLocaleString(i))}let u=be.APPROXIMATION_UNITS[e],x=(c=n?.[e])!==null&&c!==void 0?c:e;return i?xi(t/u,r).toLocaleString(i)+(l?" ":"")+x:String(xi(t/u,r))+(l?" ":"")+x}be.approximate=Jc});var oa=en((sl,Kn)=>{"use strict";(function(){"use strict";var t=function(D,P){return P=P||"",D.replace(/(^|-)/g,"$1\\u"+P).replace(/,/g,"\\u"+P)},r=t("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7","00"),e="a-z"+t("DF-F6,F8-FF","00"),i="A-Z"+t("C0-D6,D8-DE","00"),n="A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via",l=function(D,P,J,se){return D=D||r,P=P||e,J=J||i,se=se||n,{capitalize:new RegExp("(^|["+D+"])(["+P+"])","g"),pascal:new RegExp("(^|["+D+"])+(["+P+J+"])","g"),fill:new RegExp("["+D+"]+(.|$)","g"),sentence:new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")(['+P+"])","g"),improper:new RegExp("\\b("+se+")\\b","g"),relax:new RegExp("([^"+J+"])(["+J+"]*)(["+J+"])(?=[^"+J+"]|$)","g"),upper:new RegExp("^[^"+P+"]+$"),hole:/[^\s]\s[^\s]/,apostrophe:/'/g,room:new RegExp("["+D+"]")}},c=l(),u={re:c,unicodes:t,regexps:l,types:[],up:String.prototype.toUpperCase,low:String.prototype.toLowerCase,cap:function(D){return u.up.call(D.charAt(0))+D.slice(1)},decap:function(D){return u.low.call(D.charAt(0))+D.slice(1)},deapostrophe:function(D){return D.replace(c.apostrophe,"")},fill:function(D,P,J){return P!=null&&(D=D.replace(c.fill,function(se,Ye){return Ye?P+Ye:""})),J&&(D=u.deapostrophe(D)),D},prep:function(D,P,J,se){if(D=D==null?"":D+"",!se&&c.upper.test(D)&&(D=u.low.call(D)),!P&&!c.hole.test(D)){var Ye=u.fill(D," ");c.hole.test(Ye)&&(D=Ye)}return!J&&!c.room.test(D)&&(D=D.replace(c.relax,u.relax)),D},relax:function(D,P,J,se){return P+" "+(J?J+" ":"")+se}},x={_:u,of:function(D){for(var P=0,J=u.types.length;P<J;P++)if(x[u.types[P]].apply(x,arguments)===D)return u.types[P]},flip:function(D){return D.replace(/\w/g,function(P){return(P==u.up.call(P)?u.low:u.up).call(P)})},random:function(D){return D.replace(/\w/g,function(P){return(Math.round(Math.random())?u.up:u.low).call(P)})},type:function(D,P){x[D]=P,u.types.push(D)}},O={lower:function(D,P,J){return u.fill(u.low.call(u.prep(D,P)),P,J)},snake:function(D){return x.lower(D,"_",!0)},constant:function(D){return x.upper(D,"_",!0)},camel:function(D){return u.decap(x.pascal(D))},kebab:function(D){return x.lower(D,"-",!0)},upper:function(D,P,J){return u.fill(u.up.call(u.prep(D,P,!1,!0)),P,J)},capital:function(D,P,J){return u.fill(u.prep(D).replace(c.capitalize,function(se,Ye,ki){return Ye+u.up.call(ki)}),P,J)},header:function(D){return x.capital(D,"-",!0)},pascal:function(D){return u.fill(u.prep(D,!1,!0).replace(c.pascal,function(P,J,se){return u.up.call(se)}),"",!0)},title:function(D){return x.capital(D).replace(c.improper,function(P,J,se,Ye){return se>0&&se<Ye.lastIndexOf(" ")?u.low.call(P):P})},sentence:function(D,P,J){return D=x.lower(D).replace(c.sentence,function(se,Ye,ki){return Ye+u.up.call(ki)}),P&&P.forEach(function(se){D=D.replace(new RegExp("\\b"+x.lower(se)+"\\b","g"),u.cap)}),J&&J.forEach(function(se){D=D.replace(new RegExp("(\\b"+x.lower(se)+"\\. +)(\\w)"),function(Ye,ki,lc){return ki+u.low.call(lc)})}),D}};O.squish=O.pascal,x.default=x;for(var k in O)x.type(k,O[k]);var q=typeof q=="function"?q:function(){};q(typeof Kn=="object"&&Kn.exports?Kn.exports=x:this.Case=x)}).call(sl)});Array.prototype.last=function(t,r){return t==null?this[this.length-1]:t==1?this.filter(r??(()=>!0)).last():this.filter(r??(()=>!0)).slice(-t)};Array.prototype.first=function(t,r){return t==null?this[0]:t==1?this.filter(r??(()=>!0))[0]:this.filter(r??(()=>!0)).slice(0,t)};function vi(t){return Array.isArray(t)?t:[t]}function Ee(t){return t==null?"":typeof t=="string"?t:`${t}px`}function xo(t){return t instanceof ye?t.nativeElement:t}var hr;try{hr=typeof Intl<"u"&&Intl.v8BreakIterator}catch{hr=!1}var qe=(()=>{class t{constructor(e){this._platformId=e,this.isBrowser=this._platformId?Ui(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||hr)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static{this.\u0275fac=function(i){return new(i||t)(U(Vi))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Xt;function wo(){if(Xt==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Xt=!1,Xt;if("scrollBehavior"in document.documentElement.style)Xt=!0;else{let t=Element.prototype.scrollTo;t?Xt=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Xt=!1}}return Xt}function To(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}function bn(t){return t.composedPath?t.composedPath()[0]:t.target}function fr(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var dc=new R("cdk-dir-doc",{providedIn:"root",factory:cc});function cc(){return I(De)}var uc=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function pc(t){let r=t?.toLowerCase()||"";return r==="auto"&&typeof navigator<"u"&&navigator?.language?uc.test(navigator.language)?"rtl":"ltr":r==="rtl"?"rtl":"ltr"}var So=(()=>{class t{constructor(e){if(this.value="ltr",this.change=new qt,e){let i=e.body?e.body.dir:null,n=e.documentElement?e.documentElement.dir:null;this.value=pc(i||n||"ltr")}}ngOnDestroy(){this.change.complete()}static{this.\u0275fac=function(i){return new(i||t)(U(dc,8))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var ji=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({})}}return t})();var fc=20,Eo=(()=>{class t{constructor(e,i,n){this._ngZone=e,this._platform=i,this._scrolled=new Ue,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=n}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=fc){return this._platform.isBrowser?new nn(i=>{this._globalSubscription||this._addGlobalListener();let n=e>0?this._scrolled.pipe(nr(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):ha()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let n=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(at(l=>!l||n.indexOf(l)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((n,l)=>{this._scrollableContainsElement(l,e)&&i.push(l)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,i){let n=xo(i),l=e.getElementRef().nativeElement;do if(n==l)return!0;while(n=n.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let e=this._getWindow();return va(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}static{this.\u0275fac=function(i){return new(i||t)(U(Xe),U(qe),U(De,8))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var gc=20,gr=(()=>{class t{constructor(e,i,n){this._platform=e,this._change=new Ue,this._changeListener=l=>{this._change.next(l)},this._document=n,i.runOutsideAngular(()=>{if(e.isBrowser){let l=this._getWindow();l.addEventListener("resize",this._changeListener),l.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+i,height:n,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),n=e.documentElement,l=n.getBoundingClientRect(),c=-l.top||e.body.scrollTop||i.scrollY||n.scrollTop||0,u=-l.left||e.body.scrollLeft||i.scrollX||n.scrollLeft||0;return{top:c,left:u}}change(e=gc){return e>0?this._change.pipe(nr(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static{this.\u0275fac=function(i){return new(i||t)(U(qe),U(Xe),U(De,8))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Do=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({})}}return t})(),_r=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ji,Do,ji,Do]})}}return t})();var Yi=class{attach(r){return this._attachedHost=r,r.attach(this)}detach(){let r=this._attachedHost;r!=null&&(this._attachedHost=null,r.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(r){this._attachedHost=r}},wn=class extends Yi{constructor(r,e,i,n,l){super(),this.component=r,this.viewContainerRef=e,this.injector=i,this.componentFactoryResolver=n,this.projectableNodes=l}},yi=class extends Yi{constructor(r,e,i,n){super(),this.templateRef=r,this.viewContainerRef=e,this.context=i,this.injector=n}get origin(){return this.templateRef.elementRef}attach(r,e=this.context){return this.context=e,super.attach(r)}detach(){return this.context=void 0,super.detach()}},vr=class extends Yi{constructor(r){super(),this.element=r instanceof ye?r.nativeElement:r}},yr=class{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(r){if(r instanceof wn)return this._attachedPortal=r,this.attachComponentPortal(r);if(r instanceof yi)return this._attachedPortal=r,this.attachTemplatePortal(r);if(this.attachDomPortal&&r instanceof vr)return this._attachedPortal=r,this.attachDomPortal(r)}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(r){this._disposeFn=r}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Tn=class extends yr{constructor(r,e,i,n,l){super(),this.outletElement=r,this._componentFactoryResolver=e,this._appRef=i,this._defaultInjector=n,this.attachDomPortal=c=>{this._document;let u=c.element;u.parentNode;let x=this._document.createComment("dom-portal");u.parentNode.insertBefore(x,u),this.outletElement.appendChild(u),this._attachedPortal=c,super.setDisposeFn(()=>{x.parentNode&&x.parentNode.replaceChild(u,x)})},this._document=l}attachComponentPortal(r){let i=(r.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(r.component),n;return r.viewContainerRef?(n=r.viewContainerRef.createComponent(i,r.viewContainerRef.length,r.injector||r.viewContainerRef.injector,r.projectableNodes||void 0),this.setDisposeFn(()=>n.destroy())):(n=i.create(r.injector||this._defaultInjector||St.NULL),this._appRef.attachView(n.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(n.hostView),n.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(n)),this._attachedPortal=r,n}attachTemplatePortal(r){let e=r.viewContainerRef,i=e.createEmbeddedView(r.templateRef,r.context,{injector:r.injector});return i.rootNodes.forEach(n=>this.outletElement.appendChild(n)),i.detectChanges(),this.setDisposeFn(()=>{let n=e.indexOf(i);n!==-1&&e.remove(n)}),this._attachedPortal=r,i}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(r){return r.hostView.rootNodes[0]}};var Ao=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({})}}return t})();var Fo=wo(),Cr=class{constructor(r,e){this._viewportRuler=r,this._previousHTMLStyles={top:"",left:""},this._isEnabled=!1,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let r=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=r.style.left||"",this._previousHTMLStyles.top=r.style.top||"",r.style.left=Ee(-this._previousScrollPosition.left),r.style.top=Ee(-this._previousScrollPosition.top),r.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let r=this._document.documentElement,e=this._document.body,i=r.style,n=e.style,l=i.scrollBehavior||"",c=n.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,r.classList.remove("cdk-global-scrollblock"),Fo&&(i.scrollBehavior=n.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Fo&&(i.scrollBehavior=l,n.scrollBehavior=c)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.body,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};var br=class{constructor(r,e,i,n){this._scrollDispatcher=r,this._ngZone=e,this._viewportRuler=i,this._config=n,this._scrollSubscription=null,this._detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}}attach(r){this._overlayRef,this._overlayRef=r}enable(){if(this._scrollSubscription)return;let r=this._scrollDispatcher.scrolled(0).pipe(at(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=r.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=r.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Sn=class{enable(){}disable(){}attach(){}};function xr(t,r){return r.some(e=>{let i=t.bottom<e.top,n=t.top>e.bottom,l=t.right<e.left,c=t.left>e.right;return i||n||l||c})}function Io(t,r){return r.some(e=>{let i=t.top<e.top,n=t.bottom>e.bottom,l=t.left<e.left,c=t.right>e.right;return i||n||l||c})}var wr=class{constructor(r,e,i,n){this._scrollDispatcher=r,this._viewportRuler=e,this._ngZone=i,this._config=n,this._scrollSubscription=null}attach(r){this._overlayRef,this._overlayRef=r}enable(){if(!this._scrollSubscription){let r=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(r).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:n}=this._viewportRuler.getViewportSize();xr(e,[{width:i,height:n,bottom:n,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Dn=(()=>{class t{constructor(e,i,n,l){this._scrollDispatcher=e,this._viewportRuler=i,this._ngZone=n,this.noop=()=>new Sn,this.close=c=>new br(this._scrollDispatcher,this._ngZone,this._viewportRuler,c),this.block=()=>new Cr(this._viewportRuler,this._document),this.reposition=c=>new wr(this._scrollDispatcher,this._viewportRuler,this._ngZone,c),this._document=l}static{this.\u0275fac=function(i){return new(i||t)(U(Eo),U(gr),U(Xe),U(De))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),$i=class{constructor(r){if(this.scrollStrategy=new Sn,this.panelClass="",this.hasBackdrop=!1,this.backdropClass="cdk-overlay-dark-backdrop",this.disposeOnNavigation=!1,r){let e=Object.keys(r);for(let i of e)r[i]!==void 0&&(this[i]=r[i])}}};var Tr=class{constructor(r,e){this.connectionPair=r,this.scrollableViewProperties=e}};var Oo=(()=>{class t{constructor(e){this._attachedOverlays=[],this._document=e}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}static{this.\u0275fac=function(i){return new(i||t)(U(De))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),vc=(()=>{class t extends Oo{constructor(e,i){super(e),this._ngZone=i,this._keydownListener=n=>{let l=this._attachedOverlays;for(let c=l.length-1;c>-1;c--)if(l[c]._keydownEvents.observers.length>0){let u=l[c]._keydownEvents;this._ngZone?this._ngZone.run(()=>u.next(n)):u.next(n);break}}}add(e){super.add(e),this._isAttached||(this._ngZone?this._ngZone.runOutsideAngular(()=>this._document.body.addEventListener("keydown",this._keydownListener)):this._document.body.addEventListener("keydown",this._keydownListener),this._isAttached=!0)}detach(){this._isAttached&&(this._document.body.removeEventListener("keydown",this._keydownListener),this._isAttached=!1)}static{this.\u0275fac=function(i){return new(i||t)(U(De),U(Xe,8))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),yc=(()=>{class t extends Oo{constructor(e,i,n){super(e),this._platform=i,this._ngZone=n,this._cursorStyleIsSet=!1,this._pointerDownListener=l=>{this._pointerDownEventTarget=bn(l)},this._clickListener=l=>{let c=bn(l),u=l.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:c;this._pointerDownEventTarget=null;let x=this._attachedOverlays.slice();for(let O=x.length-1;O>-1;O--){let k=x[O];if(k._outsidePointerEvents.observers.length<1||!k.hasAttached())continue;if(Mo(k.overlayElement,c)||Mo(k.overlayElement,u))break;let q=k._outsidePointerEvents;this._ngZone?this._ngZone.run(()=>q.next(l)):q.next(l)}}}add(e){if(super.add(e),!this._isAttached){let i=this._document.body;this._ngZone?this._ngZone.runOutsideAngular(()=>this._addEventListeners(i)):this._addEventListeners(i),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){if(this._isAttached){let e=this._document.body;e.removeEventListener("pointerdown",this._pointerDownListener,!0),e.removeEventListener("click",this._clickListener,!0),e.removeEventListener("auxclick",this._clickListener,!0),e.removeEventListener("contextmenu",this._clickListener,!0),this._platform.IOS&&this._cursorStyleIsSet&&(e.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1}}_addEventListeners(e){e.addEventListener("pointerdown",this._pointerDownListener,!0),e.addEventListener("click",this._clickListener,!0),e.addEventListener("auxclick",this._clickListener,!0),e.addEventListener("contextmenu",this._clickListener,!0)}static{this.\u0275fac=function(i){return new(i||t)(U(De),U(qe),U(Xe,8))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Mo(t,r){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=r;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var Lo=(()=>{class t{constructor(e,i){this._platform=i,this._document=e}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||fr()){let n=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let l=0;l<n.length;l++)n[l].remove()}let i=this._document.createElement("div");i.classList.add(e),fr()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}static{this.\u0275fac=function(i){return new(i||t)(U(De),U(qe))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Sr=class{constructor(r,e,i,n,l,c,u,x,O,k=!1,q){this._portalOutlet=r,this._host=e,this._pane=i,this._config=n,this._ngZone=l,this._keyboardDispatcher=c,this._document=u,this._location=x,this._outsideClickDispatcher=O,this._animationsDisabled=k,this._injector=q,this._backdropElement=null,this._backdropClick=new Ue,this._attachments=new Ue,this._detachments=new Ue,this._locationChanges=tn.EMPTY,this._backdropClickHandler=D=>this._backdropClick.next(D),this._backdropTransitionendHandler=D=>{this._disposeBackdrop(D.target)},this._keydownEvents=new Ue,this._outsidePointerEvents=new Ue,this._renders=new Ue,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy,this._afterRenderRef=Hi(()=>Ea(()=>{this._renders.next()},{injector:this._injector}))}get overlayElement(){return this._pane}get backdropElement(){return this._backdropElement}get hostElement(){return this._host}attach(r){!this._host.parentElement&&this._previousHostParent&&this._previousHostParent.appendChild(this._host);let e=this._portalOutlet.attach(r);return this._positionStrategy&&this._positionStrategy.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=sn(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let r=this._portalOutlet.detach();return this._detachments.next(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),r}dispose(){let r=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._disposeBackdrop(this._backdropElement),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=null,r&&this._detachments.next(),this._detachments.complete(),this._afterRenderRef.destroy(),this._renders.complete()}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(r){r!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=r,this.hasAttached()&&(r.attach(this),this.updatePosition()))}updateSize(r){this._config=w(w({},this._config),r),this._updateElementSize()}setDirection(r){this._config=$(w({},this._config),{direction:r}),this._updateElementDirection()}addPanelClass(r){this._pane&&this._toggleClasses(this._pane,r,!0)}removePanelClass(r){this._pane&&this._toggleClasses(this._pane,r,!1)}getDirection(){let r=this._config.direction;return r?typeof r=="string"?r:r.value:"ltr"}updateScrollStrategy(r){r!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=r,this.hasAttached()&&(r.attach(this),r.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let r=this._pane.style;r.width=Ee(this._config.width),r.height=Ee(this._config.height),r.minWidth=Ee(this._config.minWidth),r.minHeight=Ee(this._config.minHeight),r.maxWidth=Ee(this._config.maxWidth),r.maxHeight=Ee(this._config.maxHeight)}_togglePointerEvents(r){this._pane.style.pointerEvents=r?"":"none"}_attachBackdrop(){let r="cdk-overlay-backdrop-showing";this._backdropElement=this._document.createElement("div"),this._backdropElement.classList.add("cdk-overlay-backdrop"),this._animationsDisabled&&this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropElement,this._config.backdropClass,!0),this._host.parentElement.insertBefore(this._backdropElement,this._host),this._backdropElement.addEventListener("click",this._backdropClickHandler),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{this._backdropElement&&this._backdropElement.classList.add(r)})}):this._backdropElement.classList.add(r)}_updateStackingOrder(){this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){let r=this._backdropElement;if(r){if(this._animationsDisabled){this._disposeBackdrop(r);return}r.classList.remove("cdk-overlay-backdrop-showing"),this._ngZone.runOutsideAngular(()=>{r.addEventListener("transitionend",this._backdropTransitionendHandler)}),r.style.pointerEvents="none",this._backdropTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(()=>{this._disposeBackdrop(r)},500))}}_toggleClasses(r,e,i){let n=vi(e||[]).filter(l=>!!l);n.length&&(i?r.classList.add(...n):r.classList.remove(...n))}_detachContentWhenEmpty(){this._ngZone.runOutsideAngular(()=>{let r=this._renders.pipe(oi(an(this._attachments,this._detachments))).subscribe(()=>{(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),r.unsubscribe())})})}_disposeScrollStrategy(){let r=this._scrollStrategy;r&&(r.disable(),r.detach&&r.detach())}_disposeBackdrop(r){r&&(r.removeEventListener("click",this._backdropClickHandler),r.removeEventListener("transitionend",this._backdropTransitionendHandler),r.remove(),this._backdropElement===r&&(this._backdropElement=null)),this._backdropTimeout&&(clearTimeout(this._backdropTimeout),this._backdropTimeout=void 0)}},ko="cdk-overlay-connected-position-bounding-box",Cc=/([A-Za-z%]+)$/,Dr=class{get positions(){return this._preferredPositions}constructor(r,e,i,n,l){this._viewportRuler=e,this._document=i,this._platform=n,this._overlayContainer=l,this._lastBoundingBoxSize={width:0,height:0},this._isPushed=!1,this._canPush=!0,this._growAfterOpen=!1,this._hasFlexibleDimensions=!0,this._positionLocked=!1,this._viewportMargin=0,this._scrollables=[],this._preferredPositions=[],this._positionChanges=new Ue,this._resizeSubscription=tn.EMPTY,this._offsetX=0,this._offsetY=0,this._appliedPanelClasses=[],this.positionChanges=this._positionChanges,this.setOrigin(r)}attach(r){this._overlayRef&&this._overlayRef,this._validatePositions(),r.hostElement.classList.add(ko),this._overlayRef=r,this._boundingBox=r.hostElement,this._pane=r.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();let r=this._originRect,e=this._overlayRect,i=this._viewportRect,n=this._containerRect,l=[],c;for(let u of this._preferredPositions){let x=this._getOriginPoint(r,n,u),O=this._getOverlayPoint(x,e,u),k=this._getOverlayFit(O,e,i,u);if(k.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(u,x);return}if(this._canFitWithFlexibleDimensions(k,O,i)){l.push({position:u,origin:x,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(x,u)});continue}(!c||c.overlayFit.visibleArea<k.visibleArea)&&(c={overlayFit:k,overlayPoint:O,originPoint:x,position:u,overlayRect:e})}if(l.length){let u=null,x=-1;for(let O of l){let k=O.boundingBoxRect.width*O.boundingBoxRect.height*(O.position.weight||1);k>x&&(x=k,u=O)}this._isPushed=!1,this._applyPosition(u.position,u.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(c.position,c.originPoint);return}this._applyPosition(c.position,c.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Zt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(ko),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let r=this._lastPosition;if(r){this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();let e=this._getOriginPoint(this._originRect,this._containerRect,r);this._applyPosition(r,e)}else this.apply()}withScrollableContainers(r){return this._scrollables=r,this}withPositions(r){return this._preferredPositions=r,r.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(r){return this._viewportMargin=r,this}withFlexibleDimensions(r=!0){return this._hasFlexibleDimensions=r,this}withGrowAfterOpen(r=!0){return this._growAfterOpen=r,this}withPush(r=!0){return this._canPush=r,this}withLockedPosition(r=!0){return this._positionLocked=r,this}setOrigin(r){return this._origin=r,this}withDefaultOffsetX(r){return this._offsetX=r,this}withDefaultOffsetY(r){return this._offsetY=r,this}withTransformOriginOn(r){return this._transformOriginSelector=r,this}_getOriginPoint(r,e,i){let n;if(i.originX=="center")n=r.left+r.width/2;else{let c=this._isRtl()?r.right:r.left,u=this._isRtl()?r.left:r.right;n=i.originX=="start"?c:u}e.left<0&&(n-=e.left);let l;return i.originY=="center"?l=r.top+r.height/2:l=i.originY=="top"?r.top:r.bottom,e.top<0&&(l-=e.top),{x:n,y:l}}_getOverlayPoint(r,e,i){let n;i.overlayX=="center"?n=-e.width/2:i.overlayX==="start"?n=this._isRtl()?-e.width:0:n=this._isRtl()?0:-e.width;let l;return i.overlayY=="center"?l=-e.height/2:l=i.overlayY=="top"?0:-e.height,{x:r.x+n,y:r.y+l}}_getOverlayFit(r,e,i,n){let l=Vo(e),{x:c,y:u}=r,x=this._getOffset(n,"x"),O=this._getOffset(n,"y");x&&(c+=x),O&&(u+=O);let k=0-c,q=c+l.width-i.width,D=0-u,P=u+l.height-i.height,J=this._subtractOverflows(l.width,k,q),se=this._subtractOverflows(l.height,D,P),Ye=J*se;return{visibleArea:Ye,isCompletelyWithinViewport:l.width*l.height===Ye,fitsInViewportVertically:se===l.height,fitsInViewportHorizontally:J==l.width}}_canFitWithFlexibleDimensions(r,e,i){if(this._hasFlexibleDimensions){let n=i.bottom-e.y,l=i.right-e.x,c=Po(this._overlayRef.getConfig().minHeight),u=Po(this._overlayRef.getConfig().minWidth),x=r.fitsInViewportVertically||c!=null&&c<=n,O=r.fitsInViewportHorizontally||u!=null&&u<=l;return x&&O}return!1}_pushOverlayOnScreen(r,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:r.x+this._previousPushAmount.x,y:r.y+this._previousPushAmount.y};let n=Vo(e),l=this._viewportRect,c=Math.max(r.x+n.width-l.width,0),u=Math.max(r.y+n.height-l.height,0),x=Math.max(l.top-i.top-r.y,0),O=Math.max(l.left-i.left-r.x,0),k=0,q=0;return n.width<=l.width?k=O||-c:k=r.x<this._viewportMargin?l.left-i.left-r.x:0,n.height<=l.height?q=x||-u:q=r.y<this._viewportMargin?l.top-i.top-r.y:0,this._previousPushAmount={x:k,y:q},{x:r.x+k,y:r.y+q}}_applyPosition(r,e){if(this._setTransformOrigin(r),this._setOverlayElementStyles(e,r),this._setBoundingBoxStyles(e,r),r.panelClass&&this._addPanelClasses(r.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(r!==this._lastPosition||!this._lastScrollVisibility||!bc(this._lastScrollVisibility,i)){let n=new Tr(r,i);this._positionChanges.next(n)}this._lastScrollVisibility=i}this._lastPosition=r,this._isInitialRender=!1}_setTransformOrigin(r){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,n=r.overlayY;r.overlayX==="center"?i="center":this._isRtl()?i=r.overlayX==="start"?"right":"left":i=r.overlayX==="start"?"left":"right";for(let l=0;l<e.length;l++)e[l].style.transformOrigin=`${i} ${n}`}_calculateBoundingBoxRect(r,e){let i=this._viewportRect,n=this._isRtl(),l,c,u;if(e.overlayY==="top")c=r.y,l=i.height-c+this._viewportMargin;else if(e.overlayY==="bottom")u=i.height-r.y+this._viewportMargin*2,l=i.height-u+this._viewportMargin;else{let P=Math.min(i.bottom-r.y+i.top,r.y),J=this._lastBoundingBoxSize.height;l=P*2,c=r.y-P,l>J&&!this._isInitialRender&&!this._growAfterOpen&&(c=r.y-J/2)}let x=e.overlayX==="start"&&!n||e.overlayX==="end"&&n,O=e.overlayX==="end"&&!n||e.overlayX==="start"&&n,k,q,D;if(O)D=i.width-r.x+this._viewportMargin*2,k=r.x-this._viewportMargin;else if(x)q=r.x,k=i.right-r.x;else{let P=Math.min(i.right-r.x+i.left,r.x),J=this._lastBoundingBoxSize.width;k=P*2,q=r.x-P,k>J&&!this._isInitialRender&&!this._growAfterOpen&&(q=r.x-J/2)}return{top:c,left:q,bottom:u,right:D,width:k,height:l}}_setBoundingBoxStyles(r,e){let i=this._calculateBoundingBoxRect(r,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left="0",n.bottom=n.right=n.maxHeight=n.maxWidth="",n.width=n.height="100%";else{let l=this._overlayRef.getConfig().maxHeight,c=this._overlayRef.getConfig().maxWidth;n.height=Ee(i.height),n.top=Ee(i.top),n.bottom=Ee(i.bottom),n.width=Ee(i.width),n.left=Ee(i.left),n.right=Ee(i.right),e.overlayX==="center"?n.alignItems="center":n.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?n.justifyContent="center":n.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",l&&(n.maxHeight=Ee(l)),c&&(n.maxWidth=Ee(c))}this._lastBoundingBoxSize=i,Zt(this._boundingBox.style,n)}_resetBoundingBoxStyles(){Zt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Zt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(r,e){let i={},n=this._hasExactPosition(),l=this._hasFlexibleDimensions,c=this._overlayRef.getConfig();if(n){let k=this._viewportRuler.getViewportScrollPosition();Zt(i,this._getExactOverlayY(e,r,k)),Zt(i,this._getExactOverlayX(e,r,k))}else i.position="static";let u="",x=this._getOffset(e,"x"),O=this._getOffset(e,"y");x&&(u+=`translateX(${x}px) `),O&&(u+=`translateY(${O}px)`),i.transform=u.trim(),c.maxHeight&&(n?i.maxHeight=Ee(c.maxHeight):l&&(i.maxHeight="")),c.maxWidth&&(n?i.maxWidth=Ee(c.maxWidth):l&&(i.maxWidth="")),Zt(this._pane.style,i)}_getExactOverlayY(r,e,i){let n={top:"",bottom:""},l=this._getOverlayPoint(e,this._overlayRect,r);if(this._isPushed&&(l=this._pushOverlayOnScreen(l,this._overlayRect,i)),r.overlayY==="bottom"){let c=this._document.documentElement.clientHeight;n.bottom=`${c-(l.y+this._overlayRect.height)}px`}else n.top=Ee(l.y);return n}_getExactOverlayX(r,e,i){let n={left:"",right:""},l=this._getOverlayPoint(e,this._overlayRect,r);this._isPushed&&(l=this._pushOverlayOnScreen(l,this._overlayRect,i));let c;if(this._isRtl()?c=r.overlayX==="end"?"left":"right":c=r.overlayX==="end"?"right":"left",c==="right"){let u=this._document.documentElement.clientWidth;n.right=`${u-(l.x+this._overlayRect.width)}px`}else n.left=Ee(l.x);return n}_getScrollVisibility(){let r=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Io(r,i),isOriginOutsideView:xr(r,i),isOverlayClipped:Io(e,i),isOverlayOutsideView:xr(e,i)}}_subtractOverflows(r,...e){return e.reduce((i,n)=>i-Math.max(n,0),r)}_getNarrowedViewportRect(){let r=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._viewportMargin,left:i.left+this._viewportMargin,right:i.left+r-this._viewportMargin,bottom:i.top+e-this._viewportMargin,width:r-2*this._viewportMargin,height:e-2*this._viewportMargin}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(r,e){return e==="x"?r.offsetX==null?this._offsetX:r.offsetX:r.offsetY==null?this._offsetY:r.offsetY}_validatePositions(){}_addPanelClasses(r){this._pane&&vi(r).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(r=>{this._pane.classList.remove(r)}),this._appliedPanelClasses=[])}_getOriginRect(){let r=this._origin;if(r instanceof ye)return r.nativeElement.getBoundingClientRect();if(r instanceof Element)return r.getBoundingClientRect();let e=r.width||0,i=r.height||0;return{top:r.y,bottom:r.y+i,left:r.x,right:r.x+e,height:i,width:e}}};function Zt(t,r){for(let e in r)r.hasOwnProperty(e)&&(t[e]=r[e]);return t}function Po(t){if(typeof t!="number"&&t!=null){let[r,e]=t.split(Cc);return!e||e==="px"?parseFloat(r):null}return t||null}function Vo(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function bc(t,r){return t===r?!0:t.isOriginClipped===r.isOriginClipped&&t.isOriginOutsideView===r.isOriginOutsideView&&t.isOverlayClipped===r.isOverlayClipped&&t.isOverlayOutsideView===r.isOverlayOutsideView}var Ro="cdk-global-overlay-wrapper",Er=class{constructor(){this._cssPosition="static",this._topOffset="",this._bottomOffset="",this._alignItems="",this._xPosition="",this._xOffset="",this._width="",this._height="",this._isDisposed=!1}attach(r){let e=r.getConfig();this._overlayRef=r,this._width&&!e.width&&r.updateSize({width:this._width}),this._height&&!e.height&&r.updateSize({height:this._height}),r.hostElement.classList.add(Ro),this._isDisposed=!1}top(r=""){return this._bottomOffset="",this._topOffset=r,this._alignItems="flex-start",this}left(r=""){return this._xOffset=r,this._xPosition="left",this}bottom(r=""){return this._topOffset="",this._bottomOffset=r,this._alignItems="flex-end",this}right(r=""){return this._xOffset=r,this._xPosition="right",this}start(r=""){return this._xOffset=r,this._xPosition="start",this}end(r=""){return this._xOffset=r,this._xPosition="end",this}width(r=""){return this._overlayRef?this._overlayRef.updateSize({width:r}):this._width=r,this}height(r=""){return this._overlayRef?this._overlayRef.updateSize({height:r}):this._height=r,this}centerHorizontally(r=""){return this.left(r),this._xPosition="center",this}centerVertically(r=""){return this.top(r),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let r=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:n,height:l,maxWidth:c,maxHeight:u}=i,x=(n==="100%"||n==="100vw")&&(!c||c==="100%"||c==="100vw"),O=(l==="100%"||l==="100vh")&&(!u||u==="100%"||u==="100vh"),k=this._xPosition,q=this._xOffset,D=this._overlayRef.getConfig().direction==="rtl",P="",J="",se="";x?se="flex-start":k==="center"?(se="center",D?J=q:P=q):D?k==="left"||k==="end"?(se="flex-end",P=q):(k==="right"||k==="start")&&(se="flex-start",J=q):k==="left"||k==="start"?(se="flex-start",P=q):(k==="right"||k==="end")&&(se="flex-end",J=q),r.position=this._cssPosition,r.marginLeft=x?"0":P,r.marginTop=O?"0":this._topOffset,r.marginBottom=this._bottomOffset,r.marginRight=x?"0":J,e.justifyContent=se,e.alignItems=O?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let r=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(Ro),i.justifyContent=i.alignItems=r.marginTop=r.marginBottom=r.marginLeft=r.marginRight=r.position="",this._overlayRef=null,this._isDisposed=!0}},xc=(()=>{class t{constructor(e,i,n,l){this._viewportRuler=e,this._document=i,this._platform=n,this._overlayContainer=l}global(){return new Er}flexibleConnectedTo(e){return new Dr(e,this._viewportRuler,this._document,this._platform,this._overlayContainer)}static{this.\u0275fac=function(i){return new(i||t)(U(gr),U(De),U(qe),U(Lo))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),wc=0,Ci=(()=>{class t{constructor(e,i,n,l,c,u,x,O,k,q,D,P){this.scrollStrategies=e,this._overlayContainer=i,this._componentFactoryResolver=n,this._positionBuilder=l,this._keyboardDispatcher=c,this._injector=u,this._ngZone=x,this._document=O,this._directionality=k,this._location=q,this._outsideClickDispatcher=D,this._animationsModuleType=P}create(e){let i=this._createHostElement(),n=this._createPaneElement(i),l=this._createPortalOutlet(n),c=new $i(e);return c.direction=c.direction||this._directionality.value,new Sr(l,i,n,c,this._ngZone,this._keyboardDispatcher,this._document,this._location,this._outsideClickDispatcher,this._animationsModuleType==="NoopAnimations",this._injector.get(wa))}position(){return this._positionBuilder}_createPaneElement(e){let i=this._document.createElement("div");return i.id=`cdk-overlay-${wc++}`,i.classList.add("cdk-overlay-pane"),e.appendChild(i),i}_createHostElement(){let e=this._document.createElement("div");return this._overlayContainer.getContainerElement().appendChild(e),e}_createPortalOutlet(e){return this._appRef||(this._appRef=this._injector.get(Fa)),new Tn(e,this._componentFactoryResolver,this._appRef,this._injector,this._document)}static{this.\u0275fac=function(i){return new(i||t)(U(Dn),U(Lo),U(sr),U(xc),U(vc),U(St),U(Xe),U(De),U(So),U(Va),U(yc),U(Sa,8))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Tc=new R("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=I(Ci);return()=>t.scrollStrategies.reposition()}});function Sc(t){return()=>t.scrollStrategies.reposition()}var Dc={provide:Tc,deps:[Ci],useFactory:Sc},Bo=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({providers:[Ci,Dc],imports:[ji,Ao,_r,_r]})}}return t})();var Fr={PreferFileSystem:"preferFileSystem",CrossBrowser:"crossBrowser"};var tC={fileName:"download",method:Fr.PreferFileSystem},iC={method:Fr.PreferFileSystem,multiple:!1};var Ac={margin:0,throttleTime:100},nC=new R("ard-viewport-observer-defaults",{factory:()=>w({},Ac)});var Fc={delay:500,repeat:1e3/15,allowSpaceKey:!1,allowEnterKey:!1},Ic=new R("ard-hold-defaults",{factory:()=>w({},Fc)});function M(t){return t!=null&&`${t}`!="false"}function Le(t,r=void 0){return Mc(t)?Number(t):r}function Mc(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}var Uo=(()=>{class t{constructor(){this._DEFAULTS=I(Ic),this.ardHold=ne(),this.ardHoldDisabled=m(!1,{transform:e=>M(e)}),this.ardHoldDelay=m(this._DEFAULTS.delay,{transform:e=>Le(e,this._DEFAULTS.delay)}),this.ardHoldRepeat=m(this._DEFAULTS.repeat,{transform:e=>Le(e,this._DEFAULTS.repeat)}),this.ardAllowSpaceKey=m(this._DEFAULTS.allowSpaceKey,{transform:e=>M(e)}),this.ardAllowEnterKey=m(this._DEFAULTS.allowEnterKey,{transform:e=>M(e)}),this.interval=null,this.timeout=null,this.isKeyDown=!1,de(()=>{this.ardHoldDisabled()&&this._clear()})}onMouseDown(){this.ardHoldDisabled()||(this.timeout=setTimeout(()=>{this.timeout=null,this.interval=setInterval(()=>{this.ardHold.emit()},this.ardHoldRepeat())},this.ardHoldDelay()))}onMouseUp(){this._clear()}_clear(){if(this.timeout){clearTimeout(this.timeout),this.timeout=null;return}this.interval&&(clearInterval(this.interval),this.interval=null)}onKeyDown(e){this.ardAllowEnterKey()&&e.code=="Enter"&&e.preventDefault(),!this.isKeyDown&&(this.ardAllowSpaceKey()&&e.code=="Space"||this.ardAllowEnterKey()&&e.code=="Enter")&&(this.onMouseDown(),this.isKeyDown=!0)}onKeyUp(e){(this.ardAllowSpaceKey()&&e.code=="Space"||this.ardAllowEnterKey()&&e.code=="Enter")&&(this.onMouseUp(),this.isKeyDown=!1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=Q({type:t,selectors:[["","ardHold",""]],hostBindings:function(i,n){i&1&&_("mousedown",function(){return n.onMouseDown()})("touchstart",function(){return n.onMouseDown()})("mouseup",function(){return n.onMouseUp()},!1,We)("touchend",function(){return n.onMouseUp()},!1,We)("keydown",function(c){return n.onKeyDown(c)})("keyup",function(c){return n.onKeyUp(c)})},inputs:{ardHoldDisabled:[1,"ardHoldDisabled"],ardHoldDelay:[1,"ardHoldDelay"],ardHoldRepeat:[1,"ardHoldRepeat"],ardAllowSpaceKey:[1,"ardAllowSpaceKey"],ardAllowEnterKey:[1,"ardAllowEnterKey"]},outputs:{ardHold:"ardHold"},standalone:!1})}}return t})(),No=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee]})}}return t})(),kc={Host:"host",HTML:"html"};var Pc={threshold:200,target:kc.HTML},rC=new R("ard-infinite-scroll-defaults",{factory:()=>w({},Pc)});var Vc={extensionWithDot:!0,sizePrecision:2,sizeUseSpace:!0},aC=new R("ard-file-pipes-defaults",{factory:()=>w({},Vc)});var Ar=class{constructor(r,e={}){this.thisObjOrAbstractControl=r,this.options=e,this._injector=I(St),this._value$=new gt(void 0),this.value$=this._value$.asObservable(),this.value=Pe(this._value$,{injector:this._injector,initialValue:void 0}),this._errors$=new gt(null),this.errors$=this._errors$.asObservable(),this.errors=Pe(this._errors$,{injector:this._injector,initialValue:null}),this._touched$=new gt(!1),this.touched$=this._touched$.asObservable(),this.touched=Pe(this._touched$,{injector:this._injector,initialValue:!1}),this.untouched$=this.touched$.pipe(Re(i=>!i)),this.untouched=Pe(this.untouched$,{injector:this._injector,initialValue:!0}),this._pristine$=new gt(!0),this.pristine$=this._pristine$.asObservable(),this.pristine=Pe(this._pristine$,{injector:this._injector,initialValue:!0}),this.dirty$=this.pristine$.pipe(Re(i=>!i)),this.dirty=Pe(this.dirty$,{injector:this._injector,initialValue:!1}),this._status$=new gt("VALID"),this.status$=this._status$.asObservable(),this.status=Pe(this._status$,{injector:this._injector,initialValue:"VALID"}),this.valid$=this.status$.pipe(Re(i=>i==="VALID")),this.valid=Pe(this.valid$,{injector:this._injector,initialValue:!0}),this.invalid$=this.status$.pipe(Re(i=>i==="INVALID")),this.invalid=Pe(this.invalid$,{injector:this._injector,initialValue:!1}),this.pending$=this.status$.pipe(Re(i=>i==="PENDING")),this.pending=Pe(this.pending$,{injector:this._injector,initialValue:!1}),this.disabled$=this.status$.pipe(Re(i=>i==="DISABLED")),this.disabled=Pe(this.disabled$,{injector:this._injector,initialValue:!1}),this.enabled$=this.status$.pipe(Re(i=>i!=="DISABLED")),this.enabled=Pe(this.enabled$,{injector:this._injector,initialValue:!0}),this.touchedHasErrors=F(()=>!!this.errors()&&this.touched()),this._validators$=new gt(null),this.validators$=this._validators$.asObservable(),this.validators=Pe(this._validators$,{injector:this._injector,initialValue:null}),this._asyncValidators$=new gt(null),this.asyncValidators$=this._asyncValidators$.asObservable(),this.asyncValidators=Pe(this._asyncValidators$,{injector:this._injector,initialValue:null}),this._isAbstractControl(this.thisObjOrAbstractControl)&&this.init()}_isAbstractControl(r){return Wa(r)||qa(r)||$a(r)||za(r)||!!r&&typeof r=="object"&&"events"in r&&rn(r.events)}init(){if(this._isAbstractControl(this.thisObjOrAbstractControl))this.instance=this.thisObjOrAbstractControl;else{let r=this._injector.get(Ua,null);if(r){(this.options.attachValueAccessor??!0)&&(!r.valueAccessor||this.thisObjOrAbstractControl&&this.thisObjOrAbstractControl instanceof r.valueAccessor.constructor)&&(r.valueAccessor=this.thisObjOrAbstractControl);let e=r.control;if(!e)return;this.instance=e}}if(this.instance){let r=this.instance;this._eventsSub=r.events.subscribe(c=>{if(c instanceof Na){this._value$.next(c.value);return}if(c instanceof mn){this._touched$.next(c.touched);return}if(c instanceof ja){this._pristine$.next(c.pristine);return}if(c instanceof Ya){this._status$.next(c.status),this._errors$.next(c.source.errors);return}}),this._value$.next(r.value),this._touched$.next(r.touched),this._pristine$.next(r.pristine),this._status$.next(r.status),this._errors$.next(r.errors);let e=r.setValidators.bind(r);r.setValidators=(...c)=>{e(...c);let u=r._rawValidators;this._validators$.next(dt(u)?[u]:u)},Ho(r,"validator",()=>{let c=r._rawValidators;this._validators$.next(dt(c)?[c]:c)});let i=r.setAsyncValidators.bind(r);r.setAsyncValidators=(...c)=>{i(...c);let u=r._rawAsyncValidators;this._asyncValidators$.next(dt(u)?[u]:u)},Ho(r,"asyncValidator",()=>{let c=r._rawAsyncValidators;this._asyncValidators$.next(dt(c)?[c]:c)});let n=r._rawValidators;this._validators$.next(dt(n)?[n]:n);let l=r._rawAsyncValidators;this._asyncValidators$.next(dt(l)?[l]:l)}}destroy(){this._eventsSub?.unsubscribe()}};function jo(t,r){return new Ar(t,r)}function Ho(t,r,e){let i=t,n;for(;i&&!(n=Object.getOwnPropertyDescriptor(i,r));)i=Object.getPrototypeOf(i);if(!n||typeof n.set!="function")throw new Error(`No setter found for ${String(r)}`);let l=n.set,c=n.get;Object.defineProperty(t,r,{configurable:!0,enumerable:n.enumerable??!0,get:c?function(){return c.call(this)}:void 0,set:function(u){l.call(this,u),e()}})}function Ir(t,r=","){return Array.isArray(t)?t.map(e=>String(e).trim()).filter(e=>e.length):t==null||t===""?[]:String(t).split(r).map(e=>e.trim()).filter(e=>e.length)}var bu=Pi(Wo(),1),Rn=Pi(qo(),1);var yt=Pi(Qo(),1);var eu=[{keys:["tab"],result:"Tab \u21B9"},{keys:["enter"],result:"\u21B5 Enter"},{keys:["space"],result:["\u23B5","Space"]},{keys:["home"],result:"Home"},{keys:["end"],result:"End"},{keys:["minus"],result:["-","Minus"]},{keys:["equal"],result:["=","Equal"]},{keys:["bracketleft"],result:["[","Left Bracket"]},{keys:["bracketright"],result:["]","Right Bracket"]},{keys:["backslash"],result:["\\","Backslash"]},{keys:["semicolon"],result:[";","Semicolon"]},{keys:["quote"],result:["'","Quote"]},{keys:["comma"],result:[",","Comma"]},{keys:["period"],result:[".","Period"]},{keys:["slash"],result:["/","Slash"]},{keys:["backquote"],result:["`","Backquote"]},{keys:["arrowleft","left"],result:["\u2190","\u2190 Left"]},{keys:["arrowright","right"],result:["\u2192","\u2192 Right"]},{keys:["arrowup","up"],result:["\u2191","\u2191 Up"]},{keys:["arrowdown","down"],result:["\u2193","\u2193 Down"]},{keys:["capslock","caps"],result:"Caps Lock"},{keys:["numlock","num"],result:"Num Lock"},{keys:["shift","leftshift","shiftleft"],result:"Shift"},{keys:["shift","rightshift","shiftright"],result:"Right Shift"},{keys:["ctrl","control","leftctrl","ctrlleft","leftcontrol","controlleft"],result:["Ctrl","Control"]},{keys:["ctrl","control","rightctrl","ctrlright","rightcontrol","controlright"],result:["Right Ctrl","Right Control"]},{keys:["cmd","command"],result:["Cmd","Command"]},{keys:["option","opt"],result:["Opt","Option"]},{keys:["alt","leftalt","altleft"],result:"Alt"},{keys:["altgraph","altgr","rightalt","altright"],result:["Alt Gr","Alt Graph"]},{keys:["escape","esc"],result:["Esc","Escape"]},{keys:["insert","ins"],result:["Ins","Insert"]},{keys:["delete","del"],result:["Del","Delete"]},{keys:["windows","win","leftmeta","metaleft"],result:["\u229E Win","\u229E Windows"]},{keys:["menu","contextmenu"],result:"\u25A4 Menu"},{keys:["backspace","back","bcksp"],result:["Bcksp","Backspace"]},{keys:["printscreen","printsc","prtsc"],result:["Prt Sc","Print Screen"]},{keys:["numpaddivide","divide"],result:["Numpad /","Divide"]},{keys:["numpadmultiply","multiply"],result:["Numpad *","Multiply"]},{keys:["numpadadd","add"],result:["Numpad +","Add"]},{keys:["numpadsubstract","substract"],result:["Numpad -","Substract"]},{keys:["numpaddecimal","decimal"],result:["Numpad .","Decimal"]},{keys:["numpadenter"],result:"\u21B5 Numpad Enter"},{keys:["audiovolumemute","audiomute","volumemute","mute"],result:["Vol. Mute","Audio Volume Mute"]},{keys:["audiovolumedown","volumedown"],result:["Vol. Down","Audio Volume Down"]},{keys:["audiovolumeup","volumeup"],result:["Vol. Up","Audio Volume Up"]},{keys:["pagedown","pgdown"],result:["Pg Down","Page Down"]},{keys:["pageup","pgup"],result:["Pg Up","Page Up"]}],tu=eu.reduce((t,r)=>{for(let e of r.keys)t[e]=r.result;return t},{}),iu="abcdefghijklmnopqrstuvwxyz".split("").reduce((t,r)=>(t[`key${r}`]=r.toUpperCase(),t),{}),Hr={};for(let t=0;t<10;t++){let r=t.toString();Hr[`digit${r}`]=r,Hr[`numpad${r}`]=`Numpad ${r}`}var Go={};for(let t=1;t<=12;t++){let r=t.toString();Go[`f${r}`]=r}var Ur=Object.assign(Object.assign(Object.assign(Object.assign({},tu),iu),Hr),Go);function Xo(t,r=!0){let e=t.toLowerCase();if(Ur[e]){let i=Ur[e];return typeof i=="string"?i:r?i[0]:i[1]}if(e.match(/^.+(left|right)$/)){let i=t.match(/right|left/i)[0].toLowerCase();i=i[0].toUpperCase()+i.substring(1);let n=t.replace(/right|left/i,"");t=i+n}return t.replace(/([A-Z])/g," $1").replace(/\s\s+/g," ").trim()}var Zo=new Set,Jt,nu=(()=>{class t{constructor(e,i){this._platform=e,this._nonce=i,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):au}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&ru(e,this._nonce),this._matchMedia(e)}static{this.\u0275fac=function(i){return new(i||t)(U(qe),U(Da,8))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function ru(t,r){if(!Zo.has(t))try{Jt||(Jt=document.createElement("style"),r&&Jt.setAttribute("nonce",r),Jt.setAttribute("type","text/css"),document.head.appendChild(Jt)),Jt.sheet&&(Jt.sheet.insertRule(`@media ${t} {body{ }}`,0),Zo.add(t))}catch(e){console.error(e)}}function au(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var es=(()=>{class t{constructor(e,i){this._mediaMatcher=e,this._zone=i,this._queries=new Map,this._destroySubject=new Ue}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Jo(vi(e)).some(n=>this._registerQuery(n).mql.matches)}observe(e){let n=Jo(vi(e)).map(c=>this._registerQuery(c).observable),l=fa(n);return l=ga(l.pipe(Ca(1)),l.pipe(xa(1),rr(0))),l.pipe(Re(c=>{let u={matches:!1,breakpoints:{}};return c.forEach(({matches:x,query:O})=>{u.matches=u.matches||x,u.breakpoints[O]=x}),u}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),l={observable:new nn(c=>{let u=x=>this._zone.run(()=>c.next(x));return i.addListener(u),()=>{i.removeListener(u)}}).pipe(ai(i),Re(({matches:c})=>({query:e,matches:c})),oi(this._destroySubject)),mql:i};return this._queries.set(e,l),l}static{this.\u0275fac=function(i){return new(i||t)(U(nu),U(Xe))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Jo(t){return t.map(r=>r.split(",")).reduce((r,e)=>r.concat(e)).map(r=>r.trim())}var ou=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var ts=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({providers:[ou]})}}return t})();var su=(()=>{class t{constructor(e){this._platform=e}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return du(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=lu(_u(e));if(i&&(is(i)===-1||!this.isVisible(i)))return!1;let n=e.nodeName.toLowerCase(),l=is(e);return e.hasAttribute("contenteditable")?l!==-1:n==="iframe"||n==="object"||this._platform.WEBKIT&&this._platform.IOS&&!fu(e)?!1:n==="audio"?e.hasAttribute("controls")?l!==-1:!1:n==="video"?l===-1?!1:l!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return gu(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static{this.\u0275fac=function(i){return new(i||t)(U(qe))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function lu(t){try{return t.frameElement}catch{return null}}function du(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function cu(t){let r=t.nodeName.toLowerCase();return r==="input"||r==="select"||r==="button"||r==="textarea"}function uu(t){return mu(t)&&t.type=="hidden"}function pu(t){return hu(t)&&t.hasAttribute("href")}function mu(t){return t.nodeName.toLowerCase()=="input"}function hu(t){return t.nodeName.toLowerCase()=="a"}function as(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let r=t.getAttribute("tabindex");return!!(r&&!isNaN(parseInt(r,10)))}function is(t){if(!as(t))return null;let r=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(r)?-1:r}function fu(t){let r=t.nodeName.toLowerCase(),e=r==="input"&&t.type;return e==="text"||e==="password"||r==="select"||r==="textarea"}function gu(t){return uu(t)?!1:cu(t)||pu(t)||t.hasAttribute("contenteditable")||as(t)}function _u(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var jr=class{get enabled(){return this._enabled}set enabled(r){this._enabled=r,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}constructor(r,e,i,n,l=!1,c){this._element=r,this._checker=e,this._ngZone=i,this._document=n,this._injector=c,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,l||this.attachAnchors()}destroy(){let r=this._startAnchor,e=this._endAnchor;r&&(r.removeEventListener("focus",this.startAnchorListener),r.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(r)))})}focusFirstTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(r)))})}focusLastTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(r)))})}_getRegionBoundary(r){let e=this._element.querySelectorAll(`[cdk-focus-region-${r}], [cdkFocusRegion${r}], [cdk-focus-${r}]`);return r=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(r){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(r),!!i}return e.focus(r),!0}return this.focusFirstTabbableElement(r)}focusFirstTabbableElement(r){let e=this._getRegionBoundary("start");return e&&e.focus(r),!!e}focusLastTabbableElement(r){let e=this._getRegionBoundary("end");return e&&e.focus(r),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let i=0;i<e.length;i++){let n=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(n)return n}return null}_getLastTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let i=e.length-1;i>=0;i--){let n=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(n)return n}return null}_createAnchor(){let r=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,r),r.classList.add("cdk-visually-hidden"),r.classList.add("cdk-focus-trap-anchor"),r.setAttribute("aria-hidden","true"),r}_toggleAnchorTabIndex(r,e){r?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(r){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_executeOnStable(r){this._injector?sn(r,{injector:this._injector}):setTimeout(r)}},vu=(()=>{class t{constructor(e,i,n){this._checker=e,this._ngZone=i,this._injector=I(St),this._document=n}create(e,i=!1){return new jr(e,this._checker,this._ngZone,this._document,i,this._injector)}static{this.\u0275fac=function(i){return new(i||t)(U(su),U(Xe),U(De))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),os=(()=>{class t{get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}constructor(e,i,n){this._elementRef=e,this._focusTrapFactory=i,this._previouslyFocusedElement=null,I(qe).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let i=e.autoCapture;i&&!i.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=To(),this.focusTrap?.focusInitialElementWhenReady()}static{this.\u0275fac=function(i){return new(i||t)(te(ye),te(vu),te(De))}}static{this.\u0275dir=Q({type:t,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",ci],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",ci]},exportAs:["cdkTrapFocus"],features:[Qt,Tt]})}}return t})();var ei=function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t}(ei||{}),ns="cdk-high-contrast-black-on-white",rs="cdk-high-contrast-white-on-black",Nr="cdk-high-contrast-active",yu=(()=>{class t{constructor(e,i){this._platform=e,this._document=i,this._breakpointSubscription=I(es).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return ei.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let i=this._document.defaultView||window,n=i&&i.getComputedStyle?i.getComputedStyle(e):null,l=(n&&n.backgroundColor||"").replace(/ /g,"");switch(e.remove(),l){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return ei.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return ei.BLACK_ON_WHITE}return ei.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Nr,ns,rs),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===ei.BLACK_ON_WHITE?e.add(Nr,ns):i===ei.WHITE_ON_BLACK&&e.add(Nr,rs)}}static{this.\u0275fac=function(i){return new(i||t)(U(qe),U(De))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),ss=(()=>{class t{constructor(e){e._applyBodyHighContrastModeCssClasses()}static{this.\u0275fac=function(i){return new(i||t)(U(yu))}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ts]})}}return t})();var xu=["focusableElement"],xs=["textInput"],He=["*"];function wu(t,r){}function Tu(t,r){if(t&1&&(o(0,"div",2),g(1,wu,0,0,"ng-template",5),a()),t&2){let e,i=f();d(),h("ngTemplateOutlet",(e=(e=i.prefixTemplateInput())!==null&&e!==void 0?e:(e=i.prefixTemplate())==null?null:e.template)!==null&&e!==void 0?e:null)}}function Su(t,r){}function Du(t,r){if(t&1&&(o(0,"div",4),g(1,Su,0,0,"ng-template",5),a()),t&2){let e,i=f();d(),h("ngTemplateOutlet",(e=(e=i.suffixTemplateInput())!==null&&e!==void 0?e:(e=i.suffixTemplate())==null?null:e.template)!==null&&e!==void 0?e:null)}}function Eu(t,r){if(t&1&&(o(0,"div",8),s(1),a()),t&2){let e=f(2);d(),v(e.placeholder())}}function Au(t,r){}function Fu(t,r){if(t&1&&g(0,Eu,2,1,"ng-template",null,1,oe)(2,Au,0,0,"ng-template",7),t&2){let e,i=V(1),n=f();d(2),h("ngTemplateOutlet",((e=n.placeholderTemplate())==null?null:e.template)||i)}}function Iu(t,r){if(t&1){let e=j();o(0,"ard-clear-button",9),_("click",function(n){T(e);let l=f();return S(l.onClearButtonClick(n))}),a()}if(t&2){let e=f();h("title",e.clearButtonTitle())}}var Zr=["contentWrapperEl"];function Mu(t,r){if(t&1){let e=j();o(0,"ard-button",10),_("click",function(n){T(e);let l=f();return S(l.canDecrement()&&l.onQuickChangeButtonClick(-1,n))})("mouseup",function(n){T(e);let l=f();return S(l.onQuickChangeButtonMouseup(n))})("ardHold",function(){T(e);let n=f();return S(n.canDecrement()&&n.onQuickChangeButtonClick(-1))}),s(1," - "),a()}if(t&2){let e=f();h("variant",e.buttonVariant())("appearance",e.buttonAppearance())("disabled",!e.canDecrement())("tabIndex",!e.canDecrement()||e.readonly()?-1:e.tabIndex())}}function ku(t,r){}function Pu(t,r){if(t&1&&(o(0,"div",5),g(1,ku,0,0,"ng-template",11),a()),t&2){let e,i=f();d(),h("ngTemplateOutlet",(e=(e=i.prefixTemplate())==null?null:e.template)!==null&&e!==void 0?e:null)}}function Vu(t,r){if(t&1&&(o(0,"div",12),s(1),a()),t&2){let e=f(2);d(),v(e.placeholder())}}function Ru(t,r){}function Ou(t,r){if(t&1&&g(0,Vu,2,1,"ng-template",null,1,oe)(2,Ru,0,0,"ng-template",11),t&2){let e,i=V(1),n=f();d(2),h("ngTemplateOutlet",((e=n.placeholderTemplate())==null?null:e.template)||i)}}function Lu(t,r){}function Bu(t,r){if(t&1&&(o(0,"div",8),g(1,Lu,0,0,"ng-template",11),a()),t&2){let e,i=f();d(),h("ngTemplateOutlet",(e=(e=i.suffixTemplate())==null?null:e.template)!==null&&e!==void 0?e:null)}}function Hu(t,r){if(t&1){let e=j();o(0,"ard-button",13),_("click",function(n){T(e);let l=f();return S(l.canIncrement()&&l.onQuickChangeButtonClick(1,n))})("mouseup",function(n){T(e);let l=f();return S(l.onQuickChangeButtonMouseup(n))})("ardHold",function(){T(e);let n=f();return S(n.canIncrement()&&n.onQuickChangeButtonClick(1))}),s(1," + "),a()}if(t&2){let e=f();h("variant",e.buttonVariant())("appearance",e.buttonAppearance())("disabled",!e.canIncrement())("tabIndex",!e.canIncrement()||e.readonly()?-1:e.tabIndex())}}function Uu(t,r){if(t&1&&C(0,"ard-icon",5),t&2){let e=r.state,i=f();h("icon",e===i.State.Selected?"check_box":e===i.State.Unselected?"check_box_outline_blank":"indeterminate_check_box")("filled",e!==i.State.Indeterminate)}}function Nu(t,r){}var ju=["track"],ws=t=>({"--_ard-slider-transition":t}),Yu=(t,r)=>({left:t,width:r}),Ct=t=>({left:t});function $u(t,r){if(t&1&&C(0,"div",16),t&2){let e=r.$implicit;Se(Ce(2,Ct,e))}}function zu(t,r){if(t&1&&(o(0,"div",10),B(1,$u,1,4,"div",15,Et),a()),t&2){let e=f();d(),H(e._tickArray())}}function Wu(t,r){if(t&1&&(o(0,"div",19),s(1),a()),t&2){let e=r.$implicit;d(),v(e)}}function Ku(t,r){}function qu(t,r){if(t&1&&(o(0,"div",17),g(1,Wu,2,1,"ng-template",null,3,oe)(3,Ku,0,0,"ng-template",18),a()),t&2){let e,i=V(2),n=f();Se(Ce(6,Ct,n.handlePositionsPercent()[0])),ie("ard-tooltip-always",n.tooltipBehavior()==="always"),d(3),h("ngTemplateOutlet",((e=n.tooltipTemplate())==null?null:e.template)||i)("ngTemplateOutletContext",n.tooltipContexts().from)}}function Qu(t,r){if(t&1&&(o(0,"div",19),s(1),a()),t&2){let e=r.$implicit;d(),v(e)}}function Gu(t,r){}function Xu(t,r){if(t&1&&(o(0,"div",17),g(1,Qu,2,1,"ng-template",null,3,oe)(3,Gu,0,0,"ng-template",18),a()),t&2){let e,i=V(2),n=f();Se(Ce(6,Ct,n.handlePositionsPercent()[1])),ie("ard-tooltip-always",n.tooltipBehavior()==="always"),d(3),h("ngTemplateOutlet",((e=n.tooltipTemplate())==null?null:e.template)||i)("ngTemplateOutletContext",n.tooltipContexts().to)}}function Zu(t,r){if(t&1&&(o(0,"div",21),s(1),a()),t&2){let e=r.$implicit;Se(Ce(3,Ct,e.positionPercent)),d(),A(" ",e.label," ")}}function Ju(t,r){if(t&1&&(o(0,"div",14),B(1,Zu,2,5,"div",20,G),a()),t&2){let e=f();d(),H(e.labelObjects())}}function ep(t,r){t&1&&C(0,"div",22)}var tp=t=>({width:t});function ip(t,r){if(t&1&&C(0,"div",15),t&2){let e=r.$implicit;Se(Ce(2,Ct,e))}}function np(t,r){if(t&1&&(o(0,"div",9),B(1,ip,1,4,"div",14,Et),a()),t&2){let e=f();d(),H(e._tickArray())}}function rp(t,r){if(t&1&&(o(0,"div",18),s(1),a()),t&2){let e=r.$implicit;d(),v(e)}}function ap(t,r){}function op(t,r){if(t&1&&(o(0,"div",16),g(1,rp,2,1,"ng-template",null,2,oe)(3,ap,0,0,"ng-template",17),a()),t&2){let e,i=V(2),n=f();Se(Ce(6,Ct,n.handlePositionsPercent()[0])),ie("ard-tooltip-always",n.tooltipBehavior()==="always"),d(3),h("ngTemplateOutlet",((e=n.tooltipTemplate())==null?null:e.template)||i)("ngTemplateOutletContext",n.tooltipContext())}}function sp(t,r){if(t&1&&(o(0,"div",20),s(1),a()),t&2){let e=r.$implicit;Se(Ce(3,Ct,e.positionPercent)),d(),A(" ",e.label," ")}}function lp(t,r){if(t&1&&(o(0,"div",13),B(1,sp,2,5,"div",19,G),a()),t&2){let e=f();d(),H(e.labelObjects())}}function dp(t,r){if(t&1&&(o(0,"ard-error"),s(1),a()),t&2){let e=r.$implicit;d(),v(e)}}function cp(t,r){if(t&1&&s(0),t&2){let e=f();A(" ",e.requiredText()," ")}}function up(t,r){if(t&1&&s(0),t&2){let e=f();A(" ",e.optionalText()," ")}}var pp=[[["ard-label"],["","ard-label",""]],"*",[["ard-error","left",""],["","ard-error","","left",""],["ard-auto-error","left",""]],[["ard-error","right",""],["","ard-error","","right",""],["ard-auto-error","right",""]],[["ard-hint","left",""],["","ard-hint","","left",""]],[["ard-hint","right",""],["","ard-hint","","right",""]],[["ard-hint",3,"left","",3,"right",""],["","ard-hint","",3,"left","",3,"right",""]],[["ard-error",3,"left","",3,"right",""],["","ard-error","",3,"left","",3,"right",""]],[["ard-auto-error",3,"left","",3,"right",""]],[["ard-hint-error",3,"left","",3,"right",""],["","ard-hint-error","",3,"left","",3,"right",""]],[["ard-hint-error","left",""],["","ard-hint-error","","left",""]],[["ard-hint-error","right",""],["","ard-hint-error","","right",""]]],mp=["ard-label, [ard-label]","*","ard-error[left], [ard-error][left], ard-auto-error[left]","ard-error[right], [ard-error][right], ard-auto-error[right]","ard-hint[left], [ard-hint][left]","ard-hint[right], [ard-hint][right]","ard-hint:not([left]):not([right]), [ard-hint]:not([left]):not([right])","ard-error:not([left]):not([right]), [ard-error]:not([left]):not([right])","ard-auto-error:not([left]):not([right])","ard-hint-error:not([left]):not([right]), [ard-hint-error]:not([left]):not([right])","ard-hint-error[left], [ard-hint-error][left]","ard-hint-error[right], [ard-hint-error][right]"];function hp(t,r){}function fp(t,r){}function gp(t,r){}function _p(t,r){if(t&1&&(o(0,"div",11),g(1,hp,0,0,"ng-template",12)(2,fp,0,0,"ng-template",12)(3,gp,0,0,"ng-template",12),a()),t&2){f(2);let e=V(11),i=V(13),n=V(15);d(),h("ngTemplateOutlet",i),d(),h("ngTemplateOutlet",e),d(),h("ngTemplateOutlet",n)}}function vp(t,r){}function yp(t,r){}function Cp(t,r){}function bp(t,r){}function xp(t,r){if(t&1&&(o(0,"div",11),g(1,yp,0,0,"ng-template",12)(2,Cp,0,0,"ng-template",12)(3,bp,0,0,"ng-template",12),a()),t&2){f(2);let e=V(11),i=V(13),n=V(15);d(),h("ngTemplateOutlet",i),d(),h("ngTemplateOutlet",e),d(),h("ngTemplateOutlet",n)}}function wp(t,r){}function Tp(t,r){if(t&1&&(o(0,"div",10),g(1,_p,4,3,"div",11),L(2,2),g(3,vp,0,0,"ng-template",12),a(),o(4,"div",13),g(5,xp,4,3,"div",11),L(6,3),g(7,wp,0,0,"ng-template",12),a()),t&2){let e=f(),i=V(17),n=V(19);d(),y(e.alignHintToLeftByDefault()?1:-1),d(2),h("ngTemplateOutlet",i),d(2),y(e.alignHintToLeftByDefault()?-1:5),d(2),h("ngTemplateOutlet",n)}}function Sp(t,r){}function Dp(t,r){}function Ep(t,r){if(t&1&&(o(0,"div",15),g(1,Sp,0,0,"ng-template",12)(2,Dp,0,0,"ng-template",12),a()),t&2){f(2);let e=V(9),i=V(15);d(),h("ngTemplateOutlet",e),d(),h("ngTemplateOutlet",i)}}function Ap(t,r){}function Fp(t,r){}function Ip(t,r){}function Mp(t,r){if(t&1&&(o(0,"div",15),g(1,Fp,0,0,"ng-template",12)(2,Ip,0,0,"ng-template",12),a()),t&2){f(2);let e=V(9),i=V(15);d(),h("ngTemplateOutlet",e),d(),h("ngTemplateOutlet",i)}}function kp(t,r){}function Pp(t,r){if(t&1&&(o(0,"div",14),g(1,Ep,3,2,"div",15),L(2,4),g(3,Ap,0,0,"ng-template",12),a(),o(4,"div",16),g(5,Mp,3,2,"div",15),L(6,5),g(7,kp,0,0,"ng-template",12),a()),t&2){let e=f(),i=V(17),n=V(19);d(),y(e.alignHintToLeftByDefault()?1:-1),d(2),h("ngTemplateOutlet",i),d(2),y(e.alignHintToLeftByDefault()?-1:5),d(2),h("ngTemplateOutlet",n)}}function Vp(t,r){t&1&&L(0,6)}function Rp(t,r){t&1&&L(0,7)}function Op(t,r){t&1&&L(0,8)}function Lp(t,r){t&1&&L(0,9)}function Bp(t,r){t&1&&L(0,10)}function Hp(t,r){t&1&&L(0,11)}function Up(t,r){t&1&&(o(0,"span"),s(1,"+"),a())}function Np(t,r){if(t&1&&(g(0,Up,2,0,"span"),C(1,"ard-kbd",3)),t&2){let e=r.$implicit,i=r.$index,n=f();y(i!==0?0:-1),d(),h("appearance",n.appearance())("full",n.full())("key",e)}}var jp=t=>({"--ard-_tabber-tabs":t});function Yp(t,r){if(t&1&&s(0),t&2){let e=r.$implicit;A(" ",e," ")}}function $p(t,r){}function zp(t,r){if(t&1){let e=j();o(0,"button",6,0),_("click",function(){let n=T(e).$implicit,l=f();return S(l.selectTab(n.tab))})("focus",function(){let n=T(e).$implicit,l=f();return S(l.onTabFocus(n.tab))})("blur",function(){let n=T(e).$implicit,l=f();return S(l.onTabBlur(n.tab))}),C(2,"div",7),o(3,"div",8),g(4,Yp,1,1,"ng-template",null,1,oe)(6,$p,0,0,"ng-template",9),a()()}if(t&2){let e,i=r.$implicit,n=V(5),l=f();ie("ard-tab-disabled",i.tab.disabled())("ard-tab-with-pointer-events-when-disabled",i.tab.pointerEventsWhenDisabled())("ard-tab-active",i.tab.tabId()===l.selectedTabId())("ard-tab-focused",i.tab.tabId()===l.focusedTabId()),h("id",i.tab.tabId())("title",i.tab.tabTitle())("tabindex",i.tab.disabled()?-1:l.tabIndex()),d(6),h("ngTemplateOutlet",(e=(e=i.template)!==null&&e!==void 0?e:(e=l.labelTemplate())==null?null:e.template)!==null&&e!==void 0?e:n)("ngTemplateOutletContext",i.templateContext)}}var Wp=["modalTemplate"],Ts=(t,r)=>[t,r];function Kp(t,r){}function qp(t,r){if(t&1){let e=j();o(0,"div",5),_("click",function(){T(e);let n=f(2);return S(n.onBackdropClick())}),g(1,Kp,0,0,"ng-template",6),a()}if(t&2){let e=f(2),i=V(3);h("ngClass",Ae(2,Ts,e.ngClasses(),e.backdropClass())),d(),h("ngTemplateOutlet",i)}}function Qp(t,r){}function Gp(t,r){if(t&1){let e=j();o(0,"div",7),_("click",function(){T(e);let n=f(2);return S(n.onBackdropClick())}),g(1,Qp,0,0,"ng-template",6),a()}if(t&2){let e=f(2),i=V(3);h("ngClass",Ae(2,Ts,e.ngClasses(),e.backdropClass())),d(),h("ngTemplateOutlet",i)}}function Xp(t,r){if(t&1&&g(0,qp,2,5,"div",3)(1,Gp,2,5,"div",4),t&2){let e=f();y(e.noBackdrop()?0:1)}}function Zp(t,r){t&1&&(o(0,"ard-icon"),s(1,"close"),a())}function Jp(t,r){}function em(t,r){if(t&1){let e=j();o(0,"ard-icon-button",13),_("click",function(){T(e);let n=f(2);return S(n.onCloseButtonClick())}),g(1,Zp,2,0,"ng-template",null,2,oe)(3,Jp,0,0,"ng-template",6),a()}if(t&2){let e,i=V(2),n=f(2);h("compact",n.compact())("disabled",n.allActionsDisabled()),d(3),h("ngTemplateOutlet",(e=(e=(e=n.closeIconTemplate())==null?null:e.template)!==null&&e!==void 0?e:(e=n._closeIconTemplate())==null?null:e.template)!==null&&e!==void 0?e:i)}}function tm(t,r){if(t&1){let e=j();o(0,"div",8),_("click",function(n){return T(e),S(n.stopPropagation())}),o(1,"div",9)(2,"div",10),s(3),a(),g(4,em,4,3,"ard-icon-button",11),a(),o(5,"div",12),L(6),a()()}if(t&2){let e=f();ie("ard-modal-no-heading-text",!e.heading())("ard-modal-has-close-button",!e.noCloseButton()),h("ngClass",e.panelClass()),d(3),v(e.heading()||(e.noCloseButton()?"":"\xA0")),d(),y(e.noCloseButton()?-1:4)}}function im(t,r){if(t&1){let e=j();o(0,"ard-button",9),_("click",function(){T(e);let n=f().onReject;return S(n())}),s(1),a()}if(t&2){let e=f(),i=e.rejectButton,n=e.allActionsDisabled,l=e.dialogVariant,c=e.dialogCompact;h("color",i.color)("appearance",i.appearance)("variant",l)("compact",c)("disabled",n),d(),A(" ",i.text," ")}}function nm(t,r){if(t&1){let e=j();o(0,"div",6),g(1,im,2,6,"ard-button",7),o(2,"ard-button",8),_("click",function(){let n=T(e).onConfirm;return S(n())}),s(3),a()()}if(t&2){let e=r.confirmButton,i=r.rejectButton,n=r.canConfirm,l=r.allActionsDisabled,c=r.dialogVariant,u=r.dialogCompact;d(),y(i.enabled?1:-1),d(),h("color",e.color)("appearance",e.appearance)("variant",c)("compact",u)("disabled",!n||l)("pointerEventsWhenDisabled",e.pointerEventsWhenDisabled),d(),A(" ",e.text," ")}}function rm(t,r){}var Ss={Outlined:"outlined",Raised:"raised"},Ds={Rounded:"rounded",Sharp:"sharp",SharpConnected:"sharp ard-connected"},Ki=new R("ard-form-field-control");var am={Outlined:"outlined"},om={Raised:"raised"},je=$(w({},am),{Transparent:"transparent",Filled:"filled"}),sm={Outlined:"outlined",OutlinedStrong:"outlined-strong",Filled:"filled",FilledStrong:"filled-strong"};var Es={Rounded:"rounded",Sharp:"sharp"},Be=$(w({},Es),{Pill:"pill"}),As={readonly:!1,disabled:!1},lm=(()=>{class t{constructor(e){this._DEFAULTS=e;this.readonly=E(this._DEFAULTS.readonly),this.disabled=E(this._DEFAULTS.disabled)}set _readonly(e){this.readonly.set(M(e))}set _disabled(e){this.disabled.set(M(e))}get _readonlyHostAttribute(){return this.readonly()}get _disabledHostAttribute(){return this.disabled()}static{this.\u0275fac=function(i){or()}}static{this.\u0275dir=Q({type:t,hostVars:6,hostBindings:function(i,n){i&2&&(Ze("readonly",n._readonlyHostAttribute)("disabled",n._disabledHostAttribute),ie("ard-readonly",n._readonlyHostAttribute)("ard-disabled",n._disabledHostAttribute))},inputs:{_readonly:[0,"readonly","_readonly"],_disabled:[0,"disabled","_disabled"]}})}}return t})(),Ht=$(w({},As),{tabIndex:0}),Qi=(()=>{class t extends lm{constructor(){super(...arguments);this.tabIndex=F(()=>this.disabled()?-1:this._tabIndex()),this._tabIndex=m(this._DEFAULTS.tabIndex,{alias:"tabIndex",transform:e=>Le(e,0)});this.focusEvent=ne({alias:"focus"}),this.blurEvent=ne({alias:"blur"});this.isFocused=E(!1)}focus(){this._focusableElement?.first?.nativeElement.focus()}focusFirst(){this.focus()}focusLast(){this._focusableElement?.last?.nativeElement.focus()}blur(){this._focusableElement?.forEach(e=>e.nativeElement.blur())}onFocus(e){this.isFocused.set(!0),this.focusEvent.emit(e)}onBlur(e){this.isFocused.set(!1),this.blurEvent.emit(e)}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=ot(t)))(n||t)}})()}static{this.\u0275dir=Q({type:t,viewQuery:function(i,n){if(i&1&&lr(xu,5),i&2){let l;dr(l=cr())&&(n._focusableElement=l)}},inputs:{_tabIndex:[1,"tabIndex","_tabIndex"]},outputs:{focusEvent:"focus",blurEvent:"blur"},features:[_e]})}}return t})(),On=w({},Ht),Jr=(()=>{class t extends Qi{constructor(){super(...arguments),this._shouldEmitTouched=!1;this.control=jo(this),this.htmlId=m(Rn.TakeChance.id()),this.htmlName=m(void 0),this._hasError=m(void 0,{transform:e=>M(e),alias:"hasError"}),this.hasError=F(()=>this._hasError()??(this.control.touched()&&this.control.invalid()))}registerOnTouched(e){this._onTouchedRegistered=e}registerOnChange(e){this._onChangeRegistered=e}setDisabledState(e){this.disabled.set(e)}onFocus(e){this._shouldEmitTouched=!1,super.onFocus(e)}onBlur(e){this._shouldEmitTouched=!0,super.onBlur(e),setTimeout(()=>{this._shouldEmitTouched&&this._emitTouched()},0)}_emitTouched(){this._onTouchedRegistered?.()}ngOnInit(){this.control.init()}ngOnDestroy(){this.control.destroy()}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=ot(t)))(n||t)}})()}static{this.\u0275dir=Q({type:t,inputs:{htmlId:[1,"htmlId"],htmlName:[1,"htmlName"],_hasError:[1,"hasError","_hasError"]},features:[_e]})}}return t})(),ut=$(w({},On),{required:void 0}),ea=(()=>{class t extends Jr{constructor(){super(...arguments),this._required=m(void 0,{transform:e=>M(e),alias:"required"}),this.required=F(()=>this._required()??!!(this.control.validators()?.includes(et.required)||this.control.validators()?.includes(et.requiredTrue))),this.isSuccess=m(!1,{transform:e=>M(e)})}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=ot(t)))(n||t)}})()}static{this.\u0275dir=Q({type:t,inputs:{_required:[1,"required","_required"],isSuccess:[1,"isSuccess"]},features:[_e]})}}return t})(),Ln={Left:"left",Right:"right"},Bn={Left:"left",Center:"center",Right:"right"},dm={Start:"start",Center:"center",End:"end"},Fn=class{constructor(r,e="",i=0){this.regex=r,this.replace=e,this.caretModif=i}apply(r,e,i){let n=r;if(n&&this.regex){let l=0;for(;n.match(this.regex);){if(l>999){console.error(this,new Error("Possible infinite loop in the above RegExpTransformer. Exited after 1000 iterations."));break}let c=n.length;n=n.replace(this.regex,this.replace);let u=n.length;i=i+(u-c),l++}}return{text:n,caretPos:i}}},cm=(t,r,e)=>({text:t.toUpperCase(),caretPos:e}),um=(t,r,e)=>({text:t.toLowerCase(),caretPos:e}),pm=(t,r,e)=>{let i=[[/[^0-9-]/],[/(.+)-/,"$1"]],n={text:t,caretPos:e};for(let l of i){let[c,u,x]=l;n=new Fn(c,u,x).apply(n.text,r,n.caretPos)}return n},mm=(t,r,e)=>{let i=[[/[^0-9.-]/],[/(.+)-/,"$1"],[/\.(.*)\./,"$1."],[/^(-?)\./,"$10."]],n={text:t,caretPos:e};for(let l of i){let[c,u,x]=l;n=new Fn(c,u,x).apply(n.text,r,n.caretPos)}return n},ls={ToUpper:cm,ToLower:um,Integer:pm,Float:mm},$r={AdjustOnInput:"adjust-on-input",AdjustOnBlur:"adjust-on-blur",Noop:"noop"},zr=class{constructor(r){this._ardHostCmp=r,this.value=E(null),this.stringValue=F(()=>this.value()??"")}writeValue(r){return!fn(r)&&!Ni(r)&&(console.warn(new Error(`ARD-WA0020: Trying to set <ard-input>'s value to "${r}" (of type ${typeof r}), expected string or null.`)),r=r?.toString?.()??String(r)),this._writeValue(r)}_writeValue(r){r=this._applyLengthTransformer(r);let e=this.value();return this.value.set(r),this._updateInputElement(),e!==r}rewriteValueAfterHostUpdate(){this._writeValue(this.value())}clear(){this.value.set(null),this._updateInputElement()}trim(){this.value.update(r=>r?.trim()??null),this._updateInputElement()}_updateInputElement(){let r=this._ardHostCmp.textInputEl()?.nativeElement;r&&(r.value=this.stringValue())}get caretPos(){return this._ardHostCmp.textInputEl()?.nativeElement.selectionEnd??this.stringValue.length}set caretPos(r){this._ardHostCmp.textInputEl()?.nativeElement.setSelectionRange(r,r)}_applyLengthTransformer(r){let e=this._ardHostCmp.maxLength();return!tt(e)||!r||r.length<=e||(r=r.substring(0,e),this.caretPos=e),r}};var Wr=class{constructor(r){this._ardHostCmp=r;this._value=E(null),this.value=this._value.asReadonly(),this.stringValue=F(()=>this._value()??""),this.numberValue=F(()=>this._value()===null?null:Number(this._value()))}setValue(r){let e=Vt(r)?String(r):r,i=this._ardHostCmp.decimalSeparator();e&&i&&i!=="."&&(e=e.split(i).join(".")),this._value.set(e),this._updateInputEl()}updateOnBlur(r){let e=this._value();Ni(e)||(e=this._applyStandardConstraints(e,r??this._ardHostCmp.minMaxBehavior()===$r.AdjustOnBlur),this._ardHostCmp.fixedDecimalPlaces()&&(e=this._fixDecimalPlaces(e)),this.setValue(Number(e)))}_fixDecimalPlaces(r){let e=this._ardHostCmp.maxDecimalPlaces();if(!tt(e)||e===1/0)return r;let i=Number(r);return isNaN(i)?r:i.toFixed(e)}_updateInputEl(){let r=this.stringValue(),e=this._ardHostCmp.decimalSeparator();e&&e!=="."&&(r=r.split(".").join(e));let i=this._ardHostCmp.inputEl()?.nativeElement;if(!i)return;let n=this.caretPos;i.value=r,this.caretPos=n}writeValue(r,e){return!Vt(r)&&!fn(r)&&!Ni(r)&&(console.warn(new Error(`ARD-WA0070: Trying to set <ard-number-input>'s value to "${typeof r}", expected string, number, or null.`)),r=r?.toString?.()??String(r)),r=r===null?null:String(r),this._writeValue(r,e)}_writeValue(r,e){e&&(r=this._applyStandardConstraints(r,this._ardHostCmp.minMaxBehavior()===$r.AdjustOnInput)),r===""&&(r=null);let i=this._value();return this.setValue(r),i!==r}rewriteValueAfterHostUpdate(){this._writeValue(this._value(),!1)}get caretPos(){return this._ardHostCmp.inputEl()?.nativeElement.selectionEnd??this.stringValue().length}set caretPos(r){this._ardHostCmp.inputEl()?.nativeElement?.setSelectionRange(r,r)}_applyStandardConstraints(r,e){return!r&&r!==0?"":(r=this._standardizeSeparator(r),r=this._removeDecimalPlaces(r),r=this._applyNumberConstraint(r),r=this._applyMaxDecimalPlaces(r),e&&(r=this._applyMinMaxConstraints(r)),r)}_standardizeSeparator(r){if(!r&&r!==0)return"";let e=this._ardHostCmp.decimalSeparator();return!e||e==="."?String(r):String(r).replaceAll(e,".")}_removeDecimalPlaces(r){return!r&&r!==0?"":this._ardHostCmp.allowFloat()?r:String(r).split(".")[0]}_applyNumberConstraint(r){if(!r&&r!==0)return"";let e=String(r),i=this.stringValue(),n=this._ardHostCmp.allowFloat()?ls.Float:ls.Integer,{text:l,caretPos:c}=n(e,i,this.caretPos);return this.caretPos=c,l}_applyMinMaxConstraints(r){if(!r)return"";let e=this._ardHostCmp.decimalSeparator(),i=r;e&&e!=="."&&(i=i.replaceAll(e,"."));let n=Number(i);return n>this._ardHostCmp.max()?this._ardHostCmp.max().toString():n<this._ardHostCmp.min()?this._ardHostCmp.min().toString():r}_applyMaxDecimalPlaces(r){if(!r&&r!==0)return"";let e=this._ardHostCmp.maxDecimalPlaces();if(!tt(e)||e===1/0)return String(r);if(e<=0)return this._removeDecimalPlaces(r).toString();let i=String(r),n=i.indexOf(".");if(n===-1)return i;let l=n+1+e;if(i.length<=l)return i;let c=i.substring(0,l);return this.caretPos>c.length&&(this.caretPos=c.length),c}};var Fs=$(w({},ut),{appearance:je.Outlined,variant:Be.Rounded,compact:!1,placeholder:"",alignText:Ln.Left,clearable:!1,clearButtonTitle:"Clear",inputAttrs:{},maxLength:void 0,autoTrim:!1,type:"text"}),hm=(()=>{class t extends ea{constructor(){super(...arguments);this.textInputEl=Me("textInput"),this.inputModel=new zr(this),this._wasViewInit=!1,this.placeholder=m(this._DEFAULTS.placeholder),this.clearButtonTitle=m(this._DEFAULTS.clearButtonTitle),this.shouldDisplayPlaceholder=F(()=>!!this.placeholder()&&!this.inputModel.value());this.appearance=m(this._DEFAULTS.appearance),this.variant=m(this._DEFAULTS.variant),this.alignText=m(this._DEFAULTS.alignText),this.compact=m(this._DEFAULTS.compact,{transform:e=>M(e)}),this.ngClasses=F(()=>[`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`,`ard-text-align-${this.alignText()}`,this.compact()?"ard-compact":"",this.clearable()?"ard-clearable":""].join(" "));this.type=m(this._DEFAULTS.type),this.inputAttrs=m(this._DEFAULTS.inputAttrs);this.maxLength=m(this._DEFAULTS.maxLength,{transform:e=>Le(e,this._DEFAULTS.maxLength)}),this.maxLengthAsInt=F(()=>this.maxLength()??2147483647);this.clearable=m(this._DEFAULTS.clearable,{transform:e=>M(e)}),this.autoTrim=m(this._DEFAULTS.autoTrim,{transform:e=>M(e)});this._valueBeforeInit=null,this.valueChange=ne();this.inputEvent=ne({alias:"input"}),this.changeEvent=ne({alias:"change"}),this.clearEvent=ne({alias:"clear"}),this.shouldShowClearButton=F(()=>this.clearable()&&!this.disabled()&&!this.readonly()&&!!this.inputModel.value())}ngAfterViewInit(){this._wasViewInit=!0,this._setInputAttributes(),this._valueBeforeInit&&(this.writeValue(this._valueBeforeInit),delete this._valueBeforeInit)}writeValue(e){this.inputModel.writeValue(e)}set value(e){if(!this._wasViewInit){this._valueBeforeInit=e;return}this.writeValue(e)}get value(){return this.inputModel.value()}onInput(e){this.disabled()||this.readonly()||!this.inputModel.writeValue(e)||this._emitInput()}_emitInput(){this._onChangeRegistered?.(this.value),this.inputEvent.emit(this.value),this.valueChange.emit(this.value)}onFocusMaster(e){this.disabled()||this.readonly()||this.onFocus(e)}onBlurMaster(e){this.disabled()||this.readonly()||(this.onBlur(e),this.autoTrim()&&(this.inputModel.trim(),this._emitChange(),this._emitInput()))}onChange(e){e.stopPropagation(),this._emitChange()}_emitChange(){this.changeEvent.emit(this.inputModel.value())}onClearButtonClick(e){this.disabled()||this.readonly()||(e.stopPropagation(),this.inputModel.clear(),this._emitChange(),this._emitInput(),this.clearEvent.emit(e),this.focus())}onCopy(e){this.value&&(this.textInputEl()?.nativeElement.selectionStart===0&&this.textInputEl()?.nativeElement.selectionEnd===this.textInputEl()?.nativeElement.value.length||this.textInputEl()?.nativeElement.selectionStart===this.textInputEl()?.nativeElement.selectionEnd)&&(e.clipboardData?.setData("text/plain",this.value),e.preventDefault())}_setInputAttributes(){let e=this.textInputEl().nativeElement,i=w({autocorrect:"off",autocapitalize:"off",autocomplete:"off",tabindex:String(this.tabIndex()),type:this.type()},this.inputAttrs());for(let n of Object.keys(i))e.setAttribute(n,String(i[n]))}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=ot(t)))(n||t)}})()}static{this.\u0275dir=Q({type:t,viewQuery:function(i,n){i&1&&ke(n.textInputEl,xs,5),i&2&&ue()},inputs:{placeholder:[1,"placeholder"],clearButtonTitle:[1,"clearButtonTitle"],appearance:[1,"appearance"],variant:[1,"variant"],alignText:[1,"alignText"],compact:[1,"compact"],type:[1,"type"],inputAttrs:[1,"inputAttrs"],maxLength:[1,"maxLength"],clearable:[1,"clearable"],autoTrim:[1,"autoTrim"],value:"value"},outputs:{valueChange:"valueChange",inputEvent:"input",changeEvent:"change",clearEvent:"clear"},features:[_e]})}}return t})(),fm=$(w({},Fs),{suggValueFrom:"value",suggLabelFrom:"label",suggestionsLoadingText:"Loading...",charlist:void 0,charlistCaseInsensitive:!1,dropdownAppearance:void 0,dropdownVariant:void 0}),zb=new R("ard-autocomplete-input-defaults",{factory:()=>w({},fm)});var gm=$(w({},Ht),{appearance:je.Outlined,variant:Be.Rounded,compact:!1}),_m=new R("ard-form-field-frame-defaults",{factory:()=>w({},gm)});var ds=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(te(xe))}}static{this.\u0275dir=Q({type:t,selectors:[["ng-template","ard-prefix-tmp",""]],standalone:!1})}}return t})(),cs=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(te(xe))}}static{this.\u0275dir=Q({type:t,selectors:[["ng-template","ard-suffix-tmp",""]],standalone:!1})}}return t})(),vm=(()=>{class t extends Qi{constructor(e){super(e),this.hasError=m(!1,{transform:i=>M(i)}),this.isSuccess=m(!1,{transform:i=>M(i)});this.appearance=m(je.Outlined),this.variant=m(Be.Rounded),this.compact=m(!1,{transform:i=>M(i)}),this._enableTransitions=Pe(new Ue().asObservable().pipe(ai(!0),ba(0))),this.ngClasses=F(()=>[`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`,this.compact()?"ard-compact":"",this.hasError()?"ard-has-error":"",this.isSuccess()?"ard-is-success":"",this.isFocused()&&!this.readonly()?"ard-focused":"ard-unfocused",this._enableTransitions()?"ard-enable-transitions":""].join(" "));this.prefixTemplateInput=m(void 0,{alias:"prefixTemplate"}),this.suffixTemplateInput=m(void 0,{alias:"suffixTemplate"}),this.prefixTemplate=Oe(ds),this.suffixTemplate=Oe(cs)}set _setIsFocused(e){this.isFocused.set(e)}static{this.\u0275fac=function(i){return new(i||t)(te(_m))}}static{this.\u0275cmp=p({type:t,selectors:[["ard-form-field-frame"]],contentQueries:function(i,n,l){i&1&&(he(l,n.prefixTemplate,ds,5),he(l,n.suffixTemplate,cs,5)),i&2&&ue(2)},inputs:{hasError:[1,"hasError"],isSuccess:[1,"isSuccess"],_setIsFocused:[0,"isFocused","_setIsFocused"],appearance:[1,"appearance"],variant:[1,"variant"],compact:[1,"compact"],prefixTemplateInput:[1,"prefixTemplate","prefixTemplateInput"],suffixTemplateInput:[1,"suffixTemplate","suffixTemplateInput"]},standalone:!1,features:[_e],ngContentSelectors:He,decls:6,vars:3,consts:[[1,"ard-form-field-frame",3,"ngClass"],[1,"ard-form-field-overlay"],[1,"ard-form-field-prefix-container"],[1,"ard-form-field-content-container"],[1,"ard-form-field-suffix-container"],[3,"ngTemplateOutlet"]],template:function(i,n){if(i&1&&(Y(),o(0,"div",0),C(1,"div",1),g(2,Tu,2,1,"div",2),o(3,"div",3),L(4),a(),g(5,Du,2,1,"div",4),a()),i&2){let l,c;h("ngClass",n.ngClasses()),d(2),y(((l=n.prefixTemplateInput())!==null&&l!==void 0?l:n.prefixTemplate())?2:-1),d(3),y(((c=n.suffixTemplateInput())!==null&&c!==void 0?c:n.suffixTemplate())?5:-1)}},dependencies:[Ke,Ne],styles:[`@layer ard-ui{ard-form-field-frame{display:block}.ard-form-field-frame{position:relative}.ard-form-field-overlay{position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:1}}
`],encapsulation:2,changeDetection:0})}}return t})(),ym=(()=>{class t extends Qi{constructor(){super(Ht)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["ard-clear-button"]],standalone:!1,features:[_e],decls:5,vars:1,consts:[["focusableElement",""],["type","button",1,"ard-clear-btn-wrapper",3,"tabindex"],[1,"ard-hitbox"],[1,"ard-focus-overlay"],["aria-hidden","true",1,"ard-clear-btn"]],template:function(i,n){i&1&&(o(0,"button",1,0),C(2,"div",2)(3,"div",3)(4,"div",4),a()),i&2&&h("tabindex",n.tabIndex())},encapsulation:2})}}return t})(),Cm={filterValue:"",appearance:Ss.Raised,variant:Ds.Rounded,compact:!1},Wb=new R("ard-dropdown-panel-defaults",{factory:()=>w({},Cm)});var bm=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee]})}}return t})();var xm=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee]})}}return t})();var wm={Square:"square",Rectangle:"rectangle"};var Tm=$(w({},ut),{appearance:je.Outlined,variant:Be.Rounded,shape:wm.Square,compact:!1,outputAsString:!1,transform:null,inputAttrs:{},autoFillParseFn:t=>t}),Kb=new R("ard-digit-input-defaults",{factory:()=>w({},Tm)});var Sm=w({},Fs),Dm=new R("ard-input-defaults",{factory:()=>w({},Sm)});var us=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(te(xe))}}static{this.\u0275dir=Q({type:t,selectors:[["ng-template","ard-placeholder-tmp",""]],standalone:!1})}}return t})(),ps=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(te(xe))}}static{this.\u0275dir=Q({type:t,selectors:[["ng-template","ard-prefix-tmp",""]],standalone:!1})}}return t})(),ms=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(te(xe))}}static{this.\u0275dir=Q({type:t,selectors:[["ng-template","ard-suffix-tmp",""]],standalone:!1})}}return t})(),Ut=(()=>{class t extends hm{constructor(e){super(e);this.prefixTemplate=Oe(ps),this.suffixTemplate=Oe(ms);this.placeholderTemplate=Oe(us)}static{this.\u0275fac=function(i){return new(i||t)(te(Dm))}}static{this.\u0275cmp=p({type:t,selectors:[["ard-input"]],contentQueries:function(i,n,l){i&1&&(he(l,n.prefixTemplate,ps,5),he(l,n.suffixTemplate,ms,5),he(l,n.placeholderTemplate,us,5)),i&2&&ue(3)},standalone:!1,features:[Je([{provide:mi,useExisting:si(()=>t),multi:!0},{provide:Ki,useExisting:t}]),_e],decls:8,vars:21,consts:[["textInput","","focusableElement",""],["defaultPlaceholderTemplate",""],[3,"appearance","variant","compact","readonly","isFocused","hasError","isSuccess","prefixTemplate","suffixTemplate"],[1,"ard-input",3,"click","ngClass"],[1,"ard-input-container"],["type","text",3,"input","focus","blur","change","copy","readonly","disabled","maxLength"],[3,"title"],[3,"ngTemplateOutlet"],[1,"ard-placeholder"],[3,"click","title"]],template:function(i,n){if(i&1){let l=j();o(0,"ard-form-field-frame",2)(1,"div",3),_("click",function(){return T(l),S(n.focus())}),o(2,"div",4),g(3,Fu,3,1),o(4,"input",5,0),_("input",function(){T(l);let u=V(5);return S(n.onInput(u.value))})("focus",function(u){return T(l),S(n.onFocusMaster(u))})("blur",function(u){return T(l),S(n.onBlurMaster(u))})("change",function(u){return T(l),S(n.onChange(u))})("copy",function(u){return T(l),S(n.onCopy(u))}),a()(),g(7,Iu,1,1,"ard-clear-button",6),a()()}if(i&2){let l,c;h("appearance",n.appearance())("variant",n.variant())("compact",n.compact())("readonly",n.readonly())("isFocused",n.isFocused())("hasError",n.hasError())("isSuccess",n.isSuccess())("prefixTemplate",(l=n.prefixTemplate())==null?null:l.template)("suffixTemplate",(c=n.suffixTemplate())==null?null:c.template),d(),ie("ard-has-value",n.value),h("ngClass",n.ngClasses()),d(2),y(n.shouldDisplayPlaceholder()?3:-1),d(),h("readonly",n.readonly())("disabled",n.disabled())("maxLength",n.maxLengthAsInt()),Ze("id",n.htmlId())("name",n.htmlName())("tabindex",n.tabIndex())("type",n.type()),d(3),y(n.shouldShowClearButton()?7:-1)}},dependencies:[Ke,Ne,ym,vm],styles:[`@layer ard-ui{ard-input{display:block}.ard-placeholder{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;pointer-events:none}.ard-text-align-left input,.ard-text-align-left .ard-placeholder{text-align:left}.ard-text-align-center input,.ard-text-align-center .ard-placeholder{text-align:center}.ard-text-align-right input,.ard-text-align-right .ard-placeholder{text-align:right}}
`],encapsulation:2,changeDetection:0})}}return t})(),Nt=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee,bm,xm]})}}return t})(),Em=$(w({},ut),{appearance:je.Outlined,variant:Be.Rounded,compact:!1,placeholder:"",revealable:!0,holdToReveal:!1,autoHideTimeoutMs:void 0,revealed:!1,inputAttrs:{}}),qb=new R("ard-password-input-defaults",{factory:()=>w({},Em)});var Am={filled:!1,weight:400,grade:0,opticalSize:40,ariaLabel:""},Fm=new R("ard-icon-defaults",{factory:()=>w({},Am)});var Im=(()=>{class t{transform(e){return e=e.trim().toLowerCase(),e=e.replace(/[ -]/g,"_"),e}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275pipe=cn({name:"icon",type:t,pure:!0,standalone:!1})}}return t})(),ce=(()=>{class t{constructor(){this._DEFAULTS=I(Fm),this.ariaLabel=m(""),this.icon=m(void 0),this.filled=m(!1,{transform:e=>M(e)}),this.weight=m(400,{transform:e=>Le(e,400)}),this.grade=m(0,{transform:e=>Le(e,0)}),this.opticalSize=m(40,{transform:e=>Le(e,40)}),this.fontVariationSettings=F(()=>{let e={FILL:tt(this.filled())?Number(this.filled()):void 0,wght:this.weight(),GRAD:this.grade(),opsz:this.opticalSize()},i=Object.entries(e).filter(n=>tt(n[1])).map(n=>`"${n[0]}" ${n[1]}`).flat();return i.length===0?"":["font-variation-settings: ",i.join(", ")].join("")}),this.contentWrapper=Me("contentWrapperEl")}ngAfterViewInit(){!this.icon()&&!this.contentWrapper()?.nativeElement.innerText&&console.warn("ARD-FT9000: Using <ard-icon> without specifying the [icon] field.")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["ard-icon"]],viewQuery:function(i,n){i&1&&ke(n.contentWrapper,Zr,5),i&2&&ue()},inputs:{ariaLabel:[1,"ariaLabel"],icon:[1,"icon"],filled:[1,"filled"],weight:[1,"weight"],grade:[1,"grade"],opticalSize:[1,"opticalSize"]},standalone:!1,ngContentSelectors:He,decls:6,vars:7,consts:[["contentWrapperEl",""],[1,"ard-icon","material-symbols-outlined"],[1,"ard-icon-content-wrapper"]],template:function(i,n){if(i&1&&(Y(),o(0,"span",1),s(1),st(2,"icon"),a(),o(3,"div",2,0),L(5),a()),i&2){let l,c=V(4);Se(n.fontVariationSettings()),Ze("aria-hidden",n.ariaLabel()!==void 0)("aria-label",n.ariaLabel()),d(),A(" ",Pt(2,5,(l=n.icon())!==null&&l!==void 0?l:c.innerText),`
`)}},dependencies:[Im],styles:[`@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";@layer ard-ui{ard-icon{font-variation-settings:"FILL" 0,"wght" 400,"GRAD" 0,"opsz" 48;font-size:1.5em;width:1em;height:1em;display:inline-block;-webkit-user-select:none;user-select:none;background-repeat:no-repeat;fill:currentColor;overflow:hidden;flex-shrink:0}ard-icon .ard-icon-content-wrapper{display:none}}.ard-icon{font-variation-settings:inherit;font-size:inherit}
`],encapsulation:2,changeDetection:0})}}return t})();var re=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee]})}}return t})();function Yr(t,r){return r===void 0?!1:r.indexOf(t)!==-1}var ti={byLabel:(t,r)=>{let e=r.label.toLocaleLowerCase(),i=t===e;return[i||Yr(t,e),i]},byValue:(t,r)=>{let e=String(r.value).toLocaleLowerCase(),i=t===e;return[i||Yr(t,e),i]},byGroup:(t,r)=>{let e=String(r.group).toLocaleLowerCase(),i=t===e;return[i||Yr(t,e),i]},byLabelAndGroup:(t,r)=>{let e=ti.byLabel(t,r);return e[0]?[!0,e[1]]:ti.byGroup(t,r)},byLabelAndValue:(t,r)=>{let e=ti.byLabel(t,r);return e[0]?[!0,e[1]]:ti.byValue(t,r)},byLabelAndGroupAndValue:(t,r)=>{let e=ti.byLabelAndValue(t,r);return e[0]?[!0,e[1]]:ti.byGroup(t,r)}},Mm={Top:"top",Bottom:"bottom",Auto:"auto"},km=$(w({},ut),{valueFrom:"value",labelFrom:"label",disabledFrom:"disabled",groupLabelFrom:"group",groupDisabledFrom:"disabled",childrenFrom:"children",searchFn:ti.byLabel,clearButtonTitle:"Clear",noItemsFoundText:"No items found.",addCustomOptionText:"Add option",loadingPlaceholderText:"Loading...",placeholder:"",searchPlaceholder:"",dropdownPosition:Mm.Auto,inputAttrs:{},isLoading:!1,deferValueWrites:null,itemsAlreadyGrouped:!1,invertDisabled:!1,noGroupActions:!1,autoHighlightFirst:!1,autoFocus:!1,keepOpen:!1,hideSelected:!1,noBackspaceClear:!1,sortMultipleValues:!1,searchCaseSensitive:!1,keepSearchAfterSelect:!1,maxSelectedItems:1/0,itemDisplayLimit:1/0,compareWith:void 0,appearance:je.Outlined,variant:Be.Rounded,compact:!1,dropdownPanelWidth:void 0,dropdownPanelHeight:void 0,dropdownPanelMinWidth:"max-content",dropdownPanelMinHeight:void 0,dropdownPanelMaxWidth:void 0,dropdownPanelMaxHeight:void 0,dropdownAppearance:void 0,dropdownVariant:void 0,multiselectable:!1,clearable:!1,searchable:!1,addCustom:!1}),Qb=new R("ard-select-defaults",{factory:()=>w({},km)});var Fe={None:"none",Primary:"primary",Secondary:"secondary",Warning:"warn",Danger:"danger",Success:"success",Info:"info"},At=$(w({},Fe),{CurrentColor:"currentColor"}),ta=$(w({},As),{contentAlignment:Ln.Left,appearance:sm.Outlined,variant:Be.Rounded,color:Fe.Primary,compact:!1}),Gb=new R("ard-chip-defaults",{factory:()=>ta});var Pm=$(w(w({},Ht),ta),{deleteButtonTitle:"Delete"}),Xb=new R("ard-deletable-chip-defaults",{factory:()=>w({},Pm)});var Hn=$(w({},On),{reverseSelected:!1}),Vm=(()=>{class t extends Jr{constructor(){super(...arguments);this.selectEvent=ne({alias:"select"}),this.unselectEvent=ne({alias:"unselect"}),this.changeEvent=ne({alias:"change"});this.selected=E(!1),this.selectedChange=ne(),this.reverseSelected=m(!1,{transform:e=>M(e)}),this.selectedAccountingForReverse=F(()=>this.reverseSelected()?!this.selected():this.selected())}writeValue(e){this._selected=e}_emitChange(){this._onChangeRegistered?.(this.selected()),this.selected()?this.selectEvent.emit(null):this.unselectEvent.emit(null),this.selectedChange.emit(this.selected()),this.changeEvent.emit(this.selected())}set _selected(e){this.selected.set(M(e))}get _selectedHostAttribute(){return this.selectedAccountingForReverse()}toggleSelected(){this.disabled()||this.readonly()||(this.selected.update(e=>!e),this._emitChange(),this._emitTouched())}select(){this.disabled()||this.readonly()||(this.selected.set(!0),this._emitChange(),this._emitTouched())}unselect(){this.disabled()||this.readonly()||(this.selected.set(!1),this._emitChange(),this._emitTouched())}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=ot(t)))(n||t)}})()}static{this.\u0275dir=Q({type:t,hostVars:3,hostBindings:function(i,n){i&2&&(Ze("selected",n._selectedHostAttribute),ie("ard-selected",n._selectedHostAttribute))},inputs:{_selected:[0,"selected","_selected"],reverseSelected:[1,"reverseSelected"]},outputs:{selectEvent:"select",unselectEvent:"unselect",changeEvent:"change",selectedChange:"selectedChange"},features:[_e]})}}return t})(),Rm=$(w(w({},Hn),ta),{chipTitle:"Select",hideSelectionIcon:!1}),Zb=new R("ard-selectable-chip-defaults",{factory:()=>w({},Rm)});var Is=$(w({},ut),{compact:!1,multiple:!1,blockAfterUpload:!1}),Om=$(w({},Is),{variant:Be.Rounded,color:Fe.Primary}),Jb=new R("ard-file-drop-area-defaults",{factory:()=>w({},Om)});var Ms=(()=>{class t{constructor(e){this._DEFAULTS=e,this.wrapperClasses=m(""),this.type=m(this._DEFAULTS.type),this.ariaLabel=m("");this.appearance=m(this._DEFAULTS.appearance),this.color=m(this._DEFAULTS.color),this.lightColoring=m(this._DEFAULTS.lightColoring,{transform:i=>M(i)}),this.compact=m(this._DEFAULTS.compact,{transform:i=>M(i)}),this.disabled=m(this._DEFAULTS.disabled,{transform:i=>M(i)}),this.tabIndex=F(()=>this.disabled()?-1:this._tabIndex()),this._tabIndex=m(this._DEFAULTS.tabIndex,{alias:"tabIndex",transform:i=>Le(i,0)}),this.pointerEventsWhenDisabled=m(this._DEFAULTS.pointerEventsWhenDisabled,{transform:i=>M(i)})}static{this.\u0275fac=function(i){or()}}static{this.\u0275dir=Q({type:t,inputs:{wrapperClasses:[1,"wrapperClasses"],type:[1,"type"],ariaLabel:[1,"ariaLabel"],appearance:[1,"appearance"],color:[1,"color"],lightColoring:[1,"lightColoring"],compact:[1,"compact"],disabled:[1,"disabled"],_tabIndex:[1,"tabIndex","_tabIndex"],pointerEventsWhenDisabled:[1,"pointerEventsWhenDisabled"]}})}}return t})(),Lm={Button:"button",Submit:"submit",Reset:"reset"},qi={Transparent:"transparent",Raised:"raised",RaisedStrong:"raised-strong",Outlined:"outlined",OutlinedStrong:"outlined-strong",Flat:"flat"},Wi={Rounded:"rounded",Pill:"pill",Sharp:"sharp"},Bm={Standard:"standard",Small:"small"},ks={disabled:!1,tabIndex:0,color:Fe.Primary,lightColoring:!1,compact:!1,type:Lm.Button,pointerEventsWhenDisabled:!1},Ps=$(w({},ks),{appearance:qi.Raised}),Hm=$(w({},Ps),{variant:Wi.Rounded,vertical:!1,square:!1}),Vs=new R("ard-button-defaults",{factory:()=>w({},Hm)});var ni=(()=>{class t extends Ms{constructor(e){super(e),this._hostEl=I(ye),this._renderer=I(kt);this.variant=m(this._DEFAULTS.variant),this.vertical=m(this._DEFAULTS.vertical,{transform:n=>M(n)}),this.square=m(this._DEFAULTS.square,{transform:n=>M(n)}),this.ngClasses=F(()=>["ard-button",this.wrapperClasses(),`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`,`ard-color-${this.color()}`,this.lightColoring()?"ard-light-coloring":"",this.disabled()?"ard-disabled":"",this.compact()?"ard-compact":"",this.vertical()?"ard-button-vertical":"",this.square()?"ard-button-square":"",this.pointerEventsWhenDisabled()?"ard-button-with-pointer-events-when-disabled":""].join(" "));this.inheritedCompact=E(null),this.wasCompactChanged=E(!1),this.compactOrInherited=F(()=>this.wasCompactChanged()?this.compact():this.inheritedCompact()??this.compact());let i=this._hostEl.nativeElement;i.tagName==="BUTTON"&&(de(()=>{this._renderer.setProperty(i,"disabled",this.disabled())}),de(()=>{this._renderer.setAttribute(i,"type",this.type())}))}handleClick(e){this.disabled()&&(e.preventDefault(),e.stopImmediatePropagation())}ngOnChanges(e){e.compact&&this.wasCompactChanged.set(!0)}static{this.\u0275fac=function(i){return new(i||t)(te(Vs))}}static{this.\u0275dir=Q({type:t,selectors:[["button","ard-button",""],["a","ard-button",""]],hostVars:3,hostBindings:function(i,n){i&1&&_("click",function(c){return n.handleClick(c)}),i&2&&(Ma("tabindex",n.tabIndex()),ve(n.ngClasses()))},inputs:{variant:[1,"variant"],vertical:[1,"vertical"],square:[1,"square"]},standalone:!1,features:[_e,Tt]})}}return t})(),ge=(()=>{class t extends Ms{constructor(e){super(e);this.focusEvent=ne({alias:"focus"}),this.blurEvent=ne({alias:"blur"});this.variant=m(this._DEFAULTS.variant),this.vertical=m(this._DEFAULTS.vertical,{transform:i=>M(i)}),this.square=m(this._DEFAULTS.square,{transform:i=>M(i)}),this.inheritedCompact=E(null),this.wasCompactChanged=E(!1),this.compactOrInherited=F(()=>this.wasCompactChanged()?this.compact():this.inheritedCompact()??this.compact()),this.ngClasses=F(()=>"")}ngOnChanges(e){e.compact&&this.wasCompactChanged.set(!0)}static{this.\u0275fac=function(i){return new(i||t)(te(Vs))}}static{this.\u0275cmp=p({type:t,selectors:[["ard-button"]],hostVars:2,hostBindings:function(i,n){i&2&&ie("ard-button-with-pointer-events-when-disabled",n.pointerEventsWhenDisabled())},inputs:{variant:[1,"variant"],vertical:[1,"vertical"],square:[1,"square"]},outputs:{focusEvent:"focus",blurEvent:"blur"},standalone:!1,features:[_e,Tt],ngContentSelectors:He,decls:3,vars:12,consts:[["buttonElement",""],["ard-button","",3,"focus","blur","type","appearance","color","disabled","tabIndex","lightColoring","pointerEventsWhenDisabled","variant","vertical","square","compact"]],template:function(i,n){if(i&1){let l=j();Y(),o(0,"button",1,0),_("focus",function(u){return T(l),S(n.focusEvent.emit(u))})("blur",function(u){return T(l),S(n.blurEvent.emit(u))}),L(2),a()}i&2&&(h("type",n.type())("appearance",n.appearance())("color",n.color())("disabled",n.disabled())("tabIndex",n.tabIndex())("lightColoring",n.lightColoring())("pointerEventsWhenDisabled",n.pointerEventsWhenDisabled())("variant",n.variant())("vertical",n.vertical())("square",n.square())("compact",n.compactOrInherited()),Ze("aria-label",n.ariaLabel()))},dependencies:[ni],styles:[`@layer ard-ui{ard-button{display:block}.ard-button{display:flex;align-items:center;position:relative;cursor:pointer}.ard-button.ard-button-align-left{flex-direction:row}.ard-button.ard-button-align-right{flex-direction:row-reverse}.ard-button.ard-button-vertical{flex-direction:column}}
`],encapsulation:2,changeDetection:0})}}return t})();var me=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee]})}}return t})();var Um=$(w({},Is),{appearance:je.Outlined,variant:Be.Rounded,color:Fe.Primary,inputAttrs:{},placeholder:"",clearable:!1,clearButtonTitle:"Clear"}),e1=new R("ard-file-input-defaults",{factory:()=>w({},Um)});var Rs={Days:"days",Months:"months",Years:"years"},Nm={Only:"only",Left:"left",Inner:"inner",Right:"right"};function jm(t){return!!t&&typeof t=="object"&&"from"in t&&mr(t.from)&&"to"in t&&mr(t.to)}var Ym=new R("ard-icon-button-defaults",{factory:()=>w(w({},ks),Ht)});var $e=(()=>{class t extends Qi{constructor(e){super(e),this.wrapperClasses=m(""),this.type=m(this._DEFAULTS.type),this.ariaLabel=m("");this.color=m(this._DEFAULTS.color),this.lightColoring=m(this._DEFAULTS.lightColoring,{transform:i=>M(i)}),this.compact=m(this._DEFAULTS.compact,{transform:i=>M(i)}),this.pointerEventsWhenDisabled=m(this._DEFAULTS.pointerEventsWhenDisabled,{transform:i=>M(i)}),this.ngClasses=F(()=>["ard-appearance-transparent",`ard-color-${this.disabled()?Fe.None:this.color()}`,this.lightColoring()?"ard-light-coloring":"",this.compact()?"ard-compact":"",this.pointerEventsWhenDisabled()?"ard-icon-button-with-pointer-events-when-disabled":""].join(" "))}static{this.\u0275fac=function(i){return new(i||t)(te(Ym))}}static{this.\u0275cmp=p({type:t,selectors:[["ard-icon-button"]],hostVars:2,hostBindings:function(i,n){i&2&&ie("ard-button-with-pointer-events-when-disabled",n.pointerEventsWhenDisabled())},inputs:{wrapperClasses:[1,"wrapperClasses"],type:[1,"type"],ariaLabel:[1,"ariaLabel"],color:[1,"color"],lightColoring:[1,"lightColoring"],compact:[1,"compact"],pointerEventsWhenDisabled:[1,"pointerEventsWhenDisabled"]},standalone:!1,features:[_e],ngContentSelectors:He,decls:2,vars:4,consts:[[1,"ard-icon-button",3,"focus","blur","type","ngClass","tabindex"]],template:function(i,n){i&1&&(Y(),o(0,"button",0),_("focus",function(c){return n.focusEvent.emit(c)})("blur",function(c){return n.blurEvent.emit(c)}),L(1),a()),i&2&&(h("type",n.type())("ngClass",n.ngClasses())("tabindex",n.tabIndex()),Ze("aria-label",n.ariaLabel()))},dependencies:[Ke],styles:[`@layer ard-ui{ard-icon-button{display:block}.ard-icon-button{display:flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.ard-icon-button .ard-button-content{max-height:100%;display:flex;align-items:center;justify-content:center}}
`],encapsulation:2,changeDetection:0})}}return t})();var $m=$(w({},ut),{color:Fe.Primary,activeView:Rs.Days,activeYear:new Date().getFullYear(),activeMonth:new Date().getMonth(),firstWeekday:1,multipleYearPageChangeModifier:5,multipleYearOffset:2,multipleYearPageSize:24,staticHeight:!1,hideFloatingMonth:!1,autoFocus:!1,multiCalendarLocation:Nm.Only,min:null,max:null,filter:null,UTC:!1,daysViewHeaderDateFormat:"MMM yyyy",yearsViewHeaderDateFormat:"yyyy",monthsViewHeaderDateFormat:"yyyy",weekdayDateFormat:"EEEEE",weekdayTitleDateFormat:"EEEE",floatingMonthDateFormat:"LLL",floatingMonthTitleDateFormat:"LLLL",yearDateFormat:"yyyy",monthDateFormat:"MMM",dayDateFormat:"d"}),t1=new R("ard-calendar-defaults",{factory:()=>w({},$m)});var ze=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee]})}}return t})();var zm=t=>t instanceof Date?`${t.getDate().toString().padStart(2,"0")}/${(t.getMonth()+1).toString().padStart(2,"0")}/${t.getFullYear()}`:"",Wm=t=>{if(jm(t)){let r=`${t.from.getDate().toString().padStart(2,"0")}/${(t.from.getMonth()+1).toString().padStart(2,"0")}/${t.from.getFullYear()}`,e=t.to?`${t.to.getDate().toString().padStart(2,"0")}/${(t.to.getMonth()+1).toString().padStart(2,"0")}/${t.to.getFullYear()}`:"";return`${r} \u2013 ${e}`}return""},Km=(t,r)=>{let e=t.trim();if(!e.includes("/")&&!isNaN(Date.parse(e))){let l=new Date(e);return l.setHours(0,0,0,0),l}let i=e.split("/"),n=new Date().getFullYear();if(i.length===1){let l=parseInt(i[0],10);return isNaN(l)?null:new Date(l,0,1)}if(i.length===2){let l=parseInt(i[0],10),c=parseInt(i[1],10)-1;if(isNaN(l)||isNaN(c))return null;let u=new Date(n,c,l);return isNaN(u.getTime())?null:u}if(i.length===3){let l=parseInt(i[0],10),c=parseInt(i[1],10)-1,u=parseInt(i[2],10);if(isNaN(l)||isNaN(c)||isNaN(u))return null;let x=new Date(u,c,l);return isNaN(x.getTime())?null:x}return r},qm={Allow:"allow",Adjust:"adjust"},Qm=$(w({},ut),{inputAttrs:{},placeholder:"",serializeFn:zm,rangeSerializeFn:Wm,deserializeFn:Km,appearance:je.Outlined,variant:Be.Rounded,color:Fe.Primary,compact:!1,dropdownAppearance:Ss.Outlined,dropdownVariant:Ds.Rounded,minMaxStrategy:qm.Adjust,startView:void 0,inputReadOnly:!1,calendarDisabled:!1,calendarHidden:!1,activeView:Rs.Days,activeYear:new Date().getFullYear(),activeMonth:new Date().getMonth(),firstWeekday:1,multipleYearPageChangeModifier:5,numberOfCalendars:2,min:null,max:null,filter:null,UTC:!1,hideFloatingMonth:!1,calendarDaysViewHeaderDateFormat:"MMM yyyy",calendarYearsViewHeaderDateFormat:"yyyy",calendarMonthsViewHeaderDateFormat:"yyyy",calendarWeekdayDateFormat:"EEEEE",calendarWeekdayTitleDateFormat:"EEEE",calendarFloatingMonthDateFormat:"LLL",calendarFloatingMonthTitleDateFormat:"LLLL",calendarYearDateFormat:"yyyy",calendarMonthDateFormat:"MMM",calendarDayDateFormat:"d",acceptButtonText:"Accept",cancelButtonText:"Cancel"}),i1=new R("ard-date-input-defaults",{factory:()=>w({},Qm)});var Gm={NoChange:"nochange",Uppercase:"uppercase",Lowercase:"lowercase"};var Xm=$(w({},ut),{appearance:je.Outlined,variant:Be.Rounded,compact:!1,placeholder:"",case:Gm.NoChange,maxDigits:void 0,hideHash:!1,clearable:!1,clearButtonTitle:"Clear",inputAttrs:{}}),n1=new R("ard-hex-input-defaults",{factory:()=>w({},Xm)});var Zm=$(w({},ut),{appearance:je.Outlined,variant:Be.Rounded,compact:!1,placeholder:"",alignText:Bn.Center,inputAttrs:{},min:0,max:1/0,minMaxBehavior:$r.AdjustOnBlur,maxDecimalPlaces:1/0,fixedDecimalPlaces:!1,decimalSeparator:".",allowFloat:!1,noButtons:!1,stepSize:1,keepFocusOnQuickChangeButton:!0}),Jm=new R("ard-number-input-defaults",{factory:()=>w({},Zm)});var hs=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(te(xe))}}static{this.\u0275dir=Q({type:t,selectors:[["ng-template","ard-placeholder-tmp",""]],standalone:!1})}}return t})(),In=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(te(xe))}}static{this.\u0275dir=Q({type:t,selectors:[["ng-template","ard-prefix-tmp",""]],standalone:!1})}}return t})(),Mn=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(te(xe))}}static{this.\u0275dir=Q({type:t,selectors:[["ng-template","ard-suffix-tmp",""]],standalone:!1})}}return t})(),Qe=(()=>{class t extends ea{constructor(e){super(e);this.inputEl=Me("textInput"),this.inputModel=new Wr(this),this._wasViewInit=!1;this.placeholder=m(this._DEFAULTS.placeholder),this.placeholderTemplate=Oe(hs),this.shouldDisplayPlaceholder=F(()=>!!this.placeholder()&&!this.inputModel.stringValue());this.prefixTemplate=Oe(In),this.suffixTemplate=Oe(Mn);this.appearance=m(this._DEFAULTS.appearance),this.variant=m(this._DEFAULTS.variant),this.alignText=m(this._DEFAULTS.alignText),this.compact=m(this._DEFAULTS.compact,{transform:i=>M(i)}),this.ngClasses=F(()=>[`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`,`ard-text-align-${this.alignText()}`,`ard-quick-change-${!this.noButtons()}`,this.compact()?"ard-compact":""].join(" ")),this.buttonVariant=F(()=>this.variant()===Be.Rounded?Wi.Rounded:this.variant()===Be.Pill?Wi.Pill:this.variant()===Be.Sharp?Wi.Sharp:Wi.Rounded),this.buttonAppearance=F(()=>this.appearance()===je.Outlined&&this.variant()!==Be.Pill?qi.Outlined:qi.Transparent);this.inputAttrs=m({});this._valueBeforeInit=null,this.valueChange=ne();this.inputEvent=ne({alias:"input"}),this.changeEvent=ne({alias:"change"}),this.clearEvent=ne({alias:"clear"}),this.quickChangeEvent=ne({alias:"quickChange"});this.min=m(this._DEFAULTS.min,{transform:i=>Le(i,this._DEFAULTS.min)}),this.max=m(this._DEFAULTS.max,{transform:i=>Le(i,this._DEFAULTS.max)}),this.minMaxBehavior=m(this._DEFAULTS.minMaxBehavior),this.maxDecimalPlaces=m(this._DEFAULTS.maxDecimalPlaces,{transform:i=>{let n=Le(i,this._DEFAULTS.maxDecimalPlaces);if(n<0)throw new Error(`ARD-FT0072a: Cannot set <ard-number-input>'s [maxDecimalPlaces] to a negative value, got "${n}".`);if(n%1!==0)throw new Error(`ARD-FT0072b: Cannot set <ard-number-input>'s [maxDecimalPlaces] to a non-integer value, got "${n}".`);return n}}),this.fixedDecimalPlaces=m(this._DEFAULTS.fixedDecimalPlaces,{transform:i=>M(i)}),this.decimalSeparator=m(this._DEFAULTS.decimalSeparator,{transform:i=>{if(typeof i!="string"||i.length!==1)throw new Error(`ARD-FT0073: <ard-number-input>'s [decimalSeparator] must be a single character, got "${i}".`);return i}}),this.allowFloat=m(this._DEFAULTS.allowFloat,{transform:i=>M(i)});this.noButtons=m(this._DEFAULTS.noButtons,{transform:i=>M(i)}),this.keepFocusOnQuickChangeButton=m(this._DEFAULTS.keepFocusOnQuickChangeButton,{transform:i=>M(i)}),this.stepSize=m(this._DEFAULTS.stepSize,{transform:i=>{let n=Le(i,1);if(n===0)throw new Error("ARD-FT0071a: Cannot set <ard-number-input>'s [stepSize] to 0.");if(n<0)throw new Error(`ARD-FT0071b: Cannot set <ard-number-input>'s [stepSize] to a negative value, got "${n}".`);return n}}),this._isQuickChangeButtonFocused=!1,this.canIncrement=F(()=>{let i=this.inputModel.numberValue();return!tt(i)||i<this.max()}),this.canDecrement=F(()=>{let i=this.inputModel.numberValue();return!tt(i)||i>this.min()}),de(()=>{let i=this.allowFloat(),n=this.stepSize();if(!i&&n%1!==0)throw new Error(`ARD-FT0071c: <ard-number-input>'s [stepSize] must be an integer when [allowFloat] is false, got "${n}".`)}),de(()=>{let i=this.decimalSeparator();this.inputModel.rewriteValueAfterHostUpdate()})}ngAfterViewInit(){this._setInputAttributes(),this._wasViewInit=!0,this._valueBeforeInit&&(this.writeValue(this._valueBeforeInit),delete this._valueBeforeInit)}writeValue(e){this.inputModel.writeValue(e,!1),!this.isFocused()&&this.inputModel.updateOnBlur(!0)}set value(e){if(typeof e=="number"&&(e=e.toString()),!this._wasViewInit){this._valueBeforeInit=e;return}this.writeValue(e)}onQuickChangeButtonClick(e,i){if(this.disabled()||this.readonly())return;let n=this.inputModel.numberValue(),l=tt(n);if(n||(n=0),e===1&&n>=this.max()&&l||e===-1&&n<=this.min()&&l)return;i&&i.stopPropagation();let c=n+this.stepSize()*e,u=(0,yt.roundToPrecision)(c,9);this.writeValue(u),this.quickChangeEvent.emit({direction:e,value:u}),this._emitChange(),this._emitTouched(),this._focusInputIfCantQuickChange()}_focusInputIfCantQuickChange(){this.keepFocusOnQuickChangeButton()||(!this.canDecrement()||!this.canIncrement())&&this.focus()}onQuickChangeButtonMouseup(e){this.disabled()||this.readonly()||this.keepFocusOnQuickChangeButton()&&(this._isQuickChangeButtonFocused=!0,setTimeout(()=>{this._isQuickChangeButtonFocused=!1},0))}onInput(e){this.disabled()||this.readonly()||!this.inputModel.writeValue(e,!0)||this._emitInput()}_emitInput(){this.inputEvent.emit(this.inputModel.numberValue()),this._emitChange()}onFocusMaster(e){this.disabled()||this.readonly()||this.onFocus(e)}onBlurMaster(e){this.disabled()||this.readonly()||(this.onBlur(e),this.inputModel.updateOnBlur())}onChange(e){e.stopPropagation(),this._emitChange()}_emitChange(){let e=this.inputModel.numberValue();this.valueChange.emit(e),this.changeEvent.emit(e),this._onChangeRegistered?.(e)}onMouseup(){if(this.disabled()||this.readonly())return;let e=window.getSelection();e&&e.type==="Range"||this._isQuickChangeButtonFocused||this.focus()}onCopy(e){this.value&&(this.inputEl()?.nativeElement.selectionStart===0&&this.inputEl()?.nativeElement.selectionEnd===this.inputEl()?.nativeElement.value.length||this.inputEl()?.nativeElement.selectionStart===this.inputEl()?.nativeElement.selectionEnd)&&(e.clipboardData?.setData("text/plain",String(this.value)),e.preventDefault())}_setInputAttributes(){let e=this.inputEl().nativeElement,i=w({type:"text",autocorrect:"off",autocapitalize:"off",autocomplete:"off",tabindex:String(this.tabIndex)},this.inputAttrs);for(let n of Object.keys(i))e.setAttribute(n,String(i[n]))}static{this.\u0275fac=function(i){return new(i||t)(te(Jm))}}static{this.\u0275cmp=p({type:t,selectors:[["ard-number-input"]],contentQueries:function(i,n,l){i&1&&(he(l,n.placeholderTemplate,hs,5),he(l,n.prefixTemplate,In,5),he(l,n.suffixTemplate,Mn,5)),i&2&&ue(3)},viewQuery:function(i,n){i&1&&ke(n.inputEl,xs,5),i&2&&ue()},inputs:{placeholder:[1,"placeholder"],appearance:[1,"appearance"],variant:[1,"variant"],alignText:[1,"alignText"],compact:[1,"compact"],inputAttrs:[1,"inputAttrs"],value:"value",min:[1,"min"],max:[1,"max"],minMaxBehavior:[1,"minMaxBehavior"],maxDecimalPlaces:[1,"maxDecimalPlaces"],fixedDecimalPlaces:[1,"fixedDecimalPlaces"],decimalSeparator:[1,"decimalSeparator"],allowFloat:[1,"allowFloat"],noButtons:[1,"noButtons"],keepFocusOnQuickChangeButton:[1,"keepFocusOnQuickChangeButton"],stepSize:[1,"stepSize"]},outputs:{valueChange:"valueChange",inputEvent:"input",changeEvent:"change",clearEvent:"clear",quickChangeEvent:"quickChange"},standalone:!1,features:[Je([{provide:mi,useExisting:si(()=>t),multi:!0},{provide:Ki,useExisting:t}]),_e],decls:11,vars:17,consts:[["textInput","","focusableElement",""],["defaultPlaceholderTemplate",""],[1,"ard-number-input",3,"mousedown","mouseup","ngClass"],["color","none","pointerEventsWhenDisabled","","ardHoldSpaceKey","",1,"ard-quick-change-button","decrement",3,"variant","appearance","disabled","tabIndex"],[1,"ard-number-input-wrapper"],[1,"ard-number-input-prefix-container"],[1,"ard-input-container"],["type","text","inputmode","numeric",3,"input","focus","blur","change","mousedown","mouseup","copy","readonly","disabled"],[1,"ard-number-input-suffix-container"],["color","none","pointerEventsWhenDisabled","","ardHoldSpaceKey","",1,"ard-quick-change-button","increment",3,"variant","appearance","disabled","tabIndex"],["color","none","pointerEventsWhenDisabled","","ardHoldSpaceKey","",1,"ard-quick-change-button","decrement",3,"click","mouseup","ardHold","variant","appearance","disabled","tabIndex"],[3,"ngTemplateOutlet"],[1,"ard-placeholder"],["color","none","pointerEventsWhenDisabled","","ardHoldSpaceKey","",1,"ard-quick-change-button","increment",3,"click","mouseup","ardHold","variant","appearance","disabled","tabIndex"]],template:function(i,n){if(i&1){let l=j();o(0,"div",2),_("mousedown",function(u){return T(l),S(u.preventDefault())})("mouseup",function(){return T(l),S(n.onMouseup())}),g(1,Mu,2,4,"ard-button",3),o(2,"div",4),g(3,Pu,2,1,"div",5),o(4,"div",6),g(5,Ou,3,1),o(6,"input",7,0),_("input",function(){T(l);let u=V(7);return S(n.onInput(u.value))})("focus",function(u){return T(l),S(n.onFocusMaster(u))})("blur",function(u){return T(l),S(n.onBlurMaster(u))})("change",function(u){return T(l),S(n.onChange(u))})("mousedown",function(u){return T(l),S(u.stopPropagation())})("mouseup",function(u){return T(l),S(u.stopPropagation())})("copy",function(u){return T(l),S(n.onCopy(u))}),a()(),g(9,Bu,2,1,"div",8),a(),g(10,Hu,2,4,"ard-button",9),a()}i&2&&(ie("ard-has-error",n.hasError())("ard-is-success",n.isSuccess())("ard-has-value",n.value),h("ngClass",n.ngClasses()),d(),y(n.noButtons()?-1:1),d(2),y(n.prefixTemplate()?3:-1),d(2),y(n.shouldDisplayPlaceholder()?5:-1),d(),h("readonly",n.readonly())("disabled",n.disabled()),Ze("id",n.htmlId())("name",n.htmlName())("tabindex",n.tabIndex()),d(3),y(n.suffixTemplate()?9:-1),d(),y(n.noButtons()?-1:10))},dependencies:[Ke,Ne,Uo,ge],styles:[`@layer ard-ui{ard-number-input{display:block}.ard-number-input{display:flex;max-width:100%}.ard-number-input .ard-placeholder{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;pointer-events:none}.ard-text-align-left input{text-align:left}.ard-text-align-left .ard-placeholder{justify-content:flex-start}.ard-text-align-center input{text-align:center}.ard-text-align-center .ard-placeholder{justify-content:center}.ard-text-align-right input{text-align:right}.ard-text-align-right .ard-placeholder{justify-content:flex-end}.ard-quick-change-button{-webkit-user-select:none;user-select:none;height:100%}.ard-readonly>.ard-number-input .ard-quick-change-button{pointer-events:none}}
`],encapsulation:2,changeDetection:0})}}return t})(),Ge=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee,No,me]})}}return t})(),eh={vertical:!1,compact:!1},th=new R("ard-button-group-defaults",{factory:()=>w({},eh)});var pt=(()=>{class t{ngOnChanges(e){e.vertical&&this.wasVerticalChanged.set(!0),e.compact&&this.wasCompactChanged.set(!0)}constructor(){this._DEFAULTS=I(th),this.vertical=m(this._DEFAULTS.vertical,{transform:e=>M(e)}),this.inheritedVertical=E(null),this.compact=m(this._DEFAULTS.compact,{transform:e=>M(e)}),this.inheritedCompact=E(null),this.wasVerticalChanged=E(!1),this.wasCompactChanged=E(!1),this.verticalOrInherited=F(()=>this.wasVerticalChanged()?this.vertical():this.inheritedVertical()??this.vertical()),this.compactOrInherited=F(()=>this.wasCompactChanged()?this.compact():this.inheritedCompact()??this.compact()),this.groupChildren=vt(t),this.buttonChildren=vt(ge),this.buttonDirChildren=vt(ni),this._wasContentInitialized=!1,de(()=>{this._updateChildrenStyles()})}ngAfterContentInit(){this._wasContentInitialized=!0,this._updateChildrenStyles()}_updateChildrenStyles(){let e=this.buttonChildren(),i=this.buttonDirChildren(),n=this.groupChildren(),l=this.compactOrInherited(),c=this.verticalOrInherited();if(this._wasContentInitialized){for(let u of[...e,...i])u.inheritedCompact.set(l);for(let u of n)u.inheritedCompact.set(l),u.inheritedVertical.set(c)}}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["ard-button-group"]],contentQueries:function(i,n,l){i&1&&(he(l,n.groupChildren,t,4),he(l,n.buttonChildren,ge,4),he(l,n.buttonDirChildren,ni,4)),i&2&&ue(3)},hostAttrs:[1,"ard-button-group"],hostVars:4,hostBindings:function(i,n){i&2&&ie("ard-button-group__vertical",n.verticalOrInherited())("ard-button-group__compact",n.compactOrInherited())},inputs:{vertical:[1,"vertical"],compact:[1,"compact"]},standalone:!1,features:[Tt],ngContentSelectors:He,decls:1,vars:0,template:function(i,n){i&1&&(Y(),L(0))},styles:[`@layer ard-ui{ard-button-group{display:flex;z-index:0;max-width:max-content}ard-button-group .ard-button:hover,ard-button-group .ard-button:focus,ard-button-group .ard-button:focus-visible,ard-button-group .ard-button:active{z-index:1}ard-button-group:not(.ard-button-group__vertical):not(:has(>ard-button-group))>ard-button:not(:last-child) .ard-button{border-top-right-radius:0;border-bottom-right-radius:0}ard-button-group:not(.ard-button-group__vertical):not(:has(>ard-button-group))>ard-button:not(:first-child) .ard-button{border-top-left-radius:0;border-bottom-left-radius:0;margin-left:-1px}ard-button-group:not(.ard-button-group__vertical):not(:has(>ard-button-group))>.ard-button:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}ard-button-group:not(.ard-button-group__vertical):not(:has(>ard-button-group))>.ard-button:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;margin-left:-1px}ard-button-group:not(.ard-button-group__vertical):not(:has(>ard-button-group)) .ard-divider+ard-button .ard-button,ard-button-group:not(.ard-button-group__vertical):not(:has(>ard-button-group)) .ard-divider+.ard-button{margin-left:0}ard-button-group.ard-button-group__vertical{flex-direction:column}ard-button-group.ard-button-group__vertical:not(:has(>ard-button-group))>ard-button:not(:last-child) .ard-button{border-bottom-right-radius:0;border-bottom-left-radius:0}ard-button-group.ard-button-group__vertical:not(:has(>ard-button-group))>ard-button:not(:first-child) .ard-button{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}ard-button-group.ard-button-group__vertical:not(:has(>ard-button-group))>.ard-button:not(:last-child){border-bottom-right-radius:0;border-bottom-left-radius:0}ard-button-group.ard-button-group__vertical:not(:has(>ard-button-group))>.ard-button:not(:first-child){border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}ard-button-group.ard-button-group__vertical:not(:has(>ard-button-group))>.ard-divider+ard-button .ard-button,ard-button-group.ard-button-group__vertical:not(:has(>ard-button-group))>.ard-divider+.ard-button{margin-top:0}ard-button-group.ard-button-group__vertical>.ard-button,ard-button-group.ard-button-group__vertical>ard-button,ard-button-group.ard-button-group__vertical>ard-button>.ard-button{width:100%;aspect-ratio:unset}}
`],encapsulation:2,changeDetection:0})}}return t})(),mt=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee]})}}return t})(),ih=$(w({},Ps),{size:Bm.Standard}),r1=new R("ard-fab-defaults",{factory:()=>w({},ih)});var nh=$(w({},Hn),{color:At.Primary,unselectedColor:At.None}),rh=new R("ard-checkbox-defaults",{factory:()=>w({},nh)});var fs=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(te(xe))}}static{this.\u0275dir=Q({type:t,selectors:[["ng-template","ard-checkbox-tmp",""]],standalone:!1})}}return t})(),gs=(()=>{class t{constructor(e){this.template=e,this.checkboxTmp=m(void 0)}static{this.\u0275fac=function(i){return new(i||t)(te(xe))}}static{this.\u0275dir=Q({type:t,selectors:[["ng-template","_ard-tmp-repository",""]],inputs:{checkboxTmp:[1,"checkboxTmp"]}})}}return t})(),ct={Unselected:"unselected",Indeterminate:"indeterminate",Selected:"selected"},Un=(()=>{class t extends Vm{constructor(e){super(e),this._componentId="100",this._componentName="checkbox";this.color=m(this._DEFAULTS.color),this.unselectedColor=m(this._DEFAULTS.unselectedColor),this.ngClasses=F(()=>[`ard-color-${this.color()}`,`ard-unselected-color-${this.unselectedColor()}`,`ard-checkbox-${this.internalState()}`].join(" ")),this.internalState=_t(ct.Unselected,{alias:"state"}),this.state=F(()=>this.reverseSelected()?this.internalState()===ct.Unselected?ct.Selected:this.internalState()===ct.Selected?ct.Unselected:this.internalState():this.internalState()),this.State=ct;this.templateRepository=Oe(gs),this.checkboxTemplate=Oe(fs),this.checkboxTemplateContext=F(()=>({$implicit:this.selectedAccountingForReverse(),selected:this.selectedAccountingForReverse(),internalSelected:this.selected(),state:this.state(),internalState:this.internalState()}))}set _selected(e){let i=M(e);this.selected.set(i),this.internalState.set(i?ct.Selected:ct.Unselected)}toggleState(){if(this.disabled()||this.readonly())return;let e=ct.Unselected;this.internalState()===ct.Unselected&&(e=ct.Selected),this.internalState.set(e),this.selected.set(this.internalState()===ct.Selected),this._emitChange(),this._emitTouched()}static{this.\u0275fac=function(i){return new(i||t)(te(rh))}}static{this.\u0275cmp=p({type:t,selectors:[["ard-checkbox"]],contentQueries:function(i,n,l){i&1&&(he(l,n.templateRepository,gs,5),he(l,n.checkboxTemplate,fs,5)),i&2&&ue(2)},inputs:{color:[1,"color"],unselectedColor:[1,"unselectedColor"],internalState:[1,"state","internalState"]},outputs:{internalState:"stateChange"},standalone:!1,features:[Je([{provide:mi,useExisting:si(()=>t),multi:!0}]),_e],decls:6,vars:8,consts:[["defaultCheckboxTemplate",""],["role","checkbox","type","button",1,"ard-checkbox",3,"click","focus","blur","tabindex","ngClass"],[1,"ard-hitbox"],[1,"ard-focus-overlay"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"icon","filled"]],template:function(i,n){if(i&1){let l=j();o(0,"button",1),_("click",function(){return T(l),S(n.toggleState())})("focus",function(u){return T(l),S(n.onFocus(u))})("blur",function(u){return T(l),S(n.onBlur(u))}),C(1,"div",2)(2,"div",3),g(3,Uu,1,2,"ng-template",null,0,oe)(5,Nu,0,0,"ng-template",4),a()}if(i&2){let l,c=V(4);h("tabindex",n.tabIndex())("ngClass",n.ngClasses()),Ze("id",n.htmlId())("name",n.htmlName())("aria-checked",n.selectedAccountingForReverse())("aria-disabled",n.disabled()),d(5),h("ngTemplateOutlet",(l=(l=(l=n.templateRepository())==null||(l=l.checkboxTmp())==null?null:l.template)!==null&&l!==void 0?l:(l=n.checkboxTemplate())==null?null:l.template)!==null&&l!==void 0?l:c)("ngTemplateOutletContext",n.checkboxTemplateContext())}},dependencies:[Ke,Ne,ce],styles:[`@layer ard-ui{ard-checkbox{display:block}.ard-checkbox{font-size:inherit}.ard-checkbox>ard-icon{font-size:1.5em}ard-checkbox.ard-readonly .ard-checkbox,ard-checkbox.ard-disabled .ard-checkbox{cursor:default}ard-checkbox.ard-readonly .ard-checkbox .ard-focus-overlay,ard-checkbox.ard-disabled .ard-checkbox .ard-focus-overlay{display:none}}
`],encapsulation:2,changeDetection:0})}}return t})(),Nn=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee,re]})}}return t})(),ah=$(w({},Ht),{color:At.Primary}),oh=new R("ard-radio-defaults",{factory:()=>w({},ah)});var kn=(()=>{class t extends Qi{constructor(e){super(e),this._changeDetector=I(Bi),this.htmlId=m(Rn.TakeChance.id());this.selectEvent=ne({alias:"select"}),this.unselectEvent=ne({alias:"unselect"}),this.changeEvent=ne({alias:"change"}),this.touchedEvent=ne({alias:"touched"});this.selected=E(!1),this.selectedChange=ne(),this.value=m();this.color=m(this._DEFAULTS.color),this.ngClasses=F(()=>[`ard-color-${this.color()}`,`ard-radio-${this.selected()?"selected":"unselected"}`].join(" "));this.name=E(null)}_emitChange(){this.selected()?this.selectEvent.emit():this.unselectEvent.emit(),this.selectedChange.emit(this.selected()),this.changeEvent.emit(this.selected())}_emitTouched(){this.touchedEvent.emit()}set _selected(e){this.selected.set(M(e))}get _selectedHostAttribute(){return this.selected()}toggleSelected(){this.disabled()||this.readonly()||(this.selected.update(e=>!e),this._emitChange(),this._emitTouched())}select(){this.disabled()||this.readonly()||(this.selected.set(!0),this._emitChange(),this._emitTouched())}unselect(){this.disabled()||this.readonly()||(this.selected.set(!1),this._emitChange(),this._emitTouched())}onMousedown(){this.disabled()||this.readonly()||this.focus()}onMouseup(){this.disabled()||this.readonly()||(this.focus(),this.selected.set(!0),this._emitChange())}markForCheck(){this._changeDetector.markForCheck()}static{this.\u0275fac=function(i){return new(i||t)(te(oh))}}static{this.\u0275cmp=p({type:t,selectors:[["ard-radio"]],hostVars:3,hostBindings:function(i,n){i&2&&(Ze("selected",n._selectedHostAttribute),ie("ard-selected",n._selectedHostAttribute))},inputs:{htmlId:[1,"htmlId"],_selected:[0,"selected","_selected"],value:[1,"value"],color:[1,"color"]},outputs:{selectEvent:"select",unselectEvent:"unselect",changeEvent:"change",touchedEvent:"touched",selectedChange:"selectedChange"},standalone:!1,features:[_e],ngContentSelectors:He,decls:11,vars:8,consts:[["focusableElement",""],["radio",""],["type","button",1,"ard-radio",3,"focus","blur","mousedown","mouseup","ngClass","tabindex"],[1,"ard-radio-circles"],[1,"ard-radio-outer-circle"],[1,"ard-radio-inner-circle"],[1,"ard-focus-overlay"],[1,"ard-hitbox"],[3,"for"],["type","radio",1,"ard-radio-input-element",3,"name","id","checked","disabled","readOnly"]],template:function(i,n){if(i&1){let l=j();Y(),o(0,"button",2,0),_("focus",function(u){return T(l),S(n.onFocus(u))})("blur",function(u){return T(l),S(n.onBlur(u))})("mousedown",function(){return T(l),S(n.onMousedown())})("mouseup",function(){return T(l),S(n.onMouseup())}),o(2,"div",3),C(3,"div",4)(4,"div",5)(5,"div",6)(6,"div",7),a(),o(7,"label",8),L(8),a()(),C(9,"input",9,1)}i&2&&(h("ngClass",n.ngClasses())("tabindex",n.tabIndex()),d(7),h("for",n.htmlId()),d(2),h("name",n.name())("id",n.htmlId())("checked",n.selected())("disabled",n.disabled())("readOnly",n.readonly()))},dependencies:[Ke],styles:[`@layer ard-ui{ard-radio{display:block}.ard-radio{border:none;background:none}.ard-radio>label{pointer-events:none}ard-radio>.ard-radio-input-element{display:none}}
`],encapsulation:2,changeDetection:0})}}return t})(),Os=(()=>{class t extends ea{get _htmlIdHostAttribute(){return this.htmlId()}constructor(){super(ut),this._radios=vt(kn,{descendants:!0}),this.valueChange=ne(),this.changeEvent=ne({alias:"change"}),this.selected=_t(null);this.name=F(()=>this.htmlName()??Rn.TakeChance.id());this._childEventSubs=[],this._isContentInit=!1,de(()=>{this.name(),this._updateRadioButtonNames()}),de(()=>{this.readonly(),this._updateReadonlyRadioButtons()}),de(()=>{this.selected(),this._checkSelectedRadioButton()}),de(()=>{let e=this._radios();if(e){setTimeout(()=>{this._updateRadioButtonNames()},0),this._destroyChildSubscriptions();for(let i of e)this._childEventSubs.push(i.blurEvent.subscribe(n=>{this._handleBlurEvents(n)})),this._childEventSubs.push(i.focusEvent.subscribe(n=>{this._handleFocusEvents(n)})),this._childEventSubs.push(i.selectedChange.subscribe(n=>{n&&this._handleChangeEvents(i)})),this._childEventSubs.push(i.touchedEvent.subscribe(()=>{this._emitTouched()}))}})}get value(){return this.selected()?.value()}set value(e){this.writeValue(e)}writeValue(e){if(this.value!==e){if(!this._isContentInit){this._valueBeforeInit=e;return}this._findRadioByValue(e)}setTimeout(()=>{this._updateRadiosByValue()},0)}_findRadioByValue(e){this._radios&&this.selected.set(this._radios().find(i=>e===i.value())??null)}_updateRadiosByValue(){this._isContentInit&&this._radios().forEach(e=>{e.selected.set(this.value===e.value()),e.markForCheck()})}_checkSelectedRadioButton(){let e=this.selected();e&&!e.selected()&&(e.selected.set(!0),e.markForCheck())}_updateRadioButtonNames(){this._radios()&&this._radios().forEach(e=>{e.name.set(this.name()),e.markForCheck()})}_updateReadonlyRadioButtons(){this._radios()&&this._radios().forEach(e=>{e.readonly.set(this.readonly()),e.markForCheck()})}_handleBlurEvents(e){this.onBlur(e)}_handleFocusEvents(e){this.onFocus(e)}_handleChangeEvents(e){this.writeValue(e.value()),this._emitChange()}_emitChange(){let e=this.value;this._onChangeRegistered?.(e),this.changeEvent.emit(e),this.valueChange.emit(e)}ngAfterContentInit(){this._isContentInit=!0,this._valueBeforeInit!==void 0&&this.writeValue(this._valueBeforeInit),setTimeout(()=>{this._updateRadioButtonNames()},0);for(let e of this._radios())this._childEventSubs.push(e.blurEvent.subscribe(i=>{this._handleBlurEvents(i)})),this._childEventSubs.push(e.focusEvent.subscribe(i=>{this._handleFocusEvents(i)})),this._childEventSubs.push(e.selectedChange.subscribe(i=>{i&&this._handleChangeEvents(e)})),this._childEventSubs.push(e.touchedEvent.subscribe(()=>{this._emitTouched()}))}ngOnDestroy(){super.ngOnDestroy(),this._destroyChildSubscriptions()}_destroyChildSubscriptions(){for(let e of this._childEventSubs)e.unsubscribe();this._childEventSubs=[]}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["ard-radio-group"]],contentQueries:function(i,n,l){i&1&&he(l,n._radios,kn,5),i&2&&ue()},hostAttrs:["role","radiogroup"],hostVars:5,hostBindings:function(i,n){i&2&&Ze("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null)("id",n._htmlIdHostAttribute)},inputs:{value:"value",selected:[1,"selected"]},outputs:{valueChange:"valueChange",changeEvent:"change",selected:"selectedChange"},standalone:!1,features:[Je([{provide:mi,useExisting:si(()=>t),multi:!0},{provide:Ki,useExisting:t}]),_e],ngContentSelectors:He,decls:1,vars:0,template:function(i,n){i&1&&(Y(),L(0))},styles:[`@layer ard-ui{ard-radio-group{display:flex}}
`],encapsulation:2,changeDetection:0})}}return t})(),Ls=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee]})}}return t})();var sh=$(w({},ut),{valueFrom:"value",labelFrom:"label",disabledFrom:"disabled",compareWith:void 0,multiselectable:!1,requireValue:!1,invertDisabled:!1,maxSelectedItems:void 0});var lh=$(w({},Be),{RoundedConnected:"rounded-connected",SharpConnected:"sharp-connected",PillConnected:"pill-connected"}),dh=$(w({},je),{FilledStrong:"filled-strong",OutlinedStrong:"outlined-strong"}),ch=$(w({},sh),{appearance:dh.Outlined,variant:lh.RoundedConnected,color:Fe.Primary,align:Bn.Center,iconBased:!1,compact:!1,autoFocus:!1,uniformWidths:!1,itemsPerRow:1/0}),a1=new R("ard-segment-defaults",{factory:()=>w({},ch)});var uh={Raised:"raised",Contained:"contained"},ph=$(w({},Hn),{color:Fe.Primary,appearance:uh.Raised,icon:void 0,selectedIcon:void 0,unselectedIcon:void 0}),o1=new R("ard-slide-toggle-defaults",{factory:()=>w({},ph)});var ii={Push:"push",Allow:"allow",Block:"block"},_s=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(te(xe))}}static{this.\u0275dir=Q({type:t,selectors:[["ng-template","ard-slider-tooltip-tmp",""]],standalone:!1})}}return t})(),Bs={Always:"always",Auto:"auto",Never:"never"},Kr={Top:"top",Bottom:"bottom"},mh=$(w({},On),{noTooltip:!1,showValueTicks:!1,formatTooltipFn:t=>t,min:0,max:100,step:1,shiftMultiplier:5,labelPosition:Kr.Bottom,labels:[],color:At.Primary,compact:!1,tooltipPosition:Kr.Top,tooltipBehavior:Bs.Auto,selectionBehavior:ii.Allow,minimumDistance:0,emitTouchedOnEveryChange:!1}),Hs=(()=>{class t extends Jr{constructor(){super(...arguments),this.elementRef=Me("track"),this.document=I(De),this.renderer=I(kt),this.overlay=I(Ci),this.scrollStrategyOpts=I(Dn),this.viewContainerRef=I(Dt);this.min=m(this._DEFAULTS.min,{transform:e=>Le(e,this._DEFAULTS.min)}),this.max=m(this._DEFAULTS.max,{transform:e=>Le(e,this._DEFAULTS.max)}),this.step=m(this._DEFAULTS.step,{transform:e=>{let i=Le(e,this._DEFAULTS.step);if(i===0)throw new Error(`ARD-FT${this.componentId}1a: Cannot set <ard-${this.componentName}>'s [step] to 0.`);if(i<0)throw new Error(`ARD-FT${this.componentId}1b: Cannot set <ard-${this.componentName}>'s [step] to a negative value, got ${i}.`);return i}}),this.minMaxStepValueCleanup=de(()=>{this.min(),this.max(),this.step(),Hi(()=>this.cleanupValueAfterMinMaxStepChange())}),this.minMaxErrorCheck=de(()=>{let e=this.min(),i=this.max();if(e>=i)throw new Error(`ARD-FT${this.componentId}0: Cannot set <ard-${this.componentName}>'s [min] to a value greater than or equal to [max], got min=${e} and max=${i}.`)}),this.shiftMultiplier=m(this._DEFAULTS.shiftMultiplier,{transform:e=>Le(e,this._DEFAULTS.shiftMultiplier)}),this._stepSizeComputed=F(()=>this.step()/Math.abs(this.min()-this.max()));this.showValueTicks=m(this._DEFAULTS.showValueTicks,{transform:e=>M(e)}),this._tickArray=F(()=>{let e=[],i=0;for(;i<100;)e.push(i),i+=this._stepSizeComputed()*100,i=(0,yt.roundToPrecision)(i,6);return e.push(100),e.map(n=>`${n}%`)});this._transformLabelInput=e=>!tt(e)||Array.isArray(e)&&e.length===0?[]:(typeof e=="string"&&(e=Ir(e).map(Number)),tt(e[0])&&typeof e[0]=="number"?e.map(i=>({label:i,value:i})):e),this.labelPosition=m(this._DEFAULTS.labelPosition),this.labels=m(this._transformLabelInput(this._DEFAULTS.labels),{transform:e=>this._transformLabelInput(e)}),this.labelObjects=F(()=>{let e=this.labels();return!tt(e)||e.length===0?[]:e.map(i=>{let n=this._clampValue(i.value);return{label:String(i.label),positionPercent:`${this._valueToPercent(n)*100}%`}})});this.color=m(At.Primary),this.compact=m(!1,{transform:e=>M(e)}),this.ngClasses=F(()=>[`ard-color-${this.color()}`,`ard-labels-${this.labelPosition()}`,`ard-tooltip-${this.tooltipPosition()}`,this.compact()?"ard-compact":""].join(" "));this.sliderTransition=F(()=>{let e=this._totalSteps(),i=20*(e+200)/(e+20)-80,n=(0,yt.roundToPrecision)(i,3);return n<0?"0":Math.min(80,n)+"ms"}),this._totalSteps=F(()=>(this.max()-this.min())/this.step()),this.valueChange=ne();this.noTooltip=m(this._DEFAULTS.noTooltip,{transform:e=>M(e)}),this.tooltipFormatFn=m(this._DEFAULTS.formatTooltipFn),this.tooltipTemplate=Oe(_s),this.tooltipPosition=m(Kr.Top),this.tooltipBehavior=m(Bs.Auto);this._grabbedHandleId=E(null),this._shouldCheckForMovement=!1,this._bodyHasClass=!1,this.emitTouchedOnEveryChange=m(this._DEFAULTS.emitTouchedOnEveryChange,{transform:e=>M(e)}),this.isSliderHandleGrabbed=F(()=>!!this._grabbedHandleId()),this.grabbedHandleEffect=de(()=>{this.isSliderHandleGrabbed()?this.renderer.addClass(this.document.body,"ard-body-slider-handle-grabbed"):this.renderer.removeClass(this.document.body,"ard-body-slider-handle-grabbed")}),this.handlePositionsPercent=F(()=>[this._handlePositions()[0]*100+"%",this._handlePositions()[1]*100+"%"])}set value(e){this.writeValue(e)}get value(){return this._value()}_offset(e,i,n=1){let l=this._stepSizeComputed()*(i?this.shiftMultiplier():1),c=this._handlePositions()[n-1]+l*e;c=this._clampPercentValue(c),this._setValueFromPercent(c),this.emitTouchedOnEveryChange()&&this._emitTouched()}_decrement(e,i=!1){this._offset(-1,i||e.shiftKey)}_increment(e,i=!1){this._offset(1,i||e.shiftKey)}_clampValue(e){return e=Math.min(e,this.max()),e=Math.max(e,this.min()),e-=this.min(),e=(0,yt.roundToMultiple)(e,this.step()),e+=this.min(),e}_valueToPercent(e){let i=Math.abs(this.min()-this.max());return(e-this.min())/i}_emitChange(){let e=this.value;this._onChangeRegistered?.(e),this.valueChange.emit(e)}onPointerDownOnHandle(e,i=1){this.disabled()||this.readonly()||(this._grabbedHandleId.set(i),this._shouldCheckForMovement=!0,this._bodyHasClass||(this._bodyHasClass=!0,this.renderer.addClass(this.document.body,"ard-prevent-touch-actions")))}onPointerUp(){this.disabled()||this.readonly()||this._shouldCheckForMovement&&(this.emitTouchedOnEveryChange()&&this._emitTouched(),this._grabbedHandleId.set(null),this._shouldCheckForMovement=!1,this._bodyHasClass&&(this._bodyHasClass=!1,this.renderer.removeClass(this.document.body,"ard-prevent-touch-actions")))}_setValueFromPercent(e,i=1){i&&this._handlePositions()[i-1]!==e&&(this._value.set(this._percentValueToValue(e,i)),this._emitChange())}_writeValueFromEvent(e,i){if(this.disabled()||this.readonly())return;let n=this._getPercentValueFromEvent(e);this._setValueFromPercent(n,i)}_getElementRect(){return this.elementRef().nativeElement.getBoundingClientRect()}_clampPercentValue(e){return e=Math.min(e,1),e=Math.max(e,0),e=(0,yt.roundToMultiple)(e,this._stepSizeComputed()),e}_getPercentValueFromEvent(e){let i=this._getElementRect(),n;e instanceof MouseEvent?n=e.clientX:n=e.targetTouches[0].clientX;let l=(n-i.left)/i.width;return this._clampPercentValue(l)}onKeyPress(e){if(!(this.disabled()||this.readonly()))switch(e.code){case"ArrowLeft":case"ArrowDown":{this._decrement(e);return}case"ArrowRight":case"ArrowUp":{this._increment(e);return}case"PageDown":{this._decrement(e,!0);return}case"PageUp":{this._increment(e,!0);return}case"Home":{this._decrement(e,!0);return}case"End":{this._increment(e,!0);return}}}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=ot(t)))(n||t)}})()}static{this.\u0275dir=Q({type:t,contentQueries:function(i,n,l){i&1&&he(l,n.tooltipTemplate,_s,5),i&2&&ue()},viewQuery:function(i,n){i&1&&ke(n.elementRef,ju,5),i&2&&ue()},hostBindings:function(i,n){i&1&&_("pointerup",function(){return n.onPointerUp()},!1,We)("touchend",function(){return n.onPointerUp()},!1,We)("keydown",function(c){return n.onKeyPress(c)})},inputs:{min:[1,"min"],max:[1,"max"],step:[1,"step"],shiftMultiplier:[1,"shiftMultiplier"],showValueTicks:[1,"showValueTicks"],labelPosition:[1,"labelPosition"],labels:[1,"labels"],color:[1,"color"],compact:[1,"compact"],value:"value",noTooltip:[1,"noTooltip"],tooltipFormatFn:[1,"tooltipFormatFn"],tooltipPosition:[1,"tooltipPosition"],tooltipBehavior:[1,"tooltipBehavior"],emitTouchedOnEveryChange:[1,"emitTouchedOnEveryChange"]},outputs:{valueChange:"valueChange"},features:[_e]})}}return t})(),hh=w({},mh),Us=new R("ard-slider-defaults",{factory:()=>w({},hh)});var jn=(()=>{class t extends Hs{constructor(e){super(e),this.componentId="106",this.componentName="range-slider",this._value=E({from:-Number.MIN_SAFE_INTEGER,to:Number.MIN_SAFE_INTEGER}),this.selectionBehavior=m(this._DEFAULTS.selectionBehavior),this.minimumDistance=m(this._DEFAULTS.minimumDistance,{transform:i=>Le(i,this._DEFAULTS.minimumDistance)});this._tooltipValue=F(()=>{let i=this._value(),n=this.tooltipFormatFn();return{from:String(n(i.from)),to:String(n(i.to))}}),this.tooltipContexts=F(()=>({from:{value:this._tooltipValue().from,$implicit:this._tooltipValue().from},to:{value:this._tooltipValue().to,$implicit:this._tooltipValue().to}}));this.trackOverlayLeft=F(()=>Math.min(...this._handlePositions())*100+"%"),this.trackOverlayWidth=F(()=>Math.abs(this._handlePositions()[0]-this._handlePositions()[1])*100+"%"),this._handlePositions=F(()=>{let i=Math.abs(this.min()-this.max()),n=this._value(),l=(n.from-this.min())/i,c=(n.to-this.min())/i;return[l,c]});this.currentHandle=E(null)}_isValidObject(e){return Qa(e)&&Vt(e.from)&&Vt(e.to)}_isValidTuple(e){return Array.isArray(e)&&Vt(e[0])&&Vt(e[1])&&e.length===2}_normalizeSliderRange(e){return e.from<=e.to?e:{from:e.to,to:e.from}}writeValue(e){if(!this._isValidObject(e)&&!this._isValidTuple(e)){this.reset();return}let i=-Number.MIN_SAFE_INTEGER,n=Number.MIN_SAFE_INTEGER;this._isValidObject(e)?(i=e.from,n=e.to):this._isValidTuple(e)&&(i=e[0],n=e[1]);let l=this._clampValue(i),c=this._clampValue(n),u=this._normalizeSliderRange({from:l,to:c});u.from===this.value.from&&u.to===this.value.to||this._value.set(u)}get value(){return this._normalizeSliderRange(this._value())}set value(e){this.writeValue(e)}cleanupValueAfterMinMaxStepChange(){let e=this._value();this.writeValue(e);let i=this._value();(e.from!==i.from||e.to!==i.to)&&this._emitChange()}reset(){this.disabled()||this.readonly()||this._value.set({from:-this.min(),to:this.max()})}onTrackHitboxPointerDown(e){this.disabled()||this.readonly()||(this._writeValueFromEvent(e),this.onPointerDownOnHandle(e))}onPointerMove(e){this.disabled()||this.readonly()||this._shouldCheckForMovement&&(this._bodyHasClass||(this._bodyHasClass=!0,this.renderer.addClass(this.document.body,"ard-prevent-touch-actions")),this._writeValueFromEvent(e,this._grabbedHandleId()))}_percentValueToValue(e,i){let n=Math.abs(this.min()-this.max()),l=e*n+this.min();l=(0,yt.roundToPrecision)(l,9);let c=this.step()*this.minimumDistance(),u=this._value(),x={from:u.from,to:u.to};return i===1?(l>=u.to-c&&(this.selectionBehavior()===ii.Block?l=u.to-c:this.selectionBehavior()===ii.Push&&(x.to=l+c)),x.from=l):(l<=u.from+c&&(this.selectionBehavior()===ii.Block?l=u.from+c:this.selectionBehavior()===ii.Push&&(x.from=l-c)),x.to=l),x}onHandleFocus(e,i){this.disabled()||this.readonly()||(this.onFocus(e),this.currentHandle.set(i))}onBlur(e){super.onBlur(e),this.currentHandle.set(null)}static{this.\u0275fac=function(i){return new(i||t)(te(Us))}}static{this.\u0275cmp=p({type:t,selectors:[["ard-range-slider"]],hostBindings:function(i,n){i&1&&_("mousemove",function(c){return n.onPointerMove(c)},!1,We)("touchmove",function(c){return n.onPointerMove(c)},!1,We)},inputs:{selectionBehavior:[1,"selectionBehavior"],minimumDistance:[1,"minimumDistance"]},standalone:!1,features:[_e],decls:21,vars:30,consts:[["track",""],["focusableElement",""],["handleThumbBase",""],["defaultTooltipTemplate",""],[1,"ard-range-slider-container-master",3,"ngClass"],[1,"ard-slider-container"],[1,"ard-slider-track",3,"pointerdown"],[1,"ard-hitbox"],[1,"ard-slider-track-overlay","ard-slider-track-inactive"],[1,"ard-slider-track-overlay","ard-slider-track-active"],[1,"ard-value-tick-container"],["type","button",1,"ard-slider-handle",3,"pointerdown","focus","blur","tabindex"],[1,"ard-focus-overlay"],[1,"ard-slider-tooltip-wrapper",3,"ard-tooltip-always","style"],[1,"ard-slider-label-container"],[1,"ard-value-tick",3,"style"],[1,"ard-value-tick"],[1,"ard-slider-tooltip-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ard-slider-tooltip"],[1,"ard-slider-label",3,"style"],[1,"ard-slider-label"],[1,"ard-slider-thumb"]],template:function(i,n){if(i&1){let l=j();o(0,"div",4)(1,"div",5)(2,"div",6,0),_("pointerdown",function(u){return T(l),S(n.onTrackHitboxPointerDown(u))}),C(4,"div",7)(5,"div",8)(6,"div",9),g(7,zu,3,0,"div",10),a(),o(8,"button",11,1),_("pointerdown",function(u){return T(l),S(n.onPointerDownOnHandle(u,1))})("focus",function(u){return T(l),S(n.onHandleFocus(u,1))})("blur",function(u){return T(l),S(n.onBlur(u))}),C(10,"div",12)(11,"div",7),a(),g(12,qu,4,8,"div",13),o(13,"button",11,1),_("pointerdown",function(u){return T(l),S(n.onPointerDownOnHandle(u,2))})("focus",function(u){return T(l),S(n.onHandleFocus(u,2))})("blur",function(u){return T(l),S(n.onBlur(u))}),C(15,"div",12)(16,"div",7),a(),g(17,Xu,4,8,"div",13),a(),g(18,Ju,3,0,"div",14),a(),g(19,ep,1,0,"ng-template",null,2,oe)}i&2&&(Se(Ce(21,ws,n.sliderTransition())),ie("ard-slider-handle-grabbed",n.isSliderHandleGrabbed()),h("ngClass",n.ngClasses()),d(6),Se(Ae(23,Yu,n.trackOverlayLeft(),n.trackOverlayWidth())),d(),y(n.showValueTicks()?7:-1),d(),Se(Ce(26,Ct,n.handlePositionsPercent()[0])),ie("ard-grabbed",n.isSliderHandleGrabbed()&&n.currentHandle()===1),h("tabindex",n.tabIndex()),d(4),y(n.tooltipBehavior()!=="never"?12:-1),d(),Se(Ce(28,Ct,n.handlePositionsPercent()[1])),ie("ard-grabbed",n.isSliderHandleGrabbed()&&n.currentHandle()===2),h("tabindex",n.tabIndex()),d(4),y(n.tooltipBehavior()!=="never"?17:-1),d(),y(n.labelObjects().length>0?18:-1))},dependencies:[Ke,Ne],styles:[`@layer ard-ui{body.ard-prevent-touch-actions,body.ard-prevent-touch-actions *{touch-action:none}ard-range-slider{display:block}.ard-range-slider-container-master{display:flex;flex-direction:column}.ard-range-slider-container-master.ard-labels-top{flex-direction:column-reverse}.ard-range-slider-container-master .ard-slider-tooltip-wrapper{position:absolute;transform:translate(-50%);pointer-events:none}.ard-range-slider-container-master.ard-tooltip-top .ard-slider-tooltip-wrapper{bottom:100%}.ard-range-slider-container-master.ard-tooltip-bottom .ard-slider-tooltip-wrapper{top:100%}.ard-range-slider-container-master .ard-slider-handle{position:absolute;left:0;transform:translate(-50%)}.ard-range-slider-container-master .ard-slider-tooltip,.ard-range-slider-container-master .ard-slider-track,.ard-range-slider-container-master .ard-value-tick-container{position:relative}.ard-range-slider-container-master .ard-value-tick{position:absolute}.ard-range-slider-container-master .ard-slider-label-container{position:relative;width:100%;height:1em}.ard-range-slider-container-master .ard-slider-label{position:absolute;line-height:1em}}
`],encapsulation:2,changeDetection:0})}}return t})(),Yn=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee]})}}return t})(),wi=(()=>{class t extends Hs{constructor(e){super(e),this.componentId="105",this.componentName="slider";this._value=E(0);this._tooltipValue=F(()=>{let i=this._value(),n=this.tooltipFormatFn();return String(n?.(i)??i)}),this.tooltipContext=F(()=>({value:this._tooltipValue(),$implicit:this._tooltipValue()})),this._handlePositions=F(()=>{let i=Math.abs(this.min()-this.max()),n=(this._value()-this.min())/i;return[n,n]})}writeValue(e){if(e=Number(e),isNaN(e)){this.reset();return}e=this._clampValue(e),this._value.set(e)}cleanupValueAfterMinMaxStepChange(){let e=this._value();this.writeValue(this._value());let i=this._value();e!==i&&this._emitChange()}reset(){this._value.set(0)}increment(e=1){this._offset(e,!1)}decrement(e=1){this._offset(-e,!1)}onTrackHitboxPointerDown(e){this.disabled()||this.readonly()||(this._writeValueFromEvent(e),this.onPointerDownOnHandle(e))}onPointerMove(e){this.disabled()||this.readonly()||this._shouldCheckForMovement&&this._writeValueFromEvent(e)}_percentValueToValue(e){let i=Math.abs(this.min()-this.max()),n=e*i+this.min();return(0,yt.roundToPrecision)(n,9)}static{this.\u0275fac=function(i){return new(i||t)(te(Us))}}static{this.\u0275cmp=p({type:t,selectors:[["ard-slider"]],hostBindings:function(i,n){i&1&&_("mousemove",function(c){return n.onPointerMove(c)},!1,We)("touchmove",function(c){return n.onPointerMove(c)},!1,We)},standalone:!1,features:[Je([{provide:mi,useExisting:si(()=>t),multi:!0}]),_e],decls:14,vars:21,consts:[["track",""],["focusableElement",""],["defaultTooltipTemplate",""],[1,"ard-slider-container-master",3,"ngClass"],[1,"ard-slider-container"],[1,"ard-slider-track",3,"pointerdown"],[1,"ard-hitbox"],[1,"ard-slider-track-overlay","ard-slider-track-inactive"],[1,"ard-slider-track-overlay","ard-slider-track-active"],[1,"ard-value-tick-container"],["type","button",1,"ard-slider-handle",3,"pointerdown","touchstart","focus","blur","tabindex"],[1,"ard-focus-overlay"],[1,"ard-slider-tooltip-wrapper",3,"ard-tooltip-always","style"],[1,"ard-slider-label-container"],[1,"ard-value-tick",3,"style"],[1,"ard-value-tick"],[1,"ard-slider-tooltip-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ard-slider-tooltip"],[1,"ard-slider-label",3,"style"],[1,"ard-slider-label"]],template:function(i,n){if(i&1){let l=j();o(0,"div",3)(1,"div",4)(2,"div",5,0),_("pointerdown",function(u){return T(l),S(n.onTrackHitboxPointerDown(u))}),C(4,"div",6)(5,"div",7)(6,"div",8),g(7,np,3,0,"div",9),a(),o(8,"button",10,1),_("pointerdown",function(u){return T(l),S(n.onPointerDownOnHandle(u))})("touchstart",function(u){return T(l),S(n.onPointerDownOnHandle(u))})("focus",function(u){return T(l),S(n.onFocus(u))})("blur",function(u){return T(l),S(n.onBlur(u))}),C(10,"div",11)(11,"div",6),a(),g(12,op,4,8,"div",12),a(),g(13,lp,3,0,"div",13),a()}i&2&&(Se(Ce(15,ws,n.sliderTransition())),ie("ard-slider-handle-grabbed",n.isSliderHandleGrabbed()),h("ngClass",n.ngClasses()),d(6),Se(Ce(17,tp,n.handlePositionsPercent()[0])),d(),y(n.showValueTicks()?7:-1),d(),Se(Ce(19,Ct,n.handlePositionsPercent()[0])),ie("ard-grabbed",n.isSliderHandleGrabbed()),h("tabindex",n.tabIndex()),d(4),y(n.tooltipBehavior()!=="never"?12:-1),d(),y(n.labelObjects().length>0?13:-1))},dependencies:[Ke,Ne],styles:[`@layer ard-ui{body.ard-prevent-touch-actions,body.ard-prevent-touch-actions *{touch-action:none}ard-slider{display:block}.ard-slider-container-master{display:flex;flex-direction:column}.ard-slider-container-master.ard-labels-top{flex-direction:column-reverse}.ard-slider-container-master .ard-slider-tooltip-wrapper{position:absolute;transform:translate(-50%);pointer-events:none}.ard-slider-container-master.ard-tooltip-top .ard-slider-tooltip-wrapper{bottom:100%}.ard-slider-container-master.ard-tooltip-bottom .ard-slider-tooltip-wrapper{top:100%}.ard-slider-container-master .ard-slider-handle{position:absolute;left:0;transform:translate(-50%)}.ard-slider-container-master .ard-slider-tooltip,.ard-slider-container-master .ard-slider-track,.ard-slider-container-master .ard-value-tick-container{position:relative}.ard-slider-container-master .ard-value-tick{position:absolute}.ard-slider-container-master .ard-slider-label-container{position:relative;width:100%;height:1em}.ard-slider-container-master .ard-slider-label{position:absolute;line-height:1em}.ard-disabled .ard-slider-container-master,.ard-disabled .ard-range-slider-container-master{pointer-events:none;opacity:60%}}
`],encapsulation:2,changeDetection:0})}}return t})(),Ti=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee,Bo]})}}return t})(),fh={None:"none",Half:"half",Filled:"filled"},$n=$(w({},At),{Gold:"gold"}),gh=$(w({},ut),{color:$n.Gold,max:5}),s1=new R("ard-rating-input-defaults",{factory:()=>w({},gh)});var _h={Noop:"noop",Default:"default"},vh=$(w({},Hn),{clickStrategy:_h.Default,color:$n.Gold}),l1=new R("ard-star-button-defaults",{factory:()=>w({},vh)});var yh={color:$n.Gold,filled:fh.None},d1=new R("ard-star-defaults",{factory:()=>w({},yh)});var Ch={LeftClumped:"left-clumped",LeftSplit:"left-split",RightSplit:"right-split",RightClumped:"right-clumped"},bh=$(w({},On),{valueFrom:"value",labelFrom:"label",disabledFrom:"disabled",compareWith:null,invertDisabled:!1,maxSelectedItems:1/0,color:Fe.Primary,align:Ch.LeftClumped,compact:!1}),c1=new R("ard-checkbox-list-defaults",{factory:()=>w({},bh)});var xh={Small:"small",Medium:"medium",Large:"large"},wh={AboveBefore:"above-before",AboveAfter:"above-after",BelowBefore:"below-before",BelowAfter:"below-after",Before:"before",After:"after",Above:"above",Below:"below"},Th={color:Fe.Primary,variant:Be.Rounded,size:xh.Medium,position:wh.AboveAfter,overlap:!1},u1=new R("ard-badge-defaults",{factory:()=>w({},Th)});var Sh={Default:"default",Auto:"auto"};var Dh={Sharp:"sharp",Pill:"pill"},Ns={Determinate:"determinate",Indeterminate:"indeterminate",Buffer:"buffer",Query:"query"},Eh={value:0,bufferValue:0,color:At.Primary,variant:Dh.Pill,size:Sh.Default,mode:Ns.Determinate,hideValue:!1},p1=new R("ard-progress-bar-defaults",{factory:()=>w({},Eh)});var Ah={Transparent:"transparent",Colorless:"colorless",Colored:"colored"},Fh={Full:"full",Ring:"ring"},Ih={value:0,max:100,color:At.Primary,appearance:Ah.Transparent,variant:Fh.Full,hideValue:!1,reverse:!1},m1=new R("ard-progress-circle-defaults",{factory:()=>w({},Ih)});var Mh={color:At.Primary},kh=new R("ard-spinner-defaults",{factory:()=>w({},Mh)});var zn=(()=>{class t{constructor(){this._DEFAULTS=I(kh);this.color=m(this._DEFAULTS.color),this.ngClasses=F(()=>[`ard-color-${this.color()}`].join(" "))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["ard-spinner"]],inputs:{color:[1,"color"]},standalone:!1,decls:2,vars:1,consts:[["viewBox","0 0 100 100","xmlns","http://www.w3.org/2000/svg",1,"ard-spinner",3,"ngClass"],["cx","50","cy","50","r","20",1,"ard-spinner-circle"]],template:function(i,n){i&1&&(Ta(),o(0,"svg",0),C(1,"circle",1),a()),i&2&&h("ngClass",n.ngClasses())},dependencies:[Ke],styles:[`@layer ard-ui{ard-spinner{display:block}.ard-spinner{animation:rotator var(--ard-_spinner-duration) linear infinite;pointer-events:none}.ard-spinner-circle{stroke-dasharray:1,200;stroke-dashoffset:0;animation:dash var(--ard-_spinner-duration) ease-in-out infinite 0s;stroke-linecap:round;fill:none;stroke-width:3}}@keyframes rotator{to{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:75,200;stroke-dashoffset:-35}to{stroke-dasharray:75,200;stroke-dashoffset:-124}}
`],encapsulation:2,changeDetection:0})}}return t})(),Wn=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee]})}}return t})(),Ph={defaultHintAlign:Ln.Left,reserveHintLine:!1,labelRequiredText:"*",labelOptionalText:"(optional)",autoErrorOnlyFirstError:!0},ia=new R("ard-form-field-defaults",{factory:()=>w({},Ph)});var js=new R("ard-error-map",{factory:()=>({$fallback:"Provide error messages using provideErrorMap"})});function Ys(t){return{provide:js,useValue:t}}var qr=(()=>{class t{constructor(){this.left=m(!1,{transform:e=>M(e)}),this.right=m(!1,{transform:e=>M(e)}),de(()=>{this.left()&&this.right()&&console.error("ARD-NF5140: Cannot align a form field error to both left and right.")})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=Q({type:t,selectors:[["","ard-error",""]],hostVars:8,hostBindings:function(i,n){i&2&&ie("ard-error",!0)("ard-error-default",!n.left()&&!n.right())("ard-error-left",n.left()&&!n.right())("ard-error-right",!n.left()&&n.right())},inputs:{left:[1,"left"],right:[1,"right"]}})}}return t})(),Gi=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["ard-error"]],standalone:!1,features:[un([qr])],ngContentSelectors:He,decls:1,vars:0,template:function(i,n){i&1&&(Y(),L(0))},encapsulation:2})}}return t})(),Pn=(()=>{class t{constructor(){this._errorMap=I(js),this._DEFAULTS=I(ia),this.control=m.required(),this.onlyFirstError=m(this._DEFAULTS.autoErrorOnlyFirstError,{transform:e=>M(e)}),this.errorMessages=E([],{equal:(e,i)=>e.length===i.length&&e.every((n,l)=>n===i[l])}),this.hasError=F(()=>this.errorMessages().length>0),this.left=m(!1,{transform:e=>M(e)}),this.right=m(!1,{transform:e=>M(e)}),de(()=>{let e=this.control();this._eventsSub=e.events.pipe(ai(new mn(!0,e)),at(i=>"touched"in i||"status"in i),Re(()=>{let i=e.errors;if(!i||!e.touched)return[];if(typeof i=="object"&&Object.keys(i).length===0)return[];let n=this.onlyFirstError(),l=[];for(let c in this._errorMap)if(c in i){let u=this._errorMap[c];if(typeof u=="function"){let x=u(i[c]);if(n)return[x];l.push(x)}else if(u!==void 0){if(n)return[u];l.push(u)}}return l.length===0?[this._errorMap.$fallback||JSON.stringify(i)]:l})).subscribe(i=>{this.errorMessages.set(i)})}),de(()=>{this.left()&&this.right()&&console.error("ARD-NF5150: Cannot align a form field auto-error to both left and right.")})}ngOnDestroy(){this._eventsSub?.unsubscribe()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["ard-auto-error"]],hostVars:12,hostBindings:function(i,n){i&2&&ie("ard-auto-error",!0)("ard-auto-error-default",!n.left()&&!n.right())("ard-auto-error-left",n.left()&&!n.right())("ard-auto-error-right",!n.left()&&n.right())("ard-auto-error__no-errors",n.errorMessages().length===0)("ard-auto-error__has-errors",n.errorMessages().length>0)},inputs:{control:[1,"control"],onlyFirstError:[1,"onlyFirstError"],left:[1,"left"],right:[1,"right"]},standalone:!1,decls:2,vars:0,template:function(i,n){i&1&&B(0,dp,2,1,"ard-error",null,Et),i&2&&H(n.errorMessages())},dependencies:[Gi],encapsulation:2})}}return t})();var Qr=(()=>{class t{constructor(){this.left=m(!1,{transform:e=>M(e)}),this.right=m(!1,{transform:e=>M(e)}),de(()=>{this.left()&&this.right()&&console.error("ARD-NF5150: Cannot align a form field hint-error to both left and right.")})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=Q({type:t,selectors:[["","ard-hint-error",""]],hostVars:18,hostBindings:function(i,n){i&2&&ie("ard-hint-error",!0)("ard-hint",!0)("ard-error-default",!n.left()&&!n.right())("ard-error-left",n.left()&&!n.right())("ard-error-right",!n.left()&&n.right())("ard-error",!0)("ard-hint-default",!n.left()&&!n.right())("ard-hint-left",n.left()&&!n.right())("ard-hint-right",!n.left()&&n.right())},inputs:{left:[1,"left"],right:[1,"right"]}})}}return t})(),Gr=(()=>{class t{constructor(){this.left=m(!1,{transform:e=>M(e)}),this.right=m(!1,{transform:e=>M(e)}),de(()=>{this.left()&&this.right()&&console.error("ARD-NF5130: Cannot align a form field hint to both left and right.")})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=Q({type:t,selectors:[["","ard-hint",""]],hostVars:8,hostBindings:function(i,n){i&2&&ie("ard-hint",!0)("ard-hint-default",!n.left()&&!n.right())("ard-hint-left",n.left()&&!n.right())("ard-hint-right",!n.left()&&n.right())},inputs:{left:[1,"left"],right:[1,"right"]}})}}return t})(),bt=(()=>{class t{constructor(){this._DEFAULTS=I(ia),this.required=m(!1,{transform:e=>M(e)}),this.optional=m(!1,{transform:e=>M(e)}),this.requiredText=m(this._DEFAULTS.labelRequiredText),this.optionalText=m(this._DEFAULTS.labelOptionalText),de(()=>{this.required()&&this.optional()&&console.error("ARD-NF5120: Cannot set a form field label to be both required and optional.")})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["ard-label"]],hostVars:2,hostBindings:function(i,n){i&2&&ie("ard-label",!0)},inputs:{required:[1,"required"],optional:[1,"optional"],requiredText:[1,"requiredText"],optionalText:[1,"optionalText"]},standalone:!1,ngContentSelectors:He,decls:5,vars:5,consts:[[1,"ard-label__text"],[1,"ard-label__required-optional-text"]],template:function(i,n){i&1&&(Y(),o(0,"div",0),L(1),o(2,"span",1),g(3,cp,1,1)(4,up,1,1),a()()),i&2&&(ie("ard-label__required",n.required())("ard-label__optional",n.optional()),d(3),y(n.required()&&!n.optional()?3:n.optional()&&!n.required()?4:-1))},encapsulation:2})}}return t})(),Vh=(()=>{class t{constructor(){this._DEFAULTS=I(ia),this.defaultHintAlign=m(this._DEFAULTS.defaultHintAlign),this.alignHintToLeftByDefault=F(()=>this.defaultHintAlign()===Ln.Left),this.control=Oe(Ki),this.label=Oe(bt),this.hints=vt(Gr),this.errors=vt(qr),this.autoErrors=vt(Pn),this.hintErrors=vt(Qr),this.hasAnyHint=F(()=>this.hints().length>0||this.hintErrors().length>0),this.hasAnyError=F(()=>this.errors().length>0||this.autoErrors().length>0&&this.autoErrors().some(e=>e.hasError())),this.reserveHintLine=m(this._DEFAULTS.reserveHintLine,{transform:e=>M(e)})}get controlHasError(){let e=this.control()?.hasError;return dt(e)?e():e}get controlIsSuccess(){let e=this.control()?.isSuccess;return dt(e)?e():e}get controlDisabled(){let e=this.control()?.disabled;return dt(e)?e():e}get controlHtmlId(){let e=this.control()?.htmlId;return dt(e)?e():e}ngOnInit(){if(!this.control())throw new Error("ARD-FT5110: Form field component requires any control (input) to be present within the element. Found none.")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=Q({type:t,contentQueries:function(i,n,l){i&1&&(he(l,n.control,Ki,5),he(l,n.label,bt,5),he(l,n.hints,Gr,4),he(l,n.errors,qr,4),he(l,n.autoErrors,Pn,4),he(l,n.hintErrors,Qr,4)),i&2&&ue(6)},inputs:{defaultHintAlign:[1,"defaultHintAlign"],reserveHintLine:[1,"reserveHintLine"]}})}}return t})(),jt=(()=>{class t extends Vh{static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=ot(t)))(n||t)}})()}static{this.\u0275cmp=p({type:t,selectors:[["ard-form-field"]],standalone:!1,features:[_e],ngContentSelectors:mp,decls:20,vars:14,consts:[["defaultHints",""],["defaultErrors",""],["defaultAutoErrors",""],["defaultHintErrors",""],["leftHintErrors",""],["rightHintErrors",""],[1,"ard-form-field"],[1,"ard-form-field__label"],[1,"ard-form-field__input"],[1,"ard-form-field__hints"],[1,"ard-form-field__errors-left"],[1,"ard-form-field__default-error"],[3,"ngTemplateOutlet"],[1,"ard-form-field__errors-right"],[1,"ard-form-field__hints-left"],[1,"ard-form-field__default-hint"],[1,"ard-form-field__hints-right"]],template:function(i,n){i&1&&(Y(pp),o(0,"div",6)(1,"label",7),L(2),a(),o(3,"div",8),L(4,1),a(),o(5,"div",9),g(6,Tp,8,4)(7,Pp,8,4),a()(),g(8,Vp,1,0,"ng-template",null,0,oe)(10,Rp,1,0,"ng-template",null,1,oe)(12,Op,1,0,"ng-template",null,2,oe)(14,Lp,1,0,"ng-template",null,3,oe)(16,Bp,1,0,"ng-template",null,4,oe)(18,Hp,1,0,"ng-template",null,5,oe)),i&2&&(ie("ard-form-field__with-error",n.controlHasError)("ard-form-field__is-success",n.controlIsSuccess)("ard-form-field__control-disabled",n.controlDisabled),d(),Ze("for",n.controlHtmlId),d(4),ie("ard-form-field__errors",n.hasAnyError())("ard-form-field__reserve-hint-line",n.reserveHintLine()||n.hasAnyHint())("ard-form-field__hints-default-left",n.alignHintToLeftByDefault()),d(),y(n.hasAnyError()?6:7))},dependencies:[Ne],styles:[`@layer ard-ui{ard-form-field,ard-horizontal-form-field{display:block}ard-label,ard-hint,ard-error,ard-auto-error,ard-hint-error{display:block}.ard-horizontal-form-field{display:flex}.ard-form-field__hints,.ard-form-field__errors{display:flex;justify-content:space-between}.ard-form-field__hints>*,.ard-form-field__errors>*{display:flex;flex-direction:column}.ard-form-field__hints .ard-form-field__hints-left .ard-form-field__default-hint,.ard-form-field__hints .ard-form-field__errors-left .ard-form-field__default-error,.ard-form-field__errors .ard-form-field__hints-left .ard-form-field__default-hint,.ard-form-field__errors .ard-form-field__errors-left .ard-form-field__default-error{display:none}.ard-form-field__hints.ard-form-field__hints-default-left .ard-form-field__hints-left .ard-form-field__default-hint,.ard-form-field__hints.ard-form-field__hints-default-left .ard-form-field__errors-left .ard-form-field__default-error,.ard-form-field__errors.ard-form-field__hints-default-left .ard-form-field__hints-left .ard-form-field__default-hint,.ard-form-field__errors.ard-form-field__hints-default-left .ard-form-field__errors-left .ard-form-field__default-error{display:flex;flex-direction:column}.ard-form-field__hints.ard-form-field__hints-default-left .ard-form-field__hints-right .ard-form-field__default-hint,.ard-form-field__hints.ard-form-field__hints-default-left .ard-form-field__errors-right .ard-form-field__default-error,.ard-form-field__errors.ard-form-field__hints-default-left .ard-form-field__hints-right .ard-form-field__default-hint,.ard-form-field__errors.ard-form-field__hints-default-left .ard-form-field__errors-right .ard-form-field__default-error,.ard-auto-error__no-errors{display:none}}
`],encapsulation:2,changeDetection:0})}}return t})(),$s=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["ard-hint-error"]],standalone:!1,features:[un([{directive:Qr,inputs:["left","left","right","right"]}])],ngContentSelectors:He,decls:1,vars:0,template:function(i,n){i&1&&(Y(),L(0))},encapsulation:2})}}return t})(),zs=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["ard-hint"]],standalone:!1,features:[un([{directive:Gr,inputs:["left","left","right","right"]}])],ngContentSelectors:He,decls:1,vars:0,template:function(i,n){i&1&&(Y(),L(0))},encapsulation:2})}}return t})();var Yt=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee]})}}return t})(),Rh={full:!1,appearance:je.Outlined},na=new R("ard-kbd-defaults",{factory:()=>w({},Rh)});var Oh=(()=>{class t{constructor(){this._DEFAULTS=I(na)}transform(e,i=!this._DEFAULTS.full){return Xo(e,i)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275pipe=cn({name:"kbd",type:t,pure:!0,standalone:!1})}}return t})(),nt=(()=>{class t{constructor(){this._DEFAULTS=I(na),this.contentWrapper=Me("contentWrapperEl"),this.key=m(""),this.full=m(!1,{transform:e=>M(e)});this.appearance=m(je.Filled),this.ngClasses=F(()=>[`ard-appearance-${this.appearance()}`].join(" "))}ngAfterViewInit(){if(!this.key()&&!this.contentWrapper().nativeElement.innerText)throw new Error("ARD-FT5030: Using <ard-kbd> without specifying the [key] field is not allowed.")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["ard-kbd"]],viewQuery:function(i,n){i&1&&ke(n.contentWrapper,Zr,5),i&2&&ue()},inputs:{key:[1,"key"],full:[1,"full"],appearance:[1,"appearance"]},standalone:!1,ngContentSelectors:He,decls:6,vars:5,consts:[["contentWrapperEl",""],[1,"ard-kbd",3,"ngClass"],[1,"ard-kbd-content-wrapper"]],template:function(i,n){if(i&1&&(Y(),o(0,"kbd",1),s(1),st(2,"kbd"),a(),o(3,"div",2,0),L(5),a()),i&2){let l;h("ngClass",n.ngClasses()),d(),A(" ",Li(2,2,n.key()||((l=n.contentWrapper())==null||l.nativeElement==null?null:l.nativeElement.innerText)||"",!n.full()),`
`)}},dependencies:[Ke,Oh],styles:[`@layer ard-ui{.ard-kbd-content-wrapper{display:none}.ard-kbd{display:inline-block}}
`],encapsulation:2,changeDetection:0})}}return t})(),Ws=(()=>{class t{constructor(){this.elementRef=I(ye),this.renderer=I(kt);this.appearance=m(je.Filled,{alias:"ardKbdAppearance"}),this.ngClasses=F(()=>["ard-kbd",`ard-appearance-${this.appearance()}`]),de(()=>{let e=this.ngClasses();this.updateClasses(e)})}updateClasses(e){let i=this.elementRef.nativeElement;i.className.split(" ").filter(l=>l.startsWith("ard-appearance-")).forEach(l=>this.renderer.removeClass(i,l)),e.forEach(l=>{this.renderer.addClass(i,l)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=Q({type:t,selectors:[["","ardKbd",""]],inputs:{appearance:[1,"ardKbdAppearance","appearance"]},standalone:!1})}}return t})(),Ve=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee]})}}return t})(),Lh=new R("ard-kbd-shortcut-defaults",{factory:()=>({})});var Si=(()=>{class t{constructor(){this._KBD_DEFAULTS=I(na),this._DEFAULTS=I(Lh),this.contentWrapper=Me("contentWrapperEl"),this.splitRegex=/[+, ]/,this.keys=m(void 0,{transform:e=>Ir(e,this.splitRegex)}),this.full=m(this._DEFAULTS.full??this._KBD_DEFAULTS.full,{transform:e=>M(e)});this.appearance=m(this._DEFAULTS.appearance??this._KBD_DEFAULTS.appearance),this.ngClasses=F(()=>[`ard-appearance-${this.appearance}`].join(" "))}ngAfterViewInit(){if(!this.keys()&&!this.contentWrapper()?.nativeElement.innerText)throw new Error("ARD-FT5040: Using <ard-kbd-shortcut> without specifying the [keys] field is not allowed.")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["ard-kbd-shortcut"]],viewQuery:function(i,n){i&1&&ke(n.contentWrapper,Zr,5),i&2&&ue()},inputs:{keys:[1,"keys"],full:[1,"full"],appearance:[1,"appearance"]},standalone:!1,ngContentSelectors:He,decls:6,vars:1,consts:[["contentWrapperEl",""],[1,"ard-kbd-shortcut",3,"ngClass"],[1,"ard-kbd-shortcut-content-wrapper"],[3,"appearance","full","key"]],template:function(i,n){if(i&1&&(Y(),o(0,"div",1),B(1,Np,2,4,null,null,G),a(),o(3,"div",2,0),L(5),a()),i&2){let l;h("ngClass",n.ngClasses()),d(),H((l=n.keys())!==null&&l!==void 0?l:(l=n.contentWrapper())==null||l.nativeElement==null||l.nativeElement.innerText==null?null:l.nativeElement.innerText.split(n.splitRegex))}},dependencies:[Ke,nt],styles:[`@layer ard-ui{.ard-kbd-shortcut{display:inline-block}.ard-kbd-shortcut-content-wrapper{display:none}}
`],encapsulation:2,changeDetection:0})}}return t})(),Di=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee,Ve]})}}return t})(),Bh={color:$n.Gold,max:5,value:0},h1=new R("ard-rating-display-defaults",{factory:()=>w({},Bh)});var Hh={Strong:"strong",Light:"light",Colorless:"colorless"},Uh={Rounded:"rounded",Sharp:"sharp"},Nh={Noop:"noop",Slice:"slice"},vs={TopLeft:"top-left",TopCenter:"top-center",TopRight:"top-right",CenterLeft:"center-left",Center:"center-center",CenterRight:"center-right",BottomLeft:"bottom-left",BottomCenter:"bottom-center",BottomRight:"bottom-right"};var Ks={Left:"left",Center:"center",Right:"right",Split:"split"},jh=$(w({},Ht),{options:[10,25,50],itemsPerPage:50,page:1,color:Fe.None,align:Ks.Split,compact:!1,useFirstLastButtons:!1,itemsPerPageText:"Items per page:",currentItemsFormatFn:({currentItemsFrom:t,currentItemsTo:r,totalItems:e})=>`${t} \u2013 ${r} of ${e}`}),f1=new R("ard-table-pagination-defaults",{factory:()=>w({},jh)});var qs=$(w({},Ht),{rowDisabledFrom:"disabled",rowBoldFrom:"bold",invertRowDisabled:!1,invertRowBold:!1,selectableRows:!1,maxSelectedItems:void 0,clickableRows:!1,caption:void 0,isLoading:!1,loadingProgress:0,loadingProgressBuffer:0,loadingBarMode:Ns.Determinate,loadingBarColor:Fe.Secondary,appearance:Hh.Strong,variant:Uh.Rounded,color:Fe.Primary,align:vs.CenterLeft,headerAlign:vs.CenterLeft,compact:!1,zebra:!1,stickyHeader:!1,paginated:!1,paginationStrategy:Nh.Noop,paginationOptions:[10,25,50],totalItems:void 0,paginationColor:Fe.None,paginationAlign:Ks.Split,itemsPerPageText:"Items per page:",currentItemsFormatFn:({currentItemsFrom:t,currentItemsTo:r,totalItems:e})=>`${t} \u2013 ${r} of ${e}`,pageFillRemaining:!1,paginationDisabled:!1,useFirstLastButtons:!1,itemsPerPage:50,page:1,treatDataSourceAsString:!1}),g1=new R("ard-table-defaults",{factory:()=>w({},qs)});var Yh=$(w({},qs),{separator:","}),_1=new R("ard-table-from-csv-defaults",{factory:()=>w({},Yh)});var $h={Outlined:"outlined",Raised:"raised"},zh={Rounded:"rounded",Sharp:"sharp"},Wh={appearance:$h.Raised,variant:zh.Rounded,actionButtonsAlign:Bn.Right},Kh=new R("ard-card-defaults",{factory:()=>w({},Wh)});var Qs=(()=>{class t{constructor(e,i){e.addClass(i.nativeElement,"ard-card-title")}static{this.\u0275fac=function(i){return new(i||t)(te(kt),te(ye))}}static{this.\u0275dir=Q({type:t,selectors:[["ard-card-title"],["","ard-card-title",""]],standalone:!1})}}return t})();var Gs=(()=>{class t{constructor(e,i){e.addClass(i.nativeElement,"ard-card-content")}static{this.\u0275fac=function(i){return new(i||t)(te(kt),te(ye))}}static{this.\u0275dir=Q({type:t,selectors:[["ard-card-content"],["","ard-card-content",""]],standalone:!1})}}return t})(),Xs=(()=>{class t{constructor(e,i){e.addClass(i.nativeElement,"ard-card-image")}static{this.\u0275fac=function(i){return new(i||t)(te(kt),te(ye))}}static{this.\u0275dir=Q({type:t,selectors:[["","ard-card-image",""]],standalone:!1})}}return t})();var qh=(()=>{class t{constructor(){this._DEFAULTS=I(Kh);this.appearance=m(this._DEFAULTS.appearance),this.variant=m(this._DEFAULTS.variant),this.ngClasses=F(()=>["ard-card",`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`].join(" "))}get _ngClassesHostAttribute(){return this.ngClasses()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=Q({type:t,selectors:[["","ard-card",""]],hostVars:2,hostBindings:function(i,n){i&2&&ve(n._ngClassesHostAttribute)},inputs:{appearance:[1,"appearance"],variant:[1,"variant"]},standalone:!1})}}return t})(),Zs=(()=>{class t extends qh{static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=ot(t)))(n||t)}})()}static{this.\u0275cmp=p({type:t,selectors:[["ard-card"]],standalone:!1,features:[_e],ngContentSelectors:He,decls:1,vars:0,template:function(i,n){i&1&&(Y(),L(0))},encapsulation:2,changeDetection:0})}}return t})(),Js=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee]})}}return t})(),Qh={Full:"full",Middle:"middle"},Gh={vertical:!1,variant:Qh.Full,flexItem:!1,textAlign:dm.Center},v1=new R("ard-divider-defaults",{factory:()=>w({},Gh)});var Xh={xs:"0rem",sm:"36rem",md:"48rem",lg:"64rem",xl:"80rem","2xl":"96rem"},y1=new R("ard-breakpoints",{factory:()=>Zh(Xh)});function Zh(t){let r=new Map,e=null,i=Object.entries(t).map(n=>{let[l,c]=n;if(c===void 0)return null;let[,u,x]=c.match(/(\d+)(\w+)/)||[],O=Number(u);if(isNaN(O)||!x)return console.warn(`ARD-WA-G00: Invalid breakpoint format for ${l}: ${c}`),null;if(!e)e=x;else if(x!==e)return console.warn(`ARD-WA-G01: All breakpoints must use the same unit. Expected "${e}" but got "${x}" for breakpoint "${l}"`),null;return O<0?(console.warn(`ARD-WA-G02: Breakpoint values must be non-negative. Invalid value for ${l}: ${c}`),null):[l,{amount:O,unit:x}]}).filter(n=>n!==null).sort((n,l)=>n[1].amount-l[1].amount);for(let n=0;n<i.length;n++){let[l,{amount:c,unit:u}]=i[n],x=`(min-width: ${c}${u})`,O=i[n+1];if(!O){r.set(x,l);continue}let[,{amount:k,unit:q}]=O,D=`(max-width: ${k-.01}${q})`,P=n===i.length-1?x:`${x} and ${D}`;r.set(P,l)}return r}var el={Grow:"grow",Auto:"auto"},C1=new Set(Object.values(el));var tl={Start:"flex-start",End:"flex-end",Center:"center",SpaceBetween:"space-between",SpaceAround:"space-around",SpaceEvenly:"space-evenly"},b1=new Set(Object.values(tl));var il={Start:"flex-start",End:"flex-end",Center:"center"},x1=new Set(Object.values(il));var nl={Wrap:"wrap",NoWrap:"nowrap",WrapReverse:"wrap-reverse"},w1=new Set(Object.values(nl));var Jh={Row:"row",RowReverse:"row-reverse",Column:"column",ColumnReverse:"column-reverse"},T1=new Set(Object.values(Jh));var ef={columns:12,size:el.Grow,reverse:!1,justifyContent:tl.Start,alignItems:il.Start,spacing:3,columnSpacing:null,rowSpacing:null,wrap:nl.Wrap},S1=new R("ard-grid-defaults",{factory:()=>w({},ef)});var tf={tabDisabled:!1,tabPointerEventsWhenDisabled:!1,color:Fe.Primary,stretchTabs:!1,uniformTabWidths:!1,tabAlignment:Bn.Left,tabIndex:0},rl=new R("ard-tabber-defaults",{factory:()=>w({},tf)});var xt=(()=>{class t{constructor(){this._DEFAULTS=I(rl),this.disabled=m(this._DEFAULTS.tabDisabled,{transform:e=>M(e)}),this.pointerEventsWhenDisabled=m(this._DEFAULTS.tabPointerEventsWhenDisabled,{transform:e=>M(e)}),this.tabTitle=m(""),this.selected=E(!1),this.focused=E(!1),this._label=m(null,{alias:"label"}),this.label=F(()=>this._label()??this.tabId()),this._isTabIdInitialized=!1,this.tabId=m.required({transform:e=>(this._isTabIdInitialized=!0,e)}),this.focusEvent=ne({alias:"focus"}),this.blurEvent=ne({alias:"blur"}),this.selectedChange=ne(),this.selectedChangeInternal$=new Ue,this._selectedChangeSub=this.selectedChangeInternal$.subscribe(this.selectedChange.emit)}set _selected(e){this.selected.set(M(e))}setSelected(e){this.selected.set(e),this._emitChange()}_emitChange(){this.selectedChangeInternal$.next(this.selected())}ngOnDestroy(){this._selectedChangeSub.unsubscribe(),this.selectedChangeInternal$.complete()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["ard-tab"]],hostAttrs:["role","tabpanel"],hostVars:4,hostBindings:function(i,n){i&2&&ie("ard-tab-disabled",n.disabled())("ard-tab-selected",n.selected())},inputs:{disabled:[1,"disabled"],pointerEventsWhenDisabled:[1,"pointerEventsWhenDisabled"],tabTitle:[1,"tabTitle"],_selected:[0,"selected","_selected"],_label:[1,"label","_label"],tabId:[1,"tabId"]},outputs:{focusEvent:"focus",blurEvent:"blur",selectedChange:"selectedChange"},standalone:!1,ngContentSelectors:He,decls:1,vars:0,template:function(i,n){i&1&&(Y(),L(0))},styles:[`@layer ard-ui{ard-tab{display:block}}
`],encapsulation:2,changeDetection:0})}}return t})(),Vn=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(te(xe))}}static{this.\u0275dir=Q({type:t,selectors:[["ng-template","ard-tabber-label-tmp",""]],standalone:!1})}}return t})(),$t=(()=>{class t{constructor(){this._DEFAULTS=I(rl),this.tabs=vt(xt,{descendants:!0}),this.selectedTabId=_t(null,{alias:"selectedTab"}),this.selectedTab=F(()=>this.tabs().find(e=>e.tabId()===this.selectedTabId())??null),this.focusedTabId=E(null),this.focusedTab=F(()=>this.tabs().find(e=>e.tabId()===this.focusedTabId())??null),this._selectedTabIdToCheck=null,this.initialTab=m(void 0),this.focusEvent=ne({alias:"focus"}),this.blurEvent=ne({alias:"blur"});this.color=m(this._DEFAULTS.color),this.ngClasses=F(()=>[`ard-color-${this.color()}`].join(" "));this.stretchTabs=m(this._DEFAULTS.stretchTabs,{transform:e=>M(e)}),this.uniformTabWidths=m(this._DEFAULTS.uniformTabWidths,{transform:e=>M(e)}),this.tabAlignment=m(this._DEFAULTS.tabAlignment),this.tabContainerClasses=F(()=>[this.uniformTabWidths()&&!this.stretchTabs()?"ard-uniform-tab-widths":"",this.stretchTabs()?"ard-stretch-tabs":"",this.stretchTabs()?"":`ard-tab-align-${this.tabAlignment()}`].join(" "));this.tabIndex=m(0);this.labelTemplate=Oe(Vn),this.tabsWithTemplates=F(()=>this.tabs().map(e=>({tab:e,template:typeof e.label()=="string"?null:e.label(),templateContext:typeof e.label()=="string"?{$implicit:e.label(),tabId:e.tabId(),label:e.label()}:null})))}ngOnChanges(e){if(e.selectedTabId){let i=e.selectedTabId.currentValue;if(this.tabs().some(n=>!n._isTabIdInitialized))this._selectedTabIdToCheck=i;else{let n=e.selectedTabId.previousValue;this._validateSelectedTabId(i,n)}}}_validateSelectedTabId(e,i){if(e!==null){let n=this.tabs().find(l=>l._isTabIdInitialized&&l.tabId()===e);if(!n){console.error(`ARD-NF6000: Trying to select a tab with id '${e}' that does not exist.`);return}if(i!==null){let l=this.tabs().find(c=>c._isTabIdInitialized&&c.tabId()===i);l&&this._unselectSpecificTab(l)}this._selectNewTab(n)}}ngAfterContentInit(){let e=null;for(let i of this.tabs())i.selected()&&(e&&i.selected.set(!1),e=i),i.focusEvent.subscribe(()=>{this.focusEvent.emit(i.tabId())}),i.blurEvent.subscribe(()=>{this.blurEvent.emit(i.tabId())}),i.selectedChangeInternal$.subscribe(n=>{if(!n){this.selectedTabId.set(null);return}this.selectTab(i)});this._selectedTabIdToCheck!==null&&(this._validateSelectedTabId(this._selectedTabIdToCheck,null),this._selectedTabIdToCheck=null),e||(e=this.tabs().find(n=>n.tabId()===this.initialTab())??this.tabs()[0]??null,e&&e.selected.set(!0)),this.selectedTabId.set(e.tabId())}selectTab(e){e.tabId()===this.selectedTabId()||e.disabled()||(this._unselectCurrentTab(e),this.selectedTabId.set(e.tabId()),this._selectNewTab(e))}_unselectSpecificTab(e){e.selected.set(!1),e.selectedChange.emit(!1)}_unselectCurrentTab(e){let i=this.selectedTab();i&&(!e||i.tabId()!==e.tabId())&&this._unselectSpecificTab(i)}_selectNewTab(e){e.selected.set(!0),e.selectedChange.emit(!0)}onTabFocus(e){e.focusEvent.emit(),e.focused.set(!0),this.focusedTabId.set(e.tabId())}onTabBlur(e){e.blurEvent.emit(),e.focused.set(!1),this.focusedTabId.set(null)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["ard-tabber"]],contentQueries:function(i,n,l){i&1&&(he(l,n.tabs,xt,5),he(l,n.labelTemplate,Vn,5)),i&2&&ue(2)},inputs:{selectedTabId:[1,"selectedTab","selectedTabId"],initialTab:[1,"initialTab"],color:[1,"color"],stretchTabs:[1,"stretchTabs"],uniformTabWidths:[1,"uniformTabWidths"],tabAlignment:[1,"tabAlignment"],tabIndex:[1,"tabIndex"]},outputs:{selectedTabId:"selectedTabChange",focusEvent:"focus",blurEvent:"blur"},standalone:!1,features:[Tt],ngContentSelectors:He,decls:6,vars:6,consts:[["focusableElement",""],["defaultLabelTemplate",""],[1,"ard-tabber",3,"ngClass"],[1,"ard-tabber-tabs",3,"ngClass"],["type","button","role","tab",1,"ard-tab-button",3,"id","ard-tab-disabled","ard-tab-with-pointer-events-when-disabled","ard-tab-active","ard-tab-focused","title","tabindex"],["role","tabpanel",1,"ard-tabber-content"],["type","button","role","tab",1,"ard-tab-button",3,"click","focus","blur","id","title","tabindex"],[1,"ard-focus-overlay"],[1,"ard-button-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&(Y(),o(0,"div",2)(1,"div",3),B(2,zp,7,13,"button",4,Et),a(),o(4,"div",5),L(5),a()()),i&2&&(h("ngClass",n.ngClasses()),d(),Se(Ce(4,jp,n.tabs().length)),h("ngClass",n.tabContainerClasses()),d(),H(n.tabsWithTemplates()))},dependencies:[Ke,Ne],styles:[`@layer ard-ui{ard-tabber{display:block}.ard-tabber ard-tab{display:none}.ard-tabber ard-tab.ard-tab-selected{display:block}.ard-tabber .ard-tabber-tabs.ard-uniform-tab-widths{display:grid;grid-template-columns:repeat(var(--ard-_tabber-tabs),1fr);max-width:max-content}}
`],encapsulation:2,changeDetection:0})}}return t})(),zt=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee]})}}return t})(),al={appearance:om.Raised,variant:Es.Rounded,compact:!1,heading:"",noCloseButton:!1,noBackdrop:!1,disableBackdropClose:!1,panelClass:"",backdropClass:""},nf=new R("ard-modal-defaults",{factory:()=>w({},al)});var Xr={NoOp:"no-op",AutoClose:"autoclose"},rf=$(w({},al),{confirmButtonText:"Confirm",confirmButtonColor:Fe.Primary,confirmButtonAppearance:qi.RaisedStrong,rejectButtonText:"Cancel",rejectButtonColor:Fe.None,rejectButtonAppearance:qi.Transparent,noRejectButton:!1,canConfirm:!0,buttonActionType:Xr.AutoClose}),af=new R("ard-dialog-defaults",{factory:()=>w({},rf)});var ys=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(te(xe))}}static{this.\u0275dir=Q({type:t,selectors:[["ng-template","ard-buttons-tmp",""]],standalone:!1})}}return t})(),Cs=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(te(xe))}}static{this.\u0275dir=Q({type:t,selectors:[["ng-template","ard-close-icon-tmp",""]],standalone:!1})}}return t})(),bs=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(te(xe))}}static{this.\u0275dir=Q({type:t,selectors:[["ng-template","ard-close-icon-tmp",""]],standalone:!1})}}return t})(),ra=(()=>{class t{constructor(){this.overlay=I(Ci),this.scrollStrategyOpts=I(Dn),this.viewContainerRef=I(Dt),this._DEFAULTS=I(nf);this.appearance=m(this._DEFAULTS.appearance),this.variant=m(this._DEFAULTS.variant),this.compact=m(this._DEFAULTS.compact,{transform:e=>M(e)}),this.ngClasses=F(()=>[`ard-variant-${this.variant()}`,`ard-appearance-${this.appearance()}`,this.compact()?"ard-compact":""].join(" "));this.heading=m(this._DEFAULTS.heading),this.noCloseButton=m(this._DEFAULTS.noCloseButton,{transform:e=>M(e)}),this.panelClass=m(this._DEFAULTS.panelClass),this.backdropClass=m(this._DEFAULTS.backdropClass);this.noBackdrop=m(this._DEFAULTS.noBackdrop,{transform:e=>M(e)}),this.disableBackdropClose=m(this._DEFAULTS.disableBackdropClose,{transform:e=>M(e)}),this.allActionsDisabled=m(!1,{transform:e=>M(e)});this.open=E(!1),this.openChange=ne(),this.closeEvent=ne({alias:"close"});this.modalTemplate=Me("modalTemplate",{read:xe});this.closeIconTemplate=Oe(bs),this._closeIconTemplate=m(void 0)}set _open(e){this.open.set(M(e)),this.open()?this._openOverlay():this._destroyOverlay()}openProgrammatically(){this.open.set(!0)}closeProgrammatically(){this.open.set(!1)}_openOverlay(){let e=this.overlay.position().global(),i=new $i({positionStrategy:e,scrollStrategy:this.scrollStrategyOpts.block(),hasBackdrop:!1});this._modalOverlay=this.overlay.create(i);let n=new yi(this.modalTemplate(),this.viewContainerRef);this._modalOverlay.attach(n)}_destroyOverlay(){this._modalOverlay&&(this.openChange.emit(!1),this.closeEvent.emit(),this._modalOverlay.dispose(),delete this._modalOverlay)}onBackdropClick(){this.disableBackdropClose()||this.allActionsDisabled()||this._destroyOverlay()}onCloseButtonClick(){this.allActionsDisabled()||this._destroyOverlay()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["ard-modal"]],contentQueries:function(i,n,l){i&1&&he(l,n.closeIconTemplate,bs,5),i&2&&ue()},viewQuery:function(i,n){i&1&&ke(n.modalTemplate,Wp,5,xe),i&2&&ue()},inputs:{appearance:[1,"appearance"],variant:[1,"variant"],compact:[1,"compact"],heading:[1,"heading"],noCloseButton:[1,"noCloseButton"],panelClass:[1,"panelClass"],backdropClass:[1,"backdropClass"],noBackdrop:[1,"noBackdrop"],disableBackdropClose:[1,"disableBackdropClose"],allActionsDisabled:[1,"allActionsDisabled"],_open:[0,"open","_open"],_closeIconTemplate:[1,"_closeIconTemplate"]},outputs:{openChange:"openChange",closeEvent:"close"},standalone:!1,ngContentSelectors:He,decls:4,vars:0,consts:[["modalTemplate",""],["_modalInsidePanel",""],["defaultCloseIconTemplate",""],[1,"ard-modal",3,"ngClass"],[1,"ard-modal","ard-modal-backdrop",3,"ngClass"],[1,"ard-modal",3,"click","ngClass"],[3,"ngTemplateOutlet"],[1,"ard-modal","ard-modal-backdrop",3,"click","ngClass"],["cdkTrapFocus","",1,"ard-modal-panel",3,"click","ngClass"],[1,"ard-modal-heading"],[1,"ard-modal-heading-text"],["color","none",1,"ard-modal-close-button",3,"compact","disabled"],[1,"ard-modal-content"],["color","none",1,"ard-modal-close-button",3,"click","compact","disabled"]],template:function(i,n){i&1&&(Y(),g(0,Xp,2,1,"ng-template",null,0,oe)(2,tm,7,7,"ng-template",null,1,oe))},dependencies:[Ke,Ne,$e,ce,os],styles:[`.ard-modal-content{width:100%}
`],encapsulation:2,changeDetection:0})}}return t})(),Ei=(()=>{class t{constructor(){this._DEFAULTS=I(af);this.appearance=m(this._DEFAULTS.appearance),this.variant=m(this._DEFAULTS.variant),this.compact=m(this._DEFAULTS.compact,{transform:e=>M(e)});this.heading=m(this._DEFAULTS.heading),this.noCloseButton=m(this._DEFAULTS.noCloseButton,{transform:e=>M(e)}),this.panelClass=m(this._DEFAULTS.panelClass),this.backdropClass=m(this._DEFAULTS.backdropClass);this.noBackdrop=m(this._DEFAULTS.noBackdrop,{transform:e=>M(e)}),this.disableBackdropClose=m(this._DEFAULTS.disableBackdropClose,{transform:e=>M(e)}),this.buttonActionType=m(this._DEFAULTS.buttonActionType),this.allActionsDisabled=m(!1,{transform:e=>M(e)});this.open=_t(!1),this.closeEvent=ne({alias:"close"}),this.confirmEvent=ne({alias:"confirm"}),this.rejectEvent=ne({alias:"reject"});this.confirmButtonText=m(this._DEFAULTS.confirmButtonText),this.confirmButtonColor=m(this._DEFAULTS.confirmButtonColor),this.confirmButtonAppearance=m(this._DEFAULTS.confirmButtonAppearance),this.confirmButtonPointerEventsWhenDisabled=m(!1,{transform:e=>M(e)}),this.rejectButtonText=m(this._DEFAULTS.rejectButtonText),this.rejectButtonColor=m(this._DEFAULTS.rejectButtonColor),this.rejectButtonAppearance=m(this._DEFAULTS.rejectButtonAppearance),this.noRejectButton=m(this._DEFAULTS.noRejectButton,{transform:e=>M(e)}),this.canConfirm=m(this._DEFAULTS.canConfirm,{transform:e=>M(e)}),this._isCloseEventTimeoutRunning=!1;this.buttonsTemplate=Oe(ys),this.closeIconTemplate=Oe(Cs),this.getButtonsContext=F(()=>({confirmButton:{text:this.confirmButtonText(),color:this.confirmButtonColor(),appearance:this.confirmButtonAppearance(),pointerEventsWhenDisabled:this.confirmButtonPointerEventsWhenDisabled()},rejectButton:{enabled:!this.noRejectButton(),text:this.rejectButtonText(),color:this.rejectButtonColor(),appearance:this.rejectButtonAppearance()},canConfirm:this.canConfirm(),allActionsDisabled:this.allActionsDisabled(),onConfirm:()=>this.onConfirmClick(),onReject:()=>this.onRejectClick(),dialogAppearance:this.appearance(),dialogVariant:this.variant(),dialogCompact:this.compact()}))}openProgrammatically(){this.open.set(!0)}closeProgrammatically(){this.open.set(!1)}onConfirmClick(){!this.canConfirm()||this.allActionsDisabled()||(this._isCloseEventTimeoutRunning=!0,this.buttonActionType()===Xr.AutoClose&&this.open.set(!1),setTimeout(()=>{this._isCloseEventTimeoutRunning=!1,this.confirmEvent.emit(),this.closeEvent.emit("confirm")},0))}onRejectClick(){this.allActionsDisabled()||(this._isCloseEventTimeoutRunning=!0,this.buttonActionType()===Xr.AutoClose&&this.open.set(!1),setTimeout(()=>{this._isCloseEventTimeoutRunning=!1,this.rejectEvent.emit(),this.closeEvent.emit("reject")},0))}onModalClose(){this._isCloseEventTimeoutRunning||this.closeEvent.emit("close")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["ard-dialog"]],contentQueries:function(i,n,l){i&1&&(he(l,n.buttonsTemplate,ys,5),he(l,n.closeIconTemplate,Cs,5)),i&2&&ue(2)},inputs:{appearance:[1,"appearance"],variant:[1,"variant"],compact:[1,"compact"],heading:[1,"heading"],noCloseButton:[1,"noCloseButton"],panelClass:[1,"panelClass"],backdropClass:[1,"backdropClass"],noBackdrop:[1,"noBackdrop"],disableBackdropClose:[1,"disableBackdropClose"],buttonActionType:[1,"buttonActionType"],allActionsDisabled:[1,"allActionsDisabled"],open:[1,"open"],confirmButtonText:[1,"confirmButtonText"],confirmButtonColor:[1,"confirmButtonColor"],confirmButtonAppearance:[1,"confirmButtonAppearance"],confirmButtonPointerEventsWhenDisabled:[1,"confirmButtonPointerEventsWhenDisabled"],rejectButtonText:[1,"rejectButtonText"],rejectButtonColor:[1,"rejectButtonColor"],rejectButtonAppearance:[1,"rejectButtonAppearance"],noRejectButton:[1,"noRejectButton"],canConfirm:[1,"canConfirm"]},outputs:{open:"openChange",closeEvent:"close",confirmEvent:"confirm",rejectEvent:"reject"},standalone:!1,ngContentSelectors:He,decls:8,vars:14,consts:[["defaultButtonsTemplate",""],[3,"openChange","close","appearance","variant","compact","heading","noCloseButton","panelClass","backdropClass","noBackdrop","disableBackdropClose","allActionsDisabled","open","_closeIconTemplate"],[1,"ard-dialog-container"],[1,"ard-dialog-content"],[1,"ard-dialog-buttons"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ard-dialog-buttons-container"],[3,"color","appearance","variant","compact","disabled"],[3,"click","color","appearance","variant","compact","disabled","pointerEventsWhenDisabled"],[3,"click","color","appearance","variant","compact","disabled"]],template:function(i,n){if(i&1){let l=j();Y(),o(0,"ard-modal",1),K("openChange",function(u){return T(l),W(n.open,u)||(n.open=u),S(u)}),_("close",function(){return T(l),S(n.onModalClose())}),o(1,"div",2)(2,"div",3),L(3),a(),o(4,"div",4),g(5,nm,4,8,"ng-template",null,0,oe)(7,rm,0,0,"ng-template",5),a()()()}if(i&2){let l,c=V(6);h("appearance",n.appearance())("variant",n.variant())("compact",n.compact())("heading",n.heading())("noCloseButton",n.noCloseButton())("panelClass",n.panelClass())("backdropClass",n.backdropClass())("noBackdrop",n.noBackdrop())("disableBackdropClose",n.disableBackdropClose())("allActionsDisabled",n.allActionsDisabled()),z("open",n.open),h("_closeIconTemplate",n.closeIconTemplate()),d(7),h("ngTemplateOutlet",(l=(l=n.buttonsTemplate())==null?null:l.template)!==null&&l!==void 0?l:c)("ngTemplateOutletContext",n.getButtonsContext())}},dependencies:[Ne,ge,ra],encapsulation:2,changeDetection:0})}}return t})(),aa=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee,ze,re,ss]})}}return t})(),Ai=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee,me,aa]})}}return t})();var D1=new R("ArdSnackbarData"),E1=new R("ArdSnackbarColor"),A1=new R("ArdSnackbarType");var of={TopLeft:"top-left",TopCenter:"top-center",TopRight:"top-right",BottomLeft:"bottom-left",BottomCenter:"bottom-center",BottomRight:"bottom-right"},sf={Inside:"inside",Outside:"outside"},lf={Default:"default",Skip:"skip",Overwrite:"overwrite"},df={None:"none",Danger:"danger",Warning:"warn",Success:"success",Info:"info"};var cf={placement:{align:of.BottomCenter,origin:document.body,originRelation:sf.Inside},duration:5e3,queueHandling:lf.Default,panelClass:[],data:{message:""},color:Fe.Primary,type:df.None},F1=new R("ard-snackbar-defaults",{factory:()=>w({},cf)});var I1=new R("ard-snackbar-animation-length",{factory:()=>150});var P1={name:"$$$",description:"$$$",type:"boolean-like",default:"false",required:!1};function V1(t,r=je.Outlined,e){return{name:e??"appearance",description:t,type:"FormElementAppearance",default:`'${r}'`}}function ol(t,r){let e=new Map;for(let i of t){let n=r(i);e.has(n)||e.set(n,[]),e.get(n).push(i)}return Array.from(e.entries()).map(([i,n])=>({group:i,children:n}))}var ll=Pi(oa());var uf={offset:"30%",noHighlight:!1,behavior:"smooth"};function Fi(t,r={}){let{offset:e,noHighlight:i,behavior:n}=w(w({},uf),r);console.log("scrollTo called with tagQuery:",t);let l=document.querySelector(t);if(!l){let k=t.charAt(0);t=(0,ll.kebab)(t.replace(/[^\w\- ]/gi,"")),/[^a-zA-Z0-9]/.test(k)&&(t=k+t),l=document.querySelector(t)}if(!l){console.warn(`Element not found for selector: ${t}`);return}let u=l.getBoundingClientRect().top+window.scrollY,x=0;if(typeof e=="string"&&e.endsWith("%")){let k=parseFloat(e);isNaN(k)||(x=k/100*window.innerHeight)}else typeof e=="number"&&(x=e);let O=u-x;window.scrollTo({top:O,behavior:n}),!i&&(l.classList.add("scrolled-to"),setTimeout(()=>{l.classList.remove("scrolled-to")},3e3))}var da=new R("HIGHLIGHT_OPTIONS");function Z1(t){return[{provide:da,useValue:t}]}var Ii=function(t){return t.FULL_WITH_CORE_LIBRARY_IMPORTS="The full library and the core library were imported, only one of them should be imported!",t.FULL_WITH_LANGUAGE_IMPORTS="The highlighting languages were imported they are not needed!",t.CORE_WITHOUT_LANGUAGE_IMPORTS="The highlighting languages were not imported!",t.LANGUAGE_WITHOUT_CORE_IMPORTS="The core library was not imported!",t.NO_FULL_AND_NO_CORE_IMPORTS="Highlight.js library was not imported!",t}(Ii||{}),pf=(()=>{class t{constructor(){this.document=I(De),this.isPlatformBrowser=Ui(I(Vi)),this.options=I(da,{optional:!0}),this._ready=new gt(null),this.ready=ir(this._ready.asObservable().pipe(at(e=>!!e))),this.isPlatformBrowser&&(this.document.defaultView.hljs?this._ready.next(this.document.defaultView.hljs):this._loadLibrary().pipe(on(e=>this.options?.lineNumbersLoader?(this.document.defaultView.hljs=e,this.loadLineNumbers().pipe(ar(i=>{i.activateLineNumbers(),this._ready.next(e)}))):(this._ready.next(e),er)),ya(e=>(console.error("[HLJS] ",e),this._ready.error(e),er))).subscribe(),this.options?.themePath&&this.loadTheme(this.options.themePath))}_loadLibrary(){if(this.options){if(this.options.fullLibraryLoader&&this.options.coreLibraryLoader)return ri(()=>Ii.FULL_WITH_CORE_LIBRARY_IMPORTS);if(this.options.fullLibraryLoader&&this.options.languages)return ri(()=>Ii.FULL_WITH_LANGUAGE_IMPORTS);if(this.options.coreLibraryLoader&&!this.options.languages)return ri(()=>Ii.CORE_WITHOUT_LANGUAGE_IMPORTS);if(!this.options.coreLibraryLoader&&this.options.languages)return ri(()=>Ii.LANGUAGE_WITHOUT_CORE_IMPORTS);if(this.options.fullLibraryLoader)return this.loadFullLibrary();if(this.options.coreLibraryLoader&&this.options.languages&&Object.keys(this.options.languages).length)return this.loadCoreLibrary().pipe(on(e=>this._loadLanguages(e)))}return ri(()=>Ii.NO_FULL_AND_NO_CORE_IMPORTS)}_loadLanguages(e){let i=Object.entries(this.options.languages).map(([n,l])=>sa(l()).pipe(ar(c=>e.registerLanguage(n,c))));return _a(i).pipe(Re(()=>e))}loadCoreLibrary(){return sa(this.options.coreLibraryLoader())}loadFullLibrary(){return sa(this.options.fullLibraryLoader())}loadLineNumbers(){return tr(this.options.lineNumbersLoader())}setTheme(e){this.isPlatformBrowser&&(this._themeLinkElement?this._themeLinkElement.href=e:this.loadTheme(e))}loadTheme(e){this._themeLinkElement=this.document.createElement("link"),this._themeLinkElement.href=e,this._themeLinkElement.type="text/css",this._themeLinkElement.rel="stylesheet",this._themeLinkElement.media="screen,print",this.document.head.appendChild(this._themeLinkElement)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),sa=t=>tr(t).pipe(at(r=>!!r?.default),Re(r=>r.default)),mf=(()=>{class t{constructor(){this.loader=I(pf),this.options=I(da,{optional:!0}),this.hljsSignal=E(null),this.hljs=F(()=>this.hljsSignal()),this.loader.ready.then(e=>{this.hljsSignal.set(e),this.options?.highlightOptions&&e.configure(this.options.highlightOptions)})}highlight(e,i){return Ie(this,null,function*(){return(yield this.loader.ready).highlight(e,i)})}highlightAuto(e,i){return Ie(this,null,function*(){return(yield this.loader.ready).highlightAuto(e,i)})}highlightElement(e){return Ie(this,null,function*(){(yield this.loader.ready).highlightElement(e)})}highlightAll(){return Ie(this,null,function*(){(yield this.loader.ready).highlightAll()})}configure(e){return Ie(this,null,function*(){(yield this.loader.ready).configure(e)})}registerLanguage(e,i){return Ie(this,null,function*(){(yield this.loader.ready).registerLanguage(e,i)})}unregisterLanguage(e){return Ie(this,null,function*(){(yield this.loader.ready).unregisterLanguage(e)})}registerAliases(n,l){return Ie(this,arguments,function*(e,{languageName:i}){(yield this.loader.ready).registerAliases(e,{languageName:i})})}listLanguages(){return Ie(this,null,function*(){return(yield this.loader.ready).listLanguages()})}getLanguage(e){return Ie(this,null,function*(){return(yield this.loader.ready).getLanguage(e)})}safeMode(){return Ie(this,null,function*(){(yield this.loader.ready).safeMode()})}debugMode(){return Ie(this,null,function*(){(yield this.loader.ready).debugMode()})}lineNumbersBlock(e,i){return Ie(this,null,function*(){let n=yield this.loader.ready;n.lineNumbersBlock&&n.lineNumbersBlock(e,i)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),la;function hf(){if(!la)try{la=window?.trustedTypes?.createPolicy("ngx-highlightjs",{createHTML:t=>t})}catch{}return la}function ff(t){return hf()?.createHTML(t)||t}var dl=(()=>{class t{constructor(){this._hljs=I(mf),this._nativeElement=I(ye).nativeElement,this._sanitizer=I(Oa),this._platform=I(Vi),Ui(this._platform)&&(de(()=>{let e=this.code();this.setTextContent(e||""),e&&this.highlightElement(e)}),de(()=>{let e=this.highlightResult();this.setInnerHTML(e?.value),this.highlighted.emit(e)}))}setTextContent(e){requestAnimationFrame(()=>this._nativeElement.textContent=e)}setInnerHTML(e){requestAnimationFrame(()=>this._nativeElement.innerHTML=ff(this._sanitizer.sanitize(Aa.HTML,e)||""))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=Q({type:t,standalone:!1})}}return t})(),cl=(()=>{class t extends dl{constructor(){super(...arguments),this.code=m(null,{alias:"highlight"}),this.highlightResult=E(null),this.highlighted=new qt}highlightElement(e){return Ie(this,null,function*(){let i=yield this._hljs.highlight(e,{language:this.language,ignoreIllegals:this.ignoreIllegals});this.highlightResult.set(i)})}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=ot(t)))(n||t)}})()}static{this.\u0275dir=Q({type:t,selectors:[["","highlight",""]],hostVars:2,hostBindings:function(i,n){i&2&&ie("hljs",!0)},inputs:{code:[1,"highlight","code"],language:"language",ignoreIllegals:[2,"ignoreIllegals","ignoreIllegals",ci]},outputs:{highlighted:"highlighted"},features:[Je([{provide:dl,useExisting:t}]),Qt,_e]})}}return t})();var Mi=(()=>{class t{constructor(){this.language=m.required(),this.code=m(""),this.styled=m(!1,{transform:e=>it(e)}),this.noScroll=m(!1,{transform:e=>it(e)}),this.langClass=F(()=>`lang-${this.language()}`)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-code"]],inputs:{language:[1,"language"],code:[1,"code"],styled:[1,"styled"],noScroll:[1,"noScroll"]},decls:3,vars:8,consts:[[3,"highlight","language"]],template:function(i,n){i&1&&(o(0,"pre"),C(1,"code",0),s(2,`
`),a()),i&2&&(ie("styled",n.styled())("no-scroll",n.noScroll()),d(),ve(n.langClass()),h("highlight",n.code())("language",n.language()))},dependencies:[cl],styles:["pre[_ngcontent-%COMP%]{padding:1.25rem;max-width:100%;overflow:auto}.styled[_ngcontent-%COMP%]{border-radius:.5rem;border:1px solid var(--ard-detail-ultralight);margin:1.25rem 0}.no-scroll[_ngcontent-%COMP%]{max-width:max-content;overflow:initial}"]})}}return t})();var pl=Pi(oa());var gf=["idLink","","id",""],_f=["*"],ul=(()=>{class t{constructor(){this.router=I(pn)}onClick(e){let i=e.target.parentElement;if(i){for(;!i.id;)if(i=i.parentElement,!i)return;Fi("#"+i.id,{offset:96,noHighlight:!0}),this.router.navigate([],{fragment:i.id})}}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["","idLink","","id",""],["h1","id",""],["h2","id",""],["h3","id",""],["h4","id",""],["h5","id",""],["h6","id",""]],attrs:gf,ngContentSelectors:_f,decls:4,vars:0,consts:[["color","none",3,"click"]],template:function(i,n){i&1&&(Y(),o(0,"ard-icon-button",0),_("click",function(c){return n.onClick(c)}),o(1,"ard-icon"),s(2,"tag"),a()(),L(3))},dependencies:[ze,$e,re,ce],styles:["[_nghost-%COMP%]{position:relative}ard-icon-button[_ngcontent-%COMP%]{opacity:0;appearance:none;position:absolute;right:100%;top:50%;transform:translateY(-50%);font-size:.625em}ard-icon-button[_ngcontent-%COMP%]   ard-icon[_ngcontent-%COMP%]{color:var(--ard-text3)}[_nghost-%COMP%]:hover   ard-icon-button[_ngcontent-%COMP%]{opacity:1;appearance:auto}"]})}}return t})();var vf=["appAutoId",""],yf=["*"],Ft=(()=>{class t{ngAfterViewInit(){this._wasViewInit=!0,this._setElementId()}constructor(){this.elementRef=I(ye),this.autoIdActive=m(!1,{transform:e=>it(e),alias:"appAutoId"}),this.forcedId=m(null),this.idPrefix=m("",{transform:this._toKebab}),this.idText=E(""),this._wasViewInit=!1,de(()=>{this._setElementId()})}_toKebab(e){return(0,pl.kebab)(e.replace(/[\s\.]+/g," ").replace(/[^\w\- ]/gi,""))}_setElementId(){if(this._wasViewInit)return;let i=this.elementRef.nativeElement.innerText.replace(/tag\x0A/,"");i&&this.idText.set(this._toKebab(i))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["","appAutoId",""]],inputs:{autoIdActive:[1,"appAutoId","autoIdActive"],forcedId:[1,"forcedId"],idPrefix:[1,"idPrefix"]},attrs:vf,ngContentSelectors:yf,decls:2,vars:1,consts:[["idLink","",3,"id"]],template:function(i,n){if(i&1&&(Y(),o(0,"div",0),L(1),a()),i&2){let l;h("id",(l=n.forcedId())!==null&&l!==void 0?l:n.idText())}},dependencies:[ul],encapsulation:2})}}return t})();var bf=["*"],ht=(()=>{class t{constructor(){this.htmlId=m(null),this.idPrefix=m("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-h1"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:bf,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(Y(),o(0,"h1",0),L(1),a()),i&2&&h("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return t})();var xf=["*"],Wt=(()=>{class t{constructor(){this.htmlId=m(null),this.idPrefix=m("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-h2"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:xf,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(Y(),o(0,"h2",0),L(1),a()),i&2&&h("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return t})();var wf=["*"],Kt=(()=>{class t{constructor(){this.htmlId=m(null),this.idPrefix=m("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-h3"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:wf,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(Y(),o(0,"h3",0),L(1),a()),i&2&&h("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return t})();var Tf=["*"],qn=(()=>{class t{constructor(){this.htmlId=m(null),this.idPrefix=m("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-h4"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:Tf,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(Y(),o(0,"h4",0),L(1),a()),i&2&&h("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return t})();var Df=["*"],Qn=(()=>{class t{constructor(){this.htmlId=m(null),this.idPrefix=m("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-h5"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:Df,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(Y(),o(0,"h5",0),L(1),a()),i&2&&h("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return t})();var Af=["*"],Gn=(()=>{class t{constructor(){this.htmlId=m(null),this.idPrefix=m("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-h6"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:Af,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(Y(),o(0,"h6",0),L(1),a()),i&2&&h("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return t})();var wt=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee,Ft]})}}return t})();Gt(ht,[Ft],[]);Gt(Wt,[Ft],[]);Gt(Kt,[Ft],[]);Gt(qn,[Ft],[]);Gt(Qn,[Ft],[]);Gt(Gn,[Ft],[]);var If=(t,r)=>r.name,It=(t,r)=>({$implicit:t,prefix:r}),Mf=(t,r)=>({$implicit:t,prefix:r,headingType:"h6",headingText:"Template Context"}),pa=t=>({$implicit:t}),kf=(t,r)=>({$implicit:t,headingType:"h5",prefix:r}),Pf=(t,r)=>({$implicit:t,isTypeParams:!0,headingType:"h4",prefix:r}),Vf=(t,r,e)=>({$implicit:t,headingType:r,prefix:e}),Rf=(t,r,e)=>({$implicit:t,isTypeParams:!0,headingType:r,prefix:e}),Of=(t,r)=>({$implicit:t,isTypeParams:!0,headingType:"h5",prefix:r}),ml=(t,r)=>({$implicit:t,headingType:"h6",prefix:r});function Lf(t,r){if(t&1&&C(0,"p",8),t&2){let e=f().$implicit;h("innerHTML",e.description,le)}}function Bf(t,r){if(t&1){let e=j();o(0,"a",9),_("click",function(){T(e);let n=f().$implicit,l=f(2);return S(l.scrollTo("#"+n.exports))}),o(1,"code"),s(2),a()()}if(t&2){let e=f().$implicit;d(2),v(e.exports)}}function Hf(t,r){t&1&&s(0),t&2&&v(", ")}function Uf(t,r){if(t&1){let e=j();o(0,"a",9),_("click",function(){let n=T(e).$implicit,l=f(4);return S(l.scrollTo("#"+n))}),o(1,"code"),s(2),a()(),g(3,Hf,1,1)}if(t&2){let e=r.$implicit,i=r.$index,n=f(2).$implicit;d(2),v(e),d(),y(i!==n.exports.length-1?3:-1)}}function Nf(t,r){if(t&1&&B(0,Uf,4,2,null,null,G),t&2){let e=f().$implicit;H(e.exports)}}function jf(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),g(4,Lf,1,1,"p",8),o(5,"p"),s(6," Exports: "),g(7,Bf,3,1,"a")(8,Nf,2,0),a()()),t&2){let e=r.$implicit,i=f(2);d(3),v(e.name),d(),y(e.description?4:-1),d(3),y(i.isString(e.exports)?7:8)}}function Yf(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Modules"),a(),B(3,jf,9,3,"div",7,G),a()),t&2){let e=f();d(3),H(e.data.modules)}}function $f(t,r){if(t&1&&C(0,"p",8),t&2){let e=f().$implicit;h("innerHTML",e.description,le)}}function zf(t,r){if(t&1){let e=j();s(0," Exported from: "),o(1,"a",9),_("click",function(){T(e);let n=f().$implicit,l=f(2);return S(l.scrollTo("#"+n.exportedFrom))}),o(2,"code"),s(3),a()()}if(t&2){let e=f().$implicit;d(3),v(e.exportedFrom)}}function Wf(t,r){t&1&&s(0," This component is standalone and needs to be imported separately. ")}function Kf(t,r){}function qf(t,r){if(t&1&&g(0,Kf,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(14);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Ae(2,It,e.inputs,e.name))}}function Qf(t,r){}function Gf(t,r){if(t&1&&g(0,Qf,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(16);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Ae(2,It,e.twoWayBindings,e.name))}}function Xf(t,r){}function Zf(t,r){if(t&1&&g(0,Xf,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(18);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Ae(2,It,e.outputs,e.name))}}function Jf(t,r){if(t&1&&C(0,"p",8),t&2){let e=f(3).$implicit;h("innerHTML",e.description,le)}}function eg(t,r){}function tg(t,r){if(t&1&&g(0,eg,0,0,"ng-template",10),t&2){let e=f().$implicit,i=f(2).$implicit;f(2);let n=V(22);h("ngTemplateOutlet",n)("ngTemplateOutletContext",Ae(2,Mf,e.context,i.name+"template"+e.name))}}function ig(t,r){if(t&1&&(o(0,"app-h6",11),s(1,"Template Context"),a(),o(2,"p"),s(3,"This template has no own context properties."),a()),t&2){let e=f().$implicit,i=f(2).$implicit;h("idPrefix",i.name+"template"+e.name)}}function ng(t,r){if(t&1&&(o(0,"app-h5",11),s(1),a(),g(2,Jf,1,1,"p",8),o(3,"p"),s(4," Selector: "),o(5,"code"),s(6),a()(),g(7,tg,1,5,null,10)(8,ig,4,1),o(9,"app-h6",11),s(10,"Default HTML Implementation"),a(),C(11,"app-code",12)),t&2){let e=r.$implicit,i=f(2).$implicit;h("idPrefix",i.name+"template"),d(),v(e.name),d(),y(e.description?2:-1),d(4),v(i.selector),d(),y(e.context!=null&&e.context.length?7:8),d(2),h("idPrefix",i.name+"template"+e.name),d(2),h("code",e.defaultHtmlContent)}}function rg(t,r){if(t&1&&(o(0,"app-h4",11),s(1,"Customization Templates"),a(),B(2,ng,12,7,null,null,If)),t&2){let e=f().$implicit;h("idPrefix",e.name),d(2),H(e.templates)}}function ag(t,r){t&1&&(o(0,"i"),s(1,"default"),a())}function og(t,r){if(t&1&&(o(0,"code"),s(1),a()),t&2){let e=f().$implicit;d(),v(e.selector)}}function sg(t,r){if(t&1&&(o(0,"tr")(1,"td"),g(2,ag,2,0,"i")(3,og,2,1,"code"),a(),o(4,"td"),C(5,"p",8),a()()),t&2){let e=r.$implicit;d(2),y(e.selector===null?2:3),d(3),h("innerHTML",e.description,le)}}function lg(t,r){if(t&1&&(o(0,"app-h4",11),s(1,"Content Children"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),s(6,"Selector"),a(),o(7,"th"),s(8,"Description"),a()()(),o(9,"tbody"),B(10,sg,6,2,"tr",null,G),a()()),t&2){let e=f().$implicit;h("idPrefix",e.name),d(10),H(e.contentChildren)}}function dg(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),g(4,$f,1,1,"p",8),o(5,"p"),s(6," Selector: "),o(7,"code"),s(8),a()(),o(9,"p"),g(10,zf,4,1)(11,Wf,1,0),a(),g(12,qf,1,5,null,10)(13,Gf,1,5,null,10)(14,Zf,1,5,null,10)(15,rg,4,1)(16,lg,12,1),a()),t&2){let e=r.$implicit;d(3),v(e.name),d(),y(e.description?4:-1),d(4),v(e.selector),d(2),y(e.exportedFrom!==null?10:11),d(2),y(e.inputs?12:-1),d(),y(e.twoWayBindings?13:-1),d(),y(e.outputs?14:-1),d(),y(e.templates?15:-1),d(),y(e.contentChildren?16:-1)}}function cg(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Components"),a(),B(3,dg,17,9,"div",7,G),a()),t&2){let e=f();d(3),H(e.data.components)}}function ug(t,r){if(t&1&&C(0,"p",8),t&2){let e=f().$implicit;h("innerHTML",e.description,le)}}function pg(t,r){if(t&1){let e=j();s(0," Exported from: "),o(1,"a",9),_("click",function(){T(e);let n=f().$implicit,l=f(2);return S(l.scrollTo("#"+n.exportedFrom))}),o(2,"code"),s(3),a()()}if(t&2){let e=f().$implicit;d(3),v(e.exportedFrom)}}function mg(t,r){t&1&&s(0," This directive is standalone and needs to be imported separately. ")}function hg(t,r){}function fg(t,r){if(t&1&&g(0,hg,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(14);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Ae(2,It,e.inputs,e.name))}}function gg(t,r){}function _g(t,r){if(t&1&&g(0,gg,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(16);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Ae(2,It,e.twoWayBindings,e.name))}}function vg(t,r){}function yg(t,r){if(t&1&&g(0,vg,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(18);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Ae(2,It,e.outputs,e.name))}}function Cg(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),g(4,ug,1,1,"p",8),o(5,"p"),s(6," Selector: "),o(7,"code"),s(8),a()(),o(9,"p"),g(10,pg,4,1)(11,mg,1,0),a(),g(12,fg,1,5,null,10)(13,_g,1,5,null,10)(14,yg,1,5,null,10),a()),t&2){let e=r.$implicit;d(3),v(e.name),d(),y(e.description?4:-1),d(4),v(e.selector),d(2),y(e.exportedFrom!==null?10:11),d(2),y(e.inputs?12:-1),d(),y(e.twoWayBindings?13:-1),d(),y(e.outputs?14:-1)}}function bg(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Directives"),a(),B(3,Cg,15,7,"div",7,G),a()),t&2){let e=f();d(3),H(e.data.directives)}}function xg(t,r){if(t&1){let e=j();s(0," Exported from: "),o(1,"a",9),_("click",function(){T(e);let n=f().$implicit,l=f(2);return S(l.scrollTo("#"+n.exportedFrom))}),o(2,"code"),s(3),a()()}if(t&2){let e=f().$implicit;d(3),v(e.exportedFrom)}}function wg(t,r){t&1&&s(0," This pipe is standalone and needs to be imported separately. ")}function Tg(t,r){}function Sg(t,r){if(t&1&&g(0,Tg,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(20);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Ae(2,It,e.params,e.name))}}function Dg(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),C(4,"p",8),o(5,"p"),s(6," Selector: "),o(7,"code"),s(8),a()(),o(9,"p"),g(10,xg,4,1)(11,wg,1,0),a(),g(12,Sg,1,5,null,10),a()),t&2){let e=r.$implicit;d(3),v(e.name),d(),h("innerHTML",e.description,le),d(4),v(e.selector),d(2),y(e.exportedFrom!==null?10:11),d(2),y(e.params?12:-1)}}function Eg(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Pipes"),a(),B(3,Dg,13,5,"div",7,G),a()),t&2){let e=f();d(3),H(e.data.pipes)}}function Ag(t,r){}function Fg(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Classes"),a(),g(3,Ag,0,0,"ng-template",10),a()),t&2){let e=f(),i=V(26);d(3),h("ngTemplateOutlet",i)("ngTemplateOutletContext",Ce(2,pa,e.data.classes))}}function Ig(t,r){}function Mg(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Services"),a(),g(3,Ig,0,0,"ng-template",10),a()),t&2){let e=f(),i=V(26);d(3),h("ngTemplateOutlet",i)("ngTemplateOutletContext",Ce(2,pa,e.data.services))}}function kg(t,r){}function Pg(t,r){if(t&1&&(o(0,"app-h4",11),s(1),a(),g(2,kg,0,0,"ng-template",10)),t&2){let e=r.$implicit,i=r.$index,n=f(2).$implicit;f(2);let l=V(24);h("idPrefix",n.name),d(),A("Overload ",i+1,""),d(),h("ngTemplateOutlet",l)("ngTemplateOutletContext",Ae(4,kf,e,n.name+" overload "+(i+1)))}}function Vg(t,r){if(t&1&&B(0,Pg,3,7,null,null,G),t&2){let e=f().$implicit;H(e.overloads)}}function Rg(t,r){}function Og(t,r){if(t&1&&g(0,Rg,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(24);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Ae(2,It,e,e.name))}}function Lg(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),g(4,Vg,2,0)(5,Og,1,5,null,10),a()),t&2){let e=r.$implicit,i=f(2);d(3),v(e.name),d(),y(i.isOverloadedFunction(e)?4:5)}}function Bg(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Functions"),a(),B(3,Lg,6,2,"div",7,G),a()),t&2){let e=f();d(3),H(e.data.functions)}}function Hg(t,r){}function Ug(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Interfaces"),a(),g(3,Hg,0,0,"ng-template",10),a()),t&2){let e=f(),i=V(26);d(3),h("ngTemplateOutlet",i)("ngTemplateOutletContext",Ce(2,pa,e.data.interfaces))}}function Ng(t,r){}function jg(t,r){if(t&1&&g(0,Ng,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(20);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Ae(2,Pf,e.typeParams,e.name))}}function Yg(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),C(4,"p",8)(5,"app-code",13),g(6,jg,1,5,null,10),a()),t&2){let e=r.$implicit;d(3),v(e.name),d(),h("innerHTML",e.description,le),d(),h("code",e.definition),d(),y(e.typeParams!=null&&e.typeParams.length?6:-1)}}function $g(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Types"),a(),B(3,Yg,7,4,"div",7,G),a()),t&2){let e=f();d(3),H(e.data.types)}}function zg(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),C(4,"p",8)(5,"app-code",13),a()),t&2){let e=r.$implicit;d(3),v(e.name),d(),h("innerHTML",e.description,le),d(),h("code",e.definition)}}function Wg(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Enums"),a(),B(3,zg,6,3,"div",7,G),a()),t&2){let e=f();d(3),H(e.data.enums)}}function Kg(t,r){t&1&&s(0),t&2&&v(" All properties are optional, and missing properties will be set to default values.")}function qg(t,r){if(t&1){let e=j();o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),C(4,"p",8),o(5,"p"),s(6," Requires a value of type "),o(7,"a",9),_("click",function(){let n=T(e).$implicit,l=f(2);return S(l.scrollTo("#"+n.type))}),o(8,"code"),s(9),a()(),s(10,"."),g(11,Kg,1,1),a()()}if(t&2){let e=r.$implicit;d(3),v(e.name),d(),h("innerHTML",e.description,le),d(5),v(e.type),d(2),y(e.allOptional?11:-1)}}function Qg(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Injection Tokens"),a(),B(3,qg,12,4,"div",7,G),a()),t&2){let e=f();d(3),H(e.data.injectionTokens)}}function Gg(t,r){t&1&&(o(0,"ard-icon",14),s(1,"delete"),a())}function Xg(t,r){t&1&&s(0," Required. ")}function Zg(t,r){if(t&1&&(s(0," Optional. Defaults to "),C(1,"code",8),s(2,". ")),t&2){let e=f().$implicit;d(),h("innerHTML",e.default,le)}}function Jg(t,r){if(t&1&&(o(0,"tr")(1,"td"),g(2,Gg,2,0,"ard-icon",14),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),C(9,"p",8),o(10,"p"),g(11,Xg,1,0)(12,Zg,3,1),a()()()),t&2){let e=r.$implicit;d(2),y(e.deprecated?2:-1),d(2),v(e.name),d(3),v(e.type),d(2),h("innerHTML",e.description,le),d(2),y(e.required?11:e.default?12:-1)}}function e_(t,r){if(t&1&&(o(0,"app-h4",11),s(1,"Inputs"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),s(6,"Name"),a(),o(7,"th"),s(8,"Type"),a(),o(9,"th"),s(10,"Description"),a()()(),o(11,"tbody"),B(12,Jg,13,5,"tr",null,G),a()()),t&2){let e=r.$implicit,i=r.prefix;h("idPrefix",i),d(12),H(e)}}function t_(t,r){t&1&&(o(0,"ard-icon",15),s(1,"delete"),a())}function i_(t,r){t&1&&s(0," Required. ")}function n_(t,r){if(t&1&&(s(0," Optional. Defaults to "),C(1,"code",8),s(2,". ")),t&2){let e=f().$implicit;d(),h("innerHTML",e.default,le)}}function r_(t,r){if(t&1&&(o(0,"tr")(1,"td"),g(2,t_,2,0,"ard-icon",15),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),C(9,"p",8),o(10,"p"),g(11,i_,1,0)(12,n_,3,1),a()()()),t&2){let e=r.$implicit;d(2),y(e.deprecated?2:-1),d(2),v(e.name),d(3),v(e.type),d(2),h("innerHTML",e.description,le),d(2),y(e.required?11:e.default?12:-1)}}function a_(t,r){if(t&1&&(o(0,"app-h4",11),s(1,"Two-way bindings"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),s(6,"Name"),a(),o(7,"th"),s(8,"Type"),a(),o(9,"th"),s(10,"Description"),a()()(),o(11,"tbody"),B(12,r_,13,5,"tr",null,G),a()()),t&2){let e=r.$implicit,i=r.prefix;h("idPrefix",i),d(12),H(e)}}function o_(t,r){t&1&&(o(0,"ard-icon",16),s(1,"delete"),a())}function s_(t,r){if(t&1&&(o(0,"tr")(1,"td"),g(2,o_,2,0,"ard-icon",16),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),C(9,"p",8),a()()),t&2){let e=r.$implicit;d(2),y(e.deprecated?2:-1),d(2),v(e.name),d(3),v(e.type),d(2),h("innerHTML",e.description,le)}}function l_(t,r){if(t&1&&(o(0,"app-h4",11),s(1,"Outputs"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),s(6,"Name"),a(),o(7,"th"),s(8,"Emitted type"),a(),o(9,"th"),s(10,"Description"),a()()(),o(11,"tbody"),B(12,s_,10,4,"tr",null,G),a()()),t&2){let e=r.$implicit,i=r.prefix;h("idPrefix",i),d(12),H(e)}}function d_(t,r){if(t&1&&(o(0,"app-h6",11),s(1),a()),t&2){let e=f(),i=e.isTypeParams,n=e.prefix;h("idPrefix",n),d(),A("",i?"Type":""," Params")}}function c_(t,r){if(t&1&&(o(0,"app-h5",11),s(1),a()),t&2){let e=f(),i=e.isTypeParams,n=e.prefix;h("idPrefix",n),d(),A("",i?"Type":""," Params")}}function u_(t,r){if(t&1&&(o(0,"app-h4",11),s(1),a()),t&2){let e=f(),i=e.isTypeParams,n=e.prefix;h("idPrefix",n),d(),A("",i?"Type":""," Params")}}function p_(t,r){t&1&&(o(0,"ard-icon",17),s(1,"delete"),a())}function m_(t,r){t&1&&s(0," Required. ")}function h_(t,r){t&1&&s(0," (merged with provided object) ")}function f_(t,r){if(t&1&&(s(0," Optional. Defaults to "),C(1,"code",8),g(2,h_,1,0),s(3,". ")),t&2){let e=f().$implicit;d(),h("innerHTML",e.default,le),d(),y(e.isMergedObject?2:-1)}}function g_(t,r){if(t&1&&(o(0,"tr")(1,"td"),g(2,p_,2,0,"ard-icon",17),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),C(9,"p",8),o(10,"p"),g(11,m_,1,0)(12,f_,4,2),a()()()),t&2){let e=r.$implicit;d(2),y(e.deprecated?2:-1),d(2),v(e.name),d(3),v(e.type),d(2),h("innerHTML",e.description,le),d(2),y(e.required?11:e.required===!1?12:-1)}}function __(t,r){if(t&1&&(o(0,"table")(1,"thead")(2,"tr")(3,"th"),s(4,"Name"),a(),o(5,"th"),s(6),a(),o(7,"th"),s(8,"Description"),a()()(),o(9,"tbody"),B(10,g_,13,5,"tr",null,G),a()()),t&2){let e=f(),i=e.$implicit,n=e.isTypeParams;d(6),v(n?"Extends":"Type"),d(4),H(i)}}function v_(t,r){t&1&&(o(0,"p"),s(1,"No params."),a())}function y_(t,r){if(t&1&&g(0,d_,2,2,"app-h6",11)(1,c_,2,2,"app-h5",11)(2,u_,2,2,"app-h4",11)(3,__,12,1,"table")(4,v_,2,0,"p"),t&2){let e=r.$implicit,i=r.headingType;y(i==="h6"?0:i==="h5"?1:2),d(3),y(e!=null&&e.length?3:4)}}function C_(t,r){if(t&1&&(o(0,"app-h6",11),s(1),a()),t&2){let e,i=f(),n=i.headingText,l=i.prefix;h("idPrefix",l),d(),v((e=n)!==null&&e!==void 0?e:"Properties")}}function b_(t,r){if(t&1&&(o(0,"app-h5",11),s(1),a()),t&2){let e,i=f(),n=i.headingText,l=i.prefix;h("idPrefix",l),d(),v((e=n)!==null&&e!==void 0?e:"Properties")}}function x_(t,r){if(t&1&&(o(0,"app-h4",11),s(1),a()),t&2){let e,i=f(),n=i.headingText,l=i.prefix;h("idPrefix",l),d(),v((e=n)!==null&&e!==void 0?e:"Properties")}}function w_(t,r){t&1&&(o(0,"ard-icon",18),s(1,"delete"),a())}function T_(t,r){if(t&1&&(o(0,"tr")(1,"td"),g(2,w_,2,0,"ard-icon",18),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),C(9,"p",8),a()()),t&2){let e=r.$implicit;d(2),y(e.deprecated?2:-1),d(2),v(e.name),d(3),v(e.type),d(2),h("innerHTML",e.description,le)}}function S_(t,r){if(t&1&&(g(0,C_,2,2,"app-h6",11)(1,b_,2,2,"app-h5",11)(2,x_,2,2,"app-h4",11),o(3,"table")(4,"thead")(5,"tr")(6,"th"),s(7,"Name"),a(),o(8,"th"),s(9,"Type"),a(),o(10,"th"),s(11,"Description"),a()()(),o(12,"tbody"),B(13,T_,10,4,"tr",null,G),a()()),t&2){let e=r.$implicit,i=r.headingType;y(i==="h6"?0:i==="h5"?1:2),d(13),H(e)}}function D_(t,r){}function E_(t,r){if(t&1&&g(0,D_,0,0,"ng-template",10),t&2){let e=f(),i=e.$implicit,n=e.headingType,l=e.prefix;f();let c=V(20);h("ngTemplateOutlet",c)("ngTemplateOutletContext",ur(2,Rf,i.typeParams,n,l))}}function A_(t,r){}function F_(t,r){if(t&1&&(o(0,"app-h6",11),s(1,"Return type"),a()),t&2){let e=f().prefix;h("idPrefix",e)}}function I_(t,r){if(t&1&&(o(0,"app-h5",11),s(1,"Return type"),a()),t&2){let e=f().prefix;h("idPrefix",e)}}function M_(t,r){if(t&1&&(o(0,"app-h4",11),s(1,"Return type"),a()),t&2){let e=f().prefix;h("idPrefix",e)}}function k_(t,r){if(t&1&&(C(0,"p",8),g(1,E_,1,6,null,10)(2,A_,0,0,"ng-template",10)(3,F_,2,1,"app-h6",11)(4,I_,2,1,"app-h5",11)(5,M_,2,1,"app-h4",11),o(6,"p"),s(7," Return type: "),o(8,"code"),s(9),a()()),t&2){let e=r.$implicit,i=r.headingType,n=r.prefix;f();let l=V(20);h("innerHTML",e.description,le),d(),y(e.typeParams!=null&&e.typeParams.length?1:-1),d(),h("ngTemplateOutlet",l)("ngTemplateOutletContext",ur(6,Vf,e.params,i,n)),d(),y(i==="h6"?3:i==="h5"?4:5),d(6),v(e.returnType)}}function P_(t,r){if(t&1&&(o(0,"p"),s(1," Provided in: "),o(2,"code"),s(3),a()()),t&2){let e=f().$implicit;d(3),A("",e.providedIn," ")}}function V_(t,r){if(t&1&&(o(0,"p"),s(1," Extends: "),o(2,"code"),s(3),a()()),t&2){let e=f().$implicit;d(3),A("",e.extends," ")}}function R_(t,r){}function O_(t,r){if(t&1&&g(0,R_,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(20);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Ae(2,Of,e.typeParams,e.name))}}function L_(t,r){}function B_(t,r){if(t&1&&g(0,L_,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(22);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Ae(2,It,e.properties,e.name))}}function H_(t,r){}function U_(t,r){if(t&1&&(o(0,"app-h5",11)(1,"code"),s(2),a(),s(3),a(),g(4,H_,0,0,"ng-template",10)),t&2){let e=r.$implicit,i=r.$index,n=f(2).$implicit,l=f(2).$implicit;f(2);let c=V(24);h("idPrefix",l.name+" methods"),d(2),v(n.name),d(),A(" (overload ",i+1,") "),d(),h("ngTemplateOutlet",c)("ngTemplateOutletContext",Ae(5,ml,e,l.name+" methods "+n.name+" overload "+(i+1)))}}function N_(t,r){if(t&1&&B(0,U_,5,8,null,null,G),t&2){let e=f().$implicit;H(e.overloads)}}function j_(t,r){}function Y_(t,r){if(t&1&&(o(0,"app-h5",11)(1,"code"),s(2),a()(),g(3,j_,0,0,"ng-template",10)),t&2){let e=f().$implicit,i=f(2).$implicit;f(2);let n=V(24);h("idPrefix",i.name+" methods"),d(2),v(e.name),d(),h("ngTemplateOutlet",n)("ngTemplateOutletContext",Ae(4,ml,e,i.name+" methods "+e.name))}}function $_(t,r){if(t&1&&g(0,N_,2,0)(1,Y_,4,7),t&2){let e=r.$implicit,i=f(4);y(i.isOverloadedFunction(e)?0:1)}}function z_(t,r){if(t&1&&(o(0,"app-h4",11),s(1,"Methods"),a(),B(2,$_,2,1,null,null,G)),t&2){let e=f().$implicit;h("idPrefix",e.name),d(2),H(e.methods)}}function W_(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),g(4,P_,4,1,"p")(5,V_,4,1,"p"),C(6,"p",8),g(7,O_,1,5,null,10)(8,B_,1,5,null,10)(9,z_,4,1),a()),t&2){let e=r.$implicit;d(3),v(e.name),d(),y(e.providedIn?4:-1),d(),y(e.extends?5:-1),d(),h("innerHTML",e.description,le),d(),y(e.typeParams!=null&&e.typeParams.length?7:-1),d(),y(e.properties!=null&&e.properties.length?8:-1),d(),y(e.methods!=null&&e.methods.length?9:-1)}}function K_(t,r){if(t&1&&B(0,W_,10,7,"div",7,G),t&2){let e=r.$implicit;H(e)}}var hl=(()=>{class t{constructor(){this._route=I(ui),this.data=this._route.snapshot.data}scrollTo(e){Fi(e,{offset:"20%"})}isString(e){return!Array.isArray(e)}isOverloadedFunction(e){return"overloads"in e}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-api-page"]],decls:27,vars:12,consts:[["inputsTable",""],["twoWayBindingsTable",""],["outputsTable",""],["paramsTable",""],["propertiesTable",""],["functionTable",""],["classOrInterface",""],[1,"item-container"],[3,"innerHTML"],[3,"click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"idPrefix"],["language","xml","styled","",3,"code"],["language","typescript","styled","",3,"code"],["title","This input is deprecated."],["title","This two-way binding is deprecated."],["title","This output is deprecated."],["title","This param is deprecated."],["title","This property is deprecated."]],template:function(i,n){i&1&&(o(0,"app-h1"),s(1),a(),g(2,Yf,5,0,"section")(3,cg,5,0,"section")(4,bg,5,0,"section")(5,Eg,5,0,"section")(6,Fg,4,4,"section")(7,Mg,4,4,"section")(8,Bg,5,0,"section")(9,Ug,4,4,"section")(10,$g,5,0,"section")(11,Wg,5,0,"section")(12,Qg,5,0,"section")(13,e_,14,1,"ng-template",null,0,oe)(15,a_,14,1,"ng-template",null,1,oe)(17,l_,14,1,"ng-template",null,2,oe)(19,y_,5,2,"ng-template",null,3,oe)(21,S_,15,1,"ng-template",null,4,oe)(23,k_,10,10,"ng-template",null,5,oe)(25,K_,2,0,"ng-template",null,6,oe)),i&2&&(d(),A("API reference for ",n.data.name," \u2014 Ardium UI"),d(),y(n.data.modules?2:-1),d(),y(n.data.components?3:-1),d(),y(n.data.directives?4:-1),d(),y(n.data.pipes?5:-1),d(),y(n.data.classes?6:-1),d(),y(n.data.services?7:-1),d(),y(n.data.functions?8:-1),d(),y(n.data.interfaces?9:-1),d(),y(n.data.types?10:-1),d(),y(n.data.enums?11:-1),d(),y(n.data.injectionTokens?12:-1))},dependencies:[re,ce,ee,Ne,lt,Mi,wt,ht,Wt,Kt,qn,Qn,Gn],styles:[`app-api-page{font-size:.9375rem}app-api-page h1{padding-bottom:1rem}app-api-page h2{font-weight:300;font-size:1.5rem;width:100%;border-bottom:1px solid var(--ard-detail-ultralight);padding-bottom:.5rem;margin-bottom:1rem}app-api-page h3{font-weight:500;font-size:1.25rem}app-api-page td{position:relative;min-width:100px}app-api-page table ard-icon{position:absolute;right:100%;color:rgb(var(--ard-danger-700))}app-api-page p ul{padding-bottom:0}
`],encapsulation:2})}}return t})();var Xn=(()=>{class t{constructor(){this.contentToCopy=m.required()}executeCopy(){navigator.clipboard.writeText(this.contentToCopy())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-copy-button"]],inputs:{contentToCopy:[1,"contentToCopy"]},decls:3,vars:0,consts:[[1,"copy-button",3,"click"]],template:function(i,n){i&1&&(o(0,"ard-icon-button",0),_("click",function(){return n.executeCopy()}),o(1,"ard-icon"),s(2,"content-copy"),a()())},dependencies:[ze,$e,re,ce],encapsulation:2})}}return t})();var q_=["containerLeft"],Q_=["containerRight"],G_=[[["","side","left"]],[["","side","right"]]],X_=["[side='left']","[side='right']"];function Z_(t,r){if(t&1&&C(0,"app-copy-button",8),t&2){let e=f();h("contentToCopy",e.contentToCopyLeft())}}function J_(t,r){}function e0(t,r){if(t&1&&g(0,J_,0,0,"ng-template",9),t&2){f();let e=V(22);h("ngTemplateOutlet",e)}}function t0(t,r){if(t&1&&C(0,"app-copy-button",8),t&2){let e=f();h("contentToCopy",e.contentToCopyRight())}}function i0(t,r){}function n0(t,r){if(t&1&&g(0,i0,0,0,"ng-template",9),t&2){f();let e=V(22);h("ngTemplateOutlet",e)}}function r0(t,r){if(t&1){let e=j();o(0,"ard-icon-button",12),_("click",function(){T(e);let n=f(2);return S(n.scrollSync.set(!n.scrollSync()))}),C(1,"ard-icon",13),a()}if(t&2){let e=f(2);h("title",(e.scrollSync(),"Turn off scroll sync")),d(),h("icon",e.scrollSync()?"sync":"sync_disabled")}}function a0(t,r){if(t&1){let e=j();o(0,"ard-icon-button",12),_("click",function(){T(e);let n=f(2);return S(n.verticalLayout.set(!n.verticalLayout()))}),C(1,"ard-icon",13),a()}if(t&2){let e=f(2);h("title",e.verticalLayout()?"Current view: vertical":"Current view: side-by-side"),d(),h("icon",e.verticalLayout()?"splitscreen":"view_column_2")}}function o0(t,r){if(t&1&&g(0,r0,2,2,"ard-icon-button",11)(1,a0,2,2,"ard-icon-button",11),t&2){let e=f();y(e.allowScrollSync()?0:-1),d(),y(e.allowLayoutChange()?1:-1)}}var Zi={Off:"off",Left:"left",Right:"right",Both:"both"},fl=(()=>{class t{constructor(){this.containerLeft=Me("containerLeft"),this.containerRight=Me("containerRight"),this.textLeft=m.required(),this.textRight=m.required(),this.contentToCopyLeft=m(""),this.contentToCopyRight=m(""),this.allowScrollSync=m(!1,{transform:e=>it(e)}),this.allowLayoutChange=m(!1,{transform:e=>it(e)}),this.allowCopy=m(Zi.Both),this.allowCopyLeft=F(()=>this.allowCopy()===Zi.Left||this.allowCopy()===Zi.Both),this.allowCopyRight=F(()=>this.allowCopy()===Zi.Right||this.allowCopy()===Zi.Both),this.scrollSync=_t(!1),this.verticalLayout=_t(!1)}onContainerLeftScroll(){if(this.scrollSync())return;let[e,i]=[this.containerLeft(),this.containerRight()];!e||!i||i.nativeElement.scrollTo(e.nativeElement.scrollLeft,0)}onContainerRightScroll(){if(this.scrollSync())return;let[e,i]=[this.containerLeft(),this.containerRight()];!e||!i||e.nativeElement.scrollTo(i.nativeElement.scrollLeft,0)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-two-pane-container"]],viewQuery:function(i,n){i&1&&(ke(n.containerLeft,q_,5),ke(n.containerRight,Q_,5)),i&2&&ue(2)},inputs:{textLeft:[1,"textLeft"],textRight:[1,"textRight"],contentToCopyLeft:[1,"contentToCopyLeft"],contentToCopyRight:[1,"contentToCopyRight"],allowScrollSync:[1,"allowScrollSync"],allowLayoutChange:[1,"allowLayoutChange"],allowCopy:[1,"allowCopy"],scrollSync:[1,"scrollSync"],verticalLayout:[1,"verticalLayout"]},outputs:{scrollSync:"scrollSyncChange",verticalLayout:"verticalLayoutChange"},ngContentSelectors:X_,decls:23,vars:8,consts:[["containerLeft",""],["containerRight",""],["buttons",""],[1,"two-pane-container"],[1,"content-container"],[1,"top-bar"],[1,"heading"],[1,"buttons"],[3,"contentToCopy"],[3,"ngTemplateOutlet"],[1,"content",3,"scroll"],[3,"title"],[3,"click","title"],[3,"icon"]],template:function(i,n){if(i&1){let l=j();Y(G_),o(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6),s(4),a(),o(5,"div",7),g(6,Z_,1,1,"app-copy-button",8)(7,e0,1,1,null,9),a()(),o(8,"div",10,0),_("scroll",function(){return T(l),S(n.onContainerLeftScroll())}),L(10),a()(),o(11,"div",4)(12,"div",5)(13,"div",6),s(14),a(),o(15,"div",7),g(16,t0,1,1,"app-copy-button",8)(17,n0,1,1,null,9),a()(),o(18,"div",10,1),_("scroll",function(){return T(l),S(n.onContainerRightScroll())}),L(20,1),a()()(),g(21,o0,2,2,"ng-template",null,2,oe)}i&2&&(ie("vertical",n.verticalLayout()),d(4),v(n.textLeft()),d(2),y(n.allowCopyLeft()?6:-1),d(),y(n.verticalLayout()?7:-1),d(7),v(n.textRight()),d(2),y(n.allowCopyRight()?16:-1),d(),y(n.verticalLayout()?-1:17))},dependencies:[ee,Ne,Xn,ze,$e,re,ce],styles:[".two-pane-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;border-radius:.5rem;border:1px solid var(--ard-detail-ultralight);margin:1.25rem 0;overflow:hidden}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{max-width:100%;overflow:hidden}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]:first-of-type{border-right:1px solid var(--ard-detail-ultralight);position:relative}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{padding:.5rem 1.25rem 0;font-weight:500}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;position:relative;top:.25rem;right:.25rem}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{max-width:100%;overflow:auto}.two-pane-container.vertical[_ngcontent-%COMP%]{grid-template-columns:1fr}.two-pane-container.vertical[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]:first-of-type{border-right:none;border-bottom:1px solid var(--ard-detail-ultralight)}"]})}}return t})();var s0=["*"],gl=(()=>{class t{constructor(){this.code=m.required(),this.codeLanguage=m.required()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-example-with-result"]],inputs:{code:[1,"code"],codeLanguage:[1,"codeLanguage"]},ngContentSelectors:s0,decls:4,vars:3,consts:[["textLeft","Code","textRight","Result","allowCopy","left",3,"verticalLayout"],["side","left","styled","false","noScroll","",3,"language","code"],["side","right"]],template:function(i,n){i&1&&(Y(),o(0,"app-two-pane-container",0),C(1,"app-code",1),Ri(2,2),L(3),Oi(),a()),i&2&&(h("verticalLayout",!0),d(),h("language",n.codeLanguage())("code",n.code()))},dependencies:[fl,Mi],encapsulation:2})}}return t})();var _l={FT:"Fatal",NF:"Non-Fatal",IS:"Impossible State",WA:"Warning"};var vl=(()=>{class t{constructor(){this.severity=m.required({alias:"code",transform:e=>{let i=e.slice(4,6);return _l[i]}})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-exception-severity"]],hostVars:2,hostBindings:function(i,n){i&2&&ve("severity-"+n.severity().toLowerCase().replace(" ","-"))},inputs:{severity:[1,"code","severity"]},decls:1,vars:1,template:function(i,n){i&1&&s(0),i&2&&v(n.severity())},styles:["[_nghost-%COMP%]{padding:.125rem .25rem;border-radius:4px}.severity-fatal[_nghost-%COMP%]{background-color:rgb(var(--ard-danger-500));color:var(--ard-text-alt)}.severity-non-fatal[_nghost-%COMP%]{background-color:#ff7707;color:var(--ard-text-alt)}.severity-impossible-state[_nghost-%COMP%]{background-color:#7707ff;color:var(--ard-text-alt)}.severity-warning[_nghost-%COMP%]{background-color:rgb(var(--ard-warn-500));color:var(--ard-text-alt)}"]})}}return t})();var l0=(t,r)=>r.name,d0=(t,r)=>r.code;function c0(t,r){if(t&1&&(o(0,"p"),s(1),a()),t&2){let e=f();d(),A("",e.data.name," doesn't raise any own exceptions.")}}function u0(t,r){if(t&1&&C(0,"p",2),t&2){let e=f().$implicit;h("innerHTML",e.description,le)}}function p0(t,r){if(t&1&&C(0,"p",2),t&2){let e=r.$implicit;h("innerHTML",e,le)}}function m0(t,r){if(t&1&&B(0,p0,1,1,"p",2,G),t&2){let e=f().$implicit;H(e.description)}}function h0(t,r){if(t&1&&(o(0,"app-example-with-result",3)(1,"p",4),s(2),a()()),t&2){let e=r.$implicit;h("code",e.code)("codeLanguage",e.codeLanguage),d(2),v(e.result)}}function f0(t,r){if(t&1&&B(0,h0,3,3,"app-example-with-result",3,G),t&2){let e=f().$implicit;H(e.exampleResults)}}function g0(t,r){if(t&1&&(o(0,"app-h3",0)(1,"code"),s(2),a()(),o(3,"p")(4,"strong"),s(5,"Severity: "),a(),C(6,"app-exception-severity",1),a(),C(7,"blockquote",2),g(8,u0,1,1,"p",2)(9,m0,2,0)(10,f0,2,0)),t&2){let e=r.$implicit,i=f(3);h("htmlId",e.code),d(2),A(" ",e.code," "),d(4),h("code",e.code),d(),h("innerHTML",e.exceptionText,le),d(),y(i.isString(e.description)?8:9),d(2),y(e.exampleResults!=null&&e.exampleResults.length?10:-1)}}function _0(t,r){if(t&1&&(o(0,"app-h2"),s(1),a(),B(2,g0,11,6,null,null,d0)),t&2){let e=r.$implicit;d(),v(e.name),d(),H(e.exceptions)}}function v0(t,r){if(t&1&&B(0,_0,4,1,null,null,l0),t&2){let e=f();H(e.data.exceptions)}}var yl=(()=>{class t{constructor(){this._route=I(ui),this.data=this._route.snapshot.data}scrollTo(e){Fi(e,{offset:"20%"})}isString(e){return!Array.isArray(e)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-exceptions-page"]],decls:4,vars:2,consts:[[3,"htmlId"],[3,"code"],[3,"innerHTML"],[3,"code","codeLanguage"],[1,"example-with-result-result"]],template:function(i,n){i&1&&(o(0,"app-h1"),s(1),a(),g(2,c0,2,1,"p")(3,v0,2,0)),i&2&&(d(),A("Exception list for ",n.data.name," \u2014 Ardium UI"),d(),y(n.data.exceptions!=null&&n.data.exceptions.length?3:2))},dependencies:[vl,gl,wt,ht,Wt,Kt],styles:[".example-with-result-result[_ngcontent-%COMP%]{padding:1.25rem;font-family:monospace}"]})}}return t})();function y0(t,r){if(t&1&&(o(0,"p"),s(1," Inherits from: "),o(2,"code"),s(3),a()()),t&2){let e=f().$implicit;d(3),v(e.inheritsFrom)}}function C0(t,r){if(t&1&&(o(0,"tr")(1,"td")(2,"code"),s(3),a()(),o(4,"td")(5,"code"),s(6),a()(),o(7,"td"),C(8,"p",0),g(9,y0,4,1,"p"),a()()),t&2){let e=r.$implicit;d(3),v(e.name),d(3),v(e.default),d(2),h("innerHTML",e.description,le),d(),y(e.inheritsFrom?9:-1)}}function b0(t,r){if(t&1&&(o(0,"section")(1,"p"),s(2),a(),o(3,"table")(4,"thead")(5,"tr")(6,"th"),s(7,"Variable"),a(),o(8,"th"),s(9,"Default value"),a(),o(10,"th"),s(11,"Description"),a()()(),o(12,"tbody"),B(13,C0,10,4,"tr",null,G),a()()()),t&2){let e=f();d(2),A("The following CSS variables can be used to customize the styling of the ",e.data.name," component:"),d(11),H(e.data.variables)}}function x0(t,r){if(t&1&&(o(0,"p"),s(1),a()),t&2){let e=f();d(),A("",e.data.name||"This component"," doesn't have any style customizations.")}}var Cl=(()=>{class t{constructor(){this._route=I(ui),this.data=this._route.snapshot.data}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-styling-page"]],decls:4,vars:2,consts:[[3,"innerHTML"]],template:function(i,n){i&1&&(o(0,"app-h1"),s(1),a(),g(2,b0,15,1,"section")(3,x0,2,1,"p")),i&2&&(d(),A("Styling guide for ",n.data.name," \u2014 Ardium UI"),d(),y(n.data.variables&&n.data.variables.length>0?2:3))},dependencies:[re,ee,lt,wt,ht],styles:[`app-api-page{font-size:.9375rem}app-api-page h1{padding-bottom:1rem}app-api-page h2{font-weight:300;font-size:1.5rem;width:100%;border-bottom:1px solid var(--ard-detail-ultralight);padding-bottom:.5rem;margin-bottom:1rem}app-api-page h3{font-weight:500;font-size:1.25rem}app-api-page td{position:relative;min-width:100px}app-api-page table ard-icon{position:absolute;right:100%;color:rgb(var(--ard-danger-700))}
`],encapsulation:2})}}return t})();var bl=(()=>{class t{constructor(){this._router=I(pn),this.currentRoute=Pe(this._router.events.pipe(at(e=>e instanceof La),Re(e=>e.url)))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function w0(t,r){if(t&1&&(o(0,"a",3),s(1),a()),t&2){let e=r.$implicit,i=f();ie("active",i.isActiveRoute(e)),h("routerLink","./"+e),d(),v(e)}}var wl=(()=>{class t{constructor(){this.POSSIBLE_TABS=["overview","api","styling","exceptions"],this._navService=I(bl)}isActiveRoute(e){return this._navService.currentRoute()?.endsWith(e)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-common"]],decls:5,vars:0,consts:[[1,"component-article"],[1,"page-tabber"],[3,"routerLink","active"],[3,"routerLink"]],template:function(i,n){i&1&&(o(0,"article",0)(1,"div",1),B(2,w0,2,4,"a",2,G),a(),C(4,"router-outlet"),a()),i&2&&(d(2),H(n.POSSIBLE_TABS))},dependencies:[lt,Ba,pi],styles:[".page-tabber[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid var(--ard-detail-ultralight)}.page-tabber[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:10rem;height:3rem;display:grid;place-items:center;text-transform:uppercase;text-decoration:none;color:var(--ard-text2);font-size:.875rem;font-weight:500;background-color:transparent;transition:background-color .1s ease-in-out;border-bottom:2px solid transparent}.page-tabber[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .page-tabber[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible{background-color:rgba(var(--ard-overlay-rgb),5%)}.page-tabber[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{border-bottom-color:rgb(var(--ard-primary-500))}"]})}}return t})();var Tl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-under-construction"]],decls:12,vars:0,consts:[[1,"text"],[1,"oops"],[1,"long"],[1,"image"],["src","/ardium-ui-docs/assets/under-construction.svg","alt","Laptop marked as under construction with workers and a crane around it"]],template:function(i,n){i&1&&(o(0,"article")(1,"div",0)(2,"app-h1")(3,"span",1),s(4,"Oops!"),a(),C(5,"br"),o(6,"span",2),s(7,"Under construction"),a()(),o(8,"p"),s(9,"This documentation page is currently under construction. Come back soon!"),a()(),o(10,"div",3),C(11,"img",4),a()())},dependencies:[wt,ht],styles:['@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKcg72j00.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKew72j00.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKcw72j00.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKfA72j00.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKcQ72j00.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKfw72.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3jvWyNL4U.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3jtGyNL4U.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3jvGyNL4U.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3js2yNL4U.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3jvmyNL4U.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3jsGyN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}article[_ngcontent-%COMP%]{height:100%;display:grid;align-items:center;grid-template-columns:4fr 6fr;font-family:Ubuntu,sans-serif;max-width:70rem;box-sizing:content-box;margin:0 auto}.text[_ngcontent-%COMP%]{padding-bottom:8rem}h1[_ngcontent-%COMP%]{font-weight:500;color:rgb(var(--ard-primary-900));padding-bottom:1.5rem}h1[_ngcontent-%COMP%]   .oops[_ngcontent-%COMP%]{letter-spacing:.1em;font-size:5rem}h1[_ngcontent-%COMP%]   .long[_ngcontent-%COMP%]{font-size:2.625rem;overflow:visible;white-space:nowrap}p[_ngcontent-%COMP%]{opacity:50%;font-size:1rem}@media only screen and (min-width: 1340px){article[_ngcontent-%COMP%]{padding-right:10rem}}@media only screen and (min-width: 1700px){article[_ngcontent-%COMP%]{padding-right:20rem}}']})}}return t})();var Mt={DataDisplay:"Data Display",Buttons:"Buttons",Layout:"Layout",FormElements:"Form Elements",Popups:"Popups",Feedback:"Feedback",Stars:"Stars",CustomSignals:"Custom Signals"};function rT(t,r,e,i,n,l,c,u,x){return l||(l={name:r}),{path:t,name:r,desc:e,img:u,component:wl,groupName:x,children:[{path:"overview",component:i},{path:"api",component:hl,data:n},{path:"styling",component:Cl,data:c},{path:"exceptions",component:yl,data:l},{path:"**",redirectTo:"overview"}]}}function aT(t,r,e,i){return{path:t,name:r,desc:e,groupName:i,img:"assets/placeholder.jpg",component:Tl}}var Sl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["button-basic-example"]],decls:17,vars:0,consts:[[1,"grid"],["appearance","raised-strong"],["appearance","transparent"],["color","danger","appearance","outlined-strong"],["variant","pill"],["appearance","outlined","variant","sharp"],["appearance","flat","color","success","vertical",""],["filled",""]],template:function(i,n){i&1&&(o(0,"div",0)(1,"ard-button",1),s(2,"Button"),a(),o(3,"ard-button",2),s(4,"Button"),a(),o(5,"ard-button",3),s(6,"Button"),a(),o(7,"ard-button",4),s(8,"Button"),a(),o(9,"ard-button",5)(10,"ard-icon"),s(11,"favorite"),a(),s(12," Button "),a(),o(13,"ard-button",6)(14,"ard-icon",7),s(15,"favorite"),a(),s(16," Button "),a()())},dependencies:[me,ge,re,ce],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1.5rem;justify-items:center;max-width:30rem}"]})}}return t})();var cT={component:Sl,html:`<div class="grid">\r
  <ard-button appearance="raised-strong">Button</ard-button>\r
  <ard-button appearance="transparent">Button</ard-button>\r
  <ard-button color="danger" appearance="outlined-strong">Button</ard-button>\r
  <ard-button variant="pill">Button</ard-button>\r
  <ard-button appearance="outlined" variant="sharp">\r
    <ard-icon>favorite</ard-icon>\r
    Button\r
  </ard-button>\r
  <ard-button appearance="flat" color="success" vertical>\r
    <ard-icon filled>favorite</ard-icon>\r
    Button\r
  </ard-button>\r
</div>\r
`,scss:`.grid {\r
  display: grid;\r
  grid-template-columns: 1fr 1fr 1fr;\r
  gap: 1.5rem;\r
  justify-items: center;\r
  max-width: 30rem;\r
}`,ts:`import { Component } from '@angular/core';\r
import { ArdiumButtonModule, ArdiumIconModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'button-basic-example',\r
  templateUrl: './button-basic-example.html',\r
  styleUrl: './button-basic-example.scss',\r
  standalone: true,\r
  imports: [ArdiumButtonModule, ArdiumIconModule],\r
})\r
export class ButtonBasicExample {}\r
`};var Dl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["button-compact-example"]],decls:4,vars:0,consts:[["appearance","raised-strong"],["appearance","raised-strong","compact",""]],template:function(i,n){i&1&&(o(0,"ard-button",0),s(1,"Normal"),a(),o(2,"ard-button",1),s(3,"Compact"),a())},dependencies:[me,ge],styles:["[_nghost-%COMP%]{display:flex;gap:1rem}"]})}}return t})();var fT={component:Dl,html:`<ard-button appearance="raised-strong">Normal</ard-button>\r
<ard-button appearance="raised-strong" compact>Compact</ard-button>\r
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
`};var El=(()=>{class t{onClick(){console.log("Button clicked!")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["button-disabled-example"]],decls:4,vars:0,consts:[["disabled","","title","This button is disabled!",3,"click"],["disabled","","pointerEventsWhenDisabled","","title","This button is disabled!",3,"click"]],template:function(i,n){i&1&&(o(0,"ard-button",0),_("click",function(){return n.onClick()}),s(1,` Disabled
`),a(),o(2,"ard-button",1),_("click",function(){return n.onClick()}),s(3,` Disabled with pointer events
`),a())},dependencies:[me,ge],styles:["[_nghost-%COMP%]{display:flex;gap:1rem}"]})}}return t})();var CT={component:El,html:`<ard-button disabled (click)="onClick()" title="This button is disabled!">\r
  Disabled\r
</ard-button>\r
<ard-button disabled pointerEventsWhenDisabled (click)="onClick()" title="This button is disabled!">\r
  Disabled with pointer events\r
</ard-button>\r
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
`};var Al=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["button-icon-example"]],decls:7,vars:0,consts:[["appearance","outlined-strong","color","danger"],["appearance","outlined-strong","color","success","square",""]],template:function(i,n){i&1&&(o(0,"ard-button",0)(1,"ard-icon"),s(2,"delete"),a(),s(3,` Delete
`),a(),o(4,"ard-button",1)(5,"ard-icon"),s(6,"check"),a()())},dependencies:[me,ge,re,ce],styles:["[_nghost-%COMP%]{display:flex;gap:1rem}ard-button[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{height:1.5rem;width:1.5rem;fill:currentColor}"]})}}return t})();var ST={component:Al,html:`<ard-button appearance="outlined-strong" color="danger">\r
  <ard-icon>delete</ard-icon>\r
  Delete\r
</ard-button>\r
\r
<ard-button appearance="outlined-strong" color="success" square>\r
  <ard-icon>check</ard-icon>\r
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
import { ArdiumButtonModule, ArdiumIconModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'button-icon-example',\r
  templateUrl: './button-icon-example.html',\r
  styleUrl: './button-icon-example.scss',\r
  standalone: true,\r
  imports: [ArdiumButtonModule, ArdiumIconModule],\r
})\r
export class ButtonIconExample {\r
  \r
}\r
`};var Fl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["button-link-example"]],decls:2,vars:0,consts:[["ard-button","","href","https://google.com","target","_blank","rel","noopener noreferrer"]],template:function(i,n){i&1&&(o(0,"a",0),s(1,` Open Google
`),a())},dependencies:[me,ni],encapsulation:2})}}return t})();var IT={component:Fl,html:`<a ard-button href="https://google.com" target="_blank" rel="noopener noreferrer">\r
  Open Google\r
</a>`,scss:`:host {\r
  display: flex;\r
}\r
`,ts:`import { Component } from '@angular/core';
import { ArdiumButtonModule } from '@ardium-ui/ui';

@Component({
  selector: 'button-link-example',
  templateUrl: './button-link-example.html',
  standalone: true,
  imports: [ArdiumButtonModule],
})

export class ButtonLinkExample {
  
}
`};var Il=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["button-group-basic-example"]],decls:8,vars:0,consts:[["square",""]],template:function(i,n){i&1&&(o(0,"ard-button-group")(1,"ard-button"),s(2,"Archive"),a(),o(3,"ard-button"),s(4,"Delete"),a(),o(5,"ard-button",0)(6,"ard-icon"),s(7,"more horiz"),a()()())},dependencies:[mt,pt,me,ge,re,ce],encapsulation:2})}}return t})();var RT={component:Il,html:`<ard-button-group>\r
  <ard-button>Archive</ard-button>\r
  <ard-button>Delete</ard-button>\r
  <ard-button square><ard-icon>more horiz</ard-icon></ard-button>\r
</ard-button-group>\r
`,ts:`import { Component } from '@angular/core';
import { ArdiumButtonGroupModule, ArdiumButtonModule, ArdiumIconModule } from '@ardium-ui/ui';

@Component({
  selector: 'button-group-basic-example',
  templateUrl: './button-group-basic-example.html',
  standalone: true,
  imports: [ArdiumButtonGroupModule, ArdiumButtonModule, ArdiumIconModule],
})
export class ButtonGroupBasicExample {
  
}
`};var Ml=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["button-group-compact-example"]],decls:10,vars:0,consts:[["compact",""],["appearance","outlined"]],template:function(i,n){i&1&&(o(0,"ard-button-group",0)(1,"ard-button",1),s(2,"Edit"),a(),o(3,"ard-button-group")(4,"ard-button",1),s(5,"Copy"),a(),o(6,"ard-button",1),s(7,"Paste"),a()(),o(8,"ard-button",1),s(9,"Delete"),a()())},dependencies:[mt,pt,me,ge],encapsulation:2})}}return t})();var UT={component:Ml,html:`<ard-button-group compact>\r
  <ard-button appearance="outlined">Edit</ard-button>\r
  <ard-button-group>\r
    <ard-button appearance="outlined">Copy</ard-button>\r
    <ard-button appearance="outlined">Paste</ard-button>\r
  </ard-button-group>\r
  <ard-button appearance="outlined">Delete</ard-button>\r
</ard-button-group>`,ts:`import { Component } from '@angular/core';
import { ArdiumButtonGroupModule, ArdiumButtonModule } from '@ardium-ui/ui';

@Component({
  selector: 'button-group-compact-example',
  templateUrl: './button-group-compact-example.html',
  standalone: true,
  imports: [ArdiumButtonGroupModule, ArdiumButtonModule],
})
export class ButtonGroupCompactExample {}
`};var kl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["button-group-disabled-example"]],decls:9,vars:0,consts:[["appearance","outlined"],["appearance","outlined","disabled",""],["appearance","outlined","color","danger","disabled",""]],template:function(i,n){i&1&&(o(0,"ard-button-group")(1,"ard-button",0),s(2,"Undo"),a(),o(3,"ard-button",1),s(4,"Redo"),a(),o(5,"ard-button",0),s(6,"Save"),a(),o(7,"ard-button",2),s(8,"Delete"),a()())},dependencies:[mt,pt,me,ge],encapsulation:2})}}return t})();var zT={component:kl,html:`<ard-button-group>\r
  <ard-button appearance="outlined">Undo</ard-button>\r
  <ard-button appearance="outlined" disabled>Redo</ard-button>\r
  <ard-button appearance="outlined">Save</ard-button>\r
  <ard-button appearance="outlined" color="danger" disabled>Delete</ard-button>\r
</ard-button-group>`,ts:`import { Component } from '@angular/core';
import { ArdiumButtonGroupModule, ArdiumButtonModule } from '@ardium-ui/ui';

@Component({
  selector: 'button-group-disabled-example',
  templateUrl: './button-group-disabled-example.html',
  standalone: true,
  imports: [ArdiumButtonGroupModule, ArdiumButtonModule],
})
export class ButtonGroupDisabledExample {}
`};var Pl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["button-group-mixed-elements-example"]],decls:7,vars:0,consts:[["appearance","outlined"],["ard-button","","appearance","outlined","type","button"],["ard-button","","appearance","outlined","href","#"]],template:function(i,n){i&1&&(o(0,"ard-button-group")(1,"ard-button",0),s(2,"Component Button"),a(),o(3,"button",1),s(4,"Native Button"),a(),o(5,"a",2),s(6,"Link Button"),a()())},dependencies:[mt,pt,me,ge,ni,re],encapsulation:2})}}return t})();var GT={component:Pl,html:`<ard-button-group>\r
  <ard-button appearance="outlined">Component Button</ard-button>\r
\r
  <button ard-button appearance="outlined" type="button">Native Button</button>\r
\r
  <a ard-button appearance="outlined" href="#">Link Button</a>\r
</ard-button-group>\r
`,ts:`import { Component } from '@angular/core';
import { ArdiumButtonGroupModule, ArdiumButtonModule, ArdiumIconModule } from '@ardium-ui/ui';

@Component({
  selector: 'button-group-mixed-elements-example',
  templateUrl: './button-group-mixed-elements-example.html',
  standalone: true,
  imports: [ArdiumButtonGroupModule, ArdiumButtonModule, ArdiumIconModule],
})
export class ButtonGroupMixedElementsExample {}
`};var Vl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["button-group-nested-example"]],decls:21,vars:0,consts:[["appearance","outlined","square",""]],template:function(i,n){i&1&&(o(0,"ard-button-group")(1,"ard-button-group")(2,"ard-button",0)(3,"ard-icon"),s(4,"format_bold"),a()(),o(5,"ard-button",0)(6,"ard-icon"),s(7,"format_italic"),a()(),o(8,"ard-button",0)(9,"ard-icon"),s(10,"format_underlined"),a()()(),o(11,"ard-button-group")(12,"ard-button",0)(13,"ard-icon"),s(14,"format_align_left"),a()(),o(15,"ard-button",0)(16,"ard-icon"),s(17,"format_align_center"),a()(),o(18,"ard-button",0)(19,"ard-icon"),s(20,"format_align_right"),a()()()())},dependencies:[mt,pt,me,ge,re,ce],encapsulation:2})}}return t})();var tS={component:Vl,html:`<ard-button-group>\r
  <ard-button-group>\r
    <ard-button appearance="outlined" square><ard-icon>format_bold</ard-icon></ard-button>\r
    <ard-button appearance="outlined" square><ard-icon>format_italic</ard-icon></ard-button>\r
    <ard-button appearance="outlined" square><ard-icon>format_underlined</ard-icon></ard-button>\r
  </ard-button-group>\r
\r
  <ard-button-group>\r
    <ard-button appearance="outlined" square><ard-icon>format_align_left</ard-icon></ard-button>\r
    <ard-button appearance="outlined" square><ard-icon>format_align_center</ard-icon></ard-button>\r
    <ard-button appearance="outlined" square><ard-icon>format_align_right</ard-icon></ard-button>\r
  </ard-button-group>\r
</ard-button-group>\r
`,ts:`import { Component } from '@angular/core';
import { ArdiumButtonGroupModule, ArdiumButtonModule, ArdiumIconModule } from '@ardium-ui/ui';

@Component({
  selector: 'button-group-nested-example',
  templateUrl: './button-group-nested-example.html',
  standalone: true,
  imports: [ArdiumButtonGroupModule, ArdiumButtonModule, ArdiumIconModule],
})
export class ButtonGroupNestedExample {}
`};var Rl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["button-group-vertical-example"]],decls:7,vars:0,consts:[["vertical",""],["appearance","outlined","square",""]],template:function(i,n){i&1&&(o(0,"ard-button-group",0)(1,"ard-button",1)(2,"ard-icon"),s(3,"add"),a()(),o(4,"ard-button",1)(5,"ard-icon"),s(6,"remove"),a()()())},dependencies:[mt,pt,me,ge,re,ce],encapsulation:2})}}return t})();var oS={component:Rl,html:`<ard-button-group vertical>\r
  <ard-button appearance="outlined" square><ard-icon>add</ard-icon></ard-button>\r
  <ard-button appearance="outlined" square><ard-icon>remove</ard-icon></ard-button>\r
</ard-button-group>\r
`,ts:`import { Component } from '@angular/core';
import { ArdiumButtonGroupModule, ArdiumButtonModule, ArdiumIconModule } from '@ardium-ui/ui';

@Component({
  selector: 'button-group-vertical-example',
  templateUrl: './button-group-vertical-example.html',
  standalone: true,
  imports: [ArdiumButtonGroupModule, ArdiumButtonModule, ArdiumIconModule],
})
export class ButtonGroupVerticalExample {}
`};var Ol=(()=>{class t{constructor(){this.modalOpen=E(!1),this.dialogOpen=E(!1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["dialog-basic-example"]],decls:8,vars:2,consts:[[3,"click"],["heading","Basic modal example",3,"openChange","open"],["heading","Basic dialog example",3,"openChange","open"]],template:function(i,n){i&1&&(o(0,"button",0),_("click",function(){return n.modalOpen.set(!0)}),s(1,"Open modal"),a(),o(2,"button",0),_("click",function(){return n.dialogOpen.set(!0)}),s(3,"Open dialog"),a(),o(4,"ard-modal",1),K("openChange",function(c){return W(n.modalOpen,c)||(n.modalOpen=c),c}),s(5,` This is the modal content
`),a(),o(6,"ard-dialog",2),K("openChange",function(c){return W(n.dialogOpen,c)||(n.dialogOpen=c),c}),s(7,` This is the dialog content
`),a()),i&2&&(d(4),z("open",n.modalOpen),d(2),z("open",n.dialogOpen))},dependencies:[aa,ra,Ai,Ei],styles:["button[_ngcontent-%COMP%]{margin-right:.5rem}"]})}}return t})();var mS={component:Ol,html:`<button (click)="modalOpen.set(true)">Open modal</button>\r
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
`};var Ll=(()=>{class t{constructor(){this.deleteConfirmationOpen=E(!1),this.canDelete=E(!1),this._timeout=null}openDeleteConfirmation(){this.deleteConfirmationOpen.set(!0),this.canDelete.set(!1),this._timeout=setTimeout(()=>{this.canDelete.set(!0)},3e3)}ngOnDestroy(){this._timeout&&clearTimeout(this._timeout)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["dialog-delete-confirmation-example"]],decls:4,vars:2,consts:[["appearance","outlined-strong","color","danger",3,"click"],["heading","Delete confirmation","rejectButtonText","Keep","rejectButtonAppearance","transparent","confirmButtonText","Delete","confirmButtonColor","danger","confirmButtonAppearance","outlined-strong",3,"openChange","open","canConfirm"]],template:function(i,n){i&1&&(o(0,"ard-button",0),_("click",function(){return n.openDeleteConfirmation()}),s(1,"Delete something"),a(),o(2,"ard-dialog",1),K("openChange",function(c){return W(n.deleteConfirmationOpen,c)||(n.deleteConfirmationOpen=c),c}),s(3,` Are you sure you want to delete this?
`),a()),i&2&&(d(2),z("open",n.deleteConfirmationOpen),h("canConfirm",n.canDelete()))},dependencies:[Ai,Ei,me,ge],encapsulation:2})}}return t})();var CS={component:Ll,html:`<ard-button appearance="outlined-strong" color="danger" (click)="openDeleteConfirmation()">Delete something</ard-button>\r
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
`};function T0(t,r){if(t&1&&(o(0,"tr")(1,"td")(2,"code"),s(3),a()(),o(4,"td")(5,"code"),s(6),a()()()),t&2){let e=r.$implicit;d(3),A("(",e[0],")"),d(3),A("$event = ",e[1],"")}}function S0(t,r){t&1&&(o(0,"tr")(1,"td"),s(2,"Emitted events will be shown here."),a()())}var Bl=(()=>{class t{constructor(){this.dialogOpen=E(!1),this.dialogEventLog=E([])}addEvent(e,i){this.dialogEventLog.update(n=>[...n,[e,typeof i=="string"?`"${i}"`:String(i)]])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["dialog-emitted-events-example"]],decls:11,vars:2,consts:[[3,"click"],["heading","Dialog events",3,"openChange","close","reject","confirm","open"]],template:function(i,n){i&1&&(o(0,"button",0),_("click",function(){return n.dialogOpen.set(!0)}),s(1,"Open dialog"),a(),o(2,"table")(3,"tbody"),B(4,T0,7,2,"tr",null,G,!1,S0,3,0,"tr"),a()(),o(7,"ard-dialog",1),K("openChange",function(c){return W(n.dialogOpen,c)||(n.dialogOpen=c),c}),_("openChange",function(c){return n.addEvent("openChange",c)})("close",function(c){return n.addEvent("close",c)})("reject",function(){return n.addEvent("reject")})("confirm",function(){return n.addEvent("confirm")}),s(8,` Dialog content
`),a(),o(9,"button",0),_("click",function(){return n.dialogEventLog.set([])}),s(10,"Clear events"),a()),i&2&&(d(4),H(n.dialogEventLog()),d(3),z("open",n.dialogOpen))},dependencies:[Ai,Ei],styles:["table[_ngcontent-%COMP%]{margin-top:1rem;max-width:20rem}"]})}}return t})();var ES={component:Bl,html:`<button (click)="dialogOpen.set(true)">Open dialog</button>\r
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
`};var Hl=(()=>{class t{constructor(){this.nameControl=new hi("",{validators:[et.required,et.minLength(2),et.maxLength(64),et.pattern(/^[a-zA-Z\s]+$/)]})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["form-field-auto-error-example"]],features:[Je([Ys({required:"This field is required.",minlength:e=>`Enter at least ${e.requiredLength} characters.`,maxlength:e=>`Enter no more than ${e.requiredLength} characters.`,pattern:"Only letters and spaces are allowed."})])],decls:5,vars:2,consts:[["placeholder","Enter your name",3,"formControl"],[3,"control"]],template:function(i,n){i&1&&(o(0,"ard-form-field")(1,"ard-label"),s(2,"Name"),a(),C(3,"ard-input",0)(4,"ard-auto-error",1),a()),i&2&&(d(3),h("formControl",n.nameControl),d(),h("control",n.nameControl))},dependencies:[Yt,jt,bt,Pn,Nt,Ut,gi,pe,fi],styles:["ard-form-field[_ngcontent-%COMP%]{max-width:25ch}"]})}}return t})();var PS={component:Hl,html:`<ard-form-field>\r
  <ard-label>Name</ard-label>\r
  <ard-input [formControl]="nameControl" placeholder="Enter your name" />\r
  <ard-auto-error [control]="nameControl" />\r
</ard-form-field>`,scss:`ard-form-field {\r
  max-width: 25ch;\r
}`,ts:`import { Component } from '@angular/core';\r
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';\r
import { ArdiumFormFieldModule, ArdiumInputModule, provideErrorMap } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'form-field-auto-error-example',\r
  templateUrl: './form-field-auto-error-example.html',\r
  styleUrl: './form-field-auto-error-example.scss',\r
  standalone: true,\r
  imports: [ArdiumFormFieldModule, ArdiumInputModule, ReactiveFormsModule],\r
  providers: [\r
    provideErrorMap({\r
      required: 'This field is required.',\r
      minlength: (errorData: { requiredLength: number }) => \`Enter at least \${errorData.requiredLength} characters.\`,\r
      maxlength: (errorData: { requiredLength: number }) => \`Enter no more than \${errorData.requiredLength} characters.\`,\r
      pattern: 'Only letters and spaces are allowed.',\r
    })\r
  ]\r
})\r
export class FormFieldAutoErrorExample {\r
  readonly nameControl = new FormControl('', {\r
    validators: [\r
      Validators.required,\r
      Validators.minLength(2),\r
      Validators.maxLength(64),\r
      Validators.pattern(/^[a-zA-Z\\s]+$/),\r
    ],\r
  });\r
}\r
`};function D0(t,r){t&1&&(o(0,"ard-error"),s(1,"Please enter a valid name"),a())}var Ul=(()=>{class t{constructor(){this.nameControl=new hi("",[et.pattern(/^[A-Z]{2,} [A-Z]{2,}$/i)])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["form-field-basic-example"]],decls:7,vars:2,consts:[["reserveHintLine",""],[3,"formControl"]],template:function(i,n){i&1&&(o(0,"ard-form-field",0)(1,"ard-label"),s(2,"Full Name"),a(),C(3,"ard-input",1),o(4,"ard-hint"),s(5,"Write your first name and surname"),a(),g(6,D0,2,0,"ard-error"),a()),i&2&&(d(3),h("formControl",n.nameControl),d(3),y(n.nameControl.touched&&n.nameControl.errors?6:-1))},dependencies:[Yt,jt,bt,zs,Gi,Nt,Ut,gi,pe,fi],styles:["ard-form-field[_ngcontent-%COMP%]{max-width:35ch}"]})}}return t})();var HS={component:Ul,html:`<ard-form-field reserveHintLine>\r
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
`};function E0(t,r){t&1&&(Ri(0,3),o(1,"ard-error"),s(2,"Please enter a valid passport number"),a(),Oi())}var Nl=(()=>{class t{constructor(){this.passportControl=new hi("",[et.pattern(/^[A-Z\d]{9}$/i)])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["form-field-character-counter-example"]],decls:7,vars:3,consts:[["reserveHintLine",""],["placeholder","XXXXXXXXX","maxLength","9",3,"formControl"],["right",""],["ard-error",""]],template:function(i,n){if(i&1&&(o(0,"ard-form-field",0)(1,"ard-label"),s(2,"Passport Number"),a(),C(3,"ard-input",1),o(4,"ard-hint-error",2),s(5),a(),g(6,E0,3,0,"ng-container",3),a()),i&2){let l;d(3),h("formControl",n.passportControl),d(2),A("",(l=n.passportControl.value==null?null:n.passportControl.value.length)!==null&&l!==void 0?l:0,"/9"),d(),y(n.passportControl.touched&&n.passportControl.errors?6:-1)}},dependencies:[Yt,jt,bt,Gi,$s,Nt,Ut,gi,pe,fi],styles:["ard-form-field[_ngcontent-%COMP%]{max-width:25ch}"]})}}return t})();var zS={component:Nl,html:`<ard-form-field reserveHintLine>\r
  <ard-label>Passport Number</ard-label>\r
  <ard-input [formControl]="passportControl" placeholder="XXXXXXXXX" maxLength="9" />\r
\r
  <ard-hint-error right>{{ passportControl.value?.length ?? 0 }}/9</ard-hint-error>\r
\r
  @if (passportControl.touched && passportControl.errors) {\r
  <ng-container ard-error>\r
    <ard-error>Please enter a valid passport number</ard-error>\r
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
`};var jl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["form-field-required-optional-labels-example"]],decls:12,vars:0,consts:[["required",""],["optional",""]],template:function(i,n){i&1&&(o(0,"ard-form-field")(1,"ard-label"),s(2,"Normal label"),a(),C(3,"ard-input"),a(),o(4,"ard-form-field")(5,"ard-label",0),s(6,"Required label"),a(),C(7,"ard-input"),a(),o(8,"ard-form-field")(9,"ard-label",1),s(10,"Optional label"),a(),C(11,"ard-input"),a())},dependencies:[Yt,jt,bt,Nt,Ut],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;gap:1rem}ard-form-field[_ngcontent-%COMP%]{width:12.5rem}"]})}}return t})();var GS={component:jl,html:`<ard-form-field>\r
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
`};var Yl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["icon-button-basic-example"]],decls:10,vars:0,consts:[[1,"grid"],["color","none"],["filled",""],["color","primary"],["color","danger"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"ard-icon-button",1)(2,"ard-icon",2),s(3,"close"),a()(),o(4,"ard-icon-button",3)(5,"ard-icon",2),s(6,"home"),a()(),o(7,"ard-icon-button",4)(8,"ard-icon",2),s(9,"delete"),a()()())},dependencies:[re,ce,ze,$e],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1.5rem;justify-items:center;max-width:15rem}"]})}}return t})();var tD={component:Yl,html:`<div class="grid">\r
  <ard-icon-button color="none">\r
    <ard-icon filled>close</ard-icon>\r
  </ard-icon-button>\r
  <ard-icon-button color="primary">\r
    <ard-icon filled>home</ard-icon>\r
  </ard-icon-button>\r
  <ard-icon-button color="danger">\r
    <ard-icon filled>delete</ard-icon>\r
  </ard-icon-button>\r
</div>\r
`,scss:`.grid {\r
  display: grid;\r
  grid-template-columns: 1fr 1fr 1fr;\r
  gap: 1.5rem;\r
  justify-items: center;\r
  max-width: 15rem;\r
}`,ts:`import { Component } from '@angular/core';\r
import { ArdiumIconButtonModule, ArdiumIconModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'icon-button-basic-example',\r
  templateUrl: './icon-button-basic-example.html',\r
  styleUrl: './icon-button-basic-example.scss',\r
  standalone: true,\r
  imports: [ArdiumIconModule, ArdiumIconButtonModule],\r
})\r
export class IconButtonBasicExample {}\r
`};var $l=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["icon-button-compact-example"]],decls:10,vars:0,consts:[["color","none"],["filled",""],["color","none","compact",""]],template:function(i,n){i&1&&(o(0,"span"),s(1,"Default"),a(),o(2,"ard-icon-button",0)(3,"ard-icon",1),s(4,"close"),a()(),o(5,"span"),s(6,"Compact"),a(),o(7,"ard-icon-button",2)(8,"ard-icon",1),s(9,"close"),a()())},dependencies:[ze,$e,re,ce],styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:max-content max-content;gap:1rem;align-items:center}"]})}}return t})();var oD={component:$l,html:`\r
<span>Default</span>\r
<ard-icon-button color="none">\r
  <ard-icon filled>close</ard-icon>\r
</ard-icon-button>\r
\r
<span>Compact</span>\r
<ard-icon-button color="none" compact>\r
  <ard-icon filled>close</ard-icon>\r
</ard-icon-button>\r
`,scss:`:host {\r
  display: grid;\r
  grid-template-columns: max-content max-content;\r
  gap: 1rem;\r
  align-items: center;\r
}`,ts:`import { Component } from '@angular/core';
import { ArdiumIconButtonModule, ArdiumIconModule } from '@ardium-ui/ui';

@Component({
  selector: 'icon-button-compact-example',
  templateUrl: './icon-button-compact-example.html',
  styleUrl: './icon-button-compact-example.scss',
  standalone: true,
  imports: [ArdiumIconButtonModule, ArdiumIconModule],
})
export class IconButtonCompactExample {}
`};var zl=(()=>{class t{onClick(){console.log("Button clicked!")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["icon-button-disabled-example"]],decls:10,vars:0,consts:[["disabled","","title","This button is disabled!",3,"click"],["disabled","","pointerEventsWhenDisabled","","title","This button is disabled!",3,"click"]],template:function(i,n){i&1&&(o(0,"span"),s(1,"Default"),a(),o(2,"ard-icon-button",0),_("click",function(){return n.onClick()}),o(3,"ard-icon"),s(4,"arrow_selector_tool"),a()(),o(5,"span"),s(6,"With pointerEventsWhenDisabled"),a(),o(7,"ard-icon-button",1),_("click",function(){return n.onClick()}),o(8,"ard-icon"),s(9,"block"),a()())},dependencies:[me,ze,$e,re,ce],styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:max-content max-content;gap:1rem;align-items:center}"]})}}return t})();var uD={component:zl,html:`<span>Default</span>\r
<ard-icon-button disabled (click)="onClick()" title="This button is disabled!">\r
  <ard-icon>arrow_selector_tool</ard-icon>\r
</ard-icon-button>\r
\r
<span>With pointerEventsWhenDisabled</span>\r
<ard-icon-button disabled pointerEventsWhenDisabled (click)="onClick()" title="This button is disabled!">\r
  <ard-icon>block</ard-icon>\r
</ard-icon-button>\r
`,scss:`:host {\r
  display: grid;\r
  grid-template-columns: max-content max-content;\r
  gap: 1rem;\r
  align-items: center;\r
}`,ts:`import { Component } from '@angular/core';\r
import { ArdiumButtonModule, ArdiumIconButtonModule, ArdiumIconModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'icon-button-disabled-example',\r
  templateUrl: './icon-button-disabled-example.html',\r
  styleUrl: './icon-button-disabled-example.scss',\r
  standalone: true,\r
  imports: [ArdiumButtonModule, ArdiumIconButtonModule, ArdiumIconModule],\r
})\r
export class IconButtonDisabledExample {\r
  onClick() {\r
    console.log('Button clicked!');\r
  }\r
}\r
`};var Wl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["kbd-appearances-example"]],decls:13,vars:0,consts:[[1,"grid"],["appearance","outlined"],["appearance","filled"],["appearance","transparent"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"ard-kbd",1),s(2,"Ctrl"),a(),o(3,"ard-kbd",2),s(4,"Ctrl"),a(),o(5,"ard-kbd",3),s(6,"Ctrl"),a(),o(7,"ard-kbd-shortcut",1),s(8,"Ctrl+C"),a(),o(9,"ard-kbd-shortcut",2),s(10,"Ctrl+C"),a(),o(11,"ard-kbd-shortcut",3),s(12,"Ctrl+C"),a()())},dependencies:[Ve,nt,Di,Si],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:max-content max-content max-content;gap:1rem}"]})}}return t})();var gD={component:Wl,html:`<div class="grid">\r
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
export class KbdAppearancesExample {}`};var Kl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["kbd-basic-example"]],decls:4,vars:0,template:function(i,n){i&1&&(s(0,"Press "),o(1,"ard-kbd"),s(2,"Shift"),a(),s(3," to continue."))},dependencies:[Ve,nt],encapsulation:2})}}return t})();var bD={component:Kl,html:"Press <ard-kbd>Shift</ard-kbd> to continue.",ts:`import { Component } from "@angular/core";\r
import { ArdiumKbdModule } from "@ardium-ui/ui";\r
\r
@Component({\r
  selector: 'kbd-basic-example',\r
  templateUrl: 'kbd-basic-example.html',\r
  standalone: true,\r
  imports: [ArdiumKbdModule],\r
})\r
export class KbdBasicExample {}`};var ql=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["kbd-directive-example"]],decls:4,vars:0,consts:[["ardKbd",""]],template:function(i,n){i&1&&(s(0,"Press "),o(1,"kbd",0),s(2,"Vol. Down"),a(),s(3," to continue."))},dependencies:[Ve,Ws],encapsulation:2})}}return t})();var DD={component:ql,html:"Press <kbd ardKbd>Vol. Down</kbd> to continue.",ts:`import { Component } from "@angular/core";\r
import { ArdiumKbdModule } from "@ardium-ui/ui";\r
\r
@Component({\r
  selector: 'kbd-directive-example',\r
  templateUrl: 'kbd-directive-example.html',\r
  standalone: true,\r
  imports: [ArdiumKbdModule],\r
})\r
export class KbdDirectiveExample {}`};var Ql=(()=>{class t{constructor(){this.keys=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],this._currentKeyIndex=E(0),this.currentKey=F(()=>this.keys[this._currentKeyIndex()])}ngOnInit(){this._interval=setInterval(()=>{this._currentKeyIndex()===this.keys.length-1?this._currentKeyIndex.set(0):this._currentKeyIndex.update(e=>e+1)},1e3)}ngOnDestroy(){this._interval&&clearInterval(this._interval)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["kbd-dynamic-example"]],decls:1,vars:1,consts:[[3,"key"]],template:function(i,n){i&1&&C(0,"ard-kbd",0),i&2&&h("key",n.currentKey())},dependencies:[Ve,nt],encapsulation:2})}}return t})();var PD={component:Ql,html:'<ard-kbd [key]="currentKey()" />',ts:`import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';\r
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
`};var Gl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["kbd-full-example"]],decls:12,vars:0,consts:[["full",""]],template:function(i,n){i&1&&(o(0,"ard-kbd",0),s(1,"KeyF"),a(),o(2,"ard-kbd",0),s(3,"Digit3"),a(),o(4,"ard-kbd",0),s(5,"ArrowUp"),a(),o(6,"ard-kbd",0),s(7,"Tab"),a(),o(8,"ard-kbd",0),s(9,"MetaLeft"),a(),o(10,"ard-kbd",0),s(11,"AudioVolumeDown"),a())},dependencies:[Ve,nt],encapsulation:2})}}return t})();var BD={component:Gl,html:`<ard-kbd full>KeyF</ard-kbd>\r
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
`};var Xl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["kbd-shortcut-example"]],decls:4,vars:0,template:function(i,n){i&1&&(s(0,"Press "),o(1,"ard-kbd-shortcut"),s(2,"Ctrl+C"),a(),s(3," to copy."))},dependencies:[Di,Si],encapsulation:2})}}return t})();var YD={component:Xl,html:"Press <ard-kbd-shortcut>Ctrl+C</ard-kbd-shortcut> to copy.",ts:`import { Component } from "@angular/core";\r
import { ArdiumKbdShortcutModule } from "@ardium-ui/ui";\r
\r
@Component({\r
  selector: 'kbd-shortcut-example',\r
  templateUrl: 'kbd-shortcut-example.html',\r
  standalone: true,\r
  imports: [ArdiumKbdShortcutModule],\r
})\r
export class KbdShortcutExample {}`};var Zl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["kbd-translation-example"]],decls:12,vars:0,template:function(i,n){i&1&&(o(0,"ard-kbd"),s(1,"KeyF"),a(),o(2,"ard-kbd"),s(3,"Digit3"),a(),o(4,"ard-kbd"),s(5,"ArrowUp"),a(),o(6,"ard-kbd"),s(7,"Tab"),a(),o(8,"ard-kbd"),s(9,"MetaLeft"),a(),o(10,"ard-kbd"),s(11,"AudioVolumeDown"),a())},dependencies:[Ve,nt],encapsulation:2})}}return t})();var qD={component:Zl,html:`<ard-kbd>KeyF</ard-kbd>\r
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
`};var Jl=(()=>{class t{constructor(){this.value=E(10)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["number-input-basic-example"]],decls:3,vars:2,consts:[[3,"valueChange","value"]],template:function(i,n){i&1&&(o(0,"ard-number-input",0),K("valueChange",function(c){return W(n.value,c)||(n.value=c),c}),a(),o(1,"p"),s(2),a()),i&2&&(z("value",n.value),d(2),A("Selected value: ",n.value(),""))},dependencies:[Ge,Qe],styles:["ard-number-input[_ngcontent-%COMP%]{width:12rem}"]})}}return t})();var tE={component:Jl,html:`<ard-number-input [(value)]="value" />\r
\r
<p>Selected value: {{ value() }}</p>\r
`,scss:`ard-number-input {\r
  width: 12rem;\r
}`,ts:`import { Component, signal } from '@angular/core';\r
import { ArdiumNumberInputModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'number-input-basic-example',\r
  templateUrl: './number-input-basic-example.html',\r
  styleUrl: './number-input-basic-example.scss',\r
  standalone: true,\r
  imports: [ArdiumNumberInputModule],\r
})\r
export class NumberInputBasicExample {\r
  readonly value = signal<number>(10);\r
}\r
`};var ed=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["number-input-compact-example"]],decls:2,vars:0,consts:[["value","123"],["value","123","compact",""]],template:function(i,n){i&1&&C(0,"ard-number-input",0)(1,"ard-number-input",1)},dependencies:[Ge,Qe],styles:["[_nghost-%COMP%]{display:flex;gap:2rem}ard-number-input[_ngcontent-%COMP%]{width:12rem}"]})}}return t})();var oE={component:ed,html:`<ard-number-input value="123" />\r
<ard-number-input value="123" compact />\r
`,scss:`:host {\r
  display: flex;\r
  gap: 2rem;\r
}\r
ard-number-input {\r
  width: 12rem;\r
}`,ts:`import { Component } from '@angular/core';\r
import { ArdiumNumberInputModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'number-input-compact-example',\r
  templateUrl: './number-input-compact-example.html',\r
  styleUrl: './number-input-compact-example.scss',\r
  standalone: true,\r
  imports: [ArdiumNumberInputModule],\r
})\r
export class NumberInputCompactExample {}\r
`};function A0(t,r){if(t&1&&(o(0,"tr")(1,"td")(2,"code"),s(3),a()(),o(4,"td")(5,"code"),s(6),a()()()),t&2){let e=r.$implicit;d(3),A("(",e[0],")"),d(3),A("$event = ",e[1],"")}}function F0(t,r){t&1&&(o(0,"tr")(1,"td"),s(2,"Emitted events will be shown here."),a()())}var td=(()=>{class t{constructor(){this.eventLog=E([])}addEvent(e,i){this.eventLog.update(n=>[...n,[e,typeof i=="string"?`"${i}"`:typeof i=="object"?JSON.stringify(i):String(i)]])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["number-input-emitted-events-example"]],decls:8,vars:1,consts:[["min","0","max","100",3,"valueChange","input","change","quickChange"],[3,"click"]],template:function(i,n){i&1&&(o(0,"table")(1,"tbody"),B(2,A0,7,2,"tr",null,G,!1,F0,3,0,"tr"),a()(),o(5,"ard-number-input",0),_("valueChange",function(c){return n.addEvent("valueChange",c)})("input",function(c){return n.addEvent("input",c)})("change",function(c){return n.addEvent("change",c)})("quickChange",function(c){return n.addEvent("quickChange",c)}),a(),o(6,"button",1),_("click",function(){return n.eventLog.set([])}),s(7,"Clear events"),a()),i&2&&(d(2),H(n.eventLog()))},dependencies:[Ge,Qe],styles:["ard-number-input[_ngcontent-%COMP%]{width:12rem}table[_ngcontent-%COMP%]{margin-top:1rem;max-width:20rem}"]})}}return t})();var mE={component:td,html:`<table>\r
  <tbody>\r
    @for (event of eventLog(); track $index) {\r
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
<ard-number-input\r
  min="0"\r
  max="100"\r
  (valueChange)="addEvent('valueChange', $event)"\r
  (input)="addEvent('input', $event)"\r
  (change)="addEvent('change', $event)"\r
  (quickChange)="addEvent('quickChange', $event)"\r
/>\r
\r
<button (click)="eventLog.set([])">Clear events</button>\r
`,scss:`ard-number-input {\r
  width: 12rem;\r
}\r
table {\r
  margin-top: 1rem;\r
  max-width: 20rem;\r
}`,simpleHtml:`<ard-number-input\r
  min="0"\r
  max="100"\r
  (valueChange)="addEvent('valueChange', $event)"\r
  (input)="addEvent('input', $event)"\r
  (change)="addEvent('change', $event)"\r
  (quickChange)="addEvent('quickChange', $event)"\r
/>\r
`,ts:`import { Component, signal } from '@angular/core';\r
import { ArdiumNumberInputModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'number-input-emitted-events-example',\r
  templateUrl: './number-input-emitted-events-example.html',\r
  styleUrl: './number-input-emitted-events-example.scss',\r
  standalone: true,\r
  imports: [ArdiumNumberInputModule],\r
})\r
export class NumberInputEmittedEventsExample {\r
  readonly eventLog = signal<[string, any][]>([]);\r
\r
  addEvent(name: string, event?: any) {\r
    this.eventLog.update(v => [\r
      ...v,\r
      [\r
        name,\r
        typeof event === 'string' ? \`"\${event}"\` : typeof event === 'object' ? JSON.stringify(event) : String(event),\r
      ],\r
    ]);\r
  }\r
}\r
`};var id=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["number-input-float-example"]],decls:3,vars:0,consts:[["allowFloat","","min","0","max","10","stepSize","0.5","maxDecimalPlaces","2","fixedDecimalPlaces",""]],template:function(i,n){i&1&&(o(0,"p"),s(1,"Type the amount of money to transfer"),a(),C(2,"ard-number-input",0))},dependencies:[Ge,Qe],styles:["ard-number-input[_ngcontent-%COMP%]{width:12rem}"]})}}return t})();var vE={component:id,html:`<p>Type the amount of money to transfer</p>\r
<ard-number-input allowFloat min="0" max="10" stepSize="0.5" maxDecimalPlaces="2" fixedDecimalPlaces />\r
`,scss:`ard-number-input {\r
  width: 12rem;\r
}`,ts:`import { Component } from '@angular/core';\r
import { ArdiumNumberInputModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'number-input-float-example',\r
  templateUrl: './number-input-float-example.html',\r
  styleUrl: './number-input-float-example.scss',\r
  standalone: true,\r
  imports: [ArdiumNumberInputModule],\r
})\r
export class NumberInputFloatExample {}\r
`};var nd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["number-input-min-max-step-example"]],decls:1,vars:0,consts:[["min","-100","max","100","stepSize","10","value","-15"]],template:function(i,n){i&1&&C(0,"ard-number-input",0)},dependencies:[Ge,Qe],styles:["ard-number-input[_ngcontent-%COMP%]{width:12rem}"]})}}return t})();var wE={component:nd,html:'<ard-number-input min="-100" max="100" stepSize="10" value="-15" />',scss:`ard-number-input {\r
  width: 12rem;\r
}`,ts:`import { Component } from '@angular/core';\r
import { ArdiumNumberInputModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'number-input-min-max-step-example',\r
  templateUrl: './number-input-min-max-step-example.html',\r
  styleUrl: './number-input-min-max-step-example.scss',\r
  standalone: true,\r
  imports: [ArdiumNumberInputModule],\r
})\r
export class NumberInputMinMaxStepExample {}\r
`};var rd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["number-input-no-buttons-example"]],decls:1,vars:0,consts:[["value","123","noButtons","","alignText","left"]],template:function(i,n){i&1&&C(0,"ard-number-input",0)},dependencies:[Ge,Qe],styles:["ard-number-input[_ngcontent-%COMP%]{width:12rem}"]})}}return t})();var AE={component:rd,html:'<ard-number-input value="123" noButtons alignText="left" />',scss:`ard-number-input {\r
  width: 12rem;\r
}`,ts:`import { Component } from '@angular/core';\r
import { ArdiumNumberInputModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'number-input-no-buttons-example',\r
  templateUrl: './number-input-no-buttons-example.html',\r
  styleUrl: './number-input-no-buttons-example.scss',\r
  standalone: true,\r
  imports: [ArdiumNumberInputModule],\r
})\r
export class NumberInputNoButtonsExample {}\r
`};function I0(t,r){t&1&&s(0,"$")}function M0(t,r){t&1&&s(0,".00")}var ad=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["number-input-prefix-suffix-example"]],decls:3,vars:0,consts:[["value","123","alignText","right","min","0","max","10000"],["ard-prefix-tmp",""],["ard-suffix-tmp",""]],template:function(i,n){i&1&&(o(0,"ard-number-input",0),g(1,I0,1,0,"ng-template",1)(2,M0,1,0,"ng-template",2),a())},dependencies:[Ge,Qe,In,Mn],styles:["ard-number-input[_ngcontent-%COMP%]{width:12rem}"]})}}return t})();var PE={component:ad,html:`<ard-number-input value="123" alignText="right" min="0" max="10000">\r
  <ng-template ard-prefix-tmp>$</ng-template>\r
  <ng-template ard-suffix-tmp>.00</ng-template>\r
</ard-number-input>`,scss:`ard-number-input {\r
  width: 12rem;\r
}`,ts:`import { Component } from '@angular/core';\r
import { ArdiumNumberInputModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'number-input-prefix-suffix-example',\r
  templateUrl: './number-input-prefix-suffix-example.html',\r
  styleUrl: './number-input-prefix-suffix-example.scss',\r
  standalone: true,\r
  imports: [ArdiumNumberInputModule],\r
})\r
export class NumberInputPrefixSuffixExample {}\r
`};var od=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["slider-basic-example"]],decls:1,vars:0,template:function(i,n){i&1&&C(0,"ard-slider")},dependencies:[Ti,wi],encapsulation:2})}}return t})();var BE={component:od,html:"<ard-slider />",ts:`import { Component } from '@angular/core';
import { ArdiumSliderModule } from '@ardium-ui/ui';

@Component({
  selector: 'slider-basic-example',
  templateUrl: './slider-basic-example.html',
  standalone: true,
  imports: [ArdiumSliderModule],
})
export class SliderBasicExample {
  
}
`};var k0=()=>({value:0,label:"Min"}),P0=()=>({value:25,label:"Low"}),V0=()=>({value:50,label:"Medium"}),R0=()=>({value:75,label:"High"}),O0=()=>({value:100,label:"Max"}),L0=(t,r,e,i,n)=>[t,r,e,i,n],sd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["slider-label-objects-example"]],decls:1,vars:12,consts:[["showValueTicks","",3,"labels"]],template:function(i,n){i&1&&C(0,"ard-slider",0),i&2&&h("labels",Pa(6,L0,di(1,k0),di(2,P0),di(3,V0),di(4,R0),di(5,O0)))},dependencies:[Ti,wi],styles:["ard-slider[_ngcontent-%COMP%]{max-width:15rem}"]})}}return t})();var YE={component:sd,html:`<ard-slider\r
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
`};var ld=(()=>{class t{constructor(){this.value=E(5)}formatTooltipFn(e){let i=["KB","MB","GB","TB"],n=0,l=2**e;for(;l>=1024&&n<i.length-1;)n+=1,l/=1024;return`${l} ${i[n]}`}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["slider-non-linear-example"]],decls:5,vars:4,consts:[["min","0","max","30",3,"valueChange","value","tooltipFormatFn"]],template:function(i,n){i&1&&(o(0,"ard-slider",0),K("valueChange",function(c){return W(n.value,c)||(n.value=c),c}),a(),o(1,"p"),s(2),a(),o(3,"p"),s(4),a()),i&2&&(z("value",n.value),h("tooltipFormatFn",n.formatTooltipFn),d(2),A("Actual value: ",n.value(),""),d(2),A("Formatted value: ",n.formatTooltipFn(n.value()),""))},dependencies:[Ti,wi],styles:["ard-slider[_ngcontent-%COMP%]{margin-bottom:1rem;max-width:15rem}"]})}}return t})();var GE={component:ld,html:`<ard-slider [(value)]="value" [tooltipFormatFn]="formatTooltipFn" min="0" max="30" />\r
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
`};var dd=(()=>{class t{constructor(){this.value=E({from:30,to:80})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["slider-range-example"]],decls:3,vars:3,consts:[[3,"valueChange","value"]],template:function(i,n){i&1&&(o(0,"ard-range-slider",0),K("valueChange",function(c){return W(n.value,c)||(n.value=c),c}),a(),o(1,"p"),s(2),a()),i&2&&(z("value",n.value),d(2),li("Selected range: ",n.value().from," \u2013 ",n.value().to,""))},dependencies:[Yn,jn],styles:["ard-range-slider[_ngcontent-%COMP%]{display:block;margin-bottom:1rem;max-width:15rem}"]})}}return t})();var nA={component:dd,html:`<ard-range-slider [(value)]="value" />\r
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
`};var cd=(()=>{class t{constructor(){this.value=E({from:30,to:80}),this.selectionBehavior=E(ii.Allow),this.minimumDistance=E(0)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["slider-range-selection-behaviors-example"]],decls:19,vars:9,consts:[[3,"valueChange","value"],["value","allow"],["value","push"],["value","block"],["for","minimumDistance"],["type","number","id","minimumDistance","min","0",3,"ngModelChange","ngModel"],[3,"valueChange","value","selectionBehavior","minimumDistance"]],template:function(i,n){i&1&&(o(0,"ard-radio-group",0),K("valueChange",function(c){return W(n.selectionBehavior,c)||(n.selectionBehavior=c),c}),o(1,"ard-radio",1)(2,"code"),s(3,"'allow'"),a()(),o(4,"ard-radio",2)(5,"code"),s(6,"'push'"),a()(),o(7,"ard-radio",3)(8,"code"),s(9,"'block'"),a()()(),o(10,"div")(11,"label",4),s(12," Minimum distance: "),a(),o(13,"input",5),K("ngModelChange",function(c){return W(n.minimumDistance,c)||(n.minimumDistance=c),c}),a()(),o(14,"ard-range-slider",6),K("valueChange",function(c){return W(n.value,c)||(n.value=c),c}),a(),o(15,"p"),s(16),a(),o(17,"pre"),s(18),a()),i&2&&(z("value",n.selectionBehavior),d(13),z("ngModel",n.minimumDistance),d(),z("value",n.value),h("selectionBehavior",n.selectionBehavior())("minimumDistance",n.minimumDistance()),d(2),li("Selected range: ",n.value().from," \u2013 ",n.value().to,""),d(2),li(`<ard-range-slider
  [(value)]="value"
  [selectionBehavior]="`,n.selectionBehavior(),`"
  [minimumDistance]="`,n.minimumDistance(),`"
/>
`))},dependencies:[Yn,jn,Ls,Os,kn,fe,we,hn,pe,Ka,Te],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem}ard-radio-group[_ngcontent-%COMP%]{flex-direction:column}label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6ch;-webkit-user-select:none;user-select:none}"]})}}return t})();var uA={component:cd,html:`<ard-radio-group [(value)]="selectionBehavior">\r
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
`};var ud=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["spinner-basic-example"]],decls:1,vars:0,template:function(i,n){i&1&&C(0,"ard-spinner")},dependencies:[Wn,zn],encapsulation:2})}}return t})();var gA={component:ud,html:"<ard-spinner />",ts:`import { Component } from '@angular/core';\r
import { ArdiumSpinnerModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'spinner-basic-example',\r
  templateUrl: './spinner-basic-example.html',\r
  standalone: true,\r
  imports: [ArdiumSpinnerModule],\r
})\r
export class SpinnerBasicExample {}\r
`};var pd=(()=>{class t{constructor(){this.spinnerSize=E("4rem")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["spinner-sizing-example"]],decls:4,vars:2,consts:[["for","size"],["type","text","id","size","value","4rem",3,"input"]],template:function(i,n){i&1&&(o(0,"label",0),s(1,"CSS Size"),a(),o(2,"input",1),_("input",function(c){return n.spinnerSize.set(c.target.value)}),a(),C(3,"ard-spinner")),i&2&&(d(3),Se("width:"+n.spinnerSize()))},dependencies:[Wn,zn],styles:["ard-spinner[_ngcontent-%COMP%]{display:block;margin-top:1.5rem}"]})}}return t})();var wA={component:pd,html:`<label for="size">CSS Size</label>\r
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
`};var md=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["tabber-basic-example"]],decls:10,vars:0,consts:[["tabId","tab1","label","Tab 1"],["tabId","tab2","label","Tab 2"],["tabId","tab3","label","Tab 3"]],template:function(i,n){i&1&&(o(0,"ard-tabber")(1,"ard-tab",0)(2,"p"),s(3,"This is the content of Tab 1."),a()(),o(4,"ard-tab",1)(5,"p"),s(6,"This is the content of Tab 2."),a()(),o(7,"ard-tab",2)(8,"p"),s(9,"This is the content of Tab 3."),a()()())},dependencies:[zt,$t,xt],encapsulation:2})}}return t})();var AA={component:md,html:`<ard-tabber>\r
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
`};var hd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["tabber-label-example"]],decls:25,vars:0,consts:[["tabId","anim","label","Animals"],["tabId","pl","label","Plants"],["tabId","fung","label","Fungi"]],template:function(i,n){i&1&&(o(0,"ard-tabber")(1,"ard-tab",0)(2,"ul")(3,"li"),s(4,"Cat"),a(),o(5,"li"),s(6,"Dog"),a(),o(7,"li"),s(8,"Elephant"),a()()(),o(9,"ard-tab",1)(10,"ul")(11,"li"),s(12,"Rose"),a(),o(13,"li"),s(14,"Oak"),a(),o(15,"li"),s(16,"Tulip"),a()()(),o(17,"ard-tab",2)(18,"ul")(19,"li"),s(20,"Mushroom"),a(),o(21,"li"),s(22,"Yeast"),a(),o(23,"li"),s(24,"Morel"),a()()()())},dependencies:[zt,$t,xt],encapsulation:2})}}return t})();var PA={component:hd,html:`<ard-tabber>\r
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
`};function B0(t,r){if(t&1&&(o(0,"ard-icon",5),s(1,"home"),a(),o(2,"span"),s(3),a()),t&2){let e=r.$implicit;d(3),v(e)}}function H0(t,r){t&1&&(o(0,"ard-icon",5),s(1,"person"),a(),o(2,"span"),s(3,"Profile"),a())}var fd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["tabber-label-templates-example"]],decls:13,vars:1,consts:[["customLabelTemplate",""],["ard-tabber-label-tmp",""],["tabId","tab1","label","Home 1"],["tabId","tab2","label","Home 2"],["tabId","tab3",3,"label"],["aria-hidden","true"]],template:function(i,n){if(i&1&&(o(0,"ard-tabber"),g(1,B0,4,1,"ng-template",1),o(2,"ard-tab",2)(3,"p"),s(4,"This is the content of the Home 1 tab."),a()(),o(5,"ard-tab",3)(6,"p"),s(7,"This is the content of the Home 2 tab."),a()(),o(8,"ard-tab",4)(9,"p"),s(10,"This is the content of the Profile tab."),a()()(),g(11,H0,4,0,"ng-template",null,0,oe)),i&2){let l=V(12);d(8),h("label",l)}},dependencies:[zt,$t,xt,Vn,re,ce],encapsulation:2})}}return t})();var BA={component:fd,html:`<ard-tabber>\r
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
`};var gd=(()=>{class t{constructor(){this.insideClicks=E(0),this.outsideClicks=E(0)}onClick(){this.insideClicks.update(e=>e+1)}onOutsideClick(){this.outsideClicks.update(e=>e+1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["click-outside-example"]],decls:6,vars:2,consts:[[3,"click","ardClickOutside"]],template:function(i,n){i&1&&(o(0,"div",0),_("click",function(){return n.onClick()})("ardClickOutside",function(){return n.onOutsideClick()}),s(1,"My element"),a(),o(2,"p"),s(3),C(4,"br"),s(5),a()),i&2&&(d(3),A(" Inside clicks: ",n.insideClicks()," "),d(2),A(" Outside clicks: ",n.outsideClicks(),`
`))},dependencies:[Za,Xa],styles:["[_nghost-%COMP%]{-webkit-user-select:none;user-select:none}div[_ngcontent-%COMP%]{width:167px;height:100px;display:grid;place-items:center;background-color:#90ee90}"]})}}return t})();var zA={component:gd,html:`<div (click)="onClick()" (ardClickOutside)="onOutsideClick()">My element</div>\r
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
}`};var U0=["*"],_d=(()=>{class t{constructor(){this.disabled=m(!1,{transform:it})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["my-button"]],inputs:{disabled:[1,"disabled"]},ngContentSelectors:U0,decls:2,vars:1,consts:[[3,"disabled"]],template:function(i,n){i&1&&(Y(),o(0,"button",0),L(1),a()),i&2&&h("disabled",n.disabled())},encapsulation:2})}}return t})();var vd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["coercion-boolean-example"]],decls:8,vars:1,consts:[["disabled",""],["disabled","false"],[3,"disabled"]],template:function(i,n){i&1&&(o(0,"my-button"),s(1,"Normal button"),a(),o(2,"my-button",0),s(3,"Disabled button"),a(),o(4,"my-button",1),s(5,"False button"),a(),o(6,"my-button",2),s(7,"Disabled button"),a()),i&2&&(d(6),h("disabled",!0))},dependencies:[_d],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]})}}return t})();var eF={component:vd,html:`<my-button>Normal button</my-button>\r
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
}`};var yd=(()=>{class t{constructor(){this.date=m.required({transform:e=>vo(e,new Date(""))})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["my-calendar"]],inputs:{date:[1,"date"]},decls:1,vars:1,template:function(i,n){i&1&&s(0),i&2&&A("The date is ",n.date(),"")},encapsulation:2})}}return t})();var Cd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["coercion-date-example"]],decls:2,vars:0,consts:[["date","1918.11.11"],["date","now"]],template:function(i,n){i&1&&C(0,"my-calendar",0)(1,"my-calendar",1)},dependencies:[yd],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]})}}return t})();var dF={component:Cd,html:`<my-calendar date="1918.11.11" />\r
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
`};var N0=["*"],bd=(()=>{class t{constructor(){this.delay=m(0,{transform:e=>to(e,0)})}alert(){setTimeout(()=>{alert("Hello world!")},this.delay())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["my-button"]],inputs:{delay:[1,"delay"]},ngContentSelectors:N0,decls:2,vars:0,consts:[[3,"click"]],template:function(i,n){i&1&&(Y(),o(0,"button",0),_("click",function(){return n.alert()}),L(1),a())},encapsulation:2})}}return t})();var xd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["coercion-number-example"]],decls:6,vars:1,consts:[["delay","500"],[3,"delay"]],template:function(i,n){i&1&&(o(0,"my-button"),s(1,"No delay"),a(),o(2,"my-button",0),s(3,"With delay"),a(),o(4,"my-button",1),s(5,"Long delay"),a()),i&2&&(d(4),h("delay",1500))},dependencies:[bd],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]})}}return t})();var vF={component:xd,html:`<my-button>No delay</my-button>\r
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
`};var wd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["coercion-usefulness-example"]],decls:0,vars:0,template:function(i,n){},encapsulation:2})}}return t})();var xF={component:wd,simpleHtml:`<ard-select disabled />\r
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
export class CoercionUsefulnessExample {}`};var Td=(()=>{class t{constructor(){this.exampleSignal=lo(["Pizza","Cheese","Spaghetti"])}push(e){e&&this.exampleSignal.push(e)}pop(){this.exampleSignal.pop()}map(){this.exampleSignal.map(e=>e.toUpperCase())}filter(){this.exampleSignal.filter(e=>e.length>6)}reverse(){this.exampleSignal.reverse()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["array-signal-basic-example"]],decls:18,vars:2,consts:[["pushText",""],[1,"left-side"],["type","text","placeholder","Text to push..."],[3,"click"],[1,"right-side"]],template:function(i,n){if(i&1){let l=j();o(0,"div",1),C(1,"input",2,0),o(3,"button",3),_("click",function(){T(l);let u=V(2);return S(n.push(u.value))}),s(4,"Push"),a(),o(5,"button",3),_("click",function(){return T(l),S(n.pop())}),s(6,"Pop"),a(),o(7,"button",3),_("click",function(){return T(l),S(n.map())}),s(8,"Map"),a(),o(9,"button",3),_("click",function(){return T(l),S(n.filter())}),s(10,"Filter"),a(),o(11,"button",3),_("click",function(){return T(l),S(n.reverse())}),s(12,"Reverse"),a()(),o(13,"div",4)(14,"p"),s(15),a(),o(16,"p"),s(17),a()()}i&2&&(d(15),A("isEmpty: ",n.exampleSignal.isEmpty().toString()," "),d(2),v(n.exampleSignal()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:center}button[_ngcontent-%COMP%]{margin-right:.75rem;margin-left:.25rem;padding:0 .125rem}"]})}}return t})();var EF={component:Td,html:`<div class="left-side">\r
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
`};var Sd=(()=>{class t{constructor(){this.exampleSignal=co(10)}increment(){this.exampleSignal.increment()}decrement(){this.exampleSignal.decrement()}reset(){this.exampleSignal.reset()}double(){this.exampleSignal.update(e=>e*2)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["counter-signal-basic-example"]],decls:14,vars:2,consts:[[1,"left-side"],[3,"click"],[1,"right-side"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"button",1),_("click",function(){return n.increment()}),s(2,"Increment"),a(),o(3,"button",1),_("click",function(){return n.decrement()}),s(4,"Decrement"),a(),o(5,"button",1),_("click",function(){return n.double()}),s(6,"Double"),a(),o(7,"button",1),_("click",function(){return n.reset()}),s(8,"Reset"),a()(),o(9,"div",2)(10,"p"),s(11),a(),o(12,"p"),s(13),a()()),i&2&&(d(11),A("isReset: ",n.exampleSignal.isReset().toString()," "),d(2),A("value: ",n.exampleSignal(),""))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:center}button[_ngcontent-%COMP%]{margin-right:1rem;padding:0 .125rem}"]})}}return t})();var kF={component:Sd,html:`<div class="left-side">\r
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
`};var Dd=(()=>{class t{constructor(){this.debouncedValue=uo("",500)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["debounced-signal-example"]],decls:5,vars:2,consts:[["for","debounced-input"],["type","text","id","debounced-input","placeholder","Search...",3,"ngModelChange","ngModel"]],template:function(i,n){i&1&&(o(0,"label",0),s(1,"What are you looking for?"),a(),o(2,"input",1),K("ngModelChange",function(c){return W(n.debouncedValue,c)||(n.debouncedValue=c),c}),a(),o(3,"p"),s(4),a()),i&2&&(d(2),z("ngModel",n.debouncedValue),d(2),A("Debounced value: ",n.debouncedValue(),""))},dependencies:[fe,we,pe,Te],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var BF={component:Dd,html:`<label for="debounced-input">What are you looking for?</label>\r
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
`};function j0(t,r){if(t&1&&(o(0,"tr")(1,"td"),s(2),a(),o(3,"td"),s(4),a()()),t&2){let e=r.$implicit;d(2),v(e[0]),d(2),v(e[1])}}var Ed=(()=>{class t{constructor(){this.exampleSignal=po([["food1","Pizza"]])}setKey(e,i){!e||!i||this.exampleSignal.setKey(e,i)}delete(e){e&&this.exampleSignal.delete(e)}update(){this.exampleSignal.update(e=>new Map([...e.entries()].map(i=>[i[0],i[1].toLowerCase()])))}clear(){this.exampleSignal.clear()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["map-signal-basic-example"]],decls:30,vars:2,consts:[["key",""],["value",""],[1,"left-side"],[1,"inputs"],["type","text","placeholder","Key"],["type","text","placeholder","Value"],[3,"click"],[1,"right-side"]],template:function(i,n){if(i&1){let l=j();o(0,"div",2)(1,"div",3),C(2,"input",4,0)(4,"input",5,1),a(),o(6,"div")(7,"button",6),_("click",function(){T(l);let u=V(3),x=V(5);return S(n.setKey(u.value,x.value))}),s(8,"Set key"),a(),o(9,"button",6),_("click",function(){T(l);let u=V(3);return S(n.delete(u.value))}),s(10,"Delete key"),a(),o(11,"button",6),_("click",function(){return T(l),S(n.clear())}),s(12,"Clear"),a(),o(13,"button",6),_("click",function(){return T(l),S(n.update())}),s(14,"Update (to lowercase)"),a()()(),o(15,"div",7)(16,"p"),s(17),a(),o(18,"p"),s(19),a(),o(20,"table")(21,"thead")(22,"tr")(23,"th"),s(24,"Key"),a(),o(25,"th"),s(26,"Value"),a()()(),o(27,"tbody"),B(28,j0,5,2,"tr",null,G),a()()()}i&2&&(d(17),A("isEmpty: ",n.exampleSignal.isEmpty().toString(),""),d(2),A("size: ",n.exampleSignal.size().toString(),""),d(9),H(n.exampleSignal()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:3rem}.inputs[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}input[_ngcontent-%COMP%]{margin-right:.25rem;max-width:10rem}button[_ngcontent-%COMP%]{margin-right:1rem;margin-top:.75rem;padding:0 .125rem}"]})}}return t})();var YF={component:Ed,html:`<div class="left-side">\r
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
`};var Ad=(()=>{class t{constructor(){this.favoriteFood=Lt("chocolate chip cookies",{name:"favorite-food",method:Ot.Cookies,maxAge:60*60*24*7})}clearSignal(){this.favoriteFood.clear()}get cookieValue(){let e=document.cookie.match(new RegExp("(^| )favorite-food=([^;]+)"));return e?e[2]:null}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["persistent-signal-cookies-example"]],decls:7,vars:2,consts:[["for","favorite-food"],["type","text","id","favorite-food",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,n){i&1&&(o(0,"label",0),s(1,"Favorite food"),a(),o(2,"input",1),K("ngModelChange",function(c){return W(n.favoriteFood,c)||(n.favoriteFood=c),c}),a(),o(3,"button",2),_("click",function(){return n.clearSignal()}),s(4,"Clear"),a(),o(5,"p"),s(6),a()),i&2&&(d(2),z("ngModel",n.favoriteFood),d(4),A("Your favorite food is: ",n.cookieValue,""))},dependencies:[fe,we,pe,Te],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var QF={component:Ad,html:`<label for="favorite-food">Favorite food</label>\r
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
`};var Fd=(()=>{class t{constructor(){this.favoriteFood=Lt("spaghetti",{name:"favorite-food",method:Ot.LocalStorage})}clearSignal(){this.favoriteFood.clear()}get localStorageValue(){return localStorage.getItem("favorite-food")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["persistent-signal-example"]],decls:7,vars:2,consts:[["for","favorite-food"],["type","text","id","favorite-food",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,n){i&1&&(o(0,"label",0),s(1,"Favorite food"),a(),o(2,"input",1),K("ngModelChange",function(c){return W(n.favoriteFood,c)||(n.favoriteFood=c),c}),a(),o(3,"button",2),_("click",function(){return n.clearSignal()}),s(4,"Clear"),a(),o(5,"p"),s(6),a()),i&2&&(d(2),z("ngModel",n.favoriteFood),d(4),A("Your favorite food is: ",n.localStorageValue,""))},dependencies:[fe,we,pe,Te],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var tI={component:Fd,html:`<label for="favorite-food">Favorite food</label>\r
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
`};var Id=(()=>{class t{constructor(){this.favoriteFood=Lt("spaghetti",{name:"favorite-food",method:Ot.LocalStorage})}clearSignal(){this.favoriteFood.clear()}get localStorageValue(){return localStorage.getItem("favorite-food")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["persistent-signal-local-storage-example"]],decls:7,vars:2,consts:[["for","favorite-food"],["type","text","id","favorite-food",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,n){i&1&&(o(0,"label",0),s(1,"Favorite food"),a(),o(2,"input",1),K("ngModelChange",function(c){return W(n.favoriteFood,c)||(n.favoriteFood=c),c}),a(),o(3,"button",2),_("click",function(){return n.clearSignal()}),s(4,"Clear"),a(),o(5,"p"),s(6),a()),i&2&&(d(2),z("ngModel",n.favoriteFood),d(4),A("Your favorite food is: ",n.localStorageValue,""))},dependencies:[fe,we,pe,Te],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var sI={component:Id,html:`<label for="favorite-food">Favorite food</label>\r
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
`};var Md=(()=>{class t{constructor(){this.acceptsTerms=Lt(!1,{name:"accepts-terms",method:Ot.LocalStorage,serialize:e=>String(!!e),deserialize:e=>e==="true"})}get termsValue(){return localStorage.getItem("accepts-terms")??"null"}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["persistent-signal-serialization-example"]],decls:6,vars:2,consts:[[3,"selectedChange","selected"]],template:function(i,n){i&1&&(o(0,"div")(1,"ard-checkbox",0),K("selectedChange",function(c){return W(n.acceptsTerms,c)||(n.acceptsTerms=c),c}),a(),o(2,"span"),s(3,"Do you accept the terms?"),a()(),o(4,"p"),s(5),a()),i&2&&(d(),z("selected",n.acceptsTerms),d(4),A("Terms accepted: ",n.termsValue,""))},dependencies:[fe,Nn,Un],styles:["div[_ngcontent-%COMP%]{display:flex;gap:.5rem}p[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return t})();var hI={component:Md,html:`<div>\r
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
`};var kd=(()=>{class t{constructor(){this.favoriteColor=Cn("red","favorite-color")}clearSignal(){this.favoriteColor.clear()}get queryParams(){return window.location.search}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["query-param-signal-example"]],decls:7,vars:2,consts:[["for","favorite-color"],["type","text","id","favorite-color",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,n){i&1&&(o(0,"label",0),s(1,"Favorite color"),a(),o(2,"input",1),K("ngModelChange",function(c){return W(n.favoriteColor,c)||(n.favoriteColor=c),c}),a(),o(3,"button",2),_("click",function(){return n.clearSignal()}),s(4,"Clear"),a(),o(5,"p"),s(6),a()),i&2&&(d(2),z("ngModel",n.favoriteColor),d(4),A("URL query params: ",n.queryParams,""))},dependencies:[fe,we,pe,Te],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var CI={component:kd,html:`<label for="favorite-color">Favorite color</label>\r
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
`};var Pd=(()=>{class t{constructor(){this.acceptsTerms=Cn(!1,{paramName:"accepts-terms",serialize:e=>e===null?null:String(e),deserialize:e=>e==="true"})}get queryParams(){return window.location.search}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["query-param-signal-serialization-example"]],decls:6,vars:2,consts:[[3,"selectedChange","selected"]],template:function(i,n){i&1&&(o(0,"div")(1,"ard-checkbox",0),K("selectedChange",function(c){return W(n.acceptsTerms,c)||(n.acceptsTerms=c),c}),a(),o(2,"span"),s(3,"Do you accept the terms?"),a()(),o(4,"p"),s(5),a()),i&2&&(d(),z("selected",n.acceptsTerms),d(4),A("URL query: ",n.queryParams,""))},dependencies:[fe,Nn,Un],styles:["div[_ngcontent-%COMP%]{display:flex;gap:.5rem}p[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return t})();var EI={component:Pd,html:`<div>\r
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
`};function Y0(t,r){if(t&1&&(o(0,"li"),s(1),a()),t&2){let e=r.$implicit;d(),v(e)}}var Vd=(()=>{class t{constructor(){this.exampleSignal=mo(["Pizza","Spaghetti","Tomatoes"])}enqueue(e){e&&this.exampleSignal.enqueue(e)}dequeue(){this.exampleSignal.dequeue()}clear(){this.exampleSignal.clear()}update(){this.exampleSignal.update(e=>e.filter(i=>i.length<=5))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["queue-signal-basic-example"]],decls:20,vars:2,consts:[["enqueueText",""],[1,"left-side"],["type","text","placeholder","Text to enqueue..."],[3,"click"],[1,"right-side"]],template:function(i,n){if(i&1){let l=j();o(0,"div",1)(1,"div"),C(2,"input",2,0),a(),o(4,"button",3),_("click",function(){T(l);let u=V(3);return S(n.enqueue(u.value))}),s(5,"Enqueue"),a(),o(6,"button",3),_("click",function(){return T(l),S(n.dequeue())}),s(7,"Dequeue"),a(),o(8,"button",3),_("click",function(){return T(l),S(n.clear())}),s(9,"Clear"),a(),o(10,"button",3),_("click",function(){return T(l),S(n.update())}),s(11,"Update (leave only short)"),a()(),o(12,"div",4)(13,"p"),s(14),a(),o(15,"p"),s(16),a(),o(17,"ol"),B(18,Y0,2,1,"li",null,Et),a()()}i&2&&(d(14),A("isEmpty: ",n.exampleSignal.isEmpty().toString(),""),d(2),A("size: ",n.exampleSignal.size().toString(),""),d(2),H(n.exampleSignal()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:3rem}button[_ngcontent-%COMP%]{margin-top:.75rem;margin-right:1rem;padding:0 .125rem}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0;line-height:1.2}"]})}}return t})();var kI={component:Vd,html:`<div class="left-side">\r
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
`};var Rd=(()=>{class t{constructor(){this.exampleSignal=ho(["Peas","Lettuce","Corn"])}add(e){e&&this.exampleSignal.add(e)}delete(e){e&&this.exampleSignal.delete(e)}update(){this.exampleSignal.update(e=>new Set([...e].map(i=>i.toLowerCase())))}clear(){this.exampleSignal.clear()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["set-signal-basic-example"]],decls:20,vars:3,consts:[["value",""],[1,"left-side"],[1,"inputs"],["type","text","placeholder","Value"],[3,"click"],[1,"right-side"]],template:function(i,n){if(i&1){let l=j();o(0,"div",1)(1,"div",2),C(2,"input",3,0),a(),o(4,"div")(5,"button",4),_("click",function(){T(l);let u=V(3);return S(n.add(u.value))}),s(6,"Add value"),a(),o(7,"button",4),_("click",function(){T(l);let u=V(3);return S(n.delete(u.value))}),s(8,"Delete value"),a(),o(9,"button",4),_("click",function(){return T(l),S(n.clear())}),s(10,"Clear"),a(),o(11,"button",4),_("click",function(){return T(l),S(n.update())}),s(12,"Update (to lowercase)"),a()()(),o(13,"div",5)(14,"p"),s(15),a(),o(16,"p"),s(17),a(),o(18,"p"),s(19),a()()}i&2&&(d(15),A("isEmpty: ",n.exampleSignal.isEmpty().toString(),""),d(2),A("size: ",n.exampleSignal.size().toString(),""),d(2),v(n.exampleSignal.asArray()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:3rem}.inputs[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}input[_ngcontent-%COMP%]{margin-right:.25rem;max-width:10rem}button[_ngcontent-%COMP%]{margin-right:1rem;margin-top:.75rem;padding:0 .125rem}"]})}}return t})();var LI={component:Rd,html:`<div class="left-side">\r
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
`};function $0(t,r){if(t&1&&(o(0,"li"),s(1),a()),t&2){let e=r.$implicit;d(),v(e)}}var Od=(()=>{class t{constructor(){this.exampleSignal=fo(["Pizza","Spaghetti","Tomatoes"])}push(e){e&&this.exampleSignal.push(e)}pop(){this.exampleSignal.pop()}clear(){this.exampleSignal.clear()}update(){this.exampleSignal.update(e=>e.filter(i=>i.length<=5))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["stack-signal-basic-example"]],decls:20,vars:2,consts:[["pushText",""],[1,"left-side"],["type","text","placeholder","Text to push..."],[3,"click"],[1,"right-side"],["reversed",""]],template:function(i,n){if(i&1){let l=j();o(0,"div",1)(1,"div"),C(2,"input",2,0),a(),o(4,"button",3),_("click",function(){T(l);let u=V(3);return S(n.push(u.value))}),s(5,"Push"),a(),o(6,"button",3),_("click",function(){return T(l),S(n.pop())}),s(7,"Pop"),a(),o(8,"button",3),_("click",function(){return T(l),S(n.clear())}),s(9,"Clear"),a(),o(10,"button",3),_("click",function(){return T(l),S(n.update())}),s(11,"Update (leave only short)"),a()(),o(12,"div",4)(13,"p"),s(14),a(),o(15,"p"),s(16),a(),o(17,"ol",5),B(18,$0,2,1,"li",null,Et),a()()}i&2&&(d(14),A("isEmpty: ",n.exampleSignal.isEmpty().toString(),""),d(2),A("size: ",n.exampleSignal.size().toString(),""),d(2),H(n.exampleSignal()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:3rem}button[_ngcontent-%COMP%]{margin-top:.75rem;margin-right:1rem;padding:0 .125rem}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0;line-height:1.2}"]})}}return t})();var jI={component:Od,html:`<div class="left-side">\r
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
`};var Ld=(()=>{class t{constructor(){this.throttledValue=go("",500)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["throttled-signal-example"]],decls:5,vars:2,consts:[["for","throttled-input"],["type","text","id","throttled-input","placeholder","Search...",3,"ngModelChange","ngModel"]],template:function(i,n){i&1&&(o(0,"label",0),s(1,"What are you looking for?"),a(),o(2,"input",1),K("ngModelChange",function(c){return W(n.throttledValue,c)||(n.throttledValue=c),c}),a(),o(3,"p"),s(4),a()),i&2&&(d(2),z("ngModel",n.throttledValue),d(2),A("Throttled value: ",n.throttledValue(),""))},dependencies:[fe,we,pe,Te],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var qI={component:Ld,html:`<label for="throttled-input">What are you looking for?</label>\r
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
`};function z0(t,r){if(t&1&&(o(0,"tr")(1,"td"),s(2),a(),o(3,"td"),s(4),a()()),t&2){let e=r.$implicit;d(2),v(e[0]),d(2),v(e[1])}}var Bd=(()=>{class t{constructor(){this.exampleSignal=_o(["Peas",5,!0])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["tuple-signal-basic-example"]],decls:24,vars:3,consts:[[1,"left-side"],[1,"row"],["type","text",3,"ngModelChange","ngModel"],["type","number",3,"ngModelChange","ngModel"],["type","checkbox",3,"ngModelChange","ngModel"],[1,"right-side"],["width","32"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"div",1)(2,"label"),s(3,"Value at index 0"),a(),o(4,"input",2),_("ngModelChange",function(c){return n.exampleSignal.setAt(0,c)}),a()(),o(5,"div",1)(6,"label"),s(7,"Value at index 1"),a(),o(8,"input",3),_("ngModelChange",function(c){return n.exampleSignal.setAt(1,c)}),a()(),o(9,"div",1)(10,"label"),s(11,"Value at index 2"),a(),o(12,"input",4),_("ngModelChange",function(c){return n.exampleSignal.setAt(2,c)}),a()()(),o(13,"div",5)(14,"table")(15,"thead")(16,"tr")(17,"th",6),s(18,"Key"),a(),o(19,"th"),s(20,"Value"),a()()(),o(21,"tbody"),B(22,z0,5,2,"tr",null,G),a()()()),i&2&&(d(4),h("ngModel",n.exampleSignal()[0]),d(4),h("ngModel",n.exampleSignal()[1]),d(4),h("ngModel",n.exampleSignal()[2]),d(10),H(n.exampleSignal.entriesArray()))},dependencies:[fe,we,hn,Ha,pe,Te],styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:1rem}.row[_ngcontent-%COMP%]{padding:.5rem 0}input[_ngcontent-%COMP%]{max-width:10rem}label[_ngcontent-%COMP%]{padding-bottom:0}"]})}}return t})();var eM={component:Bd,html:`<div class="left-side">\r
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
`};var W0=["exampleBox"],K0=(t,r,e,i)=>({width:t,height:r,padding:e,borderWidth:i}),Hd=(()=>{class t{constructor(){this.width=E("200px"),this.height=E("100px"),this.padding=E("12px 24px"),this.border=E("4px"),this.exampleBox=Me("exampleBox"),this._cd=I(Bi)}onScroll(){this._cd.markForCheck()}getBoundingClientRect(){return this.exampleBox().nativeElement.getBoundingClientRect()}getPaddingRect(){return Co(this.exampleBox())}getContentRect(){return yo(this.exampleBox())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["dom-boxes-example"]],viewQuery:function(i,n){i&1&&ke(n.exampleBox,W0,5),i&2&&ue()},hostBindings:function(i,n){i&1&&_("scroll",function(){return n.onScroll()},!1,We)("resize",function(){return n.onScroll()},!1,dn)},decls:54,vars:22,consts:[["exampleBox",""],[1,"inputs"],["for","width"],["type","text","id","width",3,"ngModelChange","ngModel"],["for","height"],["type","text","id","height",3,"ngModelChange","ngModel"],["for","padding"],["type","text","id","padding",3,"ngModelChange","ngModel"],["for","border"],["type","text","id","border",3,"ngModelChange","ngModel"],[1,"example-box",3,"ngStyle"],[1,"values"],[1,"value"]],template:function(i,n){if(i&1){let l=j();o(0,"div",1)(1,"div")(2,"label",2),s(3,"Width"),a(),o(4,"input",3),K("ngModelChange",function(u){return T(l),W(n.width,u)||(n.width=u),S(u)}),a()(),o(5,"div")(6,"label",4),s(7,"Height"),a(),o(8,"input",5),K("ngModelChange",function(u){return T(l),W(n.height,u)||(n.height=u),S(u)}),a()(),o(9,"div")(10,"label",6),s(11,"Padding"),a(),o(12,"input",7),K("ngModelChange",function(u){return T(l),W(n.padding,u)||(n.padding=u),S(u)}),a()(),o(13,"div")(14,"label",8),s(15,"Border"),a(),o(16,"input",9),K("ngModelChange",function(u){return T(l),W(n.border,u)||(n.border=u),S(u)}),a()()(),o(17,"div",10,0),C(19,"div"),a(),o(20,"div",11)(21,"div",12)(22,"strong"),s(23,"Bounding Client Rect"),a(),o(24,"span"),s(25),a(),o(26,"span"),s(27),a(),o(28,"span"),s(29),a(),o(30,"span"),s(31),a()(),o(32,"div",12)(33,"strong"),s(34,"Padding Rect"),a(),o(35,"span"),s(36),a(),o(37,"span"),s(38),a(),o(39,"span"),s(40),a(),o(41,"span"),s(42),a()(),o(43,"div",12)(44,"strong"),s(45,"Content Rect"),a(),o(46,"span"),s(47),a(),o(48,"span"),s(49),a(),o(50,"span"),s(51),a(),o(52,"span"),s(53),a()()()}i&2&&(d(4),z("ngModel",n.width),d(4),z("ngModel",n.height),d(4),z("ngModel",n.padding),d(4),z("ngModel",n.border),d(),h("ngStyle",ka(17,K0,n.width(),n.height(),n.padding(),n.border())),d(8),A("Top: ",n.getBoundingClientRect().top,""),d(2),A("Left: ",n.getBoundingClientRect().left,""),d(2),A("Width: ",n.getBoundingClientRect().width,""),d(2),A("Height: ",n.getBoundingClientRect().height,""),d(5),A("Top: ",n.getPaddingRect().top,""),d(2),A("Left: ",n.getPaddingRect().left,""),d(2),A("Width: ",n.getPaddingRect().width,""),d(2),A("Height: ",n.getPaddingRect().height,""),d(5),A("Top: ",n.getContentRect().top,""),d(2),A("Left: ",n.getContentRect().left,""),d(2),A("Width: ",n.getContentRect().width,""),d(2),A("Height: ",n.getContentRect().height,""))},dependencies:[ee,Ra,fe,we,pe,Te],styles:[".inputs[_ngcontent-%COMP%]{display:grid;grid-template-columns:max-content max-content;grid-template-rows:max-content max-content;gap:1rem 2rem}.example-box[_ngcontent-%COMP%]{margin:2rem 0;background-color:#c3deb7;border:solid #FFEEBC;box-sizing:content-box}.example-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#a0c5e8;height:100%}.values[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,max-content);gap:2rem}.values[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:max-content}"]})}}return t})();var cM={component:Hd,html:`<div class="inputs">\r
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
`};var Ud=(()=>{class t{constructor(){this.inputValue=E("How would <b>this</b> text be displayed?")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["escape-html-example"]],decls:13,vars:5,consts:[[3,"ngModelChange","ngModel"],[1,"grid"],[3,"innerHTML"]],template:function(i,n){i&1&&(o(0,"textarea",0),K("ngModelChange",function(c){return W(n.inputValue,c)||(n.inputValue=c),c}),a(),o(1,"div",1)(2,"div")(3,"strong"),s(4,"Unescaped:"),a(),C(5,"br")(6,"p",2),a(),o(7,"div")(8,"strong"),s(9,"Escaped:"),a(),C(10,"br")(11,"p",2),st(12,"escapeHTML"),a()()),i&2&&(z("ngModel",n.inputValue),d(6),h("innerHTML",n.inputValue(),le),d(5),h("innerHTML",Pt(12,3,n.inputValue()),le))},dependencies:[eo,Ja,fe,we,pe,Te],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:.5rem}textarea[_ngcontent-%COMP%]{padding:.25rem .375rem;min-height:5em;resize:vertical}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}strong[_ngcontent-%COMP%]{line-height:1.5}"]})}}return t})();var vM={component:Ud,html:`<textarea [(ngModel)]="inputValue"></textarea>\r
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
}`};var Nd=(()=>{class t{constructor(){this.file=E(void 0)}onFileUpload(e){this.file.set(e.target.files?.[0])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["file-pipes-example"]],decls:21,vars:10,consts:[["type","file","id","file",3,"change"],[1,"values"]],template:function(i,n){if(i&1&&(o(0,"input",0),_("change",function(c){return n.onFileUpload(c)}),a(),o(1,"div",1)(2,"strong"),s(3,"Full file name:"),a(),o(4,"span"),s(5),a(),o(6,"strong"),s(7,"File name:"),a(),o(8,"span"),s(9),st(10,"filename"),a(),o(11,"strong"),s(12,"File extension:"),a(),o(13,"span"),s(14),st(15,"fileext"),a(),o(16,"strong"),s(17,"File size:"),a(),o(18,"span"),s(19),st(20,"filesize"),a()()),i&2){let l;d(5),v((l=n.file())==null?null:l.name),d(4),v(Pt(10,4,n.file())),d(5),v(Pt(15,6,n.file())),d(5),v(Pt(20,8,n.file()))}},dependencies:[so,ro,ao,oo],styles:[".values[_ngcontent-%COMP%]{margin-top:1rem;display:grid;grid-template-columns:max-content max-content;gap:.25rem 1rem}"]})}}return t})();var SM={component:Nd,html:`<input type="file" id="file" (change)="onFileUpload($event)">\r
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
`};function q0(t,r){if(t&1){let e=j();o(0,"button",0),_("click",function(){T(e);let n=f();return S(n.onButtonClick())}),s(1,"Find out"),a()}}function Q0(t,r){t&1&&(o(0,"p"),s(1,"File System API is "),o(2,"strong",1),s(3,"supported"),a(),s(4,"! You can view the below examples."),a())}function G0(t,r){t&1&&(o(0,"p"),s(1," File System API is "),o(2,"strong",2),s(3,"not supported"),a(),s(4,". You will not be able to correctly view the below examples. See the "),o(5,"a",3),s(6,"caniuse.com page"),a(),s(7,` to find out which browsers are supported.
`),a())}function X0(t,r){if(t&1&&g(0,Q0,5,0,"p")(1,G0,8,0,"p"),t&2){let e=f();y(e.isSupported()?0:1)}}var jd=(()=>{class t{constructor(){this.fileSystem=I(_i),this.hasClicked=E(!1),this.isSupported=E(!1)}onButtonClick(){this.hasClicked.set(!0),this.isSupported.set(this.fileSystem.isFileSystemAPISupported("showOpenFilePicker"))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["file-system-is-supported-example"]],decls:5,vars:2,consts:[[3,"click"],[1,"supported"],[1,"not-supported"],["href","https://caniuse.com/native-filesystem-api"]],template:function(i,n){i&1&&(o(0,"p")(1,"span"),s(2,"Does your browser support File System API?"),a(),g(3,q0,2,0,"button"),a(),g(4,X0,2,1)),i&2&&(d(3),y(n.hasClicked()?-1:3),d(),y(n.hasClicked()?4:-1))},styles:["button[_ngcontent-%COMP%]{margin-left:1ch}.supported[_ngcontent-%COMP%]{color:green}.not-supported[_ngcontent-%COMP%]{color:#ff4500}"]})}}return t})();var kM={component:jd,html:`<p>\r
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
`};function Z0(t,r){if(t&1&&(s(0," Uploaded "),o(1,"i"),s(2),a()),t&2){let e=f();d(2),v(e.fileName())}}function J0(t,r){t&1&&s(0," File upload request was cancelled. ")}var Yd=(()=>{class t{constructor(){this.fileSystem=I(_i),this.successfulUpload=E(null),this.fileName=E("")}onButtonClick(){return Ie(this,null,function*(){let e=yield this.fileSystem.requestFileUpload({directoryId:"gorilla",startDirectory:_n.Downloads,method:gn.PreferFileSystem,multiple:!1,types:[{description:"Text files",accept:{"text/plain":[".txt"]}},{description:"Image files",accept:{"image/png":[".png"],"image/jpeg":[".jpg",".jpeg"]}},{description:"PDF files",accept:{"application/pdf":[".pdf"]}}]});this.successfulUpload.set(!!e),this.successfulUpload()&&this.fileName.set(e?.name??"No file name")})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["file-system-request-upload-example"]],decls:5,vars:1,consts:[[3,"click"]],template:function(i,n){i&1&&(o(0,"button",0),_("click",function(){return n.onButtonClick()}),s(1,"Click here to upload a file"),a(),o(2,"p"),g(3,Z0,3,1)(4,J0,1,0),a()),i&2&&(d(3),y(n.successfulUpload()===!0?3:n.successfulUpload()===!1?4:-1))},dependencies:[ee],encapsulation:2})}}return t})();var NM={component:Yd,html:`<button (click)="onButtonClick()">Click here to upload a file</button>\r
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
`};var $d=(()=>{class t{constructor(){this.fileSystem=I(_i),this.fileName=E("gorillas.txt"),this.textToSave=E("Gorillas like to eat bamboo.")}onButtonClick(){this.fileSystem.saveAs(this.textToSave(),{fileName:this.fileName(),method:gn.PreferFileSystem,directoryId:"gorillas",startDirectory:_n.Downloads})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["file-system-save-as-example"]],decls:4,vars:2,consts:[["type","text",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,n){i&1&&(o(0,"input",0),K("ngModelChange",function(c){return W(n.fileName,c)||(n.fileName=c),c}),a(),o(1,"textarea",1),K("ngModelChange",function(c){return W(n.textToSave,c)||(n.textToSave=c),c}),a(),o(2,"button",2),_("click",function(){return n.onButtonClick()}),s(3,"Save to file"),a()),i&2&&(z("ngModel",n.fileName),d(),z("ngModel",n.textToSave))},dependencies:[ee,fe,we,pe,Te],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:.5rem;align-items:flex-start}input[_ngcontent-%COMP%]{min-width:200px}textarea[_ngcontent-%COMP%]{min-width:300px;min-height:100px}"]})}}return t})();var GM={component:$d,html:`<input type="text" [(ngModel)]="fileName">\r
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
`};var zd=(()=>{class t{constructor(){this.eventCounter=E(0)}onHoldEvent(){this.eventCounter.update(e=>e+1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["hold-basic-example"]],decls:4,vars:1,consts:[[3,"ardHold"]],template:function(i,n){i&1&&(o(0,"button",0),_("ardHold",function(){return n.onHoldEvent()}),s(1,"Click and Hold"),a(),o(2,"p"),s(3),a()),i&2&&(d(3),A(" Total events fired: ",n.eventCounter(),`
`))},dependencies:[yn,vn],encapsulation:2})}}return t})();var n2={component:zd,html:`<button (ardHold)="onHoldEvent()">Click and Hold</button>\r
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
`};var Wd=(()=>{class t{constructor(){this.eventCounter=E(0)}onHoldEvent(){this.eventCounter.update(e=>e+1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["hold-timings-example"]],decls:4,vars:1,consts:[["ardHoldDelay","2000","ardHoldRepeat","200",3,"ardHold"]],template:function(i,n){i&1&&(o(0,"button",0),_("ardHold",function(){return n.onHoldEvent()}),s(1,` Click and Hold - but this time very slow
`),a(),o(2,"p"),s(3),a()),i&2&&(d(3),A("Total events fired: ",n.eventCounter(),""))},dependencies:[yn,vn],encapsulation:2})}}return t})();var c2={component:Wd,html:`<button (ardHold)="onHoldEvent()" ardHoldDelay="2000" ardHoldRepeat="200">\r
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
`};function ev(t,r){if(t&1&&(o(0,"div"),s(1),a()),t&2){let e=r.$implicit;d(),v(e)}}var Kd=(()=>{class t{constructor(){this.currentPage=E(1),this.items=F(()=>new Array(this.currentPage()*5).fill(0).map((e,i)=>i)),this.isInfScrollActive=E(!0)}onThresholdReach(){console.log(`Threshold has been reached! Loading data for page ${this.currentPage()+1}...`),setTimeout(()=>{this.currentPage.update(e=>e+1),this.isInfScrollActive.set(!0)},100)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["infinite-scroll-host-example"]],decls:3,vars:1,consts:[["ardInfScroll","","ardInfScrollTarget","host",1,"scroll-host",3,"ardInfScrollReachThreshold","ardInfScrollActiveChange","ardInfScrollActive"]],template:function(i,n){i&1&&(o(0,"div",0),_("ardInfScrollReachThreshold",function(){return n.onThresholdReach()}),K("ardInfScrollActiveChange",function(c){return W(n.isInfScrollActive,c)||(n.isInfScrollActive=c),c}),B(1,ev,2,1,"div",null,G),a()),i&2&&(z("ardInfScrollActive",n.isInfScrollActive),d(),H(n.items()))},dependencies:[no,io],styles:[".scroll-host[_ngcontent-%COMP%]{height:50vh;width:50vh;overflow-y:auto;border:1px solid red;margin:0 auto}.scroll-host[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:20vh;border-bottom:1px solid black;position:relative;display:grid;place-items:center;font-size:40px;font-weight:700}"]})}}return t})();var _2={component:Kd,html:`<div\r
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
`};var tv=t=>({"--position":t}),ma=400,qd=ma/20,Qd=(()=>{class t{constructor(){this.keyboard=I(Rt),this.position=E(ma/2)}ngOnInit(){this.keyboard.listenToKey("A").subscribe(()=>{this.position()<=0||this.position.update(e=>e-qd)}),this.keyboard.listenToKey("D").subscribe(()=>{this.position()>=ma||this.position.update(e=>e+qd)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["keyboard-service-listen-to-key-example"]],decls:10,vars:4,consts:[[1,"square-container"],[1,"square"]],template:function(i,n){i&1&&(o(0,"div",0),C(1,"div",1),a(),o(2,"p"),s(3," Click "),o(4,"ard-kbd"),s(5,"A"),a(),s(6," or "),o(7,"ard-kbd"),s(8,"D"),a(),s(9,` to move the square.
`),a()),i&2&&(d(),Se(Ce(2,tv,n.position()+"px")))},dependencies:[Ve,nt],styles:[".square-container[_ngcontent-%COMP%]{width:450px;border:1px solid var(--ard-detail-light);margin-bottom:1rem}.square[_ngcontent-%COMP%]{width:50px;height:50px;position:relative;left:var(--position);background-color:#9932cc}"]})}}return t})();var S2={component:Qd,html:`<div class="square-container">\r
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
`};var Gd=(()=>{class t{constructor(){this.keyboard=I(Rt),this.isZeroHeld=E(!1)}ngOnInit(){this.keyboard.listenToKeyState("0").subscribe(({isHeld:e})=>{this.isZeroHeld.set(e)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["keyboard-service-listen-to-key-state-example"]],decls:5,vars:3,template:function(i,n){i&1&&(o(0,"p"),s(1," The zero key is currently "),o(2,"strong"),s(3),a(),s(4,`.
`),a()),i&2&&(d(2),ve(n.isZeroHeld()?"held":"not-held"),d(),v(n.isZeroHeld()?"pressed":"idle"))},dependencies:[Ve],styles:[".held[_ngcontent-%COMP%]{color:green}.not-held[_ngcontent-%COMP%]{color:red}"]})}}return t})();var P2={component:Gd,html:`<p>\r
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
`};function iv(t,r){t&1&&(o(0,"label",1),s(1,"Search"),a(),C(2,"input",2))}var Xd=(()=>{class t{constructor(){this.keyboard=I(Rt),this.isOpen=E(!1)}ngOnInit(){this.keyboard.listenToShortcut(["Ctrl","F"]).subscribe(({event:e})=>{e.preventDefault(),this.isOpen.update(i=>!i)}),this.keyboard.listenToShortcut(["ShiftRight","Q"]).subscribe(()=>alert("RightShift + Q was pressed!"))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["keyboard-service-listen-to-shortcut-example"]],decls:11,vars:1,consts:[["full","false"],["for","example-search-bar"],["type","text","id","example-search-bar"]],template:function(i,n){i&1&&(o(0,"p"),s(1,"Press "),o(2,"ard-kbd-shortcut",0),s(3,"Ctrl+F"),a(),s(4," to toggle a search bar."),a(),o(5,"p"),s(6,"Press "),o(7,"ard-kbd-shortcut",0),s(8,"RightShift+Q"),a(),s(9," to show an alert."),a(),g(10,iv,3,0)),i&2&&(d(10),y(n.isOpen()?10:-1))},dependencies:[Di,Si],styles:["input[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return t})();var N2={component:Xd,html:`<p>Press <ard-kbd-shortcut full="false">Ctrl+F</ard-kbd-shortcut> to toggle a search bar.</p>\r
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
`};var Zd=(()=>{class t{constructor(){this.keyboard=I(Rt)}getModifierKeyText(e){return e?"pressed":"idle"}getModifierKeyClass(e){return e?"down":"up"}getLockKeyText(e){return e===void 0?"unknown":e?"active":"inactive"}getLockKeyClass(e){return e===void 0?"unknown":e?"down":"up"}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["keyboard-service-modifier-key-state-example"]],decls:72,vars:42,consts:[[1,"container"],[1,"modifier-table"],["scope","col"],["scope","row"],[1,"not-applicable"],[1,"lock-table"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th",2),s(5,"Key"),a(),o(6,"th",2),s(7,"Left"),a(),o(8,"th",2),s(9,"Right"),a(),o(10,"th",2),s(11,"Any"),a()()(),o(12,"tbody")(13,"tr")(14,"th",3),s(15,"Ctrl"),a(),o(16,"td"),s(17),a(),o(18,"td"),s(19),a(),o(20,"td"),s(21),a()(),o(22,"tr")(23,"th",3),s(24,"Alt"),a(),o(25,"td"),s(26),a(),o(27,"td"),s(28),a(),o(29,"td",4),s(30,"N/A"),a()(),o(31,"tr")(32,"th",3),s(33,"Shift"),a(),o(34,"td"),s(35),a(),o(36,"td"),s(37),a(),o(38,"td"),s(39),a()(),o(40,"tr")(41,"th",3),s(42,"Meta"),a(),o(43,"td"),s(44),a(),o(45,"td"),s(46),a(),o(47,"td"),s(48),a()()()(),o(49,"table",5)(50,"thead")(51,"tr")(52,"th",2),s(53,"Key"),a(),o(54,"th",2),s(55,"State"),a()()(),o(56,"tbody")(57,"tr")(58,"th",3),s(59,"Caps Lock"),a(),o(60,"td"),s(61),a()(),o(62,"tr")(63,"th",3),s(64,"Num Lock"),a(),o(65,"td"),s(66),a()(),o(67,"tr")(68,"th",3),s(69,"Scroll Lock"),a(),o(70,"td"),s(71),a()()()()()),i&2&&(d(16),ve(n.getModifierKeyClass(n.keyboard.isLeftCtrlHeld())),d(),v(n.getModifierKeyText(n.keyboard.isLeftCtrlHeld())),d(),ve(n.getModifierKeyClass(n.keyboard.isRightCtrlHeld())),d(),v(n.getModifierKeyText(n.keyboard.isRightCtrlHeld())),d(),ve(n.getModifierKeyClass(n.keyboard.isCtrlHeld())),d(),v(n.getModifierKeyText(n.keyboard.isCtrlHeld())),d(4),ve(n.getModifierKeyClass(n.keyboard.isAltHeld())),d(),v(n.getModifierKeyText(n.keyboard.isAltHeld())),d(),ve(n.getModifierKeyClass(n.keyboard.isAltGraphHeld())),d(),v(n.getModifierKeyText(n.keyboard.isAltGraphHeld())),d(6),ve(n.getModifierKeyClass(n.keyboard.isLeftShiftHeld())),d(),v(n.getModifierKeyText(n.keyboard.isLeftShiftHeld())),d(),ve(n.getModifierKeyClass(n.keyboard.isRightShiftHeld())),d(),v(n.getModifierKeyText(n.keyboard.isRightShiftHeld())),d(),ve(n.getModifierKeyClass(n.keyboard.isShiftHeld())),d(),v(n.getModifierKeyText(n.keyboard.isShiftHeld())),d(4),ve(n.getModifierKeyClass(n.keyboard.isLeftMetaHeld())),d(),v(n.getModifierKeyText(n.keyboard.isLeftMetaHeld())),d(),ve(n.getModifierKeyClass(n.keyboard.isRightMetaHeld())),d(),v(n.getModifierKeyText(n.keyboard.isRightMetaHeld())),d(),ve(n.getModifierKeyClass(n.keyboard.isMetaHeld())),d(),v(n.getModifierKeyText(n.keyboard.isMetaHeld())),d(12),ve(n.getLockKeyClass(n.keyboard.capsLockState())),d(),v(n.getLockKeyText(n.keyboard.capsLockState())),d(4),ve(n.getLockKeyClass(n.keyboard.numLockState())),d(),v(n.getLockKeyText(n.keyboard.numLockState())),d(4),ve(n.getLockKeyClass(n.keyboard.scrollLockState())),d(),v(n.getLockKeyText(n.keyboard.scrollLockState())))},dependencies:[Ve],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:1.75rem}table[_ngcontent-%COMP%]{table-layout:fixed;width:max-content}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:.25rem .5rem;border-collapse:collapse;border:1px solid var(--ard-detail)}th[_ngcontent-%COMP%]{font-weight:600;background-color:var(--ard-bg-filled)}td[_ngcontent-%COMP%]{font-weight:500}.down[_ngcontent-%COMP%]{color:green}.up[_ngcontent-%COMP%]{color:red}.unknown[_ngcontent-%COMP%]{font-weight:400;font-style:italic}.not-applicable[_ngcontent-%COMP%]{font-weight:400}.modifier-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{width:8.1ch}.modifier-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-of-type{width:6ch}.lock-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-of-type{width:8.75ch}"]})}}return t})();var Q2={component:Zd,html:`<div class="container">\r
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
`};var nv=["targetBox"];function rv(t,r){if(t&1&&(o(0,"tr")(1,"th",4),s(2,"Left"),a(),o(3,"td"),s(4),a(),o(5,"td"),s(6),a()(),o(7,"tr")(8,"th",4),s(9,"Right"),a(),o(10,"td"),s(11),a(),o(12,"td"),s(13),a()(),o(14,"tr")(15,"th",4),s(16,"Top"),a(),o(17,"td"),s(18),a(),o(19,"td"),s(20),a()(),o(21,"tr")(22,"th",4),s(23,"Bottom"),a(),o(24,"td"),s(25),a(),o(26,"td"),s(27),a()()),t&2){let e,i,n,l,c,u,x,O,k=f();d(4),v((e=k.lastEventData())==null?null:e.left),d(2),v((i=k.lastEventData())==null?null:i.overflowsLeft),d(5),v((n=k.lastEventData())==null?null:n.right),d(2),v((l=k.lastEventData())==null?null:l.overflowsRight),d(5),v((c=k.lastEventData())==null?null:c.top),d(2),v((u=k.lastEventData())==null?null:u.overflowsTop),d(5),v((x=k.lastEventData())==null?null:x.bottom),d(2),v((O=k.lastEventData())==null?null:O.overflowsBottom)}}function av(t,r){t&1&&(o(0,"tr")(1,"th",4),s(2,"Left"),a(),o(3,"td",5),s(4,"Waiting for events..."),a()(),o(5,"tr")(6,"th",4),s(7,"Right"),a()(),o(8,"tr")(9,"th",4),s(10,"Top"),a()(),o(11,"tr")(12,"th",4),s(13,"Bottom"),a()())}var Jd=(()=>{class t{constructor(){this.lastEventData=E(null),this.targetBox=Me("targetBox")}onClick(e){this.targetBox()&&this.lastEventData.set(bo(e,this.targetBox()))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["relative-pos-basic-example"]],viewQuery:function(i,n){i&1&&ke(n.targetBox,nv,5),i&2&&ue()},hostBindings:function(i,n){i&1&&_("click",function(c){return n.onClick(c)},!1,We)},decls:18,vars:1,consts:[["targetBox",""],[1,"container"],[1,"target-box"],["scope","col"],["scope","row"],["colspan","2","rowspan","4",1,"waiting"]],template:function(i,n){i&1&&(o(0,"p"),s(1,` Click anywhere to show the click position relative to the target box.
`),a(),o(2,"div",1)(3,"div",2,0),s(5,"Target box"),a(),o(6,"table")(7,"thead")(8,"tr")(9,"th",3),s(10,"Direction"),a(),o(11,"th",3),s(12,"Relative pos"),a(),o(13,"th",3),s(14,"Overflows?"),a()()(),o(15,"tbody"),g(16,rv,28,8)(17,av,14,0),a()()()),i&2&&(d(16),y(n.lastEventData()?16:17))},styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:1.75rem}.target-box[_ngcontent-%COMP%]{width:150px;height:100px;background-color:salmon;display:grid;place-items:center}table[_ngcontent-%COMP%]{table-layout:fixed;width:max-content}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:.25rem .5rem;border-collapse:collapse;border:1px solid var(--ard-detail)}th[_ngcontent-%COMP%]{font-weight:600;background-color:var(--ard-bg-filled)}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-of-type{width:6ch}"]})}}return t})();var nk={component:Jd,html:`<p>\r
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
`};var ov=["item"];function sv(t,r){if(t&1){let e=j();o(0,"div",4)(1,"code"),s(2,"viewportRelation"),a(),o(3,"span"),s(4),a(),o(5,"code"),s(6,"isInViewport"),a(),o(7,"span"),s(8),a(),o(9,"code"),s(10,"position.top"),a(),o(11,"span"),s(12),st(13,"number"),a(),o(14,"code"),s(15,"position.bottom"),a(),o(16,"span"),s(17),st(18,"number"),a(),C(19,"div"),o(20,"button",3),_("click",function(){T(e);let n=f();return S(n.toggleOverlay())}),s(21,"Close"),a()()}if(t&2){let e,i,n,l,c=f();d(4),v((e=c.observerRef())==null?null:e.viewportRelation()),d(4),v((i=c.observerRef())==null?null:i.isInViewport()),d(4),v(Li(13,4,(n=c.observerRef())==null||(n=n.position())==null?null:n.top,"1.5-5")),d(5),v(Li(18,7,(l=c.observerRef())==null||(l=l.position())==null?null:l.bottom,"1.5-5"))}}var ec=(()=>{class t{constructor(){this.vss=I(Ga),this.isOverlayActive=E(!1),this.element=Me("item"),this.observerRef=E(null)}toggleOverlay(){this.isOverlayActive.update(e=>!e)}ngAfterViewInit(){let e=this.element();e&&this.observerRef.set(this.vss.observeElement(e))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["viewport-observer-observer-ref-example"]],viewQuery:function(i,n){i&1&&ke(n.element,ov,5),i&2&&ue()},decls:7,vars:1,consts:[["item",""],[1,"container"],[1,"item"],[3,"click"],[1,"overlay"]],template:function(i,n){if(i&1){let l=j();o(0,"div",1)(1,"div",2,0),s(3,"Observed element"),a(),o(4,"button",3),_("click",function(){return T(l),S(n.toggleOverlay())}),s(5,"Toggle overlay"),a()(),g(6,sv,22,10,"div",4)}i&2&&(d(6),y(n.isOverlayActive()?6:-1))},dependencies:[pr],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:space-around}.item[_ngcontent-%COMP%]{height:150px;width:225px;background-color:#deb887;display:grid;place-items:center}.overlay[_ngcontent-%COMP%]{position:fixed;top:5rem;left:20rem;z-index:9;padding:1.5rem;background-color:var(--ard-bg);border:1px solid var(--ard-border);display:grid;grid-template-columns:max-content 12ch;gap:.5rem}"]})}}return t})();var uk={component:ec,html:`<div class="container">\r
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
`};function tc(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,i)}return e}function ic(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?tc(Object(e),!0).forEach(function(i){lv(t,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):tc(Object(e)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))})}return t}function lv(t,r,e){return r=dv(r),r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function dv(t){var r=cv(t,"string");return typeof r=="symbol"?r:String(r)}function cv(t,r){if(typeof t!="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var i=e.call(t,r||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}var uv=nc({}),NP=uv;function nc(t){return r.withOptions=e=>nc(ic(ic({},t),e)),r;function r(e,...i){let n=typeof e=="string"?[e]:e.raw,{alignValues:l=!1,escapeSpecialCharacters:c=Array.isArray(e),trimWhitespace:u=!0}=t,x="";for(let q=0;q<n.length;q++){let D=n[q];if(c&&(D=D.replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`").replace(/\\\$/g,"$").replace(/\\\{/g,"{")),x+=D,q<i.length){let P=l?pv(i[q],x):i[q];x+=P}}let O=x.split(`
`),k=null;for(let q of O){let D=q.match(/^(\s+)\S+/);if(D){let P=D[1].length;k?k=Math.min(k,P):k=P}}if(k!==null){let q=k;x=O.map(D=>D[0]===" "||D[0]==="	"?D.slice(q):D).join(`
`)}return u&&(x=x.trim()),c&&(x=x.replace(/\\n/g,`
`)),x}}function pv(t,r){if(typeof t!="string"||!t.includes(`
`))return t;let i=r.slice(r.lastIndexOf(`
`)+1).match(/^(\s+)/);if(i){let n=i[1];return t.replace(/\n/g,`
${n}`)}return t}var ft={TS:"typescript",SCSS:"scss",HTML:"xml",PlainText:"txt"};var rc=(()=>{class t{loadDynamicComponent(e,i){if(!i)return;i.clear(),i.createComponent(e).changeDetectorRef.detectChanges()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var mv=["exampleDisplay"];function hv(t,r){if(t&1&&(o(0,"div",4),s(1),a()),t&2){let e=f();d(),v(e.heading())}}function fv(t,r){if(t&1){let e=j();o(0,"div",5)(1,"ard-icon-button",7),_("click",function(){T(e);let n=f();return S(n.toggleCodeShown())}),o(2,"ard-icon"),s(3,"code"),a()()()}}function gv(t,r){}function _v(t,r){if(t&1&&(o(0,"ard-tab",11)(1,"div",9),C(2,"app-code",12),g(3,gv,0,0,"ng-template",13),a()()),t&2){let e=r.$implicit;f(3);let i=V(10);h("tabId",e.label)("label",e.label),d(2),h("language",e.type)("code",e.code),d(),h("ngTemplateOutlet",i)}}function vv(t,r){if(t&1){let e=j();o(0,"ard-tabber",10),_("changeTab",function(n){T(e);let l=f(2);return S(l.onTabChange(n))}),B(1,_v,4,5,"ard-tab",11,G),a()}if(t&2){let e,i=f(2);h("initialTab",(e=i.initialTab())==null?null:e.toUpperCase()),d(),H(i.mappedData())}}function yv(t,r){}function Cv(t,r){if(t&1&&(o(0,"div",9),C(1,"app-code",12),g(2,yv,0,0,"ng-template",13),a()),t&2){let e=f(2),i=V(10);d(),h("language",e.mappedData()[0].type)("code",e.mappedData()[0].code),d(),h("ngTemplateOutlet",i)}}function bv(t,r){if(t&1&&g(0,vv,3,1,"ard-tabber",8)(1,Cv,3,3,"div",9),t&2){let e=f();y(e.mappedData().length>1?0:1)}}function xv(t,r){}function wv(t,r){if(t&1&&(C(0,"app-code",12),g(1,xv,0,0,"ng-template",13)),t&2){let e=f(),i=V(10);h("language",e.simpleCodeType())("code",e.simpleCodePiece()),d(),h("ngTemplateOutlet",i)}}function Tv(t,r){if(t&1&&(o(0,"p"),s(1,"This example can only be viewed in its own tab. "),o(2,"a",14),s(3,"Open example page"),a(),s(4,"."),a()),t&2){let e=f();d(2),h("href",e.viewInFullWindowLink(),ln)}}function Sv(t,r){t&1&&Ia(0,null,1)}function Dv(t,r){if(t&1&&C(0,"app-copy-button",15),t&2){let e=f();h("contentToCopy",e.codeToCopy())}}function Ev(t){switch(t){case"ts":return ft.TS;case"html":return ft.HTML;case"scss":case"css":return ft.SCSS;default:switch(t.split(".").at(-1)?.toLowerCase()){case"ts":return ft.TS;case"html":return ft.HTML;case"scss":case"css":return ft.SCSS;default:return ft.PlainText}}}var ac=["HTML","TS","SCSS","CSS"],Zn=(()=>{class t{constructor(){this.data=m.required(),this.heading=m.required(),this.viewInFullWindowLink=m(null,{transform:e=>e?.startsWith("/")?e:e&&"/"+e}),this.isSimpleCodeDefined=F(()=>!!this.simpleCodePiece()),this.simpleCodePiece=F(()=>{let e=this.data();return e.simpleTs??e.simpleHtml??e.simpleScss??e.simpleTxt}),this.simpleCodeType=F(()=>{let e=this.data();return e.simpleTs?ft.TS:e.simpleHtml?ft.HTML:e.simpleScss?ft.SCSS:ft.PlainText}),this.isComponentDefined=F(()=>!!this.data().component),this.isCodeShown=_t(!0),this.initialTab=m(void 0),this.nonExpandable=m(!1,{transform:e=>it(e)}),this.codeToCopy=F(()=>this.shouldShowFullCodeData()?(this._currentTab()?this.mappedData().find(i=>i.label===this._currentTab()):this.mappedData()[0]).code:this.simpleCodePiece()),this._currentTab=E(""),this.shouldShowFullCodeData=F(()=>this.isCodeShown()||!this.isSimpleCodeDefined()),this.displayWhenSimple=m(!1,{transform:e=>it(e)}),this.mappedData=F(()=>{let e=this.data();return Object.entries(e).filter(i=>i[0]!=="component"&&i[0]!=="simpleHtml"&&i[0]!=="simpleScss"&&i[0]!=="simpleTs").map(i=>{let n=i[0];return typeof n=="string"&&n.match(/^(html|s?css|ts)$/i)&&(n=n.toUpperCase()),{label:n,code:i[1],type:Ev(n)}}).sort((i,n)=>{let l=ac.indexOf(i.label),c=ac.indexOf(n.label);return l!==-1&&c!==-1?l-c:l!==-1?-1:c!==-1?1:i.label.localeCompare(n.label)})}),this.componentLoader=I(rc),this.exampleDisplay=Me("exampleDisplay",{read:Dt}),de(()=>{(this.isSimpleCodeDefined()||this.nonExpandable())&&this.isCodeShown.set(!1)})}ngOnInit(){this.nonExpandable()&&this.isCodeShown.set(!1)}toggleCodeShown(){this.isCodeShown.update(e=>!e)}onTabChange(e){this._currentTab.set(e)}ngAfterViewInit(){this._renderComponent()}_renderComponent(){if(this.viewInFullWindowLink())return;let e=this.data().component;e&&this.componentLoader.loadDynamicComponent(e,this.exampleDisplay())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-code-example"]],viewQuery:function(i,n){i&1&&ke(n.exampleDisplay,mv,5,Dt),i&2&&ue()},hostVars:10,hostBindings:function(i,n){i&2&&ie("simple-example",n.isSimpleCodeDefined()&&!n.isCodeShown())("code-shown",n.isCodeShown())("component-defined",n.isComponentDefined())("non-expandable",n.nonExpandable())("has-single-tab",n.mappedData().length===1)},inputs:{data:[1,"data"],heading:[1,"heading"],viewInFullWindowLink:[1,"viewInFullWindowLink"],isCodeShown:[1,"isCodeShown"],initialTab:[1,"initialTab"],nonExpandable:[1,"nonExpandable"],displayWhenSimple:[1,"displayWhenSimple"]},outputs:{isCodeShown:"isCodeShownChange"},decls:11,vars:6,consts:[["copyButton",""],["exampleDisplay",""],[1,"example-container"],[1,"example-container__top-bar"],[1,"example-container__heading"],[1,"example-container__buttons"],[1,"example-display"],["title","Show full code",3,"click"],["stretchTabs","false",3,"initialTab"],[1,"tab-relative-container"],["stretchTabs","false",3,"changeTab","initialTab"],[3,"tabId","label"],[3,"language","code"],[3,"ngTemplateOutlet"],["target","_blank",3,"href"],["title","Copy code",1,"copy-button",3,"contentToCopy"]],template:function(i,n){i&1&&(o(0,"div",2)(1,"div",3),g(2,hv,2,1,"div",4)(3,fv,4,0,"div",5),a(),g(4,bv,2,1)(5,wv,2,3),a(),o(6,"div",6),g(7,Tv,5,1,"p")(8,Sv,2,0,"ng-container"),a(),g(9,Dv,1,1,"ng-template",null,0,oe)),i&2&&(d(2),y(n.shouldShowFullCodeData()?2:-1),d(),y(!n.nonExpandable()||!n.isSimpleCodeDefined()?3:-1),d(),y(n.isCodeShown()?4:n.shouldShowFullCodeData()?-1:5),d(2),ie("hidden",!n.isComponentDefined()||!n.displayWhenSimple()&&!n.shouldShowFullCodeData()),d(),y(n.viewInFullWindowLink()?7:8))},dependencies:[ee,Ne,lt,zt,$t,xt,ze,$e,re,ce,Mi,Xn],styles:["[_nghost-%COMP%]{width:100%;display:flex;flex-direction:column;border:1px solid var(--ard-detail-ultralight);border-radius:8px;margin:1.25rem 0;position:relative}[_nghost-%COMP%]   .example-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   .example-container__top-bar[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;padding:.5rem 1rem 0 1.5rem}[_nghost-%COMP%]   .example-container__heading[_ngcontent-%COMP%]{line-height:39px;color:#514346}[_nghost-%COMP%]   .example-display[_ngcontent-%COMP%]{padding:1rem 1.5rem;border-top:1px solid var(--ard-detail-ultralight)}[_nghost-%COMP%]   .example-display.hidden[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .tab-relative-container[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   .copy-button[_ngcontent-%COMP%]{position:absolute;top:.5rem;right:1rem}.simple-example[_nghost-%COMP%]   .example-container__top-bar[_ngcontent-%COMP%]{position:absolute;right:0;width:max-content}[_nghost-%COMP%]:not(.code-shown).simple-example:not(.non-expandable)   .copy-button[_ngcontent-%COMP%]{transform:translate(calc(-100% + .125rem))}[_nghost-%COMP%]:not(.code-shown)   .example-container[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.component-defined)   .example-container[_ngcontent-%COMP%]{border-bottom:none}.has-single-tab.code-shown[_nghost-%COMP%]   .example-container__top-bar[_ngcontent-%COMP%]{padding-bottom:.5rem;border-bottom:1px solid var(--ard-detail-ultralight)}"]})}}return t})();var Fv=["*"],aV=(()=>{class t{constructor(){this.pageTitle=m.required()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-introduction"]],inputs:{pageTitle:[1,"pageTitle"]},standalone:!1,ngContentSelectors:Fv,decls:4,vars:1,template:function(i,n){i&1&&(Y(),o(0,"section")(1,"app-h1"),s(2),a(),L(3),a()),i&2&&(d(2),A("",n.pageTitle()," \u2014 Ardium UI"))},dependencies:[ht],encapsulation:2})}}return t})();var Iv=["*"],Jn=(()=>{class t{constructor(){this.link=m.required()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-main-article"]],inputs:{link:[1,"link"]},ngContentSelectors:Iv,decls:4,vars:1,consts:[[3,"routerLink"]],template:function(i,n){i&1&&(Y(),o(0,"i"),s(1,"Main article: "),o(2,"a",0),L(3),a()()),i&2&&(d(2),h("routerLink",n.link()))},dependencies:[lt,pi],styles:["[_nghost-%COMP%]{padding-left:1.6rem;font-size:.875rem}"]})}}return t})();var kv=t=>({simpleTs:t});function Pv(t,r){t&1&&s(0),t&2&&v(" and theme styles need to be imported")}function Vv(t,r){t&1&&(o(0,"p"),s(1,"Note: Only the modules that will actually be used should be imported!"),a())}function Rv(t,r){if(t&1&&(o(0,"app-h3"),s(1,"Import styles"),a(),o(2,"app-main-article",1),s(3,"Importing styles"),a(),C(4,"app-code-example",2)),t&2){let e=f();d(4),h("data",e.stylesCode())}}var pV=(()=>{class t{constructor(){this.moduleName=m.required(),this.otherModuleNames=m([]),this.styles=m(null),this.tsCode=F(()=>`import { ${this.otherModuleNames().length?[this.moduleName(),...this.otherModuleNames()].join(", "):this.moduleName()} } from '@ardium-ui/ui'`),this.isOtherModuleNamesDefined=F(()=>this.otherModuleNames().length>0),this.stylesCode=F(()=>{let e=this.styles();if(!e)return null;let i=["@import '../node_modules/@ardium-ui/ui/prebuilt-themes/default/core.css';",...e.map(l=>`@import '../node_modules/@ardium-ui/ui/prebuilt-themes/default/${Array.isArray(l)?l[0]:l}.scs';${Array.isArray(l)&&l[1]?" /* if needed */":""}`)].join(`
`),n=["@import '../node_modules/@ardium-ui/ui/themes/default/core.scss';",...e.map(l=>`@import '../node_modules/@ardium-ui/ui/themes/default/${Array.isArray(l)?l[0]:l}.scss';${Array.isArray(l)&&l[1]?" // if needed":""}`)].join(`
`);return{simpleScss:n,scss:n,css:i}})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-prerequisites"]],inputs:{moduleName:[1,"moduleName"],otherModuleNames:[1,"otherModuleNames"],styles:[1,"styles"]},standalone:!1,decls:12,vars:6,consts:[["heading","Module imports","nonExpandable","",3,"data"],["link","/guides/importing-styles"],["heading","Style imports",3,"data"]],template:function(i,n){i&1&&(o(0,"section")(1,"app-h2"),s(2,"Prerequisites"),a(),o(3,"p"),s(4," In order for the component to work, its corresponding module"),g(5,Pv,1,1),s(6,". "),a(),o(7,"app-h3"),s(8,"Import modules"),a(),C(9,"app-code-example",0),g(10,Vv,2,0,"p")(11,Rv,5,1),a()),i&2&&(d(5),y(n.stylesCode()?5:-1),d(4),h("data",Ce(4,kv,n.tsCode())),d(),y(n.isOtherModuleNamesDefined()?10:-1),d(),y(n.stylesCode()?11:-1))},dependencies:[Zn,Jn,Wt,Kt],encapsulation:2})}}return t})();var TV=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=Z({type:t})}static{this.\u0275inj=X({imports:[ee,Zn,Jn,wt]})}}return t})();var oc={[Mt.FormElements]:1,[Mt.Buttons]:2,[Mt.DataDisplay]:3,[Mt.Feedback]:4,[Mt.Layout]:5,[Mt.Popups]:6,[Mt.Stars]:7,[Mt.CustomSignals]:1};function sc(t,r){return oc[t.group]-oc[r.group]}var Ov=(t,r)=>r.group;function Lv(t,r){if(t&1&&(o(0,"p",1),s(1),a()),t&2){let e=f().$implicit;d(),v(e.group)}}function Bv(t,r){if(t&1&&C(0,"img",5),t&2){let e=f().$implicit;h("src",e.img,ln)}}function Hv(t,r){if(t&1&&(o(0,"a",3)(1,"ard-card",4),g(2,Bv,1,1,"img",5),o(3,"ard-card-content")(4,"ard-card-title"),s(5),a(),o(6,"p"),s(7),a()()()()),t&2){let e=r.$implicit;h("routerLink",e.path),d(2),y(e.img?2:-1),d(3),v(e.name),d(2),v(e.desc)}}function Uv(t,r){if(t&1&&(g(0,Lv,2,1,"p",1),o(1,"div",2),B(2,Hv,8,4,"a",3,G),a()),t&2){let e=r.$implicit;y(e.group?0:-1),d(2),H(e.children)}}var VV=(()=>{class t{constructor(){this.module=m.required(),this.data=m.required(),this.mappedRouteData=F(()=>ol(this.data(),e=>e.groupName??"").sort(sc).map(e=>({group:e.group,children:e.children.map(i=>$(w({},i),{path:`/${this.module()}/${i.path}`})).sort((i,n)=>i.name.localeCompare(n.name))}))),this.topText=m.required()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-home-page"]],inputs:{module:[1,"module"],data:[1,"data"],topText:[1,"topText"]},decls:5,vars:1,consts:[[1,"center-text"],[1,"group-name"],[1,"component-grid"],[3,"routerLink"],["appearance","outlined"],["ard-card-image","",3,"src"]],template:function(i,n){i&1&&(o(0,"article")(1,"p",0),s(2),a(),B(3,Uv,4,1,null,null,Ov),a()),i&2&&(d(2),v(n.topText()),d(),H(n.mappedRouteData()))},dependencies:[lt,pi,Js,Zs,Qs,Gs,Xs],styles:[".center-text[_ngcontent-%COMP%]{padding:1rem 0;text-align:center}.component-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,280px);padding:1.25rem;gap:2.5rem;justify-content:center}a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]{width:280px;height:100%;background-color:transparent;transition:background-color .15s ease-in-out}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;min-width:calc(100% + 2px);left:-1px;top:-1px;min-height:10rem;border:1px solid transparent}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]   ard-card-title[_ngcontent-%COMP%]{padding-bottom:1rem;padding-top:.5rem}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-bottom:0}a[_ngcontent-%COMP%]:hover   ard-card[_ngcontent-%COMP%]{background-color:rgba(var(--ard-primary-500),.05)}.group-name[_ngcontent-%COMP%]{text-align:center;font-size:1.25rem;padding-bottom:.5rem;padding-top:1.5rem;color:var(--ard-text3);text-transform:uppercase}"]})}}return t})();export{bl as a,je as b,Bn as c,ce as d,re as e,Fe as f,qi as g,Wi as h,ge as i,me as j,$e as k,ze as l,Qe as m,Ge as n,zn as o,Wn as p,Yt as q,Si as r,Di as s,ys as t,Ei as u,Ai as v,P1 as w,V1 as x,ol as y,Fi as z,Z1 as A,Mi as B,Wt as C,Kt as D,wt as E,fl as F,Mt as G,rT as H,aT as I,sc as J,cT as K,fT as L,CT as M,ST as N,IT as O,RT as P,UT as Q,zT as R,GT as S,tS as T,oS as U,mS as V,CS as W,ES as X,PS as Y,HS as Z,zS as _,GS as $,tD as aa,oD as ba,uD as ca,gD as da,bD as ea,DD as fa,PD as ga,BD as ha,YD as ia,qD as ja,tE as ka,oE as la,mE as ma,vE as na,wE as oa,AE as pa,PE as qa,BE as ra,YE as sa,GE as ta,nA as ua,uA as va,gA as wa,wA as xa,AA as ya,PA as za,BA as Aa,zA as Ba,eF as Ca,dF as Da,vF as Ea,xF as Fa,EF as Ga,kF as Ha,BF as Ia,YF as Ja,QF as Ka,tI as La,sI as Ma,hI as Na,CI as Oa,EI as Pa,kI as Qa,LI as Ra,jI as Sa,qI as Ta,eM as Ua,cM as Va,vM as Wa,SM as Xa,kM as Ya,NM as Za,GM as _a,n2 as $a,c2 as ab,_2 as bb,S2 as cb,P2 as db,N2 as eb,Q2 as fb,nk as gb,uk as hb,NP as ib,ft as jb,Zn as kb,aV as lb,pV as mb,TV as nb,VV as ob};
