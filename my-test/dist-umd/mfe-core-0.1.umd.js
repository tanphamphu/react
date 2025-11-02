(function(e,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react","react-dom"],n):(e=typeof globalThis<"u"?globalThis:e||self,n(e.MFECore={},e.React,e.ReactDOM))})(this,(function(e,n,f){"use strict";var o={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l;function p(){if(l)return i;l=1;var d=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function u(h,r,t){var c=null;if(t!==void 0&&(c=""+t),r.key!==void 0&&(c=""+r.key),"key"in r){t={};for(var a in r)a!=="key"&&(t[a]=r[a])}else t=r;return r=t.ref,{$$typeof:d,type:h,key:c,ref:r!==void 0?r:null,props:t}}return i.Fragment=s,i.jsx=u,i.jsxs=u,i}var R;function v(){return R||(R=1,o.exports=p()),o.exports}var x=v();const E=({runQuery:d,model:s,updateModel:u})=>(console.log(`runQuery, model, updateModel == ${d}, ${s}, ${u}`),x.jsx("div",{style:{width:"30vw",height:"20vh",background:"#ccc",padding:20,margin:"10%",border:"1px solid #ccc"},children:x.jsx("h1",{children:"WELCOME TO THE WORLD!!!"})}));e.React=n,e.ReactDOM=f,e.Modal01=E,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
