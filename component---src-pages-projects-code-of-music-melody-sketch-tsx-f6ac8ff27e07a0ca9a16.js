(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{151:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return h});n(79),n(60),n(84),n(196),n(198),n(30),n(172),n(55);var a=n(6),o=n.n(a),r=n(40),i=n(0),s=n.n(i),c=n(176),l=n.n(c),u=n(155),A=n(161),p=400,h=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))||this).state={isPlaying:!1,scale:d(),octaveToFilter:0},e.synth=void 0,e.pattern=void 0,e.isPatternPlaying=!1,e.handlePlayToggle=function(){"started"===l.a.Transport.state?(l.a.Transport.stop(),e.setState({isPlaying:!1})):(l.a.Transport.start(),e.setState({isPlaying:!0}))},e.sketch=function(t){var n=[];t.setup=function(){},t.draw=function(){t.noStroke();var a=t.millis(),o=Math.floor(t.map(t.mouseY,0,p,2,6));t.background(64*Math.floor(t.map(t.mouseY,0,p,4,1)));var r="255, 204, 0";switch(o){case 3:r="224, 96, 224";break;case 4:r="96, 224, 224";break;case 5:r="224, 96, 96"}"started"===l.a.Transport.state&&e.isPatternPlaying&&n.push({x:t.mouseX,y:t.mouseY,triggered:a,color:r});for(var i=[],s=0;s<n.length;s++){var c=n[s],u=t.map(a,c.triggered,a,0,1);t.fill("rgba("+c.color+", "+u+")"),t.ellipse(c.x,c.y,10),0!==c.x&&i.push(Object.assign({},c,{x:c.x-2}))}if(n=i,e.state.octaveToFilter!==o&&null!=e.pattern){var A=d(o);e.pattern.values=A,e.setState({scale:A,octaveToFilter:o})}}},e}o()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;l.a.Transport.bpm.value=160,this.synth=new l.a.Synth({oscillator:{type:"sine"},envelope:{attack:.05,decay:.6,sustain:1,release:2}}).toMaster(),this.synth.volume.value=-10,this.pattern=new l.a.Pattern(function(e,n){t.isPatternPlaying=!0,t.synth.triggerAttackRelease(n,"16t",e),setTimeout(function(){return t.isPatternPlaying=!1},new l.a.Time("16t").toMilliseconds())},this.state.scale,"randomWalk"),this.pattern.interval="8n",this.pattern.humanize=!0,this.pattern.start()},n.componentWillUnmount=function(){this.pattern.stop(),this.pattern.dispose()},n.render=function(){return s.a.createElement(u.a,null,s.a.createElement("h3",null,"Code of Music"),s.a.createElement("p",null,"Week 3 melody sketch (",s.a.createElement(r.Link,{to:"/blog/itp/code-of-music/melody"},"blog post"),","," ",s.a.createElement("a",{href:"https://github.com/adidahiya/adidahiya.github.io/blob/develop/src/pages/projects/code-of-music/melody-sketch.tsx"},"code"),")"),s.a.createElement("button",{type:"button",onClick:this.handlePlayToggle,style:{marginBottom:20}},this.state.isPlaying?"Stop":"Play")," ",s.a.createElement("span",null,this.state.scale.join(" ")),s.a.createElement(A.a,{sketch:this.sketch,width:888,height:p}))},e}(s.a.PureComponent),g=["C2","Eb2","F2","Gb2","G2","Bb3"];function d(t){if(void 0===t&&(t=0),null==l.a)return g;var e=t.toString();return g.reduce(function(t,e){return t.concat(new l.a.Frequency(e).harmonize([0,12,24,36]))},[]).map(function(t){return t.toNote()}).filter(function(n){var a=(t+1).toString();return-1===n.indexOf(e)&&-1===n.indexOf(a)})}},155:function(t,e,n){"use strict";n.d(e,"a",function(){return w});n(79);var a=n(6),o=n.n(a),r=n(10),i=n(40),s=n(0),c=n.n(s),l=n(164),u=n.n(l),A=n(156),p=n(157),h=n(158),g=n(159),d=n.n(g),f=function(){return c.a.createElement("div",{className:d.a.header},c.a.createElement("div",null,c.a.createElement("h1",null,c.a.createElement(i.Link,{to:"/"},"adi.🍕"))))},m=[{name:"description",content:"Adi Dahiya's website"},{name:"keywords",content:"portfolio, blog, ITP, photography, art, documentation"}],v=m.concat([{"http-equiv":"refresh",content:"0; URL='/'"}]),y=[{href:A,rel:"icon",sizes:"16x16",type:"image/png"},{href:p,rel:"icon",sizes:"32x32",type:"image/png"},{href:h,rel:"icon",sizes:"48x48",type:"image/png"}],w=function(t){function e(){return t.apply(this,arguments)||this}o()(e,t);var n=e.prototype;return n.componentDidMount=function(){function t(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];window.dataLayer.push(e)}this.shouldRenderAnalytics(window.location)&&(window.dataLayer=window.dataLayer||[],t("js",new Date),t("config","UA-126153749-1"))},n.render=function(){var t=this;return c.a.createElement(r.Location,null,function(e){var n=e.location,a=0===n.pathname.indexOf("/public"),o=c.a.createElement(c.a.Fragment,null,c.a.createElement(f,null),c.a.createElement("div",{className:d.a.body},t.props.children)),r=c.a.createElement("p",null,"Contents have moved... redirecting to root page");return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{title:"Adi Dahiya",link:y,meta:a?v:m}),a?r:o,t.shouldRenderAnalytics(n)&&c.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-126153749-1"}))})},n.shouldRenderAnalytics=function(t){return"localhost"!==t.hostname},e}(c.a.Component)},156:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIVJREFUeNpi/P//PwMpgImBRDBQGjrBAKsUC1bRe/fuvX//HqsUI2YorV69GqJaUFAwNDQUXcd/DABUhMZABuh+AJoNNBjCVlJSArqNgB+Afj179mxYWBjEJ0Cyo6MDn5NcXFyQuWlpaWgKUDTMnDlz1apVyCJ3794F2oAswjgM0hJAgAEAatqqYsvIfaQAAAAASUVORK5CYII="},157:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAOxJREFUeNrsVsENhCAQVHMN2AIt2AItaAlSArZgC5QgJWArWoKUwE1CcjF3BpaI92IfZiXuzu6MY6ydc9WT0VQPRwEoAP8GmKZJCJFU8kp6Wmvdtq21FldiSU13slIKrX0upaQO5cjRdd1xHEgYY/Qqqgb7vqOvZ4ZzDq4ybzCOozHG59u29X1PLCQBgBnwc0lXHoogL0Y+n+AWh9koupwXeuTZYF3Xj7xfS1CkjvtgGIaAs5ZluUXRr7ypUjep8p4Dfp7n+dYGgfF9RF3dhD9tMG14Phgw8r4GwNE9SnFYJERd/osKQAGo3gIMAFwJtpmrZ1aDAAAAAElFTkSuQmCC"},158:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVhJREFUeNrsmOGNgzAMhUl0C7ACK7ACK7ACK7ACK8AKjAAjwAgwAoxAnxoJVS1cY5tTOMn+UdFghecvfgnCbNsW3SlsdLNQQSpIBakgFaSCggia59kY0/f9XQQ1TZPnedu2F8y1iWNZliRJ9l/hbBcQAhjgieO4KAqgCk8oTdNpmhwqXAcmhEZOnoFrQIIgKSRhQVisruv2v0CVZVkwQvMzoGAfcajGcQxje7QzGvltsCxL0apJ8ILHWZuz/W8lm+EnHhci/0vcfoZB4n/LdjseCZ8f3sU4/yTh1YFFGYbhlwS2/38YNazrCmN/7RKkYVNwG8HfEqqqqq7rr2nYMAGSOnnEa2fPTKwa1f+W9+rjmYxMsv+peEhFM/xPI4ReRpOeuf3Q/yiA9mpLdfvr2e4TVP9bqttfz3afcLaH/68nhGPcx+1C/xv9xqiCVJAKUkEq6J8LeggwAO9wSX0n2nsFAAAAAElFTkSuQmCC"},159:function(t,e,n){t.exports={header:"defaultLayout-module--header--G28ik",body:"defaultLayout-module--body--3jKPt"}},161:function(t,e,n){"use strict";n.d(e,"a",function(){return A});var a=n(6),o=n.n(a),r=n(165),i=n.n(r),s=n(0),c=n.n(s),l=n(162),u=n.n(l);"undefined"!=typeof window&&(n(166),n(167));var A=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))||this).containerEl=void 0,e.instance=void 0,e}o()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;if(null!=this.containerEl){var e=this.props,n=e.width,a=e.height;this.instance=new i.a(function(e){if(t.props.sketch(e),null!=n&&null!=a){var o=e.setup;e.setup=function(){e.createCanvas(n,a),o()}}},this.containerEl),this.props.autoFocus&&this.containerEl.focus()}},n.render=function(){var t=this,e=this.props,n=e.width,a=e.height;return c.a.createElement("div",{className:u.a.processingSketch,ref:function(e){return t.containerEl=e},style:{width:n,height:a}})},e}(c.a.Component);A.defaultProps={autoFocus:!0,sketch:function(){}}},162:function(t,e,n){t.exports={processingSketch:"p5Canvas-module--processingSketch--1RPUV"}},172:function(t,e,n){var a=n(7);a(a.P,"Array",{fill:n(173)}),n(57)("fill")},173:function(t,e,n){"use strict";var a=n(33),o=n(82),r=n(34);t.exports=function(t){for(var e=a(this),n=r(e.length),i=arguments.length,s=o(i>1?arguments[1]:void 0,n),c=i>2?arguments[2]:void 0,l=void 0===c?n:o(c,n);l>s;)e[s++]=t;return e}},175:function(t,e,n){"use strict";var a=n(11);t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},196:function(t,e,n){"use strict";n(197);var a=n(11),o=n(175),r=n(19),i=/./.toString,s=function(t){n(20)(RegExp.prototype,"toString",t,!0)};n(18)(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?s(function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?o.call(t):void 0)}):"toString"!=i.name&&s(function(){return i.call(this)})},197:function(t,e,n){n(19)&&"g"!=/./g.flags&&n(29).f(RegExp.prototype,"flags",{configurable:!0,get:n(175)})},198:function(t,e,n){var a=Date.prototype,o=a.toString,r=a.getTime;new Date(NaN)+""!="Invalid Date"&&n(20)(a,"toString",function(){var t=r.call(this);return t==t?o.call(this):"Invalid Date"})}}]);
//# sourceMappingURL=component---src-pages-projects-code-of-music-melody-sketch-tsx-f6ac8ff27e07a0ca9a16.js.map