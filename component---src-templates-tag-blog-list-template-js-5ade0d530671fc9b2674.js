"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[724],{1726:function(e,t,a){var n=a(7294),l=a(5444),r=a(528),s=function(e){var t=e.authors;return(0,r.cF)(t.map((function(e){return n.createElement(l.Link,{key:e.slug,to:e.slug},e.name)})),", ")};s.displayName="AuthorList",t.Z=s},4028:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),l=a(5444),r=a(1599),s=function(e,t){return 1===t?e:e+"/page/"+t},c=function(e){var t=e.prefix,a=e.currentPage,r=e.numPages;if(1===r)return null;var c=Array.from(new Set([1,2,3,a,a-1,a-2,a+1,a+2,r-2,r-1,r])).sort((function(e,t){return e-t})).filter((function(e){return e>0&&e<=r}));return 0===c.length?null:n.createElement("div",null,n.createElement("nav",null,n.createElement("ul",{className:"pagination"},n.createElement("li",{className:"page-item "+(1===a?"disabled":"")},n.createElement(l.Link,{className:"page-link",to:s(t,a-1)},"«")),c.map((function(e,r){var i=[];return 0!==r&&c[r-1]!==e-1&&i.push(n.createElement("li",{key:"...",className:"page item disabled"},n.createElement("div",{className:"page-link"},"..."))),i.push(n.createElement("li",{key:e,className:"page-item "+(a===e?"active":"")},n.createElement(l.Link,{className:"page-link",to:s(t,e)},e))),i})),n.createElement("li",{className:"page-item "+(a===r?"disabled":"")},n.createElement(l.Link,{className:"page-link",to:s(t,a+1)},"»")))))};c.displayName="Pagination";var i=c,m=a(1726),u=a(528),o=function(e){var t=e.slug,a=e.date,s=e.title,c=e.strippedHtml,i=e.authors,o=e.tags,g=new Date(a);return n.createElement("li",{className:"post"},n.createElement(l.Link,{to:t,className:"body"},n.createElement("div",{className:"header"},n.createElement("div",{className:"date"},n.createElement("div",{className:"month"},u.qe[g.getUTCMonth()].padStart(2)),n.createElement("div",{className:"day"},g.getUTCDate().toString().padStart(2))),n.createElement("h5",{className:"title"},s)),n.createElement("p",{className:"teaser"},c,n.createElement("span",{className:"more"}))),n.createElement("div",{className:"attrs"},n.createElement(m.Z,{authors:i}),n.createElement(r.Z,{tags:o||[]})))};o.displayName="Post";var g=function(e){var t=e.prefix,a=e.pageContext,l=e.blogs;return l&&0!==l.length?n.createElement(n.Fragment,null,n.createElement("div",{className:"content blog-posts"},n.createElement("div",{className:"item-list"},n.createElement("ul",{className:"ji-blog-list ji-item-list"},l.map((function(e){var t=e.node;return n.createElement(o,Object.assign({key:t.id},t))}))))),a&&n.createElement(i,{prefix:t,currentPage:a.currentPage,numPages:a.numPages})):null};g.displayName="BlogPosts";var d=g},1599:function(e,t,a){var n=a(7294),l=a(5444),r=function(e){var t=e.tags;return n.createElement("ul",{className:"list-inline tags"},t.map((function(e){return n.createElement("li",{key:e},n.createElement(l.Link,{className:"tag-link",to:"/node/tags/"+e},e))})))};r.displayName="TagList",t.Z=r},4957:function(e,t,a){a.r(t);var n=a(7294),l=a(9509),r=a(4028),s=function(e){var t=e.pageContext,a=e.data;return n.createElement(l.Z,null,n.createElement("div",{className:"container"},n.createElement("div",{id:"block-block-15",className:"block block-block even blog-posts"},n.createElement("h3",{className:"title"},"Recent Blog Posts")),n.createElement(r.Z,{pageContext:t,blogs:a.allBlog.edges,prefix:"/node/tags/"+t.tag})))};s.displayName="TagBlogListTemplate",t.default=s},528:function(e,t,a){a.d(t,{cF:function(){return n},qe:function(){return l},sb:function(){return r}});var n=function(e,t){return e.length?e.reduce((function(e,a){return[e,t,a]})):[]},l=["Jan","Feb","March","April","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],r=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]}}]);
//# sourceMappingURL=component---src-templates-tag-blog-list-template-js-5ade0d530671fc9b2674.js.map