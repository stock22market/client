(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(36)},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),u=a(10),s=a(11),i=a(13),l=a(12),d=a(14),b=a(39),O=a(40),j=a(41),A=r.a.lazy(function(){return a.e(3).then(a.bind(null,51))}),p=r.a.lazy(function(){return Promise.all([a.e(4),a.e(5)]).then(a.bind(null,52))}),E=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cards"},r.a.createElement(b.a,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(O.a,null,r.a.createElement(j.a,{path:"/strategy-builder/:strike/:opt/:date",component:p}),r.a.createElement(j.a,{path:"/strategy-builder",component:p}),r.a.createElement(j.a,{path:"/OptionChain",component:A}),r.a.createElement(j.a,{path:"",component:A})))))}}]),t}(n.Component),f=a(4),h=a(19),T=a(15);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(35);var m=a(2),y={data:null,error:"",filt:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FetchData":return Object(m.a)({},e,{data:t.data});default:return e}},w={webInfo:null,skill:null,country:null,error:""},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HEADERDATA":return Object(m.a)({},e,{webInfo:t.data});case"SKILLDATA":return Object(m.a)({},e,{skill:t.data});case"COUNTRYDATA":return Object(m.a)({},e,{country:t.data});case"CITYDATA":return Object(m.a)({},e,{city:t.data});case"COMPANYDATA":return Object(m.a)({},e,{company:t.data});case"INDUSTRYDATA":return Object(m.a)({},e,{industries:t.data});case"WORKTYPEDATA":return Object(m.a)({},e,{worktypes:t.data});case"LANGUAGEDATA":return Object(m.a)({},e,{languages:t.data});case"USERDATA":return Object(m.a)({},e,{users:t.data});case"JOBAPPLYSTATUSDATA":return Object(m.a)({},e,{jobApplyStatus:t.data});case"ERROR":return Object(m.a)({},e,{error:t.msg});default:return e}},v={info:null,error:""},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILEDATA":return Object(m.a)({},e,{info:t.data});case"SKILL":return e.info.jobSkill=t.data.skill,Object(m.a)({},e);case"PROFILEUPDATE":return e.info.users=t.data.users,Object(m.a)({},e);case"INDUSTRY":return e.info.jobIndustry=t.data.industry,Object(m.a)({},e);case"EXPERIENCE":return e.info.userExp=t.data.employment,Object(m.a)({},e);case"LANGUAGE":return e.info.jobLanguage=t.data.language,Object(m.a)({},e);case"WORKTYPE":return e.info.jobWorkType=t.data.workType,Object(m.a)({},e);case"CITY":return e.info.jobCity=t.data.city,Object(m.a)({},e);case"ACCESS":return e.info.jobAccess=t.data.jobAccess,Object(m.a)({},e);case"POSTJOB":return e.postJob=t.data,Object(m.a)({},e);case"APPLYJOB":return e.info.jobApplyText=t.data.jobApplyText,Object(m.a)({},e);case"FETCHAPPLYJOB":return e.info.jobApply=t.data,Object(m.a)({},e);case"FETCHVIEWJOB":return e.info.jobView=t.data,Object(m.a)({},e);case"APPLYJOBUPDATE":return Object(m.a)({},e);case"VERIFYDATA":return Object(m.a)({},e,{webVerify:t.data});case"ERROR":return Object(m.a)({},e,{error:t.msg});default:return e}},P=Object(f.c)({optionChainReducer:g,headerReducer:R,profileReducer:D}),I=Object(f.d)(P,Object(f.a)(h.a));o.a.hydrate(r.a.createElement(T.a,{store:I},r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.8a1847f1.chunk.js.map