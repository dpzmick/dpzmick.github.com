(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function e(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=e(i);fetch(i.href,l)}})();function C(){}function Xt(n){return!!n&&(typeof n=="object"||typeof n=="function")&&typeof n.then=="function"}function pt(n){return n()}function ot(){return Object.create(null)}function he(n){n.forEach(pt)}function mt(n){return typeof n=="function"}function _t(n,r){return n!=n?r==r:n!==r||n&&typeof n=="object"||typeof n=="function"}function Qt(n){return Object.keys(n).length===0}function it(n){return n??""}function _(n,r){n.appendChild(r)}function ke(n,r,e){n.insertBefore(r,e||null)}function ge(n){n.parentNode&&n.parentNode.removeChild(n)}function ht(n,r){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(r)}function E(n){return document.createElement(n)}function j(n){return document.createTextNode(n)}function Y(){return j(" ")}function Ce(n,r,e,a){return n.addEventListener(r,e,a),()=>n.removeEventListener(r,e,a)}function q(n,r,e){e==null?n.removeAttribute(r):n.getAttribute(r)!==e&&n.setAttribute(r,e)}function en(n){return Array.from(n.childNodes)}function Ge(n,r){r=""+r,n.data!==r&&(n.data=r)}let Re;function Z(n){Re=n}function tn(){if(!Re)throw new Error("Function called outside component initialization");return Re}const me=[],We=[];let _e=[];const at=[],nn=Promise.resolve();let xe=!1;function rn(){xe||(xe=!0,nn.then(He))}function je(n){_e.push(n)}const Be=new Set;let pe=0;function He(){if(pe!==0)return;const n=Re;do{try{for(;pe<me.length;){const r=me[pe];pe++,Z(r),on(r.$$)}}catch(r){throw me.length=0,pe=0,r}for(Z(null),me.length=0,pe=0;We.length;)We.pop()();for(let r=0;r<_e.length;r+=1){const e=_e[r];Be.has(e)||(Be.add(e),e())}_e.length=0}while(me.length);for(;at.length;)at.pop()();xe=!1,Be.clear(),Z(n)}function on(n){if(n.fragment!==null){n.update(),he(n.before_update);const r=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,r),n.after_update.forEach(je)}}function an(n){const r=[],e=[];_e.forEach(a=>n.indexOf(a)===-1?r.push(a):e.push(a)),e.forEach(a=>a()),_e=r}const Ie=new Set;let ae;function ln(){ae={r:0,c:[],p:ae}}function sn(){ae.r||he(ae.c),ae=ae.p}function Pe(n,r){n&&n.i&&(Ie.delete(n),n.i(r))}function Ye(n,r,e,a){if(n&&n.o){if(Ie.has(n))return;Ie.add(n),ae.c.push(()=>{Ie.delete(n),a&&(e&&n.d(1),a())}),n.o(r)}else a&&a()}function cn(n,r){const e=r.token={};function a(i,l,d,f){if(r.token!==e)return;r.resolved=f;let h=r.ctx;d!==void 0&&(h=h.slice(),h[d]=f);const c=i&&(r.current=i)(h);let m=!1;r.block&&(r.blocks?r.blocks.forEach((v,k)=>{k!==l&&v&&(ln(),Ye(v,1,1,()=>{r.blocks[k]===v&&(r.blocks[k]=null)}),sn())}):r.block.d(1),c.c(),Pe(c,1),c.m(r.mount(),r.anchor),m=!0),r.block=c,r.blocks&&(r.blocks[l]=c),m&&He()}if(Xt(n)){const i=tn();if(n.then(l=>{Z(i),a(r.then,1,r.value,l),Z(null)},l=>{if(Z(i),a(r.catch,2,r.error,l),Z(null),!r.hasCatch)throw l}),r.current!==r.pending)return a(r.pending,0),!0}else{if(r.current!==r.then)return a(r.then,1,r.value,n),!0;r.resolved=n}}function un(n,r,e){const a=r.slice(),{resolved:i}=n;n.current===n.then&&(a[n.value]=i),n.current===n.catch&&(a[n.error]=i),n.block.p(a,e)}function fn(n){n&&n.c()}function gt(n,r,e,a){const{fragment:i,after_update:l}=n.$$;i&&i.m(r,e),a||je(()=>{const d=n.$$.on_mount.map(pt).filter(mt);n.$$.on_destroy?n.$$.on_destroy.push(...d):he(d),n.$$.on_mount=[]}),l.forEach(je)}function yt(n,r){const e=n.$$;e.fragment!==null&&(an(e.after_update),he(e.on_destroy),e.fragment&&e.fragment.d(r),e.on_destroy=e.fragment=null,e.ctx=[])}function dn(n,r){n.$$.dirty[0]===-1&&(me.push(n),rn(),n.$$.dirty.fill(0)),n.$$.dirty[r/31|0]|=1<<r%31}function bt(n,r,e,a,i,l,d,f=[-1]){const h=Re;Z(n);const c=n.$$={fragment:null,ctx:[],props:l,update:C,not_equal:i,bound:ot(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(h?h.$$.context:[])),callbacks:ot(),dirty:f,skip_bound:!1,root:r.target||h.$$.root};d&&d(c.root);let m=!1;if(c.ctx=e?e(n,r.props||{},(v,k,...S)=>{const I=S.length?S[0]:k;return c.ctx&&i(c.ctx[v],c.ctx[v]=I)&&(!c.skip_bound&&c.bound[v]&&c.bound[v](I),m&&dn(n,v)),k}):[],c.update(),m=!0,he(c.before_update),c.fragment=a?a(c.ctx):!1,r.target){if(r.hydrate){const v=en(r.target);c.fragment&&c.fragment.l(v),v.forEach(ge)}else c.fragment&&c.fragment.c();r.intro&&Pe(n.$$.fragment),gt(n,r.target,r.anchor,r.customElement),He()}Z(h)}class wt{$destroy(){yt(this,1),this.$destroy=C}$on(r,e){if(!mt(e))return C;const a=this.$$.callbacks[r]||(this.$$.callbacks[r]=[]);return a.push(e),()=>{const i=a.indexOf(e);i!==-1&&a.splice(i,1)}}$set(r){this.$$set&&!Qt(r)&&(this.$$.skip_bound=!0,this.$$set(r),this.$$.skip_bound=!1)}}const pn="modulepreload",mn=function(n){return"/static/othello2023/"+n},lt={},_n=function(r,e,a){if(!e||e.length===0)return r();const i=document.getElementsByTagName("link");return Promise.all(e.map(l=>{if(l=mn(l),l in lt)return;lt[l]=!0;const d=l.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!a)for(let m=i.length-1;m>=0;m--){const v=i[m];if(v.href===l&&(!d||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${f}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":pn,d||(c.as="script",c.crossOrigin=""),c.href=l,document.head.appendChild(c),d)return new Promise((m,v)=>{c.addEventListener("load",m),c.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>r())};var hn=(()=>{var n=import.meta.url;return async function(e={}){var e=typeof e<"u"?e:{},a,i;e.ready=new Promise(function(t,o){a=t,i=o}),["_main","_new_othello_wrap","_delete_othello_wrap","_othello_wrap_turn","_othello_wrap_board_at","_othello_wrap_play_at","_fflush","onRuntimeInitialized"].forEach(t=>{Object.getOwnPropertyDescriptor(e.ready,t)||Object.defineProperty(e.ready,t,{get:()=>F("You are getting "+t+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),set:()=>F("You are setting "+t+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")})});var l=Object.assign({},e),d=typeof window=="object",f=typeof importScripts=="function",h=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",c=!d&&!h&&!f;if(e.ENVIRONMENT)throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");var m="";function v(t){return e.locateFile?e.locateFile(t,m):m+t}var k,S,I;if(h){if(typeof process>"u"||!process.release||process.release.name!=="node")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var $=process.versions.node,O=$.split(".").slice(0,3);if(O=O[0]*1e4+O[1]*100+O[2].split("-")[0]*1,O<101900)throw new Error("This emscripten-generated code requires node v10.19.19.0 (detected v"+$+")");const{createRequire:t}=await _n(()=>import("./__vite-browser-external-b25bb000.js"),[]);var M=t(import.meta.url),N=M("fs"),P=M("path");f?m=P.dirname(m)+"/":m=M("url").fileURLToPath(new URL("./",self.location)),k=(o,s)=>(o=Te(o)?new URL(o):P.normalize(o),N.readFileSync(o,s?void 0:"utf8")),I=o=>{var s=k(o,!0);return s.buffer||(s=new Uint8Array(s)),p(s.buffer),s},S=(o,s,u)=>{o=Te(o)?new URL(o):P.normalize(o),N.readFile(o,function(w,A){w?u(w):s(A.buffer)})},!e.thisProgram&&process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),e.inspect=function(){return"[Emscripten Module object]"}}else if(c){if(typeof process=="object"&&typeof M=="function"||typeof window=="object"||typeof importScripts=="function")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");typeof read<"u"&&(k=function(o){return read(o)}),I=function(o){let s;return typeof readbuffer=="function"?new Uint8Array(readbuffer(o)):(s=read(o,"binary"),p(typeof s=="object"),s)},S=function(o,s,u){setTimeout(()=>s(I(o)),0)},typeof clearTimeout>"u"&&(globalThis.clearTimeout=t=>{}),typeof scriptArgs<"u"&&scriptArgs,typeof print<"u"&&(typeof console>"u"&&(console={}),console.log=print,console.warn=console.error=typeof printErr<"u"?printErr:print)}else if(d||f){if(f?m=self.location.href:typeof document<"u"&&document.currentScript&&(m=document.currentScript.src),n&&(m=n),m.indexOf("blob:")!==0?m=m.substr(0,m.replace(/[?#].*/,"").lastIndexOf("/")+1):m="",!(typeof window=="object"||typeof importScripts=="function"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");k=t=>{var o=new XMLHttpRequest;return o.open("GET",t,!1),o.send(null),o.responseText},f&&(I=t=>{var o=new XMLHttpRequest;return o.open("GET",t,!1),o.responseType="arraybuffer",o.send(null),new Uint8Array(o.response)}),S=(t,o,s)=>{var u=new XMLHttpRequest;u.open("GET",t,!0),u.responseType="arraybuffer",u.onload=()=>{if(u.status==200||u.status==0&&u.response){o(u.response);return}s()},u.onerror=s,u.send(null)}}else throw new Error("environment detection error");var le=e.print||console.log.bind(console),L=e.printErr||console.warn.bind(console);Object.assign(e,l),l=null,zt(),e.arguments&&e.arguments,K("arguments","arguments_"),e.thisProgram&&e.thisProgram,K("thisProgram","thisProgram"),e.quit&&e.quit,K("quit","quit_"),p(typeof e.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),p(typeof e.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),p(typeof e.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),p(typeof e.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),p(typeof e.read>"u","Module.read option was removed (modify read_ in JS)"),p(typeof e.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),p(typeof e.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),p(typeof e.setWindowTitle>"u","Module.setWindowTitle option was removed (modify setWindowTitle in JS)"),p(typeof e.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),K("read","read_"),K("readAsync","readAsync"),K("readBinary","readBinary"),K("setWindowTitle","setWindowTitle"),p(!c,"shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.");var X;e.wasmBinary&&(X=e.wasmBinary),K("wasmBinary","wasmBinary"),e.noExitRuntime,K("noExitRuntime","noExitRuntime"),typeof WebAssembly!="object"&&F("no native wasm support detected");var Q,te=!1;function p(t,o){t||F("Assertion failed"+(o?": "+o:""))}var se,D,G;function ye(){var t=Q.buffer;e.HEAP8=se=new Int8Array(t),e.HEAP16=new Int16Array(t),e.HEAP32=new Int32Array(t),e.HEAPU8=D=new Uint8Array(t),e.HEAPU16=new Uint16Array(t),e.HEAPU32=G=new Uint32Array(t),e.HEAPF32=new Float32Array(t),e.HEAPF64=new Float64Array(t)}p(!e.STACK_SIZE,"STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),p(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support"),p(!e.wasmMemory,"Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),p(!e.INITIAL_MEMORY,"Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");var be;function we(){var t=Ne();p((t&3)==0),t==0&&(t+=4),G[t>>2]=34821223,G[t+4>>2]=2310721022,G[0]=1668509029}function ce(){if(!te){var t=Ne();t==0&&(t+=4);var o=G[t>>2],s=G[t+4>>2];(o!=34821223||s!=2310721022)&&F("Stack overflow! Stack cookie has been overwritten at "+Se(t)+", expected hex dwords 0x89BACDFE and 0x2135467, but received "+Se(s)+" "+Se(o)),G[0]!==1668509029&&F("Runtime error: The application has corrupted its heap memory area (address zero)!")}}(function(){var t=new Int16Array(1),o=new Int8Array(t.buffer);if(t[0]=25459,o[0]!==115||o[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();var ne=[],ue=[],ve=[],fe=!1;function re(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)Fe(e.preRun.shift());Ue(ne)}function Me(){p(!fe),fe=!0,ce(),Ue(ue)}function Le(){if(ce(),e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)Ee(e.postRun.shift());Ue(ve)}function Fe(t){ne.unshift(t)}function de(t){ue.unshift(t)}function Ee(t){ve.unshift(t)}p(Math.imul,"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),p(Math.fround,"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),p(Math.clz32,"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),p(Math.trunc,"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");var z=0,U=null,T=null,g={};function B(t){z++,e.monitorRunDependencies&&e.monitorRunDependencies(z),t?(p(!g[t]),g[t]=1,U===null&&typeof setInterval<"u"&&(U=setInterval(function(){if(te){clearInterval(U),U=null;return}var o=!1;for(var s in g)o||(o=!0,L("still waiting on run dependencies:")),L("dependency: "+s);o&&L("(end of list)")},1e4))):L("warning: run dependency added without ID")}function R(t){if(z--,e.monitorRunDependencies&&e.monitorRunDependencies(z),t?(p(g[t]),delete g[t]):L("warning: run dependency removed without ID"),z==0&&(U!==null&&(clearInterval(U),U=null),T)){var o=T;T=null,o()}}function F(t){e.onAbort&&e.onAbort(t),t="Aborted("+t+")",L(t),te=!0;var o=new WebAssembly.RuntimeError(t);throw i(o),o}var H={error:function(){F("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM")},init:function(){H.error()},createDataFile:function(){H.error()},createPreloadedFile:function(){H.error()},createLazyFile:function(){H.error()},open:function(){H.error()},mkdev:function(){H.error()},registerDevice:function(){H.error()},analyzePath:function(){H.error()},ErrnoError:function(){H.error()}};e.FS_createDataFile=H.createDataFile,e.FS_createPreloadedFile=H.createPreloadedFile;var vt="data:application/octet-stream;base64,";function ze(t){return t.startsWith(vt)}function Te(t){return t.startsWith("file://")}function V(t,o){return function(){var s=t,u=o;return o||(u=e.asm),p(fe,"native function `"+s+"` called before runtime initialization"),u[t]||p(u[t],"exported native function `"+s+"` not found"),u[t].apply(null,arguments)}}var J;e.locateFile?(J="wasm_wrapper.wasm",ze(J)||(J=v(J))):J=new URL("/static/othello2023/assets/wasm_wrapper-f34274da.wasm",self.location).href;function Ve(t){try{if(t==J&&X)return new Uint8Array(X);if(I)return I(t);throw"both async and sync fetching of the wasm failed"}catch(o){F(o)}}function Et(t){if(!X&&(d||f)){if(typeof fetch=="function"&&!Te(t))return fetch(t,{credentials:"same-origin"}).then(function(o){if(!o.ok)throw"failed to load wasm binary file at '"+t+"'";return o.arrayBuffer()}).catch(function(){return Ve(t)});if(S)return new Promise(function(o,s){S(t,function(u){o(new Uint8Array(u))},s)})}return Promise.resolve().then(function(){return Ve(t)})}function $e(t,o,s){return Et(t).then(function(u){return WebAssembly.instantiate(u,o)}).then(function(u){return u}).then(s,function(u){L("failed to asynchronously prepare wasm: "+u),Te(J)&&L("warning: Loading from a file URI ("+J+") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing"),F(u)})}function Tt(t,o,s,u){return!t&&typeof WebAssembly.instantiateStreaming=="function"&&!ze(o)&&!Te(o)&&!h&&typeof fetch=="function"?fetch(o,{credentials:"same-origin"}).then(function(w){var A=WebAssembly.instantiateStreaming(w,s);return A.then(u,function(y){return L("wasm streaming compile failed: "+y),L("falling back to ArrayBuffer instantiation"),$e(o,s,u)})}):$e(o,s,u)}function St(){var t={env:Qe,wasi_snapshot_preview1:Qe};function o(w,A){var y=w.exports;return e.asm=y,Q=e.asm.memory,p(Q,"memory not found in wasm exports"),ye(),be=e.asm.__indirect_function_table,p(be,"table not found in wasm exports"),de(e.asm.__wasm_call_ctors),R("wasm-instantiate"),y}B("wasm-instantiate");var s=e;function u(w){p(e===s,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),s=null,o(w.instance)}if(e.instantiateWasm)try{return e.instantiateWasm(t,o)}catch(w){L("Module.instantiateWasm callback failed with error: "+w),i(w)}return Tt(X,J,t,u).catch(i),{}}function K(t,o){Object.getOwnPropertyDescriptor(e,t)||Object.defineProperty(e,t,{configurable:!0,get:function(){F("Module."+t+" has been replaced with plain "+o+" (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")}})}function At(t){Object.getOwnPropertyDescriptor(e,t)&&F("`Module."+t+"` was supplied but `"+t+"` not included in INCOMING_MODULE_JS_API")}function Je(t){return t==="FS_createPath"||t==="FS_createDataFile"||t==="FS_createPreloadedFile"||t==="FS_unlink"||t==="addRunDependency"||t==="FS_createLazyFile"||t==="FS_createDevice"||t==="removeRunDependency"}function Rt(t,o){typeof globalThis<"u"&&Object.defineProperty(globalThis,t,{configurable:!0,get:function(){ee("`"+t+"` is not longer defined by emscripten. "+o)}})}Rt("buffer","Please use HEAP8.buffer or wasmMemory.buffer");function kt(t){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,t)&&Object.defineProperty(globalThis,t,{configurable:!0,get:function(){var o="`"+t+"` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line",s=t;s.startsWith("_")||(s="$"+t),o+=" (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE="+s+")",Je(t)&&(o+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),ee(o)}}),Ke(t)}function Ke(t){Object.getOwnPropertyDescriptor(e,t)||Object.defineProperty(e,t,{configurable:!0,get:function(){var o="'"+t+"' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";Je(t)&&(o+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),F(o)}})}function Ue(t){for(;t.length>0;)t.shift()(e)}function Se(t){return p(typeof t=="number"),"0x"+t.toString(16).padStart(8,"0")}function ee(t){ee.shown||(ee.shown={}),ee.shown[t]||(ee.shown[t]=1,h&&(t="warning: "+t),L(t))}function Mt(){F("native code called abort()")}function Lt(t,o,s){D.copyWithin(t,o,o+s)}function Ft(t){F("Cannot enlarge memory arrays to size "+t+" bytes (OOM). Either (1) compile with -sINITIAL_MEMORY=X with X higher than the current value "+se.length+", (2) compile with -sALLOW_MEMORY_GROWTH which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with -sABORTING_MALLOC=0")}function Ot(t){D.length,t=t>>>0,Ft(t)}var qe=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function Ze(t,o,s){for(var u=o+s,w=o;t[w]&&!(w>=u);)++w;if(w-o>16&&t.buffer&&qe)return qe.decode(t.subarray(o,w));for(var A="";o<w;){var y=t[o++];if(!(y&128)){A+=String.fromCharCode(y);continue}var b=t[o++]&63;if((y&224)==192){A+=String.fromCharCode((y&31)<<6|b);continue}var x=t[o++]&63;if((y&240)==224?y=(y&15)<<12|b<<6|x:((y&248)!=240&&ee("Invalid UTF-8 leading byte "+Se(y)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),y=(y&7)<<18|b<<12|x<<6|t[o++]&63),y<65536)A+=String.fromCharCode(y);else{var oe=y-65536;A+=String.fromCharCode(55296|oe>>10,56320|oe&1023)}}return A}function Ct(t,o){return p(typeof t=="number"),t?Ze(D,t,o):""}function It(t){F("fd_close called without SYSCALLS_REQUIRE_FILESYSTEM")}function Pt(t,o,s,u,w){return 70}var Ut=[null,[],[]];function Nt(t,o){var s=Ut[t];p(s),o===0||o===10?((t===1?le:L)(Ze(s,0)),s.length=0):s.push(o)}function Dt(t,o,s,u){for(var w=0,A=0;A<s;A++){var y=G[o>>2],b=G[o+4>>2];o+=8;for(var x=0;x<b;x++)Nt(t,D[y+x]);w+=b}return G[u>>2]=w,0}function Gt(t){var o=e["_"+t];return p(o,"Cannot call unknown function "+t+", make sure it is exported"),o}function Bt(t,o){p(t.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),se.set(t,o)}function Wt(t){for(var o=0,s=0;s<t.length;++s){var u=t.charCodeAt(s);u<=127?o++:u<=2047?o+=2:u>=55296&&u<=57343?(o+=4,++s):o+=3}return o}function xt(t,o,s,u){if(!(u>0))return 0;for(var w=s,A=s+u-1,y=0;y<t.length;++y){var b=t.charCodeAt(y);if(b>=55296&&b<=57343){var x=t.charCodeAt(++y);b=65536+((b&1023)<<10)|x&1023}if(b<=127){if(s>=A)break;o[s++]=b}else if(b<=2047){if(s+1>=A)break;o[s++]=192|b>>6,o[s++]=128|b&63}else if(b<=65535){if(s+2>=A)break;o[s++]=224|b>>12,o[s++]=128|b>>6&63,o[s++]=128|b&63}else{if(s+3>=A)break;b>1114111&&ee("Invalid Unicode code point "+Se(b)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),o[s++]=240|b>>18,o[s++]=128|b>>12&63,o[s++]=128|b>>6&63,o[s++]=128|b&63}}return o[s]=0,s-w}function jt(t,o,s){return p(typeof s=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),xt(t,D,o,s)}function Ht(t){var o=Wt(t)+1,s=tt(o);return jt(t,s,o),s}function Xe(t,o,s,u,w){var A={string:W=>{var Ae=0;return W!=null&&W!==0&&(Ae=Ht(W)),Ae},array:W=>{var Ae=tt(W.length);return Bt(W,Ae),Ae}};function y(W){return o==="string"?Ct(W):o==="boolean"?!!W:W}var b=Gt(t),x=[],oe=0;if(p(o!=="array",'Return type should not be "array".'),u)for(var ie=0;ie<u.length;ie++){var rt=A[s[ie]];rt?(oe===0&&(oe=Vt()),x[ie]=rt(u[ie])):x[ie]=u[ie]}var De=b.apply(null,x);function Zt(W){return oe!==0&&$t(oe),y(W)}return De=Zt(De),De}function Yt(t,o,s,u){return function(){return Xe(t,o,s,arguments)}}function zt(){At("fetchSettings")}var Qe={abort:Mt,emscripten_memcpy_big:Lt,emscripten_resize_heap:Ot,fd_close:It,fd_seek:Pt,fd_write:Dt};St(),e._new_othello_wrap=V("new_othello_wrap"),e._delete_othello_wrap=V("delete_othello_wrap"),e._othello_wrap_turn=V("othello_wrap_turn"),e._othello_wrap_board_at=V("othello_wrap_board_at"),e._othello_wrap_play_at=V("othello_wrap_play_at"),e._fflush=V("fflush");var et=function(){return(et=e.asm.emscripten_stack_init).apply(null,arguments)},Ne=function(){return(Ne=e.asm.emscripten_stack_get_end).apply(null,arguments)},Vt=V("stackSave"),$t=V("stackRestore"),tt=V("stackAlloc");e.dynCall_jiji=V("dynCall_jiji"),e.ccall=Xe,e.cwrap=Yt;var Jt=["zeroMemory","exitJS","emscripten_realloc_buffer","isLeapYear","ydayFromDate","arraySum","addDays","setErrNo","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","getHostByName","initRandomFill","randomFill","traverseStack","getCallstack","emscriptenLog","convertPCtoSourceLocation","readEmAsmArgs","jstoi_q","jstoi_s","getExecutableName","listenOnce","autoResumeAudioContext","dynCallLegacy","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","safeSetTimeout","asmjsMangle","asyncLoad","alignMemory","mmapAlloc","HandleAllocator","getNativeTypeSize","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertU32PairToI53","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayFromString","intArrayToString","AsciiToString","stringToAscii","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToNewUTF8","getSocketFromFD","getSocketAddress","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","findCanvasEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","demangle","demangleAll","jsStackTrace","stackTrace","getEnvStrings","checkWasiClock","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","createDyncallWrapper","setImmediateWrapped","clearImmediateWrapped","polyfillSetImmediate","getPromise","makePromise","makePromiseCallback","ExceptionInfo","exception_addRef","exception_decRef","setMainLoop","_setNetworkCallback","heapObjectForWebGLType","heapAccessShiftForWebGLHeap","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","__glGenObject","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","SDL_unicode","SDL_ttfContext","SDL_audio","GLFW_Window","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory"];Jt.forEach(kt);var Kt=["run","addOnPreRun","addOnInit","addOnPreMain","addOnExit","addOnPostRun","addRunDependency","removeRunDependency","FS_createFolder","FS_createPath","FS_createDataFile","FS_createPreloadedFile","FS_createLazyFile","FS_createLink","FS_createDevice","FS_unlink","out","err","callMain","abort","keepRuntimeAlive","wasmMemory","stackAlloc","stackSave","stackRestore","getTempRet0","setTempRet0","writeStackCookie","checkStackCookie","ptrToString","getHeapMax","abortOnCannotGrowMemory","ENV","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","ERRNO_CODES","ERRNO_MESSAGES","DNS","Protocols","Sockets","timers","warnOnce","UNWIND_CACHE","readEmAsmArgsArray","convertI32PairToI53Checked","getCFunc","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","UTF16Decoder","stringToUTF8OnStack","writeArrayToMemory","SYSCALLS","JSEvents","specialHTMLTargets","currentFullscreenStrategy","restoreOldWindowedStyle","ExitStatus","flush_NO_FILESYSTEM","dlopenMissingError","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","Browser","wget","FS","MEMFS","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","emscripten_webgl_power_preferences","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","GLFW","allocateUTF8","allocateUTF8OnStack"];Kt.forEach(Ke);var Oe;T=function t(){Oe||nt(),Oe||(T=t)};function qt(){et(),we()}function nt(){if(z>0||(qt(),re(),z>0))return;function t(){Oe||(Oe=!0,e.calledRun=!0,!te&&(Me(),a(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),p(!e._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),Le()))}e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1),t()},1)):t(),ce()}if(e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();return nt(),e.ready}})();async function gn(){const n=await hn();return{new:n.cwrap("new_othello_wrap","number",["number"]),turn:n.cwrap("othello_wrap_turn","number",["number"]),board_at:n.cwrap("othello_wrap_board_at","number",["number","number","number"]),play_at:n.cwrap("othello_wrap_play_at","number",["number","number","number"])}}function st(n,r){let e=n.new(r);return{turn:function(a,i){let l=n.turn(e);if(l==0)return"white";if(l==1)return"black"},boardAt:function(a,i){let l=n.board_at(e,a,i);if(l==1)return"white";if(l==-1)return"black";if(l==0)return"empty";if(l==2)return"valid"},getScores:function(){let a=0,i=0;for(let l=0;l<8;++l)for(let d=0;d<8;++d){let f=this.boardAt(d,l);a+=f=="white",i+=f=="black"}return[a,i]},getCells:function(a,i){let l=[];for(let d=0;d<8;++d){let f=[];for(let h=0;h<8;++h){let c=this.boardAt(h,d);f.push(c)}l.push(f)}return l},playAt:function(a,i){n.play_at(e,a,i)}}}function ct(n,r,e){const a=n.slice();return a[14]=r[e],a[16]=e,a}function ut(n,r,e){const a=n.slice();return a[17]=r[e],a[19]=e,a}function ft(n){let r,e,a,i,l,d;function f(){return n[11](n[19],n[16])}return{c(){r=E("td"),e=E("button"),a=E("div"),q(a,"class",i=it(n[17])+" svelte-1ahmwf0"),q(e,"class","cell svelte-1ahmwf0"),q(r,"class","svelte-1ahmwf0")},m(h,c){ke(h,r,c),_(r,e),_(e,a),l||(d=Ce(e,"click",f),l=!0)},p(h,c){n=h,c&2&&i!==(i=it(n[17])+" svelte-1ahmwf0")&&q(a,"class",i)},d(h){h&&ge(r),l=!1,d()}}}function dt(n){let r,e,a=n[14],i=[];for(let l=0;l<a.length;l+=1)i[l]=ft(ut(n,a,l));return{c(){r=E("tr");for(let l=0;l<i.length;l+=1)i[l].c();e=Y()},m(l,d){ke(l,r,d);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(r,null);_(r,e)},p(l,d){if(d&258){a=l[14];let f;for(f=0;f<a.length;f+=1){const h=ut(l,a,f);i[f]?i[f].p(h,d):(i[f]=ft(h),i[f].c(),i[f].m(r,e))}for(;f<i.length;f+=1)i[f].d(1);i.length=a.length}},d(l){l&&ge(r),ht(i,l)}}}function yn(n){let r,e,a,i,l,d,f,h,c,m,v,k,S,I,$,O,M,N,P,le,L,X,Q,te,p,se,D,G,ye,be,we,ce,ne,ue,ve,fe,re,Me,Le,Fe,de,Ee,z,U=n[1],T=[];for(let g=0;g<U.length;g+=1)T[g]=dt(ct(n,U,g));return{c(){r=E("div"),e=E("h3"),e.textContent="Othello",a=Y(),i=E("dialog"),l=E("h1"),l.textContent="Game Setup",d=Y(),f=E("p"),f.textContent="Select type of AI to use:",h=Y(),c=E("select"),m=E("option"),v=j("Monte Carlo Tree Search"),S=E("option"),I=j("Neural Net"),O=E("option"),M=j("Monte Carlo Tree Search w/ Neural Net"),P=E("option"),le=j("No AI"),X=Y(),Q=E("button"),Q.textContent="Restart Game",te=Y(),p=E("button"),p.textContent="Close Settings",se=Y(),D=E("p"),G=j("White: "),ye=j(n[2]),be=j(". Black: "),we=j(n[3]),ce=Y(),ne=E("p"),ue=j(n[4]),ve=j(" to play"),fe=Y(),re=E("table");for(let g=0;g<T.length;g+=1)T[g].c();Me=Y(),Le=E("p"),Fe=Y(),de=E("button"),de.textContent="Configure Game",m.__value="0",m.value=m.__value,m.selected=k=n[0]=="0",S.__value="1",S.value=S.__value,S.selected=$=n[0]=="1",O.__value="2",O.value=O.__value,O.selected=N=n[0]=="2",P.__value="3",P.value=P.__value,P.selected=L=n[0]=="3",q(c,"name","ai-type"),q(c,"id","ai-type"),q(i,"id","configuration-dialog"),q(re,"class","svelte-1ahmwf0"),q(r,"id","game")},m(g,B){ke(g,r,B),_(r,e),_(r,a),_(r,i),_(i,l),_(i,d),_(i,f),_(i,h),_(i,c),_(c,m),_(m,v),_(c,S),_(S,I),_(c,O),_(O,M),_(c,P),_(P,le),_(i,X),_(i,Q),_(i,te),_(i,p),n[10](i),_(r,se),_(r,D),_(D,G),_(D,ye),_(D,be),_(D,we),_(r,ce),_(r,ne),_(ne,ue),_(ne,ve),_(r,fe),_(r,re);for(let R=0;R<T.length;R+=1)T[R]&&T[R].m(re,null);_(r,Me),_(r,Le),_(r,Fe),_(r,de),Ee||(z=[Ce(Q,"click",n[7]),Ce(p,"click",n[6]),Ce(de,"click",n[12])],Ee=!0)},p(g,[B]){if(B&1&&k!==(k=g[0]=="0")&&(m.selected=k),B&1&&$!==($=g[0]=="1")&&(S.selected=$),B&1&&N!==(N=g[0]=="2")&&(O.selected=N),B&1&&L!==(L=g[0]=="3")&&(P.selected=L),B&4&&Ge(ye,g[2]),B&8&&Ge(we,g[3]),B&16&&Ge(ue,g[4]),B&258){U=g[1];let R;for(R=0;R<U.length;R+=1){const F=ct(g,U,R);T[R]?T[R].p(F,B):(T[R]=dt(F),T[R].c(),T[R].m(re,null))}for(;R<T.length;R+=1)T[R].d(1);T.length=U.length}},i:C,o:C,d(g){g&&ge(r),n[10](null),ht(T,g),Ee=!1,he(z)}}}function bn(n,r,e){let{api:a}=r,i=1,l=st(a,i),d=l.getCells(),[f,h]=l.getScores(),c=l.turn(),m;const v=()=>{m.close()},k=()=>{let N=document.getElementById("ai-type").value;e(0,i=N),l=st(a,i),e(1,d=l.getCells());let[P,le]=l.getScores();e(2,f=P),e(3,h=le),e(4,c=l.turn()),m.close()};function S(M,N){l.playAt(M,N),e(1,d=l.getCells()),e(2,[f,h]=l.getScores(),f,e(3,h)),e(4,c=l.turn())}function I(M){We[M?"unshift":"push"](()=>{m=M,e(5,m)})}const $=(M,N)=>S(M,N),O=()=>m.showModal();return n.$$set=M=>{"api"in M&&e(9,a=M.api)},[i,d,f,h,c,m,v,k,S,a,I,$,O]}class wn extends wt{constructor(r){super(),bt(this,r,bn,yn,_t,{api:9})}}function vn(n){return{c:C,m:C,p:C,i:C,o:C,d:C}}function En(n){let r,e;return r=new wn({props:{api:n[0]}}),{c(){fn(r.$$.fragment)},m(a,i){gt(r,a,i),e=!0},p:C,i(a){e||(Pe(r.$$.fragment,a),e=!0)},o(a){Ye(r.$$.fragment,a),e=!1},d(a){yt(r,a)}}}function Tn(n){let r;return{c(){r=j("Loading....")},m(e,a){ke(e,r,a)},p:C,i:C,o:C,d(e){e&&ge(r)}}}function Sn(n){let r,e,a={ctx:n,current:null,token:null,hasCatch:!1,pending:Tn,then:En,catch:vn,value:0,blocks:[,,,]};return cn(gn(),a),{c(){r=E("main"),a.block.c()},m(i,l){ke(i,r,l),a.block.m(r,a.anchor=null),a.mount=()=>r,a.anchor=null,e=!0},p(i,[l]){n=i,un(a,n,l)},i(i){e||(Pe(a.block),e=!0)},o(i){for(let l=0;l<3;l+=1){const d=a.blocks[l];Ye(d)}e=!1},d(i){i&&ge(r),a.block.d(),a.token=null,a=null}}}class An extends wt{constructor(r){super(),bt(this,r,null,Sn,_t,{})}}new An({target:document.getElementById("app")});
