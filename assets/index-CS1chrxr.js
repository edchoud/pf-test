var Pc=e=>{
  throw TypeError(e)
};
var ha=(e,t,n)=>t.has(e)||Pc("Cannot "+n);
var P=(e,t,n)=>(ha(e,t,"read from private field"),n?n.call(e):t.get(e)),J=(e,t,n)=>t.has(e)?Pc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),U=(e,t,n,r)=>(ha(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Pe=(e,t,n)=>(ha(e,t,"access private method"),n);
var bi=(e,t,n,r)=>({
  set _(o){
    U(e,t,o,n)
  },get _(){
    return P(e,t,r)
  }
});
function Dg(e,t){
  for(var n=0;
  n<t.length;
  n++){
    const r=t[n];
    if(typeof r!="string"&&!Array.isArray(r)){
      for(const o in r)if(o!=="default"&&!(o in e)){
        const i=Object.getOwnPropertyDescriptor(r,o);
        i&&Object.defineProperty(e,o,i.get?i:{
          enumerable:!0,get:()=>r[o]
        })
      }
    }
  }return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{
    value:"Module"
  }))
}(function(){
  const t=document.createElement("link").relList;
  if(t&&t.supports&&t.supports("modulepreload"))return;
  for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);
  new MutationObserver(o=>{
    for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)
  }).observe(document,{
    childList:!0,subtree:!0
  });
  function n(o){
    const i={
      
    };
    return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i
  }function r(o){
    if(o.ep)return;
    o.ep=!0;
    const i=n(o);
    fetch(o.href,i)
  }
})();
function Rf(e){
  return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e
}var jf={
  exports:{
    
  }
},Fs={
  
},Lf={
  exports:{
    
  }
},K={
  
};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ai=Symbol.for("react.element"),Ig=Symbol.for("react.portal"),Fg=Symbol.for("react.fragment"),zg=Symbol.for("react.strict_mode"),$g=Symbol.for("react.profiler"),Bg=Symbol.for("react.provider"),Ug=Symbol.for("react.context"),qg=Symbol.for("react.forward_ref"),Vg=Symbol.for("react.suspense"),Wg=Symbol.for("react.memo"),Hg=Symbol.for("react.lazy"),Nc=Symbol.iterator;
function Qg(e){
  return e===null||typeof e!="object"?null:(e=Nc&&e[Nc]||e["@@iterator"],typeof e=="function"?e:null)
}var Af={
  isMounted:function(){
    return!1
  },enqueueForceUpdate:function(){
    
  },enqueueReplaceState:function(){
    
  },enqueueSetState:function(){
    
  }
},Of=Object.assign,_f={
  
};
function no(e,t,n){
  this.props=e,this.context=t,this.refs=_f,this.updater=n||Af
}no.prototype.isReactComponent={
  
};
no.prototype.setState=function(e,t){
  if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this,e,t,"setState")
};
no.prototype.forceUpdate=function(e){
  this.updater.enqueueForceUpdate(this,e,"forceUpdate")
};
function Mf(){
  
}Mf.prototype=no.prototype;
function su(e,t,n){
  this.props=e,this.context=t,this.refs=_f,this.updater=n||Af
}var au=su.prototype=new Mf;
au.constructor=su;
Of(au,no.prototype);
au.isPureReactComponent=!0;
var Tc=Array.isArray,Df=Object.prototype.hasOwnProperty,lu={
  current:null
},If={
  key:!0,ref:!0,__self:!0,__source:!0
};
function Ff(e,t,n){
  var r,o={
    
  },i=null,s=null;
  if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Df.call(t,r)&&!If.hasOwnProperty(r)&&(o[r]=t[r]);
  var a=arguments.length-2;
  if(a===1)o.children=n;
  else if(1<a){
    for(var l=Array(a),u=0;
    u<a;
    u++)l[u]=arguments[u+2];
    o.children=l
  }if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);
  return{
    $$typeof:ai,type:e,key:i,ref:s,props:o,_owner:lu.current
  }
}function Kg(e,t){
  return{
    $$typeof:ai,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner
  }
}function uu(e){
  return typeof e=="object"&&e!==null&&e.$$typeof===ai
}function Gg(e){
  var t={
    "=":"=0",":":"=2"
  };
  return"$"+e.replace(/[=:]/g,function(n){
    return t[n]
  })
}var Rc=/\/+/g;
function ga(e,t){
  return typeof e=="object"&&e!==null&&e.key!=null?Gg(""+e.key):t.toString(36)
}function Vi(e,t,n,r,o){
  var i=typeof e;
  (i==="undefined"||i==="boolean")&&(e=null);
  var s=!1;
  if(e===null)s=!0;
  else switch(i){
    case"string":case"number":s=!0;
    break;
    case"object":switch(e.$$typeof){
      case ai:case Ig:s=!0
    }
  }if(s)return s=e,o=o(s),e=r===""?"."+ga(s,0):r,Tc(o)?(n="",e!=null&&(n=e.replace(Rc,"$&/")+"/"),Vi(o,t,n,"",function(u){
    return u
  })):o!=null&&(uu(o)&&(o=Kg(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Rc,"$&/")+"/")+e)),t.push(o)),1;
  if(s=0,r=r===""?".":r+":",Tc(e))for(var a=0;
  a<e.length;
  a++){
    i=e[a];
    var l=r+ga(i,a);
    s+=Vi(i,t,n,l,o)
  }else if(l=Qg(e),typeof l=="function")for(e=l.call(e),a=0;
  !(i=e.next()).done;
  )i=i.value,l=r+ga(i,a++),s+=Vi(i,t,n,l,o);
  else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");
  return s
}function ki(e,t,n){
  if(e==null)return e;
  var r=[],o=0;
  return Vi(e,r,"","",function(i){
    return t.call(n,i,o++)
  }),r
}function Yg(e){
  if(e._status===-1){
    var t=e._result;
    t=t(),t.then(function(n){
      (e._status===0||e._status===-1)&&(e._status=1,e._result=n)
    },function(n){
      (e._status===0||e._status===-1)&&(e._status=2,e._result=n)
    }),e._status===-1&&(e._status=0,e._result=t)
  }if(e._status===1)return e._result.default;
  throw e._result
}var De={
  current:null
},Wi={
  transition:null
},Xg={
  ReactCurrentDispatcher:De,ReactCurrentBatchConfig:Wi,ReactCurrentOwner:lu
};
function zf(){
  throw Error("act(...) is not supported in production builds of React.")
}K.Children={
  map:ki,forEach:function(e,t,n){
    ki(e,function(){
      t.apply(this,arguments)
    },n)
  },count:function(e){
    var t=0;
    return ki(e,function(){
      t++
    }),t
  },toArray:function(e){
    return ki(e,function(t){
      return t
    })||[]
  },only:function(e){
    if(!uu(e))throw Error("React.Children.only expected to receive a single React element child.");
    return e
  }
};
K.Component=no;
K.Fragment=Fg;
K.Profiler=$g;
K.PureComponent=su;
K.StrictMode=zg;
K.Suspense=Vg;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xg;
K.act=zf;
K.cloneElement=function(e,t,n){
  if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");
  var r=Of({
    
  },e.props),o=e.key,i=e.ref,s=e._owner;
  if(t!=null){
    if(t.ref!==void 0&&(i=t.ref,s=lu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;
    for(l in t)Df.call(t,l)&&!If.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])
  }var l=arguments.length-2;
  if(l===1)r.children=n;
  else if(1<l){
    a=Array(l);
    for(var u=0;
    u<l;
    u++)a[u]=arguments[u+2];
    r.children=a
  }return{
    $$typeof:ai,type:e.type,key:o,ref:i,props:r,_owner:s
  }
};
K.createContext=function(e){
  return e={
    $$typeof:Ug,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null
  },e.Provider={
    $$typeof:Bg,_context:e
  },e.Consumer=e
};
K.createElement=Ff;
K.createFactory=function(e){
  var t=Ff.bind(null,e);
  return t.type=e,t
};
K.createRef=function(){
  return{
    current:null
  }
};
K.forwardRef=function(e){
  return{
    $$typeof:qg,render:e
  }
};
K.isValidElement=uu;
K.lazy=function(e){
  return{
    $$typeof:Hg,_payload:{
      _status:-1,_result:e
    },_init:Yg
  }
};
K.memo=function(e,t){
  return{
    $$typeof:Wg,type:e,compare:t===void 0?null:t
  }
};
K.startTransition=function(e){
  var t=Wi.transition;
  Wi.transition={
    
  };
  try{
    e()
  }finally{
    Wi.transition=t
  }
};
K.unstable_act=zf;
K.useCallback=function(e,t){
  return De.current.useCallback(e,t)
};
K.useContext=function(e){
  return De.current.useContext(e)
};
K.useDebugValue=function(){
  
};
K.useDeferredValue=function(e){
  return De.current.useDeferredValue(e)
};
K.useEffect=function(e,t){
  return De.current.useEffect(e,t)
};
K.useId=function(){
  return De.current.useId()
};
K.useImperativeHandle=function(e,t,n){
  return De.current.useImperativeHandle(e,t,n)
};
K.useInsertionEffect=function(e,t){
  return De.current.useInsertionEffect(e,t)
};
K.useLayoutEffect=function(e,t){
  return De.current.useLayoutEffect(e,t)
};
K.useMemo=function(e,t){
  return De.current.useMemo(e,t)
};
K.useReducer=function(e,t,n){
  return De.current.useReducer(e,t,n)
};
K.useRef=function(e){
  return De.current.useRef(e)
};
K.useState=function(e){
  return De.current.useState(e)
};
K.useSyncExternalStore=function(e,t,n){
  return De.current.useSyncExternalStore(e,t,n)
};
K.useTransition=function(){
  return De.current.useTransition()
};
K.version="18.3.1";
Lf.exports=K;
var w=Lf.exports;
const O=Rf(w),$f=Dg({
  __proto__:null,default:O
},[w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg=w,Zg=Symbol.for("react.element"),ev=Symbol.for("react.fragment"),tv=Object.prototype.hasOwnProperty,nv=Jg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rv={
  key:!0,ref:!0,__self:!0,__source:!0
};
function Bf(e,t,n){
  var r,o={
    
  },i=null,s=null;
  n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);
  for(r in t)tv.call(t,r)&&!rv.hasOwnProperty(r)&&(o[r]=t[r]);
  if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);
  return{
    $$typeof:Zg,type:e,key:i,ref:s,props:o,_owner:nv.current
  }
}Fs.Fragment=ev;
Fs.jsx=Bf;
Fs.jsxs=Bf;
jf.exports=Fs;
var p=jf.exports,Uf={
  exports:{
    
  }
},Xe={
  
},qf={
  exports:{
    
  }
},Vf={
  
};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){
  function t(N,T){
    var D=N.length;
    N.push(T);
    e:for(;
    0<D;
    ){
      var W=D-1>>>1,z=N[W];
      if(0<o(z,T))N[W]=T,N[D]=z,D=W;
      else break e
    }
  }function n(N){
    return N.length===0?null:N[0]
  }function r(N){
    if(N.length===0)return null;
    var T=N[0],D=N.pop();
    if(D!==T){
      N[0]=D;
      e:for(var W=0,z=N.length,Q=z>>>1;
      W<Q;
      ){
        var Y=2*(W+1)-1,me=N[Y],Ce=Y+1,Z=N[Ce];
        if(0>o(me,D))Ce<z&&0>o(Z,me)?(N[W]=Z,N[Ce]=D,W=Ce):(N[W]=me,N[Y]=D,W=Y);
        else if(Ce<z&&0>o(Z,D))N[W]=Z,N[Ce]=D,W=Ce;
        else break e
      }
    }return T
  }function o(N,T){
    var D=N.sortIndex-T.sortIndex;
    return D!==0?D:N.id-T.id
  }if(typeof performance=="object"&&typeof performance.now=="function"){
    var i=performance;
    e.unstable_now=function(){
      return i.now()
    }
  }else{
    var s=Date,a=s.now();
    e.unstable_now=function(){
      return s.now()-a
    }
  }var l=[],u=[],c=1,d=null,m=3,f=!1,b=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;
  typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(N){
    for(var T=n(u);
    T!==null;
    ){
      if(T.callback===null)r(u);
      else if(T.startTime<=N)r(u),T.sortIndex=T.expirationTime,t(l,T);
      else break;
      T=n(u)
    }
  }function k(N){
    if(y=!1,v(N),!b)if(n(l)!==null)b=!0,$(S);
    else{
      var T=n(u);
      T!==null&&V(k,T.startTime-N)
    }
  }function S(N,T){
    b=!1,y&&(y=!1,g(R),R=-1),f=!0;
    var D=m;
    try{
      for(v(T),d=n(l);
      d!==null&&(!(d.expirationTime>T)||N&&!F());
      ){
        var W=d.callback;
        if(typeof W=="function"){
          d.callback=null,m=d.priorityLevel;
          var z=W(d.expirationTime<=T);
          T=e.unstable_now(),typeof z=="function"?d.callback=z:d===n(l)&&r(l),v(T)
        }else r(l);
        d=n(l)
      }if(d!==null)var Q=!0;
      else{
        var Y=n(u);
        Y!==null&&V(k,Y.startTime-T),Q=!1
      }return Q
    }finally{
      d=null,m=D,f=!1
    }
  }var E=!1,C=null,R=-1,L=5,A=-1;
  function F(){
    return!(e.unstable_now()-A<L)
  }function M(){
    if(C!==null){
      var N=e.unstable_now();
      A=N;
      var T=!0;
      try{
        T=C(!0,N)
      }finally{
        T?q():(E=!1,C=null)
      }
    }else E=!1
  }var q;
  if(typeof h=="function")q=function(){
    h(M)
  };
  else if(typeof MessageChannel<"u"){
    var _=new MessageChannel,G=_.port2;
    _.port1.onmessage=M,q=function(){
      G.postMessage(null)
    }
  }else q=function(){
    x(M,0)
  };
  function $(N){
    C=N,E||(E=!0,q())
  }function V(N,T){
    R=x(function(){
      N(e.unstable_now())
    },T)
  }e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){
    N.callback=null
  },e.unstable_continueExecution=function(){
    b||f||(b=!0,$(S))
  },e.unstable_forceFrameRate=function(N){
    0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<N?Math.floor(1e3/N):5
  },e.unstable_getCurrentPriorityLevel=function(){
    return m
  },e.unstable_getFirstCallbackNode=function(){
    return n(l)
  },e.unstable_next=function(N){
    switch(m){
      case 1:case 2:case 3:var T=3;
      break;
      default:T=m
    }var D=m;
    m=T;
    try{
      return N()
    }finally{
      m=D
    }
  },e.unstable_pauseExecution=function(){
    
  },e.unstable_requestPaint=function(){
    
  },e.unstable_runWithPriority=function(N,T){
    switch(N){
      case 1:case 2:case 3:case 4:case 5:break;
      default:N=3
    }var D=m;
    m=N;
    try{
      return T()
    }finally{
      m=D
    }
  },e.unstable_scheduleCallback=function(N,T,D){
    var W=e.unstable_now();
    switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?W+D:W):D=W,N){
      case 1:var z=-1;
      break;
      case 2:z=250;
      break;
      case 5:z=1073741823;
      break;
      case 4:z=1e4;
      break;
      default:z=5e3
    }return z=D+z,N={
      id:c++,callback:T,priorityLevel:N,startTime:D,expirationTime:z,sortIndex:-1
    },D>W?(N.sortIndex=D,t(u,N),n(l)===null&&N===n(u)&&(y?(g(R),R=-1):y=!0,V(k,D-W))):(N.sortIndex=z,t(l,N),b||f||(b=!0,$(S))),N
  },e.unstable_shouldYield=F,e.unstable_wrapCallback=function(N){
    var T=m;
    return function(){
      var D=m;
      m=T;
      try{
        return N.apply(this,arguments)
      }finally{
        m=D
      }
    }
  }
})(Vf);
qf.exports=Vf;
var ov=qf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv=w,Ye=ov;
function j(e){
  for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;
  n<arguments.length;
  n++)t+="&args[]="+encodeURIComponent(arguments[n]);
  return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}var Wf=new Set,Do={
  
};
function lr(e,t){
  Qr(e,t),Qr(e+"Capture",t)
}function Qr(e,t){
  for(Do[e]=t,e=0;
  e<t.length;
  e++)Wf.add(t[e])
}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xa=Object.prototype.hasOwnProperty,sv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jc={
  
},Lc={
  
};
function av(e){
  return Xa.call(Lc,e)?!0:Xa.call(jc,e)?!1:sv.test(e)?Lc[e]=!0:(jc[e]=!0,!1)
}function lv(e,t,n,r){
  if(n!==null&&n.type===0)return!1;
  switch(typeof t){
    case"function":case"symbol":return!0;
    case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");
    default:return!1
  }
}function uv(e,t,n,r){
  if(t===null||typeof t>"u"||lv(e,t,n,r))return!0;
  if(r)return!1;
  if(n!==null)switch(n.type){
    case 3:return!t;
    case 4:return t===!1;
    case 5:return isNaN(t);
    case 6:return isNaN(t)||1>t
  }return!1
}function Ie(e,t,n,r,o,i,s){
  this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s
}var Ee={
  
};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){
  Ee[e]=new Ie(e,0,!1,e,null,!1,!1)
});
[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){
  var t=e[0];
  Ee[t]=new Ie(t,1,!1,e[1],null,!1,!1)
});
["contentEditable","draggable","spellCheck","value"].forEach(function(e){
  Ee[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){
  Ee[e]=new Ie(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){
  Ee[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked","multiple","muted","selected"].forEach(function(e){
  Ee[e]=new Ie(e,3,!0,e,null,!1,!1)
});
["capture","download"].forEach(function(e){
  Ee[e]=new Ie(e,4,!1,e,null,!1,!1)
});
["cols","rows","size","span"].forEach(function(e){
  Ee[e]=new Ie(e,6,!1,e,null,!1,!1)
});
["rowSpan","start"].forEach(function(e){
  Ee[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var cu=/[\-:]([a-z])/g;
function du(e){
  return e[1].toUpperCase()
}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){
  var t=e.replace(cu,du);
  Ee[t]=new Ie(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){
  var t=e.replace(cu,du);
  Ee[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base","xml:lang","xml:space"].forEach(function(e){
  var t=e.replace(cu,du);
  Ee[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex","crossOrigin"].forEach(function(e){
  Ee[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ee.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src","href","action","formAction"].forEach(function(e){
  Ee[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function fu(e,t,n,r){
  var o=Ee.hasOwnProperty(t)?Ee[t]:null;
  (o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(uv(t,n,o,r)&&(n=null),r||o===null?av(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))
}var Yt=iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Si=Symbol.for("react.element"),wr=Symbol.for("react.portal"),xr=Symbol.for("react.fragment"),pu=Symbol.for("react.strict_mode"),Ja=Symbol.for("react.profiler"),Hf=Symbol.for("react.provider"),Qf=Symbol.for("react.context"),mu=Symbol.for("react.forward_ref"),Za=Symbol.for("react.suspense"),el=Symbol.for("react.suspense_list"),hu=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),Kf=Symbol.for("react.offscreen"),Ac=Symbol.iterator;
function fo(e){
  return e===null||typeof e!="object"?null:(e=Ac&&e[Ac]||e["@@iterator"],typeof e=="function"?e:null)
}var ce=Object.assign,va;
function ko(e){
  if(va===void 0)try{
    throw Error()
  }catch(n){
    var t=n.stack.trim().match(/\n( *(at )?)/);
    va=t&&t[1]||""
  }return`
`+va+e
}var ya=!1;
function wa(e,t){
  if(!e||ya)return"";
  ya=!0;
  var n=Error.prepareStackTrace;
  Error.prepareStackTrace=void 0;
  try{
    if(t)if(t=function(){
      throw Error()
    },Object.defineProperty(t.prototype,"props",{
      set:function(){
        throw Error()
      }
    }),typeof Reflect=="object"&&Reflect.construct){
      try{
        Reflect.construct(t,[])
      }catch(u){
        var r=u
      }Reflect.construct(e,[],t)
    }else{
      try{
        t.call()
      }catch(u){
        r=u
      }e.call(t.prototype)
    }else{
      try{
        throw Error()
      }catch(u){
        r=u
      }e()
    }
  }catch(u){
    if(u&&r&&typeof u.stack=="string"){
      for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;
      1<=s&&0<=a&&o[s]!==i[a];
      )a--;
      for(;
      1<=s&&0<=a;
      s--,a--)if(o[s]!==i[a]){
        if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){
          var l=`
`+o[s].replace(" at new "," at ");
          return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l
        }while(1<=s&&0<=a);
        break
      }
    }
  }finally{
    ya=!1,Error.prepareStackTrace=n
  }return(e=e?e.displayName||e.name:"")?ko(e):""
}function cv(e){
  switch(e.tag){
    case 5:return ko(e.type);
    case 16:return ko("Lazy");
    case 13:return ko("Suspense");
    case 19:return ko("SuspenseList");
    case 0:case 2:case 15:return e=wa(e.type,!1),e;
    case 11:return e=wa(e.type.render,!1),e;
    case 1:return e=wa(e.type,!0),e;
    default:return""
  }
}function tl(e){
  if(e==null)return null;
  if(typeof e=="function")return e.displayName||e.name||null;
  if(typeof e=="string")return e;
  switch(e){
    case xr:return"Fragment";
    case wr:return"Portal";
    case Ja:return"Profiler";
    case pu:return"StrictMode";
    case Za:return"Suspense";
    case el:return"SuspenseList"
  }if(typeof e=="object")switch(e.$$typeof){
    case Qf:return(e.displayName||"Context")+".Consumer";
    case Hf:return(e._context.displayName||"Context")+".Provider";
    case mu:var t=e.render;
    return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;
    case hu:return t=e.displayName||null,t!==null?t:tl(e.type)||"Memo";
    case un:t=e._payload,e=e._init;
    try{
      return tl(e(t))
    }catch{
      
    }
  }return null
}function dv(e){
  var t=e.type;
  switch(e.tag){
    case 24:return"Cache";
    case 9:return(t.displayName||"Context")+".Consumer";
    case 10:return(t._context.displayName||"Context")+".Provider";
    case 18:return"DehydratedFragment";
    case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");
    case 7:return"Fragment";
    case 5:return t;
    case 4:return"Portal";
    case 3:return"Root";
    case 6:return"Text";
    case 16:return tl(t);
    case 8:return t===pu?"StrictMode":"Mode";
    case 22:return"Offscreen";
    case 12:return"Profiler";
    case 21:return"Scope";
    case 13:return"Suspense";
    case 19:return"SuspenseList";
    case 25:return"TracingMarker";
    case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;
    if(typeof t=="string")return t
  }return null
}function jn(e){
  switch(typeof e){
    case"boolean":case"number":case"string":case"undefined":return e;
    case"object":return e;
    default:return""
  }
}function Gf(e){
  var t=e.type;
  return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")
}function fv(e){
  var t=Gf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];
  if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){
    var o=n.get,i=n.set;
    return Object.defineProperty(e,t,{
      configurable:!0,get:function(){
        return o.call(this)
      },set:function(s){
        r=""+s,i.call(this,s)
      }
    }),Object.defineProperty(e,t,{
      enumerable:n.enumerable
    }),{
      getValue:function(){
        return r
      },setValue:function(s){
        r=""+s
      },stopTracking:function(){
        e._valueTracker=null,delete e[t]
      }
    }
  }
}function Ei(e){
  e._valueTracker||(e._valueTracker=fv(e))
}function Yf(e){
  if(!e)return!1;
  var t=e._valueTracker;
  if(!t)return!0;
  var n=t.getValue(),r="";
  return e&&(r=Gf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1
}function as(e){
  if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;
  try{
    return e.activeElement||e.body
  }catch{
    return e.body
  }
}function nl(e,t){
  var n=t.checked;
  return ce({
    
  },t,{
    defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked
  })
}function Oc(e,t){
  var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;
  n=jn(t.value!=null?t.value:n),e._wrapperState={
    initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null
  }
}function Xf(e,t){
  t=t.checked,t!=null&&fu(e,"checked",t,!1)
}function rl(e,t){
  Xf(e,t);
  var n=jn(t.value),r=t.type;
  if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);
  else if(r==="submit"||r==="reset"){
    e.removeAttribute("value");
    return
  }t.hasOwnProperty("value")?ol(e,t.type,n):t.hasOwnProperty("defaultValue")&&ol(e,t.type,jn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)
}function _c(e,t,n){
  if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){
    var r=t.type;
    if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;
    t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t
  }n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)
}function ol(e,t,n){
  (t!=="number"||as(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))
}var So=Array.isArray;
function Lr(e,t,n,r){
  if(e=e.options,t){
    t={
      
    };
    for(var o=0;
    o<n.length;
    o++)t["$"+n[o]]=!0;
    for(n=0;
    n<e.length;
    n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)
  }else{
    for(n=""+jn(n),t=null,o=0;
    o<e.length;
    o++){
      if(e[o].value===n){
        e[o].selected=!0,r&&(e[o].defaultSelected=!0);
        return
      }t!==null||e[o].disabled||(t=e[o])
    }t!==null&&(t.selected=!0)
  }
}function il(e,t){
  if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));
  return ce({
    
  },t,{
    value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue
  })
}function Mc(e,t){
  var n=t.value;
  if(n==null){
    if(n=t.children,t=t.defaultValue,n!=null){
      if(t!=null)throw Error(j(92));
      if(So(n)){
        if(1<n.length)throw Error(j(93));
        n=n[0]
      }t=n
    }t==null&&(t=""),n=t
  }e._wrapperState={
    initialValue:jn(n)
  }
}function Jf(e,t){
  var n=jn(t.value),r=jn(t.defaultValue);
  n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)
}function Dc(e){
  var t=e.textContent;
  t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)
}function Zf(e){
  switch(e){
    case"svg":return"http://www.w3.org/2000/svg";
    case"math":return"http://www.w3.org/1998/Math/MathML";
    default:return"http://www.w3.org/1999/xhtml"
  }
}function sl(e,t){
  return e==null||e==="http://www.w3.org/1999/xhtml"?Zf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e
}var Ci,ep=function(e){
  return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){
    MSApp.execUnsafeLocalFunction(function(){
      return e(t,n,r,o)
    })
  }:e
}(function(e,t){
  if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;
  else{
    for(Ci=Ci||document.createElement("div"),Ci.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ci.firstChild;
    e.firstChild;
    )e.removeChild(e.firstChild);
    for(;
    t.firstChild;
    )e.appendChild(t.firstChild)
  }
});
function Io(e,t){
  if(t){
    var n=e.firstChild;
    if(n&&n===e.lastChild&&n.nodeType===3){
      n.nodeValue=t;
      return
    }
  }e.textContent=t
}var Po={
  animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0
},pv=["Webkit","ms","Moz","O"];
Object.keys(Po).forEach(function(e){
  pv.forEach(function(t){
    t=t+e.charAt(0).toUpperCase()+e.substring(1),Po[t]=Po[e]
  })
});
function tp(e,t,n){
  return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Po.hasOwnProperty(e)&&Po[e]?(""+t).trim():t+"px"
}function np(e,t){
  e=e.style;
  for(var n in t)if(t.hasOwnProperty(n)){
    var r=n.indexOf("--")===0,o=tp(n,t[n],r);
    n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o
  }
}var mv=ce({
  menuitem:!0
},{
  area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0
});
function al(e,t){
  if(t){
    if(mv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));
    if(t.dangerouslySetInnerHTML!=null){
      if(t.children!=null)throw Error(j(60));
      if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))
    }if(t.style!=null&&typeof t.style!="object")throw Error(j(62))
  }
}function ll(e,t){
  if(e.indexOf("-")===-1)return typeof t.is=="string";
  switch(e){
    case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;
    default:return!0
  }
}var ul=null;
function gu(e){
  return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e
}var cl=null,Ar=null,Or=null;
function Ic(e){
  if(e=ci(e)){
    if(typeof cl!="function")throw Error(j(280));
    var t=e.stateNode;
    t&&(t=qs(t),cl(e.stateNode,e.type,t))
  }
}function rp(e){
  Ar?Or?Or.push(e):Or=[e]:Ar=e
}function op(){
  if(Ar){
    var e=Ar,t=Or;
    if(Or=Ar=null,Ic(e),t)for(e=0;
    e<t.length;
    e++)Ic(t[e])
  }
}function ip(e,t){
  return e(t)
}function sp(){
  
}var xa=!1;
function ap(e,t,n){
  if(xa)return e(t,n);
  xa=!0;
  try{
    return ip(e,t,n)
  }finally{
    xa=!1,(Ar!==null||Or!==null)&&(sp(),op())
  }
}function Fo(e,t){
  var n=e.stateNode;
  if(n===null)return null;
  var r=qs(n);
  if(r===null)return null;
  n=r[t];
  e:switch(t){
    case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;
    break e;
    default:e=!1
  }if(e)return null;
  if(n&&typeof n!="function")throw Error(j(231,t,typeof n));
  return n
}var dl=!1;
if(Vt)try{
  var po={
    
  };
  Object.defineProperty(po,"passive",{
    get:function(){
      dl=!0
    }
  }),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)
}catch{
  dl=!1
}function hv(e,t,n,r,o,i,s,a,l){
  var u=Array.prototype.slice.call(arguments,3);
  try{
    t.apply(n,u)
  }catch(c){
    this.onError(c)
  }
}var No=!1,ls=null,us=!1,fl=null,gv={
  onError:function(e){
    No=!0,ls=e
  }
};
function vv(e,t,n,r,o,i,s,a,l){
  No=!1,ls=null,hv.apply(gv,arguments)
}function yv(e,t,n,r,o,i,s,a,l){
  if(vv.apply(this,arguments),No){
    if(No){
      var u=ls;
      No=!1,ls=null
    }else throw Error(j(198));
    us||(us=!0,fl=u)
  }
}function ur(e){
  var t=e,n=e;
  if(e.alternate)for(;
  t.return;
  )t=t.return;
  else{
    e=t;
    do t=e,t.flags&4098&&(n=t.return),e=t.return;
    while(e)
  }return t.tag===3?n:null
}function lp(e){
  if(e.tag===13){
    var t=e.memoizedState;
    if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated
  }return null
}function Fc(e){
  if(ur(e)!==e)throw Error(j(188))
}function wv(e){
  var t=e.alternate;
  if(!t){
    if(t=ur(e),t===null)throw Error(j(188));
    return t!==e?null:e
  }for(var n=e,r=t;
  ;
  ){
    var o=n.return;
    if(o===null)break;
    var i=o.alternate;
    if(i===null){
      if(r=o.return,r!==null){
        n=r;
        continue
      }break
    }if(o.child===i.child){
      for(i=o.child;
      i;
      ){
        if(i===n)return Fc(o),e;
        if(i===r)return Fc(o),t;
        i=i.sibling
      }throw Error(j(188))
    }if(n.return!==r.return)n=o,r=i;
    else{
      for(var s=!1,a=o.child;
      a;
      ){
        if(a===n){
          s=!0,n=o,r=i;
          break
        }if(a===r){
          s=!0,r=o,n=i;
          break
        }a=a.sibling
      }if(!s){
        for(a=i.child;
        a;
        ){
          if(a===n){
            s=!0,n=i,r=o;
            break
          }if(a===r){
            s=!0,r=i,n=o;
            break
          }a=a.sibling
        }if(!s)throw Error(j(189))
      }
    }if(n.alternate!==r)throw Error(j(190))
  }if(n.tag!==3)throw Error(j(188));
  return n.stateNode.current===n?e:t
}function up(e){
  return e=wv(e),e!==null?cp(e):null
}function cp(e){
  if(e.tag===5||e.tag===6)return e;
  for(e=e.child;
  e!==null;
  ){
    var t=cp(e);
    if(t!==null)return t;
    e=e.sibling
  }return null
}var dp=Ye.unstable_scheduleCallback,zc=Ye.unstable_cancelCallback,xv=Ye.unstable_shouldYield,bv=Ye.unstable_requestPaint,pe=Ye.unstable_now,kv=Ye.unstable_getCurrentPriorityLevel,vu=Ye.unstable_ImmediatePriority,fp=Ye.unstable_UserBlockingPriority,cs=Ye.unstable_NormalPriority,Sv=Ye.unstable_LowPriority,pp=Ye.unstable_IdlePriority,zs=null,Lt=null;
function Ev(e){
  if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{
    Lt.onCommitFiberRoot(zs,e,void 0,(e.current.flags&128)===128)
  }catch{
    
  }
}var yt=Math.clz32?Math.clz32:Nv,Cv=Math.log,Pv=Math.LN2;
function Nv(e){
  return e>>>=0,e===0?32:31-(Cv(e)/Pv|0)|0
}var Pi=64,Ni=4194304;
function Eo(e){
  switch(e&-e){
    case 1:return 1;
    case 2:return 2;
    case 4:return 4;
    case 8:return 8;
    case 16:return 16;
    case 32:return 32;
    case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;
    case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;
    case 134217728:return 134217728;
    case 268435456:return 268435456;
    case 536870912:return 536870912;
    case 1073741824:return 1073741824;
    default:return e
  }
}function ds(e,t){
  var n=e.pendingLanes;
  if(n===0)return 0;
  var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;
  if(s!==0){
    var a=s&~o;
    a!==0?r=Eo(a):(i&=s,i!==0&&(r=Eo(i)))
  }else s=n&~o,s!==0?r=Eo(s):i!==0&&(r=Eo(i));
  if(r===0)return 0;
  if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;
  if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;
  0<t;
  )n=31-yt(t),o=1<<n,r|=e[n],t&=~o;
  return r
}function Tv(e,t){
  switch(e){
    case 1:case 2:case 4:return t+250;
    case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;
    case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;
    case 134217728:case 268435456:case 536870912:case 1073741824:return-1;
    default:return-1
  }
}function Rv(e,t){
  for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;
  0<i;
  ){
    var s=31-yt(i),a=1<<s,l=o[s];
    l===-1?(!(a&n)||a&r)&&(o[s]=Tv(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a
  }
}function pl(e){
  return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0
}function mp(){
  var e=Pi;
  return Pi<<=1,!(Pi&4194240)&&(Pi=64),e
}function ba(e){
  for(var t=[],n=0;
  31>n;
  n++)t.push(e);
  return t
}function li(e,t,n){
  e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n
}function jv(e,t){
  var n=e.pendingLanes&~t;
  e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;
  var r=e.eventTimes;
  for(e=e.expirationTimes;
  0<n;
  ){
    var o=31-yt(n),i=1<<o;
    t[o]=0,r[o]=-1,e[o]=-1,n&=~i
  }
}function yu(e,t){
  var n=e.entangledLanes|=t;
  for(e=e.entanglements;
  n;
  ){
    var r=31-yt(n),o=1<<r;
    o&t|e[r]&t&&(e[r]|=t),n&=~o
  }
}var ee=0;
function hp(e){
  return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1
}var gp,wu,vp,yp,wp,ml=!1,Ti=[],bn=null,kn=null,Sn=null,zo=new Map,$o=new Map,dn=[],Lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function $c(e,t){
  switch(e){
    case"focusin":case"focusout":bn=null;
    break;
    case"dragenter":case"dragleave":kn=null;
    break;
    case"mouseover":case"mouseout":Sn=null;
    break;
    case"pointerover":case"pointerout":zo.delete(t.pointerId);
    break;
    case"gotpointercapture":case"lostpointercapture":$o.delete(t.pointerId)
  }
}function mo(e,t,n,r,o,i){
  return e===null||e.nativeEvent!==i?(e={
    blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]
  },t!==null&&(t=ci(t),t!==null&&wu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)
}function Av(e,t,n,r,o){
  switch(t){
    case"focusin":return bn=mo(bn,e,t,n,r,o),!0;
    case"dragenter":return kn=mo(kn,e,t,n,r,o),!0;
    case"mouseover":return Sn=mo(Sn,e,t,n,r,o),!0;
    case"pointerover":var i=o.pointerId;
    return zo.set(i,mo(zo.get(i)||null,e,t,n,r,o)),!0;
    case"gotpointercapture":return i=o.pointerId,$o.set(i,mo($o.get(i)||null,e,t,n,r,o)),!0
  }return!1
}function xp(e){
  var t=Wn(e.target);
  if(t!==null){
    var n=ur(t);
    if(n!==null){
      if(t=n.tag,t===13){
        if(t=lp(n),t!==null){
          e.blockedOn=t,wp(e.priority,function(){
            vp(n)
          });
          return
        }
      }else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){
        e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;
        return
      }
    }
  }e.blockedOn=null
}function Hi(e){
  if(e.blockedOn!==null)return!1;
  for(var t=e.targetContainers;
  0<t.length;
  ){
    var n=hl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);
    if(n===null){
      n=e.nativeEvent;
      var r=new n.constructor(n.type,n);
      ul=r,n.target.dispatchEvent(r),ul=null
    }else return t=ci(n),t!==null&&wu(t),e.blockedOn=n,!1;
    t.shift()
  }return!0
}function Bc(e,t,n){
  Hi(e)&&n.delete(t)
}function Ov(){
  ml=!1,bn!==null&&Hi(bn)&&(bn=null),kn!==null&&Hi(kn)&&(kn=null),Sn!==null&&Hi(Sn)&&(Sn=null),zo.forEach(Bc),$o.forEach(Bc)
}function ho(e,t){
  e.blockedOn===t&&(e.blockedOn=null,ml||(ml=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,Ov)))
}function Bo(e){
  function t(o){
    return ho(o,e)
  }if(0<Ti.length){
    ho(Ti[0],e);
    for(var n=1;
    n<Ti.length;
    n++){
      var r=Ti[n];
      r.blockedOn===e&&(r.blockedOn=null)
    }
  }for(bn!==null&&ho(bn,e),kn!==null&&ho(kn,e),Sn!==null&&ho(Sn,e),zo.forEach(t),$o.forEach(t),n=0;
  n<dn.length;
  n++)r=dn[n],r.blockedOn===e&&(r.blockedOn=null);
  for(;
  0<dn.length&&(n=dn[0],n.blockedOn===null);
  )xp(n),n.blockedOn===null&&dn.shift()
}var _r=Yt.ReactCurrentBatchConfig,fs=!0;
function _v(e,t,n,r){
  var o=ee,i=_r.transition;
  _r.transition=null;
  try{
    ee=1,xu(e,t,n,r)
  }finally{
    ee=o,_r.transition=i
  }
}function Mv(e,t,n,r){
  var o=ee,i=_r.transition;
  _r.transition=null;
  try{
    ee=4,xu(e,t,n,r)
  }finally{
    ee=o,_r.transition=i
  }
}function xu(e,t,n,r){
  if(fs){
    var o=hl(e,t,n,r);
    if(o===null)La(e,t,r,ps,n),$c(e,r);
    else if(Av(o,e,t,n,r))r.stopPropagation();
    else if($c(e,r),t&4&&-1<Lv.indexOf(e)){
      for(;
      o!==null;
      ){
        var i=ci(o);
        if(i!==null&&gp(i),i=hl(e,t,n,r),i===null&&La(e,t,r,ps,n),i===o)break;
        o=i
      }o!==null&&r.stopPropagation()
    }else La(e,t,r,null,n)
  }
}var ps=null;
function hl(e,t,n,r){
  if(ps=null,e=gu(r),e=Wn(e),e!==null)if(t=ur(e),t===null)e=null;
  else if(n=t.tag,n===13){
    if(e=lp(t),e!==null)return e;
    e=null
  }else if(n===3){
    if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;
    e=null
  }else t!==e&&(e=null);
  return ps=e,null
}function bp(e){
  switch(e){
    case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;
    case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;
    case"message":switch(kv()){
      case vu:return 1;
      case fp:return 4;
      case cs:case Sv:return 16;
      case pp:return 536870912;
      default:return 16
    }default:return 16
  }
}var yn=null,bu=null,Qi=null;
function kp(){
  if(Qi)return Qi;
  var e,t=bu,n=t.length,r,o="value"in yn?yn.value:yn.textContent,i=o.length;
  for(e=0;
  e<n&&t[e]===o[e];
  e++);
  var s=n-e;
  for(r=1;
  r<=s&&t[n-r]===o[i-r];
  r++);
  return Qi=o.slice(e,1<r?1-r:void 0)
}function Ki(e){
  var t=e.keyCode;
  return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0
}function Ri(){
  return!0
}function Uc(){
  return!1
}function Je(e){
  function t(n,r,o,i,s){
    this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;
    for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);
    return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ri:Uc,this.isPropagationStopped=Uc,this
  }return ce(t.prototype,{
    preventDefault:function(){
      this.defaultPrevented=!0;
      var n=this.nativeEvent;
      n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ri)
    },stopPropagation:function(){
      var n=this.nativeEvent;
      n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ri)
    },persist:function(){
      
    },isPersistent:Ri
  }),t
}var ro={
  eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){
    return e.timeStamp||Date.now()
  },defaultPrevented:0,isTrusted:0
},ku=Je(ro),ui=ce({
  
},ro,{
  view:0,detail:0
}),Dv=Je(ui),ka,Sa,go,$s=ce({
  
},ui,{
  screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(e){
    return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget
  },movementX:function(e){
    return"movementX"in e?e.movementX:(e!==go&&(go&&e.type==="mousemove"?(ka=e.screenX-go.screenX,Sa=e.screenY-go.screenY):Sa=ka=0,go=e),ka)
  },movementY:function(e){
    return"movementY"in e?e.movementY:Sa
  }
}),qc=Je($s),Iv=ce({
  
},$s,{
  dataTransfer:0
}),Fv=Je(Iv),zv=ce({
  
},ui,{
  relatedTarget:0
}),Ea=Je(zv),$v=ce({
  
},ro,{
  animationName:0,elapsedTime:0,pseudoElement:0
}),Bv=Je($v),Uv=ce({
  
},ro,{
  clipboardData:function(e){
    return"clipboardData"in e?e.clipboardData:window.clipboardData
  }
}),qv=Je(Uv),Vv=ce({
  
},ro,{
  data:0
}),Vc=Je(Vv),Wv={
  Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"
},Hv={
  8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"
},Qv={
  Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"
};
function Kv(e){
  var t=this.nativeEvent;
  return t.getModifierState?t.getModifierState(e):(e=Qv[e])?!!t[e]:!1
}function Su(){
  return Kv
}var Gv=ce({
  
},ui,{
  key:function(e){
    if(e.key){
      var t=Wv[e.key]||e.key;
      if(t!=="Unidentified")return t
    }return e.type==="keypress"?(e=Ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hv[e.keyCode]||"Unidentified":""
  },code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(e){
    return e.type==="keypress"?Ki(e):0
  },keyCode:function(e){
    return e.type==="keydown"||e.type==="keyup"?e.keyCode:0
  },which:function(e){
    return e.type==="keypress"?Ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0
  }
}),Yv=Je(Gv),Xv=ce({
  
},$s,{
  pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0
}),Wc=Je(Xv),Jv=ce({
  
},ui,{
  touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su
}),Zv=Je(Jv),ey=ce({
  
},ro,{
  propertyName:0,elapsedTime:0,pseudoElement:0
}),ty=Je(ey),ny=ce({
  
},$s,{
  deltaX:function(e){
    return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0
  },deltaY:function(e){
    return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0
  },deltaZ:0,deltaMode:0
}),ry=Je(ny),oy=[9,13,27,32],Eu=Vt&&"CompositionEvent"in window,To=null;
Vt&&"documentMode"in document&&(To=document.documentMode);
var iy=Vt&&"TextEvent"in window&&!To,Sp=Vt&&(!Eu||To&&8<To&&11>=To),Hc=" ",Qc=!1;
function Ep(e,t){
  switch(e){
    case"keyup":return oy.indexOf(t.keyCode)!==-1;
    case"keydown":return t.keyCode!==229;
    case"keypress":case"mousedown":case"focusout":return!0;
    default:return!1
  }
}function Cp(e){
  return e=e.detail,typeof e=="object"&&"data"in e?e.data:null
}var br=!1;
function sy(e,t){
  switch(e){
    case"compositionend":return Cp(t);
    case"keypress":return t.which!==32?null:(Qc=!0,Hc);
    case"textInput":return e=t.data,e===Hc&&Qc?null:e;
    default:return null
  }
}function ay(e,t){
  if(br)return e==="compositionend"||!Eu&&Ep(e,t)?(e=kp(),Qi=bu=yn=null,br=!1,e):null;
  switch(e){
    case"paste":return null;
    case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){
      if(t.char&&1<t.char.length)return t.char;
      if(t.which)return String.fromCharCode(t.which)
    }return null;
    case"compositionend":return Sp&&t.locale!=="ko"?null:t.data;
    default:return null
  }
}var ly={
  color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0
};
function Kc(e){
  var t=e&&e.nodeName&&e.nodeName.toLowerCase();
  return t==="input"?!!ly[e.type]:t==="textarea"
}function Pp(e,t,n,r){
  rp(r),t=ms(t,"onChange"),0<t.length&&(n=new ku("onChange","change",null,n,r),e.push({
    event:n,listeners:t
  }))
}var Ro=null,Uo=null;
function uy(e){
  Ip(e,0)
}function Bs(e){
  var t=Er(e);
  if(Yf(t))return e
}function cy(e,t){
  if(e==="change")return t
}var Np=!1;
if(Vt){
  var Ca;
  if(Vt){
    var Pa="oninput"in document;
    if(!Pa){
      var Gc=document.createElement("div");
      Gc.setAttribute("oninput","return;"),Pa=typeof Gc.oninput=="function"
    }Ca=Pa
  }else Ca=!1;
  Np=Ca&&(!document.documentMode||9<document.documentMode)
}function Yc(){
  Ro&&(Ro.detachEvent("onpropertychange",Tp),Uo=Ro=null)
}function Tp(e){
  if(e.propertyName==="value"&&Bs(Uo)){
    var t=[];
    Pp(t,Uo,e,gu(e)),ap(uy,t)
  }
}function dy(e,t,n){
  e==="focusin"?(Yc(),Ro=t,Uo=n,Ro.attachEvent("onpropertychange",Tp)):e==="focusout"&&Yc()
}function fy(e){
  if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bs(Uo)
}function py(e,t){
  if(e==="click")return Bs(t)
}function my(e,t){
  if(e==="input"||e==="change")return Bs(t)
}function hy(e,t){
  return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t
}var xt=typeof Object.is=="function"?Object.is:hy;
function qo(e,t){
  if(xt(e,t))return!0;
  if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;
  var n=Object.keys(e),r=Object.keys(t);
  if(n.length!==r.length)return!1;
  for(r=0;
  r<n.length;
  r++){
    var o=n[r];
    if(!Xa.call(t,o)||!xt(e[o],t[o]))return!1
  }return!0
}function Xc(e){
  for(;
  e&&e.firstChild;
  )e=e.firstChild;
  return e
}function Jc(e,t){
  var n=Xc(e);
  e=0;
  for(var r;
  n;
  ){
    if(n.nodeType===3){
      if(r=e+n.textContent.length,e<=t&&r>=t)return{
        node:n,offset:t-e
      };
      e=r
    }e:{
      for(;
      n;
      ){
        if(n.nextSibling){
          n=n.nextSibling;
          break e
        }n=n.parentNode
      }n=void 0
    }n=Xc(n)
  }
}function Rp(e,t){
  return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1
}function jp(){
  for(var e=window,t=as();
  t instanceof e.HTMLIFrameElement;
  ){
    try{
      var n=typeof t.contentWindow.location.href=="string"
    }catch{
      n=!1
    }if(n)e=t.contentWindow;
    else break;
    t=as(e.document)
  }return t
}function Cu(e){
  var t=e&&e.nodeName&&e.nodeName.toLowerCase();
  return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")
}function gy(e){
  var t=jp(),n=e.focusedElem,r=e.selectionRange;
  if(t!==n&&n&&n.ownerDocument&&Rp(n.ownerDocument.documentElement,n)){
    if(r!==null&&Cu(n)){
      if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);
      else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){
        e=e.getSelection();
        var o=n.textContent.length,i=Math.min(r.start,o);
        r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Jc(n,i);
        var s=Jc(n,r);
        o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))
      }
    }for(t=[],e=n;
    e=e.parentNode;
    )e.nodeType===1&&t.push({
      element:e,left:e.scrollLeft,top:e.scrollTop
    });
    for(typeof n.focus=="function"&&n.focus(),n=0;
    n<t.length;
    n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top
  }
}var vy=Vt&&"documentMode"in document&&11>=document.documentMode,kr=null,gl=null,jo=null,vl=!1;
function Zc(e,t,n){
  var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;
  vl||kr==null||kr!==as(r)||(r=kr,"selectionStart"in r&&Cu(r)?r={
    start:r.selectionStart,end:r.selectionEnd
  }:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={
    anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset
  }),jo&&qo(jo,r)||(jo=r,r=ms(gl,"onSelect"),0<r.length&&(t=new ku("onSelect","select",null,t,n),e.push({
    event:t,listeners:r
  }),t.target=kr)))
}function ji(e,t){
  var n={
    
  };
  return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n
}var Sr={
  animationend:ji("Animation","AnimationEnd"),animationiteration:ji("Animation","AnimationIteration"),animationstart:ji("Animation","AnimationStart"),transitionend:ji("Transition","TransitionEnd")
},Na={
  
},Lp={
  
};
Vt&&(Lp=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);
function Us(e){
  if(Na[e])return Na[e];
  if(!Sr[e])return e;
  var t=Sr[e],n;
  for(n in t)if(t.hasOwnProperty(n)&&n in Lp)return Na[e]=t[n];
  return e
}var Ap=Us("animationend"),Op=Us("animationiteration"),_p=Us("animationstart"),Mp=Us("transitionend"),Dp=new Map,ed="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Dn(e,t){
  Dp.set(e,t),lr(t,[e])
}for(var Ta=0;
Ta<ed.length;
Ta++){
  var Ra=ed[Ta],yy=Ra.toLowerCase(),wy=Ra[0].toUpperCase()+Ra.slice(1);
  Dn(yy,"on"+wy)
}Dn(Ap,"onAnimationEnd");
Dn(Op,"onAnimationIteration");
Dn(_p,"onAnimationStart");
Dn("dblclick","onDoubleClick");
Dn("focusin","onFocus");
Dn("focusout","onBlur");
Dn(Mp,"onTransitionEnd");
Qr("onMouseEnter",["mouseout","mouseover"]);
Qr("onMouseLeave",["mouseout","mouseover"]);
Qr("onPointerEnter",["pointerout","pointerover"]);
Qr("onPointerLeave",["pointerout","pointerover"]);
lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));
lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);
lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));
function td(e,t,n){
  var r=e.type||"unknown-event";
  e.currentTarget=n,yv(r,t,void 0,e),e.currentTarget=null
}function Ip(e,t){
  t=(t&4)!==0;
  for(var n=0;
  n<e.length;
  n++){
    var r=e[n],o=r.event;
    r=r.listeners;
    e:{
      var i=void 0;
      if(t)for(var s=r.length-1;
      0<=s;
      s--){
        var a=r[s],l=a.instance,u=a.currentTarget;
        if(a=a.listener,l!==i&&o.isPropagationStopped())break e;
        td(o,a,u),i=l
      }else for(s=0;
      s<r.length;
      s++){
        if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;
        td(o,a,u),i=l
      }
    }
  }if(us)throw e=fl,us=!1,fl=null,e
}function oe(e,t){
  var n=t[kl];
  n===void 0&&(n=t[kl]=new Set);
  var r=e+"__bubble";
  n.has(r)||(Fp(t,e,2,!1),n.add(r))
}function ja(e,t,n){
  var r=0;
  t&&(r|=4),Fp(n,e,r,t)
}var Li="_reactListening"+Math.random().toString(36).slice(2);
function Vo(e){
  if(!e[Li]){
    e[Li]=!0,Wf.forEach(function(n){
      n!=="selectionchange"&&(xy.has(n)||ja(n,!1,e),ja(n,!0,e))
    });
    var t=e.nodeType===9?e:e.ownerDocument;
    t===null||t[Li]||(t[Li]=!0,ja("selectionchange",!1,t))
  }
}function Fp(e,t,n,r){
  switch(bp(t)){
    case 1:var o=_v;
    break;
    case 4:o=Mv;
    break;
    default:o=xu
  }n=o.bind(null,t,n,e),o=void 0,!dl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{
    capture:!0,passive:o
  }):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{
    passive:o
  }):e.addEventListener(t,n,!1)
}function La(e,t,n,r,o){
  var i=r;
  if(!(t&1)&&!(t&2)&&r!==null)e:for(;
  ;
  ){
    if(r===null)return;
    var s=r.tag;
    if(s===3||s===4){
      var a=r.stateNode.containerInfo;
      if(a===o||a.nodeType===8&&a.parentNode===o)break;
      if(s===4)for(s=r.return;
      s!==null;
      ){
        var l=s.tag;
        if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;
        s=s.return
      }for(;
      a!==null;
      ){
        if(s=Wn(a),s===null)return;
        if(l=s.tag,l===5||l===6){
          r=i=s;
          continue e
        }a=a.parentNode
      }
    }r=r.return
  }ap(function(){
    var u=i,c=gu(n),d=[];
    e:{
      var m=Dp.get(e);
      if(m!==void 0){
        var f=ku,b=e;
        switch(e){
          case"keypress":if(Ki(n)===0)break e;
          case"keydown":case"keyup":f=Yv;
          break;
          case"focusin":b="focus",f=Ea;
          break;
          case"focusout":b="blur",f=Ea;
          break;
          case"beforeblur":case"afterblur":f=Ea;
          break;
          case"click":if(n.button===2)break e;
          case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=qc;
          break;
          case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Fv;
          break;
          case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=Zv;
          break;
          case Ap:case Op:case _p:f=Bv;
          break;
          case Mp:f=ty;
          break;
          case"scroll":f=Dv;
          break;
          case"wheel":f=ry;
          break;
          case"copy":case"cut":case"paste":f=qv;
          break;
          case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Wc
        }var y=(t&4)!==0,x=!y&&e==="scroll",g=y?m!==null?m+"Capture":null:m;
        y=[];
        for(var h=u,v;
        h!==null;
        ){
          v=h;
          var k=v.stateNode;
          if(v.tag===5&&k!==null&&(v=k,g!==null&&(k=Fo(h,g),k!=null&&y.push(Wo(h,k,v)))),x)break;
          h=h.return
        }0<y.length&&(m=new f(m,b,null,n,c),d.push({
          event:m,listeners:y
        }))
      }
    }if(!(t&7)){
      e:{
        if(m=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",m&&n!==ul&&(b=n.relatedTarget||n.fromElement)&&(Wn(b)||b[Wt]))break e;
        if((f||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,f?(b=n.relatedTarget||n.toElement,f=u,b=b?Wn(b):null,b!==null&&(x=ur(b),b!==x||b.tag!==5&&b.tag!==6)&&(b=null)):(f=null,b=u),f!==b)){
          if(y=qc,k="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=Wc,k="onPointerLeave",g="onPointerEnter",h="pointer"),x=f==null?m:Er(f),v=b==null?m:Er(b),m=new y(k,h+"leave",f,n,c),m.target=x,m.relatedTarget=v,k=null,Wn(c)===u&&(y=new y(g,h+"enter",b,n,c),y.target=v,y.relatedTarget=x,k=y),x=k,f&&b)t:{
            for(y=f,g=b,h=0,v=y;
            v;
            v=yr(v))h++;
            for(v=0,k=g;
            k;
            k=yr(k))v++;
            for(;
            0<h-v;
            )y=yr(y),h--;
            for(;
            0<v-h;
            )g=yr(g),v--;
            for(;
            h--;
            ){
              if(y===g||g!==null&&y===g.alternate)break t;
              y=yr(y),g=yr(g)
            }y=null
          }else y=null;
          f!==null&&nd(d,m,f,y,!1),b!==null&&x!==null&&nd(d,x,b,y,!0)
        }
      }e:{
        if(m=u?Er(u):window,f=m.nodeName&&m.nodeName.toLowerCase(),f==="select"||f==="input"&&m.type==="file")var S=cy;
        else if(Kc(m))if(Np)S=my;
        else{
          S=fy;
          var E=dy
        }else(f=m.nodeName)&&f.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=py);
        if(S&&(S=S(e,u))){
          Pp(d,S,n,c);
          break e
        }E&&E(e,m,u),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&ol(m,"number",m.value)
      }switch(E=u?Er(u):window,e){
        case"focusin":(Kc(E)||E.contentEditable==="true")&&(kr=E,gl=u,jo=null);
        break;
        case"focusout":jo=gl=kr=null;
        break;
        case"mousedown":vl=!0;
        break;
        case"contextmenu":case"mouseup":case"dragend":vl=!1,Zc(d,n,c);
        break;
        case"selectionchange":if(vy)break;
        case"keydown":case"keyup":Zc(d,n,c)
      }var C;
      if(Eu)e:{
        switch(e){
          case"compositionstart":var R="onCompositionStart";
          break e;
          case"compositionend":R="onCompositionEnd";
          break e;
          case"compositionupdate":R="onCompositionUpdate";
          break e
        }R=void 0
      }else br?Ep(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");
      R&&(Sp&&n.locale!=="ko"&&(br||R!=="onCompositionStart"?R==="onCompositionEnd"&&br&&(C=kp()):(yn=c,bu="value"in yn?yn.value:yn.textContent,br=!0)),E=ms(u,R),0<E.length&&(R=new Vc(R,e,null,n,c),d.push({
        event:R,listeners:E
      }),C?R.data=C:(C=Cp(n),C!==null&&(R.data=C)))),(C=iy?sy(e,n):ay(e,n))&&(u=ms(u,"onBeforeInput"),0<u.length&&(c=new Vc("onBeforeInput","beforeinput",null,n,c),d.push({
        event:c,listeners:u
      }),c.data=C))
    }Ip(d,t)
  })
}function Wo(e,t,n){
  return{
    instance:e,listener:t,currentTarget:n
  }
}function ms(e,t){
  for(var n=t+"Capture",r=[];
  e!==null;
  ){
    var o=e,i=o.stateNode;
    o.tag===5&&i!==null&&(o=i,i=Fo(e,n),i!=null&&r.unshift(Wo(e,i,o)),i=Fo(e,t),i!=null&&r.push(Wo(e,i,o))),e=e.return
  }return r
}function yr(e){
  if(e===null)return null;
  do e=e.return;
  while(e&&e.tag!==5);
  return e||null
}function nd(e,t,n,r,o){
  for(var i=t._reactName,s=[];
  n!==null&&n!==r;
  ){
    var a=n,l=a.alternate,u=a.stateNode;
    if(l!==null&&l===r)break;
    a.tag===5&&u!==null&&(a=u,o?(l=Fo(n,i),l!=null&&s.unshift(Wo(n,l,a))):o||(l=Fo(n,i),l!=null&&s.push(Wo(n,l,a)))),n=n.return
  }s.length!==0&&e.push({
    event:t,listeners:s
  })
}var by=/\r\n?/g,ky=/\u0000|\uFFFD/g;
function rd(e){
  return(typeof e=="string"?e:""+e).replace(by,`
`).replace(ky,"")
}function Ai(e,t,n){
  if(t=rd(t),rd(e)!==t&&n)throw Error(j(425))
}function hs(){
  
}var yl=null,wl=null;
function xl(e,t){
  return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null
}var bl=typeof setTimeout=="function"?setTimeout:void 0,Sy=typeof clearTimeout=="function"?clearTimeout:void 0,od=typeof Promise=="function"?Promise:void 0,Ey=typeof queueMicrotask=="function"?queueMicrotask:typeof od<"u"?function(e){
  return od.resolve(null).then(e).catch(Cy)
}:bl;
function Cy(e){
  setTimeout(function(){
    throw e
  })
}function Aa(e,t){
  var n=t,r=0;
  do{
    var o=n.nextSibling;
    if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){
      if(r===0){
        e.removeChild(o),Bo(t);
        return
      }r--
    }else n!=="$"&&n!=="$?"&&n!=="$!"||r++;
    n=o
  }while(n);
  Bo(t)
}function En(e){
  for(;
  e!=null;
  e=e.nextSibling){
    var t=e.nodeType;
    if(t===1||t===3)break;
    if(t===8){
      if(t=e.data,t==="$"||t==="$!"||t==="$?")break;
      if(t==="/$")return null
    }
  }return e
}function id(e){
  e=e.previousSibling;
  for(var t=0;
  e;
  ){
    if(e.nodeType===8){
      var n=e.data;
      if(n==="$"||n==="$!"||n==="$?"){
        if(t===0)return e;
        t--
      }else n==="/$"&&t++
    }e=e.previousSibling
  }return null
}var oo=Math.random().toString(36).slice(2),Rt="__reactFiber$"+oo,Ho="__reactProps$"+oo,Wt="__reactContainer$"+oo,kl="__reactEvents$"+oo,Py="__reactListeners$"+oo,Ny="__reactHandles$"+oo;
function Wn(e){
  var t=e[Rt];
  if(t)return t;
  for(var n=e.parentNode;
  n;
  ){
    if(t=n[Wt]||n[Rt]){
      if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=id(e);
      e!==null;
      ){
        if(n=e[Rt])return n;
        e=id(e)
      }return t
    }e=n,n=e.parentNode
  }return null
}function ci(e){
  return e=e[Rt]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e
}function Er(e){
  if(e.tag===5||e.tag===6)return e.stateNode;
  throw Error(j(33))
}function qs(e){
  return e[Ho]||null
}var Sl=[],Cr=-1;
function In(e){
  return{
    current:e
  }
}function ie(e){
  0>Cr||(e.current=Sl[Cr],Sl[Cr]=null,Cr--)
}function ne(e,t){
  Cr++,Sl[Cr]=e.current,e.current=t
}var Ln={
  
},Le=In(Ln),Be=In(!1),nr=Ln;
function Kr(e,t){
  var n=e.type.contextTypes;
  if(!n)return Ln;
  var r=e.stateNode;
  if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;
  var o={
    
  },i;
  for(i in n)o[i]=t[i];
  return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o
}function Ue(e){
  return e=e.childContextTypes,e!=null
}function gs(){
  ie(Be),ie(Le)
}function sd(e,t,n){
  if(Le.current!==Ln)throw Error(j(168));
  ne(Le,t),ne(Be,n)
}function zp(e,t,n){
  var r=e.stateNode;
  if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;
  r=r.getChildContext();
  for(var o in r)if(!(o in t))throw Error(j(108,dv(e)||"Unknown",o));
  return ce({
    
  },n,r)
}function vs(e){
  return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ln,nr=Le.current,ne(Le,e),ne(Be,Be.current),!0
}function ad(e,t,n){
  var r=e.stateNode;
  if(!r)throw Error(j(169));
  n?(e=zp(e,t,nr),r.__reactInternalMemoizedMergedChildContext=e,ie(Be),ie(Le),ne(Le,e)):ie(Be),ne(Be,n)
}var zt=null,Vs=!1,Oa=!1;
function $p(e){
  zt===null?zt=[e]:zt.push(e)
}function Ty(e){
  Vs=!0,$p(e)
}function Fn(){
  if(!Oa&&zt!==null){
    Oa=!0;
    var e=0,t=ee;
    try{
      var n=zt;
      for(ee=1;
      e<n.length;
      e++){
        var r=n[e];
        do r=r(!0);
        while(r!==null)
      }zt=null,Vs=!1
    }catch(o){
      throw zt!==null&&(zt=zt.slice(e+1)),dp(vu,Fn),o
    }finally{
      ee=t,Oa=!1
    }
  }return null
}var Pr=[],Nr=0,ys=null,ws=0,tt=[],nt=0,rr=null,Bt=1,Ut="";
function qn(e,t){
  Pr[Nr++]=ws,Pr[Nr++]=ys,ys=e,ws=t
}function Bp(e,t,n){
  tt[nt++]=Bt,tt[nt++]=Ut,tt[nt++]=rr,rr=e;
  var r=Bt;
  e=Ut;
  var o=32-yt(r)-1;
  r&=~(1<<o),n+=1;
  var i=32-yt(t)+o;
  if(30<i){
    var s=o-o%5;
    i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Bt=1<<32-yt(t)+o|n<<o|r,Ut=i+e
  }else Bt=1<<i|n<<o|r,Ut=e
}function Pu(e){
  e.return!==null&&(qn(e,1),Bp(e,1,0))
}function Nu(e){
  for(;
  e===ys;
  )ys=Pr[--Nr],Pr[Nr]=null,ws=Pr[--Nr],Pr[Nr]=null;
  for(;
  e===rr;
  )rr=tt[--nt],tt[nt]=null,Ut=tt[--nt],tt[nt]=null,Bt=tt[--nt],tt[nt]=null
}var Ke=null,Qe=null,ae=!1,vt=null;
function Up(e,t){
  var n=rt(5,null,null,0);
  n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)
}function ld(e,t){
  switch(e.tag){
    case 5:var n=e.type;
    return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,Qe=En(t.firstChild),!0):!1;
    case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,Qe=null,!0):!1;
    case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rr!==null?{
      id:Bt,overflow:Ut
    }:null,e.memoizedState={
      dehydrated:t,treeContext:n,retryLane:1073741824
    },n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,Qe=null,!0):!1;
    default:return!1
  }
}function El(e){
  return(e.mode&1)!==0&&(e.flags&128)===0
}function Cl(e){
  if(ae){
    var t=Qe;
    if(t){
      var n=t;
      if(!ld(e,t)){
        if(El(e))throw Error(j(418));
        t=En(n.nextSibling);
        var r=Ke;
        t&&ld(e,t)?Up(r,n):(e.flags=e.flags&-4097|2,ae=!1,Ke=e)
      }
    }else{
      if(El(e))throw Error(j(418));
      e.flags=e.flags&-4097|2,ae=!1,Ke=e
    }
  }
}function ud(e){
  for(e=e.return;
  e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;
  )e=e.return;
  Ke=e
}function Oi(e){
  if(e!==Ke)return!1;
  if(!ae)return ud(e),ae=!0,!1;
  var t;
  if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xl(e.type,e.memoizedProps)),t&&(t=Qe)){
    if(El(e))throw qp(),Error(j(418));
    for(;
    t;
    )Up(e,t),t=En(t.nextSibling)
  }if(ud(e),e.tag===13){
    if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));
    e:{
      for(e=e.nextSibling,t=0;
      e;
      ){
        if(e.nodeType===8){
          var n=e.data;
          if(n==="/$"){
            if(t===0){
              Qe=En(e.nextSibling);
              break e
            }t--
          }else n!=="$"&&n!=="$!"&&n!=="$?"||t++
        }e=e.nextSibling
      }Qe=null
    }
  }else Qe=Ke?En(e.stateNode.nextSibling):null;
  return!0
}function qp(){
  for(var e=Qe;
  e;
  )e=En(e.nextSibling)
}function Gr(){
  Qe=Ke=null,ae=!1
}function Tu(e){
  vt===null?vt=[e]:vt.push(e)
}var Ry=Yt.ReactCurrentBatchConfig;
function vo(e,t,n){
  if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){
    if(n._owner){
      if(n=n._owner,n){
        if(n.tag!==1)throw Error(j(309));
        var r=n.stateNode
      }if(!r)throw Error(j(147,e));
      var o=r,i=""+e;
      return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){
        var a=o.refs;
        s===null?delete a[i]:a[i]=s
      },t._stringRef=i,t)
    }if(typeof e!="string")throw Error(j(284));
    if(!n._owner)throw Error(j(290,e))
  }return e
}function _i(e,t){
  throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))
}function cd(e){
  var t=e._init;
  return t(e._payload)
}function Vp(e){
  function t(g,h){
    if(e){
      var v=g.deletions;
      v===null?(g.deletions=[h],g.flags|=16):v.push(h)
    }
  }function n(g,h){
    if(!e)return null;
    for(;
    h!==null;
    )t(g,h),h=h.sibling;
    return null
  }function r(g,h){
    for(g=new Map;
    h!==null;
    )h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;
    return g
  }function o(g,h){
    return g=Tn(g,h),g.index=0,g.sibling=null,g
  }function i(g,h,v){
    return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<h?(g.flags|=2,h):v):(g.flags|=2,h)):(g.flags|=1048576,h)
  }function s(g){
    return e&&g.alternate===null&&(g.flags|=2),g
  }function a(g,h,v,k){
    return h===null||h.tag!==6?(h=$a(v,g.mode,k),h.return=g,h):(h=o(h,v),h.return=g,h)
  }function l(g,h,v,k){
    var S=v.type;
    return S===xr?c(g,h,v.props.children,k,v.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===un&&cd(S)===h.type)?(k=o(h,v.props),k.ref=vo(g,h,v),k.return=g,k):(k=ts(v.type,v.key,v.props,null,g.mode,k),k.ref=vo(g,h,v),k.return=g,k)
  }function u(g,h,v,k){
    return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Ba(v,g.mode,k),h.return=g,h):(h=o(h,v.children||[]),h.return=g,h)
  }function c(g,h,v,k,S){
    return h===null||h.tag!==7?(h=tr(v,g.mode,k,S),h.return=g,h):(h=o(h,v),h.return=g,h)
  }function d(g,h,v){
    if(typeof h=="string"&&h!==""||typeof h=="number")return h=$a(""+h,g.mode,v),h.return=g,h;
    if(typeof h=="object"&&h!==null){
      switch(h.$$typeof){
        case Si:return v=ts(h.type,h.key,h.props,null,g.mode,v),v.ref=vo(g,null,h),v.return=g,v;
        case wr:return h=Ba(h,g.mode,v),h.return=g,h;
        case un:var k=h._init;
        return d(g,k(h._payload),v)
      }if(So(h)||fo(h))return h=tr(h,g.mode,v,null),h.return=g,h;
      _i(g,h)
    }return null
  }function m(g,h,v,k){
    var S=h!==null?h.key:null;
    if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(g,h,""+v,k);
    if(typeof v=="object"&&v!==null){
      switch(v.$$typeof){
        case Si:return v.key===S?l(g,h,v,k):null;
        case wr:return v.key===S?u(g,h,v,k):null;
        case un:return S=v._init,m(g,h,S(v._payload),k)
      }if(So(v)||fo(v))return S!==null?null:c(g,h,v,k,null);
      _i(g,v)
    }return null
  }function f(g,h,v,k,S){
    if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(v)||null,a(h,g,""+k,S);
    if(typeof k=="object"&&k!==null){
      switch(k.$$typeof){
        case Si:return g=g.get(k.key===null?v:k.key)||null,l(h,g,k,S);
        case wr:return g=g.get(k.key===null?v:k.key)||null,u(h,g,k,S);
        case un:var E=k._init;
        return f(g,h,v,E(k._payload),S)
      }if(So(k)||fo(k))return g=g.get(v)||null,c(h,g,k,S,null);
      _i(h,k)
    }return null
  }function b(g,h,v,k){
    for(var S=null,E=null,C=h,R=h=0,L=null;
    C!==null&&R<v.length;
    R++){
      C.index>R?(L=C,C=null):L=C.sibling;
      var A=m(g,C,v[R],k);
      if(A===null){
        C===null&&(C=L);
        break
      }e&&C&&A.alternate===null&&t(g,C),h=i(A,h,R),E===null?S=A:E.sibling=A,E=A,C=L
    }if(R===v.length)return n(g,C),ae&&qn(g,R),S;
    if(C===null){
      for(;
      R<v.length;
      R++)C=d(g,v[R],k),C!==null&&(h=i(C,h,R),E===null?S=C:E.sibling=C,E=C);
      return ae&&qn(g,R),S
    }for(C=r(g,C);
    R<v.length;
    R++)L=f(C,g,R,v[R],k),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?R:L.key),h=i(L,h,R),E===null?S=L:E.sibling=L,E=L);
    return e&&C.forEach(function(F){
      return t(g,F)
    }),ae&&qn(g,R),S
  }function y(g,h,v,k){
    var S=fo(v);
    if(typeof S!="function")throw Error(j(150));
    if(v=S.call(v),v==null)throw Error(j(151));
    for(var E=S=null,C=h,R=h=0,L=null,A=v.next();
    C!==null&&!A.done;
    R++,A=v.next()){
      C.index>R?(L=C,C=null):L=C.sibling;
      var F=m(g,C,A.value,k);
      if(F===null){
        C===null&&(C=L);
        break
      }e&&C&&F.alternate===null&&t(g,C),h=i(F,h,R),E===null?S=F:E.sibling=F,E=F,C=L
    }if(A.done)return n(g,C),ae&&qn(g,R),S;
    if(C===null){
      for(;
      !A.done;
      R++,A=v.next())A=d(g,A.value,k),A!==null&&(h=i(A,h,R),E===null?S=A:E.sibling=A,E=A);
      return ae&&qn(g,R),S
    }for(C=r(g,C);
    !A.done;
    R++,A=v.next())A=f(C,g,R,A.value,k),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?R:A.key),h=i(A,h,R),E===null?S=A:E.sibling=A,E=A);
    return e&&C.forEach(function(M){
      return t(g,M)
    }),ae&&qn(g,R),S
  }function x(g,h,v,k){
    if(typeof v=="object"&&v!==null&&v.type===xr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){
      switch(v.$$typeof){
        case Si:e:{
          for(var S=v.key,E=h;
          E!==null;
          ){
            if(E.key===S){
              if(S=v.type,S===xr){
                if(E.tag===7){
                  n(g,E.sibling),h=o(E,v.props.children),h.return=g,g=h;
                  break e
                }
              }else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===un&&cd(S)===E.type){
                n(g,E.sibling),h=o(E,v.props),h.ref=vo(g,E,v),h.return=g,g=h;
                break e
              }n(g,E);
              break
            }else t(g,E);
            E=E.sibling
          }v.type===xr?(h=tr(v.props.children,g.mode,k,v.key),h.return=g,g=h):(k=ts(v.type,v.key,v.props,null,g.mode,k),k.ref=vo(g,h,v),k.return=g,g=k)
        }return s(g);
        case wr:e:{
          for(E=v.key;
          h!==null;
          ){
            if(h.key===E)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){
              n(g,h.sibling),h=o(h,v.children||[]),h.return=g,g=h;
              break e
            }else{
              n(g,h);
              break
            }else t(g,h);
            h=h.sibling
          }h=Ba(v,g.mode,k),h.return=g,g=h
        }return s(g);
        case un:return E=v._init,x(g,h,E(v._payload),k)
      }if(So(v))return b(g,h,v,k);
      if(fo(v))return y(g,h,v,k);
      _i(g,v)
    }return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(g,h.sibling),h=o(h,v),h.return=g,g=h):(n(g,h),h=$a(v,g.mode,k),h.return=g,g=h),s(g)):n(g,h)
  }return x
}var Yr=Vp(!0),Wp=Vp(!1),xs=In(null),bs=null,Tr=null,Ru=null;
function ju(){
  Ru=Tr=bs=null
}function Lu(e){
  var t=xs.current;
  ie(xs),e._currentValue=t
}function Pl(e,t,n){
  for(;
  e!==null;
  ){
    var r=e.alternate;
    if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;
    e=e.return
  }
}function Mr(e,t){
  bs=e,Ru=Tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)
}function it(e){
  var t=e._currentValue;
  if(Ru!==e)if(e={
    context:e,memoizedValue:t,next:null
  },Tr===null){
    if(bs===null)throw Error(j(308));
    Tr=e,bs.dependencies={
      lanes:0,firstContext:e
    }
  }else Tr=Tr.next=e;
  return t
}var Hn=null;
function Au(e){
  Hn===null?Hn=[e]:Hn.push(e)
}function Hp(e,t,n,r){
  var o=t.interleaved;
  return o===null?(n.next=n,Au(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ht(e,r)
}function Ht(e,t){
  e.lanes|=t;
  var n=e.alternate;
  for(n!==null&&(n.lanes|=t),n=e,e=e.return;
  e!==null;
  )e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;
  return n.tag===3?n.stateNode:null
}var cn=!1;
function Ou(e){
  e.updateQueue={
    baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{
      pending:null,interleaved:null,lanes:0
    },effects:null
  }
}function Qp(e,t){
  e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={
    baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects
  })
}function qt(e,t){
  return{
    eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null
  }
}function Cn(e,t,n){
  var r=e.updateQueue;
  if(r===null)return null;
  if(r=r.shared,X&2){
    var o=r.pending;
    return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ht(e,n)
  }return o=r.interleaved,o===null?(t.next=t,Au(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ht(e,n)
}function Gi(e,t,n){
  if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){
    var r=t.lanes;
    r&=e.pendingLanes,n|=r,t.lanes=n,yu(e,n)
  }
}function dd(e,t){
  var n=e.updateQueue,r=e.alternate;
  if(r!==null&&(r=r.updateQueue,n===r)){
    var o=null,i=null;
    if(n=n.firstBaseUpdate,n!==null){
      do{
        var s={
          eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null
        };
        i===null?o=i=s:i=i.next=s,n=n.next
      }while(n!==null);
      i===null?o=i=t:i=i.next=t
    }else o=i=t;
    n={
      baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects
    },e.updateQueue=n;
    return
  }e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t
}function ks(e,t,n,r){
  var o=e.updateQueue;
  cn=!1;
  var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;
  if(a!==null){
    o.shared.pending=null;
    var l=a,u=l.next;
    l.next=null,s===null?i=u:s.next=u,s=l;
    var c=e.alternate;
    c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))
  }if(i!==null){
    var d=o.baseState;
    s=0,c=u=l=null,a=i;
    do{
      var m=a.lane,f=a.eventTime;
      if((r&m)===m){
        c!==null&&(c=c.next={
          eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null
        });
        e:{
          var b=e,y=a;
          switch(m=t,f=n,y.tag){
            case 1:if(b=y.payload,typeof b=="function"){
              d=b.call(f,d,m);
              break e
            }d=b;
            break e;
            case 3:b.flags=b.flags&-65537|128;
            case 0:if(b=y.payload,m=typeof b=="function"?b.call(f,d,m):b,m==null)break e;
            d=ce({
              
            },d,m);
            break e;
            case 2:cn=!0
          }
        }a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))
      }else f={
        eventTime:f,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null
      },c===null?(u=c=f,l=d):c=c.next=f,s|=m;
      if(a=a.next,a===null){
        if(a=o.shared.pending,a===null)break;
        m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null
      }
    }while(!0);
    if(c===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){
      o=t;
      do s|=o.lane,o=o.next;
      while(o!==t)
    }else i===null&&(o.shared.lanes=0);
    ir|=s,e.lanes=s,e.memoizedState=d
  }
}function fd(e,t,n){
  if(e=t.effects,t.effects=null,e!==null)for(t=0;
  t<e.length;
  t++){
    var r=e[t],o=r.callback;
    if(o!==null){
      if(r.callback=null,r=n,typeof o!="function")throw Error(j(191,o));
      o.call(r)
    }
  }
}var di={
  
},At=In(di),Qo=In(di),Ko=In(di);
function Qn(e){
  if(e===di)throw Error(j(174));
  return e
}function _u(e,t){
  switch(ne(Ko,t),ne(Qo,e),ne(At,di),e=t.nodeType,e){
    case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:sl(null,"");
    break;
    default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=sl(t,e)
  }ie(At),ne(At,t)
}function Xr(){
  ie(At),ie(Qo),ie(Ko)
}function Kp(e){
  Qn(Ko.current);
  var t=Qn(At.current),n=sl(t,e.type);
  t!==n&&(ne(Qo,e),ne(At,n))
}function Mu(e){
  Qo.current===e&&(ie(At),ie(Qo))
}var le=In(0);
function Ss(e){
  for(var t=e;
  t!==null;
  ){
    if(t.tag===13){
      var n=t.memoizedState;
      if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t
    }else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){
      if(t.flags&128)return t
    }else if(t.child!==null){
      t.child.return=t,t=t.child;
      continue
    }if(t===e)break;
    for(;
    t.sibling===null;
    ){
      if(t.return===null||t.return===e)return null;
      t=t.return
    }t.sibling.return=t.return,t=t.sibling
  }return null
}var _a=[];
function Du(){
  for(var e=0;
  e<_a.length;
  e++)_a[e]._workInProgressVersionPrimary=null;
  _a.length=0
}var Yi=Yt.ReactCurrentDispatcher,Ma=Yt.ReactCurrentBatchConfig,or=0,ue=null,ve=null,xe=null,Es=!1,Lo=!1,Go=0,jy=0;
function Ne(){
  throw Error(j(321))
}function Iu(e,t){
  if(t===null)return!1;
  for(var n=0;
  n<t.length&&n<e.length;
  n++)if(!xt(e[n],t[n]))return!1;
  return!0
}function Fu(e,t,n,r,o,i){
  if(or=i,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yi.current=e===null||e.memoizedState===null?_y:My,e=n(r,o),Lo){
    i=0;
    do{
      if(Lo=!1,Go=0,25<=i)throw Error(j(301));
      i+=1,xe=ve=null,t.updateQueue=null,Yi.current=Dy,e=n(r,o)
    }while(Lo)
  }if(Yi.current=Cs,t=ve!==null&&ve.next!==null,or=0,xe=ve=ue=null,Es=!1,t)throw Error(j(300));
  return e
}function zu(){
  var e=Go!==0;
  return Go=0,e
}function Ct(){
  var e={
    memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null
  };
  return xe===null?ue.memoizedState=xe=e:xe=xe.next=e,xe
}function st(){
  if(ve===null){
    var e=ue.alternate;
    e=e!==null?e.memoizedState:null
  }else e=ve.next;
  var t=xe===null?ue.memoizedState:xe.next;
  if(t!==null)xe=t,ve=e;
  else{
    if(e===null)throw Error(j(310));
    ve=e,e={
      memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null
    },xe===null?ue.memoizedState=xe=e:xe=xe.next=e
  }return xe
}function Yo(e,t){
  return typeof t=="function"?t(e):t
}function Da(e){
  var t=st(),n=t.queue;
  if(n===null)throw Error(j(311));
  n.lastRenderedReducer=e;
  var r=ve,o=r.baseQueue,i=n.pending;
  if(i!==null){
    if(o!==null){
      var s=o.next;
      o.next=i.next,i.next=s
    }r.baseQueue=o=i,n.pending=null
  }if(o!==null){
    i=o.next,r=r.baseState;
    var a=s=null,l=null,u=i;
    do{
      var c=u.lane;
      if((or&c)===c)l!==null&&(l=l.next={
        lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null
      }),r=u.hasEagerState?u.eagerState:e(r,u.action);
      else{
        var d={
          lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null
        };
        l===null?(a=l=d,s=r):l=l.next=d,ue.lanes|=c,ir|=c
      }u=u.next
    }while(u!==null&&u!==i);
    l===null?s=r:l.next=a,xt(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r
  }if(e=n.interleaved,e!==null){
    o=e;
    do i=o.lane,ue.lanes|=i,ir|=i,o=o.next;
    while(o!==e)
  }else o===null&&(n.lanes=0);
  return[t.memoizedState,n.dispatch]
}function Ia(e){
  var t=st(),n=t.queue;
  if(n===null)throw Error(j(311));
  n.lastRenderedReducer=e;
  var r=n.dispatch,o=n.pending,i=t.memoizedState;
  if(o!==null){
    n.pending=null;
    var s=o=o.next;
    do i=e(i,s.action),s=s.next;
    while(s!==o);
    xt(i,t.memoizedState)||($e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i
  }return[i,r]
}function Gp(){
  
}function Yp(e,t){
  var n=ue,r=st(),o=t(),i=!xt(r.memoizedState,o);
  if(i&&(r.memoizedState=o,$e=!0),r=r.queue,$u(Zp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||xe!==null&&xe.memoizedState.tag&1){
    if(n.flags|=2048,Xo(9,Jp.bind(null,n,r,o,t),void 0,null),be===null)throw Error(j(349));
    or&30||Xp(n,t,o)
  }return o
}function Xp(e,t,n){
  e.flags|=16384,e={
    getSnapshot:t,value:n
  },t=ue.updateQueue,t===null?(t={
    lastEffect:null,stores:null
  },ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))
}function Jp(e,t,n,r){
  t.value=n,t.getSnapshot=r,em(t)&&tm(e)
}function Zp(e,t,n){
  return n(function(){
    em(t)&&tm(e)
  })
}function em(e){
  var t=e.getSnapshot;
  e=e.value;
  try{
    var n=t();
    return!xt(e,n)
  }catch{
    return!0
  }
}function tm(e){
  var t=Ht(e,1);
  t!==null&&wt(t,e,1,-1)
}function pd(e){
  var t=Ct();
  return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={
    pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:e
  },t.queue=e,e=e.dispatch=Oy.bind(null,ue,e),[t.memoizedState,e]
}function Xo(e,t,n,r){
  return e={
    tag:e,create:t,destroy:n,deps:r,next:null
  },t=ue.updateQueue,t===null?(t={
    lastEffect:null,stores:null
  },ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e
}function nm(){
  return st().memoizedState
}function Xi(e,t,n,r){
  var o=Ct();
  ue.flags|=e,o.memoizedState=Xo(1|t,n,void 0,r===void 0?null:r)
}function Ws(e,t,n,r){
  var o=st();
  r=r===void 0?null:r;
  var i=void 0;
  if(ve!==null){
    var s=ve.memoizedState;
    if(i=s.destroy,r!==null&&Iu(r,s.deps)){
      o.memoizedState=Xo(t,n,i,r);
      return
    }
  }ue.flags|=e,o.memoizedState=Xo(1|t,n,i,r)
}function md(e,t){
  return Xi(8390656,8,e,t)
}function $u(e,t){
  return Ws(2048,8,e,t)
}function rm(e,t){
  return Ws(4,2,e,t)
}function om(e,t){
  return Ws(4,4,e,t)
}function im(e,t){
  if(typeof t=="function")return e=e(),t(e),function(){
    t(null)
  };
  if(t!=null)return e=e(),t.current=e,function(){
    t.current=null
  }
}function sm(e,t,n){
  return n=n!=null?n.concat([e]):null,Ws(4,4,im.bind(null,t,e),n)
}function Bu(){
  
}function am(e,t){
  var n=st();
  t=t===void 0?null:t;
  var r=n.memoizedState;
  return r!==null&&t!==null&&Iu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)
}function lm(e,t){
  var n=st();
  t=t===void 0?null:t;
  var r=n.memoizedState;
  return r!==null&&t!==null&&Iu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)
}function um(e,t,n){
  return or&21?(xt(n,t)||(n=mp(),ue.lanes|=n,ir|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)
}function Ly(e,t){
  var n=ee;
  ee=n!==0&&4>n?n:4,e(!0);
  var r=Ma.transition;
  Ma.transition={
    
  };
  try{
    e(!1),t()
  }finally{
    ee=n,Ma.transition=r
  }
}function cm(){
  return st().memoizedState
}function Ay(e,t,n){
  var r=Nn(e);
  if(n={
    lane:r,action:n,hasEagerState:!1,eagerState:null,next:null
  },dm(e))fm(t,n);
  else if(n=Hp(e,t,n,r),n!==null){
    var o=Me();
    wt(n,e,r,o),pm(n,t,r)
  }
}function Oy(e,t,n){
  var r=Nn(e),o={
    lane:r,action:n,hasEagerState:!1,eagerState:null,next:null
  };
  if(dm(e))fm(t,o);
  else{
    var i=e.alternate;
    if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{
      var s=t.lastRenderedState,a=i(s,n);
      if(o.hasEagerState=!0,o.eagerState=a,xt(a,s)){
        var l=t.interleaved;
        l===null?(o.next=o,Au(t)):(o.next=l.next,l.next=o),t.interleaved=o;
        return
      }
    }catch{
      
    }finally{
      
    }n=Hp(e,t,o,r),n!==null&&(o=Me(),wt(n,e,r,o),pm(n,t,r))
  }
}function dm(e){
  var t=e.alternate;
  return e===ue||t!==null&&t===ue
}function fm(e,t){
  Lo=Es=!0;
  var n=e.pending;
  n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t
}function pm(e,t,n){
  if(n&4194240){
    var r=t.lanes;
    r&=e.pendingLanes,n|=r,t.lanes=n,yu(e,n)
  }
}var Cs={
  readContext:it,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1
},_y={
  readContext:it,useCallback:function(e,t){
    return Ct().memoizedState=[e,t===void 0?null:t],e
  },useContext:it,useEffect:md,useImperativeHandle:function(e,t,n){
    return n=n!=null?n.concat([e]):null,Xi(4194308,4,im.bind(null,t,e),n)
  },useLayoutEffect:function(e,t){
    return Xi(4194308,4,e,t)
  },useInsertionEffect:function(e,t){
    return Xi(4,2,e,t)
  },useMemo:function(e,t){
    var n=Ct();
    return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e
  },useReducer:function(e,t,n){
    var r=Ct();
    return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={
      pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t
    },r.queue=e,e=e.dispatch=Ay.bind(null,ue,e),[r.memoizedState,e]
  },useRef:function(e){
    var t=Ct();
    return e={
      current:e
    },t.memoizedState=e
  },useState:pd,useDebugValue:Bu,useDeferredValue:function(e){
    return Ct().memoizedState=e
  },useTransition:function(){
    var e=pd(!1),t=e[0];
    return e=Ly.bind(null,e[1]),Ct().memoizedState=e,[t,e]
  },useMutableSource:function(){
    
  },useSyncExternalStore:function(e,t,n){
    var r=ue,o=Ct();
    if(ae){
      if(n===void 0)throw Error(j(407));
      n=n()
    }else{
      if(n=t(),be===null)throw Error(j(349));
      or&30||Xp(r,t,n)
    }o.memoizedState=n;
    var i={
      value:n,getSnapshot:t
    };
    return o.queue=i,md(Zp.bind(null,r,i,e),[e]),r.flags|=2048,Xo(9,Jp.bind(null,r,i,n,t),void 0,null),n
  },useId:function(){
    var e=Ct(),t=be.identifierPrefix;
    if(ae){
      var n=Ut,r=Bt;
      n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Go++,0<n&&(t+="H"+n.toString(32)),t+=":"
    }else n=jy++,t=":"+t+"r"+n.toString(32)+":";
    return e.memoizedState=t
  },unstable_isNewReconciler:!1
},My={
  readContext:it,useCallback:am,useContext:it,useEffect:$u,useImperativeHandle:sm,useInsertionEffect:rm,useLayoutEffect:om,useMemo:lm,useReducer:Da,useRef:nm,useState:function(){
    return Da(Yo)
  },useDebugValue:Bu,useDeferredValue:function(e){
    var t=st();
    return um(t,ve.memoizedState,e)
  },useTransition:function(){
    var e=Da(Yo)[0],t=st().memoizedState;
    return[e,t]
  },useMutableSource:Gp,useSyncExternalStore:Yp,useId:cm,unstable_isNewReconciler:!1
},Dy={
  readContext:it,useCallback:am,useContext:it,useEffect:$u,useImperativeHandle:sm,useInsertionEffect:rm,useLayoutEffect:om,useMemo:lm,useReducer:Ia,useRef:nm,useState:function(){
    return Ia(Yo)
  },useDebugValue:Bu,useDeferredValue:function(e){
    var t=st();
    return ve===null?t.memoizedState=e:um(t,ve.memoizedState,e)
  },useTransition:function(){
    var e=Ia(Yo)[0],t=st().memoizedState;
    return[e,t]
  },useMutableSource:Gp,useSyncExternalStore:Yp,useId:cm,unstable_isNewReconciler:!1
};
function ft(e,t){
  if(e&&e.defaultProps){
    t=ce({
      
    },t),e=e.defaultProps;
    for(var n in e)t[n]===void 0&&(t[n]=e[n]);
    return t
  }return t
}function Nl(e,t,n,r){
  t=e.memoizedState,n=n(r,t),n=n==null?t:ce({
    
  },t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)
}var Hs={
  isMounted:function(e){
    return(e=e._reactInternals)?ur(e)===e:!1
  },enqueueSetState:function(e,t,n){
    e=e._reactInternals;
    var r=Me(),o=Nn(e),i=qt(r,o);
    i.payload=t,n!=null&&(i.callback=n),t=Cn(e,i,o),t!==null&&(wt(t,e,o,r),Gi(t,e,o))
  },enqueueReplaceState:function(e,t,n){
    e=e._reactInternals;
    var r=Me(),o=Nn(e),i=qt(r,o);
    i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Cn(e,i,o),t!==null&&(wt(t,e,o,r),Gi(t,e,o))
  },enqueueForceUpdate:function(e,t){
    e=e._reactInternals;
    var n=Me(),r=Nn(e),o=qt(n,r);
    o.tag=2,t!=null&&(o.callback=t),t=Cn(e,o,r),t!==null&&(wt(t,e,r,n),Gi(t,e,r))
  }
};
function hd(e,t,n,r,o,i,s){
  return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!qo(n,r)||!qo(o,i):!0
}function mm(e,t,n){
  var r=!1,o=Ln,i=t.contextType;
  return typeof i=="object"&&i!==null?i=it(i):(o=Ue(t)?nr:Le.current,r=t.contextTypes,i=(r=r!=null)?Kr(e,o):Ln),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t
}function gd(e,t,n,r){
  e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hs.enqueueReplaceState(t,t.state,null)
}function Tl(e,t,n,r){
  var o=e.stateNode;
  o.props=n,o.state=e.memoizedState,o.refs={
    
  },Ou(e);
  var i=t.contextType;
  typeof i=="object"&&i!==null?o.context=it(i):(i=Ue(t)?nr:Le.current,o.context=Kr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Nl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Hs.enqueueReplaceState(o,o.state,null),ks(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)
}function Jr(e,t){
  try{
    var n="",r=t;
    do n+=cv(r),r=r.return;
    while(r);
    var o=n
  }catch(i){
    o=`
Error generating stack: `+i.message+`
`+i.stack
  }return{
    value:e,source:t,stack:o,digest:null
  }
}function Fa(e,t,n){
  return{
    value:e,source:null,stack:n??null,digest:t??null
  }
}function Rl(e,t){
  try{
    console.error(t.value)
  }catch(n){
    setTimeout(function(){
      throw n
    })
  }
}var Iy=typeof WeakMap=="function"?WeakMap:Map;
function hm(e,t,n){
  n=qt(-1,n),n.tag=3,n.payload={
    element:null
  };
  var r=t.value;
  return n.callback=function(){
    Ns||(Ns=!0,zl=r),Rl(e,t)
  },n
}function gm(e,t,n){
  n=qt(-1,n),n.tag=3;
  var r=e.type.getDerivedStateFromError;
  if(typeof r=="function"){
    var o=t.value;
    n.payload=function(){
      return r(o)
    },n.callback=function(){
      Rl(e,t)
    }
  }var i=e.stateNode;
  return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){
    Rl(e,t),typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));
    var s=t.stack;
    this.componentDidCatch(t.value,{
      componentStack:s!==null?s:""
    })
  }),n
}function vd(e,t,n){
  var r=e.pingCache;
  if(r===null){
    r=e.pingCache=new Iy;
    var o=new Set;
    r.set(t,o)
  }else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));
  o.has(n)||(o.add(n),e=Xy.bind(null,e,t,n),t.then(e,e))
}function yd(e){
  do{
    var t;
    if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;
    e=e.return
  }while(e!==null);
  return null
}function wd(e,t,n,r,o){
  return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qt(-1,1),t.tag=2,Cn(n,t,1))),n.lanes|=1),e)
}var Fy=Yt.ReactCurrentOwner,$e=!1;
function Oe(e,t,n,r){
  t.child=e===null?Wp(t,null,n,r):Yr(t,e.child,n,r)
}function xd(e,t,n,r,o){
  n=n.render;
  var i=t.ref;
  return Mr(t,o),r=Fu(e,t,n,r,i,o),n=zu(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qt(e,t,o)):(ae&&n&&Pu(t),t.flags|=1,Oe(e,t,r,o),t.child)
}function bd(e,t,n,r,o){
  if(e===null){
    var i=n.type;
    return typeof i=="function"&&!Gu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,vm(e,t,i,r,o)):(e=ts(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)
  }if(i=e.child,!(e.lanes&o)){
    var s=i.memoizedProps;
    if(n=n.compare,n=n!==null?n:qo,n(s,r)&&e.ref===t.ref)return Qt(e,t,o)
  }return t.flags|=1,e=Tn(i,r),e.ref=t.ref,e.return=t,t.child=e
}function vm(e,t,n,r,o){
  if(e!==null){
    var i=e.memoizedProps;
    if(qo(i,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&($e=!0);
    else return t.lanes=e.lanes,Qt(e,t,o)
  }return jl(e,t,n,r,o)
}function ym(e,t,n){
  var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;
  if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={
    baseLanes:0,cachePool:null,transitions:null
  },ne(jr,We),We|=n;
  else{
    if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={
      baseLanes:e,cachePool:null,transitions:null
    },t.updateQueue=null,ne(jr,We),We|=e,null;
    t.memoizedState={
      baseLanes:0,cachePool:null,transitions:null
    },r=i!==null?i.baseLanes:n,ne(jr,We),We|=r
  }else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ne(jr,We),We|=r;
  return Oe(e,t,o,n),t.child
}function wm(e,t){
  var n=t.ref;
  (e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)
}function jl(e,t,n,r,o){
  var i=Ue(n)?nr:Le.current;
  return i=Kr(t,i),Mr(t,o),n=Fu(e,t,n,r,i,o),r=zu(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qt(e,t,o)):(ae&&r&&Pu(t),t.flags|=1,Oe(e,t,n,o),t.child)
}function kd(e,t,n,r,o){
  if(Ue(n)){
    var i=!0;
    vs(t)
  }else i=!1;
  if(Mr(t,o),t.stateNode===null)Ji(e,t),mm(t,n,r),Tl(t,n,r,o),r=!0;
  else if(e===null){
    var s=t.stateNode,a=t.memoizedProps;
    s.props=a;
    var l=s.context,u=n.contextType;
    typeof u=="object"&&u!==null?u=it(u):(u=Ue(n)?nr:Le.current,u=Kr(t,u));
    var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";
    d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&gd(t,s,r,u),cn=!1;
    var m=t.memoizedState;
    s.state=m,ks(t,r,s,o),l=t.memoizedState,a!==r||m!==l||Be.current||cn?(typeof c=="function"&&(Nl(t,n,c,r),l=t.memoizedState),(a=cn||hd(t,n,a,r,m,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)
  }else{
    s=t.stateNode,Qp(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ft(t.type,a),s.props=u,d=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=it(l):(l=Ue(n)?nr:Le.current,l=Kr(t,l));
    var f=n.getDerivedStateFromProps;
    (c=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||m!==l)&&gd(t,s,r,l),cn=!1,m=t.memoizedState,s.state=m,ks(t,r,s,o);
    var b=t.memoizedState;
    a!==d||m!==b||Be.current||cn?(typeof f=="function"&&(Nl(t,n,f,r),b=t.memoizedState),(u=cn||hd(t,n,u,r,m,b,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,b,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,b,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),s.props=r,s.state=b,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)
  }return Ll(e,t,n,r,i,o)
}function Ll(e,t,n,r,o,i){
  wm(e,t);
  var s=(t.flags&128)!==0;
  if(!r&&!s)return o&&ad(t,n,!1),Qt(e,t,i);
  r=t.stateNode,Fy.current=t;
  var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();
  return t.flags|=1,e!==null&&s?(t.child=Yr(t,e.child,null,i),t.child=Yr(t,null,a,i)):Oe(e,t,a,i),t.memoizedState=r.state,o&&ad(t,n,!0),t.child
}function xm(e){
  var t=e.stateNode;
  t.pendingContext?sd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sd(e,t.context,!1),_u(e,t.containerInfo)
}function Sd(e,t,n,r,o){
  return Gr(),Tu(o),t.flags|=256,Oe(e,t,n,r),t.child
}var Al={
  dehydrated:null,treeContext:null,retryLane:0
};
function Ol(e){
  return{
    baseLanes:e,cachePool:null,transitions:null
  }
}function bm(e,t,n){
  var r=t.pendingProps,o=le.current,i=!1,s=(t.flags&128)!==0,a;
  if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ne(le,o&1),e===null)return Cl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={
    mode:"hidden",children:s
  },!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Gs(s,r,0,null),e=tr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ol(n),t.memoizedState=Al,e):Uu(t,s));
  if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return zy(e,t,s,r,a,o,n);
  if(i){
    i=r.fallback,s=t.mode,o=e.child,a=o.sibling;
    var l={
      mode:"hidden",children:r.children
    };
    return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Tn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Tn(a,i):(i=tr(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Ol(n):{
      baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions
    },i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Al,r
  }return i=e.child,e=i.sibling,r=Tn(i,{
    mode:"visible",children:r.children
  }),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r
}function Uu(e,t){
  return t=Gs({
    mode:"visible",children:t
  },e.mode,0,null),t.return=e,e.child=t
}function Mi(e,t,n,r){
  return r!==null&&Tu(r),Yr(t,e.child,null,n),e=Uu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e
}function zy(e,t,n,r,o,i,s){
  if(n)return t.flags&256?(t.flags&=-257,r=Fa(Error(j(422))),Mi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Gs({
    mode:"visible",children:r.children
  },o,0,null),i=tr(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Yr(t,e.child,null,s),t.child.memoizedState=Ol(s),t.memoizedState=Al,i);
  if(!(t.mode&1))return Mi(e,t,s,null);
  if(o.data==="$!"){
    if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;
    return r=a,i=Error(j(419)),r=Fa(i,r,void 0),Mi(e,t,s,r)
  }if(a=(s&e.childLanes)!==0,$e||a){
    if(r=be,r!==null){
      switch(s&-s){
        case 4:o=2;
        break;
        case 16:o=8;
        break;
        case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;
        break;
        case 536870912:o=268435456;
        break;
        default:o=0
      }o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ht(e,o),wt(r,e,o,-1))
    }return Ku(),r=Fa(Error(j(421))),Mi(e,t,s,r)
  }return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Jy.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Qe=En(o.nextSibling),Ke=t,ae=!0,vt=null,e!==null&&(tt[nt++]=Bt,tt[nt++]=Ut,tt[nt++]=rr,Bt=e.id,Ut=e.overflow,rr=t),t=Uu(t,r.children),t.flags|=4096,t)
}function Ed(e,t,n){
  e.lanes|=t;
  var r=e.alternate;
  r!==null&&(r.lanes|=t),Pl(e.return,t,n)
}function za(e,t,n,r,o){
  var i=e.memoizedState;
  i===null?e.memoizedState={
    isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o
  }:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)
}function km(e,t,n){
  var r=t.pendingProps,o=r.revealOrder,i=r.tail;
  if(Oe(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;
  else{
    if(e!==null&&e.flags&128)e:for(e=t.child;
    e!==null;
    ){
      if(e.tag===13)e.memoizedState!==null&&Ed(e,n,t);
      else if(e.tag===19)Ed(e,n,t);
      else if(e.child!==null){
        e.child.return=e,e=e.child;
        continue
      }if(e===t)break e;
      for(;
      e.sibling===null;
      ){
        if(e.return===null||e.return===t)break e;
        e=e.return
      }e.sibling.return=e.return,e=e.sibling
    }r&=1
  }if(ne(le,r),!(t.mode&1))t.memoizedState=null;
  else switch(o){
    case"forwards":for(n=t.child,o=null;
    n!==null;
    )e=n.alternate,e!==null&&Ss(e)===null&&(o=n),n=n.sibling;
    n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),za(t,!1,o,n,i);
    break;
    case"backwards":for(n=null,o=t.child,t.child=null;
    o!==null;
    ){
      if(e=o.alternate,e!==null&&Ss(e)===null){
        t.child=o;
        break
      }e=o.sibling,o.sibling=n,n=o,o=e
    }za(t,!0,n,null,i);
    break;
    case"together":za(t,!1,null,null,void 0);
    break;
    default:t.memoizedState=null
  }return t.child
}function Ji(e,t){
  !(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)
}function Qt(e,t,n){
  if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,!(n&t.childLanes))return null;
  if(e!==null&&t.child!==e.child)throw Error(j(153));
  if(t.child!==null){
    for(e=t.child,n=Tn(e,e.pendingProps),t.child=n,n.return=t;
    e.sibling!==null;
    )e=e.sibling,n=n.sibling=Tn(e,e.pendingProps),n.return=t;
    n.sibling=null
  }return t.child
}function $y(e,t,n){
  switch(t.tag){
    case 3:xm(t),Gr();
    break;
    case 5:Kp(t);
    break;
    case 1:Ue(t.type)&&vs(t);
    break;
    case 4:_u(t,t.stateNode.containerInfo);
    break;
    case 10:var r=t.type._context,o=t.memoizedProps.value;
    ne(xs,r._currentValue),r._currentValue=o;
    break;
    case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?bm(e,t,n):(ne(le,le.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);
    ne(le,le.current&1);
    break;
    case 19:if(r=(n&t.childLanes)!==0,e.flags&128){
      if(r)return km(e,t,n);
      t.flags|=128
    }if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(le,le.current),r)break;
    return null;
    case 22:case 23:return t.lanes=0,ym(e,t,n)
  }return Qt(e,t,n)
}var Sm,_l,Em,Cm;
Sm=function(e,t){
  for(var n=t.child;
  n!==null;
  ){
    if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);
    else if(n.tag!==4&&n.child!==null){
      n.child.return=n,n=n.child;
      continue
    }if(n===t)break;
    for(;
    n.sibling===null;
    ){
      if(n.return===null||n.return===t)return;
      n=n.return
    }n.sibling.return=n.return,n=n.sibling
  }
};
_l=function(){
  
};
Em=function(e,t,n,r){
  var o=e.memoizedProps;
  if(o!==r){
    e=t.stateNode,Qn(At.current);
    var i=null;
    switch(n){
      case"input":o=nl(e,o),r=nl(e,r),i=[];
      break;
      case"select":o=ce({
        
      },o,{
        value:void 0
      }),r=ce({
        
      },r,{
        value:void 0
      }),i=[];
      break;
      case"textarea":o=il(e,o),r=il(e,r),i=[];
      break;
      default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hs)
    }al(n,r);
    var s;
    n=null;
    for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){
      var a=o[u];
      for(s in a)a.hasOwnProperty(s)&&(n||(n={
        
      }),n[s]="")
    }else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Do.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));
    for(u in r){
      var l=r[u];
      if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){
        for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={
          
        }),n[s]="");
        for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={
          
        }),n[s]=l[s])
      }else n||(i||(i=[]),i.push(u,n)),n=l;
      else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Do.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&oe("scroll",e),i||a===l||(i=[])):(i=i||[]).push(u,l))
    }n&&(i=i||[]).push("style",n);
    var u=i;
    (t.updateQueue=u)&&(t.flags|=4)
  }
};
Cm=function(e,t,n,r){
  n!==r&&(t.flags|=4)
};
function yo(e,t){
  if(!ae)switch(e.tailMode){
    case"hidden":t=e.tail;
    for(var n=null;
    t!==null;
    )t.alternate!==null&&(n=t),t=t.sibling;
    n===null?e.tail=null:n.sibling=null;
    break;
    case"collapsed":n=e.tail;
    for(var r=null;
    n!==null;
    )n.alternate!==null&&(r=n),n=n.sibling;
    r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null
  }
}function Te(e){
  var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;
  if(t)for(var o=e.child;
  o!==null;
  )n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;
  else for(o=e.child;
  o!==null;
  )n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;
  return e.subtreeFlags|=r,e.childLanes=n,t
}function By(e,t,n){
  var r=t.pendingProps;
  switch(Nu(t),t.tag){
    case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;
    case 1:return Ue(t.type)&&gs(),Te(t),null;
    case 3:return r=t.stateNode,Xr(),ie(Be),ie(Le),Du(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Oi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vt!==null&&(Ul(vt),vt=null))),_l(e,t),Te(t),null;
    case 5:Mu(t);
    var o=Qn(Ko.current);
    if(n=t.type,e!==null&&t.stateNode!=null)Em(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);
    else{
      if(!r){
        if(t.stateNode===null)throw Error(j(166));
        return Te(t),null
      }if(e=Qn(At.current),Oi(t)){
        r=t.stateNode,n=t.type;
        var i=t.memoizedProps;
        switch(r[Rt]=t,r[Ho]=i,e=(t.mode&1)!==0,n){
          case"dialog":oe("cancel",r),oe("close",r);
          break;
          case"iframe":case"object":case"embed":oe("load",r);
          break;
          case"video":case"audio":for(o=0;
          o<Co.length;
          o++)oe(Co[o],r);
          break;
          case"source":oe("error",r);
          break;
          case"img":case"image":case"link":oe("error",r),oe("load",r);
          break;
          case"details":oe("toggle",r);
          break;
          case"input":Oc(r,i),oe("invalid",r);
          break;
          case"select":r._wrapperState={
            wasMultiple:!!i.multiple
          },oe("invalid",r);
          break;
          case"textarea":Mc(r,i),oe("invalid",r)
        }al(n,i),o=null;
        for(var s in i)if(i.hasOwnProperty(s)){
          var a=i[s];
          s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Ai(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Ai(r.textContent,a,e),o=["children",""+a]):Do.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&oe("scroll",r)
        }switch(n){
          case"input":Ei(r),_c(r,i,!0);
          break;
          case"textarea":Ei(r),Dc(r);
          break;
          case"select":case"option":break;
          default:typeof i.onClick=="function"&&(r.onclick=hs)
        }r=o,t.updateQueue=r,r!==null&&(t.flags|=4)
      }else{
        s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{
          is:r.is
        }):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Rt]=t,e[Ho]=r,Sm(e,t,!1,!1),t.stateNode=e;
        e:{
          switch(s=ll(n,r),n){
            case"dialog":oe("cancel",e),oe("close",e),o=r;
            break;
            case"iframe":case"object":case"embed":oe("load",e),o=r;
            break;
            case"video":case"audio":for(o=0;
            o<Co.length;
            o++)oe(Co[o],e);
            o=r;
            break;
            case"source":oe("error",e),o=r;
            break;
            case"img":case"image":case"link":oe("error",e),oe("load",e),o=r;
            break;
            case"details":oe("toggle",e),o=r;
            break;
            case"input":Oc(e,r),o=nl(e,r),oe("invalid",e);
            break;
            case"option":o=r;
            break;
            case"select":e._wrapperState={
              wasMultiple:!!r.multiple
            },o=ce({
              
            },r,{
              value:void 0
            }),oe("invalid",e);
            break;
            case"textarea":Mc(e,r),o=il(e,r),oe("invalid",e);
            break;
            default:o=r
          }al(n,o),a=o;
          for(i in a)if(a.hasOwnProperty(i)){
            var l=a[i];
            i==="style"?np(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ep(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Io(e,l):typeof l=="number"&&Io(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Do.hasOwnProperty(i)?l!=null&&i==="onScroll"&&oe("scroll",e):l!=null&&fu(e,i,l,s))
          }switch(n){
            case"input":Ei(e),_c(e,r,!1);
            break;
            case"textarea":Ei(e),Dc(e);
            break;
            case"option":r.value!=null&&e.setAttribute("value",""+jn(r.value));
            break;
            case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Lr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Lr(e,!!r.multiple,r.defaultValue,!0);
            break;
            default:typeof o.onClick=="function"&&(e.onclick=hs)
          }switch(n){
            case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;
            break e;
            case"img":r=!0;
            break e;
            default:r=!1
          }
        }r&&(t.flags|=4)
      }t.ref!==null&&(t.flags|=512,t.flags|=2097152)
    }return Te(t),null;
    case 6:if(e&&t.stateNode!=null)Cm(e,t,e.memoizedProps,r);
    else{
      if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));
      if(n=Qn(Ko.current),Qn(At.current),Oi(t)){
        if(r=t.stateNode,n=t.memoizedProps,r[Rt]=t,(i=r.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){
          case 3:Ai(r.nodeValue,n,(e.mode&1)!==0);
          break;
          case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ai(r.nodeValue,n,(e.mode&1)!==0)
        }i&&(t.flags|=4)
      }else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=t,t.stateNode=r
    }return Te(t),null;
    case 13:if(ie(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){
      if(ae&&Qe!==null&&t.mode&1&&!(t.flags&128))qp(),Gr(),t.flags|=98560,i=!1;
      else if(i=Oi(t),r!==null&&r.dehydrated!==null){
        if(e===null){
          if(!i)throw Error(j(318));
          if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));
          i[Rt]=t
        }else Gr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;
        Te(t),i=!1
      }else vt!==null&&(Ul(vt),vt=null),i=!0;
      if(!i)return t.flags&65536?t:null
    }return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?we===0&&(we=3):Ku())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);
    case 4:return Xr(),_l(e,t),e===null&&Vo(t.stateNode.containerInfo),Te(t),null;
    case 10:return Lu(t.type._context),Te(t),null;
    case 17:return Ue(t.type)&&gs(),Te(t),null;
    case 19:if(ie(le),i=t.memoizedState,i===null)return Te(t),null;
    if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)yo(i,!1);
    else{
      if(we!==0||e!==null&&e.flags&128)for(e=t.child;
      e!==null;
      ){
        if(s=Ss(e),s!==null){
          for(t.flags|=128,yo(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;
          n!==null;
          )i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{
            lanes:e.lanes,firstContext:e.firstContext
          }),n=n.sibling;
          return ne(le,le.current&1|2),t.child
        }e=e.sibling
      }i.tail!==null&&pe()>Zr&&(t.flags|=128,r=!0,yo(i,!1),t.lanes=4194304)
    }else{
      if(!r)if(e=Ss(s),e!==null){
        if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ae)return Te(t),null
      }else 2*pe()-i.renderingStartTime>Zr&&n!==1073741824&&(t.flags|=128,r=!0,yo(i,!1),t.lanes=4194304);
      i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)
    }return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=pe(),t.sibling=null,n=le.current,ne(le,r?n&1|2:n&1),t):(Te(t),null);
    case 22:case 23:return Qu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?We&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;
    case 24:return null;
    case 25:return null
  }throw Error(j(156,t.tag))
}function Uy(e,t){
  switch(Nu(t),t.tag){
    case 1:return Ue(t.type)&&gs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;
    case 3:return Xr(),ie(Be),ie(Le),Du(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;
    case 5:return Mu(t),null;
    case 13:if(ie(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){
      if(t.alternate===null)throw Error(j(340));
      Gr()
    }return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;
    case 19:return ie(le),null;
    case 4:return Xr(),null;
    case 10:return Lu(t.type._context),null;
    case 22:case 23:return Qu(),null;
    case 24:return null;
    default:return null
  }
}var Di=!1,je=!1,qy=typeof WeakSet=="function"?WeakSet:Set,I=null;
function Rr(e,t){
  var n=e.ref;
  if(n!==null)if(typeof n=="function")try{
    n(null)
  }catch(r){
    fe(e,t,r)
  }else n.current=null
}function Ml(e,t,n){
  try{
    n()
  }catch(r){
    fe(e,t,r)
  }
}var Cd=!1;
function Vy(e,t){
  if(yl=fs,e=jp(),Cu(e)){
    if("selectionStart"in e)var n={
      start:e.selectionStart,end:e.selectionEnd
    };
    else e:{
      n=(n=e.ownerDocument)&&n.defaultView||window;
      var r=n.getSelection&&n.getSelection();
      if(r&&r.rangeCount!==0){
        n=r.anchorNode;
        var o=r.anchorOffset,i=r.focusNode;
        r=r.focusOffset;
        try{
          n.nodeType,i.nodeType
        }catch{
          n=null;
          break e
        }var s=0,a=-1,l=-1,u=0,c=0,d=e,m=null;
        t:for(;
        ;
        ){
          for(var f;
          d!==n||o!==0&&d.nodeType!==3||(a=s+o),d!==i||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(f=d.firstChild)!==null;
          )m=d,d=f;
          for(;
          ;
          ){
            if(d===e)break t;
            if(m===n&&++u===o&&(a=s),m===i&&++c===r&&(l=s),(f=d.nextSibling)!==null)break;
            d=m,m=d.parentNode
          }d=f
        }n=a===-1||l===-1?null:{
          start:a,end:l
        }
      }else n=null
    }n=n||{
      start:0,end:0
    }
  }else n=null;
  for(wl={
    focusedElem:e,selectionRange:n
  },fs=!1,I=t;
  I!==null;
  )if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;
  else for(;
  I!==null;
  ){
    t=I;
    try{
      var b=t.alternate;
      if(t.flags&1024)switch(t.tag){
        case 0:case 11:case 15:break;
        case 1:if(b!==null){
          var y=b.memoizedProps,x=b.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:ft(t.type,y),x);
          g.__reactInternalSnapshotBeforeUpdate=h
        }break;
        case 3:var v=t.stateNode.containerInfo;
        v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);
        break;
        case 5:case 6:case 4:case 17:break;
        default:throw Error(j(163))
      }
    }catch(k){
      fe(t,t.return,k)
    }if(e=t.sibling,e!==null){
      e.return=t.return,I=e;
      break
    }I=t.return
  }return b=Cd,Cd=!1,b
}function Ao(e,t,n){
  var r=t.updateQueue;
  if(r=r!==null?r.lastEffect:null,r!==null){
    var o=r=r.next;
    do{
      if((o.tag&e)===e){
        var i=o.destroy;
        o.destroy=void 0,i!==void 0&&Ml(t,n,i)
      }o=o.next
    }while(o!==r)
  }
}function Qs(e,t){
  if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){
    var n=t=t.next;
    do{
      if((n.tag&e)===e){
        var r=n.create;
        n.destroy=r()
      }n=n.next
    }while(n!==t)
  }
}function Dl(e){
  var t=e.ref;
  if(t!==null){
    var n=e.stateNode;
    switch(e.tag){
      case 5:e=n;
      break;
      default:e=n
    }typeof t=="function"?t(e):t.current=e
  }
}function Pm(e){
  var t=e.alternate;
  t!==null&&(e.alternate=null,Pm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[Ho],delete t[kl],delete t[Py],delete t[Ny])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null
}function Nm(e){
  return e.tag===5||e.tag===3||e.tag===4
}function Pd(e){
  e:for(;
  ;
  ){
    for(;
    e.sibling===null;
    ){
      if(e.return===null||Nm(e.return))return null;
      e=e.return
    }for(e.sibling.return=e.return,e=e.sibling;
    e.tag!==5&&e.tag!==6&&e.tag!==18;
    ){
      if(e.flags&2||e.child===null||e.tag===4)continue e;
      e.child.return=e,e=e.child
    }if(!(e.flags&2))return e.stateNode
  }
}function Il(e,t,n){
  var r=e.tag;
  if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hs));
  else if(r!==4&&(e=e.child,e!==null))for(Il(e,t,n),e=e.sibling;
  e!==null;
  )Il(e,t,n),e=e.sibling
}function Fl(e,t,n){
  var r=e.tag;
  if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);
  else if(r!==4&&(e=e.child,e!==null))for(Fl(e,t,n),e=e.sibling;
  e!==null;
  )Fl(e,t,n),e=e.sibling
}var ke=null,gt=!1;
function on(e,t,n){
  for(n=n.child;
  n!==null;
  )Tm(e,t,n),n=n.sibling
}function Tm(e,t,n){
  if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{
    Lt.onCommitFiberUnmount(zs,n)
  }catch{
    
  }switch(n.tag){
    case 5:je||Rr(n,t);
    case 6:var r=ke,o=gt;
    ke=null,on(e,t,n),ke=r,gt=o,ke!==null&&(gt?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));
    break;
    case 18:ke!==null&&(gt?(e=ke,n=n.stateNode,e.nodeType===8?Aa(e.parentNode,n):e.nodeType===1&&Aa(e,n),Bo(e)):Aa(ke,n.stateNode));
    break;
    case 4:r=ke,o=gt,ke=n.stateNode.containerInfo,gt=!0,on(e,t,n),ke=r,gt=o;
    break;
    case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){
      o=r=r.next;
      do{
        var i=o,s=i.destroy;
        i=i.tag,s!==void 0&&(i&2||i&4)&&Ml(n,t,s),o=o.next
      }while(o!==r)
    }on(e,t,n);
    break;
    case 1:if(!je&&(Rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{
      r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()
    }catch(a){
      fe(n,t,a)
    }on(e,t,n);
    break;
    case 21:on(e,t,n);
    break;
    case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,on(e,t,n),je=r):on(e,t,n);
    break;
    default:on(e,t,n)
  }
}function Nd(e){
  var t=e.updateQueue;
  if(t!==null){
    e.updateQueue=null;
    var n=e.stateNode;
    n===null&&(n=e.stateNode=new qy),t.forEach(function(r){
      var o=Zy.bind(null,e,r);
      n.has(r)||(n.add(r),r.then(o,o))
    })
  }
}function ct(e,t){
  var n=t.deletions;
  if(n!==null)for(var r=0;
  r<n.length;
  r++){
    var o=n[r];
    try{
      var i=e,s=t,a=s;
      e:for(;
      a!==null;
      ){
        switch(a.tag){
          case 5:ke=a.stateNode,gt=!1;
          break e;
          case 3:ke=a.stateNode.containerInfo,gt=!0;
          break e;
          case 4:ke=a.stateNode.containerInfo,gt=!0;
          break e
        }a=a.return
      }if(ke===null)throw Error(j(160));
      Tm(i,s,o),ke=null,gt=!1;
      var l=o.alternate;
      l!==null&&(l.return=null),o.return=null
    }catch(u){
      fe(o,t,u)
    }
  }if(t.subtreeFlags&12854)for(t=t.child;
  t!==null;
  )Rm(t,e),t=t.sibling
}function Rm(e,t){
  var n=e.alternate,r=e.flags;
  switch(e.tag){
    case 0:case 11:case 14:case 15:if(ct(t,e),Et(e),r&4){
      try{
        Ao(3,e,e.return),Qs(3,e)
      }catch(y){
        fe(e,e.return,y)
      }try{
        Ao(5,e,e.return)
      }catch(y){
        fe(e,e.return,y)
      }
    }break;
    case 1:ct(t,e),Et(e),r&512&&n!==null&&Rr(n,n.return);
    break;
    case 5:if(ct(t,e),Et(e),r&512&&n!==null&&Rr(n,n.return),e.flags&32){
      var o=e.stateNode;
      try{
        Io(o,"")
      }catch(y){
        fe(e,e.return,y)
      }
    }if(r&4&&(o=e.stateNode,o!=null)){
      var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,l=e.updateQueue;
      if(e.updateQueue=null,l!==null)try{
        a==="input"&&i.type==="radio"&&i.name!=null&&Xf(o,i),ll(a,s);
        var u=ll(a,i);
        for(s=0;
        s<l.length;
        s+=2){
          var c=l[s],d=l[s+1];
          c==="style"?np(o,d):c==="dangerouslySetInnerHTML"?ep(o,d):c==="children"?Io(o,d):fu(o,c,d,u)
        }switch(a){
          case"input":rl(o,i);
          break;
          case"textarea":Jf(o,i);
          break;
          case"select":var m=o._wrapperState.wasMultiple;
          o._wrapperState.wasMultiple=!!i.multiple;
          var f=i.value;
          f!=null?Lr(o,!!i.multiple,f,!1):m!==!!i.multiple&&(i.defaultValue!=null?Lr(o,!!i.multiple,i.defaultValue,!0):Lr(o,!!i.multiple,i.multiple?[]:"",!1))
        }o[Ho]=i
      }catch(y){
        fe(e,e.return,y)
      }
    }break;
    case 6:if(ct(t,e),Et(e),r&4){
      if(e.stateNode===null)throw Error(j(162));
      o=e.stateNode,i=e.memoizedProps;
      try{
        o.nodeValue=i
      }catch(y){
        fe(e,e.return,y)
      }
    }break;
    case 3:if(ct(t,e),Et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{
      Bo(t.containerInfo)
    }catch(y){
      fe(e,e.return,y)
    }break;
    case 4:ct(t,e),Et(e);
    break;
    case 13:ct(t,e),Et(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Wu=pe())),r&4&&Nd(e);
    break;
    case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(je=(u=je)||c,ct(t,e),je=u):ct(t,e),Et(e),r&8192){
      if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(I=e,c=e.child;
      c!==null;
      ){
        for(d=I=c;
        I!==null;
        ){
          switch(m=I,f=m.child,m.tag){
            case 0:case 11:case 14:case 15:Ao(4,m,m.return);
            break;
            case 1:Rr(m,m.return);
            var b=m.stateNode;
            if(typeof b.componentWillUnmount=="function"){
              r=m,n=m.return;
              try{
                t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()
              }catch(y){
                fe(r,n,y)
              }
            }break;
            case 5:Rr(m,m.return);
            break;
            case 22:if(m.memoizedState!==null){
              Rd(d);
              continue
            }
          }f!==null?(f.return=m,I=f):Rd(d)
        }c=c.sibling
      }e:for(c=null,d=e;
      ;
      ){
        if(d.tag===5){
          if(c===null){
            c=d;
            try{
              o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=tp("display",s))
            }catch(y){
              fe(e,e.return,y)
            }
          }
        }else if(d.tag===6){
          if(c===null)try{
            d.stateNode.nodeValue=u?"":d.memoizedProps
          }catch(y){
            fe(e,e.return,y)
          }
        }else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){
          d.child.return=d,d=d.child;
          continue
        }if(d===e)break e;
        for(;
        d.sibling===null;
        ){
          if(d.return===null||d.return===e)break e;
          c===d&&(c=null),d=d.return
        }c===d&&(c=null),d.sibling.return=d.return,d=d.sibling
      }
    }break;
    case 19:ct(t,e),Et(e),r&4&&Nd(e);
    break;
    case 21:break;
    default:ct(t,e),Et(e)
  }
}function Et(e){
  var t=e.flags;
  if(t&2){
    try{
      e:{
        for(var n=e.return;
        n!==null;
        ){
          if(Nm(n)){
            var r=n;
            break e
          }n=n.return
        }throw Error(j(160))
      }switch(r.tag){
        case 5:var o=r.stateNode;
        r.flags&32&&(Io(o,""),r.flags&=-33);
        var i=Pd(e);
        Fl(e,i,o);
        break;
        case 3:case 4:var s=r.stateNode.containerInfo,a=Pd(e);
        Il(e,a,s);
        break;
        default:throw Error(j(161))
      }
    }catch(l){
      fe(e,e.return,l)
    }e.flags&=-3
  }t&4096&&(e.flags&=-4097)
}function Wy(e,t,n){
  I=e,jm(e)
}function jm(e,t,n){
  for(var r=(e.mode&1)!==0;
  I!==null;
  ){
    var o=I,i=o.child;
    if(o.tag===22&&r){
      var s=o.memoizedState!==null||Di;
      if(!s){
        var a=o.alternate,l=a!==null&&a.memoizedState!==null||je;
        a=Di;
        var u=je;
        if(Di=s,(je=l)&&!u)for(I=o;
        I!==null;
        )s=I,l=s.child,s.tag===22&&s.memoizedState!==null?jd(o):l!==null?(l.return=s,I=l):jd(o);
        for(;
        i!==null;
        )I=i,jm(i),i=i.sibling;
        I=o,Di=a,je=u
      }Td(e)
    }else o.subtreeFlags&8772&&i!==null?(i.return=o,I=i):Td(e)
  }
}function Td(e){
  for(;
  I!==null;
  ){
    var t=I;
    if(t.flags&8772){
      var n=t.alternate;
      try{
        if(t.flags&8772)switch(t.tag){
          case 0:case 11:case 15:je||Qs(5,t);
          break;
          case 1:var r=t.stateNode;
          if(t.flags&4&&!je)if(n===null)r.componentDidMount();
          else{
            var o=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);
            r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)
          }var i=t.updateQueue;
          i!==null&&fd(t,i,r);
          break;
          case 3:var s=t.updateQueue;
          if(s!==null){
            if(n=null,t.child!==null)switch(t.child.tag){
              case 5:n=t.child.stateNode;
              break;
              case 1:n=t.child.stateNode
            }fd(t,s,n)
          }break;
          case 5:var a=t.stateNode;
          if(n===null&&t.flags&4){
            n=a;
            var l=t.memoizedProps;
            switch(t.type){
              case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();
              break;
              case"img":l.src&&(n.src=l.src)
            }
          }break;
          case 6:break;
          case 4:break;
          case 12:break;
          case 13:if(t.memoizedState===null){
            var u=t.alternate;
            if(u!==null){
              var c=u.memoizedState;
              if(c!==null){
                var d=c.dehydrated;
                d!==null&&Bo(d)
              }
            }
          }break;
          case 19:case 17:case 21:case 22:case 23:case 25:break;
          default:throw Error(j(163))
        }je||t.flags&512&&Dl(t)
      }catch(m){
        fe(t,t.return,m)
      }
    }if(t===e){
      I=null;
      break
    }if(n=t.sibling,n!==null){
      n.return=t.return,I=n;
      break
    }I=t.return
  }
}function Rd(e){
  for(;
  I!==null;
  ){
    var t=I;
    if(t===e){
      I=null;
      break
    }var n=t.sibling;
    if(n!==null){
      n.return=t.return,I=n;
      break
    }I=t.return
  }
}function jd(e){
  for(;
  I!==null;
  ){
    var t=I;
    try{
      switch(t.tag){
        case 0:case 11:case 15:var n=t.return;
        try{
          Qs(4,t)
        }catch(l){
          fe(t,n,l)
        }break;
        case 1:var r=t.stateNode;
        if(typeof r.componentDidMount=="function"){
          var o=t.return;
          try{
            r.componentDidMount()
          }catch(l){
            fe(t,o,l)
          }
        }var i=t.return;
        try{
          Dl(t)
        }catch(l){
          fe(t,i,l)
        }break;
        case 5:var s=t.return;
        try{
          Dl(t)
        }catch(l){
          fe(t,s,l)
        }
      }
    }catch(l){
      fe(t,t.return,l)
    }if(t===e){
      I=null;
      break
    }var a=t.sibling;
    if(a!==null){
      a.return=t.return,I=a;
      break
    }I=t.return
  }
}var Hy=Math.ceil,Ps=Yt.ReactCurrentDispatcher,qu=Yt.ReactCurrentOwner,ot=Yt.ReactCurrentBatchConfig,X=0,be=null,he=null,Se=0,We=0,jr=In(0),we=0,Jo=null,ir=0,Ks=0,Vu=0,Oo=null,ze=null,Wu=0,Zr=1/0,Ft=null,Ns=!1,zl=null,Pn=null,Ii=!1,wn=null,Ts=0,_o=0,$l=null,Zi=-1,es=0;
function Me(){
  return X&6?pe():Zi!==-1?Zi:Zi=pe()
}function Nn(e){
  return e.mode&1?X&2&&Se!==0?Se&-Se:Ry.transition!==null?(es===0&&(es=mp()),es):(e=ee,e!==0||(e=window.event,e=e===void 0?16:bp(e.type)),e):1
}function wt(e,t,n,r){
  if(50<_o)throw _o=0,$l=null,Error(j(185));
  li(e,n,r),(!(X&2)||e!==be)&&(e===be&&(!(X&2)&&(Ks|=n),we===4&&fn(e,Se)),qe(e,r),n===1&&X===0&&!(t.mode&1)&&(Zr=pe()+500,Vs&&Fn()))
}function qe(e,t){
  var n=e.callbackNode;
  Rv(e,t);
  var r=ds(e,e===be?Se:0);
  if(r===0)n!==null&&zc(n),e.callbackNode=null,e.callbackPriority=0;
  else if(t=r&-r,e.callbackPriority!==t){
    if(n!=null&&zc(n),t===1)e.tag===0?Ty(Ld.bind(null,e)):$p(Ld.bind(null,e)),Ey(function(){
      !(X&6)&&Fn()
    }),n=null;
    else{
      switch(hp(r)){
        case 1:n=vu;
        break;
        case 4:n=fp;
        break;
        case 16:n=cs;
        break;
        case 536870912:n=pp;
        break;
        default:n=cs
      }n=Fm(n,Lm.bind(null,e))
    }e.callbackPriority=t,e.callbackNode=n
  }
}function Lm(e,t){
  if(Zi=-1,es=0,X&6)throw Error(j(327));
  var n=e.callbackNode;
  if(Dr()&&e.callbackNode!==n)return null;
  var r=ds(e,e===be?Se:0);
  if(r===0)return null;
  if(r&30||r&e.expiredLanes||t)t=Rs(e,r);
  else{
    t=r;
    var o=X;
    X|=2;
    var i=Om();
    (be!==e||Se!==t)&&(Ft=null,Zr=pe()+500,er(e,t));
    do try{
      Gy();
      break
    }catch(a){
      Am(e,a)
    }while(!0);
    ju(),Ps.current=i,X=o,he!==null?t=0:(be=null,Se=0,t=we)
  }if(t!==0){
    if(t===2&&(o=pl(e),o!==0&&(r=o,t=Bl(e,o))),t===1)throw n=Jo,er(e,0),fn(e,r),qe(e,pe()),n;
    if(t===6)fn(e,r);
    else{
      if(o=e.current.alternate,!(r&30)&&!Qy(o)&&(t=Rs(e,r),t===2&&(i=pl(e),i!==0&&(r=i,t=Bl(e,i))),t===1))throw n=Jo,er(e,0),fn(e,r),qe(e,pe()),n;
      switch(e.finishedWork=o,e.finishedLanes=r,t){
        case 0:case 1:throw Error(j(345));
        case 2:Vn(e,ze,Ft);
        break;
        case 3:if(fn(e,r),(r&130023424)===r&&(t=Wu+500-pe(),10<t)){
          if(ds(e,0)!==0)break;
          if(o=e.suspendedLanes,(o&r)!==r){
            Me(),e.pingedLanes|=e.suspendedLanes&o;
            break
          }e.timeoutHandle=bl(Vn.bind(null,e,ze,Ft),t);
          break
        }Vn(e,ze,Ft);
        break;
        case 4:if(fn(e,r),(r&4194240)===r)break;
        for(t=e.eventTimes,o=-1;
        0<r;
        ){
          var s=31-yt(r);
          i=1<<s,s=t[s],s>o&&(o=s),r&=~i
        }if(r=o,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hy(r/1960))-r,10<r){
          e.timeoutHandle=bl(Vn.bind(null,e,ze,Ft),r);
          break
        }Vn(e,ze,Ft);
        break;
        case 5:Vn(e,ze,Ft);
        break;
        default:throw Error(j(329))
      }
    }
  }return qe(e,pe()),e.callbackNode===n?Lm.bind(null,e):null
}function Bl(e,t){
  var n=Oo;
  return e.current.memoizedState.isDehydrated&&(er(e,t).flags|=256),e=Rs(e,t),e!==2&&(t=ze,ze=n,t!==null&&Ul(t)),e
}function Ul(e){
  ze===null?ze=e:ze.push.apply(ze,e)
}function Qy(e){
  for(var t=e;
  ;
  ){
    if(t.flags&16384){
      var n=t.updateQueue;
      if(n!==null&&(n=n.stores,n!==null))for(var r=0;
      r<n.length;
      r++){
        var o=n[r],i=o.getSnapshot;
        o=o.value;
        try{
          if(!xt(i(),o))return!1
        }catch{
          return!1
        }
      }
    }if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;
    else{
      if(t===e)break;
      for(;
      t.sibling===null;
      ){
        if(t.return===null||t.return===e)return!0;
        t=t.return
      }t.sibling.return=t.return,t=t.sibling
    }
  }return!0
}function fn(e,t){
  for(t&=~Vu,t&=~Ks,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;
  0<t;
  ){
    var n=31-yt(t),r=1<<n;
    e[n]=-1,t&=~r
  }
}function Ld(e){
  if(X&6)throw Error(j(327));
  Dr();
  var t=ds(e,0);
  if(!(t&1))return qe(e,pe()),null;
  var n=Rs(e,t);
  if(e.tag!==0&&n===2){
    var r=pl(e);
    r!==0&&(t=r,n=Bl(e,r))
  }if(n===1)throw n=Jo,er(e,0),fn(e,t),qe(e,pe()),n;
  if(n===6)throw Error(j(345));
  return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vn(e,ze,Ft),qe(e,pe()),null
}function Hu(e,t){
  var n=X;
  X|=1;
  try{
    return e(t)
  }finally{
    X=n,X===0&&(Zr=pe()+500,Vs&&Fn())
  }
}function sr(e){
  wn!==null&&wn.tag===0&&!(X&6)&&Dr();
  var t=X;
  X|=1;
  var n=ot.transition,r=ee;
  try{
    if(ot.transition=null,ee=1,e)return e()
  }finally{
    ee=r,ot.transition=n,X=t,!(X&6)&&Fn()
  }
}function Qu(){
  We=jr.current,ie(jr)
}function er(e,t){
  e.finishedWork=null,e.finishedLanes=0;
  var n=e.timeoutHandle;
  if(n!==-1&&(e.timeoutHandle=-1,Sy(n)),he!==null)for(n=he.return;
  n!==null;
  ){
    var r=n;
    switch(Nu(r),r.tag){
      case 1:r=r.type.childContextTypes,r!=null&&gs();
      break;
      case 3:Xr(),ie(Be),ie(Le),Du();
      break;
      case 5:Mu(r);
      break;
      case 4:Xr();
      break;
      case 13:ie(le);
      break;
      case 19:ie(le);
      break;
      case 10:Lu(r.type._context);
      break;
      case 22:case 23:Qu()
    }n=n.return
  }if(be=e,he=e=Tn(e.current,null),Se=We=t,we=0,Jo=null,Vu=Ks=ir=0,ze=Oo=null,Hn!==null){
    for(t=0;
    t<Hn.length;
    t++)if(n=Hn[t],r=n.interleaved,r!==null){
      n.interleaved=null;
      var o=r.next,i=n.pending;
      if(i!==null){
        var s=i.next;
        i.next=o,r.next=s
      }n.pending=r
    }Hn=null
  }return e
}function Am(e,t){
  do{
    var n=he;
    try{
      if(ju(),Yi.current=Cs,Es){
        for(var r=ue.memoizedState;
        r!==null;
        ){
          var o=r.queue;
          o!==null&&(o.pending=null),r=r.next
        }Es=!1
      }if(or=0,xe=ve=ue=null,Lo=!1,Go=0,qu.current=null,n===null||n.return===null){
        we=1,Jo=t,he=null;
        break
      }e:{
        var i=e,s=n.return,a=n,l=t;
        if(t=Se,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){
          var u=l,c=a,d=c.tag;
          if(!(c.mode&1)&&(d===0||d===11||d===15)){
            var m=c.alternate;
            m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)
          }var f=yd(s);
          if(f!==null){
            f.flags&=-257,wd(f,s,a,i,t),f.mode&1&&vd(i,u,t),t=f,l=u;
            var b=t.updateQueue;
            if(b===null){
              var y=new Set;
              y.add(l),t.updateQueue=y
            }else b.add(l);
            break e
          }else{
            if(!(t&1)){
              vd(i,u,t),Ku();
              break e
            }l=Error(j(426))
          }
        }else if(ae&&a.mode&1){
          var x=yd(s);
          if(x!==null){
            !(x.flags&65536)&&(x.flags|=256),wd(x,s,a,i,t),Tu(Jr(l,a));
            break e
          }
        }i=l=Jr(l,a),we!==4&&(we=2),Oo===null?Oo=[i]:Oo.push(i),i=s;
        do{
          switch(i.tag){
            case 3:i.flags|=65536,t&=-t,i.lanes|=t;
            var g=hm(i,l,t);
            dd(i,g);
            break e;
            case 1:a=l;
            var h=i.type,v=i.stateNode;
            if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Pn===null||!Pn.has(v)))){
              i.flags|=65536,t&=-t,i.lanes|=t;
              var k=gm(i,a,t);
              dd(i,k);
              break e
            }
          }i=i.return
        }while(i!==null)
      }Mm(n)
    }catch(S){
      t=S,he===n&&n!==null&&(he=n=n.return);
      continue
    }break
  }while(!0)
}function Om(){
  var e=Ps.current;
  return Ps.current=Cs,e===null?Cs:e
}function Ku(){
  (we===0||we===3||we===2)&&(we=4),be===null||!(ir&268435455)&&!(Ks&268435455)||fn(be,Se)
}function Rs(e,t){
  var n=X;
  X|=2;
  var r=Om();
  (be!==e||Se!==t)&&(Ft=null,er(e,t));
  do try{
    Ky();
    break
  }catch(o){
    Am(e,o)
  }while(!0);
  if(ju(),X=n,Ps.current=r,he!==null)throw Error(j(261));
  return be=null,Se=0,we
}function Ky(){
  for(;
  he!==null;
  )_m(he)
}function Gy(){
  for(;
  he!==null&&!xv();
  )_m(he)
}function _m(e){
  var t=Im(e.alternate,e,We);
  e.memoizedProps=e.pendingProps,t===null?Mm(e):he=t,qu.current=null
}function Mm(e){
  var t=e;
  do{
    var n=t.alternate;
    if(e=t.return,t.flags&32768){
      if(n=Uy(n,t),n!==null){
        n.flags&=32767,he=n;
        return
      }if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;
      else{
        we=6,he=null;
        return
      }
    }else if(n=By(n,t,We),n!==null){
      he=n;
      return
    }if(t=t.sibling,t!==null){
      he=t;
      return
    }he=t=e
  }while(t!==null);
  we===0&&(we=5)
}function Vn(e,t,n){
  var r=ee,o=ot.transition;
  try{
    ot.transition=null,ee=1,Yy(e,t,n,r)
  }finally{
    ot.transition=o,ee=r
  }return null
}function Yy(e,t,n,r){
  do Dr();
  while(wn!==null);
  if(X&6)throw Error(j(327));
  n=e.finishedWork;
  var o=e.finishedLanes;
  if(n===null)return null;
  if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));
  e.callbackNode=null,e.callbackPriority=0;
  var i=n.lanes|n.childLanes;
  if(jv(e,i),e===be&&(he=be=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ii||(Ii=!0,Fm(cs,function(){
    return Dr(),null
  })),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){
    i=ot.transition,ot.transition=null;
    var s=ee;
    ee=1;
    var a=X;
    X|=4,qu.current=null,Vy(e,n),Rm(n,e),gy(wl),fs=!!yl,wl=yl=null,e.current=n,Wy(n),bv(),X=a,ee=s,ot.transition=i
  }else e.current=n;
  if(Ii&&(Ii=!1,wn=e,Ts=o),i=e.pendingLanes,i===0&&(Pn=null),Ev(n.stateNode),qe(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;
  n<t.length;
  n++)o=t[n],r(o.value,{
    componentStack:o.stack,digest:o.digest
  });
  if(Ns)throw Ns=!1,e=zl,zl=null,e;
  return Ts&1&&e.tag!==0&&Dr(),i=e.pendingLanes,i&1?e===$l?_o++:(_o=0,$l=e):_o=0,Fn(),null
}function Dr(){
  if(wn!==null){
    var e=hp(Ts),t=ot.transition,n=ee;
    try{
      if(ot.transition=null,ee=16>e?16:e,wn===null)var r=!1;
      else{
        if(e=wn,wn=null,Ts=0,X&6)throw Error(j(331));
        var o=X;
        for(X|=4,I=e.current;
        I!==null;
        ){
          var i=I,s=i.child;
          if(I.flags&16){
            var a=i.deletions;
            if(a!==null){
              for(var l=0;
              l<a.length;
              l++){
                var u=a[l];
                for(I=u;
                I!==null;
                ){
                  var c=I;
                  switch(c.tag){
                    case 0:case 11:case 15:Ao(8,c,i)
                  }var d=c.child;
                  if(d!==null)d.return=c,I=d;
                  else for(;
                  I!==null;
                  ){
                    c=I;
                    var m=c.sibling,f=c.return;
                    if(Pm(c),c===u){
                      I=null;
                      break
                    }if(m!==null){
                      m.return=f,I=m;
                      break
                    }I=f
                  }
                }
              }var b=i.alternate;
              if(b!==null){
                var y=b.child;
                if(y!==null){
                  b.child=null;
                  do{
                    var x=y.sibling;
                    y.sibling=null,y=x
                  }while(y!==null)
                }
              }I=i
            }
          }if(i.subtreeFlags&2064&&s!==null)s.return=i,I=s;
          else e:for(;
          I!==null;
          ){
            if(i=I,i.flags&2048)switch(i.tag){
              case 0:case 11:case 15:Ao(9,i,i.return)
            }var g=i.sibling;
            if(g!==null){
              g.return=i.return,I=g;
              break e
            }I=i.return
          }
        }var h=e.current;
        for(I=h;
        I!==null;
        ){
          s=I;
          var v=s.child;
          if(s.subtreeFlags&2064&&v!==null)v.return=s,I=v;
          else e:for(s=h;
          I!==null;
          ){
            if(a=I,a.flags&2048)try{
              switch(a.tag){
                case 0:case 11:case 15:Qs(9,a)
              }
            }catch(S){
              fe(a,a.return,S)
            }if(a===s){
              I=null;
              break e
            }var k=a.sibling;
            if(k!==null){
              k.return=a.return,I=k;
              break e
            }I=a.return
          }
        }if(X=o,Fn(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{
          Lt.onPostCommitFiberRoot(zs,e)
        }catch{
          
        }r=!0
      }return r
    }finally{
      ee=n,ot.transition=t
    }
  }return!1
}function Ad(e,t,n){
  t=Jr(n,t),t=hm(e,t,1),e=Cn(e,t,1),t=Me(),e!==null&&(li(e,1,t),qe(e,t))
}function fe(e,t,n){
  if(e.tag===3)Ad(e,e,n);
  else for(;
  t!==null;
  ){
    if(t.tag===3){
      Ad(t,e,n);
      break
    }else if(t.tag===1){
      var r=t.stateNode;
      if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))){
        e=Jr(n,e),e=gm(t,e,1),t=Cn(t,e,1),e=Me(),t!==null&&(li(t,1,e),qe(t,e));
        break
      }
    }t=t.return
  }
}function Xy(e,t,n){
  var r=e.pingCache;
  r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(Se&n)===n&&(we===4||we===3&&(Se&130023424)===Se&&500>pe()-Wu?er(e,0):Vu|=n),qe(e,t)
}function Dm(e,t){
  t===0&&(e.mode&1?(t=Ni,Ni<<=1,!(Ni&130023424)&&(Ni=4194304)):t=1);
  var n=Me();
  e=Ht(e,t),e!==null&&(li(e,t,n),qe(e,n))
}function Jy(e){
  var t=e.memoizedState,n=0;
  t!==null&&(n=t.retryLane),Dm(e,n)
}function Zy(e,t){
  var n=0;
  switch(e.tag){
    case 13:var r=e.stateNode,o=e.memoizedState;
    o!==null&&(n=o.retryLane);
    break;
    case 19:r=e.stateNode;
    break;
    default:throw Error(j(314))
  }r!==null&&r.delete(t),Dm(e,n)
}var Im;
Im=function(e,t,n){
  if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)$e=!0;
  else{
    if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,$y(e,t,n);
    $e=!!(e.flags&131072)
  }else $e=!1,ae&&t.flags&1048576&&Bp(t,ws,t.index);
  switch(t.lanes=0,t.tag){
    case 2:var r=t.type;
    Ji(e,t),e=t.pendingProps;
    var o=Kr(t,Le.current);
    Mr(t,n),o=Fu(null,t,r,e,o,n);
    var i=zu();
    return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(i=!0,vs(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ou(t),o.updater=Hs,t.stateNode=o,o._reactInternals=t,Tl(t,r,e,n),t=Ll(null,t,r,!0,i,n)):(t.tag=0,ae&&i&&Pu(t),Oe(null,t,o,n),t=t.child),t;
    case 16:r=t.elementType;
    e:{
      switch(Ji(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=t0(r),e=ft(r,e),o){
        case 0:t=jl(null,t,r,e,n);
        break e;
        case 1:t=kd(null,t,r,e,n);
        break e;
        case 11:t=xd(null,t,r,e,n);
        break e;
        case 14:t=bd(null,t,r,ft(r.type,e),n);
        break e
      }throw Error(j(306,r,""))
    }return t;
    case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),jl(e,t,r,o,n);
    case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),kd(e,t,r,o,n);
    case 3:e:{
      if(xm(t),e===null)throw Error(j(387));
      r=t.pendingProps,i=t.memoizedState,o=i.element,Qp(e,t),ks(t,r,null,n);
      var s=t.memoizedState;
      if(r=s.element,i.isDehydrated)if(i={
        element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions
      },t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){
        o=Jr(Error(j(423)),t),t=Sd(e,t,r,n,o);
        break e
      }else if(r!==o){
        o=Jr(Error(j(424)),t),t=Sd(e,t,r,n,o);
        break e
      }else for(Qe=En(t.stateNode.containerInfo.firstChild),Ke=t,ae=!0,vt=null,n=Wp(t,null,r,n),t.child=n;
      n;
      )n.flags=n.flags&-3|4096,n=n.sibling;
      else{
        if(Gr(),r===o){
          t=Qt(e,t,n);
          break e
        }Oe(e,t,r,n)
      }t=t.child
    }return t;
    case 5:return Kp(t),e===null&&Cl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,xl(r,o)?s=null:i!==null&&xl(r,i)&&(t.flags|=32),wm(e,t),Oe(e,t,s,n),t.child;
    case 6:return e===null&&Cl(t),null;
    case 13:return bm(e,t,n);
    case 4:return _u(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yr(t,null,r,n):Oe(e,t,r,n),t.child;
    case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),xd(e,t,r,o,n);
    case 7:return Oe(e,t,t.pendingProps,n),t.child;
    case 8:return Oe(e,t,t.pendingProps.children,n),t.child;
    case 12:return Oe(e,t,t.pendingProps.children,n),t.child;
    case 10:e:{
      if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,ne(xs,r._currentValue),r._currentValue=s,i!==null)if(xt(i.value,s)){
        if(i.children===o.children&&!Be.current){
          t=Qt(e,t,n);
          break e
        }
      }else for(i=t.child,i!==null&&(i.return=t);
      i!==null;
      ){
        var a=i.dependencies;
        if(a!==null){
          s=i.child;
          for(var l=a.firstContext;
          l!==null;
          ){
            if(l.context===r){
              if(i.tag===1){
                l=qt(-1,n&-n),l.tag=2;
                var u=i.updateQueue;
                if(u!==null){
                  u=u.shared;
                  var c=u.pending;
                  c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l
                }
              }i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Pl(i.return,n,t),a.lanes|=n;
              break
            }l=l.next
          }
        }else if(i.tag===10)s=i.type===t.type?null:i.child;
        else if(i.tag===18){
          if(s=i.return,s===null)throw Error(j(341));
          s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Pl(s,n,t),s=i.sibling
        }else s=i.child;
        if(s!==null)s.return=i;
        else for(s=i;
        s!==null;
        ){
          if(s===t){
            s=null;
            break
          }if(i=s.sibling,i!==null){
            i.return=s.return,s=i;
            break
          }s=s.return
        }i=s
      }Oe(e,t,o.children,n),t=t.child
    }return t;
    case 9:return o=t.type,r=t.pendingProps.children,Mr(t,n),o=it(o),r=r(o),t.flags|=1,Oe(e,t,r,n),t.child;
    case 14:return r=t.type,o=ft(r,t.pendingProps),o=ft(r.type,o),bd(e,t,r,o,n);
    case 15:return vm(e,t,t.type,t.pendingProps,n);
    case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),Ji(e,t),t.tag=1,Ue(r)?(e=!0,vs(t)):e=!1,Mr(t,n),mm(t,r,o),Tl(t,r,o,n),Ll(null,t,r,!0,e,n);
    case 19:return km(e,t,n);
    case 22:return ym(e,t,n)
  }throw Error(j(156,t.tag))
};
function Fm(e,t){
  return dp(e,t)
}function e0(e,t,n,r){
  this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null
}function rt(e,t,n,r){
  return new e0(e,t,n,r)
}function Gu(e){
  return e=e.prototype,!(!e||!e.isReactComponent)
}function t0(e){
  if(typeof e=="function")return Gu(e)?1:0;
  if(e!=null){
    if(e=e.$$typeof,e===mu)return 11;
    if(e===hu)return 14
  }return 2
}function Tn(e,t){
  var n=e.alternate;
  return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{
    lanes:t.lanes,firstContext:t.firstContext
  },n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n
}function ts(e,t,n,r,o,i){
  var s=2;
  if(r=e,typeof e=="function")Gu(e)&&(s=1);
  else if(typeof e=="string")s=5;
  else e:switch(e){
    case xr:return tr(n.children,o,i,t);
    case pu:s=8,o|=8;
    break;
    case Ja:return e=rt(12,n,t,o|2),e.elementType=Ja,e.lanes=i,e;
    case Za:return e=rt(13,n,t,o),e.elementType=Za,e.lanes=i,e;
    case el:return e=rt(19,n,t,o),e.elementType=el,e.lanes=i,e;
    case Kf:return Gs(n,o,i,t);
    default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){
      case Hf:s=10;
      break e;
      case Qf:s=9;
      break e;
      case mu:s=11;
      break e;
      case hu:s=14;
      break e;
      case un:s=16,r=null;
      break e
    }throw Error(j(130,e==null?e:typeof e,""))
  }return t=rt(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t
}function tr(e,t,n,r){
  return e=rt(7,e,r,t),e.lanes=n,e
}function Gs(e,t,n,r){
  return e=rt(22,e,r,t),e.elementType=Kf,e.lanes=n,e.stateNode={
    isHidden:!1
  },e
}function $a(e,t,n){
  return e=rt(6,e,null,t),e.lanes=n,e
}function Ba(e,t,n){
  return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={
    containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation
  },t
}function n0(e,t,n,r,o){
  this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ba(0),this.expirationTimes=ba(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ba(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null
}function Yu(e,t,n,r,o,i,s,a,l){
  return e=new n0(e,t,n,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=rt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={
    element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null
  },Ou(i),e
}function r0(e,t,n){
  var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;
  return{
    $$typeof:wr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n
  }
}function zm(e){
  if(!e)return Ln;
  e=e._reactInternals;
  e:{
    if(ur(e)!==e||e.tag!==1)throw Error(j(170));
    var t=e;
    do{
      switch(t.tag){
        case 3:t=t.stateNode.context;
        break e;
        case 1:if(Ue(t.type)){
          t=t.stateNode.__reactInternalMemoizedMergedChildContext;
          break e
        }
      }t=t.return
    }while(t!==null);
    throw Error(j(171))
  }if(e.tag===1){
    var n=e.type;
    if(Ue(n))return zp(e,n,t)
  }return t
}function $m(e,t,n,r,o,i,s,a,l){
  return e=Yu(n,r,!0,e,o,i,s,a,l),e.context=zm(null),n=e.current,r=Me(),o=Nn(n),i=qt(r,o),i.callback=t??null,Cn(n,i,o),e.current.lanes=o,li(e,o,r),qe(e,r),e
}function Ys(e,t,n,r){
  var o=t.current,i=Me(),s=Nn(o);
  return n=zm(n),t.context===null?t.context=n:t.pendingContext=n,t=qt(i,s),t.payload={
    element:e
  },r=r===void 0?null:r,r!==null&&(t.callback=r),e=Cn(o,t,s),e!==null&&(wt(e,o,s,i),Gi(e,o,s)),s
}function js(e){
  if(e=e.current,!e.child)return null;
  switch(e.child.tag){
    case 5:return e.child.stateNode;
    default:return e.child.stateNode
  }
}function Od(e,t){
  if(e=e.memoizedState,e!==null&&e.dehydrated!==null){
    var n=e.retryLane;
    e.retryLane=n!==0&&n<t?n:t
  }
}function Xu(e,t){
  Od(e,t),(e=e.alternate)&&Od(e,t)
}function o0(){
  return null
}var Bm=typeof reportError=="function"?reportError:function(e){
  console.error(e)
};
function Ju(e){
  this._internalRoot=e
}Xs.prototype.render=Ju.prototype.render=function(e){
  var t=this._internalRoot;
  if(t===null)throw Error(j(409));
  Ys(e,t,null,null)
};
Xs.prototype.unmount=Ju.prototype.unmount=function(){
  var e=this._internalRoot;
  if(e!==null){
    this._internalRoot=null;
    var t=e.containerInfo;
    sr(function(){
      Ys(null,e,null,null)
    }),t[Wt]=null
  }
};
function Xs(e){
  this._internalRoot=e
}Xs.prototype.unstable_scheduleHydration=function(e){
  if(e){
    var t=yp();
    e={
      blockedOn:null,target:e,priority:t
    };
    for(var n=0;
    n<dn.length&&t!==0&&t<dn[n].priority;
    n++);
    dn.splice(n,0,e),n===0&&xp(e)
  }
};
function Zu(e){
  return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)
}function Js(e){
  return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))
}function _d(){
  
}function i0(e,t,n,r,o){
  if(o){
    if(typeof r=="function"){
      var i=r;
      r=function(){
        var u=js(s);
        i.call(u)
      }
    }var s=$m(t,r,e,0,null,!1,!1,"",_d);
    return e._reactRootContainer=s,e[Wt]=s.current,Vo(e.nodeType===8?e.parentNode:e),sr(),s
  }for(;
  o=e.lastChild;
  )e.removeChild(o);
  if(typeof r=="function"){
    var a=r;
    r=function(){
      var u=js(l);
      a.call(u)
    }
  }var l=Yu(e,0,!1,null,null,!1,!1,"",_d);
  return e._reactRootContainer=l,e[Wt]=l.current,Vo(e.nodeType===8?e.parentNode:e),sr(function(){
    Ys(t,l,n,r)
  }),l
}function Zs(e,t,n,r,o){
  var i=n._reactRootContainer;
  if(i){
    var s=i;
    if(typeof o=="function"){
      var a=o;
      o=function(){
        var l=js(s);
        a.call(l)
      }
    }Ys(t,s,e,o)
  }else s=i0(n,t,e,o,r);
  return js(s)
}gp=function(e){
  switch(e.tag){
    case 3:var t=e.stateNode;
    if(t.current.memoizedState.isDehydrated){
      var n=Eo(t.pendingLanes);
      n!==0&&(yu(t,n|1),qe(t,pe()),!(X&6)&&(Zr=pe()+500,Fn()))
    }break;
    case 13:sr(function(){
      var r=Ht(e,1);
      if(r!==null){
        var o=Me();
        wt(r,e,1,o)
      }
    }),Xu(e,1)
  }
};
wu=function(e){
  if(e.tag===13){
    var t=Ht(e,134217728);
    if(t!==null){
      var n=Me();
      wt(t,e,134217728,n)
    }Xu(e,134217728)
  }
};
vp=function(e){
  if(e.tag===13){
    var t=Nn(e),n=Ht(e,t);
    if(n!==null){
      var r=Me();
      wt(n,e,t,r)
    }Xu(e,t)
  }
};
yp=function(){
  return ee
};
wp=function(e,t){
  var n=ee;
  try{
    return ee=e,t()
  }finally{
    ee=n
  }
};
cl=function(e,t,n){
  switch(t){
    case"input":if(rl(e,n),t=n.name,n.type==="radio"&&t!=null){
      for(n=e;
      n.parentNode;
      )n=n.parentNode;
      for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;
      t<n.length;
      t++){
        var r=n[t];
        if(r!==e&&r.form===e.form){
          var o=qs(r);
          if(!o)throw Error(j(90));
          Yf(r),rl(r,o)
        }
      }
    }break;
    case"textarea":Jf(e,n);
    break;
    case"select":t=n.value,t!=null&&Lr(e,!!n.multiple,t,!1)
  }
};
ip=Hu;
sp=sr;
var s0={
  usingClientEntryPoint:!1,Events:[ci,Er,qs,rp,op,Hu]
},wo={
  findFiberByHostInstance:Wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"
},a0={
  bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){
    return e=up(e),e===null?null:e.stateNode
  },findFiberByHostInstance:wo.findFiberByHostInstance||o0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"
};
if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){
  var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;
  if(!Fi.isDisabled&&Fi.supportsFiber)try{
    zs=Fi.inject(a0),Lt=Fi
  }catch{
    
  }
}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s0;
Xe.createPortal=function(e,t){
  var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;
  if(!Zu(t))throw Error(j(200));
  return r0(e,t,null,n)
};
Xe.createRoot=function(e,t){
  if(!Zu(e))throw Error(j(299));
  var n=!1,r="",o=Bm;
  return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Yu(e,1,!1,null,null,n,!1,r,o),e[Wt]=t.current,Vo(e.nodeType===8?e.parentNode:e),new Ju(t)
};
Xe.findDOMNode=function(e){
  if(e==null)return null;
  if(e.nodeType===1)return e;
  var t=e._reactInternals;
  if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));
  return e=up(t),e=e===null?null:e.stateNode,e
};
Xe.flushSync=function(e){
  return sr(e)
};
Xe.hydrate=function(e,t,n){
  if(!Js(t))throw Error(j(200));
  return Zs(null,e,t,!0,n)
};
Xe.hydrateRoot=function(e,t,n){
  if(!Zu(e))throw Error(j(405));
  var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Bm;
  if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=$m(t,null,e,1,n??null,o,!1,i,s),e[Wt]=t.current,Vo(e),r)for(e=0;
  e<r.length;
  e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);
  return new Xs(t)
};
Xe.render=function(e,t,n){
  if(!Js(t))throw Error(j(200));
  return Zs(null,e,t,!1,n)
};
Xe.unmountComponentAtNode=function(e){
  if(!Js(e))throw Error(j(40));
  return e._reactRootContainer?(sr(function(){
    Zs(null,null,e,!1,function(){
      e._reactRootContainer=null,e[Wt]=null
    })
  }),!0):!1
};
Xe.unstable_batchedUpdates=Hu;
Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){
  if(!Js(n))throw Error(j(200));
  if(e==null||e._reactInternals===void 0)throw Error(j(38));
  return Zs(e,t,n,!1,r)
};
Xe.version="18.3.1-next-f1338f8080-20240426";
function Um(){
  if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Um)
  }catch(e){
    console.error(e)
  }
}Um(),Uf.exports=Xe;
var fi=Uf.exports;
const qm=Rf(fi);
var Vm,Md=fi;
Vm=Md.createRoot,Md.hydrateRoot;
const l0=1,u0=1e6;
let Ua=0;
function c0(){
  return Ua=(Ua+1)%Number.MAX_SAFE_INTEGER,Ua.toString()
}const qa=new Map,Dd=e=>{
  if(qa.has(e))return;
  const t=setTimeout(()=>{
    qa.delete(e),Mo({
      type:"REMOVE_TOAST",toastId:e
    })
  },u0);
  qa.set(e,t)
},d0=(e,t)=>{
  switch(t.type){
    case"ADD_TOAST":return{
      ...e,toasts:[t.toast,...e.toasts].slice(0,l0)
    };
    case"UPDATE_TOAST":return{
      ...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{
        ...n,...t.toast
      }:n)
    };
    case"DISMISS_TOAST":{
      const{
        toastId:n
      }=t;
      return n?Dd(n):e.toasts.forEach(r=>{
        Dd(r.id)
      }),{
        ...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{
          ...r,open:!1
        }:r)
      }
    }case"REMOVE_TOAST":return t.toastId===void 0?{
      ...e,toasts:[]
    }:{
      ...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)
    }
  }
},ns=[];
let rs={
  toasts:[]
};
function Mo(e){
  rs=d0(rs,e),ns.forEach(t=>{
    t(rs)
  })
}function f0({
  ...e
}){
  const t=c0(),n=o=>Mo({
    type:"UPDATE_TOAST",toast:{
      ...o,id:t
    }
  }),r=()=>Mo({
    type:"DISMISS_TOAST",toastId:t
  });
  return Mo({
    type:"ADD_TOAST",toast:{
      ...e,id:t,open:!0,onOpenChange:o=>{
        o||r()
      }
    }
  }),{
    id:t,dismiss:r,update:n
  }
}function p0(){
  const[e,t]=w.useState(rs);
  return w.useEffect(()=>(ns.push(t),()=>{
    const n=ns.indexOf(t);
    n>-1&&ns.splice(n,1)
  }),[e]),{
    ...e,toast:f0,dismiss:n=>Mo({
      type:"DISMISS_TOAST",toastId:n
    })
  }
}function ye(e,t,{
  checkForDefaultPrevented:n=!0
}={
  
}){
  return function(o){
    if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)
  }
}function Id(e,t){
  if(typeof e=="function")return e(t);
  e!=null&&(e.current=t)
}function Wm(...e){
  return t=>{
    let n=!1;
    const r=e.map(o=>{
      const i=Id(o,t);
      return!n&&typeof i=="function"&&(n=!0),i
    });
    if(n)return()=>{
      for(let o=0;
      o<r.length;
      o++){
        const i=r[o];
        typeof i=="function"?i():Id(e[o],null)
      }
    }
  }
}function bt(...e){
  return w.useCallback(Wm(...e),e)
}function ea(e,t=[]){
  let n=[];
  function r(i,s){
    const a=w.createContext(s),l=n.length;
    n=[...n,s];
    const u=d=>{
      var g;
      const{
        scope:m,children:f,...b
      }=d,y=((g=m==null?void 0:m[e])==null?void 0:g[l])||a,x=w.useMemo(()=>b,Object.values(b));
      return p.jsx(y.Provider,{
        value:x,children:f
      })
    };
    u.displayName=i+"Provider";
    function c(d,m){
      var y;
      const f=((y=m==null?void 0:m[e])==null?void 0:y[l])||a,b=w.useContext(f);
      if(b)return b;
      if(s!==void 0)return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``)
    }return[u,c]
  }const o=()=>{
    const i=n.map(s=>w.createContext(s));
    return function(a){
      const l=(a==null?void 0:a[e])||i;
      return w.useMemo(()=>({
        [`__scope${e}`]:{
          ...a,[e]:l
        }
      }),[a,l])
    }
  };
  return o.scopeName=e,[r,m0(o,...t)]
}function m0(...e){
  const t=e[0];
  if(e.length===1)return t;
  const n=()=>{
    const r=e.map(o=>({
      useScope:o(),scopeName:o.scopeName
    }));
    return function(i){
      const s=r.reduce((a,{
        useScope:l,scopeName:u
      })=>{
        const d=l(i)[`__scope${u}`];
        return{
          ...a,...d
        }
      },{
        
      });
      return w.useMemo(()=>({
        [`__scope${t.scopeName}`]:s
      }),[s])
    }
  };
  return n.scopeName=t.scopeName,n
}function ql(e){
  const t=h0(e),n=w.forwardRef((r,o)=>{
    const{
      children:i,...s
    }=r,a=w.Children.toArray(i),l=a.find(v0);
    if(l){
      const u=l.props.children,c=a.map(d=>d===l?w.Children.count(u)>1?w.Children.only(null):w.isValidElement(u)?u.props.children:null:d);
      return p.jsx(t,{
        ...s,ref:o,children:w.isValidElement(u)?w.cloneElement(u,void 0,c):null
      })
    }return p.jsx(t,{
      ...s,ref:o,children:i
    })
  });
  return n.displayName=`${e}.Slot`,n
}function h0(e){
  const t=w.forwardRef((n,r)=>{
    const{
      children:o,...i
    }=n;
    if(w.isValidElement(o)){
      const s=w0(o),a=y0(i,o.props);
      return o.type!==w.Fragment&&(a.ref=r?Wm(r,s):s),w.cloneElement(o,a)
    }return w.Children.count(o)>1?w.Children.only(null):null
  });
  return t.displayName=`${e}.SlotClone`,t
}var Hm=Symbol("radix.slottable");
function g0(e){
  const t=({
    children:n
  })=>p.jsx(p.Fragment,{
    children:n
  });
  return t.displayName=`${e}.Slottable`,t.__radixId=Hm,t
}function v0(e){
  return w.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Hm
}function y0(e,t){
  const n={
    ...t
  };
  for(const r in t){
    const o=e[r],i=t[r];
    /^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{
      const l=i(...a);
      return o(...a),l
    }:o&&(n[r]=o):r==="style"?n[r]={
      ...o,...i
    }:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))
  }return{
    ...e,...n
  }
}function w0(e){
  var r,o;
  let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;
  return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)
}function x0(e){
  const t=e+"CollectionProvider",[n,r]=ea(t),[o,i]=n(t,{
    collectionRef:{
      current:null
    },itemMap:new Map
  }),s=y=>{
    const{
      scope:x,children:g
    }=y,h=O.useRef(null),v=O.useRef(new Map).current;
    return p.jsx(o,{
      scope:x,itemMap:v,collectionRef:h,children:g
    })
  };
  s.displayName=t;
  const a=e+"CollectionSlot",l=ql(a),u=O.forwardRef((y,x)=>{
    const{
      scope:g,children:h
    }=y,v=i(a,g),k=bt(x,v.collectionRef);
    return p.jsx(l,{
      ref:k,children:h
    })
  });
  u.displayName=a;
  const c=e+"CollectionItemSlot",d="data-radix-collection-item",m=ql(c),f=O.forwardRef((y,x)=>{
    const{
      scope:g,children:h,...v
    }=y,k=O.useRef(null),S=bt(x,k),E=i(c,g);
    return O.useEffect(()=>(E.itemMap.set(k,{
      ref:k,...v
    }),()=>void E.itemMap.delete(k))),p.jsx(m,{
      [d]:"",ref:S,children:h
    })
  });
  f.displayName=c;
  function b(y){
    const x=i(e+"CollectionConsumer",y);
    return O.useCallback(()=>{
      const h=x.collectionRef.current;
      if(!h)return[];
      const v=Array.from(h.querySelectorAll(`[${d}]`));
      return Array.from(x.itemMap.values()).sort((E,C)=>v.indexOf(E.ref.current)-v.indexOf(C.ref.current))
    },[x.collectionRef,x.itemMap])
  }return[{
    Provider:s,Slot:u,ItemSlot:f
  },b,r]
}var b0=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ve=b0.reduce((e,t)=>{
  const n=ql(`Primitive.${t}`),r=w.forwardRef((o,i)=>{
    const{
      asChild:s,...a
    }=o,l=s?n:t;
    return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),p.jsx(l,{
      ...a,ref:i
    })
  });
  return r.displayName=`Primitive.${t}`,{
    ...e,[t]:r
  }
},{
  
});
function Qm(e,t){
  e&&fi.flushSync(()=>e.dispatchEvent(t))
}function An(e){
  const t=w.useRef(e);
  return w.useEffect(()=>{
    t.current=e
  }),w.useMemo(()=>(...n)=>{
    var r;
    return(r=t.current)==null?void 0:r.call(t,...n)
  },[])
}function k0(e,t=globalThis==null?void 0:globalThis.document){
  const n=An(e);
  w.useEffect(()=>{
    const r=o=>{
      o.key==="Escape"&&n(o)
    };
    return t.addEventListener("keydown",r,{
      capture:!0
    }),()=>t.removeEventListener("keydown",r,{
      capture:!0
    })
  },[n,t])
}var S0="DismissableLayer",Vl="dismissableLayer.update",E0="dismissableLayer.pointerDownOutside",C0="dismissableLayer.focusOutside",Fd,Km=w.createContext({
  layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set
}),ec=w.forwardRef((e,t)=>{
  const{
    disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:i,onInteractOutside:s,onDismiss:a,...l
  }=e,u=w.useContext(Km),[c,d]=w.useState(null),m=(c==null?void 0:c.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,f]=w.useState({
    
  }),b=bt(t,C=>d(C)),y=Array.from(u.layers),[x]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),g=y.indexOf(x),h=c?y.indexOf(c):-1,v=u.layersWithOutsidePointerEventsDisabled.size>0,k=h>=g,S=N0(C=>{
    const R=C.target,L=[...u.branches].some(A=>A.contains(R));
    !k||L||(o==null||o(C),s==null||s(C),C.defaultPrevented||a==null||a())
  },m),E=T0(C=>{
    const R=C.target;
    [...u.branches].some(A=>A.contains(R))||(i==null||i(C),s==null||s(C),C.defaultPrevented||a==null||a())
  },m);
  return k0(C=>{
    h===u.layers.size-1&&(r==null||r(C),!C.defaultPrevented&&a&&(C.preventDefault(),a()))
  },m),w.useEffect(()=>{
    if(c)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Fd=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(c)),u.layers.add(c),zd(),()=>{
      n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=Fd)
    }
  },[c,m,n,u]),w.useEffect(()=>()=>{
    c&&(u.layers.delete(c),u.layersWithOutsidePointerEventsDisabled.delete(c),zd())
  },[c,u]),w.useEffect(()=>{
    const C=()=>f({
      
    });
    return document.addEventListener(Vl,C),()=>document.removeEventListener(Vl,C)
  },[]),p.jsx(Ve.div,{
    ...l,ref:b,style:{
      pointerEvents:v?k?"auto":"none":void 0,...e.style
    },onFocusCapture:ye(e.onFocusCapture,E.onFocusCapture),onBlurCapture:ye(e.onBlurCapture,E.onBlurCapture),onPointerDownCapture:ye(e.onPointerDownCapture,S.onPointerDownCapture)
  })
});
ec.displayName=S0;
var P0="DismissableLayerBranch",Gm=w.forwardRef((e,t)=>{
  const n=w.useContext(Km),r=w.useRef(null),o=bt(t,r);
  return w.useEffect(()=>{
    const i=r.current;
    if(i)return n.branches.add(i),()=>{
      n.branches.delete(i)
    }
  },[n.branches]),p.jsx(Ve.div,{
    ...e,ref:o
  })
});
Gm.displayName=P0;
function N0(e,t=globalThis==null?void 0:globalThis.document){
  const n=An(e),r=w.useRef(!1),o=w.useRef(()=>{
    
  });
  return w.useEffect(()=>{
    const i=a=>{
      if(a.target&&!r.current){
        let l=function(){
          Ym(E0,n,u,{
            discrete:!0
          })
        };
        const u={
          originalEvent:a
        };
        a.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=l,t.addEventListener("click",o.current,{
          once:!0
        })):l()
      }else t.removeEventListener("click",o.current);
      r.current=!1
    },s=window.setTimeout(()=>{
      t.addEventListener("pointerdown",i)
    },0);
    return()=>{
      window.clearTimeout(s),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)
    }
  },[t,n]),{
    onPointerDownCapture:()=>r.current=!0
  }
}function T0(e,t=globalThis==null?void 0:globalThis.document){
  const n=An(e),r=w.useRef(!1);
  return w.useEffect(()=>{
    const o=i=>{
      i.target&&!r.current&&Ym(C0,n,{
        originalEvent:i
      },{
        discrete:!1
      })
    };
    return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)
  },[t,n]),{
    onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1
  }
}function zd(){
  const e=new CustomEvent(Vl);
  document.dispatchEvent(e)
}function Ym(e,t,n,{
  discrete:r
}){
  const o=n.originalEvent.target,i=new CustomEvent(e,{
    bubbles:!1,cancelable:!0,detail:n
  });
  t&&o.addEventListener(e,t,{
    once:!0
  }),r?Qm(o,i):o.dispatchEvent(i)
}var R0=ec,j0=Gm,On=globalThis!=null&&globalThis.document?w.useLayoutEffect:()=>{
  
},L0="Portal",Xm=w.forwardRef((e,t)=>{
  var a;
  const{
    container:n,...r
  }=e,[o,i]=w.useState(!1);
  On(()=>i(!0),[]);
  const s=n||o&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);
  return s?qm.createPortal(p.jsx(Ve.div,{
    ...r,ref:t
  }),s):null
});
Xm.displayName=L0;
function A0(e,t){
  return w.useReducer((n,r)=>t[n][r]??n,e)
}var tc=e=>{
  const{
    present:t,children:n
  }=e,r=O0(t),o=typeof n=="function"?n({
    present:r.isPresent
  }):w.Children.only(n),i=bt(r.ref,_0(o));
  return typeof n=="function"||r.isPresent?w.cloneElement(o,{
    ref:i
  }):null
};
tc.displayName="Presence";
function O0(e){
  const[t,n]=w.useState(),r=w.useRef(null),o=w.useRef(e),i=w.useRef("none"),s=e?"mounted":"unmounted",[a,l]=A0(s,{
    mounted:{
      UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"
    },unmountSuspended:{
      MOUNT:"mounted",ANIMATION_END:"unmounted"
    },unmounted:{
      MOUNT:"mounted"
    }
  });
  return w.useEffect(()=>{
    const u=zi(r.current);
    i.current=a==="mounted"?u:"none"
  },[a]),On(()=>{
    const u=r.current,c=o.current;
    if(c!==e){
      const m=i.current,f=zi(u);
      e?l("MOUNT"):f==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(c&&m!==f?"ANIMATION_OUT":"UNMOUNT"),o.current=e
    }
  },[e,l]),On(()=>{
    if(t){
      let u;
      const c=t.ownerDocument.defaultView??window,d=f=>{
        const y=zi(r.current).includes(f.animationName);
        if(f.target===t&&y&&(l("ANIMATION_END"),!o.current)){
          const x=t.style.animationFillMode;
          t.style.animationFillMode="forwards",u=c.setTimeout(()=>{
            t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)
          })
        }
      },m=f=>{
        f.target===t&&(i.current=zi(r.current))
      };
      return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{
        c.clearTimeout(u),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)
      }
    }else l("ANIMATION_END")
  },[t,l]),{
    isPresent:["mounted","unmountSuspended"].includes(a),ref:w.useCallback(u=>{
      r.current=u?getComputedStyle(u):null,n(u)
    },[])
  }
}function zi(e){
  return(e==null?void 0:e.animationName)||"none"
}function _0(e){
  var r,o;
  let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;
  return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)
}var M0=$f[" useInsertionEffect ".trim().toString()]||On;
function D0({
  prop:e,defaultProp:t,onChange:n=()=>{
    
  },caller:r
}){
  const[o,i,s]=I0({
    defaultProp:t,onChange:n
  }),a=e!==void 0,l=a?e:o;
  {
    const c=w.useRef(e!==void 0);
    w.useEffect(()=>{
      const d=c.current;
      d!==a&&console.warn(`${r} is changing from ${d?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=a
    },[a,r])
  }const u=w.useCallback(c=>{
    var d;
    if(a){
      const m=F0(c)?c(e):c;
      m!==e&&((d=s.current)==null||d.call(s,m))
    }else i(c)
  },[a,e,i,s]);
  return[l,u]
}function I0({
  defaultProp:e,onChange:t
}){
  const[n,r]=w.useState(e),o=w.useRef(n),i=w.useRef(t);
  return M0(()=>{
    i.current=t
  },[t]),w.useEffect(()=>{
    var s;
    o.current!==n&&((s=i.current)==null||s.call(i,n),o.current=n)
  },[n,o]),[n,r,i]
}function F0(e){
  return typeof e=="function"
}var z0=Object.freeze({
  position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"
}),$0="VisuallyHidden",ta=w.forwardRef((e,t)=>p.jsx(Ve.span,{
  ...e,ref:t,style:{
    ...z0,...e.style
  }
}));
ta.displayName=$0;
var B0=ta,nc="ToastProvider",[rc,U0,q0]=x0("Toast"),[Jm,RS]=ea("Toast",[q0]),[V0,na]=Jm(nc),Zm=e=>{
  const{
    __scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:o="right",swipeThreshold:i=50,children:s
  }=e,[a,l]=w.useState(null),[u,c]=w.useState(0),d=w.useRef(!1),m=w.useRef(!1);
  return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${nc}\`. Expected non-empty \`string\`.`),p.jsx(rc.Provider,{
    scope:t,children:p.jsx(V0,{
      scope:t,label:n,duration:r,swipeDirection:o,swipeThreshold:i,toastCount:u,viewport:a,onViewportChange:l,onToastAdd:w.useCallback(()=>c(f=>f+1),[]),onToastRemove:w.useCallback(()=>c(f=>f-1),[]),isFocusedToastEscapeKeyDownRef:d,isClosePausedRef:m,children:s
    })
  })
};
Zm.displayName=nc;
var eh="ToastViewport",W0=["F8"],Wl="toast.viewportPause",Hl="toast.viewportResume",th=w.forwardRef((e,t)=>{
  const{
    __scopeToast:n,hotkey:r=W0,label:o="Notifications ({hotkey})",...i
  }=e,s=na(eh,n),a=U0(n),l=w.useRef(null),u=w.useRef(null),c=w.useRef(null),d=w.useRef(null),m=bt(t,d,s.onViewportChange),f=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),b=s.toastCount>0;
  w.useEffect(()=>{
    const x=g=>{
      var v;
      r.length!==0&&r.every(k=>g[k]||g.code===k)&&((v=d.current)==null||v.focus())
    };
    return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)
  },[r]),w.useEffect(()=>{
    const x=l.current,g=d.current;
    if(b&&x&&g){
      const h=()=>{
        if(!s.isClosePausedRef.current){
          const E=new CustomEvent(Wl);
          g.dispatchEvent(E),s.isClosePausedRef.current=!0
        }
      },v=()=>{
        if(s.isClosePausedRef.current){
          const E=new CustomEvent(Hl);
          g.dispatchEvent(E),s.isClosePausedRef.current=!1
        }
      },k=E=>{
        !x.contains(E.relatedTarget)&&v()
      },S=()=>{
        x.contains(document.activeElement)||v()
      };
      return x.addEventListener("focusin",h),x.addEventListener("focusout",k),x.addEventListener("pointermove",h),x.addEventListener("pointerleave",S),window.addEventListener("blur",h),window.addEventListener("focus",v),()=>{
        x.removeEventListener("focusin",h),x.removeEventListener("focusout",k),x.removeEventListener("pointermove",h),x.removeEventListener("pointerleave",S),window.removeEventListener("blur",h),window.removeEventListener("focus",v)
      }
    }
  },[b,s.isClosePausedRef]);
  const y=w.useCallback(({
    tabbingDirection:x
  })=>{
    const h=a().map(v=>{
      const k=v.ref.current,S=[k,...ow(k)];
      return x==="forwards"?S:S.reverse()
    });
    return(x==="forwards"?h.reverse():h).flat()
  },[a]);
  return w.useEffect(()=>{
    const x=d.current;
    if(x){
      const g=h=>{
        var S,E,C;
        const v=h.altKey||h.ctrlKey||h.metaKey;
        if(h.key==="Tab"&&!v){
          const R=document.activeElement,L=h.shiftKey;
          if(h.target===x&&L){
            (S=u.current)==null||S.focus();
            return
          }const M=y({
            tabbingDirection:L?"backwards":"forwards"
          }),q=M.findIndex(_=>_===R);
          Va(M.slice(q+1))?h.preventDefault():L?(E=u.current)==null||E.focus():(C=c.current)==null||C.focus()
        }
      };
      return x.addEventListener("keydown",g),()=>x.removeEventListener("keydown",g)
    }
  },[a,y]),p.jsxs(j0,{
    ref:l,role:"region","aria-label":o.replace("{hotkey}",f),tabIndex:-1,style:{
      pointerEvents:b?void 0:"none"
    },children:[b&&p.jsx(Ql,{
      ref:u,onFocusFromOutsideViewport:()=>{
        const x=y({
          tabbingDirection:"forwards"
        });
        Va(x)
      }
    }),p.jsx(rc.Slot,{
      scope:n,children:p.jsx(Ve.ol,{
        tabIndex:-1,...i,ref:m
      })
    }),b&&p.jsx(Ql,{
      ref:c,onFocusFromOutsideViewport:()=>{
        const x=y({
          tabbingDirection:"backwards"
        });
        Va(x)
      }
    })]
  })
});
th.displayName=eh;
var nh="ToastFocusProxy",Ql=w.forwardRef((e,t)=>{
  const{
    __scopeToast:n,onFocusFromOutsideViewport:r,...o
  }=e,i=na(nh,n);
  return p.jsx(ta,{
    "aria-hidden":!0,tabIndex:0,...o,ref:t,style:{
      position:"fixed"
    },onFocus:s=>{
      var u;
      const a=s.relatedTarget;
      !((u=i.viewport)!=null&&u.contains(a))&&r()
    }
  })
});
Ql.displayName=nh;
var pi="Toast",H0="toast.swipeStart",Q0="toast.swipeMove",K0="toast.swipeCancel",G0="toast.swipeEnd",rh=w.forwardRef((e,t)=>{
  const{
    forceMount:n,open:r,defaultOpen:o,onOpenChange:i,...s
  }=e,[a,l]=D0({
    prop:r,defaultProp:o??!0,onChange:i,caller:pi
  });
  return p.jsx(tc,{
    present:n||a,children:p.jsx(J0,{
      open:a,...s,ref:t,onClose:()=>l(!1),onPause:An(e.onPause),onResume:An(e.onResume),onSwipeStart:ye(e.onSwipeStart,u=>{
        u.currentTarget.setAttribute("data-swipe","start")
      }),onSwipeMove:ye(e.onSwipeMove,u=>{
        const{
          x:c,y:d
        }=u.detail.delta;
        u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${c}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${d}px`)
      }),onSwipeCancel:ye(e.onSwipeCancel,u=>{
        u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
      }),onSwipeEnd:ye(e.onSwipeEnd,u=>{
        const{
          x:c,y:d
        }=u.detail.delta;
        u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${c}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${d}px`),l(!1)
      })
    })
  })
});
rh.displayName=pi;
var[Y0,X0]=Jm(pi,{
  onClose(){
    
  }
}),J0=w.forwardRef((e,t)=>{
  const{
    __scopeToast:n,type:r="foreground",duration:o,open:i,onClose:s,onEscapeKeyDown:a,onPause:l,onResume:u,onSwipeStart:c,onSwipeMove:d,onSwipeCancel:m,onSwipeEnd:f,...b
  }=e,y=na(pi,n),[x,g]=w.useState(null),h=bt(t,_=>g(_)),v=w.useRef(null),k=w.useRef(null),S=o||y.duration,E=w.useRef(0),C=w.useRef(S),R=w.useRef(0),{
    onToastAdd:L,onToastRemove:A
  }=y,F=An(()=>{
    var G;
    (x==null?void 0:x.contains(document.activeElement))&&((G=y.viewport)==null||G.focus()),s()
  }),M=w.useCallback(_=>{
    !_||_===1/0||(window.clearTimeout(R.current),E.current=new Date().getTime(),R.current=window.setTimeout(F,_))
  },[F]);
  w.useEffect(()=>{
    const _=y.viewport;
    if(_){
      const G=()=>{
        M(C.current),u==null||u()
      },$=()=>{
        const V=new Date().getTime()-E.current;
        C.current=C.current-V,window.clearTimeout(R.current),l==null||l()
      };
      return _.addEventListener(Wl,$),_.addEventListener(Hl,G),()=>{
        _.removeEventListener(Wl,$),_.removeEventListener(Hl,G)
      }
    }
  },[y.viewport,S,l,u,M]),w.useEffect(()=>{
    i&&!y.isClosePausedRef.current&&M(S)
  },[i,S,y.isClosePausedRef,M]),w.useEffect(()=>(L(),()=>A()),[L,A]);
  const q=w.useMemo(()=>x?ch(x):null,[x]);
  return y.viewport?p.jsxs(p.Fragment,{
    children:[q&&p.jsx(Z0,{
      __scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:q
    }),p.jsx(Y0,{
      scope:n,onClose:F,children:fi.createPortal(p.jsx(rc.ItemSlot,{
        scope:n,children:p.jsx(R0,{
          asChild:!0,onEscapeKeyDown:ye(a,()=>{
            y.isFocusedToastEscapeKeyDownRef.current||F(),y.isFocusedToastEscapeKeyDownRef.current=!1
          }),children:p.jsx(Ve.li,{
            role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":i?"open":"closed","data-swipe-direction":y.swipeDirection,...b,ref:h,style:{
              userSelect:"none",touchAction:"none",...e.style
            },onKeyDown:ye(e.onKeyDown,_=>{
              _.key==="Escape"&&(a==null||a(_.nativeEvent),_.nativeEvent.defaultPrevented||(y.isFocusedToastEscapeKeyDownRef.current=!0,F()))
            }),onPointerDown:ye(e.onPointerDown,_=>{
              _.button===0&&(v.current={
                x:_.clientX,y:_.clientY
              })
            }),onPointerMove:ye(e.onPointerMove,_=>{
              if(!v.current)return;
              const G=_.clientX-v.current.x,$=_.clientY-v.current.y,V=!!k.current,N=["left","right"].includes(y.swipeDirection),T=["left","up"].includes(y.swipeDirection)?Math.min:Math.max,D=N?T(0,G):0,W=N?0:T(0,$),z=_.pointerType==="touch"?10:2,Q={
                x:D,y:W
              },Y={
                originalEvent:_,delta:Q
              };
              V?(k.current=Q,$i(Q0,d,Y,{
                discrete:!1
              })):$d(Q,y.swipeDirection,z)?(k.current=Q,$i(H0,c,Y,{
                discrete:!1
              }),_.target.setPointerCapture(_.pointerId)):(Math.abs(G)>z||Math.abs($)>z)&&(v.current=null)
            }),onPointerUp:ye(e.onPointerUp,_=>{
              const G=k.current,$=_.target;
              if($.hasPointerCapture(_.pointerId)&&$.releasePointerCapture(_.pointerId),k.current=null,v.current=null,G){
                const V=_.currentTarget,N={
                  originalEvent:_,delta:G
                };
                $d(G,y.swipeDirection,y.swipeThreshold)?$i(G0,f,N,{
                  discrete:!0
                }):$i(K0,m,N,{
                  discrete:!0
                }),V.addEventListener("click",T=>T.preventDefault(),{
                  once:!0
                })
              }
            })
          })
        })
      }),y.viewport)
    })]
  }):null
}),Z0=e=>{
  const{
    __scopeToast:t,children:n,...r
  }=e,o=na(pi,t),[i,s]=w.useState(!1),[a,l]=w.useState(!1);
  return nw(()=>s(!0)),w.useEffect(()=>{
    const u=window.setTimeout(()=>l(!0),1e3);
    return()=>window.clearTimeout(u)
  },[]),a?null:p.jsx(Xm,{
    asChild:!0,children:p.jsx(ta,{
      ...r,children:i&&p.jsxs(p.Fragment,{
        children:[o.label," ",n]
      })
    })
  })
},ew="ToastTitle",oh=w.forwardRef((e,t)=>{
  const{
    __scopeToast:n,...r
  }=e;
  return p.jsx(Ve.div,{
    ...r,ref:t
  })
});
oh.displayName=ew;
var tw="ToastDescription",ih=w.forwardRef((e,t)=>{
  const{
    __scopeToast:n,...r
  }=e;
  return p.jsx(Ve.div,{
    ...r,ref:t
  })
});
ih.displayName=tw;
var sh="ToastAction",ah=w.forwardRef((e,t)=>{
  const{
    altText:n,...r
  }=e;
  return n.trim()?p.jsx(uh,{
    altText:n,asChild:!0,children:p.jsx(oc,{
      ...r,ref:t
    })
  }):(console.error(`Invalid prop \`altText\` supplied to \`${sh}\`. Expected non-empty \`string\`.`),null)
});
ah.displayName=sh;
var lh="ToastClose",oc=w.forwardRef((e,t)=>{
  const{
    __scopeToast:n,...r
  }=e,o=X0(lh,n);
  return p.jsx(uh,{
    asChild:!0,children:p.jsx(Ve.button,{
      type:"button",...r,ref:t,onClick:ye(e.onClick,o.onClose)
    })
  })
});
oc.displayName=lh;
var uh=w.forwardRef((e,t)=>{
  const{
    __scopeToast:n,altText:r,...o
  }=e;
  return p.jsx(Ve.div,{
    "data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...o,ref:t
  })
});
function ch(e){
  const t=[];
  return Array.from(e.childNodes).forEach(r=>{
    if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),rw(r)){
      const o=r.ariaHidden||r.hidden||r.style.display==="none",i=r.dataset.radixToastAnnounceExclude==="";
      if(!o)if(i){
        const s=r.dataset.radixToastAnnounceAlt;
        s&&t.push(s)
      }else t.push(...ch(r))
    }
  }),t
}function $i(e,t,n,{
  discrete:r
}){
  const o=n.originalEvent.currentTarget,i=new CustomEvent(e,{
    bubbles:!0,cancelable:!0,detail:n
  });
  t&&o.addEventListener(e,t,{
    once:!0
  }),r?Qm(o,i):o.dispatchEvent(i)
}var $d=(e,t,n=0)=>{
  const r=Math.abs(e.x),o=Math.abs(e.y),i=r>o;
  return t==="left"||t==="right"?i&&r>n:!i&&o>n
};
function nw(e=()=>{
  
}){
  const t=An(e);
  On(()=>{
    let n=0,r=0;
    return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{
      window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)
    }
  },[t])
}function rw(e){
  return e.nodeType===e.ELEMENT_NODE
}function ow(e){
  const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{
    acceptNode:r=>{
      const o=r.tagName==="INPUT"&&r.type==="hidden";
      return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP
    }
  });
  for(;
  n.nextNode();
  )t.push(n.currentNode);
  return t
}function Va(e){
  const t=document.activeElement;
  return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))
}var iw=Zm,dh=th,fh=rh,ph=oh,mh=ih,hh=ah,gh=oc;
function vh(e){
  var t,n,r="";
  if(typeof e=="string"||typeof e=="number")r+=e;
  else if(typeof e=="object")if(Array.isArray(e)){
    var o=e.length;
    for(t=0;
    t<o;
    t++)e[t]&&(n=vh(e[t]))&&(r&&(r+=" "),r+=n)
  }else for(n in e)e[n]&&(r&&(r+=" "),r+=n);
  return r
}function yh(){
  for(var e,t,n=0,r="",o=arguments.length;
  n<o;
  n++)(e=arguments[n])&&(t=vh(e))&&(r&&(r+=" "),r+=t);
  return r
}const Bd=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Ud=yh,sw=(e,t)=>n=>{
  var r;
  if((t==null?void 0:t.variants)==null)return Ud(e,n==null?void 0:n.class,n==null?void 0:n.className);
  const{
    variants:o,defaultVariants:i
  }=t,s=Object.keys(o).map(u=>{
    const c=n==null?void 0:n[u],d=i==null?void 0:i[u];
    if(c===null)return null;
    const m=Bd(c)||Bd(d);
    return o[u][m]
  }),a=n&&Object.entries(n).reduce((u,c)=>{
    let[d,m]=c;
    return m===void 0||(u[d]=m),u
  },{
    
  }),l=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,c)=>{
    let{
      class:d,className:m,...f
    }=c;
    return Object.entries(f).every(b=>{
      let[y,x]=b;
      return Array.isArray(x)?x.includes({
        ...i,...a
      }[y]):{
        ...i,...a
      }[y]===x
    })?[...u,d,m]:u
  },[]);
  return Ud(e,s,l,n==null?void 0:n.class,n==null?void 0:n.className)
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wh=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lw={
  xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=w.forwardRef(({
  color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:s,...a
},l)=>w.createElement("svg",{
  ref:l,...lw,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:wh("lucide",o),...a
},[...s.map(([u,c])=>w.createElement(u,c)),...Array.isArray(i)?i:[i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=(e,t)=>{
  const n=w.forwardRef(({
    className:r,...o
  },i)=>w.createElement(uw,{
    ref:i,iconNode:t,className:wh(`lucide-${aw(e)}`,r),...o
  }));
  return n.displayName=`${e}`,n
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=Xt("ArrowLeft",[["path",{
  d:"m12 19-7-7 7-7",key:"1l729n"
}],["path",{
  d:"M19 12H5",key:"x3x0zl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=Xt("ArrowUpRight",[["path",{
  d:"M7 7h10v10",key:"1tivn9"
}],["path",{
  d:"M7 17 17 7",key:"1vkiza"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=Xt("Download",[["path",{
  d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"
}],["polyline",{
  points:"7 10 12 15 17 10",key:"2ggqvy"
}],["line",{
  x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=Xt("Image",[["rect",{
  width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"
}],["circle",{
  cx:"9",cy:"9",r:"2",key:"af1f0g"
}],["path",{
  d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=Xt("Linkedin",[["path",{
  d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"
}],["rect",{
  width:"4",height:"12",x:"2",y:"9",key:"mk3on5"
}],["circle",{
  cx:"4",cy:"4",r:"2",key:"bt5ra8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=Xt("Lock",[["rect",{
  width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"
}],["path",{
  d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=Xt("Mail",[["rect",{
  width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"
}],["path",{
  d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=Xt("MapPin",[["path",{
  d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"
}],["circle",{
  cx:"12",cy:"10",r:"3",key:"ilqhr7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=Xt("X",[["path",{
  d:"M18 6 6 18",key:"1bl5f8"
}],["path",{
  d:"m6 6 12 12",key:"d8bk6v"
}]]),ic="-",vw=e=>{
  const t=ww(e),{
    conflictingClassGroups:n,conflictingClassGroupModifiers:r
  }=e;
  return{
    getClassGroupId:s=>{
      const a=s.split(ic);
      return a[0]===""&&a.length!==1&&a.shift(),bh(a,t)||yw(s)
    },getConflictingClassGroupIds:(s,a)=>{
      const l=n[s]||[];
      return a&&r[s]?[...l,...r[s]]:l
    }
  }
},bh=(e,t)=>{
  var s;
  if(e.length===0)return t.classGroupId;
  const n=e[0],r=t.nextPart.get(n),o=r?bh(e.slice(1),r):void 0;
  if(o)return o;
  if(t.validators.length===0)return;
  const i=e.join(ic);
  return(s=t.validators.find(({
    validator:a
  })=>a(i)))==null?void 0:s.classGroupId
},qd=/^\[(.+)\]$/,yw=e=>{
  if(qd.test(e)){
    const t=qd.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));
    if(n)return"arbitrary.."+n
  }
},ww=e=>{
  const{
    theme:t,prefix:n
  }=e,r={
    nextPart:new Map,validators:[]
  };
  return bw(Object.entries(e.classGroups),n).forEach(([i,s])=>{
    Gl(s,r,i,t)
  }),r
},Gl=(e,t,n,r)=>{
  e.forEach(o=>{
    if(typeof o=="string"){
      const i=o===""?t:Vd(t,o);
      i.classGroupId=n;
      return
    }if(typeof o=="function"){
      if(xw(o)){
        Gl(o(r),t,n,r);
        return
      }t.validators.push({
        validator:o,classGroupId:n
      });
      return
    }Object.entries(o).forEach(([i,s])=>{
      Gl(s,Vd(t,i),n,r)
    })
  })
},Vd=(e,t)=>{
  let n=e;
  return t.split(ic).forEach(r=>{
    n.nextPart.has(r)||n.nextPart.set(r,{
      nextPart:new Map,validators:[]
    }),n=n.nextPart.get(r)
  }),n
},xw=e=>e.isThemeGetter,bw=(e,t)=>t?e.map(([n,r])=>{
  const o=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([s,a])=>[t+s,a])):i);
  return[n,o]
}):e,kw=e=>{
  if(e<1)return{
    get:()=>{
      
    },set:()=>{
      
    }
  };
  let t=0,n=new Map,r=new Map;
  const o=(i,s)=>{
    n.set(i,s),t++,t>e&&(t=0,r=n,n=new Map)
  };
  return{
    get(i){
      let s=n.get(i);
      if(s!==void 0)return s;
      if((s=r.get(i))!==void 0)return o(i,s),s
    },set(i,s){
      n.has(i)?n.set(i,s):o(i,s)
    }
  }
},kh="!",Sw=e=>{
  const{
    separator:t,experimentalParseClassName:n
  }=e,r=t.length===1,o=t[0],i=t.length,s=a=>{
    const l=[];
    let u=0,c=0,d;
    for(let x=0;
    x<a.length;
    x++){
      let g=a[x];
      if(u===0){
        if(g===o&&(r||a.slice(x,x+i)===t)){
          l.push(a.slice(c,x)),c=x+i;
          continue
        }if(g==="/"){
          d=x;
          continue
        }
      }g==="["?u++:g==="]"&&u--
    }const m=l.length===0?a:a.substring(c),f=m.startsWith(kh),b=f?m.substring(1):m,y=d&&d>c?d-c:void 0;
    return{
      modifiers:l,hasImportantModifier:f,baseClassName:b,maybePostfixModifierPosition:y
    }
  };
  return n?a=>n({
    className:a,parseClassName:s
  }):s
},Ew=e=>{
  if(e.length<=1)return e;
  const t=[];
  let n=[];
  return e.forEach(r=>{
    r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)
  }),t.push(...n.sort()),t
},Cw=e=>({
  cache:kw(e.cacheSize),parseClassName:Sw(e),...vw(e)
}),Pw=/\s+/,Nw=(e,t)=>{
  const{
    parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o
  }=t,i=[],s=e.trim().split(Pw);
  let a="";
  for(let l=s.length-1;
  l>=0;
  l-=1){
    const u=s[l],{
      modifiers:c,hasImportantModifier:d,baseClassName:m,maybePostfixModifierPosition:f
    }=n(u);
    let b=!!f,y=r(b?m.substring(0,f):m);
    if(!y){
      if(!b){
        a=u+(a.length>0?" "+a:a);
        continue
      }if(y=r(m),!y){
        a=u+(a.length>0?" "+a:a);
        continue
      }b=!1
    }const x=Ew(c).join(":"),g=d?x+kh:x,h=g+y;
    if(i.includes(h))continue;
    i.push(h);
    const v=o(y,b);
    for(let k=0;
    k<v.length;
    ++k){
      const S=v[k];
      i.push(g+S)
    }a=u+(a.length>0?" "+a:a)
  }return a
};
function Tw(){
  let e=0,t,n,r="";
  for(;
  e<arguments.length;
  )(t=arguments[e++])&&(n=Sh(t))&&(r&&(r+=" "),r+=n);
  return r
}const Sh=e=>{
  if(typeof e=="string")return e;
  let t,n="";
  for(let r=0;
  r<e.length;
  r++)e[r]&&(t=Sh(e[r]))&&(n&&(n+=" "),n+=t);
  return n
};
function Rw(e,...t){
  let n,r,o,i=s;
  function s(l){
    const u=t.reduce((c,d)=>d(c),e());
    return n=Cw(u),r=n.cache.get,o=n.cache.set,i=a,a(l)
  }function a(l){
    const u=r(l);
    if(u)return u;
    const c=Nw(l,n);
    return o(l,c),c
  }return function(){
    return i(Tw.apply(null,arguments))
  }
}const re=e=>{
  const t=n=>n[e]||[];
  return t.isThemeGetter=!0,t
},Eh=/^\[(?:([a-z-]+):)?(.+)\]$/i,jw=/^\d+\/\d+$/,Lw=new Set(["px","full","screen"]),Aw=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ow=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,_w=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Mw=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Dw=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Dt=e=>Ir(e)||Lw.has(e)||jw.test(e),sn=e=>io(e,"length",Vw),Ir=e=>!!e&&!Number.isNaN(Number(e)),Wa=e=>io(e,"number",Ir),xo=e=>!!e&&Number.isInteger(Number(e)),Iw=e=>e.endsWith("%")&&Ir(e.slice(0,-1)),H=e=>Eh.test(e),an=e=>Aw.test(e),Fw=new Set(["length","size","percentage"]),zw=e=>io(e,Fw,Ch),$w=e=>io(e,"position",Ch),Bw=new Set(["image","url"]),Uw=e=>io(e,Bw,Hw),qw=e=>io(e,"",Ww),bo=()=>!0,io=(e,t,n)=>{
  const r=Eh.exec(e);
  return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1
},Vw=e=>Ow.test(e)&&!_w.test(e),Ch=()=>!1,Ww=e=>Mw.test(e),Hw=e=>Dw.test(e),Qw=()=>{
  const e=re("colors"),t=re("spacing"),n=re("blur"),r=re("brightness"),o=re("borderColor"),i=re("borderRadius"),s=re("borderSpacing"),a=re("borderWidth"),l=re("contrast"),u=re("grayscale"),c=re("hueRotate"),d=re("invert"),m=re("gap"),f=re("gradientColorStops"),b=re("gradientColorStopPositions"),y=re("inset"),x=re("margin"),g=re("opacity"),h=re("padding"),v=re("saturate"),k=re("scale"),S=re("sepia"),E=re("skew"),C=re("space"),R=re("translate"),L=()=>["auto","contain","none"],A=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto",H,t],M=()=>[H,t],q=()=>["",Dt,sn],_=()=>["auto",Ir,H],G=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],$=()=>["solid","dashed","dotted","double","none"],V=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],N=()=>["start","end","center","between","around","evenly","stretch"],T=()=>["","0",H],D=()=>["auto","avoid","all","avoid-page","page","left","right","column"],W=()=>[Ir,H];
  return{
    cacheSize:500,separator:":",theme:{
      colors:[bo],spacing:[Dt,sn],blur:["none","",an,H],brightness:W(),borderColor:[e],borderRadius:["none","","full",an,H],borderSpacing:M(),borderWidth:q(),contrast:W(),grayscale:T(),hueRotate:W(),invert:T(),gap:M(),gradientColorStops:[e],gradientColorStopPositions:[Iw,sn],inset:F(),margin:F(),opacity:W(),padding:M(),saturate:W(),scale:W(),sepia:T(),skew:W(),space:M(),translate:M()
    },classGroups:{
      aspect:[{
        aspect:["auto","square","video",H]
      }],container:["container"],columns:[{
        columns:[an]
      }],"break-after":[{
        "break-after":D()
      }],"break-before":[{
        "break-before":D()
      }],"break-inside":[{
        "break-inside":["auto","avoid","avoid-page","avoid-column"]
      }],"box-decoration":[{
        "box-decoration":["slice","clone"]
      }],box:[{
        box:["border","content"]
      }],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{
        float:["right","left","none","start","end"]
      }],clear:[{
        clear:["left","right","both","none","start","end"]
      }],isolation:["isolate","isolation-auto"],"object-fit":[{
        object:["contain","cover","fill","none","scale-down"]
      }],"object-position":[{
        object:[...G(),H]
      }],overflow:[{
        overflow:A()
      }],"overflow-x":[{
        "overflow-x":A()
      }],"overflow-y":[{
        "overflow-y":A()
      }],overscroll:[{
        overscroll:L()
      }],"overscroll-x":[{
        "overscroll-x":L()
      }],"overscroll-y":[{
        "overscroll-y":L()
      }],position:["static","fixed","absolute","relative","sticky"],inset:[{
        inset:[y]
      }],"inset-x":[{
        "inset-x":[y]
      }],"inset-y":[{
        "inset-y":[y]
      }],start:[{
        start:[y]
      }],end:[{
        end:[y]
      }],top:[{
        top:[y]
      }],right:[{
        right:[y]
      }],bottom:[{
        bottom:[y]
      }],left:[{
        left:[y]
      }],visibility:["visible","invisible","collapse"],z:[{
        z:["auto",xo,H]
      }],basis:[{
        basis:F()
      }],"flex-direction":[{
        flex:["row","row-reverse","col","col-reverse"]
      }],"flex-wrap":[{
        flex:["wrap","wrap-reverse","nowrap"]
      }],flex:[{
        flex:["1","auto","initial","none",H]
      }],grow:[{
        grow:T()
      }],shrink:[{
        shrink:T()
      }],order:[{
        order:["first","last","none",xo,H]
      }],"grid-cols":[{
        "grid-cols":[bo]
      }],"col-start-end":[{
        col:["auto",{
          span:["full",xo,H]
        },H]
      }],"col-start":[{
        "col-start":_()
      }],"col-end":[{
        "col-end":_()
      }],"grid-rows":[{
        "grid-rows":[bo]
      }],"row-start-end":[{
        row:["auto",{
          span:[xo,H]
        },H]
      }],"row-start":[{
        "row-start":_()
      }],"row-end":[{
        "row-end":_()
      }],"grid-flow":[{
        "grid-flow":["row","col","dense","row-dense","col-dense"]
      }],"auto-cols":[{
        "auto-cols":["auto","min","max","fr",H]
      }],"auto-rows":[{
        "auto-rows":["auto","min","max","fr",H]
      }],gap:[{
        gap:[m]
      }],"gap-x":[{
        "gap-x":[m]
      }],"gap-y":[{
        "gap-y":[m]
      }],"justify-content":[{
        justify:["normal",...N()]
      }],"justify-items":[{
        "justify-items":["start","end","center","stretch"]
      }],"justify-self":[{
        "justify-self":["auto","start","end","center","stretch"]
      }],"align-content":[{
        content:["normal",...N(),"baseline"]
      }],"align-items":[{
        items:["start","end","center","baseline","stretch"]
      }],"align-self":[{
        self:["auto","start","end","center","stretch","baseline"]
      }],"place-content":[{
        "place-content":[...N(),"baseline"]
      }],"place-items":[{
        "place-items":["start","end","center","baseline","stretch"]
      }],"place-self":[{
        "place-self":["auto","start","end","center","stretch"]
      }],p:[{
        p:[h]
      }],px:[{
        px:[h]
      }],py:[{
        py:[h]
      }],ps:[{
        ps:[h]
      }],pe:[{
        pe:[h]
      }],pt:[{
        pt:[h]
      }],pr:[{
        pr:[h]
      }],pb:[{
        pb:[h]
      }],pl:[{
        pl:[h]
      }],m:[{
        m:[x]
      }],mx:[{
        mx:[x]
      }],my:[{
        my:[x]
      }],ms:[{
        ms:[x]
      }],me:[{
        me:[x]
      }],mt:[{
        mt:[x]
      }],mr:[{
        mr:[x]
      }],mb:[{
        mb:[x]
      }],ml:[{
        ml:[x]
      }],"space-x":[{
        "space-x":[C]
      }],"space-x-reverse":["space-x-reverse"],"space-y":[{
        "space-y":[C]
      }],"space-y-reverse":["space-y-reverse"],w:[{
        w:["auto","min","max","fit","svw","lvw","dvw",H,t]
      }],"min-w":[{
        "min-w":[H,t,"min","max","fit"]
      }],"max-w":[{
        "max-w":[H,t,"none","full","min","max","fit","prose",{
          screen:[an]
        },an]
      }],h:[{
        h:[H,t,"auto","min","max","fit","svh","lvh","dvh"]
      }],"min-h":[{
        "min-h":[H,t,"min","max","fit","svh","lvh","dvh"]
      }],"max-h":[{
        "max-h":[H,t,"min","max","fit","svh","lvh","dvh"]
      }],size:[{
        size:[H,t,"auto","min","max","fit"]
      }],"font-size":[{
        text:["base",an,sn]
      }],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{
        font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Wa]
      }],"font-family":[{
        font:[bo]
      }],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{
        tracking:["tighter","tight","normal","wide","wider","widest",H]
      }],"line-clamp":[{
        "line-clamp":["none",Ir,Wa]
      }],leading:[{
        leading:["none","tight","snug","normal","relaxed","loose",Dt,H]
      }],"list-image":[{
        "list-image":["none",H]
      }],"list-style-type":[{
        list:["none","disc","decimal",H]
      }],"list-style-position":[{
        list:["inside","outside"]
      }],"placeholder-color":[{
        placeholder:[e]
      }],"placeholder-opacity":[{
        "placeholder-opacity":[g]
      }],"text-alignment":[{
        text:["left","center","right","justify","start","end"]
      }],"text-color":[{
        text:[e]
      }],"text-opacity":[{
        "text-opacity":[g]
      }],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{
        decoration:[...$(),"wavy"]
      }],"text-decoration-thickness":[{
        decoration:["auto","from-font",Dt,sn]
      }],"underline-offset":[{
        "underline-offset":["auto",Dt,H]
      }],"text-decoration-color":[{
        decoration:[e]
      }],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{
        text:["wrap","nowrap","balance","pretty"]
      }],indent:[{
        indent:M()
      }],"vertical-align":[{
        align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",H]
      }],whitespace:[{
        whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]
      }],break:[{
        break:["normal","words","all","keep"]
      }],hyphens:[{
        hyphens:["none","manual","auto"]
      }],content:[{
        content:["none",H]
      }],"bg-attachment":[{
        bg:["fixed","local","scroll"]
      }],"bg-clip":[{
        "bg-clip":["border","padding","content","text"]
      }],"bg-opacity":[{
        "bg-opacity":[g]
      }],"bg-origin":[{
        "bg-origin":["border","padding","content"]
      }],"bg-position":[{
        bg:[...G(),$w]
      }],"bg-repeat":[{
        bg:["no-repeat",{
          repeat:["","x","y","round","space"]
        }]
      }],"bg-size":[{
        bg:["auto","cover","contain",zw]
      }],"bg-image":[{
        bg:["none",{
          "gradient-to":["t","tr","r","br","b","bl","l","tl"]
        },Uw]
      }],"bg-color":[{
        bg:[e]
      }],"gradient-from-pos":[{
        from:[b]
      }],"gradient-via-pos":[{
        via:[b]
      }],"gradient-to-pos":[{
        to:[b]
      }],"gradient-from":[{
        from:[f]
      }],"gradient-via":[{
        via:[f]
      }],"gradient-to":[{
        to:[f]
      }],rounded:[{
        rounded:[i]
      }],"rounded-s":[{
        "rounded-s":[i]
      }],"rounded-e":[{
        "rounded-e":[i]
      }],"rounded-t":[{
        "rounded-t":[i]
      }],"rounded-r":[{
        "rounded-r":[i]
      }],"rounded-b":[{
        "rounded-b":[i]
      }],"rounded-l":[{
        "rounded-l":[i]
      }],"rounded-ss":[{
        "rounded-ss":[i]
      }],"rounded-se":[{
        "rounded-se":[i]
      }],"rounded-ee":[{
        "rounded-ee":[i]
      }],"rounded-es":[{
        "rounded-es":[i]
      }],"rounded-tl":[{
        "rounded-tl":[i]
      }],"rounded-tr":[{
        "rounded-tr":[i]
      }],"rounded-br":[{
        "rounded-br":[i]
      }],"rounded-bl":[{
        "rounded-bl":[i]
      }],"border-w":[{
        border:[a]
      }],"border-w-x":[{
        "border-x":[a]
      }],"border-w-y":[{
        "border-y":[a]
      }],"border-w-s":[{
        "border-s":[a]
      }],"border-w-e":[{
        "border-e":[a]
      }],"border-w-t":[{
        "border-t":[a]
      }],"border-w-r":[{
        "border-r":[a]
      }],"border-w-b":[{
        "border-b":[a]
      }],"border-w-l":[{
        "border-l":[a]
      }],"border-opacity":[{
        "border-opacity":[g]
      }],"border-style":[{
        border:[...$(),"hidden"]
      }],"divide-x":[{
        "divide-x":[a]
      }],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{
        "divide-y":[a]
      }],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{
        "divide-opacity":[g]
      }],"divide-style":[{
        divide:$()
      }],"border-color":[{
        border:[o]
      }],"border-color-x":[{
        "border-x":[o]
      }],"border-color-y":[{
        "border-y":[o]
      }],"border-color-s":[{
        "border-s":[o]
      }],"border-color-e":[{
        "border-e":[o]
      }],"border-color-t":[{
        "border-t":[o]
      }],"border-color-r":[{
        "border-r":[o]
      }],"border-color-b":[{
        "border-b":[o]
      }],"border-color-l":[{
        "border-l":[o]
      }],"divide-color":[{
        divide:[o]
      }],"outline-style":[{
        outline:["",...$()]
      }],"outline-offset":[{
        "outline-offset":[Dt,H]
      }],"outline-w":[{
        outline:[Dt,sn]
      }],"outline-color":[{
        outline:[e]
      }],"ring-w":[{
        ring:q()
      }],"ring-w-inset":["ring-inset"],"ring-color":[{
        ring:[e]
      }],"ring-opacity":[{
        "ring-opacity":[g]
      }],"ring-offset-w":[{
        "ring-offset":[Dt,sn]
      }],"ring-offset-color":[{
        "ring-offset":[e]
      }],shadow:[{
        shadow:["","inner","none",an,qw]
      }],"shadow-color":[{
        shadow:[bo]
      }],opacity:[{
        opacity:[g]
      }],"mix-blend":[{
        "mix-blend":[...V(),"plus-lighter","plus-darker"]
      }],"bg-blend":[{
        "bg-blend":V()
      }],filter:[{
        filter:["","none"]
      }],blur:[{
        blur:[n]
      }],brightness:[{
        brightness:[r]
      }],contrast:[{
        contrast:[l]
      }],"drop-shadow":[{
        "drop-shadow":["","none",an,H]
      }],grayscale:[{
        grayscale:[u]
      }],"hue-rotate":[{
        "hue-rotate":[c]
      }],invert:[{
        invert:[d]
      }],saturate:[{
        saturate:[v]
      }],sepia:[{
        sepia:[S]
      }],"backdrop-filter":[{
        "backdrop-filter":["","none"]
      }],"backdrop-blur":[{
        "backdrop-blur":[n]
      }],"backdrop-brightness":[{
        "backdrop-brightness":[r]
      }],"backdrop-contrast":[{
        "backdrop-contrast":[l]
      }],"backdrop-grayscale":[{
        "backdrop-grayscale":[u]
      }],"backdrop-hue-rotate":[{
        "backdrop-hue-rotate":[c]
      }],"backdrop-invert":[{
        "backdrop-invert":[d]
      }],"backdrop-opacity":[{
        "backdrop-opacity":[g]
      }],"backdrop-saturate":[{
        "backdrop-saturate":[v]
      }],"backdrop-sepia":[{
        "backdrop-sepia":[S]
      }],"border-collapse":[{
        border:["collapse","separate"]
      }],"border-spacing":[{
        "border-spacing":[s]
      }],"border-spacing-x":[{
        "border-spacing-x":[s]
      }],"border-spacing-y":[{
        "border-spacing-y":[s]
      }],"table-layout":[{
        table:["auto","fixed"]
      }],caption:[{
        caption:["top","bottom"]
      }],transition:[{
        transition:["none","all","","colors","opacity","shadow","transform",H]
      }],duration:[{
        duration:W()
      }],ease:[{
        ease:["linear","in","out","in-out",H]
      }],delay:[{
        delay:W()
      }],animate:[{
        animate:["none","spin","ping","pulse","bounce",H]
      }],transform:[{
        transform:["","gpu","none"]
      }],scale:[{
        scale:[k]
      }],"scale-x":[{
        "scale-x":[k]
      }],"scale-y":[{
        "scale-y":[k]
      }],rotate:[{
        rotate:[xo,H]
      }],"translate-x":[{
        "translate-x":[R]
      }],"translate-y":[{
        "translate-y":[R]
      }],"skew-x":[{
        "skew-x":[E]
      }],"skew-y":[{
        "skew-y":[E]
      }],"transform-origin":[{
        origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",H]
      }],accent:[{
        accent:["auto",e]
      }],appearance:[{
        appearance:["none","auto"]
      }],cursor:[{
        cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",H]
      }],"caret-color":[{
        caret:[e]
      }],"pointer-events":[{
        "pointer-events":["none","auto"]
      }],resize:[{
        resize:["none","y","x",""]
      }],"scroll-behavior":[{
        scroll:["auto","smooth"]
      }],"scroll-m":[{
        "scroll-m":M()
      }],"scroll-mx":[{
        "scroll-mx":M()
      }],"scroll-my":[{
        "scroll-my":M()
      }],"scroll-ms":[{
        "scroll-ms":M()
      }],"scroll-me":[{
        "scroll-me":M()
      }],"scroll-mt":[{
        "scroll-mt":M()
      }],"scroll-mr":[{
        "scroll-mr":M()
      }],"scroll-mb":[{
        "scroll-mb":M()
      }],"scroll-ml":[{
        "scroll-ml":M()
      }],"scroll-p":[{
        "scroll-p":M()
      }],"scroll-px":[{
        "scroll-px":M()
      }],"scroll-py":[{
        "scroll-py":M()
      }],"scroll-ps":[{
        "scroll-ps":M()
      }],"scroll-pe":[{
        "scroll-pe":M()
      }],"scroll-pt":[{
        "scroll-pt":M()
      }],"scroll-pr":[{
        "scroll-pr":M()
      }],"scroll-pb":[{
        "scroll-pb":M()
      }],"scroll-pl":[{
        "scroll-pl":M()
      }],"snap-align":[{
        snap:["start","end","center","align-none"]
      }],"snap-stop":[{
        snap:["normal","always"]
      }],"snap-type":[{
        snap:["none","x","y","both"]
      }],"snap-strictness":[{
        snap:["mandatory","proximity"]
      }],touch:[{
        touch:["auto","none","manipulation"]
      }],"touch-x":[{
        "touch-pan":["x","left","right"]
      }],"touch-y":[{
        "touch-pan":["y","up","down"]
      }],"touch-pz":["touch-pinch-zoom"],select:[{
        select:["none","text","all","auto"]
      }],"will-change":[{
        "will-change":["auto","scroll","contents","transform",H]
      }],fill:[{
        fill:[e,"none"]
      }],"stroke-w":[{
        stroke:[Dt,sn,Wa]
      }],stroke:[{
        stroke:[e,"none"]
      }],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{
        "forced-color-adjust":["auto","none"]
      }]
    },conflictingClassGroups:{
      overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]
    },conflictingClassGroupModifiers:{
      "font-size":["leading"]
    }
  }
},Kw=Rw(Qw);
function cr(...e){
  return Kw(yh(e))
}const Gw=iw,Ph=w.forwardRef(({
  className:e,...t
},n)=>p.jsx(dh,{
  ref:n,className:cr("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t
}));
Ph.displayName=dh.displayName;
const Yw=sw("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{
  variants:{
    variant:{
      default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"
    }
  },defaultVariants:{
    variant:"default"
  }
}),Nh=w.forwardRef(({
  className:e,variant:t,...n
},r)=>p.jsx(fh,{
  ref:r,className:cr(Yw({
    variant:t
  }),e),...n
}));
Nh.displayName=fh.displayName;
const Xw=w.forwardRef(({
  className:e,...t
},n)=>p.jsx(hh,{
  ref:n,className:cr("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t
}));
Xw.displayName=hh.displayName;
const Th=w.forwardRef(({
  className:e,...t
},n)=>p.jsx(gh,{
  ref:n,className:cr("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:p.jsx(gw,{
    className:"h-4 w-4"
  })
}));
Th.displayName=gh.displayName;
const Rh=w.forwardRef(({
  className:e,...t
},n)=>p.jsx(ph,{
  ref:n,className:cr("text-sm font-semibold",e),...t
}));
Rh.displayName=ph.displayName;
const jh=w.forwardRef(({
  className:e,...t
},n)=>p.jsx(mh,{
  ref:n,className:cr("text-sm opacity-90",e),...t
}));
jh.displayName=mh.displayName;
function Jw(){
  const{
    toasts:e
  }=p0();
  return p.jsxs(Gw,{
    children:[e.map(function({
      id:t,title:n,description:r,action:o,...i
    }){
      return p.jsxs(Nh,{
        ...i,children:[p.jsxs("div",{
          className:"grid gap-1",children:[n&&p.jsx(Rh,{
            children:n
          }),r&&p.jsx(jh,{
            children:r
          })]
        }),o,p.jsx(Th,{
          
        })]
      },t)
    }),p.jsx(Ph,{
      
    })]
  })
}var Wd=["light","dark"],Zw="(prefers-color-scheme: dark)",ex=w.createContext(void 0),tx={
  setTheme:e=>{
    
  },themes:[]
},nx=()=>{
  var e;
  return(e=w.useContext(ex))!=null?e:tx
};
w.memo(({
  forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:o,defaultTheme:i,value:s,attrs:a,nonce:l
})=>{
  let u=i==="system",c=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${
    a.map(b=>`'${b}'`).join(",")
  })`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,d=o?Wd.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",m=(b,y=!1,x=!0)=>{
    let g=s?s[b]:b,h=y?b+"|| ''":`'${g}'`,v="";
    return o&&x&&!y&&Wd.includes(b)&&(v+=`d.style.colorScheme = '${b}';`),n==="class"?y||g?v+=`c.add(${h})`:v+="null":g&&(v+=`d[s](n,${h})`),v
  },f=e?`!function(){${c}${m(e)}}()`:r?`!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Zw}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${s?`var x=${
    JSON.stringify(s)
  };
  `:""}${m(s?"x[e]":"e",!0)}}${u?"":"else{"+m(i,!1,!1)+"}"}${d}}catch(e){}}()`:`!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${s?`var x=${
    JSON.stringify(s)
  };
  `:""}${m(s?"x[e]":"e",!0)}}else{${m(i,!1,!1)};}${d}}catch(t){}}();`;
  return w.createElement("script",{
    nonce:l,dangerouslySetInnerHTML:{
      __html:f
    }
  })
});
var rx=e=>{
  switch(e){
    case"success":return sx;
    case"info":return lx;
    case"warning":return ax;
    case"error":return ux;
    default:return null
  }
},ox=Array(12).fill(0),ix=({
  visible:e,className:t
})=>O.createElement("div",{
  className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e
},O.createElement("div",{
  className:"sonner-spinner"
},ox.map((n,r)=>O.createElement("div",{
  className:"sonner-loading-bar",key:`spinner-bar-${r}`
})))),sx=O.createElement("svg",{
  xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"
},O.createElement("path",{
  fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"
})),ax=O.createElement("svg",{
  xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"
},O.createElement("path",{
  fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"
})),lx=O.createElement("svg",{
  xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"
},O.createElement("path",{
  fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"
})),ux=O.createElement("svg",{
  xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"
},O.createElement("path",{
  fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"
})),cx=O.createElement("svg",{
  xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"
},O.createElement("line",{
  x1:"18",y1:"6",x2:"6",y2:"18"
}),O.createElement("line",{
  x1:"6",y1:"6",x2:"18",y2:"18"
})),dx=()=>{
  let[e,t]=O.useState(document.hidden);
  return O.useEffect(()=>{
    let n=()=>{
      t(document.hidden)
    };
    return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)
  },[]),e
},Yl=1,fx=class{
  constructor(){
    this.subscribe=e=>(this.subscribers.push(e),()=>{
      let t=this.subscribers.indexOf(e);
      this.subscribers.splice(t,1)
    }),this.publish=e=>{
      this.subscribers.forEach(t=>t(e))
    },this.addToast=e=>{
      this.publish(e),this.toasts=[...this.toasts,e]
    },this.create=e=>{
      var t;
      let{
        message:n,...r
      }=e,o=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Yl++,i=this.toasts.find(a=>a.id===o),s=e.dismissible===void 0?!0:e.dismissible;
      return this.dismissedToasts.has(o)&&this.dismissedToasts.delete(o),i?this.toasts=this.toasts.map(a=>a.id===o?(this.publish({
        ...a,...e,id:o,title:n
      }),{
        ...a,...e,id:o,dismissible:s,title:n
      }):a):this.addToast({
        title:n,...r,dismissible:s,id:o
      }),o
    },this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{
      this.subscribers.forEach(n=>n({
        id:t.id,dismiss:!0
      }))
    }),this.subscribers.forEach(t=>t({
      id:e,dismiss:!0
    })),e),this.message=(e,t)=>this.create({
      ...t,message:e
    }),this.error=(e,t)=>this.create({
      ...t,message:e,type:"error"
    }),this.success=(e,t)=>this.create({
      ...t,type:"success",message:e
    }),this.info=(e,t)=>this.create({
      ...t,type:"info",message:e
    }),this.warning=(e,t)=>this.create({
      ...t,type:"warning",message:e
    }),this.loading=(e,t)=>this.create({
      ...t,type:"loading",message:e
    }),this.promise=(e,t)=>{
      if(!t)return;
      let n;
      t.loading!==void 0&&(n=this.create({
        ...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0
      }));
      let r=e instanceof Promise?e:e(),o=n!==void 0,i,s=r.then(async l=>{
        if(i=["resolve",l],O.isValidElement(l))o=!1,this.create({
          id:n,type:"default",message:l
        });
        else if(mx(l)&&!l.ok){
          o=!1;
          let u=typeof t.error=="function"?await t.error(`HTTP error! status: ${l.status}`):t.error,c=typeof t.description=="function"?await t.description(`HTTP error! status: ${l.status}`):t.description;
          this.create({
            id:n,type:"error",message:u,description:c
          })
        }else if(t.success!==void 0){
          o=!1;
          let u=typeof t.success=="function"?await t.success(l):t.success,c=typeof t.description=="function"?await t.description(l):t.description;
          this.create({
            id:n,type:"success",message:u,description:c
          })
        }
      }).catch(async l=>{
        if(i=["reject",l],t.error!==void 0){
          o=!1;
          let u=typeof t.error=="function"?await t.error(l):t.error,c=typeof t.description=="function"?await t.description(l):t.description;
          this.create({
            id:n,type:"error",message:u,description:c
          })
        }
      }).finally(()=>{
        var l;
        o&&(this.dismiss(n),n=void 0),(l=t.finally)==null||l.call(t)
      }),a=()=>new Promise((l,u)=>s.then(()=>i[0]==="reject"?u(i[1]):l(i[1])).catch(u));
      return typeof n!="string"&&typeof n!="number"?{
        unwrap:a
      }:Object.assign(n,{
        unwrap:a
      })
    },this.custom=(e,t)=>{
      let n=(t==null?void 0:t.id)||Yl++;
      return this.create({
        jsx:e(n),id:n,...t
      }),n
    },this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set
  }
},Fe=new fx,px=(e,t)=>{
  let n=(t==null?void 0:t.id)||Yl++;
  return Fe.addToast({
    title:e,...t,id:n
  }),n
},mx=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",hx=px,gx=()=>Fe.toasts,vx=()=>Fe.getActiveToasts();
Object.assign(hx,{
  success:Fe.success,info:Fe.info,warning:Fe.warning,error:Fe.error,custom:Fe.custom,message:Fe.message,promise:Fe.promise,dismiss:Fe.dismiss,loading:Fe.loading
},{
  getHistory:gx,getToasts:vx
});
function yx(e,{
  insertAt:t
}={
  
}){
  if(typeof document>"u")return;
  let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");
  r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))
}yx(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Bi(e){
  return e.label!==void 0
}var wx=3,xx="32px",bx="16px",Hd=4e3,kx=356,Sx=14,Ex=20,Cx=200;
function dt(...e){
  return e.filter(Boolean).join(" ")
}function Px(e){
  let[t,n]=e.split("-"),r=[];
  return t&&r.push(t),n&&r.push(n),r
}var Nx=e=>{
  var t,n,r,o,i,s,a,l,u,c,d;
  let{
    invert:m,toast:f,unstyled:b,interacting:y,setHeights:x,visibleToasts:g,heights:h,index:v,toasts:k,expanded:S,removeToast:E,defaultRichColors:C,closeButton:R,style:L,cancelButtonStyle:A,actionButtonStyle:F,className:M="",descriptionClassName:q="",duration:_,position:G,gap:$,loadingIcon:V,expandByDefault:N,classNames:T,icons:D,closeButtonAriaLabel:W="Close toast",pauseWhenPageIsHidden:z
  }=e,[Q,Y]=O.useState(null),[me,Ce]=O.useState(null),[Z,fr]=O.useState(!1),[Jt,$n]=O.useState(!1),[Zt,pr]=O.useState(!1),[en,yi]=O.useState(!1),[da,wi]=O.useState(!1),[fa,uo]=O.useState(0),[mr,xc]=O.useState(0),co=O.useRef(f.duration||_||Hd),bc=O.useRef(null),Bn=O.useRef(null),Ng=v===0,Tg=v+1<=g,Ze=f.type,hr=f.dismissible!==!1,Rg=f.className||"",jg=f.descriptionClassName||"",xi=O.useMemo(()=>h.findIndex(B=>B.toastId===f.id)||0,[h,f.id]),Lg=O.useMemo(()=>{
    var B;
    return(B=f.closeButton)!=null?B:R
  },[f.closeButton,R]),kc=O.useMemo(()=>f.duration||_||Hd,[f.duration,_]),pa=O.useRef(0),gr=O.useRef(0),Sc=O.useRef(0),vr=O.useRef(null),[Ag,Og]=G.split("-"),Ec=O.useMemo(()=>h.reduce((B,te,se)=>se>=xi?B:B+te.height,0),[h,xi]),Cc=dx(),_g=f.invert||m,ma=Ze==="loading";
  gr.current=O.useMemo(()=>xi*$+Ec,[xi,Ec]),O.useEffect(()=>{
    co.current=kc
  },[kc]),O.useEffect(()=>{
    fr(!0)
  },[]),O.useEffect(()=>{
    let B=Bn.current;
    if(B){
      let te=B.getBoundingClientRect().height;
      return xc(te),x(se=>[{
        toastId:f.id,height:te,position:f.position
      },...se]),()=>x(se=>se.filter(at=>at.toastId!==f.id))
    }
  },[x,f.id]),O.useLayoutEffect(()=>{
    if(!Z)return;
    let B=Bn.current,te=B.style.height;
    B.style.height="auto";
    let se=B.getBoundingClientRect().height;
    B.style.height=te,xc(se),x(at=>at.find(lt=>lt.toastId===f.id)?at.map(lt=>lt.toastId===f.id?{
      ...lt,height:se
    }:lt):[{
      toastId:f.id,height:se,position:f.position
    },...at])
  },[Z,f.title,f.description,x,f.id]);
  let tn=O.useCallback(()=>{
    $n(!0),uo(gr.current),x(B=>B.filter(te=>te.toastId!==f.id)),setTimeout(()=>{
      E(f)
    },Cx)
  },[f,E,x,gr]);
  O.useEffect(()=>{
    if(f.promise&&Ze==="loading"||f.duration===1/0||f.type==="loading")return;
    let B;
    return S||y||z&&Cc?(()=>{
      if(Sc.current<pa.current){
        let te=new Date().getTime()-pa.current;
        co.current=co.current-te
      }Sc.current=new Date().getTime()
    })():co.current!==1/0&&(pa.current=new Date().getTime(),B=setTimeout(()=>{
      var te;
      (te=f.onAutoClose)==null||te.call(f,f),tn()
    },co.current)),()=>clearTimeout(B)
  },[S,y,f,Ze,z,Cc,tn]),O.useEffect(()=>{
    f.delete&&tn()
  },[tn,f.delete]);
  function Mg(){
    var B,te,se;
    return D!=null&&D.loading?O.createElement("div",{
      className:dt(T==null?void 0:T.loader,(B=f==null?void 0:f.classNames)==null?void 0:B.loader,"sonner-loader"),"data-visible":Ze==="loading"
    },D.loading):V?O.createElement("div",{
      className:dt(T==null?void 0:T.loader,(te=f==null?void 0:f.classNames)==null?void 0:te.loader,"sonner-loader"),"data-visible":Ze==="loading"
    },V):O.createElement(ix,{
      className:dt(T==null?void 0:T.loader,(se=f==null?void 0:f.classNames)==null?void 0:se.loader),visible:Ze==="loading"
    })
  }return O.createElement("li",{
    tabIndex:0,ref:Bn,className:dt(M,Rg,T==null?void 0:T.toast,(t=f==null?void 0:f.classNames)==null?void 0:t.toast,T==null?void 0:T.default,T==null?void 0:T[Ze],(n=f==null?void 0:f.classNames)==null?void 0:n[Ze]),"data-sonner-toast":"","data-rich-colors":(r=f.richColors)!=null?r:C,"data-styled":!(f.jsx||f.unstyled||b),"data-mounted":Z,"data-promise":!!f.promise,"data-swiped":da,"data-removed":Jt,"data-visible":Tg,"data-y-position":Ag,"data-x-position":Og,"data-index":v,"data-front":Ng,"data-swiping":Zt,"data-dismissible":hr,"data-type":Ze,"data-invert":_g,"data-swipe-out":en,"data-swipe-direction":me,"data-expanded":!!(S||N&&Z),style:{
      "--index":v,"--toasts-before":v,"--z-index":k.length-v,"--offset":`${Jt?fa:gr.current}px`,"--initial-height":N?"auto":`${mr}px`,...L,...f.style
    },onDragEnd:()=>{
      pr(!1),Y(null),vr.current=null
    },onPointerDown:B=>{
      ma||!hr||(bc.current=new Date,uo(gr.current),B.target.setPointerCapture(B.pointerId),B.target.tagName!=="BUTTON"&&(pr(!0),vr.current={
        x:B.clientX,y:B.clientY
      }))
    },onPointerUp:()=>{
      var B,te,se,at;
      if(en||!hr)return;
      vr.current=null;
      let lt=Number(((B=Bn.current)==null?void 0:B.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),nn=Number(((te=Bn.current)==null?void 0:te.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Un=new Date().getTime()-((se=bc.current)==null?void 0:se.getTime()),ut=Q==="x"?lt:nn,rn=Math.abs(ut)/Un;
      if(Math.abs(ut)>=Ex||rn>.11){
        uo(gr.current),(at=f.onDismiss)==null||at.call(f,f),Ce(Q==="x"?lt>0?"right":"left":nn>0?"down":"up"),tn(),yi(!0),wi(!1);
        return
      }pr(!1),Y(null)
    },onPointerMove:B=>{
      var te,se,at,lt;
      if(!vr.current||!hr||((te=window.getSelection())==null?void 0:te.toString().length)>0)return;
      let nn=B.clientY-vr.current.y,Un=B.clientX-vr.current.x,ut=(se=e.swipeDirections)!=null?se:Px(G);
      !Q&&(Math.abs(Un)>1||Math.abs(nn)>1)&&Y(Math.abs(Un)>Math.abs(nn)?"x":"y");
      let rn={
        x:0,y:0
      };
      Q==="y"?(ut.includes("top")||ut.includes("bottom"))&&(ut.includes("top")&&nn<0||ut.includes("bottom")&&nn>0)&&(rn.y=nn):Q==="x"&&(ut.includes("left")||ut.includes("right"))&&(ut.includes("left")&&Un<0||ut.includes("right")&&Un>0)&&(rn.x=Un),(Math.abs(rn.x)>0||Math.abs(rn.y)>0)&&wi(!0),(at=Bn.current)==null||at.style.setProperty("--swipe-amount-x",`${rn.x}px`),(lt=Bn.current)==null||lt.style.setProperty("--swipe-amount-y",`${rn.y}px`)
    }
  },Lg&&!f.jsx?O.createElement("button",{
    "aria-label":W,"data-disabled":ma,"data-close-button":!0,onClick:ma||!hr?()=>{
      
    }:()=>{
      var B;
      tn(),(B=f.onDismiss)==null||B.call(f,f)
    },className:dt(T==null?void 0:T.closeButton,(o=f==null?void 0:f.classNames)==null?void 0:o.closeButton)
  },(i=D==null?void 0:D.close)!=null?i:cx):null,f.jsx||w.isValidElement(f.title)?f.jsx?f.jsx:typeof f.title=="function"?f.title():f.title:O.createElement(O.Fragment,null,Ze||f.icon||f.promise?O.createElement("div",{
    "data-icon":"",className:dt(T==null?void 0:T.icon,(s=f==null?void 0:f.classNames)==null?void 0:s.icon)
  },f.promise||f.type==="loading"&&!f.icon?f.icon||Mg():null,f.type!=="loading"?f.icon||(D==null?void 0:D[Ze])||rx(Ze):null):null,O.createElement("div",{
    "data-content":"",className:dt(T==null?void 0:T.content,(a=f==null?void 0:f.classNames)==null?void 0:a.content)
  },O.createElement("div",{
    "data-title":"",className:dt(T==null?void 0:T.title,(l=f==null?void 0:f.classNames)==null?void 0:l.title)
  },typeof f.title=="function"?f.title():f.title),f.description?O.createElement("div",{
    "data-description":"",className:dt(q,jg,T==null?void 0:T.description,(u=f==null?void 0:f.classNames)==null?void 0:u.description)
  },typeof f.description=="function"?f.description():f.description):null),w.isValidElement(f.cancel)?f.cancel:f.cancel&&Bi(f.cancel)?O.createElement("button",{
    "data-button":!0,"data-cancel":!0,style:f.cancelButtonStyle||A,onClick:B=>{
      var te,se;
      Bi(f.cancel)&&hr&&((se=(te=f.cancel).onClick)==null||se.call(te,B),tn())
    },className:dt(T==null?void 0:T.cancelButton,(c=f==null?void 0:f.classNames)==null?void 0:c.cancelButton)
  },f.cancel.label):null,w.isValidElement(f.action)?f.action:f.action&&Bi(f.action)?O.createElement("button",{
    "data-button":!0,"data-action":!0,style:f.actionButtonStyle||F,onClick:B=>{
      var te,se;
      Bi(f.action)&&((se=(te=f.action).onClick)==null||se.call(te,B),!B.defaultPrevented&&tn())
    },className:dt(T==null?void 0:T.actionButton,(d=f==null?void 0:f.classNames)==null?void 0:d.actionButton)
  },f.action.label):null))
};
function Qd(){
  if(typeof window>"u"||typeof document>"u")return"ltr";
  let e=document.documentElement.getAttribute("dir");
  return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e
}function Tx(e,t){
  let n={
    
  };
  return[e,t].forEach((r,o)=>{
    let i=o===1,s=i?"--mobile-offset":"--offset",a=i?bx:xx;
    function l(u){
      ["top","right","bottom","left"].forEach(c=>{
        n[`${s}-${c}`]=typeof u=="number"?`${u}px`:u
      })
    }typeof r=="number"||typeof r=="string"?l(r):typeof r=="object"?["top","right","bottom","left"].forEach(u=>{
      r[u]===void 0?n[`${s}-${u}`]=a:n[`${s}-${u}`]=typeof r[u]=="number"?`${r[u]}px`:r[u]
    }):l(a)
  }),n
}var Rx=w.forwardRef(function(e,t){
  let{
    invert:n,position:r="bottom-right",hotkey:o=["altKey","KeyT"],expand:i,closeButton:s,className:a,offset:l,mobileOffset:u,theme:c="light",richColors:d,duration:m,style:f,visibleToasts:b=wx,toastOptions:y,dir:x=Qd(),gap:g=Sx,loadingIcon:h,icons:v,containerAriaLabel:k="Notifications",pauseWhenPageIsHidden:S
  }=e,[E,C]=O.useState([]),R=O.useMemo(()=>Array.from(new Set([r].concat(E.filter(z=>z.position).map(z=>z.position)))),[E,r]),[L,A]=O.useState([]),[F,M]=O.useState(!1),[q,_]=O.useState(!1),[G,$]=O.useState(c!=="system"?c:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),V=O.useRef(null),N=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),T=O.useRef(null),D=O.useRef(!1),W=O.useCallback(z=>{
    C(Q=>{
      var Y;
      return(Y=Q.find(me=>me.id===z.id))!=null&&Y.delete||Fe.dismiss(z.id),Q.filter(({
        id:me
      })=>me!==z.id)
    })
  },[]);
  return O.useEffect(()=>Fe.subscribe(z=>{
    if(z.dismiss){
      C(Q=>Q.map(Y=>Y.id===z.id?{
        ...Y,delete:!0
      }:Y));
      return
    }setTimeout(()=>{
      qm.flushSync(()=>{
        C(Q=>{
          let Y=Q.findIndex(me=>me.id===z.id);
          return Y!==-1?[...Q.slice(0,Y),{
            ...Q[Y],...z
          },...Q.slice(Y+1)]:[z,...Q]
        })
      })
    })
  }),[]),O.useEffect(()=>{
    if(c!=="system"){
      $(c);
      return
    }if(c==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?$("dark"):$("light")),typeof window>"u")return;
    let z=window.matchMedia("(prefers-color-scheme: dark)");
    try{
      z.addEventListener("change",({
        matches:Q
      })=>{
        $(Q?"dark":"light")
      })
    }catch{
      z.addListener(({
        matches:Y
      })=>{
        try{
          $(Y?"dark":"light")
        }catch(me){
          console.error(me)
        }
      })
    }
  },[c]),O.useEffect(()=>{
    E.length<=1&&M(!1)
  },[E]),O.useEffect(()=>{
    let z=Q=>{
      var Y,me;
      o.every(Ce=>Q[Ce]||Q.code===Ce)&&(M(!0),(Y=V.current)==null||Y.focus()),Q.code==="Escape"&&(document.activeElement===V.current||(me=V.current)!=null&&me.contains(document.activeElement))&&M(!1)
    };
    return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)
  },[o]),O.useEffect(()=>{
    if(V.current)return()=>{
      T.current&&(T.current.focus({
        preventScroll:!0
      }),T.current=null,D.current=!1)
    }
  },[V.current]),O.createElement("section",{
    ref:t,"aria-label":`${k} ${N}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0
  },R.map((z,Q)=>{
    var Y;
    let[me,Ce]=z.split("-");
    return E.length?O.createElement("ol",{
      key:z,dir:x==="auto"?Qd():x,tabIndex:-1,ref:V,className:a,"data-sonner-toaster":!0,"data-theme":G,"data-y-position":me,"data-lifted":F&&E.length>1&&!i,"data-x-position":Ce,style:{
        "--front-toast-height":`${((Y=L[0])==null?void 0:Y.height)||0}px`,"--width":`${kx}px`,"--gap":`${g}px`,...f,...Tx(l,u)
      },onBlur:Z=>{
        D.current&&!Z.currentTarget.contains(Z.relatedTarget)&&(D.current=!1,T.current&&(T.current.focus({
          preventScroll:!0
        }),T.current=null))
      },onFocus:Z=>{
        Z.target instanceof HTMLElement&&Z.target.dataset.dismissible==="false"||D.current||(D.current=!0,T.current=Z.relatedTarget)
      },onMouseEnter:()=>M(!0),onMouseMove:()=>M(!0),onMouseLeave:()=>{
        q||M(!1)
      },onDragEnd:()=>M(!1),onPointerDown:Z=>{
        Z.target instanceof HTMLElement&&Z.target.dataset.dismissible==="false"||_(!0)
      },onPointerUp:()=>_(!1)
    },E.filter(Z=>!Z.position&&Q===0||Z.position===z).map((Z,fr)=>{
      var Jt,$n;
      return O.createElement(Nx,{
        key:Z.id,icons:v,index:fr,toast:Z,defaultRichColors:d,duration:(Jt=y==null?void 0:y.duration)!=null?Jt:m,className:y==null?void 0:y.className,descriptionClassName:y==null?void 0:y.descriptionClassName,invert:n,visibleToasts:b,closeButton:($n=y==null?void 0:y.closeButton)!=null?$n:s,interacting:q,position:z,style:y==null?void 0:y.style,unstyled:y==null?void 0:y.unstyled,classNames:y==null?void 0:y.classNames,cancelButtonStyle:y==null?void 0:y.cancelButtonStyle,actionButtonStyle:y==null?void 0:y.actionButtonStyle,removeToast:W,toasts:E.filter(Zt=>Zt.position==Z.position),heights:L.filter(Zt=>Zt.position==Z.position),setHeights:A,expandByDefault:i,gap:g,loadingIcon:h,expanded:F,pauseWhenPageIsHidden:S,swipeDirections:e.swipeDirections
      })
    })):null
  }))
});
const jx=({
  ...e
})=>{
  const{
    theme:t="system"
  }=nx();
  return p.jsx(Rx,{
    theme:t,className:"toaster group",toastOptions:{
      classNames:{
        toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
      }
    },...e
  })
},Lx=["top","right","bottom","left"],_n=Math.min,He=Math.max,Ls=Math.round,Ui=Math.floor,Ot=e=>({
  x:e,y:e
}),Ax={
  left:"right",right:"left",bottom:"top",top:"bottom"
},Ox={
  start:"end",end:"start"
};
function Xl(e,t,n){
  return He(e,_n(t,n))
}function Kt(e,t){
  return typeof e=="function"?e(t):e
}function Gt(e){
  return e.split("-")[0]
}function so(e){
  return e.split("-")[1]
}function sc(e){
  return e==="x"?"y":"x"
}function ac(e){
  return e==="y"?"height":"width"
}const _x=new Set(["top","bottom"]);
function jt(e){
  return _x.has(Gt(e))?"y":"x"
}function lc(e){
  return sc(jt(e))
}function Mx(e,t,n){
  n===void 0&&(n=!1);
  const r=so(e),o=lc(e),i=ac(o);
  let s=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";
  return t.reference[i]>t.floating[i]&&(s=As(s)),[s,As(s)]
}function Dx(e){
  const t=As(e);
  return[Jl(e),t,Jl(t)]
}function Jl(e){
  return e.replace(/start|end/g,t=>Ox[t])
}const Kd=["left","right"],Gd=["right","left"],Ix=["top","bottom"],Fx=["bottom","top"];
function zx(e,t,n){
  switch(e){
    case"top":case"bottom":return n?t?Gd:Kd:t?Kd:Gd;
    case"left":case"right":return t?Ix:Fx;
    default:return[]
  }
}function $x(e,t,n,r){
  const o=so(e);
  let i=zx(Gt(e),n==="start",r);
  return o&&(i=i.map(s=>s+"-"+o),t&&(i=i.concat(i.map(Jl)))),i
}function As(e){
  return e.replace(/left|right|bottom|top/g,t=>Ax[t])
}function Bx(e){
  return{
    top:0,right:0,bottom:0,left:0,...e
  }
}function Lh(e){
  return typeof e!="number"?Bx(e):{
    top:e,right:e,bottom:e,left:e
  }
}function Os(e){
  const{
    x:t,y:n,width:r,height:o
  }=e;
  return{
    width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n
  }
}function Yd(e,t,n){
  let{
    reference:r,floating:o
  }=e;
  const i=jt(t),s=lc(t),a=ac(s),l=Gt(t),u=i==="y",c=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,m=r[a]/2-o[a]/2;
  let f;
  switch(l){
    case"top":f={
      x:c,y:r.y-o.height
    };
    break;
    case"bottom":f={
      x:c,y:r.y+r.height
    };
    break;
    case"right":f={
      x:r.x+r.width,y:d
    };
    break;
    case"left":f={
      x:r.x-o.width,y:d
    };
    break;
    default:f={
      x:r.x,y:r.y
    }
  }switch(so(t)){
    case"start":f[s]-=m*(n&&u?-1:1);
    break;
    case"end":f[s]+=m*(n&&u?-1:1);
    break
  }return f
}const Ux=async(e,t,n)=>{
  const{
    placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:s
  }=n,a=i.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));
  let u=await s.getElementRects({
    reference:e,floating:t,strategy:o
  }),{
    x:c,y:d
  }=Yd(u,r,l),m=r,f={
    
  },b=0;
  for(let y=0;
  y<a.length;
  y++){
    const{
      name:x,fn:g
    }=a[y],{
      x:h,y:v,data:k,reset:S
    }=await g({
      x:c,y:d,initialPlacement:r,placement:m,strategy:o,middlewareData:f,rects:u,platform:s,elements:{
        reference:e,floating:t
      }
    });
    c=h??c,d=v??d,f={
      ...f,[x]:{
        ...f[x],...k
      }
    },S&&b<=50&&(b++,typeof S=="object"&&(S.placement&&(m=S.placement),S.rects&&(u=S.rects===!0?await s.getElementRects({
      reference:e,floating:t,strategy:o
    }):S.rects),{
      x:c,y:d
    }=Yd(u,m,l)),y=-1)
  }return{
    x:c,y:d,placement:m,strategy:o,middlewareData:f
  }
};
async function Zo(e,t){
  var n;
  t===void 0&&(t={
    
  });
  const{
    x:r,y:o,platform:i,rects:s,elements:a,strategy:l
  }=e,{
    boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:m=!1,padding:f=0
  }=Kt(t,e),b=Lh(f),x=a[m?d==="floating"?"reference":"floating":d],g=Os(await i.getClippingRect({
    element:(n=await(i.isElement==null?void 0:i.isElement(x)))==null||n?x:x.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:u,rootBoundary:c,strategy:l
  })),h=d==="floating"?{
    x:r,y:o,width:s.floating.width,height:s.floating.height
  }:s.reference,v=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),k=await(i.isElement==null?void 0:i.isElement(v))?await(i.getScale==null?void 0:i.getScale(v))||{
    x:1,y:1
  }:{
    x:1,y:1
  },S=Os(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements:a,rect:h,offsetParent:v,strategy:l
  }):h);
  return{
    top:(g.top-S.top+b.top)/k.y,bottom:(S.bottom-g.bottom+b.bottom)/k.y,left:(g.left-S.left+b.left)/k.x,right:(S.right-g.right+b.right)/k.x
  }
}const qx=e=>({
  name:"arrow",options:e,async fn(t){
    const{
      x:n,y:r,placement:o,rects:i,platform:s,elements:a,middlewareData:l
    }=t,{
      element:u,padding:c=0
    }=Kt(e,t)||{
      
    };
    if(u==null)return{
      
    };
    const d=Lh(c),m={
      x:n,y:r
    },f=lc(o),b=ac(f),y=await s.getDimensions(u),x=f==="y",g=x?"top":"left",h=x?"bottom":"right",v=x?"clientHeight":"clientWidth",k=i.reference[b]+i.reference[f]-m[f]-i.floating[b],S=m[f]-i.reference[f],E=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));
    let C=E?E[v]:0;
    (!C||!await(s.isElement==null?void 0:s.isElement(E)))&&(C=a.floating[v]||i.floating[b]);
    const R=k/2-S/2,L=C/2-y[b]/2-1,A=_n(d[g],L),F=_n(d[h],L),M=A,q=C-y[b]-F,_=C/2-y[b]/2+R,G=Xl(M,_,q),$=!l.arrow&&so(o)!=null&&_!==G&&i.reference[b]/2-(_<M?A:F)-y[b]/2<0,V=$?_<M?_-M:_-q:0;
    return{
      [f]:m[f]+V,data:{
        [f]:G,centerOffset:_-G-V,...$&&{
          alignmentOffset:V
        }
      },reset:$
    }
  }
}),Vx=function(e){
  return e===void 0&&(e={
    
  }),{
    name:"flip",options:e,async fn(t){
      var n,r;
      const{
        placement:o,middlewareData:i,rects:s,initialPlacement:a,platform:l,elements:u
      }=t,{
        mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:y=!0,...x
      }=Kt(e,t);
      if((n=i.arrow)!=null&&n.alignmentOffset)return{
        
      };
      const g=Gt(o),h=jt(a),v=Gt(a)===a,k=await(l.isRTL==null?void 0:l.isRTL(u.floating)),S=m||(v||!y?[As(a)]:Dx(a)),E=b!=="none";
      !m&&E&&S.push(...$x(a,y,b,k));
      const C=[a,...S],R=await Zo(t,x),L=[];
      let A=((r=i.flip)==null?void 0:r.overflows)||[];
      if(c&&L.push(R[g]),d){
        const _=Mx(o,s,k);
        L.push(R[_[0]],R[_[1]])
      }if(A=[...A,{
        placement:o,overflows:L
      }],!L.every(_=>_<=0)){
        var F,M;
        const _=(((F=i.flip)==null?void 0:F.index)||0)+1,G=C[_];
        if(G&&(!(d==="alignment"?h!==jt(G):!1)||A.every(N=>N.overflows[0]>0&&jt(N.placement)===h)))return{
          data:{
            index:_,overflows:A
          },reset:{
            placement:G
          }
        };
        let $=(M=A.filter(V=>V.overflows[0]<=0).sort((V,N)=>V.overflows[1]-N.overflows[1])[0])==null?void 0:M.placement;
        if(!$)switch(f){
          case"bestFit":{
            var q;
            const V=(q=A.filter(N=>{
              if(E){
                const T=jt(N.placement);
                return T===h||T==="y"
              }return!0
            }).map(N=>[N.placement,N.overflows.filter(T=>T>0).reduce((T,D)=>T+D,0)]).sort((N,T)=>N[1]-T[1])[0])==null?void 0:q[0];
            V&&($=V);
            break
          }case"initialPlacement":$=a;
          break
        }if(o!==$)return{
          reset:{
            placement:$
          }
        }
      }return{
        
      }
    }
  }
};
function Xd(e,t){
  return{
    top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width
  }
}function Jd(e){
  return Lx.some(t=>e[t]>=0)
}const Wx=function(e){
  return e===void 0&&(e={
    
  }),{
    name:"hide",options:e,async fn(t){
      const{
        rects:n
      }=t,{
        strategy:r="referenceHidden",...o
      }=Kt(e,t);
      switch(r){
        case"referenceHidden":{
          const i=await Zo(t,{
            ...o,elementContext:"reference"
          }),s=Xd(i,n.reference);
          return{
            data:{
              referenceHiddenOffsets:s,referenceHidden:Jd(s)
            }
          }
        }case"escaped":{
          const i=await Zo(t,{
            ...o,altBoundary:!0
          }),s=Xd(i,n.floating);
          return{
            data:{
              escapedOffsets:s,escaped:Jd(s)
            }
          }
        }default:return{
          
        }
      }
    }
  }
},Ah=new Set(["left","top"]);
async function Hx(e,t){
  const{
    placement:n,platform:r,elements:o
  }=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),s=Gt(n),a=so(n),l=jt(n)==="y",u=Ah.has(s)?-1:1,c=i&&l?-1:1,d=Kt(t,e);
  let{
    mainAxis:m,crossAxis:f,alignmentAxis:b
  }=typeof d=="number"?{
    mainAxis:d,crossAxis:0,alignmentAxis:null
  }:{
    mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis
  };
  return a&&typeof b=="number"&&(f=a==="end"?b*-1:b),l?{
    x:f*c,y:m*u
  }:{
    x:m*u,y:f*c
  }
}const Qx=function(e){
  return e===void 0&&(e=0),{
    name:"offset",options:e,async fn(t){
      var n,r;
      const{
        x:o,y:i,placement:s,middlewareData:a
      }=t,l=await Hx(t,e);
      return s===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{
        
      }:{
        x:o+l.x,y:i+l.y,data:{
          ...l,placement:s
        }
      }
    }
  }
},Kx=function(e){
  return e===void 0&&(e={
    
  }),{
    name:"shift",options:e,async fn(t){
      const{
        x:n,y:r,placement:o
      }=t,{
        mainAxis:i=!0,crossAxis:s=!1,limiter:a={
          fn:x=>{
            let{
              x:g,y:h
            }=x;
            return{
              x:g,y:h
            }
          }
        },...l
      }=Kt(e,t),u={
        x:n,y:r
      },c=await Zo(t,l),d=jt(Gt(o)),m=sc(d);
      let f=u[m],b=u[d];
      if(i){
        const x=m==="y"?"top":"left",g=m==="y"?"bottom":"right",h=f+c[x],v=f-c[g];
        f=Xl(h,f,v)
      }if(s){
        const x=d==="y"?"top":"left",g=d==="y"?"bottom":"right",h=b+c[x],v=b-c[g];
        b=Xl(h,b,v)
      }const y=a.fn({
        ...t,[m]:f,[d]:b
      });
      return{
        ...y,data:{
          x:y.x-n,y:y.y-r,enabled:{
            [m]:i,[d]:s
          }
        }
      }
    }
  }
},Gx=function(e){
  return e===void 0&&(e={
    
  }),{
    options:e,fn(t){
      const{
        x:n,y:r,placement:o,rects:i,middlewareData:s
      }=t,{
        offset:a=0,mainAxis:l=!0,crossAxis:u=!0
      }=Kt(e,t),c={
        x:n,y:r
      },d=jt(o),m=sc(d);
      let f=c[m],b=c[d];
      const y=Kt(a,t),x=typeof y=="number"?{
        mainAxis:y,crossAxis:0
      }:{
        mainAxis:0,crossAxis:0,...y
      };
      if(l){
        const v=m==="y"?"height":"width",k=i.reference[m]-i.floating[v]+x.mainAxis,S=i.reference[m]+i.reference[v]-x.mainAxis;
        f<k?f=k:f>S&&(f=S)
      }if(u){
        var g,h;
        const v=m==="y"?"width":"height",k=Ah.has(Gt(o)),S=i.reference[d]-i.floating[v]+(k&&((g=s.offset)==null?void 0:g[d])||0)+(k?0:x.crossAxis),E=i.reference[d]+i.reference[v]+(k?0:((h=s.offset)==null?void 0:h[d])||0)-(k?x.crossAxis:0);
        b<S?b=S:b>E&&(b=E)
      }return{
        [m]:f,[d]:b
      }
    }
  }
},Yx=function(e){
  return e===void 0&&(e={
    
  }),{
    name:"size",options:e,async fn(t){
      var n,r;
      const{
        placement:o,rects:i,platform:s,elements:a
      }=t,{
        apply:l=()=>{
          
        },...u
      }=Kt(e,t),c=await Zo(t,u),d=Gt(o),m=so(o),f=jt(o)==="y",{
        width:b,height:y
      }=i.floating;
      let x,g;
      d==="top"||d==="bottom"?(x=d,g=m===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(g=d,x=m==="end"?"top":"bottom");
      const h=y-c.top-c.bottom,v=b-c.left-c.right,k=_n(y-c[x],h),S=_n(b-c[g],v),E=!t.middlewareData.shift;
      let C=k,R=S;
      if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(R=v),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(C=h),E&&!m){
        const A=He(c.left,0),F=He(c.right,0),M=He(c.top,0),q=He(c.bottom,0);
        f?R=b-2*(A!==0||F!==0?A+F:He(c.left,c.right)):C=y-2*(M!==0||q!==0?M+q:He(c.top,c.bottom))
      }await l({
        ...t,availableWidth:R,availableHeight:C
      });
      const L=await s.getDimensions(a.floating);
      return b!==L.width||y!==L.height?{
        reset:{
          rects:!0
        }
      }:{
        
      }
    }
  }
};
function ra(){
  return typeof window<"u"
}function ao(e){
  return Oh(e)?(e.nodeName||"").toLowerCase():"#document"
}function Ge(e){
  var t;
  return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window
}function Mt(e){
  var t;
  return(t=(Oh(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement
}function Oh(e){
  return ra()?e instanceof Node||e instanceof Ge(e).Node:!1
}function kt(e){
  return ra()?e instanceof Element||e instanceof Ge(e).Element:!1
}function _t(e){
  return ra()?e instanceof HTMLElement||e instanceof Ge(e).HTMLElement:!1
}function Zd(e){
  return!ra()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ge(e).ShadowRoot
}const Xx=new Set(["inline","contents"]);
function mi(e){
  const{
    overflow:t,overflowX:n,overflowY:r,display:o
  }=St(e);
  return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Xx.has(o)
}const Jx=new Set(["table","td","th"]);
function Zx(e){
  return Jx.has(ao(e))
}const e1=[":popover-open",":modal"];
function oa(e){
  return e1.some(t=>{
    try{
      return e.matches(t)
    }catch{
      return!1
    }
  })
}const t1=["transform","translate","scale","rotate","perspective"],n1=["transform","translate","scale","rotate","perspective","filter"],r1=["paint","layout","strict","content"];
function uc(e){
  const t=cc(),n=kt(e)?St(e):e;
  return t1.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||n1.some(r=>(n.willChange||"").includes(r))||r1.some(r=>(n.contain||"").includes(r))
}function o1(e){
  let t=Mn(e);
  for(;
  _t(t)&&!eo(t);
  ){
    if(uc(t))return t;
    if(oa(t))return null;
    t=Mn(t)
  }return null
}function cc(){
  return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")
}const i1=new Set(["html","body","#document"]);
function eo(e){
  return i1.has(ao(e))
}function St(e){
  return Ge(e).getComputedStyle(e)
}function ia(e){
  return kt(e)?{
    scrollLeft:e.scrollLeft,scrollTop:e.scrollTop
  }:{
    scrollLeft:e.scrollX,scrollTop:e.scrollY
  }
}function Mn(e){
  if(ao(e)==="html")return e;
  const t=e.assignedSlot||e.parentNode||Zd(e)&&e.host||Mt(e);
  return Zd(t)?t.host:t
}function _h(e){
  const t=Mn(e);
  return eo(t)?e.ownerDocument?e.ownerDocument.body:e.body:_t(t)&&mi(t)?t:_h(t)
}function ei(e,t,n){
  var r;
  t===void 0&&(t=[]),n===void 0&&(n=!0);
  const o=_h(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),s=Ge(o);
  if(i){
    const a=Zl(s);
    return t.concat(s,s.visualViewport||[],mi(o)?o:[],a&&n?ei(a):[])
  }return t.concat(o,ei(o,[],n))
}function Zl(e){
  return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null
}function Mh(e){
  const t=St(e);
  let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;
  const o=_t(e),i=o?e.offsetWidth:n,s=o?e.offsetHeight:r,a=Ls(n)!==i||Ls(r)!==s;
  return a&&(n=i,r=s),{
    width:n,height:r,$:a
  }
}function dc(e){
  return kt(e)?e:e.contextElement
}function Fr(e){
  const t=dc(e);
  if(!_t(t))return Ot(1);
  const n=t.getBoundingClientRect(),{
    width:r,height:o,$:i
  }=Mh(t);
  let s=(i?Ls(n.width):n.width)/r,a=(i?Ls(n.height):n.height)/o;
  return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{
    x:s,y:a
  }
}const s1=Ot(0);
function Dh(e){
  const t=Ge(e);
  return!cc()||!t.visualViewport?s1:{
    x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop
  }
}function a1(e,t,n){
  return t===void 0&&(t=!1),!n||t&&n!==Ge(e)?!1:t
}function ar(e,t,n,r){
  t===void 0&&(t=!1),n===void 0&&(n=!1);
  const o=e.getBoundingClientRect(),i=dc(e);
  let s=Ot(1);
  t&&(r?kt(r)&&(s=Fr(r)):s=Fr(e));
  const a=a1(i,n,r)?Dh(i):Ot(0);
  let l=(o.left+a.x)/s.x,u=(o.top+a.y)/s.y,c=o.width/s.x,d=o.height/s.y;
  if(i){
    const m=Ge(i),f=r&&kt(r)?Ge(r):r;
    let b=m,y=Zl(b);
    for(;
    y&&r&&f!==b;
    ){
      const x=Fr(y),g=y.getBoundingClientRect(),h=St(y),v=g.left+(y.clientLeft+parseFloat(h.paddingLeft))*x.x,k=g.top+(y.clientTop+parseFloat(h.paddingTop))*x.y;
      l*=x.x,u*=x.y,c*=x.x,d*=x.y,l+=v,u+=k,b=Ge(y),y=Zl(b)
    }
  }return Os({
    width:c,height:d,x:l,y:u
  })
}function fc(e,t){
  const n=ia(e).scrollLeft;
  return t?t.left+n:ar(Mt(e)).left+n
}function Ih(e,t,n){
  n===void 0&&(n=!1);
  const r=e.getBoundingClientRect(),o=r.left+t.scrollLeft-(n?0:fc(e,r)),i=r.top+t.scrollTop;
  return{
    x:o,y:i
  }
}function l1(e){
  let{
    elements:t,rect:n,offsetParent:r,strategy:o
  }=e;
  const i=o==="fixed",s=Mt(r),a=t?oa(t.floating):!1;
  if(r===s||a&&i)return n;
  let l={
    scrollLeft:0,scrollTop:0
  },u=Ot(1);
  const c=Ot(0),d=_t(r);
  if((d||!d&&!i)&&((ao(r)!=="body"||mi(s))&&(l=ia(r)),_t(r))){
    const f=ar(r);
    u=Fr(r),c.x=f.x+r.clientLeft,c.y=f.y+r.clientTop
  }const m=s&&!d&&!i?Ih(s,l,!0):Ot(0);
  return{
    width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-l.scrollLeft*u.x+c.x+m.x,y:n.y*u.y-l.scrollTop*u.y+c.y+m.y
  }
}function u1(e){
  return Array.from(e.getClientRects())
}function c1(e){
  const t=Mt(e),n=ia(e),r=e.ownerDocument.body,o=He(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=He(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);
  let s=-n.scrollLeft+fc(e);
  const a=-n.scrollTop;
  return St(r).direction==="rtl"&&(s+=He(t.clientWidth,r.clientWidth)-o),{
    width:o,height:i,x:s,y:a
  }
}function d1(e,t){
  const n=Ge(e),r=Mt(e),o=n.visualViewport;
  let i=r.clientWidth,s=r.clientHeight,a=0,l=0;
  if(o){
    i=o.width,s=o.height;
    const u=cc();
    (!u||u&&t==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)
  }return{
    width:i,height:s,x:a,y:l
  }
}const f1=new Set(["absolute","fixed"]);
function p1(e,t){
  const n=ar(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=_t(e)?Fr(e):Ot(1),s=e.clientWidth*i.x,a=e.clientHeight*i.y,l=o*i.x,u=r*i.y;
  return{
    width:s,height:a,x:l,y:u
  }
}function ef(e,t,n){
  let r;
  if(t==="viewport")r=d1(e,n);
  else if(t==="document")r=c1(Mt(e));
  else if(kt(t))r=p1(t,n);
  else{
    const o=Dh(e);
    r={
      x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height
    }
  }return Os(r)
}function Fh(e,t){
  const n=Mn(e);
  return n===t||!kt(n)||eo(n)?!1:St(n).position==="fixed"||Fh(n,t)
}function m1(e,t){
  const n=t.get(e);
  if(n)return n;
  let r=ei(e,[],!1).filter(a=>kt(a)&&ao(a)!=="body"),o=null;
  const i=St(e).position==="fixed";
  let s=i?Mn(e):e;
  for(;
  kt(s)&&!eo(s);
  ){
    const a=St(s),l=uc(s);
    !l&&a.position==="fixed"&&(o=null),(i?!l&&!o:!l&&a.position==="static"&&!!o&&f1.has(o.position)||mi(s)&&!l&&Fh(e,s))?r=r.filter(c=>c!==s):o=a,s=Mn(s)
  }return t.set(e,r),r
}function h1(e){
  let{
    element:t,boundary:n,rootBoundary:r,strategy:o
  }=e;
  const s=[...n==="clippingAncestors"?oa(t)?[]:m1(t,this._c):[].concat(n),r],a=s[0],l=s.reduce((u,c)=>{
    const d=ef(t,c,o);
    return u.top=He(d.top,u.top),u.right=_n(d.right,u.right),u.bottom=_n(d.bottom,u.bottom),u.left=He(d.left,u.left),u
  },ef(t,a,o));
  return{
    width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top
  }
}function g1(e){
  const{
    width:t,height:n
  }=Mh(e);
  return{
    width:t,height:n
  }
}function v1(e,t,n){
  const r=_t(t),o=Mt(t),i=n==="fixed",s=ar(e,!0,i,t);
  let a={
    scrollLeft:0,scrollTop:0
  };
  const l=Ot(0);
  function u(){
    l.x=fc(o)
  }if(r||!r&&!i)if((ao(t)!=="body"||mi(o))&&(a=ia(t)),r){
    const f=ar(t,!0,i,t);
    l.x=f.x+t.clientLeft,l.y=f.y+t.clientTop
  }else o&&u();
  i&&!r&&o&&u();
  const c=o&&!r&&!i?Ih(o,a):Ot(0),d=s.left+a.scrollLeft-l.x-c.x,m=s.top+a.scrollTop-l.y-c.y;
  return{
    x:d,y:m,width:s.width,height:s.height
  }
}function Ha(e){
  return St(e).position==="static"
}function tf(e,t){
  if(!_t(e)||St(e).position==="fixed")return null;
  if(t)return t(e);
  let n=e.offsetParent;
  return Mt(e)===n&&(n=n.ownerDocument.body),n
}function zh(e,t){
  const n=Ge(e);
  if(oa(e))return n;
  if(!_t(e)){
    let o=Mn(e);
    for(;
    o&&!eo(o);
    ){
      if(kt(o)&&!Ha(o))return o;
      o=Mn(o)
    }return n
  }let r=tf(e,t);
  for(;
  r&&Zx(r)&&Ha(r);
  )r=tf(r,t);
  return r&&eo(r)&&Ha(r)&&!uc(r)?n:r||o1(e)||n
}const y1=async function(e){
  const t=this.getOffsetParent||zh,n=this.getDimensions,r=await n(e.floating);
  return{
    reference:v1(e.reference,await t(e.floating),e.strategy),floating:{
      x:0,y:0,width:r.width,height:r.height
    }
  }
};
function w1(e){
  return St(e).direction==="rtl"
}const x1={
  convertOffsetParentRelativeRectToViewportRelativeRect:l1,getDocumentElement:Mt,getClippingRect:h1,getOffsetParent:zh,getElementRects:y1,getClientRects:u1,getDimensions:g1,getScale:Fr,isElement:kt,isRTL:w1
};
function $h(e,t){
  return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height
}function b1(e,t){
  let n=null,r;
  const o=Mt(e);
  function i(){
    var a;
    clearTimeout(r),(a=n)==null||a.disconnect(),n=null
  }function s(a,l){
    a===void 0&&(a=!1),l===void 0&&(l=1),i();
    const u=e.getBoundingClientRect(),{
      left:c,top:d,width:m,height:f
    }=u;
    if(a||t(),!m||!f)return;
    const b=Ui(d),y=Ui(o.clientWidth-(c+m)),x=Ui(o.clientHeight-(d+f)),g=Ui(c),v={
      rootMargin:-b+"px "+-y+"px "+-x+"px "+-g+"px",threshold:He(0,_n(1,l))||1
    };
    let k=!0;
    function S(E){
      const C=E[0].intersectionRatio;
      if(C!==l){
        if(!k)return s();
        C?s(!1,C):r=setTimeout(()=>{
          s(!1,1e-7)
        },1e3)
      }C===1&&!$h(u,e.getBoundingClientRect())&&s(),k=!1
    }try{
      n=new IntersectionObserver(S,{
        ...v,root:o.ownerDocument
      })
    }catch{
      n=new IntersectionObserver(S,v)
    }n.observe(e)
  }return s(!0),i
}function k1(e,t,n,r){
  r===void 0&&(r={
    
  });
  const{
    ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1
  }=r,u=dc(e),c=o||i?[...u?ei(u):[],...ei(t)]:[];
  c.forEach(g=>{
    o&&g.addEventListener("scroll",n,{
      passive:!0
    }),i&&g.addEventListener("resize",n)
  });
  const d=u&&a?b1(u,n):null;
  let m=-1,f=null;
  s&&(f=new ResizeObserver(g=>{
    let[h]=g;
    h&&h.target===u&&f&&(f.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{
      var v;
      (v=f)==null||v.observe(t)
    })),n()
  }),u&&!l&&f.observe(u),f.observe(t));
  let b,y=l?ar(e):null;
  l&&x();
  function x(){
    const g=ar(e);
    y&&!$h(y,g)&&n(),y=g,b=requestAnimationFrame(x)
  }return n(),()=>{
    var g;
    c.forEach(h=>{
      o&&h.removeEventListener("scroll",n),i&&h.removeEventListener("resize",n)
    }),d==null||d(),(g=f)==null||g.disconnect(),f=null,l&&cancelAnimationFrame(b)
  }
}const S1=Qx,E1=Kx,C1=Vx,P1=Yx,N1=Wx,nf=qx,T1=Gx,R1=(e,t,n)=>{
  const r=new Map,o={
    platform:x1,...n
  },i={
    ...o.platform,_c:r
  };
  return Ux(e,t,{
    ...o,platform:i
  })
};
var j1=typeof document<"u",L1=function(){
  
},os=j1?w.useLayoutEffect:L1;
function _s(e,t){
  if(e===t)return!0;
  if(typeof e!=typeof t)return!1;
  if(typeof e=="function"&&e.toString()===t.toString())return!0;
  let n,r,o;
  if(e&&t&&typeof e=="object"){
    if(Array.isArray(e)){
      if(n=e.length,n!==t.length)return!1;
      for(r=n;
      r--!==0;
      )if(!_s(e[r],t[r]))return!1;
      return!0
    }if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;
    for(r=n;
    r--!==0;
    )if(!{
      
    }.hasOwnProperty.call(t,o[r]))return!1;
    for(r=n;
    r--!==0;
    ){
      const i=o[r];
      if(!(i==="_owner"&&e.$$typeof)&&!_s(e[i],t[i]))return!1
    }return!0
  }return e!==e&&t!==t
}function Bh(e){
  return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1
}function rf(e,t){
  const n=Bh(e);
  return Math.round(t*n)/n
}function Qa(e){
  const t=w.useRef(e);
  return os(()=>{
    t.current=e
  }),t
}function A1(e){
  e===void 0&&(e={
    
  });
  const{
    placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{
      reference:i,floating:s
    }={
      
    },transform:a=!0,whileElementsMounted:l,open:u
  }=e,[c,d]=w.useState({
    x:0,y:0,strategy:n,placement:t,middlewareData:{
      
    },isPositioned:!1
  }),[m,f]=w.useState(r);
  _s(m,r)||f(r);
  const[b,y]=w.useState(null),[x,g]=w.useState(null),h=w.useCallback(N=>{
    N!==E.current&&(E.current=N,y(N))
  },[]),v=w.useCallback(N=>{
    N!==C.current&&(C.current=N,g(N))
  },[]),k=i||b,S=s||x,E=w.useRef(null),C=w.useRef(null),R=w.useRef(c),L=l!=null,A=Qa(l),F=Qa(o),M=Qa(u),q=w.useCallback(()=>{
    if(!E.current||!C.current)return;
    const N={
      placement:t,strategy:n,middleware:m
    };
    F.current&&(N.platform=F.current),R1(E.current,C.current,N).then(T=>{
      const D={
        ...T,isPositioned:M.current!==!1
      };
      _.current&&!_s(R.current,D)&&(R.current=D,fi.flushSync(()=>{
        d(D)
      }))
    })
  },[m,t,n,F,M]);
  os(()=>{
    u===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,d(N=>({
      ...N,isPositioned:!1
    })))
  },[u]);
  const _=w.useRef(!1);
  os(()=>(_.current=!0,()=>{
    _.current=!1
  }),[]),os(()=>{
    if(k&&(E.current=k),S&&(C.current=S),k&&S){
      if(A.current)return A.current(k,S,q);
      q()
    }
  },[k,S,q,A,L]);
  const G=w.useMemo(()=>({
    reference:E,floating:C,setReference:h,setFloating:v
  }),[h,v]),$=w.useMemo(()=>({
    reference:k,floating:S
  }),[k,S]),V=w.useMemo(()=>{
    const N={
      position:n,left:0,top:0
    };
    if(!$.floating)return N;
    const T=rf($.floating,c.x),D=rf($.floating,c.y);
    return a?{
      ...N,transform:"translate("+T+"px, "+D+"px)",...Bh($.floating)>=1.5&&{
        willChange:"transform"
      }
    }:{
      position:n,left:T,top:D
    }
  },[n,a,$.floating,c.x,c.y]);
  return w.useMemo(()=>({
    ...c,update:q,refs:G,elements:$,floatingStyles:V
  }),[c,q,G,$,V])
}const O1=e=>{
  function t(n){
    return{
      
    }.hasOwnProperty.call(n,"current")
  }return{
    name:"arrow",options:e,fn(n){
      const{
        element:r,padding:o
      }=typeof e=="function"?e(n):e;
      return r&&t(r)?r.current!=null?nf({
        element:r.current,padding:o
      }).fn(n):{
        
      }:r?nf({
        element:r,padding:o
      }).fn(n):{
        
      }
    }
  }
},_1=(e,t)=>({
  ...S1(e),options:[e,t]
}),M1=(e,t)=>({
  ...E1(e),options:[e,t]
}),D1=(e,t)=>({
  ...T1(e),options:[e,t]
}),I1=(e,t)=>({
  ...C1(e),options:[e,t]
}),F1=(e,t)=>({
  ...P1(e),options:[e,t]
}),z1=(e,t)=>({
  ...N1(e),options:[e,t]
}),$1=(e,t)=>({
  ...O1(e),options:[e,t]
});
var B1="Arrow",Uh=w.forwardRef((e,t)=>{
  const{
    children:n,width:r=10,height:o=5,...i
  }=e;
  return p.jsx(Ve.svg,{
    ...i,ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:p.jsx("polygon",{
      points:"0,0 30,0 15,10"
    })
  })
});
Uh.displayName=B1;
var U1=Uh;
function q1(e){
  const[t,n]=w.useState(void 0);
  return On(()=>{
    if(e){
      n({
        width:e.offsetWidth,height:e.offsetHeight
      });
      const r=new ResizeObserver(o=>{
        if(!Array.isArray(o)||!o.length)return;
        const i=o[0];
        let s,a;
        if("borderBoxSize"in i){
          const l=i.borderBoxSize,u=Array.isArray(l)?l[0]:l;
          s=u.inlineSize,a=u.blockSize
        }else s=e.offsetWidth,a=e.offsetHeight;
        n({
          width:s,height:a
        })
      });
      return r.observe(e,{
        box:"border-box"
      }),()=>r.unobserve(e)
    }else n(void 0)
  },[e]),t
}var qh="Popper",[Vh,Wh]=ea(qh),[jS,Hh]=Vh(qh),Qh="PopperAnchor",Kh=w.forwardRef((e,t)=>{
  const{
    __scopePopper:n,virtualRef:r,...o
  }=e,i=Hh(Qh,n),s=w.useRef(null),a=bt(t,s);
  return w.useEffect(()=>{
    i.onAnchorChange((r==null?void 0:r.current)||s.current)
  }),r?null:p.jsx(Ve.div,{
    ...o,ref:a
  })
});
Kh.displayName=Qh;
var pc="PopperContent",[V1,W1]=Vh(pc),Gh=w.forwardRef((e,t)=>{
  var Z,fr,Jt,$n,Zt,pr;
  const{
    __scopePopper:n,side:r="bottom",sideOffset:o=0,align:i="center",alignOffset:s=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:u=[],collisionPadding:c=0,sticky:d="partial",hideWhenDetached:m=!1,updatePositionStrategy:f="optimized",onPlaced:b,...y
  }=e,x=Hh(pc,n),[g,h]=w.useState(null),v=bt(t,en=>h(en)),[k,S]=w.useState(null),E=q1(k),C=(E==null?void 0:E.width)??0,R=(E==null?void 0:E.height)??0,L=r+(i!=="center"?"-"+i:""),A=typeof c=="number"?c:{
    top:0,right:0,bottom:0,left:0,...c
  },F=Array.isArray(u)?u:[u],M=F.length>0,q={
    padding:A,boundary:F.filter(Q1),altBoundary:M
  },{
    refs:_,floatingStyles:G,placement:$,isPositioned:V,middlewareData:N
  }=A1({
    strategy:"fixed",placement:L,whileElementsMounted:(...en)=>k1(...en,{
      animationFrame:f==="always"
    }),elements:{
      reference:x.anchor
    },middleware:[_1({
      mainAxis:o+R,alignmentAxis:s
    }),l&&M1({
      mainAxis:!0,crossAxis:!1,limiter:d==="partial"?D1():void 0,...q
    }),l&&I1({
      ...q
    }),F1({
      ...q,apply:({
        elements:en,rects:yi,availableWidth:da,availableHeight:wi
      })=>{
        const{
          width:fa,height:uo
        }=yi.reference,mr=en.floating.style;
        mr.setProperty("--radix-popper-available-width",`${da}px`),mr.setProperty("--radix-popper-available-height",`${wi}px`),mr.setProperty("--radix-popper-anchor-width",`${fa}px`),mr.setProperty("--radix-popper-anchor-height",`${uo}px`)
      }
    }),k&&$1({
      element:k,padding:a
    }),K1({
      arrowWidth:C,arrowHeight:R
    }),m&&z1({
      strategy:"referenceHidden",...q
    })]
  }),[T,D]=Jh($),W=An(b);
  On(()=>{
    V&&(W==null||W())
  },[V,W]);
  const z=(Z=N.arrow)==null?void 0:Z.x,Q=(fr=N.arrow)==null?void 0:fr.y,Y=((Jt=N.arrow)==null?void 0:Jt.centerOffset)!==0,[me,Ce]=w.useState();
  return On(()=>{
    g&&Ce(window.getComputedStyle(g).zIndex)
  },[g]),p.jsx("div",{
    ref:_.setFloating,"data-radix-popper-content-wrapper":"",style:{
      ...G,transform:V?G.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:me,"--radix-popper-transform-origin":[($n=N.transformOrigin)==null?void 0:$n.x,(Zt=N.transformOrigin)==null?void 0:Zt.y].join(" "),...((pr=N.hide)==null?void 0:pr.referenceHidden)&&{
        visibility:"hidden",pointerEvents:"none"
      }
    },dir:e.dir,children:p.jsx(V1,{
      scope:n,placedSide:T,onArrowChange:S,arrowX:z,arrowY:Q,shouldHideArrow:Y,children:p.jsx(Ve.div,{
        "data-side":T,"data-align":D,...y,ref:v,style:{
          ...y.style,animation:V?void 0:"none"
        }
      })
    })
  })
});
Gh.displayName=pc;
var Yh="PopperArrow",H1={
  top:"bottom",right:"left",bottom:"top",left:"right"
},Xh=w.forwardRef(function(t,n){
  const{
    __scopePopper:r,...o
  }=t,i=W1(Yh,r),s=H1[i.placedSide];
  return p.jsx("span",{
    ref:i.onArrowChange,style:{
      position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{
        top:"",right:"0 0",bottom:"center 0",left:"100% 0"
      }[i.placedSide],transform:{
        top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"
      }[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0
    },children:p.jsx(U1,{
      ...o,ref:n,style:{
        ...o.style,display:"block"
      }
    })
  })
});
Xh.displayName=Yh;
function Q1(e){
  return e!==null
}var K1=e=>({
  name:"transformOrigin",options:e,fn(t){
    var x,g,h;
    const{
      placement:n,rects:r,middlewareData:o
    }=t,s=((x=o.arrow)==null?void 0:x.centerOffset)!==0,a=s?0:e.arrowWidth,l=s?0:e.arrowHeight,[u,c]=Jh(n),d={
      start:"0%",center:"50%",end:"100%"
    }[c],m=(((g=o.arrow)==null?void 0:g.x)??0)+a/2,f=(((h=o.arrow)==null?void 0:h.y)??0)+l/2;
    let b="",y="";
    return u==="bottom"?(b=s?d:`${m}px`,y=`${-l}px`):u==="top"?(b=s?d:`${m}px`,y=`${r.floating.height+l}px`):u==="right"?(b=`${-l}px`,y=s?d:`${f}px`):u==="left"&&(b=`${r.floating.width+l}px`,y=s?d:`${f}px`),{
      data:{
        x:b,y
      }
    }
  }
});
function Jh(e){
  const[t,n="center"]=e.split("-");
  return[t,n]
}var G1=Kh,Y1=Gh,X1=Xh,[sa,LS]=ea("Tooltip",[Wh]),mc=Wh(),Zh="TooltipProvider",J1=700,of="tooltip.open",[Z1,eg]=sa(Zh),tg=e=>{
  const{
    __scopeTooltip:t,delayDuration:n=J1,skipDelayDuration:r=300,disableHoverableContent:o=!1,children:i
  }=e,s=w.useRef(!0),a=w.useRef(!1),l=w.useRef(0);
  return w.useEffect(()=>{
    const u=l.current;
    return()=>window.clearTimeout(u)
  },[]),p.jsx(Z1,{
    scope:t,isOpenDelayedRef:s,delayDuration:n,onOpen:w.useCallback(()=>{
      window.clearTimeout(l.current),s.current=!1
    },[]),onClose:w.useCallback(()=>{
      window.clearTimeout(l.current),l.current=window.setTimeout(()=>s.current=!0,r)
    },[r]),isPointerInTransitRef:a,onPointerInTransitChange:w.useCallback(u=>{
      a.current=u
    },[]),disableHoverableContent:o,children:i
  })
};
tg.displayName=Zh;
var ng="Tooltip",[AS,aa]=sa(ng),eu="TooltipTrigger",eb=w.forwardRef((e,t)=>{
  const{
    __scopeTooltip:n,...r
  }=e,o=aa(eu,n),i=eg(eu,n),s=mc(n),a=w.useRef(null),l=bt(t,a,o.onTriggerChange),u=w.useRef(!1),c=w.useRef(!1),d=w.useCallback(()=>u.current=!1,[]);
  return w.useEffect(()=>()=>document.removeEventListener("pointerup",d),[d]),p.jsx(G1,{
    asChild:!0,...s,children:p.jsx(Ve.button,{
      "aria-describedby":o.open?o.contentId:void 0,"data-state":o.stateAttribute,...r,ref:l,onPointerMove:ye(e.onPointerMove,m=>{
        m.pointerType!=="touch"&&!c.current&&!i.isPointerInTransitRef.current&&(o.onTriggerEnter(),c.current=!0)
      }),onPointerLeave:ye(e.onPointerLeave,()=>{
        o.onTriggerLeave(),c.current=!1
      }),onPointerDown:ye(e.onPointerDown,()=>{
        o.open&&o.onClose(),u.current=!0,document.addEventListener("pointerup",d,{
          once:!0
        })
      }),onFocus:ye(e.onFocus,()=>{
        u.current||o.onOpen()
      }),onBlur:ye(e.onBlur,o.onClose),onClick:ye(e.onClick,o.onClose)
    })
  })
});
eb.displayName=eu;
var tb="TooltipPortal",[OS,nb]=sa(tb,{
  forceMount:void 0
}),to="TooltipContent",rg=w.forwardRef((e,t)=>{
  const n=nb(to,e.__scopeTooltip),{
    forceMount:r=n.forceMount,side:o="top",...i
  }=e,s=aa(to,e.__scopeTooltip);
  return p.jsx(tc,{
    present:r||s.open,children:s.disableHoverableContent?p.jsx(og,{
      side:o,...i,ref:t
    }):p.jsx(rb,{
      side:o,...i,ref:t
    })
  })
}),rb=w.forwardRef((e,t)=>{
  const n=aa(to,e.__scopeTooltip),r=eg(to,e.__scopeTooltip),o=w.useRef(null),i=bt(t,o),[s,a]=w.useState(null),{
    trigger:l,onClose:u
  }=n,c=o.current,{
    onPointerInTransitChange:d
  }=r,m=w.useCallback(()=>{
    a(null),d(!1)
  },[d]),f=w.useCallback((b,y)=>{
    const x=b.currentTarget,g={
      x:b.clientX,y:b.clientY
    },h=lb(g,x.getBoundingClientRect()),v=ub(g,h),k=cb(y.getBoundingClientRect()),S=fb([...v,...k]);
    a(S),d(!0)
  },[d]);
  return w.useEffect(()=>()=>m(),[m]),w.useEffect(()=>{
    if(l&&c){
      const b=x=>f(x,c),y=x=>f(x,l);
      return l.addEventListener("pointerleave",b),c.addEventListener("pointerleave",y),()=>{
        l.removeEventListener("pointerleave",b),c.removeEventListener("pointerleave",y)
      }
    }
  },[l,c,f,m]),w.useEffect(()=>{
    if(s){
      const b=y=>{
        const x=y.target,g={
          x:y.clientX,y:y.clientY
        },h=(l==null?void 0:l.contains(x))||(c==null?void 0:c.contains(x)),v=!db(g,s);
        h?m():v&&(m(),u())
      };
      return document.addEventListener("pointermove",b),()=>document.removeEventListener("pointermove",b)
    }
  },[l,c,s,u,m]),p.jsx(og,{
    ...e,ref:i
  })
}),[ob,ib]=sa(ng,{
  isInside:!1
}),sb=g0("TooltipContent"),og=w.forwardRef((e,t)=>{
  const{
    __scopeTooltip:n,children:r,"aria-label":o,onEscapeKeyDown:i,onPointerDownOutside:s,...a
  }=e,l=aa(to,n),u=mc(n),{
    onClose:c
  }=l;
  return w.useEffect(()=>(document.addEventListener(of,c),()=>document.removeEventListener(of,c)),[c]),w.useEffect(()=>{
    if(l.trigger){
      const d=m=>{
        const f=m.target;
        f!=null&&f.contains(l.trigger)&&c()
      };
      return window.addEventListener("scroll",d,{
        capture:!0
      }),()=>window.removeEventListener("scroll",d,{
        capture:!0
      })
    }
  },[l.trigger,c]),p.jsx(ec,{
    asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:d=>d.preventDefault(),onDismiss:c,children:p.jsxs(Y1,{
      "data-state":l.stateAttribute,...u,...a,ref:t,style:{
        ...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"
      },children:[p.jsx(sb,{
        children:r
      }),p.jsx(ob,{
        scope:n,isInside:!0,children:p.jsx(B0,{
          id:l.contentId,role:"tooltip",children:o||r
        })
      })]
    })
  })
});
rg.displayName=to;
var ig="TooltipArrow",ab=w.forwardRef((e,t)=>{
  const{
    __scopeTooltip:n,...r
  }=e,o=mc(n);
  return ib(ig,n).isInside?null:p.jsx(X1,{
    ...o,...r,ref:t
  })
});
ab.displayName=ig;
function lb(e,t){
  const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);
  switch(Math.min(n,r,o,i)){
    case i:return"left";
    case o:return"right";
    case n:return"top";
    case r:return"bottom";
    default:throw new Error("unreachable")
  }
}function ub(e,t,n=5){
  const r=[];
  switch(t){
    case"top":r.push({
      x:e.x-n,y:e.y+n
    },{
      x:e.x+n,y:e.y+n
    });
    break;
    case"bottom":r.push({
      x:e.x-n,y:e.y-n
    },{
      x:e.x+n,y:e.y-n
    });
    break;
    case"left":r.push({
      x:e.x+n,y:e.y-n
    },{
      x:e.x+n,y:e.y+n
    });
    break;
    case"right":r.push({
      x:e.x-n,y:e.y-n
    },{
      x:e.x-n,y:e.y+n
    });
    break
  }return r
}function cb(e){
  const{
    top:t,right:n,bottom:r,left:o
  }=e;
  return[{
    x:o,y:t
  },{
    x:n,y:t
  },{
    x:n,y:r
  },{
    x:o,y:r
  }]
}function db(e,t){
  const{
    x:n,y:r
  }=e;
  let o=!1;
  for(let i=0,s=t.length-1;
  i<t.length;
  s=i++){
    const a=t[i],l=t[s],u=a.x,c=a.y,d=l.x,m=l.y;
    c>r!=m>r&&n<(d-u)*(r-c)/(m-c)+u&&(o=!o)
  }return o
}function fb(e){
  const t=e.slice();
  return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),pb(t)
}function pb(e){
  if(e.length<=1)return e.slice();
  const t=[];
  for(let r=0;
  r<e.length;
  r++){
    const o=e[r];
    for(;
    t.length>=2;
    ){
      const i=t[t.length-1],s=t[t.length-2];
      if((i.x-s.x)*(o.y-s.y)>=(i.y-s.y)*(o.x-s.x))t.pop();
      else break
    }t.push(o)
  }t.pop();
  const n=[];
  for(let r=e.length-1;
  r>=0;
  r--){
    const o=e[r];
    for(;
    n.length>=2;
    ){
      const i=n[n.length-1],s=n[n.length-2];
      if((i.x-s.x)*(o.y-s.y)>=(i.y-s.y)*(o.x-s.x))n.pop();
      else break
    }n.push(o)
  }return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)
}var mb=tg,sg=rg;
const hb=mb,gb=w.forwardRef(({
  className:e,sideOffset:t=4,...n
},r)=>p.jsx(sg,{
  ref:r,sideOffset:t,className:cr("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n
}));
gb.displayName=sg.displayName;
var la=class{
  constructor(){
    this.listeners=new Set,this.subscribe=this.subscribe.bind(this)
  }subscribe(e){
    return this.listeners.add(e),this.onSubscribe(),()=>{
      this.listeners.delete(e),this.onUnsubscribe()
    }
  }hasListeners(){
    return this.listeners.size>0
  }onSubscribe(){
    
  }onUnsubscribe(){
    
  }
},ua=typeof window>"u"||"Deno"in globalThis;
function pt(){
  
}function vb(e,t){
  return typeof e=="function"?e(t):e
}function yb(e){
  return typeof e=="number"&&e>=0&&e!==1/0
}function wb(e,t){
  return Math.max(e+(t||0)-Date.now(),0)
}function tu(e,t){
  return typeof e=="function"?e(t):e
}function xb(e,t){
  return typeof e=="function"?e(t):e
}function sf(e,t){
  const{
    type:n="all",exact:r,fetchStatus:o,predicate:i,queryKey:s,stale:a
  }=e;
  if(s){
    if(r){
      if(t.queryHash!==hc(s,t.options))return!1
    }else if(!ni(t.queryKey,s))return!1
  }if(n!=="all"){
    const l=t.isActive();
    if(n==="active"&&!l||n==="inactive"&&l)return!1
  }return!(typeof a=="boolean"&&t.isStale()!==a||o&&o!==t.state.fetchStatus||i&&!i(t))
}function af(e,t){
  const{
    exact:n,status:r,predicate:o,mutationKey:i
  }=e;
  if(i){
    if(!t.options.mutationKey)return!1;
    if(n){
      if(ti(t.options.mutationKey)!==ti(i))return!1
    }else if(!ni(t.options.mutationKey,i))return!1
  }return!(r&&t.state.status!==r||o&&!o(t))
}function hc(e,t){
  return((t==null?void 0:t.queryKeyHashFn)||ti)(e)
}function ti(e){
  return JSON.stringify(e,(t,n)=>nu(n)?Object.keys(n).sort().reduce((r,o)=>(r[o]=n[o],r),{
    
  }):n)
}function ni(e,t){
  return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>ni(e[n],t[n])):!1
}function ag(e,t){
  if(e===t)return e;
  const n=lf(e)&&lf(t);
  if(n||nu(e)&&nu(t)){
    const r=n?e:Object.keys(e),o=r.length,i=n?t:Object.keys(t),s=i.length,a=n?[]:{
      
    },l=new Set(r);
    let u=0;
    for(let c=0;
    c<s;
    c++){
      const d=n?c:i[c];
      (!n&&l.has(d)||n)&&e[d]===void 0&&t[d]===void 0?(a[d]=void 0,u++):(a[d]=ag(e[d],t[d]),a[d]===e[d]&&e[d]!==void 0&&u++)
    }return o===s&&u===o?e:a
  }return t
}function lf(e){
  return Array.isArray(e)&&e.length===Object.keys(e).length
}function nu(e){
  if(!uf(e))return!1;
  const t=e.constructor;
  if(t===void 0)return!0;
  const n=t.prototype;
  return!(!uf(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)
}function uf(e){
  return Object.prototype.toString.call(e)==="[object Object]"
}function bb(e){
  return new Promise(t=>{
    setTimeout(t,e)
  })
}function kb(e,t,n){
  return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?ag(e,t):t
}function Sb(e,t,n=0){
  const r=[...e,t];
  return n&&r.length>n?r.slice(1):r
}function Eb(e,t,n=0){
  const r=[t,...e];
  return n&&r.length>n?r.slice(0,-1):r
}var gc=Symbol();
function lg(e,t){
  return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===gc?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn
}var Kn,pn,zr,bf,Cb=(bf=class extends la{
  constructor(){
    super();
    J(this,Kn);
    J(this,pn);
    J(this,zr);
    U(this,zr,t=>{
      if(!ua&&window.addEventListener){
        const n=()=>t();
        return window.addEventListener("visibilitychange",n,!1),()=>{
          window.removeEventListener("visibilitychange",n)
        }
      }
    })
  }onSubscribe(){
    P(this,pn)||this.setEventListener(P(this,zr))
  }onUnsubscribe(){
    var t;
    this.hasListeners()||((t=P(this,pn))==null||t.call(this),U(this,pn,void 0))
  }setEventListener(t){
    var n;
    U(this,zr,t),(n=P(this,pn))==null||n.call(this),U(this,pn,t(r=>{
      typeof r=="boolean"?this.setFocused(r):this.onFocus()
    }))
  }setFocused(t){
    P(this,Kn)!==t&&(U(this,Kn,t),this.onFocus())
  }onFocus(){
    const t=this.isFocused();
    this.listeners.forEach(n=>{
      n(t)
    })
  }isFocused(){
    var t;
    return typeof P(this,Kn)=="boolean"?P(this,Kn):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"
  }
},Kn=new WeakMap,pn=new WeakMap,zr=new WeakMap,bf),ug=new Cb,$r,mn,Br,kf,Pb=(kf=class extends la{
  constructor(){
    super();
    J(this,$r,!0);
    J(this,mn);
    J(this,Br);
    U(this,Br,t=>{
      if(!ua&&window.addEventListener){
        const n=()=>t(!0),r=()=>t(!1);
        return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{
          window.removeEventListener("online",n),window.removeEventListener("offline",r)
        }
      }
    })
  }onSubscribe(){
    P(this,mn)||this.setEventListener(P(this,Br))
  }onUnsubscribe(){
    var t;
    this.hasListeners()||((t=P(this,mn))==null||t.call(this),U(this,mn,void 0))
  }setEventListener(t){
    var n;
    U(this,Br,t),(n=P(this,mn))==null||n.call(this),U(this,mn,t(this.setOnline.bind(this)))
  }setOnline(t){
    P(this,$r)!==t&&(U(this,$r,t),this.listeners.forEach(r=>{
      r(t)
    }))
  }isOnline(){
    return P(this,$r)
  }
},$r=new WeakMap,mn=new WeakMap,Br=new WeakMap,kf),Ms=new Pb;
function Nb(){
  let e,t;
  const n=new Promise((o,i)=>{
    e=o,t=i
  });
  n.status="pending",n.catch(()=>{
    
  });
  function r(o){
    Object.assign(n,o),delete n.resolve,delete n.reject
  }return n.resolve=o=>{
    r({
      status:"fulfilled",value:o
    }),e(o)
  },n.reject=o=>{
    r({
      status:"rejected",reason:o
    }),t(o)
  },n
}function Tb(e){
  return Math.min(1e3*2**e,3e4)
}function cg(e){
  return(e??"online")==="online"?Ms.isOnline():!0
}var dg=class extends Error{
  constructor(e){
    super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent
  }
};
function Ka(e){
  return e instanceof dg
}function fg(e){
  let t=!1,n=0,r=!1,o;
  const i=Nb(),s=y=>{
    var x;
    r||(m(new dg(y)),(x=e.abort)==null||x.call(e))
  },a=()=>{
    t=!0
  },l=()=>{
    t=!1
  },u=()=>ug.isFocused()&&(e.networkMode==="always"||Ms.isOnline())&&e.canRun(),c=()=>cg(e.networkMode)&&e.canRun(),d=y=>{
    var x;
    r||(r=!0,(x=e.onSuccess)==null||x.call(e,y),o==null||o(),i.resolve(y))
  },m=y=>{
    var x;
    r||(r=!0,(x=e.onError)==null||x.call(e,y),o==null||o(),i.reject(y))
  },f=()=>new Promise(y=>{
    var x;
    o=g=>{
      (r||u())&&y(g)
    },(x=e.onPause)==null||x.call(e)
  }).then(()=>{
    var y;
    o=void 0,r||(y=e.onContinue)==null||y.call(e)
  }),b=()=>{
    if(r)return;
    let y;
    const x=n===0?e.initialPromise:void 0;
    try{
      y=x??e.fn()
    }catch(g){
      y=Promise.reject(g)
    }Promise.resolve(y).then(d).catch(g=>{
      var E;
      if(r)return;
      const h=e.retry??(ua?0:3),v=e.retryDelay??Tb,k=typeof v=="function"?v(n,g):v,S=h===!0||typeof h=="number"&&n<h||typeof h=="function"&&h(n,g);
      if(t||!S){
        m(g);
        return
      }n++,(E=e.onFail)==null||E.call(e,n,g),bb(k).then(()=>u()?void 0:f()).then(()=>{
        t?m(g):b()
      })
    })
  };
  return{
    promise:i,cancel:s,continue:()=>(o==null||o(),i),cancelRetry:a,continueRetry:l,canStart:c,start:()=>(c()?b():f().then(b),i)
  }
}var Rb=e=>setTimeout(e,0);
function jb(){
  let e=[],t=0,n=a=>{
    a()
  },r=a=>{
    a()
  },o=Rb;
  const i=a=>{
    t?e.push(a):o(()=>{
      n(a)
    })
  },s=()=>{
    const a=e;
    e=[],a.length&&o(()=>{
      r(()=>{
        a.forEach(l=>{
          n(l)
        })
      })
    })
  };
  return{
    batch:a=>{
      let l;
      t++;
      try{
        l=a()
      }finally{
        t--,t||s()
      }return l
    },batchCalls:a=>(...l)=>{
      i(()=>{
        a(...l)
      })
    },schedule:i,setNotifyFunction:a=>{
      n=a
    },setBatchNotifyFunction:a=>{
      r=a
    },setScheduler:a=>{
      o=a
    }
  }
}var _e=jb(),Gn,Sf,pg=(Sf=class{
  constructor(){
    J(this,Gn)
  }destroy(){
    this.clearGcTimeout()
  }scheduleGc(){
    this.clearGcTimeout(),yb(this.gcTime)&&U(this,Gn,setTimeout(()=>{
      this.optionalRemove()
    },this.gcTime))
  }updateGcTime(e){
    this.gcTime=Math.max(this.gcTime||0,e??(ua?1/0:5*60*1e3))
  }clearGcTimeout(){
    P(this,Gn)&&(clearTimeout(P(this,Gn)),U(this,Gn,void 0))
  }
},Gn=new WeakMap,Sf),Ur,Yn,et,Xn,Re,ii,Jn,mt,It,Ef,Lb=(Ef=class extends pg{
  constructor(t){
    super();
    J(this,mt);
    J(this,Ur);
    J(this,Yn);
    J(this,et);
    J(this,Xn);
    J(this,Re);
    J(this,ii);
    J(this,Jn);
    U(this,Jn,!1),U(this,ii,t.defaultOptions),this.setOptions(t.options),this.observers=[],U(this,Xn,t.client),U(this,et,P(this,Xn).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,U(this,Ur,Ob(this.options)),this.state=t.state??P(this,Ur),this.scheduleGc()
  }get meta(){
    return this.options.meta
  }get promise(){
    var t;
    return(t=P(this,Re))==null?void 0:t.promise
  }setOptions(t){
    this.options={
      ...P(this,ii),...t
    },this.updateGcTime(this.options.gcTime)
  }optionalRemove(){
    !this.observers.length&&this.state.fetchStatus==="idle"&&P(this,et).remove(this)
  }setData(t,n){
    const r=kb(this.state.data,t,this.options);
    return Pe(this,mt,It).call(this,{
      data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual
    }),r
  }setState(t,n){
    Pe(this,mt,It).call(this,{
      type:"setState",state:t,setStateOptions:n
    })
  }cancel(t){
    var r,o;
    const n=(r=P(this,Re))==null?void 0:r.promise;
    return(o=P(this,Re))==null||o.cancel(t),n?n.then(pt).catch(pt):Promise.resolve()
  }destroy(){
    super.destroy(),this.cancel({
      silent:!0
    })
  }reset(){
    this.destroy(),this.setState(P(this,Ur))
  }isActive(){
    return this.observers.some(t=>xb(t.options.enabled,this)!==!1)
  }isDisabled(){
    return this.getObserversCount()>0?!this.isActive():this.options.queryFn===gc||this.state.dataUpdateCount+this.state.errorUpdateCount===0
  }isStatic(){
    return this.getObserversCount()>0?this.observers.some(t=>tu(t.options.staleTime,this)==="static"):!1
  }isStale(){
    return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated
  }isStaleByTime(t=0){
    return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!wb(this.state.dataUpdatedAt,t)
  }onFocus(){
    var n;
    const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());
    t==null||t.refetch({
      cancelRefetch:!1
    }),(n=P(this,Re))==null||n.continue()
  }onOnline(){
    var n;
    const t=this.observers.find(r=>r.shouldFetchOnReconnect());
    t==null||t.refetch({
      cancelRefetch:!1
    }),(n=P(this,Re))==null||n.continue()
  }addObserver(t){
    this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),P(this,et).notify({
      type:"observerAdded",query:this,observer:t
    }))
  }removeObserver(t){
    this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(P(this,Re)&&(P(this,Jn)?P(this,Re).cancel({
      revert:!0
    }):P(this,Re).cancelRetry()),this.scheduleGc()),P(this,et).notify({
      type:"observerRemoved",query:this,observer:t
    }))
  }getObserversCount(){
    return this.observers.length
  }invalidate(){
    this.state.isInvalidated||Pe(this,mt,It).call(this,{
      type:"invalidate"
    })
  }fetch(t,n){
    var u,c,d;
    if(this.state.fetchStatus!=="idle"){
      if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({
        silent:!0
      });
      else if(P(this,Re))return P(this,Re).continueRetry(),P(this,Re).promise
    }if(t&&this.setOptions(t),!this.options.queryFn){
      const m=this.observers.find(f=>f.options.queryFn);
      m&&this.setOptions(m.options)
    }const r=new AbortController,o=m=>{
      Object.defineProperty(m,"signal",{
        enumerable:!0,get:()=>(U(this,Jn,!0),r.signal)
      })
    },i=()=>{
      const m=lg(this.options,n),b=(()=>{
        const y={
          client:P(this,Xn),queryKey:this.queryKey,meta:this.meta
        };
        return o(y),y
      })();
      return U(this,Jn,!1),this.options.persister?this.options.persister(m,b,this):m(b)
    },a=(()=>{
      const m={
        fetchOptions:n,options:this.options,queryKey:this.queryKey,client:P(this,Xn),state:this.state,fetchFn:i
      };
      return o(m),m
    })();
    (u=this.options.behavior)==null||u.onFetch(a,this),U(this,Yn,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=a.fetchOptions)==null?void 0:c.meta))&&Pe(this,mt,It).call(this,{
      type:"fetch",meta:(d=a.fetchOptions)==null?void 0:d.meta
    });
    const l=m=>{
      var f,b,y,x;
      Ka(m)&&m.silent||Pe(this,mt,It).call(this,{
        type:"error",error:m
      }),Ka(m)||((b=(f=P(this,et).config).onError)==null||b.call(f,m,this),(x=(y=P(this,et).config).onSettled)==null||x.call(y,this.state.data,m,this)),this.scheduleGc()
    };
    return U(this,Re,fg({
      initialPromise:n==null?void 0:n.initialPromise,fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:m=>{
        var f,b,y,x;
        if(m===void 0){
          l(new Error(`${this.queryHash} data is undefined`));
          return
        }try{
          this.setData(m)
        }catch(g){
          l(g);
          return
        }(b=(f=P(this,et).config).onSuccess)==null||b.call(f,m,this),(x=(y=P(this,et).config).onSettled)==null||x.call(y,m,this.state.error,this),this.scheduleGc()
      },onError:l,onFail:(m,f)=>{
        Pe(this,mt,It).call(this,{
          type:"failed",failureCount:m,error:f
        })
      },onPause:()=>{
        Pe(this,mt,It).call(this,{
          type:"pause"
        })
      },onContinue:()=>{
        Pe(this,mt,It).call(this,{
          type:"continue"
        })
      },retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0
    })),P(this,Re).start()
  }
},Ur=new WeakMap,Yn=new WeakMap,et=new WeakMap,Xn=new WeakMap,Re=new WeakMap,ii=new WeakMap,Jn=new WeakMap,mt=new WeakSet,It=function(t){
  const n=r=>{
    switch(t.type){
      case"failed":return{
        ...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error
      };
      case"pause":return{
        ...r,fetchStatus:"paused"
      };
      case"continue":return{
        ...r,fetchStatus:"fetching"
      };
      case"fetch":return{
        ...r,...Ab(r.data,this.options),fetchMeta:t.meta??null
      };
      case"success":return U(this,Yn,void 0),{
        ...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{
          fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null
        }
      };
      case"error":const o=t.error;
      return Ka(o)&&o.revert&&P(this,Yn)?{
        ...P(this,Yn),fetchStatus:"idle"
      }:{
        ...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"
      };
      case"invalidate":return{
        ...r,isInvalidated:!0
      };
      case"setState":return{
        ...r,...t.state
      }
    }
  };
  this.state=n(this.state),_e.batch(()=>{
    this.observers.forEach(r=>{
      r.onQueryUpdate()
    }),P(this,et).notify({
      query:this,type:"updated",action:t
    })
  })
},Ef);
function Ab(e,t){
  return{
    fetchFailureCount:0,fetchFailureReason:null,fetchStatus:cg(t.networkMode)?"fetching":"paused",...e===void 0&&{
      error:null,status:"pending"
    }
  }
}function Ob(e){
  const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;
  return{
    data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"
  }
}var Pt,Cf,_b=(Cf=class extends la{
  constructor(t={
    
  }){
    super();
    J(this,Pt);
    this.config=t,U(this,Pt,new Map)
  }build(t,n,r){
    const o=n.queryKey,i=n.queryHash??hc(o,n);
    let s=this.get(i);
    return s||(s=new Lb({
      client:t,queryKey:o,queryHash:i,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)
    }),this.add(s)),s
  }add(t){
    P(this,Pt).has(t.queryHash)||(P(this,Pt).set(t.queryHash,t),this.notify({
      type:"added",query:t
    }))
  }remove(t){
    const n=P(this,Pt).get(t.queryHash);
    n&&(t.destroy(),n===t&&P(this,Pt).delete(t.queryHash),this.notify({
      type:"removed",query:t
    }))
  }clear(){
    _e.batch(()=>{
      this.getAll().forEach(t=>{
        this.remove(t)
      })
    })
  }get(t){
    return P(this,Pt).get(t)
  }getAll(){
    return[...P(this,Pt).values()]
  }find(t){
    const n={
      exact:!0,...t
    };
    return this.getAll().find(r=>sf(n,r))
  }findAll(t={
    
  }){
    const n=this.getAll();
    return Object.keys(t).length>0?n.filter(r=>sf(t,r)):n
  }notify(t){
    _e.batch(()=>{
      this.listeners.forEach(n=>{
        n(t)
      })
    })
  }onFocus(){
    _e.batch(()=>{
      this.getAll().forEach(t=>{
        t.onFocus()
      })
    })
  }onOnline(){
    _e.batch(()=>{
      this.getAll().forEach(t=>{
        t.onOnline()
      })
    })
  }
},Pt=new WeakMap,Cf),Nt,Ae,Zn,Tt,ln,Pf,Mb=(Pf=class extends pg{
  constructor(t){
    super();
    J(this,Tt);
    J(this,Nt);
    J(this,Ae);
    J(this,Zn);
    this.mutationId=t.mutationId,U(this,Ae,t.mutationCache),U(this,Nt,[]),this.state=t.state||Db(),this.setOptions(t.options),this.scheduleGc()
  }setOptions(t){
    this.options=t,this.updateGcTime(this.options.gcTime)
  }get meta(){
    return this.options.meta
  }addObserver(t){
    P(this,Nt).includes(t)||(P(this,Nt).push(t),this.clearGcTimeout(),P(this,Ae).notify({
      type:"observerAdded",mutation:this,observer:t
    }))
  }removeObserver(t){
    U(this,Nt,P(this,Nt).filter(n=>n!==t)),this.scheduleGc(),P(this,Ae).notify({
      type:"observerRemoved",mutation:this,observer:t
    })
  }optionalRemove(){
    P(this,Nt).length||(this.state.status==="pending"?this.scheduleGc():P(this,Ae).remove(this))
  }continue(){
    var t;
    return((t=P(this,Zn))==null?void 0:t.continue())??this.execute(this.state.variables)
  }async execute(t){
    var i,s,a,l,u,c,d,m,f,b,y,x,g,h,v,k,S,E,C,R;
    const n=()=>{
      Pe(this,Tt,ln).call(this,{
        type:"continue"
      })
    };
    U(this,Zn,fg({
      fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(L,A)=>{
        Pe(this,Tt,ln).call(this,{
          type:"failed",failureCount:L,error:A
        })
      },onPause:()=>{
        Pe(this,Tt,ln).call(this,{
          type:"pause"
        })
      },onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>P(this,Ae).canRun(this)
    }));
    const r=this.state.status==="pending",o=!P(this,Zn).canStart();
    try{
      if(r)n();
      else{
        Pe(this,Tt,ln).call(this,{
          type:"pending",variables:t,isPaused:o
        }),await((s=(i=P(this,Ae).config).onMutate)==null?void 0:s.call(i,t,this));
        const A=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,t));
        A!==this.state.context&&Pe(this,Tt,ln).call(this,{
          type:"pending",context:A,variables:t,isPaused:o
        })
      }const L=await P(this,Zn).start();
      return await((c=(u=P(this,Ae).config).onSuccess)==null?void 0:c.call(u,L,t,this.state.context,this)),await((m=(d=this.options).onSuccess)==null?void 0:m.call(d,L,t,this.state.context)),await((b=(f=P(this,Ae).config).onSettled)==null?void 0:b.call(f,L,null,this.state.variables,this.state.context,this)),await((x=(y=this.options).onSettled)==null?void 0:x.call(y,L,null,t,this.state.context)),Pe(this,Tt,ln).call(this,{
        type:"success",data:L
      }),L
    }catch(L){
      try{
        throw await((h=(g=P(this,Ae).config).onError)==null?void 0:h.call(g,L,t,this.state.context,this)),await((k=(v=this.options).onError)==null?void 0:k.call(v,L,t,this.state.context)),await((E=(S=P(this,Ae).config).onSettled)==null?void 0:E.call(S,void 0,L,this.state.variables,this.state.context,this)),await((R=(C=this.options).onSettled)==null?void 0:R.call(C,void 0,L,t,this.state.context)),L
      }finally{
        Pe(this,Tt,ln).call(this,{
          type:"error",error:L
        })
      }
    }finally{
      P(this,Ae).runNext(this)
    }
  }
},Nt=new WeakMap,Ae=new WeakMap,Zn=new WeakMap,Tt=new WeakSet,ln=function(t){
  const n=r=>{
    switch(t.type){
      case"failed":return{
        ...r,failureCount:t.failureCount,failureReason:t.error
      };
      case"pause":return{
        ...r,isPaused:!0
      };
      case"continue":return{
        ...r,isPaused:!1
      };
      case"pending":return{
        ...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()
      };
      case"success":return{
        ...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1
      };
      case"error":return{
        ...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"
      }
    }
  };
  this.state=n(this.state),_e.batch(()=>{
    P(this,Nt).forEach(r=>{
      r.onMutationUpdate(t)
    }),P(this,Ae).notify({
      mutation:this,type:"updated",action:t
    })
  })
},Pf);
function Db(){
  return{
    context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0
  }
}var $t,ht,si,Nf,Ib=(Nf=class extends la{
  constructor(t={
    
  }){
    super();
    J(this,$t);
    J(this,ht);
    J(this,si);
    this.config=t,U(this,$t,new Set),U(this,ht,new Map),U(this,si,0)
  }build(t,n,r){
    const o=new Mb({
      mutationCache:this,mutationId:++bi(this,si)._,options:t.defaultMutationOptions(n),state:r
    });
    return this.add(o),o
  }add(t){
    P(this,$t).add(t);
    const n=qi(t);
    if(typeof n=="string"){
      const r=P(this,ht).get(n);
      r?r.push(t):P(this,ht).set(n,[t])
    }this.notify({
      type:"added",mutation:t
    })
  }remove(t){
    if(P(this,$t).delete(t)){
      const n=qi(t);
      if(typeof n=="string"){
        const r=P(this,ht).get(n);
        if(r)if(r.length>1){
          const o=r.indexOf(t);
          o!==-1&&r.splice(o,1)
        }else r[0]===t&&P(this,ht).delete(n)
      }
    }this.notify({
      type:"removed",mutation:t
    })
  }canRun(t){
    const n=qi(t);
    if(typeof n=="string"){
      const r=P(this,ht).get(n),o=r==null?void 0:r.find(i=>i.state.status==="pending");
      return!o||o===t
    }else return!0
  }runNext(t){
    var r;
    const n=qi(t);
    if(typeof n=="string"){
      const o=(r=P(this,ht).get(n))==null?void 0:r.find(i=>i!==t&&i.state.isPaused);
      return(o==null?void 0:o.continue())??Promise.resolve()
    }else return Promise.resolve()
  }clear(){
    _e.batch(()=>{
      P(this,$t).forEach(t=>{
        this.notify({
          type:"removed",mutation:t
        })
      }),P(this,$t).clear(),P(this,ht).clear()
    })
  }getAll(){
    return Array.from(P(this,$t))
  }find(t){
    const n={
      exact:!0,...t
    };
    return this.getAll().find(r=>af(n,r))
  }findAll(t={
    
  }){
    return this.getAll().filter(n=>af(t,n))
  }notify(t){
    _e.batch(()=>{
      this.listeners.forEach(n=>{
        n(t)
      })
    })
  }resumePausedMutations(){
    const t=this.getAll().filter(n=>n.state.isPaused);
    return _e.batch(()=>Promise.all(t.map(n=>n.continue().catch(pt))))
  }
},$t=new WeakMap,ht=new WeakMap,si=new WeakMap,Nf);
function qi(e){
  var t;
  return(t=e.options.scope)==null?void 0:t.id
}function cf(e){
  return{
    onFetch:(t,n)=>{
      var c,d,m,f,b;
      const r=t.options,o=(m=(d=(c=t.fetchOptions)==null?void 0:c.meta)==null?void 0:d.fetchMore)==null?void 0:m.direction,i=((f=t.state.data)==null?void 0:f.pages)||[],s=((b=t.state.data)==null?void 0:b.pageParams)||[];
      let a={
        pages:[],pageParams:[]
      },l=0;
      const u=async()=>{
        let y=!1;
        const x=v=>{
          Object.defineProperty(v,"signal",{
            enumerable:!0,get:()=>(t.signal.aborted?y=!0:t.signal.addEventListener("abort",()=>{
              y=!0
            }),t.signal)
          })
        },g=lg(t.options,t.fetchOptions),h=async(v,k,S)=>{
          if(y)return Promise.reject();
          if(k==null&&v.pages.length)return Promise.resolve(v);
          const C=(()=>{
            const F={
              client:t.client,queryKey:t.queryKey,pageParam:k,direction:S?"backward":"forward",meta:t.options.meta
            };
            return x(F),F
          })(),R=await g(C),{
            maxPages:L
          }=t.options,A=S?Eb:Sb;
          return{
            pages:A(v.pages,R,L),pageParams:A(v.pageParams,k,L)
          }
        };
        if(o&&i.length){
          const v=o==="backward",k=v?Fb:df,S={
            pages:i,pageParams:s
          },E=k(r,S);
          a=await h(S,E,v)
        }else{
          const v=e??i.length;
          do{
            const k=l===0?s[0]??r.initialPageParam:df(r,a);
            if(l>0&&k==null)break;
            a=await h(a,k),l++
          }while(l<v)
        }return a
      };
      t.options.persister?t.fetchFn=()=>{
        var y,x;
        return(x=(y=t.options).persister)==null?void 0:x.call(y,u,{
          client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal
        },n)
      }:t.fetchFn=u
    }
  }
}function df(e,{
  pages:t,pageParams:n
}){
  const r=t.length-1;
  return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0
}function Fb(e,{
  pages:t,pageParams:n
}){
  var r;
  return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0
}var de,hn,gn,qr,Vr,vn,Wr,Hr,Tf,zb=(Tf=class{
  constructor(e={
    
  }){
    J(this,de);
    J(this,hn);
    J(this,gn);
    J(this,qr);
    J(this,Vr);
    J(this,vn);
    J(this,Wr);
    J(this,Hr);
    U(this,de,e.queryCache||new _b),U(this,hn,e.mutationCache||new Ib),U(this,gn,e.defaultOptions||{
      
    }),U(this,qr,new Map),U(this,Vr,new Map),U(this,vn,0)
  }mount(){
    bi(this,vn)._++,P(this,vn)===1&&(U(this,Wr,ug.subscribe(async e=>{
      e&&(await this.resumePausedMutations(),P(this,de).onFocus())
    })),U(this,Hr,Ms.subscribe(async e=>{
      e&&(await this.resumePausedMutations(),P(this,de).onOnline())
    })))
  }unmount(){
    var e,t;
    bi(this,vn)._--,P(this,vn)===0&&((e=P(this,Wr))==null||e.call(this),U(this,Wr,void 0),(t=P(this,Hr))==null||t.call(this),U(this,Hr,void 0))
  }isFetching(e){
    return P(this,de).findAll({
      ...e,fetchStatus:"fetching"
    }).length
  }isMutating(e){
    return P(this,hn).findAll({
      ...e,status:"pending"
    }).length
  }getQueryData(e){
    var n;
    const t=this.defaultQueryOptions({
      queryKey:e
    });
    return(n=P(this,de).get(t.queryHash))==null?void 0:n.state.data
  }ensureQueryData(e){
    const t=this.defaultQueryOptions(e),n=P(this,de).build(this,t),r=n.state.data;
    return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(tu(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))
  }getQueriesData(e){
    return P(this,de).findAll(e).map(({
      queryKey:t,state:n
    })=>{
      const r=n.data;
      return[t,r]
    })
  }setQueryData(e,t,n){
    const r=this.defaultQueryOptions({
      queryKey:e
    }),o=P(this,de).get(r.queryHash),i=o==null?void 0:o.state.data,s=vb(t,i);
    if(s!==void 0)return P(this,de).build(this,r).setData(s,{
      ...n,manual:!0
    })
  }setQueriesData(e,t,n){
    return _e.batch(()=>P(this,de).findAll(e).map(({
      queryKey:r
    })=>[r,this.setQueryData(r,t,n)]))
  }getQueryState(e){
    var n;
    const t=this.defaultQueryOptions({
      queryKey:e
    });
    return(n=P(this,de).get(t.queryHash))==null?void 0:n.state
  }removeQueries(e){
    const t=P(this,de);
    _e.batch(()=>{
      t.findAll(e).forEach(n=>{
        t.remove(n)
      })
    })
  }resetQueries(e,t){
    const n=P(this,de);
    return _e.batch(()=>(n.findAll(e).forEach(r=>{
      r.reset()
    }),this.refetchQueries({
      type:"active",...e
    },t)))
  }cancelQueries(e,t={
    
  }){
    const n={
      revert:!0,...t
    },r=_e.batch(()=>P(this,de).findAll(e).map(o=>o.cancel(n)));
    return Promise.all(r).then(pt).catch(pt)
  }invalidateQueries(e,t={
    
  }){
    return _e.batch(()=>(P(this,de).findAll(e).forEach(n=>{
      n.invalidate()
    }),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({
      ...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"
    },t)))
  }refetchQueries(e,t={
    
  }){
    const n={
      ...t,cancelRefetch:t.cancelRefetch??!0
    },r=_e.batch(()=>P(this,de).findAll(e).filter(o=>!o.isDisabled()&&!o.isStatic()).map(o=>{
      let i=o.fetch(void 0,n);
      return n.throwOnError||(i=i.catch(pt)),o.state.fetchStatus==="paused"?Promise.resolve():i
    }));
    return Promise.all(r).then(pt)
  }fetchQuery(e){
    const t=this.defaultQueryOptions(e);
    t.retry===void 0&&(t.retry=!1);
    const n=P(this,de).build(this,t);
    return n.isStaleByTime(tu(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)
  }prefetchQuery(e){
    return this.fetchQuery(e).then(pt).catch(pt)
  }fetchInfiniteQuery(e){
    return e.behavior=cf(e.pages),this.fetchQuery(e)
  }prefetchInfiniteQuery(e){
    return this.fetchInfiniteQuery(e).then(pt).catch(pt)
  }ensureInfiniteQueryData(e){
    return e.behavior=cf(e.pages),this.ensureQueryData(e)
  }resumePausedMutations(){
    return Ms.isOnline()?P(this,hn).resumePausedMutations():Promise.resolve()
  }getQueryCache(){
    return P(this,de)
  }getMutationCache(){
    return P(this,hn)
  }getDefaultOptions(){
    return P(this,gn)
  }setDefaultOptions(e){
    U(this,gn,e)
  }setQueryDefaults(e,t){
    P(this,qr).set(ti(e),{
      queryKey:e,defaultOptions:t
    })
  }getQueryDefaults(e){
    const t=[...P(this,qr).values()],n={
      
    };
    return t.forEach(r=>{
      ni(e,r.queryKey)&&Object.assign(n,r.defaultOptions)
    }),n
  }setMutationDefaults(e,t){
    P(this,Vr).set(ti(e),{
      mutationKey:e,defaultOptions:t
    })
  }getMutationDefaults(e){
    const t=[...P(this,Vr).values()],n={
      
    };
    return t.forEach(r=>{
      ni(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)
    }),n
  }defaultQueryOptions(e){
    if(e._defaulted)return e;
    const t={
      ...P(this,gn).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0
    };
    return t.queryHash||(t.queryHash=hc(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===gc&&(t.enabled=!1),t
  }defaultMutationOptions(e){
    return e!=null&&e._defaulted?e:{
      ...P(this,gn).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0
    }
  }clear(){
    P(this,de).clear(),P(this,hn).clear()
  }
},de=new WeakMap,hn=new WeakMap,gn=new WeakMap,qr=new WeakMap,Vr=new WeakMap,vn=new WeakMap,Wr=new WeakMap,Hr=new WeakMap,Tf),$b=w.createContext(void 0),Bb=({
  client:e,children:t
})=>(w.useEffect(()=>(e.mount(),()=>{
  e.unmount()
}),[e]),p.jsx($b.Provider,{
  value:e,children:t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ri(){
  return ri=Object.assign?Object.assign.bind():function(e){
    for(var t=1;
    t<arguments.length;
    t++){
      var n=arguments[t];
      for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])
    }return e
  },ri.apply(this,arguments)
}var xn;
(function(e){
  e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"
})(xn||(xn={
  
}));
const ff="popstate";
function Ub(e){
  e===void 0&&(e={
    
  });
  function t(r,o){
    let{
      pathname:i,search:s,hash:a
    }=r.location;
    return ru("",{
      pathname:i,search:s,hash:a
    },o.state&&o.state.usr||null,o.state&&o.state.key||"default")
  }function n(r,o){
    return typeof o=="string"?o:Ds(o)
  }return Vb(t,n,null,e)
}function ge(e,t){
  if(e===!1||e===null||typeof e>"u")throw new Error(t)
}function mg(e,t){
  if(!e){
    typeof console<"u"&&console.warn(t);
    try{
      throw new Error(t)
    }catch{
      
    }
  }
}function qb(){
  return Math.random().toString(36).substr(2,8)
}function pf(e,t){
  return{
    usr:e.state,key:e.key,idx:t
  }
}function ru(e,t,n,r){
  return n===void 0&&(n=null),ri({
    pathname:typeof e=="string"?e:e.pathname,search:"",hash:""
  },typeof t=="string"?lo(t):t,{
    state:n,key:t&&t.key||r||qb()
  })
}function Ds(e){
  let{
    pathname:t="/",search:n="",hash:r=""
  }=e;
  return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t
}function lo(e){
  let t={
    
  };
  if(e){
    let n=e.indexOf("#");
    n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));
    let r=e.indexOf("?");
    r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)
  }return t
}function Vb(e,t,n,r){
  r===void 0&&(r={
    
  });
  let{
    window:o=document.defaultView,v5Compat:i=!1
  }=r,s=o.history,a=xn.Pop,l=null,u=c();
  u==null&&(u=0,s.replaceState(ri({
    
  },s.state,{
    idx:u
  }),""));
  function c(){
    return(s.state||{
      idx:null
    }).idx
  }function d(){
    a=xn.Pop;
    let x=c(),g=x==null?null:x-u;
    u=x,l&&l({
      action:a,location:y.location,delta:g
    })
  }function m(x,g){
    a=xn.Push;
    let h=ru(y.location,x,g);
    u=c()+1;
    let v=pf(h,u),k=y.createHref(h);
    try{
      s.pushState(v,"",k)
    }catch(S){
      if(S instanceof DOMException&&S.name==="DataCloneError")throw S;
      o.location.assign(k)
    }i&&l&&l({
      action:a,location:y.location,delta:1
    })
  }function f(x,g){
    a=xn.Replace;
    let h=ru(y.location,x,g);
    u=c();
    let v=pf(h,u),k=y.createHref(h);
    s.replaceState(v,"",k),i&&l&&l({
      action:a,location:y.location,delta:0
    })
  }function b(x){
    let g=o.location.origin!=="null"?o.location.origin:o.location.href,h=typeof x=="string"?x:Ds(x);
    return h=h.replace(/ $/,"%20"),ge(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)
  }let y={
    get action(){
      return a
    },get location(){
      return e(o,s)
    },listen(x){
      if(l)throw new Error("A history only accepts one active listener");
      return o.addEventListener(ff,d),l=x,()=>{
        o.removeEventListener(ff,d),l=null
      }
    },createHref(x){
      return t(o,x)
    },createURL:b,encodeLocation(x){
      let g=b(x);
      return{
        pathname:g.pathname,search:g.search,hash:g.hash
      }
    },push:m,replace:f,go(x){
      return s.go(x)
    }
  };
  return y
}var mf;
(function(e){
  e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"
})(mf||(mf={
  
}));
function Wb(e,t,n){
  return n===void 0&&(n="/"),Hb(e,t,n,!1)
}function Hb(e,t,n,r){
  let o=typeof t=="string"?lo(t):t,i=vc(o.pathname||"/",n);
  if(i==null)return null;
  let s=hg(e);
  Qb(s);
  let a=null;
  for(let l=0;
  a==null&&l<s.length;
  ++l){
    let u=ok(i);
    a=nk(s[l],u,r)
  }return a
}function hg(e,t,n,r){
  t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");
  let o=(i,s,a)=>{
    let l={
      relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i
    };
    l.relativePath.startsWith("/")&&(ge(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));
    let u=Rn([r,l.relativePath]),c=n.concat(l);
    i.children&&i.children.length>0&&(ge(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),hg(i.children,t,c,u)),!(i.path==null&&!i.index)&&t.push({
      path:u,score:ek(u,i.index),routesMeta:c
    })
  };
  return e.forEach((i,s)=>{
    var a;
    if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);
    else for(let l of gg(i.path))o(i,s,l)
  }),t
}function gg(e){
  let t=e.split("/");
  if(t.length===0)return[];
  let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");
  if(r.length===0)return o?[i,""]:[i];
  let s=gg(r.join("/")),a=[];
  return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)
}function Qb(e){
  e.sort((t,n)=>t.score!==n.score?n.score-t.score:tk(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))
}const Kb=/^:[\w-]+$/,Gb=3,Yb=2,Xb=1,Jb=10,Zb=-2,hf=e=>e==="*";
function ek(e,t){
  let n=e.split("/"),r=n.length;
  return n.some(hf)&&(r+=Zb),t&&(r+=Yb),n.filter(o=>!hf(o)).reduce((o,i)=>o+(Kb.test(i)?Gb:i===""?Xb:Jb),r)
}function tk(e,t){
  return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0
}function nk(e,t,n){
  let{
    routesMeta:r
  }=e,o={
    
  },i="/",s=[];
  for(let a=0;
  a<r.length;
  ++a){
    let l=r[a],u=a===r.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=gf({
      path:l.relativePath,caseSensitive:l.caseSensitive,end:u
    },c),m=l.route;
    if(!d&&u&&n&&!r[r.length-1].route.index&&(d=gf({
      path:l.relativePath,caseSensitive:l.caseSensitive,end:!1
    },c)),!d)return null;
    Object.assign(o,d.params),s.push({
      params:o,pathname:Rn([i,d.pathname]),pathnameBase:lk(Rn([i,d.pathnameBase])),route:m
    }),d.pathnameBase!=="/"&&(i=Rn([i,d.pathnameBase]))
  }return s
}function gf(e,t){
  typeof e=="string"&&(e={
    path:e,caseSensitive:!1,end:!0
  });
  let[n,r]=rk(e.path,e.caseSensitive,e.end),o=t.match(n);
  if(!o)return null;
  let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);
  return{
    params:r.reduce((u,c,d)=>{
      let{
        paramName:m,isOptional:f
      }=c;
      if(m==="*"){
        let y=a[d]||"";
        s=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")
      }const b=a[d];
      return f&&!b?u[m]=void 0:u[m]=(b||"").replace(/%2F/g,"/"),u
    },{
      
    }),pathname:i,pathnameBase:s,pattern:e
  }
}function rk(e,t,n){
  t===void 0&&(t=!1),n===void 0&&(n=!0),mg(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));
  let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({
    paramName:a,isOptional:l!=null
  }),l?"/?([^\\/]+)?":"/([^\\/]+)"));
  return e.endsWith("*")?(r.push({
    paramName:"*"
  }),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]
}function ok(e){
  try{
    return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")
  }catch(t){
    return mg(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e
  }
}function vc(e,t){
  if(t==="/")return e;
  if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;
  let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);
  return r&&r!=="/"?null:e.slice(n)||"/"
}function ik(e,t){
  t===void 0&&(t="/");
  let{
    pathname:n,search:r="",hash:o=""
  }=typeof e=="string"?lo(e):e;
  return{
    pathname:n?n.startsWith("/")?n:sk(n,t):t,search:uk(r),hash:ck(o)
  }
}function sk(e,t){
  let n=t.replace(/\/+$/,"").split("/");
  return e.split("/").forEach(o=>{
    o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)
  }),n.length>1?n.join("/"):"/"
}function Ga(e,t,n,r){
  return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'
}function ak(e){
  return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)
}function vg(e,t){
  let n=ak(e);
  return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)
}function yg(e,t,n,r){
  r===void 0&&(r=!1);
  let o;
  typeof e=="string"?o=lo(e):(o=ri({
    
  },e),ge(!o.pathname||!o.pathname.includes("?"),Ga("?","pathname","search",o)),ge(!o.pathname||!o.pathname.includes("#"),Ga("#","pathname","hash",o)),ge(!o.search||!o.search.includes("#"),Ga("#","search","hash",o)));
  let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;
  if(s==null)a=n;
  else{
    let d=t.length-1;
    if(!r&&s.startsWith("..")){
      let m=s.split("/");
      for(;
      m[0]==="..";
      )m.shift(),d-=1;
      o.pathname=m.join("/")
    }a=d>=0?t[d]:"/"
  }let l=ik(o,a),u=s&&s!=="/"&&s.endsWith("/"),c=(i||s===".")&&n.endsWith("/");
  return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l
}const Rn=e=>e.join("/").replace(/\/\/+/g,"/"),lk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),uk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ck=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;
function dk(e){
  return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e
}const wg=["post","put","patch","delete"];
new Set(wg);
const fk=["get",...wg];
new Set(fk);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){
  return oi=Object.assign?Object.assign.bind():function(e){
    for(var t=1;
    t<arguments.length;
    t++){
      var n=arguments[t];
      for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])
    }return e
  },oi.apply(this,arguments)
}const yc=w.createContext(null),pk=w.createContext(null),dr=w.createContext(null),ca=w.createContext(null),zn=w.createContext({
  outlet:null,matches:[],isDataRoute:!1
}),xg=w.createContext(null);
function mk(e,t){
  let{
    relative:n
  }=t===void 0?{
    
  }:t;
  hi()||ge(!1);
  let{
    basename:r,navigator:o
  }=w.useContext(dr),{
    hash:i,pathname:s,search:a
  }=kg(e,{
    relative:n
  }),l=s;
  return r!=="/"&&(l=s==="/"?r:Rn([r,s])),o.createHref({
    pathname:l,search:a,hash:i
  })
}function hi(){
  return w.useContext(ca)!=null
}function gi(){
  return hi()||ge(!1),w.useContext(ca).location
}function bg(e){
  w.useContext(dr).static||w.useLayoutEffect(e)
}function hk(){
  let{
    isDataRoute:e
  }=w.useContext(zn);
  return e?Rk():gk()
}function gk(){
  hi()||ge(!1);
  let e=w.useContext(yc),{
    basename:t,future:n,navigator:r
  }=w.useContext(dr),{
    matches:o
  }=w.useContext(zn),{
    pathname:i
  }=gi(),s=JSON.stringify(vg(o,n.v7_relativeSplatPath)),a=w.useRef(!1);
  return bg(()=>{
    a.current=!0
  }),w.useCallback(function(u,c){
    if(c===void 0&&(c={
      
    }),!a.current)return;
    if(typeof u=="number"){
      r.go(u);
      return
    }let d=yg(u,JSON.parse(s),i,c.relative==="path");
    e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Rn([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)
  },[t,r,s,i,e])
}function vk(){
  let{
    matches:e
  }=w.useContext(zn),t=e[e.length-1];
  return t?t.params:{
    
  }
}function kg(e,t){
  let{
    relative:n
  }=t===void 0?{
    
  }:t,{
    future:r
  }=w.useContext(dr),{
    matches:o
  }=w.useContext(zn),{
    pathname:i
  }=gi(),s=JSON.stringify(vg(o,r.v7_relativeSplatPath));
  return w.useMemo(()=>yg(e,JSON.parse(s),i,n==="path"),[e,s,i,n])
}function yk(e,t){
  return wk(e,t)
}function wk(e,t,n,r){
  hi()||ge(!1);
  let{
    navigator:o
  }=w.useContext(dr),{
    matches:i
  }=w.useContext(zn),s=i[i.length-1],a=s?s.params:{
    
  };
  s&&s.pathname;
  let l=s?s.pathnameBase:"/";
  s&&s.route;
  let u=gi(),c;
  if(t){
    var d;
    let x=typeof t=="string"?lo(t):t;
    l==="/"||(d=x.pathname)!=null&&d.startsWith(l)||ge(!1),c=x
  }else c=u;
  let m=c.pathname||"/",f=m;
  if(l!=="/"){
    let x=l.replace(/^\//,"").split("/");
    f="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")
  }let b=Wb(e,{
    pathname:f
  }),y=Ek(b&&b.map(x=>Object.assign({
    
  },x,{
    params:Object.assign({
      
    },a,x.params),pathname:Rn([l,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Rn([l,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])
  })),i,n,r);
  return t&&y?w.createElement(ca.Provider,{
    value:{
      location:oi({
        pathname:"/",search:"",hash:"",state:null,key:"default"
      },c),navigationType:xn.Pop
    }
  },y):y
}function xk(){
  let e=Tk(),t=dk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={
    padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"
  };
  return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{
    style:{
      fontStyle:"italic"
    }
  },t),n?w.createElement("pre",{
    style:o
  },n):null,null)
}const bk=w.createElement(xk,null);
class kk extends w.Component{
  constructor(t){
    super(t),this.state={
      location:t.location,revalidation:t.revalidation,error:t.error
    }
  }static getDerivedStateFromError(t){
    return{
      error:t
    }
  }static getDerivedStateFromProps(t,n){
    return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{
      error:t.error,location:t.location,revalidation:t.revalidation
    }:{
      error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation
    }
  }componentDidCatch(t,n){
    console.error("React Router caught the following error during render",t,n)
  }render(){
    return this.state.error!==void 0?w.createElement(zn.Provider,{
      value:this.props.routeContext
    },w.createElement(xg.Provider,{
      value:this.state.error,children:this.props.component
    })):this.props.children
  }
}function Sk(e){
  let{
    routeContext:t,match:n,children:r
  }=e,o=w.useContext(yc);
  return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(zn.Provider,{
    value:t
  },r)
}function Ek(e,t,n,r){
  var o;
  if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){
    var i;
    if(!n)return null;
    if(n.errors)e=n.matches;
    else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;
    else return null
  }let s=e,a=(o=n)==null?void 0:o.errors;
  if(a!=null){
    let c=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);
    c>=0||ge(!1),s=s.slice(0,Math.min(s.length,c+1))
  }let l=!1,u=-1;
  if(n&&r&&r.v7_partialHydration)for(let c=0;
  c<s.length;
  c++){
    let d=s[c];
    if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){
      let{
        loaderData:m,errors:f
      }=n,b=d.route.loader&&m[d.route.id]===void 0&&(!f||f[d.route.id]===void 0);
      if(d.route.lazy||b){
        l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];
        break
      }
    }
  }return s.reduceRight((c,d,m)=>{
    let f,b=!1,y=null,x=null;
    n&&(f=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||bk,l&&(u<0&&m===0?(b=!0,x=null):u===m&&(b=!0,x=d.route.hydrateFallbackElement||null)));
    let g=t.concat(s.slice(0,m+1)),h=()=>{
      let v;
      return f?v=y:b?v=x:d.route.Component?v=w.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=c,w.createElement(Sk,{
        match:d,routeContext:{
          outlet:c,matches:g,isDataRoute:n!=null
        },children:v
      })
    };
    return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?w.createElement(kk,{
      location:n.location,revalidation:n.revalidation,component:y,error:f,children:h(),routeContext:{
        outlet:null,matches:g,isDataRoute:!0
      }
    }):h()
  },null)
}var Sg=function(e){
  return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e
}(Sg||{
  
}),Is=function(e){
  return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e
}(Is||{
  
});
function Ck(e){
  let t=w.useContext(yc);
  return t||ge(!1),t
}function Pk(e){
  let t=w.useContext(pk);
  return t||ge(!1),t
}function Nk(e){
  let t=w.useContext(zn);
  return t||ge(!1),t
}function Eg(e){
  let t=Nk(),n=t.matches[t.matches.length-1];
  return n.route.id||ge(!1),n.route.id
}function Tk(){
  var e;
  let t=w.useContext(xg),n=Pk(Is.UseRouteError),r=Eg(Is.UseRouteError);
  return t!==void 0?t:(e=n.errors)==null?void 0:e[r]
}function Rk(){
  let{
    router:e
  }=Ck(Sg.UseNavigateStable),t=Eg(Is.UseNavigateStable),n=w.useRef(!1);
  return bg(()=>{
    n.current=!0
  }),w.useCallback(function(o,i){
    i===void 0&&(i={
      
    }),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,oi({
      fromRouteId:t
    },i)))
  },[e,t])
}function jk(e,t){
  e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath
}function is(e){
  ge(!1)
}function Lk(e){
  let{
    basename:t="/",children:n=null,location:r,navigationType:o=xn.Pop,navigator:i,static:s=!1,future:a
  }=e;
  hi()&&ge(!1);
  let l=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({
    basename:l,navigator:i,static:s,future:oi({
      v7_relativeSplatPath:!1
    },a)
  }),[l,a,i,s]);
  typeof r=="string"&&(r=lo(r));
  let{
    pathname:c="/",search:d="",hash:m="",state:f=null,key:b="default"
  }=r,y=w.useMemo(()=>{
    let x=vc(c,l);
    return x==null?null:{
      location:{
        pathname:x,search:d,hash:m,state:f,key:b
      },navigationType:o
    }
  },[l,c,d,m,f,b,o]);
  return y==null?null:w.createElement(dr.Provider,{
    value:u
  },w.createElement(ca.Provider,{
    children:n,value:y
  }))
}function Ak(e){
  let{
    children:t,location:n
  }=e;
  return yk(ou(t),n)
}new Promise(()=>{
  
});
function ou(e,t){
  t===void 0&&(t=[]);
  let n=[];
  return w.Children.forEach(e,(r,o)=>{
    if(!w.isValidElement(r))return;
    let i=[...t,o];
    if(r.type===w.Fragment){
      n.push.apply(n,ou(r.props.children,i));
      return
    }r.type!==is&&ge(!1),!r.props.index||!r.props.children||ge(!1);
    let s={
      id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy
    };
    r.props.children&&(s.children=ou(r.props.children,i)),n.push(s)
  }),n
}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function iu(){
  return iu=Object.assign?Object.assign.bind():function(e){
    for(var t=1;
    t<arguments.length;
    t++){
      var n=arguments[t];
      for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])
    }return e
  },iu.apply(this,arguments)
}function Ok(e,t){
  if(e==null)return{
    
  };
  var n={
    
  },r=Object.keys(e),o,i;
  for(i=0;
  i<r.length;
  i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);
  return n
}function _k(e){
  return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)
}function Mk(e,t){
  return e.button===0&&(!t||t==="_self")&&!_k(e)
}const Dk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ik="6";
try{
  window.__reactRouterVersion=Ik
}catch{
  
}const Fk="startTransition",vf=$f[Fk];
function zk(e){
  let{
    basename:t,children:n,future:r,window:o
  }=e,i=w.useRef();
  i.current==null&&(i.current=Ub({
    window:o,v5Compat:!0
  }));
  let s=i.current,[a,l]=w.useState({
    action:s.action,location:s.location
  }),{
    v7_startTransition:u
  }=r||{
    
  },c=w.useCallback(d=>{
    u&&vf?vf(()=>l(d)):l(d)
  },[l,u]);
  return w.useLayoutEffect(()=>s.listen(c),[s,c]),w.useEffect(()=>jk(r),[r]),w.createElement(Lk,{
    basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r
  })
}const $k=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Bk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wc=w.forwardRef(function(t,n){
  let{
    onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:l,to:u,preventScrollReset:c,viewTransition:d
  }=t,m=Ok(t,Dk),{
    basename:f
  }=w.useContext(dr),b,y=!1;
  if(typeof u=="string"&&Bk.test(u)&&(b=u,$k))try{
    let v=new URL(window.location.href),k=u.startsWith("//")?new URL(v.protocol+u):new URL(u),S=vc(k.pathname,f);
    k.origin===v.origin&&S!=null?u=S+k.search+k.hash:y=!0
  }catch{
    
  }let x=mk(u,{
    relative:o
  }),g=Uk(u,{
    replace:s,state:a,target:l,preventScrollReset:c,relative:o,viewTransition:d
  });
  function h(v){
    r&&r(v),v.defaultPrevented||g(v)
  }return w.createElement("a",iu({
    
  },m,{
    href:b||x,onClick:y||i?r:h,ref:n,target:l
  }))
});
var yf;
(function(e){
  e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"
})(yf||(yf={
  
}));
var wf;
(function(e){
  e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"
})(wf||(wf={
  
}));
function Uk(e,t){
  let{
    target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:a
  }=t===void 0?{
    
  }:t,l=hk(),u=gi(),c=kg(e,{
    relative:s
  });
  return w.useCallback(d=>{
    if(Mk(d,n)){
      d.preventDefault();
      let m=r!==void 0?r:Ds(u)===Ds(c);
      l(e,{
        replace:m,state:o,preventScrollReset:i,relative:s,viewTransition:a
      })
    }
  },[u,l,c,r,o,n,e,i,s,a])
}const qk={nav:{about:"About",work:"Work",contact:"Contact"},hero:{title:"I’m Edouard, I lead UX-driven product initiatives end-to-end.",subtitle:"Shaping complex products through UX leadership from discovery to launch. Ensuring teams move together from discovery, through delivery, to impact by fostering alignment between design, product and engineering teams."},buttons:{linkedin:"LinkedIn",message:"Message",cv:"CV"},sections:{selectedWork:"Selected work",experience:"Experience"},cta:{heading:"Interested in working together?"},footer:{copyright:"Edouard Choudin"},cases:{purcari:{title:"Sport experience setup wizard",description:"Creation of a step-by-step configuration assistant for travel partners to add their sport experience to Decathlon Travel's marketplace.",tags:["B2B SaaS","Onboarding","User Research","Cross-discipline"],location:"Decathlon"},lectra:{title:"B2C marketplace optimisation",description:"Feature additions and redesigns on Decathlon Travel's B2C marketplace and desing system reskin.",tags:["Mobile-first","User Research","Design System","Product Redesign"],location:"Decathlon"},finoptima:{title:"Cloaking feature on Stellaris",description:"Design-to-Factory collaboration platform — turning fragmented communication and sample approvals into a structured, traceable production workflow.",tags:["Desktop Video Game","Complex Workflows","Cross-discipline","Gaming"],location:"Paradox Interactive"},dooblo:{title:"Onboarding & tutorials on Stellaris",description:"Overhaul of the onboarding/tutorials on Stellaris to reduce churn rate and help players learn more efficiently.",tags:["Desktop Video Game","Onboarding","Information Hierarchy","Cross-discipline","Gaming"],location:"Paradox Interactive"},placeholder:{title:"Selected Visual Work",description:"A series of visual and interface projects designed and crafted by me — exploring composition, typography, and digital aesthetics.",tags:["Visual Design","UI Design","Art Direction","Digital Posters","Brand Explorations"]}},experience:[{years:"2026 — Present",role:"EC Design - Product Designer Freelance",company:"I help teams design clear, efficient digital products by combining UX/UI expertise with strong product thinking, working end-to-end, from discovery and user research to delivery."},{years:"2023 — 2025",role:"Decathlon - Digital Product Designer",company:"Leading the design efforts for the Decathlon Travel, focusing on optimizing user experience, navigation and interaction patterns. Managing end-to-end projects on a B2B SaaS and mobile-first B2C marketplace."},{years:"2022 — 2023",role:"Paradox Development Studio - UX/UI Designer",company:"Easing the learning curve of players on a complex 4X strategy game, while making UI interactions feel intuitive and informative. Defining & applying the UX vision on new or reworked features."},{years:"2017 — 2020",role:"Supair - Digital Project Manager",company:"Led the revamp of a B2B e-commerce website and B2C website to enhance brand visibility and boost online sales."}],caseStudy:{notFound:"Case study not found",backToHome:"Back",sections:{context:"Context",problem:"Problem",solution:"Solution",screenshots:"Screenshots & Visuals",focusAreas:"Focus Areas",userImpact:"User Impact",businessImpact:"Business Impact",takeaway:"Takeaway",reflection:"Personal Reflection",whyMatters:"Why this case matters",myRole:"My Role",transformations:"Problem → Solution"},placeholders:{hero:"Hero visual — add project screenshot or contextual image",mainInterface:"Main interface screenshot",detail1:"Detail view or flow step 1",detail2:"Detail view or flow step 2",additional:"Additional screenshot or diagram",visualFor:"Visual for:"},purcari:{title:"Digital platform for winery operations",subtitle:"B2E · Operational SaaS",context:"There is a digital platform that helps winemakers create work orders, share them with workers, and track execution in real time. Winemakers work on desktop, workers use tablets on the production floor.",myRole:"Senior Product Designer responsible for process modeling, workflow design, interaction principles, and cross-role system behavior.",problem:"During harvest, winemakers had to decide every day what to do with incoming grapes, explain actions outside the system, and then manually record results in Excel. This took a lot of time and led to frequent human errors.",solution:"Crushing & Pressing was redesigned as a clear, step-by-step workflow. Decisions are selected upfront, data is filled in automatically, and work orders are updated in real time—reducing manual work, Excel usage, and the risk of errors during harvest.",transformations:[{problem:"High-risk decisions that cannot be undone",solution:"The system helps prevent mistakes by guiding key decisions upfront."},{problem:"Process depended on personal experience",solution:"Expert knowledge was made visible through a clear visual workflow."},{problem:"Too much mental effort during busy harvest days",solution:"Manual coordination and Excel were replaced with a guided flow."},{problem:"Work and reporting were disconnected",solution:"Planning, execution, and data capture were combined in one process."},{problem:"The process existed only in people's heads or on paper",solution:"Hand-drawn sketches became a simple, editable digital scheme."}],narrativeTitle:"Digital platform for winery operations — Designing clarity for winemaking, where mistakes age for years",narrative:[{title:"Paper trails in a modern cellar",paragraphs:["When I first engaged with Purcari's production environment, I stepped into a highly coordinated, living system. The winery operates with modern equipment, advanced fermentation controls, and experienced winemakers making time-sensitive decisions every day across multiple facilities.","At the same time, many critical production records and handovers were still supported by paper notes, clipboards, and Excel spreadsheets maintained alongside daily operations. In a process that is sequential, interdependent, and irreversible, this meant that information was often fragmented and updated under pressure rather than in real time.","Together with the leadership team, our shared goal became clear: to modernize the production process in a way that respects existing expertise, reduces exposure to human error, and gives teams reliable, real-time visibility into what is happening on the floor."],screenshot:{aspectRatio:"wide",label:"When I first engaged with Purcari's production environment, I stepped into a highly coordinated, living system. The winery operates with modern equipment, advanced fermentation controls, and experienced winemakers making time-sensitive decisions every day across multiple facilities. At the same time, many critical production records and handovers were still supported by paper notes, clipboards, and Excel spreadsheets maintained alongside daily operations. In a process that is sequential, interdependent, and irreversible, this meant that information was often fragmented and updated under pressure rather than in real time. Together with the leadership team, our shared goal became clear: to modernize the production process in a way that respects existing expertise, reduces exposure to human error, and gives teams reliable, real-time visibility into what is happening on the floor."}},{title:"Shadowing winemakers on site",paragraphs:["I spent three weeks embedded with the production team, observing their daily rhythms. Winemakers checked fermentation temperatures at dawn, recorded pump-over times between meetings, and made critical blending decisions based on years of sensory experience.","What became clear was that their expertise wasn't the problem — their tools were failing them. A cellar master might know exactly when a batch needs intervention, but if that knowledge lives only in his head or on a sticky note, it can't scale. It can't be audited. It can't survive staff changes.","The most senior winemaker told me: 'I know this wine. I can smell when it's ready. But the auditors don't care what I smell — they want timestamps.'"],screenshot:{aspectRatio:"video",label:"Winemaker workflow observation notes and insights"}},{title:"Mistakes don't fail fast — they age",paragraphs:["In software, we talk about failing fast. Ship early, get feedback, iterate. But winemaking operates on a different timeline entirely.","A fermentation decision made in September won't reveal its consequences until the wine is bottled months later — or sometimes years, when a customer opens a bottle that should have been perfect. By then, the batch is sold, the vintage is history, and the mistake has literally aged into the product.","This temporal disconnect shaped everything about our design approach. We couldn't rely on quick iteration cycles. Every interface decision had to account for the fact that the consequences of errors might not surface for months."]},{title:"The Crushing & Pressing process",paragraphs:["We started with the most time-sensitive operation: crushing and pressing. This is where freshly harvested grapes are transformed into must — the raw material for wine. The window is hours, not days.","The existing process required workers to log each bin of grapes manually: origin, weight, variety, destination tank. During peak harvest, with trucks arriving continuously and multiple pressing lines running, logs were often incomplete or delayed.","We designed a checkpoint-based interface that surfaces the critical decisions: Is this bin from the expected vineyard? Is the destination tank prepared? Has the winemaker approved this variety blend? Each checkpoint creates an auditable record without adding friction to the physical workflow."],screenshots:[{aspectRatio:"video",label:"Crushing & Pressing interface — batch intake flow"},{aspectRatio:"video",label:"Mobile checkpoint confirmation screen"}]},{title:"Iterative design and validation",paragraphs:["We tested prototypes directly in the cellar. Not in a conference room with stakeholders, but next to the fermentation tanks, with workers wearing gloves and checking their phones between pump-overs.","The first version was too complex. Winemakers wanted to log everything — every observation, every adjustment, every sensory note. But that created cognitive overhead that slowed them down during critical moments.","The breakthrough came when we separated 'operational logs' from 'quality notes.' The system captures the minimum required for traceability automatically. Winemakers can add rich observations when they have time, but the compliance backbone doesn't depend on it."],screenshot:{aspectRatio:"video",label:"Evolution of the interface through three design iterations"}},{title:"Designing for people, not just processes",paragraphs:["The final system reflects something I learned during those weeks in the cellar: winemaking is deeply personal. These aren't factory workers executing procedures — they're craftspeople making judgment calls that shape a product carrying the winery's reputation.","The interface respects that expertise. It doesn't prescribe how to make wine. It creates structure around the decisions that matter for traceability and compliance, while staying out of the way of the art.","Seasonal workers — who might work only a few weeks during harvest — can use the core logging features with zero training. Senior winemakers have access to the full history and analytics they need for long-term quality decisions."],screenshot:{aspectRatio:"video",label:"Role-based interface comparison: seasonal worker vs. cellar master"}},{title:"Outcomes",paragraphs:["Within six months of deployment, Purcari achieved 100% batch traceability for the first time in their history. Compliance audit preparation dropped from weeks to hours. Three potential quality incidents were caught during fermentation — issues that would have gone unnoticed in the paper-based system.","But the outcome I'm most proud of isn't a metric. It's that the winemakers actually use the system. Not because they're required to, but because it makes their work easier. The cellar master who told me about auditors and smells? He now reviews fermentation trends on his phone before making blending decisions."]},{title:"Personal takeaway",paragraphs:["This project taught me that operational design isn't about digitizing existing workflows — it's about understanding the deep constraints of a domain and finding the minimal intervention that unlocks significant value.","In winemaking, the constraint is time: irreversible decisions, delayed feedback, seasonal rhythms. The design had to work within that reality, not against it. The interface isn't separate from the process — it becomes part of how wine is made."]}],focusAreas:[{title:"Designing for irreversibility",description:"Unlike software where you can iterate quickly, winemaking mistakes age for months before they're discovered. This shaped every interface decision — from confirmation patterns to how we surfaced historical context at critical decision points."},{title:"Bridging expertise and traceability",description:"Senior winemakers rely on intuition built over decades. The challenge was creating structure for compliance and auditability without undermining their expertise. The interface captures the minimum required for traceability while staying out of the way of the craft."},{title:"Multi-role, multi-device system",description:"Winemakers work on desktop with full analytics, while floor workers use tablets during physical tasks. Each interface was designed for its context — detailed decision-making vs. quick data capture under time pressure."}],userImpact:["System guidance with predefined processes and protocols","Visual workflow that mirrors how winemakers think and sketch the process","In-context additive management within the process flow","Automatic data transfer to registries, no end-of-day manual entry"],businessImpact:["Fewer human errors during critical production stages","Faster daily execution during harvest","More consistent and traceable production data","Lower operational risk through standardized workflows"],takeaway:"In operational systems, the interface isn't separate from the process — it becomes the process. Design decisions directly affect whether critical actions happen correctly and on time.",reflection:"This project taught me that operational design isn't about digitizing existing workflows — it's about understanding the deep constraints of a domain and finding the minimal intervention that unlocks significant value. The interface had to work within winemaking's reality of irreversible decisions and delayed feedback, not against it.",whyMatters:"This project demonstrates designing operational systems where UX decisions directly affect real-world execution, risk, and production outcomes — not just usability metrics."},dooblo:{title:"Talent First",subtitle:"Global B2B SaaS · Data UX",context:"This project focused on an enterprise market research platform with a large and mature feature set.\n\nThe product originally existed as a desktop application and was difficult to learn and use. Most users relied on training and internal experts, as very little of the system was intuitive.\n\nThe business goal was to make this powerful product accessible, scalable, and suitable for SaaS, without losing its core functionality.",myRole:"Senior Product Designer responsible for process modeling, workflow design, interaction principles, and cross-role system behavior.\n\nLed the UX transformation of a complex enterprise product, moving it from legacy workflows to a scalable SaaS foundation.",problem:"As the product grew, its complexity became a serious problem.\n\nResearchers had to:\n• Work with fragmented and hard-to-understand configurations\n• Rely on personal experience to avoid mistakes\n• Find errors late, often after studies were already live\n\nThis led to long onboarding, high mental load, and costly mistakes.",solution:"The core workflows were redesigned as clear, step-by-step SaaS flows.\n\nComplex logic and settings were made visible and easier to understand. Key decisions are made upfront, dependencies are clear, and built-in validation helps prevent errors — making the product easier to learn, safer to use, and ready to scale as a SaaS platform.",transformations:[],focusAreas:[{title:"Logic visualization system",description:"Developed a layered approach: simple conditions edit inline, complex logic reveals in a dedicated builder, and the full survey flow renders as a navigable diagram. Power users access everything; casual users see what they need."},{title:"QBank architecture",description:"Redesigned the question library to support inheritance and variants. Master questions propagate changes to all instances while allowing local overrides — reducing duplication without limiting flexibility."}],userImpact:["Survey setup time reduced by 40%","Logic errors caught before deployment increased 3x","Support tickets dropped 50% post-launch"],businessImpact:["Enterprise client retention improved","Enabled self-service for mid-market segment","Design system reduced development time for new features"],takeaway:"Progressive disclosure isn't about hiding complexity — it's about revealing it at the right moment. Expert tools should feel simple until users need the power.",reflection:"",whyMatters:""},finoptima:{title:"FinOptima — AI-driven fraud detection platform for financial institutions",subtitle:"USA · Fintech · Cybersecurity · B2B SaaS · Risk Intelligence",context:"Financial institutions face growing synthetic identity fraud while relying on fragmented verification tools and opaque risk signals.\n\nFraud detection operated as a separate security layer rather than an embedded operational decision system.",myRole:"Senior Product Designer responsible for MVP workflow architecture, risk-decision UX, AI explainability patterns, and cross-team alignment between product, AI, and compliance.",problem:"Risk signals arrived from disconnected sources, investigations were manual, and decisions depended heavily on analyst intuition.\n\nLimited traceability slowed approvals, increased exposure, and created inconsistent outcomes.",solution:"The MVP introduced a unified, explainable risk-decision workflow that aggregates AI signals, guides analyst investigations, and creates auditable outcomes in real time.\n\nThis established the operational foundation for today's production fraud-detection platform.",transformations:[],mvpWorkflow:{intro:"The MVP was structured around three operational screens:",screens:[{number:"1",title:"Monitoring dashboard",description:"Real-time overview of applications, statuses, and risk progression, designed for rapid triage and prioritization."},{number:"2",title:"Risk profile & investigation view",description:"Centralized identity data, anomaly signals, and recommended actions combined into a single explainable analyst decision surface."},{number:"3",title:"Verification evidence layer",description:"Document authenticity, biometric checks, and database validation supporting confident approval or escalation."}],outro:"Together, these formed the minimal viable decision system required for safe real-world deployment."},focusAreas:[],userImpact:["Clear, explainable risk at decision points","Faster investigations","Reduced analyst cognitive load","Consistent decision logic across teams"],businessImpact:["Earlier fraud detection","Reduced financial exposure","Faster secure onboarding","Compliance-ready auditability","The MVP became the foundation of the current production platform."],takeaway:"",reflection:"This project reinforced that AI products are not about models — they are about decisions. The challenge was defining the minimal operational system capable of safe real-world use, not just demonstrating technology.\n\nIn risk-critical systems, UX determines whether intelligence becomes real-world protection.",whyMatters:"AI products are not about models — they are about decisions. The challenge was defining the minimal operational system capable of safe real-world use, not just demonstrating technology."},lectra:{title:"Design-to-Factory Collaborative Platform",subtitle:"France · Fashion Tech · B2B / B2E SaaS",context:"Fashion brands manage collections across designers, suppliers, and factories. Communication happens through email threads, PDFs, spreadsheets, and disconnected 3D or tech-pack files. Sample development, approvals, and cost updates are handled across multiple tools without a shared operational layer.",myRole:"Senior Product Designer responsible for platform architecture, cross-functional workflow design, factory–designer communication systems, and operational visibility across collection development.",problem:"Design feedback, material confirmations, and sample iterations were fragmented and difficult to track. Deadlines were managed manually, version history was unclear, and factories lacked structured visibility into priorities. Delays and misunderstandings increased operational risk and slowed production cycles.",solution:"The platform introduced a unified design-to-factory workspace that centralizes 3D reviews, material validation, sample tracking, and deadline monitoring. Structured activity logs, status visibility, and traceable approvals transformed fragmented communication into a transparent, deadline-driven production system.",transformations:[{problem:"Unstructured feedback across tools",solution:"Centralized 3D review with contextual comments and version traceability"},{problem:"Deadlines managed manually",solution:"Real-time delivery status: On Time / At Risk / Delayed"},{problem:"Factories waiting for answers without visibility",solution:"Action-based dashboard with Pending Approvals and Required Responses"},{problem:"Version confusion between samples",solution:"Clear stage labeling: Prototype → Sample 01 → Sample 02 → Pre-Production"},{problem:"Communication disconnected from execution",solution:"Activity log combining design decisions, confirmations, and production signals"}],focusAreas:[],userImpact:["Clear visibility into what requires action","Structured feedback instead of scattered emails","Faster decision loops between designers and factories","Reduced ambiguity around sample stages","Transparent deadline tracking"],businessImpact:["Fewer production delays","Reduced miscommunication costs","Improved sample cycle speed","Better supplier accountability","Traceable development history per product"],takeaway:"",reflection:"This project reinforced that collaboration design is not about messaging — it's about operational clarity.\n\nThe real challenge wasn't building a communication interface. It was designing a system where every comment, approval, and deadline becomes part of a structured production flow.\n\nThe platform transforms creative iteration and factory execution into one shared operational language.",whyMatters:"This project demonstrates designing cross-organizational operational systems where UX decisions directly affect production timing, cost control, and accountability — not just usability metrics.",sampleWorkflow:{intro:"The platform supports the full sample development cycle — from initial design iteration to production confirmation. Depending on the stage (Prototype, Sample 01, Sample 02, Pre-Production), the level of validation changes: design feedback, material confirmation, feasibility checks, cost updates, and deadline validation.",research:"To design this properly, it was necessary to deeply understand how sample development unfolds in reality — across emails, shared folders, supplier confirmations, and last-minute changes. This required mapping: who initiates decisions, who validates them, where delays typically occur, how factories signal risk, and how designers track iteration status.\n\nBefore digitalization, much of this logic existed in inboxes and informal conversations. Deadlines were tracked manually. Version history was unclear. Factories often waited for answers without visibility.",outcome:"These observations directly shaped the platform's structure: 3D annotation tied to specific iterations, structured activity logs, clear sample stages, deadline-based risk indicators, and a centralized message center by collection.\n\nThe workflow was intentionally designed to reflect how teams already reason about development — by product, by sample stage, and by urgency — turning informal coordination into an operational system.",screens:[{number:"01",title:"3D Review & Annotation",description:"Centralized 3D view with contextual comments tied to specific product areas. Each annotation tracks status (Under Review, Resolved), replies, and visual references — replacing scattered email feedback with structured, version-linked design reviews."},{number:"02",title:"Collection Message Center",description:"Filterable product list organized by collection and season. Each item shows dossier number, category, supplier, sample stage, due date, and real-time delivery status (On Time, At Risk, Delayed) — giving teams structured visibility across the full development pipeline."},{number:"03",title:"Factory Action Dashboard",description:"Operational overview surfacing collection progress, pending approvals, at-risk items, and overdue tasks. Designed for factories to see exactly what requires action — reducing wait times and improving response accountability."}]}}}},xf=globalThis,Cg=xf.__kp_language_context__??(xf.__kp_language_context__=w.createContext(void 0)),Wk={en:qk},Hk=({
  children:e
})=>{
  const[t,n]=w.useState("en"),r=Wk[t];
  return p.jsx(Cg.Provider,{
    value:{
      language:t,setLanguage:n,t:r
    },children:e
  })
},vi=()=>{
  const e=w.useContext(Cg);
  if(!e)throw new Error("useLanguage must be used within a LanguageProvider");
  return e
},Qk=()=>{
  const e=w.useRef(null),t=w.useRef([]),n=w.useRef(),r=w.useRef(0),[o,i]=w.useState({
    x:0,y:0
  }),[s,a]=w.useState(!1);
  return w.useEffect(()=>{
    const l=e.current;
    if(!l)return;
    const u=l.getContext("2d");
    if(!u)return;
    const c=()=>{
      l.width=window.innerWidth,l.height=window.innerHeight
    };
    c(),window.addEventListener("resize",c);
    const d=y=>{
      i({
        x:y.clientX,y:y.clientY
      }),a(!0),r.current=Date.now(),t.current.push({
        x:y.clientX,y:y.clientY,age:0
      }),t.current.length>50&&(t.current=t.current.slice(-50))
    },m=()=>{
      a(!1)
    },f=()=>{
      a(!0)
    };
    document.addEventListener("mousemove",d),document.addEventListener("mouseleave",m),document.addEventListener("mouseenter",f);
    const b=()=>{
      u.clearRect(0,0,l.width,l.height);
      const h=Date.now()-r.current<100?350:200;
      t.current=t.current.map(k=>({
        ...k,age:k.age+16
      })).filter(k=>k.age<h);
      const v=t.current;
      if(v.length>2){
        const k=v.length;
        u.beginPath(),u.moveTo(v[0].x,v[0].y);
        for(let L=1;
        L<k-1;
        L++){
          const A=v[L],F=v[L+1],M=(A.x+F.x)/2,q=(A.y+F.y)/2;
          u.quadraticCurveTo(A.x,A.y,M,q)
        }if(k>=2){
          const L=v[k-1];
          u.lineTo(L.x,L.y)
        }const S=v[0],E=v[k-1],C=u.createLinearGradient(S.x,S.y,E.x,E.y);
        C.addColorStop(0,"rgba(246, 119, 0, 0)"),C.addColorStop(.5,"rgba(246, 119, 0, 0.15)"),C.addColorStop(.8,"rgba(246, 119, 0, 0.35)"),C.addColorStop(1,"rgba(246, 119, 0, 0.6)"),u.strokeStyle=C,u.lineWidth=6,u.lineCap="round",u.lineJoin="round",u.stroke(),u.beginPath(),u.moveTo(v[0].x,v[0].y);
        for(let L=1;
        L<k-1;
        L++){
          const A=v[L],F=v[L+1],M=(A.x+F.x)/2,q=(A.y+F.y)/2;
          u.quadraticCurveTo(A.x,A.y,M,q)
        }if(k>=2){
          const L=v[k-1];
          u.lineTo(L.x,L.y)
        }const R=u.createLinearGradient(S.x,S.y,E.x,E.y);
        R.addColorStop(0,"rgba(246, 119, 0, 0)"),R.addColorStop(.6,"rgba(246, 119, 0, 0.1)"),R.addColorStop(1,"rgba(246, 119, 0, 0.5)"),u.strokeStyle=R,u.lineWidth=2,u.stroke()
      }n.current=requestAnimationFrame(b)
    };
    return b(),()=>{
      window.removeEventListener("resize",c),document.removeEventListener("mousemove",d),document.removeEventListener("mouseleave",m),document.removeEventListener("mouseenter",f),n.current&&cancelAnimationFrame(n.current)
    }
  },[]),null
},Kk=({
  title:e,description:t,tags:n,slug:r,image:o,location:i,isLocked:s=!1,imageContain:a=!1
})=>{
  const l=s?"div":wc,u=s?{
    className:"card-case group block cursor-default h-full"
  }:{
    to:`/case/${r}`,className:"card-case group block h-full"
  };
  return p.jsx(l,{
    ...u,children:p.jsxs("div",{
      className:"flex flex-col h-full relative",children:[s&&p.jsxs("div",{
        className:"absolute inset-0 bg-background/60 backdrop-blur-[2px] rounded-[0.75rem] z-10 flex flex-col items-center justify-center gap-2",children:[p.jsx(hw,{
          className:"w-6 h-6 text-muted-foreground/60"
        }),p.jsx("span",{
          className:"text-xs font-mono uppercase tracking-wider text-muted-foreground/60",children:"Under construction"
        })]
      }),p.jsxs("div",{
        className:"flex flex-col gap-3 flex-grow",children:[p.jsxs("div",{
          className:"flex items-start justify-between gap-4",children:[p.jsxs("div",{
            className:"flex flex-col gap-1",children:[p.jsx("h3",{
              className:"heading-section card-case-title transition-all duration-300",children:e
            }),i&&p.jsxs("span",{
              className:"flex items-center gap-1.5 text-[11px] text-muted-foreground/70 font-mono uppercase tracking-wider",children:[p.jsx(xh,{
                className:"w-3 h-3"
              }),i]
            })]
          }),!s&&p.jsx(dw,{
            className:"w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-accent-warm transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0"
          })]
        }),p.jsx("div",{
          className:"flex flex-wrap gap-1.5",children:n.map(c=>p.jsx("span",{
            className:`tag-pill text-[11px] transition-colors duration-300 ${s?"":"group-hover:bg-accent-warm group-hover:text-white"}`,children:c
          },c))
        }),p.jsx("p",{
          className:"body-small text-muted-foreground line-clamp-3",children:t
        })]
      }),p.jsx("div",{
        className:"mt-3 overflow-hidden rounded-[0.75rem] h-[180px] md:h-[220px]",children:o?p.jsx("img",{
          src:o,alt:e,className:`w-full h-full ${a?"object-contain":"object-cover"} ${s?"":"transition-transform duration-300 group-hover:scale-[1.02]"}`
        }):p.jsx("div",{
          className:"w-full h-full bg-muted rounded-[0.75rem]"
        })
      })]
    })
  })
},Gk=({
  years:e,role:t,company:n,description:r,isFirst:o=!1
})=>{
  const i=e!==""&&!o;
  return p.jsxs("div",{
    className:`grid grid-cols-12 gap-4 ${e?"py-6":"pb-6"} ${i?"border-t border-border":""}`,children:[p.jsx("div",{
      className:"col-span-12 md:col-span-3",children:p.jsx("span",{
        className:"body-small font-medium",children:e
      })
    }),p.jsx("div",{
      className:"col-span-12 md:col-span-9",children:p.jsxs("div",{
        className:"flex flex-col gap-1",children:[p.jsx("span",{
          className:"body-base font-medium",children:t
        }),p.jsx("span",{
          className:"body-small",children:n
        }),r&&p.jsx("p",{
          className:"body-small mt-2",children:r
        })]
      })
    })]
  })
},Yk=()=>{const SHOW_LANG_SWITCHER=false;const{language:e,setLanguage:t}=vi();if(!SHOW_LANG_SWITCHER)return null;return p.jsxs("div",{className:"flex items-center gap-1 text-sm",children:[p.jsx("button",{onClick:()=>t("en"),className:`px-2 py-1 rounded transition-colors ${e==="en"?"text-foreground font-medium":"text-muted-foreground hover:text-accent-warm"}`,children:"EN"}),p.jsx("span",{className:"text-muted-foreground/50",children:"/"}),p.jsx("button",{onClick:()=>t("fr"),className:`px-2 py-1 rounded transition-colors ${e==="fr"?"text-foreground font-medium":"text-muted-foreground hover:text-accent-warm"}`,children:"FR"})]})},Xk=()=>{
  const{
    t:e
  }=vi();
  return p.jsx("header",{
    className:"fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50",children:p.jsx("div",{
      className:"container-content",children:p.jsxs("nav",{
        className:"flex items-center justify-between h-12",children:[p.jsx(wc,{
          to:"/","aria-label":"Home",onClick:t=>{window.location.pathname==="/"&&(t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))},children:p.jsx("img",{src:"data:image/png;base64,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",alt:"EC",style:{width:"24px",height:"24px",borderRadius:"50%",display:"block"}}),onClick:t=>{
            window.location.pathname==="/"&&(t.preventDefault(),window.scrollTo({
              top:0,behavior:"smooth"
            }))
          }
        }),p.jsxs("div",{
          className:"flex items-center gap-3 md:gap-8",children:[p.jsx("a",{
            href:"#about",className:"text-sm text-muted-foreground hover:text-accent-warm transition-colors",children:e.nav.about
          }),p.jsx("a",{
            href:"#work",className:"text-sm text-muted-foreground hover:text-accent-warm transition-colors",children:e.nav.work
          }),p.jsx("a",{
            href:"#contact",className:"text-sm text-muted-foreground hover:text-accent-warm transition-colors",children:e.nav.contact
          }),p.jsxs("a",{
            href:"/CV_Edouard_Choudin.pdf",className:"flex items-center text-sm text-muted-foreground hover:text-accent-warm transition-colors",children:[p.jsx(fw,{
              className:"w-3.5 h-3.5 mr-1"
            }),e.buttons.cv]
          }),p.jsx(Yk,{
            
          })]
        })]
      })
    })
  })
},Jk=(e=.3)=>{
  const[t,n]=w.useState(0);
  return w.useEffect(()=>{
    const r=()=>{
      n(window.scrollY*e)
    };
    return window.addEventListener("scroll",r,{
      passive:!0
    }),()=>window.removeEventListener("scroll",r)
  },[e]),t
},Pg="/assets/Decathlon.png",Zk="/assets/footer-bg-Dnjp0JU9.png",eS="/assets/finoptima-card-CC-Lvjwg.png",tS="/assets/lectra-card-BWGKLK3J.png",nS=["purcari","lectra","finoptima","dooblo","placeholder"],rS={
  purcari:"digital-platform-for-winery-operations",dooblo:"dooblo",finoptima:"finoptima",lectra:"design-to-factory-collaborative-platform"
},oS={
  purcari:Pg,finoptima:eS,lectra:tS
},iS=()=>{
  const e=Jk(.15),{
    t
  }=vi();
  return p.jsxs(p.Fragment,{
    children:[p.jsx(Xk,{
      
    }),p.jsxs("main",{
      className:"min-h-screen pt-12 md:pt-16",children:[p.jsx("section",{
        id:"about",className:"py-6 md:py-8 bg-inherit",children:p.jsx("div",{
          className:"container-content",children:p.jsxs("div",{
            className:"animate-fade-in-up w-full",style:{
              transform:`translateY(${e}px)`
            },children:[
            p.jsxs("div",{
              className:"flex flex-row items-center gap-6 mb-6 md:mb-8",children:[
              p.jsx("img",{
                src:"data:image/png;base64,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",
                alt:"Edouard Choudin",
                className:"flex-shrink-0",
                style:{width:"clamp(72px,10vw,120px)",height:"clamp(72px,10vw,120px)",borderRadius:"50%",objectFit:"cover"}
              }),
              p.jsx("h1",{
                className:"heading-display font-serif cursor-default",children:t.hero.title
              })]
            }),
            p.jsx("p",{
              className:"body-large mb-8 md:mb-10 cursor-default",children:t.hero.subtitle
            }),
            p.jsxs("div",{
              id:"contact",className:"flex flex-col sm:flex-row gap-3",children:[p.jsxs("a",{
                href:"https://www.linkedin.com/in/edouardchoudin",target:"_blank",rel:"noopener noreferrer",className:"btn-outline group",children:[p.jsx(mw,{
                  className:"w-4 h-4 mr-2 group-hover:text-background transition-colors"
                }),t.buttons.linkedin]
              }),p.jsxs("a",{
                href:"mailto:edouard.choudin@gmail.com",className:"btn-outline group",children:[p.jsx(Kl,{
                  className:"w-4 h-4 mr-2 group-hover:text-background transition-colors"
                }),t.buttons.message]
              }),p.jsxs("a",{
                href:"/CV_Edouard_Choudin.pdf",target:"_blank",rel:"noopener noreferrer",className:"btn-outline group",children:[p.jsx(fw,{
                  className:"w-4 h-4 mr-2 group-hover:text-background transition-colors"
                }),t.buttons.cv]
              })]
            })]
          })
        })
      }),p.jsxs("section",{
        id:"work",className:"py-6 md:py-8",children:[p.jsx("div",{
          className:"container-content",children:p.jsx("span",{
            className:"label-caps block mb-4",children:t.sections.selectedWork
          })
        }),p.jsx("div",{
          className:"container-content",children:p.jsx("div",{
            className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5",children:nS.map((n,r)=>{
              const o=t.cases[n];
              return o?p.jsx("div",{
                className:"animate-fade-in-up",style:{
                  animationDelay:`${r*.1}s`
                },children:p.jsx(Kk,{
                  title:o.title,description:o.description,tags:o.tags,slug:rS[n]||n,image:oS[n],location:"location"in o?o.location:void 0,isLocked:n==="dooblo"||n==="placeholder"
                })
              },n):null
            })
          })
        })]
      }),p.jsx("section",{
        className:"py-12 md:py-16 border-t border-border",children:p.jsxs("div",{
          className:"container-content",children:[p.jsx("span",{
            className:"label-caps block mb-8",children:t.sections.experience
          }),p.jsx("div",{
            className:"animate-fade-in",children:t.experience.map((n,r)=>p.jsx(Gk,{
              ...n,isFirst:r===0
            },r))
          })]
        })
      }),p.jsx("section",{
        className:"py-16 md:py-24 border-t border-border",children:p.jsxs("div",{
          className:"container-content text-center",children:[p.jsx("h2",{
            className:"text-xl md:text-2xl font-serif text-muted-foreground mb-6",children:t.cta.heading
          }),p.jsxs("a",{
            href:"mailto:edouard.choudin@gmail.com",className:"btn-outline group inline-flex",children:[p.jsx(Kl,{
              className:"w-4 h-4 mr-2 group-hover:text-background transition-colors"
            }),t.buttons.message]
          })]
        })
      }),p.jsx("footer",{
        className:"py-8 border-t border-border bg-cover bg-center bg-no-repeat",style:{
          backgroundImage:`url(${Zk})`
        },children:p.jsx("div",{
          className:"container-content",children:p.jsxs("p",{
            className:"body-small text-center",children:["© ",new Date().getFullYear()," ",t.footer.copyright]
          })
        })
      })]
    })]
  })
},Ya=()=>{
  const{
    t:e
  }=vi();
  return p.jsxs(wc,{
    to:"/",className:"inline-flex items-center gap-2 body-small text-muted-foreground hover:text-accent-warm transition-colors duration-300 group",children:[p.jsx(cw,{
      className:"w-4 h-4 transition-all duration-300 group-hover:-translate-x-1 group-hover:text-accent-warm"
    }),p.jsx("span",{
      children:e.caseStudy.backToHome
    })]
  })
},sS={
  video:"aspect-video",square:"aspect-square",wide:"aspect-[21/9]",tall:"aspect-[3/4]"
},ss=({
  aspectRatio:e="video",label:t="Screenshot placeholder",className:n=""
})=>p.jsx("div",{
  className:`image-placeholder ${sS[e]} ${n}`,children:p.jsx("div",{
    className:"flex flex-col items-center gap-3 text-center px-4",children:p.jsx(pw,{
      className:"w-8 h-8 opacity-50"
    })
  })
}),aS=({
  title:e="Long story — short",beforeImage:t,beforeAlt:n="Before",afterImages:r
})=>p.jsx("section",{
  className:"py-16 md:py-20 border-t border-border",children:p.jsxs("div",{
    className:"container-content",children:[p.jsx("p",{
      className:"body-base text-muted-foreground mb-12",children:e
    }),p.jsxs("div",{
      className:"grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start",children:[p.jsxs("div",{
        className:"md:col-span-4",children:[p.jsx("span",{
          className:"label-caps text-muted-foreground/60 block mb-6",children:"Before"
        }),t?p.jsx("div",{
          className:"overflow-hidden opacity-80",children:p.jsx("img",{
            src:t,alt:n,className:"w-full h-auto object-cover"
          })
        }):p.jsx(ss,{
          aspectRatio:"square",label:"Before image"
        })]
      }),p.jsxs("div",{
        className:"md:col-span-8",children:[p.jsx("span",{
          className:"label-caps text-muted-foreground/60 block mb-6",children:"After"
        }),r&&r.length>0?p.jsx("div",{
          className:"flex gap-4",children:r.map((o,i)=>p.jsx("div",{
            className:"flex-1 overflow-hidden shadow-xl ring-1 ring-border",children:p.jsx("img",{
              src:o.src,alt:o.alt,className:"w-full h-auto object-cover"
            })
          },i))
        }):p.jsxs("div",{
          className:"flex gap-4",children:[p.jsx("div",{
            className:"flex-1",children:p.jsx(ss,{
              aspectRatio:"tall",label:"After image 1"
            })
          }),p.jsx("div",{
            className:"flex-1",children:p.jsx(ss,{
              aspectRatio:"tall",label:"After image 2"
            })
          })]
        })]
      })]
    })]
  })
}),lS="/assets/purcari-before-WJJvt_pa.png",uS="/assets/purcari-after-1-zRjQBv0g.jpg",cS="/assets/purcari-after-2-Dox1fXav.jpg",dS="/assets/purcari-process-flow-DpCDeb7I.jpg",fS="/assets/purcari-research-diagram-BqCOg2AD.png",pS="/assets/purcari-interface-screens-DsUoh06T.png",mS="/assets/finoptima-dashboard-DwpZ6DFQ.png",hS="/assets/finoptima-risk-profile-VrXAlVZR.png",gS="/assets/finoptima-verification-BrSEjsc5.png",vS="/assets/finoptima-card-CC-Lvjwg.png",yS="/assets/lectra-3d-review-Bi2WGBdM.png",wS="/assets/lectra-message-center-BM4pwcYA.png",xS="/assets/lectra-dashboard-CpMC1rta.png",bS="/assets/lectra-card-BWGKLK3J.png",kS="/assets/lectra-ds-DJb_-tqV.png",SS={
  "digital-platform-for-winery-operations":"purcari",dooblo:"dooblo",finoptima:"finoptima","design-to-factory-collaborative-platform":"lectra"
},ES=()=>{
  const{
    slug:e
  }=vk(),{
    t
  }=vi(),n=e?SS[e]:void 0;
  if(!!!n)return p.jsx("main",{
    className:"min-h-screen section-spacing",children:p.jsxs("div",{
      className:"container-content",children:[p.jsx(Ya,{
        
      }),p.jsx("div",{
        className:"mt-16",children:p.jsx("h1",{
          className:"heading-display",children:t.caseStudy.notFound
        })
      })]
    })
  });
  const o=t.caseStudy[n],i=t.cases[n],s=t.caseStudy.sections,a=t.caseStudy.placeholders,l={
    purcari:Pg,dooblo:null,finoptima:vS,lectra:bS
  };
  return p.jsxs("main",{
    className:"min-h-screen",children:[p.jsx("section",{
      className:"pt-12 pb-8 md:pt-16 md:pb-12",children:p.jsxs("div",{
        className:"container-content",children:[p.jsx("div",{
          className:"mb-8",children:p.jsx(Ya,{
            
          })
        }),p.jsxs("div",{
          className:"flex flex-col md:flex-row md:items-start md:justify-between gap-8 animate-fade-in-up",children:[p.jsxs("div",{
            className:"max-w-2xl",children:[p.jsx("h1",{
              className:"heading-case mb-3",children:o.title
            }),i.location&&p.jsxs("span",{
              className:"flex items-center gap-1.5 text-[11px] text-muted-foreground/70 font-mono uppercase tracking-wider mb-6",children:[p.jsx(xh,{
                className:"w-3 h-3"
              }),i.location]
            }),p.jsx("div",{
              className:"flex flex-wrap gap-2 mb-6",children:i.tags.map((u,c)=>p.jsx("span",{
                className:"px-3 py-1.5 text-sm font-medium rounded-lg bg-foreground text-background",children:u
              },c))
            }),p.jsx("p",{
              className:"body-large text-muted-foreground",children:i.description
            })]
          }),p.jsx("div",{
            className:"w-full md:w-64 lg:w-80 flex-shrink-0",children:l[n]?p.jsx("div",{
              className:"rounded-xl overflow-hidden",children:p.jsx("img",{
                src:l[n],alt:o.title,className:"w-full h-auto object-cover"
              })
            }):p.jsx(ss,{
              aspectRatio:"square",label:a.hero
            })
          })]
        }),n==="purcari"&&p.jsx("p",{
          className:"text-xs text-muted-foreground mt-8 font-mono",children:"* Due to NDA, the company name is not disclosed and the case study presents a limited number of screens, focusing primarily on written explanations of the use case."
        }),n==="finoptima"&&p.jsx("p",{
          className:"text-xs text-muted-foreground mt-8 font-mono",children:"Due to NDA, visuals are limited and the case focuses on workflows, system logic, and decision design."
        })]
      })
    }),p.jsx("section",{
      className:"py-16 md:py-20 border-t border-border",children:p.jsx("div",{
        className:"container-content",children:p.jsxs("div",{
          className:"grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-10",children:[o.myRole&&p.jsxs("div",{
            children:[p.jsx("span",{
              className:"label-caps text-muted-foreground/60 block mb-4",children:s.myRole
            }),p.jsx("p",{
              className:"body-base leading-relaxed text-muted-foreground",children:o.myRole
            })]
          }),p.jsxs("div",{
            children:[p.jsx("span",{
              className:"label-caps text-muted-foreground/60 block mb-4",children:s.context
            }),p.jsx("p",{
              className:"body-base leading-relaxed text-muted-foreground",children:o.context
            })]
          }),p.jsxs("div",{
            children:[p.jsx("span",{
              className:"label-caps text-muted-foreground/60 block mb-4",children:s.problem
            }),p.jsx("p",{
              className:"body-base leading-relaxed text-muted-foreground",children:o.problem
            })]
          }),p.jsxs("div",{
            children:[p.jsx("span",{
              className:"label-caps text-muted-foreground/60 block mb-4",children:s.solution
            }),p.jsx("p",{
              className:"body-base leading-relaxed text-muted-foreground",children:o.solution
            })]
          })]
        })
      })
    }),n==="purcari"&&p.jsx(aS,{
      beforeImage:lS,beforeAlt:"Paper-based Excel workflow with handwritten notes",afterImages:[{
        src:uS,alt:"Crushing and Pressing digital workflow"
      },{
        src:cS,alt:"Work order summary interface"
      }]
    }),o.focusAreas&&o.focusAreas.length>0&&p.jsx("section",{
      className:"py-12 md:py-16 border-t border-border",children:p.jsxs("div",{
        className:"container-content",children:[p.jsx("span",{
          className:"label-caps block mb-8 text-muted-foreground",children:s.focusAreas
        }),p.jsx("div",{
          className:"grid md:grid-cols-2 gap-8",children:o.focusAreas.map((u,c)=>p.jsxs("div",{
            className:"p-6 rounded-xl border border-border bg-card",children:[p.jsx("h3",{
              className:"font-medium text-foreground mb-3",children:u.title
            }),p.jsx("p",{
              className:"body-base text-muted-foreground leading-relaxed",children:u.description
            })]
          },c))
        })]
      })
    }),o.takeaway&&p.jsx("section",{
      className:"py-12 md:py-16 border-t border-border",children:p.jsx("div",{
        className:"container-content",children:p.jsxs("blockquote",{
          className:"heading-section max-w-3xl italic",children:['"',o.takeaway,'"']
        })
      })
    }),n==="purcari"&&p.jsx("section",{
      className:"py-12 md:py-16 border-t border-border",children:p.jsxs("div",{
        className:"container-content",children:[p.jsx("h2",{
          className:"heading-section mb-8",children:"Crushing and pressing"
        }),p.jsxs("div",{
          className:"max-w-2xl mb-8",children:[p.jsx("p",{
            className:"body-base leading-relaxed text-muted-foreground",children:"This diagram represents the Crushing & Pressing process. It takes place in late summer to early autumn and is one of the foundational processes in winemaking."
          }),p.jsx("p",{
            className:"body-base leading-relaxed text-muted-foreground mt-4",children:"Depending on the wine protocol (recipe), additives may be introduced at different stages of this process."
          })]
        }),p.jsx("div",{
          className:"rounded-xl overflow-hidden mb-8",children:p.jsx("img",{
            src:dS,alt:"Crushing and Pressing process flow diagram",className:"w-full h-auto"
          })
        }),p.jsx("div",{
          className:"rounded-xl overflow-hidden mb-12",children:p.jsx("img",{
            src:pS,alt:"Digital workflow interface screens showing the Crushing & Pressing process",className:"w-full h-auto"
          })
        }),p.jsxs("div",{
          className:"max-w-2xl mb-8 space-y-4",children:[p.jsx("p",{
            className:"body-base leading-relaxed text-muted-foreground",children:"To accurately design this workflow, it was essential to deeply understand how Crushing & Pressing actually happens in real production conditions. The process involves multiple roles — winemakers, workers, and registries where production data is stored — and unfolds across physical spaces, equipment, and time-critical decisions."
          }),p.jsx("p",{
            className:"body-base leading-relaxed text-muted-foreground",children:"This required conducting interviews, spending time on-site at the winery, and closely observing how decisions were made, communicated, and recorded during harvest. Before digitalization, much of the process logic existed only in people's heads or was sketched manually on paper in the middle of the production floor to align teams and actions."
          })]
        }),p.jsx("div",{
          className:"max-w-2xl mb-8 space-y-4",children:p.jsx("p",{
            className:"body-base leading-relaxed text-muted-foreground",children:"These observations directly informed the structure of the digital workflow. The visual process was intentionally designed to reflect the way winemakers already reason about Crushing & Pressing — step by step, visually, and sequentially — bridging the gap between informal sketches and a reliable, system-supported operational flow."
          })
        }),p.jsx("div",{
          className:"rounded-xl overflow-hidden max-w-2xl mx-auto",children:p.jsx("img",{
            src:fS,alt:"Winemaking workflow research and analysis diagram",className:"w-full h-auto"
          })
        })]
      })
    }),n==="finoptima"&&o.mvpWorkflow&&p.jsx("section",{
      className:"py-12 md:py-16 border-t border-border",children:p.jsxs("div",{
        className:"container-content",children:[p.jsx("h2",{
          className:"heading-section mb-8",children:"Core MVP workflow"
        }),p.jsx("p",{
          className:"body-base leading-relaxed text-muted-foreground max-w-2xl mb-10",children:o.mvpWorkflow.intro
        }),p.jsx("div",{
          className:"space-y-12",children:o.mvpWorkflow.screens.map((u,c)=>{
            const d=[mS,hS,gS],m=["Monitoring dashboard — real-time overview of applications and risk progression","Risk profile & investigation view — centralized identity data and anomaly signals","Verification evidence layer — document authenticity and biometric checks"];
            return p.jsxs("div",{
              children:[p.jsxs("div",{
                className:"max-w-2xl mb-6",children:[p.jsx("span",{
                  className:"label-caps text-muted-foreground/60 block mb-2",children:u.number
                }),p.jsx("h3",{
                  className:"font-medium text-foreground text-lg mb-3",children:u.title
                }),p.jsx("p",{
                  className:"body-base text-muted-foreground leading-relaxed",children:u.description
                })]
              }),p.jsx("div",{
                className:"rounded-xl overflow-hidden",children:p.jsx("img",{
                  src:d[c],alt:m[c],className:"w-full h-auto"
                })
              })]
            },c)
          })
        }),p.jsx("p",{
          className:"body-base leading-relaxed text-muted-foreground max-w-2xl mt-10 italic",children:o.mvpWorkflow.outro
        })]
      })
    }),n==="lectra"&&o.sampleWorkflow&&p.jsx("section",{
      className:"py-12 md:py-16 border-t border-border",children:p.jsxs("div",{
        className:"container-content",children:[p.jsx("h2",{
          className:"heading-section mb-12",children:"From Design to Factory — What Actually Happens"
        }),p.jsx("div",{
          className:"space-y-12",children:o.sampleWorkflow.screens.map((u,c)=>{
            const d=[yS,wS,xS],m=["3D Review & Annotation — contextual comments on product model","Collection Message Center — filterable product list with delivery status","Factory Action Dashboard — pending approvals and at-risk items"];
            return p.jsxs("div",{
              children:[p.jsxs("div",{
                className:"max-w-2xl mb-6",children:[p.jsx("span",{
                  className:"label-caps text-muted-foreground/60 block mb-2",children:u.number
                }),p.jsx("h3",{
                  className:"font-medium text-foreground text-lg mb-3",children:u.title
                }),p.jsx("p",{
                  className:"body-base text-muted-foreground leading-relaxed",children:u.description
                })]
              }),p.jsx("div",{
                className:"rounded-xl overflow-hidden",children:p.jsx("img",{
                  src:d[c],alt:m[c],className:"w-full h-auto"
                })
              })]
            },c)
          })
        }),p.jsxs("div",{
          className:"max-w-2xl space-y-4 mt-12",children:[p.jsx("p",{
            className:"body-base leading-relaxed text-muted-foreground",children:o.sampleWorkflow.intro
          }),p.jsx("p",{
            className:"body-base leading-relaxed text-muted-foreground",children:o.sampleWorkflow.research
          }),p.jsx("p",{
            className:"body-base leading-relaxed text-muted-foreground",children:o.sampleWorkflow.outcome
          })]
        })]
      })
    }),n==="lectra"&&p.jsx("section",{
      className:"py-12 md:py-16 border-t border-border",children:p.jsx("div",{
        className:"container-content",children:p.jsx("div",{
          className:"rounded-xl overflow-hidden",children:p.jsx("img",{
            src:kS,alt:"Lectra design system — core colors, semantic colors, shadows, and border radius",className:"w-full h-auto"
          })
        })
      })
    }),o.transformations&&o.transformations.length>0&&p.jsx("section",{
      className:"py-12 md:py-16 border-t border-border",children:p.jsxs("div",{
        className:"container-content",children:[p.jsx("h2",{
          className:"heading-section mb-8",children:s.transformations
        }),p.jsx("div",{
          className:"space-y-4",children:o.transformations.map((u,c)=>p.jsxs("div",{
            className:"group grid md:grid-cols-12 gap-4 md:gap-6 p-5 md:p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors",children:[p.jsxs("div",{
              className:"md:col-span-5 flex items-start gap-3",children:[p.jsx("span",{
                className:"w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5",children:p.jsx("span",{
                  className:"text-xs font-medium text-muted-foreground",children:c+1
                })
              }),p.jsx("p",{
                className:"body-base text-muted-foreground/80",children:u.problem
              })]
            }),p.jsxs("div",{
              className:"md:col-span-2 flex items-center justify-center",children:[p.jsxs("div",{
                className:"hidden md:flex items-center gap-2 text-accent",children:[p.jsx("div",{
                  className:"w-8 h-px bg-accent/40"
                }),p.jsx("span",{
                  className:"text-lg",children:"→"
                }),p.jsx("div",{
                  className:"w-8 h-px bg-accent/40"
                })]
              }),p.jsx("span",{
                className:"md:hidden text-accent text-lg",children:"↓"
              })]
            }),p.jsx("div",{
              className:"md:col-span-5",children:p.jsx("p",{
                className:"body-base text-foreground font-medium",children:u.solution
              })
            })]
          },c))
        })]
      })
    }),p.jsx("section",{
      className:"py-12 md:py-16 border-t border-border",children:p.jsx("div",{
        className:"container-content",children:p.jsxs("div",{
          className:"grid md:grid-cols-2 gap-12 md:gap-16",children:[p.jsxs("div",{
            children:[p.jsx("span",{
              className:"label-caps block mb-6 text-muted-foreground",children:s.userImpact
            }),p.jsx("ul",{
              className:"space-y-3",children:o.userImpact.map((u,c)=>p.jsxs("li",{
                className:"body-base flex items-start gap-3",children:[p.jsx("span",{
                  className:"w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 flex-shrink-0"
                }),u]
              },c))
            })]
          }),p.jsxs("div",{
            children:[p.jsx("span",{
              className:"label-caps block mb-6 text-muted-foreground",children:s.businessImpact
            }),p.jsx("ul",{
              className:"space-y-3",children:o.businessImpact.map((u,c)=>p.jsxs("li",{
                className:"body-base flex items-start gap-3",children:[p.jsx("span",{
                  className:"w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 flex-shrink-0"
                }),u]
              },c))
            })]
          })]
        })
      })
    }),o.reflection&&o.reflection.length>0&&p.jsx("section",{
      className:"py-12 md:py-16 border-t border-border",children:p.jsxs("div",{
        className:"container-content",children:[p.jsx("span",{
          className:"label-caps block mb-6 text-muted-foreground/60",children:s.reflection
        }),p.jsx("p",{
          className:"body-base leading-relaxed text-muted-foreground max-w-2xl",children:o.reflection
        })]
      })
    }),o.whyMatters&&p.jsx("section",{
      className:"py-12 md:py-16 border-t border-border bg-muted/30",children:p.jsxs("div",{
        className:"container-content",children:[p.jsx("span",{
          className:"label-caps block mb-6 text-muted-foreground/60",children:s.whyMatters
        }),p.jsx("p",{
          className:"heading-section max-w-3xl",children:o.whyMatters
        })]
      })
    }),p.jsx("footer",{
      className:"py-16 md:py-20 border-t border-border",children:p.jsxs("div",{
        className:"container-content",children:[p.jsxs("div",{
          className:"flex flex-col items-center text-center",children:[p.jsx("p",{
            className:"body-large text-muted-foreground mb-6 max-w-md",children:"Interested in working together?"
          }),p.jsxs("a",{
            href:"mailto:hello@katyapruieva.com",className:"btn-outline group",children:[p.jsx(Kl,{
              className:"w-4 h-4 mr-2 group-hover:text-background transition-colors"
            }),t.buttons.message]
          })]
        }),p.jsx("div",{
          className:"mt-12 pt-8 border-t border-border",children:p.jsx(Ya,{
            
          })
        })]
      })
    })]
  })
},CS=()=>{
  const e=gi();
  return w.useEffect(()=>{
    console.error("404 Error: User attempted to access non-existent route:",e.pathname)
  },[e.pathname]),p.jsx("div",{
    className:"flex min-h-screen items-center justify-center bg-muted",children:p.jsxs("div",{
      className:"text-center",children:[p.jsx("h1",{
        className:"mb-4 text-4xl font-bold",children:"404"
      }),p.jsx("p",{
        className:"mb-4 text-xl text-muted-foreground",children:"Oops! Page not found"
      }),p.jsx("a",{
        href:"/",className:"text-primary underline hover:text-primary/90",children:"Return to Home"
      })]
    })
  })
},PS=new zb,NS=()=>p.jsx(Bb,{
  client:PS,children:p.jsx(Hk,{
    children:p.jsxs(hb,{
      children:[p.jsx(Qk,{
        
      }),p.jsx(Jw,{
        
      }),p.jsx(jx,{
        
      }),p.jsx(zk,{
        basename:"/pf-test",children:p.jsxs(Ak,{
          children:[p.jsx(is,{
            path:"/",element:p.jsx(iS,{
              
            })
          }),p.jsx(is,{
            path:"/case/:slug",element:p.jsx(ES,{
              
            })
          }),p.jsx(is,{
            path:"*",element:p.jsx(CS,{
              
            })
          })]
        })
      })]
    })
  })
});
Vm(document.getElementById("root")).render(p.jsx(NS,{
  
}));

