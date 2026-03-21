import{$ as Xn,$a as ti,$b as or,A as Jt,Aa as C,Ab as ar,Ac as Ga,B as ae,Ba as Q,Bb as ie,Bc as Dt,C as Z,Ca as gt,Cb as Oi,Cc as Et,D as R,Da as B,Dc as cn,E as U,Ea as H,Eb as Ha,Ec as Xa,F as I,Fa as o,Fb as Ua,Fc as Za,G as Ea,Ga as a,Gb as ri,Gc as Ja,H as ei,Ha as y,Hb as Na,Hc as eo,I as T,Ia as Mi,Ib as on,Ic as to,J as w,Ja as ki,Jb as ai,Jc as io,K as en,Ka as Pa,Kc as _r,L as Qe,La as N,Lb as Ze,Lc as vr,M as Bt,Ma as Va,Mb as sn,Mc as no,N as Ht,Na as _,Nb as oi,Nc as ro,O as ze,Oa as f,Ob as ja,Oc as ao,P as ne,Pa as j,Pb as ye,Q as u,Qa as L,Qb as Je,R as _e,Ra as tr,Rb as de,S as A,Sa as ir,Sb as si,T as Ii,Ta as nr,Tb as Ce,U as Aa,Ua as he,Ub as ln,V as Fa,Va as Ee,Vb as li,W as Ia,Wa as le,Wb as Ya,X as tn,Xa as V,Xb as pe,Y as Ma,Ya as l,Yb as di,Z as se,Za as v,Zb as et,_ as nn,_a as E,_b as Ri,a as Xi,aa as st,ab as Y,ac as Yt,b as Zi,ba as d,bb as $,bc as $a,c as Re,ca as J,cb as z,cc as Li,d as $n,da as Zn,db as We,dc as sr,e as zn,ea as ve,eb as jt,ec as Bi,f as Wn,fa as Jn,fb as ii,fc as dn,g as _a,ga as Tt,gb as fe,gc as $t,h as Xt,ha as ft,hb as we,hc as St,i as Kn,ia as De,ib as rr,ic as za,j as lt,ja as Ie,jb as Oa,jc as lr,k as va,ka as Ut,kb as Ra,kc as dr,l as ya,la as dt,lc as cr,m as Ca,ma as h,mb as Xe,mc as pr,n as ba,na as ee,nb as wt,nc as M,o as qn,oa as G,ob as Pi,oc as Me,p as ot,pa as er,pb as re,pc as ci,q as Qn,qa as ue,qb as Vi,qc as pi,r as xa,ra as rn,rb as ni,rc as Wa,s as Ta,sa as Nt,sb as F,sc as Ka,t as wa,ta as g,tb as an,tc as ur,u as Sa,ua as ka,ub as ce,uc as mr,v as Da,va as Ge,vb as xe,vc as hr,w as Fi,wa as m,wb as La,wc as fr,x as Ji,xa as te,xb as He,xc as gr,y as Zt,ya as be,yb as Ba,yc as qa,z as Gn,za as me,zb as Pe,zc as Qa}from"./chunk-R43OUQ2O.js";import{a as S,b as K,c as Gi,d as Ai,e as Fe}from"./chunk-FDERIQAA.js";var Eo=Gi(_n=>{"use strict";Object.defineProperty(_n,"__esModule",{value:!0});_n.resolvePath=void 0;var So=/((?:\??\.|(?:\?\.)?\[).*$|$)/.source,ec=new RegExp(/^([\w$]+)/.source+So),tc=new RegExp(/^\[(?:(-?\d+(?:\.\d+)?)|(['"`])(.*?)\2)\](?=\??\.|\[(?:(?:-?\d+(?:\.\d+)?)|(['"`]).*?\4)|$)/.source+So);function ic(t,r){if(typeof t!="object")throw new TypeError("Expected object argument to be an object, got "+typeof t);if(typeof r!="string")throw new TypeError("Expected path argument to be a string, got "+typeof r);return Do(t,r)}_n.resolvePath=ic;function Do(t,r,e=r){if(!r)return t;let i;if([i,r]=nc(r,e),t.hasOwnProperty(i))return Do(t[i],r,e)}function nc(t,r){let e,i,n=t.match(ec);if(n)return e=n[1],i=wo(n[2]),[e,i];if(n=t.match(tc),n)return e=n[1]?rc(n[1]):n[3],i=wo(n[5]),[e,i];throw new Error("Object path is invalid: "+r)}function wo(t){return t.charAt(0)=="."?t.slice(1):t.charAt(0)=="?"?t.slice(2):t}function rc(t){return isNaN(Number(t))?t:Number(t)}});var Fo=Gi(fi=>{"use strict";Object.defineProperty(fi,"__esModule",{value:!0});fi.TakeChance=void 0;function ac(t=0,r=100){let e=new Uint32Array(1);crypto.getRandomValues(e);let i=e[0]/4294967296;return t=Math.ceil(t),r=Math.floor(r),Math.floor(i*(r-t+1))+t}function Pr(t=0,r=1){return Math.random()*(r-t)+t}function At(t=0,r=100){return Math.round(Pr(t,r))}function oc(t=.5){return Math.random()<t}function sc(t,r=0,e=100){let i=[];for(let n=0;n<t;n++)i.push(At(r,e));return i}function lc(t,r=0,e=1){let i=[];for(let n=0;n<t;n++)i.push(Pr(r,e));return i}function Ao(t=0,r=1,e=1){if(e<=0)throw new Error("Skew cannot be lower than or equal to 0");let i=0,n=0;for(;i===0;)i=Math.random();for(;n===0;)n=Math.random();let s=Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*n);return s=s/10+.5,s>1||s<0?s=Ao(t,r,e):(s=Math.pow(s,e),s*=r-t,s+=t),s}function Vr(t,r=0,e=t.length-1){return r<0&&(r=0),e>t.length-1&&(e=t.length-1),t[At(r,e)]}function dc(t){let r=Object.keys(t);return Vr(r)}function vn(t){var r;typeof t.from=="string"&&(t.from=t.from.split(""));let e=(r=t.from)!==null&&r!==void 0?r:[];return(t.letters||t.lowercase)&&e.push(..."abcdefghijklmnopqrstuvwxyz".split("")),(t.letters||t.uppercase)&&e.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")),t.numbers&&e.push(..."0123456789".split("")),t.special&&e.push(..."!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("")),e=[...new Set(e)],Vr(e)}function Or(t,r){let e="";for(let i=0;i<t;i++)e+=vn(r);return e}function cc(t,r=new Date(Date.now())){return new Date(At(t.valueOf(),r.valueOf()))}function pc(t=10){let r="";do r=vn({letters:!0,numbers:!0,from:"-_"});while(r<="9"||r=="_");for(let e=1;e<t;e++)r+=vn({letters:!0,numbers:!0,from:"-_"});return r}function uc(t=16){var r,e,i,n,s,c,p,b;let O="";do O=Or(t,{letters:!0,numbers:!0,special:!0});while(((e=(r=O.match(/[a-z]/g))===null||r===void 0?void 0:r.length)!==null&&e!==void 0?e:0)<t/4||((n=(i=O.match(/[A-Z]/g))===null||i===void 0?void 0:i.length)!==null&&n!==void 0?n:0)<t/4||((c=(s=O.match(/[0-9]/g))===null||s===void 0?void 0:s.length)!==null&&c!==void 0?c:0)<t/6||((b=(p=O.match(/[!"#$%&'()*+,\-./:;<=>?@[\\]\^_`{|}~]/g))===null||p===void 0?void 0:p.length)!==null&&b!==void 0?b:0)<t/8);return O}function mc(t=6){return At(1,t)}function hc(){return{r:At(0,255),g:At(0,255),b:At(0,255)}}function fc(){return"#"+Or(6,{numbers:!0,from:"abcdef"})}fi.TakeChance={int:At,secureInt:ac,float:Pr,multipleInt:sc,multipleFloat:lc,boolean:oc,binomial:Ao,character:vn,string:Or,fromArray:Vr,fromObject:dc,date:cc,id:pc,password:uc,die:mc,rgbColor:hc,hexColor:fc};fi.default=fi.TakeChance});var Io=Gi(ge=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0});ge.approximate=ge.APPROXIMATION_UNITS=ge.roundToMultiple=ge.roundToPrecision=ge.roundFromZero=ge.roundToZero=ge.roundDown=ge.roundUp=ge.round=void 0;function Rr(t){return Math.round(t)}ge.round=Rr;function Lr(t){return Math.ceil(t)}ge.roundUp=Lr;function Br(t){return Math.floor(t)}ge.roundDown=Br;function Hr(t){return t<=0?Math.ceil(t):Math.floor(t)}ge.roundToZero=Hr;function Ur(t){return t>=0?Math.ceil(t):Math.floor(t)}ge.roundFromZero=Ur;function gi(t,r=1,e="normal"){switch(r=10**r,e){case"normal":return Rr(t*r)/r;case"up":return Lr(t*r)/r;case"down":return Br(t*r)/r;case"to_zero":return Hr(t*r)/r;case"from_zero":return Ur(t*r)/r}}ge.roundToPrecision=gi;function gc(t,r,e="normal"){switch(e){case"normal":return Rr(t/r)*r;case"up":return Lr(t/r)*r;case"down":return Br(t/r)*r;case"to_zero":return Hr(t/r)*r;case"from_zero":return Ur(t/r)*r}}ge.roundToMultiple=gc;ge.APPROXIMATION_UNITS={k:1e3,M:1e6,B:1e9,T:1e12,Qa:1e15,Qi:1e18,Sx:1e21,Sp:1e24,Oc:1e27,No:1e30,Dc:1e33};function _c(t,r=1,e,i,n,s=!0){var c;if(!e){let O=Object.keys(ge.APPROXIMATION_UNITS);for(let k=0;k<O.length;k++){let W=O[k],D=ge.APPROXIMATION_UNITS[W],P=t/D;if(P>=1&&P<1e3)return i?gi(P,r).toLocaleString(i)+(s?" ":"")+W:String(gi(P,r))+(s?" ":"")+W}return String(gi(t,r).toLocaleString(i))}let p=ge.APPROXIMATION_UNITS[e],b=(c=n?.[e])!==null&&c!==void 0?c:e;return i?gi(t/p,r).toLocaleString(i)+(s?" ":"")+b:String(gi(t/p,r))+(s?" ":"")+b}ge.approximate=_c});var da=Gi((js,Ln)=>{"use strict";(function(){"use strict";var t=function(D,P){return P=P||"",D.replace(/(^|-)/g,"$1\\u"+P).replace(/,/g,"\\u"+P)},r=t("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7","00"),e="a-z"+t("DF-F6,F8-FF","00"),i="A-Z"+t("C0-D6,D8-DE","00"),n="A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via",s=function(D,P,X,oe){return D=D||r,P=P||e,X=X||i,oe=oe||n,{capitalize:new RegExp("(^|["+D+"])(["+P+"])","g"),pascal:new RegExp("(^|["+D+"])+(["+P+X+"])","g"),fill:new RegExp("["+D+"]+(.|$)","g"),sentence:new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")(['+P+"])","g"),improper:new RegExp("\\b("+oe+")\\b","g"),relax:new RegExp("([^"+X+"])(["+X+"]*)(["+X+"])(?=[^"+X+"]|$)","g"),upper:new RegExp("^[^"+P+"]+$"),hole:/[^\s]\s[^\s]/,apostrophe:/'/g,room:new RegExp("["+D+"]")}},c=s(),p={re:c,unicodes:t,regexps:s,types:[],up:String.prototype.toUpperCase,low:String.prototype.toLowerCase,cap:function(D){return p.up.call(D.charAt(0))+D.slice(1)},decap:function(D){return p.low.call(D.charAt(0))+D.slice(1)},deapostrophe:function(D){return D.replace(c.apostrophe,"")},fill:function(D,P,X){return P!=null&&(D=D.replace(c.fill,function(oe,Be){return Be?P+Be:""})),X&&(D=p.deapostrophe(D)),D},prep:function(D,P,X,oe){if(D=D==null?"":D+"",!oe&&c.upper.test(D)&&(D=p.low.call(D)),!P&&!c.hole.test(D)){var Be=p.fill(D," ");c.hole.test(Be)&&(D=Be)}return!X&&!c.room.test(D)&&(D=D.replace(c.relax,p.relax)),D},relax:function(D,P,X,oe){return P+" "+(X?X+" ":"")+oe}},b={_:p,of:function(D){for(var P=0,X=p.types.length;P<X;P++)if(b[p.types[P]].apply(b,arguments)===D)return p.types[P]},flip:function(D){return D.replace(/\w/g,function(P){return(P==p.up.call(P)?p.low:p.up).call(P)})},random:function(D){return D.replace(/\w/g,function(P){return(Math.round(Math.random())?p.up:p.low).call(P)})},type:function(D,P){b[D]=P,p.types.push(D)}},O={lower:function(D,P,X){return p.fill(p.low.call(p.prep(D,P)),P,X)},snake:function(D){return b.lower(D,"_",!0)},constant:function(D){return b.upper(D,"_",!0)},camel:function(D){return p.decap(b.pascal(D))},kebab:function(D){return b.lower(D,"-",!0)},upper:function(D,P,X){return p.fill(p.up.call(p.prep(D,P,!1,!0)),P,X)},capital:function(D,P,X){return p.fill(p.prep(D).replace(c.capitalize,function(oe,Be,Ei){return Be+p.up.call(Ei)}),P,X)},header:function(D){return b.capital(D,"-",!0)},pascal:function(D){return p.fill(p.prep(D,!1,!0).replace(c.pascal,function(P,X,oe){return p.up.call(oe)}),"",!0)},title:function(D){return b.capital(D).replace(c.improper,function(P,X,oe,Be){return oe>0&&oe<Be.lastIndexOf(" ")?p.low.call(P):P})},sentence:function(D,P,X){return D=b.lower(D).replace(c.sentence,function(oe,Be,Ei){return Be+p.up.call(Ei)}),P&&P.forEach(function(oe){D=D.replace(new RegExp("\\b"+b.lower(oe)+"\\b","g"),p.cap)}),X&&X.forEach(function(oe){D=D.replace(new RegExp("(\\b"+b.lower(oe)+"\\. +)(\\w)"),function(Be,Ei,Vd){return Ei+p.low.call(Vd)})}),D}};O.squish=O.pascal,b.default=b;for(var k in O)b.type(k,O[k]);var W=typeof W=="function"?W:function(){};W(typeof Ln=="object"&&Ln.exports?Ln.exports=b:this.Case=b)}).call(js)});Array.prototype.last=function(t,r){return t==null?this[this.length-1]:t==1?this.filter(r??(()=>!0)).last():this.filter(r??(()=>!0)).slice(-t)};Array.prototype.first=function(t,r){return t==null?this[0]:t==1?this.filter(r??(()=>!0))[0]:this.filter(r??(()=>!0)).slice(0,t)};function ui(t){return Array.isArray(t)?t:[t]}function Te(t){return t==null?"":typeof t=="string"?t:`${t}px`}function oo(t){return t instanceof _e?t.nativeElement:t}var yr;try{yr=typeof Intl<"u"&&Intl.v8BreakIterator}catch{yr=!1}var Ue=(()=>{class t{constructor(e){this._platformId=e,this.isBrowser=this._platformId?Oi(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||yr)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static{this.\u0275fac=function(i){return new(i||t)(U(Ii))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var zt;function so(){if(zt==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return zt=!1,zt;if("scrollBehavior"in document.documentElement.style)zt=!0;else{let t=Element.prototype.scrollTo;t?zt=!/\{\s*\[native code\]\s*\}/.test(t.toString()):zt=!1}}return zt}function lo(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}function pn(t){return t.composedPath?t.composedPath()[0]:t.target}function Cr(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Od=new R("cdk-dir-doc",{providedIn:"root",factory:Rd});function Rd(){return I(xe)}var Ld=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Bd(t){let r=t?.toLowerCase()||"";return r==="auto"&&typeof navigator<"u"&&navigator?.language?Ld.test(navigator.language)?"rtl":"ltr":r==="rtl"?"rtl":"ltr"}var co=(()=>{class t{constructor(e){if(this.value="ltr",this.change=new Ht,e){let i=e.body?e.body.dir:null,n=e.documentElement?e.documentElement.dir:null;this.value=Bd(i||n||"ltr")}}ngOnDestroy(){this.change.complete()}static{this.\u0275fac=function(i){return new(i||t)(U(Od,8))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Hi=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({})}}return t})();var jd=20,uo=(()=>{class t{constructor(e,i,n){this._ngZone=e,this._platform=i,this._scrolled=new Re,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=n}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=jd){return this._platform.isBrowser?new Zi(i=>{this._globalSubscription||this._addGlobalListener();let n=e>0?this._scrolled.pipe(Qn(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):_a()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let n=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(ot(s=>!s||n.indexOf(s)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((n,s)=>{this._scrollableContainsElement(s,e)&&i.push(s)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,i){let n=oo(i),s=e.getElementRef().nativeElement;do if(n==s)return!0;while(n=n.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let e=this._getWindow();return ba(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}static{this.\u0275fac=function(i){return new(i||t)(U(ze),U(Ue),U(xe,8))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Yd=20,br=(()=>{class t{constructor(e,i,n){this._platform=e,this._change=new Re,this._changeListener=s=>{this._change.next(s)},this._document=n,i.runOutsideAngular(()=>{if(e.isBrowser){let s=this._getWindow();s.addEventListener("resize",this._changeListener),s.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+i,height:n,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),n=e.documentElement,s=n.getBoundingClientRect(),c=-s.top||e.body.scrollTop||i.scrollY||n.scrollTop||0,p=-s.left||e.body.scrollLeft||i.scrollX||n.scrollLeft||0;return{top:c,left:p}}change(e=Yd){return e>0?this._change.pipe(Qn(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static{this.\u0275fac=function(i){return new(i||t)(U(Ue),U(ze),U(xe,8))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var po=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({})}}return t})(),xr=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[Hi,po,Hi,po]})}}return t})();var Ui=class{attach(r){return this._attachedHost=r,r.attach(this)}detach(){let r=this._attachedHost;r!=null&&(this._attachedHost=null,r.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(r){this._attachedHost=r}},mn=class extends Ui{constructor(r,e,i,n,s){super(),this.component=r,this.viewContainerRef=e,this.injector=i,this.componentFactoryResolver=n,this.projectableNodes=s}},mi=class extends Ui{constructor(r,e,i,n){super(),this.templateRef=r,this.viewContainerRef=e,this.context=i,this.injector=n}get origin(){return this.templateRef.elementRef}attach(r,e=this.context){return this.context=e,super.attach(r)}detach(){return this.context=void 0,super.detach()}},Tr=class extends Ui{constructor(r){super(),this.element=r instanceof _e?r.nativeElement:r}},wr=class{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(r){if(r instanceof mn)return this._attachedPortal=r,this.attachComponentPortal(r);if(r instanceof mi)return this._attachedPortal=r,this.attachTemplatePortal(r);if(this.attachDomPortal&&r instanceof Tr)return this._attachedPortal=r,this.attachDomPortal(r)}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(r){this._disposeFn=r}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var hn=class extends wr{constructor(r,e,i,n,s){super(),this.outletElement=r,this._componentFactoryResolver=e,this._appRef=i,this._defaultInjector=n,this.attachDomPortal=c=>{this._document;let p=c.element;p.parentNode;let b=this._document.createComment("dom-portal");p.parentNode.insertBefore(b,p),this.outletElement.appendChild(p),this._attachedPortal=c,super.setDisposeFn(()=>{b.parentNode&&b.parentNode.replaceChild(p,b)})},this._document=s}attachComponentPortal(r){let i=(r.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(r.component),n;return r.viewContainerRef?(n=r.viewContainerRef.createComponent(i,r.viewContainerRef.length,r.injector||r.viewContainerRef.injector,r.projectableNodes||void 0),this.setDisposeFn(()=>n.destroy())):(n=i.create(r.injector||this._defaultInjector||Bt.NULL),this._appRef.attachView(n.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(n.hostView),n.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(n)),this._attachedPortal=r,n}attachTemplatePortal(r){let e=r.viewContainerRef,i=e.createEmbeddedView(r.templateRef,r.context,{injector:r.injector});return i.rootNodes.forEach(n=>this.outletElement.appendChild(n)),i.detectChanges(),this.setDisposeFn(()=>{let n=e.indexOf(i);n!==-1&&e.remove(n)}),this._attachedPortal=r,i}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(r){return r.hostView.rootNodes[0]}};var mo=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({})}}return t})();var ho=so(),Sr=class{constructor(r,e){this._viewportRuler=r,this._previousHTMLStyles={top:"",left:""},this._isEnabled=!1,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let r=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=r.style.left||"",this._previousHTMLStyles.top=r.style.top||"",r.style.left=Te(-this._previousScrollPosition.left),r.style.top=Te(-this._previousScrollPosition.top),r.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let r=this._document.documentElement,e=this._document.body,i=r.style,n=e.style,s=i.scrollBehavior||"",c=n.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,r.classList.remove("cdk-global-scrollblock"),ho&&(i.scrollBehavior=n.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),ho&&(i.scrollBehavior=s,n.scrollBehavior=c)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.body,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};var Dr=class{constructor(r,e,i,n){this._scrollDispatcher=r,this._ngZone=e,this._viewportRuler=i,this._config=n,this._scrollSubscription=null,this._detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}}attach(r){this._overlayRef,this._overlayRef=r}enable(){if(this._scrollSubscription)return;let r=this._scrollDispatcher.scrolled(0).pipe(ot(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=r.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=r.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},fn=class{enable(){}disable(){}attach(){}};function Er(t,r){return r.some(e=>{let i=t.bottom<e.top,n=t.top>e.bottom,s=t.right<e.left,c=t.left>e.right;return i||n||s||c})}function fo(t,r){return r.some(e=>{let i=t.top<e.top,n=t.bottom>e.bottom,s=t.left<e.left,c=t.right>e.right;return i||n||s||c})}var Ar=class{constructor(r,e,i,n){this._scrollDispatcher=r,this._viewportRuler=e,this._ngZone=i,this._config=n,this._scrollSubscription=null}attach(r){this._overlayRef,this._overlayRef=r}enable(){if(!this._scrollSubscription){let r=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(r).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:n}=this._viewportRuler.getViewportSize();Er(e,[{width:i,height:n,bottom:n,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},gn=(()=>{class t{constructor(e,i,n,s){this._scrollDispatcher=e,this._viewportRuler=i,this._ngZone=n,this.noop=()=>new fn,this.close=c=>new Dr(this._scrollDispatcher,this._ngZone,this._viewportRuler,c),this.block=()=>new Sr(this._viewportRuler,this._document),this.reposition=c=>new Ar(this._scrollDispatcher,this._viewportRuler,this._ngZone,c),this._document=s}static{this.\u0275fac=function(i){return new(i||t)(U(uo),U(br),U(ze),U(xe))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Ni=class{constructor(r){if(this.scrollStrategy=new fn,this.panelClass="",this.hasBackdrop=!1,this.backdropClass="cdk-overlay-dark-backdrop",this.disposeOnNavigation=!1,r){let e=Object.keys(r);for(let i of e)r[i]!==void 0&&(this[i]=r[i])}}};var Fr=class{constructor(r,e){this.connectionPair=r,this.scrollableViewProperties=e}};var bo=(()=>{class t{constructor(e){this._attachedOverlays=[],this._document=e}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}static{this.\u0275fac=function(i){return new(i||t)(U(xe))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),zd=(()=>{class t extends bo{constructor(e,i){super(e),this._ngZone=i,this._keydownListener=n=>{let s=this._attachedOverlays;for(let c=s.length-1;c>-1;c--)if(s[c]._keydownEvents.observers.length>0){let p=s[c]._keydownEvents;this._ngZone?this._ngZone.run(()=>p.next(n)):p.next(n);break}}}add(e){super.add(e),this._isAttached||(this._ngZone?this._ngZone.runOutsideAngular(()=>this._document.body.addEventListener("keydown",this._keydownListener)):this._document.body.addEventListener("keydown",this._keydownListener),this._isAttached=!0)}detach(){this._isAttached&&(this._document.body.removeEventListener("keydown",this._keydownListener),this._isAttached=!1)}static{this.\u0275fac=function(i){return new(i||t)(U(xe),U(ze,8))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Wd=(()=>{class t extends bo{constructor(e,i,n){super(e),this._platform=i,this._ngZone=n,this._cursorStyleIsSet=!1,this._pointerDownListener=s=>{this._pointerDownEventTarget=pn(s)},this._clickListener=s=>{let c=pn(s),p=s.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:c;this._pointerDownEventTarget=null;let b=this._attachedOverlays.slice();for(let O=b.length-1;O>-1;O--){let k=b[O];if(k._outsidePointerEvents.observers.length<1||!k.hasAttached())continue;if(go(k.overlayElement,c)||go(k.overlayElement,p))break;let W=k._outsidePointerEvents;this._ngZone?this._ngZone.run(()=>W.next(s)):W.next(s)}}}add(e){if(super.add(e),!this._isAttached){let i=this._document.body;this._ngZone?this._ngZone.runOutsideAngular(()=>this._addEventListeners(i)):this._addEventListeners(i),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){if(this._isAttached){let e=this._document.body;e.removeEventListener("pointerdown",this._pointerDownListener,!0),e.removeEventListener("click",this._clickListener,!0),e.removeEventListener("auxclick",this._clickListener,!0),e.removeEventListener("contextmenu",this._clickListener,!0),this._platform.IOS&&this._cursorStyleIsSet&&(e.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1}}_addEventListeners(e){e.addEventListener("pointerdown",this._pointerDownListener,!0),e.addEventListener("click",this._clickListener,!0),e.addEventListener("auxclick",this._clickListener,!0),e.addEventListener("contextmenu",this._clickListener,!0)}static{this.\u0275fac=function(i){return new(i||t)(U(xe),U(Ue),U(ze,8))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function go(t,r){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=r;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var xo=(()=>{class t{constructor(e,i){this._platform=i,this._document=e}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Cr()){let n=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let s=0;s<n.length;s++)n[s].remove()}let i=this._document.createElement("div");i.classList.add(e),Cr()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}static{this.\u0275fac=function(i){return new(i||t)(U(xe),U(Ue))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Ir=class{constructor(r,e,i,n,s,c,p,b,O,k=!1,W){this._portalOutlet=r,this._host=e,this._pane=i,this._config=n,this._ngZone=s,this._keyboardDispatcher=c,this._document=p,this._location=b,this._outsideClickDispatcher=O,this._animationsDisabled=k,this._injector=W,this._backdropElement=null,this._backdropClick=new Re,this._attachments=new Re,this._detachments=new Re,this._locationChanges=Xi.EMPTY,this._backdropClickHandler=D=>this._backdropClick.next(D),this._backdropTransitionendHandler=D=>{this._disposeBackdrop(D.target)},this._keydownEvents=new Re,this._outsidePointerEvents=new Re,this._renders=new Re,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy,this._afterRenderRef=an(()=>Ia(()=>{this._renders.next()},{injector:this._injector}))}get overlayElement(){return this._pane}get backdropElement(){return this._backdropElement}get hostElement(){return this._host}attach(r){!this._host.parentElement&&this._previousHostParent&&this._previousHostParent.appendChild(this._host);let e=this._portalOutlet.attach(r);return this._positionStrategy&&this._positionStrategy.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=tn(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let r=this._portalOutlet.detach();return this._detachments.next(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),r}dispose(){let r=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._disposeBackdrop(this._backdropElement),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=null,r&&this._detachments.next(),this._detachments.complete(),this._afterRenderRef.destroy(),this._renders.complete()}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(r){r!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=r,this.hasAttached()&&(r.attach(this),this.updatePosition()))}updateSize(r){this._config=S(S({},this._config),r),this._updateElementSize()}setDirection(r){this._config=K(S({},this._config),{direction:r}),this._updateElementDirection()}addPanelClass(r){this._pane&&this._toggleClasses(this._pane,r,!0)}removePanelClass(r){this._pane&&this._toggleClasses(this._pane,r,!1)}getDirection(){let r=this._config.direction;return r?typeof r=="string"?r:r.value:"ltr"}updateScrollStrategy(r){r!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=r,this.hasAttached()&&(r.attach(this),r.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let r=this._pane.style;r.width=Te(this._config.width),r.height=Te(this._config.height),r.minWidth=Te(this._config.minWidth),r.minHeight=Te(this._config.minHeight),r.maxWidth=Te(this._config.maxWidth),r.maxHeight=Te(this._config.maxHeight)}_togglePointerEvents(r){this._pane.style.pointerEvents=r?"":"none"}_attachBackdrop(){let r="cdk-overlay-backdrop-showing";this._backdropElement=this._document.createElement("div"),this._backdropElement.classList.add("cdk-overlay-backdrop"),this._animationsDisabled&&this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropElement,this._config.backdropClass,!0),this._host.parentElement.insertBefore(this._backdropElement,this._host),this._backdropElement.addEventListener("click",this._backdropClickHandler),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{this._backdropElement&&this._backdropElement.classList.add(r)})}):this._backdropElement.classList.add(r)}_updateStackingOrder(){this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){let r=this._backdropElement;if(r){if(this._animationsDisabled){this._disposeBackdrop(r);return}r.classList.remove("cdk-overlay-backdrop-showing"),this._ngZone.runOutsideAngular(()=>{r.addEventListener("transitionend",this._backdropTransitionendHandler)}),r.style.pointerEvents="none",this._backdropTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(()=>{this._disposeBackdrop(r)},500))}}_toggleClasses(r,e,i){let n=ui(e||[]).filter(s=>!!s);n.length&&(i?r.classList.add(...n):r.classList.remove(...n))}_detachContentWhenEmpty(){this._ngZone.runOutsideAngular(()=>{let r=this._renders.pipe(Zt(qn(this._attachments,this._detachments))).subscribe(()=>{(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),r.unsubscribe())})})}_disposeScrollStrategy(){let r=this._scrollStrategy;r&&(r.disable(),r.detach&&r.detach())}_disposeBackdrop(r){r&&(r.removeEventListener("click",this._backdropClickHandler),r.removeEventListener("transitionend",this._backdropTransitionendHandler),r.remove(),this._backdropElement===r&&(this._backdropElement=null)),this._backdropTimeout&&(clearTimeout(this._backdropTimeout),this._backdropTimeout=void 0)}},_o="cdk-overlay-connected-position-bounding-box",Kd=/([A-Za-z%]+)$/,Mr=class{get positions(){return this._preferredPositions}constructor(r,e,i,n,s){this._viewportRuler=e,this._document=i,this._platform=n,this._overlayContainer=s,this._lastBoundingBoxSize={width:0,height:0},this._isPushed=!1,this._canPush=!0,this._growAfterOpen=!1,this._hasFlexibleDimensions=!0,this._positionLocked=!1,this._viewportMargin=0,this._scrollables=[],this._preferredPositions=[],this._positionChanges=new Re,this._resizeSubscription=Xi.EMPTY,this._offsetX=0,this._offsetY=0,this._appliedPanelClasses=[],this.positionChanges=this._positionChanges,this.setOrigin(r)}attach(r){this._overlayRef&&this._overlayRef,this._validatePositions(),r.hostElement.classList.add(_o),this._overlayRef=r,this._boundingBox=r.hostElement,this._pane=r.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();let r=this._originRect,e=this._overlayRect,i=this._viewportRect,n=this._containerRect,s=[],c;for(let p of this._preferredPositions){let b=this._getOriginPoint(r,n,p),O=this._getOverlayPoint(b,e,p),k=this._getOverlayFit(O,e,i,p);if(k.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(p,b);return}if(this._canFitWithFlexibleDimensions(k,O,i)){s.push({position:p,origin:b,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(b,p)});continue}(!c||c.overlayFit.visibleArea<k.visibleArea)&&(c={overlayFit:k,overlayPoint:O,originPoint:b,position:p,overlayRect:e})}if(s.length){let p=null,b=-1;for(let O of s){let k=O.boundingBoxRect.width*O.boundingBoxRect.height*(O.position.weight||1);k>b&&(b=k,p=O)}this._isPushed=!1,this._applyPosition(p.position,p.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(c.position,c.originPoint);return}this._applyPosition(c.position,c.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Wt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(_o),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let r=this._lastPosition;if(r){this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();let e=this._getOriginPoint(this._originRect,this._containerRect,r);this._applyPosition(r,e)}else this.apply()}withScrollableContainers(r){return this._scrollables=r,this}withPositions(r){return this._preferredPositions=r,r.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(r){return this._viewportMargin=r,this}withFlexibleDimensions(r=!0){return this._hasFlexibleDimensions=r,this}withGrowAfterOpen(r=!0){return this._growAfterOpen=r,this}withPush(r=!0){return this._canPush=r,this}withLockedPosition(r=!0){return this._positionLocked=r,this}setOrigin(r){return this._origin=r,this}withDefaultOffsetX(r){return this._offsetX=r,this}withDefaultOffsetY(r){return this._offsetY=r,this}withTransformOriginOn(r){return this._transformOriginSelector=r,this}_getOriginPoint(r,e,i){let n;if(i.originX=="center")n=r.left+r.width/2;else{let c=this._isRtl()?r.right:r.left,p=this._isRtl()?r.left:r.right;n=i.originX=="start"?c:p}e.left<0&&(n-=e.left);let s;return i.originY=="center"?s=r.top+r.height/2:s=i.originY=="top"?r.top:r.bottom,e.top<0&&(s-=e.top),{x:n,y:s}}_getOverlayPoint(r,e,i){let n;i.overlayX=="center"?n=-e.width/2:i.overlayX==="start"?n=this._isRtl()?-e.width:0:n=this._isRtl()?0:-e.width;let s;return i.overlayY=="center"?s=-e.height/2:s=i.overlayY=="top"?0:-e.height,{x:r.x+n,y:r.y+s}}_getOverlayFit(r,e,i,n){let s=yo(e),{x:c,y:p}=r,b=this._getOffset(n,"x"),O=this._getOffset(n,"y");b&&(c+=b),O&&(p+=O);let k=0-c,W=c+s.width-i.width,D=0-p,P=p+s.height-i.height,X=this._subtractOverflows(s.width,k,W),oe=this._subtractOverflows(s.height,D,P),Be=X*oe;return{visibleArea:Be,isCompletelyWithinViewport:s.width*s.height===Be,fitsInViewportVertically:oe===s.height,fitsInViewportHorizontally:X==s.width}}_canFitWithFlexibleDimensions(r,e,i){if(this._hasFlexibleDimensions){let n=i.bottom-e.y,s=i.right-e.x,c=vo(this._overlayRef.getConfig().minHeight),p=vo(this._overlayRef.getConfig().minWidth),b=r.fitsInViewportVertically||c!=null&&c<=n,O=r.fitsInViewportHorizontally||p!=null&&p<=s;return b&&O}return!1}_pushOverlayOnScreen(r,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:r.x+this._previousPushAmount.x,y:r.y+this._previousPushAmount.y};let n=yo(e),s=this._viewportRect,c=Math.max(r.x+n.width-s.width,0),p=Math.max(r.y+n.height-s.height,0),b=Math.max(s.top-i.top-r.y,0),O=Math.max(s.left-i.left-r.x,0),k=0,W=0;return n.width<=s.width?k=O||-c:k=r.x<this._viewportMargin?s.left-i.left-r.x:0,n.height<=s.height?W=b||-p:W=r.y<this._viewportMargin?s.top-i.top-r.y:0,this._previousPushAmount={x:k,y:W},{x:r.x+k,y:r.y+W}}_applyPosition(r,e){if(this._setTransformOrigin(r),this._setOverlayElementStyles(e,r),this._setBoundingBoxStyles(e,r),r.panelClass&&this._addPanelClasses(r.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(r!==this._lastPosition||!this._lastScrollVisibility||!qd(this._lastScrollVisibility,i)){let n=new Fr(r,i);this._positionChanges.next(n)}this._lastScrollVisibility=i}this._lastPosition=r,this._isInitialRender=!1}_setTransformOrigin(r){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,n=r.overlayY;r.overlayX==="center"?i="center":this._isRtl()?i=r.overlayX==="start"?"right":"left":i=r.overlayX==="start"?"left":"right";for(let s=0;s<e.length;s++)e[s].style.transformOrigin=`${i} ${n}`}_calculateBoundingBoxRect(r,e){let i=this._viewportRect,n=this._isRtl(),s,c,p;if(e.overlayY==="top")c=r.y,s=i.height-c+this._viewportMargin;else if(e.overlayY==="bottom")p=i.height-r.y+this._viewportMargin*2,s=i.height-p+this._viewportMargin;else{let P=Math.min(i.bottom-r.y+i.top,r.y),X=this._lastBoundingBoxSize.height;s=P*2,c=r.y-P,s>X&&!this._isInitialRender&&!this._growAfterOpen&&(c=r.y-X/2)}let b=e.overlayX==="start"&&!n||e.overlayX==="end"&&n,O=e.overlayX==="end"&&!n||e.overlayX==="start"&&n,k,W,D;if(O)D=i.width-r.x+this._viewportMargin*2,k=r.x-this._viewportMargin;else if(b)W=r.x,k=i.right-r.x;else{let P=Math.min(i.right-r.x+i.left,r.x),X=this._lastBoundingBoxSize.width;k=P*2,W=r.x-P,k>X&&!this._isInitialRender&&!this._growAfterOpen&&(W=r.x-X/2)}return{top:c,left:W,bottom:p,right:D,width:k,height:s}}_setBoundingBoxStyles(r,e){let i=this._calculateBoundingBoxRect(r,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left="0",n.bottom=n.right=n.maxHeight=n.maxWidth="",n.width=n.height="100%";else{let s=this._overlayRef.getConfig().maxHeight,c=this._overlayRef.getConfig().maxWidth;n.height=Te(i.height),n.top=Te(i.top),n.bottom=Te(i.bottom),n.width=Te(i.width),n.left=Te(i.left),n.right=Te(i.right),e.overlayX==="center"?n.alignItems="center":n.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?n.justifyContent="center":n.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",s&&(n.maxHeight=Te(s)),c&&(n.maxWidth=Te(c))}this._lastBoundingBoxSize=i,Wt(this._boundingBox.style,n)}_resetBoundingBoxStyles(){Wt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Wt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(r,e){let i={},n=this._hasExactPosition(),s=this._hasFlexibleDimensions,c=this._overlayRef.getConfig();if(n){let k=this._viewportRuler.getViewportScrollPosition();Wt(i,this._getExactOverlayY(e,r,k)),Wt(i,this._getExactOverlayX(e,r,k))}else i.position="static";let p="",b=this._getOffset(e,"x"),O=this._getOffset(e,"y");b&&(p+=`translateX(${b}px) `),O&&(p+=`translateY(${O}px)`),i.transform=p.trim(),c.maxHeight&&(n?i.maxHeight=Te(c.maxHeight):s&&(i.maxHeight="")),c.maxWidth&&(n?i.maxWidth=Te(c.maxWidth):s&&(i.maxWidth="")),Wt(this._pane.style,i)}_getExactOverlayY(r,e,i){let n={top:"",bottom:""},s=this._getOverlayPoint(e,this._overlayRect,r);if(this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,i)),r.overlayY==="bottom"){let c=this._document.documentElement.clientHeight;n.bottom=`${c-(s.y+this._overlayRect.height)}px`}else n.top=Te(s.y);return n}_getExactOverlayX(r,e,i){let n={left:"",right:""},s=this._getOverlayPoint(e,this._overlayRect,r);this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,i));let c;if(this._isRtl()?c=r.overlayX==="end"?"left":"right":c=r.overlayX==="end"?"right":"left",c==="right"){let p=this._document.documentElement.clientWidth;n.right=`${p-(s.x+this._overlayRect.width)}px`}else n.left=Te(s.x);return n}_getScrollVisibility(){let r=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:fo(r,i),isOriginOutsideView:Er(r,i),isOverlayClipped:fo(e,i),isOverlayOutsideView:Er(e,i)}}_subtractOverflows(r,...e){return e.reduce((i,n)=>i-Math.max(n,0),r)}_getNarrowedViewportRect(){let r=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._viewportMargin,left:i.left+this._viewportMargin,right:i.left+r-this._viewportMargin,bottom:i.top+e-this._viewportMargin,width:r-2*this._viewportMargin,height:e-2*this._viewportMargin}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(r,e){return e==="x"?r.offsetX==null?this._offsetX:r.offsetX:r.offsetY==null?this._offsetY:r.offsetY}_validatePositions(){}_addPanelClasses(r){this._pane&&ui(r).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(r=>{this._pane.classList.remove(r)}),this._appliedPanelClasses=[])}_getOriginRect(){let r=this._origin;if(r instanceof _e)return r.nativeElement.getBoundingClientRect();if(r instanceof Element)return r.getBoundingClientRect();let e=r.width||0,i=r.height||0;return{top:r.y,bottom:r.y+i,left:r.x,right:r.x+e,height:i,width:e}}};function Wt(t,r){for(let e in r)r.hasOwnProperty(e)&&(t[e]=r[e]);return t}function vo(t){if(typeof t!="number"&&t!=null){let[r,e]=t.split(Kd);return!e||e==="px"?parseFloat(r):null}return t||null}function yo(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function qd(t,r){return t===r?!0:t.isOriginClipped===r.isOriginClipped&&t.isOriginOutsideView===r.isOriginOutsideView&&t.isOverlayClipped===r.isOverlayClipped&&t.isOverlayOutsideView===r.isOverlayOutsideView}var Co="cdk-global-overlay-wrapper",kr=class{constructor(){this._cssPosition="static",this._topOffset="",this._bottomOffset="",this._alignItems="",this._xPosition="",this._xOffset="",this._width="",this._height="",this._isDisposed=!1}attach(r){let e=r.getConfig();this._overlayRef=r,this._width&&!e.width&&r.updateSize({width:this._width}),this._height&&!e.height&&r.updateSize({height:this._height}),r.hostElement.classList.add(Co),this._isDisposed=!1}top(r=""){return this._bottomOffset="",this._topOffset=r,this._alignItems="flex-start",this}left(r=""){return this._xOffset=r,this._xPosition="left",this}bottom(r=""){return this._topOffset="",this._bottomOffset=r,this._alignItems="flex-end",this}right(r=""){return this._xOffset=r,this._xPosition="right",this}start(r=""){return this._xOffset=r,this._xPosition="start",this}end(r=""){return this._xOffset=r,this._xPosition="end",this}width(r=""){return this._overlayRef?this._overlayRef.updateSize({width:r}):this._width=r,this}height(r=""){return this._overlayRef?this._overlayRef.updateSize({height:r}):this._height=r,this}centerHorizontally(r=""){return this.left(r),this._xPosition="center",this}centerVertically(r=""){return this.top(r),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let r=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:n,height:s,maxWidth:c,maxHeight:p}=i,b=(n==="100%"||n==="100vw")&&(!c||c==="100%"||c==="100vw"),O=(s==="100%"||s==="100vh")&&(!p||p==="100%"||p==="100vh"),k=this._xPosition,W=this._xOffset,D=this._overlayRef.getConfig().direction==="rtl",P="",X="",oe="";b?oe="flex-start":k==="center"?(oe="center",D?X=W:P=W):D?k==="left"||k==="end"?(oe="flex-end",P=W):(k==="right"||k==="start")&&(oe="flex-start",X=W):k==="left"||k==="start"?(oe="flex-start",P=W):(k==="right"||k==="end")&&(oe="flex-end",X=W),r.position=this._cssPosition,r.marginLeft=b?"0":P,r.marginTop=O?"0":this._topOffset,r.marginBottom=this._bottomOffset,r.marginRight=b?"0":X,e.justifyContent=oe,e.alignItems=O?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let r=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(Co),i.justifyContent=i.alignItems=r.marginTop=r.marginBottom=r.marginLeft=r.marginRight=r.position="",this._overlayRef=null,this._isDisposed=!0}},Qd=(()=>{class t{constructor(e,i,n,s){this._viewportRuler=e,this._document=i,this._platform=n,this._overlayContainer=s}global(){return new kr}flexibleConnectedTo(e){return new Mr(e,this._viewportRuler,this._document,this._platform,this._overlayContainer)}static{this.\u0275fac=function(i){return new(i||t)(U(br),U(xe),U(Ue),U(xo))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Gd=0,hi=(()=>{class t{constructor(e,i,n,s,c,p,b,O,k,W,D,P){this.scrollStrategies=e,this._overlayContainer=i,this._componentFactoryResolver=n,this._positionBuilder=s,this._keyboardDispatcher=c,this._injector=p,this._ngZone=b,this._document=O,this._directionality=k,this._location=W,this._outsideClickDispatcher=D,this._animationsModuleType=P}create(e){let i=this._createHostElement(),n=this._createPaneElement(i),s=this._createPortalOutlet(n),c=new Ni(e);return c.direction=c.direction||this._directionality.value,new Ir(s,i,n,c,this._ngZone,this._keyboardDispatcher,this._document,this._location,this._outsideClickDispatcher,this._animationsModuleType==="NoopAnimations",this._injector.get(Ea))}position(){return this._positionBuilder}_createPaneElement(e){let i=this._document.createElement("div");return i.id=`cdk-overlay-${Gd++}`,i.classList.add("cdk-overlay-pane"),e.appendChild(i),i}_createHostElement(){let e=this._document.createElement("div");return this._overlayContainer.getContainerElement().appendChild(e),e}_createPortalOutlet(e){return this._appRef||(this._appRef=this._injector.get(ka)),new hn(e,this._componentFactoryResolver,this._appRef,this._injector,this._document)}static{this.\u0275fac=function(i){return new(i||t)(U(gn),U(xo),U(Jn),U(Qd),U(zd),U(Bt),U(ze),U(xe),U(co),U(La),U(Wd),U(Aa,8))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Xd=new R("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=I(hi);return()=>t.scrollStrategies.reposition()}});function Zd(t){return()=>t.scrollStrategies.reposition()}var Jd={provide:Xd,deps:[hi],useFactory:Zd},To=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({providers:[hi,Jd],imports:[Hi,mo,xr,xr]})}}return t})();var Hc=Ai(Eo(),1),Sn=Ai(Fo(),1);var ct=Ai(Io(),1);var vc=[{keys:["tab"],result:"Tab \u21B9"},{keys:["enter"],result:"\u21B5 Enter"},{keys:["space"],result:["\u23B5","Space"]},{keys:["home"],result:"Home"},{keys:["end"],result:"End"},{keys:["minus"],result:["-","Minus"]},{keys:["equal"],result:["=","Equal"]},{keys:["bracketleft"],result:["[","Left Bracket"]},{keys:["bracketright"],result:["]","Right Bracket"]},{keys:["backslash"],result:["\\","Backslash"]},{keys:["semicolon"],result:[";","Semicolon"]},{keys:["quote"],result:["'","Quote"]},{keys:["comma"],result:[",","Comma"]},{keys:["period"],result:[".","Period"]},{keys:["slash"],result:["/","Slash"]},{keys:["backquote"],result:["`","Backquote"]},{keys:["arrowleft","left"],result:["\u2190","\u2190 Left"]},{keys:["arrowright","right"],result:["\u2192","\u2192 Right"]},{keys:["arrowup","up"],result:["\u2191","\u2191 Up"]},{keys:["arrowdown","down"],result:["\u2193","\u2193 Down"]},{keys:["capslock","caps"],result:"Caps Lock"},{keys:["numlock","num"],result:"Num Lock"},{keys:["shift","leftshift","shiftleft"],result:"Shift"},{keys:["shift","rightshift","shiftright"],result:"Right Shift"},{keys:["ctrl","control","leftctrl","ctrlleft","leftcontrol","controlleft"],result:["Ctrl","Control"]},{keys:["ctrl","control","rightctrl","ctrlright","rightcontrol","controlright"],result:["Right Ctrl","Right Control"]},{keys:["cmd","command"],result:["Cmd","Command"]},{keys:["option","opt"],result:["Opt","Option"]},{keys:["alt","leftalt","altleft"],result:"Alt"},{keys:["altgraph","altgr","rightalt","altright"],result:["Alt Gr","Alt Graph"]},{keys:["escape","esc"],result:["Esc","Escape"]},{keys:["insert","ins"],result:["Ins","Insert"]},{keys:["delete","del"],result:["Del","Delete"]},{keys:["windows","win","leftmeta","metaleft"],result:["\u229E Win","\u229E Windows"]},{keys:["menu","contextmenu"],result:"\u25A4 Menu"},{keys:["backspace","back","bcksp"],result:["Bcksp","Backspace"]},{keys:["printscreen","printsc","prtsc"],result:["Prt Sc","Print Screen"]},{keys:["numpaddivide","divide"],result:["Numpad /","Divide"]},{keys:["numpadmultiply","multiply"],result:["Numpad *","Multiply"]},{keys:["numpadadd","add"],result:["Numpad +","Add"]},{keys:["numpadsubstract","substract"],result:["Numpad -","Substract"]},{keys:["numpaddecimal","decimal"],result:["Numpad .","Decimal"]},{keys:["numpadenter"],result:"\u21B5 Numpad Enter"},{keys:["audiovolumemute","audiomute","volumemute","mute"],result:["Vol. Mute","Audio Volume Mute"]},{keys:["audiovolumedown","volumedown"],result:["Vol. Down","Audio Volume Down"]},{keys:["audiovolumeup","volumeup"],result:["Vol. Up","Audio Volume Up"]},{keys:["pagedown","pgdown"],result:["Pg Down","Page Down"]},{keys:["pageup","pgup"],result:["Pg Up","Page Up"]}],yc=vc.reduce((t,r)=>{for(let e of r.keys)t[e]=r.result;return t},{}),Cc="abcdefghijklmnopqrstuvwxyz".split("").reduce((t,r)=>(t[`key${r}`]=r.toUpperCase(),t),{}),Nr={};for(let t=0;t<10;t++){let r=t.toString();Nr[`digit${r}`]=r,Nr[`numpad${r}`]=`Numpad ${r}`}var Mo={};for(let t=1;t<=12;t++){let r=t.toString();Mo[`f${r}`]=r}var jr=Object.assign(Object.assign(Object.assign(Object.assign({},yc),Cc),Nr),Mo);function ko(t,r=!0){let e=t.toLowerCase();if(jr[e]){let i=jr[e];return typeof i=="string"?i:r?i[0]:i[1]}if(e.match(/^.+(left|right)$/)){let i=t.match(/right|left/i)[0].toLowerCase();i=i[0].toUpperCase()+i.substring(1);let n=t.replace(/right|left/i,"");t=i+n}return t.replace(/([A-Z])/g," $1").replace(/\s\s+/g," ").trim()}var Po=new Set,Kt,bc=(()=>{class t{constructor(e,i){this._platform=e,this._nonce=i,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Tc}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&xc(e,this._nonce),this._matchMedia(e)}static{this.\u0275fac=function(i){return new(i||t)(U(Ue),U(Fa,8))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function xc(t,r){if(!Po.has(t))try{Kt||(Kt=document.createElement("style"),r&&Kt.setAttribute("nonce",r),Kt.setAttribute("type","text/css"),document.head.appendChild(Kt)),Kt.sheet&&(Kt.sheet.insertRule(`@media ${t} {body{ }}`,0),Po.add(t))}catch(e){console.error(e)}}function Tc(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Oo=(()=>{class t{constructor(e,i){this._mediaMatcher=e,this._zone=i,this._queries=new Map,this._destroySubject=new Re}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Vo(ui(e)).some(n=>this._registerQuery(n).mql.matches)}observe(e){let n=Vo(ui(e)).map(c=>this._registerQuery(c).observable),s=va(n);return s=ya(s.pipe(wa(1)),s.pipe(Da(1),Ta(0))),s.pipe(lt(c=>{let p={matches:!1,breakpoints:{}};return c.forEach(({matches:b,query:O})=>{p.matches=p.matches||b,p.breakpoints[O]=b}),p}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),s={observable:new Zi(c=>{let p=b=>this._zone.run(()=>c.next(b));return i.addListener(p),()=>{i.removeListener(p)}}).pipe(Fi(i),lt(({matches:c})=>({query:e,matches:c})),Zt(this._destroySubject)),mql:i};return this._queries.set(e,s),s}static{this.\u0275fac=function(i){return new(i||t)(U(bc),U(ze))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Vo(t){return t.map(r=>r.split(",")).reduce((r,e)=>r.concat(e)).map(r=>r.trim())}var wc=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Ro=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({providers:[wc]})}}return t})();var Sc=(()=>{class t{constructor(e){this._platform=e}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Ec(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=Dc(Oc(e));if(i&&(Lo(i)===-1||!this.isVisible(i)))return!1;let n=e.nodeName.toLowerCase(),s=Lo(e);return e.hasAttribute("contenteditable")?s!==-1:n==="iframe"||n==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Pc(e)?!1:n==="audio"?e.hasAttribute("controls")?s!==-1:!1:n==="video"?s===-1?!1:s!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return Vc(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static{this.\u0275fac=function(i){return new(i||t)(U(Ue))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Dc(t){try{return t.frameElement}catch{return null}}function Ec(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function Ac(t){let r=t.nodeName.toLowerCase();return r==="input"||r==="select"||r==="button"||r==="textarea"}function Fc(t){return Mc(t)&&t.type=="hidden"}function Ic(t){return kc(t)&&t.hasAttribute("href")}function Mc(t){return t.nodeName.toLowerCase()=="input"}function kc(t){return t.nodeName.toLowerCase()=="a"}function Uo(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let r=t.getAttribute("tabindex");return!!(r&&!isNaN(parseInt(r,10)))}function Lo(t){if(!Uo(t))return null;let r=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(r)?-1:r}function Pc(t){let r=t.nodeName.toLowerCase(),e=r==="input"&&t.type;return e==="text"||e==="password"||r==="select"||r==="textarea"}function Vc(t){return Fc(t)?!1:Ac(t)||Ic(t)||t.hasAttribute("contenteditable")||Uo(t)}function Oc(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var $r=class{get enabled(){return this._enabled}set enabled(r){this._enabled=r,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}constructor(r,e,i,n,s=!1,c){this._element=r,this._checker=e,this._ngZone=i,this._document=n,this._injector=c,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,s||this.attachAnchors()}destroy(){let r=this._startAnchor,e=this._endAnchor;r&&(r.removeEventListener("focus",this.startAnchorListener),r.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(r)))})}focusFirstTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(r)))})}focusLastTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(r)))})}_getRegionBoundary(r){let e=this._element.querySelectorAll(`[cdk-focus-region-${r}], [cdkFocusRegion${r}], [cdk-focus-${r}]`);return r=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(r){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(r),!!i}return e.focus(r),!0}return this.focusFirstTabbableElement(r)}focusFirstTabbableElement(r){let e=this._getRegionBoundary("start");return e&&e.focus(r),!!e}focusLastTabbableElement(r){let e=this._getRegionBoundary("end");return e&&e.focus(r),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let i=0;i<e.length;i++){let n=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(n)return n}return null}_getLastTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let i=e.length-1;i>=0;i--){let n=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(n)return n}return null}_createAnchor(){let r=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,r),r.classList.add("cdk-visually-hidden"),r.classList.add("cdk-focus-trap-anchor"),r.setAttribute("aria-hidden","true"),r}_toggleAnchorTabIndex(r,e){r?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(r){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_executeOnStable(r){this._injector?tn(r,{injector:this._injector}):setTimeout(r)}},Rc=(()=>{class t{constructor(e,i,n){this._checker=e,this._ngZone=i,this._injector=I(Bt),this._document=n}create(e,i=!1){return new $r(e,this._checker,this._ngZone,this._document,i,this._injector)}static{this.\u0275fac=function(i){return new(i||t)(U(Sc),U(ze),U(xe))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),No=(()=>{class t{get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}constructor(e,i,n){this._elementRef=e,this._focusTrapFactory=i,this._previouslyFocusedElement=null,I(Ue).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let i=e.autoCapture;i&&!i.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=lo(),this.focusTrap?.focusInitialElementWhenReady()}static{this.\u0275fac=function(i){return new(i||t)(J(_e),J(Rc),J(xe))}}static{this.\u0275dir=G({type:t,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",ni],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",ni]},exportAs:["cdkTrapFocus"],features:[Nt,ei]})}}return t})();var qt=function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t}(qt||{}),Bo="cdk-high-contrast-black-on-white",Ho="cdk-high-contrast-white-on-black",Yr="cdk-high-contrast-active",Lc=(()=>{class t{constructor(e,i){this._platform=e,this._document=i,this._breakpointSubscription=I(Oo).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return qt.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let i=this._document.defaultView||window,n=i&&i.getComputedStyle?i.getComputedStyle(e):null,s=(n&&n.backgroundColor||"").replace(/ /g,"");switch(e.remove(),s){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return qt.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return qt.BLACK_ON_WHITE}return qt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Yr,Bo,Ho),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===qt.BLACK_ON_WHITE?e.add(Yr,Bo):i===qt.WHITE_ON_BLACK&&e.add(Yr,Ho)}}static{this.\u0275fac=function(i){return new(i||t)(U(Ue),U(xe))}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),jo=(()=>{class t{constructor(e){e._applyBodyHighContrastModeCssClasses()}static{this.\u0275fac=function(i){return new(i||t)(U(Lc))}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[Ro]})}}return t})();var Uc=["focusableElement"],ns=["textInput"],Ve=["*"];function Nc(t,r){}function jc(t,r){if(t&1&&(o(0,"div",2),g(1,Nc,0,0,"ng-template",5),a()),t&2){let e,i=f();d(),m("ngTemplateOutlet",(e=(e=i.prefixTemplateInput())!==null&&e!==void 0?e:(e=i.prefixTemplate())==null?null:e.template)!==null&&e!==void 0?e:null)}}function Yc(t,r){}function $c(t,r){if(t&1&&(o(0,"div",4),g(1,Yc,0,0,"ng-template",5),a()),t&2){let e,i=f();d(),m("ngTemplateOutlet",(e=(e=i.suffixTemplateInput())!==null&&e!==void 0?e:(e=i.suffixTemplate())==null?null:e.template)!==null&&e!==void 0?e:null)}}function zc(t,r){if(t&1&&(o(0,"div",8),l(1),a()),t&2){let e=f(2);d(),v(e.placeholder())}}function Wc(t,r){}function Kc(t,r){if(t&1&&g(0,zc,2,1,"ng-template",null,1,re)(2,Wc,0,0,"ng-template",7),t&2){let e,i=V(1),n=f();d(2),m("ngTemplateOutlet",((e=n.placeholderTemplate())==null?null:e.template)||i)}}function qc(t,r){if(t&1){let e=N();o(0,"ard-clear-button",9),_("click",function(n){T(e);let s=f();return w(s.onClearButtonClick(n))}),a()}if(t&2){let e=f();m("title",e.clearButtonTitle())}}var ea=["contentWrapperEl"];function Qc(t,r){if(t&1){let e=N();o(0,"ard-button",10),_("click",function(n){T(e);let s=f();return w(s.canDecrement()&&s.onQuickChangeButtonClick(-1,n))})("mouseup",function(n){T(e);let s=f();return w(s.onQuickChangeButtonMouseup(n))})("ardHold",function(){T(e);let n=f();return w(n.canDecrement()&&n.onQuickChangeButtonClick(-1))}),l(1," - "),a()}if(t&2){let e=f();m("variant",e.buttonVariant())("appearance",e.buttonAppearance())("disabled",!e.canDecrement())("tabIndex",e.canDecrement()?e.tabIndex():-1)}}function Gc(t,r){}function Xc(t,r){if(t&1&&(o(0,"div",5),g(1,Gc,0,0,"ng-template",11),a()),t&2){let e,i=f();d(),m("ngTemplateOutlet",(e=(e=i.prefixTemplate())==null?null:e.template)!==null&&e!==void 0?e:null)}}function Zc(t,r){if(t&1&&(o(0,"div",12),l(1),a()),t&2){let e=f(2);d(),v(e.placeholder())}}function Jc(t,r){}function ep(t,r){if(t&1&&g(0,Zc,2,1,"ng-template",null,1,re)(2,Jc,0,0,"ng-template",11),t&2){let e,i=V(1),n=f();d(2),m("ngTemplateOutlet",((e=n.placeholderTemplate())==null?null:e.template)||i)}}function tp(t,r){}function ip(t,r){if(t&1&&(o(0,"div",8),g(1,tp,0,0,"ng-template",11),a()),t&2){let e,i=f();d(),m("ngTemplateOutlet",(e=(e=i.suffixTemplate())==null?null:e.template)!==null&&e!==void 0?e:null)}}function np(t,r){if(t&1){let e=N();o(0,"ard-button",13),_("click",function(n){T(e);let s=f();return w(s.canIncrement()&&s.onQuickChangeButtonClick(1,n))})("mouseup",function(n){T(e);let s=f();return w(s.onQuickChangeButtonMouseup(n))})("ardHold",function(){T(e);let n=f();return w(n.canIncrement()&&n.onQuickChangeButtonClick(1))}),l(1," + "),a()}if(t&2){let e=f();m("variant",e.buttonVariant())("appearance",e.buttonAppearance())("disabled",!e.canIncrement())("tabIndex",e.canIncrement()?e.tabIndex():-1)}}function rp(t,r){if(t&1&&y(0,"ard-icon",5),t&2){let e=r.state,i=f();m("icon",e===i.State.Selected?"check_box":e===i.State.Unselected?"check_box_outline_blank":"indeterminate_check_box")("filled",e!==i.State.Indeterminate)}}function ap(t,r){}var op=["track"],rs=t=>({"--_ard-slider-transition":t}),sp=(t,r)=>({left:t,width:r}),pt=t=>({left:t});function lp(t,r){if(t&1&&y(0,"div",16),t&2){let e=r.$implicit;be(fe(2,pt,e))}}function dp(t,r){if(t&1&&(o(0,"div",10),B(1,lp,1,4,"div",15,gt),a()),t&2){let e=f();d(),H(e._tickArray())}}function cp(t,r){if(t&1&&(o(0,"div",19),l(1),a()),t&2){let e=r.$implicit;d(),v(e)}}function pp(t,r){}function up(t,r){if(t&1&&(o(0,"div",17),g(1,cp,2,1,"ng-template",null,3,re)(3,pp,0,0,"ng-template",18),a()),t&2){let e,i=V(2),n=f();be(fe(6,pt,n.handlePositionsPercent()[0])),te("ard-tooltip-always",n.tooltipBehavior()==="always"),d(3),m("ngTemplateOutlet",((e=n.tooltipTemplate())==null?null:e.template)||i)("ngTemplateOutletContext",n.tooltipContexts().from)}}function mp(t,r){if(t&1&&(o(0,"div",19),l(1),a()),t&2){let e=r.$implicit;d(),v(e)}}function hp(t,r){}function fp(t,r){if(t&1&&(o(0,"div",17),g(1,mp,2,1,"ng-template",null,3,re)(3,hp,0,0,"ng-template",18),a()),t&2){let e,i=V(2),n=f();be(fe(6,pt,n.handlePositionsPercent()[1])),te("ard-tooltip-always",n.tooltipBehavior()==="always"),d(3),m("ngTemplateOutlet",((e=n.tooltipTemplate())==null?null:e.template)||i)("ngTemplateOutletContext",n.tooltipContexts().to)}}function gp(t,r){if(t&1&&(o(0,"div",21),l(1),a()),t&2){let e=r.$implicit;be(fe(3,pt,e.positionPercent)),d(),E(" ",e.label," ")}}function _p(t,r){if(t&1&&(o(0,"div",14),B(1,gp,2,5,"div",20,Q),a()),t&2){let e=f();d(),H(e.labelObjects())}}function vp(t,r){t&1&&y(0,"div",22)}var yp=t=>({width:t});function Cp(t,r){if(t&1&&y(0,"div",15),t&2){let e=r.$implicit;be(fe(2,pt,e))}}function bp(t,r){if(t&1&&(o(0,"div",9),B(1,Cp,1,4,"div",14,gt),a()),t&2){let e=f();d(),H(e._tickArray())}}function xp(t,r){if(t&1&&(o(0,"div",18),l(1),a()),t&2){let e=r.$implicit;d(),v(e)}}function Tp(t,r){}function wp(t,r){if(t&1&&(o(0,"div",16),g(1,xp,2,1,"ng-template",null,2,re)(3,Tp,0,0,"ng-template",17),a()),t&2){let e,i=V(2),n=f();be(fe(6,pt,n.handlePositionsPercent()[0])),te("ard-tooltip-always",n.tooltipBehavior()==="always"),d(3),m("ngTemplateOutlet",((e=n.tooltipTemplate())==null?null:e.template)||i)("ngTemplateOutletContext",n.tooltipContext())}}function Sp(t,r){if(t&1&&(o(0,"div",20),l(1),a()),t&2){let e=r.$implicit;be(fe(3,pt,e.positionPercent)),d(),E(" ",e.label," ")}}function Dp(t,r){if(t&1&&(o(0,"div",13),B(1,Sp,2,5,"div",19,Q),a()),t&2){let e=f();d(),H(e.labelObjects())}}function Ep(t,r){if(t&1&&(o(0,"ard-error"),l(1),a()),t&2){let e=r.$implicit;d(),v(e)}}function Ap(t,r){if(t&1&&l(0),t&2){let e=f();E(" ",e.requiredText()," ")}}function Fp(t,r){if(t&1&&l(0),t&2){let e=f();E(" ",e.optionalText()," ")}}var Ip=[[["ard-label"],["","ard-label",""]],"*",[["ard-error","left",""],["","ard-error","","left",""],["ard-auto-error","left",""]],[["ard-error","right",""],["","ard-error","","right",""],["ard-auto-error","right",""]],[["ard-hint","left",""],["","ard-hint","","left",""]],[["ard-hint","right",""],["","ard-hint","","right",""]],[["ard-hint",3,"left","",3,"right",""],["","ard-hint","",3,"left","",3,"right",""]],[["ard-error",3,"left","",3,"right",""],["","ard-error","",3,"left","",3,"right",""]],[["ard-auto-error",3,"left","",3,"right",""]],[["ard-hint-error",3,"left","",3,"right",""],["","ard-hint-error","",3,"left","",3,"right",""]],[["ard-hint-error","left",""],["","ard-hint-error","","left",""]],[["ard-hint-error","right",""],["","ard-hint-error","","right",""]]],Mp=["ard-label, [ard-label]","*","ard-error[left], [ard-error][left], ard-auto-error[left]","ard-error[right], [ard-error][right], ard-auto-error[right]","ard-hint[left], [ard-hint][left]","ard-hint[right], [ard-hint][right]","ard-hint:not([left]):not([right]), [ard-hint]:not([left]):not([right])","ard-error:not([left]):not([right]), [ard-error]:not([left]):not([right])","ard-auto-error:not([left]):not([right])","ard-hint-error:not([left]):not([right]), [ard-hint-error]:not([left]):not([right])","ard-hint-error[left], [ard-hint-error][left]","ard-hint-error[right], [ard-hint-error][right]"];function kp(t,r){}function Pp(t,r){}function Vp(t,r){}function Op(t,r){if(t&1&&(o(0,"div",11),g(1,kp,0,0,"ng-template",12)(2,Pp,0,0,"ng-template",12)(3,Vp,0,0,"ng-template",12),a()),t&2){f(2);let e=V(11),i=V(13),n=V(15);d(),m("ngTemplateOutlet",i),d(),m("ngTemplateOutlet",e),d(),m("ngTemplateOutlet",n)}}function Rp(t,r){}function Lp(t,r){}function Bp(t,r){}function Hp(t,r){}function Up(t,r){if(t&1&&(o(0,"div",11),g(1,Lp,0,0,"ng-template",12)(2,Bp,0,0,"ng-template",12)(3,Hp,0,0,"ng-template",12),a()),t&2){f(2);let e=V(11),i=V(13),n=V(15);d(),m("ngTemplateOutlet",i),d(),m("ngTemplateOutlet",e),d(),m("ngTemplateOutlet",n)}}function Np(t,r){}function jp(t,r){if(t&1&&(o(0,"div",10),g(1,Op,4,3,"div",11),L(2,2),g(3,Rp,0,0,"ng-template",12),a(),o(4,"div",13),g(5,Up,4,3,"div",11),L(6,3),g(7,Np,0,0,"ng-template",12),a()),t&2){let e=f(),i=V(17),n=V(19);d(),C(e.alignHintToLeftByDefault()?1:-1),d(2),m("ngTemplateOutlet",i),d(2),C(e.alignHintToLeftByDefault()?-1:5),d(2),m("ngTemplateOutlet",n)}}function Yp(t,r){}function $p(t,r){}function zp(t,r){if(t&1&&(o(0,"div",15),g(1,Yp,0,0,"ng-template",12)(2,$p,0,0,"ng-template",12),a()),t&2){f(2);let e=V(9),i=V(15);d(),m("ngTemplateOutlet",e),d(),m("ngTemplateOutlet",i)}}function Wp(t,r){}function Kp(t,r){}function qp(t,r){}function Qp(t,r){if(t&1&&(o(0,"div",15),g(1,Kp,0,0,"ng-template",12)(2,qp,0,0,"ng-template",12),a()),t&2){f(2);let e=V(9),i=V(15);d(),m("ngTemplateOutlet",e),d(),m("ngTemplateOutlet",i)}}function Gp(t,r){}function Xp(t,r){if(t&1&&(o(0,"div",14),g(1,zp,3,2,"div",15),L(2,4),g(3,Wp,0,0,"ng-template",12),a(),o(4,"div",16),g(5,Qp,3,2,"div",15),L(6,5),g(7,Gp,0,0,"ng-template",12),a()),t&2){let e=f(),i=V(17),n=V(19);d(),C(e.alignHintToLeftByDefault()?1:-1),d(2),m("ngTemplateOutlet",i),d(2),C(e.alignHintToLeftByDefault()?-1:5),d(2),m("ngTemplateOutlet",n)}}function Zp(t,r){t&1&&L(0,6)}function Jp(t,r){t&1&&L(0,7)}function eu(t,r){t&1&&L(0,8)}function tu(t,r){t&1&&L(0,9)}function iu(t,r){t&1&&L(0,10)}function nu(t,r){t&1&&L(0,11)}function ru(t,r){t&1&&(o(0,"span"),l(1,"+"),a())}function au(t,r){if(t&1&&(g(0,ru,2,0,"span"),y(1,"ard-kbd",3)),t&2){let e=r.$implicit,i=r.$index,n=f();C(i!==0?0:-1),d(),m("appearance",n.appearance())("full",n.full())("key",e)}}var ou=t=>({"--ard-_tabber-tabs":t});function su(t,r){if(t&1&&l(0),t&2){let e=r.$implicit;E(" ",e," ")}}function lu(t,r){}function du(t,r){if(t&1){let e=N();o(0,"button",6,0),_("click",function(){let n=T(e).$implicit,s=f();return w(s.selectTab(n.tab))})("focus",function(){let n=T(e).$implicit,s=f();return w(s.onTabFocus(n.tab))})("blur",function(){let n=T(e).$implicit,s=f();return w(s.onTabBlur(n.tab))}),y(2,"div",7),o(3,"div",8),g(4,su,1,1,"ng-template",null,1,re)(6,lu,0,0,"ng-template",9),a()()}if(t&2){let e,i=r.$implicit,n=V(5),s=f();te("ard-tab-disabled",i.tab.disabled())("ard-tab-with-pointer-events-when-disabled",i.tab.pointerEventsWhenDisabled())("ard-tab-active",i.tab.tabId()===s.selectedTabId())("ard-tab-focused",i.tab.tabId()===s.focusedTabId()),m("id",i.tab.tabId())("title",i.tab.tabTitle())("tabindex",i.tab.disabled()?-1:s.tabIndex()),d(6),m("ngTemplateOutlet",(e=(e=i.template)!==null&&e!==void 0?e:(e=s.labelTemplate())==null?null:e.template)!==null&&e!==void 0?e:n)("ngTemplateOutletContext",i.templateContext)}}var cu=["modalTemplate"],as=(t,r)=>[t,r];function pu(t,r){}function uu(t,r){if(t&1){let e=N();o(0,"div",5),_("click",function(){T(e);let n=f(2);return w(n.onBackdropClick())}),g(1,pu,0,0,"ng-template",6),a()}if(t&2){let e=f(2),i=V(3);m("ngClass",we(2,as,e.ngClasses(),e.backdropClass())),d(),m("ngTemplateOutlet",i)}}function mu(t,r){}function hu(t,r){if(t&1){let e=N();o(0,"div",7),_("click",function(){T(e);let n=f(2);return w(n.onBackdropClick())}),g(1,mu,0,0,"ng-template",6),a()}if(t&2){let e=f(2),i=V(3);m("ngClass",we(2,as,e.ngClasses(),e.backdropClass())),d(),m("ngTemplateOutlet",i)}}function fu(t,r){if(t&1&&g(0,uu,2,5,"div",3)(1,hu,2,5,"div",4),t&2){let e=f();C(e.noBackdrop()?0:1)}}function gu(t,r){t&1&&(o(0,"ard-icon"),l(1,"close"),a())}function _u(t,r){}function vu(t,r){if(t&1){let e=N();o(0,"ard-icon-button",13),_("click",function(){T(e);let n=f(2);return w(n.onCloseButtonClick())}),g(1,gu,2,0,"ng-template",null,2,re)(3,_u,0,0,"ng-template",6),a()}if(t&2){let e,i=V(2),n=f(2);m("compact",n.compact())("disabled",n.allActionsDisabled()),d(3),m("ngTemplateOutlet",(e=(e=(e=n.closeIconTemplate())==null?null:e.template)!==null&&e!==void 0?e:(e=n._closeIconTemplate())==null?null:e.template)!==null&&e!==void 0?e:i)}}function yu(t,r){if(t&1){let e=N();o(0,"div",8),_("click",function(n){return T(e),w(n.stopPropagation())}),o(1,"div",9)(2,"div",10),l(3),a(),g(4,vu,4,3,"ard-icon-button",11),a(),o(5,"div",12),L(6),a()()}if(t&2){let e=f();te("ard-modal-no-heading-text",!e.heading())("ard-modal-has-close-button",!e.noCloseButton()),m("ngClass",e.panelClass()),d(3),v(e.heading()||(e.noCloseButton()?"":"\xA0")),d(),C(e.noCloseButton()?-1:4)}}function Cu(t,r){if(t&1){let e=N();o(0,"ard-button",9),_("click",function(){T(e);let n=f().onReject;return w(n())}),l(1),a()}if(t&2){let e=f(),i=e.rejectButton,n=e.allActionsDisabled,s=e.dialogVariant,c=e.dialogCompact;m("color",i.color)("appearance",i.appearance)("variant",s)("compact",c)("disabled",n),d(),E(" ",i.text," ")}}function bu(t,r){if(t&1){let e=N();o(0,"div",6),g(1,Cu,2,6,"ard-button",7),o(2,"ard-button",8),_("click",function(){let n=T(e).onConfirm;return w(n())}),l(3),a()()}if(t&2){let e=r.confirmButton,i=r.rejectButton,n=r.canConfirm,s=r.allActionsDisabled,c=r.dialogVariant,p=r.dialogCompact;d(),C(i.enabled?1:-1),d(),m("color",e.color)("appearance",e.appearance)("variant",c)("compact",p)("disabled",!n||s)("pointerEventsWhenDisabled",e.pointerEventsWhenDisabled),d(),E(" ",e.text," ")}}function xu(t,r){}var os={Outlined:"outlined",Raised:"raised"},ss={Rounded:"rounded",Sharp:"sharp",SharpConnected:"sharp ard-connected"},$i=new R("ard-form-field-control");var Tu={Outlined:"outlined"},wu={Raised:"raised"},Oe=K(S({},Tu),{Transparent:"transparent",Filled:"filled"}),Su={Outlined:"outlined",OutlinedStrong:"outlined-strong",Filled:"filled",FilledStrong:"filled-strong"};var ls={Rounded:"rounded",Sharp:"sharp"},ke=K(S({},ls),{Pill:"pill"}),ds={readonly:!1,disabled:!1},Du=(()=>{class t{constructor(e){this._DEFAULTS=e;this.readonly=u(this._DEFAULTS.readonly,{transform:i=>M(i)}),this.disabled=A(this._DEFAULTS.disabled)}set _disabled(e){this.disabled.set(M(e))}get _readonlyHostAttribute(){return this.readonly()}get _disabledHostAttribute(){return this.disabled()}static{this.\u0275fac=function(i){Zn()}}static{this.\u0275dir=G({type:t,hostVars:6,hostBindings:function(i,n){i&2&&(Ge("readonly",n._readonlyHostAttribute)("disabled",n._disabledHostAttribute),te("ard-readonly",n._readonlyHostAttribute)("ard-disabled",n._disabledHostAttribute))},inputs:{readonly:[1,"readonly"],_disabled:[0,"disabled","_disabled"]}})}}return t})(),Ft=K(S({},ds),{tabIndex:0}),Wi=(()=>{class t extends Du{constructor(){super(...arguments);this.tabIndex=F(()=>this.disabled()?-1:this._tabIndex()),this._tabIndex=u(this._DEFAULTS.tabIndex,{alias:"tabIndex",transform:e=>Me(e,0)});this.focusEvent=ne({alias:"focus"}),this.blurEvent=ne({alias:"blur"});this.isFocused=A(!1)}focus(){this._focusableElement?.first?.nativeElement.focus()}focusFirst(){this.focus()}focusLast(){this._focusableElement?.last?.nativeElement.focus()}blur(){this._focusableElement?.forEach(e=>e.nativeElement.blur())}onFocus(e){this.isFocused.set(!0),this.focusEvent.emit(e)}onBlur(e){this.isFocused.set(!1),this.blurEvent.emit(e)}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=Qe(t)))(n||t)}})()}static{this.\u0275dir=G({type:t,viewQuery:function(i,n){if(i&1&&tr(Uc,5),i&2){let s;ir(s=nr())&&(n._focusableElement=s)}},inputs:{_tabIndex:[1,"tabIndex","_tabIndex"]},outputs:{focusEvent:"focus",blurEvent:"blur"},features:[ue]})}}return t})(),Dn=S({},Ft),ta=(()=>{class t extends Wi{constructor(){super(...arguments),this._shouldEmitTouched=!1;this.control=io(this),this.htmlId=u(Sn.TakeChance.id()),this._hasError=u(void 0,{transform:e=>M(e),alias:"hasError"}),this.hasError=F(()=>this._hasError()??(this.control.touched()&&this.control.invalid()))}registerOnTouched(e){this._onTouchedRegistered=e}registerOnChange(e){this._onChangeRegistered=e}setDisabledState(e){this.disabled.set(e)}onFocus(e){super.onFocus(e),this._shouldEmitTouched=!1}onBlur(e){this._shouldEmitTouched=!0,super.onBlur(e),setTimeout(()=>{this._shouldEmitTouched&&this._emitTouched()},0)}_emitTouched(){this._onTouchedRegistered?.()}ngOnInit(){this.control.init()}ngOnDestroy(){this.control.destroy()}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=Qe(t)))(n||t)}})()}static{this.\u0275dir=G({type:t,inputs:{htmlId:[1,"htmlId"],_hasError:[1,"hasError","_hasError"]},features:[ue]})}}return t})(),it=K(S({},Dn),{required:void 0}),ia=(()=>{class t extends ta{constructor(){super(...arguments),this._required=u(void 0,{transform:e=>M(e),alias:"required"}),this.required=F(()=>this._required()??!!(this.control.validators()?.includes(Je.required)||this.control.validators()?.includes(Je.requiredTrue))),this.isSuccess=u(!1,{transform:e=>M(e)})}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=Qe(t)))(n||t)}})()}static{this.\u0275dir=G({type:t,inputs:{_required:[1,"required","_required"],isSuccess:[1,"isSuccess"]},features:[ue]})}}return t})(),En={Left:"left",Right:"right"},An={Left:"left",Center:"center",Right:"right"},Eu={Start:"start",Center:"center",End:"end"},yn=class{constructor(r,e="",i=0){this.regex=r,this.replace=e,this.caretModif=i}apply(r,e,i){let n=r;if(n&&this.regex){let s=0;for(;n.match(this.regex);){if(s>999){console.error(this,new Error("Possible infinite loop in the above RegExpTransformer. Exited after 1000 iterations."));break}let c=n.length;n=n.replace(this.regex,this.replace);let p=n.length;i=i+(p-c),s++}}return{text:n,caretPos:i}}},Au=(t,r,e)=>({text:t.toUpperCase(),caretPos:e}),Fu=(t,r,e)=>({text:t.toLowerCase(),caretPos:e}),Iu=(t,r,e)=>{let i=[[/[^0-9-]/],[/(.+)-/,"$1"]],n={text:t,caretPos:e};for(let s of i){let[c,p,b]=s;n=new yn(c,p,b).apply(n.text,r,n.caretPos)}return n},Mu=(t,r,e)=>{let i=[[/[^0-9.-]/],[/(.+)-/,"$1"],[/\.(.*)\./,"$1."],[/^(-?)\./,"$10."]],n={text:t,caretPos:e};for(let s of i){let[c,p,b]=s;n=new yn(c,p,b).apply(n.text,r,n.caretPos)}return n},Yo={ToUpper:Au,ToLower:Fu,Integer:Iu,Float:Mu},Wr={AdjustOnInput:"adjust-on-input",AdjustOnBlur:"adjust-on-blur",Noop:"noop"},Kr=class{constructor(r){this._ardHostCmp=r,this.value=A(null),this.stringValue=F(()=>this.value()??"")}writeValue(r){return!or(r)&&!Ri(r)&&(console.warn(new Error(`ARD-WA0020: Trying to set <ard-input>'s value to "${r}" (of type ${typeof r}), expected string or null.`)),r=r?.toString?.()??String(r)),this._writeValue(r)}_writeValue(r){r=this._applyLengthTransformer(r);let e=this.value();return this.value.set(r),this._updateInputElement(),e!==r}rewriteValueAfterHostUpdate(){this._writeValue(this.value())}clear(){this.value.set(null),this._updateInputElement()}trim(){this.value.update(r=>r?.trim()??null),this._updateInputElement()}_updateInputElement(){let r=this._ardHostCmp.textInputEl()?.nativeElement;r&&(r.value=this.stringValue())}get caretPos(){return this._ardHostCmp.textInputEl()?.nativeElement.selectionEnd??this.stringValue.length}set caretPos(r){this._ardHostCmp.textInputEl()?.nativeElement.setSelectionRange(r,r)}_applyLengthTransformer(r){let e=this._ardHostCmp.maxLength();return!et(e)||!r||r.length<=e||(r=r.substring(0,e),this.caretPos=e),r}};var qr=class{constructor(r){this._ardHostCmp=r;this._value=A(null),this.value=this._value.asReadonly(),this.stringValue=F(()=>this._value()??""),this.numberValue=F(()=>this._value()===null?null:Number(this._value()))}setValue(r){let e=Yt(r)?String(r):r,i=this._ardHostCmp.decimalSeparator();e&&i&&i!=="."&&(e=e.split(i).join(".")),this._value.set(e),this._updateInputEl()}updateOnBlur(r){let e=this._value();Ri(e)||(e=this._applyStandardConstraints(e,r??this._ardHostCmp.minMaxBehavior()===Wr.AdjustOnBlur),this._ardHostCmp.fixedDecimalPlaces()&&(e=this._fixDecimalPlaces(e)),this.setValue(Number(e)))}_fixDecimalPlaces(r){let e=this._ardHostCmp.maxDecimalPlaces();if(!et(e)||e===1/0)return r;let i=Number(r);return isNaN(i)?r:i.toFixed(e)}_updateInputEl(){let r=this.stringValue(),e=this._ardHostCmp.decimalSeparator();e&&e!=="."&&(r=r.split(".").join(e));let i=this._ardHostCmp.inputEl()?.nativeElement;if(!i)return;let n=this.caretPos;i.value=r,this.caretPos=n}writeValue(r,e){return!Yt(r)&&!or(r)&&!Ri(r)&&(console.warn(new Error(`ARD-WA0070: Trying to set <ard-number-input>'s value to "${typeof r}", expected string, number, or null.`)),r=r?.toString?.()??String(r)),r=r===null?null:String(r),this._writeValue(r,e)}_writeValue(r,e){e&&(r=this._applyStandardConstraints(r,this._ardHostCmp.minMaxBehavior()===Wr.AdjustOnInput)),r===""&&(r=null);let i=this._value();return this.setValue(r),i!==r}rewriteValueAfterHostUpdate(){this._writeValue(this._value(),!1)}get caretPos(){return this._ardHostCmp.inputEl()?.nativeElement.selectionEnd??this.stringValue().length}set caretPos(r){this._ardHostCmp.inputEl()?.nativeElement?.setSelectionRange(r,r)}_applyStandardConstraints(r,e){return!r&&r!==0?"":(r=this._standardizeSeparator(r),r=this._removeDecimalPlaces(r),r=this._applyNumberConstraint(r),r=this._applyMaxDecimalPlaces(r),e&&(r=this._applyMinMaxConstraints(r)),r)}_standardizeSeparator(r){if(!r&&r!==0)return"";let e=this._ardHostCmp.decimalSeparator();return!e||e==="."?String(r):String(r).replaceAll(e,".")}_removeDecimalPlaces(r){return!r&&r!==0?"":this._ardHostCmp.allowFloat()?r:String(r).split(".")[0]}_applyNumberConstraint(r){if(!r&&r!==0)return"";let e=String(r),i=this.stringValue(),n=this._ardHostCmp.allowFloat()?Yo.Float:Yo.Integer,{text:s,caretPos:c}=n(e,i,this.caretPos);return this.caretPos=c,s}_applyMinMaxConstraints(r){if(!r)return"";let e=this._ardHostCmp.decimalSeparator(),i=r;e&&e!=="."&&(i=i.replaceAll(e,"."));let n=Number(i);return n>this._ardHostCmp.max()?this._ardHostCmp.max().toString():n<this._ardHostCmp.min()?this._ardHostCmp.min().toString():r}_applyMaxDecimalPlaces(r){if(!r&&r!==0)return"";let e=this._ardHostCmp.maxDecimalPlaces();if(!et(e)||e===1/0)return String(r);if(e<=0)return this._removeDecimalPlaces(r).toString();let i=String(r),n=i.indexOf(".");if(n===-1)return i;let s=n+1+e;if(i.length<=s)return i;let c=i.substring(0,s);return this.caretPos>c.length&&(this.caretPos=c.length),c}};var cs=K(S({},it),{appearance:Oe.Outlined,variant:ke.Rounded,compact:!1,placeholder:"",alignText:En.Left,clearable:!1,clearButtonTitle:"Clear",inputAttrs:{},maxLength:void 0,autoTrim:!1}),ku=(()=>{class t extends ia{constructor(){super(...arguments);this.textInputEl=De("textInput"),this.inputModel=new Kr(this),this._wasViewInit=!1,this.placeholder=u(this._DEFAULTS.placeholder),this.inputId=u(void 0),this.clearButtonTitle=u(this._DEFAULTS.clearButtonTitle),this.shouldDisplayPlaceholder=F(()=>!!this.placeholder()&&!this.inputModel.value());this.appearance=u(this._DEFAULTS.appearance),this.variant=u(this._DEFAULTS.variant),this.alignText=u(this._DEFAULTS.alignText),this.compact=u(this._DEFAULTS.compact,{transform:e=>M(e)}),this.ngClasses=F(()=>[`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`,`ard-text-align-${this.alignText()}`,this.compact()?"ard-compact":"",this.clearable()?"ard-clearable":""].join(" "));this.inputAttrs=u(this._DEFAULTS.inputAttrs);this.maxLength=u(this._DEFAULTS.maxLength,{transform:e=>Me(e,this._DEFAULTS.maxLength)}),this.maxLengthAsInt=F(()=>this.maxLength()??2147483647);this.clearable=u(this._DEFAULTS.clearable,{transform:e=>M(e)}),this.autoTrim=u(this._DEFAULTS.autoTrim,{transform:e=>M(e)});this._valueBeforeInit=null,this.valueChange=ne();this.inputEvent=ne({alias:"input"}),this.changeEvent=ne({alias:"change"}),this.clearEvent=ne({alias:"clear"}),this.shouldShowClearButton=F(()=>this.clearable()&&!this.disabled()&&!!this.inputModel.value())}ngAfterViewInit(){this._wasViewInit=!0,this._setInputAttributes(),this._valueBeforeInit&&(this.writeValue(this._valueBeforeInit),delete this._valueBeforeInit)}writeValue(e){this.inputModel.writeValue(e)}set value(e){if(!this._wasViewInit){this._valueBeforeInit=e;return}this.writeValue(e)}get value(){return this.inputModel.value()}onInput(e){this.inputModel.writeValue(e)&&this._emitInput()}_emitInput(){this._onChangeRegistered?.(this.value),this.inputEvent.emit(this.value),this.valueChange.emit(this.value)}onFocusMaster(e){this.onFocus(e)}onBlurMaster(e){this.onBlur(e),this.autoTrim()&&(this.inputModel.trim(),this._emitChange(),this._emitInput())}onChange(e){e.stopPropagation(),this._emitChange()}_emitChange(){this.changeEvent.emit(this.inputModel.value())}onClearButtonClick(e){e.stopPropagation(),this.inputModel.clear(),this._emitChange(),this._emitInput(),this.clearEvent.emit(e),this.focus()}onCopy(e){this.value&&(this.textInputEl()?.nativeElement.selectionStart===0&&this.textInputEl()?.nativeElement.selectionEnd===this.textInputEl()?.nativeElement.value.length||this.textInputEl()?.nativeElement.selectionStart===this.textInputEl()?.nativeElement.selectionEnd)&&(e.clipboardData?.setData("text/plain",this.value),e.preventDefault())}_setInputAttributes(){let e=this.textInputEl().nativeElement,i=S({type:"text",autocorrect:"off",autocapitalize:"off",autocomplete:"off",tabindex:String(this.tabIndex())},this.inputAttrs());for(let n of Object.keys(i))e.setAttribute(n,String(i[n]))}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=Qe(t)))(n||t)}})()}static{this.\u0275dir=G({type:t,viewQuery:function(i,n){i&1&&Ee(n.textInputEl,ns,5),i&2&&le()},inputs:{placeholder:[1,"placeholder"],inputId:[1,"inputId"],clearButtonTitle:[1,"clearButtonTitle"],appearance:[1,"appearance"],variant:[1,"variant"],alignText:[1,"alignText"],compact:[1,"compact"],inputAttrs:[1,"inputAttrs"],maxLength:[1,"maxLength"],clearable:[1,"clearable"],autoTrim:[1,"autoTrim"],value:"value"},outputs:{valueChange:"valueChange",inputEvent:"input",changeEvent:"change",clearEvent:"clear"},features:[ue]})}}return t})(),Pu=K(S({},cs),{suggValueFrom:"value",suggLabelFrom:"label",suggestionsLoadingText:"Loading...",charlist:void 0,charlistCaseInsensitive:!1,dropdownAppearance:void 0,dropdownVariant:void 0}),IC=new R("ard-autocomplete-input-defaults",{factory:()=>S({},Pu)});var Vu=K(S({},Ft),{appearance:Oe.Outlined,variant:ke.Rounded,compact:!1}),Ou=new R("ard-form-field-frame-defaults",{factory:()=>S({},Vu)});var $o=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(J(ve))}}static{this.\u0275dir=G({type:t,selectors:[["ng-template","ard-prefix-tmp",""]],standalone:!1})}}return t})(),zo=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(J(ve))}}static{this.\u0275dir=G({type:t,selectors:[["ng-template","ard-suffix-tmp",""]],standalone:!1})}}return t})(),Ru=(()=>{class t extends Wi{constructor(e){super(e),this.hasError=u(!1,{transform:i=>M(i)}),this.isSuccess=u(!1,{transform:i=>M(i)});this.appearance=u(Oe.Outlined),this.variant=u(ke.Rounded),this.compact=u(!1,{transform:i=>M(i)}),this._enableTransitions=sn(new Re().asObservable().pipe(Fi(!0),Sa(0))),this.ngClasses=F(()=>[`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`,this.compact()?"ard-compact":"",this.hasError()?"ard-has-error":"",this.isSuccess()?"ard-is-success":"",this.isFocused()&&!this.readonly()?"ard-focused":"ard-unfocused",this._enableTransitions()?"ard-enable-transitions":""].join(" "));this.prefixTemplateInput=u(void 0,{alias:"prefixTemplate"}),this.suffixTemplateInput=u(void 0,{alias:"suffixTemplate"}),this.prefixTemplate=Ie($o),this.suffixTemplate=Ie(zo)}set _setIsFocused(e){this.isFocused.set(e)}static{this.\u0275fac=function(i){return new(i||t)(J(Ou))}}static{this.\u0275cmp=h({type:t,selectors:[["ard-form-field-frame"]],contentQueries:function(i,n,s){i&1&&(he(s,n.prefixTemplate,$o,5),he(s,n.suffixTemplate,zo,5)),i&2&&le(2)},inputs:{hasError:[1,"hasError"],isSuccess:[1,"isSuccess"],_setIsFocused:[0,"isFocused","_setIsFocused"],appearance:[1,"appearance"],variant:[1,"variant"],compact:[1,"compact"],prefixTemplateInput:[1,"prefixTemplate","prefixTemplateInput"],suffixTemplateInput:[1,"suffixTemplate","suffixTemplateInput"]},standalone:!1,features:[ue],ngContentSelectors:Ve,decls:6,vars:3,consts:[[1,"ard-form-field-frame",3,"ngClass"],[1,"ard-form-field-overlay"],[1,"ard-form-field-prefix-container"],[1,"ard-form-field-content-container"],[1,"ard-form-field-suffix-container"],[3,"ngTemplateOutlet"]],template:function(i,n){if(i&1&&(j(),o(0,"div",0),y(1,"div",1),g(2,jc,2,1,"div",2),o(3,"div",3),L(4),a(),g(5,$c,2,1,"div",4),a()),i&2){let s,c;m("ngClass",n.ngClasses()),d(2),C(((s=n.prefixTemplateInput())!==null&&s!==void 0?s:n.prefixTemplate())?2:-1),d(3),C(((c=n.suffixTemplateInput())!==null&&c!==void 0?c:n.suffixTemplate())?5:-1)}},dependencies:[He,Pe],styles:[`@layer ard-ui{ard-form-field-frame{display:block}.ard-form-field-frame{position:relative}.ard-form-field-overlay{position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:1}}
`],encapsulation:2,changeDetection:0})}}return t})(),Lu=(()=>{class t extends Wi{constructor(){super(Ft)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["ard-clear-button"]],standalone:!1,features:[ue],decls:5,vars:1,consts:[["focusableElement",""],["type","button",1,"ard-clear-btn-wrapper",3,"tabindex"],[1,"ard-hitbox"],[1,"ard-focus-overlay"],["aria-hidden","true",1,"ard-clear-btn"]],template:function(i,n){i&1&&(o(0,"button",1,0),y(2,"div",2)(3,"div",3)(4,"div",4),a()),i&2&&m("tabindex",n.tabIndex())},encapsulation:2})}}return t})(),Bu={filterValue:"",appearance:os.Raised,variant:ss.Rounded,compact:!1},MC=new R("ard-dropdown-panel-defaults",{factory:()=>S({},Bu)});var Hu=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[ie]})}}return t})();var Uu=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[ie]})}}return t})();var Nu={Square:"square",Rectangle:"rectangle"};var ju=K(S({},it),{appearance:Oe.Outlined,variant:ke.Rounded,shape:Nu.Square,compact:!1,outputAsString:!1,transform:null,inputAttrs:{},autoFillParseFn:t=>t}),kC=new R("ard-digit-input-defaults",{factory:()=>S({},ju)});var Yu=S({},cs),$u=new R("ard-input-defaults",{factory:()=>S({},Yu)});var Wo=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(J(ve))}}static{this.\u0275dir=G({type:t,selectors:[["ng-template","ard-placeholder-tmp",""]],standalone:!1})}}return t})(),Ko=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(J(ve))}}static{this.\u0275dir=G({type:t,selectors:[["ng-template","ard-prefix-tmp",""]],standalone:!1})}}return t})(),qo=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(J(ve))}}static{this.\u0275dir=G({type:t,selectors:[["ng-template","ard-suffix-tmp",""]],standalone:!1})}}return t})(),It=(()=>{class t extends ku{constructor(e){super(e);this.prefixTemplate=Ie(Ko),this.suffixTemplate=Ie(qo);this.placeholderTemplate=Ie(Wo)}static{this.\u0275fac=function(i){return new(i||t)(J($u))}}static{this.\u0275cmp=h({type:t,selectors:[["ard-input"]],contentQueries:function(i,n,s){i&1&&(he(s,n.prefixTemplate,Ko,5),he(s,n.suffixTemplate,qo,5),he(s,n.placeholderTemplate,Wo,5)),i&2&&le(3)},standalone:!1,features:[We([{provide:oi,useExisting:Jt(()=>t),multi:!0},{provide:$i,useExisting:t}]),ue],decls:8,vars:19,consts:[["textInput","","focusableElement",""],["defaultPlaceholderTemplate",""],[3,"appearance","variant","compact","readonly","isFocused","hasError","isSuccess","prefixTemplate","suffixTemplate"],[1,"ard-input",3,"click","ngClass"],[1,"ard-input-container"],["type","text",3,"input","focus","blur","change","copy","readonly","disabled","maxLength"],[3,"title"],[3,"ngTemplateOutlet"],[1,"ard-placeholder"],[3,"click","title"]],template:function(i,n){if(i&1){let s=N();o(0,"ard-form-field-frame",2)(1,"div",3),_("click",function(){return T(s),w(n.focus())}),o(2,"div",4),g(3,Kc,3,1),o(4,"input",5,0),_("input",function(){T(s);let p=V(5);return w(n.onInput(p.value))})("focus",function(p){return T(s),w(n.onFocusMaster(p))})("blur",function(p){return T(s),w(n.onBlurMaster(p))})("change",function(p){return T(s),w(n.onChange(p))})("copy",function(p){return T(s),w(n.onCopy(p))}),a()(),g(7,qc,1,1,"ard-clear-button",6),a()()}if(i&2){let s,c;m("appearance",n.appearance())("variant",n.variant())("compact",n.compact())("readonly",n.readonly())("isFocused",n.isFocused())("hasError",n.hasError())("isSuccess",n.isSuccess())("prefixTemplate",(s=n.prefixTemplate())==null?null:s.template)("suffixTemplate",(c=n.suffixTemplate())==null?null:c.template),d(),te("ard-has-value",n.value),m("ngClass",n.ngClasses()),d(2),C(n.shouldDisplayPlaceholder()?3:-1),d(),m("readonly",n.readonly())("disabled",n.disabled())("maxLength",n.maxLengthAsInt()),Ge("id",n.inputId())("tabindex",n.tabIndex()),d(3),C(n.shouldShowClearButton()?7:-1)}},dependencies:[He,Pe,Lu,Ru],styles:[`@layer ard-ui{ard-input{display:block}.ard-placeholder{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;pointer-events:none}.ard-text-align-left input,.ard-text-align-left .ard-placeholder{text-align:left}.ard-text-align-center input,.ard-text-align-center .ard-placeholder{text-align:center}.ard-text-align-right input,.ard-text-align-right .ard-placeholder{text-align:right}}
`],encapsulation:2,changeDetection:0})}}return t})(),Mt=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[ie,Hu,Uu]})}}return t})(),zu=K(S({},it),{appearance:Oe.Outlined,variant:ke.Rounded,compact:!1,placeholder:"",revealable:!0,holdToReveal:!1,autoHideTimeoutMs:void 0,revealed:!1,inputAttrs:{}}),PC=new R("ard-password-input-defaults",{factory:()=>S({},zu)});var Wu={filled:!1,weight:400,grade:0,opticalSize:40,ariaLabel:""},Ku=new R("ard-icon-defaults",{factory:()=>S({},Wu)});var qu=(()=>{class t{transform(e){return e=e.trim().toLowerCase(),e=e.replace(/[ -]/g,"_"),e}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275pipe=er({name:"icon",type:t,pure:!0,standalone:!1})}}return t})(),Ne=(()=>{class t{constructor(){this._DEFAULTS=I(Ku),this.ariaLabel=u(""),this.icon=u(void 0),this.filled=u(!1,{transform:e=>M(e)}),this.weight=u(400,{transform:e=>Me(e,400)}),this.grade=u(0,{transform:e=>Me(e,0)}),this.opticalSize=u(40,{transform:e=>Me(e,40)}),this.fontVariationSettings=F(()=>{let e={FILL:et(this.filled())?Number(this.filled()):void 0,wght:this.weight(),GRAD:this.grade(),opsz:this.opticalSize()},i=Object.entries(e).filter(n=>et(n[1])).map(n=>`"${n[0]}" ${n[1]}`).flat();return i.length===0?"":["font-variation-settings: ",i.join(", ")].join("")}),this.contentWrapper=De("contentWrapperEl")}ngAfterViewInit(){!this.icon()&&!this.contentWrapper()?.nativeElement.innerText&&console.warn("ARD-FT9000: Using <ard-icon> without specifying the [icon] field.")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["ard-icon"]],viewQuery:function(i,n){i&1&&Ee(n.contentWrapper,ea,5),i&2&&le()},inputs:{ariaLabel:[1,"ariaLabel"],icon:[1,"icon"],filled:[1,"filled"],weight:[1,"weight"],grade:[1,"grade"],opticalSize:[1,"opticalSize"]},standalone:!1,ngContentSelectors:Ve,decls:6,vars:7,consts:[["contentWrapperEl",""],[1,"ard-icon","material-symbols-outlined"],[1,"ard-icon-content-wrapper"]],template:function(i,n){if(i&1&&(j(),o(0,"span",1),l(1),Xe(2,"icon"),a(),o(3,"div",2,0),L(5),a()),i&2){let s,c=V(4);be(n.fontVariationSettings()),Ge("aria-hidden",n.ariaLabel()!==void 0)("aria-label",n.ariaLabel()),d(),E(" ",wt(2,5,(s=n.icon())!==null&&s!==void 0?s:c.innerText),`
`)}},dependencies:[qu],styles:[`@layer ard-ui{ard-icon{font-variation-settings:"FILL" 0,"wght" 400,"GRAD" 0,"opsz" 48;font-size:1.5em;width:1em;height:1em;display:inline-block;-webkit-user-select:none;user-select:none;background-repeat:no-repeat;fill:currentColor;overflow:hidden;flex-shrink:0}ard-icon .ard-icon{font-variation-settings:inherit;font-size:inherit}ard-icon .ard-icon-content-wrapper{display:none}}
`],encapsulation:2,changeDetection:0})}}return t})();var Le=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[ie]})}}return t})();function zr(t,r){return r===void 0?!1:r.indexOf(t)!==-1}var Qt={byLabel:(t,r)=>{let e=r.label.toLocaleLowerCase(),i=t===e;return[i||zr(t,e),i]},byValue:(t,r)=>{let e=String(r.value).toLocaleLowerCase(),i=t===e;return[i||zr(t,e),i]},byGroup:(t,r)=>{let e=String(r.group).toLocaleLowerCase(),i=t===e;return[i||zr(t,e),i]},byLabelAndGroup:(t,r)=>{let e=Qt.byLabel(t,r);return e[0]?[!0,e[1]]:Qt.byGroup(t,r)},byLabelAndValue:(t,r)=>{let e=Qt.byLabel(t,r);return e[0]?[!0,e[1]]:Qt.byValue(t,r)},byLabelAndGroupAndValue:(t,r)=>{let e=Qt.byLabelAndValue(t,r);return e[0]?[!0,e[1]]:Qt.byGroup(t,r)}},Qu={Top:"top",Bottom:"bottom",Auto:"auto"},Gu=K(S({},it),{valueFrom:"value",labelFrom:"label",disabledFrom:"disabled",groupLabelFrom:"group",groupDisabledFrom:"disabled",childrenFrom:"children",searchFn:Qt.byLabel,clearButtonTitle:"Clear",noItemsFoundText:"No items found.",addCustomOptionText:"Add option",loadingPlaceholderText:"Loading...",placeholder:"",searchPlaceholder:"",dropdownPosition:Qu.Auto,inputAttrs:{},isLoading:!1,deferValueWrites:null,itemsAlreadyGrouped:!1,invertDisabled:!1,noGroupActions:!1,autoHighlightFirst:!1,autoFocus:!1,keepOpen:!1,hideSelected:!1,noBackspaceClear:!1,sortMultipleValues:!1,searchCaseSensitive:!1,keepSearchAfterSelect:!1,maxSelectedItems:1/0,itemDisplayLimit:1/0,compareWith:void 0,appearance:Oe.Outlined,variant:ke.Rounded,compact:!1,dropdownPanelWidth:void 0,dropdownPanelHeight:void 0,dropdownPanelMinWidth:"max-content",dropdownPanelMinHeight:void 0,dropdownPanelMaxWidth:void 0,dropdownPanelMaxHeight:void 0,dropdownAppearance:void 0,dropdownVariant:void 0,multiselectable:!1,clearable:!1,searchable:!1,addCustom:!1}),VC=new R("ard-select-defaults",{factory:()=>S({},Gu)});var Se={None:"none",Primary:"primary",Secondary:"secondary",Warning:"warn",Danger:"danger",Success:"success",Info:"info"},_t=K(S({},Se),{CurrentColor:"currentColor"}),na=K(S({},ds),{contentAlignment:En.Left,appearance:Su.Outlined,variant:ke.Rounded,color:Se.Primary,compact:!1}),OC=new R("ard-chip-defaults",{factory:()=>na});var Xu=K(S(S({},Ft),na),{deleteButtonTitle:"Delete"}),RC=new R("ard-deletable-chip-defaults",{factory:()=>S({},Xu)});var Fn=K(S({},Dn),{reverseSelected:!1}),Zu=(()=>{class t extends ta{constructor(){super(...arguments);this.selectEvent=ne({alias:"select"}),this.unselectEvent=ne({alias:"unselect"}),this.changeEvent=ne({alias:"change"});this.selected=A(!1),this.selectedChange=ne(),this.reverseSelected=u(!1,{transform:e=>M(e)}),this.selectedAccountingForReverse=F(()=>this.reverseSelected()?!this.selected():this.selected())}writeValue(e){this._selected=e}_emitChange(){this._onChangeRegistered?.(this.selected()),this.selected()?this.selectEvent.emit(null):this.unselectEvent.emit(null),this.selectedChange.emit(this.selected()),this.changeEvent.emit(this.selected())}set _selected(e){this.selected.set(M(e))}get _selectedHostAttribute(){return this.selectedAccountingForReverse()}toggleSelected(){this.selected.update(e=>!e),this._emitChange()}select(){this.selected.set(!0),this._emitChange()}unselect(){this.selected.set(!1),this._emitChange()}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=Qe(t)))(n||t)}})()}static{this.\u0275dir=G({type:t,hostVars:3,hostBindings:function(i,n){i&2&&(Ge("selected",n._selectedHostAttribute),te("ard-selected",n._selectedHostAttribute))},inputs:{_selected:[0,"selected","_selected"],reverseSelected:[1,"reverseSelected"]},outputs:{selectEvent:"select",unselectEvent:"unselect",changeEvent:"change",selectedChange:"selectedChange"},features:[ue]})}}return t})(),Ju=K(S(S({},Fn),na),{chipTitle:"Select",hideSelectionIcon:!1}),LC=new R("ard-selectable-chip-defaults",{factory:()=>S({},Ju)});var ps=K(S({},it),{compact:!1,multiple:!1,blockAfterUpload:!1}),em=K(S({},ps),{variant:ke.Rounded,color:Se.Primary}),BC=new R("ard-file-drop-area-defaults",{factory:()=>S({},em)});var us=(()=>{class t{constructor(e){this._DEFAULTS=e,this.wrapperClasses=u(""),this.type=u(this._DEFAULTS.type),this.ariaLabel=u("");this.appearance=u(this._DEFAULTS.appearance),this.color=u(this._DEFAULTS.color),this.lightColoring=u(this._DEFAULTS.lightColoring,{transform:i=>M(i)}),this.compact=u(this._DEFAULTS.compact,{transform:i=>M(i)}),this.disabled=u(this._DEFAULTS.disabled,{transform:i=>M(i)}),this.tabIndex=F(()=>this.disabled()?-1:this._tabIndex()),this._tabIndex=u(this._DEFAULTS.tabIndex,{alias:"tabIndex",transform:i=>Me(i,0)}),this.pointerEventsWhenDisabled=u(this._DEFAULTS.pointerEventsWhenDisabled,{transform:i=>M(i)})}static{this.\u0275fac=function(i){Zn()}}static{this.\u0275dir=G({type:t,inputs:{wrapperClasses:[1,"wrapperClasses"],type:[1,"type"],ariaLabel:[1,"ariaLabel"],appearance:[1,"appearance"],color:[1,"color"],lightColoring:[1,"lightColoring"],compact:[1,"compact"],disabled:[1,"disabled"],_tabIndex:[1,"tabIndex","_tabIndex"],pointerEventsWhenDisabled:[1,"pointerEventsWhenDisabled"]}})}}return t})(),tm={Button:"button",Submit:"submit",Reset:"reset"},zi={Transparent:"transparent",Raised:"raised",RaisedStrong:"raised-strong",Outlined:"outlined",OutlinedStrong:"outlined-strong",Flat:"flat"},Yi={Rounded:"rounded",Pill:"pill",Sharp:"sharp"},im={Standard:"standard",Small:"small"},ms={disabled:!1,tabIndex:0,color:Se.Primary,lightColoring:!1,compact:!1,type:tm.Button,pointerEventsWhenDisabled:!1},hs=K(S({},ms),{appearance:zi.Raised}),nm=K(S({},hs),{variant:Yi.Rounded,vertical:!1}),fs=new R("ard-button-defaults",{factory:()=>S({},nm)});var ra=(()=>{class t extends us{constructor(e){super(e),this._hostEl=I(_e),this._renderer=I(Tt);this.variant=u(this._DEFAULTS.variant),this.vertical=u(this._DEFAULTS.vertical,{transform:n=>M(n)}),this.ngClasses=F(()=>["ard-button",this.wrapperClasses(),`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`,`ard-color-${this.color()}`,this.lightColoring()?"ard-light-coloring":"",this.disabled()?"ard-disabled":"",this.compact()?"ard-compact":"",this.vertical()?"ard-button-vertical":"",this.pointerEventsWhenDisabled()?"ard-button-with-pointer-events-when-disabled":""].join(" "));let i=this._hostEl.nativeElement;i.tagName==="BUTTON"&&(ce(()=>{this._renderer.setProperty(i,"disabled",this.disabled())}),ce(()=>{this._renderer.setAttribute(i,"type",this.type())}))}handleClick(e){this.disabled()&&(e.preventDefault(),e.stopImmediatePropagation())}static{this.\u0275fac=function(i){return new(i||t)(J(fs))}}static{this.\u0275dir=G({type:t,selectors:[["button","ard-button",""],["a","ard-button",""]],hostVars:3,hostBindings:function(i,n){i&1&&_("click",function(c){return n.handleClick(c)}),i&2&&(Va("tabindex",n.tabIndex()),me(n.ngClasses()))},inputs:{variant:[1,"variant"],vertical:[1,"vertical"]},standalone:!1,features:[ue]})}}return t})(),nt=(()=>{class t extends us{constructor(e){super(e);this.focusEvent=ne({alias:"focus"}),this.blurEvent=ne({alias:"blur"});this.variant=u(this._DEFAULTS.variant),this.vertical=u(this._DEFAULTS.vertical,{transform:i=>M(i)}),this.ngClasses=F(()=>"")}static{this.\u0275fac=function(i){return new(i||t)(J(fs))}}static{this.\u0275cmp=h({type:t,selectors:[["ard-button"]],hostVars:2,hostBindings:function(i,n){i&2&&te("ard-button-with-pointer-events-when-disabled",n.pointerEventsWhenDisabled())},inputs:{variant:[1,"variant"],vertical:[1,"vertical"]},outputs:{focusEvent:"focus",blurEvent:"blur"},standalone:!1,features:[ue],ngContentSelectors:Ve,decls:3,vars:10,consts:[["buttonElement",""],["ard-button","",3,"focus","blur","type","appearance","color","disabled","compact","lightColoring","pointerEventsWhenDisabled","variant","vertical"]],template:function(i,n){if(i&1){let s=N();j(),o(0,"button",1,0),_("focus",function(p){return T(s),w(n.focusEvent.emit(p))})("blur",function(p){return T(s),w(n.blurEvent.emit(p))}),L(2),a()}i&2&&(m("type",n.type())("appearance",n.appearance())("color",n.color())("disabled",n.disabled())("compact",n.compact())("lightColoring",n.lightColoring())("pointerEventsWhenDisabled",n.pointerEventsWhenDisabled())("variant",n.variant())("vertical",n.vertical()),Ge("aria-label",n.ariaLabel()))},dependencies:[ra],styles:[`@layer ard-ui{ard-button{display:block}.ard-button{display:flex;align-items:center;position:relative;cursor:pointer}.ard-button.ard-button-align-left{flex-direction:row}.ard-button.ard-button-align-right{flex-direction:row-reverse}.ard-button.ard-button-vertical{flex-direction:column}}
`],encapsulation:2,changeDetection:0})}}return t})();var je=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[ie]})}}return t})();var rm=K(S({},ps),{appearance:Oe.Outlined,variant:ke.Rounded,color:Se.Primary,inputAttrs:{},placeholder:"",clearable:!1,clearButtonTitle:"Clear"}),HC=new R("ard-file-input-defaults",{factory:()=>S({},rm)});var gs={Days:"days",Months:"months",Years:"years"},am={Only:"only",Left:"left",Inner:"inner",Right:"right"};function om(t){return!!t&&typeof t=="object"&&"from"in t&&sr(t.from)&&"to"in t&&(Ri(t.to)||sr(t.to))}var sm=K(S({},it),{color:Se.Primary,activeView:gs.Days,activeYear:new Date().getFullYear(),activeMonth:new Date().getMonth(),firstWeekday:1,multipleYearPageChangeModifier:5,multipleYearOffset:2,multipleYearPageSize:24,staticHeight:!1,hideFloatingMonth:!1,autoFocus:!1,multiCalendarLocation:am.Only,min:null,max:null,filter:null,UTC:!1,daysViewHeaderDateFormat:"MMM yyyy",yearsViewHeaderDateFormat:"yyyy",monthsViewHeaderDateFormat:"yyyy",weekdayDateFormat:"EEEEE",weekdayTitleDateFormat:"EEEE",floatingMonthDateFormat:"LLL",floatingMonthTitleDateFormat:"LLLL",yearDateFormat:"yyyy",monthDateFormat:"MMM",dayDateFormat:"d"}),UC=new R("ard-calendar-defaults",{factory:()=>S({},sm)});var lm=new R("ard-icon-button-defaults",{factory:()=>S(S({},ms),Ft)});var vt=(()=>{class t extends Wi{constructor(e){super(e),this.wrapperClasses=u(""),this.type=u(this._DEFAULTS.type),this.ariaLabel=u("");this.color=u(this._DEFAULTS.color),this.lightColoring=u(this._DEFAULTS.lightColoring,{transform:i=>M(i)}),this.compact=u(this._DEFAULTS.compact,{transform:i=>M(i)}),this.pointerEventsWhenDisabled=u(this._DEFAULTS.pointerEventsWhenDisabled,{transform:i=>M(i)}),this.ngClasses=F(()=>["ard-appearance-transparent",`ard-color-${this.disabled()?Se.None:this.color()}`,this.lightColoring()?"ard-light-coloring":"",this.compact()?"ard-compact":""].join(" "))}static{this.\u0275fac=function(i){return new(i||t)(J(lm))}}static{this.\u0275cmp=h({type:t,selectors:[["ard-icon-button"]],hostVars:2,hostBindings:function(i,n){i&2&&te("ard-button-with-pointer-events-when-disabled",n.pointerEventsWhenDisabled())},inputs:{wrapperClasses:[1,"wrapperClasses"],type:[1,"type"],ariaLabel:[1,"ariaLabel"],color:[1,"color"],lightColoring:[1,"lightColoring"],compact:[1,"compact"],pointerEventsWhenDisabled:[1,"pointerEventsWhenDisabled"]},standalone:!1,features:[ue],ngContentSelectors:Ve,decls:2,vars:4,consts:[[1,"ard-icon-button",3,"focus","blur","type","ngClass","tabindex"]],template:function(i,n){i&1&&(j(),o(0,"button",0),_("focus",function(c){return n.focusEvent.emit(c)})("blur",function(c){return n.blurEvent.emit(c)}),L(1),a()),i&2&&(m("type",n.type())("ngClass",n.ngClasses())("tabindex",n.tabIndex()),Ge("aria-label",n.ariaLabel()))},dependencies:[He],styles:[`@layer ard-ui{ard-icon-button{display:block}.ard-icon-button{display:flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.ard-icon-button .ard-button-content{max-height:100%;display:flex;align-items:center;justify-content:center}}
`],encapsulation:2,changeDetection:0})}}return t})();var yt=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[ie]})}}return t})();var dm=t=>t instanceof Date?`${t.getDate().toString().padStart(2,"0")}/${(t.getMonth()+1).toString().padStart(2,"0")}/${t.getFullYear()}`:"",cm=t=>{if(om(t)){let r=`${t.from.getDate().toString().padStart(2,"0")}/${(t.from.getMonth()+1).toString().padStart(2,"0")}/${t.from.getFullYear()}`,e=t.to?`${t.to.getDate().toString().padStart(2,"0")}/${(t.to.getMonth()+1).toString().padStart(2,"0")}/${t.to.getFullYear()}`:"";return`${r} \u2013 ${e}`}return""},pm=(t,r)=>{let e=t.trim();if(!e.includes("/")&&!isNaN(Date.parse(e))){let s=new Date(e);return s.setHours(0,0,0,0),s}let i=e.split("/"),n=new Date().getFullYear();if(i.length===1){let s=parseInt(i[0],10);return isNaN(s)?null:new Date(s,0,1)}if(i.length===2){let s=parseInt(i[0],10),c=parseInt(i[1],10)-1;if(isNaN(s)||isNaN(c))return null;let p=new Date(n,c,s);return isNaN(p.getTime())?null:p}if(i.length===3){let s=parseInt(i[0],10),c=parseInt(i[1],10)-1,p=parseInt(i[2],10);if(isNaN(s)||isNaN(c)||isNaN(p))return null;let b=new Date(p,c,s);return isNaN(b.getTime())?null:b}return r},um={Allow:"allow",Adjust:"adjust"},mm=K(S({},it),{inputAttrs:{},placeholder:"",serializeFn:dm,rangeSerializeFn:cm,deserializeFn:pm,appearance:Oe.Outlined,variant:ke.Rounded,color:Se.Primary,compact:!1,dropdownAppearance:os.Outlined,dropdownVariant:ss.Rounded,minMaxStrategy:um.Adjust,startView:void 0,inputReadOnly:!1,calendarDisabled:!1,calendarHidden:!1,activeView:gs.Days,activeYear:new Date().getFullYear(),activeMonth:new Date().getMonth(),firstWeekday:1,multipleYearPageChangeModifier:5,numberOfCalendars:2,min:null,max:null,filter:null,UTC:!1,hideFloatingMonth:!1,calendarDaysViewHeaderDateFormat:"MMM yyyy",calendarYearsViewHeaderDateFormat:"yyyy",calendarMonthsViewHeaderDateFormat:"yyyy",calendarWeekdayDateFormat:"EEEEE",calendarWeekdayTitleDateFormat:"EEEE",calendarFloatingMonthDateFormat:"LLL",calendarFloatingMonthTitleDateFormat:"LLLL",calendarYearDateFormat:"yyyy",calendarMonthDateFormat:"MMM",calendarDayDateFormat:"d",acceptButtonText:"Accept",cancelButtonText:"Cancel"}),NC=new R("ard-date-input-defaults",{factory:()=>S({},mm)});var hm={NoChange:"nochange",Uppercase:"uppercase",Lowercase:"lowercase"},fm=K(S({},it),{appearance:Oe.Outlined,variant:ke.Rounded,compact:!1,placeholder:"",case:hm.NoChange,maxDigits:void 0,hideHash:!1,clearable:!1,clearButtonTitle:"Clear",inputAttrs:{}}),jC=new R("ard-hex-input-defaults",{factory:()=>S({},fm)});var gm=K(S({},it),{appearance:Oe.Outlined,variant:ke.Rounded,compact:!1,placeholder:"",alignText:An.Center,inputAttrs:{},min:0,max:1/0,minMaxBehavior:Wr.AdjustOnBlur,maxDecimalPlaces:1/0,fixedDecimalPlaces:!1,decimalSeparator:".",allowFloat:!1,noButtons:!1,stepSize:1,keepFocusOnQuickChangeButton:!0}),_m=new R("ard-number-input-defaults",{factory:()=>S({},gm)});var Qo=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(J(ve))}}static{this.\u0275dir=G({type:t,selectors:[["ng-template","ard-placeholder-tmp",""]],standalone:!1})}}return t})(),Cn=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(J(ve))}}static{this.\u0275dir=G({type:t,selectors:[["ng-template","ard-prefix-tmp",""]],standalone:!1})}}return t})(),bn=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(J(ve))}}static{this.\u0275dir=G({type:t,selectors:[["ng-template","ard-suffix-tmp",""]],standalone:!1})}}return t})(),Ye=(()=>{class t extends ia{constructor(e){super(e);this.inputEl=De("textInput"),this.inputModel=new qr(this),this._wasViewInit=!1,this.inputId=u();this.placeholder=u(this._DEFAULTS.placeholder),this.placeholderTemplate=Ie(Qo),this.shouldDisplayPlaceholder=F(()=>!!this.placeholder()&&!this.inputModel.stringValue());this.prefixTemplate=Ie(Cn),this.suffixTemplate=Ie(bn);this.appearance=u(this._DEFAULTS.appearance),this.variant=u(this._DEFAULTS.variant),this.alignText=u(this._DEFAULTS.alignText),this.compact=u(this._DEFAULTS.compact,{transform:i=>M(i)}),this.ngClasses=F(()=>[`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`,`ard-text-align-${this.alignText()}`,`ard-quick-change-${!this.noButtons()}`,this.compact()?"ard-compact":""].join(" ")),this.buttonVariant=F(()=>this.variant()===ke.Rounded?Yi.Rounded:this.variant()===ke.Pill?Yi.Pill:this.variant()===ke.Sharp?Yi.Sharp:Yi.Rounded),this.buttonAppearance=F(()=>this.appearance()===Oe.Outlined&&this.variant()!==ke.Pill?zi.Outlined:zi.Transparent);this.inputAttrs=u({});this._valueBeforeInit=null,this.valueChange=ne();this.inputEvent=ne({alias:"input"}),this.changeEvent=ne({alias:"change"}),this.clearEvent=ne({alias:"clear"}),this.quickChangeEvent=ne({alias:"quickChange"});this.min=u(this._DEFAULTS.min,{transform:i=>Me(i,this._DEFAULTS.min)}),this.max=u(this._DEFAULTS.max,{transform:i=>Me(i,this._DEFAULTS.max)}),this.minMaxBehavior=u(this._DEFAULTS.minMaxBehavior),this.maxDecimalPlaces=u(this._DEFAULTS.maxDecimalPlaces,{transform:i=>{let n=Me(i,this._DEFAULTS.maxDecimalPlaces);if(n<0)throw new Error(`ARD-FT0072a: Cannot set <ard-number-input>'s [maxDecimalPlaces] to a negative value, got "${n}".`);if(n%1!==0)throw new Error(`ARD-FT0072b: Cannot set <ard-number-input>'s [maxDecimalPlaces] to a non-integer value, got "${n}".`);return n}}),this.fixedDecimalPlaces=u(this._DEFAULTS.fixedDecimalPlaces,{transform:i=>M(i)}),this.decimalSeparator=u(this._DEFAULTS.decimalSeparator,{transform:i=>{if(typeof i!="string"||i.length!==1)throw new Error(`ARD-FT0073: <ard-number-input>'s [decimalSeparator] must be a single character, got "${i}".`);return i}}),this.allowFloat=u(this._DEFAULTS.allowFloat,{transform:i=>M(i)});this.noButtons=u(this._DEFAULTS.noButtons,{transform:i=>M(i)}),this.keepFocusOnQuickChangeButton=u(this._DEFAULTS.keepFocusOnQuickChangeButton,{transform:i=>M(i)}),this.stepSize=u(this._DEFAULTS.stepSize,{transform:i=>{let n=Me(i,1);if(n===0)throw new Error("ARD-FT0071a: Cannot set <ard-number-input>'s [stepSize] to 0.");if(n<0)throw new Error(`ARD-FT0071b: Cannot set <ard-number-input>'s [stepSize] to a negative value, got "${n}".`);return n}}),this._isQuickChangeButtonFocused=!1,this.canIncrement=F(()=>{let i=this.inputModel.numberValue();return!et(i)||i<this.max()}),this.canDecrement=F(()=>{let i=this.inputModel.numberValue();return!et(i)||i>this.min()}),ce(()=>{let i=this.allowFloat(),n=this.stepSize();if(!i&&n%1!==0)throw new Error(`ARD-FT0071c: <ard-number-input>'s [stepSize] must be an integer when [allowFloat] is false, got "${n}".`)}),ce(()=>{let i=this.decimalSeparator();this.inputModel.rewriteValueAfterHostUpdate()})}ngAfterViewInit(){this._setInputAttributes(),this._wasViewInit=!0,this._valueBeforeInit&&(this.writeValue(this._valueBeforeInit),delete this._valueBeforeInit)}writeValue(e){this.inputModel.writeValue(e,!1),!this.isFocused()&&this.inputModel.updateOnBlur(!0)}set value(e){if(typeof e=="number"&&(e=e.toString()),!this._wasViewInit){this._valueBeforeInit=e;return}this.writeValue(e)}onQuickChangeButtonClick(e,i){let n=this.inputModel.numberValue(),s=et(n);if(n||(n=0),e===1&&n>=this.max()&&s||e===-1&&n<=this.min()&&s)return;i&&i.stopPropagation();let c=n+this.stepSize()*e,p=(0,ct.roundToPrecision)(c,9);this.writeValue(p),this.quickChangeEvent.emit({direction:e,value:p}),this._emitChange(),this._emitTouched(),this._focusInputIfCantQuickChange()}_focusInputIfCantQuickChange(){this.keepFocusOnQuickChangeButton()||(!this.canDecrement()||!this.canIncrement())&&this.focus()}onQuickChangeButtonMouseup(e){this.keepFocusOnQuickChangeButton()&&(this._isQuickChangeButtonFocused=!0,setTimeout(()=>{this._isQuickChangeButtonFocused=!1},0))}onInput(e){this.inputModel.writeValue(e,!0)&&this._emitInput()}_emitInput(){this.inputEvent.emit(this.inputModel.numberValue()),this._emitChange()}onFocusMaster(e){this.onFocus(e)}onBlurMaster(e){this.onBlur(e),this.inputModel.updateOnBlur()}onChange(e){e.stopPropagation(),this._emitChange()}_emitChange(){let e=this.inputModel.numberValue();this.valueChange.emit(e),this.changeEvent.emit(e),this._onChangeRegistered?.(e)}onMouseup(){let e=window.getSelection();e&&e.type==="Range"||this._isQuickChangeButtonFocused||this.focus()}onCopy(e){this.value&&(this.inputEl()?.nativeElement.selectionStart===0&&this.inputEl()?.nativeElement.selectionEnd===this.inputEl()?.nativeElement.value.length||this.inputEl()?.nativeElement.selectionStart===this.inputEl()?.nativeElement.selectionEnd)&&(e.clipboardData?.setData("text/plain",String(this.value)),e.preventDefault())}_setInputAttributes(){let e=this.inputEl().nativeElement,i=S({type:"text",autocorrect:"off",autocapitalize:"off",autocomplete:"off",tabindex:String(this.tabIndex)},this.inputAttrs);for(let n of Object.keys(i))e.setAttribute(n,String(i[n]))}static{this.\u0275fac=function(i){return new(i||t)(J(_m))}}static{this.\u0275cmp=h({type:t,selectors:[["ard-number-input"]],contentQueries:function(i,n,s){i&1&&(he(s,n.placeholderTemplate,Qo,5),he(s,n.prefixTemplate,Cn,5),he(s,n.suffixTemplate,bn,5)),i&2&&le(3)},viewQuery:function(i,n){i&1&&Ee(n.inputEl,ns,5),i&2&&le()},inputs:{inputId:[1,"inputId"],placeholder:[1,"placeholder"],appearance:[1,"appearance"],variant:[1,"variant"],alignText:[1,"alignText"],compact:[1,"compact"],inputAttrs:[1,"inputAttrs"],value:"value",min:[1,"min"],max:[1,"max"],minMaxBehavior:[1,"minMaxBehavior"],maxDecimalPlaces:[1,"maxDecimalPlaces"],fixedDecimalPlaces:[1,"fixedDecimalPlaces"],decimalSeparator:[1,"decimalSeparator"],allowFloat:[1,"allowFloat"],noButtons:[1,"noButtons"],keepFocusOnQuickChangeButton:[1,"keepFocusOnQuickChangeButton"],stepSize:[1,"stepSize"]},outputs:{valueChange:"valueChange",inputEvent:"input",changeEvent:"change",clearEvent:"clear",quickChangeEvent:"quickChange"},standalone:!1,features:[We([{provide:oi,useExisting:Jt(()=>t),multi:!0},{provide:$i,useExisting:t}]),ue],decls:11,vars:16,consts:[["textInput","","focusableElement",""],["defaultPlaceholderTemplate",""],[1,"ard-number-input",3,"mousedown","mouseup","ngClass"],["color","none","pointerEventsWhenDisabled","","ardHoldSpaceKey","",1,"ard-quick-change-button","decrement",3,"variant","appearance","disabled","tabIndex"],[1,"ard-number-input-wrapper"],[1,"ard-number-input-prefix-container"],[1,"ard-input-container"],["type","text","inputmode","numeric",3,"input","focus","blur","change","mousedown","mouseup","copy","readonly","disabled"],[1,"ard-number-input-suffix-container"],["color","none","pointerEventsWhenDisabled","","ardHoldSpaceKey","",1,"ard-quick-change-button","increment",3,"variant","appearance","disabled","tabIndex"],["color","none","pointerEventsWhenDisabled","","ardHoldSpaceKey","",1,"ard-quick-change-button","decrement",3,"click","mouseup","ardHold","variant","appearance","disabled","tabIndex"],[3,"ngTemplateOutlet"],[1,"ard-placeholder"],["color","none","pointerEventsWhenDisabled","","ardHoldSpaceKey","",1,"ard-quick-change-button","increment",3,"click","mouseup","ardHold","variant","appearance","disabled","tabIndex"]],template:function(i,n){if(i&1){let s=N();o(0,"div",2),_("mousedown",function(p){return T(s),w(p.preventDefault())})("mouseup",function(){return T(s),w(n.onMouseup())}),g(1,Qc,2,4,"ard-button",3),o(2,"div",4),g(3,Xc,2,1,"div",5),o(4,"div",6),g(5,ep,3,1),o(6,"input",7,0),_("input",function(){T(s);let p=V(7);return w(n.onInput(p.value))})("focus",function(p){return T(s),w(n.onFocusMaster(p))})("blur",function(p){return T(s),w(n.onBlurMaster(p))})("change",function(p){return T(s),w(n.onChange(p))})("mousedown",function(p){return T(s),w(p.stopPropagation())})("mouseup",function(p){return T(s),w(p.stopPropagation())})("copy",function(p){return T(s),w(n.onCopy(p))}),a()(),g(9,ip,2,1,"div",8),a(),g(10,np,2,4,"ard-button",9),a()}i&2&&(te("ard-has-error",n.hasError())("ard-is-success",n.isSuccess())("ard-has-value",n.value),m("ngClass",n.ngClasses()),d(),C(n.noButtons()?-1:1),d(2),C(n.prefixTemplate()?3:-1),d(2),C(n.shouldDisplayPlaceholder()?5:-1),d(),m("readonly",n.readonly())("disabled",n.disabled()),Ge("id",n.inputId())("tabindex",n.tabIndex()),d(3),C(n.suffixTemplate()?9:-1),d(),C(n.noButtons()?-1:10))},dependencies:[He,Pe,ci,nt],styles:[`@layer ard-ui{ard-number-input{display:block}.ard-number-input{display:flex;max-width:100%}.ard-number-input .ard-placeholder{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;pointer-events:none}.ard-text-align-left input{text-align:left}.ard-text-align-left .ard-placeholder{justify-content:flex-start}.ard-text-align-center input{text-align:center}.ard-text-align-center .ard-placeholder{justify-content:center}.ard-text-align-right input{text-align:right}.ard-text-align-right .ard-placeholder{justify-content:flex-end}.ard-quick-change-button{-webkit-user-select:none;user-select:none;height:100%}}
`],encapsulation:2,changeDetection:0})}}return t})(),$e=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[ie,pi,je]})}}return t})(),vm=K(S({},hs),{size:im.Standard}),YC=new R("ard-fab-defaults",{factory:()=>S({},vm)});var ym=K(S({},Fn),{color:_t.Primary,unselectedColor:_t.None}),Cm=new R("ard-checkbox-defaults",{factory:()=>S({},ym)});var Go=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(J(ve))}}static{this.\u0275dir=G({type:t,selectors:[["ng-template","ard-checkbox-tmp",""]],standalone:!1})}}return t})(),Xo=(()=>{class t{constructor(e){this.template=e,this.checkboxTmp=u(void 0)}static{this.\u0275fac=function(i){return new(i||t)(J(ve))}}static{this.\u0275dir=G({type:t,selectors:[["ng-template","_ard-tmp-repository",""]],inputs:{checkboxTmp:[1,"checkboxTmp"]}})}}return t})(),tt={Unselected:"unselected",Indeterminate:"indeterminate",Selected:"selected"},In=(()=>{class t extends Zu{constructor(e){super(e),this._componentId="100",this._componentName="checkbox";this.color=u(this._DEFAULTS.color),this.unselectedColor=u(this._DEFAULTS.unselectedColor),this.ngClasses=F(()=>[`ard-color-${this.color()}`,`ard-unselected-color-${this.unselectedColor()}`,`ard-checkbox-${this.internalState()}`].join(" ")),this.internalState=dt(tt.Unselected,{alias:"state"}),this.state=F(()=>this.reverseSelected()?this.internalState()===tt.Unselected?tt.Selected:this.internalState()===tt.Selected?tt.Unselected:this.internalState():this.internalState()),this.State=tt;this.templateRepository=Ie(Xo),this.checkboxTemplate=Ie(Go),this.checkboxTemplateContext=F(()=>({$implicit:this.selectedAccountingForReverse(),selected:this.selectedAccountingForReverse(),internalSelected:this.selected(),state:this.state(),internalState:this.internalState()}))}set _selected(e){let i=M(e);this.selected.set(i),this.internalState.set(i?tt.Selected:tt.Unselected)}toggleState(){let e=tt.Unselected;this.internalState()===tt.Unselected&&(e=tt.Selected),this.internalState.set(e),this.selected.set(this.internalState()===tt.Selected),this._emitChange()}static{this.\u0275fac=function(i){return new(i||t)(J(Cm))}}static{this.\u0275cmp=h({type:t,selectors:[["ard-checkbox"]],contentQueries:function(i,n,s){i&1&&(he(s,n.templateRepository,Xo,5),he(s,n.checkboxTemplate,Go,5)),i&2&&le(2)},inputs:{color:[1,"color"],unselectedColor:[1,"unselectedColor"],internalState:[1,"state","internalState"]},outputs:{internalState:"stateChange"},standalone:!1,features:[We([{provide:oi,useExisting:Jt(()=>t),multi:!0}]),ue],decls:6,vars:6,consts:[["defaultCheckboxTemplate",""],["role","checkbox","type","button",1,"ard-checkbox",3,"click","focus","blur","id","ariaChecked","tabindex","ngClass"],[1,"ard-hitbox"],[1,"ard-focus-overlay"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"icon","filled"]],template:function(i,n){if(i&1){let s=N();o(0,"button",1),_("click",function(){return T(s),w(n.toggleState())})("focus",function(p){return T(s),w(n.onFocus(p))})("blur",function(p){return T(s),w(n.onBlur(p))}),y(1,"div",2)(2,"div",3),g(3,rp,1,2,"ng-template",null,0,re)(5,ap,0,0,"ng-template",4),a()}if(i&2){let s,c=V(4);m("id",n.htmlId())("ariaChecked",n.selectedAccountingForReverse())("tabindex",n.tabIndex())("ngClass",n.ngClasses()),d(5),m("ngTemplateOutlet",(s=(s=(s=n.templateRepository())==null||(s=s.checkboxTmp())==null?null:s.template)!==null&&s!==void 0?s:(s=n.checkboxTemplate())==null?null:s.template)!==null&&s!==void 0?s:c)("ngTemplateOutletContext",n.checkboxTemplateContext())}},dependencies:[He,Pe,Ne],styles:[`@layer ard-ui{ard-checkbox{display:block}.ard-checkbox{font-size:inherit}}
`],encapsulation:2,changeDetection:0})}}return t})(),Mn=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[ie,Le]})}}return t})(),bm=K(S({},Ft),{color:_t.Primary}),xm=new R("ard-radio-defaults",{factory:()=>S({},bm)});var xn=(()=>{class t extends Wi{constructor(e){super(e),this._changeDetector=I(Vi),this.htmlId=u(Sn.TakeChance.id());this.selectEvent=ne({alias:"select"}),this.unselectEvent=ne({alias:"unselect"}),this.changeEvent=ne({alias:"change"});this.selected=A(!1),this.selectedChange=ne(),this.value=u();this.color=u(this._DEFAULTS.color),this.ngClasses=F(()=>[`ard-color-${this.color()}`,`ard-radio-${this.selected()?"selected":"unselected"}`].join(" "));this.name=A(null)}_emitChange(){this.selected()?this.selectEvent.emit(null):this.unselectEvent.emit(null),this.selectedChange.emit(this.selected()),this.changeEvent.emit(this.selected())}set _selected(e){this.selected.set(M(e))}get _selectedHostAttribute(){return this.selected()}toggleSelected(){this.selected.update(e=>!e),this._emitChange()}select(){this.selected.set(!0),this._emitChange()}unselect(){this.selected.set(!1),this._emitChange()}onMousedown(){this.focus()}onMouseup(){this.focus(),this.selected.set(!0),this._emitChange()}markForCheck(){this._changeDetector.markForCheck()}static{this.\u0275fac=function(i){return new(i||t)(J(xm))}}static{this.\u0275cmp=h({type:t,selectors:[["ard-radio"]],hostVars:3,hostBindings:function(i,n){i&2&&(Ge("selected",n._selectedHostAttribute),te("ard-selected",n._selectedHostAttribute))},inputs:{htmlId:[1,"htmlId"],_selected:[0,"selected","_selected"],value:[1,"value"],color:[1,"color"]},outputs:{selectEvent:"select",unselectEvent:"unselect",changeEvent:"change",selectedChange:"selectedChange"},standalone:!1,features:[ue],ngContentSelectors:Ve,decls:11,vars:6,consts:[["focusableElement",""],["radio",""],["type","button",1,"ard-radio",3,"focus","blur","mousedown","mouseup","ngClass","tabindex"],[1,"ard-radio-circles"],[1,"ard-radio-outer-circle"],[1,"ard-radio-inner-circle"],[1,"ard-focus-overlay"],[1,"ard-hitbox"],[3,"for"],["type","radio",1,"ard-radio-input-element",3,"name","id","checked"]],template:function(i,n){if(i&1){let s=N();j(),o(0,"button",2,0),_("focus",function(p){return T(s),w(n.onFocus(p))})("blur",function(p){return T(s),w(n.onBlur(p))})("mousedown",function(){return T(s),w(n.onMousedown())})("mouseup",function(){return T(s),w(n.onMouseup())}),o(2,"div",3),y(3,"div",4)(4,"div",5)(5,"div",6)(6,"div",7),a(),o(7,"label",8),L(8),a()(),y(9,"input",9,1)}i&2&&(m("ngClass",n.ngClasses())("tabindex",n.tabIndex()),d(7),m("for",n.htmlId()),d(2),m("name",n.name())("id",n.htmlId())("checked",n.selected()))},dependencies:[He],styles:[`@layer ard-ui{ard-radio{display:block}.ard-radio{border:none;background:none}.ard-radio>label{pointer-events:none}ard-radio>.ard-radio-input-element{display:none}}
`],encapsulation:2,changeDetection:0})}}return t})(),_s=(()=>{class t extends ia{get _htmlIdHostAttribute(){return this.htmlId()}constructor(){super(it),this._radios=Ut(xn,{descendants:!0}),this.valueChange=ne(),this.changeEvent=ne({alias:"change"}),this.selected=dt(null);this.name=u(Sn.TakeChance.id());this._childEventSubs=[],this._isContentInit=!1,ce(()=>{this.name(),this._updateRadioButtonNames()}),ce(()=>{this.selected(),this._checkSelectedRadioButton()}),ce(()=>{let e=this._radios();if(e){setTimeout(()=>{this._updateRadioButtonNames()},0),this._destroyChildSubscriptions();for(let i of e)this._childEventSubs.push(i.blurEvent.subscribe(n=>{this._handleBlurEvents(n)})),this._childEventSubs.push(i.focusEvent.subscribe(n=>{this._handleFocusEvents(n)})),this._childEventSubs.push(i.selectedChange.subscribe(n=>{n&&this._handleChangeEvents(i)}))}})}get value(){return this.selected()?.value()}set value(e){this.writeValue(e)}writeValue(e){if(this.value!==e){if(!this._isContentInit){this._valueBeforeInit=e;return}this._findRadioByValue(e)}setTimeout(()=>{this._updateRadiosByValue()},0)}_findRadioByValue(e){this._radios&&this.selected.set(this._radios().find(i=>e===i.value())??null)}_updateRadiosByValue(){this._isContentInit&&this._radios().forEach(e=>{e.selected.set(this.value===e.value()),e.markForCheck()})}_checkSelectedRadioButton(){let e=this.selected();e&&!e.selected()&&(e.selected.set(!0),e.markForCheck())}_updateRadioButtonNames(){this._radios()&&this._radios().forEach(e=>{e.name.set(this.name()),e.markForCheck()})}_handleBlurEvents(e){this.onBlur(e)}_handleFocusEvents(e){this.onFocus(e)}_handleChangeEvents(e){this.writeValue(e.value()),this._emitChange()}_emitChange(){let e=this.value;this._onChangeRegistered?.(e),this.changeEvent.emit(e),this.valueChange.emit(e)}ngAfterContentInit(){this._isContentInit=!0,this._valueBeforeInit!==void 0&&this.writeValue(this._valueBeforeInit),setTimeout(()=>{this._updateRadioButtonNames()},0);for(let e of this._radios())this._childEventSubs.push(e.blurEvent.subscribe(i=>{this._handleBlurEvents(i)})),this._childEventSubs.push(e.focusEvent.subscribe(i=>{this._handleFocusEvents(i)})),this._childEventSubs.push(e.selectedChange.subscribe(i=>{i&&this._handleChangeEvents(e)}))}ngOnDestroy(){super.ngOnDestroy(),this._destroyChildSubscriptions()}_destroyChildSubscriptions(){for(let e of this._childEventSubs)e.unsubscribe();this._childEventSubs=[]}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["ard-radio-group"]],contentQueries:function(i,n,s){i&1&&he(s,n._radios,xn,5),i&2&&le()},hostAttrs:["role","radiogroup"],hostVars:5,hostBindings:function(i,n){i&2&&Ge("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null)("id",n._htmlIdHostAttribute)},inputs:{value:"value",selected:[1,"selected"],name:[1,"name"]},outputs:{valueChange:"valueChange",changeEvent:"change",selected:"selectedChange"},standalone:!1,features:[We([{provide:oi,useExisting:Jt(()=>t),multi:!0},{provide:$i,useExisting:t}]),ue],ngContentSelectors:Ve,decls:1,vars:0,template:function(i,n){i&1&&(j(),L(0))},styles:[`@layer ard-ui{ard-radio-group{display:block}}
`],encapsulation:2,changeDetection:0})}}return t})(),vs=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[ie]})}}return t})();var Tm=K(S({},it),{valueFrom:"value",labelFrom:"label",disabledFrom:"disabled",compareWith:void 0,multiselectable:!1,requireValue:!1,invertDisabled:!1,maxSelectedItems:void 0});var wm=K(S({},ke),{RoundedConnected:"rounded-connected",SharpConnected:"sharp-connected",PillConnected:"pill-connected"}),Sm=K(S({},Oe),{FilledStrong:"filled-strong",OutlinedStrong:"outlined-strong"}),Dm=K(S({},Tm),{appearance:Sm.Outlined,variant:wm.RoundedConnected,color:Se.Primary,align:An.Center,iconBased:!1,compact:!1,autoFocus:!1,uniformWidths:!1,itemsPerRow:1/0}),$C=new R("ard-segment-defaults",{factory:()=>S({},Dm)});var Em={Raised:"raised",Contained:"contained"},Am=K(S({},Fn),{color:Se.Primary,appearance:Em.Raised,icon:void 0,selectedIcon:void 0,unselectedIcon:void 0}),zC=new R("ard-slide-toggle-defaults",{factory:()=>S({},Am)});var Gt={Push:"push",Allow:"allow",Block:"block"},Zo=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(J(ve))}}static{this.\u0275dir=G({type:t,selectors:[["ng-template","ard-slider-tooltip-tmp",""]],standalone:!1})}}return t})(),ys={Always:"always",Auto:"auto",Never:"never"},Qr={Top:"top",Bottom:"bottom"},Fm=K(S({},Dn),{noTooltip:!1,showValueTicks:!1,formatTooltipFn:t=>t,min:0,max:100,step:1,shiftMultiplier:5,labelPosition:Qr.Bottom,labels:[],color:_t.Primary,compact:!1,tooltipPosition:Qr.Top,tooltipBehavior:ys.Auto,selectionBehavior:Gt.Allow,minimumDistance:0}),Cs=(()=>{class t extends ta{constructor(){super(...arguments),this.elementRef=De("track"),this.document=I(xe),this.renderer=I(Tt),this.overlay=I(hi),this.scrollStrategyOpts=I(gn),this.viewContainerRef=I(ft);this.min=u(this._DEFAULTS.min,{transform:e=>Me(e,this._DEFAULTS.min)}),this.max=u(this._DEFAULTS.max,{transform:e=>Me(e,this._DEFAULTS.max)}),this.step=u(this._DEFAULTS.step,{transform:e=>{let i=Me(e,this._DEFAULTS.step);if(i===0)throw new Error(`ARD-FT${this.componentId}1a: Cannot set <ard-${this.componentName}>'s [step] to 0.`);if(i<0)throw new Error(`ARD-FT${this.componentId}1b: Cannot set <ard-${this.componentName}>'s [step] to a negative value, got ${i}.`);return i}}),this.minMaxStepValueCleanup=ce(()=>{this.min(),this.max(),this.step(),an(()=>this.cleanupValueAfterMinMaxStepChange())}),this.minMaxErrorCheck=ce(()=>{let e=this.min(),i=this.max();if(e>=i)throw new Error(`ARD-FT${this.componentId}0: Cannot set <ard-${this.componentName}>'s [min] to a value greater than or equal to [max], got min=${e} and max=${i}.`)}),this.shiftMultiplier=u(this._DEFAULTS.shiftMultiplier,{transform:e=>Me(e,this._DEFAULTS.shiftMultiplier)}),this._stepSizeComputed=F(()=>this.step()/Math.abs(this.min()-this.max()));this.showValueTicks=u(this._DEFAULTS.showValueTicks,{transform:e=>M(e)}),this._tickArray=F(()=>{let e=[],i=0;for(;i<100;)e.push(i),i+=this._stepSizeComputed()*100,i=(0,ct.roundToPrecision)(i,6);return e.push(100),e.map(n=>`${n}%`)});this._transformLabelInput=e=>!et(e)||Array.isArray(e)&&e.length===0?[]:(typeof e=="string"&&(e=_r(e).map(Number)),et(e[0])&&typeof e[0]=="number"?e.map(i=>({label:i,value:i})):e),this.labelPosition=u(this._DEFAULTS.labelPosition),this.labels=u(this._transformLabelInput(this._DEFAULTS.labels),{transform:e=>this._transformLabelInput(e)}),this.labelObjects=F(()=>{let e=this.labels();return!et(e)||e.length===0?[]:e.map(i=>{let n=this._clampValue(i.value);return{label:String(i.label),positionPercent:`${this._valueToPercent(n)*100}%`}})});this.color=u(_t.Primary),this.compact=u(!1,{transform:e=>M(e)}),this.ngClasses=F(()=>[`ard-color-${this.color()}`,`ard-labels-${this.labelPosition()}`,`ard-tooltip-${this.tooltipPosition()}`,this.compact()?"ard-compact":""].join(" "));this.sliderTransition=F(()=>{let e=this._totalSteps(),i=20*(e+200)/(e+20)-80,n=(0,ct.roundToPrecision)(i,3);return n<0?"0":Math.min(80,n)+"ms"}),this._totalSteps=F(()=>(this.max()-this.min())/this.step()),this.valueChange=ne();this.noTooltip=u(this._DEFAULTS.noTooltip,{transform:e=>M(e)}),this.tooltipFormatFn=u(this._DEFAULTS.formatTooltipFn),this.tooltipTemplate=Ie(Zo),this.tooltipPosition=u(Qr.Top),this.tooltipBehavior=u(ys.Auto);this._grabbedHandleId=A(null),this._shouldCheckForMovement=!1,this._bodyHasClass=!1,this.isSliderHandleGrabbed=F(()=>!!this._grabbedHandleId()),this.grabbedHandleEffect=ce(()=>{this.isSliderHandleGrabbed()?this.renderer.addClass(this.document.body,"ard-body-slider-handle-grabbed"):this.renderer.removeClass(this.document.body,"ard-body-slider-handle-grabbed")}),this.handlePositionsPercent=F(()=>[this._handlePositions()[0]*100+"%",this._handlePositions()[1]*100+"%"])}set value(e){this.writeValue(e)}get value(){return this._value()}_offset(e,i,n=1){let s=this._stepSizeComputed()*(i?this.shiftMultiplier():1),c=this._handlePositions()[n-1]+s*e;c=this._clampPercentValue(c),this._setValueFromPercent(c)}_clampValue(e){return e=Math.min(e,this.max()),e=Math.max(e,this.min()),e-=this.min(),e=(0,ct.roundToMultiple)(e,this.step()),e+=this.min(),e}_valueToPercent(e){let i=Math.abs(this.min()-this.max());return(e-this.min())/i}_emitChange(){let e=this.value;this._onChangeRegistered?.(e),this.valueChange.emit(e)}onPointerDownOnHandle(e,i=1){this._grabbedHandleId.set(i),this._shouldCheckForMovement=!0,this._bodyHasClass||(this._bodyHasClass=!0,this.renderer.addClass(this.document.body,"ard-prevent-touch-actions"))}onPointerUp(){this._shouldCheckForMovement&&(this._grabbedHandleId.set(null),this._shouldCheckForMovement=!1,this._bodyHasClass&&(this._bodyHasClass=!1,this.renderer.removeClass(this.document.body,"ard-prevent-touch-actions")))}_setValueFromPercent(e,i=1){i&&this._handlePositions()[i-1]!==e&&(this._value.set(this._percentValueToValue(e,i)),this._emitChange())}_writeValueFromEvent(e,i){let n=this._getPercentValueFromEvent(e);this._setValueFromPercent(n,i)}_getElementRect(){return this.elementRef().nativeElement.getBoundingClientRect()}_clampPercentValue(e){return e=Math.min(e,1),e=Math.max(e,0),e=(0,ct.roundToMultiple)(e,this._stepSizeComputed()),e}_getPercentValueFromEvent(e){let i=this._getElementRect(),n;e instanceof MouseEvent?n=e.clientX:n=e.targetTouches[0].clientX;let s=(n-i.left)/i.width;return this._clampPercentValue(s)}onKeyPress(e){switch(e.code){case"ArrowLeft":case"ArrowDown":{this._decrement(e);return}case"ArrowRight":case"ArrowUp":{this._increment(e);return}case"PageDown":{this._decrement(e,!0);return}case"PageUp":{this._increment(e,!0);return}case"Home":{this._decrement(e,!0);return}case"End":{this._increment(e,!0);return}}}_decrement(e,i=!1){this._offset(-1,i||e.shiftKey)}_increment(e,i=!1){this._offset(1,i||e.shiftKey)}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=Qe(t)))(n||t)}})()}static{this.\u0275dir=G({type:t,contentQueries:function(i,n,s){i&1&&he(s,n.tooltipTemplate,Zo,5),i&2&&le()},viewQuery:function(i,n){i&1&&Ee(n.elementRef,op,5),i&2&&le()},hostBindings:function(i,n){i&1&&_("pointerup",function(){return n.onPointerUp()},!1,st)("touchend",function(){return n.onPointerUp()},!1,st)("keydown",function(c){return n.onKeyPress(c)})},inputs:{min:[1,"min"],max:[1,"max"],step:[1,"step"],shiftMultiplier:[1,"shiftMultiplier"],showValueTicks:[1,"showValueTicks"],labelPosition:[1,"labelPosition"],labels:[1,"labels"],color:[1,"color"],compact:[1,"compact"],value:"value",noTooltip:[1,"noTooltip"],tooltipFormatFn:[1,"tooltipFormatFn"],tooltipPosition:[1,"tooltipPosition"],tooltipBehavior:[1,"tooltipBehavior"]},outputs:{valueChange:"valueChange"},features:[ue]})}}return t})(),Im=S({},Fm),bs=new R("ard-slider-defaults",{factory:()=>S({},Im)});var kn=(()=>{class t extends Cs{constructor(e){super(e),this.componentId="106",this.componentName="range-slider",this._value=A({from:-Number.MIN_SAFE_INTEGER,to:Number.MIN_SAFE_INTEGER}),this.selectionBehavior=u(this._DEFAULTS.selectionBehavior),this.minimumDistance=u(this._DEFAULTS.minimumDistance,{transform:i=>Me(i,this._DEFAULTS.minimumDistance)});this._tooltipValue=F(()=>{let i=this._value(),n=this.tooltipFormatFn();return{from:String(n(i.from)),to:String(n(i.to))}}),this.tooltipContexts=F(()=>({from:{value:this._tooltipValue().from,$implicit:this._tooltipValue().from},to:{value:this._tooltipValue().to,$implicit:this._tooltipValue().to}}));this.trackOverlayLeft=F(()=>Math.min(...this._handlePositions())*100+"%"),this.trackOverlayWidth=F(()=>Math.abs(this._handlePositions()[0]-this._handlePositions()[1])*100+"%"),this._handlePositions=F(()=>{let i=Math.abs(this.min()-this.max()),n=this._value(),s=(n.from-this.min())/i,c=(n.to-this.min())/i;return[s,c]});this.currentHandle=A(null)}_isValidObject(e){return $a(e)&&Yt(e.from)&&Yt(e.to)}_isValidTuple(e){return Array.isArray(e)&&Yt(e[0])&&Yt(e[1])&&e.length===2}_normalizeSliderRange(e){return e.from<=e.to?e:{from:e.to,to:e.from}}writeValue(e){if(!this._isValidObject(e)&&!this._isValidTuple(e)){this.reset();return}let i=-Number.MIN_SAFE_INTEGER,n=Number.MIN_SAFE_INTEGER;this._isValidObject(e)?(i=e.from,n=e.to):this._isValidTuple(e)&&(i=e[0],n=e[1]);let s=this._clampValue(i),c=this._clampValue(n),p=this._normalizeSliderRange({from:s,to:c});p.from===this.value.from&&p.to===this.value.to||this._value.set(p)}get value(){return this._normalizeSliderRange(this._value())}set value(e){this.writeValue(e)}cleanupValueAfterMinMaxStepChange(){let e=this._value();this.writeValue(e);let i=this._value();(e.from!==i.from||e.to!==i.to)&&this._emitChange()}reset(){this._value.set({from:-this.min(),to:this.max()})}onTrackHitboxPointerDown(e){this._writeValueFromEvent(e),this.onPointerDownOnHandle(e)}onPointerMove(e){this._shouldCheckForMovement&&(this._bodyHasClass||(this._bodyHasClass=!0,this.renderer.addClass(this.document.body,"ard-prevent-touch-actions")),this._writeValueFromEvent(e,this._grabbedHandleId()))}_percentValueToValue(e,i){let n=Math.abs(this.min()-this.max()),s=e*n+this.min();s=(0,ct.roundToPrecision)(s,9);let c=this.step()*this.minimumDistance(),p=this._value(),b={from:p.from,to:p.to};return i===1?(s>=p.to-c&&(this.selectionBehavior()===Gt.Block?s=p.to-c:this.selectionBehavior()===Gt.Push&&(b.to=s+c)),b.from=s):(s<=p.from+c&&(this.selectionBehavior()===Gt.Block?s=p.from+c:this.selectionBehavior()===Gt.Push&&(b.from=s-c)),b.to=s),b}onHandleFocus(e,i){this.onFocus(e),this.currentHandle.set(i)}onBlur(e){super.onBlur(e),this.currentHandle.set(null)}static{this.\u0275fac=function(i){return new(i||t)(J(bs))}}static{this.\u0275cmp=h({type:t,selectors:[["ard-range-slider"]],hostBindings:function(i,n){i&1&&_("mousemove",function(c){return n.onPointerMove(c)},!1,st)("touchmove",function(c){return n.onPointerMove(c)},!1,st)},inputs:{selectionBehavior:[1,"selectionBehavior"],minimumDistance:[1,"minimumDistance"]},standalone:!1,features:[ue],decls:21,vars:30,consts:[["track",""],["focusableElement",""],["handleThumbBase",""],["defaultTooltipTemplate",""],[1,"ard-range-slider-container-master",3,"ngClass"],[1,"ard-slider-container"],[1,"ard-slider-track",3,"pointerdown"],[1,"ard-hitbox"],[1,"ard-slider-track-overlay","ard-slider-track-inactive"],[1,"ard-slider-track-overlay","ard-slider-track-active"],[1,"ard-value-tick-container"],["type","button",1,"ard-slider-handle",3,"pointerdown","focus","blur","tabindex"],[1,"ard-focus-overlay"],[1,"ard-slider-tooltip-wrapper",3,"ard-tooltip-always","style"],[1,"ard-slider-label-container"],[1,"ard-value-tick",3,"style"],[1,"ard-value-tick"],[1,"ard-slider-tooltip-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ard-slider-tooltip"],[1,"ard-slider-label",3,"style"],[1,"ard-slider-label"],[1,"ard-slider-thumb"]],template:function(i,n){if(i&1){let s=N();o(0,"div",4)(1,"div",5)(2,"div",6,0),_("pointerdown",function(p){return T(s),w(n.onTrackHitboxPointerDown(p))}),y(4,"div",7)(5,"div",8)(6,"div",9),g(7,dp,3,0,"div",10),a(),o(8,"button",11,1),_("pointerdown",function(p){return T(s),w(n.onPointerDownOnHandle(p,1))})("focus",function(p){return T(s),w(n.onHandleFocus(p,1))})("blur",function(p){return T(s),w(n.onBlur(p))}),y(10,"div",12)(11,"div",7),a(),g(12,up,4,8,"div",13),o(13,"button",11,1),_("pointerdown",function(p){return T(s),w(n.onPointerDownOnHandle(p,2))})("focus",function(p){return T(s),w(n.onHandleFocus(p,2))})("blur",function(p){return T(s),w(n.onBlur(p))}),y(15,"div",12)(16,"div",7),a(),g(17,fp,4,8,"div",13),a(),g(18,_p,3,0,"div",14),a(),g(19,vp,1,0,"ng-template",null,2,re)}i&2&&(be(fe(21,rs,n.sliderTransition())),te("ard-slider-handle-grabbed",n.isSliderHandleGrabbed()),m("ngClass",n.ngClasses()),d(6),be(we(23,sp,n.trackOverlayLeft(),n.trackOverlayWidth())),d(),C(n.showValueTicks()?7:-1),d(),be(fe(26,pt,n.handlePositionsPercent()[0])),te("ard-grabbed",n.isSliderHandleGrabbed()&&n.currentHandle()===1),m("tabindex",n.tabIndex()),d(4),C(n.tooltipBehavior()!=="never"?12:-1),d(),be(fe(28,pt,n.handlePositionsPercent()[1])),te("ard-grabbed",n.isSliderHandleGrabbed()&&n.currentHandle()===2),m("tabindex",n.tabIndex()),d(4),C(n.tooltipBehavior()!=="never"?17:-1),d(),C(n.labelObjects().length>0?18:-1))},dependencies:[He,Pe],styles:[`@layer ard-ui{body.ard-prevent-touch-actions,body.ard-prevent-touch-actions *{touch-action:none}ard-range-slider{display:block}.ard-range-slider-container-master{display:flex;flex-direction:column}.ard-range-slider-container-master.ard-labels-top{flex-direction:column-reverse}.ard-range-slider-container-master .ard-slider-tooltip-wrapper{position:absolute;transform:translate(-50%);pointer-events:none}.ard-range-slider-container-master.ard-tooltip-top .ard-slider-tooltip-wrapper{bottom:100%}.ard-range-slider-container-master.ard-tooltip-bottom .ard-slider-tooltip-wrapper{top:100%}.ard-range-slider-container-master .ard-slider-handle{position:absolute;left:0;transform:translate(-50%)}.ard-range-slider-container-master .ard-slider-tooltip,.ard-range-slider-container-master .ard-slider-track,.ard-range-slider-container-master .ard-value-tick-container{position:relative}.ard-range-slider-container-master .ard-value-tick{position:absolute}.ard-range-slider-container-master .ard-slider-label-container{position:relative;width:100%;height:1em}.ard-range-slider-container-master .ard-slider-label{position:absolute;line-height:1em}}
`],encapsulation:2,changeDetection:0})}}return t})(),Pn=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[ie]})}}return t})(),vi=(()=>{class t extends Cs{constructor(e){super(e),this.componentId="105",this.componentName="slider";this._value=A(0);this._tooltipValue=F(()=>{let i=this._value(),n=this.tooltipFormatFn();return String(n?.(i)??i)}),this.tooltipContext=F(()=>({value:this._tooltipValue(),$implicit:this._tooltipValue()})),this._handlePositions=F(()=>{let i=Math.abs(this.min()-this.max()),n=(this._value()-this.min())/i;return[n,n]})}writeValue(e){if(e=Number(e),isNaN(e)){this.reset();return}e=this._clampValue(e),this._value.set(e)}cleanupValueAfterMinMaxStepChange(){let e=this._value();this.writeValue(this._value());let i=this._value();e!==i&&this._emitChange()}reset(){this._value.set(0)}increment(e=1){this._offset(e,!1)}decrement(e=1){this._offset(-e,!1)}onTrackHitboxPointerDown(e){this._writeValueFromEvent(e),this.onPointerDownOnHandle(e)}onPointerMove(e){this._shouldCheckForMovement&&this._writeValueFromEvent(e)}_percentValueToValue(e){let i=Math.abs(this.min()-this.max()),n=e*i+this.min();return(0,ct.roundToPrecision)(n,9)}static{this.\u0275fac=function(i){return new(i||t)(J(bs))}}static{this.\u0275cmp=h({type:t,selectors:[["ard-slider"]],hostBindings:function(i,n){i&1&&_("mousemove",function(c){return n.onPointerMove(c)},!1,st)("touchmove",function(c){return n.onPointerMove(c)},!1,st)},standalone:!1,features:[We([{provide:oi,useExisting:Jt(()=>t),multi:!0}]),ue],decls:14,vars:21,consts:[["track",""],["focusableElement",""],["defaultTooltipTemplate",""],[1,"ard-slider-container-master",3,"ngClass"],[1,"ard-slider-container"],[1,"ard-slider-track",3,"pointerdown"],[1,"ard-hitbox"],[1,"ard-slider-track-overlay","ard-slider-track-inactive"],[1,"ard-slider-track-overlay","ard-slider-track-active"],[1,"ard-value-tick-container"],["type","button",1,"ard-slider-handle",3,"pointerdown","touchstart","focus","blur","tabindex"],[1,"ard-focus-overlay"],[1,"ard-slider-tooltip-wrapper",3,"ard-tooltip-always","style"],[1,"ard-slider-label-container"],[1,"ard-value-tick",3,"style"],[1,"ard-value-tick"],[1,"ard-slider-tooltip-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ard-slider-tooltip"],[1,"ard-slider-label",3,"style"],[1,"ard-slider-label"]],template:function(i,n){if(i&1){let s=N();o(0,"div",3)(1,"div",4)(2,"div",5,0),_("pointerdown",function(p){return T(s),w(n.onTrackHitboxPointerDown(p))}),y(4,"div",6)(5,"div",7)(6,"div",8),g(7,bp,3,0,"div",9),a(),o(8,"button",10,1),_("pointerdown",function(p){return T(s),w(n.onPointerDownOnHandle(p))})("touchstart",function(p){return T(s),w(n.onPointerDownOnHandle(p))})("focus",function(p){return T(s),w(n.onFocus(p))})("blur",function(p){return T(s),w(n.onBlur(p))}),y(10,"div",11)(11,"div",6),a(),g(12,wp,4,8,"div",12),a(),g(13,Dp,3,0,"div",13),a()}i&2&&(be(fe(15,rs,n.sliderTransition())),te("ard-slider-handle-grabbed",n.isSliderHandleGrabbed()),m("ngClass",n.ngClasses()),d(6),be(fe(17,yp,n.handlePositionsPercent()[0])),d(),C(n.showValueTicks()?7:-1),d(),be(fe(19,pt,n.handlePositionsPercent()[0])),te("ard-grabbed",n.isSliderHandleGrabbed()),m("tabindex",n.tabIndex()),d(4),C(n.tooltipBehavior()!=="never"?12:-1),d(),C(n.labelObjects().length>0?13:-1))},dependencies:[He,Pe],styles:[`@layer ard-ui{body.ard-prevent-touch-actions,body.ard-prevent-touch-actions *{touch-action:none}ard-slider{display:block}.ard-slider-container-master{display:flex;flex-direction:column}.ard-slider-container-master.ard-labels-top{flex-direction:column-reverse}.ard-slider-container-master .ard-slider-tooltip-wrapper{position:absolute;transform:translate(-50%);pointer-events:none}.ard-slider-container-master.ard-tooltip-top .ard-slider-tooltip-wrapper{bottom:100%}.ard-slider-container-master.ard-tooltip-bottom .ard-slider-tooltip-wrapper{top:100%}.ard-slider-container-master .ard-slider-handle{position:absolute;left:0;transform:translate(-50%)}.ard-slider-container-master .ard-slider-tooltip,.ard-slider-container-master .ard-slider-track,.ard-slider-container-master .ard-value-tick-container{position:relative}.ard-slider-container-master .ard-value-tick{position:absolute}.ard-slider-container-master .ard-slider-label-container{position:relative;width:100%;height:1em}.ard-slider-container-master .ard-slider-label{position:absolute;line-height:1em}.ard-disabled .ard-slider-container-master,.ard-disabled .ard-range-slider-container-master{pointer-events:none;opacity:60%}}
`],encapsulation:2,changeDetection:0})}}return t})(),yi=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[ie,To]})}}return t})(),Mm={None:"none",Half:"half",Filled:"filled"},Vn=K(S({},_t),{Gold:"gold"}),km=K(S({},it),{color:Vn.Gold,max:5}),WC=new R("ard-rating-input-defaults",{factory:()=>S({},km)});var Pm={Noop:"noop",Default:"default"},Vm=K(S({},Fn),{clickStrategy:Pm.Default,color:Vn.Gold}),KC=new R("ard-star-button-defaults",{factory:()=>S({},Vm)});var Om={color:Vn.Gold,filled:Mm.None},qC=new R("ard-star-defaults",{factory:()=>S({},Om)});var Rm={LeftClumped:"left-clumped",LeftSplit:"left-split",RightSplit:"right-split",RightClumped:"right-clumped"},Lm=K(S({},Dn),{valueFrom:"value",labelFrom:"label",disabledFrom:"disabled",compareWith:null,invertDisabled:!1,maxSelectedItems:1/0,color:Se.Primary,align:Rm.LeftClumped,compact:!1}),QC=new R("ard-checkbox-list-defaults",{factory:()=>S({},Lm)});var Bm={Small:"small",Medium:"medium",Large:"large"},Hm={AboveBefore:"above-before",AboveAfter:"above-after",BelowBefore:"below-before",BelowAfter:"below-after",Before:"before",After:"after",Above:"above",Below:"below"},Um={color:Se.Primary,variant:ke.Rounded,size:Bm.Medium,position:Hm.AboveAfter,overlap:!1},GC=new R("ard-badge-defaults",{factory:()=>S({},Um)});var Nm={Default:"default",Auto:"auto"};var jm={Sharp:"sharp",Pill:"pill"},xs={Determinate:"determinate",Indeterminate:"indeterminate",Buffer:"buffer",Query:"query"},Ym={value:0,bufferValue:0,color:_t.Primary,variant:jm.Pill,size:Nm.Default,mode:xs.Determinate,hideValue:!1},XC=new R("ard-progress-bar-defaults",{factory:()=>S({},Ym)});var $m={Transparent:"transparent",Colorless:"colorless",Colored:"colored"},zm={Full:"full",Ring:"ring"},Wm={value:0,max:100,color:_t.Primary,appearance:$m.Transparent,variant:zm.Full,hideValue:!1,reverse:!1},ZC=new R("ard-progress-circle-defaults",{factory:()=>S({},Wm)});var Km={color:_t.Primary},qm=new R("ard-spinner-defaults",{factory:()=>S({},Km)});var On=(()=>{class t{constructor(){this._DEFAULTS=I(qm);this.color=u(this._DEFAULTS.color),this.ngClasses=F(()=>[`ard-color-${this.color()}`].join(" "))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["ard-spinner"]],inputs:{color:[1,"color"]},standalone:!1,decls:2,vars:1,consts:[["viewBox","0 0 100 100","xmlns","http://www.w3.org/2000/svg",1,"ard-spinner",3,"ngClass"],["cx","50","cy","50","r","20",1,"ard-spinner-circle"]],template:function(i,n){i&1&&(en(),o(0,"svg",0),y(1,"circle",1),a()),i&2&&m("ngClass",n.ngClasses())},dependencies:[He],styles:[`@layer ard-ui{ard-spinner{display:block}.ard-spinner{animation:rotator var(--ard-_spinner-duration) linear infinite;pointer-events:none}.ard-spinner-circle{stroke-dasharray:1,200;stroke-dashoffset:0;animation:dash var(--ard-_spinner-duration) ease-in-out infinite 0s;stroke-linecap:round;fill:none;stroke-width:3}}@keyframes rotator{to{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:75,200;stroke-dashoffset:-35}to{stroke-dasharray:75,200;stroke-dashoffset:-124}}
`],encapsulation:2,changeDetection:0})}}return t})(),Rn=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[ie]})}}return t})(),Qm={defaultHintAlign:En.Left,reserveHintLine:!1,labelRequiredText:"*",labelOptionalText:"(optional)",autoErrorOnlyFirstError:!0},aa=new R("ard-form-field-defaults",{factory:()=>S({},Qm)});var Ts=new R("ard-error-map",{factory:()=>({$fallback:"Provide error messages using provideErrorMap"})});function ws(t){return{provide:Ts,useValue:t}}var Gr=(()=>{class t{constructor(){this.left=u(!1,{transform:e=>M(e)}),this.right=u(!1,{transform:e=>M(e)}),ce(()=>{this.left()&&this.right()&&console.error("ARD-NF5140: Cannot align a form field error to both left and right.")})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=G({type:t,selectors:[["","ard-error",""]],hostVars:8,hostBindings:function(i,n){i&2&&te("ard-error",!0)("ard-error-default",!n.left()&&!n.right())("ard-error-left",n.left()&&!n.right())("ard-error-right",!n.left()&&n.right())},inputs:{left:[1,"left"],right:[1,"right"]}})}}return t})(),Ki=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["ard-error"]],standalone:!1,features:[rn([Gr])],ngContentSelectors:Ve,decls:1,vars:0,template:function(i,n){i&1&&(j(),L(0))},encapsulation:2})}}return t})(),Tn=(()=>{class t{constructor(){this._errorMap=I(Ts),this._DEFAULTS=I(aa),this.control=u.required(),this.onlyFirstError=u(this._DEFAULTS.autoErrorOnlyFirstError,{transform:e=>M(e)}),this.errorMessages=A([],{equal:(e,i)=>e.length===i.length&&e.every((n,s)=>n===i[s])}),this.hasError=F(()=>this.errorMessages().length>0),this.left=u(!1,{transform:e=>M(e)}),this.right=u(!1,{transform:e=>M(e)}),ce(()=>{let e=this.control();this._eventsSub=e.events.pipe(ot(i=>"touched"in i||"status"in i),lt(()=>{let i=e.errors;if(!i||!e.touched)return[];if(typeof i=="object"&&Object.keys(i).length===0)return[];let n=this.onlyFirstError(),s=[];for(let c in this._errorMap)if(c in i){let p=this._errorMap[c];if(typeof p=="function"){let b=p(i[c]);if(n)return[b];s.push(b)}else if(p!==void 0){if(n)return[p];s.push(p)}}return s.length===0?[this._errorMap.$fallback||JSON.stringify(i)]:s})).subscribe(i=>{this.errorMessages.set(i)})}),ce(()=>{this.left()&&this.right()&&console.error("ARD-NF5150: Cannot align a form field auto-error to both left and right.")})}ngOnDestroy(){this._eventsSub?.unsubscribe()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["ard-auto-error"]],hostVars:12,hostBindings:function(i,n){i&2&&te("ard-auto-error",!0)("ard-auto-error-default",!n.left()&&!n.right())("ard-auto-error-left",n.left()&&!n.right())("ard-auto-error-right",!n.left()&&n.right())("ard-auto-error__no-errors",n.errorMessages().length===0)("ard-auto-error__has-errors",n.errorMessages().length>0)},inputs:{control:[1,"control"],onlyFirstError:[1,"onlyFirstError"],left:[1,"left"],right:[1,"right"]},standalone:!1,decls:2,vars:0,template:function(i,n){i&1&&B(0,Ep,2,1,"ard-error",null,gt),i&2&&H(n.errorMessages())},dependencies:[Ki],encapsulation:2})}}return t})();var Xr=(()=>{class t{constructor(){this.left=u(!1,{transform:e=>M(e)}),this.right=u(!1,{transform:e=>M(e)}),ce(()=>{this.left()&&this.right()&&console.error("ARD-NF5150: Cannot align a form field hint-error to both left and right.")})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=G({type:t,selectors:[["","ard-hint-error",""]],hostVars:18,hostBindings:function(i,n){i&2&&te("ard-hint-error",!0)("ard-hint",!0)("ard-error-default",!n.left()&&!n.right())("ard-error-left",n.left()&&!n.right())("ard-error-right",!n.left()&&n.right())("ard-error",!0)("ard-hint-default",!n.left()&&!n.right())("ard-hint-left",n.left()&&!n.right())("ard-hint-right",!n.left()&&n.right())},inputs:{left:[1,"left"],right:[1,"right"]}})}}return t})(),Zr=(()=>{class t{constructor(){this.left=u(!1,{transform:e=>M(e)}),this.right=u(!1,{transform:e=>M(e)}),ce(()=>{this.left()&&this.right()&&console.error("ARD-NF5130: Cannot align a form field hint to both left and right.")})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=G({type:t,selectors:[["","ard-hint",""]],hostVars:8,hostBindings:function(i,n){i&2&&te("ard-hint",!0)("ard-hint-default",!n.left()&&!n.right())("ard-hint-left",n.left()&&!n.right())("ard-hint-right",!n.left()&&n.right())},inputs:{left:[1,"left"],right:[1,"right"]}})}}return t})(),ut=(()=>{class t{constructor(){this._DEFAULTS=I(aa),this.required=u(!1,{transform:e=>M(e)}),this.optional=u(!1,{transform:e=>M(e)}),this.requiredText=u(this._DEFAULTS.labelRequiredText),this.optionalText=u(this._DEFAULTS.labelOptionalText),ce(()=>{this.required()&&this.optional()&&console.error("ARD-NF5120: Cannot set a form field label to be both required and optional.")})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["ard-label"]],hostVars:2,hostBindings:function(i,n){i&2&&te("ard-label",!0)},inputs:{required:[1,"required"],optional:[1,"optional"],requiredText:[1,"requiredText"],optionalText:[1,"optionalText"]},standalone:!1,ngContentSelectors:Ve,decls:5,vars:5,consts:[[1,"ard-label__text"],[1,"ard-label__required-optional-text"]],template:function(i,n){i&1&&(j(),o(0,"div",0),L(1),o(2,"span",1),g(3,Ap,1,1)(4,Fp,1,1),a()()),i&2&&(te("ard-label__required",n.required())("ard-label__optional",n.optional()),d(3),C(n.required()&&!n.optional()?3:n.optional()&&!n.required()?4:-1))},encapsulation:2})}}return t})(),Gm=(()=>{class t{constructor(){this._DEFAULTS=I(aa),this.defaultHintAlign=u(this._DEFAULTS.defaultHintAlign),this.alignHintToLeftByDefault=F(()=>this.defaultHintAlign()===En.Left),this.control=Ie($i),this.label=Ie(ut),this.hints=Ut(Zr),this.errors=Ut(Gr),this.autoErrors=Ut(Tn),this.hintErrors=Ut(Xr),this.hasAnyHint=F(()=>this.hints().length>0||this.hintErrors().length>0),this.hasAnyError=F(()=>this.errors().length>0||this.autoErrors().length>0&&this.autoErrors().some(e=>e.hasError())),this.reserveHintLine=u(this._DEFAULTS.reserveHintLine,{transform:e=>M(e)})}get controlHasError(){let e=this.control()?.hasError;return Li(e)?e():e}get controlIsSuccess(){let e=this.control()?.isSuccess;return Li(e)?e():e}get controlDisabled(){let e=this.control()?.disabled;return Li(e)?e():e}get controlHtmlId(){let e=this.control()?.htmlId;return Li(e)?e():e}ngOnInit(){if(!this.control())throw new Error("ARD-FT5110: Form field component requires any control (input) to be present within the element. Found none.")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=G({type:t,contentQueries:function(i,n,s){i&1&&(he(s,n.control,$i,5),he(s,n.label,ut,5),he(s,n.hints,Zr,4),he(s,n.errors,Gr,4),he(s,n.autoErrors,Tn,4),he(s,n.hintErrors,Xr,4)),i&2&&le(6)},inputs:{defaultHintAlign:[1,"defaultHintAlign"],reserveHintLine:[1,"reserveHintLine"]}})}}return t})(),kt=(()=>{class t extends Gm{static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=Qe(t)))(n||t)}})()}static{this.\u0275cmp=h({type:t,selectors:[["ard-form-field"]],standalone:!1,features:[ue],ngContentSelectors:Mp,decls:20,vars:14,consts:[["defaultHints",""],["defaultErrors",""],["defaultAutoErrors",""],["defaultHintErrors",""],["leftHintErrors",""],["rightHintErrors",""],[1,"ard-form-field"],[1,"ard-form-field__label"],[1,"ard-form-field__input"],[1,"ard-form-field__hints"],[1,"ard-form-field__errors-left"],[1,"ard-form-field__default-error"],[3,"ngTemplateOutlet"],[1,"ard-form-field__errors-right"],[1,"ard-form-field__hints-left"],[1,"ard-form-field__default-hint"],[1,"ard-form-field__hints-right"]],template:function(i,n){i&1&&(j(Ip),o(0,"div",6)(1,"label",7),L(2),a(),o(3,"div",8),L(4,1),a(),o(5,"div",9),g(6,jp,8,4)(7,Xp,8,4),a()(),g(8,Zp,1,0,"ng-template",null,0,re)(10,Jp,1,0,"ng-template",null,1,re)(12,eu,1,0,"ng-template",null,2,re)(14,tu,1,0,"ng-template",null,3,re)(16,iu,1,0,"ng-template",null,4,re)(18,nu,1,0,"ng-template",null,5,re)),i&2&&(te("ard-form-field__with-error",n.controlHasError)("ard-form-field__is-success",n.controlIsSuccess)("ard-form-field__control-disabled",n.controlDisabled),d(),Ge("for",n.controlHtmlId),d(4),te("ard-form-field__errors",n.hasAnyError())("ard-form-field__reserve-hint-line",n.reserveHintLine()||n.hasAnyHint())("ard-form-field__hints-default-left",n.alignHintToLeftByDefault()),d(),C(n.hasAnyError()?6:7))},dependencies:[Pe],styles:[`@layer ard-ui{ard-form-field,ard-horizontal-form-field{display:block}ard-label,ard-hint,ard-error,ard-auto-error,ard-hint-error{display:block}.ard-horizontal-form-field{display:flex}.ard-form-field__hints,.ard-form-field__errors{display:flex;justify-content:space-between}.ard-form-field__hints>*,.ard-form-field__errors>*{display:flex;flex-direction:column}.ard-form-field__hints .ard-form-field__hints-left .ard-form-field__default-hint,.ard-form-field__hints .ard-form-field__errors-left .ard-form-field__default-error,.ard-form-field__errors .ard-form-field__hints-left .ard-form-field__default-hint,.ard-form-field__errors .ard-form-field__errors-left .ard-form-field__default-error{display:none}.ard-form-field__hints.ard-form-field__hints-default-left .ard-form-field__hints-left .ard-form-field__default-hint,.ard-form-field__hints.ard-form-field__hints-default-left .ard-form-field__errors-left .ard-form-field__default-error,.ard-form-field__errors.ard-form-field__hints-default-left .ard-form-field__hints-left .ard-form-field__default-hint,.ard-form-field__errors.ard-form-field__hints-default-left .ard-form-field__errors-left .ard-form-field__default-error{display:flex;flex-direction:column}.ard-form-field__hints.ard-form-field__hints-default-left .ard-form-field__hints-right .ard-form-field__default-hint,.ard-form-field__hints.ard-form-field__hints-default-left .ard-form-field__errors-right .ard-form-field__default-error,.ard-form-field__errors.ard-form-field__hints-default-left .ard-form-field__hints-right .ard-form-field__default-hint,.ard-form-field__errors.ard-form-field__hints-default-left .ard-form-field__errors-right .ard-form-field__default-error,.ard-auto-error__no-errors{display:none}}
`],encapsulation:2,changeDetection:0})}}return t})(),Ss=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["ard-hint-error"]],standalone:!1,features:[rn([{directive:Xr,inputs:["left","left","right","right"]}])],ngContentSelectors:Ve,decls:1,vars:0,template:function(i,n){i&1&&(j(),L(0))},encapsulation:2})}}return t})(),Ds=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["ard-hint"]],standalone:!1,features:[rn([{directive:Zr,inputs:["left","left","right","right"]}])],ngContentSelectors:Ve,decls:1,vars:0,template:function(i,n){i&1&&(j(),L(0))},encapsulation:2})}}return t})();var Pt=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[ie]})}}return t})(),Xm={full:!1,appearance:Oe.Outlined},oa=new R("ard-kbd-defaults",{factory:()=>S({},Xm)});var Zm=(()=>{class t{constructor(){this._DEFAULTS=I(oa)}transform(e,i=!this._DEFAULTS.full){return ko(e,i)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275pipe=er({name:"kbd",type:t,pure:!0,standalone:!1})}}return t})(),Ke=(()=>{class t{constructor(){this._DEFAULTS=I(oa),this.contentWrapper=De("contentWrapperEl"),this.key=u(""),this.full=u(!1,{transform:e=>M(e)});this.appearance=u(Oe.Filled),this.ngClasses=F(()=>[`ard-appearance-${this.appearance()}`].join(" "))}ngAfterViewInit(){if(!this.key()&&!this.contentWrapper().nativeElement.innerText)throw new Error("ARD-FT5030: Using <ard-kbd> without specifying the [key] field is not allowed.")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["ard-kbd"]],viewQuery:function(i,n){i&1&&Ee(n.contentWrapper,ea,5),i&2&&le()},inputs:{key:[1,"key"],full:[1,"full"],appearance:[1,"appearance"]},standalone:!1,ngContentSelectors:Ve,decls:6,vars:5,consts:[["contentWrapperEl",""],[1,"ard-kbd",3,"ngClass"],[1,"ard-kbd-content-wrapper"]],template:function(i,n){if(i&1&&(j(),o(0,"kbd",1),l(1),Xe(2,"kbd"),a(),o(3,"div",2,0),L(5),a()),i&2){let s;m("ngClass",n.ngClasses()),d(),E(" ",Pi(2,2,n.key()||((s=n.contentWrapper())==null||s.nativeElement==null?null:s.nativeElement.innerText)||"",!n.full()),`
`)}},dependencies:[He,Zm],styles:[`@layer ard-ui{.ard-kbd-content-wrapper{display:none}.ard-kbd{display:inline-block}}
`],encapsulation:2,changeDetection:0})}}return t})(),Es=(()=>{class t{constructor(){this.elementRef=I(_e),this.renderer=I(Tt);this.appearance=u(Oe.Filled,{alias:"ardKbdAppearance"}),this.ngClasses=F(()=>["ard-kbd",`ard-appearance-${this.appearance()}`]),ce(()=>{let e=this.ngClasses();this.updateClasses(e)})}updateClasses(e){let i=this.elementRef.nativeElement;i.className.split(" ").filter(s=>s.startsWith("ard-appearance-")).forEach(s=>this.renderer.removeClass(i,s)),e.forEach(s=>{this.renderer.addClass(i,s)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=G({type:t,selectors:[["","ardKbd",""]],inputs:{appearance:[1,"ardKbdAppearance","appearance"]},standalone:!1})}}return t})(),Ae=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[ie]})}}return t})(),Jm=new R("ard-kbd-shortcut-defaults",{factory:()=>({})});var Ci=(()=>{class t{constructor(){this._KBD_DEFAULTS=I(oa),this._DEFAULTS=I(Jm),this.contentWrapper=De("contentWrapperEl"),this.splitRegex=/[+, ]/,this.keys=u(void 0,{transform:e=>_r(e,this.splitRegex)}),this.full=u(this._DEFAULTS.full??this._KBD_DEFAULTS.full,{transform:e=>M(e)});this.appearance=u(this._DEFAULTS.appearance??this._KBD_DEFAULTS.appearance),this.ngClasses=F(()=>[`ard-appearance-${this.appearance}`].join(" "))}ngAfterViewInit(){if(!this.keys()&&!this.contentWrapper()?.nativeElement.innerText)throw new Error("ARD-FT5040: Using <ard-kbd-shortcut> without specifying the [keys] field is not allowed.")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["ard-kbd-shortcut"]],viewQuery:function(i,n){i&1&&Ee(n.contentWrapper,ea,5),i&2&&le()},inputs:{keys:[1,"keys"],full:[1,"full"],appearance:[1,"appearance"]},standalone:!1,ngContentSelectors:Ve,decls:6,vars:1,consts:[["contentWrapperEl",""],[1,"ard-kbd-shortcut",3,"ngClass"],[1,"ard-kbd-shortcut-content-wrapper"],[3,"appearance","full","key"]],template:function(i,n){if(i&1&&(j(),o(0,"div",1),B(1,au,2,4,null,null,Q),a(),o(3,"div",2,0),L(5),a()),i&2){let s;m("ngClass",n.ngClasses()),d(),H((s=n.keys())!==null&&s!==void 0?s:(s=n.contentWrapper())==null||s.nativeElement==null||s.nativeElement.innerText==null?null:s.nativeElement.innerText.split(n.splitRegex))}},dependencies:[He,Ke],styles:[`@layer ard-ui{.ard-kbd-shortcut{display:inline-block}.ard-kbd-shortcut-content-wrapper{display:none}}
`],encapsulation:2,changeDetection:0})}}return t})(),bi=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[ie,Ae]})}}return t})(),eh={color:Vn.Gold,max:5,value:0},JC=new R("ard-rating-display-defaults",{factory:()=>S({},eh)});var th={Strong:"strong",Light:"light",Colorless:"colorless"},ih={Rounded:"rounded",Sharp:"sharp"},nh={Noop:"noop",Slice:"slice"},Jo={TopLeft:"top-left",TopCenter:"top-center",TopRight:"top-right",CenterLeft:"center-left",Center:"center-center",CenterRight:"center-right",BottomLeft:"bottom-left",BottomCenter:"bottom-center",BottomRight:"bottom-right"};var As={Left:"left",Center:"center",Right:"right",Split:"split"},rh=K(S({},Ft),{options:[10,25,50],itemsPerPage:50,page:1,color:Se.None,align:As.Split,compact:!1,useFirstLastButtons:!1,itemsPerPageText:"Items per page:",currentItemsFormatFn:({currentItemsFrom:t,currentItemsTo:r,totalItems:e})=>`${t} \u2013 ${r} of ${e}`}),e1=new R("ard-table-pagination-defaults",{factory:()=>S({},rh)});var Fs=K(S({},Ft),{rowDisabledFrom:"disabled",rowBoldFrom:"bold",invertRowDisabled:!1,invertRowBold:!1,selectableRows:!1,maxSelectedItems:void 0,clickableRows:!1,caption:void 0,isLoading:!1,loadingProgress:0,loadingProgressBuffer:0,loadingBarMode:xs.Determinate,loadingBarColor:Se.Secondary,appearance:th.Strong,variant:ih.Rounded,color:Se.Primary,align:Jo.CenterLeft,headerAlign:Jo.CenterLeft,compact:!1,zebra:!1,stickyHeader:!1,paginated:!1,paginationStrategy:nh.Noop,paginationOptions:[10,25,50],totalItems:void 0,paginationColor:Se.None,paginationAlign:As.Split,itemsPerPageText:"Items per page:",currentItemsFormatFn:({currentItemsFrom:t,currentItemsTo:r,totalItems:e})=>`${t} \u2013 ${r} of ${e}`,pageFillRemaining:!1,paginationDisabled:!1,useFirstLastButtons:!1,itemsPerPage:50,page:1,treatDataSourceAsString:!1}),t1=new R("ard-table-defaults",{factory:()=>S({},Fs)});var ah=K(S({},Fs),{separator:","}),i1=new R("ard-table-from-csv-defaults",{factory:()=>S({},ah)});var oh={Outlined:"outlined",Raised:"raised"},sh={Rounded:"rounded",Sharp:"sharp"},lh={appearance:oh.Raised,variant:sh.Rounded,actionButtonsAlign:An.Right},dh=new R("ard-card-defaults",{factory:()=>S({},lh)});var Is=(()=>{class t{constructor(e,i){e.addClass(i.nativeElement,"ard-card-title")}static{this.\u0275fac=function(i){return new(i||t)(J(Tt),J(_e))}}static{this.\u0275dir=G({type:t,selectors:[["ard-card-title"],["","ard-card-title",""]],standalone:!1})}}return t})();var Ms=(()=>{class t{constructor(e,i){e.addClass(i.nativeElement,"ard-card-content")}static{this.\u0275fac=function(i){return new(i||t)(J(Tt),J(_e))}}static{this.\u0275dir=G({type:t,selectors:[["ard-card-content"],["","ard-card-content",""]],standalone:!1})}}return t})(),ks=(()=>{class t{constructor(e,i){e.addClass(i.nativeElement,"ard-card-image")}static{this.\u0275fac=function(i){return new(i||t)(J(Tt),J(_e))}}static{this.\u0275dir=G({type:t,selectors:[["","ard-card-image",""]],standalone:!1})}}return t})();var ch=(()=>{class t{constructor(){this._DEFAULTS=I(dh);this.appearance=u(this._DEFAULTS.appearance),this.variant=u(this._DEFAULTS.variant),this.ngClasses=F(()=>["ard-card",`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`].join(" "))}get _ngClassesHostAttribute(){return this.ngClasses()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=G({type:t,selectors:[["","ard-card",""]],hostVars:2,hostBindings:function(i,n){i&2&&me(n._ngClassesHostAttribute)},inputs:{appearance:[1,"appearance"],variant:[1,"variant"]},standalone:!1})}}return t})(),Ps=(()=>{class t extends ch{static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=Qe(t)))(n||t)}})()}static{this.\u0275cmp=h({type:t,selectors:[["ard-card"]],standalone:!1,features:[ue],ngContentSelectors:Ve,decls:1,vars:0,template:function(i,n){i&1&&(j(),L(0))},encapsulation:2,changeDetection:0})}}return t})(),Vs=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[ie]})}}return t})(),ph={Full:"full",Middle:"middle"},uh={vertical:!1,variant:ph.Full,flexItem:!1,textAlign:Eu.Center},n1=new R("ard-divider-defaults",{factory:()=>S({},uh)});var mh={xs:"0rem",sm:"36rem",md:"48rem",lg:"64rem",xl:"80rem","2xl":"96rem"},r1=new R("ard-breakpoints",{factory:()=>hh(mh)});function hh(t){let r=new Map,e=null,i=Object.entries(t).map(n=>{let[s,c]=n;if(c===void 0)return null;let[,p,b]=c.match(/(\d+)(\w+)/)||[],O=Number(p);if(isNaN(O)||!b)return console.warn(`ARD-WA-G00: Invalid breakpoint format for ${s}: ${c}`),null;if(!e)e=b;else if(b!==e)return console.warn(`ARD-WA-G01: All breakpoints must use the same unit. Expected "${e}" but got "${b}" for breakpoint "${s}"`),null;return O<0?(console.warn(`ARD-WA-G02: Breakpoint values must be non-negative. Invalid value for ${s}: ${c}`),null):[s,{amount:O,unit:b}]}).filter(n=>n!==null).sort((n,s)=>n[1].amount-s[1].amount);for(let n=0;n<i.length;n++){let[s,{amount:c,unit:p}]=i[n],b=`(min-width: ${c}${p})`,O=i[n+1];if(!O){r.set(b,s);continue}let[,{amount:k,unit:W}]=O,D=`(max-width: ${k-.01}${W})`,P=n===i.length-1?b:`${b} and ${D}`;r.set(P,s)}return r}var Os={Grow:"grow",Auto:"auto"},a1=new Set(Object.values(Os));var Rs={Start:"flex-start",End:"flex-end",Center:"center",SpaceBetween:"space-between",SpaceAround:"space-around",SpaceEvenly:"space-evenly"},o1=new Set(Object.values(Rs));var Ls={Start:"flex-start",End:"flex-end",Center:"center"},s1=new Set(Object.values(Ls));var Bs={Wrap:"wrap",NoWrap:"nowrap",WrapReverse:"wrap-reverse"},l1=new Set(Object.values(Bs));var fh={Row:"row",RowReverse:"row-reverse",Column:"column",ColumnReverse:"column-reverse"},d1=new Set(Object.values(fh));var gh={columns:12,size:Os.Grow,reverse:!1,justifyContent:Rs.Start,alignItems:Ls.Start,spacing:3,columnSpacing:null,rowSpacing:null,wrap:Bs.Wrap},c1=new R("ard-grid-defaults",{factory:()=>S({},gh)});var _h={tabDisabled:!1,tabPointerEventsWhenDisabled:!1,color:Se.Primary,stretchTabs:!1,uniformTabWidths:!1,tabAlignment:An.Left,tabIndex:0},Hs=new R("ard-tabber-defaults",{factory:()=>S({},_h)});var mt=(()=>{class t{constructor(){this._DEFAULTS=I(Hs),this.disabled=u(this._DEFAULTS.tabDisabled,{transform:e=>M(e)}),this.pointerEventsWhenDisabled=u(this._DEFAULTS.tabPointerEventsWhenDisabled,{transform:e=>M(e)}),this.tabTitle=u(""),this.selected=A(!1),this.focused=A(!1),this._label=u(null,{alias:"label"}),this.label=F(()=>this._label()??this.tabId()),this._isTabIdInitialized=!1,this.tabId=u.required({transform:e=>(this._isTabIdInitialized=!0,e)}),this.focusEvent=ne({alias:"focus"}),this.blurEvent=ne({alias:"blur"}),this.selectedChange=ne(),this.selectedChangeInternal$=new Re,this._selectedChangeSub=this.selectedChangeInternal$.subscribe(this.selectedChange.emit)}set _selected(e){this.selected.set(M(e))}setSelected(e){this.selected.set(e),this._emitChange()}_emitChange(){this.selectedChangeInternal$.next(this.selected())}ngOnDestroy(){this._selectedChangeSub.unsubscribe(),this.selectedChangeInternal$.complete()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["ard-tab"]],hostAttrs:["role","tabpanel"],hostVars:4,hostBindings:function(i,n){i&2&&te("ard-tab-disabled",n.disabled())("ard-tab-selected",n.selected())},inputs:{disabled:[1,"disabled"],pointerEventsWhenDisabled:[1,"pointerEventsWhenDisabled"],tabTitle:[1,"tabTitle"],_selected:[0,"selected","_selected"],_label:[1,"label","_label"],tabId:[1,"tabId"]},outputs:{focusEvent:"focus",blurEvent:"blur",selectedChange:"selectedChange"},standalone:!1,ngContentSelectors:Ve,decls:1,vars:0,template:function(i,n){i&1&&(j(),L(0))},styles:[`@layer ard-ui{ard-tab{display:block}}
`],encapsulation:2,changeDetection:0})}}return t})(),wn=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(J(ve))}}static{this.\u0275dir=G({type:t,selectors:[["ng-template","ard-tabber-label-tmp",""]],standalone:!1})}}return t})(),Vt=(()=>{class t{constructor(){this._DEFAULTS=I(Hs),this.tabs=Ut(mt,{descendants:!0}),this.selectedTabId=dt(null,{alias:"selectedTab"}),this.selectedTab=F(()=>this.tabs().find(e=>e.tabId()===this.selectedTabId())??null),this.focusedTabId=A(null),this.focusedTab=F(()=>this.tabs().find(e=>e.tabId()===this.focusedTabId())??null),this._selectedTabIdToCheck=null,this.initialTab=u(void 0),this.focusEvent=ne({alias:"focus"}),this.blurEvent=ne({alias:"blur"});this.color=u(this._DEFAULTS.color),this.ngClasses=F(()=>[`ard-color-${this.color()}`].join(" "));this.stretchTabs=u(this._DEFAULTS.stretchTabs,{transform:e=>M(e)}),this.uniformTabWidths=u(this._DEFAULTS.uniformTabWidths,{transform:e=>M(e)}),this.tabAlignment=u(this._DEFAULTS.tabAlignment),this.tabContainerClasses=F(()=>[this.uniformTabWidths()&&!this.stretchTabs()?"ard-uniform-tab-widths":"",this.stretchTabs()?"ard-stretch-tabs":"",this.stretchTabs()?"":`ard-tab-align-${this.tabAlignment()}`].join(" "));this.tabIndex=u(0);this.labelTemplate=Ie(wn),this.tabsWithTemplates=F(()=>this.tabs().map(e=>({tab:e,template:typeof e.label()=="string"?null:e.label(),templateContext:typeof e.label()=="string"?{$implicit:e.label(),tabId:e.tabId(),label:e.label()}:null})))}ngOnChanges(e){if(e.selectedTabId){let i=e.selectedTabId.currentValue;if(this.tabs().some(n=>!n._isTabIdInitialized))this._selectedTabIdToCheck=i;else{let n=e.selectedTabId.previousValue;this._validateSelectedTabId(i,n)}}}_validateSelectedTabId(e,i){if(e!==null){let n=this.tabs().find(s=>s._isTabIdInitialized&&s.tabId()===e);if(!n){console.error(`ARD-NF6000: Trying to select a tab with id '${e}' that does not exist.`);return}if(i!==null){let s=this.tabs().find(c=>c._isTabIdInitialized&&c.tabId()===i);s&&this._unselectSpecificTab(s)}this._selectNewTab(n)}}ngAfterContentInit(){let e=null;for(let i of this.tabs())i.selected()&&(e&&i.selected.set(!1),e=i),i.focusEvent.subscribe(()=>{this.focusEvent.emit(i.tabId())}),i.blurEvent.subscribe(()=>{this.blurEvent.emit(i.tabId())}),i.selectedChangeInternal$.subscribe(n=>{if(!n){this.selectedTabId.set(null);return}this.selectTab(i)});this._selectedTabIdToCheck!==null&&(this._validateSelectedTabId(this._selectedTabIdToCheck,null),this._selectedTabIdToCheck=null),e||(e=this.tabs().find(n=>n.tabId()===this.initialTab())??this.tabs()[0]??null,e&&e.selected.set(!0)),this.selectedTabId.set(e.tabId())}selectTab(e){e.tabId()===this.selectedTabId()||e.disabled()||(this._unselectCurrentTab(e),this.selectedTabId.set(e.tabId()),this._selectNewTab(e))}_unselectSpecificTab(e){e.selected.set(!1),e.selectedChange.emit(!1)}_unselectCurrentTab(e){let i=this.selectedTab();i&&(!e||i.tabId()!==e.tabId())&&this._unselectSpecificTab(i)}_selectNewTab(e){e.selected.set(!0),e.selectedChange.emit(!0)}onTabFocus(e){e.focusEvent.emit(),e.focused.set(!0),this.focusedTabId.set(e.tabId())}onTabBlur(e){e.blurEvent.emit(),e.focused.set(!1),this.focusedTabId.set(null)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["ard-tabber"]],contentQueries:function(i,n,s){i&1&&(he(s,n.tabs,mt,5),he(s,n.labelTemplate,wn,5)),i&2&&le(2)},inputs:{selectedTabId:[1,"selectedTab","selectedTabId"],initialTab:[1,"initialTab"],color:[1,"color"],stretchTabs:[1,"stretchTabs"],uniformTabWidths:[1,"uniformTabWidths"],tabAlignment:[1,"tabAlignment"],tabIndex:[1,"tabIndex"]},outputs:{selectedTabId:"selectedTabChange",focusEvent:"focus",blurEvent:"blur"},standalone:!1,features:[ei],ngContentSelectors:Ve,decls:6,vars:6,consts:[["focusableElement",""],["defaultLabelTemplate",""],[1,"ard-tabber",3,"ngClass"],[1,"ard-tabber-tabs",3,"ngClass"],["type","button","role","tab",1,"ard-tab-button",3,"id","ard-tab-disabled","ard-tab-with-pointer-events-when-disabled","ard-tab-active","ard-tab-focused","title","tabindex"],["role","tabpanel",1,"ard-tabber-content"],["type","button","role","tab",1,"ard-tab-button",3,"click","focus","blur","id","title","tabindex"],[1,"ard-focus-overlay"],[1,"ard-button-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&(j(),o(0,"div",2)(1,"div",3),B(2,du,7,13,"button",4,gt),a(),o(4,"div",5),L(5),a()()),i&2&&(m("ngClass",n.ngClasses()),d(),be(fe(4,ou,n.tabs().length)),m("ngClass",n.tabContainerClasses()),d(),H(n.tabsWithTemplates()))},dependencies:[He,Pe],styles:[`@layer ard-ui{ard-tabber{display:block}.ard-tabber ard-tab{display:none}.ard-tabber ard-tab.ard-tab-selected{display:block}.ard-tabber .ard-tabber-tabs.ard-uniform-tab-widths{display:grid;grid-template-columns:repeat(var(--ard-_tabber-tabs),1fr);max-width:max-content}}
`],encapsulation:2,changeDetection:0})}}return t})(),Ot=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[ie]})}}return t})(),Us={appearance:wu.Raised,variant:ls.Rounded,compact:!1,heading:"",noCloseButton:!1,noBackdrop:!1,disableBackdropClose:!1,panelClass:"",backdropClass:""},vh=new R("ard-modal-defaults",{factory:()=>S({},Us)});var Jr={NoOp:"no-op",AutoClose:"autoclose"},yh=K(S({},Us),{confirmButtonText:"Confirm",confirmButtonColor:Se.Primary,confirmButtonAppearance:zi.RaisedStrong,rejectButtonText:"Cancel",rejectButtonColor:Se.None,rejectButtonAppearance:zi.Transparent,noRejectButton:!1,canConfirm:!0,buttonActionType:Jr.AutoClose}),Ch=new R("ard-dialog-defaults",{factory:()=>S({},yh)});var es=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(J(ve))}}static{this.\u0275dir=G({type:t,selectors:[["ng-template","ard-buttons-tmp",""]],standalone:!1})}}return t})(),ts=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(J(ve))}}static{this.\u0275dir=G({type:t,selectors:[["ng-template","ard-close-icon-tmp",""]],standalone:!1})}}return t})(),is=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(J(ve))}}static{this.\u0275dir=G({type:t,selectors:[["ng-template","ard-close-icon-tmp",""]],standalone:!1})}}return t})(),sa=(()=>{class t{constructor(){this.overlay=I(hi),this.scrollStrategyOpts=I(gn),this.viewContainerRef=I(ft),this._DEFAULTS=I(vh);this.appearance=u(this._DEFAULTS.appearance),this.variant=u(this._DEFAULTS.variant),this.compact=u(this._DEFAULTS.compact,{transform:e=>M(e)}),this.ngClasses=F(()=>[`ard-variant-${this.variant()}`,`ard-appearance-${this.appearance()}`,this.compact()?"ard-compact":""].join(" "));this.heading=u(this._DEFAULTS.heading),this.noCloseButton=u(this._DEFAULTS.noCloseButton,{transform:e=>M(e)}),this.panelClass=u(this._DEFAULTS.panelClass),this.backdropClass=u(this._DEFAULTS.backdropClass);this.noBackdrop=u(this._DEFAULTS.noBackdrop,{transform:e=>M(e)}),this.disableBackdropClose=u(this._DEFAULTS.disableBackdropClose,{transform:e=>M(e)}),this.allActionsDisabled=u(!1,{transform:e=>M(e)});this.open=A(!1),this.openChange=ne(),this.closeEvent=ne({alias:"close"});this.modalTemplate=De("modalTemplate",{read:ve});this.closeIconTemplate=Ie(is),this._closeIconTemplate=u(void 0)}set _open(e){this.open.set(M(e)),this.open()?this._openOverlay():this._destroyOverlay()}openProgrammatically(){this.open.set(!0)}closeProgrammatically(){this.open.set(!1)}_openOverlay(){let e=this.overlay.position().global(),i=new Ni({positionStrategy:e,scrollStrategy:this.scrollStrategyOpts.block(),hasBackdrop:!1});this._modalOverlay=this.overlay.create(i);let n=new mi(this.modalTemplate(),this.viewContainerRef);this._modalOverlay.attach(n)}_destroyOverlay(){this._modalOverlay&&(this.openChange.emit(!1),this.closeEvent.emit(),this._modalOverlay.dispose(),delete this._modalOverlay)}onBackdropClick(){this.disableBackdropClose()||this.allActionsDisabled()||this._destroyOverlay()}onCloseButtonClick(){this.allActionsDisabled()||this._destroyOverlay()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["ard-modal"]],contentQueries:function(i,n,s){i&1&&he(s,n.closeIconTemplate,is,5),i&2&&le()},viewQuery:function(i,n){i&1&&Ee(n.modalTemplate,cu,5,ve),i&2&&le()},inputs:{appearance:[1,"appearance"],variant:[1,"variant"],compact:[1,"compact"],heading:[1,"heading"],noCloseButton:[1,"noCloseButton"],panelClass:[1,"panelClass"],backdropClass:[1,"backdropClass"],noBackdrop:[1,"noBackdrop"],disableBackdropClose:[1,"disableBackdropClose"],allActionsDisabled:[1,"allActionsDisabled"],_open:[0,"open","_open"],_closeIconTemplate:[1,"_closeIconTemplate"]},outputs:{openChange:"openChange",closeEvent:"close"},standalone:!1,ngContentSelectors:Ve,decls:4,vars:0,consts:[["modalTemplate",""],["_modalInsidePanel",""],["defaultCloseIconTemplate",""],[1,"ard-modal",3,"ngClass"],[1,"ard-modal","ard-modal-backdrop",3,"ngClass"],[1,"ard-modal",3,"click","ngClass"],[3,"ngTemplateOutlet"],[1,"ard-modal","ard-modal-backdrop",3,"click","ngClass"],["cdkTrapFocus","",1,"ard-modal-panel",3,"click","ngClass"],[1,"ard-modal-heading"],[1,"ard-modal-heading-text"],["color","none",1,"ard-modal-close-button",3,"compact","disabled"],[1,"ard-modal-content"],["color","none",1,"ard-modal-close-button",3,"click","compact","disabled"]],template:function(i,n){i&1&&(j(),g(0,fu,2,1,"ng-template",null,0,re)(2,yu,7,7,"ng-template",null,1,re))},dependencies:[He,Pe,vt,Ne,No],styles:[`.ard-modal-content{width:100%}
`],encapsulation:2,changeDetection:0})}}return t})(),xi=(()=>{class t{constructor(){this._DEFAULTS=I(Ch);this.appearance=u(this._DEFAULTS.appearance),this.variant=u(this._DEFAULTS.variant),this.compact=u(this._DEFAULTS.compact,{transform:e=>M(e)});this.heading=u(this._DEFAULTS.heading),this.noCloseButton=u(this._DEFAULTS.noCloseButton,{transform:e=>M(e)}),this.panelClass=u(this._DEFAULTS.panelClass),this.backdropClass=u(this._DEFAULTS.backdropClass);this.noBackdrop=u(this._DEFAULTS.noBackdrop,{transform:e=>M(e)}),this.disableBackdropClose=u(this._DEFAULTS.disableBackdropClose,{transform:e=>M(e)}),this.buttonActionType=u(this._DEFAULTS.buttonActionType),this.allActionsDisabled=u(!1,{transform:e=>M(e)});this.open=dt(!1),this.closeEvent=ne({alias:"close"}),this.confirmEvent=ne({alias:"confirm"}),this.rejectEvent=ne({alias:"reject"});this.confirmButtonText=u(this._DEFAULTS.confirmButtonText),this.confirmButtonColor=u(this._DEFAULTS.confirmButtonColor),this.confirmButtonAppearance=u(this._DEFAULTS.confirmButtonAppearance),this.confirmButtonPointerEventsWhenDisabled=u(!1,{transform:e=>M(e)}),this.rejectButtonText=u(this._DEFAULTS.rejectButtonText),this.rejectButtonColor=u(this._DEFAULTS.rejectButtonColor),this.rejectButtonAppearance=u(this._DEFAULTS.rejectButtonAppearance),this.noRejectButton=u(this._DEFAULTS.noRejectButton,{transform:e=>M(e)}),this.canConfirm=u(this._DEFAULTS.canConfirm,{transform:e=>M(e)}),this._isCloseEventTimeoutRunning=!1;this.buttonsTemplate=Ie(es),this.closeIconTemplate=Ie(ts),this.getButtonsContext=F(()=>({confirmButton:{text:this.confirmButtonText(),color:this.confirmButtonColor(),appearance:this.confirmButtonAppearance(),pointerEventsWhenDisabled:this.confirmButtonPointerEventsWhenDisabled()},rejectButton:{enabled:!this.noRejectButton(),text:this.rejectButtonText(),color:this.rejectButtonColor(),appearance:this.rejectButtonAppearance()},canConfirm:this.canConfirm(),allActionsDisabled:this.allActionsDisabled(),onConfirm:()=>this.onConfirmClick(),onReject:()=>this.onRejectClick(),dialogAppearance:this.appearance(),dialogVariant:this.variant(),dialogCompact:this.compact()}))}openProgrammatically(){this.open.set(!0)}closeProgrammatically(){this.open.set(!1)}onConfirmClick(){!this.canConfirm()||this.allActionsDisabled()||(this._isCloseEventTimeoutRunning=!0,this.buttonActionType()===Jr.AutoClose&&this.open.set(!1),setTimeout(()=>{this._isCloseEventTimeoutRunning=!1,this.confirmEvent.emit(),this.closeEvent.emit("confirm")},0))}onRejectClick(){this.allActionsDisabled()||(this._isCloseEventTimeoutRunning=!0,this.buttonActionType()===Jr.AutoClose&&this.open.set(!1),setTimeout(()=>{this._isCloseEventTimeoutRunning=!1,this.rejectEvent.emit(),this.closeEvent.emit("reject")},0))}onModalClose(){this._isCloseEventTimeoutRunning||this.closeEvent.emit("close")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["ard-dialog"]],contentQueries:function(i,n,s){i&1&&(he(s,n.buttonsTemplate,es,5),he(s,n.closeIconTemplate,ts,5)),i&2&&le(2)},inputs:{appearance:[1,"appearance"],variant:[1,"variant"],compact:[1,"compact"],heading:[1,"heading"],noCloseButton:[1,"noCloseButton"],panelClass:[1,"panelClass"],backdropClass:[1,"backdropClass"],noBackdrop:[1,"noBackdrop"],disableBackdropClose:[1,"disableBackdropClose"],buttonActionType:[1,"buttonActionType"],allActionsDisabled:[1,"allActionsDisabled"],open:[1,"open"],confirmButtonText:[1,"confirmButtonText"],confirmButtonColor:[1,"confirmButtonColor"],confirmButtonAppearance:[1,"confirmButtonAppearance"],confirmButtonPointerEventsWhenDisabled:[1,"confirmButtonPointerEventsWhenDisabled"],rejectButtonText:[1,"rejectButtonText"],rejectButtonColor:[1,"rejectButtonColor"],rejectButtonAppearance:[1,"rejectButtonAppearance"],noRejectButton:[1,"noRejectButton"],canConfirm:[1,"canConfirm"]},outputs:{open:"openChange",closeEvent:"close",confirmEvent:"confirm",rejectEvent:"reject"},standalone:!1,ngContentSelectors:Ve,decls:8,vars:14,consts:[["defaultButtonsTemplate",""],[3,"openChange","close","appearance","variant","compact","heading","noCloseButton","panelClass","backdropClass","noBackdrop","disableBackdropClose","allActionsDisabled","open","_closeIconTemplate"],[1,"ard-dialog-container"],[1,"ard-dialog-content"],[1,"ard-dialog-buttons"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ard-dialog-buttons-container"],[3,"color","appearance","variant","compact","disabled"],[3,"click","color","appearance","variant","compact","disabled","pointerEventsWhenDisabled"],[3,"click","color","appearance","variant","compact","disabled"]],template:function(i,n){if(i&1){let s=N();j(),o(0,"ard-modal",1),z("openChange",function(p){return T(s),$(n.open,p)||(n.open=p),w(p)}),_("close",function(){return T(s),w(n.onModalClose())}),o(1,"div",2)(2,"div",3),L(3),a(),o(4,"div",4),g(5,bu,4,8,"ng-template",null,0,re)(7,xu,0,0,"ng-template",5),a()()()}if(i&2){let s,c=V(6);m("appearance",n.appearance())("variant",n.variant())("compact",n.compact())("heading",n.heading())("noCloseButton",n.noCloseButton())("panelClass",n.panelClass())("backdropClass",n.backdropClass())("noBackdrop",n.noBackdrop())("disableBackdropClose",n.disableBackdropClose())("allActionsDisabled",n.allActionsDisabled()),Y("open",n.open),m("_closeIconTemplate",n.closeIconTemplate()),d(7),m("ngTemplateOutlet",(s=(s=n.buttonsTemplate())==null?null:s.template)!==null&&s!==void 0?s:c)("ngTemplateOutletContext",n.getButtonsContext())}},dependencies:[Pe,nt,sa],encapsulation:2,changeDetection:0})}}return t})(),la=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[ie,yt,Le,jo]})}}return t})(),Ti=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[ie,je,la]})}}return t})();var p1=new R("ArdSnackbarData"),u1=new R("ArdSnackbarColor"),m1=new R("ArdSnackbarType");var bh={TopLeft:"top-left",TopCenter:"top-center",TopRight:"top-right",BottomLeft:"bottom-left",BottomCenter:"bottom-center",BottomRight:"bottom-right"},xh={Inside:"inside",Outside:"outside"},Th={Default:"default",Skip:"skip",Overwrite:"overwrite"},wh={None:"none",Danger:"danger",Warning:"warn",Success:"success",Info:"info"};var Sh={placement:{align:bh.BottomCenter,origin:document.body,originRelation:xh.Inside},duration:5e3,queueHandling:Th.Default,panelClass:[],data:{message:""},color:Se.Primary,type:wh.None},h1=new R("ard-snackbar-defaults",{factory:()=>S({},Sh)});var f1=new R("ard-snackbar-animation-length",{factory:()=>150});var v1={name:"$$$",description:"$$$",type:"boolean-like",default:"false",required:!1};function y1(t,r=Oe.Outlined,e){return{name:e??"appearance",description:t,type:"FormElementAppearance",default:`'${r}'`}}function Ns(t,r){let e=new Map;for(let i of t){let n=r(i);e.has(n)||e.set(n,[]),e.get(n).push(i)}return Array.from(e.entries()).map(([i,n])=>({group:i,children:n}))}var Ys=Ai(da());var Dh={offset:"30%",noHighlight:!1,behavior:"smooth"};function wi(t,r={}){let{offset:e,noHighlight:i,behavior:n}=S(S({},Dh),r);console.log("scrollTo called with tagQuery:",t);let s=document.querySelector(t);if(!s){let k=t.charAt(0);t=(0,Ys.kebab)(t.replace(/[^\w\- ]/gi,"")),/[^a-zA-Z0-9]/.test(k)&&(t=k+t),s=document.querySelector(t)}if(!s){console.warn(`Element not found for selector: ${t}`);return}let p=s.getBoundingClientRect().top+window.scrollY,b=0;if(typeof e=="string"&&e.endsWith("%")){let k=parseFloat(e);isNaN(k)||(b=k/100*window.innerHeight)}else typeof e=="number"&&(b=e);let O=p-b;window.scrollTo({top:O,behavior:n}),!i&&(s.classList.add("scrolled-to"),setTimeout(()=>{s.classList.remove("scrolled-to")},3e3))}var ua=new R("HIGHLIGHT_OPTIONS");function L1(t){return[{provide:ua,useValue:t}]}var Si=function(t){return t.FULL_WITH_CORE_LIBRARY_IMPORTS="The full library and the core library were imported, only one of them should be imported!",t.FULL_WITH_LANGUAGE_IMPORTS="The highlighting languages were imported they are not needed!",t.CORE_WITHOUT_LANGUAGE_IMPORTS="The highlighting languages were not imported!",t.LANGUAGE_WITHOUT_CORE_IMPORTS="The core library was not imported!",t.NO_FULL_AND_NO_CORE_IMPORTS="Highlight.js library was not imported!",t}(Si||{}),Eh=(()=>{class t{constructor(){this.document=I(xe),this.isPlatformBrowser=Oi(I(Ii)),this.options=I(ua,{optional:!0}),this._ready=new $n(null),this.ready=Kn(this._ready.asObservable().pipe(ot(e=>!!e))),this.isPlatformBrowser&&(this.document.defaultView.hljs?this._ready.next(this.document.defaultView.hljs):this._loadLibrary().pipe(Ji(e=>this.options?.lineNumbersLoader?(this.document.defaultView.hljs=e,this.loadLineNumbers().pipe(Gn(i=>{i.activateLineNumbers(),this._ready.next(e)}))):(this._ready.next(e),zn)),xa(e=>(console.error("[HLJS] ",e),this._ready.error(e),zn))).subscribe(),this.options?.themePath&&this.loadTheme(this.options.themePath))}_loadLibrary(){if(this.options){if(this.options.fullLibraryLoader&&this.options.coreLibraryLoader)return Xt(()=>Si.FULL_WITH_CORE_LIBRARY_IMPORTS);if(this.options.fullLibraryLoader&&this.options.languages)return Xt(()=>Si.FULL_WITH_LANGUAGE_IMPORTS);if(this.options.coreLibraryLoader&&!this.options.languages)return Xt(()=>Si.CORE_WITHOUT_LANGUAGE_IMPORTS);if(!this.options.coreLibraryLoader&&this.options.languages)return Xt(()=>Si.LANGUAGE_WITHOUT_CORE_IMPORTS);if(this.options.fullLibraryLoader)return this.loadFullLibrary();if(this.options.coreLibraryLoader&&this.options.languages&&Object.keys(this.options.languages).length)return this.loadCoreLibrary().pipe(Ji(e=>this._loadLanguages(e)))}return Xt(()=>Si.NO_FULL_AND_NO_CORE_IMPORTS)}_loadLanguages(e){let i=Object.entries(this.options.languages).map(([n,s])=>ca(s()).pipe(Gn(c=>e.registerLanguage(n,c))));return Ca(i).pipe(lt(()=>e))}loadCoreLibrary(){return ca(this.options.coreLibraryLoader())}loadFullLibrary(){return ca(this.options.fullLibraryLoader())}loadLineNumbers(){return Wn(this.options.lineNumbersLoader())}setTheme(e){this.isPlatformBrowser&&(this._themeLinkElement?this._themeLinkElement.href=e:this.loadTheme(e))}loadTheme(e){this._themeLinkElement=this.document.createElement("link"),this._themeLinkElement.href=e,this._themeLinkElement.type="text/css",this._themeLinkElement.rel="stylesheet",this._themeLinkElement.media="screen,print",this.document.head.appendChild(this._themeLinkElement)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),ca=t=>Wn(t).pipe(ot(r=>!!r?.default),lt(r=>r.default)),Ah=(()=>{class t{constructor(){this.loader=I(Eh),this.options=I(ua,{optional:!0}),this.hljsSignal=A(null),this.hljs=F(()=>this.hljsSignal()),this.loader.ready.then(e=>{this.hljsSignal.set(e),this.options?.highlightOptions&&e.configure(this.options.highlightOptions)})}highlight(e,i){return Fe(this,null,function*(){return(yield this.loader.ready).highlight(e,i)})}highlightAuto(e,i){return Fe(this,null,function*(){return(yield this.loader.ready).highlightAuto(e,i)})}highlightElement(e){return Fe(this,null,function*(){(yield this.loader.ready).highlightElement(e)})}highlightAll(){return Fe(this,null,function*(){(yield this.loader.ready).highlightAll()})}configure(e){return Fe(this,null,function*(){(yield this.loader.ready).configure(e)})}registerLanguage(e,i){return Fe(this,null,function*(){(yield this.loader.ready).registerLanguage(e,i)})}unregisterLanguage(e){return Fe(this,null,function*(){(yield this.loader.ready).unregisterLanguage(e)})}registerAliases(n,s){return Fe(this,arguments,function*(e,{languageName:i}){(yield this.loader.ready).registerAliases(e,{languageName:i})})}listLanguages(){return Fe(this,null,function*(){return(yield this.loader.ready).listLanguages()})}getLanguage(e){return Fe(this,null,function*(){return(yield this.loader.ready).getLanguage(e)})}safeMode(){return Fe(this,null,function*(){(yield this.loader.ready).safeMode()})}debugMode(){return Fe(this,null,function*(){(yield this.loader.ready).debugMode()})}lineNumbersBlock(e,i){return Fe(this,null,function*(){let n=yield this.loader.ready;n.lineNumbersBlock&&n.lineNumbersBlock(e,i)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),pa;function Fh(){if(!pa)try{pa=window?.trustedTypes?.createPolicy("ngx-highlightjs",{createHTML:t=>t})}catch{}return pa}function Ih(t){return Fh()?.createHTML(t)||t}var $s=(()=>{class t{constructor(){this._hljs=I(Ah),this._nativeElement=I(_e).nativeElement,this._sanitizer=I(Ha),this._platform=I(Ii),Oi(this._platform)&&(ce(()=>{let e=this.code();this.setTextContent(e||""),e&&this.highlightElement(e)}),ce(()=>{let e=this.highlightResult();this.setInnerHTML(e?.value),this.highlighted.emit(e)}))}setTextContent(e){requestAnimationFrame(()=>this._nativeElement.textContent=e)}setInnerHTML(e){requestAnimationFrame(()=>this._nativeElement.innerHTML=Ih(this._sanitizer.sanitize(Ma.HTML,e)||""))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=G({type:t,standalone:!1})}}return t})(),zs=(()=>{class t extends $s{constructor(){super(...arguments),this.code=u(null,{alias:"highlight"}),this.highlightResult=A(null),this.highlighted=new Ht}highlightElement(e){return Fe(this,null,function*(){let i=yield this._hljs.highlight(e,{language:this.language,ignoreIllegals:this.ignoreIllegals});this.highlightResult.set(i)})}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=Qe(t)))(n||t)}})()}static{this.\u0275dir=G({type:t,selectors:[["","highlight",""]],hostVars:2,hostBindings:function(i,n){i&2&&te("hljs",!0)},inputs:{code:[1,"highlight","code"],language:"language",ignoreIllegals:[2,"ignoreIllegals","ignoreIllegals",ni]},outputs:{highlighted:"highlighted"},features:[We([{provide:$s,useExisting:t}]),Nt,ue]})}}return t})();var Di=(()=>{class t{constructor(){this.language=u.required(),this.code=u(""),this.styled=u(!1,{transform:e=>M(e)}),this.noScroll=u(!1,{transform:e=>M(e)}),this.langClass=F(()=>`lang-${this.language()}`)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-code"]],inputs:{language:[1,"language"],code:[1,"code"],styled:[1,"styled"],noScroll:[1,"noScroll"]},decls:3,vars:8,consts:[[3,"highlight","language"]],template:function(i,n){i&1&&(o(0,"pre"),y(1,"code",0),l(2,`
`),a()),i&2&&(te("styled",n.styled())("no-scroll",n.noScroll()),d(),me(n.langClass()),m("highlight",n.code())("language",n.language()))},dependencies:[zs],styles:["pre[_ngcontent-%COMP%]{padding:1.25rem;max-width:100%;overflow:auto}.styled[_ngcontent-%COMP%]{border-radius:.5rem;border:1px solid var(--ard-detail-ultralight);margin:1.25rem 0}.no-scroll[_ngcontent-%COMP%]{max-width:max-content;overflow:initial}"]})}}return t})();var Ks=Ai(da());var Mh=["idLink","","id",""],kh=["*"],Ws=(()=>{class t{constructor(){this.router=I(on)}onClick(e){let i=e.target.parentElement;if(i){for(;!i.id;)if(i=i.parentElement,!i)return;wi("#"+i.id,{offset:96,noHighlight:!0}),this.router.navigate([],{fragment:i.id})}}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["","idLink","","id",""],["h1","id",""],["h2","id",""],["h3","id",""],["h4","id",""],["h5","id",""],["h6","id",""]],attrs:Mh,ngContentSelectors:kh,decls:4,vars:0,consts:[["color","none",3,"click"]],template:function(i,n){i&1&&(j(),o(0,"ard-icon-button",0),_("click",function(c){return n.onClick(c)}),o(1,"ard-icon"),l(2,"tag"),a()(),L(3))},dependencies:[yt,vt,Le,Ne],styles:["[_nghost-%COMP%]{position:relative}ard-icon-button[_ngcontent-%COMP%]{opacity:0;appearance:none;position:absolute;right:100%;top:50%;transform:translateY(-50%);font-size:.625em}ard-icon-button[_ngcontent-%COMP%]   ard-icon[_ngcontent-%COMP%]{color:var(--ard-text3)}[_nghost-%COMP%]:hover   ard-icon-button[_ngcontent-%COMP%]{opacity:1;appearance:auto}"]})}}return t})();var Ph=["appAutoId",""],Vh=["*"],Ct=(()=>{class t{ngAfterViewInit(){this._wasViewInit=!0,this._setElementId()}constructor(){this.elementRef=I(_e),this.autoIdActive=u(!1,{transform:e=>M(e),alias:"appAutoId"}),this.forcedId=u(null),this.idPrefix=u("",{transform:this._toKebab}),this.idText=A(""),this._wasViewInit=!1,ce(()=>{this._setElementId()})}_toKebab(e){return(0,Ks.kebab)(e.replace(/[\s\.]+/g," ").replace(/[^\w\- ]/gi,""))}_setElementId(){if(this._wasViewInit)return;let i=this.elementRef.nativeElement.innerText.replace(/tag\x0A/,"");i&&this.idText.set(this._toKebab(i))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["","appAutoId",""]],inputs:{autoIdActive:[1,"appAutoId","autoIdActive"],forcedId:[1,"forcedId"],idPrefix:[1,"idPrefix"]},attrs:Ph,ngContentSelectors:Vh,decls:2,vars:1,consts:[["idLink","",3,"id"]],template:function(i,n){if(i&1&&(j(),o(0,"div",0),L(1),a()),i&2){let s;m("id",(s=n.forcedId())!==null&&s!==void 0?s:n.idText())}},dependencies:[Ws],encapsulation:2})}}return t})();var Rh=["*"],rt=(()=>{class t{constructor(){this.htmlId=u(null),this.idPrefix=u("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-h1"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:Rh,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(j(),o(0,"h1",0),L(1),a()),i&2&&m("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return t})();var Lh=["*"],Rt=(()=>{class t{constructor(){this.htmlId=u(null),this.idPrefix=u("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-h2"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:Lh,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(j(),o(0,"h2",0),L(1),a()),i&2&&m("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return t})();var Bh=["*"],Lt=(()=>{class t{constructor(){this.htmlId=u(null),this.idPrefix=u("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-h3"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:Bh,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(j(),o(0,"h3",0),L(1),a()),i&2&&m("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return t})();var Hh=["*"],Bn=(()=>{class t{constructor(){this.htmlId=u(null),this.idPrefix=u("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-h4"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:Hh,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(j(),o(0,"h4",0),L(1),a()),i&2&&m("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return t})();var Nh=["*"],Hn=(()=>{class t{constructor(){this.htmlId=u(null),this.idPrefix=u("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-h5"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:Nh,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(j(),o(0,"h5",0),L(1),a()),i&2&&m("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return t})();var Yh=["*"],Un=(()=>{class t{constructor(){this.htmlId=u(null),this.idPrefix=u("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-h6"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:Yh,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(j(),o(0,"h6",0),L(1),a()),i&2&&m("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return t})();var ht=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[ie,Ct]})}}return t})();jt(rt,[Ct],[]);jt(Rt,[Ct],[]);jt(Lt,[Ct],[]);jt(Bn,[Ct],[]);jt(Hn,[Ct],[]);jt(Un,[Ct],[]);var zh=(t,r)=>r.name,bt=(t,r)=>({$implicit:t,prefix:r}),Wh=(t,r)=>({$implicit:t,prefix:r,headingType:"h6",headingText:"Template Context"}),fa=t=>({$implicit:t}),Kh=(t,r)=>({$implicit:t,headingType:"h5",prefix:r}),qh=(t,r)=>({$implicit:t,isTypeParams:!0,headingType:"h4",prefix:r}),Qh=(t,r,e)=>({$implicit:t,headingType:r,prefix:e}),Gh=(t,r,e)=>({$implicit:t,isTypeParams:!0,headingType:r,prefix:e}),Xh=(t,r)=>({$implicit:t,isTypeParams:!0,headingType:"h5",prefix:r}),qs=(t,r)=>({$implicit:t,headingType:"h6",prefix:r});function Zh(t,r){if(t&1&&y(0,"p",8),t&2){let e=f().$implicit;m("innerHTML",e.description,se)}}function Jh(t,r){if(t&1){let e=N();o(0,"a",9),_("click",function(){T(e);let n=f().$implicit,s=f(2);return w(s.scrollTo("#"+n.exports))}),o(1,"code"),l(2),a()()}if(t&2){let e=f().$implicit;d(2),v(e.exports)}}function ef(t,r){t&1&&l(0),t&2&&v(", ")}function tf(t,r){if(t&1){let e=N();o(0,"a",9),_("click",function(){let n=T(e).$implicit,s=f(4);return w(s.scrollTo("#"+n))}),o(1,"code"),l(2),a()(),g(3,ef,1,1)}if(t&2){let e=r.$implicit,i=r.$index,n=f(2).$implicit;d(2),v(e),d(),C(i!==n.exports.length-1?3:-1)}}function nf(t,r){if(t&1&&B(0,tf,4,2,null,null,Q),t&2){let e=f().$implicit;H(e.exports)}}function rf(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),l(3),a()(),g(4,Zh,1,1,"p",8),o(5,"p"),l(6," Exports: "),g(7,Jh,3,1,"a")(8,nf,2,0),a()()),t&2){let e=r.$implicit,i=f(2);d(3),v(e.name),d(),C(e.description?4:-1),d(3),C(i.isString(e.exports)?7:8)}}function af(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),l(2,"Modules"),a(),B(3,rf,9,3,"div",7,Q),a()),t&2){let e=f();d(3),H(e.data.modules)}}function of(t,r){if(t&1&&y(0,"p",8),t&2){let e=f().$implicit;m("innerHTML",e.description,se)}}function sf(t,r){if(t&1){let e=N();l(0," Exported from: "),o(1,"a",9),_("click",function(){T(e);let n=f().$implicit,s=f(2);return w(s.scrollTo("#"+n.exportedFrom))}),o(2,"code"),l(3),a()()}if(t&2){let e=f().$implicit;d(3),v(e.exportedFrom)}}function lf(t,r){t&1&&l(0," This component is standalone and needs to be imported separately. ")}function df(t,r){}function cf(t,r){if(t&1&&g(0,df,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(14);m("ngTemplateOutlet",i)("ngTemplateOutletContext",we(2,bt,e.inputs,e.name))}}function pf(t,r){}function uf(t,r){if(t&1&&g(0,pf,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(16);m("ngTemplateOutlet",i)("ngTemplateOutletContext",we(2,bt,e.twoWayBindings,e.name))}}function mf(t,r){}function hf(t,r){if(t&1&&g(0,mf,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(18);m("ngTemplateOutlet",i)("ngTemplateOutletContext",we(2,bt,e.outputs,e.name))}}function ff(t,r){if(t&1&&y(0,"p",8),t&2){let e=f(3).$implicit;m("innerHTML",e.description,se)}}function gf(t,r){}function _f(t,r){if(t&1&&g(0,gf,0,0,"ng-template",10),t&2){let e=f().$implicit,i=f(2).$implicit;f(2);let n=V(22);m("ngTemplateOutlet",n)("ngTemplateOutletContext",we(2,Wh,e.context,i.name+"template"+e.name))}}function vf(t,r){if(t&1&&(o(0,"app-h6",11),l(1,"Template Context"),a(),o(2,"p"),l(3,"This template has no own context properties."),a()),t&2){let e=f().$implicit,i=f(2).$implicit;m("idPrefix",i.name+"template"+e.name)}}function yf(t,r){if(t&1&&(o(0,"app-h5",11),l(1),a(),g(2,ff,1,1,"p",8),o(3,"p"),l(4," Selector: "),o(5,"code"),l(6),a()(),g(7,_f,1,5,null,10)(8,vf,4,1),o(9,"app-h6",11),l(10,"Default HTML Implementation"),a(),y(11,"app-code",12)),t&2){let e=r.$implicit,i=f(2).$implicit;m("idPrefix",i.name+"template"),d(),v(e.name),d(),C(e.description?2:-1),d(4),v(i.selector),d(),C(e.context!=null&&e.context.length?7:8),d(2),m("idPrefix",i.name+"template"+e.name),d(2),m("code",e.defaultHtmlContent)}}function Cf(t,r){if(t&1&&(o(0,"app-h4",11),l(1,"Customization Templates"),a(),B(2,yf,12,7,null,null,zh)),t&2){let e=f().$implicit;m("idPrefix",e.name),d(2),H(e.templates)}}function bf(t,r){t&1&&(o(0,"i"),l(1,"default"),a())}function xf(t,r){if(t&1&&(o(0,"code"),l(1),a()),t&2){let e=f().$implicit;d(),v(e.selector)}}function Tf(t,r){if(t&1&&(o(0,"tr")(1,"td"),g(2,bf,2,0,"i")(3,xf,2,1,"code"),a(),o(4,"td"),y(5,"p",8),a()()),t&2){let e=r.$implicit;d(2),C(e.selector===null?2:3),d(3),m("innerHTML",e.description,se)}}function wf(t,r){if(t&1&&(o(0,"app-h4",11),l(1,"Content Children"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),l(6,"Selector"),a(),o(7,"th"),l(8,"Description"),a()()(),o(9,"tbody"),B(10,Tf,6,2,"tr",null,Q),a()()),t&2){let e=f().$implicit;m("idPrefix",e.name),d(10),H(e.contentChildren)}}function Sf(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),l(3),a()(),g(4,of,1,1,"p",8),o(5,"p"),l(6," Selector: "),o(7,"code"),l(8),a()(),o(9,"p"),g(10,sf,4,1)(11,lf,1,0),a(),g(12,cf,1,5,null,10)(13,uf,1,5,null,10)(14,hf,1,5,null,10)(15,Cf,4,1)(16,wf,12,1),a()),t&2){let e=r.$implicit;d(3),v(e.name),d(),C(e.description?4:-1),d(4),v(e.selector),d(2),C(e.exportedFrom!==null?10:11),d(2),C(e.inputs?12:-1),d(),C(e.twoWayBindings?13:-1),d(),C(e.outputs?14:-1),d(),C(e.templates?15:-1),d(),C(e.contentChildren?16:-1)}}function Df(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),l(2,"Components"),a(),B(3,Sf,17,9,"div",7,Q),a()),t&2){let e=f();d(3),H(e.data.components)}}function Ef(t,r){if(t&1&&y(0,"p",8),t&2){let e=f().$implicit;m("innerHTML",e.description,se)}}function Af(t,r){if(t&1){let e=N();l(0," Exported from: "),o(1,"a",9),_("click",function(){T(e);let n=f().$implicit,s=f(2);return w(s.scrollTo("#"+n.exportedFrom))}),o(2,"code"),l(3),a()()}if(t&2){let e=f().$implicit;d(3),v(e.exportedFrom)}}function Ff(t,r){t&1&&l(0," This directive is standalone and needs to be imported separately. ")}function If(t,r){}function Mf(t,r){if(t&1&&g(0,If,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(14);m("ngTemplateOutlet",i)("ngTemplateOutletContext",we(2,bt,e.inputs,e.name))}}function kf(t,r){}function Pf(t,r){if(t&1&&g(0,kf,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(16);m("ngTemplateOutlet",i)("ngTemplateOutletContext",we(2,bt,e.twoWayBindings,e.name))}}function Vf(t,r){}function Of(t,r){if(t&1&&g(0,Vf,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(18);m("ngTemplateOutlet",i)("ngTemplateOutletContext",we(2,bt,e.outputs,e.name))}}function Rf(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),l(3),a()(),g(4,Ef,1,1,"p",8),o(5,"p"),l(6," Selector: "),o(7,"code"),l(8),a()(),o(9,"p"),g(10,Af,4,1)(11,Ff,1,0),a(),g(12,Mf,1,5,null,10)(13,Pf,1,5,null,10)(14,Of,1,5,null,10),a()),t&2){let e=r.$implicit;d(3),v(e.name),d(),C(e.description?4:-1),d(4),v(e.selector),d(2),C(e.exportedFrom!==null?10:11),d(2),C(e.inputs?12:-1),d(),C(e.twoWayBindings?13:-1),d(),C(e.outputs?14:-1)}}function Lf(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),l(2,"Directives"),a(),B(3,Rf,15,7,"div",7,Q),a()),t&2){let e=f();d(3),H(e.data.directives)}}function Bf(t,r){if(t&1){let e=N();l(0," Exported from: "),o(1,"a",9),_("click",function(){T(e);let n=f().$implicit,s=f(2);return w(s.scrollTo("#"+n.exportedFrom))}),o(2,"code"),l(3),a()()}if(t&2){let e=f().$implicit;d(3),v(e.exportedFrom)}}function Hf(t,r){t&1&&l(0," This pipe is standalone and needs to be imported separately. ")}function Uf(t,r){}function Nf(t,r){if(t&1&&g(0,Uf,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(20);m("ngTemplateOutlet",i)("ngTemplateOutletContext",we(2,bt,e.params,e.name))}}function jf(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),l(3),a()(),y(4,"p",8),o(5,"p"),l(6," Selector: "),o(7,"code"),l(8),a()(),o(9,"p"),g(10,Bf,4,1)(11,Hf,1,0),a(),g(12,Nf,1,5,null,10),a()),t&2){let e=r.$implicit;d(3),v(e.name),d(),m("innerHTML",e.description,se),d(4),v(e.selector),d(2),C(e.exportedFrom!==null?10:11),d(2),C(e.params?12:-1)}}function Yf(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),l(2,"Pipes"),a(),B(3,jf,13,5,"div",7,Q),a()),t&2){let e=f();d(3),H(e.data.pipes)}}function $f(t,r){}function zf(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),l(2,"Classes"),a(),g(3,$f,0,0,"ng-template",10),a()),t&2){let e=f(),i=V(26);d(3),m("ngTemplateOutlet",i)("ngTemplateOutletContext",fe(2,fa,e.data.classes))}}function Wf(t,r){}function Kf(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),l(2,"Services"),a(),g(3,Wf,0,0,"ng-template",10),a()),t&2){let e=f(),i=V(26);d(3),m("ngTemplateOutlet",i)("ngTemplateOutletContext",fe(2,fa,e.data.services))}}function qf(t,r){}function Qf(t,r){if(t&1&&(o(0,"app-h4",11),l(1),a(),g(2,qf,0,0,"ng-template",10)),t&2){let e=r.$implicit,i=r.$index,n=f(2).$implicit;f(2);let s=V(24);m("idPrefix",n.name),d(),E("Overload ",i+1,""),d(),m("ngTemplateOutlet",s)("ngTemplateOutletContext",we(4,Kh,e,n.name+" overload "+(i+1)))}}function Gf(t,r){if(t&1&&B(0,Qf,3,7,null,null,Q),t&2){let e=f().$implicit;H(e.overloads)}}function Xf(t,r){}function Zf(t,r){if(t&1&&g(0,Xf,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(24);m("ngTemplateOutlet",i)("ngTemplateOutletContext",we(2,bt,e,e.name))}}function Jf(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),l(3),a()(),g(4,Gf,2,0)(5,Zf,1,5,null,10),a()),t&2){let e=r.$implicit,i=f(2);d(3),v(e.name),d(),C(i.isOverloadedFunction(e)?4:5)}}function eg(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),l(2,"Functions"),a(),B(3,Jf,6,2,"div",7,Q),a()),t&2){let e=f();d(3),H(e.data.functions)}}function tg(t,r){}function ig(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),l(2,"Interfaces"),a(),g(3,tg,0,0,"ng-template",10),a()),t&2){let e=f(),i=V(26);d(3),m("ngTemplateOutlet",i)("ngTemplateOutletContext",fe(2,fa,e.data.interfaces))}}function ng(t,r){}function rg(t,r){if(t&1&&g(0,ng,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(20);m("ngTemplateOutlet",i)("ngTemplateOutletContext",we(2,qh,e.typeParams,e.name))}}function ag(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),l(3),a()(),y(4,"p",8)(5,"app-code",13),g(6,rg,1,5,null,10),a()),t&2){let e=r.$implicit;d(3),v(e.name),d(),m("innerHTML",e.description,se),d(),m("code",e.definition),d(),C(e.typeParams!=null&&e.typeParams.length?6:-1)}}function og(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),l(2,"Types"),a(),B(3,ag,7,4,"div",7,Q),a()),t&2){let e=f();d(3),H(e.data.types)}}function sg(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),l(3),a()(),y(4,"p",8)(5,"app-code",13),a()),t&2){let e=r.$implicit;d(3),v(e.name),d(),m("innerHTML",e.description,se),d(),m("code",e.definition)}}function lg(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),l(2,"Enums"),a(),B(3,sg,6,3,"div",7,Q),a()),t&2){let e=f();d(3),H(e.data.enums)}}function dg(t,r){t&1&&l(0),t&2&&v(" All properties are optional, and missing properties will be set to default values.")}function cg(t,r){if(t&1){let e=N();o(0,"div",7)(1,"app-h3")(2,"code"),l(3),a()(),y(4,"p",8),o(5,"p"),l(6," Requires a value of type "),o(7,"a",9),_("click",function(){let n=T(e).$implicit,s=f(2);return w(s.scrollTo("#"+n.type))}),o(8,"code"),l(9),a()(),l(10,"."),g(11,dg,1,1),a()()}if(t&2){let e=r.$implicit;d(3),v(e.name),d(),m("innerHTML",e.description,se),d(5),v(e.type),d(2),C(e.allOptional?11:-1)}}function pg(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),l(2,"Injection Tokens"),a(),B(3,cg,12,4,"div",7,Q),a()),t&2){let e=f();d(3),H(e.data.injectionTokens)}}function ug(t,r){t&1&&(o(0,"ard-icon",14),l(1,"delete"),a())}function mg(t,r){t&1&&l(0," Required. ")}function hg(t,r){if(t&1&&(l(0," Optional. Defaults to "),y(1,"code",8),l(2,". ")),t&2){let e=f().$implicit;d(),m("innerHTML",e.default,se)}}function fg(t,r){if(t&1&&(o(0,"tr")(1,"td"),g(2,ug,2,0,"ard-icon",14),o(3,"code"),l(4),a()(),o(5,"td")(6,"code"),l(7),a()(),o(8,"td"),y(9,"p",8),o(10,"p"),g(11,mg,1,0)(12,hg,3,1),a()()()),t&2){let e=r.$implicit;d(2),C(e.deprecated?2:-1),d(2),v(e.name),d(3),v(e.type),d(2),m("innerHTML",e.description,se),d(2),C(e.required?11:e.default?12:-1)}}function gg(t,r){if(t&1&&(o(0,"app-h4",11),l(1,"Inputs"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),l(6,"Name"),a(),o(7,"th"),l(8,"Type"),a(),o(9,"th"),l(10,"Description"),a()()(),o(11,"tbody"),B(12,fg,13,5,"tr",null,Q),a()()),t&2){let e=r.$implicit,i=r.prefix;m("idPrefix",i),d(12),H(e)}}function _g(t,r){t&1&&(o(0,"ard-icon",15),l(1,"delete"),a())}function vg(t,r){t&1&&l(0," Required. ")}function yg(t,r){if(t&1&&(l(0," Optional. Defaults to "),y(1,"code",8),l(2,". ")),t&2){let e=f().$implicit;d(),m("innerHTML",e.default,se)}}function Cg(t,r){if(t&1&&(o(0,"tr")(1,"td"),g(2,_g,2,0,"ard-icon",15),o(3,"code"),l(4),a()(),o(5,"td")(6,"code"),l(7),a()(),o(8,"td"),y(9,"p",8),o(10,"p"),g(11,vg,1,0)(12,yg,3,1),a()()()),t&2){let e=r.$implicit;d(2),C(e.deprecated?2:-1),d(2),v(e.name),d(3),v(e.type),d(2),m("innerHTML",e.description,se),d(2),C(e.required?11:e.default?12:-1)}}function bg(t,r){if(t&1&&(o(0,"app-h4",11),l(1,"Two-way bindings"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),l(6,"Name"),a(),o(7,"th"),l(8,"Type"),a(),o(9,"th"),l(10,"Description"),a()()(),o(11,"tbody"),B(12,Cg,13,5,"tr",null,Q),a()()),t&2){let e=r.$implicit,i=r.prefix;m("idPrefix",i),d(12),H(e)}}function xg(t,r){t&1&&(o(0,"ard-icon",16),l(1,"delete"),a())}function Tg(t,r){if(t&1&&(o(0,"tr")(1,"td"),g(2,xg,2,0,"ard-icon",16),o(3,"code"),l(4),a()(),o(5,"td")(6,"code"),l(7),a()(),o(8,"td"),y(9,"p",8),a()()),t&2){let e=r.$implicit;d(2),C(e.deprecated?2:-1),d(2),v(e.name),d(3),v(e.type),d(2),m("innerHTML",e.description,se)}}function wg(t,r){if(t&1&&(o(0,"app-h4",11),l(1,"Outputs"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),l(6,"Name"),a(),o(7,"th"),l(8,"Emitted type"),a(),o(9,"th"),l(10,"Description"),a()()(),o(11,"tbody"),B(12,Tg,10,4,"tr",null,Q),a()()),t&2){let e=r.$implicit,i=r.prefix;m("idPrefix",i),d(12),H(e)}}function Sg(t,r){if(t&1&&(o(0,"app-h6",11),l(1),a()),t&2){let e=f(),i=e.isTypeParams,n=e.prefix;m("idPrefix",n),d(),E("",i?"Type":""," Params")}}function Dg(t,r){if(t&1&&(o(0,"app-h5",11),l(1),a()),t&2){let e=f(),i=e.isTypeParams,n=e.prefix;m("idPrefix",n),d(),E("",i?"Type":""," Params")}}function Eg(t,r){if(t&1&&(o(0,"app-h4",11),l(1),a()),t&2){let e=f(),i=e.isTypeParams,n=e.prefix;m("idPrefix",n),d(),E("",i?"Type":""," Params")}}function Ag(t,r){t&1&&(o(0,"ard-icon",17),l(1,"delete"),a())}function Fg(t,r){t&1&&l(0," Required. ")}function Ig(t,r){t&1&&l(0," (merged with provided object) ")}function Mg(t,r){if(t&1&&(l(0," Optional. Defaults to "),y(1,"code",8),g(2,Ig,1,0),l(3,". ")),t&2){let e=f().$implicit;d(),m("innerHTML",e.default,se),d(),C(e.isMergedObject?2:-1)}}function kg(t,r){if(t&1&&(o(0,"tr")(1,"td"),g(2,Ag,2,0,"ard-icon",17),o(3,"code"),l(4),a()(),o(5,"td")(6,"code"),l(7),a()(),o(8,"td"),y(9,"p",8),o(10,"p"),g(11,Fg,1,0)(12,Mg,4,2),a()()()),t&2){let e=r.$implicit;d(2),C(e.deprecated?2:-1),d(2),v(e.name),d(3),v(e.type),d(2),m("innerHTML",e.description,se),d(2),C(e.required?11:e.required===!1?12:-1)}}function Pg(t,r){if(t&1&&(o(0,"table")(1,"thead")(2,"tr")(3,"th"),l(4,"Name"),a(),o(5,"th"),l(6),a(),o(7,"th"),l(8,"Description"),a()()(),o(9,"tbody"),B(10,kg,13,5,"tr",null,Q),a()()),t&2){let e=f(),i=e.$implicit,n=e.isTypeParams;d(6),v(n?"Extends":"Type"),d(4),H(i)}}function Vg(t,r){t&1&&(o(0,"p"),l(1,"No params."),a())}function Og(t,r){if(t&1&&g(0,Sg,2,2,"app-h6",11)(1,Dg,2,2,"app-h5",11)(2,Eg,2,2,"app-h4",11)(3,Pg,12,1,"table")(4,Vg,2,0,"p"),t&2){let e=r.$implicit,i=r.headingType;C(i==="h6"?0:i==="h5"?1:2),d(3),C(e!=null&&e.length?3:4)}}function Rg(t,r){if(t&1&&(o(0,"app-h6",11),l(1),a()),t&2){let e,i=f(),n=i.headingText,s=i.prefix;m("idPrefix",s),d(),v((e=n)!==null&&e!==void 0?e:"Properties")}}function Lg(t,r){if(t&1&&(o(0,"app-h5",11),l(1),a()),t&2){let e,i=f(),n=i.headingText,s=i.prefix;m("idPrefix",s),d(),v((e=n)!==null&&e!==void 0?e:"Properties")}}function Bg(t,r){if(t&1&&(o(0,"app-h4",11),l(1),a()),t&2){let e,i=f(),n=i.headingText,s=i.prefix;m("idPrefix",s),d(),v((e=n)!==null&&e!==void 0?e:"Properties")}}function Hg(t,r){t&1&&(o(0,"ard-icon",18),l(1,"delete"),a())}function Ug(t,r){if(t&1&&(o(0,"tr")(1,"td"),g(2,Hg,2,0,"ard-icon",18),o(3,"code"),l(4),a()(),o(5,"td")(6,"code"),l(7),a()(),o(8,"td"),y(9,"p",8),a()()),t&2){let e=r.$implicit;d(2),C(e.deprecated?2:-1),d(2),v(e.name),d(3),v(e.type),d(2),m("innerHTML",e.description,se)}}function Ng(t,r){if(t&1&&(g(0,Rg,2,2,"app-h6",11)(1,Lg,2,2,"app-h5",11)(2,Bg,2,2,"app-h4",11),o(3,"table")(4,"thead")(5,"tr")(6,"th"),l(7,"Name"),a(),o(8,"th"),l(9,"Type"),a(),o(10,"th"),l(11,"Description"),a()()(),o(12,"tbody"),B(13,Ug,10,4,"tr",null,Q),a()()),t&2){let e=r.$implicit,i=r.headingType;C(i==="h6"?0:i==="h5"?1:2),d(13),H(e)}}function jg(t,r){}function Yg(t,r){if(t&1&&g(0,jg,0,0,"ng-template",10),t&2){let e=f(),i=e.$implicit,n=e.headingType,s=e.prefix;f();let c=V(20);m("ngTemplateOutlet",c)("ngTemplateOutletContext",rr(2,Gh,i.typeParams,n,s))}}function $g(t,r){}function zg(t,r){if(t&1&&(o(0,"app-h6",11),l(1,"Return type"),a()),t&2){let e=f().prefix;m("idPrefix",e)}}function Wg(t,r){if(t&1&&(o(0,"app-h5",11),l(1,"Return type"),a()),t&2){let e=f().prefix;m("idPrefix",e)}}function Kg(t,r){if(t&1&&(o(0,"app-h4",11),l(1,"Return type"),a()),t&2){let e=f().prefix;m("idPrefix",e)}}function qg(t,r){if(t&1&&(y(0,"p",8),g(1,Yg,1,6,null,10)(2,$g,0,0,"ng-template",10)(3,zg,2,1,"app-h6",11)(4,Wg,2,1,"app-h5",11)(5,Kg,2,1,"app-h4",11),o(6,"p"),l(7," Return type: "),o(8,"code"),l(9),a()()),t&2){let e=r.$implicit,i=r.headingType,n=r.prefix;f();let s=V(20);m("innerHTML",e.description,se),d(),C(e.typeParams!=null&&e.typeParams.length?1:-1),d(),m("ngTemplateOutlet",s)("ngTemplateOutletContext",rr(6,Qh,e.params,i,n)),d(),C(i==="h6"?3:i==="h5"?4:5),d(6),v(e.returnType)}}function Qg(t,r){if(t&1&&(o(0,"p"),l(1," Provided in: "),o(2,"code"),l(3),a()()),t&2){let e=f().$implicit;d(3),E("",e.providedIn," ")}}function Gg(t,r){if(t&1&&(o(0,"p"),l(1," Extends: "),o(2,"code"),l(3),a()()),t&2){let e=f().$implicit;d(3),E("",e.extends," ")}}function Xg(t,r){}function Zg(t,r){if(t&1&&g(0,Xg,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(20);m("ngTemplateOutlet",i)("ngTemplateOutletContext",we(2,Xh,e.typeParams,e.name))}}function Jg(t,r){}function e_(t,r){if(t&1&&g(0,Jg,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(22);m("ngTemplateOutlet",i)("ngTemplateOutletContext",we(2,bt,e.properties,e.name))}}function t_(t,r){}function i_(t,r){if(t&1&&(o(0,"app-h5",11)(1,"code"),l(2),a(),l(3),a(),g(4,t_,0,0,"ng-template",10)),t&2){let e=r.$implicit,i=r.$index,n=f(2).$implicit,s=f(2).$implicit;f(2);let c=V(24);m("idPrefix",s.name+" methods"),d(2),v(n.name),d(),E(" (overload ",i+1,") "),d(),m("ngTemplateOutlet",c)("ngTemplateOutletContext",we(5,qs,e,s.name+" methods "+n.name+" overload "+(i+1)))}}function n_(t,r){if(t&1&&B(0,i_,5,8,null,null,Q),t&2){let e=f().$implicit;H(e.overloads)}}function r_(t,r){}function a_(t,r){if(t&1&&(o(0,"app-h5",11)(1,"code"),l(2),a()(),g(3,r_,0,0,"ng-template",10)),t&2){let e=f().$implicit,i=f(2).$implicit;f(2);let n=V(24);m("idPrefix",i.name+" methods"),d(2),v(e.name),d(),m("ngTemplateOutlet",n)("ngTemplateOutletContext",we(4,qs,e,i.name+" methods "+e.name))}}function o_(t,r){if(t&1&&g(0,n_,2,0)(1,a_,4,7),t&2){let e=r.$implicit,i=f(4);C(i.isOverloadedFunction(e)?0:1)}}function s_(t,r){if(t&1&&(o(0,"app-h4",11),l(1,"Methods"),a(),B(2,o_,2,1,null,null,Q)),t&2){let e=f().$implicit;m("idPrefix",e.name),d(2),H(e.methods)}}function l_(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),l(3),a()(),g(4,Qg,4,1,"p")(5,Gg,4,1,"p"),y(6,"p",8),g(7,Zg,1,5,null,10)(8,e_,1,5,null,10)(9,s_,4,1),a()),t&2){let e=r.$implicit;d(3),v(e.name),d(),C(e.providedIn?4:-1),d(),C(e.extends?5:-1),d(),m("innerHTML",e.description,se),d(),C(e.typeParams!=null&&e.typeParams.length?7:-1),d(),C(e.properties!=null&&e.properties.length?8:-1),d(),C(e.methods!=null&&e.methods.length?9:-1)}}function d_(t,r){if(t&1&&B(0,l_,10,7,"div",7,Q),t&2){let e=r.$implicit;H(e)}}var Qs=(()=>{class t{constructor(){this._route=I(ri),this.data=this._route.snapshot.data}scrollTo(e){wi(e,{offset:"20%"})}isString(e){return!Array.isArray(e)}isOverloadedFunction(e){return"overloads"in e}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-api-page"]],decls:27,vars:12,consts:[["inputsTable",""],["twoWayBindingsTable",""],["outputsTable",""],["paramsTable",""],["propertiesTable",""],["functionTable",""],["classOrInterface",""],[1,"item-container"],[3,"innerHTML"],[3,"click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"idPrefix"],["language","xml","styled","",3,"code"],["language","typescript","styled","",3,"code"],["title","This input is deprecated."],["title","This two-way binding is deprecated."],["title","This output is deprecated."],["title","This param is deprecated."],["title","This property is deprecated."]],template:function(i,n){i&1&&(o(0,"app-h1"),l(1),a(),g(2,af,5,0,"section")(3,Df,5,0,"section")(4,Lf,5,0,"section")(5,Yf,5,0,"section")(6,zf,4,4,"section")(7,Kf,4,4,"section")(8,eg,5,0,"section")(9,ig,4,4,"section")(10,og,5,0,"section")(11,lg,5,0,"section")(12,pg,5,0,"section")(13,gg,14,1,"ng-template",null,0,re)(15,bg,14,1,"ng-template",null,1,re)(17,wg,14,1,"ng-template",null,2,re)(19,Og,5,2,"ng-template",null,3,re)(21,Ng,15,1,"ng-template",null,4,re)(23,qg,10,10,"ng-template",null,5,re)(25,d_,2,0,"ng-template",null,6,re)),i&2&&(d(),E("API reference for ",n.data.name," \u2014 Ardium UI"),d(),C(n.data.modules?2:-1),d(),C(n.data.components?3:-1),d(),C(n.data.directives?4:-1),d(),C(n.data.pipes?5:-1),d(),C(n.data.classes?6:-1),d(),C(n.data.services?7:-1),d(),C(n.data.functions?8:-1),d(),C(n.data.interfaces?9:-1),d(),C(n.data.types?10:-1),d(),C(n.data.enums?11:-1),d(),C(n.data.injectionTokens?12:-1))},dependencies:[Le,Ne,ie,Pe,Ze,Di,ht,rt,Rt,Lt,Bn,Hn,Un],styles:[`app-api-page{font-size:.9375rem}app-api-page h1{padding-bottom:1rem}app-api-page h2{font-weight:300;font-size:1.5rem;width:100%;border-bottom:1px solid var(--ard-detail-ultralight);padding-bottom:.5rem;margin-bottom:1rem}app-api-page h3{font-weight:500;font-size:1.25rem}app-api-page td{position:relative;min-width:100px}app-api-page table ard-icon{position:absolute;right:100%;color:rgb(var(--ard-danger-700))}app-api-page p ul{padding-bottom:0}
`],encapsulation:2})}}return t})();var Nn=(()=>{class t{constructor(){this.contentToCopy=u.required()}executeCopy(){navigator.clipboard.writeText(this.contentToCopy())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-copy-button"]],inputs:{contentToCopy:[1,"contentToCopy"]},decls:3,vars:0,consts:[[1,"copy-button",3,"click"]],template:function(i,n){i&1&&(o(0,"ard-icon-button",0),_("click",function(){return n.executeCopy()}),o(1,"ard-icon"),l(2,"content-copy"),a()())},dependencies:[yt,vt,Le,Ne],encapsulation:2})}}return t})();var c_=["containerLeft"],p_=["containerRight"],u_=[[["","side","left"]],[["","side","right"]]],m_=["[side='left']","[side='right']"];function h_(t,r){if(t&1&&y(0,"app-copy-button",8),t&2){let e=f();m("contentToCopy",e.contentToCopyLeft())}}function f_(t,r){}function g_(t,r){if(t&1&&g(0,f_,0,0,"ng-template",9),t&2){f();let e=V(22);m("ngTemplateOutlet",e)}}function __(t,r){if(t&1&&y(0,"app-copy-button",8),t&2){let e=f();m("contentToCopy",e.contentToCopyRight())}}function v_(t,r){}function y_(t,r){if(t&1&&g(0,v_,0,0,"ng-template",9),t&2){f();let e=V(22);m("ngTemplateOutlet",e)}}function C_(t,r){if(t&1){let e=N();o(0,"ard-icon-button",12),_("click",function(){T(e);let n=f(2);return w(n.scrollSync.set(!n.scrollSync()))}),y(1,"ard-icon",13),a()}if(t&2){let e=f(2);m("title",(e.scrollSync(),"Turn off scroll sync")),d(),m("icon",e.scrollSync()?"sync":"sync_disabled")}}function b_(t,r){if(t&1){let e=N();o(0,"ard-icon-button",12),_("click",function(){T(e);let n=f(2);return w(n.verticalLayout.set(!n.verticalLayout()))}),y(1,"ard-icon",13),a()}if(t&2){let e=f(2);m("title",e.verticalLayout()?"Current view: vertical":"Current view: side-by-side"),d(),m("icon",e.verticalLayout()?"splitscreen":"view_column_2")}}function x_(t,r){if(t&1&&g(0,C_,2,2,"ard-icon-button",11)(1,b_,2,2,"ard-icon-button",11),t&2){let e=f();C(e.allowScrollSync()?0:-1),d(),C(e.allowLayoutChange()?1:-1)}}var Qi={Off:"off",Left:"left",Right:"right",Both:"both"},Gs=(()=>{class t{constructor(){this.containerLeft=De("containerLeft"),this.containerRight=De("containerRight"),this.textLeft=u.required(),this.textRight=u.required(),this.contentToCopyLeft=u(""),this.contentToCopyRight=u(""),this.allowScrollSync=u(!1,{transform:e=>M(e)}),this.allowLayoutChange=u(!1,{transform:e=>M(e)}),this.allowCopy=u(Qi.Both),this.allowCopyLeft=F(()=>this.allowCopy()===Qi.Left||this.allowCopy()===Qi.Both),this.allowCopyRight=F(()=>this.allowCopy()===Qi.Right||this.allowCopy()===Qi.Both),this.scrollSync=dt(!1),this.verticalLayout=dt(!1)}onContainerLeftScroll(){if(this.scrollSync())return;let[e,i]=[this.containerLeft(),this.containerRight()];!e||!i||i.nativeElement.scrollTo(e.nativeElement.scrollLeft,0)}onContainerRightScroll(){if(this.scrollSync())return;let[e,i]=[this.containerLeft(),this.containerRight()];!e||!i||e.nativeElement.scrollTo(i.nativeElement.scrollLeft,0)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-two-pane-container"]],viewQuery:function(i,n){i&1&&(Ee(n.containerLeft,c_,5),Ee(n.containerRight,p_,5)),i&2&&le(2)},inputs:{textLeft:[1,"textLeft"],textRight:[1,"textRight"],contentToCopyLeft:[1,"contentToCopyLeft"],contentToCopyRight:[1,"contentToCopyRight"],allowScrollSync:[1,"allowScrollSync"],allowLayoutChange:[1,"allowLayoutChange"],allowCopy:[1,"allowCopy"],scrollSync:[1,"scrollSync"],verticalLayout:[1,"verticalLayout"]},outputs:{scrollSync:"scrollSyncChange",verticalLayout:"verticalLayoutChange"},ngContentSelectors:m_,decls:23,vars:8,consts:[["containerLeft",""],["containerRight",""],["buttons",""],[1,"two-pane-container"],[1,"content-container"],[1,"top-bar"],[1,"heading"],[1,"buttons"],[3,"contentToCopy"],[3,"ngTemplateOutlet"],[1,"content",3,"scroll"],[3,"title"],[3,"click","title"],[3,"icon"]],template:function(i,n){if(i&1){let s=N();j(u_),o(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6),l(4),a(),o(5,"div",7),g(6,h_,1,1,"app-copy-button",8)(7,g_,1,1,null,9),a()(),o(8,"div",10,0),_("scroll",function(){return T(s),w(n.onContainerLeftScroll())}),L(10),a()(),o(11,"div",4)(12,"div",5)(13,"div",6),l(14),a(),o(15,"div",7),g(16,__,1,1,"app-copy-button",8)(17,y_,1,1,null,9),a()(),o(18,"div",10,1),_("scroll",function(){return T(s),w(n.onContainerRightScroll())}),L(20,1),a()()(),g(21,x_,2,2,"ng-template",null,2,re)}i&2&&(te("vertical",n.verticalLayout()),d(4),v(n.textLeft()),d(2),C(n.allowCopyLeft()?6:-1),d(),C(n.verticalLayout()?7:-1),d(7),v(n.textRight()),d(2),C(n.allowCopyRight()?16:-1),d(),C(n.verticalLayout()?-1:17))},dependencies:[ie,Pe,Nn,yt,vt,Le,Ne],styles:[".two-pane-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;border-radius:.5rem;border:1px solid var(--ard-detail-ultralight);margin:1.25rem 0;overflow:hidden}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{max-width:100%;overflow:hidden}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]:first-of-type{border-right:1px solid var(--ard-detail-ultralight);position:relative}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{padding:.5rem 1.25rem 0;font-weight:500}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;position:relative;top:.25rem;right:.25rem}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{max-width:100%;overflow:auto}.two-pane-container.vertical[_ngcontent-%COMP%]{grid-template-columns:1fr}.two-pane-container.vertical[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]:first-of-type{border-right:none;border-bottom:1px solid var(--ard-detail-ultralight)}"]})}}return t})();var T_=["*"],Xs=(()=>{class t{constructor(){this.code=u.required(),this.codeLanguage=u.required()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-example-with-result"]],inputs:{code:[1,"code"],codeLanguage:[1,"codeLanguage"]},ngContentSelectors:T_,decls:4,vars:3,consts:[["textLeft","Code","textRight","Result","allowCopy","left",3,"verticalLayout"],["side","left","styled","false","noScroll","",3,"language","code"],["side","right"]],template:function(i,n){i&1&&(j(),o(0,"app-two-pane-container",0),y(1,"app-code",1),Mi(2,2),L(3),ki(),a()),i&2&&(m("verticalLayout",!0),d(),m("language",n.codeLanguage())("code",n.code()))},dependencies:[Gs,Di],encapsulation:2})}}return t})();var Zs={FT:"Fatal",NF:"Non-Fatal",IS:"Impossible State",WA:"Warning"};var Js=(()=>{class t{constructor(){this.severity=u.required({alias:"code",transform:e=>{let i=e.slice(4,6);return Zs[i]}})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-exception-severity"]],hostVars:2,hostBindings:function(i,n){i&2&&me("severity-"+n.severity().toLowerCase().replace(" ","-"))},inputs:{severity:[1,"code","severity"]},decls:1,vars:1,template:function(i,n){i&1&&l(0),i&2&&v(n.severity())},styles:["[_nghost-%COMP%]{padding:.125rem .25rem;border-radius:4px}.severity-fatal[_nghost-%COMP%]{background-color:rgb(var(--ard-danger-500));color:var(--ard-text-alt)}.severity-non-fatal[_nghost-%COMP%]{background-color:#ff7707;color:var(--ard-text-alt)}.severity-impossible-state[_nghost-%COMP%]{background-color:#7707ff;color:var(--ard-text-alt)}.severity-warning[_nghost-%COMP%]{background-color:rgb(var(--ard-warn-500));color:var(--ard-text-alt)}"]})}}return t})();var w_=(t,r)=>r.name,S_=(t,r)=>r.code;function D_(t,r){if(t&1&&(o(0,"p"),l(1),a()),t&2){let e=f();d(),E("",e.data.name," doesn't raise any own exceptions.")}}function E_(t,r){if(t&1&&y(0,"p",2),t&2){let e=f().$implicit;m("innerHTML",e.description,se)}}function A_(t,r){if(t&1&&y(0,"p",2),t&2){let e=r.$implicit;m("innerHTML",e,se)}}function F_(t,r){if(t&1&&B(0,A_,1,1,"p",2,Q),t&2){let e=f().$implicit;H(e.description)}}function I_(t,r){if(t&1&&(o(0,"app-example-with-result",3)(1,"p",4),l(2),a()()),t&2){let e=r.$implicit;m("code",e.code)("codeLanguage",e.codeLanguage),d(2),v(e.result)}}function M_(t,r){if(t&1&&B(0,I_,3,3,"app-example-with-result",3,Q),t&2){let e=f().$implicit;H(e.exampleResults)}}function k_(t,r){if(t&1&&(o(0,"app-h3",0)(1,"code"),l(2),a()(),o(3,"p")(4,"strong"),l(5,"Severity: "),a(),y(6,"app-exception-severity",1),a(),y(7,"blockquote",2),g(8,E_,1,1,"p",2)(9,F_,2,0)(10,M_,2,0)),t&2){let e=r.$implicit,i=f(3);m("htmlId",e.code),d(2),E(" ",e.code," "),d(4),m("code",e.code),d(),m("innerHTML",e.exceptionText,se),d(),C(i.isString(e.description)?8:9),d(2),C(e.exampleResults!=null&&e.exampleResults.length?10:-1)}}function P_(t,r){if(t&1&&(o(0,"app-h2"),l(1),a(),B(2,k_,11,6,null,null,S_)),t&2){let e=r.$implicit;d(),v(e.name),d(),H(e.exceptions)}}function V_(t,r){if(t&1&&B(0,P_,4,1,null,null,w_),t&2){let e=f();H(e.data.exceptions)}}var el=(()=>{class t{constructor(){this._route=I(ri),this.data=this._route.snapshot.data}scrollTo(e){wi(e,{offset:"20%"})}isString(e){return!Array.isArray(e)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-exceptions-page"]],decls:4,vars:2,consts:[[3,"htmlId"],[3,"code"],[3,"innerHTML"],[3,"code","codeLanguage"],[1,"example-with-result-result"]],template:function(i,n){i&1&&(o(0,"app-h1"),l(1),a(),g(2,D_,2,1,"p")(3,V_,2,0)),i&2&&(d(),E("Exception list for ",n.data.name," \u2014 Ardium UI"),d(),C(n.data.exceptions!=null&&n.data.exceptions.length?3:2))},dependencies:[Js,Xs,ht,rt,Rt,Lt],styles:[".example-with-result-result[_ngcontent-%COMP%]{padding:1.25rem;font-family:monospace}"]})}}return t})();function O_(t,r){if(t&1&&(o(0,"p"),l(1," Inherits from: "),o(2,"code"),l(3),a()()),t&2){let e=f().$implicit;d(3),v(e.inheritsFrom)}}function R_(t,r){if(t&1&&(o(0,"tr")(1,"td")(2,"code"),l(3),a()(),o(4,"td")(5,"code"),l(6),a()(),o(7,"td"),y(8,"p",0),g(9,O_,4,1,"p"),a()()),t&2){let e=r.$implicit;d(3),v(e.name),d(3),v(e.default),d(2),m("innerHTML",e.description,se),d(),C(e.inheritsFrom?9:-1)}}function L_(t,r){if(t&1&&(o(0,"section")(1,"p"),l(2),a(),o(3,"table")(4,"thead")(5,"tr")(6,"th"),l(7,"Variable"),a(),o(8,"th"),l(9,"Default value"),a(),o(10,"th"),l(11,"Description"),a()()(),o(12,"tbody"),B(13,R_,10,4,"tr",null,Q),a()()()),t&2){let e=f();d(2),E("The following CSS variables can be used to customize the styling of the ",e.data.name," component:"),d(11),H(e.data.variables)}}function B_(t,r){if(t&1&&(o(0,"p"),l(1),a()),t&2){let e=f();d(),E("",e.data.name||"This component"," doesn't have any style customizations.")}}var tl=(()=>{class t{constructor(){this._route=I(ri),this.data=this._route.snapshot.data}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-styling-page"]],decls:4,vars:2,consts:[[3,"innerHTML"]],template:function(i,n){i&1&&(o(0,"app-h1"),l(1),a(),g(2,L_,15,1,"section")(3,B_,2,1,"p")),i&2&&(d(),E("Styling guide for ",n.data.name," \u2014 Ardium UI"),d(),C(n.data.variables&&n.data.variables.length>0?2:3))},dependencies:[Le,ie,Ze,ht,rt],styles:[`app-api-page{font-size:.9375rem}app-api-page h1{padding-bottom:1rem}app-api-page h2{font-weight:300;font-size:1.5rem;width:100%;border-bottom:1px solid var(--ard-detail-ultralight);padding-bottom:.5rem;margin-bottom:1rem}app-api-page h3{font-weight:500;font-size:1.25rem}app-api-page td{position:relative;min-width:100px}app-api-page table ard-icon{position:absolute;right:100%;color:rgb(var(--ard-danger-700))}
`],encapsulation:2})}}return t})();var il=(()=>{class t{constructor(){this._router=I(on),this.currentRoute=sn(this._router.events.pipe(ot(e=>e instanceof Ua),lt(e=>e.url)))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function H_(t,r){if(t&1&&(o(0,"a",3),l(1),a()),t&2){let e=r.$implicit,i=f();te("active",i.isActiveRoute(e)),m("routerLink","./"+e),d(),v(e)}}var rl=(()=>{class t{constructor(){this.POSSIBLE_TABS=["overview","api","styling","exceptions"],this._navService=I(il)}isActiveRoute(e){return this._navService.currentRoute()?.endsWith(e)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-common"]],decls:5,vars:0,consts:[[1,"component-article"],[1,"page-tabber"],[3,"routerLink","active"],[3,"routerLink"]],template:function(i,n){i&1&&(o(0,"article",0)(1,"div",1),B(2,H_,2,4,"a",2,Q),a(),y(4,"router-outlet"),a()),i&2&&(d(2),H(n.POSSIBLE_TABS))},dependencies:[Ze,Na,ai],styles:[".page-tabber[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid var(--ard-detail-ultralight)}.page-tabber[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:10rem;height:3rem;display:grid;place-items:center;text-transform:uppercase;text-decoration:none;color:var(--ard-text2);font-size:.875rem;font-weight:500;background-color:transparent;transition:background-color .1s ease-in-out;border-bottom:2px solid transparent}.page-tabber[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .page-tabber[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible{background-color:rgba(var(--ard-overlay-rgb),5%)}.page-tabber[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{border-bottom-color:rgb(var(--ard-primary-500))}"]})}}return t})();var al=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-under-construction"]],decls:12,vars:0,consts:[[1,"text"],[1,"oops"],[1,"long"],[1,"image"],["src","/ardium-ui-docs/assets/under-construction.svg","alt","Laptop marked as under construction with workers and a crane around it"]],template:function(i,n){i&1&&(o(0,"article")(1,"div",0)(2,"app-h1")(3,"span",1),l(4,"Oops!"),a(),y(5,"br"),o(6,"span",2),l(7,"Under construction"),a()(),o(8,"p"),l(9,"This documentation page is currently under construction. Come back soon!"),a()(),o(10,"div",3),y(11,"img",4),a()())},dependencies:[ht,rt],styles:['@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKcg72j00.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKew72j00.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKcw72j00.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKfA72j00.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKcQ72j00.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKfw72.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3jvWyNL4U.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3jtGyNL4U.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3jvGyNL4U.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3js2yNL4U.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3jvmyNL4U.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3jsGyN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}article[_ngcontent-%COMP%]{height:100%;display:grid;align-items:center;grid-template-columns:4fr 6fr;font-family:Ubuntu,sans-serif;max-width:70rem;box-sizing:content-box;margin:0 auto}.text[_ngcontent-%COMP%]{padding-bottom:8rem}h1[_ngcontent-%COMP%]{font-weight:500;color:rgb(var(--ard-primary-900));padding-bottom:1.5rem}h1[_ngcontent-%COMP%]   .oops[_ngcontent-%COMP%]{letter-spacing:.1em;font-size:5rem}h1[_ngcontent-%COMP%]   .long[_ngcontent-%COMP%]{font-size:2.625rem;overflow:visible;white-space:nowrap}p[_ngcontent-%COMP%]{opacity:50%;font-size:1rem}@media only screen and (min-width: 1340px){article[_ngcontent-%COMP%]{padding-right:10rem}}@media only screen and (min-width: 1700px){article[_ngcontent-%COMP%]{padding-right:20rem}}']})}}return t})();var xt={DataDisplay:"Data Display",Buttons:"Buttons",Layout:"Layout",FormElements:"Form Elements",Popups:"Popups",Feedback:"Feedback",Stars:"Stars",CustomSignals:"Custom Signals"};function Yx(t,r,e,i,n,s,c,p,b){return s||(s={name:r}),{path:t,name:r,desc:e,img:p,component:rl,groupName:b,children:[{path:"overview",component:i},{path:"api",component:Qs,data:n},{path:"styling",component:tl,data:c},{path:"exceptions",component:el,data:s},{path:"**",redirectTo:"overview"}]}}function $x(t,r,e,i){return{path:t,name:r,desc:e,groupName:i,img:"assets/placeholder.jpg",component:al}}var at={TS:"typescript",SCSS:"scss",HTML:"xml",PlainText:"txt"};var ol=(()=>{class t{loadDynamicComponent(e,i){if(!i)return;i.clear(),i.createComponent(e).changeDetectorRef.detectChanges()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=ae({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var U_=["exampleDisplay"];function N_(t,r){if(t&1&&(o(0,"div",4),l(1),a()),t&2){let e=f();d(),v(e.heading())}}function j_(t,r){if(t&1){let e=N();o(0,"div",5)(1,"ard-icon-button",7),_("click",function(){T(e);let n=f();return w(n.toggleCodeShown())}),o(2,"ard-icon"),l(3,"code"),a()()()}}function Y_(t,r){}function $_(t,r){if(t&1&&(o(0,"ard-tab",11)(1,"div",9),y(2,"app-code",12),g(3,Y_,0,0,"ng-template",13),a()()),t&2){let e=r.$implicit;f(3);let i=V(10);m("tabId",e.label)("label",e.label),d(2),m("language",e.type)("code",e.code),d(),m("ngTemplateOutlet",i)}}function z_(t,r){if(t&1){let e=N();o(0,"ard-tabber",10),_("changeTab",function(n){T(e);let s=f(2);return w(s.onTabChange(n))}),B(1,$_,4,5,"ard-tab",11,Q),a()}if(t&2){let e,i=f(2);m("initialTab",(e=i.initialTab())==null?null:e.toUpperCase()),d(),H(i.mappedData())}}function W_(t,r){}function K_(t,r){if(t&1&&(o(0,"div",9),y(1,"app-code",12),g(2,W_,0,0,"ng-template",13),a()),t&2){let e=f(2),i=V(10);d(),m("language",e.mappedData()[0].type)("code",e.mappedData()[0].code),d(),m("ngTemplateOutlet",i)}}function q_(t,r){if(t&1&&g(0,z_,3,1,"ard-tabber",8)(1,K_,3,3,"div",9),t&2){let e=f();C(e.mappedData().length>1?0:1)}}function Q_(t,r){}function G_(t,r){if(t&1&&(y(0,"app-code",12),g(1,Q_,0,0,"ng-template",13)),t&2){let e=f(),i=V(10);m("language",e.simpleCodeType())("code",e.simpleCodePiece()),d(),m("ngTemplateOutlet",i)}}function X_(t,r){if(t&1&&(o(0,"p"),l(1,"This example can only be viewed in its own tab. "),o(2,"a",14),l(3,"Open example page"),a(),l(4,"."),a()),t&2){let e=f();d(2),m("href",e.viewInFullWindowLink(),nn)}}function Z_(t,r){t&1&&Pa(0,null,1)}function J_(t,r){if(t&1&&y(0,"app-copy-button",15),t&2){let e=f();m("contentToCopy",e.codeToCopy())}}function e0(t){switch(t){case"ts":return at.TS;case"html":return at.HTML;case"scss":case"css":return at.SCSS;default:switch(t.split(".").at(-1)?.toLowerCase()){case"ts":return at.TS;case"html":return at.HTML;case"scss":case"css":return at.SCSS;default:return at.PlainText}}}var sl=["HTML","TS","SCSS","CSS"],jn=(()=>{class t{constructor(){this.data=u.required(),this.heading=u.required(),this.viewInFullWindowLink=u(null,{transform:e=>e?.startsWith("/")?e:e&&"/"+e}),this.isSimpleCodeDefined=F(()=>!!this.simpleCodePiece()),this.simpleCodePiece=F(()=>{let e=this.data();return e.simpleTs??e.simpleHtml??e.simpleScss??e.simpleTxt}),this.simpleCodeType=F(()=>{let e=this.data();return e.simpleTs?at.TS:e.simpleHtml?at.HTML:e.simpleScss?at.SCSS:at.PlainText}),this.isComponentDefined=F(()=>!!this.data().component),this.isCodeShown=dt(!0),this.initialTab=u(void 0),this.nonExpandable=u(!1,{transform:e=>M(e)}),this.codeToCopy=F(()=>this.shouldShowFullCodeData()?(this._currentTab()?this.mappedData().find(i=>i.label===this._currentTab()):this.mappedData()[0]).code:this.simpleCodePiece()),this._currentTab=A(""),this.shouldShowFullCodeData=F(()=>this.isCodeShown()||!this.isSimpleCodeDefined()),this.displayWhenSimple=u(!1,{transform:e=>M(e)}),this.mappedData=F(()=>{let e=this.data();return Object.entries(e).filter(i=>i[0]!=="component"&&i[0]!=="simpleHtml"&&i[0]!=="simpleScss"&&i[0]!=="simpleTs").map(i=>{let n=i[0];return typeof n=="string"&&n.match(/^(html|s?css|ts)$/i)&&(n=n.toUpperCase()),{label:n,code:i[1],type:e0(n)}}).sort((i,n)=>{let s=sl.indexOf(i.label),c=sl.indexOf(n.label);return s!==-1&&c!==-1?s-c:s!==-1?-1:c!==-1?1:i.label.localeCompare(n.label)})}),this.componentLoader=I(ol),this.exampleDisplay=De("exampleDisplay",{read:ft}),ce(()=>{(this.isSimpleCodeDefined()||this.nonExpandable())&&this.isCodeShown.set(!1)})}ngOnInit(){this.nonExpandable()&&this.isCodeShown.set(!1)}toggleCodeShown(){this.isCodeShown.update(e=>!e)}onTabChange(e){this._currentTab.set(e)}ngAfterViewInit(){this._renderComponent()}_renderComponent(){if(this.viewInFullWindowLink())return;let e=this.data().component;e&&this.componentLoader.loadDynamicComponent(e,this.exampleDisplay())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-code-example"]],viewQuery:function(i,n){i&1&&Ee(n.exampleDisplay,U_,5,ft),i&2&&le()},hostVars:10,hostBindings:function(i,n){i&2&&te("simple-example",n.isSimpleCodeDefined()&&!n.isCodeShown())("code-shown",n.isCodeShown())("component-defined",n.isComponentDefined())("non-expandable",n.nonExpandable())("has-single-tab",n.mappedData().length===1)},inputs:{data:[1,"data"],heading:[1,"heading"],viewInFullWindowLink:[1,"viewInFullWindowLink"],isCodeShown:[1,"isCodeShown"],initialTab:[1,"initialTab"],nonExpandable:[1,"nonExpandable"],displayWhenSimple:[1,"displayWhenSimple"]},outputs:{isCodeShown:"isCodeShownChange"},decls:11,vars:6,consts:[["copyButton",""],["exampleDisplay",""],[1,"example-container"],[1,"example-container__top-bar"],[1,"example-container__heading"],[1,"example-container__buttons"],[1,"example-display"],["title","Show full code",3,"click"],["stretchTabs","false",3,"initialTab"],[1,"tab-relative-container"],["stretchTabs","false",3,"changeTab","initialTab"],[3,"tabId","label"],[3,"language","code"],[3,"ngTemplateOutlet"],["target","_blank",3,"href"],["title","Copy code",1,"copy-button",3,"contentToCopy"]],template:function(i,n){i&1&&(o(0,"div",2)(1,"div",3),g(2,N_,2,1,"div",4)(3,j_,4,0,"div",5),a(),g(4,q_,2,1)(5,G_,2,3),a(),o(6,"div",6),g(7,X_,5,1,"p")(8,Z_,2,0,"ng-container"),a(),g(9,J_,1,1,"ng-template",null,0,re)),i&2&&(d(2),C(n.shouldShowFullCodeData()?2:-1),d(),C(!n.nonExpandable()||!n.isSimpleCodeDefined()?3:-1),d(),C(n.isCodeShown()?4:n.shouldShowFullCodeData()?-1:5),d(2),te("hidden",!n.isComponentDefined()||!n.displayWhenSimple()&&!n.shouldShowFullCodeData()),d(),C(n.viewInFullWindowLink()?7:8))},dependencies:[ie,Pe,Ze,Ot,Vt,mt,yt,vt,Le,Ne,Di,Nn],styles:["[_nghost-%COMP%]{width:100%;display:flex;flex-direction:column;border:1px solid var(--ard-detail-ultralight);border-radius:8px;margin:1.25rem 0;position:relative}[_nghost-%COMP%]   .example-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   .example-container__top-bar[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;padding:.5rem 1rem 0 1.5rem}[_nghost-%COMP%]   .example-container__heading[_ngcontent-%COMP%]{line-height:39px;color:#514346}[_nghost-%COMP%]   .example-display[_ngcontent-%COMP%]{padding:1rem 1.5rem;border-top:1px solid var(--ard-detail-ultralight)}[_nghost-%COMP%]   .example-display.hidden[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .tab-relative-container[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   .copy-button[_ngcontent-%COMP%]{position:absolute;top:.5rem;right:1rem}.simple-example[_nghost-%COMP%]   .example-container__top-bar[_ngcontent-%COMP%]{position:absolute;right:0;width:max-content}[_nghost-%COMP%]:not(.code-shown).simple-example:not(.non-expandable)   .copy-button[_ngcontent-%COMP%]{transform:translate(calc(-100% + .125rem))}[_nghost-%COMP%]:not(.code-shown)   .example-container[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.component-defined)   .example-container[_ngcontent-%COMP%]{border-bottom:none}.has-single-tab.code-shown[_nghost-%COMP%]   .example-container__top-bar[_ngcontent-%COMP%]{padding-bottom:.5rem;border-bottom:1px solid var(--ard-detail-ultralight)}"]})}}return t})();var i0=["*"],lT=(()=>{class t{constructor(){this.pageTitle=u.required()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-introduction"]],inputs:{pageTitle:[1,"pageTitle"]},standalone:!1,ngContentSelectors:i0,decls:4,vars:1,template:function(i,n){i&1&&(j(),o(0,"section")(1,"app-h1"),l(2),a(),L(3),a()),i&2&&(d(2),E("",n.pageTitle()," \u2014 Ardium UI"))},dependencies:[rt],encapsulation:2})}}return t})();var n0=["*"],Yn=(()=>{class t{constructor(){this.link=u.required()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-main-article"]],inputs:{link:[1,"link"]},ngContentSelectors:n0,decls:4,vars:1,consts:[[3,"routerLink"]],template:function(i,n){i&1&&(j(),o(0,"i"),l(1,"Main article: "),o(2,"a",0),L(3),a()()),i&2&&(d(2),m("routerLink",n.link()))},dependencies:[Ze,ai],styles:["[_nghost-%COMP%]{padding-left:1.6rem;font-size:.875rem}"]})}}return t})();var a0=t=>({simpleTs:t});function o0(t,r){t&1&&l(0),t&2&&v(" and theme styles need to be imported")}function s0(t,r){t&1&&(o(0,"p"),l(1,"Note: Only the modules that will actually be used should be imported!"),a())}function l0(t,r){if(t&1&&(o(0,"app-h3"),l(1,"Import styles"),a(),o(2,"app-main-article",1),l(3,"Importing styles"),a(),y(4,"app-code-example",2)),t&2){let e=f();d(4),m("data",e.stylesCode())}}var fT=(()=>{class t{constructor(){this.moduleName=u.required(),this.otherModuleNames=u([]),this.styles=u(null),this.tsCode=F(()=>`import { ${this.otherModuleNames().length?[this.moduleName(),...this.otherModuleNames()].join(", "):this.moduleName()} } from '@ardium-ui/ui'`),this.isOtherModuleNamesDefined=F(()=>this.otherModuleNames().length>0),this.stylesCode=F(()=>{let e=this.styles();if(!e)return null;let i=["@import '../node_modules/@ardium-ui/ui/prebuilt-themes/default/core.css';",...e.map(s=>`@import '../node_modules/@ardium-ui/ui/prebuilt-themes/default/${Array.isArray(s)?s[0]:s}.scs';${Array.isArray(s)&&s[1]?" /* if needed */":""}`)].join(`
`),n=["@import '../node_modules/@ardium-ui/ui/themes/default/core.scss';",...e.map(s=>`@import '../node_modules/@ardium-ui/ui/themes/default/${Array.isArray(s)?s[0]:s}.scss';${Array.isArray(s)&&s[1]?" // if needed":""}`)].join(`
`);return{simpleScss:n,scss:n,css:i}})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-prerequisites"]],inputs:{moduleName:[1,"moduleName"],otherModuleNames:[1,"otherModuleNames"],styles:[1,"styles"]},standalone:!1,decls:12,vars:6,consts:[["heading","Module imports","nonExpandable","",3,"data"],["link","/guides/importing-styles"],["heading","Style imports",3,"data"]],template:function(i,n){i&1&&(o(0,"section")(1,"app-h2"),l(2,"Prerequisites"),a(),o(3,"p"),l(4," In order for the component to work, its corresponding module"),g(5,o0,1,1),l(6,". "),a(),o(7,"app-h3"),l(8,"Import modules"),a(),y(9,"app-code-example",0),g(10,s0,2,0,"p")(11,l0,5,1),a()),i&2&&(d(5),C(n.stylesCode()?5:-1),d(4),m("data",fe(4,a0,n.tsCode())),d(),C(n.isOtherModuleNamesDefined()?10:-1),d(),C(n.stylesCode()?11:-1))},dependencies:[jn,Yn,Rt,Lt],encapsulation:2})}}return t})();var ET=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=ee({type:t})}static{this.\u0275inj=Z({imports:[ie,jn,Yn,ht]})}}return t})();var ll=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["button-basic-example"]],decls:13,vars:0,consts:[[1,"grid"],["appearance","raised-strong"],["appearance","transparent"],["color","danger","appearance","outlined-strong"],["variant","pill"],["appearance","outlined","icon","favorite","variant","sharp"],["appearance","flat","color","success","vertical","","icon","favorite"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"ard-button",1),l(2,"Button"),a(),o(3,"ard-button",2),l(4,"Button"),a(),o(5,"ard-button",3),l(6,"Button"),a(),o(7,"ard-button",4),l(8,"Button"),a(),o(9,"ard-button",5),l(10," Button "),a(),o(11,"ard-button",6),l(12," Button "),a()())},dependencies:[je,nt],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1.5rem;justify-items:center;max-width:30rem}"]})}}return t})();var kT={component:ll,html:`<div class="grid">\r
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
`};var dl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["button-compact-example"]],decls:4,vars:0,consts:[["appearance","raised-strong","icon","favorite"],["appearance","raised-strong","icon","favorite","compact",""]],template:function(i,n){i&1&&(o(0,"ard-button",0),l(1,"Normal"),a(),o(2,"ard-button",1),l(3,"Compact"),a())},dependencies:[je,nt],styles:["[_nghost-%COMP%]{display:flex;gap:1rem}"]})}}return t})();var LT={component:dl,html:`<ard-button appearance="raised-strong" icon="favorite">Normal</ard-button>\r
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
`};var cl=(()=>{class t{onClick(){console.log("Button clicked!")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["button-disabled-example"]],decls:4,vars:0,consts:[["disabled","",3,"click"],["disabled","","pointerEventsWhenDisabled","","title","This button is disabled!",3,"click"]],template:function(i,n){i&1&&(o(0,"ard-button",0),_("click",function(){return n.onClick()}),l(1,"Disabled"),a(),o(2,"ard-button",1),_("click",function(){return n.onClick()}),l(3,"Disabled with pointer events"),a())},dependencies:[je,nt],styles:["[_nghost-%COMP%]{display:flex;gap:1rem}"]})}}return t})();var jT={component:cl,html:`<ard-button disabled (click)="onClick()">Disabled</ard-button>\r
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
`};var pl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["button-icon-example"]],decls:13,vars:0,consts:[["appearance","raised-strong","icon","delete","color","danger"],["appearance","raised-strong","icon","send","alignIcon","right"],["appearance","raised-strong","color","primary"],["version","1.1","xmlns","http://www.w3.org/2000/svg","x","0px","y","0px","viewBox","0 0 24 24",2,"enable-background","new 0 0 24 24"],["d",`M5.31,19.875c-1.403,0-2.25-0.912-2.31-2.181c0-2.585,2.792-3.476,7-3.506
		c4.215,0.04,7.015,0.932,7,3.506c-0.067,1.27-0.91,2.181-2.31,2.181H5.31z`,1,"st0"],["d",`M10,11.344c1.993,0,3.609-1.616,3.609-3.609S11.993,4.125,10,4.125S6.391,5.741,6.391,7.734
		S8.007,11.344,10,11.344z`,1,"st0"],["x1","18.4","y1","13.1","x2","18.4","y2","7.9",1,"st0"],["x1","15.8","y1","10.6","x2","21","y2","10.6",1,"st0"]],template:function(i,n){i&1&&(o(0,"ard-button",0),l(1,"Delete"),a(),o(2,"ard-button",1),l(3,"Send"),a(),o(4,"ard-button",2),en(),o(5,"svg",3)(6,"g"),y(7,"path",4)(8,"path",5),a(),o(9,"g"),y(10,"line",6)(11,"line",7),a()(),l(12,` Custom
`),a())},dependencies:[je,nt],styles:["[_nghost-%COMP%]{display:flex;gap:1rem}ard-button[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{height:1.5rem;width:1.5rem;fill:currentColor}"]})}}return t})();var KT={component:pl,html:`<ard-button appearance="raised-strong" icon="delete" color="danger">Delete</ard-button>\r
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
`};var ul=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["button-link-example"]],decls:2,vars:0,consts:[["ard-button","","href","https://google.com","target","_blank","rel","noopener noreferrer"]],template:function(i,n){i&1&&(o(0,"a",0),l(1,` Open Google
`),a())},dependencies:[je,ra],encapsulation:2})}}return t})();var ZT={component:ul,html:`<a ard-button href="https://google.com" target="_blank" rel="noopener noreferrer">\r
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
`};var ml=(()=>{class t{constructor(){this.modalOpen=A(!1),this.dialogOpen=A(!1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["dialog-basic-example"]],decls:8,vars:2,consts:[[3,"click"],["heading","Basic modal example",3,"openChange","open"],["heading","Basic dialog example",3,"openChange","open"]],template:function(i,n){i&1&&(o(0,"button",0),_("click",function(){return n.modalOpen.set(!0)}),l(1,"Open modal"),a(),o(2,"button",0),_("click",function(){return n.dialogOpen.set(!0)}),l(3,"Open dialog"),a(),o(4,"ard-modal",1),z("openChange",function(c){return $(n.modalOpen,c)||(n.modalOpen=c),c}),l(5,` This is the modal content
`),a(),o(6,"ard-dialog",2),z("openChange",function(c){return $(n.dialogOpen,c)||(n.dialogOpen=c),c}),l(7,` This is the dialog content
`),a()),i&2&&(d(4),Y("open",n.modalOpen),d(2),Y("open",n.dialogOpen))},dependencies:[la,sa,Ti,xi],styles:["button[_ngcontent-%COMP%]{margin-right:.5rem}"]})}}return t})();var aw={component:ml,html:`<button (click)="modalOpen.set(true)">Open modal</button>\r
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
`};var hl=(()=>{class t{constructor(){this.deleteConfirmationOpen=A(!1),this.canDelete=A(!1),this._timeout=null}openDeleteConfirmation(){this.deleteConfirmationOpen.set(!0),this.canDelete.set(!1),this._timeout=setTimeout(()=>{this.canDelete.set(!0)},3e3)}ngOnDestroy(){this._timeout&&clearTimeout(this._timeout)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["dialog-delete-confirmation-example"]],decls:4,vars:2,consts:[["appearance","outlined-strong","color","danger",3,"click"],["heading","Delete confirmation","rejectButtonText","Keep","rejectButtonAppearance","transparent","confirmButtonText","Delete","confirmButtonColor","danger","confirmButtonAppearance","outlined-strong",3,"openChange","open","canConfirm"]],template:function(i,n){i&1&&(o(0,"ard-button",0),_("click",function(){return n.openDeleteConfirmation()}),l(1,"Delete something"),a(),o(2,"ard-dialog",1),z("openChange",function(c){return $(n.deleteConfirmationOpen,c)||(n.deleteConfirmationOpen=c),c}),l(3,` Are you sure you want to delete this?
`),a()),i&2&&(d(2),Y("open",n.deleteConfirmationOpen),m("canConfirm",n.canDelete()))},dependencies:[Ti,xi,je,nt],encapsulation:2})}}return t})();var uw={component:hl,html:`<ard-button appearance="outlined-strong" color="danger" (click)="openDeleteConfirmation()">Delete something</ard-button>\r
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
`};function d0(t,r){if(t&1&&(o(0,"tr")(1,"td")(2,"code"),l(3),a()(),o(4,"td")(5,"code"),l(6),a()()()),t&2){let e=r.$implicit;d(3),E("(",e[0],")"),d(3),E("$event = ",e[1],"")}}function c0(t,r){t&1&&(o(0,"tr")(1,"td"),l(2,"Emitted events will be shown here."),a()())}var fl=(()=>{class t{constructor(){this.dialogOpen=A(!1),this.dialogEventLog=A([])}addEvent(e,i){this.dialogEventLog.update(n=>[...n,[e,typeof i=="string"?`"${i}"`:String(i)]])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["dialog-emitted-events-example"]],decls:11,vars:2,consts:[[3,"click"],["heading","Dialog events",3,"openChange","close","reject","confirm","open"]],template:function(i,n){i&1&&(o(0,"button",0),_("click",function(){return n.dialogOpen.set(!0)}),l(1,"Open dialog"),a(),o(2,"table")(3,"tbody"),B(4,d0,7,2,"tr",null,Q,!1,c0,3,0,"tr"),a()(),o(7,"ard-dialog",1),z("openChange",function(c){return $(n.dialogOpen,c)||(n.dialogOpen=c),c}),_("openChange",function(c){return n.addEvent("openChange",c)})("close",function(c){return n.addEvent("close",c)})("reject",function(){return n.addEvent("reject")})("confirm",function(){return n.addEvent("confirm")}),l(8,` Dialog content
`),a(),o(9,"button",0),_("click",function(){return n.dialogEventLog.set([])}),l(10,"Clear events"),a()),i&2&&(d(4),H(n.dialogEventLog()),d(3),Y("open",n.dialogOpen))},dependencies:[Ti,xi],styles:["table[_ngcontent-%COMP%]{margin-top:1rem;max-width:20rem}"]})}}return t})();var yw={component:fl,html:`<button (click)="dialogOpen.set(true)">Open dialog</button>\r
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
`};var gl=(()=>{class t{constructor(){this.nameControl=new si("",{validators:[Je.required,Je.minLength(2),Je.maxLength(64),Je.pattern(/^[a-zA-Z\s]+$/)]})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["form-field-auto-error-example"]],features:[We([ws({required:"This field is required.",minlength:e=>`Enter at least ${e.requiredLength} characters.`,maxlength:e=>`Enter no more than ${e.requiredLength} characters.`,pattern:"Only letters and spaces are allowed."})])],decls:5,vars:2,consts:[["placeholder","Enter your name",3,"formControl"],[3,"control"]],template:function(i,n){i&1&&(o(0,"ard-form-field")(1,"ard-label"),l(2,"Name"),a(),y(3,"ard-input",0)(4,"ard-auto-error",1),a()),i&2&&(d(3),m("formControl",n.nameControl),d(),m("control",n.nameControl))},dependencies:[Pt,kt,ut,Tn,Mt,It,di,de,li],styles:["ard-form-field[_ngcontent-%COMP%]{max-width:25ch}"]})}}return t})();var Sw={component:gl,html:`<ard-form-field>\r
  <ard-label>Name</ard-label>\r
  <ard-input [formControl]="nameControl" placeholder="Enter your name" />\r
  <ard-auto-error [control]="nameControl" />\r
</ard-form-field>`,scss:`ard-form-field {\r
  max-width: 25ch;\r
}`,ts:`import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArdiumFormFieldModule, ArdiumInputModule, provideErrorMap } from '@ardium-ui/ui';

@Component({
  selector: 'form-field-auto-error-example',
  templateUrl: './form-field-auto-error-example.html',
  styleUrl: './form-field-auto-error-example.scss',
  standalone: true,
  imports: [ArdiumFormFieldModule, ArdiumInputModule, ReactiveFormsModule],
  providers: [
    provideErrorMap({
      required: 'This field is required.',
      minlength: (errorData) => \`Enter at least \${errorData.requiredLength} characters.\`,
      maxlength: (errorData) => \`Enter no more than \${errorData.requiredLength} characters.\`,
      pattern: 'Only letters and spaces are allowed.',
    })
  ]
})
export class FormFieldAutoErrorExample {
  readonly nameControl = new FormControl('', {
    validators: [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(64),
      Validators.pattern(/^[a-zA-Z\\s]+$/),
    ],
  });
}
`};function p0(t,r){t&1&&(o(0,"ard-error"),l(1,"Please enter a valid name"),a())}var _l=(()=>{class t{constructor(){this.nameControl=new si("",[Je.pattern(/^[A-Z]{2,} [A-Z]{2,}$/i)])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["form-field-basic-example"]],decls:7,vars:2,consts:[["reserveHintLine",""],[3,"formControl"]],template:function(i,n){i&1&&(o(0,"ard-form-field",0)(1,"ard-label"),l(2,"Full Name"),a(),y(3,"ard-input",1),o(4,"ard-hint"),l(5,"Write your first name and surname"),a(),g(6,p0,2,0,"ard-error"),a()),i&2&&(d(3),m("formControl",n.nameControl),d(3),C(n.nameControl.touched&&n.nameControl.errors?6:-1))},dependencies:[Pt,kt,ut,Ds,Ki,Mt,It,di,de,li],styles:["ard-form-field[_ngcontent-%COMP%]{max-width:35ch}"]})}}return t})();var Mw={component:_l,html:`<ard-form-field reserveHintLine>\r
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
`};function u0(t,r){t&1&&(Mi(0,3),o(1,"ard-error"),l(2,"Please enter a valid passport number"),a(),ki())}var vl=(()=>{class t{constructor(){this.passportControl=new si("",[Je.pattern(/^[A-Z\d]{9}$/i)])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["form-field-character-counter-example"]],decls:7,vars:3,consts:[["reserveHintLine",""],["placeholder","XXXXXXXXX","maxLength","9",3,"formControl"],["right",""],["ard-error",""]],template:function(i,n){if(i&1&&(o(0,"ard-form-field",0)(1,"ard-label"),l(2,"Passport Number"),a(),y(3,"ard-input",1),o(4,"ard-hint-error",2),l(5),a(),g(6,u0,3,0,"ng-container",3),a()),i&2){let s;d(3),m("formControl",n.passportControl),d(2),E("",(s=n.passportControl.value==null?null:n.passportControl.value.length)!==null&&s!==void 0?s:0,"/9"),d(),C(n.passportControl.touched&&n.passportControl.errors?6:-1)}},dependencies:[Pt,kt,ut,Ki,Ss,Mt,It,di,de,li],styles:["ard-form-field[_ngcontent-%COMP%]{max-width:25ch}"]})}}return t})();var Lw={component:vl,html:`<ard-form-field reserveHintLine>\r
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
`};var yl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["form-field-required-optional-labels-example"]],decls:12,vars:0,consts:[["required",""],["optional",""]],template:function(i,n){i&1&&(o(0,"ard-form-field")(1,"ard-label"),l(2,"Normal label"),a(),y(3,"ard-input"),a(),o(4,"ard-form-field")(5,"ard-label",0),l(6,"Required label"),a(),y(7,"ard-input"),a(),o(8,"ard-form-field")(9,"ard-label",1),l(10,"Optional label"),a(),y(11,"ard-input"),a())},dependencies:[Pt,kt,ut,Mt,It],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;gap:1rem}ard-form-field[_ngcontent-%COMP%]{width:12.5rem}"]})}}return t})();var jw={component:yl,html:`<ard-form-field>\r
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
`};var Cl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["kbd-appearances-example"]],decls:13,vars:0,consts:[[1,"grid"],["appearance","outlined"],["appearance","filled"],["appearance","transparent"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"ard-kbd",1),l(2,"Ctrl"),a(),o(3,"ard-kbd",2),l(4,"Ctrl"),a(),o(5,"ard-kbd",3),l(6,"Ctrl"),a(),o(7,"ard-kbd-shortcut",1),l(8,"Ctrl+C"),a(),o(9,"ard-kbd-shortcut",2),l(10,"Ctrl+C"),a(),o(11,"ard-kbd-shortcut",3),l(12,"Ctrl+C"),a()())},dependencies:[Ae,Ke,bi,Ci],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:max-content max-content max-content;gap:1rem}"]})}}return t})();var Kw={component:Cl,html:`<div class="grid">\r
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
export class KbdAppearancesExample {}`};var bl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["kbd-basic-example"]],decls:4,vars:0,template:function(i,n){i&1&&(l(0,"Press "),o(1,"ard-kbd"),l(2,"Shift"),a(),l(3," to continue."))},dependencies:[Ae,Ke],encapsulation:2})}}return t})();var Zw={component:bl,html:"Press <ard-kbd>Shift</ard-kbd> to continue.",ts:`import { Component } from "@angular/core";\r
import { ArdiumKbdModule } from "@ardium-ui/ui";\r
\r
@Component({\r
  selector: 'kbd-basic-example',\r
  templateUrl: 'kbd-basic-example.html',\r
  standalone: true,\r
  imports: [ArdiumKbdModule],\r
})\r
export class KbdBasicExample {}`};var xl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["kbd-directive-example"]],decls:4,vars:0,consts:[["ardKbd",""]],template:function(i,n){i&1&&(l(0,"Press "),o(1,"kbd",0),l(2,"Vol. Down"),a(),l(3," to continue."))},dependencies:[Ae,Es],encapsulation:2})}}return t})();var nS={component:xl,html:"Press <kbd ardKbd>Vol. Down</kbd> to continue.",ts:`import { Component } from "@angular/core";\r
import { ArdiumKbdModule } from "@ardium-ui/ui";\r
\r
@Component({\r
  selector: 'kbd-directive-example',\r
  templateUrl: 'kbd-directive-example.html',\r
  standalone: true,\r
  imports: [ArdiumKbdModule],\r
})\r
export class KbdDirectiveExample {}`};var Tl=(()=>{class t{constructor(){this.keys=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],this._currentKeyIndex=A(0),this.currentKey=F(()=>this.keys[this._currentKeyIndex()])}ngOnInit(){this._interval=setInterval(()=>{this._currentKeyIndex()===this.keys.length-1?this._currentKeyIndex.set(0):this._currentKeyIndex.update(e=>e+1)},1e3)}ngOnDestroy(){this._interval&&clearInterval(this._interval)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["kbd-dynamic-example"]],decls:1,vars:1,consts:[[3,"key"]],template:function(i,n){i&1&&y(0,"ard-kbd",0),i&2&&m("key",n.currentKey())},dependencies:[Ae,Ke],encapsulation:2})}}return t})();var cS={component:Tl,html:'<ard-kbd [key]="currentKey()" />',ts:`import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';\r
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
`};var wl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["kbd-full-example"]],decls:12,vars:0,consts:[["full",""]],template:function(i,n){i&1&&(o(0,"ard-kbd",0),l(1,"KeyF"),a(),o(2,"ard-kbd",0),l(3,"Digit3"),a(),o(4,"ard-kbd",0),l(5,"ArrowUp"),a(),o(6,"ard-kbd",0),l(7,"Tab"),a(),o(8,"ard-kbd",0),l(9,"MetaLeft"),a(),o(10,"ard-kbd",0),l(11,"AudioVolumeDown"),a())},dependencies:[Ae,Ke],encapsulation:2})}}return t})();var fS={component:wl,html:`<ard-kbd full>KeyF</ard-kbd>\r
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
`};var Sl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["kbd-shortcut-example"]],decls:4,vars:0,template:function(i,n){i&1&&(l(0,"Press "),o(1,"ard-kbd-shortcut"),l(2,"Ctrl+C"),a(),l(3," to copy."))},dependencies:[bi,Ci],encapsulation:2})}}return t})();var CS={component:Sl,html:"Press <ard-kbd-shortcut>Ctrl+C</ard-kbd-shortcut> to copy.",ts:`import { Component } from "@angular/core";\r
import { ArdiumKbdShortcutModule } from "@ardium-ui/ui";\r
\r
@Component({\r
  selector: 'kbd-shortcut-example',\r
  templateUrl: 'kbd-shortcut-example.html',\r
  standalone: true,\r
  imports: [ArdiumKbdShortcutModule],\r
})\r
export class KbdShortcutExample {}`};var Dl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["kbd-translation-example"]],decls:12,vars:0,template:function(i,n){i&1&&(o(0,"ard-kbd"),l(1,"KeyF"),a(),o(2,"ard-kbd"),l(3,"Digit3"),a(),o(4,"ard-kbd"),l(5,"ArrowUp"),a(),o(6,"ard-kbd"),l(7,"Tab"),a(),o(8,"ard-kbd"),l(9,"MetaLeft"),a(),o(10,"ard-kbd"),l(11,"AudioVolumeDown"),a())},dependencies:[Ae,Ke],encapsulation:2})}}return t})();var SS={component:Dl,html:`<ard-kbd>KeyF</ard-kbd>\r
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
`};var El=(()=>{class t{constructor(){this.value=A(10)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["number-input-basic-example"]],decls:3,vars:2,consts:[[3,"valueChange","value"]],template:function(i,n){i&1&&(o(0,"ard-number-input",0),z("valueChange",function(c){return $(n.value,c)||(n.value=c),c}),a(),o(1,"p"),l(2),a()),i&2&&(Y("value",n.value),d(2),E("Selected value: ",n.value(),""))},dependencies:[$e,Ye],styles:["ard-number-input[_ngcontent-%COMP%]{width:12rem}"]})}}return t})();var kS={component:El,html:`<ard-number-input [(value)]="value" />\r
\r
<p>Selected value: {{ value() }}</p>\r
`,scss:`ard-number-input {\r
  width: 12rem;\r
}`,ts:`import { Component, signal } from '@angular/core';
import { ArdiumNumberInputModule } from '@ardium-ui/ui';

@Component({
  selector: 'number-input-basic-example',
  templateUrl: './number-input-basic-example.html',
  styleUrl: './number-input-basic-example.scss',
  standalone: true,
  imports: [ArdiumNumberInputModule],
})
export class NumberInputBasicExample {
  readonly value = signal<number>(10);
}
`};var Al=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["number-input-compact-example"]],decls:2,vars:0,consts:[["value","123"],["value","123","compact",""]],template:function(i,n){i&1&&y(0,"ard-number-input",0)(1,"ard-number-input",1)},dependencies:[$e,Ye],styles:["[_nghost-%COMP%]{display:flex;gap:2rem}ard-number-input[_ngcontent-%COMP%]{width:12rem}"]})}}return t})();var LS={component:Al,html:`<ard-number-input value="123" />\r
<ard-number-input value="123" compact />\r
`,scss:`:host {\r
  display: flex;\r
  gap: 2rem;\r
}\r
ard-number-input {\r
  width: 12rem;\r
}`,ts:`import { Component } from '@angular/core';
import { ArdiumNumberInputModule } from '@ardium-ui/ui';

@Component({
  selector: 'number-input-compact-example',
  templateUrl: './number-input-compact-example.html',
  styleUrl: './number-input-compact-example.scss',
  standalone: true,
  imports: [ArdiumNumberInputModule],
})
export class NumberInputCompactExample {}
`};function m0(t,r){if(t&1&&(o(0,"tr")(1,"td")(2,"code"),l(3),a()(),o(4,"td")(5,"code"),l(6),a()()()),t&2){let e=r.$implicit;d(3),E("(",e[0],")"),d(3),E("$event = ",e[1],"")}}function h0(t,r){t&1&&(o(0,"tr")(1,"td"),l(2,"Emitted events will be shown here."),a()())}var Fl=(()=>{class t{constructor(){this.eventLog=A([])}addEvent(e,i){this.eventLog.update(n=>[...n,[e,typeof i=="string"?`"${i}"`:typeof i=="object"?JSON.stringify(i):String(i)]])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["number-input-emitted-events-example"]],decls:8,vars:1,consts:[["min","0","max","100",3,"valueChange","input","change","quickChange"],[3,"click"]],template:function(i,n){i&1&&(o(0,"table")(1,"tbody"),B(2,m0,7,2,"tr",null,Q,!1,h0,3,0,"tr"),a()(),o(5,"ard-number-input",0),_("valueChange",function(c){return n.addEvent("valueChange",c)})("input",function(c){return n.addEvent("input",c)})("change",function(c){return n.addEvent("change",c)})("quickChange",function(c){return n.addEvent("quickChange",c)}),a(),o(6,"button",1),_("click",function(){return n.eventLog.set([])}),l(7,"Clear events"),a()),i&2&&(d(2),H(n.eventLog()))},dependencies:[$e,Ye],styles:["ard-number-input[_ngcontent-%COMP%]{width:12rem}table[_ngcontent-%COMP%]{margin-top:1rem;max-width:20rem}"]})}}return t})();var $S={component:Fl,html:`<table>\r
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
`,ts:`import { Component, signal } from '@angular/core';
import { ArdiumNumberInputModule } from '@ardium-ui/ui';

@Component({
  selector: 'number-input-emitted-events-example',
  templateUrl: './number-input-emitted-events-example.html',
  styleUrl: './number-input-emitted-events-example.scss',
  standalone: true,
  imports: [ArdiumNumberInputModule],
})
export class NumberInputEmittedEventsExample {
  readonly eventLog = signal<[string, any][]>([]);

  addEvent(name: string, event?: any) {
    this.eventLog.update(v => [
      ...v,
      [
        name,
        typeof event === 'string' ? \`"\${event}"\` : typeof event === 'object' ? JSON.stringify(event) : String(event),
      ],
    ]);
  }
}
`};var Il=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["number-input-float-example"]],decls:3,vars:0,consts:[["allowFloat","","min","0","max","10","stepSize","0.5","maxDecimalPlaces","2","fixedDecimalPlaces",""]],template:function(i,n){i&1&&(o(0,"p"),l(1,"Type the amount of money to transfer"),a(),y(2,"ard-number-input",0))},dependencies:[$e,Ye],styles:["ard-number-input[_ngcontent-%COMP%]{width:12rem}"]})}}return t})();var QS={component:Il,html:`<p>Type the amount of money to transfer</p>\r
<ard-number-input allowFloat min="0" max="10" stepSize="0.5" maxDecimalPlaces="2" fixedDecimalPlaces />\r
`,scss:`ard-number-input {\r
  width: 12rem;\r
}`,ts:`import { Component } from '@angular/core';
import { ArdiumNumberInputModule } from '@ardium-ui/ui';

@Component({
  selector: 'number-input-float-example',
  templateUrl: './number-input-float-example.html',
  styleUrl: './number-input-float-example.scss',
  standalone: true,
  imports: [ArdiumNumberInputModule],
})
export class NumberInputFloatExample {}
`};var Ml=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["number-input-min-max-step-example"]],decls:1,vars:0,consts:[["min","-100","max","100","stepSize","10","value","-15"]],template:function(i,n){i&1&&y(0,"ard-number-input",0)},dependencies:[$e,Ye],styles:["ard-number-input[_ngcontent-%COMP%]{width:12rem}"]})}}return t})();var eD={component:Ml,html:'<ard-number-input min="-100" max="100" stepSize="10" value="-15" />',scss:`ard-number-input {\r
  width: 12rem;\r
}`,ts:`import { Component } from '@angular/core';
import { ArdiumNumberInputModule } from '@ardium-ui/ui';

@Component({
  selector: 'number-input-min-max-step-example',
  templateUrl: './number-input-min-max-step-example.html',
  styleUrl: './number-input-min-max-step-example.scss',
  standalone: true,
  imports: [ArdiumNumberInputModule],
})
export class NumberInputMinMaxStepExample {}
`};var kl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["number-input-no-buttons-example"]],decls:1,vars:0,consts:[["value","123","noButtons","","alignText","left"]],template:function(i,n){i&1&&y(0,"ard-number-input",0)},dependencies:[$e,Ye],styles:["ard-number-input[_ngcontent-%COMP%]{width:12rem}"]})}}return t})();var aD={component:kl,html:'<ard-number-input value="123" noButtons alignText="left" />',scss:`ard-number-input {\r
  width: 12rem;\r
}`,ts:`import { Component } from '@angular/core';
import { ArdiumNumberInputModule } from '@ardium-ui/ui';

@Component({
  selector: 'number-input-no-buttons-example',
  templateUrl: './number-input-no-buttons-example.html',
  styleUrl: './number-input-no-buttons-example.scss',
  standalone: true,
  imports: [ArdiumNumberInputModule],
})
export class NumberInputNoButtonsExample {}
`};function f0(t,r){t&1&&l(0,"$")}function g0(t,r){t&1&&l(0,".00")}var Pl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["number-input-prefix-suffix-example"]],decls:3,vars:0,consts:[["value","123","alignText","right","min","0","max","10000"],["ard-prefix-tmp",""],["ard-suffix-tmp",""]],template:function(i,n){i&1&&(o(0,"ard-number-input",0),g(1,f0,1,0,"ng-template",1)(2,g0,1,0,"ng-template",2),a())},dependencies:[$e,Ye,Cn,bn],styles:["ard-number-input[_ngcontent-%COMP%]{width:12rem}"]})}}return t})();var cD={component:Pl,html:`<ard-number-input value="123" alignText="right" min="0" max="10000">\r
  <ng-template ard-prefix-tmp>$</ng-template>\r
  <ng-template ard-suffix-tmp>.00</ng-template>\r
</ard-number-input>`,scss:`ard-number-input {\r
  width: 12rem;\r
}`,ts:`import { Component } from '@angular/core';
import { ArdiumNumberInputModule } from '@ardium-ui/ui';

@Component({
  selector: 'number-input-prefix-suffix-example',
  templateUrl: './number-input-prefix-suffix-example.html',
  styleUrl: './number-input-prefix-suffix-example.scss',
  standalone: true,
  imports: [ArdiumNumberInputModule],
})
export class NumberInputPrefixSuffixExample {}
`};var Vl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["slider-basic-example"]],decls:1,vars:0,template:function(i,n){i&1&&y(0,"ard-slider")},dependencies:[yi,vi],encapsulation:2})}}return t})();var fD={component:Vl,html:"<ard-slider />",ts:`import { Component } from '@angular/core';
import { ArdiumSliderModule } from '@ardium-ui/ui';

@Component({
  selector: 'slider-basic-example',
  templateUrl: './slider-basic-example.html',
  standalone: true,
  imports: [ArdiumSliderModule],
})
export class SliderBasicExample {
  
}
`};var _0=()=>({value:0,label:"Min"}),v0=()=>({value:25,label:"Low"}),y0=()=>({value:50,label:"Medium"}),C0=()=>({value:75,label:"High"}),b0=()=>({value:100,label:"Max"}),x0=(t,r,e,i,n)=>[t,r,e,i,n],Ol=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["slider-label-objects-example"]],decls:1,vars:12,consts:[["showValueTicks","",3,"labels"]],template:function(i,n){i&1&&y(0,"ard-slider",0),i&2&&m("labels",Ra(6,x0,ii(1,_0),ii(2,v0),ii(3,y0),ii(4,C0),ii(5,b0)))},dependencies:[yi,vi],styles:["ard-slider[_ngcontent-%COMP%]{max-width:15rem}"]})}}return t})();var CD={component:Ol,html:`<ard-slider\r
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
`};var Rl=(()=>{class t{constructor(){this.value=A(5)}formatTooltipFn(e){let i=["KB","MB","GB","TB"],n=0,s=2**e;for(;s>=1024&&n<i.length-1;)n+=1,s/=1024;return`${s} ${i[n]}`}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["slider-non-linear-example"]],decls:5,vars:4,consts:[["min","0","max","30",3,"valueChange","value","tooltipFormatFn"]],template:function(i,n){i&1&&(o(0,"ard-slider",0),z("valueChange",function(c){return $(n.value,c)||(n.value=c),c}),a(),o(1,"p"),l(2),a(),o(3,"p"),l(4),a()),i&2&&(Y("value",n.value),m("tooltipFormatFn",n.formatTooltipFn),d(2),E("Actual value: ",n.value(),""),d(2),E("Formatted value: ",n.formatTooltipFn(n.value()),""))},dependencies:[yi,vi],styles:["ard-slider[_ngcontent-%COMP%]{margin-bottom:1rem;max-width:15rem}"]})}}return t})();var ED={component:Rl,html:`<ard-slider [(value)]="value" [tooltipFormatFn]="formatTooltipFn" min="0" max="30" />\r
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
`};var Ll=(()=>{class t{constructor(){this.value=A({from:30,to:80})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["slider-range-example"]],decls:3,vars:3,consts:[[3,"valueChange","value"]],template:function(i,n){i&1&&(o(0,"ard-range-slider",0),z("valueChange",function(c){return $(n.value,c)||(n.value=c),c}),a(),o(1,"p"),l(2),a()),i&2&&(Y("value",n.value),d(2),ti("Selected range: ",n.value().from," \u2013 ",n.value().to,""))},dependencies:[Pn,kn],styles:["ard-range-slider[_ngcontent-%COMP%]{display:block;margin-bottom:1rem;max-width:15rem}"]})}}return t})();var VD={component:Ll,html:`<ard-range-slider [(value)]="value" />\r
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
`};var Bl=(()=>{class t{constructor(){this.value=A({from:30,to:80}),this.selectionBehavior=A(Gt.Allow),this.minimumDistance=A(0)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["slider-range-selection-behaviors-example"]],decls:19,vars:9,consts:[[3,"valueChange","value"],["value","allow"],["value","push"],["value","block"],["for","minimumDistance"],["type","number","id","minimumDistance","min","0",3,"ngModelChange","ngModel"],[3,"valueChange","value","selectionBehavior","minimumDistance"]],template:function(i,n){i&1&&(o(0,"ard-radio-group",0),z("valueChange",function(c){return $(n.selectionBehavior,c)||(n.selectionBehavior=c),c}),o(1,"ard-radio",1)(2,"code"),l(3,"'allow'"),a()(),o(4,"ard-radio",2)(5,"code"),l(6,"'push'"),a()(),o(7,"ard-radio",3)(8,"code"),l(9,"'block'"),a()()(),o(10,"div")(11,"label",4),l(12," Minimum distance: "),a(),o(13,"input",5),z("ngModelChange",function(c){return $(n.minimumDistance,c)||(n.minimumDistance=c),c}),a()(),o(14,"ard-range-slider",6),z("valueChange",function(c){return $(n.value,c)||(n.value=c),c}),a(),o(15,"p"),l(16),a(),o(17,"pre"),l(18),a()),i&2&&(Y("value",n.selectionBehavior),d(13),Y("ngModel",n.minimumDistance),d(),Y("value",n.value),m("selectionBehavior",n.selectionBehavior())("minimumDistance",n.minimumDistance()),d(2),ti("Selected range: ",n.value().from," \u2013 ",n.value().to,""),d(2),ti(`<ard-range-slider
  [(value)]="value"
  [selectionBehavior]="`,n.selectionBehavior(),`"
  [minimumDistance]="`,n.minimumDistance(),`"
/>
`))},dependencies:[Pn,kn,vs,_s,xn,pe,ye,ln,de,Ya,Ce],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem}ard-radio-group[_ngcontent-%COMP%]{flex-direction:column}label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6ch;-webkit-user-select:none;user-select:none}"]})}}return t})();var jD={component:Bl,html:`<ard-radio-group [(value)]="selectionBehavior">\r
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
`};var Hl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["spinner-basic-example"]],decls:1,vars:0,template:function(i,n){i&1&&y(0,"ard-spinner")},dependencies:[Rn,On],encapsulation:2})}}return t})();var KD={component:Hl,html:"<ard-spinner />",ts:`import { Component } from '@angular/core';\r
import { ArdiumSpinnerModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'spinner-basic-example',\r
  templateUrl: './spinner-basic-example.html',\r
  standalone: true,\r
  imports: [ArdiumSpinnerModule],\r
})\r
export class SpinnerBasicExample {}\r
`};var Ul=(()=>{class t{constructor(){this.spinnerSize=A("4rem")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["spinner-sizing-example"]],decls:4,vars:2,consts:[["for","size"],["type","text","id","size","value","4rem",3,"input"]],template:function(i,n){i&1&&(o(0,"label",0),l(1,"CSS Size"),a(),o(2,"input",1),_("input",function(c){return n.spinnerSize.set(c.target.value)}),a(),y(3,"ard-spinner")),i&2&&(d(3),be("width:"+n.spinnerSize()))},dependencies:[Rn,On],styles:["ard-spinner[_ngcontent-%COMP%]{display:block;margin-top:1.5rem}"]})}}return t})();var eE={component:Ul,html:`<label for="size">CSS Size</label>\r
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
`};var Nl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["tabber-basic-example"]],decls:10,vars:0,consts:[["tabId","tab1","label","Tab 1"],["tabId","tab2","label","Tab 2"],["tabId","tab3","label","Tab 3"]],template:function(i,n){i&1&&(o(0,"ard-tabber")(1,"ard-tab",0)(2,"p"),l(3,"This is the content of Tab 1."),a()(),o(4,"ard-tab",1)(5,"p"),l(6,"This is the content of Tab 2."),a()(),o(7,"ard-tab",2)(8,"p"),l(9,"This is the content of Tab 3."),a()()())},dependencies:[Ot,Vt,mt],encapsulation:2})}}return t})();var aE={component:Nl,html:`<ard-tabber>\r
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
`};var jl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["tabber-label-example"]],decls:25,vars:0,consts:[["tabId","anim","label","Animals"],["tabId","pl","label","Plants"],["tabId","fung","label","Fungi"]],template:function(i,n){i&1&&(o(0,"ard-tabber")(1,"ard-tab",0)(2,"ul")(3,"li"),l(4,"Cat"),a(),o(5,"li"),l(6,"Dog"),a(),o(7,"li"),l(8,"Elephant"),a()()(),o(9,"ard-tab",1)(10,"ul")(11,"li"),l(12,"Rose"),a(),o(13,"li"),l(14,"Oak"),a(),o(15,"li"),l(16,"Tulip"),a()()(),o(17,"ard-tab",2)(18,"ul")(19,"li"),l(20,"Mushroom"),a(),o(21,"li"),l(22,"Yeast"),a(),o(23,"li"),l(24,"Morel"),a()()()())},dependencies:[Ot,Vt,mt],encapsulation:2})}}return t})();var cE={component:jl,html:`<ard-tabber>\r
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
`};function T0(t,r){if(t&1&&(o(0,"ard-icon",5),l(1,"home"),a(),o(2,"span"),l(3),a()),t&2){let e=r.$implicit;d(3),v(e)}}function w0(t,r){t&1&&(o(0,"ard-icon",5),l(1,"person"),a(),o(2,"span"),l(3,"Profile"),a())}var Yl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["tabber-label-templates-example"]],decls:13,vars:1,consts:[["customLabelTemplate",""],["ard-tabber-label-tmp",""],["tabId","tab1","label","Home 1"],["tabId","tab2","label","Home 2"],["tabId","tab3",3,"label"],["aria-hidden","true"]],template:function(i,n){if(i&1&&(o(0,"ard-tabber"),g(1,T0,4,1,"ng-template",1),o(2,"ard-tab",2)(3,"p"),l(4,"This is the content of the Home 1 tab."),a()(),o(5,"ard-tab",3)(6,"p"),l(7,"This is the content of the Home 2 tab."),a()(),o(8,"ard-tab",4)(9,"p"),l(10,"This is the content of the Profile tab."),a()()(),g(11,w0,4,0,"ng-template",null,0,re)),i&2){let s=V(12);d(8),m("label",s)}},dependencies:[Ot,Vt,mt,wn,Le,Ne],encapsulation:2})}}return t})();var fE={component:Yl,html:`<ard-tabber>\r
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
`};var $l=(()=>{class t{constructor(){this.insideClicks=A(0),this.outsideClicks=A(0)}onClick(){this.insideClicks.update(e=>e+1)}onOutsideClick(){this.outsideClicks.update(e=>e+1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["click-outside-example"]],decls:6,vars:2,consts:[[3,"click","ardClickOutside"]],template:function(i,n){i&1&&(o(0,"div",0),_("click",function(){return n.onClick()})("ardClickOutside",function(){return n.onOutsideClick()}),l(1,"My element"),a(),o(2,"p"),l(3),y(4,"br"),l(5),a()),i&2&&(d(3),E(" Inside clicks: ",n.insideClicks()," "),d(2),E(" Outside clicks: ",n.outsideClicks(),`
`))},dependencies:[dr,lr],styles:["[_nghost-%COMP%]{-webkit-user-select:none;user-select:none}div[_ngcontent-%COMP%]{width:167px;height:100px;display:grid;place-items:center;background-color:#90ee90}"]})}}return t})();var xE={component:$l,html:`<div (click)="onClick()" (ardClickOutside)="onOutsideClick()">My element</div>\r
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
}`};var S0=["*"],zl=(()=>{class t{constructor(){this.disabled=u(!1,{transform:M})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["my-button"]],inputs:{disabled:[1,"disabled"]},ngContentSelectors:S0,decls:2,vars:1,consts:[[3,"disabled"]],template:function(i,n){i&1&&(j(),o(0,"button",0),L(1),a()),i&2&&m("disabled",n.disabled())},encapsulation:2})}}return t})();var Wl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["coercion-boolean-example"]],decls:8,vars:1,consts:[["disabled",""],["disabled","false"],[3,"disabled"]],template:function(i,n){i&1&&(o(0,"my-button"),l(1,"Normal button"),a(),o(2,"my-button",0),l(3,"Disabled button"),a(),o(4,"my-button",1),l(5,"False button"),a(),o(6,"my-button",2),l(7,"Disabled button"),a()),i&2&&(d(6),m("disabled",!0))},dependencies:[zl],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]})}}return t})();var ME={component:Wl,html:`<my-button>Normal button</my-button>\r
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
}`};var Kl=(()=>{class t{constructor(){this.date=u.required({transform:e=>vr(e,new Date(""))})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["my-calendar"]],inputs:{date:[1,"date"]},decls:1,vars:1,template:function(i,n){i&1&&l(0),i&2&&E("The date is ",n.date(),"")},encapsulation:2})}}return t})();var ql=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["coercion-date-example"]],decls:2,vars:0,consts:[["date","1918.11.11"],["date","now"]],template:function(i,n){i&1&&y(0,"my-calendar",0)(1,"my-calendar",1)},dependencies:[Kl],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]})}}return t})();var UE={component:ql,html:`<my-calendar date="1918.11.11" />\r
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
`};var D0=["*"],Ql=(()=>{class t{constructor(){this.delay=u(0,{transform:e=>Me(e,0)})}alert(){setTimeout(()=>{alert("Hello world!")},this.delay())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["my-button"]],inputs:{delay:[1,"delay"]},ngContentSelectors:D0,decls:2,vars:0,consts:[[3,"click"]],template:function(i,n){i&1&&(j(),o(0,"button",0),_("click",function(){return n.alert()}),L(1),a())},encapsulation:2})}}return t})();var Gl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["coercion-number-example"]],decls:6,vars:1,consts:[["delay","500"],[3,"delay"]],template:function(i,n){i&1&&(o(0,"my-button"),l(1,"No delay"),a(),o(2,"my-button",0),l(3,"With delay"),a(),o(4,"my-button",1),l(5,"Long delay"),a()),i&2&&(d(4),m("delay",1500))},dependencies:[Ql],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]})}}return t})();var QE={component:Gl,html:`<my-button>No delay</my-button>\r
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
`};var Xl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["coercion-usefulness-example"]],decls:0,vars:0,template:function(i,n){},encapsulation:2})}}return t})();var JE={component:Xl,simpleHtml:`<ard-select disabled />\r
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
export class CoercionUsefulnessExample {}`};var Zl=(()=>{class t{constructor(){this.exampleSignal=gr(["Pizza","Cheese","Spaghetti"])}push(e){e&&this.exampleSignal.push(e)}pop(){this.exampleSignal.pop()}map(){this.exampleSignal.map(e=>e.toUpperCase())}filter(){this.exampleSignal.filter(e=>e.length>6)}reverse(){this.exampleSignal.reverse()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["array-signal-basic-example"]],decls:18,vars:2,consts:[["pushText",""],[1,"left-side"],["type","text","placeholder","Text to push..."],[3,"click"],[1,"right-side"]],template:function(i,n){if(i&1){let s=N();o(0,"div",1),y(1,"input",2,0),o(3,"button",3),_("click",function(){T(s);let p=V(2);return w(n.push(p.value))}),l(4,"Push"),a(),o(5,"button",3),_("click",function(){return T(s),w(n.pop())}),l(6,"Pop"),a(),o(7,"button",3),_("click",function(){return T(s),w(n.map())}),l(8,"Map"),a(),o(9,"button",3),_("click",function(){return T(s),w(n.filter())}),l(10,"Filter"),a(),o(11,"button",3),_("click",function(){return T(s),w(n.reverse())}),l(12,"Reverse"),a()(),o(13,"div",4)(14,"p"),l(15),a(),o(16,"p"),l(17),a()()}i&2&&(d(15),E("isEmpty: ",n.exampleSignal.isEmpty().toString()," "),d(2),v(n.exampleSignal()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:center}button[_ngcontent-%COMP%]{margin-right:.75rem;margin-left:.25rem;padding:0 .125rem}"]})}}return t})();var rA={component:Zl,html:`<div class="left-side">\r
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
`};var Jl=(()=>{class t{constructor(){this.exampleSignal=qa(10)}increment(){this.exampleSignal.increment()}decrement(){this.exampleSignal.decrement()}reset(){this.exampleSignal.reset()}double(){this.exampleSignal.update(e=>e*2)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["counter-signal-basic-example"]],decls:14,vars:2,consts:[[1,"left-side"],[3,"click"],[1,"right-side"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"button",1),_("click",function(){return n.increment()}),l(2,"Increment"),a(),o(3,"button",1),_("click",function(){return n.decrement()}),l(4,"Decrement"),a(),o(5,"button",1),_("click",function(){return n.double()}),l(6,"Double"),a(),o(7,"button",1),_("click",function(){return n.reset()}),l(8,"Reset"),a()(),o(9,"div",2)(10,"p"),l(11),a(),o(12,"p"),l(13),a()()),i&2&&(d(11),E("isReset: ",n.exampleSignal.isReset().toString()," "),d(2),E("value: ",n.exampleSignal(),""))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:center}button[_ngcontent-%COMP%]{margin-right:1rem;padding:0 .125rem}"]})}}return t})();var dA={component:Jl,html:`<div class="left-side">\r
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
`};var ed=(()=>{class t{constructor(){this.debouncedValue=Qa("",500)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["debounced-signal-example"]],decls:5,vars:2,consts:[["for","debounced-input"],["type","text","id","debounced-input","placeholder","Search...",3,"ngModelChange","ngModel"]],template:function(i,n){i&1&&(o(0,"label",0),l(1,"What are you looking for?"),a(),o(2,"input",1),z("ngModelChange",function(c){return $(n.debouncedValue,c)||(n.debouncedValue=c),c}),a(),o(3,"p"),l(4),a()),i&2&&(d(2),Y("ngModel",n.debouncedValue),d(2),E("Debounced value: ",n.debouncedValue(),""))},dependencies:[pe,ye,de,Ce],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var fA={component:ed,html:`<label for="debounced-input">What are you looking for?</label>\r
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
`};function E0(t,r){if(t&1&&(o(0,"tr")(1,"td"),l(2),a(),o(3,"td"),l(4),a()()),t&2){let e=r.$implicit;d(2),v(e[0]),d(2),v(e[1])}}var td=(()=>{class t{constructor(){this.exampleSignal=Ga([["food1","Pizza"]])}setKey(e,i){!e||!i||this.exampleSignal.setKey(e,i)}delete(e){e&&this.exampleSignal.delete(e)}update(){this.exampleSignal.update(e=>new Map([...e.entries()].map(i=>[i[0],i[1].toLowerCase()])))}clear(){this.exampleSignal.clear()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["map-signal-basic-example"]],decls:30,vars:2,consts:[["key",""],["value",""],[1,"left-side"],[1,"inputs"],["type","text","placeholder","Key"],["type","text","placeholder","Value"],[3,"click"],[1,"right-side"]],template:function(i,n){if(i&1){let s=N();o(0,"div",2)(1,"div",3),y(2,"input",4,0)(4,"input",5,1),a(),o(6,"div")(7,"button",6),_("click",function(){T(s);let p=V(3),b=V(5);return w(n.setKey(p.value,b.value))}),l(8,"Set key"),a(),o(9,"button",6),_("click",function(){T(s);let p=V(3);return w(n.delete(p.value))}),l(10,"Delete key"),a(),o(11,"button",6),_("click",function(){return T(s),w(n.clear())}),l(12,"Clear"),a(),o(13,"button",6),_("click",function(){return T(s),w(n.update())}),l(14,"Update (to lowercase)"),a()()(),o(15,"div",7)(16,"p"),l(17),a(),o(18,"p"),l(19),a(),o(20,"table")(21,"thead")(22,"tr")(23,"th"),l(24,"Key"),a(),o(25,"th"),l(26,"Value"),a()()(),o(27,"tbody"),B(28,E0,5,2,"tr",null,Q),a()()()}i&2&&(d(17),E("isEmpty: ",n.exampleSignal.isEmpty().toString(),""),d(2),E("size: ",n.exampleSignal.size().toString(),""),d(9),H(n.exampleSignal()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:3rem}.inputs[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}input[_ngcontent-%COMP%]{margin-right:.25rem;max-width:10rem}button[_ngcontent-%COMP%]{margin-right:1rem;margin-top:.75rem;padding:0 .125rem}"]})}}return t})();var CA={component:td,html:`<div class="left-side">\r
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
`};var id=(()=>{class t{constructor(){this.favoriteFood=Et("chocolate chip cookies",{name:"favorite-food",method:Dt.Cookies,maxAge:60*60*24*7})}clearSignal(){this.favoriteFood.clear()}get cookieValue(){let e=document.cookie.match(new RegExp("(^| )favorite-food=([^;]+)"));return e?e[2]:null}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["persistent-signal-cookies-example"]],decls:7,vars:2,consts:[["for","favorite-food"],["type","text","id","favorite-food",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,n){i&1&&(o(0,"label",0),l(1,"Favorite food"),a(),o(2,"input",1),z("ngModelChange",function(c){return $(n.favoriteFood,c)||(n.favoriteFood=c),c}),a(),o(3,"button",2),_("click",function(){return n.clearSignal()}),l(4,"Clear"),a(),o(5,"p"),l(6),a()),i&2&&(d(2),Y("ngModel",n.favoriteFood),d(4),E("Your favorite food is: ",n.cookieValue,""))},dependencies:[pe,ye,de,Ce],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var DA={component:id,html:`<label for="favorite-food">Favorite food</label>\r
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
`};var nd=(()=>{class t{constructor(){this.favoriteFood=Et("spaghetti",{name:"favorite-food",method:Dt.LocalStorage})}clearSignal(){this.favoriteFood.clear()}get localStorageValue(){return localStorage.getItem("favorite-food")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["persistent-signal-example"]],decls:7,vars:2,consts:[["for","favorite-food"],["type","text","id","favorite-food",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,n){i&1&&(o(0,"label",0),l(1,"Favorite food"),a(),o(2,"input",1),z("ngModelChange",function(c){return $(n.favoriteFood,c)||(n.favoriteFood=c),c}),a(),o(3,"button",2),_("click",function(){return n.clearSignal()}),l(4,"Clear"),a(),o(5,"p"),l(6),a()),i&2&&(d(2),Y("ngModel",n.favoriteFood),d(4),E("Your favorite food is: ",n.localStorageValue,""))},dependencies:[pe,ye,de,Ce],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var kA={component:nd,html:`<label for="favorite-food">Favorite food</label>\r
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
`};var rd=(()=>{class t{constructor(){this.favoriteFood=Et("spaghetti",{name:"favorite-food",method:Dt.LocalStorage})}clearSignal(){this.favoriteFood.clear()}get localStorageValue(){return localStorage.getItem("favorite-food")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["persistent-signal-local-storage-example"]],decls:7,vars:2,consts:[["for","favorite-food"],["type","text","id","favorite-food",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,n){i&1&&(o(0,"label",0),l(1,"Favorite food"),a(),o(2,"input",1),z("ngModelChange",function(c){return $(n.favoriteFood,c)||(n.favoriteFood=c),c}),a(),o(3,"button",2),_("click",function(){return n.clearSignal()}),l(4,"Clear"),a(),o(5,"p"),l(6),a()),i&2&&(d(2),Y("ngModel",n.favoriteFood),d(4),E("Your favorite food is: ",n.localStorageValue,""))},dependencies:[pe,ye,de,Ce],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var BA={component:rd,html:`<label for="favorite-food">Favorite food</label>\r
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
`};var ad=(()=>{class t{constructor(){this.acceptsTerms=Et(!1,{name:"accepts-terms",method:Dt.LocalStorage,serialize:e=>String(!!e),deserialize:e=>e==="true"})}get termsValue(){return localStorage.getItem("accepts-terms")??"null"}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["persistent-signal-serialization-example"]],decls:6,vars:2,consts:[[3,"selectedChange","selected"]],template:function(i,n){i&1&&(o(0,"div")(1,"ard-checkbox",0),z("selectedChange",function(c){return $(n.acceptsTerms,c)||(n.acceptsTerms=c),c}),a(),o(2,"span"),l(3,"Do you accept the terms?"),a()(),o(4,"p"),l(5),a()),i&2&&(d(),Y("selected",n.acceptsTerms),d(4),E("Terms accepted: ",n.termsValue,""))},dependencies:[pe,Mn,In],styles:["div[_ngcontent-%COMP%]{display:flex;gap:.5rem}p[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return t})();var zA={component:ad,html:`<div>\r
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
`};var od=(()=>{class t{constructor(){this.favoriteColor=cn("red","favorite-color")}clearSignal(){this.favoriteColor.clear()}get queryParams(){return window.location.search}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["query-param-signal-example"]],decls:7,vars:2,consts:[["for","favorite-color"],["type","text","id","favorite-color",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,n){i&1&&(o(0,"label",0),l(1,"Favorite color"),a(),o(2,"input",1),z("ngModelChange",function(c){return $(n.favoriteColor,c)||(n.favoriteColor=c),c}),a(),o(3,"button",2),_("click",function(){return n.clearSignal()}),l(4,"Clear"),a(),o(5,"p"),l(6),a()),i&2&&(d(2),Y("ngModel",n.favoriteColor),d(4),E("URL query params: ",n.queryParams,""))},dependencies:[pe,ye,de,Ce],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var XA={component:od,html:`<label for="favorite-color">Favorite color</label>\r
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
`};var sd=(()=>{class t{constructor(){this.acceptsTerms=cn(!1,{paramName:"accepts-terms",serialize:e=>e===null?null:String(e),deserialize:e=>e==="true"})}get queryParams(){return window.location.search}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["query-param-signal-serialization-example"]],decls:6,vars:2,consts:[[3,"selectedChange","selected"]],template:function(i,n){i&1&&(o(0,"div")(1,"ard-checkbox",0),z("selectedChange",function(c){return $(n.acceptsTerms,c)||(n.acceptsTerms=c),c}),a(),o(2,"span"),l(3,"Do you accept the terms?"),a()(),o(4,"p"),l(5),a()),i&2&&(d(),Y("selected",n.acceptsTerms),d(4),E("URL query: ",n.queryParams,""))},dependencies:[pe,Mn,In],styles:["div[_ngcontent-%COMP%]{display:flex;gap:.5rem}p[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return t})();var rF={component:sd,html:`<div>\r
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
`};function A0(t,r){if(t&1&&(o(0,"li"),l(1),a()),t&2){let e=r.$implicit;d(),v(e)}}var ld=(()=>{class t{constructor(){this.exampleSignal=Xa(["Pizza","Spaghetti","Tomatoes"])}enqueue(e){e&&this.exampleSignal.enqueue(e)}dequeue(){this.exampleSignal.dequeue()}clear(){this.exampleSignal.clear()}update(){this.exampleSignal.update(e=>e.filter(i=>i.length<=5))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["queue-signal-basic-example"]],decls:20,vars:2,consts:[["enqueueText",""],[1,"left-side"],["type","text","placeholder","Text to enqueue..."],[3,"click"],[1,"right-side"]],template:function(i,n){if(i&1){let s=N();o(0,"div",1)(1,"div"),y(2,"input",2,0),a(),o(4,"button",3),_("click",function(){T(s);let p=V(3);return w(n.enqueue(p.value))}),l(5,"Enqueue"),a(),o(6,"button",3),_("click",function(){return T(s),w(n.dequeue())}),l(7,"Dequeue"),a(),o(8,"button",3),_("click",function(){return T(s),w(n.clear())}),l(9,"Clear"),a(),o(10,"button",3),_("click",function(){return T(s),w(n.update())}),l(11,"Update (leave only short)"),a()(),o(12,"div",4)(13,"p"),l(14),a(),o(15,"p"),l(16),a(),o(17,"ol"),B(18,A0,2,1,"li",null,gt),a()()}i&2&&(d(14),E("isEmpty: ",n.exampleSignal.isEmpty().toString(),""),d(2),E("size: ",n.exampleSignal.size().toString(),""),d(2),H(n.exampleSignal()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:3rem}button[_ngcontent-%COMP%]{margin-top:.75rem;margin-right:1rem;padding:0 .125rem}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0;line-height:1.2}"]})}}return t})();var dF={component:ld,html:`<div class="left-side">\r
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
`};var dd=(()=>{class t{constructor(){this.exampleSignal=Za(["Peas","Lettuce","Corn"])}add(e){e&&this.exampleSignal.add(e)}delete(e){e&&this.exampleSignal.delete(e)}update(){this.exampleSignal.update(e=>new Set([...e].map(i=>i.toLowerCase())))}clear(){this.exampleSignal.clear()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["set-signal-basic-example"]],decls:20,vars:3,consts:[["value",""],[1,"left-side"],[1,"inputs"],["type","text","placeholder","Value"],[3,"click"],[1,"right-side"]],template:function(i,n){if(i&1){let s=N();o(0,"div",1)(1,"div",2),y(2,"input",3,0),a(),o(4,"div")(5,"button",4),_("click",function(){T(s);let p=V(3);return w(n.add(p.value))}),l(6,"Add value"),a(),o(7,"button",4),_("click",function(){T(s);let p=V(3);return w(n.delete(p.value))}),l(8,"Delete value"),a(),o(9,"button",4),_("click",function(){return T(s),w(n.clear())}),l(10,"Clear"),a(),o(11,"button",4),_("click",function(){return T(s),w(n.update())}),l(12,"Update (to lowercase)"),a()()(),o(13,"div",5)(14,"p"),l(15),a(),o(16,"p"),l(17),a(),o(18,"p"),l(19),a()()}i&2&&(d(15),E("isEmpty: ",n.exampleSignal.isEmpty().toString(),""),d(2),E("size: ",n.exampleSignal.size().toString(),""),d(2),v(n.exampleSignal.asArray()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:3rem}.inputs[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}input[_ngcontent-%COMP%]{margin-right:.25rem;max-width:10rem}button[_ngcontent-%COMP%]{margin-right:1rem;margin-top:.75rem;padding:0 .125rem}"]})}}return t})();var hF={component:dd,html:`<div class="left-side">\r
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
`};function F0(t,r){if(t&1&&(o(0,"li"),l(1),a()),t&2){let e=r.$implicit;d(),v(e)}}var cd=(()=>{class t{constructor(){this.exampleSignal=Ja(["Pizza","Spaghetti","Tomatoes"])}push(e){e&&this.exampleSignal.push(e)}pop(){this.exampleSignal.pop()}clear(){this.exampleSignal.clear()}update(){this.exampleSignal.update(e=>e.filter(i=>i.length<=5))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["stack-signal-basic-example"]],decls:20,vars:2,consts:[["pushText",""],[1,"left-side"],["type","text","placeholder","Text to push..."],[3,"click"],[1,"right-side"],["reversed",""]],template:function(i,n){if(i&1){let s=N();o(0,"div",1)(1,"div"),y(2,"input",2,0),a(),o(4,"button",3),_("click",function(){T(s);let p=V(3);return w(n.push(p.value))}),l(5,"Push"),a(),o(6,"button",3),_("click",function(){return T(s),w(n.pop())}),l(7,"Pop"),a(),o(8,"button",3),_("click",function(){return T(s),w(n.clear())}),l(9,"Clear"),a(),o(10,"button",3),_("click",function(){return T(s),w(n.update())}),l(11,"Update (leave only short)"),a()(),o(12,"div",4)(13,"p"),l(14),a(),o(15,"p"),l(16),a(),o(17,"ol",5),B(18,F0,2,1,"li",null,gt),a()()}i&2&&(d(14),E("isEmpty: ",n.exampleSignal.isEmpty().toString(),""),d(2),E("size: ",n.exampleSignal.size().toString(),""),d(2),H(n.exampleSignal()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:3rem}button[_ngcontent-%COMP%]{margin-top:.75rem;margin-right:1rem;padding:0 .125rem}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0;line-height:1.2}"]})}}return t})();var yF={component:cd,html:`<div class="left-side">\r
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
`};var pd=(()=>{class t{constructor(){this.throttledValue=eo("",500)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["throttled-signal-example"]],decls:5,vars:2,consts:[["for","throttled-input"],["type","text","id","throttled-input","placeholder","Search...",3,"ngModelChange","ngModel"]],template:function(i,n){i&1&&(o(0,"label",0),l(1,"What are you looking for?"),a(),o(2,"input",1),z("ngModelChange",function(c){return $(n.throttledValue,c)||(n.throttledValue=c),c}),a(),o(3,"p"),l(4),a()),i&2&&(d(2),Y("ngModel",n.throttledValue),d(2),E("Throttled value: ",n.throttledValue(),""))},dependencies:[pe,ye,de,Ce],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var SF={component:pd,html:`<label for="throttled-input">What are you looking for?</label>\r
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
`};function I0(t,r){if(t&1&&(o(0,"tr")(1,"td"),l(2),a(),o(3,"td"),l(4),a()()),t&2){let e=r.$implicit;d(2),v(e[0]),d(2),v(e[1])}}var ud=(()=>{class t{constructor(){this.exampleSignal=to(["Peas",5,!0])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["tuple-signal-basic-example"]],decls:24,vars:3,consts:[[1,"left-side"],[1,"row"],["type","text",3,"ngModelChange","ngModel"],["type","number",3,"ngModelChange","ngModel"],["type","checkbox",3,"ngModelChange","ngModel"],[1,"right-side"],["width","32"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"div",1)(2,"label"),l(3,"Value at index 0"),a(),o(4,"input",2),_("ngModelChange",function(c){return n.exampleSignal.setAt(0,c)}),a()(),o(5,"div",1)(6,"label"),l(7,"Value at index 1"),a(),o(8,"input",3),_("ngModelChange",function(c){return n.exampleSignal.setAt(1,c)}),a()(),o(9,"div",1)(10,"label"),l(11,"Value at index 2"),a(),o(12,"input",4),_("ngModelChange",function(c){return n.exampleSignal.setAt(2,c)}),a()()(),o(13,"div",5)(14,"table")(15,"thead")(16,"tr")(17,"th",6),l(18,"Key"),a(),o(19,"th"),l(20,"Value"),a()()(),o(21,"tbody"),B(22,I0,5,2,"tr",null,Q),a()()()),i&2&&(d(4),m("ngModel",n.exampleSignal()[0]),d(4),m("ngModel",n.exampleSignal()[1]),d(4),m("ngModel",n.exampleSignal()[2]),d(10),H(n.exampleSignal.entriesArray()))},dependencies:[pe,ye,ln,ja,de,Ce],styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:1rem}.row[_ngcontent-%COMP%]{padding:.5rem 0}input[_ngcontent-%COMP%]{max-width:10rem}label[_ngcontent-%COMP%]{padding-bottom:0}"]})}}return t})();var MF={component:ud,html:`<div class="left-side">\r
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
`};var M0=["exampleBox"],k0=(t,r,e,i)=>({width:t,height:r,padding:e,borderWidth:i}),md=(()=>{class t{constructor(){this.width=A("200px"),this.height=A("100px"),this.padding=A("12px 24px"),this.border=A("4px"),this.exampleBox=De("exampleBox"),this._cd=I(Vi)}onScroll(){this._cd.markForCheck()}getBoundingClientRect(){return this.exampleBox().nativeElement.getBoundingClientRect()}getPaddingRect(){return ro(this.exampleBox())}getContentRect(){return no(this.exampleBox())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["dom-boxes-example"]],viewQuery:function(i,n){i&1&&Ee(n.exampleBox,M0,5),i&2&&le()},hostBindings:function(i,n){i&1&&_("scroll",function(){return n.onScroll()},!1,st)("resize",function(){return n.onScroll()},!1,Xn)},decls:54,vars:22,consts:[["exampleBox",""],[1,"inputs"],["for","width"],["type","text","id","width",3,"ngModelChange","ngModel"],["for","height"],["type","text","id","height",3,"ngModelChange","ngModel"],["for","padding"],["type","text","id","padding",3,"ngModelChange","ngModel"],["for","border"],["type","text","id","border",3,"ngModelChange","ngModel"],[1,"example-box",3,"ngStyle"],[1,"values"],[1,"value"]],template:function(i,n){if(i&1){let s=N();o(0,"div",1)(1,"div")(2,"label",2),l(3,"Width"),a(),o(4,"input",3),z("ngModelChange",function(p){return T(s),$(n.width,p)||(n.width=p),w(p)}),a()(),o(5,"div")(6,"label",4),l(7,"Height"),a(),o(8,"input",5),z("ngModelChange",function(p){return T(s),$(n.height,p)||(n.height=p),w(p)}),a()(),o(9,"div")(10,"label",6),l(11,"Padding"),a(),o(12,"input",7),z("ngModelChange",function(p){return T(s),$(n.padding,p)||(n.padding=p),w(p)}),a()(),o(13,"div")(14,"label",8),l(15,"Border"),a(),o(16,"input",9),z("ngModelChange",function(p){return T(s),$(n.border,p)||(n.border=p),w(p)}),a()()(),o(17,"div",10,0),y(19,"div"),a(),o(20,"div",11)(21,"div",12)(22,"strong"),l(23,"Bounding Client Rect"),a(),o(24,"span"),l(25),a(),o(26,"span"),l(27),a(),o(28,"span"),l(29),a(),o(30,"span"),l(31),a()(),o(32,"div",12)(33,"strong"),l(34,"Padding Rect"),a(),o(35,"span"),l(36),a(),o(37,"span"),l(38),a(),o(39,"span"),l(40),a(),o(41,"span"),l(42),a()(),o(43,"div",12)(44,"strong"),l(45,"Content Rect"),a(),o(46,"span"),l(47),a(),o(48,"span"),l(49),a(),o(50,"span"),l(51),a(),o(52,"span"),l(53),a()()()}i&2&&(d(4),Y("ngModel",n.width),d(4),Y("ngModel",n.height),d(4),Y("ngModel",n.padding),d(4),Y("ngModel",n.border),d(),m("ngStyle",Oa(17,k0,n.width(),n.height(),n.padding(),n.border())),d(8),E("Top: ",n.getBoundingClientRect().top,""),d(2),E("Left: ",n.getBoundingClientRect().left,""),d(2),E("Width: ",n.getBoundingClientRect().width,""),d(2),E("Height: ",n.getBoundingClientRect().height,""),d(5),E("Top: ",n.getPaddingRect().top,""),d(2),E("Left: ",n.getPaddingRect().left,""),d(2),E("Width: ",n.getPaddingRect().width,""),d(2),E("Height: ",n.getPaddingRect().height,""),d(5),E("Top: ",n.getContentRect().top,""),d(2),E("Left: ",n.getContentRect().left,""),d(2),E("Width: ",n.getContentRect().width,""),d(2),E("Height: ",n.getContentRect().height,""))},dependencies:[ie,Ba,pe,ye,de,Ce],styles:[".inputs[_ngcontent-%COMP%]{display:grid;grid-template-columns:max-content max-content;grid-template-rows:max-content max-content;gap:1rem 2rem}.example-box[_ngcontent-%COMP%]{margin:2rem 0;background-color:#c3deb7;border:solid #FFEEBC;box-sizing:content-box}.example-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#a0c5e8;height:100%}.values[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,max-content);gap:2rem}.values[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:max-content}"]})}}return t})();var NF={component:md,html:`<div class="inputs">\r
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
`};var hd=(()=>{class t{constructor(){this.inputValue=A("How would <b>this</b> text be displayed?")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["escape-html-example"]],decls:13,vars:5,consts:[[3,"ngModelChange","ngModel"],[1,"grid"],[3,"innerHTML"]],template:function(i,n){i&1&&(o(0,"textarea",0),z("ngModelChange",function(c){return $(n.inputValue,c)||(n.inputValue=c),c}),a(),o(1,"div",1)(2,"div")(3,"strong"),l(4,"Unescaped:"),a(),y(5,"br")(6,"p",2),a(),o(7,"div")(8,"strong"),l(9,"Escaped:"),a(),y(10,"br")(11,"p",2),Xe(12,"escapeHTML"),a()()),i&2&&(Y("ngModel",n.inputValue),d(6),m("innerHTML",n.inputValue(),se),d(5),m("innerHTML",wt(12,3,n.inputValue()),se))},dependencies:[pr,cr,pe,ye,de,Ce],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:.5rem}textarea[_ngcontent-%COMP%]{padding:.25rem .375rem;min-height:5em;resize:vertical}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}strong[_ngcontent-%COMP%]{line-height:1.5}"]})}}return t})();var QF={component:hd,html:`<textarea [(ngModel)]="inputValue"></textarea>\r
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
}`};var fd=(()=>{class t{constructor(){this.file=A(void 0)}onFileUpload(e){this.file.set(e.target.files?.[0])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["file-pipes-example"]],decls:21,vars:10,consts:[["type","file","id","file",3,"change"],[1,"values"]],template:function(i,n){if(i&1&&(o(0,"input",0),_("change",function(c){return n.onFileUpload(c)}),a(),o(1,"div",1)(2,"strong"),l(3,"Full file name:"),a(),o(4,"span"),l(5),a(),o(6,"strong"),l(7,"File name:"),a(),o(8,"span"),l(9),Xe(10,"filename"),a(),o(11,"strong"),l(12,"File extension:"),a(),o(13,"span"),l(14),Xe(15,"fileext"),a(),o(16,"strong"),l(17,"File size:"),a(),o(18,"span"),l(19),Xe(20,"filesize"),a()()),i&2){let s;d(5),v((s=n.file())==null?null:s.name),d(4),v(wt(10,4,n.file())),d(5),v(wt(15,6,n.file())),d(5),v(wt(20,8,n.file()))}},dependencies:[fr,ur,mr,hr],styles:[".values[_ngcontent-%COMP%]{margin-top:1rem;display:grid;grid-template-columns:max-content max-content;gap:.25rem 1rem}"]})}}return t})();var iI={component:fd,html:`<input type="file" id="file" (change)="onFileUpload($event)">\r
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
`};function P0(t,r){if(t&1){let e=N();o(0,"button",0),_("click",function(){T(e);let n=f();return w(n.onButtonClick())}),l(1,"Find out"),a()}}function V0(t,r){t&1&&(o(0,"p"),l(1,"File System API is "),o(2,"strong",1),l(3,"supported"),a(),l(4,"! You can view the below examples."),a())}function O0(t,r){t&1&&(o(0,"p"),l(1," File System API is "),o(2,"strong",2),l(3,"not supported"),a(),l(4,". You will not be able to correctly view the below examples. See the "),o(5,"a",3),l(6,"caniuse.com page"),a(),l(7,` to find out which browsers are supported.
`),a())}function R0(t,r){if(t&1&&g(0,V0,5,0,"p")(1,O0,8,0,"p"),t&2){let e=f();C(e.isSupported()?0:1)}}var gd=(()=>{class t{constructor(){this.fileSystem=I($t),this.hasClicked=A(!1),this.isSupported=A(!1)}onButtonClick(){this.hasClicked.set(!0),this.isSupported.set(this.fileSystem.isFileSystemAPISupported("showOpenFilePicker"))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["file-system-is-supported-example"]],decls:5,vars:2,consts:[[3,"click"],[1,"supported"],[1,"not-supported"],["href","https://caniuse.com/native-filesystem-api"]],template:function(i,n){i&1&&(o(0,"p")(1,"span"),l(2,"Does your browser support File System API?"),a(),g(3,P0,2,0,"button"),a(),g(4,R0,2,1)),i&2&&(d(3),C(n.hasClicked()?-1:3),d(),C(n.hasClicked()?4:-1))},styles:["button[_ngcontent-%COMP%]{margin-left:1ch}.supported[_ngcontent-%COMP%]{color:green}.not-supported[_ngcontent-%COMP%]{color:#ff4500}"]})}}return t})();var dI={component:gd,html:`<p>\r
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
`};function L0(t,r){if(t&1&&(l(0," Uploaded "),o(1,"i"),l(2),a()),t&2){let e=f();d(2),v(e.fileName())}}function B0(t,r){t&1&&l(0," File upload request was cancelled. ")}var _d=(()=>{class t{constructor(){this.fileSystem=I($t),this.successfulUpload=A(null),this.fileName=A("")}onButtonClick(){return Fe(this,null,function*(){let e=yield this.fileSystem.requestFileUpload({directoryId:"gorilla",startDirectory:dn.Downloads,method:Bi.PreferFileSystem,multiple:!1,types:[{description:"Text files",accept:{"text/plain":[".txt"]}},{description:"Image files",accept:{"image/png":[".png"],"image/jpeg":[".jpg",".jpeg"]}},{description:"PDF files",accept:{"application/pdf":[".pdf"]}}]});this.successfulUpload.set(!!e),this.successfulUpload()&&this.fileName.set(e?.name??"No file name")})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["file-system-request-upload-example"]],decls:5,vars:1,consts:[[3,"click"]],template:function(i,n){i&1&&(o(0,"button",0),_("click",function(){return n.onButtonClick()}),l(1,"Click here to upload a file"),a(),o(2,"p"),g(3,L0,3,1)(4,B0,1,0),a()),i&2&&(d(3),C(n.successfulUpload()===!0?3:n.successfulUpload()===!1?4:-1))},dependencies:[ie],encapsulation:2})}}return t})();var vI={component:_d,html:`<button (click)="onButtonClick()">Click here to upload a file</button>\r
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
`};var vd=(()=>{class t{constructor(){this.fileSystem=I($t),this.fileName=A("gorillas.txt"),this.textToSave=A("Gorillas like to eat bamboo.")}onButtonClick(){this.fileSystem.saveAs(this.textToSave(),{fileName:this.fileName(),method:Bi.PreferFileSystem,directoryId:"gorillas",startDirectory:dn.Downloads})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["file-system-save-as-example"]],decls:4,vars:2,consts:[["type","text",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,n){i&1&&(o(0,"input",0),z("ngModelChange",function(c){return $(n.fileName,c)||(n.fileName=c),c}),a(),o(1,"textarea",1),z("ngModelChange",function(c){return $(n.textToSave,c)||(n.textToSave=c),c}),a(),o(2,"button",2),_("click",function(){return n.onButtonClick()}),l(3,"Save to file"),a()),i&2&&(Y("ngModel",n.fileName),d(),Y("ngModel",n.textToSave))},dependencies:[ie,pe,ye,de,Ce],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:.5rem;align-items:flex-start}input[_ngcontent-%COMP%]{min-width:200px}textarea[_ngcontent-%COMP%]{min-width:300px;min-height:100px}"]})}}return t})();var EI={component:vd,html:`<input type="text" [(ngModel)]="fileName">\r
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
`};var yd=(()=>{class t{constructor(){this.eventCounter=A(0)}onHoldEvent(){this.eventCounter.update(e=>e+1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["hold-basic-example"]],decls:4,vars:1,consts:[[3,"ardHold"]],template:function(i,n){i&1&&(o(0,"button",0),_("ardHold",function(){return n.onHoldEvent()}),l(1,"Click and Hold"),a(),o(2,"p"),l(3),a()),i&2&&(d(3),E(" Total events fired: ",n.eventCounter(),`
`))},dependencies:[pi,ci],encapsulation:2})}}return t})();var VI={component:yd,html:`<button (ardHold)="onHoldEvent()">Click and Hold</button>\r
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
`};var Cd=(()=>{class t{constructor(){this.eventCounter=A(0)}onHoldEvent(){this.eventCounter.update(e=>e+1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["hold-timings-example"]],decls:4,vars:1,consts:[["ardHoldDelay","2000","ardHoldRepeat","200",3,"ardHold"]],template:function(i,n){i&1&&(o(0,"button",0),_("ardHold",function(){return n.onHoldEvent()}),l(1,` Click and Hold - but this time very slow
`),a(),o(2,"p"),l(3),a()),i&2&&(d(3),E("Total events fired: ",n.eventCounter(),""))},dependencies:[pi,ci],encapsulation:2})}}return t})();var NI={component:Cd,html:`<button (ardHold)="onHoldEvent()" ardHoldDelay="2000" ardHoldRepeat="200">\r
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
`};function H0(t,r){if(t&1&&(o(0,"div"),l(1),a()),t&2){let e=r.$implicit;d(),v(e)}}var bd=(()=>{class t{constructor(){this.currentPage=A(1),this.items=F(()=>new Array(this.currentPage()*5).fill(0).map((e,i)=>i)),this.isInfScrollActive=A(!0)}onThresholdReach(){console.log(`Threshold has been reached! Loading data for page ${this.currentPage()+1}...`),setTimeout(()=>{this.currentPage.update(e=>e+1),this.isInfScrollActive.set(!0)},100)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["infinite-scroll-host-example"]],decls:3,vars:1,consts:[["ardInfScroll","","ardInfScrollTarget","host",1,"scroll-host",3,"ardInfScrollReachThreshold","ardInfScrollActiveChange","ardInfScrollActive"]],template:function(i,n){i&1&&(o(0,"div",0),_("ardInfScrollReachThreshold",function(){return n.onThresholdReach()}),z("ardInfScrollActiveChange",function(c){return $(n.isInfScrollActive,c)||(n.isInfScrollActive=c),c}),B(1,H0,2,1,"div",null,Q),a()),i&2&&(Y("ardInfScrollActive",n.isInfScrollActive),d(),H(n.items()))},dependencies:[Ka,Wa],styles:[".scroll-host[_ngcontent-%COMP%]{height:50vh;width:50vh;overflow-y:auto;border:1px solid red;margin:0 auto}.scroll-host[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:20vh;border-bottom:1px solid black;position:relative;display:grid;place-items:center;font-size:40px;font-weight:700}"]})}}return t})();var qI={component:bd,html:`<div\r
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
`};var U0=t=>({"--position":t}),ga=400,xd=ga/20,Td=(()=>{class t{constructor(){this.keyboard=I(St),this.position=A(ga/2)}ngOnInit(){this.keyboard.listenToKey("A").subscribe(()=>{this.position()<=0||this.position.update(e=>e-xd)}),this.keyboard.listenToKey("D").subscribe(()=>{this.position()>=ga||this.position.update(e=>e+xd)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["keyboard-service-listen-to-key-example"]],decls:10,vars:4,consts:[[1,"square-container"],[1,"square"]],template:function(i,n){i&1&&(o(0,"div",0),y(1,"div",1),a(),o(2,"p"),l(3," Click "),o(4,"ard-kbd"),l(5,"A"),a(),l(6," or "),o(7,"ard-kbd"),l(8,"D"),a(),l(9,` to move the square.
`),a()),i&2&&(d(),be(fe(2,U0,n.position()+"px")))},dependencies:[Ae,Ke],styles:[".square-container[_ngcontent-%COMP%]{width:450px;border:1px solid var(--ard-detail-light);margin-bottom:1rem}.square[_ngcontent-%COMP%]{width:50px;height:50px;position:relative;left:var(--position);background-color:#9932cc}"]})}}return t})();var iM={component:Td,html:`<div class="square-container">\r
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
`};var wd=(()=>{class t{constructor(){this.keyboard=I(St),this.isZeroHeld=A(!1)}ngOnInit(){this.keyboard.listenToKeyState("0").subscribe(({isHeld:e})=>{this.isZeroHeld.set(e)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["keyboard-service-listen-to-key-state-example"]],decls:5,vars:3,template:function(i,n){i&1&&(o(0,"p"),l(1," The zero key is currently "),o(2,"strong"),l(3),a(),l(4,`.
`),a()),i&2&&(d(2),me(n.isZeroHeld()?"held":"not-held"),d(),v(n.isZeroHeld()?"pressed":"idle"))},dependencies:[Ae],styles:[".held[_ngcontent-%COMP%]{color:green}.not-held[_ngcontent-%COMP%]{color:red}"]})}}return t})();var cM={component:wd,html:`<p>\r
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
`};function N0(t,r){t&1&&(o(0,"label",1),l(1,"Search"),a(),y(2,"input",2))}var Sd=(()=>{class t{constructor(){this.keyboard=I(St),this.isOpen=A(!1)}ngOnInit(){this.keyboard.listenToShortcut(["Ctrl","F"]).subscribe(({event:e})=>{e.preventDefault(),this.isOpen.update(i=>!i)}),this.keyboard.listenToShortcut(["ShiftRight","Q"]).subscribe(()=>alert("RightShift + Q was pressed!"))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["keyboard-service-listen-to-shortcut-example"]],decls:11,vars:1,consts:[["full","false"],["for","example-search-bar"],["type","text","id","example-search-bar"]],template:function(i,n){i&1&&(o(0,"p"),l(1,"Press "),o(2,"ard-kbd-shortcut",0),l(3,"Ctrl+F"),a(),l(4," to toggle a search bar."),a(),o(5,"p"),l(6,"Press "),o(7,"ard-kbd-shortcut",0),l(8,"RightShift+Q"),a(),l(9," to show an alert."),a(),g(10,N0,3,0)),i&2&&(d(10),C(n.isOpen()?10:-1))},dependencies:[bi,Ci],styles:["input[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return t})();var vM={component:Sd,html:`<p>Press <ard-kbd-shortcut full="false">Ctrl+F</ard-kbd-shortcut> to toggle a search bar.</p>\r
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
`};var Dd=(()=>{class t{constructor(){this.keyboard=I(St)}getModifierKeyText(e){return e?"pressed":"idle"}getModifierKeyClass(e){return e?"down":"up"}getLockKeyText(e){return e===void 0?"unknown":e?"active":"inactive"}getLockKeyClass(e){return e===void 0?"unknown":e?"down":"up"}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["keyboard-service-modifier-key-state-example"]],decls:72,vars:42,consts:[[1,"container"],[1,"modifier-table"],["scope","col"],["scope","row"],[1,"not-applicable"],[1,"lock-table"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th",2),l(5,"Key"),a(),o(6,"th",2),l(7,"Left"),a(),o(8,"th",2),l(9,"Right"),a(),o(10,"th",2),l(11,"Any"),a()()(),o(12,"tbody")(13,"tr")(14,"th",3),l(15,"Ctrl"),a(),o(16,"td"),l(17),a(),o(18,"td"),l(19),a(),o(20,"td"),l(21),a()(),o(22,"tr")(23,"th",3),l(24,"Alt"),a(),o(25,"td"),l(26),a(),o(27,"td"),l(28),a(),o(29,"td",4),l(30,"N/A"),a()(),o(31,"tr")(32,"th",3),l(33,"Shift"),a(),o(34,"td"),l(35),a(),o(36,"td"),l(37),a(),o(38,"td"),l(39),a()(),o(40,"tr")(41,"th",3),l(42,"Meta"),a(),o(43,"td"),l(44),a(),o(45,"td"),l(46),a(),o(47,"td"),l(48),a()()()(),o(49,"table",5)(50,"thead")(51,"tr")(52,"th",2),l(53,"Key"),a(),o(54,"th",2),l(55,"State"),a()()(),o(56,"tbody")(57,"tr")(58,"th",3),l(59,"Caps Lock"),a(),o(60,"td"),l(61),a()(),o(62,"tr")(63,"th",3),l(64,"Num Lock"),a(),o(65,"td"),l(66),a()(),o(67,"tr")(68,"th",3),l(69,"Scroll Lock"),a(),o(70,"td"),l(71),a()()()()()),i&2&&(d(16),me(n.getModifierKeyClass(n.keyboard.isLeftCtrlHeld())),d(),v(n.getModifierKeyText(n.keyboard.isLeftCtrlHeld())),d(),me(n.getModifierKeyClass(n.keyboard.isRightCtrlHeld())),d(),v(n.getModifierKeyText(n.keyboard.isRightCtrlHeld())),d(),me(n.getModifierKeyClass(n.keyboard.isCtrlHeld())),d(),v(n.getModifierKeyText(n.keyboard.isCtrlHeld())),d(4),me(n.getModifierKeyClass(n.keyboard.isAltHeld())),d(),v(n.getModifierKeyText(n.keyboard.isAltHeld())),d(),me(n.getModifierKeyClass(n.keyboard.isAltGraphHeld())),d(),v(n.getModifierKeyText(n.keyboard.isAltGraphHeld())),d(6),me(n.getModifierKeyClass(n.keyboard.isLeftShiftHeld())),d(),v(n.getModifierKeyText(n.keyboard.isLeftShiftHeld())),d(),me(n.getModifierKeyClass(n.keyboard.isRightShiftHeld())),d(),v(n.getModifierKeyText(n.keyboard.isRightShiftHeld())),d(),me(n.getModifierKeyClass(n.keyboard.isShiftHeld())),d(),v(n.getModifierKeyText(n.keyboard.isShiftHeld())),d(4),me(n.getModifierKeyClass(n.keyboard.isLeftMetaHeld())),d(),v(n.getModifierKeyText(n.keyboard.isLeftMetaHeld())),d(),me(n.getModifierKeyClass(n.keyboard.isRightMetaHeld())),d(),v(n.getModifierKeyText(n.keyboard.isRightMetaHeld())),d(),me(n.getModifierKeyClass(n.keyboard.isMetaHeld())),d(),v(n.getModifierKeyText(n.keyboard.isMetaHeld())),d(12),me(n.getLockKeyClass(n.keyboard.capsLockState())),d(),v(n.getLockKeyText(n.keyboard.capsLockState())),d(4),me(n.getLockKeyClass(n.keyboard.numLockState())),d(),v(n.getLockKeyText(n.keyboard.numLockState())),d(4),me(n.getLockKeyClass(n.keyboard.scrollLockState())),d(),v(n.getLockKeyText(n.keyboard.scrollLockState())))},dependencies:[Ae],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:1.75rem}table[_ngcontent-%COMP%]{table-layout:fixed;width:max-content}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:.25rem .5rem;border-collapse:collapse;border:1px solid var(--ard-detail)}th[_ngcontent-%COMP%]{font-weight:600;background-color:var(--ard-bg-filled)}td[_ngcontent-%COMP%]{font-weight:500}.down[_ngcontent-%COMP%]{color:green}.up[_ngcontent-%COMP%]{color:red}.unknown[_ngcontent-%COMP%]{font-weight:400;font-style:italic}.not-applicable[_ngcontent-%COMP%]{font-weight:400}.modifier-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{width:8.1ch}.modifier-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-of-type{width:6ch}.lock-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-of-type{width:8.75ch}"]})}}return t})();var DM={component:Dd,html:`<div class="container">\r
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
`};var j0=["targetBox"];function Y0(t,r){if(t&1&&(o(0,"tr")(1,"th",4),l(2,"Left"),a(),o(3,"td"),l(4),a(),o(5,"td"),l(6),a()(),o(7,"tr")(8,"th",4),l(9,"Right"),a(),o(10,"td"),l(11),a(),o(12,"td"),l(13),a()(),o(14,"tr")(15,"th",4),l(16,"Top"),a(),o(17,"td"),l(18),a(),o(19,"td"),l(20),a()(),o(21,"tr")(22,"th",4),l(23,"Bottom"),a(),o(24,"td"),l(25),a(),o(26,"td"),l(27),a()()),t&2){let e,i,n,s,c,p,b,O,k=f();d(4),v((e=k.lastEventData())==null?null:e.left),d(2),v((i=k.lastEventData())==null?null:i.overflowsLeft),d(5),v((n=k.lastEventData())==null?null:n.right),d(2),v((s=k.lastEventData())==null?null:s.overflowsRight),d(5),v((c=k.lastEventData())==null?null:c.top),d(2),v((p=k.lastEventData())==null?null:p.overflowsTop),d(5),v((b=k.lastEventData())==null?null:b.bottom),d(2),v((O=k.lastEventData())==null?null:O.overflowsBottom)}}function $0(t,r){t&1&&(o(0,"tr")(1,"th",4),l(2,"Left"),a(),o(3,"td",5),l(4,"Waiting for events..."),a()(),o(5,"tr")(6,"th",4),l(7,"Right"),a()(),o(8,"tr")(9,"th",4),l(10,"Top"),a()(),o(11,"tr")(12,"th",4),l(13,"Bottom"),a()())}var Ed=(()=>{class t{constructor(){this.lastEventData=A(null),this.targetBox=De("targetBox")}onClick(e){this.targetBox()&&this.lastEventData.set(ao(e,this.targetBox()))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["relative-pos-basic-example"]],viewQuery:function(i,n){i&1&&Ee(n.targetBox,j0,5),i&2&&le()},hostBindings:function(i,n){i&1&&_("click",function(c){return n.onClick(c)},!1,st)},decls:18,vars:1,consts:[["targetBox",""],[1,"container"],[1,"target-box"],["scope","col"],["scope","row"],["colspan","2","rowspan","4",1,"waiting"]],template:function(i,n){i&1&&(o(0,"p"),l(1,` Click anywhere to show the click position relative to the target box.
`),a(),o(2,"div",1)(3,"div",2,0),l(5,"Target box"),a(),o(6,"table")(7,"thead")(8,"tr")(9,"th",3),l(10,"Direction"),a(),o(11,"th",3),l(12,"Relative pos"),a(),o(13,"th",3),l(14,"Overflows?"),a()()(),o(15,"tbody"),g(16,Y0,28,8)(17,$0,14,0),a()()()),i&2&&(d(16),C(n.lastEventData()?16:17))},styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:1.75rem}.target-box[_ngcontent-%COMP%]{width:150px;height:100px;background-color:salmon;display:grid;place-items:center}table[_ngcontent-%COMP%]{table-layout:fixed;width:max-content}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:.25rem .5rem;border-collapse:collapse;border:1px solid var(--ard-detail)}th[_ngcontent-%COMP%]{font-weight:600;background-color:var(--ard-bg-filled)}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-of-type{width:6ch}"]})}}return t})();var VM={component:Ed,html:`<p>\r
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
`};var z0=["item"];function W0(t,r){if(t&1){let e=N();o(0,"div",4)(1,"code"),l(2,"viewportRelation"),a(),o(3,"span"),l(4),a(),o(5,"code"),l(6,"isInViewport"),a(),o(7,"span"),l(8),a(),o(9,"code"),l(10,"position.top"),a(),o(11,"span"),l(12),Xe(13,"number"),a(),o(14,"code"),l(15,"position.bottom"),a(),o(16,"span"),l(17),Xe(18,"number"),a(),y(19,"div"),o(20,"button",3),_("click",function(){T(e);let n=f();return w(n.toggleOverlay())}),l(21,"Close"),a()()}if(t&2){let e,i,n,s,c=f();d(4),v((e=c.observerRef())==null?null:e.viewportRelation()),d(4),v((i=c.observerRef())==null?null:i.isInViewport()),d(4),v(Pi(13,4,(n=c.observerRef())==null||(n=n.position())==null?null:n.top,"1.5-5")),d(5),v(Pi(18,7,(s=c.observerRef())==null||(s=s.position())==null?null:s.bottom,"1.5-5"))}}var Ad=(()=>{class t{constructor(){this.vss=I(za),this.isOverlayActive=A(!1),this.element=De("item"),this.observerRef=A(null)}toggleOverlay(){this.isOverlayActive.update(e=>!e)}ngAfterViewInit(){let e=this.element();e&&this.observerRef.set(this.vss.observeElement(e))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["viewport-observer-observer-ref-example"]],viewQuery:function(i,n){i&1&&Ee(n.element,z0,5),i&2&&le()},decls:7,vars:1,consts:[["item",""],[1,"container"],[1,"item"],[3,"click"],[1,"overlay"]],template:function(i,n){if(i&1){let s=N();o(0,"div",1)(1,"div",2,0),l(3,"Observed element"),a(),o(4,"button",3),_("click",function(){return T(s),w(n.toggleOverlay())}),l(5,"Toggle overlay"),a()(),g(6,W0,22,10,"div",4)}i&2&&(d(6),C(n.isOverlayActive()?6:-1))},dependencies:[ar],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:space-around}.item[_ngcontent-%COMP%]{height:150px;width:225px;background-color:#deb887;display:grid;place-items:center}.overlay[_ngcontent-%COMP%]{position:fixed;top:5rem;left:20rem;z-index:9;padding:1.5rem;background-color:var(--ard-bg);border:1px solid var(--ard-border);display:grid;grid-template-columns:max-content 12ch;gap:.5rem}"]})}}return t})();var jM={component:Ad,html:`<div class="container">\r
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
`};function Fd(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,i)}return e}function Id(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?Fd(Object(e),!0).forEach(function(i){K0(t,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Fd(Object(e)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))})}return t}function K0(t,r,e){return r=q0(r),r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function q0(t){var r=Q0(t,"string");return typeof r=="symbol"?r:String(r)}function Q0(t,r){if(typeof t!="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var i=e.call(t,r||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}var G0=Md({}),dk=G0;function Md(t){return r.withOptions=e=>Md(Id(Id({},t),e)),r;function r(e,...i){let n=typeof e=="string"?[e]:e.raw,{alignValues:s=!1,escapeSpecialCharacters:c=Array.isArray(e),trimWhitespace:p=!0}=t,b="";for(let W=0;W<n.length;W++){let D=n[W];if(c&&(D=D.replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`").replace(/\\\$/g,"$").replace(/\\\{/g,"{")),b+=D,W<i.length){let P=s?X0(i[W],b):i[W];b+=P}}let O=b.split(`
`),k=null;for(let W of O){let D=W.match(/^(\s+)\S+/);if(D){let P=D[1].length;k?k=Math.min(k,P):k=P}}if(k!==null){let W=k;b=O.map(D=>D[0]===" "||D[0]==="	"?D.slice(W):D).join(`
`)}return p&&(b=b.trim()),c&&(b=b.replace(/\\n/g,`
`)),b}}function X0(t,r){if(typeof t!="string"||!t.includes(`
`))return t;let i=r.slice(r.lastIndexOf(`
`)+1).match(/^(\s+)/);if(i){let n=i[1];return t.replace(/\n/g,`
${n}`)}return t}var kd={[xt.FormElements]:1,[xt.Buttons]:2,[xt.DataDisplay]:3,[xt.Feedback]:4,[xt.Layout]:5,[xt.Popups]:6,[xt.Stars]:7,[xt.CustomSignals]:1};function Pd(t,r){return kd[t.group]-kd[r.group]}var Z0=(t,r)=>r.group;function J0(t,r){if(t&1&&(o(0,"p",1),l(1),a()),t&2){let e=f().$implicit;d(),v(e.group)}}function ev(t,r){if(t&1&&y(0,"img",5),t&2){let e=f().$implicit;m("src",e.img,nn)}}function tv(t,r){if(t&1&&(o(0,"a",3)(1,"ard-card",4),g(2,ev,1,1,"img",5),o(3,"ard-card-content")(4,"ard-card-title"),l(5),a(),o(6,"p"),l(7),a()()()()),t&2){let e=r.$implicit;m("routerLink",e.path),d(2),C(e.img?2:-1),d(3),v(e.name),d(2),v(e.desc)}}function iv(t,r){if(t&1&&(g(0,J0,2,1,"p",1),o(1,"div",2),B(2,tv,8,4,"a",3,Q),a()),t&2){let e=r.$implicit;C(e.group?0:-1),d(2),H(e.children)}}var yk=(()=>{class t{constructor(){this.module=u.required(),this.data=u.required(),this.mappedRouteData=F(()=>Ns(this.data(),e=>e.groupName??"").sort(Pd).map(e=>({group:e.group,children:e.children.map(i=>K(S({},i),{path:`/${this.module()}/${i.path}`})).sort((i,n)=>i.name.localeCompare(n.name))}))),this.topText=u.required()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=h({type:t,selectors:[["app-home-page"]],inputs:{module:[1,"module"],data:[1,"data"],topText:[1,"topText"]},decls:5,vars:1,consts:[[1,"center-text"],[1,"group-name"],[1,"component-grid"],[3,"routerLink"],["appearance","outlined"],["ard-card-image","",3,"src"]],template:function(i,n){i&1&&(o(0,"article")(1,"p",0),l(2),a(),B(3,iv,4,1,null,null,Z0),a()),i&2&&(d(2),v(n.topText()),d(),H(n.mappedRouteData()))},dependencies:[Ze,ai,Vs,Ps,Is,Ms,ks],styles:[".center-text[_ngcontent-%COMP%]{padding:1rem 0;text-align:center}.component-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,280px);padding:1.25rem;gap:2.5rem;justify-content:center}a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]{width:280px;height:100%;background-color:transparent;transition:background-color .15s ease-in-out}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;min-width:calc(100% + 2px);left:-1px;top:-1px;min-height:10rem;border:1px solid transparent}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]   ard-card-title[_ngcontent-%COMP%]{padding-bottom:1rem;padding-top:.5rem}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-bottom:0}a[_ngcontent-%COMP%]:hover   ard-card[_ngcontent-%COMP%]{background-color:rgba(var(--ard-primary-500),.05)}.group-name[_ngcontent-%COMP%]{text-align:center;font-size:1.25rem;padding-bottom:.5rem;padding-top:1.5rem;color:var(--ard-text3);text-transform:uppercase}"]})}}return t})();export{il as a,Oe as b,En as c,An as d,Se as e,zi as f,Yi as g,nt as h,je as i,Ye as j,$e as k,On as l,Rn as m,Pt as n,Ci as o,bi as p,es as q,xi as r,Ti as s,v1 as t,y1 as u,Ns as v,wi as w,L1 as x,Di as y,Rt as z,Lt as A,ht as B,Gs as C,xt as D,Yx as E,$x as F,Pd as G,at as H,jn as I,lT as J,fT as K,ET as L,kT as M,LT as N,jT as O,KT as P,ZT as Q,aw as R,uw as S,yw as T,Sw as U,Mw as V,Lw as W,jw as X,Kw as Y,Zw as Z,nS as _,cS as $,fS as aa,CS as ba,SS as ca,kS as da,LS as ea,$S as fa,QS as ga,eD as ha,aD as ia,cD as ja,fD as ka,CD as la,ED as ma,VD as na,jD as oa,KD as pa,eE as qa,aE as ra,cE as sa,fE as ta,xE as ua,ME as va,UE as wa,QE as xa,JE as ya,rA as za,dA as Aa,fA as Ba,CA as Ca,DA as Da,kA as Ea,BA as Fa,zA as Ga,XA as Ha,rF as Ia,dF as Ja,hF as Ka,yF as La,SF as Ma,MF as Na,NF as Oa,QF as Pa,iI as Qa,dI as Ra,vI as Sa,EI as Ta,VI as Ua,NI as Va,qI as Wa,iM as Xa,cM as Ya,vM as Za,DM as _a,VM as $a,jM as ab,dk as bb,yk as cb};
