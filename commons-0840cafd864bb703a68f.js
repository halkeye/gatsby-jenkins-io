(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,c,l,u;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(!i(e[c],o[c]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!i(c.value[1],o.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!i(e[l[c]],o[l[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";n.d(t,{q:function(){return we}});var r,a,i,o,s=n(9324),c=n.n(s),l=n(4839),u=n.n(l),m=n(2993),M=n.n(m),p=n(7294),d=n(6494),w=n.n(d),j="bodyAttributes",N="htmlAttributes",f="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},y=(Object.keys(g).map((function(e){return g[e]})),"charset"),h="cssText",T="href",E="http-equiv",L="innerHTML",I="itemprop",A="name",D="property",S="rel",k="src",C="target",b={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},v="defaultTitle",O="defer",x="encodeSpecialCharacters",z="onChangeClientState",U="titleTemplate",Y=Object.keys(b).reduce((function(e,t){return e[b[t]]=t,e}),{}),Q=[g.NOSCRIPT,g.SCRIPT,g.STYLE],P="data-react-helmet",R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},J=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},B=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=X(e,g.TITLE),n=X(e,U);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,v);return t||r||void 0},F=function(e){return X(e,z)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},q=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},K=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+R(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],c=s.toLowerCase();-1===t.indexOf(c)||n===S&&"canonical"===e[n].toLowerCase()||c===S&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(s)||s!==L&&s!==h&&s!==I||(n=s)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var s=i[o],c=w()({},r[s],a[s]);r[s]=c}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,m=e.title,M=e.titleAttributes;ce(g.BODY,r),ce(g.HTML,a),se(m,M);var p={baseTag:le(g.BASE,n),linkTags:le(g.LINK,i),metaTags:le(g.META,o),noscriptTags:le(g.NOSCRIPT,s),scriptTags:le(g.SCRIPT,l),styleTags:le(g.STYLE,u)},d={},w={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(w[e]=p[e].oldTags)})),t&&t(),c(e,d,w)},oe=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(g.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(P),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var c=o[s],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var m=i.length-1;m>=0;m--)n.removeAttribute(i[m]);a.length===i.length?n.removeAttribute(P):n.getAttribute(P)!==o.join(",")&&n.setAttribute(P,o.join(","))}},le=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===L)n.innerHTML=t.innerHTML;else if(r===h)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(P,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[b[n]||n]=e[n],t}),t)},Me=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[P]=!0,a=me(n,r),[p.createElement(g.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+B(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+B(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case j:case N:return{toComponent:function(){return me(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[P]=!0,r);return Object.keys(t).forEach((function(e){var n=b[e]||e;if(n===L||n===h){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),p.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===L||e===h)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+B(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===Q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,m=void 0===u?"":u,M=e.titleAttributes;return{base:Me(g.BASE,t,r),bodyAttributes:Me(j,n,r),htmlAttributes:Me(N,a,r),link:Me(g.LINK,i,r),meta:Me(g.META,o,r),noscript:Me(g.NOSCRIPT,s,r),script:Me(g.SCRIPT,c,r),style:Me(g.STYLE,l,r),title:Me(g.TITLE,{title:m,titleAttributes:M},r)}},de=u()((function(e){return{baseTag:q([T,C],e),bodyAttributes:V(j,e),defer:X(e,O),encode:X(e,x),htmlAttributes:V(N,e),linkTags:K(g.LINK,[S,T],e),metaTags:K(g.META,[A,y,E,D,I],e),noscriptTags:K(g.NOSCRIPT,[L],e),onChangeClientState:F(e),scriptTags:K(g.SCRIPT,[k,L],e),styleTags:K(g.STYLE,[h],e),title:W(e),titleAttributes:V(f,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),we=(a=de,o=i=function(e){function t(){return G(this,t),Z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!M()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return H({},r,((t={})[n.type]=[].concat(r[n.type]||[],[H({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case g.TITLE:return H({},a,((t={})[r.type]=o,t.titleAttributes=H({},i),t));case g.BODY:return H({},a,{bodyAttributes:H({},i)});case g.HTML:return H({},a,{htmlAttributes:H({},i)})}return H({},a,((n={})[r.type]=H({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach((function(t){var r;n=H({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Y[n]||n]=e[n],t}),t)}(_(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=_(e,["children"]),r=H({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.createElement(a,r)},J(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(p.Component),i.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);we.renderStatic=we.rewind},4839:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),m.canUseDOM?t(c):n&&(c=n(c))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(m,"canUseDOM",s),m}}},9509:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(5414),i=n(5444),o=function(e){var t,n=e.children,o=(0,i.useStaticQuery)("3649515864");return r.createElement("div",null,r.createElement(a.q,null,r.createElement("title",null,(null===(t=o.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"),r.createElement("meta",{content:"text/html; charset=UTF-8",httpEquiv:"Content-Type"}),r.createElement("meta",{charset:"utf-8"}),r.createElement("meta",{content:"width=device-width, initial-scale=1",name:"viewport"}),r.createElement("meta",{content:"ie=edge",httpEquiv:"x-ua-compatible"}),r.createElement("link",{href:"https://www.jenkins.io/favicon.ico",rel:"shortcut icon",type:"image/x-icon"}),r.createElement("link",{href:"https://www.jenkins.io/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),r.createElement("link",{href:"https://www.jenkins.io/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),r.createElement("link",{href:"https://www.jenkins.io/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),r.createElement("link",{href:"/site.webmanifest",rel:"manifest"}),r.createElement("link",{color:"#5bbad5",href:"https://www.jenkins.io/safari-pinned-tab.svg",rel:"mask-icon"}),r.createElement("meta",{content:"#2b5797",name:"msapplication-TileColor"}),r.createElement("meta",{content:"#ffffff",name:"theme-color"}),r.createElement("meta",{content:"summary_large_image",name:"twitter:card"}),r.createElement("meta",{content:"@JenkinsCI",name:"twitter:site"}),r.createElement("meta",{content:"@JenkinsCI",name:"twitter:creator"}),r.createElement("meta",{content:"article",property:"og:type"}),r.createElement("meta",{content:"https:/www.jenkins.io/template/",property:"og:url"}),r.createElement("style",null,"#grid-box { position: relative } "),r.createElement("style",null,"html { min-height:100%; position: relative; }")),r.createElement("script",{src:"https://www.jenkins.io/assets/bower/jquery/jquery.min.js",dangerouslySetInnerHTML:{__html:[]}}),r.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark top bg-dark fixed-top",id:"ji-toolbar"},r.createElement("a",{className:"navbar-brand",href:"https://www.jenkins.io/"},"Jenkins"),r.createElement("button",{className:"navbar-toggler","data-target":"#CollapsingNavbar","data-toggle":"collapse",type:"button"},r.createElement("span",{className:"navbar-toggler-icon"})),r.createElement("div",{className:"collapse navbar-collapse",id:"CollapsingNavbar"},r.createElement("ul",{className:"nav navbar-nav mr-auto"},r.createElement("li",{className:"nav-item dropdown"},r.createElement("button",{type:"button","aria-expanded":"false","aria-haspopup":"true",className:"nav-link dropdown-toggle","data-toggle":"dropdown"},r.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHJvbGU9ImltZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9Ii0zLjIzIDQ0Ljc3IDM2Mi43MCAyNzEuOTUiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjM1OS43NjUiIHgyPSIxMDQuMDgyIiB5MT0iMTM0LjI5NSIgeTI9IjEyNC41NzciIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA0MzkuMDY4KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2VkMWMyNCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Y3OTQxZCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iMzU1LjIwMiIgeDI9Ijk5LjUxOSIgeTE9IjI1NC40NjciIHkyPSIyNDQuNzQ5IiB4bGluazpocmVmPSIjYSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjE4My45MDMiIHgyPSIxMC42MTIiIHkxPSIyMjcuNTk4IiB5Mj0iMjIxLjAyMyIgeGxpbms6aHJlZj0iI2EiLz48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgxPSIzNjcuMTE5IiB4Mj0iMTU3Ljk5NSIgeTE9IjI2NS4zMTEiIHkyPSIyNTcuMDkxIiB4bGluazpocmVmPSIjYSIvPjwvZGVmcz48cGF0aCBmaWxsPSIjYzQ5YTZjIiBkPSJNMjMxLjUyIDMwOS4yNzhjMi40ODMtLjMzMiA0Ljg5NS0uNzcgNy4yNTUtMS4zMjlzNC42NDktMS4yMDYgNi45OTEtMS45NTdjMTMuNDk0LTQuNTggMjUuMTg3LTEyLjk1MiAzNi4zNzQtMjQuNTkzbC0uMTQtLjE3NWMtMTQuOTQ0IDE1LjQ4Ni0zMC42OTMgMjUuMzQ0LTUwLjQ4IDI4LjA1NHoiLz48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMjI0LjIzMiAzMDkuOTZoLjMzMmMxLjA4NCAwIDIuMTUtLjE0IDMuMjE2LS4yMjhhOTMuODQ0IDkzLjg0NCAwIDAgMS0zLjIzMy4yMjd6Ii8+PHBhdGggZmlsbD0idXJsKCNiKSIgZD0iTTI4NC42OTIgMTg3LjE4N2wtLjEyMi4xOTIuMTIyLS4xOTJ6Ii8+PHBhdGggZmlsbD0idXJsKCNjKSIgZD0iTTE0Ni4xNDUgMjMxLjg0N2ExNTAuODQ0IDE1MC44NDQgMCAwIDEtMTIuOTcgMTUuODYyYy03LjU4MiA3Ljg4OS0xNS41MDcgMTMuNTYzLTI0LjY1MiAxNi42NjdhNDcuODMyIDQ3LjgzMiAwIDAgMS00LjczOCAxLjMyNiA1Ni45NTkgNTYuOTU5IDAgMCAxLTQuOTE2LjkgMzguMzIgMzguMzIgMCAwIDEtMS42ODIuMjE0bC0uOTEyLjA4M2MtLjcyMy4wNTktMS40NDUuMTE4LTIuMTguMTU0aC0zLjA2OGE0Mi4zMjUgNDIuMzI1IDAgMCAxLTkuMTkyLTEuMDQzIDQ5Ljk3NyA0OS45NzcgMCAwIDEtNi43NjQtMi4wMDIgNDMuMDk3IDQzLjA5NyAwIDAgMS00LjUyNS0xLjk1NGMtMS40OTMtLjc3LTIuOTYxLTEuNTE2LTQuNDA3LTIuMzdhNTkuNSA1OS41IDAgMCAxLTE3LjEwNS0xNS4zOTkgNTkuNzE0IDU5LjcxNCAwIDAgMS0yLjkxNC00LjMxMSA1My4wOSA1My4wOSAwIDAgMS0xLjI5MS0yLjI2MyA1MS45ODUgNTEuOTg1IDAgMCAxLTIuMjYzLTQuNzM4IDQ2LjcyIDQ2LjcyIDAgMCAxIDAtMzYuNDI2IDUxLjk4NiA1MS45ODYgMCAwIDEgMi4yNjMtNC43MzggNTQuMTQgNTQuMTQgMCAwIDEgMS4yOTEtMi4yNjMgNTkuNzQyIDU5Ljc0MiAwIDAgMSAyLjkxNC00LjMxMSA1OS43MTQgNTkuNzE0IDAgMCAxIDE3LjEwNS0xNS40IDYwLjgyOCA2MC44MjggMCAwIDEgNC40MDctMi4zNjlxMi4yMTctMSA0LjUyNS0xLjc3N2E0OS45NzYgNDkuOTc2IDAgMCAxIDYuOTA2LTIuMDczIDQyLjMyNSA0Mi4zMjUgMCAwIDEgOS4xOTItMS4wNDJoMy4xMjhjLjcyMiAwIDEuNDQ1LjA5NCAyLjE1NS4xNTRsMS4wNDMuMTA2IDEuMDE5LjExOWMxLjguMjM3IDMuNTUzLjU1NyA1LjI3MS45Ni44NTMuMiAxLjY5NC40MjYgMi41MjMuNjYzYTUxLjE4NiA1MS4xODYgMCAwIDEgMTEuODQ2IDUuMTc2IDU5LjY0NSA1OS42NDUgMCAwIDEgNC4zOTUgMi44OSA3NC40ODUgNzQuNDg1IDAgMCAxIDguMzg2IDcuMTA4cTIuMDM4IDEuOTkgNC4wNjMgNC4xOTNsLjA4My0uMTNhMTU5LjM5NSAxNTkuMzk1IDAgMCAxIDExLjA2NCAxMy45NDJjNS40MzctOC41NzYgMTMuNjU4LTIxLjQ2NCAxNi41ODQtMjUuNzQgMS4xODUtMS43MTggMi4zNy0zLjQ2IDMuNjYtNS4yMTItMTMuNTQtMTYuNTEzLTI5LjgyNy0zMC4yMy01MS41ODctMzYuMDgyaC0uMTU0YTg5LjM5NyA4OS4zOTcgMCAwIDAtMy4xODctLjc5NGwtLjQ1LS4xMDdhOTIuNTY1IDkyLjU2NSAwIDAgMC0zLjE1MS0uNjI3bC0uNjI4LS4xMTlhODAuNTc4IDgwLjU3OCAwIDAgMC0zLjc0My0uNTY5aC0uMTQyYTU4LjI5IDU4LjI5IDAgMCAwLTIuMDczLS4yMzZoLS4zOTFsLTEuODcyLS4xNjZoLS41NjhsLTEuNzU0LS4xMTloLS42NzVsLTEuNzc3LS4wN2gtMy4xMTVjLTQ2LjQ0Ny0uMjUtODcuMTI1IDQwLjQ3Ni04Ny4xMjUgODYuOTExczQwLjcyNSA4Ny4xNzMgODcuMTcyIDg3LjE3M2gzLjE0bDEuNzI5LS4wNzFoLjczNGwxLjY3LS4wOTVoLjY3NmwxLjcwNi0uMTU0aC41NjhsMS44MTMtLjIxMy40MTQtLjA2IDEuOTY3LS4yNzJoLjIxM2ExMjUuOTEgMTI1LjkxIDAgMCAwIDMuNTUzLS42MjhsLjY1Mi0uMTQyYy45Ni0uMjAxIDEuOTA3LS40MTUgMi44NTUtLjY0bC41OC0uMTQyYTg2LjY2IDg2LjY2IDAgMCAwIDMuMDA5LS44MTdsLjIzNy0uMDcxYzIwLjczLTYuMDc3IDM2LjQyNS0xOS4zOTIgNDkuNTUtMzUuMjc3LTIuMDM3LTMuMDY4LTMuNC01LjM2Ni00LjAzOS02LjQ4eiIvPjxwYXRoIGZpbGw9InVybCgjZCkiIGQ9Ik0zMTguMDUgNTEuNzMzdjk0LjY2YTg1LjUxNCA4NS41MTQgMCAwIDAtNTIuNTk1LTE4LjcyOWgtMy4xMTVsLTEuNzc3LjA3Mi0uNy4wNDctMS43NTIuMTE4aC0uNTY5bC0xLjg3MS4xNjZoLS4zOTFjLS43LjA3MS0xLjM4Ni4xNDItMi4wNzMuMjM3aC0uMTU0Yy0xLjI1Ni4xNTQtMi41LjM1NS0zLjczMi41NjlsLS42MjguMTE4Yy0xLjA2Ni4xOS0yLjEwOC40MDMtMy4xNS42MjhsLS40NS4xMDdjLTMwLjM1IDYuODU4LTUwLjMzMyAyOC44MDgtNjYuODIyIDUyLjgyLS43IDEuMDE4LTEuMzUgMi4wNDktMi4wMzggMy4wNjgtMi4yNSAzLjQyMy01LjQ2IDguNDIyLTguNjM1IDEzLjM5Ny00LjE3IDYuNTI3LTguMjkyIDEzLjAzLTkuOTM5IDE1LjY2bDIwLjYyNCAzMi4xMzdzMjEuOTk3IDQwLjQ2NSA2MS42OCA1MS40ODJsLjIzNy4wN2MuOTk1LjI5NyAyLjAwMi41NTggMy4wMDkuODE4bC41OC4xNDJjLjkzNi4yMzcgMS44OTYuNDM5IDIuODU1LjY0bC42NTIuMTQyYzEuMTg0LjIyNSAyLjM2OS40MzkgMy41NTMuNjI4aC4yMTRsMS45NjYuMjczLjQxNS4wNTkgMS44MTIuMjEzaC41NjlsMS43MDUuMTU0aC42NzZsMS42Ny4wOTVoLjczNGwxLjczLjA3aDMuMTM5YzU0LjcwMyAwIDg2LjM1NS0zMC45NjQgODcuMTQ5LTg1LjA2M1Y1MS43MzN6bS01Mi41OTUgMjE1LjQwM2gtMy4wNjhjLS43MzQgMC0xLjQ1Ny0uMDk1LTIuMTgtLjE1NGwtLjkxMi0uMDgzYy0uNTY4LS4wNi0xLjEyNS0uMTMtMS42ODItLjIxM2E0OS4wNzcgNDkuMDc3IDAgMCAxLTkuNTcxLTIuMjc1IDQ5LjYxMiA0OS42MTIgMCAwIDEtNi42MzQtMi44MyA1NS43OTIgNTUuNzkyIDAgMCAxLTYuMjU0LTMuNzY4IDYzLjA2OCA2My4wNjggMCAwIDEtMy4wMDktMi4yMTUgODIuMzk5IDgyLjM5OSAwIDAgMS04LjY4My03LjkyNWwtLjA5NS4xMTljLTEuMjU1LTEuMzAzLTIuNDg3LTIuNjktMy43MzEtNC4xMS0uMTU0LS4xNjctLjI5Ni0uMzU2LS40NS0uNTM0LS42MjgtLjcyMi0xLjI1Ni0xLjQ0NS0xLjg4NC0yLjIxNXMtMS4xMjUtMS4zOTgtMS42ODItMi4wOTctLjg4OC0xLjEwMS0xLjMzOC0xLjY4MmExODQuNDY3IDE4NC40NjcgMCAwIDEtNi4wNTMtOC4yOTJjLS43LS45OTUtMS4zOTgtMi4wMjUtMi4xMDktMy4wNTYtLjM3OS0uNTY5LS43Ny0xLjE4NC0xLjE4NS0xLjczLS42NzUtMS4wMTgtMS4zNjItMi4wMTMtMi4wNDktMy4wNTZsLS4zNTUtLjU0NWMtMS4xODUtMS44MTItMi4zNy0zLjY4NC0zLjY0OS01LjYwM3EyLjk1LTQuNjA4IDUuODE3LTguODZjMS45MDctMi44MzEgMy43OS01LjU1NiA1LjY2Mi04LjEzOHMzLjcyLTUuMDQ2IDUuNTkxLTcuMzggMy43Mi00LjUyNSA1LjYwMy02LjU4NnEyLjAyNi0yLjIwMyA0LjA2My00LjE5NGMxLjM3NC0xLjMzOCAyLjc0OC0yLjU5NCA0LjE1OC0zLjc3OHMyLjgwNy0yLjI4NyA0LjI1Mi0zLjMyOWE1Ny41OTQgNTcuNTk0IDAgMCAxIDcuNzQ4LTQuNjJjLjMzMS0uMTY2LjY2My0uMzY3IDEuMDA2LS41MzNsLjIyNi0uMTE4YzEuNDEtLjY1MiAyLjg0My0xLjE4NSA0LjMtMS43M2wuNDg1LS4yMDFjLjI3My0uMDgzLjU1Ny0uMTQyLjgzLS4yMzdhNDQuOTQzIDQ0Ljk0MyAwIDAgMSAzLjM0LS45NDhsMS4zNzQtLjM0M2E2MC43OTggNjAuNzk4IDAgMCAxIDQuNzM4LS44NDFsMS4wMTktLjExOSAxLjA0Mi0uMTA2Yy43MTEgMCAxLjQzNC0uMTE5IDIuMTU2LS4xNTRoMy4xMjhhNDIuNDMxIDQyLjQzMSAwIDAgMSA0LjU3Mi4yNiA0OC4wMTEgNDguMDExIDAgMCAxIDYuOTMgMS4zNWMxLjU0LjQyNyAzLjA4LjkyNSA0LjU5NiAxLjUwNWE0OC43MjQgNDguNzI0IDAgMCAxIDQuNTI1IDEuOTU1YzEuNDkzLjcyMiAyLjk2MSAxLjUxNiA0LjQwNyAyLjM2OXMyLjg2NiAxLjggNC4yNCAyLjc4NCAyLjcyNSAyLjA0OSA0LjAyOCAzLjE3NGE1OC40NTkgNTguNDU5IDAgMCAxIDguODM3IDkuNDc3IDU5LjczIDU5LjczIDAgMCAxIDIuOTE0IDQuMzEyIDUxLjA2NyA1MS4wNjcgMCAwIDEgNS4zMTggMTEuOTE2IDQ3LjM4IDQ3LjM4IDAgMCAxIDEuMTg1IDUuMTY1IDQ1LjU2NyA0NS41NjcgMCAwIDEgLjcxIDguMDljLjA3MiAzNS45NjQtMTYuMDYyIDUyLjEyMi01Mi4yMjcgNTIuMTIyeiIvPjwvc3ZnPg==",alt:"CDF Logo",width:"36",height:"18"})),r.createElement("div",{className:"dropdown-menu"},r.createElement("a",{className:"dropdown-item feature",href:"https://cd.foundation/"},"What is CDF?"),r.createElement("a",{className:"dropdown-item feature",href:"https://jenkins-x.io/"},"Jenkins X"),r.createElement("a",{className:"dropdown-item feature",href:"https://cloud.google.com/tekton/"},"Tekton"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.spinnaker.io/"},"Spinnaker")))),r.createElement("ul",{className:"nav navbar-nav ml-auto"},r.createElement("li",{className:"nav-item"},r.createElement(i.Link,{className:"nav-link",to:"/blog/",activeClassName:"active",partiallyActive:!0},"Blog")),r.createElement("li",{className:"nav-item dropdown"},r.createElement("button",{"aria-expanded":"false","aria-haspopup":"true",className:"nav-link dropdown-toggle","data-toggle":"dropdown"},"Documentation"),r.createElement("div",{className:"dropdown-menu"},r.createElement(i.Link,{className:"dropdown-item feature",to:"/doc/book/",activeClassName:"active",partiallyActive:!0},r.createElement("strong",null,"User Guide")),r.createElement(i.Link,{className:"dropdown-item",to:"/doc/book/installing/",activeClassName:"active",partiallyActive:!0}," - Installing Jenkins"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/doc/book/pipeline/"}," - Jenkins Pipeline"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/doc/book/managing/"}," - Managing Jenkins"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/doc/book/security/"}," - Securing Jenkins"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/doc/book/system-administration/"}," - System Administration"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/doc/book/glossary/"}," - Terms and Definitions"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/solutions/"},r.createElement("strong",null,"Solution Pages")),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/doc/tutorials/"},r.createElement("strong",null,"Tutorials")),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/doc/pipeline/tour/getting-started/"}," - Guided Tour"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/doc/tutorials/"}," - More Tutorials"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/doc/developer/"},r.createElement("strong",null,"Developer Guide")),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/participate/"},r.createElement("strong",null,"Contributor Guide")))),r.createElement("li",{className:"nav-item"},r.createElement("a",{className:"nav-link",href:"https://plugins.jenkins.io"},"Plugins")),r.createElement("li",{className:"nav-item dropdown"},r.createElement("button",{"aria-expanded":"false","aria-haspopup":"true",className:"nav-link dropdown-toggle","data-toggle":"dropdown"},"Community"),r.createElement("div",{className:"dropdown-menu"},r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/participate/"},"Overview"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/chat/",title:"Chat with the rest of the Jenkins community on IRC"},"Chat"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/projects/jam/"},"Meet"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/events/"},"Events"),r.createElement("a",{className:"dropdown-item feature",href:"https://issues.jenkins.io/"},"Issue Tracker"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/mailing-lists/",title:"Browse Jenkins mailing list archives and/or subscribe to lists"},"Mailing Lists"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/project/roadmap/"},"Roadmap"),r.createElement("a",{className:"dropdown-item feature",href:"https://accounts.jenkins.io/",title:"Create/manage your account for accessing wiki, issue tracker, etc"},"Account Management"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/"},r.createElement("strong",null,"Special Interest Groups")),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/advocacy-and-outreach/"}," - Advocacy and Outreach"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/chinese-localization/"}," - Chinese Localization"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/cloud-native/"}," - Cloud Native"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/docs/"}," - Documentation"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/gsoc/"}," - Google Summer of Code"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/hw-and-eda/"}," - Hardware and EDA"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/pipeline-authoring/"}," - Pipeline Authoring"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/platform/"}," - Platform"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/ux/"}," - User Experience"))),r.createElement("li",{className:"dropdown nav-item"},r.createElement("button",{"aria-expanded":"false","aria-haspopup":"true",className:"nav-link dropdown-toggle","data-toggle":"dropdown"},"Subprojects"),r.createElement("div",{className:"dropdown-menu"},r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/projects/"},"Overview"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/projects/evergreen/"},"Evergreen"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/projects/gsoc/"},"Google Summer of Code in Jenkins"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/projects/infrastructure/"},"Infrastructure"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/projects/jam/"},"CI/CD and Jenkins Area Meetups"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/projects/jcasc/"},"Jenkins Configuration as Code"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/projects/jenkins-operator/"},"Jenkins Operator"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/projects/remoting/"},"Jenkins Remoting"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/docs/gsod/2020/projects/document-jenkins-on-kubernetes/"},"Document Jenkins on Kubernetes"))),r.createElement("li",{className:"nav-item dropdown"},r.createElement("button",{"aria-expanded":"false","aria-haspopup":"true",className:"nav-link dropdown-toggle","data-toggle":"dropdown"},"About"),r.createElement("div",{className:"dropdown-menu"},r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/project/roadmap/"},"Roadmap"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/security/"},"Security"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/press/"},"Press"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/awards/"},"Awards"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/project/conduct/"},"Conduct"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/artwork/"},"Artwork"))),r.createElement("li",{className:"nav-item dropdown"},r.createElement("button",{"aria-expanded":"false","aria-haspopup":"true",className:"nav-link dropdown-toggle","data-toggle":"dropdown"},"English"),r.createElement("div",{className:"dropdown-menu"},r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/zh/"},"中文 Chinese"))),r.createElement("li",{className:"nav-item"},r.createElement("a",{className:"nav-link btn btn-outline-secondary",href:"https://www.jenkins.io/download/"},"Download"))))),r.createElement("div",{className:"pt-4"}," "),n,r.createElement("script",{src:"https://www.jenkins.io/assets/bower/anchor-js/anchor.min.js",dangerouslySetInnerHTML:{__html:[]}}),r.createElement("script",{src:"https://www.jenkins.io/assets/bower/tether/js/tether.min.js",dangerouslySetInnerHTML:{__html:[]}}),r.createElement("script",{src:"https://www.jenkins.io/assets/bower/bootstrap/js/bootstrap.min.js",dangerouslySetInnerHTML:{__html:[]}}),r.createElement("footer",{id:"footer"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-md-4"},r.createElement("div",{className:"license-box"},r.createElement("div",{id:"creativecommons"},r.createElement("a",{href:"https://creativecommons.org/licenses/by-sa/4.0/"},r.createElement("p",null,r.createElement("img",{alt:"Creative Commons Attribution-ShareAlike license",src:"https://licensebuttons.net/l/by-sa/4.0/88x31.png"}))),r.createElement("p",null,"The content driving this site is licensed under the Creative Commons Attribution-ShareAlike 4.0 license.")))),r.createElement("div",{className:"links col-md-8"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"area col-md-3"},r.createElement("div",{className:"div-mar"},r.createElement("h5",null,"Resources"),r.createElement("ul",{className:"resources"},r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/download/"},"Downloads")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/node/"},"Blog")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/doc/"},"Documentation")),r.createElement("li",null,r.createElement("a",{href:"https://plugins.jenkins.io/"},"Plugins")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/security/"},"Security")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/participate/"},"Contributing"))))),r.createElement("div",{className:"area col-md-3"},r.createElement("div",{className:"div-mar"},r.createElement("h5",null,"Project"),r.createElement("ul",{className:"project"},r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/project/"},"Structure and governance")),r.createElement("li",null,r.createElement("a",{href:"https://issues.jenkins.io"},"Issue tracker")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/project/roadmap/"},"Roadmap")),r.createElement("li",null,r.createElement("a",{href:"https://github.com/jenkinsci"},"GitHub")),r.createElement("li",null,r.createElement("a",{href:"https://ci.jenkins.io"},"Jenkins on Jenkins"))))),r.createElement("div",{className:"area col-md-3"},r.createElement("div",{className:"div-mar"},r.createElement("h5",null,"Community"),r.createElement("ul",{className:"community"},r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/events/"},"Events")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/mailing-lists/"},"Mailing lists")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/chat/"},"Chats")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/sigs/"},"Special Interest Groups")),r.createElement("li",null,r.createElement("a",{href:"https://twitter.com/jenkinsci"},"Twitter")),r.createElement("li",null,r.createElement("a",{href:"https://reddit.com/r/jenkinsci"},"Reddit"))))),r.createElement("div",{className:"area col-md-3"},r.createElement("div",{className:"div-mar"},r.createElement("h5",null,"Other"),r.createElement("ul",{className:"other"},r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/conduct/"},"Code of Conduct")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/press/"},"Press information")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/merchandise/"},"Merchandise")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/artwork/"},"Artwork")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/awards/"},"Awards"))))))))))),r.createElement("script",{dangerouslySetInnerHTML:{__html:['\n  $(function(){\n    var $body = $(document.body);\n    $(".nav-link.dropdown-toggle").on("mousedown", function(){\n      $body.addClass("no-outline");\n    })\n    $body.on("keydown", function(){\n      $body.removeClass("no-outline");\n    })\n  })\n']}}))};o.displayName="Layout";var s=o},7579:function(e,t,n){"use strict";var r=n(70);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,i,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return n.PropTypes=n,n}},9324:function(e,t,n){e.exports=n(7579)()},70:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=commons-0840cafd864bb703a68f.js.map