"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[327],{6179:function(e,t,n){var a=n(7294),l=n(5414),r=n(5444);function i(e){var t,n,i=e.description,c=e.lang,o=e.meta,u=e.title,d=(0,r.useStaticQuery)("63159454").site,m=i||d.siteMetadata.description,s=null===(t=d.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(l.q,{htmlAttributes:{lang:c},title:u,titleTemplate:s?"%s | "+s:null,meta:[{name:"description",content:m},{property:"og:title",content:u},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=d.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:u},{name:"twitter:description",content:m}].concat(o)})}i.defaultProps={lang:"en",meta:[],description:""},t.Z=i},3114:function(e,t,n){var a=n(3366),l=n(7294),r=n(9509),i=["children","title"],c=function(e){var t=e.children,n=e.title,c=(0,a.Z)(e,i);return l.createElement(r.Z,Object.assign({},c,{title:n}),l.createElement("div",{className:"container"},l.createElement("div",{className:"row body"},l.createElement("h1",null,n),t)))};c.displayName="SimplePageLayout",t.Z=c},2151:function(e,t,n){n.r(t);var a=n(7294),l=n(2359),r=n(3114),i=n(6179),c=function(e){var t=e.data;return a.createElement(r.Z,{title:"Award"},a.createElement(i.Z,{title:"Award"}),t.allAwardsYaml.edges.map((function(e){var t,n,r,i=e.node;return a.createElement("div",{key:i.id},(null==i||null===(t=i.image)||void 0===t?void 0:t.childImageSharp)&&a.createElement(l.G,{image:(0,l.d)(i.image),style:{float:"right",margin:"5px"},alt:"Award"}),!(null!=i&&null!==(n=i.image)&&void 0!==n&&n.childImageSharp)&&(null==i||null===(r=i.image)||void 0===r?void 0:r.publicURL)&&a.createElement("img",{src:i.image.publicURL,style:{float:"right",margin:"5px"},alt:"Award"}),a.createElement("h2",null,i.url&&a.createElement("a",{href:i.url},i.title),!i.url&&i.title),i.description&&a.createElement("p",null,i.description),i.quote&&a.createElement("blockquote",null,i.quote))})))};c.displayName="AwardPage",t.default=c},3366:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---src-pages-awards-jsx-65ac1b4c476cfcef60b9.js.map