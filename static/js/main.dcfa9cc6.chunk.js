(this["webpackJsonpformula1-season-tracker"]=this["webpackJsonpformula1-season-tracker"]||[]).push([[0],{37:function(t,e,c){},57:function(t,e,c){},59:function(t,e,c){},65:function(t,e,c){},66:function(t,e,c){},67:function(t,e,c){},68:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),a=c(31),r=c.n(a),i=(c(37),c(15)),l=c(2),o=c(8),d=c.n(o),j=c(14),u=c(4),h=c(5),b=c(7),m=c(6),x=c(12),O=c.n(x),g=(c(57),c(0)),p=function(t){Object(b.a)(c,t);var e=Object(m.a)(c);function c(t){var n;return Object(u.a)(this,c),(n=e.call(this,t)).state={driverStandingsData:[]},n}return Object(h.a)(c,[{key:"componentDidMount",value:function(){var t=Object(j.a)(d.a.mark((function t(){var e=this;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://ergast.com/api/f1/current/driverstandings.json").then((function(t){e.setState({driverStandingsData:t.data.MRData.StandingsTable.StandingsLists[0].DriverStandings})}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.driverStandingsData,e=t.map((function(t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{className:"align-middle",children:t.position}),Object(g.jsx)("td",{className:"align-middle",children:Object(g.jsx)("img",{src:"/formula1-season-tracker/drivers/".concat(t.Driver.driverId,".png"),width:"100",height:"100",alt:t.Driver.driverId})}),Object(g.jsxs)("td",{className:"align-middle",children:[Object(g.jsx)("img",{src:"/formula1-season-tracker/flags/".concat(t.Driver.nationality,".png"),width:"32",height:"32",className:"flagimg",alt:t.Driver.nationality}),"".concat(t.Driver.givenName," ").concat(t.Driver.familyName)]}),Object(g.jsx)("td",{className:"align-middle",children:Object(g.jsx)("img",{src:"/formula1-season-tracker/constructors/".concat(t.Constructors[0].constructorId,".png"),width:"50",height:"50",alt:t.Constructors[0].constructorId})}),Object(g.jsx)("td",{className:"align-middle",children:t.Constructors[0].name}),Object(g.jsx)("td",{className:"align-middle points-column",children:t.points}),Object(g.jsx)("td",{className:"align-middle points-column",children:t.wins})]},t.Driver.driverId)}));return Object(g.jsx)(g.Fragment,{children:t&&t.length>0?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{className:"text-center text-light mt-2",children:"2021 DRIVER STANDINGS"}),Object(g.jsx)("div",{className:"container mt-4",children:Object(g.jsxs)("table",{className:"table text-light",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{scope:"col",children:"Pos."}),Object(g.jsx)("th",{scope:"col"}),Object(g.jsx)("th",{scope:"col",children:"Driver"}),Object(g.jsx)("th",{scope:"col"}),Object(g.jsx)("th",{scope:"col",children:"Constructor"}),Object(g.jsx)("th",{scope:"col",children:"Points"}),Object(g.jsx)("th",{scope:"col",children:"Wins"})]})}),Object(g.jsx)("tbody",{children:e})]})})]}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"text-center mt-5",children:Object(g.jsx)("div",{className:"spinner-border text-warning",role:"status",children:Object(g.jsx)("span",{className:"sr-only",children:"Loading..."})})})})})}}]),c}(n.Component),v=(c(59),function(t){Object(b.a)(c,t);var e=Object(m.a)(c);function c(t){var n;return Object(u.a)(this,c),(n=e.call(this,t)).state={seasonSchedule:[],nextRound:null},n}return Object(h.a)(c,[{key:"componentDidMount",value:function(){var t=Object(j.a)(d.a.mark((function t(){var e=this;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://ergast.com/api/f1/current.json").then((function(t){e.setState({seasonSchedule:t.data.MRData.RaceTable.Races})}));case 2:return t.next=4,O.a.get("https://ergast.com/api/f1/current/next.json").then((function(t){e.setState({nextRound:t.data.MRData.RaceTable.round})}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.seasonSchedule,c=t.nextRound,n=e.map((function(t){return Object(g.jsxs)("div",{className:"schedule-item bg-warning d-flex",children:[Object(g.jsx)("div",{className:"circuit-img-container",children:Object(g.jsx)("img",{src:"/formula1-season-tracker/circuits/".concat(t.Circuit.circuitId,".png"),width:"154.5",height:"116.25",alt:t.Circuit.circuitId,className:"mt-1"})}),Object(g.jsxs)("div",{className:"info-container mt-2 ml-2",children:[Object(g.jsx)("div",{children:"Round ".concat(t.round)}),Object(g.jsx)("div",{children:Object(g.jsx)("span",{className:"race-name",children:t.raceName})}),Object(g.jsx)("div",{children:Object(g.jsx)("em",{children:t.Circuit.circuitName})}),Object(g.jsx)("div",{children:Object(g.jsx)("em",{children:"".concat(t.date," / ").concat(t.time.substring(0,5)," (UTC)")})}),Object(g.jsx)("div",{children:Object(g.jsx)(i.b,{to:"/formula1-season-tracker/results/".concat(t.round),style:{textDecoration:"none"},className:"".concat(t.round&&t.round>=parseInt(c)?"disabled-link":""),children:Object(g.jsx)("button",{type:"button",className:"btn btn-primary mt-1 results-button ".concat(t.round&&t.round>=parseInt(c)?"disabled":""),children:"Race Results >"})})})]}),Object(g.jsxs)("div",{className:"ml-auto d-flex mr-4",children:[Object(g.jsx)("div",{className:"mt-3 mr-2 race-country-name",children:"".concat(t.Circuit.Location.locality," (").concat(t.Circuit.Location.country,")")}),Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:"/formula1-season-tracker/flags/scheduleflags/".concat(t.Circuit.Location.country,".png"),alt:t.Circuit.circuitId})})]})]},t.Circuit.circuitId)}));return Object(g.jsx)(g.Fragment,{children:e&&e.length>0?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{className:"text-center text-light mt-2",children:"2021 SEASON SCHEDULE"}),Object(g.jsx)("div",{className:"container",children:n})]}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"text-center mt-5",children:Object(g.jsx)("div",{className:"spinner-border text-warning",role:"status",children:Object(g.jsx)("span",{className:"sr-only",children:"Loading..."})})})})})}}]),c}(n.Component)),f=(c(65),function(t){Object(b.a)(c,t);var e=Object(m.a)(c);function c(t){var n;return Object(u.a)(this,c),(n=e.call(this,t)).state={nextRaceData:null},n}return Object(h.a)(c,[{key:"componentDidMount",value:function(){var t=Object(j.a)(d.a.mark((function t(){var e=this;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://ergast.com/api/f1/current/next.json").then((function(t){e.setState({nextRaceData:t.data.MRData.RaceTable.Races[0]})}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.props.constUri,e=this.state.nextRaceData;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"container-fluid link-nav-bar",children:Object(g.jsxs)("div",{className:"row link-nav-bar-row",children:[Object(g.jsx)(i.b,{to:"".concat(t),style:{textDecoration:"none"},className:"col-xs-4 col-md-2 bg-warning text-dark text-center",children:"Driver Standings"}),Object(g.jsx)(i.b,{to:"".concat(t,"/constructor"),style:{textDecoration:"none"},className:"col-xs-4 col-md-2 bg-warning text-dark text-center midlink",children:"Constructor Standings"}),Object(g.jsx)(i.b,{to:"".concat(t,"/schedule"),style:{textDecoration:"none"},className:"col-xs-4 col-md-2 bg-warning text-dark text-center",children:"Schedule"}),Object(g.jsxs)("div",{className:"col-xs-12 col-md-6 bg-dark text-light d-flex justify-content-around",children:[Object(g.jsx)("div",{className:"mt-3",children:"Next Race:"}),null!==e?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"mt-1",children:"".concat(e.raceName,", ").concat(e.Circuit.circuitName)}),Object(g.jsx)("div",{children:"".concat(e.date," / ").concat(e.time.substring(0,5)," (UTC)")})]}),Object(g.jsxs)("div",{className:"mt-1",children:[Object(g.jsx)("div",{children:"".concat(e.Circuit.Location.locality," (").concat(e.Circuit.Location.country,")")}),Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:"/formula1-season-tracker/flags/scheduleflags/".concat(e.Circuit.Location.country,".png"),width:"50",height:"50",alt:e.Circuit.Location.country})})]})]}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"spinner-border text-warning mt-3",role:"status",children:Object(g.jsx)("span",{className:"sr-only",children:"Loading..."})})})]})]})})})}}]),c}(n.Component)),N=function(t){Object(b.a)(c,t);var e=Object(m.a)(c);function c(t){var n;return Object(u.a)(this,c),(n=e.call(this,t)).state={constructorStandingsData:[]},n}return Object(h.a)(c,[{key:"componentDidMount",value:function(){var t=Object(j.a)(d.a.mark((function t(){var e=this;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://ergast.com/api/f1/current/constructorstandings.json").then((function(t){e.setState({constructorStandingsData:t.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings})}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.constructorStandingsData,e=t.map((function(t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{className:"align-middle",children:t.position}),Object(g.jsx)("td",{className:"align-middle",children:Object(g.jsx)("img",{src:"/formula1-season-tracker/constructors/".concat(t.Constructor.constructorId,".png"),width:"50",height:"50",alt:t.Constructor.constructorId})}),Object(g.jsx)("td",{className:"align-middle",children:t.Constructor.name}),Object(g.jsx)("td",{className:"align-middle",children:Object(g.jsx)("img",{src:"/formula1-season-tracker/cars/".concat(t.Constructor.constructorId,".png"),height:"50",alt:t.Constructor.constructorId})}),Object(g.jsx)("td",{className:"align-middle points-column",children:t.points}),Object(g.jsx)("td",{className:"align-middle points-column",children:t.wins})]},t.Constructor.constructorId)}));return Object(g.jsx)(g.Fragment,{children:t&&t.length>0?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{className:"text-center text-light mt-2",children:"2021 CONSTRUCTOR STANDINGS"}),Object(g.jsx)("div",{className:"container mt-4",children:Object(g.jsxs)("table",{className:"table text-light",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{scope:"col",children:"Pos."}),Object(g.jsx)("th",{scope:"col"}),Object(g.jsx)("th",{scope:"col",children:"Constructor"}),Object(g.jsx)("th",{scope:"col"}),Object(g.jsx)("th",{scope:"col",children:"Points"}),Object(g.jsx)("th",{scope:"col",children:"Wins"})]})}),Object(g.jsx)("tbody",{children:e})]})})]}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"text-center mt-5",children:Object(g.jsx)("div",{className:"spinner-border text-warning",role:"status",children:Object(g.jsx)("span",{className:"sr-only",children:"Loading..."})})})})})}}]),c}(n.Component),y=(c(66),function(t){Object(b.a)(c,t);var e=Object(m.a)(c);function c(){return Object(u.a)(this,c),e.apply(this,arguments)}return Object(h.a)(c,[{key:"getGridPositionDiff",value:function(t,e){var c=Math.abs(parseInt(t)-parseInt(e));return 0===parseInt(e)&&(c=Math.abs(parseInt(t)-20)),c}},{key:"positionImproved",value:function(t,e){var c=e;return 0===parseInt(e)&&(c=20),parseInt(c)>parseInt(t)}},{key:"render",value:function(){var t=this,e=this.props.raceResults,c=e&&null!==e&&e.Results.map((function(e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{className:"align-middle",children:e.position&&e.position}),Object(g.jsx)("td",{className:"align-middle",children:"".concat(e.Driver.givenName&&e.Driver.givenName," ").concat(e.Driver.familyName&&e.Driver.familyName)}),Object(g.jsx)("td",{className:"align-middle",children:e.Constructor.name&&e.Constructor.name}),Object(g.jsx)("td",{className:"align-middle",children:e.laps&&e.laps}),Object(g.jsx)("td",{className:"align-middle",children:e.grid&&"0"===e.grid?"Pits":e.grid}),Object(g.jsx)("td",{className:"align-middle",children:t.positionImproved(e.position,e.grid)?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("span",{className:"mr-1 text-success",children:t.getGridPositionDiff(e.position,e.grid)}),Object(g.jsx)("i",{className:"fas fa-angle-double-up text-success"})]}):parseInt(e.grid)<parseInt(e.position)?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("span",{className:"mr-1 text-danger",children:t.getGridPositionDiff(e.position,e.grid)}),Object(g.jsx)("i",{className:"fas fa-angle-double-down text-danger"})]}):""}),Object(g.jsx)("td",{className:"align-middle",children:e.Time&&e.Time.time}),Object(g.jsx)("td",{className:"align-middle",children:e.status&&e.status}),Object(g.jsxs)("td",{className:"align-middle",children:[e.points&&e.points,e.FastestLap&&"1"===e.FastestLap.rank&&Object(g.jsx)("i",{className:"ml-3 fas fa-stopwatch fa-xs"})]})]},e.Driver.driverId)}));return Object(g.jsx)(g.Fragment,{children:e&&null!==e?Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"container mt-4",children:Object(g.jsxs)("table",{className:"table table-sm text-light",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{scope:"col",children:"Pos."}),Object(g.jsx)("th",{scope:"col",children:"Driver"}),Object(g.jsx)("th",{scope:"col",children:"Constructor"}),Object(g.jsx)("th",{scope:"col",children:"Laps"}),Object(g.jsx)("th",{scope:"col",children:"Grid"}),Object(g.jsx)("th",{scope:"col"}),Object(g.jsx)("th",{scope:"col",children:"Time"}),Object(g.jsx)("th",{scope:"col",children:"Status"}),Object(g.jsx)("th",{scope:"col",children:"Points"})]})}),Object(g.jsx)("tbody",{children:c})]})})}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"text-center mt-5",children:Object(g.jsx)("div",{className:"spinner-border text-warning",role:"status",children:Object(g.jsx)("span",{className:"sr-only",children:"Loading..."})})})})})}}]),c}(n.Component)),D=function(t){Object(b.a)(c,t);var e=Object(m.a)(c);function c(){return Object(u.a)(this,c),e.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){var t=this.props.qualifyingResults,e=t&&null!==t&&t.QualifyingResults.map((function(t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{className:"align-middle",children:t.position&&t.position}),Object(g.jsx)("td",{className:"align-middle",children:"".concat(t.Driver.givenName," ").concat(t.Driver.familyName)}),Object(g.jsx)("td",{className:"align-middle",children:t.Constructor.name}),Object(g.jsx)("td",{className:"align-middle",children:t.Q1}),Object(g.jsx)("td",{className:"align-middle",children:t.Q2}),Object(g.jsx)("td",{className:"align-middle",children:t.Q3})]},t.Driver.driverId)}));return Object(g.jsx)(g.Fragment,{children:t&&null!==t?Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"container mt-4",children:Object(g.jsxs)("table",{className:"table table-sm text-light",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{scope:"col",children:"Pos."}),Object(g.jsx)("th",{scope:"col",children:"Driver"}),Object(g.jsx)("th",{scope:"col",children:"Constructor"}),Object(g.jsx)("th",{scope:"col",className:"pl-5",children:"Q1"}),Object(g.jsx)("th",{scope:"col",className:"pl-5",children:"Q2"}),Object(g.jsx)("th",{scope:"col",className:"pl-5",children:"Q3"})]})}),Object(g.jsx)("tbody",{children:e})]})})}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"text-center mt-5",children:Object(g.jsx)("div",{className:"spinner-border text-warning",role:"status",children:Object(g.jsx)("span",{className:"sr-only",children:"Loading..."})})})})})}}]),c}(n.Component),C=function(t){Object(b.a)(c,t);var e=Object(m.a)(c);function c(t){var n;return Object(u.a)(this,c),(n=e.call(this,t)).state={},n}return Object(h.a)(c,[{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("h1",{className:"text-center text-light",children:"Fastest Laps Results"})})}}]),c}(n.Component),R=(c(67),function(t){Object(b.a)(c,t);var e=Object(m.a)(c);function c(t){var n;return Object(u.a)(this,c),(n=e.call(this,t)).state={activeTab:"R",raceResults:null,qualifyingResults:null},n}return Object(h.a)(c,[{key:"componentDidMount",value:function(){var t=Object(j.a)(d.a.mark((function t(){var e,c=this;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match,t.next=3,O.a.get("https://ergast.com/api/f1/current/".concat(e.params.roundId,"/results.json")).then((function(t){c.setState({raceResults:t.data.MRData.RaceTable.Races[0]})}));case 3:return t.next=5,O.a.get("https://ergast.com/api/f1/current/".concat(e.params.roundId,"/qualifying.json")).then((function(t){c.setState({qualifyingResults:t.data.MRData.RaceTable.Races[0]})}));case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state,c=e.activeTab,n=e.raceResults,s=e.qualifyingResults;return Object(g.jsxs)(g.Fragment,{children:[n&&null!==n?Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("h1",{className:"text-center mt-5 text-light",children:"".concat(n.season," ").concat(n.raceName)})}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"text-center mt-5",children:Object(g.jsx)("div",{className:"spinner-border text-warning",role:"status",children:Object(g.jsx)("span",{className:"sr-only",children:"Loading..."})})})}),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("ul",{className:"nav nav-tabs",children:[Object(g.jsx)("li",{className:"nav-item",onClick:function(){t.setState({activeTab:"R"})},children:Object(g.jsx)("a",{className:"nav-link ".concat("R"===c?"active":""),children:"Race"})}),Object(g.jsx)("li",{className:"nav-item",onClick:function(){t.setState({activeTab:"Q"})},children:Object(g.jsx)("a",{className:"nav-link ".concat("Q"===c?"active":""),children:"Qualifying"})})]}),"R"===c?Object(g.jsx)(y,{raceResults:n}):"Q"===c?Object(g.jsx)(D,{qualifyingResults:s}):"F"===c?Object(g.jsx)(C,{}):Object(g.jsx)(g.Fragment,{})]})]})}}]),c}(n.Component));var k=function(){var t="/formula1-season-tracker";return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(i.a,{children:[Object(g.jsx)(f,{constUri:t}),Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{path:"".concat(t),exact:!0,component:p}),Object(g.jsx)(l.a,{path:"".concat(t,"/constructor"),exact:!0,component:N}),Object(g.jsx)(l.a,{path:"".concat(t,"/schedule"),exact:!0,component:v}),Object(g.jsx)(l.a,{path:"".concat(t,"/results/:roundId"),exact:!0,component:R})]})]})})},S=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,69)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;c(t),n(t),s(t),a(t),r(t)}))};r.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(k,{})}),document.getElementById("root")),S()}},[[68,1,2]]]);
//# sourceMappingURL=main.dcfa9cc6.chunk.js.map