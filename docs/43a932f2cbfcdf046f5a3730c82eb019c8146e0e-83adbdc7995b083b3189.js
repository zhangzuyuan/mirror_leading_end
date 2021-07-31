/*! For license information please see 43a932f2cbfcdf046f5a3730c82eb019c8146e0e-83adbdc7995b083b3189.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[703],{2486:function(e,t,n){"use strict";n.d(t,{Z:function(){return R}});var r=n(2122),o=n(1253),a=n(7294),i=n(3935),s=n(5505),l=n(3110),c="undefined"!=typeof window?a.useLayoutEffect:a.useEffect;function u(e){var t=a.useRef(e);return c((function(){t.current=e})),a.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}var p=n(4621),d=n(4095),f=n(7329),m=n(9756),h=n(3349),v=n(3552),g=a.createContext(null);function y(e,t){var n=Object.create(null);return e&&a.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,a.isValidElement)(e)?t(e):e}(e)})),n}function b(e,t,n){return null!=n[t]?n[t]:e.props[t]}function x(e,t,n){var r=y(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),a=[];for(var i in e)i in t?a.length&&(o[i]=a,a=[]):a.push(i);var s={};for(var l in t){if(o[l])for(r=0;r<o[l].length;r++){var c=o[l][r];s[o[l][r]]=n(c)}s[l]=n(l)}for(r=0;r<a.length;r++)s[a[r]]=n(a[r]);return s}(t,r);return Object.keys(o).forEach((function(i){var s=o[i];if((0,a.isValidElement)(s)){var l=i in t,c=i in r,u=t[i],p=(0,a.isValidElement)(u)&&!u.props.in;!c||l&&!p?c||!l||p?c&&l&&(0,a.isValidElement)(u)&&(o[i]=(0,a.cloneElement)(s,{onExited:n.bind(null,s),in:u.props.in,exit:b(s,"exit",e),enter:b(s,"enter",e)})):o[i]=(0,a.cloneElement)(s,{in:!1}):o[i]=(0,a.cloneElement)(s,{onExited:n.bind(null,s),in:!0,exit:b(s,"exit",e),enter:b(s,"enter",e)})}})),o}var E=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},w=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind((0,h.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}(0,v.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,o=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,r=i,y(n.children,(function(e){return(0,a.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:b(e,"appear",n),enter:b(e,"enter",n),exit:b(e,"exit",n)})}))):x(e,o,i),firstRender:!1}},n.handleExited=function(e,t){var n=y(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,r.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,m.Z)(e,["component","childFactory"]),o=this.state.contextValue,i=E(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?a.createElement(g.Provider,{value:o},i):a.createElement(g.Provider,{value:o},a.createElement(t,r,i))},t}(a.Component);w.defaultProps={component:"div",childFactory:function(e){return e}};var Z=w,N="undefined"==typeof window?a.useEffect:a.useLayoutEffect;var M=function(e){var t=e.classes,n=e.pulsate,r=void 0!==n&&n,o=e.rippleX,i=e.rippleY,l=e.rippleSize,c=e.in,p=e.onExited,d=void 0===p?function(){}:p,f=e.timeout,m=a.useState(!1),h=m[0],v=m[1],g=(0,s.Z)(t.ripple,t.rippleVisible,r&&t.ripplePulsate),y={width:l,height:l,top:-l/2+i,left:-l/2+o},b=(0,s.Z)(t.child,h&&t.childLeaving,r&&t.childPulsate),x=u(d);return N((function(){if(!c){v(!0);var e=setTimeout(x,f);return function(){clearTimeout(e)}}}),[x,c,f]),a.createElement("span",{className:g,style:y},a.createElement("span",{className:b}))},k=a.forwardRef((function(e,t){var n=e.center,i=void 0!==n&&n,l=e.classes,c=e.className,u=(0,o.Z)(e,["center","classes","className"]),p=a.useState([]),d=p[0],m=p[1],h=a.useRef(0),v=a.useRef(null);a.useEffect((function(){v.current&&(v.current(),v.current=null)}),[d]);var g=a.useRef(!1),y=a.useRef(null),b=a.useRef(null),x=a.useRef(null);a.useEffect((function(){return function(){clearTimeout(y.current)}}),[]);var E=a.useCallback((function(e){var t=e.pulsate,n=e.rippleX,r=e.rippleY,o=e.rippleSize,i=e.cb;m((function(e){return[].concat((0,f.Z)(e),[a.createElement(M,{key:h.current,classes:l,timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o})])})),h.current+=1,v.current=i}),[l]),w=a.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=t.pulsate,o=void 0!==r&&r,a=t.center,s=void 0===a?i||t.pulsate:a,l=t.fakeElement,c=void 0!==l&&l;if("mousedown"===e.type&&g.current)g.current=!1;else{"touchstart"===e.type&&(g.current=!0);var u,p,d,f=c?null:x.current,m=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(s||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(m.width/2),p=Math.round(m.height/2);else{var h=e.touches?e.touches[0]:e,v=h.clientX,w=h.clientY;u=Math.round(v-m.left),p=Math.round(w-m.top)}if(s)(d=Math.sqrt((2*Math.pow(m.width,2)+Math.pow(m.height,2))/3))%2==0&&(d+=1);else{var Z=2*Math.max(Math.abs((f?f.clientWidth:0)-u),u)+2,N=2*Math.max(Math.abs((f?f.clientHeight:0)-p),p)+2;d=Math.sqrt(Math.pow(Z,2)+Math.pow(N,2))}e.touches?null===b.current&&(b.current=function(){E({pulsate:o,rippleX:u,rippleY:p,rippleSize:d,cb:n})},y.current=setTimeout((function(){b.current&&(b.current(),b.current=null)}),80)):E({pulsate:o,rippleX:u,rippleY:p,rippleSize:d,cb:n})}}),[i,E]),N=a.useCallback((function(){w({},{pulsate:!0})}),[w]),k=a.useCallback((function(e,t){if(clearTimeout(y.current),"touchend"===e.type&&b.current)return e.persist(),b.current(),b.current=null,void(y.current=setTimeout((function(){k(e,t)})));b.current=null,m((function(e){return e.length>0?e.slice(1):e})),v.current=t}),[]);return a.useImperativeHandle(t,(function(){return{pulsate:N,start:w,stop:k}}),[N,w,k]),a.createElement("span",(0,r.Z)({className:(0,s.Z)(l.root,c),ref:x},u),a.createElement(Z,{component:null,exit:!0},d))})),S=(0,p.Z)((function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}}),{flip:!1,name:"MuiTouchRipple"})(a.memo(k)),C=a.forwardRef((function(e,t){var n=e.action,c=e.buttonRef,p=e.centerRipple,f=void 0!==p&&p,m=e.children,h=e.classes,v=e.className,g=e.component,y=void 0===g?"button":g,b=e.disabled,x=void 0!==b&&b,E=e.disableRipple,w=void 0!==E&&E,Z=e.disableTouchRipple,N=void 0!==Z&&Z,M=e.focusRipple,k=void 0!==M&&M,C=e.focusVisibleClassName,R=e.onBlur,T=e.onClick,B=e.onFocus,P=e.onFocusVisible,I=e.onKeyDown,D=e.onKeyUp,V=e.onMouseDown,L=e.onMouseLeave,j=e.onMouseUp,W=e.onTouchEnd,z=e.onTouchMove,F=e.onTouchStart,A=e.onDragLeave,O=e.tabIndex,X=void 0===O?0:O,G=e.TouchRippleProps,K=e.type,H=void 0===K?"button":K,U=(0,o.Z)(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),Y=a.useRef(null);var $=a.useRef(null),q=a.useState(!1),_=q[0],J=q[1];x&&_&&J(!1);var Q=(0,d.Z)(),ee=Q.isFocusVisible,te=Q.onBlurVisible,ne=Q.ref;function re(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:N;return u((function(r){return t&&t(r),!n&&$.current&&$.current[e](r),!0}))}a.useImperativeHandle(n,(function(){return{focusVisible:function(){J(!0),Y.current.focus()}}}),[]),a.useEffect((function(){_&&k&&!w&&$.current.pulsate()}),[w,k,_]);var oe=re("start",V),ae=re("stop",A),ie=re("stop",j),se=re("stop",(function(e){_&&e.preventDefault(),L&&L(e)})),le=re("start",F),ce=re("stop",W),ue=re("stop",z),pe=re("stop",(function(e){_&&(te(e),J(!1)),R&&R(e)}),!1),de=u((function(e){Y.current||(Y.current=e.currentTarget),ee(e)&&(J(!0),P&&P(e)),B&&B(e)})),fe=function(){var e=i.findDOMNode(Y.current);return y&&"button"!==y&&!("A"===e.tagName&&e.href)},me=a.useRef(!1),he=u((function(e){k&&!me.current&&_&&$.current&&" "===e.key&&(me.current=!0,e.persist(),$.current.stop(e,(function(){$.current.start(e)}))),e.target===e.currentTarget&&fe()&&" "===e.key&&e.preventDefault(),I&&I(e),e.target===e.currentTarget&&fe()&&"Enter"===e.key&&!x&&(e.preventDefault(),T&&T(e))})),ve=u((function(e){k&&" "===e.key&&$.current&&_&&!e.defaultPrevented&&(me.current=!1,e.persist(),$.current.stop(e,(function(){$.current.pulsate(e)}))),D&&D(e),T&&e.target===e.currentTarget&&fe()&&" "===e.key&&!e.defaultPrevented&&T(e)})),ge=y;"button"===ge&&U.href&&(ge="a");var ye={};"button"===ge?(ye.type=H,ye.disabled=x):("a"===ge&&U.href||(ye.role="button"),ye["aria-disabled"]=x);var be=(0,l.Z)(c,t),xe=(0,l.Z)(ne,Y),Ee=(0,l.Z)(be,xe),we=a.useState(!1),Ze=we[0],Ne=we[1];a.useEffect((function(){Ne(!0)}),[]);var Me=Ze&&!w&&!x;return a.createElement(ge,(0,r.Z)({className:(0,s.Z)(h.root,v,_&&[h.focusVisible,C],x&&h.disabled),onBlur:pe,onClick:T,onFocus:de,onKeyDown:he,onKeyUp:ve,onMouseDown:oe,onMouseLeave:se,onMouseUp:ie,onDragLeave:ae,onTouchEnd:ce,onTouchMove:ue,onTouchStart:le,ref:Ee,tabIndex:x?-1:X},ye,U),m,Me?a.createElement(S,(0,r.Z)({ref:$,center:f},G)):null)})),R=(0,p.Z)({root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},{name:"MuiButtonBase"})(C)},838:function(e,t,n){"use strict";var r=n(1253),o=n(2122),a=n(7294),i=n(5505),s=n(4621),l=[0,1,2,3,4,5,6,7,8,9,10],c=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var p=a.forwardRef((function(e,t){var n=e.alignContent,s=void 0===n?"stretch":n,l=e.alignItems,c=void 0===l?"stretch":l,u=e.classes,p=e.className,d=e.component,f=void 0===d?"div":d,m=e.container,h=void 0!==m&&m,v=e.direction,g=void 0===v?"row":v,y=e.item,b=void 0!==y&&y,x=e.justify,E=void 0===x?"flex-start":x,w=e.lg,Z=void 0!==w&&w,N=e.md,M=void 0!==N&&N,k=e.sm,S=void 0!==k&&k,C=e.spacing,R=void 0===C?0:C,T=e.wrap,B=void 0===T?"wrap":T,P=e.xl,I=void 0!==P&&P,D=e.xs,V=void 0!==D&&D,L=e.zeroMinWidth,j=void 0!==L&&L,W=(0,r.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),z=(0,i.Z)(u.root,p,h&&[u.container,0!==R&&u["spacing-xs-".concat(String(R))]],b&&u.item,j&&u.zeroMinWidth,"row"!==g&&u["direction-xs-".concat(String(g))],"wrap"!==B&&u["wrap-xs-".concat(String(B))],"stretch"!==c&&u["align-items-xs-".concat(String(c))],"stretch"!==s&&u["align-content-xs-".concat(String(s))],"flex-start"!==E&&u["justify-xs-".concat(String(E))],!1!==V&&u["grid-xs-".concat(String(V))],!1!==S&&u["grid-sm-".concat(String(S))],!1!==M&&u["grid-md-".concat(String(M))],!1!==Z&&u["grid-lg-".concat(String(Z))],!1!==I&&u["grid-xl-".concat(String(I))]);return a.createElement(f,(0,o.Z)({className:z,ref:t},W))})),d=(0,s.Z)((function(e){return(0,o.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return l.forEach((function(r){var o=e.spacing(r);0!==o&&(n["spacing-".concat(t,"-").concat(r)]={margin:"-".concat(u(o,2)),width:"calc(100% + ".concat(u(o),")"),"& > $item":{padding:u(o,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};c.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:o,flexGrow:0,maxWidth:o}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,o.Z)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(p);t.Z=d},3110:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294);function o(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function a(e,t){return r.useMemo((function(){return null==e&&null==t?null:function(n){o(e,n),o(t,n)}}),[e,t])}},4095:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7294),o=n(3935),a=!0,i=!1,s=null,l={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(e){e.metaKey||e.altKey||e.ctrlKey||(a=!0)}function u(){a=!1}function p(){"hidden"===this.visibilityState&&i&&(a=!0)}function d(e){var t,n,r,o=e.target;try{return o.matches(":focus-visible")}catch(i){}return a||(n=(t=o).type,!("INPUT"!==(r=t.tagName)||!l[n]||t.readOnly)||"TEXTAREA"===r&&!t.readOnly||!!t.isContentEditable)}function f(){i=!0,window.clearTimeout(s),s=window.setTimeout((function(){i=!1}),100)}function m(){return{isFocusVisible:d,onBlurVisible:f,ref:r.useCallback((function(e){var t,n=o.findDOMNode(e);null!=n&&((t=n.ownerDocument).addEventListener("keydown",c,!0),t.addEventListener("mousedown",u,!0),t.addEventListener("pointerdown",u,!0),t.addEventListener("touchstart",u,!0),t.addEventListener("visibilitychange",p,!0))}),[])}}},5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},7408:function(e,t,n){"use strict";var r=n(2122),o=n(9756),a=n(5900),i=n.n(a),s=n(7294),l=n(9541),c=["xl","lg","md","sm","xs"],u=s.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,u=e.as,p=void 0===u?"div":u,d=(0,o.Z)(e,["bsPrefix","className","as"]),f=(0,l.vE)(n,"col"),m=[],h=[];return c.forEach((function(e){var t,n,r,o=d[e];if(delete d[e],"object"==typeof o&&null!=o){var a=o.span;t=void 0===a||a,n=o.offset,r=o.order}else t=o;var i="xs"!==e?"-"+e:"";t&&m.push(!0===t?""+f+i:""+f+i+"-"+t),null!=r&&h.push("order"+i+"-"+r),null!=n&&h.push("offset"+i+"-"+n)})),m.length||m.push(f),s.createElement(p,(0,r.Z)({},d,{ref:t,className:i().apply(void 0,[a].concat(m,h))}))}));u.displayName="Col",t.Z=u},6187:function(e,t,n){"use strict";var r=n(2122),o=n(9756),a=n(5900),i=n.n(a),s=n(7294),l=n(9541),c=s.forwardRef((function(e,t){var n=e.bsPrefix,a=e.fluid,c=e.as,u=void 0===c?"div":c,p=e.className,d=(0,o.Z)(e,["bsPrefix","fluid","as","className"]),f=(0,l.vE)(n,"container"),m="string"==typeof a?"-"+a:"-fluid";return s.createElement(u,(0,r.Z)({ref:t},d,{className:i()(p,a?""+f+m:f)}))}));c.displayName="Container",c.defaultProps={fluid:!1},t.Z=c},994:function(e,t,n){"use strict";var r=n(2122),o=n(9756),a=n(5900),i=n.n(a),s=n(7294),l=n(9541),c=["xl","lg","md","sm","xs"],u=s.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,u=e.noGutters,p=e.as,d=void 0===p?"div":p,f=(0,o.Z)(e,["bsPrefix","className","noGutters","as"]),m=(0,l.vE)(n,"row"),h=m+"-cols",v=[];return c.forEach((function(e){var t,n=f[e];delete f[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"==typeof n?n.cols:n)&&v.push(""+h+r+"-"+t)})),s.createElement(d,(0,r.Z)({ref:t},f,{className:i().apply(void 0,[a,m,u&&"no-gutters"].concat(v))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.Z=u},9541:function(e,t,n){"use strict";n.d(t,{vE:function(){return a}});var r=n(7294),o=r.createContext({});o.Consumer,o.Provider;function a(e,t){var n=(0,r.useContext)(o);return e||n[t]||t}},2353:function(e,t,n){"use strict";n.d(t,{Z:function(){return W}});var r=n(7294),o=n(2122),a=n(1253),i=n(5505),s=n(4621),l=n(1664),c=r.forwardRef((function(e,t){var n=e.classes,s=e.className,l=e.component,c=void 0===l?"div":l,u=e.square,p=void 0!==u&&u,d=e.elevation,f=void 0===d?1:d,m=e.variant,h=void 0===m?"elevation":m,v=(0,a.Z)(e,["classes","className","component","square","elevation","variant"]);return r.createElement(c,(0,o.Z)({className:(0,i.Z)(n.root,s,"outlined"===h?n.outlined:n["elevation".concat(f)],!p&&n.rounded),ref:t},v))})),u=(0,s.Z)((function(e){var t={};return e.shadows.forEach((function(e,n){t["elevation".concat(n)]={boxShadow:e}})),(0,o.Z)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(c),p=r.forwardRef((function(e,t){var n=e.classes,s=e.className,c=e.color,p=void 0===c?"primary":c,d=e.position,f=void 0===d?"fixed":d,m=(0,a.Z)(e,["classes","className","color","position"]);return r.createElement(u,(0,o.Z)({square:!0,component:"header",elevation:4,className:(0,i.Z)(n.root,n["position".concat((0,l.Z)(f))],n["color".concat((0,l.Z)(p))],s,"fixed"===f&&"mui-fixed"),ref:t},m))})),d=(0,s.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(p),f=n(6156),m=r.forwardRef((function(e,t){var n=e.classes,s=e.className,l=e.component,c=void 0===l?"div":l,u=e.disableGutters,p=void 0!==u&&u,d=e.variant,f=void 0===d?"regular":d,m=(0,a.Z)(e,["classes","className","component","disableGutters","variant"]);return r.createElement(c,(0,o.Z)({className:(0,i.Z)(n.root,n[f],s,!p&&n.gutters),ref:t},m))})),h=(0,s.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:(0,f.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(m),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},g=r.forwardRef((function(e,t){var n=e.align,s=void 0===n?"inherit":n,c=e.classes,u=e.className,p=e.color,d=void 0===p?"initial":p,f=e.component,m=e.display,h=void 0===m?"initial":m,g=e.gutterBottom,y=void 0!==g&&g,b=e.noWrap,x=void 0!==b&&b,E=e.paragraph,w=void 0!==E&&E,Z=e.variant,N=void 0===Z?"body1":Z,M=e.variantMapping,k=void 0===M?v:M,S=(0,a.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),C=f||(w?"p":k[N]||v[N])||"span";return r.createElement(C,(0,o.Z)({className:(0,i.Z)(c.root,u,"inherit"!==N&&c[N],"initial"!==d&&c["color".concat((0,l.Z)(d))],x&&c.noWrap,y&&c.gutterBottom,w&&c.paragraph,"inherit"!==s&&c["align".concat((0,l.Z)(s))],"initial"!==h&&c["display".concat((0,l.Z)(h))]),ref:t},S))})),y=(0,s.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(g),b=n(4095),x=n(3110),E=r.forwardRef((function(e,t){var n=e.classes,s=e.className,c=e.color,u=void 0===c?"primary":c,p=e.component,d=void 0===p?"a":p,f=e.onBlur,m=e.onFocus,h=e.TypographyClasses,v=e.underline,g=void 0===v?"hover":v,E=e.variant,w=void 0===E?"inherit":E,Z=(0,a.Z)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),N=(0,b.Z)(),M=N.isFocusVisible,k=N.onBlurVisible,S=N.ref,C=r.useState(!1),R=C[0],T=C[1],B=(0,x.Z)(t,S);return r.createElement(y,(0,o.Z)({className:(0,i.Z)(n.root,n["underline".concat((0,l.Z)(g))],s,R&&n.focusVisible,"button"===d&&n.button),classes:h,color:u,component:d,onBlur:function(e){R&&(k(),T(!1)),f&&f(e)},onFocus:function(e){M(e)&&T(!0),m&&m(e)},ref:B,variant:w},Z))})),w=(0,s.Z)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(E),Z=n(7627),N=n(8626);var M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,Z.Z)(e,(0,o.Z)({defaultTheme:N.Z},t))},k=n.p+"static/logo1-04f6b19bc0e8db31286da6a83d5e9f71.png",S=M((function(e){return{appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - 240px)",transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},toolbar:{flexWrap:"wrap"},toolbarTitle:{flexGrow:1},link:{margin:e.spacing(1,1.5),color:"#9c0c13"}}}));function C(){var e=S();return r.createElement(d,{position:"absolute",color:"default",className:e.appBar},r.createElement(h,{className:e.toolbar},r.createElement("img",{src:k,alt:"",style:{maxWidth:200,height:50}}),r.createElement(y,{variant:"h6",color:"inherit",noWrap:!0,className:e.toolbarTitle}),r.createElement("nav",null,r.createElement(w,{variant:"button",color:"textPrimary",href:"#",className:e.link},"HOME"),r.createElement(w,{variant:"button",color:"textPrimary",href:"#",className:e.link},"BLOG"),r.createElement(w,{variant:"button",color:"textPrimary",href:"#",className:e.link},"MIRRORS"),r.createElement(w,{variant:"button",color:"textPrimary",href:"#",className:e.link},"HELP"))))}var R=n(1293),T=n(838),B=n.p+"static/logo-2deb228628a1b5de3dbdb75b924b36a2.png",P=M((function(e){return{footer:{bottom:0,padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]},typographyBody:{fontSize:12},typographyTitle:{},typographyFooter:{}}}));function I(){var e=P();return r.createElement("footer",{position:"absolute",className:e.footer},r.createElement(R.Z,{maxWidth:"sm"},r.createElement(T.Z,{container:!0,spacing:2},r.createElement(T.Z,{item:!0,sm:!0},r.createElement(y,{variant:"h4",className:e.typographyTitle},"山东大学镜像站"),r.createElement(y,{variant:"body",className:e.typographyBody},"山东大学镜像站是由山东大学（青岛）学生oops计算机社团在山东大学（青岛）信息化工作办公室指导下建立，为技术爱好者、工程师、科研人员等提供开源软件镜像服务。"),r.createElement(T.Z,{item:!0,sm:!0},r.createElement(y,{className:e.typographyFooter},"相关链接")),r.createElement(T.Z,{item:!0,sm:!0},r.createElement(y,{className:e.typographyFooter},"山东大学")),r.createElement(T.Z,{item:!0,sm:!0},r.createElement(y,{className:e.typographyFooter},"XXXXX")),r.createElement(T.Z,{item:!0,sm:!0},r.createElement(y,{className:e.typographyFooter},"山东大学（青岛）学生oop计算机社团"))),r.createElement(T.Z,{item:!0,sm:!0},r.createElement("img",{src:B,alt:"",style:{maxWidth:200,height:"auto"}})))))}function D(e,t,n,r,o,a){return{id:e,date:t,name:n,shipTo:r,paymentMethod:o,amount:a}}D(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA ⠀•••• 3719",312.44),D(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA ⠀•••• 2574",866.99),D(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC ⠀•••• 1253",100.81),D(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX ⠀•••• 2000",654.39),D(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA ⠀•••• 5919",212.79);M((function(e){return{seeMore:{marginTop:e.spacing(3)}}}));M((function(e){return{}}));M((function(e){return{content:{marginTop:e.spacing(20),marginBottom:e.spacing(5),marginLeft:e.spacing(2),marginRight:e.spacing(20)}}}));var V=n(6187),L=n(994),j=M((function(e){return{Layout:{marginTop:100}}}));function W(e){e.location;var t=e.children,n=j();return r.createElement("div",null,r.createElement(r.Fragment,null,r.createElement(C,null),r.createElement(V.Z,{className:n.Layout},r.createElement(L.Z,null,t)),r.createElement(I,null)))}}}]);
//# sourceMappingURL=43a932f2cbfcdf046f5a3730c82eb019c8146e0e-83adbdc7995b083b3189.js.map