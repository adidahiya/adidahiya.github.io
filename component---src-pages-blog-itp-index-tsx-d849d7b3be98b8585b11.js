(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{148:function(e,n,t){"use strict";t.r(n),t.d(n,"query",function(){return u});t(191),t(87),t(79),t(55),t(84);var a=t(40),r=t(192),o=t(0),i=t.n(o),A=t(170),l="/blog/itp/";n.default=function(e){var n=e.data.allMarkdownRemark.edges.map(function(e){return e.node}).filter(function(e){return 0===e.fields.slug.indexOf(l)}),t=Object(r.uniq)(n.map(function(e){return e.fields.slug.substr(l.length).split("/")[0]}));return i.a.createElement(A.a,null,i.a.createElement("h4",null,"ITP blog"),i.a.createElement("p",null,t.map(function(e){return i.a.createElement(c,{key:e,name:e,blogPosts:n})})))};var c=function(e){var n,t,r=(n=e.blogPosts,t=e.name,n.filter(function(e){return 0===e.fields.slug.indexOf(""+l+t)}));return i.a.createElement("div",{className:"blog-category"},i.a.createElement("h3",null,i.a.createElement(a.Link,{to:"/blog/itp/"+e.name},e.name)),i.a.createElement("ul",null,r.map(function(e){return i.a.createElement(s,{key:e.fields.slug,post:e})})))},s=function(e){var n=e.post;return i.a.createElement("li",null,i.a.createElement(a.Link,{to:n.fields.slug},n.frontmatter.title),i.a.createElement(A.b,{date:n.frontmatter.date,small:!0,style:{marginLeft:20}}))};var u="954300554"},155:function(e,n,t){"use strict";t.d(n,"a",function(){return v});t(79);var a=t(6),r=t.n(a),o=t(10),i=t(40),A=t(0),l=t.n(A),c=t(164),s=t.n(c),u=t(156),d=t(157),p=t(158),f=t(159),m=t.n(f),g=function(){return l.a.createElement("div",{className:m.a.header},l.a.createElement("div",null,l.a.createElement("h1",null,l.a.createElement(i.Link,{to:"/"},"adi.🍕"))))},h=[{name:"description",content:"Adi Dahiya's website"},{name:"keywords",content:"portfolio, blog, ITP, photography, art, documentation"}],E=h.concat([{"http-equiv":"refresh",content:"0; URL='/'"}]),w=[{href:u,rel:"icon",sizes:"16x16",type:"image/png"},{href:d,rel:"icon",sizes:"32x32",type:"image/png"},{href:p,rel:"icon",sizes:"48x48",type:"image/png"}],v=function(e){function n(){return e.apply(this,arguments)||this}r()(n,e);var t=n.prototype;return t.componentDidMount=function(){function e(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];window.dataLayer.push(n)}this.shouldRenderAnalytics(window.location)&&(window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-126153749-1"))},t.render=function(){var e=this;return l.a.createElement(o.Location,null,function(n){var t=n.location,a=0===t.pathname.indexOf("/public"),r=l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null),l.a.createElement("div",{className:m.a.body},e.props.children)),o=l.a.createElement("p",null,"Contents have moved... redirecting to root page");return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{title:"Adi Dahiya",link:w,meta:a?E:h}),a?o:r,e.shouldRenderAnalytics(t)&&l.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-126153749-1"}))})},t.shouldRenderAnalytics=function(e){return"localhost"!==e.hostname},n}(l.a.Component)},156:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIVJREFUeNpi/P//PwMpgImBRDBQGjrBAKsUC1bRe/fuvX//HqsUI2YorV69GqJaUFAwNDQUXcd/DABUhMZABuh+AJoNNBjCVlJSArqNgB+Afj179mxYWBjEJ0Cyo6MDn5NcXFyQuWlpaWgKUDTMnDlz1apVyCJ3794F2oAswjgM0hJAgAEAatqqYsvIfaQAAAAASUVORK5CYII="},157:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAOxJREFUeNrsVsENhCAQVHMN2AIt2AItaAlSArZgC5QgJWArWoKUwE1CcjF3BpaI92IfZiXuzu6MY6ydc9WT0VQPRwEoAP8GmKZJCJFU8kp6Wmvdtq21FldiSU13slIKrX0upaQO5cjRdd1xHEgYY/Qqqgb7vqOvZ4ZzDq4ybzCOozHG59u29X1PLCQBgBnwc0lXHoogL0Y+n+AWh9koupwXeuTZYF3Xj7xfS1CkjvtgGIaAs5ZluUXRr7ypUjep8p4Dfp7n+dYGgfF9RF3dhD9tMG14Phgw8r4GwNE9SnFYJERd/osKQAGo3gIMAFwJtpmrZ1aDAAAAAElFTkSuQmCC"},158:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVhJREFUeNrsmOGNgzAMhUl0C7ACK7ACK7ACK7ACK8AKjAAjwAgwAoxAnxoJVS1cY5tTOMn+UdFghecvfgnCbNsW3SlsdLNQQSpIBakgFaSCggia59kY0/f9XQQ1TZPnedu2F8y1iWNZliRJ9l/hbBcQAhjgieO4KAqgCk8oTdNpmhwqXAcmhEZOnoFrQIIgKSRhQVisruv2v0CVZVkwQvMzoGAfcajGcQxje7QzGvltsCxL0apJ8ILHWZuz/W8lm+EnHhci/0vcfoZB4n/LdjseCZ8f3sU4/yTh1YFFGYbhlwS2/38YNazrCmN/7RKkYVNwG8HfEqqqqq7rr2nYMAGSOnnEa2fPTKwa1f+W9+rjmYxMsv+peEhFM/xPI4ReRpOeuf3Q/yiA9mpLdfvr2e4TVP9bqttfz3afcLaH/68nhGPcx+1C/xv9xqiCVJAKUkEq6J8LeggwAO9wSX0n2nsFAAAAAElFTkSuQmCC"},159:function(e,n,t){e.exports={header:"defaultLayout-module--header--G28ik",body:"defaultLayout-module--body--3jKPt"}},161:function(e,n,t){"use strict";t.d(n,"a",function(){return u});var a=t(6),r=t.n(a),o=t(165),i=t.n(o),A=t(0),l=t.n(A),c=t(162),s=t.n(c);"undefined"!=typeof window&&(t(166),t(167));var u=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(n=e.call.apply(e,[this].concat(a))||this).containerEl=void 0,n.instance=void 0,n}r()(n,e);var t=n.prototype;return t.componentDidMount=function(){var e=this;if(null!=this.containerEl){var n=this.props,t=n.width,a=n.height;this.instance=new i.a(function(n){if(e.props.sketch(n),null!=t&&null!=a){var r=n.setup;n.setup=function(){n.createCanvas(t,a),r()}}},this.containerEl),this.props.autoFocus&&this.containerEl.focus()}},t.render=function(){var e=this,n=this.props,t=n.width,a=n.height;return l.a.createElement("div",{className:s.a.processingSketch,ref:function(n){return e.containerEl=n},style:{width:t,height:a}})},n}(l.a.Component);u.defaultProps={autoFocus:!0,sketch:function(){}}},162:function(e,n,t){e.exports={processingSketch:"p5Canvas-module--processingSketch--1RPUV"}},170:function(e,n,t){"use strict";var a=t(155),r=(t(161),t(30),t(168),t(0)),o=function(e){var n=e.date,t=e.small,a=e.style;return r.createElement("p",{className:"timestamp",style:Object.assign({color:"gray",display:"inline-block"},a)},t?r.createElement("small",null,"(",n,")"):n)};t.d(n,"a",function(){return a.a}),t.d(n,"b",function(){return o})}}]);
//# sourceMappingURL=component---src-pages-blog-itp-index-tsx-d849d7b3be98b8585b11.js.map