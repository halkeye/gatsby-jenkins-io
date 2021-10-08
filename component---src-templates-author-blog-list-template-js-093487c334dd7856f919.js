"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[399],{6488:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),r=a(5444),l=a(2359),i=function(e){var t=e.name,r=e.avatar;return n.createElement("div",null,(null==r?void 0:r.childImageSharp)&&n.createElement(l.G,{image:(0,l.d)(r),alt:t}),!(null!=r&&r.childImageSharp)&&n.createElement(l.S,{src:"../../content/images/logos/transparent/transparent.svg",alt:t,width:128,__imageData:a(4489)}))};i.displayName="Avatar";var s=i,c=function(e){var t=e.github,a=e.twitter,r=e.blog,l=e.linkedin;return n.createElement("ul",{className:"author social-media-buttons"},t&&n.createElement("li",{className:"author"},n.createElement("a",{href:"https://github.com/"+t,target:"_blank",rel:"noreferrer noopener"},"Github")),a&&n.createElement("li",{className:"author"},n.createElement("a",{href:"https://twitter.com/"+a,target:"_blank",rel:"noreferrer noopener"},"Twitter")),r&&n.createElement("li",{className:"author"},n.createElement("a",{href:r,target:"_blank",rel:"noreferrer noopener"},"Blog")),l&&n.createElement("li",{className:"author"},n.createElement("a",{href:"https://www.linkedin.com/in/"+l,target:"_blank",rel:"noreferrer noopener"},"LinkedIn")))};c.displayName="SocialMediaButtons";var m=c,o=function(e){var t=e.html;return t?n.createElement("div",{dangerouslySetInnerHTML:{__html:t}}):n.createElement("p",null,"This author has no biography defined.\n            See social media links referenced below.")};o.displayName="AuthorBio";var u=function(e){var t,a,l=e.name,i=e.html,c=e.blogroll,u=e.slug,d=e.avatar,g=e.twitter,p=e.github,f=e.linkedin,E=e.blog;return n.createElement("div",null,!c&&n.createElement("h2",null,l),n.createElement("table",{className:"author box"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",{style:{width:(null==d||null===(t=d.childImageSharp)||void 0===t||null===(a=t.gatsbyImageData)||void 0===a?void 0:a.width)||128}},n.createElement(s,{avatar:d,name:l})),n.createElement("td",null,c&&n.createElement("b",{className:"author name"},n.createElement(r.Link,{to:u},l)),n.createElement(o,{html:i}),n.createElement(m,{twitter:g,github:p,linkedin:f,blog:E}))))))};u.displayName="Author";var d=u},1726:function(e,t,a){var n=a(7294),r=a(5444),l=a(528),i=function(e){var t=e.authors;return(0,l.c)(t.map((function(e){return n.createElement(r.Link,{key:e.slug,to:e.slug},e.name)})),", ")};i.displayName="AuthorList",t.Z=i},4028:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(7294),r=a(5444),l=a(1599),i=function(e,t){return 1===t?e:e+"/page/"+t},s=function(e){var t=e.prefix,a=e.currentPage,l=e.numPages;if(1===l)return null;var s=Array.from(new Set([1,2,3,a,a-1,a-2,a+1,a+2,l-2,l-1,l])).sort((function(e,t){return e-t})).filter((function(e){return e>0&&e<=l}));return 0===s.length?null:n.createElement("div",null,n.createElement("nav",null,n.createElement("ul",{className:"pagination"},n.createElement("li",{className:"page-item "+(1===a?"disabled":"")},n.createElement(r.Link,{className:"page-link",to:i(t,a-1)},"«")),s.map((function(e,l){var c=[];return 0!==l&&s[l-1]!==e-1&&c.push(n.createElement("li",{key:"...",className:"page item disabled"},n.createElement("div",{className:"page-link"},"..."))),c.push(n.createElement("li",{key:e,className:"page-item "+(a===e?"active":"")},n.createElement(r.Link,{className:"page-link",to:i(t,e)},e))),c})),n.createElement("li",{className:"page-item "+(a===l?"disabled":"")},n.createElement(r.Link,{className:"page-link",to:i(t,a+1)},"»")))))};s.displayName="Pagination";var c=s,m=a(1726),o=a(528),u=function(e){var t=e.slug,a=e.date,i=e.title,s=e.strippedHtml,c=e.authors,u=e.tags,d=new Date(a);return n.createElement("li",{className:"post"},n.createElement(r.Link,{to:t,className:"body"},n.createElement("div",{className:"header"},n.createElement("div",{className:"date"},n.createElement("div",{className:"month"},o.q[d.getUTCMonth()].padStart(2)),n.createElement("div",{className:"day"},d.getUTCDate().toString().padStart(2))),n.createElement("h5",{className:"title"},i)),n.createElement("p",{className:"teaser"},s,n.createElement("span",{className:"more"}))),n.createElement("div",{className:"attrs"},n.createElement(m.Z,{authors:c}),n.createElement(l.Z,{tags:u||[]})))};u.displayName="Post";var d=function(e){var t=e.prefix,a=e.pageContext,r=e.data.allBlog.edges;return r?n.createElement(n.Fragment,null,n.createElement("div",{className:"content blog-posts"},n.createElement("div",{className:"item-list"},n.createElement("ul",{className:"ji-blog-list ji-item-list"},r.map((function(e){var t=e.node;return n.createElement(u,Object.assign({key:t.id},t))}))))),n.createElement(c,{prefix:t,currentPage:a.currentPage,numPages:a.numPages})):null};d.displayName="BlogPosts";var g=d},1599:function(e,t,a){var n=a(7294),r=a(5444),l=function(e){var t=e.tags;return n.createElement("ul",{className:"list-inline tags"},t.map((function(e){return n.createElement("li",{key:e},n.createElement(r.Link,{className:"tag-link",to:"/node/tags/"+e},e))})))};l.displayName="TagList",t.Z=l},1830:function(e,t,a){a.r(t);var n=a(7294),r=a(7198),l=a(4028),i=a(6488),s=function(e){var t=e.pageContext,a=e.data;return n.createElement(r.Z,null,n.createElement("div",{className:"container"},n.createElement(i.Z,Object.assign({key:a.author.id,blogroll:!1},a.author))),n.createElement("div",{className:"container"},n.createElement(l.Z,{pageContext:t,data:a,prefix:a.author.slug})))};s.displayName="BlogPage",t.default=s},528:function(e,t,a){a.d(t,{c:function(){return n},q:function(){return r}});var n=function(e,t){return e.length?e.reduce((function(e,a){return[e,t,a]})):[]},r=["Jan","Feb","March","April","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]},4489:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/gatsby-jenkins-io/static/22de4e51911fdabdc5779fd346776d1a/d2695/transparent.svg","srcSet":"/gatsby-jenkins-io/static/22de4e51911fdabdc5779fd346776d1a/01f60/transparent.svg 32w,\\n/gatsby-jenkins-io/static/22de4e51911fdabdc5779fd346776d1a/a9d48/transparent.svg 64w,\\n/gatsby-jenkins-io/static/22de4e51911fdabdc5779fd346776d1a/d2695/transparent.svg 128w","sizes":"(min-width: 128px) 128px, 100vw"},"sources":[{"srcSet":"/gatsby-jenkins-io/static/22de4e51911fdabdc5779fd346776d1a/cd726/transparent.webp 32w,\\n/gatsby-jenkins-io/static/22de4e51911fdabdc5779fd346776d1a/a1c0b/transparent.webp 64w,\\n/gatsby-jenkins-io/static/22de4e51911fdabdc5779fd346776d1a/2f026/transparent.webp 128w","type":"image/webp","sizes":"(min-width: 128px) 128px, 100vw"}]},"width":128,"height":177}')}}]);
//# sourceMappingURL=component---src-templates-author-blog-list-template-js-093487c334dd7856f919.js.map