import{$ as Cn,$a as F,$b as mo,A as br,Aa as ge,Ab as Ne,Ac as Mn,B as fi,Ba as b,Bb as Ar,Bc as xo,C as re,Ca as Z,Cb as J,Cc as wo,D as Q,Da as Vt,Db as Xi,Dc as So,E as R,Ea as H,Ec as To,F as N,Fa as U,Fb as io,Fc as Do,G as M,Ga as o,Gb as no,Gc as Eo,H as Ya,Ha as a,Hb as vi,Hc as Ao,I as St,Ia as y,Ib as ro,Ic as Fo,J as D,Ja as Wi,Jb as wn,Jc as Mo,K as E,Ka as Ki,Kb as yi,Kc as Io,L as $a,La as Qa,Lc as Yt,M as tt,Ma as Y,Mb as pt,Mc as $t,N as kt,Na as Xa,Nb as Oe,Nc as In,O as ni,Oa as _,Ob as Ci,Oc as ko,P as it,Pa as f,Pb as ao,Pc as Po,Q as ne,Qa as j,Qb as Se,Qc as Vo,R as m,Ra as B,Rb as at,Rc as Oo,S as ye,Sa as Sr,Sb as oo,Sc as Ro,T,Ta as Tr,Tb as me,U as $i,Ua as Dr,Ub as so,Uc as Lo,V as za,Va as pe,Vb as lo,Vc as Bo,W as Wa,Wa as Ve,Wb as Sn,Wc as Ho,X as Ka,Xa as ce,Xb as co,Xc as Uo,Y as yn,Ya as V,Yb as uo,Z as qa,Za as s,Zb as po,_ as de,_a as C,_b as bi,a as hn,aa as bn,ab as gi,ac as Te,b as fn,ba as qe,bb as W,bc as Tn,c as Le,ca as d,cb as K,cc as xi,d as bt,da as ie,db as q,dc as ho,e as gr,ea as xr,eb as rt,ec as fo,f as _r,fa as we,fb as ai,fc as _e,g as Va,ga as wr,gb as Ut,gc as wi,h as mi,ha as Ht,hb as be,hc as ot,i as gn,ia as Pt,ib as Me,ic as Si,j as vr,ja as Pe,jb as Er,jc as Dn,k as Be,ka as He,kb as Za,kc as Tt,l as Oa,la as xt,lb as Ja,lc as Fr,m as Ra,ma as wt,mc as mt,n as La,na as u,nb as ut,nc as Mr,o as Ba,oa as X,ob as Nt,oc as En,p as _n,pa as $,pb as qi,pc as An,q as ct,qa as xn,qb as oe,qc as Ti,r as yr,ra as fe,rb as Gi,rc as jt,s as Ha,sa as zi,sb as _i,sc as go,t as Cr,ta as ri,tb as x,tc as _o,u as Ua,ua as g,ub as Qi,uc as vo,v as Na,va as Ga,vb as se,vc as yo,w as ja,wa as nt,wb as De,wc as Co,x as hi,xa as h,xb as eo,xc as st,y as vn,ya as te,yb as Ge,yc as bo,z as ii,za as Ce,zb as to,zc as Fn}from"./chunk-ZYWMUFFA.js";import{a as S,b as z,c as mn,d as Yi,e as ke}from"./chunk-FDERIQAA.js";var us=mn(Hn=>{"use strict";Object.defineProperty(Hn,"__esModule",{value:!0});Hn.resolvePath=void 0;var ds=/((?:\??\.|(?:\?\.)?\[).*$|$)/.source,wu=new RegExp(/^([\w$]+)/.source+ds),Su=new RegExp(/^\[(?:(-?\d+(?:\.\d+)?)|(['"`])(.*?)\2)\](?=\??\.|\[(?:(?:-?\d+(?:\.\d+)?)|(['"`]).*?\4)|$)/.source+ds);function Tu(t,r){if(typeof t!="object")throw new TypeError("Expected object argument to be an object, got "+typeof t);if(typeof r!="string")throw new TypeError("Expected path argument to be a string, got "+typeof r);return cs(t,r)}Hn.resolvePath=Tu;function cs(t,r,e=r){if(!r)return t;let i;if([i,r]=Du(r,e),t.hasOwnProperty(i))return cs(t[i],r,e)}function Du(t,r){let e,i,n=t.match(wu);if(n)return e=n[1],i=ls(n[2]),[e,i];if(n=t.match(Su),n)return e=n[1]?Eu(n[1]):n[3],i=ls(n[5]),[e,i];throw new Error("Object path is invalid: "+r)}function ls(t){return t.charAt(0)=="."?t.slice(1):t.charAt(0)=="?"?t.slice(2):t}function Eu(t){return isNaN(Number(t))?t:Number(t)}});var ms=mn(Fi=>{"use strict";Object.defineProperty(Fi,"__esModule",{value:!0});Fi.TakeChance=void 0;function Au(t=0,r=100){let e=new Uint32Array(1);crypto.getRandomValues(e);let i=e[0]/4294967296;return t=Math.ceil(t),r=Math.floor(r),Math.floor(i*(r-t+1))+t}function Kr(t=0,r=1){return Math.random()*(r-t)+t}function zt(t=0,r=100){return Math.round(Kr(t,r))}function Fu(t=.5){return Math.random()<t}function Mu(t,r=0,e=100){let i=[];for(let n=0;n<t;n++)i.push(zt(r,e));return i}function Iu(t,r=0,e=1){let i=[];for(let n=0;n<t;n++)i.push(Kr(r,e));return i}function ps(t=0,r=1,e=1){if(e<=0)throw new Error("Skew cannot be lower than or equal to 0");let i=0,n=0;for(;i===0;)i=Math.random();for(;n===0;)n=Math.random();let l=Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*n);return l=l/10+.5,l>1||l<0?l=ps(t,r,e):(l=Math.pow(l,e),l*=r-t,l+=t),l}function qr(t,r=0,e=t.length-1){return r<0&&(r=0),e>t.length-1&&(e=t.length-1),t[zt(r,e)]}function ku(t){let r=Object.keys(t);return qr(r)}function Un(t){var r;typeof t.from=="string"&&(t.from=t.from.split(""));let e=(r=t.from)!==null&&r!==void 0?r:[];return(t.letters||t.lowercase)&&e.push(..."abcdefghijklmnopqrstuvwxyz".split("")),(t.letters||t.uppercase)&&e.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")),t.numbers&&e.push(..."0123456789".split("")),t.special&&e.push(..."!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("")),e=[...new Set(e)],qr(e)}function Gr(t,r){let e="";for(let i=0;i<t;i++)e+=Un(r);return e}function Pu(t,r=new Date(Date.now())){return new Date(zt(t.valueOf(),r.valueOf()))}function Vu(t=10){let r="";do r=Un({letters:!0,numbers:!0,from:"-_"});while(r<="9"||r=="_");for(let e=1;e<t;e++)r+=Un({letters:!0,numbers:!0,from:"-_"});return r}function Ou(t=16){var r,e,i,n,l,c,p,w;let L="";do L=Gr(t,{letters:!0,numbers:!0,special:!0});while(((e=(r=L.match(/[a-z]/g))===null||r===void 0?void 0:r.length)!==null&&e!==void 0?e:0)<t/4||((n=(i=L.match(/[A-Z]/g))===null||i===void 0?void 0:i.length)!==null&&n!==void 0?n:0)<t/4||((c=(l=L.match(/[0-9]/g))===null||l===void 0?void 0:l.length)!==null&&c!==void 0?c:0)<t/6||((w=(p=L.match(/[!"#$%&'()*+,\-./:;<=>?@[\\]\^_`{|}~]/g))===null||p===void 0?void 0:p.length)!==null&&w!==void 0?w:0)<t/8);return L}function Ru(t=6){return zt(1,t)}function Lu(){return{r:zt(0,255),g:zt(0,255),b:zt(0,255)}}function Bu(){return"#"+Gr(6,{numbers:!0,from:"abcdef"})}Fi.TakeChance={int:zt,secureInt:Au,float:Kr,multipleInt:Mu,multipleFloat:Iu,boolean:Fu,binomial:ps,character:Un,string:Gr,fromArray:qr,fromObject:ku,date:Pu,id:Vu,password:Ou,die:Ru,rgbColor:Lu,hexColor:Bu};Fi.default=Fi.TakeChance});var hs=mn(xe=>{"use strict";Object.defineProperty(xe,"__esModule",{value:!0});xe.approximate=xe.APPROXIMATION_UNITS=xe.roundToMultiple=xe.roundToPrecision=xe.roundFromZero=xe.roundToZero=xe.roundDown=xe.roundUp=xe.round=void 0;function Qr(t){return Math.round(t)}xe.round=Qr;function Xr(t){return Math.ceil(t)}xe.roundUp=Xr;function Zr(t){return Math.floor(t)}xe.roundDown=Zr;function Jr(t){return t<=0?Math.ceil(t):Math.floor(t)}xe.roundToZero=Jr;function ea(t){return t>=0?Math.ceil(t):Math.floor(t)}xe.roundFromZero=ea;function Mi(t,r=1,e="normal"){switch(r=10**r,e){case"normal":return Qr(t*r)/r;case"up":return Xr(t*r)/r;case"down":return Zr(t*r)/r;case"to_zero":return Jr(t*r)/r;case"from_zero":return ea(t*r)/r}}xe.roundToPrecision=Mi;function Hu(t,r,e="normal"){switch(e){case"normal":return Qr(t/r)*r;case"up":return Xr(t/r)*r;case"down":return Zr(t/r)*r;case"to_zero":return Jr(t/r)*r;case"from_zero":return ea(t/r)*r}}xe.roundToMultiple=Hu;xe.APPROXIMATION_UNITS={k:1e3,M:1e6,B:1e9,T:1e12,Qa:1e15,Qi:1e18,Sx:1e21,Sp:1e24,Oc:1e27,No:1e30,Dc:1e33};function Uu(t,r=1,e,i,n,l=!0){var c;if(!e){let L=Object.keys(xe.APPROXIMATION_UNITS);for(let I=0;I<L.length;I++){let G=L[I],A=xe.APPROXIMATION_UNITS[G],P=t/A;if(P>=1&&P<1e3)return i?Mi(P,r).toLocaleString(i)+(l?" ":"")+G:String(Mi(P,r))+(l?" ":"")+G}return String(Mi(t,r).toLocaleString(i))}let p=xe.APPROXIMATION_UNITS[e],w=(c=n?.[e])!==null&&c!==void 0?c:e;return i?Mi(t/p,r).toLocaleString(i)+(l?" ":"")+w:String(Mi(t/p,r))+(l?" ":"")+w}xe.approximate=Uu});var Da=mn((Il,dr)=>{"use strict";(function(){"use strict";var t=function(A,P){return P=P||"",A.replace(/(^|-)/g,"$1\\u"+P).replace(/,/g,"\\u"+P)},r=t("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7","00"),e="a-z"+t("DF-F6,F8-FF","00"),i="A-Z"+t("C0-D6,D8-DE","00"),n="A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via",l=function(A,P,ee,le){return A=A||r,P=P||e,ee=ee||i,le=le||n,{capitalize:new RegExp("(^|["+A+"])(["+P+"])","g"),pascal:new RegExp("(^|["+A+"])+(["+P+ee+"])","g"),fill:new RegExp("["+A+"]+(.|$)","g"),sentence:new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")(['+P+"])","g"),improper:new RegExp("\\b("+le+")\\b","g"),relax:new RegExp("([^"+ee+"])(["+ee+"]*)(["+ee+"])(?=[^"+ee+"]|$)","g"),upper:new RegExp("^[^"+P+"]+$"),hole:/[^\s]\s[^\s]/,apostrophe:/'/g,room:new RegExp("["+A+"]")}},c=l(),p={re:c,unicodes:t,regexps:l,types:[],up:String.prototype.toUpperCase,low:String.prototype.toLowerCase,cap:function(A){return p.up.call(A.charAt(0))+A.slice(1)},decap:function(A){return p.low.call(A.charAt(0))+A.slice(1)},deapostrophe:function(A){return A.replace(c.apostrophe,"")},fill:function(A,P,ee){return P!=null&&(A=A.replace(c.fill,function(le,ze){return ze?P+ze:""})),ee&&(A=p.deapostrophe(A)),A},prep:function(A,P,ee,le){if(A=A==null?"":A+"",!le&&c.upper.test(A)&&(A=p.low.call(A)),!P&&!c.hole.test(A)){var ze=p.fill(A," ");c.hole.test(ze)&&(A=ze)}return!ee&&!c.room.test(A)&&(A=A.replace(c.relax,p.relax)),A},relax:function(A,P,ee,le){return P+" "+(ee?ee+" ":"")+le}},w={_:p,of:function(A){for(var P=0,ee=p.types.length;P<ee;P++)if(w[p.types[P]].apply(w,arguments)===A)return p.types[P]},flip:function(A){return A.replace(/\w/g,function(P){return(P==p.up.call(P)?p.low:p.up).call(P)})},random:function(A){return A.replace(/\w/g,function(P){return(Math.round(Math.random())?p.up:p.low).call(P)})},type:function(A,P){w[A]=P,p.types.push(A)}},L={lower:function(A,P,ee){return p.fill(p.low.call(p.prep(A,P)),P,ee)},snake:function(A){return w.lower(A,"_",!0)},constant:function(A){return w.upper(A,"_",!0)},camel:function(A){return p.decap(w.pascal(A))},kebab:function(A){return w.lower(A,"-",!0)},upper:function(A,P,ee){return p.fill(p.up.call(p.prep(A,P,!1,!0)),P,ee)},capital:function(A,P,ee){return p.fill(p.prep(A).replace(c.capitalize,function(le,ze,ji){return ze+p.up.call(ji)}),P,ee)},header:function(A){return w.capital(A,"-",!0)},pascal:function(A){return p.fill(p.prep(A,!1,!0).replace(c.pascal,function(P,ee,le){return p.up.call(le)}),"",!0)},title:function(A){return w.capital(A).replace(c.improper,function(P,ee,le,ze){return le>0&&le<ze.lastIndexOf(" ")?p.low.call(P):P})},sentence:function(A,P,ee){return A=w.lower(A).replace(c.sentence,function(le,ze,ji){return ze+p.up.call(ji)}),P&&P.forEach(function(le){A=A.replace(new RegExp("\\b"+w.lower(le)+"\\b","g"),p.cap)}),ee&&ee.forEach(function(le){A=A.replace(new RegExp("(\\b"+w.lower(le)+"\\. +)(\\w)"),function(ze,ji,Gc){return ji+p.low.call(Gc)})}),A}};L.squish=L.pascal,w.default=w;for(var I in L)w.type(I,L[I]);var G=typeof G=="function"?G:function(){};G(typeof dr=="object"&&dr.exports?dr.exports=w:this.Case=w)}).call(Il)});Array.prototype.last=function(t,r){return t==null?this[this.length-1]:t==1?this.filter(r??(()=>!0)).last():this.filter(r??(()=>!0)).slice(-t)};Array.prototype.first=function(t,r){return t==null?this[0]:t==1?this.filter(r??(()=>!0))[0]:this.filter(r??(()=>!0)).slice(0,t)};function Di(t){return Array.isArray(t)?t:[t]}function Ee(t){return t==null?"":typeof t=="string"?t:`${t}px`}function No(t){return t instanceof ye?t.nativeElement:t}var Ir;try{Ir=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Ir=!1}var Qe=(()=>{class t{constructor(e){this._platformId=e,this.isBrowser=this._platformId?Xi(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||Ir)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static{this.\u0275fac=function(i){return new(i||t)(N($i))}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var oi;function jo(){if(oi==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return oi=!1,oi;if("scrollBehavior"in document.documentElement.style)oi=!0;else{let t=Element.prototype.scrollTo;t?oi=!/\{\s*\[native code\]\s*\}/.test(t.toString()):oi=!1}}return oi}function Yo(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}function kn(t){return t.composedPath?t.composedPath()[0]:t.target}function kr(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Qc=new R("cdk-dir-doc",{providedIn:"root",factory:Xc});function Xc(){return M(De)}var Zc=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Jc(t){let r=t?.toLowerCase()||"";return r==="auto"&&typeof navigator<"u"&&navigator?.language?Zc.test(navigator.language)?"rtl":"ltr":r==="rtl"?"rtl":"ltr"}var $o=(()=>{class t{constructor(e){if(this.value="ltr",this.change=new ni,e){let i=e.body?e.body.dir:null,n=e.documentElement?e.documentElement.dir:null;this.value=Jc(i||n||"ltr")}}ngOnDestroy(){this.change.complete()}static{this.\u0275fac=function(i){return new(i||t)(N(Qc,8))}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Zi=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({})}}return t})();var iu=20,Wo=(()=>{class t{constructor(e,i,n){this._ngZone=e,this._platform=i,this._scrolled=new Le,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=n}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=iu){return this._platform.isBrowser?new fn(i=>{this._globalSubscription||this._addGlobalListener();let n=e>0?this._scrolled.pipe(yr(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):Va()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let n=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(ct(l=>!l||n.indexOf(l)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((n,l)=>{this._scrollableContainsElement(l,e)&&i.push(l)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,i){let n=No(i),l=e.getElementRef().nativeElement;do if(n==l)return!0;while(n=n.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let e=this._getWindow();return Ba(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}static{this.\u0275fac=function(i){return new(i||t)(N(it),N(Qe),N(De,8))}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var nu=20,Pr=(()=>{class t{constructor(e,i,n){this._platform=e,this._change=new Le,this._changeListener=l=>{this._change.next(l)},this._document=n,i.runOutsideAngular(()=>{if(e.isBrowser){let l=this._getWindow();l.addEventListener("resize",this._changeListener),l.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+i,height:n,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),n=e.documentElement,l=n.getBoundingClientRect(),c=-l.top||e.body.scrollTop||i.scrollY||n.scrollTop||0,p=-l.left||e.body.scrollLeft||i.scrollX||n.scrollLeft||0;return{top:c,left:p}}change(e=nu){return e>0?this._change.pipe(yr(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static{this.\u0275fac=function(i){return new(i||t)(N(Qe),N(it),N(De,8))}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var zo=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({})}}return t})(),Vr=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[Zi,zo,Zi,zo]})}}return t})();var Ji=class{attach(r){return this._attachedHost=r,r.attach(this)}detach(){let r=this._attachedHost;r!=null&&(this._attachedHost=null,r.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(r){this._attachedHost=r}},Vn=class extends Ji{constructor(r,e,i,n,l){super(),this.component=r,this.viewContainerRef=e,this.injector=i,this.componentFactoryResolver=n,this.projectableNodes=l}},Ei=class extends Ji{constructor(r,e,i,n){super(),this.templateRef=r,this.viewContainerRef=e,this.context=i,this.injector=n}get origin(){return this.templateRef.elementRef}attach(r,e=this.context){return this.context=e,super.attach(r)}detach(){return this.context=void 0,super.detach()}},Or=class extends Ji{constructor(r){super(),this.element=r instanceof ye?r.nativeElement:r}},Rr=class{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(r){if(r instanceof Vn)return this._attachedPortal=r,this.attachComponentPortal(r);if(r instanceof Ei)return this._attachedPortal=r,this.attachTemplatePortal(r);if(this.attachDomPortal&&r instanceof Or)return this._attachedPortal=r,this.attachDomPortal(r)}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(r){this._disposeFn=r}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var On=class extends Rr{constructor(r,e,i,n,l){super(),this.outletElement=r,this._componentFactoryResolver=e,this._appRef=i,this._defaultInjector=n,this.attachDomPortal=c=>{this._document;let p=c.element;p.parentNode;let w=this._document.createComment("dom-portal");p.parentNode.insertBefore(w,p),this.outletElement.appendChild(p),this._attachedPortal=c,super.setDisposeFn(()=>{w.parentNode&&w.parentNode.replaceChild(p,w)})},this._document=l}attachComponentPortal(r){let i=(r.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(r.component),n;return r.viewContainerRef?(n=r.viewContainerRef.createComponent(i,r.viewContainerRef.length,r.injector||r.viewContainerRef.injector,r.projectableNodes||void 0),this.setDisposeFn(()=>n.destroy())):(n=i.create(r.injector||this._defaultInjector||kt.NULL),this._appRef.attachView(n.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(n.hostView),n.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(n)),this._attachedPortal=r,n}attachTemplatePortal(r){let e=r.viewContainerRef,i=e.createEmbeddedView(r.templateRef,r.context,{injector:r.injector});return i.rootNodes.forEach(n=>this.outletElement.appendChild(n)),i.detectChanges(),this.setDisposeFn(()=>{let n=e.indexOf(i);n!==-1&&e.remove(n)}),this._attachedPortal=r,i}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(r){return r.hostView.rootNodes[0]}};var Ko=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({})}}return t})();var qo=jo(),Lr=class{constructor(r,e){this._viewportRuler=r,this._previousHTMLStyles={top:"",left:""},this._isEnabled=!1,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let r=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=r.style.left||"",this._previousHTMLStyles.top=r.style.top||"",r.style.left=Ee(-this._previousScrollPosition.left),r.style.top=Ee(-this._previousScrollPosition.top),r.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let r=this._document.documentElement,e=this._document.body,i=r.style,n=e.style,l=i.scrollBehavior||"",c=n.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,r.classList.remove("cdk-global-scrollblock"),qo&&(i.scrollBehavior=n.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),qo&&(i.scrollBehavior=l,n.scrollBehavior=c)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.body,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};var Br=class{constructor(r,e,i,n){this._scrollDispatcher=r,this._ngZone=e,this._viewportRuler=i,this._config=n,this._scrollSubscription=null,this._detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}}attach(r){this._overlayRef,this._overlayRef=r}enable(){if(this._scrollSubscription)return;let r=this._scrollDispatcher.scrolled(0).pipe(ct(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=r.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=r.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Rn=class{enable(){}disable(){}attach(){}};function Hr(t,r){return r.some(e=>{let i=t.bottom<e.top,n=t.top>e.bottom,l=t.right<e.left,c=t.left>e.right;return i||n||l||c})}function Go(t,r){return r.some(e=>{let i=t.top<e.top,n=t.bottom>e.bottom,l=t.left<e.left,c=t.right>e.right;return i||n||l||c})}var Ur=class{constructor(r,e,i,n){this._scrollDispatcher=r,this._viewportRuler=e,this._ngZone=i,this._config=n,this._scrollSubscription=null}attach(r){this._overlayRef,this._overlayRef=r}enable(){if(!this._scrollSubscription){let r=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(r).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:n}=this._viewportRuler.getViewportSize();Hr(e,[{width:i,height:n,bottom:n,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Ln=(()=>{class t{constructor(e,i,n,l){this._scrollDispatcher=e,this._viewportRuler=i,this._ngZone=n,this.noop=()=>new Rn,this.close=c=>new Br(this._scrollDispatcher,this._ngZone,this._viewportRuler,c),this.block=()=>new Lr(this._viewportRuler,this._document),this.reposition=c=>new Ur(this._scrollDispatcher,this._viewportRuler,this._ngZone,c),this._document=l}static{this.\u0275fac=function(i){return new(i||t)(N(Wo),N(Pr),N(it),N(De))}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),en=class{constructor(r){if(this.scrollStrategy=new Rn,this.panelClass="",this.hasBackdrop=!1,this.backdropClass="cdk-overlay-dark-backdrop",this.disposeOnNavigation=!1,r){let e=Object.keys(r);for(let i of e)r[i]!==void 0&&(this[i]=r[i])}}};var Nr=class{constructor(r,e){this.connectionPair=r,this.scrollableViewProperties=e}};var ts=(()=>{class t{constructor(e){this._attachedOverlays=[],this._document=e}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}static{this.\u0275fac=function(i){return new(i||t)(N(De))}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),au=(()=>{class t extends ts{constructor(e,i){super(e),this._ngZone=i,this._keydownListener=n=>{let l=this._attachedOverlays;for(let c=l.length-1;c>-1;c--)if(l[c]._keydownEvents.observers.length>0){let p=l[c]._keydownEvents;this._ngZone?this._ngZone.run(()=>p.next(n)):p.next(n);break}}}add(e){super.add(e),this._isAttached||(this._ngZone?this._ngZone.runOutsideAngular(()=>this._document.body.addEventListener("keydown",this._keydownListener)):this._document.body.addEventListener("keydown",this._keydownListener),this._isAttached=!0)}detach(){this._isAttached&&(this._document.body.removeEventListener("keydown",this._keydownListener),this._isAttached=!1)}static{this.\u0275fac=function(i){return new(i||t)(N(De),N(it,8))}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),ou=(()=>{class t extends ts{constructor(e,i,n){super(e),this._platform=i,this._ngZone=n,this._cursorStyleIsSet=!1,this._pointerDownListener=l=>{this._pointerDownEventTarget=kn(l)},this._clickListener=l=>{let c=kn(l),p=l.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:c;this._pointerDownEventTarget=null;let w=this._attachedOverlays.slice();for(let L=w.length-1;L>-1;L--){let I=w[L];if(I._outsidePointerEvents.observers.length<1||!I.hasAttached())continue;if(Qo(I.overlayElement,c)||Qo(I.overlayElement,p))break;let G=I._outsidePointerEvents;this._ngZone?this._ngZone.run(()=>G.next(l)):G.next(l)}}}add(e){if(super.add(e),!this._isAttached){let i=this._document.body;this._ngZone?this._ngZone.runOutsideAngular(()=>this._addEventListeners(i)):this._addEventListeners(i),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){if(this._isAttached){let e=this._document.body;e.removeEventListener("pointerdown",this._pointerDownListener,!0),e.removeEventListener("click",this._clickListener,!0),e.removeEventListener("auxclick",this._clickListener,!0),e.removeEventListener("contextmenu",this._clickListener,!0),this._platform.IOS&&this._cursorStyleIsSet&&(e.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1}}_addEventListeners(e){e.addEventListener("pointerdown",this._pointerDownListener,!0),e.addEventListener("click",this._clickListener,!0),e.addEventListener("auxclick",this._clickListener,!0),e.addEventListener("contextmenu",this._clickListener,!0)}static{this.\u0275fac=function(i){return new(i||t)(N(De),N(Qe),N(it,8))}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Qo(t,r){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=r;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var is=(()=>{class t{constructor(e,i){this._platform=i,this._document=e}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||kr()){let n=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let l=0;l<n.length;l++)n[l].remove()}let i=this._document.createElement("div");i.classList.add(e),kr()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}static{this.\u0275fac=function(i){return new(i||t)(N(De),N(Qe))}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),jr=class{constructor(r,e,i,n,l,c,p,w,L,I=!1,G){this._portalOutlet=r,this._host=e,this._pane=i,this._config=n,this._ngZone=l,this._keyboardDispatcher=c,this._document=p,this._location=w,this._outsideClickDispatcher=L,this._animationsDisabled=I,this._injector=G,this._backdropElement=null,this._backdropClick=new Le,this._attachments=new Le,this._detachments=new Le,this._locationChanges=hn.EMPTY,this._backdropClickHandler=A=>this._backdropClick.next(A),this._backdropTransitionendHandler=A=>{this._disposeBackdrop(A.target)},this._keydownEvents=new Le,this._outsidePointerEvents=new Le,this._renders=new Le,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy,this._afterRenderRef=Qi(()=>Ka(()=>{this._renders.next()},{injector:this._injector}))}get overlayElement(){return this._pane}get backdropElement(){return this._backdropElement}get hostElement(){return this._host}attach(r){!this._host.parentElement&&this._previousHostParent&&this._previousHostParent.appendChild(this._host);let e=this._portalOutlet.attach(r);return this._positionStrategy&&this._positionStrategy.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=yn(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let r=this._portalOutlet.detach();return this._detachments.next(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),r}dispose(){let r=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._disposeBackdrop(this._backdropElement),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=null,r&&this._detachments.next(),this._detachments.complete(),this._afterRenderRef.destroy(),this._renders.complete()}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(r){r!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=r,this.hasAttached()&&(r.attach(this),this.updatePosition()))}updateSize(r){this._config=S(S({},this._config),r),this._updateElementSize()}setDirection(r){this._config=z(S({},this._config),{direction:r}),this._updateElementDirection()}addPanelClass(r){this._pane&&this._toggleClasses(this._pane,r,!0)}removePanelClass(r){this._pane&&this._toggleClasses(this._pane,r,!1)}getDirection(){let r=this._config.direction;return r?typeof r=="string"?r:r.value:"ltr"}updateScrollStrategy(r){r!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=r,this.hasAttached()&&(r.attach(this),r.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let r=this._pane.style;r.width=Ee(this._config.width),r.height=Ee(this._config.height),r.minWidth=Ee(this._config.minWidth),r.minHeight=Ee(this._config.minHeight),r.maxWidth=Ee(this._config.maxWidth),r.maxHeight=Ee(this._config.maxHeight)}_togglePointerEvents(r){this._pane.style.pointerEvents=r?"":"none"}_attachBackdrop(){let r="cdk-overlay-backdrop-showing";this._backdropElement=this._document.createElement("div"),this._backdropElement.classList.add("cdk-overlay-backdrop"),this._animationsDisabled&&this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropElement,this._config.backdropClass,!0),this._host.parentElement.insertBefore(this._backdropElement,this._host),this._backdropElement.addEventListener("click",this._backdropClickHandler),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{this._backdropElement&&this._backdropElement.classList.add(r)})}):this._backdropElement.classList.add(r)}_updateStackingOrder(){this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){let r=this._backdropElement;if(r){if(this._animationsDisabled){this._disposeBackdrop(r);return}r.classList.remove("cdk-overlay-backdrop-showing"),this._ngZone.runOutsideAngular(()=>{r.addEventListener("transitionend",this._backdropTransitionendHandler)}),r.style.pointerEvents="none",this._backdropTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(()=>{this._disposeBackdrop(r)},500))}}_toggleClasses(r,e,i){let n=Di(e||[]).filter(l=>!!l);n.length&&(i?r.classList.add(...n):r.classList.remove(...n))}_detachContentWhenEmpty(){this._ngZone.runOutsideAngular(()=>{let r=this._renders.pipe(ii(_n(this._attachments,this._detachments))).subscribe(()=>{(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),r.unsubscribe())})})}_disposeScrollStrategy(){let r=this._scrollStrategy;r&&(r.disable(),r.detach&&r.detach())}_disposeBackdrop(r){r&&(r.removeEventListener("click",this._backdropClickHandler),r.removeEventListener("transitionend",this._backdropTransitionendHandler),r.remove(),this._backdropElement===r&&(this._backdropElement=null)),this._backdropTimeout&&(clearTimeout(this._backdropTimeout),this._backdropTimeout=void 0)}},Xo="cdk-overlay-connected-position-bounding-box",su=/([A-Za-z%]+)$/,Yr=class{get positions(){return this._preferredPositions}constructor(r,e,i,n,l){this._viewportRuler=e,this._document=i,this._platform=n,this._overlayContainer=l,this._lastBoundingBoxSize={width:0,height:0},this._isPushed=!1,this._canPush=!0,this._growAfterOpen=!1,this._hasFlexibleDimensions=!0,this._positionLocked=!1,this._viewportMargin=0,this._scrollables=[],this._preferredPositions=[],this._positionChanges=new Le,this._resizeSubscription=hn.EMPTY,this._offsetX=0,this._offsetY=0,this._appliedPanelClasses=[],this.positionChanges=this._positionChanges,this.setOrigin(r)}attach(r){this._overlayRef&&this._overlayRef,this._validatePositions(),r.hostElement.classList.add(Xo),this._overlayRef=r,this._boundingBox=r.hostElement,this._pane=r.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();let r=this._originRect,e=this._overlayRect,i=this._viewportRect,n=this._containerRect,l=[],c;for(let p of this._preferredPositions){let w=this._getOriginPoint(r,n,p),L=this._getOverlayPoint(w,e,p),I=this._getOverlayFit(L,e,i,p);if(I.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(p,w);return}if(this._canFitWithFlexibleDimensions(I,L,i)){l.push({position:p,origin:w,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(w,p)});continue}(!c||c.overlayFit.visibleArea<I.visibleArea)&&(c={overlayFit:I,overlayPoint:L,originPoint:w,position:p,overlayRect:e})}if(l.length){let p=null,w=-1;for(let L of l){let I=L.boundingBoxRect.width*L.boundingBoxRect.height*(L.position.weight||1);I>w&&(w=I,p=L)}this._isPushed=!1,this._applyPosition(p.position,p.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(c.position,c.originPoint);return}this._applyPosition(c.position,c.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&si(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Xo),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let r=this._lastPosition;if(r){this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();let e=this._getOriginPoint(this._originRect,this._containerRect,r);this._applyPosition(r,e)}else this.apply()}withScrollableContainers(r){return this._scrollables=r,this}withPositions(r){return this._preferredPositions=r,r.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(r){return this._viewportMargin=r,this}withFlexibleDimensions(r=!0){return this._hasFlexibleDimensions=r,this}withGrowAfterOpen(r=!0){return this._growAfterOpen=r,this}withPush(r=!0){return this._canPush=r,this}withLockedPosition(r=!0){return this._positionLocked=r,this}setOrigin(r){return this._origin=r,this}withDefaultOffsetX(r){return this._offsetX=r,this}withDefaultOffsetY(r){return this._offsetY=r,this}withTransformOriginOn(r){return this._transformOriginSelector=r,this}_getOriginPoint(r,e,i){let n;if(i.originX=="center")n=r.left+r.width/2;else{let c=this._isRtl()?r.right:r.left,p=this._isRtl()?r.left:r.right;n=i.originX=="start"?c:p}e.left<0&&(n-=e.left);let l;return i.originY=="center"?l=r.top+r.height/2:l=i.originY=="top"?r.top:r.bottom,e.top<0&&(l-=e.top),{x:n,y:l}}_getOverlayPoint(r,e,i){let n;i.overlayX=="center"?n=-e.width/2:i.overlayX==="start"?n=this._isRtl()?-e.width:0:n=this._isRtl()?0:-e.width;let l;return i.overlayY=="center"?l=-e.height/2:l=i.overlayY=="top"?0:-e.height,{x:r.x+n,y:r.y+l}}_getOverlayFit(r,e,i,n){let l=Jo(e),{x:c,y:p}=r,w=this._getOffset(n,"x"),L=this._getOffset(n,"y");w&&(c+=w),L&&(p+=L);let I=0-c,G=c+l.width-i.width,A=0-p,P=p+l.height-i.height,ee=this._subtractOverflows(l.width,I,G),le=this._subtractOverflows(l.height,A,P),ze=ee*le;return{visibleArea:ze,isCompletelyWithinViewport:l.width*l.height===ze,fitsInViewportVertically:le===l.height,fitsInViewportHorizontally:ee==l.width}}_canFitWithFlexibleDimensions(r,e,i){if(this._hasFlexibleDimensions){let n=i.bottom-e.y,l=i.right-e.x,c=Zo(this._overlayRef.getConfig().minHeight),p=Zo(this._overlayRef.getConfig().minWidth),w=r.fitsInViewportVertically||c!=null&&c<=n,L=r.fitsInViewportHorizontally||p!=null&&p<=l;return w&&L}return!1}_pushOverlayOnScreen(r,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:r.x+this._previousPushAmount.x,y:r.y+this._previousPushAmount.y};let n=Jo(e),l=this._viewportRect,c=Math.max(r.x+n.width-l.width,0),p=Math.max(r.y+n.height-l.height,0),w=Math.max(l.top-i.top-r.y,0),L=Math.max(l.left-i.left-r.x,0),I=0,G=0;return n.width<=l.width?I=L||-c:I=r.x<this._viewportMargin?l.left-i.left-r.x:0,n.height<=l.height?G=w||-p:G=r.y<this._viewportMargin?l.top-i.top-r.y:0,this._previousPushAmount={x:I,y:G},{x:r.x+I,y:r.y+G}}_applyPosition(r,e){if(this._setTransformOrigin(r),this._setOverlayElementStyles(e,r),this._setBoundingBoxStyles(e,r),r.panelClass&&this._addPanelClasses(r.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(r!==this._lastPosition||!this._lastScrollVisibility||!lu(this._lastScrollVisibility,i)){let n=new Nr(r,i);this._positionChanges.next(n)}this._lastScrollVisibility=i}this._lastPosition=r,this._isInitialRender=!1}_setTransformOrigin(r){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,n=r.overlayY;r.overlayX==="center"?i="center":this._isRtl()?i=r.overlayX==="start"?"right":"left":i=r.overlayX==="start"?"left":"right";for(let l=0;l<e.length;l++)e[l].style.transformOrigin=`${i} ${n}`}_calculateBoundingBoxRect(r,e){let i=this._viewportRect,n=this._isRtl(),l,c,p;if(e.overlayY==="top")c=r.y,l=i.height-c+this._viewportMargin;else if(e.overlayY==="bottom")p=i.height-r.y+this._viewportMargin*2,l=i.height-p+this._viewportMargin;else{let P=Math.min(i.bottom-r.y+i.top,r.y),ee=this._lastBoundingBoxSize.height;l=P*2,c=r.y-P,l>ee&&!this._isInitialRender&&!this._growAfterOpen&&(c=r.y-ee/2)}let w=e.overlayX==="start"&&!n||e.overlayX==="end"&&n,L=e.overlayX==="end"&&!n||e.overlayX==="start"&&n,I,G,A;if(L)A=i.width-r.x+this._viewportMargin*2,I=r.x-this._viewportMargin;else if(w)G=r.x,I=i.right-r.x;else{let P=Math.min(i.right-r.x+i.left,r.x),ee=this._lastBoundingBoxSize.width;I=P*2,G=r.x-P,I>ee&&!this._isInitialRender&&!this._growAfterOpen&&(G=r.x-ee/2)}return{top:c,left:G,bottom:p,right:A,width:I,height:l}}_setBoundingBoxStyles(r,e){let i=this._calculateBoundingBoxRect(r,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left="0",n.bottom=n.right=n.maxHeight=n.maxWidth="",n.width=n.height="100%";else{let l=this._overlayRef.getConfig().maxHeight,c=this._overlayRef.getConfig().maxWidth;n.height=Ee(i.height),n.top=Ee(i.top),n.bottom=Ee(i.bottom),n.width=Ee(i.width),n.left=Ee(i.left),n.right=Ee(i.right),e.overlayX==="center"?n.alignItems="center":n.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?n.justifyContent="center":n.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",l&&(n.maxHeight=Ee(l)),c&&(n.maxWidth=Ee(c))}this._lastBoundingBoxSize=i,si(this._boundingBox.style,n)}_resetBoundingBoxStyles(){si(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){si(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(r,e){let i={},n=this._hasExactPosition(),l=this._hasFlexibleDimensions,c=this._overlayRef.getConfig();if(n){let I=this._viewportRuler.getViewportScrollPosition();si(i,this._getExactOverlayY(e,r,I)),si(i,this._getExactOverlayX(e,r,I))}else i.position="static";let p="",w=this._getOffset(e,"x"),L=this._getOffset(e,"y");w&&(p+=`translateX(${w}px) `),L&&(p+=`translateY(${L}px)`),i.transform=p.trim(),c.maxHeight&&(n?i.maxHeight=Ee(c.maxHeight):l&&(i.maxHeight="")),c.maxWidth&&(n?i.maxWidth=Ee(c.maxWidth):l&&(i.maxWidth="")),si(this._pane.style,i)}_getExactOverlayY(r,e,i){let n={top:"",bottom:""},l=this._getOverlayPoint(e,this._overlayRect,r);if(this._isPushed&&(l=this._pushOverlayOnScreen(l,this._overlayRect,i)),r.overlayY==="bottom"){let c=this._document.documentElement.clientHeight;n.bottom=`${c-(l.y+this._overlayRect.height)}px`}else n.top=Ee(l.y);return n}_getExactOverlayX(r,e,i){let n={left:"",right:""},l=this._getOverlayPoint(e,this._overlayRect,r);this._isPushed&&(l=this._pushOverlayOnScreen(l,this._overlayRect,i));let c;if(this._isRtl()?c=r.overlayX==="end"?"left":"right":c=r.overlayX==="end"?"right":"left",c==="right"){let p=this._document.documentElement.clientWidth;n.right=`${p-(l.x+this._overlayRect.width)}px`}else n.left=Ee(l.x);return n}_getScrollVisibility(){let r=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Go(r,i),isOriginOutsideView:Hr(r,i),isOverlayClipped:Go(e,i),isOverlayOutsideView:Hr(e,i)}}_subtractOverflows(r,...e){return e.reduce((i,n)=>i-Math.max(n,0),r)}_getNarrowedViewportRect(){let r=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._viewportMargin,left:i.left+this._viewportMargin,right:i.left+r-this._viewportMargin,bottom:i.top+e-this._viewportMargin,width:r-2*this._viewportMargin,height:e-2*this._viewportMargin}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(r,e){return e==="x"?r.offsetX==null?this._offsetX:r.offsetX:r.offsetY==null?this._offsetY:r.offsetY}_validatePositions(){}_addPanelClasses(r){this._pane&&Di(r).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(r=>{this._pane.classList.remove(r)}),this._appliedPanelClasses=[])}_getOriginRect(){let r=this._origin;if(r instanceof ye)return r.nativeElement.getBoundingClientRect();if(r instanceof Element)return r.getBoundingClientRect();let e=r.width||0,i=r.height||0;return{top:r.y,bottom:r.y+i,left:r.x,right:r.x+e,height:i,width:e}}};function si(t,r){for(let e in r)r.hasOwnProperty(e)&&(t[e]=r[e]);return t}function Zo(t){if(typeof t!="number"&&t!=null){let[r,e]=t.split(su);return!e||e==="px"?parseFloat(r):null}return t||null}function Jo(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function lu(t,r){return t===r?!0:t.isOriginClipped===r.isOriginClipped&&t.isOriginOutsideView===r.isOriginOutsideView&&t.isOverlayClipped===r.isOverlayClipped&&t.isOverlayOutsideView===r.isOverlayOutsideView}var es="cdk-global-overlay-wrapper",$r=class{constructor(){this._cssPosition="static",this._topOffset="",this._bottomOffset="",this._alignItems="",this._xPosition="",this._xOffset="",this._width="",this._height="",this._isDisposed=!1}attach(r){let e=r.getConfig();this._overlayRef=r,this._width&&!e.width&&r.updateSize({width:this._width}),this._height&&!e.height&&r.updateSize({height:this._height}),r.hostElement.classList.add(es),this._isDisposed=!1}top(r=""){return this._bottomOffset="",this._topOffset=r,this._alignItems="flex-start",this}left(r=""){return this._xOffset=r,this._xPosition="left",this}bottom(r=""){return this._topOffset="",this._bottomOffset=r,this._alignItems="flex-end",this}right(r=""){return this._xOffset=r,this._xPosition="right",this}start(r=""){return this._xOffset=r,this._xPosition="start",this}end(r=""){return this._xOffset=r,this._xPosition="end",this}width(r=""){return this._overlayRef?this._overlayRef.updateSize({width:r}):this._width=r,this}height(r=""){return this._overlayRef?this._overlayRef.updateSize({height:r}):this._height=r,this}centerHorizontally(r=""){return this.left(r),this._xPosition="center",this}centerVertically(r=""){return this.top(r),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let r=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:n,height:l,maxWidth:c,maxHeight:p}=i,w=(n==="100%"||n==="100vw")&&(!c||c==="100%"||c==="100vw"),L=(l==="100%"||l==="100vh")&&(!p||p==="100%"||p==="100vh"),I=this._xPosition,G=this._xOffset,A=this._overlayRef.getConfig().direction==="rtl",P="",ee="",le="";w?le="flex-start":I==="center"?(le="center",A?ee=G:P=G):A?I==="left"||I==="end"?(le="flex-end",P=G):(I==="right"||I==="start")&&(le="flex-start",ee=G):I==="left"||I==="start"?(le="flex-start",P=G):(I==="right"||I==="end")&&(le="flex-end",ee=G),r.position=this._cssPosition,r.marginLeft=w?"0":P,r.marginTop=L?"0":this._topOffset,r.marginBottom=this._bottomOffset,r.marginRight=w?"0":ee,e.justifyContent=le,e.alignItems=L?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let r=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(es),i.justifyContent=i.alignItems=r.marginTop=r.marginBottom=r.marginLeft=r.marginRight=r.position="",this._overlayRef=null,this._isDisposed=!0}},du=(()=>{class t{constructor(e,i,n,l){this._viewportRuler=e,this._document=i,this._platform=n,this._overlayContainer=l}global(){return new $r}flexibleConnectedTo(e){return new Yr(e,this._viewportRuler,this._document,this._platform,this._overlayContainer)}static{this.\u0275fac=function(i){return new(i||t)(N(Pr),N(De),N(Qe),N(is))}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),cu=0,Ai=(()=>{class t{constructor(e,i,n,l,c,p,w,L,I,G,A,P){this.scrollStrategies=e,this._overlayContainer=i,this._componentFactoryResolver=n,this._positionBuilder=l,this._keyboardDispatcher=c,this._injector=p,this._ngZone=w,this._document=L,this._directionality=I,this._location=G,this._outsideClickDispatcher=A,this._animationsModuleType=P}create(e){let i=this._createHostElement(),n=this._createPaneElement(i),l=this._createPortalOutlet(n),c=new en(e);return c.direction=c.direction||this._directionality.value,new jr(l,i,n,c,this._ngZone,this._keyboardDispatcher,this._document,this._location,this._outsideClickDispatcher,this._animationsModuleType==="NoopAnimations",this._injector.get(Ya))}position(){return this._positionBuilder}_createPaneElement(e){let i=this._document.createElement("div");return i.id=`cdk-overlay-${cu++}`,i.classList.add("cdk-overlay-pane"),e.appendChild(i),i}_createHostElement(){let e=this._document.createElement("div");return this._overlayContainer.getContainerElement().appendChild(e),e}_createPortalOutlet(e){return this._appRef||(this._appRef=this._injector.get(Ga)),new On(e,this._componentFactoryResolver,this._appRef,this._injector,this._document)}static{this.\u0275fac=function(i){return new(i||t)(N(Ln),N(is),N(wr),N(du),N(au),N(kt),N(it),N(De),N($o),N(eo),N(ou),N(za,8))}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var uu=new R("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=M(Ai);return()=>t.scrollStrategies.reposition()}});function pu(t){return()=>t.scrollStrategies.reposition()}var mu={provide:uu,deps:[Ai],useFactory:pu},ns=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({providers:[Ai,mu],imports:[Zi,Ko,Vr,Vr]})}}return t})();var Wr={PreferFileSystem:"preferFileSystem",CrossBrowser:"crossBrowser"};var XC={fileName:"download",method:Wr.PreferFileSystem},ZC={method:Wr.PreferFileSystem,multiple:!1};var fu={margin:0,throttleTime:100},JC=new R("ard-viewport-observer-defaults",{factory:()=>S({},fu)});var gu={delay:500,repeat:1e3/15,allowSpaceKey:!1,allowEnterKey:!1},_u=new R("ard-hold-defaults",{factory:()=>S({},gu)});function k(t){return t!=null&&`${t}`!="false"}function Ae(t,r=void 0){return vu(t)?Number(t):r}function vu(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}var as=(()=>{class t{constructor(){this._DEFAULTS=M(_u),this.ardHold=ne(),this.ardHoldDisabled=m(!1,{transform:e=>k(e)}),this.ardHoldDelay=m(this._DEFAULTS.delay,{transform:e=>Ae(e,this._DEFAULTS.delay)}),this.ardHoldRepeat=m(this._DEFAULTS.repeat,{transform:e=>Ae(e,this._DEFAULTS.repeat)}),this.ardAllowSpaceKey=m(this._DEFAULTS.allowSpaceKey,{transform:e=>k(e)}),this.ardAllowEnterKey=m(this._DEFAULTS.allowEnterKey,{transform:e=>k(e)}),this.interval=null,this.timeout=null,this.isKeyDown=!1,se(()=>{this.ardHoldDisabled()&&this._clear()})}onMouseDown(){this.ardHoldDisabled()||(this.timeout=setTimeout(()=>{this.timeout=null,this.interval=setInterval(()=>{this.ardHold.emit()},this.ardHoldRepeat())},this.ardHoldDelay()))}onMouseUp(){this._clear()}_clear(){if(this.timeout){clearTimeout(this.timeout),this.timeout=null;return}this.interval&&(clearInterval(this.interval),this.interval=null)}onKeyDown(e){this.ardAllowEnterKey()&&e.code=="Enter"&&e.preventDefault(),!this.isKeyDown&&(this.ardAllowSpaceKey()&&e.code=="Space"||this.ardAllowEnterKey()&&e.code=="Enter")&&(this.onMouseDown(),this.isKeyDown=!0)}onKeyUp(e){(this.ardAllowSpaceKey()&&e.code=="Space"||this.ardAllowEnterKey()&&e.code=="Enter")&&(this.onMouseUp(),this.isKeyDown=!1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=$({type:t,selectors:[["","ardHold",""]],hostBindings:function(i,n){i&1&&_("mousedown",function(){return n.onMouseDown()})("touchstart",function(){return n.onMouseDown()})("mouseup",function(){return n.onMouseUp()},!1,qe)("touchend",function(){return n.onMouseUp()},!1,qe)("keydown",function(c){return n.onKeyDown(c)})("keyup",function(c){return n.onKeyUp(c)})},inputs:{ardHoldDisabled:[1,"ardHoldDisabled"],ardHoldDelay:[1,"ardHoldDelay"],ardHoldRepeat:[1,"ardHoldRepeat"],ardAllowSpaceKey:[1,"ardAllowSpaceKey"],ardAllowEnterKey:[1,"ardAllowEnterKey"]},outputs:{ardHold:"ardHold"},standalone:!1})}}return t})(),os=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J]})}}return t})(),yu={Host:"host",HTML:"html"};var Cu={threshold:200,target:yu.HTML},eb=new R("ard-infinite-scroll-defaults",{factory:()=>S({},Cu)});var bu={extensionWithDot:!0,sizePrecision:2,sizeUseSpace:!0},tb=new R("ard-file-pipes-defaults",{factory:()=>S({},bu)});var zr=class{constructor(r,e={}){this.thisObjOrAbstractControl=r,this.options=e,this._injector=M(kt),this._value$=new bt(void 0),this.value$=this._value$.asObservable(),this.value=Oe(this._value$,{injector:this._injector,initialValue:void 0}),this._errors$=new bt(null),this.errors$=this._errors$.asObservable(),this.errors=Oe(this._errors$,{injector:this._injector,initialValue:null}),this._touched$=new bt(!1),this.touched$=this._touched$.asObservable(),this.touched=Oe(this._touched$,{injector:this._injector,initialValue:!1}),this.untouched$=this.touched$.pipe(Be(i=>!i)),this.untouched=Oe(this.untouched$,{injector:this._injector,initialValue:!0}),this._pristine$=new bt(!0),this.pristine$=this._pristine$.asObservable(),this.pristine=Oe(this._pristine$,{injector:this._injector,initialValue:!0}),this.dirty$=this.pristine$.pipe(Be(i=>!i)),this.dirty=Oe(this.dirty$,{injector:this._injector,initialValue:!1}),this._status$=new bt("VALID"),this.status$=this._status$.asObservable(),this.status=Oe(this._status$,{injector:this._injector,initialValue:"VALID"}),this.valid$=this.status$.pipe(Be(i=>i==="VALID")),this.valid=Oe(this.valid$,{injector:this._injector,initialValue:!0}),this.invalid$=this.status$.pipe(Be(i=>i==="INVALID")),this.invalid=Oe(this.invalid$,{injector:this._injector,initialValue:!1}),this.pending$=this.status$.pipe(Be(i=>i==="PENDING")),this.pending=Oe(this.pending$,{injector:this._injector,initialValue:!1}),this.disabled$=this.status$.pipe(Be(i=>i==="DISABLED")),this.disabled=Oe(this.disabled$,{injector:this._injector,initialValue:!1}),this.enabled$=this.status$.pipe(Be(i=>i!=="DISABLED")),this.enabled=Oe(this.enabled$,{injector:this._injector,initialValue:!0}),this.touchedHasErrors=x(()=>!!this.errors()&&this.touched()),this._validators$=new bt(null),this.validators$=this._validators$.asObservable(),this.validators=Oe(this._validators$,{injector:this._injector,initialValue:null}),this._asyncValidators$=new bt(null),this.asyncValidators$=this._asyncValidators$.asObservable(),this.asyncValidators=Oe(this._asyncValidators$,{injector:this._injector,initialValue:null}),this._isAbstractControl(this.thisObjOrAbstractControl)&&this.init()}_isAbstractControl(r){return mo(r)||fo(r)||uo(r)||po(r)||!!r&&typeof r=="object"&&"events"in r&&gn(r.events)}init(){if(this._isAbstractControl(this.thisObjOrAbstractControl))this.instance=this.thisObjOrAbstractControl;else{let r=this._injector.get(oo,null);if(r){(this.options.attachValueAccessor??!0)&&(!r.valueAccessor||this.thisObjOrAbstractControl&&this.thisObjOrAbstractControl instanceof r.valueAccessor.constructor)&&(r.valueAccessor=this.thisObjOrAbstractControl);let e=r.control;if(!e)return;this.instance=e}}if(this.instance){let r=this.instance;this._eventsSub=r.events.subscribe(c=>{if(c instanceof so){this._value$.next(c.value);return}if(c instanceof Sn){this._touched$.next(c.touched);return}if(c instanceof lo){this._pristine$.next(c.pristine);return}if(c instanceof co){this._status$.next(c.status),this._errors$.next(c.source.errors);return}}),this._value$.next(r.value),this._touched$.next(r.touched),this._pristine$.next(r.pristine),this._status$.next(r.status),this._errors$.next(r.errors);let e=r.setValidators.bind(r);r.setValidators=(...c)=>{e(...c);let p=r._rawValidators;this._validators$.next(mt(p)?[p]:p)},rs(r,"validator",()=>{let c=r._rawValidators;this._validators$.next(mt(c)?[c]:c)});let i=r.setAsyncValidators.bind(r);r.setAsyncValidators=(...c)=>{i(...c);let p=r._rawAsyncValidators;this._asyncValidators$.next(mt(p)?[p]:p)},rs(r,"asyncValidator",()=>{let c=r._rawAsyncValidators;this._asyncValidators$.next(mt(c)?[c]:c)});let n=r._rawValidators;this._validators$.next(mt(n)?[n]:n);let l=r._rawAsyncValidators;this._asyncValidators$.next(mt(l)?[l]:l)}}destroy(){this._eventsSub?.unsubscribe()}};function ss(t,r){return new zr(t,r)}function rs(t,r,e){let i=t,n;for(;i&&!(n=Object.getOwnPropertyDescriptor(i,r));)i=Object.getPrototypeOf(i);if(!n||typeof n.set!="function")throw new Error(`No setter found for ${String(r)}`);let l=n.set,c=n.get;Object.defineProperty(t,r,{configurable:!0,enumerable:n.enumerable??!0,get:c?function(){return c.call(this)}:void 0,set:function(p){l.call(this,p),e()}})}function Bn(t,r=","){return Array.isArray(t)?t.map(e=>String(e).trim()).filter(e=>e.length):t==null||t===""?[]:String(t).split(r).map(e=>e.trim()).filter(e=>e.length)}var lp=Yi(us(),1),Xn=Yi(ms(),1);var Dt=Yi(hs(),1);var Nu=[{keys:["tab"],result:"Tab \u21B9"},{keys:["enter"],result:"\u21B5 Enter"},{keys:["space"],result:["\u23B5","Space"]},{keys:["home"],result:"Home"},{keys:["end"],result:"End"},{keys:["minus"],result:["-","Minus"]},{keys:["equal"],result:["=","Equal"]},{keys:["bracketleft"],result:["[","Left Bracket"]},{keys:["bracketright"],result:["]","Right Bracket"]},{keys:["backslash"],result:["\\","Backslash"]},{keys:["semicolon"],result:[";","Semicolon"]},{keys:["quote"],result:["'","Quote"]},{keys:["comma"],result:[",","Comma"]},{keys:["period"],result:[".","Period"]},{keys:["slash"],result:["/","Slash"]},{keys:["backquote"],result:["`","Backquote"]},{keys:["arrowleft","left"],result:["\u2190","\u2190 Left"]},{keys:["arrowright","right"],result:["\u2192","\u2192 Right"]},{keys:["arrowup","up"],result:["\u2191","\u2191 Up"]},{keys:["arrowdown","down"],result:["\u2193","\u2193 Down"]},{keys:["capslock","caps"],result:"Caps Lock"},{keys:["numlock","num"],result:"Num Lock"},{keys:["shift","leftshift","shiftleft"],result:"Shift"},{keys:["shift","rightshift","shiftright"],result:"Right Shift"},{keys:["ctrl","control","leftctrl","ctrlleft","leftcontrol","controlleft"],result:["Ctrl","Control"]},{keys:["ctrl","control","rightctrl","ctrlright","rightcontrol","controlright"],result:["Right Ctrl","Right Control"]},{keys:["cmd","command"],result:["Cmd","Command"]},{keys:["option","opt"],result:["Opt","Option"]},{keys:["alt","leftalt","altleft"],result:"Alt"},{keys:["altgraph","altgr","rightalt","altright"],result:["Alt Gr","Alt Graph"]},{keys:["escape","esc"],result:["Esc","Escape"]},{keys:["insert","ins"],result:["Ins","Insert"]},{keys:["delete","del"],result:["Del","Delete"]},{keys:["windows","win","leftmeta","metaleft"],result:["\u229E Win","\u229E Windows"]},{keys:["menu","contextmenu"],result:"\u25A4 Menu"},{keys:["backspace","back","bcksp"],result:["Bcksp","Backspace"]},{keys:["printscreen","printsc","prtsc"],result:["Prt Sc","Print Screen"]},{keys:["numpaddivide","divide"],result:["Numpad /","Divide"]},{keys:["numpadmultiply","multiply"],result:["Numpad *","Multiply"]},{keys:["numpadadd","add"],result:["Numpad +","Add"]},{keys:["numpadsubstract","substract"],result:["Numpad -","Substract"]},{keys:["numpaddecimal","decimal"],result:["Numpad .","Decimal"]},{keys:["numpadenter"],result:"\u21B5 Numpad Enter"},{keys:["audiovolumemute","audiomute","volumemute","mute"],result:["Vol. Mute","Audio Volume Mute"]},{keys:["audiovolumedown","volumedown"],result:["Vol. Down","Audio Volume Down"]},{keys:["audiovolumeup","volumeup"],result:["Vol. Up","Audio Volume Up"]},{keys:["pagedown","pgdown"],result:["Pg Down","Page Down"]},{keys:["pageup","pgup"],result:["Pg Up","Page Up"]}],ju=Nu.reduce((t,r)=>{for(let e of r.keys)t[e]=r.result;return t},{}),Yu="abcdefghijklmnopqrstuvwxyz".split("").reduce((t,r)=>(t[`key${r}`]=r.toUpperCase(),t),{}),ta={};for(let t=0;t<10;t++){let r=t.toString();ta[`digit${r}`]=r,ta[`numpad${r}`]=`Numpad ${r}`}var fs={};for(let t=1;t<=12;t++){let r=t.toString();fs[`f${r}`]=r}var ia=Object.assign(Object.assign(Object.assign(Object.assign({},ju),Yu),ta),fs);function gs(t,r=!0){let e=t.toLowerCase();if(ia[e]){let i=ia[e];return typeof i=="string"?i:r?i[0]:i[1]}if(e.match(/^.+(left|right)$/)){let i=t.match(/right|left/i)[0].toLowerCase();i=i[0].toUpperCase()+i.substring(1);let n=t.replace(/right|left/i,"");t=i+n}return t.replace(/([A-Z])/g," $1").replace(/\s\s+/g," ").trim()}var _s=new Set,li,$u=(()=>{class t{constructor(e,i){this._platform=e,this._nonce=i,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Wu}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&zu(e,this._nonce),this._matchMedia(e)}static{this.\u0275fac=function(i){return new(i||t)(N(Qe),N(Wa,8))}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function zu(t,r){if(!_s.has(t))try{li||(li=document.createElement("style"),r&&li.setAttribute("nonce",r),li.setAttribute("type","text/css"),document.head.appendChild(li)),li.sheet&&(li.sheet.insertRule(`@media ${t} {body{ }}`,0),_s.add(t))}catch(e){console.error(e)}}function Wu(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Nn=(()=>{class t{constructor(e,i){this._mediaMatcher=e,this._zone=i,this._queries=new Map,this._destroySubject=new Le}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return vs(Di(e)).some(n=>this._registerQuery(n).mql.matches)}observe(e){let n=vs(Di(e)).map(c=>this._registerQuery(c).observable),l=Oa(n);return l=Ra(l.pipe(Ua(1)),l.pipe(ja(1),Cr(0))),l.pipe(Be(c=>{let p={matches:!1,breakpoints:{}};return c.forEach(({matches:w,query:L})=>{p.matches=p.matches||w,p.breakpoints[L]=w}),p}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),l={observable:new fn(c=>{let p=w=>this._zone.run(()=>c.next(w));return i.addListener(p),()=>{i.removeListener(p)}}).pipe(hi(i),Be(({matches:c})=>({query:e,matches:c})),ii(this._destroySubject)),mql:i};return this._queries.set(e,l),l}static{this.\u0275fac=function(i){return new(i||t)(N($u),N(it))}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function vs(t){return t.map(r=>r.split(",")).reduce((r,e)=>r.concat(e)).map(r=>r.trim())}var Ku=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var ys=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({providers:[Ku]})}}return t})();var qu=(()=>{class t{constructor(e){this._platform=e}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Qu(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=Gu(rp(e));if(i&&(Cs(i)===-1||!this.isVisible(i)))return!1;let n=e.nodeName.toLowerCase(),l=Cs(e);return e.hasAttribute("contenteditable")?l!==-1:n==="iframe"||n==="object"||this._platform.WEBKIT&&this._platform.IOS&&!ip(e)?!1:n==="audio"?e.hasAttribute("controls")?l!==-1:!1:n==="video"?l===-1?!1:l!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return np(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static{this.\u0275fac=function(i){return new(i||t)(N(Qe))}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Gu(t){try{return t.frameElement}catch{return null}}function Qu(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function Xu(t){let r=t.nodeName.toLowerCase();return r==="input"||r==="select"||r==="button"||r==="textarea"}function Zu(t){return ep(t)&&t.type=="hidden"}function Ju(t){return tp(t)&&t.hasAttribute("href")}function ep(t){return t.nodeName.toLowerCase()=="input"}function tp(t){return t.nodeName.toLowerCase()=="a"}function ws(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let r=t.getAttribute("tabindex");return!!(r&&!isNaN(parseInt(r,10)))}function Cs(t){if(!ws(t))return null;let r=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(r)?-1:r}function ip(t){let r=t.nodeName.toLowerCase(),e=r==="input"&&t.type;return e==="text"||e==="password"||r==="select"||r==="textarea"}function np(t){return Zu(t)?!1:Xu(t)||Ju(t)||t.hasAttribute("contenteditable")||ws(t)}function rp(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var ra=class{get enabled(){return this._enabled}set enabled(r){this._enabled=r,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}constructor(r,e,i,n,l=!1,c){this._element=r,this._checker=e,this._ngZone=i,this._document=n,this._injector=c,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,l||this.attachAnchors()}destroy(){let r=this._startAnchor,e=this._endAnchor;r&&(r.removeEventListener("focus",this.startAnchorListener),r.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(r)))})}focusFirstTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(r)))})}focusLastTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(r)))})}_getRegionBoundary(r){let e=this._element.querySelectorAll(`[cdk-focus-region-${r}], [cdkFocusRegion${r}], [cdk-focus-${r}]`);return r=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(r){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(r),!!i}return e.focus(r),!0}return this.focusFirstTabbableElement(r)}focusFirstTabbableElement(r){let e=this._getRegionBoundary("start");return e&&e.focus(r),!!e}focusLastTabbableElement(r){let e=this._getRegionBoundary("end");return e&&e.focus(r),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let i=0;i<e.length;i++){let n=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(n)return n}return null}_getLastTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let i=e.length-1;i>=0;i--){let n=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(n)return n}return null}_createAnchor(){let r=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,r),r.classList.add("cdk-visually-hidden"),r.classList.add("cdk-focus-trap-anchor"),r.setAttribute("aria-hidden","true"),r}_toggleAnchorTabIndex(r,e){r?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(r){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_executeOnStable(r){this._injector?yn(r,{injector:this._injector}):setTimeout(r)}},ap=(()=>{class t{constructor(e,i,n){this._checker=e,this._ngZone=i,this._injector=M(kt),this._document=n}create(e,i=!1){return new ra(e,this._checker,this._ngZone,this._document,i,this._injector)}static{this.\u0275fac=function(i){return new(i||t)(N(qu),N(it),N(De))}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Ss=(()=>{class t{get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}constructor(e,i,n){this._elementRef=e,this._focusTrapFactory=i,this._previouslyFocusedElement=null,M(Qe).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let i=e.autoCapture;i&&!i.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=Yo(),this.focusTrap?.focusInitialElementWhenReady()}static{this.\u0275fac=function(i){return new(i||t)(ie(ye),ie(ap),ie(De))}}static{this.\u0275dir=$({type:t,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",_i],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",_i]},exportAs:["cdkTrapFocus"],features:[ri,St]})}}return t})();var di=function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t}(di||{}),bs="cdk-high-contrast-black-on-white",xs="cdk-high-contrast-white-on-black",na="cdk-high-contrast-active",op=(()=>{class t{constructor(e,i){this._platform=e,this._document=i,this._breakpointSubscription=M(Nn).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return di.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let i=this._document.defaultView||window,n=i&&i.getComputedStyle?i.getComputedStyle(e):null,l=(n&&n.backgroundColor||"").replace(/ /g,"");switch(e.remove(),l){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return di.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return di.BLACK_ON_WHITE}return di.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(na,bs,xs),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===di.BLACK_ON_WHITE?e.add(na,bs):i===di.WHITE_ON_BLACK&&e.add(na,xs)}}static{this.\u0275fac=function(i){return new(i||t)(N(Qe),N(De))}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Ts=(()=>{class t{constructor(e){e._applyBodyHighContrastModeCssClasses()}static{this.\u0275fac=function(i){return new(i||t)(N(op))}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[ys]})}}return t})();var dp=["focusableElement"],zs=["textInput"],Fe=["*"];function cp(t,r){}function up(t,r){if(t&1&&(o(0,"div",2),g(1,cp,0,0,"ng-template",5),a()),t&2){let e,i=f();d(),h("ngTemplateOutlet",(e=(e=i.prefixTemplateInput())!==null&&e!==void 0?e:(e=i.prefixTemplate())==null?null:e.template)!==null&&e!==void 0?e:null)}}function pp(t,r){}function mp(t,r){if(t&1&&(o(0,"div",4),g(1,pp,0,0,"ng-template",5),a()),t&2){let e,i=f();d(),h("ngTemplateOutlet",(e=(e=i.suffixTemplateInput())!==null&&e!==void 0?e:(e=i.suffixTemplate())==null?null:e.template)!==null&&e!==void 0?e:null)}}function hp(t,r){if(t&1&&(o(0,"div",8),s(1),a()),t&2){let e=f(2);d(),C(e.placeholder())}}function fp(t,r){}function gp(t,r){if(t&1&&g(0,hp,2,1,"ng-template",null,1,oe)(2,fp,0,0,"ng-template",7),t&2){let e,i=V(1),n=f();d(2),h("ngTemplateOutlet",((e=n.placeholderTemplate())==null?null:e.template)||i)}}function _p(t,r){if(t&1){let e=Y();o(0,"ard-clear-button",9),_("click",function(n){D(e);let l=f();return E(l.onClearButtonClick(n))}),a()}if(t&2){let e=f();h("title",e.clearButtonTitle())}}var ha=["contentWrapperEl"];function vp(t,r){if(t&1){let e=Y();o(0,"ard-button",10),_("click",function(n){D(e);let l=f();return E(l.canDecrement()&&l.onQuickChangeButtonClick(-1,n))})("mouseup",function(n){D(e);let l=f();return E(l.onQuickChangeButtonMouseup(n))})("ardHold",function(){D(e);let n=f();return E(n.canDecrement()&&n.onQuickChangeButtonClick(-1))}),s(1," - "),a()}if(t&2){let e=f();h("variant",e.buttonVariant())("appearance",e.buttonAppearance())("disabled",!e.canDecrement())("tabIndex",!e.canDecrement()||e.readonly()?-1:e.tabIndex())}}function yp(t,r){}function Cp(t,r){if(t&1&&(o(0,"div",5),g(1,yp,0,0,"ng-template",11),a()),t&2){let e,i=f();d(),h("ngTemplateOutlet",(e=(e=i.prefixTemplate())==null?null:e.template)!==null&&e!==void 0?e:null)}}function bp(t,r){if(t&1&&(o(0,"div",12),s(1),a()),t&2){let e=f(2);d(),C(e.placeholder())}}function xp(t,r){}function wp(t,r){if(t&1&&g(0,bp,2,1,"ng-template",null,1,oe)(2,xp,0,0,"ng-template",11),t&2){let e,i=V(1),n=f();d(2),h("ngTemplateOutlet",((e=n.placeholderTemplate())==null?null:e.template)||i)}}function Sp(t,r){}function Tp(t,r){if(t&1&&(o(0,"div",8),g(1,Sp,0,0,"ng-template",11),a()),t&2){let e,i=f();d(),h("ngTemplateOutlet",(e=(e=i.suffixTemplate())==null?null:e.template)!==null&&e!==void 0?e:null)}}function Dp(t,r){if(t&1){let e=Y();o(0,"ard-button",13),_("click",function(n){D(e);let l=f();return E(l.canIncrement()&&l.onQuickChangeButtonClick(1,n))})("mouseup",function(n){D(e);let l=f();return E(l.onQuickChangeButtonMouseup(n))})("ardHold",function(){D(e);let n=f();return E(n.canIncrement()&&n.onQuickChangeButtonClick(1))}),s(1," + "),a()}if(t&2){let e=f();h("variant",e.buttonVariant())("appearance",e.buttonAppearance())("disabled",!e.canIncrement())("tabIndex",!e.canIncrement()||e.readonly()?-1:e.tabIndex())}}function Ep(t,r){if(t&1&&y(0,"ard-icon",5),t&2){let e=r.state,i=f();h("icon",e===i.State.Selected?"check_box":e===i.State.Unselected?"check_box_outline_blank":"indeterminate_check_box")("filled",e!==i.State.Indeterminate)}}function Ap(t,r){}var Fp=["track"],Ws=t=>({"--_ard-slider-transition":t}),Mp=(t,r)=>({left:t,width:r}),Et=t=>({left:t});function Ip(t,r){if(t&1&&y(0,"div",16),t&2){let e=r.$implicit;Ce(be(2,Et,e))}}function kp(t,r){if(t&1&&(o(0,"div",10),H(1,Ip,1,4,"div",15,Vt),a()),t&2){let e=f();d(),U(e._tickArray())}}function Pp(t,r){if(t&1&&(o(0,"div",19),s(1),a()),t&2){let e=r.$implicit;d(),C(e)}}function Vp(t,r){}function Op(t,r){if(t&1&&(o(0,"div",17),g(1,Pp,2,1,"ng-template",null,3,oe)(3,Vp,0,0,"ng-template",18),a()),t&2){let e,i=V(2),n=f();Ce(be(6,Et,n.handlePositionsPercent()[0])),te("ard-tooltip-always",n.tooltipBehavior()==="always"),d(3),h("ngTemplateOutlet",((e=n.tooltipTemplate())==null?null:e.template)||i)("ngTemplateOutletContext",n.tooltipContexts().from)}}function Rp(t,r){if(t&1&&(o(0,"div",19),s(1),a()),t&2){let e=r.$implicit;d(),C(e)}}function Lp(t,r){}function Bp(t,r){if(t&1&&(o(0,"div",17),g(1,Rp,2,1,"ng-template",null,3,oe)(3,Lp,0,0,"ng-template",18),a()),t&2){let e,i=V(2),n=f();Ce(be(6,Et,n.handlePositionsPercent()[1])),te("ard-tooltip-always",n.tooltipBehavior()==="always"),d(3),h("ngTemplateOutlet",((e=n.tooltipTemplate())==null?null:e.template)||i)("ngTemplateOutletContext",n.tooltipContexts().to)}}function Hp(t,r){if(t&1&&(o(0,"div",21),s(1),a()),t&2){let e=r.$implicit;Ce(be(3,Et,e.positionPercent)),d(),F(" ",e.label," ")}}function Up(t,r){if(t&1&&(o(0,"div",14),H(1,Hp,2,5,"div",20,Z),a()),t&2){let e=f();d(),U(e.labelObjects())}}function Np(t,r){t&1&&y(0,"div",22)}var jp=t=>({width:t});function Yp(t,r){if(t&1&&y(0,"div",15),t&2){let e=r.$implicit;Ce(be(2,Et,e))}}function $p(t,r){if(t&1&&(o(0,"div",9),H(1,Yp,1,4,"div",14,Vt),a()),t&2){let e=f();d(),U(e._tickArray())}}function zp(t,r){if(t&1&&(o(0,"div",18),s(1),a()),t&2){let e=r.$implicit;d(),C(e)}}function Wp(t,r){}function Kp(t,r){if(t&1&&(o(0,"div",16),g(1,zp,2,1,"ng-template",null,2,oe)(3,Wp,0,0,"ng-template",17),a()),t&2){let e,i=V(2),n=f();Ce(be(6,Et,n.handlePositionsPercent()[0])),te("ard-tooltip-always",n.tooltipBehavior()==="always"),d(3),h("ngTemplateOutlet",((e=n.tooltipTemplate())==null?null:e.template)||i)("ngTemplateOutletContext",n.tooltipContext())}}function qp(t,r){if(t&1&&(o(0,"div",20),s(1),a()),t&2){let e=r.$implicit;Ce(be(3,Et,e.positionPercent)),d(),F(" ",e.label," ")}}function Gp(t,r){if(t&1&&(o(0,"div",13),H(1,qp,2,5,"div",19,Z),a()),t&2){let e=f();d(),U(e.labelObjects())}}function Qp(t,r){if(t&1&&(o(0,"ard-error"),s(1),a()),t&2){let e=r.$implicit;d(),C(e)}}function Xp(t,r){if(t&1&&s(0),t&2){let e=f();F(" ",e.requiredText()," ")}}function Zp(t,r){if(t&1&&s(0),t&2){let e=f();F(" ",e.optionalText()," ")}}var Jp=[[["ard-label"],["","ard-label",""]],"*",[["ard-error","left",""],["","ard-error","","left",""],["ard-auto-error","left",""]],[["ard-error","right",""],["","ard-error","","right",""],["ard-auto-error","right",""]],[["ard-hint","left",""],["","ard-hint","","left",""]],[["ard-hint","right",""],["","ard-hint","","right",""]],[["ard-hint",3,"left","",3,"right",""],["","ard-hint","",3,"left","",3,"right",""]],[["ard-error",3,"left","",3,"right",""],["","ard-error","",3,"left","",3,"right",""]],[["ard-auto-error",3,"left","",3,"right",""]],[["ard-hint-error",3,"left","",3,"right",""],["","ard-hint-error","",3,"left","",3,"right",""]],[["ard-hint-error","left",""],["","ard-hint-error","","left",""]],[["ard-hint-error","right",""],["","ard-hint-error","","right",""]]],em=["ard-label, [ard-label]","*","ard-error[left], [ard-error][left], ard-auto-error[left]","ard-error[right], [ard-error][right], ard-auto-error[right]","ard-hint[left], [ard-hint][left]","ard-hint[right], [ard-hint][right]","ard-hint:not([left]):not([right]), [ard-hint]:not([left]):not([right])","ard-error:not([left]):not([right]), [ard-error]:not([left]):not([right])","ard-auto-error:not([left]):not([right])","ard-hint-error:not([left]):not([right]), [ard-hint-error]:not([left]):not([right])","ard-hint-error[left], [ard-hint-error][left]","ard-hint-error[right], [ard-hint-error][right]"];function tm(t,r){}function im(t,r){}function nm(t,r){}function rm(t,r){if(t&1&&(o(0,"div",11),g(1,tm,0,0,"ng-template",12)(2,im,0,0,"ng-template",12)(3,nm,0,0,"ng-template",12),a()),t&2){f(2);let e=V(11),i=V(13),n=V(15);d(),h("ngTemplateOutlet",i),d(),h("ngTemplateOutlet",e),d(),h("ngTemplateOutlet",n)}}function am(t,r){}function om(t,r){}function sm(t,r){}function lm(t,r){}function dm(t,r){if(t&1&&(o(0,"div",11),g(1,om,0,0,"ng-template",12)(2,sm,0,0,"ng-template",12)(3,lm,0,0,"ng-template",12),a()),t&2){f(2);let e=V(11),i=V(13),n=V(15);d(),h("ngTemplateOutlet",i),d(),h("ngTemplateOutlet",e),d(),h("ngTemplateOutlet",n)}}function cm(t,r){}function um(t,r){if(t&1&&(o(0,"div",10),g(1,rm,4,3,"div",11),B(2,2),g(3,am,0,0,"ng-template",12),a(),o(4,"div",13),g(5,dm,4,3,"div",11),B(6,3),g(7,cm,0,0,"ng-template",12),a()),t&2){let e=f(),i=V(17),n=V(19);d(),b(e.alignHintToLeftByDefault()?1:-1),d(2),h("ngTemplateOutlet",i),d(2),b(e.alignHintToLeftByDefault()?-1:5),d(2),h("ngTemplateOutlet",n)}}function pm(t,r){}function mm(t,r){}function hm(t,r){if(t&1&&(o(0,"div",15),g(1,pm,0,0,"ng-template",12)(2,mm,0,0,"ng-template",12),a()),t&2){f(2);let e=V(9),i=V(15);d(),h("ngTemplateOutlet",e),d(),h("ngTemplateOutlet",i)}}function fm(t,r){}function gm(t,r){}function _m(t,r){}function vm(t,r){if(t&1&&(o(0,"div",15),g(1,gm,0,0,"ng-template",12)(2,_m,0,0,"ng-template",12),a()),t&2){f(2);let e=V(9),i=V(15);d(),h("ngTemplateOutlet",e),d(),h("ngTemplateOutlet",i)}}function ym(t,r){}function Cm(t,r){if(t&1&&(o(0,"div",14),g(1,hm,3,2,"div",15),B(2,4),g(3,fm,0,0,"ng-template",12),a(),o(4,"div",16),g(5,vm,3,2,"div",15),B(6,5),g(7,ym,0,0,"ng-template",12),a()),t&2){let e=f(),i=V(17),n=V(19);d(),b(e.alignHintToLeftByDefault()?1:-1),d(2),h("ngTemplateOutlet",i),d(2),b(e.alignHintToLeftByDefault()?-1:5),d(2),h("ngTemplateOutlet",n)}}function bm(t,r){t&1&&B(0,6)}function xm(t,r){t&1&&B(0,7)}function wm(t,r){t&1&&B(0,8)}function Sm(t,r){t&1&&B(0,9)}function Tm(t,r){t&1&&B(0,10)}function Dm(t,r){t&1&&B(0,11)}function Em(t,r){t&1&&(o(0,"span"),s(1,"+"),a())}function Am(t,r){if(t&1&&(g(0,Em,2,0,"span"),y(1,"ard-kbd",3)),t&2){let e=r.$implicit,i=r.$index,n=f();b(i!==0?0:-1),d(),h("appearance",n.appearance())("full",n.full())("key",e)}}var Fm=t=>({"--ard-_tabber-tabs":t});function Mm(t,r){if(t&1&&s(0),t&2){let e=r.$implicit;F(" ",e," ")}}function Im(t,r){}function km(t,r){if(t&1){let e=Y();o(0,"button",6,0),_("click",function(){let n=D(e).$implicit,l=f();return E(l.selectTab(n.tab))})("focus",function(){let n=D(e).$implicit,l=f();return E(l.onTabFocus(n.tab))})("blur",function(){let n=D(e).$implicit,l=f();return E(l.onTabBlur(n.tab))}),y(2,"div",7),o(3,"div",8),g(4,Mm,1,1,"ng-template",null,1,oe)(6,Im,0,0,"ng-template",9),a()()}if(t&2){let e,i=r.$implicit,n=V(5),l=f();te("ard-tab-disabled",i.tab.disabled())("ard-tab-with-pointer-events-when-disabled",i.tab.pointerEventsWhenDisabled())("ard-tab-active",i.tab.tabId()===l.selectedTabId())("ard-tab-focused",i.tab.tabId()===l.focusedTabId()),h("id",i.tab.tabId())("title",i.tab.tabTitle())("tabindex",i.tab.disabled()?-1:l.tabIndex()),d(6),h("ngTemplateOutlet",(e=(e=i.template)!==null&&e!==void 0?e:(e=l.labelTemplate())==null?null:e.template)!==null&&e!==void 0?e:n)("ngTemplateOutletContext",i.templateContext)}}var Pm=["modalTemplate"],Ks=(t,r)=>[t,r];function Vm(t,r){}function Om(t,r){if(t&1){let e=Y();o(0,"div",5),_("click",function(){D(e);let n=f(2);return E(n.onBackdropClick())}),g(1,Vm,0,0,"ng-template",6),a()}if(t&2){let e=f(2),i=V(3);h("ngClass",Me(2,Ks,e.ngClasses(),e.backdropClass())),d(),h("ngTemplateOutlet",i)}}function Rm(t,r){}function Lm(t,r){if(t&1){let e=Y();o(0,"div",7),_("click",function(){D(e);let n=f(2);return E(n.onBackdropClick())}),g(1,Rm,0,0,"ng-template",6),a()}if(t&2){let e=f(2),i=V(3);h("ngClass",Me(2,Ks,e.ngClasses(),e.backdropClass())),d(),h("ngTemplateOutlet",i)}}function Bm(t,r){if(t&1&&g(0,Om,2,5,"div",3)(1,Lm,2,5,"div",4),t&2){let e=f();b(e.noBackdrop()?0:1)}}function Hm(t,r){t&1&&(o(0,"ard-icon"),s(1,"close"),a())}function Um(t,r){}function Nm(t,r){if(t&1){let e=Y();o(0,"ard-icon-button",13),_("click",function(){D(e);let n=f(2);return E(n.onCloseButtonClick())}),g(1,Hm,2,0,"ng-template",null,2,oe)(3,Um,0,0,"ng-template",6),a()}if(t&2){let e,i=V(2),n=f(2);h("compact",n.compact())("disabled",n.allActionsDisabled()),d(3),h("ngTemplateOutlet",(e=(e=(e=n.closeIconTemplate())==null?null:e.template)!==null&&e!==void 0?e:(e=n._closeIconTemplate())==null?null:e.template)!==null&&e!==void 0?e:i)}}function jm(t,r){if(t&1){let e=Y();o(0,"div",8),_("click",function(n){return D(e),E(n.stopPropagation())}),o(1,"div",9)(2,"div",10),s(3),a(),g(4,Nm,4,3,"ard-icon-button",11),a(),o(5,"div",12),B(6),a()()}if(t&2){let e=f();te("ard-modal-no-heading-text",!e.heading())("ard-modal-has-close-button",!e.noCloseButton()),h("ngClass",e.panelClass()),d(3),C(e.heading()||(e.noCloseButton()?"":"\xA0")),d(),b(e.noCloseButton()?-1:4)}}function Ym(t,r){if(t&1){let e=Y();o(0,"ard-button",9),_("click",function(){D(e);let n=f().onReject;return E(n())}),s(1),a()}if(t&2){let e=f(),i=e.rejectButton,n=e.allActionsDisabled,l=e.dialogVariant,c=e.dialogCompact;h("color",i.color)("appearance",i.appearance)("variant",l)("compact",c)("disabled",n),d(),F(" ",i.text," ")}}function $m(t,r){if(t&1){let e=Y();o(0,"div",6),g(1,Ym,2,6,"ard-button",7),o(2,"ard-button",8),_("click",function(){let n=D(e).onConfirm;return E(n())}),s(3),a()()}if(t&2){let e=r.confirmButton,i=r.rejectButton,n=r.canConfirm,l=r.allActionsDisabled,c=r.dialogVariant,p=r.dialogCompact;d(),b(i.enabled?1:-1),d(),h("color",e.color)("appearance",e.appearance)("variant",c)("compact",p)("disabled",!n||l)("pointerEventsWhenDisabled",e.pointerEventsWhenDisabled),d(),F(" ",e.text," ")}}function zm(t,r){}var qs={Outlined:"outlined",Raised:"raised"},Gs={Rounded:"rounded",Sharp:"sharp",SharpConnected:"sharp ard-connected"},rn=new R("ard-form-field-control");var Wm={Outlined:"outlined"},Km={Raised:"raised"},je=z(S({},Wm),{Transparent:"transparent",Filled:"filled"}),qm={Outlined:"outlined",OutlinedStrong:"outlined-strong",Filled:"filled",FilledStrong:"filled-strong"};var Qs={Rounded:"rounded",Sharp:"sharp"},Ue=z(S({},Qs),{Pill:"pill"}),Xs={readonly:!1,disabled:!1},Gm=(()=>{class t{constructor(e){this._DEFAULTS=e;this.readonly=T(this._DEFAULTS.readonly),this.disabled=T(this._DEFAULTS.disabled)}set _readonly(e){this.readonly.set(k(e))}set _disabled(e){this.disabled.set(k(e))}get _readonlyHostAttribute(){return this.readonly()}get _disabledHostAttribute(){return this.disabled()}static{this.\u0275fac=function(i){xr()}}static{this.\u0275dir=$({type:t,hostVars:6,hostBindings:function(i,n){i&2&&(nt("readonly",n._readonlyHostAttribute)("disabled",n._disabledHostAttribute),te("ard-readonly",n._readonlyHostAttribute)("ard-disabled",n._disabledHostAttribute))},inputs:{_readonly:[0,"readonly","_readonly"],_disabled:[0,"disabled","_disabled"]}})}}return t})(),Kt=z(S({},Xs),{tabIndex:0}),on=(()=>{class t extends Gm{constructor(){super(...arguments);this.tabIndex=x(()=>this.disabled()?-1:this._tabIndex()),this._tabIndex=m(this._DEFAULTS.tabIndex,{alias:"tabIndex",transform:e=>Ae(e,0)});this.focusEvent=ne({alias:"focus"}),this.blurEvent=ne({alias:"blur"});this.isFocused=T(!1)}focus(){this._focusableElement?.first?.nativeElement.focus()}focusFirst(){this.focus()}focusLast(){this._focusableElement?.last?.nativeElement.focus()}blur(){this._focusableElement?.forEach(e=>e.nativeElement.blur())}onFocus(e){this.isFocused.set(!0),this.focusEvent.emit(e)}onBlur(e){this.isFocused.set(!1),this.blurEvent.emit(e)}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=tt(t)))(n||t)}})()}static{this.\u0275dir=$({type:t,viewQuery:function(i,n){if(i&1&&Sr(dp,5),i&2){let l;Tr(l=Dr())&&(n._focusableElement=l)}},inputs:{_tabIndex:[1,"tabIndex","_tabIndex"]},outputs:{focusEvent:"focus",blurEvent:"blur"},features:[fe]})}}return t})(),Zn=S({},Kt),fa=(()=>{class t extends on{constructor(){super(...arguments),this._shouldEmitTouched=!1;this.control=ss(this),this.htmlId=m(Xn.TakeChance.id()),this.htmlName=m(void 0),this._hasError=m(void 0,{transform:e=>k(e),alias:"hasError"}),this.hasError=x(()=>this._hasError()??(this.control.touched()&&this.control.invalid()))}registerOnTouched(e){this._onTouchedRegistered=e}registerOnChange(e){this._onChangeRegistered=e}setDisabledState(e){this.disabled.set(e)}onFocus(e){this._shouldEmitTouched=!1,super.onFocus(e)}onBlur(e){this._shouldEmitTouched=!0,super.onBlur(e),setTimeout(()=>{this._shouldEmitTouched&&this._emitTouched()},0)}_emitTouched(){this._onTouchedRegistered?.()}ngOnInit(){this.control.init()}ngOnDestroy(){this.control.destroy()}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=tt(t)))(n||t)}})()}static{this.\u0275dir=$({type:t,inputs:{htmlId:[1,"htmlId"],htmlName:[1,"htmlName"],_hasError:[1,"hasError","_hasError"]},features:[fe]})}}return t})(),gt=z(S({},Zn),{required:void 0}),ga=(()=>{class t extends fa{constructor(){super(...arguments),this._required=m(void 0,{transform:e=>k(e),alias:"required"}),this.required=x(()=>this._required()??!!(this.control.validators()?.includes(at.required)||this.control.validators()?.includes(at.requiredTrue))),this.isSuccess=m(!1,{transform:e=>k(e)})}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=tt(t)))(n||t)}})()}static{this.\u0275dir=$({type:t,inputs:{_required:[1,"required","_required"],isSuccess:[1,"isSuccess"]},features:[fe]})}}return t})(),Jn={Left:"left",Right:"right"},er={Left:"left",Center:"center",Right:"right"},Qm={Start:"start",Center:"center",End:"end"},jn=class{constructor(r,e="",i=0){this.regex=r,this.replace=e,this.caretModif=i}apply(r,e,i){let n=r;if(n&&this.regex){let l=0;for(;n.match(this.regex);){if(l>999){console.error(this,new Error("Possible infinite loop in the above RegExpTransformer. Exited after 1000 iterations."));break}let c=n.length;n=n.replace(this.regex,this.replace);let p=n.length;i=i+(p-c),l++}}return{text:n,caretPos:i}}},Xm=(t,r,e)=>({text:t.toUpperCase(),caretPos:e}),Zm=(t,r,e)=>({text:t.toLowerCase(),caretPos:e}),Jm=(t,r,e)=>{let i=[[/[^0-9-]/],[/(.+)-/,"$1"]],n={text:t,caretPos:e};for(let l of i){let[c,p,w]=l;n=new jn(c,p,w).apply(n.text,r,n.caretPos)}return n},eh=(t,r,e)=>{let i=[[/[^0-9.-]/],[/(.+)-/,"$1"],[/\.(.*)\./,"$1."],[/^(-?)\./,"$10."]],n={text:t,caretPos:e};for(let l of i){let[c,p,w]=l;n=new jn(c,p,w).apply(n.text,r,n.caretPos)}return n},Ds={ToUpper:Xm,ToLower:Zm,Integer:Jm,Float:eh},oa={AdjustOnInput:"adjust-on-input",AdjustOnBlur:"adjust-on-blur",Noop:"noop"},sa=class{constructor(r){this._ardHostCmp=r,this.value=T(null),this.stringValue=x(()=>this.value()??"")}writeValue(r){return!Dn(r)&&!Si(r)&&(console.warn(new Error(`ARD-WA0020: Trying to set <ard-input>'s value to "${r}" (of type ${typeof r}), expected string or null.`)),r=r?.toString?.()??String(r)),this._writeValue(r)}_writeValue(r){r=this._applyLengthTransformer(r);let e=this.value();return this.value.set(r),this._updateInputElement(),e!==r}rewriteValueAfterHostUpdate(){this._writeValue(this.value())}clear(){this.value.set(null),this._updateInputElement()}trim(){this.value.update(r=>r?.trim()??null),this._updateInputElement()}_updateInputElement(){let r=this._ardHostCmp.textInputEl()?.nativeElement;r&&(r.value=this.stringValue())}get caretPos(){return this._ardHostCmp.textInputEl()?.nativeElement.selectionEnd??this.stringValue.length}set caretPos(r){this._ardHostCmp.textInputEl()?.nativeElement.setSelectionRange(r,r)}_applyLengthTransformer(r){let e=this._ardHostCmp.maxLength();return!ot(e)||!r||r.length<=e||(r=r.substring(0,e),this.caretPos=e),r}};var la=class{constructor(r){this._ardHostCmp=r;this._value=T(null),this.value=this._value.asReadonly(),this.stringValue=x(()=>this._value()??""),this.numberValue=x(()=>this._value()===null?null:Number(this._value()))}setValue(r){let e=Tt(r)?String(r):r,i=this._ardHostCmp.decimalSeparator();e&&i&&i!=="."&&(e=e.split(i).join(".")),this._value.set(e),this._updateInputEl()}updateOnBlur(r){let e=this._value();Si(e)||(e=this._applyStandardConstraints(e,r??this._ardHostCmp.minMaxBehavior()===oa.AdjustOnBlur),this._ardHostCmp.fixedDecimalPlaces()&&(e=this._fixDecimalPlaces(e)),this.setValue(Number(e)))}_fixDecimalPlaces(r){let e=this._ardHostCmp.maxDecimalPlaces();if(!ot(e)||e===1/0)return r;let i=Number(r);return isNaN(i)?r:i.toFixed(e)}_updateInputEl(){let r=this.stringValue(),e=this._ardHostCmp.decimalSeparator();e&&e!=="."&&(r=r.split(".").join(e));let i=this._ardHostCmp.inputEl()?.nativeElement;if(!i)return;let n=this.caretPos;i.value=r,this.caretPos=n}writeValue(r,e){return!Tt(r)&&!Dn(r)&&!Si(r)&&(console.warn(new Error(`ARD-WA0070: Trying to set <ard-number-input>'s value to "${typeof r}", expected string, number, or null.`)),r=r?.toString?.()??String(r)),r=r===null?null:String(r),this._writeValue(r,e)}_writeValue(r,e){e&&(r=this._applyStandardConstraints(r,this._ardHostCmp.minMaxBehavior()===oa.AdjustOnInput)),r===""&&(r=null);let i=this._value();return this.setValue(r),i!==r}rewriteValueAfterHostUpdate(){this._writeValue(this._value(),!1)}get caretPos(){return this._ardHostCmp.inputEl()?.nativeElement.selectionEnd??this.stringValue().length}set caretPos(r){this._ardHostCmp.inputEl()?.nativeElement?.setSelectionRange(r,r)}_applyStandardConstraints(r,e){return!r&&r!==0?"":(r=this._standardizeSeparator(r),r=this._removeDecimalPlaces(r),r=this._applyNumberConstraint(r),r=this._applyMaxDecimalPlaces(r),e&&(r=this._applyMinMaxConstraints(r)),r)}_standardizeSeparator(r){if(!r&&r!==0)return"";let e=this._ardHostCmp.decimalSeparator();return!e||e==="."?String(r):String(r).replaceAll(e,".")}_removeDecimalPlaces(r){return!r&&r!==0?"":this._ardHostCmp.allowFloat()?r:String(r).split(".")[0]}_applyNumberConstraint(r){if(!r&&r!==0)return"";let e=String(r),i=this.stringValue(),n=this._ardHostCmp.allowFloat()?Ds.Float:Ds.Integer,{text:l,caretPos:c}=n(e,i,this.caretPos);return this.caretPos=c,l}_applyMinMaxConstraints(r){if(!r)return"";let e=this._ardHostCmp.decimalSeparator(),i=r;e&&e!=="."&&(i=i.replaceAll(e,"."));let n=Number(i);return n>this._ardHostCmp.max()?this._ardHostCmp.max().toString():n<this._ardHostCmp.min()?this._ardHostCmp.min().toString():r}_applyMaxDecimalPlaces(r){if(!r&&r!==0)return"";let e=this._ardHostCmp.maxDecimalPlaces();if(!ot(e)||e===1/0)return String(r);if(e<=0)return this._removeDecimalPlaces(r).toString();let i=String(r),n=i.indexOf(".");if(n===-1)return i;let l=n+1+e;if(i.length<=l)return i;let c=i.substring(0,l);return this.caretPos>c.length&&(this.caretPos=c.length),c}};var Zs=z(S({},gt),{appearance:je.Outlined,variant:Ue.Rounded,compact:!1,placeholder:"",alignText:Jn.Left,clearable:!1,clearButtonTitle:"Clear",inputAttrs:{},maxLength:void 0,autoTrim:!1,type:"text"}),th=(()=>{class t extends ga{constructor(){super(...arguments);this.textInputEl=Pe("textInput"),this.inputModel=new sa(this),this._wasViewInit=!1,this.placeholder=m(this._DEFAULTS.placeholder),this.clearButtonTitle=m(this._DEFAULTS.clearButtonTitle),this.shouldDisplayPlaceholder=x(()=>!!this.placeholder()&&!this.inputModel.value());this.appearance=m(this._DEFAULTS.appearance),this.variant=m(this._DEFAULTS.variant),this.alignText=m(this._DEFAULTS.alignText),this.compact=m(this._DEFAULTS.compact,{transform:e=>k(e)}),this.ngClasses=x(()=>[`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`,`ard-text-align-${this.alignText()}`,this.compact()?"ard-compact":"",this.clearable()?"ard-clearable":""].join(" "));this.type=m(this._DEFAULTS.type),this.inputAttrs=m(this._DEFAULTS.inputAttrs);this.maxLength=m(this._DEFAULTS.maxLength,{transform:e=>Ae(e,this._DEFAULTS.maxLength)}),this.maxLengthAsInt=x(()=>this.maxLength()??2147483647);this.clearable=m(this._DEFAULTS.clearable,{transform:e=>k(e)}),this.autoTrim=m(this._DEFAULTS.autoTrim,{transform:e=>k(e)});this._valueBeforeInit=null,this.valueChange=ne();this.inputEvent=ne({alias:"input"}),this.changeEvent=ne({alias:"change"}),this.clearEvent=ne({alias:"clear"}),this.shouldShowClearButton=x(()=>this.clearable()&&!this.disabled()&&!this.readonly()&&!!this.inputModel.value())}ngAfterViewInit(){this._wasViewInit=!0,this._setInputAttributes(),this._valueBeforeInit&&(this.writeValue(this._valueBeforeInit),delete this._valueBeforeInit)}writeValue(e){this.inputModel.writeValue(e)}set value(e){if(!this._wasViewInit){this._valueBeforeInit=e;return}this.writeValue(e)}get value(){return this.inputModel.value()}onInput(e){this.disabled()||this.readonly()||!this.inputModel.writeValue(e)||this._emitInput()}_emitInput(){this._onChangeRegistered?.(this.value),this.inputEvent.emit(this.value),this.valueChange.emit(this.value)}onFocusMaster(e){this.disabled()||this.readonly()||this.onFocus(e)}onBlurMaster(e){this.disabled()||this.readonly()||(this.onBlur(e),this.autoTrim()&&(this.inputModel.trim(),this._emitChange(),this._emitInput()))}onChange(e){e.stopPropagation(),this._emitChange()}_emitChange(){this.changeEvent.emit(this.inputModel.value())}onClearButtonClick(e){this.disabled()||this.readonly()||(e.stopPropagation(),this.inputModel.clear(),this._emitChange(),this._emitInput(),this.clearEvent.emit(e),this.focus())}onCopy(e){this.value&&(this.textInputEl()?.nativeElement.selectionStart===0&&this.textInputEl()?.nativeElement.selectionEnd===this.textInputEl()?.nativeElement.value.length||this.textInputEl()?.nativeElement.selectionStart===this.textInputEl()?.nativeElement.selectionEnd)&&(e.clipboardData?.setData("text/plain",this.value),e.preventDefault())}_setInputAttributes(){let e=this.textInputEl().nativeElement,i=S({autocorrect:"off",autocapitalize:"off",autocomplete:"off",tabindex:String(this.tabIndex()),type:this.type()},this.inputAttrs());for(let n of Object.keys(i))e.setAttribute(n,String(i[n]))}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=tt(t)))(n||t)}})()}static{this.\u0275dir=$({type:t,viewQuery:function(i,n){i&1&&Ve(n.textInputEl,zs,5),i&2&&ce()},inputs:{placeholder:[1,"placeholder"],clearButtonTitle:[1,"clearButtonTitle"],appearance:[1,"appearance"],variant:[1,"variant"],alignText:[1,"alignText"],compact:[1,"compact"],type:[1,"type"],inputAttrs:[1,"inputAttrs"],maxLength:[1,"maxLength"],clearable:[1,"clearable"],autoTrim:[1,"autoTrim"],value:"value"},outputs:{valueChange:"valueChange",inputEvent:"input",changeEvent:"change",clearEvent:"clear"},features:[fe]})}}return t})(),ih=z(S({},Zs),{suggValueFrom:"value",suggLabelFrom:"label",suggestionsLoadingText:"Loading...",charlist:void 0,charlistCaseInsensitive:!1,dropdownAppearance:void 0,dropdownVariant:void 0}),j1=new R("ard-autocomplete-input-defaults",{factory:()=>S({},ih)});var nh=z(S({},Kt),{appearance:je.Outlined,variant:Ue.Rounded,compact:!1}),rh=new R("ard-form-field-frame-defaults",{factory:()=>S({},nh)});var Es=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(ie(we))}}static{this.\u0275dir=$({type:t,selectors:[["ng-template","ard-prefix-tmp",""]],standalone:!1})}}return t})(),As=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(ie(we))}}static{this.\u0275dir=$({type:t,selectors:[["ng-template","ard-suffix-tmp",""]],standalone:!1})}}return t})(),ah=(()=>{class t extends on{constructor(e){super(e),this.hasError=m(!1,{transform:i=>k(i)}),this.isSuccess=m(!1,{transform:i=>k(i)});this.appearance=m(je.Outlined),this.variant=m(Ue.Rounded),this.compact=m(!1,{transform:i=>k(i)}),this._enableTransitions=Oe(new Le().asObservable().pipe(hi(!0),Na(0))),this.ngClasses=x(()=>[`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`,this.compact()?"ard-compact":"",this.hasError()?"ard-has-error":"",this.isSuccess()?"ard-is-success":"",this.isFocused()&&!this.readonly()?"ard-focused":"ard-unfocused",this._enableTransitions()?"ard-enable-transitions":""].join(" "));this.prefixTemplateInput=m(void 0,{alias:"prefixTemplate"}),this.suffixTemplateInput=m(void 0,{alias:"suffixTemplate"}),this.prefixTemplate=He(Es),this.suffixTemplate=He(As)}set _setIsFocused(e){this.isFocused.set(e)}static{this.\u0275fac=function(i){return new(i||t)(ie(rh))}}static{this.\u0275cmp=u({type:t,selectors:[["ard-form-field-frame"]],contentQueries:function(i,n,l){i&1&&(pe(l,n.prefixTemplate,Es,5),pe(l,n.suffixTemplate,As,5)),i&2&&ce(2)},inputs:{hasError:[1,"hasError"],isSuccess:[1,"isSuccess"],_setIsFocused:[0,"isFocused","_setIsFocused"],appearance:[1,"appearance"],variant:[1,"variant"],compact:[1,"compact"],prefixTemplateInput:[1,"prefixTemplate","prefixTemplateInput"],suffixTemplateInput:[1,"suffixTemplate","suffixTemplateInput"]},standalone:!1,features:[fe],ngContentSelectors:Fe,decls:6,vars:3,consts:[[1,"ard-form-field-frame",3,"ngClass"],[1,"ard-form-field-overlay"],[1,"ard-form-field-prefix-container"],[1,"ard-form-field-content-container"],[1,"ard-form-field-suffix-container"],[3,"ngTemplateOutlet"]],template:function(i,n){if(i&1&&(j(),o(0,"div",0),y(1,"div",1),g(2,up,2,1,"div",2),o(3,"div",3),B(4),a(),g(5,mp,2,1,"div",4),a()),i&2){let l,c;h("ngClass",n.ngClasses()),d(2),b(((l=n.prefixTemplateInput())!==null&&l!==void 0?l:n.prefixTemplate())?2:-1),d(3),b(((c=n.suffixTemplateInput())!==null&&c!==void 0?c:n.suffixTemplate())?5:-1)}},dependencies:[Ge,Ne],styles:[`@layer ard-ui{ard-form-field-frame{display:block}.ard-form-field-frame{position:relative}.ard-form-field-overlay{position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:1}}
`],encapsulation:2,changeDetection:0})}}return t})(),oh=(()=>{class t extends on{constructor(){super(Kt)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ard-clear-button"]],standalone:!1,features:[fe],decls:5,vars:1,consts:[["focusableElement",""],["type","button",1,"ard-clear-btn-wrapper",3,"tabindex"],[1,"ard-hitbox"],[1,"ard-focus-overlay"],["aria-hidden","true",1,"ard-clear-btn"]],template:function(i,n){i&1&&(o(0,"button",1,0),y(2,"div",2)(3,"div",3)(4,"div",4),a()),i&2&&h("tabindex",n.tabIndex())},encapsulation:2})}}return t})(),sh={filterValue:"",appearance:qs.Raised,variant:Gs.Rounded,compact:!1},Y1=new R("ard-dropdown-panel-defaults",{factory:()=>S({},sh)});var lh=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J]})}}return t})();var dh=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J]})}}return t})();var ch={Square:"square",Rectangle:"rectangle"};var uh=z(S({},gt),{appearance:je.Outlined,variant:Ue.Rounded,shape:ch.Square,compact:!1,outputAsString:!1,transform:null,inputAttrs:{},autoFillParseFn:t=>t}),$1=new R("ard-digit-input-defaults",{factory:()=>S({},uh)});var ph=S({},Zs),mh=new R("ard-input-defaults",{factory:()=>S({},ph)});var Fs=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(ie(we))}}static{this.\u0275dir=$({type:t,selectors:[["ng-template","ard-placeholder-tmp",""]],standalone:!1})}}return t})(),Ms=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(ie(we))}}static{this.\u0275dir=$({type:t,selectors:[["ng-template","ard-prefix-tmp",""]],standalone:!1})}}return t})(),Is=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(ie(we))}}static{this.\u0275dir=$({type:t,selectors:[["ng-template","ard-suffix-tmp",""]],standalone:!1})}}return t})(),qt=(()=>{class t extends th{constructor(e){super(e);this.prefixTemplate=He(Ms),this.suffixTemplate=He(Is);this.placeholderTemplate=He(Fs)}static{this.\u0275fac=function(i){return new(i||t)(ie(mh))}}static{this.\u0275cmp=u({type:t,selectors:[["ard-input"]],contentQueries:function(i,n,l){i&1&&(pe(l,n.prefixTemplate,Ms,5),pe(l,n.suffixTemplate,Is,5),pe(l,n.placeholderTemplate,Fs,5)),i&2&&ce(3)},standalone:!1,features:[rt([{provide:Ci,useExisting:fi(()=>t),multi:!0},{provide:rn,useExisting:t}]),fe],decls:8,vars:21,consts:[["textInput","","focusableElement",""],["defaultPlaceholderTemplate",""],[3,"appearance","variant","compact","readonly","isFocused","hasError","isSuccess","prefixTemplate","suffixTemplate"],[1,"ard-input",3,"click","ngClass"],[1,"ard-input-container"],["type","text",3,"input","focus","blur","change","copy","readonly","disabled","maxLength"],[3,"title"],[3,"ngTemplateOutlet"],[1,"ard-placeholder"],[3,"click","title"]],template:function(i,n){if(i&1){let l=Y();o(0,"ard-form-field-frame",2)(1,"div",3),_("click",function(){return D(l),E(n.focus())}),o(2,"div",4),g(3,gp,3,1),o(4,"input",5,0),_("input",function(){D(l);let p=V(5);return E(n.onInput(p.value))})("focus",function(p){return D(l),E(n.onFocusMaster(p))})("blur",function(p){return D(l),E(n.onBlurMaster(p))})("change",function(p){return D(l),E(n.onChange(p))})("copy",function(p){return D(l),E(n.onCopy(p))}),a()(),g(7,_p,1,1,"ard-clear-button",6),a()()}if(i&2){let l,c;h("appearance",n.appearance())("variant",n.variant())("compact",n.compact())("readonly",n.readonly())("isFocused",n.isFocused())("hasError",n.hasError())("isSuccess",n.isSuccess())("prefixTemplate",(l=n.prefixTemplate())==null?null:l.template)("suffixTemplate",(c=n.suffixTemplate())==null?null:c.template),d(),te("ard-has-value",n.value),h("ngClass",n.ngClasses()),d(2),b(n.shouldDisplayPlaceholder()?3:-1),d(),h("readonly",n.readonly())("disabled",n.disabled())("maxLength",n.maxLengthAsInt()),nt("id",n.htmlId())("name",n.htmlName())("tabindex",n.tabIndex())("type",n.type()),d(3),b(n.shouldShowClearButton()?7:-1)}},dependencies:[Ge,Ne,oh,ah],styles:[`@layer ard-ui{ard-input{display:block}.ard-placeholder{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;pointer-events:none}.ard-text-align-left input,.ard-text-align-left .ard-placeholder{text-align:left}.ard-text-align-center input,.ard-text-align-center .ard-placeholder{text-align:center}.ard-text-align-right input,.ard-text-align-right .ard-placeholder{text-align:right}}
`],encapsulation:2,changeDetection:0})}}return t})(),Gt=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J,lh,dh]})}}return t})(),hh=z(S({},gt),{appearance:je.Outlined,variant:Ue.Rounded,compact:!1,placeholder:"",revealable:!0,holdToReveal:!1,autoHideTimeoutMs:void 0,revealed:!1,inputAttrs:{}}),z1=new R("ard-password-input-defaults",{factory:()=>S({},hh)});var fh={filled:!1,weight:400,grade:0,opticalSize:40,ariaLabel:""},gh=new R("ard-icon-defaults",{factory:()=>S({},fh)});var _h=(()=>{class t{transform(e){return e=e.trim().toLowerCase(),e=e.replace(/[ -]/g,"_"),e}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275pipe=xn({name:"icon",type:t,pure:!0,standalone:!1})}}return t})(),ue=(()=>{class t{constructor(){this._DEFAULTS=M(gh),this.ariaLabel=m(""),this.icon=m(void 0),this.filled=m(!1,{transform:e=>k(e)}),this.weight=m(400,{transform:e=>Ae(e,400)}),this.grade=m(0,{transform:e=>Ae(e,0)}),this.opticalSize=m(40,{transform:e=>Ae(e,40)}),this.fontVariationSettings=x(()=>{let e={FILL:ot(this.filled())?Number(this.filled()):void 0,wght:this.weight(),GRAD:this.grade(),opsz:this.opticalSize()},i=Object.entries(e).filter(n=>ot(n[1])).map(n=>`"${n[0]}" ${n[1]}`).flat();return i.length===0?"":["font-variation-settings: ",i.join(", ")].join("")}),this.contentWrapper=Pe("contentWrapperEl")}ngAfterViewInit(){!this.icon()&&!this.contentWrapper()?.nativeElement.innerText&&console.warn("ARD-FT9000: Using <ard-icon> without specifying the [icon] field.")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ard-icon"]],viewQuery:function(i,n){i&1&&Ve(n.contentWrapper,ha,5),i&2&&ce()},inputs:{ariaLabel:[1,"ariaLabel"],icon:[1,"icon"],filled:[1,"filled"],weight:[1,"weight"],grade:[1,"grade"],opticalSize:[1,"opticalSize"]},standalone:!1,ngContentSelectors:Fe,decls:6,vars:7,consts:[["contentWrapperEl",""],[1,"ard-icon","material-symbols-outlined"],[1,"ard-icon-content-wrapper"]],template:function(i,n){if(i&1&&(j(),o(0,"span",1),s(1),ut(2,"icon"),a(),o(3,"div",2,0),B(5),a()),i&2){let l,c=V(4);Ce(n.fontVariationSettings()),nt("aria-hidden",n.ariaLabel()!==void 0)("aria-label",n.ariaLabel()),d(),F(" ",Nt(2,5,(l=n.icon())!==null&&l!==void 0?l:c.innerText),`
`)}},dependencies:[_h],styles:[`@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";@layer ard-ui{ard-icon{font-variation-settings:"FILL" 0,"wght" 400,"GRAD" 0,"opsz" 48;font-size:1.5em;width:1em;height:1em;display:inline-block;-webkit-user-select:none;user-select:none;background-repeat:no-repeat;fill:currentColor;overflow:hidden;flex-shrink:0}ard-icon .ard-icon-content-wrapper{display:none}}.ard-icon{font-variation-settings:inherit;font-size:inherit}
`],encapsulation:2,changeDetection:0})}}return t})();var ae=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J]})}}return t})();function aa(t,r){return r===void 0?!1:r.indexOf(t)!==-1}var ci={byLabel:(t,r)=>{let e=r.label.toLocaleLowerCase(),i=t===e;return[i||aa(t,e),i]},byValue:(t,r)=>{let e=String(r.value).toLocaleLowerCase(),i=t===e;return[i||aa(t,e),i]},byGroup:(t,r)=>{let e=String(r.group).toLocaleLowerCase(),i=t===e;return[i||aa(t,e),i]},byLabelAndGroup:(t,r)=>{let e=ci.byLabel(t,r);return e[0]?[!0,e[1]]:ci.byGroup(t,r)},byLabelAndValue:(t,r)=>{let e=ci.byLabel(t,r);return e[0]?[!0,e[1]]:ci.byValue(t,r)},byLabelAndGroupAndValue:(t,r)=>{let e=ci.byLabelAndValue(t,r);return e[0]?[!0,e[1]]:ci.byGroup(t,r)}},vh={Top:"top",Bottom:"bottom",Auto:"auto"},yh=z(S({},gt),{valueFrom:"value",labelFrom:"label",disabledFrom:"disabled",groupLabelFrom:"group",groupDisabledFrom:"disabled",childrenFrom:"children",searchFn:ci.byLabel,clearButtonTitle:"Clear",noItemsFoundText:"No items found.",addCustomOptionText:"Add option",loadingPlaceholderText:"Loading...",placeholder:"",searchPlaceholder:"",dropdownPosition:vh.Auto,inputAttrs:{},isLoading:!1,deferValueWrites:null,itemsAlreadyGrouped:!1,invertDisabled:!1,noGroupActions:!1,autoHighlightFirst:!1,autoFocus:!1,keepOpen:!1,hideSelected:!1,noBackspaceClear:!1,sortMultipleValues:!1,searchCaseSensitive:!1,keepSearchAfterSelect:!1,maxSelectedItems:1/0,itemDisplayLimit:1/0,compareWith:void 0,appearance:je.Outlined,variant:Ue.Rounded,compact:!1,dropdownPanelWidth:void 0,dropdownPanelHeight:void 0,dropdownPanelMinWidth:"max-content",dropdownPanelMinHeight:void 0,dropdownPanelMaxWidth:void 0,dropdownPanelMaxHeight:void 0,dropdownAppearance:void 0,dropdownVariant:void 0,multiselectable:!1,clearable:!1,searchable:!1,addCustom:!1}),W1=new R("ard-select-defaults",{factory:()=>S({},yh)});var Ie={None:"none",Primary:"primary",Secondary:"secondary",Warning:"warn",Danger:"danger",Success:"success",Info:"info"},Ot=z(S({},Ie),{CurrentColor:"currentColor"}),_a=z(S({},Xs),{contentAlignment:Jn.Left,appearance:qm.Outlined,variant:Ue.Rounded,color:Ie.Primary,compact:!1}),K1=new R("ard-chip-defaults",{factory:()=>_a});var Ch=z(S(S({},Kt),_a),{deleteButtonTitle:"Delete"}),q1=new R("ard-deletable-chip-defaults",{factory:()=>S({},Ch)});var tr=z(S({},Zn),{reverseSelected:!1}),bh=(()=>{class t extends fa{constructor(){super(...arguments);this.selectEvent=ne({alias:"select"}),this.unselectEvent=ne({alias:"unselect"}),this.changeEvent=ne({alias:"change"});this.selected=T(!1),this.selectedChange=ne(),this.reverseSelected=m(!1,{transform:e=>k(e)}),this.selectedAccountingForReverse=x(()=>this.reverseSelected()?!this.selected():this.selected())}writeValue(e){this._selected=e}_emitChange(){this._onChangeRegistered?.(this.selected()),this.selected()?this.selectEvent.emit(null):this.unselectEvent.emit(null),this.selectedChange.emit(this.selected()),this.changeEvent.emit(this.selected())}set _selected(e){this.selected.set(k(e))}get _selectedHostAttribute(){return this.selectedAccountingForReverse()}toggleSelected(){this.disabled()||this.readonly()||(this.selected.update(e=>!e),this._emitChange(),this._emitTouched())}select(){this.disabled()||this.readonly()||(this.selected.set(!0),this._emitChange(),this._emitTouched())}unselect(){this.disabled()||this.readonly()||(this.selected.set(!1),this._emitChange(),this._emitTouched())}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=tt(t)))(n||t)}})()}static{this.\u0275dir=$({type:t,hostVars:3,hostBindings:function(i,n){i&2&&(nt("selected",n._selectedHostAttribute),te("ard-selected",n._selectedHostAttribute))},inputs:{_selected:[0,"selected","_selected"],reverseSelected:[1,"reverseSelected"]},outputs:{selectEvent:"select",unselectEvent:"unselect",changeEvent:"change",selectedChange:"selectedChange"},features:[fe]})}}return t})(),xh=z(S(S({},tr),_a),{chipTitle:"Select",hideSelectionIcon:!1}),G1=new R("ard-selectable-chip-defaults",{factory:()=>S({},xh)});var Js=z(S({},gt),{compact:!1,multiple:!1,blockAfterUpload:!1}),wh=z(S({},Js),{variant:Ue.Rounded,color:Ie.Primary}),Q1=new R("ard-file-drop-area-defaults",{factory:()=>S({},wh)});var el=(()=>{class t{constructor(e){this._DEFAULTS=e,this.wrapperClasses=m(""),this.type=m(this._DEFAULTS.type),this.ariaLabel=m("");this.appearance=m(this._DEFAULTS.appearance),this.color=m(this._DEFAULTS.color),this.lightColoring=m(this._DEFAULTS.lightColoring,{transform:i=>k(i)}),this.compact=m(this._DEFAULTS.compact,{transform:i=>k(i)}),this.disabled=m(this._DEFAULTS.disabled,{transform:i=>k(i)}),this.tabIndex=x(()=>this.disabled()?-1:this._tabIndex()),this._tabIndex=m(this._DEFAULTS.tabIndex,{alias:"tabIndex",transform:i=>Ae(i,0)}),this.pointerEventsWhenDisabled=m(this._DEFAULTS.pointerEventsWhenDisabled,{transform:i=>k(i)})}static{this.\u0275fac=function(i){xr()}}static{this.\u0275dir=$({type:t,inputs:{wrapperClasses:[1,"wrapperClasses"],type:[1,"type"],ariaLabel:[1,"ariaLabel"],appearance:[1,"appearance"],color:[1,"color"],lightColoring:[1,"lightColoring"],compact:[1,"compact"],disabled:[1,"disabled"],_tabIndex:[1,"tabIndex","_tabIndex"],pointerEventsWhenDisabled:[1,"pointerEventsWhenDisabled"]}})}}return t})(),Sh={Button:"button",Submit:"submit",Reset:"reset"},an={Transparent:"transparent",Raised:"raised",RaisedStrong:"raised-strong",Outlined:"outlined",OutlinedStrong:"outlined-strong",Flat:"flat"},nn={Rounded:"rounded",Pill:"pill",Sharp:"sharp"},Th={Standard:"standard",Small:"small"},tl={disabled:!1,tabIndex:0,color:Ie.Primary,lightColoring:!1,compact:!1,type:Sh.Button,pointerEventsWhenDisabled:!1},il=z(S({},tl),{appearance:an.Raised}),Dh=z(S({},il),{variant:nn.Rounded,vertical:!1,square:!1}),nl=new R("ard-button-defaults",{factory:()=>S({},Dh)});var pi=(()=>{class t extends el{constructor(e){super(e),this._hostEl=M(ye),this._renderer=M(Ht);this.variant=m(this._DEFAULTS.variant),this.vertical=m(this._DEFAULTS.vertical,{transform:n=>k(n)}),this.square=m(this._DEFAULTS.square,{transform:n=>k(n)}),this.ngClasses=x(()=>["ard-button",this.wrapperClasses(),`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`,`ard-color-${this.color()}`,this.lightColoring()?"ard-light-coloring":"",this.disabled()?"ard-disabled":"",this.compact()?"ard-compact":"",this.vertical()?"ard-button-vertical":"",this.square()?"ard-button-square":"",this.pointerEventsWhenDisabled()?"ard-button-with-pointer-events-when-disabled":""].join(" "));this.inheritedCompact=T(null),this.wasCompactChanged=T(!1),this.compactOrInherited=x(()=>this.wasCompactChanged()?this.compact():this.inheritedCompact()??this.compact());let i=this._hostEl.nativeElement;i.tagName==="BUTTON"&&(se(()=>{this._renderer.setProperty(i,"disabled",this.disabled())}),se(()=>{this._renderer.setAttribute(i,"type",this.type())}))}handleClick(e){this.disabled()&&(e.preventDefault(),e.stopImmediatePropagation())}ngOnChanges(e){e.compact&&this.wasCompactChanged.set(!0)}static{this.\u0275fac=function(i){return new(i||t)(ie(nl))}}static{this.\u0275dir=$({type:t,selectors:[["button","ard-button",""],["a","ard-button",""]],hostVars:3,hostBindings:function(i,n){i&1&&_("click",function(c){return n.handleClick(c)}),i&2&&(Xa("tabindex",n.tabIndex()),ge(n.ngClasses()))},inputs:{variant:[1,"variant"],vertical:[1,"vertical"],square:[1,"square"]},standalone:!1,features:[fe,St]})}}return t})(),ve=(()=>{class t extends el{constructor(e){super(e);this.focusEvent=ne({alias:"focus"}),this.blurEvent=ne({alias:"blur"});this.variant=m(this._DEFAULTS.variant),this.vertical=m(this._DEFAULTS.vertical,{transform:i=>k(i)}),this.square=m(this._DEFAULTS.square,{transform:i=>k(i)}),this.inheritedCompact=T(null),this.wasCompactChanged=T(!1),this.compactOrInherited=x(()=>this.wasCompactChanged()?this.compact():this.inheritedCompact()??this.compact()),this.ngClasses=x(()=>"")}ngOnChanges(e){e.compact&&this.wasCompactChanged.set(!0)}static{this.\u0275fac=function(i){return new(i||t)(ie(nl))}}static{this.\u0275cmp=u({type:t,selectors:[["ard-button"]],hostVars:2,hostBindings:function(i,n){i&2&&te("ard-button-with-pointer-events-when-disabled",n.pointerEventsWhenDisabled())},inputs:{variant:[1,"variant"],vertical:[1,"vertical"],square:[1,"square"]},outputs:{focusEvent:"focus",blurEvent:"blur"},standalone:!1,features:[fe,St],ngContentSelectors:Fe,decls:3,vars:12,consts:[["buttonElement",""],["ard-button","",3,"focus","blur","type","appearance","color","disabled","tabIndex","lightColoring","pointerEventsWhenDisabled","variant","vertical","square","compact"]],template:function(i,n){if(i&1){let l=Y();j(),o(0,"button",1,0),_("focus",function(p){return D(l),E(n.focusEvent.emit(p))})("blur",function(p){return D(l),E(n.blurEvent.emit(p))}),B(2),a()}i&2&&(h("type",n.type())("appearance",n.appearance())("color",n.color())("disabled",n.disabled())("tabIndex",n.tabIndex())("lightColoring",n.lightColoring())("pointerEventsWhenDisabled",n.pointerEventsWhenDisabled())("variant",n.variant())("vertical",n.vertical())("square",n.square())("compact",n.compactOrInherited()),nt("aria-label",n.ariaLabel()))},dependencies:[pi],styles:[`@layer ard-ui{ard-button{display:block}.ard-button{display:flex;align-items:center;position:relative;cursor:pointer}.ard-button.ard-button-align-left{flex-direction:row}.ard-button.ard-button-align-right{flex-direction:row-reverse}.ard-button.ard-button-vertical{flex-direction:column}}
`],encapsulation:2,changeDetection:0})}}return t})();var he=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J]})}}return t})();var Eh=z(S({},Js),{appearance:je.Outlined,variant:Ue.Rounded,color:Ie.Primary,inputAttrs:{},placeholder:"",clearable:!1,clearButtonTitle:"Clear"}),X1=new R("ard-file-input-defaults",{factory:()=>S({},Eh)});var rl={Days:"days",Months:"months",Years:"years"},Ah={Only:"only",Left:"left",Inner:"inner",Right:"right"};function Fh(t){return!!t&&typeof t=="object"&&"from"in t&&Mr(t.from)&&"to"in t&&Mr(t.to)}var Mh=new R("ard-icon-button-defaults",{factory:()=>S(S({},tl),Kt)});var We=(()=>{class t extends on{constructor(e){super(e),this.wrapperClasses=m(""),this.type=m(this._DEFAULTS.type),this.ariaLabel=m("");this.color=m(this._DEFAULTS.color),this.lightColoring=m(this._DEFAULTS.lightColoring,{transform:i=>k(i)}),this.compact=m(this._DEFAULTS.compact,{transform:i=>k(i)}),this.pointerEventsWhenDisabled=m(this._DEFAULTS.pointerEventsWhenDisabled,{transform:i=>k(i)}),this.ngClasses=x(()=>["ard-appearance-transparent",`ard-color-${this.disabled()?Ie.None:this.color()}`,this.lightColoring()?"ard-light-coloring":"",this.compact()?"ard-compact":"",this.pointerEventsWhenDisabled()?"ard-icon-button-with-pointer-events-when-disabled":""].join(" "))}static{this.\u0275fac=function(i){return new(i||t)(ie(Mh))}}static{this.\u0275cmp=u({type:t,selectors:[["ard-icon-button"]],hostVars:2,hostBindings:function(i,n){i&2&&te("ard-button-with-pointer-events-when-disabled",n.pointerEventsWhenDisabled())},inputs:{wrapperClasses:[1,"wrapperClasses"],type:[1,"type"],ariaLabel:[1,"ariaLabel"],color:[1,"color"],lightColoring:[1,"lightColoring"],compact:[1,"compact"],pointerEventsWhenDisabled:[1,"pointerEventsWhenDisabled"]},standalone:!1,features:[fe],ngContentSelectors:Fe,decls:2,vars:4,consts:[[1,"ard-icon-button",3,"focus","blur","type","ngClass","tabindex"]],template:function(i,n){i&1&&(j(),o(0,"button",0),_("focus",function(c){return n.focusEvent.emit(c)})("blur",function(c){return n.blurEvent.emit(c)}),B(1),a()),i&2&&(h("type",n.type())("ngClass",n.ngClasses())("tabindex",n.tabIndex()),nt("aria-label",n.ariaLabel()))},dependencies:[Ge],styles:[`@layer ard-ui{ard-icon-button{display:block}.ard-icon-button{display:flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.ard-icon-button .ard-button-content{max-height:100%;display:flex;align-items:center;justify-content:center}}
`],encapsulation:2,changeDetection:0})}}return t})();var Ih=z(S({},gt),{color:Ie.Primary,activeView:rl.Days,activeYear:new Date().getFullYear(),activeMonth:new Date().getMonth(),firstWeekday:1,multipleYearPageChangeModifier:5,multipleYearOffset:2,multipleYearPageSize:24,staticHeight:!1,hideFloatingMonth:!1,autoFocus:!1,multiCalendarLocation:Ah.Only,min:null,max:null,filter:null,UTC:!1,daysViewHeaderDateFormat:"MMM yyyy",yearsViewHeaderDateFormat:"yyyy",monthsViewHeaderDateFormat:"yyyy",weekdayDateFormat:"EEEEE",weekdayTitleDateFormat:"EEEE",floatingMonthDateFormat:"LLL",floatingMonthTitleDateFormat:"LLLL",yearDateFormat:"yyyy",monthDateFormat:"MMM",dayDateFormat:"d"}),Z1=new R("ard-calendar-defaults",{factory:()=>S({},Ih)});var Ke=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J]})}}return t})();var kh=t=>t instanceof Date?`${t.getDate().toString().padStart(2,"0")}/${(t.getMonth()+1).toString().padStart(2,"0")}/${t.getFullYear()}`:"",Ph=t=>{if(Fh(t)){let r=`${t.from.getDate().toString().padStart(2,"0")}/${(t.from.getMonth()+1).toString().padStart(2,"0")}/${t.from.getFullYear()}`,e=t.to?`${t.to.getDate().toString().padStart(2,"0")}/${(t.to.getMonth()+1).toString().padStart(2,"0")}/${t.to.getFullYear()}`:"";return`${r} \u2013 ${e}`}return""},Vh=(t,r)=>{let e=t.trim();if(!e.includes("/")&&!isNaN(Date.parse(e))){let l=new Date(e);return l.setHours(0,0,0,0),l}let i=e.split("/"),n=new Date().getFullYear();if(i.length===1){let l=parseInt(i[0],10);return isNaN(l)?null:new Date(l,0,1)}if(i.length===2){let l=parseInt(i[0],10),c=parseInt(i[1],10)-1;if(isNaN(l)||isNaN(c))return null;let p=new Date(n,c,l);return isNaN(p.getTime())?null:p}if(i.length===3){let l=parseInt(i[0],10),c=parseInt(i[1],10)-1,p=parseInt(i[2],10);if(isNaN(l)||isNaN(c)||isNaN(p))return null;let w=new Date(p,c,l);return isNaN(w.getTime())?null:w}return r},Oh={Allow:"allow",Adjust:"adjust"},Rh=z(S({},gt),{inputAttrs:{},placeholder:"",serializeFn:kh,rangeSerializeFn:Ph,deserializeFn:Vh,appearance:je.Outlined,variant:Ue.Rounded,color:Ie.Primary,compact:!1,dropdownAppearance:qs.Outlined,dropdownVariant:Gs.Rounded,minMaxStrategy:Oh.Adjust,startView:void 0,inputReadOnly:!1,calendarDisabled:!1,calendarHidden:!1,activeView:rl.Days,activeYear:new Date().getFullYear(),activeMonth:new Date().getMonth(),firstWeekday:1,multipleYearPageChangeModifier:5,numberOfCalendars:2,min:null,max:null,filter:null,UTC:!1,hideFloatingMonth:!1,calendarDaysViewHeaderDateFormat:"MMM yyyy",calendarYearsViewHeaderDateFormat:"yyyy",calendarMonthsViewHeaderDateFormat:"yyyy",calendarWeekdayDateFormat:"EEEEE",calendarWeekdayTitleDateFormat:"EEEE",calendarFloatingMonthDateFormat:"LLL",calendarFloatingMonthTitleDateFormat:"LLLL",calendarYearDateFormat:"yyyy",calendarMonthDateFormat:"MMM",calendarDayDateFormat:"d",acceptButtonText:"Accept",cancelButtonText:"Cancel"}),J1=new R("ard-date-input-defaults",{factory:()=>S({},Rh)});var Lh={NoChange:"nochange",Uppercase:"uppercase",Lowercase:"lowercase"};var Bh=z(S({},gt),{appearance:je.Outlined,variant:Ue.Rounded,compact:!1,placeholder:"",case:Lh.NoChange,maxDigits:void 0,hideHash:!1,clearable:!1,clearButtonTitle:"Clear",inputAttrs:{}}),ex=new R("ard-hex-input-defaults",{factory:()=>S({},Bh)});var Hh=z(S({},gt),{appearance:je.Outlined,variant:Ue.Rounded,compact:!1,placeholder:"",alignText:er.Center,inputAttrs:{},min:0,max:1/0,minMaxBehavior:oa.AdjustOnBlur,maxDecimalPlaces:1/0,fixedDecimalPlaces:!1,decimalSeparator:".",allowFloat:!1,noButtons:!1,stepSize:1,keepFocusOnQuickChangeButton:!0}),Uh=new R("ard-number-input-defaults",{factory:()=>S({},Hh)});var ks=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(ie(we))}}static{this.\u0275dir=$({type:t,selectors:[["ng-template","ard-placeholder-tmp",""]],standalone:!1})}}return t})(),Yn=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(ie(we))}}static{this.\u0275dir=$({type:t,selectors:[["ng-template","ard-prefix-tmp",""]],standalone:!1})}}return t})(),$n=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(ie(we))}}static{this.\u0275dir=$({type:t,selectors:[["ng-template","ard-suffix-tmp",""]],standalone:!1})}}return t})(),Ze=(()=>{class t extends ga{constructor(e){super(e);this.inputEl=Pe("textInput"),this.inputModel=new la(this),this._wasViewInit=!1;this.placeholder=m(this._DEFAULTS.placeholder),this.placeholderTemplate=He(ks),this.shouldDisplayPlaceholder=x(()=>!!this.placeholder()&&!this.inputModel.stringValue());this.prefixTemplate=He(Yn),this.suffixTemplate=He($n);this.appearance=m(this._DEFAULTS.appearance),this.variant=m(this._DEFAULTS.variant),this.alignText=m(this._DEFAULTS.alignText),this.compact=m(this._DEFAULTS.compact,{transform:i=>k(i)}),this.ngClasses=x(()=>[`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`,`ard-text-align-${this.alignText()}`,`ard-quick-change-${!this.noButtons()}`,this.compact()?"ard-compact":""].join(" ")),this.buttonVariant=x(()=>this.variant()===Ue.Rounded?nn.Rounded:this.variant()===Ue.Pill?nn.Pill:this.variant()===Ue.Sharp?nn.Sharp:nn.Rounded),this.buttonAppearance=x(()=>this.appearance()===je.Outlined&&this.variant()!==Ue.Pill?an.Outlined:an.Transparent);this.inputAttrs=m({});this._valueBeforeInit=null,this.valueChange=ne();this.inputEvent=ne({alias:"input"}),this.changeEvent=ne({alias:"change"}),this.clearEvent=ne({alias:"clear"}),this.quickChangeEvent=ne({alias:"quickChange"});this.min=m(this._DEFAULTS.min,{transform:i=>Ae(i,this._DEFAULTS.min)}),this.max=m(this._DEFAULTS.max,{transform:i=>Ae(i,this._DEFAULTS.max)}),this.minMaxBehavior=m(this._DEFAULTS.minMaxBehavior),this.maxDecimalPlaces=m(this._DEFAULTS.maxDecimalPlaces,{transform:i=>{let n=Ae(i,this._DEFAULTS.maxDecimalPlaces);if(n<0)throw new Error(`ARD-FT0072a: Cannot set <ard-number-input>'s [maxDecimalPlaces] to a negative value, got "${n}".`);if(n%1!==0)throw new Error(`ARD-FT0072b: Cannot set <ard-number-input>'s [maxDecimalPlaces] to a non-integer value, got "${n}".`);return n}}),this.fixedDecimalPlaces=m(this._DEFAULTS.fixedDecimalPlaces,{transform:i=>k(i)}),this.decimalSeparator=m(this._DEFAULTS.decimalSeparator,{transform:i=>{if(typeof i!="string"||i.length!==1)throw new Error(`ARD-FT0073: <ard-number-input>'s [decimalSeparator] must be a single character, got "${i}".`);return i}}),this.allowFloat=m(this._DEFAULTS.allowFloat,{transform:i=>k(i)});this.noButtons=m(this._DEFAULTS.noButtons,{transform:i=>k(i)}),this.keepFocusOnQuickChangeButton=m(this._DEFAULTS.keepFocusOnQuickChangeButton,{transform:i=>k(i)}),this.stepSize=m(this._DEFAULTS.stepSize,{transform:i=>{let n=Ae(i,1);if(n===0)throw new Error("ARD-FT0071a: Cannot set <ard-number-input>'s [stepSize] to 0.");if(n<0)throw new Error(`ARD-FT0071b: Cannot set <ard-number-input>'s [stepSize] to a negative value, got "${n}".`);return n}}),this._isQuickChangeButtonFocused=!1,this.canIncrement=x(()=>{let i=this.inputModel.numberValue();return!ot(i)||i<this.max()}),this.canDecrement=x(()=>{let i=this.inputModel.numberValue();return!ot(i)||i>this.min()}),se(()=>{let i=this.allowFloat(),n=this.stepSize();if(!i&&n%1!==0)throw new Error(`ARD-FT0071c: <ard-number-input>'s [stepSize] must be an integer when [allowFloat] is false, got "${n}".`)}),se(()=>{let i=this.decimalSeparator();this.inputModel.rewriteValueAfterHostUpdate()})}ngAfterViewInit(){this._setInputAttributes(),this._wasViewInit=!0,this._valueBeforeInit&&(this.writeValue(this._valueBeforeInit),delete this._valueBeforeInit)}writeValue(e){this.inputModel.writeValue(e,!1),!this.isFocused()&&this.inputModel.updateOnBlur(!0)}set value(e){if(typeof e=="number"&&(e=e.toString()),!this._wasViewInit){this._valueBeforeInit=e;return}this.writeValue(e)}onQuickChangeButtonClick(e,i){if(this.disabled()||this.readonly())return;let n=this.inputModel.numberValue(),l=ot(n);if(n||(n=0),e===1&&n>=this.max()&&l||e===-1&&n<=this.min()&&l)return;i&&i.stopPropagation();let c=n+this.stepSize()*e,p=(0,Dt.roundToPrecision)(c,9);this.writeValue(p),this.quickChangeEvent.emit({direction:e,value:p}),this._emitChange(),this._emitTouched(),this._focusInputIfCantQuickChange()}_focusInputIfCantQuickChange(){this.keepFocusOnQuickChangeButton()||(!this.canDecrement()||!this.canIncrement())&&this.focus()}onQuickChangeButtonMouseup(e){this.disabled()||this.readonly()||this.keepFocusOnQuickChangeButton()&&(this._isQuickChangeButtonFocused=!0,setTimeout(()=>{this._isQuickChangeButtonFocused=!1},0))}onInput(e){this.disabled()||this.readonly()||!this.inputModel.writeValue(e,!0)||this._emitInput()}_emitInput(){this.inputEvent.emit(this.inputModel.numberValue()),this._emitChange()}onFocusMaster(e){this.disabled()||this.readonly()||this.onFocus(e)}onBlurMaster(e){this.disabled()||this.readonly()||(this.onBlur(e),this.inputModel.updateOnBlur())}onChange(e){e.stopPropagation(),this._emitChange()}_emitChange(){let e=this.inputModel.numberValue();this.valueChange.emit(e),this.changeEvent.emit(e),this._onChangeRegistered?.(e)}onMouseup(){if(this.disabled()||this.readonly())return;let e=window.getSelection();e&&e.type==="Range"||this._isQuickChangeButtonFocused||this.focus()}onCopy(e){this.value&&(this.inputEl()?.nativeElement.selectionStart===0&&this.inputEl()?.nativeElement.selectionEnd===this.inputEl()?.nativeElement.value.length||this.inputEl()?.nativeElement.selectionStart===this.inputEl()?.nativeElement.selectionEnd)&&(e.clipboardData?.setData("text/plain",String(this.value)),e.preventDefault())}_setInputAttributes(){let e=this.inputEl().nativeElement,i=S({type:"text",autocorrect:"off",autocapitalize:"off",autocomplete:"off",tabindex:String(this.tabIndex)},this.inputAttrs);for(let n of Object.keys(i))e.setAttribute(n,String(i[n]))}static{this.\u0275fac=function(i){return new(i||t)(ie(Uh))}}static{this.\u0275cmp=u({type:t,selectors:[["ard-number-input"]],contentQueries:function(i,n,l){i&1&&(pe(l,n.placeholderTemplate,ks,5),pe(l,n.prefixTemplate,Yn,5),pe(l,n.suffixTemplate,$n,5)),i&2&&ce(3)},viewQuery:function(i,n){i&1&&Ve(n.inputEl,zs,5),i&2&&ce()},inputs:{placeholder:[1,"placeholder"],appearance:[1,"appearance"],variant:[1,"variant"],alignText:[1,"alignText"],compact:[1,"compact"],inputAttrs:[1,"inputAttrs"],value:"value",min:[1,"min"],max:[1,"max"],minMaxBehavior:[1,"minMaxBehavior"],maxDecimalPlaces:[1,"maxDecimalPlaces"],fixedDecimalPlaces:[1,"fixedDecimalPlaces"],decimalSeparator:[1,"decimalSeparator"],allowFloat:[1,"allowFloat"],noButtons:[1,"noButtons"],keepFocusOnQuickChangeButton:[1,"keepFocusOnQuickChangeButton"],stepSize:[1,"stepSize"]},outputs:{valueChange:"valueChange",inputEvent:"input",changeEvent:"change",clearEvent:"clear",quickChangeEvent:"quickChange"},standalone:!1,features:[rt([{provide:Ci,useExisting:fi(()=>t),multi:!0},{provide:rn,useExisting:t}]),fe],decls:11,vars:17,consts:[["textInput","","focusableElement",""],["defaultPlaceholderTemplate",""],[1,"ard-number-input",3,"mousedown","mouseup","ngClass"],["color","none","pointerEventsWhenDisabled","","ardHoldSpaceKey","",1,"ard-quick-change-button","decrement",3,"variant","appearance","disabled","tabIndex"],[1,"ard-number-input-wrapper"],[1,"ard-number-input-prefix-container"],[1,"ard-input-container"],["type","text","inputmode","numeric",3,"input","focus","blur","change","mousedown","mouseup","copy","readonly","disabled"],[1,"ard-number-input-suffix-container"],["color","none","pointerEventsWhenDisabled","","ardHoldSpaceKey","",1,"ard-quick-change-button","increment",3,"variant","appearance","disabled","tabIndex"],["color","none","pointerEventsWhenDisabled","","ardHoldSpaceKey","",1,"ard-quick-change-button","decrement",3,"click","mouseup","ardHold","variant","appearance","disabled","tabIndex"],[3,"ngTemplateOutlet"],[1,"ard-placeholder"],["color","none","pointerEventsWhenDisabled","","ardHoldSpaceKey","",1,"ard-quick-change-button","increment",3,"click","mouseup","ardHold","variant","appearance","disabled","tabIndex"]],template:function(i,n){if(i&1){let l=Y();o(0,"div",2),_("mousedown",function(p){return D(l),E(p.preventDefault())})("mouseup",function(){return D(l),E(n.onMouseup())}),g(1,vp,2,4,"ard-button",3),o(2,"div",4),g(3,Cp,2,1,"div",5),o(4,"div",6),g(5,wp,3,1),o(6,"input",7,0),_("input",function(){D(l);let p=V(7);return E(n.onInput(p.value))})("focus",function(p){return D(l),E(n.onFocusMaster(p))})("blur",function(p){return D(l),E(n.onBlurMaster(p))})("change",function(p){return D(l),E(n.onChange(p))})("mousedown",function(p){return D(l),E(p.stopPropagation())})("mouseup",function(p){return D(l),E(p.stopPropagation())})("copy",function(p){return D(l),E(n.onCopy(p))}),a()(),g(9,Tp,2,1,"div",8),a(),g(10,Dp,2,4,"ard-button",9),a()}i&2&&(te("ard-has-error",n.hasError())("ard-is-success",n.isSuccess())("ard-has-value",n.value),h("ngClass",n.ngClasses()),d(),b(n.noButtons()?-1:1),d(2),b(n.prefixTemplate()?3:-1),d(2),b(n.shouldDisplayPlaceholder()?5:-1),d(),h("readonly",n.readonly())("disabled",n.disabled()),nt("id",n.htmlId())("name",n.htmlName())("tabindex",n.tabIndex()),d(3),b(n.suffixTemplate()?9:-1),d(),b(n.noButtons()?-1:10))},dependencies:[Ge,Ne,as,ve],styles:[`@layer ard-ui{ard-number-input{display:block}.ard-number-input{display:flex;max-width:100%}.ard-number-input .ard-placeholder{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;pointer-events:none}.ard-text-align-left input{text-align:left}.ard-text-align-left .ard-placeholder{justify-content:flex-start}.ard-text-align-center input{text-align:center}.ard-text-align-center .ard-placeholder{justify-content:center}.ard-text-align-right input{text-align:right}.ard-text-align-right .ard-placeholder{justify-content:flex-end}.ard-quick-change-button{-webkit-user-select:none;user-select:none;height:100%}.ard-readonly>.ard-number-input .ard-quick-change-button{pointer-events:none}}
`],encapsulation:2,changeDetection:0})}}return t})(),Je=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J,os,he]})}}return t})(),Nh={vertical:!1,compact:!1},jh=new R("ard-button-group-defaults",{factory:()=>S({},Nh)});var _t=(()=>{class t{ngOnChanges(e){e.vertical&&this.wasVerticalChanged.set(!0),e.compact&&this.wasCompactChanged.set(!0)}constructor(){this._DEFAULTS=M(jh),this.vertical=m(this._DEFAULTS.vertical,{transform:e=>k(e)}),this.inheritedVertical=T(null),this.compact=m(this._DEFAULTS.compact,{transform:e=>k(e)}),this.inheritedCompact=T(null),this.wasVerticalChanged=T(!1),this.wasCompactChanged=T(!1),this.verticalOrInherited=x(()=>this.wasVerticalChanged()?this.vertical():this.inheritedVertical()??this.vertical()),this.compactOrInherited=x(()=>this.wasCompactChanged()?this.compact():this.inheritedCompact()??this.compact()),this.groupChildren=xt(t),this.buttonChildren=xt(ve),this.buttonDirChildren=xt(pi),this._wasContentInitialized=!1,se(()=>{this._updateChildrenStyles()})}ngAfterContentInit(){this._wasContentInitialized=!0,this._updateChildrenStyles()}_updateChildrenStyles(){let e=this.buttonChildren(),i=this.buttonDirChildren(),n=this.groupChildren(),l=this.compactOrInherited(),c=this.verticalOrInherited();if(this._wasContentInitialized){for(let p of[...e,...i])p.inheritedCompact.set(l);for(let p of n)p.inheritedCompact.set(l),p.inheritedVertical.set(c)}}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ard-button-group"]],contentQueries:function(i,n,l){i&1&&(pe(l,n.groupChildren,t,4),pe(l,n.buttonChildren,ve,4),pe(l,n.buttonDirChildren,pi,4)),i&2&&ce(3)},hostAttrs:[1,"ard-button-group"],hostVars:4,hostBindings:function(i,n){i&2&&te("ard-button-group__vertical",n.verticalOrInherited())("ard-button-group__compact",n.compactOrInherited())},inputs:{vertical:[1,"vertical"],compact:[1,"compact"]},standalone:!1,features:[St],ngContentSelectors:Fe,decls:1,vars:0,template:function(i,n){i&1&&(j(),B(0))},styles:[`@layer ard-ui{ard-button-group{display:flex;z-index:0;max-width:max-content}ard-button-group .ard-button:hover,ard-button-group .ard-button:focus,ard-button-group .ard-button:focus-visible,ard-button-group .ard-button:active{z-index:1}ard-button-group:not(.ard-button-group__vertical):not(:has(>ard-button-group))>ard-button:not(:last-child) .ard-button{border-top-right-radius:0;border-bottom-right-radius:0}ard-button-group:not(.ard-button-group__vertical):not(:has(>ard-button-group))>ard-button:not(:first-child) .ard-button{border-top-left-radius:0;border-bottom-left-radius:0;margin-left:-1px}ard-button-group:not(.ard-button-group__vertical):not(:has(>ard-button-group))>.ard-button:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}ard-button-group:not(.ard-button-group__vertical):not(:has(>ard-button-group))>.ard-button:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;margin-left:-1px}ard-button-group:not(.ard-button-group__vertical):not(:has(>ard-button-group)) .ard-divider+ard-button .ard-button,ard-button-group:not(.ard-button-group__vertical):not(:has(>ard-button-group)) .ard-divider+.ard-button{margin-left:0}ard-button-group.ard-button-group__vertical{flex-direction:column}ard-button-group.ard-button-group__vertical:not(:has(>ard-button-group))>ard-button:not(:last-child) .ard-button{border-bottom-right-radius:0;border-bottom-left-radius:0}ard-button-group.ard-button-group__vertical:not(:has(>ard-button-group))>ard-button:not(:first-child) .ard-button{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}ard-button-group.ard-button-group__vertical:not(:has(>ard-button-group))>.ard-button:not(:last-child){border-bottom-right-radius:0;border-bottom-left-radius:0}ard-button-group.ard-button-group__vertical:not(:has(>ard-button-group))>.ard-button:not(:first-child){border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}ard-button-group.ard-button-group__vertical:not(:has(>ard-button-group))>.ard-divider+ard-button .ard-button,ard-button-group.ard-button-group__vertical:not(:has(>ard-button-group))>.ard-divider+.ard-button{margin-top:0}ard-button-group.ard-button-group__vertical>.ard-button,ard-button-group.ard-button-group__vertical>ard-button,ard-button-group.ard-button-group__vertical>ard-button>.ard-button{width:100%;aspect-ratio:unset}}
`],encapsulation:2,changeDetection:0})}}return t})(),vt=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J]})}}return t})(),Yh=z(S({},il),{size:Th.Standard}),tx=new R("ard-fab-defaults",{factory:()=>S({},Yh)});var $h=z(S({},tr),{color:Ot.Primary,unselectedColor:Ot.None}),zh=new R("ard-checkbox-defaults",{factory:()=>S({},$h)});var Ps=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(ie(we))}}static{this.\u0275dir=$({type:t,selectors:[["ng-template","ard-checkbox-tmp",""]],standalone:!1})}}return t})(),Vs=(()=>{class t{constructor(e){this.template=e,this.checkboxTmp=m(void 0)}static{this.\u0275fac=function(i){return new(i||t)(ie(we))}}static{this.\u0275dir=$({type:t,selectors:[["ng-template","_ard-tmp-repository",""]],inputs:{checkboxTmp:[1,"checkboxTmp"]}})}}return t})(),ht={Unselected:"unselected",Indeterminate:"indeterminate",Selected:"selected"},ir=(()=>{class t extends bh{constructor(e){super(e),this._componentId="100",this._componentName="checkbox";this.color=m(this._DEFAULTS.color),this.unselectedColor=m(this._DEFAULTS.unselectedColor),this.ngClasses=x(()=>[`ard-color-${this.color()}`,`ard-unselected-color-${this.unselectedColor()}`,`ard-checkbox-${this.internalState()}`].join(" ")),this.internalState=wt(ht.Unselected,{alias:"state"}),this.state=x(()=>this.reverseSelected()?this.internalState()===ht.Unselected?ht.Selected:this.internalState()===ht.Selected?ht.Unselected:this.internalState():this.internalState()),this.State=ht;this.templateRepository=He(Vs),this.checkboxTemplate=He(Ps),this.checkboxTemplateContext=x(()=>({$implicit:this.selectedAccountingForReverse(),selected:this.selectedAccountingForReverse(),internalSelected:this.selected(),state:this.state(),internalState:this.internalState()}))}set _selected(e){let i=k(e);this.selected.set(i),this.internalState.set(i?ht.Selected:ht.Unselected)}toggleState(){if(this.disabled()||this.readonly())return;let e=ht.Unselected;this.internalState()===ht.Unselected&&(e=ht.Selected),this.internalState.set(e),this.selected.set(this.internalState()===ht.Selected),this._emitChange(),this._emitTouched()}static{this.\u0275fac=function(i){return new(i||t)(ie(zh))}}static{this.\u0275cmp=u({type:t,selectors:[["ard-checkbox"]],contentQueries:function(i,n,l){i&1&&(pe(l,n.templateRepository,Vs,5),pe(l,n.checkboxTemplate,Ps,5)),i&2&&ce(2)},inputs:{color:[1,"color"],unselectedColor:[1,"unselectedColor"],internalState:[1,"state","internalState"]},outputs:{internalState:"stateChange"},standalone:!1,features:[rt([{provide:Ci,useExisting:fi(()=>t),multi:!0}]),fe],decls:6,vars:8,consts:[["defaultCheckboxTemplate",""],["role","checkbox","type","button",1,"ard-checkbox",3,"click","focus","blur","tabindex","ngClass"],[1,"ard-hitbox"],[1,"ard-focus-overlay"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"icon","filled"]],template:function(i,n){if(i&1){let l=Y();o(0,"button",1),_("click",function(){return D(l),E(n.toggleState())})("focus",function(p){return D(l),E(n.onFocus(p))})("blur",function(p){return D(l),E(n.onBlur(p))}),y(1,"div",2)(2,"div",3),g(3,Ep,1,2,"ng-template",null,0,oe)(5,Ap,0,0,"ng-template",4),a()}if(i&2){let l,c=V(4);h("tabindex",n.tabIndex())("ngClass",n.ngClasses()),nt("id",n.htmlId())("name",n.htmlName())("aria-checked",n.selectedAccountingForReverse())("aria-disabled",n.disabled()),d(5),h("ngTemplateOutlet",(l=(l=(l=n.templateRepository())==null||(l=l.checkboxTmp())==null?null:l.template)!==null&&l!==void 0?l:(l=n.checkboxTemplate())==null?null:l.template)!==null&&l!==void 0?l:c)("ngTemplateOutletContext",n.checkboxTemplateContext())}},dependencies:[Ge,Ne,ue],styles:[`@layer ard-ui{ard-checkbox{display:block}.ard-checkbox{font-size:inherit}.ard-checkbox>ard-icon{font-size:1.5em}ard-checkbox.ard-readonly .ard-checkbox,ard-checkbox.ard-disabled .ard-checkbox{cursor:default}ard-checkbox.ard-readonly .ard-checkbox .ard-focus-overlay,ard-checkbox.ard-disabled .ard-checkbox .ard-focus-overlay{display:none}}
`],encapsulation:2,changeDetection:0})}}return t})(),nr=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J,ae]})}}return t})(),Wh=z(S({},Kt),{color:Ot.Primary}),Kh=new R("ard-radio-defaults",{factory:()=>S({},Wh)});var zn=(()=>{class t extends on{constructor(e){super(e),this._changeDetector=M(Gi),this.htmlId=m(Xn.TakeChance.id());this.selectEvent=ne({alias:"select"}),this.unselectEvent=ne({alias:"unselect"}),this.changeEvent=ne({alias:"change"}),this.touchedEvent=ne({alias:"touched"});this.selected=T(!1),this.selectedChange=ne(),this.value=m();this.color=m(this._DEFAULTS.color),this.ngClasses=x(()=>[`ard-color-${this.color()}`,`ard-radio-${this.selected()?"selected":"unselected"}`].join(" "));this.name=T(null)}_emitChange(){this.selected()?this.selectEvent.emit():this.unselectEvent.emit(),this.selectedChange.emit(this.selected()),this.changeEvent.emit(this.selected())}_emitTouched(){this.touchedEvent.emit()}set _selected(e){this.selected.set(k(e))}get _selectedHostAttribute(){return this.selected()}toggleSelected(){this.disabled()||this.readonly()||(this.selected.update(e=>!e),this._emitChange(),this._emitTouched())}select(){this.disabled()||this.readonly()||(this.selected.set(!0),this._emitChange(),this._emitTouched())}unselect(){this.disabled()||this.readonly()||(this.selected.set(!1),this._emitChange(),this._emitTouched())}onMousedown(){this.disabled()||this.readonly()||this.focus()}onMouseup(){this.disabled()||this.readonly()||(this.focus(),this.selected.set(!0),this._emitChange())}markForCheck(){this._changeDetector.markForCheck()}static{this.\u0275fac=function(i){return new(i||t)(ie(Kh))}}static{this.\u0275cmp=u({type:t,selectors:[["ard-radio"]],hostVars:3,hostBindings:function(i,n){i&2&&(nt("selected",n._selectedHostAttribute),te("ard-selected",n._selectedHostAttribute))},inputs:{htmlId:[1,"htmlId"],_selected:[0,"selected","_selected"],value:[1,"value"],color:[1,"color"]},outputs:{selectEvent:"select",unselectEvent:"unselect",changeEvent:"change",touchedEvent:"touched",selectedChange:"selectedChange"},standalone:!1,features:[fe],ngContentSelectors:Fe,decls:11,vars:8,consts:[["focusableElement",""],["radio",""],["type","button",1,"ard-radio",3,"focus","blur","mousedown","mouseup","ngClass","tabindex"],[1,"ard-radio-circles"],[1,"ard-radio-outer-circle"],[1,"ard-radio-inner-circle"],[1,"ard-focus-overlay"],[1,"ard-hitbox"],[3,"for"],["type","radio",1,"ard-radio-input-element",3,"name","id","checked","disabled","readOnly"]],template:function(i,n){if(i&1){let l=Y();j(),o(0,"button",2,0),_("focus",function(p){return D(l),E(n.onFocus(p))})("blur",function(p){return D(l),E(n.onBlur(p))})("mousedown",function(){return D(l),E(n.onMousedown())})("mouseup",function(){return D(l),E(n.onMouseup())}),o(2,"div",3),y(3,"div",4)(4,"div",5)(5,"div",6)(6,"div",7),a(),o(7,"label",8),B(8),a()(),y(9,"input",9,1)}i&2&&(h("ngClass",n.ngClasses())("tabindex",n.tabIndex()),d(7),h("for",n.htmlId()),d(2),h("name",n.name())("id",n.htmlId())("checked",n.selected())("disabled",n.disabled())("readOnly",n.readonly()))},dependencies:[Ge],styles:[`@layer ard-ui{ard-radio{display:block}.ard-radio{border:none;background:none}.ard-radio>label{pointer-events:none}ard-radio>.ard-radio-input-element{display:none}}
`],encapsulation:2,changeDetection:0})}}return t})(),al=(()=>{class t extends ga{get _htmlIdHostAttribute(){return this.htmlId()}constructor(){super(gt),this._radios=xt(zn,{descendants:!0}),this.valueChange=ne(),this.changeEvent=ne({alias:"change"}),this.selected=wt(null);this.name=x(()=>this.htmlName()??Xn.TakeChance.id());this._childEventSubs=[],this._isContentInit=!1,se(()=>{this.name(),this._updateRadioButtonNames()}),se(()=>{this.readonly(),this._updateReadonlyRadioButtons()}),se(()=>{this.selected(),this._checkSelectedRadioButton()}),se(()=>{let e=this._radios();if(e){setTimeout(()=>{this._updateRadioButtonNames()},0),this._destroyChildSubscriptions();for(let i of e)this._childEventSubs.push(i.blurEvent.subscribe(n=>{this._handleBlurEvents(n)})),this._childEventSubs.push(i.focusEvent.subscribe(n=>{this._handleFocusEvents(n)})),this._childEventSubs.push(i.selectedChange.subscribe(n=>{n&&this._handleChangeEvents(i)})),this._childEventSubs.push(i.touchedEvent.subscribe(()=>{this._emitTouched()}))}})}get value(){return this.selected()?.value()}set value(e){this.writeValue(e)}writeValue(e){if(this.value!==e){if(!this._isContentInit){this._valueBeforeInit=e;return}this._findRadioByValue(e)}setTimeout(()=>{this._updateRadiosByValue()},0)}_findRadioByValue(e){this._radios&&this.selected.set(this._radios().find(i=>e===i.value())??null)}_updateRadiosByValue(){this._isContentInit&&this._radios().forEach(e=>{e.selected.set(this.value===e.value()),e.markForCheck()})}_checkSelectedRadioButton(){let e=this.selected();e&&!e.selected()&&(e.selected.set(!0),e.markForCheck())}_updateRadioButtonNames(){this._radios()&&this._radios().forEach(e=>{e.name.set(this.name()),e.markForCheck()})}_updateReadonlyRadioButtons(){this._radios()&&this._radios().forEach(e=>{e.readonly.set(this.readonly()),e.markForCheck()})}_handleBlurEvents(e){this.onBlur(e)}_handleFocusEvents(e){this.onFocus(e)}_handleChangeEvents(e){this.writeValue(e.value()),this._emitChange()}_emitChange(){let e=this.value;this._onChangeRegistered?.(e),this.changeEvent.emit(e),this.valueChange.emit(e)}ngAfterContentInit(){this._isContentInit=!0,this._valueBeforeInit!==void 0&&this.writeValue(this._valueBeforeInit),setTimeout(()=>{this._updateRadioButtonNames()},0);for(let e of this._radios())this._childEventSubs.push(e.blurEvent.subscribe(i=>{this._handleBlurEvents(i)})),this._childEventSubs.push(e.focusEvent.subscribe(i=>{this._handleFocusEvents(i)})),this._childEventSubs.push(e.selectedChange.subscribe(i=>{i&&this._handleChangeEvents(e)})),this._childEventSubs.push(e.touchedEvent.subscribe(()=>{this._emitTouched()}))}ngOnDestroy(){super.ngOnDestroy(),this._destroyChildSubscriptions()}_destroyChildSubscriptions(){for(let e of this._childEventSubs)e.unsubscribe();this._childEventSubs=[]}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ard-radio-group"]],contentQueries:function(i,n,l){i&1&&pe(l,n._radios,zn,5),i&2&&ce()},hostAttrs:["role","radiogroup"],hostVars:5,hostBindings:function(i,n){i&2&&nt("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null)("id",n._htmlIdHostAttribute)},inputs:{value:"value",selected:[1,"selected"]},outputs:{valueChange:"valueChange",changeEvent:"change",selected:"selectedChange"},standalone:!1,features:[rt([{provide:Ci,useExisting:fi(()=>t),multi:!0},{provide:rn,useExisting:t}]),fe],ngContentSelectors:Fe,decls:1,vars:0,template:function(i,n){i&1&&(j(),B(0))},styles:[`@layer ard-ui{ard-radio-group{display:flex}}
`],encapsulation:2,changeDetection:0})}}return t})(),ol=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J]})}}return t})();var qh=z(S({},gt),{valueFrom:"value",labelFrom:"label",disabledFrom:"disabled",compareWith:void 0,multiselectable:!1,requireValue:!1,invertDisabled:!1,maxSelectedItems:void 0});var Gh=z(S({},Ue),{RoundedConnected:"rounded-connected",SharpConnected:"sharp-connected",PillConnected:"pill-connected"}),Qh=z(S({},je),{FilledStrong:"filled-strong",OutlinedStrong:"outlined-strong"}),Xh=z(S({},qh),{appearance:Qh.Outlined,variant:Gh.RoundedConnected,color:Ie.Primary,align:er.Center,iconBased:!1,compact:!1,autoFocus:!1,uniformWidths:!1,itemsPerRow:1/0}),ix=new R("ard-segment-defaults",{factory:()=>S({},Xh)});var Zh={Raised:"raised",Contained:"contained"},Jh=z(S({},tr),{color:Ie.Primary,appearance:Zh.Raised,icon:void 0,selectedIcon:void 0,unselectedIcon:void 0}),nx=new R("ard-slide-toggle-defaults",{factory:()=>S({},Jh)});var ui={Push:"push",Allow:"allow",Block:"block"},Os=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(ie(we))}}static{this.\u0275dir=$({type:t,selectors:[["ng-template","ard-slider-tooltip-tmp",""]],standalone:!1})}}return t})(),sl={Always:"always",Auto:"auto",Never:"never"},da={Top:"top",Bottom:"bottom"},ef=z(S({},Zn),{noTooltip:!1,showValueTicks:!1,formatTooltipFn:t=>t,min:0,max:100,step:1,shiftMultiplier:5,labelPosition:da.Bottom,labels:[],color:Ot.Primary,compact:!1,tooltipPosition:da.Top,tooltipBehavior:sl.Auto,selectionBehavior:ui.Allow,minimumDistance:0,emitTouchedOnEveryChange:!1}),ll=(()=>{class t extends fa{constructor(){super(...arguments),this.elementRef=Pe("track"),this.document=M(De),this.renderer=M(Ht),this.overlay=M(Ai),this.scrollStrategyOpts=M(Ln),this.viewContainerRef=M(Pt);this.min=m(this._DEFAULTS.min,{transform:e=>Ae(e,this._DEFAULTS.min)}),this.max=m(this._DEFAULTS.max,{transform:e=>Ae(e,this._DEFAULTS.max)}),this.step=m(this._DEFAULTS.step,{transform:e=>{let i=Ae(e,this._DEFAULTS.step);if(i===0)throw new Error(`ARD-FT${this.componentId}1a: Cannot set <ard-${this.componentName}>'s [step] to 0.`);if(i<0)throw new Error(`ARD-FT${this.componentId}1b: Cannot set <ard-${this.componentName}>'s [step] to a negative value, got ${i}.`);return i}}),this.minMaxStepValueCleanup=se(()=>{this.min(),this.max(),this.step(),Qi(()=>this.cleanupValueAfterMinMaxStepChange())}),this.minMaxErrorCheck=se(()=>{let e=this.min(),i=this.max();if(e>=i)throw new Error(`ARD-FT${this.componentId}0: Cannot set <ard-${this.componentName}>'s [min] to a value greater than or equal to [max], got min=${e} and max=${i}.`)}),this.shiftMultiplier=m(this._DEFAULTS.shiftMultiplier,{transform:e=>Ae(e,this._DEFAULTS.shiftMultiplier)}),this._stepSizeComputed=x(()=>this.step()/Math.abs(this.min()-this.max()));this.showValueTicks=m(this._DEFAULTS.showValueTicks,{transform:e=>k(e)}),this._tickArray=x(()=>{let e=[],i=0;for(;i<100;)e.push(i),i+=this._stepSizeComputed()*100,i=(0,Dt.roundToPrecision)(i,6);return e.push(100),e.map(n=>`${n}%`)});this._transformLabelInput=e=>!ot(e)||Array.isArray(e)&&e.length===0?[]:(typeof e=="string"&&(e=Bn(e).map(Number)),ot(e[0])&&typeof e[0]=="number"?e.map(i=>({label:i,value:i})):e),this.labelPosition=m(this._DEFAULTS.labelPosition),this.labels=m(this._transformLabelInput(this._DEFAULTS.labels),{transform:e=>this._transformLabelInput(e)}),this.labelObjects=x(()=>{let e=this.labels();return!ot(e)||e.length===0?[]:e.map(i=>{let n=this._clampValue(i.value);return{label:String(i.label),positionPercent:`${this._valueToPercent(n)*100}%`}})});this.color=m(Ot.Primary),this.compact=m(!1,{transform:e=>k(e)}),this.ngClasses=x(()=>[`ard-color-${this.color()}`,`ard-labels-${this.labelPosition()}`,`ard-tooltip-${this.tooltipPosition()}`,this.compact()?"ard-compact":""].join(" "));this.sliderTransition=x(()=>{let e=this._totalSteps(),i=20*(e+200)/(e+20)-80,n=(0,Dt.roundToPrecision)(i,3);return n<0?"0":Math.min(80,n)+"ms"}),this._totalSteps=x(()=>(this.max()-this.min())/this.step()),this.valueChange=ne();this.noTooltip=m(this._DEFAULTS.noTooltip,{transform:e=>k(e)}),this.tooltipFormatFn=m(this._DEFAULTS.formatTooltipFn),this.tooltipTemplate=He(Os),this.tooltipPosition=m(da.Top),this.tooltipBehavior=m(sl.Auto);this._grabbedHandleId=T(null),this._shouldCheckForMovement=!1,this._bodyHasClass=!1,this.emitTouchedOnEveryChange=m(this._DEFAULTS.emitTouchedOnEveryChange,{transform:e=>k(e)}),this.isSliderHandleGrabbed=x(()=>!!this._grabbedHandleId()),this.grabbedHandleEffect=se(()=>{this.isSliderHandleGrabbed()?this.renderer.addClass(this.document.body,"ard-body-slider-handle-grabbed"):this.renderer.removeClass(this.document.body,"ard-body-slider-handle-grabbed")}),this.handlePositionsPercent=x(()=>[this._handlePositions()[0]*100+"%",this._handlePositions()[1]*100+"%"])}set value(e){this.writeValue(e)}get value(){return this._value()}_offset(e,i,n=1){let l=this._stepSizeComputed()*(i?this.shiftMultiplier():1),c=this._handlePositions()[n-1]+l*e;c=this._clampPercentValue(c),this._setValueFromPercent(c),this.emitTouchedOnEveryChange()&&this._emitTouched()}_decrement(e,i=!1){this._offset(-1,i||e.shiftKey)}_increment(e,i=!1){this._offset(1,i||e.shiftKey)}_clampValue(e){return e=Math.min(e,this.max()),e=Math.max(e,this.min()),e-=this.min(),e=(0,Dt.roundToMultiple)(e,this.step()),e+=this.min(),e}_valueToPercent(e){let i=Math.abs(this.min()-this.max());return(e-this.min())/i}_emitChange(){let e=this.value;this._onChangeRegistered?.(e),this.valueChange.emit(e)}onPointerDownOnHandle(e,i=1){this.disabled()||this.readonly()||(this._grabbedHandleId.set(i),this._shouldCheckForMovement=!0,this._bodyHasClass||(this._bodyHasClass=!0,this.renderer.addClass(this.document.body,"ard-prevent-touch-actions")))}onPointerUp(){this.disabled()||this.readonly()||this._shouldCheckForMovement&&(this.emitTouchedOnEveryChange()&&this._emitTouched(),this._grabbedHandleId.set(null),this._shouldCheckForMovement=!1,this._bodyHasClass&&(this._bodyHasClass=!1,this.renderer.removeClass(this.document.body,"ard-prevent-touch-actions")))}_setValueFromPercent(e,i=1){i&&this._handlePositions()[i-1]!==e&&(this._value.set(this._percentValueToValue(e,i)),this._emitChange())}_writeValueFromEvent(e,i){if(this.disabled()||this.readonly())return;let n=this._getPercentValueFromEvent(e);this._setValueFromPercent(n,i)}_getElementRect(){return this.elementRef().nativeElement.getBoundingClientRect()}_clampPercentValue(e){return e=Math.min(e,1),e=Math.max(e,0),e=(0,Dt.roundToMultiple)(e,this._stepSizeComputed()),e}_getPercentValueFromEvent(e){let i=this._getElementRect(),n;e instanceof MouseEvent?n=e.clientX:n=e.targetTouches[0].clientX;let l=(n-i.left)/i.width;return this._clampPercentValue(l)}onKeyPress(e){if(!(this.disabled()||this.readonly()))switch(e.code){case"ArrowLeft":case"ArrowDown":{this._decrement(e);return}case"ArrowRight":case"ArrowUp":{this._increment(e);return}case"PageDown":{this._decrement(e,!0);return}case"PageUp":{this._increment(e,!0);return}case"Home":{this._decrement(e,!0);return}case"End":{this._increment(e,!0);return}}}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=tt(t)))(n||t)}})()}static{this.\u0275dir=$({type:t,contentQueries:function(i,n,l){i&1&&pe(l,n.tooltipTemplate,Os,5),i&2&&ce()},viewQuery:function(i,n){i&1&&Ve(n.elementRef,Fp,5),i&2&&ce()},hostBindings:function(i,n){i&1&&_("pointerup",function(){return n.onPointerUp()},!1,qe)("touchend",function(){return n.onPointerUp()},!1,qe)("keydown",function(c){return n.onKeyPress(c)})},inputs:{min:[1,"min"],max:[1,"max"],step:[1,"step"],shiftMultiplier:[1,"shiftMultiplier"],showValueTicks:[1,"showValueTicks"],labelPosition:[1,"labelPosition"],labels:[1,"labels"],color:[1,"color"],compact:[1,"compact"],value:"value",noTooltip:[1,"noTooltip"],tooltipFormatFn:[1,"tooltipFormatFn"],tooltipPosition:[1,"tooltipPosition"],tooltipBehavior:[1,"tooltipBehavior"],emitTouchedOnEveryChange:[1,"emitTouchedOnEveryChange"]},outputs:{valueChange:"valueChange"},features:[fe]})}}return t})(),tf=S({},ef),dl=new R("ard-slider-defaults",{factory:()=>S({},tf)});var rr=(()=>{class t extends ll{constructor(e){super(e),this.componentId="106",this.componentName="range-slider",this._value=T({from:-Number.MIN_SAFE_INTEGER,to:Number.MIN_SAFE_INTEGER}),this.selectionBehavior=m(this._DEFAULTS.selectionBehavior),this.minimumDistance=m(this._DEFAULTS.minimumDistance,{transform:i=>Ae(i,this._DEFAULTS.minimumDistance)});this._tooltipValue=x(()=>{let i=this._value(),n=this.tooltipFormatFn();return{from:String(n(i.from)),to:String(n(i.to))}}),this.tooltipContexts=x(()=>({from:{value:this._tooltipValue().from,$implicit:this._tooltipValue().from},to:{value:this._tooltipValue().to,$implicit:this._tooltipValue().to}}));this.trackOverlayLeft=x(()=>Math.min(...this._handlePositions())*100+"%"),this.trackOverlayWidth=x(()=>Math.abs(this._handlePositions()[0]-this._handlePositions()[1])*100+"%"),this._handlePositions=x(()=>{let i=Math.abs(this.min()-this.max()),n=this._value(),l=(n.from-this.min())/i,c=(n.to-this.min())/i;return[l,c]});this.currentHandle=T(null)}_isValidObject(e){return Fr(e)&&Tt(e.from)&&Tt(e.to)}_isValidTuple(e){return Array.isArray(e)&&Tt(e[0])&&Tt(e[1])&&e.length===2}_normalizeSliderRange(e){return e.from<=e.to?e:{from:e.to,to:e.from}}writeValue(e){if(!this._isValidObject(e)&&!this._isValidTuple(e)){this.reset();return}let i=-Number.MIN_SAFE_INTEGER,n=Number.MIN_SAFE_INTEGER;this._isValidObject(e)?(i=e.from,n=e.to):this._isValidTuple(e)&&(i=e[0],n=e[1]);let l=this._clampValue(i),c=this._clampValue(n),p=this._normalizeSliderRange({from:l,to:c});p.from===this.value.from&&p.to===this.value.to||this._value.set(p)}get value(){return this._normalizeSliderRange(this._value())}set value(e){this.writeValue(e)}cleanupValueAfterMinMaxStepChange(){let e=this._value();this.writeValue(e);let i=this._value();(e.from!==i.from||e.to!==i.to)&&this._emitChange()}reset(){this.disabled()||this.readonly()||this._value.set({from:-this.min(),to:this.max()})}onTrackHitboxPointerDown(e){this.disabled()||this.readonly()||(this._writeValueFromEvent(e),this.onPointerDownOnHandle(e))}onPointerMove(e){this.disabled()||this.readonly()||this._shouldCheckForMovement&&(this._bodyHasClass||(this._bodyHasClass=!0,this.renderer.addClass(this.document.body,"ard-prevent-touch-actions")),this._writeValueFromEvent(e,this._grabbedHandleId()))}_percentValueToValue(e,i){let n=Math.abs(this.min()-this.max()),l=e*n+this.min();l=(0,Dt.roundToPrecision)(l,9);let c=this.step()*this.minimumDistance(),p=this._value(),w={from:p.from,to:p.to};return i===1?(l>=p.to-c&&(this.selectionBehavior()===ui.Block?l=p.to-c:this.selectionBehavior()===ui.Push&&(w.to=l+c)),w.from=l):(l<=p.from+c&&(this.selectionBehavior()===ui.Block?l=p.from+c:this.selectionBehavior()===ui.Push&&(w.from=l-c)),w.to=l),w}onHandleFocus(e,i){this.disabled()||this.readonly()||(this.onFocus(e),this.currentHandle.set(i))}onBlur(e){super.onBlur(e),this.currentHandle.set(null)}static{this.\u0275fac=function(i){return new(i||t)(ie(dl))}}static{this.\u0275cmp=u({type:t,selectors:[["ard-range-slider"]],hostBindings:function(i,n){i&1&&_("mousemove",function(c){return n.onPointerMove(c)},!1,qe)("touchmove",function(c){return n.onPointerMove(c)},!1,qe)},inputs:{selectionBehavior:[1,"selectionBehavior"],minimumDistance:[1,"minimumDistance"]},standalone:!1,features:[fe],decls:21,vars:30,consts:[["track",""],["focusableElement",""],["handleThumbBase",""],["defaultTooltipTemplate",""],[1,"ard-range-slider-container-master",3,"ngClass"],[1,"ard-slider-container"],[1,"ard-slider-track",3,"pointerdown"],[1,"ard-hitbox"],[1,"ard-slider-track-overlay","ard-slider-track-inactive"],[1,"ard-slider-track-overlay","ard-slider-track-active"],[1,"ard-value-tick-container"],["type","button",1,"ard-slider-handle",3,"pointerdown","focus","blur","tabindex"],[1,"ard-focus-overlay"],[1,"ard-slider-tooltip-wrapper",3,"ard-tooltip-always","style"],[1,"ard-slider-label-container"],[1,"ard-value-tick",3,"style"],[1,"ard-value-tick"],[1,"ard-slider-tooltip-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ard-slider-tooltip"],[1,"ard-slider-label",3,"style"],[1,"ard-slider-label"],[1,"ard-slider-thumb"]],template:function(i,n){if(i&1){let l=Y();o(0,"div",4)(1,"div",5)(2,"div",6,0),_("pointerdown",function(p){return D(l),E(n.onTrackHitboxPointerDown(p))}),y(4,"div",7)(5,"div",8)(6,"div",9),g(7,kp,3,0,"div",10),a(),o(8,"button",11,1),_("pointerdown",function(p){return D(l),E(n.onPointerDownOnHandle(p,1))})("focus",function(p){return D(l),E(n.onHandleFocus(p,1))})("blur",function(p){return D(l),E(n.onBlur(p))}),y(10,"div",12)(11,"div",7),a(),g(12,Op,4,8,"div",13),o(13,"button",11,1),_("pointerdown",function(p){return D(l),E(n.onPointerDownOnHandle(p,2))})("focus",function(p){return D(l),E(n.onHandleFocus(p,2))})("blur",function(p){return D(l),E(n.onBlur(p))}),y(15,"div",12)(16,"div",7),a(),g(17,Bp,4,8,"div",13),a(),g(18,Up,3,0,"div",14),a(),g(19,Np,1,0,"ng-template",null,2,oe)}i&2&&(Ce(be(21,Ws,n.sliderTransition())),te("ard-slider-handle-grabbed",n.isSliderHandleGrabbed()),h("ngClass",n.ngClasses()),d(6),Ce(Me(23,Mp,n.trackOverlayLeft(),n.trackOverlayWidth())),d(),b(n.showValueTicks()?7:-1),d(),Ce(be(26,Et,n.handlePositionsPercent()[0])),te("ard-grabbed",n.isSliderHandleGrabbed()&&n.currentHandle()===1),h("tabindex",n.tabIndex()),d(4),b(n.tooltipBehavior()!=="never"?12:-1),d(),Ce(be(28,Et,n.handlePositionsPercent()[1])),te("ard-grabbed",n.isSliderHandleGrabbed()&&n.currentHandle()===2),h("tabindex",n.tabIndex()),d(4),b(n.tooltipBehavior()!=="never"?17:-1),d(),b(n.labelObjects().length>0?18:-1))},dependencies:[Ge,Ne],styles:[`@layer ard-ui{body.ard-prevent-touch-actions,body.ard-prevent-touch-actions *{touch-action:none}ard-range-slider{display:block}.ard-range-slider-container-master{display:flex;flex-direction:column}.ard-range-slider-container-master.ard-labels-top{flex-direction:column-reverse}.ard-range-slider-container-master .ard-slider-tooltip-wrapper{position:absolute;transform:translate(-50%);pointer-events:none}.ard-range-slider-container-master.ard-tooltip-top .ard-slider-tooltip-wrapper{bottom:100%}.ard-range-slider-container-master.ard-tooltip-bottom .ard-slider-tooltip-wrapper{top:100%}.ard-range-slider-container-master .ard-slider-handle{position:absolute;left:0;transform:translate(-50%)}.ard-range-slider-container-master .ard-slider-tooltip,.ard-range-slider-container-master .ard-slider-track,.ard-range-slider-container-master .ard-value-tick-container{position:relative}.ard-range-slider-container-master .ard-value-tick{position:absolute}.ard-range-slider-container-master .ard-slider-label-container{position:relative;width:100%;height:1em}.ard-range-slider-container-master .ard-slider-label{position:absolute;line-height:1em}}
`],encapsulation:2,changeDetection:0})}}return t})(),ar=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J]})}}return t})(),Ii=(()=>{class t extends ll{constructor(e){super(e),this.componentId="105",this.componentName="slider";this._value=T(0);this._tooltipValue=x(()=>{let i=this._value(),n=this.tooltipFormatFn();return String(n?.(i)??i)}),this.tooltipContext=x(()=>({value:this._tooltipValue(),$implicit:this._tooltipValue()})),this._handlePositions=x(()=>{let i=Math.abs(this.min()-this.max()),n=(this._value()-this.min())/i;return[n,n]})}writeValue(e){if(e=Number(e),isNaN(e)){this.reset();return}e=this._clampValue(e),this._value.set(e)}cleanupValueAfterMinMaxStepChange(){let e=this._value();this.writeValue(this._value());let i=this._value();e!==i&&this._emitChange()}reset(){this._value.set(0)}increment(e=1){this._offset(e,!1)}decrement(e=1){this._offset(-e,!1)}onTrackHitboxPointerDown(e){this.disabled()||this.readonly()||(this._writeValueFromEvent(e),this.onPointerDownOnHandle(e))}onPointerMove(e){this.disabled()||this.readonly()||this._shouldCheckForMovement&&this._writeValueFromEvent(e)}_percentValueToValue(e){let i=Math.abs(this.min()-this.max()),n=e*i+this.min();return(0,Dt.roundToPrecision)(n,9)}static{this.\u0275fac=function(i){return new(i||t)(ie(dl))}}static{this.\u0275cmp=u({type:t,selectors:[["ard-slider"]],hostBindings:function(i,n){i&1&&_("mousemove",function(c){return n.onPointerMove(c)},!1,qe)("touchmove",function(c){return n.onPointerMove(c)},!1,qe)},standalone:!1,features:[rt([{provide:Ci,useExisting:fi(()=>t),multi:!0}]),fe],decls:14,vars:21,consts:[["track",""],["focusableElement",""],["defaultTooltipTemplate",""],[1,"ard-slider-container-master",3,"ngClass"],[1,"ard-slider-container"],[1,"ard-slider-track",3,"pointerdown"],[1,"ard-hitbox"],[1,"ard-slider-track-overlay","ard-slider-track-inactive"],[1,"ard-slider-track-overlay","ard-slider-track-active"],[1,"ard-value-tick-container"],["type","button",1,"ard-slider-handle",3,"pointerdown","touchstart","focus","blur","tabindex"],[1,"ard-focus-overlay"],[1,"ard-slider-tooltip-wrapper",3,"ard-tooltip-always","style"],[1,"ard-slider-label-container"],[1,"ard-value-tick",3,"style"],[1,"ard-value-tick"],[1,"ard-slider-tooltip-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ard-slider-tooltip"],[1,"ard-slider-label",3,"style"],[1,"ard-slider-label"]],template:function(i,n){if(i&1){let l=Y();o(0,"div",3)(1,"div",4)(2,"div",5,0),_("pointerdown",function(p){return D(l),E(n.onTrackHitboxPointerDown(p))}),y(4,"div",6)(5,"div",7)(6,"div",8),g(7,$p,3,0,"div",9),a(),o(8,"button",10,1),_("pointerdown",function(p){return D(l),E(n.onPointerDownOnHandle(p))})("touchstart",function(p){return D(l),E(n.onPointerDownOnHandle(p))})("focus",function(p){return D(l),E(n.onFocus(p))})("blur",function(p){return D(l),E(n.onBlur(p))}),y(10,"div",11)(11,"div",6),a(),g(12,Kp,4,8,"div",12),a(),g(13,Gp,3,0,"div",13),a()}i&2&&(Ce(be(15,Ws,n.sliderTransition())),te("ard-slider-handle-grabbed",n.isSliderHandleGrabbed()),h("ngClass",n.ngClasses()),d(6),Ce(be(17,jp,n.handlePositionsPercent()[0])),d(),b(n.showValueTicks()?7:-1),d(),Ce(be(19,Et,n.handlePositionsPercent()[0])),te("ard-grabbed",n.isSliderHandleGrabbed()),h("tabindex",n.tabIndex()),d(4),b(n.tooltipBehavior()!=="never"?12:-1),d(),b(n.labelObjects().length>0?13:-1))},dependencies:[Ge,Ne],styles:[`@layer ard-ui{body.ard-prevent-touch-actions,body.ard-prevent-touch-actions *{touch-action:none}ard-slider{display:block}.ard-slider-container-master{display:flex;flex-direction:column}.ard-slider-container-master.ard-labels-top{flex-direction:column-reverse}.ard-slider-container-master .ard-slider-tooltip-wrapper{position:absolute;transform:translate(-50%);pointer-events:none}.ard-slider-container-master.ard-tooltip-top .ard-slider-tooltip-wrapper{bottom:100%}.ard-slider-container-master.ard-tooltip-bottom .ard-slider-tooltip-wrapper{top:100%}.ard-slider-container-master .ard-slider-handle{position:absolute;left:0;transform:translate(-50%)}.ard-slider-container-master .ard-slider-tooltip,.ard-slider-container-master .ard-slider-track,.ard-slider-container-master .ard-value-tick-container{position:relative}.ard-slider-container-master .ard-value-tick{position:absolute}.ard-slider-container-master .ard-slider-label-container{position:relative;width:100%;height:1em}.ard-slider-container-master .ard-slider-label{position:absolute;line-height:1em}.ard-disabled .ard-slider-container-master,.ard-disabled .ard-range-slider-container-master{pointer-events:none;opacity:60%}}
`],encapsulation:2,changeDetection:0})}}return t})(),ki=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J,ns]})}}return t})(),nf={None:"none",Half:"half",Filled:"filled"},or=z(S({},Ot),{Gold:"gold"}),rf=z(S({},gt),{color:or.Gold,max:5}),rx=new R("ard-rating-input-defaults",{factory:()=>S({},rf)});var af={Noop:"noop",Default:"default"},of=z(S({},tr),{clickStrategy:af.Default,color:or.Gold}),ax=new R("ard-star-button-defaults",{factory:()=>S({},of)});var sf={color:or.Gold,filled:nf.None},ox=new R("ard-star-defaults",{factory:()=>S({},sf)});var lf={LeftClumped:"left-clumped",LeftSplit:"left-split",RightSplit:"right-split",RightClumped:"right-clumped"},df=z(S({},Zn),{valueFrom:"value",labelFrom:"label",disabledFrom:"disabled",compareWith:null,invertDisabled:!1,maxSelectedItems:1/0,color:Ie.Primary,align:lf.LeftClumped,compact:!1}),sx=new R("ard-checkbox-list-defaults",{factory:()=>S({},df)});var cf={Small:"small",Medium:"medium",Large:"large"},uf={AboveBefore:"above-before",AboveAfter:"above-after",BelowBefore:"below-before",BelowAfter:"below-after",Before:"before",After:"after",Above:"above",Below:"below"},pf={color:Ie.Primary,variant:Ue.Rounded,size:cf.Medium,position:uf.AboveAfter,overlap:!1},lx=new R("ard-badge-defaults",{factory:()=>S({},pf)});var mf={Default:"default",Auto:"auto"};var hf={Sharp:"sharp",Pill:"pill"},cl={Determinate:"determinate",Indeterminate:"indeterminate",Buffer:"buffer",Query:"query"},ff={value:0,bufferValue:0,color:Ot.Primary,variant:hf.Pill,size:mf.Default,mode:cl.Determinate,hideValue:!1},dx=new R("ard-progress-bar-defaults",{factory:()=>S({},ff)});var gf={Transparent:"transparent",Colorless:"colorless",Colored:"colored"},_f={Full:"full",Ring:"ring"},vf={value:0,max:100,color:Ot.Primary,appearance:gf.Transparent,variant:_f.Full,hideValue:!1,reverse:!1},cx=new R("ard-progress-circle-defaults",{factory:()=>S({},vf)});var yf={color:Ot.Primary},Cf=new R("ard-spinner-defaults",{factory:()=>S({},yf)});var sr=(()=>{class t{constructor(){this._DEFAULTS=M(Cf);this.color=m(this._DEFAULTS.color),this.ngClasses=x(()=>[`ard-color-${this.color()}`].join(" "))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ard-spinner"]],inputs:{color:[1,"color"]},standalone:!1,decls:2,vars:1,consts:[["viewBox","0 0 100 100","xmlns","http://www.w3.org/2000/svg",1,"ard-spinner",3,"ngClass"],["cx","50","cy","50","r","20",1,"ard-spinner-circle"]],template:function(i,n){i&1&&($a(),o(0,"svg",0),y(1,"circle",1),a()),i&2&&h("ngClass",n.ngClasses())},dependencies:[Ge],styles:[`@layer ard-ui{ard-spinner{display:block}.ard-spinner{animation:rotator var(--ard-_spinner-duration) linear infinite;pointer-events:none}.ard-spinner-circle{stroke-dasharray:1,200;stroke-dashoffset:0;animation:dash var(--ard-_spinner-duration) ease-in-out infinite 0s;stroke-linecap:round;fill:none;stroke-width:3}}@keyframes rotator{to{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:75,200;stroke-dashoffset:-35}to{stroke-dasharray:75,200;stroke-dashoffset:-124}}
`],encapsulation:2,changeDetection:0})}}return t})(),lr=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J]})}}return t})(),bf={defaultHintAlign:Jn.Left,reserveHintLine:!1,labelRequiredText:"*",labelOptionalText:"(optional)",autoErrorOnlyFirstError:!0},va=new R("ard-form-field-defaults",{factory:()=>S({},bf)});var ul=new R("ard-error-map",{factory:()=>({$fallback:"Provide error messages using provideErrorMap"})});function pl(t){return{provide:ul,useValue:t}}var ca=(()=>{class t{constructor(){this.left=m(!1,{transform:e=>k(e)}),this.right=m(!1,{transform:e=>k(e)}),se(()=>{this.left()&&this.right()&&console.error("ARD-NF5140: Cannot align a form field error to both left and right.")})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=$({type:t,selectors:[["","ard-error",""]],hostVars:8,hostBindings:function(i,n){i&2&&te("ard-error",!0)("ard-error-default",!n.left()&&!n.right())("ard-error-left",n.left()&&!n.right())("ard-error-right",!n.left()&&n.right())},inputs:{left:[1,"left"],right:[1,"right"]}})}}return t})(),sn=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ard-error"]],standalone:!1,features:[zi([ca])],ngContentSelectors:Fe,decls:1,vars:0,template:function(i,n){i&1&&(j(),B(0))},encapsulation:2})}}return t})(),Wn=(()=>{class t{constructor(){this._errorMap=M(ul),this._DEFAULTS=M(va),this.control=m.required(),this.onlyFirstError=m(this._DEFAULTS.autoErrorOnlyFirstError,{transform:e=>k(e)}),this.errorMessages=T([],{equal:(e,i)=>e.length===i.length&&e.every((n,l)=>n===i[l])}),this.hasError=x(()=>this.errorMessages().length>0),this.left=m(!1,{transform:e=>k(e)}),this.right=m(!1,{transform:e=>k(e)}),se(()=>{let e=this.control();this._eventsSub=e.events.pipe(hi(new Sn(!0,e)),ct(i=>"touched"in i||"status"in i),Be(()=>{let i=e.errors;if(!i||!e.touched)return[];if(typeof i=="object"&&Object.keys(i).length===0)return[];let n=this.onlyFirstError(),l=[];for(let c in this._errorMap)if(c in i){let p=this._errorMap[c];if(typeof p=="function"){let w=p(i[c]);if(n)return[w];l.push(w)}else if(p!==void 0){if(n)return[p];l.push(p)}}return l.length===0?[this._errorMap.$fallback||JSON.stringify(i)]:l})).subscribe(i=>{this.errorMessages.set(i)})}),se(()=>{this.left()&&this.right()&&console.error("ARD-NF5150: Cannot align a form field auto-error to both left and right.")})}ngOnDestroy(){this._eventsSub?.unsubscribe()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ard-auto-error"]],hostVars:12,hostBindings:function(i,n){i&2&&te("ard-auto-error",!0)("ard-auto-error-default",!n.left()&&!n.right())("ard-auto-error-left",n.left()&&!n.right())("ard-auto-error-right",!n.left()&&n.right())("ard-auto-error__no-errors",n.errorMessages().length===0)("ard-auto-error__has-errors",n.errorMessages().length>0)},inputs:{control:[1,"control"],onlyFirstError:[1,"onlyFirstError"],left:[1,"left"],right:[1,"right"]},standalone:!1,decls:2,vars:0,template:function(i,n){i&1&&H(0,Qp,2,1,"ard-error",null,Vt),i&2&&U(n.errorMessages())},dependencies:[sn],encapsulation:2})}}return t})();var ua=(()=>{class t{constructor(){this.left=m(!1,{transform:e=>k(e)}),this.right=m(!1,{transform:e=>k(e)}),se(()=>{this.left()&&this.right()&&console.error("ARD-NF5150: Cannot align a form field hint-error to both left and right.")})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=$({type:t,selectors:[["","ard-hint-error",""]],hostVars:18,hostBindings:function(i,n){i&2&&te("ard-hint-error",!0)("ard-hint",!0)("ard-error-default",!n.left()&&!n.right())("ard-error-left",n.left()&&!n.right())("ard-error-right",!n.left()&&n.right())("ard-error",!0)("ard-hint-default",!n.left()&&!n.right())("ard-hint-left",n.left()&&!n.right())("ard-hint-right",!n.left()&&n.right())},inputs:{left:[1,"left"],right:[1,"right"]}})}}return t})(),pa=(()=>{class t{constructor(){this.left=m(!1,{transform:e=>k(e)}),this.right=m(!1,{transform:e=>k(e)}),se(()=>{this.left()&&this.right()&&console.error("ARD-NF5130: Cannot align a form field hint to both left and right.")})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=$({type:t,selectors:[["","ard-hint",""]],hostVars:8,hostBindings:function(i,n){i&2&&te("ard-hint",!0)("ard-hint-default",!n.left()&&!n.right())("ard-hint-left",n.left()&&!n.right())("ard-hint-right",!n.left()&&n.right())},inputs:{left:[1,"left"],right:[1,"right"]}})}}return t})(),At=(()=>{class t{constructor(){this._DEFAULTS=M(va),this.required=m(!1,{transform:e=>k(e)}),this.optional=m(!1,{transform:e=>k(e)}),this.requiredText=m(this._DEFAULTS.labelRequiredText),this.optionalText=m(this._DEFAULTS.labelOptionalText),se(()=>{this.required()&&this.optional()&&console.error("ARD-NF5120: Cannot set a form field label to be both required and optional.")})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ard-label"]],hostVars:2,hostBindings:function(i,n){i&2&&te("ard-label",!0)},inputs:{required:[1,"required"],optional:[1,"optional"],requiredText:[1,"requiredText"],optionalText:[1,"optionalText"]},standalone:!1,ngContentSelectors:Fe,decls:5,vars:5,consts:[[1,"ard-label__text"],[1,"ard-label__required-optional-text"]],template:function(i,n){i&1&&(j(),o(0,"div",0),B(1),o(2,"span",1),g(3,Xp,1,1)(4,Zp,1,1),a()()),i&2&&(te("ard-label__required",n.required())("ard-label__optional",n.optional()),d(3),b(n.required()&&!n.optional()?3:n.optional()&&!n.required()?4:-1))},encapsulation:2})}}return t})(),xf=(()=>{class t{constructor(){this._DEFAULTS=M(va),this.defaultHintAlign=m(this._DEFAULTS.defaultHintAlign),this.alignHintToLeftByDefault=x(()=>this.defaultHintAlign()===Jn.Left),this.control=He(rn),this.label=He(At),this.hints=xt(pa),this.errors=xt(ca),this.autoErrors=xt(Wn),this.hintErrors=xt(ua),this.hasAnyHint=x(()=>this.hints().length>0||this.hintErrors().length>0),this.hasAnyError=x(()=>this.errors().length>0||this.autoErrors().length>0&&this.autoErrors().some(e=>e.hasError())),this.reserveHintLine=m(this._DEFAULTS.reserveHintLine,{transform:e=>k(e)})}get controlHasError(){let e=this.control()?.hasError;return mt(e)?e():e}get controlIsSuccess(){let e=this.control()?.isSuccess;return mt(e)?e():e}get controlDisabled(){let e=this.control()?.disabled;return mt(e)?e():e}get controlHtmlId(){let e=this.control()?.htmlId;return mt(e)?e():e}ngOnInit(){if(!this.control())throw new Error("ARD-FT5110: Form field component requires any control (input) to be present within the element. Found none.")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=$({type:t,contentQueries:function(i,n,l){i&1&&(pe(l,n.control,rn,5),pe(l,n.label,At,5),pe(l,n.hints,pa,4),pe(l,n.errors,ca,4),pe(l,n.autoErrors,Wn,4),pe(l,n.hintErrors,ua,4)),i&2&&ce(6)},inputs:{defaultHintAlign:[1,"defaultHintAlign"],reserveHintLine:[1,"reserveHintLine"]}})}}return t})(),Qt=(()=>{class t extends xf{static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=tt(t)))(n||t)}})()}static{this.\u0275cmp=u({type:t,selectors:[["ard-form-field"]],standalone:!1,features:[fe],ngContentSelectors:em,decls:20,vars:14,consts:[["defaultHints",""],["defaultErrors",""],["defaultAutoErrors",""],["defaultHintErrors",""],["leftHintErrors",""],["rightHintErrors",""],[1,"ard-form-field"],[1,"ard-form-field__label"],[1,"ard-form-field__input"],[1,"ard-form-field__hints"],[1,"ard-form-field__errors-left"],[1,"ard-form-field__default-error"],[3,"ngTemplateOutlet"],[1,"ard-form-field__errors-right"],[1,"ard-form-field__hints-left"],[1,"ard-form-field__default-hint"],[1,"ard-form-field__hints-right"]],template:function(i,n){i&1&&(j(Jp),o(0,"div",6)(1,"label",7),B(2),a(),o(3,"div",8),B(4,1),a(),o(5,"div",9),g(6,um,8,4)(7,Cm,8,4),a()(),g(8,bm,1,0,"ng-template",null,0,oe)(10,xm,1,0,"ng-template",null,1,oe)(12,wm,1,0,"ng-template",null,2,oe)(14,Sm,1,0,"ng-template",null,3,oe)(16,Tm,1,0,"ng-template",null,4,oe)(18,Dm,1,0,"ng-template",null,5,oe)),i&2&&(te("ard-form-field__with-error",n.controlHasError)("ard-form-field__is-success",n.controlIsSuccess)("ard-form-field__control-disabled",n.controlDisabled),d(),nt("for",n.controlHtmlId),d(4),te("ard-form-field__errors",n.hasAnyError())("ard-form-field__reserve-hint-line",n.reserveHintLine()||n.hasAnyHint())("ard-form-field__hints-default-left",n.alignHintToLeftByDefault()),d(),b(n.hasAnyError()?6:7))},dependencies:[Ne],styles:[`@layer ard-ui{ard-form-field,ard-horizontal-form-field{display:block}ard-label,ard-hint,ard-error,ard-auto-error,ard-hint-error{display:block}.ard-horizontal-form-field{display:flex}.ard-form-field__hints,.ard-form-field__errors{display:flex;justify-content:space-between}.ard-form-field__hints>*,.ard-form-field__errors>*{display:flex;flex-direction:column}.ard-form-field__hints .ard-form-field__hints-left .ard-form-field__default-hint,.ard-form-field__hints .ard-form-field__errors-left .ard-form-field__default-error,.ard-form-field__errors .ard-form-field__hints-left .ard-form-field__default-hint,.ard-form-field__errors .ard-form-field__errors-left .ard-form-field__default-error{display:none}.ard-form-field__hints.ard-form-field__hints-default-left .ard-form-field__hints-left .ard-form-field__default-hint,.ard-form-field__hints.ard-form-field__hints-default-left .ard-form-field__errors-left .ard-form-field__default-error,.ard-form-field__errors.ard-form-field__hints-default-left .ard-form-field__hints-left .ard-form-field__default-hint,.ard-form-field__errors.ard-form-field__hints-default-left .ard-form-field__errors-left .ard-form-field__default-error{display:flex;flex-direction:column}.ard-form-field__hints.ard-form-field__hints-default-left .ard-form-field__hints-right .ard-form-field__default-hint,.ard-form-field__hints.ard-form-field__hints-default-left .ard-form-field__errors-right .ard-form-field__default-error,.ard-form-field__errors.ard-form-field__hints-default-left .ard-form-field__hints-right .ard-form-field__default-hint,.ard-form-field__errors.ard-form-field__hints-default-left .ard-form-field__errors-right .ard-form-field__default-error,.ard-auto-error__no-errors{display:none}}
`],encapsulation:2,changeDetection:0})}}return t})(),ml=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ard-hint-error"]],standalone:!1,features:[zi([{directive:ua,inputs:["left","left","right","right"]}])],ngContentSelectors:Fe,decls:1,vars:0,template:function(i,n){i&1&&(j(),B(0))},encapsulation:2})}}return t})(),hl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ard-hint"]],standalone:!1,features:[zi([{directive:pa,inputs:["left","left","right","right"]}])],ngContentSelectors:Fe,decls:1,vars:0,template:function(i,n){i&1&&(j(),B(0))},encapsulation:2})}}return t})();var Xt=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J]})}}return t})(),wf={full:!1,appearance:je.Outlined},ya=new R("ard-kbd-defaults",{factory:()=>S({},wf)});var Sf=(()=>{class t{constructor(){this._DEFAULTS=M(ya)}transform(e,i=!this._DEFAULTS.full){return gs(e,i)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275pipe=xn({name:"kbd",type:t,pure:!0,standalone:!1})}}return t})(),lt=(()=>{class t{constructor(){this._DEFAULTS=M(ya),this.contentWrapper=Pe("contentWrapperEl"),this.key=m(""),this.full=m(!1,{transform:e=>k(e)});this.appearance=m(je.Filled),this.ngClasses=x(()=>[`ard-appearance-${this.appearance()}`].join(" "))}ngAfterViewInit(){if(!this.key()&&!this.contentWrapper().nativeElement.innerText)throw new Error("ARD-FT5030: Using <ard-kbd> without specifying the [key] field is not allowed.")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ard-kbd"]],viewQuery:function(i,n){i&1&&Ve(n.contentWrapper,ha,5),i&2&&ce()},inputs:{key:[1,"key"],full:[1,"full"],appearance:[1,"appearance"]},standalone:!1,ngContentSelectors:Fe,decls:6,vars:5,consts:[["contentWrapperEl",""],[1,"ard-kbd",3,"ngClass"],[1,"ard-kbd-content-wrapper"]],template:function(i,n){if(i&1&&(j(),o(0,"kbd",1),s(1),ut(2,"kbd"),a(),o(3,"div",2,0),B(5),a()),i&2){let l;h("ngClass",n.ngClasses()),d(),F(" ",qi(2,2,n.key()||((l=n.contentWrapper())==null||l.nativeElement==null?null:l.nativeElement.innerText)||"",!n.full()),`
`)}},dependencies:[Ge,Sf],styles:[`@layer ard-ui{.ard-kbd-content-wrapper{display:none}.ard-kbd{display:inline-block}}
`],encapsulation:2,changeDetection:0})}}return t})(),fl=(()=>{class t{constructor(){this.elementRef=M(ye),this.renderer=M(Ht);this.appearance=m(je.Filled,{alias:"ardKbdAppearance"}),this.ngClasses=x(()=>["ard-kbd",`ard-appearance-${this.appearance()}`]),se(()=>{let e=this.ngClasses();this.updateClasses(e)})}updateClasses(e){let i=this.elementRef.nativeElement;i.className.split(" ").filter(l=>l.startsWith("ard-appearance-")).forEach(l=>this.renderer.removeClass(i,l)),e.forEach(l=>{this.renderer.addClass(i,l)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=$({type:t,selectors:[["","ardKbd",""]],inputs:{appearance:[1,"ardKbdAppearance","appearance"]},standalone:!1})}}return t})(),Re=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J]})}}return t})(),Tf=new R("ard-kbd-shortcut-defaults",{factory:()=>({})});var Pi=(()=>{class t{constructor(){this._KBD_DEFAULTS=M(ya),this._DEFAULTS=M(Tf),this.contentWrapper=Pe("contentWrapperEl"),this.splitRegex=/[+, ]/,this.keys=m(void 0,{transform:e=>Bn(e,this.splitRegex)}),this.full=m(this._DEFAULTS.full??this._KBD_DEFAULTS.full,{transform:e=>k(e)});this.appearance=m(this._DEFAULTS.appearance??this._KBD_DEFAULTS.appearance),this.ngClasses=x(()=>[`ard-appearance-${this.appearance}`].join(" "))}ngAfterViewInit(){if(!this.keys()&&!this.contentWrapper()?.nativeElement.innerText)throw new Error("ARD-FT5040: Using <ard-kbd-shortcut> without specifying the [keys] field is not allowed.")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ard-kbd-shortcut"]],viewQuery:function(i,n){i&1&&Ve(n.contentWrapper,ha,5),i&2&&ce()},inputs:{keys:[1,"keys"],full:[1,"full"],appearance:[1,"appearance"]},standalone:!1,ngContentSelectors:Fe,decls:6,vars:1,consts:[["contentWrapperEl",""],[1,"ard-kbd-shortcut",3,"ngClass"],[1,"ard-kbd-shortcut-content-wrapper"],[3,"appearance","full","key"]],template:function(i,n){if(i&1&&(j(),o(0,"div",1),H(1,Am,2,4,null,null,Z),a(),o(3,"div",2,0),B(5),a()),i&2){let l;h("ngClass",n.ngClasses()),d(),U((l=n.keys())!==null&&l!==void 0?l:(l=n.contentWrapper())==null||l.nativeElement==null||l.nativeElement.innerText==null?null:l.nativeElement.innerText.split(n.splitRegex))}},dependencies:[Ge,lt],styles:[`@layer ard-ui{.ard-kbd-shortcut{display:inline-block}.ard-kbd-shortcut-content-wrapper{display:none}}
`],encapsulation:2,changeDetection:0})}}return t})(),Vi=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J,Re]})}}return t})(),Df={color:or.Gold,max:5,value:0},ux=new R("ard-rating-display-defaults",{factory:()=>S({},Df)});var Ef={Strong:"strong",Light:"light",Colorless:"colorless"},Af={Rounded:"rounded",Sharp:"sharp"},Ff={Noop:"noop",Slice:"slice"},Rs={TopLeft:"top-left",TopCenter:"top-center",TopRight:"top-right",CenterLeft:"center-left",Center:"center-center",CenterRight:"center-right",BottomLeft:"bottom-left",BottomCenter:"bottom-center",BottomRight:"bottom-right"};var gl={Left:"left",Center:"center",Right:"right",Split:"split"},Mf=z(S({},Kt),{options:[10,25,50],itemsPerPage:50,page:1,color:Ie.None,align:gl.Split,compact:!1,useFirstLastButtons:!1,itemsPerPageText:"Items per page:",currentItemsFormatFn:({currentItemsFrom:t,currentItemsTo:r,totalItems:e})=>`${t} \u2013 ${r} of ${e}`}),px=new R("ard-table-pagination-defaults",{factory:()=>S({},Mf)});var _l=z(S({},Kt),{rowDisabledFrom:"disabled",rowBoldFrom:"bold",invertRowDisabled:!1,invertRowBold:!1,selectableRows:!1,maxSelectedItems:void 0,clickableRows:!1,caption:void 0,isLoading:!1,loadingProgress:0,loadingProgressBuffer:0,loadingBarMode:cl.Determinate,loadingBarColor:Ie.Secondary,appearance:Ef.Strong,variant:Af.Rounded,color:Ie.Primary,align:Rs.CenterLeft,headerAlign:Rs.CenterLeft,compact:!1,zebra:!1,stickyHeader:!1,paginated:!1,paginationStrategy:Ff.Noop,paginationOptions:[10,25,50],totalItems:void 0,paginationColor:Ie.None,paginationAlign:gl.Split,itemsPerPageText:"Items per page:",currentItemsFormatFn:({currentItemsFrom:t,currentItemsTo:r,totalItems:e})=>`${t} \u2013 ${r} of ${e}`,pageFillRemaining:!1,paginationDisabled:!1,useFirstLastButtons:!1,itemsPerPage:50,page:1,treatDataSourceAsString:!1}),mx=new R("ard-table-defaults",{factory:()=>S({},_l)});var If=z(S({},_l),{separator:","}),hx=new R("ard-table-from-csv-defaults",{factory:()=>S({},If)});var kf={Outlined:"outlined",Raised:"raised"},Pf={Rounded:"rounded",Sharp:"sharp"},Vf={appearance:kf.Raised,variant:Pf.Rounded,actionButtonsAlign:er.Right},Of=new R("ard-card-defaults",{factory:()=>S({},Vf)});var vl=(()=>{class t{constructor(e,i){e.addClass(i.nativeElement,"ard-card-title")}static{this.\u0275fac=function(i){return new(i||t)(ie(Ht),ie(ye))}}static{this.\u0275dir=$({type:t,selectors:[["ard-card-title"],["","ard-card-title",""]],standalone:!1})}}return t})();var yl=(()=>{class t{constructor(e,i){e.addClass(i.nativeElement,"ard-card-content")}static{this.\u0275fac=function(i){return new(i||t)(ie(Ht),ie(ye))}}static{this.\u0275dir=$({type:t,selectors:[["ard-card-content"],["","ard-card-content",""]],standalone:!1})}}return t})(),Cl=(()=>{class t{constructor(e,i){e.addClass(i.nativeElement,"ard-card-image")}static{this.\u0275fac=function(i){return new(i||t)(ie(Ht),ie(ye))}}static{this.\u0275dir=$({type:t,selectors:[["","ard-card-image",""]],standalone:!1})}}return t})();var Rf=(()=>{class t{constructor(){this._DEFAULTS=M(Of);this.appearance=m(this._DEFAULTS.appearance),this.variant=m(this._DEFAULTS.variant),this.ngClasses=x(()=>["ard-card",`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`].join(" "))}get _ngClassesHostAttribute(){return this.ngClasses()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=$({type:t,selectors:[["","ard-card",""]],hostVars:2,hostBindings:function(i,n){i&2&&ge(n._ngClassesHostAttribute)},inputs:{appearance:[1,"appearance"],variant:[1,"variant"]},standalone:!1})}}return t})(),bl=(()=>{class t extends Rf{static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=tt(t)))(n||t)}})()}static{this.\u0275cmp=u({type:t,selectors:[["ard-card"]],standalone:!1,features:[fe],ngContentSelectors:Fe,decls:1,vars:0,template:function(i,n){i&1&&(j(),B(0))},encapsulation:2,changeDetection:0})}}return t})(),xl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J]})}}return t})(),Lf={Full:"full",Middle:"middle"},Bf={vertical:!1,variant:Lf.Full,flexItem:!1,textAlign:Qm.Center},Hf=new R("ard-divider-defaults",{factory:()=>S({},Bf)});var ln=(()=>{class t{constructor(){this._DEFAULTS=M(Hf),this.vertical=m(this._DEFAULTS.vertical,{transform:e=>k(e)}),this.flexItem=m(this._DEFAULTS.flexItem,{transform:e=>k(e)}),this.textAlign=m(this._DEFAULTS.textAlign),this.variant=m(this._DEFAULTS.variant),this.ngClasses=x(()=>["ard-divider",this.vertical()?"ard-divider__vertical":"ard-divider__horizontal",this.flexItem()?"ard-divider__flex-item":"",`ard-divider__text-align-${this.textAlign()}`,`ard-divider__${this.variant()}`].join(" "))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=$({type:t,selectors:[["","ard-divider",""]],hostAttrs:["role","separator"],hostVars:2,hostBindings:function(i,n){i&2&&ge(n.ngClasses())},inputs:{vertical:[1,"vertical"],flexItem:[1,"flexItem"],textAlign:[1,"textAlign"],variant:[1,"variant"]},standalone:!1})}}return t})(),Uf=(()=>{class t extends ln{static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=tt(t)))(n||t)}})()}static{this.\u0275dir=$({type:t,hostAttrs:["role","separator"],hostVars:2,hostBindings:function(i,n){i&2&&ge(n.ngClasses())},features:[fe]})}}return t})(),Mt=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ard-divider"]],standalone:!1,features:[zi([{directive:Uf,inputs:["vertical","vertical","flexItem","flexItem","textAlign","textAlign","variant","variant"]}])],ngContentSelectors:Fe,decls:1,vars:0,template:function(i,n){i&1&&(j(),B(0))},styles:[`@layer ard-ui{ard-divider{display:block}}
`],encapsulation:2,changeDetection:0})}}return t})(),et=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J]})}}return t})(),wl={xs:"0rem",sm:"36rem",md:"48rem",lg:"64rem",xl:"80rem","2xl":"96rem"},Sl=new R("ard-breakpoints",{factory:()=>Tl(wl)});function fx(t){return[{provide:Sl,useValue:Tl(S(S({},wl),t??{}))},Ca]}function Tl(t){let r=new Map,e=null,i=Object.entries(t).map(n=>{let[l,c]=n;if(c===void 0)return null;let[,p,w]=c.match(/(\d+)(\w+)/)||[],L=Number(p);if(isNaN(L)||!w)return console.warn(`ARD-WA-G00: Invalid breakpoint format for ${l}: ${c}`),null;if(!e)e=w;else if(w!==e)return console.warn(`ARD-WA-G01: All breakpoints must use the same unit. Expected "${e}" but got "${w}" for breakpoint "${l}"`),null;return L<0?(console.warn(`ARD-WA-G02: Breakpoint values must be non-negative. Invalid value for ${l}: ${c}`),null):[l,{amount:L,unit:w}]}).filter(n=>n!==null).sort((n,l)=>n[1].amount-l[1].amount);for(let n=0;n<i.length;n++){let[l,{amount:c,unit:p}]=i[n],w=`(min-width: ${c}${p})`,L=i[n+1];if(!L){r.set(w,l);continue}let[,{amount:I,unit:G}]=L,A=`(max-width: ${I-.01}${G})`,P=n===i.length-1?w:`${w} and ${A}`;r.set(P,l)}return r}var Ca=(()=>{class t{constructor(){this._destroyed=new Le,this.breakpointMap=M(Sl),this.breakpoints=Array.from(this.breakpointMap.values()),this.currentBreakpoint=T(null),M(Nn).observe(Array.from(this.breakpointMap.keys())).pipe(ii(this._destroyed)).subscribe(e=>{for(let i of Object.keys(e.breakpoints))e.breakpoints[i]&&this.currentBreakpoint.set(this.breakpointMap.get(i))})}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac})}}return t})();function dn(t,r,e,i,n){if(Fr(t)){let c={};for(let[p,w]of Object.entries(t))c[p]=n?.(w)??w;return Wt(c,r,e)}let l=Bn(t," ").map(c=>{let[p,w]=c.split(":"),L=w!==void 0?w.trim():p.trim();return{breakpoint:w!==void 0?p.trim():"xs",rawValue:L,value:i(L)}}).filter(c=>r.includes(c.breakpoint)?c.value===void 0||c.value===null||c.value===""||Tt(c.value)&&isNaN(c.value)?(console.warn(`ARD-WA${e}1: Invalid value for breakpoint "${c.breakpoint}". This entry will be ignored.`),!1):!0:(console.warn(`ARD-WA${e}0: Unknown breakpoint "${c.breakpoint}:${c.value}". This entry will be ignored.`),!1)).reduce((c,p)=>(c[p.breakpoint]&&console.warn(`ARD-WA${e}2: Duplicate value for breakpoint "${p.breakpoint}". The value "${p.rawValue}" will overwrite the previous value "${c[p.breakpoint]}".`),c[p.breakpoint]=p.value,c),{});return Wt(l,r,e)}function Wt(t,r,e){let i={},n;for(let l of r){if(t[l]!==void 0){i[l]=t[l],n=t[l];continue}if(n!==void 0){i[l]=n;continue}throw new Error(`ARD-FT${e}3: Missing value for breakpoint "${l}" and no smaller breakpoint to inherit from.`)}return i}function Ls(t,r,e){return typeof t=="number"?Wt({xs:t},r,e):dn(t,r,e,Ae)}function Bs(t,r,e){return typeof t=="number"||Us(t)?Wt({xs:t},r,e):dn(t,r,e,i=>Us(i)?i:Ae(i))}function Hs(t,r,e){return typeof t=="boolean"?Wt({xs:t},r,e):t===""||t==="true"?Wt({xs:!0},r,e):dn(t,r,e,i=>i==="true")}function ft(t,r,e){return Si(t)?t:(Tt(t)&&Wt({xs:t},r,e),dn(t,r,e,i=>{let n=Ae(i,NaN);return isNaN(n)?i:`calc(var(--ard-grid-spacing-unit) * ${n})`},i=>typeof i=="number"?`calc(var(--ard-grid-spacing-unit) * ${i})`:i))}function Xe(t,r,e,i){return i(t)?Wt({xs:t},r,e):dn(t,r,e,n=>i(n)?n:void 0)}var Dl={Grow:"grow",Auto:"auto"},Nf=new Set(Object.values(Dl));function Us(t){return Nf.has(t)}var ba={Start:"flex-start",End:"flex-end",Center:"center",SpaceBetween:"space-between",SpaceAround:"space-around",SpaceEvenly:"space-evenly"},jf=new Set(Object.values(ba));function Kn(t){return jf.has(t)}var xa={Start:"flex-start",End:"flex-end",Center:"center"},Yf=new Set(Object.values(xa));function qn(t){return Yf.has(t)}var wa={Wrap:"wrap",NoWrap:"nowrap",WrapReverse:"wrap-reverse"},$f=new Set(Object.values(wa));function Gn(t){return $f.has(t)}var El={Row:"row",RowReverse:"row-reverse",Column:"column",ColumnReverse:"column-reverse"},zf=new Set(Object.values(El));function Ns(t){return zf.has(t)}var Wf={columns:12,size:Dl.Grow,reverse:!1,justifyContent:ba.Start,alignItems:xa.Start,spacing:3,columnSpacing:null,rowSpacing:null,wrap:wa.Wrap},Kf=new R("ard-grid-defaults",{factory:()=>S({},Wf)});var Ye=(()=>{class t{constructor(){this._componentId="601",this._DEFAULTS=M(Kf),this._breakpointService=M(Ca),this._wasContentInitialized=!1;this.container=m(!1,{transform:e=>k(e)});this.columns=m(Ls(this._DEFAULTS.columns,this._breakpointService.breakpoints,this._componentId),{transform:e=>Ls(e,this._breakpointService.breakpoints,this._componentId)}),this.size=m(Bs(this._DEFAULTS.size,this._breakpointService.breakpoints,this._componentId),{transform:e=>Bs(e,this._breakpointService.breakpoints,this._componentId)}),this.reverse=m(Hs(this._DEFAULTS.reverse,this._breakpointService.breakpoints,this._componentId),{transform:e=>Hs(e,this._breakpointService.breakpoints,this._componentId)}),this.justifyContent=m(Xe(this._DEFAULTS.justifyContent,this._breakpointService.breakpoints,this._componentId,Kn),{transform:e=>Xe(e,this._breakpointService.breakpoints,this._componentId,Kn)}),this.alignItems=m(Xe(this._DEFAULTS.alignItems,this._breakpointService.breakpoints,this._componentId,qn),{transform:e=>Xe(e,this._breakpointService.breakpoints,this._componentId,qn)}),this.spacing=m(ft(this._DEFAULTS.spacing,this._breakpointService.breakpoints,this._componentId),{transform:e=>ft(e,this._breakpointService.breakpoints,this._componentId)}),this.columnSpacing=m(ft(this._DEFAULTS.columnSpacing,this._breakpointService.breakpoints,this._componentId),{transform:e=>ft(e,this._breakpointService.breakpoints,this._componentId)}),this.rowSpacing=m(ft(this._DEFAULTS.rowSpacing,this._breakpointService.breakpoints,this._componentId),{transform:e=>ft(e,this._breakpointService.breakpoints,this._componentId)}),this.wrap=m(Xe(this._DEFAULTS.wrap,this._breakpointService.breakpoints,this._componentId,Gn),{transform:e=>Xe(e,this._breakpointService.breakpoints,this._componentId,Gn)});this.inheritedColumns=T(null),this.inheritedReverse=T(null),this.inheritedJustifyContent=T(null),this.inheritedAlignItems=T(null),this.inheritedColumnSpacing=T(null),this.inheritedRowSpacing=T(null),this.inheritedWrap=T(null),this.wasColumnsChanged=T(!1),this.wasReverseChanged=T(!1),this.wasJustifyContentChanged=T(!1),this.wasAlignItemsChanged=T(!1),this.wasColumnSpacingChanged=T(!1),this.wasRowSpacingChanged=T(!1),this.wasWrapChanged=T(!1);this.columnsOrInherited=x(()=>this.wasColumnsChanged()?this.columns():this.inheritedColumns()??this.columns()),this.reverseOrInherited=x(()=>this.wasReverseChanged()?this.reverse():this.inheritedReverse()??this.reverse()),this.justifyContentOrInherited=x(()=>this.wasJustifyContentChanged()?this.justifyContent():this.inheritedJustifyContent()??this.justifyContent()),this.alignItemsOrInherited=x(()=>this.wasAlignItemsChanged()?this.alignItems():this.inheritedAlignItems()??this.alignItems()),this.columnSpacingOrInherited=x(()=>this.wasColumnSpacingChanged()?this.columnSpacing():this.inheritedColumnSpacing()??this.columnSpacing()),this.rowSpacingOrInherited=x(()=>this.wasRowSpacingChanged()?this.rowSpacing():this.inheritedRowSpacing()??this.rowSpacing()),this.wrapOrInherited=x(()=>this.wasWrapChanged()?this.wrap():this.inheritedWrap()??this.wrap());this.finalColumnSpacing=x(()=>this.columnSpacingOrInherited()??this.spacing()),this.finalRowSpacing=x(()=>this.rowSpacingOrInherited()??this.spacing());this.currentColumns=x(()=>this.columnsOrInherited()[this._breakpointService.currentBreakpoint()??"xs"]),this.currentSize=x(()=>this.size()[this._breakpointService.currentBreakpoint()??"xs"]),this.currentReverse=x(()=>this.reverseOrInherited()[this._breakpointService.currentBreakpoint()??"xs"]),this.currentJustifyContent=x(()=>this.justifyContentOrInherited()[this._breakpointService.currentBreakpoint()??"xs"]),this.currentAlignItems=x(()=>this.alignItemsOrInherited()[this._breakpointService.currentBreakpoint()??"xs"]),this.currentColumnSpacing=x(()=>this.finalColumnSpacing()[this._breakpointService.currentBreakpoint()??"xs"]),this.currentRowSpacing=x(()=>this.finalRowSpacing()[this._breakpointService.currentBreakpoint()??"xs"]),this.currentWrap=x(()=>this.wrapOrInherited()[this._breakpointService.currentBreakpoint()??"xs"]),this.currentInheritedColumns=x(()=>this.inheritedColumns()?.[this._breakpointService.currentBreakpoint()??"xs"]),this.currentInheritedColumnSpacing=x(()=>this.inheritedColumnSpacing()?.[this._breakpointService.currentBreakpoint()??"xs"]),this.currentInheritedRowSpacing=x(()=>this.inheritedRowSpacing()?.[this._breakpointService.currentBreakpoint()??"xs"]),this.currentStyle=x(()=>[this.currentSize()?`--ard-_grid-size: ${this.currentSize()}`:"",this.currentInheritedColumns()?`--ard-_grid-parent-columns: ${this.currentInheritedColumns()}`:"",this.currentInheritedColumnSpacing()?`--ard-_grid-parent-column-spacing: ${this.currentInheritedColumnSpacing()}`:"",this.currentInheritedRowSpacing()?`--ard-_grid-parent-row-spacing: ${this.currentInheritedRowSpacing()}`:"",this.container()?`--ard-_grid-columns: ${this.currentColumns()}`:"",this.container()?`--ard-_grid-direction: ${this.currentReverse()?"row-reverse":"row"}`:"",this.container()?`--ard-_grid-justify-content: ${this.currentJustifyContent()}`:"",this.container()?`--ard-_grid-align-items: ${this.currentAlignItems()}`:"",this.container()?`--ard-_grid-column-spacing: ${this.currentColumnSpacing()}`:"",this.container()?`--ard-_grid-row-spacing: ${this.currentRowSpacing()}`:"",this.container()?`--ard-_grid-wrap: ${this.currentWrap()}`:""].filter(Boolean).join(";"));this.children=xt(t),se(()=>{this._updateChildrenStyles()})}ngAfterContentInit(){this._wasContentInitialized=!0,this._updateChildrenStyles()}ngOnChanges(e){e.columns&&this.wasColumnsChanged.set(!0),e.reverse&&this.wasReverseChanged.set(!0),e.justifyContent&&this.wasJustifyContentChanged.set(!0),e.alignItems&&this.wasAlignItemsChanged.set(!0),e.columnSpacing&&this.wasColumnSpacingChanged.set(!0),e.rowSpacing&&this.wasRowSpacingChanged.set(!0),e.wrap&&this.wasWrapChanged.set(!0)}_updateChildrenStyles(){let e=this.children(),i=this.columnsOrInherited(),n=this.reverseOrInherited(),l=this.justifyContentOrInherited(),c=this.alignItemsOrInherited(),p=this.finalColumnSpacing(),w=this.finalRowSpacing(),L=this.wrapOrInherited();if(this._wasContentInitialized)for(let I of e)I.inheritedColumns.set(i),I.inheritedReverse.set(n),I.inheritedJustifyContent.set(l),I.inheritedAlignItems.set(c),I.inheritedColumnSpacing.set(p),I.inheritedRowSpacing.set(w),I.inheritedWrap.set(L)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ard-grid"]],contentQueries:function(i,n,l){i&1&&pe(l,n.children,t,4),i&2&&ce()},hostAttrs:[1,"ard-grid"],hostVars:10,hostBindings:function(i,n){i&2&&(Ce(n.currentStyle()),te("ard-grid__container",n.container())("ard-grid__item",!n.container())("ard-grid__item-grow",!n.container()&&n.currentSize()==="grow")("ard-grid__item-auto",!n.container()&&n.currentSize()==="auto"))},inputs:{container:[1,"container"],columns:[1,"columns"],size:[1,"size"],reverse:[1,"reverse"],justifyContent:[1,"justifyContent"],alignItems:[1,"alignItems"],spacing:[1,"spacing"],columnSpacing:[1,"columnSpacing"],rowSpacing:[1,"rowSpacing"],wrap:[1,"wrap"]},standalone:!1,features:[St],ngContentSelectors:Fe,decls:1,vars:0,template:function(i,n){i&1&&(j(),B(0))},styles:[`@layer ard-ui{.ard-grid{display:block;box-sizing:border-box;min-width:0px}.ard-grid__container{display:flex;flex-direction:var(--ard-_grid-direction, row);flex-wrap:var(--ard-_grid-wrap, wrap);row-gap:var(--ard-_grid-row-spacing, 0px);column-gap:var(--ard-_grid-column-spacing, 0px);justify-content:var(--ard-_grid-justify-content, flex-start);align-items:var(--ard-_grid-align-items, flex-start)}.ard-grid__container>.ard-grid{flex-grow:0;flex-basis:auto;max-width:100%;width:calc(100% * var(--ard-_grid-size) / var(--ard-_grid-parent-columns) - (var(--ard-_grid-parent-columns) - var(--ard-_grid-size)) * var(--ard-_grid-parent-column-spacing) / var(--ard-_grid-parent-columns))}.ard-grid__container>.ard-grid.ard-grid__item-grow{flex-grow:1;width:auto}.ard-grid__container>.ard-grid.ard-grid__item-auto{width:auto}}
`],encapsulation:2,changeDetection:0})}}return t})(),$e=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({})}}return t})(),qf={direction:El.Column,justifyContent:ba.Start,alignItems:xa.Start,spacing:3,columnSpacing:null,rowSpacing:null,wrap:wa.Wrap},Gf=new R("ard-stack-defaults",{factory:()=>S({},qf)});var Oi=(()=>{class t{constructor(){this._componentId="602",this._DEFAULTS=M(Gf),this._breakpointService=M(Ca);this.direction=m(Xe(this._DEFAULTS.direction,this._breakpointService.breakpoints,this._componentId,Ns),{transform:e=>Xe(e,this._breakpointService.breakpoints,this._componentId,Ns)}),this.justifyContent=m(Xe(this._DEFAULTS.justifyContent,this._breakpointService.breakpoints,this._componentId,Kn),{transform:e=>Xe(e,this._breakpointService.breakpoints,this._componentId,Kn)}),this.alignItems=m(Xe(this._DEFAULTS.alignItems,this._breakpointService.breakpoints,this._componentId,qn),{transform:e=>Xe(e,this._breakpointService.breakpoints,this._componentId,qn)}),this.spacing=m(ft(this._DEFAULTS.spacing,this._breakpointService.breakpoints,this._componentId),{transform:e=>ft(e,this._breakpointService.breakpoints,this._componentId)}),this.columnSpacing=m(ft(this._DEFAULTS.columnSpacing,this._breakpointService.breakpoints,this._componentId),{transform:e=>ft(e,this._breakpointService.breakpoints,this._componentId)}),this.rowSpacing=m(ft(this._DEFAULTS.rowSpacing,this._breakpointService.breakpoints,this._componentId),{transform:e=>ft(e,this._breakpointService.breakpoints,this._componentId)}),this.wrap=m(Xe(this._DEFAULTS.wrap,this._breakpointService.breakpoints,this._componentId,Gn),{transform:e=>Xe(e,this._breakpointService.breakpoints,this._componentId,Gn)});this.finalColumnSpacing=x(()=>this.columnSpacing()??this.spacing()),this.finalRowSpacing=x(()=>this.rowSpacing()??this.spacing());this.currentDirection=x(()=>this.direction()[this._breakpointService.currentBreakpoint()??"xs"]),this.currentJustifyContent=x(()=>this.justifyContent()[this._breakpointService.currentBreakpoint()??"xs"]),this.currentAlignItems=x(()=>this.alignItems()[this._breakpointService.currentBreakpoint()??"xs"]),this.currentColumnSpacing=x(()=>this.finalColumnSpacing()[this._breakpointService.currentBreakpoint()??"xs"]),this.currentRowSpacing=x(()=>this.finalRowSpacing()[this._breakpointService.currentBreakpoint()??"xs"]),this.currentWrap=x(()=>this.wrap()[this._breakpointService.currentBreakpoint()??"xs"]),this.currentStyle=x(()=>[`--ard-_stack-direction: ${this.currentDirection()}`,`--ard-_stack-justify-content: ${this.currentJustifyContent()}`,`--ard-_stack-align-items: ${this.currentAlignItems()}`,`--ard-_stack-column-spacing: ${this.currentColumnSpacing()}`,`--ard-_stack-row-spacing: ${this.currentRowSpacing()}`,`--ard-_stack-wrap: ${this.currentWrap()}`].filter(Boolean).join(";"))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ard-stack"]],hostAttrs:[1,"ard-stack"],hostVars:2,hostBindings:function(i,n){i&2&&Ce(n.currentStyle())},inputs:{direction:[1,"direction"],justifyContent:[1,"justifyContent"],alignItems:[1,"alignItems"],spacing:[1,"spacing"],columnSpacing:[1,"columnSpacing"],rowSpacing:[1,"rowSpacing"],wrap:[1,"wrap"]},standalone:!1,ngContentSelectors:Fe,decls:1,vars:0,template:function(i,n){i&1&&(j(),B(0))},styles:[`@layer ard-ui{.ard-stack{box-sizing:border-box;min-width:0px;display:flex;flex-direction:var(--ard-_stack-direction, row);flex-wrap:var(--ard-_stack-wrap, wrap);row-gap:var(--ard-_stack-row-spacing, 0px);column-gap:var(--ard-_stack-column-spacing, 0px);justify-content:var(--ard-_stack-justify-content, flex-start);align-items:var(--ard-_stack-align-items, flex-start)}}
`],encapsulation:2,changeDetection:0})}}return t})(),Ri=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({})}}return t})(),Qf={tabDisabled:!1,tabPointerEventsWhenDisabled:!1,color:Ie.Primary,stretchTabs:!1,uniformTabWidths:!1,tabAlignment:er.Left,tabIndex:0},Al=new R("ard-tabber-defaults",{factory:()=>S({},Qf)});var Ft=(()=>{class t{constructor(){this._DEFAULTS=M(Al),this.disabled=m(this._DEFAULTS.tabDisabled,{transform:e=>k(e)}),this.pointerEventsWhenDisabled=m(this._DEFAULTS.tabPointerEventsWhenDisabled,{transform:e=>k(e)}),this.tabTitle=m(""),this.selected=T(!1),this.focused=T(!1),this._label=m(null,{alias:"label"}),this.label=x(()=>this._label()??this.tabId()),this._isTabIdInitialized=!1,this.tabId=m.required({transform:e=>(this._isTabIdInitialized=!0,e)}),this.focusEvent=ne({alias:"focus"}),this.blurEvent=ne({alias:"blur"}),this.selectedChange=ne(),this.selectedChangeInternal$=new Le,this._selectedChangeSub=this.selectedChangeInternal$.subscribe(this.selectedChange.emit)}set _selected(e){this.selected.set(k(e))}setSelected(e){this.selected.set(e),this._emitChange()}_emitChange(){this.selectedChangeInternal$.next(this.selected())}ngOnDestroy(){this._selectedChangeSub.unsubscribe(),this.selectedChangeInternal$.complete()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ard-tab"]],hostAttrs:["role","tabpanel"],hostVars:4,hostBindings:function(i,n){i&2&&te("ard-tab-disabled",n.disabled())("ard-tab-selected",n.selected())},inputs:{disabled:[1,"disabled"],pointerEventsWhenDisabled:[1,"pointerEventsWhenDisabled"],tabTitle:[1,"tabTitle"],_selected:[0,"selected","_selected"],_label:[1,"label","_label"],tabId:[1,"tabId"]},outputs:{focusEvent:"focus",blurEvent:"blur",selectedChange:"selectedChange"},standalone:!1,ngContentSelectors:Fe,decls:1,vars:0,template:function(i,n){i&1&&(j(),B(0))},styles:[`@layer ard-ui{ard-tab{display:block}}
`],encapsulation:2,changeDetection:0})}}return t})(),Qn=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(ie(we))}}static{this.\u0275dir=$({type:t,selectors:[["ng-template","ard-tabber-label-tmp",""]],standalone:!1})}}return t})(),Zt=(()=>{class t{constructor(){this._DEFAULTS=M(Al),this.tabs=xt(Ft,{descendants:!0}),this.selectedTabId=wt(null,{alias:"selectedTab"}),this.selectedTab=x(()=>this.tabs().find(e=>e.tabId()===this.selectedTabId())??null),this.focusedTabId=T(null),this.focusedTab=x(()=>this.tabs().find(e=>e.tabId()===this.focusedTabId())??null),this._selectedTabIdToCheck=null,this.initialTab=m(void 0),this.focusEvent=ne({alias:"focus"}),this.blurEvent=ne({alias:"blur"});this.color=m(this._DEFAULTS.color),this.ngClasses=x(()=>[`ard-color-${this.color()}`].join(" "));this.stretchTabs=m(this._DEFAULTS.stretchTabs,{transform:e=>k(e)}),this.uniformTabWidths=m(this._DEFAULTS.uniformTabWidths,{transform:e=>k(e)}),this.tabAlignment=m(this._DEFAULTS.tabAlignment),this.tabContainerClasses=x(()=>[this.uniformTabWidths()&&!this.stretchTabs()?"ard-uniform-tab-widths":"",this.stretchTabs()?"ard-stretch-tabs":"",this.stretchTabs()?"":`ard-tab-align-${this.tabAlignment()}`].join(" "));this.tabIndex=m(0);this.labelTemplate=He(Qn),this.tabsWithTemplates=x(()=>this.tabs().map(e=>({tab:e,template:typeof e.label()=="string"?null:e.label(),templateContext:typeof e.label()=="string"?{$implicit:e.label(),tabId:e.tabId(),label:e.label()}:null})))}ngOnChanges(e){if(e.selectedTabId){let i=e.selectedTabId.currentValue;if(this.tabs().some(n=>!n._isTabIdInitialized))this._selectedTabIdToCheck=i;else{let n=e.selectedTabId.previousValue;this._validateSelectedTabId(i,n)}}}_validateSelectedTabId(e,i){if(e!==null){let n=this.tabs().find(l=>l._isTabIdInitialized&&l.tabId()===e);if(!n){console.error(`ARD-NF6000: Trying to select a tab with id '${e}' that does not exist.`);return}if(i!==null){let l=this.tabs().find(c=>c._isTabIdInitialized&&c.tabId()===i);l&&this._unselectSpecificTab(l)}this._selectNewTab(n)}}ngAfterContentInit(){let e=null;for(let i of this.tabs())i.selected()&&(e&&i.selected.set(!1),e=i),i.focusEvent.subscribe(()=>{this.focusEvent.emit(i.tabId())}),i.blurEvent.subscribe(()=>{this.blurEvent.emit(i.tabId())}),i.selectedChangeInternal$.subscribe(n=>{if(!n){this.selectedTabId.set(null);return}this.selectTab(i)});this._selectedTabIdToCheck!==null&&(this._validateSelectedTabId(this._selectedTabIdToCheck,null),this._selectedTabIdToCheck=null),e||(e=this.tabs().find(n=>n.tabId()===this.initialTab())??this.tabs()[0]??null,e&&e.selected.set(!0)),this.selectedTabId.set(e.tabId())}selectTab(e){e.tabId()===this.selectedTabId()||e.disabled()||(this._unselectCurrentTab(e),this.selectedTabId.set(e.tabId()),this._selectNewTab(e))}_unselectSpecificTab(e){e.selected.set(!1),e.selectedChange.emit(!1)}_unselectCurrentTab(e){let i=this.selectedTab();i&&(!e||i.tabId()!==e.tabId())&&this._unselectSpecificTab(i)}_selectNewTab(e){e.selected.set(!0),e.selectedChange.emit(!0)}onTabFocus(e){e.focusEvent.emit(),e.focused.set(!0),this.focusedTabId.set(e.tabId())}onTabBlur(e){e.blurEvent.emit(),e.focused.set(!1),this.focusedTabId.set(null)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ard-tabber"]],contentQueries:function(i,n,l){i&1&&(pe(l,n.tabs,Ft,5),pe(l,n.labelTemplate,Qn,5)),i&2&&ce(2)},inputs:{selectedTabId:[1,"selectedTab","selectedTabId"],initialTab:[1,"initialTab"],color:[1,"color"],stretchTabs:[1,"stretchTabs"],uniformTabWidths:[1,"uniformTabWidths"],tabAlignment:[1,"tabAlignment"],tabIndex:[1,"tabIndex"]},outputs:{selectedTabId:"selectedTabChange",focusEvent:"focus",blurEvent:"blur"},standalone:!1,features:[St],ngContentSelectors:Fe,decls:6,vars:6,consts:[["focusableElement",""],["defaultLabelTemplate",""],[1,"ard-tabber",3,"ngClass"],[1,"ard-tabber-tabs",3,"ngClass"],["type","button","role","tab",1,"ard-tab-button",3,"id","ard-tab-disabled","ard-tab-with-pointer-events-when-disabled","ard-tab-active","ard-tab-focused","title","tabindex"],["role","tabpanel",1,"ard-tabber-content"],["type","button","role","tab",1,"ard-tab-button",3,"click","focus","blur","id","title","tabindex"],[1,"ard-focus-overlay"],[1,"ard-button-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&(j(),o(0,"div",2)(1,"div",3),H(2,km,7,13,"button",4,Vt),a(),o(4,"div",5),B(5),a()()),i&2&&(h("ngClass",n.ngClasses()),d(),Ce(be(4,Fm,n.tabs().length)),h("ngClass",n.tabContainerClasses()),d(),U(n.tabsWithTemplates()))},dependencies:[Ge,Ne],styles:[`@layer ard-ui{ard-tabber{display:block}.ard-tabber ard-tab{display:none}.ard-tabber ard-tab.ard-tab-selected{display:block}.ard-tabber .ard-tabber-tabs.ard-uniform-tab-widths{display:grid;grid-template-columns:repeat(var(--ard-_tabber-tabs),1fr);max-width:max-content}}
`],encapsulation:2,changeDetection:0})}}return t})(),Jt=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J]})}}return t})(),Fl={appearance:Km.Raised,variant:Qs.Rounded,compact:!1,heading:"",noCloseButton:!1,noBackdrop:!1,disableBackdropClose:!1,panelClass:"",backdropClass:""},Xf=new R("ard-modal-defaults",{factory:()=>S({},Fl)});var ma={NoOp:"no-op",AutoClose:"autoclose"},Zf=z(S({},Fl),{confirmButtonText:"Confirm",confirmButtonColor:Ie.Primary,confirmButtonAppearance:an.RaisedStrong,rejectButtonText:"Cancel",rejectButtonColor:Ie.None,rejectButtonAppearance:an.Transparent,noRejectButton:!1,canConfirm:!0,buttonActionType:ma.AutoClose}),Jf=new R("ard-dialog-defaults",{factory:()=>S({},Zf)});var js=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(ie(we))}}static{this.\u0275dir=$({type:t,selectors:[["ng-template","ard-buttons-tmp",""]],standalone:!1})}}return t})(),Ys=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(ie(we))}}static{this.\u0275dir=$({type:t,selectors:[["ng-template","ard-close-icon-tmp",""]],standalone:!1})}}return t})(),$s=(()=>{class t{constructor(e){this.template=e}static{this.\u0275fac=function(i){return new(i||t)(ie(we))}}static{this.\u0275dir=$({type:t,selectors:[["ng-template","ard-close-icon-tmp",""]],standalone:!1})}}return t})(),Sa=(()=>{class t{constructor(){this.overlay=M(Ai),this.scrollStrategyOpts=M(Ln),this.viewContainerRef=M(Pt),this._DEFAULTS=M(Xf);this.appearance=m(this._DEFAULTS.appearance),this.variant=m(this._DEFAULTS.variant),this.compact=m(this._DEFAULTS.compact,{transform:e=>k(e)}),this.ngClasses=x(()=>[`ard-variant-${this.variant()}`,`ard-appearance-${this.appearance()}`,this.compact()?"ard-compact":""].join(" "));this.heading=m(this._DEFAULTS.heading),this.noCloseButton=m(this._DEFAULTS.noCloseButton,{transform:e=>k(e)}),this.panelClass=m(this._DEFAULTS.panelClass),this.backdropClass=m(this._DEFAULTS.backdropClass);this.noBackdrop=m(this._DEFAULTS.noBackdrop,{transform:e=>k(e)}),this.disableBackdropClose=m(this._DEFAULTS.disableBackdropClose,{transform:e=>k(e)}),this.allActionsDisabled=m(!1,{transform:e=>k(e)});this.open=T(!1),this.openChange=ne(),this.closeEvent=ne({alias:"close"});this.modalTemplate=Pe("modalTemplate",{read:we});this.closeIconTemplate=He($s),this._closeIconTemplate=m(void 0)}set _open(e){this.open.set(k(e)),this.open()?this._openOverlay():this._destroyOverlay()}openProgrammatically(){this.open.set(!0)}closeProgrammatically(){this.open.set(!1)}_openOverlay(){let e=this.overlay.position().global(),i=new en({positionStrategy:e,scrollStrategy:this.scrollStrategyOpts.block(),hasBackdrop:!1});this._modalOverlay=this.overlay.create(i);let n=new Ei(this.modalTemplate(),this.viewContainerRef);this._modalOverlay.attach(n)}_destroyOverlay(){this._modalOverlay&&(this.openChange.emit(!1),this.closeEvent.emit(),this._modalOverlay.dispose(),delete this._modalOverlay)}onBackdropClick(){this.disableBackdropClose()||this.allActionsDisabled()||this._destroyOverlay()}onCloseButtonClick(){this.allActionsDisabled()||this._destroyOverlay()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ard-modal"]],contentQueries:function(i,n,l){i&1&&pe(l,n.closeIconTemplate,$s,5),i&2&&ce()},viewQuery:function(i,n){i&1&&Ve(n.modalTemplate,Pm,5,we),i&2&&ce()},inputs:{appearance:[1,"appearance"],variant:[1,"variant"],compact:[1,"compact"],heading:[1,"heading"],noCloseButton:[1,"noCloseButton"],panelClass:[1,"panelClass"],backdropClass:[1,"backdropClass"],noBackdrop:[1,"noBackdrop"],disableBackdropClose:[1,"disableBackdropClose"],allActionsDisabled:[1,"allActionsDisabled"],_open:[0,"open","_open"],_closeIconTemplate:[1,"_closeIconTemplate"]},outputs:{openChange:"openChange",closeEvent:"close"},standalone:!1,ngContentSelectors:Fe,decls:4,vars:0,consts:[["modalTemplate",""],["_modalInsidePanel",""],["defaultCloseIconTemplate",""],[1,"ard-modal",3,"ngClass"],[1,"ard-modal","ard-modal-backdrop",3,"ngClass"],[1,"ard-modal",3,"click","ngClass"],[3,"ngTemplateOutlet"],[1,"ard-modal","ard-modal-backdrop",3,"click","ngClass"],["cdkTrapFocus","",1,"ard-modal-panel",3,"click","ngClass"],[1,"ard-modal-heading"],[1,"ard-modal-heading-text"],["color","none",1,"ard-modal-close-button",3,"compact","disabled"],[1,"ard-modal-content"],["color","none",1,"ard-modal-close-button",3,"click","compact","disabled"]],template:function(i,n){i&1&&(j(),g(0,Bm,2,1,"ng-template",null,0,oe)(2,jm,7,7,"ng-template",null,1,oe))},dependencies:[Ge,Ne,We,ue,Ss],styles:[`.ard-modal-content{width:100%}
`],encapsulation:2,changeDetection:0})}}return t})(),Li=(()=>{class t{constructor(){this._DEFAULTS=M(Jf);this.appearance=m(this._DEFAULTS.appearance),this.variant=m(this._DEFAULTS.variant),this.compact=m(this._DEFAULTS.compact,{transform:e=>k(e)});this.heading=m(this._DEFAULTS.heading),this.noCloseButton=m(this._DEFAULTS.noCloseButton,{transform:e=>k(e)}),this.panelClass=m(this._DEFAULTS.panelClass),this.backdropClass=m(this._DEFAULTS.backdropClass);this.noBackdrop=m(this._DEFAULTS.noBackdrop,{transform:e=>k(e)}),this.disableBackdropClose=m(this._DEFAULTS.disableBackdropClose,{transform:e=>k(e)}),this.buttonActionType=m(this._DEFAULTS.buttonActionType),this.allActionsDisabled=m(!1,{transform:e=>k(e)});this.open=wt(!1),this.closeEvent=ne({alias:"close"}),this.confirmEvent=ne({alias:"confirm"}),this.rejectEvent=ne({alias:"reject"});this.confirmButtonText=m(this._DEFAULTS.confirmButtonText),this.confirmButtonColor=m(this._DEFAULTS.confirmButtonColor),this.confirmButtonAppearance=m(this._DEFAULTS.confirmButtonAppearance),this.confirmButtonPointerEventsWhenDisabled=m(!1,{transform:e=>k(e)}),this.rejectButtonText=m(this._DEFAULTS.rejectButtonText),this.rejectButtonColor=m(this._DEFAULTS.rejectButtonColor),this.rejectButtonAppearance=m(this._DEFAULTS.rejectButtonAppearance),this.noRejectButton=m(this._DEFAULTS.noRejectButton,{transform:e=>k(e)}),this.canConfirm=m(this._DEFAULTS.canConfirm,{transform:e=>k(e)}),this._isCloseEventTimeoutRunning=!1;this.buttonsTemplate=He(js),this.closeIconTemplate=He(Ys),this.getButtonsContext=x(()=>({confirmButton:{text:this.confirmButtonText(),color:this.confirmButtonColor(),appearance:this.confirmButtonAppearance(),pointerEventsWhenDisabled:this.confirmButtonPointerEventsWhenDisabled()},rejectButton:{enabled:!this.noRejectButton(),text:this.rejectButtonText(),color:this.rejectButtonColor(),appearance:this.rejectButtonAppearance()},canConfirm:this.canConfirm(),allActionsDisabled:this.allActionsDisabled(),onConfirm:()=>this.onConfirmClick(),onReject:()=>this.onRejectClick(),dialogAppearance:this.appearance(),dialogVariant:this.variant(),dialogCompact:this.compact()}))}openProgrammatically(){this.open.set(!0)}closeProgrammatically(){this.open.set(!1)}onConfirmClick(){!this.canConfirm()||this.allActionsDisabled()||(this._isCloseEventTimeoutRunning=!0,this.buttonActionType()===ma.AutoClose&&this.open.set(!1),setTimeout(()=>{this._isCloseEventTimeoutRunning=!1,this.confirmEvent.emit(),this.closeEvent.emit("confirm")},0))}onRejectClick(){this.allActionsDisabled()||(this._isCloseEventTimeoutRunning=!0,this.buttonActionType()===ma.AutoClose&&this.open.set(!1),setTimeout(()=>{this._isCloseEventTimeoutRunning=!1,this.rejectEvent.emit(),this.closeEvent.emit("reject")},0))}onModalClose(){this._isCloseEventTimeoutRunning||this.closeEvent.emit("close")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["ard-dialog"]],contentQueries:function(i,n,l){i&1&&(pe(l,n.buttonsTemplate,js,5),pe(l,n.closeIconTemplate,Ys,5)),i&2&&ce(2)},inputs:{appearance:[1,"appearance"],variant:[1,"variant"],compact:[1,"compact"],heading:[1,"heading"],noCloseButton:[1,"noCloseButton"],panelClass:[1,"panelClass"],backdropClass:[1,"backdropClass"],noBackdrop:[1,"noBackdrop"],disableBackdropClose:[1,"disableBackdropClose"],buttonActionType:[1,"buttonActionType"],allActionsDisabled:[1,"allActionsDisabled"],open:[1,"open"],confirmButtonText:[1,"confirmButtonText"],confirmButtonColor:[1,"confirmButtonColor"],confirmButtonAppearance:[1,"confirmButtonAppearance"],confirmButtonPointerEventsWhenDisabled:[1,"confirmButtonPointerEventsWhenDisabled"],rejectButtonText:[1,"rejectButtonText"],rejectButtonColor:[1,"rejectButtonColor"],rejectButtonAppearance:[1,"rejectButtonAppearance"],noRejectButton:[1,"noRejectButton"],canConfirm:[1,"canConfirm"]},outputs:{open:"openChange",closeEvent:"close",confirmEvent:"confirm",rejectEvent:"reject"},standalone:!1,ngContentSelectors:Fe,decls:8,vars:14,consts:[["defaultButtonsTemplate",""],[3,"openChange","close","appearance","variant","compact","heading","noCloseButton","panelClass","backdropClass","noBackdrop","disableBackdropClose","allActionsDisabled","open","_closeIconTemplate"],[1,"ard-dialog-container"],[1,"ard-dialog-content"],[1,"ard-dialog-buttons"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ard-dialog-buttons-container"],[3,"color","appearance","variant","compact","disabled"],[3,"click","color","appearance","variant","compact","disabled","pointerEventsWhenDisabled"],[3,"click","color","appearance","variant","compact","disabled"]],template:function(i,n){if(i&1){let l=Y();j(),o(0,"ard-modal",1),q("openChange",function(p){return D(l),K(n.open,p)||(n.open=p),E(p)}),_("close",function(){return D(l),E(n.onModalClose())}),o(1,"div",2)(2,"div",3),B(3),a(),o(4,"div",4),g(5,$m,4,8,"ng-template",null,0,oe)(7,zm,0,0,"ng-template",5),a()()()}if(i&2){let l,c=V(6);h("appearance",n.appearance())("variant",n.variant())("compact",n.compact())("heading",n.heading())("noCloseButton",n.noCloseButton())("panelClass",n.panelClass())("backdropClass",n.backdropClass())("noBackdrop",n.noBackdrop())("disableBackdropClose",n.disableBackdropClose())("allActionsDisabled",n.allActionsDisabled()),W("open",n.open),h("_closeIconTemplate",n.closeIconTemplate()),d(7),h("ngTemplateOutlet",(l=(l=n.buttonsTemplate())==null?null:l.template)!==null&&l!==void 0?l:c)("ngTemplateOutletContext",n.getButtonsContext())}},dependencies:[Ne,ve,Sa],encapsulation:2,changeDetection:0})}}return t})(),Ta=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J,Ke,ae,Ts]})}}return t})(),Bi=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J,he,Ta]})}}return t})();var gx=new R("ArdSnackbarData"),_x=new R("ArdSnackbarColor"),vx=new R("ArdSnackbarType");var eg={TopLeft:"top-left",TopCenter:"top-center",TopRight:"top-right",BottomLeft:"bottom-left",BottomCenter:"bottom-center",BottomRight:"bottom-right"},tg={Inside:"inside",Outside:"outside"},ig={Default:"default",Skip:"skip",Overwrite:"overwrite"},ng={None:"none",Danger:"danger",Warning:"warn",Success:"success",Info:"info"};var rg={placement:{align:eg.BottomCenter,origin:document.body,originRelation:tg.Inside},duration:5e3,queueHandling:ig.Default,panelClass:[],data:{message:""},color:Ie.Primary,type:ng.None},yx=new R("ard-snackbar-defaults",{factory:()=>S({},rg)});var Cx=new R("ard-snackbar-animation-length",{factory:()=>150});var wx={name:"$$$",description:"$$$",type:"boolean-like",default:"false",required:!1};function Sx(t,r=je.Outlined,e){return{name:e??"appearance",description:t,type:"FormElementAppearance",default:`'${r}'`}}function Ml(t,r){let e=new Map;for(let i of t){let n=r(i);e.has(n)||e.set(n,[]),e.get(n).push(i)}return Array.from(e.entries()).map(([i,n])=>({group:i,children:n}))}var kl=Yi(Da());var ag={offset:"30%",noHighlight:!1,behavior:"smooth"};function Hi(t,r={}){let{offset:e,noHighlight:i,behavior:n}=S(S({},ag),r);console.log("scrollTo called with tagQuery:",t);let l=document.querySelector(t);if(!l){let I=t.charAt(0);t=(0,kl.kebab)(t.replace(/[^\w\- ]/gi,"")),/[^a-zA-Z0-9]/.test(I)&&(t=I+t),l=document.querySelector(t)}if(!l){console.warn(`Element not found for selector: ${t}`);return}let p=l.getBoundingClientRect().top+window.scrollY,w=0;if(typeof e=="string"&&e.endsWith("%")){let I=parseFloat(e);isNaN(I)||(w=I/100*window.innerHeight)}else typeof e=="number"&&(w=e);let L=p-w;window.scrollTo({top:L,behavior:n}),!i&&(l.classList.add("scrolled-to"),setTimeout(()=>{l.classList.remove("scrolled-to")},3e3))}var Fa=new R("HIGHLIGHT_OPTIONS");function jx(t){return[{provide:Fa,useValue:t}]}var Ui=function(t){return t.FULL_WITH_CORE_LIBRARY_IMPORTS="The full library and the core library were imported, only one of them should be imported!",t.FULL_WITH_LANGUAGE_IMPORTS="The highlighting languages were imported they are not needed!",t.CORE_WITHOUT_LANGUAGE_IMPORTS="The highlighting languages were not imported!",t.LANGUAGE_WITHOUT_CORE_IMPORTS="The core library was not imported!",t.NO_FULL_AND_NO_CORE_IMPORTS="Highlight.js library was not imported!",t}(Ui||{}),og=(()=>{class t{constructor(){this.document=M(De),this.isPlatformBrowser=Xi(M($i)),this.options=M(Fa,{optional:!0}),this._ready=new bt(null),this.ready=vr(this._ready.asObservable().pipe(ct(e=>!!e))),this.isPlatformBrowser&&(this.document.defaultView.hljs?this._ready.next(this.document.defaultView.hljs):this._loadLibrary().pipe(vn(e=>this.options?.lineNumbersLoader?(this.document.defaultView.hljs=e,this.loadLineNumbers().pipe(br(i=>{i.activateLineNumbers(),this._ready.next(e)}))):(this._ready.next(e),gr)),Ha(e=>(console.error("[HLJS] ",e),this._ready.error(e),gr))).subscribe(),this.options?.themePath&&this.loadTheme(this.options.themePath))}_loadLibrary(){if(this.options){if(this.options.fullLibraryLoader&&this.options.coreLibraryLoader)return mi(()=>Ui.FULL_WITH_CORE_LIBRARY_IMPORTS);if(this.options.fullLibraryLoader&&this.options.languages)return mi(()=>Ui.FULL_WITH_LANGUAGE_IMPORTS);if(this.options.coreLibraryLoader&&!this.options.languages)return mi(()=>Ui.CORE_WITHOUT_LANGUAGE_IMPORTS);if(!this.options.coreLibraryLoader&&this.options.languages)return mi(()=>Ui.LANGUAGE_WITHOUT_CORE_IMPORTS);if(this.options.fullLibraryLoader)return this.loadFullLibrary();if(this.options.coreLibraryLoader&&this.options.languages&&Object.keys(this.options.languages).length)return this.loadCoreLibrary().pipe(vn(e=>this._loadLanguages(e)))}return mi(()=>Ui.NO_FULL_AND_NO_CORE_IMPORTS)}_loadLanguages(e){let i=Object.entries(this.options.languages).map(([n,l])=>Ea(l()).pipe(br(c=>e.registerLanguage(n,c))));return La(i).pipe(Be(()=>e))}loadCoreLibrary(){return Ea(this.options.coreLibraryLoader())}loadFullLibrary(){return Ea(this.options.fullLibraryLoader())}loadLineNumbers(){return _r(this.options.lineNumbersLoader())}setTheme(e){this.isPlatformBrowser&&(this._themeLinkElement?this._themeLinkElement.href=e:this.loadTheme(e))}loadTheme(e){this._themeLinkElement=this.document.createElement("link"),this._themeLinkElement.href=e,this._themeLinkElement.type="text/css",this._themeLinkElement.rel="stylesheet",this._themeLinkElement.media="screen,print",this.document.head.appendChild(this._themeLinkElement)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Ea=t=>_r(t).pipe(ct(r=>!!r?.default),Be(r=>r.default)),sg=(()=>{class t{constructor(){this.loader=M(og),this.options=M(Fa,{optional:!0}),this.hljsSignal=T(null),this.hljs=x(()=>this.hljsSignal()),this.loader.ready.then(e=>{this.hljsSignal.set(e),this.options?.highlightOptions&&e.configure(this.options.highlightOptions)})}highlight(e,i){return ke(this,null,function*(){return(yield this.loader.ready).highlight(e,i)})}highlightAuto(e,i){return ke(this,null,function*(){return(yield this.loader.ready).highlightAuto(e,i)})}highlightElement(e){return ke(this,null,function*(){(yield this.loader.ready).highlightElement(e)})}highlightAll(){return ke(this,null,function*(){(yield this.loader.ready).highlightAll()})}configure(e){return ke(this,null,function*(){(yield this.loader.ready).configure(e)})}registerLanguage(e,i){return ke(this,null,function*(){(yield this.loader.ready).registerLanguage(e,i)})}unregisterLanguage(e){return ke(this,null,function*(){(yield this.loader.ready).unregisterLanguage(e)})}registerAliases(n,l){return ke(this,arguments,function*(e,{languageName:i}){(yield this.loader.ready).registerAliases(e,{languageName:i})})}listLanguages(){return ke(this,null,function*(){return(yield this.loader.ready).listLanguages()})}getLanguage(e){return ke(this,null,function*(){return(yield this.loader.ready).getLanguage(e)})}safeMode(){return ke(this,null,function*(){(yield this.loader.ready).safeMode()})}debugMode(){return ke(this,null,function*(){(yield this.loader.ready).debugMode()})}lineNumbersBlock(e,i){return ke(this,null,function*(){let n=yield this.loader.ready;n.lineNumbersBlock&&n.lineNumbersBlock(e,i)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Aa;function lg(){if(!Aa)try{Aa=window?.trustedTypes?.createPolicy("ngx-highlightjs",{createHTML:t=>t})}catch{}return Aa}function dg(t){return lg()?.createHTML(t)||t}var Pl=(()=>{class t{constructor(){this._hljs=M(sg),this._nativeElement=M(ye).nativeElement,this._sanitizer=M(io),this._platform=M($i),Xi(this._platform)&&(se(()=>{let e=this.code();this.setTextContent(e||""),e&&this.highlightElement(e)}),se(()=>{let e=this.highlightResult();this.setInnerHTML(e?.value),this.highlighted.emit(e)}))}setTextContent(e){requestAnimationFrame(()=>this._nativeElement.textContent=e)}setInnerHTML(e){requestAnimationFrame(()=>this._nativeElement.innerHTML=dg(this._sanitizer.sanitize(qa.HTML,e)||""))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=$({type:t,standalone:!1})}}return t})(),Vl=(()=>{class t extends Pl{constructor(){super(...arguments),this.code=m(null,{alias:"highlight"}),this.highlightResult=T(null),this.highlighted=new ni}highlightElement(e){return ke(this,null,function*(){let i=yield this._hljs.highlight(e,{language:this.language,ignoreIllegals:this.ignoreIllegals});this.highlightResult.set(i)})}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=tt(t)))(n||t)}})()}static{this.\u0275dir=$({type:t,selectors:[["","highlight",""]],hostVars:2,hostBindings:function(i,n){i&2&&te("hljs",!0)},inputs:{code:[1,"highlight","code"],language:"language",ignoreIllegals:[2,"ignoreIllegals","ignoreIllegals",_i]},outputs:{highlighted:"highlighted"},features:[rt([{provide:Pl,useExisting:t}]),ri,fe]})}}return t})();var Ni=(()=>{class t{constructor(){this.language=m.required(),this.code=m(""),this.styled=m(!1,{transform:e=>st(e)}),this.noScroll=m(!1,{transform:e=>st(e)}),this.langClass=x(()=>`lang-${this.language()}`)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-code"]],inputs:{language:[1,"language"],code:[1,"code"],styled:[1,"styled"],noScroll:[1,"noScroll"]},decls:3,vars:8,consts:[[3,"highlight","language"]],template:function(i,n){i&1&&(o(0,"pre"),y(1,"code",0),s(2,`
`),a()),i&2&&(te("styled",n.styled())("no-scroll",n.noScroll()),d(),ge(n.langClass()),h("highlight",n.code())("language",n.language()))},dependencies:[Vl],styles:["pre[_ngcontent-%COMP%]{padding:1.25rem;max-width:100%;overflow:auto}.styled[_ngcontent-%COMP%]{border-radius:.5rem;border:1px solid var(--ard-detail-ultralight);margin:1.25rem 0}.no-scroll[_ngcontent-%COMP%]{max-width:max-content;overflow:initial}"]})}}return t})();var Rl=Yi(Da());var cg=["idLink","","id",""],ug=["*"],Ol=(()=>{class t{constructor(){this.router=M(wn)}onClick(e){let i=e.target.parentElement;if(i){for(;!i.id;)if(i=i.parentElement,!i)return;Hi("#"+i.id,{offset:96,noHighlight:!0}),this.router.navigate([],{fragment:i.id})}}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["","idLink","","id",""],["h1","id",""],["h2","id",""],["h3","id",""],["h4","id",""],["h5","id",""],["h6","id",""]],attrs:cg,ngContentSelectors:ug,decls:4,vars:0,consts:[["color","none",3,"click"]],template:function(i,n){i&1&&(j(),o(0,"ard-icon-button",0),_("click",function(c){return n.onClick(c)}),o(1,"ard-icon"),s(2,"tag"),a()(),B(3))},dependencies:[Ke,We,ae,ue],styles:["[_nghost-%COMP%]{position:relative}ard-icon-button[_ngcontent-%COMP%]{opacity:0;appearance:none;position:absolute;right:100%;top:50%;transform:translateY(-50%);font-size:.625em}ard-icon-button[_ngcontent-%COMP%]   ard-icon[_ngcontent-%COMP%]{color:var(--ard-text3)}[_nghost-%COMP%]:hover   ard-icon-button[_ngcontent-%COMP%]{opacity:1;appearance:auto}"]})}}return t})();var pg=["appAutoId",""],mg=["*"],Rt=(()=>{class t{ngAfterViewInit(){this._wasViewInit=!0,this._setElementId()}constructor(){this.elementRef=M(ye),this.autoIdActive=m(!1,{transform:e=>st(e),alias:"appAutoId"}),this.forcedId=m(null),this.idPrefix=m("",{transform:this._toKebab}),this.idText=T(""),this._wasViewInit=!1,se(()=>{this._setElementId()})}_toKebab(e){return(0,Rl.kebab)(e.replace(/[\s\.]+/g," ").replace(/[^\w\- ]/gi,""))}_setElementId(){if(this._wasViewInit)return;let i=this.elementRef.nativeElement.innerText.replace(/tag\x0A/,"");i&&this.idText.set(this._toKebab(i))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["","appAutoId",""]],inputs:{autoIdActive:[1,"appAutoId","autoIdActive"],forcedId:[1,"forcedId"],idPrefix:[1,"idPrefix"]},attrs:pg,ngContentSelectors:mg,decls:2,vars:1,consts:[["idLink","",3,"id"]],template:function(i,n){if(i&1&&(j(),o(0,"div",0),B(1),a()),i&2){let l;h("id",(l=n.forcedId())!==null&&l!==void 0?l:n.idText())}},dependencies:[Ol],encapsulation:2})}}return t})();var fg=["*"],yt=(()=>{class t{constructor(){this.htmlId=m(null),this.idPrefix=m("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-h1"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:fg,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(j(),o(0,"h1",0),B(1),a()),i&2&&h("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return t})();var gg=["*"],ei=(()=>{class t{constructor(){this.htmlId=m(null),this.idPrefix=m("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-h2"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:gg,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(j(),o(0,"h2",0),B(1),a()),i&2&&h("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return t})();var _g=["*"],ti=(()=>{class t{constructor(){this.htmlId=m(null),this.idPrefix=m("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-h3"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:_g,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(j(),o(0,"h3",0),B(1),a()),i&2&&h("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return t})();var vg=["*"],cr=(()=>{class t{constructor(){this.htmlId=m(null),this.idPrefix=m("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-h4"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:vg,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(j(),o(0,"h4",0),B(1),a()),i&2&&h("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return t})();var Cg=["*"],ur=(()=>{class t{constructor(){this.htmlId=m(null),this.idPrefix=m("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-h5"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:Cg,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(j(),o(0,"h5",0),B(1),a()),i&2&&h("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return t})();var xg=["*"],pr=(()=>{class t{constructor(){this.htmlId=m(null),this.idPrefix=m("")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-h6"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:xg,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(j(),o(0,"h6",0),B(1),a()),i&2&&h("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return t})();var It=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J,Rt]})}}return t})();ai(yt,[Rt],[]);ai(ei,[Rt],[]);ai(ti,[Rt],[]);ai(cr,[Rt],[]);ai(ur,[Rt],[]);ai(pr,[Rt],[]);var Sg=(t,r)=>r.name,Lt=(t,r)=>({$implicit:t,prefix:r}),Tg=(t,r)=>({$implicit:t,prefix:r,headingType:"h6",headingText:"Template Context"}),ka=t=>({$implicit:t}),Dg=(t,r)=>({$implicit:t,headingType:"h5",prefix:r}),Eg=(t,r)=>({$implicit:t,isTypeParams:!0,headingType:"h4",prefix:r}),Ag=(t,r,e)=>({$implicit:t,headingType:r,prefix:e}),Fg=(t,r,e)=>({$implicit:t,isTypeParams:!0,headingType:r,prefix:e}),Mg=(t,r)=>({$implicit:t,isTypeParams:!0,headingType:"h5",prefix:r}),Ll=(t,r)=>({$implicit:t,headingType:"h6",prefix:r});function Ig(t,r){if(t&1&&y(0,"p",8),t&2){let e=f().$implicit;h("innerHTML",e.description,de)}}function kg(t,r){if(t&1){let e=Y();o(0,"a",9),_("click",function(){D(e);let n=f().$implicit,l=f(2);return E(l.scrollTo("#"+n.exports))}),o(1,"code"),s(2),a()()}if(t&2){let e=f().$implicit;d(2),C(e.exports)}}function Pg(t,r){t&1&&s(0),t&2&&C(", ")}function Vg(t,r){if(t&1){let e=Y();o(0,"a",9),_("click",function(){let n=D(e).$implicit,l=f(4);return E(l.scrollTo("#"+n))}),o(1,"code"),s(2),a()(),g(3,Pg,1,1)}if(t&2){let e=r.$implicit,i=r.$index,n=f(2).$implicit;d(2),C(e),d(),b(i!==n.exports.length-1?3:-1)}}function Og(t,r){if(t&1&&H(0,Vg,4,2,null,null,Z),t&2){let e=f().$implicit;U(e.exports)}}function Rg(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),g(4,Ig,1,1,"p",8),o(5,"p"),s(6," Exports: "),g(7,kg,3,1,"a")(8,Og,2,0),a()()),t&2){let e=r.$implicit,i=f(2);d(3),C(e.name),d(),b(e.description?4:-1),d(3),b(i.isString(e.exports)?7:8)}}function Lg(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Modules"),a(),H(3,Rg,9,3,"div",7,Z),a()),t&2){let e=f();d(3),U(e.data.modules)}}function Bg(t,r){if(t&1&&y(0,"p",8),t&2){let e=f().$implicit;h("innerHTML",e.description,de)}}function Hg(t,r){if(t&1){let e=Y();s(0," Exported from: "),o(1,"a",9),_("click",function(){D(e);let n=f().$implicit,l=f(2);return E(l.scrollTo("#"+n.exportedFrom))}),o(2,"code"),s(3),a()()}if(t&2){let e=f().$implicit;d(3),C(e.exportedFrom)}}function Ug(t,r){t&1&&s(0," This component is standalone and needs to be imported separately. ")}function Ng(t,r){}function jg(t,r){if(t&1&&g(0,Ng,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(14);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Me(2,Lt,e.inputs,e.name))}}function Yg(t,r){}function $g(t,r){if(t&1&&g(0,Yg,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(16);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Me(2,Lt,e.twoWayBindings,e.name))}}function zg(t,r){}function Wg(t,r){if(t&1&&g(0,zg,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(18);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Me(2,Lt,e.outputs,e.name))}}function Kg(t,r){if(t&1&&y(0,"p",8),t&2){let e=f(3).$implicit;h("innerHTML",e.description,de)}}function qg(t,r){}function Gg(t,r){if(t&1&&g(0,qg,0,0,"ng-template",10),t&2){let e=f().$implicit,i=f(2).$implicit;f(2);let n=V(22);h("ngTemplateOutlet",n)("ngTemplateOutletContext",Me(2,Tg,e.context,i.name+"template"+e.name))}}function Qg(t,r){if(t&1&&(o(0,"app-h6",11),s(1,"Template Context"),a(),o(2,"p"),s(3,"This template has no own context properties."),a()),t&2){let e=f().$implicit,i=f(2).$implicit;h("idPrefix",i.name+"template"+e.name)}}function Xg(t,r){if(t&1&&(o(0,"app-h5",11),s(1),a(),g(2,Kg,1,1,"p",8),o(3,"p"),s(4," Selector: "),o(5,"code"),s(6),a()(),g(7,Gg,1,5,null,10)(8,Qg,4,1),o(9,"app-h6",11),s(10,"Default HTML Implementation"),a(),y(11,"app-code",12)),t&2){let e=r.$implicit,i=f(2).$implicit;h("idPrefix",i.name+"template"),d(),C(e.name),d(),b(e.description?2:-1),d(4),C(i.selector),d(),b(e.context!=null&&e.context.length?7:8),d(2),h("idPrefix",i.name+"template"+e.name),d(2),h("code",e.defaultHtmlContent)}}function Zg(t,r){if(t&1&&(o(0,"app-h4",11),s(1,"Customization Templates"),a(),H(2,Xg,12,7,null,null,Sg)),t&2){let e=f().$implicit;h("idPrefix",e.name),d(2),U(e.templates)}}function Jg(t,r){t&1&&(o(0,"i"),s(1,"default"),a())}function e_(t,r){if(t&1&&(o(0,"code"),s(1),a()),t&2){let e=f().$implicit;d(),C(e.selector)}}function t_(t,r){if(t&1&&(o(0,"tr")(1,"td"),g(2,Jg,2,0,"i")(3,e_,2,1,"code"),a(),o(4,"td"),y(5,"p",8),a()()),t&2){let e=r.$implicit;d(2),b(e.selector===null?2:3),d(3),h("innerHTML",e.description,de)}}function i_(t,r){if(t&1&&(o(0,"app-h4",11),s(1,"Content Children"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),s(6,"Selector"),a(),o(7,"th"),s(8,"Description"),a()()(),o(9,"tbody"),H(10,t_,6,2,"tr",null,Z),a()()),t&2){let e=f().$implicit;h("idPrefix",e.name),d(10),U(e.contentChildren)}}function n_(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),g(4,Bg,1,1,"p",8),o(5,"p"),s(6," Selector: "),o(7,"code"),s(8),a()(),o(9,"p"),g(10,Hg,4,1)(11,Ug,1,0),a(),g(12,jg,1,5,null,10)(13,$g,1,5,null,10)(14,Wg,1,5,null,10)(15,Zg,4,1)(16,i_,12,1),a()),t&2){let e=r.$implicit;d(3),C(e.name),d(),b(e.description?4:-1),d(4),C(e.selector),d(2),b(e.exportedFrom!==null?10:11),d(2),b(e.inputs?12:-1),d(),b(e.twoWayBindings?13:-1),d(),b(e.outputs?14:-1),d(),b(e.templates?15:-1),d(),b(e.contentChildren?16:-1)}}function r_(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Components"),a(),H(3,n_,17,9,"div",7,Z),a()),t&2){let e=f();d(3),U(e.data.components)}}function a_(t,r){if(t&1&&y(0,"p",8),t&2){let e=f().$implicit;h("innerHTML",e.description,de)}}function o_(t,r){if(t&1){let e=Y();s(0," Exported from: "),o(1,"a",9),_("click",function(){D(e);let n=f().$implicit,l=f(2);return E(l.scrollTo("#"+n.exportedFrom))}),o(2,"code"),s(3),a()()}if(t&2){let e=f().$implicit;d(3),C(e.exportedFrom)}}function s_(t,r){t&1&&s(0," This directive is standalone and needs to be imported separately. ")}function l_(t,r){}function d_(t,r){if(t&1&&g(0,l_,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(14);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Me(2,Lt,e.inputs,e.name))}}function c_(t,r){}function u_(t,r){if(t&1&&g(0,c_,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(16);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Me(2,Lt,e.twoWayBindings,e.name))}}function p_(t,r){}function m_(t,r){if(t&1&&g(0,p_,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(18);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Me(2,Lt,e.outputs,e.name))}}function h_(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),g(4,a_,1,1,"p",8),o(5,"p"),s(6," Selector: "),o(7,"code"),s(8),a()(),o(9,"p"),g(10,o_,4,1)(11,s_,1,0),a(),g(12,d_,1,5,null,10)(13,u_,1,5,null,10)(14,m_,1,5,null,10),a()),t&2){let e=r.$implicit;d(3),C(e.name),d(),b(e.description?4:-1),d(4),C(e.selector),d(2),b(e.exportedFrom!==null?10:11),d(2),b(e.inputs?12:-1),d(),b(e.twoWayBindings?13:-1),d(),b(e.outputs?14:-1)}}function f_(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Directives"),a(),H(3,h_,15,7,"div",7,Z),a()),t&2){let e=f();d(3),U(e.data.directives)}}function g_(t,r){if(t&1){let e=Y();s(0," Exported from: "),o(1,"a",9),_("click",function(){D(e);let n=f().$implicit,l=f(2);return E(l.scrollTo("#"+n.exportedFrom))}),o(2,"code"),s(3),a()()}if(t&2){let e=f().$implicit;d(3),C(e.exportedFrom)}}function __(t,r){t&1&&s(0," This pipe is standalone and needs to be imported separately. ")}function v_(t,r){}function y_(t,r){if(t&1&&g(0,v_,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(20);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Me(2,Lt,e.params,e.name))}}function C_(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),y(4,"p",8),o(5,"p"),s(6," Selector: "),o(7,"code"),s(8),a()(),o(9,"p"),g(10,g_,4,1)(11,__,1,0),a(),g(12,y_,1,5,null,10),a()),t&2){let e=r.$implicit;d(3),C(e.name),d(),h("innerHTML",e.description,de),d(4),C(e.selector),d(2),b(e.exportedFrom!==null?10:11),d(2),b(e.params?12:-1)}}function b_(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Pipes"),a(),H(3,C_,13,5,"div",7,Z),a()),t&2){let e=f();d(3),U(e.data.pipes)}}function x_(t,r){}function w_(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Classes"),a(),g(3,x_,0,0,"ng-template",10),a()),t&2){let e=f(),i=V(26);d(3),h("ngTemplateOutlet",i)("ngTemplateOutletContext",be(2,ka,e.data.classes))}}function S_(t,r){}function T_(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Services"),a(),g(3,S_,0,0,"ng-template",10),a()),t&2){let e=f(),i=V(26);d(3),h("ngTemplateOutlet",i)("ngTemplateOutletContext",be(2,ka,e.data.services))}}function D_(t,r){}function E_(t,r){if(t&1&&(o(0,"app-h4",11),s(1),a(),g(2,D_,0,0,"ng-template",10)),t&2){let e=r.$implicit,i=r.$index,n=f(2).$implicit;f(2);let l=V(24);h("idPrefix",n.name),d(),F("Overload ",i+1,""),d(),h("ngTemplateOutlet",l)("ngTemplateOutletContext",Me(4,Dg,e,n.name+" overload "+(i+1)))}}function A_(t,r){if(t&1&&H(0,E_,3,7,null,null,Z),t&2){let e=f().$implicit;U(e.overloads)}}function F_(t,r){}function M_(t,r){if(t&1&&g(0,F_,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(24);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Me(2,Lt,e,e.name))}}function I_(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),g(4,A_,2,0)(5,M_,1,5,null,10),a()),t&2){let e=r.$implicit,i=f(2);d(3),C(e.name),d(),b(i.isOverloadedFunction(e)?4:5)}}function k_(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Functions"),a(),H(3,I_,6,2,"div",7,Z),a()),t&2){let e=f();d(3),U(e.data.functions)}}function P_(t,r){}function V_(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Interfaces"),a(),g(3,P_,0,0,"ng-template",10),a()),t&2){let e=f(),i=V(26);d(3),h("ngTemplateOutlet",i)("ngTemplateOutletContext",be(2,ka,e.data.interfaces))}}function O_(t,r){}function R_(t,r){if(t&1&&g(0,O_,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(20);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Me(2,Eg,e.typeParams,e.name))}}function L_(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),y(4,"p",8)(5,"app-code",13),g(6,R_,1,5,null,10),a()),t&2){let e=r.$implicit;d(3),C(e.name),d(),h("innerHTML",e.description,de),d(),h("code",e.definition),d(),b(e.typeParams!=null&&e.typeParams.length?6:-1)}}function B_(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Types"),a(),H(3,L_,7,4,"div",7,Z),a()),t&2){let e=f();d(3),U(e.data.types)}}function H_(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),y(4,"p",8)(5,"app-code",13),a()),t&2){let e=r.$implicit;d(3),C(e.name),d(),h("innerHTML",e.description,de),d(),h("code",e.definition)}}function U_(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Enums"),a(),H(3,H_,6,3,"div",7,Z),a()),t&2){let e=f();d(3),U(e.data.enums)}}function N_(t,r){t&1&&s(0),t&2&&C(" All properties are optional, and missing properties will be set to default values.")}function j_(t,r){if(t&1){let e=Y();o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),y(4,"p",8),o(5,"p"),s(6," Requires a value of type "),o(7,"a",9),_("click",function(){let n=D(e).$implicit,l=f(2);return E(l.scrollTo("#"+n.type))}),o(8,"code"),s(9),a()(),s(10,"."),g(11,N_,1,1),a()()}if(t&2){let e=r.$implicit;d(3),C(e.name),d(),h("innerHTML",e.description,de),d(5),C(e.type),d(2),b(e.allOptional?11:-1)}}function Y_(t,r){if(t&1&&(o(0,"section")(1,"app-h2"),s(2,"Injection Tokens"),a(),H(3,j_,12,4,"div",7,Z),a()),t&2){let e=f();d(3),U(e.data.injectionTokens)}}function $_(t,r){t&1&&(o(0,"ard-icon",14),s(1,"delete"),a())}function z_(t,r){t&1&&s(0," Required. ")}function W_(t,r){if(t&1&&(s(0," Optional. Defaults to "),y(1,"code",8),s(2,". ")),t&2){let e=f().$implicit;d(),h("innerHTML",e.default,de)}}function K_(t,r){if(t&1&&(o(0,"tr")(1,"td"),g(2,$_,2,0,"ard-icon",14),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),y(9,"p",8),o(10,"p"),g(11,z_,1,0)(12,W_,3,1),a()()()),t&2){let e=r.$implicit;d(2),b(e.deprecated?2:-1),d(2),C(e.name),d(3),C(e.type),d(2),h("innerHTML",e.description,de),d(2),b(e.required?11:e.default?12:-1)}}function q_(t,r){if(t&1&&(o(0,"app-h4",11),s(1,"Inputs"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),s(6,"Name"),a(),o(7,"th"),s(8,"Type"),a(),o(9,"th"),s(10,"Description"),a()()(),o(11,"tbody"),H(12,K_,13,5,"tr",null,Z),a()()),t&2){let e=r.$implicit,i=r.prefix;h("idPrefix",i),d(12),U(e)}}function G_(t,r){t&1&&(o(0,"ard-icon",15),s(1,"delete"),a())}function Q_(t,r){t&1&&s(0," Required. ")}function X_(t,r){if(t&1&&(s(0," Optional. Defaults to "),y(1,"code",8),s(2,". ")),t&2){let e=f().$implicit;d(),h("innerHTML",e.default,de)}}function Z_(t,r){if(t&1&&(o(0,"tr")(1,"td"),g(2,G_,2,0,"ard-icon",15),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),y(9,"p",8),o(10,"p"),g(11,Q_,1,0)(12,X_,3,1),a()()()),t&2){let e=r.$implicit;d(2),b(e.deprecated?2:-1),d(2),C(e.name),d(3),C(e.type),d(2),h("innerHTML",e.description,de),d(2),b(e.required?11:e.default?12:-1)}}function J_(t,r){if(t&1&&(o(0,"app-h4",11),s(1,"Two-way bindings"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),s(6,"Name"),a(),o(7,"th"),s(8,"Type"),a(),o(9,"th"),s(10,"Description"),a()()(),o(11,"tbody"),H(12,Z_,13,5,"tr",null,Z),a()()),t&2){let e=r.$implicit,i=r.prefix;h("idPrefix",i),d(12),U(e)}}function e0(t,r){t&1&&(o(0,"ard-icon",16),s(1,"delete"),a())}function t0(t,r){if(t&1&&(o(0,"tr")(1,"td"),g(2,e0,2,0,"ard-icon",16),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),y(9,"p",8),a()()),t&2){let e=r.$implicit;d(2),b(e.deprecated?2:-1),d(2),C(e.name),d(3),C(e.type),d(2),h("innerHTML",e.description,de)}}function i0(t,r){if(t&1&&(o(0,"app-h4",11),s(1,"Outputs"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),s(6,"Name"),a(),o(7,"th"),s(8,"Emitted type"),a(),o(9,"th"),s(10,"Description"),a()()(),o(11,"tbody"),H(12,t0,10,4,"tr",null,Z),a()()),t&2){let e=r.$implicit,i=r.prefix;h("idPrefix",i),d(12),U(e)}}function n0(t,r){if(t&1&&(o(0,"app-h6",11),s(1),a()),t&2){let e=f(),i=e.isTypeParams,n=e.prefix;h("idPrefix",n),d(),F("",i?"Type":""," Params")}}function r0(t,r){if(t&1&&(o(0,"app-h5",11),s(1),a()),t&2){let e=f(),i=e.isTypeParams,n=e.prefix;h("idPrefix",n),d(),F("",i?"Type":""," Params")}}function a0(t,r){if(t&1&&(o(0,"app-h4",11),s(1),a()),t&2){let e=f(),i=e.isTypeParams,n=e.prefix;h("idPrefix",n),d(),F("",i?"Type":""," Params")}}function o0(t,r){t&1&&(o(0,"ard-icon",17),s(1,"delete"),a())}function s0(t,r){t&1&&s(0," Required. ")}function l0(t,r){t&1&&s(0," (merged with provided object) ")}function d0(t,r){if(t&1&&(s(0," Optional. Defaults to "),y(1,"code",8),g(2,l0,1,0),s(3,". ")),t&2){let e=f().$implicit;d(),h("innerHTML",e.default,de),d(),b(e.isMergedObject?2:-1)}}function c0(t,r){if(t&1&&(o(0,"tr")(1,"td"),g(2,o0,2,0,"ard-icon",17),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),y(9,"p",8),o(10,"p"),g(11,s0,1,0)(12,d0,4,2),a()()()),t&2){let e=r.$implicit;d(2),b(e.deprecated?2:-1),d(2),C(e.name),d(3),C(e.type),d(2),h("innerHTML",e.description,de),d(2),b(e.required?11:e.required===!1?12:-1)}}function u0(t,r){if(t&1&&(o(0,"table")(1,"thead")(2,"tr")(3,"th"),s(4,"Name"),a(),o(5,"th"),s(6),a(),o(7,"th"),s(8,"Description"),a()()(),o(9,"tbody"),H(10,c0,13,5,"tr",null,Z),a()()),t&2){let e=f(),i=e.$implicit,n=e.isTypeParams;d(6),C(n?"Extends":"Type"),d(4),U(i)}}function p0(t,r){t&1&&(o(0,"p"),s(1,"No params."),a())}function m0(t,r){if(t&1&&g(0,n0,2,2,"app-h6",11)(1,r0,2,2,"app-h5",11)(2,a0,2,2,"app-h4",11)(3,u0,12,1,"table")(4,p0,2,0,"p"),t&2){let e=r.$implicit,i=r.headingType;b(i==="h6"?0:i==="h5"?1:2),d(3),b(e!=null&&e.length?3:4)}}function h0(t,r){if(t&1&&(o(0,"app-h6",11),s(1),a()),t&2){let e,i=f(),n=i.headingText,l=i.prefix;h("idPrefix",l),d(),C((e=n)!==null&&e!==void 0?e:"Properties")}}function f0(t,r){if(t&1&&(o(0,"app-h5",11),s(1),a()),t&2){let e,i=f(),n=i.headingText,l=i.prefix;h("idPrefix",l),d(),C((e=n)!==null&&e!==void 0?e:"Properties")}}function g0(t,r){if(t&1&&(o(0,"app-h4",11),s(1),a()),t&2){let e,i=f(),n=i.headingText,l=i.prefix;h("idPrefix",l),d(),C((e=n)!==null&&e!==void 0?e:"Properties")}}function _0(t,r){t&1&&(o(0,"ard-icon",18),s(1,"delete"),a())}function v0(t,r){if(t&1&&(o(0,"tr")(1,"td"),g(2,_0,2,0,"ard-icon",18),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),y(9,"p",8),a()()),t&2){let e=r.$implicit;d(2),b(e.deprecated?2:-1),d(2),C(e.name),d(3),C(e.type),d(2),h("innerHTML",e.description,de)}}function y0(t,r){if(t&1&&(g(0,h0,2,2,"app-h6",11)(1,f0,2,2,"app-h5",11)(2,g0,2,2,"app-h4",11),o(3,"table")(4,"thead")(5,"tr")(6,"th"),s(7,"Name"),a(),o(8,"th"),s(9,"Type"),a(),o(10,"th"),s(11,"Description"),a()()(),o(12,"tbody"),H(13,v0,10,4,"tr",null,Z),a()()),t&2){let e=r.$implicit,i=r.headingType;b(i==="h6"?0:i==="h5"?1:2),d(13),U(e)}}function C0(t,r){}function b0(t,r){if(t&1&&g(0,C0,0,0,"ng-template",10),t&2){let e=f(),i=e.$implicit,n=e.headingType,l=e.prefix;f();let c=V(20);h("ngTemplateOutlet",c)("ngTemplateOutletContext",Er(2,Fg,i.typeParams,n,l))}}function x0(t,r){}function w0(t,r){if(t&1&&(o(0,"app-h6",11),s(1,"Return type"),a()),t&2){let e=f().prefix;h("idPrefix",e)}}function S0(t,r){if(t&1&&(o(0,"app-h5",11),s(1,"Return type"),a()),t&2){let e=f().prefix;h("idPrefix",e)}}function T0(t,r){if(t&1&&(o(0,"app-h4",11),s(1,"Return type"),a()),t&2){let e=f().prefix;h("idPrefix",e)}}function D0(t,r){if(t&1&&(y(0,"p",8),g(1,b0,1,6,null,10)(2,x0,0,0,"ng-template",10)(3,w0,2,1,"app-h6",11)(4,S0,2,1,"app-h5",11)(5,T0,2,1,"app-h4",11),o(6,"p"),s(7," Return type: "),o(8,"code"),s(9),a()()),t&2){let e=r.$implicit,i=r.headingType,n=r.prefix;f();let l=V(20);h("innerHTML",e.description,de),d(),b(e.typeParams!=null&&e.typeParams.length?1:-1),d(),h("ngTemplateOutlet",l)("ngTemplateOutletContext",Er(6,Ag,e.params,i,n)),d(),b(i==="h6"?3:i==="h5"?4:5),d(6),C(e.returnType)}}function E0(t,r){if(t&1&&(o(0,"p"),s(1," Provided in: "),o(2,"code"),s(3),a()()),t&2){let e=f().$implicit;d(3),F("",e.providedIn," ")}}function A0(t,r){if(t&1&&(o(0,"p"),s(1," Extends: "),o(2,"code"),s(3),a()()),t&2){let e=f().$implicit;d(3),F("",e.extends," ")}}function F0(t,r){}function M0(t,r){if(t&1&&g(0,F0,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(20);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Me(2,Mg,e.typeParams,e.name))}}function I0(t,r){}function k0(t,r){if(t&1&&g(0,I0,0,0,"ng-template",10),t&2){let e=f().$implicit;f(2);let i=V(22);h("ngTemplateOutlet",i)("ngTemplateOutletContext",Me(2,Lt,e.properties,e.name))}}function P0(t,r){}function V0(t,r){if(t&1&&(o(0,"app-h5",11)(1,"code"),s(2),a(),s(3),a(),g(4,P0,0,0,"ng-template",10)),t&2){let e=r.$implicit,i=r.$index,n=f(2).$implicit,l=f(2).$implicit;f(2);let c=V(24);h("idPrefix",l.name+" methods"),d(2),C(n.name),d(),F(" (overload ",i+1,") "),d(),h("ngTemplateOutlet",c)("ngTemplateOutletContext",Me(5,Ll,e,l.name+" methods "+n.name+" overload "+(i+1)))}}function O0(t,r){if(t&1&&H(0,V0,5,8,null,null,Z),t&2){let e=f().$implicit;U(e.overloads)}}function R0(t,r){}function L0(t,r){if(t&1&&(o(0,"app-h5",11)(1,"code"),s(2),a()(),g(3,R0,0,0,"ng-template",10)),t&2){let e=f().$implicit,i=f(2).$implicit;f(2);let n=V(24);h("idPrefix",i.name+" methods"),d(2),C(e.name),d(),h("ngTemplateOutlet",n)("ngTemplateOutletContext",Me(4,Ll,e,i.name+" methods "+e.name))}}function B0(t,r){if(t&1&&g(0,O0,2,0)(1,L0,4,7),t&2){let e=r.$implicit,i=f(4);b(i.isOverloadedFunction(e)?0:1)}}function H0(t,r){if(t&1&&(o(0,"app-h4",11),s(1,"Methods"),a(),H(2,B0,2,1,null,null,Z)),t&2){let e=f().$implicit;h("idPrefix",e.name),d(2),U(e.methods)}}function U0(t,r){if(t&1&&(o(0,"div",7)(1,"app-h3")(2,"code"),s(3),a()(),g(4,E0,4,1,"p")(5,A0,4,1,"p"),y(6,"p",8),g(7,M0,1,5,null,10)(8,k0,1,5,null,10)(9,H0,4,1),a()),t&2){let e=r.$implicit;d(3),C(e.name),d(),b(e.providedIn?4:-1),d(),b(e.extends?5:-1),d(),h("innerHTML",e.description,de),d(),b(e.typeParams!=null&&e.typeParams.length?7:-1),d(),b(e.properties!=null&&e.properties.length?8:-1),d(),b(e.methods!=null&&e.methods.length?9:-1)}}function N0(t,r){if(t&1&&H(0,U0,10,7,"div",7,Z),t&2){let e=r.$implicit;U(e)}}var Bl=(()=>{class t{constructor(){this._route=M(vi),this.data=this._route.snapshot.data}scrollTo(e){Hi(e,{offset:"20%"})}isString(e){return!Array.isArray(e)}isOverloadedFunction(e){return"overloads"in e}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-api-page"]],decls:27,vars:12,consts:[["inputsTable",""],["twoWayBindingsTable",""],["outputsTable",""],["paramsTable",""],["propertiesTable",""],["functionTable",""],["classOrInterface",""],[1,"item-container"],[3,"innerHTML"],[3,"click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"idPrefix"],["language","xml","styled","",3,"code"],["language","typescript","styled","",3,"code"],["title","This input is deprecated."],["title","This two-way binding is deprecated."],["title","This output is deprecated."],["title","This param is deprecated."],["title","This property is deprecated."]],template:function(i,n){i&1&&(o(0,"app-h1"),s(1),a(),g(2,Lg,5,0,"section")(3,r_,5,0,"section")(4,f_,5,0,"section")(5,b_,5,0,"section")(6,w_,4,4,"section")(7,T_,4,4,"section")(8,k_,5,0,"section")(9,V_,4,4,"section")(10,B_,5,0,"section")(11,U_,5,0,"section")(12,Y_,5,0,"section")(13,q_,14,1,"ng-template",null,0,oe)(15,J_,14,1,"ng-template",null,1,oe)(17,i0,14,1,"ng-template",null,2,oe)(19,m0,5,2,"ng-template",null,3,oe)(21,y0,15,1,"ng-template",null,4,oe)(23,D0,10,10,"ng-template",null,5,oe)(25,N0,2,0,"ng-template",null,6,oe)),i&2&&(d(),F("API reference for ",n.data.name," \u2014 Ardium UI"),d(),b(n.data.modules?2:-1),d(),b(n.data.components?3:-1),d(),b(n.data.directives?4:-1),d(),b(n.data.pipes?5:-1),d(),b(n.data.classes?6:-1),d(),b(n.data.services?7:-1),d(),b(n.data.functions?8:-1),d(),b(n.data.interfaces?9:-1),d(),b(n.data.types?10:-1),d(),b(n.data.enums?11:-1),d(),b(n.data.injectionTokens?12:-1))},dependencies:[ae,ue,J,Ne,pt,Ni,It,yt,ei,ti,cr,ur,pr],styles:[`app-api-page{font-size:.9375rem}app-api-page h1{padding-bottom:1rem}app-api-page h2{font-weight:300;font-size:1.5rem;width:100%;border-bottom:1px solid var(--ard-detail-ultralight);padding-bottom:.5rem;margin-bottom:1rem}app-api-page h3{font-weight:500;font-size:1.25rem}app-api-page td{position:relative;min-width:100px}app-api-page table ard-icon{position:absolute;right:100%;color:rgb(var(--ard-danger-700))}app-api-page p ul{padding-bottom:0}
`],encapsulation:2})}}return t})();var mr=(()=>{class t{constructor(){this.contentToCopy=m.required()}executeCopy(){navigator.clipboard.writeText(this.contentToCopy())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-copy-button"]],inputs:{contentToCopy:[1,"contentToCopy"]},decls:3,vars:0,consts:[[1,"copy-button",3,"click"]],template:function(i,n){i&1&&(o(0,"ard-icon-button",0),_("click",function(){return n.executeCopy()}),o(1,"ard-icon"),s(2,"content-copy"),a()())},dependencies:[Ke,We,ae,ue],encapsulation:2})}}return t})();var j0=["containerLeft"],Y0=["containerRight"],$0=[[["","side","left"]],[["","side","right"]]],z0=["[side='left']","[side='right']"];function W0(t,r){if(t&1&&y(0,"app-copy-button",8),t&2){let e=f();h("contentToCopy",e.contentToCopyLeft())}}function K0(t,r){}function q0(t,r){if(t&1&&g(0,K0,0,0,"ng-template",9),t&2){f();let e=V(22);h("ngTemplateOutlet",e)}}function G0(t,r){if(t&1&&y(0,"app-copy-button",8),t&2){let e=f();h("contentToCopy",e.contentToCopyRight())}}function Q0(t,r){}function X0(t,r){if(t&1&&g(0,Q0,0,0,"ng-template",9),t&2){f();let e=V(22);h("ngTemplateOutlet",e)}}function Z0(t,r){if(t&1){let e=Y();o(0,"ard-icon-button",12),_("click",function(){D(e);let n=f(2);return E(n.scrollSync.set(!n.scrollSync()))}),y(1,"ard-icon",13),a()}if(t&2){let e=f(2);h("title",(e.scrollSync(),"Turn off scroll sync")),d(),h("icon",e.scrollSync()?"sync":"sync_disabled")}}function J0(t,r){if(t&1){let e=Y();o(0,"ard-icon-button",12),_("click",function(){D(e);let n=f(2);return E(n.verticalLayout.set(!n.verticalLayout()))}),y(1,"ard-icon",13),a()}if(t&2){let e=f(2);h("title",e.verticalLayout()?"Current view: vertical":"Current view: side-by-side"),d(),h("icon",e.verticalLayout()?"splitscreen":"view_column_2")}}function ev(t,r){if(t&1&&g(0,Z0,2,2,"ard-icon-button",11)(1,J0,2,2,"ard-icon-button",11),t&2){let e=f();b(e.allowScrollSync()?0:-1),d(),b(e.allowLayoutChange()?1:-1)}}var un={Off:"off",Left:"left",Right:"right",Both:"both"},Hl=(()=>{class t{constructor(){this.containerLeft=Pe("containerLeft"),this.containerRight=Pe("containerRight"),this.textLeft=m.required(),this.textRight=m.required(),this.contentToCopyLeft=m(""),this.contentToCopyRight=m(""),this.allowScrollSync=m(!1,{transform:e=>st(e)}),this.allowLayoutChange=m(!1,{transform:e=>st(e)}),this.allowCopy=m(un.Both),this.allowCopyLeft=x(()=>this.allowCopy()===un.Left||this.allowCopy()===un.Both),this.allowCopyRight=x(()=>this.allowCopy()===un.Right||this.allowCopy()===un.Both),this.scrollSync=wt(!1),this.verticalLayout=wt(!1)}onContainerLeftScroll(){if(this.scrollSync())return;let[e,i]=[this.containerLeft(),this.containerRight()];!e||!i||i.nativeElement.scrollTo(e.nativeElement.scrollLeft,0)}onContainerRightScroll(){if(this.scrollSync())return;let[e,i]=[this.containerLeft(),this.containerRight()];!e||!i||e.nativeElement.scrollTo(i.nativeElement.scrollLeft,0)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-two-pane-container"]],viewQuery:function(i,n){i&1&&(Ve(n.containerLeft,j0,5),Ve(n.containerRight,Y0,5)),i&2&&ce(2)},inputs:{textLeft:[1,"textLeft"],textRight:[1,"textRight"],contentToCopyLeft:[1,"contentToCopyLeft"],contentToCopyRight:[1,"contentToCopyRight"],allowScrollSync:[1,"allowScrollSync"],allowLayoutChange:[1,"allowLayoutChange"],allowCopy:[1,"allowCopy"],scrollSync:[1,"scrollSync"],verticalLayout:[1,"verticalLayout"]},outputs:{scrollSync:"scrollSyncChange",verticalLayout:"verticalLayoutChange"},ngContentSelectors:z0,decls:23,vars:8,consts:[["containerLeft",""],["containerRight",""],["buttons",""],[1,"two-pane-container"],[1,"content-container"],[1,"top-bar"],[1,"heading"],[1,"buttons"],[3,"contentToCopy"],[3,"ngTemplateOutlet"],[1,"content",3,"scroll"],[3,"title"],[3,"click","title"],[3,"icon"]],template:function(i,n){if(i&1){let l=Y();j($0),o(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6),s(4),a(),o(5,"div",7),g(6,W0,1,1,"app-copy-button",8)(7,q0,1,1,null,9),a()(),o(8,"div",10,0),_("scroll",function(){return D(l),E(n.onContainerLeftScroll())}),B(10),a()(),o(11,"div",4)(12,"div",5)(13,"div",6),s(14),a(),o(15,"div",7),g(16,G0,1,1,"app-copy-button",8)(17,X0,1,1,null,9),a()(),o(18,"div",10,1),_("scroll",function(){return D(l),E(n.onContainerRightScroll())}),B(20,1),a()()(),g(21,ev,2,2,"ng-template",null,2,oe)}i&2&&(te("vertical",n.verticalLayout()),d(4),C(n.textLeft()),d(2),b(n.allowCopyLeft()?6:-1),d(),b(n.verticalLayout()?7:-1),d(7),C(n.textRight()),d(2),b(n.allowCopyRight()?16:-1),d(),b(n.verticalLayout()?-1:17))},dependencies:[J,Ne,mr,Ke,We,ae,ue],styles:[".two-pane-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;border-radius:.5rem;border:1px solid var(--ard-detail-ultralight);margin:1.25rem 0;overflow:hidden}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{max-width:100%;overflow:hidden}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]:first-of-type{border-right:1px solid var(--ard-detail-ultralight);position:relative}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{padding:.5rem 1.25rem 0;font-weight:500}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;position:relative;top:.25rem;right:.25rem}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{max-width:100%;overflow:auto}.two-pane-container.vertical[_ngcontent-%COMP%]{grid-template-columns:1fr}.two-pane-container.vertical[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]:first-of-type{border-right:none;border-bottom:1px solid var(--ard-detail-ultralight)}"]})}}return t})();var tv=["*"],Ul=(()=>{class t{constructor(){this.code=m.required(),this.codeLanguage=m.required()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-example-with-result"]],inputs:{code:[1,"code"],codeLanguage:[1,"codeLanguage"]},ngContentSelectors:tv,decls:4,vars:3,consts:[["textLeft","Code","textRight","Result","allowCopy","left",3,"verticalLayout"],["side","left","styled","false","noScroll","",3,"language","code"],["side","right"]],template:function(i,n){i&1&&(j(),o(0,"app-two-pane-container",0),y(1,"app-code",1),Wi(2,2),B(3),Ki(),a()),i&2&&(h("verticalLayout",!0),d(),h("language",n.codeLanguage())("code",n.code()))},dependencies:[Hl,Ni],encapsulation:2})}}return t})();var Nl={FT:"Fatal",NF:"Non-Fatal",IS:"Impossible State",WA:"Warning"};var jl=(()=>{class t{constructor(){this.severity=m.required({alias:"code",transform:e=>{let i=e.slice(4,6);return Nl[i]}})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-exception-severity"]],hostVars:2,hostBindings:function(i,n){i&2&&ge("severity-"+n.severity().toLowerCase().replace(" ","-"))},inputs:{severity:[1,"code","severity"]},decls:1,vars:1,template:function(i,n){i&1&&s(0),i&2&&C(n.severity())},styles:["[_nghost-%COMP%]{padding:.125rem .25rem;border-radius:4px}.severity-fatal[_nghost-%COMP%]{background-color:rgb(var(--ard-danger-500));color:var(--ard-text-alt)}.severity-non-fatal[_nghost-%COMP%]{background-color:#ff7707;color:var(--ard-text-alt)}.severity-impossible-state[_nghost-%COMP%]{background-color:#7707ff;color:var(--ard-text-alt)}.severity-warning[_nghost-%COMP%]{background-color:rgb(var(--ard-warn-500));color:var(--ard-text-alt)}"]})}}return t})();var iv=(t,r)=>r.name,nv=(t,r)=>r.code;function rv(t,r){if(t&1&&(o(0,"p"),s(1),a()),t&2){let e=f();d(),F("",e.data.name," doesn't raise any own exceptions.")}}function av(t,r){if(t&1&&y(0,"p",2),t&2){let e=f().$implicit;h("innerHTML",e.description,de)}}function ov(t,r){if(t&1&&y(0,"p",2),t&2){let e=r.$implicit;h("innerHTML",e,de)}}function sv(t,r){if(t&1&&H(0,ov,1,1,"p",2,Z),t&2){let e=f().$implicit;U(e.description)}}function lv(t,r){if(t&1&&(o(0,"app-example-with-result",3)(1,"p",4),s(2),a()()),t&2){let e=r.$implicit;h("code",e.code)("codeLanguage",e.codeLanguage),d(2),C(e.result)}}function dv(t,r){if(t&1&&H(0,lv,3,3,"app-example-with-result",3,Z),t&2){let e=f().$implicit;U(e.exampleResults)}}function cv(t,r){if(t&1&&(o(0,"app-h3",0)(1,"code"),s(2),a()(),o(3,"p")(4,"strong"),s(5,"Severity: "),a(),y(6,"app-exception-severity",1),a(),y(7,"blockquote",2),g(8,av,1,1,"p",2)(9,sv,2,0)(10,dv,2,0)),t&2){let e=r.$implicit,i=f(3);h("htmlId",e.code),d(2),F(" ",e.code," "),d(4),h("code",e.code),d(),h("innerHTML",e.exceptionText,de),d(),b(i.isString(e.description)?8:9),d(2),b(e.exampleResults!=null&&e.exampleResults.length?10:-1)}}function uv(t,r){if(t&1&&(o(0,"app-h2"),s(1),a(),H(2,cv,11,6,null,null,nv)),t&2){let e=r.$implicit;d(),C(e.name),d(),U(e.exceptions)}}function pv(t,r){if(t&1&&H(0,uv,4,1,null,null,iv),t&2){let e=f();U(e.data.exceptions)}}var Yl=(()=>{class t{constructor(){this._route=M(vi),this.data=this._route.snapshot.data}scrollTo(e){Hi(e,{offset:"20%"})}isString(e){return!Array.isArray(e)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-exceptions-page"]],decls:4,vars:2,consts:[[3,"htmlId"],[3,"code"],[3,"innerHTML"],[3,"code","codeLanguage"],[1,"example-with-result-result"]],template:function(i,n){i&1&&(o(0,"app-h1"),s(1),a(),g(2,rv,2,1,"p")(3,pv,2,0)),i&2&&(d(),F("Exception list for ",n.data.name," \u2014 Ardium UI"),d(),b(n.data.exceptions!=null&&n.data.exceptions.length?3:2))},dependencies:[jl,Ul,It,yt,ei,ti],styles:[".example-with-result-result[_ngcontent-%COMP%]{padding:1.25rem;font-family:monospace}"]})}}return t})();function mv(t,r){if(t&1&&(o(0,"p"),s(1," Inherits from: "),o(2,"code"),s(3),a()()),t&2){let e=f().$implicit;d(3),C(e.inheritsFrom)}}function hv(t,r){if(t&1&&(o(0,"tr")(1,"td")(2,"code"),s(3),a()(),o(4,"td")(5,"code"),s(6),a()(),o(7,"td"),y(8,"p",0),g(9,mv,4,1,"p"),a()()),t&2){let e=r.$implicit;d(3),C(e.name),d(3),C(e.default),d(2),h("innerHTML",e.description,de),d(),b(e.inheritsFrom?9:-1)}}function fv(t,r){if(t&1&&(o(0,"section")(1,"p"),s(2),a(),o(3,"table")(4,"thead")(5,"tr")(6,"th"),s(7,"Variable"),a(),o(8,"th"),s(9,"Default value"),a(),o(10,"th"),s(11,"Description"),a()()(),o(12,"tbody"),H(13,hv,10,4,"tr",null,Z),a()()()),t&2){let e=f();d(2),F("The following CSS variables can be used to customize the styling of the ",e.data.name," component:"),d(11),U(e.data.variables)}}function gv(t,r){if(t&1&&(o(0,"p"),s(1),a()),t&2){let e=f();d(),F("",e.data.name||"This component"," doesn't have any style customizations.")}}var $l=(()=>{class t{constructor(){this._route=M(vi),this.data=this._route.snapshot.data}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-styling-page"]],decls:4,vars:2,consts:[[3,"innerHTML"]],template:function(i,n){i&1&&(o(0,"app-h1"),s(1),a(),g(2,fv,15,1,"section")(3,gv,2,1,"p")),i&2&&(d(),F("Styling guide for ",n.data.name," \u2014 Ardium UI"),d(),b(n.data.variables&&n.data.variables.length>0?2:3))},dependencies:[ae,J,pt,It,yt],styles:[`app-api-page{font-size:.9375rem}app-api-page h1{padding-bottom:1rem}app-api-page h2{font-weight:300;font-size:1.5rem;width:100%;border-bottom:1px solid var(--ard-detail-ultralight);padding-bottom:.5rem;margin-bottom:1rem}app-api-page h3{font-weight:500;font-size:1.25rem}app-api-page td{position:relative;min-width:100px}app-api-page table ard-icon{position:absolute;right:100%;color:rgb(var(--ard-danger-700))}
`],encapsulation:2})}}return t})();var zl=(()=>{class t{constructor(){this._router=M(wn),this.currentRoute=Oe(this._router.events.pipe(ct(e=>e instanceof no),Be(e=>e.url)))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function _v(t,r){if(t&1&&(o(0,"a",3),s(1),a()),t&2){let e=r.$implicit,i=f();te("active",i.isActiveRoute(e)),h("routerLink","./"+e),d(),C(e)}}var Kl=(()=>{class t{constructor(){this.POSSIBLE_TABS=["overview","api","styling","exceptions"],this._navService=M(zl)}isActiveRoute(e){return this._navService.currentRoute()?.endsWith(e)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-common"]],decls:5,vars:0,consts:[[1,"component-article"],[1,"page-tabber"],[3,"routerLink","active"],[3,"routerLink"]],template:function(i,n){i&1&&(o(0,"article",0)(1,"div",1),H(2,_v,2,4,"a",2,Z),a(),y(4,"router-outlet"),a()),i&2&&(d(2),U(n.POSSIBLE_TABS))},dependencies:[pt,ro,yi],styles:[".page-tabber[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid var(--ard-detail-ultralight)}.page-tabber[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:10rem;height:3rem;display:grid;place-items:center;text-transform:uppercase;text-decoration:none;color:var(--ard-text2);font-size:.875rem;font-weight:500;background-color:transparent;transition:background-color .1s ease-in-out;border-bottom:2px solid transparent}.page-tabber[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .page-tabber[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible{background-color:rgba(var(--ard-overlay-rgb),5%)}.page-tabber[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{border-bottom-color:rgb(var(--ard-primary-500))}"]})}}return t})();var ql=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-under-construction"]],decls:12,vars:0,consts:[[1,"text"],[1,"oops"],[1,"long"],[1,"image"],["src","/ardium-ui-docs/assets/under-construction.svg","alt","Laptop marked as under construction with workers and a crane around it"]],template:function(i,n){i&1&&(o(0,"article")(1,"div",0)(2,"app-h1")(3,"span",1),s(4,"Oops!"),a(),y(5,"br"),o(6,"span",2),s(7,"Under construction"),a()(),o(8,"p"),s(9,"This documentation page is currently under construction. Come back soon!"),a()(),o(10,"div",3),y(11,"img",4),a()())},dependencies:[It,yt],styles:['@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKcg72j00.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKew72j00.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKcw72j00.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKfA72j00.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKcQ72j00.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCs6KVjbNBYlgoKfw72.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3jvWyNL4U.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3jtGyNL4U.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3jvGyNL4U.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3js2yNL4U.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3jvmyNL4U.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v21/4iCv6KVjbNBYlgoCjC3jsGyN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}article[_ngcontent-%COMP%]{height:100%;display:grid;align-items:center;grid-template-columns:4fr 6fr;font-family:Ubuntu,sans-serif;max-width:70rem;box-sizing:content-box;margin:0 auto}.text[_ngcontent-%COMP%]{padding-bottom:8rem}h1[_ngcontent-%COMP%]{font-weight:500;color:rgb(var(--ard-primary-900));padding-bottom:1.5rem}h1[_ngcontent-%COMP%]   .oops[_ngcontent-%COMP%]{letter-spacing:.1em;font-size:5rem}h1[_ngcontent-%COMP%]   .long[_ngcontent-%COMP%]{font-size:2.625rem;overflow:visible;white-space:nowrap}p[_ngcontent-%COMP%]{opacity:50%;font-size:1rem}@media only screen and (min-width: 1340px){article[_ngcontent-%COMP%]{padding-right:10rem}}@media only screen and (min-width: 1700px){article[_ngcontent-%COMP%]{padding-right:20rem}}']})}}return t})();var Bt={DataDisplay:"Data Display",Buttons:"Buttons",Layout:"Layout",FormElements:"Form Elements",Popups:"Popups",Feedback:"Feedback",Stars:"Stars",CustomSignals:"Custom Signals"};function qS(t,r,e,i,n,l,c,p,w){return l||(l={name:r}),{path:t,name:r,desc:e,img:p,component:Kl,groupName:w,children:[{path:"overview",component:i},{path:"api",component:Bl,data:n},{path:"styling",component:$l,data:c},{path:"exceptions",component:Yl,data:l},{path:"**",redirectTo:"overview"}]}}function GS(t,r,e,i){return{path:t,name:r,desc:e,groupName:i,img:"assets/placeholder.jpg",component:ql}}var Gl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["button-basic-example"]],decls:17,vars:0,consts:[[1,"grid"],["appearance","raised-strong"],["appearance","transparent"],["color","danger","appearance","outlined-strong"],["variant","pill"],["appearance","outlined","variant","sharp"],["appearance","flat","color","success","vertical",""],["filled",""]],template:function(i,n){i&1&&(o(0,"div",0)(1,"ard-button",1),s(2,"Button"),a(),o(3,"ard-button",2),s(4,"Button"),a(),o(5,"ard-button",3),s(6,"Button"),a(),o(7,"ard-button",4),s(8,"Button"),a(),o(9,"ard-button",5)(10,"ard-icon"),s(11,"favorite"),a(),s(12," Button "),a(),o(13,"ard-button",6)(14,"ard-icon",7),s(15,"favorite"),a(),s(16," Button "),a()())},dependencies:[he,ve,ae,ue],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1.5rem;justify-items:center;max-width:30rem}"]})}}return t})();var eT={component:Gl,html:`<div class="grid">\r
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
`};var Ql=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["button-compact-example"]],decls:4,vars:0,consts:[["appearance","raised-strong"],["appearance","raised-strong","compact",""]],template:function(i,n){i&1&&(o(0,"ard-button",0),s(1,"Normal"),a(),o(2,"ard-button",1),s(3,"Compact"),a())},dependencies:[he,ve],styles:["[_nghost-%COMP%]{display:flex;gap:1rem}"]})}}return t})();var aT={component:Ql,html:`<ard-button appearance="raised-strong">Normal</ard-button>\r
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
`};var Xl=(()=>{class t{onClick(){console.log("Button clicked!")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["button-disabled-example"]],decls:4,vars:0,consts:[["disabled","","title","This button is disabled!",3,"click"],["disabled","","pointerEventsWhenDisabled","","title","This button is disabled!",3,"click"]],template:function(i,n){i&1&&(o(0,"ard-button",0),_("click",function(){return n.onClick()}),s(1,` Disabled
`),a(),o(2,"ard-button",1),_("click",function(){return n.onClick()}),s(3,` Disabled with pointer events
`),a())},dependencies:[he,ve],styles:["[_nghost-%COMP%]{display:flex;gap:1rem}"]})}}return t})();var cT={component:Xl,html:`<ard-button disabled (click)="onClick()" title="This button is disabled!">\r
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
`};var Zl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["button-icon-example"]],decls:7,vars:0,consts:[["appearance","outlined-strong","color","danger"],["appearance","outlined-strong","color","success","square",""]],template:function(i,n){i&1&&(o(0,"ard-button",0)(1,"ard-icon"),s(2,"delete"),a(),s(3,` Delete
`),a(),o(4,"ard-button",1)(5,"ard-icon"),s(6,"check"),a()())},dependencies:[he,ve,ae,ue],styles:["[_nghost-%COMP%]{display:flex;gap:1rem}ard-button[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{height:1.5rem;width:1.5rem;fill:currentColor}"]})}}return t})();var fT={component:Zl,html:`<ard-button appearance="outlined-strong" color="danger">\r
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
`};var Jl=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["button-link-example"]],decls:2,vars:0,consts:[["ard-button","","href","https://google.com","target","_blank","rel","noopener noreferrer"]],template:function(i,n){i&1&&(o(0,"a",0),s(1,` Open Google
`),a())},dependencies:[he,pi],encapsulation:2})}}return t})();var CT={component:Jl,html:`<a ard-button href="https://google.com" target="_blank" rel="noopener noreferrer">\r
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
`};var ed=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["button-group-basic-example"]],decls:8,vars:0,consts:[["square",""]],template:function(i,n){i&1&&(o(0,"ard-button-group")(1,"ard-button"),s(2,"Archive"),a(),o(3,"ard-button"),s(4,"Delete"),a(),o(5,"ard-button",0)(6,"ard-icon"),s(7,"more horiz"),a()()())},dependencies:[vt,_t,he,ve,ae,ue],encapsulation:2})}}return t})();var TT={component:ed,html:`<ard-button-group>\r
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
`};var td=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["button-group-compact-example"]],decls:10,vars:0,consts:[["compact",""],["appearance","outlined"]],template:function(i,n){i&1&&(o(0,"ard-button-group",0)(1,"ard-button",1),s(2,"Edit"),a(),o(3,"ard-button-group")(4,"ard-button",1),s(5,"Copy"),a(),o(6,"ard-button",1),s(7,"Paste"),a()(),o(8,"ard-button",1),s(9,"Delete"),a()())},dependencies:[vt,_t,he,ve],encapsulation:2})}}return t})();var MT={component:td,html:`<ard-button-group compact>\r
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
`};var id=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["button-group-disabled-example"]],decls:9,vars:0,consts:[["appearance","outlined"],["appearance","outlined","disabled",""],["appearance","outlined","color","danger","disabled",""]],template:function(i,n){i&1&&(o(0,"ard-button-group")(1,"ard-button",0),s(2,"Undo"),a(),o(3,"ard-button",1),s(4,"Redo"),a(),o(5,"ard-button",0),s(6,"Save"),a(),o(7,"ard-button",2),s(8,"Delete"),a()())},dependencies:[vt,_t,he,ve],encapsulation:2})}}return t})();var OT={component:id,html:`<ard-button-group>\r
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
`};var nd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["button-group-mixed-elements-example"]],decls:7,vars:0,consts:[["appearance","outlined"],["ard-button","","appearance","outlined","type","button"],["ard-button","","appearance","outlined","href","#"]],template:function(i,n){i&1&&(o(0,"ard-button-group")(1,"ard-button",0),s(2,"Component Button"),a(),o(3,"button",1),s(4,"Native Button"),a(),o(5,"a",2),s(6,"Link Button"),a()())},dependencies:[vt,_t,he,ve,pi,ae],encapsulation:2})}}return t})();var UT={component:nd,html:`<ard-button-group>\r
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
`};var rd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["button-group-nested-example"]],decls:21,vars:0,consts:[["appearance","outlined","square",""]],template:function(i,n){i&1&&(o(0,"ard-button-group")(1,"ard-button-group")(2,"ard-button",0)(3,"ard-icon"),s(4,"format_bold"),a()(),o(5,"ard-button",0)(6,"ard-icon"),s(7,"format_italic"),a()(),o(8,"ard-button",0)(9,"ard-icon"),s(10,"format_underlined"),a()()(),o(11,"ard-button-group")(12,"ard-button",0)(13,"ard-icon"),s(14,"format_align_left"),a()(),o(15,"ard-button",0)(16,"ard-icon"),s(17,"format_align_center"),a()(),o(18,"ard-button",0)(19,"ard-icon"),s(20,"format_align_right"),a()()()())},dependencies:[vt,_t,he,ve,ae,ue],encapsulation:2})}}return t})();var zT={component:rd,html:`<ard-button-group>\r
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
`};var ad=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["button-group-vertical-example"]],decls:7,vars:0,consts:[["vertical",""],["appearance","outlined","square",""]],template:function(i,n){i&1&&(o(0,"ard-button-group",0)(1,"ard-button",1)(2,"ard-icon"),s(3,"add"),a()(),o(4,"ard-button",1)(5,"ard-icon"),s(6,"remove"),a()()())},dependencies:[vt,_t,he,ve,ae,ue],encapsulation:2})}}return t})();var QT={component:ad,html:`<ard-button-group vertical>\r
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
`};var od=(()=>{class t{constructor(){this.modalOpen=T(!1),this.dialogOpen=T(!1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["dialog-basic-example"]],decls:8,vars:2,consts:[[3,"click"],["heading","Basic modal example",3,"openChange","open"],["heading","Basic dialog example",3,"openChange","open"]],template:function(i,n){i&1&&(o(0,"button",0),_("click",function(){return n.modalOpen.set(!0)}),s(1,"Open modal"),a(),o(2,"button",0),_("click",function(){return n.dialogOpen.set(!0)}),s(3,"Open dialog"),a(),o(4,"ard-modal",1),q("openChange",function(c){return K(n.modalOpen,c)||(n.modalOpen=c),c}),s(5,` This is the modal content
`),a(),o(6,"ard-dialog",2),q("openChange",function(c){return K(n.dialogOpen,c)||(n.dialogOpen=c),c}),s(7,` This is the dialog content
`),a()),i&2&&(d(4),W("open",n.modalOpen),d(2),W("open",n.dialogOpen))},dependencies:[Ta,Sa,Bi,Li],styles:["button[_ngcontent-%COMP%]{margin-right:.5rem}"]})}}return t})();var nD={component:od,html:`<button (click)="modalOpen.set(true)">Open modal</button>\r
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
`};var sd=(()=>{class t{constructor(){this.deleteConfirmationOpen=T(!1),this.canDelete=T(!1),this._timeout=null}openDeleteConfirmation(){this.deleteConfirmationOpen.set(!0),this.canDelete.set(!1),this._timeout=setTimeout(()=>{this.canDelete.set(!0)},3e3)}ngOnDestroy(){this._timeout&&clearTimeout(this._timeout)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["dialog-delete-confirmation-example"]],decls:4,vars:2,consts:[["appearance","outlined-strong","color","danger",3,"click"],["heading","Delete confirmation","rejectButtonText","Keep","rejectButtonAppearance","transparent","confirmButtonText","Delete","confirmButtonColor","danger","confirmButtonAppearance","outlined-strong",3,"openChange","open","canConfirm"]],template:function(i,n){i&1&&(o(0,"ard-button",0),_("click",function(){return n.openDeleteConfirmation()}),s(1,"Delete something"),a(),o(2,"ard-dialog",1),q("openChange",function(c){return K(n.deleteConfirmationOpen,c)||(n.deleteConfirmationOpen=c),c}),s(3,` Are you sure you want to delete this?
`),a()),i&2&&(d(2),W("open",n.deleteConfirmationOpen),h("canConfirm",n.canDelete()))},dependencies:[Bi,Li,he,ve],encapsulation:2})}}return t})();var cD={component:sd,html:`<ard-button appearance="outlined-strong" color="danger" (click)="openDeleteConfirmation()">Delete something</ard-button>\r
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
`};function vv(t,r){if(t&1&&(o(0,"tr")(1,"td")(2,"code"),s(3),a()(),o(4,"td")(5,"code"),s(6),a()()()),t&2){let e=r.$implicit;d(3),F("(",e[0],")"),d(3),F("$event = ",e[1],"")}}function yv(t,r){t&1&&(o(0,"tr")(1,"td"),s(2,"Emitted events will be shown here."),a()())}var ld=(()=>{class t{constructor(){this.dialogOpen=T(!1),this.dialogEventLog=T([])}addEvent(e,i){this.dialogEventLog.update(n=>[...n,[e,typeof i=="string"?`"${i}"`:String(i)]])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["dialog-emitted-events-example"]],decls:11,vars:2,consts:[[3,"click"],["heading","Dialog events",3,"openChange","close","reject","confirm","open"]],template:function(i,n){i&1&&(o(0,"button",0),_("click",function(){return n.dialogOpen.set(!0)}),s(1,"Open dialog"),a(),o(2,"table")(3,"tbody"),H(4,vv,7,2,"tr",null,Z,!1,yv,3,0,"tr"),a()(),o(7,"ard-dialog",1),q("openChange",function(c){return K(n.dialogOpen,c)||(n.dialogOpen=c),c}),_("openChange",function(c){return n.addEvent("openChange",c)})("close",function(c){return n.addEvent("close",c)})("reject",function(){return n.addEvent("reject")})("confirm",function(){return n.addEvent("confirm")}),s(8,` Dialog content
`),a(),o(9,"button",0),_("click",function(){return n.dialogEventLog.set([])}),s(10,"Clear events"),a()),i&2&&(d(4),U(n.dialogEventLog()),d(3),W("open",n.dialogOpen))},dependencies:[Bi,Li],styles:["table[_ngcontent-%COMP%]{margin-top:1rem;max-width:20rem}"]})}}return t})();var _D={component:ld,html:`<button (click)="dialogOpen.set(true)">Open dialog</button>\r
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
`};var dd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["divider-basic-example"]],decls:9,vars:0,template:function(i,n){i&1&&(o(0,"section")(1,"div"),s(2,"Section one"),a(),y(3,"ard-divider"),o(4,"div"),s(5,"Section two"),a(),y(6,"ard-divider"),o(7,"div"),s(8,"Section three"),a()())},dependencies:[et,Mt],styles:["[_nghost-%COMP%]{display:block}section[_ngcontent-%COMP%]{border:1px solid #d4dbe8;border-radius:.75rem;padding:.75rem}section[_ngcontent-%COMP%] > :where(div[_ngcontent-%COMP%]){padding-inline:.25rem}"]})}}return t})();var xD={component:dd,html:`<section>\r
  <div>Section one</div>\r
  <ard-divider />\r
  <div>Section two</div>\r
  <ard-divider />\r
  <div>Section three</div>\r
</section>\r
`,scss:`:host {\r
  display: block;\r
}\r
\r
section {\r
  border: 1px solid #d4dbe8;\r
  border-radius: 0.75rem;\r
  padding: 0.75rem;\r
}\r
\r
section > :where(div) {\r
  padding-inline: 0.25rem;\r
}\r
`,ts:`import { Component } from '@angular/core';\r
import { ArdiumDividerModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'divider-basic-example',\r
  standalone: true,\r
  imports: [ArdiumDividerModule],\r
  templateUrl: './divider-basic-example.html',\r
  styleUrl: './divider-basic-example.scss',\r
})\r
export class DividerBasicExample {}\r
`};var cd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["divider-content-alignment-example"]],decls:15,vars:0,consts:[["textAlign","center"],["textAlign","start"],["textAlign","end"]],template:function(i,n){i&1&&(o(0,"section")(1,"div"),s(2,"Alpha"),a(),o(3,"ard-divider",0),s(4,"Center"),a(),o(5,"div"),s(6,"Beta"),a(),o(7,"ard-divider",1),s(8,"Start"),a(),o(9,"div"),s(10,"Gamma"),a(),o(11,"ard-divider",2),s(12,"End"),a(),o(13,"div"),s(14,"Delta"),a()())},dependencies:[et,Mt],styles:["[_nghost-%COMP%]{display:block}section[_ngcontent-%COMP%]{border:1px solid #d4dbe8;border-radius:.75rem;padding:.75rem}section[_ngcontent-%COMP%] > ard-divider[_ngcontent-%COMP%]{color:#354c76;font-weight:600}"]})}}return t})();var ED={component:cd,html:`<section>\r
  <div>Alpha</div>\r
  <ard-divider textAlign="center">Center</ard-divider>\r
  <div>Beta</div>\r
  <ard-divider textAlign="start">Start</ard-divider>\r
  <div>Gamma</div>\r
  <ard-divider textAlign="end">End</ard-divider>\r
  <div>Delta</div>\r
</section>\r
`,scss:`:host {\r
  display: block;\r
}\r
\r
section {\r
  border: 1px solid #d4dbe8;\r
  border-radius: 0.75rem;\r
  padding: 0.75rem;\r
}\r
\r
section > ard-divider {\r
  color: #354c76;\r
  font-weight: 600;\r
}\r
`,ts:`import { Component } from '@angular/core';\r
import { ArdiumDividerModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'divider-content-alignment-example',\r
  standalone: true,\r
  imports: [ArdiumDividerModule],\r
  templateUrl: './divider-content-alignment-example.html',\r
  styleUrl: './divider-content-alignment-example.scss',\r
})\r
export class DividerContentAlignmentExample {}\r
`};var ud=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["divider-custom-style-example"]],decls:9,vars:0,consts:[["textAlign","start"]],template:function(i,n){i&1&&(o(0,"section")(1,"div"),s(2,"Default style"),a(),o(3,"ard-divider"),s(4,"Default"),a(),o(5,"div"),s(6,"Customized style"),a(),o(7,"ard-divider",0),s(8,"Customized"),a()())},dependencies:[et,Mt],styles:["[_nghost-%COMP%]{display:block}section[_ngcontent-%COMP%]{border:1px solid #d4dbe8;border-radius:.75rem;padding:.75rem}section[_ngcontent-%COMP%] > ard-divider[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{margin-top:.25rem}section[_ngcontent-%COMP%] > ard-divider[_ngcontent-%COMP%]:last-of-type{--ard-divider-style: dashed;--ard-divider-color: #2563eb;--ard-divider-width: 2px;--ard-divider-align-inset: 18%}"]})}}return t})();var kD={component:ud,html:`<section>\r
  <div>Default style</div>\r
  <ard-divider>Default</ard-divider>\r
  <div>Customized style</div>\r
  <ard-divider textAlign="start">Customized</ard-divider>\r
</section>\r
`,scss:`:host {\r
  display: block;\r
}\r
\r
section {\r
  border: 1px solid #d4dbe8;\r
  border-radius: 0.75rem;\r
  padding: 0.75rem;\r
}\r
\r
section > ard-divider + div {\r
  margin-top: 0.25rem;\r
}\r
\r
section > ard-divider:last-of-type {\r
  --ard-divider-style: dashed;\r
  --ard-divider-color: #2563eb;\r
  --ard-divider-width: 2px;\r
  --ard-divider-align-inset: 18%;\r
}\r
`,ts:`import { Component } from '@angular/core';\r
import { ArdiumDividerModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'divider-custom-style-example',\r
  standalone: true,\r
  imports: [ArdiumDividerModule],\r
  templateUrl: './divider-custom-style-example.html',\r
  styleUrl: './divider-custom-style-example.scss',\r
})\r
export class DividerCustomStyleExample {}\r
`};var pd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["divider-directive-content-example"]],decls:7,vars:0,consts:[["ard-divider","","textAlign","center"]],template:function(i,n){i&1&&(o(0,"ul")(1,"li"),s(2,"List item one"),a(),o(3,"li",0),s(4,"Category break"),a(),o(5,"li"),s(6,"List item two"),a()())},dependencies:[et,ln],styles:["[_nghost-%COMP%]{display:block}ul[_ngcontent-%COMP%]{border:1px solid #d4dbe8;border-radius:.75rem;margin:0;padding:.5rem .75rem}ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{list-style:none;margin:0;padding:.45rem 0}ul[_ngcontent-%COMP%] > li[ard-divider][_ngcontent-%COMP%]{color:#354c76;font-weight:600}"]})}}return t})();var LD={component:pd,html:`<ul>\r
  <li>List item one</li>\r
  <li ard-divider textAlign="center">Category break</li>\r
  <li>List item two</li>\r
</ul>\r
`,scss:`:host {\r
  display: block;\r
}\r
\r
ul {\r
  border: 1px solid #d4dbe8;\r
  border-radius: 0.75rem;\r
  margin: 0;\r
  padding: 0.5rem 0.75rem;\r
}\r
\r
ul > li {\r
  list-style: none;\r
  margin: 0;\r
  padding: 0.45rem 0;\r
}\r
\r
ul > li[ard-divider] {\r
  color: #354c76;\r
  font-weight: 600;\r
}\r
`,ts:`import { Component } from '@angular/core';\r
import { ArdiumDividerModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'divider-directive-content-example',\r
  standalone: true,\r
  imports: [ArdiumDividerModule],\r
  templateUrl: './divider-directive-content-example.html',\r
  styleUrl: './divider-directive-content-example.scss',\r
})\r
export class DividerDirectiveContentExample {}\r
`};var md=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["divider-directive-example"]],decls:9,vars:0,consts:[["ard-divider",""]],template:function(i,n){i&1&&(o(0,"ul")(1,"li"),s(2,"One"),a(),y(3,"li",0),o(4,"li"),s(5,"Two"),a(),y(6,"li",0),o(7,"li"),s(8,"Three"),a()())},dependencies:[et,ln],styles:["[_nghost-%COMP%]{display:block}ul[_ngcontent-%COMP%]{border:1px solid #d4dbe8;border-radius:.75rem;margin:0;padding:.5rem .75rem}ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{list-style:none;margin:0;padding:.4rem 0}ul[_ngcontent-%COMP%] > li[ard-divider][_ngcontent-%COMP%]{--ard-divider-margin-size: 0}"]})}}return t})();var jD={component:md,html:`<ul>\r
  <li>One</li>\r
  <li ard-divider></li>\r
  <li>Two</li>\r
  <li ard-divider></li>\r
  <li>Three</li>\r
</ul>\r
`,scss:`:host {\r
  display: block;\r
}\r
\r
ul {\r
  border: 1px solid #d4dbe8;\r
  border-radius: 0.75rem;\r
  margin: 0;\r
  padding: 0.5rem 0.75rem;\r
}\r
\r
ul > li {\r
  list-style: none;\r
  margin: 0;\r
  padding: 0.4rem 0;\r
}\r
\r
ul > li[ard-divider] {\r
  --ard-divider-margin-size: 0;\r
}\r
`,ts:`import { Component } from '@angular/core';\r
import { ArdiumDividerModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'divider-directive-example',\r
  standalone: true,\r
  imports: [ArdiumDividerModule],\r
  templateUrl: './divider-directive-example.html',\r
  styleUrl: './divider-directive-example.scss',\r
})\r
export class DividerDirectiveExample {}\r
`};var hd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["divider-variants-example"]],decls:9,vars:0,consts:[["variant","full"],["variant","middle"]],template:function(i,n){i&1&&(o(0,"section")(1,"div"),s(2,"Full variant"),a(),y(3,"ard-divider",0),o(4,"div"),s(5,"Middle variant"),a(),y(6,"ard-divider",1),o(7,"div"),s(8,"Spacing resumes after divider"),a()())},dependencies:[et,Mt],styles:["[_nghost-%COMP%]{display:block}section[_ngcontent-%COMP%]{border:1px solid #d4dbe8;border-radius:.75rem;padding:.75rem}section[_ngcontent-%COMP%] > :where(div[_ngcontent-%COMP%]){font-weight:500}section[_ngcontent-%COMP%] > ard-divider[variant=middle][_ngcontent-%COMP%]{--ard-divider-style: dashed}"]})}}return t})();var KD={component:hd,html:`<section>\r
  <div>Full variant</div>\r
  <ard-divider variant="full" />\r
  <div>Middle variant</div>\r
  <ard-divider variant="middle" />\r
  <div>Spacing resumes after divider</div>\r
</section>\r
`,scss:`:host {\r
  display: block;\r
}\r
\r
section {\r
  border: 1px solid #d4dbe8;\r
  border-radius: 0.75rem;\r
  padding: 0.75rem;\r
}\r
\r
section > :where(div) {\r
  font-weight: 500;\r
}\r
\r
section > ard-divider[variant='middle'] {\r
  --ard-divider-style: dashed;\r
}\r
`,ts:`import { Component } from '@angular/core';\r
import { ArdiumDividerModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'divider-variants-example',\r
  standalone: true,\r
  imports: [ArdiumDividerModule],\r
  templateUrl: './divider-variants-example.html',\r
  styleUrl: './divider-variants-example.scss',\r
})\r
export class DividerVariantsExample {}\r
`};var fd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["divider-vertical-flex-item-example"]],decls:9,vars:0,consts:[["vertical","","flexItem",""]],template:function(i,n){i&1&&(o(0,"section")(1,"div"),s(2,"Left"),a(),y(3,"ard-divider",0),o(4,"div"),s(5,"Center"),a(),y(6,"ard-divider",0),o(7,"div"),s(8,"Right"),a()())},dependencies:[et,Mt],styles:["[_nghost-%COMP%]{display:block}section[_ngcontent-%COMP%]{border:1px solid #d4dbe8;border-radius:.75rem;display:flex;min-height:5rem;padding:.5rem}section[_ngcontent-%COMP%] > :where(div[_ngcontent-%COMP%]){align-content:center;flex:1;text-align:center}section[_ngcontent-%COMP%] > ard-divider[vertical][flexitem][_ngcontent-%COMP%]{--ard-divider-margin-size: .5rem}"]})}}return t})();var ZD={component:fd,html:`<section>\r
  <div>Left</div>\r
  <ard-divider vertical flexItem></ard-divider>\r
  <div>Center</div>\r
  <ard-divider vertical flexItem></ard-divider>\r
  <div>Right</div>\r
</section>\r
`,scss:`:host {\r
  display: block;\r
}\r
\r
section {\r
  border: 1px solid #d4dbe8;\r
  border-radius: 0.75rem;\r
  display: flex;\r
  min-height: 5rem;\r
  padding: 0.5rem;\r
}\r
\r
section > :where(div) {\r
  align-content: center;\r
  flex: 1;\r
  text-align: center;\r
}\r
\r
section > ard-divider[vertical][flexitem] {\r
  --ard-divider-margin-size: 0.5rem;\r
}\r
`,ts:`import { Component } from '@angular/core';\r
import { ArdiumDividerModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'divider-vertical-flex-item-example',\r
  standalone: true,\r
  imports: [ArdiumDividerModule],\r
  templateUrl: './divider-vertical-flex-item-example.html',\r
  styleUrl: './divider-vertical-flex-item-example.scss',\r
})\r
export class DividerVerticalFlexItemExample {}\r
`};var gd=(()=>{class t{constructor(){this.nameControl=new bi("",{validators:[at.required,at.minLength(2),at.maxLength(64),at.pattern(/^[a-zA-Z\s]+$/)]})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["form-field-auto-error-example"]],features:[rt([pl({required:"This field is required.",minlength:e=>`Enter at least ${e.requiredLength} characters.`,maxlength:e=>`Enter no more than ${e.requiredLength} characters.`,pattern:"Only letters and spaces are allowed."})])],decls:5,vars:2,consts:[["placeholder","Enter your name",3,"formControl"],[3,"control"]],template:function(i,n){i&1&&(o(0,"ard-form-field")(1,"ard-label"),s(2,"Name"),a(),y(3,"ard-input",0)(4,"ard-auto-error",1),a()),i&2&&(d(3),h("formControl",n.nameControl),d(),h("control",n.nameControl))},dependencies:[Xt,Qt,At,Wn,Gt,qt,wi,me,xi],styles:["ard-form-field[_ngcontent-%COMP%]{max-width:25ch}"]})}}return t})();var rE={component:gd,html:`<ard-form-field>\r
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
`};function Cv(t,r){t&1&&(o(0,"ard-error"),s(1,"Please enter a valid name"),a())}var _d=(()=>{class t{constructor(){this.nameControl=new bi("",[at.pattern(/^[A-Z]{2,} [A-Z]{2,}$/i)])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["form-field-basic-example"]],decls:7,vars:2,consts:[["reserveHintLine",""],[3,"formControl"]],template:function(i,n){i&1&&(o(0,"ard-form-field",0)(1,"ard-label"),s(2,"Full Name"),a(),y(3,"ard-input",1),o(4,"ard-hint"),s(5,"Write your first name and surname"),a(),g(6,Cv,2,0,"ard-error"),a()),i&2&&(d(3),h("formControl",n.nameControl),d(3),b(n.nameControl.touched&&n.nameControl.errors?6:-1))},dependencies:[Xt,Qt,At,hl,sn,Gt,qt,wi,me,xi],styles:["ard-form-field[_ngcontent-%COMP%]{max-width:35ch}"]})}}return t})();var cE={component:_d,html:`<ard-form-field reserveHintLine>\r
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
`};function bv(t,r){t&1&&(Wi(0,3),o(1,"ard-error"),s(2,"Please enter a valid passport number"),a(),Ki())}var vd=(()=>{class t{constructor(){this.passportControl=new bi("",[at.pattern(/^[A-Z\d]{9}$/i)])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["form-field-character-counter-example"]],decls:7,vars:3,consts:[["reserveHintLine",""],["placeholder","XXXXXXXXX","maxLength","9",3,"formControl"],["right",""],["ard-error",""]],template:function(i,n){if(i&1&&(o(0,"ard-form-field",0)(1,"ard-label"),s(2,"Passport Number"),a(),y(3,"ard-input",1),o(4,"ard-hint-error",2),s(5),a(),g(6,bv,3,0,"ng-container",3),a()),i&2){let l;d(3),h("formControl",n.passportControl),d(2),F("",(l=n.passportControl.value==null?null:n.passportControl.value.length)!==null&&l!==void 0?l:0,"/9"),d(),b(n.passportControl.touched&&n.passportControl.errors?6:-1)}},dependencies:[Xt,Qt,At,sn,ml,Gt,qt,wi,me,xi],styles:["ard-form-field[_ngcontent-%COMP%]{max-width:25ch}"]})}}return t})();var gE={component:vd,html:`<ard-form-field reserveHintLine>\r
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
`};var yd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["form-field-required-optional-labels-example"]],decls:12,vars:0,consts:[["required",""],["optional",""]],template:function(i,n){i&1&&(o(0,"ard-form-field")(1,"ard-label"),s(2,"Normal label"),a(),y(3,"ard-input"),a(),o(4,"ard-form-field")(5,"ard-label",0),s(6,"Required label"),a(),y(7,"ard-input"),a(),o(8,"ard-form-field")(9,"ard-label",1),s(10,"Optional label"),a(),y(11,"ard-input"),a())},dependencies:[Xt,Qt,At,Gt,qt],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;gap:1rem}ard-form-field[_ngcontent-%COMP%]{width:12.5rem}"]})}}return t})();var bE={component:yd,html:`<ard-form-field>\r
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
`};var Cd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["grid-auto-layout-example"]],decls:7,vars:0,consts:[["container","","spacing","2"],["size","auto"],["size","6"],["size","grow"]],template:function(i,n){i&1&&(o(0,"ard-grid",0)(1,"ard-grid",1),s(2,"size=auto"),a(),o(3,"ard-grid",2),s(4,"size=6"),a(),o(5,"ard-grid",3),s(6,"size=grow"),a()())},dependencies:[$e,Ye],styles:['ard-grid[_ngcontent-%COMP%] > ard-grid[_ngcontent-%COMP%]{padding:1rem;border-radius:.75rem;background:#eef3fb}ard-grid[_ngcontent-%COMP%] > ard-grid[size="6"][_ngcontent-%COMP%]{background:#dce6f5}']})}}return t})();var DE={component:Cd,html:`<ard-grid container spacing="2">\r
  <ard-grid size="auto">size=auto</ard-grid>\r
  <ard-grid size="6">size=6</ard-grid>\r
  <ard-grid size="grow">size=grow</ard-grid>\r
</ard-grid>`,scss:`ard-grid > ard-grid {\r
  padding: 1rem;\r
  border-radius: 0.75rem;\r
  background: #eef3fb;\r
\r
  &[size='6'] {\r
    background: #dce6f5;\r
  }\r
}\r
`,ts:`import { Component } from '@angular/core';\r
import { ArdiumGridModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'grid-auto-layout-example',\r
  standalone: true,\r
  imports: [ArdiumGridModule],\r
  templateUrl: './grid-auto-layout-example.html',\r
  styleUrl: './grid-auto-layout-example.scss',\r
})\r
export class GridAutoLayoutExample {}`};var bd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["grid-basic-example"]],decls:9,vars:0,consts:[["container","","spacing","2"],["size","8"],["size","4"]],template:function(i,n){i&1&&(o(0,"ard-grid",0)(1,"ard-grid",1),s(2,"size=8"),a(),o(3,"ard-grid",2),s(4,"size=4"),a(),o(5,"ard-grid",2),s(6,"size=4"),a(),o(7,"ard-grid",1),s(8,"size=8"),a()())},dependencies:[$e,Ye],styles:['ard-grid[_ngcontent-%COMP%] > ard-grid[_ngcontent-%COMP%]{padding:1rem;border-radius:.75rem;background:#e9eef7}ard-grid[_ngcontent-%COMP%] > ard-grid[size="8"][_ngcontent-%COMP%]{background:#dce6f5}']})}}return t})();var IE={component:bd,html:`<ard-grid container spacing="2">\r
  <ard-grid size="8">size=8</ard-grid>\r
  <ard-grid size="4">size=4</ard-grid>\r
  <ard-grid size="4">size=4</ard-grid>\r
  <ard-grid size="8">size=8</ard-grid>\r
</ard-grid>`,scss:`ard-grid > ard-grid {\r
  padding: 1rem;\r
  border-radius: 0.75rem;\r
  background: #e9eef7;\r
\r
  &[size='8'] {\r
    background: #dce6f5;\r
  }\r
}\r
`,ts:`import { Component } from '@angular/core';\r
import { ArdiumGridModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'grid-basic-example',\r
  standalone: true,\r
  imports: [ArdiumGridModule],\r
  templateUrl: './grid-basic-example.html',\r
  styleUrl: './grid-basic-example.scss',\r
})\r
export class GridBasicExample {}`};var xd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["grid-columns-example"]],decls:5,vars:0,consts:[["container","","columns","16","spacing","2"],["size","8"]],template:function(i,n){i&1&&(o(0,"ard-grid",0)(1,"ard-grid",1),s(2,"size=8"),a(),o(3,"ard-grid",1),s(4,"size=8"),a()())},dependencies:[$e,Ye],styles:["ard-grid[_ngcontent-%COMP%] > ard-grid[_ngcontent-%COMP%]{padding:1rem;border-radius:.75rem;background:#eef3fb}ard-grid[_ngcontent-%COMP%] > ard-grid[_ngcontent-%COMP%]:nth-child(2){background:#dce6f5}"]})}}return t})();var RE={component:xd,html:`<ard-grid container columns="16" spacing="2">\r
  <ard-grid size="8">size=8</ard-grid>\r
  <ard-grid size="8">size=8</ard-grid>\r
</ard-grid>\r
`,scss:`ard-grid > ard-grid {\r
  padding: 1rem;\r
  border-radius: 0.75rem;\r
  background: #eef3fb;\r
\r
  &:nth-child(2) {\r
    background: #dce6f5;\r
  }\r
}\r
`,ts:`import { Component } from '@angular/core';\r
import { ArdiumGridModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'grid-columns-example',\r
  standalone: true,\r
  imports: [ArdiumGridModule],\r
  templateUrl: './grid-columns-example.html',\r
  styleUrl: './grid-columns-example.scss',\r
})\r
export class GridColumnsExample {}`};var wd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["grid-multiple-breakpoints-example"]],decls:9,vars:0,consts:[["container","","spacing","2"],["size","12 md:8"],["size","12 md:4"],["size","6 md:4"],["size","6 md:8"]],template:function(i,n){i&1&&(o(0,"ard-grid",0)(1,"ard-grid",1),s(2," xs=12 md=8 "),a(),o(3,"ard-grid",2),s(4," xs=12 md=4 "),a(),o(5,"ard-grid",3),s(6," xs=6 md=4 "),a(),o(7,"ard-grid",4),s(8," xs=6 md=8 "),a()())},dependencies:[$e,Ye],styles:["ard-grid[_ngcontent-%COMP%] > ard-grid[_ngcontent-%COMP%]{padding:1rem;border-radius:.75rem;background:#dce6f5}ard-grid[_ngcontent-%COMP%] > ard-grid[_ngcontent-%COMP%]:nth-child(1), ard-grid[_ngcontent-%COMP%] > ard-grid[_ngcontent-%COMP%]:nth-child(4){background:#e9eef7}"]})}}return t})();var NE={component:wd,html:`<ard-grid container spacing="2">\r
  <ard-grid size="12 md:8">\r
    xs=12 md=8\r
  </ard-grid>\r
  <ard-grid size="12 md:4">\r
    xs=12 md=4\r
  </ard-grid>\r
  <ard-grid size="6 md:4">\r
    xs=6 md=4\r
  </ard-grid>\r
  <ard-grid size="6 md:8">\r
    xs=6 md=8\r
  </ard-grid>\r
</ard-grid>`,scss:`ard-grid > ard-grid {\r
  padding: 1rem;\r
  border-radius: 0.75rem;\r
  background: #dce6f5;\r
\r
  &:nth-child(1),\r
  &:nth-child(4) {\r
    background: #e9eef7;\r
  }\r
}\r
`,ts:`import { Component } from '@angular/core';\r
import { ArdiumGridModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'grid-multiple-breakpoints-example',\r
  standalone: true,\r
  imports: [ArdiumGridModule],\r
  templateUrl: './grid-multiple-breakpoints-example.html',\r
  styleUrl: './grid-multiple-breakpoints-example.scss',\r
})\r
export class GridMultipleBreakpointsExample {}`};var Sd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["grid-nested-example"]],decls:13,vars:0,consts:[["container","","columns","24","spacing","2"],["size","8"],["size","8","container",""],["size","12"],["size","8","container","","columns","12"],["size","6"]],template:function(i,n){i&1&&(o(0,"ard-grid",0)(1,"ard-grid",1),s(2,"size=8/24"),a(),o(3,"ard-grid",2)(4,"ard-grid",3),s(5,"nested 12/24"),a(),o(6,"ard-grid",3),s(7,"nested 12/24"),a()(),o(8,"ard-grid",4)(9,"ard-grid",5),s(10,"nested 6/12"),a(),o(11,"ard-grid",5),s(12,"nested 6/12"),a()()())},dependencies:[$e,Ye],styles:["ard-grid[_ngcontent-%COMP%] > ard-grid[_ngcontent-%COMP%]:not([container]), ard-grid[_ngcontent-%COMP%] > ard-grid[container][_ngcontent-%COMP%] > ard-grid[_ngcontent-%COMP%], ard-grid[_ngcontent-%COMP%] > ard-grid[container][columns][_ngcontent-%COMP%] > ard-grid[_ngcontent-%COMP%]{padding:1rem;border-radius:.75rem;background:#dce6f5}ard-grid[_ngcontent-%COMP%] > ard-grid[_ngcontent-%COMP%]:first-child{background:#eef3fb}ard-grid[_ngcontent-%COMP%] > ard-grid[container][_ngcontent-%COMP%], ard-grid[_ngcontent-%COMP%] > ard-grid[container][columns][_ngcontent-%COMP%]{padding:0}ard-grid[_ngcontent-%COMP%] > ard-grid[container][_ngcontent-%COMP%] > ard-grid[_ngcontent-%COMP%], ard-grid[_ngcontent-%COMP%] > ard-grid[container][columns][_ngcontent-%COMP%] > ard-grid[_ngcontent-%COMP%]{background:#dce6f5}"]})}}return t})();var WE={component:Sd,html:`<ard-grid container columns="24" spacing="2">\r
  <ard-grid size="8">size=8/24</ard-grid>\r
  <ard-grid size="8" container>\r
    <ard-grid size="12">nested 12/24</ard-grid>\r
    <ard-grid size="12">nested 12/24</ard-grid>\r
  </ard-grid>\r
  <ard-grid size="8" container columns="12">\r
    <ard-grid size="6">nested 6/12</ard-grid>\r
    <ard-grid size="6">nested 6/12</ard-grid>\r
  </ard-grid>\r
</ard-grid>`,scss:`ard-grid > ard-grid {\r
  &:not([container]),\r
  &[container] > ard-grid,\r
  &[container][columns] > ard-grid {\r
    padding: 1rem;\r
    border-radius: 0.75rem;\r
    background: #dce6f5;\r
  }\r
\r
  &:first-child {\r
    background: #eef3fb;\r
  }\r
\r
  &[container],\r
  &[container][columns] {\r
    padding: 0;\r
  }\r
\r
  &[container] > ard-grid,\r
  &[container][columns] > ard-grid {\r
    background: #dce6f5;\r
  }\r
}\r
`,ts:`import { Component } from '@angular/core';\r
import { ArdiumGridModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'grid-nested-example',\r
  standalone: true,\r
  imports: [ArdiumGridModule],\r
  templateUrl: './grid-nested-example.html',\r
  styleUrl: './grid-nested-example.scss',\r
})\r
export class GridNestedExample {}`};var Td=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["grid-responsive-values-example"]],decls:13,vars:0,consts:[["container","","spacing","1 md:2","columns","4 sm:8 md:12"],["size","2 sm:4 md:4"]],template:function(i,n){i&1&&(o(0,"ard-grid",0)(1,"ard-grid",1),s(2,"1"),a(),o(3,"ard-grid",1),s(4,"2"),a(),o(5,"ard-grid",1),s(6,"3"),a(),o(7,"ard-grid",1),s(8,"4"),a(),o(9,"ard-grid",1),s(10,"5"),a(),o(11,"ard-grid",1),s(12,"6"),a()())},dependencies:[$e,Ye],styles:["ard-grid[_ngcontent-%COMP%] > ard-grid[_ngcontent-%COMP%]{padding:1rem;border-radius:.75rem;background:#dce6f5}"]})}}return t})();var XE={component:Td,html:`<ard-grid container spacing="1 md:2" columns="4 sm:8 md:12">\r
  <ard-grid size="2 sm:4 md:4">1</ard-grid>\r
  <ard-grid size="2 sm:4 md:4">2</ard-grid>\r
  <ard-grid size="2 sm:4 md:4">3</ard-grid>\r
  <ard-grid size="2 sm:4 md:4">4</ard-grid>\r
  <ard-grid size="2 sm:4 md:4">5</ard-grid>\r
  <ard-grid size="2 sm:4 md:4">6</ard-grid>\r
</ard-grid>\r
`,scss:`ard-grid > ard-grid {\r
  padding: 1rem;\r
  border-radius: 0.75rem;\r
  background: #dce6f5;\r
}`,ts:`import { Component } from '@angular/core';\r
import { ArdiumGridModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'grid-responsive-values-example',\r
  standalone: true,\r
  imports: [ArdiumGridModule],\r
  templateUrl: './grid-responsive-values-example.html',\r
  styleUrl: './grid-responsive-values-example.scss',\r
})\r
export class GridResponsiveValuesExample {}`};var Dd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["grid-spacing-example"]],decls:9,vars:0,consts:[["container","","spacing","2.5"],["size","6"]],template:function(i,n){i&1&&(o(0,"ard-grid",0)(1,"ard-grid",1),s(2,"1"),a(),o(3,"ard-grid",1),s(4,"2"),a(),o(5,"ard-grid",1),s(6,"3"),a(),o(7,"ard-grid",1),s(8,"4"),a()())},dependencies:[$e,Ye],styles:["ard-grid[_ngcontent-%COMP%] > ard-grid[_ngcontent-%COMP%]{padding:1rem;border-radius:.75rem;background:#eef3fb}"]})}}return t})();var iA={component:Dd,html:`<ard-grid container spacing="2.5">\r
  <ard-grid size="6">1</ard-grid>\r
  <ard-grid size="6">2</ard-grid>\r
  <ard-grid size="6">3</ard-grid>\r
  <ard-grid size="6">4</ard-grid>\r
</ard-grid>`,scss:`ard-grid > ard-grid {\r
  padding: 1rem;\r
  border-radius: 0.75rem;\r
  background: #eef3fb;\r
}`,ts:`import { Component } from '@angular/core';\r
import { ArdiumGridModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'grid-spacing-example',\r
  standalone: true,\r
  imports: [ArdiumGridModule],\r
  templateUrl: './grid-spacing-example.html',\r
  styleUrl: './grid-spacing-example.scss',\r
})\r
export class GridSpacingExample {}`};var Ed=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["grid-stack-companion-example"]],decls:11,vars:0,consts:[["container","","spacing","2"],["size","4"],["spacing","1.25"],["size","8"]],template:function(i,n){i&1&&(o(0,"ard-grid",0)(1,"ard-grid",1)(2,"ard-stack",2)(3,"div"),s(4,"Column 1 - Row 1"),a(),o(5,"div"),s(6,"Column 1 - Row 2"),a(),o(7,"div"),s(8,"Column 1 - Row 3"),a()()(),o(9,"ard-grid",3),s(10,"Column 2"),a()())},dependencies:[$e,Ye,Ri,Oi],styles:["ard-grid[_ngcontent-%COMP%] > ard-grid[_ngcontent-%COMP%]:nth-child(2){padding:1rem;border-radius:.75rem;background:#dce6f5}ard-grid[_ngcontent-%COMP%] > ard-grid[_ngcontent-%COMP%]:first-child > ard-stack[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:1rem;border-radius:.75rem;box-sizing:border-box;background:#eef3fb}"]})}}return t})();var sA={component:Ed,html:`<ard-grid container spacing="2">\r
  <ard-grid size="4">\r
    <ard-stack spacing="1.25">\r
      <div>Column 1 - Row 1</div>\r
      <div>Column 1 - Row 2</div>\r
      <div>Column 1 - Row 3</div>\r
    </ard-stack>\r
  </ard-grid>\r
  <ard-grid size="8">Column 2</ard-grid>\r
</ard-grid>\r
`,scss:`ard-grid > ard-grid {\r
  &:nth-child(2) {\r
    padding: 1rem;\r
    border-radius: 0.75rem;\r
    background: #dce6f5;\r
  }\r
\r
  &:first-child > ard-stack > div {\r
    padding: 1rem;\r
    border-radius: 0.75rem;\r
    box-sizing: border-box;\r
    background: #eef3fb;\r
  }\r
}\r
`,ts:`import { Component } from '@angular/core';\r
import { ArdiumGridModule, ArdiumStackModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'grid-stack-companion-example',\r
  standalone: true,\r
  imports: [ArdiumGridModule, ArdiumStackModule],\r
  templateUrl: './grid-stack-companion-example.html',\r
  styleUrl: './grid-stack-companion-example.scss',\r
})\r
export class GridStackCompanionExample {}`};var Ad=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["icon-button-basic-example"]],decls:10,vars:0,consts:[[1,"grid"],["color","none"],["filled",""],["color","primary"],["color","danger"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"ard-icon-button",1)(2,"ard-icon",2),s(3,"close"),a()(),o(4,"ard-icon-button",3)(5,"ard-icon",2),s(6,"home"),a()(),o(7,"ard-icon-button",4)(8,"ard-icon",2),s(9,"delete"),a()()())},dependencies:[ae,ue,Ke,We],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1.5rem;justify-items:center;max-width:15rem}"]})}}return t})();var pA={component:Ad,html:`<div class="grid">\r
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
`};var Fd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["icon-button-compact-example"]],decls:10,vars:0,consts:[["color","none"],["filled",""],["color","none","compact",""]],template:function(i,n){i&1&&(o(0,"span"),s(1,"Default"),a(),o(2,"ard-icon-button",0)(3,"ard-icon",1),s(4,"close"),a()(),o(5,"span"),s(6,"Compact"),a(),o(7,"ard-icon-button",2)(8,"ard-icon",1),s(9,"close"),a()())},dependencies:[Ke,We,ae,ue],styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:max-content max-content;gap:1rem;align-items:center}"]})}}return t})();var _A={component:Fd,html:`\r
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
`};var Md=(()=>{class t{onClick(){console.log("Button clicked!")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["icon-button-disabled-example"]],decls:10,vars:0,consts:[["disabled","","title","This button is disabled!",3,"click"],["disabled","","pointerEventsWhenDisabled","","title","This button is disabled!",3,"click"]],template:function(i,n){i&1&&(o(0,"span"),s(1,"Default"),a(),o(2,"ard-icon-button",0),_("click",function(){return n.onClick()}),o(3,"ard-icon"),s(4,"arrow_selector_tool"),a()(),o(5,"span"),s(6,"With pointerEventsWhenDisabled"),a(),o(7,"ard-icon-button",1),_("click",function(){return n.onClick()}),o(8,"ard-icon"),s(9,"block"),a()())},dependencies:[he,Ke,We,ae,ue],styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:max-content max-content;gap:1rem;align-items:center}"]})}}return t})();var xA={component:Md,html:`<span>Default</span>\r
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
`};var Id=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["kbd-appearances-example"]],decls:13,vars:0,consts:[[1,"grid"],["appearance","outlined"],["appearance","filled"],["appearance","transparent"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"ard-kbd",1),s(2,"Ctrl"),a(),o(3,"ard-kbd",2),s(4,"Ctrl"),a(),o(5,"ard-kbd",3),s(6,"Ctrl"),a(),o(7,"ard-kbd-shortcut",1),s(8,"Ctrl+C"),a(),o(9,"ard-kbd-shortcut",2),s(10,"Ctrl+C"),a(),o(11,"ard-kbd-shortcut",3),s(12,"Ctrl+C"),a()())},dependencies:[Re,lt,Vi,Pi],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:max-content max-content max-content;gap:1rem}"]})}}return t})();var EA={component:Id,html:`<div class="grid">\r
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
export class KbdAppearancesExample {}`};var kd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["kbd-basic-example"]],decls:4,vars:0,template:function(i,n){i&1&&(s(0,"Press "),o(1,"ard-kbd"),s(2,"Shift"),a(),s(3," to continue."))},dependencies:[Re,lt],encapsulation:2})}}return t})();var kA={component:kd,html:"Press <ard-kbd>Shift</ard-kbd> to continue.",ts:`import { Component } from "@angular/core";\r
import { ArdiumKbdModule } from "@ardium-ui/ui";\r
\r
@Component({\r
  selector: 'kbd-basic-example',\r
  templateUrl: 'kbd-basic-example.html',\r
  standalone: true,\r
  imports: [ArdiumKbdModule],\r
})\r
export class KbdBasicExample {}`};var Pd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["kbd-directive-example"]],decls:4,vars:0,consts:[["ardKbd",""]],template:function(i,n){i&1&&(s(0,"Press "),o(1,"kbd",0),s(2,"Vol. Down"),a(),s(3," to continue."))},dependencies:[Re,fl],encapsulation:2})}}return t})();var LA={component:Pd,html:"Press <kbd ardKbd>Vol. Down</kbd> to continue.",ts:`import { Component } from "@angular/core";\r
import { ArdiumKbdModule } from "@ardium-ui/ui";\r
\r
@Component({\r
  selector: 'kbd-directive-example',\r
  templateUrl: 'kbd-directive-example.html',\r
  standalone: true,\r
  imports: [ArdiumKbdModule],\r
})\r
export class KbdDirectiveExample {}`};var Vd=(()=>{class t{constructor(){this.keys=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],this._currentKeyIndex=T(0),this.currentKey=x(()=>this.keys[this._currentKeyIndex()])}ngOnInit(){this._interval=setInterval(()=>{this._currentKeyIndex()===this.keys.length-1?this._currentKeyIndex.set(0):this._currentKeyIndex.update(e=>e+1)},1e3)}ngOnDestroy(){this._interval&&clearInterval(this._interval)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["kbd-dynamic-example"]],decls:1,vars:1,consts:[[3,"key"]],template:function(i,n){i&1&&y(0,"ard-kbd",0),i&2&&h("key",n.currentKey())},dependencies:[Re,lt],encapsulation:2})}}return t})();var $A={component:Vd,html:'<ard-kbd [key]="currentKey()" />',ts:`import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';\r
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
`};var Od=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["kbd-full-example"]],decls:12,vars:0,consts:[["full",""]],template:function(i,n){i&1&&(o(0,"ard-kbd",0),s(1,"KeyF"),a(),o(2,"ard-kbd",0),s(3,"Digit3"),a(),o(4,"ard-kbd",0),s(5,"ArrowUp"),a(),o(6,"ard-kbd",0),s(7,"Tab"),a(),o(8,"ard-kbd",0),s(9,"MetaLeft"),a(),o(10,"ard-kbd",0),s(11,"AudioVolumeDown"),a())},dependencies:[Re,lt],encapsulation:2})}}return t})();var GA={component:Od,html:`<ard-kbd full>KeyF</ard-kbd>\r
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
`};var Rd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["kbd-shortcut-example"]],decls:4,vars:0,template:function(i,n){i&1&&(s(0,"Press "),o(1,"ard-kbd-shortcut"),s(2,"Ctrl+C"),a(),s(3," to copy."))},dependencies:[Vi,Pi],encapsulation:2})}}return t})();var eF={component:Rd,html:"Press <ard-kbd-shortcut>Ctrl+C</ard-kbd-shortcut> to copy.",ts:`import { Component } from "@angular/core";\r
import { ArdiumKbdShortcutModule } from "@ardium-ui/ui";\r
\r
@Component({\r
  selector: 'kbd-shortcut-example',\r
  templateUrl: 'kbd-shortcut-example.html',\r
  standalone: true,\r
  imports: [ArdiumKbdShortcutModule],\r
})\r
export class KbdShortcutExample {}`};var Ld=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["kbd-translation-example"]],decls:12,vars:0,template:function(i,n){i&1&&(o(0,"ard-kbd"),s(1,"KeyF"),a(),o(2,"ard-kbd"),s(3,"Digit3"),a(),o(4,"ard-kbd"),s(5,"ArrowUp"),a(),o(6,"ard-kbd"),s(7,"Tab"),a(),o(8,"ard-kbd"),s(9,"MetaLeft"),a(),o(10,"ard-kbd"),s(11,"AudioVolumeDown"),a())},dependencies:[Re,lt],encapsulation:2})}}return t})();var aF={component:Ld,html:`<ard-kbd>KeyF</ard-kbd>\r
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
`};var Bd=(()=>{class t{constructor(){this.value=T(10)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["number-input-basic-example"]],decls:3,vars:2,consts:[[3,"valueChange","value"]],template:function(i,n){i&1&&(o(0,"ard-number-input",0),q("valueChange",function(c){return K(n.value,c)||(n.value=c),c}),a(),o(1,"p"),s(2),a()),i&2&&(W("value",n.value),d(2),F("Selected value: ",n.value(),""))},dependencies:[Je,Ze],styles:["ard-number-input[_ngcontent-%COMP%]{width:12rem}"]})}}return t})();var pF={component:Bd,html:`<ard-number-input [(value)]="value" />\r
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
`};var Hd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["number-input-compact-example"]],decls:2,vars:0,consts:[["value","123"],["value","123","compact",""]],template:function(i,n){i&1&&y(0,"ard-number-input",0)(1,"ard-number-input",1)},dependencies:[Je,Ze],styles:["[_nghost-%COMP%]{display:flex;gap:2rem}ard-number-input[_ngcontent-%COMP%]{width:12rem}"]})}}return t})();var _F={component:Hd,html:`<ard-number-input value="123" />\r
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
`};function xv(t,r){if(t&1&&(o(0,"tr")(1,"td")(2,"code"),s(3),a()(),o(4,"td")(5,"code"),s(6),a()()()),t&2){let e=r.$implicit;d(3),F("(",e[0],")"),d(3),F("$event = ",e[1],"")}}function wv(t,r){t&1&&(o(0,"tr")(1,"td"),s(2,"Emitted events will be shown here."),a()())}var Ud=(()=>{class t{constructor(){this.eventLog=T([])}addEvent(e,i){this.eventLog.update(n=>[...n,[e,typeof i=="string"?`"${i}"`:typeof i=="object"?JSON.stringify(i):String(i)]])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["number-input-emitted-events-example"]],decls:8,vars:1,consts:[["min","0","max","100",3,"valueChange","input","change","quickChange"],[3,"click"]],template:function(i,n){i&1&&(o(0,"table")(1,"tbody"),H(2,xv,7,2,"tr",null,Z,!1,wv,3,0,"tr"),a()(),o(5,"ard-number-input",0),_("valueChange",function(c){return n.addEvent("valueChange",c)})("input",function(c){return n.addEvent("input",c)})("change",function(c){return n.addEvent("change",c)})("quickChange",function(c){return n.addEvent("quickChange",c)}),a(),o(6,"button",1),_("click",function(){return n.eventLog.set([])}),s(7,"Clear events"),a()),i&2&&(d(2),U(n.eventLog()))},dependencies:[Je,Ze],styles:["ard-number-input[_ngcontent-%COMP%]{width:12rem}table[_ngcontent-%COMP%]{margin-top:1rem;max-width:20rem}"]})}}return t})();var SF={component:Ud,html:`<table>\r
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
`};var Nd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["number-input-float-example"]],decls:3,vars:0,consts:[["allowFloat","","min","0","max","10","stepSize","0.5","maxDecimalPlaces","2","fixedDecimalPlaces",""]],template:function(i,n){i&1&&(o(0,"p"),s(1,"Type the amount of money to transfer"),a(),y(2,"ard-number-input",0))},dependencies:[Je,Ze],styles:["ard-number-input[_ngcontent-%COMP%]{width:12rem}"]})}}return t})();var FF={component:Nd,html:`<p>Type the amount of money to transfer</p>\r
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
`};var jd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["number-input-min-max-step-example"]],decls:1,vars:0,consts:[["min","-100","max","100","stepSize","10","value","-15"]],template:function(i,n){i&1&&y(0,"ard-number-input",0)},dependencies:[Je,Ze],styles:["ard-number-input[_ngcontent-%COMP%]{width:12rem}"]})}}return t})();var VF={component:jd,html:'<ard-number-input min="-100" max="100" stepSize="10" value="-15" />',scss:`ard-number-input {\r
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
`};var Yd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["number-input-no-buttons-example"]],decls:1,vars:0,consts:[["value","123","noButtons","","alignText","left"]],template:function(i,n){i&1&&y(0,"ard-number-input",0)},dependencies:[Je,Ze],styles:["ard-number-input[_ngcontent-%COMP%]{width:12rem}"]})}}return t})();var HF={component:Yd,html:'<ard-number-input value="123" noButtons alignText="left" />',scss:`ard-number-input {\r
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
`};function Sv(t,r){t&1&&s(0,"$")}function Tv(t,r){t&1&&s(0,".00")}var $d=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["number-input-prefix-suffix-example"]],decls:3,vars:0,consts:[["value","123","alignText","right","min","0","max","10000"],["ard-prefix-tmp",""],["ard-suffix-tmp",""]],template:function(i,n){i&1&&(o(0,"ard-number-input",0),g(1,Sv,1,0,"ng-template",1)(2,Tv,1,0,"ng-template",2),a())},dependencies:[Je,Ze,Yn,$n],styles:["ard-number-input[_ngcontent-%COMP%]{width:12rem}"]})}}return t})();var $F={component:$d,html:`<ard-number-input value="123" alignText="right" min="0" max="10000">\r
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
`};var zd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["slider-basic-example"]],decls:1,vars:0,template:function(i,n){i&1&&y(0,"ard-slider")},dependencies:[ki,Ii],encapsulation:2})}}return t})();var GF={component:zd,html:"<ard-slider />",ts:`import { Component } from '@angular/core';
import { ArdiumSliderModule } from '@ardium-ui/ui';

@Component({
  selector: 'slider-basic-example',
  templateUrl: './slider-basic-example.html',
  standalone: true,
  imports: [ArdiumSliderModule],
})
export class SliderBasicExample {
  
}
`};var Dv=()=>({value:0,label:"Min"}),Ev=()=>({value:25,label:"Low"}),Av=()=>({value:50,label:"Medium"}),Fv=()=>({value:75,label:"High"}),Mv=()=>({value:100,label:"Max"}),Iv=(t,r,e,i,n)=>[t,r,e,i,n],Wd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["slider-label-objects-example"]],decls:1,vars:12,consts:[["showValueTicks","",3,"labels"]],template:function(i,n){i&1&&y(0,"ard-slider",0),i&2&&h("labels",Ja(6,Iv,Ut(1,Dv),Ut(2,Ev),Ut(3,Av),Ut(4,Fv),Ut(5,Mv)))},dependencies:[ki,Ii],styles:["ard-slider[_ngcontent-%COMP%]{max-width:15rem}"]})}}return t})();var eM={component:Wd,html:`<ard-slider\r
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
`};var Kd=(()=>{class t{constructor(){this.value=T(5)}formatTooltipFn(e){let i=["KB","MB","GB","TB"],n=0,l=2**e;for(;l>=1024&&n<i.length-1;)n+=1,l/=1024;return`${l} ${i[n]}`}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["slider-non-linear-example"]],decls:5,vars:4,consts:[["min","0","max","30",3,"valueChange","value","tooltipFormatFn"]],template:function(i,n){i&1&&(o(0,"ard-slider",0),q("valueChange",function(c){return K(n.value,c)||(n.value=c),c}),a(),o(1,"p"),s(2),a(),o(3,"p"),s(4),a()),i&2&&(W("value",n.value),h("tooltipFormatFn",n.formatTooltipFn),d(2),F("Actual value: ",n.value(),""),d(2),F("Formatted value: ",n.formatTooltipFn(n.value()),""))},dependencies:[ki,Ii],styles:["ard-slider[_ngcontent-%COMP%]{margin-bottom:1rem;max-width:15rem}"]})}}return t})();var sM={component:Kd,html:`<ard-slider [(value)]="value" [tooltipFormatFn]="formatTooltipFn" min="0" max="30" />\r
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
`};var qd=(()=>{class t{constructor(){this.value=T({from:30,to:80})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["slider-range-example"]],decls:3,vars:3,consts:[[3,"valueChange","value"]],template:function(i,n){i&1&&(o(0,"ard-range-slider",0),q("valueChange",function(c){return K(n.value,c)||(n.value=c),c}),a(),o(1,"p"),s(2),a()),i&2&&(W("value",n.value),d(2),gi("Selected range: ",n.value().from," \u2013 ",n.value().to,""))},dependencies:[ar,rr],styles:["ard-range-slider[_ngcontent-%COMP%]{display:block;margin-bottom:1rem;max-width:15rem}"]})}}return t})();var hM={component:qd,html:`<ard-range-slider [(value)]="value" />\r
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
`};var Gd=(()=>{class t{constructor(){this.value=T({from:30,to:80}),this.selectionBehavior=T(ui.Allow),this.minimumDistance=T(0)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["slider-range-selection-behaviors-example"]],decls:19,vars:9,consts:[[3,"valueChange","value"],["value","allow"],["value","push"],["value","block"],["for","minimumDistance"],["type","number","id","minimumDistance","min","0",3,"ngModelChange","ngModel"],[3,"valueChange","value","selectionBehavior","minimumDistance"]],template:function(i,n){i&1&&(o(0,"ard-radio-group",0),q("valueChange",function(c){return K(n.selectionBehavior,c)||(n.selectionBehavior=c),c}),o(1,"ard-radio",1)(2,"code"),s(3,"'allow'"),a()(),o(4,"ard-radio",2)(5,"code"),s(6,"'push'"),a()(),o(7,"ard-radio",3)(8,"code"),s(9,"'block'"),a()()(),o(10,"div")(11,"label",4),s(12," Minimum distance: "),a(),o(13,"input",5),q("ngModelChange",function(c){return K(n.minimumDistance,c)||(n.minimumDistance=c),c}),a()(),o(14,"ard-range-slider",6),q("valueChange",function(c){return K(n.value,c)||(n.value=c),c}),a(),o(15,"p"),s(16),a(),o(17,"pre"),s(18),a()),i&2&&(W("value",n.selectionBehavior),d(13),W("ngModel",n.minimumDistance),d(),W("value",n.value),h("selectionBehavior",n.selectionBehavior())("minimumDistance",n.minimumDistance()),d(2),gi("Selected range: ",n.value().from," \u2013 ",n.value().to,""),d(2),gi(`<ard-range-slider
  [(value)]="value"
  [selectionBehavior]="`,n.selectionBehavior(),`"
  [minimumDistance]="`,n.minimumDistance(),`"
/>
`))},dependencies:[ar,rr,ol,al,zn,_e,Se,Tn,me,ho,Te],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:1rem}ard-radio-group[_ngcontent-%COMP%]{flex-direction:column}label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6ch;-webkit-user-select:none;user-select:none}"]})}}return t})();var xM={component:Gd,html:`<ard-radio-group [(value)]="selectionBehavior">\r
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
`};var Qd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["spinner-basic-example"]],decls:1,vars:0,template:function(i,n){i&1&&y(0,"ard-spinner")},dependencies:[lr,sr],encapsulation:2})}}return t})();var EM={component:Qd,html:"<ard-spinner />",ts:`import { Component } from '@angular/core';\r
import { ArdiumSpinnerModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'spinner-basic-example',\r
  templateUrl: './spinner-basic-example.html',\r
  standalone: true,\r
  imports: [ArdiumSpinnerModule],\r
})\r
export class SpinnerBasicExample {}\r
`};var Xd=(()=>{class t{constructor(){this.spinnerSize=T("4rem")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["spinner-sizing-example"]],decls:4,vars:2,consts:[["for","size"],["type","text","id","size","value","4rem",3,"input"]],template:function(i,n){i&1&&(o(0,"label",0),s(1,"CSS Size"),a(),o(2,"input",1),_("input",function(c){return n.spinnerSize.set(c.target.value)}),a(),y(3,"ard-spinner")),i&2&&(d(3),Ce("width:"+n.spinnerSize()))},dependencies:[lr,sr],styles:["ard-spinner[_ngcontent-%COMP%]{display:block;margin-top:1.5rem}"]})}}return t})();var VM={component:Xd,html:`<label for="size">CSS Size</label>\r
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
`};var Zd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["stack-basic-example"]],decls:7,vars:0,consts:[["spacing","1.25"]],template:function(i,n){i&1&&(o(0,"ard-stack",0)(1,"div"),s(2,"Item 1"),a(),o(3,"div"),s(4,"Item 2"),a(),o(5,"div"),s(6,"Item 3"),a()())},dependencies:[Ri,Oi],styles:["ard-stack[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:1rem;border-radius:.75rem;box-sizing:border-box;background:#eef3fb}ard-stack[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){background:#dce6f5}"]})}}return t})();var HM={component:Zd,html:`<ard-stack spacing="1.25">\r
  <div>Item 1</div>\r
  <div>Item 2</div>\r
  <div>Item 3</div>\r
</ard-stack>`,scss:`ard-stack > div {\r
  padding: 1rem;\r
  border-radius: 0.75rem;\r
  box-sizing: border-box;\r
  background: #eef3fb;\r
\r
  &:nth-child(2) {\r
    background: #dce6f5;\r
  }\r
}\r
`,ts:`import { Component } from '@angular/core';\r
import { ArdiumStackModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'stack-basic-example',\r
  standalone: true,\r
  imports: [ArdiumStackModule],\r
  templateUrl: './stack-basic-example.html',\r
  styleUrl: './stack-basic-example.scss',\r
})\r
export class StackBasicExample {}`};var kv=()=>({xs:"column",md:"row"}),Jd=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["stack-direction-example"]],decls:7,vars:2,consts:[["spacing","1.25","alignItems","center",3,"direction"]],template:function(i,n){i&1&&(o(0,"ard-stack",0)(1,"div"),s(2,"Filters"),a(),o(3,"div"),s(4,"Sort"),a(),o(5,"div"),s(6,"Actions"),a()()),i&2&&h("direction",Ut(1,kv))},dependencies:[Ri,Oi],styles:["ard-stack[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:1rem;border-radius:.75rem;box-sizing:border-box;background:#eef3fb}ard-stack[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){background:#dce6f5}ard-stack[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%}"]})}}return t})();var $M={component:Jd,html:`<ard-stack [direction]="{ xs: 'column', md: 'row' }" spacing="1.25" alignItems="center">\r
  <div>Filters</div>\r
  <div>Sort</div>\r
  <div>Actions</div>\r
</ard-stack>`,scss:`ard-stack {\r
  > div {\r
    padding: 1rem;\r
    border-radius: 0.75rem;\r
    box-sizing: border-box;\r
    background: #eef3fb;\r
\r
    &:nth-child(2) {\r
      background: #dce6f5;\r
    }\r
    > div {\r
      width: 100%;\r
    }\r
  }\r
}\r
`,ts:`import { Component } from '@angular/core';\r
import { ArdiumStackModule } from '@ardium-ui/ui';\r
\r
@Component({\r
  selector: 'stack-direction-example',\r
  standalone: true,\r
  imports: [ArdiumStackModule],\r
  templateUrl: './stack-direction-example.html',\r
  styleUrl: './stack-direction-example.scss',\r
})\r
export class StackDirectionExample {}`};var ec=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["tabber-basic-example"]],decls:10,vars:0,consts:[["tabId","tab1","label","Tab 1"],["tabId","tab2","label","Tab 2"],["tabId","tab3","label","Tab 3"]],template:function(i,n){i&1&&(o(0,"ard-tabber")(1,"ard-tab",0)(2,"p"),s(3,"This is the content of Tab 1."),a()(),o(4,"ard-tab",1)(5,"p"),s(6,"This is the content of Tab 2."),a()(),o(7,"ard-tab",2)(8,"p"),s(9,"This is the content of Tab 3."),a()()())},dependencies:[Jt,Zt,Ft],encapsulation:2})}}return t})();var GM={component:ec,html:`<ard-tabber>\r
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
`};var tc=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["tabber-label-example"]],decls:25,vars:0,consts:[["tabId","anim","label","Animals"],["tabId","pl","label","Plants"],["tabId","fung","label","Fungi"]],template:function(i,n){i&1&&(o(0,"ard-tabber")(1,"ard-tab",0)(2,"ul")(3,"li"),s(4,"Cat"),a(),o(5,"li"),s(6,"Dog"),a(),o(7,"li"),s(8,"Elephant"),a()()(),o(9,"ard-tab",1)(10,"ul")(11,"li"),s(12,"Rose"),a(),o(13,"li"),s(14,"Oak"),a(),o(15,"li"),s(16,"Tulip"),a()()(),o(17,"ard-tab",2)(18,"ul")(19,"li"),s(20,"Mushroom"),a(),o(21,"li"),s(22,"Yeast"),a(),o(23,"li"),s(24,"Morel"),a()()()())},dependencies:[Jt,Zt,Ft],encapsulation:2})}}return t})();var eI={component:tc,html:`<ard-tabber>\r
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
`};function Pv(t,r){if(t&1&&(o(0,"ard-icon",5),s(1,"home"),a(),o(2,"span"),s(3),a()),t&2){let e=r.$implicit;d(3),C(e)}}function Vv(t,r){t&1&&(o(0,"ard-icon",5),s(1,"person"),a(),o(2,"span"),s(3,"Profile"),a())}var ic=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["tabber-label-templates-example"]],decls:13,vars:1,consts:[["customLabelTemplate",""],["ard-tabber-label-tmp",""],["tabId","tab1","label","Home 1"],["tabId","tab2","label","Home 2"],["tabId","tab3",3,"label"],["aria-hidden","true"]],template:function(i,n){if(i&1&&(o(0,"ard-tabber"),g(1,Pv,4,1,"ng-template",1),o(2,"ard-tab",2)(3,"p"),s(4,"This is the content of the Home 1 tab."),a()(),o(5,"ard-tab",3)(6,"p"),s(7,"This is the content of the Home 2 tab."),a()(),o(8,"ard-tab",4)(9,"p"),s(10,"This is the content of the Profile tab."),a()()(),g(11,Vv,4,0,"ng-template",null,0,oe)),i&2){let l=V(12);d(8),h("label",l)}},dependencies:[Jt,Zt,Ft,Qn,ae,ue],encapsulation:2})}}return t})();var aI={component:ic,html:`<ard-tabber>\r
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
`};var nc=(()=>{class t{constructor(){this.insideClicks=T(0),this.outsideClicks=T(0)}onClick(){this.insideClicks.update(e=>e+1)}onOutsideClick(){this.outsideClicks.update(e=>e+1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["click-outside-example"]],decls:6,vars:2,consts:[[3,"click","ardClickOutside"]],template:function(i,n){i&1&&(o(0,"div",0),_("click",function(){return n.onClick()})("ardClickOutside",function(){return n.onOutsideClick()}),s(1,"My element"),a(),o(2,"p"),s(3),y(4,"br"),s(5),a()),i&2&&(d(3),F(" Inside clicks: ",n.insideClicks()," "),d(2),F(" Outside clicks: ",n.outsideClicks(),`
`))},dependencies:[vo,_o],styles:["[_nghost-%COMP%]{-webkit-user-select:none;user-select:none}div[_ngcontent-%COMP%]{width:167px;height:100px;display:grid;place-items:center;background-color:#90ee90}"]})}}return t})();var pI={component:nc,html:`<div (click)="onClick()" (ardClickOutside)="onOutsideClick()">My element</div>\r
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
}`};var Ov=["*"],rc=(()=>{class t{constructor(){this.disabled=m(!1,{transform:st})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["my-button"]],inputs:{disabled:[1,"disabled"]},ngContentSelectors:Ov,decls:2,vars:1,consts:[[3,"disabled"]],template:function(i,n){i&1&&(j(),o(0,"button",0),B(1),a()),i&2&&h("disabled",n.disabled())},encapsulation:2})}}return t})();var ac=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["coercion-boolean-example"]],decls:8,vars:1,consts:[["disabled",""],["disabled","false"],[3,"disabled"]],template:function(i,n){i&1&&(o(0,"my-button"),s(1,"Normal button"),a(),o(2,"my-button",0),s(3,"Disabled button"),a(),o(4,"my-button",1),s(5,"False button"),a(),o(6,"my-button",2),s(7,"Disabled button"),a()),i&2&&(d(6),h("disabled",!0))},dependencies:[rc],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]})}}return t})();var bI={component:ac,html:`<my-button>Normal button</my-button>\r
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
}`};var oc=(()=>{class t{constructor(){this.date=m.required({transform:e=>Lo(e,new Date(""))})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["my-calendar"]],inputs:{date:[1,"date"]},decls:1,vars:1,template:function(i,n){i&1&&s(0),i&2&&F("The date is ",n.date(),"")},encapsulation:2})}}return t})();var sc=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["coercion-date-example"]],decls:2,vars:0,consts:[["date","1918.11.11"],["date","now"]],template:function(i,n){i&1&&y(0,"my-calendar",0)(1,"my-calendar",1)},dependencies:[oc],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]})}}return t})();var MI={component:sc,html:`<my-calendar date="1918.11.11" />\r
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
`};var Rv=["*"],lc=(()=>{class t{constructor(){this.delay=m(0,{transform:e=>bo(e,0)})}alert(){setTimeout(()=>{alert("Hello world!")},this.delay())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["my-button"]],inputs:{delay:[1,"delay"]},ngContentSelectors:Rv,decls:2,vars:0,consts:[[3,"click"]],template:function(i,n){i&1&&(j(),o(0,"button",0),_("click",function(){return n.alert()}),B(1),a())},encapsulation:2})}}return t})();var dc=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["coercion-number-example"]],decls:6,vars:1,consts:[["delay","500"],[3,"delay"]],template:function(i,n){i&1&&(o(0,"my-button"),s(1,"No delay"),a(),o(2,"my-button",0),s(3,"With delay"),a(),o(4,"my-button",1),s(5,"Long delay"),a()),i&2&&(d(4),h("delay",1500))},dependencies:[lc],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]})}}return t})();var HI={component:dc,html:`<my-button>No delay</my-button>\r
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
`};var cc=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["coercion-usefulness-example"]],decls:0,vars:0,template:function(i,n){},encapsulation:2})}}return t})();var YI={component:cc,simpleHtml:`<ard-select disabled />\r
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
export class CoercionUsefulnessExample {}`};var uc=(()=>{class t{constructor(){this.exampleSignal=Ao(["Pizza","Cheese","Spaghetti"])}push(e){e&&this.exampleSignal.push(e)}pop(){this.exampleSignal.pop()}map(){this.exampleSignal.map(e=>e.toUpperCase())}filter(){this.exampleSignal.filter(e=>e.length>6)}reverse(){this.exampleSignal.reverse()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["array-signal-basic-example"]],decls:18,vars:2,consts:[["pushText",""],[1,"left-side"],["type","text","placeholder","Text to push..."],[3,"click"],[1,"right-side"]],template:function(i,n){if(i&1){let l=Y();o(0,"div",1),y(1,"input",2,0),o(3,"button",3),_("click",function(){D(l);let p=V(2);return E(n.push(p.value))}),s(4,"Push"),a(),o(5,"button",3),_("click",function(){return D(l),E(n.pop())}),s(6,"Pop"),a(),o(7,"button",3),_("click",function(){return D(l),E(n.map())}),s(8,"Map"),a(),o(9,"button",3),_("click",function(){return D(l),E(n.filter())}),s(10,"Filter"),a(),o(11,"button",3),_("click",function(){return D(l),E(n.reverse())}),s(12,"Reverse"),a()(),o(13,"div",4)(14,"p"),s(15),a(),o(16,"p"),s(17),a()()}i&2&&(d(15),F("isEmpty: ",n.exampleSignal.isEmpty().toString()," "),d(2),C(n.exampleSignal()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:center}button[_ngcontent-%COMP%]{margin-right:.75rem;margin-left:.25rem;padding:0 .125rem}"]})}}return t})();var qI={component:uc,html:`<div class="left-side">\r
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
`};var pc=(()=>{class t{constructor(){this.exampleSignal=Fo(10)}increment(){this.exampleSignal.increment()}decrement(){this.exampleSignal.decrement()}reset(){this.exampleSignal.reset()}double(){this.exampleSignal.update(e=>e*2)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["counter-signal-basic-example"]],decls:14,vars:2,consts:[[1,"left-side"],[3,"click"],[1,"right-side"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"button",1),_("click",function(){return n.increment()}),s(2,"Increment"),a(),o(3,"button",1),_("click",function(){return n.decrement()}),s(4,"Decrement"),a(),o(5,"button",1),_("click",function(){return n.double()}),s(6,"Double"),a(),o(7,"button",1),_("click",function(){return n.reset()}),s(8,"Reset"),a()(),o(9,"div",2)(10,"p"),s(11),a(),o(12,"p"),s(13),a()()),i&2&&(d(11),F("isReset: ",n.exampleSignal.isReset().toString()," "),d(2),F("value: ",n.exampleSignal(),""))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:center}button[_ngcontent-%COMP%]{margin-right:1rem;padding:0 .125rem}"]})}}return t})();var JI={component:pc,html:`<div class="left-side">\r
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
`};var mc=(()=>{class t{constructor(){this.debouncedValue=Mo("",500)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["debounced-signal-example"]],decls:5,vars:2,consts:[["for","debounced-input"],["type","text","id","debounced-input","placeholder","Search...",3,"ngModelChange","ngModel"]],template:function(i,n){i&1&&(o(0,"label",0),s(1,"What are you looking for?"),a(),o(2,"input",1),q("ngModelChange",function(c){return K(n.debouncedValue,c)||(n.debouncedValue=c),c}),a(),o(3,"p"),s(4),a()),i&2&&(d(2),W("ngModel",n.debouncedValue),d(2),F("Debounced value: ",n.debouncedValue(),""))},dependencies:[_e,Se,me,Te],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var a2={component:mc,html:`<label for="debounced-input">What are you looking for?</label>\r
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
`};function Lv(t,r){if(t&1&&(o(0,"tr")(1,"td"),s(2),a(),o(3,"td"),s(4),a()()),t&2){let e=r.$implicit;d(2),C(e[0]),d(2),C(e[1])}}var hc=(()=>{class t{constructor(){this.exampleSignal=Io([["food1","Pizza"]])}setKey(e,i){!e||!i||this.exampleSignal.setKey(e,i)}delete(e){e&&this.exampleSignal.delete(e)}update(){this.exampleSignal.update(e=>new Map([...e.entries()].map(i=>[i[0],i[1].toLowerCase()])))}clear(){this.exampleSignal.clear()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["map-signal-basic-example"]],decls:30,vars:2,consts:[["key",""],["value",""],[1,"left-side"],[1,"inputs"],["type","text","placeholder","Key"],["type","text","placeholder","Value"],[3,"click"],[1,"right-side"]],template:function(i,n){if(i&1){let l=Y();o(0,"div",2)(1,"div",3),y(2,"input",4,0)(4,"input",5,1),a(),o(6,"div")(7,"button",6),_("click",function(){D(l);let p=V(3),w=V(5);return E(n.setKey(p.value,w.value))}),s(8,"Set key"),a(),o(9,"button",6),_("click",function(){D(l);let p=V(3);return E(n.delete(p.value))}),s(10,"Delete key"),a(),o(11,"button",6),_("click",function(){return D(l),E(n.clear())}),s(12,"Clear"),a(),o(13,"button",6),_("click",function(){return D(l),E(n.update())}),s(14,"Update (to lowercase)"),a()()(),o(15,"div",7)(16,"p"),s(17),a(),o(18,"p"),s(19),a(),o(20,"table")(21,"thead")(22,"tr")(23,"th"),s(24,"Key"),a(),o(25,"th"),s(26,"Value"),a()()(),o(27,"tbody"),H(28,Lv,5,2,"tr",null,Z),a()()()}i&2&&(d(17),F("isEmpty: ",n.exampleSignal.isEmpty().toString(),""),d(2),F("size: ",n.exampleSignal.size().toString(),""),d(9),U(n.exampleSignal()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:3rem}.inputs[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}input[_ngcontent-%COMP%]{margin-right:.25rem;max-width:10rem}button[_ngcontent-%COMP%]{margin-right:1rem;margin-top:.75rem;padding:0 .125rem}"]})}}return t})();var c2={component:hc,html:`<div class="left-side">\r
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
`};var fc=(()=>{class t{constructor(){this.favoriteFood=$t("chocolate chip cookies",{name:"favorite-food",method:Yt.Cookies,maxAge:60*60*24*7})}clearSignal(){this.favoriteFood.clear()}get cookieValue(){let e=document.cookie.match(new RegExp("(^| )favorite-food=([^;]+)"));return e?e[2]:null}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["persistent-signal-cookies-example"]],decls:7,vars:2,consts:[["for","favorite-food"],["type","text","id","favorite-food",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,n){i&1&&(o(0,"label",0),s(1,"Favorite food"),a(),o(2,"input",1),q("ngModelChange",function(c){return K(n.favoriteFood,c)||(n.favoriteFood=c),c}),a(),o(3,"button",2),_("click",function(){return n.clearSignal()}),s(4,"Clear"),a(),o(5,"p"),s(6),a()),i&2&&(d(2),W("ngModel",n.favoriteFood),d(4),F("Your favorite food is: ",n.cookieValue,""))},dependencies:[_e,Se,me,Te],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var g2={component:fc,html:`<label for="favorite-food">Favorite food</label>\r
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
`};var gc=(()=>{class t{constructor(){this.favoriteFood=$t("spaghetti",{name:"favorite-food",method:Yt.LocalStorage})}clearSignal(){this.favoriteFood.clear()}get localStorageValue(){return localStorage.getItem("favorite-food")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["persistent-signal-example"]],decls:7,vars:2,consts:[["for","favorite-food"],["type","text","id","favorite-food",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,n){i&1&&(o(0,"label",0),s(1,"Favorite food"),a(),o(2,"input",1),q("ngModelChange",function(c){return K(n.favoriteFood,c)||(n.favoriteFood=c),c}),a(),o(3,"button",2),_("click",function(){return n.clearSignal()}),s(4,"Clear"),a(),o(5,"p"),s(6),a()),i&2&&(d(2),W("ngModel",n.favoriteFood),d(4),F("Your favorite food is: ",n.localStorageValue,""))},dependencies:[_e,Se,me,Te],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var x2={component:gc,html:`<label for="favorite-food">Favorite food</label>\r
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
`};var _c=(()=>{class t{constructor(){this.favoriteFood=$t("spaghetti",{name:"favorite-food",method:Yt.LocalStorage})}clearSignal(){this.favoriteFood.clear()}get localStorageValue(){return localStorage.getItem("favorite-food")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["persistent-signal-local-storage-example"]],decls:7,vars:2,consts:[["for","favorite-food"],["type","text","id","favorite-food",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,n){i&1&&(o(0,"label",0),s(1,"Favorite food"),a(),o(2,"input",1),q("ngModelChange",function(c){return K(n.favoriteFood,c)||(n.favoriteFood=c),c}),a(),o(3,"button",2),_("click",function(){return n.clearSignal()}),s(4,"Clear"),a(),o(5,"p"),s(6),a()),i&2&&(d(2),W("ngModel",n.favoriteFood),d(4),F("Your favorite food is: ",n.localStorageValue,""))},dependencies:[_e,Se,me,Te],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var A2={component:_c,html:`<label for="favorite-food">Favorite food</label>\r
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
`};var vc=(()=>{class t{constructor(){this.acceptsTerms=$t(!1,{name:"accepts-terms",method:Yt.LocalStorage,serialize:e=>String(!!e),deserialize:e=>e==="true"})}get termsValue(){return localStorage.getItem("accepts-terms")??"null"}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["persistent-signal-serialization-example"]],decls:6,vars:2,consts:[[3,"selectedChange","selected"]],template:function(i,n){i&1&&(o(0,"div")(1,"ard-checkbox",0),q("selectedChange",function(c){return K(n.acceptsTerms,c)||(n.acceptsTerms=c),c}),a(),o(2,"span"),s(3,"Do you accept the terms?"),a()(),o(4,"p"),s(5),a()),i&2&&(d(),W("selected",n.acceptsTerms),d(4),F("Terms accepted: ",n.termsValue,""))},dependencies:[_e,nr,ir],styles:["div[_ngcontent-%COMP%]{display:flex;gap:.5rem}p[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return t})();var O2={component:vc,html:`<div>\r
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
`};var yc=(()=>{class t{constructor(){this.favoriteColor=In("red","favorite-color")}clearSignal(){this.favoriteColor.clear()}get queryParams(){return window.location.search}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["query-param-signal-example"]],decls:7,vars:2,consts:[["for","favorite-color"],["type","text","id","favorite-color",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,n){i&1&&(o(0,"label",0),s(1,"Favorite color"),a(),o(2,"input",1),q("ngModelChange",function(c){return K(n.favoriteColor,c)||(n.favoriteColor=c),c}),a(),o(3,"button",2),_("click",function(){return n.clearSignal()}),s(4,"Clear"),a(),o(5,"p"),s(6),a()),i&2&&(d(2),W("ngModel",n.favoriteColor),d(4),F("URL query params: ",n.queryParams,""))},dependencies:[_e,Se,me,Te],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var N2={component:yc,html:`<label for="favorite-color">Favorite color</label>\r
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
`};var Cc=(()=>{class t{constructor(){this.acceptsTerms=In(!1,{paramName:"accepts-terms",serialize:e=>e===null?null:String(e),deserialize:e=>e==="true"})}get queryParams(){return window.location.search}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["query-param-signal-serialization-example"]],decls:6,vars:2,consts:[[3,"selectedChange","selected"]],template:function(i,n){i&1&&(o(0,"div")(1,"ard-checkbox",0),q("selectedChange",function(c){return K(n.acceptsTerms,c)||(n.acceptsTerms=c),c}),a(),o(2,"span"),s(3,"Do you accept the terms?"),a()(),o(4,"p"),s(5),a()),i&2&&(d(),W("selected",n.acceptsTerms),d(4),F("URL query: ",n.queryParams,""))},dependencies:[_e,nr,ir],styles:["div[_ngcontent-%COMP%]{display:flex;gap:.5rem}p[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return t})();var q2={component:Cc,html:`<div>\r
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
`};function Bv(t,r){if(t&1&&(o(0,"li"),s(1),a()),t&2){let e=r.$implicit;d(),C(e)}}var bc=(()=>{class t{constructor(){this.exampleSignal=ko(["Pizza","Spaghetti","Tomatoes"])}enqueue(e){e&&this.exampleSignal.enqueue(e)}dequeue(){this.exampleSignal.dequeue()}clear(){this.exampleSignal.clear()}update(){this.exampleSignal.update(e=>e.filter(i=>i.length<=5))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["queue-signal-basic-example"]],decls:20,vars:2,consts:[["enqueueText",""],[1,"left-side"],["type","text","placeholder","Text to enqueue..."],[3,"click"],[1,"right-side"]],template:function(i,n){if(i&1){let l=Y();o(0,"div",1)(1,"div"),y(2,"input",2,0),a(),o(4,"button",3),_("click",function(){D(l);let p=V(3);return E(n.enqueue(p.value))}),s(5,"Enqueue"),a(),o(6,"button",3),_("click",function(){return D(l),E(n.dequeue())}),s(7,"Dequeue"),a(),o(8,"button",3),_("click",function(){return D(l),E(n.clear())}),s(9,"Clear"),a(),o(10,"button",3),_("click",function(){return D(l),E(n.update())}),s(11,"Update (leave only short)"),a()(),o(12,"div",4)(13,"p"),s(14),a(),o(15,"p"),s(16),a(),o(17,"ol"),H(18,Bv,2,1,"li",null,Vt),a()()}i&2&&(d(14),F("isEmpty: ",n.exampleSignal.isEmpty().toString(),""),d(2),F("size: ",n.exampleSignal.size().toString(),""),d(2),U(n.exampleSignal()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:3rem}button[_ngcontent-%COMP%]{margin-top:.75rem;margin-right:1rem;padding:0 .125rem}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0;line-height:1.2}"]})}}return t})();var J2={component:bc,html:`<div class="left-side">\r
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
`};var xc=(()=>{class t{constructor(){this.exampleSignal=Po(["Peas","Lettuce","Corn"])}add(e){e&&this.exampleSignal.add(e)}delete(e){e&&this.exampleSignal.delete(e)}update(){this.exampleSignal.update(e=>new Set([...e].map(i=>i.toLowerCase())))}clear(){this.exampleSignal.clear()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["set-signal-basic-example"]],decls:20,vars:3,consts:[["value",""],[1,"left-side"],[1,"inputs"],["type","text","placeholder","Value"],[3,"click"],[1,"right-side"]],template:function(i,n){if(i&1){let l=Y();o(0,"div",1)(1,"div",2),y(2,"input",3,0),a(),o(4,"div")(5,"button",4),_("click",function(){D(l);let p=V(3);return E(n.add(p.value))}),s(6,"Add value"),a(),o(7,"button",4),_("click",function(){D(l);let p=V(3);return E(n.delete(p.value))}),s(8,"Delete value"),a(),o(9,"button",4),_("click",function(){return D(l),E(n.clear())}),s(10,"Clear"),a(),o(11,"button",4),_("click",function(){return D(l),E(n.update())}),s(12,"Update (to lowercase)"),a()()(),o(13,"div",5)(14,"p"),s(15),a(),o(16,"p"),s(17),a(),o(18,"p"),s(19),a()()}i&2&&(d(15),F("isEmpty: ",n.exampleSignal.isEmpty().toString(),""),d(2),F("size: ",n.exampleSignal.size().toString(),""),d(2),C(n.exampleSignal.asArray()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:3rem}.inputs[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}input[_ngcontent-%COMP%]{margin-right:.25rem;max-width:10rem}button[_ngcontent-%COMP%]{margin-right:1rem;margin-top:.75rem;padding:0 .125rem}"]})}}return t})();var rk={component:xc,html:`<div class="left-side">\r
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
`};function Hv(t,r){if(t&1&&(o(0,"li"),s(1),a()),t&2){let e=r.$implicit;d(),C(e)}}var wc=(()=>{class t{constructor(){this.exampleSignal=Vo(["Pizza","Spaghetti","Tomatoes"])}push(e){e&&this.exampleSignal.push(e)}pop(){this.exampleSignal.pop()}clear(){this.exampleSignal.clear()}update(){this.exampleSignal.update(e=>e.filter(i=>i.length<=5))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["stack-signal-basic-example"]],decls:20,vars:2,consts:[["pushText",""],[1,"left-side"],["type","text","placeholder","Text to push..."],[3,"click"],[1,"right-side"],["reversed",""]],template:function(i,n){if(i&1){let l=Y();o(0,"div",1)(1,"div"),y(2,"input",2,0),a(),o(4,"button",3),_("click",function(){D(l);let p=V(3);return E(n.push(p.value))}),s(5,"Push"),a(),o(6,"button",3),_("click",function(){return D(l),E(n.pop())}),s(7,"Pop"),a(),o(8,"button",3),_("click",function(){return D(l),E(n.clear())}),s(9,"Clear"),a(),o(10,"button",3),_("click",function(){return D(l),E(n.update())}),s(11,"Update (leave only short)"),a()(),o(12,"div",4)(13,"p"),s(14),a(),o(15,"p"),s(16),a(),o(17,"ol",5),H(18,Hv,2,1,"li",null,Vt),a()()}i&2&&(d(14),F("isEmpty: ",n.exampleSignal.isEmpty().toString(),""),d(2),F("size: ",n.exampleSignal.size().toString(),""),d(2),U(n.exampleSignal()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:3rem}button[_ngcontent-%COMP%]{margin-top:.75rem;margin-right:1rem;padding:0 .125rem}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0;line-height:1.2}"]})}}return t})();var dk={component:wc,html:`<div class="left-side">\r
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
`};var Sc=(()=>{class t{constructor(){this.throttledValue=Oo("",500)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["throttled-signal-example"]],decls:5,vars:2,consts:[["for","throttled-input"],["type","text","id","throttled-input","placeholder","Search...",3,"ngModelChange","ngModel"]],template:function(i,n){i&1&&(o(0,"label",0),s(1,"What are you looking for?"),a(),o(2,"input",1),q("ngModelChange",function(c){return K(n.throttledValue,c)||(n.throttledValue=c),c}),a(),o(3,"p"),s(4),a()),i&2&&(d(2),W("ngModel",n.throttledValue),d(2),F("Throttled value: ",n.throttledValue(),""))},dependencies:[_e,Se,me,Te],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return t})();var fk={component:Sc,html:`<label for="throttled-input">What are you looking for?</label>\r
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
`};function Uv(t,r){if(t&1&&(o(0,"tr")(1,"td"),s(2),a(),o(3,"td"),s(4),a()()),t&2){let e=r.$implicit;d(2),C(e[0]),d(2),C(e[1])}}var Tc=(()=>{class t{constructor(){this.exampleSignal=Ro(["Peas",5,!0])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["tuple-signal-basic-example"]],decls:24,vars:3,consts:[[1,"left-side"],[1,"row"],["type","text",3,"ngModelChange","ngModel"],["type","number",3,"ngModelChange","ngModel"],["type","checkbox",3,"ngModelChange","ngModel"],[1,"right-side"],["width","32"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"div",1)(2,"label"),s(3,"Value at index 0"),a(),o(4,"input",2),_("ngModelChange",function(c){return n.exampleSignal.setAt(0,c)}),a()(),o(5,"div",1)(6,"label"),s(7,"Value at index 1"),a(),o(8,"input",3),_("ngModelChange",function(c){return n.exampleSignal.setAt(1,c)}),a()(),o(9,"div",1)(10,"label"),s(11,"Value at index 2"),a(),o(12,"input",4),_("ngModelChange",function(c){return n.exampleSignal.setAt(2,c)}),a()()(),o(13,"div",5)(14,"table")(15,"thead")(16,"tr")(17,"th",6),s(18,"Key"),a(),o(19,"th"),s(20,"Value"),a()()(),o(21,"tbody"),H(22,Uv,5,2,"tr",null,Z),a()()()),i&2&&(d(4),h("ngModel",n.exampleSignal()[0]),d(4),h("ngModel",n.exampleSignal()[1]),d(4),h("ngModel",n.exampleSignal()[2]),d(10),U(n.exampleSignal.entriesArray()))},dependencies:[_e,Se,Tn,ao,me,Te],styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:1rem}.row[_ngcontent-%COMP%]{padding:.5rem 0}input[_ngcontent-%COMP%]{max-width:10rem}label[_ngcontent-%COMP%]{padding-bottom:0}"]})}}return t})();var bk={component:Tc,html:`<div class="left-side">\r
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
`};var Nv=["exampleBox"],jv=(t,r,e,i)=>({width:t,height:r,padding:e,borderWidth:i}),Dc=(()=>{class t{constructor(){this.width=T("200px"),this.height=T("100px"),this.padding=T("12px 24px"),this.border=T("4px"),this.exampleBox=Pe("exampleBox"),this._cd=M(Gi)}onScroll(){this._cd.markForCheck()}getBoundingClientRect(){return this.exampleBox().nativeElement.getBoundingClientRect()}getPaddingRect(){return Ho(this.exampleBox())}getContentRect(){return Bo(this.exampleBox())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["dom-boxes-example"]],viewQuery:function(i,n){i&1&&Ve(n.exampleBox,Nv,5),i&2&&ce()},hostBindings:function(i,n){i&1&&_("scroll",function(){return n.onScroll()},!1,qe)("resize",function(){return n.onScroll()},!1,bn)},decls:54,vars:22,consts:[["exampleBox",""],[1,"inputs"],["for","width"],["type","text","id","width",3,"ngModelChange","ngModel"],["for","height"],["type","text","id","height",3,"ngModelChange","ngModel"],["for","padding"],["type","text","id","padding",3,"ngModelChange","ngModel"],["for","border"],["type","text","id","border",3,"ngModelChange","ngModel"],[1,"example-box",3,"ngStyle"],[1,"values"],[1,"value"]],template:function(i,n){if(i&1){let l=Y();o(0,"div",1)(1,"div")(2,"label",2),s(3,"Width"),a(),o(4,"input",3),q("ngModelChange",function(p){return D(l),K(n.width,p)||(n.width=p),E(p)}),a()(),o(5,"div")(6,"label",4),s(7,"Height"),a(),o(8,"input",5),q("ngModelChange",function(p){return D(l),K(n.height,p)||(n.height=p),E(p)}),a()(),o(9,"div")(10,"label",6),s(11,"Padding"),a(),o(12,"input",7),q("ngModelChange",function(p){return D(l),K(n.padding,p)||(n.padding=p),E(p)}),a()(),o(13,"div")(14,"label",8),s(15,"Border"),a(),o(16,"input",9),q("ngModelChange",function(p){return D(l),K(n.border,p)||(n.border=p),E(p)}),a()()(),o(17,"div",10,0),y(19,"div"),a(),o(20,"div",11)(21,"div",12)(22,"strong"),s(23,"Bounding Client Rect"),a(),o(24,"span"),s(25),a(),o(26,"span"),s(27),a(),o(28,"span"),s(29),a(),o(30,"span"),s(31),a()(),o(32,"div",12)(33,"strong"),s(34,"Padding Rect"),a(),o(35,"span"),s(36),a(),o(37,"span"),s(38),a(),o(39,"span"),s(40),a(),o(41,"span"),s(42),a()(),o(43,"div",12)(44,"strong"),s(45,"Content Rect"),a(),o(46,"span"),s(47),a(),o(48,"span"),s(49),a(),o(50,"span"),s(51),a(),o(52,"span"),s(53),a()()()}i&2&&(d(4),W("ngModel",n.width),d(4),W("ngModel",n.height),d(4),W("ngModel",n.padding),d(4),W("ngModel",n.border),d(),h("ngStyle",Za(17,jv,n.width(),n.height(),n.padding(),n.border())),d(8),F("Top: ",n.getBoundingClientRect().top,""),d(2),F("Left: ",n.getBoundingClientRect().left,""),d(2),F("Width: ",n.getBoundingClientRect().width,""),d(2),F("Height: ",n.getBoundingClientRect().height,""),d(5),F("Top: ",n.getPaddingRect().top,""),d(2),F("Left: ",n.getPaddingRect().left,""),d(2),F("Width: ",n.getPaddingRect().width,""),d(2),F("Height: ",n.getPaddingRect().height,""),d(5),F("Top: ",n.getContentRect().top,""),d(2),F("Left: ",n.getContentRect().left,""),d(2),F("Width: ",n.getContentRect().width,""),d(2),F("Height: ",n.getContentRect().height,""))},dependencies:[J,to,_e,Se,me,Te],styles:[".inputs[_ngcontent-%COMP%]{display:grid;grid-template-columns:max-content max-content;grid-template-rows:max-content max-content;gap:1rem 2rem}.example-box[_ngcontent-%COMP%]{margin:2rem 0;background-color:#c3deb7;border:solid #FFEEBC;box-sizing:content-box}.example-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#a0c5e8;height:100%}.values[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,max-content);gap:2rem}.values[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:max-content}"]})}}return t})();var Ik={component:Dc,html:`<div class="inputs">\r
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
`};var Ec=(()=>{class t{constructor(){this.inputValue=T("How would <b>this</b> text be displayed?")}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["escape-html-example"]],decls:13,vars:5,consts:[[3,"ngModelChange","ngModel"],[1,"grid"],[3,"innerHTML"]],template:function(i,n){i&1&&(o(0,"textarea",0),q("ngModelChange",function(c){return K(n.inputValue,c)||(n.inputValue=c),c}),a(),o(1,"div",1)(2,"div")(3,"strong"),s(4,"Unescaped:"),a(),y(5,"br")(6,"p",2),a(),o(7,"div")(8,"strong"),s(9,"Escaped:"),a(),y(10,"br")(11,"p",2),ut(12,"escapeHTML"),a()()),i&2&&(W("ngModel",n.inputValue),d(6),h("innerHTML",n.inputValue(),de),d(5),h("innerHTML",Nt(12,3,n.inputValue()),de))},dependencies:[Co,yo,_e,Se,me,Te],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:.5rem}textarea[_ngcontent-%COMP%]{padding:.25rem .375rem;min-height:5em;resize:vertical}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}strong[_ngcontent-%COMP%]{line-height:1.5}"]})}}return t})();var Hk={component:Ec,html:`<textarea [(ngModel)]="inputValue"></textarea>\r
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
}`};var Ac=(()=>{class t{constructor(){this.file=T(void 0)}onFileUpload(e){this.file.set(e.target.files?.[0])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["file-pipes-example"]],decls:21,vars:10,consts:[["type","file","id","file",3,"change"],[1,"values"]],template:function(i,n){if(i&1&&(o(0,"input",0),_("change",function(c){return n.onFileUpload(c)}),a(),o(1,"div",1)(2,"strong"),s(3,"Full file name:"),a(),o(4,"span"),s(5),a(),o(6,"strong"),s(7,"File name:"),a(),o(8,"span"),s(9),ut(10,"filename"),a(),o(11,"strong"),s(12,"File extension:"),a(),o(13,"span"),s(14),ut(15,"fileext"),a(),o(16,"strong"),s(17,"File size:"),a(),o(18,"span"),s(19),ut(20,"filesize"),a()()),i&2){let l;d(5),C((l=n.file())==null?null:l.name),d(4),C(Nt(10,4,n.file())),d(5),C(Nt(15,6,n.file())),d(5),C(Nt(20,8,n.file()))}},dependencies:[Eo,So,To,Do],styles:[".values[_ngcontent-%COMP%]{margin-top:1rem;display:grid;grid-template-columns:max-content max-content;gap:.25rem 1rem}"]})}}return t})();var Wk={component:Ac,html:`<input type="file" id="file" (change)="onFileUpload($event)">\r
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
`};function Yv(t,r){if(t&1){let e=Y();o(0,"button",0),_("click",function(){D(e);let n=f();return E(n.onButtonClick())}),s(1,"Find out"),a()}}function $v(t,r){t&1&&(o(0,"p"),s(1,"File System API is "),o(2,"strong",1),s(3,"supported"),a(),s(4,"! You can view the below examples."),a())}function zv(t,r){t&1&&(o(0,"p"),s(1," File System API is "),o(2,"strong",2),s(3,"not supported"),a(),s(4,". You will not be able to correctly view the below examples. See the "),o(5,"a",3),s(6,"caniuse.com page"),a(),s(7,` to find out which browsers are supported.
`),a())}function Wv(t,r){if(t&1&&g(0,$v,5,0,"p")(1,zv,8,0,"p"),t&2){let e=f();b(e.isSupported()?0:1)}}var Fc=(()=>{class t{constructor(){this.fileSystem=M(Ti),this.hasClicked=T(!1),this.isSupported=T(!1)}onButtonClick(){this.hasClicked.set(!0),this.isSupported.set(this.fileSystem.isFileSystemAPISupported("showOpenFilePicker"))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["file-system-is-supported-example"]],decls:5,vars:2,consts:[[3,"click"],[1,"supported"],[1,"not-supported"],["href","https://caniuse.com/native-filesystem-api"]],template:function(i,n){i&1&&(o(0,"p")(1,"span"),s(2,"Does your browser support File System API?"),a(),g(3,Yv,2,0,"button"),a(),g(4,Wv,2,1)),i&2&&(d(3),b(n.hasClicked()?-1:3),d(),b(n.hasClicked()?4:-1))},styles:["button[_ngcontent-%COMP%]{margin-left:1ch}.supported[_ngcontent-%COMP%]{color:green}.not-supported[_ngcontent-%COMP%]{color:#ff4500}"]})}}return t})();var Jk={component:Fc,html:`<p>\r
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
`};function Kv(t,r){if(t&1&&(s(0," Uploaded "),o(1,"i"),s(2),a()),t&2){let e=f();d(2),C(e.fileName())}}function qv(t,r){t&1&&s(0," File upload request was cancelled. ")}var Mc=(()=>{class t{constructor(){this.fileSystem=M(Ti),this.successfulUpload=T(null),this.fileName=T("")}onButtonClick(){return ke(this,null,function*(){let e=yield this.fileSystem.requestFileUpload({directoryId:"gorilla",startDirectory:An.Downloads,method:En.PreferFileSystem,multiple:!1,types:[{description:"Text files",accept:{"text/plain":[".txt"]}},{description:"Image files",accept:{"image/png":[".png"],"image/jpeg":[".jpg",".jpeg"]}},{description:"PDF files",accept:{"application/pdf":[".pdf"]}}]});this.successfulUpload.set(!!e),this.successfulUpload()&&this.fileName.set(e?.name??"No file name")})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["file-system-request-upload-example"]],decls:5,vars:1,consts:[[3,"click"]],template:function(i,n){i&1&&(o(0,"button",0),_("click",function(){return n.onButtonClick()}),s(1,"Click here to upload a file"),a(),o(2,"p"),g(3,Kv,3,1)(4,qv,1,0),a()),i&2&&(d(3),b(n.successfulUpload()===!0?3:n.successfulUpload()===!1?4:-1))},dependencies:[J],encapsulation:2})}}return t})();var lP={component:Mc,html:`<button (click)="onButtonClick()">Click here to upload a file</button>\r
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
`};var Ic=(()=>{class t{constructor(){this.fileSystem=M(Ti),this.fileName=T("gorillas.txt"),this.textToSave=T("Gorillas like to eat bamboo.")}onButtonClick(){this.fileSystem.saveAs(this.textToSave(),{fileName:this.fileName(),method:En.PreferFileSystem,directoryId:"gorillas",startDirectory:An.Downloads})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["file-system-save-as-example"]],decls:4,vars:2,consts:[["type","text",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,n){i&1&&(o(0,"input",0),q("ngModelChange",function(c){return K(n.fileName,c)||(n.fileName=c),c}),a(),o(1,"textarea",1),q("ngModelChange",function(c){return K(n.textToSave,c)||(n.textToSave=c),c}),a(),o(2,"button",2),_("click",function(){return n.onButtonClick()}),s(3,"Save to file"),a()),i&2&&(W("ngModel",n.fileName),d(),W("ngModel",n.textToSave))},dependencies:[J,_e,Se,me,Te],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:.5rem;align-items:flex-start}input[_ngcontent-%COMP%]{min-width:200px}textarea[_ngcontent-%COMP%]{min-width:300px;min-height:100px}"]})}}return t})();var _P={component:Ic,html:`<input type="text" [(ngModel)]="fileName">\r
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
`};var kc=(()=>{class t{constructor(){this.eventCounter=T(0)}onHoldEvent(){this.eventCounter.update(e=>e+1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["hold-basic-example"]],decls:4,vars:1,consts:[[3,"ardHold"]],template:function(i,n){i&1&&(o(0,"button",0),_("ardHold",function(){return n.onHoldEvent()}),s(1,"Click and Hold"),a(),o(2,"p"),s(3),a()),i&2&&(d(3),F(" Total events fired: ",n.eventCounter(),`
`))},dependencies:[Mn,Fn],encapsulation:2})}}return t})();var SP={component:kc,html:`<button (ardHold)="onHoldEvent()">Click and Hold</button>\r
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
`};var Pc=(()=>{class t{constructor(){this.eventCounter=T(0)}onHoldEvent(){this.eventCounter.update(e=>e+1)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["hold-timings-example"]],decls:4,vars:1,consts:[["ardHoldDelay","2000","ardHoldRepeat","200",3,"ardHold"]],template:function(i,n){i&1&&(o(0,"button",0),_("ardHold",function(){return n.onHoldEvent()}),s(1,` Click and Hold - but this time very slow
`),a(),o(2,"p"),s(3),a()),i&2&&(d(3),F("Total events fired: ",n.eventCounter(),""))},dependencies:[Mn,Fn],encapsulation:2})}}return t})();var IP={component:Pc,html:`<button (ardHold)="onHoldEvent()" ardHoldDelay="2000" ardHoldRepeat="200">\r
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
`};function Gv(t,r){if(t&1&&(o(0,"div"),s(1),a()),t&2){let e=r.$implicit;d(),C(e)}}var Vc=(()=>{class t{constructor(){this.currentPage=T(1),this.items=x(()=>new Array(this.currentPage()*5).fill(0).map((e,i)=>i)),this.isInfScrollActive=T(!0)}onThresholdReach(){console.log(`Threshold has been reached! Loading data for page ${this.currentPage()+1}...`),setTimeout(()=>{this.currentPage.update(e=>e+1),this.isInfScrollActive.set(!0)},100)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["infinite-scroll-host-example"]],decls:3,vars:1,consts:[["ardInfScroll","","ardInfScrollTarget","host",1,"scroll-host",3,"ardInfScrollReachThreshold","ardInfScrollActiveChange","ardInfScrollActive"]],template:function(i,n){i&1&&(o(0,"div",0),_("ardInfScrollReachThreshold",function(){return n.onThresholdReach()}),q("ardInfScrollActiveChange",function(c){return K(n.isInfScrollActive,c)||(n.isInfScrollActive=c),c}),H(1,Gv,2,1,"div",null,Z),a()),i&2&&(W("ardInfScrollActive",n.isInfScrollActive),d(),U(n.items()))},dependencies:[wo,xo],styles:[".scroll-host[_ngcontent-%COMP%]{height:50vh;width:50vh;overflow-y:auto;border:1px solid red;margin:0 auto}.scroll-host[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:20vh;border-bottom:1px solid black;position:relative;display:grid;place-items:center;font-size:40px;font-weight:700}"]})}}return t})();var BP={component:Vc,html:`<div\r
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
`};var Qv=t=>({"--position":t}),Pa=400,Oc=Pa/20,Rc=(()=>{class t{constructor(){this.keyboard=M(jt),this.position=T(Pa/2)}ngOnInit(){this.keyboard.listenToKey("A").subscribe(()=>{this.position()<=0||this.position.update(e=>e-Oc)}),this.keyboard.listenToKey("D").subscribe(()=>{this.position()>=Pa||this.position.update(e=>e+Oc)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["keyboard-service-listen-to-key-example"]],decls:10,vars:4,consts:[[1,"square-container"],[1,"square"]],template:function(i,n){i&1&&(o(0,"div",0),y(1,"div",1),a(),o(2,"p"),s(3," Click "),o(4,"ard-kbd"),s(5,"A"),a(),s(6," or "),o(7,"ard-kbd"),s(8,"D"),a(),s(9,` to move the square.
`),a()),i&2&&(d(),Ce(be(2,Qv,n.position()+"px")))},dependencies:[Re,lt],styles:[".square-container[_ngcontent-%COMP%]{width:450px;border:1px solid var(--ard-detail-light);margin-bottom:1rem}.square[_ngcontent-%COMP%]{width:50px;height:50px;position:relative;left:var(--position);background-color:#9932cc}"]})}}return t})();var WP={component:Rc,html:`<div class="square-container">\r
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
`};var Lc=(()=>{class t{constructor(){this.keyboard=M(jt),this.isZeroHeld=T(!1)}ngOnInit(){this.keyboard.listenToKeyState("0").subscribe(({isHeld:e})=>{this.isZeroHeld.set(e)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["keyboard-service-listen-to-key-state-example"]],decls:5,vars:3,template:function(i,n){i&1&&(o(0,"p"),s(1," The zero key is currently "),o(2,"strong"),s(3),a(),s(4,`.
`),a()),i&2&&(d(2),ge(n.isZeroHeld()?"held":"not-held"),d(),C(n.isZeroHeld()?"pressed":"idle"))},dependencies:[Re],styles:[".held[_ngcontent-%COMP%]{color:green}.not-held[_ngcontent-%COMP%]{color:red}"]})}}return t})();var eV={component:Lc,html:`<p>\r
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
`};function Xv(t,r){t&1&&(o(0,"label",1),s(1,"Search"),a(),y(2,"input",2))}var Bc=(()=>{class t{constructor(){this.keyboard=M(jt),this.isOpen=T(!1)}ngOnInit(){this.keyboard.listenToShortcut(["Ctrl","F"]).subscribe(({event:e})=>{e.preventDefault(),this.isOpen.update(i=>!i)}),this.keyboard.listenToShortcut(["ShiftRight","Q"]).subscribe(()=>alert("RightShift + Q was pressed!"))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["keyboard-service-listen-to-shortcut-example"]],decls:11,vars:1,consts:[["full","false"],["for","example-search-bar"],["type","text","id","example-search-bar"]],template:function(i,n){i&1&&(o(0,"p"),s(1,"Press "),o(2,"ard-kbd-shortcut",0),s(3,"Ctrl+F"),a(),s(4," to toggle a search bar."),a(),o(5,"p"),s(6,"Press "),o(7,"ard-kbd-shortcut",0),s(8,"RightShift+Q"),a(),s(9," to show an alert."),a(),g(10,Xv,3,0)),i&2&&(d(10),b(n.isOpen()?10:-1))},dependencies:[Vi,Pi],styles:["input[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return t})();var lV={component:Bc,html:`<p>Press <ard-kbd-shortcut full="false">Ctrl+F</ard-kbd-shortcut> to toggle a search bar.</p>\r
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
`};var Hc=(()=>{class t{constructor(){this.keyboard=M(jt)}getModifierKeyText(e){return e?"pressed":"idle"}getModifierKeyClass(e){return e?"down":"up"}getLockKeyText(e){return e===void 0?"unknown":e?"active":"inactive"}getLockKeyClass(e){return e===void 0?"unknown":e?"down":"up"}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["keyboard-service-modifier-key-state-example"]],decls:72,vars:42,consts:[[1,"container"],[1,"modifier-table"],["scope","col"],["scope","row"],[1,"not-applicable"],[1,"lock-table"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th",2),s(5,"Key"),a(),o(6,"th",2),s(7,"Left"),a(),o(8,"th",2),s(9,"Right"),a(),o(10,"th",2),s(11,"Any"),a()()(),o(12,"tbody")(13,"tr")(14,"th",3),s(15,"Ctrl"),a(),o(16,"td"),s(17),a(),o(18,"td"),s(19),a(),o(20,"td"),s(21),a()(),o(22,"tr")(23,"th",3),s(24,"Alt"),a(),o(25,"td"),s(26),a(),o(27,"td"),s(28),a(),o(29,"td",4),s(30,"N/A"),a()(),o(31,"tr")(32,"th",3),s(33,"Shift"),a(),o(34,"td"),s(35),a(),o(36,"td"),s(37),a(),o(38,"td"),s(39),a()(),o(40,"tr")(41,"th",3),s(42,"Meta"),a(),o(43,"td"),s(44),a(),o(45,"td"),s(46),a(),o(47,"td"),s(48),a()()()(),o(49,"table",5)(50,"thead")(51,"tr")(52,"th",2),s(53,"Key"),a(),o(54,"th",2),s(55,"State"),a()()(),o(56,"tbody")(57,"tr")(58,"th",3),s(59,"Caps Lock"),a(),o(60,"td"),s(61),a()(),o(62,"tr")(63,"th",3),s(64,"Num Lock"),a(),o(65,"td"),s(66),a()(),o(67,"tr")(68,"th",3),s(69,"Scroll Lock"),a(),o(70,"td"),s(71),a()()()()()),i&2&&(d(16),ge(n.getModifierKeyClass(n.keyboard.isLeftCtrlHeld())),d(),C(n.getModifierKeyText(n.keyboard.isLeftCtrlHeld())),d(),ge(n.getModifierKeyClass(n.keyboard.isRightCtrlHeld())),d(),C(n.getModifierKeyText(n.keyboard.isRightCtrlHeld())),d(),ge(n.getModifierKeyClass(n.keyboard.isCtrlHeld())),d(),C(n.getModifierKeyText(n.keyboard.isCtrlHeld())),d(4),ge(n.getModifierKeyClass(n.keyboard.isAltHeld())),d(),C(n.getModifierKeyText(n.keyboard.isAltHeld())),d(),ge(n.getModifierKeyClass(n.keyboard.isAltGraphHeld())),d(),C(n.getModifierKeyText(n.keyboard.isAltGraphHeld())),d(6),ge(n.getModifierKeyClass(n.keyboard.isLeftShiftHeld())),d(),C(n.getModifierKeyText(n.keyboard.isLeftShiftHeld())),d(),ge(n.getModifierKeyClass(n.keyboard.isRightShiftHeld())),d(),C(n.getModifierKeyText(n.keyboard.isRightShiftHeld())),d(),ge(n.getModifierKeyClass(n.keyboard.isShiftHeld())),d(),C(n.getModifierKeyText(n.keyboard.isShiftHeld())),d(4),ge(n.getModifierKeyClass(n.keyboard.isLeftMetaHeld())),d(),C(n.getModifierKeyText(n.keyboard.isLeftMetaHeld())),d(),ge(n.getModifierKeyClass(n.keyboard.isRightMetaHeld())),d(),C(n.getModifierKeyText(n.keyboard.isRightMetaHeld())),d(),ge(n.getModifierKeyClass(n.keyboard.isMetaHeld())),d(),C(n.getModifierKeyText(n.keyboard.isMetaHeld())),d(12),ge(n.getLockKeyClass(n.keyboard.capsLockState())),d(),C(n.getLockKeyText(n.keyboard.capsLockState())),d(4),ge(n.getLockKeyClass(n.keyboard.numLockState())),d(),C(n.getLockKeyText(n.keyboard.numLockState())),d(4),ge(n.getLockKeyClass(n.keyboard.scrollLockState())),d(),C(n.getLockKeyText(n.keyboard.scrollLockState())))},dependencies:[Re],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:1.75rem}table[_ngcontent-%COMP%]{table-layout:fixed;width:max-content}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:.25rem .5rem;border-collapse:collapse;border:1px solid var(--ard-detail)}th[_ngcontent-%COMP%]{font-weight:600;background-color:var(--ard-bg-filled)}td[_ngcontent-%COMP%]{font-weight:500}.down[_ngcontent-%COMP%]{color:green}.up[_ngcontent-%COMP%]{color:red}.unknown[_ngcontent-%COMP%]{font-weight:400;font-style:italic}.not-applicable[_ngcontent-%COMP%]{font-weight:400}.modifier-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{width:8.1ch}.modifier-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-of-type{width:6ch}.lock-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-of-type{width:8.75ch}"]})}}return t})();var gV={component:Hc,html:`<div class="container">\r
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
`};var Zv=["targetBox"];function Jv(t,r){if(t&1&&(o(0,"tr")(1,"th",4),s(2,"Left"),a(),o(3,"td"),s(4),a(),o(5,"td"),s(6),a()(),o(7,"tr")(8,"th",4),s(9,"Right"),a(),o(10,"td"),s(11),a(),o(12,"td"),s(13),a()(),o(14,"tr")(15,"th",4),s(16,"Top"),a(),o(17,"td"),s(18),a(),o(19,"td"),s(20),a()(),o(21,"tr")(22,"th",4),s(23,"Bottom"),a(),o(24,"td"),s(25),a(),o(26,"td"),s(27),a()()),t&2){let e,i,n,l,c,p,w,L,I=f();d(4),C((e=I.lastEventData())==null?null:e.left),d(2),C((i=I.lastEventData())==null?null:i.overflowsLeft),d(5),C((n=I.lastEventData())==null?null:n.right),d(2),C((l=I.lastEventData())==null?null:l.overflowsRight),d(5),C((c=I.lastEventData())==null?null:c.top),d(2),C((p=I.lastEventData())==null?null:p.overflowsTop),d(5),C((w=I.lastEventData())==null?null:w.bottom),d(2),C((L=I.lastEventData())==null?null:L.overflowsBottom)}}function ey(t,r){t&1&&(o(0,"tr")(1,"th",4),s(2,"Left"),a(),o(3,"td",5),s(4,"Waiting for events..."),a()(),o(5,"tr")(6,"th",4),s(7,"Right"),a()(),o(8,"tr")(9,"th",4),s(10,"Top"),a()(),o(11,"tr")(12,"th",4),s(13,"Bottom"),a()())}var Uc=(()=>{class t{constructor(){this.lastEventData=T(null),this.targetBox=Pe("targetBox")}onClick(e){this.targetBox()&&this.lastEventData.set(Uo(e,this.targetBox()))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["relative-pos-basic-example"]],viewQuery:function(i,n){i&1&&Ve(n.targetBox,Zv,5),i&2&&ce()},hostBindings:function(i,n){i&1&&_("click",function(c){return n.onClick(c)},!1,qe)},decls:18,vars:1,consts:[["targetBox",""],[1,"container"],[1,"target-box"],["scope","col"],["scope","row"],["colspan","2","rowspan","4",1,"waiting"]],template:function(i,n){i&1&&(o(0,"p"),s(1,` Click anywhere to show the click position relative to the target box.
`),a(),o(2,"div",1)(3,"div",2,0),s(5,"Target box"),a(),o(6,"table")(7,"thead")(8,"tr")(9,"th",3),s(10,"Direction"),a(),o(11,"th",3),s(12,"Relative pos"),a(),o(13,"th",3),s(14,"Overflows?"),a()()(),o(15,"tbody"),g(16,Jv,28,8)(17,ey,14,0),a()()()),i&2&&(d(16),b(n.lastEventData()?16:17))},styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:1.75rem}.target-box[_ngcontent-%COMP%]{width:150px;height:100px;background-color:salmon;display:grid;place-items:center}table[_ngcontent-%COMP%]{table-layout:fixed;width:max-content}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:.25rem .5rem;border-collapse:collapse;border:1px solid var(--ard-detail)}th[_ngcontent-%COMP%]{font-weight:600;background-color:var(--ard-bg-filled)}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-of-type{width:6ch}"]})}}return t})();var SV={component:Uc,html:`<p>\r
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
`};var ty=["item"];function iy(t,r){if(t&1){let e=Y();o(0,"div",4)(1,"code"),s(2,"viewportRelation"),a(),o(3,"span"),s(4),a(),o(5,"code"),s(6,"isInViewport"),a(),o(7,"span"),s(8),a(),o(9,"code"),s(10,"position.top"),a(),o(11,"span"),s(12),ut(13,"number"),a(),o(14,"code"),s(15,"position.bottom"),a(),o(16,"span"),s(17),ut(18,"number"),a(),y(19,"div"),o(20,"button",3),_("click",function(){D(e);let n=f();return E(n.toggleOverlay())}),s(21,"Close"),a()()}if(t&2){let e,i,n,l,c=f();d(4),C((e=c.observerRef())==null?null:e.viewportRelation()),d(4),C((i=c.observerRef())==null?null:i.isInViewport()),d(4),C(qi(13,4,(n=c.observerRef())==null||(n=n.position())==null?null:n.top,"1.5-5")),d(5),C(qi(18,7,(l=c.observerRef())==null||(l=l.position())==null?null:l.bottom,"1.5-5"))}}var Nc=(()=>{class t{constructor(){this.vss=M(go),this.isOverlayActive=T(!1),this.element=Pe("item"),this.observerRef=T(null)}toggleOverlay(){this.isOverlayActive.update(e=>!e)}ngAfterViewInit(){let e=this.element();e&&this.observerRef.set(this.vss.observeElement(e))}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["viewport-observer-observer-ref-example"]],viewQuery:function(i,n){i&1&&Ve(n.element,ty,5),i&2&&ce()},decls:7,vars:1,consts:[["item",""],[1,"container"],[1,"item"],[3,"click"],[1,"overlay"]],template:function(i,n){if(i&1){let l=Y();o(0,"div",1)(1,"div",2,0),s(3,"Observed element"),a(),o(4,"button",3),_("click",function(){return D(l),E(n.toggleOverlay())}),s(5,"Toggle overlay"),a()(),g(6,iy,22,10,"div",4)}i&2&&(d(6),b(n.isOverlayActive()?6:-1))},dependencies:[Ar],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:space-around}.item[_ngcontent-%COMP%]{height:150px;width:225px;background-color:#deb887;display:grid;place-items:center}.overlay[_ngcontent-%COMP%]{position:fixed;top:5rem;left:20rem;z-index:9;padding:1.5rem;background-color:var(--ard-bg);border:1px solid var(--ard-border);display:grid;grid-template-columns:max-content 12ch;gap:.5rem}"]})}}return t})();var kV={component:Nc,html:`<div class="container">\r
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
`};function jc(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,i)}return e}function Yc(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?jc(Object(e),!0).forEach(function(i){ny(t,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):jc(Object(e)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))})}return t}function ny(t,r,e){return r=ry(r),r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function ry(t){var r=ay(t,"string");return typeof r=="symbol"?r:String(r)}function ay(t,r){if(typeof t!="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var i=e.call(t,r||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}var oy=$c({}),TR=oy;function $c(t){return r.withOptions=e=>$c(Yc(Yc({},t),e)),r;function r(e,...i){let n=typeof e=="string"?[e]:e.raw,{alignValues:l=!1,escapeSpecialCharacters:c=Array.isArray(e),trimWhitespace:p=!0}=t,w="";for(let G=0;G<n.length;G++){let A=n[G];if(c&&(A=A.replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`").replace(/\\\$/g,"$").replace(/\\\{/g,"{")),w+=A,G<i.length){let P=l?sy(i[G],w):i[G];w+=P}}let L=w.split(`
`),I=null;for(let G of L){let A=G.match(/^(\s+)\S+/);if(A){let P=A[1].length;I?I=Math.min(I,P):I=P}}if(I!==null){let G=I;w=L.map(A=>A[0]===" "||A[0]==="	"?A.slice(G):A).join(`
`)}return p&&(w=w.trim()),c&&(w=w.replace(/\\n/g,`
`)),w}}function sy(t,r){if(typeof t!="string"||!t.includes(`
`))return t;let i=r.slice(r.lastIndexOf(`
`)+1).match(/^(\s+)/);if(i){let n=i[1];return t.replace(/\n/g,`
${n}`)}return t}var Ct={TS:"typescript",SCSS:"scss",HTML:"xml",PlainText:"txt"};var zc=(()=>{class t{loadDynamicComponent(e,i){if(!i)return;i.clear(),i.createComponent(e).changeDetectorRef.detectChanges()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=re({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var ly=["exampleDisplay"];function dy(t,r){if(t&1&&(o(0,"div",4),s(1),a()),t&2){let e=f();d(),C(e.heading())}}function cy(t,r){if(t&1){let e=Y();o(0,"div",5)(1,"ard-icon-button",7),_("click",function(){D(e);let n=f();return E(n.toggleCodeShown())}),o(2,"ard-icon"),s(3,"code"),a()()()}}function uy(t,r){}function py(t,r){if(t&1&&(o(0,"ard-tab",11)(1,"div",9),y(2,"app-code",12),g(3,uy,0,0,"ng-template",13),a()()),t&2){let e=r.$implicit;f(3);let i=V(10);h("tabId",e.label)("label",e.label),d(2),h("language",e.type)("code",e.code),d(),h("ngTemplateOutlet",i)}}function my(t,r){if(t&1){let e=Y();o(0,"ard-tabber",10),_("changeTab",function(n){D(e);let l=f(2);return E(l.onTabChange(n))}),H(1,py,4,5,"ard-tab",11,Z),a()}if(t&2){let e,i=f(2);h("initialTab",(e=i.initialTab())==null?null:e.toUpperCase()),d(),U(i.mappedData())}}function hy(t,r){}function fy(t,r){if(t&1&&(o(0,"div",9),y(1,"app-code",12),g(2,hy,0,0,"ng-template",13),a()),t&2){let e=f(2),i=V(10);d(),h("language",e.mappedData()[0].type)("code",e.mappedData()[0].code),d(),h("ngTemplateOutlet",i)}}function gy(t,r){if(t&1&&g(0,my,3,1,"ard-tabber",8)(1,fy,3,3,"div",9),t&2){let e=f();b(e.mappedData().length>1?0:1)}}function _y(t,r){}function vy(t,r){if(t&1&&(y(0,"app-code",12),g(1,_y,0,0,"ng-template",13)),t&2){let e=f(),i=V(10);h("language",e.simpleCodeType())("code",e.simpleCodePiece()),d(),h("ngTemplateOutlet",i)}}function yy(t,r){if(t&1&&(o(0,"p"),s(1,"This example can only be viewed in its own tab. "),o(2,"a",14),s(3,"Open example page"),a(),s(4,"."),a()),t&2){let e=f();d(2),h("href",e.viewInFullWindowLink(),Cn)}}function Cy(t,r){t&1&&Qa(0,null,1)}function by(t,r){if(t&1&&y(0,"app-copy-button",15),t&2){let e=f();h("contentToCopy",e.codeToCopy())}}function xy(t){switch(t){case"ts":return Ct.TS;case"html":return Ct.HTML;case"scss":case"css":return Ct.SCSS;default:switch(t.split(".").at(-1)?.toLowerCase()){case"ts":return Ct.TS;case"html":return Ct.HTML;case"scss":case"css":return Ct.SCSS;default:return Ct.PlainText}}}var Wc=["HTML","TS","SCSS","CSS"],hr=(()=>{class t{constructor(){this.data=m.required(),this.heading=m.required(),this.viewInFullWindowLink=m(null,{transform:e=>e?.startsWith("/")?e:e&&"/"+e}),this.isSimpleCodeDefined=x(()=>!!this.simpleCodePiece()),this.simpleCodePiece=x(()=>{let e=this.data();return e.simpleTs??e.simpleHtml??e.simpleScss??e.simpleTxt}),this.simpleCodeType=x(()=>{let e=this.data();return e.simpleTs?Ct.TS:e.simpleHtml?Ct.HTML:e.simpleScss?Ct.SCSS:Ct.PlainText}),this.isComponentDefined=x(()=>!!this.data().component),this.isCodeShown=wt(!0),this.initialTab=m(void 0),this.nonExpandable=m(!1,{transform:e=>st(e)}),this.codeToCopy=x(()=>this.shouldShowFullCodeData()?(this._currentTab()?this.mappedData().find(i=>i.label===this._currentTab()):this.mappedData()[0]).code:this.simpleCodePiece()),this._currentTab=T(""),this.shouldShowFullCodeData=x(()=>this.isCodeShown()||!this.isSimpleCodeDefined()),this.displayWhenSimple=m(!1,{transform:e=>st(e)}),this.mappedData=x(()=>{let e=this.data();return Object.entries(e).filter(i=>i[0]!=="component"&&i[0]!=="simpleHtml"&&i[0]!=="simpleScss"&&i[0]!=="simpleTs").map(i=>{let n=i[0];return typeof n=="string"&&n.match(/^(html|s?css|ts)$/i)&&(n=n.toUpperCase()),{label:n,code:i[1],type:xy(n)}}).sort((i,n)=>{let l=Wc.indexOf(i.label),c=Wc.indexOf(n.label);return l!==-1&&c!==-1?l-c:l!==-1?-1:c!==-1?1:i.label.localeCompare(n.label)})}),this.componentLoader=M(zc),this.exampleDisplay=Pe("exampleDisplay",{read:Pt}),se(()=>{(this.isSimpleCodeDefined()||this.nonExpandable())&&this.isCodeShown.set(!1)})}ngOnInit(){this.nonExpandable()&&this.isCodeShown.set(!1)}toggleCodeShown(){this.isCodeShown.update(e=>!e)}onTabChange(e){this._currentTab.set(e)}ngAfterViewInit(){this._renderComponent()}_renderComponent(){if(this.viewInFullWindowLink())return;let e=this.data().component;e&&this.componentLoader.loadDynamicComponent(e,this.exampleDisplay())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-code-example"]],viewQuery:function(i,n){i&1&&Ve(n.exampleDisplay,ly,5,Pt),i&2&&ce()},hostVars:10,hostBindings:function(i,n){i&2&&te("simple-example",n.isSimpleCodeDefined()&&!n.isCodeShown())("code-shown",n.isCodeShown())("component-defined",n.isComponentDefined())("non-expandable",n.nonExpandable())("has-single-tab",n.mappedData().length===1)},inputs:{data:[1,"data"],heading:[1,"heading"],viewInFullWindowLink:[1,"viewInFullWindowLink"],isCodeShown:[1,"isCodeShown"],initialTab:[1,"initialTab"],nonExpandable:[1,"nonExpandable"],displayWhenSimple:[1,"displayWhenSimple"]},outputs:{isCodeShown:"isCodeShownChange"},decls:11,vars:6,consts:[["copyButton",""],["exampleDisplay",""],[1,"example-container"],[1,"example-container__top-bar"],[1,"example-container__heading"],[1,"example-container__buttons"],[1,"example-display"],["title","Show full code",3,"click"],["stretchTabs","false",3,"initialTab"],[1,"tab-relative-container"],["stretchTabs","false",3,"changeTab","initialTab"],[3,"tabId","label"],[3,"language","code"],[3,"ngTemplateOutlet"],["target","_blank",3,"href"],["title","Copy code",1,"copy-button",3,"contentToCopy"]],template:function(i,n){i&1&&(o(0,"div",2)(1,"div",3),g(2,dy,2,1,"div",4)(3,cy,4,0,"div",5),a(),g(4,gy,2,1)(5,vy,2,3),a(),o(6,"div",6),g(7,yy,5,1,"p")(8,Cy,2,0,"ng-container"),a(),g(9,by,1,1,"ng-template",null,0,oe)),i&2&&(d(2),b(n.shouldShowFullCodeData()?2:-1),d(),b(!n.nonExpandable()||!n.isSimpleCodeDefined()?3:-1),d(),b(n.isCodeShown()?4:n.shouldShowFullCodeData()?-1:5),d(2),te("hidden",!n.isComponentDefined()||!n.displayWhenSimple()&&!n.shouldShowFullCodeData()),d(),b(n.viewInFullWindowLink()?7:8))},dependencies:[J,Ne,pt,Jt,Zt,Ft,Ke,We,ae,ue,Ni,mr],styles:["[_nghost-%COMP%]{width:100%;display:flex;flex-direction:column;border:1px solid var(--ard-detail-ultralight);border-radius:8px;margin:1.25rem 0;position:relative}[_nghost-%COMP%]   .example-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   .example-container__top-bar[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;padding:.5rem 1rem 0 1.5rem}[_nghost-%COMP%]   .example-container__heading[_ngcontent-%COMP%]{line-height:39px;color:#514346}[_nghost-%COMP%]   .example-display[_ngcontent-%COMP%]{padding:1rem 1.5rem;border-top:1px solid var(--ard-detail-ultralight)}[_nghost-%COMP%]   .example-display.hidden[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .tab-relative-container[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   .copy-button[_ngcontent-%COMP%]{position:absolute;top:.5rem;right:1rem}.simple-example[_nghost-%COMP%]   .example-container__top-bar[_ngcontent-%COMP%]{position:absolute;right:0;width:max-content}[_nghost-%COMP%]:not(.code-shown).simple-example:not(.non-expandable)   .copy-button[_ngcontent-%COMP%]{transform:translate(calc(-100% + .125rem))}[_nghost-%COMP%]:not(.code-shown)   .example-container[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.component-defined)   .example-container[_ngcontent-%COMP%]{border-bottom:none}.has-single-tab.code-shown[_nghost-%COMP%]   .example-container__top-bar[_ngcontent-%COMP%]{padding-bottom:.5rem;border-bottom:1px solid var(--ard-detail-ultralight)}"]})}}return t})();var Sy=["*"],YR=(()=>{class t{constructor(){this.pageTitle=m.required()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-introduction"]],inputs:{pageTitle:[1,"pageTitle"]},standalone:!1,ngContentSelectors:Sy,decls:4,vars:1,template:function(i,n){i&1&&(j(),o(0,"section")(1,"app-h1"),s(2),a(),B(3),a()),i&2&&(d(2),F("",n.pageTitle()," \u2014 Ardium UI"))},dependencies:[yt],encapsulation:2})}}return t})();var Ty=["*"],fr=(()=>{class t{constructor(){this.link=m.required()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-main-article"]],inputs:{link:[1,"link"]},ngContentSelectors:Ty,decls:4,vars:1,consts:[[3,"routerLink"]],template:function(i,n){i&1&&(j(),o(0,"i"),s(1,"Main article: "),o(2,"a",0),B(3),a()()),i&2&&(d(2),h("routerLink",n.link()))},dependencies:[pt,yi],styles:["[_nghost-%COMP%]{padding-left:1.6rem;font-size:.875rem}"]})}}return t})();var Ey=["*"],Ay=t=>({simpleTs:t});function Fy(t,r){t&1&&s(0),t&2&&C(" and theme styles need to be imported")}function My(t,r){t&1&&(o(0,"p"),s(1,"Note: Only the modules that will actually be used should be imported!"),a())}function Iy(t,r){if(t&1&&(o(0,"app-h3"),s(1,"Import styles"),a(),o(2,"app-main-article",1),s(3,"Importing styles"),a(),y(4,"app-code-example",2)),t&2){let e=f();d(4),h("data",e.stylesCode())}}var QR=(()=>{class t{constructor(){this.moduleName=m.required(),this.otherModuleNames=m([]),this.styles=m(null),this.tsCode=x(()=>`import { ${this.otherModuleNames().length?[this.moduleName(),...this.otherModuleNames()].join(", "):this.moduleName()} } from '@ardium-ui/ui'`),this.isOtherModuleNamesDefined=x(()=>this.otherModuleNames().length>0),this.stylesCode=x(()=>{let e=this.styles();if(!e)return null;let i=["@import '../node_modules/@ardium-ui/ui/prebuilt-themes/default/core.css';",...e.map(l=>`@import '../node_modules/@ardium-ui/ui/prebuilt-themes/default/${Array.isArray(l)?l[0]:l}.scs';${Array.isArray(l)&&l[1]?" /* if needed */":""}`)].join(`
`),n=["@import '../node_modules/@ardium-ui/ui/themes/default/core.scss';",...e.map(l=>`@import '../node_modules/@ardium-ui/ui/themes/default/${Array.isArray(l)?l[0]:l}.scss';${Array.isArray(l)&&l[1]?" // if needed":""}`)].join(`
`);return{simpleScss:n,scss:n,css:i}})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-prerequisites"]],inputs:{moduleName:[1,"moduleName"],otherModuleNames:[1,"otherModuleNames"],styles:[1,"styles"]},standalone:!1,ngContentSelectors:Ey,decls:13,vars:6,consts:[["heading","Module imports","nonExpandable","",3,"data"],["link","/guides/importing-styles"],["heading","Style imports",3,"data"]],template:function(i,n){i&1&&(j(),o(0,"section")(1,"app-h2"),s(2,"Prerequisites"),a(),o(3,"p"),s(4," In order for the component to work, its corresponding module"),g(5,Fy,1,1),s(6,". "),a(),o(7,"app-h3"),s(8,"Import modules"),a(),y(9,"app-code-example",0),g(10,My,2,0,"p")(11,Iy,5,1),B(12),a()),i&2&&(d(5),b(n.stylesCode()?5:-1),d(4),h("data",be(4,Ay,n.tsCode())),d(),b(n.isOtherModuleNamesDefined()?10:-1),d(),b(n.stylesCode()?11:-1))},dependencies:[hr,fr,ei,ti],encapsulation:2})}}return t})();var lL=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=X({type:t})}static{this.\u0275inj=Q({imports:[J,hr,fr,It]})}}return t})();var Kc={[Bt.FormElements]:1,[Bt.Buttons]:2,[Bt.DataDisplay]:3,[Bt.Feedback]:4,[Bt.Layout]:5,[Bt.Popups]:6,[Bt.Stars]:7,[Bt.CustomSignals]:1};function qc(t,r){return Kc[t.group]-Kc[r.group]}var ky=(t,r)=>r.group;function Py(t,r){if(t&1&&(o(0,"p",1),s(1),a()),t&2){let e=f().$implicit;d(),C(e.group)}}function Vy(t,r){if(t&1&&y(0,"img",5),t&2){let e=f().$implicit;h("src",e.img,Cn)}}function Oy(t,r){if(t&1&&(o(0,"a",3)(1,"ard-card",4),g(2,Vy,1,1,"img",5),o(3,"ard-card-content")(4,"ard-card-title"),s(5),a(),o(6,"p"),s(7),a()()()()),t&2){let e=r.$implicit;h("routerLink",e.path),d(2),b(e.img?2:-1),d(3),C(e.name),d(2),C(e.desc)}}function Ry(t,r){if(t&1&&(g(0,Py,2,1,"p",1),o(1,"div",2),H(2,Oy,8,4,"a",3,Z),a()),t&2){let e=r.$implicit;b(e.group?0:-1),d(2),U(e.children)}}var vL=(()=>{class t{constructor(){this.module=m.required(),this.data=m.required(),this.mappedRouteData=x(()=>Ml(this.data(),e=>e.groupName??"").sort(qc).map(e=>({group:e.group,children:e.children.map(i=>z(S({},i),{path:`/${this.module()}/${i.path}`})).sort((i,n)=>i.name.localeCompare(n.name))}))),this.topText=m.required()}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-home-page"]],inputs:{module:[1,"module"],data:[1,"data"],topText:[1,"topText"]},decls:5,vars:1,consts:[[1,"center-text"],[1,"group-name"],[1,"component-grid"],[3,"routerLink"],["appearance","outlined"],["ard-card-image","",3,"src"]],template:function(i,n){i&1&&(o(0,"article")(1,"p",0),s(2),a(),H(3,Ry,4,1,null,null,ky),a()),i&2&&(d(2),C(n.topText()),d(),U(n.mappedRouteData()))},dependencies:[pt,yi,xl,bl,vl,yl,Cl],styles:[".center-text[_ngcontent-%COMP%]{padding:1rem 0;text-align:center}.component-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,280px);padding:1.25rem;gap:2.5rem;justify-content:center}a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]{width:280px;height:100%;background-color:transparent;transition:background-color .15s ease-in-out}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;min-width:calc(100% + 2px);left:-1px;top:-1px;min-height:10rem;border:1px solid transparent}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]   ard-card-title[_ngcontent-%COMP%]{padding-bottom:1rem;padding-top:.5rem}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-bottom:0}a[_ngcontent-%COMP%]:hover   ard-card[_ngcontent-%COMP%]{background-color:rgba(var(--ard-primary-500),.05)}.group-name[_ngcontent-%COMP%]{text-align:center;font-size:1.25rem;padding-bottom:.5rem;padding-top:1.5rem;color:var(--ard-text3);text-transform:uppercase}"]})}}return t})();export{zl as a,je as b,er as c,Qm as d,ue as e,ae as f,Ie as g,an as h,nn as i,ve as j,he as k,We as l,Ke as m,Ze as n,Je as o,sr as p,lr as q,Xt as r,Pi as s,Vi as t,et as u,fx as v,Dl as w,ba as x,xa as y,wa as z,El as A,$e as B,Ri as C,js as D,Li as E,Bi as F,wx as G,Sx as H,Ml as I,Hi as J,jx as K,Ni as L,ei as M,ti as N,It as O,Hl as P,Bt as Q,qS as R,GS as S,qc as T,eT as U,aT as V,cT as W,fT as X,CT as Y,TT as Z,MT as _,OT as $,UT as aa,zT as ba,QT as ca,nD as da,cD as ea,_D as fa,xD as ga,ED as ha,kD as ia,LD as ja,jD as ka,KD as la,ZD as ma,rE as na,cE as oa,gE as pa,bE as qa,DE as ra,IE as sa,RE as ta,NE as ua,WE as va,XE as wa,iA as xa,sA as ya,pA as za,_A as Aa,xA as Ba,EA as Ca,kA as Da,LA as Ea,$A as Fa,GA as Ga,eF as Ha,aF as Ia,pF as Ja,_F as Ka,SF as La,FF as Ma,VF as Na,HF as Oa,$F as Pa,GF as Qa,eM as Ra,sM as Sa,hM as Ta,xM as Ua,EM as Va,VM as Wa,HM as Xa,$M as Ya,GM as Za,eI as _a,aI as $a,pI as ab,bI as bb,MI as cb,HI as db,YI as eb,qI as fb,JI as gb,a2 as hb,c2 as ib,g2 as jb,x2 as kb,A2 as lb,O2 as mb,N2 as nb,q2 as ob,J2 as pb,rk as qb,dk as rb,fk as sb,bk as tb,Ik as ub,Hk as vb,Wk as wb,Jk as xb,lP as yb,_P as zb,SP as Ab,IP as Bb,BP as Cb,WP as Db,eV as Eb,lV as Fb,gV as Gb,SV as Hb,kV as Ib,TR as Jb,Ct as Kb,hr as Lb,YR as Mb,QR as Nb,lL as Ob,vL as Pb};
