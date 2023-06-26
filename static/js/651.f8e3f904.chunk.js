"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[651],{2651:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ne}});var o=t(8687),r=t(2791),a=t(4942),i=t(9439),s=t(1413),c=t(3366);function u(e,n){if(null==e)return{};var t,o,r=(0,c.Z)(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=t(3433),d=t(8182),f=["theme","type"],p=["delay","staleId"],m=function(e){return"number"==typeof e&&!isNaN(e)},g=function(e){return"string"==typeof e},h=function(e){return"function"==typeof e},v=function(e){return g(e)||h(e)?e:null},y=function(e){return(0,r.isValidElement)(e)||g(e)||h(e)||m(e)};function x(e){var n=e.enter,t=e.exit,o=e.appendPosition,a=void 0!==o&&o,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var o=e.children,i=e.position,c=e.preventExitTransition,d=e.done,f=e.nodeRef,p=e.isIn,m=a?"".concat(n,"--").concat(i):n,g=a?"".concat(t,"--").concat(i):t,h=(0,r.useRef)(0);return(0,r.useLayoutEffect)((function(){var e,n=f.current,t=m.split(" "),o=function e(o){var r;o.target===f.current&&(n.dispatchEvent(new Event("d")),n.removeEventListener("animationend",e),n.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==o.type&&(r=n.classList).remove.apply(r,(0,l.Z)(t)))};(e=n.classList).add.apply(e,(0,l.Z)(t)),n.addEventListener("animationend",o),n.addEventListener("animationcancel",o)}),[]),(0,r.useEffect)((function(){var e=f.current,n=function n(){e.removeEventListener("animationend",n),s?function(e,n,t){void 0===t&&(t=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(t,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(n,t)}))}))}(e,d,u):d()};p||(c?n():(h.current=1,e.className+=" ".concat(g),e.addEventListener("animationend",n)))}),[p]),r.createElement(r.Fragment,null,o)}}function b(e,n){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:n}:{}}var E={list:new Map,emitQueue:new Map,on:function(e,n){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(n),this},off:function(e,n){if(n){var t=this.list.get(e).filter((function(e){return e!==n}));return this.list.set(e,t),this}return this.list.delete(e),this},cancelEmit:function(e){var n=this.emitQueue.get(e);return n&&(n.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var n=arguments,t=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,l.Z)([].slice.call(n,1)))}),0);t.emitQueue.has(e)||t.emitQueue.set(e,[]),t.emitQueue.get(e).push(r)}))}},T=function(e){var n=e.theme,t=e.type,o=u(e,f);return r.createElement("svg",(0,s.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===n?"currentColor":"var(--toastify-icon-color-".concat(t,")")},o))},Z={info:function(e){return r.createElement(T,(0,s.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(T,(0,s.Z)({},e),r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(T,(0,s.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(T,(0,s.Z)({},e),r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function C(e){var n=(0,r.useReducer)((function(e){return e+1}),0),t=(0,i.Z)(n,2)[1],o=(0,r.useState)([]),a=(0,i.Z)(o,2),c=a[0],d=a[1],f=(0,r.useRef)(null),x=(0,r.useRef)(new Map).current,T=function(e){return-1!==c.indexOf(e)},C=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:T,getToast:function(e){return x.get(e)}}).current;function w(e){var n=e.containerId;!C.props.limit||n&&C.containerId!==n||(C.count-=C.queue.length,C.queue=[])}function I(e){d((function(n){return null==e?[]:n.filter((function(n){return n!==e}))}))}function _(){var e=C.queue.shift();L(e.toastContent,e.toastProps,e.staleId)}function O(e,n){var o=n.delay,a=n.staleId,c=u(n,p);if(y(e)&&!function(e){return!f.current||C.props.enableMultiContainer&&e.containerId!==C.props.containerId||x.has(e.toastId)&&null==e.updateId}(c)){var l=c.toastId,d=c.updateId,T=c.data,w=C.props,O=function(){return I(l)},k=null==d;k&&C.count++;var N,R,z=(0,s.Z)((0,s.Z)((0,s.Z)({},w),{},{style:w.toastStyle,key:C.toastKey++},Object.fromEntries(Object.entries(c).filter((function(e){var n=(0,i.Z)(e,2);n[0];return null!=n[1]})))),{},{toastId:l,updateId:d,data:T,closeToast:O,isIn:!1,className:v(c.className||w.toastClassName),bodyClassName:v(c.bodyClassName||w.bodyClassName),progressClassName:v(c.progressClassName||w.progressClassName),autoClose:!c.isLoading&&(N=c.autoClose,R=w.autoClose,!1===N||m(N)&&N>0?N:R),deleteToast:function(){var e=b(x.get(l),"removed");x.delete(l),E.emit(4,e);var n=C.queue.length;if(C.count=null==l?C.count-C.displayedToast:C.count-1,C.count<0&&(C.count=0),n>0){var o=null==l?C.props.limit:1;if(1===n||1===o)C.displayedToast++,_();else{var r=o>n?n:o;C.displayedToast=r;for(var a=0;a<r;a++)_()}}else t()}});z.iconOut=function(e){var n=e.theme,t=e.type,o=e.isLoading,a=e.icon,i=null,s={theme:n,type:t};return!1===a||(h(a)?i=a(s):(0,r.isValidElement)(a)?i=(0,r.cloneElement)(a,s):g(a)||m(a)?i=a:o?i=Z.spinner():function(e){return e in Z}(t)&&(i=Z[t](s))),i}(z),h(c.onOpen)&&(z.onOpen=c.onOpen),h(c.onClose)&&(z.onClose=c.onClose),z.closeButton=w.closeButton,!1===c.closeButton||y(c.closeButton)?z.closeButton=c.closeButton:!0===c.closeButton&&(z.closeButton=!y(w.closeButton)||w.closeButton);var j=e;(0,r.isValidElement)(e)&&!g(e.type)?j=(0,r.cloneElement)(e,{closeToast:O,toastProps:z,data:T}):h(e)&&(j=e({closeToast:O,toastProps:z,data:T})),w.limit&&w.limit>0&&C.count>w.limit&&k?C.queue.push({toastContent:j,toastProps:z,staleId:a}):m(o)?setTimeout((function(){L(j,z,a)}),o):L(j,z,a)}}function L(e,n,t){var o=n.toastId;t&&x.delete(t);var r={content:e,props:n};x.set(o,r),d((function(e){return[].concat((0,l.Z)(e),[o]).filter((function(e){return e!==t}))})),E.emit(4,b(r,null==r.props.updateId?"added":"updated"))}return(0,r.useEffect)((function(){return C.containerId=e.containerId,E.cancelEmit(3).on(0,O).on(1,(function(e){return f.current&&I(e)})).on(5,w).emit(2,C),function(){x.clear(),E.emit(3,C)}}),[]),(0,r.useEffect)((function(){C.props=e,C.isToastActive=T,C.displayedToast=c.length})),{getToastToRender:function(n){var t=new Map,o=Array.from(x.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var n=e.props.position;t.has(n)||t.set(n,[]),t.get(n).push(e)})),Array.from(t,(function(e){return n(e[0],e[1])}))},containerRef:f,isToastActive:T}}function w(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function I(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function _(e){var n=(0,r.useState)(!1),t=(0,i.Z)(n,2),o=t[0],a=t[1],s=(0,r.useState)(!1),c=(0,i.Z)(s,2),u=c[0],l=c[1],d=(0,r.useRef)(null),f=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,r.useRef)(e),m=e.autoClose,g=e.pauseOnHover,v=e.closeToast,y=e.onClick,x=e.closeOnClick;function b(n){if(e.draggable){"touchstart"===n.nativeEvent.type&&n.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",_),document.addEventListener("touchmove",C),document.addEventListener("touchend",_);var t=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=t.getBoundingClientRect(),t.style.transition="",f.x=w(n.nativeEvent),f.y=I(n.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=t.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=t.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function E(n){if(f.boundingRect){var t=f.boundingRect,o=t.top,r=t.bottom,a=t.left,i=t.right;"touchend"!==n.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=o&&f.y<=r?Z():T()}}function T(){a(!0)}function Z(){a(!1)}function C(n){var t=d.current;f.canDrag&&t&&(f.didMove=!0,o&&Z(),f.x=w(n),f.y=I(n),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),t.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),t.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function _(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",_),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",_);var n=d.current;if(f.canDrag&&f.didMove&&n){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();n.style.transition="transform 0.2s, opacity 0.2s",n.style.transform="translate".concat(e.draggableDirection,"(0)"),n.style.opacity="1"}}(0,r.useEffect)((function(){p.current=e})),(0,r.useEffect)((function(){return d.current&&d.current.addEventListener("d",T,{once:!0}),h(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;h(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}}),[]),(0,r.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||Z(),window.addEventListener("focus",T),window.addEventListener("blur",Z)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",T),window.removeEventListener("blur",Z))}}),[e.pauseOnFocusLoss]);var O={onMouseDown:b,onTouchStart:b,onMouseUp:E,onTouchEnd:E};return m&&g&&(O.onMouseEnter=Z,O.onMouseLeave=T),x&&(O.onClick=function(e){y&&y(e),f.canCloseOnClick&&v()}),{playToast:T,pauseToast:Z,isRunning:o,preventExitTransition:u,toastRef:d,eventHandlers:O}}function O(e){var n=e.closeToast,t=e.theme,o=e.ariaLabel,a=void 0===o?"close":o;return r.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(t),type:"button",onClick:function(e){e.stopPropagation(),n(e)},"aria-label":a},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function L(e){var n=e.delay,t=e.isRunning,o=e.closeToast,i=e.type,c=void 0===i?"default":i,u=e.hide,l=e.className,f=e.style,p=e.controlledProgress,m=e.progress,g=e.rtl,v=e.isIn,y=e.theme,x=u||p&&0===m,b=(0,s.Z)((0,s.Z)({},f),{},{animationDuration:"".concat(n,"ms"),animationPlayState:t?"running":"paused",opacity:x?0:1});p&&(b.transform="scaleX(".concat(m,")"));var E=(0,d.Z)("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(c),{"Toastify__progress-bar--rtl":g}),T=h(l)?l({rtl:g,type:c,defaultClassName:E}):(0,d.Z)(E,l);return r.createElement("div",(0,a.Z)({role:"progressbar","aria-hidden":x?"true":"false","aria-label":"notification timer",className:T,style:b},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){v&&o()}))}var k=function(e){var n=_(e),t=n.isRunning,o=n.preventExitTransition,a=n.toastRef,i=n.eventHandlers,c=e.closeButton,u=e.children,l=e.autoClose,f=e.onClick,p=e.type,m=e.hideProgressBar,g=e.closeToast,v=e.transition,y=e.position,x=e.className,b=e.style,E=e.bodyClassName,T=e.bodyStyle,Z=e.progressClassName,C=e.progressStyle,w=e.updateId,I=e.role,k=e.progress,N=e.rtl,R=e.toastId,z=e.deleteToast,j=e.isIn,M=e.isLoading,A=e.iconOut,F=e.closeOnClick,P=e.theme,D=(0,d.Z)("Toastify__toast","Toastify__toast-theme--".concat(P),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":N},{"Toastify__toast--close-on-click":F}),B=h(x)?x({rtl:N,position:y,type:p,defaultClassName:D}):(0,d.Z)(D,x),S=!!k||!l,H={closeToast:g,type:p,theme:P},q=null;return!1===c||(q=h(c)?c(H):(0,r.isValidElement)(c)?(0,r.cloneElement)(c,H):O(H)),r.createElement(v,{isIn:j,done:z,position:y,preventExitTransition:o,nodeRef:a},r.createElement("div",(0,s.Z)((0,s.Z)({id:R,onClick:f,className:B},i),{},{style:b,ref:a}),r.createElement("div",(0,s.Z)((0,s.Z)({},j&&{role:I}),{},{className:h(E)?E({type:p}):(0,d.Z)("Toastify__toast-body",E),style:T}),null!=A&&r.createElement("div",{className:(0,d.Z)("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},A),r.createElement("div",null,u)),q,r.createElement(L,(0,s.Z)((0,s.Z)({},w&&!S?{key:"pb-".concat(w)}:{}),{},{rtl:N,theme:P,delay:l,isRunning:t,isIn:j,closeToast:g,hide:m,type:p,style:C,className:Z,controlledProgress:S,progress:k||0}))))},N=function(e,n){return void 0===n&&(n=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:n}},R=x(N("bounce",!0)),z=(x(N("slide",!0)),x(N("zoom")),x(N("flip")),(0,r.forwardRef)((function(e,n){var t=C(e),o=t.getToastToRender,a=t.containerRef,i=t.isToastActive,c=e.className,u=e.style,l=e.rtl,f=e.containerId;function p(e){var n=(0,d.Z)("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":l});return h(c)?c({position:e,rtl:l,defaultClassName:n}):(0,d.Z)(n,v(c))}return(0,r.useEffect)((function(){n&&(n.current=a.current)}),[]),r.createElement("div",{ref:a,className:"Toastify",id:f},o((function(e,n){var t=n.length?(0,s.Z)({},u):(0,s.Z)((0,s.Z)({},u),{},{pointerEvents:"none"});return r.createElement("div",{className:p(e),style:t,key:"container-".concat(e)},n.map((function(e,t){var o=e.content,a=e.props;return r.createElement(k,(0,s.Z)((0,s.Z)({},a),{},{isIn:i(a.toastId),style:(0,s.Z)((0,s.Z)({},a.style),{},{"--nth":t+1,"--len":n.length}),key:"toast-".concat(a.key)}),o)})))})))})));z.displayName="ToastContainer",z.defaultProps={position:"top-right",transition:R,autoClose:5e3,closeButton:O,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var j,M=new Map,A=[],F=1;function P(){return""+F++}function D(e){return e&&(g(e.toastId)||m(e.toastId))?e.toastId:P()}function B(e,n){return M.size>0?E.emit(0,e,n):A.push({content:e,options:n}),n.toastId}function S(e,n){return(0,s.Z)((0,s.Z)({},n),{},{type:n&&n.type||e,toastId:D(n)})}function H(e){return function(n,t){return B(n,S(e,t))}}function q(e,n){return B(e,S("default",n))}q.loading=function(e,n){return B(e,S("default",(0,s.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},n)))},q.promise=function(e,n,t){var o,r=n.pending,a=n.error,i=n.success;r&&(o=g(r)?q.loading(r,t):q.loading(r.render,(0,s.Z)((0,s.Z)({},t),r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(e,n,r){if(null!=n){var a=(0,s.Z)((0,s.Z)((0,s.Z)({type:e},c),t),{},{data:r}),i=g(n)?{render:n}:n;return o?q.update(o,(0,s.Z)((0,s.Z)({},a),i)):q(i.render,(0,s.Z)((0,s.Z)({},a),i)),r}q.dismiss(o)},l=h(e)?e():e;return l.then((function(e){return u("success",i,e)})).catch((function(e){return u("error",a,e)})),l},q.success=H("success"),q.info=H("info"),q.error=H("error"),q.warning=H("warning"),q.warn=q.warning,q.dark=function(e,n){return B(e,S("default",(0,s.Z)({theme:"dark"},n)))},q.dismiss=function(e){M.size>0?E.emit(1,e):A=A.filter((function(n){return null!=e&&n.options.toastId!==e}))},q.clearWaitingQueue=function(e){return void 0===e&&(e={}),E.emit(5,e)},q.isActive=function(e){var n=!1;return M.forEach((function(t){t.isToastActive&&t.isToastActive(e)&&(n=!0)})),n},q.update=function(e,n){void 0===n&&(n={}),setTimeout((function(){var t=function(e,n){var t=n.containerId,o=M.get(t||j);return o&&o.getToast(e)}(e,n);if(t){var o=t.props,r=t.content,a=(0,s.Z)((0,s.Z)((0,s.Z)({delay:100},o),n),{},{toastId:n.toastId||e,updateId:P()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,B(i,a)}}),0)},q.done=function(e){q.update(e,{progress:1})},q.onChange=function(e){return E.on(4,e),function(){E.off(4,e)}},q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},E.on(2,(function(e){j=e.containerId||e,M.set(j,e),A.forEach((function(e){E.emit(0,e.content,e.options)})),A=[]})).on(3,(function(e){M.delete(e.containerId||e),0===M.size&&E.off(0).off(1).off(5)}));var Q,V,G,K,U,W,X,Y,$,J,ee,ne,te,oe=function(e){return e.filter.filter},re=function(e){return e.contacts.items},ae=function(e){return e.contacts.isLoading},ie=function(e){return e.contacts.error},se=t(3829),ce=t(168),ue=t(6088),le=ue.Z.div(Q||(Q=(0,ce.Z)(["\n  padding: 36px;\n  margin: 0 auto;\n  @media screen and (min-width: 1024px) {\n    padding: 24px;\n    display: grid;\n    column-gap: 20px;\n    grid-template-columns: 1fr 2fr;\n    grid-auto-rows: minmax(100px, auto);\n}\n@media screen and (min-width: 1200px) {\n  max-width: 1200px;\n"]))),de=ue.Z.h2(V||(V=(0,ce.Z)(["\n  margin-top: 20px;\n  font-weight: 900;\n  text-align: center;\n  font-size: 40px;\n"]))),fe=ue.Z.form(G||(G=(0,ce.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  align-items: center;\n  gap: 12px;\n  @media screen and (max-width: 375px and min-width: 425px) {\n    min-width: 300px;\n  }\n  @media screen and (max-width: 768px) {\n    max-width: 500px;\n  }\n  @media screen and (max-width: 1024px) {\n    max-width: 600px;\n  }\n  @media screen and (min-width: 1024px) {\n    margin: 0;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 4;\n  }\n"]))),pe=ue.Z.label(K||(K=(0,ce.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 4px;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.14;\n"]))),me=ue.Z.input(U||(U=(0,ce.Z)(["\n  padding: 8px 12px;\n  font-size: 18px;\n  line-height: 1.12;\n  font-style: italic;\n  font-weight: 300;\n  border: 2px solid #ef972c;\n  border-radius: 8px;\n  background-color: #e6f4f1;\n"]))),ge=ue.Z.button(W||(W=(0,ce.Z)(["\n  display: inline-block;\n  min-width: 150px;\n  margin-top: 24px;\n  padding: 8px 10px;\n  border: 2px solid #b69905;\n  border-radius: 8px;\n  background-color: #ef972c;\n  font-size: 18px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: transform 300ms linear, background-image 300ms linear 300ms,\n    border-color 300ms linear 300ms;\n  background-size: 200% auto;\n  background-image: linear-gradient(\n    45deg,\n    #F9F871 0%,\n    #ef972c 51%,\n    #F9F871 100%\n  );\n  :hover,\n  :focus {\n    background-position: right center;\n    transform: scale(1.1);\n    border-color: #F9F871;\n  }\n  :active {\n    transform: scale(0.95);\n  }\n"]))),he=t(184),ve=function(){var e=(0,r.useState)(""),n=(0,i.Z)(e,2),t=n[0],a=n[1],s=(0,r.useState)(""),c=(0,i.Z)(s,2),u=c[0],l=c[1],d=(0,o.useDispatch)(),f=(0,o.useSelector)(re),p=function(e){var n=e.target,t=n.name,o=n.value,r=o.toLowerCase();"userNumber"===t&&(f.some((function(e){return e.number===o}))?q.error("Number ".concat(o," is also in contacts"),{position:"top-left",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):l(o)),"userName"===t&&(f.some((function(e){return e.name.toLowerCase()===r}))?q.error("".concat(o," also in your list"),{position:"top-left",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):a(o))};return(0,he.jsxs)(fe,{onSubmit:function(e){e.preventDefault(),d((0,se.uK)({name:t,number:u})),a(""),l("")},children:[(0,he.jsxs)(pe,{children:["Name",(0,he.jsx)(me,{type:"text",name:"userName",value:t,onChange:p,pattern:"^[A-Za-z\\u0080-\\uFFFF ']+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,he.jsxs)(pe,{children:["Number",(0,he.jsx)(me,{type:"tel",name:"userNumber",value:u,onChange:p,pattern:"^(\\+?[0-9.\\(\\)\\-\\s]*)$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,he.jsx)(ge,{type:"submit",children:"Add contact"})]})},ye=t(1989),xe=ue.Z.p(X||(X=(0,ce.Z)(["\n  margin-top: 20px;\n  font-weight: 900;\n  text-align: center;\n  font-size: 40px;\n  color: red;\n"]))),be=function(){return(0,he.jsx)(xe,{children:"Ooops...something going wrong!"})},Ee=ue.Z.label(Y||(Y=(0,ce.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 18px;\n  font-weight: 500;\n"]))),Te=ue.Z.input($||($=(0,ce.Z)(["\n  margin-top: 4px;\n  padding: 8px 12px;\n  font-size: 18px;\n  line-height: 1.12;\n  font-style: italic;\n  font-weight: 300;\n  border-radius: 8px;\n  border: 2px solid #ef972c;\n  background-color: #fcfcd4;\n"]))),Ze=t(4808),Ce=function(){var e=(0,o.useDispatch)(),n=(0,o.useSelector)(oe);return(0,he.jsxs)(Ee,{children:["Find contacts by name",(0,he.jsx)(Te,{type:"text",name:"filter",value:n.filter,onChange:function(n){var t=n.target.value;e((0,Ze.T)(t))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})},we=ue.Z.li(J||(J=(0,ce.Z)(["\n  display: flex;\n  gap: 8px;\n  align-items: baseline;\n  justify-content: space-between;\n"]))),Ie=ue.Z.p(ee||(ee=(0,ce.Z)(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),_e=ue.Z.button(ne||(ne=(0,ce.Z)(["\n  border-radius: 8px;\n  border: 2px solid #ef972c;\n  background-color: #ef972c;\n  cursor: pointer;\n  transition: transform 300ms linear, background-image 300ms linear 300ms,\n    border-color 300ms linear 300ms;\n  background-size: 200% auto;\n  background-image: linear-gradient(\n    30deg,\n    #f51212 0%,\n    #f09819 51%,\n    #f51212 100%\n  );\n  :hover,\n  :focus {\n    background-position: right center;\n    transform: scale(1.1);\n    border-color: #f51212;\n  }\n  :active {\n    transform: scale(0.95);\n  }\n"]))),Oe=function(){var e=(0,o.useDispatch)(),n=(0,o.useSelector)(re),t=function(e){return n.filter((function(n){return n.name.toLowerCase().includes(e)}))}((0,o.useSelector)(oe).toLowerCase());return t.map((function(n){var t=n.id,o=n.name,r=n.number;return(0,he.jsxs)(we,{children:[(0,he.jsxs)(Ie,{children:[o,": ",r]}),(0,he.jsx)(_e,{type:"button",onClick:function(){return e((0,se.GK)(t))},children:"Delete"})]},t)}))},Le=ue.Z.ul(te||(te=(0,ce.Z)(["\n  max-height: 60vh;\n  margin-top: 12px;\n  padding: 8px 12px;\n  list-style: none;\n  background-color: #fff;\n  background-image: repeating-linear-gradient(\n    to bottom,\n    #e6f4f1,\n    #e6f4f1 20px,\n    #fcfcd4 20px,\n    #fcfcd4 50px\n  );\n  border-radius: 8px;\n  border: 2px solid #ef972c;\n  overflow-y: scroll;\n  @media screen and (min-width: 1024px) {\n    margin-top: 0;\n    min-height: 200px;\n  }\n"]))),ke=function(){return(0,he.jsx)(Le,{children:(0,he.jsx)(Oe,{})})},Ne=function(){var e=(0,o.useSelector)(re),n=(0,o.useSelector)(ae),t=(0,o.useSelector)(ie),a=(0,o.useDispatch)();return(0,r.useEffect)((function(){a((0,se.yF)())}),[a]),(0,he.jsxs)(le,{children:[(0,he.jsx)(ve,{}),n&&!t&&(0,he.jsx)(ye.Z,{}),t&&(0,he.jsx)(be,{}),0!==e.length&&(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)(de,{children:"Contacts"}),(0,he.jsx)(Ce,{}),!n&&(0,he.jsx)(ke,{})]}),(0,he.jsx)(z,{})]})}}}]);
//# sourceMappingURL=651.f8e3f904.chunk.js.map