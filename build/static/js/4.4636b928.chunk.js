(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{43:function(e,t,a){"use strict";var n=a(10),l=a(11),r=a(13),c=a(12),s=a(14),i=a(0),o=a.n(i),m=a(51),h=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.error;return e?o.a.createElement("div",null,"Error: ",e.message):o.a.createElement("header",{className:"bg-info"},o.a.createElement("div",{className:"d-flex flex-column flex-md-row align-items-center"},o.a.createElement("div",{className:"bg-info flex-fill"},o.a.createElement("h4",{className:"pl-2"},o.a.createElement(m.a,{className:"text-white",to:"/"},o.a.createElement("i",{className:"fa fa-globe icon32"}),"Option Chain"))),o.a.createElement("nav",{className:""},o.a.createElement("ul",{className:"nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(m.a,{className:"nav-link active text-white",to:"/"},o.a.createElement("i",{className:"fa fa-home icon32"}),o.a.createElement("label",{className:"menuLabel d-none d-md-block"},"Home"))),o.a.createElement("li",{className:"nav-item"},o.a.createElement(m.a,{className:"nav-link active text-white",to:"/strategy-builder"},o.a.createElement("i",{className:"fa fa-sellsy icon32"}),o.a.createElement("label",{className:"menuLabel d-none d-md-block"},"Strategy Builder")))))))}}]),t}(o.a.Component);t.a=h},44:function(e,t,a){"use strict";var n=a(10),l=a(11),r=a(13),c=a(12),s=a(14),i=a(0),o=a.n(i),m=a(46);m.a.initialize("UA-171764678-1"),m.a.pageview(window.location.pathname+window.location.search);var h=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",{className:"footer bg-info border-top"},o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"foote_bottom_ul_amrc"},o.a.createElement("li",null,o.a.createElement("a",{href:"/"},"Home")),o.a.createElement("li",null,o.a.createElement("a",{href:"/"},"Privacy Policy")),o.a.createElement("li",null,o.a.createElement("a",{href:"/"},"Terms & Conditions"))),o.a.createElement("p",{className:"text-center"}," \xa9 Copyright 2020. All Rights Reserved."),o.a.createElement("ul",{className:"social_footer_ul"},o.a.createElement("li",null,o.a.createElement("a",{href:"/"},o.a.createElement("i",{className:"fa fa-facebook"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"/"},o.a.createElement("i",{className:"fa fa-twitter"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"/"},o.a.createElement("i",{className:"fa fa-linkedin"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"/"},o.a.createElement("i",{className:"fa fa-instagram"}))))))}}]),t}(o.a.Component);t.a=h},45:function(e,t,a){"use strict";var n=a(10),l=a(11),r=(window&&window.location&&window.location.hostname,function(){function e(){Object(n.a)(this,e)}return Object(l.a)(e,null,[{key:"getCall",value:function(e){return fetch(e,{method:"GET",headers:new Headers({"accept-encoding":"gzip, deflate, br","accept-language":"en-US,en;q=0.9","Content-Type":"application/json"})})}},{key:"postCall",value:function(e,t){return fetch(e,{method:"POST",body:JSON.stringify(t),headers:new Headers({"accept-encoding":"gzip, deflate, br","accept-language":"en-US,en;q=0.9","Content-Type":"application/json","set-cookie":""})})}}]),e}());a.d(t,"a",function(){return c});var c=function(e){return function(e,t){return r.getCall("./api/option-chain-indices.json").then(function(e){return e.json()}).then(function(t){return e({type:"FetchData",data:t})}).catch(function(t){return e({type:"ERROR",msg:"Unable to fetch data"})})}}},52:function(e,t,a){"use strict";a.r(t);var n=a(42),l=a(0),r=a.n(l),c=a(45),s=a(15),i=a(43),o=a(44),m=function(e){var t,a=Object(l.useState)(0),c=Object(n.a)(a,2),s=c[0],i=c[1],o=Object(l.useState)(!1),m=Object(n.a)(o,2),h=m[0],E=m[1],d=e.ExpDates;return d&&(t=r.a.createElement("select",{className:"form-control",value:s,onChange:function(t){i(t.target.value),e.onChildClick(t.target.value)}},d.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("div",{className:"rows"},r.a.createElement("div",{className:"float-right"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("div",{className:"input-group mb-2 mr-sm-2"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},"Expiry Date")),t),r.a.createElement("div",{className:"form-check mb-2 mr-sm-2"},r.a.createElement("label",{className:"form-check-label"},"Underlying Index:  ",e.selectOptions," ",e.underlyingValue," As on ",e.timeStamp)),r.a.createElement("div",{className:"btn-group-toggle"},r.a.createElement("label",{className:"btn btn-secondary active",onClick:function(e){E(!h),h?document.querySelectorAll(".trendShow").forEach(function(e){return e.classList.add("d-none")}):document.querySelectorAll(".trendShow").forEach(function(e){return e.classList.remove("d-none")})}},h?"Remove":"Show"," Trend")))))},h=a(51),E=function(e){var t,a=e.item;function n(e){var t=Math.abs(e);if(t>6)return 1;var a=1/(1+.2316419*t),n=((((1.330274429*a-1.821255978)*a+1.781477937)*a-.356563782)*a+.31938153)*a;return n=1-.3989423*Math.exp(e/2*-e)*n,e<0&&(n=1-n),n}function l(e,t){if(!(e&&e.strikePrice&&e.impliedVolatility&&e.lastPrice))return{callPrice:0,delta:0,theta:0,gamma:0,vega:0,rho:0};var a=e.underlyingValue,l=e.strikePrice,r=function(e){var t=new Date,a=new Date(e),n=Math.abs(a.getTime()-t.getTime());return Math.ceil(n/864e5)}(e.expiryDate),c=(e.lastPrice,e.impliedVolatility);return e.lastPrice>0?function(e,t,a,l,r,c,s){var i,o,m,h,E,d,u=a/100,p=c/100,g=l/365,N=0;if("CE"===s){var f=(Math.log(e/t)+(u-N+Math.pow(p,2)/2)*g)/(p*Math.sqrt(g)),P=(Math.log(e/t)+(u-N-Math.pow(p,2)/2)*g)/(p*Math.sqrt(g)),M=n(f),w=n(P);i=e*Math.exp(-1*N*g)*M-t*Math.exp(-1*u*g)*w,o=Math.exp(-1*N*g)*M,m=(e*(1/Math.sqrt(6.28318)*Math.exp(-1*Math.pow(f,2)/2))*p*Math.exp(-1*g*N)/(2*Math.sqrt(g))*-1+N*e*o-u*t*Math.exp(-1*u*g)*n(P))/365,h=1/Math.sqrt(6.28318)*Math.exp(-1*Math.pow(f,2)/2)*Math.exp(-1*g*N)/(e*p*Math.sqrt(g)),E=1/Math.sqrt(6.28318)*Math.exp(-1*Math.pow(f,2)/2)*Math.exp(-1*g*N)*e*Math.sqrt(g)/100,d=t*g*Math.exp(-1*u*g)*w*Math.exp(-1*N*g)/100}else{var C=(Math.log(e/t)+(u-N+Math.pow(p,2)/2)*g)/(p*Math.sqrt(g)),S=(Math.log(e/t)+(u-N-Math.pow(p,2)/2)*g)/(p*Math.sqrt(g));i=t*Math.exp(-1*u*g)*n(-1*S)-e*Math.exp(-1*N*g)*n(-1*C),o=Math.exp(-1*N*g)*(n(C)-1),m=(e*(1/Math.sqrt(6.28318)*Math.exp(-1*Math.pow(C,2)/2))*p*Math.exp(-1*g*N)*-1/(2*Math.sqrt(g))-N*e*n(-1*C)*Math.exp(-1*g*N)+u*t*Math.exp(-1*u*g)*n(-1*S))/365,h=1/Math.sqrt(6.28318)*Math.exp(-1*Math.pow(C,2)/2)*Math.exp(-1*g*N)/(e*p*Math.sqrt(g)),E=1/Math.sqrt(6.28318)*Math.exp(-1*Math.pow(C,2)/2)*Math.exp(-1*g*N)*e*Math.sqrt(g)/100,d=-1*t*g*Math.exp(-1*u*g)*n(-1*S)*Math.exp(-1*N*g)/100}return{R:u.toFixed(2),V:p.toFixed(2),T:g.toFixed(2),D:N.toFixed(2),callPrice:i.toFixed(2),delta:o.toFixed(2),theta:m.toFixed(2),gamma:h.toFixed(2),vega:E.toFixed(2),rho:d.toFixed(2)}}(a,l,6.5,r,0,c,t):void 0}if(a&&(a.CE&&a.CE.lastPrice>1||a.PE&&a.PE.lastPrice>1)){var c,s;if(a.CE&&a.CE.lastPrice){var i=l(a.CE,"CE"),o=a.CE.strikePrice<a.CE.underlyingValue?"bgMoccasin":"";c=r.a.createElement(r.a.Fragment,null,r.a.createElement("td",{className:"trendShow d-none {inTheMoneyCe}"},a.CE.change<0&&a.CE.changeinOpenInterest<0?"BULLISH":"",a.CE.change>0&&a.CE.changeinOpenInterest>0?"BULLISH":"",a.CE.change>0&&a.CE.changeinOpenInterest<0?"BULLISH":"",a.CE.change<0&&a.CE.changeinOpenInterest>0?"BEARISH":""),r.a.createElement("td",{className:"trendShow d-none {inTheMoneyCe}"},a.CE.change<0&&a.CE.changeinOpenInterest<0?"Long Liquidation":"",a.CE.change<0&&a.CE.changeinOpenInterest>0?"Short Buildup":"",a.CE.change>0&&a.CE.changeinOpenInterest>0?"Long Buildup":"",a.CE.change>0&&a.CE.changeinOpenInterest<0?"Short covering":""),r.a.createElement("td",{className:"trendShow d-none {inTheMoneyCe}"},a.CE.changeinOpenInterest>0?"UP":"DOWN"),r.a.createElement("td",{className:"trendShow d-none {inTheMoneyCe}"},a.CE.change>0?"UP":"DOWN"),r.a.createElement("td",{className:"trendShow d-none {inTheMoneyCe}"},a.CE.totalTradedVolume),r.a.createElement("td",{className:"trendShow d-none {inTheMoneyCe}"},a.CE.openInterest),r.a.createElement("td",{className:"trendShow d-none {inTheMoneyCe}"},a.CE.changeinOpenInterest),r.a.createElement("td",{className:"trendShow d-none {inTheMoneyCe}"},a.CE.change.toFixed(2)),r.a.createElement("td",{className:o},i.rho),r.a.createElement("td",{className:o},i.vega),r.a.createElement("td",{className:o},i.gamma),r.a.createElement("td",{className:o},i.theta),r.a.createElement("td",{className:o},i.delta),r.a.createElement("td",{className:o},i.callPrice),r.a.createElement("td",{className:o},r.a.createElement(h.a,{to:"/strategy-builder/"+a.CE.strikePrice+"/CE/"+a.CE.expiryDate},a.CE.lastPrice)),r.a.createElement("td",{className:o},r.a.createElement(h.a,{to:"/strategy-builder/"+a.CE.strikePrice+"/CE/"+a.CE.expiryDate},a.CE.impliedVolatility)))}else c=r.a.createElement(r.a.Fragment,null,r.a.createElement("th",{className:"trendShow d-none",colSpan:"8"}),r.a.createElement("th",{colSpan:"8"}));if(a.PE&&a.PE.lastPrice>1){var m=a.PE.strikePrice>a.PE.underlyingValue?"bgMoccasin":"",E=l(a.PE,"PE");s=r.a.createElement(r.a.Fragment,null,r.a.createElement("td",{className:m},r.a.createElement(h.a,{to:"/strategy-builder/"+a.PE.strikePrice+"/PE/"+a.PE.expiryDate},a.PE.impliedVolatility)),r.a.createElement("td",{className:m},r.a.createElement(h.a,{to:"/strategy-builder/"+a.PE.strikePrice+"/PE/"+a.PE.expiryDate},a.PE.lastPrice)),r.a.createElement("td",{className:m},E.callPrice),r.a.createElement("td",{className:m},E.delta),r.a.createElement("td",{className:m},E.theta),r.a.createElement("td",{className:m},E.gamma),r.a.createElement("td",{className:m},E.vega),r.a.createElement("td",{className:m},E.rho),r.a.createElement("td",{className:"trendShow d-none {inTheMoneyPe}"},a.PE.change.toFixed(2)),r.a.createElement("td",{className:"trendShow d-none {inTheMoneyPe}"},a.PE.changeinOpenInterest),r.a.createElement("td",{className:"trendShow d-none {inTheMoneyPe}"},a.PE.openInterest),r.a.createElement("td",{className:"trendShow d-none {inTheMoneyPe}"},a.PE.totalTradedVolume),r.a.createElement("td",{className:"trendShow d-none {inTheMoneyPe}"},a.PE.change>0?"UP":"DOWN"),r.a.createElement("td",{className:"trendShow d-none {inTheMoneyPe}"},a.PE.changeinOpenInterest>0?"UP":"DOWN"),r.a.createElement("td",{className:"trendShow d-none {inTheMoneyPe}"},a.PE.change<0&&a.PE.changeinOpenInterest<0?"Long Liquidation":"",a.PE.change<0&&a.PE.changeinOpenInterest>0?"Short Buildup":"",a.PE.change>0&&a.PE.changeinOpenInterest>0?"Long Buildup":"",a.PE.change>0&&a.PE.changeinOpenInterest<0?"Short covering":""),r.a.createElement("td",{className:"trendShow d-none {inTheMoneyPe}"},a.PE.change<0&&a.PE.changeinOpenInterest<0?"BULLISH":"",a.PE.change>0&&a.PE.changeinOpenInterest>0?"BULLISH":"",a.PE.change>0&&a.PE.changeinOpenInterest<0?"BULLISH":"",a.PE.change<0&&a.PE.changeinOpenInterest>0?"BEARISH":""))}else s=r.a.createElement(r.a.Fragment,null,r.a.createElement("th",{className:"trendShow d-none",colSpan:"8"}),r.a.createElement("th",{colSpan:"8"}));t=r.a.createElement("tr",{key:a.strikePrice},c,r.a.createElement("th",{className:"text-center"},a.strikePrice),s)}return r.a.createElement(r.a.Fragment,null,t)},d=function(e){var t=e.callPutData;return t?r.a.createElement("div",{className:"rows"},r.a.createElement("table",{className:"table table-sm table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"trendShow d-none text-center",colSpan:"8"},"Trend"),r.a.createElement("th",{className:"text-center",colSpan:"8"},"CE"),r.a.createElement("th",{className:"text-center"},"Strike"),r.a.createElement("th",{className:"text-center",colSpan:"8"},"PE"),r.a.createElement("th",{className:"trendShow d-none text-center",colSpan:"8"},"Trend")),r.a.createElement("tr",null,r.a.createElement("th",{className:"trendShow d-none"},"TREND"),r.a.createElement("th",{className:"trendShow d-none"},"Interpretation"),r.a.createElement("th",{className:"trendShow d-none"},"OI change"),r.a.createElement("th",{className:"trendShow d-none"},"price change"),r.a.createElement("th",{className:"trendShow d-none"},"VOLUME"),r.a.createElement("th",{className:"trendShow d-none"},"OI"),r.a.createElement("th",{className:"trendShow d-none"},"CHNG IN OI"),r.a.createElement("th",{className:"trendShow d-none"},"CHNG"),r.a.createElement("th",null,"Rho"),r.a.createElement("th",null,"Vega"),r.a.createElement("th",null,"Gamma"),r.a.createElement("th",null,"Theta"),r.a.createElement("th",null,"Delta"),r.a.createElement("th",null,"Call Price"),r.a.createElement("th",null,"CE LTP"),r.a.createElement("th",null,"CE IV"),r.a.createElement("th",{className:"text-center"},"Price"),r.a.createElement("th",null,"PE IV"),r.a.createElement("th",null,"PE LTP"),r.a.createElement("th",null,"Call Price"),r.a.createElement("th",null,"Delta"),r.a.createElement("th",null,"Theta"),r.a.createElement("th",null,"Gamma"),r.a.createElement("th",null,"Vega"),r.a.createElement("th",null,"Rho"),r.a.createElement("th",{className:"trendShow d-none"},"CHNG"),r.a.createElement("th",{className:"trendShow d-none"},"CHNG IN OI"),r.a.createElement("th",{className:"trendShow d-none"},"OI"),r.a.createElement("th",{className:"trendShow d-none"},"VOLUME"),r.a.createElement("th",{className:"trendShow d-none"},"price change"),r.a.createElement("th",{className:"trendShow d-none"},"OI change"),r.a.createElement("th",{className:"trendShow d-none"},"Interpretation"),r.a.createElement("th",{className:"trendShow d-none"},"TREND"))),r.a.createElement("tbody",null,t?t.map(function(e){return r.a.createElement(E,{key:e.strikePrice,item:e})}):""))):r.a.createElement("div",{className:"card"},"loading")};t.default=Object(s.b)(function(e){return{list:e.optionChainReducer.data}},function(e){return{onFetchData:function(t){return e(Object(c.a)(t))}}})(function(e){var t=e.onFetchData,a=Object(l.useState)(0),c=Object(n.a)(a,2),h=c[0],E=c[1],u=Object(l.useState)(0),p=Object(n.a)(u,2),g=p[0],N=p[1],f=Object(s.c)(function(e){return e.optionChainReducer.data});return f&&f.filtered&&0===h&&(E(f.filtered.data),f.filtered.data[0]&&f.filtered.data[0].PE?N(f.filtered.data[0].PE.underlying):f.filtered.data[0]&&f.filtered.data[0].CE?N(f.filtered.data[0].PE.underlying):N("")),Object(l.useEffect)(function(){t("NIFTY")},[]),r.a.createElement("div",{className:"rows"},r.a.createElement(i.a,null),r.a.createElement("div",{className:"container1 mt-4"},r.a.createElement(m,{ExpDates:f&&f.records.expiryDates,timeStamp:f&&f.records.timestamp,selectOptions:g,underlyingValue:f&&f.records.underlyingValue,onChildChange:function(e){t(e)},onChildClick:function(e){E(f.records.data.filter(function(t){return t.expiryDate===e}))}}),r.a.createElement(d,{callPutData:h})),r.a.createElement(o.a,null))})}}]);
//# sourceMappingURL=4.4636b928.chunk.js.map