(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[942],{3459:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var r=a(2122),l=a(9756),n=a(5900),s=a.n(n),c=a(7294),o=a(9541),m=["xl","lg","md","sm","xs"],i=c.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.noGutters,u=e.as,d=void 0===u?"div":u,f=(0,l.Z)(e,["bsPrefix","className","noGutters","as"]),E=(0,o.vE)(a,"row"),v=E+"-cols",g=[];return m.forEach((function(e){var t,a=f[e];delete f[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&g.push(""+v+r+"-"+t)})),c.createElement(d,(0,r.Z)({ref:t},f,{className:s().apply(void 0,[n,E,i&&"no-gutters"].concat(g))}))}));i.displayName="Row",i.defaultProps={noGutters:!1};var u=i,d=["xl","lg","md","sm","xs"],f=c.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,m=e.as,i=void 0===m?"div":m,u=(0,l.Z)(e,["bsPrefix","className","as"]),f=(0,o.vE)(a,"col"),E=[],v=[];return d.forEach((function(e){var t,a,r,l=u[e];if(delete u[e],"object"==typeof l&&null!=l){var n=l.span;t=void 0===n||n,a=l.offset,r=l.order}else t=l;var s="xs"!==e?"-"+e:"";t&&E.push(!0===t?""+f+s:""+f+s+"-"+t),null!=r&&v.push("order"+s+"-"+r),null!=a&&v.push("offset"+s+"-"+a)})),E.length||E.push(f),c.createElement(i,(0,r.Z)({},u,{ref:t,className:s().apply(void 0,[n].concat(E,v))}))}));f.displayName="Col";var E=f,v=a(6187),g=a(3552),p=function(e){function t(t,a){return e.call(this,t)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props.tags;return null==e?c.createElement("div",null):c.createElement("div",{className:"tags"},c.createElement("span",{role:"img","aria-label":"tags"},"🔖"),e.map((function(e,t){return c.createElement("a",{href:"/docs/"+e,key:t},e)})))},t}(c.Component);function h(e){var t=e.data;return c.createElement(v.Z,null,t.map((function(e,t){return e=e.node,c.createElement("div",{key:t},c.createElement("div",null,c.createElement("a",{className:"blog-link",href:"/docs"+e.fields.slug},c.createElement("h2",null,e.frontmatter.title)),c.createElement("div",{className:"tag-obj"},"  📅 ",e.frontmatter.date,"    "),c.createElement(u,null,void 0!==e.frontmatter.featuredImage&&null!==e.frontmatter.featuredImage&&c.createElement(E,{bsPrefix:"test img-col col",xl:2},c.createElement("img",{className:"card-img",alt:"这本该是一张图片",src:e.frontmatter.featuredImage.childImageSharp.fluid.src})),c.createElement(E,null,c.createElement("div",{dangerouslySetInnerHTML:{__html:null===e.frontmatter.description?e.excerpt:e.frontmatter.description}}))),c.createElement("div",{className:"tag-obj"},c.createElement(p,{tags:e.frontmatter.tags}))),c.createElement("br",null),c.createElement("hr",null))})))}},8223:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var r=a(7294),l=a(6187);function n(e){var t=e.tags_list;return r.createElement(l.Z,{className:"docs-category-body"},r.createElement("h4",{className:"center-text"},"标签"),r.createElement("br",null),r.createElement("ul",{className:"tags-list"},t.map((function(e,t){return null!=e?r.createElement("li",{className:"tags",key:t},r.createElement("a",{href:"/docs/"+e},"< ",e," />")):""}))))}},5929:function(e,t,a){"use strict";a.r(t);var r=a(7294),l=a(9202),n=a(3459),s=a(8223);t.default=function(e){var t=e.data,a=(e.location,e.pageContext),c=t.allMarkdownRemark.edges;return r.createElement(l.Z,null,r.createElement("div",{style:{display:"block"}},r.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},r.createElement("div",{className:"docs-body"},r.createElement("div",null,r.createElement(n.Z,{data:c})),r.createElement("div",{className:"docs-category"},r.createElement(s.Z,{tags_list:a.tags_list}))))))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-38e83bf60c590c892f69.js.map