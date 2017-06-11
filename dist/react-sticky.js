!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("classnames"),require("css-detect"),require("next-dom-event"),require("noop"),require("object-assign"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["classnames","css-detect","next-dom-event","noop","object-assign","prop-types","react"],e):"object"==typeof exports?exports.ReactSticky=e(require("classnames"),require("css-detect"),require("next-dom-event"),require("noop"),require("object-assign"),require("prop-types"),require("react")):t.ReactSticky=e(t.classnames,t["css-detect"],t["next-dom-event"],t.noop,t["object-assign"],t["prop-types"],t.react)}(this,function(t,e,o,n,r,i,s){return function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var o={};return e.m=t,e.c=o,e.p="/",e(0)}([function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(1),i=n(r);e.default=i.default},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var o={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);return o}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,u,l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},p=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}();o(5);var f=o(12),d=n(f),h=o(8),y=n(h),v=o(11),m=n(v),b=o(6),g=n(b),k=o(7),x=n(k),w=o(9),j=(n(w),o(10)),O=n(j),_=(u=a=function(t){function e(t){i(this,e);var o=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o._onScroll=function(t){o.setState({hidden:o.scrollTop<=o._boundTop})},o.state={hidden:!0},o}return c(e,t),p(e,[{key:"componentWillMount",value:function(){this.supportSticky||(history.scrollRestoration="manual",this.attachEvents())}},{key:"componentDidMount",value:function(){this._root=this.refs.root,this._boundTop=this.bound.top}},{key:"attachEvents",value:function(){this.isWindow&&(this._scrollRes=y.default.on(window,"scroll",this._onScroll))}},{key:"render",value:function(){var t=this.props,e=t.className,o=(t.children,t.scroller,t.top,t.bottom,r(t,["className","children","scroller","top","bottom"])),n=this.supportSticky;return d.default.createElement("section",l({ref:"root"},o,{"data-support-sticky":n,className:(0,g.default)("react-sticky",e)}),this.child,!n&&this.clonedChild)}},{key:"isWindow",get:function(){return this.props.scroller===window}},{key:"supportSticky",get:function(){return!(0,x.default)("position","sticky")}},{key:"scrollTop",get:function(){return document.documentElement.scrollTop||document.body.scrollTop||0}},{key:"child",get:function(){var t=this.state.hidden,e=this.props.children,o=e.props,n=(o.style,o.top),i=o.bottom,s=r(o,["style","top","bottom"]),c=t?"relative":"fixed";return(0,f.cloneElement)(e,l({},s,{style:{position:c,top:n,bottom:i}}))}},{key:"clonedChild",get:function(){var t=this.props.children,e=t.props,o=(e.className,r(e,["className"]));return(0,f.cloneElement)(t,(0,O.default)(o,{hidden:this.state.hidden,className:(0,g.default)(t.props.className,"react-shadow-child")}))}},{key:"bound",get:function(){return this._root.getBoundingClientRect()}}]),e}(f.PureComponent),a.propTypes={className:m.default.string,scroller:m.default.object,top:m.default.string,bottom:m.default.string},a.defaultProps={scroller:window},u);e.default=_},function(t,e,o){e=t.exports=o(3)(),e.push([t.id,".react-sticky{width:100%}.react-sticky>*{background:#8e8e93;height:100px;top:0;width:100%}.react-sticky.is-sticky{position:-webkit-sticky;position:-moz-sticky;position:-ms-sticky;position:-o-sticky;position:sticky}.react-sticky.is-fixed{position:fixed}.react-sticky.is-relative{position:relative}.react-sticky[data-support-sticky=true]{position:-webkit-sticky;position:-moz-sticky;position:-ms-sticky;position:-o-sticky;position:sticky;top:0}.react-sticky[data-support-sticky=false]>*{width:100%}.react-shadow-child{opacity:0}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var o=this[e];o[2]?t.push("@media "+o[2]+"{"+o[1]+"}"):t.push(o[1])}return t.join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),t.push(s))}},t}},function(t,e,o){function n(t,e){for(var o=0;o<t.length;o++){var n=t[o],r=d[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(u(n.parts[i],e))}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(u(n.parts[i],e));d[n.id]={id:n.id,refs:1,parts:s}}}}function r(t){for(var e=[],o={},n=0;n<t.length;n++){var r=t[n],i=r[0],s=r[1],c=r[2],a=r[3],u={css:s,media:c,sourceMap:a};o[i]?o[i].parts.push(u):e.push(o[i]={id:i,parts:[u]})}return e}function i(t,e){var o=v(),n=g[g.length-1];if("top"===t.insertAt)n?n.nextSibling?o.insertBefore(e,n.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function c(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function a(t){var e=document.createElement("link");return e.rel="stylesheet",i(t,e),e}function u(t,e){var o,n,r;if(e.singleton){var i=b++;o=m||(m=c(e)),n=l.bind(null,o,i,!1),r=l.bind(null,o,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=a(e),n=f.bind(null,o),r=function(){s(o),o.href&&URL.revokeObjectURL(o.href)}):(o=c(e),n=p.bind(null,o),r=function(){s(o)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}function l(t,e,o,n){var r=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=k(e,r);else{var i=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function p(t,e){var o=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}function f(t,e){var o=e.css,n=e.sourceMap;n&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var r=new Blob([o],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var d={},h=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},y=h(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),v=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,b=0,g=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=y()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var o=r(t);return n(o,e),function(t){for(var i=[],s=0;s<o.length;s++){var c=o[s],a=d[c.id];a.refs--,i.push(a)}if(t){var u=r(t);n(u,e)}for(var s=0;s<i.length;s++){var a=i[s];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete d[a.id]}}}};var k=function(){var t=[];return function(e,o){return t[e]=o,t.filter(Boolean).join("\n")}}()},function(t,e,o){var n=o(2);"string"==typeof n&&(n=[[t.id,n,""]]);o(4)(n,{});n.locals&&(t.exports=n.locals)},function(e,o){e.exports=t},function(t,o){t.exports=e},function(t,e){t.exports=o},function(t,e){t.exports=n},function(t,e){t.exports=r},function(t,e){t.exports=i},function(t,e){t.exports=s}])});
//# sourceMappingURL=react-sticky.js.map