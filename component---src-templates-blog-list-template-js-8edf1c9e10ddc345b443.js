"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[659],{1599:function(e,t,a){var n=a(7294),l=a(5444);t.Z=function(e){var t=e.tags;return n.createElement("ul",{className:"list-inline tags"},t.map((function(e){return n.createElement("li",{key:e},n.createElement(l.Link,{className:"tag-link",to:"/node/tags/jenkins/"+e},e))})))}},431:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(7294),l=a(5444),r=a(7198),c=a(1599),s=function(e,t){return 1===t?e:e+"/page/"+t},i=function(e){var t=e.prefix,a=e.currentPage,r=e.numPages,c=Array.from(new Set([1,2,3,a,a-1,a-2,a+1,a+2,r-2,r-1,r])).sort((function(e,t){return e-t})).filter((function(e){return e>0&&e<=r}));return 0===c.length?null:n.createElement("div",null,n.createElement("nav",null,n.createElement("ul",{className:"pagination"},n.createElement("li",{className:"page-item "+(1===a?"disabled":"")},n.createElement(l.Link,{className:"page-link",to:s(t,a-1)},"«")),c.map((function(e,r){var i=[];return 0!==r&&c[r-1]!==e-1&&i.push(n.createElement("li",{key:"...",className:"page item disabled"},n.createElement("div",{className:"page-link"},"..."))),i.push(n.createElement("li",{key:e,className:"page-item "+(a===e?"active":"")},n.createElement(l.Link,{className:"page-link",to:s(t,e)},e))),i})),n.createElement("li",{className:"page-item "+(a===r?"disabled":"")},n.createElement(l.Link,{className:"page-link",to:s(t,a+1)},"»")))))},m=a(528),u=function(e){var t=e.slug,a=e.date,r=e.title,s=e.strippedHtml,i=e.authors,u=e.tags,o=new Date(a);return n.createElement("li",{className:"post"},n.createElement(l.Link,{to:t,className:"body"},n.createElement("div",{className:"header"},n.createElement("div",{className:"date"},n.createElement("div",{className:"month"},m.q[o.getUTCMonth()].padStart(2)),n.createElement("div",{className:"day"},o.getUTCDate().toString().padStart(2))),n.createElement("h5",{className:"title"},r)),n.createElement("p",{className:"teaser"},s,n.createElement("span",{className:"more"}))),n.createElement("div",{className:"attrs"},(0,m.c)(i.map((function(e){return n.createElement(l.Link,{key:e.slug,to:e.slug},e.name)})),", "),n.createElement(c.Z,{tags:u||[]})))},o=function(e){var t=e.pageContext,a=e.data.allBlog.edges;return a?n.createElement(r.Z,null,n.createElement("div",{className:"container"},n.createElement("div",{id:"block-block-15",className:"block block-block even blog-posts"},n.createElement("h3",{className:"title"},"Recent Blog Posts")),n.createElement("div",{className:"content blog-posts"},n.createElement("div",{className:"item-list"},n.createElement("ul",{className:"ji-blog-list ji-item-list"},a.map((function(e){var t=e.node;return n.createElement(u,Object.assign({key:t.id},t))}))))),n.createElement(i,{prefix:"/blog",currentPage:t.currentPage,numPages:t.numPages}))):n.createElement(r.Z,null)}},528:function(e,t,a){a.d(t,{c:function(){return n},q:function(){return l}});var n=function(e,t){return e.length?e.reduce((function(e,a){return[e,t,a]})):[]},l=["Jan","Feb","March","April","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]}}]);
//# sourceMappingURL=component---src-templates-blog-list-template-js-8edf1c9e10ddc345b443.js.map