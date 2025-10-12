(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function T_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var kf={exports:{}},vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function lS(){if(h0)return vo;h0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return vo.Fragment=e,vo.jsx=i,vo.jsxs=i,vo}var d0;function cS(){return d0||(d0=1,kf.exports=lS()),kf.exports}var L=cS(),Xf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function uS(){if(p0)return re;p0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function _(N,it,yt){this.props=N,this.context=it,this.refs=y,this.updater=yt||b}_.prototype.isReactComponent={},_.prototype.setState=function(N,it){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,it,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function F(){}F.prototype=_.prototype;function z(N,it,yt){this.props=N,this.context=it,this.refs=y,this.updater=yt||b}var D=z.prototype=new F;D.constructor=z,R(D,_.prototype),D.isPureReactComponent=!0;var k=Array.isArray;function G(){}var B={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function w(N,it,yt){var At=yt.ref;return{$$typeof:o,type:N,key:it,ref:At!==void 0?At:null,props:yt}}function C(N,it){return w(N.type,it,N.props)}function H(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function et(N){var it={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(yt){return it[yt]})}var lt=/\/+/g;function gt(N,it){return typeof N=="object"&&N!==null&&N.key!=null?et(""+N.key):it.toString(36)}function ft(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(G,G):(N.status="pending",N.then(function(it){N.status==="pending"&&(N.status="fulfilled",N.value=it)},function(it){N.status==="pending"&&(N.status="rejected",N.reason=it)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function O(N,it,yt,At,Ot){var at=typeof N;(at==="undefined"||at==="boolean")&&(N=null);var ct=!1;if(N===null)ct=!0;else switch(at){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(N.$$typeof){case o:case e:ct=!0;break;case x:return ct=N._init,O(ct(N._payload),it,yt,At,Ot)}}if(ct)return Ot=Ot(N),ct=At===""?"."+gt(N,0):At,k(Ot)?(yt="",ct!=null&&(yt=ct.replace(lt,"$&/")+"/"),O(Ot,it,yt,"",function(Xt){return Xt})):Ot!=null&&(H(Ot)&&(Ot=C(Ot,yt+(Ot.key==null||N&&N.key===Ot.key?"":(""+Ot.key).replace(lt,"$&/")+"/")+ct)),it.push(Ot)),1;ct=0;var Dt=At===""?".":At+":";if(k(N))for(var It=0;It<N.length;It++)At=N[It],at=Dt+gt(At,It),ct+=O(At,it,yt,at,Ot);else if(It=M(N),typeof It=="function")for(N=It.call(N),It=0;!(At=N.next()).done;)At=At.value,at=Dt+gt(At,It++),ct+=O(At,it,yt,at,Ot);else if(at==="object"){if(typeof N.then=="function")return O(ft(N),it,yt,At,Ot);throw it=String(N),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return ct}function Z(N,it,yt){if(N==null)return N;var At=[],Ot=0;return O(N,At,"","",function(at){return it.call(yt,at,Ot++)}),At}function Y(N){if(N._status===-1){var it=N._result;it=it(),it.then(function(yt){(N._status===0||N._status===-1)&&(N._status=1,N._result=yt)},function(yt){(N._status===0||N._status===-1)&&(N._status=2,N._result=yt)}),N._status===-1&&(N._status=0,N._result=it)}if(N._status===1)return N._result.default;throw N._result}var xt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Et={map:Z,forEach:function(N,it,yt){Z(N,function(){it.apply(this,arguments)},yt)},count:function(N){var it=0;return Z(N,function(){it++}),it},toArray:function(N){return Z(N,function(it){return it})||[]},only:function(N){if(!H(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return re.Activity=v,re.Children=Et,re.Component=_,re.Fragment=i,re.Profiler=l,re.PureComponent=z,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,re.__COMPILER_RUNTIME={__proto__:null,c:function(N){return B.H.useMemoCache(N)}},re.cache=function(N){return function(){return N.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(N,it,yt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var At=R({},N.props),Ot=N.key;if(it!=null)for(at in it.key!==void 0&&(Ot=""+it.key),it)!K.call(it,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&it.ref===void 0||(At[at]=it[at]);var at=arguments.length-2;if(at===1)At.children=yt;else if(1<at){for(var ct=Array(at),Dt=0;Dt<at;Dt++)ct[Dt]=arguments[Dt+2];At.children=ct}return w(N.type,Ot,At)},re.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},re.createElement=function(N,it,yt){var At,Ot={},at=null;if(it!=null)for(At in it.key!==void 0&&(at=""+it.key),it)K.call(it,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Ot[At]=it[At]);var ct=arguments.length-2;if(ct===1)Ot.children=yt;else if(1<ct){for(var Dt=Array(ct),It=0;It<ct;It++)Dt[It]=arguments[It+2];Ot.children=Dt}if(N&&N.defaultProps)for(At in ct=N.defaultProps,ct)Ot[At]===void 0&&(Ot[At]=ct[At]);return w(N,at,Ot)},re.createRef=function(){return{current:null}},re.forwardRef=function(N){return{$$typeof:d,render:N}},re.isValidElement=H,re.lazy=function(N){return{$$typeof:x,_payload:{_status:-1,_result:N},_init:Y}},re.memo=function(N,it){return{$$typeof:p,type:N,compare:it===void 0?null:it}},re.startTransition=function(N){var it=B.T,yt={};B.T=yt;try{var At=N(),Ot=B.S;Ot!==null&&Ot(yt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(G,xt)}catch(at){xt(at)}finally{it!==null&&yt.types!==null&&(it.types=yt.types),B.T=it}},re.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},re.use=function(N){return B.H.use(N)},re.useActionState=function(N,it,yt){return B.H.useActionState(N,it,yt)},re.useCallback=function(N,it){return B.H.useCallback(N,it)},re.useContext=function(N){return B.H.useContext(N)},re.useDebugValue=function(){},re.useDeferredValue=function(N,it){return B.H.useDeferredValue(N,it)},re.useEffect=function(N,it){return B.H.useEffect(N,it)},re.useEffectEvent=function(N){return B.H.useEffectEvent(N)},re.useId=function(){return B.H.useId()},re.useImperativeHandle=function(N,it,yt){return B.H.useImperativeHandle(N,it,yt)},re.useInsertionEffect=function(N,it){return B.H.useInsertionEffect(N,it)},re.useLayoutEffect=function(N,it){return B.H.useLayoutEffect(N,it)},re.useMemo=function(N,it){return B.H.useMemo(N,it)},re.useOptimistic=function(N,it){return B.H.useOptimistic(N,it)},re.useReducer=function(N,it,yt){return B.H.useReducer(N,it,yt)},re.useRef=function(N){return B.H.useRef(N)},re.useState=function(N){return B.H.useState(N)},re.useSyncExternalStore=function(N,it,yt){return B.H.useSyncExternalStore(N,it,yt)},re.useTransition=function(){return B.H.useTransition()},re.version="19.2.0",re}var m0;function xd(){return m0||(m0=1,Xf.exports=uS()),Xf.exports}var yc=xd();const fS=T_(yc);var Wf={exports:{}},xo={},jf={exports:{}},qf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0;function hS(){return g0||(g0=1,(function(o){function e(O,Z){var Y=O.length;O.push(Z);t:for(;0<Y;){var xt=Y-1>>>1,Et=O[xt];if(0<l(Et,Z))O[xt]=Z,O[Y]=Et,Y=xt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var Z=O[0],Y=O.pop();if(Y!==Z){O[0]=Y;t:for(var xt=0,Et=O.length,N=Et>>>1;xt<N;){var it=2*(xt+1)-1,yt=O[it],At=it+1,Ot=O[At];if(0>l(yt,Y))At<Et&&0>l(Ot,yt)?(O[xt]=Ot,O[At]=Y,xt=At):(O[xt]=yt,O[it]=Y,xt=it);else if(At<Et&&0>l(Ot,Y))O[xt]=Ot,O[At]=Y,xt=At;else break t}}return Z}function l(O,Z){var Y=O.sortIndex-Z.sortIndex;return Y!==0?Y:O.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],x=1,v=null,S=3,M=!1,b=!1,R=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function D(O){for(var Z=i(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=O)s(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function k(O){if(R=!1,D(O),!b)if(i(m)!==null)b=!0,G||(G=!0,et());else{var Z=i(p);Z!==null&&ft(k,Z.startTime-O)}}var G=!1,B=-1,K=5,w=-1;function C(){return y?!0:!(o.unstable_now()-w<K)}function H(){if(y=!1,G){var O=o.unstable_now();w=O;var Z=!0;try{t:{b=!1,R&&(R=!1,F(B),B=-1),M=!0;var Y=S;try{e:{for(D(O),v=i(m);v!==null&&!(v.expirationTime>O&&C());){var xt=v.callback;if(typeof xt=="function"){v.callback=null,S=v.priorityLevel;var Et=xt(v.expirationTime<=O);if(O=o.unstable_now(),typeof Et=="function"){v.callback=Et,D(O),Z=!0;break e}v===i(m)&&s(m),D(O)}else s(m);v=i(m)}if(v!==null)Z=!0;else{var N=i(p);N!==null&&ft(k,N.startTime-O),Z=!1}}break t}finally{v=null,S=Y,M=!1}Z=void 0}}finally{Z?et():G=!1}}}var et;if(typeof z=="function")et=function(){z(H)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,gt=lt.port2;lt.port1.onmessage=H,et=function(){gt.postMessage(null)}}else et=function(){_(H,0)};function ft(O,Z){B=_(function(){O(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var Y=S;S=Z;try{return O()}finally{S=Y}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(O,Z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Y=S;S=O;try{return Z()}finally{S=Y}},o.unstable_scheduleCallback=function(O,Z,Y){var xt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?xt+Y:xt):Y=xt,O){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=Y+Et,O={id:x++,callback:Z,priorityLevel:O,startTime:Y,expirationTime:Et,sortIndex:-1},Y>xt?(O.sortIndex=Y,e(p,O),i(m)===null&&O===i(p)&&(R?(F(B),B=-1):R=!0,ft(k,Y-xt))):(O.sortIndex=Et,e(m,O),b||M||(b=!0,G||(G=!0,et()))),O},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(O){var Z=S;return function(){var Y=S;S=Z;try{return O.apply(this,arguments)}finally{S=Y}}}})(qf)),qf}var _0;function dS(){return _0||(_0=1,jf.exports=hS()),jf.exports}var Yf={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0;function pS(){if(v0)return Tn;v0=1;var o=xd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:x}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Tn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,x)},Tn.flushSync=function(m){var p=h.T,x=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=x,s.d.f()}},Tn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Tn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Tn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,v=d(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:M}):x==="script"&&s.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Tn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Tn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,v=d(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Tn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Tn.requestFormReset=function(m){s.d.r(m)},Tn.unstable_batchedUpdates=function(m,p){return m(p)},Tn.useFormState=function(m,p,x){return h.H.useFormState(m,p,x)},Tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Tn.version="19.2.0",Tn}var x0;function mS(){if(x0)return Yf.exports;x0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Yf.exports=pS(),Yf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0;function gS(){if(S0)return xo;S0=1;var o=dS(),e=xd(),i=mS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var g=!1,T=c.child;T;){if(T===a){g=!0,a=c,r=f;break}if(T===r){g=!0,r=c,a=f;break}T=T.sibling}if(!g){for(T=f.child;T;){if(T===a){g=!0,a=f,r=c;break}if(T===r){g=!0,r=f,a=c;break}T=T.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),z=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function et(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Symbol.for("react.client.reference");function gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===lt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case k:return"Suspense";case G:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case z:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:gt(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return gt(t(n))}catch{}}return null}var ft=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},xt=[],Et=-1;function N(t){return{current:t}}function it(t){0>Et||(t.current=xt[Et],xt[Et]=null,Et--)}function yt(t,n){Et++,xt[Et]=t.current,t.current=n}var At=N(null),Ot=N(null),at=N(null),ct=N(null);function Dt(t,n){switch(yt(at,n),yt(Ot,t),yt(At,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?zg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=zg(n),t=Pg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}it(At),yt(At,t)}function It(){it(At),it(Ot),it(at)}function Xt(t){t.memoizedState!==null&&yt(ct,t);var n=At.current,a=Pg(n,t.type);n!==a&&(yt(Ot,t),yt(At,a))}function he(t){Ot.current===t&&(it(At),it(Ot)),ct.current===t&&(it(ct),po._currentValue=Y)}var nn,I;function be(t){if(nn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);nn=n&&n[1]||"",I=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nn+t+I}var ie=!1;function te(t,n){if(!t||ie)return"";ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var nt=ot}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(ot){nt=ot}t.call(mt.prototype)}}else{try{throw Error()}catch(ot){nt=ot}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&nt&&typeof ot.stack=="string")return[ot.stack,nt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],T=f[1];if(g&&T){var P=g.split(`
`),$=T.split(`
`);for(c=r=0;r<P.length&&!P[r].includes("DetermineComponentFrameRoot");)r++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(r===P.length||c===$.length)for(r=P.length-1,c=$.length-1;1<=r&&0<=c&&P[r]!==$[c];)c--;for(;1<=r&&0<=c;r--,c--)if(P[r]!==$[c]){if(r!==1||c!==1)do if(r--,c--,0>c||P[r]!==$[c]){var ht=`
`+P[r].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=r&&0<=c);break}}}finally{ie=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?be(a):""}function Wt(t,n){switch(t.tag){case 26:case 27:case 5:return be(t.type);case 16:return be("Lazy");case 13:return t.child!==n&&n!==null?be("Suspense Fallback"):be("Suspense");case 19:return be("SuspenseList");case 0:case 15:return te(t.type,!1);case 11:return te(t.type.render,!1);case 1:return te(t.type,!0);case 31:return be("Activity");default:return""}}function Ge(t){try{var n="",a=null;do n+=Wt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var kt=Object.prototype.hasOwnProperty,se=o.unstable_scheduleCallback,Ke=o.unstable_cancelCallback,Ze=o.unstable_shouldYield,U=o.unstable_requestPaint,E=o.unstable_now,tt=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,St=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,Rt=o.unstable_IdlePriority,qt=o.log,Yt=o.unstable_setDisableYieldValue,Tt=null,Ct=null;function Kt(t){if(typeof qt=="function"&&Yt(t),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Tt,t)}catch{}}var Pt=Math.clz32?Math.clz32:X,Ut=Math.log,oe=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(Ut(t)/oe|0)|0}var bt=256,wt=262144,Bt=4194304;function Mt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _t(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?c=Mt(r):(g&=T,g!==0?c=Mt(g):a||(a=T&~t,a!==0&&(c=Mt(a))))):(T=r&~f,T!==0?c=Mt(T):g!==0?c=Mt(g):a||(a=r&~t,a!==0&&(c=Mt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ft(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ae(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Le(){var t=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),t}function Me(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Cn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Jn(t,n,a,r,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,P=t.expirationTimes,$=t.hiddenUpdates;for(a=g&~a;0<a;){var ht=31-Pt(a),mt=1<<ht;T[ht]=0,P[ht]=-1;var nt=$[ht];if(nt!==null)for($[ht]=null,ht=0;ht<nt.length;ht++){var ot=nt[ht];ot!==null&&(ot.lane&=-536870913)}a&=~mt}r!==0&&Rr(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Rr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Pt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Si(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Pt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Ss(t,n){var a=n&-n;return a=(a&42)!==0?1:ys(a),(a&(t.suspendedLanes|n))!==0?0:a}function ys(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ms(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ga(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:s0(t.type))}function Cr(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var Gn=Math.random().toString(36).slice(2),an="__reactFiber$"+Gn,_n="__reactProps$"+Gn,sa="__reactContainer$"+Gn,wr="__reactEvents$"+Gn,Pc="__reactListeners$"+Gn,Bc="__reactHandles$"+Gn,Fo="__reactResources$"+Gn,Va="__reactMarker$"+Gn;function A(t){delete t[an],delete t[_n],delete t[wr],delete t[Pc],delete t[Bc]}function W(t){var n=t[an];if(n)return n;for(var a=t.parentNode;a;){if(n=a[sa]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=kg(t);t!==null;){if(a=t[an])return a;t=kg(t)}return n}t=a,a=t.parentNode}return null}function st(t){if(t=t[an]||t[sa]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function rt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function q(t){var n=t[Fo];return n||(n=t[Fo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function vt(t){t[Va]=!0}var Nt=new Set,Gt={};function zt(t,n){Qt(t,n),Qt(t+"Capture",n)}function Qt(t,n){for(Gt[t]=n,t=0;t<n.length;t++)Nt.add(n[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},de={};function Ue(t){return kt.call(de,t)?!0:kt.call(Jt,t)?!1:ne.test(t)?de[t]=!0:(Jt[t]=!0,!1)}function Ve(t,n,a){if(Ue(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ne(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function pe(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function Vt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ee(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function vn(t){if(!t._valueTracker){var n=Xe(t)?"checked":"value";t._valueTracker=Ee(t,n,""+t[n])}}function Di(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Xe(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function pn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ka=/[\n"\\]/g;function _e(t){return t.replace(ka,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function En(t,n,a,r,c,f,g,T){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Vt(n)):t.value!==""+Vt(n)&&(t.value=""+Vt(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?un(t,g,Vt(n)):a!=null?un(t,g,Vt(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Vt(T):t.removeAttribute("name")}function wn(t,n,a,r,c,f,g,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){vn(t);return}a=a!=null?""+Vt(a):"",n=n!=null?""+Vt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=T?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),vn(t)}function un(t,n,a){n==="number"&&pn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function $e(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+Vt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Es(t,n,a){if(n!=null&&(n=""+Vt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Vt(a):""}function yi(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ft(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Vt(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),vn(t)}function Ts(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var iv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nd(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||iv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ld(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Nd(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Nd(t,f,n[f])}function Ic(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var av=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ho(t){return sv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ui(){}var Fc=null;function Hc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bs=null,As=null;function Od(t){var n=st(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;t:switch(t=n.stateNode,n.type){case"input":if(En(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_e(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[_n]||null;if(!c)throw Error(s(90));En(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Di(r)}break t;case"textarea":Es(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&$e(t,!!a.multiple,n,!1)}}}var Gc=!1;function zd(t,n,a){if(Gc)return t(n,a);Gc=!0;try{var r=t(n);return r}finally{if(Gc=!1,(bs!==null||As!==null)&&(Rl(),bs&&(n=bs,t=As,As=bs=null,Od(n),t)))for(n=0;n<t.length;n++)Od(t[n])}}function Dr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[_n]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=!1;if(Ni)try{var Ur={};Object.defineProperty(Ur,"passive",{get:function(){Vc=!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{Vc=!1}var ra=null,kc=null,Go=null;function Pd(){if(Go)return Go;var t,n=kc,a=n.length,r,c="value"in ra?ra.value:ra.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===c[f-r];r++);return Go=c.slice(t,1<r?1-r:void 0)}function Vo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ko(){return!0}function Bd(){return!1}function Nn(t){function n(a,r,c,f,g){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ko:Bd,this.isPropagationStopped=Bd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),n}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=Nn(Xa),Nr=v({},Xa,{view:0,detail:0}),rv=Nn(Nr),Xc,Wc,Lr,Wo=v({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Lr&&(Lr&&t.type==="mousemove"?(Xc=t.screenX-Lr.screenX,Wc=t.screenY-Lr.screenY):Wc=Xc=0,Lr=t),Xc)},movementY:function(t){return"movementY"in t?t.movementY:Wc}}),Id=Nn(Wo),ov=v({},Wo,{dataTransfer:0}),lv=Nn(ov),cv=v({},Nr,{relatedTarget:0}),jc=Nn(cv),uv=v({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),fv=Nn(uv),hv=v({},Xa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dv=Nn(hv),pv=v({},Xa,{data:0}),Fd=Nn(pv),mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_v={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=_v[t])?!!n[t]:!1}function qc(){return vv}var xv=v({},Nr,{key:function(t){if(t.key){var n=mv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(t){return t.type==="keypress"?Vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sv=Nn(xv),yv=v({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hd=Nn(yv),Mv=v({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),Ev=Nn(Mv),Tv=v({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),bv=Nn(Tv),Av=v({},Wo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rv=Nn(Av),Cv=v({},Xa,{newState:0,oldState:0}),wv=Nn(Cv),Dv=[9,13,27,32],Yc=Ni&&"CompositionEvent"in window,Or=null;Ni&&"documentMode"in document&&(Or=document.documentMode);var Uv=Ni&&"TextEvent"in window&&!Or,Gd=Ni&&(!Yc||Or&&8<Or&&11>=Or),Vd=" ",kd=!1;function Xd(t,n){switch(t){case"keyup":return Dv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rs=!1;function Nv(t,n){switch(t){case"compositionend":return Wd(n);case"keypress":return n.which!==32?null:(kd=!0,Vd);case"textInput":return t=n.data,t===Vd&&kd?null:t;default:return null}}function Lv(t,n){if(Rs)return t==="compositionend"||!Yc&&Xd(t,n)?(t=Pd(),Go=kc=ra=null,Rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gd&&n.locale!=="ko"?null:n.data;default:return null}}var Ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ov[t.type]:n==="textarea"}function qd(t,n,a,r){bs?As?As.push(r):As=[r]:bs=r,n=Ol(n,"onChange"),0<n.length&&(a=new Xo("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var zr=null,Pr=null;function zv(t){wg(t,0)}function jo(t){var n=rt(t);if(Di(n))return t}function Yd(t,n){if(t==="change")return n}var Zd=!1;if(Ni){var Zc;if(Ni){var Kc="oninput"in document;if(!Kc){var Kd=document.createElement("div");Kd.setAttribute("oninput","return;"),Kc=typeof Kd.oninput=="function"}Zc=Kc}else Zc=!1;Zd=Zc&&(!document.documentMode||9<document.documentMode)}function Qd(){zr&&(zr.detachEvent("onpropertychange",Jd),Pr=zr=null)}function Jd(t){if(t.propertyName==="value"&&jo(Pr)){var n=[];qd(n,Pr,t,Hc(t)),zd(zv,n)}}function Pv(t,n,a){t==="focusin"?(Qd(),zr=n,Pr=a,zr.attachEvent("onpropertychange",Jd)):t==="focusout"&&Qd()}function Bv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jo(Pr)}function Iv(t,n){if(t==="click")return jo(n)}function Fv(t,n){if(t==="input"||t==="change")return jo(n)}function Hv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Vn=typeof Object.is=="function"?Object.is:Hv;function Br(t,n){if(Vn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!kt.call(n,c)||!Vn(t[c],n[c]))return!1}return!0}function $d(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tp(t,n){var a=$d(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=$d(a)}}function ep(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ep(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function np(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=pn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=pn(t.document)}return n}function Qc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Gv=Ni&&"documentMode"in document&&11>=document.documentMode,Cs=null,Jc=null,Ir=null,$c=!1;function ip(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$c||Cs==null||Cs!==pn(r)||(r=Cs,"selectionStart"in r&&Qc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&Br(Ir,r)||(Ir=r,r=Ol(Jc,"onSelect"),0<r.length&&(n=new Xo("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Cs)))}function Wa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ws={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionrun:Wa("Transition","TransitionRun"),transitionstart:Wa("Transition","TransitionStart"),transitioncancel:Wa("Transition","TransitionCancel"),transitionend:Wa("Transition","TransitionEnd")},tu={},ap={};Ni&&(ap=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function ja(t){if(tu[t])return tu[t];if(!ws[t])return t;var n=ws[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in ap)return tu[t]=n[a];return t}var sp=ja("animationend"),rp=ja("animationiteration"),op=ja("animationstart"),Vv=ja("transitionrun"),kv=ja("transitionstart"),Xv=ja("transitioncancel"),lp=ja("transitionend"),cp=new Map,eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");eu.push("scrollEnd");function ui(t,n){cp.set(t,n),zt(n,[t])}var qo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},$n=[],Ds=0,nu=0;function Yo(){for(var t=Ds,n=nu=Ds=0;n<t;){var a=$n[n];$n[n++]=null;var r=$n[n];$n[n++]=null;var c=$n[n];$n[n++]=null;var f=$n[n];if($n[n++]=null,r!==null&&c!==null){var g=r.pending;g===null?c.next=c:(c.next=g.next,g.next=c),r.pending=c}f!==0&&up(a,c,f)}}function Zo(t,n,a,r){$n[Ds++]=t,$n[Ds++]=n,$n[Ds++]=a,$n[Ds++]=r,nu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function iu(t,n,a,r){return Zo(t,n,a,r),Ko(t)}function qa(t,n){return Zo(t,null,null,n),Ko(t)}function up(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Pt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function Ko(t){if(50<ro)throw ro=0,df=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Us={};function Wv(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,a,r){return new Wv(t,n,a,r)}function au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Li(t,n){var a=t.alternate;return a===null?(a=kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function fp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Qo(t,n,a,r,c,f){var g=0;if(r=t,typeof t=="function")au(t)&&(g=1);else if(typeof t=="string")g=Kx(t,a,At.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=kn(31,a,n,c),t.elementType=w,t.lanes=f,t;case R:return Ya(a.children,c,f,n);case y:g=8,c|=24;break;case _:return t=kn(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case k:return t=kn(13,a,n,c),t.elementType=k,t.lanes=f,t;case G:return t=kn(19,a,n,c),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:g=10;break t;case F:g=9;break t;case D:g=11;break t;case B:g=14;break t;case K:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=kn(g,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function Ya(t,n,a,r){return t=kn(7,t,r,n),t.lanes=a,t}function su(t,n,a){return t=kn(6,t,null,n),t.lanes=a,t}function hp(t){var n=kn(18,null,null,0);return n.stateNode=t,n}function ru(t,n,a){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var dp=new WeakMap;function ti(t,n){if(typeof t=="object"&&t!==null){var a=dp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ge(n)},dp.set(t,n),n)}return{value:t,source:n,stack:Ge(n)}}var Ns=[],Ls=0,Jo=null,Fr=0,ei=[],ni=0,oa=null,Mi=1,Ei="";function Oi(t,n){Ns[Ls++]=Fr,Ns[Ls++]=Jo,Jo=t,Fr=n}function pp(t,n,a){ei[ni++]=Mi,ei[ni++]=Ei,ei[ni++]=oa,oa=t;var r=Mi;t=Ei;var c=32-Pt(r)-1;r&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var g=c-c%5;f=(r&(1<<g)-1).toString(32),r>>=g,c-=g,Mi=1<<32-Pt(n)+c|a<<c|r,Ei=f+t}else Mi=1<<f|a<<c|r,Ei=t}function ou(t){t.return!==null&&(Oi(t,1),pp(t,1,0))}function lu(t){for(;t===Jo;)Jo=Ns[--Ls],Ns[Ls]=null,Fr=Ns[--Ls],Ns[Ls]=null;for(;t===oa;)oa=ei[--ni],ei[ni]=null,Ei=ei[--ni],ei[ni]=null,Mi=ei[--ni],ei[ni]=null}function mp(t,n){ei[ni++]=Mi,ei[ni++]=Ei,ei[ni++]=oa,Mi=n.id,Ei=n.overflow,oa=t}var xn=null,We=null,Se=!1,la=null,ii=!1,cu=Error(s(519));function ca(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Hr(ti(n,t)),cu}function gp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[an]=t,n[_n]=r,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<lo.length;a++)ge(lo[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),wn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),yi(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Lg(n.textContent,a)?(r.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),r.onScroll!=null&&ge("scroll",n),r.onScrollEnd!=null&&ge("scrollend",n),r.onClick!=null&&(n.onclick=Ui),n=!0):n=!1,n||ca(t,!0)}function _p(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:ii=!1;return;case 27:case 3:ii=!0;return;default:xn=xn.return}}function Os(t){if(t!==xn)return!1;if(!Se)return _p(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Cf(t.type,t.memoizedProps)),a=!a),a&&We&&ca(t),_p(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));We=Vg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));We=Vg(t)}else n===27?(n=We,Ea(t.type)?(t=Lf,Lf=null,We=t):We=n):We=xn?si(t.stateNode.nextSibling):null;return!0}function Za(){We=xn=null,Se=!1}function uu(){var t=la;return t!==null&&(Pn===null?Pn=t:Pn.push.apply(Pn,t),la=null),t}function Hr(t){la===null?la=[t]:la.push(t)}var fu=N(null),Ka=null,zi=null;function ua(t,n,a){yt(fu,n._currentValue),n._currentValue=a}function Pi(t){t._currentValue=fu.current,it(fu)}function hu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function du(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),hu(f.return,a,t),r||(g=null);break t}f=T.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),hu(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function zs(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var T=c.type;Vn(c.pendingProps.value,g.value)||(t!==null?t.push(T):t=[T])}}else if(c===ct.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(po):t=[po])}c=c.return}t!==null&&du(n,t,a,r),n.flags|=262144}function $o(t){for(t=t.firstContext;t!==null;){if(!Vn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Qa(t){Ka=t,zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return vp(Ka,t)}function tl(t,n){return Ka===null&&Qa(t),vp(t,n)}function vp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},zi===null){if(t===null)throw Error(s(308));zi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else zi=zi.next=n;return a}var jv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},qv=o.unstable_scheduleCallback,Yv=o.unstable_NormalPriority,sn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pu(){return{controller:new jv,data:new Map,refCount:0}}function Gr(t){t.refCount--,t.refCount===0&&qv(Yv,function(){t.controller.abort()})}var Vr=null,mu=0,Ps=0,Bs=null;function Zv(t,n){if(Vr===null){var a=Vr=[];mu=0,Ps=xf(),Bs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return mu++,n.then(xp,xp),n}function xp(){if(--mu===0&&Vr!==null){Bs!==null&&(Bs.status="fulfilled");var t=Vr;Vr=null,Ps=0,Bs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Kv(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Sp=O.S;O.S=function(t,n){ig=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Zv(t,n),Sp!==null&&Sp(t,n)};var Ja=N(null);function gu(){var t=Ja.current;return t!==null?t:ke.pooledCache}function el(t,n){n===null?yt(Ja,Ja.current):yt(Ja,n.pool)}function yp(){var t=gu();return t===null?null:{parent:sn._currentValue,pool:t}}var Is=Error(s(460)),_u=Error(s(474)),nl=Error(s(542)),il={then:function(){}};function Mp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ep(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ui,Ui),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,bp(t),t;default:if(typeof n.status=="string")n.then(Ui,Ui);else{if(t=ke,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,bp(t),t}throw ts=n,Is}}function $a(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ts=a,Is):a}}var ts=null;function Tp(){if(ts===null)throw Error(s(459));var t=ts;return ts=null,t}function bp(t){if(t===Is||t===nl)throw Error(s(483))}var Fs=null,kr=0;function al(t){var n=kr;return kr+=1,Fs===null&&(Fs=[]),Ep(Fs,t,n)}function Xr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function sl(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ap(t){function n(j,V){if(t){var J=j.deletions;J===null?(j.deletions=[V],j.flags|=16):J.push(V)}}function a(j,V){if(!t)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function r(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function c(j,V){return j=Li(j,V),j.index=0,j.sibling=null,j}function f(j,V,J){return j.index=J,t?(J=j.alternate,J!==null?(J=J.index,J<V?(j.flags|=67108866,V):J):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function g(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function T(j,V,J,pt){return V===null||V.tag!==6?(V=su(J,j.mode,pt),V.return=j,V):(V=c(V,J),V.return=j,V)}function P(j,V,J,pt){var $t=J.type;return $t===R?ht(j,V,J.props.children,pt,J.key):V!==null&&(V.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===K&&$a($t)===V.type)?(V=c(V,J.props),Xr(V,J),V.return=j,V):(V=Qo(J.type,J.key,J.props,null,j.mode,pt),Xr(V,J),V.return=j,V)}function $(j,V,J,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=ru(J,j.mode,pt),V.return=j,V):(V=c(V,J.children||[]),V.return=j,V)}function ht(j,V,J,pt,$t){return V===null||V.tag!==7?(V=Ya(J,j.mode,pt,$t),V.return=j,V):(V=c(V,J),V.return=j,V)}function mt(j,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=su(""+V,j.mode,J),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return J=Qo(V.type,V.key,V.props,null,j.mode,J),Xr(J,V),J.return=j,J;case b:return V=ru(V,j.mode,J),V.return=j,V;case K:return V=$a(V),mt(j,V,J)}if(ft(V)||et(V))return V=Ya(V,j.mode,J,null),V.return=j,V;if(typeof V.then=="function")return mt(j,al(V),J);if(V.$$typeof===z)return mt(j,tl(j,V),J);sl(j,V)}return null}function nt(j,V,J,pt){var $t=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return $t!==null?null:T(j,V,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===$t?P(j,V,J,pt):null;case b:return J.key===$t?$(j,V,J,pt):null;case K:return J=$a(J),nt(j,V,J,pt)}if(ft(J)||et(J))return $t!==null?null:ht(j,V,J,pt,null);if(typeof J.then=="function")return nt(j,V,al(J),pt);if(J.$$typeof===z)return nt(j,V,tl(j,J),pt);sl(j,J)}return null}function ot(j,V,J,pt,$t){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return j=j.get(J)||null,T(V,j,""+pt,$t);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return j=j.get(pt.key===null?J:pt.key)||null,P(V,j,pt,$t);case b:return j=j.get(pt.key===null?J:pt.key)||null,$(V,j,pt,$t);case K:return pt=$a(pt),ot(j,V,J,pt,$t)}if(ft(pt)||et(pt))return j=j.get(J)||null,ht(V,j,pt,$t,null);if(typeof pt.then=="function")return ot(j,V,J,al(pt),$t);if(pt.$$typeof===z)return ot(j,V,J,tl(V,pt),$t);sl(V,pt)}return null}function Ht(j,V,J,pt){for(var $t=null,Ae=null,jt=V,ce=V=0,xe=null;jt!==null&&ce<J.length;ce++){jt.index>ce?(xe=jt,jt=null):xe=jt.sibling;var Re=nt(j,jt,J[ce],pt);if(Re===null){jt===null&&(jt=xe);break}t&&jt&&Re.alternate===null&&n(j,jt),V=f(Re,V,ce),Ae===null?$t=Re:Ae.sibling=Re,Ae=Re,jt=xe}if(ce===J.length)return a(j,jt),Se&&Oi(j,ce),$t;if(jt===null){for(;ce<J.length;ce++)jt=mt(j,J[ce],pt),jt!==null&&(V=f(jt,V,ce),Ae===null?$t=jt:Ae.sibling=jt,Ae=jt);return Se&&Oi(j,ce),$t}for(jt=r(jt);ce<J.length;ce++)xe=ot(jt,j,ce,J[ce],pt),xe!==null&&(t&&xe.alternate!==null&&jt.delete(xe.key===null?ce:xe.key),V=f(xe,V,ce),Ae===null?$t=xe:Ae.sibling=xe,Ae=xe);return t&&jt.forEach(function(Ca){return n(j,Ca)}),Se&&Oi(j,ce),$t}function ee(j,V,J,pt){if(J==null)throw Error(s(151));for(var $t=null,Ae=null,jt=V,ce=V=0,xe=null,Re=J.next();jt!==null&&!Re.done;ce++,Re=J.next()){jt.index>ce?(xe=jt,jt=null):xe=jt.sibling;var Ca=nt(j,jt,Re.value,pt);if(Ca===null){jt===null&&(jt=xe);break}t&&jt&&Ca.alternate===null&&n(j,jt),V=f(Ca,V,ce),Ae===null?$t=Ca:Ae.sibling=Ca,Ae=Ca,jt=xe}if(Re.done)return a(j,jt),Se&&Oi(j,ce),$t;if(jt===null){for(;!Re.done;ce++,Re=J.next())Re=mt(j,Re.value,pt),Re!==null&&(V=f(Re,V,ce),Ae===null?$t=Re:Ae.sibling=Re,Ae=Re);return Se&&Oi(j,ce),$t}for(jt=r(jt);!Re.done;ce++,Re=J.next())Re=ot(jt,j,ce,Re.value,pt),Re!==null&&(t&&Re.alternate!==null&&jt.delete(Re.key===null?ce:Re.key),V=f(Re,V,ce),Ae===null?$t=Re:Ae.sibling=Re,Ae=Re);return t&&jt.forEach(function(oS){return n(j,oS)}),Se&&Oi(j,ce),$t}function Ie(j,V,J,pt){if(typeof J=="object"&&J!==null&&J.type===R&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:t:{for(var $t=J.key;V!==null;){if(V.key===$t){if($t=J.type,$t===R){if(V.tag===7){a(j,V.sibling),pt=c(V,J.props.children),pt.return=j,j=pt;break t}}else if(V.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===K&&$a($t)===V.type){a(j,V.sibling),pt=c(V,J.props),Xr(pt,J),pt.return=j,j=pt;break t}a(j,V);break}else n(j,V);V=V.sibling}J.type===R?(pt=Ya(J.props.children,j.mode,pt,J.key),pt.return=j,j=pt):(pt=Qo(J.type,J.key,J.props,null,j.mode,pt),Xr(pt,J),pt.return=j,j=pt)}return g(j);case b:t:{for($t=J.key;V!==null;){if(V.key===$t)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){a(j,V.sibling),pt=c(V,J.children||[]),pt.return=j,j=pt;break t}else{a(j,V);break}else n(j,V);V=V.sibling}pt=ru(J,j.mode,pt),pt.return=j,j=pt}return g(j);case K:return J=$a(J),Ie(j,V,J,pt)}if(ft(J))return Ht(j,V,J,pt);if(et(J)){if($t=et(J),typeof $t!="function")throw Error(s(150));return J=$t.call(J),ee(j,V,J,pt)}if(typeof J.then=="function")return Ie(j,V,al(J),pt);if(J.$$typeof===z)return Ie(j,V,tl(j,J),pt);sl(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(a(j,V.sibling),pt=c(V,J),pt.return=j,j=pt):(a(j,V),pt=su(J,j.mode,pt),pt.return=j,j=pt),g(j)):a(j,V)}return function(j,V,J,pt){try{kr=0;var $t=Ie(j,V,J,pt);return Fs=null,$t}catch(jt){if(jt===Is||jt===nl)throw jt;var Ae=kn(29,jt,null,j.mode);return Ae.lanes=pt,Ae.return=j,Ae}finally{}}}var es=Ap(!0),Rp=Ap(!1),fa=!1;function vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function da(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(we&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Ko(t),up(t,null,a),n}return Zo(t,r,n,a),Ko(t)}function Wr(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Si(t,a)}}function Su(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var yu=!1;function jr(){if(yu){var t=Bs;if(t!==null)throw t}}function qr(t,n,a,r){yu=!1;var c=t.updateQueue;fa=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var P=T,$=P.next;P.next=null,g===null?f=$:g.next=$,g=P;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==g&&(T===null?ht.firstBaseUpdate=$:T.next=$,ht.lastBaseUpdate=P))}if(f!==null){var mt=c.baseState;g=0,ht=$=P=null,T=f;do{var nt=T.lane&-536870913,ot=nt!==T.lane;if(ot?(ve&nt)===nt:(r&nt)===nt){nt!==0&&nt===Ps&&(yu=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Ht=t,ee=T;nt=n;var Ie=a;switch(ee.tag){case 1:if(Ht=ee.payload,typeof Ht=="function"){mt=Ht.call(Ie,mt,nt);break t}mt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=ee.payload,nt=typeof Ht=="function"?Ht.call(Ie,mt,nt):Ht,nt==null)break t;mt=v({},mt,nt);break t;case 2:fa=!0}}nt=T.callback,nt!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[nt]:ot.push(nt))}else ot={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?($=ht=ot,P=mt):ht=ht.next=ot,g|=nt;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ht===null&&(P=mt),c.baseState=P,c.firstBaseUpdate=$,c.lastBaseUpdate=ht,f===null&&(c.shared.lanes=0),va|=g,t.lanes=g,t.memoizedState=mt}}function Cp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function wp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Cp(a[t],n)}var Hs=N(null),rl=N(0);function Dp(t,n){t=Wi,yt(rl,t),yt(Hs,n),Wi=t|n.baseLanes}function Mu(){yt(rl,Wi),yt(Hs,Hs.current)}function Eu(){Wi=rl.current,it(Hs),it(rl)}var Xn=N(null),ai=null;function pa(t){var n=t.alternate;yt(tn,tn.current&1),yt(Xn,t),ai===null&&(n===null||Hs.current!==null||n.memoizedState!==null)&&(ai=t)}function Tu(t){yt(tn,tn.current),yt(Xn,t),ai===null&&(ai=t)}function Up(t){t.tag===22?(yt(tn,tn.current),yt(Xn,t),ai===null&&(ai=t)):ma()}function ma(){yt(tn,tn.current),yt(Xn,Xn.current)}function Wn(t){it(Xn),ai===t&&(ai=null),it(tn)}var tn=N(0);function ol(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Uf(a)||Nf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Bi=0,le=null,Pe=null,rn=null,ll=!1,Gs=!1,ns=!1,cl=0,Yr=0,Vs=null,Qv=0;function Qe(){throw Error(s(321))}function bu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Vn(t[a],n[a]))return!1;return!0}function Au(t,n,a,r,c,f){return Bi=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?pm:Gu,ns=!1,f=a(r,c),ns=!1,Gs&&(f=Lp(n,a,r,c)),Np(t),f}function Np(t){O.H=Qr;var n=Pe!==null&&Pe.next!==null;if(Bi=0,rn=Pe=le=null,ll=!1,Yr=0,Vs=null,n)throw Error(s(300));t===null||on||(t=t.dependencies,t!==null&&$o(t)&&(on=!0))}function Lp(t,n,a,r){le=t;var c=0;do{if(Gs&&(Vs=null),Yr=0,Gs=!1,25<=c)throw Error(s(301));if(c+=1,rn=Pe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=mm,f=n(a,r)}while(Gs);return f}function Jv(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?Zr(n):n,t=t.useState()[0],(Pe!==null?Pe.memoizedState:null)!==t&&(le.flags|=1024),n}function Ru(){var t=cl!==0;return cl=0,t}function Cu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function wu(t){if(ll){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ll=!1}Bi=0,rn=Pe=le=null,Gs=!1,Yr=cl=0,Vs=null}function Dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?le.memoizedState=rn=t:rn=rn.next=t,rn}function en(){if(Pe===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var n=rn===null?le.memoizedState:rn.next;if(n!==null)rn=n,Pe=t;else{if(t===null)throw le.alternate===null?Error(s(467)):Error(s(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},rn===null?le.memoizedState=rn=t:rn=rn.next=t}return rn}function ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zr(t){var n=Yr;return Yr+=1,Vs===null&&(Vs=[]),t=Ep(Vs,t,n),n=le,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?pm:Gu),t}function fl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Zr(t);if(t.$$typeof===z)return Sn(t)}throw Error(s(438,String(t)))}function Du(t){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=le.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ul(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=C;return n.index++,a}function Ii(t,n){return typeof n=="function"?n(t):n}function hl(t){var n=en();return Uu(n,Pe,t)}function Uu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=g=null,P=null,$=n,ht=!1;do{var mt=$.lane&-536870913;if(mt!==$.lane?(ve&mt)===mt:(Bi&mt)===mt){var nt=$.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),mt===Ps&&(ht=!0);else if((Bi&nt)===nt){$=$.next,nt===Ps&&(ht=!0);continue}else mt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(T=P=mt,g=f):P=P.next=mt,le.lanes|=nt,va|=nt;mt=$.action,ns&&a(f,mt),f=$.hasEagerState?$.eagerState:a(f,mt)}else nt={lane:mt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(T=P=nt,g=f):P=P.next=nt,le.lanes|=mt,va|=mt;$=$.next}while($!==null&&$!==n);if(P===null?g=f:P.next=T,!Vn(f,t.memoizedState)&&(on=!0,ht&&(a=Bs,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=P,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Nu(t){var n=en(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);Vn(f,n.memoizedState)||(on=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Op(t,n,a){var r=le,c=en(),f=Se;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Vn((Pe||c).memoizedState,a);if(g&&(c.memoizedState=a,on=!0),c=c.queue,zu(Bp.bind(null,r,c,t),[t]),c.getSnapshot!==n||g||rn!==null&&rn.memoizedState.tag&1){if(r.flags|=2048,ks(9,{destroy:void 0},Pp.bind(null,r,c,a,n),null),ke===null)throw Error(s(349));f||(Bi&127)!==0||zp(r,n,a)}return a}function zp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=ul(),le.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Pp(t,n,a,r){n.value=a,n.getSnapshot=r,Ip(n)&&Fp(t)}function Bp(t,n,a){return a(function(){Ip(n)&&Fp(t)})}function Ip(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Vn(t,a)}catch{return!0}}function Fp(t){var n=qa(t,2);n!==null&&Bn(n,t,2)}function Lu(t){var n=Dn();if(typeof t=="function"){var a=t;if(t=a(),ns){Kt(!0);try{a()}finally{Kt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:t},n}function Hp(t,n,a,r){return t.baseState=a,Uu(t,Pe,typeof r=="function"?r:Ii)}function $v(t,n,a,r,c){if(ml(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};O.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Gp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Gp(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=O.T,g={};O.T=g;try{var T=a(c,r),P=O.S;P!==null&&P(g,T),Vp(t,n,T)}catch($){Ou(t,n,$)}finally{f!==null&&g.types!==null&&(f.types=g.types),O.T=f}}else try{f=a(c,r),Vp(t,n,f)}catch($){Ou(t,n,$)}}function Vp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){kp(t,n,r)},function(r){return Ou(t,n,r)}):kp(t,n,a)}function kp(t,n,a){n.status="fulfilled",n.value=a,Xp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Gp(t,a)))}function Ou(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Xp(n),n=n.next;while(n!==r)}t.action=null}function Xp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Wp(t,n){return n}function jp(t,n){if(Se){var a=ke.formState;if(a!==null){t:{var r=le;if(Se){if(We){e:{for(var c=We,f=ii;c.nodeType!==8;){if(!f){c=null;break e}if(c=si(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){We=si(c.nextSibling),r=c.data==="F!";break t}}ca(r)}r=!1}r&&(n=a[0])}}return a=Dn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wp,lastRenderedState:n},a.queue=r,a=fm.bind(null,le,r),r.dispatch=a,r=Lu(!1),f=Hu.bind(null,le,!1,r.queue),r=Dn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=$v.bind(null,le,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function qp(t){var n=en();return Yp(n,Pe,t)}function Yp(t,n,a){if(n=Uu(t,n,Wp)[0],t=hl(Ii)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Zr(n)}catch(g){throw g===Is?nl:g}else r=n;n=en();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(le.flags|=2048,ks(9,{destroy:void 0},tx.bind(null,c,a),null)),[r,f,t]}function tx(t,n){t.action=n}function Zp(t){var n=en(),a=Pe;if(a!==null)return Yp(n,a,t);en(),n=n.memoizedState,a=en();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function ks(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=le.updateQueue,n===null&&(n=ul(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Kp(){return en().memoizedState}function dl(t,n,a,r){var c=Dn();le.flags|=t,c.memoizedState=ks(1|n,{destroy:void 0},a,r===void 0?null:r)}function pl(t,n,a,r){var c=en();r=r===void 0?null:r;var f=c.memoizedState.inst;Pe!==null&&r!==null&&bu(r,Pe.memoizedState.deps)?c.memoizedState=ks(n,f,a,r):(le.flags|=t,c.memoizedState=ks(1|n,f,a,r))}function Qp(t,n){dl(8390656,8,t,n)}function zu(t,n){pl(2048,8,t,n)}function ex(t){le.flags|=4;var n=le.updateQueue;if(n===null)n=ul(),le.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Jp(t){var n=en().memoizedState;return ex({ref:n,nextImpl:t}),function(){if((we&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function $p(t,n){return pl(4,2,t,n)}function tm(t,n){return pl(4,4,t,n)}function em(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function nm(t,n,a){a=a!=null?a.concat([t]):null,pl(4,4,em.bind(null,n,t),a)}function Pu(){}function im(t,n){var a=en();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&bu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function am(t,n){var a=en();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&bu(n,r[1]))return r[0];if(r=t(),ns){Kt(!0);try{t()}finally{Kt(!1)}}return a.memoizedState=[r,n],r}function Bu(t,n,a){return a===void 0||(Bi&1073741824)!==0&&(ve&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=sg(),le.lanes|=t,va|=t,a)}function sm(t,n,a,r){return Vn(a,n)?a:Hs.current!==null?(t=Bu(t,a,r),Vn(t,n)||(on=!0),t):(Bi&42)===0||(Bi&1073741824)!==0&&(ve&261930)===0?(on=!0,t.memoizedState=a):(t=sg(),le.lanes|=t,va|=t,n)}function rm(t,n,a,r,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var g=O.T,T={};O.T=T,Hu(t,!1,n,a);try{var P=c(),$=O.S;if($!==null&&$(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ht=Kv(P,r);Kr(t,n,ht,Yn(t))}else Kr(t,n,r,Yn(t))}catch(mt){Kr(t,n,{then:function(){},status:"rejected",reason:mt},Yn())}finally{Z.p=f,g!==null&&T.types!==null&&(g.types=T.types),O.T=g}}function nx(){}function Iu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=om(t).queue;rm(t,c,n,Y,a===null?nx:function(){return lm(t),a(r)})}function om(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function lm(t){var n=om(t);n.next===null&&(n=t.alternate.memoizedState),Kr(t,n.next.queue,{},Yn())}function Fu(){return Sn(po)}function cm(){return en().memoizedState}function um(){return en().memoizedState}function ix(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yn();t=ha(a);var r=da(n,t,a);r!==null&&(Bn(r,n,a),Wr(r,n,a)),n={cache:pu()},t.payload=n;return}n=n.return}}function ax(t,n,a){var r=Yn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ml(t)?hm(n,a):(a=iu(t,n,a,r),a!==null&&(Bn(a,t,r),dm(a,n,r)))}function fm(t,n,a){var r=Yn();Kr(t,n,a,r)}function Kr(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ml(t))hm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,T=f(g,a);if(c.hasEagerState=!0,c.eagerState=T,Vn(T,g))return Zo(t,n,c,0),ke===null&&Yo(),!1}catch{}finally{}if(a=iu(t,n,c,r),a!==null)return Bn(a,t,r),dm(a,n,r),!0}return!1}function Hu(t,n,a,r){if(r={lane:2,revertLane:xf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ml(t)){if(n)throw Error(s(479))}else n=iu(t,a,r,2),n!==null&&Bn(n,t,2)}function ml(t){var n=t.alternate;return t===le||n!==null&&n===le}function hm(t,n){Gs=ll=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function dm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Si(t,a)}}var Qr={readContext:Sn,use:fl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};Qr.useEffectEvent=Qe;var pm={readContext:Sn,use:fl,useCallback:function(t,n){return Dn().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:Qp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,dl(4194308,4,em.bind(null,n,t),a)},useLayoutEffect:function(t,n){return dl(4194308,4,t,n)},useInsertionEffect:function(t,n){dl(4,2,t,n)},useMemo:function(t,n){var a=Dn();n=n===void 0?null:n;var r=t();if(ns){Kt(!0);try{t()}finally{Kt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Dn();if(a!==void 0){var c=a(n);if(ns){Kt(!0);try{a(n)}finally{Kt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=ax.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var n=Dn();return t={current:t},n.memoizedState=t},useState:function(t){t=Lu(t);var n=t.queue,a=fm.bind(null,le,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Pu,useDeferredValue:function(t,n){var a=Dn();return Bu(a,t,n)},useTransition:function(){var t=Lu(!1);return t=rm.bind(null,le,t.queue,!0,!1),Dn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=le,c=Dn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ke===null)throw Error(s(349));(ve&127)!==0||zp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Qp(Bp.bind(null,r,f,t),[t]),r.flags|=2048,ks(9,{destroy:void 0},Pp.bind(null,r,f,a,n),null),a},useId:function(){var t=Dn(),n=ke.identifierPrefix;if(Se){var a=Ei,r=Mi;a=(r&~(1<<32-Pt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=cl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Qv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Fu,useFormState:jp,useActionState:jp,useOptimistic:function(t){var n=Dn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Hu.bind(null,le,!0,a),a.dispatch=n,[t,n]},useMemoCache:Du,useCacheRefresh:function(){return Dn().memoizedState=ix.bind(null,le)},useEffectEvent:function(t){var n=Dn(),a={impl:t};return n.memoizedState=a,function(){if((we&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Gu={readContext:Sn,use:fl,useCallback:im,useContext:Sn,useEffect:zu,useImperativeHandle:nm,useInsertionEffect:$p,useLayoutEffect:tm,useMemo:am,useReducer:hl,useRef:Kp,useState:function(){return hl(Ii)},useDebugValue:Pu,useDeferredValue:function(t,n){var a=en();return sm(a,Pe.memoizedState,t,n)},useTransition:function(){var t=hl(Ii)[0],n=en().memoizedState;return[typeof t=="boolean"?t:Zr(t),n]},useSyncExternalStore:Op,useId:cm,useHostTransitionStatus:Fu,useFormState:qp,useActionState:qp,useOptimistic:function(t,n){var a=en();return Hp(a,Pe,t,n)},useMemoCache:Du,useCacheRefresh:um};Gu.useEffectEvent=Jp;var mm={readContext:Sn,use:fl,useCallback:im,useContext:Sn,useEffect:zu,useImperativeHandle:nm,useInsertionEffect:$p,useLayoutEffect:tm,useMemo:am,useReducer:Nu,useRef:Kp,useState:function(){return Nu(Ii)},useDebugValue:Pu,useDeferredValue:function(t,n){var a=en();return Pe===null?Bu(a,t,n):sm(a,Pe.memoizedState,t,n)},useTransition:function(){var t=Nu(Ii)[0],n=en().memoizedState;return[typeof t=="boolean"?t:Zr(t),n]},useSyncExternalStore:Op,useId:cm,useHostTransitionStatus:Fu,useFormState:Zp,useActionState:Zp,useOptimistic:function(t,n){var a=en();return Pe!==null?Hp(a,Pe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Du,useCacheRefresh:um};mm.useEffectEvent=Jp;function Vu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ku={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=Yn(),c=ha(r);c.payload=n,a!=null&&(c.callback=a),n=da(t,c,r),n!==null&&(Bn(n,t,r),Wr(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=Yn(),c=ha(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=da(t,c,r),n!==null&&(Bn(n,t,r),Wr(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Yn(),r=ha(a);r.tag=2,n!=null&&(r.callback=n),n=da(t,r,a),n!==null&&(Bn(n,t,a),Wr(n,t,a))}};function gm(t,n,a,r,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!Br(a,r)||!Br(c,f):!0}function _m(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&ku.enqueueReplaceState(n,n.state,null)}function is(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function vm(t){qo(t)}function xm(t){console.error(t)}function Sm(t){qo(t)}function gl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function ym(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Xu(t,n,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){gl(t,n)},a}function Mm(t){return t=ha(t),t.tag=3,t}function Em(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){ym(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){ym(n,a,r),typeof c!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function sx(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&zs(n,a,c,!0),a=Xn.current,a!==null){switch(a.tag){case 31:case 13:return ai===null?Cl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===il?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),gf(t,r,c)),!1;case 22:return a.flags|=65536,r===il?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),gf(t,r,c)),!1}throw Error(s(435,a.tag))}return gf(t,r,c),Cl(),!1}if(Se)return n=Xn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==cu&&(t=Error(s(422),{cause:r}),Hr(ti(t,a)))):(r!==cu&&(n=Error(s(423),{cause:r}),Hr(ti(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=ti(r,a),c=Xu(t.stateNode,r,c),Su(t,c),Je!==4&&(Je=2)),!1;var f=Error(s(520),{cause:r});if(f=ti(f,a),so===null?so=[f]:so.push(f),Je!==4&&(Je=2),n===null)return!0;r=ti(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Xu(a.stateNode,r,t),Su(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(xa===null||!xa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Mm(c),Em(c,t,a,r),Su(a,c),!1}a=a.return}while(a!==null);return!1}var Wu=Error(s(461)),on=!1;function yn(t,n,a,r){n.child=t===null?Rp(n,null,a,r):es(n,t.child,a,r)}function Tm(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var T in r)T!=="ref"&&(g[T]=r[T])}else g=r;return Qa(n),r=Au(t,n,a,g,f,c),T=Ru(),t!==null&&!on?(Cu(t,n,c),Fi(t,n,c)):(Se&&T&&ou(n),n.flags|=1,yn(t,n,r,c),n.child)}function bm(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!au(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Am(t,n,f,r,c)):(t=Qo(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!$u(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Br,a(g,r)&&t.ref===n.ref)return Fi(t,n,c)}return n.flags|=1,t=Li(f,r),t.ref=n.ref,t.return=n,n.child=t}function Am(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(Br(f,r)&&t.ref===n.ref)if(on=!1,n.pendingProps=r=f,$u(t,c))(t.flags&131072)!==0&&(on=!0);else return n.lanes=t.lanes,Fi(t,n,c)}return ju(t,n,a,r,c)}function Rm(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Cm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&el(n,f!==null?f.cachePool:null),f!==null?Dp(n,f):Mu(),Up(n);else return r=n.lanes=536870912,Cm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(el(n,f.cachePool),Dp(n,f),ma(),n.memoizedState=null):(t!==null&&el(n,null),Mu(),ma());return yn(t,n,c,a),n.child}function Jr(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Cm(t,n,a,r,c){var f=gu();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&el(n,null),Mu(),Up(n),t!==null&&zs(t,n,r,!0),n.childLanes=c,null}function _l(t,n){return n=xl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function wm(t,n,a){return es(n,t.child,null,a),t=_l(n,n.pendingProps),t.flags|=2,Wn(n),n.memoizedState=null,t}function rx(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=_l(n,r),n.lanes=536870912,Jr(null,t);if(Tu(n),(t=We)?(t=Gg(t,ii),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:oa!==null?{id:Mi,overflow:Ei}:null,retryLane:536870912,hydrationErrors:null},a=hp(t),a.return=n,n.child=a,xn=n,We=null)):t=null,t===null)throw ca(n);return n.lanes=536870912,null}return _l(n,r)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Tu(n),c)if(n.flags&256)n.flags&=-257,n=wm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(on||zs(t,n,a,!1),c=(a&t.childLanes)!==0,on||c){if(r=ke,r!==null&&(g=Ss(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,qa(t,g),Bn(r,t,g),Wu;Cl(),n=wm(t,n,a)}else t=f.treeContext,We=si(g.nextSibling),xn=n,Se=!0,la=null,ii=!1,t!==null&&mp(n,t),n=_l(n,r),n.flags|=4096;return n}return t=Li(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function vl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ju(t,n,a,r,c){return Qa(n),a=Au(t,n,a,r,void 0,c),r=Ru(),t!==null&&!on?(Cu(t,n,c),Fi(t,n,c)):(Se&&r&&ou(n),n.flags|=1,yn(t,n,a,c),n.child)}function Dm(t,n,a,r,c,f){return Qa(n),n.updateQueue=null,a=Lp(n,r,a,c),Np(t),r=Ru(),t!==null&&!on?(Cu(t,n,f),Fi(t,n,f)):(Se&&r&&ou(n),n.flags|=1,yn(t,n,a,f),n.child)}function Um(t,n,a,r,c){if(Qa(n),n.stateNode===null){var f=Us,g=a.contextType;typeof g=="object"&&g!==null&&(f=Sn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},vu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Sn(g):Us,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Vu(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&ku.enqueueReplaceState(f,f.state,null),qr(n,r,f,c),jr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,P=is(a,T);f.props=P;var $=f.context,ht=a.contextType;g=Us,typeof ht=="object"&&ht!==null&&(g=Sn(ht));var mt=a.getDerivedStateFromProps;ht=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==g)&&_m(n,f,r,g),fa=!1;var nt=n.memoizedState;f.state=nt,qr(n,r,f,c),jr(),$=n.memoizedState,T||nt!==$||fa?(typeof mt=="function"&&(Vu(n,a,mt,r),$=n.memoizedState),(P=fa||gm(n,a,P,r,nt,$,g))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=$),f.props=r,f.state=$,f.context=g,r=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,xu(t,n),g=n.memoizedProps,ht=is(a,g),f.props=ht,mt=n.pendingProps,nt=f.context,$=a.contextType,P=Us,typeof $=="object"&&$!==null&&(P=Sn($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==mt||nt!==P)&&_m(n,f,r,P),fa=!1,nt=n.memoizedState,f.state=nt,qr(n,r,f,c),jr();var ot=n.memoizedState;g!==mt||nt!==ot||fa||t!==null&&t.dependencies!==null&&$o(t.dependencies)?(typeof T=="function"&&(Vu(n,a,T,r),ot=n.memoizedState),(ht=fa||gm(n,a,ht,r,nt,ot,P)||t!==null&&t.dependencies!==null&&$o(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=P,r=ht):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,vl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=es(n,t.child,null,c),n.child=es(n,null,a,c)):yn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Fi(t,n,c),t}function Nm(t,n,a,r){return Za(),n.flags|=256,yn(t,n,a,r),n.child}var qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yu(t){return{baseLanes:t,cachePool:yp()}}function Zu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=qn),t}function Lm(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(tn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(c?pa(n):ma(),(t=We)?(t=Gg(t,ii),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:oa!==null?{id:Mi,overflow:Ei}:null,retryLane:536870912,hydrationErrors:null},a=hp(t),a.return=n,n.child=a,xn=n,We=null)):t=null,t===null)throw ca(n);return Nf(t)?n.lanes=32:n.lanes=536870912,null}var T=r.children;return r=r.fallback,c?(ma(),c=n.mode,T=xl({mode:"hidden",children:T},c),r=Ya(r,c,a,null),T.return=n,r.return=n,T.sibling=r,n.child=T,r=n.child,r.memoizedState=Yu(a),r.childLanes=Zu(t,g,a),n.memoizedState=qu,Jr(null,r)):(pa(n),Ku(n,T))}var P=t.memoizedState;if(P!==null&&(T=P.dehydrated,T!==null)){if(f)n.flags&256?(pa(n),n.flags&=-257,n=Qu(t,n,a)):n.memoizedState!==null?(ma(),n.child=t.child,n.flags|=128,n=null):(ma(),T=r.fallback,c=n.mode,r=xl({mode:"visible",children:r.children},c),T=Ya(T,c,a,null),T.flags|=2,r.return=n,T.return=n,r.sibling=T,n.child=r,es(n,t.child,null,a),r=n.child,r.memoizedState=Yu(a),r.childLanes=Zu(t,g,a),n.memoizedState=qu,n=Jr(null,r));else if(pa(n),Nf(T)){if(g=T.nextSibling&&T.nextSibling.dataset,g)var $=g.dgst;g=$,r=Error(s(419)),r.stack="",r.digest=g,Hr({value:r,source:null,stack:null}),n=Qu(t,n,a)}else if(on||zs(t,n,a,!1),g=(a&t.childLanes)!==0,on||g){if(g=ke,g!==null&&(r=Ss(g,a),r!==0&&r!==P.retryLane))throw P.retryLane=r,qa(t,r),Bn(g,t,r),Wu;Uf(T)||Cl(),n=Qu(t,n,a)}else Uf(T)?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,We=si(T.nextSibling),xn=n,Se=!0,la=null,ii=!1,t!==null&&mp(n,t),n=Ku(n,r.children),n.flags|=4096);return n}return c?(ma(),T=r.fallback,c=n.mode,P=t.child,$=P.sibling,r=Li(P,{mode:"hidden",children:r.children}),r.subtreeFlags=P.subtreeFlags&65011712,$!==null?T=Li($,T):(T=Ya(T,c,a,null),T.flags|=2),T.return=n,r.return=n,r.sibling=T,n.child=r,Jr(null,r),r=n.child,T=t.child.memoizedState,T===null?T=Yu(a):(c=T.cachePool,c!==null?(P=sn._currentValue,c=c.parent!==P?{parent:P,pool:P}:c):c=yp(),T={baseLanes:T.baseLanes|a,cachePool:c}),r.memoizedState=T,r.childLanes=Zu(t,g,a),n.memoizedState=qu,Jr(t.child,r)):(pa(n),a=t.child,t=a.sibling,a=Li(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Ku(t,n){return n=xl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function xl(t,n){return t=kn(22,t,null,n),t.lanes=0,t}function Qu(t,n,a){return es(n,t.child,null,a),t=Ku(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Om(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),hu(t.return,n,a)}function Ju(t,n,a,r,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function zm(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var g=tn.current,T=(g&2)!==0;if(T?(g=g&1|2,n.flags|=128):g&=1,yt(tn,g),yn(t,n,r,a),r=Se?Fr:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Om(t,a,n);else if(t.tag===19)Om(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&ol(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Ju(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ol(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Ju(n,!0,a,null,f,r);break;case"together":Ju(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Fi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),va|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(zs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Li(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Li(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function $u(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&$o(t)))}function ox(t,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),ua(n,sn,t.memoizedState.cache),Za();break;case 27:case 5:Xt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:ua(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Tu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Lm(t,n,a):(pa(n),t=Fi(t,n,a),t!==null?t.sibling:null);pa(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(zs(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return zm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(tn,tn.current),r)break;return null;case 22:return n.lanes=0,Rm(t,n,a,n.pendingProps);case 24:ua(n,sn,t.memoizedState.cache)}return Fi(t,n,a)}function Pm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)on=!0;else{if(!$u(t,a)&&(n.flags&128)===0)return on=!1,ox(t,n,a);on=(t.flags&131072)!==0}else on=!1,Se&&(n.flags&1048576)!==0&&pp(n,Fr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=$a(n.elementType),n.type=t,typeof t=="function")au(t)?(r=is(t,r),n.tag=1,n=Um(null,n,t,r,a)):(n.tag=0,n=ju(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===D){n.tag=11,n=Tm(null,n,t,r,a);break t}else if(c===B){n.tag=14,n=bm(null,n,t,r,a);break t}}throw n=gt(t)||t,Error(s(306,n,""))}}return n;case 0:return ju(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=is(r,n.pendingProps),Um(t,n,r,c,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,xu(t,n),qr(n,r,null,a);var g=n.memoizedState;if(r=g.cache,ua(n,sn,r),r!==f.cache&&du(n,[sn],a,!0),jr(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Nm(t,n,r,a);break t}else if(r!==c){c=ti(Error(s(424)),n),Hr(c),n=Nm(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(We=si(t.firstChild),xn=n,Se=!0,la=null,ii=!0,a=Rp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Za(),r===c){n=Fi(t,n,a);break t}yn(t,n,r,a)}n=n.child}return n;case 26:return vl(t,n),t===null?(a=qg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,r=zl(at.current).createElement(a),r[an]=n,r[_n]=t,Mn(r,a,t),vt(r),n.stateNode=r):n.memoizedState=qg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Xt(n),t===null&&Se&&(r=n.stateNode=Xg(n.type,n.pendingProps,at.current),xn=n,ii=!0,c=We,Ea(n.type)?(Lf=c,We=si(r.firstChild)):We=c),yn(t,n,n.pendingProps.children,a),vl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((c=r=We)&&(r=Bx(r,n.type,n.pendingProps,ii),r!==null?(n.stateNode=r,xn=n,We=si(r.firstChild),ii=!1,c=!0):c=!1),c||ca(n)),Xt(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,r=f.children,Cf(c,f)?r=null:g!==null&&Cf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Au(t,n,Jv,null,null,a),po._currentValue=c),vl(t,n),yn(t,n,r,a),n.child;case 6:return t===null&&Se&&((t=a=We)&&(a=Ix(a,n.pendingProps,ii),a!==null?(n.stateNode=a,xn=n,We=null,t=!0):t=!1),t||ca(n)),null;case 13:return Lm(t,n,a);case 4:return Dt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=es(n,null,r,a):yn(t,n,r,a),n.child;case 11:return Tm(t,n,n.type,n.pendingProps,a);case 7:return yn(t,n,n.pendingProps,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,ua(n,n.type,r.value),yn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,Qa(n),c=Sn(c),r=r(c),n.flags|=1,yn(t,n,r,a),n.child;case 14:return bm(t,n,n.type,n.pendingProps,a);case 15:return Am(t,n,n.type,n.pendingProps,a);case 19:return zm(t,n,a);case 31:return rx(t,n,a);case 22:return Rm(t,n,a,n.pendingProps);case 24:return Qa(n),r=Sn(sn),t===null?(c=gu(),c===null&&(c=ke,f=pu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},vu(n),ua(n,sn,c)):((t.lanes&a)!==0&&(xu(t,n),qr(n,null,null,a),jr()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ua(n,sn,r)):(r=f.cache,ua(n,sn,r),r!==c.cache&&du(n,[sn],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Hi(t){t.flags|=4}function tf(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(cg())t.flags|=8192;else throw ts=il,_u}else t.flags&=-16777217}function Bm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Jg(n))if(cg())t.flags|=8192;else throw ts=il,_u}function Sl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Le():536870912,t.lanes|=n,qs|=n)}function $r(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function lx(t,n,a){var r=n.pendingProps;switch(lu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Pi(sn),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Os(n)?Hi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,uu())),je(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Hi(n),f!==null?(je(n),Bm(n,f)):(je(n),tf(n,c,null,r,a))):f?f!==t.memoizedState?(Hi(n),je(n),Bm(n,f)):(je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Hi(n),je(n),tf(n,c,t,r,a)),null;case 27:if(he(n),a=at.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Hi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return je(n),null}t=At.current,Os(n)?gp(n):(t=Xg(c,r,a),n.stateNode=t,Hi(n))}return je(n),null;case 5:if(he(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Hi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return je(n),null}if(f=At.current,Os(n))gp(n);else{var g=zl(at.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(c,{is:r.is}):g.createElement(c)}}f[an]=n,f[_n]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Mn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Hi(n)}}return je(n),tf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Hi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=at.current,Os(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=xn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[an]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Lg(t.nodeValue,a)),t||ca(n,!0)}else t=zl(t).createTextNode(r),t[an]=n,n.stateNode=t}return je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Os(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[an]=n}else Za(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),t=!1}else a=uu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Wn(n),n):(Wn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return je(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Os(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[an]=n}else Za(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),c=!1}else c=uu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Wn(n),n):(Wn(n),null)}return Wn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Sl(n,n.updateQueue),je(n),null);case 4:return It(),t===null&&Ef(n.stateNode.containerInfo),je(n),null;case 10:return Pi(n.type),je(n),null;case 19:if(it(tn),r=n.memoizedState,r===null)return je(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)$r(r,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ol(t),f!==null){for(n.flags|=128,$r(r,!1),t=f.updateQueue,n.updateQueue=t,Sl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)fp(a,t),a=a.sibling;return yt(tn,tn.current&1|2),Se&&Oi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&E()>bl&&(n.flags|=128,c=!0,$r(r,!1),n.lanes=4194304)}else{if(!c)if(t=ol(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Sl(n,t),$r(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Se)return je(n),null}else 2*E()-r.renderingStartTime>bl&&a!==536870912&&(n.flags|=128,c=!0,$r(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=E(),t.sibling=null,a=tn.current,yt(tn,c?a&1|2:a&1),Se&&Oi(n,r.treeForkCount),t):(je(n),null);case 22:case 23:return Wn(n),Eu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&Sl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&it(Ja),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Pi(sn),je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function cx(t,n){switch(lu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Pi(sn),It(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 31:if(n.memoizedState!==null){if(Wn(n),n.alternate===null)throw Error(s(340));Za()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Wn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Za()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return it(tn),null;case 4:return It(),null;case 10:return Pi(n.type),null;case 22:case 23:return Wn(n),Eu(),t!==null&&it(Ja),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Pi(sn),null;case 25:return null;default:return null}}function Im(t,n){switch(lu(n),n.tag){case 3:Pi(sn),It();break;case 26:case 27:case 5:he(n);break;case 4:It();break;case 31:n.memoizedState!==null&&Wn(n);break;case 13:Wn(n);break;case 19:it(tn);break;case 10:Pi(n.type);break;case 22:case 23:Wn(n),Eu(),t!==null&&it(Ja);break;case 24:Pi(sn)}}function to(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==c)}}catch(T){ze(n,n.return,T)}}function ga(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var g=r.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,c=n;var P=a,$=T;try{$()}catch(ht){ze(c,P,ht)}}}r=r.next}while(r!==f)}}catch(ht){ze(n,n.return,ht)}}function Fm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{wp(n,a)}catch(r){ze(t,t.return,r)}}}function Hm(t,n,a){a.props=is(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){ze(t,n,r)}}function eo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){ze(t,n,c)}}function Ti(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){ze(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ze(t,n,c)}else a.current=null}function Gm(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){ze(t,t.return,c)}}function ef(t,n,a){try{var r=t.stateNode;Ux(r,t.type,a,n),r[_n]=n}catch(c){ze(t,t.return,c)}}function Vm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ea(t.type)||t.tag===4}function nf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Vm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ea(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function af(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ui));else if(r!==4&&(r===27&&Ea(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(af(t,n,a),t=t.sibling;t!==null;)af(t,n,a),t=t.sibling}function yl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ea(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(yl(t,n,a),t=t.sibling;t!==null;)yl(t,n,a),t=t.sibling}function km(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Mn(n,r,a),n[an]=t,n[_n]=a}catch(f){ze(t,t.return,f)}}var Gi=!1,ln=!1,sf=!1,Xm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function ux(t,n){if(t=t.containerInfo,Af=Vl,t=np(t),Qc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,T=-1,P=-1,$=0,ht=0,mt=t,nt=null;e:for(;;){for(var ot;mt!==a||c!==0&&mt.nodeType!==3||(T=g+c),mt!==f||r!==0&&mt.nodeType!==3||(P=g+r),mt.nodeType===3&&(g+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)nt=mt,mt=ot;for(;;){if(mt===t)break e;if(nt===a&&++$===c&&(T=g),nt===f&&++ht===r&&(P=g),(ot=mt.nextSibling)!==null)break;mt=nt,nt=mt.parentNode}mt=ot}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rf={focusedElem:t,selectionRange:a},Vl=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ht=is(a.type,c);t=r.getSnapshotBeforeUpdate(Ht,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(ee){ze(a,a.return,ee)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Df(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Df(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Wm(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ki(t,a),r&4&&to(5,a);break;case 1:if(ki(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){ze(a,a.return,g)}else{var c=is(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){ze(a,a.return,g)}}r&64&&Fm(a),r&512&&eo(a,a.return);break;case 3:if(ki(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{wp(t,n)}catch(g){ze(a,a.return,g)}}break;case 27:n===null&&r&4&&km(a);case 26:case 5:ki(t,a),n===null&&r&4&&Gm(a),r&512&&eo(a,a.return);break;case 12:ki(t,a);break;case 31:ki(t,a),r&4&&Ym(t,a);break;case 13:ki(t,a),r&4&&Zm(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=xx.bind(null,a),Fx(t,a))));break;case 22:if(r=a.memoizedState!==null||Gi,!r){n=n!==null&&n.memoizedState!==null||ln,c=Gi;var f=ln;Gi=r,(ln=n)&&!f?Xi(t,a,(a.subtreeFlags&8772)!==0):ki(t,a),Gi=c,ln=f}break;case 30:break;default:ki(t,a)}}function jm(t){var n=t.alternate;n!==null&&(t.alternate=null,jm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&A(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qe=null,Ln=!1;function Vi(t,n,a){for(a=a.child;a!==null;)qm(t,n,a),a=a.sibling}function qm(t,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 26:ln||Ti(a,n),Vi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||Ti(a,n);var r=qe,c=Ln;Ea(a.type)&&(qe=a.stateNode,Ln=!1),Vi(t,n,a),uo(a.stateNode),qe=r,Ln=c;break;case 5:ln||Ti(a,n);case 6:if(r=qe,c=Ln,qe=null,Vi(t,n,a),qe=r,Ln=c,qe!==null)if(Ln)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{qe.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:qe!==null&&(Ln?(t=qe,Fg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),er(t)):Fg(qe,a.stateNode));break;case 4:r=qe,c=Ln,qe=a.stateNode.containerInfo,Ln=!0,Vi(t,n,a),qe=r,Ln=c;break;case 0:case 11:case 14:case 15:ga(2,a,n),ln||ga(4,a,n),Vi(t,n,a);break;case 1:ln||(Ti(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Hm(a,n,r)),Vi(t,n,a);break;case 21:Vi(t,n,a);break;case 22:ln=(r=ln)||a.memoizedState!==null,Vi(t,n,a),ln=r;break;default:Vi(t,n,a)}}function Ym(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{er(t)}catch(a){ze(n,n.return,a)}}}function Zm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{er(t)}catch(a){ze(n,n.return,a)}}function fx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Xm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Xm),n;default:throw Error(s(435,t.tag))}}function Ml(t,n){var a=fx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Sx.bind(null,t,r);r.then(c,c)}})}function On(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,g=n,T=g;t:for(;T!==null;){switch(T.tag){case 27:if(Ea(T.type)){qe=T.stateNode,Ln=!1;break t}break;case 5:qe=T.stateNode,Ln=!1;break t;case 3:case 4:qe=T.stateNode.containerInfo,Ln=!0;break t}T=T.return}if(qe===null)throw Error(s(160));qm(f,g,c),qe=null,Ln=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Km(n,t),n=n.sibling}var fi=null;function Km(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:On(n,t),zn(t),r&4&&(ga(3,t,t.return),to(3,t),ga(5,t,t.return));break;case 1:On(n,t),zn(t),r&512&&(ln||a===null||Ti(a,a.return)),r&64&&Gi&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=fi;if(On(n,t),zn(t),r&512&&(ln||a===null||Ti(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Va]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Mn(f,r,a),f[an]=t,vt(f),r=f;break t;case"link":var g=Kg("link","href",c).get(r+(a.href||""));if(g){for(var T=0;T<g.length;T++)if(f=g[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(T,1);break e}}f=c.createElement(r),Mn(f,r,a),c.head.appendChild(f);break;case"meta":if(g=Kg("meta","content",c).get(r+(a.content||""))){for(T=0;T<g.length;T++)if(f=g[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(T,1);break e}}f=c.createElement(r),Mn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[an]=t,vt(f),r=f}t.stateNode=r}else Qg(c,t.type,t.stateNode);else t.stateNode=Zg(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Qg(c,t.type,t.stateNode):Zg(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&ef(t,t.memoizedProps,a.memoizedProps)}break;case 27:On(n,t),zn(t),r&512&&(ln||a===null||Ti(a,a.return)),a!==null&&r&4&&ef(t,t.memoizedProps,a.memoizedProps);break;case 5:if(On(n,t),zn(t),r&512&&(ln||a===null||Ti(a,a.return)),t.flags&32){c=t.stateNode;try{Ts(c,"")}catch(Ht){ze(t,t.return,Ht)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,ef(t,c,a!==null?a.memoizedProps:c)),r&1024&&(sf=!0);break;case 6:if(On(n,t),zn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ht){ze(t,t.return,Ht)}}break;case 3:if(Il=null,c=fi,fi=Pl(n.containerInfo),On(n,t),fi=c,zn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{er(n.containerInfo)}catch(Ht){ze(t,t.return,Ht)}sf&&(sf=!1,Qm(t));break;case 4:r=fi,fi=Pl(t.stateNode.containerInfo),On(n,t),zn(t),fi=r;break;case 12:On(n,t),zn(t);break;case 31:On(n,t),zn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ml(t,r)));break;case 13:On(n,t),zn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Tl=E()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ml(t,r)));break;case 22:c=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,$=Gi,ht=ln;if(Gi=$||c,ln=ht||P,On(n,t),ln=ht,Gi=$,zn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Gi||ln||as(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=P.stateNode;var mt=P.memoizedProps.style,nt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Ht){ze(P,P.return,Ht)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(Ht){ze(P,P.return,Ht)}}}else if(n.tag===18){if(a===null){P=n;try{var ot=P.stateNode;c?Hg(ot,!0):Hg(P.stateNode,!1)}catch(Ht){ze(P,P.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Ml(t,a))));break;case 19:On(n,t),zn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ml(t,r)));break;case 30:break;case 21:break;default:On(n,t),zn(t)}}function zn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Vm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=nf(t);yl(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(Ts(g,""),a.flags&=-33);var T=nf(t);yl(t,T,g);break;case 3:case 4:var P=a.stateNode.containerInfo,$=nf(t);af(t,$,P);break;default:throw Error(s(161))}}catch(ht){ze(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Qm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Qm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ki(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Wm(t,n.alternate,n),n=n.sibling}function as(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ga(4,n,n.return),as(n);break;case 1:Ti(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Hm(n,n.return,a),as(n);break;case 27:uo(n.stateNode);case 26:case 5:Ti(n,n.return),as(n);break;case 22:n.memoizedState===null&&as(n);break;case 30:as(n);break;default:as(n)}t=t.sibling}}function Xi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Xi(c,f,a),to(4,f);break;case 1:if(Xi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){ze(r,r.return,$)}if(r=f,c=r.updateQueue,c!==null){var T=r.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Cp(P[c],T)}catch($){ze(r,r.return,$)}}a&&g&64&&Fm(f),eo(f,f.return);break;case 27:km(f);case 26:case 5:Xi(c,f,a),a&&r===null&&g&4&&Gm(f),eo(f,f.return);break;case 12:Xi(c,f,a);break;case 31:Xi(c,f,a),a&&g&4&&Ym(c,f);break;case 13:Xi(c,f,a),a&&g&4&&Zm(c,f);break;case 22:f.memoizedState===null&&Xi(c,f,a),eo(f,f.return);break;case 30:break;default:Xi(c,f,a)}n=n.sibling}}function rf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Gr(a))}function of(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Gr(t))}function hi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Jm(t,n,a,r),n=n.sibling}function Jm(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:hi(t,n,a,r),c&2048&&to(9,n);break;case 1:hi(t,n,a,r);break;case 3:hi(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Gr(t)));break;case 12:if(c&2048){hi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,T=f.onPostCommit;typeof T=="function"&&T(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){ze(n,n.return,P)}}else hi(t,n,a,r);break;case 31:hi(t,n,a,r);break;case 13:hi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?hi(t,n,a,r):no(t,n):f._visibility&2?hi(t,n,a,r):(f._visibility|=2,Xs(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&rf(g,n);break;case 24:hi(t,n,a,r),c&2048&&of(n.alternate,n);break;default:hi(t,n,a,r)}}function Xs(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,T=a,P=r,$=g.flags;switch(g.tag){case 0:case 11:case 15:Xs(f,g,T,P,c),to(8,g);break;case 23:break;case 22:var ht=g.stateNode;g.memoizedState!==null?ht._visibility&2?Xs(f,g,T,P,c):no(f,g):(ht._visibility|=2,Xs(f,g,T,P,c)),c&&$&2048&&rf(g.alternate,g);break;case 24:Xs(f,g,T,P,c),c&&$&2048&&of(g.alternate,g);break;default:Xs(f,g,T,P,c)}n=n.sibling}}function no(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:no(a,r),c&2048&&rf(r.alternate,r);break;case 24:no(a,r),c&2048&&of(r.alternate,r);break;default:no(a,r)}n=n.sibling}}var io=8192;function Ws(t,n,a){if(t.subtreeFlags&io)for(t=t.child;t!==null;)$m(t,n,a),t=t.sibling}function $m(t,n,a){switch(t.tag){case 26:Ws(t,n,a),t.flags&io&&t.memoizedState!==null&&Qx(a,fi,t.memoizedState,t.memoizedProps);break;case 5:Ws(t,n,a);break;case 3:case 4:var r=fi;fi=Pl(t.stateNode.containerInfo),Ws(t,n,a),fi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=io,io=16777216,Ws(t,n,a),io=r):Ws(t,n,a));break;default:Ws(t,n,a)}}function tg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ao(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,ng(r,t)}tg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)eg(t),t=t.sibling}function eg(t){switch(t.tag){case 0:case 11:case 15:ao(t),t.flags&2048&&ga(9,t,t.return);break;case 3:ao(t);break;case 12:ao(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,El(t)):ao(t);break;default:ao(t)}}function El(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,ng(r,t)}tg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ga(8,n,n.return),El(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,El(n));break;default:El(n)}t=t.sibling}}function ng(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Gr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,mn=r;else t:for(a=t;mn!==null;){r=mn;var c=r.sibling,f=r.return;if(jm(r),r===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var hx={getCacheForType:function(t){var n=Sn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Sn(sn).controller.signal}},dx=typeof WeakMap=="function"?WeakMap:Map,we=0,ke=null,me=null,ve=0,Oe=0,jn=null,_a=!1,js=!1,lf=!1,Wi=0,Je=0,va=0,ss=0,cf=0,qn=0,qs=0,so=null,Pn=null,uf=!1,Tl=0,ig=0,bl=1/0,Al=null,xa=null,fn=0,Sa=null,Ys=null,ji=0,ff=0,hf=null,ag=null,ro=0,df=null;function Yn(){return(we&2)!==0&&ve!==0?ve&-ve:O.T!==null?xf():Ga()}function sg(){if(qn===0)if((ve&536870912)===0||Se){var t=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),qn=t}else qn=536870912;return t=Xn.current,t!==null&&(t.flags|=32),qn}function Bn(t,n,a){(t===ke&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)&&(Zs(t,0),ya(t,ve,qn,!1)),Cn(t,a),((we&2)===0||t!==ke)&&(t===ke&&((we&2)===0&&(ss|=a),Je===4&&ya(t,ve,qn,!1)),bi(t))}function rg(t,n,a){if((we&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ft(t,n),c=r?gx(t,n):mf(t,n,!0),f=r;do{if(c===0){js&&!r&&ya(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!px(a)){c=mf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var T=t;c=so;var P=T.current.memoizedState.isDehydrated;if(P&&(Zs(T,g).flags|=256),g=mf(T,g,!1),g!==2){if(lf&&!P){T.errorRecoveryDisabledLanes|=f,ss|=f,c=4;break t}f=Pn,Pn=c,f!==null&&(Pn===null?Pn=f:Pn.push.apply(Pn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){Zs(t,0),ya(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ya(r,n,qn,!_a);break t;case 2:Pn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Tl+300-E(),10<c)){if(ya(r,n,qn,!_a),_t(r,0,!0)!==0)break t;ji=n,r.timeoutHandle=Bg(og.bind(null,r,a,Pn,Al,uf,n,qn,ss,qs,_a,f,"Throttled",-0,0),c);break t}og(r,a,Pn,Al,uf,n,qn,ss,qs,_a,f,null,-0,0)}}break}while(!0);bi(t)}function og(t,n,a,r,c,f,g,T,P,$,ht,mt,nt,ot){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ui},$m(n,f,mt);var Ht=(f&62914560)===f?Tl-E():(f&4194048)===f?ig-E():0;if(Ht=Jx(mt,Ht),Ht!==null){ji=f,t.cancelPendingCommit=Ht(mg.bind(null,t,n,f,a,r,c,g,T,P,ht,mt,null,nt,ot)),ya(t,f,g,!$);return}}mg(t,n,f,a,r,c,g,T,P)}function px(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Vn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ya(t,n,a,r){n&=~cf,n&=~ss,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),g=1<<f;r[f]=-1,c&=~g}a!==0&&Rr(t,a,n)}function Rl(){return(we&6)===0?(oo(0),!1):!0}function pf(){if(me!==null){if(Oe===0)var t=me.return;else t=me,zi=Ka=null,wu(t),Fs=null,kr=0,t=me;for(;t!==null;)Im(t.alternate,t),t=t.return;me=null}}function Zs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Ox(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ji=0,pf(),ke=t,me=a=Li(t.current,null),ve=n,Oe=0,jn=null,_a=!1,js=Ft(t,n),lf=!1,qs=qn=cf=ss=va=Je=0,Pn=so=null,uf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Pt(r),f=1<<c;n|=t[c],r&=~f}return Wi=n,Yo(),a}function lg(t,n){le=null,O.H=Qr,n===Is||n===nl?(n=Tp(),Oe=3):n===_u?(n=Tp(),Oe=4):Oe=n===Wu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,me===null&&(Je=1,gl(t,ti(n,t.current)))}function cg(){var t=Xn.current;return t===null?!0:(ve&4194048)===ve?ai===null:(ve&62914560)===ve||(ve&536870912)!==0?t===ai:!1}function ug(){var t=O.H;return O.H=Qr,t===null?Qr:t}function fg(){var t=O.A;return O.A=hx,t}function Cl(){Je=4,_a||(ve&4194048)!==ve&&Xn.current!==null||(js=!0),(va&134217727)===0&&(ss&134217727)===0||ke===null||ya(ke,ve,qn,!1)}function mf(t,n,a){var r=we;we|=2;var c=ug(),f=fg();(ke!==t||ve!==n)&&(Al=null,Zs(t,n)),n=!1;var g=Je;t:do try{if(Oe!==0&&me!==null){var T=me,P=jn;switch(Oe){case 8:pf(),g=6;break t;case 3:case 2:case 9:case 6:Xn.current===null&&(n=!0);var $=Oe;if(Oe=0,jn=null,Ks(t,T,P,$),a&&js){g=0;break t}break;default:$=Oe,Oe=0,jn=null,Ks(t,T,P,$)}}mx(),g=Je;break}catch(ht){lg(t,ht)}while(!0);return n&&t.shellSuspendCounter++,zi=Ka=null,we=r,O.H=c,O.A=f,me===null&&(ke=null,ve=0,Yo()),g}function mx(){for(;me!==null;)hg(me)}function gx(t,n){var a=we;we|=2;var r=ug(),c=fg();ke!==t||ve!==n?(Al=null,bl=E()+500,Zs(t,n)):js=Ft(t,n);t:do try{if(Oe!==0&&me!==null){n=me;var f=jn;e:switch(Oe){case 1:Oe=0,jn=null,Ks(t,n,f,1);break;case 2:case 9:if(Mp(f)){Oe=0,jn=null,dg(n);break}n=function(){Oe!==2&&Oe!==9||ke!==t||(Oe=7),bi(t)},f.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:Mp(f)?(Oe=0,jn=null,dg(n)):(Oe=0,jn=null,Ks(t,n,f,7));break;case 5:var g=null;switch(me.tag){case 26:g=me.memoizedState;case 5:case 27:var T=me;if(g?Jg(g):T.stateNode.complete){Oe=0,jn=null;var P=T.sibling;if(P!==null)me=P;else{var $=T.return;$!==null?(me=$,wl($)):me=null}break e}}Oe=0,jn=null,Ks(t,n,f,5);break;case 6:Oe=0,jn=null,Ks(t,n,f,6);break;case 8:pf(),Je=6;break t;default:throw Error(s(462))}}_x();break}catch(ht){lg(t,ht)}while(!0);return zi=Ka=null,O.H=r,O.A=c,we=a,me!==null?0:(ke=null,ve=0,Yo(),Je)}function _x(){for(;me!==null&&!Ze();)hg(me)}function hg(t){var n=Pm(t.alternate,t,Wi);t.memoizedProps=t.pendingProps,n===null?wl(t):me=n}function dg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Dm(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Dm(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:wu(n);default:Im(a,n),n=me=fp(n,Wi),n=Pm(a,n,Wi)}t.memoizedProps=t.pendingProps,n===null?wl(t):me=n}function Ks(t,n,a,r){zi=Ka=null,wu(n),Fs=null,kr=0;var c=n.return;try{if(sx(t,c,n,a,ve)){Je=1,gl(t,ti(a,t.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;Je=1,gl(t,ti(a,t.current)),me=null;return}n.flags&32768?(Se||r===1?t=!0:js||(ve&536870912)!==0?t=!1:(_a=t=!0,(r===2||r===9||r===3||r===6)&&(r=Xn.current,r!==null&&r.tag===13&&(r.flags|=16384))),pg(n,t)):wl(n)}function wl(t){var n=t;do{if((n.flags&32768)!==0){pg(n,_a);return}t=n.return;var a=lx(n.alternate,n,Wi);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);Je===0&&(Je=5)}function pg(t,n){do{var a=cx(t.alternate,t);if(a!==null){a.flags&=32767,me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=a}while(t!==null);Je=6,me=null}function mg(t,n,a,r,c,f,g,T,P){t.cancelPendingCommit=null;do Dl();while(fn!==0);if((we&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=nu,Jn(t,a,f,g,T,P),t===ke&&(me=ke=null,ve=0),Ys=n,Sa=t,ji=a,ff=f,hf=c,ag=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,yx(ut,function(){return Sg(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,c=Z.p,Z.p=2,g=we,we|=4;try{ux(t,n,a)}finally{we=g,Z.p=c,O.T=r}}fn=1,gg(),_g(),vg()}}function gg(){if(fn===1){fn=0;var t=Sa,n=Ys,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var r=Z.p;Z.p=2;var c=we;we|=4;try{Km(n,t);var f=Rf,g=np(t.containerInfo),T=f.focusedElem,P=f.selectionRange;if(g!==T&&T&&T.ownerDocument&&ep(T.ownerDocument.documentElement,T)){if(P!==null&&Qc(T)){var $=P.start,ht=P.end;if(ht===void 0&&(ht=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(ht,T.value.length);else{var mt=T.ownerDocument||document,nt=mt&&mt.defaultView||window;if(nt.getSelection){var ot=nt.getSelection(),Ht=T.textContent.length,ee=Math.min(P.start,Ht),Ie=P.end===void 0?ee:Math.min(P.end,Ht);!ot.extend&&ee>Ie&&(g=Ie,Ie=ee,ee=g);var j=tp(T,ee),V=tp(T,Ie);if(j&&V&&(ot.rangeCount!==1||ot.anchorNode!==j.node||ot.anchorOffset!==j.offset||ot.focusNode!==V.node||ot.focusOffset!==V.offset)){var J=mt.createRange();J.setStart(j.node,j.offset),ot.removeAllRanges(),ee>Ie?(ot.addRange(J),ot.extend(V.node,V.offset)):(J.setEnd(V.node,V.offset),ot.addRange(J))}}}}for(mt=[],ot=T;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var pt=mt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Vl=!!Af,Rf=Af=null}finally{we=c,Z.p=r,O.T=a}}t.current=n,fn=2}}function _g(){if(fn===2){fn=0;var t=Sa,n=Ys,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var r=Z.p;Z.p=2;var c=we;we|=4;try{Wm(t,n.alternate,n)}finally{we=c,Z.p=r,O.T=a}}fn=3}}function vg(){if(fn===4||fn===3){fn=0,U();var t=Sa,n=Ys,a=ji,r=ag;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?fn=5:(fn=0,Ys=Sa=null,xg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(xa=null),Ms(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Tt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,c=Z.p,Z.p=2,O.T=null;try{for(var f=t.onRecoverableError,g=0;g<r.length;g++){var T=r[g];f(T.value,{componentStack:T.stack})}}finally{O.T=n,Z.p=c}}(ji&3)!==0&&Dl(),bi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===df?ro++:(ro=0,df=t):ro=0,oo(0)}}function xg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Gr(n)))}function Dl(){return gg(),_g(),vg(),Sg()}function Sg(){if(fn!==5)return!1;var t=Sa,n=ff;ff=0;var a=Ms(ji),r=O.T,c=Z.p;try{Z.p=32>a?32:a,O.T=null,a=hf,hf=null;var f=Sa,g=ji;if(fn=0,Ys=Sa=null,ji=0,(we&6)!==0)throw Error(s(331));var T=we;if(we|=4,eg(f.current),Jm(f,f.current,g,a),we=T,oo(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Tt,f)}catch{}return!0}finally{Z.p=c,O.T=r,xg(t,n)}}function yg(t,n,a){n=ti(a,n),n=Xu(t.stateNode,n,2),t=da(t,n,2),t!==null&&(Cn(t,2),bi(t))}function ze(t,n,a){if(t.tag===3)yg(t,t,a);else for(;n!==null;){if(n.tag===3){yg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xa===null||!xa.has(r))){t=ti(a,t),a=Mm(2),r=da(n,a,2),r!==null&&(Em(a,r,n,t),Cn(r,2),bi(r));break}}n=n.return}}function gf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new dx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(lf=!0,c.add(a),t=vx.bind(null,t,n,a),n.then(t,t))}function vx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ke===t&&(ve&a)===a&&(Je===4||Je===3&&(ve&62914560)===ve&&300>E()-Tl?(we&2)===0&&Zs(t,0):cf|=a,qs===ve&&(qs=0)),bi(t)}function Mg(t,n){n===0&&(n=Le()),t=qa(t,n),t!==null&&(Cn(t,n),bi(t))}function xx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Mg(t,a)}function Sx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Mg(t,a)}function yx(t,n){return se(t,n)}var Ul=null,Qs=null,_f=!1,Nl=!1,vf=!1,Ma=0;function bi(t){t!==Qs&&t.next===null&&(Qs===null?Ul=Qs=t:Qs=Qs.next=t),Nl=!0,_f||(_f=!0,Ex())}function oo(t,n){if(!vf&&Nl){vf=!0;do for(var a=!1,r=Ul;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var g=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=c&~(g&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ag(r,f))}else f=ve,f=_t(r,r===ke?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ft(r,f)||(a=!0,Ag(r,f));r=r.next}while(a);vf=!1}}function Mx(){Eg()}function Eg(){Nl=_f=!1;var t=0;Ma!==0&&Lx()&&(t=Ma);for(var n=E(),a=null,r=Ul;r!==null;){var c=r.next,f=Tg(r,n);f===0?(r.next=null,a===null?Ul=c:a.next=c,c===null&&(Qs=a)):(a=r,(t!==0||(f&3)!==0)&&(Nl=!0)),r=c}fn!==0&&fn!==5||oo(t),Ma!==0&&(Ma=0)}function Tg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Pt(f),T=1<<g,P=c[g];P===-1?((T&a)===0||(T&r)!==0)&&(c[g]=ae(T,n)):P<=n&&(t.expiredLanes|=T),f&=~T}if(n=ke,a=ve,a=_t(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Ke(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ft(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Ke(r),Ms(a)){case 2:case 8:a=St;break;case 32:a=ut;break;case 268435456:a=Rt;break;default:a=ut}return r=bg.bind(null,t),a=se(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Ke(r),t.callbackPriority=2,t.callbackNode=null,2}function bg(t,n){if(fn!==0&&fn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Dl()&&t.callbackNode!==a)return null;var r=ve;return r=_t(t,t===ke?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(rg(t,r,n),Tg(t,E()),t.callbackNode!=null&&t.callbackNode===a?bg.bind(null,t):null)}function Ag(t,n){if(Dl())return null;rg(t,n,!0)}function Ex(){zx(function(){(we&6)!==0?se(dt,Mx):Eg()})}function xf(){if(Ma===0){var t=Ps;t===0&&(t=bt,bt<<=1,(bt&261888)===0&&(bt=256)),Ma=t}return Ma}function Rg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ho(""+t)}function Cg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Tx(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Rg((c[_n]||null).action),g=r.submitter;g&&(n=(n=g[_n]||null)?Rg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var T=new Xo("action","action",null,r,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ma!==0){var P=g?Cg(c,g):new FormData(c);Iu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=g?Cg(c,g):new FormData(c),Iu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var Sf=0;Sf<eu.length;Sf++){var yf=eu[Sf],bx=yf.toLowerCase(),Ax=yf[0].toUpperCase()+yf.slice(1);ui(bx,"on"+Ax)}ui(sp,"onAnimationEnd"),ui(rp,"onAnimationIteration"),ui(op,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(Vv,"onTransitionRun"),ui(kv,"onTransitionStart"),ui(Xv,"onTransitionCancel"),ui(lp,"onTransitionEnd"),Qt("onMouseEnter",["mouseout","mouseover"]),Qt("onMouseLeave",["mouseout","mouseover"]),Qt("onPointerEnter",["pointerout","pointerover"]),Qt("onPointerLeave",["pointerout","pointerover"]),zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lo));function wg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var T=r[g],P=T.instance,$=T.currentTarget;if(T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=$;try{f(c)}catch(ht){qo(ht)}c.currentTarget=null,f=P}else for(g=0;g<r.length;g++){if(T=r[g],P=T.instance,$=T.currentTarget,T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=$;try{f(c)}catch(ht){qo(ht)}c.currentTarget=null,f=P}}}}function ge(t,n){var a=n[wr];a===void 0&&(a=n[wr]=new Set);var r=t+"__bubble";a.has(r)||(Dg(n,t,2,!1),a.add(r))}function Mf(t,n,a){var r=0;n&&(r|=4),Dg(a,t,r,n)}var Ll="_reactListening"+Math.random().toString(36).slice(2);function Ef(t){if(!t[Ll]){t[Ll]=!0,Nt.forEach(function(a){a!=="selectionchange"&&(Rx.has(a)||Mf(a,!1,t),Mf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ll]||(n[Ll]=!0,Mf("selectionchange",!1,n))}}function Dg(t,n,a,r){switch(s0(n)){case 2:var c=eS;break;case 8:c=nS;break;default:c=If}a=c.bind(null,n,a,t),c=void 0,!Vc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Tf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var T=r.stateNode.containerInfo;if(T===c)break;if(g===4)for(g=r.return;g!==null;){var P=g.tag;if((P===3||P===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;T!==null;){if(g=W(T),g===null)return;if(P=g.tag,P===5||P===6||P===26||P===27){r=f=g;continue t}T=T.parentNode}}r=r.return}zd(function(){var $=f,ht=Hc(a),mt=[];t:{var nt=cp.get(t);if(nt!==void 0){var ot=Xo,Ht=t;switch(t){case"keypress":if(Vo(a)===0)break t;case"keydown":case"keyup":ot=Sv;break;case"focusin":Ht="focus",ot=jc;break;case"focusout":Ht="blur",ot=jc;break;case"beforeblur":case"afterblur":ot=jc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Ev;break;case sp:case rp:case op:ot=fv;break;case lp:ot=bv;break;case"scroll":case"scrollend":ot=rv;break;case"wheel":ot=Rv;break;case"copy":case"cut":case"paste":ot=dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Hd;break;case"toggle":case"beforetoggle":ot=wv}var ee=(n&4)!==0,Ie=!ee&&(t==="scroll"||t==="scrollend"),j=ee?nt!==null?nt+"Capture":null:nt;ee=[];for(var V=$,J;V!==null;){var pt=V;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||j===null||(pt=Dr(V,j),pt!=null&&ee.push(co(V,pt,J))),Ie)break;V=V.return}0<ee.length&&(nt=new ot(nt,Ht,null,a,ht),mt.push({event:nt,listeners:ee}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",nt&&a!==Fc&&(Ht=a.relatedTarget||a.fromElement)&&(W(Ht)||Ht[sa]))break t;if((ot||nt)&&(nt=ht.window===ht?ht:(nt=ht.ownerDocument)?nt.defaultView||nt.parentWindow:window,ot?(Ht=a.relatedTarget||a.toElement,ot=$,Ht=Ht?W(Ht):null,Ht!==null&&(Ie=u(Ht),ee=Ht.tag,Ht!==Ie||ee!==5&&ee!==27&&ee!==6)&&(Ht=null)):(ot=null,Ht=$),ot!==Ht)){if(ee=Id,pt="onMouseLeave",j="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(ee=Hd,pt="onPointerLeave",j="onPointerEnter",V="pointer"),Ie=ot==null?nt:rt(ot),J=Ht==null?nt:rt(Ht),nt=new ee(pt,V+"leave",ot,a,ht),nt.target=Ie,nt.relatedTarget=J,pt=null,W(ht)===$&&(ee=new ee(j,V+"enter",Ht,a,ht),ee.target=J,ee.relatedTarget=Ie,pt=ee),Ie=pt,ot&&Ht)e:{for(ee=Cx,j=ot,V=Ht,J=0,pt=j;pt;pt=ee(pt))J++;pt=0;for(var $t=V;$t;$t=ee($t))pt++;for(;0<J-pt;)j=ee(j),J--;for(;0<pt-J;)V=ee(V),pt--;for(;J--;){if(j===V||V!==null&&j===V.alternate){ee=j;break e}j=ee(j),V=ee(V)}ee=null}else ee=null;ot!==null&&Ug(mt,nt,ot,ee,!1),Ht!==null&&Ie!==null&&Ug(mt,Ie,Ht,ee,!0)}}t:{if(nt=$?rt($):window,ot=nt.nodeName&&nt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&nt.type==="file")var Ae=Yd;else if(jd(nt))if(Zd)Ae=Fv;else{Ae=Bv;var jt=Pv}else ot=nt.nodeName,!ot||ot.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?$&&Ic($.elementType)&&(Ae=Yd):Ae=Iv;if(Ae&&(Ae=Ae(t,$))){qd(mt,Ae,a,ht);break t}jt&&jt(t,nt,$),t==="focusout"&&$&&nt.type==="number"&&$.memoizedProps.value!=null&&un(nt,"number",nt.value)}switch(jt=$?rt($):window,t){case"focusin":(jd(jt)||jt.contentEditable==="true")&&(Cs=jt,Jc=$,Ir=null);break;case"focusout":Ir=Jc=Cs=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,ip(mt,a,ht);break;case"selectionchange":if(Gv)break;case"keydown":case"keyup":ip(mt,a,ht)}var ce;if(Yc)t:{switch(t){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Rs?Xd(t,a)&&(xe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(Gd&&a.locale!=="ko"&&(Rs||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Rs&&(ce=Pd()):(ra=ht,kc="value"in ra?ra.value:ra.textContent,Rs=!0)),jt=Ol($,xe),0<jt.length&&(xe=new Fd(xe,t,null,a,ht),mt.push({event:xe,listeners:jt}),ce?xe.data=ce:(ce=Wd(a),ce!==null&&(xe.data=ce)))),(ce=Uv?Nv(t,a):Lv(t,a))&&(xe=Ol($,"onBeforeInput"),0<xe.length&&(jt=new Fd("onBeforeInput","beforeinput",null,a,ht),mt.push({event:jt,listeners:xe}),jt.data=ce)),Tx(mt,t,$,a,ht)}wg(mt,n)})}function co(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ol(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Dr(t,a),c!=null&&r.unshift(co(t,c,f)),c=Dr(t,n),c!=null&&r.push(co(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Cx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ug(t,n,a,r,c){for(var f=n._reactName,g=[];a!==null&&a!==r;){var T=a,P=T.alternate,$=T.stateNode;if(T=T.tag,P!==null&&P===r)break;T!==5&&T!==26&&T!==27||$===null||(P=$,c?($=Dr(a,f),$!=null&&g.unshift(co(a,$,P))):c||($=Dr(a,f),$!=null&&g.push(co(a,$,P)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var wx=/\r\n?/g,Dx=/\u0000|\uFFFD/g;function Ng(t){return(typeof t=="string"?t:""+t).replace(wx,`
`).replace(Dx,"")}function Lg(t,n){return n=Ng(n),Ng(t)===n}function Be(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ts(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ts(t,""+r);break;case"className":Ne(t,"class",r);break;case"tabIndex":Ne(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ne(t,a,r);break;case"style":Ld(t,r,f);break;case"data":if(n!=="object"){Ne(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Ho(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(t,n,"name",c.name,c,null),Be(t,n,"formEncType",c.formEncType,c,null),Be(t,n,"formMethod",c.formMethod,c,null),Be(t,n,"formTarget",c.formTarget,c,null)):(Be(t,n,"encType",c.encType,c,null),Be(t,n,"method",c.method,c,null),Be(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Ho(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Ui);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Ho(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":ge("beforetoggle",t),ge("toggle",t),Ve(t,"popover",r);break;case"xlinkActuate":pe(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":pe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":pe(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":pe(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":pe(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":pe(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":pe(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":pe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":pe(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ve(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=av.get(a)||a,Ve(t,a,r))}}function bf(t,n,a,r,c,f){switch(a){case"style":Ld(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Ts(t,r):(typeof r=="number"||typeof r=="bigint")&&Ts(t,""+r);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Ui);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):Ve(t,a,r)}}}function Mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,f,g,a,null)}}c&&Be(t,n,"srcSet",a.srcSet,a,null),r&&Be(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var T=f=g=c=null,P=null,$=null;for(r in a)if(a.hasOwnProperty(r)){var ht=a[r];if(ht!=null)switch(r){case"name":c=ht;break;case"type":g=ht;break;case"checked":P=ht;break;case"defaultChecked":$=ht;break;case"value":f=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Be(t,n,r,ht,a,null)}}wn(t,f,T,P,$,g,c,!1);return;case"select":ge("invalid",t),r=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":g=T;break;case"multiple":r=T;default:Be(t,n,c,T,a,null)}n=f,a=g,t.multiple=!!r,n!=null?$e(t,!!r,n,!1):a!=null&&$e(t,!!r,a,!0);return;case"textarea":ge("invalid",t),f=c=r=null;for(g in a)if(a.hasOwnProperty(g)&&(T=a[g],T!=null))switch(g){case"value":r=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Be(t,n,g,T,a,null)}yi(t,r,c,f);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(r=a[P],r!=null))switch(P){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Be(t,n,P,r,a,null)}return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(r=0;r<lo.length;r++)ge(lo[r],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(r=a[$],r!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,$,r,a,null)}return;default:if(Ic(n)){for(ht in a)a.hasOwnProperty(ht)&&(r=a[ht],r!==void 0&&bf(t,n,ht,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Be(t,n,T,r,a,null))}function Ux(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,T=null,P=null,$=null,ht=null;for(ot in a){var mt=a[ot];if(a.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":P=mt;default:r.hasOwnProperty(ot)||Be(t,n,ot,null,r,mt)}}for(var nt in r){var ot=r[nt];if(mt=a[nt],r.hasOwnProperty(nt)&&(ot!=null||mt!=null))switch(nt){case"type":f=ot;break;case"name":c=ot;break;case"checked":$=ot;break;case"defaultChecked":ht=ot;break;case"value":g=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==mt&&Be(t,n,nt,ot,r,mt)}}En(t,g,T,P,$,ht,f,c);return;case"select":ot=g=T=nt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":ot=P;default:r.hasOwnProperty(f)||Be(t,n,f,null,r,P)}for(c in r)if(f=r[c],P=a[c],r.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":nt=f;break;case"defaultValue":T=f;break;case"multiple":g=f;default:f!==P&&Be(t,n,c,f,r,P)}n=T,a=g,r=ot,nt!=null?$e(t,!!a,nt,!1):!!r!=!!a&&(n!=null?$e(t,!!a,n,!0):$e(t,!!a,a?[]:"",!1));return;case"textarea":ot=nt=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Be(t,n,T,null,r,c)}for(g in r)if(c=r[g],f=a[g],r.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":nt=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Be(t,n,g,c,r,f)}Es(t,nt,ot);return;case"option":for(var Ht in a)if(nt=a[Ht],a.hasOwnProperty(Ht)&&nt!=null&&!r.hasOwnProperty(Ht))switch(Ht){case"selected":t.selected=!1;break;default:Be(t,n,Ht,null,r,nt)}for(P in r)if(nt=r[P],ot=a[P],r.hasOwnProperty(P)&&nt!==ot&&(nt!=null||ot!=null))switch(P){case"selected":t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Be(t,n,P,nt,r,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)nt=a[ee],a.hasOwnProperty(ee)&&nt!=null&&!r.hasOwnProperty(ee)&&Be(t,n,ee,null,r,nt);for($ in r)if(nt=r[$],ot=a[$],r.hasOwnProperty($)&&nt!==ot&&(nt!=null||ot!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Be(t,n,$,nt,r,ot)}return;default:if(Ic(n)){for(var Ie in a)nt=a[Ie],a.hasOwnProperty(Ie)&&nt!==void 0&&!r.hasOwnProperty(Ie)&&bf(t,n,Ie,void 0,r,nt);for(ht in r)nt=r[ht],ot=a[ht],!r.hasOwnProperty(ht)||nt===ot||nt===void 0&&ot===void 0||bf(t,n,ht,nt,r,ot);return}}for(var j in a)nt=a[j],a.hasOwnProperty(j)&&nt!=null&&!r.hasOwnProperty(j)&&Be(t,n,j,null,r,nt);for(mt in r)nt=r[mt],ot=a[mt],!r.hasOwnProperty(mt)||nt===ot||nt==null&&ot==null||Be(t,n,mt,nt,r,ot)}function Og(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,g=c.initiatorType,T=c.duration;if(f&&T&&Og(g)){for(g=0,T=c.responseEnd,r+=1;r<a.length;r++){var P=a[r],$=P.startTime;if($>T)break;var ht=P.transferSize,mt=P.initiatorType;ht&&Og(mt)&&(P=P.responseEnd,g+=ht*(P<T?1:(T-$)/(P-$)))}if(--r,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Af=null,Rf=null;function zl(t){return t.nodeType===9?t:t.ownerDocument}function zg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Cf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wf=null;function Lx(){var t=window.event;return t&&t.type==="popstate"?t===wf?!1:(wf=t,!0):(wf=null,!1)}var Bg=typeof setTimeout=="function"?setTimeout:void 0,Ox=typeof clearTimeout=="function"?clearTimeout:void 0,Ig=typeof Promise=="function"?Promise:void 0,zx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ig<"u"?function(t){return Ig.resolve(null).then(t).catch(Px)}:Bg;function Px(t){setTimeout(function(){throw t})}function Ea(t){return t==="head"}function Fg(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),er(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")uo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,uo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,T=f.nodeName;f[Va]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&uo(t.ownerDocument.body);a=c}while(a);er(n)}function Hg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Df(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Df(a),A(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Bx(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Va])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=si(t.nextSibling),t===null)break}return null}function Ix(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=si(t.nextSibling),t===null))return null;return t}function Gg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=si(t.nextSibling),t===null))return null;return t}function Uf(t){return t.data==="$?"||t.data==="$~"}function Nf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Fx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Lf=null;function Vg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return si(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function kg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Xg(t,n,a){switch(n=zl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function uo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);A(t)}var ri=new Map,Wg=new Set;function Pl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var qi=Z.d;Z.d={f:Hx,r:Gx,D:Vx,C:kx,L:Xx,m:Wx,X:qx,S:jx,M:Yx};function Hx(){var t=qi.f(),n=Rl();return t||n}function Gx(t){var n=st(t);n!==null&&n.tag===5&&n.type==="form"?lm(n):qi.r(t)}var Js=typeof document>"u"?null:document;function jg(t,n,a){var r=Js;if(r&&typeof n=="string"&&n){var c=_e(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Wg.has(c)||(Wg.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Mn(n,"link",t),vt(n),r.head.appendChild(n)))}}function Vx(t){qi.D(t),jg("dns-prefetch",t,null)}function kx(t,n){qi.C(t,n),jg("preconnect",t,n)}function Xx(t,n,a){qi.L(t,n,a);var r=Js;if(r&&t&&n){var c='link[rel="preload"][as="'+_e(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+_e(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+_e(a.imageSizes)+'"]')):c+='[href="'+_e(t)+'"]';var f=c;switch(n){case"style":f=$s(t);break;case"script":f=tr(t)}ri.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ri.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(fo(f))||n==="script"&&r.querySelector(ho(f))||(n=r.createElement("link"),Mn(n,"link",t),vt(n),r.head.appendChild(n)))}}function Wx(t,n){qi.m(t,n);var a=Js;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+_e(r)+'"][href="'+_e(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=tr(t)}if(!ri.has(f)&&(t=v({rel:"modulepreload",href:t},n),ri.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ho(f)))return}r=a.createElement("link"),Mn(r,"link",t),vt(r),a.head.appendChild(r)}}}function jx(t,n,a){qi.S(t,n,a);var r=Js;if(r&&t){var c=q(r).hoistableStyles,f=$s(t);n=n||"default";var g=c.get(f);if(!g){var T={loading:0,preload:null};if(g=r.querySelector(fo(f)))T.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ri.get(f))&&Of(t,a);var P=g=r.createElement("link");vt(P),Mn(P,"link",t),P._p=new Promise(function($,ht){P.onload=$,P.onerror=ht}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Bl(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:T},c.set(f,g)}}}function qx(t,n){qi.X(t,n);var a=Js;if(a&&t){var r=q(a).hoistableScripts,c=tr(t),f=r.get(c);f||(f=a.querySelector(ho(c)),f||(t=v({src:t,async:!0},n),(n=ri.get(c))&&zf(t,n),f=a.createElement("script"),vt(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Yx(t,n){qi.M(t,n);var a=Js;if(a&&t){var r=q(a).hoistableScripts,c=tr(t),f=r.get(c);f||(f=a.querySelector(ho(c)),f||(t=v({src:t,async:!0,type:"module"},n),(n=ri.get(c))&&zf(t,n),f=a.createElement("script"),vt(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function qg(t,n,a,r){var c=(c=at.current)?Pl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$s(a.href),a=q(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$s(a.href);var f=q(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(fo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ri.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(t,a),f||Zx(c,t,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=tr(a),a=q(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function $s(t){return'href="'+_e(t)+'"'}function fo(t){return'link[rel="stylesheet"]['+t+"]"}function Yg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Zx(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Mn(n,"link",a),vt(n),t.head.appendChild(n))}function tr(t){return'[src="'+_e(t)+'"]'}function ho(t){return"script[async]"+t}function Zg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+_e(a.href)+'"]');if(r)return n.instance=r,vt(r),r;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),vt(r),Mn(r,"style",c),Bl(r,a.precedence,t),n.instance=r;case"stylesheet":c=$s(a.href);var f=t.querySelector(fo(c));if(f)return n.state.loading|=4,n.instance=f,vt(f),f;r=Yg(a),(c=ri.get(c))&&Of(r,c),f=(t.ownerDocument||t).createElement("link"),vt(f);var g=f;return g._p=new Promise(function(T,P){g.onload=T,g.onerror=P}),Mn(f,"link",r),n.state.loading|=4,Bl(f,a.precedence,t),n.instance=f;case"script":return f=tr(a.src),(c=t.querySelector(ho(f)))?(n.instance=c,vt(c),c):(r=a,(c=ri.get(f))&&(r=v({},a),zf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),vt(c),Mn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Bl(r,a.precedence,t));return n.instance}function Bl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,g=0;g<r.length;g++){var T=r[g];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Of(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Il=null;function Kg(t,n,a){if(Il===null){var r=new Map,c=Il=new Map;c.set(a,r)}else c=Il,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Va]||f[an]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var T=r.get(g);T?T.push(f):r.set(g,[f])}}return r}function Qg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Kx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Jg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Qx(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=$s(r.href),f=n.querySelector(fo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Fl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,vt(f);return}f=n.ownerDocument||n,r=Yg(r),(c=ri.get(c))&&Of(r,c),f=f.createElement("link"),vt(f);var g=f;g._p=new Promise(function(T,P){g.onload=T,g.onerror=P}),Mn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Fl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Pf=0;function Jx(t,n){return t.stylesheets&&t.count===0&&Gl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Gl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Pf===0&&(Pf=62500*Nx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Gl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Pf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Fl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Hl=null;function Gl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hl=new Map,n.forEach($x,t),Hl=null,Fl.call(t))}function $x(t,n){if(!(n.state.loading&4)){var a=Hl.get(t);if(a)var r=a.get(null);else{a=new Map,Hl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,c),a.set(g,c),this.count++,r=Fl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var po={$$typeof:z,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function tS(t,n,a,r,c,f,g,T,P){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Me(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Me(0),this.hiddenUpdates=Me(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.incompleteTransitions=new Map}function $g(t,n,a,r,c,f,g,T,P,$,ht,mt){return t=new tS(t,n,a,g,P,$,ht,mt,T),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),t.current=f,f.stateNode=t,n=pu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},vu(f),t}function t0(t){return t?(t=Us,t):Us}function e0(t,n,a,r,c,f){c=t0(c),r.context===null?r.context=c:r.pendingContext=c,r=ha(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=da(t,r,n),a!==null&&(Bn(a,t,n),Wr(a,t,n))}function n0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Bf(t,n){n0(t,n),(t=t.alternate)&&n0(t,n)}function i0(t){if(t.tag===13||t.tag===31){var n=qa(t,67108864);n!==null&&Bn(n,t,67108864),Bf(t,67108864)}}function a0(t){if(t.tag===13||t.tag===31){var n=Yn();n=ys(n);var a=qa(t,n);a!==null&&Bn(a,t,n),Bf(t,n)}}var Vl=!0;function eS(t,n,a,r){var c=O.T;O.T=null;var f=Z.p;try{Z.p=2,If(t,n,a,r)}finally{Z.p=f,O.T=c}}function nS(t,n,a,r){var c=O.T;O.T=null;var f=Z.p;try{Z.p=8,If(t,n,a,r)}finally{Z.p=f,O.T=c}}function If(t,n,a,r){if(Vl){var c=Ff(r);if(c===null)Tf(t,n,r,kl,a),r0(t,r);else if(aS(c,t,n,a,r))r.stopPropagation();else if(r0(t,r),n&4&&-1<iS.indexOf(t)){for(;c!==null;){var f=st(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Mt(f.pendingLanes);if(g!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var P=1<<31-Pt(g);T.entanglements[1]|=P,g&=~P}bi(f),(we&6)===0&&(bl=E()+500,oo(0))}}break;case 31:case 13:T=qa(f,2),T!==null&&Bn(T,f,2),Rl(),Bf(f,2)}if(f=Ff(r),f===null&&Tf(t,n,r,kl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Tf(t,n,r,null,a)}}function Ff(t){return t=Hc(t),Hf(t)}var kl=null;function Hf(t){if(kl=null,t=W(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return kl=t,null}function s0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tt()){case dt:return 2;case St:return 8;case ut:case Zt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var Gf=!1,Ta=null,ba=null,Aa=null,mo=new Map,go=new Map,Ra=[],iS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function r0(t,n){switch(t){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(n.pointerId)}}function _o(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=st(n),n!==null&&i0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function aS(t,n,a,r,c){switch(n){case"focusin":return Ta=_o(Ta,t,n,a,r,c),!0;case"dragenter":return ba=_o(ba,t,n,a,r,c),!0;case"mouseover":return Aa=_o(Aa,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return mo.set(f,_o(mo.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,go.set(f,_o(go.get(f)||null,t,n,a,r,c)),!0}return!1}function o0(t){var n=W(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Cr(t.priority,function(){a0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Cr(t.priority,function(){a0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Ff(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Fc=r,a.target.dispatchEvent(r),Fc=null}else return n=st(a),n!==null&&i0(n),t.blockedOn=a,!1;n.shift()}return!0}function l0(t,n,a){Xl(t)&&a.delete(n)}function sS(){Gf=!1,Ta!==null&&Xl(Ta)&&(Ta=null),ba!==null&&Xl(ba)&&(ba=null),Aa!==null&&Xl(Aa)&&(Aa=null),mo.forEach(l0),go.forEach(l0)}function Wl(t,n){t.blockedOn===n&&(t.blockedOn=null,Gf||(Gf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,sS)))}var jl=null;function c0(t){jl!==t&&(jl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){jl===t&&(jl=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Hf(r||a)===null)continue;break}var f=st(a);f!==null&&(t.splice(n,3),n-=3,Iu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function er(t){function n(P){return Wl(P,t)}Ta!==null&&Wl(Ta,t),ba!==null&&Wl(ba,t),Aa!==null&&Wl(Aa,t),mo.forEach(n),go.forEach(n);for(var a=0;a<Ra.length;a++){var r=Ra[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)o0(a),a.blockedOn===null&&Ra.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],g=c[_n]||null;if(typeof f=="function")g||c0(a);else if(g){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[_n]||null)T=g.formAction;else if(Hf(c)!==null)continue}else T=g.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),c0(a)}}}function u0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Vf(t){this._internalRoot=t}ql.prototype.render=Vf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Yn();e0(a,r,t,n,null,null)},ql.prototype.unmount=Vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;e0(t.current,2,null,t,null,null),Rl(),n[sa]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ga();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ra.length&&n!==0&&n<Ra[a].priority;a++);Ra.splice(a,0,t),a===0&&o0(t)}};var f0=e.version;if(f0!=="19.2.0")throw Error(s(527,f0,"19.2.0"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var rS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{Tt=Yl.inject(rS),Ct=Yl}catch{}}return xo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=vm,f=xm,g=Sm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=$g(t,1,!1,null,null,a,r,null,c,f,g,u0),t[sa]=n.current,Ef(t),new Vf(n)},xo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=vm,g=xm,T=Sm,P=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=$g(t,1,!0,n,a??null,r,c,P,f,g,T,u0),n.context=t0(null),a=n.current,r=Yn(),r=ys(r),c=ha(r),c.callback=null,da(a,c,r),a=r,n.current.lanes=a,Cn(n,a),bi(n),t[sa]=n.current,Ef(t),new ql(n)},xo.version="19.2.0",xo}var y0;function _S(){if(y0)return Wf.exports;y0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Wf.exports=gS(),Wf.exports}var vS=_S();const xS=T_(vS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sd="180",SS=0,M0=1,yS=2,b_=1,MS=2,$i=3,Fa=0,Fn=1,ta=2,Pa=0,_r=1,Rc=2,E0=3,T0=4,ES=5,ps=100,TS=101,bS=102,AS=103,RS=104,CS=200,wS=201,DS=202,US=203,wh=204,Dh=205,NS=206,LS=207,OS=208,zS=209,PS=210,BS=211,IS=212,FS=213,HS=214,Uh=0,Nh=1,Lh=2,xr=3,Oh=4,zh=5,Ph=6,Bh=7,A_=0,GS=1,VS=2,Ba=0,kS=1,XS=2,WS=3,jS=4,qS=5,YS=6,ZS=7,R_=300,Sr=301,yr=302,Ih=303,Fh=304,Lc=306,Hh=1e3,gs=1001,Gh=1002,vi=1003,KS=1004,Zl=1005,Ri=1006,Zf=1007,_s=1008,wi=1009,C_=1010,w_=1011,Co=1012,yd=1013,vs=1014,ea=1015,Lo=1016,Md=1017,Ed=1018,wo=1020,D_=35902,U_=35899,N_=1021,L_=1022,_i=1023,Do=1026,Uo=1027,O_=1028,Td=1029,z_=1030,bd=1031,Ad=1033,Mc=33776,Ec=33777,Tc=33778,bc=33779,Vh=35840,kh=35841,Xh=35842,Wh=35843,jh=36196,qh=37492,Yh=37496,Zh=37808,Kh=37809,Qh=37810,Jh=37811,$h=37812,td=37813,ed=37814,nd=37815,id=37816,ad=37817,sd=37818,rd=37819,od=37820,ld=37821,cd=36492,ud=36494,fd=36495,hd=36283,dd=36284,pd=36285,md=36286,QS=3200,JS=3201,$S=0,ty=1,za="",li="srgb",Mr="srgb-linear",Cc="linear",Fe="srgb",nr=7680,b0=519,ey=512,ny=513,iy=514,P_=515,ay=516,sy=517,ry=518,oy=519,A0=35044,R0="300 es",Ci=2e3,wc=2001;class Tr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kf=Math.PI/180,gd=180/Math.PI;function Oo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(bn[o&255]+bn[o>>8&255]+bn[o>>16&255]+bn[o>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[i&63|128]+bn[i>>8&255]+"-"+bn[i>>16&255]+bn[i>>24&255]+bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]).toLowerCase()}function ye(o,e,i){return Math.max(e,Math.min(i,o))}function ly(o,e){return(o%e+e)%e}function Qf(o,e,i){return(1-i)*o+i*e}function So(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function In(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class De{constructor(e=0,i=0){De.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ye(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],x=s[l+2],v=s[l+3];const S=u[h+0],M=u[h+1],b=u[h+2],R=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=v;return}if(d===1){e[i+0]=S,e[i+1]=M,e[i+2]=b,e[i+3]=R;return}if(v!==R||m!==S||p!==M||x!==b){let y=1-d;const _=m*S+p*M+x*b+v*R,F=_>=0?1:-1,z=1-_*_;if(z>Number.EPSILON){const k=Math.sqrt(z),G=Math.atan2(k,_*F);y=Math.sin(y*G)/k,d=Math.sin(d*G)/k}const D=d*F;if(m=m*y+S*D,p=p*y+M*D,x=x*y+b*D,v=v*y+R*D,y===1-d){const k=1/Math.sqrt(m*m+p*p+x*x+v*v);m*=k,p*=k,x*=k,v*=k}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],x=s[l+3],v=u[h],S=u[h+1],M=u[h+2],b=u[h+3];return e[i]=d*b+x*v+m*M-p*S,e[i+1]=m*b+x*S+p*v-d*M,e[i+2]=p*b+x*M+d*S-m*v,e[i+3]=x*b-d*v-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),x=d(l/2),v=d(u/2),S=m(s/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=S*x*v+p*M*b,this._y=p*M*v-S*x*b,this._z=p*x*b+S*M*v,this._w=p*x*v-S*M*b;break;case"YXZ":this._x=S*x*v+p*M*b,this._y=p*M*v-S*x*b,this._z=p*x*b-S*M*v,this._w=p*x*v+S*M*b;break;case"ZXY":this._x=S*x*v-p*M*b,this._y=p*M*v+S*x*b,this._z=p*x*b+S*M*v,this._w=p*x*v-S*M*b;break;case"ZYX":this._x=S*x*v-p*M*b,this._y=p*M*v+S*x*b,this._z=p*x*b-S*M*v,this._w=p*x*v+S*M*b;break;case"YZX":this._x=S*x*v+p*M*b,this._y=p*M*v+S*x*b,this._z=p*x*b-S*M*v,this._w=p*x*v-S*M*b;break;case"XZY":this._x=S*x*v-p*M*b,this._y=p*M*v-S*x*b,this._z=p*x*b+S*M*v,this._w=p*x*v+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],x=i[6],v=i[10],S=s+d+v;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(x-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(x-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ye(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+h*d+l*p-u*m,this._y=l*x+h*m+u*d-s*p,this._z=u*x+h*p+s*m-l*d,this._w=h*x-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),x=Math.atan2(p,d),v=Math.sin((1-i)*x)/p,S=Math.sin(i*x)/p;return this._w=h*v+this._w*S,this._x=s*v+this._x*S,this._y=l*v+this._y*S,this._z=u*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,i=0,s=0){Q.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(C0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(C0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),x=2*(d*i-u*l),v=2*(u*s-h*i);return this.x=i+m*p+h*v-d*x,this.y=s+m*x+d*p-u*v,this.z=l+m*v+u*x-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Jf.copy(this).projectOnVector(e),this.sub(Jf)}reflect(e){return this.sub(Jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ye(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jf=new Q,C0=new zo;class ue{constructor(e,i,s,l,u,h,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p)}set(e,i,s,l,u,h,d,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=d,x[3]=i,x[4]=u,x[5]=m,x[6]=s,x[7]=h,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],x=s[4],v=s[7],S=s[2],M=s[5],b=s[8],R=l[0],y=l[3],_=l[6],F=l[1],z=l[4],D=l[7],k=l[2],G=l[5],B=l[8];return u[0]=h*R+d*F+m*k,u[3]=h*y+d*z+m*G,u[6]=h*_+d*D+m*B,u[1]=p*R+x*F+v*k,u[4]=p*y+x*z+v*G,u[7]=p*_+x*D+v*B,u[2]=S*R+M*F+b*k,u[5]=S*y+M*z+b*G,u[8]=S*_+M*D+b*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8];return i*h*x-i*d*p-s*u*x+s*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8],v=x*h-d*p,S=d*m-x*u,M=p*u-h*m,b=i*v+s*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=v*R,e[1]=(l*p-x*s)*R,e[2]=(d*s-l*h)*R,e[3]=S*R,e[4]=(x*i-l*m)*R,e[5]=(l*u-d*i)*R,e[6]=M*R,e[7]=(s*m-p*i)*R,e[8]=(h*i-s*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply($f.makeScale(e,i)),this}rotate(e){return this.premultiply($f.makeRotation(-e)),this}translate(e,i){return this.premultiply($f.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $f=new ue;function B_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Dc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function cy(){const o=Dc("canvas");return o.style.display="block",o}const w0={};function No(o){o in w0||(w0[o]=!0,console.warn(o))}function uy(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const D0=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),U0=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fy(){const o={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Fe&&(l.r=ia(l.r),l.g=ia(l.g),l.b=ia(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=vr(l.r),l.g=vr(l.g),l.b=vr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===za?Cc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return No("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return No("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Mr]:{primaries:e,whitePoint:s,transfer:Cc,toXYZ:D0,fromXYZ:U0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:s,transfer:Fe,toXYZ:D0,fromXYZ:U0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),o}const Ce=fy();function ia(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function vr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ir;class hy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ir===void 0&&(ir=Dc("canvas")),ir.width=e.width,ir.height=e.height;const l=ir.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=ir}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Dc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ia(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ia(i[s]/255)*255):i[s]=ia(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dy=0;class Rd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Oo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(th(l[h].image)):u.push(th(l[h]))}else u=th(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function th(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?hy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let py=0;const eh=new Q;class Hn extends Tr{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=gs,l=gs,u=Ri,h=_s,d=_i,m=wi,p=Hn.DEFAULT_ANISOTROPY,x=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Oo(),this.name="",this.source=new Rd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(eh).x}get height(){return this.source.getSize(eh).y}get depth(){return this.source.getSize(eh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==R_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hh:e.x=e.x-Math.floor(e.x);break;case gs:e.x=e.x<0?0:1;break;case Gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hh:e.y=e.y-Math.floor(e.y);break;case gs:e.y=e.y<0?0:1;break;case Gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=R_;Hn.DEFAULT_ANISOTROPY=1;class He{constructor(e=0,i=0,s=0,l=1){He.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],x=m[4],v=m[8],S=m[1],M=m[5],b=m[9],R=m[2],y=m[6],_=m[10];if(Math.abs(x-S)<.01&&Math.abs(v-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(v+R)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(p+1)/2,D=(M+1)/2,k=(_+1)/2,G=(x+S)/4,B=(v+R)/4,K=(b+y)/4;return z>D&&z>k?z<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(z),l=G/s,u=B/s):D>k?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=G/l,u=K/l):k<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),s=B/u,l=K/u),this.set(s,l,u,i),this}let F=Math.sqrt((y-b)*(y-b)+(v-R)*(v-R)+(S-x)*(S-x));return Math.abs(F)<.001&&(F=1),this.x=(y-b)/F,this.y=(v-R)/F,this.z=(S-x)/F,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this.w=ye(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this.w=ye(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class my extends Tr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new He(0,0,e,i),this.scissorTest=!1,this.viewport=new He(0,0,e,i);const l={width:e,height:i,depth:s.depth},u=new Hn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Rd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xs extends my{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class I_ extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gy extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(e=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,di):di.fromBufferAttribute(u,h),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Kl.copy(s.boundingBox)),Kl.applyMatrix4(e.matrixWorld),this.union(Kl)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yo),Ql.subVectors(this.max,yo),ar.subVectors(e.a,yo),sr.subVectors(e.b,yo),rr.subVectors(e.c,yo),wa.subVectors(sr,ar),Da.subVectors(rr,sr),rs.subVectors(ar,rr);let i=[0,-wa.z,wa.y,0,-Da.z,Da.y,0,-rs.z,rs.y,wa.z,0,-wa.x,Da.z,0,-Da.x,rs.z,0,-rs.x,-wa.y,wa.x,0,-Da.y,Da.x,0,-rs.y,rs.x,0];return!nh(i,ar,sr,rr,Ql)||(i=[1,0,0,0,1,0,0,0,1],!nh(i,ar,sr,rr,Ql))?!1:(Jl.crossVectors(wa,Da),i=[Jl.x,Jl.y,Jl.z],nh(i,ar,sr,rr,Ql))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],di=new Q,Kl=new Po,ar=new Q,sr=new Q,rr=new Q,wa=new Q,Da=new Q,rs=new Q,yo=new Q,Ql=new Q,Jl=new Q,os=new Q;function nh(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){os.fromArray(o,u);const d=l.x*Math.abs(os.x)+l.y*Math.abs(os.y)+l.z*Math.abs(os.z),m=e.dot(os),p=i.dot(os),x=s.dot(os);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const _y=new Po,Mo=new Q,ih=new Q;class Bo{constructor(e=new Q,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):_y.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);const i=Mo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Mo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add(ih)),this.expandByPoint(Mo.copy(e.center).sub(ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zi=new Q,ah=new Q,$l=new Q,Ua=new Q,sh=new Q,tc=new Q,rh=new Q;class Cd{constructor(e=new Q,i=new Q(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Zi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){ah.copy(e).add(i).multiplyScalar(.5),$l.copy(i).sub(e).normalize(),Ua.copy(this.origin).sub(ah);const u=e.distanceTo(i)*.5,h=-this.direction.dot($l),d=Ua.dot(this.direction),m=-Ua.dot($l),p=Ua.lengthSq(),x=Math.abs(1-h*h);let v,S,M,b;if(x>0)if(v=h*m-d,S=h*d-m,b=u*x,v>=0)if(S>=-b)if(S<=b){const R=1/x;v*=R,S*=R,M=v*(v+h*S+2*d)+S*(h*v+S+2*m)+p}else S=u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;else S=-u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;else S<=-b?(v=Math.max(0,-(-h*u+d)),S=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+S*(S+2*m)+p):S<=b?(v=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(v=Math.max(0,-(h*u+d)),S=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+S*(S+2*m)+p);else S=h>0?-u:u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(ah).addScaledVector($l,S),M}intersectSphere(e,i){Zi.subVectors(e.center,this.origin);const s=Zi.dot(this.direction),l=Zi.dot(Zi)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,m;const p=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),x>=0?(u=(e.min.y-S.y)*x,h=(e.max.y-S.y)*x):(u=(e.max.y-S.y)*x,h=(e.min.y-S.y)*x),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-S.z)*v,m=(e.max.z-S.z)*v):(d=(e.max.z-S.z)*v,m=(e.min.z-S.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,i,s,l,u){sh.subVectors(i,e),tc.subVectors(s,e),rh.crossVectors(sh,tc);let h=this.direction.dot(rh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ua.subVectors(this.origin,e);const m=d*this.direction.dot(tc.crossVectors(Ua,tc));if(m<0)return null;const p=d*this.direction.dot(sh.cross(Ua));if(p<0||m+p>h)return null;const x=-d*Ua.dot(rh);return x<0?null:this.at(x/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,i,s,l,u,h,d,m,p,x,v,S,M,b,R,y){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p,x,v,S,M,b,R,y)}set(e,i,s,l,u,h,d,m,p,x,v,S,M,b,R,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=x,_[10]=v,_[14]=S,_[3]=M,_[7]=b,_[11]=R,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/or.setFromMatrixColumn(e,0).length(),u=1/or.setFromMatrixColumn(e,1).length(),h=1/or.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const S=h*x,M=h*v,b=d*x,R=d*v;i[0]=m*x,i[4]=-m*v,i[8]=p,i[1]=M+b*p,i[5]=S-R*p,i[9]=-d*m,i[2]=R-S*p,i[6]=b+M*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*x,M=m*v,b=p*x,R=p*v;i[0]=S+R*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*x,i[9]=-d,i[2]=M*d-b,i[6]=R+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*x,M=m*v,b=p*x,R=p*v;i[0]=S-R*d,i[4]=-h*v,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*x,i[9]=R-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*x,M=h*v,b=d*x,R=d*v;i[0]=m*x,i[4]=b*p-M,i[8]=S*p+R,i[1]=m*v,i[5]=R*p+S,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*x,i[4]=R-S*v,i[8]=b*v+M,i[1]=v,i[5]=h*x,i[9]=-d*x,i[2]=-p*x,i[6]=M*v+b,i[10]=S-R*v}else if(e.order==="XZY"){const S=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*x,i[4]=-v,i[8]=p*x,i[1]=S*v+R,i[5]=h*x,i[9]=M*v-b,i[2]=b*v-M,i[6]=d*x,i[10]=R*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vy,e,xy)}lookAt(e,i,s){const l=this.elements;return Zn.subVectors(e,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Na.crossVectors(s,Zn),Na.lengthSq()===0&&(Math.abs(s.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Na.crossVectors(s,Zn)),Na.normalize(),ec.crossVectors(Zn,Na),l[0]=Na.x,l[4]=ec.x,l[8]=Zn.x,l[1]=Na.y,l[5]=ec.y,l[9]=Zn.y,l[2]=Na.z,l[6]=ec.z,l[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],x=s[1],v=s[5],S=s[9],M=s[13],b=s[2],R=s[6],y=s[10],_=s[14],F=s[3],z=s[7],D=s[11],k=s[15],G=l[0],B=l[4],K=l[8],w=l[12],C=l[1],H=l[5],et=l[9],lt=l[13],gt=l[2],ft=l[6],O=l[10],Z=l[14],Y=l[3],xt=l[7],Et=l[11],N=l[15];return u[0]=h*G+d*C+m*gt+p*Y,u[4]=h*B+d*H+m*ft+p*xt,u[8]=h*K+d*et+m*O+p*Et,u[12]=h*w+d*lt+m*Z+p*N,u[1]=x*G+v*C+S*gt+M*Y,u[5]=x*B+v*H+S*ft+M*xt,u[9]=x*K+v*et+S*O+M*Et,u[13]=x*w+v*lt+S*Z+M*N,u[2]=b*G+R*C+y*gt+_*Y,u[6]=b*B+R*H+y*ft+_*xt,u[10]=b*K+R*et+y*O+_*Et,u[14]=b*w+R*lt+y*Z+_*N,u[3]=F*G+z*C+D*gt+k*Y,u[7]=F*B+z*H+D*ft+k*xt,u[11]=F*K+z*et+D*O+k*Et,u[15]=F*w+z*lt+D*Z+k*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],x=e[2],v=e[6],S=e[10],M=e[14],b=e[3],R=e[7],y=e[11],_=e[15];return b*(+u*m*v-l*p*v-u*d*S+s*p*S+l*d*M-s*m*M)+R*(+i*m*M-i*p*S+u*h*S-l*h*M+l*p*x-u*m*x)+y*(+i*p*v-i*d*M-u*h*v+s*h*M+u*d*x-s*p*x)+_*(-l*d*x-i*m*v+i*d*S+l*h*v-s*h*S+s*m*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8],v=e[9],S=e[10],M=e[11],b=e[12],R=e[13],y=e[14],_=e[15],F=v*y*p-R*S*p+R*m*M-d*y*M-v*m*_+d*S*_,z=b*S*p-x*y*p-b*m*M+h*y*M+x*m*_-h*S*_,D=x*R*p-b*v*p+b*d*M-h*R*M-x*d*_+h*v*_,k=b*v*m-x*R*m-b*d*S+h*R*S+x*d*y-h*v*y,G=i*F+s*z+l*D+u*k;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/G;return e[0]=F*B,e[1]=(R*S*u-v*y*u-R*l*M+s*y*M+v*l*_-s*S*_)*B,e[2]=(d*y*u-R*m*u+R*l*p-s*y*p-d*l*_+s*m*_)*B,e[3]=(v*m*u-d*S*u-v*l*p+s*S*p+d*l*M-s*m*M)*B,e[4]=z*B,e[5]=(x*y*u-b*S*u+b*l*M-i*y*M-x*l*_+i*S*_)*B,e[6]=(b*m*u-h*y*u-b*l*p+i*y*p+h*l*_-i*m*_)*B,e[7]=(h*S*u-x*m*u+x*l*p-i*S*p-h*l*M+i*m*M)*B,e[8]=D*B,e[9]=(b*v*u-x*R*u-b*s*M+i*R*M+x*s*_-i*v*_)*B,e[10]=(h*R*u-b*d*u+b*s*p-i*R*p-h*s*_+i*d*_)*B,e[11]=(x*d*u-h*v*u-x*s*p+i*v*p+h*s*M-i*d*M)*B,e[12]=k*B,e[13]=(x*R*l-b*v*l+b*s*S-i*R*S-x*s*y+i*v*y)*B,e[14]=(b*d*l-h*R*l-b*s*m+i*R*m+h*s*y-i*d*y)*B,e[15]=(h*v*l-x*d*l+x*s*m-i*v*m-h*s*S+i*d*S)*B,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,m=e.z,p=u*h,x=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,x*d+s,x*m-l*h,0,p*m-l*d,x*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,x=h+h,v=d+d,S=u*p,M=u*x,b=u*v,R=h*x,y=h*v,_=d*v,F=m*p,z=m*x,D=m*v,k=s.x,G=s.y,B=s.z;return l[0]=(1-(R+_))*k,l[1]=(M+D)*k,l[2]=(b-z)*k,l[3]=0,l[4]=(M-D)*G,l[5]=(1-(S+_))*G,l[6]=(y+F)*G,l[7]=0,l[8]=(b+z)*B,l[9]=(y-F)*B,l[10]=(1-(S+R))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=or.set(l[0],l[1],l[2]).length();const h=or.set(l[4],l[5],l[6]).length(),d=or.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],pi.copy(this);const p=1/u,x=1/h,v=1/d;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=x,pi.elements[5]*=x,pi.elements[6]*=x,pi.elements[8]*=v,pi.elements[9]*=v,pi.elements[10]*=v,i.setFromRotationMatrix(pi),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=Ci,m=!1){const p=this.elements,x=2*u/(i-e),v=2*u/(s-l),S=(i+e)/(i-e),M=(s+l)/(s-l);let b,R;if(m)b=u/(h-u),R=h*u/(h-u);else if(d===Ci)b=-(h+u)/(h-u),R=-2*h*u/(h-u);else if(d===wc)b=-h/(h-u),R=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=Ci,m=!1){const p=this.elements,x=2/(i-e),v=2/(s-l),S=-(i+e)/(i-e),M=-(s+l)/(s-l);let b,R;if(m)b=1/(h-u),R=h/(h-u);else if(d===Ci)b=-2/(h-u),R=-(h+u)/(h-u);else if(d===wc)b=-1/(h-u),R=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const or=new Q,pi=new Ye,vy=new Q(0,0,0),xy=new Q(1,1,1),Na=new Q,ec=new Q,Zn=new Q,N0=new Ye,L0=new zo;class aa{constructor(e=0,i=0,s=0,l=aa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],x=l[9],v=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(ye(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ye(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return N0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(N0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return L0.setFromEuler(this),this.setFromQuaternion(L0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}aa.DEFAULT_ORDER="XYZ";class F_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sy=0;const O0=new Q,lr=new zo,Ki=new Ye,nc=new Q,Eo=new Q,yy=new Q,My=new zo,z0=new Q(1,0,0),P0=new Q(0,1,0),B0=new Q(0,0,1),I0={type:"added"},Ey={type:"removed"},cr={type:"childadded",child:null},oh={type:"childremoved",child:null};class Rn extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new Q,i=new aa,s=new zo,l=new Q(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new ue}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new F_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return lr.setFromAxisAngle(e,i),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,i){return lr.setFromAxisAngle(e,i),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(z0,e)}rotateY(e){return this.rotateOnAxis(P0,e)}rotateZ(e){return this.rotateOnAxis(B0,e)}translateOnAxis(e,i){return O0.copy(e).applyQuaternion(this.quaternion),this.position.add(O0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(z0,e)}translateY(e){return this.translateOnAxis(P0,e)}translateZ(e){return this.translateOnAxis(B0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?nc.copy(e):nc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Eo,nc,this.up):Ki.lookAt(nc,Eo,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),lr.setFromRotationMatrix(Ki),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(I0),cr.child=e,this.dispatchEvent(cr),cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Ey),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(I0),cr.child=e,this.dispatchEvent(cr),cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,yy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,My,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),x=h(e.images),v=h(e.shapes),S=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),v.length>0&&(s.shapes=v),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Rn.DEFAULT_UP=new Q(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new Q,Qi=new Q,lh=new Q,Ji=new Q,ur=new Q,fr=new Q,F0=new Q,ch=new Q,uh=new Q,fh=new Q,hh=new He,dh=new He,ph=new He;class gi{constructor(e=new Q,i=new Q,s=new Q){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),mi.subVectors(e,i),l.cross(mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){mi.subVectors(l,i),Qi.subVectors(s,i),lh.subVectors(e,i);const h=mi.dot(mi),d=mi.dot(Qi),m=mi.dot(lh),p=Qi.dot(Qi),x=Qi.dot(lh),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const S=1/v,M=(p*m-d*x)*S,b=(h*x-d*m)*S;return u.set(1-M-b,b,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,i,s,l,u,h,d,m){return this.getBarycoord(e,i,s,l,Ji)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ji.x),m.addScaledVector(h,Ji.y),m.addScaledVector(d,Ji.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return hh.setScalar(0),dh.setScalar(0),ph.setScalar(0),hh.fromBufferAttribute(e,i),dh.fromBufferAttribute(e,s),ph.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(hh,u.x),h.addScaledVector(dh,u.y),h.addScaledVector(ph,u.z),h}static isFrontFacing(e,i,s,l){return mi.subVectors(s,i),Qi.subVectors(e,i),mi.cross(Qi).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),mi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return gi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return gi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;ur.subVectors(l,s),fr.subVectors(u,s),ch.subVectors(e,s);const m=ur.dot(ch),p=fr.dot(ch);if(m<=0&&p<=0)return i.copy(s);uh.subVectors(e,l);const x=ur.dot(uh),v=fr.dot(uh);if(x>=0&&v<=x)return i.copy(l);const S=m*v-x*p;if(S<=0&&m>=0&&x<=0)return h=m/(m-x),i.copy(s).addScaledVector(ur,h);fh.subVectors(e,u);const M=ur.dot(fh),b=fr.dot(fh);if(b>=0&&M<=b)return i.copy(u);const R=M*p-m*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(fr,d);const y=x*b-M*v;if(y<=0&&v-x>=0&&M-b>=0)return F0.subVectors(u,l),d=(v-x)/(v-x+(M-b)),i.copy(l).addScaledVector(F0,d);const _=1/(y+R+S);return h=R*_,d=S*_,i.copy(s).addScaledVector(ur,h).addScaledVector(fr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const H_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},La={h:0,s:0,l:0},ic={h:0,s:0,l:0};function mh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Te{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ce.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ce.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ce.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ce.workingColorSpace){if(e=ly(e,1),i=ye(i,0,1),s=ye(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=mh(h,u,e+1/3),this.g=mh(h,u,e),this.b=mh(h,u,e-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(e,i=li){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=li){const s=H_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return Ce.workingToColorSpace(An.copy(this),e),Math.round(ye(An.r*255,0,255))*65536+Math.round(ye(An.g*255,0,255))*256+Math.round(ye(An.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ce.workingColorSpace){Ce.workingToColorSpace(An.copy(this),i);const s=An.r,l=An.g,u=An.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const x=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=x<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Ce.workingColorSpace){return Ce.workingToColorSpace(An.copy(this),i),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=li){Ce.workingToColorSpace(An.copy(this),e);const i=An.r,s=An.g,l=An.b;return e!==li?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(La),this.setHSL(La.h+e,La.s+i,La.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(La),e.getHSL(ic);const s=Qf(La.h,ic.h,i),l=Qf(La.s,ic.s,i),u=Qf(La.l,ic.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new Te;Te.NAMES=H_;let Ty=0;class br extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=_r,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wh,this.blendDst=Dh,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(s.blending=this.blending),this.side!==Fa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==wh&&(s.blendSrc=this.blendSrc),this.blendDst!==Dh&&(s.blendDst=this.blendDst),this.blendEquation!==ps&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==b0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class G_ extends br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new aa,this.combine=A_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new Q,ac=new De;let by=0;class ci{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:by++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=A0,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)ac.fromBufferAttribute(this,i),ac.applyMatrix3(e),this.setXY(i,ac.x,ac.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=So(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=In(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=So(i,this.array)),i}setX(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=So(i,this.array)),i}setY(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=So(i,this.array)),i}setZ(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=So(i,this.array)),i}setW(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array),u=In(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==A0&&(e.usage=this.usage),e}}class V_ extends ci{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class k_ extends ci{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ia extends ci{constructor(e,i,s){super(new Float32Array(e),i,s)}}let Ay=0;const oi=new Ye,gh=new Rn,hr=new Q,Kn=new Po,To=new Po,gn=new Q;class xi extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(B_(e)?k_:V_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ue().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,i,s){return oi.makeTranslation(e,i,s),this.applyMatrix4(oi),this}scale(e,i,s){return oi.makeScale(e,i,s),this.applyMatrix4(oi),this}lookAt(e){return gh.lookAt(e),gh.updateMatrix(),this.applyMatrix4(gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ia(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];Kn.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const s=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];To.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(Kn.min,To.min),Kn.expandByPoint(gn),gn.addVectors(Kn.max,To.max),Kn.expandByPoint(gn)):(Kn.expandByPoint(To.min),Kn.expandByPoint(To.max))}Kn.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)gn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(gn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)gn.fromBufferAttribute(d,p),m&&(hr.fromBufferAttribute(e,p),gn.add(hr)),l=Math.max(l,s.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<s.count;K++)d[K]=new Q,m[K]=new Q;const p=new Q,x=new Q,v=new Q,S=new De,M=new De,b=new De,R=new Q,y=new Q;function _(K,w,C){p.fromBufferAttribute(s,K),x.fromBufferAttribute(s,w),v.fromBufferAttribute(s,C),S.fromBufferAttribute(u,K),M.fromBufferAttribute(u,w),b.fromBufferAttribute(u,C),x.sub(p),v.sub(p),M.sub(S),b.sub(S);const H=1/(M.x*b.y-b.x*M.y);isFinite(H)&&(R.copy(x).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(H),y.copy(v).multiplyScalar(M.x).addScaledVector(x,-b.x).multiplyScalar(H),d[K].add(R),d[w].add(R),d[C].add(R),m[K].add(y),m[w].add(y),m[C].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let K=0,w=F.length;K<w;++K){const C=F[K],H=C.start,et=C.count;for(let lt=H,gt=H+et;lt<gt;lt+=3)_(e.getX(lt+0),e.getX(lt+1),e.getX(lt+2))}const z=new Q,D=new Q,k=new Q,G=new Q;function B(K){k.fromBufferAttribute(l,K),G.copy(k);const w=d[K];z.copy(w),z.sub(k.multiplyScalar(k.dot(w))).normalize(),D.crossVectors(G,w);const H=D.dot(m[K])<0?-1:1;h.setXYZW(K,z.x,z.y,z.z,H)}for(let K=0,w=F.length;K<w;++K){const C=F[K],H=C.start,et=C.count;for(let lt=H,gt=H+et;lt<gt;lt+=3)B(e.getX(lt+0)),B(e.getX(lt+1)),B(e.getX(lt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ci(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new Q,u=new Q,h=new Q,d=new Q,m=new Q,p=new Q,x=new Q,v=new Q;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),R=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),x.subVectors(h,u),v.subVectors(l,u),x.cross(v),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,y),d.add(x),m.add(x),p.add(x),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),x.subVectors(h,u),v.subVectors(l,u),x.cross(v),s.setXYZ(S+0,x.x,x.y,x.z),s.setXYZ(S+1,x.x,x.y,x.z),s.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)gn.fromBufferAttribute(e,i),gn.normalize(),e.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function e(d,m){const p=d.array,x=d.itemSize,v=d.normalized,S=new p.constructor(m.length*x);let M=0,b=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*x;for(let _=0;_<x;_++)S[b++]=p[M++]}return new ci(S,x,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new xi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let x=0,v=p.length;x<v;x++){const S=p[x],M=e(S,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let v=0,S=p.length;v<S;v++){const M=p[v];x.push(M.toJSON(e.data))}x.length>0&&(l[m]=x,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const u=e.morphAttributes;for(const p in u){const x=[],v=u[p];for(let S=0,M=v.length;S<M;S++)x.push(v[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,x=h.length;p<x;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const H0=new Ye,ls=new Cd,sc=new Bo,G0=new Q,rc=new Q,oc=new Q,lc=new Q,_h=new Q,cc=new Q,V0=new Q,uc=new Q;class na extends Rn{constructor(e=new xi,i=new G_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){cc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=d[m],v=u[m];x!==0&&(_h.fromBufferAttribute(v,e),h?cc.addScaledVector(_h,x):cc.addScaledVector(_h.sub(i),x))}i.add(cc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),sc.copy(s.boundingSphere),sc.applyMatrix4(u),ls.copy(e.ray).recast(e.near),!(sc.containsPoint(ls.origin)===!1&&(ls.intersectSphere(sc,G0)===null||ls.origin.distanceToSquared(G0)>(e.far-e.near)**2))&&(H0.copy(u).invert(),ls.copy(e.ray).applyMatrix4(H0),!(s.boundingBox!==null&&ls.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ls)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,v=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const y=S[b],_=h[y.materialIndex],F=Math.max(y.start,M.start),z=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=F,k=z;D<k;D+=3){const G=d.getX(D),B=d.getX(D+1),K=d.getX(D+2);l=fc(this,_,e,s,p,x,v,G,B,K),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=b,_=R;y<_;y+=3){const F=d.getX(y),z=d.getX(y+1),D=d.getX(y+2);l=fc(this,h,e,s,p,x,v,F,z,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const y=S[b],_=h[y.materialIndex],F=Math.max(y.start,M.start),z=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=F,k=z;D<k;D+=3){const G=D,B=D+1,K=D+2;l=fc(this,_,e,s,p,x,v,G,B,K),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=b,_=R;y<_;y+=3){const F=y,z=y+1,D=y+2;l=fc(this,h,e,s,p,x,v,F,z,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Ry(o,e,i,s,l,u,h,d){let m;if(e.side===Fn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,e.side===Fa,d),m===null)return null;uc.copy(d),uc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(uc);return p<i.near||p>i.far?null:{distance:p,point:uc.clone(),object:o}}function fc(o,e,i,s,l,u,h,d,m,p){o.getVertexPosition(d,rc),o.getVertexPosition(m,oc),o.getVertexPosition(p,lc);const x=Ry(o,e,i,s,rc,oc,lc,V0);if(x){const v=new Q;gi.getBarycoord(V0,rc,oc,lc,v),l&&(x.uv=gi.getInterpolatedAttribute(l,d,m,p,v,new De)),u&&(x.uv1=gi.getInterpolatedAttribute(u,d,m,p,v,new De)),h&&(x.normal=gi.getInterpolatedAttribute(h,d,m,p,v,new Q),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new Q,materialIndex:0};gi.getNormal(rc,oc,lc,S.normal),x.face=S,x.barycoord=v}return x}class Io extends xi{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],x=[],v=[];let S=0,M=0;b("z","y","x",-1,-1,s,i,e,h,u,0),b("z","y","x",1,-1,s,i,-e,h,u,1),b("x","z","y",1,1,e,s,i,l,h,2),b("x","z","y",1,-1,e,s,-i,l,h,3),b("x","y","z",1,-1,e,i,s,l,u,4),b("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Ia(p,3)),this.setAttribute("normal",new Ia(x,3)),this.setAttribute("uv",new Ia(v,2));function b(R,y,_,F,z,D,k,G,B,K,w){const C=D/B,H=k/K,et=D/2,lt=k/2,gt=G/2,ft=B+1,O=K+1;let Z=0,Y=0;const xt=new Q;for(let Et=0;Et<O;Et++){const N=Et*H-lt;for(let it=0;it<ft;it++){const yt=it*C-et;xt[R]=yt*F,xt[y]=N*z,xt[_]=gt,p.push(xt.x,xt.y,xt.z),xt[R]=0,xt[y]=0,xt[_]=G>0?1:-1,x.push(xt.x,xt.y,xt.z),v.push(it/B),v.push(1-Et/K),Z+=1}}for(let Et=0;Et<K;Et++)for(let N=0;N<B;N++){const it=S+N+ft*Et,yt=S+N+ft*(Et+1),At=S+(N+1)+ft*(Et+1),Ot=S+(N+1)+ft*Et;m.push(it,yt,Ot),m.push(yt,At,Ot),Y+=6}d.addGroup(M,Y,w),M+=Y,S+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Er(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Un(o){const e={};for(let i=0;i<o.length;i++){const s=Er(o[i]);for(const l in s)e[l]=s[l]}return e}function Cy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function X_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ce.workingColorSpace}const wy={clone:Er,merge:Un};var Dy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ha extends br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dy,this.fragmentShader=Uy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=Cy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class W_ extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oa=new Q,k0=new De,X0=new De;class Qn extends W_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=gd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gd*2*Math.atan(Math.tan(Kf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z)}getViewSize(e,i){return this.getViewBounds(e,k0,X0),i.subVectors(X0,k0)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Kf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const dr=-90,pr=1;class Ny extends Rn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Qn(dr,pr,e,i);l.layers=this.layers,this.add(l);const u=new Qn(dr,pr,e,i);u.layers=this.layers,this.add(u);const h=new Qn(dr,pr,e,i);h.layers=this.layers,this.add(h);const d=new Qn(dr,pr,e,i);d.layers=this.layers,this.add(d);const m=new Qn(dr,pr,e,i);m.layers=this.layers,this.add(m);const p=new Qn(dr,pr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===Ci)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===wc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,x]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,l),e.render(i,x),e.setRenderTarget(v,S,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class j_ extends Hn{constructor(e=[],i=Sr,s,l,u,h,d,m,p,x){super(e,i,s,l,u,h,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ly extends xs{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new j_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Io(5,5,5),u=new Ha({name:"CubemapFromEquirect",uniforms:Er(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Fn,blending:Pa});u.uniforms.tEquirect.value=i;const h=new na(l,u),d=i.minFilter;return i.minFilter===_s&&(i.minFilter=Ri),new Ny(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}class hc extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Oy={type:"move"};class vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,s),_=this._getHandJoint(p,R);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const x=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=x.position.distanceTo(v.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Oy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new hc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class wd{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=i}clone(){return new wd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class zy extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new aa,this.environmentIntensity=1,this.environmentRotation=new aa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const xh=new Q,Py=new Q,By=new ue;class hs{constructor(e=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=xh.subVectors(s,i).cross(Py.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(xh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||By.getNormalMatrix(e),l=this.coplanarPoint(xh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new Bo,Iy=new De(.5,.5),dc=new Q;class Dd{constructor(e=new hs,i=new hs,s=new hs,l=new hs,u=new hs,h=new hs){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Ci,s=!1){const l=this.planes,u=e.elements,h=u[0],d=u[1],m=u[2],p=u[3],x=u[4],v=u[5],S=u[6],M=u[7],b=u[8],R=u[9],y=u[10],_=u[11],F=u[12],z=u[13],D=u[14],k=u[15];if(l[0].setComponents(p-h,M-x,_-b,k-F).normalize(),l[1].setComponents(p+h,M+x,_+b,k+F).normalize(),l[2].setComponents(p+d,M+v,_+R,k+z).normalize(),l[3].setComponents(p-d,M-v,_-R,k-z).normalize(),s)l[4].setComponents(m,S,y,D).normalize(),l[5].setComponents(p-m,M-S,_-y,k-D).normalize();else if(l[4].setComponents(p-m,M-S,_-y,k-D).normalize(),i===Ci)l[5].setComponents(p+m,M+S,_+y,k+D).normalize();else if(i===wc)l[5].setComponents(m,S,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),cs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);const i=Iy.distanceTo(e.center);return cs.radius=.7071067811865476+i,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(dc.x=l.normal.x>0?e.max.x:e.min.x,dc.y=l.normal.y>0?e.max.y:e.min.y,dc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class q_ extends br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uc=new Q,Nc=new Q,W0=new Ye,bo=new Cd,pc=new Bo,Sh=new Q,j0=new Q;class Fy extends Rn{constructor(e=new xi,i=new q_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Uc.fromBufferAttribute(i,l-1),Nc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Uc.distanceTo(Nc);e.setAttribute("lineDistance",new Ia(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),pc.copy(s.boundingSphere),pc.applyMatrix4(l),pc.radius+=u,e.ray.intersectsSphere(pc)===!1)return;W0.copy(l).invert(),bo.copy(e.ray).applyMatrix4(W0);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,x=s.index,S=s.attributes.position;if(x!==null){const M=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let R=M,y=b-1;R<y;R+=p){const _=x.getX(R),F=x.getX(R+1),z=mc(this,e,bo,m,_,F,R);z&&i.push(z)}if(this.isLineLoop){const R=x.getX(b-1),y=x.getX(M),_=mc(this,e,bo,m,R,y,b-1);_&&i.push(_)}}else{const M=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let R=M,y=b-1;R<y;R+=p){const _=mc(this,e,bo,m,R,R+1,R);_&&i.push(_)}if(this.isLineLoop){const R=mc(this,e,bo,m,b-1,M,b-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function mc(o,e,i,s,l,u,h){const d=o.geometry.attributes.position;if(Uc.fromBufferAttribute(d,l),Nc.fromBufferAttribute(d,u),i.distanceSqToSegment(Uc,Nc,Sh,j0)>s)return;Sh.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Sh);if(!(p<e.near||p>e.far))return{distance:p,point:j0.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class Y_ extends br{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const q0=new Ye,_d=new Cd,gc=new Bo,_c=new Q;class Hy extends Rn{constructor(e=new xi,i=new Y_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),gc.copy(s.boundingSphere),gc.applyMatrix4(l),gc.radius+=u,e.ray.intersectsSphere(gc)===!1)return;q0.copy(l).invert(),_d.copy(e.ray).applyMatrix4(q0);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,v=s.attributes.position;if(p!==null){const S=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let b=S,R=M;b<R;b++){const y=p.getX(b);_c.fromBufferAttribute(v,y),Y0(_c,y,m,l,e,i,this)}}else{const S=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let b=S,R=M;b<R;b++)_c.fromBufferAttribute(v,b),Y0(_c,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Y0(o,e,i,s,l,u,h){const d=_d.distanceSqToPoint(o);if(d<i){const m=new Q;_d.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class Z_ extends Hn{constructor(e,i,s=vs,l,u,h,d=vi,m=vi,p,x=Do,v=1){if(x!==Do&&x!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:v};super(S,l,u,h,d,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class K_ extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Oc extends xi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,x=m+1,v=e/d,S=i/m,M=[],b=[],R=[],y=[];for(let _=0;_<x;_++){const F=_*S-h;for(let z=0;z<p;z++){const D=z*v-u;b.push(D,-F,0),R.push(0,0,1),y.push(z/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let F=0;F<d;F++){const z=F+p*_,D=F+p*(_+1),k=F+1+p*(_+1),G=F+1+p*_;M.push(z,D,G),M.push(D,k,G)}this.setIndex(M),this.setAttribute("position",new Ia(b,3)),this.setAttribute("normal",new Ia(R,3)),this.setAttribute("uv",new Ia(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gy extends br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vy extends br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Q_ extends Rn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const yh=new Ye,Z0=new Q,K0=new Q;class ky{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dd,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Z0.setFromMatrixPosition(e.matrixWorld),i.position.copy(Z0),K0.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(K0),i.updateMatrixWorld(),yh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Q0=new Ye,Ao=new Q,Mh=new Q;class Xy extends ky{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new Q(1,0,0),new Q(-1,0,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,1,0),new Q(0,-1,0)],this._cubeUps=[new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,0,1),new Q(0,0,-1)]}updateMatrices(e,i=0){const s=this.camera,l=this.matrix,u=e.distance||s.far;u!==s.far&&(s.far=u,s.updateProjectionMatrix()),Ao.setFromMatrixPosition(e.matrixWorld),s.position.copy(Ao),Mh.copy(s.position),Mh.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Mh),s.updateMatrixWorld(),l.makeTranslation(-Ao.x,-Ao.y,-Ao.z),Q0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Q0,s.coordinateSystem,s.reversedDepth)}}class J0 extends Q_{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Xy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Wy extends W_{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class jy extends Q_{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class qy extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Yy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function $0(o,e,i,s){const l=Zy(s);switch(i){case N_:return o*e;case O_:return o*e/l.components*l.byteLength;case Td:return o*e/l.components*l.byteLength;case z_:return o*e*2/l.components*l.byteLength;case bd:return o*e*2/l.components*l.byteLength;case L_:return o*e*3/l.components*l.byteLength;case _i:return o*e*4/l.components*l.byteLength;case Ad:return o*e*4/l.components*l.byteLength;case Mc:case Ec:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Tc:case bc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case kh:case Wh:return Math.max(o,16)*Math.max(e,8)/4;case Vh:case Xh:return Math.max(o,8)*Math.max(e,8)/2;case jh:case qh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Yh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case $h:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case td:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case ed:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case nd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case id:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case ad:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case sd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case rd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case od:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case ld:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case cd:case ud:case fd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case hd:case dd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case pd:case md:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Zy(o){switch(o){case wi:case C_:return{byteLength:1,components:1};case Co:case w_:case Lo:return{byteLength:2,components:1};case Md:case Ed:return{byteLength:2,components:4};case vs:case yd:case ea:return{byteLength:4,components:1};case D_:case U_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function J_(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Ky(o){const e=new WeakMap;function i(d,m){const p=d.array,x=d.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,x),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const x=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,x);else{v.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<v.length;M++){const b=v[S],R=v[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++S,v[S]=R)}v.length=S+1;for(let M=0,b=v.length;M<b;M++){const R=v[M];o.bufferSubData(p,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var Qy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$y=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,SM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,MM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,EM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RM="gl_FragColor = linearToOutputTexel( gl_FragColor );",CM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,UM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,OM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,XM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ZM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,KM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,QM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,JM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$M=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,SE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ME=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,PE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,IE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,HE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$E=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_T=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ET=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:Qy,alphahash_pars_fragment:Jy,alphamap_fragment:$y,alphamap_pars_fragment:tM,alphatest_fragment:eM,alphatest_pars_fragment:nM,aomap_fragment:iM,aomap_pars_fragment:aM,batching_pars_vertex:sM,batching_vertex:rM,begin_vertex:oM,beginnormal_vertex:lM,bsdfs:cM,iridescence_fragment:uM,bumpmap_pars_fragment:fM,clipping_planes_fragment:hM,clipping_planes_pars_fragment:dM,clipping_planes_pars_vertex:pM,clipping_planes_vertex:mM,color_fragment:gM,color_pars_fragment:_M,color_pars_vertex:vM,color_vertex:xM,common:SM,cube_uv_reflection_fragment:yM,defaultnormal_vertex:MM,displacementmap_pars_vertex:EM,displacementmap_vertex:TM,emissivemap_fragment:bM,emissivemap_pars_fragment:AM,colorspace_fragment:RM,colorspace_pars_fragment:CM,envmap_fragment:wM,envmap_common_pars_fragment:DM,envmap_pars_fragment:UM,envmap_pars_vertex:NM,envmap_physical_pars_fragment:kM,envmap_vertex:LM,fog_vertex:OM,fog_pars_vertex:zM,fog_fragment:PM,fog_pars_fragment:BM,gradientmap_pars_fragment:IM,lightmap_pars_fragment:FM,lights_lambert_fragment:HM,lights_lambert_pars_fragment:GM,lights_pars_begin:VM,lights_toon_fragment:XM,lights_toon_pars_fragment:WM,lights_phong_fragment:jM,lights_phong_pars_fragment:qM,lights_physical_fragment:YM,lights_physical_pars_fragment:ZM,lights_fragment_begin:KM,lights_fragment_maps:QM,lights_fragment_end:JM,logdepthbuf_fragment:$M,logdepthbuf_pars_fragment:tE,logdepthbuf_pars_vertex:eE,logdepthbuf_vertex:nE,map_fragment:iE,map_pars_fragment:aE,map_particle_fragment:sE,map_particle_pars_fragment:rE,metalnessmap_fragment:oE,metalnessmap_pars_fragment:lE,morphinstance_vertex:cE,morphcolor_vertex:uE,morphnormal_vertex:fE,morphtarget_pars_vertex:hE,morphtarget_vertex:dE,normal_fragment_begin:pE,normal_fragment_maps:mE,normal_pars_fragment:gE,normal_pars_vertex:_E,normal_vertex:vE,normalmap_pars_fragment:xE,clearcoat_normal_fragment_begin:SE,clearcoat_normal_fragment_maps:yE,clearcoat_pars_fragment:ME,iridescence_pars_fragment:EE,opaque_fragment:TE,packing:bE,premultiplied_alpha_fragment:AE,project_vertex:RE,dithering_fragment:CE,dithering_pars_fragment:wE,roughnessmap_fragment:DE,roughnessmap_pars_fragment:UE,shadowmap_pars_fragment:NE,shadowmap_pars_vertex:LE,shadowmap_vertex:OE,shadowmask_pars_fragment:zE,skinbase_vertex:PE,skinning_pars_vertex:BE,skinning_vertex:IE,skinnormal_vertex:FE,specularmap_fragment:HE,specularmap_pars_fragment:GE,tonemapping_fragment:VE,tonemapping_pars_fragment:kE,transmission_fragment:XE,transmission_pars_fragment:WE,uv_pars_fragment:jE,uv_pars_vertex:qE,uv_vertex:YE,worldpos_vertex:ZE,background_vert:KE,background_frag:QE,backgroundCube_vert:JE,backgroundCube_frag:$E,cube_vert:tT,cube_frag:eT,depth_vert:nT,depth_frag:iT,distanceRGBA_vert:aT,distanceRGBA_frag:sT,equirect_vert:rT,equirect_frag:oT,linedashed_vert:lT,linedashed_frag:cT,meshbasic_vert:uT,meshbasic_frag:fT,meshlambert_vert:hT,meshlambert_frag:dT,meshmatcap_vert:pT,meshmatcap_frag:mT,meshnormal_vert:gT,meshnormal_frag:_T,meshphong_vert:vT,meshphong_frag:xT,meshphysical_vert:ST,meshphysical_frag:yT,meshtoon_vert:MT,meshtoon_frag:ET,points_vert:TT,points_frag:bT,shadow_vert:AT,shadow_frag:RT,sprite_vert:CT,sprite_frag:wT},Lt={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Ai={basic:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Te(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Un([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Un([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Te(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Un([Lt.points,Lt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Un([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Un([Lt.common,Lt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Un([Lt.sprite,Lt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Un([Lt.common,Lt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Un([Lt.lights,Lt.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Ai.physical={uniforms:Un([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const vc={r:0,b:0,g:0},us=new aa,DT=new Ye;function UT(o,e,i,s,l,u,h){const d=new Te(0);let m=u===!0?0:1,p,x,v=null,S=0,M=null;function b(z){let D=z.isScene===!0?z.background:null;return D&&D.isTexture&&(D=(z.backgroundBlurriness>0?i:e).get(D)),D}function R(z){let D=!1;const k=b(z);k===null?_(d,m):k&&k.isColor&&(_(k,1),D=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(z,D){const k=b(D);k&&(k.isCubeTexture||k.mapping===Lc)?(x===void 0&&(x=new na(new Io(1,1,1),new Ha({name:"BackgroundCubeMaterial",uniforms:Er(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(G,B,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),us.copy(D.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),x.material.uniforms.envMap.value=k,x.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(DT.makeRotationFromEuler(us)),x.material.toneMapped=Ce.getTransfer(k.colorSpace)!==Fe,(v!==k||S!==k.version||M!==o.toneMapping)&&(x.material.needsUpdate=!0,v=k,S=k.version,M=o.toneMapping),x.layers.enableAll(),z.unshift(x,x.geometry,x.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new na(new Oc(2,2),new Ha({name:"BackgroundMaterial",uniforms:Er(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(k.colorSpace)!==Fe,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(v!==k||S!==k.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=k,S=k.version,M=o.toneMapping),p.layers.enableAll(),z.unshift(p,p.geometry,p.material,0,0,null))}function _(z,D){z.getRGB(vc,X_(o)),s.buffers.color.setClear(vc.r,vc.g,vc.b,D,h)}function F(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(z,D=1){d.set(z),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(z){m=z,_(d,m)},render:R,addToRenderList:y,dispose:F}}function NT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(C,H,et,lt,gt){let ft=!1;const O=v(lt,et,H);u!==O&&(u=O,p(u.object)),ft=M(C,lt,et,gt),ft&&b(C,lt,et,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,D(C,H,et,lt),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function x(C){return o.deleteVertexArray(C)}function v(C,H,et){const lt=et.wireframe===!0;let gt=s[C.id];gt===void 0&&(gt={},s[C.id]=gt);let ft=gt[H.id];ft===void 0&&(ft={},gt[H.id]=ft);let O=ft[lt];return O===void 0&&(O=S(m()),ft[lt]=O),O}function S(C){const H=[],et=[],lt=[];for(let gt=0;gt<i;gt++)H[gt]=0,et[gt]=0,lt[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:et,attributeDivisors:lt,object:C,attributes:{},index:null}}function M(C,H,et,lt){const gt=u.attributes,ft=H.attributes;let O=0;const Z=et.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const Et=gt[Y];let N=ft[Y];if(N===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),Et===void 0||Et.attribute!==N||N&&Et.data!==N.data)return!0;O++}return u.attributesNum!==O||u.index!==lt}function b(C,H,et,lt){const gt={},ft=H.attributes;let O=0;const Z=et.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let Et=ft[Y];Et===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(Et=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(Et=C.instanceColor));const N={};N.attribute=Et,Et&&Et.data&&(N.data=Et.data),gt[Y]=N,O++}u.attributes=gt,u.attributesNum=O,u.index=lt}function R(){const C=u.newAttributes;for(let H=0,et=C.length;H<et;H++)C[H]=0}function y(C){_(C,0)}function _(C,H){const et=u.newAttributes,lt=u.enabledAttributes,gt=u.attributeDivisors;et[C]=1,lt[C]===0&&(o.enableVertexAttribArray(C),lt[C]=1),gt[C]!==H&&(o.vertexAttribDivisor(C,H),gt[C]=H)}function F(){const C=u.newAttributes,H=u.enabledAttributes;for(let et=0,lt=H.length;et<lt;et++)H[et]!==C[et]&&(o.disableVertexAttribArray(et),H[et]=0)}function z(C,H,et,lt,gt,ft,O){O===!0?o.vertexAttribIPointer(C,H,et,gt,ft):o.vertexAttribPointer(C,H,et,lt,gt,ft)}function D(C,H,et,lt){R();const gt=lt.attributes,ft=et.getAttributes(),O=H.defaultAttributeValues;for(const Z in ft){const Y=ft[Z];if(Y.location>=0){let xt=gt[Z];if(xt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const Et=xt.normalized,N=xt.itemSize,it=e.get(xt);if(it===void 0)continue;const yt=it.buffer,At=it.type,Ot=it.bytesPerElement,at=At===o.INT||At===o.UNSIGNED_INT||xt.gpuType===yd;if(xt.isInterleavedBufferAttribute){const ct=xt.data,Dt=ct.stride,It=xt.offset;if(ct.isInstancedInterleavedBuffer){for(let Xt=0;Xt<Y.locationSize;Xt++)_(Y.location+Xt,ct.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Xt=0;Xt<Y.locationSize;Xt++)y(Y.location+Xt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Xt=0;Xt<Y.locationSize;Xt++)z(Y.location+Xt,N/Y.locationSize,At,Et,Dt*Ot,(It+N/Y.locationSize*Xt)*Ot,at)}else{if(xt.isInstancedBufferAttribute){for(let ct=0;ct<Y.locationSize;ct++)_(Y.location+ct,xt.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ct=0;ct<Y.locationSize;ct++)y(Y.location+ct);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let ct=0;ct<Y.locationSize;ct++)z(Y.location+ct,N/Y.locationSize,At,Et,N*Ot,N/Y.locationSize*ct*Ot,at)}}else if(O!==void 0){const Et=O[Z];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(Y.location,Et);break;case 3:o.vertexAttrib3fv(Y.location,Et);break;case 4:o.vertexAttrib4fv(Y.location,Et);break;default:o.vertexAttrib1fv(Y.location,Et)}}}}F()}function k(){K();for(const C in s){const H=s[C];for(const et in H){const lt=H[et];for(const gt in lt)x(lt[gt].object),delete lt[gt];delete H[et]}delete s[C]}}function G(C){if(s[C.id]===void 0)return;const H=s[C.id];for(const et in H){const lt=H[et];for(const gt in lt)x(lt[gt].object),delete lt[gt];delete H[et]}delete s[C.id]}function B(C){for(const H in s){const et=s[H];if(et[C.id]===void 0)continue;const lt=et[C.id];for(const gt in lt)x(lt[gt].object),delete lt[gt];delete et[C.id]}}function K(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:w,dispose:k,releaseStatesOfGeometry:G,releaseStatesOfProgram:B,initAttributes:R,enableAttribute:y,disableUnusedAttributes:F}}function LT(o,e,i){let s;function l(p){s=p}function u(p,x){o.drawArrays(s,p,x),i.update(x,s,1)}function h(p,x,v){v!==0&&(o.drawArraysInstanced(s,p,x,v),i.update(x,s,v))}function d(p,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,v);let M=0;for(let b=0;b<v;b++)M+=x[b];i.update(M,s,1)}function m(p,x,v,S){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],x[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,x,0,S,0,v);let b=0;for(let R=0;R<v;R++)b+=x[R]*S[R];i.update(b,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function OT(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==_i&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const K=B===Lo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==wi&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ea&&!K)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const v=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=b>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:F,maxVaryings:z,maxFragmentUniforms:D,vertexTextures:k,maxSamples:G}}function zT(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new hs,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const M=v.length!==0||S||s!==0||l;return l=S,s=v.length,M},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){i=x(v,S,0)},this.setState=function(v,S,M){const b=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,_=o.get(v);if(!l||b===null||b.length===0||u&&!y)u?x(null):p();else{const F=u?0:s,z=F*4;let D=_.clippingState||null;m.value=D,D=x(b,S,z,M);for(let k=0;k!==z;++k)D[k]=i[k];_.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(v,S,M,b){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=m.value,b!==!0||y===null){const _=M+R*4,F=S.matrixWorldInverse;d.getNormalMatrix(F),(y===null||y.length<_)&&(y=new Float32Array(_));for(let z=0,D=M;z!==R;++z,D+=4)h.copy(v[z]).applyMatrix4(F,d),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function PT(o){let e=new WeakMap;function i(h,d){return d===Ih?h.mapping=Sr:d===Fh&&(h.mapping=yr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ih||d===Fh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Ly(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const gr=4,t_=[.125,.215,.35,.446,.526,.582],ms=20,Eh=new Wy,e_=new Te;let Th=null,bh=0,Ah=0,Rh=!1;const ds=(1+Math.sqrt(5))/2,mr=1/ds,n_=[new Q(-ds,mr,0),new Q(ds,mr,0),new Q(-mr,0,ds),new Q(mr,0,ds),new Q(0,ds,-mr),new Q(0,ds,mr),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],BT=new Q;class i_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=BT}=u;Th=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=r_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=s_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Th,bh,Ah),this._renderer.xr.enabled=Rh,e.scissorTest=!1,xc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Sr||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Th=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Lo,format:_i,colorSpace:Mr,depthBuffer:!1},l=a_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a_(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IT(u)),this._blurMaterial=FT(u,e,i)}return l}_compileMaterial(e){const i=new na(this._lodPlanes[0],e);this._renderer.compile(i,Eh)}_sceneToCubeUV(e,i,s,l,u){const m=new Qn(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,M=v.toneMapping;v.getClearColor(e_),v.toneMapping=Ba,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const R=new G_({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),y=new na(new Io,R);let _=!1;const F=e.background;F?F.isColor&&(R.color.copy(F),e.background=null,_=!0):(R.color.copy(e_),_=!0);for(let z=0;z<6;z++){const D=z%3;D===0?(m.up.set(0,p[z],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[z],u.y,u.z)):D===1?(m.up.set(0,0,p[z]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[z],u.z)):(m.up.set(0,p[z],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[z]));const k=this._cubeSize;xc(l,D*k,z>2?k:0,k,k),v.setRenderTarget(l),_&&v.render(y,m),v.render(e,m)}y.geometry.dispose(),y.material.dispose(),v.toneMapping=M,v.autoClear=S,e.background=F}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Sr||e.mapping===yr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=r_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=s_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new na(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;xc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Eh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=n_[(l-u-1)%n_.length];this._blur(e,u-1,u,h,d)}i.autoClear=s}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,v=new na(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*ms-1),R=u/b,y=isFinite(u)?1+Math.floor(x*R):ms;y>ms&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ms}`);const _=[];let F=0;for(let B=0;B<ms;++B){const K=B/R,w=Math.exp(-K*K/2);_.push(w),B===0?F+=w:B<y&&(F+=2*w)}for(let B=0;B<_.length;B++)_[B]=_[B]/F;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:z}=this;S.dTheta.value=b,S.mipInt.value=z-s;const D=this._sizeLods[l],k=3*D*(l>z-gr?l-z+gr:0),G=4*(this._cubeSize-D);xc(i,k,G,3*D,2*D),m.setRenderTarget(i),m.render(v,Eh)}}function IT(o){const e=[],i=[],s=[];let l=o;const u=o-gr+1+t_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-gr?m=t_[h-o+gr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),x=-p,v=1+p,S=[x,x,v,x,v,v,x,x,v,v,x,v],M=6,b=6,R=3,y=2,_=1,F=new Float32Array(R*b*M),z=new Float32Array(y*b*M),D=new Float32Array(_*b*M);for(let G=0;G<M;G++){const B=G%3*2/3-1,K=G>2?0:-1,w=[B,K,0,B+2/3,K,0,B+2/3,K+1,0,B,K,0,B+2/3,K+1,0,B,K+1,0];F.set(w,R*b*G),z.set(S,y*b*G);const C=[G,G,G,G,G,G];D.set(C,_*b*G)}const k=new xi;k.setAttribute("position",new ci(F,R)),k.setAttribute("uv",new ci(z,y)),k.setAttribute("faceIndex",new ci(D,_)),e.push(k),l>gr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function a_(o,e,i){const s=new xs(o,e,i);return s.texture.mapping=Lc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function xc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function FT(o,e,i){const s=new Float32Array(ms),l=new Q(0,1,0);return new Ha({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function s_(){return new Ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function r_(){return new Ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function Ud(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function HT(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ih||m===Fh,x=m===Sr||m===yr;if(p||x){let v=e.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new i_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new i_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function GT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&No("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function VT(o,e,i,s){const l={},u=new WeakMap;function h(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function p(v){const S=[],M=v.index,b=v.attributes.position;let R=0;if(M!==null){const F=M.array;R=M.version;for(let z=0,D=F.length;z<D;z+=3){const k=F[z+0],G=F[z+1],B=F[z+2];S.push(k,G,G,B,B,k)}}else if(b!==void 0){const F=b.array;R=b.version;for(let z=0,D=F.length/3-1;z<D;z+=3){const k=z+0,G=z+1,B=z+2;S.push(k,G,G,B,B,k)}}else return;const y=new(B_(S)?k_:V_)(S,1);y.version=R;const _=u.get(v);_&&e.remove(_),u.set(v,y)}function x(v){const S=u.get(v);if(S){const M=v.index;M!==null&&S.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:x}}function kT(o,e,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(s,M,u,S*h),i.update(M,s,1)}function p(S,M,b){b!==0&&(o.drawElementsInstanced(s,M,u,S*h,b),i.update(M,s,b))}function x(S,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,S,0,b);let y=0;for(let _=0;_<b;_++)y+=M[_];i.update(y,s,1)}function v(S,M,b,R){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S.length;_++)p(S[_]/h,M[_],R[_]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,S,0,R,0,b);let _=0;for(let F=0;F<b;F++)_+=M[F]*R[F];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function XT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function WT(o,e,i){const s=new WeakMap,l=new He;function u(h,d,m){const p=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=x!==void 0?x.length:0;let S=s.get(d);if(S===void 0||S.count!==v){let C=function(){K.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),R===!0&&(D=2),y===!0&&(D=3);let k=d.attributes.position.count*D,G=1;k>e.maxTextureSize&&(G=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const B=new Float32Array(k*G*4*v),K=new I_(B,k,G,v);K.type=ea,K.needsUpdate=!0;const w=D*4;for(let H=0;H<v;H++){const et=_[H],lt=F[H],gt=z[H],ft=k*G*4*H;for(let O=0;O<et.count;O++){const Z=O*w;b===!0&&(l.fromBufferAttribute(et,O),B[ft+Z+0]=l.x,B[ft+Z+1]=l.y,B[ft+Z+2]=l.z,B[ft+Z+3]=0),R===!0&&(l.fromBufferAttribute(lt,O),B[ft+Z+4]=l.x,B[ft+Z+5]=l.y,B[ft+Z+6]=l.z,B[ft+Z+7]=0),y===!0&&(l.fromBufferAttribute(gt,O),B[ft+Z+8]=l.x,B[ft+Z+9]=l.y,B[ft+Z+10]=l.z,B[ft+Z+11]=gt.itemSize===4?l.w:1)}}S={count:v,texture:K,size:new De(k,G)},s.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function jT(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,x=m.geometry,v=e.get(m,x);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const $_=new Hn,o_=new Z_(1,1),tv=new I_,ev=new gy,nv=new j_,l_=[],c_=[],u_=new Float32Array(16),f_=new Float32Array(9),h_=new Float32Array(4);function Ar(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=l_[l];if(u===void 0&&(u=new Float32Array(l),l_[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function hn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function dn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function zc(o,e){let i=c_[e];i===void 0&&(i=new Int32Array(e),c_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function qT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function YT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2fv(this.addr,e),dn(i,e)}}function ZT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(hn(i,e))return;o.uniform3fv(this.addr,e),dn(i,e)}}function KT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4fv(this.addr,e),dn(i,e)}}function QT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;h_.set(s),o.uniformMatrix2fv(this.addr,!1,h_),dn(i,s)}}function JT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;f_.set(s),o.uniformMatrix3fv(this.addr,!1,f_),dn(i,s)}}function $T(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;u_.set(s),o.uniformMatrix4fv(this.addr,!1,u_),dn(i,s)}}function tb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function eb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2iv(this.addr,e),dn(i,e)}}function nb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3iv(this.addr,e),dn(i,e)}}function ib(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4iv(this.addr,e),dn(i,e)}}function ab(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function sb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2uiv(this.addr,e),dn(i,e)}}function rb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3uiv(this.addr,e),dn(i,e)}}function ob(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4uiv(this.addr,e),dn(i,e)}}function lb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(o_.compareFunction=P_,u=o_):u=$_,i.setTexture2D(e||u,l)}function cb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||ev,l)}function ub(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||nv,l)}function fb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||tv,l)}function hb(o){switch(o){case 5126:return qT;case 35664:return YT;case 35665:return ZT;case 35666:return KT;case 35674:return QT;case 35675:return JT;case 35676:return $T;case 5124:case 35670:return tb;case 35667:case 35671:return eb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return ab;case 36294:return sb;case 36295:return rb;case 36296:return ob;case 35678:case 36198:case 36298:case 36306:case 35682:return lb;case 35679:case 36299:case 36307:return cb;case 35680:case 36300:case 36308:case 36293:return ub;case 36289:case 36303:case 36311:case 36292:return fb}}function db(o,e){o.uniform1fv(this.addr,e)}function pb(o,e){const i=Ar(e,this.size,2);o.uniform2fv(this.addr,i)}function mb(o,e){const i=Ar(e,this.size,3);o.uniform3fv(this.addr,i)}function gb(o,e){const i=Ar(e,this.size,4);o.uniform4fv(this.addr,i)}function _b(o,e){const i=Ar(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function vb(o,e){const i=Ar(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function xb(o,e){const i=Ar(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Sb(o,e){o.uniform1iv(this.addr,e)}function yb(o,e){o.uniform2iv(this.addr,e)}function Mb(o,e){o.uniform3iv(this.addr,e)}function Eb(o,e){o.uniform4iv(this.addr,e)}function Tb(o,e){o.uniform1uiv(this.addr,e)}function bb(o,e){o.uniform2uiv(this.addr,e)}function Ab(o,e){o.uniform3uiv(this.addr,e)}function Rb(o,e){o.uniform4uiv(this.addr,e)}function Cb(o,e,i){const s=this.cache,l=e.length,u=zc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||$_,u[h])}function wb(o,e,i){const s=this.cache,l=e.length,u=zc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||ev,u[h])}function Db(o,e,i){const s=this.cache,l=e.length,u=zc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||nv,u[h])}function Ub(o,e,i){const s=this.cache,l=e.length,u=zc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||tv,u[h])}function Nb(o){switch(o){case 5126:return db;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return _b;case 35675:return vb;case 35676:return xb;case 5124:case 35670:return Sb;case 35667:case 35671:return yb;case 35668:case 35672:return Mb;case 35669:case 35673:return Eb;case 5125:return Tb;case 36294:return bb;case 36295:return Ab;case 36296:return Rb;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return wb;case 35680:case 36300:case 36308:case 36293:return Db;case 36289:case 36303:case 36311:case 36292:return Ub}}class Lb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=hb(i.type)}}class Ob{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Nb(i.type)}}class zb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const Ch=/(\w+)(\])?(\[|\.)?/g;function d_(o,e){o.seq.push(e),o.map[e.id]=e}function Pb(o,e,i){const s=o.name,l=s.length;for(Ch.lastIndex=0;;){const u=Ch.exec(s),h=Ch.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){d_(i,p===void 0?new Lb(d,o,e):new Ob(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new zb(d),d_(i,v)),i=v}}}class Ac{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);Pb(u,h,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function p_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const Bb=37297;let Ib=0;function Fb(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const m_=new ue;function Hb(o){Ce._getMatrix(m_,Ce.workingColorSpace,o);const e=`mat3( ${m_.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(o)){case Cc:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function g_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+Fb(o.getShaderSource(e),d)}else return u}function Gb(o,e){const i=Hb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Vb(o,e){let i;switch(e){case kS:i="Linear";break;case XS:i="Reinhard";break;case WS:i="Cineon";break;case jS:i="ACESFilmic";break;case YS:i="AgX";break;case ZS:i="Neutral";break;case qS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Sc=new Q;function kb(){Ce.getLuminanceCoefficients(Sc);const o=Sc.x.toFixed(4),e=Sc.y.toFixed(4),i=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function Wb(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function jb(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Ro(o){return o!==""}function __(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function v_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qb=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(o){return o.replace(qb,Zb)}const Yb=new Map;function Zb(o,e){let i=fe[e];if(i===void 0){const s=Yb.get(e);if(s!==void 0)i=fe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return vd(i)}const Kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function x_(o){return o.replace(Kb,Qb)}function Qb(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function S_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===b_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===MS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function $b(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Sr:case yr:e="ENVMAP_TYPE_CUBE";break;case Lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function t1(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case yr:e="ENVMAP_MODE_REFRACTION";break}return e}function e1(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case A_:e="ENVMAP_BLENDING_MULTIPLY";break;case GS:e="ENVMAP_BLENDING_MIX";break;case VS:e="ENVMAP_BLENDING_ADD";break}return e}function n1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function i1(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Jb(i),p=$b(i),x=t1(i),v=e1(i),S=n1(i),M=Xb(i),b=Wb(u),R=l.createProgram();let y,_,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ro).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ro).join(`
`),_.length>0&&(_+=`
`)):(y=[S_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),_=[S_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ba?"#define TONE_MAPPING":"",i.toneMapping!==Ba?fe.tonemapping_pars_fragment:"",i.toneMapping!==Ba?Vb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,Gb("linearToOutputTexel",i.outputColorSpace),kb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ro).join(`
`)),h=vd(h),h=__(h,i),h=v_(h,i),d=vd(d),d=__(d,i),d=v_(d,i),h=x_(h),d=x_(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===R0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===R0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const z=F+y+h,D=F+_+d,k=p_(l,l.VERTEX_SHADER,z),G=p_(l,l.FRAGMENT_SHADER,D);l.attachShader(R,k),l.attachShader(R,G),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function B(H){if(o.debug.checkShaderErrors){const et=l.getProgramInfoLog(R)||"",lt=l.getShaderInfoLog(k)||"",gt=l.getShaderInfoLog(G)||"",ft=et.trim(),O=lt.trim(),Z=gt.trim();let Y=!0,xt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,k,G);else{const Et=g_(l,k,"vertex"),N=g_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ft+`
`+Et+`
`+N)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(O===""||Z==="")&&(xt=!1);xt&&(H.diagnostics={runnable:Y,programLog:ft,vertexShader:{log:O,prefix:y},fragmentShader:{log:Z,prefix:_}})}l.deleteShader(k),l.deleteShader(G),K=new Ac(l,R),w=jb(l,R)}let K;this.getUniforms=function(){return K===void 0&&B(this),K};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,Bb)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Ib++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=k,this.fragmentShader=G,this}let a1=0;class s1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new r1(e),i.set(e,s)),s}}class r1{constructor(e){this.id=a1++,this.code=e,this.usedTimes=0}}function o1(o,e,i,s,l,u,h){const d=new F_,m=new s1,p=new Set,x=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,C,H,et,lt){const gt=et.fog,ft=lt.geometry,O=w.isMeshStandardMaterial?et.environment:null,Z=(w.isMeshStandardMaterial?i:e).get(w.envMap||O),Y=Z&&Z.mapping===Lc?Z.image.height:null,xt=b[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const Et=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,N=Et!==void 0?Et.length:0;let it=0;ft.morphAttributes.position!==void 0&&(it=1),ft.morphAttributes.normal!==void 0&&(it=2),ft.morphAttributes.color!==void 0&&(it=3);let yt,At,Ot,at;if(xt){const Me=Ai[xt];yt=Me.vertexShader,At=Me.fragmentShader}else yt=w.vertexShader,At=w.fragmentShader,m.update(w),Ot=m.getVertexShaderID(w),at=m.getFragmentShaderID(w);const ct=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),It=lt.isInstancedMesh===!0,Xt=lt.isBatchedMesh===!0,he=!!w.map,nn=!!w.matcap,I=!!Z,be=!!w.aoMap,ie=!!w.lightMap,te=!!w.bumpMap,Wt=!!w.normalMap,Ge=!!w.displacementMap,kt=!!w.emissiveMap,se=!!w.metalnessMap,Ke=!!w.roughnessMap,Ze=w.anisotropy>0,U=w.clearcoat>0,E=w.dispersion>0,tt=w.iridescence>0,dt=w.sheen>0,St=w.transmission>0,ut=Ze&&!!w.anisotropyMap,Zt=U&&!!w.clearcoatMap,Rt=U&&!!w.clearcoatNormalMap,qt=U&&!!w.clearcoatRoughnessMap,Yt=tt&&!!w.iridescenceMap,Tt=tt&&!!w.iridescenceThicknessMap,Ct=dt&&!!w.sheenColorMap,Kt=dt&&!!w.sheenRoughnessMap,Pt=!!w.specularMap,Ut=!!w.specularColorMap,oe=!!w.specularIntensityMap,X=St&&!!w.transmissionMap,bt=St&&!!w.thicknessMap,wt=!!w.gradientMap,Bt=!!w.alphaMap,Mt=w.alphaTest>0,_t=!!w.alphaHash,Ft=!!w.extensions;let ae=Ba;w.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ae=o.toneMapping);const Le={shaderID:xt,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:At,defines:w.defines,customVertexShaderID:Ot,customFragmentShaderID:at,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Xt,batchingColor:Xt&&lt._colorsTexture!==null,instancing:It,instancingColor:It&&lt.instanceColor!==null,instancingMorph:It&&lt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Mr,alphaToCoverage:!!w.alphaToCoverage,map:he,matcap:nn,envMap:I,envMapMode:I&&Z.mapping,envMapCubeUVHeight:Y,aoMap:be,lightMap:ie,bumpMap:te,normalMap:Wt,displacementMap:S&&Ge,emissiveMap:kt,normalMapObjectSpace:Wt&&w.normalMapType===ty,normalMapTangentSpace:Wt&&w.normalMapType===$S,metalnessMap:se,roughnessMap:Ke,anisotropy:Ze,anisotropyMap:ut,clearcoat:U,clearcoatMap:Zt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:qt,dispersion:E,iridescence:tt,iridescenceMap:Yt,iridescenceThicknessMap:Tt,sheen:dt,sheenColorMap:Ct,sheenRoughnessMap:Kt,specularMap:Pt,specularColorMap:Ut,specularIntensityMap:oe,transmission:St,transmissionMap:X,thicknessMap:bt,gradientMap:wt,opaque:w.transparent===!1&&w.blending===_r&&w.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Mt,alphaHash:_t,combine:w.combine,mapUv:he&&R(w.map.channel),aoMapUv:be&&R(w.aoMap.channel),lightMapUv:ie&&R(w.lightMap.channel),bumpMapUv:te&&R(w.bumpMap.channel),normalMapUv:Wt&&R(w.normalMap.channel),displacementMapUv:Ge&&R(w.displacementMap.channel),emissiveMapUv:kt&&R(w.emissiveMap.channel),metalnessMapUv:se&&R(w.metalnessMap.channel),roughnessMapUv:Ke&&R(w.roughnessMap.channel),anisotropyMapUv:ut&&R(w.anisotropyMap.channel),clearcoatMapUv:Zt&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&R(w.sheenRoughnessMap.channel),specularMapUv:Pt&&R(w.specularMap.channel),specularColorMapUv:Ut&&R(w.specularColorMap.channel),specularIntensityMapUv:oe&&R(w.specularIntensityMap.channel),transmissionMapUv:X&&R(w.transmissionMap.channel),thicknessMapUv:bt&&R(w.thicknessMap.channel),alphaMapUv:Bt&&R(w.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Wt||Ze),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ft.attributes.uv&&(he||Bt),fog:!!gt,useFog:w.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Dt,skinning:lt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:it,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ae,decodeVideoTexture:he&&w.map.isVideoTexture===!0&&Ce.getTransfer(w.map.colorSpace)===Fe,decodeVideoTextureEmissive:kt&&w.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(w.emissiveMap.colorSpace)===Fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ta,flipSided:w.side===Fn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ft&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&w.extensions.multiDraw===!0||Xt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Le.vertexUv1s=p.has(1),Le.vertexUv2s=p.has(2),Le.vertexUv3s=p.has(3),p.clear(),Le}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)C.push(H),C.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(F(C,w),z(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function F(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function z(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=b[w.type];let H;if(C){const et=Ai[C];H=wy.clone(et.uniforms)}else H=w.uniforms;return H}function k(w,C){let H;for(let et=0,lt=x.length;et<lt;et++){const gt=x[et];if(gt.cacheKey===C){H=gt,++H.usedTimes;break}}return H===void 0&&(H=new i1(o,C,w,u),x.push(H)),H}function G(w){if(--w.usedTimes===0){const C=x.indexOf(w);x[C]=x[x.length-1],x.pop(),w.destroy()}}function B(w){m.remove(w)}function K(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:D,acquireProgram:k,releaseProgram:G,releaseShaderCache:B,programs:x,dispose:K}}function l1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function c1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function y_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function M_(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(v,S,M,b,R,y){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:S,material:M,groupOrder:b,renderOrder:v.renderOrder,z:R,group:y},o[e]=_):(_.id=v.id,_.object=v,_.geometry=S,_.material=M,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=R,_.group=y),e++,_}function d(v,S,M,b,R,y){const _=h(v,S,M,b,R,y);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,S,M,b,R,y){const _=h(v,S,M,b,R,y);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,S){i.length>1&&i.sort(v||c1),s.length>1&&s.sort(S||y_),l.length>1&&l.sort(S||y_)}function x(){for(let v=e,S=o.length;v<S;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:x,sort:p}}function u1(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new M_,o.set(s,[h])):l>=u.length?(h=new M_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function f1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Q,color:new Te};break;case"SpotLight":i={position:new Q,direction:new Q,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return o[e.id]=i,i}}}function h1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let d1=0;function p1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function m1(o){const e=new f1,i=h1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Q);const l=new Q,u=new Ye,h=new Ye;function d(p){let x=0,v=0,S=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,b=0,R=0,y=0,_=0,F=0,z=0,D=0,k=0,G=0,B=0;p.sort(p1);for(let w=0,C=p.length;w<C;w++){const H=p[w],et=H.color,lt=H.intensity,gt=H.distance,ft=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)x+=et.r*lt,v+=et.g*lt,S+=et.b*lt;else if(H.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(H.sh.coefficients[O],lt);B++}else if(H.isDirectionalLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,Y=i.get(H);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,s.directionalShadow[M]=Y,s.directionalShadowMap[M]=ft,s.directionalShadowMatrix[M]=H.shadow.matrix,F++}s.directional[M]=O,M++}else if(H.isSpotLight){const O=e.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(et).multiplyScalar(lt),O.distance=gt,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,s.spot[R]=O;const Z=H.shadow;if(H.map&&(s.spotLightMap[k]=H.map,k++,Z.updateMatrices(H),H.castShadow&&G++),s.spotLightMatrix[R]=Z.matrix,H.castShadow){const Y=i.get(H);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,s.spotShadow[R]=Y,s.spotShadowMap[R]=ft,D++}R++}else if(H.isRectAreaLight){const O=e.get(H);O.color.copy(et).multiplyScalar(lt),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=O,y++}else if(H.isPointLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const Z=H.shadow,Y=i.get(H);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,s.pointShadow[b]=Y,s.pointShadowMap[b]=ft,s.pointShadowMatrix[b]=H.shadow.matrix,z++}s.point[b]=O,b++}else if(H.isHemisphereLight){const O=e.get(H);O.skyColor.copy(H.color).multiplyScalar(lt),O.groundColor.copy(H.groundColor).multiplyScalar(lt),s.hemi[_]=O,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=v,s.ambient[2]=S;const K=s.hash;(K.directionalLength!==M||K.pointLength!==b||K.spotLength!==R||K.rectAreaLength!==y||K.hemiLength!==_||K.numDirectionalShadows!==F||K.numPointShadows!==z||K.numSpotShadows!==D||K.numSpotMaps!==k||K.numLightProbes!==B)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=y,s.point.length=b,s.hemi.length=_,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.pointShadow.length=z,s.pointShadowMap.length=z,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=F,s.pointShadowMatrix.length=z,s.spotLightMatrix.length=D+k-G,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=B,K.directionalLength=M,K.pointLength=b,K.spotLength=R,K.rectAreaLength=y,K.hemiLength=_,K.numDirectionalShadows=F,K.numPointShadows=z,K.numSpotShadows=D,K.numSpotMaps=k,K.numLightProbes=B,s.version=d1++)}function m(p,x){let v=0,S=0,M=0,b=0,R=0;const y=x.matrixWorldInverse;for(let _=0,F=p.length;_<F;_++){const z=p[_];if(z.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),v++}else if(z.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(z.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(y),h.identity(),u.copy(z.matrixWorld),u.premultiply(y),h.extractRotation(u),D.halfWidth.set(z.width*.5,0,0),D.halfHeight.set(0,z.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(z.isPointLight){const D=s.point[S];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(y),S++}else if(z.isHemisphereLight){const D=s.hemi[R];D.direction.setFromMatrixPosition(z.matrixWorld),D.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:s}}function E_(o){const e=new m1(o),i=[],s=[];function l(x){p.camera=x,i.length=0,s.length=0}function u(x){i.push(x)}function h(x){s.push(x)}function d(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function g1(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new E_(o),e.set(l,[d])):u>=h.length?(d=new E_(o),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const _1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function x1(o,e,i){let s=new Dd;const l=new De,u=new De,h=new He,d=new Gy({depthPacking:JS}),m=new Vy,p={},x=i.maxTextureSize,v={[Fa]:Fn,[Fn]:Fa,[ta]:ta},S=new Ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:_1,fragmentShader:v1}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new xi;b.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new na(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b_;let _=this.type;this.render=function(G,B,K){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),et=o.state;et.setBlending(Pa),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const lt=_!==$i&&this.type===$i,gt=_===$i&&this.type!==$i;for(let ft=0,O=G.length;ft<O;ft++){const Z=G[ft],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const xt=Y.getFrameExtents();if(l.multiply(xt),u.copy(Y.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/xt.x),l.x=u.x*xt.x,Y.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/xt.y),l.y=u.y*xt.y,Y.mapSize.y=u.y)),Y.map===null||lt===!0||gt===!0){const N=this.type!==$i?{minFilter:vi,magFilter:vi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new xs(l.x,l.y,N),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const Et=Y.getViewportCount();for(let N=0;N<Et;N++){const it=Y.getViewport(N);h.set(u.x*it.x,u.y*it.y,u.x*it.z,u.y*it.w),et.viewport(h),Y.updateMatrices(Z,N),s=Y.getFrustum(),D(B,K,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===$i&&F(Y,K),Y.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(w,C,H)};function F(G,B){const K=e.update(R);S.defines.VSM_SAMPLES!==G.blurSamples&&(S.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new xs(l.x,l.y)),S.uniforms.shadow_pass.value=G.map.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(B,null,K,S,R,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(B,null,K,M,R,null)}function z(G,B,K,w){let C=null;const H=K.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(H!==void 0)C=H;else if(C=K.isPointLight===!0?m:d,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const et=C.uuid,lt=B.uuid;let gt=p[et];gt===void 0&&(gt={},p[et]=gt);let ft=gt[lt];ft===void 0&&(ft=C.clone(),gt[lt]=ft,B.addEventListener("dispose",k)),C=ft}if(C.visible=B.visible,C.wireframe=B.wireframe,w===$i?C.side=B.shadowSide!==null?B.shadowSide:B.side:C.side=B.shadowSide!==null?B.shadowSide:v[B.side],C.alphaMap=B.alphaMap,C.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,C.map=B.map,C.clipShadows=B.clipShadows,C.clippingPlanes=B.clippingPlanes,C.clipIntersection=B.clipIntersection,C.displacementMap=B.displacementMap,C.displacementScale=B.displacementScale,C.displacementBias=B.displacementBias,C.wireframeLinewidth=B.wireframeLinewidth,C.linewidth=B.linewidth,K.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const et=o.properties.get(C);et.light=K}return C}function D(G,B,K,w,C){if(G.visible===!1)return;if(G.layers.test(B.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===$i)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,G.matrixWorld);const lt=e.update(G),gt=G.material;if(Array.isArray(gt)){const ft=lt.groups;for(let O=0,Z=ft.length;O<Z;O++){const Y=ft[O],xt=gt[Y.materialIndex];if(xt&&xt.visible){const Et=z(G,xt,w,C);G.onBeforeShadow(o,G,B,K,lt,Et,Y),o.renderBufferDirect(K,null,lt,Et,G,Y),G.onAfterShadow(o,G,B,K,lt,Et,Y)}}}else if(gt.visible){const ft=z(G,gt,w,C);G.onBeforeShadow(o,G,B,K,lt,ft,null),o.renderBufferDirect(K,null,lt,ft,G,null),G.onAfterShadow(o,G,B,K,lt,ft,null)}}const et=G.children;for(let lt=0,gt=et.length;lt<gt;lt++)D(et[lt],B,K,w,C)}function k(G){G.target.removeEventListener("dispose",k);for(const K in p){const w=p[K],C=G.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const S1={[Uh]:Nh,[Lh]:Ph,[Oh]:Bh,[xr]:zh,[Nh]:Uh,[Ph]:Lh,[Bh]:Oh,[zh]:xr};function y1(o,e){function i(){let X=!1;const bt=new He;let wt=null;const Bt=new He(0,0,0,0);return{setMask:function(Mt){wt!==Mt&&!X&&(o.colorMask(Mt,Mt,Mt,Mt),wt=Mt)},setLocked:function(Mt){X=Mt},setClear:function(Mt,_t,Ft,ae,Le){Le===!0&&(Mt*=ae,_t*=ae,Ft*=ae),bt.set(Mt,_t,Ft,ae),Bt.equals(bt)===!1&&(o.clearColor(Mt,_t,Ft,ae),Bt.copy(bt))},reset:function(){X=!1,wt=null,Bt.set(-1,0,0,0)}}}function s(){let X=!1,bt=!1,wt=null,Bt=null,Mt=null;return{setReversed:function(_t){if(bt!==_t){const Ft=e.get("EXT_clip_control");_t?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),bt=_t;const ae=Mt;Mt=null,this.setClear(ae)}},getReversed:function(){return bt},setTest:function(_t){_t?ct(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(_t){wt!==_t&&!X&&(o.depthMask(_t),wt=_t)},setFunc:function(_t){if(bt&&(_t=S1[_t]),Bt!==_t){switch(_t){case Uh:o.depthFunc(o.NEVER);break;case Nh:o.depthFunc(o.ALWAYS);break;case Lh:o.depthFunc(o.LESS);break;case xr:o.depthFunc(o.LEQUAL);break;case Oh:o.depthFunc(o.EQUAL);break;case zh:o.depthFunc(o.GEQUAL);break;case Ph:o.depthFunc(o.GREATER);break;case Bh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=_t}},setLocked:function(_t){X=_t},setClear:function(_t){Mt!==_t&&(bt&&(_t=1-_t),o.clearDepth(_t),Mt=_t)},reset:function(){X=!1,wt=null,Bt=null,Mt=null,bt=!1}}}function l(){let X=!1,bt=null,wt=null,Bt=null,Mt=null,_t=null,Ft=null,ae=null,Le=null;return{setTest:function(Me){X||(Me?ct(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(Me){bt!==Me&&!X&&(o.stencilMask(Me),bt=Me)},setFunc:function(Me,Cn,Jn){(wt!==Me||Bt!==Cn||Mt!==Jn)&&(o.stencilFunc(Me,Cn,Jn),wt=Me,Bt=Cn,Mt=Jn)},setOp:function(Me,Cn,Jn){(_t!==Me||Ft!==Cn||ae!==Jn)&&(o.stencilOp(Me,Cn,Jn),_t=Me,Ft=Cn,ae=Jn)},setLocked:function(Me){X=Me},setClear:function(Me){Le!==Me&&(o.clearStencil(Me),Le=Me)},reset:function(){X=!1,bt=null,wt=null,Bt=null,Mt=null,_t=null,Ft=null,ae=null,Le=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let x={},v={},S=new WeakMap,M=[],b=null,R=!1,y=null,_=null,F=null,z=null,D=null,k=null,G=null,B=new Te(0,0,0),K=0,w=!1,C=null,H=null,et=null,lt=null,gt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Z=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),O=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),O=Z>=2);let xt=null,Et={};const N=o.getParameter(o.SCISSOR_BOX),it=o.getParameter(o.VIEWPORT),yt=new He().fromArray(N),At=new He().fromArray(it);function Ot(X,bt,wt,Bt){const Mt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(X,_t),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ft=0;Ft<wt;Ft++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(bt+Ft,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return _t}const at={};at[o.TEXTURE_2D]=Ot(o.TEXTURE_2D,o.TEXTURE_2D,1),at[o.TEXTURE_CUBE_MAP]=Ot(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[o.TEXTURE_2D_ARRAY]=Ot(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),at[o.TEXTURE_3D]=Ot(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ct(o.DEPTH_TEST),h.setFunc(xr),te(!1),Wt(M0),ct(o.CULL_FACE),be(Pa);function ct(X){x[X]!==!0&&(o.enable(X),x[X]=!0)}function Dt(X){x[X]!==!1&&(o.disable(X),x[X]=!1)}function It(X,bt){return v[X]!==bt?(o.bindFramebuffer(X,bt),v[X]=bt,X===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=bt),X===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function Xt(X,bt){let wt=M,Bt=!1;if(X){wt=S.get(bt),wt===void 0&&(wt=[],S.set(bt,wt));const Mt=X.textures;if(wt.length!==Mt.length||wt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Ft=Mt.length;_t<Ft;_t++)wt[_t]=o.COLOR_ATTACHMENT0+_t;wt.length=Mt.length,Bt=!0}}else wt[0]!==o.BACK&&(wt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(wt)}function he(X){return b!==X?(o.useProgram(X),b=X,!0):!1}const nn={[ps]:o.FUNC_ADD,[TS]:o.FUNC_SUBTRACT,[bS]:o.FUNC_REVERSE_SUBTRACT};nn[AS]=o.MIN,nn[RS]=o.MAX;const I={[CS]:o.ZERO,[wS]:o.ONE,[DS]:o.SRC_COLOR,[wh]:o.SRC_ALPHA,[PS]:o.SRC_ALPHA_SATURATE,[OS]:o.DST_COLOR,[NS]:o.DST_ALPHA,[US]:o.ONE_MINUS_SRC_COLOR,[Dh]:o.ONE_MINUS_SRC_ALPHA,[zS]:o.ONE_MINUS_DST_COLOR,[LS]:o.ONE_MINUS_DST_ALPHA,[BS]:o.CONSTANT_COLOR,[IS]:o.ONE_MINUS_CONSTANT_COLOR,[FS]:o.CONSTANT_ALPHA,[HS]:o.ONE_MINUS_CONSTANT_ALPHA};function be(X,bt,wt,Bt,Mt,_t,Ft,ae,Le,Me){if(X===Pa){R===!0&&(Dt(o.BLEND),R=!1);return}if(R===!1&&(ct(o.BLEND),R=!0),X!==ES){if(X!==y||Me!==w){if((_!==ps||D!==ps)&&(o.blendEquation(o.FUNC_ADD),_=ps,D=ps),Me)switch(X){case _r:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rc:o.blendFunc(o.ONE,o.ONE);break;case E0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case T0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case _r:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case E0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case T0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}F=null,z=null,k=null,G=null,B.set(0,0,0),K=0,y=X,w=Me}return}Mt=Mt||bt,_t=_t||wt,Ft=Ft||Bt,(bt!==_||Mt!==D)&&(o.blendEquationSeparate(nn[bt],nn[Mt]),_=bt,D=Mt),(wt!==F||Bt!==z||_t!==k||Ft!==G)&&(o.blendFuncSeparate(I[wt],I[Bt],I[_t],I[Ft]),F=wt,z=Bt,k=_t,G=Ft),(ae.equals(B)===!1||Le!==K)&&(o.blendColor(ae.r,ae.g,ae.b,Le),B.copy(ae),K=Le),y=X,w=!1}function ie(X,bt){X.side===ta?Dt(o.CULL_FACE):ct(o.CULL_FACE);let wt=X.side===Fn;bt&&(wt=!wt),te(wt),X.blending===_r&&X.transparent===!1?be(Pa):be(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const Bt=X.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),kt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function te(X){C!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),C=X)}function Wt(X){X!==SS?(ct(o.CULL_FACE),X!==H&&(X===M0?o.cullFace(o.BACK):X===yS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),H=X}function Ge(X){X!==et&&(O&&o.lineWidth(X),et=X)}function kt(X,bt,wt){X?(ct(o.POLYGON_OFFSET_FILL),(lt!==bt||gt!==wt)&&(o.polygonOffset(bt,wt),lt=bt,gt=wt)):Dt(o.POLYGON_OFFSET_FILL)}function se(X){X?ct(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function Ke(X){X===void 0&&(X=o.TEXTURE0+ft-1),xt!==X&&(o.activeTexture(X),xt=X)}function Ze(X,bt,wt){wt===void 0&&(xt===null?wt=o.TEXTURE0+ft-1:wt=xt);let Bt=Et[wt];Bt===void 0&&(Bt={type:void 0,texture:void 0},Et[wt]=Bt),(Bt.type!==X||Bt.texture!==bt)&&(xt!==wt&&(o.activeTexture(wt),xt=wt),o.bindTexture(X,bt||at[X]),Bt.type=X,Bt.texture=bt)}function U(){const X=Et[xt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function St(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(X){yt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),yt.copy(X))}function Kt(X){At.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),At.copy(X))}function Pt(X,bt){let wt=p.get(bt);wt===void 0&&(wt=new WeakMap,p.set(bt,wt));let Bt=wt.get(X);Bt===void 0&&(Bt=o.getUniformBlockIndex(bt,X.name),wt.set(X,Bt))}function Ut(X,bt){const Bt=p.get(bt).get(X);m.get(bt)!==Bt&&(o.uniformBlockBinding(bt,Bt,X.__bindingPointIndex),m.set(bt,Bt))}function oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},xt=null,Et={},v={},S=new WeakMap,M=[],b=null,R=!1,y=null,_=null,F=null,z=null,D=null,k=null,G=null,B=new Te(0,0,0),K=0,w=!1,C=null,H=null,et=null,lt=null,gt=null,yt.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ct,disable:Dt,bindFramebuffer:It,drawBuffers:Xt,useProgram:he,setBlending:be,setMaterial:ie,setFlipSided:te,setCullFace:Wt,setLineWidth:Ge,setPolygonOffset:kt,setScissorTest:se,activeTexture:Ke,bindTexture:Ze,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:tt,texImage2D:Yt,texImage3D:Tt,updateUBOMapping:Pt,uniformBlockBinding:Ut,texStorage2D:Rt,texStorage3D:qt,texSubImage2D:dt,texSubImage3D:St,compressedTexSubImage2D:ut,compressedTexSubImage3D:Zt,scissor:Ct,viewport:Kt,reset:oe}}function M1(o,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new De,x=new WeakMap;let v;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,E){return M?new OffscreenCanvas(U,E):Dc("canvas")}function R(U,E,tt){let dt=1;const St=Ze(U);if((St.width>tt||St.height>tt)&&(dt=tt/Math.max(St.width,St.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ut=Math.floor(dt*St.width),Zt=Math.floor(dt*St.height);v===void 0&&(v=b(ut,Zt));const Rt=E?b(ut,Zt):v;return Rt.width=ut,Rt.height=Zt,Rt.getContext("2d").drawImage(U,0,0,ut,Zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ut+"x"+Zt+")."),Rt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),U;return U}function y(U){return U.generateMipmaps}function _(U){o.generateMipmap(U)}function F(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(U,E,tt,dt,St=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ut=E;if(E===o.RED&&(tt===o.FLOAT&&(ut=o.R32F),tt===o.HALF_FLOAT&&(ut=o.R16F),tt===o.UNSIGNED_BYTE&&(ut=o.R8)),E===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.R8UI),tt===o.UNSIGNED_SHORT&&(ut=o.R16UI),tt===o.UNSIGNED_INT&&(ut=o.R32UI),tt===o.BYTE&&(ut=o.R8I),tt===o.SHORT&&(ut=o.R16I),tt===o.INT&&(ut=o.R32I)),E===o.RG&&(tt===o.FLOAT&&(ut=o.RG32F),tt===o.HALF_FLOAT&&(ut=o.RG16F),tt===o.UNSIGNED_BYTE&&(ut=o.RG8)),E===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ut=o.RG16UI),tt===o.UNSIGNED_INT&&(ut=o.RG32UI),tt===o.BYTE&&(ut=o.RG8I),tt===o.SHORT&&(ut=o.RG16I),tt===o.INT&&(ut=o.RG32I)),E===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),tt===o.UNSIGNED_INT&&(ut=o.RGB32UI),tt===o.BYTE&&(ut=o.RGB8I),tt===o.SHORT&&(ut=o.RGB16I),tt===o.INT&&(ut=o.RGB32I)),E===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ut=o.RGBA32UI),tt===o.BYTE&&(ut=o.RGBA8I),tt===o.SHORT&&(ut=o.RGBA16I),tt===o.INT&&(ut=o.RGBA32I)),E===o.RGB&&(tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),tt===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),E===o.RGBA){const Zt=St?Cc:Ce.getTransfer(dt);tt===o.FLOAT&&(ut=o.RGBA32F),tt===o.HALF_FLOAT&&(ut=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ut=Zt===Fe?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function D(U,E){let tt;return U?E===null||E===vs||E===wo?tt=o.DEPTH24_STENCIL8:E===ea?tt=o.DEPTH32F_STENCIL8:E===Co&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===vs||E===wo?tt=o.DEPTH_COMPONENT24:E===ea?tt=o.DEPTH_COMPONENT32F:E===Co&&(tt=o.DEPTH_COMPONENT16),tt}function k(U,E){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==vi&&U.minFilter!==Ri?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function G(U){const E=U.target;E.removeEventListener("dispose",G),K(E),E.isVideoTexture&&x.delete(E)}function B(U){const E=U.target;E.removeEventListener("dispose",B),C(E)}function K(U){const E=s.get(U);if(E.__webglInit===void 0)return;const tt=U.source,dt=S.get(tt);if(dt){const St=dt[E.__cacheKey];St.usedTimes--,St.usedTimes===0&&w(U),Object.keys(dt).length===0&&S.delete(tt)}s.remove(U)}function w(U){const E=s.get(U);o.deleteTexture(E.__webglTexture);const tt=U.source,dt=S.get(tt);delete dt[E.__cacheKey],h.memory.textures--}function C(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(E.__webglFramebuffer[dt]))for(let St=0;St<E.__webglFramebuffer[dt].length;St++)o.deleteFramebuffer(E.__webglFramebuffer[dt][St]);else o.deleteFramebuffer(E.__webglFramebuffer[dt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[dt])}else{if(Array.isArray(E.__webglFramebuffer))for(let dt=0;dt<E.__webglFramebuffer.length;dt++)o.deleteFramebuffer(E.__webglFramebuffer[dt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let dt=0;dt<E.__webglColorRenderbuffer.length;dt++)E.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[dt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=U.textures;for(let dt=0,St=tt.length;dt<St;dt++){const ut=s.get(tt[dt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),s.remove(tt[dt])}s.remove(U)}let H=0;function et(){H=0}function lt(){const U=H;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),H+=1,U}function gt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ft(U,E){const tt=s.get(U);if(U.isVideoTexture&&se(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&tt.__version!==U.version){const dt=U.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(tt,U,E);return}}else U.isExternalTexture&&(tt.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+E)}function O(U,E){const tt=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){at(tt,U,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+E)}function Z(U,E){const tt=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){at(tt,U,E);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+E)}function Y(U,E){const tt=s.get(U);if(U.version>0&&tt.__version!==U.version){ct(tt,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+E)}const xt={[Hh]:o.REPEAT,[gs]:o.CLAMP_TO_EDGE,[Gh]:o.MIRRORED_REPEAT},Et={[vi]:o.NEAREST,[KS]:o.NEAREST_MIPMAP_NEAREST,[Zl]:o.NEAREST_MIPMAP_LINEAR,[Ri]:o.LINEAR,[Zf]:o.LINEAR_MIPMAP_NEAREST,[_s]:o.LINEAR_MIPMAP_LINEAR},N={[ey]:o.NEVER,[oy]:o.ALWAYS,[ny]:o.LESS,[P_]:o.LEQUAL,[iy]:o.EQUAL,[ry]:o.GEQUAL,[ay]:o.GREATER,[sy]:o.NOTEQUAL};function it(U,E){if(E.type===ea&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ri||E.magFilter===Zf||E.magFilter===Zl||E.magFilter===_s||E.minFilter===Ri||E.minFilter===Zf||E.minFilter===Zl||E.minFilter===_s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,xt[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,xt[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,xt[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Et[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Et[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vi||E.minFilter!==Zl&&E.minFilter!==_s||E.type===ea&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function yt(U,E){let tt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",G));const dt=E.source;let St=S.get(dt);St===void 0&&(St={},S.set(dt,St));const ut=gt(E);if(ut!==U.__cacheKey){St[ut]===void 0&&(St[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),St[ut].usedTimes++;const Zt=St[U.__cacheKey];Zt!==void 0&&(St[U.__cacheKey].usedTimes--,Zt.usedTimes===0&&w(E)),U.__cacheKey=ut,U.__webglTexture=St[ut].texture}return tt}function At(U,E,tt){return Math.floor(Math.floor(U/tt)/E)}function Ot(U,E,tt,dt){const ut=U.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,tt,dt,E.data);else{ut.sort((Tt,Ct)=>Tt.start-Ct.start);let Zt=0;for(let Tt=1;Tt<ut.length;Tt++){const Ct=ut[Zt],Kt=ut[Tt],Pt=Ct.start+Ct.count,Ut=At(Kt.start,E.width,4),oe=At(Ct.start,E.width,4);Kt.start<=Pt+1&&Ut===oe&&At(Kt.start+Kt.count-1,E.width,4)===Ut?Ct.count=Math.max(Ct.count,Kt.start+Kt.count-Ct.start):(++Zt,ut[Zt]=Kt)}ut.length=Zt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),qt=o.getParameter(o.UNPACK_SKIP_PIXELS),Yt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Tt=0,Ct=ut.length;Tt<Ct;Tt++){const Kt=ut[Tt],Pt=Math.floor(Kt.start/4),Ut=Math.ceil(Kt.count/4),oe=Pt%E.width,X=Math.floor(Pt/E.width),bt=Ut,wt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,oe),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,oe,X,bt,wt,tt,dt,E.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Yt)}}function at(U,E,tt){let dt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(dt=o.TEXTURE_3D);const St=yt(U,E),ut=E.source;i.bindTexture(dt,U.__webglTexture,o.TEXTURE0+tt);const Zt=s.get(ut);if(ut.version!==Zt.__version||St===!0){i.activeTexture(o.TEXTURE0+tt);const Rt=Ce.getPrimaries(Ce.workingColorSpace),qt=E.colorSpace===za?null:Ce.getPrimaries(E.colorSpace),Yt=E.colorSpace===za||Rt===qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let Tt=R(E.image,!1,l.maxTextureSize);Tt=Ke(E,Tt);const Ct=u.convert(E.format,E.colorSpace),Kt=u.convert(E.type);let Pt=z(E.internalFormat,Ct,Kt,E.colorSpace,E.isVideoTexture);it(dt,E);let Ut;const oe=E.mipmaps,X=E.isVideoTexture!==!0,bt=Zt.__version===void 0||St===!0,wt=ut.dataReady,Bt=k(E,Tt);if(E.isDepthTexture)Pt=D(E.format===Uo,E.type),bt&&(X?i.texStorage2D(o.TEXTURE_2D,1,Pt,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,Pt,Tt.width,Tt.height,0,Ct,Kt,null));else if(E.isDataTexture)if(oe.length>0){X&&bt&&i.texStorage2D(o.TEXTURE_2D,Bt,Pt,oe[0].width,oe[0].height);for(let Mt=0,_t=oe.length;Mt<_t;Mt++)Ut=oe[Mt],X?wt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,Ct,Kt,Ut.data):i.texImage2D(o.TEXTURE_2D,Mt,Pt,Ut.width,Ut.height,0,Ct,Kt,Ut.data);E.generateMipmaps=!1}else X?(bt&&i.texStorage2D(o.TEXTURE_2D,Bt,Pt,Tt.width,Tt.height),wt&&Ot(E,Tt,Ct,Kt)):i.texImage2D(o.TEXTURE_2D,0,Pt,Tt.width,Tt.height,0,Ct,Kt,Tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Pt,oe[0].width,oe[0].height,Tt.depth);for(let Mt=0,_t=oe.length;Mt<_t;Mt++)if(Ut=oe[Mt],E.format!==_i)if(Ct!==null)if(X){if(wt)if(E.layerUpdates.size>0){const Ft=$0(Ut.width,Ut.height,E.format,E.type);for(const ae of E.layerUpdates){const Le=Ut.data.subarray(ae*Ft/Ut.data.BYTES_PER_ELEMENT,(ae+1)*Ft/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ae,Ut.width,Ut.height,1,Ct,Le)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,Tt.depth,Ct,Ut.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Pt,Ut.width,Ut.height,Tt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?wt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,Tt.depth,Ct,Kt,Ut.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Pt,Ut.width,Ut.height,Tt.depth,0,Ct,Kt,Ut.data)}else{X&&bt&&i.texStorage2D(o.TEXTURE_2D,Bt,Pt,oe[0].width,oe[0].height);for(let Mt=0,_t=oe.length;Mt<_t;Mt++)Ut=oe[Mt],E.format!==_i?Ct!==null?X?wt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,Ct,Ut.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Pt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?wt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,Ct,Kt,Ut.data):i.texImage2D(o.TEXTURE_2D,Mt,Pt,Ut.width,Ut.height,0,Ct,Kt,Ut.data)}else if(E.isDataArrayTexture)if(X){if(bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Pt,Tt.width,Tt.height,Tt.depth),wt)if(E.layerUpdates.size>0){const Mt=$0(Tt.width,Tt.height,E.format,E.type);for(const _t of E.layerUpdates){const Ft=Tt.data.subarray(_t*Mt/Tt.data.BYTES_PER_ELEMENT,(_t+1)*Mt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Tt.width,Tt.height,1,Ct,Kt,Ft)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ct,Kt,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pt,Tt.width,Tt.height,Tt.depth,0,Ct,Kt,Tt.data);else if(E.isData3DTexture)X?(bt&&i.texStorage3D(o.TEXTURE_3D,Bt,Pt,Tt.width,Tt.height,Tt.depth),wt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ct,Kt,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,Pt,Tt.width,Tt.height,Tt.depth,0,Ct,Kt,Tt.data);else if(E.isFramebufferTexture){if(bt)if(X)i.texStorage2D(o.TEXTURE_2D,Bt,Pt,Tt.width,Tt.height);else{let Mt=Tt.width,_t=Tt.height;for(let Ft=0;Ft<Bt;Ft++)i.texImage2D(o.TEXTURE_2D,Ft,Pt,Mt,_t,0,Ct,Kt,null),Mt>>=1,_t>>=1}}else if(oe.length>0){if(X&&bt){const Mt=Ze(oe[0]);i.texStorage2D(o.TEXTURE_2D,Bt,Pt,Mt.width,Mt.height)}for(let Mt=0,_t=oe.length;Mt<_t;Mt++)Ut=oe[Mt],X?wt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ct,Kt,Ut):i.texImage2D(o.TEXTURE_2D,Mt,Pt,Ct,Kt,Ut);E.generateMipmaps=!1}else if(X){if(bt){const Mt=Ze(Tt);i.texStorage2D(o.TEXTURE_2D,Bt,Pt,Mt.width,Mt.height)}wt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ct,Kt,Tt)}else i.texImage2D(o.TEXTURE_2D,0,Pt,Ct,Kt,Tt);y(E)&&_(dt),Zt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ct(U,E,tt){if(E.image.length!==6)return;const dt=yt(U,E),St=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+tt);const ut=s.get(St);if(St.version!==ut.__version||dt===!0){i.activeTexture(o.TEXTURE0+tt);const Zt=Ce.getPrimaries(Ce.workingColorSpace),Rt=E.colorSpace===za?null:Ce.getPrimaries(E.colorSpace),qt=E.colorSpace===za||Zt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const Yt=E.isCompressedTexture||E.image[0].isCompressedTexture,Tt=E.image[0]&&E.image[0].isDataTexture,Ct=[];for(let _t=0;_t<6;_t++)!Yt&&!Tt?Ct[_t]=R(E.image[_t],!0,l.maxCubemapSize):Ct[_t]=Tt?E.image[_t].image:E.image[_t],Ct[_t]=Ke(E,Ct[_t]);const Kt=Ct[0],Pt=u.convert(E.format,E.colorSpace),Ut=u.convert(E.type),oe=z(E.internalFormat,Pt,Ut,E.colorSpace),X=E.isVideoTexture!==!0,bt=ut.__version===void 0||dt===!0,wt=St.dataReady;let Bt=k(E,Kt);it(o.TEXTURE_CUBE_MAP,E);let Mt;if(Yt){X&&bt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,oe,Kt.width,Kt.height);for(let _t=0;_t<6;_t++){Mt=Ct[_t].mipmaps;for(let Ft=0;Ft<Mt.length;Ft++){const ae=Mt[Ft];E.format!==_i?Pt!==null?X?wt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,ae.width,ae.height,Pt,ae.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,oe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,ae.width,ae.height,Pt,Ut,ae.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,oe,ae.width,ae.height,0,Pt,Ut,ae.data)}}}else{if(Mt=E.mipmaps,X&&bt){Mt.length>0&&Bt++;const _t=Ze(Ct[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,oe,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Tt){X?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ct[_t].width,Ct[_t].height,Pt,Ut,Ct[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,oe,Ct[_t].width,Ct[_t].height,0,Pt,Ut,Ct[_t].data);for(let Ft=0;Ft<Mt.length;Ft++){const Le=Mt[Ft].image[_t].image;X?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,Le.width,Le.height,Pt,Ut,Le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,oe,Le.width,Le.height,0,Pt,Ut,Le.data)}}else{X?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Pt,Ut,Ct[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,oe,Pt,Ut,Ct[_t]);for(let Ft=0;Ft<Mt.length;Ft++){const ae=Mt[Ft];X?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,Pt,Ut,ae.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,oe,Pt,Ut,ae.image[_t])}}}y(E)&&_(o.TEXTURE_CUBE_MAP),ut.__version=St.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Dt(U,E,tt,dt,St,ut){const Zt=u.convert(tt.format,tt.colorSpace),Rt=u.convert(tt.type),qt=z(tt.internalFormat,Zt,Rt,tt.colorSpace),Yt=s.get(E),Tt=s.get(tt);if(Tt.__renderTarget=E,!Yt.__hasExternalTextures){const Ct=Math.max(1,E.width>>ut),Kt=Math.max(1,E.height>>ut);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,ut,qt,Ct,Kt,E.depth,0,Zt,Rt,null):i.texImage2D(St,ut,qt,Ct,Kt,0,Zt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),kt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,St,Tt.__webglTexture,0,Ge(E)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,St,Tt.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function It(U,E,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const dt=E.depthTexture,St=dt&&dt.isDepthTexture?dt.type:null,ut=D(E.stencilBuffer,St),Zt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=Ge(E);kt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,ut,E.width,E.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,ut,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ut,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,U)}else{const dt=E.textures;for(let St=0;St<dt.length;St++){const ut=dt[St],Zt=u.convert(ut.format,ut.colorSpace),Rt=u.convert(ut.type),qt=z(ut.internalFormat,Zt,Rt,ut.colorSpace),Yt=Ge(E);tt&&kt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,qt,E.width,E.height):kt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Yt,qt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,qt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Xt(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(E.depthTexture);dt.__renderTarget=E,(!dt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ft(E.depthTexture,0);const St=dt.__webglTexture,ut=Ge(E);if(E.depthTexture.format===Do)kt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(E.depthTexture.format===Uo)kt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function he(U){const E=s.get(U),tt=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),dt){const St=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,dt.removeEventListener("dispose",St)};dt.addEventListener("dispose",St),E.__depthDisposeCallback=St}E.__boundDepthTexture=dt}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const dt=U.texture.mipmaps;dt&&dt.length>0?Xt(E.__webglFramebuffer[0],U):Xt(E.__webglFramebuffer,U)}else if(tt){E.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[dt]),E.__webglDepthbuffer[dt]===void 0)E.__webglDepthbuffer[dt]=o.createRenderbuffer(),It(E.__webglDepthbuffer[dt],U,!1);else{const St=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ut)}}else{const dt=U.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),It(E.__webglDepthbuffer,U,!1);else{const St=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function nn(U,E,tt){const dt=s.get(U);E!==void 0&&Dt(dt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&he(U)}function I(U){const E=U.texture,tt=s.get(U),dt=s.get(E);U.addEventListener("dispose",B);const St=U.textures,ut=U.isWebGLCubeRenderTarget===!0,Zt=St.length>1;if(Zt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=E.version,h.memory.textures++),ut){tt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[Rt]=[];for(let qt=0;qt<E.mipmaps.length;qt++)tt.__webglFramebuffer[Rt][qt]=o.createFramebuffer()}else tt.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)tt.__webglFramebuffer[Rt]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let Rt=0,qt=St.length;Rt<qt;Rt++){const Yt=s.get(St[Rt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&kt(U)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<St.length;Rt++){const qt=St[Rt];tt.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt]);const Yt=u.convert(qt.format,qt.colorSpace),Tt=u.convert(qt.type),Ct=z(qt.internalFormat,Yt,Tt,qt.colorSpace,U.isXRRenderTarget===!0),Kt=Ge(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Ct,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),It(tt.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),it(o.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let qt=0;qt<E.mipmaps.length;qt++)Dt(tt.__webglFramebuffer[Rt][qt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,qt);else Dt(tt.__webglFramebuffer[Rt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Rt=0,qt=St.length;Rt<qt;Rt++){const Yt=St[Rt],Tt=s.get(Yt);let Ct=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,Tt.__webglTexture),it(Ct,Yt),Dt(tt.__webglFramebuffer,U,Yt,o.COLOR_ATTACHMENT0+Rt,Ct,0),y(Yt)&&_(Ct)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Rt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,dt.__webglTexture),it(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let qt=0;qt<E.mipmaps.length;qt++)Dt(tt.__webglFramebuffer[qt],U,E,o.COLOR_ATTACHMENT0,Rt,qt);else Dt(tt.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,Rt,0);y(E)&&_(Rt),i.unbindTexture()}U.depthBuffer&&he(U)}function be(U){const E=U.textures;for(let tt=0,dt=E.length;tt<dt;tt++){const St=E[tt];if(y(St)){const ut=F(U),Zt=s.get(St).__webglTexture;i.bindTexture(ut,Zt),_(ut),i.unbindTexture()}}}const ie=[],te=[];function Wt(U){if(U.samples>0){if(kt(U)===!1){const E=U.textures,tt=U.width,dt=U.height;let St=o.COLOR_BUFFER_BIT;const ut=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=s.get(U),Rt=E.length>1;if(Rt)for(let Yt=0;Yt<E.length;Yt++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const qt=U.texture.mipmaps;qt&&qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let Yt=0;Yt<E.length;Yt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[Yt]);const Tt=s.get(E[Yt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,tt,dt,0,0,tt,dt,St,o.NEAREST),m===!0&&(ie.length=0,te.length=0,ie.push(o.COLOR_ATTACHMENT0+Yt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ie.push(ut),te.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,te)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Yt=0;Yt<E.length;Yt++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[Yt]);const Tt=s.get(E[Yt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,Tt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ge(U){return Math.min(l.maxSamples,U.samples)}function kt(U){const E=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function se(U){const E=h.render.frame;x.get(U)!==E&&(x.set(U,E),U.update())}function Ke(U,E){const tt=U.colorSpace,dt=U.format,St=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||tt!==Mr&&tt!==za&&(Ce.getTransfer(tt)===Fe?(dt!==_i||St!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),E}function Ze(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=et,this.setTexture2D=ft,this.setTexture2DArray=O,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=nn,this.setupRenderTarget=I,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=kt}function E1(o,e){function i(s,l=za){let u;const h=Ce.getTransfer(l);if(s===wi)return o.UNSIGNED_BYTE;if(s===Md)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Ed)return o.UNSIGNED_SHORT_5_5_5_1;if(s===D_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===U_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===C_)return o.BYTE;if(s===w_)return o.SHORT;if(s===Co)return o.UNSIGNED_SHORT;if(s===yd)return o.INT;if(s===vs)return o.UNSIGNED_INT;if(s===ea)return o.FLOAT;if(s===Lo)return o.HALF_FLOAT;if(s===N_)return o.ALPHA;if(s===L_)return o.RGB;if(s===_i)return o.RGBA;if(s===Do)return o.DEPTH_COMPONENT;if(s===Uo)return o.DEPTH_STENCIL;if(s===O_)return o.RED;if(s===Td)return o.RED_INTEGER;if(s===z_)return o.RG;if(s===bd)return o.RG_INTEGER;if(s===Ad)return o.RGBA_INTEGER;if(s===Mc||s===Ec||s===Tc||s===bc)if(h===Fe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Mc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Mc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ec)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Tc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vh||s===kh||s===Xh||s===Wh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Vh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jh||s===qh||s===Yh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===jh||s===qh)return h===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Yh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd||s===od||s===ld)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Zh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Kh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$h)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===td)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ed)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===nd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===id)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ad)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===od)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ld)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===cd||s===ud||s===fd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===cd)return h===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ud)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===fd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===hd||s===dd||s===pd||s===md)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===hd)return u.COMPRESSED_RED_RGTC1_EXT;if(s===dd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===pd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===md)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===wo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const T1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class A1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new K_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ha({vertexShader:T1,fragmentShader:b1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new na(new Oc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class R1 extends Tr{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,x=null,v=null,S=null,M=null,b=null;const R=typeof XRWebGLBinding<"u",y=new A1,_={},F=i.getContextAttributes();let z=null,D=null;const k=[],G=[],B=new De;let K=null;const w=new Qn;w.viewport=new He;const C=new Qn;C.viewport=new He;const H=[w,C],et=new qy;let lt=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let ct=k[at];return ct===void 0&&(ct=new vh,k[at]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(at){let ct=k[at];return ct===void 0&&(ct=new vh,k[at]=ct),ct.getGripSpace()},this.getHand=function(at){let ct=k[at];return ct===void 0&&(ct=new vh,k[at]=ct),ct.getHandSpace()};function ft(at){const ct=G.indexOf(at.inputSource);if(ct===-1)return;const Dt=k[ct];Dt!==void 0&&(Dt.update(at.inputSource,at.frame,p||h),Dt.dispatchEvent({type:at.type,data:at.inputSource}))}function O(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",Z);for(let at=0;at<k.length;at++){const ct=G[at];ct!==null&&(G[at]=null,k[at].disconnect(ct))}lt=null,gt=null,y.reset();for(const at in _)delete _[at];e.setRenderTarget(z),M=null,S=null,v=null,l=null,D=null,Ot.stop(),s.isPresenting=!1,e.setPixelRatio(K),e.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){u=at,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){d=at,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(at){p=at},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(z=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",O),l.addEventListener("inputsourceschange",Z),F.xrCompatible!==!0&&await i.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(B),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,It=null,Xt=null;F.depth&&(Xt=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=F.stencil?Uo:Do,It=F.stencil?wo:vs);const he={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:u};v=this.getBinding(),S=v.createProjectionLayer(he),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),D=new xs(S.textureWidth,S.textureHeight,{format:_i,type:wi,depthTexture:new Z_(S.textureWidth,S.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Dt={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new xs(M.framebufferWidth,M.framebufferHeight,{format:_i,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ot.setContext(l),Ot.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(at){for(let ct=0;ct<at.removed.length;ct++){const Dt=at.removed[ct],It=G.indexOf(Dt);It>=0&&(G[It]=null,k[It].disconnect(Dt))}for(let ct=0;ct<at.added.length;ct++){const Dt=at.added[ct];let It=G.indexOf(Dt);if(It===-1){for(let he=0;he<k.length;he++)if(he>=G.length){G.push(Dt),It=he;break}else if(G[he]===null){G[he]=Dt,It=he;break}if(It===-1)break}const Xt=k[It];Xt&&Xt.connect(Dt)}}const Y=new Q,xt=new Q;function Et(at,ct,Dt){Y.setFromMatrixPosition(ct.matrixWorld),xt.setFromMatrixPosition(Dt.matrixWorld);const It=Y.distanceTo(xt),Xt=ct.projectionMatrix.elements,he=Dt.projectionMatrix.elements,nn=Xt[14]/(Xt[10]-1),I=Xt[14]/(Xt[10]+1),be=(Xt[9]+1)/Xt[5],ie=(Xt[9]-1)/Xt[5],te=(Xt[8]-1)/Xt[0],Wt=(he[8]+1)/he[0],Ge=nn*te,kt=nn*Wt,se=It/(-te+Wt),Ke=se*-te;if(ct.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Ke),at.translateZ(se),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Xt[10]===-1)at.projectionMatrix.copy(ct.projectionMatrix),at.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Ze=nn+se,U=I+se,E=Ge-Ke,tt=kt+(It-Ke),dt=be*I/U*Ze,St=ie*I/U*Ze;at.projectionMatrix.makePerspective(E,tt,dt,St,Ze,U),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function N(at,ct){ct===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(ct.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let ct=at.near,Dt=at.far;y.texture!==null&&(y.depthNear>0&&(ct=y.depthNear),y.depthFar>0&&(Dt=y.depthFar)),et.near=C.near=w.near=ct,et.far=C.far=w.far=Dt,(lt!==et.near||gt!==et.far)&&(l.updateRenderState({depthNear:et.near,depthFar:et.far}),lt=et.near,gt=et.far),et.layers.mask=at.layers.mask|6,w.layers.mask=et.layers.mask&3,C.layers.mask=et.layers.mask&5;const It=at.parent,Xt=et.cameras;N(et,It);for(let he=0;he<Xt.length;he++)N(Xt[he],It);Xt.length===2?Et(et,w,C):et.projectionMatrix.copy(w.projectionMatrix),it(at,et,It)};function it(at,ct,Dt){Dt===null?at.matrix.copy(ct.matrixWorld):(at.matrix.copy(Dt.matrixWorld),at.matrix.invert(),at.matrix.multiply(ct.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(ct.projectionMatrix),at.projectionMatrixInverse.copy(ct.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=gd*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(at){m=at,S!==null&&(S.fixedFoveation=at),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=at)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(et)},this.getCameraTexture=function(at){return _[at]};let yt=null;function At(at,ct){if(x=ct.getViewerPose(p||h),b=ct,x!==null){const Dt=x.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let It=!1;Dt.length!==et.cameras.length&&(et.cameras.length=0,It=!0);for(let I=0;I<Dt.length;I++){const be=Dt[I];let ie=null;if(M!==null)ie=M.getViewport(be);else{const Wt=v.getViewSubImage(S,be);ie=Wt.viewport,I===0&&(e.setRenderTargetTextures(D,Wt.colorTexture,Wt.depthStencilTexture),e.setRenderTarget(D))}let te=H[I];te===void 0&&(te=new Qn,te.layers.enable(I),te.viewport=new He,H[I]=te),te.matrix.fromArray(be.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(be.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ie.x,ie.y,ie.width,ie.height),I===0&&(et.matrix.copy(te.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),It===!0&&et.cameras.push(te)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){v=s.getBinding();const I=v.getDepthInformation(Dt[0]);I&&I.isValid&&I.texture&&y.init(I,l.renderState)}if(Xt&&Xt.includes("camera-access")&&R){e.state.unbindTexture(),v=s.getBinding();for(let I=0;I<Dt.length;I++){const be=Dt[I].camera;if(be){let ie=_[be];ie||(ie=new K_,_[be]=ie);const te=v.getCameraImage(be);ie.sourceTexture=te}}}}for(let Dt=0;Dt<k.length;Dt++){const It=G[Dt],Xt=k[Dt];It!==null&&Xt!==void 0&&Xt.update(It,ct,p||h)}yt&&yt(at,ct),ct.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ct}),b=null}const Ot=new J_;Ot.setAnimationLoop(At),this.setAnimationLoop=function(at){yt=at},this.dispose=function(){}}}const fs=new aa,C1=new Ye;function w1(o,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,X_(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,F,z,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),x(y,_)):_.isMeshStandardMaterial?(u(y,_),S(y,_),_.isMeshPhysicalMaterial&&M(y,_,D)):_.isMeshMatcapMaterial?(u(y,_),b(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),R(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,F,z):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Fn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Fn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const F=e.get(_),z=F.envMap,D=F.envMapRotation;z&&(y.envMap.value=z,fs.copy(D),fs.x*=-1,fs.y*=-1,fs.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),y.envMapRotation.value.setFromMatrix4(C1.makeRotationFromEuler(fs)),y.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,F,z){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*F,y.scale.value=z*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function x(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,F){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=F.texture,y.transmissionSamplerSize.value.set(F.width,F.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,_){_.matcap&&(y.matcap.value=_.matcap)}function R(y,_){const F=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(F.matrixWorld),y.nearDistance.value=F.shadow.camera.near,y.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function D1(o,e,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,z){const D=z.program;s.uniformBlockBinding(F,D)}function p(F,z){let D=l[F.id];D===void 0&&(b(F),D=x(F),l[F.id]=D,F.addEventListener("dispose",y));const k=z.program;s.updateUBOMapping(F,k);const G=e.render.frame;u[F.id]!==G&&(S(F),u[F.id]=G)}function x(F){const z=v();F.__bindingPointIndex=z;const D=o.createBuffer(),k=F.__size,G=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,k,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,D),D}function v(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(F){const z=l[F.id],D=F.uniforms,k=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let G=0,B=D.length;G<B;G++){const K=Array.isArray(D[G])?D[G]:[D[G]];for(let w=0,C=K.length;w<C;w++){const H=K[w];if(M(H,G,w,k)===!0){const et=H.__offset,lt=Array.isArray(H.value)?H.value:[H.value];let gt=0;for(let ft=0;ft<lt.length;ft++){const O=lt[ft],Z=R(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,et+gt,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,gt),gt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,et,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(F,z,D,k){const G=F.value,B=z+"_"+D;if(k[B]===void 0)return typeof G=="number"||typeof G=="boolean"?k[B]=G:k[B]=G.clone(),!0;{const K=k[B];if(typeof G=="number"||typeof G=="boolean"){if(K!==G)return k[B]=G,!0}else if(K.equals(G)===!1)return K.copy(G),!0}return!1}function b(F){const z=F.uniforms;let D=0;const k=16;for(let B=0,K=z.length;B<K;B++){const w=Array.isArray(z[B])?z[B]:[z[B]];for(let C=0,H=w.length;C<H;C++){const et=w[C],lt=Array.isArray(et.value)?et.value:[et.value];for(let gt=0,ft=lt.length;gt<ft;gt++){const O=lt[gt],Z=R(O),Y=D%k,xt=Y%Z.boundary,Et=Y+xt;D+=xt,Et!==0&&k-Et<Z.storage&&(D+=k-Et),et.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=D,D+=Z.storage}}}const G=D%k;return G>0&&(D+=k-G),F.__size=D,F.__cache={},this}function R(F){const z={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(z.boundary=4,z.storage=4):F.isVector2?(z.boundary=8,z.storage=8):F.isVector3||F.isColor?(z.boundary=16,z.storage=12):F.isVector4?(z.boundary=16,z.storage=16):F.isMatrix3?(z.boundary=48,z.storage=48):F.isMatrix4?(z.boundary=64,z.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),z}function y(F){const z=F.target;z.removeEventListener("dispose",y);const D=h.indexOf(z.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[z.id]),delete l[z.id],delete u[z.id]}function _(){for(const F in l)o.deleteBuffer(l[F]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class U1{constructor(e={}){const{canvas:i=cy(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),R=new Int32Array(4);let y=null,_=null;const F=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ba,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let k=!1;this._outputColorSpace=li;let G=0,B=0,K=null,w=-1,C=null;const H=new He,et=new He;let lt=null;const gt=new Te(0);let ft=0,O=i.width,Z=i.height,Y=1,xt=null,Et=null;const N=new He(0,0,O,Z),it=new He(0,0,O,Z);let yt=!1;const At=new Dd;let Ot=!1,at=!1;const ct=new Ye,Dt=new Q,It=new He,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function nn(){return K===null?Y:1}let I=s;function be(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Sd}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),I===null){const W="webgl2";if(I=be(W,A),I===null)throw be(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ie,te,Wt,Ge,kt,se,Ke,Ze,U,E,tt,dt,St,ut,Zt,Rt,qt,Yt,Tt,Ct,Kt,Pt,Ut,oe;function X(){ie=new GT(I),ie.init(),Pt=new E1(I,ie),te=new OT(I,ie,e,Pt),Wt=new y1(I,ie),te.reversedDepthBuffer&&S&&Wt.buffers.depth.setReversed(!0),Ge=new XT(I),kt=new l1,se=new M1(I,ie,Wt,kt,te,Pt,Ge),Ke=new PT(D),Ze=new HT(D),U=new Ky(I),Ut=new NT(I,U),E=new VT(I,U,Ge,Ut),tt=new jT(I,E,U,Ge),Tt=new WT(I,te,se),Rt=new zT(kt),dt=new o1(D,Ke,Ze,ie,te,Ut,Rt),St=new w1(D,kt),ut=new u1,Zt=new g1(ie),Yt=new UT(D,Ke,Ze,Wt,tt,M,m),qt=new x1(D,tt,te),oe=new D1(I,Ge,te,Wt),Ct=new LT(I,ie,Ge),Kt=new kT(I,ie,Ge),Ge.programs=dt.programs,D.capabilities=te,D.extensions=ie,D.properties=kt,D.renderLists=ut,D.shadowMap=qt,D.state=Wt,D.info=Ge}X();const bt=new R1(D,I);this.xr=bt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(O,Z,!1))},this.getSize=function(A){return A.set(O,Z)},this.setSize=function(A,W,st=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,Z=W,i.width=Math.floor(A*Y),i.height=Math.floor(W*Y),st===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(O*Y,Z*Y).floor()},this.setDrawingBufferSize=function(A,W,st){O=A,Z=W,Y=st,i.width=Math.floor(A*st),i.height=Math.floor(W*st),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,W,st,rt){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,W,st,rt),Wt.viewport(H.copy(N).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(it)},this.setScissor=function(A,W,st,rt){A.isVector4?it.set(A.x,A.y,A.z,A.w):it.set(A,W,st,rt),Wt.scissor(et.copy(it).multiplyScalar(Y).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(A){Wt.setScissorTest(yt=A)},this.setOpaqueSort=function(A){xt=A},this.setTransparentSort=function(A){Et=A},this.getClearColor=function(A){return A.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,st=!0){let rt=0;if(A){let q=!1;if(K!==null){const vt=K.texture.format;q=vt===Ad||vt===bd||vt===Td}if(q){const vt=K.texture.type,Nt=vt===wi||vt===vs||vt===Co||vt===wo||vt===Md||vt===Ed,Gt=Yt.getClearColor(),zt=Yt.getClearAlpha(),Qt=Gt.r,ne=Gt.g,Jt=Gt.b;Nt?(b[0]=Qt,b[1]=ne,b[2]=Jt,b[3]=zt,I.clearBufferuiv(I.COLOR,0,b)):(R[0]=Qt,R[1]=ne,R[2]=Jt,R[3]=zt,I.clearBufferiv(I.COLOR,0,R))}else rt|=I.COLOR_BUFFER_BIT}W&&(rt|=I.DEPTH_BUFFER_BIT),st&&(rt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),Yt.dispose(),ut.dispose(),Zt.dispose(),kt.dispose(),Ke.dispose(),Ze.dispose(),tt.dispose(),Ut.dispose(),oe.dispose(),dt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Jn),bt.removeEventListener("sessionend",Rr),Si.stop()};function wt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const A=Ge.autoReset,W=qt.enabled,st=qt.autoUpdate,rt=qt.needsUpdate,q=qt.type;X(),Ge.autoReset=A,qt.enabled=W,qt.autoUpdate=st,qt.needsUpdate=rt,qt.type=q}function Mt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _t(A){const W=A.target;W.removeEventListener("dispose",_t),Ft(W)}function Ft(A){ae(A),kt.remove(A)}function ae(A){const W=kt.get(A).programs;W!==void 0&&(W.forEach(function(st){dt.releaseProgram(st)}),A.isShaderMaterial&&dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,st,rt,q,vt){W===null&&(W=Xt);const Nt=q.isMesh&&q.matrixWorld.determinant()<0,Gt=sa(A,W,st,rt,q);Wt.setMaterial(rt,Nt);let zt=st.index,Qt=1;if(rt.wireframe===!0){if(zt=E.getWireframeAttribute(st),zt===void 0)return;Qt=2}const ne=st.drawRange,Jt=st.attributes.position;let de=ne.start*Qt,Ue=(ne.start+ne.count)*Qt;vt!==null&&(de=Math.max(de,vt.start*Qt),Ue=Math.min(Ue,(vt.start+vt.count)*Qt)),zt!==null?(de=Math.max(de,0),Ue=Math.min(Ue,zt.count)):Jt!=null&&(de=Math.max(de,0),Ue=Math.min(Ue,Jt.count));const Ve=Ue-de;if(Ve<0||Ve===1/0)return;Ut.setup(q,rt,Gt,st,zt);let Ne,pe=Ct;if(zt!==null&&(Ne=U.get(zt),pe=Kt,pe.setIndex(Ne)),q.isMesh)rt.wireframe===!0?(Wt.setLineWidth(rt.wireframeLinewidth*nn()),pe.setMode(I.LINES)):pe.setMode(I.TRIANGLES);else if(q.isLine){let Vt=rt.linewidth;Vt===void 0&&(Vt=1),Wt.setLineWidth(Vt*nn()),q.isLineSegments?pe.setMode(I.LINES):q.isLineLoop?pe.setMode(I.LINE_LOOP):pe.setMode(I.LINE_STRIP)}else q.isPoints?pe.setMode(I.POINTS):q.isSprite&&pe.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)No("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))pe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Vt=q._multiDrawStarts,Xe=q._multiDrawCounts,Ee=q._multiDrawCount,vn=zt?U.get(zt).bytesPerElement:1,Di=kt.get(rt).currentProgram.getUniforms();for(let pn=0;pn<Ee;pn++)Di.setValue(I,"_gl_DrawID",pn),pe.render(Vt[pn]/vn,Xe[pn])}else if(q.isInstancedMesh)pe.renderInstances(de,Ve,q.count);else if(st.isInstancedBufferGeometry){const Vt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Xe=Math.min(st.instanceCount,Vt);pe.renderInstances(de,Ve,Xe)}else pe.render(de,Ve)};function Le(A,W,st){A.transparent===!0&&A.side===ta&&A.forceSinglePass===!1?(A.side=Fn,A.needsUpdate=!0,Gn(A,W,st),A.side=Fa,A.needsUpdate=!0,Gn(A,W,st),A.side=ta):Gn(A,W,st)}this.compile=function(A,W,st=null){st===null&&(st=A),_=Zt.get(st),_.init(W),z.push(_),st.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),A!==st&&A.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights();const rt=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const vt=q.material;if(vt)if(Array.isArray(vt))for(let Nt=0;Nt<vt.length;Nt++){const Gt=vt[Nt];Le(Gt,st,q),rt.add(Gt)}else Le(vt,st,q),rt.add(vt)}),_=z.pop(),rt},this.compileAsync=function(A,W,st=null){const rt=this.compile(A,W,st);return new Promise(q=>{function vt(){if(rt.forEach(function(Nt){kt.get(Nt).currentProgram.isReady()&&rt.delete(Nt)}),rt.size===0){q(A);return}setTimeout(vt,10)}ie.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Me=null;function Cn(A){Me&&Me(A)}function Jn(){Si.stop()}function Rr(){Si.start()}const Si=new J_;Si.setAnimationLoop(Cn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(A){Me=A,bt.setAnimationLoop(A),A===null?Si.stop():Si.start()},bt.addEventListener("sessionstart",Jn),bt.addEventListener("sessionend",Rr),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(W),W=bt.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,W,K),_=Zt.get(A,z.length),_.init(W),z.push(_),ct.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),At.setFromProjectionMatrix(ct,Ci,W.reversedDepth),at=this.localClippingEnabled,Ot=Rt.init(this.clippingPlanes,at),y=ut.get(A,F.length),y.init(),F.push(y),bt.enabled===!0&&bt.isPresenting===!0){const vt=D.xr.getDepthSensingMesh();vt!==null&&Ss(vt,W,-1/0,D.sortObjects)}Ss(A,W,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(xt,Et),he=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,he&&Yt.addToRenderList(y,A),this.info.render.frame++,Ot===!0&&Rt.beginShadows();const st=_.state.shadowsArray;qt.render(st,A,W),Ot===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=y.opaque,q=y.transmissive;if(_.setupLights(),W.isArrayCamera){const vt=W.cameras;if(q.length>0)for(let Nt=0,Gt=vt.length;Nt<Gt;Nt++){const zt=vt[Nt];Ms(rt,q,A,zt)}he&&Yt.render(A);for(let Nt=0,Gt=vt.length;Nt<Gt;Nt++){const zt=vt[Nt];ys(y,A,zt,zt.viewport)}}else q.length>0&&Ms(rt,q,A,W),he&&Yt.render(A),ys(y,A,W);K!==null&&B===0&&(se.updateMultisampleRenderTarget(K),se.updateRenderTargetMipmap(K)),A.isScene===!0&&A.onAfterRender(D,A,W),Ut.resetDefaultState(),w=-1,C=null,z.pop(),z.length>0?(_=z[z.length-1],Ot===!0&&Rt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,F.pop(),F.length>0?y=F[F.length-1]:y=null};function Ss(A,W,st,rt){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)st=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||At.intersectsSprite(A)){rt&&It.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ct);const Nt=tt.update(A),Gt=A.material;Gt.visible&&y.push(A,Nt,Gt,st,It.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||At.intersectsObject(A))){const Nt=tt.update(A),Gt=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),It.copy(A.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),It.copy(Nt.boundingSphere.center)),It.applyMatrix4(A.matrixWorld).applyMatrix4(ct)),Array.isArray(Gt)){const zt=Nt.groups;for(let Qt=0,ne=zt.length;Qt<ne;Qt++){const Jt=zt[Qt],de=Gt[Jt.materialIndex];de&&de.visible&&y.push(A,Nt,de,st,It.z,Jt)}}else Gt.visible&&y.push(A,Nt,Gt,st,It.z,null)}}const vt=A.children;for(let Nt=0,Gt=vt.length;Nt<Gt;Nt++)Ss(vt[Nt],W,st,rt)}function ys(A,W,st,rt){const q=A.opaque,vt=A.transmissive,Nt=A.transparent;_.setupLightsView(st),Ot===!0&&Rt.setGlobalState(D.clippingPlanes,st),rt&&Wt.viewport(H.copy(rt)),q.length>0&&Ga(q,W,st),vt.length>0&&Ga(vt,W,st),Nt.length>0&&Ga(Nt,W,st),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function Ms(A,W,st,rt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[rt.id]===void 0&&(_.state.transmissionRenderTarget[rt.id]=new xs(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Lo:wi,minFilter:_s,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const vt=_.state.transmissionRenderTarget[rt.id],Nt=rt.viewport||H;vt.setSize(Nt.z*D.transmissionResolutionScale,Nt.w*D.transmissionResolutionScale);const Gt=D.getRenderTarget(),zt=D.getActiveCubeFace(),Qt=D.getActiveMipmapLevel();D.setRenderTarget(vt),D.getClearColor(gt),ft=D.getClearAlpha(),ft<1&&D.setClearColor(16777215,.5),D.clear(),he&&Yt.render(st);const ne=D.toneMapping;D.toneMapping=Ba;const Jt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),_.setupLightsView(rt),Ot===!0&&Rt.setGlobalState(D.clippingPlanes,rt),Ga(A,st,rt),se.updateMultisampleRenderTarget(vt),se.updateRenderTargetMipmap(vt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let Ue=0,Ve=W.length;Ue<Ve;Ue++){const Ne=W[Ue],pe=Ne.object,Vt=Ne.geometry,Xe=Ne.material,Ee=Ne.group;if(Xe.side===ta&&pe.layers.test(rt.layers)){const vn=Xe.side;Xe.side=Fn,Xe.needsUpdate=!0,Cr(pe,st,rt,Vt,Xe,Ee),Xe.side=vn,Xe.needsUpdate=!0,de=!0}}de===!0&&(se.updateMultisampleRenderTarget(vt),se.updateRenderTargetMipmap(vt))}D.setRenderTarget(Gt,zt,Qt),D.setClearColor(gt,ft),Jt!==void 0&&(rt.viewport=Jt),D.toneMapping=ne}function Ga(A,W,st){const rt=W.isScene===!0?W.overrideMaterial:null;for(let q=0,vt=A.length;q<vt;q++){const Nt=A[q],Gt=Nt.object,zt=Nt.geometry,Qt=Nt.group;let ne=Nt.material;ne.allowOverride===!0&&rt!==null&&(ne=rt),Gt.layers.test(st.layers)&&Cr(Gt,W,st,zt,ne,Qt)}}function Cr(A,W,st,rt,q,vt){A.onBeforeRender(D,W,st,rt,q,vt),A.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(D,W,st,rt,A,vt),q.transparent===!0&&q.side===ta&&q.forceSinglePass===!1?(q.side=Fn,q.needsUpdate=!0,D.renderBufferDirect(st,W,rt,q,A,vt),q.side=Fa,q.needsUpdate=!0,D.renderBufferDirect(st,W,rt,q,A,vt),q.side=ta):D.renderBufferDirect(st,W,rt,q,A,vt),A.onAfterRender(D,W,st,rt,q,vt)}function Gn(A,W,st){W.isScene!==!0&&(W=Xt);const rt=kt.get(A),q=_.state.lights,vt=_.state.shadowsArray,Nt=q.state.version,Gt=dt.getParameters(A,q.state,vt,W,st),zt=dt.getProgramCacheKey(Gt);let Qt=rt.programs;rt.environment=A.isMeshStandardMaterial?W.environment:null,rt.fog=W.fog,rt.envMap=(A.isMeshStandardMaterial?Ze:Ke).get(A.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",_t),Qt=new Map,rt.programs=Qt);let ne=Qt.get(zt);if(ne!==void 0){if(rt.currentProgram===ne&&rt.lightsStateVersion===Nt)return _n(A,Gt),ne}else Gt.uniforms=dt.getUniforms(A),A.onBeforeCompile(Gt,D),ne=dt.acquireProgram(Gt,zt),Qt.set(zt,ne),rt.uniforms=Gt.uniforms;const Jt=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Jt.clippingPlanes=Rt.uniform),_n(A,Gt),rt.needsLights=Pc(A),rt.lightsStateVersion=Nt,rt.needsLights&&(Jt.ambientLightColor.value=q.state.ambient,Jt.lightProbe.value=q.state.probe,Jt.directionalLights.value=q.state.directional,Jt.directionalLightShadows.value=q.state.directionalShadow,Jt.spotLights.value=q.state.spot,Jt.spotLightShadows.value=q.state.spotShadow,Jt.rectAreaLights.value=q.state.rectArea,Jt.ltc_1.value=q.state.rectAreaLTC1,Jt.ltc_2.value=q.state.rectAreaLTC2,Jt.pointLights.value=q.state.point,Jt.pointLightShadows.value=q.state.pointShadow,Jt.hemisphereLights.value=q.state.hemi,Jt.directionalShadowMap.value=q.state.directionalShadowMap,Jt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Jt.spotShadowMap.value=q.state.spotShadowMap,Jt.spotLightMatrix.value=q.state.spotLightMatrix,Jt.spotLightMap.value=q.state.spotLightMap,Jt.pointShadowMap.value=q.state.pointShadowMap,Jt.pointShadowMatrix.value=q.state.pointShadowMatrix),rt.currentProgram=ne,rt.uniformsList=null,ne}function an(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Ac.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function _n(A,W){const st=kt.get(A);st.outputColorSpace=W.outputColorSpace,st.batching=W.batching,st.batchingColor=W.batchingColor,st.instancing=W.instancing,st.instancingColor=W.instancingColor,st.instancingMorph=W.instancingMorph,st.skinning=W.skinning,st.morphTargets=W.morphTargets,st.morphNormals=W.morphNormals,st.morphColors=W.morphColors,st.morphTargetsCount=W.morphTargetsCount,st.numClippingPlanes=W.numClippingPlanes,st.numIntersection=W.numClipIntersection,st.vertexAlphas=W.vertexAlphas,st.vertexTangents=W.vertexTangents,st.toneMapping=W.toneMapping}function sa(A,W,st,rt,q){W.isScene!==!0&&(W=Xt),se.resetTextureUnits();const vt=W.fog,Nt=rt.isMeshStandardMaterial?W.environment:null,Gt=K===null?D.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Mr,zt=(rt.isMeshStandardMaterial?Ze:Ke).get(rt.envMap||Nt),Qt=rt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ne=!!st.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Jt=!!st.morphAttributes.position,de=!!st.morphAttributes.normal,Ue=!!st.morphAttributes.color;let Ve=Ba;rt.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ve=D.toneMapping);const Ne=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,pe=Ne!==void 0?Ne.length:0,Vt=kt.get(rt),Xe=_.state.lights;if(Ot===!0&&(at===!0||A!==C)){const un=A===C&&rt.id===w;Rt.setState(rt,A,un)}let Ee=!1;rt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Xe.state.version||Vt.outputColorSpace!==Gt||q.isBatchedMesh&&Vt.batching===!1||!q.isBatchedMesh&&Vt.batching===!0||q.isBatchedMesh&&Vt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Vt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Vt.instancing===!1||!q.isInstancedMesh&&Vt.instancing===!0||q.isSkinnedMesh&&Vt.skinning===!1||!q.isSkinnedMesh&&Vt.skinning===!0||q.isInstancedMesh&&Vt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Vt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Vt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Vt.instancingMorph===!1&&q.morphTexture!==null||Vt.envMap!==zt||rt.fog===!0&&Vt.fog!==vt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Rt.numPlanes||Vt.numIntersection!==Rt.numIntersection)||Vt.vertexAlphas!==Qt||Vt.vertexTangents!==ne||Vt.morphTargets!==Jt||Vt.morphNormals!==de||Vt.morphColors!==Ue||Vt.toneMapping!==Ve||Vt.morphTargetsCount!==pe)&&(Ee=!0):(Ee=!0,Vt.__version=rt.version);let vn=Vt.currentProgram;Ee===!0&&(vn=Gn(rt,W,q));let Di=!1,pn=!1,ka=!1;const _e=vn.getUniforms(),En=Vt.uniforms;if(Wt.useProgram(vn.program)&&(Di=!0,pn=!0,ka=!0),rt.id!==w&&(w=rt.id,pn=!0),Di||C!==A){Wt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),_e.setValue(I,"projectionMatrix",A.projectionMatrix),_e.setValue(I,"viewMatrix",A.matrixWorldInverse);const $e=_e.map.cameraPosition;$e!==void 0&&$e.setValue(I,Dt.setFromMatrixPosition(A.matrixWorld)),te.logarithmicDepthBuffer&&_e.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&_e.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,pn=!0,ka=!0)}if(q.isSkinnedMesh){_e.setOptional(I,q,"bindMatrix"),_e.setOptional(I,q,"bindMatrixInverse");const un=q.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),_e.setValue(I,"boneTexture",un.boneTexture,se))}q.isBatchedMesh&&(_e.setOptional(I,q,"batchingTexture"),_e.setValue(I,"batchingTexture",q._matricesTexture,se),_e.setOptional(I,q,"batchingIdTexture"),_e.setValue(I,"batchingIdTexture",q._indirectTexture,se),_e.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&_e.setValue(I,"batchingColorTexture",q._colorsTexture,se));const wn=st.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Tt.update(q,st,vn),(pn||Vt.receiveShadow!==q.receiveShadow)&&(Vt.receiveShadow=q.receiveShadow,_e.setValue(I,"receiveShadow",q.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(En.envMap.value=zt,En.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&W.environment!==null&&(En.envMapIntensity.value=W.environmentIntensity),pn&&(_e.setValue(I,"toneMappingExposure",D.toneMappingExposure),Vt.needsLights&&wr(En,ka),vt&&rt.fog===!0&&St.refreshFogUniforms(En,vt),St.refreshMaterialUniforms(En,rt,Y,Z,_.state.transmissionRenderTarget[A.id]),Ac.upload(I,an(Vt),En,se)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Ac.upload(I,an(Vt),En,se),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&_e.setValue(I,"center",q.center),_e.setValue(I,"modelViewMatrix",q.modelViewMatrix),_e.setValue(I,"normalMatrix",q.normalMatrix),_e.setValue(I,"modelMatrix",q.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const un=rt.uniformsGroups;for(let $e=0,Es=un.length;$e<Es;$e++){const yi=un[$e];oe.update(yi,vn),oe.bind(yi,vn)}}return vn}function wr(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Pc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,W,st){const rt=kt.get(A);rt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),kt.get(A.texture).__webglTexture=W,kt.get(A.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:st,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const st=kt.get(A);st.__webglFramebuffer=W,st.__useDefaultFramebuffer=W===void 0};const Bc=I.createFramebuffer();this.setRenderTarget=function(A,W=0,st=0){K=A,G=W,B=st;let rt=!0,q=null,vt=!1,Nt=!1;if(A){const zt=kt.get(A);if(zt.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(I.FRAMEBUFFER,null),rt=!1;else if(zt.__webglFramebuffer===void 0)se.setupRenderTarget(A);else if(zt.__hasExternalTextures)se.rebindTextures(A,kt.get(A.texture).__webglTexture,kt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Jt=A.depthTexture;if(zt.__boundDepthTexture!==Jt){if(Jt!==null&&kt.has(Jt)&&(A.width!==Jt.image.width||A.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(A)}}const Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Nt=!0);const ne=kt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ne[W])?q=ne[W][st]:q=ne[W],vt=!0):A.samples>0&&se.useMultisampledRTT(A)===!1?q=kt.get(A).__webglMultisampledFramebuffer:Array.isArray(ne)?q=ne[st]:q=ne,H.copy(A.viewport),et.copy(A.scissor),lt=A.scissorTest}else H.copy(N).multiplyScalar(Y).floor(),et.copy(it).multiplyScalar(Y).floor(),lt=yt;if(st!==0&&(q=Bc),Wt.bindFramebuffer(I.FRAMEBUFFER,q)&&rt&&Wt.drawBuffers(A,q),Wt.viewport(H),Wt.scissor(et),Wt.setScissorTest(lt),vt){const zt=kt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,zt.__webglTexture,st)}else if(Nt){const zt=W;for(let Qt=0;Qt<A.textures.length;Qt++){const ne=kt.get(A.textures[Qt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Qt,ne.__webglTexture,st,zt)}}else if(A!==null&&st!==0){const zt=kt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,zt.__webglTexture,st)}w=-1},this.readRenderTargetPixels=function(A,W,st,rt,q,vt,Nt,Gt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=kt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Nt!==void 0&&(zt=zt[Nt]),zt){Wt.bindFramebuffer(I.FRAMEBUFFER,zt);try{const Qt=A.textures[Gt],ne=Qt.format,Jt=Qt.type;if(!te.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-rt&&st>=0&&st<=A.height-q&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Gt),I.readPixels(W,st,rt,q,Pt.convert(ne),Pt.convert(Jt),vt))}finally{const Qt=K!==null?kt.get(K).__webglFramebuffer:null;Wt.bindFramebuffer(I.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(A,W,st,rt,q,vt,Nt,Gt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=kt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Nt!==void 0&&(zt=zt[Nt]),zt)if(W>=0&&W<=A.width-rt&&st>=0&&st<=A.height-q){Wt.bindFramebuffer(I.FRAMEBUFFER,zt);const Qt=A.textures[Gt],ne=Qt.format,Jt=Qt.type;if(!te.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,de),I.bufferData(I.PIXEL_PACK_BUFFER,vt.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Gt),I.readPixels(W,st,rt,q,Pt.convert(ne),Pt.convert(Jt),0);const Ue=K!==null?kt.get(K).__webglFramebuffer:null;Wt.bindFramebuffer(I.FRAMEBUFFER,Ue);const Ve=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await uy(I,Ve,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,de),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,vt),I.deleteBuffer(de),I.deleteSync(Ve),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,st=0){const rt=Math.pow(2,-st),q=Math.floor(A.image.width*rt),vt=Math.floor(A.image.height*rt),Nt=W!==null?W.x:0,Gt=W!==null?W.y:0;se.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,st,0,0,Nt,Gt,q,vt),Wt.unbindTexture()};const Fo=I.createFramebuffer(),Va=I.createFramebuffer();this.copyTextureToTexture=function(A,W,st=null,rt=null,q=0,vt=null){vt===null&&(q!==0?(No("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=q,q=0):vt=0);let Nt,Gt,zt,Qt,ne,Jt,de,Ue,Ve;const Ne=A.isCompressedTexture?A.mipmaps[vt]:A.image;if(st!==null)Nt=st.max.x-st.min.x,Gt=st.max.y-st.min.y,zt=st.isBox3?st.max.z-st.min.z:1,Qt=st.min.x,ne=st.min.y,Jt=st.isBox3?st.min.z:0;else{const wn=Math.pow(2,-q);Nt=Math.floor(Ne.width*wn),Gt=Math.floor(Ne.height*wn),A.isDataArrayTexture?zt=Ne.depth:A.isData3DTexture?zt=Math.floor(Ne.depth*wn):zt=1,Qt=0,ne=0,Jt=0}rt!==null?(de=rt.x,Ue=rt.y,Ve=rt.z):(de=0,Ue=0,Ve=0);const pe=Pt.convert(W.format),Vt=Pt.convert(W.type);let Xe;W.isData3DTexture?(se.setTexture3D(W,0),Xe=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(se.setTexture2DArray(W,0),Xe=I.TEXTURE_2D_ARRAY):(se.setTexture2D(W,0),Xe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const Ee=I.getParameter(I.UNPACK_ROW_LENGTH),vn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Di=I.getParameter(I.UNPACK_SKIP_PIXELS),pn=I.getParameter(I.UNPACK_SKIP_ROWS),ka=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ne.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ne.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Jt);const _e=A.isDataArrayTexture||A.isData3DTexture,En=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const wn=kt.get(A),un=kt.get(W),$e=kt.get(wn.__renderTarget),Es=kt.get(un.__renderTarget);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,$e.__webglFramebuffer),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Es.__webglFramebuffer);for(let yi=0;yi<zt;yi++)_e&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,kt.get(A).__webglTexture,q,Jt+yi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,kt.get(W).__webglTexture,vt,Ve+yi)),I.blitFramebuffer(Qt,ne,Nt,Gt,de,Ue,Nt,Gt,I.DEPTH_BUFFER_BIT,I.NEAREST);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||kt.has(A)){const wn=kt.get(A),un=kt.get(W);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,Fo),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Va);for(let $e=0;$e<zt;$e++)_e?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wn.__webglTexture,q,Jt+$e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wn.__webglTexture,q),En?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,un.__webglTexture,vt,Ve+$e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,un.__webglTexture,vt),q!==0?I.blitFramebuffer(Qt,ne,Nt,Gt,de,Ue,Nt,Gt,I.COLOR_BUFFER_BIT,I.NEAREST):En?I.copyTexSubImage3D(Xe,vt,de,Ue,Ve+$e,Qt,ne,Nt,Gt):I.copyTexSubImage2D(Xe,vt,de,Ue,Qt,ne,Nt,Gt);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else En?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Xe,vt,de,Ue,Ve,Nt,Gt,zt,pe,Vt,Ne.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(Xe,vt,de,Ue,Ve,Nt,Gt,zt,pe,Ne.data):I.texSubImage3D(Xe,vt,de,Ue,Ve,Nt,Gt,zt,pe,Vt,Ne):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,vt,de,Ue,Nt,Gt,pe,Vt,Ne.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,vt,de,Ue,Ne.width,Ne.height,pe,Ne.data):I.texSubImage2D(I.TEXTURE_2D,vt,de,Ue,Nt,Gt,pe,Vt,Ne);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ee),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Di),I.pixelStorei(I.UNPACK_SKIP_ROWS,pn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ka),vt===0&&W.generateMipmaps&&I.generateMipmap(Xe),Wt.unbindTexture()},this.initRenderTarget=function(A){kt.get(A).__webglFramebuffer===void 0&&se.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?se.setTextureCube(A,0):A.isData3DTexture?se.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?se.setTexture2DArray(A,0):se.setTexture2D(A,0),Wt.unbindTexture()},this.resetState=function(){G=0,B=0,K=null,Wt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const N1=()=>{const o=yc.useRef(null),[e,i]=yc.useState(null),s=[{id:0,title:"MLS Quiz App",desc:"Interactive quiz platform with real-time scoring, favorites system, and owl-themed design.",longDesc:"A comprehensive quiz application featuring user authentication, favorite questions system, progress tracking, and an engaging owl mascot theme.",tech:["React","Express","MongoDB","Node.js","JWT","REST API"],github:"https://github.com/saidElamri/Quizz-LMS",demo:"https://lmsquiz.netlify.app/",image:"/projects/lms.png"},{id:1,title:"Food Xplorers",desc:"Discover authentic dishes from cities worldwide with beautiful imagery and detailed recipes.",longDesc:"A culinary exploration platform that allows users to discover traditional dishes from various cities around the world.",tech:["Vite","React","TheMealDB API","Tailwind CSS"],github:"https://github.com/saidElamri/native-food",demo:"https://foodxplorers.netlify.app/",image:"/projects/foodapp.png"},{id:2,title:"Code Explainer with Gemini AI",desc:"Flask web app for AI-powered Python code explanations.",longDesc:"A Flask-based web application that leverages Google Gemini to explain Python code for both beginners and advanced users. It supports Markdown formatting, provides clear step-by-step explanations, and ensures secure handling of API keys with .env management.",tech:["Python","Flask","Google Gemini","Markdown","dotenv"],github:"https://github.com/saidElamri/codexplainer",demo:"https://codexplainer-gray.vercel.app/",image:"/projects/codeex.png"},{id:3,title:"PetroSolPro",desc:"Stock & distribution management for fuel stations.",longDesc:"PetroSolPro is a React demo app showcasing a professional solution for stock management and distribution tailored to private and institutional fuel stations. It features real-time delivery tracking, precise stock level visualization, fraud/leak detection alerts, maintenance & automation tools.",tech:["React","React Router DOM","Tailwind CSS","Recharts","Vite"],github:"https://github.com/saidElamri/petro",demo:"https://aga-petro.netlify.app/",image:"/projects/petro.png"}],l=[{id:1,title:"ODC Orange Bootcamp",issuer:"Orange Digital Center Morocco",date:"2024",description:"Intensive full-stack development bootcamp focusing on MERN stack and algorithms",image:"/certificates/odc.jpg"},{id:2,title:"Meta Front-End Developer",issuer:"Meta (Coursera)",date:"2023",description:"Professional certificate covering React and modern frontend development",image:"/certificates/meta-frontend.jpg"},{id:3,title:"JavaScript Algorithms",issuer:"freeCodeCamp",date:"2023",description:"Data structures and algorithms certification",image:"/certificates/js.png"},{id:4,title:"Responsive Web Design",issuer:"freeCodeCamp",date:"2023",description:"Comprehensive certification in HTML5, CSS3, and responsive design",image:"/certificates/responsive.png"}];return yc.useEffect(()=>{if(!o.current)return;const u=o.current,h=new zy;h.fog=new wd(0,.015);const d=new Qn(75,window.innerWidth/window.innerHeight,.1,1e3);d.position.z=30;const m=new U1({antialias:!0,alpha:!0});m.setSize(window.innerWidth,window.innerHeight),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.appendChild(m.domElement);const p=new xi,x=1500,v=new Float32Array(x*3),S=new Float32Array(x*3);for(let C=0;C<x;C++){v[C*3]=(Math.random()-.5)*100,v[C*3+1]=(Math.random()-.5)*100,v[C*3+2]=(Math.random()-.5)*100;const H=new Te;H.setHSL(.55+Math.random()*.05,.9,.5+Math.random()*.3),S[C*3]=H.r,S[C*3+1]=H.g,S[C*3+2]=H.b}p.setAttribute("position",new ci(v,3)),p.setAttribute("color",new ci(S,3));const M=new Y_({size:.1,vertexColors:!0,transparent:!0,opacity:.6,blending:Rc}),b=new Hy(p,M);h.add(b);const R=50,y=[];for(let C=0;C<R;C++){const H=[];for(let O=0;O<20;O++)H.push(new Q((Math.random()-.5)*50,(Math.random()-.5)*50,(Math.random()-.5)*50));const lt=new xi().setFromPoints(H),gt=new q_({color:3900150,transparent:!0,opacity:.15,blending:Rc}),ft=new Fy(lt,gt);h.add(ft),y.push(ft)}const _=new jy(16777215,.3);h.add(_);const F=new J0(3900150,1.5,50);F.position.set(20,20,20),h.add(F);const z=new J0(6333946,1.5,50);z.position.set(-20,-20,20),h.add(z);let D=0,k=0;const G=C=>{D=C.clientX/window.innerWidth*2-1,k=-(C.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",G);const B=new Yy,K=()=>{requestAnimationFrame(K);const C=B.getElapsedTime();b.rotation.y=C*.05,b.rotation.x=C*.03,y.forEach((H,et)=>{H.rotation.y=C*.1+et*.1,H.rotation.x=Math.sin(C+et)*.2}),d.position.x+=(D*5-d.position.x)*.02,d.position.y+=(k*5-d.position.y)*.02,d.lookAt(0,0,0),F.position.x=Math.sin(C*.5)*20,F.position.y=Math.cos(C*.5)*20,z.position.x=Math.cos(C*.3)*20,z.position.y=Math.sin(C*.3)*20,m.render(h,d)};K();const w=()=>{d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",w),()=>{window.removeEventListener("mousemove",G),window.removeEventListener("resize",w),u.removeChild(m.domElement),m.dispose()}},[]),L.jsxs("div",{className:"relative w-full min-h-screen bg-black text-white overflow-x-hidden font-mono",children:[L.jsx("div",{ref:o,className:"fixed inset-0 z-0"}),L.jsx("div",{className:"fixed inset-0 z-0 pointer-events-none opacity-10",children:L.jsx("div",{className:"absolute inset-0",style:{backgroundImage:"repeating-linear-gradient(0deg, transparent, transparent 2px, cyan 2px, cyan 4px)",backgroundSize:"100% 4px"}})}),L.jsxs("section",{className:"relative min-h-screen flex items-center justify-center px-6",children:[L.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto",children:[L.jsxs("div",{className:"border-l-2 border-cyan-500 pl-6 mb-12",children:[L.jsx("div",{className:"text-xs text-cyan-400 mb-2 tracking-widest",children:"> SYSTEM.INIT()"}),L.jsx("div",{className:"text-xs text-gray-500 mb-8 font-sans",children:"Full-Stack Developer / Morocco"}),L.jsxs("h1",{className:"text-6xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tight",children:[L.jsx("span",{className:"text-white",children:"SAID_"}),L.jsx("br",{}),L.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse",children:"ELAMRI"})]}),L.jsxs("div",{className:"text-sm text-gray-400 max-w-xl mb-8 font-sans leading-relaxed",children:[L.jsx("span",{className:"text-cyan-400",children:">"})," Building next-generation web applications with cutting-edge technology stack"]})]}),L.jsx("div",{className:"flex gap-3",children:[{href:"https://github.com/saidElamri",label:"GITHUB",d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"},{href:"https://www.linkedin.com/in/said-elamri/",label:"LINKEDIN",d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"},{href:"said.elamri.evil@gmail.com",label:"EMAIL",d:"M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"}].map((u,h)=>L.jsxs("a",{href:u.href,className:"group relative px-4 py-2 border border-cyan-500/30 hover:border-cyan-400 bg-black/50 hover:bg-cyan-500/10 transition-all overflow-hidden",children:[L.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"}),L.jsxs("div",{className:"relative flex items-center gap-2",children:[L.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:L.jsx("path",{d:u.d})}),L.jsx("span",{className:"text-xs",children:u.label})]})]},h))})]}),L.jsxs("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 text-center",children:[L.jsx("div",{className:"text-xs text-cyan-400 mb-2 animate-pulse",children:"SCROLL_DOWN"}),L.jsx("div",{className:"w-px h-16 bg-gradient-to-b from-cyan-500 to-transparent mx-auto"})]})]}),L.jsx("section",{className:"relative py-24 px-6 z-10",children:L.jsxs("div",{className:"max-w-7xl mx-auto",children:[L.jsxs("div",{className:"border-l-2 border-cyan-500 pl-6 mb-16",children:[L.jsx("div",{className:"text-xs text-cyan-400 mb-2",children:"> PROJECTS.LOAD()"}),L.jsx("h2",{className:"text-4xl md:text-5xl font-bold",children:"SELECTED_WORK"})]}),L.jsx("div",{className:"space-y-6",children:s.map((u,h)=>L.jsxs("div",{onClick:()=>i(u),className:"group relative border border-cyan-500/20 hover:border-cyan-400/50 bg-black/50 backdrop-blur cursor-pointer transition-all duration-300 overflow-hidden",children:[L.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"}),L.jsxs("div",{className:"grid md:grid-cols-[300px_1fr] gap-6 p-6",children:[L.jsxs("div",{className:"relative h-48 md:h-full bg-gradient-to-br from-cyan-500/10 to-purple-600/10 overflow-hidden border border-cyan-500/20",children:[L.jsx("div",{className:"absolute inset-0 bg-black/90 group-hover:opacity-0 transition-opacity duration-500 z-10 p-4",children:L.jsxs("div",{className:"h-full flex flex-col",children:[L.jsxs("div",{className:"flex items-center gap-1.5 mb-3",children:[L.jsx("div",{className:"w-2 h-2 rounded-full bg-red-500/80"}),L.jsx("div",{className:"w-2 h-2 rounded-full bg-yellow-500/80"}),L.jsx("div",{className:"w-2 h-2 rounded-full bg-green-500/80"}),L.jsx("span",{className:"ml-2 text-[10px] text-cyan-400/60 font-mono",children:"app.jsx"})]}),L.jsxs("div",{className:"font-mono text-[10px] space-y-1.5 flex-1",children:[L.jsxs("div",{className:"flex gap-2 opacity-0 group-hover:animate-[fadeIn_0.3s_ease-out_0.1s_forwards]",children:[L.jsx("span",{className:"text-gray-600 w-4",children:"1"}),L.jsxs("div",{children:[L.jsx("span",{className:"text-purple-400",children:"import"}),L.jsxs("span",{className:"text-gray-400",children:[" ","{"]}),L.jsx("span",{className:"text-blue-400",children:"React"}),L.jsx("span",{className:"text-gray-400",children:"}"})]})]}),L.jsxs("div",{className:"flex gap-2 opacity-0 group-hover:animate-[fadeIn_0.3s_ease-out_0.2s_forwards]",children:[L.jsx("span",{className:"text-gray-600 w-4",children:"2"}),L.jsx("div",{})]}),L.jsxs("div",{className:"flex gap-2 opacity-0 group-hover:animate-[fadeIn_0.3s_ease-out_0.3s_forwards]",children:[L.jsx("span",{className:"text-gray-600 w-4",children:"3"}),L.jsxs("div",{children:[L.jsx("span",{className:"text-purple-400",children:"const"}),L.jsx("span",{className:"text-yellow-400",children:" App"}),L.jsx("span",{className:"text-gray-400",children:" = () =>"})]})]}),L.jsxs("div",{className:"flex gap-2 opacity-0 group-hover:animate-[fadeIn_0.3s_ease-out_0.4s_forwards]",children:[L.jsx("span",{className:"text-gray-600 w-4",children:"4"}),L.jsxs("div",{className:"pl-2",children:[L.jsx("span",{className:"text-gray-400",children:"<"}),L.jsx("span",{className:"text-green-400",children:"div"}),L.jsx("span",{className:"text-gray-400",children:">"})]})]}),L.jsxs("div",{className:"flex gap-2 opacity-0 group-hover:animate-[fadeIn_0.3s_ease-out_0.5s_forwards]",children:[L.jsx("span",{className:"text-gray-600 w-4",children:"5"}),L.jsx("div",{className:"pl-4 truncate",children:L.jsx("span",{className:"text-cyan-400",children:u.tech[0]})})]}),L.jsxs("div",{className:"flex gap-2 opacity-0 group-hover:animate-[fadeIn_0.3s_ease-out_0.6s_forwards]",children:[L.jsx("span",{className:"text-gray-600 w-4",children:"6"}),L.jsxs("div",{className:"pl-2",children:[L.jsx("span",{className:"text-gray-400",children:"</"}),L.jsx("span",{className:"text-green-400",children:"div"}),L.jsx("span",{className:"text-gray-400",children:">"})]})]})]}),L.jsxs("div",{className:"flex items-center gap-1 text-[9px] text-cyan-400/50 mt-2",children:[L.jsx("span",{children:">"}),L.jsx("span",{children:"click to view"})]})]})}),L.jsx("img",{src:u.image,alt:u.title,className:"absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 mix-blend-screen"}),L.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:L.jsx("div",{className:"text-6xl font-bold text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors",children:String(h+1).padStart(2,"0")})})]}),L.jsxs("div",{className:"flex flex-col justify-center",children:[L.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[L.jsxs("div",{className:"text-xs text-cyan-400",children:["[",String(h+1).padStart(2,"0"),"]"]}),L.jsx("h3",{className:"text-2xl font-bold group-hover:text-cyan-400 transition-colors",children:u.title})]}),L.jsx("p",{className:"text-gray-400 mb-4 text-sm font-sans",children:u.desc}),L.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:u.tech.map((d,m)=>L.jsx("span",{className:"text-xs px-2 py-1 border border-cyan-500/30 text-cyan-400/80",children:d},m))}),L.jsxs("div",{className:"text-xs text-gray-600",children:[L.jsx("span",{className:"text-cyan-400",children:">"})," CLICK_TO_VIEW_DETAILS"]})]})]}),L.jsx("div",{className:"absolute inset-0 border border-cyan-400/0 group-hover:border-cyan-400/20 transition-colors pointer-events-none"})]},h))})]})}),e&&L.jsxs("div",{className:"fixed inset-0 flex items-center justify-center p-6 bg-black/98 backdrop-blur-sm z-50",onClick:()=>i(null),children:[L.jsxs("div",{className:"relative max-w-5xl w-full border-2 border-cyan-500/50 bg-black/95 shadow-2xl shadow-cyan-500/20",onClick:u=>u.stopPropagation(),children:[L.jsx("div",{className:"absolute -top-3 left-6 bg-black px-3 text-xs text-cyan-400",children:"PROJECT_DETAILS"}),L.jsx("button",{onClick:()=>i(null),className:"absolute top-4 right-4 w-10 h-10 border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all flex items-center justify-center text-cyan-400 text-xl",children:"×"}),L.jsxs("div",{className:"grid md:grid-cols-2",children:[L.jsxs("div",{className:"relative h-80 md:h-auto border-r border-cyan-500/20 overflow-hidden group",children:[L.jsx("div",{className:"absolute inset-0 bg-black/95 group-hover:opacity-0 transition-opacity duration-500 z-10",children:L.jsxs("div",{className:"h-full flex flex-col",children:[L.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 border-b border-cyan-500/20 bg-gray-900/50",children:[L.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500"}),L.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500"}),L.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500"}),L.jsx("span",{className:"ml-2 text-xs text-cyan-400/60 font-mono",children:"project.jsx"})]}),L.jsxs("div",{className:"flex-1 p-6 overflow-auto",children:[L.jsxs("div",{className:"font-mono text-sm space-y-3",children:[L.jsxs("div",{className:"flex gap-4 opacity-0 animate-[slideIn_0.5s_ease-out_0.2s_forwards]",children:[L.jsx("span",{className:"text-gray-600 w-6 text-right select-none",children:"1"}),L.jsxs("div",{children:[L.jsx("span",{className:"text-purple-400",children:"import"}),L.jsxs("span",{className:"text-gray-400",children:[" ","{"," "]}),L.jsx("span",{className:"text-blue-400",children:"useState"}),L.jsxs("span",{className:"text-gray-400",children:[" ","}"," "]}),L.jsx("span",{className:"text-purple-400",children:"from"}),L.jsx("span",{className:"text-green-400",children:" 'react'"}),L.jsx("span",{className:"text-gray-500",children:";"})]})]}),L.jsxs("div",{className:"flex gap-4 opacity-0 animate-[slideIn_0.5s_ease-out_0.4s_forwards]",children:[L.jsx("span",{className:"text-gray-600 w-6 text-right select-none",children:"2"}),L.jsx("div",{className:"text-gray-600",children:`// ${e.desc}`})]}),L.jsxs("div",{className:"flex gap-4 opacity-0 animate-[slideIn_0.5s_ease-out_0.5s_forwards]",children:[L.jsx("span",{className:"text-gray-600 w-6 text-right select-none",children:"3"}),L.jsx("div",{})]}),L.jsxs("div",{className:"flex gap-4 opacity-0 animate-[slideIn_0.5s_ease-out_0.6s_forwards]",children:[L.jsx("span",{className:"text-gray-600 w-6 text-right select-none",children:"4"}),L.jsxs("div",{children:[L.jsx("span",{className:"text-purple-400",children:"const"}),L.jsx("span",{className:"text-yellow-400",children:" Project"}),L.jsxs("span",{className:"text-gray-400",children:[" = () => ","{"]})]})]}),L.jsxs("div",{className:"flex gap-4 opacity-0 animate-[slideIn_0.5s_ease-out_0.7s_forwards]",children:[L.jsx("span",{className:"text-gray-600 w-6 text-right select-none",children:"5"}),L.jsxs("div",{className:"pl-4",children:[L.jsx("span",{className:"text-purple-400",children:"const"}),L.jsx("span",{className:"text-gray-400",children:" tech = ["})]})]}),L.jsxs("div",{className:"flex gap-4 opacity-0 animate-[slideIn_0.5s_ease-out_0.8s_forwards]",children:[L.jsx("span",{className:"text-gray-600 w-6 text-right select-none",children:"6"}),L.jsx("div",{className:"pl-8",children:e.tech.slice(0,3).map((u,h)=>L.jsxs("span",{children:[L.jsxs("span",{className:"text-green-400",children:["'",u,"'"]}),h<Math.min(2,e.tech.length-1)&&L.jsx("span",{className:"text-gray-500",children:", "})]},h))})]}),L.jsxs("div",{className:"flex gap-4 opacity-0 animate-[slideIn_0.5s_ease-out_0.9s_forwards]",children:[L.jsx("span",{className:"text-gray-600 w-6 text-right select-none",children:"7"}),L.jsx("div",{className:"pl-4",children:L.jsx("span",{className:"text-gray-400",children:"];"})})]}),L.jsxs("div",{className:"flex gap-4 opacity-0 animate-[slideIn_0.5s_ease-out_1s_forwards]",children:[L.jsx("span",{className:"text-gray-600 w-6 text-right select-none",children:"8"}),L.jsx("div",{})]}),L.jsxs("div",{className:"flex gap-4 opacity-0 animate-[slideIn_0.5s_ease-out_1.1s_forwards]",children:[L.jsx("span",{className:"text-gray-600 w-6 text-right select-none",children:"9"}),L.jsxs("div",{className:"pl-4",children:[L.jsx("span",{className:"text-purple-400",children:"return"}),L.jsx("span",{className:"text-gray-400",children:" <"}),L.jsx("span",{className:"text-green-400",children:"App"}),L.jsx("span",{className:"text-gray-400",children:" />;"})]})]}),L.jsxs("div",{className:"flex gap-4 opacity-0 animate-[slideIn_0.5s_ease-out_1.2s_forwards]",children:[L.jsx("span",{className:"text-gray-600 w-6 text-right select-none",children:"10"}),L.jsx("div",{children:L.jsx("span",{className:"text-gray-400",children:"}"})})]})]}),L.jsxs("div",{className:"mt-8 flex items-center gap-2 text-xs text-cyan-400/60 opacity-0 animate-[fadeIn_0.5s_ease-out_1.5s_forwards]",children:[L.jsx("span",{children:">"}),L.jsx("span",{children:"hover to preview"}),L.jsx("span",{className:"inline-block w-2 h-3 bg-cyan-400/60 animate-pulse ml-1"})]})]})]})}),L.jsx("img",{src:e.image,alt:e.title,className:"absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-80 transition-opacity duration-500 mix-blend-screen"}),L.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"})]}),L.jsxs("div",{className:"p-8 space-y-6",children:[L.jsxs("div",{children:[L.jsxs("div",{className:"text-xs text-cyan-400 mb-2",children:["> PROJECT_",e.id+1]}),L.jsx("h2",{className:"text-3xl font-bold mb-3",children:e.title}),L.jsx("p",{className:"text-gray-400 text-sm mb-3 font-sans",children:e.desc}),L.jsx("p",{className:"text-gray-500 text-sm font-sans leading-relaxed",children:e.longDesc})]}),L.jsxs("div",{children:[L.jsx("div",{className:"text-xs text-cyan-400 mb-2",children:"> TECH_STACK"}),L.jsx("div",{className:"flex flex-wrap gap-2",children:e.tech.map((u,h)=>L.jsx("span",{className:"px-3 py-1 border border-cyan-500/30 text-xs text-cyan-400/80",children:u},h))})]}),L.jsxs("div",{className:"flex gap-3 pt-4",children:[L.jsx("a",{href:e.demo,className:"flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all text-center text-sm font-bold",children:"VIEW_DEMO →"}),L.jsx("a",{href:e.github,className:"flex-1 py-3 border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all text-center text-sm font-bold",children:"VIEW_CODE"})]})]})]})]}),L.jsx("style",{children:`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `})]}),L.jsx("section",{className:"relative py-24 px-6 z-10",children:L.jsxs("div",{className:"max-w-7xl mx-auto",children:[L.jsxs("div",{className:"border-l-2 border-cyan-500 pl-6 mb-16",children:[L.jsx("div",{className:"text-xs text-cyan-400 mb-2",children:"> CREDENTIALS.VERIFY()"}),L.jsx("h2",{className:"text-4xl md:text-5xl font-bold",children:"CERTIFICATIONS"})]}),L.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:l.map(u=>L.jsxs("div",{className:"group relative border border-cyan-500/20 hover:border-cyan-400/50 bg-black/50 backdrop-blur transition-all overflow-hidden",children:[L.jsx("div",{className:"absolute top-0 right-0 w-12 h-12 border-l border-b border-cyan-500/30 flex items-center justify-center text-cyan-400/60 text-xs font-bold",children:String(u.id).padStart(2,"0")}),L.jsxs("div",{className:"relative h-44 border-b border-cyan-500/20 overflow-hidden",children:[L.jsx("div",{className:"absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-500 z-10",children:L.jsxs("div",{className:"relative",children:[L.jsx("div",{className:"absolute inset-0 border-4 border-cyan-500/30 rounded-full animate-spin",style:{animationDuration:"8s"}}),L.jsx("div",{className:"relative bg-black/80 backdrop-blur border-2 border-cyan-400/50 rounded-full w-24 h-24 flex items-center justify-center",children:L.jsx("svg",{className:"w-12 h-12 text-cyan-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:L.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})})}),L.jsx("div",{className:"absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-ping"})]})}),L.jsx("img",{src:u.image,alt:u.title,className:"absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-70 transition-opacity duration-500 mix-blend-screen"}),L.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black to-transparent"}),L.jsxs("div",{className:"absolute bottom-3 left-3 text-xs text-cyan-400",children:["ISSUED: ",u.date]})]}),L.jsxs("div",{className:"p-6",children:[L.jsx("h3",{className:"text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors",children:u.title}),L.jsx("p",{className:"text-cyan-400/70 text-sm mb-3 font-sans",children:u.issuer}),L.jsx("p",{className:"text-gray-500 text-sm font-sans",children:u.description})]})]},u.id))})]})}),L.jsx("section",{className:"relative py-24 px-6 z-10",children:L.jsxs("div",{className:"max-w-7xl mx-auto",children:[L.jsxs("div",{className:"border-l-2 border-cyan-500 pl-6 mb-16",children:[L.jsx("div",{className:"text-xs text-cyan-400 mb-2",children:"> SKILLS.LIST()"}),L.jsx("h2",{className:"text-4xl md:text-5xl font-bold",children:"TECH_STACK"})]}),L.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:[{title:"FRONTEND",skills:[{name:"React",icon:"⚛️"},{name:"JavaScript ES6+",icon:"📜"},{name:"HTML5/CSS3",icon:"🎨"},{name:"Tailwind CSS",icon:"💨"},{name:"Three.js",icon:"🎲"},{name:"Vite",icon:"⚡"}]},{title:"BACKEND",skills:[{name:"Node.js",icon:"🟢"},{name:"Express",icon:"🚂"},{name:"Django",icon:"🐍"},{name:"MongoDB",icon:"🍃"},{name:"MySQL",icon:"🐬"},{name:"WebSocket",icon:"🔌"}]},{title:"TOOLS",skills:[{name:"Git & GitHub",icon:"📦"},{name:"REST APIs",icon:"🔗"},{name:"JWT Auth",icon:"🔐"},{name:"Algorithms",icon:"🧮"},{name:"Problem Solving",icon:"💡"},{name:"Data Structures",icon:"🏗️"}]}].map((u,h)=>L.jsxs("div",{className:"border border-cyan-500/20 hover:border-cyan-400/50 bg-black/50 backdrop-blur transition-all",children:[L.jsx("div",{className:"border-b border-cyan-500/20 p-4 bg-cyan-500/5",children:L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx("div",{className:"w-2 h-2 bg-cyan-400"}),L.jsx("h3",{className:"text-lg font-bold text-cyan-400",children:u.title})]})}),L.jsx("div",{className:"p-4 space-y-2",children:u.skills.map((d,m)=>L.jsxs("div",{className:"flex items-center gap-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors group",children:[L.jsx("span",{className:"text-lg group-hover:scale-110 transition-transform",children:d.icon}),L.jsx("span",{className:"font-sans",children:d.name})]},m))})]},h))})]})}),L.jsx("section",{className:"relative min-h-screen flex items-center justify-center px-6",children:L.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto text-center",children:[L.jsxs("div",{className:"border-l-2 border-cyan-500 pl-6 mb-12 inline-block text-left",children:[L.jsx("div",{className:"text-xs text-cyan-400 mb-2 tracking-widest",children:"> CONTACT.INIT()"}),L.jsx("div",{className:"text-xs text-gray-500 mb-8 font-sans",children:"Available for opportunities"}),L.jsxs("h2",{className:"text-6xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tight",children:[L.jsx("span",{className:"text-white",children:"LET'S_"}),L.jsx("br",{}),L.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse",children:"BUILD"})]}),L.jsxs("div",{className:"text-sm text-gray-400 max-w-xl mb-8 font-sans leading-relaxed",children:[L.jsx("span",{className:"text-cyan-400",children:">"})," Open for freelance projects and full-time opportunities"]})]}),L.jsx("div",{className:"flex gap-3 justify-center",children:L.jsxs("a",{href:"mailto:said@example.com",className:"group relative px-4 py-2 border border-cyan-500/30 hover:border-cyan-400 bg-black/50 hover:bg-cyan-500/10 transition-all overflow-hidden",children:[L.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"}),L.jsxs("div",{className:"relative flex items-center gap-2",children:[L.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:L.jsx("path",{d:"M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"})}),L.jsx("span",{className:"text-xs",children:"GET_IN_TOUCH"})]})]})})]})}),L.jsx("footer",{className:"relative py-8 px-6 border-t border-cyan-500/20 z-10",children:L.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4",children:[L.jsxs("div",{className:"text-xs text-gray-600",children:[L.jsx("span",{className:"text-cyan-400",children:">"})," © 2025 SAID_ELAMRI // ALL_RIGHTS_RESERVED"]}),L.jsx("div",{className:"flex gap-6 text-xs",children:[{href:"https://github.com/saidElamri",label:"[GITHUB]"},{href:"https://www.linkedin.com/in/said-elamri/",label:"[LINKEDIN]"},{href:"mailto:said.elamri.evil@gmail.com",label:"[EMAIL]"}].map((u,h)=>L.jsx("a",{href:u.href,className:"text-gray-600 hover:text-cyan-400 transition-colors",children:u.label},h))})]})})]})};xS.createRoot(document.getElementById("root")).render(L.jsx(fS.StrictMode,{children:L.jsx(N1,{})}));
