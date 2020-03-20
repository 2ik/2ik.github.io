(function(e){function t(t){for(var s,o,a=t[0],c=t[1],u=t[2],l=0,h=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);d&&d(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},r={app:0},i=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"144a":function(e,t,n){"use strict";var s=n("98fd"),r=n.n(s);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Questions")],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper-covid"},[n("section",[n("div",{staticClass:"content"},[n("transition",{attrs:{name:"bounce",mode:"out-in"}},[e.questionIndex<0?n("div",{staticClass:"intro"},[n("div",{staticClass:"logo"}),n("h1",[e._v("Coronavirus test")]),n("p",[e._v("Check yourself can you be a carrier of coronavirus")]),n("div",{staticClass:"button-ready"},[n("button",{staticClass:"btn",on:{click:function(t){e.questionIndex=0}}},[e._v("Play Now")])])]):e._e()]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.questionIndex<e.quiz.questions.length&&e.questionIndex>-1,expression:"questionIndex < quiz.questions.length && questionIndex > -1"}],staticClass:"game"},e._l(e.quiz.questions,(function(t,s){return n("div",{key:s},[n("transition",{attrs:{name:"no-mode-translate-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:s===e.questionIndex,expression:"index === questionIndex"}],key:s,staticClass:"subject"},[n("h2",[e._v(e._s(t.text))]),n("div",{staticClass:"list-answer"},e._l(t.responses,(function(t,r){return n("span",{key:s+"-"+r},[n("label",{staticClass:"checkbox-label"},[n("input",{attrs:{type:"radio"}}),n("span",{staticClass:"checkbox-title",class:{error:e.userAnswers[s]==r&&!t.correct,success:void 0!==e.userAnswers[s]&&t.correct},on:{click:function(t){return e.sendAnswer(s,r)}}},[e._v(" "+e._s(t.text)+" "),t.src?n("img",{attrs:{src:t.src}}):e._e(),void 0!==e.userAnswers[s]&&t.correct?n("p",{staticClass:"info-answer",domProps:{innerHTML:e._s(t.answer||"The answer is correct")}}):e._e(),e.userAnswers[s]!=r||t.correct?e._e():n("p",{staticClass:"info-error",domProps:{innerHTML:e._s(t.error||"The answer is incorrect")}})])])])})),0),n("div",{staticClass:"button-ready"},[e.questionIndex>0?n("button",{staticClass:"btn",on:{click:e.prev}},[e._v(" prev ")]):e._e(),n("button",{staticClass:"btn",attrs:{disabled:void 0===e.userAnswers[s]},on:{click:e.next}},[e._v(" next ")])])])])],1)})),0),n("transition",{attrs:{name:"bounce",mode:"out-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.questionIndex===e.quiz.questions.length,expression:"questionIndex === quiz.questions.length"}],staticClass:"result"},[n("h2",[e._v(" Finished ")]),n("p",[e._v("Total score: "+e._s(e.score())+" / "+e._s(e.quiz.questions.length))]),n("div",{staticClass:"button-ready"},[n("button",{staticClass:"btn",on:{click:function(t){return e.restart()}}},[e._v("Restart")])])])])],1)]),n("div",{staticClass:"bg"})])},a=[],c=(n("4de4"),{title:"Coronavirus test",description:"Check yourself can you be a carrier of coronavirus",questions:[{text:"How long can symptoms of a new coronavirus infection develop?",responses:[{text:"2 days"},{text:"14 days",correct:!0,answer:"Symptoms may occur within 14 days after contact with an infectious patient."},{text:"2 months"},{text:"1 month"}]},{text:"In which country was the new COVID-19 virus first discovered?",responses:[{text:"Italy"},{text:"Germany"},{text:"China",correct:!0,answer:"The new virus was discovered in late December 2019 in the city of Wuhan, Hubei province of Central China."},{text:"USA"}]},{text:"How is the virus transmitted?",responses:[{text:"By air and by handshakes",correct:!0,answer:"True, you can get infected with coronavirus by airborne droplets and through food and household items contaminated with the virus."},{text:"From Pets"},{text:"Through blood transfusions"},{text:"This is a hereditary disease"}]},{text:"Immunity to COVID-19 is...",responses:[{text:"Lifelong"},{text:"5-6 years old"},{text:"20 years old"},{text:"You can get sick again",correct:!0,answer:"The immune system is unstable, you can get sick again"}]},{text:"Can I get infected in a warm country?",responses:[{text:"No, the virus doesn 't survive hot temperatures"},{text:"Yes, but where it is very cold, there is no virus"},{text:"You can only get infected in China and Italy"},{text:"Yes, you can get it in any country",correct:!0,answer:"The virus is transmitted from person to person regardless of air temperature"}]},{text:"What about the vaccine?",responses:[{text:"There is no cure and it cannot be created"},{text:"Scientists have already developed an antibiotic, but it is not available to ordinary people"},{text:"The drug has been around for a long time , but it's too expensive"},{text:"The vaccine is not ready yet, but doctors are already determining the strain",correct:!0,answer:"Scientists in China have bred two main strains of Covid-19 disease that circulate in the human body and cause infections"}]}]}),u={data:function(){return{quiz:c,questionIndex:-1,userAnswers:[]}},methods:{next:function(){this.questionIndex++},prev:function(){this.questionIndex--},score:function(){var e=this;return this.userAnswers.filter((function(t,n){return e.quiz.questions[n].responses[t].correct})).length},restart:function(){this.questionIndex=0,this.userAnswers=[]},sendAnswer:function(e,t){void 0===this.userAnswers[e]&&this.userAnswers.push(t)}}},d=u,l=(n("144a"),n("2877")),h=Object(l["a"])(d,o,a,!1,null,null,null),p=h.exports,v={name:"App",components:{Questions:p}},f=v,x=Object(l["a"])(f,r,i,!1,null,null,null),y=x.exports;n("c1c3");s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(y)}}).$mount("#app")},"98fd":function(e,t,n){},c1c3:function(e,t,n){}});
//# sourceMappingURL=app.3d7d7ccd.js.map