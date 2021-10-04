"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[851],{1599:function(e,t,a){var n=a(7294),r=a(5444);t.Z=function(e){var t=e.tags;return n.createElement("ul",{className:"list-inline tags"},t.map((function(e){return n.createElement("li",{key:e},n.createElement(r.Link,{className:"tag-link",to:"/node/tags/jenkins/"+e},e))})))}},2252:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(7294),r=a(5444),l=a(7198),c=a(2359),i=function(e){var t=e.name,r=e.avatar;return n.createElement("div",null,(null==r?void 0:r.childImageSharp)&&n.createElement(c.G,{image:(0,c.d)(r),alt:t}),!(null!=r&&r.childImageSharp)&&n.createElement(c.S,{src:"../../content/images/logos/transparent/transparent.svg",alt:t,width:128,__imageData:a(4489)}))},s=function(e){var t=e.github,a=e.twitter,r=e.blog,l=e.linkedin;return n.createElement("ul",{className:"author social-media-buttons"},t&&n.createElement("li",{className:"author"},n.createElement("a",{href:"https://github.com/"+t,target:"_blank",rel:"noreferrer noopener"},"Github")),a&&n.createElement("li",{className:"author"},n.createElement("a",{href:"https://twitter.com/"+a,target:"_blank",rel:"noreferrer noopener"},"Twitter")),r&&n.createElement("li",{className:"author"},n.createElement("a",{href:r,target:"_blank",rel:"noreferrer noopener"},"Blog")),l&&n.createElement("li",{className:"author"},n.createElement("a",{href:"https://www.linkedin.com/in/"+l,target:"_blank",rel:"noreferrer noopener"},"LinkedIn")))},o=a(1599),d=function(e){var t=e.title,a=e.path,l=(0,r.useStaticQuery)("1271460761").site.siteMetadata.siteUrl,c=new URL(l);return c.pathname=(0,r.withPrefix)(a),n.createElement("a",{className:"twitter-share-button",href:"https://twitter.com/intent/tweet?text="+encodeURIComponent(t)+"&amp;url="+encodeURIComponent(c.toString()),"data-lang":"en",rel:"noreferrer nofollow",target:"_blank"},"Tweet")},m=function(e){var t=e.topicId;return n.useEffect((function(){if(t){var e={discourseUrl:"https://community.jenkins.io/"};"*"!==t&&(e.topicId=t.replace(/\/\s*$/,"").replace(/.*\//,"")),window.DiscourseEmbed=e;var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=window.DiscourseEmbed.discourseUrl+"javascripts/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)}}),[t]),t?n.createElement("div",null,n.createElement("b",{className:"title"},"Discuss"),n.createElement("div",{id:"discourse-comments"})):n.createElement("div",null)},u=a(528),g=function(e){var t,a,l=e.name,c=e.html,o=e.blogroll,d=e.slug,m=e.avatar,u=e.twitter,g=e.github,h=e.linkedin,b=e.blog;return n.createElement("div",null,!o&&n.createElement("h2",null,l),n.createElement("table",{className:"author box"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",{style:{width:(null==m||null===(t=m.childImageSharp)||void 0===t||null===(a=t.gatsbyImageData)||void 0===a?void 0:a.width)||128}},n.createElement(i,{avatar:m,name:l})),n.createElement("td",null,!o&&n.createElement("b",{className:"author name"},n.createElement(r.Link,{to:d},l)),c&&n.createElement("p",{dangerouslySetInnerHTML:{__html:c}}),!c&&n.createElement("p",null,"This author has no biography defined.\n            See social media links referenced below."),n.createElement(s,{twitter:u,github:g,linkedin:h,blog:b}))))))},h=function(e){var t=e.authors,a=e.blogroll;return n.createElement("div",{id:"about-the-author"},n.createElement("b",{className:"author about-header"},"About the Author",t.length>1?"s":""),t.map((function(e){return n.createElement(g,Object.assign({key:e.id,blogroll:a},e))})))},b=function(e){var t=e.data.blog,a=t.title,c=t.date,i=t.authors,s=t.html,g=t.tags,b=t.slug,p=t.links;return n.createElement(l.Z,null,n.createElement("div",{className:"container blog-post"},n.createElement("div",{className:"row body"},n.createElement("div",{id:"content",className:"col-md-11 col-md-offset-1 main-content"},n.createElement("div",{className:"content-top"},n.createElement("h1",null,n.createElement(r.Link,{to:b,title:a},a)),n.createElement("div",{style:{float:"right",clear:"all"}},n.createElement(d,{title:a,path:b}),n.createElement("div",{className:"post-attrs"},n.createElement("span",{className:"submitted"},"Published on"," ",new Date(c).toLocaleDateString()," ","by"," ",(0,u.c)(i.map((function(e){return n.createElement(r.Link,{to:e.slug},e.name)})),", ")),n.createElement(o.Z,{tags:g||[]})),n.createElement("div",{dangerouslySetInnerHTML:{__html:s}}),n.createElement(h,{authors:i,blogroll:!0})),n.createElement(m,{topicId:p.discourse}))))))}},528:function(e,t,a){a.d(t,{c:function(){return n},q:function(){return r}});var n=function(e,t){return e.length?e.reduce((function(e,a){return[e,t,a]})):[]},r=["Jan","Feb","March","April","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]},4489:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/gatsby-jenkins-io/static/22de4e51911fdabdc5779fd346776d1a/d2695/transparent.svg","srcSet":"/gatsby-jenkins-io/static/22de4e51911fdabdc5779fd346776d1a/01f60/transparent.svg 32w,\\n/gatsby-jenkins-io/static/22de4e51911fdabdc5779fd346776d1a/a9d48/transparent.svg 64w,\\n/gatsby-jenkins-io/static/22de4e51911fdabdc5779fd346776d1a/d2695/transparent.svg 128w","sizes":"(min-width: 128px) 128px, 100vw"},"sources":[{"srcSet":"/gatsby-jenkins-io/static/22de4e51911fdabdc5779fd346776d1a/cd726/transparent.webp 32w,\\n/gatsby-jenkins-io/static/22de4e51911fdabdc5779fd346776d1a/a1c0b/transparent.webp 64w,\\n/gatsby-jenkins-io/static/22de4e51911fdabdc5779fd346776d1a/2f026/transparent.webp 128w","type":"image/webp","sizes":"(min-width: 128px) 128px, 100vw"}]},"width":128,"height":177}')}}]);
//# sourceMappingURL=component---src-templates-post-js-51ac279826b26e8afb4c.js.map