"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[659],{1726:function(e,t,a){var n=a(7294),r=a(5444),l=a(528),s=function(e){var t=e.authors;return(0,l.cF)(t.map((function(e){return n.createElement(r.Link,{key:e.slug,to:e.slug},e.name)})),", ")};s.displayName="AuthorList",t.Z=s},4028:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(7294),r=a(5444),l=a(1599),s=function(e,t){return 1===t?e:e+"/page/"+t},c=function(e){var t=e.prefix,a=e.currentPage,l=e.numPages;if(1===l)return null;var c=Array.from(new Set([1,2,3,a,a-1,a-2,a+1,a+2,l-2,l-1,l])).sort((function(e,t){return e-t})).filter((function(e){return e>0&&e<=l}));return 0===c.length?null:n.createElement("div",null,n.createElement("nav",null,n.createElement("ul",{className:"pagination"},n.createElement("li",{className:"page-item "+(1===a?"disabled":"")},n.createElement(r.Link,{className:"page-link",to:s(t,a-1)},"«")),c.map((function(e,l){var i=[];return 0!==l&&c[l-1]!==e-1&&i.push(n.createElement("li",{key:"...",className:"page item disabled"},n.createElement("div",{className:"page-link"},"..."))),i.push(n.createElement("li",{key:e,className:"page-item "+(a===e?"active":"")},n.createElement(r.Link,{className:"page-link",to:s(t,e)},e))),i})),n.createElement("li",{className:"page-item "+(a===l?"disabled":"")},n.createElement(r.Link,{className:"page-link",to:s(t,a+1)},"»")))))};c.displayName="Pagination";var i=c,u=a(1726),m=a(528),o=function(e){var t=e.slug,a=e.date,s=e.title,c=e.strippedHtml,i=e.authors,o=e.tags,d=new Date(a);return n.createElement("li",{className:"post"},n.createElement(r.Link,{to:t,className:"body"},n.createElement("div",{className:"header"},n.createElement("div",{className:"date"},n.createElement("div",{className:"month"},m.qe[d.getUTCMonth()].padStart(2)),n.createElement("div",{className:"day"},d.getUTCDate().toString().padStart(2))),n.createElement("h5",{className:"title"},s)),n.createElement("p",{className:"teaser"},c,n.createElement("span",{className:"more"}))),n.createElement("div",{className:"attrs"},n.createElement(u.Z,{authors:i}),n.createElement(l.Z,{tags:o||[]})))};o.displayName="Post";var d=function(e){var t=e.prefix,a=e.pageContext,r=e.blogs;return r&&0!==r.length?n.createElement(n.Fragment,null,n.createElement("div",{className:"content blog-posts"},n.createElement("div",{className:"item-list"},n.createElement("ul",{className:"ji-blog-list ji-item-list"},r.map((function(e){var t=e.node;return n.createElement(o,Object.assign({key:t.id},t))}))))),a&&n.createElement(i,{prefix:t,currentPage:a.currentPage,numPages:a.numPages})):null};d.displayName="BlogPosts";var g=d},1599:function(e,t,a){var n=a(7294),r=a(5444),l=function(e){var t=e.tags;return n.createElement("ul",{className:"list-inline tags"},t.map((function(e){return n.createElement("li",{key:e},n.createElement(r.Link,{className:"tag-link",to:"/node/tags/"+e},e))})))};l.displayName="TagList",t.Z=l},3114:function(e,t,a){var n=a(3366),r=a(7294),l=a(9509),s=["children","title"],c=function(e){var t=e.children,a=e.title,c=(0,n.Z)(e,s);return r.createElement(l.Z,Object.assign({},c,{title:a}),r.createElement("div",{className:"container"},r.createElement("div",{className:"row body"},r.createElement("h1",null,a),t)))};c.displayName="SimplePageLayout",t.Z=c},3729:function(e,t,a){a.r(t);var n=a(7294),r=a(3114),l=a(4028),s=function(e){var t=e.pageContext,a=e.data;return n.createElement(r.Z,{title:"Recent Blog Posts"},n.createElement(l.Z,{pageContext:t,blogs:a.allBlog.edges,prefix:"/blog"}))};s.displayName="BlogPage",t.default=s},528:function(e,t,a){a.d(t,{cF:function(){return n},qe:function(){return r},sb:function(){return l}});var n=function(e,t){return e.length?e.reduce((function(e,a){return[e,t,a]})):[]},r=["Jan","Feb","March","April","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],l=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},3366:function(e,t,a){function n(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=component---src-templates-blog-list-template-js-cc421dea7bcd5996515d.js.map