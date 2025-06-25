import{$ as Mt,$a as at,A as pt,Aa as L,Ab as Gn,B as Ce,Ba as s,Bb as Yn,C as h,Ca as f,Cb as Xn,D as ye,Da as S,Db as Zn,E as w,Ea as j,Eb as Jn,F as Fi,Fa as N,Fb as er,G as In,Ga as $,Gb as tr,H as q,Ha as Oe,Hb as ir,I as zt,Ia as rt,Ib as nr,J as Mi,Jb as rr,K as Ft,Ka as Ie,Kb as $e,L as l,La as _e,Lb as Ke,M as Q,Ma as Ri,Mb as ii,N as Pi,Na as On,Nb as or,O as Be,Oa as we,Ob as ar,P as Qt,Pa as He,Pb as sr,Q as me,Qa as kt,Qb as lr,R as Fn,Ra as Ae,Rb as dr,S as nt,Sa as Vt,Sb as cr,T as p,Ta as Gt,Tb as pr,U as ce,Ua as V,Ub as ur,V as X,Va as je,Vb as mr,W as ki,Wa as Fe,X as ae,Xa as Bi,Y as Mn,Ya as Oi,Z as y,Za as ot,_ as Pn,_a as Un,a as Tn,aa as u,ab as Ui,b as wn,ba as se,bb as W,c as wi,ca as Pt,cb as Hi,d as Et,da as G,e as ct,ea as C,eb as Hn,f as An,fa as O,fb as jn,g as tt,ga as ut,gb as Yt,h as Wt,ha as P,hb as Nn,i as It,ia as k,ib as Xt,j as Dn,ja as o,jb as mt,k as Ai,ka as a,la as b,lb as Me,m as Di,ma as Vi,mb as ji,n as qt,na as Li,nb as Zt,o as it,oa as kn,ob as Jt,p as Re,pa as U,pb as ht,q as de,qa as _,qb as Ne,r as A,ra as m,rb as $n,s as I,sa as B,sb as Kn,t as En,ta as R,tb as Wn,u as Ei,ua as Vn,ub as qn,v as D,va as Ln,vb as zn,w as E,wa as Rn,wb as be,xa as Bn,xb as Qn,y as Ee,ya as he,yb as ei,z as Ii,za as fe,zb as ti}from"./chunk-IWXHOVAQ.js";import{a as g,b as F,c as Kt,d as dt,e as ne}from"./chunk-FDERIQAA.js";var Ni=Kt((hr,ni)=>{"use strict";(function(){"use strict";var e=function(x,M){return M=M||"",x.replace(/(^|-)/g,"$1\\u"+M).replace(/,/g,"\\u"+M)},r=e("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7","00"),t="a-z"+e("DF-F6,F8-FF","00"),i="A-Z"+e("C0-D6,D8-DE","00"),n="A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via",d=function(x,M,K,ie){return x=x||r,M=M||t,K=K||i,ie=ie||n,{capitalize:new RegExp("(^|["+x+"])(["+M+"])","g"),pascal:new RegExp("(^|["+x+"])+(["+M+K+"])","g"),fill:new RegExp("["+x+"]+(.|$)","g"),sentence:new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")(['+M+"])","g"),improper:new RegExp("\\b("+ie+")\\b","g"),relax:new RegExp("([^"+K+"])(["+K+"]*)(["+K+"])(?=[^"+K+"]|$)","g"),upper:new RegExp("^[^"+M+"]+$"),hole:/[^\s]\s[^\s]/,apostrophe:/'/g,room:new RegExp("["+x+"]")}},c=d(),v={re:c,unicodes:e,regexps:d,types:[],up:String.prototype.toUpperCase,low:String.prototype.toLowerCase,cap:function(x){return v.up.call(x.charAt(0))+x.slice(1)},decap:function(x){return v.low.call(x.charAt(0))+x.slice(1)},deapostrophe:function(x){return x.replace(c.apostrophe,"")},fill:function(x,M,K){return M!=null&&(x=x.replace(c.fill,function(ie,Te){return Te?M+Te:""})),K&&(x=v.deapostrophe(x)),x},prep:function(x,M,K,ie){if(x=x==null?"":x+"",!ie&&c.upper.test(x)&&(x=v.low.call(x)),!M&&!c.hole.test(x)){var Te=v.fill(x," ");c.hole.test(Te)&&(x=Te)}return!K&&!c.room.test(x)&&(x=x.replace(c.relax,v.relax)),x},relax:function(x,M,K,ie){return M+" "+(K?K+" ":"")+ie}},H={_:v,of:function(x){for(var M=0,K=v.types.length;M<K;M++)if(H[v.types[M]].apply(H,arguments)===x)return v.types[M]},flip:function(x){return x.replace(/\w/g,function(M){return(M==v.up.call(M)?v.low:v.up).call(M)})},random:function(x){return x.replace(/\w/g,function(M){return(Math.round(Math.random())?v.up:v.low).call(M)})},type:function(x,M){H[x]=M,v.types.push(x)}},te={lower:function(x,M,K){return v.fill(v.low.call(v.prep(x,M)),M,K)},snake:function(x){return H.lower(x,"_",!0)},constant:function(x){return H.upper(x,"_",!0)},camel:function(x){return v.decap(H.pascal(x))},kebab:function(x){return H.lower(x,"-",!0)},upper:function(x,M,K){return v.fill(v.up.call(v.prep(x,M,!1,!0)),M,K)},capital:function(x,M,K){return v.fill(v.prep(x).replace(c.capitalize,function(ie,Te,Dt){return Te+v.up.call(Dt)}),M,K)},header:function(x){return H.capital(x,"-",!0)},pascal:function(x){return v.fill(v.prep(x,!1,!0).replace(c.pascal,function(M,K,ie){return v.up.call(ie)}),"",!0)},title:function(x){return H.capital(x).replace(c.improper,function(M,K,ie,Te){return ie>0&&ie<Te.lastIndexOf(" ")?v.low.call(M):M})},sentence:function(x,M,K){return x=H.lower(x).replace(c.sentence,function(ie,Te,Dt){return Te+v.up.call(Dt)}),M&&M.forEach(function(ie){x=x.replace(new RegExp("\\b"+H.lower(ie)+"\\b","g"),v.cap)}),K&&K.forEach(function(ie){x=x.replace(new RegExp("(\\b"+H.lower(ie)+"\\. +)(\\w)"),function(Te,Dt,ba){return Dt+v.low.call(ba)})}),x}};te.squish=te.pascal,H.default=H;for(var oe in te)H.type(oe,te[oe]);var et=typeof et=="function"?et:function(){};et(typeof ni=="object"&&ni.exports?ni.exports=H:this.Case=H)}).call(hr)});var nn=Kt(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.approximate=Y.APPROXIMATION_UNITS=Y.roundToMultiple=Y.roundToPrecision=Y.roundFromZero=Y.roundToZero=Y.roundDown=Y.roundUp=Y.round=void 0;function Xi(e){return Math.round(e)}Y.round=Xi;function Zi(e){return Math.ceil(e)}Y.roundUp=Zi;function Ji(e){return Math.floor(e)}Y.roundDown=Ji;function en(e){return e<=0?Math.ceil(e):Math.floor(e)}Y.roundToZero=en;function tn(e){return e>=0?Math.ceil(e):Math.floor(e)}Y.roundFromZero=tn;function Ct(e,r=1,t="normal"){switch(r=10**r,t){case"normal":return Xi(e*r)/r;case"up":return Zi(e*r)/r;case"down":return Ji(e*r)/r;case"to_zero":return en(e*r)/r;case"from_zero":return tn(e*r)/r}}Y.roundToPrecision=Ct;function Za(e,r,t="normal"){switch(t){case"normal":return Xi(e/r)*r;case"up":return Zi(e/r)*r;case"down":return Ji(e/r)*r;case"to_zero":return en(e/r)*r;case"from_zero":return tn(e/r)*r}}Y.roundToMultiple=Za;Y.APPROXIMATION_UNITS={k:1e3,M:1e6,B:1e9,T:1e12,Qa:1e15,Qi:1e18,Sx:1e21,Sp:1e24,Oc:1e27,No:1e30,Dc:1e33};function Ja(e,r=1,t,i,n,d=!0){var c;if(!t){let te=Object.keys(Y.APPROXIMATION_UNITS);for(let oe=0;oe<te.length;oe++){let et=te[oe],x=Y.APPROXIMATION_UNITS[et],M=e/x;if(M>=1&&M<1e3)return i?Ct(M,r).toLocaleString(i)+(d?" ":"")+et:String(Ct(M,r))+(d?" ":"")+et}return String(Ct(e,r).toLocaleString(i))}let v=Y.APPROXIMATION_UNITS[t],H=(c=n?.[t])!==null&&c!==void 0?c:t;return i?Ct(e/v,r).toLocaleString(i)+(d?" ":"")+H:String(Ct(e/v,r))+(d?" ":"")+H}Y.approximate=Ja});var Ur=Kt(di=>{"use strict";Object.defineProperty(di,"__esModule",{value:!0});di.resolvePath=void 0;var Br=/((?:\??\.|(?:\?\.)?\[).*$|$)/.source,as=new RegExp(/^([\w$]+)/.source+Br),ss=new RegExp(/^\[(?:(-?\d+(?:\.\d+)?)|(['"`])(.*?)\2)\](?=\??\.|\[(?:(?:-?\d+(?:\.\d+)?)|(['"`]).*?\4)|$)/.source+Br);function ls(e,r){if(typeof e!="object")throw new TypeError("Expected object argument to be an object, got "+typeof e);if(typeof r!="string")throw new TypeError("Expected path argument to be a string, got "+typeof r);return Or(e,r)}di.resolvePath=ls;function Or(e,r,t=r){if(!r)return e;let i;if([i,r]=ds(r,t),e.hasOwnProperty(i))return Or(e[i],r,t)}function ds(e,r){let t,i,n=e.match(as);if(n)return t=n[1],i=Rr(n[2]),[t,i];if(n=e.match(ss),n)return t=n[1]?cs(n[1]):n[3],i=Rr(n[5]),[t,i];throw new Error("Object path is invalid: "+r)}function Rr(e){return e.charAt(0)=="."?e.slice(1):e.charAt(0)=="?"?e.slice(2):e}function cs(e){return isNaN(Number(e))?e:Number(e)}});var jr=Kt(yt=>{"use strict";Object.defineProperty(yt,"__esModule",{value:!0});yt.TakeChance=void 0;function ps(e=0,r=100){let t=new Uint32Array(1);crypto.getRandomValues(t);let i=t[0]/4294967296;return e=Math.ceil(e),r=Math.floor(r),Math.floor(i*(r-e+1))+e}function sn(e=0,r=1){return Math.random()*(r-e)+e}function We(e=0,r=100){return Math.round(sn(e,r))}function us(e=.5){return Math.random()<e}function ms(e,r=0,t=100){let i=[];for(let n=0;n<e;n++)i.push(We(r,t));return i}function hs(e,r=0,t=1){let i=[];for(let n=0;n<e;n++)i.push(sn(r,t));return i}function Hr(e=0,r=1,t=1){if(t<=0)throw new Error("Skew cannot be lower than or equal to 0");let i=0,n=0;for(;i===0;)i=Math.random();for(;n===0;)n=Math.random();let d=Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*n);return d=d/10+.5,d>1||d<0?d=Hr(e,r,t):(d=Math.pow(d,t),d*=r-e,d+=e),d}function ln(e,r=0,t=e.length-1){return r<0&&(r=0),t>e.length-1&&(t=e.length-1),e[We(r,t)]}function fs(e){let r=Object.keys(e);return ln(r)}function ci(e){var r;typeof e.from=="string"&&(e.from=e.from.split(""));let t=(r=e.from)!==null&&r!==void 0?r:[];return(e.letters||e.lowercase)&&t.push(..."abcdefghijklmnopqrstuvwxyz".split("")),(e.letters||e.uppercase)&&t.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")),e.numbers&&t.push(..."0123456789".split("")),e.special&&t.push(..."!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("")),t=[...new Set(t)],ln(t)}function dn(e,r){let t="";for(let i=0;i<e;i++)t+=ci(r);return t}function gs(e,r=new Date(Date.now())){return new Date(We(e.valueOf(),r.valueOf()))}function _s(e=10){let r="";do r=ci({letters:!0,numbers:!0,from:"-_"});while(r<="9"||r=="_");for(let t=1;t<e;t++)r+=ci({letters:!0,numbers:!0,from:"-_"});return r}function vs(e=16){var r,t,i,n,d,c,v,H;let te="";do te=dn(e,{letters:!0,numbers:!0,special:!0});while(((t=(r=te.match(/[a-z]/g))===null||r===void 0?void 0:r.length)!==null&&t!==void 0?t:0)<e/4||((n=(i=te.match(/[A-Z]/g))===null||i===void 0?void 0:i.length)!==null&&n!==void 0?n:0)<e/4||((c=(d=te.match(/[0-9]/g))===null||d===void 0?void 0:d.length)!==null&&c!==void 0?c:0)<e/6||((H=(v=te.match(/[!"#$%&'()*+,\-./:;<=>?@[\\]\^_`{|}~]/g))===null||v===void 0?void 0:v.length)!==null&&H!==void 0?H:0)<e/8);return te}function Cs(e=6){return We(1,e)}function ys(){return{r:We(0,255),g:We(0,255),b:We(0,255)}}function bs(){return"#"+dn(6,{numbers:!0,from:"abcdef"})}yt.TakeChance={int:We,secureInt:ps,float:sn,multipleInt:ms,multipleFloat:hs,boolean:us,binomial:Hr,character:ci,string:dn,fromArray:ln,fromObject:fs,date:gs,id:_s,password:vs,die:Cs,rgbColor:ys,hexColor:bs};yt.default=yt.TakeChance});Array.prototype.last=function(e,r){return e==null?this[this.length-1]:e==1?this.filter(r??(()=>!0)).last():this.filter(r??(()=>!0)).slice(-e)};Array.prototype.first=function(e,r){return e==null?this[0]:e==1?this.filter(r??(()=>!0))[0]:this.filter(r??(()=>!0)).slice(0,e)};var Sr=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||e)(Q(Be),Q(ye))};static \u0275dir=X({type:e})}return e})(),zi=(()=>{class e extends Sr{static \u0275fac=(()=>{let t;return function(n){return(t||(t=Ee(e)))(n||e)}})();static \u0275dir=X({type:e,features:[ae]})}return e})(),vt=new A(""),xa={provide:vt,useExisting:it(()=>Qi),multi:!0},Qi=(()=>{class e extends zi{writeValue(t){this.setProperty("checked",t)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=Ee(e)))(n||e)}})();static \u0275dir=X({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(i,n){i&1&&_("change",function(c){return n.onChange(c.target.checked)})("blur",function(){return n.onTouched()})},standalone:!1,features:[Oe([xa]),ae]})}return e})(),Sa={provide:vt,useExisting:it(()=>Z),multi:!0};function Ta(){let e=Bi()?Bi().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var wa=new A(""),Z=(()=>{class e extends Sr{_compositionMode;_composing=!1;constructor(t,i,n){super(t,i),this._compositionMode=n,this._compositionMode==null&&(this._compositionMode=!Ta())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||e)(Q(Be),Q(ye),Q(wa,8))};static \u0275dir=X({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,n){i&1&&_("input",function(c){return n._handleInput(c.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(c){return n._compositionEnd(c.target.value)})},standalone:!1,features:[Oe([Sa]),ae]})}return e})();var Aa=new A(""),Da=new A("");function Tr(e){return e!=null}function wr(e){return Pn(e)?Et(e):e}function Ar(e){let r={};return e.forEach(t=>{r=t!=null?g(g({},r),t):r}),Object.keys(r).length===0?null:r}function Dr(e,r){return r.map(t=>t(e))}function Ea(e){return!e.validate}function Er(e){return e.map(r=>Ea(r)?r:t=>r.validate(t))}function Ia(e){if(!e)return null;let r=e.filter(Tr);return r.length==0?null:function(t){return Ar(Dr(t,r))}}function Ir(e){return e!=null?Ia(Er(e)):null}function Fa(e){if(!e)return null;let r=e.filter(Tr);return r.length==0?null:function(t){let i=Dr(t,r).map(wr);return Wt(i).pipe(tt(Ar))}}function Fr(e){return e!=null?Fa(Er(e)):null}function fr(e,r){return e===null?[r]:Array.isArray(e)?[...e,r]:[e,r]}function Ma(e){return e._rawValidators}function Pa(e){return e._rawAsyncValidators}function $i(e){return e?Array.isArray(e)?e:[e]:[]}function oi(e,r){return Array.isArray(e)?e.includes(r):e===r}function gr(e,r){let t=$i(r);return $i(e).forEach(n=>{oi(t,n)||t.push(n)}),t}function _r(e,r){return $i(r).filter(t=>!oi(e,t))}var ai=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(r){this._rawValidators=r||[],this._composedValidatorFn=Ir(this._rawValidators)}_setAsyncValidators(r){this._rawAsyncValidators=r||[],this._composedAsyncValidatorFn=Fr(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(r){this._onDestroyCallbacks.push(r)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(r=>r()),this._onDestroyCallbacks=[]}reset(r=void 0){this.control&&this.control.reset(r)}hasError(r,t){return this.control?this.control.hasError(r,t):!1}getError(r,t){return this.control?this.control.getError(r,t):null}},Ki=class extends ai{name;get formDirective(){return null}get path(){return null}},Ut=class extends ai{_parent=null;name=null;valueAccessor=null},Wi=class{_cd;constructor(r){this._cd=r}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},ka={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},pm=F(g({},ka),{"[class.ng-submitted]":"isSubmitted"}),ee=(()=>{class e extends Wi{constructor(t){super(t)}static \u0275fac=function(i){return new(i||e)(Q(Ut,2))};static \u0275dir=X({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,n){i&2&&se("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},standalone:!1,features:[ae]})}return e})();var Lt="VALID",ri="INVALID",ft="PENDING",Rt="DISABLED",_t=class{},si=class extends _t{value;source;constructor(r,t){super(),this.value=r,this.source=t}},Bt=class extends _t{pristine;source;constructor(r,t){super(),this.pristine=r,this.source=t}},Ot=class extends _t{touched;source;constructor(r,t){super(),this.touched=r,this.source=t}},gt=class extends _t{status;source;constructor(r,t){super(),this.status=r,this.source=t}};function Va(e){return(li(e)?e.validators:e)||null}function La(e){return Array.isArray(e)?Ir(e):e||null}function Ra(e,r){return(li(r)?r.asyncValidators:e)||null}function Ba(e){return Array.isArray(e)?Fr(e):e||null}function li(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var qi=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(r,t){this._assignValidators(r),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(r){this._rawValidators=this._composedValidatorFn=r}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(r){this._rawAsyncValidators=this._composedAsyncValidatorFn=r}get parent(){return this._parent}get status(){return je(this.statusReactive)}set status(r){je(()=>this.statusReactive.set(r))}_status=V(()=>this.statusReactive());statusReactive=w(void 0);get valid(){return this.status===Lt}get invalid(){return this.status===ri}get pending(){return this.status==ft}get disabled(){return this.status===Rt}get enabled(){return this.status!==Rt}errors;get pristine(){return je(this.pristineReactive)}set pristine(r){je(()=>this.pristineReactive.set(r))}_pristine=V(()=>this.pristineReactive());pristineReactive=w(!0);get dirty(){return!this.pristine}get touched(){return je(this.touchedReactive)}set touched(r){je(()=>this.touchedReactive.set(r))}_touched=V(()=>this.touchedReactive());touchedReactive=w(!1);get untouched(){return!this.touched}_events=new Tn;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(r){this._assignValidators(r)}setAsyncValidators(r){this._assignAsyncValidators(r)}addValidators(r){this.setValidators(gr(r,this._rawValidators))}addAsyncValidators(r){this.setAsyncValidators(gr(r,this._rawAsyncValidators))}removeValidators(r){this.setValidators(_r(r,this._rawValidators))}removeAsyncValidators(r){this.setAsyncValidators(_r(r,this._rawAsyncValidators))}hasValidator(r){return oi(this._rawValidators,r)}hasAsyncValidator(r){return oi(this._rawAsyncValidators,r)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(r={}){let t=this.touched===!1;this.touched=!0;let i=r.sourceControl??this;this._parent&&!r.onlySelf&&this._parent.markAsTouched(F(g({},r),{sourceControl:i})),t&&r.emitEvent!==!1&&this._events.next(new Ot(!0,i))}markAllAsTouched(r={}){this.markAsTouched({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(r))}markAsUntouched(r={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=r.sourceControl??this;this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:i})}),this._parent&&!r.onlySelf&&this._parent._updateTouched(r,i),t&&r.emitEvent!==!1&&this._events.next(new Ot(!1,i))}markAsDirty(r={}){let t=this.pristine===!0;this.pristine=!1;let i=r.sourceControl??this;this._parent&&!r.onlySelf&&this._parent.markAsDirty(F(g({},r),{sourceControl:i})),t&&r.emitEvent!==!1&&this._events.next(new Bt(!1,i))}markAsPristine(r={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=r.sourceControl??this;this._forEachChild(n=>{n.markAsPristine({onlySelf:!0,emitEvent:r.emitEvent})}),this._parent&&!r.onlySelf&&this._parent._updatePristine(r,i),t&&r.emitEvent!==!1&&this._events.next(new Bt(!0,i))}markAsPending(r={}){this.status=ft;let t=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new gt(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!r.onlySelf&&this._parent.markAsPending(F(g({},r),{sourceControl:t}))}disable(r={}){let t=this._parentMarkedDirty(r.onlySelf);this.status=Rt,this.errors=null,this._forEachChild(n=>{n.disable(F(g({},r),{onlySelf:!0}))}),this._updateValue();let i=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new si(this.value,i)),this._events.next(new gt(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(F(g({},r),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!0))}enable(r={}){let t=this._parentMarkedDirty(r.onlySelf);this.status=Lt,this._forEachChild(i=>{i.enable(F(g({},r),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:r.emitEvent}),this._updateAncestors(F(g({},r),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(r,t){this._parent&&!r.onlySelf&&(this._parent.updateValueAndValidity(r),r.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(r){this._parent=r}getRawValue(){return this.value}updateValueAndValidity(r={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Lt||this.status===ft)&&this._runAsyncValidator(i,r.emitEvent)}let t=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new si(this.value,t)),this._events.next(new gt(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!r.onlySelf&&this._parent.updateValueAndValidity(F(g({},r),{sourceControl:t}))}_updateTreeValidity(r={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(r)),this.updateValueAndValidity({onlySelf:!0,emitEvent:r.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Rt:Lt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(r,t){if(this.asyncValidator){this.status=ft,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=wr(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(n,{emitEvent:t,shouldHaveEmitted:r})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let r=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,r}return!1}setErrors(r,t={}){this.errors=r,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(r){let t=r;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,n)=>i&&i._find(n),this)}getError(r,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[r]:null}hasError(r,t){return!!this.getError(r,t)}get root(){let r=this;for(;r._parent;)r=r._parent;return r}_updateControlsErrors(r,t,i){this.status=this._calculateStatus(),r&&this.statusChanges.emit(this.status),(r||i)&&this._events.next(new gt(this.status,t)),this._parent&&this._parent._updateControlsErrors(r,t,i)}_initObservables(){this.valueChanges=new pt,this.statusChanges=new pt}_calculateStatus(){return this._allControlsDisabled()?Rt:this.errors?ri:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ft)?ft:this._anyControlsHaveStatus(ri)?ri:Lt}_anyControlsHaveStatus(r){return this._anyControls(t=>t.status===r)}_anyControlsDirty(){return this._anyControls(r=>r.dirty)}_anyControlsTouched(){return this._anyControls(r=>r.touched)}_updatePristine(r,t){let i=!this._anyControlsDirty(),n=this.pristine!==i;this.pristine=i,this._parent&&!r.onlySelf&&this._parent._updatePristine(r,t),n&&this._events.next(new Bt(this.pristine,t))}_updateTouched(r={},t){this.touched=this._anyControlsTouched(),this._events.next(new Ot(this.touched,t)),this._parent&&!r.onlySelf&&this._parent._updateTouched(r,t)}_onDisabledChange=[];_registerOnCollectionChange(r){this._onCollectionChange=r}_setUpdateStrategy(r){li(r)&&r.updateOn!=null&&(this._updateOn=r.updateOn)}_parentMarkedDirty(r){let t=this._parent&&this._parent.dirty;return!r&&!!t&&!this._parent._anyControlsDirty()}_find(r){return null}_assignValidators(r){this._rawValidators=Array.isArray(r)?r.slice():r,this._composedValidatorFn=La(this._rawValidators)}_assignAsyncValidators(r){this._rawAsyncValidators=Array.isArray(r)?r.slice():r,this._composedAsyncValidatorFn=Ba(this._rawAsyncValidators)}};var Mr=new A("",{providedIn:"root",factory:()=>Gi}),Gi="always";function Oa(e,r){return[...r.path,e]}function Ua(e,r,t=Gi){ja(e,r),r.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&r.valueAccessor.setDisabledState?.(e.disabled),Na(e,r),Ka(e,r),$a(e,r),Ha(e,r)}function vr(e,r){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(r)})}function Ha(e,r){if(r.valueAccessor.setDisabledState){let t=i=>{r.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(t),r._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function ja(e,r){let t=Ma(e);r.validator!==null?e.setValidators(fr(t,r.validator)):typeof t=="function"&&e.setValidators([t]);let i=Pa(e);r.asyncValidator!==null?e.setAsyncValidators(fr(i,r.asyncValidator)):typeof i=="function"&&e.setAsyncValidators([i]);let n=()=>e.updateValueAndValidity();vr(r._rawValidators,n),vr(r._rawAsyncValidators,n)}function Na(e,r){r.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&Pr(e,r)})}function $a(e,r){r.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&Pr(e,r),e.updateOn!=="submit"&&e.markAsTouched()})}function Pr(e,r){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),r.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Ka(e,r){let t=(i,n)=>{r.valueAccessor.writeValue(i),n&&r.viewToModelUpdate(i)};e.registerOnChange(t),r._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function Wa(e,r){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(r,t.currentValue)}function qa(e){return Object.getPrototypeOf(e.constructor)===zi}function za(e,r){if(!r)return null;Array.isArray(r);let t,i,n;return r.forEach(d=>{d.constructor===Z?t=d:qa(d)?i=d:n=d}),n||i||t||null}function Cr(e,r){let t=e.indexOf(r);t>-1&&e.splice(t,1)}function yr(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var Qa=class extends qi{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(r=null,t,i){super(Va(t),Ra(i,t)),this._applyFormState(r),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),li(t)&&(t.nonNullable||t.initialValueIsDefault)&&(yr(r)?this.defaultValue=r.value:this.defaultValue=r)}setValue(r,t={}){this.value=this._pendingValue=r,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(r,t={}){this.setValue(r,t)}reset(r=this.defaultValue,t={}){this._applyFormState(r),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(r){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(r){this._onChange.push(r)}_unregisterOnChange(r){Cr(this._onChange,r)}registerOnDisabledChange(r){this._onDisabledChange.push(r)}_unregisterOnDisabledChange(r){Cr(this._onDisabledChange,r)}_forEachChild(r){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(r){yr(r)?(this.value=this._pendingValue=r.value,r.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=r}};var Ga={provide:Ut,useExisting:it(()=>J)},br=Promise.resolve(),J=(()=>{class e extends Ut{_changeDetectorRef;callSetDisabledState;control=new Qa;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new pt;constructor(t,i,n,d,c,v){super(),this._changeDetectorRef=c,this.callSetDisabledState=v,this._parent=t,this._setValidators(i),this._setAsyncValidators(n),this.valueAccessor=za(this,d)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Wa(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Ua(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){br.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,n=i!==0&&Gt(i);br.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Oa(t,this._parent):[t]}static \u0275fac=function(i){return new(i||e)(Q(Ki,9),Q(Aa,10),Q(Da,10),Q(vt,10),Q(Vt,8),Q(Mr,8))};static \u0275dir=X({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Oe([Ga]),ae,Ei]})}return e})();var Ya={provide:vt,useExisting:it(()=>Yi),multi:!0},Yi=(()=>{class e extends zi{writeValue(t){let i=t??"";this.setProperty("value",i)}registerOnChange(t){this.onChange=i=>{t(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let t;return function(n){return(t||(t=Ee(e)))(n||e)}})();static \u0275dir=X({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,n){i&1&&_("input",function(c){return n.onChange(c.target.value)})("blur",function(){return n.onTouched()})},standalone:!1,features:[Oe([Ya]),ae]})}return e})();var Xa=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=ce({type:e});static \u0275inj=de({})}return e})();var z=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:Mr,useValue:t.callSetDisabledState??Gi}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=ce({type:e});static \u0275inj=de({imports:[Xa]})}return e})();var rs=dt(nn(),1);var es=[{keys:["tab"],result:"Tab \u21B9"},{keys:["enter"],result:"\u21B5 Enter"},{keys:["space"],result:["\u23B5","Space"]},{keys:["home"],result:"Home"},{keys:["end"],result:"End"},{keys:["minus"],result:["-","Minus"]},{keys:["equal"],result:["=","Equal"]},{keys:["bracketleft"],result:["[","Left Bracket"]},{keys:["bracketright"],result:["]","Right Bracket"]},{keys:["backslash"],result:["\\","Backslash"]},{keys:["semicolon"],result:[";","Semicolon"]},{keys:["quote"],result:["'","Quote"]},{keys:["comma"],result:[",","Comma"]},{keys:["period"],result:[".","Period"]},{keys:["slash"],result:["/","Slash"]},{keys:["backquote"],result:["`","Backquote"]},{keys:["arrowleft","left"],result:["\u2190","\u2190 Left"]},{keys:["arrowright","right"],result:["\u2192","\u2192 Right"]},{keys:["arrowup","up"],result:["\u2191","\u2191 Up"]},{keys:["arrowdown","down"],result:["\u2193","\u2193 Down"]},{keys:["capslock","caps"],result:"Caps Lock"},{keys:["numlock","num"],result:"Num Lock"},{keys:["shift","leftshift","shiftleft"],result:"Shift"},{keys:["shift","rightshift","shiftright"],result:"Right Shift"},{keys:["ctrl","control","leftctrl","ctrlleft","leftcontrol","controlleft"],result:["Ctrl","Control"]},{keys:["ctrl","control","rightctrl","ctrlright","rightcontrol","controlright"],result:["Right Ctrl","Right Control"]},{keys:["cmd","command"],result:["Cmd","Command"]},{keys:["option","opt"],result:["Opt","Option"]},{keys:["alt","leftalt","altleft"],result:"Alt"},{keys:["altgraph","altgr","rightalt","altright"],result:["Alt Gr","Alt Graph"]},{keys:["escape","esc"],result:["Esc","Escape"]},{keys:["insert","ins"],result:["Ins","Insert"]},{keys:["delete","del"],result:["Del","Delete"]},{keys:["windows","win","leftmeta","metaleft"],result:["\u229E Win","\u229E Windows"]},{keys:["menu","contextmenu"],result:"\u25A4 Menu"},{keys:["backspace","back","bcksp"],result:["Bcksp","Backspace"]},{keys:["printscreen","printsc","prtsc"],result:["Prt Sc","Print Screen"]},{keys:["numpaddivide","divide"],result:["Numpad /","Divide"]},{keys:["numpadmultiply","multiply"],result:["Numpad *","Multiply"]},{keys:["numpadadd","add"],result:["Numpad +","Add"]},{keys:["numpadsubstract","substract"],result:["Numpad -","Substract"]},{keys:["numpaddecimal","decimal"],result:["Numpad .","Decimal"]},{keys:["numpadenter"],result:"\u21B5 Numpad Enter"},{keys:["audiovolumemute","audiomute","volumemute","mute"],result:["Vol. Mute","Audio Volume Mute"]},{keys:["audiovolumedown","volumedown"],result:["Vol. Down","Audio Volume Down"]},{keys:["audiovolumeup","volumeup"],result:["Vol. Up","Audio Volume Up"]},{keys:["pagedown","pgdown"],result:["Pg Down","Page Down"]},{keys:["pageup","pgup"],result:["Pg Up","Page Up"]}],ts=es.reduce((e,r)=>{for(let t of r.keys)e[t]=r.result;return e},{}),is="abcdefghijklmnopqrstuvwxyz".split("").reduce((e,r)=>(e[`key${r}`]=r.toUpperCase(),e),{}),rn={};for(let e=0;e<10;e++){let r=e.toString();rn[`digit${r}`]=r,rn[`numpad${r}`]=`Numpad ${r}`}var kr={};for(let e=1;e<=12;e++){let r=e.toString();kr[`f${r}`]=r}var on=Object.assign(Object.assign(Object.assign(Object.assign({},ts),is),rn),kr);function an(e,r=!0){let t=e.toLowerCase();if(on[t]){let i=on[t];return typeof i=="string"?i:r?i[0]:i[1]}if(t.match(/^.+(left|right)$/)){let i=e.match(/right|left/i)[0].toLowerCase();i=i[0].toUpperCase()+i.substring(1);let n=e.replace(/right|left/i,"");e=i+n}return e.replace(/([A-Z])/g," $1").replace(/\s\s+/g," ").trim()}var Vr={PreferFileSystem:"preferFileSystem",CrossBrowser:"crossBrowser"};var ym={fileName:"download",method:Vr.PreferFileSystem},bm={accept:"*.*",method:Vr.PreferFileSystem,multiple:!1};function pe(e){return e!=null&&`${e}`!="false"}function Ht(e,r=void 0){return os(e)?Number(e):r}function os(e){return!isNaN(parseFloat(e))&&!isNaN(Number(e))}function Lr(e,r=","){return Array.isArray(e)?e.map(t=>String(t).trim()).filter(t=>t.length):e==null||e===""?[]:String(e).split(r).map(t=>t.trim()).filter(t=>t.length)}var Ss=dt(Ur(),1);var Ts=dt(jr(),1),Kr=dt(nn(),1);var ws=["focusableElement"];var Qe=["*"];var un=["contentWrapperEl"];function As(e,r){if(e&1&&(o(0,"div",3),s(1),a()),e&2){let t=m();l(),S(" ",t.icon()," ")}}function Ds(e,r){e&1&&(o(0,"span"),s(1,"+"),a())}function Es(e,r){if(e&1&&(y(0,Ds,2,0,"span"),b(1,"ard-kbd",3)),e&2){let t=r.$implicit,i=r.$index,n=m();C(i!==0?0:-1),l(),u("appearance",n.appearance())("full",n.full())("key",t)}}var Is=e=>({"--ard-_tabber-tabs":e});function Fs(e,r){if(e&1){let t=U();o(0,"button",5,0),_("click",function(){let n=D(t).$implicit,d=m();return E(!n.selected()&&d.onTabClick(n))})("focus",function(){let n=D(t).$implicit,d=m();return E(d.onTabFocus(n))})("blur",function(){let n=D(t).$implicit,d=m();return E(d.onTabBlur(n))}),b(2,"div",6),s(3),a()}if(e&2){let t=r.$implicit,i=m();se("ard-tab-active",t===i.currentTab())("ard-tab-focused",t===i.currentFocusedTab()),u("id",t.tabId())("tabindex",i.tabIndex()),l(3),S(" ",t.label()," ")}}var Wr={readonly:!1,disabled:!1},Ms=(()=>{class e{constructor(t){this._DEFAULTS=t;this.readonly=h(this._DEFAULTS.readonly,{transform:i=>pe(i)}),this.disabled=w(this._DEFAULTS.disabled)}set _disabled(t){this.disabled.set(pe(t))}get _readonlyHostAttribute(){return this.readonly()}get _disabledHostAttribute(){return this.disabled()}static{this.\u0275fac=function(i){Pi()}}static{this.\u0275dir=X({type:e,hostVars:6,hostBindings:function(i,n){i&2&&(Mt("readonly",n._readonlyHostAttribute)("disabled",n._disabledHostAttribute),se("ard-readonly",n._readonlyHostAttribute)("ard-disabled",n._disabledHostAttribute))},inputs:{readonly:[1,"readonly"],_disabled:[0,"disabled","_disabled"]},standalone:!1})}}return e})(),bt=F(g({},Wr),{tabIndex:0}),mn=(()=>{class e extends Ms{constructor(){super(...arguments);this.tabIndex=V(()=>this.disabled()?-1:this._tabIndex()),this._tabIndex=h(this._DEFAULTS.tabIndex,{alias:"tabIndex",transform:t=>Ht(t)});this.focusEvent=Ce({alias:"focus"}),this.blurEvent=Ce({alias:"blur"});this.isFocused=!1}focus(){this._focusableElement?.first?.nativeElement.focus()}focusFirst(){this.focus()}focusLast(){this._focusableElement?.last?.nativeElement.focus()}blur(){this._focusableElement?.forEach(t=>t.nativeElement.blur())}onFocus(t){this.isFocused=!0,this.focusEvent.emit(t)}onBlur(t){this.isFocused=!1,this.blurEvent.emit(t)}static{this.\u0275fac=(()=>{let t;return function(n){return(t||(t=Ee(e)))(n||e)}})()}static{this.\u0275dir=X({type:e,viewQuery:function(i,n){if(i&1&&Vn(ws,5),i&2){let d;Ln(d=Rn())&&(n._focusableElement=d)}},inputs:{_tabIndex:[1,"tabIndex","_tabIndex"]},outputs:{focusEvent:"focus",blurEvent:"blur"},standalone:!1,features:[ae]})}}return e})(),ve=bt,Ps=(()=>{class e extends mn{registerOnTouched(t){this._onTouchedRegistered=t}registerOnChange(t){this._onChangeRegistered=t}setDisabledState(t){this.disabled.set(t)}onBlur(t){super.onBlur(t),this._onTouchedRegistered?.()}static{this.\u0275fac=(()=>{let t;return function(n){return(t||(t=Ee(e)))(n||e)}})()}static{this.\u0275dir=X({type:e,standalone:!1,features:[ae]})}}return e})();var ks={Outlined:"outlined"},Vs={Raised:"raised"},ge=F(g({},ks),{Transparent:"transparent",Filled:"filled"}),Ls={Outlined:"outlined",OutlinedStrong:"outlined-strong",Filled:"filled"};var qr={Rounded:"rounded",Sharp:"sharp"},xe=F(g({},qr),{Pill:"pill"}),Rs={Square:"square",Rectangle:"rectangle"};var Bs=F(g({},ve),{appearance:ge.Outlined,variant:xe.Rounded,shape:Rs.Square,compact:!1,outputAsString:!1}),xh=new A("ard-digit-input-defaults",{factory:()=>g({},Bs)});var Os={Outlined:"outlined",Raised:"raised"},Us={Rounded:"rounded",Sharp:"sharp",SharpConnected:"sharp ard-connected"},Hs={filterValue:"",appearance:Os.Raised,variant:Us.Rounded,compact:!1},Sh=new A("ard-dropdown-panel-defaults",{factory:()=>g({},Hs)});var js=F(g({},bt),{appearance:ge.Outlined,variant:xe.Rounded,compact:!1}),Th=new A("ard-form-field-frame-defaults",{factory:()=>g({},js)});var mi={Left:"left",Right:"right"},hi={Left:"left",Middle:"middle",Right:"right"};var Ns=F(g({},ve),{appearance:ge.Outlined,variant:xe.Rounded,compact:!1,placeholder:"",alignText:mi.Left,clearable:!1,clearButtonTitle:"Clear",inputAttrs:{},maxLength:void 0});var $s=F(g({},Ns),{suggValueFrom:"value",suggLabelFrom:"label",suggestionsLoadingText:"Loading...",charlist:void 0,charlistCaseInsensitive:!1,dropdownAppearance:void 0,dropdownVariant:void 0}),wh=new A("ard-input-defaults",{factory:()=>g({},$s)});var Ks=F(g({},ve),{appearance:ge.Outlined,variant:xe.Rounded,compact:!1,placeholder:"",revealable:!0,holdToReveal:!1,autoHideTimeoutMs:void 0,revealed:!1,inputAttrs:{}}),Ah=new A("ard-password-input-defaults",{factory:()=>g({},Ks)});var Ws={filled:!1,weight:400,grade:0,opticalSize:40,ariaLabel:""},qs=new A("ard-icon-defaults",{factory:()=>g({},Ws)});var zs=(()=>{class e{transform(t){return t=t.trim().toLowerCase(),t=t.replace(/[ -]/g,"_"),t}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275pipe=ki({name:"icon",type:e,pure:!0,standalone:!1})}}return e})(),ke=(()=>{class e{constructor(){this._DEFAULTS=I(qs),this.ariaLabel=h(""),this.icon=h(void 0),this.filled=h(!1,{transform:t=>pe(t)}),this.weight=h(400,{transform:t=>Ht(t,400)}),this.grade=h(0,{transform:t=>Ht(t,0)}),this.opticalSize=h(40,{transform:t=>Ht(t,40)}),this.fontVariationSettings=V(()=>{let t={FILL:ji(this.filled())?Number(this.filled()):void 0,wght:this.weight(),GRAD:this.grade(),opsz:this.opticalSize()},i=Object.entries(t).filter(n=>ji(n[1])).map(n=>`"${n[0]}" ${n[1]}`).flat();return i.length===0?"":["font-variation-settings: ",i.join(", ")].join("")}),this.contentWrapper=me("contentWrapperEl")}ngAfterViewInit(){!this.icon()&&!this.contentWrapper()?.nativeElement.innerText&&console.warn("ARD-FT9000: Using <ard-icon> without specifying the [icon] field.")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["ard-icon"]],viewQuery:function(i,n){i&1&&he(n.contentWrapper,un,5),i&2&&fe()},inputs:{ariaLabel:[1,"ariaLabel"],icon:[1,"icon"],filled:[1,"filled"],weight:[1,"weight"],grade:[1,"grade"],opticalSize:[1,"opticalSize"]},standalone:!1,ngContentSelectors:Qe,decls:6,vars:7,consts:[["contentWrapperEl",""],[1,"ard-icon","material-symbols-outlined"],[1,"ard-icon-content-wrapper"]],template:function(i,n){if(i&1&&(B(),o(0,"span",1),s(1),we(2,"icon"),a(),o(3,"div",2,0),R(5),a()),i&2){let d,c=L(4);Pt(n.fontVariationSettings()),Mt("aria-hidden",n.ariaLabel()!==void 0)("aria-label",n.ariaLabel()),l(),S(" ",He(2,5,(d=n.icon())!==null&&d!==void 0?d:c.innerText),`
`)}},dependencies:[zs],styles:[`@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";ard-icon{font-variation-settings:"FILL" 0,"wght" 400,"GRAD" 0,"opsz" 48;font-size:1.5em;width:1em;height:1em;display:inline-block;-webkit-user-select:none;user-select:none;background-repeat:no-repeat;fill:currentColor;overflow:hidden;flex-shrink:0}ard-icon .ard-icon{font-variation-settings:inherit;font-size:inherit}ard-icon .ard-icon-content-wrapper{display:none}
`],encapsulation:2,changeDetection:0})}}return e})();var Ve=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=ce({type:e})}static{this.\u0275inj=de({imports:[W]})}}return e})();var Qs=F(g({},ve),{appearance:ge.Outlined,variant:xe.Rounded,compact:!1,placeholder:"",alignText:mi.Left,clearable:!1,clearButtonTitle:"Clear",inputAttrs:{},maxLength:void 0}),Dh=new A("ard-simple-input-defaults",{factory:()=>g({},Qs)});function cn(e,r){return r===void 0?!1:String(r).toLocaleLowerCase().indexOf(e)!==-1}var qe={byLabel:(e,r)=>cn(e,r.label()),byValue:(e,r)=>cn(e,r.value()),byGroup:(e,r)=>cn(e,r.group),byLabelAndGroup:(e,r)=>qe.byLabel(e,r)||r.label()!==r.value()&&qe.byValue(e,r),byLabelAndValue:(e,r)=>qe.byLabel(e,r)||qe.byValue(e,r),byLabelAndGroupAndValue:(e,r)=>qe.byLabel(e,r)||r.label()!==r.value()&&qe.byValue(e,r)||qe.byGroup(e,r)},Gs={Top:"top",Bottom:"bottom",Auto:"auto"},Ys=F(g({},ve),{valueFrom:"value",labelFrom:"label",disabledFrom:"disabled",groupLabelFrom:"group",groupDisabledFrom:"disabled",childrenFrom:"children",searchFn:qe.byLabel,clearButtonTitle:"Clear",noItemsFoundText:"No items found.",loadingPlaceholderText:"Loading...",placeholder:"Select item",searchPlaceholder:"Search...",dropdownPosition:Gs.Auto,inputAttrs:{},isLoading:!1,itemsAlreadyGrouped:!1,invertDisabled:!1,noGroupActions:!1,autoHighlightFirst:!1,autoFocus:!1,keepOpen:!1,hideSelected:!1,noBackspaceClear:!1,sortMultipleValues:!1,searchCaseSensitive:!1,keepSearchAfterSelect:!1,maxSelectedItems:1/0,itemDisplayLimit:1/0,compareWith:void 0,appearance:ge.Outlined,variant:xe.Rounded,compact:!1,dropdownAppearance:void 0,dropdownVariant:void 0,multiselectable:!1,clearable:!1,searchable:!1,addCustom:!1}),Eh=new A("ard-select-defaults",{factory:()=>g({},Ys)});var le={None:"none",Primary:"primary",Secondary:"secondary",Warning:"warn",Danger:"danger",Success:"success",Info:"info"},ze=F(g({},le),{CurrentColor:"currentColor"}),hn=F(g({},Wr),{contentAlignment:mi.Left,appearance:Ls.Outlined,variant:xe.Rounded,color:le.Primary,compact:!1}),Ih=new A("ard-chip-defaults",{factory:()=>hn});var Xs=F(g(g({},bt),hn),{deleteButtonTitle:"Delete"}),Fh=new A("ard-deletable-chip-defaults",{factory:()=>g({},Xs)});var jt=ve,Zs=(()=>{class e extends Ps{constructor(){super(...arguments);this.selectEvent=Ce({alias:"select"}),this.unselectEvent=Ce({alias:"unselect"}),this.changeEvent=Ce({alias:"change"});this.selected=w(!1),this.selectedChange=Ce()}writeValue(t){this._selected=t}_emitChange(){this._onChangeRegistered?.(this.selected()),this.selected()?this.selectEvent.emit(null):this.unselectEvent.emit(null),this.selectedChange.emit(this.selected()),this.changeEvent.emit(this.selected())}set _selected(t){this.selected.set(pe(t))}get _selectedHostAttribute(){return this.selected()}toggleSelected(){this.selected.update(t=>!t),this._emitChange()}select(){this.selected.set(!0),this._emitChange()}unselect(){this.selected.set(!1),this._emitChange()}static{this.\u0275fac=(()=>{let t;return function(n){return(t||(t=Ee(e)))(n||e)}})()}static{this.\u0275dir=X({type:e,hostVars:3,hostBindings:function(i,n){i&2&&(Mt("selected",n._selectedHostAttribute),se("ard-selected",n._selectedHostAttribute))},inputs:{_selected:[0,"selected","_selected"]},outputs:{selectEvent:"select",unselectEvent:"unselect",changeEvent:"change",selectedChange:"selectedChange"},standalone:!1,features:[ae]})}}return e})(),Js=F(g(g({},jt),hn),{chipTitle:"Select",hideSelectionIcon:!1}),Mh=new A("ard-selectable-chip-defaults",{factory:()=>g({},Js)});var zr=F(g({},ve),{compact:!1,multiple:!1,blockAfterUpload:!1}),el=F(g({},zr),{variant:xe.Rounded,color:le.Primary}),Ph=new A("ard-file-drop-area-defaults",{factory:()=>g({},el)});var tl=(()=>{class e extends mn{constructor(t){super(t),this.wrapperClasses=h(""),this.type=h(this._DEFAULTS.type);this.appearance=h(this._DEFAULTS.appearance),this.color=h(this._DEFAULTS.color),this.lightColoring=h(this._DEFAULTS.lightColoring,{transform:i=>pe(i)}),this.compact=h(this._DEFAULTS.compact,{transform:i=>pe(i)}),this._DEFAULTS=t}static{this.\u0275fac=function(i){Pi()}}static{this.\u0275dir=X({type:e,inputs:{wrapperClasses:[1,"wrapperClasses"],type:[1,"type"],appearance:[1,"appearance"],color:[1,"color"],lightColoring:[1,"lightColoring"],compact:[1,"compact"]},standalone:!1,features:[ae]})}}return e})(),il={Button:"button",Submit:"submit",Reset:"reset"},pn={Transparent:"transparent",Raised:"raised",RaisedStrong:"raised-strong",Outlined:"outlined",OutlinedStrong:"outlined-strong",Flat:"flat"},nl={Rounded:"rounded",Pill:"pill",Sharp:"sharp"},rl={Standard:"standard",Small:"small"},Qr=F(g({},bt),{color:le.Primary,lightColoring:!1,compact:!1,type:il.Button}),Gr=F(g({},Qr),{appearance:pn.Raised}),ol=F(g({},Gr),{variant:nl.Rounded,alignIcon:mi.Left,vertical:!1}),al=new A("ard-button-defaults",{factory:()=>g({},ol)});var kh=(()=>{class e extends tl{constructor(t){super(t),this.icon=h("");this.variant=h(this._DEFAULTS.variant),this.alignIcon=h(this._DEFAULTS.alignIcon),this.vertical=h(this._DEFAULTS.vertical,{transform:i=>pe(i)}),this.ngClasses=V(()=>[this.wrapperClasses(),`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`,`ard-color-${this.color()}`,`ard-align-${this.alignIcon()}`,this.lightColoring()?"ard-light-coloring":"",this.compact()?"ard-compact":"",this.vertical()?"ard-button-vertical":""].join(" "))}static{this.\u0275fac=function(i){return new(i||e)(Q(al))}}static{this.\u0275cmp=p({type:e,selectors:[["ard-button"]],inputs:{icon:[1,"icon"],variant:[1,"variant"],alignIcon:[1,"alignIcon"],vertical:[1,"vertical"]},standalone:!1,features:[ae],ngContentSelectors:Qe,decls:6,vars:4,consts:[["buttonElement",""],[1,"ard-button",3,"focus","blur","type","ngClass","tabindex"],[1,"ard-focus-overlay"],[1,"ard-button-icon"],[1,"ard-button-content"]],template:function(i,n){if(i&1){let d=U();B(),o(0,"button",1,0),_("focus",function(v){return D(d),E(n.onFocus(v))})("blur",function(v){return D(d),E(n.onBlur(v))}),b(2,"div",2),y(3,As,2,1,"div",3),o(4,"div",4),R(5),a()()}i&2&&(u("type",n.type())("ngClass",n.ngClasses())("tabindex",n.tabIndex()),l(3),C(n.icon()?3:-1))},dependencies:[ot],styles:[`.ard-button{display:flex;align-items:center;position:relative;cursor:pointer}.ard-button.ard-button-align-left{flex-direction:row}.ard-button.ard-button-align-right{flex-direction:row-reverse}.ard-button.ard-button-vertical{flex-direction:column}
`],encapsulation:2,changeDetection:0})}}return e})();var Vh=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=ce({type:e})}static{this.\u0275inj=de({imports:[W]})}}return e})();var sl=F(g({},zr),{appearance:ge.Outlined,variant:xe.Rounded,color:le.Primary,inputAttrs:{},placeholder:"",clearable:!1,clearButtonTitle:"Clear"}),Lh=new A("ard-file-input-defaults",{factory:()=>g({},sl)});var ll={NoChange:"nochange",Uppercase:"uppercase",Lowercase:"lowercase"},dl=F(g({},ve),{appearance:ge.Outlined,variant:xe.Rounded,compact:!1,placeholder:"",case:ll.NoChange,maxDigits:void 0,hideHash:!1,clearable:!1,clearButtonTitle:"Clear",inputAttrs:{}}),Rh=new A("ard-hex-input-defaults",{factory:()=>g({},dl)});var cl=F(g({},ve),{appearance:ge.Outlined,variant:xe.Rounded,compact:!1,placeholder:"",alignText:hi.Middle,inputAttrs:{},min:0,max:1/0,allowFloat:!1,noButtons:!1,stepSize:1}),Bh=new A("ard-number-input-defaults",{factory:()=>g({},cl)});var pl=F(g({},Gr),{size:rl.Standard}),Oh=new A("ard-fab-defaults",{factory:()=>g({},pl)});var ul=new A("ard-icon-button-defaults",{factory:()=>Qr});var Ge=(()=>{class e extends mn{constructor(t){super(t),this.wrapperClasses=h(""),this.type=h(this._DEFAULTS.type);this.color=h(this._DEFAULTS.color),this.lightColoring=h(this._DEFAULTS.lightColoring,{transform:i=>pe(i)}),this.compact=h(this._DEFAULTS.compact,{transform:i=>pe(i)}),this.ngClasses=V(()=>["ard-appearance-transparent",`ard-color-${this.disabled()?le.None:this.color()}`,this.lightColoring()?"ard-light-coloring":"",this.compact()?"ard-compact":""].join(" "))}static{this.\u0275fac=function(i){return new(i||e)(Q(ul))}}static{this.\u0275cmp=p({type:e,selectors:[["ard-icon-button"]],inputs:{wrapperClasses:[1,"wrapperClasses"],type:[1,"type"],color:[1,"color"],lightColoring:[1,"lightColoring"],compact:[1,"compact"]},standalone:!1,features:[ae],ngContentSelectors:Qe,decls:4,vars:3,consts:[[1,"ard-icon-button",3,"focus","blur","type","ngClass","tabindex"],[1,"ard-focus-overlay"],[1,"ard-button-content"]],template:function(i,n){i&1&&(B(),o(0,"button",0),_("focus",function(c){return n.focusEvent.emit(c)})("blur",function(c){return n.blurEvent.emit(c)}),b(1,"div",1),o(2,"div",2),R(3),a()()),i&2&&u("type",n.type())("ngClass",n.ngClasses())("tabindex",n.tabIndex())},dependencies:[ot],styles:[`.ard-icon-button{display:flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.ard-icon-button .ard-button-content{max-height:100%;display:flex;align-items:center;justify-content:center}
`],encapsulation:2,changeDetection:0})}}return e})(),Ye=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=ce({type:e})}static{this.\u0275inj=de({imports:[W]})}}return e})(),ml=F(g({},jt),{color:ze.Primary,unselectedColor:ze.None}),hl=new A("ard-checkbox-defaults",{factory:()=>g({},ml)});var st={Unselected:"unselected",Indeterminate:"indeterminate",Selected:"selected"},fi=(()=>{class e extends Zs{constructor(t){super(t),this.htmlId=h("");this.color=h(this._DEFAULTS.color),this.unselectedColor=h(this._DEFAULTS.unselectedColor),this.ngClasses=V(()=>[`ard-color-${this.color()}`,`ard-unselected-color-${this.unselectedColor()}`,`ard-checkbox-${this.state()}`].join(" ")),this.state=nt(st.Unselected)}set _selected(t){let i=pe(t);this.selected.set(i),this.state.set(i?st.Selected:st.Unselected)}toggleState(){let t=st.Unselected;this.state()===st.Unselected&&(t=st.Selected),this.state.set(t),this.selected.set(this.state()===st.Selected),this._emitChange()}static{this.\u0275fac=function(i){return new(i||e)(Q(hl))}}static{this.\u0275cmp=p({type:e,selectors:[["ard-checkbox"]],inputs:{htmlId:[1,"htmlId"],color:[1,"color"],unselectedColor:[1,"unselectedColor"],state:[1,"state"]},outputs:{state:"stateChange"},standalone:!1,features:[Oe([{provide:vt,useExisting:it(()=>e),multi:!0}]),ae],decls:6,vars:4,consts:[["role","checkbox","type","button",1,"ard-checkbox",3,"click","focus","blur","id","ariaChecked","tabindex","ngClass"],[1,"ard-hitbox"],[1,"ard-focus-overlay"],[1,"ard-checkbox-icon","ard-icon-for-selected"],[1,"ard-checkbox-icon","ard-icon-for-indeterminate"],[1,"ard-checkbox-icon","ard-icon-for-unselected"]],template:function(i,n){i&1&&(o(0,"button",0),_("click",function(){return n.toggleState()})("focus",function(c){return n.onFocus(c)})("blur",function(c){return n.onBlur(c)}),b(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),a()),i&2&&u("id",n.htmlId())("ariaChecked",n.selected())("tabindex",n.tabIndex())("ngClass",n.ngClasses())},dependencies:[ot],styles:[`ard-checkbox{display:inline}.ard-checkbox{font-size:inherit}
`],encapsulation:2,changeDetection:0})}}return e})(),gi=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=ce({type:e})}static{this.\u0275inj=de({imports:[W]})}}return e})(),fl=F(g({},jt),{color:ze.Primary}),Uh=new A("ard-radio-defaults",{factory:()=>g({},fl)});var gl=F(g({},ve),{valueFrom:"value",labelFrom:"label",disabledFrom:"disabled",compareWith:void 0,multiselectable:!1,requireValue:!1,invertDisabled:!1,maxSelectedItems:void 0});var _l=F(g({},xe),{RoundedConnected:"rounded-connected",SharpConnected:"sharp-connected",PillConnected:"pill-connected"}),vl=F(g({},ge),{FilledStrong:"filled-strong",OutlinedStrong:"outlined-strong"}),Cl=F(g({},gl),{appearance:vl.Outlined,variant:_l.RoundedConnected,color:le.Primary,align:hi.Middle,iconBased:!1,compact:!1,autoFocus:!1,uniformWidths:!1,itemsPerRow:1/0}),Hh=new A("ard-segment-defaults",{factory:()=>g({},Cl)});var yl={Raised:"raised",Contained:"contained"},bl=F(g({},jt),{color:le.Primary,appearance:yl.Raised,icon:void 0,selectedIcon:void 0,unselectedIcon:void 0}),jh=new A("ard-slide-toggle-defaults",{factory:()=>g({},bl)});var xl={Always:"always",Auto:"auto",Never:"never"},Nr={Top:"top",Bottom:"bottom"},Sl=F(g({},ve),{noTooltip:!1,showValueTicks:!1,formatTooltipFn:void 0,min:0,max:100,step:1,shiftMultiplier:5,labelPosition:Nr.Bottom,labels:[],color:ze.Primary,compact:!1,tooltipPosition:Nr.Top,tooltipBehavior:xl.Auto});var Tl=g({},Sl),Nh=new A("ard-slider-defaults",{factory:()=>g({},Tl)});var Yr={Noop:"noop",Default:"default"},wl={None:"none",Half:"half",Filled:"filled"},_i=F(g({},ze),{Star:"star"}),Al=F(g({},jt),{clickStrategy:Yr.Default,color:_i.Star}),$h=new A("ard-star-button-defaults",{factory:()=>g({},Al)});var Dl={color:_i.Star,filled:wl.None},Kh=new A("ard-star-defaults",{factory:()=>g({},Dl)});var El=F(g({},ve),{color:_i.Star,max:5}),Wh=new A("ard-star-input-defaults",{factory:()=>g({},El)});var Il=F(g({},ve),{clickStrategy:Yr.Default,states:[{value:!1,color:"none"},{value:!0,color:"secondary",icon:"check_box",filled:!0}]}),qh=new A("ard-statebox-defaults",{factory:()=>g({},Il)});var Fl={LeftClumped:"left-clumped",LeftSplit:"left-split",RightSplit:"right-split",RightClumped:"right-clumped"},Ml=F(g({},ve),{valueFrom:"value",labelFrom:"label",disabledFrom:"disabled",compareWith:null,invertDisabled:!1,maxSelectedItems:1/0,color:le.Primary,align:Fl.LeftClumped,compact:!1}),zh=new A("ard-checkbox-list-defaults",{factory:()=>g({},Ml)});var Pl={Small:"small",Medium:"medium",Large:"large"},kl={AboveBefore:"above-before",AboveAfter:"above-after",BelowBefore:"below-before",BelowAfter:"below-after",Before:"before",After:"after",Above:"above",Below:"below"},Vl={color:le.Primary,variant:xe.Rounded,size:Pl.Medium,position:kl.AboveAfter,overlap:!1},Qh=new A("ard-badge-defaults",{factory:()=>g({},Vl)});var Ll={Default:"default",Auto:"auto"};var Rl={Sharp:"sharp",Pill:"pill"},Xr={Determinate:"determinate",Indeterminate:"indeterminate",Buffer:"buffer",Query:"query"},Bl={value:0,bufferValue:0,color:ze.Primary,variant:Rl.Pill,size:Ll.Default,mode:Xr.Determinate,hideValue:!1},Gh=new A("ard-progress-bar-defaults",{factory:()=>g({},Bl)});var Ol={Transparent:"transparent",Colorless:"colorless",Colored:"colored"},Ul={Full:"full",Ring:"ring"},Hl={value:0,max:100,color:ze.Primary,appearance:Ol.Transparent,variant:Ul.Full,hideValue:!1,reverse:!1},Yh=new A("ard-progress-circle-defaults",{factory:()=>g({},Hl)});var jl={color:ze.Primary},Xh=new A("ard-spinner-defaults",{factory:()=>g({},jl)});var Nl={Rounded:"rounded with-border",Circle:"circle with-border",Sharp:"sharp with-border",RoundedBorderless:"rounded",CircleBorderless:"circle",SharpBorderless:"sharp"},$l={ariaLabel:"",withLabel:!1,appearance:Nl.Rounded},Zh=new A("ard-color-display-defaults",{factory:()=>g({},$l)});var Kl={full:!1,appearance:ge.Outlined},fn=new A("ard-kbd-defaults",{factory:()=>g({},Kl)});var Wl=(()=>{class e{constructor(){this._DEFAULTS=I(fn)}transform(t,i=!this._DEFAULTS.full){return an(t,i)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275pipe=ki({name:"kbd",type:e,pure:!0,standalone:!1})}}return e})(),Se=(()=>{class e{constructor(){this._DEFAULTS=I(fn),this.contentWrapper=me("contentWrapperEl"),this.key=h(""),this.full=h(!1,{transform:t=>pe(t)});this.appearance=h(ge.Filled),this.ngClasses=V(()=>[`ard-appearance-${this.appearance()}`].join(" "))}ngAfterViewInit(){if(!this.key()&&!this.contentWrapper().nativeElement.innerText)throw new Error("ARD-FT5030: Using <ard-kbd> without specifying the [key] field is not allowed.")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["ard-kbd"]],viewQuery:function(i,n){i&1&&he(n.contentWrapper,un,5),i&2&&fe()},inputs:{key:[1,"key"],full:[1,"full"],appearance:[1,"appearance"]},standalone:!1,ngContentSelectors:Qe,decls:6,vars:5,consts:[["contentWrapperEl",""],[1,"ard-kbd",3,"ngClass"],[1,"ard-kbd-content-wrapper"]],template:function(i,n){if(i&1&&(B(),o(0,"kbd",1),s(1),we(2,"kbd"),a(),o(3,"div",2,0),R(5),a()),i&2){let d;u("ngClass",n.ngClasses()),l(),S(" ",kt(2,2,n.key()||((d=n.contentWrapper())==null||d.nativeElement==null?null:d.nativeElement.innerText)||"",!n.full()),`
`)}},dependencies:[ot,Wl],styles:[`.ard-kbd-content-wrapper{display:none}.ard-kbd{display:inline-block}
`],encapsulation:2,changeDetection:0})}}return e})(),Zr=(()=>{class e{constructor(){this.elementRef=I(ye),this.renderer=I(Be);this.appearance=h(ge.Filled,{alias:"ardKbdAppearance"}),this.ngClasses=V(()=>["ard-kbd",`ard-appearance-${this.appearance()}`]),Fe(()=>{let t=this.ngClasses();this.updateClasses(t)})}updateClasses(t){let i=this.elementRef.nativeElement;i.className.split(" ").filter(d=>d.startsWith("ard-appearance-")).forEach(d=>this.renderer.removeClass(i,d)),t.forEach(d=>{this.renderer.addClass(i,d)})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275dir=X({type:e,selectors:[["","ardKbd",""]],inputs:{appearance:[1,"ardKbdAppearance","appearance"]},standalone:!1})}}return e})(),re=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=ce({type:e})}static{this.\u0275inj=de({imports:[W]})}}return e})(),ql=new A("ard-kbd-shortcut-defaults",{factory:()=>({})});var xt=(()=>{class e{constructor(){this._KBD_DEFAULTS=I(fn),this._DEFAULTS=I(ql),this.contentWrapper=me("contentWrapperEl"),this.splitRegex=/[+, ]/,this.keys=h(void 0,{transform:t=>Lr(t,this.splitRegex)}),this.full=h(this._DEFAULTS.full??this._KBD_DEFAULTS.full,{transform:t=>pe(t)});this.appearance=h(this._DEFAULTS.appearance??this._KBD_DEFAULTS.appearance),this.ngClasses=V(()=>[`ard-appearance-${this.appearance}`].join(" "))}ngAfterViewInit(){if(!this.keys()&&!this.contentWrapper()?.nativeElement.innerText)throw new Error("ARD-FT5040: Using <ard-kbd-shortcut> without specifying the [keys] field is not allowed.")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["ard-kbd-shortcut"]],viewQuery:function(i,n){i&1&&he(n.contentWrapper,un,5),i&2&&fe()},inputs:{keys:[1,"keys"],full:[1,"full"],appearance:[1,"appearance"]},standalone:!1,ngContentSelectors:Qe,decls:6,vars:1,consts:[["contentWrapperEl",""],[1,"ard-kbd-shortcut",3,"ngClass"],[1,"ard-kbd-shortcut-content-wrapper"],[3,"appearance","full","key"]],template:function(i,n){if(i&1&&(B(),o(0,"div",1),P(1,Es,2,4,null,null,O),a(),o(3,"div",2,0),R(5),a()),i&2){let d;u("ngClass",n.ngClasses()),l(),k((d=n.keys())!==null&&d!==void 0?d:(d=n.contentWrapper())==null||d.nativeElement==null||d.nativeElement.innerText==null?null:d.nativeElement.innerText.split(n.splitRegex))}},dependencies:[ot,Se],styles:[`.ard-kbd-shortcut{display:inline}.ard-kbd-shortcut-content-wrapper{display:none}
`],encapsulation:2,changeDetection:0})}}return e})(),St=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=ce({type:e})}static{this.\u0275inj=de({imports:[W,re]})}}return e})(),zl={color:_i.Star,max:5,value:0},Jh=new A("ard-star-display-defaults",{factory:()=>g({},zl)});var Ql={Strong:"strong",Light:"light",Colorless:"colorless"},Gl={Rounded:"rounded",Sharp:"sharp"},Yl={Noop:"noop",Slice:"slice"},$r={TopLeft:"top-left",TopCenter:"top-center",TopRight:"top-right",CenterLeft:"center-left",Center:"center-center",CenterRight:"center-right",BottomLeft:"bottom-left",BottomCenter:"bottom-center",BottomRight:"bottom-right"};var Jr={Left:"left",Center:"center",Right:"right",Split:"split"},Xl=F(g({},bt),{options:[10,25,50],itemsPerPage:50,page:1,color:le.None,align:Jr.Split,compact:!1,useFirstLastButtons:!1,itemsPerPageText:"Items per page:",currentItemsFormatFn:({currentItemsFrom:e,currentItemsTo:r,totalItems:t})=>`${e} \u2013 ${r} of ${t}`}),ef=new A("ard-table-pagination-defaults",{factory:()=>g({},Xl)});var eo=F(g({},bt),{rowDisabledFrom:"disabled",rowBoldFrom:"bold",invertRowDisabled:!1,invertRowBold:!1,selectableRows:!1,maxSelectedItems:void 0,clickableRows:!1,caption:void 0,isLoading:!1,loadingProgress:0,loadingProgressBuffer:0,loadingBarMode:Xr.Determinate,loadingBarColor:le.Secondary,appearance:Ql.Strong,variant:Gl.Rounded,color:le.Primary,align:$r.CenterLeft,headerAlign:$r.CenterLeft,compact:!1,zebra:!1,stickyHeader:!1,paginated:!1,paginationStrategy:Yl.Noop,paginationOptions:[10,25,50],totalItems:void 0,paginationColor:le.None,paginationAlign:Jr.Split,itemsPerPageText:"Items per page:",currentItemsFormatFn:({currentItemsFrom:e,currentItemsTo:r,totalItems:t})=>`${e} \u2013 ${r} of ${t}`,pageFillRemaining:!1,paginationDisabled:!1,useFirstLastButtons:!1,itemsPerPage:50,page:1,treatDataSourceAsString:!1}),tf=new A("ard-table-defaults",{factory:()=>g({},eo)});var Zl=F(g({},eo),{separator:","}),nf=new A("ard-table-from-csv-defaults",{factory:()=>g({},Zl)});var Jl={Outlined:"outlined",Raised:"raised"},ed={Rounded:"rounded",Sharp:"sharp"},td={appearance:Jl.Raised,variant:ed.Rounded,actionButtonsAlign:hi.Right},id=new A("ard-card-defaults",{factory:()=>g({},td)});var to=(()=>{class e{constructor(t,i){t.addClass(i.nativeElement,"ard-card-title")}static{this.\u0275fac=function(i){return new(i||e)(Q(Be),Q(ye))}}static{this.\u0275dir=X({type:e,selectors:[["ard-card-title"],["","ard-card-title",""]],standalone:!1})}}return e})();var io=(()=>{class e{constructor(t,i){t.addClass(i.nativeElement,"ard-card-content")}static{this.\u0275fac=function(i){return new(i||e)(Q(Be),Q(ye))}}static{this.\u0275dir=X({type:e,selectors:[["ard-card-content"],["","ard-card-content",""]],standalone:!1})}}return e})(),no=(()=>{class e{constructor(t,i){t.addClass(i.nativeElement,"ard-card-image")}static{this.\u0275fac=function(i){return new(i||e)(Q(Be),Q(ye))}}static{this.\u0275dir=X({type:e,selectors:[["","ard-card-image",""]],standalone:!1})}}return e})();var nd=(()=>{class e{constructor(){this._DEFAULTS=I(id);this.appearance=h(this._DEFAULTS.appearance),this.variant=h(this._DEFAULTS.variant),this.ngClasses=V(()=>["ard-card",`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`].join(" "))}get _ngClassesHostAttribute(){return this.ngClasses()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275dir=X({type:e,selectors:[["","ard-card",""]],hostVars:2,hostBindings:function(i,n){i&2&&G(n._ngClassesHostAttribute)},inputs:{appearance:[1,"appearance"],variant:[1,"variant"]},standalone:!1})}}return e})(),ro=(()=>{class e extends nd{static{this.\u0275fac=(()=>{let t;return function(n){return(t||(t=Ee(e)))(n||e)}})()}static{this.\u0275cmp=p({type:e,selectors:[["ard-card"]],standalone:!1,features:[ae],ngContentSelectors:Qe,decls:1,vars:0,template:function(i,n){i&1&&(B(),R(0))},encapsulation:2,changeDetection:0})}}return e})(),oo=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=ce({type:e})}static{this.\u0275inj=de({imports:[W]})}}return e})(),rd={vertical:!1},rf=new A("ard-divider-defaults",{factory:()=>g({},rd)});var od={disabled:!1},ad=new A("ard-tab-defaults",{factory:()=>g({},od)});var pi=(()=>{class e{constructor(){this._DEFAULTS=I(ad),this.disabled=h(this._DEFAULTS.disabled,{transform:t=>pe(t)}),this.selected=w(!1),this.focused=w(!1),this._label=h(null,{alias:"label"}),this.label=V(()=>this._label()??this.tabId()),this.tabId=h.required(),this.focusEvent=Ce(),this.blurEvent=Ce(),this.selectedChange=Ce()}set _selected(t){this.selected.set(pe(t))}setSelected(t){this.selected.set(t),this._emitChange()}get _selectedHostAttribute(){return this.selected()}_emitChange(){this.selectedChange.emit(this.selected())}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["ard-tab"]],hostVars:2,hostBindings:function(i,n){i&2&&se("ard-tab-selected",n._selectedHostAttribute)},inputs:{disabled:[1,"disabled"],_selected:[0,"selected","_selected"],_label:[1,"label","_label"],tabId:[1,"tabId"]},outputs:{focusEvent:"focusEvent",blurEvent:"blurEvent",selectedChange:"selectedChange"},standalone:!1,ngContentSelectors:Qe,decls:1,vars:0,template:function(i,n){i&1&&(B(),R(0))},encapsulation:2,changeDetection:0})}}return e})(),sd={color:le.Primary,stretchTabs:!1,uniformTabWidths:!1,tabAlignment:hi.Left,tabIndex:0},ld=new A("ard-tabber-defaults",{factory:()=>g({},sd)});var ao=(()=>{class e{constructor(){this._DEFAULTS=I(ld),this.tabs=Fn(pi,{descendants:!0}),this.currentTab=w(null),this.currentFocusedTab=w(null),this.initialTab=h(void 0),this.focusEvent=Ce({alias:"focus"}),this.blurEvent=Ce({alias:"blur"}),this.changeTab=Ce();this.color=h(this._DEFAULTS.color),this.ngClasses=V(()=>[`ard-color-${this.color()}`].join(" "));this.stretchTabs=h(this._DEFAULTS.stretchTabs,{transform:t=>pe(t)}),this.uniformTabWidths=h(this._DEFAULTS.uniformTabWidths,{transform:t=>pe(t)}),this.tabAlignment=h(this._DEFAULTS.tabAlignment),this.tabContainerClasses=V(()=>[this.uniformTabWidths()&&!this.stretchTabs()?"ard-uniform-tab-widths":"",this.stretchTabs()?"ard-stretch-tabs":"",this.stretchTabs()?"":`ard-tab-align-${this.tabAlignment()}`].join(" "));this.tabIndex=h(0)}ngAfterContentInit(){let t=null;for(let i of this.tabs())i.selected()&&(t&&i.selected.set(!1),t=i),i.focusEvent.subscribe(()=>{this.focusEvent.emit(i.tabId())}),i.blurEvent.subscribe(()=>{this.blurEvent.emit(i.tabId())}),i.selectedChange.subscribe(n=>{n&&this.changeTab.emit(i.tabId())});t||(t=this.tabs().find(n=>n.tabId()===this.initialTab())??this.tabs()[0]??null,t&&t.selected.set(!0)),this.currentTab.set(t)}onTabClick(t){let i=this.currentTab();i&&(i.selected.set(!1),i.selectedChange.emit(!1)),this.currentTab.set(t),t.selected.set(!0),t.selectedChange.emit(!0)}onTabFocus(t){t.focusEvent.emit(),t.focused.set(!0),this.currentFocusedTab.set(t)}onTabBlur(t){t.blurEvent.emit(),t.focused.set(!1),this.currentFocusedTab.set(null)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["ard-tabber"]],contentQueries:function(i,n,d){i&1&&Bn(d,n.tabs,pi,5),i&2&&fe()},inputs:{initialTab:[1,"initialTab"],color:[1,"color"],stretchTabs:[1,"stretchTabs"],uniformTabWidths:[1,"uniformTabWidths"],tabAlignment:[1,"tabAlignment"],tabIndex:[1,"tabIndex"]},outputs:{focusEvent:"focus",blurEvent:"blur",changeTab:"changeTab"},standalone:!1,ngContentSelectors:Qe,decls:6,vars:6,consts:[["focusableElement",""],[1,"ard-tabber",3,"ngClass"],[1,"ard-tabber-tabs",3,"ngClass"],["type","button","role","tab",1,"ard-tab-button",3,"id","ard-tab-active","ard-tab-focused","tabindex"],["role","tabpanel",1,"ard-tabber-content"],["type","button","role","tab",1,"ard-tab-button",3,"click","focus","blur","id","tabindex"],[1,"ard-focus-overlay"]],template:function(i,n){i&1&&(B(),o(0,"div",1)(1,"div",2),P(2,Fs,4,7,"button",3,ut),a(),o(4,"div",4),R(5),a()()),i&2&&(u("ngClass",n.ngClasses()),l(),Pt(Ie(4,Is,n.tabs().length)),u("ngClass",n.tabContainerClasses()),l(),k(n.tabs()))},dependencies:[ot],styles:[`.ard-tabber ard-tab{display:none}.ard-tabber ard-tab.ard-tab-selected{display:block}.ard-tabber .ard-tabber-tabs.ard-uniform-tab-widths{display:grid;grid-template-columns:repeat(var(--ard-_tabber-tabs),1fr);max-width:max-content}
`],encapsulation:2,changeDetection:0})}}return e})(),so=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=ce({type:e})}static{this.\u0275inj=de({imports:[W]})}}return e})(),lo={appearance:Vs.Raised,variant:qr.Rounded,compact:!1,heading:"",noCloseButton:!1,noBackdrop:!1,disableBackdropClose:!1},of=new A("ard-modal-defaults",{factory:()=>g({},lo)});var dd=F(g({},lo),{confirmButtonText:"Confirm",confirmButtonColor:le.Primary,confirmButtonAppearance:pn.RaisedStrong,rejectButtonText:"Cancel",rejectButtonColor:le.None,rejectButtonAppearance:pn.Transparent,noRejectButton:!1,canConfirm:!0}),af=new A("ard-dialog-defaults",{factory:()=>g({},dd)});var sf=new A("ArdSnackbarData"),lf=new A("ArdSnackbarColor"),df=new A("ArdSnackbarType");var cd={TopLeft:"top-left",TopCenter:"top-center",TopRight:"top-right",BottomLeft:"bottom-left",BottomCenter:"bottom-center",BottomRight:"bottom-right"},pd={Inside:"inside",Outside:"outside"},ud={Default:"default",Skip:"skip",Overwrite:"overwrite"},md={None:"none",Danger:"danger",Warning:"warn",Success:"success",Info:"info"};var hd={placement:{align:cd.BottomCenter,origin:document.body,originRelation:pd.Inside},duration:5e3,queueHandling:ud.Default,panelClass:[],data:{message:""},color:le.Primary,type:md.None},cf=new A("ard-snackbar-defaults",{factory:()=>g({},hd)});var pf=new A("ard-snackbar-animation-length",{factory:()=>150});var hf={name:"$$$",description:"$$$",type:"boolean-like",default:"false"};function ff(e,r=ge.Outlined,t){return{name:t??"appearance",description:e,type:"FormElementAppearance",default:`'${r}'`}}function co(e,r){let t=new Map;for(let i of e){let n=r(i);t.has(n)||t.set(n,[]),t.get(n).push(i)}return Array.from(t.entries()).map(([i,n])=>({group:i,children:n}))}var fd={offset:"30%",noHighlight:!1,behavior:"smooth"};function Tt(e,r={}){let{offset:t,noHighlight:i,behavior:n}=g(g({},fd),r),d=document.querySelector(e);if(!d){console.warn(`Element not found for selector: ${e}`);return}let v=d.getBoundingClientRect().top+window.scrollY,H=0;if(typeof t=="string"&&t.endsWith("%")){let oe=parseFloat(t);isNaN(oe)||(H=oe/100*window.innerHeight)}else typeof t=="number"&&(H=t);let te=v-H;window.scrollTo({top:te,behavior:n}),!i&&(d.classList.add("scrolled-to"),setTimeout(()=>{d.classList.remove("scrolled-to")},3e3))}var vn=new A("HIGHLIGHT_OPTIONS");function kf(e){return[{provide:vn,useValue:e}]}var wt=function(e){return e.FULL_WITH_CORE_LIBRARY_IMPORTS="The full library and the core library were imported, only one of them should be imported!",e.FULL_WITH_LANGUAGE_IMPORTS="The highlighting languages were imported they are not needed!",e.CORE_WITHOUT_LANGUAGE_IMPORTS="The highlighting languages were not imported!",e.LANGUAGE_WITHOUT_CORE_IMPORTS="The core library was not imported!",e.NO_FULL_AND_NO_CORE_IMPORTS="Highlight.js library was not imported!",e}(wt||{}),gd=(()=>{class e{constructor(){this.document=I(Oi),this.isPlatformBrowser=Hi(I(Fi)),this.options=I(vn,{optional:!0}),this._ready=new wn(null),this.ready=An(this._ready.asObservable().pipe(It(t=>!!t))),this.isPlatformBrowser&&(this.document.defaultView.hljs?this._ready.next(this.document.defaultView.hljs):this._loadLibrary().pipe(Ai(t=>this.options?.lineNumbersLoader?(this.document.defaultView.hljs=t,this.loadLineNumbers().pipe(Di(i=>{i.activateLineNumbers(),this._ready.next(t)}))):(this._ready.next(t),wi)),Dn(t=>(console.error("[HLJS] ",t),this._ready.error(t),wi))).subscribe(),this.options?.themePath&&this.loadTheme(this.options.themePath))}_loadLibrary(){if(this.options){if(this.options.fullLibraryLoader&&this.options.coreLibraryLoader)return ct(()=>wt.FULL_WITH_CORE_LIBRARY_IMPORTS);if(this.options.fullLibraryLoader&&this.options.languages)return ct(()=>wt.FULL_WITH_LANGUAGE_IMPORTS);if(this.options.coreLibraryLoader&&!this.options.languages)return ct(()=>wt.CORE_WITHOUT_LANGUAGE_IMPORTS);if(!this.options.coreLibraryLoader&&this.options.languages)return ct(()=>wt.LANGUAGE_WITHOUT_CORE_IMPORTS);if(this.options.fullLibraryLoader)return this.loadFullLibrary();if(this.options.coreLibraryLoader&&this.options.languages&&Object.keys(this.options.languages).length)return this.loadCoreLibrary().pipe(Ai(t=>this._loadLanguages(t)))}return ct(()=>wt.NO_FULL_AND_NO_CORE_IMPORTS)}_loadLanguages(t){let i=Object.entries(this.options.languages).map(([n,d])=>gn(d()).pipe(Di(c=>t.registerLanguage(n,c))));return Wt(i).pipe(tt(()=>t))}loadCoreLibrary(){return gn(this.options.coreLibraryLoader())}loadFullLibrary(){return gn(this.options.fullLibraryLoader())}loadLineNumbers(){return Et(this.options.lineNumbersLoader())}setTheme(t){this.isPlatformBrowser&&(this._themeLinkElement?this._themeLinkElement.href=t:this.loadTheme(t))}loadTheme(t){this._themeLinkElement=this.document.createElement("link"),this._themeLinkElement.href=t,this._themeLinkElement.type="text/css",this._themeLinkElement.rel="stylesheet",this._themeLinkElement.media="screen,print",this.document.head.appendChild(this._themeLinkElement)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),gn=e=>Et(e).pipe(It(r=>!!r?.default),tt(r=>r.default)),_d=(()=>{class e{constructor(){this.loader=I(gd),this.options=I(vn,{optional:!0}),this.hljsSignal=w(null),this.hljs=V(()=>this.hljsSignal()),this.loader.ready.then(t=>{this.hljsSignal.set(t),this.options?.highlightOptions&&t.configure(this.options.highlightOptions)})}highlight(t,i){return ne(this,null,function*(){return(yield this.loader.ready).highlight(t,i)})}highlightAuto(t,i){return ne(this,null,function*(){return(yield this.loader.ready).highlightAuto(t,i)})}highlightElement(t){return ne(this,null,function*(){(yield this.loader.ready).highlightElement(t)})}highlightAll(){return ne(this,null,function*(){(yield this.loader.ready).highlightAll()})}configure(t){return ne(this,null,function*(){(yield this.loader.ready).configure(t)})}registerLanguage(t,i){return ne(this,null,function*(){(yield this.loader.ready).registerLanguage(t,i)})}unregisterLanguage(t){return ne(this,null,function*(){(yield this.loader.ready).unregisterLanguage(t)})}registerAliases(n,d){return ne(this,arguments,function*(t,{languageName:i}){(yield this.loader.ready).registerAliases(t,{languageName:i})})}listLanguages(){return ne(this,null,function*(){return(yield this.loader.ready).listLanguages()})}getLanguage(t){return ne(this,null,function*(){return(yield this.loader.ready).getLanguage(t)})}safeMode(){return ne(this,null,function*(){(yield this.loader.ready).safeMode()})}debugMode(){return ne(this,null,function*(){(yield this.loader.ready).debugMode()})}lineNumbersBlock(t,i){return ne(this,null,function*(){let n=yield this.loader.ready;n.lineNumbersBlock&&n.lineNumbersBlock(t,i)})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),_n;function vd(){if(!_n)try{_n=window?.trustedTypes?.createPolicy("ngx-highlightjs",{createHTML:e=>e})}catch{}return _n}function Cd(e){return vd()?.createHTML(e)||e}var po=(()=>{class e{constructor(){this._hljs=I(_d),this._nativeElement=I(ye).nativeElement,this._sanitizer=I(Hn),this._platform=I(Fi),Hi(this._platform)&&(Fe(()=>{let t=this.code();this.setTextContent(t||""),t&&this.highlightElement(t)}),Fe(()=>{let t=this.highlightResult();this.setInnerHTML(t?.value),this.highlighted.emit(t)}))}setTextContent(t){requestAnimationFrame(()=>this._nativeElement.textContent=t)}setInnerHTML(t){requestAnimationFrame(()=>this._nativeElement.innerHTML=Cd(this._sanitizer.sanitize(In.HTML,t)||""))}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275dir=X({type:e,standalone:!1})}}return e})(),uo=(()=>{class e extends po{constructor(){super(...arguments),this.code=h(null,{alias:"highlight"}),this.highlightResult=w(null),this.highlighted=new pt}highlightElement(t){return ne(this,null,function*(){let i=yield this._hljs.highlight(t,{language:this.language,ignoreIllegals:this.ignoreIllegals});this.highlightResult.set(i)})}static{this.\u0275fac=(()=>{let t;return function(n){return(t||(t=Ee(e)))(n||e)}})()}static{this.\u0275dir=X({type:e,selectors:[["","highlight",""]],hostVars:2,hostBindings:function(i,n){i&2&&se("hljs",!0)},inputs:{code:[1,"highlight","code"],language:"language",ignoreIllegals:[2,"ignoreIllegals","ignoreIllegals",Gt]},outputs:{highlighted:"highlighted"},features:[Oe([{provide:po,useExisting:e}]),Mn,ae]})}}return e})();var At=(()=>{class e{constructor(){this.language=h.required(),this.code=h(""),this.styled=h(!1,{transform:t=>be(t)}),this.noScroll=h(!1,{transform:t=>be(t)}),this.langClass=V(()=>`lang-${this.language()}`)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-code"]],inputs:{language:[1,"language"],code:[1,"code"],styled:[1,"styled"],noScroll:[1,"noScroll"]},decls:3,vars:8,consts:[[3,"highlight","language"]],template:function(i,n){i&1&&(o(0,"pre"),b(1,"code",0),s(2,`
`),a()),i&2&&(se("styled",n.styled())("no-scroll",n.noScroll()),l(),G(n.langClass()),u("highlight",n.code())("language",n.language()))},dependencies:[uo],styles:["pre[_ngcontent-%COMP%]{padding:1.25rem;max-width:100%;overflow:auto}.styled[_ngcontent-%COMP%]{border-radius:.5rem;border:1px solid var(--ard-detail-ultralight);margin:1.25rem 0}.no-scroll[_ngcontent-%COMP%]{max-width:max-content;overflow:initial}"]})}}return e})();var ho=dt(Ni());var yd=["idLink","","id",""],bd=["*"],mo=(()=>{class e{constructor(){this.router=I(Xt)}onClick(t){let i=t.target.parentElement;if(i){for(;!i.id;)if(i=i.parentElement,!i)return;Tt("#"+i.id,{offset:96,noHighlight:!0}),this.router.navigate([],{fragment:i.id})}}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["","idLink","","id",""],["h1","id",""],["h2","id",""],["h3","id",""],["h4","id",""],["h5","id",""],["h6","id",""]],attrs:yd,ngContentSelectors:bd,decls:4,vars:0,consts:[["color","none",3,"click"]],template:function(i,n){i&1&&(B(),o(0,"ard-icon-button",0),_("click",function(c){return n.onClick(c)}),o(1,"ard-icon"),s(2,"tag"),a()(),R(3))},dependencies:[Ye,Ge,Ve,ke],styles:["[_nghost-%COMP%]{position:relative}ard-icon-button[_ngcontent-%COMP%]{opacity:0;appearance:none;position:absolute;right:100%;top:50%;transform:translateY(-50%);font-size:.625em}ard-icon-button[_ngcontent-%COMP%]   ard-icon[_ngcontent-%COMP%]{color:var(--ard-text3)}[_nghost-%COMP%]:hover   ard-icon-button[_ngcontent-%COMP%]{opacity:1;appearance:auto}"]})}}return e})();var xd=["appAutoId",""],Sd=["*"],Ue=(()=>{class e{ngAfterViewInit(){this._wasViewInit=!0,this._setElementId()}constructor(){this.elementRef=I(ye),this.autoIdActive=h(!1,{transform:t=>be(t),alias:"appAutoId"}),this.forcedId=h(null),this.idPrefix=h("",{transform:this._toKebab}),this.idText=w(""),this._wasViewInit=!1,Fe(()=>{this._setElementId()})}_toKebab(t){return(0,ho.kebab)(t.replace(/[^\w\- ]/gi,""))}_setElementId(){if(this._wasViewInit)return;let i=this.elementRef.nativeElement.innerText.replace(/tag\x0A/,"");i&&this.idText.set(this._toKebab(i))}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["","appAutoId",""]],inputs:{autoIdActive:[1,"appAutoId","autoIdActive"],forcedId:[1,"forcedId"],idPrefix:[1,"idPrefix"]},attrs:xd,ngContentSelectors:Sd,decls:2,vars:1,consts:[["idLink","",3,"id"]],template:function(i,n){if(i&1&&(B(),o(0,"div",0),R(1),a()),i&2){let d;u("id",(d=n.forcedId())!==null&&d!==void 0?d:n.idText())}},dependencies:[mo],encapsulation:2})}}return e})();var wd=["*"],Le=(()=>{class e{constructor(){this.htmlId=h(null),this.idPrefix=h("")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-h1"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:wd,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(B(),o(0,"h1",0),R(1),a()),i&2&&u("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return e})();var Ad=["*"],Xe=(()=>{class e{constructor(){this.htmlId=h(null),this.idPrefix=h("")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-h2"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:Ad,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(B(),o(0,"h2",0),R(1),a()),i&2&&u("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return e})();var Dd=["*"],Ze=(()=>{class e{constructor(){this.htmlId=h(null),this.idPrefix=h("")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-h3"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:Dd,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(B(),o(0,"h3",0),R(1),a()),i&2&&u("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return e})();var Ed=["*"],Ci=(()=>{class e{constructor(){this.htmlId=h(null),this.idPrefix=h("")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-h4"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:Ed,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(B(),o(0,"h4",0),R(1),a()),i&2&&u("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return e})();var Fd=["*"],yi=(()=>{class e{constructor(){this.htmlId=h(null),this.idPrefix=h("")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-h5"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:Fd,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(B(),o(0,"h5",0),R(1),a()),i&2&&u("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return e})();var Pd=["*"],bi=(()=>{class e{constructor(){this.htmlId=h(null),this.idPrefix=h("")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-h6"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:Pd,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,n){i&1&&(B(),o(0,"h6",0),R(1),a()),i&2&&u("appAutoId",n.htmlId()!=null)("forcedId",n.htmlId())("idPrefix",n.idPrefix())},encapsulation:2})}}return e})();var Je=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=ce({type:e})}static{this.\u0275inj=de({imports:[W,Ue]})}}return e})();rt(Le,[Ue],[]);rt(Xe,[Ue],[]);rt(Ze,[Ue],[]);rt(Ci,[Ue],[]);rt(yi,[Ue],[]);rt(bi,[Ue],[]);var lt=(e,r)=>({$implicit:e,prefix:r}),bn=e=>({$implicit:e}),Vd=(e,r)=>({$implicit:e,headingType:"h5",prefix:r}),Ld=(e,r)=>({$implicit:e,isTypeParams:!0,headingType:"h4",prefix:r}),Rd=(e,r,t)=>({$implicit:e,headingType:r,prefix:t}),Bd=(e,r,t)=>({$implicit:e,isTypeParams:!0,headingType:r,prefix:t}),Od=(e,r)=>({$implicit:e,isTypeParams:!0,headingType:"h5",prefix:r}),fo=(e,r)=>({$implicit:e,headingType:"h6",prefix:r});function Ud(e,r){if(e&1&&b(0,"p",7),e&2){let t=m().$implicit;u("innerHTML",t.description,q)}}function Hd(e,r){if(e&1){let t=U();o(0,"a",8),_("click",function(){D(t);let n=m().$implicit,d=m(2);return E(d.scrollTo("#"+n.exports))}),o(1,"code"),s(2),a()()}if(e&2){let t=m().$implicit;l(2),f(t.exports)}}function jd(e,r){e&1&&s(0),e&2&&f(", ")}function Nd(e,r){if(e&1){let t=U();o(0,"a",8),_("click",function(){let n=D(t).$implicit,d=m(4);return E(d.scrollTo("#"+n))}),o(1,"code"),s(2),a()(),y(3,jd,1,1)}if(e&2){let t=r.$implicit,i=r.$index,n=m(2).$implicit;l(2),f(t),l(),C(i!==n.exports.length-1?3:-1)}}function $d(e,r){if(e&1&&P(0,Nd,4,2,null,null,O),e&2){let t=m().$implicit;k(t.exports)}}function Kd(e,r){if(e&1&&(o(0,"div",6)(1,"app-h3")(2,"code"),s(3),a()(),y(4,Ud,1,1,"p",7),o(5,"p"),s(6," Exports: "),y(7,Hd,3,1,"a")(8,$d,2,0),a()()),e&2){let t=r.$implicit,i=m(2);l(3),f(t.name),l(),C(t.description?4:-1),l(3),C(i.isString(t.exports)?7:8)}}function Wd(e,r){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Modules"),a(),P(3,Kd,9,3,"div",6,O),a()),e&2){let t=m();l(3),k(t.data.modules)}}function qd(e,r){if(e&1&&b(0,"p",7),e&2){let t=m().$implicit;u("innerHTML",t.description,q)}}function zd(e,r){}function Qd(e,r){if(e&1&&y(0,zd,0,0,"ng-template",9),e&2){let t=m().$implicit;m(2);let i=L(14);u("ngTemplateOutlet",i)("ngTemplateOutletContext",_e(2,lt,t.inputs,t.name))}}function Gd(e,r){}function Yd(e,r){if(e&1&&y(0,Gd,0,0,"ng-template",9),e&2){let t=m().$implicit;m(2);let i=L(16);u("ngTemplateOutlet",i)("ngTemplateOutletContext",_e(2,lt,t.outputs,t.name))}}function Xd(e,r){e&1&&(o(0,"i"),s(1,"default"),a())}function Zd(e,r){if(e&1&&(o(0,"code"),s(1),a()),e&2){let t=m().$implicit;l(),f(t.selector)}}function Jd(e,r){if(e&1&&(o(0,"tr")(1,"td"),y(2,Xd,2,0,"i")(3,Zd,2,1,"code"),a(),o(4,"td"),b(5,"p",7),a()()),e&2){let t=r.$implicit;l(2),C(t.selector===null?2:3),l(3),u("innerHTML",t.description,q)}}function ec(e,r){if(e&1&&(o(0,"app-h4",10),s(1,"Content Children"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),s(6,"Selector"),a(),o(7,"th"),s(8,"Description"),a()()(),o(9,"tbody"),P(10,Jd,6,2,"tr",null,O),a()()),e&2){let t=m().$implicit;u("idPrefix",t.name),l(10),k(t.contentChildren)}}function tc(e,r){if(e&1){let t=U();o(0,"div",6)(1,"app-h3")(2,"code"),s(3),a()(),y(4,qd,1,1,"p",7),o(5,"p"),s(6," Selector: "),o(7,"code"),s(8),a()(),o(9,"p"),s(10," Exported from: "),o(11,"a",8),_("click",function(){let n=D(t).$implicit,d=m(2);return E(d.scrollTo("#"+n.exportedFrom))}),o(12,"code"),s(13),a()()(),y(14,Qd,1,5,null,9)(15,Yd,1,5,null,9)(16,ec,12,1),a()}if(e&2){let t=r.$implicit;l(3),f(t.name),l(),C(t.description?4:-1),l(4),f(t.selector),l(5),f(t.exportedFrom),l(),C(t.inputs?14:-1),l(),C(t.outputs?15:-1),l(),C(t.contentChildren?16:-1)}}function ic(e,r){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Components"),a(),P(3,tc,17,7,"div",6,O),a()),e&2){let t=m();l(3),k(t.data.components)}}function nc(e,r){if(e&1&&b(0,"p",7),e&2){let t=m().$implicit;u("innerHTML",t.description,q)}}function rc(e,r){}function oc(e,r){if(e&1&&y(0,rc,0,0,"ng-template",9),e&2){let t=m().$implicit;m(2);let i=L(14);u("ngTemplateOutlet",i)("ngTemplateOutletContext",_e(2,lt,t.inputs,t.name))}}function ac(e,r){}function sc(e,r){if(e&1&&y(0,ac,0,0,"ng-template",9),e&2){let t=m().$implicit;m(2);let i=L(16);u("ngTemplateOutlet",i)("ngTemplateOutletContext",_e(2,lt,t.outputs,t.name))}}function lc(e,r){if(e&1){let t=U();o(0,"div",6)(1,"app-h3")(2,"code"),s(3),a()(),y(4,nc,1,1,"p",7),o(5,"p"),s(6," Selector: "),o(7,"code"),s(8),a()(),o(9,"p"),s(10," Exported from: "),o(11,"a",8),_("click",function(){let n=D(t).$implicit,d=m(2);return E(d.scrollTo("#"+n.exportedFrom))}),o(12,"code"),s(13),a()()(),y(14,oc,1,5,null,9)(15,sc,1,5,null,9),a()}if(e&2){let t=r.$implicit;l(3),f(t.name),l(),C(t.description?4:-1),l(4),f(t.selector),l(5),f(t.exportedFrom),l(),C(t.inputs?14:-1),l(),C(t.outputs?15:-1)}}function dc(e,r){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Directives"),a(),P(3,lc,16,6,"div",6,O),a()),e&2){let t=m();l(3),k(t.data.directives)}}function cc(e,r){}function pc(e,r){if(e&1&&y(0,cc,0,0,"ng-template",9),e&2){let t=m().$implicit;m(2);let i=L(18);u("ngTemplateOutlet",i)("ngTemplateOutletContext",_e(2,lt,t.params,t.name))}}function uc(e,r){if(e&1){let t=U();o(0,"div",6)(1,"app-h3")(2,"code"),s(3),a()(),b(4,"p",7),o(5,"p"),s(6," Selector: "),o(7,"code"),s(8),a()(),o(9,"p"),s(10," Exported from: "),o(11,"a",8),_("click",function(){let n=D(t).$implicit,d=m(2);return E(d.scrollTo("#"+n.exportedFrom))}),o(12,"code"),s(13),a()()(),y(14,pc,1,5,null,9),a()}if(e&2){let t=r.$implicit;l(3),f(t.name),l(),u("innerHTML",t.description,q),l(4),f(t.selector),l(5),f(t.exportedFrom),l(),C(t.params?14:-1)}}function mc(e,r){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Pipes"),a(),P(3,uc,15,5,"div",6,O),a()),e&2){let t=m();l(3),k(t.data.pipes)}}function hc(e,r){}function fc(e,r){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Classes"),a(),y(3,hc,0,0,"ng-template",9),a()),e&2){let t=m(),i=L(24);l(3),u("ngTemplateOutlet",i)("ngTemplateOutletContext",Ie(2,bn,t.data.classes))}}function gc(e,r){}function _c(e,r){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Services"),a(),y(3,gc,0,0,"ng-template",9),a()),e&2){let t=m(),i=L(24);l(3),u("ngTemplateOutlet",i)("ngTemplateOutletContext",Ie(2,bn,t.data.services))}}function vc(e,r){}function Cc(e,r){if(e&1&&(o(0,"app-h4",10),s(1),a(),y(2,vc,0,0,"ng-template",9)),e&2){let t=r.$implicit,i=r.$index,n=m(2).$implicit;m(2);let d=L(22);u("idPrefix",n.name),l(),S("Overload ",i+1,""),l(),u("ngTemplateOutlet",d)("ngTemplateOutletContext",_e(4,Vd,t,n.name+" overload "+(i+1)))}}function yc(e,r){if(e&1&&P(0,Cc,3,7,null,null,O),e&2){let t=m().$implicit;k(t.overloads)}}function bc(e,r){}function xc(e,r){if(e&1&&y(0,bc,0,0,"ng-template",9),e&2){let t=m().$implicit;m(2);let i=L(22);u("ngTemplateOutlet",i)("ngTemplateOutletContext",_e(2,lt,t,t.name))}}function Sc(e,r){if(e&1&&(o(0,"div",6)(1,"app-h3")(2,"code"),s(3),a()(),y(4,yc,2,0)(5,xc,1,5,null,9),a()),e&2){let t=r.$implicit,i=m(2);l(3),f(t.name),l(),C(i.isOverloadedFunction(t)?4:5)}}function Tc(e,r){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Functions"),a(),P(3,Sc,6,2,"div",6,O),a()),e&2){let t=m();l(3),k(t.data.functions)}}function wc(e,r){}function Ac(e,r){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Interfaces"),a(),y(3,wc,0,0,"ng-template",9),a()),e&2){let t=m(),i=L(24);l(3),u("ngTemplateOutlet",i)("ngTemplateOutletContext",Ie(2,bn,t.data.interfaces))}}function Dc(e,r){}function Ec(e,r){if(e&1&&y(0,Dc,0,0,"ng-template",9),e&2){let t=m().$implicit;m(2);let i=L(18);u("ngTemplateOutlet",i)("ngTemplateOutletContext",_e(2,Ld,t.typeParams,t.name))}}function Ic(e,r){if(e&1&&(o(0,"div",6)(1,"app-h3")(2,"code"),s(3),a()(),b(4,"p",7)(5,"app-code",11),y(6,Ec,1,5,null,9),a()),e&2){let t=r.$implicit;l(3),f(t.name),l(),u("innerHTML",t.description,q),l(),u("code",t.definition),l(),C(t.typeParams!=null&&t.typeParams.length?6:-1)}}function Fc(e,r){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Types"),a(),P(3,Ic,7,4,"div",6,O),a()),e&2){let t=m();l(3),k(t.data.types)}}function Mc(e,r){if(e&1&&(o(0,"div",6)(1,"app-h3")(2,"code"),s(3),a()(),b(4,"p",7)(5,"app-code",11),a()),e&2){let t=r.$implicit;l(3),f(t.name),l(),u("innerHTML",t.description,q),l(),u("code",t.definition)}}function Pc(e,r){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Enums"),a(),P(3,Mc,6,3,"div",6,O),a()),e&2){let t=m();l(3),k(t.data.enums)}}function kc(e,r){e&1&&s(0),e&2&&f(" All properties are optional, and missing properties will be set to default values.")}function Vc(e,r){if(e&1){let t=U();o(0,"div",6)(1,"app-h3")(2,"code"),s(3),a()(),b(4,"p",7),o(5,"p"),s(6," Requires a value of type "),o(7,"a",8),_("click",function(){let n=D(t).$implicit,d=m(2);return E(d.scrollTo("#"+n.type))}),o(8,"code"),s(9),a()(),s(10,"."),y(11,kc,1,1),a()()}if(e&2){let t=r.$implicit;l(3),f(t.name),l(),u("innerHTML",t.description,q),l(5),f(t.type),l(2),C(t.allOptional?11:-1)}}function Lc(e,r){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Injection Tokens"),a(),P(3,Vc,12,4,"div",6,O),a()),e&2){let t=m();l(3),k(t.data.injectionTokens)}}function Rc(e,r){e&1&&(o(0,"ard-icon",12),s(1,"delete"),a())}function Bc(e,r){e&1&&s(0," Required. ")}function Oc(e,r){if(e&1&&(s(0," Optional. Defaults to "),b(1,"code",7),s(2,". ")),e&2){let t=m().$implicit;l(),u("innerHTML",t.default,q)}}function Uc(e,r){if(e&1&&(o(0,"tr")(1,"td"),y(2,Rc,2,0,"ard-icon",12),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),b(9,"p",7),o(10,"p"),y(11,Bc,1,0)(12,Oc,3,1),a()()()),e&2){let t=r.$implicit;l(2),C(t.deprecated?2:-1),l(2),f(t.name),l(3),f(t.type),l(2),u("innerHTML",t.description,q),l(2),C(t.required?11:t.required===!1?12:-1)}}function Hc(e,r){if(e&1&&(o(0,"app-h4",10),s(1,"Inputs"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),s(6,"Name"),a(),o(7,"th"),s(8,"Type"),a(),o(9,"th"),s(10,"Description"),a()()(),o(11,"tbody"),P(12,Uc,13,5,"tr",null,O),a()()),e&2){let t=r.$implicit,i=r.prefix;u("idPrefix",i),l(12),k(t)}}function jc(e,r){e&1&&(o(0,"ard-icon",13),s(1,"delete"),a())}function Nc(e,r){if(e&1&&(o(0,"tr")(1,"td"),y(2,jc,2,0,"ard-icon",13),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),b(9,"p",7),a()()),e&2){let t=r.$implicit;l(2),C(t.deprecated?2:-1),l(2),f(t.name),l(3),f(t.type),l(2),u("innerHTML",t.description,q)}}function $c(e,r){if(e&1&&(o(0,"app-h4",10),s(1,"Outputs"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),s(6,"Name"),a(),o(7,"th"),s(8,"Emitted type"),a(),o(9,"th"),s(10,"Description"),a()()(),o(11,"tbody"),P(12,Nc,10,4,"tr",null,O),a()()),e&2){let t=r.$implicit,i=r.prefix;u("idPrefix",i),l(12),k(t)}}function Kc(e,r){if(e&1&&(o(0,"app-h6",10),s(1),a()),e&2){let t=m(),i=t.isTypeParams,n=t.prefix;u("idPrefix",n),l(),S("",i?"Type":""," Params")}}function Wc(e,r){if(e&1&&(o(0,"app-h5",10),s(1),a()),e&2){let t=m(),i=t.isTypeParams,n=t.prefix;u("idPrefix",n),l(),S("",i?"Type":""," Params")}}function qc(e,r){if(e&1&&(o(0,"app-h4",10),s(1),a()),e&2){let t=m(),i=t.isTypeParams,n=t.prefix;u("idPrefix",n),l(),S("",i?"Type":""," Params")}}function zc(e,r){e&1&&(o(0,"ard-icon",14),s(1,"delete"),a())}function Qc(e,r){e&1&&s(0," Required. ")}function Gc(e,r){e&1&&s(0," (merged with provided object) ")}function Yc(e,r){if(e&1&&(s(0," Optional. Defaults to "),b(1,"code",7),y(2,Gc,1,0),s(3,". ")),e&2){let t=m().$implicit;l(),u("innerHTML",t.default,q),l(),C(t.isMergedObject?2:-1)}}function Xc(e,r){if(e&1&&(o(0,"tr")(1,"td"),y(2,zc,2,0,"ard-icon",14),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),b(9,"p",7),o(10,"p"),y(11,Qc,1,0)(12,Yc,4,2),a()()()),e&2){let t=r.$implicit;l(2),C(t.deprecated?2:-1),l(2),f(t.name),l(3),f(t.type),l(2),u("innerHTML",t.description,q),l(2),C(t.required?11:t.required===!1?12:-1)}}function Zc(e,r){if(e&1&&(o(0,"table")(1,"thead")(2,"tr")(3,"th"),s(4,"Name"),a(),o(5,"th"),s(6),a(),o(7,"th"),s(8,"Description"),a()()(),o(9,"tbody"),P(10,Xc,13,5,"tr",null,O),a()()),e&2){let t=m(),i=t.$implicit,n=t.isTypeParams;l(6),f(n?"Extends":"Type"),l(4),k(i)}}function Jc(e,r){e&1&&(o(0,"p"),s(1,"No params."),a())}function ep(e,r){if(e&1&&y(0,Kc,2,2,"app-h6",10)(1,Wc,2,2,"app-h5",10)(2,qc,2,2,"app-h4",10)(3,Zc,12,1,"table")(4,Jc,2,0,"p"),e&2){let t=r.$implicit,i=r.headingType;C(i==="h6"?0:i==="h5"?1:2),l(3),C(t!=null&&t.length?3:4)}}function tp(e,r){e&1&&(o(0,"ard-icon",15),s(1,"delete"),a())}function ip(e,r){if(e&1&&(o(0,"tr")(1,"td"),y(2,tp,2,0,"ard-icon",15),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),b(9,"p",7),a()()),e&2){let t=r.$implicit;l(2),C(t.deprecated?2:-1),l(2),f(t.name),l(3),f(t.type),l(2),u("innerHTML",t.description,q)}}function np(e,r){if(e&1&&(o(0,"app-h4",10),s(1,"Properties"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),s(6,"Name"),a(),o(7,"th"),s(8,"Type"),a(),o(9,"th"),s(10,"Description"),a()()(),o(11,"tbody"),P(12,ip,10,4,"tr",null,O),a()()),e&2){let t=r.$implicit,i=r.prefix;u("idPrefix",i),l(12),k(t)}}function rp(e,r){}function op(e,r){if(e&1&&y(0,rp,0,0,"ng-template",9),e&2){let t=m(),i=t.$implicit,n=t.headingType,d=t.prefix;m();let c=L(18);u("ngTemplateOutlet",c)("ngTemplateOutletContext",Ri(2,Bd,i.typeParams,n,d))}}function ap(e,r){}function sp(e,r){if(e&1&&(o(0,"app-h6",10),s(1,"Return type"),a()),e&2){let t=m().prefix;u("idPrefix",t)}}function lp(e,r){if(e&1&&(o(0,"app-h5",10),s(1,"Return type"),a()),e&2){let t=m().prefix;u("idPrefix",t)}}function dp(e,r){if(e&1&&(o(0,"app-h4",10),s(1,"Return type"),a()),e&2){let t=m().prefix;u("idPrefix",t)}}function cp(e,r){if(e&1&&(b(0,"p",7),y(1,op,1,6,null,9)(2,ap,0,0,"ng-template",9)(3,sp,2,1,"app-h6",10)(4,lp,2,1,"app-h5",10)(5,dp,2,1,"app-h4",10),o(6,"p"),s(7," Return type: "),o(8,"code"),s(9),a()()),e&2){let t=r.$implicit,i=r.headingType,n=r.prefix;m();let d=L(18);u("innerHTML",t.description,q),l(),C(t.typeParams!=null&&t.typeParams.length?1:-1),l(),u("ngTemplateOutlet",d)("ngTemplateOutletContext",Ri(6,Rd,t.params,i,n)),l(),C(i==="h6"?3:i==="h5"?4:5),l(6),f(t.returnType)}}function pp(e,r){if(e&1&&(o(0,"p"),s(1," Provided in: "),o(2,"code"),s(3),a()()),e&2){let t=m().$implicit;l(3),S("",t.providedIn," ")}}function up(e,r){if(e&1&&(o(0,"p"),s(1," Extends: "),o(2,"code"),s(3),a()()),e&2){let t=m().$implicit;l(3),S("",t.extends," ")}}function mp(e,r){}function hp(e,r){if(e&1&&y(0,mp,0,0,"ng-template",9),e&2){let t=m().$implicit;m(2);let i=L(18);u("ngTemplateOutlet",i)("ngTemplateOutletContext",_e(2,Od,t.typeParams,t.name))}}function fp(e,r){}function gp(e,r){if(e&1&&y(0,fp,0,0,"ng-template",9),e&2){let t=m().$implicit;m(2);let i=L(20);u("ngTemplateOutlet",i)("ngTemplateOutletContext",_e(2,lt,t.properties,t.name))}}function _p(e,r){}function vp(e,r){if(e&1&&(o(0,"app-h5",10)(1,"code"),s(2),a(),s(3),a(),y(4,_p,0,0,"ng-template",9)),e&2){let t=r.$implicit,i=r.$index,n=m(2).$implicit,d=m(2).$implicit;m(2);let c=L(22);u("idPrefix",d.name+" methods"),l(2),f(n.name),l(),S(" (overload ",i+1,") "),l(),u("ngTemplateOutlet",c)("ngTemplateOutletContext",_e(5,fo,t,d.name+" methods "+n.name+" overload "+(i+1)))}}function Cp(e,r){if(e&1&&P(0,vp,5,8,null,null,O),e&2){let t=m().$implicit;k(t.overloads)}}function yp(e,r){}function bp(e,r){if(e&1&&(o(0,"app-h5",10)(1,"code"),s(2),a()(),y(3,yp,0,0,"ng-template",9)),e&2){let t=m().$implicit,i=m(2).$implicit;m(2);let n=L(22);u("idPrefix",i.name+" methods"),l(2),f(t.name),l(),u("ngTemplateOutlet",n)("ngTemplateOutletContext",_e(4,fo,t,i.name+" methods "+t.name))}}function xp(e,r){if(e&1&&y(0,Cp,2,0)(1,bp,4,7),e&2){let t=r.$implicit,i=m(4);C(i.isOverloadedFunction(t)?0:1)}}function Sp(e,r){if(e&1&&(o(0,"app-h4",10),s(1,"Methods"),a(),P(2,xp,2,1,null,null,O)),e&2){let t=m().$implicit;u("idPrefix",t.name),l(2),k(t.methods)}}function Tp(e,r){if(e&1&&(o(0,"div",6)(1,"app-h3")(2,"code"),s(3),a()(),y(4,pp,4,1,"p")(5,up,4,1,"p"),b(6,"p",7),y(7,hp,1,5,null,9)(8,gp,1,5,null,9)(9,Sp,4,1),a()),e&2){let t=r.$implicit;l(3),f(t.name),l(),C(t.providedIn?4:-1),l(),C(t.extends?5:-1),l(),u("innerHTML",t.description,q),l(),C(t.typeParams!=null&&t.typeParams.length?7:-1),l(),C(t.properties!=null&&t.properties.length?8:-1),l(),C(t.methods!=null&&t.methods.length?9:-1)}}function wp(e,r){if(e&1&&P(0,Tp,10,7,"div",6,O),e&2){let t=r.$implicit;k(t)}}var go=(()=>{class e{constructor(){this._route=I(Yt),this.data=this._route.snapshot.data}scrollTo(t){Tt(t,{offset:"20%"})}isString(t){return!Array.isArray(t)}isOverloadedFunction(t){return"overloads"in t}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-api-page"]],decls:25,vars:12,consts:[["inputsTable",""],["outputsTable",""],["paramsTable",""],["propertiesTable",""],["functionTable",""],["classOrInterface",""],[1,"item-container"],[3,"innerHTML"],[3,"click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"idPrefix"],["language","typescript","styled","",3,"code"],["title","This input is deprecated."],["title","This output is deprecated."],["title","This param is deprecated."],["title","This property is deprecated."]],template:function(i,n){i&1&&(o(0,"app-h1"),s(1),a(),y(2,Wd,5,0,"section")(3,ic,5,0,"section")(4,dc,5,0,"section")(5,mc,5,0,"section")(6,fc,4,4,"section")(7,_c,4,4,"section")(8,Tc,5,0,"section")(9,Ac,4,4,"section")(10,Fc,5,0,"section")(11,Pc,5,0,"section")(12,Lc,5,0,"section")(13,Hc,14,1,"ng-template",null,0,Ae)(15,$c,14,1,"ng-template",null,1,Ae)(17,ep,5,2,"ng-template",null,2,Ae)(19,np,14,1,"ng-template",null,3,Ae)(21,cp,10,10,"ng-template",null,4,Ae)(23,wp,2,0,"ng-template",null,5,Ae)),i&2&&(l(),S("API reference for ",n.data.name," \u2014 Ardium UI"),l(),C(n.data.modules?2:-1),l(),C(n.data.components?3:-1),l(),C(n.data.directives?4:-1),l(),C(n.data.pipes?5:-1),l(),C(n.data.classes?6:-1),l(),C(n.data.services?7:-1),l(),C(n.data.functions?8:-1),l(),C(n.data.interfaces?9:-1),l(),C(n.data.types?10:-1),l(),C(n.data.enums?11:-1),l(),C(n.data.injectionTokens?12:-1))},dependencies:[Ve,ke,W,at,Me,At,Je,Le,Xe,Ze,Ci,yi,bi],styles:[`app-api-page{font-size:.9375rem}app-api-page h1{padding-bottom:1rem}app-api-page h2{font-weight:300;font-size:1.5rem;width:100%;border-bottom:1px solid var(--ard-detail-ultralight);padding-bottom:.5rem;margin-bottom:1rem}app-api-page h3{font-weight:500;font-size:1.25rem}app-api-page td{position:relative;min-width:100px}app-api-page table ard-icon{position:absolute;right:100%;color:rgb(var(--ard-danger-700))}
`],encapsulation:2})}}return e})();var xi=(()=>{class e{constructor(){this.contentToCopy=h.required()}executeCopy(){navigator.clipboard.writeText(this.contentToCopy())}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-copy-button"]],inputs:{contentToCopy:[1,"contentToCopy"]},decls:3,vars:0,consts:[[1,"copy-button",3,"click"]],template:function(i,n){i&1&&(o(0,"ard-icon-button",0),_("click",function(){return n.executeCopy()}),o(1,"ard-icon"),s(2,"content-copy"),a()())},dependencies:[Ye,Ge,Ve,ke],encapsulation:2})}}return e})();var Ap=["containerLeft"],Dp=["containerRight"],Ep=[[["","side","left"]],[["","side","right"]]],Ip=["[side='left']","[side='right']"];function Fp(e,r){if(e&1&&b(0,"app-copy-button",8),e&2){let t=m();u("contentToCopy",t.contentToCopyLeft())}}function Mp(e,r){}function Pp(e,r){if(e&1&&y(0,Mp,0,0,"ng-template",9),e&2){m();let t=L(22);u("ngTemplateOutlet",t)}}function kp(e,r){if(e&1&&b(0,"app-copy-button",8),e&2){let t=m();u("contentToCopy",t.contentToCopyRight())}}function Vp(e,r){}function Lp(e,r){if(e&1&&y(0,Vp,0,0,"ng-template",9),e&2){m();let t=L(22);u("ngTemplateOutlet",t)}}function Rp(e,r){if(e&1){let t=U();o(0,"ard-icon-button",12),_("click",function(){D(t);let n=m(2);return E(n.scrollSync.set(!n.scrollSync()))}),b(1,"ard-icon",13),a()}if(e&2){let t=m(2);u("title",(t.scrollSync(),"Turn off scroll sync")),l(),u("icon",t.scrollSync()?"sync":"sync_disabled")}}function Bp(e,r){if(e&1){let t=U();o(0,"ard-icon-button",12),_("click",function(){D(t);let n=m(2);return E(n.verticalLayout.set(!n.verticalLayout()))}),b(1,"ard-icon",13),a()}if(e&2){let t=m(2);u("title",t.verticalLayout()?"Current view: vertical":"Current view: side-by-side"),l(),u("icon",t.verticalLayout()?"splitscreen":"view_column_2")}}function Op(e,r){if(e&1&&y(0,Rp,2,2,"ard-icon-button",11)(1,Bp,2,2,"ard-icon-button",11),e&2){let t=m();C(t.allowScrollSync()?0:-1),l(),C(t.allowLayoutChange()?1:-1)}}var Nt={Off:"off",Left:"left",Right:"right",Both:"both"},_o=(()=>{class e{constructor(){this.containerLeft=me("containerLeft"),this.containerRight=me("containerRight"),this.textLeft=h.required(),this.textRight=h.required(),this.contentToCopyLeft=h(""),this.contentToCopyRight=h(""),this.allowScrollSync=h(!1,{transform:t=>be(t)}),this.allowLayoutChange=h(!1,{transform:t=>be(t)}),this.allowCopy=h(Nt.Both),this.allowCopyLeft=V(()=>this.allowCopy()===Nt.Left||this.allowCopy()===Nt.Both),this.allowCopyRight=V(()=>this.allowCopy()===Nt.Right||this.allowCopy()===Nt.Both),this.scrollSync=nt(!1),this.verticalLayout=nt(!1)}onContainerLeftScroll(){if(this.scrollSync())return;let[t,i]=[this.containerLeft(),this.containerRight()];!t||!i||i.nativeElement.scrollTo(t.nativeElement.scrollLeft,0)}onContainerRightScroll(){if(this.scrollSync())return;let[t,i]=[this.containerLeft(),this.containerRight()];!t||!i||t.nativeElement.scrollTo(i.nativeElement.scrollLeft,0)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-two-pane-container"]],viewQuery:function(i,n){i&1&&(he(n.containerLeft,Ap,5),he(n.containerRight,Dp,5)),i&2&&fe(2)},inputs:{textLeft:[1,"textLeft"],textRight:[1,"textRight"],contentToCopyLeft:[1,"contentToCopyLeft"],contentToCopyRight:[1,"contentToCopyRight"],allowScrollSync:[1,"allowScrollSync"],allowLayoutChange:[1,"allowLayoutChange"],allowCopy:[1,"allowCopy"],scrollSync:[1,"scrollSync"],verticalLayout:[1,"verticalLayout"]},outputs:{scrollSync:"scrollSyncChange",verticalLayout:"verticalLayoutChange"},ngContentSelectors:Ip,decls:23,vars:8,consts:[["containerLeft",""],["containerRight",""],["buttons",""],[1,"two-pane-container"],[1,"content-container"],[1,"top-bar"],[1,"heading"],[1,"buttons"],[3,"contentToCopy"],[3,"ngTemplateOutlet"],[1,"content",3,"scroll"],[3,"title"],[3,"click","title"],[3,"icon"]],template:function(i,n){if(i&1){let d=U();B(Ep),o(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6),s(4),a(),o(5,"div",7),y(6,Fp,1,1,"app-copy-button",8)(7,Pp,1,1,null,9),a()(),o(8,"div",10,0),_("scroll",function(){return D(d),E(n.onContainerLeftScroll())}),R(10),a()(),o(11,"div",4)(12,"div",5)(13,"div",6),s(14),a(),o(15,"div",7),y(16,kp,1,1,"app-copy-button",8)(17,Lp,1,1,null,9),a()(),o(18,"div",10,1),_("scroll",function(){return D(d),E(n.onContainerRightScroll())}),R(20,1),a()()(),y(21,Op,2,2,"ng-template",null,2,Ae)}i&2&&(se("vertical",n.verticalLayout()),l(4),f(n.textLeft()),l(2),C(n.allowCopyLeft()?6:-1),l(),C(n.verticalLayout()?7:-1),l(7),f(n.textRight()),l(2),C(n.allowCopyRight()?16:-1),l(),C(n.verticalLayout()?-1:17))},dependencies:[W,at,xi,Ye,Ge,Ve,ke],styles:[".two-pane-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;border-radius:.5rem;border:1px solid var(--ard-detail-ultralight);margin:1.25rem 0;overflow:hidden}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{max-width:100%;overflow:hidden}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]:first-of-type{border-right:1px solid var(--ard-detail-ultralight);position:relative}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{padding:.5rem 1.25rem 0;font-weight:500}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;position:relative;top:.25rem;right:.25rem}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{max-width:100%;overflow:auto}.two-pane-container.vertical[_ngcontent-%COMP%]{grid-template-columns:1fr}.two-pane-container.vertical[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]:first-of-type{border-right:none;border-bottom:1px solid var(--ard-detail-ultralight)}"]})}}return e})();var Up=["*"],vo=(()=>{class e{constructor(){this.code=h.required(),this.codeLanguage=h.required()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-example-with-result"]],inputs:{code:[1,"code"],codeLanguage:[1,"codeLanguage"]},ngContentSelectors:Up,decls:4,vars:3,consts:[["textLeft","Code","textRight","Result","allowCopy","left",3,"verticalLayout"],["side","left","styled","false","noScroll","",3,"language","code"],["side","right"]],template:function(i,n){i&1&&(B(),o(0,"app-two-pane-container",0),b(1,"app-code",1),Vi(2,2),R(3),Li(),a()),i&2&&(u("verticalLayout",!0),l(),u("language",n.codeLanguage())("code",n.code()))},dependencies:[_o,At],encapsulation:2})}}return e})();var Co={FT:"Fatal",NF:"Non-Fatal",IS:"Impossible State",WA:"Warning"};var yo=(()=>{class e{constructor(){this.severity=h.required({alias:"code",transform:t=>{let i=t.slice(4,6);return Co[i]}})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-exception-severity"]],hostVars:2,hostBindings:function(i,n){i&2&&G("severity-"+n.severity().toLowerCase().replace(" ","-"))},inputs:{severity:[1,"code","severity"]},decls:1,vars:1,template:function(i,n){i&1&&s(0),i&2&&f(n.severity())},styles:["[_nghost-%COMP%]{padding:.125rem .25rem;border-radius:4px}.severity-fatal[_nghost-%COMP%]{background-color:rgb(var(--ard-danger-500));color:var(--ard-text-alt)}.severity-non-fatal[_nghost-%COMP%]{background-color:#ff7707;color:var(--ard-text-alt)}.severity-impossible-state[_nghost-%COMP%]{background-color:#7707ff;color:var(--ard-text-alt)}.severity-warning[_nghost-%COMP%]{background-color:rgb(var(--ard-warn-500));color:var(--ard-text-alt)}"]})}}return e})();var Hp=(e,r)=>r.name,jp=(e,r)=>r.code;function Np(e,r){if(e&1&&(o(0,"p"),s(1),a()),e&2){let t=m();l(),S("",t.data.name," doesn't raise any own exceptions.")}}function $p(e,r){if(e&1&&b(0,"p",2),e&2){let t=m().$implicit;u("innerHTML",t.description,q)}}function Kp(e,r){if(e&1&&b(0,"p",2),e&2){let t=r.$implicit;u("innerHTML",t,q)}}function Wp(e,r){if(e&1&&P(0,Kp,1,1,"p",2,O),e&2){let t=m().$implicit;k(t.description)}}function qp(e,r){if(e&1&&(o(0,"app-example-with-result",3)(1,"p",4),s(2),a()()),e&2){let t=r.$implicit;u("code",t.code)("codeLanguage",t.codeLanguage),l(2),f(t.result)}}function zp(e,r){if(e&1&&P(0,qp,3,3,"app-example-with-result",3,O),e&2){let t=m().$implicit;k(t.exampleResults)}}function Qp(e,r){if(e&1&&(o(0,"app-h3",0)(1,"code"),s(2),a()(),o(3,"p")(4,"strong"),s(5,"Severity: "),a(),b(6,"app-exception-severity",1),a(),b(7,"blockquote",2),y(8,$p,1,1,"p",2)(9,Wp,2,0)(10,zp,2,0)),e&2){let t=r.$implicit,i=m(3);u("htmlId",t.code),l(2),S(" ",t.code," "),l(4),u("code",t.code),l(),u("innerHTML",t.exceptionText,q),l(),C(i.isString(t.description)?8:9),l(2),C(t.exampleResults!=null&&t.exampleResults.length?10:-1)}}function Gp(e,r){if(e&1&&(o(0,"app-h2"),s(1),a(),P(2,Qp,11,6,null,null,jp)),e&2){let t=r.$implicit;l(),f(t.name),l(),k(t.exceptions)}}function Yp(e,r){if(e&1&&P(0,Gp,4,1,null,null,Hp),e&2){let t=m();k(t.data.exceptions)}}var bo=(()=>{class e{constructor(){this._route=I(Yt),this.data=this._route.snapshot.data}scrollTo(t){Tt(t,{offset:"20%"})}isString(t){return!Array.isArray(t)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-exceptions-page"]],decls:4,vars:2,consts:[[3,"htmlId"],[3,"code"],[3,"innerHTML"],[3,"code","codeLanguage"],[1,"example-with-result-result"]],template:function(i,n){i&1&&(o(0,"app-h1"),s(1),a(),y(2,Np,2,1,"p")(3,Yp,2,0)),i&2&&(l(),S("Exception list for ",n.data.name," \u2014 Ardium UI"),l(),C(n.data.exceptions!=null&&n.data.exceptions.length?3:2))},dependencies:[yo,vo,Je,Le,Xe,Ze],styles:[".example-with-result-result[_ngcontent-%COMP%]{padding:1.25rem;font-family:monospace}"]})}}return e})();function xn(e,r){let t=!r?.manualCleanup;t&&!r?.injector&&En(xn);let i=t?r?.injector?.get(Ii)??I(Ii):null,n=Xp(r?.equal),d;r?.requireSync?d=w({kind:0},{equal:n}):d=w({kind:1,value:r?.initialValue},{equal:n});let c=e.subscribe({next:v=>d.set({kind:1,value:v}),error:v=>{if(r?.rejectErrors)throw v;d.set({kind:2,error:v})}});if(r?.requireSync&&d().kind===0)throw new qt(601,!1);return i?.onDestroy(c.unsubscribe.bind(c)),V(()=>{let v=d();switch(v.kind){case 1:return v.value;case 2:throw v.error;case 0:throw new qt(601,!1)}},{equal:r?.equal})}function Xp(e=Object.is){return(r,t)=>r.kind===1&&t.kind===1&&e(r.value,t.value)}var xo=(()=>{class e{constructor(){this._router=I(Xt),this.currentRoute=xn(this._router.events.pipe(It(t=>t instanceof jn),tt(t=>t.url)))}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Zp(e,r){if(e&1&&(o(0,"a",3),s(1),a()),e&2){let t=r.$implicit,i=m();se("active",i.isActiveRoute(t)),u("routerLink","./"+t),l(),f(t)}}var To=(()=>{class e{constructor(){this.POSSIBLE_TABS=["overview","api","exceptions"],this._navService=I(xo)}isActiveRoute(t){return this._navService.currentRoute()?.endsWith(t)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-common"]],decls:5,vars:0,consts:[[1,"component-article"],[1,"page-tabber"],[3,"routerLink","active"],[3,"routerLink"]],template:function(i,n){i&1&&(o(0,"article",0)(1,"div",1),P(2,Zp,2,4,"a",2,O),a(),b(4,"router-outlet"),a()),i&2&&(l(2),k(n.POSSIBLE_TABS))},dependencies:[Me,Nn,mt],styles:[".page-tabber[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid var(--ard-detail-ultralight)}.page-tabber[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:10rem;height:3rem;display:grid;place-items:center;text-transform:uppercase;text-decoration:none;color:var(--ard-text2);font-size:.875rem;font-weight:500;background-color:transparent;transition:background-color .1s ease-in-out;border-bottom:2px solid transparent}.page-tabber[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .page-tabber[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible{background-color:rgba(var(--ard-overlay-rgb),5%)}.page-tabber[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{border-bottom-color:rgb(var(--ard-primary-500))}"]})}}return e})();var wo=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-under-construction"]],decls:12,vars:0,consts:[[1,"text"],[1,"oops"],[1,"long"],[1,"image"],["src","/ardium-ui-docs/assets/under-construction.svg","alt","Laptop marked as under construction with workers and a crane around it"]],template:function(i,n){i&1&&(o(0,"article")(1,"div",0)(2,"app-h1")(3,"span",1),s(4,"Oops!"),a(),b(5,"br"),o(6,"span",2),s(7,"Under construction"),a()(),o(8,"p"),s(9,"This documentation page is currently under construction. Come back soon!"),a()(),o(10,"div",3),b(11,"img",4),a()())},dependencies:[Je,Le],styles:['@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKcg72j00.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKew72j00.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKcw72j00.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKfA72j00.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKcQ72j00.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKfw72.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCjC3jvWyNL4U.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCjC3jtGyNL4U.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCjC3jvGyNL4U.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCjC3js2yNL4U.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCjC3jvmyNL4U.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCjC3jsGyN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}article[_ngcontent-%COMP%]{height:100%;display:grid;align-items:center;grid-template-columns:4fr 6fr;font-family:Ubuntu,sans-serif;max-width:70rem;box-sizing:content-box;margin:0 auto}.text[_ngcontent-%COMP%]{padding-bottom:8rem}h1[_ngcontent-%COMP%]{font-weight:500;color:rgb(var(--ard-primary-900));padding-bottom:1.5rem}h1[_ngcontent-%COMP%]   .oops[_ngcontent-%COMP%]{letter-spacing:.1em;font-size:5rem}h1[_ngcontent-%COMP%]   .long[_ngcontent-%COMP%]{font-size:2.625rem;overflow:visible;white-space:nowrap}p[_ngcontent-%COMP%]{opacity:50%;font-size:1rem}@media only screen and (min-width: 1340px){article[_ngcontent-%COMP%]{padding-right:10rem}}@media only screen and (min-width: 1700px){article[_ngcontent-%COMP%]{padding-right:20rem}}']})}}return e})();function k0(e,r,t,i,n,d,c,v){return d||(d={name:r}),{path:e,name:r,desc:t,img:c,component:To,groupName:v,children:[{path:"overview",component:i},{path:"api",component:go,data:n},{path:"exceptions",component:bo,data:d},{path:"**",redirectTo:"overview"}]}}function V0(e,r,t,i=!1){return{path:e,name:r,desc:t,img:i?void 0:"assets/placeholder.jpg",component:wo}}var Ao=dt(Ni());var Jp=(e,r)=>r.group;function eu(e,r){if(e&1&&(o(0,"p",1),s(1),a()),e&2){let t=m().$implicit;l(),f(t.group)}}function tu(e,r){if(e&1&&b(0,"img",5),e&2){let t=m().$implicit;u("src",t.img,zt)}}function iu(e,r){if(e&1&&(o(0,"a",3)(1,"ard-card",4),y(2,tu,1,1,"img",5),o(3,"ard-card-content")(4,"ard-card-title"),s(5),a(),o(6,"p"),s(7),a()()()()),e&2){let t=r.$implicit;u("routerLink",t.path),l(2),C(t.img?2:-1),l(3),f(t.name),l(2),f(t.desc)}}function nu(e,r){if(e&1&&(y(0,eu,2,1,"p",1),o(1,"div",2),P(2,iu,8,4,"a",3,O),a()),e&2){let t=r.$implicit;C(t.group?0:-1),l(2),k(t.children)}}var j0=(()=>{class e{constructor(){this.data=h.required(),this.mappedRouteData=V(()=>co(this.data(),t=>t.groupName??"").sort((t,i)=>t.group.localeCompare(i.group)).map(t=>({group:t.group,children:t.children.map(i=>F(g({},i),{path:`${(0,Ao.kebab)(t.group)}/${i.path}`})).sort((i,n)=>i.name.localeCompare(n.name))}))),this.topText=h.required()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-home-page"]],inputs:{data:[1,"data"],topText:[1,"topText"]},decls:5,vars:1,consts:[[1,"center-text"],[1,"group-name"],[1,"component-grid"],[3,"routerLink"],["appearance","outlined"],["ard-card-image","",3,"src"]],template:function(i,n){i&1&&(o(0,"article")(1,"p",0),s(2),a(),P(3,nu,4,1,null,null,Jp),a()),i&2&&(l(2),f(n.topText()),l(),k(n.mappedRouteData()))},dependencies:[Me,mt,oo,ro,to,io,no],styles:[".center-text[_ngcontent-%COMP%]{padding:1rem 0;text-align:center}.component-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,280px);padding:1.25rem;gap:2.5rem;justify-content:center}a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]{width:280px;height:100%;background-color:transparent;transition:background-color .15s ease-in-out}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;min-width:calc(100% + 4px);left:-2px;top:-2px;min-height:10rem;border:1px solid transparent}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]   ard-card-title[_ngcontent-%COMP%]{padding-bottom:1rem;padding-top:.5rem}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-bottom:0}a[_ngcontent-%COMP%]:hover   ard-card[_ngcontent-%COMP%]{background-color:rgba(var(--ard-primary-500),.05)}.group-name[_ngcontent-%COMP%]{text-align:center;font-size:1.25rem;padding-bottom:.5rem;padding-top:1.5rem;color:var(--ard-text3);text-transform:uppercase}"]})}}return e})();var De={TS:"typescript",SCSS:"scss",HTML:"xml",PlainText:"txt"};var Do=(()=>{class e{loadDynamicComponent(t,i){if(!i)return;i.clear(),i.createComponent(t).changeDetectorRef.detectChanges()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=Re({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var ru=["exampleDisplay"];function ou(e,r){if(e&1&&(o(0,"div",4),s(1),a()),e&2){let t=m();l(),f(t.heading())}}function au(e,r){if(e&1){let t=U();o(0,"div",5)(1,"ard-icon-button",7),_("click",function(){D(t);let n=m();return E(n.toggleCodeShown())}),o(2,"ard-icon"),s(3,"code"),a()()()}}function su(e,r){}function lu(e,r){if(e&1&&(o(0,"ard-tab",11)(1,"div",9),b(2,"app-code",12),y(3,su,0,0,"ng-template",13),a()()),e&2){let t=r.$implicit;m(3);let i=L(10);u("tabId",t.label)("label",t.label),l(2),u("language",t.type)("code",t.code),l(),u("ngTemplateOutlet",i)}}function du(e,r){if(e&1){let t=U();o(0,"ard-tabber",10),_("changeTab",function(n){D(t);let d=m(2);return E(d.onTabChange(n))}),P(1,lu,4,5,"ard-tab",11,O),a()}if(e&2){let t,i=m(2);u("initialTab",(t=i.initialTab())==null?null:t.toUpperCase()),l(),k(i.mappedData())}}function cu(e,r){}function pu(e,r){if(e&1&&(o(0,"div",9),b(1,"app-code",12),y(2,cu,0,0,"ng-template",13),a()),e&2){let t=m(2),i=L(10);l(),u("language",t.mappedData()[0].type)("code",t.mappedData()[0].code),l(),u("ngTemplateOutlet",i)}}function uu(e,r){if(e&1&&y(0,du,3,1,"ard-tabber",8)(1,pu,3,3,"div",9),e&2){let t=m();C(t.mappedData().length>1?0:1)}}function mu(e,r){}function hu(e,r){if(e&1&&(b(0,"app-code",12),y(1,mu,0,0,"ng-template",13)),e&2){let t=m(),i=L(10);u("language",t.simpleCodeType())("code",t.simpleCodePiece()),l(),u("ngTemplateOutlet",i)}}function fu(e,r){if(e&1&&(o(0,"p"),s(1,"This example can only be viewed in its own tab. "),o(2,"a",14),s(3,"Open example page"),a(),s(4,"."),a()),e&2){let t=m();l(2),u("href",t.viewInFullWindowLink(),zt)}}function gu(e,r){e&1&&kn(0,null,1)}function _u(e,r){if(e&1&&b(0,"app-copy-button",15),e&2){let t=m();u("contentToCopy",t.codeToCopy())}}function vu(e){switch(e){case"ts":return De.TS;case"html":return De.HTML;case"scss":case"css":return De.SCSS;default:switch(e.split(".").at(-1)?.toLowerCase()){case"ts":return De.TS;case"html":return De.HTML;case"scss":case"css":return De.SCSS;default:return De.PlainText}}}var Eo=["HTML","TS","SCSS","CSS"],Si=(()=>{class e{constructor(){this.data=h.required(),this.heading=h.required(),this.viewInFullWindowLink=h(null,{transform:t=>t?.startsWith("/")?t:t&&"/"+t}),this.isSimpleCodeDefined=V(()=>!!this.simpleCodePiece()),this.simpleCodePiece=V(()=>{let t=this.data();return t.simpleTs??t.simpleHtml??t.simpleScss??t.simpleTxt}),this.simpleCodeType=V(()=>{let t=this.data();return t.simpleTs?De.TS:t.simpleHtml?De.HTML:t.simpleScss?De.SCSS:De.PlainText}),this.isComponentDefined=V(()=>!!this.data().component),this.isCodeShown=nt(!0),this.initialTab=h(void 0),this.nonExpandable=h(!1,{transform:t=>be(t)}),this.codeToCopy=V(()=>this.shouldShowFullCodeData()?(this._currentTab()?this.mappedData().find(i=>i.label===this._currentTab()):this.mappedData()[0]).code:this.simpleCodePiece()),this._currentTab=w(""),this.shouldShowFullCodeData=V(()=>this.isCodeShown()||!this.isSimpleCodeDefined()),this.displayWhenSimple=h(!1,{transform:t=>be(t)}),this.mappedData=V(()=>{let t=this.data();return Object.entries(t).filter(i=>i[0]!=="component"&&i[0]!=="simpleHtml"&&i[0]!=="simpleScss"&&i[0]!=="simpleTs").map(i=>{let n=i[0];return typeof n=="string"&&n.match(/^(html|s?css|ts)$/i)&&(n=n.toUpperCase()),{label:n,code:i[1],type:vu(n)}}).sort((i,n)=>{let d=Eo.indexOf(i.label),c=Eo.indexOf(n.label);return d!==-1&&c!==-1?d-c:d!==-1?-1:c!==-1?1:i.label.localeCompare(n.label)})}),this.componentLoader=I(Do),this.exampleDisplay=me("exampleDisplay",{read:Qt}),Fe(()=>{(this.isSimpleCodeDefined()||this.nonExpandable())&&this.isCodeShown.set(!1)})}ngOnInit(){this.nonExpandable()&&this.isCodeShown.set(!1)}toggleCodeShown(){this.isCodeShown.update(t=>!t)}onTabChange(t){this._currentTab.set(t)}ngAfterViewInit(){this._renderComponent()}_renderComponent(){if(this.viewInFullWindowLink())return;let t=this.data().component;t&&this.componentLoader.loadDynamicComponent(t,this.exampleDisplay())}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-code-example"]],viewQuery:function(i,n){i&1&&he(n.exampleDisplay,ru,5,Qt),i&2&&fe()},hostVars:10,hostBindings:function(i,n){i&2&&se("simple-example",n.isSimpleCodeDefined()&&!n.isCodeShown())("code-shown",n.isCodeShown())("component-defined",n.isComponentDefined())("non-expandable",n.nonExpandable())("has-single-tab",n.mappedData().length===1)},inputs:{data:[1,"data"],heading:[1,"heading"],viewInFullWindowLink:[1,"viewInFullWindowLink"],isCodeShown:[1,"isCodeShown"],initialTab:[1,"initialTab"],nonExpandable:[1,"nonExpandable"],displayWhenSimple:[1,"displayWhenSimple"]},outputs:{isCodeShown:"isCodeShownChange"},decls:11,vars:6,consts:[["copyButton",""],["exampleDisplay",""],[1,"example-container"],[1,"example-container__top-bar"],[1,"example-container__heading"],[1,"example-container__buttons"],[1,"example-display"],["title","Show full code",3,"click"],["stretchTabs","false",3,"initialTab"],[1,"tab-relative-container"],["stretchTabs","false",3,"changeTab","initialTab"],[3,"tabId","label"],[3,"language","code"],[3,"ngTemplateOutlet"],["target","_blank",3,"href"],["title","Copy code",1,"copy-button",3,"contentToCopy"]],template:function(i,n){i&1&&(o(0,"div",2)(1,"div",3),y(2,ou,2,1,"div",4)(3,au,4,0,"div",5),a(),y(4,uu,2,1)(5,hu,2,3),a(),o(6,"div",6),y(7,fu,5,1,"p")(8,gu,2,0,"ng-container"),a(),y(9,_u,1,1,"ng-template",null,0,Ae)),i&2&&(l(2),C(n.shouldShowFullCodeData()?2:-1),l(),C(!n.nonExpandable()||!n.isSimpleCodeDefined()?3:-1),l(),C(n.isCodeShown()?4:n.shouldShowFullCodeData()?-1:5),l(2),se("hidden",!n.isComponentDefined()||!n.displayWhenSimple()&&!n.shouldShowFullCodeData()),l(),C(n.viewInFullWindowLink()?7:8))},dependencies:[W,at,Me,so,ao,pi,Ye,Ge,Ve,ke,At,xi],styles:["[_nghost-%COMP%]{width:100%;display:flex;flex-direction:column;border:1px solid var(--ard-detail-ultralight);border-radius:8px;margin:1.25rem 0;position:relative}[_nghost-%COMP%]   .example-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   .example-container__top-bar[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;padding:.5rem 1rem 0 1.5rem}[_nghost-%COMP%]   .example-container__heading[_ngcontent-%COMP%]{line-height:39px;color:#514346}[_nghost-%COMP%]   .example-display[_ngcontent-%COMP%]{padding:1rem 1.5rem;border-top:1px solid var(--ard-detail-ultralight)}[_nghost-%COMP%]   .example-display.hidden[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .tab-relative-container[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   .copy-button[_ngcontent-%COMP%]{position:absolute;top:.5rem;right:1rem}.simple-example[_nghost-%COMP%]   .example-container__top-bar[_ngcontent-%COMP%]{position:absolute;right:0;width:max-content}[_nghost-%COMP%]:not(.code-shown).simple-example:not(.non-expandable)   .copy-button[_ngcontent-%COMP%]{transform:translate(calc(-100% + .125rem))}[_nghost-%COMP%]:not(.code-shown)   .example-container[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.component-defined)   .example-container[_ngcontent-%COMP%]{border-bottom:none}.has-single-tab.code-shown[_nghost-%COMP%]   .example-container__top-bar[_ngcontent-%COMP%]{padding-bottom:.5rem;border-bottom:1px solid var(--ard-detail-ultralight)}"]})}}return e})();var yu=["*"],a_=(()=>{class e{constructor(){this.pageTitle=h.required()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-introduction"]],inputs:{pageTitle:[1,"pageTitle"]},standalone:!1,ngContentSelectors:yu,decls:4,vars:1,template:function(i,n){i&1&&(B(),o(0,"section")(1,"app-h1"),s(2),a(),R(3),a()),i&2&&(l(2),S("",n.pageTitle()," \u2014 Ardium UI"))},dependencies:[Le],encapsulation:2})}}return e})();var bu=["*"],Ti=(()=>{class e{constructor(){this.link=h.required()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-main-article"]],inputs:{link:[1,"link"]},ngContentSelectors:bu,decls:4,vars:1,consts:[[3,"routerLink"]],template:function(i,n){i&1&&(B(),o(0,"i"),s(1,"Main article: "),o(2,"a",0),R(3),a()()),i&2&&(l(2),u("routerLink",n.link()))},dependencies:[Me,mt],styles:["[_nghost-%COMP%]{padding-left:1.6rem;font-size:.875rem}"]})}}return e})();var Su=e=>({simpleTs:e});function Tu(e,r){e&1&&s(0),e&2&&f(" and theme styles need to be imported")}function wu(e,r){e&1&&(o(0,"p"),s(1,"Note: Only the modules that will actually be used should be imported!"),a())}function Au(e,r){if(e&1&&(o(0,"app-h3"),s(1,"Import styles"),a(),o(2,"app-main-article",1),s(3,"Importing styles"),a(),b(4,"app-code-example",2)),e&2){let t=m();l(4),u("data",t.stylesCode())}}var m_=(()=>{class e{constructor(){this.moduleName=h.required(),this.otherModuleNames=h([]),this.styles=h(null),this.tsCode=V(()=>`import { ${this.otherModuleNames().length?[this.moduleName(),...this.otherModuleNames()].join(", "):this.moduleName()} } from '@ardium-ui/ui'`),this.isOtherModuleNamesDefined=V(()=>this.otherModuleNames().length>0),this.stylesCode=V(()=>{let t=this.styles();if(!t)return null;let i=["@import '../node_modules/@ardium-ui/ui/prebuilt-themes/default/core.css';",...t.map(d=>`@import '../node_modules/@ardium-ui/ui/prebuilt-themes/default/${Array.isArray(d)?d[0]:d}.scs';${Array.isArray(d)&&d[1]?" /* if needed */":""}`)].join(`
`),n=["@import '../node_modules/@ardium-ui/ui/themes/default/core.scss';",...t.map(d=>`@import '../node_modules/@ardium-ui/ui/themes/default/${Array.isArray(d)?d[0]:d}.scss';${Array.isArray(d)&&d[1]?" // if needed":""}`)].join(`
`);return{simpleScss:n,scss:n,css:i}})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-prerequisites"]],inputs:{moduleName:[1,"moduleName"],otherModuleNames:[1,"otherModuleNames"],styles:[1,"styles"]},standalone:!1,decls:12,vars:6,consts:[["heading","Module imports","nonExpandable","",3,"data"],["link","guides/importing-styles"],["heading","Style imports",3,"data"]],template:function(i,n){i&1&&(o(0,"section")(1,"app-h2"),s(2,"Prerequisites"),a(),o(3,"p"),s(4," In order for the component to work, its corresponding module"),y(5,Tu,1,1),s(6,". "),a(),o(7,"app-h3"),s(8,"Import modules"),a(),b(9,"app-code-example",0),y(10,wu,2,0,"p")(11,Au,5,1),a()),i&2&&(l(5),C(n.stylesCode()?5:-1),l(4),u("data",Ie(4,Su,n.tsCode())),l(),C(n.isOtherModuleNamesDefined()?10:-1),l(),C(n.stylesCode()?11:-1))},dependencies:[Si,Ti,Xe,Ze],encapsulation:2})}}return e})();var w_=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=ce({type:e})}static{this.\u0275inj=de({imports:[W,Si,Ti,Je]})}}return e})();var Io=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["kbd-appearances-example"]],decls:13,vars:0,consts:[[1,"grid"],["appearance","outlined"],["appearance","filled"],["appearance","transparent"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"ard-kbd",1),s(2,"Ctrl"),a(),o(3,"ard-kbd",2),s(4,"Ctrl"),a(),o(5,"ard-kbd",3),s(6,"Ctrl"),a(),o(7,"ard-kbd-shortcut",1),s(8,"Ctrl+C"),a(),o(9,"ard-kbd-shortcut",2),s(10,"Ctrl+C"),a(),o(11,"ard-kbd-shortcut",3),s(12,"Ctrl+C"),a()())},dependencies:[re,Se,St,xt],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:max-content max-content max-content;gap:1rem}"]})}}return e})();var F_={component:Io,html:`<div class="grid">\r
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
export class KbdAppearancesExample {}`};var Fo=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["kbd-basic-example"]],decls:4,vars:0,template:function(i,n){i&1&&(s(0,"Press "),o(1,"ard-kbd"),s(2,"Shift"),a(),s(3," to continue."))},dependencies:[re,Se],encapsulation:2})}}return e})();var L_={component:Fo,html:"Press <ard-kbd>Shift</ard-kbd> to continue.",ts:`import { Component } from "@angular/core";\r
import { ArdiumKbdModule } from "@ardium-ui/ui";\r
\r
@Component({\r
  selector: 'kbd-basic-example',\r
  templateUrl: 'kbd-basic-example.html',\r
  standalone: true,\r
  imports: [ArdiumKbdModule],\r
})\r
export class KbdBasicExample {}`};var Mo=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["kbd-directive-example"]],decls:4,vars:0,consts:[["ardKbd",""]],template:function(i,n){i&1&&(s(0,"Press "),o(1,"kbd",0),s(2,"Vol. Down"),a(),s(3," to continue."))},dependencies:[re,Zr],encapsulation:2})}}return e})();var H_={component:Mo,html:"Press <kbd ardKbd>Vol. Down</kbd> to continue.",ts:`import { Component } from "@angular/core";\r
import { ArdiumKbdModule } from "@ardium-ui/ui";\r
\r
@Component({\r
  selector: 'kbd-directive-example',\r
  templateUrl: 'kbd-directive-example.html',\r
  standalone: true,\r
  imports: [ArdiumKbdModule],\r
})\r
export class KbdDirectiveExample {}`};var Po=(()=>{class e{constructor(){this.keys=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],this._currentKeyIndex=w(0),this.currentKey=V(()=>this.keys[this._currentKeyIndex()])}ngOnInit(){this._interval=setInterval(()=>{this._currentKeyIndex()===this.keys.length-1?this._currentKeyIndex.set(0):this._currentKeyIndex.update(t=>t+1)},1e3)}ngOnDestroy(){this._interval&&clearInterval(this._interval)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["kbd-dynamic-example"]],decls:1,vars:1,consts:[[3,"key"]],template:function(i,n){i&1&&b(0,"ard-kbd",0),i&2&&u("key",n.currentKey())},dependencies:[re,Se],encapsulation:2})}}return e})();var z_={component:Po,html:'<ard-kbd [key]="currentKey()" />',ts:`import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';\r
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
`};var ko=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["kbd-full-example"]],decls:12,vars:0,consts:[["full",""]],template:function(i,n){i&1&&(o(0,"ard-kbd",0),s(1,"KeyF"),a(),o(2,"ard-kbd",0),s(3,"Digit3"),a(),o(4,"ard-kbd",0),s(5,"ArrowUp"),a(),o(6,"ard-kbd",0),s(7,"Tab"),a(),o(8,"ard-kbd",0),s(9,"MetaLeft"),a(),o(10,"ard-kbd",0),s(11,"AudioVolumeDown"),a())},dependencies:[re,Se],encapsulation:2})}}return e})();var Z_={component:ko,html:`<ard-kbd full>KeyF</ard-kbd>\r
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
`};var Vo=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["kbd-shortcut-example"]],decls:4,vars:0,template:function(i,n){i&1&&(s(0,"Press "),o(1,"ard-kbd-shortcut"),s(2,"Ctrl+C"),a(),s(3," to copy."))},dependencies:[St,xt],encapsulation:2})}}return e})();var nv={component:Vo,html:"Press <ard-kbd-shortcut>Ctrl+C</ard-kbd-shortcut> to copy.",ts:`import { Component } from "@angular/core";\r
import { ArdiumKbdShortcutModule } from "@ardium-ui/ui";\r
\r
@Component({\r
  selector: 'kbd-shortcut-example',\r
  templateUrl: 'kbd-shortcut-example.html',\r
  standalone: true,\r
  imports: [ArdiumKbdShortcutModule],\r
})\r
export class KbdShortcutExample {}`};var Lo=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["kbd-translation-example"]],decls:12,vars:0,template:function(i,n){i&1&&(o(0,"ard-kbd"),s(1,"KeyF"),a(),o(2,"ard-kbd"),s(3,"Digit3"),a(),o(4,"ard-kbd"),s(5,"ArrowUp"),a(),o(6,"ard-kbd"),s(7,"Tab"),a(),o(8,"ard-kbd"),s(9,"MetaLeft"),a(),o(10,"ard-kbd"),s(11,"AudioVolumeDown"),a())},dependencies:[re,Se],encapsulation:2})}}return e})();var lv={component:Lo,html:`<ard-kbd>KeyF</ard-kbd>\r
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
`};var Ro=(()=>{class e{constructor(){this.insideClicks=w(0),this.outsideClicks=w(0)}onClick(){this.insideClicks.update(t=>t+1)}onOutsideClick(){this.outsideClicks.update(t=>t+1)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["click-outside-example"]],decls:6,vars:2,consts:[[3,"click","ardClickOutside"]],template:function(i,n){i&1&&(o(0,"div",0),_("click",function(){return n.onClick()})("ardClickOutside",function(){return n.onOutsideClick()}),s(1,"My element"),a(),o(2,"p"),s(3),b(4,"br"),s(5),a()),i&2&&(l(3),S(" Inside clicks: ",n.insideClicks()," "),l(2),S(" Outside clicks: ",n.outsideClicks(),`
`))},dependencies:[Wn,Kn],styles:["[_nghost-%COMP%]{-webkit-user-select:none;user-select:none}div[_ngcontent-%COMP%]{width:167px;height:100px;display:grid;place-items:center;background-color:#90ee90}"]})}}return e})();var fv={component:Ro,html:`<div (click)="onClick()" (ardClickOutside)="onOutsideClick()">My element</div>\r
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
}`};var Du=["*"],Bo=(()=>{class e{constructor(){this.disabled=h(!1,{transform:be})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["my-button"]],inputs:{disabled:[1,"disabled"]},ngContentSelectors:Du,decls:2,vars:1,consts:[[3,"disabled"]],template:function(i,n){i&1&&(B(),o(0,"button",0),R(1),a()),i&2&&u("disabled",n.disabled())},encapsulation:2})}}return e})();var Oo=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["coercion-boolean-example"]],decls:8,vars:1,consts:[["disabled",""],["disabled","false"],[3,"disabled"]],template:function(i,n){i&1&&(o(0,"my-button"),s(1,"Normal button"),a(),o(2,"my-button",0),s(3,"Disabled button"),a(),o(4,"my-button",1),s(5,"False button"),a(),o(6,"my-button",2),s(7,"Disabled button"),a()),i&2&&(l(6),u("disabled",!0))},dependencies:[Bo],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]})}}return e})();var Tv={component:Oo,html:`<my-button>Normal button</my-button>\r
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
}`};var Uo=(()=>{class e{constructor(){this.date=h.required({transform:t=>cr(t,new Date(""))})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["my-calendar"]],inputs:{date:[1,"date"]},decls:1,vars:1,template:function(i,n){i&1&&s(0),i&2&&S("The date is ",n.date(),"")},encapsulation:2})}}return e})();var Ho=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["coercion-date-example"]],decls:2,vars:0,consts:[["date","1918.11.11"],["date","now"]],template:function(i,n){i&1&&b(0,"my-calendar",0)(1,"my-calendar",1)},dependencies:[Uo],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]})}}return e})();var kv={component:Ho,html:`<my-calendar date="1918.11.11" />\r
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
`};var Eu=["*"],jo=(()=>{class e{constructor(){this.delay=h(0,{transform:t=>Qn(t,0)})}alert(){setTimeout(()=>{alert("Hello world!")},this.delay())}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["my-button"]],inputs:{delay:[1,"delay"]},ngContentSelectors:Eu,decls:2,vars:0,consts:[[3,"click"]],template:function(i,n){i&1&&(B(),o(0,"button",0),_("click",function(){return n.alert()}),R(1),a())},encapsulation:2})}}return e})();var No=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["coercion-number-example"]],decls:6,vars:1,consts:[["delay","500"],[3,"delay"]],template:function(i,n){i&1&&(o(0,"my-button"),s(1,"No delay"),a(),o(2,"my-button",0),s(3,"With delay"),a(),o(4,"my-button",1),s(5,"Long delay"),a()),i&2&&(l(4),u("delay",1500))},dependencies:[jo],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]})}}return e})();var Nv={component:No,html:`<my-button>No delay</my-button>\r
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
`};var $o=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["coercion-usefulness-example"]],decls:0,vars:0,template:function(i,n){},encapsulation:2})}}return e})();var qv={component:$o,simpleHtml:`<ard-select disabled />\r
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
export class CoercionUsefulnessExample {}`};var Ko=(()=>{class e{constructor(){this.exampleSignal=tr(["Pizza","Cheese","Spaghetti"])}push(t){t&&this.exampleSignal.push(t)}pop(){this.exampleSignal.pop()}map(){this.exampleSignal.map(t=>t.toUpperCase())}filter(){this.exampleSignal.filter(t=>t.length>6)}reverse(){this.exampleSignal.reverse()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["array-signal-basic-example"]],decls:18,vars:2,consts:[["pushText",""],[1,"left-side"],["type","text","placeholder","Text to push..."],[3,"click"],[1,"right-side"]],template:function(i,n){if(i&1){let d=U();o(0,"div",1),b(1,"input",2,0),o(3,"button",3),_("click",function(){D(d);let v=L(2);return E(n.push(v.value))}),s(4,"Push"),a(),o(5,"button",3),_("click",function(){return D(d),E(n.pop())}),s(6,"Pop"),a(),o(7,"button",3),_("click",function(){return D(d),E(n.map())}),s(8,"Map"),a(),o(9,"button",3),_("click",function(){return D(d),E(n.filter())}),s(10,"Filter"),a(),o(11,"button",3),_("click",function(){return D(d),E(n.reverse())}),s(12,"Reverse"),a()(),o(13,"div",4)(14,"p"),s(15),a(),o(16,"p"),s(17),a()()}i&2&&(l(15),S("isEmpty: ",n.exampleSignal.isEmpty().toString()," "),l(2),f(n.exampleSignal()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:center}button[_ngcontent-%COMP%]{margin-right:.75rem;margin-left:.25rem;padding:0 .125rem}"]})}}return e})();var Xv={component:Ko,html:`<div class="left-side">\r
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
`};var Wo=(()=>{class e{constructor(){this.exampleSignal=ir(10)}increment(){this.exampleSignal.increment()}decrement(){this.exampleSignal.decrement()}reset(){this.exampleSignal.reset()}double(){this.exampleSignal.update(t=>t*2)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["counter-signal-basic-example"]],decls:14,vars:2,consts:[[1,"left-side"],[3,"click"],[1,"right-side"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"button",1),_("click",function(){return n.increment()}),s(2,"Increment"),a(),o(3,"button",1),_("click",function(){return n.decrement()}),s(4,"Decrement"),a(),o(5,"button",1),_("click",function(){return n.double()}),s(6,"Double"),a(),o(7,"button",1),_("click",function(){return n.reset()}),s(8,"Reset"),a()(),o(9,"div",2)(10,"p"),s(11),a(),o(12,"p"),s(13),a()()),i&2&&(l(11),S("isReset: ",n.exampleSignal.isReset().toString()," "),l(2),S("value: ",n.exampleSignal(),""))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:center}button[_ngcontent-%COMP%]{margin-right:1rem;padding:0 .125rem}"]})}}return e})();var iC={component:Wo,html:`<div class="left-side">\r
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
`};var qo=(()=>{class e{constructor(){this.debouncedValue=nr("",500)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["debounced-signal-example"]],decls:5,vars:2,consts:[["for","debounced-input"],["type","text","id","debounced-input","placeholder","Search...",3,"ngModelChange","ngModel"]],template:function(i,n){i&1&&(o(0,"label",0),s(1,"What are you looking for?"),a(),o(2,"input",1),$("ngModelChange",function(c){return N(n.debouncedValue,c)||(n.debouncedValue=c),c}),a(),o(3,"p"),s(4),a()),i&2&&(l(2),j("ngModel",n.debouncedValue),l(2),S("Debounced value: ",n.debouncedValue(),""))},dependencies:[z,Z,ee,J],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return e})();var lC={component:qo,html:`<label for="debounced-input">What are you looking for?</label>\r
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
`};function Iu(e,r){if(e&1&&(o(0,"tr")(1,"td"),s(2),a(),o(3,"td"),s(4),a()()),e&2){let t=r.$implicit;l(2),f(t[0]),l(2),f(t[1])}}var zo=(()=>{class e{constructor(){this.exampleSignal=rr([["food1","Pizza"]])}setKey(t,i){!t||!i||this.exampleSignal.setKey(t,i)}delete(t){t&&this.exampleSignal.delete(t)}update(){this.exampleSignal.update(t=>new Map([...t.entries()].map(i=>[i[0],i[1].toLowerCase()])))}clear(){this.exampleSignal.clear()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["map-signal-basic-example"]],decls:30,vars:2,consts:[["key",""],["value",""],[1,"left-side"],[1,"inputs"],["type","text","placeholder","Key"],["type","text","placeholder","Value"],[3,"click"],[1,"right-side"]],template:function(i,n){if(i&1){let d=U();o(0,"div",2)(1,"div",3),b(2,"input",4,0)(4,"input",5,1),a(),o(6,"div")(7,"button",6),_("click",function(){D(d);let v=L(3),H=L(5);return E(n.setKey(v.value,H.value))}),s(8,"Set key"),a(),o(9,"button",6),_("click",function(){D(d);let v=L(3);return E(n.delete(v.value))}),s(10,"Delete key"),a(),o(11,"button",6),_("click",function(){return D(d),E(n.clear())}),s(12,"Clear"),a(),o(13,"button",6),_("click",function(){return D(d),E(n.update())}),s(14,"Update (to lowercase)"),a()()(),o(15,"div",7)(16,"p"),s(17),a(),o(18,"p"),s(19),a(),o(20,"table")(21,"thead")(22,"tr")(23,"th"),s(24,"Key"),a(),o(25,"th"),s(26,"Value"),a()()(),o(27,"tbody"),P(28,Iu,5,2,"tr",null,O),a()()()}i&2&&(l(17),S("isEmpty: ",n.exampleSignal.isEmpty().toString(),""),l(2),S("size: ",n.exampleSignal.size().toString(),""),l(9),k(n.exampleSignal()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:3rem}.inputs[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}input[_ngcontent-%COMP%]{margin-right:.25rem;max-width:10rem}button[_ngcontent-%COMP%]{margin-right:1rem;margin-top:.75rem;padding:0 .125rem}"]})}}return e})();var mC={component:zo,html:`<div class="left-side">\r
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
`};var Qo=(()=>{class e{constructor(){this.favoriteFood=Ke("chocolate chip cookies",{name:"favorite-food",method:$e.Cookies,maxAge:60*60*24*7})}clearSignal(){this.favoriteFood.clear()}get cookieValue(){let t=document.cookie.match(new RegExp("(^| )favorite-food=([^;]+)"));return t?t[2]:null}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["persistent-signal-cookies-example"]],decls:7,vars:2,consts:[["for","favorite-food"],["type","text","id","favorite-food",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,n){i&1&&(o(0,"label",0),s(1,"Favorite food"),a(),o(2,"input",1),$("ngModelChange",function(c){return N(n.favoriteFood,c)||(n.favoriteFood=c),c}),a(),o(3,"button",2),_("click",function(){return n.clearSignal()}),s(4,"Clear"),a(),o(5,"p"),s(6),a()),i&2&&(l(2),j("ngModel",n.favoriteFood),l(4),S("Your favorite food is: ",n.cookieValue,""))},dependencies:[z,Z,ee,J],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return e})();var CC={component:Qo,html:`<label for="favorite-food">Favorite food</label>\r
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
`};var Go=(()=>{class e{constructor(){this.favoriteFood=Ke("spaghetti",{name:"favorite-food",method:$e.LocalStorage})}clearSignal(){this.favoriteFood.clear()}get localStorageValue(){return localStorage.getItem("favorite-food")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["persistent-signal-example"]],decls:7,vars:2,consts:[["for","favorite-food"],["type","text","id","favorite-food",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,n){i&1&&(o(0,"label",0),s(1,"Favorite food"),a(),o(2,"input",1),$("ngModelChange",function(c){return N(n.favoriteFood,c)||(n.favoriteFood=c),c}),a(),o(3,"button",2),_("click",function(){return n.clearSignal()}),s(4,"Clear"),a(),o(5,"p"),s(6),a()),i&2&&(l(2),j("ngModel",n.favoriteFood),l(4),S("Your favorite food is: ",n.localStorageValue,""))},dependencies:[z,Z,ee,J],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return e})();var wC={component:Go,html:`<label for="favorite-food">Favorite food</label>\r
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
`};var Yo=(()=>{class e{constructor(){this.favoriteFood=Ke("spaghetti",{name:"favorite-food",method:$e.LocalStorage})}clearSignal(){this.favoriteFood.clear()}get localStorageValue(){return localStorage.getItem("favorite-food")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["persistent-signal-local-storage-example"]],decls:7,vars:2,consts:[["for","favorite-food"],["type","text","id","favorite-food",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,n){i&1&&(o(0,"label",0),s(1,"Favorite food"),a(),o(2,"input",1),$("ngModelChange",function(c){return N(n.favoriteFood,c)||(n.favoriteFood=c),c}),a(),o(3,"button",2),_("click",function(){return n.clearSignal()}),s(4,"Clear"),a(),o(5,"p"),s(6),a()),i&2&&(l(2),j("ngModel",n.favoriteFood),l(4),S("Your favorite food is: ",n.localStorageValue,""))},dependencies:[z,Z,ee,J],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return e})();var MC={component:Yo,html:`<label for="favorite-food">Favorite food</label>\r
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
`};var Xo=(()=>{class e{constructor(){this.acceptsTerms=Ke(!1,{name:"accepts-terms",method:$e.LocalStorage,serialize:t=>String(!!t),deserialize:t=>t==="true"})}get termsValue(){return localStorage.getItem("accepts-terms")??"null"}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["persistent-signal-serialization-example"]],decls:6,vars:2,consts:[[3,"selectedChange","selected"]],template:function(i,n){i&1&&(o(0,"div")(1,"ard-checkbox",0),$("selectedChange",function(c){return N(n.acceptsTerms,c)||(n.acceptsTerms=c),c}),a(),o(2,"span"),s(3,"Do you accept the terms?"),a()(),o(4,"p"),s(5),a()),i&2&&(l(),j("selected",n.acceptsTerms),l(4),S("Terms accepted: ",n.termsValue,""))},dependencies:[z,gi,fi],styles:["div[_ngcontent-%COMP%]{display:flex;gap:.5rem}p[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return e})();var OC={component:Xo,html:`<div>\r
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
`};var Zo=(()=>{class e{constructor(){this.favoriteColor=ii("red","favorite-color")}clearSignal(){this.favoriteColor.clear()}get queryParams(){return window.location.search}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["query-param-signal-example"]],decls:7,vars:2,consts:[["for","favorite-color"],["type","text","id","favorite-color",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,n){i&1&&(o(0,"label",0),s(1,"Favorite color"),a(),o(2,"input",1),$("ngModelChange",function(c){return N(n.favoriteColor,c)||(n.favoriteColor=c),c}),a(),o(3,"button",2),_("click",function(){return n.clearSignal()}),s(4,"Clear"),a(),o(5,"p"),s(6),a()),i&2&&(l(2),j("ngModel",n.favoriteColor),l(4),S("URL query params: ",n.queryParams,""))},dependencies:[z,Z,ee,J],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return e})();var KC={component:Zo,html:`<label for="favorite-color">Favorite color</label>\r
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
`};var Jo=(()=>{class e{constructor(){this.acceptsTerms=ii(!1,{paramName:"accepts-terms",serialize:t=>t===null?null:String(t),deserialize:t=>t==="true"})}get queryParams(){return window.location.search}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["query-param-signal-serialization-example"]],decls:6,vars:2,consts:[[3,"selectedChange","selected"]],template:function(i,n){i&1&&(o(0,"div")(1,"ard-checkbox",0),$("selectedChange",function(c){return N(n.acceptsTerms,c)||(n.acceptsTerms=c),c}),a(),o(2,"span"),s(3,"Do you accept the terms?"),a()(),o(4,"p"),s(5),a()),i&2&&(l(),j("selected",n.acceptsTerms),l(4),S("URL query: ",n.queryParams,""))},dependencies:[z,gi,fi],styles:["div[_ngcontent-%COMP%]{display:flex;gap:.5rem}p[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return e})();var XC={component:Jo,html:`<div>\r
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
`};function Fu(e,r){if(e&1&&(o(0,"li"),s(1),a()),e&2){let t=r.$implicit;l(),f(t)}}var ea=(()=>{class e{constructor(){this.exampleSignal=or(["Pizza","Spaghetti","Tomatoes"])}enqueue(t){t&&this.exampleSignal.enqueue(t)}dequeue(){this.exampleSignal.dequeue()}clear(){this.exampleSignal.clear()}update(){this.exampleSignal.update(t=>t.filter(i=>i.length<=5))}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["queue-signal-basic-example"]],decls:20,vars:2,consts:[["enqueueText",""],[1,"left-side"],["type","text","placeholder","Text to enqueue..."],[3,"click"],[1,"right-side"]],template:function(i,n){if(i&1){let d=U();o(0,"div",1)(1,"div"),b(2,"input",2,0),a(),o(4,"button",3),_("click",function(){D(d);let v=L(3);return E(n.enqueue(v.value))}),s(5,"Enqueue"),a(),o(6,"button",3),_("click",function(){return D(d),E(n.dequeue())}),s(7,"Dequeue"),a(),o(8,"button",3),_("click",function(){return D(d),E(n.clear())}),s(9,"Clear"),a(),o(10,"button",3),_("click",function(){return D(d),E(n.update())}),s(11,"Update (leave only short)"),a()(),o(12,"div",4)(13,"p"),s(14),a(),o(15,"p"),s(16),a(),o(17,"ol"),P(18,Fu,2,1,"li",null,ut),a()()}i&2&&(l(14),S("isEmpty: ",n.exampleSignal.isEmpty().toString(),""),l(2),S("size: ",n.exampleSignal.size().toString(),""),l(2),k(n.exampleSignal()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:3rem}button[_ngcontent-%COMP%]{margin-top:.75rem;margin-right:1rem;padding:0 .125rem}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0;line-height:1.2}"]})}}return e})();var iy={component:ea,html:`<div class="left-side">\r
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
`};var ta=(()=>{class e{constructor(){this.exampleSignal=ar(["Peas","Lettuce","Corn"])}add(t){t&&this.exampleSignal.add(t)}delete(t){t&&this.exampleSignal.delete(t)}update(){this.exampleSignal.update(t=>new Set([...t].map(i=>i.toLowerCase())))}clear(){this.exampleSignal.clear()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["set-signal-basic-example"]],decls:20,vars:3,consts:[["value",""],[1,"left-side"],[1,"inputs"],["type","text","placeholder","Value"],[3,"click"],[1,"right-side"]],template:function(i,n){if(i&1){let d=U();o(0,"div",1)(1,"div",2),b(2,"input",3,0),a(),o(4,"div")(5,"button",4),_("click",function(){D(d);let v=L(3);return E(n.add(v.value))}),s(6,"Add value"),a(),o(7,"button",4),_("click",function(){D(d);let v=L(3);return E(n.delete(v.value))}),s(8,"Delete value"),a(),o(9,"button",4),_("click",function(){return D(d),E(n.clear())}),s(10,"Clear"),a(),o(11,"button",4),_("click",function(){return D(d),E(n.update())}),s(12,"Update (to lowercase)"),a()()(),o(13,"div",5)(14,"p"),s(15),a(),o(16,"p"),s(17),a(),o(18,"p"),s(19),a()()}i&2&&(l(15),S("isEmpty: ",n.exampleSignal.isEmpty().toString(),""),l(2),S("size: ",n.exampleSignal.size().toString(),""),l(2),f(n.exampleSignal.asArray()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:3rem}.inputs[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}input[_ngcontent-%COMP%]{margin-right:.25rem;max-width:10rem}button[_ngcontent-%COMP%]{margin-right:1rem;margin-top:.75rem;padding:0 .125rem}"]})}}return e})();var sy={component:ta,html:`<div class="left-side">\r
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
`};function Mu(e,r){if(e&1&&(o(0,"li"),s(1),a()),e&2){let t=r.$implicit;l(),f(t)}}var ia=(()=>{class e{constructor(){this.exampleSignal=sr(["Pizza","Spaghetti","Tomatoes"])}push(t){t&&this.exampleSignal.push(t)}pop(){this.exampleSignal.pop()}clear(){this.exampleSignal.clear()}update(){this.exampleSignal.update(t=>t.filter(i=>i.length<=5))}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["stack-signal-basic-example"]],decls:20,vars:2,consts:[["pushText",""],[1,"left-side"],["type","text","placeholder","Text to push..."],[3,"click"],[1,"right-side"],["reversed",""]],template:function(i,n){if(i&1){let d=U();o(0,"div",1)(1,"div"),b(2,"input",2,0),a(),o(4,"button",3),_("click",function(){D(d);let v=L(3);return E(n.push(v.value))}),s(5,"Push"),a(),o(6,"button",3),_("click",function(){return D(d),E(n.pop())}),s(7,"Pop"),a(),o(8,"button",3),_("click",function(){return D(d),E(n.clear())}),s(9,"Clear"),a(),o(10,"button",3),_("click",function(){return D(d),E(n.update())}),s(11,"Update (leave only short)"),a()(),o(12,"div",4)(13,"p"),s(14),a(),o(15,"p"),s(16),a(),o(17,"ol",5),P(18,Mu,2,1,"li",null,ut),a()()}i&2&&(l(14),S("isEmpty: ",n.exampleSignal.isEmpty().toString(),""),l(2),S("size: ",n.exampleSignal.size().toString(),""),l(2),k(n.exampleSignal()))},styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:3rem}button[_ngcontent-%COMP%]{margin-top:.75rem;margin-right:1rem;padding:0 .125rem}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0;line-height:1.2}"]})}}return e})();var uy={component:ia,html:`<div class="left-side">\r
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
`};var na=(()=>{class e{constructor(){this.throttledValue=lr("",500)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["throttled-signal-example"]],decls:5,vars:2,consts:[["for","throttled-input"],["type","text","id","throttled-input","placeholder","Search...",3,"ngModelChange","ngModel"]],template:function(i,n){i&1&&(o(0,"label",0),s(1,"What are you looking for?"),a(),o(2,"input",1),$("ngModelChange",function(c){return N(n.throttledValue,c)||(n.throttledValue=c),c}),a(),o(3,"p"),s(4),a()),i&2&&(l(2),j("ngModel",n.throttledValue),l(2),S("Throttled value: ",n.throttledValue(),""))},dependencies:[z,Z,ee,J],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return e})();var vy={component:na,html:`<label for="throttled-input">What are you looking for?</label>\r
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
`};function Pu(e,r){if(e&1&&(o(0,"tr")(1,"td"),s(2),a(),o(3,"td"),s(4),a()()),e&2){let t=r.$implicit;l(2),f(t[0]),l(2),f(t[1])}}var ra=(()=>{class e{constructor(){this.exampleSignal=dr(["Peas",5,!0])}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["tuple-signal-basic-example"]],decls:24,vars:3,consts:[[1,"left-side"],[1,"row"],["type","text",3,"ngModelChange","ngModel"],["type","number",3,"ngModelChange","ngModel"],["type","checkbox",3,"ngModelChange","ngModel"],[1,"right-side"],["width","32"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"div",1)(2,"label"),s(3,"Value at index 0"),a(),o(4,"input",2),_("ngModelChange",function(c){return n.exampleSignal.setAt(0,c)}),a()(),o(5,"div",1)(6,"label"),s(7,"Value at index 1"),a(),o(8,"input",3),_("ngModelChange",function(c){return n.exampleSignal.setAt(1,c)}),a()(),o(9,"div",1)(10,"label"),s(11,"Value at index 2"),a(),o(12,"input",4),_("ngModelChange",function(c){return n.exampleSignal.setAt(2,c)}),a()()(),o(13,"div",5)(14,"table")(15,"thead")(16,"tr")(17,"th",6),s(18,"Key"),a(),o(19,"th"),s(20,"Value"),a()()(),o(21,"tbody"),P(22,Pu,5,2,"tr",null,O),a()()()),i&2&&(l(4),u("ngModel",n.exampleSignal()[0]),l(4),u("ngModel",n.exampleSignal()[1]),l(4),u("ngModel",n.exampleSignal()[2]),l(10),k(n.exampleSignal.entriesArray()))},dependencies:[z,Z,Yi,Qi,ee,J],styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.left-side[_ngcontent-%COMP%]{padding-top:1rem}.row[_ngcontent-%COMP%]{padding:.5rem 0}input[_ngcontent-%COMP%]{max-width:10rem}label[_ngcontent-%COMP%]{padding-bottom:0}"]})}}return e})();var Ty={component:ra,html:`<div class="left-side">\r
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
`};var ku=["exampleBox"],Vu=(e,r,t,i)=>({width:e,height:r,padding:t,borderWidth:i}),oa=(()=>{class e{constructor(){this.width=w("200px"),this.height=w("100px"),this.padding=w("12px 24px"),this.border=w("4px"),this.exampleBox=me("exampleBox"),this._cd=I(Vt)}onScroll(){this._cd.markForCheck()}getBoundingClientRect(){return this.exampleBox().nativeElement.getBoundingClientRect()}getPaddingRect(){return ur(this.exampleBox())}getContentRect(){return pr(this.exampleBox())}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["dom-boxes-example"]],viewQuery:function(i,n){i&1&&he(n.exampleBox,ku,5),i&2&&fe()},hostBindings:function(i,n){i&1&&_("scroll",function(){return n.onScroll()},!1,Ft)("resize",function(){return n.onScroll()},!1,Mi)},decls:54,vars:22,consts:[["exampleBox",""],[1,"inputs"],["for","width"],["type","text","id","width",3,"ngModelChange","ngModel"],["for","height"],["type","text","id","height",3,"ngModelChange","ngModel"],["for","padding"],["type","text","id","padding",3,"ngModelChange","ngModel"],["for","border"],["type","text","id","border",3,"ngModelChange","ngModel"],[1,"example-box",3,"ngStyle"],[1,"values"],[1,"value"]],template:function(i,n){if(i&1){let d=U();o(0,"div",1)(1,"div")(2,"label",2),s(3,"Width"),a(),o(4,"input",3),$("ngModelChange",function(v){return D(d),N(n.width,v)||(n.width=v),E(v)}),a()(),o(5,"div")(6,"label",4),s(7,"Height"),a(),o(8,"input",5),$("ngModelChange",function(v){return D(d),N(n.height,v)||(n.height=v),E(v)}),a()(),o(9,"div")(10,"label",6),s(11,"Padding"),a(),o(12,"input",7),$("ngModelChange",function(v){return D(d),N(n.padding,v)||(n.padding=v),E(v)}),a()(),o(13,"div")(14,"label",8),s(15,"Border"),a(),o(16,"input",9),$("ngModelChange",function(v){return D(d),N(n.border,v)||(n.border=v),E(v)}),a()()(),o(17,"div",10,0),b(19,"div"),a(),o(20,"div",11)(21,"div",12)(22,"strong"),s(23,"Bounding Client Rect"),a(),o(24,"span"),s(25),a(),o(26,"span"),s(27),a(),o(28,"span"),s(29),a(),o(30,"span"),s(31),a()(),o(32,"div",12)(33,"strong"),s(34,"Padding Rect"),a(),o(35,"span"),s(36),a(),o(37,"span"),s(38),a(),o(39,"span"),s(40),a(),o(41,"span"),s(42),a()(),o(43,"div",12)(44,"strong"),s(45,"Content Rect"),a(),o(46,"span"),s(47),a(),o(48,"span"),s(49),a(),o(50,"span"),s(51),a(),o(52,"span"),s(53),a()()()}i&2&&(l(4),j("ngModel",n.width),l(4),j("ngModel",n.height),l(4),j("ngModel",n.padding),l(4),j("ngModel",n.border),l(),u("ngStyle",On(17,Vu,n.width(),n.height(),n.padding(),n.border())),l(8),S("Top: ",n.getBoundingClientRect().top,""),l(2),S("Left: ",n.getBoundingClientRect().left,""),l(2),S("Width: ",n.getBoundingClientRect().width,""),l(2),S("Height: ",n.getBoundingClientRect().height,""),l(5),S("Top: ",n.getPaddingRect().top,""),l(2),S("Left: ",n.getPaddingRect().left,""),l(2),S("Width: ",n.getPaddingRect().width,""),l(2),S("Height: ",n.getPaddingRect().height,""),l(5),S("Top: ",n.getContentRect().top,""),l(2),S("Left: ",n.getContentRect().left,""),l(2),S("Width: ",n.getContentRect().width,""),l(2),S("Height: ",n.getContentRect().height,""))},dependencies:[W,Un,z,Z,ee,J],styles:[".inputs[_ngcontent-%COMP%]{display:grid;grid-template-columns:max-content max-content;grid-template-rows:max-content max-content;gap:1rem 2rem}.example-box[_ngcontent-%COMP%]{margin:2rem 0;background-color:#c3deb7;border:solid #FFEEBC;box-sizing:content-box}.example-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#a0c5e8;height:100%}.values[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,max-content);gap:2rem}.values[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:max-content}"]})}}return e})();var Vy={component:oa,html:`<div class="inputs">\r
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
`};var aa=(()=>{class e{constructor(){this.inputValue=w("How would <b>this</b> text be displayed?")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["escape-html-example"]],decls:13,vars:5,consts:[[3,"ngModelChange","ngModel"],[1,"grid"],[3,"innerHTML"]],template:function(i,n){i&1&&(o(0,"textarea",0),$("ngModelChange",function(c){return N(n.inputValue,c)||(n.inputValue=c),c}),a(),o(1,"div",1)(2,"div")(3,"strong"),s(4,"Unescaped:"),a(),b(5,"br")(6,"p",2),a(),o(7,"div")(8,"strong"),s(9,"Escaped:"),a(),b(10,"br")(11,"p",2),we(12,"escapeHTML"),a()()),i&2&&(j("ngModel",n.inputValue),l(6),u("innerHTML",n.inputValue(),q),l(5),u("innerHTML",He(12,3,n.inputValue()),q))},dependencies:[zn,qn,z,Z,ee,J],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:.5rem}textarea[_ngcontent-%COMP%]{padding:.25rem .375rem;min-height:5em;resize:vertical}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}strong[_ngcontent-%COMP%]{line-height:1.5}"]})}}return e})();var Ny={component:aa,html:`<textarea [(ngModel)]="inputValue"></textarea>\r
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
}`};var sa=(()=>{class e{constructor(){this.file=w(void 0)}onFileUpload(t){this.file.set(t.target.files?.[0])}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["file-pipes-example"]],decls:21,vars:10,consts:[["type","file","id","file",3,"change"],[1,"values"]],template:function(i,n){if(i&1&&(o(0,"input",0),_("change",function(c){return n.onFileUpload(c)}),a(),o(1,"div",1)(2,"strong"),s(3,"Full file name:"),a(),o(4,"span"),s(5),a(),o(6,"strong"),s(7,"File name:"),a(),o(8,"span"),s(9),we(10,"filename"),a(),o(11,"strong"),s(12,"File extension:"),a(),o(13,"span"),s(14),we(15,"fileext"),a(),o(16,"strong"),s(17,"File size:"),a(),o(18,"span"),s(19),we(20,"filesize"),a()()),i&2){let d;l(5),f((d=n.file())==null?null:d.name),l(4),f(He(10,4,n.file())),l(5),f(He(15,6,n.file())),l(5),f(He(20,8,n.file()))}},dependencies:[er,Xn,Zn,Jn],styles:[".values[_ngcontent-%COMP%]{margin-top:1rem;display:grid;grid-template-columns:max-content max-content;gap:.25rem 1rem}"]})}}return e})();var Gy={component:sa,html:`<input type="file" id="file" (change)="onFileUpload($event)">\r
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
`};function Lu(e,r){if(e&1){let t=U();o(0,"button",0),_("click",function(){D(t);let n=m();return E(n.onButtonClick())}),s(1,"Find out"),a()}}function Ru(e,r){e&1&&(o(0,"p"),s(1,"File System API is "),o(2,"strong",1),s(3,"supported"),a(),s(4,"! You can view the below examples."),a())}function Bu(e,r){e&1&&(o(0,"p"),s(1," File System API is "),o(2,"strong",2),s(3,"not supported"),a(),s(4,". You will not be able to correctly view the below examples. See the "),o(5,"a",3),s(6,"caniuse.com page"),a(),s(7,` to find out which browsers are supported.
`),a())}function Ou(e,r){if(e&1&&y(0,Ru,5,0,"p")(1,Bu,8,0,"p"),e&2){let t=m();C(t.isSupported()?0:1)}}var la=(()=>{class e{constructor(){this.fileSystem=I(ht),this.hasClicked=w(!1),this.isSupported=w(!1)}onButtonClick(){this.hasClicked.set(!0),this.isSupported.set(this.fileSystem.isFileSystemAPISupported("showOpenFilePicker"))}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["file-system-is-supported-example"]],decls:5,vars:2,consts:[[3,"click"],[1,"supported"],[1,"not-supported"],["href","https://caniuse.com/native-filesystem-api"]],template:function(i,n){i&1&&(o(0,"p")(1,"span"),s(2,"Does your browser support File System API?"),a(),y(3,Lu,2,0,"button"),a(),y(4,Ou,2,1)),i&2&&(l(3),C(n.hasClicked()?-1:3),l(),C(n.hasClicked()?4:-1))},styles:["button[_ngcontent-%COMP%]{margin-left:1ch}.supported[_ngcontent-%COMP%]{color:green}.not-supported[_ngcontent-%COMP%]{color:#ff4500}"]})}}return e})();var i1={component:la,html:`<p>\r
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
`};function Uu(e,r){if(e&1&&(s(0," Uploaded "),o(1,"i"),s(2),a()),e&2){let t=m();l(2),f(t.fileName())}}function Hu(e,r){e&1&&s(0," File upload request was cancelled. ")}var da=(()=>{class e{constructor(){this.fileSystem=I(ht),this.successfulUpload=w(null),this.fileName=w("")}onButtonClick(){return ne(this,null,function*(){let t=yield this.fileSystem.requestFileUpload({directoryId:"gorilla",startDirectory:Jt.Downloads,method:Zt.PreferFileSystem,multiple:!1,types:[{description:"Text files",accept:{"text/plain":[".txt"]}},{description:"Image files",accept:{"image/png":[".png"],"image/jpeg":[".jpg",".jpeg"]}},{description:"PDF files",accept:{"application/pdf":[".pdf"]}}]});this.successfulUpload.set(!!t),this.successfulUpload()&&this.fileName.set(t?.name??"No file name")})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["file-system-request-upload-example"]],decls:5,vars:1,consts:[[3,"click"]],template:function(i,n){i&1&&(o(0,"button",0),_("click",function(){return n.onButtonClick()}),s(1,"Click here to upload a file"),a(),o(2,"p"),y(3,Uu,3,1)(4,Hu,1,0),a()),i&2&&(l(3),C(n.successfulUpload()===!0?3:n.successfulUpload()===!1?4:-1))},dependencies:[W],encapsulation:2})}}return e})();var p1={component:da,html:`<button (click)="onButtonClick()">Click here to upload a file</button>\r
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
`};var ca=(()=>{class e{constructor(){this.fileSystem=I(ht),this.fileName=w("gorillas.txt"),this.textToSave=w("Gorillas like to eat bamboo.")}onButtonClick(){this.fileSystem.saveAs(this.textToSave(),{fileName:this.fileName(),method:Zt.PreferFileSystem,directoryId:"gorillas",startDirectory:Jt.Downloads})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["file-system-save-as-example"]],decls:4,vars:2,consts:[["type","text",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,n){i&1&&(o(0,"input",0),$("ngModelChange",function(c){return N(n.fileName,c)||(n.fileName=c),c}),a(),o(1,"textarea",1),$("ngModelChange",function(c){return N(n.textToSave,c)||(n.textToSave=c),c}),a(),o(2,"button",2),_("click",function(){return n.onButtonClick()}),s(3,"Save to file"),a()),i&2&&(j("ngModel",n.fileName),l(),j("ngModel",n.textToSave))},dependencies:[W,z,Z,ee,J],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:.5rem;align-items:flex-start}input[_ngcontent-%COMP%]{min-width:200px}textarea[_ngcontent-%COMP%]{min-width:300px;min-height:100px}"]})}}return e})();var y1={component:ca,html:`<input type="text" [(ngModel)]="fileName">\r
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
`};var pa=(()=>{class e{constructor(){this.eventCounter=w(0)}onHoldEvent(){this.eventCounter.update(t=>t+1)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["hold-basic-example"]],decls:4,vars:1,consts:[[3,"ardHold"]],template:function(i,n){i&1&&(o(0,"button",0),_("ardHold",function(){return n.onHoldEvent()}),s(1,"Click and Hold"),a(),o(2,"p"),s(3),a()),i&2&&(l(3),S(" Total events fired: ",n.eventCounter(),`
`))},dependencies:[ti,ei],encapsulation:2})}}return e})();var D1={component:pa,html:`<button (ardHold)="onHoldEvent()">Click and Hold</button>\r
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
`};var ua=(()=>{class e{constructor(){this.eventCounter=w(0)}onHoldEvent(){this.eventCounter.update(t=>t+1)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["hold-timings-example"]],decls:4,vars:1,consts:[["ardHoldDelay","2000","ardHoldRepeat","200",3,"ardHold"]],template:function(i,n){i&1&&(o(0,"button",0),_("ardHold",function(){return n.onHoldEvent()}),s(1,` Click and Hold - but this time very slow
`),a(),o(2,"p"),s(3),a()),i&2&&(l(3),S("Total events fired: ",n.eventCounter(),""))},dependencies:[ti,ei],encapsulation:2})}}return e})();var V1={component:ua,html:`<button (ardHold)="onHoldEvent()" ardHoldDelay="2000" ardHoldRepeat="200">\r
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
`};function ju(e,r){if(e&1&&(o(0,"div"),s(1),a()),e&2){let t=r.$implicit;l(),f(t)}}var ma=(()=>{class e{constructor(){this.currentPage=w(1),this.items=V(()=>new Array(this.currentPage()*5).fill(0).map((t,i)=>i)),this.isInfScrollActive=w(!0)}onThresholdReach(){console.log(`Threshold has been reached! Loading data for page ${this.currentPage()+1}...`),setTimeout(()=>{this.currentPage.update(t=>t+1),this.isInfScrollActive.set(!0)},100)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["infinite-scroll-host-example"]],decls:3,vars:1,consts:[["ardInfScroll","","ardInfScrollTarget","host",1,"scroll-host",3,"ardInfScrollReachThreshold","ardInfScrollActiveChange","ardInfScrollActive"]],template:function(i,n){i&1&&(o(0,"div",0),_("ardInfScrollReachThreshold",function(){return n.onThresholdReach()}),$("ardInfScrollActiveChange",function(c){return N(n.isInfScrollActive,c)||(n.isInfScrollActive=c),c}),P(1,ju,2,1,"div",null,O),a()),i&2&&(j("ardInfScrollActive",n.isInfScrollActive),l(),k(n.items()))},dependencies:[Yn,Gn],styles:[".scroll-host[_ngcontent-%COMP%]{height:50vh;width:50vh;overflow-y:auto;border:1px solid red;margin:0 auto}.scroll-host[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:20vh;border-bottom:1px solid black;position:relative;display:grid;place-items:center;font-size:40px;font-weight:700}"]})}}return e})();var j1={component:ma,html:`<div\r
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
`};var Nu=e=>({"--position":e}),Sn=400,ha=Sn/20,fa=(()=>{class e{constructor(){this.keyboard=I(Ne),this.position=w(Sn/2)}ngOnInit(){this.keyboard.listenToKey("A").subscribe(()=>{this.position()<=0||this.position.update(t=>t-ha)}),this.keyboard.listenToKey("D").subscribe(()=>{this.position()>=Sn||this.position.update(t=>t+ha)})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["keyboard-service-listen-to-key-example"]],decls:10,vars:4,consts:[[1,"square-container"],[1,"square"]],template:function(i,n){i&1&&(o(0,"div",0),b(1,"div",1),a(),o(2,"p"),s(3," Click "),o(4,"ard-kbd"),s(5,"A"),a(),s(6," or "),o(7,"ard-kbd"),s(8,"D"),a(),s(9,` to move the square.
`),a()),i&2&&(l(),Pt(Ie(2,Nu,n.position()+"px")))},dependencies:[re,Se],styles:[".square-container[_ngcontent-%COMP%]{width:450px;border:1px solid var(--ard-detail-light);margin-bottom:1rem}.square[_ngcontent-%COMP%]{width:50px;height:50px;position:relative;left:var(--position);background-color:#9932cc}"]})}}return e})();var G1={component:fa,html:`<div class="square-container">\r
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
`};var ga=(()=>{class e{constructor(){this.keyboard=I(Ne),this.isZeroHeld=w(!1)}ngOnInit(){this.keyboard.listenToKeyState("0").subscribe(({isHeld:t})=>{this.isZeroHeld.set(t)})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["keyboard-service-listen-to-key-state-example"]],decls:5,vars:3,template:function(i,n){i&1&&(o(0,"p"),s(1," The zero key is currently "),o(2,"strong"),s(3),a(),s(4,`.
`),a()),i&2&&(l(2),G(n.isZeroHeld()?"held":"not-held"),l(),f(n.isZeroHeld()?"pressed":"idle"))},dependencies:[re],styles:[".held[_ngcontent-%COMP%]{color:green}.not-held[_ngcontent-%COMP%]{color:red}"]})}}return e})();var nb={component:ga,html:`<p>\r
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
`};function $u(e,r){e&1&&(o(0,"label",1),s(1,"Search"),a(),b(2,"input",2))}var _a=(()=>{class e{constructor(){this.keyboard=I(Ne),this.isOpen=w(!1)}ngOnInit(){this.keyboard.listenToShortcut(["Ctrl","F"]).subscribe(({event:t})=>{t.preventDefault(),this.isOpen.update(i=>!i)}),this.keyboard.listenToShortcut(["ShiftRight","Q"]).subscribe(()=>alert("RightShift + Q was pressed!"))}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["keyboard-service-listen-to-shortcut-example"]],decls:11,vars:1,consts:[["full","false"],["for","example-search-bar"],["type","text","id","example-search-bar"]],template:function(i,n){i&1&&(o(0,"p"),s(1,"Press "),o(2,"ard-kbd-shortcut",0),s(3,"Ctrl+F"),a(),s(4," to toggle a search bar."),a(),o(5,"p"),s(6,"Press "),o(7,"ard-kbd-shortcut",0),s(8,"RightShift+Q"),a(),s(9," to show an alert."),a(),y(10,$u,3,0)),i&2&&(l(10),C(n.isOpen()?10:-1))},dependencies:[St,xt],styles:["input[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return e})();var pb={component:_a,html:`<p>Press <ard-kbd-shortcut full="false">Ctrl+F</ard-kbd-shortcut> to toggle a search bar.</p>\r
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
`};var va=(()=>{class e{constructor(){this.keyboard=I(Ne)}getModifierKeyText(t){return t?"pressed":"idle"}getModifierKeyClass(t){return t?"down":"up"}getLockKeyText(t){return t===void 0?"unknown":t?"active":"inactive"}getLockKeyClass(t){return t===void 0?"unknown":t?"down":"up"}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["keyboard-service-modifier-key-state-example"]],decls:72,vars:42,consts:[[1,"container"],[1,"modifier-table"],["scope","col"],["scope","row"],[1,"not-applicable"],[1,"lock-table"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th",2),s(5,"Key"),a(),o(6,"th",2),s(7,"Left"),a(),o(8,"th",2),s(9,"Right"),a(),o(10,"th",2),s(11,"Any"),a()()(),o(12,"tbody")(13,"tr")(14,"th",3),s(15,"Ctrl"),a(),o(16,"td"),s(17),a(),o(18,"td"),s(19),a(),o(20,"td"),s(21),a()(),o(22,"tr")(23,"th",3),s(24,"Alt"),a(),o(25,"td"),s(26),a(),o(27,"td"),s(28),a(),o(29,"td",4),s(30,"N/A"),a()(),o(31,"tr")(32,"th",3),s(33,"Shift"),a(),o(34,"td"),s(35),a(),o(36,"td"),s(37),a(),o(38,"td"),s(39),a()(),o(40,"tr")(41,"th",3),s(42,"Meta"),a(),o(43,"td"),s(44),a(),o(45,"td"),s(46),a(),o(47,"td"),s(48),a()()()(),o(49,"table",5)(50,"thead")(51,"tr")(52,"th",2),s(53,"Key"),a(),o(54,"th",2),s(55,"State"),a()()(),o(56,"tbody")(57,"tr")(58,"th",3),s(59,"Caps Lock"),a(),o(60,"td"),s(61),a()(),o(62,"tr")(63,"th",3),s(64,"Num Lock"),a(),o(65,"td"),s(66),a()(),o(67,"tr")(68,"th",3),s(69,"Scroll Lock"),a(),o(70,"td"),s(71),a()()()()()),i&2&&(l(16),G(n.getModifierKeyClass(n.keyboard.isLeftCtrlHeld())),l(),f(n.getModifierKeyText(n.keyboard.isLeftCtrlHeld())),l(),G(n.getModifierKeyClass(n.keyboard.isRightCtrlHeld())),l(),f(n.getModifierKeyText(n.keyboard.isRightCtrlHeld())),l(),G(n.getModifierKeyClass(n.keyboard.isCtrlHeld())),l(),f(n.getModifierKeyText(n.keyboard.isCtrlHeld())),l(4),G(n.getModifierKeyClass(n.keyboard.isAltHeld())),l(),f(n.getModifierKeyText(n.keyboard.isAltHeld())),l(),G(n.getModifierKeyClass(n.keyboard.isAltGraphHeld())),l(),f(n.getModifierKeyText(n.keyboard.isAltGraphHeld())),l(6),G(n.getModifierKeyClass(n.keyboard.isLeftShiftHeld())),l(),f(n.getModifierKeyText(n.keyboard.isLeftShiftHeld())),l(),G(n.getModifierKeyClass(n.keyboard.isRightShiftHeld())),l(),f(n.getModifierKeyText(n.keyboard.isRightShiftHeld())),l(),G(n.getModifierKeyClass(n.keyboard.isShiftHeld())),l(),f(n.getModifierKeyText(n.keyboard.isShiftHeld())),l(4),G(n.getModifierKeyClass(n.keyboard.isLeftMetaHeld())),l(),f(n.getModifierKeyText(n.keyboard.isLeftMetaHeld())),l(),G(n.getModifierKeyClass(n.keyboard.isRightMetaHeld())),l(),f(n.getModifierKeyText(n.keyboard.isRightMetaHeld())),l(),G(n.getModifierKeyClass(n.keyboard.isMetaHeld())),l(),f(n.getModifierKeyText(n.keyboard.isMetaHeld())),l(12),G(n.getLockKeyClass(n.keyboard.capsLockState())),l(),f(n.getLockKeyText(n.keyboard.capsLockState())),l(4),G(n.getLockKeyClass(n.keyboard.numLockState())),l(),f(n.getLockKeyText(n.keyboard.numLockState())),l(4),G(n.getLockKeyClass(n.keyboard.scrollLockState())),l(),f(n.getLockKeyText(n.keyboard.scrollLockState())))},dependencies:[re],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:1.75rem}table[_ngcontent-%COMP%]{table-layout:fixed;width:max-content}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:.25rem .5rem;border-collapse:collapse;border:1px solid var(--ard-detail)}th[_ngcontent-%COMP%]{font-weight:600;background-color:var(--ard-bg-filled)}td[_ngcontent-%COMP%]{font-weight:500}.down[_ngcontent-%COMP%]{color:green}.up[_ngcontent-%COMP%]{color:red}.unknown[_ngcontent-%COMP%]{font-weight:400;font-style:italic}.not-applicable[_ngcontent-%COMP%]{font-weight:400}.modifier-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{width:8.1ch}.modifier-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-of-type{width:6ch}.lock-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-of-type{width:8.75ch}"]})}}return e})();var Cb={component:va,html:`<div class="container">\r
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
`};var Ku=["targetBox"];function Wu(e,r){if(e&1&&(o(0,"tr")(1,"th",4),s(2,"Left"),a(),o(3,"td"),s(4),a(),o(5,"td"),s(6),a()(),o(7,"tr")(8,"th",4),s(9,"Right"),a(),o(10,"td"),s(11),a(),o(12,"td"),s(13),a()(),o(14,"tr")(15,"th",4),s(16,"Top"),a(),o(17,"td"),s(18),a(),o(19,"td"),s(20),a()(),o(21,"tr")(22,"th",4),s(23,"Bottom"),a(),o(24,"td"),s(25),a(),o(26,"td"),s(27),a()()),e&2){let t,i,n,d,c,v,H,te,oe=m();l(4),f((t=oe.lastEventData())==null?null:t.left),l(2),f((i=oe.lastEventData())==null?null:i.overflowsLeft),l(5),f((n=oe.lastEventData())==null?null:n.right),l(2),f((d=oe.lastEventData())==null?null:d.overflowsRight),l(5),f((c=oe.lastEventData())==null?null:c.top),l(2),f((v=oe.lastEventData())==null?null:v.overflowsTop),l(5),f((H=oe.lastEventData())==null?null:H.bottom),l(2),f((te=oe.lastEventData())==null?null:te.overflowsBottom)}}function qu(e,r){e&1&&(o(0,"tr")(1,"th",4),s(2,"Left"),a(),o(3,"td",5),s(4,"Waiting for events..."),a()(),o(5,"tr")(6,"th",4),s(7,"Right"),a()(),o(8,"tr")(9,"th",4),s(10,"Top"),a()(),o(11,"tr")(12,"th",4),s(13,"Bottom"),a()())}var Ca=(()=>{class e{constructor(){this.lastEventData=w(null),this.targetBox=me("targetBox")}onClick(t){this.targetBox()&&this.lastEventData.set(mr(t,this.targetBox()))}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["relative-pos-basic-example"]],viewQuery:function(i,n){i&1&&he(n.targetBox,Ku,5),i&2&&fe()},hostBindings:function(i,n){i&1&&_("click",function(c){return n.onClick(c)},!1,Ft)},decls:18,vars:1,consts:[["targetBox",""],[1,"container"],[1,"target-box"],["scope","col"],["scope","row"],["colspan","2","rowspan","4",1,"waiting"]],template:function(i,n){i&1&&(o(0,"p"),s(1,` Click anywhere to show the click position relative to the target box.
`),a(),o(2,"div",1)(3,"div",2,0),s(5,"Target box"),a(),o(6,"table")(7,"thead")(8,"tr")(9,"th",3),s(10,"Direction"),a(),o(11,"th",3),s(12,"Relative pos"),a(),o(13,"th",3),s(14,"Overflows?"),a()()(),o(15,"tbody"),y(16,Wu,28,8)(17,qu,14,0),a()()()),i&2&&(l(16),C(n.lastEventData()?16:17))},styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:1.75rem}.target-box[_ngcontent-%COMP%]{width:150px;height:100px;background-color:salmon;display:grid;place-items:center}table[_ngcontent-%COMP%]{table-layout:fixed;width:max-content}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:.25rem .5rem;border-collapse:collapse;border:1px solid var(--ard-detail)}th[_ngcontent-%COMP%]{font-weight:600;background-color:var(--ard-bg-filled)}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-of-type{width:6ch}"]})}}return e})();var Db={component:Ca,html:`<p>\r
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
`};var zu=["item"];function Qu(e,r){if(e&1){let t=U();o(0,"div",4)(1,"code"),s(2,"viewportRelation"),a(),o(3,"span"),s(4),a(),o(5,"code"),s(6,"isInViewport"),a(),o(7,"span"),s(8),a(),o(9,"code"),s(10,"position.top"),a(),o(11,"span"),s(12),we(13,"number"),a(),o(14,"code"),s(15,"position.bottom"),a(),o(16,"span"),s(17),we(18,"number"),a(),b(19,"div"),o(20,"button",3),_("click",function(){D(t);let n=m();return E(n.toggleOverlay())}),s(21,"Close"),a()()}if(e&2){let t,i,n,d,c=m();l(4),f((t=c.observerRef())==null?null:t.viewportRelation()),l(4),f((i=c.observerRef())==null?null:i.isInViewport()),l(4),f(kt(13,4,(n=c.observerRef())==null||(n=n.position())==null?null:n.top,"1.5-5")),l(5),f(kt(18,7,(d=c.observerRef())==null||(d=d.position())==null?null:d.bottom,"1.5-5"))}}var ya=(()=>{class e{constructor(){this.vss=I($n),this.isOverlayActive=w(!1),this.element=me("item"),this.observerRef=w(null)}toggleOverlay(){this.isOverlayActive.update(t=>!t)}ngAfterViewInit(){let t=this.element();t&&this.observerRef.set(this.vss.observeElement(t))}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=p({type:e,selectors:[["viewport-observer-observer-ref-example"]],viewQuery:function(i,n){i&1&&he(n.element,zu,5),i&2&&fe()},decls:7,vars:1,consts:[["item",""],[1,"container"],[1,"item"],[3,"click"],[1,"overlay"]],template:function(i,n){if(i&1){let d=U();o(0,"div",1)(1,"div",2,0),s(3,"Observed element"),a(),o(4,"button",3),_("click",function(){return D(d),E(n.toggleOverlay())}),s(5,"Toggle overlay"),a()(),y(6,Qu,22,10,"div",4)}i&2&&(l(6),C(n.isOverlayActive()?6:-1))},dependencies:[Ui],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:space-around}.item[_ngcontent-%COMP%]{height:150px;width:225px;background-color:#deb887;display:grid;place-items:center}.overlay[_ngcontent-%COMP%]{position:fixed;top:5rem;left:20rem;z-index:9;padding:1.5rem;background-color:var(--ard-bg);border:1px solid var(--ard-border);display:grid;grid-template-columns:max-content 12ch;gap:.5rem}"]})}}return e})();var Lb={component:ya,html:`<div class="container">\r
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
`};export{xo as a,ge as b,kh as c,Vh as d,hf as e,ff as f,co as g,Tt as h,kf as i,Ni as j,At as k,Xe as l,Ze as m,Je as n,_o as o,k0 as p,V0 as q,j0 as r,De as s,Si as t,a_ as u,m_ as v,w_ as w,F_ as x,L_ as y,H_ as z,z_ as A,Z_ as B,nv as C,lv as D,fv as E,Tv as F,kv as G,Nv as H,qv as I,Xv as J,iC as K,lC as L,mC as M,CC as N,wC as O,MC as P,OC as Q,KC as R,XC as S,iy as T,sy as U,uy as V,vy as W,Ty as X,Vy as Y,Ny as Z,Gy as _,i1 as $,p1 as aa,y1 as ba,D1 as ca,V1 as da,j1 as ea,G1 as fa,nb as ga,pb as ha,Cb as ia,Db as ja,Lb as ka};
