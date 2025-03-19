import{$ as Ft,$a as Oi,A as ye,Aa as A,Ab as Kn,B as T,Ba as U,Bb as Wn,C as Di,Ca as H,Cb as zn,D as yn,Da as j,Db as qn,E as W,Ea as tt,Eb as Qn,F as Kt,Fa as it,Fb as je,G as Ei,Gb as Ne,H as Et,Ha as Ee,Hb as Jt,I as l,Ia as _e,Ib as Gn,J as q,Ja as ki,Jb as Yn,K as Ii,Ka as Fn,Kb as Xn,L as Le,La as we,Lb as Zn,M as Wt,Ma as Ue,Mb as Jn,N as me,Na as Mt,O as bn,Oa as Ae,P as et,Pa as Pt,Q as c,Qa as zt,R as de,Ra as F,S as X,Sa as nt,T as Fi,Ta as Re,U as ue,Ua as Vi,V as xn,Va as Li,W as v,Wa as rt,X as Sn,Xa as Mn,Y as It,Ya as ot,Z as p,Za as Ri,_ as oe,_a as K,a as gn,aa as Q,b as _n,ba as _,bb as Pn,c as Si,ca as L,cb as kn,d as wt,da as Tn,db as qt,e as lt,ea as k,eb as Vn,f as vn,fa as V,fb as Qt,g as Je,ga as o,gb as ct,h as $t,ha as a,i as At,ia as y,ib as Ie,j as Cn,ja as Mi,jb as Ln,k as Ti,ka as Pi,kb as Bi,la as wn,lb as Gt,m as wi,ma as z,mb as Yt,n as Dt,na as w,nb as pt,o as ke,oa as u,ob as He,p as le,pa as P,pb as Rn,q as S,qa as M,qb as On,r as D,ra as An,rb as Bn,s as Ai,sa as Dn,sb as Un,t as O,ta as En,tb as Hn,u as B,ua as In,ub as be,va as he,vb as jn,w as Ve,wa as fe,wb as Xt,x as dt,xa as $,xb as Zt,y as Ce,ya as s,yb as Nn,z as h,za as g,zb as $n}from"./chunk-KS3TIRFP.js";import{a as f,b as E,c as Nt,d as Tt,e as te}from"./chunk-FDERIQAA.js";var Gi=Nt(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.approximate=G.APPROXIMATION_UNITS=G.roundToMultiple=G.roundToPrecision=G.roundFromZero=G.roundToZero=G.roundDown=G.roundUp=G.round=void 0;function Ki(e){return Math.round(e)}G.round=Ki;function Wi(e){return Math.ceil(e)}G.roundUp=Wi;function zi(e){return Math.floor(e)}G.roundDown=zi;function qi(e){return e<=0?Math.ceil(e):Math.floor(e)}G.roundToZero=qi;function Qi(e){return e>=0?Math.ceil(e):Math.floor(e)}G.roundFromZero=Qi;function ft(e,n=1,t="normal"){switch(n=10**n,t){case"normal":return Ki(e*n)/n;case"up":return Wi(e*n)/n;case"down":return zi(e*n)/n;case"to_zero":return qi(e*n)/n;case"from_zero":return Qi(e*n)/n}}G.roundToPrecision=ft;function Ia(e,n,t="normal"){switch(t){case"normal":return Ki(e/n)*n;case"up":return Wi(e/n)*n;case"down":return zi(e/n)*n;case"to_zero":return qi(e/n)*n;case"from_zero":return Qi(e/n)*n}}G.roundToMultiple=Ia;G.APPROXIMATION_UNITS={k:1e3,M:1e6,B:1e9,T:1e12,Qa:1e15,Qi:1e18,Sx:1e21,Sp:1e24,Oc:1e27,No:1e30,Dc:1e33};function Fa(e,n=1,t,i,r,d=!0){var m;if(!t){let J=Object.keys(G.APPROXIMATION_UNITS);for(let re=0;re<J.length;re++){let Ze=J[re],C=G.APPROXIMATION_UNITS[Ze],I=e/C;if(I>=1&&I<1e3)return i?ft(I,n).toLocaleString(i)+(d?" ":"")+Ze:String(ft(I,n))+(d?" ":"")+Ze}return String(ft(e,n).toLocaleString(i))}let b=G.APPROXIMATION_UNITS[t],R=(m=r?.[t])!==null&&m!==void 0?m:t;return i?ft(e/b,n).toLocaleString(i)+(d?" ":"")+R:String(ft(e/b,n))+(d?" ":"")+R}G.approximate=Fa});var Sr=Nt(ai=>{"use strict";Object.defineProperty(ai,"__esModule",{value:!0});ai.resolvePath=void 0;var br=/((?:\??\.|(?:\?\.)?\[).*$|$)/.source,Oa=new RegExp(/^([\w$]+)/.source+br),Ba=new RegExp(/^\[(?:(-?\d+(?:\.\d+)?)|(['"`])(.*?)\2)\](?=\??\.|\[(?:(?:-?\d+(?:\.\d+)?)|(['"`]).*?\4)|$)/.source+br);function Ua(e,n){if(typeof e!="object")throw new TypeError("Expected object argument to be an object, got "+typeof e);if(typeof n!="string")throw new TypeError("Expected path argument to be a string, got "+typeof n);return xr(e,n)}ai.resolvePath=Ua;function xr(e,n,t=n){if(!n)return e;let i;if([i,n]=Ha(n,t),e.hasOwnProperty(i))return xr(e[i],n,t)}function Ha(e,n){let t,i,r=e.match(Oa);if(r)return t=r[1],i=yr(r[2]),[t,i];if(r=e.match(Ba),r)return t=r[1]?ja(r[1]):r[3],i=yr(r[5]),[t,i];throw new Error("Object path is invalid: "+n)}function yr(e){return e.charAt(0)=="."?e.slice(1):e.charAt(0)=="?"?e.slice(2):e}function ja(e){return isNaN(Number(e))?e:Number(e)}});var wr=Nt(gt=>{"use strict";Object.defineProperty(gt,"__esModule",{value:!0});gt.TakeChance=void 0;function Na(e=0,n=100){let t=new Uint32Array(1);crypto.getRandomValues(t);let i=t[0]/4294967296;return e=Math.ceil(e),n=Math.floor(n),Math.floor(i*(n-e+1))+e}function Ji(e=0,n=1){return Math.random()*(n-e)+e}function $e(e=0,n=100){return Math.round(Ji(e,n))}function $a(e=.5){return Math.random()<e}function Ka(e,n=0,t=100){let i=[];for(let r=0;r<e;r++)i.push($e(n,t));return i}function Wa(e,n=0,t=1){let i=[];for(let r=0;r<e;r++)i.push(Ji(n,t));return i}function Tr(e=0,n=1,t=1){if(t<=0)throw new Error("Skew cannot be lower than or equal to 0");let i=0,r=0;for(;i===0;)i=Math.random();for(;r===0;)r=Math.random();let d=Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*r);return d=d/10+.5,d>1||d<0?d=Tr(e,n,t):(d=Math.pow(d,t),d*=n-e,d+=e),d}function en(e,n=0,t=e.length-1){return n<0&&(n=0),t>e.length-1&&(t=e.length-1),e[$e(n,t)]}function za(e){let n=Object.keys(e);return en(n)}function si(e){var n;typeof e.from=="string"&&(e.from=e.from.split(""));let t=(n=e.from)!==null&&n!==void 0?n:[];return(e.letters||e.lowercase)&&t.push(..."abcdefghijklmnopqrstuvwxyz".split("")),(e.letters||e.uppercase)&&t.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")),e.numbers&&t.push(..."0123456789".split("")),e.special&&t.push(..."!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("")),t=[...new Set(t)],en(t)}function tn(e,n){let t="";for(let i=0;i<e;i++)t+=si(n);return t}function qa(e,n=new Date(Date.now())){return new Date($e(e.valueOf(),n.valueOf()))}function Qa(e=10){let n="";do n=si({letters:!0,numbers:!0,from:"-_"});while(n<="9"||n=="_");for(let t=1;t<e;t++)n+=si({letters:!0,numbers:!0,from:"-_"});return n}function Ga(e=16){var n,t,i,r,d,m,b,R;let J="";do J=tn(e,{letters:!0,numbers:!0,special:!0});while(((t=(n=J.match(/[a-z]/g))===null||n===void 0?void 0:n.length)!==null&&t!==void 0?t:0)<e/4||((r=(i=J.match(/[A-Z]/g))===null||i===void 0?void 0:i.length)!==null&&r!==void 0?r:0)<e/4||((m=(d=J.match(/[0-9]/g))===null||d===void 0?void 0:d.length)!==null&&m!==void 0?m:0)<e/6||((R=(b=J.match(/[!"#$%&'()*+,\-./:;<=>?@[\\]\^_`{|}~]/g))===null||b===void 0?void 0:b.length)!==null&&R!==void 0?R:0)<e/8);return J}function Ya(e=6){return $e(1,e)}function Xa(){return{r:$e(0,255),g:$e(0,255),b:$e(0,255)}}function Za(){return"#"+tn(6,{numbers:!0,from:"abcdef"})}gt.TakeChance={int:$e,secureInt:Na,float:Ji,multipleInt:Ka,multipleFloat:Wa,boolean:$a,binomial:Tr,character:si,string:tn,fromArray:en,fromObject:za,date:qa,id:Qa,password:Ga,die:Ya,rgbColor:Xa,hexColor:Za};gt.default=gt.TakeChance});var Yr=Nt((Gr,fi)=>{"use strict";(function(){"use strict";var e=function(C,I){return I=I||"",C.replace(/(^|-)/g,"$1\\u"+I).replace(/,/g,"\\u"+I)},n=e("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7","00"),t="a-z"+e("DF-F6,F8-FF","00"),i="A-Z"+e("C0-D6,D8-DE","00"),r="A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via",d=function(C,I,N,ee){return C=C||n,I=I||t,N=N||i,ee=ee||r,{capitalize:new RegExp("(^|["+C+"])(["+I+"])","g"),pascal:new RegExp("(^|["+C+"])+(["+I+N+"])","g"),fill:new RegExp("["+C+"]+(.|$)","g"),sentence:new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")(['+I+"])","g"),improper:new RegExp("\\b("+ee+")\\b","g"),relax:new RegExp("([^"+N+"])(["+N+"]*)(["+N+"])(?=[^"+N+"]|$)","g"),upper:new RegExp("^[^"+I+"]+$"),hole:/[^\s]\s[^\s]/,apostrophe:/'/g,room:new RegExp("["+C+"]")}},m=d(),b={re:m,unicodes:e,regexps:d,types:[],up:String.prototype.toUpperCase,low:String.prototype.toLowerCase,cap:function(C){return b.up.call(C.charAt(0))+C.slice(1)},decap:function(C){return b.low.call(C.charAt(0))+C.slice(1)},deapostrophe:function(C){return C.replace(m.apostrophe,"")},fill:function(C,I,N){return I!=null&&(C=C.replace(m.fill,function(ee,Te){return Te?I+Te:""})),N&&(C=b.deapostrophe(C)),C},prep:function(C,I,N,ee){if(C=C==null?"":C+"",!ee&&m.upper.test(C)&&(C=b.low.call(C)),!I&&!m.hole.test(C)){var Te=b.fill(C," ");m.hole.test(Te)&&(C=Te)}return!N&&!m.room.test(C)&&(C=C.replace(m.relax,b.relax)),C},relax:function(C,I,N,ee){return I+" "+(N?N+" ":"")+ee}},R={_:b,of:function(C){for(var I=0,N=b.types.length;I<N;I++)if(R[b.types[I]].apply(R,arguments)===C)return b.types[I]},flip:function(C){return C.replace(/\w/g,function(I){return(I==b.up.call(I)?b.low:b.up).call(I)})},random:function(C){return C.replace(/\w/g,function(I){return(Math.round(Math.random())?b.up:b.low).call(I)})},type:function(C,I){R[C]=I,b.types.push(C)}},J={lower:function(C,I,N){return b.fill(b.low.call(b.prep(C,I)),I,N)},snake:function(C){return R.lower(C,"_",!0)},constant:function(C){return R.upper(C,"_",!0)},camel:function(C){return b.decap(R.pascal(C))},kebab:function(C){return R.lower(C,"-",!0)},upper:function(C,I,N){return b.fill(b.up.call(b.prep(C,I,!1,!0)),I,N)},capital:function(C,I,N){return b.fill(b.prep(C).replace(m.capitalize,function(ee,Te,St){return Te+b.up.call(St)}),I,N)},header:function(C){return R.capital(C,"-",!0)},pascal:function(C){return b.fill(b.prep(C,!1,!0).replace(m.pascal,function(I,N,ee){return b.up.call(ee)}),"",!0)},title:function(C){return R.capital(C).replace(m.improper,function(I,N,ee,Te){return ee>0&&ee<Te.lastIndexOf(" ")?b.low.call(I):I})},sentence:function(C,I,N){return C=R.lower(C).replace(m.sentence,function(ee,Te,St){return Te+b.up.call(St)}),I&&I.forEach(function(ee){C=C.replace(new RegExp("\\b"+R.lower(ee)+"\\b","g"),b.cap)}),N&&N.forEach(function(ee){C=C.replace(new RegExp("(\\b"+R.lower(ee)+"\\. +)(\\w)"),function(Te,St,Zo){return St+b.low.call(Zo)})}),C}};J.squish=J.pascal,R.default=R;for(var re in J)R.type(re,J[re]);var Ze=typeof Ze=="function"?Ze:function(){};Ze(typeof fi=="object"&&fi.exports?fi.exports=R:this.Case=R)}).call(Gr)});Array.prototype.last=function(e,n){return e==null?this[this.length-1]:e==1?this.filter(n??(()=>!0)).last():this.filter(n??(()=>!0)).slice(-e)};Array.prototype.first=function(e,n){return e==null?this[0]:e==1?this.filter(n??(()=>!0))[0]:this.filter(n??(()=>!0)).slice(0,e)};var sr=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||e)(q(Le),q(ye))};static \u0275dir=X({type:e})}return e})(),ea=(()=>{class e extends sr{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Ve(e)))(r||e)}})();static \u0275dir=X({type:e,features:[ue]})}return e})(),ri=new S("");var ta={provide:ri,useExisting:Dt(()=>Z),multi:!0};function ia(){let e=Vi()?Vi().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var na=new S(""),Z=(()=>{class e extends sr{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!ia())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||e)(q(Le),q(ye),q(na,8))};static \u0275dir=X({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&w("input",function(m){return r._handleInput(m.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(m){return r._compositionEnd(m.target.value)})},standalone:!1,features:[tt([ta]),ue]})}return e})();var ra=new S(""),oa=new S("");function lr(e){return e!=null}function dr(e){return Sn(e)?wt(e):e}function cr(e){let n={};return e.forEach(t=>{n=t!=null?f(f({},n),t):n}),Object.keys(n).length===0?null:n}function pr(e,n){return n.map(t=>t(e))}function aa(e){return!e.validate}function ur(e){return e.map(n=>aa(n)?n:t=>n.validate(t))}function sa(e){if(!e)return null;let n=e.filter(lr);return n.length==0?null:function(t){return cr(pr(t,n))}}function mr(e){return e!=null?sa(ur(e)):null}function la(e){if(!e)return null;let n=e.filter(lr);return n.length==0?null:function(t){let i=pr(t,n).map(dr);return $t(i).pipe(Je(cr))}}function hr(e){return e!=null?la(ur(e)):null}function er(e,n){return e===null?[n]:Array.isArray(e)?[...e,n]:[e,n]}function da(e){return e._rawValidators}function ca(e){return e._rawAsyncValidators}function Ui(e){return e?Array.isArray(e)?e:[e]:[]}function ti(e,n){return Array.isArray(e)?e.includes(n):e===n}function tr(e,n){let t=Ui(n);return Ui(e).forEach(r=>{ti(t,r)||t.push(r)}),t}function ir(e,n){return Ui(n).filter(t=>!ti(e,t))}var ii=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=mr(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=hr(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}},Hi=class extends ii{name;get formDirective(){return null}get path(){return null}},Ot=class extends ii{_parent=null;name=null;valueAccessor=null},ji=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},pa={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Lu=E(f({},pa),{"[class.ng-submitted]":"isSubmitted"}),ae=(()=>{class e extends ji{constructor(t){super(t)}static \u0275fac=function(i){return new(i||e)(q(Ot,2))};static \u0275dir=X({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&oe("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[ue]})}return e})();var kt="VALID",ei="INVALID",ut="PENDING",Vt="DISABLED",ht=class{},ni=class extends ht{value;source;constructor(n,t){super(),this.value=n,this.source=t}},Lt=class extends ht{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t}},Rt=class extends ht{touched;source;constructor(n,t){super(),this.touched=n,this.source=t}},mt=class extends ht{status;source;constructor(n,t){super(),this.status=n,this.source=t}};function ua(e){return(oi(e)?e.validators:e)||null}function ma(e){return Array.isArray(e)?mr(e):e||null}function ha(e,n){return(oi(n)?n.asyncValidators:e)||null}function fa(e){return Array.isArray(e)?hr(e):e||null}function oi(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var Ni=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return nt(this.statusReactive)}set status(n){nt(()=>this.statusReactive.set(n))}_status=F(()=>this.statusReactive());statusReactive=T(void 0);get valid(){return this.status===kt}get invalid(){return this.status===ei}get pending(){return this.status==ut}get disabled(){return this.status===Vt}get enabled(){return this.status!==Vt}errors;get pristine(){return nt(this.pristineReactive)}set pristine(n){nt(()=>this.pristineReactive.set(n))}_pristine=F(()=>this.pristineReactive());pristineReactive=T(!0);get dirty(){return!this.pristine}get touched(){return nt(this.touchedReactive)}set touched(n){nt(()=>this.touchedReactive.set(n))}_touched=F(()=>this.touchedReactive());touchedReactive=T(!1);get untouched(){return!this.touched}_events=new gn;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(tr(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(tr(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(ir(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(ir(n,this._rawAsyncValidators))}hasValidator(n){return ti(this._rawValidators,n)}hasAsyncValidator(n){return ti(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsTouched(E(f({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new Rt(!0,i))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,i),t&&n.emitEvent!==!1&&this._events.next(new Rt(!1,i))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsDirty(E(f({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new Lt(!1,i))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n,i),t&&n.emitEvent!==!1&&this._events.next(new Lt(!0,i))}markAsPending(n={}){this.status=ut;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new mt(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.markAsPending(E(f({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=Vt,this.errors=null,this._forEachChild(r=>{r.disable(E(f({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ni(this.value,i)),this._events.next(new mt(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(E(f({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=kt,this._forEachChild(i=>{i.enable(E(f({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(E(f({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,t){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===kt||this.status===ut)&&this._runAsyncValidator(i,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ni(this.value,t)),this._events.next(new mt(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(E(f({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Vt:kt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=ut,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=dr(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(n,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new mt(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,i)}_initObservables(){this.valueChanges=new dt,this.statusChanges=new dt}_calculateStatus(){return this._allControlsDisabled()?Vt:this.errors?ei:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ut)?ut:this._anyControlsHaveStatus(ei)?ei:kt}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!n.onlySelf&&this._parent._updatePristine(n,t),r&&this._events.next(new Lt(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new Rt(this.touched,t)),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,t)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){oi(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){let t=this._parent&&this._parent.dirty;return!n&&!!t&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=ma(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=fa(this._rawAsyncValidators)}};var fr=new S("",{providedIn:"root",factory:()=>$i}),$i="always";function ga(e,n){return[...n.path,e]}function _a(e,n,t=$i){Ca(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(e.disabled),ya(e,n),xa(e,n),ba(e,n),va(e,n)}function nr(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function va(e,n){if(n.valueAccessor.setDisabledState){let t=i=>{n.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function Ca(e,n){let t=da(e);n.validator!==null?e.setValidators(er(t,n.validator)):typeof t=="function"&&e.setValidators([t]);let i=ca(e);n.asyncValidator!==null?e.setAsyncValidators(er(i,n.asyncValidator)):typeof i=="function"&&e.setAsyncValidators([i]);let r=()=>e.updateValueAndValidity();nr(n._rawValidators,r),nr(n._rawAsyncValidators,r)}function ya(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&gr(e,n)})}function ba(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&gr(e,n),e.updateOn!=="submit"&&e.markAsTouched()})}function gr(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function xa(e,n){let t=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function Sa(e,n){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function Ta(e){return Object.getPrototypeOf(e.constructor)===ea}function wa(e,n){if(!n)return null;Array.isArray(n);let t,i,r;return n.forEach(d=>{d.constructor===Z?t=d:Ta(d)?i=d:r=d}),r||i||t||null}function rr(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function or(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var Aa=class extends Ni{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,t,i){super(ua(t),ha(i,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),oi(t)&&(t.nonNullable||t.initialValueIsDefault)&&(or(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){rr(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){rr(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){or(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var Da={provide:Ot,useExisting:Dt(()=>ie)},ar=Promise.resolve(),ie=(()=>{class e extends Ot{_changeDetectorRef;callSetDisabledState;control=new Aa;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new dt;constructor(t,i,r,d,m,b){super(),this._changeDetectorRef=m,this.callSetDisabledState=b,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=wa(this,d)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Sa(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){_a(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){ar.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&zt(i);ar.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?ga(t,this._parent):[t]}static \u0275fac=function(i){return new(i||e)(q(Hi,9),q(ra,10),q(oa,10),q(ri,10),q(Pt,8),q(fr,8))};static \u0275dir=X({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[tt([Da]),ue,Ai]})}return e})();var Ea=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=de({type:e});static \u0275inj=le({})}return e})();var Y=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:fr,useValue:t.callSetDisabledState??$i}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=de({type:e});static \u0275inj=le({imports:[Ea]})}return e})();var La=Tt(Gi(),1);var Ma=[{keys:["tab"],result:"Tab \u21B9"},{keys:["enter"],result:"\u21B5 Enter"},{keys:["space"],result:["\u23B5","Space"]},{keys:["home"],result:"Home"},{keys:["end"],result:"End"},{keys:["minus"],result:["-","Minus"]},{keys:["equal"],result:["=","Equal"]},{keys:["bracketleft"],result:["[","Left Bracket"]},{keys:["bracketright"],result:["]","Right Bracket"]},{keys:["backslash"],result:["\\","Backslash"]},{keys:["semicolon"],result:[";","Semicolon"]},{keys:["quote"],result:["'","Quote"]},{keys:["comma"],result:[",","Comma"]},{keys:["period"],result:[".","Period"]},{keys:["slash"],result:["/","Slash"]},{keys:["backquote"],result:["`","Backquote"]},{keys:["arrowleft","left"],result:["\u2190","\u2190 Left"]},{keys:["arrowright","right"],result:["\u2192","\u2192 Right"]},{keys:["arrowup","up"],result:["\u2191","\u2191 Up"]},{keys:["arrowdown","down"],result:["\u2193","\u2193 Down"]},{keys:["capslock","caps"],result:"Caps Lock"},{keys:["numlock","num"],result:"Num Lock"},{keys:["shift","leftshift","shiftleft"],result:"Shift"},{keys:["shift","rightshift","shiftright"],result:"Right Shift"},{keys:["ctrl","control","leftctrl","ctrlleft","leftcontrol","controlleft"],result:["Ctrl","Control"]},{keys:["ctrl","control","rightctrl","ctrlright","rightcontrol","controlright"],result:["Right Ctrl","Right Control"]},{keys:["cmd","command"],result:["Cmd","Command"]},{keys:["option","opt"],result:["Opt","Option"]},{keys:["alt","leftalt","altleft"],result:"Alt"},{keys:["altgraph","altgr","rightalt","altright"],result:["Alt Gr","Alt Graph"]},{keys:["escape","esc"],result:["Esc","Escape"]},{keys:["insert","ins"],result:["Ins","Insert"]},{keys:["delete","del"],result:["Del","Delete"]},{keys:["windows","win","leftmeta","metaleft"],result:["\u229E Win","\u229E Windows"]},{keys:["menu","contextmenu"],result:"\u25A4 Menu"},{keys:["backspace","back","bcksp"],result:["Bcksp","Backspace"]},{keys:["printscreen","printsc","prtsc"],result:["Prt Sc","Print Screen"]},{keys:["numpaddivide","divide"],result:["Numpad /","Divide"]},{keys:["numpadmultiply","multiply"],result:["Numpad *","Multiply"]},{keys:["numpadadd","add"],result:["Numpad +","Add"]},{keys:["numpadsubstract","substract"],result:["Numpad -","Substract"]},{keys:["numpaddecimal","decimal"],result:["Numpad .","Decimal"]},{keys:["numpadenter"],result:"\u21B5 Numpad Enter"},{keys:["audiovolumemute","audiomute","volumemute","mute"],result:["Vol. Mute","Audio Volume Mute"]},{keys:["audiovolumedown","volumedown"],result:["Vol. Down","Audio Volume Down"]},{keys:["audiovolumeup","volumeup"],result:["Vol. Up","Audio Volume Up"]},{keys:["pagedown","pgdown"],result:["Pg Down","Page Down"]},{keys:["pageup","pgup"],result:["Pg Up","Page Up"]}],Pa=Ma.reduce((e,n)=>{for(let t of n.keys)e[t]=n.result;return e},{}),ka="abcdefghijklmnopqrstuvwxyz".split("").reduce((e,n)=>(e[`key${n}`]=n.toUpperCase(),e),{}),Yi={};for(let e=0;e<10;e++){let n=e.toString();Yi[`digit${n}`]=n,Yi[`numpad${n}`]=`Numpad ${n}`}var _r={};for(let e=1;e<=12;e++){let n=e.toString();_r[`f${n}`]=n}var Xi=Object.assign(Object.assign(Object.assign(Object.assign({},Pa),ka),Yi),_r);function Zi(e,n=!0){let t=e.toLowerCase();if(Xi[t]){let i=Xi[t];return typeof i=="string"?i:n?i[0]:i[1]}if(t.match(/^.+(left|right)$/)){let i=e.match(/right|left/i)[0].toLowerCase();i=i[0].toUpperCase()+i.substring(1);let r=e.replace(/right|left/i,"");e=i+r}return e.replace(/([A-Z])/g," $1").replace(/\s\s+/g," ").trim()}var vr={PreferFileSystem:"preferFileSystem",CrossBrowser:"crossBrowser"};var Ku={fileName:"download",method:vr.PreferFileSystem},Wu={accept:"*.*",method:vr.PreferFileSystem,multiple:!1};function ce(e){return e!=null&&`${e}`!="false"}function Bt(e,n=void 0){return Ra(e)?Number(e):n}function Ra(e){return!isNaN(parseFloat(e))&&!isNaN(Number(e))}function Cr(e,n=","){return Array.isArray(e)?e.map(t=>String(t).trim()).filter(t=>t.length):e==null||e===""?[]:String(e).split(n).map(t=>t.trim()).filter(t=>t.length)}var es=Tt(Sr(),1);var ts=Tt(wr(),1),Er=Tt(Gi(),1);var is=["focusableElement"];var ze=["*"];var on=["contentWrapperEl"];function ns(e,n){if(e&1&&(o(0,"div",3),s(1),a()),e&2){let t=u();l(),A(" ",t.icon()," ")}}function rs(e,n){e&1&&(o(0,"span"),s(1,"+"),a())}function os(e,n){if(e&1&&(v(0,rs,2,0,"span"),y(1,"ard-kbd",3)),e&2){let t=n.$implicit,i=n.$index,r=u();_(i!==0?0:-1),l(),p("appearance",r.appearance())("full",r.full())("key",t)}}var as=e=>({"--ard-_tabber-tabs":e});function ss(e,n){if(e&1){let t=z();o(0,"button",5,0),w("click",function(){let r=O(t).$implicit,d=u();return B(!r.selected()&&d.onTabClick(r))})("focus",function(){let r=O(t).$implicit,d=u();return B(d.onTabFocus(r))})("blur",function(){let r=O(t).$implicit,d=u();return B(d.onTabBlur(r))}),y(2,"div",6),s(3),a()}if(e&2){let t=n.$implicit,i=u();oe("ard-tab-active",t===i.currentTab())("ard-tab-focused",t===i.currentFocusedTab()),p("id",t.tabId())("tabindex",i.tabIndex()),l(3),A(" ",t.label()," ")}}var Ir={readonly:!1,disabled:!1},ls=(()=>{class e{constructor(t){this._DEFAULTS=t;this.readonly=h(this._DEFAULTS.readonly,{transform:i=>ce(i)}),this.disabled=T(this._DEFAULTS.disabled)}set _disabled(t){this.disabled.set(ce(t))}get _readonlyHostAttribute(){return this.readonly()}get _disabledHostAttribute(){return this.disabled()}static{this.\u0275fac=function(i){Ii()}}static{this.\u0275dir=X({type:e,hostVars:6,hostBindings:function(i,r){i&2&&(It("readonly",r._readonlyHostAttribute)("disabled",r._disabledHostAttribute),oe("ard-readonly",r._readonlyHostAttribute)("ard-disabled",r._disabledHostAttribute))},inputs:{readonly:[1,"readonly"],_disabled:[0,"disabled","_disabled"]},standalone:!1})}}return e})(),_t=E(f({},Ir),{tabIndex:0}),an=(()=>{class e extends ls{constructor(){super(...arguments);this.tabIndex=F(()=>this.disabled()?-1:this._tabIndex()),this._tabIndex=h(this._DEFAULTS.tabIndex,{alias:"tabIndex",transform:t=>Bt(t)});this.focusEvent=Ce({alias:"focus"}),this.blurEvent=Ce({alias:"blur"});this.isFocused=!1}focus(){this._focusableElement?.first?.nativeElement.focus()}focusFirst(){this.focus()}focusLast(){this._focusableElement?.last?.nativeElement.focus()}blur(){this._focusableElement?.forEach(t=>t.nativeElement.blur())}onFocus(t){this.isFocused=!0,this.focusEvent.emit(t)}onBlur(t){this.isFocused=!1,this.blurEvent.emit(t)}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Ve(e)))(r||e)}})()}static{this.\u0275dir=X({type:e,viewQuery:function(i,r){if(i&1&&An(is,5),i&2){let d;Dn(d=En())&&(r._focusableElement=d)}},inputs:{_tabIndex:[1,"tabIndex","_tabIndex"]},outputs:{focusEvent:"focus",blurEvent:"blur"},standalone:!1,features:[ue]})}}return e})(),ve=_t,ds=(()=>{class e extends an{registerOnTouched(t){this._onTouchedRegistered=t}registerOnChange(t){this._onChangeRegistered=t}setDisabledState(t){this.disabled.set(t)}onBlur(t){super.onBlur(t),this._onTouchedRegistered?.()}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Ve(e)))(r||e)}})()}static{this.\u0275dir=X({type:e,standalone:!1,features:[ue]})}}return e})();var cs={Outlined:"outlined"},ps={Raised:"raised"},ge=E(f({},cs),{Transparent:"transparent",Filled:"filled"}),us={Outlined:"outlined",OutlinedStrong:"outlined-strong",Filled:"filled"};var Fr={Rounded:"rounded",Sharp:"sharp"},xe=E(f({},Fr),{Pill:"pill"}),ms={Square:"square",Rectangle:"rectangle"};var hs=E(f({},ve),{appearance:ge.Outlined,variant:xe.Rounded,shape:ms.Square,compact:!1,outputAsString:!1}),zm=new S("ard-digit-input-defaults",{factory:()=>f({},hs)});var fs={Outlined:"outlined",Raised:"raised"},gs={Rounded:"rounded",Sharp:"sharp",SharpConnected:"sharp ard-connected"},_s={filterValue:"",appearance:fs.Raised,variant:gs.Rounded,compact:!1},qm=new S("ard-dropdown-panel-defaults",{factory:()=>f({},_s)});var vs=E(f({},_t),{appearance:ge.Outlined,variant:xe.Rounded,compact:!1}),Qm=new S("ard-form-field-frame-defaults",{factory:()=>f({},vs)});var ci={Left:"left",Right:"right"},pi={Left:"left",Middle:"middle",Right:"right"};var Cs=E(f({},ve),{appearance:ge.Outlined,variant:xe.Rounded,compact:!1,placeholder:"",alignText:ci.Left,clearable:!1,clearButtonTitle:"Clear",inputAttrs:{},maxLength:void 0});var ys=E(f({},Cs),{suggValueFrom:"value",suggLabelFrom:"label",suggestionsLoadingText:"Loading...",charlist:void 0,charlistCaseInsensitive:!1,dropdownAppearance:void 0,dropdownVariant:void 0}),Gm=new S("ard-input-defaults",{factory:()=>f({},ys)});var bs=E(f({},ve),{appearance:ge.Outlined,variant:xe.Rounded,compact:!1,placeholder:"",revealable:!0,holdToReveal:!1,autoHideTimeoutMs:void 0,revealed:!1,inputAttrs:{}}),Ym=new S("ard-password-input-defaults",{factory:()=>f({},bs)});var xs={filled:!1,weight:400,grade:0,opticalSize:40,ariaLabel:""},Ss=new S("ard-icon-defaults",{factory:()=>f({},xs)});var Ts=(()=>{class e{transform(t){return t=t.trim().toLowerCase(),t=t.replace(/[ -]/g,"_"),t}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275pipe=Fi({name:"icon",type:e,pure:!0,standalone:!1})}}return e})(),Fe=(()=>{class e{constructor(){this._DEFAULTS=D(Ss),this.ariaLabel=h(""),this.icon=h(void 0),this.filled=h(!1,{transform:t=>ce(t)}),this.weight=h(400,{transform:t=>Bt(t,400)}),this.grade=h(0,{transform:t=>Bt(t,0)}),this.opticalSize=h(40,{transform:t=>Bt(t,40)}),this.fontVariationSettings=F(()=>{let t={FILL:Bi(this.filled())?Number(this.filled()):void 0,wght:this.weight(),GRAD:this.grade(),opsz:this.opticalSize()},i=Object.entries(t).filter(r=>Bi(r[1])).map(r=>`"${r[0]}" ${r[1]}`).flat();return i.length===0?"":["font-variation-settings: ",i.join(", ")].join("")}),this.contentWrapper=me("contentWrapperEl")}ngAfterViewInit(){!this.icon()&&!this.contentWrapper()?.nativeElement.innerText&&console.warn("ARD-FT9000: Using <ard-icon> without specifying the [icon] field.")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["ard-icon"]],viewQuery:function(i,r){i&1&&he(r.contentWrapper,on,5),i&2&&fe()},inputs:{ariaLabel:[1,"ariaLabel"],icon:[1,"icon"],filled:[1,"filled"],weight:[1,"weight"],grade:[1,"grade"],opticalSize:[1,"opticalSize"]},standalone:!1,ngContentSelectors:ze,decls:6,vars:7,consts:[["contentWrapperEl",""],[1,"ard-icon","material-symbols-outlined"],[1,"ard-icon-content-wrapper"]],template:function(i,r){if(i&1&&(P(),o(0,"span",1),s(1),we(2,"icon"),a(),o(3,"div",2,0),M(5),a()),i&2){let d,m=$(4);Ft(r.fontVariationSettings()),It("aria-hidden",r.ariaLabel()!==void 0)("aria-label",r.ariaLabel()),l(),A(" ",Ue(2,5,(d=r.icon())!==null&&d!==void 0?d:m.innerText),`
`)}},dependencies:[Ts],styles:[`@import"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";ard-icon{font-variation-settings:"FILL" 0,"wght" 400,"GRAD" 0,"opsz" 48;font-size:1.5em;width:1em;height:1em;display:inline-block;-webkit-user-select:none;user-select:none;background-repeat:no-repeat;fill:currentColor;overflow:hidden;flex-shrink:0}ard-icon .ard-icon{font-variation-settings:inherit;font-size:inherit}ard-icon .ard-icon-content-wrapper{display:none}
`],encapsulation:2,changeDetection:0})}}return e})();var Me=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=de({type:e})}static{this.\u0275inj=le({imports:[K]})}}return e})();var ws=E(f({},ve),{appearance:ge.Outlined,variant:xe.Rounded,compact:!1,placeholder:"",alignText:ci.Left,clearable:!1,clearButtonTitle:"Clear",inputAttrs:{},maxLength:void 0}),Xm=new S("ard-simple-input-defaults",{factory:()=>f({},ws)});function nn(e,n){return n===void 0?!1:String(n).toLocaleLowerCase().indexOf(e)!==-1}var Ke={byLabel:(e,n)=>nn(e,n.label()),byValue:(e,n)=>nn(e,n.value()),byGroup:(e,n)=>nn(e,n.group),byLabelAndGroup:(e,n)=>Ke.byLabel(e,n)||n.label()!==n.value()&&Ke.byValue(e,n),byLabelAndValue:(e,n)=>Ke.byLabel(e,n)||Ke.byValue(e,n),byLabelAndGroupAndValue:(e,n)=>Ke.byLabel(e,n)||n.label()!==n.value()&&Ke.byValue(e,n)||Ke.byGroup(e,n)},As={Top:"top",Bottom:"bottom",Auto:"auto"},Ds=E(f({},ve),{valueFrom:"value",labelFrom:"label",disabledFrom:"disabled",groupLabelFrom:"group",groupDisabledFrom:"disabled",childrenFrom:"children",searchFn:Ke.byLabel,clearButtonTitle:"Clear",noItemsFoundText:"No items found.",loadingPlaceholderText:"Loading...",placeholder:"Select item",searchPlaceholder:"Search...",dropdownPosition:As.Auto,inputAttrs:{},isLoading:!1,itemsAlreadyGrouped:!1,invertDisabled:!1,noGroupActions:!1,autoHighlightFirst:!1,autoFocus:!1,keepOpen:!1,hideSelected:!1,noBackspaceClear:!1,sortMultipleValues:!1,searchCaseSensitive:!1,keepSearchAfterSelect:!1,maxSelectedItems:1/0,itemDisplayLimit:1/0,compareWith:void 0,appearance:ge.Outlined,variant:xe.Rounded,compact:!1,dropdownAppearance:void 0,dropdownVariant:void 0,multiselectable:!1,clearable:!1,searchable:!1,addCustom:!1}),Zm=new S("ard-select-defaults",{factory:()=>f({},Ds)});var se={None:"none",Primary:"primary",Secondary:"secondary",Warning:"warn",Danger:"danger",Success:"success",Info:"info"},We=E(f({},se),{CurrentColor:"currentColor"}),sn=E(f({},Ir),{contentAlignment:ci.Left,appearance:us.Outlined,variant:xe.Rounded,color:se.Primary,compact:!1}),Jm=new S("ard-chip-defaults",{factory:()=>sn});var Es=E(f(f({},_t),sn),{deleteButtonTitle:"Delete"}),eh=new S("ard-deletable-chip-defaults",{factory:()=>f({},Es)});var Ut=ve,Is=(()=>{class e extends ds{constructor(){super(...arguments);this.selectEvent=Ce({alias:"select"}),this.unselectEvent=Ce({alias:"unselect"}),this.changeEvent=Ce({alias:"change"});this.selected=T(!1),this.selectedChange=Ce()}writeValue(t){this._selected=t}_emitChange(){this._onChangeRegistered?.(this.selected()),this.selected()?this.selectEvent.emit(null):this.unselectEvent.emit(null),this.selectedChange.emit(this.selected()),this.changeEvent.emit(this.selected())}set _selected(t){this.selected.set(ce(t))}get _selectedHostAttribute(){return this.selected()}toggleSelected(){this.selected.update(t=>!t),this._emitChange()}select(){this.selected.set(!0),this._emitChange()}unselect(){this.selected.set(!1),this._emitChange()}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Ve(e)))(r||e)}})()}static{this.\u0275dir=X({type:e,hostVars:3,hostBindings:function(i,r){i&2&&(It("selected",r._selectedHostAttribute),oe("ard-selected",r._selectedHostAttribute))},inputs:{_selected:[0,"selected","_selected"]},outputs:{selectEvent:"select",unselectEvent:"unselect",changeEvent:"change",selectedChange:"selectedChange"},standalone:!1,features:[ue]})}}return e})(),Fs=E(f(f({},Ut),sn),{chipTitle:"Select",hideSelectionIcon:!1}),th=new S("ard-selectable-chip-defaults",{factory:()=>f({},Fs)});var Mr=E(f({},ve),{compact:!1,multiple:!1,blockAfterUpload:!1}),Ms=E(f({},Mr),{variant:xe.Rounded,color:se.Primary}),ih=new S("ard-file-drop-area-defaults",{factory:()=>f({},Ms)});var Ps=(()=>{class e extends an{constructor(t){super(t),this.wrapperClasses=h(""),this.type=h(this._DEFAULTS.type);this.appearance=h(this._DEFAULTS.appearance),this.color=h(this._DEFAULTS.color),this.lightColoring=h(this._DEFAULTS.lightColoring,{transform:i=>ce(i)}),this.compact=h(this._DEFAULTS.compact,{transform:i=>ce(i)}),this._DEFAULTS=t}static{this.\u0275fac=function(i){Ii()}}static{this.\u0275dir=X({type:e,inputs:{wrapperClasses:[1,"wrapperClasses"],type:[1,"type"],appearance:[1,"appearance"],color:[1,"color"],lightColoring:[1,"lightColoring"],compact:[1,"compact"]},standalone:!1,features:[ue]})}}return e})(),ks={Button:"button",Submit:"submit",Reset:"reset"},rn={Transparent:"transparent",Raised:"raised",RaisedStrong:"raised-strong",Outlined:"outlined",OutlinedStrong:"outlined-strong",Flat:"flat"},Vs={Rounded:"rounded",Pill:"pill",Sharp:"sharp"},Ls={Standard:"standard",Small:"small"},Pr=E(f({},_t),{color:se.Primary,lightColoring:!1,compact:!1,type:ks.Button}),kr=E(f({},Pr),{appearance:rn.Raised}),Rs=E(f({},kr),{variant:Vs.Rounded,alignIcon:ci.Left,vertical:!1}),Os=new S("ard-button-defaults",{factory:()=>f({},Rs)});var nh=(()=>{class e extends Ps{constructor(t){super(t),this.icon=h("");this.variant=h(this._DEFAULTS.variant),this.alignIcon=h(this._DEFAULTS.alignIcon),this.vertical=h(this._DEFAULTS.vertical,{transform:i=>ce(i)}),this.ngClasses=F(()=>[this.wrapperClasses(),`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`,`ard-color-${this.color()}`,`ard-align-${this.alignIcon()}`,this.lightColoring()?"ard-light-coloring":"",this.compact()?"ard-compact":"",this.vertical()?"ard-button-vertical":""].join(" "))}static{this.\u0275fac=function(i){return new(i||e)(q(Os))}}static{this.\u0275cmp=c({type:e,selectors:[["ard-button"]],inputs:{icon:[1,"icon"],variant:[1,"variant"],alignIcon:[1,"alignIcon"],vertical:[1,"vertical"]},standalone:!1,features:[ue],ngContentSelectors:ze,decls:6,vars:4,consts:[["buttonElement",""],[1,"ard-button",3,"focus","blur","type","ngClass","tabindex"],[1,"ard-focus-overlay"],[1,"ard-button-icon"],[1,"ard-button-content"]],template:function(i,r){if(i&1){let d=z();P(),o(0,"button",1,0),w("focus",function(b){return O(d),B(r.onFocus(b))})("blur",function(b){return O(d),B(r.onBlur(b))}),y(2,"div",2),v(3,ns,2,1,"div",3),o(4,"div",4),M(5),a()()}i&2&&(p("type",r.type())("ngClass",r.ngClasses())("tabindex",r.tabIndex()),l(3),_(r.icon()?3:-1))},dependencies:[rt],styles:[`.ard-button{display:flex;align-items:center;position:relative;cursor:pointer}.ard-button.ard-button-align-left{flex-direction:row}.ard-button.ard-button-align-right{flex-direction:row-reverse}.ard-button.ard-button-vertical{flex-direction:column}
`],encapsulation:2,changeDetection:0})}}return e})();var rh=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=de({type:e})}static{this.\u0275inj=le({imports:[K]})}}return e})();var Bs=E(f({},Mr),{appearance:ge.Outlined,variant:xe.Rounded,color:se.Primary,inputAttrs:{},placeholder:"",clearable:!1,clearButtonTitle:"Clear"}),oh=new S("ard-file-input-defaults",{factory:()=>f({},Bs)});var Us={NoChange:"nochange",Uppercase:"uppercase",Lowercase:"lowercase"},Hs=E(f({},ve),{appearance:ge.Outlined,variant:xe.Rounded,compact:!1,placeholder:"",case:Us.NoChange,maxDigits:void 0,hideHash:!1,clearable:!1,clearButtonTitle:"Clear",inputAttrs:{}}),ah=new S("ard-hex-input-defaults",{factory:()=>f({},Hs)});var js=E(f({},ve),{appearance:ge.Outlined,variant:xe.Rounded,compact:!1,placeholder:"",alignText:pi.Middle,inputAttrs:{},min:0,max:1/0,allowFloat:!1,noButtons:!1,stepSize:1}),sh=new S("ard-number-input-defaults",{factory:()=>f({},js)});var Ns=E(f({},kr),{size:Ls.Standard}),lh=new S("ard-fab-defaults",{factory:()=>f({},Ns)});var $s=new S("ard-icon-button-defaults",{factory:()=>Pr});var qe=(()=>{class e extends an{constructor(t){super(t),this.wrapperClasses=h(""),this.type=h(this._DEFAULTS.type);this.color=h(this._DEFAULTS.color),this.lightColoring=h(this._DEFAULTS.lightColoring,{transform:i=>ce(i)}),this.compact=h(this._DEFAULTS.compact,{transform:i=>ce(i)}),this.ngClasses=F(()=>["ard-appearance-transparent",`ard-color-${this.disabled()?se.None:this.color()}`,this.lightColoring()?"ard-light-coloring":"",this.compact()?"ard-compact":""].join(" "))}static{this.\u0275fac=function(i){return new(i||e)(q($s))}}static{this.\u0275cmp=c({type:e,selectors:[["ard-icon-button"]],inputs:{wrapperClasses:[1,"wrapperClasses"],type:[1,"type"],color:[1,"color"],lightColoring:[1,"lightColoring"],compact:[1,"compact"]},standalone:!1,features:[ue],ngContentSelectors:ze,decls:4,vars:3,consts:[[1,"ard-icon-button",3,"focus","blur","type","ngClass","tabindex"],[1,"ard-focus-overlay"],[1,"ard-button-content"]],template:function(i,r){i&1&&(P(),o(0,"button",0),w("focus",function(m){return r.focusEvent.emit(m)})("blur",function(m){return r.blurEvent.emit(m)}),y(1,"div",1),o(2,"div",2),M(3),a()()),i&2&&p("type",r.type())("ngClass",r.ngClasses())("tabindex",r.tabIndex())},dependencies:[rt],styles:[`.ard-icon-button{display:flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.ard-icon-button .ard-button-content{max-height:100%;display:flex;align-items:center;justify-content:center}
`],encapsulation:2,changeDetection:0})}}return e})(),Qe=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=de({type:e})}static{this.\u0275inj=le({imports:[K]})}}return e})(),Ks=E(f({},Ut),{color:We.Primary,unselectedColor:We.None}),Ws=new S("ard-checkbox-defaults",{factory:()=>f({},Ks)});var at={Unselected:"unselected",Indeterminate:"indeterminate",Selected:"selected"},ui=(()=>{class e extends Is{constructor(t){super(t),this.htmlId=h("");this.color=h(this._DEFAULTS.color),this.unselectedColor=h(this._DEFAULTS.unselectedColor),this.ngClasses=F(()=>[`ard-color-${this.color()}`,`ard-unselected-color-${this.unselectedColor()}`,`ard-checkbox-${this.state()}`].join(" ")),this.state=et(at.Unselected)}set _selected(t){let i=ce(t);this.selected.set(i),this.state.set(i?at.Selected:at.Unselected)}toggleState(){let t=at.Unselected;this.state()===at.Unselected&&(t=at.Selected),this.state.set(t),this.selected.set(this.state()===at.Selected),this._emitChange()}static{this.\u0275fac=function(i){return new(i||e)(q(Ws))}}static{this.\u0275cmp=c({type:e,selectors:[["ard-checkbox"]],inputs:{htmlId:[1,"htmlId"],color:[1,"color"],unselectedColor:[1,"unselectedColor"],state:[1,"state"]},outputs:{state:"stateChange"},standalone:!1,features:[tt([{provide:ri,useExisting:Dt(()=>e),multi:!0}]),ue],decls:6,vars:4,consts:[["role","checkbox","type","button",1,"ard-checkbox",3,"click","focus","blur","id","ariaChecked","tabindex","ngClass"],[1,"ard-hitbox"],[1,"ard-focus-overlay"],[1,"ard-checkbox-icon","ard-icon-for-selected"],[1,"ard-checkbox-icon","ard-icon-for-indeterminate"],[1,"ard-checkbox-icon","ard-icon-for-unselected"]],template:function(i,r){i&1&&(o(0,"button",0),w("click",function(){return r.toggleState()})("focus",function(m){return r.onFocus(m)})("blur",function(m){return r.onBlur(m)}),y(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),a()),i&2&&p("id",r.htmlId())("ariaChecked",r.selected())("tabindex",r.tabIndex())("ngClass",r.ngClasses())},dependencies:[rt],styles:[`ard-checkbox{display:inline}.ard-checkbox{font-size:inherit}
`],encapsulation:2,changeDetection:0})}}return e})(),mi=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=de({type:e})}static{this.\u0275inj=le({imports:[K]})}}return e})(),zs=E(f({},Ut),{color:We.Primary}),dh=new S("ard-radio-defaults",{factory:()=>f({},zs)});var qs=E(f({},ve),{valueFrom:"value",labelFrom:"label",disabledFrom:"disabled",compareWith:void 0,multiselectable:!1,requireValue:!1,invertDisabled:!1,maxSelectedItems:void 0});var Qs=E(f({},xe),{RoundedConnected:"rounded-connected",SharpConnected:"sharp-connected",PillConnected:"pill-connected"}),Gs=E(f({},ge),{FilledStrong:"filled-strong",OutlinedStrong:"outlined-strong"}),Ys=E(f({},qs),{appearance:Gs.Outlined,variant:Qs.RoundedConnected,color:se.Primary,align:pi.Middle,iconBased:!1,compact:!1,autoFocus:!1,uniformWidths:!1,itemsPerRow:1/0}),ch=new S("ard-segment-defaults",{factory:()=>f({},Ys)});var Xs={Raised:"raised",Contained:"contained"},Zs=E(f({},Ut),{color:se.Primary,appearance:Xs.Raised,icon:void 0,selectedIcon:void 0,unselectedIcon:void 0}),ph=new S("ard-slide-toggle-defaults",{factory:()=>f({},Zs)});var Js={Always:"always",Auto:"auto",Never:"never"},Ar={Top:"top",Bottom:"bottom"},el=E(f({},ve),{noTooltip:!1,showValueTicks:!1,formatTooltipFn:void 0,min:0,max:100,step:1,shiftMultiplier:5,labelPosition:Ar.Bottom,labels:[],color:We.Primary,compact:!1,tooltipPosition:Ar.Top,tooltipBehavior:Js.Auto});var tl=f({},el),uh=new S("ard-slider-defaults",{factory:()=>f({},tl)});var Vr={Noop:"noop",Default:"default"},il={None:"none",Half:"half",Filled:"filled"},hi=E(f({},We),{Star:"star"}),nl=E(f({},Ut),{clickStrategy:Vr.Default,color:hi.Star}),mh=new S("ard-star-button-defaults",{factory:()=>f({},nl)});var rl={color:hi.Star,filled:il.None},hh=new S("ard-star-defaults",{factory:()=>f({},rl)});var ol=E(f({},ve),{color:hi.Star,max:5}),fh=new S("ard-star-input-defaults",{factory:()=>f({},ol)});var al=E(f({},ve),{clickStrategy:Vr.Default,states:[{value:!1,color:"none"},{value:!0,color:"secondary",icon:"check_box",filled:!0}]}),gh=new S("ard-statebox-defaults",{factory:()=>f({},al)});var sl={LeftClumped:"left-clumped",LeftSplit:"left-split",RightSplit:"right-split",RightClumped:"right-clumped"},ll=E(f({},ve),{valueFrom:"value",labelFrom:"label",disabledFrom:"disabled",compareWith:null,invertDisabled:!1,maxSelectedItems:1/0,color:se.Primary,align:sl.LeftClumped,compact:!1}),_h=new S("ard-checkbox-list-defaults",{factory:()=>f({},ll)});var dl={Small:"small",Medium:"medium",Large:"large"},cl={AboveBefore:"above-before",AboveAfter:"above-after",BelowBefore:"below-before",BelowAfter:"below-after",Before:"before",After:"after",Above:"above",Below:"below"},pl={color:se.Primary,variant:xe.Rounded,size:dl.Medium,position:cl.AboveAfter,overlap:!1},vh=new S("ard-badge-defaults",{factory:()=>f({},pl)});var ul={Default:"default",Auto:"auto"};var ml={Sharp:"sharp",Pill:"pill"},Lr={Determinate:"determinate",Indeterminate:"indeterminate",Buffer:"buffer",Query:"query"},hl={value:0,bufferValue:0,color:We.Primary,variant:ml.Pill,size:ul.Default,mode:Lr.Determinate,hideValue:!1},Ch=new S("ard-progress-bar-defaults",{factory:()=>f({},hl)});var fl={Transparent:"transparent",Colorless:"colorless",Colored:"colored"},gl={Full:"full",Ring:"ring"},_l={value:0,max:100,color:We.Primary,appearance:fl.Transparent,variant:gl.Full,hideValue:!1,reverse:!1},yh=new S("ard-progress-circle-defaults",{factory:()=>f({},_l)});var vl={color:We.Primary},bh=new S("ard-spinner-defaults",{factory:()=>f({},vl)});var Cl={Rounded:"rounded with-border",Circle:"circle with-border",Sharp:"sharp with-border",RoundedBorderless:"rounded",CircleBorderless:"circle",SharpBorderless:"sharp"},yl={ariaLabel:"",withLabel:!1,appearance:Cl.Rounded},xh=new S("ard-color-display-defaults",{factory:()=>f({},yl)});var bl={full:!1,appearance:ge.Outlined},ln=new S("ard-kbd-defaults",{factory:()=>f({},bl)});var xl=(()=>{class e{constructor(){this._DEFAULTS=D(ln)}transform(t,i=!this._DEFAULTS.full){return Zi(t,i)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275pipe=Fi({name:"kbd",type:e,pure:!0,standalone:!1})}}return e})(),Se=(()=>{class e{constructor(){this._DEFAULTS=D(ln),this.contentWrapper=me("contentWrapperEl"),this.key=h(""),this.full=h(!1,{transform:t=>ce(t)});this.appearance=h(ge.Filled),this.ngClasses=F(()=>[`ard-appearance-${this.appearance()}`].join(" "))}ngAfterViewInit(){if(!this.key()&&!this.contentWrapper().nativeElement.innerText)throw new Error("ARD-FT5030: Using <ard-kbd> without specifying the [key] field is not allowed.")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["ard-kbd"]],viewQuery:function(i,r){i&1&&he(r.contentWrapper,on,5),i&2&&fe()},inputs:{key:[1,"key"],full:[1,"full"],appearance:[1,"appearance"]},standalone:!1,ngContentSelectors:ze,decls:6,vars:5,consts:[["contentWrapperEl",""],[1,"ard-kbd",3,"ngClass"],[1,"ard-kbd-content-wrapper"]],template:function(i,r){if(i&1&&(P(),o(0,"kbd",1),s(1),we(2,"kbd"),a(),o(3,"div",2,0),M(5),a()),i&2){let d;p("ngClass",r.ngClasses()),l(),A(" ",Mt(2,2,r.key()||((d=r.contentWrapper())==null||d.nativeElement==null?null:d.nativeElement.innerText)||"",!r.full()),`
`)}},dependencies:[rt,xl],styles:[`.ard-kbd-content-wrapper{display:none}.ard-kbd{display:inline-block}
`],encapsulation:2,changeDetection:0})}}return e})(),Rr=(()=>{class e{constructor(){this.elementRef=D(ye),this.renderer=D(Le);this.appearance=h(ge.Filled,{alias:"ardKbdAppearance"}),this.ngClasses=F(()=>["ard-kbd",`ard-appearance-${this.appearance()}`]),Re(()=>{let t=this.ngClasses();this.updateClasses(t)})}updateClasses(t){let i=this.elementRef.nativeElement;i.className.split(" ").filter(d=>d.startsWith("ard-appearance-")).forEach(d=>this.renderer.removeClass(i,d)),t.forEach(d=>{this.renderer.addClass(i,d)})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275dir=X({type:e,selectors:[["","ardKbd",""]],inputs:{appearance:[1,"ardKbdAppearance","appearance"]},standalone:!1})}}return e})(),ne=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=de({type:e})}static{this.\u0275inj=le({imports:[K]})}}return e})(),Sl=new S("ard-kbd-shortcut-defaults",{factory:()=>({})});var vt=(()=>{class e{constructor(){this._KBD_DEFAULTS=D(ln),this._DEFAULTS=D(Sl),this.contentWrapper=me("contentWrapperEl"),this.splitRegex=/[+, ]/,this.keys=h(void 0,{transform:t=>Cr(t,this.splitRegex)}),this.full=h(this._DEFAULTS.full??this._KBD_DEFAULTS.full,{transform:t=>ce(t)});this.appearance=h(this._DEFAULTS.appearance??this._KBD_DEFAULTS.appearance),this.ngClasses=F(()=>[`ard-appearance-${this.appearance}`].join(" "))}ngAfterViewInit(){if(!this.keys()&&!this.contentWrapper()?.nativeElement.innerText)throw new Error("ARD-FT5040: Using <ard-kbd-shortcut> without specifying the [keys] field is not allowed.")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["ard-kbd-shortcut"]],viewQuery:function(i,r){i&1&&he(r.contentWrapper,on,5),i&2&&fe()},inputs:{keys:[1,"keys"],full:[1,"full"],appearance:[1,"appearance"]},standalone:!1,ngContentSelectors:ze,decls:6,vars:1,consts:[["contentWrapperEl",""],[1,"ard-kbd-shortcut",3,"ngClass"],[1,"ard-kbd-shortcut-content-wrapper"],[3,"appearance","full","key"]],template:function(i,r){if(i&1&&(P(),o(0,"div",1),k(1,os,2,4,null,null,L),a(),o(3,"div",2,0),M(5),a()),i&2){let d;p("ngClass",r.ngClasses()),l(),V((d=r.keys())!==null&&d!==void 0?d:(d=r.contentWrapper())==null||d.nativeElement==null||d.nativeElement.innerText==null?null:d.nativeElement.innerText.split(r.splitRegex))}},dependencies:[rt,Se],styles:[`.ard-kbd-shortcut{display:inline}.ard-kbd-shortcut-content-wrapper{display:none}
`],encapsulation:2,changeDetection:0})}}return e})(),Ct=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=de({type:e})}static{this.\u0275inj=le({imports:[K,ne]})}}return e})(),Tl={color:hi.Star,max:5,value:0},Sh=new S("ard-star-display-defaults",{factory:()=>f({},Tl)});var wl={Strong:"strong",Light:"light",Colorless:"colorless"},Al={Rounded:"rounded",Sharp:"sharp"},Dl={Noop:"noop",Slice:"slice"},Dr={TopLeft:"top-left",TopCenter:"top-center",TopRight:"top-right",CenterLeft:"center-left",Center:"center-center",CenterRight:"center-right",BottomLeft:"bottom-left",BottomCenter:"bottom-center",BottomRight:"bottom-right"};var Or={Left:"left",Center:"center",Right:"right",Split:"split"},El=E(f({},_t),{options:[10,25,50],itemsPerPage:50,page:1,color:se.None,align:Or.Split,compact:!1,useFirstLastButtons:!1,itemsPerPageText:"Items per page:",currentItemsFormatFn:({currentItemsFrom:e,currentItemsTo:n,totalItems:t})=>`${e} \u2013 ${n} of ${t}`}),Th=new S("ard-table-pagination-defaults",{factory:()=>f({},El)});var Br=E(f({},_t),{rowDisabledFrom:"disabled",rowBoldFrom:"bold",invertRowDisabled:!1,invertRowBold:!1,selectableRows:!1,maxSelectedItems:void 0,clickableRows:!1,caption:void 0,isLoading:!1,loadingProgress:0,loadingProgressBuffer:0,loadingBarMode:Lr.Determinate,loadingBarColor:se.Secondary,appearance:wl.Strong,variant:Al.Rounded,color:se.Primary,align:Dr.CenterLeft,headerAlign:Dr.CenterLeft,compact:!1,zebra:!1,stickyHeader:!1,paginated:!1,paginationStrategy:Dl.Noop,paginationOptions:[10,25,50],totalItems:void 0,paginationColor:se.None,paginationAlign:Or.Split,itemsPerPageText:"Items per page:",currentItemsFormatFn:({currentItemsFrom:e,currentItemsTo:n,totalItems:t})=>`${e} \u2013 ${n} of ${t}`,pageFillRemaining:!1,paginationDisabled:!1,useFirstLastButtons:!1,itemsPerPage:50,page:1,treatDataSourceAsString:!1}),wh=new S("ard-table-defaults",{factory:()=>f({},Br)});var Il=E(f({},Br),{separator:","}),Ah=new S("ard-table-from-csv-defaults",{factory:()=>f({},Il)});var Fl={Outlined:"outlined",Raised:"raised"},Ml={Rounded:"rounded",Sharp:"sharp"},Pl={appearance:Fl.Raised,variant:Ml.Rounded,actionButtonsAlign:pi.Right},kl=new S("ard-card-defaults",{factory:()=>f({},Pl)});var Ur=(()=>{class e{constructor(t,i){t.addClass(i.nativeElement,"ard-card-title")}static{this.\u0275fac=function(i){return new(i||e)(q(Le),q(ye))}}static{this.\u0275dir=X({type:e,selectors:[["ard-card-title"],["","ard-card-title",""]],standalone:!1})}}return e})();var Hr=(()=>{class e{constructor(t,i){t.addClass(i.nativeElement,"ard-card-content")}static{this.\u0275fac=function(i){return new(i||e)(q(Le),q(ye))}}static{this.\u0275dir=X({type:e,selectors:[["ard-card-content"],["","ard-card-content",""]],standalone:!1})}}return e})(),jr=(()=>{class e{constructor(t,i){t.addClass(i.nativeElement,"ard-card-image")}static{this.\u0275fac=function(i){return new(i||e)(q(Le),q(ye))}}static{this.\u0275dir=X({type:e,selectors:[["","ard-card-image",""]],standalone:!1})}}return e})();var Vl=(()=>{class e{constructor(){this._DEFAULTS=D(kl);this.appearance=h(this._DEFAULTS.appearance),this.variant=h(this._DEFAULTS.variant),this.ngClasses=F(()=>["ard-card",`ard-appearance-${this.appearance()}`,`ard-variant-${this.variant()}`].join(" "))}get _ngClassesHostAttribute(){return this.ngClasses()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275dir=X({type:e,selectors:[["","ard-card",""]],hostVars:2,hostBindings:function(i,r){i&2&&Q(r._ngClassesHostAttribute)},inputs:{appearance:[1,"appearance"],variant:[1,"variant"]},standalone:!1})}}return e})(),Nr=(()=>{class e extends Vl{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Ve(e)))(r||e)}})()}static{this.\u0275cmp=c({type:e,selectors:[["ard-card"]],standalone:!1,features:[ue],ngContentSelectors:ze,decls:1,vars:0,template:function(i,r){i&1&&(P(),M(0))},encapsulation:2,changeDetection:0})}}return e})(),$r=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=de({type:e})}static{this.\u0275inj=le({imports:[K]})}}return e})(),Ll={vertical:!1},Dh=new S("ard-divider-defaults",{factory:()=>f({},Ll)});var Rl={disabled:!1},Ol=new S("ard-tab-defaults",{factory:()=>f({},Rl)});var li=(()=>{class e{constructor(){this._DEFAULTS=D(Ol),this.disabled=h(this._DEFAULTS.disabled,{transform:t=>ce(t)}),this.selected=T(!1),this.focused=T(!1),this._label=h(null,{alias:"label"}),this.label=F(()=>this._label()??this.tabId()),this.tabId=h.required(),this.focusEvent=Ce(),this.blurEvent=Ce(),this.selectedChange=Ce()}set _selected(t){this.selected.set(ce(t))}setSelected(t){this.selected.set(t),this._emitChange()}get _selectedHostAttribute(){return this.selected()}_emitChange(){this.selectedChange.emit(this.selected())}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["ard-tab"]],hostVars:2,hostBindings:function(i,r){i&2&&oe("ard-tab-selected",r._selectedHostAttribute)},inputs:{disabled:[1,"disabled"],_selected:[0,"selected","_selected"],_label:[1,"label","_label"],tabId:[1,"tabId"]},outputs:{focusEvent:"focusEvent",blurEvent:"blurEvent",selectedChange:"selectedChange"},standalone:!1,ngContentSelectors:ze,decls:1,vars:0,template:function(i,r){i&1&&(P(),M(0))},encapsulation:2,changeDetection:0})}}return e})(),Bl={color:se.Primary,stretchTabs:!1,uniformTabWidths:!1,tabAlignment:pi.Left,tabIndex:0},Ul=new S("ard-tabber-defaults",{factory:()=>f({},Bl)});var Kr=(()=>{class e{constructor(){this._DEFAULTS=D(Ul),this.tabs=bn(li,{descendants:!0}),this.currentTab=T(null),this.currentFocusedTab=T(null),this.initialTab=h(void 0),this.focusEvent=Ce({alias:"focus"}),this.blurEvent=Ce({alias:"blur"}),this.changeTab=Ce();this.color=h(this._DEFAULTS.color),this.ngClasses=F(()=>[`ard-color-${this.color()}`].join(" "));this.stretchTabs=h(this._DEFAULTS.stretchTabs,{transform:t=>ce(t)}),this.uniformTabWidths=h(this._DEFAULTS.uniformTabWidths,{transform:t=>ce(t)}),this.tabAlignment=h(this._DEFAULTS.tabAlignment),this.tabContainerClasses=F(()=>[this.uniformTabWidths()&&!this.stretchTabs()?"ard-uniform-tab-widths":"",this.stretchTabs()?"ard-stretch-tabs":"",this.stretchTabs()?"":`ard-tab-align-${this.tabAlignment()}`].join(" "));this.tabIndex=h(0)}ngAfterContentInit(){let t=null;for(let i of this.tabs())i.selected()&&(t&&i.selected.set(!1),t=i),i.focusEvent.subscribe(()=>{this.focusEvent.emit(i.tabId())}),i.blurEvent.subscribe(()=>{this.blurEvent.emit(i.tabId())}),i.selectedChange.subscribe(r=>{r&&this.changeTab.emit(i.tabId())});t||(t=this.tabs().find(r=>r.tabId()===this.initialTab())??this.tabs()[0]??null,t&&t.selected.set(!0)),this.currentTab.set(t)}onTabClick(t){let i=this.currentTab();i&&(i.selected.set(!1),i.selectedChange.emit(!1)),this.currentTab.set(t),t.selected.set(!0),t.selectedChange.emit(!0)}onTabFocus(t){t.focusEvent.emit(),t.focused.set(!0),this.currentFocusedTab.set(t)}onTabBlur(t){t.blurEvent.emit(),t.focused.set(!1),this.currentFocusedTab.set(null)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["ard-tabber"]],contentQueries:function(i,r,d){i&1&&In(d,r.tabs,li,5),i&2&&fe()},inputs:{initialTab:[1,"initialTab"],color:[1,"color"],stretchTabs:[1,"stretchTabs"],uniformTabWidths:[1,"uniformTabWidths"],tabAlignment:[1,"tabAlignment"],tabIndex:[1,"tabIndex"]},outputs:{focusEvent:"focus",blurEvent:"blur",changeTab:"changeTab"},standalone:!1,ngContentSelectors:ze,decls:6,vars:6,consts:[["focusableElement",""],[1,"ard-tabber",3,"ngClass"],[1,"ard-tabber-tabs",3,"ngClass"],["type","button","role","tab",1,"ard-tab-button",3,"id","ard-tab-active","ard-tab-focused","tabindex"],["role","tabpanel",1,"ard-tabber-content"],["type","button","role","tab",1,"ard-tab-button",3,"click","focus","blur","id","tabindex"],[1,"ard-focus-overlay"]],template:function(i,r){i&1&&(P(),o(0,"div",1)(1,"div",2),k(2,ss,4,7,"button",3,Tn),a(),o(4,"div",4),M(5),a()()),i&2&&(p("ngClass",r.ngClasses()),l(),Ft(Ee(4,as,r.tabs().length)),p("ngClass",r.tabContainerClasses()),l(),V(r.tabs()))},dependencies:[rt],styles:[`.ard-tabber ard-tab{display:none}.ard-tabber ard-tab.ard-tab-selected{display:block}.ard-tabber .ard-tabber-tabs.ard-uniform-tab-widths{display:grid;grid-template-columns:repeat(var(--ard-_tabber-tabs),1fr);max-width:max-content}
`],encapsulation:2,changeDetection:0})}}return e})(),Wr=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=de({type:e})}static{this.\u0275inj=le({imports:[K]})}}return e})(),zr={appearance:ps.Raised,variant:Fr.Rounded,compact:!1,heading:"",noCloseButton:!1,noBackdrop:!1,disableBackdropClose:!1},Eh=new S("ard-modal-defaults",{factory:()=>f({},zr)});var Hl=E(f({},zr),{confirmButtonText:"Confirm",confirmButtonColor:se.Primary,confirmButtonAppearance:rn.RaisedStrong,rejectButtonText:"Cancel",rejectButtonColor:se.None,rejectButtonAppearance:rn.Transparent,noRejectButton:!1,canConfirm:!0}),Ih=new S("ard-dialog-defaults",{factory:()=>f({},Hl)});var Fh=new S("ArdSnackbarData"),Mh=new S("ArdSnackbarColor"),Ph=new S("ArdSnackbarType");var jl={TopLeft:"top-left",TopCenter:"top-center",TopRight:"top-right",BottomLeft:"bottom-left",BottomCenter:"bottom-center",BottomRight:"bottom-right"},Nl={Inside:"inside",Outside:"outside"},$l={Default:"default",Skip:"skip",Overwrite:"overwrite"},Kl={None:"none",Danger:"danger",Warning:"warn",Success:"success",Info:"info"};var Wl={placement:{align:jl.BottomCenter,origin:document.body,originRelation:Nl.Inside},duration:5e3,queueHandling:$l.Default,panelClass:[],data:{message:""},color:se.Primary,type:Kl.None},kh=new S("ard-snackbar-defaults",{factory:()=>f({},Wl)});var Vh=new S("ard-snackbar-animation-length",{factory:()=>150});var Oh={name:"$$$",description:"$$$",type:"boolean-like",default:"false"};function Bh(e,n=ge.Outlined,t){return{name:t??"appearance",description:e,type:"FormElementAppearance",default:`'${n}'`}}var zl={offset:"30%",noHighlight:!1,behavior:"smooth"};function yt(e,n={}){let{offset:t,noHighlight:i,behavior:r}=f(f({},zl),n),d=document.querySelector(e);if(!d){console.warn(`Element not found for selector: ${e}`);return}let b=d.getBoundingClientRect().top+window.scrollY,R=0;if(typeof t=="string"&&t.endsWith("%")){let re=parseFloat(t);isNaN(re)||(R=re/100*window.innerHeight)}else typeof t=="number"&&(R=t);let J=b-R;window.scrollTo({top:J,behavior:r}),!i&&(d.classList.add("scrolled-to"),setTimeout(()=>{d.classList.remove("scrolled-to")},3e3))}var pn=new S("HIGHLIGHT_OPTIONS");function ef(e){return[{provide:pn,useValue:e}]}var bt=function(e){return e.FULL_WITH_CORE_LIBRARY_IMPORTS="The full library and the core library were imported, only one of them should be imported!",e.FULL_WITH_LANGUAGE_IMPORTS="The highlighting languages were imported they are not needed!",e.CORE_WITHOUT_LANGUAGE_IMPORTS="The highlighting languages were not imported!",e.LANGUAGE_WITHOUT_CORE_IMPORTS="The core library was not imported!",e.NO_FULL_AND_NO_CORE_IMPORTS="Highlight.js library was not imported!",e}(bt||{}),ql=(()=>{class e{constructor(){this.document=D(Li),this.isPlatformBrowser=Oi(D(Di)),this.options=D(pn,{optional:!0}),this._ready=new _n(null),this.ready=vn(this._ready.asObservable().pipe(At(t=>!!t))),this.isPlatformBrowser&&(this.document.defaultView.hljs?this._ready.next(this.document.defaultView.hljs):this._loadLibrary().pipe(Ti(t=>this.options?.lineNumbersLoader?(this.document.defaultView.hljs=t,this.loadLineNumbers().pipe(wi(i=>{i.activateLineNumbers(),this._ready.next(t)}))):(this._ready.next(t),Si)),Cn(t=>(console.error("[HLJS] ",t),this._ready.error(t),Si))).subscribe(),this.options?.themePath&&this.loadTheme(this.options.themePath))}_loadLibrary(){if(this.options){if(this.options.fullLibraryLoader&&this.options.coreLibraryLoader)return lt(()=>bt.FULL_WITH_CORE_LIBRARY_IMPORTS);if(this.options.fullLibraryLoader&&this.options.languages)return lt(()=>bt.FULL_WITH_LANGUAGE_IMPORTS);if(this.options.coreLibraryLoader&&!this.options.languages)return lt(()=>bt.CORE_WITHOUT_LANGUAGE_IMPORTS);if(!this.options.coreLibraryLoader&&this.options.languages)return lt(()=>bt.LANGUAGE_WITHOUT_CORE_IMPORTS);if(this.options.fullLibraryLoader)return this.loadFullLibrary();if(this.options.coreLibraryLoader&&this.options.languages&&Object.keys(this.options.languages).length)return this.loadCoreLibrary().pipe(Ti(t=>this._loadLanguages(t)))}return lt(()=>bt.NO_FULL_AND_NO_CORE_IMPORTS)}_loadLanguages(t){let i=Object.entries(this.options.languages).map(([r,d])=>dn(d()).pipe(wi(m=>t.registerLanguage(r,m))));return $t(i).pipe(Je(()=>t))}loadCoreLibrary(){return dn(this.options.coreLibraryLoader())}loadFullLibrary(){return dn(this.options.fullLibraryLoader())}loadLineNumbers(){return wt(this.options.lineNumbersLoader())}setTheme(t){this.isPlatformBrowser&&(this._themeLinkElement?this._themeLinkElement.href=t:this.loadTheme(t))}loadTheme(t){this._themeLinkElement=this.document.createElement("link"),this._themeLinkElement.href=t,this._themeLinkElement.type="text/css",this._themeLinkElement.rel="stylesheet",this._themeLinkElement.media="screen,print",this.document.head.appendChild(this._themeLinkElement)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=ke({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),dn=e=>wt(e).pipe(At(n=>!!n?.default),Je(n=>n.default)),Ql=(()=>{class e{constructor(){this.loader=D(ql),this.options=D(pn,{optional:!0}),this.hljsSignal=T(null),this.hljs=F(()=>this.hljsSignal()),this.loader.ready.then(t=>{this.hljsSignal.set(t),this.options?.highlightOptions&&t.configure(this.options.highlightOptions)})}highlight(t,i){return te(this,null,function*(){return(yield this.loader.ready).highlight(t,i)})}highlightAuto(t,i){return te(this,null,function*(){return(yield this.loader.ready).highlightAuto(t,i)})}highlightElement(t){return te(this,null,function*(){(yield this.loader.ready).highlightElement(t)})}highlightAll(){return te(this,null,function*(){(yield this.loader.ready).highlightAll()})}configure(t){return te(this,null,function*(){(yield this.loader.ready).configure(t)})}registerLanguage(t,i){return te(this,null,function*(){(yield this.loader.ready).registerLanguage(t,i)})}unregisterLanguage(t){return te(this,null,function*(){(yield this.loader.ready).unregisterLanguage(t)})}registerAliases(r,d){return te(this,arguments,function*(t,{languageName:i}){(yield this.loader.ready).registerAliases(t,{languageName:i})})}listLanguages(){return te(this,null,function*(){return(yield this.loader.ready).listLanguages()})}getLanguage(t){return te(this,null,function*(){return(yield this.loader.ready).getLanguage(t)})}safeMode(){return te(this,null,function*(){(yield this.loader.ready).safeMode()})}debugMode(){return te(this,null,function*(){(yield this.loader.ready).debugMode()})}lineNumbersBlock(t,i){return te(this,null,function*(){let r=yield this.loader.ready;r.lineNumbersBlock&&r.lineNumbersBlock(t,i)})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=ke({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),cn;function Gl(){if(!cn)try{cn=window?.trustedTypes?.createPolicy("ngx-highlightjs",{createHTML:e=>e})}catch{}return cn}function Yl(e){return Gl()?.createHTML(e)||e}var qr=(()=>{class e{constructor(){this._hljs=D(Ql),this._nativeElement=D(ye).nativeElement,this._sanitizer=D(Pn),this._platform=D(Di),Oi(this._platform)&&(Re(()=>{let t=this.code();this.setTextContent(t||""),t&&this.highlightElement(t)}),Re(()=>{let t=this.highlightResult();this.setInnerHTML(t?.value),this.highlighted.emit(t)}))}setTextContent(t){requestAnimationFrame(()=>this._nativeElement.textContent=t)}setInnerHTML(t){requestAnimationFrame(()=>this._nativeElement.innerHTML=Yl(this._sanitizer.sanitize(yn.HTML,t)||""))}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275dir=X({type:e,standalone:!1})}}return e})(),Qr=(()=>{class e extends qr{constructor(){super(...arguments),this.code=h(null,{alias:"highlight"}),this.highlightResult=T(null),this.highlighted=new dt}highlightElement(t){return te(this,null,function*(){let i=yield this._hljs.highlight(t,{language:this.language,ignoreIllegals:this.ignoreIllegals});this.highlightResult.set(i)})}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Ve(e)))(r||e)}})()}static{this.\u0275dir=X({type:e,selectors:[["","highlight",""]],hostVars:2,hostBindings:function(i,r){i&2&&oe("hljs",!0)},inputs:{code:[1,"highlight","code"],language:"language",ignoreIllegals:[2,"ignoreIllegals","ignoreIllegals",zt]},outputs:{highlighted:"highlighted"},features:[tt([{provide:qr,useExisting:e}]),xn,ue]})}}return e})();var xt=(()=>{class e{constructor(){this.language=h.required(),this.code=h(""),this.styled=h(!1,{transform:t=>be(t)}),this.noScroll=h(!1,{transform:t=>be(t)}),this.langClass=F(()=>`lang-${this.language()}`)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-code"]],inputs:{language:[1,"language"],code:[1,"code"],styled:[1,"styled"],noScroll:[1,"noScroll"]},decls:3,vars:8,consts:[[3,"highlight","language"]],template:function(i,r){i&1&&(o(0,"pre"),y(1,"code",0),s(2,`
`),a()),i&2&&(oe("styled",r.styled())("no-scroll",r.noScroll()),l(),Q(r.langClass()),p("highlight",r.code())("language",r.language()))},dependencies:[Qr],styles:["pre[_ngcontent-%COMP%]{padding:1.25rem;max-width:100%;overflow:auto}.styled[_ngcontent-%COMP%]{border-radius:.5rem;border:1px solid var(--ard-detail-ultralight);margin:1.25rem 0}.no-scroll[_ngcontent-%COMP%]{max-width:max-content;overflow:initial}"]})}}return e})();var Zr=Tt(Yr());var Xl=["idLink","","id",""],Zl=["*"],Xr=(()=>{class e{constructor(){this.router=D(Qt)}onClick(t){let i=t.target.parentElement;if(i){for(;!i.id;)if(i=i.parentElement,!i)return;yt("#"+i.id,{offset:96,noHighlight:!0}),this.router.navigate([],{fragment:i.id})}}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["","idLink","","id",""],["h1","id",""],["h2","id",""],["h3","id",""],["h4","id",""],["h5","id",""],["h6","id",""]],attrs:Xl,ngContentSelectors:Zl,decls:4,vars:0,consts:[["color","none",3,"click"]],template:function(i,r){i&1&&(P(),o(0,"ard-icon-button",0),w("click",function(m){return r.onClick(m)}),o(1,"ard-icon"),s(2,"tag"),a()(),M(3))},dependencies:[Qe,qe,Me,Fe],styles:["[_nghost-%COMP%]{position:relative}ard-icon-button[_ngcontent-%COMP%]{opacity:0;appearance:none;position:absolute;right:100%;top:50%;transform:translateY(-50%);font-size:.625em}ard-icon-button[_ngcontent-%COMP%]   ard-icon[_ngcontent-%COMP%]{color:var(--ard-text3)}[_nghost-%COMP%]:hover   ard-icon-button[_ngcontent-%COMP%]{opacity:1;appearance:auto}"]})}}return e})();var Jl=["appAutoId",""],ed=["*"],Be=(()=>{class e{ngAfterViewInit(){this._wasViewInit=!0,this._setElementId()}constructor(){this.elementRef=D(ye),this.autoIdActive=h(!1,{transform:t=>be(t),alias:"appAutoId"}),this.forcedId=h(null),this.idPrefix=h("",{transform:this._toKebab}),this.idText=T(""),this._wasViewInit=!1,Re(()=>{this._setElementId()})}_toKebab(t){return(0,Zr.kebab)(t.replace(/[^\w\- ]/gi,""))}_setElementId(){if(this._wasViewInit)return;let i=this.elementRef.nativeElement.innerText.replace(/tag\x0A/,"");i&&this.idText.set(this._toKebab(i))}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["","appAutoId",""]],inputs:{autoIdActive:[1,"appAutoId","autoIdActive"],forcedId:[1,"forcedId"],idPrefix:[1,"idPrefix"]},attrs:Jl,ngContentSelectors:ed,decls:2,vars:1,consts:[["idLink","",3,"id"]],template:function(i,r){if(i&1&&(P(),o(0,"div",0),M(1),a()),i&2){let d;p("id",(d=r.forcedId())!==null&&d!==void 0?d:r.idText())}},dependencies:[Xr],encapsulation:2})}}return e})();var id=["*"],Pe=(()=>{class e{constructor(){this.htmlId=h(null),this.idPrefix=h("")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-h1"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:id,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,r){i&1&&(P(),o(0,"h1",0),M(1),a()),i&2&&p("appAutoId",r.htmlId()!=null)("forcedId",r.htmlId())("idPrefix",r.idPrefix())},encapsulation:2})}}return e})();var nd=["*"],Ge=(()=>{class e{constructor(){this.htmlId=h(null),this.idPrefix=h("")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-h2"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:nd,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,r){i&1&&(P(),o(0,"h2",0),M(1),a()),i&2&&p("appAutoId",r.htmlId()!=null)("forcedId",r.htmlId())("idPrefix",r.idPrefix())},encapsulation:2})}}return e})();var rd=["*"],Ye=(()=>{class e{constructor(){this.htmlId=h(null),this.idPrefix=h("")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-h3"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:rd,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,r){i&1&&(P(),o(0,"h3",0),M(1),a()),i&2&&p("appAutoId",r.htmlId()!=null)("forcedId",r.htmlId())("idPrefix",r.idPrefix())},encapsulation:2})}}return e})();var od=["*"],_i=(()=>{class e{constructor(){this.htmlId=h(null),this.idPrefix=h("")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-h4"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:od,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,r){i&1&&(P(),o(0,"h4",0),M(1),a()),i&2&&p("appAutoId",r.htmlId()!=null)("forcedId",r.htmlId())("idPrefix",r.idPrefix())},encapsulation:2})}}return e})();var sd=["*"],vi=(()=>{class e{constructor(){this.htmlId=h(null),this.idPrefix=h("")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-h5"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:sd,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,r){i&1&&(P(),o(0,"h5",0),M(1),a()),i&2&&p("appAutoId",r.htmlId()!=null)("forcedId",r.htmlId())("idPrefix",r.idPrefix())},encapsulation:2})}}return e})();var dd=["*"],Ci=(()=>{class e{constructor(){this.htmlId=h(null),this.idPrefix=h("")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-h6"]],inputs:{htmlId:[1,"htmlId"],idPrefix:[1,"idPrefix"]},standalone:!1,ngContentSelectors:dd,decls:2,vars:3,consts:[[3,"appAutoId","forcedId","idPrefix"]],template:function(i,r){i&1&&(P(),o(0,"h6",0),M(1),a()),i&2&&p("appAutoId",r.htmlId()!=null)("forcedId",r.htmlId())("idPrefix",r.idPrefix())},encapsulation:2})}}return e})();var Xe=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=de({type:e})}static{this.\u0275inj=le({imports:[K,Be]})}}return e})();it(Pe,[Be],[]);it(Ge,[Be],[]);it(Ye,[Be],[]);it(_i,[Be],[]);it(vi,[Be],[]);it(Ci,[Be],[]);var st=(e,n)=>({$implicit:e,prefix:n}),hn=e=>({$implicit:e}),pd=(e,n)=>({$implicit:e,headingType:"h5",prefix:n}),ud=(e,n)=>({$implicit:e,isTypeParams:!0,headingType:"h4",prefix:n}),md=(e,n,t)=>({$implicit:e,headingType:n,prefix:t}),hd=(e,n,t)=>({$implicit:e,isTypeParams:!0,headingType:n,prefix:t}),fd=(e,n)=>({$implicit:e,isTypeParams:!0,headingType:"h5",prefix:n}),Jr=(e,n)=>({$implicit:e,headingType:"h6",prefix:n});function gd(e,n){if(e&1&&y(0,"p",7),e&2){let t=u().$implicit;p("innerHTML",t.description,W)}}function _d(e,n){if(e&1){let t=z();o(0,"a",8),w("click",function(){O(t);let r=u().$implicit,d=u(2);return B(d.scrollTo("#"+r.exports))}),o(1,"code"),s(2),a()()}if(e&2){let t=u().$implicit;l(2),g(t.exports)}}function vd(e,n){e&1&&s(0),e&2&&g(", ")}function Cd(e,n){if(e&1){let t=z();o(0,"a",8),w("click",function(){let r=O(t).$implicit,d=u(4);return B(d.scrollTo("#"+r))}),o(1,"code"),s(2),a()(),v(3,vd,1,1)}if(e&2){let t=n.$implicit,i=n.$index,r=u(2).$implicit;l(2),g(t),l(),_(i!==r.exports.length-1?3:-1)}}function yd(e,n){if(e&1&&k(0,Cd,4,2,null,null,L),e&2){let t=u().$implicit;V(t.exports)}}function bd(e,n){if(e&1&&(o(0,"div",6)(1,"app-h3")(2,"code"),s(3),a()(),v(4,gd,1,1,"p",7),o(5,"p"),s(6," Exports: "),v(7,_d,3,1,"a")(8,yd,2,0),a()()),e&2){let t=n.$implicit,i=u(2);l(3),g(t.name),l(),_(t.description?4:-1),l(3),_(i.isString(t.exports)?7:8)}}function xd(e,n){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Modules"),a(),k(3,bd,9,3,"div",6,L),a()),e&2){let t=u();l(3),V(t.data.modules)}}function Sd(e,n){if(e&1&&y(0,"p",7),e&2){let t=u().$implicit;p("innerHTML",t.description,W)}}function Td(e,n){}function wd(e,n){if(e&1&&v(0,Td,0,0,"ng-template",9),e&2){let t=u().$implicit;u(2);let i=$(14);p("ngTemplateOutlet",i)("ngTemplateOutletContext",_e(2,st,t.inputs,t.name))}}function Ad(e,n){}function Dd(e,n){if(e&1&&v(0,Ad,0,0,"ng-template",9),e&2){let t=u().$implicit;u(2);let i=$(16);p("ngTemplateOutlet",i)("ngTemplateOutletContext",_e(2,st,t.outputs,t.name))}}function Ed(e,n){e&1&&(o(0,"i"),s(1,"default"),a())}function Id(e,n){if(e&1&&(o(0,"code"),s(1),a()),e&2){let t=u().$implicit;l(),g(t.selector)}}function Fd(e,n){if(e&1&&(o(0,"tr")(1,"td"),v(2,Ed,2,0,"i")(3,Id,2,1,"code"),a(),o(4,"td"),y(5,"p",7),a()()),e&2){let t=n.$implicit;l(2),_(t.selector===null?2:3),l(3),p("innerHTML",t.description,W)}}function Md(e,n){if(e&1&&(o(0,"app-h4",10),s(1,"Content Children"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),s(6,"Selector"),a(),o(7,"th"),s(8,"Description"),a()()(),o(9,"tbody"),k(10,Fd,6,2,"tr",null,L),a()()),e&2){let t=u().$implicit;p("idPrefix",t.name),l(10),V(t.contentChildren)}}function Pd(e,n){if(e&1){let t=z();o(0,"div",6)(1,"app-h3")(2,"code"),s(3),a()(),v(4,Sd,1,1,"p",7),o(5,"p"),s(6," Selector: "),o(7,"code"),s(8),a()(),o(9,"p"),s(10," Exported from: "),o(11,"a",8),w("click",function(){let r=O(t).$implicit,d=u(2);return B(d.scrollTo("#"+r.exportedFrom))}),o(12,"code"),s(13),a()()(),v(14,wd,1,5,null,9)(15,Dd,1,5,null,9)(16,Md,12,1),a()}if(e&2){let t=n.$implicit;l(3),g(t.name),l(),_(t.description?4:-1),l(4),g(t.selector),l(5),g(t.exportedFrom),l(),_(t.inputs?14:-1),l(),_(t.outputs?15:-1),l(),_(t.contentChildren?16:-1)}}function kd(e,n){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Components"),a(),k(3,Pd,17,7,"div",6,L),a()),e&2){let t=u();l(3),V(t.data.components)}}function Vd(e,n){if(e&1&&y(0,"p",7),e&2){let t=u().$implicit;p("innerHTML",t.description,W)}}function Ld(e,n){}function Rd(e,n){if(e&1&&v(0,Ld,0,0,"ng-template",9),e&2){let t=u().$implicit;u(2);let i=$(14);p("ngTemplateOutlet",i)("ngTemplateOutletContext",_e(2,st,t.inputs,t.name))}}function Od(e,n){}function Bd(e,n){if(e&1&&v(0,Od,0,0,"ng-template",9),e&2){let t=u().$implicit;u(2);let i=$(16);p("ngTemplateOutlet",i)("ngTemplateOutletContext",_e(2,st,t.outputs,t.name))}}function Ud(e,n){if(e&1){let t=z();o(0,"div",6)(1,"app-h3")(2,"code"),s(3),a()(),v(4,Vd,1,1,"p",7),o(5,"p"),s(6," Selector: "),o(7,"code"),s(8),a()(),o(9,"p"),s(10," Exported from: "),o(11,"a",8),w("click",function(){let r=O(t).$implicit,d=u(2);return B(d.scrollTo("#"+r.exportedFrom))}),o(12,"code"),s(13),a()()(),v(14,Rd,1,5,null,9)(15,Bd,1,5,null,9),a()}if(e&2){let t=n.$implicit;l(3),g(t.name),l(),_(t.description?4:-1),l(4),g(t.selector),l(5),g(t.exportedFrom),l(),_(t.inputs?14:-1),l(),_(t.outputs?15:-1)}}function Hd(e,n){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Directives"),a(),k(3,Ud,16,6,"div",6,L),a()),e&2){let t=u();l(3),V(t.data.directives)}}function jd(e,n){}function Nd(e,n){if(e&1&&v(0,jd,0,0,"ng-template",9),e&2){let t=u().$implicit;u(2);let i=$(18);p("ngTemplateOutlet",i)("ngTemplateOutletContext",_e(2,st,t.params,t.name))}}function $d(e,n){if(e&1){let t=z();o(0,"div",6)(1,"app-h3")(2,"code"),s(3),a()(),y(4,"p",7),o(5,"p"),s(6," Selector: "),o(7,"code"),s(8),a()(),o(9,"p"),s(10," Exported from: "),o(11,"a",8),w("click",function(){let r=O(t).$implicit,d=u(2);return B(d.scrollTo("#"+r.exportedFrom))}),o(12,"code"),s(13),a()()(),v(14,Nd,1,5,null,9),a()}if(e&2){let t=n.$implicit;l(3),g(t.name),l(),p("innerHTML",t.description,W),l(4),g(t.selector),l(5),g(t.exportedFrom),l(),_(t.params?14:-1)}}function Kd(e,n){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Pipes"),a(),k(3,$d,15,5,"div",6,L),a()),e&2){let t=u();l(3),V(t.data.pipes)}}function Wd(e,n){}function zd(e,n){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Classes"),a(),v(3,Wd,0,0,"ng-template",9),a()),e&2){let t=u(),i=$(24);l(3),p("ngTemplateOutlet",i)("ngTemplateOutletContext",Ee(2,hn,t.data.classes))}}function qd(e,n){}function Qd(e,n){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Services"),a(),v(3,qd,0,0,"ng-template",9),a()),e&2){let t=u(),i=$(24);l(3),p("ngTemplateOutlet",i)("ngTemplateOutletContext",Ee(2,hn,t.data.services))}}function Gd(e,n){}function Yd(e,n){if(e&1&&(o(0,"app-h4",10),s(1),a(),v(2,Gd,0,0,"ng-template",9)),e&2){let t=n.$implicit,i=n.$index,r=u(2).$implicit;u(2);let d=$(22);p("idPrefix",r.name),l(),A("Overload ",i+1,""),l(),p("ngTemplateOutlet",d)("ngTemplateOutletContext",_e(4,pd,t,r.name+" overload "+(i+1)))}}function Xd(e,n){if(e&1&&k(0,Yd,3,7,null,null,L),e&2){let t=u().$implicit;V(t.overloads)}}function Zd(e,n){}function Jd(e,n){if(e&1&&v(0,Zd,0,0,"ng-template",9),e&2){let t=u().$implicit;u(2);let i=$(22);p("ngTemplateOutlet",i)("ngTemplateOutletContext",_e(2,st,t,t.name))}}function ec(e,n){if(e&1&&(o(0,"div",6)(1,"app-h3")(2,"code"),s(3),a()(),v(4,Xd,2,0)(5,Jd,1,5,null,9),a()),e&2){let t=n.$implicit,i=u(2);l(3),g(t.name),l(),_(i.isOverloadedFunction(t)?4:5)}}function tc(e,n){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Functions"),a(),k(3,ec,6,2,"div",6,L),a()),e&2){let t=u();l(3),V(t.data.functions)}}function ic(e,n){}function nc(e,n){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Interfaces"),a(),v(3,ic,0,0,"ng-template",9),a()),e&2){let t=u(),i=$(24);l(3),p("ngTemplateOutlet",i)("ngTemplateOutletContext",Ee(2,hn,t.data.interfaces))}}function rc(e,n){}function oc(e,n){if(e&1&&v(0,rc,0,0,"ng-template",9),e&2){let t=u().$implicit;u(2);let i=$(18);p("ngTemplateOutlet",i)("ngTemplateOutletContext",_e(2,ud,t.typeParams,t.name))}}function ac(e,n){if(e&1&&(o(0,"div",6)(1,"app-h3")(2,"code"),s(3),a()(),y(4,"p",7)(5,"app-code",11),v(6,oc,1,5,null,9),a()),e&2){let t=n.$implicit;l(3),g(t.name),l(),p("innerHTML",t.description,W),l(),p("code",t.definition),l(),_(t.typeParams!=null&&t.typeParams.length?6:-1)}}function sc(e,n){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Types"),a(),k(3,ac,7,4,"div",6,L),a()),e&2){let t=u();l(3),V(t.data.types)}}function lc(e,n){if(e&1&&(o(0,"div",6)(1,"app-h3")(2,"code"),s(3),a()(),y(4,"p",7)(5,"app-code",11),a()),e&2){let t=n.$implicit;l(3),g(t.name),l(),p("innerHTML",t.description,W),l(),p("code",t.definition)}}function dc(e,n){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Enums"),a(),k(3,lc,6,3,"div",6,L),a()),e&2){let t=u();l(3),V(t.data.enums)}}function cc(e,n){e&1&&s(0),e&2&&g(" All properties are optional, and missing properties will be set to default values.")}function pc(e,n){if(e&1){let t=z();o(0,"div",6)(1,"app-h3")(2,"code"),s(3),a()(),y(4,"p",7),o(5,"p"),s(6," Requires a value of type "),o(7,"a",8),w("click",function(){let r=O(t).$implicit,d=u(2);return B(d.scrollTo("#"+r.type))}),o(8,"code"),s(9),a()(),s(10,"."),v(11,cc,1,1),a()()}if(e&2){let t=n.$implicit;l(3),g(t.name),l(),p("innerHTML",t.description,W),l(5),g(t.type),l(2),_(t.allOptional?11:-1)}}function uc(e,n){if(e&1&&(o(0,"section")(1,"app-h2"),s(2,"Injection Tokens"),a(),k(3,pc,12,4,"div",6,L),a()),e&2){let t=u();l(3),V(t.data.injectionTokens)}}function mc(e,n){e&1&&(o(0,"ard-icon",12),s(1,"delete"),a())}function hc(e,n){e&1&&s(0," Required. ")}function fc(e,n){if(e&1&&(s(0," Optional. Defaults to "),y(1,"code",7),s(2,". ")),e&2){let t=u().$implicit;l(),p("innerHTML",t.default,W)}}function gc(e,n){if(e&1&&(o(0,"tr")(1,"td"),v(2,mc,2,0,"ard-icon",12),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),y(9,"p",7),o(10,"p"),v(11,hc,1,0)(12,fc,3,1),a()()()),e&2){let t=n.$implicit;l(2),_(t.deprecated?2:-1),l(2),g(t.name),l(3),g(t.type),l(2),p("innerHTML",t.description,W),l(2),_(t.required?11:t.required===!1?12:-1)}}function _c(e,n){if(e&1&&(o(0,"app-h4",10),s(1,"Inputs"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),s(6,"Name"),a(),o(7,"th"),s(8,"Type"),a(),o(9,"th"),s(10,"Description"),a()()(),o(11,"tbody"),k(12,gc,13,5,"tr",null,L),a()()),e&2){let t=n.$implicit,i=n.prefix;p("idPrefix",i),l(12),V(t)}}function vc(e,n){e&1&&(o(0,"ard-icon",13),s(1,"delete"),a())}function Cc(e,n){if(e&1&&(o(0,"tr")(1,"td"),v(2,vc,2,0,"ard-icon",13),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),y(9,"p",7),a()()),e&2){let t=n.$implicit;l(2),_(t.deprecated?2:-1),l(2),g(t.name),l(3),g(t.type),l(2),p("innerHTML",t.description,W)}}function yc(e,n){if(e&1&&(o(0,"app-h4",10),s(1,"Outputs"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),s(6,"Name"),a(),o(7,"th"),s(8,"Emitted type"),a(),o(9,"th"),s(10,"Description"),a()()(),o(11,"tbody"),k(12,Cc,10,4,"tr",null,L),a()()),e&2){let t=n.$implicit,i=n.prefix;p("idPrefix",i),l(12),V(t)}}function bc(e,n){if(e&1&&(o(0,"app-h6",10),s(1),a()),e&2){let t=u(),i=t.isTypeParams,r=t.prefix;p("idPrefix",r),l(),A("",i?"Type":""," Params")}}function xc(e,n){if(e&1&&(o(0,"app-h5",10),s(1),a()),e&2){let t=u(),i=t.isTypeParams,r=t.prefix;p("idPrefix",r),l(),A("",i?"Type":""," Params")}}function Sc(e,n){if(e&1&&(o(0,"app-h4",10),s(1),a()),e&2){let t=u(),i=t.isTypeParams,r=t.prefix;p("idPrefix",r),l(),A("",i?"Type":""," Params")}}function Tc(e,n){e&1&&(o(0,"ard-icon",14),s(1,"delete"),a())}function wc(e,n){e&1&&s(0," Required. ")}function Ac(e,n){e&1&&s(0," (merged with provided object) ")}function Dc(e,n){if(e&1&&(s(0," Optional. Defaults to "),y(1,"code",7),v(2,Ac,1,0),s(3,". ")),e&2){let t=u().$implicit;l(),p("innerHTML",t.default,W),l(),_(t.isMergedObject?2:-1)}}function Ec(e,n){if(e&1&&(o(0,"tr")(1,"td"),v(2,Tc,2,0,"ard-icon",14),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),y(9,"p",7),o(10,"p"),v(11,wc,1,0)(12,Dc,4,2),a()()()),e&2){let t=n.$implicit;l(2),_(t.deprecated?2:-1),l(2),g(t.name),l(3),g(t.type),l(2),p("innerHTML",t.description,W),l(2),_(t.required?11:t.required===!1?12:-1)}}function Ic(e,n){if(e&1&&(o(0,"table")(1,"thead")(2,"tr")(3,"th"),s(4,"Name"),a(),o(5,"th"),s(6),a(),o(7,"th"),s(8,"Description"),a()()(),o(9,"tbody"),k(10,Ec,13,5,"tr",null,L),a()()),e&2){let t=u(),i=t.$implicit,r=t.isTypeParams;l(6),g(r?"Extends":"Type"),l(4),V(i)}}function Fc(e,n){e&1&&(o(0,"p"),s(1,"No params."),a())}function Mc(e,n){if(e&1&&v(0,bc,2,2,"app-h6",10)(1,xc,2,2,"app-h5",10)(2,Sc,2,2,"app-h4",10)(3,Ic,12,1,"table")(4,Fc,2,0,"p"),e&2){let t=n.$implicit,i=n.headingType;_(i==="h6"?0:i==="h5"?1:2),l(3),_(t!=null&&t.length?3:4)}}function Pc(e,n){e&1&&(o(0,"ard-icon",15),s(1,"delete"),a())}function kc(e,n){if(e&1&&(o(0,"tr")(1,"td"),v(2,Pc,2,0,"ard-icon",15),o(3,"code"),s(4),a()(),o(5,"td")(6,"code"),s(7),a()(),o(8,"td"),y(9,"p",7),a()()),e&2){let t=n.$implicit;l(2),_(t.deprecated?2:-1),l(2),g(t.name),l(3),g(t.type),l(2),p("innerHTML",t.description,W)}}function Vc(e,n){if(e&1&&(o(0,"app-h4",10),s(1,"Properties"),a(),o(2,"table")(3,"thead")(4,"tr")(5,"th"),s(6,"Name"),a(),o(7,"th"),s(8,"Type"),a(),o(9,"th"),s(10,"Description"),a()()(),o(11,"tbody"),k(12,kc,10,4,"tr",null,L),a()()),e&2){let t=n.$implicit,i=n.prefix;p("idPrefix",i),l(12),V(t)}}function Lc(e,n){}function Rc(e,n){if(e&1&&v(0,Lc,0,0,"ng-template",9),e&2){let t=u(),i=t.$implicit,r=t.headingType,d=t.prefix;u();let m=$(18);p("ngTemplateOutlet",m)("ngTemplateOutletContext",ki(2,hd,i.typeParams,r,d))}}function Oc(e,n){}function Bc(e,n){if(e&1&&(o(0,"app-h6",10),s(1,"Return type"),a()),e&2){let t=u().prefix;p("idPrefix",t)}}function Uc(e,n){if(e&1&&(o(0,"app-h5",10),s(1,"Return type"),a()),e&2){let t=u().prefix;p("idPrefix",t)}}function Hc(e,n){if(e&1&&(o(0,"app-h4",10),s(1,"Return type"),a()),e&2){let t=u().prefix;p("idPrefix",t)}}function jc(e,n){if(e&1&&(y(0,"p",7),v(1,Rc,1,6,null,9)(2,Oc,0,0,"ng-template",9)(3,Bc,2,1,"app-h6",10)(4,Uc,2,1,"app-h5",10)(5,Hc,2,1,"app-h4",10),o(6,"p"),s(7," Return type: "),o(8,"code"),s(9),a()()),e&2){let t=n.$implicit,i=n.headingType,r=n.prefix;u();let d=$(18);p("innerHTML",t.description,W),l(),_(t.typeParams!=null&&t.typeParams.length?1:-1),l(),p("ngTemplateOutlet",d)("ngTemplateOutletContext",ki(6,md,t.params,i,r)),l(),_(i==="h6"?3:i==="h5"?4:5),l(6),g(t.returnType)}}function Nc(e,n){if(e&1&&(o(0,"p"),s(1," Provided in: "),o(2,"code"),s(3),a()()),e&2){let t=u().$implicit;l(3),A("",t.providedIn," ")}}function $c(e,n){if(e&1&&(o(0,"p"),s(1," Extends: "),o(2,"code"),s(3),a()()),e&2){let t=u().$implicit;l(3),A("",t.extends," ")}}function Kc(e,n){}function Wc(e,n){if(e&1&&v(0,Kc,0,0,"ng-template",9),e&2){let t=u().$implicit;u(2);let i=$(18);p("ngTemplateOutlet",i)("ngTemplateOutletContext",_e(2,fd,t.typeParams,t.name))}}function zc(e,n){}function qc(e,n){if(e&1&&v(0,zc,0,0,"ng-template",9),e&2){let t=u().$implicit;u(2);let i=$(20);p("ngTemplateOutlet",i)("ngTemplateOutletContext",_e(2,st,t.properties,t.name))}}function Qc(e,n){}function Gc(e,n){if(e&1&&(o(0,"app-h5",10)(1,"code"),s(2),a(),s(3),a(),v(4,Qc,0,0,"ng-template",9)),e&2){let t=n.$implicit,i=n.$index,r=u(2).$implicit,d=u(2).$implicit;u(2);let m=$(22);p("idPrefix",d.name+" methods"),l(2),g(r.name),l(),A(" (overload ",i+1,") "),l(),p("ngTemplateOutlet",m)("ngTemplateOutletContext",_e(5,Jr,t,d.name+" methods "+r.name+" overload "+(i+1)))}}function Yc(e,n){if(e&1&&k(0,Gc,5,8,null,null,L),e&2){let t=u().$implicit;V(t.overloads)}}function Xc(e,n){}function Zc(e,n){if(e&1&&(o(0,"app-h5",10)(1,"code"),s(2),a()(),v(3,Xc,0,0,"ng-template",9)),e&2){let t=u().$implicit,i=u(2).$implicit;u(2);let r=$(22);p("idPrefix",i.name+" methods"),l(2),g(t.name),l(),p("ngTemplateOutlet",r)("ngTemplateOutletContext",_e(4,Jr,t,i.name+" methods "+t.name))}}function Jc(e,n){if(e&1&&v(0,Yc,2,0)(1,Zc,4,7),e&2){let t=n.$implicit,i=u(4);_(i.isOverloadedFunction(t)?0:1)}}function ep(e,n){if(e&1&&(o(0,"app-h4",10),s(1,"Methods"),a(),k(2,Jc,2,1,null,null,L)),e&2){let t=u().$implicit;p("idPrefix",t.name),l(2),V(t.methods)}}function tp(e,n){if(e&1&&(o(0,"div",6)(1,"app-h3")(2,"code"),s(3),a()(),v(4,Nc,4,1,"p")(5,$c,4,1,"p"),y(6,"p",7),v(7,Wc,1,5,null,9)(8,qc,1,5,null,9)(9,ep,4,1),a()),e&2){let t=n.$implicit;l(3),g(t.name),l(),_(t.providedIn?4:-1),l(),_(t.extends?5:-1),l(),p("innerHTML",t.description,W),l(),_(t.typeParams!=null&&t.typeParams.length?7:-1),l(),_(t.properties!=null&&t.properties.length?8:-1),l(),_(t.methods!=null&&t.methods.length?9:-1)}}function ip(e,n){if(e&1&&k(0,tp,10,7,"div",6,L),e&2){let t=n.$implicit;V(t)}}var eo=(()=>{class e{constructor(){this._route=D(qt),this.data=this._route.snapshot.data}scrollTo(t){yt(t,{offset:"20%"})}isString(t){return!Array.isArray(t)}isOverloadedFunction(t){return"overloads"in t}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-api-page"]],decls:25,vars:12,consts:[["inputsTable",""],["outputsTable",""],["paramsTable",""],["propertiesTable",""],["functionTable",""],["classOrInterface",""],[1,"item-container"],[3,"innerHTML"],[3,"click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"idPrefix"],["language","typescript","styled","",3,"code"],["title","This input is deprecated."],["title","This output is deprecated."],["title","This param is deprecated."],["title","This property is deprecated."]],template:function(i,r){i&1&&(o(0,"app-h1"),s(1),a(),v(2,xd,5,0,"section")(3,kd,5,0,"section")(4,Hd,5,0,"section")(5,Kd,5,0,"section")(6,zd,4,4,"section")(7,Qd,4,4,"section")(8,tc,5,0,"section")(9,nc,4,4,"section")(10,sc,5,0,"section")(11,dc,5,0,"section")(12,uc,5,0,"section")(13,_c,14,1,"ng-template",null,0,Ae)(15,yc,14,1,"ng-template",null,1,Ae)(17,Mc,5,2,"ng-template",null,2,Ae)(19,Vc,14,1,"ng-template",null,3,Ae)(21,jc,10,10,"ng-template",null,4,Ae)(23,ip,2,0,"ng-template",null,5,Ae)),i&2&&(l(),A("API reference for ",r.data.name," \u2014 Ardium UI"),l(),_(r.data.modules?2:-1),l(),_(r.data.components?3:-1),l(),_(r.data.directives?4:-1),l(),_(r.data.pipes?5:-1),l(),_(r.data.classes?6:-1),l(),_(r.data.services?7:-1),l(),_(r.data.functions?8:-1),l(),_(r.data.interfaces?9:-1),l(),_(r.data.types?10:-1),l(),_(r.data.enums?11:-1),l(),_(r.data.injectionTokens?12:-1))},dependencies:[Me,Fe,K,ot,Ie,xt,Xe,Pe,Ge,Ye,_i,vi,Ci],styles:[`app-api-page{font-size:.9375rem}app-api-page h1{padding-bottom:1rem}app-api-page h2{font-weight:300;font-size:1.5rem;width:100%;border-bottom:1px solid var(--ard-detail-ultralight);padding-bottom:.5rem;margin-bottom:1rem}app-api-page h3{font-weight:500;font-size:1.25rem}app-api-page td{position:relative;min-width:100px}app-api-page table ard-icon{position:absolute;right:100%;color:rgb(var(--ard-danger-700))}
`],encapsulation:2})}}return e})();var yi=(()=>{class e{constructor(){this.contentToCopy=h.required()}executeCopy(){navigator.clipboard.writeText(this.contentToCopy())}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-copy-button"]],inputs:{contentToCopy:[1,"contentToCopy"]},decls:3,vars:0,consts:[[1,"copy-button",3,"click"]],template:function(i,r){i&1&&(o(0,"ard-icon-button",0),w("click",function(){return r.executeCopy()}),o(1,"ard-icon"),s(2,"content-copy"),a()())},dependencies:[Qe,qe,Me,Fe],encapsulation:2})}}return e})();var np=["containerLeft"],rp=["containerRight"],op=[[["","side","left"]],[["","side","right"]]],ap=["[side='left']","[side='right']"];function sp(e,n){if(e&1&&y(0,"app-copy-button",8),e&2){let t=u();p("contentToCopy",t.contentToCopyLeft())}}function lp(e,n){}function dp(e,n){if(e&1&&v(0,lp,0,0,"ng-template",9),e&2){u();let t=$(22);p("ngTemplateOutlet",t)}}function cp(e,n){if(e&1&&y(0,"app-copy-button",8),e&2){let t=u();p("contentToCopy",t.contentToCopyRight())}}function pp(e,n){}function up(e,n){if(e&1&&v(0,pp,0,0,"ng-template",9),e&2){u();let t=$(22);p("ngTemplateOutlet",t)}}function mp(e,n){if(e&1){let t=z();o(0,"ard-icon-button",12),w("click",function(){O(t);let r=u(2);return B(r.scrollSync.set(!r.scrollSync()))}),y(1,"ard-icon",13),a()}if(e&2){let t=u(2);p("title",(t.scrollSync(),"Turn off scroll sync")),l(),p("icon",t.scrollSync()?"sync":"sync_disabled")}}function hp(e,n){if(e&1){let t=z();o(0,"ard-icon-button",12),w("click",function(){O(t);let r=u(2);return B(r.verticalLayout.set(!r.verticalLayout()))}),y(1,"ard-icon",13),a()}if(e&2){let t=u(2);p("title",t.verticalLayout()?"Current view: vertical":"Current view: side-by-side"),l(),p("icon",t.verticalLayout()?"splitscreen":"view_column_2")}}function fp(e,n){if(e&1&&v(0,mp,2,2,"ard-icon-button",11)(1,hp,2,2,"ard-icon-button",11),e&2){let t=u();_(t.allowScrollSync()?0:-1),l(),_(t.allowLayoutChange()?1:-1)}}var Ht={Off:"off",Left:"left",Right:"right",Both:"both"},to=(()=>{class e{constructor(){this.containerLeft=me("containerLeft"),this.containerRight=me("containerRight"),this.textLeft=h.required(),this.textRight=h.required(),this.contentToCopyLeft=h(""),this.contentToCopyRight=h(""),this.allowScrollSync=h(!1,{transform:t=>be(t)}),this.allowLayoutChange=h(!1,{transform:t=>be(t)}),this.allowCopy=h(Ht.Both),this.allowCopyLeft=F(()=>this.allowCopy()===Ht.Left||this.allowCopy()===Ht.Both),this.allowCopyRight=F(()=>this.allowCopy()===Ht.Right||this.allowCopy()===Ht.Both),this.scrollSync=et(!1),this.verticalLayout=et(!1)}onContainerLeftScroll(){if(this.scrollSync())return;let[t,i]=[this.containerLeft(),this.containerRight()];!t||!i||i.nativeElement.scrollTo(t.nativeElement.scrollLeft,0)}onContainerRightScroll(){if(this.scrollSync())return;let[t,i]=[this.containerLeft(),this.containerRight()];!t||!i||t.nativeElement.scrollTo(i.nativeElement.scrollLeft,0)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-two-pane-container"]],viewQuery:function(i,r){i&1&&(he(r.containerLeft,np,5),he(r.containerRight,rp,5)),i&2&&fe(2)},inputs:{textLeft:[1,"textLeft"],textRight:[1,"textRight"],contentToCopyLeft:[1,"contentToCopyLeft"],contentToCopyRight:[1,"contentToCopyRight"],allowScrollSync:[1,"allowScrollSync"],allowLayoutChange:[1,"allowLayoutChange"],allowCopy:[1,"allowCopy"],scrollSync:[1,"scrollSync"],verticalLayout:[1,"verticalLayout"]},outputs:{scrollSync:"scrollSyncChange",verticalLayout:"verticalLayoutChange"},ngContentSelectors:ap,decls:23,vars:8,consts:[["containerLeft",""],["containerRight",""],["buttons",""],[1,"two-pane-container"],[1,"content-container"],[1,"top-bar"],[1,"heading"],[1,"buttons"],[3,"contentToCopy"],[3,"ngTemplateOutlet"],[1,"content",3,"scroll"],[3,"title"],[3,"click","title"],[3,"icon"]],template:function(i,r){if(i&1){let d=z();P(op),o(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6),s(4),a(),o(5,"div",7),v(6,sp,1,1,"app-copy-button",8)(7,dp,1,1,null,9),a()(),o(8,"div",10,0),w("scroll",function(){return O(d),B(r.onContainerLeftScroll())}),M(10),a()(),o(11,"div",4)(12,"div",5)(13,"div",6),s(14),a(),o(15,"div",7),v(16,cp,1,1,"app-copy-button",8)(17,up,1,1,null,9),a()(),o(18,"div",10,1),w("scroll",function(){return O(d),B(r.onContainerRightScroll())}),M(20,1),a()()(),v(21,fp,2,2,"ng-template",null,2,Ae)}i&2&&(oe("vertical",r.verticalLayout()),l(4),g(r.textLeft()),l(2),_(r.allowCopyLeft()?6:-1),l(),_(r.verticalLayout()?7:-1),l(7),g(r.textRight()),l(2),_(r.allowCopyRight()?16:-1),l(),_(r.verticalLayout()?-1:17))},dependencies:[K,ot,yi,Qe,qe,Me,Fe],styles:[".two-pane-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;border-radius:.5rem;border:1px solid var(--ard-detail-ultralight);margin:1.25rem 0;overflow:hidden}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{max-width:100%;overflow:hidden}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]:first-of-type{border-right:1px solid var(--ard-detail-ultralight);position:relative}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{padding:.5rem 1.25rem 0;font-weight:500}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;position:relative;top:.25rem;right:.25rem}.two-pane-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{max-width:100%;overflow:auto}.two-pane-container.vertical[_ngcontent-%COMP%]{grid-template-columns:1fr}.two-pane-container.vertical[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]:first-of-type{border-right:none;border-bottom:1px solid var(--ard-detail-ultralight)}"]})}}return e})();var gp=["*"],io=(()=>{class e{constructor(){this.code=h.required(),this.codeLanguage=h.required()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-example-with-result"]],inputs:{code:[1,"code"],codeLanguage:[1,"codeLanguage"]},ngContentSelectors:gp,decls:4,vars:3,consts:[["textLeft","Code","textRight","Result","allowCopy","left",3,"verticalLayout"],["side","left","styled","false","noScroll","",3,"language","code"],["side","right"]],template:function(i,r){i&1&&(P(),o(0,"app-two-pane-container",0),y(1,"app-code",1),Mi(2,2),M(3),Pi(),a()),i&2&&(p("verticalLayout",!0),l(),p("language",r.codeLanguage())("code",r.code()))},dependencies:[to,xt],encapsulation:2})}}return e})();var no={FT:"Fatal",NF:"Non-Fatal",IS:"Impossible State",WA:"Warning"};var ro=(()=>{class e{constructor(){this.severity=h.required({alias:"code",transform:t=>{let i=t.slice(4,6);return no[i]}})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-exception-severity"]],hostVars:2,hostBindings:function(i,r){i&2&&Q("severity-"+r.severity().toLowerCase().replace(" ","-"))},inputs:{severity:[1,"code","severity"]},decls:1,vars:1,template:function(i,r){i&1&&s(0),i&2&&g(r.severity())},styles:["[_nghost-%COMP%]{padding:.125rem .25rem;border-radius:4px}.severity-fatal[_nghost-%COMP%]{background-color:rgb(var(--ard-danger-500));color:var(--ard-text-alt)}.severity-non-fatal[_nghost-%COMP%]{background-color:#ff7707;color:var(--ard-text-alt)}.severity-impossible-state[_nghost-%COMP%]{background-color:#7707ff;color:var(--ard-text-alt)}.severity-warning[_nghost-%COMP%]{background-color:rgb(var(--ard-warn-500));color:var(--ard-text-alt)}"]})}}return e})();var _p=(e,n)=>n.name,vp=(e,n)=>n.code;function Cp(e,n){if(e&1&&(o(0,"p"),s(1),a()),e&2){let t=u();l(),A("",t.data.name," doesn't raise any own exceptions.")}}function yp(e,n){if(e&1&&y(0,"p",2),e&2){let t=u().$implicit;p("innerHTML",t.description,W)}}function bp(e,n){if(e&1&&y(0,"p",2),e&2){let t=n.$implicit;p("innerHTML",t,W)}}function xp(e,n){if(e&1&&k(0,bp,1,1,"p",2,L),e&2){let t=u().$implicit;V(t.description)}}function Sp(e,n){if(e&1&&(o(0,"app-example-with-result",3)(1,"p",4),s(2),a()()),e&2){let t=n.$implicit;p("code",t.code)("codeLanguage",t.codeLanguage),l(2),g(t.result)}}function Tp(e,n){if(e&1&&k(0,Sp,3,3,"app-example-with-result",3,L),e&2){let t=u().$implicit;V(t.exampleResults)}}function wp(e,n){if(e&1&&(o(0,"app-h3",0)(1,"code"),s(2),a()(),o(3,"p")(4,"strong"),s(5,"Severity: "),a(),y(6,"app-exception-severity",1),a(),y(7,"blockquote",2),v(8,yp,1,1,"p",2)(9,xp,2,0)(10,Tp,2,0)),e&2){let t=n.$implicit,i=u(3);p("htmlId",t.code),l(2),A(" ",t.code," "),l(4),p("code",t.code),l(),p("innerHTML",t.exceptionText,W),l(),_(i.isString(t.description)?8:9),l(2),_(t.exampleResults!=null&&t.exampleResults.length?10:-1)}}function Ap(e,n){if(e&1&&(o(0,"app-h2"),s(1),a(),k(2,wp,11,6,null,null,vp)),e&2){let t=n.$implicit;l(),g(t.name),l(),V(t.exceptions)}}function Dp(e,n){if(e&1&&k(0,Ap,4,1,null,null,_p),e&2){let t=u();V(t.data.exceptions)}}var oo=(()=>{class e{constructor(){this._route=D(qt),this.data=this._route.snapshot.data}scrollTo(t){yt(t,{offset:"20%"})}isString(t){return!Array.isArray(t)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-exceptions-page"]],decls:4,vars:2,consts:[[3,"htmlId"],[3,"code"],[3,"innerHTML"],[3,"code","codeLanguage"],[1,"example-with-result-result"]],template:function(i,r){i&1&&(o(0,"app-h1"),s(1),a(),v(2,Cp,2,1,"p")(3,Dp,2,0)),i&2&&(l(),A("Exception list for ",r.data.name," \u2014 Ardium UI"),l(),_(r.data.exceptions!=null&&r.data.exceptions.length?3:2))},dependencies:[ro,io,Xe,Pe,Ge,Ye],styles:[".example-with-result-result[_ngcontent-%COMP%]{padding:1.25rem;font-family:monospace}"]})}}return e})();var ao=(()=>{class e{constructor(){this._router=D(Qt),this.currentRoute=Ln(this._router.events.pipe(At(t=>t instanceof kn),Je(t=>t.url)))}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=ke({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Ep(e,n){if(e&1&&(o(0,"a",3),s(1),a()),e&2){let t=n.$implicit,i=u();oe("active",i.isActiveRoute(t)),p("routerLink","./"+t),l(),g(t)}}var lo=(()=>{class e{constructor(){this.POSSIBLE_TABS=["overview","api","exceptions"],this._navService=D(ao)}isActiveRoute(t){return this._navService.currentRoute()?.endsWith(t)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-common"]],decls:5,vars:0,consts:[[1,"component-article"],[1,"page-tabber"],[3,"routerLink","active"],[3,"routerLink"]],template:function(i,r){i&1&&(o(0,"article",0)(1,"div",1),k(2,Ep,2,4,"a",2,L),a(),y(4,"router-outlet"),a()),i&2&&(l(2),V(r.POSSIBLE_TABS))},dependencies:[Ie,Vn,ct],styles:[".page-tabber[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid var(--ard-detail-ultralight)}.page-tabber[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:10rem;height:3rem;display:grid;place-items:center;text-transform:uppercase;text-decoration:none;color:var(--ard-text2);font-size:.875rem;font-weight:500;background-color:transparent;transition:background-color .1s ease-in-out;border-bottom:2px solid transparent}.page-tabber[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .page-tabber[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible{background-color:rgba(var(--ard-overlay-rgb),5%)}.page-tabber[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{border-bottom-color:rgb(var(--ard-primary-500))}"]})}}return e})();var co=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-under-construction"]],decls:12,vars:0,consts:[[1,"text"],[1,"oops"],[1,"long"],[1,"image"],["src","/ardium-ui-docs/assets/under-construction.svg","alt","Laptop marked as under construction with workers and a crane around it"]],template:function(i,r){i&1&&(o(0,"article")(1,"div",0)(2,"app-h1")(3,"span",1),s(4,"Oops!"),a(),y(5,"br"),o(6,"span",2),s(7,"Under construction"),a()(),o(8,"p"),s(9,"This documentation page is currently under construction. Come back soon!"),a()(),o(10,"div",3),y(11,"img",4),a()())},dependencies:[Xe,Pe],styles:['@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKcg72j00.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKew72j00.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKcw72j00.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKfA72j00.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKcQ72j00.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKfw72.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCjC3jvWyNL4U.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCjC3jtGyNL4U.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCjC3jvGyNL4U.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCjC3js2yNL4U.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCjC3jvmyNL4U.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCjC3jsGyN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}article[_ngcontent-%COMP%]{height:100%;display:grid;align-items:center;grid-template-columns:4fr 6fr;font-family:Ubuntu,sans-serif;max-width:70rem;box-sizing:content-box;margin:0 auto}.text[_ngcontent-%COMP%]{padding-bottom:8rem}h1[_ngcontent-%COMP%]{font-weight:500;color:rgb(var(--ard-primary-900));padding-bottom:1.5rem}h1[_ngcontent-%COMP%]   .oops[_ngcontent-%COMP%]{letter-spacing:.1em;font-size:5rem}h1[_ngcontent-%COMP%]   .long[_ngcontent-%COMP%]{font-size:2.625rem;overflow:visible;white-space:nowrap}p[_ngcontent-%COMP%]{opacity:50%;font-size:1rem}@media only screen and (min-width: 1340px){article[_ngcontent-%COMP%]{padding-right:10rem}}@media only screen and (min-width: 1700px){article[_ngcontent-%COMP%]{padding-right:20rem}}']})}}return e})();function qg(e,n,t,i,r,d,m){return d||(d={name:n}),{path:e,name:n,desc:t,img:m,component:lo,children:[{path:"overview",component:i},{path:"api",component:eo,data:r},{path:"exceptions",component:oo,data:d},{path:"**",redirectTo:"overview"}]}}function Qg(e,n,t,i=!1){return{path:e,name:n,desc:t,img:i?void 0:"assets/placeholder.jpg",component:co}}function Ip(e,n){if(e&1&&y(0,"img",4),e&2){let t=u().$implicit;p("src",t.img,Kt)}}function Fp(e,n){if(e&1&&(o(0,"a",2)(1,"ard-card",3),v(2,Ip,1,1,"img",4),o(3,"ard-card-content")(4,"ard-card-title"),s(5),a(),o(6,"p"),s(7),a()()()()),e&2){let t=n.$implicit;p("routerLink",t.path),l(2),_(t.img?2:-1),l(3),g(t.name),l(2),g(t.desc)}}var e0=(()=>{class e{constructor(){this.data=h.required(),this.topText=h.required()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-home-page"]],inputs:{data:[1,"data"],topText:[1,"topText"]},decls:6,vars:1,consts:[[1,"center-text"],[1,"component-grid"],[3,"routerLink"],["appearance","outlined"],["ard-card-image","",3,"src"]],template:function(i,r){i&1&&(o(0,"article")(1,"p",0),s(2),a(),o(3,"div",1),k(4,Fp,8,4,"a",2,L),a()()),i&2&&(l(2),g(r.topText()),l(2),V(r.data()))},dependencies:[Ie,ct,$r,Nr,Ur,Hr,jr],styles:[".center-text[_ngcontent-%COMP%]{padding:1rem 0;text-align:center}.component-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,280px);padding:1.25rem;gap:2.5rem;justify-content:center}a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]{width:280px;height:100%;background-color:transparent;transition:background-color .15s ease-in-out}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;min-width:calc(100% + 4px);left:-2px;top:-2px;min-height:10rem;border:1px solid transparent}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]   ard-card-title[_ngcontent-%COMP%]{padding-bottom:1rem;padding-top:.5rem}a[_ngcontent-%COMP%]   ard-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-bottom:0}a[_ngcontent-%COMP%]:hover   ard-card[_ngcontent-%COMP%]{background-color:rgba(var(--ard-primary-500),.05)}"]})}}return e})();var De={TS:"typescript",SCSS:"scss",HTML:"xml",PlainText:"txt"};var po=(()=>{class e{loadDynamicComponent(t,i){if(!i)return;i.clear(),i.createComponent(t).changeDetectorRef.detectChanges()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=ke({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Mp=["exampleDisplay"];function Pp(e,n){if(e&1&&(o(0,"div",4),s(1),a()),e&2){let t=u();l(),g(t.heading())}}function kp(e,n){if(e&1){let t=z();o(0,"div",5)(1,"ard-icon-button",7),w("click",function(){O(t);let r=u();return B(r.toggleCodeShown())}),o(2,"ard-icon"),s(3,"code"),a()()()}}function Vp(e,n){}function Lp(e,n){if(e&1&&(o(0,"ard-tab",11)(1,"div",9),y(2,"app-code",12),v(3,Vp,0,0,"ng-template",13),a()()),e&2){let t=n.$implicit;u(3);let i=$(10);p("tabId",t.label)("label",t.label),l(2),p("language",t.type)("code",t.code),l(),p("ngTemplateOutlet",i)}}function Rp(e,n){if(e&1){let t=z();o(0,"ard-tabber",10),w("changeTab",function(r){O(t);let d=u(2);return B(d.onTabChange(r))}),k(1,Lp,4,5,"ard-tab",11,L),a()}if(e&2){let t,i=u(2);p("initialTab",(t=i.initialTab())==null?null:t.toUpperCase()),l(),V(i.mappedData())}}function Op(e,n){}function Bp(e,n){if(e&1&&(o(0,"div",9),y(1,"app-code",12),v(2,Op,0,0,"ng-template",13),a()),e&2){let t=u(2),i=$(10);l(),p("language",t.mappedData()[0].type)("code",t.mappedData()[0].code),l(),p("ngTemplateOutlet",i)}}function Up(e,n){if(e&1&&v(0,Rp,3,1,"ard-tabber",8)(1,Bp,3,3,"div",9),e&2){let t=u();_(t.mappedData().length>1?0:1)}}function Hp(e,n){}function jp(e,n){if(e&1&&(y(0,"app-code",12),v(1,Hp,0,0,"ng-template",13)),e&2){let t=u(),i=$(10);p("language",t.simpleCodeType())("code",t.simpleCodePiece()),l(),p("ngTemplateOutlet",i)}}function Np(e,n){if(e&1&&(o(0,"p"),s(1,"This example can only be viewed in its own tab. "),o(2,"a",14),s(3,"Open example page"),a(),s(4,"."),a()),e&2){let t=u();l(2),p("href",t.viewInFullWindowLink(),Kt)}}function $p(e,n){e&1&&wn(0,null,1)}function Kp(e,n){if(e&1&&y(0,"app-copy-button",15),e&2){let t=u();p("contentToCopy",t.codeToCopy())}}function Wp(e){switch(e){case"ts":return De.TS;case"html":return De.HTML;case"scss":case"css":return De.SCSS;default:switch(e.split(".").at(-1)?.toLowerCase()){case"ts":return De.TS;case"html":return De.HTML;case"scss":case"css":return De.SCSS;default:return De.PlainText}}}var uo=["HTML","TS","SCSS","CSS"],bi=(()=>{class e{constructor(){this.data=h.required(),this.heading=h.required(),this.viewInFullWindowLink=h(null,{transform:t=>t?.startsWith("/")?t:t&&"/"+t}),this.isSimpleCodeDefined=F(()=>!!this.simpleCodePiece()),this.simpleCodePiece=F(()=>{let t=this.data();return t.simpleTs??t.simpleHtml??t.simpleScss??t.simpleTxt}),this.simpleCodeType=F(()=>{let t=this.data();return t.simpleTs?De.TS:t.simpleHtml?De.HTML:t.simpleScss?De.SCSS:De.PlainText}),this.isComponentDefined=F(()=>!!this.data().component),this.isCodeShown=et(!0),this.initialTab=h(void 0),this.nonExpandable=h(!1,{transform:t=>be(t)}),this.codeToCopy=F(()=>this.shouldShowFullCodeData()?(this._currentTab()?this.mappedData().find(i=>i.label===this._currentTab()):this.mappedData()[0]).code:this.simpleCodePiece()),this._currentTab=T(""),this.shouldShowFullCodeData=F(()=>this.isCodeShown()||!this.isSimpleCodeDefined()),this.displayWhenSimple=h(!1,{transform:t=>be(t)}),this.mappedData=F(()=>{let t=this.data();return Object.entries(t).filter(i=>i[0]!=="component"&&i[0]!=="simpleHtml"&&i[0]!=="simpleScss"&&i[0]!=="simpleTs").map(i=>{let r=i[0];return typeof r=="string"&&r.match(/^(html|s?css|ts)$/i)&&(r=r.toUpperCase()),{label:r,code:i[1],type:Wp(r)}}).sort((i,r)=>{let d=uo.indexOf(i.label),m=uo.indexOf(r.label);return d!==-1&&m!==-1?d-m:d!==-1?-1:m!==-1?1:i.label.localeCompare(r.label)})}),this.componentLoader=D(po),this.exampleDisplay=me("exampleDisplay",{read:Wt}),Re(()=>{(this.isSimpleCodeDefined()||this.nonExpandable())&&this.isCodeShown.set(!1)})}ngOnInit(){this.nonExpandable()&&this.isCodeShown.set(!1)}toggleCodeShown(){this.isCodeShown.update(t=>!t)}onTabChange(t){this._currentTab.set(t)}ngAfterViewInit(){this._renderComponent()}_renderComponent(){if(this.viewInFullWindowLink())return;let t=this.data().component;t&&this.componentLoader.loadDynamicComponent(t,this.exampleDisplay())}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-code-example"]],viewQuery:function(i,r){i&1&&he(r.exampleDisplay,Mp,5,Wt),i&2&&fe()},hostVars:10,hostBindings:function(i,r){i&2&&oe("simple-example",r.isSimpleCodeDefined()&&!r.isCodeShown())("code-shown",r.isCodeShown())("component-defined",r.isComponentDefined())("non-expandable",r.nonExpandable())("has-single-tab",r.mappedData().length===1)},inputs:{data:[1,"data"],heading:[1,"heading"],viewInFullWindowLink:[1,"viewInFullWindowLink"],isCodeShown:[1,"isCodeShown"],initialTab:[1,"initialTab"],nonExpandable:[1,"nonExpandable"],displayWhenSimple:[1,"displayWhenSimple"]},outputs:{isCodeShown:"isCodeShownChange"},decls:11,vars:6,consts:[["copyButton",""],["exampleDisplay",""],[1,"example-container"],[1,"example-container__top-bar"],[1,"example-container__heading"],[1,"example-container__buttons"],[1,"example-display"],["title","Show full code",3,"click"],["stretchTabs","false",3,"initialTab"],[1,"tab-relative-container"],["stretchTabs","false",3,"changeTab","initialTab"],[3,"tabId","label"],[3,"language","code"],[3,"ngTemplateOutlet"],["target","_blank",3,"href"],["title","Copy code",1,"copy-button",3,"contentToCopy"]],template:function(i,r){i&1&&(o(0,"div",2)(1,"div",3),v(2,Pp,2,1,"div",4)(3,kp,4,0,"div",5),a(),v(4,Up,2,1)(5,jp,2,3),a(),o(6,"div",6),v(7,Np,5,1,"p")(8,$p,2,0,"ng-container"),a(),v(9,Kp,1,1,"ng-template",null,0,Ae)),i&2&&(l(2),_(r.shouldShowFullCodeData()?2:-1),l(),_(!r.nonExpandable()||!r.isSimpleCodeDefined()?3:-1),l(),_(r.isCodeShown()?4:r.shouldShowFullCodeData()?-1:5),l(2),oe("hidden",!r.isComponentDefined()||!r.displayWhenSimple()&&!r.shouldShowFullCodeData()),l(),_(r.viewInFullWindowLink()?7:8))},dependencies:[K,ot,Ie,Wr,Kr,li,Qe,qe,Me,Fe,xt,yi],styles:["[_nghost-%COMP%]{width:100%;display:flex;flex-direction:column;border:1px solid var(--ard-detail-ultralight);border-radius:8px;margin:1.25rem 0;position:relative}[_nghost-%COMP%]   .example-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   .example-container__top-bar[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;padding:.5rem 1rem 0 1.5rem}[_nghost-%COMP%]   .example-container__heading[_ngcontent-%COMP%]{line-height:39px;color:#514346}[_nghost-%COMP%]   .example-display[_ngcontent-%COMP%]{padding:1rem 1.5rem;border-top:1px solid var(--ard-detail-ultralight)}[_nghost-%COMP%]   .example-display.hidden[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .tab-relative-container[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   .copy-button[_ngcontent-%COMP%]{position:absolute;top:.5rem;right:1rem}.simple-example[_nghost-%COMP%]   .example-container__top-bar[_ngcontent-%COMP%]{position:absolute;right:0;width:max-content}[_nghost-%COMP%]:not(.code-shown).simple-example:not(.non-expandable)   .copy-button[_ngcontent-%COMP%]{transform:translate(calc(-100% + .125rem))}[_nghost-%COMP%]:not(.code-shown)   .example-container[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.component-defined)   .example-container[_ngcontent-%COMP%]{border-bottom:none}.has-single-tab.code-shown[_nghost-%COMP%]   .example-container__top-bar[_ngcontent-%COMP%]{padding-bottom:.5rem;border-bottom:1px solid var(--ard-detail-ultralight)}"]})}}return e})();var qp=["*"],v0=(()=>{class e{constructor(){this.pageTitle=h.required()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-introduction"]],inputs:{pageTitle:[1,"pageTitle"]},standalone:!1,ngContentSelectors:qp,decls:4,vars:1,template:function(i,r){i&1&&(P(),o(0,"section")(1,"app-h1"),s(2),a(),M(3),a()),i&2&&(l(2),A("",r.pageTitle()," \u2014 Ardium UI"))},dependencies:[Pe],encapsulation:2})}}return e})();var Qp=["*"],xi=(()=>{class e{constructor(){this.link=h.required()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-main-article"]],inputs:{link:[1,"link"]},ngContentSelectors:Qp,decls:4,vars:1,consts:[[3,"routerLink"]],template:function(i,r){i&1&&(P(),o(0,"i"),s(1,"Main article: "),o(2,"a",0),M(3),a()()),i&2&&(l(2),p("routerLink",r.link()))},dependencies:[Ie,ct],styles:["[_nghost-%COMP%]{padding-left:1.6rem;font-size:.875rem}"]})}}return e})();var Yp=e=>({simpleTs:e});function Xp(e,n){e&1&&s(0),e&2&&g(" and theme styles need to be imported")}function Zp(e,n){e&1&&(o(0,"p"),s(1,"Note: Only the modules that will actually be used should be imported!"),a())}function Jp(e,n){if(e&1&&(o(0,"app-h3"),s(1,"Import styles"),a(),o(2,"app-main-article",1),s(3,"Importing styles"),a(),y(4,"app-code-example",2)),e&2){let t=u();l(4),p("data",t.stylesCode())}}var w0=(()=>{class e{constructor(){this.moduleName=h.required(),this.otherModuleNames=h([]),this.styles=h(null),this.tsCode=F(()=>`import { ${this.otherModuleNames().length?[this.moduleName(),...this.otherModuleNames()].join(", "):this.moduleName()} } from '@ardium-ui/ui'`),this.isOtherModuleNamesDefined=F(()=>this.otherModuleNames().length>0),this.stylesCode=F(()=>{let t=this.styles();if(!t)return null;let i=["@import '../node_modules/@ardium-ui/ui/prebuilt-themes/default/core.css';",...t.map(d=>`@import '../node_modules/@ardium-ui/ui/prebuilt-themes/default/${Array.isArray(d)?d[0]:d}.scs';${Array.isArray(d)&&d[1]?" /* if needed */":""}`)].join(`
`),r=["@import '../node_modules/@ardium-ui/ui/themes/default/core.scss';",...t.map(d=>`@import '../node_modules/@ardium-ui/ui/themes/default/${Array.isArray(d)?d[0]:d}.scss';${Array.isArray(d)&&d[1]?" // if needed":""}`)].join(`
`);return{simpleScss:r,scss:r,css:i}})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-prerequisites"]],inputs:{moduleName:[1,"moduleName"],otherModuleNames:[1,"otherModuleNames"],styles:[1,"styles"]},standalone:!1,decls:12,vars:6,consts:[["heading","Module imports","nonExpandable","",3,"data"],["link","guides/importing-styles"],["heading","Style imports",3,"data"]],template:function(i,r){i&1&&(o(0,"section")(1,"app-h2"),s(2,"Prerequisites"),a(),o(3,"p"),s(4," In order for the component to work, its corresponding module"),v(5,Xp,1,1),s(6,". "),a(),o(7,"app-h3"),s(8,"Import modules"),a(),y(9,"app-code-example",0),v(10,Zp,2,0,"p")(11,Jp,5,1),a()),i&2&&(l(5),_(r.stylesCode()?5:-1),l(4),p("data",Ee(4,Yp,r.tsCode())),l(),_(r.isOtherModuleNamesDefined()?10:-1),l(),_(r.stylesCode()?11:-1))},dependencies:[bi,xi,Ge,Ye],encapsulation:2})}}return e})();var O0=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=de({type:e})}static{this.\u0275inj=le({imports:[K,bi,xi,Xe]})}}return e})();var mo=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["kbd-appearances-example"]],decls:13,vars:0,consts:[[1,"grid"],["appearance","outlined"],["appearance","filled"],["appearance","transparent"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"ard-kbd",1),s(2,"Ctrl"),a(),o(3,"ard-kbd",2),s(4,"Ctrl"),a(),o(5,"ard-kbd",3),s(6,"Ctrl"),a(),o(7,"ard-kbd-shortcut",1),s(8,"Ctrl+C"),a(),o(9,"ard-kbd-shortcut",2),s(10,"Ctrl+C"),a(),o(11,"ard-kbd-shortcut",3),s(12,"Ctrl+C"),a()())},dependencies:[ne,Se,Ct,vt],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:max-content max-content max-content;gap:1rem}"]})}}return e})();var N0={component:mo,html:`<div class="grid">\r
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
export class KbdAppearancesExample {}`};var ho=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["kbd-basic-example"]],decls:4,vars:0,template:function(i,r){i&1&&(s(0,"Press "),o(1,"ard-kbd"),s(2,"Shift"),a(),s(3," to continue."))},dependencies:[ne,Se],encapsulation:2})}}return e})();var q0={component:ho,html:"Press <ard-kbd>Shift</ard-kbd> to continue.",ts:`import { Component } from "@angular/core";\r
import { ArdiumKbdModule } from "@ardium-ui/ui";\r
\r
@Component({\r
  selector: 'kbd-basic-example',\r
  templateUrl: 'kbd-basic-example.html',\r
  standalone: true,\r
  imports: [ArdiumKbdModule],\r
})\r
export class KbdBasicExample {}`};var fo=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["kbd-directive-example"]],decls:4,vars:0,consts:[["ardKbd",""]],template:function(i,r){i&1&&(s(0,"Press "),o(1,"kbd",0),s(2,"Vol. Down"),a(),s(3," to continue."))},dependencies:[ne,Rr],encapsulation:2})}}return e})();var Z0={component:fo,html:"Press <kbd ardKbd>Vol. Down</kbd> to continue.",ts:`import { Component } from "@angular/core";\r
import { ArdiumKbdModule } from "@ardium-ui/ui";\r
\r
@Component({\r
  selector: 'kbd-directive-example',\r
  templateUrl: 'kbd-directive-example.html',\r
  standalone: true,\r
  imports: [ArdiumKbdModule],\r
})\r
export class KbdDirectiveExample {}`};var go=(()=>{class e{constructor(){this.keys=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],this._currentKeyIndex=T(0),this.currentKey=F(()=>this.keys[this._currentKeyIndex()])}ngOnInit(){this._interval=setInterval(()=>{this._currentKeyIndex()===this.keys.length-1?this._currentKeyIndex.set(0):this._currentKeyIndex.update(t=>t+1)},1e3)}ngOnDestroy(){this._interval&&clearInterval(this._interval)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["kbd-dynamic-example"]],decls:1,vars:1,consts:[[3,"key"]],template:function(i,r){i&1&&y(0,"ard-kbd",0),i&2&&p("key",r.currentKey())},dependencies:[ne,Se],encapsulation:2})}}return e})();var o_={component:go,html:'<ard-kbd [key]="currentKey()" />',ts:`import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';\r
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
`};var _o=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["kbd-full-example"]],decls:12,vars:0,consts:[["full",""]],template:function(i,r){i&1&&(o(0,"ard-kbd",0),s(1,"KeyF"),a(),o(2,"ard-kbd",0),s(3,"Digit3"),a(),o(4,"ard-kbd",0),s(5,"ArrowUp"),a(),o(6,"ard-kbd",0),s(7,"Tab"),a(),o(8,"ard-kbd",0),s(9,"MetaLeft"),a(),o(10,"ard-kbd",0),s(11,"AudioVolumeDown"),a())},dependencies:[ne,Se],encapsulation:2})}}return e})();var c_={component:_o,html:`<ard-kbd full>KeyF</ard-kbd>\r
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
`};var vo=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["kbd-shortcut-example"]],decls:4,vars:0,template:function(i,r){i&1&&(s(0,"Press "),o(1,"ard-kbd-shortcut"),s(2,"Ctrl+C"),a(),s(3," to copy."))},dependencies:[Ct,vt],encapsulation:2})}}return e})();var f_={component:vo,html:"Press <ard-kbd-shortcut>Ctrl+C</ard-kbd-shortcut> to copy.",ts:`import { Component } from "@angular/core";\r
import { ArdiumKbdShortcutModule } from "@ardium-ui/ui";\r
\r
@Component({\r
  selector: 'kbd-shortcut-example',\r
  templateUrl: 'kbd-shortcut-example.html',\r
  standalone: true,\r
  imports: [ArdiumKbdShortcutModule],\r
})\r
export class KbdShortcutExample {}`};var Co=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["kbd-translation-example"]],decls:12,vars:0,template:function(i,r){i&1&&(o(0,"ard-kbd"),s(1,"KeyF"),a(),o(2,"ard-kbd"),s(3,"Digit3"),a(),o(4,"ard-kbd"),s(5,"ArrowUp"),a(),o(6,"ard-kbd"),s(7,"Tab"),a(),o(8,"ard-kbd"),s(9,"MetaLeft"),a(),o(10,"ard-kbd"),s(11,"AudioVolumeDown"),a())},dependencies:[ne,Se],encapsulation:2})}}return e})();var y_={component:Co,html:`<ard-kbd>KeyF</ard-kbd>\r
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
`};var yo=(()=>{class e{constructor(){this.insideClicks=T(0),this.outsideClicks=T(0)}onClick(){this.insideClicks.update(t=>t+1)}onOutsideClick(){this.outsideClicks.update(t=>t+1)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["click-outside-example"]],decls:6,vars:2,consts:[[3,"click","ardClickOutside"]],template:function(i,r){i&1&&(o(0,"div",0),w("click",function(){return r.onClick()})("ardClickOutside",function(){return r.onOutsideClick()}),s(1,"My element"),a(),o(2,"p"),s(3),y(4,"br"),s(5),a()),i&2&&(l(3),A(" Inside clicks: ",r.insideClicks()," "),l(2),A(" Outside clicks: ",r.outsideClicks(),`
`))},dependencies:[Bn,On],styles:["[_nghost-%COMP%]{-webkit-user-select:none;user-select:none}div[_ngcontent-%COMP%]{width:167px;height:100px;display:grid;place-items:center;background-color:#90ee90}"]})}}return e})();var D_={component:yo,html:`<div (click)="onClick()" (ardClickOutside)="onOutsideClick()">My element</div>\r
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
}`};var eu=["*"],bo=(()=>{class e{constructor(){this.disabled=h(!1,{transform:be})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["my-button"]],inputs:{disabled:[1,"disabled"]},ngContentSelectors:eu,decls:2,vars:1,consts:[[3,"disabled"]],template:function(i,r){i&1&&(P(),o(0,"button",0),M(1),a()),i&2&&p("disabled",r.disabled())},encapsulation:2})}}return e})();var xo=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["coercion-boolean-example"]],decls:8,vars:1,consts:[["disabled",""],["disabled","false"],[3,"disabled"]],template:function(i,r){i&1&&(o(0,"my-button"),s(1,"Normal button"),a(),o(2,"my-button",0),s(3,"Disabled button"),a(),o(4,"my-button",1),s(5,"False button"),a(),o(6,"my-button",2),s(7,"Disabled button"),a()),i&2&&(l(6),p("disabled",!0))},dependencies:[bo],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]})}}return e})();var R_={component:xo,html:`<my-button>Normal button</my-button>\r
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
}`};var So=(()=>{class e{constructor(){this.date=h.required({transform:t=>Yn(t,new Date(""))})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["my-calendar"]],inputs:{date:[1,"date"]},decls:1,vars:1,template:function(i,r){i&1&&s(0),i&2&&A("The date is ",r.date(),"")},encapsulation:2})}}return e})();var To=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["coercion-date-example"]],decls:2,vars:0,consts:[["date","1918.11.11"],["date","now"]],template:function(i,r){i&1&&y(0,"my-calendar",0)(1,"my-calendar",1)},dependencies:[So],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]})}}return e})();var W_={component:To,html:`<my-calendar date="1918.11.11" />\r
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
`};var tu=["*"],wo=(()=>{class e{constructor(){this.delay=h(0,{transform:t=>jn(t,0)})}alert(){setTimeout(()=>{alert("Hello world!")},this.delay())}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["my-button"]],inputs:{delay:[1,"delay"]},ngContentSelectors:tu,decls:2,vars:0,consts:[[3,"click"]],template:function(i,r){i&1&&(P(),o(0,"button",0),w("click",function(){return r.alert()}),M(1),a())},encapsulation:2})}}return e})();var Ao=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["coercion-number-example"]],decls:6,vars:1,consts:[["delay","500"],[3,"delay"]],template:function(i,r){i&1&&(o(0,"my-button"),s(1,"No delay"),a(),o(2,"my-button",0),s(3,"With delay"),a(),o(4,"my-button",1),s(5,"Long delay"),a()),i&2&&(l(4),p("delay",1500))},dependencies:[wo],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]})}}return e})();var ev={component:Ao,html:`<my-button>No delay</my-button>\r
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
`};var Do=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["coercion-usefulness-example"]],decls:0,vars:0,template:function(i,r){},encapsulation:2})}}return e})();var rv={component:Do,simpleHtml:`<ard-select disabled />\r
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
export class CoercionUsefulnessExample {}`};var Eo=(()=>{class e{constructor(){this.debouncedValue=Qn("",500)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["debounced-signal-example"]],decls:5,vars:2,consts:[["for","debounced-input"],["type","text","id","debounced-input","placeholder","Search...",3,"ngModelChange","ngModel"]],template:function(i,r){i&1&&(o(0,"label",0),s(1,"What are you looking for?"),a(),o(2,"input",1),j("ngModelChange",function(m){return H(r.debouncedValue,m)||(r.debouncedValue=m),m}),a(),o(3,"p"),s(4),a()),i&2&&(l(2),U("ngModel",r.debouncedValue),l(2),A("Debounced value: ",r.debouncedValue(),""))},dependencies:[Y,Z,ae,ie],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return e})();var cv={component:Eo,html:`<label for="debounced-input">What are you looking for?</label>\r
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
`};var Io=(()=>{class e{constructor(){this.favoriteFood=Ne("chocolate chip cookies",{name:"favorite-food",method:je.Cookies,maxAge:60*60*24*7})}clearSignal(){this.favoriteFood.clear()}get cookieValue(){let t=document.cookie.match(new RegExp("(^| )favorite-food=([^;]+)"));return t?t[2]:null}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["persistent-signal-cookies-example"]],decls:7,vars:2,consts:[["for","favorite-food"],["type","text","id","favorite-food",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,r){i&1&&(o(0,"label",0),s(1,"Favorite food"),a(),o(2,"input",1),j("ngModelChange",function(m){return H(r.favoriteFood,m)||(r.favoriteFood=m),m}),a(),o(3,"button",2),w("click",function(){return r.clearSignal()}),s(4,"Clear"),a(),o(5,"p"),s(6),a()),i&2&&(l(2),U("ngModel",r.favoriteFood),l(4),A("Your favorite food is: ",r.cookieValue,""))},dependencies:[Y,Z,ae,ie],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return e})();var gv={component:Io,html:`<label for="favorite-food">Favorite food</label>\r
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
`};var Fo=(()=>{class e{constructor(){this.favoriteFood=Ne("spaghetti",{name:"favorite-food",method:je.LocalStorage})}clearSignal(){this.favoriteFood.clear()}get localStorageValue(){return localStorage.getItem("favorite-food")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["persistent-signal-example"]],decls:7,vars:2,consts:[["for","favorite-food"],["type","text","id","favorite-food",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,r){i&1&&(o(0,"label",0),s(1,"Favorite food"),a(),o(2,"input",1),j("ngModelChange",function(m){return H(r.favoriteFood,m)||(r.favoriteFood=m),m}),a(),o(3,"button",2),w("click",function(){return r.clearSignal()}),s(4,"Clear"),a(),o(5,"p"),s(6),a()),i&2&&(l(2),U("ngModel",r.favoriteFood),l(4),A("Your favorite food is: ",r.localStorageValue,""))},dependencies:[Y,Z,ae,ie],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return e})();var xv={component:Fo,html:`<label for="favorite-food">Favorite food</label>\r
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
`};var Mo=(()=>{class e{constructor(){this.favoriteFood=Ne("spaghetti",{name:"favorite-food",method:je.LocalStorage})}clearSignal(){this.favoriteFood.clear()}get localStorageValue(){return localStorage.getItem("favorite-food")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["persistent-signal-local-storage-example"]],decls:7,vars:2,consts:[["for","favorite-food"],["type","text","id","favorite-food",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,r){i&1&&(o(0,"label",0),s(1,"Favorite food"),a(),o(2,"input",1),j("ngModelChange",function(m){return H(r.favoriteFood,m)||(r.favoriteFood=m),m}),a(),o(3,"button",2),w("click",function(){return r.clearSignal()}),s(4,"Clear"),a(),o(5,"p"),s(6),a()),i&2&&(l(2),U("ngModel",r.favoriteFood),l(4),A("Your favorite food is: ",r.localStorageValue,""))},dependencies:[Y,Z,ae,ie],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return e})();var Ev={component:Mo,html:`<label for="favorite-food">Favorite food</label>\r
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
`};var Po=(()=>{class e{constructor(){this.acceptsTerms=Ne(!1,{name:"accepts-terms",method:je.LocalStorage,serialize:t=>String(!!t),deserialize:t=>t==="true"})}get termsValue(){return localStorage.getItem("accepts-terms")??"null"}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["persistent-signal-serialization-example"]],decls:6,vars:2,consts:[[3,"selectedChange","selected"]],template:function(i,r){i&1&&(o(0,"div")(1,"ard-checkbox",0),j("selectedChange",function(m){return H(r.acceptsTerms,m)||(r.acceptsTerms=m),m}),a(),o(2,"span"),s(3,"Do you accept the terms?"),a()(),o(4,"p"),s(5),a()),i&2&&(l(),U("selected",r.acceptsTerms),l(4),A("Terms accepted: ",r.termsValue,""))},dependencies:[Y,mi,ui],styles:["div[_ngcontent-%COMP%]{display:flex;gap:.5rem}p[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return e})();var Lv={component:Po,html:`<div>\r
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
`};var ko=(()=>{class e{constructor(){this.favoriteColor=Jt("red","favorite-color")}clearSignal(){this.favoriteColor.clear()}get queryParams(){return window.location.search}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["query-param-signal-example"]],decls:7,vars:2,consts:[["for","favorite-color"],["type","text","id","favorite-color",3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,r){i&1&&(o(0,"label",0),s(1,"Favorite color"),a(),o(2,"input",1),j("ngModelChange",function(m){return H(r.favoriteColor,m)||(r.favoriteColor=m),m}),a(),o(3,"button",2),w("click",function(){return r.clearSignal()}),s(4,"Clear"),a(),o(5,"p"),s(6),a()),i&2&&(l(2),U("ngModel",r.favoriteColor),l(4),A("URL query params: ",r.queryParams,""))},dependencies:[Y,Z,ae,ie],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return e})();var jv={component:ko,html:`<label for="favorite-color">Favorite color</label>\r
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
`};var Vo=(()=>{class e{constructor(){this.acceptsTerms=Jt(!1,{paramName:"accepts-terms",serialize:t=>t===null?null:String(t),deserialize:t=>t==="true"})}get queryParams(){return window.location.search}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["query-param-signal-serialization-example"]],decls:6,vars:2,consts:[[3,"selectedChange","selected"]],template:function(i,r){i&1&&(o(0,"div")(1,"ard-checkbox",0),j("selectedChange",function(m){return H(r.acceptsTerms,m)||(r.acceptsTerms=m),m}),a(),o(2,"span"),s(3,"Do you accept the terms?"),a()(),o(4,"p"),s(5),a()),i&2&&(l(),U("selected",r.acceptsTerms),l(4),A("URL query: ",r.queryParams,""))},dependencies:[Y,mi,ui],styles:["div[_ngcontent-%COMP%]{display:flex;gap:.5rem}p[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return e})();var Qv={component:Vo,html:`<div>\r
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
`};var Lo=(()=>{class e{constructor(){this.throttledValue=Gn("",500)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["throttled-signal-example"]],decls:5,vars:2,consts:[["for","throttled-input"],["type","text","id","throttled-input","placeholder","Search...",3,"ngModelChange","ngModel"]],template:function(i,r){i&1&&(o(0,"label",0),s(1,"What are you looking for?"),a(),o(2,"input",1),j("ngModelChange",function(m){return H(r.throttledValue,m)||(r.throttledValue=m),m}),a(),o(3,"p"),s(4),a()),i&2&&(l(2),U("ngModel",r.throttledValue),l(2),A("Throttled value: ",r.throttledValue(),""))},dependencies:[Y,Z,ae,ie],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}button[_ngcontent-%COMP%]{margin-left:.25rem}"]})}}return e})();var eC={component:Lo,html:`<label for="throttled-input">What are you looking for?</label>\r
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
`};var iu=["exampleBox"],nu=(e,n,t,i)=>({width:e,height:n,padding:t,borderWidth:i}),Ro=(()=>{class e{constructor(){this.width=T("200px"),this.height=T("100px"),this.padding=T("12px 24px"),this.border=T("4px"),this.exampleBox=me("exampleBox"),this._cd=D(Pt)}onScroll(){this._cd.markForCheck()}getBoundingClientRect(){return this.exampleBox().nativeElement.getBoundingClientRect()}getPaddingRect(){return Zn(this.exampleBox())}getContentRect(){return Xn(this.exampleBox())}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["dom-boxes-example"]],viewQuery:function(i,r){i&1&&he(r.exampleBox,iu,5),i&2&&fe()},hostBindings:function(i,r){i&1&&w("scroll",function(){return r.onScroll()},!1,Et)("resize",function(){return r.onScroll()},!1,Ei)},decls:54,vars:22,consts:[["exampleBox",""],[1,"inputs"],["for","width"],["type","text","id","width",3,"ngModelChange","ngModel"],["for","height"],["type","text","id","height",3,"ngModelChange","ngModel"],["for","padding"],["type","text","id","padding",3,"ngModelChange","ngModel"],["for","border"],["type","text","id","border",3,"ngModelChange","ngModel"],[1,"example-box",3,"ngStyle"],[1,"values"],[1,"value"]],template:function(i,r){if(i&1){let d=z();o(0,"div",1)(1,"div")(2,"label",2),s(3,"Width"),a(),o(4,"input",3),j("ngModelChange",function(b){return O(d),H(r.width,b)||(r.width=b),B(b)}),a()(),o(5,"div")(6,"label",4),s(7,"Height"),a(),o(8,"input",5),j("ngModelChange",function(b){return O(d),H(r.height,b)||(r.height=b),B(b)}),a()(),o(9,"div")(10,"label",6),s(11,"Padding"),a(),o(12,"input",7),j("ngModelChange",function(b){return O(d),H(r.padding,b)||(r.padding=b),B(b)}),a()(),o(13,"div")(14,"label",8),s(15,"Border"),a(),o(16,"input",9),j("ngModelChange",function(b){return O(d),H(r.border,b)||(r.border=b),B(b)}),a()()(),o(17,"div",10,0),y(19,"div"),a(),o(20,"div",11)(21,"div",12)(22,"strong"),s(23,"Bounding Client Rect"),a(),o(24,"span"),s(25),a(),o(26,"span"),s(27),a(),o(28,"span"),s(29),a(),o(30,"span"),s(31),a()(),o(32,"div",12)(33,"strong"),s(34,"Padding Rect"),a(),o(35,"span"),s(36),a(),o(37,"span"),s(38),a(),o(39,"span"),s(40),a(),o(41,"span"),s(42),a()(),o(43,"div",12)(44,"strong"),s(45,"Content Rect"),a(),o(46,"span"),s(47),a(),o(48,"span"),s(49),a(),o(50,"span"),s(51),a(),o(52,"span"),s(53),a()()()}i&2&&(l(4),U("ngModel",r.width),l(4),U("ngModel",r.height),l(4),U("ngModel",r.padding),l(4),U("ngModel",r.border),l(),p("ngStyle",Fn(17,nu,r.width(),r.height(),r.padding(),r.border())),l(8),A("Top: ",r.getBoundingClientRect().top,""),l(2),A("Left: ",r.getBoundingClientRect().left,""),l(2),A("Width: ",r.getBoundingClientRect().width,""),l(2),A("Height: ",r.getBoundingClientRect().height,""),l(5),A("Top: ",r.getPaddingRect().top,""),l(2),A("Left: ",r.getPaddingRect().left,""),l(2),A("Width: ",r.getPaddingRect().width,""),l(2),A("Height: ",r.getPaddingRect().height,""),l(5),A("Top: ",r.getContentRect().top,""),l(2),A("Left: ",r.getContentRect().left,""),l(2),A("Width: ",r.getContentRect().width,""),l(2),A("Height: ",r.getContentRect().height,""))},dependencies:[K,Mn,Y,Z,ae,ie],styles:[".inputs[_ngcontent-%COMP%]{display:grid;grid-template-columns:max-content max-content;grid-template-rows:max-content max-content;gap:1rem 2rem}.example-box[_ngcontent-%COMP%]{margin:2rem 0;background-color:#c3deb7;border:solid #FFEEBC;box-sizing:content-box}.example-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#a0c5e8;height:100%}.values[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,max-content);gap:2rem}.values[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:max-content}"]})}}return e})();var cC={component:Ro,html:`<div class="inputs">\r
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
`};var Oo=(()=>{class e{constructor(){this.inputValue=T("How would <b>this</b> text be displayed?")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["escape-html-example"]],decls:13,vars:5,consts:[[3,"ngModelChange","ngModel"],[1,"grid"],[3,"innerHTML"]],template:function(i,r){i&1&&(o(0,"textarea",0),j("ngModelChange",function(m){return H(r.inputValue,m)||(r.inputValue=m),m}),a(),o(1,"div",1)(2,"div")(3,"strong"),s(4,"Unescaped:"),a(),y(5,"br")(6,"p",2),a(),o(7,"div")(8,"strong"),s(9,"Escaped:"),a(),y(10,"br")(11,"p",2),we(12,"escapeHTML"),a()()),i&2&&(U("ngModel",r.inputValue),l(6),p("innerHTML",r.inputValue(),W),l(5),p("innerHTML",Ue(12,3,r.inputValue()),W))},dependencies:[Hn,Un,Y,Z,ae,ie],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:.5rem}textarea[_ngcontent-%COMP%]{padding:.25rem .375rem;min-height:5em;resize:vertical}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}strong[_ngcontent-%COMP%]{line-height:1.5}"]})}}return e})();var vC={component:Oo,html:`<textarea [(ngModel)]="inputValue"></textarea>\r
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
}`};var Bo=(()=>{class e{constructor(){this.file=T(void 0)}onFileUpload(t){this.file.set(t.target.files?.[0])}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["file-pipes-example"]],decls:21,vars:10,consts:[["type","file","id","file",3,"change"],[1,"values"]],template:function(i,r){if(i&1&&(o(0,"input",0),w("change",function(m){return r.onFileUpload(m)}),a(),o(1,"div",1)(2,"strong"),s(3,"Full file name:"),a(),o(4,"span"),s(5),a(),o(6,"strong"),s(7,"File name:"),a(),o(8,"span"),s(9),we(10,"filename"),a(),o(11,"strong"),s(12,"File extension:"),a(),o(13,"span"),s(14),we(15,"fileext"),a(),o(16,"strong"),s(17,"File size:"),a(),o(18,"span"),s(19),we(20,"filesize"),a()()),i&2){let d;l(5),g((d=r.file())==null?null:d.name),l(4),g(Ue(10,4,r.file())),l(5),g(Ue(15,6,r.file())),l(5),g(Ue(20,8,r.file()))}},dependencies:[qn,Kn,Wn,zn],styles:[".values[_ngcontent-%COMP%]{margin-top:1rem;display:grid;grid-template-columns:max-content max-content;gap:.25rem 1rem}"]})}}return e})();var wC={component:Bo,html:`<input type="file" id="file" (change)="onFileUpload($event)">\r
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
`};function ru(e,n){if(e&1){let t=z();o(0,"button",0),w("click",function(){O(t);let r=u();return B(r.onButtonClick())}),s(1,"Find out"),a()}}function ou(e,n){e&1&&(o(0,"p"),s(1,"File System API is "),o(2,"strong",1),s(3,"supported"),a(),s(4,"! You can view the below examples."),a())}function au(e,n){e&1&&(o(0,"p"),s(1," File System API is "),o(2,"strong",2),s(3,"not supported"),a(),s(4,". You will not be able to correctly view the below examples. See the "),o(5,"a",3),s(6,"caniuse.com page"),a(),s(7,` to find out which browsers are supported.
`),a())}function su(e,n){if(e&1&&v(0,ou,5,0,"p")(1,au,8,0,"p"),e&2){let t=u();_(t.isSupported()?0:1)}}var Uo=(()=>{class e{constructor(){this.fileSystem=D(pt),this.hasClicked=T(!1),this.isSupported=T(!1)}onButtonClick(){this.hasClicked.set(!0),this.isSupported.set(this.fileSystem.isFileSystemAPISupported("showOpenFilePicker"))}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["file-system-is-supported-example"]],decls:5,vars:2,consts:[[3,"click"],[1,"supported"],[1,"not-supported"],["href","https://caniuse.com/native-filesystem-api"]],template:function(i,r){i&1&&(o(0,"p")(1,"span"),s(2,"Does your browser support File System API?"),a(),v(3,ru,2,0,"button"),a(),v(4,su,2,1)),i&2&&(l(3),_(r.hasClicked()?-1:3),l(),_(r.hasClicked()?4:-1))},styles:["button[_ngcontent-%COMP%]{margin-left:1ch}.supported[_ngcontent-%COMP%]{color:green}.not-supported[_ngcontent-%COMP%]{color:#ff4500}"]})}}return e})();var PC={component:Uo,html:`<p>\r
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
`};function lu(e,n){if(e&1&&(s(0," Uploaded "),o(1,"i"),s(2),a()),e&2){let t=u();l(2),g(t.fileName())}}function du(e,n){e&1&&s(0," File upload request was cancelled. ")}var Ho=(()=>{class e{constructor(){this.fileSystem=D(pt),this.successfulUpload=T(null),this.fileName=T("")}onButtonClick(){return te(this,null,function*(){let t=yield this.fileSystem.requestFileUpload({directoryId:"gorilla",startDirectory:Yt.Downloads,method:Gt.PreferFileSystem,multiple:!1,types:[{description:"Text files",accept:{"text/plain":[".txt"]}},{description:"Image files",accept:{"image/png":[".png"],"image/jpeg":[".jpg",".jpeg"]}},{description:"PDF files",accept:{"application/pdf":[".pdf"]}}]});this.successfulUpload.set(!!t),this.successfulUpload()&&this.fileName.set(t?.name??"No file name")})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["file-system-request-upload-example"]],decls:5,vars:1,consts:[[3,"click"]],template:function(i,r){i&1&&(o(0,"button",0),w("click",function(){return r.onButtonClick()}),s(1,"Click here to upload a file"),a(),o(2,"p"),v(3,lu,3,1)(4,du,1,0),a()),i&2&&(l(3),_(r.successfulUpload()===!0?3:r.successfulUpload()===!1?4:-1))},dependencies:[K],encapsulation:2})}}return e})();var jC={component:Ho,html:`<button (click)="onButtonClick()">Click here to upload a file</button>\r
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
`};var jo=(()=>{class e{constructor(){this.fileSystem=D(pt),this.fileName=T("gorillas.txt"),this.textToSave=T("Gorillas like to eat bamboo.")}onButtonClick(){this.fileSystem.saveAs(this.textToSave(),{fileName:this.fileName(),method:Gt.PreferFileSystem,directoryId:"gorillas",startDirectory:Yt.Downloads})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["file-system-save-as-example"]],decls:4,vars:2,consts:[["type","text",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"click"]],template:function(i,r){i&1&&(o(0,"input",0),j("ngModelChange",function(m){return H(r.fileName,m)||(r.fileName=m),m}),a(),o(1,"textarea",1),j("ngModelChange",function(m){return H(r.textToSave,m)||(r.textToSave=m),m}),a(),o(2,"button",2),w("click",function(){return r.onButtonClick()}),s(3,"Save to file"),a()),i&2&&(U("ngModel",r.fileName),l(),U("ngModel",r.textToSave))},dependencies:[K,Y,Z,ae,ie],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:.5rem;align-items:flex-start}input[_ngcontent-%COMP%]{min-width:200px}textarea[_ngcontent-%COMP%]{min-width:300px;min-height:100px}"]})}}return e})();var YC={component:jo,html:`<input type="text" [(ngModel)]="fileName">\r
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
`};var No=(()=>{class e{constructor(){this.eventCounter=T(0)}onHoldEvent(){this.eventCounter.update(t=>t+1)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["hold-basic-example"]],decls:4,vars:1,consts:[[3,"ardHold"]],template:function(i,r){i&1&&(o(0,"button",0),w("ardHold",function(){return r.onHoldEvent()}),s(1,"Click and Hold"),a(),o(2,"p"),s(3),a()),i&2&&(l(3),A(" Total events fired: ",r.eventCounter(),`
`))},dependencies:[Zt,Xt],encapsulation:2})}}return e})();var ny={component:No,html:`<button (ardHold)="onHoldEvent()">Click and Hold</button>\r
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
`};var $o=(()=>{class e{constructor(){this.eventCounter=T(0)}onHoldEvent(){this.eventCounter.update(t=>t+1)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["hold-timings-example"]],decls:4,vars:1,consts:[["ardHoldDelay","2000","ardHoldRepeat","200",3,"ardHold"]],template:function(i,r){i&1&&(o(0,"button",0),w("ardHold",function(){return r.onHoldEvent()}),s(1,` Click and Hold - but this time very slow
`),a(),o(2,"p"),s(3),a()),i&2&&(l(3),A("Total events fired: ",r.eventCounter(),""))},dependencies:[Zt,Xt],encapsulation:2})}}return e})();var cy={component:$o,html:`<button (ardHold)="onHoldEvent()" ardHoldDelay="2000" ardHoldRepeat="200">\r
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
`};function cu(e,n){if(e&1&&(o(0,"div"),s(1),a()),e&2){let t=n.$implicit;l(),g(t)}}var Ko=(()=>{class e{constructor(){this.currentPage=T(1),this.items=F(()=>new Array(this.currentPage()*5).fill(0).map((t,i)=>i)),this.isInfScrollActive=T(!0)}onThresholdReach(){console.log(`Threshold has been reached! Loading data for page ${this.currentPage()+1}...`),setTimeout(()=>{this.currentPage.update(t=>t+1),this.isInfScrollActive.set(!0)},100)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["infinite-scroll-host-example"]],decls:3,vars:1,consts:[["ardInfScroll","","ardInfScrollTarget","host",1,"scroll-host",3,"ardInfScrollReachThreshold","ardInfScrollActiveChange","ardInfScrollActive"]],template:function(i,r){i&1&&(o(0,"div",0),w("ardInfScrollReachThreshold",function(){return r.onThresholdReach()}),j("ardInfScrollActiveChange",function(m){return H(r.isInfScrollActive,m)||(r.isInfScrollActive=m),m}),k(1,cu,2,1,"div",null,L),a()),i&2&&(U("ardInfScrollActive",r.isInfScrollActive),l(),V(r.items()))},dependencies:[$n,Nn],styles:[".scroll-host[_ngcontent-%COMP%]{height:50vh;width:50vh;overflow-y:auto;border:1px solid red;margin:0 auto}.scroll-host[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:20vh;border-bottom:1px solid black;position:relative;display:grid;place-items:center;font-size:40px;font-weight:700}"]})}}return e})();var _y={component:Ko,html:`<div\r
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
`};var pu=e=>({"--position":e}),fn=400,Wo=fn/20,zo=(()=>{class e{constructor(){this.keyboard=D(He),this.position=T(fn/2)}ngOnInit(){this.keyboard.listenToKey("A").subscribe(()=>{this.position()<=0||this.position.update(t=>t-Wo)}),this.keyboard.listenToKey("D").subscribe(()=>{this.position()>=fn||this.position.update(t=>t+Wo)})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["keyboard-service-listen-to-key-example"]],decls:10,vars:4,consts:[[1,"square-container"],[1,"square"]],template:function(i,r){i&1&&(o(0,"div",0),y(1,"div",1),a(),o(2,"p"),s(3," Click "),o(4,"ard-kbd"),s(5,"A"),a(),s(6," or "),o(7,"ard-kbd"),s(8,"D"),a(),s(9,` to move the square.
`),a()),i&2&&(l(),Ft(Ee(2,pu,r.position()+"px")))},dependencies:[ne,Se],styles:[".square-container[_ngcontent-%COMP%]{width:450px;border:1px solid var(--ard-detail-light);margin-bottom:1rem}.square[_ngcontent-%COMP%]{width:50px;height:50px;position:relative;left:var(--position);background-color:#9932cc}"]})}}return e})();var wy={component:zo,html:`<div class="square-container">\r
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
`};var qo=(()=>{class e{constructor(){this.keyboard=D(He),this.isZeroHeld=T(!1)}ngOnInit(){this.keyboard.listenToKeyState("0").subscribe(({isHeld:t})=>{this.isZeroHeld.set(t)})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["keyboard-service-listen-to-key-state-example"]],decls:5,vars:3,template:function(i,r){i&1&&(o(0,"p"),s(1," The zero key is currently "),o(2,"strong"),s(3),a(),s(4,`.
`),a()),i&2&&(l(2),Q(r.isZeroHeld()?"held":"not-held"),l(),g(r.isZeroHeld()?"pressed":"idle"))},dependencies:[ne],styles:[".held[_ngcontent-%COMP%]{color:green}.not-held[_ngcontent-%COMP%]{color:red}"]})}}return e})();var ky={component:qo,html:`<p>\r
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
`};function uu(e,n){e&1&&(o(0,"label",1),s(1,"Search"),a(),y(2,"input",2))}var Qo=(()=>{class e{constructor(){this.keyboard=D(He),this.isOpen=T(!1)}ngOnInit(){this.keyboard.listenToShortcut(["Ctrl","F"]).subscribe(({event:t})=>{t.preventDefault(),this.isOpen.update(i=>!i)}),this.keyboard.listenToShortcut(["ShiftRight","Q"]).subscribe(()=>alert("RightShift + Q was pressed!"))}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["keyboard-service-listen-to-shortcut-example"]],decls:11,vars:1,consts:[["full","false"],["for","example-search-bar"],["type","text","id","example-search-bar"]],template:function(i,r){i&1&&(o(0,"p"),s(1,"Press "),o(2,"ard-kbd-shortcut",0),s(3,"Ctrl+F"),a(),s(4," to toggle a search bar."),a(),o(5,"p"),s(6,"Press "),o(7,"ard-kbd-shortcut",0),s(8,"RightShift+Q"),a(),s(9," to show an alert."),a(),v(10,uu,3,0)),i&2&&(l(10),_(r.isOpen()?10:-1))},dependencies:[Ct,vt],styles:["input[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return e})();var jy={component:Qo,html:`<p>Press <ard-kbd-shortcut full="false">Ctrl+F</ard-kbd-shortcut> to toggle a search bar.</p>\r
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
`};var Go=(()=>{class e{constructor(){this.keyboard=D(He)}getModifierKeyText(t){return t?"pressed":"idle"}getModifierKeyClass(t){return t?"down":"up"}getLockKeyText(t){return t===void 0?"unknown":t?"active":"inactive"}getLockKeyClass(t){return t===void 0?"unknown":t?"down":"up"}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["keyboard-service-modifier-key-state-example"]],decls:72,vars:42,consts:[[1,"container"],[1,"modifier-table"],["scope","col"],["scope","row"],[1,"not-applicable"],[1,"lock-table"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th",2),s(5,"Key"),a(),o(6,"th",2),s(7,"Left"),a(),o(8,"th",2),s(9,"Right"),a(),o(10,"th",2),s(11,"Any"),a()()(),o(12,"tbody")(13,"tr")(14,"th",3),s(15,"Ctrl"),a(),o(16,"td"),s(17),a(),o(18,"td"),s(19),a(),o(20,"td"),s(21),a()(),o(22,"tr")(23,"th",3),s(24,"Alt"),a(),o(25,"td"),s(26),a(),o(27,"td"),s(28),a(),o(29,"td",4),s(30,"N/A"),a()(),o(31,"tr")(32,"th",3),s(33,"Shift"),a(),o(34,"td"),s(35),a(),o(36,"td"),s(37),a(),o(38,"td"),s(39),a()(),o(40,"tr")(41,"th",3),s(42,"Meta"),a(),o(43,"td"),s(44),a(),o(45,"td"),s(46),a(),o(47,"td"),s(48),a()()()(),o(49,"table",5)(50,"thead")(51,"tr")(52,"th",2),s(53,"Key"),a(),o(54,"th",2),s(55,"State"),a()()(),o(56,"tbody")(57,"tr")(58,"th",3),s(59,"Caps Lock"),a(),o(60,"td"),s(61),a()(),o(62,"tr")(63,"th",3),s(64,"Num Lock"),a(),o(65,"td"),s(66),a()(),o(67,"tr")(68,"th",3),s(69,"Scroll Lock"),a(),o(70,"td"),s(71),a()()()()()),i&2&&(l(16),Q(r.getModifierKeyClass(r.keyboard.isLeftCtrlHeld())),l(),g(r.getModifierKeyText(r.keyboard.isLeftCtrlHeld())),l(),Q(r.getModifierKeyClass(r.keyboard.isRightCtrlHeld())),l(),g(r.getModifierKeyText(r.keyboard.isRightCtrlHeld())),l(),Q(r.getModifierKeyClass(r.keyboard.isCtrlHeld())),l(),g(r.getModifierKeyText(r.keyboard.isCtrlHeld())),l(4),Q(r.getModifierKeyClass(r.keyboard.isAltHeld())),l(),g(r.getModifierKeyText(r.keyboard.isAltHeld())),l(),Q(r.getModifierKeyClass(r.keyboard.isAltGraphHeld())),l(),g(r.getModifierKeyText(r.keyboard.isAltGraphHeld())),l(6),Q(r.getModifierKeyClass(r.keyboard.isLeftShiftHeld())),l(),g(r.getModifierKeyText(r.keyboard.isLeftShiftHeld())),l(),Q(r.getModifierKeyClass(r.keyboard.isRightShiftHeld())),l(),g(r.getModifierKeyText(r.keyboard.isRightShiftHeld())),l(),Q(r.getModifierKeyClass(r.keyboard.isShiftHeld())),l(),g(r.getModifierKeyText(r.keyboard.isShiftHeld())),l(4),Q(r.getModifierKeyClass(r.keyboard.isLeftMetaHeld())),l(),g(r.getModifierKeyText(r.keyboard.isLeftMetaHeld())),l(),Q(r.getModifierKeyClass(r.keyboard.isRightMetaHeld())),l(),g(r.getModifierKeyText(r.keyboard.isRightMetaHeld())),l(),Q(r.getModifierKeyClass(r.keyboard.isMetaHeld())),l(),g(r.getModifierKeyText(r.keyboard.isMetaHeld())),l(12),Q(r.getLockKeyClass(r.keyboard.capsLockState())),l(),g(r.getLockKeyText(r.keyboard.capsLockState())),l(4),Q(r.getLockKeyClass(r.keyboard.numLockState())),l(),g(r.getLockKeyText(r.keyboard.numLockState())),l(4),Q(r.getLockKeyClass(r.keyboard.scrollLockState())),l(),g(r.getLockKeyText(r.keyboard.scrollLockState())))},dependencies:[ne],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:1.75rem}table[_ngcontent-%COMP%]{table-layout:fixed;width:max-content}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:.25rem .5rem;border-collapse:collapse;border:1px solid var(--ard-detail)}th[_ngcontent-%COMP%]{font-weight:600;background-color:var(--ard-bg-filled)}td[_ngcontent-%COMP%]{font-weight:500}.down[_ngcontent-%COMP%]{color:green}.up[_ngcontent-%COMP%]{color:red}.unknown[_ngcontent-%COMP%]{font-weight:400;font-style:italic}.not-applicable[_ngcontent-%COMP%]{font-weight:400}.modifier-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{width:8.1ch}.modifier-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-of-type{width:6ch}.lock-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-of-type{width:8.75ch}"]})}}return e})();var Gy={component:Go,html:`<div class="container">\r
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
`};var mu=["targetBox"];function hu(e,n){if(e&1&&(o(0,"tr")(1,"th",4),s(2,"Left"),a(),o(3,"td"),s(4),a(),o(5,"td"),s(6),a()(),o(7,"tr")(8,"th",4),s(9,"Right"),a(),o(10,"td"),s(11),a(),o(12,"td"),s(13),a()(),o(14,"tr")(15,"th",4),s(16,"Top"),a(),o(17,"td"),s(18),a(),o(19,"td"),s(20),a()(),o(21,"tr")(22,"th",4),s(23,"Bottom"),a(),o(24,"td"),s(25),a(),o(26,"td"),s(27),a()()),e&2){let t,i,r,d,m,b,R,J,re=u();l(4),g((t=re.lastEventData())==null?null:t.left),l(2),g((i=re.lastEventData())==null?null:i.overflowsLeft),l(5),g((r=re.lastEventData())==null?null:r.right),l(2),g((d=re.lastEventData())==null?null:d.overflowsRight),l(5),g((m=re.lastEventData())==null?null:m.top),l(2),g((b=re.lastEventData())==null?null:b.overflowsTop),l(5),g((R=re.lastEventData())==null?null:R.bottom),l(2),g((J=re.lastEventData())==null?null:J.overflowsBottom)}}function fu(e,n){e&1&&(o(0,"tr")(1,"th",4),s(2,"Left"),a(),o(3,"td",5),s(4,"Waiting for events..."),a()(),o(5,"tr")(6,"th",4),s(7,"Right"),a()(),o(8,"tr")(9,"th",4),s(10,"Top"),a()(),o(11,"tr")(12,"th",4),s(13,"Bottom"),a()())}var Yo=(()=>{class e{constructor(){this.lastEventData=T(null),this.targetBox=me("targetBox")}onClick(t){this.targetBox()&&this.lastEventData.set(Jn(t,this.targetBox()))}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["relative-pos-basic-example"]],viewQuery:function(i,r){i&1&&he(r.targetBox,mu,5),i&2&&fe()},hostBindings:function(i,r){i&1&&w("click",function(m){return r.onClick(m)},!1,Et)},decls:18,vars:1,consts:[["targetBox",""],[1,"container"],[1,"target-box"],["scope","col"],["scope","row"],["colspan","2","rowspan","4",1,"waiting"]],template:function(i,r){i&1&&(o(0,"p"),s(1,` Click anywhere to show the click position relative to the target box.
`),a(),o(2,"div",1)(3,"div",2,0),s(5,"Target box"),a(),o(6,"table")(7,"thead")(8,"tr")(9,"th",3),s(10,"Direction"),a(),o(11,"th",3),s(12,"Relative pos"),a(),o(13,"th",3),s(14,"Overflows?"),a()()(),o(15,"tbody"),v(16,hu,28,8)(17,fu,14,0),a()()()),i&2&&(l(16),_(r.lastEventData()?16:17))},styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:1.75rem}.target-box[_ngcontent-%COMP%]{width:150px;height:100px;background-color:salmon;display:grid;place-items:center}table[_ngcontent-%COMP%]{table-layout:fixed;width:max-content}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:.25rem .5rem;border-collapse:collapse;border:1px solid var(--ard-detail)}th[_ngcontent-%COMP%]{font-weight:600;background-color:var(--ard-bg-filled)}thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-of-type{width:6ch}"]})}}return e})();var n1={component:Yo,html:`<p>\r
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
`};var gu=["item"];function _u(e,n){if(e&1){let t=z();o(0,"div",4)(1,"code"),s(2,"viewportRelation"),a(),o(3,"span"),s(4),a(),o(5,"code"),s(6,"isInViewport"),a(),o(7,"span"),s(8),a(),o(9,"code"),s(10,"position.top"),a(),o(11,"span"),s(12),we(13,"number"),a(),o(14,"code"),s(15,"position.bottom"),a(),o(16,"span"),s(17),we(18,"number"),a(),y(19,"div"),o(20,"button",3),w("click",function(){O(t);let r=u();return B(r.toggleOverlay())}),s(21,"Close"),a()()}if(e&2){let t,i,r,d,m=u();l(4),g((t=m.observerRef())==null?null:t.viewportRelation()),l(4),g((i=m.observerRef())==null?null:i.isInViewport()),l(4),g(Mt(13,4,(r=m.observerRef())==null||(r=r.position())==null?null:r.top,"1.5-5")),l(5),g(Mt(18,7,(d=m.observerRef())==null||(d=d.position())==null?null:d.bottom,"1.5-5"))}}var Xo=(()=>{class e{constructor(){this.vss=D(Rn),this.isOverlayActive=T(!1),this.element=me("item"),this.observerRef=T(null)}toggleOverlay(){this.isOverlayActive.update(t=>!t)}ngAfterViewInit(){let t=this.element();t&&this.observerRef.set(this.vss.observeElement(t))}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["viewport-observer-observer-ref-example"]],viewQuery:function(i,r){i&1&&he(r.element,gu,5),i&2&&fe()},decls:7,vars:1,consts:[["item",""],[1,"container"],[1,"item"],[3,"click"],[1,"overlay"]],template:function(i,r){if(i&1){let d=z();o(0,"div",1)(1,"div",2,0),s(3,"Observed element"),a(),o(4,"button",3),w("click",function(){return O(d),B(r.toggleOverlay())}),s(5,"Toggle overlay"),a()(),v(6,_u,22,10,"div",4)}i&2&&(l(6),_(r.isOverlayActive()?6:-1))},dependencies:[Ri],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:space-around}.item[_ngcontent-%COMP%]{height:150px;width:225px;background-color:#deb887;display:grid;place-items:center}.overlay[_ngcontent-%COMP%]{position:fixed;top:5rem;left:20rem;z-index:9;padding:1.5rem;background-color:var(--ard-bg);border:1px solid var(--ard-border);display:grid;grid-template-columns:max-content 12ch;gap:.5rem}"]})}}return e})();var p1={component:Xo,html:`<div class="container">\r
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
`};export{ao as a,ge as b,nh as c,rh as d,Oh as e,Bh as f,yt as g,ef as h,xt as i,Ge as j,Ye as k,Xe as l,to as m,qg as n,Qg as o,e0 as p,De as q,bi as r,v0 as s,w0 as t,O0 as u,N0 as v,q0 as w,Z0 as x,o_ as y,c_ as z,f_ as A,y_ as B,D_ as C,R_ as D,W_ as E,ev as F,rv as G,cv as H,gv as I,xv as J,Ev as K,Lv as L,jv as M,Qv as N,eC as O,cC as P,vC as Q,wC as R,PC as S,jC as T,YC as U,ny as V,cy as W,_y as X,wy as Y,ky as Z,jy as _,Gy as $,n1 as aa,p1 as ba};
