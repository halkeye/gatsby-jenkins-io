(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var s,l,c,u;if(Array.isArray(e)){if((s=e.length)!=i.length)return!1;for(l=s;0!=l--;)if(!o(e[l],i[l]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!o(l.value[1],i.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((s=e.length)!=i.length)return!1;for(l=s;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,c[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!e.$$typeof)&&!o(e[c[l]],i[c[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";n.d(t,{q:function(){return he}});var r,a,o,i,s=n(9324),l=n.n(s),c=n(4839),u=n.n(c),m=n(2993),p=n.n(m),d=n(7294),f=n(6494),h=n.n(f),w="bodyAttributes",E="htmlAttributes",g="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(y).map((function(e){return y[e]})),"charset"),b="cssText",k="href",j="http-equiv",T="innerHTML",N="itemprop",C="name",A="property",S="rel",O="src",x="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",L="defer",M="encodeSpecialCharacters",_="onChangeClientState",R="titleTemplate",D=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),q=[y.NOSCRIPT,y.SCRIPT,y.STYLE],H="data-react-helmet",z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},J=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},G=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},$=function(e){var t=X(e,y.TITLE),n=X(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,I);return t||r||void 0},K=function(e){return X(e,_)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var s=o[i],l=s.toLowerCase();-1===t.indexOf(l)||n===S&&"canonical"===e[n].toLowerCase()||l===S&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(s)||s!==T&&s!==b&&s!==N||(n=s)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][c]&&(a[n][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var s=o[i],l=h()({},r[s],a[s]);r[s]=l}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Z=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:n.g.requestAnimationFrame||Z,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,m=e.title,p=e.titleAttributes;le(y.BODY,r),le(y.HTML,a),se(m,p);var d={baseTag:ce(y.BASE,n),linkTags:ce(y.LINK,o),metaTags:ce(y.META,i),noscriptTags:ce(y.NOSCRIPT,s),scriptTags:ce(y.SCRIPT,c),styleTags:ce(y.STYLE,u)},f={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(f[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,f,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(y.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),s=0;s<i.length;s++){var l=i[s],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var m=o.length-1;m>=0;m--)n.removeAttribute(o[m]);a.length===o.length?n.removeAttribute(H):n.getAttribute(H)!==i.join(",")&&n.setAttribute(H,i.join(","))}},ce=function(e,t){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===T)n.innerHTML=t.innerHTML;else if(r===b)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(H,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,a=me(n,r),[d.createElement(y.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Y(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case w:case E:return{toComponent:function(){return me(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===T||n===b){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),d.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===T||e===b)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+Y(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.scriptTags,c=e.styleTags,u=e.title,m=void 0===u?"":u,p=e.titleAttributes;return{base:pe(y.BASE,t,r),bodyAttributes:pe(w,n,r),htmlAttributes:pe(E,a,r),link:pe(y.LINK,o,r),meta:pe(y.META,i,r),noscript:pe(y.NOSCRIPT,s,r),script:pe(y.SCRIPT,l,r),style:pe(y.STYLE,c,r),title:pe(y.TITLE,{title:m,titleAttributes:p},r)}},fe=u()((function(e){return{baseTag:V([k,x],e),bodyAttributes:W(w,e),defer:X(e,L),encode:X(e,M),htmlAttributes:W(E,e),linkTags:Q(y.LINK,[S,k],e),metaTags:Q(y.META,[C,v,j,A,N],e),noscriptTags:Q(y.NOSCRIPT,[T],e),onChangeClientState:K(e),scriptTags:Q(y.SCRIPT,[O,T],e),styleTags:Q(y.STYLE,[b],e),title:$(e),titleAttributes:W(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),he=(a=fe,i=o=function(e){function t(){return B(this,t),G(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case y.TITLE:return U({},a,((t={})[r.type]=i,t.titleAttributes=U({},o),t));case y.BODY:return U({},a,{bodyAttributes:U({},o)});case y.HTML:return U({},a,{htmlAttributes:U({},o)})}return U({},a,((n={})[r.type]=U({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(F(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=F(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.createElement(a,r)},J(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(d.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind},4839:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,c=[];function u(){l=e(c.map((function(e){return e.props}))),m.canUseDOM?t(l):n&&(l=n(l))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,c=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){c.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(m,"canUseDOM",s),m}}},7198:function(e,t,n){"use strict";var r=n(7294),a=n(5414),o=n(5444);t.Z=function(e){var t,n=e.children,i=(0,o.useStaticQuery)("3649515864");return r.createElement("div",null,r.createElement(a.q,null,r.createElement("title",null,(null===(t=i.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"),r.createElement("meta",{content:"text/html; charset=UTF-8",httpEquiv:"Content-Type"}),r.createElement("meta",{charset:"utf-8"}),r.createElement("meta",{content:"width=device-width, initial-scale=1",name:"viewport"}),r.createElement("meta",{content:"ie=edge",httpEquiv:"x-ua-compatible"}),r.createElement("link",{href:"https://www.jenkins.io/favicon.ico",rel:"shortcut icon",type:"image/x-icon"}),r.createElement("link",{href:"https://www.jenkins.io/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),r.createElement("link",{href:"https://www.jenkins.io/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),r.createElement("link",{href:"https://www.jenkins.io/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),r.createElement("link",{href:"/site.webmanifest",rel:"manifest"}),r.createElement("link",{color:"#5bbad5",href:"https://www.jenkins.io/safari-pinned-tab.svg",rel:"mask-icon"}),r.createElement("meta",{content:"#2b5797",name:"msapplication-TileColor"}),r.createElement("meta",{content:"#ffffff",name:"theme-color"}),r.createElement("meta",{content:"summary_large_image",name:"twitter:card"}),r.createElement("meta",{content:"@JenkinsCI",name:"twitter:site"}),r.createElement("meta",{content:"@JenkinsCI",name:"twitter:creator"}),r.createElement("meta",{content:"article",property:"og:type"}),r.createElement("meta",{content:"https:/www.jenkins.io/template/",property:"og:url"}),r.createElement("style",null,"#grid-box { position: relative } "),r.createElement("style",null,"html { min-height:100%; position: relative; }")),r.createElement("script",{src:"https://www.jenkins.io/assets/bower/jquery/jquery.min.js",dangerouslySetInnerHTML:{__html:[]}}),r.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark top bg-dark fixed-top",id:"ji-toolbar"},r.createElement("a",{className:"navbar-brand",href:"https://www.jenkins.io/"},"Jenkins"),r.createElement("button",{className:"navbar-toggler","data-target":"#CollapsingNavbar","data-toggle":"collapse",type:"button"},r.createElement("span",{className:"navbar-toggler-icon"})),r.createElement("div",{className:"collapse navbar-collapse",id:"CollapsingNavbar"},r.createElement("ul",{className:"nav navbar-nav mr-auto"},r.createElement("li",{className:"nav-item dropdown"},r.createElement("button",{type:"button","aria-expanded":"false","aria-haspopup":"true",className:"nav-link dropdown-toggle","data-toggle":"dropdown"},r.createElement("svg",{width:"36",height:"18",xmlns:"http://www.w3.org/2000/svg",role:"img",xlink:"http://www.w3.org/1999/xlink",viewBox:"-3.23 44.77 362.70 271.95"},r.createElement("defs",null,r.createElement("linearGradient",{id:"a",x1:"359.765",x2:"104.082",y1:"134.295",y2:"124.577",gradientTransform:"matrix(1 0 0 -1 0 439.068)",gradientUnits:"userSpaceOnUse"},r.createElement("stop",{offset:"0",stopColor:"#ed1c24"}),r.createElement("stop",{offset:"1",stopColor:"#f7941d"})),r.createElement("linearGradient",{id:"b",x1:"355.202",x2:"99.519",y1:"254.467",y2:"244.749",href:"#a"}),r.createElement("linearGradient",{id:"c",x1:"183.903",x2:"10.612",y1:"227.598",y2:"221.023",href:"#a"}),r.createElement("linearGradient",{id:"d",x1:"367.119",x2:"157.995",y1:"265.311",y2:"257.091",href:"#a"})),r.createElement("path",{fill:"#c49a6c",d:"M231.52 309.278c2.483-.332 4.895-.77 7.255-1.329s4.649-1.206 6.991-1.957c13.494-4.58 25.187-12.952 36.374-24.593l-.14-.175c-14.944 15.486-30.693 25.344-50.48 28.054z"}),r.createElement("path",{fill:"url(#a)",d:"M224.232 309.96h.332c1.084 0 2.15-.14 3.216-.228a93.844 93.844 0 0 1-3.233.227z"}),r.createElement("path",{fill:"url(#b)",d:"M284.692 187.187l-.122.192.122-.192z"}),r.createElement("path",{fill:"url(#c)",d:"M146.145 231.847a150.844 150.844 0 0 1-12.97 15.862c-7.582 7.889-15.507 13.563-24.652 16.667a47.832 47.832 0 0 1-4.738 1.326 56.959 56.959 0 0 1-4.916.9 38.32 38.32 0 0 1-1.682.214l-.912.083c-.723.059-1.445.118-2.18.154h-3.068a42.325 42.325 0 0 1-9.192-1.043 49.977 49.977 0 0 1-6.764-2.002 43.097 43.097 0 0 1-4.525-1.954c-1.493-.77-2.961-1.516-4.407-2.37a59.5 59.5 0 0 1-17.105-15.399 59.714 59.714 0 0 1-2.914-4.311 53.09 53.09 0 0 1-1.291-2.263 51.985 51.985 0 0 1-2.263-4.738 46.72 46.72 0 0 1 0-36.426 51.986 51.986 0 0 1 2.263-4.738 54.14 54.14 0 0 1 1.291-2.263 59.742 59.742 0 0 1 2.914-4.311 59.714 59.714 0 0 1 17.105-15.4 60.828 60.828 0 0 1 4.407-2.369q2.217-1 4.525-1.777a49.976 49.976 0 0 1 6.906-2.073 42.325 42.325 0 0 1 9.192-1.042h3.128c.722 0 1.445.094 2.155.154l1.043.106 1.019.119c1.8.237 3.553.557 5.271.96.853.2 1.694.426 2.523.663a51.186 51.186 0 0 1 11.846 5.176 59.645 59.645 0 0 1 4.395 2.89 74.485 74.485 0 0 1 8.386 7.108q2.038 1.99 4.063 4.193l.083-.13a159.395 159.395 0 0 1 11.064 13.942c5.437-8.576 13.658-21.464 16.584-25.74 1.185-1.718 2.37-3.46 3.66-5.212-13.54-16.513-29.827-30.23-51.587-36.082h-.154a89.397 89.397 0 0 0-3.187-.794l-.45-.107a92.565 92.565 0 0 0-3.151-.627l-.628-.119a80.578 80.578 0 0 0-3.743-.569h-.142a58.29 58.29 0 0 0-2.073-.236h-.391l-1.872-.166h-.568l-1.754-.119h-.675l-1.777-.07h-3.115c-46.447-.25-87.125 40.476-87.125 86.911s40.725 87.173 87.172 87.173h3.14l1.729-.071h.734l1.67-.095h.676l1.706-.154h.568l1.813-.213.414-.06 1.967-.272h.213a125.91 125.91 0 0 0 3.553-.628l.652-.142c.96-.201 1.907-.415 2.855-.64l.58-.142a86.66 86.66 0 0 0 3.009-.817l.237-.071c20.73-6.077 36.425-19.392 49.55-35.277-2.037-3.068-3.4-5.366-4.039-6.48z"}),r.createElement("path",{fill:"url(#d)",d:"M318.05 51.733v94.66a85.514 85.514 0 0 0-52.595-18.729h-3.115l-1.777.072-.7.047-1.752.118h-.569l-1.871.166h-.391c-.7.071-1.386.142-2.073.237h-.154c-1.256.154-2.5.355-3.732.569l-.628.118c-1.066.19-2.108.403-3.15.628l-.45.107c-30.35 6.858-50.333 28.808-66.822 52.82-.7 1.018-1.35 2.049-2.038 3.068-2.25 3.423-5.46 8.422-8.635 13.397-4.17 6.527-8.292 13.03-9.939 15.66l20.624 32.137s21.997 40.465 61.68 51.482l.237.07c.995.297 2.002.558 3.009.818l.58.142c.936.237 1.896.439 2.855.64l.652.142c1.184.225 2.369.439 3.553.628h.214l1.966.273.415.059 1.812.213h.569l1.705.154h.676l1.67.095h.734l1.73.07h3.139c54.703 0 86.355-30.964 87.149-85.063V51.733zm-52.595 215.403h-3.068c-.734 0-1.457-.095-2.18-.154l-.912-.083c-.568-.06-1.125-.13-1.682-.213a49.077 49.077 0 0 1-9.571-2.275 49.612 49.612 0 0 1-6.634-2.83 55.792 55.792 0 0 1-6.254-3.768 63.068 63.068 0 0 1-3.009-2.215 82.399 82.399 0 0 1-8.683-7.925l-.095.119c-1.255-1.303-2.487-2.69-3.731-4.11-.154-.167-.296-.356-.45-.534-.628-.722-1.256-1.445-1.884-2.215s-1.125-1.398-1.682-2.097-.888-1.101-1.338-1.682a184.467 184.467 0 0 1-6.053-8.292c-.7-.995-1.398-2.025-2.109-3.056-.379-.569-.77-1.184-1.185-1.73-.675-1.018-1.362-2.013-2.049-3.056l-.355-.545c-1.185-1.812-2.37-3.684-3.649-5.603q2.95-4.608 5.817-8.86c1.907-2.831 3.79-5.556 5.662-8.138s3.72-5.046 5.591-7.38 3.72-4.525 5.603-6.586q2.026-2.203 4.063-4.194c1.374-1.338 2.748-2.594 4.158-3.778s2.807-2.287 4.252-3.329a57.594 57.594 0 0 1 7.748-4.62c.331-.166.663-.367 1.006-.533l.226-.118c1.41-.652 2.843-1.185 4.3-1.73l.485-.201c.273-.083.557-.142.83-.237a44.943 44.943 0 0 1 3.34-.948l1.374-.343a60.798 60.798 0 0 1 4.738-.841l1.019-.119 1.042-.106c.711 0 1.434-.119 2.156-.154h3.128a42.431 42.431 0 0 1 4.572.26 48.011 48.011 0 0 1 6.93 1.35c1.54.427 3.08.925 4.596 1.505a48.724 48.724 0 0 1 4.525 1.955c1.493.722 2.961 1.516 4.407 2.369s2.866 1.8 4.24 2.784 2.725 2.049 4.028 3.174a58.459 58.459 0 0 1 8.837 9.477 59.73 59.73 0 0 1 2.914 4.312 51.067 51.067 0 0 1 5.318 11.916 47.38 47.38 0 0 1 1.185 5.165 45.567 45.567 0 0 1 .71 8.09c.072 35.964-16.062 52.122-52.227 52.122z"}))),r.createElement("div",{className:"dropdown-menu"},r.createElement("a",{className:"dropdown-item feature",href:"https://cd.foundation/"},"What is CDF?"),r.createElement("a",{className:"dropdown-item feature",href:"https://jenkins-x.io/"},"Jenkins X"),r.createElement("a",{className:"dropdown-item feature",href:"https://cloud.google.com/tekton/"},"Tekton"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.spinnaker.io/"},"Spinnaker")))),r.createElement("ul",{className:"nav navbar-nav ml-auto"},r.createElement("li",{className:"nav-item"},r.createElement(o.Link,{className:"nav-link",to:"/blog/",activeClassName:"active",partiallyActive:!0},"Blog")),r.createElement("li",{className:"nav-item dropdown"},r.createElement("button",{"aria-expanded":"false","aria-haspopup":"true",className:"nav-link dropdown-toggle","data-toggle":"dropdown"},"Documentation"),r.createElement("div",{className:"dropdown-menu"},r.createElement(o.Link,{className:"dropdown-item feature",to:"/doc/book/",activeClassName:"active",partiallyActive:!0},r.createElement("strong",null,"User Guide")),r.createElement(o.Link,{className:"dropdown-item",to:"/doc/book/installing/",activeClassName:"active",partiallyActive:!0}," - Installing Jenkins"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/doc/book/pipeline/"}," - Jenkins Pipeline"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/doc/book/managing/"}," - Managing Jenkins"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/doc/book/security/"}," - Securing Jenkins"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/doc/book/system-administration/"}," - System Administration"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/doc/book/glossary/"}," - Terms and Definitions"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/solutions/"},r.createElement("strong",null,"Solution Pages")),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/doc/tutorials/"},r.createElement("strong",null,"Tutorials")),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/doc/pipeline/tour/getting-started/"}," - Guided Tour"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/doc/tutorials/"}," - More Tutorials"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/doc/developer/"},r.createElement("strong",null,"Developer Guide")),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/participate/"},r.createElement("strong",null,"Contributor Guide")))),r.createElement("li",{className:"nav-item"},r.createElement("a",{className:"nav-link",href:"https://plugins.jenkins.io"},"Plugins")),r.createElement("li",{className:"nav-item dropdown"},r.createElement("button",{"aria-expanded":"false","aria-haspopup":"true",className:"nav-link dropdown-toggle","data-toggle":"dropdown"},"Community"),r.createElement("div",{className:"dropdown-menu"},r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/participate/"},"Overview"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/chat/",title:"Chat with the rest of the Jenkins community on IRC"},"Chat"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/projects/jam/"},"Meet"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/events/"},"Events"),r.createElement("a",{className:"dropdown-item feature",href:"https://issues.jenkins.io/"},"Issue Tracker"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/mailing-lists/",title:"Browse Jenkins mailing list archives and/or subscribe to lists"},"Mailing Lists"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/project/roadmap/"},"Roadmap"),r.createElement("a",{className:"dropdown-item feature",href:"https://accounts.jenkins.io/",title:"Create/manage your account for accessing wiki, issue tracker, etc"},"Account Management"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/"},r.createElement("strong",null,"Special Interest Groups")),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/advocacy-and-outreach/"}," - Advocacy and Outreach"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/chinese-localization/"}," - Chinese Localization"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/cloud-native/"}," - Cloud Native"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/docs/"}," - Documentation"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/gsoc/"}," - Google Summer of Code"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/hw-and-eda/"}," - Hardware and EDA"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/pipeline-authoring/"}," - Pipeline Authoring"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/platform/"}," - Platform"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/ux/"}," - User Experience"))),r.createElement("li",{className:"dropdown nav-item"},r.createElement("button",{"aria-expanded":"false","aria-haspopup":"true",className:"nav-link dropdown-toggle","data-toggle":"dropdown"},"Subprojects"),r.createElement("div",{className:"dropdown-menu"},r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/projects/"},"Overview"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/projects/evergreen/"},"Evergreen"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/projects/gsoc/"},"Google Summer of Code in Jenkins"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/projects/infrastructure/"},"Infrastructure"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/projects/jam/"},"CI/CD and Jenkins Area Meetups"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/projects/jcasc/"},"Jenkins Configuration as Code"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/projects/jenkins-operator/"},"Jenkins Operator"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/projects/remoting/"},"Jenkins Remoting"),r.createElement("a",{className:"dropdown-item feature",href:"https://www.jenkins.io/sigs/docs/gsod/2020/projects/document-jenkins-on-kubernetes/"},"Document Jenkins on Kubernetes"))),r.createElement("li",{className:"nav-item dropdown"},r.createElement("button",{"aria-expanded":"false","aria-haspopup":"true",className:"nav-link dropdown-toggle","data-toggle":"dropdown"},"About"),r.createElement("div",{className:"dropdown-menu"},r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/project/roadmap/"},"Roadmap"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/security/"},"Security"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/press/"},"Press"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/awards/"},"Awards"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/project/conduct/"},"Conduct"),r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/artwork/"},"Artwork"))),r.createElement("li",{className:"nav-item dropdown"},r.createElement("button",{"aria-expanded":"false","aria-haspopup":"true",className:"nav-link dropdown-toggle","data-toggle":"dropdown"},"English"),r.createElement("div",{className:"dropdown-menu"},r.createElement("a",{className:"dropdown-item",href:"https://www.jenkins.io/zh/"},"中文 Chinese"))),r.createElement("li",{className:"nav-item"},r.createElement("a",{className:"nav-link btn btn-outline-secondary",href:"https://www.jenkins.io/download/"},"Download"))))),r.createElement("div",{className:"pt-4"}," "),r.createElement("div",{id:"grid-box"},n),r.createElement("script",{src:"https://www.jenkins.io/assets/bower/anchor-js/anchor.min.js",dangerouslySetInnerHTML:{__html:[]}}),r.createElement("script",{src:"https://www.jenkins.io/assets/bower/tether/js/tether.min.js",dangerouslySetInnerHTML:{__html:[]}}),r.createElement("script",{src:"https://www.jenkins.io/assets/bower/bootstrap/js/bootstrap.min.js",dangerouslySetInnerHTML:{__html:[]}}),r.createElement("footer",{id:"footer"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-md-4"},r.createElement("div",{className:"license-box"},r.createElement("div",{id:"creativecommons"},r.createElement("a",{href:"https://creativecommons.org/licenses/by-sa/4.0/"},r.createElement("p",null,r.createElement("img",{alt:"Creative Commons Attribution-ShareAlike license",src:"https://licensebuttons.net/l/by-sa/4.0/88x31.png"}))),r.createElement("p",null,"The content driving this site is licensed under the Creative Commons Attribution-ShareAlike 4.0 license.")))),r.createElement("div",{className:"links col-md-8"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"area col-md-3"},r.createElement("div",{className:"div-mar"},r.createElement("h5",null,"Resources"),r.createElement("ul",{className:"resources"},r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/download/"},"Downloads")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/node/"},"Blog")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/doc/"},"Documentation")),r.createElement("li",null,r.createElement("a",{href:"https://plugins.jenkins.io/"},"Plugins")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/security/"},"Security")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/participate/"},"Contributing"))))),r.createElement("div",{className:"area col-md-3"},r.createElement("div",{className:"div-mar"},r.createElement("h5",null,"Project"),r.createElement("ul",{className:"project"},r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/project/"},"Structure and governance")),r.createElement("li",null,r.createElement("a",{href:"https://issues.jenkins.io"},"Issue tracker")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/project/roadmap/"},"Roadmap")),r.createElement("li",null,r.createElement("a",{href:"https://github.com/jenkinsci"},"GitHub")),r.createElement("li",null,r.createElement("a",{href:"https://ci.jenkins.io"},"Jenkins on Jenkins"))))),r.createElement("div",{className:"area col-md-3"},r.createElement("div",{className:"div-mar"},r.createElement("h5",null,"Community"),r.createElement("ul",{className:"community"},r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/events/"},"Events")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/mailing-lists/"},"Mailing lists")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/chat/"},"Chats")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/sigs/"},"Special Interest Groups")),r.createElement("li",null,r.createElement("a",{href:"https://twitter.com/jenkinsci"},"Twitter")),r.createElement("li",null,r.createElement("a",{href:"https://reddit.com/r/jenkinsci"},"Reddit"))))),r.createElement("div",{className:"area col-md-3"},r.createElement("div",{className:"div-mar"},r.createElement("h5",null,"Other"),r.createElement("ul",{className:"other"},r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/conduct/"},"Code of Conduct")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/press/"},"Press information")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/merchandise/"},"Merchandise")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/artwork/"},"Artwork")),r.createElement("li",null,r.createElement("a",{href:"https://www.jenkins.io/awards/"},"Awards"))))))))))),r.createElement("script",{dangerouslySetInnerHTML:{__html:['\n  $(function(){\n    var $body = $(document.body);\n    $(".nav-link.dropdown-toggle").on("mousedown", function(){\n      $body.addClass("no-outline");\n    })\n    $body.on("keydown", function(){\n      $body.removeClass("no-outline");\n    })\n  })\n']}}))}},7579:function(e,t,n){"use strict";var r=n(70);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},9324:function(e,t,n){e.exports=n(7579)()},70:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=commons-e65a75583f121ad6113a.js.map