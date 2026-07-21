(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function h_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Pd={exports:{}},Ha={},xd={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function uw(){if(Ag)return Re;Ag=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),I=Symbol.iterator;function A(O){return O===null||typeof O!="object"?null:(O=I&&O[I]||O["@@iterator"],typeof O=="function"?O:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,j={};function B(O,G,he){this.props=O,this.context=G,this.refs=j,this.updater=he||U}B.prototype.isReactComponent={},B.prototype.setState=function(O,G){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,G,"setState")},B.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function Z(){}Z.prototype=B.prototype;function te(O,G,he){this.props=O,this.context=G,this.refs=j,this.updater=he||U}var fe=te.prototype=new Z;fe.constructor=te,q(fe,B.prototype),fe.isPureReactComponent=!0;var Te=Array.isArray,ue=Object.prototype.hasOwnProperty,ye={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function C(O,G,he){var Ae,ke={},De=null,Le=null;if(G!=null)for(Ae in G.ref!==void 0&&(Le=G.ref),G.key!==void 0&&(De=""+G.key),G)ue.call(G,Ae)&&!x.hasOwnProperty(Ae)&&(ke[Ae]=G[Ae]);var je=arguments.length-2;if(je===1)ke.children=he;else if(1<je){for(var qe=Array(je),wt=0;wt<je;wt++)qe[wt]=arguments[wt+2];ke.children=qe}if(O&&O.defaultProps)for(Ae in je=O.defaultProps,je)ke[Ae]===void 0&&(ke[Ae]=je[Ae]);return{$$typeof:r,type:O,key:De,ref:Le,props:ke,_owner:ye.current}}function R(O,G){return{$$typeof:r,type:O.type,key:G,ref:O.ref,props:O.props,_owner:O._owner}}function N(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function V(O){var G={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(he){return G[he]})}var b=/\/+/g;function k(O,G){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):G.toString(36)}function rt(O,G,he,Ae,ke){var De=typeof O;(De==="undefined"||De==="boolean")&&(O=null);var Le=!1;if(O===null)Le=!0;else switch(De){case"string":case"number":Le=!0;break;case"object":switch(O.$$typeof){case r:case e:Le=!0}}if(Le)return Le=O,ke=ke(Le),O=Ae===""?"."+k(Le,0):Ae,Te(ke)?(he="",O!=null&&(he=O.replace(b,"$&/")+"/"),rt(ke,G,he,"",function(wt){return wt})):ke!=null&&(N(ke)&&(ke=R(ke,he+(!ke.key||Le&&Le.key===ke.key?"":(""+ke.key).replace(b,"$&/")+"/")+O)),G.push(ke)),1;if(Le=0,Ae=Ae===""?".":Ae+":",Te(O))for(var je=0;je<O.length;je++){De=O[je];var qe=Ae+k(De,je);Le+=rt(De,G,he,qe,ke)}else if(qe=A(O),typeof qe=="function")for(O=qe.call(O),je=0;!(De=O.next()).done;)De=De.value,qe=Ae+k(De,je++),Le+=rt(De,G,he,qe,ke);else if(De==="object")throw G=String(O),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Le}function Ot(O,G,he){if(O==null)return O;var Ae=[],ke=0;return rt(O,Ae,"","",function(De){return G.call(he,De,ke++)}),Ae}function bt(O){if(O._status===-1){var G=O._result;G=G(),G.then(function(he){(O._status===0||O._status===-1)&&(O._status=1,O._result=he)},function(he){(O._status===0||O._status===-1)&&(O._status=2,O._result=he)}),O._status===-1&&(O._status=0,O._result=G)}if(O._status===1)return O._result.default;throw O._result}var ze={current:null},ee={transition:null},pe={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:ee,ReactCurrentOwner:ye};function se(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:Ot,forEach:function(O,G,he){Ot(O,function(){G.apply(this,arguments)},he)},count:function(O){var G=0;return Ot(O,function(){G++}),G},toArray:function(O){return Ot(O,function(G){return G})||[]},only:function(O){if(!N(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Re.Component=B,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=te,Re.StrictMode=s,Re.Suspense=g,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Re.act=se,Re.cloneElement=function(O,G,he){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ae=q({},O.props),ke=O.key,De=O.ref,Le=O._owner;if(G!=null){if(G.ref!==void 0&&(De=G.ref,Le=ye.current),G.key!==void 0&&(ke=""+G.key),O.type&&O.type.defaultProps)var je=O.type.defaultProps;for(qe in G)ue.call(G,qe)&&!x.hasOwnProperty(qe)&&(Ae[qe]=G[qe]===void 0&&je!==void 0?je[qe]:G[qe])}var qe=arguments.length-2;if(qe===1)Ae.children=he;else if(1<qe){je=Array(qe);for(var wt=0;wt<qe;wt++)je[wt]=arguments[wt+2];Ae.children=je}return{$$typeof:r,type:O.type,key:ke,ref:De,props:Ae,_owner:Le}},Re.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Re.createElement=C,Re.createFactory=function(O){var G=C.bind(null,O);return G.type=O,G},Re.createRef=function(){return{current:null}},Re.forwardRef=function(O){return{$$typeof:f,render:O}},Re.isValidElement=N,Re.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:bt}},Re.memo=function(O,G){return{$$typeof:v,type:O,compare:G===void 0?null:G}},Re.startTransition=function(O){var G=ee.transition;ee.transition={};try{O()}finally{ee.transition=G}},Re.unstable_act=se,Re.useCallback=function(O,G){return ze.current.useCallback(O,G)},Re.useContext=function(O){return ze.current.useContext(O)},Re.useDebugValue=function(){},Re.useDeferredValue=function(O){return ze.current.useDeferredValue(O)},Re.useEffect=function(O,G){return ze.current.useEffect(O,G)},Re.useId=function(){return ze.current.useId()},Re.useImperativeHandle=function(O,G,he){return ze.current.useImperativeHandle(O,G,he)},Re.useInsertionEffect=function(O,G){return ze.current.useInsertionEffect(O,G)},Re.useLayoutEffect=function(O,G){return ze.current.useLayoutEffect(O,G)},Re.useMemo=function(O,G){return ze.current.useMemo(O,G)},Re.useReducer=function(O,G,he){return ze.current.useReducer(O,G,he)},Re.useRef=function(O){return ze.current.useRef(O)},Re.useState=function(O){return ze.current.useState(O)},Re.useSyncExternalStore=function(O,G,he){return ze.current.useSyncExternalStore(O,G,he)},Re.useTransition=function(){return ze.current.useTransition()},Re.version="18.3.1",Re}var Cg;function Ef(){return Cg||(Cg=1,xd.exports=uw()),xd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function cw(){if(kg)return Ha;kg=1;var r=Ef(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,v){var w,I={},A=null,U=null;v!==void 0&&(A=""+v),g.key!==void 0&&(A=""+g.key),g.ref!==void 0&&(U=g.ref);for(w in g)s.call(g,w)&&!l.hasOwnProperty(w)&&(I[w]=g[w]);if(f&&f.defaultProps)for(w in g=f.defaultProps,g)I[w]===void 0&&(I[w]=g[w]);return{$$typeof:e,type:f,key:A,ref:U,props:I,_owner:o.current}}return Ha.Fragment=t,Ha.jsx=h,Ha.jsxs=h,Ha}var Rg;function hw(){return Rg||(Rg=1,Pd.exports=cw()),Pd.exports}var y=hw(),_e=Ef();const dw=h_(_e);var Wu={},Nd={exports:{}},tn={},Dd={exports:{}},Vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function fw(){return Pg||(Pg=1,function(r){function e(ee,pe){var se=ee.length;ee.push(pe);e:for(;0<se;){var O=se-1>>>1,G=ee[O];if(0<o(G,pe))ee[O]=pe,ee[se]=G,se=O;else break e}}function t(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var pe=ee[0],se=ee.pop();if(se!==pe){ee[0]=se;e:for(var O=0,G=ee.length,he=G>>>1;O<he;){var Ae=2*(O+1)-1,ke=ee[Ae],De=Ae+1,Le=ee[De];if(0>o(ke,se))De<G&&0>o(Le,ke)?(ee[O]=Le,ee[De]=se,O=De):(ee[O]=ke,ee[Ae]=se,O=Ae);else if(De<G&&0>o(Le,se))ee[O]=Le,ee[De]=se,O=De;else break e}}return pe}function o(ee,pe){var se=ee.sortIndex-pe.sortIndex;return se!==0?se:ee.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],v=[],w=1,I=null,A=3,U=!1,q=!1,j=!1,B=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function fe(ee){for(var pe=t(v);pe!==null;){if(pe.callback===null)s(v);else if(pe.startTime<=ee)s(v),pe.sortIndex=pe.expirationTime,e(g,pe);else break;pe=t(v)}}function Te(ee){if(j=!1,fe(ee),!q)if(t(g)!==null)q=!0,bt(ue);else{var pe=t(v);pe!==null&&ze(Te,pe.startTime-ee)}}function ue(ee,pe){q=!1,j&&(j=!1,Z(C),C=-1),U=!0;var se=A;try{for(fe(pe),I=t(g);I!==null&&(!(I.expirationTime>pe)||ee&&!V());){var O=I.callback;if(typeof O=="function"){I.callback=null,A=I.priorityLevel;var G=O(I.expirationTime<=pe);pe=r.unstable_now(),typeof G=="function"?I.callback=G:I===t(g)&&s(g),fe(pe)}else s(g);I=t(g)}if(I!==null)var he=!0;else{var Ae=t(v);Ae!==null&&ze(Te,Ae.startTime-pe),he=!1}return he}finally{I=null,A=se,U=!1}}var ye=!1,x=null,C=-1,R=5,N=-1;function V(){return!(r.unstable_now()-N<R)}function b(){if(x!==null){var ee=r.unstable_now();N=ee;var pe=!0;try{pe=x(!0,ee)}finally{pe?k():(ye=!1,x=null)}}else ye=!1}var k;if(typeof te=="function")k=function(){te(b)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Ot=rt.port2;rt.port1.onmessage=b,k=function(){Ot.postMessage(null)}}else k=function(){B(b,0)};function bt(ee){x=ee,ye||(ye=!0,k())}function ze(ee,pe){C=B(function(){ee(r.unstable_now())},pe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){q||U||(q=!0,bt(ue))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return A},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ee){switch(A){case 1:case 2:case 3:var pe=3;break;default:pe=A}var se=A;A=pe;try{return ee()}finally{A=se}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,pe){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var se=A;A=ee;try{return pe()}finally{A=se}},r.unstable_scheduleCallback=function(ee,pe,se){var O=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,ee){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=se+G,ee={id:w++,callback:pe,priorityLevel:ee,startTime:se,expirationTime:G,sortIndex:-1},se>O?(ee.sortIndex=se,e(v,ee),t(g)===null&&ee===t(v)&&(j?(Z(C),C=-1):j=!0,ze(Te,se-O))):(ee.sortIndex=G,e(g,ee),q||U||(q=!0,bt(ue))),ee},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(ee){var pe=A;return function(){var se=A;A=pe;try{return ee.apply(this,arguments)}finally{A=se}}}}(Vd)),Vd}var xg;function pw(){return xg||(xg=1,Dd.exports=fw()),Dd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function mw(){if(Ng)return tn;Ng=1;var r=Ef(),e=pw();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},I={};function A(n){return g.call(I,n)?!0:g.call(w,n)?!1:v.test(n)?I[n]=!0:(w[n]=!0,!1)}function U(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function q(n,i,a,c){if(i===null||typeof i>"u"||U(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function j(n,i,a,c,d,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new j(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];B[i]=new j(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new j(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new j(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new j(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new j(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new j(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new j(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new j(n,5,!1,n.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function te(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(Z,te);B[i]=new j(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(Z,te);B[i]=new j(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(Z,te);B[i]=new j(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new j(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new j(n,1,!1,n.toLowerCase(),null,!0,!0)});function fe(n,i,a,c){var d=B.hasOwnProperty(i)?B[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(q(i,a,d,c)&&(a=null),c||d===null?A(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Te=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ue=Symbol.for("react.element"),ye=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),V=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),Ot=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),ee=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,O;function G(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var he=!1;function Ae(n,i){if(!n||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(z){var c=z}Reflect.construct(n,[],i)}else{try{i.call()}catch(z){c=z}n.call(i.prototype)}else{try{throw Error()}catch(z){c=z}n()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),m=c.stack.split(`
`),E=d.length-1,S=m.length-1;1<=E&&0<=S&&d[E]!==m[S];)S--;for(;1<=E&&0<=S;E--,S--)if(d[E]!==m[S]){if(E!==1||S!==1)do if(E--,S--,0>S||d[E]!==m[S]){var P=`
`+d[E].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=E&&0<=S);break}}}finally{he=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?G(n):""}function ke(n){switch(n.tag){case 5:return G(n.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return n=Ae(n.type,!1),n;case 11:return n=Ae(n.type.render,!1),n;case 1:return n=Ae(n.type,!0),n;default:return""}}function De(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case x:return"Fragment";case ye:return"Portal";case R:return"Profiler";case C:return"StrictMode";case k:return"Suspense";case rt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case b:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ot:return i=n.displayName||null,i!==null?i:De(n.type)||"Memo";case bt:i=n._payload,n=n._init;try{return De(n(i))}catch{}}return null}function Le(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(i);case 8:return i===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function je(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function qe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function wt(n){var i=qe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){c=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function mr(n){n._valueTracker||(n._valueTracker=wt(n))}function Ns(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=qe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function qr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Bi(n,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ds(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=je(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Xo(n,i){i=i.checked,i!=null&&fe(n,"checked",i,!1)}function Jo(n,i){Xo(n,i);var a=je(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Vs(n,i.type,a):i.hasOwnProperty("defaultValue")&&Vs(n,i.type,je(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Nl(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Vs(n,i,a){(i!=="number"||qr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var gr=Array.isArray;function yr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+je(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Zo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Os(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(gr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:je(a)}}function bs(n,i){var a=je(i.value),c=je(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function ea(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var _r,ta=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(_r=_r||document.createElement("div"),_r.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=_r.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Hr(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var $i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qi=["Webkit","ms","Moz","O"];Object.keys($i).forEach(function(n){qi.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),$i[i]=$i[n]})});function na(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||$i.hasOwnProperty(n)&&$i[n]?(""+i).trim():i+"px"}function ra(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=na(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var ia=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sa(n,i){if(i){if(ia[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function oa(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hi=null;function Ms(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ls=null,gn=null,Qn=null;function js(n){if(n=xa(n)){if(typeof Ls!="function")throw Error(t(280));var i=n.stateNode;i&&(i=au(i),Ls(n.stateNode,n.type,i))}}function Yn(n){gn?Qn?Qn.push(n):Qn=[n]:gn=n}function aa(){if(gn){var n=gn,i=Qn;if(Qn=gn=null,js(n),i)for(n=0;n<i.length;n++)js(i[n])}}function Wi(n,i){return n(i)}function la(){}var vr=!1;function ua(n,i,a){if(vr)return n(i,a);vr=!0;try{return Wi(n,i,a)}finally{vr=!1,(gn!==null||Qn!==null)&&(la(),aa())}}function ot(n,i){var a=n.stateNode;if(a===null)return null;var c=au(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Fs=!1;if(f)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){Fs=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{Fs=!1}function Gi(n,i,a,c,d,m,E,S,P){var z=Array.prototype.slice.call(arguments,3);try{i.apply(a,z)}catch(Q){this.onError(Q)}}var Ki=!1,Us=null,xn=!1,ca=null,rh={onError:function(n){Ki=!0,Us=n}};function zs(n,i,a,c,d,m,E,S,P){Ki=!1,Us=null,Gi.apply(rh,arguments)}function Dl(n,i,a,c,d,m,E,S,P){if(zs.apply(this,arguments),Ki){if(Ki){var z=Us;Ki=!1,Us=null}else throw Error(t(198));xn||(xn=!0,ca=z)}}function Nn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Qi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Dn(n){if(Nn(n)!==n)throw Error(t(188))}function Vl(n){var i=n.alternate;if(!i){if(i=Nn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Dn(d),n;if(m===c)return Dn(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var E=!1,S=d.child;S;){if(S===a){E=!0,a=d,c=m;break}if(S===c){E=!0,c=d,a=m;break}S=S.sibling}if(!E){for(S=m.child;S;){if(S===a){E=!0,a=m,c=d;break}if(S===c){E=!0,c=m,a=d;break}S=S.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ha(n){return n=Vl(n),n!==null?Bs(n):null}function Bs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Bs(n);if(i!==null)return i;n=n.sibling}return null}var $s=e.unstable_scheduleCallback,da=e.unstable_cancelCallback,Ol=e.unstable_shouldYield,ih=e.unstable_requestPaint,He=e.unstable_now,bl=e.unstable_getCurrentPriorityLevel,Yi=e.unstable_ImmediatePriority,Wr=e.unstable_UserBlockingPriority,yn=e.unstable_NormalPriority,fa=e.unstable_LowPriority,Ml=e.unstable_IdlePriority,Xi=null,sn=null;function Ll(n){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Xi,n,void 0,(n.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:Fl,pa=Math.log,jl=Math.LN2;function Fl(n){return n>>>=0,n===0?32:31-(pa(n)/jl|0)|0}var qs=64,Hs=4194304;function Gr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ji(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,E=a&268435455;if(E!==0){var S=E&~d;S!==0?c=Gr(S):(m&=E,m!==0&&(c=Gr(m)))}else E=a&~d,E!==0?c=Gr(E):m!==0&&(c=Gr(m));if(c===0)return 0;if(i!==0&&i!==c&&!(i&d)&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if(c&4&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-qt(i),d=1<<a,c|=n[a],i&=~d;return c}function sh(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Er(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-qt(m),S=1<<E,P=d[E];P===-1?(!(S&a)||S&c)&&(d[E]=sh(S,i)):P<=i&&(n.expiredLanes|=S),m&=~S}}function on(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Zi(){var n=qs;return qs<<=1,!(qs&4194240)&&(qs=64),n}function Kr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Qr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-qt(i),n[i]=a}function $e(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-qt(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Yr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-qt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Ne=0;function Xr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ul,Ws,zl,Bl,$l,ma=!1,Xn=[],kt=null,Vn=null,On=null,Jr=new Map,_n=new Map,Jn=[],oh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ql(n,i){switch(n){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Jr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(i.pointerId)}}function Kt(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=xa(i),i!==null&&Ws(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function ah(n,i,a,c,d){switch(i){case"focusin":return kt=Kt(kt,n,i,a,c,d),!0;case"dragenter":return Vn=Kt(Vn,n,i,a,c,d),!0;case"mouseover":return On=Kt(On,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Jr.set(m,Kt(Jr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,_n.set(m,Kt(_n.get(m)||null,n,i,a,c,d)),!0}return!1}function Hl(n){var i=is(n.target);if(i!==null){var a=Nn(i);if(a!==null){if(i=a.tag,i===13){if(i=Qi(a),i!==null){n.blockedOn=i,$l(n.priority,function(){zl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function wr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Gs(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Hi=c,a.target.dispatchEvent(c),Hi=null}else return i=xa(a),i!==null&&Ws(i),n.blockedOn=a,!1;i.shift()}return!0}function es(n,i,a){wr(n)&&a.delete(i)}function Wl(){ma=!1,kt!==null&&wr(kt)&&(kt=null),Vn!==null&&wr(Vn)&&(Vn=null),On!==null&&wr(On)&&(On=null),Jr.forEach(es),_n.forEach(es)}function bn(n,i){n.blockedOn===i&&(n.blockedOn=null,ma||(ma=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Wl)))}function Mn(n){function i(d){return bn(d,n)}if(0<Xn.length){bn(Xn[0],n);for(var a=1;a<Xn.length;a++){var c=Xn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(kt!==null&&bn(kt,n),Vn!==null&&bn(Vn,n),On!==null&&bn(On,n),Jr.forEach(i),_n.forEach(i),a=0;a<Jn.length;a++)c=Jn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Jn.length&&(a=Jn[0],a.blockedOn===null);)Hl(a),a.blockedOn===null&&Jn.shift()}var Tr=Te.ReactCurrentBatchConfig,Zr=!0;function Je(n,i,a,c){var d=Ne,m=Tr.transition;Tr.transition=null;try{Ne=1,ga(n,i,a,c)}finally{Ne=d,Tr.transition=m}}function lh(n,i,a,c){var d=Ne,m=Tr.transition;Tr.transition=null;try{Ne=4,ga(n,i,a,c)}finally{Ne=d,Tr.transition=m}}function ga(n,i,a,c){if(Zr){var d=Gs(n,i,a,c);if(d===null)vh(n,i,c,ts,a),ql(n,c);else if(ah(d,n,i,a,c))c.stopPropagation();else if(ql(n,c),i&4&&-1<oh.indexOf(n)){for(;d!==null;){var m=xa(d);if(m!==null&&Ul(m),m=Gs(n,i,a,c),m===null&&vh(n,i,c,ts,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else vh(n,i,c,null,a)}}var ts=null;function Gs(n,i,a,c){if(ts=null,n=Ms(c),n=is(n),n!==null)if(i=Nn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Qi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ts=n,null}function ya(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bl()){case Yi:return 1;case Wr:return 4;case yn:case fa:return 16;case Ml:return 536870912;default:return 16}default:return 16}}var an=null,Ks=null,Qt=null;function _a(){if(Qt)return Qt;var n,i=Ks,a=i.length,c,d="value"in an?an.value:an.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var E=a-n;for(c=1;c<=E&&i[a-c]===d[m-c];c++);return Qt=d.slice(n,1<c?1-c:void 0)}function Qs(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Zn(){return!0}function va(){return!1}function Rt(n){function i(a,c,d,m,E){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Zn:va,this.isPropagationStopped=va,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),i}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ys=Rt(Ln),er=se({},Ln,{view:0,detail:0}),uh=Rt(er),Xs,Ir,ei,ns=se({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tr,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ei&&(ei&&n.type==="mousemove"?(Xs=n.screenX-ei.screenX,Ir=n.screenY-ei.screenY):Ir=Xs=0,ei=n),Xs)},movementY:function(n){return"movementY"in n?n.movementY:Ir}}),Js=Rt(ns),Ea=se({},ns,{dataTransfer:0}),Gl=Rt(Ea),Zs=se({},er,{relatedTarget:0}),eo=Rt(Zs),Kl=se({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Sr=Rt(Kl),Ql=se({},Ln,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Yl=Rt(Ql),Xl=se({},Ln,{data:0}),wa=Rt(Xl),to={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ht={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Jl[n])?!!i[n]:!1}function tr(){return Zl}var u=se({},er,{key:function(n){if(n.key){var i=to[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Qs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ht[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tr,charCode:function(n){return n.type==="keypress"?Qs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Qs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=Rt(u),_=se({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=Rt(_),M=se({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tr}),$=Rt(M),J=se({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=Rt(J),gt=se({},ns,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ve=Rt(gt),Tt=[9,13,27,32],ut=f&&"CompositionEvent"in window,vn=null;f&&"documentMode"in document&&(vn=document.documentMode);var ln=f&&"TextEvent"in window&&!vn,rs=f&&(!ut||vn&&8<vn&&11>=vn),no=" ",vp=!1;function Ep(n,i){switch(n){case"keyup":return Tt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ro=!1;function oE(n,i){switch(n){case"compositionend":return wp(i);case"keypress":return i.which!==32?null:(vp=!0,no);case"textInput":return n=i.data,n===no&&vp?null:n;default:return null}}function aE(n,i){if(ro)return n==="compositionend"||!ut&&Ep(n,i)?(n=_a(),Qt=Ks=an=null,ro=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return rs&&i.locale!=="ko"?null:i.data;default:return null}}var lE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!lE[n.type]:i==="textarea"}function Ip(n,i,a,c){Yn(c),i=iu(i,"onChange"),0<i.length&&(a=new Ys("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ta=null,Ia=null;function uE(n){zp(n,0)}function eu(n){var i=lo(n);if(Ns(i))return n}function cE(n,i){if(n==="change")return i}var Sp=!1;if(f){var ch;if(f){var hh="oninput"in document;if(!hh){var Ap=document.createElement("div");Ap.setAttribute("oninput","return;"),hh=typeof Ap.oninput=="function"}ch=hh}else ch=!1;Sp=ch&&(!document.documentMode||9<document.documentMode)}function Cp(){Ta&&(Ta.detachEvent("onpropertychange",kp),Ia=Ta=null)}function kp(n){if(n.propertyName==="value"&&eu(Ia)){var i=[];Ip(i,Ia,n,Ms(n)),ua(uE,i)}}function hE(n,i,a){n==="focusin"?(Cp(),Ta=i,Ia=a,Ta.attachEvent("onpropertychange",kp)):n==="focusout"&&Cp()}function dE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return eu(Ia)}function fE(n,i){if(n==="click")return eu(i)}function pE(n,i){if(n==="input"||n==="change")return eu(i)}function mE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var jn=typeof Object.is=="function"?Object.is:mE;function Sa(n,i){if(jn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!jn(n[d],i[d]))return!1}return!0}function Rp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Pp(n,i){var a=Rp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rp(a)}}function xp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?xp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Np(){for(var n=window,i=qr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=qr(n.document)}return i}function dh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function gE(n){var i=Np(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&xp(a.ownerDocument.documentElement,a)){if(c!==null&&dh(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Pp(a,m);var E=Pp(a,c);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var yE=f&&"documentMode"in document&&11>=document.documentMode,io=null,fh=null,Aa=null,ph=!1;function Dp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ph||io==null||io!==qr(c)||(c=io,"selectionStart"in c&&dh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Aa&&Sa(Aa,c)||(Aa=c,c=iu(fh,"onSelect"),0<c.length&&(i=new Ys("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=io)))}function tu(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var so={animationend:tu("Animation","AnimationEnd"),animationiteration:tu("Animation","AnimationIteration"),animationstart:tu("Animation","AnimationStart"),transitionend:tu("Transition","TransitionEnd")},mh={},Vp={};f&&(Vp=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function nu(n){if(mh[n])return mh[n];if(!so[n])return n;var i=so[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Vp)return mh[n]=i[a];return n}var Op=nu("animationend"),bp=nu("animationiteration"),Mp=nu("animationstart"),Lp=nu("transitionend"),jp=new Map,Fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ti(n,i){jp.set(n,i),l(i,[n])}for(var gh=0;gh<Fp.length;gh++){var yh=Fp[gh],_E=yh.toLowerCase(),vE=yh[0].toUpperCase()+yh.slice(1);ti(_E,"on"+vE)}ti(Op,"onAnimationEnd"),ti(bp,"onAnimationIteration"),ti(Mp,"onAnimationStart"),ti("dblclick","onDoubleClick"),ti("focusin","onFocus"),ti("focusout","onBlur"),ti(Lp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ca));function Up(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Dl(c,i,void 0,n),n.currentTarget=null}function zp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var E=c.length-1;0<=E;E--){var S=c[E],P=S.instance,z=S.currentTarget;if(S=S.listener,P!==m&&d.isPropagationStopped())break e;Up(d,S,z),m=P}else for(E=0;E<c.length;E++){if(S=c[E],P=S.instance,z=S.currentTarget,S=S.listener,P!==m&&d.isPropagationStopped())break e;Up(d,S,z),m=P}}}if(xn)throw n=ca,xn=!1,ca=null,n}function Ke(n,i){var a=i[Ah];a===void 0&&(a=i[Ah]=new Set);var c=n+"__bubble";a.has(c)||(Bp(i,n,2,!1),a.add(c))}function _h(n,i,a){var c=0;i&&(c|=4),Bp(a,n,c,i)}var ru="_reactListening"+Math.random().toString(36).slice(2);function ka(n){if(!n[ru]){n[ru]=!0,s.forEach(function(a){a!=="selectionchange"&&(EE.has(a)||_h(a,!1,n),_h(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ru]||(i[ru]=!0,_h("selectionchange",!1,i))}}function Bp(n,i,a,c){switch(ya(i)){case 1:var d=Je;break;case 4:d=lh;break;default:d=ga}a=d.bind(null,i,a,n),d=void 0,!Fs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function vh(n,i,a,c,d){var m=c;if(!(i&1)&&!(i&2)&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(E===4)for(E=c.return;E!==null;){var P=E.tag;if((P===3||P===4)&&(P=E.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;E=E.return}for(;S!==null;){if(E=is(S),E===null)return;if(P=E.tag,P===5||P===6){c=m=E;continue e}S=S.parentNode}}c=c.return}ua(function(){var z=m,Q=Ms(a),Y=[];e:{var K=jp.get(n);if(K!==void 0){var re=Ys,ae=n;switch(n){case"keypress":if(Qs(a)===0)break e;case"keydown":case"keyup":re=p;break;case"focusin":ae="focus",re=eo;break;case"focusout":ae="blur",re=eo;break;case"beforeblur":case"afterblur":re=eo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Gl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=$;break;case Op:case bp:case Mp:re=Sr;break;case Lp:re=Ue;break;case"scroll":re=uh;break;case"wheel":re=Ve;break;case"copy":case"cut":case"paste":re=Yl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=T}var le=(i&4)!==0,at=!le&&n==="scroll",L=le?K!==null?K+"Capture":null:K;le=[];for(var D=z,F;D!==null;){F=D;var X=F.stateNode;if(F.tag===5&&X!==null&&(F=X,L!==null&&(X=ot(D,L),X!=null&&le.push(Ra(D,X,F)))),at)break;D=D.return}0<le.length&&(K=new re(K,ae,null,a,Q),Y.push({event:K,listeners:le}))}}if(!(i&7)){e:{if(K=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",K&&a!==Hi&&(ae=a.relatedTarget||a.fromElement)&&(is(ae)||ae[Ar]))break e;if((re||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,re?(ae=a.relatedTarget||a.toElement,re=z,ae=ae?is(ae):null,ae!==null&&(at=Nn(ae),ae!==at||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(re=null,ae=z),re!==ae)){if(le=Js,X="onMouseLeave",L="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(le=T,X="onPointerLeave",L="onPointerEnter",D="pointer"),at=re==null?K:lo(re),F=ae==null?K:lo(ae),K=new le(X,D+"leave",re,a,Q),K.target=at,K.relatedTarget=F,X=null,is(Q)===z&&(le=new le(L,D+"enter",ae,a,Q),le.target=F,le.relatedTarget=at,X=le),at=X,re&&ae)t:{for(le=re,L=ae,D=0,F=le;F;F=oo(F))D++;for(F=0,X=L;X;X=oo(X))F++;for(;0<D-F;)le=oo(le),D--;for(;0<F-D;)L=oo(L),F--;for(;D--;){if(le===L||L!==null&&le===L.alternate)break t;le=oo(le),L=oo(L)}le=null}else le=null;re!==null&&$p(Y,K,re,le,!1),ae!==null&&at!==null&&$p(Y,at,ae,le,!0)}}e:{if(K=z?lo(z):window,re=K.nodeName&&K.nodeName.toLowerCase(),re==="select"||re==="input"&&K.type==="file")var ce=cE;else if(Tp(K))if(Sp)ce=pE;else{ce=dE;var me=hE}else(re=K.nodeName)&&re.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(ce=fE);if(ce&&(ce=ce(n,z))){Ip(Y,ce,a,Q);break e}me&&me(n,K,z),n==="focusout"&&(me=K._wrapperState)&&me.controlled&&K.type==="number"&&Vs(K,"number",K.value)}switch(me=z?lo(z):window,n){case"focusin":(Tp(me)||me.contentEditable==="true")&&(io=me,fh=z,Aa=null);break;case"focusout":Aa=fh=io=null;break;case"mousedown":ph=!0;break;case"contextmenu":case"mouseup":case"dragend":ph=!1,Dp(Y,a,Q);break;case"selectionchange":if(yE)break;case"keydown":case"keyup":Dp(Y,a,Q)}var ge;if(ut)e:{switch(n){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else ro?Ep(n,a)&&(we="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(rs&&a.locale!=="ko"&&(ro||we!=="onCompositionStart"?we==="onCompositionEnd"&&ro&&(ge=_a()):(an=Q,Ks="value"in an?an.value:an.textContent,ro=!0)),me=iu(z,we),0<me.length&&(we=new wa(we,n,null,a,Q),Y.push({event:we,listeners:me}),ge?we.data=ge:(ge=wp(a),ge!==null&&(we.data=ge)))),(ge=ln?oE(n,a):aE(n,a))&&(z=iu(z,"onBeforeInput"),0<z.length&&(Q=new wa("onBeforeInput","beforeinput",null,a,Q),Y.push({event:Q,listeners:z}),Q.data=ge))}zp(Y,i)})}function Ra(n,i,a){return{instance:n,listener:i,currentTarget:a}}function iu(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=ot(n,a),m!=null&&c.unshift(Ra(n,m,d)),m=ot(n,i),m!=null&&c.push(Ra(n,m,d))),n=n.return}return c}function oo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function $p(n,i,a,c,d){for(var m=i._reactName,E=[];a!==null&&a!==c;){var S=a,P=S.alternate,z=S.stateNode;if(P!==null&&P===c)break;S.tag===5&&z!==null&&(S=z,d?(P=ot(a,m),P!=null&&E.unshift(Ra(a,P,S))):d||(P=ot(a,m),P!=null&&E.push(Ra(a,P,S)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var wE=/\r\n?/g,TE=/\u0000|\uFFFD/g;function qp(n){return(typeof n=="string"?n:""+n).replace(wE,`
`).replace(TE,"")}function su(n,i,a){if(i=qp(i),qp(n)!==i&&a)throw Error(t(425))}function ou(){}var Eh=null,wh=null;function Th(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ih=typeof setTimeout=="function"?setTimeout:void 0,IE=typeof clearTimeout=="function"?clearTimeout:void 0,Hp=typeof Promise=="function"?Promise:void 0,SE=typeof queueMicrotask=="function"?queueMicrotask:typeof Hp<"u"?function(n){return Hp.resolve(null).then(n).catch(AE)}:Ih;function AE(n){setTimeout(function(){throw n})}function Sh(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Mn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Mn(i)}function ni(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Wp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ao=Math.random().toString(36).slice(2),nr="__reactFiber$"+ao,Pa="__reactProps$"+ao,Ar="__reactContainer$"+ao,Ah="__reactEvents$"+ao,CE="__reactListeners$"+ao,kE="__reactHandles$"+ao;function is(n){var i=n[nr];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ar]||a[nr]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Wp(n);n!==null;){if(a=n[nr])return a;n=Wp(n)}return i}n=a,a=n.parentNode}return null}function xa(n){return n=n[nr]||n[Ar],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function lo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function au(n){return n[Pa]||null}var Ch=[],uo=-1;function ri(n){return{current:n}}function Qe(n){0>uo||(n.current=Ch[uo],Ch[uo]=null,uo--)}function We(n,i){uo++,Ch[uo]=n.current,n.current=i}var ii={},Mt=ri(ii),Yt=ri(!1),ss=ii;function co(n,i){var a=n.type.contextTypes;if(!a)return ii;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Xt(n){return n=n.childContextTypes,n!=null}function lu(){Qe(Yt),Qe(Mt)}function Gp(n,i,a){if(Mt.current!==ii)throw Error(t(168));We(Mt,i),We(Yt,a)}function Kp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Le(n)||"Unknown",d));return se({},a,c)}function uu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ii,ss=Mt.current,We(Mt,n),We(Yt,Yt.current),!0}function Qp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Kp(n,i,ss),c.__reactInternalMemoizedMergedChildContext=n,Qe(Yt),Qe(Mt),We(Mt,n)):Qe(Yt),We(Yt,a)}var Cr=null,cu=!1,kh=!1;function Yp(n){Cr===null?Cr=[n]:Cr.push(n)}function RE(n){cu=!0,Yp(n)}function si(){if(!kh&&Cr!==null){kh=!0;var n=0,i=Ne;try{var a=Cr;for(Ne=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Cr=null,cu=!1}catch(d){throw Cr!==null&&(Cr=Cr.slice(n+1)),$s(Yi,si),d}finally{Ne=i,kh=!1}}return null}var ho=[],fo=0,hu=null,du=0,En=[],wn=0,os=null,kr=1,Rr="";function as(n,i){ho[fo++]=du,ho[fo++]=hu,hu=n,du=i}function Xp(n,i,a){En[wn++]=kr,En[wn++]=Rr,En[wn++]=os,os=n;var c=kr;n=Rr;var d=32-qt(c)-1;c&=~(1<<d),a+=1;var m=32-qt(i)+d;if(30<m){var E=d-d%5;m=(c&(1<<E)-1).toString(32),c>>=E,d-=E,kr=1<<32-qt(i)+d|a<<d|c,Rr=m+n}else kr=1<<m|a<<d|c,Rr=n}function Rh(n){n.return!==null&&(as(n,1),Xp(n,1,0))}function Ph(n){for(;n===hu;)hu=ho[--fo],ho[fo]=null,du=ho[--fo],ho[fo]=null;for(;n===os;)os=En[--wn],En[wn]=null,Rr=En[--wn],En[wn]=null,kr=En[--wn],En[wn]=null}var un=null,cn=null,Ze=!1,Fn=null;function Jp(n,i){var a=An(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Zp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,un=n,cn=ni(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,un=n,cn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=os!==null?{id:kr,overflow:Rr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=An(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,un=n,cn=null,!0):!1;default:return!1}}function xh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Nh(n){if(Ze){var i=cn;if(i){var a=i;if(!Zp(n,i)){if(xh(n))throw Error(t(418));i=ni(a.nextSibling);var c=un;i&&Zp(n,i)?Jp(c,a):(n.flags=n.flags&-4097|2,Ze=!1,un=n)}}else{if(xh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ze=!1,un=n}}}function em(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;un=n}function fu(n){if(n!==un)return!1;if(!Ze)return em(n),Ze=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Th(n.type,n.memoizedProps)),i&&(i=cn)){if(xh(n))throw tm(),Error(t(418));for(;i;)Jp(n,i),i=ni(i.nextSibling)}if(em(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){cn=ni(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}cn=null}}else cn=un?ni(n.stateNode.nextSibling):null;return!0}function tm(){for(var n=cn;n;)n=ni(n.nextSibling)}function po(){cn=un=null,Ze=!1}function Dh(n){Fn===null?Fn=[n]:Fn.push(n)}var PE=Te.ReactCurrentBatchConfig;function Na(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var S=d.refs;E===null?delete S[m]:S[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function pu(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function nm(n){var i=n._init;return i(n._payload)}function rm(n){function i(L,D){if(n){var F=L.deletions;F===null?(L.deletions=[D],L.flags|=16):F.push(D)}}function a(L,D){if(!n)return null;for(;D!==null;)i(L,D),D=D.sibling;return null}function c(L,D){for(L=new Map;D!==null;)D.key!==null?L.set(D.key,D):L.set(D.index,D),D=D.sibling;return L}function d(L,D){return L=fi(L,D),L.index=0,L.sibling=null,L}function m(L,D,F){return L.index=F,n?(F=L.alternate,F!==null?(F=F.index,F<D?(L.flags|=2,D):F):(L.flags|=2,D)):(L.flags|=1048576,D)}function E(L){return n&&L.alternate===null&&(L.flags|=2),L}function S(L,D,F,X){return D===null||D.tag!==6?(D=Id(F,L.mode,X),D.return=L,D):(D=d(D,F),D.return=L,D)}function P(L,D,F,X){var ce=F.type;return ce===x?Q(L,D,F.props.children,X,F.key):D!==null&&(D.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===bt&&nm(ce)===D.type)?(X=d(D,F.props),X.ref=Na(L,D,F),X.return=L,X):(X=ju(F.type,F.key,F.props,null,L.mode,X),X.ref=Na(L,D,F),X.return=L,X)}function z(L,D,F,X){return D===null||D.tag!==4||D.stateNode.containerInfo!==F.containerInfo||D.stateNode.implementation!==F.implementation?(D=Sd(F,L.mode,X),D.return=L,D):(D=d(D,F.children||[]),D.return=L,D)}function Q(L,D,F,X,ce){return D===null||D.tag!==7?(D=ms(F,L.mode,X,ce),D.return=L,D):(D=d(D,F),D.return=L,D)}function Y(L,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Id(""+D,L.mode,F),D.return=L,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ue:return F=ju(D.type,D.key,D.props,null,L.mode,F),F.ref=Na(L,null,D),F.return=L,F;case ye:return D=Sd(D,L.mode,F),D.return=L,D;case bt:var X=D._init;return Y(L,X(D._payload),F)}if(gr(D)||pe(D))return D=ms(D,L.mode,F,null),D.return=L,D;pu(L,D)}return null}function K(L,D,F,X){var ce=D!==null?D.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ce!==null?null:S(L,D,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ue:return F.key===ce?P(L,D,F,X):null;case ye:return F.key===ce?z(L,D,F,X):null;case bt:return ce=F._init,K(L,D,ce(F._payload),X)}if(gr(F)||pe(F))return ce!==null?null:Q(L,D,F,X,null);pu(L,F)}return null}function re(L,D,F,X,ce){if(typeof X=="string"&&X!==""||typeof X=="number")return L=L.get(F)||null,S(D,L,""+X,ce);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case ue:return L=L.get(X.key===null?F:X.key)||null,P(D,L,X,ce);case ye:return L=L.get(X.key===null?F:X.key)||null,z(D,L,X,ce);case bt:var me=X._init;return re(L,D,F,me(X._payload),ce)}if(gr(X)||pe(X))return L=L.get(F)||null,Q(D,L,X,ce,null);pu(D,X)}return null}function ae(L,D,F,X){for(var ce=null,me=null,ge=D,we=D=0,At=null;ge!==null&&we<F.length;we++){ge.index>we?(At=ge,ge=null):At=ge.sibling;var Me=K(L,ge,F[we],X);if(Me===null){ge===null&&(ge=At);break}n&&ge&&Me.alternate===null&&i(L,ge),D=m(Me,D,we),me===null?ce=Me:me.sibling=Me,me=Me,ge=At}if(we===F.length)return a(L,ge),Ze&&as(L,we),ce;if(ge===null){for(;we<F.length;we++)ge=Y(L,F[we],X),ge!==null&&(D=m(ge,D,we),me===null?ce=ge:me.sibling=ge,me=ge);return Ze&&as(L,we),ce}for(ge=c(L,ge);we<F.length;we++)At=re(ge,L,we,F[we],X),At!==null&&(n&&At.alternate!==null&&ge.delete(At.key===null?we:At.key),D=m(At,D,we),me===null?ce=At:me.sibling=At,me=At);return n&&ge.forEach(function(pi){return i(L,pi)}),Ze&&as(L,we),ce}function le(L,D,F,X){var ce=pe(F);if(typeof ce!="function")throw Error(t(150));if(F=ce.call(F),F==null)throw Error(t(151));for(var me=ce=null,ge=D,we=D=0,At=null,Me=F.next();ge!==null&&!Me.done;we++,Me=F.next()){ge.index>we?(At=ge,ge=null):At=ge.sibling;var pi=K(L,ge,Me.value,X);if(pi===null){ge===null&&(ge=At);break}n&&ge&&pi.alternate===null&&i(L,ge),D=m(pi,D,we),me===null?ce=pi:me.sibling=pi,me=pi,ge=At}if(Me.done)return a(L,ge),Ze&&as(L,we),ce;if(ge===null){for(;!Me.done;we++,Me=F.next())Me=Y(L,Me.value,X),Me!==null&&(D=m(Me,D,we),me===null?ce=Me:me.sibling=Me,me=Me);return Ze&&as(L,we),ce}for(ge=c(L,ge);!Me.done;we++,Me=F.next())Me=re(ge,L,we,Me.value,X),Me!==null&&(n&&Me.alternate!==null&&ge.delete(Me.key===null?we:Me.key),D=m(Me,D,we),me===null?ce=Me:me.sibling=Me,me=Me);return n&&ge.forEach(function(lw){return i(L,lw)}),Ze&&as(L,we),ce}function at(L,D,F,X){if(typeof F=="object"&&F!==null&&F.type===x&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case ue:e:{for(var ce=F.key,me=D;me!==null;){if(me.key===ce){if(ce=F.type,ce===x){if(me.tag===7){a(L,me.sibling),D=d(me,F.props.children),D.return=L,L=D;break e}}else if(me.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===bt&&nm(ce)===me.type){a(L,me.sibling),D=d(me,F.props),D.ref=Na(L,me,F),D.return=L,L=D;break e}a(L,me);break}else i(L,me);me=me.sibling}F.type===x?(D=ms(F.props.children,L.mode,X,F.key),D.return=L,L=D):(X=ju(F.type,F.key,F.props,null,L.mode,X),X.ref=Na(L,D,F),X.return=L,L=X)}return E(L);case ye:e:{for(me=F.key;D!==null;){if(D.key===me)if(D.tag===4&&D.stateNode.containerInfo===F.containerInfo&&D.stateNode.implementation===F.implementation){a(L,D.sibling),D=d(D,F.children||[]),D.return=L,L=D;break e}else{a(L,D);break}else i(L,D);D=D.sibling}D=Sd(F,L.mode,X),D.return=L,L=D}return E(L);case bt:return me=F._init,at(L,D,me(F._payload),X)}if(gr(F))return ae(L,D,F,X);if(pe(F))return le(L,D,F,X);pu(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,D!==null&&D.tag===6?(a(L,D.sibling),D=d(D,F),D.return=L,L=D):(a(L,D),D=Id(F,L.mode,X),D.return=L,L=D),E(L)):a(L,D)}return at}var mo=rm(!0),im=rm(!1),mu=ri(null),gu=null,go=null,Vh=null;function Oh(){Vh=go=gu=null}function bh(n){var i=mu.current;Qe(mu),n._currentValue=i}function Mh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function yo(n,i){gu=n,Vh=go=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Jt=!0),n.firstContext=null)}function Tn(n){var i=n._currentValue;if(Vh!==n)if(n={context:n,memoizedValue:i,next:null},go===null){if(gu===null)throw Error(t(308));go=n,gu.dependencies={lanes:0,firstContext:n}}else go=go.next=n;return i}var ls=null;function Lh(n){ls===null?ls=[n]:ls.push(n)}function sm(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Lh(i)):(a.next=d.next,d.next=a),i.interleaved=a,Pr(n,c)}function Pr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var oi=!1;function jh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function om(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function xr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ai(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,be&2){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Pr(n,a)}return d=c.interleaved,d===null?(i.next=i,Lh(c)):(i.next=d.next,d.next=i),c.interleaved=i,Pr(n,a)}function yu(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Yr(n,a)}}function am(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function _u(n,i,a,c){var d=n.updateQueue;oi=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var P=S,z=P.next;P.next=null,E===null?m=z:E.next=z,E=P;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,S=Q.lastBaseUpdate,S!==E&&(S===null?Q.firstBaseUpdate=z:S.next=z,Q.lastBaseUpdate=P))}if(m!==null){var Y=d.baseState;E=0,Q=z=P=null,S=m;do{var K=S.lane,re=S.eventTime;if((c&K)===K){Q!==null&&(Q=Q.next={eventTime:re,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ae=n,le=S;switch(K=i,re=a,le.tag){case 1:if(ae=le.payload,typeof ae=="function"){Y=ae.call(re,Y,K);break e}Y=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=le.payload,K=typeof ae=="function"?ae.call(re,Y,K):ae,K==null)break e;Y=se({},Y,K);break e;case 2:oi=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[S]:K.push(S))}else re={eventTime:re,lane:K,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Q===null?(z=Q=re,P=Y):Q=Q.next=re,E|=K;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;K=S,S=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(Q===null&&(P=Y),d.baseState=P,d.firstBaseUpdate=z,d.lastBaseUpdate=Q,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);hs|=E,n.lanes=E,n.memoizedState=Y}}function lm(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Da={},rr=ri(Da),Va=ri(Da),Oa=ri(Da);function us(n){if(n===Da)throw Error(t(174));return n}function Fh(n,i){switch(We(Oa,i),We(Va,n),We(rr,Da),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:mt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=mt(i,n)}Qe(rr),We(rr,i)}function _o(){Qe(rr),Qe(Va),Qe(Oa)}function um(n){us(Oa.current);var i=us(rr.current),a=mt(i,n.type);i!==a&&(We(Va,n),We(rr,a))}function Uh(n){Va.current===n&&(Qe(rr),Qe(Va))}var et=ri(0);function vu(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var zh=[];function Bh(){for(var n=0;n<zh.length;n++)zh[n]._workInProgressVersionPrimary=null;zh.length=0}var Eu=Te.ReactCurrentDispatcher,$h=Te.ReactCurrentBatchConfig,cs=0,tt=null,yt=null,It=null,wu=!1,ba=!1,Ma=0,xE=0;function Lt(){throw Error(t(321))}function qh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!jn(n[a],i[a]))return!1;return!0}function Hh(n,i,a,c,d,m){if(cs=m,tt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Eu.current=n===null||n.memoizedState===null?OE:bE,n=a(c,d),ba){m=0;do{if(ba=!1,Ma=0,25<=m)throw Error(t(301));m+=1,It=yt=null,i.updateQueue=null,Eu.current=ME,n=a(c,d)}while(ba)}if(Eu.current=Su,i=yt!==null&&yt.next!==null,cs=0,It=yt=tt=null,wu=!1,i)throw Error(t(300));return n}function Wh(){var n=Ma!==0;return Ma=0,n}function ir(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?tt.memoizedState=It=n:It=It.next=n,It}function In(){if(yt===null){var n=tt.alternate;n=n!==null?n.memoizedState:null}else n=yt.next;var i=It===null?tt.memoizedState:It.next;if(i!==null)It=i,yt=n;else{if(n===null)throw Error(t(310));yt=n,n={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},It===null?tt.memoizedState=It=n:It=It.next=n}return It}function La(n,i){return typeof i=="function"?i(n):i}function Gh(n){var i=In(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=yt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var S=E=null,P=null,z=m;do{var Q=z.lane;if((cs&Q)===Q)P!==null&&(P=P.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:n(c,z.action);else{var Y={lane:Q,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};P===null?(S=P=Y,E=c):P=P.next=Y,tt.lanes|=Q,hs|=Q}z=z.next}while(z!==null&&z!==m);P===null?E=c:P.next=S,jn(c,i.memoizedState)||(Jt=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,tt.lanes|=m,hs|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Kh(n){var i=In(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do m=n(m,E.action),E=E.next;while(E!==d);jn(m,i.memoizedState)||(Jt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function cm(){}function hm(n,i){var a=tt,c=In(),d=i(),m=!jn(c.memoizedState,d);if(m&&(c.memoizedState=d,Jt=!0),c=c.queue,Qh(pm.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,ja(9,fm.bind(null,a,c,d,i),void 0,null),St===null)throw Error(t(349));cs&30||dm(a,i,d)}return d}function dm(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=tt.updateQueue,i===null?(i={lastEffect:null,stores:null},tt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function fm(n,i,a,c){i.value=a,i.getSnapshot=c,mm(i)&&gm(n)}function pm(n,i,a){return a(function(){mm(i)&&gm(n)})}function mm(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!jn(n,a)}catch{return!0}}function gm(n){var i=Pr(n,1);i!==null&&$n(i,n,1,-1)}function ym(n){var i=ir();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:n},i.queue=n,n=n.dispatch=VE.bind(null,tt,n),[i.memoizedState,n]}function ja(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=tt.updateQueue,i===null?(i={lastEffect:null,stores:null},tt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function _m(){return In().memoizedState}function Tu(n,i,a,c){var d=ir();tt.flags|=n,d.memoizedState=ja(1|i,a,void 0,c===void 0?null:c)}function Iu(n,i,a,c){var d=In();c=c===void 0?null:c;var m=void 0;if(yt!==null){var E=yt.memoizedState;if(m=E.destroy,c!==null&&qh(c,E.deps)){d.memoizedState=ja(i,a,m,c);return}}tt.flags|=n,d.memoizedState=ja(1|i,a,m,c)}function vm(n,i){return Tu(8390656,8,n,i)}function Qh(n,i){return Iu(2048,8,n,i)}function Em(n,i){return Iu(4,2,n,i)}function wm(n,i){return Iu(4,4,n,i)}function Tm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Im(n,i,a){return a=a!=null?a.concat([n]):null,Iu(4,4,Tm.bind(null,i,n),a)}function Yh(){}function Sm(n,i){var a=In();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&qh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Am(n,i){var a=In();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&qh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Cm(n,i,a){return cs&21?(jn(a,i)||(a=Zi(),tt.lanes|=a,hs|=a,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Jt=!0),n.memoizedState=a)}function NE(n,i){var a=Ne;Ne=a!==0&&4>a?a:4,n(!0);var c=$h.transition;$h.transition={};try{n(!1),i()}finally{Ne=a,$h.transition=c}}function km(){return In().memoizedState}function DE(n,i,a){var c=hi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Rm(n))Pm(i,a);else if(a=sm(n,i,a,c),a!==null){var d=Gt();$n(a,n,c,d),xm(a,i,c)}}function VE(n,i,a){var c=hi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rm(n))Pm(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,S=m(E,a);if(d.hasEagerState=!0,d.eagerState=S,jn(S,E)){var P=i.interleaved;P===null?(d.next=d,Lh(i)):(d.next=P.next,P.next=d),i.interleaved=d;return}}catch{}finally{}a=sm(n,i,d,c),a!==null&&(d=Gt(),$n(a,n,c,d),xm(a,i,c))}}function Rm(n){var i=n.alternate;return n===tt||i!==null&&i===tt}function Pm(n,i){ba=wu=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function xm(n,i,a){if(a&4194240){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Yr(n,a)}}var Su={readContext:Tn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},OE={readContext:Tn,useCallback:function(n,i){return ir().memoizedState=[n,i===void 0?null:i],n},useContext:Tn,useEffect:vm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Tu(4194308,4,Tm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Tu(4194308,4,n,i)},useInsertionEffect:function(n,i){return Tu(4,2,n,i)},useMemo:function(n,i){var a=ir();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=ir();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=DE.bind(null,tt,n),[c.memoizedState,n]},useRef:function(n){var i=ir();return n={current:n},i.memoizedState=n},useState:ym,useDebugValue:Yh,useDeferredValue:function(n){return ir().memoizedState=n},useTransition:function(){var n=ym(!1),i=n[0];return n=NE.bind(null,n[1]),ir().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=tt,d=ir();if(Ze){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),St===null)throw Error(t(349));cs&30||dm(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,vm(pm.bind(null,c,m,n),[n]),c.flags|=2048,ja(9,fm.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=ir(),i=St.identifierPrefix;if(Ze){var a=Rr,c=kr;a=(c&~(1<<32-qt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ma++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=xE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},bE={readContext:Tn,useCallback:Sm,useContext:Tn,useEffect:Qh,useImperativeHandle:Im,useInsertionEffect:Em,useLayoutEffect:wm,useMemo:Am,useReducer:Gh,useRef:_m,useState:function(){return Gh(La)},useDebugValue:Yh,useDeferredValue:function(n){var i=In();return Cm(i,yt.memoizedState,n)},useTransition:function(){var n=Gh(La)[0],i=In().memoizedState;return[n,i]},useMutableSource:cm,useSyncExternalStore:hm,useId:km,unstable_isNewReconciler:!1},ME={readContext:Tn,useCallback:Sm,useContext:Tn,useEffect:Qh,useImperativeHandle:Im,useInsertionEffect:Em,useLayoutEffect:wm,useMemo:Am,useReducer:Kh,useRef:_m,useState:function(){return Kh(La)},useDebugValue:Yh,useDeferredValue:function(n){var i=In();return yt===null?i.memoizedState=n:Cm(i,yt.memoizedState,n)},useTransition:function(){var n=Kh(La)[0],i=In().memoizedState;return[n,i]},useMutableSource:cm,useSyncExternalStore:hm,useId:km,unstable_isNewReconciler:!1};function Un(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Xh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:se({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Au={isMounted:function(n){return(n=n._reactInternals)?Nn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Gt(),d=hi(n),m=xr(c,d);m.payload=i,a!=null&&(m.callback=a),i=ai(n,m,d),i!==null&&($n(i,n,d,c),yu(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Gt(),d=hi(n),m=xr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=ai(n,m,d),i!==null&&($n(i,n,d,c),yu(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Gt(),c=hi(n),d=xr(a,c);d.tag=2,i!=null&&(d.callback=i),i=ai(n,d,c),i!==null&&($n(i,n,c,a),yu(i,n,c))}};function Nm(n,i,a,c,d,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,E):i.prototype&&i.prototype.isPureReactComponent?!Sa(a,c)||!Sa(d,m):!0}function Dm(n,i,a){var c=!1,d=ii,m=i.contextType;return typeof m=="object"&&m!==null?m=Tn(m):(d=Xt(i)?ss:Mt.current,c=i.contextTypes,m=(c=c!=null)?co(n,d):ii),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Au,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Vm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Au.enqueueReplaceState(i,i.state,null)}function Jh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},jh(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Tn(m):(m=Xt(i)?ss:Mt.current,d.context=co(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Xh(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Au.enqueueReplaceState(d,d.state,null),_u(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function vo(n,i){try{var a="",c=i;do a+=ke(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function Zh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function ed(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var LE=typeof WeakMap=="function"?WeakMap:Map;function Om(n,i,a){a=xr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Du||(Du=!0,md=c),ed(n,i)},a}function bm(n,i,a){a=xr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){ed(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){ed(n,i),typeof c!="function"&&(ui===null?ui=new Set([this]):ui.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Mm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new LE;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=XE.bind(null,n,i,a),i.then(n,n))}function Lm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function jm(n,i,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=xr(-1,1),i.tag=2,ai(a,i,1))),a.lanes|=1),n)}var jE=Te.ReactCurrentOwner,Jt=!1;function Wt(n,i,a,c){i.child=n===null?im(i,null,a,c):mo(i,n.child,a,c)}function Fm(n,i,a,c,d){a=a.render;var m=i.ref;return yo(i,d),c=Hh(n,i,a,c,m,d),a=Wh(),n!==null&&!Jt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Nr(n,i,d)):(Ze&&a&&Rh(i),i.flags|=1,Wt(n,i,c,d),i.child)}function Um(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Td(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,zm(n,i,m,c,d)):(n=ju(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!(n.lanes&d)){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:Sa,a(E,c)&&n.ref===i.ref)return Nr(n,i,d)}return i.flags|=1,n=fi(m,c),n.ref=i.ref,n.return=i,i.child=n}function zm(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Sa(m,c)&&n.ref===i.ref)if(Jt=!1,i.pendingProps=c=m,(n.lanes&d)!==0)n.flags&131072&&(Jt=!0);else return i.lanes=n.lanes,Nr(n,i,d)}return td(n,i,a,c,d)}function Bm(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(wo,hn),hn|=a;else{if(!(a&1073741824))return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,We(wo,hn),hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,We(wo,hn),hn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,We(wo,hn),hn|=c;return Wt(n,i,d,a),i.child}function $m(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function td(n,i,a,c,d){var m=Xt(a)?ss:Mt.current;return m=co(i,m),yo(i,d),a=Hh(n,i,a,c,m,d),c=Wh(),n!==null&&!Jt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Nr(n,i,d)):(Ze&&c&&Rh(i),i.flags|=1,Wt(n,i,a,d),i.child)}function qm(n,i,a,c,d){if(Xt(a)){var m=!0;uu(i)}else m=!1;if(yo(i,d),i.stateNode===null)ku(n,i),Dm(i,a,c),Jh(i,a,c,d),c=!0;else if(n===null){var E=i.stateNode,S=i.memoizedProps;E.props=S;var P=E.context,z=a.contextType;typeof z=="object"&&z!==null?z=Tn(z):(z=Xt(a)?ss:Mt.current,z=co(i,z));var Q=a.getDerivedStateFromProps,Y=typeof Q=="function"||typeof E.getSnapshotBeforeUpdate=="function";Y||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(S!==c||P!==z)&&Vm(i,E,c,z),oi=!1;var K=i.memoizedState;E.state=K,_u(i,c,E,d),P=i.memoizedState,S!==c||K!==P||Yt.current||oi?(typeof Q=="function"&&(Xh(i,a,Q,c),P=i.memoizedState),(S=oi||Nm(i,a,S,c,K,P,z))?(Y||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),E.props=c,E.state=P,E.context=z,c=S):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,om(n,i),S=i.memoizedProps,z=i.type===i.elementType?S:Un(i.type,S),E.props=z,Y=i.pendingProps,K=E.context,P=a.contextType,typeof P=="object"&&P!==null?P=Tn(P):(P=Xt(a)?ss:Mt.current,P=co(i,P));var re=a.getDerivedStateFromProps;(Q=typeof re=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(S!==Y||K!==P)&&Vm(i,E,c,P),oi=!1,K=i.memoizedState,E.state=K,_u(i,c,E,d);var ae=i.memoizedState;S!==Y||K!==ae||Yt.current||oi?(typeof re=="function"&&(Xh(i,a,re,c),ae=i.memoizedState),(z=oi||Nm(i,a,z,c,K,ae,P)||!1)?(Q||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,ae,P),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,ae,P)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ae),E.props=c,E.state=ae,E.context=P,c=z):(typeof E.componentDidUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),c=!1)}return nd(n,i,a,c,m,d)}function nd(n,i,a,c,d,m){$m(n,i);var E=(i.flags&128)!==0;if(!c&&!E)return d&&Qp(i,a,!1),Nr(n,i,m);c=i.stateNode,jE.current=i;var S=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&E?(i.child=mo(i,n.child,null,m),i.child=mo(i,null,S,m)):Wt(n,i,S,m),i.memoizedState=c.state,d&&Qp(i,a,!0),i.child}function Hm(n){var i=n.stateNode;i.pendingContext?Gp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Gp(n,i.context,!1),Fh(n,i.containerInfo)}function Wm(n,i,a,c,d){return po(),Dh(d),i.flags|=256,Wt(n,i,a,c),i.child}var rd={dehydrated:null,treeContext:null,retryLane:0};function id(n){return{baseLanes:n,cachePool:null,transitions:null}}function Gm(n,i,a){var c=i.pendingProps,d=et.current,m=!1,E=(i.flags&128)!==0,S;if((S=E)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),We(et,d&1),n===null)return Nh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(E=c.children,n=c.fallback,m?(c=i.mode,m=i.child,E={mode:"hidden",children:E},!(c&1)&&m!==null?(m.childLanes=0,m.pendingProps=E):m=Fu(E,c,0,null),n=ms(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=id(a),i.memoizedState=rd,n):sd(i,E));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return FE(n,i,E,c,S,d,a);if(m){m=c.fallback,E=i.mode,d=n.child,S=d.sibling;var P={mode:"hidden",children:c.children};return!(E&1)&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=fi(d,P),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?m=fi(S,m):(m=ms(m,E,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,E=n.child.memoizedState,E=E===null?id(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~a,i.memoizedState=rd,c}return m=n.child,n=m.sibling,c=fi(m,{mode:"visible",children:c.children}),!(i.mode&1)&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function sd(n,i){return i=Fu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Cu(n,i,a,c){return c!==null&&Dh(c),mo(i,n.child,null,a),n=sd(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function FE(n,i,a,c,d,m,E){if(a)return i.flags&256?(i.flags&=-257,c=Zh(Error(t(422))),Cu(n,i,E,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=Fu({mode:"visible",children:c.children},d,0,null),m=ms(m,d,E,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,i.mode&1&&mo(i,n.child,null,E),i.child.memoizedState=id(E),i.memoizedState=rd,m);if(!(i.mode&1))return Cu(n,i,E,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,m=Error(t(419)),c=Zh(m,c,void 0),Cu(n,i,E,c)}if(S=(E&n.childLanes)!==0,Jt||S){if(c=St,c!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|E)?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Pr(n,d),$n(c,n,d,-1))}return wd(),c=Zh(Error(t(421))),Cu(n,i,E,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=JE.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,cn=ni(d.nextSibling),un=i,Ze=!0,Fn=null,n!==null&&(En[wn++]=kr,En[wn++]=Rr,En[wn++]=os,kr=n.id,Rr=n.overflow,os=i),i=sd(i,c.children),i.flags|=4096,i)}function Km(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Mh(n.return,i,a)}function od(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Qm(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Wt(n,i,c.children,a),c=et.current,c&2)c=c&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Km(n,a,i);else if(n.tag===19)Km(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(We(et,c),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&vu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),od(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&vu(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}od(i,!0,a,null,m);break;case"together":od(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ku(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Nr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),hs|=i.lanes,!(a&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=fi(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=fi(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function UE(n,i,a){switch(i.tag){case 3:Hm(i),po();break;case 5:um(i);break;case 1:Xt(i.type)&&uu(i);break;case 4:Fh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;We(mu,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(We(et,et.current&1),i.flags|=128,null):a&i.child.childLanes?Gm(n,i,a):(We(et,et.current&1),n=Nr(n,i,a),n!==null?n.sibling:null);We(et,et.current&1);break;case 19:if(c=(a&i.childLanes)!==0,n.flags&128){if(c)return Qm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(et,et.current),c)break;return null;case 22:case 23:return i.lanes=0,Bm(n,i,a)}return Nr(n,i,a)}var Ym,ad,Xm,Jm;Ym=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ad=function(){},Xm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,us(rr.current);var m=null;switch(a){case"input":d=Bi(n,d),c=Bi(n,c),m=[];break;case"select":d=se({},d,{value:void 0}),c=se({},c,{value:void 0}),m=[];break;case"textarea":d=Zo(n,d),c=Zo(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=ou)}sa(a,c);var E;a=null;for(z in d)if(!c.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var S=d[z];for(E in S)S.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?m||(m=[]):(m=m||[]).push(z,null));for(z in c){var P=c[z];if(S=d!=null?d[z]:void 0,c.hasOwnProperty(z)&&P!==S&&(P!=null||S!=null))if(z==="style")if(S){for(E in S)!S.hasOwnProperty(E)||P&&P.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in P)P.hasOwnProperty(E)&&S[E]!==P[E]&&(a||(a={}),a[E]=P[E])}else a||(m||(m=[]),m.push(z,a)),a=P;else z==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(m=m||[]).push(z,P)):z==="children"?typeof P!="string"&&typeof P!="number"||(m=m||[]).push(z,""+P):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(P!=null&&z==="onScroll"&&Ke("scroll",n),m||S===P||(m=[])):(m=m||[]).push(z,P))}a&&(m=m||[]).push("style",a);var z=m;(i.updateQueue=z)&&(i.flags|=4)}},Jm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Fa(n,i){if(!Ze)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function jt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function zE(n,i,a){var c=i.pendingProps;switch(Ph(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(i),null;case 1:return Xt(i.type)&&lu(),jt(i),null;case 3:return c=i.stateNode,_o(),Qe(Yt),Qe(Mt),Bh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(fu(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Fn!==null&&(_d(Fn),Fn=null))),ad(n,i),jt(i),null;case 5:Uh(i);var d=us(Oa.current);if(a=i.type,n!==null&&i.stateNode!=null)Xm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return jt(i),null}if(n=us(rr.current),fu(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[nr]=i,c[Pa]=m,n=(i.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<Ca.length;d++)Ke(Ca[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":Ds(c,m),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ke("invalid",c);break;case"textarea":Os(c,m),Ke("invalid",c)}sa(a,m),d=null;for(var E in m)if(m.hasOwnProperty(E)){var S=m[E];E==="children"?typeof S=="string"?c.textContent!==S&&(m.suppressHydrationWarning!==!0&&su(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(m.suppressHydrationWarning!==!0&&su(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(E)&&S!=null&&E==="onScroll"&&Ke("scroll",c)}switch(a){case"input":mr(c),Nl(c,m,!0);break;case"textarea":mr(c),ea(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=ou)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(a,{is:c.is}):(n=E.createElement(a),a==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,a),n[nr]=i,n[Pa]=c,Ym(n,i,!1,!1),i.stateNode=n;e:{switch(E=oa(a,c),a){case"dialog":Ke("cancel",n),Ke("close",n),d=c;break;case"iframe":case"object":case"embed":Ke("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ca.length;d++)Ke(Ca[d],n);d=c;break;case"source":Ke("error",n),d=c;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),d=c;break;case"details":Ke("toggle",n),d=c;break;case"input":Ds(n,c),d=Bi(n,c),Ke("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=se({},c,{value:void 0}),Ke("invalid",n);break;case"textarea":Os(n,c),d=Zo(n,c),Ke("invalid",n);break;default:d=c}sa(a,d),S=d;for(m in S)if(S.hasOwnProperty(m)){var P=S[m];m==="style"?ra(n,P):m==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&ta(n,P)):m==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Hr(n,P):typeof P=="number"&&Hr(n,""+P):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?P!=null&&m==="onScroll"&&Ke("scroll",n):P!=null&&fe(n,m,P,E))}switch(a){case"input":mr(n),Nl(n,c,!1);break;case"textarea":mr(n),ea(n);break;case"option":c.value!=null&&n.setAttribute("value",""+je(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?yr(n,!!c.multiple,m,!1):c.defaultValue!=null&&yr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=ou)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return jt(i),null;case 6:if(n&&i.stateNode!=null)Jm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=us(Oa.current),us(rr.current),fu(i)){if(c=i.stateNode,a=i.memoizedProps,c[nr]=i,(m=c.nodeValue!==a)&&(n=un,n!==null))switch(n.tag){case 3:su(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&su(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[nr]=i,i.stateNode=c}return jt(i),null;case 13:if(Qe(et),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ze&&cn!==null&&i.mode&1&&!(i.flags&128))tm(),po(),i.flags|=98560,m=!1;else if(m=fu(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[nr]=i}else po(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;jt(i),m=!1}else Fn!==null&&(_d(Fn),Fn=null),m=!0;if(!m)return i.flags&65536?i:null}return i.flags&128?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,i.mode&1&&(n===null||et.current&1?_t===0&&(_t=3):wd())),i.updateQueue!==null&&(i.flags|=4),jt(i),null);case 4:return _o(),ad(n,i),n===null&&ka(i.stateNode.containerInfo),jt(i),null;case 10:return bh(i.type._context),jt(i),null;case 17:return Xt(i.type)&&lu(),jt(i),null;case 19:if(Qe(et),m=i.memoizedState,m===null)return jt(i),null;if(c=(i.flags&128)!==0,E=m.rendering,E===null)if(c)Fa(m,!1);else{if(_t!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(E=vu(n),E!==null){for(i.flags|=128,Fa(m,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return We(et,et.current&1|2),i.child}n=n.sibling}m.tail!==null&&He()>To&&(i.flags|=128,c=!0,Fa(m,!1),i.lanes=4194304)}else{if(!c)if(n=vu(E),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Fa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!Ze)return jt(i),null}else 2*He()-m.renderingStartTime>To&&a!==1073741824&&(i.flags|=128,c=!0,Fa(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(a=m.last,a!==null?a.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=He(),i.sibling=null,a=et.current,We(et,c?a&1|2:a&1),i):(jt(i),null);case 22:case 23:return Ed(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&i.mode&1?hn&1073741824&&(jt(i),i.subtreeFlags&6&&(i.flags|=8192)):jt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function BE(n,i){switch(Ph(i),i.tag){case 1:return Xt(i.type)&&lu(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return _o(),Qe(Yt),Qe(Mt),Bh(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return Uh(i),null;case 13:if(Qe(et),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));po()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Qe(et),null;case 4:return _o(),null;case 10:return bh(i.type._context),null;case 22:case 23:return Ed(),null;case 24:return null;default:return null}}var Ru=!1,Ft=!1,$E=typeof WeakSet=="function"?WeakSet:Set,oe=null;function Eo(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){it(n,i,c)}else a.current=null}function ld(n,i,a){try{a()}catch(c){it(n,i,c)}}var Zm=!1;function qE(n,i){if(Eh=Zr,n=Np(),dh(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,S=-1,P=-1,z=0,Q=0,Y=n,K=null;t:for(;;){for(var re;Y!==a||d!==0&&Y.nodeType!==3||(S=E+d),Y!==m||c!==0&&Y.nodeType!==3||(P=E+c),Y.nodeType===3&&(E+=Y.nodeValue.length),(re=Y.firstChild)!==null;)K=Y,Y=re;for(;;){if(Y===n)break t;if(K===a&&++z===d&&(S=E),K===m&&++Q===c&&(P=E),(re=Y.nextSibling)!==null)break;Y=K,K=Y.parentNode}Y=re}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(wh={focusedElem:n,selectionRange:a},Zr=!1,oe=i;oe!==null;)if(i=oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,oe=n;else for(;oe!==null;){i=oe;try{var ae=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var le=ae.memoizedProps,at=ae.memoizedState,L=i.stateNode,D=L.getSnapshotBeforeUpdate(i.elementType===i.type?le:Un(i.type,le),at);L.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var F=i.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){it(i,i.return,X)}if(n=i.sibling,n!==null){n.return=i.return,oe=n;break}oe=i.return}return ae=Zm,Zm=!1,ae}function Ua(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&ld(i,a,m)}d=d.next}while(d!==c)}}function Pu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function ud(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function eg(n){var i=n.alternate;i!==null&&(n.alternate=null,eg(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[nr],delete i[Pa],delete i[Ah],delete i[CE],delete i[kE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function tg(n){return n.tag===5||n.tag===3||n.tag===4}function ng(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||tg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function cd(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ou));else if(c!==4&&(n=n.child,n!==null))for(cd(n,i,a),n=n.sibling;n!==null;)cd(n,i,a),n=n.sibling}function hd(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(hd(n,i,a),n=n.sibling;n!==null;)hd(n,i,a),n=n.sibling}var Pt=null,zn=!1;function li(n,i,a){for(a=a.child;a!==null;)rg(n,i,a),a=a.sibling}function rg(n,i,a){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Xi,a)}catch{}switch(a.tag){case 5:Ft||Eo(a,i);case 6:var c=Pt,d=zn;Pt=null,li(n,i,a),Pt=c,zn=d,Pt!==null&&(zn?(n=Pt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(zn?(n=Pt,a=a.stateNode,n.nodeType===8?Sh(n.parentNode,a):n.nodeType===1&&Sh(n,a),Mn(n)):Sh(Pt,a.stateNode));break;case 4:c=Pt,d=zn,Pt=a.stateNode.containerInfo,zn=!0,li(n,i,a),Pt=c,zn=d;break;case 0:case 11:case 14:case 15:if(!Ft&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,E=m.destroy;m=m.tag,E!==void 0&&(m&2||m&4)&&ld(a,i,E),d=d.next}while(d!==c)}li(n,i,a);break;case 1:if(!Ft&&(Eo(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){it(a,i,S)}li(n,i,a);break;case 21:li(n,i,a);break;case 22:a.mode&1?(Ft=(c=Ft)||a.memoizedState!==null,li(n,i,a),Ft=c):li(n,i,a);break;default:li(n,i,a)}}function ig(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new $E),i.forEach(function(c){var d=ZE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Bn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,E=i,S=E;e:for(;S!==null;){switch(S.tag){case 5:Pt=S.stateNode,zn=!1;break e;case 3:Pt=S.stateNode.containerInfo,zn=!0;break e;case 4:Pt=S.stateNode.containerInfo,zn=!0;break e}S=S.return}if(Pt===null)throw Error(t(160));rg(m,E,d),Pt=null,zn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(z){it(d,i,z)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)sg(i,n),i=i.sibling}function sg(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Bn(i,n),sr(n),c&4){try{Ua(3,n,n.return),Pu(3,n)}catch(le){it(n,n.return,le)}try{Ua(5,n,n.return)}catch(le){it(n,n.return,le)}}break;case 1:Bn(i,n),sr(n),c&512&&a!==null&&Eo(a,a.return);break;case 5:if(Bn(i,n),sr(n),c&512&&a!==null&&Eo(a,a.return),n.flags&32){var d=n.stateNode;try{Hr(d,"")}catch(le){it(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,E=a!==null?a.memoizedProps:m,S=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{S==="input"&&m.type==="radio"&&m.name!=null&&Xo(d,m),oa(S,E);var z=oa(S,m);for(E=0;E<P.length;E+=2){var Q=P[E],Y=P[E+1];Q==="style"?ra(d,Y):Q==="dangerouslySetInnerHTML"?ta(d,Y):Q==="children"?Hr(d,Y):fe(d,Q,Y,z)}switch(S){case"input":Jo(d,m);break;case"textarea":bs(d,m);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var re=m.value;re!=null?yr(d,!!m.multiple,re,!1):K!==!!m.multiple&&(m.defaultValue!=null?yr(d,!!m.multiple,m.defaultValue,!0):yr(d,!!m.multiple,m.multiple?[]:"",!1))}d[Pa]=m}catch(le){it(n,n.return,le)}}break;case 6:if(Bn(i,n),sr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(le){it(n,n.return,le)}}break;case 3:if(Bn(i,n),sr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Mn(i.containerInfo)}catch(le){it(n,n.return,le)}break;case 4:Bn(i,n),sr(n);break;case 13:Bn(i,n),sr(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(pd=He())),c&4&&ig(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Ft=(z=Ft)||Q,Bn(i,n),Ft=z):Bn(i,n),sr(n),c&8192){if(z=n.memoizedState!==null,(n.stateNode.isHidden=z)&&!Q&&n.mode&1)for(oe=n,Q=n.child;Q!==null;){for(Y=oe=Q;oe!==null;){switch(K=oe,re=K.child,K.tag){case 0:case 11:case 14:case 15:Ua(4,K,K.return);break;case 1:Eo(K,K.return);var ae=K.stateNode;if(typeof ae.componentWillUnmount=="function"){c=K,a=K.return;try{i=c,ae.props=i.memoizedProps,ae.state=i.memoizedState,ae.componentWillUnmount()}catch(le){it(c,a,le)}}break;case 5:Eo(K,K.return);break;case 22:if(K.memoizedState!==null){lg(Y);continue}}re!==null?(re.return=K,oe=re):lg(Y)}Q=Q.sibling}e:for(Q=null,Y=n;;){if(Y.tag===5){if(Q===null){Q=Y;try{d=Y.stateNode,z?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(S=Y.stateNode,P=Y.memoizedProps.style,E=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=na("display",E))}catch(le){it(n,n.return,le)}}}else if(Y.tag===6){if(Q===null)try{Y.stateNode.nodeValue=z?"":Y.memoizedProps}catch(le){it(n,n.return,le)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;Q===Y&&(Q=null),Y=Y.return}Q===Y&&(Q=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Bn(i,n),sr(n),c&4&&ig(n);break;case 21:break;default:Bn(i,n),sr(n)}}function sr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(tg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Hr(d,""),c.flags&=-33);var m=ng(n);hd(n,m,d);break;case 3:case 4:var E=c.stateNode.containerInfo,S=ng(n);cd(n,S,E);break;default:throw Error(t(161))}}catch(P){it(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function HE(n,i,a){oe=n,og(n)}function og(n,i,a){for(var c=(n.mode&1)!==0;oe!==null;){var d=oe,m=d.child;if(d.tag===22&&c){var E=d.memoizedState!==null||Ru;if(!E){var S=d.alternate,P=S!==null&&S.memoizedState!==null||Ft;S=Ru;var z=Ft;if(Ru=E,(Ft=P)&&!z)for(oe=d;oe!==null;)E=oe,P=E.child,E.tag===22&&E.memoizedState!==null?ug(d):P!==null?(P.return=E,oe=P):ug(d);for(;m!==null;)oe=m,og(m),m=m.sibling;oe=d,Ru=S,Ft=z}ag(n)}else d.subtreeFlags&8772&&m!==null?(m.return=d,oe=m):ag(n)}}function ag(n){for(;oe!==null;){var i=oe;if(i.flags&8772){var a=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:Ft||Pu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Ft)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Un(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&lm(i,m,c);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}lm(i,E,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var z=i.alternate;if(z!==null){var Q=z.memoizedState;if(Q!==null){var Y=Q.dehydrated;Y!==null&&Mn(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||i.flags&512&&ud(i)}catch(K){it(i,i.return,K)}}if(i===n){oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,oe=a;break}oe=i.return}}function lg(n){for(;oe!==null;){var i=oe;if(i===n){oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,oe=a;break}oe=i.return}}function ug(n){for(;oe!==null;){var i=oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Pu(4,i)}catch(P){it(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(P){it(i,d,P)}}var m=i.return;try{ud(i)}catch(P){it(i,m,P)}break;case 5:var E=i.return;try{ud(i)}catch(P){it(i,E,P)}}}catch(P){it(i,i.return,P)}if(i===n){oe=null;break}var S=i.sibling;if(S!==null){S.return=i.return,oe=S;break}oe=i.return}}var WE=Math.ceil,xu=Te.ReactCurrentDispatcher,dd=Te.ReactCurrentOwner,Sn=Te.ReactCurrentBatchConfig,be=0,St=null,ct=null,xt=0,hn=0,wo=ri(0),_t=0,za=null,hs=0,Nu=0,fd=0,Ba=null,Zt=null,pd=0,To=1/0,Dr=null,Du=!1,md=null,ui=null,Vu=!1,ci=null,Ou=0,$a=0,gd=null,bu=-1,Mu=0;function Gt(){return be&6?He():bu!==-1?bu:bu=He()}function hi(n){return n.mode&1?be&2&&xt!==0?xt&-xt:PE.transition!==null?(Mu===0&&(Mu=Zi()),Mu):(n=Ne,n!==0||(n=window.event,n=n===void 0?16:ya(n.type)),n):1}function $n(n,i,a,c){if(50<$a)throw $a=0,gd=null,Error(t(185));Qr(n,a,c),(!(be&2)||n!==St)&&(n===St&&(!(be&2)&&(Nu|=a),_t===4&&di(n,xt)),en(n,c),a===1&&be===0&&!(i.mode&1)&&(To=He()+500,cu&&si()))}function en(n,i){var a=n.callbackNode;Er(n,i);var c=Ji(n,n===St?xt:0);if(c===0)a!==null&&da(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&da(a),i===1)n.tag===0?RE(hg.bind(null,n)):Yp(hg.bind(null,n)),SE(function(){!(be&6)&&si()}),a=null;else{switch(Xr(c)){case 1:a=Yi;break;case 4:a=Wr;break;case 16:a=yn;break;case 536870912:a=Ml;break;default:a=yn}a=vg(a,cg.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function cg(n,i){if(bu=-1,Mu=0,be&6)throw Error(t(327));var a=n.callbackNode;if(Io()&&n.callbackNode!==a)return null;var c=Ji(n,n===St?xt:0);if(c===0)return null;if(c&30||c&n.expiredLanes||i)i=Lu(n,c);else{i=c;var d=be;be|=2;var m=fg();(St!==n||xt!==i)&&(Dr=null,To=He()+500,fs(n,i));do try{QE();break}catch(S){dg(n,S)}while(!0);Oh(),xu.current=m,be=d,ct!==null?i=0:(St=null,xt=0,i=_t)}if(i!==0){if(i===2&&(d=on(n),d!==0&&(c=d,i=yd(n,d))),i===1)throw a=za,fs(n,0),di(n,c),en(n,He()),a;if(i===6)di(n,c);else{if(d=n.current.alternate,!(c&30)&&!GE(d)&&(i=Lu(n,c),i===2&&(m=on(n),m!==0&&(c=m,i=yd(n,m))),i===1))throw a=za,fs(n,0),di(n,c),en(n,He()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ps(n,Zt,Dr);break;case 3:if(di(n,c),(c&130023424)===c&&(i=pd+500-He(),10<i)){if(Ji(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Gt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ih(ps.bind(null,n,Zt,Dr),i);break}ps(n,Zt,Dr);break;case 4:if(di(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var E=31-qt(c);m=1<<E,E=i[E],E>d&&(d=E),c&=~m}if(c=d,c=He()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*WE(c/1960))-c,10<c){n.timeoutHandle=Ih(ps.bind(null,n,Zt,Dr),c);break}ps(n,Zt,Dr);break;case 5:ps(n,Zt,Dr);break;default:throw Error(t(329))}}}return en(n,He()),n.callbackNode===a?cg.bind(null,n):null}function yd(n,i){var a=Ba;return n.current.memoizedState.isDehydrated&&(fs(n,i).flags|=256),n=Lu(n,i),n!==2&&(i=Zt,Zt=a,i!==null&&_d(i)),n}function _d(n){Zt===null?Zt=n:Zt.push.apply(Zt,n)}function GE(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!jn(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function di(n,i){for(i&=~fd,i&=~Nu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-qt(i),c=1<<a;n[a]=-1,i&=~c}}function hg(n){if(be&6)throw Error(t(327));Io();var i=Ji(n,0);if(!(i&1))return en(n,He()),null;var a=Lu(n,i);if(n.tag!==0&&a===2){var c=on(n);c!==0&&(i=c,a=yd(n,c))}if(a===1)throw a=za,fs(n,0),di(n,i),en(n,He()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ps(n,Zt,Dr),en(n,He()),null}function vd(n,i){var a=be;be|=1;try{return n(i)}finally{be=a,be===0&&(To=He()+500,cu&&si())}}function ds(n){ci!==null&&ci.tag===0&&!(be&6)&&Io();var i=be;be|=1;var a=Sn.transition,c=Ne;try{if(Sn.transition=null,Ne=1,n)return n()}finally{Ne=c,Sn.transition=a,be=i,!(be&6)&&si()}}function Ed(){hn=wo.current,Qe(wo)}function fs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,IE(a)),ct!==null)for(a=ct.return;a!==null;){var c=a;switch(Ph(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&lu();break;case 3:_o(),Qe(Yt),Qe(Mt),Bh();break;case 5:Uh(c);break;case 4:_o();break;case 13:Qe(et);break;case 19:Qe(et);break;case 10:bh(c.type._context);break;case 22:case 23:Ed()}a=a.return}if(St=n,ct=n=fi(n.current,null),xt=hn=i,_t=0,za=null,fd=Nu=hs=0,Zt=Ba=null,ls!==null){for(i=0;i<ls.length;i++)if(a=ls[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var E=m.next;m.next=d,c.next=E}a.pending=c}ls=null}return n}function dg(n,i){do{var a=ct;try{if(Oh(),Eu.current=Su,wu){for(var c=tt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}wu=!1}if(cs=0,It=yt=tt=null,ba=!1,Ma=0,dd.current=null,a===null||a.return===null){_t=1,za=i,ct=null;break}e:{var m=n,E=a.return,S=a,P=i;if(i=xt,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var z=P,Q=S,Y=Q.tag;if(!(Q.mode&1)&&(Y===0||Y===11||Y===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var re=Lm(E);if(re!==null){re.flags&=-257,jm(re,E,S,m,i),re.mode&1&&Mm(m,z,i),i=re,P=z;var ae=i.updateQueue;if(ae===null){var le=new Set;le.add(P),i.updateQueue=le}else ae.add(P);break e}else{if(!(i&1)){Mm(m,z,i),wd();break e}P=Error(t(426))}}else if(Ze&&S.mode&1){var at=Lm(E);if(at!==null){!(at.flags&65536)&&(at.flags|=256),jm(at,E,S,m,i),Dh(vo(P,S));break e}}m=P=vo(P,S),_t!==4&&(_t=2),Ba===null?Ba=[m]:Ba.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var L=Om(m,P,i);am(m,L);break e;case 1:S=P;var D=m.type,F=m.stateNode;if(!(m.flags&128)&&(typeof D.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ui===null||!ui.has(F)))){m.flags|=65536,i&=-i,m.lanes|=i;var X=bm(m,S,i);am(m,X);break e}}m=m.return}while(m!==null)}mg(a)}catch(ce){i=ce,ct===a&&a!==null&&(ct=a=a.return);continue}break}while(!0)}function fg(){var n=xu.current;return xu.current=Su,n===null?Su:n}function wd(){(_t===0||_t===3||_t===2)&&(_t=4),St===null||!(hs&268435455)&&!(Nu&268435455)||di(St,xt)}function Lu(n,i){var a=be;be|=2;var c=fg();(St!==n||xt!==i)&&(Dr=null,fs(n,i));do try{KE();break}catch(d){dg(n,d)}while(!0);if(Oh(),be=a,xu.current=c,ct!==null)throw Error(t(261));return St=null,xt=0,_t}function KE(){for(;ct!==null;)pg(ct)}function QE(){for(;ct!==null&&!Ol();)pg(ct)}function pg(n){var i=_g(n.alternate,n,hn);n.memoizedProps=n.pendingProps,i===null?mg(n):ct=i,dd.current=null}function mg(n){var i=n;do{var a=i.alternate;if(n=i.return,i.flags&32768){if(a=BE(a,i),a!==null){a.flags&=32767,ct=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_t=6,ct=null;return}}else if(a=zE(a,i,hn),a!==null){ct=a;return}if(i=i.sibling,i!==null){ct=i;return}ct=i=n}while(i!==null);_t===0&&(_t=5)}function ps(n,i,a){var c=Ne,d=Sn.transition;try{Sn.transition=null,Ne=1,YE(n,i,a,c)}finally{Sn.transition=d,Ne=c}return null}function YE(n,i,a,c){do Io();while(ci!==null);if(be&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if($e(n,m),n===St&&(ct=St=null,xt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Vu||(Vu=!0,vg(yn,function(){return Io(),null})),m=(a.flags&15990)!==0,a.subtreeFlags&15990||m){m=Sn.transition,Sn.transition=null;var E=Ne;Ne=1;var S=be;be|=4,dd.current=null,qE(n,a),sg(a,n),gE(wh),Zr=!!Eh,wh=Eh=null,n.current=a,HE(a),ih(),be=S,Ne=E,Sn.transition=m}else n.current=a;if(Vu&&(Vu=!1,ci=n,Ou=d),m=n.pendingLanes,m===0&&(ui=null),Ll(a.stateNode),en(n,He()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Du)throw Du=!1,n=md,md=null,n;return Ou&1&&n.tag!==0&&Io(),m=n.pendingLanes,m&1?n===gd?$a++:($a=0,gd=n):$a=0,si(),null}function Io(){if(ci!==null){var n=Xr(Ou),i=Sn.transition,a=Ne;try{if(Sn.transition=null,Ne=16>n?16:n,ci===null)var c=!1;else{if(n=ci,ci=null,Ou=0,be&6)throw Error(t(331));var d=be;for(be|=4,oe=n.current;oe!==null;){var m=oe,E=m.child;if(oe.flags&16){var S=m.deletions;if(S!==null){for(var P=0;P<S.length;P++){var z=S[P];for(oe=z;oe!==null;){var Q=oe;switch(Q.tag){case 0:case 11:case 15:Ua(8,Q,m)}var Y=Q.child;if(Y!==null)Y.return=Q,oe=Y;else for(;oe!==null;){Q=oe;var K=Q.sibling,re=Q.return;if(eg(Q),Q===z){oe=null;break}if(K!==null){K.return=re,oe=K;break}oe=re}}}var ae=m.alternate;if(ae!==null){var le=ae.child;if(le!==null){ae.child=null;do{var at=le.sibling;le.sibling=null,le=at}while(le!==null)}}oe=m}}if(m.subtreeFlags&2064&&E!==null)E.return=m,oe=E;else e:for(;oe!==null;){if(m=oe,m.flags&2048)switch(m.tag){case 0:case 11:case 15:Ua(9,m,m.return)}var L=m.sibling;if(L!==null){L.return=m.return,oe=L;break e}oe=m.return}}var D=n.current;for(oe=D;oe!==null;){E=oe;var F=E.child;if(E.subtreeFlags&2064&&F!==null)F.return=E,oe=F;else e:for(E=D;oe!==null;){if(S=oe,S.flags&2048)try{switch(S.tag){case 0:case 11:case 15:Pu(9,S)}}catch(ce){it(S,S.return,ce)}if(S===E){oe=null;break e}var X=S.sibling;if(X!==null){X.return=S.return,oe=X;break e}oe=S.return}}if(be=d,si(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Xi,n)}catch{}c=!0}return c}finally{Ne=a,Sn.transition=i}}return!1}function gg(n,i,a){i=vo(a,i),i=Om(n,i,1),n=ai(n,i,1),i=Gt(),n!==null&&(Qr(n,1,i),en(n,i))}function it(n,i,a){if(n.tag===3)gg(n,n,a);else for(;i!==null;){if(i.tag===3){gg(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ui===null||!ui.has(c))){n=vo(a,n),n=bm(i,n,1),i=ai(i,n,1),n=Gt(),i!==null&&(Qr(i,1,n),en(i,n));break}}i=i.return}}function XE(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Gt(),n.pingedLanes|=n.suspendedLanes&a,St===n&&(xt&a)===a&&(_t===4||_t===3&&(xt&130023424)===xt&&500>He()-pd?fs(n,0):fd|=a),en(n,i)}function yg(n,i){i===0&&(n.mode&1?(i=Hs,Hs<<=1,!(Hs&130023424)&&(Hs=4194304)):i=1);var a=Gt();n=Pr(n,i),n!==null&&(Qr(n,i,a),en(n,a))}function JE(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),yg(n,a)}function ZE(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),yg(n,a)}var _g;_g=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Yt.current)Jt=!0;else{if(!(n.lanes&a)&&!(i.flags&128))return Jt=!1,UE(n,i,a);Jt=!!(n.flags&131072)}else Jt=!1,Ze&&i.flags&1048576&&Xp(i,du,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;ku(n,i),n=i.pendingProps;var d=co(i,Mt.current);yo(i,a),d=Hh(null,i,c,n,d,a);var m=Wh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Xt(c)?(m=!0,uu(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,jh(i),d.updater=Au,i.stateNode=d,d._reactInternals=i,Jh(i,c,n,a),i=nd(null,i,c,!0,m,a)):(i.tag=0,Ze&&m&&Rh(i),Wt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(ku(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=tw(c),n=Un(c,n),d){case 0:i=td(null,i,c,n,a);break e;case 1:i=qm(null,i,c,n,a);break e;case 11:i=Fm(null,i,c,n,a);break e;case 14:i=Um(null,i,c,Un(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Un(c,d),td(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Un(c,d),qm(n,i,c,d,a);case 3:e:{if(Hm(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,om(n,i),_u(i,c,null,a);var E=i.memoizedState;if(c=E.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=vo(Error(t(423)),i),i=Wm(n,i,c,a,d);break e}else if(c!==d){d=vo(Error(t(424)),i),i=Wm(n,i,c,a,d);break e}else for(cn=ni(i.stateNode.containerInfo.firstChild),un=i,Ze=!0,Fn=null,a=im(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(po(),c===d){i=Nr(n,i,a);break e}Wt(n,i,c,a)}i=i.child}return i;case 5:return um(i),n===null&&Nh(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,E=d.children,Th(c,d)?E=null:m!==null&&Th(c,m)&&(i.flags|=32),$m(n,i),Wt(n,i,E,a),i.child;case 6:return n===null&&Nh(i),null;case 13:return Gm(n,i,a);case 4:return Fh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=mo(i,null,c,a):Wt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Un(c,d),Fm(n,i,c,d,a);case 7:return Wt(n,i,i.pendingProps,a),i.child;case 8:return Wt(n,i,i.pendingProps.children,a),i.child;case 12:return Wt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,E=d.value,We(mu,c._currentValue),c._currentValue=E,m!==null)if(jn(m.value,E)){if(m.children===d.children&&!Yt.current){i=Nr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var S=m.dependencies;if(S!==null){E=m.child;for(var P=S.firstContext;P!==null;){if(P.context===c){if(m.tag===1){P=xr(-1,a&-a),P.tag=2;var z=m.updateQueue;if(z!==null){z=z.shared;var Q=z.pending;Q===null?P.next=P:(P.next=Q.next,Q.next=P),z.pending=P}}m.lanes|=a,P=m.alternate,P!==null&&(P.lanes|=a),Mh(m.return,a,i),S.lanes|=a;break}P=P.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=a,S=E.alternate,S!==null&&(S.lanes|=a),Mh(E,a,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}Wt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,yo(i,a),d=Tn(d),c=c(d),i.flags|=1,Wt(n,i,c,a),i.child;case 14:return c=i.type,d=Un(c,i.pendingProps),d=Un(c.type,d),Um(n,i,c,d,a);case 15:return zm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Un(c,d),ku(n,i),i.tag=1,Xt(c)?(n=!0,uu(i)):n=!1,yo(i,a),Dm(i,c,d),Jh(i,c,d,a),nd(null,i,c,!0,n,a);case 19:return Qm(n,i,a);case 22:return Bm(n,i,a)}throw Error(t(156,i.tag))};function vg(n,i){return $s(n,i)}function ew(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(n,i,a,c){return new ew(n,i,a,c)}function Td(n){return n=n.prototype,!(!n||!n.isReactComponent)}function tw(n){if(typeof n=="function")return Td(n)?1:0;if(n!=null){if(n=n.$$typeof,n===b)return 11;if(n===Ot)return 14}return 2}function fi(n,i){var a=n.alternate;return a===null?(a=An(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ju(n,i,a,c,d,m){var E=2;if(c=n,typeof n=="function")Td(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case x:return ms(a.children,d,m,i);case C:E=8,d|=8;break;case R:return n=An(12,a,i,d|2),n.elementType=R,n.lanes=m,n;case k:return n=An(13,a,i,d),n.elementType=k,n.lanes=m,n;case rt:return n=An(19,a,i,d),n.elementType=rt,n.lanes=m,n;case ze:return Fu(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:E=10;break e;case V:E=9;break e;case b:E=11;break e;case Ot:E=14;break e;case bt:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=An(E,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function ms(n,i,a,c){return n=An(7,n,c,i),n.lanes=a,n}function Fu(n,i,a,c){return n=An(22,n,c,i),n.elementType=ze,n.lanes=a,n.stateNode={isHidden:!1},n}function Id(n,i,a){return n=An(6,n,null,i),n.lanes=a,n}function Sd(n,i,a){return i=An(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function nw(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kr(0),this.expirationTimes=Kr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ad(n,i,a,c,d,m,E,S,P){return n=new nw(n,i,a,S,P),i===1?(i=1,m===!0&&(i|=8)):i=0,m=An(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},jh(m),n}function rw(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ye,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Eg(n){if(!n)return ii;n=n._reactInternals;e:{if(Nn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Xt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Xt(a))return Kp(n,a,i)}return i}function wg(n,i,a,c,d,m,E,S,P){return n=Ad(a,c,!0,n,d,m,E,S,P),n.context=Eg(null),a=n.current,c=Gt(),d=hi(a),m=xr(c,d),m.callback=i??null,ai(a,m,d),n.current.lanes=d,Qr(n,d,c),en(n,c),n}function Uu(n,i,a,c){var d=i.current,m=Gt(),E=hi(d);return a=Eg(a),i.context===null?i.context=a:i.pendingContext=a,i=xr(m,E),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ai(d,i,E),n!==null&&($n(n,d,E,m),yu(n,d,E)),E}function zu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Tg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Cd(n,i){Tg(n,i),(n=n.alternate)&&Tg(n,i)}function iw(){return null}var Ig=typeof reportError=="function"?reportError:function(n){console.error(n)};function kd(n){this._internalRoot=n}Bu.prototype.render=kd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Uu(n,i,null,null)},Bu.prototype.unmount=kd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ds(function(){Uu(null,n,null,null)}),i[Ar]=null}};function Bu(n){this._internalRoot=n}Bu.prototype.unstable_scheduleHydration=function(n){if(n){var i=Bl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Jn.length&&i!==0&&i<Jn[a].priority;a++);Jn.splice(a,0,n),a===0&&Hl(n)}};function Rd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function $u(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Sg(){}function sw(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var z=zu(E);m.call(z)}}var E=wg(i,c,n,0,null,!1,!1,"",Sg);return n._reactRootContainer=E,n[Ar]=E.current,ka(n.nodeType===8?n.parentNode:n),ds(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var z=zu(P);S.call(z)}}var P=Ad(n,0,!1,null,null,!1,!1,"",Sg);return n._reactRootContainer=P,n[Ar]=P.current,ka(n.nodeType===8?n.parentNode:n),ds(function(){Uu(i,P,a,c)}),P}function qu(n,i,a,c,d){var m=a._reactRootContainer;if(m){var E=m;if(typeof d=="function"){var S=d;d=function(){var P=zu(E);S.call(P)}}Uu(i,E,n,d)}else E=sw(a,i,n,d,c);return zu(E)}Ul=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Gr(i.pendingLanes);a!==0&&(Yr(i,a|1),en(i,He()),!(be&6)&&(To=He()+500,si()))}break;case 13:ds(function(){var c=Pr(n,1);if(c!==null){var d=Gt();$n(c,n,1,d)}}),Cd(n,1)}},Ws=function(n){if(n.tag===13){var i=Pr(n,134217728);if(i!==null){var a=Gt();$n(i,n,134217728,a)}Cd(n,134217728)}},zl=function(n){if(n.tag===13){var i=hi(n),a=Pr(n,i);if(a!==null){var c=Gt();$n(a,n,i,c)}Cd(n,i)}},Bl=function(){return Ne},$l=function(n,i){var a=Ne;try{return Ne=n,i()}finally{Ne=a}},Ls=function(n,i,a){switch(i){case"input":if(Jo(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=au(c);if(!d)throw Error(t(90));Ns(c),Jo(c,d)}}}break;case"textarea":bs(n,a);break;case"select":i=a.value,i!=null&&yr(n,!!a.multiple,i,!1)}},Wi=vd,la=ds;var ow={usingClientEntryPoint:!1,Events:[xa,lo,au,Yn,aa,vd]},qa={findFiberByHostInstance:is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aw={bundleType:qa.bundleType,version:qa.version,rendererPackageName:qa.rendererPackageName,rendererConfig:qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ha(n),n===null?null:n.stateNode},findFiberByHostInstance:qa.findFiberByHostInstance||iw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hu.isDisabled&&Hu.supportsFiber)try{Xi=Hu.inject(aw),sn=Hu}catch{}}return tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ow,tn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rd(i))throw Error(t(200));return rw(n,i,null,a)},tn.createRoot=function(n,i){if(!Rd(n))throw Error(t(299));var a=!1,c="",d=Ig;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Ad(n,1,!1,null,null,a,!1,c,d),n[Ar]=i.current,ka(n.nodeType===8?n.parentNode:n),new kd(i)},tn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ha(i),n=n===null?null:n.stateNode,n},tn.flushSync=function(n){return ds(n)},tn.hydrate=function(n,i,a){if(!$u(i))throw Error(t(200));return qu(null,n,i,!0,a)},tn.hydrateRoot=function(n,i,a){if(!Rd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",E=Ig;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=wg(i,null,n,1,a??null,d,!1,m,E),n[Ar]=i.current,ka(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Bu(i)},tn.render=function(n,i,a){if(!$u(i))throw Error(t(200));return qu(null,n,i,!1,a)},tn.unmountComponentAtNode=function(n){if(!$u(n))throw Error(t(40));return n._reactRootContainer?(ds(function(){qu(null,null,n,!1,function(){n._reactRootContainer=null,n[Ar]=null})}),!0):!1},tn.unstable_batchedUpdates=vd,tn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!$u(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return qu(n,i,a,!1,c)},tn.version="18.3.1-next-f1338f8080-20240426",tn}var Dg;function gw(){if(Dg)return Nd.exports;Dg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Nd.exports=mw(),Nd.exports}var Vg;function yw(){if(Vg)return Wu;Vg=1;var r=gw();return Wu.createRoot=r.createRoot,Wu.hydrateRoot=r.hydrateRoot,Wu}var _w=yw();const vw=h_(_w);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),d_=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ww={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=_e.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:h,...f},g)=>_e.createElement("svg",{ref:g,...ww,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:d_("lucide",o),...f},[...h.map(([v,w])=>_e.createElement(v,w)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=(r,e)=>{const t=_e.forwardRef(({className:s,...o},l)=>_e.createElement(Tw,{ref:l,iconNode:e,className:d_(`lucide-${Ew(r)}`,s),...o}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=Be("Bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=Be("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=Be("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=Be("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=Be("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=Be("CircleDollarSign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=Be("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=Be("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=Be("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=Be("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=Be("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=Be("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=Be("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=Be("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=Be("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=Be("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=Be("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=Be("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=Be("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=Be("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=Be("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=Be("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=Be("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=Be("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=Be("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=Be("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=Be("WalletCards",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=Be("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Vw=()=>{};var Og={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Ow=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},I_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,v=g?r[o+2]:0,w=l>>2,I=(l&3)<<4|f>>4;let A=(f&15)<<2|v>>6,U=v&63;g||(U=64,h||(A=64)),s.push(t[w],t[I],t[A],t[U])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(T_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Ow(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const v=o<r.length?t[r.charAt(o)]:64;++o;const I=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||v==null||I==null)throw new bw;const A=l<<2|f>>4;if(s.push(A),v!==64){const U=f<<4&240|v>>2;if(s.push(U),I!==64){const q=v<<6&192|I;s.push(q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class bw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mw=function(r){const e=T_(r);return I_.encodeByteArray(e,!0)},hc=function(r){return Mw(r).replace(/\./g,"")},S_=function(r){try{return I_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=()=>Lw().__FIREBASE_DEFAULTS__,Fw=()=>{if(typeof process>"u"||typeof Og>"u")return;const r=Og.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Uw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&S_(r[1]);return e&&JSON.parse(e)},xc=()=>{try{return Vw()||jw()||Fw()||Uw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},A_=r=>{var e,t;return(t=(e=xc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},zw=r=>{const e=A_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},C_=()=>{var r;return(r=xc())===null||r===void 0?void 0:r.config},k_=r=>{var e;return(e=xc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function R_(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[hc(JSON.stringify(t)),hc(JSON.stringify(h)),""].join(".")}const Za={};function qw(){const r={prod:[],emulator:[]};for(const e of Object.keys(Za))Za[e]?r.emulator.push(e):r.prod.push(e);return r}function Hw(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let bg=!1;function P_(r,e){if(typeof window>"u"||typeof document>"u"||!Bo(window.location.host)||Za[r]===e||Za[r]||bg)return;Za[r]=e;function t(A){return`__firebase__banner__${A}`}const s="__firebase__banner",l=qw().prod.length>0;function h(){const A=document.getElementById(s);A&&A.remove()}function f(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function g(A,U){A.setAttribute("width","24"),A.setAttribute("id",U),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function v(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{bg=!0,h()},A}function w(A,U){A.setAttribute("id",U),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function I(){const A=Hw(s),U=t("text"),q=document.getElementById(U)||document.createElement("span"),j=t("learnmore"),B=document.getElementById(j)||document.createElement("a"),Z=t("preprendIcon"),te=document.getElementById(Z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const fe=A.element;f(fe),w(B,j);const Te=v();g(te,Z),fe.append(te,q,B,Te),document.body.appendChild(fe)}l?(q.innerText="Preview backend disconnected.",te.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(te.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,q.innerText="Preview backend running in this workspace."),q.setAttribute("id",U)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ww(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function Gw(){var r;const e=(r=xc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Kw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qw(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Yw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xw(){const r=$t();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Jw(){return!Gw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zw(){try{return typeof indexedDB=="object"}catch{return!1}}function e1(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1="FirebaseError";class Br extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=t1,Object.setPrototypeOf(this,Br.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_l.prototype.create)}}class _l{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?n1(l,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Br(o,f,s)}}function n1(r,e){return r.replace(r1,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const r1=/\{\$([^}]+)}/g;function i1(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Es(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(Mg(l)&&Mg(h)){if(!Es(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Mg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ga(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ka(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function s1(r,e){const t=new o1(r,e);return t.subscribe.bind(t)}class o1{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");a1(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Od),o.error===void 0&&(o.error=Od),o.complete===void 0&&(o.complete=Od);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function a1(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Od(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(r){return r&&r._delegate?r._delegate:r}class ws{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Bw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(c1(e))try{this.getOrInitializeService({instanceIdentifier:gs})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=gs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gs){return this.instances.has(e)}getOptions(e=gs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:u1(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=gs){return this.component?this.component.multipleInstances?e:gs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function u1(r){return r===gs?void 0:r}function c1(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new l1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Pe||(Pe={}));const d1={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},f1=Pe.INFO,p1={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},m1=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=p1[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class If{constructor(e){this.name=e,this._logLevel=f1,this._logHandler=m1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?d1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const g1=(r,e)=>e.some(t=>r instanceof t);let Lg,jg;function y1(){return Lg||(Lg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _1(){return jg||(jg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const x_=new WeakMap,Wd=new WeakMap,N_=new WeakMap,bd=new WeakMap,Sf=new WeakMap;function v1(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(Ii(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&x_.set(t,r)}).catch(()=>{}),Sf.set(e,r),e}function E1(r){if(Wd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Wd.set(r,e)}let Gd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Wd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||N_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ii(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function w1(r){Gd=r(Gd)}function T1(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Md(this),e,...t);return N_.set(s,e.sort?e.sort():[e]),Ii(s)}:_1().includes(r)?function(...e){return r.apply(Md(this),e),Ii(x_.get(this))}:function(...e){return Ii(r.apply(Md(this),e))}}function I1(r){return typeof r=="function"?T1(r):(r instanceof IDBTransaction&&E1(r),g1(r,y1())?new Proxy(r,Gd):r)}function Ii(r){if(r instanceof IDBRequest)return v1(r);if(bd.has(r))return bd.get(r);const e=I1(r);return e!==r&&(bd.set(r,e),Sf.set(e,r)),e}const Md=r=>Sf.get(r);function S1(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=Ii(h);return s&&h.addEventListener("upgradeneeded",g=>{s(Ii(h.result),g.oldVersion,g.newVersion,Ii(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),f}const A1=["get","getKey","getAll","getAllKeys","count"],C1=["put","add","delete","clear"],Ld=new Map;function Fg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ld.get(e))return Ld.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=C1.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||A1.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(f.shift())),(await Promise.all([v[t](...f),o&&g.done]))[0]};return Ld.set(e,l),l}w1(r=>({...r,get:(e,t,s)=>Fg(e,t)||r.get(e,t,s),has:(e,t)=>!!Fg(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(R1(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function R1(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kd="@firebase/app",Ug="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new If("@firebase/app"),P1="@firebase/app-compat",x1="@firebase/analytics-compat",N1="@firebase/analytics",D1="@firebase/app-check-compat",V1="@firebase/app-check",O1="@firebase/auth",b1="@firebase/auth-compat",M1="@firebase/database",L1="@firebase/data-connect",j1="@firebase/database-compat",F1="@firebase/functions",U1="@firebase/functions-compat",z1="@firebase/installations",B1="@firebase/installations-compat",$1="@firebase/messaging",q1="@firebase/messaging-compat",H1="@firebase/performance",W1="@firebase/performance-compat",G1="@firebase/remote-config",K1="@firebase/remote-config-compat",Q1="@firebase/storage",Y1="@firebase/storage-compat",X1="@firebase/firestore",J1="@firebase/ai",Z1="@firebase/firestore-compat",eT="firebase",tT="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="[DEFAULT]",nT={[Kd]:"fire-core",[P1]:"fire-core-compat",[N1]:"fire-analytics",[x1]:"fire-analytics-compat",[V1]:"fire-app-check",[D1]:"fire-app-check-compat",[O1]:"fire-auth",[b1]:"fire-auth-compat",[M1]:"fire-rtdb",[L1]:"fire-data-connect",[j1]:"fire-rtdb-compat",[F1]:"fire-fn",[U1]:"fire-fn-compat",[z1]:"fire-iid",[B1]:"fire-iid-compat",[$1]:"fire-fcm",[q1]:"fire-fcm-compat",[H1]:"fire-perf",[W1]:"fire-perf-compat",[G1]:"fire-rc",[K1]:"fire-rc-compat",[Q1]:"fire-gcs",[Y1]:"fire-gcs-compat",[X1]:"fire-fst",[Z1]:"fire-fst-compat",[J1]:"fire-vertex","fire-js":"fire-js",[eT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=new Map,rT=new Map,Yd=new Map;function zg(r,e){try{r.container.addComponent(e)}catch(t){Lr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function bo(r){const e=r.name;if(Yd.has(e))return Lr.debug(`There were multiple attempts to register component ${e}.`),!1;Yd.set(e,r);for(const t of sl.values())zg(t,r);for(const t of rT.values())zg(t,r);return!0}function Af(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Cn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Si=new _l("app","Firebase",iT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ws("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Si.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=tT;function Cf(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Qd,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw Si.create("bad-app-name",{appName:String(o)});if(t||(t=C_()),!t)throw Si.create("no-options");const l=sl.get(o);if(l){if(Es(t,l.options)&&Es(s,l.config))return l;throw Si.create("duplicate-app",{appName:o})}const h=new h1(o);for(const g of Yd.values())h.addComponent(g);const f=new sT(t,s,h);return sl.set(o,f),f}function D_(r=Qd){const e=sl.get(r);if(!e&&r===Qd&&C_())return Cf();if(!e)throw Si.create("no-app",{appName:r});return e}function V_(){return Array.from(sl.values())}function Ai(r,e,t){var s;let o=(s=nT[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lr.warn(f.join(" "));return}bo(new ws(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT="firebase-heartbeat-database",aT=1,ol="firebase-heartbeat-store";let jd=null;function O_(){return jd||(jd=S1(oT,aT,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ol)}catch(t){console.warn(t)}}}}).catch(r=>{throw Si.create("idb-open",{originalErrorMessage:r.message})})),jd}async function lT(r){try{const t=(await O_()).transaction(ol),s=await t.objectStore(ol).get(b_(r));return await t.done,s}catch(e){if(e instanceof Br)Lr.warn(e.message);else{const t=Si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lr.warn(t.message)}}}async function Bg(r,e){try{const s=(await O_()).transaction(ol,"readwrite");await s.objectStore(ol).put(e,b_(r)),await s.done}catch(t){if(t instanceof Br)Lr.warn(t.message);else{const s=Si.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Lr.warn(s.message)}}}function b_(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=1024,cT=30;class hT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=$g();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>cT){const h=pT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Lr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=$g(),{heartbeatsToSend:s,unsentEntries:o}=dT(this._heartbeatsCache.heartbeats),l=hc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Lr.warn(t),""}}}function $g(){return new Date().toISOString().substring(0,10)}function dT(r,e=uT){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),qg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),qg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class fT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zw()?e1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await lT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Bg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Bg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function qg(r){return hc(JSON.stringify({version:2,heartbeats:r})).length}function pT(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(r){bo(new ws("platform-logger",e=>new k1(e),"PRIVATE")),bo(new ws("heartbeat",e=>new hT(e),"PRIVATE")),Ai(Kd,Ug,r),Ai(Kd,Ug,"esm2017"),Ai("fire-js","")}mT("");var gT="firebase",yT="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ai(gT,yT,"app");function kf(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function M_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _T=M_,L_=new _l("auth","Firebase",M_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=new If("@firebase/auth");function vT(r,...e){dc.logLevel<=Pe.WARN&&dc.warn(`Auth (${$o}): ${r}`,...e)}function Zu(r,...e){dc.logLevel<=Pe.ERROR&&dc.error(`Auth (${$o}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(r,...e){throw Rf(r,...e)}function lr(r,...e){return Rf(r,...e)}function j_(r,e,t){const s=Object.assign(Object.assign({},_T()),{[e]:t});return new _l("auth","Firebase",s).create(e,{appName:r.name})}function Mr(r){return j_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return L_.create(r,...e)}function ve(r,e,...t){if(!r)throw Rf(e,...t)}function Vr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Zu(e),new Error(e)}function jr(r,e){r||Vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function ET(){return Hg()==="http:"||Hg()==="https:"}function Hg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ET()||Qw()||"connection"in navigator)?navigator.onLine:!0}function TT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t){this.shortDelay=e,this.longDelay=t,jr(t>e,"Short delay should be less than long delay!"),this.isMobile=Ww()||Yw()}get(){return wT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(r,e){jr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],AT=new El(3e4,6e4);function Li(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function ji(r,e,t,s,o={}){return U_(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const f=vl(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const v=Object.assign({method:e,headers:g},l);return Kw()||(v.referrerPolicy="no-referrer"),r.emulatorConfig&&Bo(r.emulatorConfig.host)&&(v.credentials="include"),F_.fetch()(await z_(r,r.config.apiHost,t,f),v)})}async function U_(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},IT),e);try{const o=new kT(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Gu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,v]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Gu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Gu(r,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw j_(r,w,v);Gn(r,w)}}catch(o){if(o instanceof Br)throw o;Gn(r,"network-request-failed",{message:String(o)})}}async function wl(r,e,t,s,o={}){const l=await ji(r,e,t,s,o);return"mfaPendingCredential"in l&&Gn(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function z_(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?Pf(r.config,o):`${r.config.apiScheme}://${o}`;return ST.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function CT(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(lr(this.auth,"network-request-failed")),AT.get())})}}function Gu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=lr(r,e,s);return o.customData._tokenResponse=t,o}function Wg(r){return r!==void 0&&r.enterprise!==void 0}class RT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return CT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function PT(r,e){return ji(r,"GET","/v2/recaptchaConfig",Li(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xT(r,e){return ji(r,"POST","/v1/accounts:delete",e)}async function fc(r,e){return ji(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NT(r,e=!1){const t=Et(r),s=await t.getIdToken(e),o=xf(s);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:el(Fd(o.auth_time)),issuedAtTime:el(Fd(o.iat)),expirationTime:el(Fd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Fd(r){return Number(r)*1e3}function xf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Zu("JWT malformed, contained fewer than 3 sections"),null;try{const o=S_(t);return o?JSON.parse(o):(Zu("Failed to decode base64 JWT payload"),null)}catch(o){return Zu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Gg(r){const e=xf(r);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function al(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Br&&DT(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function DT({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=el(this.lastLoginAt),this.creationTime=el(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pc(r){var e;const t=r.auth,s=await r.getIdToken(),o=await al(r,fc(t,{idToken:s}));ve(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?B_(l.providerUserInfo):[],f=bT(r.providerData,h),g=r.isAnonymous,v=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),w=g?v:!1,I={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Jd(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(r,I)}async function OT(r){const e=Et(r);await pc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bT(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function B_(r){return r.map(e=>{var{providerId:t}=e,s=kf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MT(r,e){const t=await U_(r,{},async()=>{const s=vl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await z_(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:s};return r.emulatorConfig&&Bo(r.emulatorConfig.host)&&(g.credentials="include"),F_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function LT(r,e){return ji(r,"POST","/v2/accounts:revokeToken",Li(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=Gg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await MT(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new Po;return s&&(ve(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ve(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Po,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(r,e){ve(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class qn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=kf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Jd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await al(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return NT(this,e)}reload(){return OT(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await pc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cn(this.auth.app))return Promise.reject(Mr(this.auth));const e=await this.getIdToken();return await al(this,xT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,f,g,v,w;const I=(s=t.displayName)!==null&&s!==void 0?s:void 0,A=(o=t.email)!==null&&o!==void 0?o:void 0,U=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,q=(h=t.photoURL)!==null&&h!==void 0?h:void 0,j=(f=t.tenantId)!==null&&f!==void 0?f:void 0,B=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,Z=(v=t.createdAt)!==null&&v!==void 0?v:void 0,te=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:fe,emailVerified:Te,isAnonymous:ue,providerData:ye,stsTokenManager:x}=t;ve(fe&&x,e,"internal-error");const C=Po.fromJSON(this.name,x);ve(typeof fe=="string",e,"internal-error"),mi(I,e.name),mi(A,e.name),ve(typeof Te=="boolean",e,"internal-error"),ve(typeof ue=="boolean",e,"internal-error"),mi(U,e.name),mi(q,e.name),mi(j,e.name),mi(B,e.name),mi(Z,e.name),mi(te,e.name);const R=new qn({uid:fe,auth:e,email:A,emailVerified:Te,displayName:I,isAnonymous:ue,photoURL:q,phoneNumber:U,tenantId:j,stsTokenManager:C,createdAt:Z,lastLoginAt:te});return ye&&Array.isArray(ye)&&(R.providerData=ye.map(N=>Object.assign({},N))),B&&(R._redirectEventId=B),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new Po;o.updateFromServerResponse(t);const l=new qn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await pc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?B_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Po;f.updateFromIdToken(s);const g=new qn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Jd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,v),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=new Map;function Or(r){jr(r instanceof Function,"Expected a class definition");let e=Kg.get(r);return e?(jr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Kg.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}$_.type="NONE";const Qg=$_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(r,e,t){return`firebase:${r}:${e}:${t}`}class xo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=ec(this.userKey,o.apiKey,l),this.fullPersistenceKey=ec("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await fc(this.auth,{idToken:e}).catch(()=>{});return t?qn._fromGetAccountInfoResponse(this.auth,t,e):null}return qn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new xo(Or(Qg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||Or(Qg);const h=ec(s,e.config.apiKey,e.name);let f=null;for(const v of t)try{const w=await v._get(h);if(w){let I;if(typeof w=="string"){const A=await fc(e,{idToken:w}).catch(()=>{});if(!A)break;I=await qn._fromGetAccountInfoResponse(e,A,w)}else I=qn._fromJSON(e,w);v!==l&&(f=I),l=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new xo(l,e,s):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async v=>{if(v!==l)try{await v._remove(h)}catch{}})),new xo(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(G_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(q_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Q_(e))return"Blackberry";if(Y_(e))return"Webos";if(H_(e))return"Safari";if((e.includes("chrome/")||W_(e))&&!e.includes("edge/"))return"Chrome";if(K_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function q_(r=$t()){return/firefox\//i.test(r)}function H_(r=$t()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function W_(r=$t()){return/crios\//i.test(r)}function G_(r=$t()){return/iemobile/i.test(r)}function K_(r=$t()){return/android/i.test(r)}function Q_(r=$t()){return/blackberry/i.test(r)}function Y_(r=$t()){return/webos/i.test(r)}function Nf(r=$t()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function jT(r=$t()){var e;return Nf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FT(){return Xw()&&document.documentMode===10}function X_(r=$t()){return Nf(r)||K_(r)||Y_(r)||Q_(r)||/windows phone/i.test(r)||G_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(r,e=[]){let t;switch(r){case"Browser":t=Yg($t());break;case"Worker":t=`${Yg($t())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${$o}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zT(r,e={}){return ji(r,"GET","/v2/passwordPolicy",Li(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=6;class $T{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:BT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xg(this),this.idTokenSubscription=new Xg(this),this.beforeStateQueue=new UT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=L_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Or(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await xo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await fc(this,{idToken:e}),s=await qn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Cn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await pc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cn(this.app))return Promise.reject(Mr(this));const t=e?Et(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cn(this.app)?Promise.reject(Mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cn(this.app)?Promise.reject(Mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zT(this),t=new $T(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _l("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await LT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Or(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await xo.create(this,[Or(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=J_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&vT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Cs(r){return Et(r)}class Xg{constructor(e){this.auth=e,this.observer=null,this.addObserver=s1(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HT(r){Nc=r}function Z_(r){return Nc.loadJS(r)}function WT(){return Nc.recaptchaEnterpriseScript}function GT(){return Nc.gapiScript}function KT(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class QT{constructor(){this.enterprise=new YT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class YT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const XT="recaptcha-enterprise",ev="NO_RECAPTCHA";class JT{constructor(e){this.type=XT,this.auth=Cs(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{PT(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const v=new RT(g);return l.tenantId==null?l._agentRecaptchaConfig=v:l._tenantRecaptchaConfigs[l.tenantId]=v,h(v.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;Wg(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(v=>{h(v)}).catch(()=>{h(ev)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new QT().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(f=>{if(!t&&Wg(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=WT();g.length!==0&&(g+=f),Z_(g).then(()=>{o(f,l,h)}).catch(v=>{h(v)})}}).catch(f=>{h(f)})})}}async function Jg(r,e,t,s=!1,o=!1){const l=new JT(r);let h;if(o)h=ev;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,v=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Zd(r,e,t,s,o){var l;if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Jg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Jg(r,e,t,t==="getOobCode");return s(r,f)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(r,e){const t=Af(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Es(l,e??{}))return o;Gn(o,"already-initialized")}return t.initialize({options:e})}function eI(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Or);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function tI(r,e,t){const s=Cs(r);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=tv(e),{host:h,port:f}=nI(e),g=f===null?"":`:${f}`,v={url:`${l}//${h}${g}/`},w=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve(Es(v,s.config.emulator)&&Es(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Bo(h)?(R_(`${l}//${h}${g}`),P_("Auth",!0)):rI()}function tv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function nI(r){const e=tv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Zg(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:Zg(h)}}}function Zg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function rI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,t){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}async function iI(r,e){return ji(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(r,e){return wl(r,"POST","/v1/accounts:signInWithPassword",Li(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(r,e){return wl(r,"POST","/v1/accounts:signInWithEmailLink",Li(r,e))}async function aI(r,e){return wl(r,"POST","/v1/accounts:signInWithEmailLink",Li(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends Df{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new ll(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new ll(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zd(e,t,"signInWithPassword",sI);case"emailLink":return oI(e,{email:this._email,oobCode:this._password});default:Gn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zd(e,s,"signUpPassword",iI);case"emailLink":return aI(e,{idToken:t,email:this._email,oobCode:this._password});default:Gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(r,e){return wl(r,"POST","/v1/accounts:signInWithIdp",Li(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI="http://localhost";class Ts extends Df{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Gn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=kf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new Ts(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return No(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,No(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,No(e,t)}buildRequest(){const e={requestUri:lI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cI(r){const e=Ga(Ka(r)).link,t=e?Ga(Ka(e)).deep_link_id:null,s=Ga(Ka(r)).deep_link_id;return(s?Ga(Ka(s)).link:null)||s||t||e||r}class Vf{constructor(e){var t,s,o,l,h,f;const g=Ga(Ka(e)),v=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,I=uI((o=g.mode)!==null&&o!==void 0?o:null);ve(v&&w&&I,"argument-error"),this.apiKey=v,this.operation=I,this.code=w,this.continueUrl=(l=g.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(f=g.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=cI(e);try{return new Vf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this.providerId=qo.PROVIDER_ID}static credential(e,t){return ll._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Vf.parseLink(t);return ve(s,"argument-error"),ll._fromEmailAndCode(e,s.code,s.tenantId)}}qo.PROVIDER_ID="password";qo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends nv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends Tl{constructor(){super("facebook.com")}static credential(e){return Ts._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gi.credential(e.oauthAccessToken)}catch{return null}}}gi.FACEBOOK_SIGN_IN_METHOD="facebook.com";gi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends Tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ts._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return yi.credential(t,s)}catch{return null}}}yi.GOOGLE_SIGN_IN_METHOD="google.com";yi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends Tl{constructor(){super("github.com")}static credential(e){return Ts._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _i.credential(e.oauthAccessToken)}catch{return null}}}_i.GITHUB_SIGN_IN_METHOD="github.com";_i.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Tl{constructor(){super("twitter.com")}static credential(e,t){return Ts._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return vi.credential(t,s)}catch{return null}}}vi.TWITTER_SIGN_IN_METHOD="twitter.com";vi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hI(r,e){return wl(r,"POST","/v1/accounts:signUp",Li(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await qn._fromIdTokenResponse(e,s,o),h=ey(s);return new Is({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=ey(s);return new Is({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function ey(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc extends Br{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,mc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new mc(e,t,s,o)}}function rv(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?mc._fromErrorAndOperation(r,l,e,s):l})}async function dI(r,e,t=!1){const s=await al(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Is._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fI(r,e,t=!1){const{auth:s}=r;if(Cn(s.app))return Promise.reject(Mr(s));const o="reauthenticate";try{const l=await al(r,rv(s,o,e,r),t);ve(l.idToken,s,"internal-error");const h=xf(l.idToken);ve(h,s,"internal-error");const{sub:f}=h;return ve(r.uid===f,s,"user-mismatch"),Is._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Gn(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iv(r,e,t=!1){if(Cn(r.app))return Promise.reject(Mr(r));const s="signIn",o=await rv(r,s,e),l=await Is._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function pI(r,e){return iv(Cs(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sv(r){const e=Cs(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function mI(r,e,t){if(Cn(r.app))return Promise.reject(Mr(r));const s=Cs(r),h=await Zd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hI).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&sv(r),g}),f=await Is._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(f.user),f}function gI(r,e,t){return Cn(r.app)?Promise.reject(Mr(r)):pI(Et(r),qo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&sv(r),s})}function yI(r,e,t,s){return Et(r).onIdTokenChanged(e,t,s)}function _I(r,e,t){return Et(r).beforeAuthStateChanged(e,t)}function vI(r,e,t,s){return Et(r).onAuthStateChanged(e,t,s)}function Do(r){return Et(r).signOut()}const gc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gc,"1"),this.storage.removeItem(gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=1e3,wI=10;class av extends ov{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=X_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);FT()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,wI):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},EI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}av.type="LOCAL";const TI=av;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv extends ov{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}lv.type="SESSION";const uv=lv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Dc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async v=>v(t.origin,l)),g=await II(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const v=Of("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(I){const A=I;if(A.data.eventId===v)switch(A.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(A.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(){return window}function AI(r){ur().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(){return typeof ur().WorkerGlobalScope<"u"&&typeof ur().importScripts=="function"}async function CI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function RI(){return cv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv="firebaseLocalStorageDb",PI=1,yc="firebaseLocalStorage",dv="fbase_key";class Il{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vc(r,e){return r.transaction([yc],e?"readwrite":"readonly").objectStore(yc)}function xI(){const r=indexedDB.deleteDatabase(hv);return new Il(r).toPromise()}function ef(){const r=indexedDB.open(hv,PI);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(yc,{keyPath:dv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(yc)?e(s):(s.close(),await xI(),e(await ef()))})})}async function ty(r,e,t){const s=Vc(r,!0).put({[dv]:e,value:t});return new Il(s).toPromise()}async function NI(r,e){const t=Vc(r,!1).get(e),s=await new Il(t).toPromise();return s===void 0?null:s.value}function ny(r,e){const t=Vc(r,!0).delete(e);return new Il(t).toPromise()}const DI=800,VI=3;class fv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ef(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>VI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dc._getInstance(RI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await CI(),!this.activeServiceWorker)return;this.sender=new SI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ef();return await ty(e,gc,"1"),await ny(e,gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>ty(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>NI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ny(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Vc(o,!1).getAll();return new Il(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fv.type="LOCAL";const OI=fv;new El(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(r,e){return e?Or(e):(ve(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf extends Df{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return No(e,this._buildIdpRequest())}_linkToIdToken(e,t){return No(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return No(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function MI(r){return iv(r.auth,new bf(r),r.bypassAuthState)}function LI(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),fI(t,new bf(r),r.bypassAuthState)}async function jI(r){const{auth:e,user:t}=r;return ve(t,e,"internal-error"),dI(t,new bf(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MI;case"linkViaPopup":case"linkViaRedirect":return jI;case"reauthViaPopup":case"reauthViaRedirect":return LI;default:Gn(this.auth,"internal-error")}}resolve(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=new El(2e3,1e4);class Ro extends pv{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,Ro.currentPopupAction&&Ro.currentPopupAction.cancel(),Ro.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){jr(this.filter.length===1,"Popup operations only handle one event");const e=Of();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(lr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(lr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ro.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FI.get())};e()}}Ro.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="pendingRedirect",tc=new Map;class zI extends pv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=tc.get(this.auth._key());if(!e){try{const s=await BI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}tc.set(this.auth._key(),e)}return this.bypassAuthState||tc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BI(r,e){const t=HI(e),s=qI(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function $I(r,e){tc.set(r._key(),e)}function qI(r){return Or(r._redirectPersistence)}function HI(r){return ec(UI,r.config.apiKey,r.name)}async function WI(r,e,t=!1){if(Cn(r.app))return Promise.reject(Mr(r));const s=Cs(r),o=bI(s,e),h=await new zI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=10*60*1e3;class KI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!mv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(lr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GI&&this.cachedEventUids.clear(),this.cachedEventUids.has(ry(e))}saveEventToCache(e){this.cachedEventUids.add(ry(e)),this.lastProcessedEventTime=Date.now()}}function ry(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function mv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mv(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YI(r,e={}){return ji(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JI=/^https?/;async function ZI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await YI(r);for(const t of e)try{if(eS(t))return}catch{}Gn(r,"unauthorized-domain")}function eS(r){const e=Xd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!JI.test(t))return!1;if(XI.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=new El(3e4,6e4);function iy(){const r=ur().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function nS(r){return new Promise((e,t)=>{var s,o,l;function h(){iy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{iy(),t(lr(r,"network-request-failed"))},timeout:tS.get()})}if(!((o=(s=ur().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=ur().gapi)===null||l===void 0)&&l.load)h();else{const f=KT("iframefcb");return ur()[f]=()=>{gapi.load?h():t(lr(r,"network-request-failed"))},Z_(`${GT()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw nc=null,e})}let nc=null;function rS(r){return nc=nc||nS(r),nc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=new El(5e3,15e3),sS="__/auth/iframe",oS="emulator/auth/iframe",aS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uS(r){const e=r.config;ve(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Pf(e,oS):`https://${r.config.authDomain}/${sS}`,s={apiKey:e.apiKey,appName:r.name,v:$o},o=lS.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${vl(s).slice(1)}`}async function cS(r){const e=await rS(r),t=ur().gapi;return ve(t,r,"internal-error"),e.open({where:document.body,url:uS(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aS,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=lr(r,"network-request-failed"),f=ur().setTimeout(()=>{l(h)},iS.get());function g(){ur().clearTimeout(f),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dS=500,fS=600,pS="_blank",mS="http://localhost";class sy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gS(r,e,t,s=dS,o=fS){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const g=Object.assign(Object.assign({},hS),{width:s.toString(),height:o.toString(),top:l,left:h}),v=$t().toLowerCase();t&&(f=W_(v)?pS:t),q_(v)&&(e=e||mS,g.scrollbars="yes");const w=Object.entries(g).reduce((A,[U,q])=>`${A}${U}=${q},`,"");if(jT(v)&&f!=="_self")return yS(e||"",f),new sy(null);const I=window.open(e||"",f,w);ve(I,r,"popup-blocked");try{I.focus()}catch{}return new sy(I)}function yS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S="__/auth/handler",vS="emulator/auth/handler",ES=encodeURIComponent("fac");async function oy(r,e,t,s,o,l){ve(r.config.authDomain,r,"auth-domain-config-required"),ve(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:$o,eventId:o};if(e instanceof nv){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",i1(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,I]of Object.entries({}))h[w]=I}if(e instanceof Tl){const w=e.getScopes().filter(I=>I!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const g=await r._getAppCheckToken(),v=g?`#${ES}=${encodeURIComponent(g)}`:"";return`${wS(r)}?${vl(f).slice(1)}${v}`}function wS({config:r}){return r.emulator?Pf(r,vS):`https://${r.authDomain}/${_S}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="webStorageSupport";class TS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uv,this._completeRedirectFn=WI,this._overrideRedirectResult=$I}async _openPopup(e,t,s,o){var l;jr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await oy(e,t,s,Xd(),o);return gS(e,h,Of())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await oy(e,t,s,Xd(),o);return AI(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(jr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await cS(e),s=new KI(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ud,{type:Ud},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Ud];h!==void 0&&t(!!h),Gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ZI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return X_()||H_()||Nf()}}const IS=TS;var ay="@firebase/auth",ly="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CS(r){bo(new ws("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:J_(r)},v=new qT(s,o,l,g);return eI(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),bo(new ws("auth-internal",e=>{const t=Cs(e.getProvider("auth").getImmediate());return(s=>new SS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ai(ay,ly,AS(r)),Ai(ay,ly,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=5*60,RS=k_("authIdTokenMaxAge")||kS;let uy=null;const PS=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>RS)return;const o=t==null?void 0:t.token;uy!==o&&(uy=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function gv(r=D_()){const e=Af(r,"auth");if(e.isInitialized())return e.getImmediate();const t=ZT(r,{popupRedirectResolver:IS,persistence:[OI,TI,uv]}),s=k_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=PS(l.toString());_I(t,h,()=>h(t.currentUser)),yI(t,f=>h(f))}}const o=A_("auth");return o&&tI(t,`http://${o}`),t}function xS(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}HT({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=lr("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",xS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CS("Browser");var cy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ci,yv;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,C){function R(){}R.prototype=C.prototype,x.D=C.prototype,x.prototype=new R,x.prototype.constructor=x,x.C=function(N,V,b){for(var k=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)k[rt-2]=arguments[rt];return C.prototype[V].apply(N,k)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,C,R){R||(R=0);var N=Array(16);if(typeof C=="string")for(var V=0;16>V;++V)N[V]=C.charCodeAt(R++)|C.charCodeAt(R++)<<8|C.charCodeAt(R++)<<16|C.charCodeAt(R++)<<24;else for(V=0;16>V;++V)N[V]=C[R++]|C[R++]<<8|C[R++]<<16|C[R++]<<24;C=x.g[0],R=x.g[1],V=x.g[2];var b=x.g[3],k=C+(b^R&(V^b))+N[0]+3614090360&4294967295;C=R+(k<<7&4294967295|k>>>25),k=b+(V^C&(R^V))+N[1]+3905402710&4294967295,b=C+(k<<12&4294967295|k>>>20),k=V+(R^b&(C^R))+N[2]+606105819&4294967295,V=b+(k<<17&4294967295|k>>>15),k=R+(C^V&(b^C))+N[3]+3250441966&4294967295,R=V+(k<<22&4294967295|k>>>10),k=C+(b^R&(V^b))+N[4]+4118548399&4294967295,C=R+(k<<7&4294967295|k>>>25),k=b+(V^C&(R^V))+N[5]+1200080426&4294967295,b=C+(k<<12&4294967295|k>>>20),k=V+(R^b&(C^R))+N[6]+2821735955&4294967295,V=b+(k<<17&4294967295|k>>>15),k=R+(C^V&(b^C))+N[7]+4249261313&4294967295,R=V+(k<<22&4294967295|k>>>10),k=C+(b^R&(V^b))+N[8]+1770035416&4294967295,C=R+(k<<7&4294967295|k>>>25),k=b+(V^C&(R^V))+N[9]+2336552879&4294967295,b=C+(k<<12&4294967295|k>>>20),k=V+(R^b&(C^R))+N[10]+4294925233&4294967295,V=b+(k<<17&4294967295|k>>>15),k=R+(C^V&(b^C))+N[11]+2304563134&4294967295,R=V+(k<<22&4294967295|k>>>10),k=C+(b^R&(V^b))+N[12]+1804603682&4294967295,C=R+(k<<7&4294967295|k>>>25),k=b+(V^C&(R^V))+N[13]+4254626195&4294967295,b=C+(k<<12&4294967295|k>>>20),k=V+(R^b&(C^R))+N[14]+2792965006&4294967295,V=b+(k<<17&4294967295|k>>>15),k=R+(C^V&(b^C))+N[15]+1236535329&4294967295,R=V+(k<<22&4294967295|k>>>10),k=C+(V^b&(R^V))+N[1]+4129170786&4294967295,C=R+(k<<5&4294967295|k>>>27),k=b+(R^V&(C^R))+N[6]+3225465664&4294967295,b=C+(k<<9&4294967295|k>>>23),k=V+(C^R&(b^C))+N[11]+643717713&4294967295,V=b+(k<<14&4294967295|k>>>18),k=R+(b^C&(V^b))+N[0]+3921069994&4294967295,R=V+(k<<20&4294967295|k>>>12),k=C+(V^b&(R^V))+N[5]+3593408605&4294967295,C=R+(k<<5&4294967295|k>>>27),k=b+(R^V&(C^R))+N[10]+38016083&4294967295,b=C+(k<<9&4294967295|k>>>23),k=V+(C^R&(b^C))+N[15]+3634488961&4294967295,V=b+(k<<14&4294967295|k>>>18),k=R+(b^C&(V^b))+N[4]+3889429448&4294967295,R=V+(k<<20&4294967295|k>>>12),k=C+(V^b&(R^V))+N[9]+568446438&4294967295,C=R+(k<<5&4294967295|k>>>27),k=b+(R^V&(C^R))+N[14]+3275163606&4294967295,b=C+(k<<9&4294967295|k>>>23),k=V+(C^R&(b^C))+N[3]+4107603335&4294967295,V=b+(k<<14&4294967295|k>>>18),k=R+(b^C&(V^b))+N[8]+1163531501&4294967295,R=V+(k<<20&4294967295|k>>>12),k=C+(V^b&(R^V))+N[13]+2850285829&4294967295,C=R+(k<<5&4294967295|k>>>27),k=b+(R^V&(C^R))+N[2]+4243563512&4294967295,b=C+(k<<9&4294967295|k>>>23),k=V+(C^R&(b^C))+N[7]+1735328473&4294967295,V=b+(k<<14&4294967295|k>>>18),k=R+(b^C&(V^b))+N[12]+2368359562&4294967295,R=V+(k<<20&4294967295|k>>>12),k=C+(R^V^b)+N[5]+4294588738&4294967295,C=R+(k<<4&4294967295|k>>>28),k=b+(C^R^V)+N[8]+2272392833&4294967295,b=C+(k<<11&4294967295|k>>>21),k=V+(b^C^R)+N[11]+1839030562&4294967295,V=b+(k<<16&4294967295|k>>>16),k=R+(V^b^C)+N[14]+4259657740&4294967295,R=V+(k<<23&4294967295|k>>>9),k=C+(R^V^b)+N[1]+2763975236&4294967295,C=R+(k<<4&4294967295|k>>>28),k=b+(C^R^V)+N[4]+1272893353&4294967295,b=C+(k<<11&4294967295|k>>>21),k=V+(b^C^R)+N[7]+4139469664&4294967295,V=b+(k<<16&4294967295|k>>>16),k=R+(V^b^C)+N[10]+3200236656&4294967295,R=V+(k<<23&4294967295|k>>>9),k=C+(R^V^b)+N[13]+681279174&4294967295,C=R+(k<<4&4294967295|k>>>28),k=b+(C^R^V)+N[0]+3936430074&4294967295,b=C+(k<<11&4294967295|k>>>21),k=V+(b^C^R)+N[3]+3572445317&4294967295,V=b+(k<<16&4294967295|k>>>16),k=R+(V^b^C)+N[6]+76029189&4294967295,R=V+(k<<23&4294967295|k>>>9),k=C+(R^V^b)+N[9]+3654602809&4294967295,C=R+(k<<4&4294967295|k>>>28),k=b+(C^R^V)+N[12]+3873151461&4294967295,b=C+(k<<11&4294967295|k>>>21),k=V+(b^C^R)+N[15]+530742520&4294967295,V=b+(k<<16&4294967295|k>>>16),k=R+(V^b^C)+N[2]+3299628645&4294967295,R=V+(k<<23&4294967295|k>>>9),k=C+(V^(R|~b))+N[0]+4096336452&4294967295,C=R+(k<<6&4294967295|k>>>26),k=b+(R^(C|~V))+N[7]+1126891415&4294967295,b=C+(k<<10&4294967295|k>>>22),k=V+(C^(b|~R))+N[14]+2878612391&4294967295,V=b+(k<<15&4294967295|k>>>17),k=R+(b^(V|~C))+N[5]+4237533241&4294967295,R=V+(k<<21&4294967295|k>>>11),k=C+(V^(R|~b))+N[12]+1700485571&4294967295,C=R+(k<<6&4294967295|k>>>26),k=b+(R^(C|~V))+N[3]+2399980690&4294967295,b=C+(k<<10&4294967295|k>>>22),k=V+(C^(b|~R))+N[10]+4293915773&4294967295,V=b+(k<<15&4294967295|k>>>17),k=R+(b^(V|~C))+N[1]+2240044497&4294967295,R=V+(k<<21&4294967295|k>>>11),k=C+(V^(R|~b))+N[8]+1873313359&4294967295,C=R+(k<<6&4294967295|k>>>26),k=b+(R^(C|~V))+N[15]+4264355552&4294967295,b=C+(k<<10&4294967295|k>>>22),k=V+(C^(b|~R))+N[6]+2734768916&4294967295,V=b+(k<<15&4294967295|k>>>17),k=R+(b^(V|~C))+N[13]+1309151649&4294967295,R=V+(k<<21&4294967295|k>>>11),k=C+(V^(R|~b))+N[4]+4149444226&4294967295,C=R+(k<<6&4294967295|k>>>26),k=b+(R^(C|~V))+N[11]+3174756917&4294967295,b=C+(k<<10&4294967295|k>>>22),k=V+(C^(b|~R))+N[2]+718787259&4294967295,V=b+(k<<15&4294967295|k>>>17),k=R+(b^(V|~C))+N[9]+3951481745&4294967295,x.g[0]=x.g[0]+C&4294967295,x.g[1]=x.g[1]+(V+(k<<21&4294967295|k>>>11))&4294967295,x.g[2]=x.g[2]+V&4294967295,x.g[3]=x.g[3]+b&4294967295}s.prototype.u=function(x,C){C===void 0&&(C=x.length);for(var R=C-this.blockSize,N=this.B,V=this.h,b=0;b<C;){if(V==0)for(;b<=R;)o(this,x,b),b+=this.blockSize;if(typeof x=="string"){for(;b<C;)if(N[V++]=x.charCodeAt(b++),V==this.blockSize){o(this,N),V=0;break}}else for(;b<C;)if(N[V++]=x[b++],V==this.blockSize){o(this,N),V=0;break}}this.h=V,this.o+=C},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var C=1;C<x.length-8;++C)x[C]=0;var R=8*this.o;for(C=x.length-8;C<x.length;++C)x[C]=R&255,R/=256;for(this.u(x),x=Array(16),C=R=0;4>C;++C)for(var N=0;32>N;N+=8)x[R++]=this.g[C]>>>N&255;return x};function l(x,C){var R=f;return Object.prototype.hasOwnProperty.call(R,x)?R[x]:R[x]=C(x)}function h(x,C){this.h=C;for(var R=[],N=!0,V=x.length-1;0<=V;V--){var b=x[V]|0;N&&b==C||(R[V]=b,N=!1)}this.g=R}var f={};function g(x){return-128<=x&&128>x?l(x,function(C){return new h([C|0],0>C?-1:0)}):new h([x|0],0>x?-1:0)}function v(x){if(isNaN(x)||!isFinite(x))return I;if(0>x)return B(v(-x));for(var C=[],R=1,N=0;x>=R;N++)C[N]=x/R|0,R*=4294967296;return new h(C,0)}function w(x,C){if(x.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(x.charAt(0)=="-")return B(w(x.substring(1),C));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=v(Math.pow(C,8)),N=I,V=0;V<x.length;V+=8){var b=Math.min(8,x.length-V),k=parseInt(x.substring(V,V+b),C);8>b?(b=v(Math.pow(C,b)),N=N.j(b).add(v(k))):(N=N.j(R),N=N.add(v(k)))}return N}var I=g(0),A=g(1),U=g(16777216);r=h.prototype,r.m=function(){if(j(this))return-B(this).m();for(var x=0,C=1,R=0;R<this.g.length;R++){var N=this.i(R);x+=(0<=N?N:4294967296+N)*C,C*=4294967296}return x},r.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(q(this))return"0";if(j(this))return"-"+B(this).toString(x);for(var C=v(Math.pow(x,6)),R=this,N="";;){var V=Te(R,C).g;R=Z(R,V.j(C));var b=((0<R.g.length?R.g[0]:R.h)>>>0).toString(x);if(R=V,q(R))return b+N;for(;6>b.length;)b="0"+b;N=b+N}},r.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function q(x){if(x.h!=0)return!1;for(var C=0;C<x.g.length;C++)if(x.g[C]!=0)return!1;return!0}function j(x){return x.h==-1}r.l=function(x){return x=Z(this,x),j(x)?-1:q(x)?0:1};function B(x){for(var C=x.g.length,R=[],N=0;N<C;N++)R[N]=~x.g[N];return new h(R,~x.h).add(A)}r.abs=function(){return j(this)?B(this):this},r.add=function(x){for(var C=Math.max(this.g.length,x.g.length),R=[],N=0,V=0;V<=C;V++){var b=N+(this.i(V)&65535)+(x.i(V)&65535),k=(b>>>16)+(this.i(V)>>>16)+(x.i(V)>>>16);N=k>>>16,b&=65535,k&=65535,R[V]=k<<16|b}return new h(R,R[R.length-1]&-2147483648?-1:0)};function Z(x,C){return x.add(B(C))}r.j=function(x){if(q(this)||q(x))return I;if(j(this))return j(x)?B(this).j(B(x)):B(B(this).j(x));if(j(x))return B(this.j(B(x)));if(0>this.l(U)&&0>x.l(U))return v(this.m()*x.m());for(var C=this.g.length+x.g.length,R=[],N=0;N<2*C;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var V=0;V<x.g.length;V++){var b=this.i(N)>>>16,k=this.i(N)&65535,rt=x.i(V)>>>16,Ot=x.i(V)&65535;R[2*N+2*V]+=k*Ot,te(R,2*N+2*V),R[2*N+2*V+1]+=b*Ot,te(R,2*N+2*V+1),R[2*N+2*V+1]+=k*rt,te(R,2*N+2*V+1),R[2*N+2*V+2]+=b*rt,te(R,2*N+2*V+2)}for(N=0;N<C;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=C;N<2*C;N++)R[N]=0;return new h(R,0)};function te(x,C){for(;(x[C]&65535)!=x[C];)x[C+1]+=x[C]>>>16,x[C]&=65535,C++}function fe(x,C){this.g=x,this.h=C}function Te(x,C){if(q(C))throw Error("division by zero");if(q(x))return new fe(I,I);if(j(x))return C=Te(B(x),C),new fe(B(C.g),B(C.h));if(j(C))return C=Te(x,B(C)),new fe(B(C.g),C.h);if(30<x.g.length){if(j(x)||j(C))throw Error("slowDivide_ only works with positive integers.");for(var R=A,N=C;0>=N.l(x);)R=ue(R),N=ue(N);var V=ye(R,1),b=ye(N,1);for(N=ye(N,2),R=ye(R,2);!q(N);){var k=b.add(N);0>=k.l(x)&&(V=V.add(R),b=k),N=ye(N,1),R=ye(R,1)}return C=Z(x,V.j(C)),new fe(V,C)}for(V=I;0<=x.l(C);){for(R=Math.max(1,Math.floor(x.m()/C.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),b=v(R),k=b.j(C);j(k)||0<k.l(x);)R-=N,b=v(R),k=b.j(C);q(b)&&(b=A),V=V.add(b),x=Z(x,k)}return new fe(V,x)}r.A=function(x){return Te(this,x).h},r.and=function(x){for(var C=Math.max(this.g.length,x.g.length),R=[],N=0;N<C;N++)R[N]=this.i(N)&x.i(N);return new h(R,this.h&x.h)},r.or=function(x){for(var C=Math.max(this.g.length,x.g.length),R=[],N=0;N<C;N++)R[N]=this.i(N)|x.i(N);return new h(R,this.h|x.h)},r.xor=function(x){for(var C=Math.max(this.g.length,x.g.length),R=[],N=0;N<C;N++)R[N]=this.i(N)^x.i(N);return new h(R,this.h^x.h)};function ue(x){for(var C=x.g.length+1,R=[],N=0;N<C;N++)R[N]=x.i(N)<<1|x.i(N-1)>>>31;return new h(R,x.h)}function ye(x,C){var R=C>>5;C%=32;for(var N=x.g.length-R,V=[],b=0;b<N;b++)V[b]=0<C?x.i(b+R)>>>C|x.i(b+R+1)<<32-C:x.i(b+R);return new h(V,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,yv=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,Ci=h}).apply(typeof cy<"u"?cy:typeof self<"u"?self:typeof window<"u"?window:{});var Ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _v,Qa,vv,rc,tf,Ev,wv,Tv;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,_){return u==Array.prototype||u==Object.prototype||(u[p]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ku=="object"&&Ku];for(var p=0;p<u.length;++p){var _=u[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var _=s;u=u.split(".");for(var T=0;T<u.length-1;T++){var M=u[T];if(!(M in _))break e;_=_[M]}u=u[u.length-1],T=_[u],p=p(T),p!=T&&p!=null&&e(_,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var _=0,T=!1,M={next:function(){if(!T&&_<u.length){var $=_++;return{value:p($,u[$]),done:!1}}return T=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function v(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function w(u,p,_){return u.call.apply(u.bind,arguments)}function I(u,p,_){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,T),u.apply(p,M)}}return function(){return u.apply(p,arguments)}}function A(u,p,_){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:I,A.apply(null,arguments)}function U(u,p){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function q(u,p){function _(){}_.prototype=p.prototype,u.aa=p.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(T,M,$){for(var J=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)J[Ue-2]=arguments[Ue];return p.prototype[M].apply(T,J)}}function j(u){const p=u.length;if(0<p){const _=Array(p);for(let T=0;T<p;T++)_[T]=u[T];return _}return[]}function B(u,p){for(let _=1;_<arguments.length;_++){const T=arguments[_];if(g(T)){const M=u.length||0,$=T.length||0;u.length=M+$;for(let J=0;J<$;J++)u[M+J]=T[J]}else u.push(T)}}class Z{constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function te(u){return/^[\s\xa0]*$/.test(u)}function fe(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function Te(u){return Te[" "](u),u}Te[" "]=function(){};var ue=fe().indexOf("Gecko")!=-1&&!(fe().toLowerCase().indexOf("webkit")!=-1&&fe().indexOf("Edge")==-1)&&!(fe().indexOf("Trident")!=-1||fe().indexOf("MSIE")!=-1)&&fe().indexOf("Edge")==-1;function ye(u,p,_){for(const T in u)p.call(_,u[T],T,u)}function x(u,p){for(const _ in u)p.call(void 0,u[_],_,u)}function C(u){const p={};for(const _ in u)p[_]=u[_];return p}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,p){let _,T;for(let M=1;M<arguments.length;M++){T=arguments[M];for(_ in T)u[_]=T[_];for(let $=0;$<R.length;$++)_=R[$],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function V(u){var p=1;u=u.split(":");const _=[];for(;0<p&&u.length;)_.push(u.shift()),p--;return u.length&&_.push(u.join(":")),_}function b(u){f.setTimeout(()=>{throw u},0)}function k(){var u=pe;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class rt{constructor(){this.h=this.g=null}add(p,_){const T=Ot.get();T.set(p,_),this.h?this.h.next=T:this.g=T,this.h=T}}var Ot=new Z(()=>new bt,u=>u.reset());class bt{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,ee=!1,pe=new rt,se=()=>{const u=f.Promise.resolve(void 0);ze=()=>{u.then(O)}};var O=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(_){b(_)}var p=Ot;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}ee=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Ae=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};f.addEventListener("test",_,p),f.removeEventListener("test",_,p)}catch{}return u}();function ke(u,p){if(he.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(ue){e:{try{Te(p.nodeName);var M=!0;break e}catch{}M=!1}M||(p=null)}}else _=="mouseover"?p=u.fromElement:_=="mouseout"&&(p=u.toElement);this.relatedTarget=p,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&ke.aa.h.call(this)}}q(ke,he);var De={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),je=0;function qe(u,p,_,T,M){this.listener=u,this.proxy=null,this.src=p,this.type=_,this.capture=!!T,this.ha=M,this.key=++je,this.da=this.fa=!1}function wt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function mr(u){this.src=u,this.g={},this.h=0}mr.prototype.add=function(u,p,_,T,M){var $=u.toString();u=this.g[$],u||(u=this.g[$]=[],this.h++);var J=qr(u,p,T,M);return-1<J?(p=u[J],_||(p.fa=!1)):(p=new qe(p,this.src,$,!!T,M),p.fa=_,u.push(p)),p};function Ns(u,p){var _=p.type;if(_ in u.g){var T=u.g[_],M=Array.prototype.indexOf.call(T,p,void 0),$;($=0<=M)&&Array.prototype.splice.call(T,M,1),$&&(wt(p),u.g[_].length==0&&(delete u.g[_],u.h--))}}function qr(u,p,_,T){for(var M=0;M<u.length;++M){var $=u[M];if(!$.da&&$.listener==p&&$.capture==!!_&&$.ha==T)return M}return-1}var Bi="closure_lm_"+(1e6*Math.random()|0),Ds={};function Xo(u,p,_,T,M){if(Array.isArray(p)){for(var $=0;$<p.length;$++)Xo(u,p[$],_,T,M);return null}return _=ea(_),u&&u[Le]?u.K(p,_,v(T)?!!T.capture:!1,M):Jo(u,p,_,!1,T,M)}function Jo(u,p,_,T,M,$){if(!p)throw Error("Invalid event type");var J=v(M)?!!M.capture:!!M,Ue=Os(u);if(Ue||(u[Bi]=Ue=new mr(u)),_=Ue.add(p,_,T,J,$),_.proxy)return _;if(T=Nl(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)Ae||(M=J),M===void 0&&(M=!1),u.addEventListener(p.toString(),T,M);else if(u.attachEvent)u.attachEvent(yr(p.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Nl(){function u(_){return p.call(u.src,u.listener,_)}const p=Zo;return u}function Vs(u,p,_,T,M){if(Array.isArray(p))for(var $=0;$<p.length;$++)Vs(u,p[$],_,T,M);else T=v(T)?!!T.capture:!!T,_=ea(_),u&&u[Le]?(u=u.i,p=String(p).toString(),p in u.g&&($=u.g[p],_=qr($,_,T,M),-1<_&&(wt($[_]),Array.prototype.splice.call($,_,1),$.length==0&&(delete u.g[p],u.h--)))):u&&(u=Os(u))&&(p=u.g[p.toString()],u=-1,p&&(u=qr(p,_,T,M)),(_=-1<u?p[u]:null)&&gr(_))}function gr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Le])Ns(p.i,u);else{var _=u.type,T=u.proxy;p.removeEventListener?p.removeEventListener(_,T,u.capture):p.detachEvent?p.detachEvent(yr(_),T):p.addListener&&p.removeListener&&p.removeListener(T),(_=Os(p))?(Ns(_,u),_.h==0&&(_.src=null,p[Bi]=null)):wt(u)}}}function yr(u){return u in Ds?Ds[u]:Ds[u]="on"+u}function Zo(u,p){if(u.da)u=!0;else{p=new ke(p,this);var _=u.listener,T=u.ha||u.src;u.fa&&gr(u),u=_.call(T,p)}return u}function Os(u){return u=u[Bi],u instanceof mr?u:null}var bs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ea(u){return typeof u=="function"?u:(u[bs]||(u[bs]=function(p){return u.handleEvent(p)}),u[bs])}function pt(){G.call(this),this.i=new mr(this),this.M=this,this.F=null}q(pt,G),pt.prototype[Le]=!0,pt.prototype.removeEventListener=function(u,p,_,T){Vs(this,u,p,_,T)};function mt(u,p){var _,T=u.F;if(T)for(_=[];T;T=T.F)_.push(T);if(u=u.M,T=p.type||p,typeof p=="string")p=new he(p,u);else if(p instanceof he)p.target=p.target||u;else{var M=p;p=new he(T,u),N(p,M)}if(M=!0,_)for(var $=_.length-1;0<=$;$--){var J=p.g=_[$];M=_r(J,T,!0,p)&&M}if(J=p.g=u,M=_r(J,T,!0,p)&&M,M=_r(J,T,!1,p)&&M,_)for($=0;$<_.length;$++)J=p.g=_[$],M=_r(J,T,!1,p)&&M}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var _=u.g[p],T=0;T<_.length;T++)wt(_[T]);delete u.g[p],u.h--}}this.F=null},pt.prototype.K=function(u,p,_,T){return this.i.add(String(u),p,!1,_,T)},pt.prototype.L=function(u,p,_,T){return this.i.add(String(u),p,!0,_,T)};function _r(u,p,_,T){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var M=!0,$=0;$<p.length;++$){var J=p[$];if(J&&!J.da&&J.capture==_){var Ue=J.listener,gt=J.ha||J.src;J.fa&&Ns(u.i,J),M=Ue.call(gt,T)!==!1&&M}}return M&&!T.defaultPrevented}function ta(u,p,_){if(typeof u=="function")_&&(u=A(u,_));else if(u&&typeof u.handleEvent=="function")u=A(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function Hr(u){u.g=ta(()=>{u.g=null,u.i&&(u.i=!1,Hr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class $i extends G{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Hr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qi(u){G.call(this),this.h=u,this.g={}}q(qi,G);var na=[];function ra(u){ye(u.g,function(p,_){this.g.hasOwnProperty(_)&&gr(p)},u),u.g={}}qi.prototype.N=function(){qi.aa.N.call(this),ra(this)},qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ia=f.JSON.stringify,sa=f.JSON.parse,oa=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Hi(){}Hi.prototype.h=null;function Ms(u){return u.h||(u.h=u.i())}function Ls(){}var gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qn(){he.call(this,"d")}q(Qn,he);function js(){he.call(this,"c")}q(js,he);var Yn={},aa=null;function Wi(){return aa=aa||new pt}Yn.La="serverreachability";function la(u){he.call(this,Yn.La,u)}q(la,he);function vr(u){const p=Wi();mt(p,new la(p))}Yn.STAT_EVENT="statevent";function ua(u,p){he.call(this,Yn.STAT_EVENT,u),this.stat=p}q(ua,he);function ot(u){const p=Wi();mt(p,new ua(p,u))}Yn.Ma="timingevent";function Fs(u,p){he.call(this,Yn.Ma,u),this.size=p}q(Fs,he);function Pn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Gi(){this.g=!0}Gi.prototype.xa=function(){this.g=!1};function Ki(u,p,_,T,M,$){u.info(function(){if(u.g)if($)for(var J="",Ue=$.split("&"),gt=0;gt<Ue.length;gt++){var Ve=Ue[gt].split("=");if(1<Ve.length){var Tt=Ve[0];Ve=Ve[1];var ut=Tt.split("_");J=2<=ut.length&&ut[1]=="type"?J+(Tt+"="+Ve+"&"):J+(Tt+"=redacted&")}}else J=null;else J=$;return"XMLHTTP REQ ("+T+") [attempt "+M+"]: "+p+`
`+_+`
`+J})}function Us(u,p,_,T,M,$,J){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+M+"]: "+p+`
`+_+`
`+$+" "+J})}function xn(u,p,_,T){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+rh(u,_)+(T?" "+T:"")})}function ca(u,p){u.info(function(){return"TIMEOUT: "+p})}Gi.prototype.info=function(){};function rh(u,p){if(!u.g)return p;if(!p)return null;try{var _=JSON.parse(p);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var T=_[u];if(!(2>T.length)){var M=T[1];if(Array.isArray(M)&&!(1>M.length)){var $=M[0];if($!="noop"&&$!="stop"&&$!="close")for(var J=1;J<M.length;J++)M[J]=""}}}}return ia(_)}catch{return p}}var zs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Dl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nn;function Qi(){}q(Qi,Hi),Qi.prototype.g=function(){return new XMLHttpRequest},Qi.prototype.i=function(){return{}},Nn=new Qi;function Dn(u,p,_,T){this.j=u,this.i=p,this.l=_,this.R=T||1,this.U=new qi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vl}function Vl(){this.i=null,this.g="",this.h=!1}var ha={},Bs={};function $s(u,p,_){u.L=1,u.v=Yr(on(p)),u.m=_,u.P=!0,da(u,null)}function da(u,p){u.F=Date.now(),He(u),u.A=on(u.v);var _=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),Jr(_.i,"t",T),u.C=0,_=u.j.J,u.h=new Vl,u.g=Xl(u.j,_?p:null,!u.m),0<u.O&&(u.M=new $i(A(u.Y,u,u.g),u.O)),p=u.U,_=u.g,T=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(na[0]=M.toString()),M=na);for(var $=0;$<M.length;$++){var J=Xo(_,M[$],T||p.handleEvent,!1,p.h||p);if(!J)break;p.g[J.key]=J}p=u.H?C(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),vr(),Ki(u.i,u.u,u.A,u.l,u.R,u.m)}Dn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Qt(u)==3?p.j():this.Y(u)},Dn.prototype.Y=function(u){try{if(u==this.g)e:{const ut=Qt(this.g);var p=this.g.Ba();const vn=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||_a(this.g)))){this.J||ut!=4||p==7||(p==8||0>=vn?vr(3):vr(2)),Yi(this);var _=this.g.Z();this.X=_;t:if(Ol(this)){var T=_a(this.g);u="";var M=T.length,$=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yn(this),Wr(this);var J="";break t}this.h.i=new f.TextDecoder}for(p=0;p<M;p++)this.h.h=!0,u+=this.h.i.decode(T[p],{stream:!($&&p==M-1)});T.length=0,this.h.g+=u,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=_==200,Us(this.i,this.u,this.A,this.l,this.R,ut,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,gt=this.g;if((Ue=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(Ue)){var Ve=Ue;break t}}Ve=null}if(_=Ve)xn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fa(this,_);else{this.o=!1,this.s=3,ot(12),yn(this),Wr(this);break e}}if(this.P){_=!0;let ln;for(;!this.J&&this.C<J.length;)if(ln=ih(this,J),ln==Bs){ut==4&&(this.s=4,ot(14),_=!1),xn(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==ha){this.s=4,ot(15),xn(this.i,this.l,J,"[Invalid Chunk]"),_=!1;break}else xn(this.i,this.l,ln,null),fa(this,ln);if(Ol(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||J.length!=0||this.h.h||(this.s=1,ot(16),_=!1),this.o=this.o&&_,!_)xn(this.i,this.l,J,"[Invalid Chunked Response]"),yn(this),Wr(this);else if(0<J.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),Ea(Tt),Tt.M=!0,ot(11))}}else xn(this.i,this.l,J,null),fa(this,J);ut==4&&yn(this),this.o&&!this.J&&(ut==4?eo(this.j,this):(this.o=!1,He(this)))}else Qs(this.g),_==400&&0<J.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),yn(this),Wr(this)}}}catch{}finally{}};function Ol(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function ih(u,p){var _=u.C,T=p.indexOf(`
`,_);return T==-1?Bs:(_=Number(p.substring(_,T)),isNaN(_)?ha:(T+=1,T+_>p.length?Bs:(p=p.slice(T,T+_),u.C=T+_,p)))}Dn.prototype.cancel=function(){this.J=!0,yn(this)};function He(u){u.S=Date.now()+u.I,bl(u,u.I)}function bl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Pn(A(u.ba,u),p)}function Yi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Dn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ca(this.i,this.A),this.L!=2&&(vr(),ot(17)),yn(this),this.s=2,Wr(this)):bl(this,this.S-u)};function Wr(u){u.j.G==0||u.J||eo(u.j,u)}function yn(u){Yi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,ra(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function fa(u,p){try{var _=u.j;if(_.G!=0&&(_.g==u||qt(_.h,u))){if(!u.K&&qt(_.h,u)&&_.G==3){try{var T=_.Da.g.parse(p)}catch{T=null}if(Array.isArray(T)&&T.length==3){var M=T;if(M[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Zs(_),Ln(_);else break e;Js(_),ot(18)}}else _.za=M[1],0<_.za-_.T&&37500>M[2]&&_.F&&_.v==0&&!_.C&&(_.C=Pn(A(_.Za,_),6e3));if(1>=Ll(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Sr(_,11)}else if((u.K||_.g==u)&&Zs(_),!te(p))for(M=_.Da.g.parse(p),p=0;p<M.length;p++){let Ve=M[p];if(_.T=Ve[0],Ve=Ve[1],_.G==2)if(Ve[0]=="c"){_.K=Ve[1],_.ia=Ve[2];const Tt=Ve[3];Tt!=null&&(_.la=Tt,_.j.info("VER="+_.la));const ut=Ve[4];ut!=null&&(_.Aa=ut,_.j.info("SVER="+_.Aa));const vn=Ve[5];vn!=null&&typeof vn=="number"&&0<vn&&(T=1.5*vn,_.L=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const ln=u.g;if(ln){const rs=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(rs){var $=T.h;$.g||rs.indexOf("spdy")==-1&&rs.indexOf("quic")==-1&&rs.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(pa($,$.h),$.h=null))}if(T.D){const no=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;no&&(T.ya=no,$e(T.I,T.D,no))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),T=_;var J=u;if(T.qa=Yl(T,T.J?T.ia:null,T.W),J.K){jl(T.h,J);var Ue=J,gt=T.L;gt&&(Ue.I=gt),Ue.B&&(Yi(Ue),He(Ue)),T.g=J}else ns(T);0<_.i.length&&er(_)}else Ve[0]!="stop"&&Ve[0]!="close"||Sr(_,7);else _.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?Sr(_,7):Rt(_):Ve[0]!="noop"&&_.l&&_.l.ta(Ve),_.v=0)}}vr(4)}catch{}}var Ml=class{constructor(u,p){this.g=u,this.map=p}};function Xi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ll(u){return u.h?1:u.g?u.g.size:0}function qt(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function pa(u,p){u.g?u.g.add(p):u.h=p}function jl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Xi.prototype.cancel=function(){if(this.i=Fl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Fl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const _ of u.g.values())p=p.concat(_.D);return p}return j(u.i)}function qs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],_=u.length,T=0;T<_;T++)p.push(u[T]);return p}p=[],_=0;for(T in u)p[_++]=u[T];return p}function Hs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var _=0;_<u;_++)p.push(_);return p}p=[],_=0;for(const T in u)p[_++]=T;return p}}}function Gr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var _=Hs(u),T=qs(u),M=T.length,$=0;$<M;$++)p.call(void 0,T[$],_&&_[$],u)}var Ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sh(u,p){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var T=u[_].indexOf("="),M=null;if(0<=T){var $=u[_].substring(0,T);M=u[_].substring(T+1)}else $=u[_];p($,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Er(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Er){this.h=u.h,Zi(this,u.j),this.o=u.o,this.g=u.g,Kr(this,u.s),this.l=u.l;var p=u.i,_=new Xn;_.i=p.i,p.g&&(_.g=new Map(p.g),_.h=p.h),Qr(this,_),this.m=u.m}else u&&(p=String(u).match(Ji))?(this.h=!1,Zi(this,p[1]||"",!0),this.o=Ne(p[2]||""),this.g=Ne(p[3]||"",!0),Kr(this,p[4]),this.l=Ne(p[5]||"",!0),Qr(this,p[6]||"",!0),this.m=Ne(p[7]||"")):(this.h=!1,this.i=new Xn(null,this.h))}Er.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Xr(p,Ws,!0),":");var _=this.g;return(_||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Xr(p,Ws,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Xr(_,_.charAt(0)=="/"?Bl:zl,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Xr(_,ma)),u.join("")};function on(u){return new Er(u)}function Zi(u,p,_){u.j=_?Ne(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Kr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Qr(u,p,_){p instanceof Xn?(u.i=p,Jn(u.i,u.h)):(_||(p=Xr(p,$l)),u.i=new Xn(p,u.h))}function $e(u,p,_){u.i.set(p,_)}function Yr(u){return $e(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Xr(u,p,_){return typeof u=="string"?(u=encodeURI(u).replace(p,Ul),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Ul(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ws=/[#\/\?@]/g,zl=/[#\?:]/g,Bl=/[#\?]/g,$l=/[#\?@]/g,ma=/#/g;function Xn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function kt(u){u.g||(u.g=new Map,u.h=0,u.i&&sh(u.i,function(p,_){u.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}r=Xn.prototype,r.add=function(u,p){kt(this),this.i=null,u=_n(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(p),this.h+=1,this};function Vn(u,p){kt(u),p=_n(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function On(u,p){return kt(u),p=_n(u,p),u.g.has(p)}r.forEach=function(u,p){kt(this),this.g.forEach(function(_,T){_.forEach(function(M){u.call(p,M,T,this)},this)},this)},r.na=function(){kt(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),_=[];for(let T=0;T<p.length;T++){const M=u[T];for(let $=0;$<M.length;$++)_.push(p[T])}return _},r.V=function(u){kt(this);let p=[];if(typeof u=="string")On(this,u)&&(p=p.concat(this.g.get(_n(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)p=p.concat(u[_])}return p},r.set=function(u,p){return kt(this),this.i=null,u=_n(this,u),On(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Jr(u,p,_){Vn(u,p),0<_.length&&(u.i=null,u.g.set(_n(u,p),j(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var _=0;_<p.length;_++){var T=p[_];const $=encodeURIComponent(String(T)),J=this.V(T);for(T=0;T<J.length;T++){var M=$;J[T]!==""&&(M+="="+encodeURIComponent(String(J[T]))),u.push(M)}}return this.i=u.join("&")};function _n(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Jn(u,p){p&&!u.j&&(kt(u),u.i=null,u.g.forEach(function(_,T){var M=T.toLowerCase();T!=M&&(Vn(this,T),Jr(this,M,_))},u)),u.j=p}function oh(u,p){const _=new Gi;if(f.Image){const T=new Image;T.onload=U(Kt,_,"TestLoadImage: loaded",!0,p,T),T.onerror=U(Kt,_,"TestLoadImage: error",!1,p,T),T.onabort=U(Kt,_,"TestLoadImage: abort",!1,p,T),T.ontimeout=U(Kt,_,"TestLoadImage: timeout",!1,p,T),f.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else p(!1)}function ql(u,p){const _=new Gi,T=new AbortController,M=setTimeout(()=>{T.abort(),Kt(_,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:T.signal}).then($=>{clearTimeout(M),$.ok?Kt(_,"TestPingServer: ok",!0,p):Kt(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Kt(_,"TestPingServer: error",!1,p)})}function Kt(u,p,_,T,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),T(_)}catch{}}function ah(){this.g=new oa}function Hl(u,p,_){const T=_||"";try{Gr(u,function(M,$){let J=M;v(M)&&(J=ia(M)),p.push(T+$+"="+encodeURIComponent(J))})}catch(M){throw p.push(T+"type="+encodeURIComponent("_badmap")),M}}function wr(u){this.l=u.Ub||null,this.j=u.eb||!1}q(wr,Hi),wr.prototype.g=function(){return new es(this.l,this.j)},wr.prototype.i=function(u){return function(){return u}}({});function es(u,p){pt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}q(es,pt),r=es.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Mn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Mn(this)),this.g&&(this.readyState=3,Mn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?bn(this):Mn(this),this.readyState==3&&Wl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,bn(this))},r.Qa=function(u){this.g&&(this.response=u,bn(this))},r.ga=function(){this.g&&bn(this)};function bn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Mn(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=p.next();return u.join(`\r
`)};function Mn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(es.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Tr(u){let p="";return ye(u,function(_,T){p+=T,p+=":",p+=_,p+=`\r
`}),p}function Zr(u,p,_){e:{for(T in _){var T=!1;break e}T=!0}T||(_=Tr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):$e(u,p,_))}function Je(u){pt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}q(Je,pt);var lh=/^https?$/i,ga=["POST","PUT"];r=Je.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nn.g(),this.v=this.o?Ms(this.o):Ms(Nn),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch($){ts(this,$);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var M in T)_.set(M,T[M]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const $ of T.keys())_.set($,T.get($));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),M=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ga,p,void 0))||T||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,J]of _)this.g.setRequestHeader($,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ks(this),this.u=!0,this.g.send(u),this.u=!1}catch($){ts(this,$)}};function ts(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Gs(u),an(u)}function Gs(u){u.A||(u.A=!0,mt(u,"complete"),mt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,mt(this,"complete"),mt(this,"abort"),an(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),an(this,!0)),Je.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ya(this):this.bb())},r.bb=function(){ya(this)};function ya(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Qt(u)!=4||u.Z()!=2)){if(u.u&&Qt(u)==4)ta(u.Ea,0,u);else if(mt(u,"readystatechange"),Qt(u)==4){u.h=!1;try{const J=u.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var _;if(!(_=p)){var T;if(T=J===0){var M=String(u.D).match(Ji)[1]||null;!M&&f.self&&f.self.location&&(M=f.self.location.protocol.slice(0,-1)),T=!lh.test(M?M.toLowerCase():"")}_=T}if(_)mt(u,"complete"),mt(u,"success");else{u.m=6;try{var $=2<Qt(u)?u.g.statusText:""}catch{$=""}u.l=$+" ["+u.Z()+"]",Gs(u)}}finally{an(u)}}}}function an(u,p){if(u.g){Ks(u);const _=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||mt(u,"ready");try{_.onreadystatechange=T}catch{}}}function Ks(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Qt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),sa(p)}};function _a(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Qs(u){const p={};u=(u.g&&2<=Qt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(te(u[T]))continue;var _=V(u[T]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=p[M]||[];p[M]=$,$.push(_)}x(p,function(T){return T.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zn(u,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||p}function va(u){this.Aa=0,this.i=[],this.j=new Gi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zn("baseRetryDelayMs",5e3,u),this.cb=Zn("retryDelaySeedMs",1e4,u),this.Wa=Zn("forwardChannelMaxRetries",2,u),this.wa=Zn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Xi(u&&u.concurrentRequestLimit),this.Da=new ah,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=va.prototype,r.la=8,r.G=1,r.connect=function(u,p,_,T){ot(0),this.W=u,this.H=p||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.I=Yl(this,null,this.W),er(this)};function Rt(u){if(Ys(u),u.G==3){var p=u.U++,_=on(u.I);if($e(_,"SID",u.K),$e(_,"RID",p),$e(_,"TYPE","terminate"),Ir(u,_),p=new Dn(u,u.j,p),p.L=2,p.v=Yr(on(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!_&&f.Image&&(new Image().src=p.v,_=!0),_||(p.g=Xl(p.j,null),p.g.ea(p.v)),p.F=Date.now(),He(p)}Ql(u)}function Ln(u){u.g&&(Ea(u),u.g.cancel(),u.g=null)}function Ys(u){Ln(u),u.u&&(f.clearTimeout(u.u),u.u=null),Zs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function er(u){if(!sn(u.h)&&!u.s){u.s=!0;var p=u.Ga;ze||se(),ee||(ze(),ee=!0),pe.add(p,u),u.B=0}}function uh(u,p){return Ll(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Pn(A(u.Ga,u,p),Kl(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new Dn(this,this.j,u);let $=this.o;if(this.S&&($?($=C($),N($,this.S)):$=this.S),this.m!==null||this.O||(M.H=$,$=null),this.P)e:{for(var p=0,_=0;_<this.i.length;_++){t:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(p+=T,4096<p){p=_;break e}if(p===4096||_===this.i.length-1){p=_+1;break e}}p=1e3}else p=1e3;p=ei(this,M,p),_=on(this.I),$e(_,"RID",u),$e(_,"CVER",22),this.D&&$e(_,"X-HTTP-Session-Id",this.D),Ir(this,_),$&&(this.O?p="headers="+encodeURIComponent(String(Tr($)))+"&"+p:this.m&&Zr(_,this.m,$)),pa(this.h,M),this.Ua&&$e(_,"TYPE","init"),this.P?($e(_,"$req",p),$e(_,"SID","null"),M.T=!0,$s(M,_,null)):$s(M,_,p),this.G=2}}else this.G==3&&(u?Xs(this,u):this.i.length==0||sn(this.h)||Xs(this))};function Xs(u,p){var _;p?_=p.l:_=u.U++;const T=on(u.I);$e(T,"SID",u.K),$e(T,"RID",_),$e(T,"AID",u.T),Ir(u,T),u.m&&u.o&&Zr(T,u.m,u.o),_=new Dn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),p&&(u.i=p.D.concat(u.i)),p=ei(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),pa(u.h,_),$s(_,T,p)}function Ir(u,p){u.H&&ye(u.H,function(_,T){$e(p,T,_)}),u.l&&Gr({},function(_,T){$e(p,T,_)})}function ei(u,p,_){_=Math.min(u.i.length,_);var T=u.l?A(u.l.Na,u.l,u):null;e:{var M=u.i;let $=-1;for(;;){const J=["count="+_];$==-1?0<_?($=M[0].g,J.push("ofs="+$)):$=0:J.push("ofs="+$);let Ue=!0;for(let gt=0;gt<_;gt++){let Ve=M[gt].g;const Tt=M[gt].map;if(Ve-=$,0>Ve)$=Math.max(0,M[gt].g-100),Ue=!1;else try{Hl(Tt,J,"req"+Ve+"_")}catch{T&&T(Tt)}}if(Ue){T=J.join("&");break e}}}return u=u.i.splice(0,_),p.D=u,T}function ns(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;ze||se(),ee||(ze(),ee=!0),pe.add(p,u),u.v=0}}function Js(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Pn(A(u.Fa,u),Kl(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Gl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Pn(A(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),Ln(this),Gl(this))};function Ea(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Gl(u){u.g=new Dn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=on(u.qa);$e(p,"RID","rpc"),$e(p,"SID",u.K),$e(p,"AID",u.T),$e(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&$e(p,"TO",u.ja),$e(p,"TYPE","xmlhttp"),Ir(u,p),u.m&&u.o&&Zr(p,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Yr(on(p)),_.m=null,_.P=!0,da(_,u)}r.Za=function(){this.C!=null&&(this.C=null,Ln(this),Js(this),ot(19))};function Zs(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function eo(u,p){var _=null;if(u.g==p){Zs(u),Ea(u),u.g=null;var T=2}else if(qt(u.h,p))_=p.D,jl(u.h,p),T=1;else return;if(u.G!=0){if(p.o)if(T==1){_=p.m?p.m.length:0,p=Date.now()-p.F;var M=u.B;T=Wi(),mt(T,new Fs(T,_)),er(u)}else ns(u);else if(M=p.s,M==3||M==0&&0<p.X||!(T==1&&uh(u,p)||T==2&&Js(u)))switch(_&&0<_.length&&(p=u.h,p.i=p.i.concat(_)),M){case 1:Sr(u,5);break;case 4:Sr(u,10);break;case 3:Sr(u,6);break;default:Sr(u,2)}}}function Kl(u,p){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*p}function Sr(u,p){if(u.j.info("Error code "+p),p==2){var _=A(u.fb,u),T=u.Xa;const M=!T;T=new Er(T||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Zi(T,"https"),Yr(T),M?oh(T.toString(),_):ql(T.toString(),_)}else ot(2);u.G=0,u.l&&u.l.sa(p),Ql(u),Ys(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Ql(u){if(u.G=0,u.ka=[],u.l){const p=Fl(u.h);(p.length!=0||u.i.length!=0)&&(B(u.ka,p),B(u.ka,u.i),u.h.i.length=0,j(u.i),u.i.length=0),u.l.ra()}}function Yl(u,p,_){var T=_ instanceof Er?on(_):new Er(_);if(T.g!="")p&&(T.g=p+"."+T.g),Kr(T,T.s);else{var M=f.location;T=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;var $=new Er(null);T&&Zi($,T),p&&($.g=p),M&&Kr($,M),_&&($.l=_),T=$}return _=u.D,p=u.ya,_&&p&&$e(T,_,p),$e(T,"VER",u.la),Ir(u,T),T}function Xl(u,p,_){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Je(new wr({eb:_})):new Je(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function wa(){}r=wa.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function to(){}to.prototype.g=function(u,p){return new Ht(u,p)};function Ht(u,p){pt.call(this),this.g=new va(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!te(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!te(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new tr(this)}q(Ht,pt),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Rt(this.g)},Ht.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=ia(u),u=_);p.i.push(new Ml(p.Ya++,u)),p.G==3&&er(p)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Rt(this.g),delete this.g,Ht.aa.N.call(this)};function Jl(u){Qn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const _ in p){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}q(Jl,Qn);function Zl(){js.call(this),this.status=1}q(Zl,js);function tr(u){this.g=u}q(tr,wa),tr.prototype.ua=function(){mt(this.g,"a")},tr.prototype.ta=function(u){mt(this.g,new Jl(u))},tr.prototype.sa=function(u){mt(this.g,new Zl)},tr.prototype.ra=function(){mt(this.g,"b")},to.prototype.createWebChannel=to.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,Tv=function(){return new to},wv=function(){return Wi()},Ev=Yn,tf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zs.NO_ERROR=0,zs.TIMEOUT=8,zs.HTTP_ERROR=6,rc=zs,Dl.COMPLETE="complete",vv=Dl,Ls.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",pt.prototype.listen=pt.prototype.K,Qa=Ls,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,_v=Je}).apply(typeof Ku<"u"?Ku:typeof self<"u"?self:typeof window<"u"?window:{});const hy="@firebase/firestore",dy="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ho="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new If("@firebase/firestore");function So(){return Ss.logLevel}function ie(r,...e){if(Ss.logLevel<=Pe.DEBUG){const t=e.map(Mf);Ss.debug(`Firestore (${Ho}): ${r}`,...t)}}function Fr(r,...e){if(Ss.logLevel<=Pe.ERROR){const t=e.map(Mf);Ss.error(`Firestore (${Ho}): ${r}`,...t)}}function Pi(r,...e){if(Ss.logLevel<=Pe.WARN){const t=e.map(Mf);Ss.warn(`Firestore (${Ho}): ${r}`,...t)}}function Mf(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Iv(r,s,t)}function Iv(r,e,t){let s=`FIRESTORE (${Ho}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Fr(s),new Error(s)}function Fe(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||Iv(e,o,s)}function Se(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Br{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(zt.UNAUTHENTICATED))}shutdown(){}}class DS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class VS{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new ki;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ki,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=l;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},f=g=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>f(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ki)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new Sv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new zt(e)}}class OS{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class bS{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new OS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Cn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const s=l=>{l.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const o=l=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new fy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new fy(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=LS(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Ce(r,e){return r<e?-1:r>e?1:0}function nf(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Ce(s,o);{const l=Av(),h=jS(l.encode(py(r,t)),l.encode(py(e,t)));return h!==0?h:Ce(s,o)}}t+=s>65535?2:1}return Ce(r.length,e.length)}function py(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function jS(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Ce(r[t],e[t]);return Ce(r.length,e.length)}function Mo(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="__name__";class or{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ee(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ee(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return or.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=or.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ce(e.length,t.length)}static compareSegments(e,t){const s=or.isNumericId(e),o=or.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?or.extractNumericId(e).compare(or.extractNumericId(t)):nf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ci.fromString(e.substring(4,e.length-2))}}class Ge extends or{construct(e,t,s){return new Ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ne(H.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ge(t)}static emptyPath(){return new Ge([])}}const FS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends or{construct(e,t,s){return new Dt(e,t,s)}static isValidIdentifier(e){return FS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===my}static keyField(){return new Dt([my])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ne(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ne(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ne(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(l(),o++)}if(l(),h)throw new ne(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Ge.fromString(e))}static fromName(e){return new de(Ge.fromString(e).popFirst(5))}static empty(){return new de(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(r,e,t){if(!t)throw new ne(H.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function US(r,e,t,s){if(e===!0&&s===!0)throw new ne(H.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function gy(r){if(!de.isDocumentKey(r))throw new ne(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function yy(r){if(de.isDocumentKey(r))throw new ne(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function kv(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Oc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ee(12329,{type:typeof r})}function kn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ne(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Oc(r);throw new ne(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(r,e){const t={typeString:r};return e&&(t.value=e),t}function Sl(r,e){if(!kv(r))throw new ne(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ne(H.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=-62135596800,vy=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*vy);return new Ye(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ne(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ne(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<_y)throw new ne(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vy}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Sl(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-_y;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:ft("string",Ye._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new Ye(0,0))}static max(){return new Ie(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=-1;function zS(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(s===1e9?new Ye(t+1,0):new Ye(t,s));return new xi(o,de.empty(),e)}function BS(r){return new xi(r.readTime,r.key,ul)}class xi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new xi(Ie.min(),de.empty(),ul)}static max(){return new xi(Ie.max(),de.empty(),ul)}}function $S(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(r.documentKey,e.documentKey),t!==0?t:Ce(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(r){if(r.code!==H.FAILED_PRECONDITION||r.message!==qS)throw r;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):W.reject(t)}static resolve(e){return new W((t,s)=>{t(e)})}static reject(e){return new W((t,s)=>{s(e)})}static waitFor(e){return new W((t,s)=>{let o=0,l=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++l,h&&l===o&&t()},g=>s(g))}),h=!0,l===o&&t()})}static or(e){let t=W.resolve(!1);for(const s of e)t=t.next(o=>o?W.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,l)=>{s.push(t.call(this,o,l))}),this.waitFor(s)}static mapArray(e,t){return new W((s,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const v=g;t(e[v]).next(w=>{h[v]=w,++f,f===l&&s(h)},w=>o(w))}})}static doWhile(e,t){return new W((s,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):s()};l()})}}function WS(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Go(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}bc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=-1;function Mc(r){return r==null}function _c(r){return r===0&&1/r==-1/0}function GS(r){return typeof r=="number"&&Number.isInteger(r)&&!_c(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="";function KS(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Ey(e)),e=QS(r.get(t),e);return Ey(e)}function QS(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case Rv:t+="";break;default:t+=l}}return t}function Ey(r){return r+Rv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Fi(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Pv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qu(this.root,e,this.comparator,!0)}}class Qu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Nt.RED,this.left=o??Nt.EMPTY,this.right=l??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Nt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ee(27949);return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee(57766)}get value(){throw Ee(16141)}get color(){throw Ee(16727)}get left(){throw Ee(29726)}get right(){throw Ee(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ty(this.data.getIterator())}getIteratorFrom(e){return new Ty(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class Ty{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new pn([])}unionWith(e){let t=new vt(Dt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new pn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Mo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new xv("Invalid base64 string: "+l):l}}(e);return new Vt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const YS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ni(r){if(Fe(!!r,39018),typeof r=="string"){let e=0;const t=YS.exec(r);if(Fe(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:lt(r.seconds),nanos:lt(r.nanos)}}function lt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Di(r){return typeof r=="string"?Vt.fromBase64String(r):Vt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="server_timestamp",Dv="__type__",Vv="__previous_value__",Ov="__local_write_time__";function Ff(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Dv])===null||t===void 0?void 0:t.stringValue)===Nv}function Lc(r){const e=r.mapValue.fields[Vv];return Ff(e)?Lc(e):e}function cl(r){const e=Ni(r.mapValue.fields[Ov].timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,t,s,o,l,h,f,g,v,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=v,this.isUsingEmulator=w}}const vc="(default)";class hl{constructor(e,t){this.projectId=e,this.database=t||vc}static empty(){return new hl("","")}get isDefaultDatabase(){return this.database===vc}isEqual(e){return e instanceof hl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv="__type__",JS="__max__",Yu={mapValue:{}},Mv="__vector__",Ec="value";function Vi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ff(r)?4:eA(r)?9007199254740991:ZS(r)?10:11:Ee(28295,{value:r})}function pr(r,e){if(r===e)return!0;const t=Vi(r);if(t!==Vi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return cl(r).isEqual(cl(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ni(o.timestampValue),f=Ni(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,l){return Di(o.bytesValue).isEqual(Di(l.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,l){return lt(o.geoPointValue.latitude)===lt(l.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(l.geoPointValue.longitude)}(r,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return lt(o.integerValue)===lt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=lt(o.doubleValue),f=lt(l.doubleValue);return h===f?_c(h)===_c(f):isNaN(h)&&isNaN(f)}return!1}(r,e);case 9:return Mo(r.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(wy(h)!==wy(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!pr(h[g],f[g])))return!1;return!0}(r,e);default:return Ee(52216,{left:r})}}function dl(r,e){return(r.values||[]).find(t=>pr(t,e))!==void 0}function Lo(r,e){if(r===e)return 0;const t=Vi(r),s=Vi(e);if(t!==s)return Ce(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(r.booleanValue,e.booleanValue);case 2:return function(l,h){const f=lt(l.integerValue||l.doubleValue),g=lt(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1}(r,e);case 3:return Iy(r.timestampValue,e.timestampValue);case 4:return Iy(cl(r),cl(e));case 5:return nf(r.stringValue,e.stringValue);case 6:return function(l,h){const f=Di(l),g=Di(h);return f.compareTo(g)}(r.bytesValue,e.bytesValue);case 7:return function(l,h){const f=l.split("/"),g=h.split("/");for(let v=0;v<f.length&&v<g.length;v++){const w=Ce(f[v],g[v]);if(w!==0)return w}return Ce(f.length,g.length)}(r.referenceValue,e.referenceValue);case 8:return function(l,h){const f=Ce(lt(l.latitude),lt(h.latitude));return f!==0?f:Ce(lt(l.longitude),lt(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Sy(r.arrayValue,e.arrayValue);case 10:return function(l,h){var f,g,v,w;const I=l.fields||{},A=h.fields||{},U=(f=I[Ec])===null||f===void 0?void 0:f.arrayValue,q=(g=A[Ec])===null||g===void 0?void 0:g.arrayValue,j=Ce(((v=U==null?void 0:U.values)===null||v===void 0?void 0:v.length)||0,((w=q==null?void 0:q.values)===null||w===void 0?void 0:w.length)||0);return j!==0?j:Sy(U,q)}(r.mapValue,e.mapValue);case 11:return function(l,h){if(l===Yu.mapValue&&h===Yu.mapValue)return 0;if(l===Yu.mapValue)return 1;if(h===Yu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),v=h.fields||{},w=Object.keys(v);g.sort(),w.sort();for(let I=0;I<g.length&&I<w.length;++I){const A=nf(g[I],w[I]);if(A!==0)return A;const U=Lo(f[g[I]],v[w[I]]);if(U!==0)return U}return Ce(g.length,w.length)}(r.mapValue,e.mapValue);default:throw Ee(23264,{le:t})}}function Iy(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ce(r,e);const t=Ni(r),s=Ni(e),o=Ce(t.seconds,s.seconds);return o!==0?o:Ce(t.nanos,s.nanos)}function Sy(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Lo(t[o],s[o]);if(l)return l}return Ce(t.length,s.length)}function jo(r){return rf(r)}function rf(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=Ni(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Di(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return de.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=rf(l);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${rf(t.fields[h])}`;return o+"}"}(r.mapValue):Ee(61005,{value:r})}function ic(r){switch(Vi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Lc(r);return e?16+ic(e):16;case 5:return 2*r.stringValue.length;case 6:return Di(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,l)=>o+ic(l),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Fi(s.fields,(l,h)=>{o+=l.length+ic(h)}),o}(r.mapValue);default:throw Ee(13486,{value:r})}}function Ay(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function sf(r){return!!r&&"integerValue"in r}function Uf(r){return!!r&&"arrayValue"in r}function Cy(r){return!!r&&"nullValue"in r}function ky(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function sc(r){return!!r&&"mapValue"in r}function ZS(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[bv])===null||t===void 0?void 0:t.stringValue)===Mv}function tl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Fi(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=tl(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=tl(r.arrayValue.values[t]);return e}return Object.assign({},r)}function eA(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===JS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!sc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tl(t)}setAll(e){let t=Dt.emptyPath(),s={},o=[];e.forEach((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=tl(h):o.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());sc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];sc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Fi(t,(o,l)=>e[o]=l);for(const o of s)delete e[o]}clone(){return new rn(tl(this.value))}}function Lv(r){const e=[];return Fi(r.fields,(t,s)=>{const o=new Dt([t]);if(sc(s)){const l=Lv(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new pn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,s,o,l,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Bt(e,0,Ie.min(),Ie.min(),Ie.min(),rn.empty(),0)}static newFoundDocument(e,t,s,o){return new Bt(e,1,t,Ie.min(),s,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Ie.min(),Ie.min(),rn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Ie.min(),Ie.min(),rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t){this.position=e,this.inclusive=t}}function Ry(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=Lo(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function Py(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!pr(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,t="asc"){this.field=e,this.dir=t}}function tA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{}class dt extends jv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new rA(e,t,s):t==="array-contains"?new oA(e,s):t==="in"?new aA(e,s):t==="not-in"?new lA(e,s):t==="array-contains-any"?new uA(e,s):new dt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new iA(e,s):new sA(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Lo(t,this.value)):t!==null&&Vi(this.value)===Vi(t)&&this.matchesComparison(Lo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends jv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Kn(e,t)}matches(e){return Fv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Fv(r){return r.op==="and"}function Uv(r){return nA(r)&&Fv(r)}function nA(r){for(const e of r.filters)if(e instanceof Kn)return!1;return!0}function of(r){if(r instanceof dt)return r.field.canonicalString()+r.op.toString()+jo(r.value);if(Uv(r))return r.filters.map(e=>of(e)).join(",");{const e=r.filters.map(t=>of(t)).join(",");return`${r.op}(${e})`}}function zv(r,e){return r instanceof dt?function(s,o){return o instanceof dt&&s.op===o.op&&s.field.isEqual(o.field)&&pr(s.value,o.value)}(r,e):r instanceof Kn?function(s,o){return o instanceof Kn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((l,h,f)=>l&&zv(h,o.filters[f]),!0):!1}(r,e):void Ee(19439)}function Bv(r){return r instanceof dt?function(t){return`${t.field.canonicalString()} ${t.op} ${jo(t.value)}`}(r):r instanceof Kn?function(t){return t.op.toString()+" {"+t.getFilters().map(Bv).join(" ,")+"}"}(r):"Filter"}class rA extends dt{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class iA extends dt{constructor(e,t){super(e,"in",t),this.keys=$v("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class sA extends dt{constructor(e,t){super(e,"not-in",t),this.keys=$v("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function $v(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>de.fromName(s.referenceValue))}class oA extends dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Uf(t)&&dl(t.arrayValue,this.value)}}class aA extends dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&dl(this.value.arrayValue,t)}}class lA extends dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(dl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!dl(this.value.arrayValue,t)}}class uA extends dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Uf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>dl(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,t=null,s=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Pe=null}}function xy(r,e=null,t=[],s=[],o=null,l=null,h=null){return new cA(r,e,t,s,o,l,h)}function zf(r){const e=Se(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>of(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),Mc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>jo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>jo(s)).join(",")),e.Pe=t}return e.Pe}function Bf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!tA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!zv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Py(r.startAt,e.startAt)&&Py(r.endAt,e.endAt)}function af(r){return de.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t=null,s=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function hA(r,e,t,s,o,l,h,f){return new Ko(r,e,t,s,o,l,h,f)}function jc(r){return new Ko(r)}function Ny(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function qv(r){return r.collectionGroup!==null}function nl(r){const e=Se(r);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new vt(Dt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(v=>{v.isInequality()&&(f=f.add(v.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new fl(l,s))}),t.has(Dt.keyField().canonicalString())||e.Te.push(new fl(Dt.keyField(),s))}return e.Te}function cr(r){const e=Se(r);return e.Ie||(e.Ie=dA(e,nl(r))),e.Ie}function dA(r,e){if(r.limitType==="F")return xy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new fl(o.field,l)});const t=r.endAt?new wc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new wc(r.startAt.position,r.startAt.inclusive):null;return xy(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function lf(r,e){const t=r.filters.concat([e]);return new Ko(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Tc(r,e,t){return new Ko(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Fc(r,e){return Bf(cr(r),cr(e))&&r.limitType===e.limitType}function Hv(r){return`${zf(cr(r))}|lt:${r.limitType}`}function Ao(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>Bv(o)).join(", ")}]`),Mc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>jo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>jo(o)).join(",")),`Target(${s})`}(cr(r))}; limitType=${r.limitType})`}function Uc(r,e){return e.isFoundDocument()&&function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):de.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(r,e)&&function(s,o){for(const l of nl(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,f,g){const v=Ry(h,f,g);return h.inclusive?v<=0:v<0}(s.startAt,nl(s),o)||s.endAt&&!function(h,f,g){const v=Ry(h,f,g);return h.inclusive?v>=0:v>0}(s.endAt,nl(s),o))}(r,e)}function fA(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Wv(r){return(e,t)=>{let s=!1;for(const o of nl(r)){const l=pA(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function pA(r,e,t){const s=r.field.isKeyField()?de.comparator(e.key,t.key):function(l,h,f){const g=h.data.field(l),v=f.data.field(l);return g!==null&&v!==null?Lo(g,v):Ee(42886)}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ee(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Fi(this.inner,(t,s)=>{for(const[o,l]of s)e(o,l)})}isEmpty(){return Pv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=new nt(de.comparator);function Ur(){return mA}const Gv=new nt(de.comparator);function Ya(...r){let e=Gv;for(const t of r)e=e.insert(t.key,t);return e}function Kv(r){let e=Gv;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ys(){return rl()}function Qv(){return rl()}function rl(){return new ks(r=>r.toString(),(r,e)=>r.isEqual(e))}const gA=new nt(de.comparator),yA=new vt(de.comparator);function xe(...r){let e=yA;for(const t of r)e=e.add(t);return e}const _A=new vt(Ce);function vA(){return _A}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_c(e)?"-0":e}}function Yv(r){return{integerValue:""+r}}function EA(r,e){return GS(e)?Yv(e):$f(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this._=void 0}}function wA(r,e,t){return r instanceof pl?function(o,l){const h={fields:{[Dv]:{stringValue:Nv},[Ov]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Ff(l)&&(l=Lc(l)),l&&(h.fields[Vv]=l),{mapValue:h}}(t,e):r instanceof ml?Jv(r,e):r instanceof gl?Zv(r,e):function(o,l){const h=Xv(o,l),f=Dy(h)+Dy(o.Ee);return sf(h)&&sf(o.Ee)?Yv(f):$f(o.serializer,f)}(r,e)}function TA(r,e,t){return r instanceof ml?Jv(r,e):r instanceof gl?Zv(r,e):t}function Xv(r,e){return r instanceof Ic?function(s){return sf(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class pl extends zc{}class ml extends zc{constructor(e){super(),this.elements=e}}function Jv(r,e){const t=e0(e);for(const s of r.elements)t.some(o=>pr(o,s))||t.push(s);return{arrayValue:{values:t}}}class gl extends zc{constructor(e){super(),this.elements=e}}function Zv(r,e){let t=e0(e);for(const s of r.elements)t=t.filter(o=>!pr(o,s));return{arrayValue:{values:t}}}class Ic extends zc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Dy(r){return lt(r.integerValue||r.doubleValue)}function e0(r){return Uf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,t){this.field=e,this.transform=t}}function SA(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof ml&&o instanceof ml||s instanceof gl&&o instanceof gl?Mo(s.elements,o.elements,pr):s instanceof Ic&&o instanceof Ic?pr(s.Ee,o.Ee):s instanceof pl&&o instanceof pl}(r.transform,e.transform)}class AA{constructor(e,t){this.version=e,this.transformResults=t}}class Rn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Rn}static exists(e){return new Rn(void 0,e)}static updateTime(e){return new Rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Bc{}function t0(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new qf(r.key,Rn.none()):new Al(r.key,r.data,Rn.none());{const t=r.data,s=rn.empty();let o=new vt(Dt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Ui(r.key,s,new pn(o.toArray()),Rn.none())}}function CA(r,e,t){r instanceof Al?function(o,l,h){const f=o.value.clone(),g=Oy(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(r,e,t):r instanceof Ui?function(o,l,h){if(!oc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=Oy(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(n0(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(r,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function il(r,e,t,s){return r instanceof Al?function(l,h,f,g){if(!oc(l.precondition,h))return f;const v=l.value.clone(),w=by(l.fieldTransforms,g,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(r,e,t,s):r instanceof Ui?function(l,h,f,g){if(!oc(l.precondition,h))return f;const v=by(l.fieldTransforms,g,h),w=h.data;return w.setAll(n0(l)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(I=>I.field))}(r,e,t,s):function(l,h,f){return oc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(r,e,t)}function kA(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=Xv(s.transform,o||null);l!=null&&(t===null&&(t=rn.empty()),t.set(s.field,l))}return t||null}function Vy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Mo(s,o,(l,h)=>SA(l,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Al extends Bc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ui extends Bc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function n0(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function Oy(r,e,t){const s=new Map;Fe(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);s.set(l.field,TA(h,f,t[o]))}return s}function by(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,wA(l,h,e))}return s}class qf extends Bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RA extends Bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&CA(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=il(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=il(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Qv();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=t0(h,f);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ie.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),xe())}isEqual(e){return this.batchId===e.batchId&&Mo(this.mutations,e.mutations,(t,s)=>Vy(t,s))&&Mo(this.baseMutations,e.baseMutations,(t,s)=>Vy(t,s))}}class Hf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=function(){return gA}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new Hf(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,Oe;function DA(r){switch(r){case H.OK:return Ee(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return Ee(15467,{code:r})}}function r0(r){if(r===void 0)return Fr("GRPC error has no .code"),H.UNKNOWN;switch(r){case ht.OK:return H.OK;case ht.CANCELLED:return H.CANCELLED;case ht.UNKNOWN:return H.UNKNOWN;case ht.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case ht.INTERNAL:return H.INTERNAL;case ht.UNAVAILABLE:return H.UNAVAILABLE;case ht.UNAUTHENTICATED:return H.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case ht.NOT_FOUND:return H.NOT_FOUND;case ht.ALREADY_EXISTS:return H.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return H.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case ht.ABORTED:return H.ABORTED;case ht.OUT_OF_RANGE:return H.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return H.UNIMPLEMENTED;case ht.DATA_LOSS:return H.DATA_LOSS;default:return Ee(39323,{code:r})}}(Oe=ht||(ht={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=new Ci([4294967295,4294967295],0);function My(r){const e=Av().encode(r),t=new yv;return t.update(e),new Uint8Array(t.digest())}function Ly(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ci([t,s],0),new Ci([o,l],0)]}class Wf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Xa(`Invalid padding: ${t}`);if(s<0)throw new Xa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Xa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Xa(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ci.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(Ci.fromNumber(s)));return o.compare(VA)===1&&(o=new Ci([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=My(e),[s,o]=Ly(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Wf(l,o,t);return s.forEach(f=>h.insert(f)),h}insert(e){if(this.fe===0)return;const t=My(e),[s,o]=Ly(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Xa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Cl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new $c(Ie.min(),o,new nt(Ce),Ur(),xe())}}class Cl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Cl(s,t,xe(),xe(),xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class i0{constructor(e,t){this.targetId=e,this.De=t}}class s0{constructor(e,t,s=Vt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class jy{constructor(){this.ve=0,this.Ce=Fy(),this.Fe=Vt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=xe(),t=xe(),s=xe();return this.Ce.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Ee(38017,{changeType:l})}}),new Cl(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=Fy()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class OA{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ur(),this.je=Xu(),this.Je=Xu(),this.He=new nt(Ce)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:Ee(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((s,o)=>{this.nt(o)&&t(o)})}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const l=o.target;if(af(l))if(s===0){const h=new de(l.path);this.Xe(t,h,Bt.newNoDocument(h,Ie.min()))}else Fe(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const f=this._t(e),g=f?this.ut(f,e,h):1;if(g!==0){this.rt(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,v)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Di(s).toUint8Array()}catch(g){if(g instanceof xv)return Pi("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new Wf(h,o,l)}catch(g){return Pi(g instanceof Xa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.fe===0?null:f}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach(l=>{const h=this.We.lt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)}),o}Pt(e){const t=new Map;this.Ge.forEach((l,h)=>{const f=this.st(h);if(f){if(l.current&&af(f.target)){const g=new de(f.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,Bt.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}});let s=xe();this.Je.forEach((l,h)=>{let f=!0;h.forEachWhile(g=>{const v=this.st(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(s=s.add(l))}),this.ze.forEach((l,h)=>h.setReadTime(e));const o=new $c(e,t,this.He,this.ze,s);return this.ze=Ur(),this.je=Xu(),this.Je=Xu(),this.He=new nt(Ce),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new jy,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new vt(Ce),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new vt(Ce),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new jy),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Xu(){return new nt(de.comparator)}function Fy(){return new nt(de.comparator)}const bA={asc:"ASCENDING",desc:"DESCENDING"},MA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LA={and:"AND",or:"OR"};class jA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function uf(r,e){return r.useProto3Json||Mc(e)?e:{value:e}}function Sc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function o0(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function FA(r,e){return Sc(r,e.toTimestamp())}function hr(r){return Fe(!!r,49232),Ie.fromTimestamp(function(t){const s=Ni(t);return new Ye(s.seconds,s.nanos)}(r))}function Gf(r,e){return cf(r,e).canonicalString()}function cf(r,e){const t=function(o){return new Ge(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function a0(r){const e=Ge.fromString(r);return Fe(d0(e),10190,{key:e.toString()}),e}function hf(r,e){return Gf(r.databaseId,e.path)}function zd(r,e){const t=a0(e);if(t.get(1)!==r.databaseId.projectId)throw new ne(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ne(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new de(u0(t))}function l0(r,e){return Gf(r.databaseId,e)}function UA(r){const e=a0(r);return e.length===4?Ge.emptyPath():u0(e)}function df(r){return new Ge(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function u0(r){return Fe(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Uy(r,e,t){return{name:hf(r,e),fields:t.value.mapValue.fields}}function zA(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:Ee(39313,{state:v})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(v,w){return v.useProto3Json?(Fe(w===void 0||typeof w=="string",58123),Vt.fromBase64String(w||"")):(Fe(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Vt.fromUint8Array(w||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&function(v){const w=v.code===void 0?H.UNKNOWN:r0(v.code);return new ne(w,v.message||"")}(h);t=new s0(s,o,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=zd(r,s.document.name),l=hr(s.document.updateTime),h=s.document.createTime?hr(s.document.createTime):Ie.min(),f=new rn({mapValue:{fields:s.document.fields}}),g=Bt.newFoundDocument(o,l,h,f),v=s.targetIds||[],w=s.removedTargetIds||[];t=new ac(v,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=zd(r,s.document),l=s.readTime?hr(s.readTime):Ie.min(),h=Bt.newNoDocument(o,l),f=s.removedTargetIds||[];t=new ac([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=zd(r,s.document),l=s.removedTargetIds||[];t=new ac([],l,o,null)}else{if(!("filter"in e))return Ee(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new NA(o,l),f=s.targetId;t=new i0(f,h)}}return t}function BA(r,e){let t;if(e instanceof Al)t={update:Uy(r,e.key,e.value)};else if(e instanceof qf)t={delete:hf(r,e.key)};else if(e instanceof Ui)t={update:Uy(r,e.key,e.data),updateMask:XA(e.fieldMask)};else{if(!(e instanceof RA))return Ee(16599,{Rt:e.type});t={verify:hf(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,h){const f=h.transform;if(f instanceof pl)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof ml)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof gl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Ic)return{fieldPath:h.field.canonicalString(),increment:f.Ee};throw Ee(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:FA(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ee(27497)}(r,e.precondition)),t}function $A(r,e){return r&&r.length>0?(Fe(e!==void 0,14353),r.map(t=>function(o,l){let h=o.updateTime?hr(o.updateTime):hr(l);return h.isEqual(Ie.min())&&(h=hr(l)),new AA(h,o.transformResults||[])}(t,e))):[]}function qA(r,e){return{documents:[l0(r,e.path)]}}function HA(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=l0(r,o);const l=function(v){if(v.length!==0)return h0(Kn.create(v,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(v){if(v.length!==0)return v.map(w=>function(A){return{field:Co(A.field),direction:KA(A.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=uf(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{Vt:t,parent:o}}function WA(r){let e=UA(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=function(I){const A=c0(I);return A instanceof Kn&&Uv(A)?A.getFilters():[A]}(t.where));let h=[];t.orderBy&&(h=function(I){return I.map(A=>function(q){return new fl(ko(q.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(q.direction))}(A))}(t.orderBy));let f=null;t.limit&&(f=function(I){let A;return A=typeof I=="object"?I.value:I,Mc(A)?null:A}(t.limit));let g=null;t.startAt&&(g=function(I){const A=!!I.before,U=I.values||[];return new wc(U,A)}(t.startAt));let v=null;return t.endAt&&(v=function(I){const A=!I.before,U=I.values||[];return new wc(U,A)}(t.endAt)),hA(e,o,h,l,f,"F",g,v)}function GA(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function c0(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ko(t.unaryFilter.field);return dt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ko(t.unaryFilter.field);return dt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=ko(t.unaryFilter.field);return dt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ko(t.unaryFilter.field);return dt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ee(61313);default:return Ee(60726)}}(r):r.fieldFilter!==void 0?function(t){return dt.create(ko(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ee(58110);default:return Ee(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Kn.create(t.compositeFilter.filters.map(s=>c0(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee(1026)}}(t.compositeFilter.op))}(r):Ee(30097,{filter:r})}function KA(r){return bA[r]}function QA(r){return MA[r]}function YA(r){return LA[r]}function Co(r){return{fieldPath:r.canonicalString()}}function ko(r){return Dt.fromServerFormat(r.fieldPath)}function h0(r){return r instanceof dt?function(t){if(t.op==="=="){if(ky(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NAN"}};if(Cy(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ky(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NOT_NAN"}};if(Cy(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Co(t.field),op:QA(t.op),value:t.value}}}(r):r instanceof Kn?function(t){const s=t.getFilters().map(o=>h0(o));return s.length===1?s[0]:{compositeFilter:{op:YA(t.op),filters:s}}}(r):Ee(54877,{filter:r})}function XA(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function d0(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t,s,o,l=Ie.min(),h=Ie.min(),f=Vt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new Ti(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this.gt=e}}function ZA(r){const e=WA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Tc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(){this.Dn=new tC}addToCollectionParentIndex(e,t){return this.Dn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(xi.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(xi.min())}updateCollectionGroup(e,t,s){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class tC{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new vt(Ge.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new vt(Ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},f0=41943040;class nn{static withCacheSize(e){return new nn(e,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(f0,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Fo(0)}static ur(){return new Fo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="LruGarbageCollector",nC=1048576;function $y([r,e],[t,s]){const o=Ce(r,t);return o===0?Ce(e,s):o}class rC{constructor(e){this.Tr=e,this.buffer=new vt($y),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();$y(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iC{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ie(By,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Go(t)?ie(By,"Ignoring IndexedDB error during garbage collection: ",t):await Wo(t)}await this.Rr(3e5)})}}class sC{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return W.resolve(bc.ue);const s=new rC(t);return this.Vr.forEachTarget(e,o=>s.Er(o.sequenceNumber)).next(()=>this.Vr.gr(e,o=>s.Er(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(zy)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zy):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,l,h,f,g,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,h=Date.now(),this.nthSequenceNumber(e,o))).next(I=>(s=I,f=Date.now(),this.removeTargets(e,s,t))).next(I=>(l=I,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(I=>(v=Date.now(),So()<=Pe.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${I} documents in `+(v-g)+`ms
Total Duration: ${v-w}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:I})))}}function oC(r,e){return new sC(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(){this.changes=new ks(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?W.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&il(s.mutation,o,pn.empty(),Ye.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,xe()).next(()=>s))}getLocalViewOfDocuments(e,t,s=xe()){const o=ys();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(l=>{let h=Ya();return l.forEach((f,g)=>{h=h.insert(f,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=ys();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,xe()))}populateOverlays(e,t,s){const o=[];return s.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,f)=>{t.set(h,f)})})}computeViews(e,t,s,o){let l=Ur();const h=rl(),f=function(){return rl()}();return t.forEach((g,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof Ui)?l=l.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),il(w.mutation,v,w.mutation.getFieldMask(),Ye.now())):h.set(v.key,pn.empty())}),this.recalculateAndSaveOverlays(e,l).next(g=>(g.forEach((v,w)=>h.set(v,w)),t.forEach((v,w)=>{var I;return f.set(v,new lC(w,(I=h.get(v))!==null&&I!==void 0?I:null))}),f))}recalculateAndSaveOverlays(e,t){const s=rl();let o=new nt((h,f)=>h-f),l=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const f of h)f.keys().forEach(g=>{const v=t.get(g);if(v===null)return;let w=s.get(g)||pn.empty();w=f.applyToLocalView(v,w),s.set(g,w);const I=(o.get(f.batchId)||xe()).add(g);o=o.insert(f.batchId,I)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),v=g.key,w=g.value,I=Qv();w.forEach(A=>{if(!l.has(A)){const U=t0(t.get(A),s.get(A));U!==null&&I.set(A,U),l=l.add(A)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,I))}return W.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):qv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):W.resolve(ys());let f=ul,g=l;return h.next(v=>W.forEach(v,(w,I)=>(f<I.largestBatchId&&(f=I.largestBatchId),l.get(w)?W.resolve():this.remoteDocumentCache.getEntry(e,w).next(A=>{g=g.insert(w,A)}))).next(()=>this.populateOverlays(e,v,l)).next(()=>this.computeViews(e,g,v,xe())).next(w=>({batchId:f,changes:Kv(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next(s=>{let o=Ya();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Ya();return this.indexManager.getCollectionParents(e,l).next(f=>W.forEach(f,g=>{const v=function(I,A){return new Ko(A,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(w=>{w.forEach((I,A)=>{h=h.insert(I,A)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o))).next(h=>{l.forEach((g,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,Bt.newInvalidDocument(w)))});let f=Ya();return h.forEach((g,v)=>{const w=l.get(g);w!==void 0&&il(w.mutation,v,pn.empty(),Ye.now()),Uc(t,v)&&(f=f.insert(g,v))}),f})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return W.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(o){return{id:o.id,version:o.version,createTime:hr(o.createTime)}}(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(o){return{name:o.name,query:ZA(o.bundledQuery),readTime:hr(o.readTime)}}(t)),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(){this.overlays=new nt(de.comparator),this.kr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ys();return W.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&s.set(o,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,l)=>{this.wt(e,t,l)}),W.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.kr.delete(s)),W.resolve()}getOverlaysForCollection(e,t,s){const o=ys(),l=t.length+1,h=new de(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new nt((v,w)=>v-w);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=l.get(v.largestBatchId);w===null&&(w=ys(),l=l.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const f=ys(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((v,w)=>f.set(v,w)),!(f.size()>=o)););return W.resolve(f)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new xA(t,s));let l=this.kr.get(t);l===void 0&&(l=xe(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(){this.qr=new vt(Ct.Qr),this.$r=new vt(Ct.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new Ct(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new Ct(e,t))}Gr(e,t){e.forEach(s=>this.removeReference(s,t))}zr(e){const t=new de(new Ge([])),s=new Ct(t,e),o=new Ct(t,e+1),l=[];return this.$r.forEachInRange([s,o],h=>{this.Wr(h),l.push(h.key)}),l}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new de(new Ge([])),s=new Ct(t,e),o=new Ct(t,e+1);let l=xe();return this.$r.forEachInRange([s,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new Ct(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ct{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return de.comparator(e.key,t.key)||Ce(e.Hr,t.Hr)}static Ur(e,t){return Ce(e.Hr,t.Hr)||de.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new vt(Ct.Qr)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new PA(l,t,s,o);this.mutationQueue.push(h);for(const f of o)this.Yr=this.Yr.add(new Ct(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return W.resolve(h)}lookupMutationBatch(e,t){return W.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return W.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?jf:this.er-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ct(t,0),o=new Ct(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,o],h=>{const f=this.Zr(h.Hr);l.push(f)}),W.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new vt(Ce);return t.forEach(o=>{const l=new Ct(o,0),h=new Ct(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],f=>{s=s.add(f.Hr)})}),W.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;de.isDocumentKey(l)||(l=l.child(""));const h=new Ct(new de(l),0);let f=new vt(Ce);return this.Yr.forEachWhile(g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(f=f.add(g.Hr)),!0)},h),W.resolve(this.ei(f))}ei(e){const t=[];return e.forEach(s=>{const o=this.Zr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Fe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return W.forEach(t.mutations,o=>{const l=new Ct(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Yr=s})}rr(e){}containsKey(e,t){const s=new Ct(t,0),o=this.Yr.firstAfterOrEqual(s);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e){this.ni=e,this.docs=function(){return new nt(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return W.resolve(s?s.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let s=Ur();return t.forEach(o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Bt.newInvalidDocument(o))}),W.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Ur();const h=t.path,f=new de(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:v,value:{document:w}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||$S(BS(w),s)<=0||(o.has(w.key)||Uc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return W.resolve(l)}getAllFromCollectionGroup(e,t,s,o){Ee(9500)}ri(e,t){return W.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new mC(this)}getSize(e){return W.resolve(this.size)}}class mC extends aC{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)}),W.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.persistence=e,this.ii=new ks(t=>zf(t),Bf),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.si=0,this.oi=new Kf,this.targetCount=0,this._i=Fo.ar()}forEachTarget(e,t){return this.ii.forEach((s,o)=>t(o)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),W.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Fo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.hr(t),W.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ii.forEach((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),W.waitFor(l).next(()=>o)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return W.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),W.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),W.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return W.resolve(s)}containsKey(e,t){return W.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,t){this.ai={},this.overlays={},this.ui=new bc(0),this.ci=!1,this.ci=!0,this.li=new dC,this.referenceDelegate=e(this),this.hi=new gC(this),this.indexManager=new eC,this.remoteDocumentCache=function(o){return new pC(o)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new JA(t),this.Ti=new cC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new fC(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){ie("MemoryPersistence","Starting transaction:",e);const o=new yC(this.ui.next());return this.referenceDelegate.Ii(),s(o).next(l=>this.referenceDelegate.di(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Ei(e,t){return W.or(Object.values(this.ai).map(s=>()=>s.containsKey(e,t)))}}class yC extends HS{constructor(e){super(),this.currentSequenceNumber=e}}class Qf{constructor(e){this.persistence=e,this.Ai=new Kf,this.Ri=null}static Vi(e){return new Qf(e)}get mi(){if(this.Ri)return this.Ri;throw Ee(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),W.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(o=>this.mi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.mi.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.mi,s=>{const o=de.fromPath(s);return this.fi(e,o).next(l=>{l||t.removeEntry(o,Ie.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return W.or([()=>W.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ac{constructor(e,t){this.persistence=e,this.gi=new ks(s=>KS(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=oC(this,t)}static Vi(e,t){return new Ac(e,t)}Ii(){}di(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}yr(e){let t=0;return this.gr(e,s=>{t++}).next(()=>t)}gr(e,t){return W.forEach(this.gi,(s,o)=>this.Sr(e,s,o).next(l=>l?W.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,h=>this.Sr(e,h,t).next(f=>{f||(s++,l.removeEntry(h,Ie.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),W.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ic(e.data.value)),t}Sr(e,t,s){return W.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return W.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=xe(),o=xe();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Yf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Jw()?8:WS($t())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.ps(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.ys(e,t,o,s).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new _C;return this.ws(e,t,h).next(f=>{if(l.result=f,this.Rs)return this.Ss(e,t,h,f.size)})}).next(()=>l.result)}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(So()<=Pe.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Ao(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),W.resolve()):(So()<=Pe.DEBUG&&ie("QueryEngine","Query:",Ao(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(So()<=Pe.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Ao(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cr(t))):W.resolve())}ps(e,t){if(Ny(t))return W.resolve(null);let s=cr(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Tc(t,null,"F"),s=cr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const h=xe(...l);return this.gs.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,s).next(g=>{const v=this.bs(t,f);return this.Ds(t,v,h,g.readTime)?this.ps(e,Tc(t,null,"F")):this.vs(e,v,t,g)}))})))}ys(e,t,s,o){return Ny(t)||o.isEqual(Ie.min())?W.resolve(null):this.gs.getDocuments(e,s).next(l=>{const h=this.bs(t,l);return this.Ds(t,h,s,o)?W.resolve(null):(So()<=Pe.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ao(t)),this.vs(e,h,t,zS(o,ul)).next(f=>f))})}bs(e,t){let s=new vt(Wv(e));return t.forEach((o,l)=>{Uc(e,l)&&(s=s.add(l))}),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,s){return So()<=Pe.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Ao(t)),this.gs.getDocumentsMatchingQuery(e,t,xi.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="LocalStore",EC=3e8;class wC{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new nt(Ce),this.Ms=new ks(l=>zf(l),Bf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uC(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function TC(r,e,t,s){return new wC(r,e,t,s)}async function m0(r,e){const t=Se(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const h=[],f=[];let g=xe();for(const v of o){h.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}for(const v of l){f.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next(v=>({Bs:v,removedBatchIds:h,addedBatchIds:f}))})})}function IC(r,e){const t=Se(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return function(f,g,v,w){const I=v.batch,A=I.keys();let U=W.resolve();return A.forEach(q=>{U=U.next(()=>w.getEntry(g,q)).next(j=>{const B=v.docVersions.get(q);Fe(B!==null,48541),j.version.compareTo(B)<0&&(I.applyToRemoteDocument(j,v),j.isValidDocument()&&(j.setReadTime(v.commitVersion),w.addEntry(j)))})}),U.next(()=>f.mutationQueue.removeMutationBatch(g,I))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(f){let g=xe();for(let v=0;v<f.mutationResults.length;++v)f.mutationResults[v].transformResults.length>0&&(g=g.add(f.batch.mutations[v].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function g0(r){const e=Se(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function SC(r,e){const t=Se(r),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach((w,I)=>{const A=o.get(I);if(!A)return;f.push(t.hi.removeMatchingKeys(l,w.removedDocuments,I).next(()=>t.hi.addMatchingKeys(l,w.addedDocuments,I)));let U=A.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(I)!==null?U=U.withResumeToken(Vt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):w.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(w.resumeToken,s)),o=o.insert(I,U),function(j,B,Z){return j.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=EC?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0}(A,U,w)&&f.push(t.hi.updateTargetData(l,U))});let g=Ur(),v=xe();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))}),f.push(AC(l,h,e.documentUpdates).next(w=>{g=w.Ls,v=w.ks})),!s.isEqual(Ie.min())){const w=t.hi.getLastRemoteSnapshotVersion(l).next(I=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s));f.push(w)}return W.waitFor(f).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,g,v)).next(()=>g)}).then(l=>(t.Fs=o,l))}function AC(r,e,t){let s=xe(),o=xe();return t.forEach(l=>s=s.add(l)),e.getEntries(r,s).next(l=>{let h=Ur();return t.forEach((f,g)=>{const v=l.get(f);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Ie.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):ie(Xf,"Ignoring outdated watch update for ",f,". Current version:",v.version," Watch version:",g.version)}),{Ls:h,ks:o}})}function CC(r,e){const t=Se(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=jf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function kC(r,e){const t=Se(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.hi.getTargetData(s,e).next(l=>l?(o=l,W.resolve(o)):t.hi.allocateTargetId(s).next(h=>(o=new Ti(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s})}async function ff(r,e,t){const s=Se(r),o=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Go(h))throw h;ie(Xf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function qy(r,e,t){const s=Se(r);let o=Ie.min(),l=xe();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,v,w){const I=Se(g),A=I.Ms.get(w);return A!==void 0?W.resolve(I.Fs.get(A)):I.hi.getTargetData(v,w)}(s,h,cr(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,f.targetId).next(g=>{l=g})}).next(()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:Ie.min(),t?l:xe())).next(f=>(RC(s,fA(e),f),{documents:f,qs:l})))}function RC(r,e,t){let s=r.xs.get(e)||Ie.min();t.forEach((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),r.xs.set(e,s)}class Hy{constructor(){this.activeTargetIds=vA()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class PC{constructor(){this.Fo=new Hy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Hy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="ConnectivityMonitor";class Gy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ie(Wy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ie(Wy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ju=null;function pf(){return Ju===null?Ju=function(){return 268435456+Math.round(2147483648*Math.random())}():Ju++,"0x"+Ju.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="RestConnection",NC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class DC{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===vc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const h=pf(),f=this.Go(e,t.toUriEncodedString());ie(Bd,`Sending RPC '${e}' ${h}:`,f,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:v}=new URL(f),w=Bo(v);return this.jo(e,f,g,s,w).then(I=>(ie(Bd,`Received RPC '${e}' ${h}: `,I),I),I=>{throw Pi(Bd,`RPC '${e}' ${h} failed with error: `,I,"url: ",f,"request:",s),I})}Jo(e,t,s,o,l,h){return this.Wo(e,t,s,o,l)}zo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ho}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,l)=>e[l]=o),s&&s.headers.forEach((o,l)=>e[l]=o)}Go(e,t){const s=NC[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="WebChannelConnection";class OC extends DC{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,l){const h=pf();return new Promise((f,g)=>{const v=new _v;v.setWithCredentials(!0),v.listenOnce(vv.COMPLETE,()=>{try{switch(v.getLastErrorCode()){case rc.NO_ERROR:const I=v.getResponseJson();ie(Ut,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(I)),f(I);break;case rc.TIMEOUT:ie(Ut,`RPC '${e}' ${h} timed out`),g(new ne(H.DEADLINE_EXCEEDED,"Request time out"));break;case rc.HTTP_ERROR:const A=v.getStatus();if(ie(Ut,`RPC '${e}' ${h} failed with status:`,A,"response text:",v.getResponseText()),A>0){let U=v.getResponseJson();Array.isArray(U)&&(U=U[0]);const q=U==null?void 0:U.error;if(q&&q.status&&q.message){const j=function(Z){const te=Z.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(te)>=0?te:H.UNKNOWN}(q.status);g(new ne(j,q.message))}else g(new ne(H.UNKNOWN,"Server responded with status "+v.getStatus()))}else g(new ne(H.UNAVAILABLE,"Connection failed."));break;default:Ee(9055,{c_:e,streamId:h,l_:v.getLastErrorCode(),h_:v.getLastError()})}}finally{ie(Ut,`RPC '${e}' ${h} completed.`)}});const w=JSON.stringify(o);ie(Ut,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",w,s,15)})}P_(e,t,s){const o=pf(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Tv(),f=wv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=l.join("");ie(Ut,`Creating RPC '${e}' stream ${o}: ${w}`,g);const I=h.createWebChannel(w,g);this.T_(I);let A=!1,U=!1;const q=new VC({Ho:B=>{U?ie(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(A||(ie(Ut,`Opening RPC '${e}' stream ${o} transport.`),I.open(),A=!0),ie(Ut,`RPC '${e}' stream ${o} sending:`,B),I.send(B))},Yo:()=>I.close()}),j=(B,Z,te)=>{B.listen(Z,fe=>{try{te(fe)}catch(Te){setTimeout(()=>{throw Te},0)}})};return j(I,Qa.EventType.OPEN,()=>{U||(ie(Ut,`RPC '${e}' stream ${o} transport opened.`),q.s_())}),j(I,Qa.EventType.CLOSE,()=>{U||(U=!0,ie(Ut,`RPC '${e}' stream ${o} transport closed`),q.__(),this.I_(I))}),j(I,Qa.EventType.ERROR,B=>{U||(U=!0,Pi(Ut,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),q.__(new ne(H.UNAVAILABLE,"The operation could not be completed")))}),j(I,Qa.EventType.MESSAGE,B=>{var Z;if(!U){const te=B.data[0];Fe(!!te,16349);const fe=te,Te=(fe==null?void 0:fe.error)||((Z=fe[0])===null||Z===void 0?void 0:Z.error);if(Te){ie(Ut,`RPC '${e}' stream ${o} received error:`,Te);const ue=Te.status;let ye=function(R){const N=ht[R];if(N!==void 0)return r0(N)}(ue),x=Te.message;ye===void 0&&(ye=H.INTERNAL,x="Unknown error status: "+ue+" with message "+Te.message),U=!0,q.__(new ne(ye,x)),I.close()}else ie(Ut,`RPC '${e}' stream ${o} received:`,te),q.a_(te)}}),j(f,Ev.STAT_EVENT,B=>{B.stat===tf.PROXY?ie(Ut,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===tf.NOPROXY&&ie(Ut,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{q.o_()},0),q}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function $d(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(r){return new jA(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="PersistentStream";class _0{constructor(e,t,s,o,l,h,f,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new y0(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Fr(t.toString()),Fr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.b_===t&&this.W_(s,o)},s=>{e(()=>{const o=new ne(H.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)})})}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(o=>{s(()=>this.G_(o))}),this.stream.onMessage(o=>{s(()=>++this.C_==1?this.j_(o):this.onNext(o))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return ie(Ky,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(ie(Ky,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bC extends _0{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=zA(this.serializer,e),s=function(l){if(!("targetChange"in l))return Ie.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ie.min():h.readTime?hr(h.readTime):Ie.min()}(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=df(this.serializer),t.addTarget=function(l,h){let f;const g=h.target;if(f=af(g)?{documents:qA(l,g)}:{query:HA(l,g).Vt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=o0(l,h.resumeToken);const v=uf(l,h.expectedCount);v!==null&&(f.expectedCount=v)}else if(h.snapshotVersion.compareTo(Ie.min())>0){f.readTime=Sc(l,h.snapshotVersion.toTimestamp());const v=uf(l,h.expectedCount);v!==null&&(f.expectedCount=v)}return f}(this.serializer,e);const s=GA(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=df(this.serializer),t.removeTarget=e,this.k_(t)}}class MC extends _0{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=$A(e.writeResults,e.commitTime),s=hr(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=df(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>BA(this.serializer,s))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{}class jC extends LC{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ne(H.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Wo(e,cf(t,s),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ne(H.UNKNOWN,l.toString())})}Jo(e,t,s,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.Jo(e,cf(t,s),o,h,f,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ne(H.UNKNOWN,h.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class FC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Fr(t),this._a=!1):ie("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="RemoteStore";class UC{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo(h=>{s.enqueueAndForget(async()=>{Rs(this)&&(ie(As,"Restarting streams for network reachability change."),await async function(g){const v=Se(g);v.Ia.add(4),await kl(v),v.Aa.set("Unknown"),v.Ia.delete(4),await Hc(v)}(this))})}),this.Aa=new FC(s,o)}}async function Hc(r){if(Rs(r))for(const e of r.da)await e(!0)}async function kl(r){for(const e of r.da)await e(!1)}function v0(r,e){const t=Se(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),tp(t)?ep(t):Qo(t).x_()&&Zf(t,e))}function Jf(r,e){const t=Se(r),s=Qo(t);t.Ta.delete(e),s.x_()&&E0(t,e),t.Ta.size===0&&(s.x_()?s.B_():Rs(t)&&t.Aa.set("Unknown"))}function Zf(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Qo(r).H_(e)}function E0(r,e){r.Ra.$e(e),Qo(r).Y_(e)}function ep(r){r.Ra=new OA({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Qo(r).start(),r.Aa.aa()}function tp(r){return Rs(r)&&!Qo(r).M_()&&r.Ta.size>0}function Rs(r){return Se(r).Ia.size===0}function w0(r){r.Ra=void 0}async function zC(r){r.Aa.set("Online")}async function BC(r){r.Ta.forEach((e,t)=>{Zf(r,e)})}async function $C(r,e){w0(r),tp(r)?(r.Aa.la(e),ep(r)):r.Aa.set("Unknown")}async function qC(r,e,t){if(r.Aa.set("Online"),e instanceof s0&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ta.delete(f),o.Ra.removeTarget(f))}(r,e)}catch(s){ie(As,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Cc(r,s)}else if(e instanceof ac?r.Ra.Ye(e):e instanceof i0?r.Ra.it(e):r.Ra.et(e),!t.isEqual(Ie.min()))try{const s=await g0(r.localStore);t.compareTo(s)>=0&&await function(l,h){const f=l.Ra.Pt(h);return f.targetChanges.forEach((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.Ta.get(v);w&&l.Ta.set(v,w.withResumeToken(g.resumeToken,h))}}),f.targetMismatches.forEach((g,v)=>{const w=l.Ta.get(g);if(!w)return;l.Ta.set(g,w.withResumeToken(Vt.EMPTY_BYTE_STRING,w.snapshotVersion)),E0(l,g);const I=new Ti(w.target,g,v,w.sequenceNumber);Zf(l,I)}),l.remoteSyncer.applyRemoteEvent(f)}(r,t)}catch(s){ie(As,"Failed to raise snapshot:",s),await Cc(r,s)}}async function Cc(r,e,t){if(!Go(e))throw e;r.Ia.add(1),await kl(r),r.Aa.set("Offline"),t||(t=()=>g0(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ie(As,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Hc(r)})}function T0(r,e){return e().catch(t=>Cc(r,t,e))}async function Wc(r){const e=Se(r),t=Oi(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:jf;for(;HC(e);)try{const o=await CC(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,WC(e,o)}catch(o){await Cc(e,o)}I0(e)&&S0(e)}function HC(r){return Rs(r)&&r.Pa.length<10}function WC(r,e){r.Pa.push(e);const t=Oi(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function I0(r){return Rs(r)&&!Oi(r).M_()&&r.Pa.length>0}function S0(r){Oi(r).start()}async function GC(r){Oi(r).na()}async function KC(r){const e=Oi(r);for(const t of r.Pa)e.X_(t.mutations)}async function QC(r,e,t){const s=r.Pa.shift(),o=Hf.from(s,e,t);await T0(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Wc(r)}async function YC(r,e){e&&Oi(r).Z_&&await async function(s,o){if(function(h){return DA(h)&&h!==H.ABORTED}(o.code)){const l=s.Pa.shift();Oi(s).N_(),await T0(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o)),await Wc(s)}}(r,e),I0(r)&&S0(r)}async function Qy(r,e){const t=Se(r);t.asyncQueue.verifyOperationInProgress(),ie(As,"RemoteStore received new credentials");const s=Rs(t);t.Ia.add(3),await kl(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Hc(t)}async function XC(r,e){const t=Se(r);e?(t.Ia.delete(2),await Hc(t)):e||(t.Ia.add(2),await kl(t),t.Aa.set("Unknown"))}function Qo(r){return r.Va||(r.Va=function(t,s,o){const l=Se(t);return l.ia(),new bC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{Zo:zC.bind(null,r),e_:BC.bind(null,r),n_:$C.bind(null,r),J_:qC.bind(null,r)}),r.da.push(async e=>{e?(r.Va.N_(),tp(r)?ep(r):r.Aa.set("Unknown")):(await r.Va.stop(),w0(r))})),r.Va}function Oi(r){return r.ma||(r.ma=function(t,s,o){const l=Se(t);return l.ia(),new MC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:GC.bind(null,r),n_:YC.bind(null,r),ea:KC.bind(null,r),ta:QC.bind(null,r)}),r.da.push(async e=>{e?(r.ma.N_(),await Wc(r)):(await r.ma.stop(),r.Pa.length>0&&(ie(As,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))})),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new ki,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,f=new np(e,t,h,o,l);return f.start(s),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rp(r,e){if(Fr("AsyncQueue",`${e}: ${r}`),Go(r))return new ne(H.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{static emptySet(e){return new Vo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=Ya(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Vo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(){this.fa=new nt(de.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ee(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,s)=>{e.push(s)}),e}}class Uo{constructor(e,t,s,o,l,h,f,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach(f=>{h.push({type:0,doc:f})}),new Uo(e,t,Vo.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class ZC{constructor(){this.queries=Xy(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Se(t),l=o.queries;o.queries=Xy(),l.forEach((h,f)=>{for(const g of f.wa)g.onError(s)})})(this,new ne(H.ABORTED,"Firestore shutting down"))}}function Xy(){return new ks(r=>Hv(r),Fc)}async function A0(r,e){const t=Se(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(s=2):(l=new JC,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=rp(h,`Initialization of query '${Ao(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&ip(t)}async function C0(r,e){const t=Se(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function ek(r,e){const t=Se(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.wa)f.Ca(o)&&(s=!0);h.ya=o}}s&&ip(t)}function tk(r,e,t){const s=Se(r),o=s.queries.get(e);if(o)for(const l of o.wa)l.onError(t);s.queries.delete(e)}function ip(r){r.Da.forEach(e=>{e.next()})}var mf,Jy;(Jy=mf||(mf={})).Fa="default",Jy.Cache="cache";class k0{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Uo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==mf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e){this.key=e}}class P0{constructor(e){this.key=e}}class nk{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=xe(),this.mutatedKeys=xe(),this.Xa=Wv(e),this.eu=new Vo(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new Yy,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,I)=>{const A=o.get(w),U=Uc(this.query,I)?I:null,q=!!A&&this.mutatedKeys.has(A.key),j=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let B=!1;A&&U?A.data.isEqual(U.data)?q!==j&&(s.track({type:3,doc:U}),B=!0):this.iu(A,U)||(s.track({type:2,doc:U}),B=!0,(g&&this.Xa(U,g)>0||v&&this.Xa(U,v)<0)&&(f=!0)):!A&&U?(s.track({type:0,doc:U}),B=!0):A&&!U&&(s.track({type:1,doc:A}),B=!0,(g||v)&&(f=!0)),B&&(U?(h=h.add(U),l=j?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),s.track({type:1,doc:w})}return{eu:h,ru:s,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort((w,I)=>function(U,q){const j=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee(20277,{At:B})}};return j(U)-j(q)}(w.type,I.type)||this.Xa(w.doc,I.doc)),this.su(s),o=o!=null&&o;const f=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,v=g!==this.Ya;return this.Ya=g,h.length!==0||v?{snapshot:new Uo(this.query,e.eu,l,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Yy,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=xe(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});const t=[];return e.forEach(s=>{this.Za.has(s)||t.push(new P0(s))}),this.Za.forEach(s=>{e.has(s)||t.push(new R0(s))}),t}uu(e){this.Ha=e.qs,this.Za=xe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Uo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const sp="SyncEngine";class rk{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class ik{constructor(e){this.key=e,this.lu=!1}}class sk{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new ks(f=>Hv(f),Fc),this.Tu=new Map,this.Iu=new Set,this.du=new nt(de.comparator),this.Eu=new Map,this.Au=new Kf,this.Ru={},this.Vu=new Map,this.mu=Fo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function ok(r,e,t=!0){const s=b0(r);let o;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await x0(s,e,t,!0),o}async function ak(r,e){const t=b0(r);await x0(t,e,!0,!1)}async function x0(r,e,t,s){const o=await kC(r.localStore,cr(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await lk(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&v0(r.remoteStore,o),f}async function lk(r,e,t,s,o){r.gu=(I,A,U)=>async function(j,B,Z,te){let fe=B.view.nu(Z);fe.Ds&&(fe=await qy(j.localStore,B.query,!1).then(({documents:x})=>B.view.nu(x,fe)));const Te=te&&te.targetChanges.get(B.targetId),ue=te&&te.targetMismatches.get(B.targetId)!=null,ye=B.view.applyChanges(fe,j.isPrimaryClient,Te,ue);return e_(j,B.targetId,ye._u),ye.snapshot}(r,I,A,U);const l=await qy(r.localStore,e,!0),h=new nk(e,l.qs),f=h.nu(l.documents),g=Cl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),v=h.applyChanges(f,r.isPrimaryClient,g);e_(r,t,v._u);const w=new rk(e,t,h);return r.Pu.set(e,w),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),v.snapshot}async function uk(r,e,t){const s=Se(r),o=s.Pu.get(e),l=s.Tu.get(o.targetId);if(l.length>1)return s.Tu.set(o.targetId,l.filter(h=>!Fc(h,e))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await ff(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Jf(s.remoteStore,o.targetId),gf(s,o.targetId)}).catch(Wo)):(gf(s,o.targetId),await ff(s.localStore,o.targetId,!0))}async function ck(r,e){const t=Se(r),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Jf(t.remoteStore,s.targetId))}async function hk(r,e,t){const s=_k(r);try{const o=await function(h,f){const g=Se(h),v=Ye.now(),w=f.reduce((U,q)=>U.add(q.key),xe());let I,A;return g.persistence.runTransaction("Locally write mutations","readwrite",U=>{let q=Ur(),j=xe();return g.Os.getEntries(U,w).next(B=>{q=B,q.forEach((Z,te)=>{te.isValidDocument()||(j=j.add(Z))})}).next(()=>g.localDocuments.getOverlayedDocuments(U,q)).next(B=>{I=B;const Z=[];for(const te of f){const fe=kA(te,I.get(te.key).overlayedDocument);fe!=null&&Z.push(new Ui(te.key,fe,Lv(fe.value.mapValue),Rn.exists(!0)))}return g.mutationQueue.addMutationBatch(U,v,Z,f)}).next(B=>{A=B;const Z=B.applyToLocalDocumentSet(I,j);return g.documentOverlayCache.saveOverlays(U,B.batchId,Z)})}).then(()=>({batchId:A.batchId,changes:Kv(I)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,f,g){let v=h.Ru[h.currentUser.toKey()];v||(v=new nt(Ce)),v=v.insert(f,g),h.Ru[h.currentUser.toKey()]=v}(s,o.batchId,t),await Rl(s,o.changes),await Wc(s.remoteStore)}catch(o){const l=rp(o,"Failed to persist write");t.reject(l)}}async function N0(r,e){const t=Se(r);try{const s=await SC(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.Eu.get(l);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Fe(h.lu,14607):o.removedDocuments.size>0&&(Fe(h.lu,42227),h.lu=!1))}),await Rl(t,s,e)}catch(s){await Wo(s)}}function Zy(r,e,t){const s=Se(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const g=Se(h);g.onlineState=f;let v=!1;g.queries.forEach((w,I)=>{for(const A of I.wa)A.va(f)&&(v=!0)}),v&&ip(g)}(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function dk(r,e,t){const s=Se(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),l=o&&o.key;if(l){let h=new nt(de.comparator);h=h.insert(l,Bt.newNoDocument(l,Ie.min()));const f=xe().add(l),g=new $c(Ie.min(),new Map,new nt(Ce),h,f);await N0(s,g),s.du=s.du.remove(l),s.Eu.delete(e),op(s)}else await ff(s.localStore,e,!1).then(()=>gf(s,e,t)).catch(Wo)}async function fk(r,e){const t=Se(r),s=e.batch.batchId;try{const o=await IC(t.localStore,e);V0(t,s,null),D0(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Rl(t,o)}catch(o){await Wo(o)}}async function pk(r,e,t){const s=Se(r);try{const o=await function(h,f){const g=Se(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let w;return g.mutationQueue.lookupMutationBatch(v,f).next(I=>(Fe(I!==null,37113),w=I.keys(),g.mutationQueue.removeMutationBatch(v,I))).next(()=>g.mutationQueue.performConsistencyCheck(v)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(v,w,f)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w)).next(()=>g.localDocuments.getDocuments(v,w))})}(s.localStore,e);V0(s,e,t),D0(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Rl(s,o)}catch(o){await Wo(o)}}function D0(r,e){(r.Vu.get(e)||[]).forEach(t=>{t.resolve()}),r.Vu.delete(e)}function V0(r,e,t){const s=Se(r);let o=s.Ru[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function gf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Tu.get(e))r.Pu.delete(s),t&&r.hu.pu(s,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach(s=>{r.Au.containsKey(s)||O0(r,s)})}function O0(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Jf(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),op(r))}function e_(r,e,t){for(const s of t)s instanceof R0?(r.Au.addReference(s.key,e),mk(r,s)):s instanceof P0?(ie(sp,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,e),r.Au.containsKey(s.key)||O0(r,s.key)):Ee(19791,{yu:s})}function mk(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Iu.has(s)||(ie(sp,"New document in limbo: "+t),r.Iu.add(s),op(r))}function op(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new de(Ge.fromString(e)),s=r.mu.next();r.Eu.set(s,new ik(t)),r.du=r.du.insert(t,s),v0(r.remoteStore,new Ti(cr(jc(t.path)),s,"TargetPurposeLimboResolution",bc.ue))}}async function Rl(r,e,t){const s=Se(r),o=[],l=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach((f,g)=>{h.push(s.gu(g,e,t).then(v=>{var w;if((v||t)&&s.isPrimaryClient){const I=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,I?"current":"not-current")}if(v){o.push(v);const I=Yf.Es(g.targetId,v);l.push(I)}}))}),await Promise.all(h),s.hu.J_(o),await async function(g,v){const w=Se(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>W.forEach(v,A=>W.forEach(A.Is,U=>w.persistence.referenceDelegate.addReference(I,A.targetId,U)).next(()=>W.forEach(A.ds,U=>w.persistence.referenceDelegate.removeReference(I,A.targetId,U)))))}catch(I){if(!Go(I))throw I;ie(Xf,"Failed to update sequence numbers: "+I)}for(const I of v){const A=I.targetId;if(!I.fromCache){const U=w.Fs.get(A),q=U.snapshotVersion,j=U.withLastLimboFreeSnapshotVersion(q);w.Fs=w.Fs.insert(A,j)}}}(s.localStore,l))}async function gk(r,e){const t=Se(r);if(!t.currentUser.isEqual(e)){ie(sp,"User change. New user:",e.toKey());const s=await m0(t.localStore,e);t.currentUser=e,function(l,h){l.Vu.forEach(f=>{f.forEach(g=>{g.reject(new ne(H.CANCELLED,h))})}),l.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Rl(t,s.Bs)}}function yk(r,e){const t=Se(r),s=t.Eu.get(e);if(s&&s.lu)return xe().add(s.key);{let o=xe();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const f=t.Pu.get(h);o=o.unionWith(f.view.tu)}return o}}function b0(r){const e=Se(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=N0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dk.bind(null,e),e.hu.J_=ek.bind(null,e.eventManager),e.hu.pu=tk.bind(null,e.eventManager),e}function _k(r){const e=Se(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pk.bind(null,e),e}class kc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return TC(this.persistence,new vC,e.initialUser,this.serializer)}Du(e){return new p0(Qf.Vi,this.serializer)}bu(e){return new PC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kc.provider={build:()=>new kc};class vk extends kc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Fe(this.persistence.referenceDelegate instanceof Ac,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new iC(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new p0(s=>Ac.Vi(s,t),this.serializer)}}class yf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Zy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=gk.bind(null,this.syncEngine),await XC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ZC}()}createDatastore(e){const t=qc(e.databaseInfo.databaseId),s=function(l){return new OC(l)}(e.databaseInfo);return function(l,h,f,g){return new jC(l,h,f,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,l,h,f){return new UC(s,o,l,h,f)}(this.localStore,this.datastore,e.asyncQueue,t=>Zy(this.syncEngine,t,0),function(){return Gy.C()?new Gy:new xC}())}createSyncEngine(e,t){return function(o,l,h,f,g,v,w){const I=new sk(o,l,h,f,g,v);return w&&(I.fu=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Se(o);ie(As,"RemoteStore shutting down."),l.Ia.add(5),await kl(l),l.Ea.shutdown(),l.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}yf.provider={build:()=>new yf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Fr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="FirestoreClient";class Ek{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=Lf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async h=>{ie(bi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ie(bi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ki;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=rp(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function qd(r,e){r.asyncQueue.verifyOperationInProgress(),ie(bi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await m0(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>{Pi("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then(()=>{ie("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(o=>{Pi("Terminating Firestore due to IndexedDb database deletion failed",o)})}),r._offlineComponents=e}async function t_(r,e){r.asyncQueue.verifyOperationInProgress();const t=await wk(r);ie(bi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>Qy(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>Qy(e.remoteStore,o)),r._onlineComponents=e}async function wk(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ie(bi,"Using user provided OfflineComponentProvider");try{await qd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===H.FAILED_PRECONDITION||o.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Pi("Error using user provided cache. Falling back to memory cache: "+t),await qd(r,new kc)}}else ie(bi,"Using default OfflineComponentProvider"),await qd(r,new vk(void 0));return r._offlineComponents}async function L0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ie(bi,"Using user provided OnlineComponentProvider"),await t_(r,r._uninitializedComponentsProvider._online)):(ie(bi,"Using default OnlineComponentProvider"),await t_(r,new yf))),r._onlineComponents}function Tk(r){return L0(r).then(e=>e.syncEngine)}async function _f(r){const e=await L0(r),t=e.eventManager;return t.onListen=ok.bind(null,e.syncEngine),t.onUnlisten=uk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ak.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ck.bind(null,e.syncEngine),t}function Ik(r,e,t={}){const s=new ki;return r.asyncQueue.enqueueAndForget(async()=>function(l,h,f,g,v){const w=new M0({next:A=>{w.Ou(),h.enqueueAndForget(()=>C0(l,I));const U=A.docs.has(f);!U&&A.fromCache?v.reject(new ne(H.UNAVAILABLE,"Failed to get document because the client is offline.")):U&&A.fromCache&&g&&g.source==="server"?v.reject(new ne(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(A)},error:A=>v.reject(A)}),I=new k0(jc(f.path),w,{includeMetadataChanges:!0,ka:!0});return A0(l,I)}(await _f(r),r.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0="firestore.googleapis.com",r_=!0;class i_{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=F0,this.ssl=r_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:r_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=f0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<nC)throw new ne(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}US("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=j0((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new i_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new i_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new NS;switch(s.type){case"firstParty":return new bS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ne(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=n_.get(t);s&&(ie("ComponentProvider","Removing Datastore"),n_.delete(t),s.terminate())}(this),Promise.resolve()}}function Sk(r,e,t,s={}){var o;r=kn(r,Gc);const l=Bo(e),h=r._getSettings(),f=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;l&&(R_(`https://${g}`),P_("Firestore",!0)),h.host!==F0&&h.host!==g&&Pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:s});if(!Es(v,f)&&(r._setSettings(v),s.mockUserToken)){let w,I;if(typeof s.mockUserToken=="string")w=s.mockUserToken,I=zt.MOCK_USER;else{w=$w(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new ne(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new zt(A)}r._authCredentials=new DS(new Sv(w,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new zi(this.firestore,e,this._query)}}class st{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ri(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}toJSON(){return{type:st._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Sl(t,st._jsonSchema))return new st(e,s||null,new de(Ge.fromString(t.referencePath)))}}st._jsonSchemaVersion="firestore/documentReference/1.0",st._jsonSchema={type:ft("string",st._jsonSchemaVersion),referencePath:ft("string")};class Ri extends zi{constructor(e,t,s){super(e,t,jc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new de(e))}withConverter(e){return new Ri(this.firestore,e,this._path)}}function dn(r,e,...t){if(r=Et(r),Cv("collection","path",e),r instanceof Gc){const s=Ge.fromString(e,...t);return yy(s),new Ri(r,null,s)}{if(!(r instanceof st||r instanceof Ri))throw new ne(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ge.fromString(e,...t));return yy(s),new Ri(r.firestore,null,s)}}function mn(r,e,...t){if(r=Et(r),arguments.length===1&&(e=Lf.newId()),Cv("doc","path",e),r instanceof Gc){const s=Ge.fromString(e,...t);return gy(s),new st(r,null,new de(s))}{if(!(r instanceof st||r instanceof Ri))throw new ne(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ge.fromString(e,...t));return gy(s),new st(r.firestore,r instanceof Ri?r.converter:null,new de(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="AsyncQueue";class o_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new y0(this,"async_queue_retry"),this.oc=()=>{const s=$d();s&&ie(s_,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=$d();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=$d();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new ki;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Go(e))throw e;ie(s_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,Fr("INTERNAL UNHANDLED ERROR: ",a_(s)),s}).then(s=>(this.nc=!1,s))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=np.createAndSchedule(this,e,t,s,l=>this.lc(l));return this.ec.push(o),o}ac(){this.tc&&Ee(47125,{hc:a_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function a_(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(r){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of s)if(l in o&&typeof o[l]=="function")return!0;return!1}(r,["next","error","complete"])}class Mi extends Gc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new o_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new o_(e),this._firestoreClient=void 0,await e}}}function Ak(r,e){const t=typeof r=="object"?r:D_(),s=typeof r=="string"?r:vc,o=Af(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=zw("firestore");l&&Sk(o,...l)}return o}function ap(r){if(r._terminated)throw new ne(H.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Ck(r),r._firestoreClient}function Ck(r){var e,t,s;const o=r._freezeSettings(),l=function(f,g,v,w){return new XS(f,g,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,j0(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new Ek(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fn(Vt.fromBase64String(e))}catch(t){throw new ne(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new fn(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:fn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Sl(e,fn._jsonSchema))return fn.fromBase64String(e.bytes)}}fn._jsonSchemaVersion="firestore/bytes/1.0",fn._jsonSchema={type:ft("string",fn._jsonSchemaVersion),bytes:ft("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ne(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ne(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ne(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:dr._jsonSchemaVersion}}static fromJSON(e){if(Sl(e,dr._jsonSchema))return new dr(e.latitude,e.longitude)}}dr._jsonSchemaVersion="firestore/geoPoint/1.0",dr._jsonSchema={type:ft("string",dr._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:fr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Sl(e,fr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new fr(e.vectorValues);throw new ne(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}fr._jsonSchemaVersion="firestore/vectorValue/1.0",fr._jsonSchema={type:ft("string",fr._jsonSchemaVersion),vectorValues:ft("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=/^__.*__$/;class Rk{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ui(e,this.data,this.fieldMask,t,this.fieldTransforms):new Al(e,this.data,t,this.fieldTransforms)}}class U0{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ui(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function z0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee(40011,{Ec:r})}}class lp{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new lp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Rc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(z0(this.Ec)&&kk.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Pk{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||qc(e)}Dc(e,t,s,o=!1){return new lp({Ec:e,methodName:t,bc:s,path:Dt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yc(r){const e=r._freezeSettings(),t=qc(r._databaseId);return new Pk(r._databaseId,!!e.ignoreUndefinedProperties,t)}function B0(r,e,t,s,o,l={}){const h=r.Dc(l.merge||l.mergeFields?2:0,e,t,o);cp("Data must be an object, but it was:",h,s);const f=$0(s,h);let g,v;if(l.merge)g=new pn(h.fieldMask),v=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const I of l.mergeFields){const A=vf(e,I,t);if(!h.contains(A))throw new ne(H.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);H0(w,A)||w.push(A)}g=new pn(w),v=h.fieldTransforms.filter(I=>g.covers(I.field))}else g=null,v=h.fieldTransforms;return new Rk(new rn(f),g,v)}class Xc extends Qc{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xc}}class up extends Qc{_toFieldTransform(e){return new IA(e.path,new pl)}isEqual(e){return e instanceof up}}function xk(r,e,t,s){const o=r.Dc(1,e,t);cp("Data must be an object, but it was:",o,s);const l=[],h=rn.empty();Fi(s,(g,v)=>{const w=hp(e,g,t);v=Et(v);const I=o.gc(w);if(v instanceof Xc)l.push(w);else{const A=Pl(v,I);A!=null&&(l.push(w),h.set(w,A))}});const f=new pn(l);return new U0(h,f,o.fieldTransforms)}function Nk(r,e,t,s,o,l){const h=r.Dc(1,e,t),f=[vf(e,s,t)],g=[o];if(l.length%2!=0)throw new ne(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<l.length;A+=2)f.push(vf(e,l[A])),g.push(l[A+1]);const v=[],w=rn.empty();for(let A=f.length-1;A>=0;--A)if(!H0(v,f[A])){const U=f[A];let q=g[A];q=Et(q);const j=h.gc(U);if(q instanceof Xc)v.push(U);else{const B=Pl(q,j);B!=null&&(v.push(U),w.set(U,B))}}const I=new pn(v);return new U0(w,I,h.fieldTransforms)}function Dk(r,e,t,s=!1){return Pl(t,r.Dc(s?4:3,e))}function Pl(r,e){if(q0(r=Et(r)))return cp("Unsupported field value:",e,r),$0(r,e);if(r instanceof Qc)return function(s,o){if(!z0(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(s,o){const l=[];let h=0;for(const f of s){let g=Pl(f,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}}(r,e)}return function(s,o){if((s=Et(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return EA(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Ye.fromDate(s);return{timestampValue:Sc(o.serializer,l)}}if(s instanceof Ye){const l=new Ye(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Sc(o.serializer,l)}}if(s instanceof dr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof fn)return{bytesValue:o0(o.serializer,s._byteString)};if(s instanceof st){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Gf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof fr)return function(h,f){return{mapValue:{fields:{[bv]:{stringValue:Mv},[Ec]:{arrayValue:{values:h.toArray().map(v=>{if(typeof v!="number")throw f.wc("VectorValues must only contain numeric values.");return $f(f.serializer,v)})}}}}}}(s,o);throw o.wc(`Unsupported field value: ${Oc(s)}`)}(r,e)}function $0(r,e){const t={};return Pv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fi(r,(s,o)=>{const l=Pl(o,e.Vc(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function q0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ye||r instanceof dr||r instanceof fn||r instanceof st||r instanceof Qc||r instanceof fr)}function cp(r,e,t){if(!q0(t)||!kv(t)){const s=Oc(t);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function vf(r,e,t){if((e=Et(e))instanceof Kc)return e._internalPath;if(typeof e=="string")return hp(r,e);throw Rc("Field path arguments must be of type string or ",r,!1,void 0,t)}const Vk=new RegExp("[~\\*/\\[\\]]");function hp(r,e,t){if(e.search(Vk)>=0)throw Rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Kc(...e.split("."))._internalPath}catch{throw Rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Rc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ne(H.INVALID_ARGUMENT,f+r+g)}function H0(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ok(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Jc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ok extends W0{data(){return super.data()}}function Jc(r,e){return typeof e=="string"?hp(r,e):e instanceof Kc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ne(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dp{}class fp extends dp{}function Ei(r,e,...t){let s=[];e instanceof dp&&s.push(e),s=s.concat(t),function(l){const h=l.filter(g=>g instanceof pp).length,f=l.filter(g=>g instanceof Zc).length;if(h>1||h>0&&f>0)throw new ne(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class Zc extends fp{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Zc(e,t,s)}_apply(e){const t=this._parse(e);return G0(e._query,t),new zi(e.firestore,e.converter,lf(e._query,t))}_parse(e){const t=Yc(e.firestore);return function(l,h,f,g,v,w,I){let A;if(v.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ne(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){c_(I,w);const q=[];for(const j of I)q.push(u_(g,l,j));A={arrayValue:{values:q}}}else A=u_(g,l,I)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||c_(I,w),A=Dk(f,h,I,w==="in"||w==="not-in");return dt.create(v,w,A)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Hd(r,e,t){const s=e,o=Jc("where",r);return Zc._create(o,s,t)}class pp extends dp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new pp(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Kn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let h=o;const f=l.getFlattenedFilters();for(const g of f)G0(h,g),h=lf(h,g)}(e._query,t),new zi(e.firestore,e.converter,lf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class mp extends fp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new mp(e,t)}_apply(e){const t=function(o,l,h){if(o.startAt!==null)throw new ne(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ne(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new fl(l,h)}(e._query,this._field,this._direction);return new zi(e.firestore,e.converter,function(o,l){const h=o.explicitOrderBy.concat([l]);return new Ko(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function Wa(r,e="asc"){const t=e,s=Jc("orderBy",r);return mp._create(s,t)}class gp extends fp{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new gp(e,t,s)}_apply(e){return new zi(e.firestore,e.converter,Tc(e._query,this._limit,this._limitType))}}function Mk(r){return gp._create("limit",r,"F")}function u_(r,e,t){if(typeof(t=Et(t))=="string"){if(t==="")throw new ne(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qv(e)&&t.indexOf("/")!==-1)throw new ne(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ge.fromString(t));if(!de.isDocumentKey(s))throw new ne(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ay(r,new de(s))}if(t instanceof st)return Ay(r,t._key);throw new ne(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oc(t)}.`)}function c_(r,e){if(!Array.isArray(r)||r.length===0)throw new ne(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function G0(r,e){const t=function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ne(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Lk{convertValue(e,t="none"){switch(Vi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Fi(e,(o,l)=>{s[o]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Ec].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>lt(h.doubleValue));return new fr(l)}convertGeoPoint(e){return new dr(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Lc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(cl(e));default:return null}}convertTimestamp(e){const t=Ni(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ge.fromString(e);Fe(d0(s),9688,{name:e});const o=new hl(s.get(1),s.get(3)),l=new de(s.popFirst(5));return o.isEqual(t)||Fr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(r,e,t){let s;return s=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,s}class Ja{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _s extends W0{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Jc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=_s._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}_s._jsonSchemaVersion="firestore/documentSnapshot/1.0",_s._jsonSchema={type:ft("string",_s._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class lc extends _s{data(e={}){return super.data(e)}}class Oo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ja(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new lc(this._firestore,this._userDataWriter,s.key,s,new Ja(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ne(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(f=>{const g=new lc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ja(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(f=>l||f.type!==3).map(f=>{const g=new lc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ja(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return f.type!==0&&(v=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),w=h.indexOf(f.doc.key)),{type:jk(f.type),doc:g,oldIndex:v,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Oo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Lf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach(l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function jk(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(r){r=kn(r,st);const e=kn(r.firestore,Mi);return Ik(ap(e),r._key).then(t=>X0(e,r,t))}Oo._jsonSchemaVersion="firestore/querySnapshot/1.0",Oo._jsonSchema={type:ft("string",Oo._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};class Q0 extends Lk{constructor(e){super(),this.firestore=e}convertBytes(e){return new fn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,t)}}function Y0(r,e,t){r=kn(r,st);const s=kn(r.firestore,Mi),o=K0(r.converter,e,t);return th(s,[B0(Yc(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,Rn.none())])}function eh(r,e,t,...s){r=kn(r,st);const o=kn(r.firestore,Mi),l=Yc(o);let h;return h=typeof(e=Et(e))=="string"||e instanceof Kc?Nk(l,"updateDoc",r._key,e,t,s):xk(l,"updateDoc",r._key,e),th(o,[h.toMutation(r._key,Rn.exists(!0))])}function _p(r){return th(kn(r.firestore,Mi),[new qf(r._key,Rn.none())])}function xl(r,e){const t=kn(r.firestore,Mi),s=mn(r),o=K0(r.converter,e);return th(t,[B0(Yc(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Rn.exists(!1))]).then(()=>s)}function wi(r,...e){var t,s,o;r=Et(r);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||l_(e[h])||(l=e[h++]);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(l_(e[h])){const I=e[h];e[h]=(t=I.next)===null||t===void 0?void 0:t.bind(I),e[h+1]=(s=I.error)===null||s===void 0?void 0:s.bind(I),e[h+2]=(o=I.complete)===null||o===void 0?void 0:o.bind(I)}let g,v,w;if(r instanceof st)v=kn(r.firestore,Mi),w=jc(r._key.path),g={next:I=>{e[h]&&e[h](X0(v,r,I))},error:e[h+1],complete:e[h+2]};else{const I=kn(r,zi);v=kn(I.firestore,Mi),w=I._query;const A=new Q0(v);g={next:U=>{e[h]&&e[h](new Oo(v,A,I,U))},error:e[h+1],complete:e[h+2]},bk(r._query)}return function(A,U,q,j){const B=new M0(j),Z=new k0(U,B,q);return A.asyncQueue.enqueueAndForget(async()=>A0(await _f(A),Z)),()=>{B.Ou(),A.asyncQueue.enqueueAndForget(async()=>C0(await _f(A),Z))}}(ap(v),w,f,g)}function th(r,e){return function(s,o){const l=new ki;return s.asyncQueue.enqueueAndForget(async()=>hk(await Tk(s),o,l)),l.promise}(ap(r),e)}function X0(r,e,t){const s=t.docs.get(e._key),o=new Q0(r);return new _s(r,o,e._key,s,new Ja(t.hasPendingWrites,t.fromCache),e.converter)}function zr(){return new up("serverTimestamp")}(function(e,t=!0){(function(o){Ho=o})($o),bo(new ws("firestore",(s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),f=new Mi(new VS(s.getProvider("auth-internal")),new MS(h,s.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ne(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hl(v.options.projectId,w)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),Ai(hy,dy,e),Ai(hy,dy,"esm2017")})();const J0={apiKey:"AIzaSyAsZwilzqFBeTLXULpYgffU4EOUIFLZL-0",authDomain:"theapexchemistry.firebaseapp.com",projectId:"theapexchemistry",storageBucket:"theapexchemistry.firebasestorage.app",messagingSenderId:"735310900629",appId:"1:735310900629:web:ead0b2f84d0420072f9a9c"},Z0=V_().find(r=>r.name==="[DEFAULT]")||Cf(J0),br=gv(Z0),Xe=Ak(Z0),eE="Y7hWLggcPsY36p8mfmBqbMligSD3",Yo=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],tE=["January","February","March","April","May","June","July","August","September","October","November","December"],Ps=(...r)=>r.filter(Boolean).join(" "),Fk=(r=new Date)=>`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}`,xs=r=>r?(r!=null&&r.toDate?r.toDate():new Date(r)).toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):"—",Hn=r=>`₹${Number(r||0).toLocaleString("en-IN")}`,nE=r=>`${r.toLowerCase().replace(/[^a-z0-9]/g,"")}@students.theapex.local`,Uk=()=>`APEX${String(Date.now()).slice(-7)}`,zk=()=>`Apex@${Math.floor(1e3+Math.random()*9e3)}`;function Bk({toast:r,clear:e}){return _e.useEffect(()=>{if(r){const t=setTimeout(e,3500);return()=>clearTimeout(t)}},[r,e]),r?y.jsxs("div",{className:Ps("toast",r.type==="error"&&"toast-error"),children:[r.type==="error"?y.jsx(p_,{size:19}):y.jsx(Pc,{size:19}),y.jsx("span",{children:r.message})]}):null}function nh({open:r,title:e,children:t,onClose:s,wide:o=!1}){return r?y.jsx("div",{className:"modal-backdrop",onMouseDown:l=>l.target===l.currentTarget&&s(),children:y.jsxs("div",{className:Ps("modal",o&&"modal-wide"),children:[y.jsxs("div",{className:"modal-head",children:[y.jsx("h3",{children:e}),y.jsx("button",{className:"icon-btn",onClick:s,children:y.jsx(w_,{size:20})})]}),t]})}):null}function $k({onToast:r}){const[e,t]=_e.useState("student"),[s,o]=_e.useState(""),[l,h]=_e.useState(""),[f,g]=_e.useState(!1),[v,w]=_e.useState(!1),I=async A=>{A.preventDefault(),w(!0);try{const U=e==="student"?nE(s.trim()):s.trim(),q=await gI(br,U,l);if(e==="admin"){if(q.user.uid!==eE)throw await Do(br),new Error("This Firebase account is not authorised as the administrator.")}else{const j=await yp(mn(Xe,"students",q.user.uid));if(!j.exists()||j.data().status==="suspended")throw await Do(br),new Error("Student account is unavailable or suspended.")}}catch(U){r(U.message.replace("Firebase: ",""),"error")}finally{w(!1)}};return y.jsxs("div",{className:"login-page",children:[y.jsxs("section",{className:"login-visual",children:[y.jsx("img",{src:"/apex-chemistry.png",alt:"The Apex Chemistry tuition"}),y.jsx("div",{className:"visual-shade"}),y.jsxs("div",{className:"visual-copy",children:[y.jsx("span",{className:"eyebrow",children:"THE APEX CHEMISTRY"}),y.jsxs("h1",{children:["Smart learning.",y.jsx("br",{}),"Clear progress."]}),y.jsx("p",{children:"A dedicated portal for students, batches, notes, class schedules and fee records."})]})]}),y.jsxs("section",{className:"login-panel",children:[y.jsxs("div",{className:"login-card",children:[y.jsxs("div",{className:"brand-text",children:[y.jsx("img",{className:"brand-thumb",src:"/apex-chemistry.png",alt:"The Apex Chemistry"}),y.jsxs("div",{children:[y.jsx("strong",{children:"The Apex Chemistry"}),y.jsx("small",{children:"Academic Portal"})]})]}),y.jsx("h2",{children:"Welcome back"}),y.jsx("p",{className:"muted",children:"Choose your portal and sign in securely."}),y.jsxs("div",{className:"role-tabs",children:[y.jsxs("button",{className:e==="student"?"active":"",onClick:()=>t("student"),children:[y.jsx(vs,{size:18})," Student"]}),y.jsxs("button",{className:e==="admin"?"active":"",onClick:()=>t("admin"),children:[y.jsx(v_,{size:18})," Admin"]})]}),y.jsxs("form",{onSubmit:I,children:[y.jsx("label",{children:e==="student"?"Student ID":"Administrator email"}),y.jsx("input",{required:!0,value:s,onChange:A=>o(A.target.value),placeholder:e==="student"?"Example: APEX1234567":"admin@example.com"}),y.jsx("label",{children:"Password"}),y.jsxs("div",{className:"password-field",children:[y.jsx("input",{required:!0,type:f?"text":"password",value:l,onChange:A=>h(A.target.value),placeholder:"Enter your password"}),y.jsx("button",{type:"button",onClick:()=>g(!f),children:f?y.jsx(Iw,{size:18}):y.jsx(Sw,{size:18})})]}),y.jsx("button",{className:"primary full",disabled:v,children:v?y.jsxs(y.Fragment,{children:[y.jsx(Rw,{className:"spin",size:18})," Signing in…"]}):y.jsxs(y.Fragment,{children:["Sign in to ",e," portal"]})})]}),y.jsx("div",{className:"login-note",children:"Student credentials are generated only by the administrator."})]}),y.jsx(rE,{compact:!0})]})]})}function rE({compact:r=!1}){return y.jsxs("footer",{className:r?"compact-footer":"",children:["Owned by ",y.jsx("strong",{children:"The Apex Chemistry"}),". All rights reserved. Maintained by ",y.jsx("a",{href:"https://coffeetocode26official.netlify.app",target:"_blank",rel:"noreferrer",children:"Coffee To Code"}),"."]})}const qk=[["dashboard","Dashboard",__],["students","Students",Tf],["batches","Batch Settings",Nw],["notes","Study Notes",zo],["fees","Fee Records",yl],["notifications","Notifications",ar]],Hk=[["dashboard","Home",__],["notes","Study Notes",zo],["fees","My Fees",cc],["notifications","Notifications",ar],["profile","My Profile",vs]];function iE({role:r,profile:e,active:t,setActive:s,onLogout:o,children:l,notificationCount:h=0}){var w,I;const[f,g]=_e.useState(!1),v=r==="admin"?qk:Hk;return y.jsxs("div",{className:"app-shell",children:[y.jsxs("aside",{className:Ps("sidebar",f&&"sidebar-open"),children:[y.jsxs("div",{className:"sidebar-brand",children:[y.jsx("img",{className:"brand-thumb sidebar-thumb",src:"/apex-chemistry.png",alt:"The Apex Chemistry"}),y.jsxs("div",{children:[y.jsx("strong",{children:"The Apex"}),y.jsx("small",{children:"Chemistry Portal"})]}),y.jsx("button",{className:"close-mobile",onClick:()=>g(!1),children:y.jsx(w_,{})})]}),y.jsx("nav",{children:v.map(([A,U,q])=>y.jsxs("button",{className:t===A?"active":"",onClick:()=>{s(A),g(!1)},children:[y.jsx(q,{size:19}),y.jsx("span",{children:U}),A==="notifications"&&h>0?y.jsx("b",{children:h}):null]},A))}),y.jsxs("div",{className:"sidebar-user",children:[y.jsx("div",{className:"avatar",children:((w=e==null?void 0:e.name)==null?void 0:w[0])||"A"}),y.jsxs("div",{children:[y.jsx("strong",{children:(e==null?void 0:e.name)||"Account"}),y.jsx("small",{children:r==="admin"?"Administrator":e==null?void 0:e.studentId})]}),y.jsx("button",{onClick:o,children:y.jsx(Aw,{size:18})})]})]}),y.jsxs("div",{className:"main-area",children:[y.jsxs("header",{className:"topbar",children:[y.jsx("button",{className:"menu-btn",onClick:()=>g(!0),children:y.jsx(Cw,{})}),y.jsxs("div",{children:[y.jsx("span",{className:"eyebrow",children:"THE APEX CHEMISTRY"}),y.jsx("h2",{children:(I=v.find(A=>A[0]===t))==null?void 0:I[1]})]}),y.jsxs("button",{className:"notification-button",onClick:()=>s("notifications"),children:[y.jsx(ar,{size:21}),h>0&&y.jsx("b",{children:h})]})]}),y.jsx("main",{children:l}),y.jsx(rE,{})]}),f&&y.jsx("div",{className:"sidebar-overlay",onClick:()=>g(!1)})]})}function $r({icon:r,title:e,text:t,action:s}){return y.jsxs("div",{className:"empty-state",children:[y.jsx("div",{children:y.jsx(r,{size:28})}),y.jsx("h3",{children:e}),y.jsx("p",{children:t}),s]})}function Wn({icon:r,label:e,value:t,sub:s}){return y.jsxs("div",{className:"stat-card",children:[y.jsx("div",{className:"stat-icon",children:y.jsx(r,{})}),y.jsxs("div",{children:[y.jsx("span",{children:e}),y.jsx("strong",{children:t}),y.jsx("small",{children:s})]})]})}function Wk({profile:r,onToast:e,onLogout:t}){const[s,o]=_e.useState("dashboard"),[l,h]=_e.useState([]),[f,g]=_e.useState([]),[v,w]=_e.useState([]),[I,A]=_e.useState([]),[U,q]=_e.useState([]);_e.useEffect(()=>{const B=[wi(Ei(dn(Xe,"students"),Wa("createdAt","desc")),Z=>h(Z.docs.map(te=>({id:te.id,...te.data()})))),wi(Ei(dn(Xe,"batches"),Wa("name")),Z=>g(Z.docs.map(te=>({id:te.id,...te.data()})))),wi(Ei(dn(Xe,"notes"),Wa("createdAt","desc")),Z=>w(Z.docs.map(te=>({id:te.id,...te.data()})))),wi(Ei(dn(Xe,"fees"),Wa("createdAt","desc")),Z=>A(Z.docs.map(te=>({id:te.id,...te.data()})))),wi(Ei(dn(Xe,"notifications"),Wa("createdAt","desc"),Mk(80)),Z=>q(Z.docs.map(te=>({id:te.id,...te.data()}))))];return()=>B.forEach(Z=>Z())},[]);const j={dashboard:y.jsx(Gk,{students:l,batches:f,notes:v,fees:I,setActive:o}),students:y.jsx(Kk,{students:l,batches:f,onToast:e}),batches:y.jsx(Yk,{batches:f,onToast:e}),notes:y.jsx(Zk,{notes:v,batches:f,onToast:e}),fees:y.jsx(eR,{fees:I,students:l,onToast:e}),notifications:y.jsx(tR,{notifications:U,students:l})}[s];return y.jsx(iE,{role:"admin",profile:r,active:s,setActive:o,onLogout:t,children:j})}function Gk({students:r,batches:e,notes:t,fees:s,setActive:o}){const l=s.filter(h=>h.status!=="paid").length;return y.jsxs("div",{className:"page-stack",children:[y.jsxs("section",{className:"hero-card",children:[y.jsxs("div",{children:[y.jsx("span",{className:"eyebrow",children:"ADMINISTRATION"}),y.jsx("h1",{children:"Everything starts empty and stays under your control."}),y.jsx("p",{children:"Create batches first, register students, upload notes and maintain monthly fee records from one place."})]}),y.jsxs("button",{className:"primary",onClick:()=>o("students"),children:[y.jsx(E_,{size:18})," Add student"]})]}),y.jsxs("div",{className:"stats-grid",children:[y.jsx(Wn,{icon:Tf,label:"Registered students",value:r.length,sub:"Across all batches"}),y.jsx(Wn,{icon:vs,label:"Active batches",value:e.length,sub:"Configured by admin"}),y.jsx(Wn,{icon:zo,label:"Uploaded notes",value:t.length,sub:"Batch-specific resources"}),y.jsx(Wn,{icon:yl,label:"Pending fees",value:l,sub:"Monthly records due"})]}),y.jsxs("section",{className:"panel",children:[y.jsx("div",{className:"panel-head",children:y.jsxs("div",{children:[y.jsx("h3",{children:"Getting started"}),y.jsx("p",{children:"Recommended setup order"})]})}),y.jsx("div",{className:"steps-grid",children:[["1","Create a batch","Set class, timing, fee and class days."],["2","Register students","Assign each student to a batch."],["3","Upload notes","Choose the batch that should receive them."],["4","Track fees","Send monthly reminders and mark payments."]].map(h=>y.jsxs("div",{className:"step",children:[y.jsx("b",{children:h[0]}),y.jsx("strong",{children:h[1]}),y.jsx("p",{children:h[2]})]},h[0]))})]})]})}function Kk({students:r,batches:e,onToast:t}){const[s,o]=_e.useState("all"),[l,h]=_e.useState(""),[f,g]=_e.useState(!1),[v,w]=_e.useState(null),I=r.filter(j=>(s==="all"||j.batchId===s)&&`${j.name} ${j.studentId}`.toLowerCase().includes(l.toLowerCase())),A=async j=>{try{const B=Fk(),Z=`${j.id}_${B}`;await Y0(mn(Xe,"fees",Z),{studentUid:j.id,studentName:j.name,studentId:j.studentId,batchId:j.batchId,month:B,amount:Number(j.monthlyFee||0),status:"due",createdAt:zr()},{merge:!0}),await xl(dn(Xe,"notifications"),{studentUid:j.id,title:"Monthly fee reminder",message:`Your fee of ${Hn(j.monthlyFee)} for ${tE[new Date().getMonth()]} is due.`,type:"fee",month:B,read:!1,createdAt:zr()}),t(`Fee reminder sent to ${j.name}.`)}catch(B){t(B.message,"error")}},U=async j=>{try{await eh(mn(Xe,"students",j.id),{status:j.status==="active"?"suspended":"active"}),t("Student status updated.")}catch(B){t(B.message,"error")}},q=async j=>{if(confirm(`Delete ${j.name}'s profile? Their Firebase Authentication account must be removed separately from Firebase Console.`))try{await _p(mn(Xe,"students",j.id)),t("Student profile removed.")}catch(B){t(B.message,"error")}};return y.jsxs("div",{className:"page-stack",children:[y.jsxs("div",{className:"toolbar",children:[y.jsxs("div",{className:"search-box",children:[y.jsx(Pw,{size:18}),y.jsx("input",{placeholder:"Search student or ID",value:l,onChange:j=>h(j.target.value)})]}),y.jsxs("select",{value:s,onChange:j=>o(j.target.value),children:[y.jsx("option",{value:"all",children:"All batches"}),e.map(j=>y.jsx("option",{value:j.id,children:j.name},j.id))]}),y.jsxs("button",{className:"primary",onClick:()=>g(!0),children:[y.jsx(E_,{size:18})," Add student"]})]}),y.jsx("section",{className:"panel",children:I.length?y.jsx("div",{className:"table-wrap",children:y.jsxs("table",{children:[y.jsx("thead",{children:y.jsxs("tr",{children:[y.jsx("th",{children:"Student"}),y.jsx("th",{children:"Class"}),y.jsx("th",{children:"Batch"}),y.jsx("th",{children:"Monthly fee"}),y.jsx("th",{children:"Status"}),y.jsx("th",{children:"Actions"})]})}),y.jsx("tbody",{children:I.map(j=>y.jsxs("tr",{children:[y.jsxs("td",{children:[y.jsx("strong",{children:j.name}),y.jsx("small",{children:j.studentId})]}),y.jsx("td",{children:j.className}),y.jsx("td",{children:j.batchName}),y.jsx("td",{children:Hn(j.monthlyFee)}),y.jsx("td",{children:y.jsx("span",{className:Ps("status",j.status),children:j.status})}),y.jsx("td",{children:y.jsxs("div",{className:"row-actions",children:[y.jsx("button",{title:"Send fee reminder",onClick:()=>A(j),children:y.jsx(xw,{size:17})}),y.jsx("button",{title:"Suspend/activate",onClick:()=>U(j),children:y.jsx(v_,{size:17})}),y.jsx("button",{className:"danger",title:"Delete profile",onClick:()=>q(j),children:y.jsx(wf,{size:17})})]})})]},j.id))})]})}):y.jsx($r,{icon:Tf,title:"No students found",text:r.length?"No students match this batch or search.":"Create the first student after configuring a batch.",action:y.jsxs("button",{className:"primary",onClick:()=>g(!0),children:[y.jsx(uc,{size:18})," Create student"]})})}),y.jsx(Qk,{open:f,onClose:()=>g(!1),batches:e,onCreated:j=>{w(j),g(!1)},onToast:t}),y.jsx(nh,{open:!!v,title:"Account created successfully",onClose:()=>w(null),children:y.jsxs("div",{className:"success-box",children:[y.jsx(Pc,{size:44}),y.jsxs("h3",{children:[v==null?void 0:v.name,"'s account is ready"]}),y.jsx("p",{children:"Share these credentials privately with the student."}),y.jsxs("div",{className:"credential",children:[y.jsx("span",{children:"Student ID"}),y.jsx("strong",{children:v==null?void 0:v.studentId})]}),y.jsxs("div",{className:"credential",children:[y.jsx("span",{children:"Password"}),y.jsx("strong",{children:v==null?void 0:v.password})]}),y.jsx("button",{className:"primary full",onClick:()=>navigator.clipboard.writeText(`Student ID: ${v.studentId}
Password: ${v.password}`),children:"Copy credentials"})]})})]})}function Qk({open:r,onClose:e,batches:t,onCreated:s,onToast:o}){const l={name:"",className:"",batchId:"",monthlyFee:""},h={name:"",timing:"",days:[]},[f,g]=_e.useState(l),[v,w]=_e.useState(!1),[I,A]=_e.useState(""),[U,q]=_e.useState(!1),[j,B]=_e.useState(h),Z=t.find(ue=>ue.id===f.batchId),te=t.filter(ue=>`${ue.name} ${ue.className}`.toLowerCase().includes(I.toLowerCase()));_e.useEffect(()=>{Z&&!U&&g(ue=>({...ue,className:Z.className||"",monthlyFee:Z.monthlyFee||""}))},[f.batchId,U]),_e.useEffect(()=>{r||(g(l),A(""),q(!1),B(h))},[r]);const fe=ue=>B(ye=>({...ye,days:ye.days.includes(ue)?ye.days.filter(x=>x!==ue):[...ye.days,ue]})),Te=async ue=>{ue.preventDefault(),w(!0);let ye=Z;try{if(U){if(!j.name.trim()||!j.timing.trim()||!j.days.length)throw new Error("Enter the new batch name, timing and at least one class day.");const k={name:j.name.trim(),className:f.className.trim(),timing:j.timing.trim(),monthlyFee:Number(f.monthlyFee),days:j.days,createdAt:zr()};ye={id:(await xl(dn(Xe,"batches"),k)).id,...k}}if(!ye)throw new Error("Select an existing batch or create a new batch.");const x=Uk(),C=zk(),R=nE(x),N=V_().find(k=>k.name==="StudentCreator")||Cf(J0,"StudentCreator"),V=gv(N),b=await mI(V,R,C);await Y0(mn(Xe,"students",b.user.uid),{name:f.name.trim(),studentId:x,email:R,className:f.className.trim(),batchId:ye.id,batchName:ye.name,monthlyFee:Number(f.monthlyFee),status:"active",createdAt:zr()}),await Do(V),s({name:f.name.trim(),studentId:x,password:C})}catch(x){o(x.message,"error")}finally{w(!1)}};return y.jsx(nh,{open:r,title:"Register a new student",onClose:e,wide:!0,children:y.jsxs("form",{className:"form-grid",onSubmit:Te,children:[y.jsxs("label",{className:"span-2",children:["Student name",y.jsx("input",{required:!0,value:f.name,onChange:ue=>g({...f,name:ue.target.value}),placeholder:"Full name"})]}),U?y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"span-2 inline-choice",children:[y.jsx("strong",{children:"Create new batch"}),y.jsx("button",{type:"button",className:"text-btn",onClick:()=>q(!1),children:"Choose existing batch"})]}),y.jsxs("label",{children:["Batch name",y.jsx("input",{required:!0,value:j.name,onChange:ue=>B({...j,name:ue.target.value}),placeholder:"Example: XII Evening"})]}),y.jsxs("label",{children:["Batch timing",y.jsx("input",{required:!0,value:j.timing,onChange:ue=>B({...j,timing:ue.target.value}),placeholder:"5:00 PM – 6:30 PM"})]}),y.jsxs("div",{className:"span-2",children:[y.jsx("label",{children:"Class days"}),y.jsx("div",{className:"day-picker",children:Yo.map((ue,ye)=>y.jsx("button",{type:"button",className:j.days.includes(ye)?"selected":"",onClick:()=>fe(ye),children:ue.slice(0,3)},ue))})]})]}):y.jsxs(y.Fragment,{children:[y.jsxs("label",{className:"span-2",children:["Search batch",y.jsx("input",{value:I,onChange:ue=>A(ue.target.value),placeholder:"Search by batch or class"})]}),y.jsxs("label",{className:"span-2",children:["Batch",y.jsxs("select",{required:!0,value:f.batchId,onChange:ue=>g({...f,batchId:ue.target.value}),children:[y.jsx("option",{value:"",children:"Select a batch"}),te.map(ue=>y.jsxs("option",{value:ue.id,children:[ue.name," · ",ue.className]},ue.id))]})]}),y.jsxs("div",{className:"span-2 inline-choice",children:[y.jsx("span",{children:"Batch not available?"}),y.jsxs("button",{type:"button",className:"text-btn",onClick:()=>{q(!0),g(ue=>({...ue,batchId:""}))},children:[y.jsx(uc,{size:16})," Create a new batch here"]})]})]}),y.jsxs("label",{children:["Class",y.jsx("input",{required:!0,value:f.className,onChange:ue=>g({...f,className:ue.target.value}),placeholder:"Class 11 or Class 12"})]}),y.jsxs("label",{children:["Monthly fee",y.jsx("input",{required:!0,type:"number",min:"0",value:f.monthlyFee,onChange:ue=>g({...f,monthlyFee:ue.target.value}),placeholder:"0"})]}),y.jsxs("div",{className:"form-actions span-2",children:[y.jsx("button",{type:"button",className:"secondary",onClick:e,children:"Cancel"}),y.jsx("button",{className:"primary",disabled:v,children:v?"Creating…":"Create student account"})]})]})})}function Yk({batches:r,onToast:e}){const[t,s]=_e.useState(!1),[o,l]=_e.useState(null),h=()=>{l(null),s(!1)},f=async g=>{if(confirm(`Delete batch ${g.name}?`))try{await _p(mn(Xe,"batches",g.id)),e("Batch deleted.")}catch(v){e(v.message,"error")}};return y.jsxs("div",{className:"page-stack",children:[y.jsx("div",{className:"toolbar end",children:y.jsxs("button",{className:"primary",onClick:()=>{l(null),s(!0)},children:[y.jsx(uc,{size:18})," Create batch"]})}),y.jsxs("div",{className:"batch-grid",children:[r.map(g=>y.jsxs("article",{className:"batch-card",children:[y.jsxs("div",{className:"batch-top",children:[y.jsx("div",{className:"batch-icon",children:y.jsx(vs,{})}),y.jsxs("div",{children:[y.jsx("h3",{children:g.name}),y.jsx("p",{children:g.className})]})]}),y.jsxs("div",{className:"batch-detail",children:[y.jsx(m_,{size:17}),y.jsx("span",{children:"Timing"}),y.jsx("strong",{children:g.timing})]}),y.jsxs("div",{className:"batch-detail",children:[y.jsx(f_,{size:17}),y.jsx("span",{children:"Days"}),y.jsx("strong",{children:(g.days||[]).map(v=>Yo[v].slice(0,3)).join(", ")||"Not set"})]}),y.jsxs("div",{className:"batch-detail",children:[y.jsx(yl,{size:17}),y.jsx("span",{children:"Monthly fee"}),y.jsx("strong",{children:Hn(g.monthlyFee)})]}),y.jsxs("div",{className:"card-actions",children:[y.jsxs("button",{className:"secondary",onClick:()=>{l(g),s(!0)},children:[y.jsx(kw,{size:16})," Edit"]}),y.jsx("button",{className:"danger-btn",onClick:()=>f(g),children:y.jsx(wf,{size:16})})]})]},g.id)),!r.length&&y.jsx("section",{className:"panel full-grid",children:y.jsx($r,{icon:vs,title:"No batches configured",text:"Create a batch with its class, schedule, days and monthly fee.",action:y.jsxs("button",{className:"primary",onClick:()=>s(!0),children:[y.jsx(uc,{size:18})," Create first batch"]})})})]}),y.jsx(Xk,{open:t,editing:o,onClose:()=>s(!1),onSaved:h,onToast:e})]})}function Xk({open:r,editing:e,onClose:t,onSaved:s,onToast:o}){const[l,h]=_e.useState({name:"",className:"",timing:"",monthlyFee:"",days:[]});_e.useEffect(()=>h(e?{name:e.name||"",className:e.className||"",timing:e.timing||"",monthlyFee:e.monthlyFee||"",days:e.days||[]}:{name:"",className:"",timing:"",monthlyFee:"",days:[]}),[e,r]);const f=v=>h({...l,days:l.days.includes(v)?l.days.filter(w=>w!==v):[...l.days,v]}),g=async v=>{v.preventDefault();try{const w={...l,monthlyFee:Number(l.monthlyFee),updatedAt:zr()};e?await eh(mn(Xe,"batches",e.id),w):await xl(dn(Xe,"batches"),{...w,createdAt:zr()}),o(e?"Batch updated.":"Batch created."),s()}catch(w){o(w.message,"error")}};return y.jsx(nh,{open:r,title:e?"Edit batch settings":"Create a batch",onClose:t,children:y.jsxs("form",{className:"form-grid",onSubmit:g,children:[y.jsxs("label",{children:["Batch name",y.jsx("input",{required:!0,value:l.name,onChange:v=>h({...l,name:v.target.value}),placeholder:"Example: XI Evening"})]}),y.jsxs("label",{children:["Class",y.jsx("input",{required:!0,value:l.className,onChange:v=>h({...l,className:v.target.value}),placeholder:"Class 11"})]}),y.jsxs("label",{children:["Batch timing",y.jsx("input",{required:!0,value:l.timing,onChange:v=>h({...l,timing:v.target.value}),placeholder:"5:00 PM – 6:30 PM"})]}),y.jsxs("label",{children:["Monthly fee",y.jsx("input",{required:!0,type:"number",min:"0",value:l.monthlyFee,onChange:v=>h({...l,monthlyFee:v.target.value})})]}),y.jsxs("div",{className:"span-2",children:[y.jsx("label",{children:"Class days"}),y.jsx("div",{className:"day-picker",children:Yo.map((v,w)=>y.jsx("button",{type:"button",className:l.days.includes(w)?"selected":"",onClick:()=>f(w),children:v.slice(0,3)},v))})]}),y.jsxs("div",{className:"form-actions span-2",children:[y.jsx("button",{type:"button",className:"secondary",onClick:t,children:"Cancel"}),y.jsx("button",{className:"primary",children:e?"Save changes":"Create batch"})]})]})})}const Jk=750*1024,sE=r=>{var e;try{const t=(e=r.fileData)!=null&&e.toUint8Array?r.fileData.toUint8Array():new Uint8Array(r.fileData||[]),s=new Blob([t],{type:r.mimeType||"application/octet-stream"}),o=URL.createObjectURL(s),l=document.createElement("a");l.href=o,l.download=r.fileName||"note",document.body.appendChild(l),l.click(),l.remove(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}catch{alert("This note could not be downloaded.")}};function Zk({notes:r,batches:e,onToast:t}){const[s,o]=_e.useState(!1),[l,h]=_e.useState(!1),f=async v=>{v.preventDefault();const w=new FormData(v.currentTarget),I=w.get("file"),A=w.get("batchId"),U=w.get("title"),q=e.find(j=>j.id===A);if(I!=null&&I.size){if(I.size>Jk){t("The file is too large. Firestore notes must be 750 KB or smaller.","error");return}h(!0);try{const j=fn.fromUint8Array(new Uint8Array(await I.arrayBuffer()));await xl(dn(Xe,"notes"),{title:U.trim(),batchId:A,batchName:q.name,fileName:I.name,mimeType:I.type||"application/octet-stream",fileSize:I.size,fileData:j,createdAt:zr()}),t("Note saved in Firestore for the selected batch."),o(!1)}catch(j){t(j.message,"error")}finally{h(!1)}}},g=async v=>{confirm("Remove this note from the portal?")&&await _p(mn(Xe,"notes",v.id))};return y.jsxs("div",{className:"page-stack",children:[y.jsx("div",{className:"toolbar end",children:y.jsxs("button",{className:"primary",onClick:()=>o(!0),disabled:!e.length,children:[y.jsx(Dw,{size:18})," Upload notes"]})}),y.jsx("section",{className:"panel",children:r.length?y.jsx("div",{className:"resource-grid",children:r.map(v=>y.jsxs("article",{className:"resource",children:[y.jsx("div",{className:"file-icon",children:y.jsx(y_,{})}),y.jsxs("div",{children:[y.jsx("strong",{children:v.title}),y.jsx("span",{children:v.batchName}),y.jsxs("small",{children:[v.fileName," · ",Math.ceil((v.fileSize||0)/1024)," KB · ",xs(v.createdAt)]})]}),y.jsxs("div",{className:"resource-actions",children:[y.jsx("button",{onClick:()=>sE(v),title:"Download",children:y.jsx(g_,{size:17})}),y.jsx("button",{onClick:()=>g(v),children:y.jsx(wf,{size:17})})]})]},v.id))}):y.jsx($r,{icon:zo,title:"No notes uploaded",text:"Notes are stored in Firestore and visible only to students in the selected batch."})}),y.jsx(nh,{open:s,title:"Upload a small note to Firestore",onClose:()=>o(!1),children:y.jsxs("form",{className:"form-grid",onSubmit:f,children:[y.jsxs("label",{className:"span-2",children:["Note title",y.jsx("input",{name:"title",required:!0,placeholder:"Example: Chemical Bonding Revision"})]}),y.jsxs("label",{className:"span-2",children:["Select batch",y.jsxs("select",{name:"batchId",required:!0,children:[y.jsx("option",{value:"",children:"Choose batch"}),e.map(v=>y.jsx("option",{value:v.id,children:v.name},v.id))]})]}),y.jsxs("label",{className:"span-2 file-input",children:["Choose file (maximum 750 KB)",y.jsx("input",{name:"file",type:"file",required:!0,accept:".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg,.txt"})]}),y.jsx("small",{className:"span-2 muted",children:"Firestore has a 1 MiB document limit, so this portal safely limits each uploaded note to 750 KB."}),y.jsxs("div",{className:"form-actions span-2",children:[y.jsx("button",{type:"button",className:"secondary",onClick:()=>o(!1),children:"Cancel"}),y.jsx("button",{className:"primary",disabled:l,children:l?"Saving…":"Save note in Firestore"})]})]})})]})}function eR({fees:r,students:e,onToast:t}){const s=async o=>{try{await eh(mn(Xe,"fees",o.id),{status:"paid",paidAt:zr()}),await xl(dn(Xe,"notifications"),{studentUid:o.studentUid,title:"Fee payment updated",message:`Your fee record for ${o.month} has been marked as paid.`,type:"fee",read:!1,createdAt:zr()}),t("Fee marked as paid.")}catch(l){t(l.message,"error")}};return y.jsx("div",{className:"page-stack",children:y.jsxs("section",{className:"panel",children:[y.jsx("div",{className:"panel-head",children:y.jsxs("div",{children:[y.jsx("h3",{children:"Interactive fee records"}),y.jsx("p",{children:"Records are created when an administrator sends a fee reminder."})]})}),r.length?y.jsx("div",{className:"table-wrap",children:y.jsxs("table",{children:[y.jsx("thead",{children:y.jsxs("tr",{children:[y.jsx("th",{children:"Student"}),y.jsx("th",{children:"Month"}),y.jsx("th",{children:"Amount"}),y.jsx("th",{children:"Status"}),y.jsx("th",{children:"Paid on"}),y.jsx("th",{children:"Action"})]})}),y.jsx("tbody",{children:r.map(o=>y.jsxs("tr",{children:[y.jsxs("td",{children:[y.jsx("strong",{children:o.studentName}),y.jsx("small",{children:o.studentId})]}),y.jsx("td",{children:o.month}),y.jsx("td",{children:Hn(o.amount)}),y.jsx("td",{children:y.jsx("span",{className:Ps("status",o.status),children:o.status})}),y.jsx("td",{children:xs(o.paidAt)}),y.jsx("td",{children:o.status!=="paid"?y.jsx("button",{className:"mini-primary",onClick:()=>s(o),children:"Mark paid"}):y.jsx(Pc,{size:19})})]},o.id))})]})}):y.jsx($r,{icon:cc,title:"No fee records yet",text:"Go to Students and send a monthly fee reminder to create the first record."})]})})}function tR({notifications:r,students:e}){return y.jsx("div",{className:"page-stack",children:y.jsx("section",{className:"panel",children:r.length?y.jsx("div",{className:"notification-list",children:r.map(t=>{var s;return y.jsxs("article",{children:[y.jsx("div",{className:"notification-icon",children:y.jsx(ar,{})}),y.jsxs("div",{children:[y.jsx("strong",{children:t.title}),y.jsx("p",{children:t.message}),y.jsxs("small",{children:[((s=e.find(o=>o.id===t.studentUid))==null?void 0:s.name)||"Student"," · ",xs(t.createdAt)]})]})]},t.id)})}):y.jsx($r,{icon:ar,title:"No notifications sent",text:"Fee reminders and account updates will appear here."})})})}function nR({profile:r,onLogout:e,onToast:t}){const[s,o]=_e.useState("dashboard"),[l,h]=_e.useState(null),[f,g]=_e.useState([]),[v,w]=_e.useState([]),[I,A]=_e.useState([]);_e.useEffect(()=>{const j=[];return r.batchId&&(yp(mn(Xe,"batches",r.batchId)).then(B=>{B.exists()&&h({id:B.id,...B.data()})}),j.push(wi(Ei(dn(Xe,"notes"),Hd("batchId","==",r.batchId)),B=>g(B.docs.map(Z=>({id:Z.id,...Z.data()})))))),j.push(wi(Ei(dn(Xe,"fees"),Hd("studentUid","==",br.currentUser.uid)),B=>w(B.docs.map(Z=>({id:Z.id,...Z.data()})).sort((Z,te)=>(te.month||"").localeCompare(Z.month||""))))),j.push(wi(Ei(dn(Xe,"notifications"),Hd("studentUid","==",br.currentUser.uid)),B=>A(B.docs.map(Z=>({id:Z.id,...Z.data()})).sort((Z,te)=>{var fe,Te;return(((fe=te.createdAt)==null?void 0:fe.seconds)||0)-(((Te=Z.createdAt)==null?void 0:Te.seconds)||0)})))),()=>j.forEach(B=>B())},[r.batchId]);const U=I.filter(j=>!j.read).length,q={dashboard:y.jsx(rR,{profile:r,batch:l,notes:f,fees:v,notifications:I,setActive:o}),notes:y.jsx(sR,{notes:f}),fees:y.jsx(oR,{fees:v,batch:l,onToast:t}),notifications:y.jsx(aR,{notifications:I}),profile:y.jsx(lR,{profile:r,batch:l})}[s];return y.jsx(iE,{role:"student",profile:r,active:s,setActive:o,onLogout:e,notificationCount:U,children:q})}function rR({profile:r,batch:e,notes:t,fees:s,notifications:o,setActive:l}){const h=s.filter(f=>f.status!=="paid").reduce((f,g)=>f+Number(g.amount||0),0);return y.jsxs("div",{className:"page-stack",children:[y.jsxs("section",{className:"student-welcome",children:[y.jsxs("div",{children:[y.jsx("span",{className:"eyebrow",children:"WELCOME BACK"}),y.jsx("h1",{children:r.name}),y.jsxs("p",{children:[r.className," · ",r.batchName]})]}),y.jsxs("div",{className:"student-badge",children:[y.jsx(vs,{}),y.jsx("span",{children:r.studentId})]})]}),y.jsxs("div",{className:"stats-grid",children:[y.jsx(Wn,{icon:m_,label:"Batch timing",value:(e==null?void 0:e.timing)||"Not set",sub:((e==null?void 0:e.days)||[]).map(f=>Yo[f].slice(0,3)).join(", ")||"Schedule pending"}),y.jsx(Wn,{icon:yl,label:"Monthly fee",value:Hn((e==null?void 0:e.monthlyFee)||r.monthlyFee),sub:`${Hn(h)} currently due`}),y.jsx(Wn,{icon:zo,label:"Study notes",value:t.length,sub:"Available for your batch"}),y.jsx(Wn,{icon:ar,label:"Notifications",value:o.filter(f=>!f.read).length,sub:"Unread reminders"})]}),y.jsxs("div",{className:"two-column",children:[y.jsx(iR,{days:(e==null?void 0:e.days)||[]}),y.jsxs("section",{className:"panel",children:[y.jsxs("div",{className:"panel-head",children:[y.jsxs("div",{children:[y.jsx("h3",{children:"Latest notifications"}),y.jsx("p",{children:"Updates from the administrator"})]}),y.jsx("button",{className:"text-btn",onClick:()=>l("notifications"),children:"View all"})]}),o.length?y.jsx("div",{className:"notification-list compact",children:o.slice(0,4).map(f=>y.jsxs("article",{children:[y.jsx("div",{className:"notification-icon",children:y.jsx(ar,{})}),y.jsxs("div",{children:[y.jsx("strong",{children:f.title}),y.jsx("p",{children:f.message}),y.jsx("small",{children:xs(f.createdAt)})]})]},f.id))}):y.jsx($r,{icon:ar,title:"No notifications",text:"Admin reminders will appear here."})]})]})]})}function iR({days:r}){const e=new Date,t=e.getFullYear(),s=e.getMonth(),o=new Date(t,s,1).getDay(),l=new Date(t,s+1,0).getDate(),h=[];for(let f=0;f<o;f++)h.push(null);for(let f=1;f<=l;f++)h.push(f);return y.jsxs("section",{className:"panel calendar-panel",children:[y.jsxs("div",{className:"panel-head",children:[y.jsxs("div",{children:[y.jsx("h3",{children:"Class calendar"}),y.jsxs("p",{children:[tE[s]," ",t]})]}),y.jsx(f_,{})]}),y.jsx("div",{className:"calendar-week",children:Yo.map(f=>y.jsx("span",{children:f[0]},f))}),y.jsx("div",{className:"calendar-grid",children:h.map((f,g)=>{const v=f?new Date(t,s,f).getDay():null;return y.jsxs("div",{className:Ps(f&&r.includes(v)&&"class-day",f===e.getDate()&&"today"),children:[f||"",f&&r.includes(v)&&y.jsx("small",{children:"Class"})]},g)})}),y.jsxs("div",{className:"calendar-legend",children:[y.jsx("span",{}),y.jsx("p",{children:"Highlighted dates are scheduled class days."})]})]})}function sR({notes:r}){return y.jsx("div",{className:"page-stack",children:y.jsx("section",{className:"panel",children:r.length?y.jsx("div",{className:"resource-grid",children:r.map(e=>y.jsxs("article",{className:"resource",children:[y.jsx("div",{className:"file-icon",children:y.jsx(y_,{})}),y.jsxs("div",{children:[y.jsx("strong",{children:e.title}),y.jsx("span",{children:e.batchName}),y.jsxs("small",{children:[e.fileName," · ",Math.ceil((e.fileSize||0)/1024)," KB · ",xs(e.createdAt)]})]}),y.jsx("button",{className:"download-btn",onClick:()=>sE(e),title:"Download",children:y.jsx(g_,{size:18})})]},e.id))}):y.jsx($r,{icon:zo,title:"No notes available",text:"Your administrator has not uploaded notes for this batch yet."})})})}function oR({fees:r,batch:e,onToast:t}){const s=r.reduce((l,h)=>l+Number(h.amount||0),0),o=r.filter(l=>l.status==="paid").reduce((l,h)=>l+Number(h.amount||0),0);return y.jsxs("div",{className:"page-stack",children:[y.jsxs("div",{className:"stats-grid three",children:[y.jsx(Wn,{icon:yl,label:"Monthly batch fee",value:Hn(e==null?void 0:e.monthlyFee),sub:"Configured by administrator"}),y.jsx(Wn,{icon:Pc,label:"Total paid",value:Hn(o),sub:"Recorded payments"}),y.jsx(Wn,{icon:p_,label:"Outstanding",value:Hn(s-o),sub:"Pending fee amount"})]}),y.jsxs("section",{className:"panel",children:[y.jsxs("div",{className:"panel-head",children:[y.jsxs("div",{children:[y.jsx("h3",{children:"Fee tracking"}),y.jsx("p",{children:"Your monthly payment history"})]}),y.jsxs("button",{className:"primary",onClick:()=>t("Online payment gateway is currently under maintenance.","error"),children:[y.jsx(cc,{size:18})," Pay fees"]})]}),r.length?y.jsx("div",{className:"fee-cards",children:r.map(l=>y.jsxs("article",{children:[y.jsxs("div",{children:[y.jsx("span",{children:l.month}),y.jsx("strong",{children:Hn(l.amount)})]}),y.jsx("span",{className:Ps("status",l.status),children:l.status}),y.jsx("small",{children:l.status==="paid"?`Paid ${xs(l.paidAt)}`:"Payment due"})]},l.id))}):y.jsx($r,{icon:cc,title:"No fee records",text:"Your monthly fee records will appear after the administrator creates them."})]})]})}function aR({notifications:r}){return _e.useEffect(()=>{r.filter(e=>!e.read).forEach(e=>eh(mn(Xe,"notifications",e.id),{read:!0}).catch(()=>{}))},[r]),y.jsx("div",{className:"page-stack",children:y.jsx("section",{className:"panel",children:r.length?y.jsx("div",{className:"notification-list",children:r.map(e=>y.jsxs("article",{children:[y.jsx("div",{className:"notification-icon",children:y.jsx(ar,{})}),y.jsxs("div",{children:[y.jsx("strong",{children:e.title}),y.jsx("p",{children:e.message}),y.jsx("small",{children:xs(e.createdAt)})]})]},e.id))}):y.jsx($r,{icon:ar,title:"No notifications",text:"Important class and fee reminders will appear here."})})})}function lR({profile:r,batch:e}){var t;return y.jsx("div",{className:"page-stack",children:y.jsxs("section",{className:"panel profile-card",children:[y.jsx("div",{className:"large-avatar",children:(t=r.name)==null?void 0:t[0]}),y.jsxs("div",{children:[y.jsx("h2",{children:r.name}),y.jsx("p",{children:r.studentId})]}),y.jsxs("div",{className:"profile-grid",children:[y.jsxs("div",{children:[y.jsx("span",{children:"Class"}),y.jsx("strong",{children:r.className})]}),y.jsxs("div",{children:[y.jsx("span",{children:"Batch"}),y.jsx("strong",{children:r.batchName})]}),y.jsxs("div",{children:[y.jsx("span",{children:"Timing"}),y.jsx("strong",{children:(e==null?void 0:e.timing)||"Not set"})]}),y.jsxs("div",{children:[y.jsx("span",{children:"Class days"}),y.jsx("strong",{children:((e==null?void 0:e.days)||[]).map(s=>Yo[s]).join(", ")||"Not set"})]}),y.jsxs("div",{children:[y.jsx("span",{children:"Monthly fee"}),y.jsx("strong",{children:Hn((e==null?void 0:e.monthlyFee)||r.monthlyFee)})]}),y.jsxs("div",{children:[y.jsx("span",{children:"Account status"}),y.jsx("strong",{className:"capitalize",children:r.status})]})]})]})})}function uR(){const[r,e]=_e.useState(null),[t,s]=_e.useState(null),[o,l]=_e.useState(null),[h,f]=_e.useState(!0),[g,v]=_e.useState(null),w=(I,A="success")=>v({message:I,type:A});return _e.useEffect(()=>vI(br,async I=>{if(f(!0),!I){e(null),s(null),l(null),f(!1);return}try{if(I.uid===eE)s("admin"),l({id:I.uid,name:"Apex Administrator",role:"admin"});else{const A=await yp(mn(Xe,"students",I.uid));if(A.exists()&&A.data().status!=="suspended")s("student"),l({id:I.uid,...A.data()});else{await Do(br),w("No active portal profile was found for this account.","error"),e(null);return}}e(I)}catch(A){w(A.message,"error")}finally{f(!1)}}),[]),h?y.jsxs("div",{className:"loading-screen",children:[y.jsx("div",{className:"loader-logo",children:y.jsx(vs,{})}),y.jsx("strong",{children:"Loading The Apex Chemistry…"})]}):y.jsxs(y.Fragment,{children:[y.jsx(Bk,{toast:g,clear:()=>v(null)}),r?t==="admin"?y.jsx(Wk,{profile:o,onToast:w,onLogout:()=>Do(br)}):y.jsx(nR,{profile:o,onToast:w,onLogout:()=>Do(br)}):y.jsx($k,{onToast:w})]})}vw.createRoot(document.getElementById("root")).render(y.jsx(dw.StrictMode,{children:y.jsx(uR,{})}));
