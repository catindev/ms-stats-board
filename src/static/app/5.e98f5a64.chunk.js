webpackJsonp([5],{170:function(e,t,r){"use strict";var s=r(0),a=r.n(s),n=r(188);r.n(n);t.a=function(e){var t=e.title,r=e.children;return a.a.createElement("section",{className:"bStep"},a.a.createElement("header",{className:"bStep__header"},t),r)}},171:function(e,t,r){"use strict";var s=r(0),a=r.n(s),n=r(189);r.n(n);t.a=function(e){var t=e.title,r=e.details;return a.a.createElement("article",{className:"bUsercard"},a.a.createElement("header",{className:"bUsercard__header"},t),a.a.createElement("div",{className:"bUsercard__detail"},r))}},178:function(e,t,r){t=e.exports=r(80)(!0),t.push([e.i,".bStep{background-color:#bd72b6;border-radius:4px;margin:5px;padding:12px;min-width:270px;width:270px}.bStep__header{font-weight:700;font-size:17px;line-height:20px;color:#fff;cursor:-webkit-grab;cursor:grab}","",{version:3,sources:["/Users/user/Dev/ms-stats-react/src/Progress/Step/styles.css"],names:[],mappings:"AAAA,OACE,yBAA0B,AAC1B,kBAAmB,AACnB,WAAgB,AAChB,aAAc,AACd,gBAAiB,AACjB,WAAa,CACd,AAED,eACE,gBAAiB,AACjB,eAAgB,AAChB,iBAAkB,AAClB,WAAY,AACZ,oBAAqB,AACrB,WAAa,CACd",file:"styles.css",sourcesContent:[".bStep {\n  background-color: #BD72B6;\n  border-radius: 4px;\n  margin: 5px 5px;\n  padding: 12px;\n  min-width: 270px;\n  width: 270px;\n}\n\n.bStep__header {\n  font-weight: 700;\n  font-size: 17px;\n  line-height: 20px;\n  color: #fff;\n  cursor: -webkit-grab;\n  cursor: grab;\n}"],sourceRoot:""}])},179:function(e,t,r){t=e.exports=r(80)(!0),t.push([e.i,".bUsercard{background-color:#fff;border-radius:4px;margin-top:10px;border:1px solid #eee;padding:6px 8px;cursor:pointer}.bUsercard:hover{background-color:#faf9f7;-webkit-box-shadow:5px 5px 0 #353b3f;box-shadow:5px 5px 0 #353b3f}.bUsercard__header{font-weight:500;font-size:15px;line-height:18px}.bUsercard__detail{font-size:12px;color:#939393}","",{version:3,sources:["/Users/user/Dev/ms-stats-react/src/Progress/Usercard/styles.css"],names:[],mappings:"AAAA,WACI,sBAAuB,AACvB,kBAAmB,AACnB,gBAAiB,AACjB,sBAAuB,AACvB,gBAAiB,AACjB,cAAgB,CACnB,AACD,iBACI,yBAA0B,AAC1B,qCAAsC,AAC9B,4BAA8B,CACzC,AAED,mBACI,gBAAiB,AACjB,eAAgB,AAChB,gBAAkB,CAErB,AAED,mBACI,eAAgB,AAChB,aAAe,CAClB",file:"styles.css",sourcesContent:[".bUsercard {\n    background-color: #FFF;\n    border-radius: 4px;\n    margin-top: 10px;    \n    border: solid #eee 1px;\n    padding: 6px 8px;\n    cursor: pointer;\n}\n.bUsercard:hover {\n    background-color: #FAF9F7;\n    -webkit-box-shadow: 5px 5px 0 #353B3F;\n            box-shadow: 5px 5px 0 #353B3F;\n}\n\n.bUsercard__header {\n    font-weight: 500;\n    font-size: 15px;\n    line-height: 18px;\n    /* cursor: grab; */\n}\n\n.bUsercard__detail {\n    font-size: 12px;\n    color: #939393;\n}"],sourceRoot:""}])},180:function(e,t,r){t=e.exports=r(80)(!0),t.push([e.i,".fakeFunnel{width:100%;height:220px;background:url(http://stats.mindsales-crm.com/static/app/fake-funnel.png) 0 100% no-repeat}.bCustomersBoard{padding-bottom:1rem;overflow:auto;color:#393939;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:start;align-items:flex-start}.bCustomersBoard::-webkit-scrollbar-track{background-color:#deb9db}.bCustomersBoard::-webkit-scrollbar{width:2px;height:7px;background-color:#bd72b6}.bCustomersBoard::-webkit-scrollbar-thumb{background-color:#bd72b6}","",{version:3,sources:["/Users/user/Dev/ms-stats-react/src/Progress/styles.css"],names:[],mappings:"AAAA,YACE,WAAY,AACZ,aAAc,AACd,0FAAiG,CAClG,AAED,iBAEE,oBAAqB,AACrB,cAAe,AACf,cAAe,AACf,oBAAqB,AACrB,aAAc,AACd,uBAAwB,AACpB,mBAAoB,AACxB,qBAAsB,AAClB,sBAAwB,CAC7B,AAED,0CACC,wBAA0B,CAC1B,AAED,oCACE,UAAW,AACX,WAAY,AACb,wBAA0B,CAC1B,AAED,0CACC,wBAA0B,CAC1B",file:"styles.css",sourcesContent:[".fakeFunnel {\n  width: 100%;\n  height: 220px;\n  background: url(http://stats.mindsales-crm.com/static/app/fake-funnel.png) left bottom no-repeat;\n}\n\n.bCustomersBoard {\n  /* background-color: #23719F; */\n  padding-bottom: 1rem;\n  overflow: auto;\n  color: #393939;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: start;\n      align-items: flex-start;\n}\n\n.bCustomersBoard::-webkit-scrollbar-track {\n\tbackground-color: #DEB9DB;\n}\n\n.bCustomersBoard::-webkit-scrollbar {\n  width: 2px;\n  height: 7px;\n\tbackground-color: #BD72B6;\n}\n\n.bCustomersBoard::-webkit-scrollbar-thumb {\n\tbackground-color: #BD72B6;\n}"],sourceRoot:""}])},188:function(e,t,r){var s=r(178);"string"===typeof s&&(s=[[e.i,s,""]]);var a={};a.transform=void 0;r(81)(s,a);s.locals&&(e.exports=s.locals)},189:function(e,t,r){var s=r(179);"string"===typeof s&&(s=[[e.i,s,""]]);var a={};a.transform=void 0;r(81)(s,a);s.locals&&(e.exports=s.locals)},190:function(e,t,r){var s=r(180);"string"===typeof s&&(s=[[e.i,s,""]]);var a={};a.transform=void 0;r(81)(s,a);s.locals&&(e.exports=s.locals)},86:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(0),a=r.n(s),n=r(190),o=(r.n(n),r(171)),A=r(170);t.default=function(e){e.match;return a.a.createElement("div",{className:"bContent"},a.a.createElement("h1",null,"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0441\u0434\u0435\u043b\u043a\u0438 "),a.a.createElement("div",{className:"innerContent"},a.a.createElement("p",{className:"bDescription"},"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0441\u0434\u0435\u043b\u043a\u0438 \u2014 \u043d\u0430\u0433\u043b\u044f\u0434\u043d\u0430\u044f \u0432\u043e\u0440\u043e\u043d\u043a\u0430 \u043f\u0440\u043e\u0434\u0430\u0436 \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043d\u044f\u0442\u044c, \u043d\u0430 \u043a\u0430\u043a\u043e\u043c \u044d\u0442\u0430\u043f\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432\u0441\u0435 \u0432\u0430\u0448\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u044b."),a.a.createElement("p",{className:"bDescription"},"\u042d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0435\u0449\u0451 \u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0438 \u0434\u043e\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f. \u041c\u044b \u0441\u043e\u043e\u0431\u0449\u0438\u043c \u0432\u0430\u043c, \u043a\u043e\u0433\u0434\u0430 \u043e\u043d\u0430 \u0431\u0443\u0434\u0435\u0442 \u0433\u043e\u0442\u043e\u0432\u0430."),a.a.createElement("div",{className:"bCustomersBoard"},a.a.createElement(A.a,{title:"\u0417\u0432\u043e\u043d\u043a\u0438"},a.a.createElement(o.a,{title:"\u0417\u0430\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0442\u0430\u043f\u0438\u0440",details:"Test customer description"}),a.a.createElement(o.a,{title:"\u0423\u0442\u043e\u043d\u0447\u0451\u043d\u043d\u044b\u0439 \u044f\u0433\u0443\u0430\u0440",details:"Test customer description"}),a.a.createElement(o.a,{title:"\u0427\u0443\u0434\u043d\u0430\u044f \u0430\u043a\u0443\u043b\u0430",details:"Test customer description"}),a.a.createElement(o.a,{title:"\u0421\u0442\u0438\u043b\u044c\u043d\u0430\u044f \u0431\u0435\u043b\u043a\u0430",details:"Test customer description"}),a.a.createElement(o.a,{title:"\u0428\u0438\u043a\u0430\u0440\u043d\u044b\u0439 \u043a\u043e\u0442",details:"Test customer description"})),a.a.createElement(A.a,{title:"\u0412\u0441\u0442\u0440\u0435\u0447\u0430"},a.a.createElement(o.a,{title:"\u042d\u043d\u0435\u0440\u0433\u0438\u0447\u043d\u0430\u044f \u043b\u044f\u0433\u0443\u0448\u043a\u0430",details:"Test customer description"}),a.a.createElement(o.a,{title:"\u041e\u0431\u0432\u043e\u0440\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043a\u0430\u043f\u0438\u0431\u0430\u0440\u0430",details:"Test customer description"}),a.a.createElement(o.a,{title:"\u041c\u0435\u0447\u0442\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043c\u0443\u0440\u0430\u0432\u044c\u0435\u0434",details:"Test customer description"}),a.a.createElement(o.a,{title:"\u0411\u0435\u0441\u043f\u043e\u0434\u043e\u0431\u043d\u0430\u044f \u0437\u0435\u0431\u0440\u0430",details:"Test customer description"})),a.a.createElement(A.a,{title:"\u0426\u0435\u043d\u043e\u0432\u043e\u0435"},a.a.createElement(o.a,{title:"\u0416\u0438\u0437\u043d\u0435\u0440\u0430\u0434\u043e\u0441\u0442\u043d\u044b\u0439 \u0444\u043b\u0430\u043c\u0438\u043d\u0433\u043e",details:"Test customer description"}),a.a.createElement(o.a,{title:"\u0414\u0440\u0443\u0436\u0435\u043b\u044e\u0431\u043d\u044b\u0439 \u0432\u0430\u0440\u0430\u043d",details:"Test customer description"})),a.a.createElement(A.a,{title:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440"},a.a.createElement(o.a,{title:"\u042d\u043d\u0435\u0440\u0433\u0438\u0447\u043d\u0430\u044f \u0443\u043b\u0438\u0442\u043a\u0430",details:"Test customer description"})))))}}});
//# sourceMappingURL=5.e98f5a64.chunk.js.map